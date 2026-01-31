Deploying to Vercel
===================

Quick steps
-----------

1. Push your repository to GitHub (or link it to Vercel).
2. Go to https://vercel.com/new and import the repository.
3. Set the Build Command to: `npm run build`
4. Set the Output Directory to: `dist`
5. Add any Environment Variables (e.g. `GEMINI_API_KEY`) under Project Settings.

Notes
-----

- The profile image is stored in the `public/` folder as `/profile.png` so it will be included in production builds.
- `vercel.json` is included and routes all client-side paths to `index.html` (SPA-friendly).
- If you want to preview the production build locally, run `npm run build` and `npm run preview` (requires Node/npm installed).
