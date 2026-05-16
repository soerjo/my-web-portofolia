# AGENTS.md

## Commands

```bash
npm run dev          # Dev server (localhost:3000)
npm run build        # Production build
npm run start        # Production server
npm run lint         # ESLint (flat config, eslint.config.mjs)
npx tsc --noEmit     # Typecheck (strict mode)
npx prettier --write . # Format (with import organizing)
```

No test framework is configured.

**Before committing:** run `npm run lint` then `npx tsc --noEmit`.

## Architecture

Next.js 16 App Router portfolio. Single app, no monorepo.

- `app/(root)/` — all page routes (home, skills, projects, experience, contact, contributions, resume). Shared layout with nav + footer.
- `app/api/contact/route.ts` — contact form → Google Forms submission via fetch (requires env vars)
- `app/api/github-stars/route.ts` — fetches template repo star count from GitHub API
- `config/` — **all site data lives here** (site metadata, routes, projects, skills, experience, contributions, socials, pages). Edit these files to customize content.
- `components/` — grouped by feature (`common/`, `projects/`, `experience/`, `skills/`, `contact/`, `contributions/`, `forms/`, `modals/`)
- `components/ui/` — shadcn/ui components (config in `components.json`, style "default", base color "zinc")
- `providers/` — `modal-provider.tsx` (mount-gated modal via zustand store), `animation-provider.tsx` (passthrough wrapper)
- `hooks/` — `use-modal-store.ts` (zustand), `use-lock-body.ts`
- `lib/utils.ts` — `cn()` utility (clsx + tailwind-merge)
- `assets/fonts/` — local font (CalSans-SemiBold)

Dynamic routes: `app/(root)/projects/[projectId]/page.tsx`, `app/(root)/experience/[expId]/page.tsx` — lookup data from `config/projects.ts` and `config/experience.ts` arrays by id; invalid ids redirect. Route params use `Promise<{...}>` (Next.js 16 async params).

## Stack & Key Details

- **Next.js 16**, React 19, TypeScript (strict), Tailwind CSS 3, shadcn/ui, Framer Motion, Zustand, React Hook Form + Zod
- Path alias: `@/*` maps to repo root (`"./*"` in tsconfig)
- Prettier: no semicolons (`noSemi: true`), double quotes, trailing comma es5, `prettier-plugin-organize-imports`
- Themes: 7 themes via class-based dark mode (light, dark, retro, cyberpunk, paper, aurora, synthwave) — CSS variables in `globals.css`, safelist in `tailwind.config.js`
- `next-themes` with `ThemeProvider` wrapping the app in root layout
- Fonts: Inter (Google) + CalSans-SemiBold (local) via CSS variables `--font-sans` / `--font-heading`
- Contact form submits to Google Forms via URL query params — requires env vars to be set
- Deployment: Vercel (or Docker via `Dockerfile` + `docker-compose.yml`)

**Gotcha:** `@sendgrid/mail` and `nodemailer` are listed in package.json but are **not used** by the contact route. The contact route does a direct `fetch()` to Google Forms.

## Environment Variables

Copy `.env.copy` to `.env` and fill in:

- `GOOGLE_FORM_LINK` — Google Forms pre-filled link
- `GOOGLE_FORM_FIELD_ID_NAME/EMAIL/MESSAGE/SOCIAL` — Google Forms entry field IDs
- `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID` — Google Analytics
- `NEXT_PUBLIC_GOOGLE_VERIFICATION` — Google Search Console verification (used in `layout.tsx` metadata)
- `NEXT_PUBLIC_RESUME_LINK` — resume URL

## Conventions

- External imports first, then `@/` internal imports (enforced by prettier-plugin-organize-imports)
- `"use client"` directive on client components
- kebab-case filenames, PascalCase component names
- Named exports for most components; default exports for layouts/pages
- Use `cn()` for conditional Tailwind classes
- Use shadcn/ui components from `components/ui/` instead of building custom UI
- Modal/dialog patterns use `useModalStore` (zustand) + `ModalProvider` + `CustomModal`
- Form validation: Zod schemas with React Hook Form (`@hookform/resolvers`)
- API routes: always wrap in try-catch, validate env vars before use
