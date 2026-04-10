# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## IMPORTANT: Read Next.js docs first

This project uses **Next.js 16.2.3** with **React 19.2.4** — versions that differ significantly from training data. Before writing any Next.js code, read the relevant guide in `node_modules/next/dist/docs/`. Key differences:

- Tailwind 4.x: uses `@import "tailwindcss"` (no config file, no `tailwind.config.js`)
- Server Actions use `"use server"` directive + `useActionState` hook (not `useFormState`)
- Server Components are the default; add `"use client"` only for interactivity/hooks

## Commands

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # production build (also runs TypeScript check)
npm run lint     # ESLint
```

There are no tests configured.

## Architecture

Single-page landing site for ООО «Мегастрой» (construction company). The entire site is one route (`/`) composed of section components rendered in `src/app/page.tsx`.

**Data flow:** All content is hardcoded in components — no CMS integration yet (Strapi planned). The only server-side logic is the contact form in `src/app/actions.ts` (Server Action), which currently logs submissions and needs a real email/CRM integration.

**Component pattern:** Every section in `src/components/` is a Server Component except `Header.tsx` (`"use client"` for mobile menu toggle) and `Contact.tsx` (`"use client"` for `useActionState` form state).

**Brand colors:**
- Accent cyan: `#50C8E0` (hover: `#6DD5E8`) — from company logo
- Dark background: `#1A1A1A` (deeper: `#0F0F0F`)
- Light section bg: `#F5F6F8`

**Logo:** `public/logo.png` — PNG with white background. On dark backgrounds wrap in `bg-white rounded` container (see `Header.tsx`).

**Contact form (`src/app/actions.ts`):** The `submitContactForm` Server Action is a stub — it logs to console. To wire up email delivery, replace the `console.log` with Resend/Nodemailer and add credentials via environment variables.

## Path alias

`@/*` maps to `src/*` (configured in `tsconfig.json`).
