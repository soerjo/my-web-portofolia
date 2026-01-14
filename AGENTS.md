# AGENTS.md

This file contains guidelines and commands for agentic coding agents working in this Next.js portfolio repository.

## Project Overview

This is a Next.js 16 portfolio using App Router, TypeScript, Tailwind CSS, and shadcn/ui components. The project follows modern React patterns with strict TypeScript configuration.

## Development Commands

```bash
# Core development
npm run dev          # Start development server (localhost:3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# No testing framework configured - add tests if needed
```

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

- Use absolute imports with `@/` prefix for internal files
- External imports first, then internal imports
- Named exports preferred over default exports

### Component Patterns

```typescript
"use client"; // Add for client components

interface ComponentProps {
  // Define props with TypeScript interfaces
}

export function ComponentName({ prop }: ComponentProps) {
  // PascalCase for component names
  // kebab-case for file names
}
```

- Add `"use client"` directive for client components
- Use forward refs for UI components
- Define prop interfaces with `Props` suffix
- Default exports for main components, named exports for utilities

### Styling Guidelines

```typescript
// Use Tailwind with cn() utility for conditional classes
className={cn(
  "base-classes",
  isActive && "active-classes",
  variant && "variant-classes"
)}

// Use class-variance-authority for component variants
const buttonVariants = cva("base-classes", {
  variants: {
    variant: {
      default: "default-classes",
      destructive: "destructive-classes",
    },
  },
});
```

- Use Tailwind CSS for all styling
- Leverage shadcn/ui components and patterns
- Use `cn()` utility for conditional classes
- Implement CVA for component variants

### TypeScript Guidelines

```typescript
// Strict TypeScript usage
interface ProjectData {
  title: string;
  description: string;
  technologies: string[];
  links?: {
    github?: string;
    live?: string;
  };
}

// Use union types for constants
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
  return new NextResponse("Please configure the env variables", {
    status: 500,
  });
}

// Forms and client-side
} catch (err) {
  console.log("Err!", err);
  // Handle user-facing errors
}
```

- Always include try-catch blocks in API routes
- Validate environment variables before use
- Log errors appropriately for debugging

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
├── projects/       # Project-specific components
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

Required environment variables (see `.env.copy`):

- `GOOGLE_FORM_LINK` - Google Forms URL for contact
- `GOOGLE_FORM_FIELD_ID_*` - Google Forms field IDs
- `NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID` - Google Analytics
- `NEXT_PUBLIC_RESUME_LINK` - Resume URL

## Development Workflow

1. **Before making changes**: Run `npm run lint` to ensure code quality
2. **Component development**: Use existing shadcn/ui patterns
3. **Styling**: Follow Tailwind patterns, use design tokens from `tailwind.config.js`
4. **TypeScript**: Maintain strict typing, no implicit any
5. **Testing**: No test framework configured - add if implementing tests

## Key Dependencies

- **Next.js 16**: App Router, React 19
- **TypeScript**: Strict mode enabled
- **Tailwind CSS**: With custom design tokens
- **shadcn/ui**: Component library
- **Framer Motion**: Animations
- **React Hook Form**: Form handling
- **Lucide React**: Icons

## Common Patterns

### Navigation

```typescript
<Link href={route} className={cn(active && "active-styles")}>
  {label}
</Link>
```

### Data Fetching

```typescript
// Server components - direct async/await
async function getData() {
  const data = await fetch(...);
  return data.json();
}

// Client components - use hooks
const [data, setData] = useState(null);
```

### Modal/Dialog Patterns

Use existing modal provider patterns from `/providers/modal-provider.tsx`

## Notes for Agents

- This project uses modern Next.js patterns - avoid legacy pages router
- No test framework configured - add tests if implementing new features
- Follow existing component patterns and naming conventions
- Use shadcn/ui components instead of custom UI when possible
- Maintain TypeScript strict mode compliance
- Check existing components for patterns before creating new ones
