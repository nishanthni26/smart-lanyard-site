import { cp, mkdir, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { basename, join } from "node:path";

const projectRoot = new URL("..", import.meta.url).pathname;
const sourceDirectory = join(projectRoot, "dist", "public");
const outputDirectory = "/home/ubuntu/smart-lanyard-hostinger-static";
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

const responseFor = async (assetPath) => {
  const response = await fetch(`${hostedAssetOrigin}${assetPath}`);
  if (!response.ok) throw new Error(`Could not download ${assetPath}: ${response.status}`);
  return new Uint8Array(await response.arrayBuffer());
};

const copyAssets = async () => {
  const assetDirectory = join(outputDirectory, "manus-storage");
  await mkdir(assetDirectory, { recursive: true });
  await Promise.all(managedAssets.map(async (assetPath) => {
    const destination = join(assetDirectory, basename(assetPath));
    await writeFile(destination, await responseFor(assetPath));
  }));
};

const ensureStaticRouting = async () => {
  const htaccessPath = join(outputDirectory, ".htaccess");
  try {
    await stat(htaccessPath);
  } catch {
    await writeFile(htaccessPath, "RewriteEngine On\nRewriteCond %{REQUEST_FILENAME} !-f\nRewriteCond %{REQUEST_FILENAME} !-d\nRewriteRule ^ index.html [L]\n");
  }
};

const createReadme = async () => {
  const contents = `# Smart Lanyard static Hostinger package

Upload the **contents** of this folder—not the folder itself—to Hostinger's public_html directory for smartlanyard.in.

The included .htaccess file enables the public routes /faq and /demo to load correctly after a browser refresh.

This package is static: it does not send demo requests to a server or store visitor data in a database.
`;
  await writeFile(join(outputDirectory, "README-HOSTINGER.md"), contents);
};

await rm(outputDirectory, { recursive: true, force: true });
await cp(sourceDirectory, outputDirectory, { recursive: true });
await copyAssets();
await ensureStaticRouting();
await createReadme();

const files = await readdir(join(outputDirectory, "manus-storage"));
console.log(`Hostinger static package prepared with ${files.length} local image assets.`);
