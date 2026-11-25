# HIC!

The whole Bayeux Tapestry, all 70 metres of it, as an app.

- **Story:** scroll the real tapestry scene by scene (1–58), with the Latin inscriptions,
  translations and what's really happening, read aloud.
- **Puzzle:** pick a scene, press **Blow it up!** and stitch it back together.
- **Make your own:** cut out knights, horses, ships, trees and dragons, build your own scene,
  add funny text, and let Claude write your caption in 1066 Latin, Old English or Old Norman
  French. Then download it.

- **Open the website:** https://sisyphus22.github.io/hic/
- **Download for Windows, Mac or Linux:** https://github.com/Sisyphus22/hic/releases/latest

© 2026 Valeria · All rights reserved · Made with Claude. See [LICENSE](LICENSE).

Tapestry photographs: 2017 high-resolution photography by the Université de Caen Normandie
with the Bayeux Museum, via Wikimedia Commons (public domain as faithful reproductions).

## About this project folder

- `hic.html` – the page, shared by the website, the desktop app and the claude.ai version
- `scenes.json` – the 58 scenes: Latin, English, date, notes and position on the tapestry
- `tapestry/` – the tapestry cut into 40 tiles (900 px high) plus an overview strip
- `narration-script.txt` – text for recording scene narrations; save them as
  `narration/scene-01.mp3` … and add `"audio": "narration/scene-01.mp3"` to each scene
- `desktop/` – the desktop app (Electron); `tools/` – the website build and its Claude backend
- `docs/` – the built website served by GitHub Pages

Build the website: `node tools/build-site.js https://github.com/Sisyphus22/hic/releases/latest`

Desktop app (needs Node.js), in `desktop/`: `npm install`, then `npm start` or `npm run dist`.
Pushing a `v*` tag makes GitHub build the Windows, Mac and Linux installers.
