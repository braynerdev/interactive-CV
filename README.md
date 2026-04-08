# Interactive CV Portfolio

Professional interactive portfolio built with Next.js, TypeScript, and Tailwind CSS.

**Live Demo:** https://braynerr.netlify.app/

## Features

- **Internationalization (i18n)** - Support for Portuguese (pt-BR) and English (en)
- **Dark/Light Theme** - Toggle with localStorage persistence
- **Modern Design** - Gradients, glassmorphism, glow effects
- **Fully Responsive** - Adaptive layout for all devices
- **Smooth Animations** - Framer Motion for elegant transitions
- **SEO Optimized** - Meta tags and semantic structure
- **High Performance** - Optimized for speed and accessibility

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| State Management | Zustand |
| Icons | Lucide React |

## Installation

```bash
npm install
npm run dev
```

For production:

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── validate-email/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AnimatedBackground.tsx
│   ├── Footer.tsx
│   ├── LoadingScreen.tsx
│   ├── Navbar.tsx
│   ├── Providers.tsx
│   └── SectionWrapper.tsx
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   ├── Skills.tsx
│   ├── Certifications.tsx
│   ├── Projects.tsx
│   ├── Languages.tsx
│   └── Contact.tsx
├── hooks/
│   ├── useTranslation.ts
│   └── useScrollSpy.ts
├── store/
│   └── useStore.ts
└── i18n/
    ├── index.ts
    ├── pt-BR.json
    └── en.json
```

## Customization

### Content

Edit translation files in `src/i18n/`:
- `pt-BR.json` - Portuguese content
- `en.json` - English content

### Colors

Edit colors in `tailwind.config.ts` under `primary` and `accent` properties.

### Images

Add images to `public/` folder and update references in translation files.

---

Made by João Brayner
