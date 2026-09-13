# Apache deployment

The production document root is the repository root at `/usr/web/gosdir.com`.
On the FreeBSD production host, install locked dependencies with
`npm ci --ignore-scripts`; the optional Cloudflare preview runtime does not
publish a FreeBSD `workerd` binary and is not needed for the Apache build.

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
