# N Plus Solutions Inc. Website

A responsive corporate website for **N Plus Solutions Inc. (Next Plus)**, built with Next.js App Router, TypeScript, Tailwind CSS, Motion, and Lucide icons.

## Included

- Modern responsive homepage
- Business Areas section
- Five project cards and individual project pages
- Animated navigation and scroll reveals
- Custom vector project artwork (no stock-image dependency)
- Contact form that opens the visitor's email client
- SEO metadata, sitemap, robots, and Open Graph image
- Accessibility and reduced-motion support

## Business Areas

1. Technology & Digital Platforms
2. Fintech & Payment Solutions
3. Tourism & Hospitality Development
4. Construction & Property Development
5. Business Consulting & Project Management

## Projects

- PawCircle
- Paynplus
- Hotelnplus
- Mountain Bike Tourism Complex
- Garden Café / Evelyn’s Place

## Requirements

- Node.js 20.9 or newer (an LTS release is recommended)
- npm included with Node.js

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production configuration

Copy `.env.example` to `.env.local` and update:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=your-business-email@your-domain.com
```

The current code uses `jjchoi888@gmail.com` only as a temporary fallback for the contact form. Replace it before public deployment if a dedicated corporate email will be used.

## Deploy

Push the folder to GitHub and import it into Vercel. Add the two environment variables in the Vercel project settings before deployment.

## Main editing files

- `lib/site-data.ts` — company areas, project descriptions, and approach
- `app/page.tsx` — homepage structure
- `app/globals.css` — global styling
- `components/project-visual.tsx` — project graphics


## Windows npm recovery

If npm reports `Exit handler never called`, close VS Code terminals, reopen PowerShell in the project directory, and run:

```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
npm config set registry https://registry.npmjs.org/
npm cache verify
npm install
```

The distributed lockfile already uses the public npm registry. Deleting it is only a fallback if the local npm cache or a previous partial installation is damaged.
