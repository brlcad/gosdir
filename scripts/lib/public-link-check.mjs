import { promises as dns } from 'node:dns';
import https from 'node:https';
import net from 'node:net';

const defaultUserAgent =
  'GOSDIR-evidence-reviewer/1.0 (+https://gosdir.com/methodology/)';

export async function checkPublicLink(
  url,
  { userAgent = defaultUserAgent } = {},
) {
  try {
    const original = new URL(url);
    let current = original;
    let redirects = 0;

    for (;;) {
      let response = await requestHeaders(current, 'HEAD', userAgent);
      if (shouldRetryPublicLinkWithGet(response.status)) {
        response = await requestHeaders(current, 'GET', userAgent);
      }
      if (
        response.status >= 300 &&
        response.status < 400 &&
        response.location
      ) {
        if (redirects >= 5) return linkError(url, 'redirect-limit');
        current = new URL(response.location, current);
        redirects += 1;
        continue;
      }

      return {
        url,
        status: linkStatus(response.status, redirects),
        httpStatus: response.status,
        ...(redirects ? { finalUrl: current.href } : {}),
      };
    }
  } catch (error) {
    return linkError(url, classifyPublicLinkError(error));
  }
}

export function shouldRetryPublicLinkWithGet(status) {
  return [400, 403, 404, 405, 410, 501].includes(status);
}

function linkStatus(status, redirects) {
  if (status >= 200 && status < 300) return redirects ? 'redirected' : 'ok';
  if (status === 401 || status === 403) return 'auth-required';
  if (status === 429) return 'rate-limited';
  if (status === 404 || status === 410) return 'not-found';
  if (status === 408 || status === 425 || status >= 500) return 'transient';
  return 'unavailable';
}

function linkError(url, errorCode) {
  return { url, status: 'error', errorCode };
}

async function requestHeaders(url, method, userAgent) {
  const destination = await resolvePublicDestination(url);

  return new Promise((resolve, reject) => {
    let settled = false;
    const request = https.request(
      {
        protocol: 'https:',
        hostname: url.hostname,
        port: 443,
        path: `${url.pathname}${url.search}`,
        method,
        servername: url.hostname,
        headers: {
          Accept:
            'text/html,application/xhtml+xml,application/json;q=0.8,*/*;q=0.5',
          ...(method === 'GET' ? { Range: 'bytes=0-0' } : {}),
          'User-Agent': userAgent,
        },
        lookup: (_hostname, options, callback) => {
          if (options.all) callback(null, [destination]);
          else callback(null, destination.address, destination.family);
        },
      },
      (response) => {
        if (settled) return;
        settled = true;
        const locationHeader = response.headers.location;
        response.destroy();
        resolve({
          status: response.statusCode ?? 0,
          location: Array.isArray(locationHeader)
            ? locationHeader[0]
            : locationHeader,
        });
      },
    );
    request.setTimeout(20_000, () =>
      request.destroy(new Error('request-timeout')),
    );
    request.on('error', (error) => {
      if (settled) return;
      settled = true;
      reject(error);
    });
    request.end();
  });
}

async function resolvePublicDestination(url) {
  if (
    url.protocol !== 'https:' ||
    (url.port && url.port !== '443') ||
    url.username ||
    url.password ||
    net.isIP(url.hostname) ||
    url.href.length > 2_048
  ) {
    throw new Error('invalid-public-url');
  }

  const addresses = await dns.lookup(url.hostname, {
    all: true,
    verbatim: true,
  });
  if (
    !addresses.length ||
    addresses.some(({ address }) => isNonPublicAddress(address))
  ) {
    throw new Error('non-public-destination');
  }
  // This reviewer runs in an IPv4-only network. An AAAA-only host cannot be
  // checked here, but that is not evidence that the public link is broken.
  const ipv4 = addresses.find(({ family }) => family === 4);
  if (!ipv4) throw new Error('ipv6-only-destination');
  return ipv4;
}

function isNonPublicAddress(address) {
  if (net.isIPv4(address)) {
    const [a, b, c] = address.split('.').map(Number);
    return (
      a === 0 ||
      a === 10 ||
      a === 127 ||
      (a === 100 && b >= 64 && b <= 127) ||
      (a === 169 && b === 254) ||
      (a === 172 && b >= 16 && b <= 31) ||
      (a === 192 && b === 0 && c === 0) ||
      (a === 192 && b === 0 && c === 2) ||
      (a === 192 && b === 88 && c === 99) ||
      (a === 192 && b === 168) ||
      (a === 198 && (b === 18 || b === 19)) ||
      (a === 198 && b === 51 && c === 100) ||
      (a === 203 && b === 0 && c === 113) ||
      a >= 224
    );
  }

  const normalized = address.toLowerCase();
  return (
    !/^[23]/.test(normalized) ||
    normalized.startsWith('2001:db8:') ||
    normalized.startsWith('2001:0:') ||
    normalized.startsWith('2002:') ||
    normalized.startsWith('::ffff:') ||
    normalized.startsWith('64:ff9b:')
  );
}

export function classifyPublicLinkError(error) {
  if (!(error instanceof Error)) return 'request-failed';
  if (
    [
      'invalid-public-url',
      'ipv6-only-destination',
      'non-public-destination',
      'request-timeout',
    ].includes(error.message)
  ) {
    return error.message;
  }
  if (isDnsNotFoundError(error.code)) return 'dns-not-found';
  if (error.code === 'ECONNREFUSED') return 'connection-refused';
  if (isInvalidTlsCertificateError(error.code)) {
    return 'invalid-tls-certificate';
  }
  if (error.message.includes('redirect')) return 'invalid-redirect';
  return 'request-failed';
}

function isDnsNotFoundError(code) {
  return ['ENOTFOUND', 'ENODATA', 'EAI_NONAME'].includes(code);
}

function isInvalidTlsCertificateError(code) {
  if (typeof code !== 'string') return false;
  if (code.startsWith('ERR_TLS_CERT_')) return true;
  return [
    'CERT_CHAIN_TOO_LONG',
    'CERT_HAS_EXPIRED',
    'CERT_NOT_YET_VALID',
    'CERT_REJECTED',
    'CERT_REVOKED',
    'CERT_SIGNATURE_FAILURE',
    'CERT_UNTRUSTED',
    'CRL_HAS_EXPIRED',
    'CRL_NOT_YET_VALID',
    'CRL_SIGNATURE_FAILURE',
    'DEPTH_ZERO_SELF_SIGNED_CERT',
    'ERROR_IN_CERT_NOT_AFTER_FIELD',
    'ERROR_IN_CERT_NOT_BEFORE_FIELD',
    'ERROR_IN_CRL_LAST_UPDATE_FIELD',
    'ERROR_IN_CRL_NEXT_UPDATE_FIELD',
    'HOSTNAME_MISMATCH',
    'INVALID_CA',
    'INVALID_PURPOSE',
    'PATH_LENGTH_EXCEEDED',
    'SELF_SIGNED_CERT_IN_CHAIN',
    'UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY',
    'UNABLE_TO_DECRYPT_CERT_SIGNATURE',
    'UNABLE_TO_DECRYPT_CRL_SIGNATURE',
    'UNABLE_TO_GET_CRL',
    'UNABLE_TO_GET_ISSUER_CERT',
    'UNABLE_TO_GET_ISSUER_CERT_LOCALLY',
    'UNABLE_TO_VERIFY_LEAF_SIGNATURE',
  ].includes(code);
}
