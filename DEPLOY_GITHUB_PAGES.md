# Deploy This Project to GitHub and GitHub Pages

Follow these steps in order.

## 1. Push this project to a GitHub repository

1. Create a new empty repository on GitHub.
2. In this project folder, run:

```bash
git init
git add .
git commit -m "Initial portfolio setup"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

If this project is already a git repo, skip `git init` and just run `git add`, `git commit`, and `git push`.

## 2. Confirm workflow file is present

This repo includes:

- `.github/workflows/deploy-pages.yml`

It automatically builds your Next.js app as a static export and deploys it to GitHub Pages on every push to `main`.

## 3. Enable GitHub Pages (one-time setup)

1. Open your GitHub repository.
2. Go to **Settings** -> **Pages**.
3. Under **Build and deployment**, select **Source: GitHub Actions**.
4. Save.

## 4. Trigger first deployment

1. Push any commit to `main`.
2. Go to the **Actions** tab in GitHub.
3. Wait for workflow **Deploy Next.js site to GitHub Pages** to finish.

## 5. Open your live site

Your URL will be:

- Project repo: `https://<your-username>.github.io/<your-repo>/`
- User/org repo named `<your-username>.github.io`: `https://<your-username>.github.io/`

## 6. Future updates

Any new push to `main` will auto-deploy.

## Optional: custom domain

If you use a custom domain, set `NEXT_PUBLIC_SITE_URL` in repository settings:

1. **Settings** -> **Secrets and variables** -> **Actions** -> **Variables**
2. Add variable:
   - Name: `NEXT_PUBLIC_SITE_URL`
   - Value: `https://your-domain.com`

Then push a new commit to redeploy.
