import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";

const projectRoot = new URL("..", import.meta.url).pathname;
const sourceDirectory = join(projectRoot, "dist", "public");
const outputDirectory = join(projectRoot, "dist", "github-pages");
const hostedAssetOrigin = "https://smartlanyard-h5he48zx.manus.space";
const managedAssets = [
  "/manus-storage/smart-lanyard-loop-logo_e44db5b8.png",
  "/manus-storage/smart-lanyard-transparent_b686992c.png",
  "/manus-storage/smart-lanyard-friendly-hero-replacement_a1a3c0c8.jpg",
  "/manus-storage/smart-lanyard-status-card-cutout_40516fd3.png",
  "/manus-storage/smart-lanyard-alex-morgan-id-card_aa026f64.png",
  "/manus-storage/smart-lanyard-social-post-with-logo-v2_f9cc45c6.webp",
  "/manus-storage/smart-lanyard-sos-safety_fbb1403f.webp",
  "/manus-storage/smart-lanyard-qr-digital-pass_9a0c7488.webp",
  "/manus-storage/smart-lanyard-campus-access_04227dc0.webp",
  "/manus-storage/smart-lanyard-live-timetable_35080935.webp",
  "/manus-storage/smart-lanyard-nfc-access_2369e57d.webp",
  "/manus-storage/smart-lanyard-parent-connectivity_7ae1b2d9.webp",
  "/manus-storage/smart-lanyard-dynamic-id_c934f7da.webp",
];

await rm(outputDirectory, { recursive: true, force: true });
await cp(sourceDirectory, outputDirectory, { recursive: true });
await mkdir(join(outputDirectory, "manus-storage"), { recursive: true });

await Promise.all(managedAssets.map(async (assetPath) => {
  const response = await fetch(`${hostedAssetOrigin}${assetPath}`);
  if (!response.ok) throw new Error(`Could not download ${assetPath}: ${response.status}`);
  await writeFile(join(outputDirectory, "manus-storage", basename(assetPath)), new Uint8Array(await response.arrayBuffer()));
}));

await writeFile(join(outputDirectory, ".nojekyll"), "");
await writeFile(join(outputDirectory, "CNAME"), "smartlanyard.in\n");

const assetCount = (await readdir(join(outputDirectory, "manus-storage"))).length;
console.log(`GitHub Pages artifact prepared with ${assetCount} local image assets.`);
