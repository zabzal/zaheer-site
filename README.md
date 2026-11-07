# zaheer-site

Minimalist personal website built with Svelte and Vite, deployed to GitHub Pages.

## Requirements

- Node.js 22+
- npm

## Commands

Install dependencies:

```sh
npm install
```

Start the local dev server (with hot reload) at http://localhost:5173:

```sh
npm run dev
```

The server listens on all interfaces so it works inside a container. In VS Code, forward port `5173` from the **Ports** tab if it isn't opened automatically.

Compile the site into `docs/`:

```sh
npm run build
```

Preview the compiled site locally:

```sh
npm run preview
```

## Deployment

The site is built locally and the compiled output is committed to `docs/`:

```sh
npm run build
git add docs
git commit -m "Build site"
git push
```

### Configure GitHub Pages (one time)

1. Push this repository to GitHub on the `main` branch.
2. Open the repository on GitHub and go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Set **Branch** to `main` and the folder to `/docs`, then click **Save**.
5. Wait a minute or two. The site URL appears at the top of the Pages settings page (for example, `https://<username>.github.io/zaheer-site/`).

### Use a custom domain (optional)

1. Create `public/CNAME` containing only your domain, for example `zaheerabzal.com`. Vite copies `public/` into `docs/` on every build, so the file survives rebuilds.
2. At your DNS provider, add the records:
   - **Apex domain** (`zaheerabzal.com`): four `A` records pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
   - **www** (`www.zaheerabzal.com`): a `CNAME` record pointing to `<username>.github.io`.
3. In **Settings → Pages**, enter the domain under **Custom domain** and click **Save**. Wait for the DNS check to pass.
4. Once the certificate is issued, enable **Enforce HTTPS**.

DNS changes can take up to 24 hours to propagate.

Each time you change the site, run `npm run build` and commit the updated `docs/` folder. GitHub Pages republishes automatically on push.
