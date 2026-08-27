# SUPER NOVA Website

Public landing page for the SUPER NOVA Windows desktop application. This is a standalone Next.js project intended for Vercel deployment.

It only presents the product and provides a download link. It contains no Flask integration, Windows commands, local API calls, password processing, Wi-Fi scanning, USB access, or access to local application data.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Release assets

Before deployment, place these files in `public/`:

- `SUPER_NOVA_SETUP.exe`
- `SUPER_NOVA.ico`
- `screenshots/Start_Scan.webp`
- `screenshots/Scan.webp`
- `screenshots/start_Password.webp`
- `screenshots/password.webp`

For an installer too large for Vercel, upload it to a GitHub Release and replace each `/SUPER_NOVA_SETUP.exe` link in `app/page.tsx` with that release URL.

Update the GitHub URL in `app/page.tsx` before publishing.
