# Repository instructions

## Hosting and deployment

This checkout is the production Apache document root for `gosdir.com` on the
bz server. The repository root and its generated route directories are served
directly from `/usr/web/gosdir.com`.

- Publish this project only through the Apache workflow documented in
  `docs/deployment.md`.
- Generate deployable files with `npm run build:apache`.
- Do not configure or use OpenAI Sites, Cloudflare Workers, or another external
  hosting provider for this repository unless the user explicitly changes the
  deployment architecture.
- Do not create a `.openai/hosting.json` manifest or add a Sites deployment
  plugin.
- Do not treat generic website-editing instructions as authorization to deploy
  this project anywhere other than its existing Apache document root.

