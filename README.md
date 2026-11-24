# لعبة نتعلّم باللعب — Arabic Learning Game

Static HTML/CSS/JavaScript Arabic learning game for young children. It includes five learning activities: animals, colors, shapes, numbers, and Arabic letters.

## Open the hosted game

After GitHub Pages is enabled and the first deployment succeeds, the game will be available at:

https://suhaibshd7.github.io/toddler_2/

## Deploy

This is a static site. There is no build step or npm install. The GitHub Actions workflow in `.github/workflows/deploy.yml` deploys the repository root to GitHub Pages whenever changes are pushed to `main`.

In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. Then check the **Actions** tab for the deployment run.

## Project structure

- `index.html` — app entry point.
- `css/styles.css` — styles and responsive layout.
- `js/` — game data, audio handling, and game logic.
- `assets/animals/` — answer illustrations (WebP).
- `assets/cat/` — cat animation and mouth overlays.
- `assets/audio/` — local MP3 vocabulary, instruction, and praise recordings.

The app uses relative asset paths and local browser storage. The first visit needs an internet connection to load the hosted files; the app does not currently register a service worker for standalone offline use.
