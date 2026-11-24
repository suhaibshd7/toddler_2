# Publish the Arabic Learning Game without GitHub Actions

GitHub Pages supports branch-based publishing for public repositories on GitHub Free. You do not need GitHub Actions or an Enterprise plan.

1. Confirm that `site-package.zip` is uploaded to the root of this repository.
2. Open [Settings → Pages](https://github.com/suhaibshd7/toddler_2/settings/pages).
3. Under **Build and deployment**, choose **Deploy from a branch** as the source.
4. Select **main** as the branch and **/(root)** as the folder.
5. Click **Save** and wait for GitHub Pages to publish.
6. Open https://suhaibshd7.github.io/toddler_2/ on your phone.

The root `index.html` downloads the ZIP, extracts its contents in the browser, caches the game files using a service worker, and then opens the game. The first visit needs an internet connection. Later visits in the same browser can use the cached game offline.

If you update the game, replace `site-package.zip` in the repository root with the new package. The launcher clears the older runtime cache when the new service worker is activated; for a new release, increment the cache version in `index.html` and `sw.js` if the browser has an old cached installer.
