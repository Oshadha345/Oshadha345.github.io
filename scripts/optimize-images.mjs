import { readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("public/media");
const keepAsPng = new Set(["og-card.png"]);
const MAX_EDGE = 1600;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  }));
  return files.flat();
}

async function isStale(source, target) {
  try {
    return (await stat(source)).mtimeMs > (await stat(target)).mtimeMs;
  } catch {
    return true;
  }
}

const files = await walk(root);
let converted = 0;

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  const inVenues = file.includes(`${path.sep}venues${path.sep}`);
  if (![".jpg", ".jpeg", ".png"].includes(ext) || inVenues || keepAsPng.has(path.basename(file))) continue;
  const target = file.slice(0, -ext.length) + ".webp";
  if (!(await isStale(file, target))) continue;
  await sharp(file).rotate().resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true }).webp({ quality: 80 }).toFile(target);
  converted += 1;
}

// Small variants for images shown as tiles, so srcset can serve ~640px files on phones and grids.
const SMALL = 640;
const needsSmall = (key) => !key.endsWith("-sm.webp") && /^\/media\/(areas\/[^/]+|publications\/[^/]+\/cover|projects\/[^/]+\/cover|gallery\/[^/]+\/\d\d-[a-z0-9-]+)\.webp$/.test(key);
const smallWidth = (key) => (key.startsWith("/media/gallery/") ? 480 : SMALL);
for (const file of await walk(root)) {
  const key = "/" + path.relative(path.resolve("public"), file).split(path.sep).join("/");
  if (!needsSmall(key)) continue;
  const target = file.replace(/\.webp$/, "-sm.webp");
  if (!(await isStale(file, target))) continue;
  await sharp(file).resize({ width: smallWidth(key), height: smallWidth(key), fit: "inside", withoutEnlargement: true }).webp({ quality: 78 }).toFile(target);
  converted += 1;
}

const manifest = {};
for (const file of await walk(root)) {
  const ext = path.extname(file).toLowerCase();
  const key = "/" + path.relative(path.resolve("public"), file).split(path.sep).join("/");
  if ([".jpg", ".jpeg", ".png"].includes(ext) && !key.includes("/venues/") && !keepAsPng.has(path.basename(file))) continue;
  if ([".webp", ".png", ".jpg", ".jpeg"].includes(ext)) {
    const { width, height } = await sharp(file).metadata();
    manifest[key] = [width, height];
  } else {
    manifest[key] = 1;
  }
}
const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
await writeFile("src/data/media-manifest.json", JSON.stringify(sorted).replace(/,"/g, ',\n"') + "\n");
console.log(`optimize-images: ${converted} converted, ${Object.keys(sorted).length} media files indexed`);
