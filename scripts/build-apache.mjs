import { build } from 'vite';
import {
  cp,
  copyFile,
  mkdir,
  readFile,
  readdir,
  rename,
  rm,
} from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const stagingPath = path.join(projectRoot, '.apache-build');
const assetsPath = path.join(projectRoot, 'site-assets');
const rootIndexPath = path.join(projectRoot, 'index.html');
const manifestName = 'manifest.json';
const manifestAssetPrefix = 'site-assets/';
const routes = [
  'directory',
  'coverage',
  'coverage-beta',
  'policy',
  'timeline',
  'guide',
  'glossary',
  'methodology',
  'contribute',
  'review',
  'contact',
];
const routeArgument = process.argv.find((argument) =>
  argument.startsWith('--route='),
);
const requestedRoute = routeArgument?.slice('--route='.length);
if (requestedRoute && !routes.includes(requestedRoute)) {
  throw new Error(
    `Unknown Apache route "${requestedRoute}". Expected one of: ${routes.join(', ')}`,
  );
}
const publishedRoutes = requestedRoute ? [requestedRoute] : routes;
const partialBuild = Boolean(requestedRoute);

function referencedAssets(html) {
  return [...html.matchAll(/\/site-assets\/([^"'?]+)/g)].map(
    (match) => match[1],
  );
}

function assetsFromManifest(manifest) {
  const assets = new Set();

  for (const entry of Object.values(manifest)) {
    const paths = [entry.file, ...(entry.css ?? []), ...(entry.assets ?? [])];

    for (const asset of paths) {
      if (asset?.startsWith(manifestAssetPrefix)) {
        assets.add(asset.slice(manifestAssetPrefix.length));
      }
    }
  }

  return assets;
}

async function readManifestAssets(manifestPath) {
  const source = await readFile(manifestPath, 'utf8').catch((error) => {
    if (error.code === 'ENOENT') return null;
    throw error;
  });

  return source === null ? null : assetsFromManifest(JSON.parse(source));
}

function sameAssets(left, right) {
  return (
    left.size === right.size && [...left].every((asset) => right.has(asset))
  );
}

async function replaceFile(source, destination) {
  const temporary = `${destination}.next`;
  await copyFile(source, temporary);
  await rename(temporary, destination);
}

const previousHtml = await readFile(rootIndexPath, 'utf8').catch(() => '');
await build({ configFile: path.join(projectRoot, 'vite.static.config.ts') });
const stagedIndexPath = path.join(stagingPath, 'index.html');
const stagingAssetsPath = path.join(stagingPath, 'site-assets');
const previousGenerationAssets =
  (await readManifestAssets(path.join(assetsPath, manifestName))) ??
  new Set(referencedAssets(previousHtml));
const stagedGenerationAssets = await readManifestAssets(
  path.join(stagingAssetsPath, manifestName),
);
if (!stagedGenerationAssets) {
  throw new Error('Static build did not produce an asset manifest.');
}

await mkdir(assetsPath, { recursive: true });
const existingAssets = await readdir(assetsPath, { withFileTypes: true });
const stagedAssetEntries = await readdir(stagingAssetsPath, {
  withFileTypes: true,
});
const stagedAssets = new Set(
  stagedAssetEntries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name),
);
const missingAssets = [...stagedGenerationAssets].filter(
  (asset) => !stagedAssets.has(asset),
);
if (missingAssets.length) {
  throw new Error(
    `Static asset manifest references missing files: ${missingAssets.join(', ')}`,
  );
}
const generationChanged = !sameAssets(
  previousGenerationAssets,
  stagedGenerationAssets,
);
const retainedAssets = new Set(stagedAssets);

if (generationChanged) {
  for (const asset of previousGenerationAssets) retainedAssets.add(asset);
} else {
  // A repeat build must not discard the fallback generation retained by the
  // deployment that produced the current HTML.
  for (const entry of existingAssets)
    if (entry.isFile()) retainedAssets.add(entry.name);
}

if (partialBuild) {
  // A route-only release must leave the active manifest and every asset used by
  // existing route HTML untouched. The new route can safely reference the new
  // fingerprinted files without promoting them as the site's current generation.
  for (const entry of stagedAssetEntries) {
    if (entry.isFile() && entry.name !== manifestName) {
      await copyFile(
        path.join(stagingAssetsPath, entry.name),
        path.join(assetsPath, entry.name),
      );
    }
  }
} else {
  await cp(stagingAssetsPath, assetsPath, {
    recursive: true,
  });
}
await copyFile(
  path.join(projectRoot, 'public', 'favicon.svg'),
  path.join(projectRoot, 'favicon.svg'),
);
await copyFile(
  path.join(projectRoot, 'public', 'og.png'),
  path.join(projectRoot, 'og.png'),
);
await copyFile(
  path.join(projectRoot, 'public', 'robots.txt'),
  path.join(projectRoot, 'robots.txt'),
);

for (const route of publishedRoutes) {
  const routeDirectory = path.join(projectRoot, route);
  await mkdir(routeDirectory, { recursive: true });
  await replaceFile(stagedIndexPath, path.join(routeDirectory, 'index.html'));
}

if (!partialBuild) await replaceFile(stagedIndexPath, rootIndexPath);

if (!partialBuild) {
  for (const entry of await readdir(assetsPath, { withFileTypes: true })) {
    if (entry.isFile() && !retainedAssets.has(entry.name)) {
      await rm(path.join(assetsPath, entry.name), { force: true });
    }
  }
}

await rm(stagingPath, { recursive: true, force: true });
