# Publish the Arabic Learning Game

1. Download the prepared `site-package.zip` from the ChatGPT conversation.
2. In this repository, select **Add file → Upload files**, upload `site-package.zip` into the repository root, and commit it to `main`.
3. Open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
4. Open **Actions** and check the workflow named **Deploy Arabic Learning Game to GitHub Pages**.
5. Once the run succeeds, open https://suhaibshd7.github.io/toddler_2/ on your phone.

The workflow extracts the package into a clean site folder and publishes that folder. The ZIP itself is not exposed on the website. Future replacement commits to `site-package.zip` trigger automatic redeployment.
