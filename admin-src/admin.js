const $ = (id) => document.getElementById(id);
const el = (tag, text, className) => {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  if (className) node.className = className;
  return node;
};
let csrf = '';
let snapshot;
let page = 1;
const selected = new Set();
let pendingAction;
let refreshing = false;
let authSettings = { provider: 'password', setupRequired: false, google: null };
let googleLibrary;
const pageSize = 25;
const setupToken = new URLSearchParams(location.hash.slice(1)).get('setup');
if (setupToken) history.replaceState(null, '', '/admin/');
const jobLabels = {
  'scan-all': 'Scan all record links',
  'scan-suspended': 'Recheck suspended & hidden',
  'scan-selected': 'Recheck selected records',
  suspend: 'Suspend records',
  hide: 'Hide records',
  reinstate: 'Reinstate records',
  delete: 'Delete records',
  validate: 'Validate catalog',
  publish: 'Validate & publish',
};
const formatDate = (value) =>
  value
    ? new Intl.DateTimeFormat(undefined, {
        dateStyle: 'medium',
        ...(value.includes('T') ? { timeStyle: 'short' } : {}),
      }).format(new Date(value))
    : 'Never';
function message(text, error = false) {
  $('message').textContent = text;
  $('message').className = error ? 'error' : '';
  $('message').hidden = !text;
}
async function api(path, payload) {
  const response = await fetch(`/admin/api/${path}`, {
    credentials: 'same-origin',
    cache: 'no-store',
    ...(payload
      ? {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrf },
          body: JSON.stringify(payload),
        }
      : {}),
  });
  const data = await response.json();
  if (!response.ok) {
    if (response.status === 401 && !['login', 'google/login'].includes(path))
      showLogin();
    throw new Error(data.error ?? `Request failed (${response.status}).`);
  }
  return data;
}
function showLogin(settings = authSettings) {
  authSettings = settings;
  const setupRequired = settings.setupRequired;
  csrf = '';
  snapshot = undefined;
  selected.clear();
  $('records').replaceChildren();
  $('jobs').replaceChildren();
  $('dashboard').hidden = true;
  $('logout').hidden = true;
  $('login').hidden = false;
  $('google-setup').hidden = true;
  $('google-login').hidden = true;
  $('google-button').replaceChildren();
  if (settings.provider === 'google') {
    $('login-form').hidden = true;
    const enrollment = settings.google.enrollmentRequired;
    $('login-title').textContent = enrollment
      ? 'Set up Google sign-in'
      : 'Administration';
    $('login-description').textContent = enrollment
      ? setupToken
        ? 'Finish the one-time setup below, then sign in with your authorized Google account.'
        : 'Google sign-in is being configured. Open your private enrollment link to finish setup.'
      : 'Continue with your enrolled Google account to administer the directory.';
    $('google-setup').hidden = !enrollment || !setupToken;
    $('google-client-id').value = settings.google.clientId ?? '';
    if (settings.google.clientId && (!enrollment || setupToken))
      void renderGoogleButton();
    return;
  }
  $('login-title').textContent = setupRequired
    ? 'Set your admin password'
    : 'Administration';
  $('login-description').textContent = setupRequired
    ? setupToken
      ? 'Choose a password of at least 14 characters. This setup link can be used once.'
      : 'Use the private setup link supplied by your server administrator to set the initial password.'
    : 'Sign in to review the directory and run maintenance jobs.';
  $('password').autocomplete = setupRequired
    ? 'new-password'
    : 'current-password';
  $('password').minLength = setupRequired ? 14 : 1;
  $('login-form').hidden = setupRequired && !setupToken;
  $('login-form').dataset.setup = String(setupRequired);
  $('login-submit').textContent = setupRequired
    ? 'Set password & sign in'
    : 'Sign in';
}
function loadGoogleLibrary() {
  if (window.google?.accounts?.id) return Promise.resolve();
  if (!googleLibrary)
    googleLibrary = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.onload = resolve;
      script.onerror = () =>
        reject(
          new Error(
            'Google sign-in could not load. Check your connection and browser settings, then reload.',
          ),
        );
      document.head.append(script);
    });
  return googleLibrary;
}
async function renderGoogleButton() {
  $('google-login').hidden = false;
  $('google-signin-status').textContent = 'Loading Google sign-in…';
  $('google-button').replaceChildren();
  try {
    const [challenge] = await Promise.all([
      api('google/challenge', { token: setupToken }),
      loadGoogleLibrary(),
    ]);
    window.google.accounts.id.initialize({
      client_id: challenge.clientId,
      nonce: challenge.nonce,
      ux_mode: 'popup',
      auto_select: false,
      callback: async (response) => {
        $('google-signin-status').textContent =
          'Verifying your Google account…';
        try {
          const session = await api('google/login', {
            credential: response.credential,
            token: setupToken,
          });
          authSettings = session;
          csrf = session.csrf;
          message('');
          await refresh();
        } catch (error) {
          message(error.message, true);
          void renderGoogleButton();
        }
      },
    });
    window.google.accounts.id.renderButton($('google-button'), {
      theme: 'outline',
      size: 'large',
      text: 'continue_with',
      width: 320,
    });
    $('google-signin-status').textContent =
      'Only the authorized Google account can access this portal.';
  } catch (error) {
    $('google-signin-status').textContent = error.message;
  }
}
async function refresh() {
  if (!csrf || refreshing) return;
  refreshing = true;
  try {
    snapshot = await api('status');
    $('login').hidden = true;
    $('dashboard').hidden = false;
    $('logout').hidden = false;
    $('snapshot-date').textContent =
      `Availability snapshot · ${formatDate(snapshot.availabilityDate)}`;
    $('service-status').textContent = snapshot.working
      ? 'Maintenance job running'
      : 'Service online';
    $('publication').hidden = !snapshot.publication.pending;
    $('publication').textContent =
      'A record change is saved but publication is pending or failed. Review the job history, then use “Validate & publish current state” to retry.';
    renderMetrics();
    renderRecords();
    renderJobs();
    document
      .querySelectorAll('[data-job], [data-action], #publish')
      .forEach((node) => {
        node.disabled =
          snapshot.working || (node.dataset.action && selected.size === 0);
      });
  } catch (error) {
    message(error.message, true);
  } finally {
    refreshing = false;
  }
}
function renderMetrics() {
  const entries = [
    ['all', 'Total records', snapshot.records.length],
    [
      'published',
      'Published',
      snapshot.records.filter((r) => r.status === 'published').length,
    ],
    [
      'dead',
      'With dead links',
      snapshot.records.filter((r) => r.status !== 'deleted' && r.deadLinks)
        .length,
    ],
    [
      'suspended',
      'Suspended',
      snapshot.records.filter((r) => r.status === 'suspended').length,
    ],
    [
      'hidden',
      'Hidden',
      snapshot.records.filter((r) => r.status === 'hidden').length,
    ],
    [
      'deleted',
      'Deleted',
      snapshot.records.filter((r) => r.status === 'deleted').length,
    ],
  ];
  $('metrics').replaceChildren(
    ...entries.map(([filter, title, count]) => {
      const button = el(
        'button',
        undefined,
        `metric${$('filter').value === filter ? ' active' : ''}`,
      );
      button.append(
        el(
          'strong',
          count.toLocaleString(),
          filter === 'dead' && count ? 'red' : '',
        ),
        el('small', title),
      );
      button.addEventListener('click', () => {
        $('filter').value = filter;
        page = 1;
        renderMetrics();
        renderRecords();
      });
      return button;
    }),
  );
}
function filteredRecords() {
  const query = $('search').value.toLowerCase().trim();
  const filter = $('filter').value;
  return snapshot.records.filter((r) => {
    if (
      query &&
      !`${r.name} ${r.sponsor} ${r.id} ${r.geography}`
        .toLowerCase()
        .includes(query)
    )
      return false;
    if (filter === 'all') return true;
    if (filter === 'dead') return r.status !== 'deleted' && r.deadLinks > 0;
    if (filter === 'uncertain')
      return r.status !== 'deleted' && r.uncertainLinks > 0;
    if (filter === 'overdue')
      return (
        r.status === 'published' &&
        Date.now() - Date.parse(r.verified) > 365 * 86400000
      );
    if (filter === 'recovered')
      return ['hidden', 'suspended'].includes(r.status) && r.canReinstate;
    return r.status === filter;
  });
}
function renderRecords() {
  const records = filteredRecords();
  page = Math.max(1, Math.min(page, Math.ceil(records.length / pageSize)));
  const visible = records.slice((page - 1) * pageSize, page * pageSize);
  $('record-count').textContent =
    `${records.length.toLocaleString()} matching records`;
  $('records').replaceChildren(
    ...visible.map((record) => {
      const row = el(
        'tr',
        undefined,
        selected.has(record.id) ? 'selected' : '',
      );
      const checkbox = el('input');
      checkbox.type = 'checkbox';
      checkbox.checked = selected.has(record.id);
      checkbox.setAttribute('aria-label', `Select ${record.name}`);
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) selected.add(record.id);
        else selected.delete(record.id);
        renderRecords();
      });
      const checkCell = el('td');
      checkCell.append(checkbox);
      const name = el('td');
      name.append(el('strong', record.name), el('small', record.sponsor));
      const status = el('td');
      status.append(el('span', record.status, `badge ${record.status}`));
      const links = el('td');
      links.append(
        el(
          'span',
          record.deadLinks
            ? `${record.deadLinks} dead link${record.deadLinks === 1 ? '' : 's'}`
            : record.uncertainLinks
              ? `${record.uncertainLinks} uncertain`
              : 'Reachable',
          `link-state ${record.deadLinks ? 'dead' : record.uncertainLinks ? 'uncertain' : 'healthy'}`,
        ),
      );
      if (record.deadLinks && record.uncertainLinks)
        links.append(el('small', `${record.uncertainLinks} uncertain`));
      const date = el('td', formatDate(record.checkedAt));
      const detail = el('td');
      const button = el('button', 'Inspect');
      button.addEventListener('click', () => showDetail(record));
      detail.append(button);
      row.append(checkCell, name, status, links, date, detail);
      return row;
    }),
  );
  if (!records.length) {
    const row = el('tr');
    const cell = el('td', 'No records match these filters.');
    cell.colSpan = 6;
    row.append(cell);
    $('records').append(row);
  }
  $('selection-count').textContent = `${selected.size} selected`;
  $('select-page').checked =
    visible.length > 0 && visible.every((r) => selected.has(r.id));
  $('select-page').indeterminate =
    visible.some((r) => selected.has(r.id)) && !$('select-page').checked;
  $('range').textContent = records.length
    ? `${(page - 1) * pageSize + 1}–${Math.min(page * pageSize, records.length)} of ${records.length.toLocaleString()}`
    : '0 records';
  $('page-label').textContent = `Page ${page}`;
  $('previous').disabled = page <= 1;
  $('next').disabled = page * pageSize >= records.length;
  document.querySelectorAll('[data-action]').forEach((node) => {
    node.disabled = !selected.size || snapshot.working;
  });
}
function renderJobs() {
  $('jobs').replaceChildren(
    ...snapshot.jobs.map((job) => {
      const row = el('article', undefined, 'job-row');
      const heading = el('div', undefined, 'job-heading');
      heading.append(
        el('strong', jobLabels[job.action]),
        el('span', job.status, job.status),
        el('time', formatDate(job.createdAt)),
      );
      row.append(heading, el('p', job.message ?? 'Waiting to run.'));
      if (job.total && job.status === 'running') {
        const progress = el('progress');
        progress.max = job.total;
        progress.value = job.completed ?? 0;
        progress.setAttribute('aria-label', 'Link check progress');
        row.append(progress);
      }
      const details = el('details');
      details.append(el('summary', `Job details · ${job.id}`));
      details.append(
        el(
          'pre',
          [
            job.ids.length ? `Records: ${job.ids.join(', ')}` : '',
            job.reason ? `Reason: ${job.reason}` : '',
            ...(job.log ?? []),
            job.output ?? '',
          ]
            .filter(Boolean)
            .join('\n'),
        ),
      );
      row.append(details);
      return row;
    }),
  );
  if (!snapshot.jobs.length)
    $('jobs').append(
      el(
        'p',
        'No jobs have run yet. Start with a link scan or catalog validation.',
        'muted',
      ),
    );
}
function showDetail(record) {
  const content = $('detail-content');
  content.replaceChildren(
    el('h2', record.name),
    el('p', `${record.id} · ${record.sponsor}`),
    el('span', record.status, `badge ${record.status}`),
  );
  if (record.reason) content.append(el('p', `Reason: ${record.reason}`));
  if (record.hold)
    content.append(
      el(
        'p',
        `Canonical hold: ${record.hold}. Editorial holds require a review of the canonical catalog.`,
        'notice',
      ),
    );
  content.append(
    el(
      'p',
      `Links checked ${formatDate(record.checkedAt)}. Editorial evidence reviewed ${formatDate(record.verified)}.`,
      'muted',
    ),
  );
  for (const [role, link] of Object.entries(record.links)) {
    const item = el('div', undefined, 'detail-link');
    item.append(
      el(
        'strong',
        `${role} · ${link.status}${link.httpStatus ? ` (${link.httpStatus})` : ''}${link.errorCode ? ` · ${link.errorCode}` : ''}`,
      ),
    );
    const a = el('a', link.url);
    try {
      const url = new URL(link.url);
      if (['http:', 'https:'].includes(url.protocol)) {
        a.href = url.href;
        a.target = '_blank';
        a.rel = 'noreferrer noopener';
      }
    } catch {
      /* Invalid URLs remain text. */
    }
    item.append(a);
    if (link.finalUrl)
      item.append(el('p', `Redirected to ${link.finalUrl}`, 'muted'));
    content.append(item);
  }
  $('detail-dialog').showModal();
}
async function submitJob(action, extra = {}) {
  try {
    await api('jobs', {
      action,
      ids:
        (action.startsWith('scan-') && action !== 'scan-selected') ||
        ['validate', 'publish'].includes(action)
          ? []
          : [...selected],
      ...extra,
    });
    message(
      `${jobLabels[action]} started. Follow its progress in Job history.`,
    );
    if (!action.startsWith('scan-')) selected.clear();
    await refresh();
    return true;
  } catch (error) {
    message(error.message, true);
    return false;
  }
}
function startAction(action) {
  if (selected.size > 100) {
    message('Select at most 100 records per job.', true);
    return;
  }
  if (action === 'scan-selected') {
    void submitJob(action);
    return;
  }
  pendingAction = action;
  $('action-title').textContent =
    `${jobLabels[action]} · ${selected.size} selected`;
  $('action-description').textContent = {
    suspend:
      'Remove these records from listings and keep a direct page explaining the suspension. The reason will be public.',
    hide: 'Remove these records from public listings and direct record views. They remain available here for rechecking.',
    reinstate:
      'Restore these records after a healthy link check within the last 24 hours. Canonical editorial holds must be resolved in the catalog. This does not advance the editorial review date.',
    delete:
      'Delete these records from the public directory and direct record views. An archived copy and job history are retained for recovery and audit.',
  }[action];
  $('action-records').replaceChildren(
    ...snapshot.records
      .filter((r) => selected.has(r.id))
      .map((r) => el('li', `${r.name} (${r.id})`)),
  );
  $('reason').value = '';
  $('delete-word').value = '';
  $('delete-confirm').hidden = action !== 'delete';
  $('delete-word').required = action === 'delete';
  $('action-dialog').showModal();
}
$('login-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  $('login-submit').disabled = true;
  message('');
  try {
    const session = await api(
      $('login-form').dataset.setup === 'true' ? 'setup' : 'login',
      { password: $('password').value, token: setupToken },
    );
    csrf = session.csrf;
    authSettings = session;
    $('password').value = '';
    await refresh();
  } catch (error) {
    message(error.message, true);
  } finally {
    $('login-submit').disabled = false;
  }
});
$('logout').addEventListener('click', async () => {
  try {
    await api('logout', {});
    window.google?.accounts?.id.disableAutoSelect();
    showLogin();
    message('Signed out.');
  } catch (error) {
    message(error.message, true);
  }
});
$('refresh').addEventListener('click', () => {
  void refresh();
});
$('search').addEventListener('input', () => {
  page = 1;
  renderRecords();
});
$('filter').addEventListener('change', () => {
  page = 1;
  renderMetrics();
  renderRecords();
});
$('previous').addEventListener('click', () => {
  page--;
  renderRecords();
});
$('next').addEventListener('click', () => {
  page++;
  renderRecords();
});
$('clear-selection').addEventListener('click', () => {
  selected.clear();
  renderRecords();
});
$('select-page').addEventListener('change', () => {
  for (const r of filteredRecords().slice(
    (page - 1) * pageSize,
    page * pageSize,
  )) {
    if ($('select-page').checked) selected.add(r.id);
    else selected.delete(r.id);
  }
  renderRecords();
});
document.querySelectorAll('[data-job]').forEach((node) =>
  node.addEventListener('click', () => {
    void submitJob(node.dataset.job);
  }),
);
document
  .querySelectorAll('[data-action]')
  .forEach((node) =>
    node.addEventListener('click', () => startAction(node.dataset.action)),
  );
$('publish').addEventListener('click', () => {
  if (
    window.confirm(
      'Validate and publish the current working catalog to gosdir.com through Apache?',
    )
  )
    void submitJob('publish');
});
$('cancel-action').addEventListener('click', () => $('action-dialog').close());
$('close-detail').addEventListener('click', () => $('detail-dialog').close());
$('action-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  if (pendingAction === 'delete' && $('delete-word').value !== 'DELETE') {
    $('delete-word').setCustomValidity('Type DELETE exactly.');
    $('delete-word').reportValidity();
    return;
  }
  $('confirm-action').disabled = true;
  if (
    await submitJob(pendingAction, {
      reason: $('reason').value,
      confirm: pendingAction === 'delete' ? 'DELETE' : 'CONFIRM',
    })
  )
    $('action-dialog').close();
  $('confirm-action').disabled = false;
});
$('delete-word').addEventListener('input', () =>
  $('delete-word').setCustomValidity(''),
);
setInterval(() => {
  if (
    csrf &&
    !document.hidden &&
    !$('action-dialog').open &&
    !$('detail-dialog').open
  )
    void refresh();
}, 8000);
try {
  const session = await api('session');
  authSettings = session;
  if (session.authenticated) {
    csrf = session.csrf;
    await refresh();
  } else showLogin(session);
} catch (error) {
  showLogin();
  message('The administrative service is unavailable. ' + error.message, true);
}
$('google-config-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  $('google-config-submit').disabled = true;
  try {
    const settings = await api('google/configure', {
      clientId: $('google-client-id').value.trim(),
      token: setupToken,
    });
    message(
      'Google client saved. Continue with your authorized Google account to finish enrollment.',
    );
    showLogin(settings);
    $('google-instructions').open = false;
  } catch (error) {
    message(error.message, true);
  } finally {
    $('google-config-submit').disabled = false;
  }
});
