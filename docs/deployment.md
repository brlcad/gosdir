# Apache deployment

The production document root is the repository root at `/usr/web/gosdir.com`.
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

The reviewed virtual-host configuration is tracked at
`deploy/apache/gosdir.conf`. Activating it requires administrator privileges:

```sh
sudo cp /usr/local/etc/apache24/Includes/gosdir.conf /usr/local/etc/apache24/Includes/gosdir.conf.bak
sudo install -m 644 /usr/web/gosdir.com/deploy/apache/gosdir.conf /usr/local/etc/apache24/Includes/gosdir.conf
sudo apachectl configtest
sudo service apache24 reload
```

Only reload after the configuration test reports `Syntax OK`.
