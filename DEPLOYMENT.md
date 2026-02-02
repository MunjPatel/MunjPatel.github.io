# Deploying to GitHub Pages

Follow these steps to host your portfolio on GitHub Pages.

## Step 1: Create a GitHub repository

1. Go to [github.com](https://github.com) and sign in.
2. Click the **+** in the top-right → **New repository**.
3. Name it (e.g. `portfolio-website` or `munj-patel`).
4. Choose **Public**.
5. Do **not** initialize with README (you already have files).
6. Click **Create repository**.

## Step 2: Initialize Git and push (if not already)

In your terminal, from the portfolio folder:

```bash
cd "c:\Users\Munj Patel\Desktop\NYU\portfolio_website"

# Initialize Git (if new)
git init

# Add all files
git add .

# First commit
git commit -m "Initial portfolio website"

# Add your GitHub repo as remote (replace USERNAME and REPO with yours)
git remote add origin https://github.com/USERNAME/REPO.git

# Push to main branch
git branch -M main
git push -u origin main
```

Example: if your username is `MunjPatel` and repo is `portfolio`:
```bash
git remote add origin https://github.com/MunjPatel/portfolio.git
```

## Step 3: Enable GitHub Pages

1. Open your repository on GitHub.
2. Go to **Settings** → **Pages** (in the left sidebar).
3. Under **Source**, choose **Deploy from a branch**.
4. Under **Branch**, select `main` and folder `/(root)`.
5. Click **Save**.

## Step 4: Wait and visit

- GitHub will build and deploy your site (usually 1–2 minutes).
- Your site will be at: `https://USERNAME.github.io/REPO/`
- Example: `https://munjpatel.github.io/portfolio/`

## Step 5: Use a custom domain (optional)

1. In **Settings** → **Pages**, enter your domain under **Custom domain**.
2. Add a `CNAME` file in your project root containing just the domain, e.g.:
   ```
   munjpatel.com
   ```
3. Configure DNS with your registrar (see [GitHub Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).

---

## Updating your site

After changing files:

```bash
git add .
git commit -m "Update portfolio"
git push
```

GitHub Pages will redeploy automatically (may take a few minutes).

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| 404 on subpages | Use relative links like `projects/chebyshev.html`, not `/projects/...`. |
| Images not loading | Use relative paths: `assets/images/foo.png`. |
| Site shows 404 | Ensure repo is public and Pages is set to `main` branch. |
| Old content still showing | Hard refresh (Ctrl+Shift+R) or wait a few minutes. |
