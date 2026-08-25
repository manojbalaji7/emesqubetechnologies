# EMES Qube Technologies Website

A modern, mobile-responsive, SEO and AI optimized business website for an IT services company serving small and medium businesses.

## Stack
- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Zod validation

## Quick Start
```bash
npm install
cp .env.example .env.local
npm run dev
```
Open http://localhost:3000.

## Production Build
```bash
npm run build
npm run start
```

## Deployment
Recommended: Vercel, Azure Static Web Apps, or Azure App Service.
Set these environment variables in the hosting dashboard:
- NEXT_PUBLIC_SITE_URL
- NEXT_PUBLIC_WHATSAPP_NUMBER
- CONTACT_RECEIVER_EMAIL
- REQUEST_RECEIVER_EMAIL

The API routes validate form data. Connect your preferred email provider in `src/lib/email.ts`.
