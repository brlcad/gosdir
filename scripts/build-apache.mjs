import { build } from 'vite';
import { cp, copyFile, mkdir, readFile, readdir, rename, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const stagingPath = path.join(projectRoot, '.apache-build');
const assetsPath = path.join(projectRoot, 'site-assets');
const rootIndexPath = path.join(projectRoot, 'index.html');
const routes = ['directory', 'coverage', 'policy', 'timeline', 'guide', 'glossary', 'methodology', 'contribute', 'review', 'contact'];

function referencedAssets(html) {
  return [...html.matchAll(/\/site-assets\/([^"'?]+)/g)].map((match) => match[1]);
}

async function replaceFile(source, destination) {
  const temporary = `${destination}.next`;
  await copyFile(source, temporary);
  await rename(temporary, destination);
}

const previousHtml = await readFile(rootIndexPath, 'utf8').catch(() => '');
await build({ configFile: path.join(projectRoot, 'vite.static.config.ts') });
const stagedIndexPath = path.join(stagingPath, 'index.html');
const stagedHtml = await readFile(stagedIndexPath, 'utf8');
const retainedAssets = new Set([...referencedAssets(previousHtml), ...referencedAssets(stagedHtml)]);

await mkdir(assetsPath, { recursive: true });
await cp(path.join(stagingPath, 'site-assets'), assetsPath, { recursive: true });
await copyFile(path.join(projectRoot, 'public', 'favicon.svg'), path.join(projectRoot, 'favicon.svg'));
await copyFile(path.join(projectRoot, 'public', 'og.png'), path.join(projectRoot, 'og.png'));

for (const route of routes) {
  const routeDirectory = path.join(projectRoot, route);
  await mkdir(routeDirectory, { recursive: true });
  await replaceFile(stagedIndexPath, path.join(routeDirectory, 'index.html'));
}

await replaceFile(stagedIndexPath, rootIndexPath);

for (const entry of await readdir(assetsPath, { withFileTypes: true })) {
  if (entry.isFile() && !retainedAssets.has(entry.name)) {
    await rm(path.join(assetsPath, entry.name), { force: true });
  }
}

await rm(stagingPath, { recursive: true, force: true });
