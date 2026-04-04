# AGENTS.md

This file contains guidelines and commands for agentic coding agents working in this Next.js portfolio repository.

## Project Overview

Next.js 16 portfolio using App Router, TypeScript, Tailwind CSS, and shadcn/ui components with strict TypeScript configuration.

## Development Commands

```bash
npm run dev          # Start dev server (localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npx tsc --noEmit     # Run TypeScript type checking
npx prettier --write . # Format code
```

No testing framework configured - add tests if implementing new features.

## Code Style Guidelines

### Import Patterns

```typescript
// External libraries first
import { motion } from "framer-motion";
import Link from "next/link";

// Internal imports with @/ alias
import { Icons } from "@/components/common/icons";
import { cn } from "@/lib/utils";
```

- Use absolute imports with `@/` prefix
- External imports first, then internal
- Named exports preferred over default exports

### Component Patterns

```typescript
"use client"; // Add for client components

interface ComponentProps {
  // Props with TypeScript interfaces
}

export function ComponentName({ prop }: ComponentProps) {
  // PascalCase for components, kebab-case for files
}
```

- Add `"use client"` directive for client components
- Use forward refs for UI components
- Default exports for main components, named exports for utilities

### Styling Guidelines

```typescript
// Use Tailwind with cn() utility for conditional classes
className={cn("base-classes", isActive && "active-classes")}

// Use class-variance-authority for component variants
const buttonVariants = cva("base-classes", {
  variants: { variant: { default: "default-classes" } },
});
```

- Use Tailwind CSS for all styling
- Leverage shadcn/ui components and patterns
- Use `cn()` utility for conditional classes
- Implement CVA for component variants

### TypeScript Guidelines

```typescript
interface ProjectData {
  title: string;
  description: string;
  technologies: string[];
  links?: { github?: string; live?: string };
}

type ProjectStatus = "completed" | "in-progress" | "planned";
```

- All components must have TypeScript interfaces
- Use union types for constants and enums
- Leverage path aliases (`@/components/*`, `@/lib/*`)
- Strict mode enabled - no implicit any

### Error Handling Patterns

```typescript
// API routes
try {
  // API logic
} catch (error) {
  console.log(error);
  return new NextResponse("Internal error", { status: 500 });
}

// Environment variables
if (!formLink) {
  return new NextResponse("Configure env variables", { status: 500 });
}

// Client-side
} catch (err) {
  console.log("Err!", err);
}
```

- Always include try-catch blocks in API routes
- Validate environment variables before use
- Log errors for debugging

### File Structure and Naming

```
app/
├── (root)/           # Route groups with shared layouts
├── api/             # API routes
├── globals.css
├── layout.tsx
└── page.tsx

components/
├── common/          # Shared components
├── ui/             # shadcn/ui components
├── forms/          # Form components
├── projects/       # Project components
└── experience/     # Experience components

lib/                # Utility functions
hooks/              # Custom React hooks
providers/          # React context providers
config/             # Configuration and data
```

- Use kebab-case for file names (`project-card.tsx`)
- Use PascalCase for component names (`ProjectCard`)
- Group components by feature/domain
- Keep UI components separate in `/components/ui/`

### Environment Variables

Required env variables (see `.env.copy`):
- `GOOGLE_FORM_LINK` - Google Forms URL for contact
- `GOOGLE_FORM_FIELD_ID_*` - Google Forms field IDs
- `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID` - Google Analytics
- `NEXT_PUBLIC_RESUME_LINK` - Resume URL

## Development Workflow

1. Before changes: Run `npm run lint` and `npx tsc --noEmit`
2. Component development: Use existing shadcn/ui patterns
3. Styling: Follow Tailwind patterns, use design tokens from `tailwind.config.js`
4. TypeScript: Maintain strict typing, no implicit any
5. Formatting: Run `npx prettier --write .` before commits

## Key Dependencies

- Next.js 16 (App Router, React 19)
- TypeScript (strict mode enabled)
- Tailwind CSS (with custom design tokens)
- shadcn/ui (component library)
- Framer Motion (animations)
- React Hook Form (form handling)
- Lucide React (icons)
- Zustand (state management)

## Common Patterns

```typescript
// Navigation
<Link href={route} className={cn(active && "active-styles")}>{label}</Link>

// Server components - direct async/await
async function getData() {
  const data = await fetch(...);
  return data.json();
}

// Client components - use hooks
const [data, setData] = useState(null);

// Modal/Dialog patterns use existing modal provider from providers/modal-provider.tsx
```

## Notes for Agents

- Use modern Next.js patterns - avoid legacy pages router
- No test framework configured - add tests if implementing features
- Follow existing component patterns and naming conventions
- Use shadcn/ui components instead of custom UI when possible
- Maintain TypeScript strict mode compliance
- Check existing components for patterns before creating new ones
- Form validation uses Zod with React Hook Form
