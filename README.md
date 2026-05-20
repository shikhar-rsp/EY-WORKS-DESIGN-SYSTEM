# [Brand Name] Design System

A production-grade component library built with React, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **React 19** + **TypeScript 5**
- **Next.js 16** App Router
- **Tailwind CSS v4** (CSS-first, OKLCH color tokens)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to browse the component documentation.

## Available Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   └── brand-tokens.css    # Brand design tokens (colors, spacing, radius)
├── components/
│   ├── figma/              # Core UI components
│   └── fragments/          # Shared primitives & icon catalog
└── config/
    └── navigation.ts       # Sidebar & routing config
```

## Customizing Brand Tokens

All design tokens live in `src/app/brand-tokens.css`. Editing this file instantly retunes every component — colors, spacing, radius, and typography — without touching component code.

## Component Documentation

Each component has a dedicated docs page at `/components/{name}` with:
- Live interactive previews
- API reference
- Code examples (React, HTML, Vue, Flutter)
