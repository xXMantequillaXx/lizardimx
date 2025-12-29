# lizardi.mx

> **Information, Media & Security Consulting**

Professional consulting website for Lizardi Consulting, featuring a tactical defense contractor aesthetic with dark theme, tactical UI elements, and comprehensive security service offerings.

## 🚀 Features

- ✅ **Full-Stack Astro** with TypeScript strict mode
- ✅ **Tailwind CSS** with custom tactical color palette
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **SEO Optimized** - Meta tags, sitemap, semantic HTML
- ✅ **Accessible** - ARIA labels, keyboard navigation
- ✅ **Performance Focused** - Optimized builds, lazy loading
- ✅ **Form Validation** - Client-side validation with spam prevention
- ✅ **Playwright Testing** - E2E tests for navigation and forms

## 📁 Project Structure

```
lizardimx/
├── src/
│   ├── components/
│   │   ├── common/         # Reusable components (Button, Card, etc.)
│   │   ├── layout/         # Navigation, Footer, BaseHead
│   │   ├── home/           # Homepage sections
│   │   ├── contact/        # Contact form
│   │   ├── newsletter/     # Newsletter subscription
│   │   └── ui/             # UI elements (ScanLine, etc.)
│   ├── layouts/            # Page layouts
│   ├── pages/              # Routes (index, about, contact, etc.)
│   ├── styles/             # Global CSS and animations
│   ├── data/               # Static data (services, navigation, social)
│   ├── lib/                # Utilities and validation
│   └── types/              # TypeScript types
├── public/                 # Static assets
├── tests/e2e/             # Playwright tests
└── files/                 # Project documentation
```

## 🎨 Design System

### Colors

- **Backgrounds**: Rich Black, Tactical Navy, Gunmetal, Steel Gray
- **Text**: Signal White, Intel Gray, Muted Steel
- **Accents**: Electric Cyan (primary), Alert Red, Operational Green, Intel Gold

### Typography

- **Headlines**: Space Grotesk (uppercase, wide tracking)
- **Body**: Inter
- **Code**: JetBrains Mono Variable

### Design Principles

1. Dark theme only
2. Tactical aesthetic with grid overlays and corner brackets
3. Restrained cyan accent color
4. Mobile-first responsive design
5. Performance optimized
6. Respects prefers-reduced-motion

## 🛠️ Commands

```bash
# Development
npm run dev              # Start dev server at localhost:4321

# Build
npm run build           # Build for production
npm run preview         # Preview production build

# Testing
npm run test            # Run Playwright tests
npm run test:ui         # Run tests with UI
npm run test:headed     # Run tests in headed mode
```

## 📄 Pages

- **/** - Homepage with hero, services grid, integrated security CTA, about preview, newsletter CTA
- **/services** - Services overview with all offerings
- **/about** - About page with credentials and philosophy
- **/contact** - Contact form with validation
- **/newsletter** - Newsletter subscription

## 🔐 Security Features

- Client-side form validation
- Honeypot spam prevention
- Input sanitization
- Email format validation
- HTTPS only (configured in hosting)

## 🧪 Testing

Tests cover:
- Navigation across all pages
- Mobile menu functionality
- Contact form validation and submission
- Newsletter form validation
- Required field indicators

## 📦 Deployment

This site is ready to deploy to:
- Vercel (recommended)
- Netlify
- Cloudflare Pages
- Any static hosting service

Configure `site` in `astro.config.mjs` to your production URL.

## 📚 Documentation

See the `files/` directory for comprehensive project documentation:
- `CLAUDE-CODE-PROJECT-BRIEF.md` - Complete project specifications
- `lizardi-mx-requirements.md` - Business requirements
- `lizardi-mx-visual-guide.md` - Design system details
- `lizardi-mx-asset-requirements.md` - Asset specifications

## 🤝 Part of Mercalitica

Lizardi Consulting is part of [Mercalitica](https://www.mercalitica.mx), a collective of specialists providing integrated consulting services.

---

Built with [Astro](https://astro.build) | Styled with [Tailwind CSS](https://tailwindcss.com) | Tested with [Playwright](https://playwright.dev)
