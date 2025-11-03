This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy

### Option A: GitHub Pages (static export)

This repo is pre-configured to deploy to GitHub Pages using a GitHub Action.

Steps:

1. Push this repo to GitHub.
2. In your repo settings, enable Pages with "GitHub Actions" as the source.
3. Push to `main` or `master`; the workflow at `.github/workflows/deploy-pages.yml` will:
   - Build with `output: 'export'` to `out/`
   - Deploy to GitHub Pages

Notes:
- The build uses `NEXT_PUBLIC_BASE_PATH=/<repo-name>` so paths work under `https://<user>.github.io/<repo-name>`.
- For local dev, no env is needed; `basePath` defaults to empty.

### Option B: Vercel (SSR or static)

If you prefer zero-config hosting:

- Import the repo to Vercel
- Build Command: `npm run build`
- Framework: Next.js
- Node: 18+ (20 recommended)

You’ll get a URL like `https://<project>.vercel.app` to share.
