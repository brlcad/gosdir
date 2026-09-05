import { build } from 'vite';
import { cp, copyFile, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const stagingPath = path.join(projectRoot, '.apache-build');
const assetsPath = path.join(projectRoot, 'site-assets');
const routes = ['directory', 'coverage', 'policy', 'timeline', 'glossary', 'methodology', 'contribute', 'contact'];

await build({ configFile: path.join(projectRoot, 'vite.static.config.ts') });
await rm(assetsPath, { recursive: true, force: true });
await cp(path.join(stagingPath, 'site-assets'), assetsPath, { recursive: true });
await copyFile(path.join(stagingPath, 'index.html'), path.join(projectRoot, 'index.html'));
await copyFile(path.join(projectRoot, 'public', 'favicon.svg'), path.join(projectRoot, 'favicon.svg'));
await copyFile(path.join(projectRoot, 'public', 'og.png'), path.join(projectRoot, 'og.png'));

for (const route of routes) {
  const routeDirectory = path.join(projectRoot, route);
  await mkdir(routeDirectory, { recursive: true });
  await copyFile(path.join(projectRoot, 'index.html'), path.join(routeDirectory, 'index.html'));
}

await rm(stagingPath, { recursive: true, force: true });
