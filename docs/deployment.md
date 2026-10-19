# Apache deployment

The production document root is the repository root at `/usr/web/gosdir.com`.
On the FreeBSD production host, install locked dependencies with
`npm ci --ignore-scripts`.

This repository is not an OpenAI Sites or Cloudflare Workers deployment. Do not
add an external hosting manifest or publish it to another provider. Production
changes belong in this checkout and use the Apache build below.

Generate the browser-ready static site with:

```sh
npm run build:apache
```

The command builds into a temporary staging directory, publishes the new
fingerprinted assets first, then atomically replaces each generated HTML entry
point. It retains the immediately previous asset generation so a browser holding
older HTML cannot request a just-deleted bundle. It also writes an `index.html`
entry point for each public route so Apache can serve direct visits without a
rewrite module.

The source application remains in `app/`, `components/`, `lib/`, and
`static-src/`. Do not hand-edit generated files in `site-assets/` or the route
folders.

## Daily availability workflow

The `record-health.yml` GitHub Actions workflow checks every project link daily
on a non-hour cron and also supports manual dispatch. It updates
`lib/catalog/project-availability.json`, runs `npm run check`, `npm run build`,
and `npm run build:apache`, and only then commits the snapshot and tracked
Apache output to `automation/record-health`. It creates or updates one bot pull
request and requests a squash auto-merge. A pull-request or auto-merge failure
is reported in the Actions summary and fails the job.

Each run writes `record-health-report.md` and uploads it with the canonical
snapshot. A blast-radius stop instead preserves
`lib/catalog/project-availability.candidate.json` in the artifact. Manual
dispatch exposes `accept_blast_radius`; use it only after reviewing every
proposed transition.

The report also loads the canonical project records and emits an **Editorial
criteria review due** section for enabled records whose `verified` date is more
than 365 days old. `npm run report:availability` reports those records without
stopping publication; the daily workflow then runs
`npm run report:availability -- --fail-on-editorial-review` and stops before
building or publishing when that command returns nonzero. An existing editorial
`directory` hold is excluded from this overdue-enabled queue.

For every overdue ID, inspect `lib/catalog/software/<id>.ts` and recheck the live
repository, government provenance, license or public-domain basis, and primary
evidence. If the record still qualifies, update `verified` to the actual review
date. If it does not, keep the old `verified` date and add a reviewed
`directory: { status: 'disabled', reason: '<specific public-facing reason>', reviewed: '<YYYY-MM-DD>' }`
hold. Then run `npm run review:availability`, `npm run check`, `npm run build`,
and `npm run build:apache`; inspect the snapshot and static diff and update the
bot or normal pull request. Do not advance `verified` merely because all URLs
returned successful HTTP responses.

Repository administrators must configure:

1. Prefer an Actions secret named `GOSDIR_AUTOMATION_TOKEN`: a fine-grained
   personal access token for a dedicated automation account, limited to this
   repository, with Contents write and Pull requests write. It allows the bot
   pull request to trigger unattended CI. The workflow falls back to
   `github.token` when the secret is absent.
2. For that fallback, grant workflow permissions for `contents: write` and
   `pull-requests: write`. In **Settings → Actions → General**, select read/write
   workflow permissions and allow GitHub Actions to create pull requests. Pull
   requests created with the built-in token may still require an editor to
   start or approve PR CI under the repository's policy.
3. An Actions secret named `GOSDIR_PUBLIC_GITHUB_READ_TOKEN` for the separate
   repository-freshness collector, scoped only to reading public repository
   metadata. That collector exposes it as `GOSDIR_GITHUB_TOKEN`; the daily HTTP
   availability check does not need it, and it must not have write access to
   this repository.
4. Branch protection or rulesets requiring the normal CI job before the bot
   pull request can merge. Keep approval requirements in place for guarded or
   semantic changes.
5. For an otherwise inactive public repository, monitor that the scheduled
   workflow remains enabled. GitHub automatically disables scheduled workflows
   after 60 days without repository activity; re-enable it from the Actions UI
   before relying on the next daily check.

Do not replace the dedicated public-read token with a broad personal access
token, and never reuse it as `GOSDIR_AUTOMATION_TOKEN`. If repository policy
prevents bot branches or automatic merge, the link review still uploads its
candidate and report, but the job fails and an editor must apply the reviewed
files in a normal pull request.

An inconclusive response such as a 403, 429, transient DNS or server error,
timeout, reset, or redirect loop does not hide a record. A GET-confirmed
404/410, missing DNS name, refused connection, invalid TLS certificate, or
invalid/non-public URL is definitive and must normally repeat before the bot
changes visibility. A blast-radius guard stops publication when more than five
records would change status at once. For a guarded run, inspect the action
summary and candidate artifact, verify each URL in an anonymous browser,
correct the catalog URL or add a reviewed editorial hold, rerun the checks, and
only then update or merge the pull request.

When the automation pull request remains open, the next daily run reads its
availability snapshot and carries forward a prior-day failure streak. It uses
that pending state only when its snapshot date is at least as new as the default
branch and older than the current UTC day, so manual same-day reruns do not
artificially advance a failure. A failed pending-state lookup is called out in
the Actions summary and falls back to the default-branch snapshot.

## Repository merge versus host deployment

The production site is not GitHub Pages, and the availability workflow has no
credentials for the Apache host. Merging its pull request updates GitHub and the
tracked static output only. The live site changes when a separate deployment
process fast-forwards the production checkout at `/usr/web/gosdir.com` to that
reviewed commit. Until such an integration is configured, that is a manual
operator step.

Before updating the host, confirm the checkout has no unaccounted local work.
Fast-forward it without rewriting history, then verify that the committed
static output matches its sources:

```sh
cd /usr/web/gosdir.com
git status --short
git pull --ff-only
npm ci --ignore-scripts
npm run build:apache
git diff --exit-code
```

Stop if the worktree is dirty, the pull is not a fast-forward, or the build
changes tracked output. Resolve that condition through a reviewed commit; do
not reset or overwrite host changes. Ordinary content deployment does not
require an Apache reload. A future automated deployer should use a narrowly
scoped read-only deploy credential or host-side pull mechanism, preserve this
fast-forward and clean-build gate, and keep SSH keys and host details out of the
repository and Actions logs.

Apache should bind both site virtual hosts to `204.109.58.162`, use
`/usr/web/gosdir.com` as `DocumentRoot`, set `DirectoryIndex index.html`, and
disable directory indexing with `Options -Indexes`.

The Apache virtual-host configuration is intentionally host-local at
`/usr/local/etc/apache24/Includes/gosdir.conf`. It is not committed because this
repository is public and the file contains host-specific TLS and server
configuration. Keep certificate paths, private host details, and other
machine-specific settings out of the repository.

The version-controlled root `.htaccess` contains the application-level Apache
directives: the default index, disabled directory listings, HTTPS redirect,
public-route allowlist, security headers, and cache policy. The host-local
virtual host must allow these overrides and provide the address binding,
hostname, TLS certificates, and document-root configuration.

After changing the host-local configuration, validate it before reloading
Apache:

```sh
sudo apachectl configtest
sudo service apache24 reload
```

Only reload after the configuration test reports `Syntax OK`.

## Private administration

The unlinked portal is at `/admin/`. It has no public navigation entry and is
excluded by `robots.txt`, an HTML robots meta tag, and `X-Robots-Tag` headers.
Those exclusions are separate from access control: the API requires an authenticated
session, and every administrative mutation requires the configured Origin and a session CSRF
token. Sessions use Secure, HttpOnly, SameSite=Strict cookies, expire after eight
hours, and are invalidated when the service restarts. Sign-in attempts are rate
limited. The service binds only to `127.0.0.1:9137`; Apache proxies `/admin/`
over the existing HTTPS virtual host. No external hosting is involved.

On the FreeBSD production host, run these as the checkout owner:

```sh
npm run build:apache
npm run admin:install
npm run admin:setup-link
```

`admin:install` adds one identified `@reboot` entry to the current user's crontab,
preserving existing entries, and starts a FreeBSD `daemon` supervisor that
restarts the service after failure. `admin:start`, `admin:stop`, and `admin:status`
manage it without changing the crontab. Logs, password hashes, initial setup
tokens, link observations, publication state, and job history live in ignored
`.admin-state/`, accessible only to the owner. Back up that directory privately;
never commit it. The root Apache allowlist denies direct HTTP access to it and
to `admin-src/`. Keep loopback port 9137 unavailable from external interfaces.

For Google sign-in, follow [the account enrollment and OAuth client guide](admin-google-sign-in.md).
Google mode restricts access to one verified account, binds its permanent account
ID after initial enrollment, and disables the password endpoints. Its client
configuration, account restriction, and enrollment secret remain private in
`.admin-state/`. Initial enrollment requires both the private link and the
authorized Google account. The portal provides a public admin privacy notice
at `/admin/privacy` for the Google consent configuration.

In password mode, the setup link carries a single-use token in its URL fragment. Open it, choose
a password of at least 14 characters, and keep that password in a password
manager. The browser removes the fragment immediately; setup disables itself
after use. To recover access, stop the service, run
`node scripts/admin-service.mjs reset-password`, start it, and generate a new
setup link. Google recovery follows the separate enrollment guide. Recovery
requires shell access as the checkout owner.

### Jobs and record visibility

Only predefined jobs can run; the portal accepts no shell commands or arbitrary
URLs. Link scans reuse the public-destination checker (including DNS and redirect
checks), run eight requests at a time, and save observations privately. They do
not change visibility or advance a record's substantive `verified` date.
403s, rate limits, timeouts, and other inconclusive results are shown separately
from definitive failures. The dashboard initially shows the canonical availability
snapshot and replaces observations with completed portal scan results.

Confirmed moderation jobs write `lib/catalog/administration.json` and run catalog
validation followed by `npm run build:apache`:

- **Suspend** removes a record from listings but keeps its direct record page
  with the public reason.
- **Hide** also removes the direct record view.
- **Delete** removes the same public views and retains a tombstone and canonical
  archive for recovery and audit. It deliberately does not physically erase
  catalog source files, historical evidence, or the checker coverage.
- **Reinstate** requires healthy links matching the canonical URLs, checked
  within 24 hours. It removes the portal hold and can clear an automated
  availability hold using those observations. A canonical editorial `directory`
  hold must first be resolved through substantive source review. Healthy HTTP
  responses alone never clear an editorial hold or advance `verified`.

The portal permits at most 100 records per moderation job, requires a reason
and confirmation, and requires typing DELETE for deletion. Job history records
the action, record IDs, reason, progress, output, and result. One job runs at a
time. A restart marks unfinished jobs interrupted instead of retrying mutations.
Failed publication remains explicitly pending; use **Validate & publish current
state** after resolving the reported failure. The job history and publication
banner distinguish saved intent from a successfully completed Apache build.

Portal changes are working-tree changes on the production checkout. Review and
commit `administration.json`, any availability changes, and generated Apache
output through the usual repository workflow before pulling another revision.
Do not run external builds or other catalog writers concurrently with portal
publication. Existing automation does not clear administrative holds.
