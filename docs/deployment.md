# Apache deployment

The production document root is the repository root at `/usr/web/gosdir.com`.
Generate the browser-ready static site with:

```sh
npm run build:apache
```

The command builds into a temporary staging directory, then atomically replaces
the generated root entry point and asset bundle. It also writes an `index.html`
entry point for each public route so Apache can serve direct visits without a
rewrite module.

The source application remains in `app/`, `components/`, `lib/`, and
`static-src/`. Do not hand-edit generated files in `site-assets/` or the route
folders.

Apache should bind both site virtual hosts to `204.109.58.162`, use
`/usr/web/gosdir.com` as `DocumentRoot`, set `DirectoryIndex index.html`, and
disable directory indexing with `Options -Indexes`.
