// Builds desktop/app from the shared HIC! page (hic.html), scenes.json and the tapestry/ tiles.
// Run after changing them: `npm run page` (npm start and npm run dist do it for you).
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const DESKTOP = path.join(__dirname, "..");
const OUT = path.join(DESKTOP, "app");

const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob:",
  "media-src 'self' blob:",
  "connect-src 'self'",
].join("; ");

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
const page = fs.readFileSync(path.join(ROOT, "hic.html"), "utf8");
fs.writeFileSync(path.join(OUT, "index.html"), `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta http-equiv="Content-Security-Policy" content="${CSP}">
<style>:root{color-scheme:dark}body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>
<script src="app-shim.js"></script>
</head><body>
${page}
</body></html>
`);
fs.copyFileSync(path.join(DESKTOP, "app-src", "app-shim.js"), path.join(OUT, "app-shim.js"));
fs.copyFileSync(path.join(ROOT, "scenes.json"), path.join(OUT, "scenes.json"));
fs.cpSync(path.join(ROOT, "tapestry"), path.join(OUT, "tapestry"), { recursive: true });
console.log("Built", path.relative(ROOT, OUT));
