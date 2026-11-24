# لعبة نتعلّم باللعب — Arabic Learning Game

Static Arabic learning game for young children, with activities for animals, colors, shapes, numbers, and Arabic letters.

## GitHub Pages (no Actions required)

This repository can be published directly from a branch using GitHub Pages. No Enterprise plan, GitHub Actions workflow, build step, or npm install is required.

1. Open **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose branch **main** and folder **/(root)**, then click **Save**.
4. Wait a minute or two for GitHub Pages to publish the repository.
5. Open https://suhaibshd7.github.io/toddler_2/ on your phone.

The root `index.html` is a small installer page. On the first visit, it downloads `site-package.zip`, extracts the game files in your browser, caches them for offline use, and opens the actual game. Keep `site-package.zip` in the repository root.

## Project files

- `index.html` — first-visit installer and launcher.
- `sw.js` — service worker that serves the extracted files from the browser cache.
- `site-package.zip` — complete static game, including CSS, JavaScript, images, and MP3 audio.
- `GITHUB-PAGES-DEPLOY.md` — publishing instructions.

The first visit requires an internet connection (including access to the JSZip library CDN). After extraction and cache setup, the game assets are available offline in the same browser on that device.
