# lizardi.mx — Claude Code Project Brief

> **Project:** Personal Brand & Consulting Website  
> **Domain:** lizardi.mx  
> **Client:** José Manuel Lizardi  
> **Created:** December 2024  
> **Priority:** Production-Ready MVP

---

## 🎯 Executive Summary

Build a professional consulting website for **lizardi.mx** — an Information, Media & Security Consulting business based in Mexico City. The aesthetic is **"Defense Contractor Meets Intelligence Agency"** — sophisticated, tactical, and authoritative without being intimidating.

**Core Services:**
1. AI Consulting
2. Security Services (Cyber + Physical)
3. Brand Protection & Communications
4. Integrated Security (flagship offering)
5. Managed Services

**Key Differentiator:** Engineering rigor meets security expertise. The owner has a background in Civil/Chemical Engineering, Business Administration, GE Vernova (power plants), ISO 9001 auditing, and is pursuing IBM AI Engineering certification.

---

## 📋 Project Setup

### Initialize Git Repository FIRST

```bash
# Create project
mkdir lizardi-mx && cd lizardi-mx

# Initialize git immediately
git init
git branch -M main

# Create .gitignore
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
.pnpm-store/

# Build
dist/
.astro/

# Environment
.env
.env.*
!.env.example

# IDE
.vscode/*
!.vscode/extensions.json
.idea/

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*

# Testing
coverage/
playwright-report/
test-results/

# Misc
*.local
EOF

# Initial commit
git add .
git commit -m "chore: initialize project"
```

### Tech Stack

```bash
# Create Astro project
npm create astro@latest . -- --template minimal --typescript strict

# Add integrations
npx astro add tailwind
npx astro add sitemap

# Additional dependencies
npm install lucide-react
npm install @fontsource/space-grotesk @fontsource/inter @fontsource-variable/jetbrains-mono

# Dev dependencies
npm install -D prettier prettier-plugin-astro prettier-plugin-tailwindcss
npm install -D @playwright/test

# Commit
git add .
git commit -m "chore: add dependencies and integrations"
```

---

## 🎨 Design System

### Brand Identity

**Tagline:** "Information, Media & Security Consulting"  
**Sub-tagline:** "Protecting your business, data, and reputation in the digital age."

**Coordinates (Mexico City):** 19.37°N, 99.28°W  
**Status Display:** "● OPERATIONAL"

### Color Palette

```javascript
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'rich-black': '#0A0A0A',
        'tactical-navy': '#0D1B2A',
        'gunmetal': '#1C2833',
        'steel-gray': '#2C3E50',
        
        // Text
        'signal-white': '#F5F5F5',
        'intel-gray': '#8B9DC3',
        'muted-steel': '#5D6D7E',
        
        // Accents
        'electric-cyan': '#00D9FF',
        'alert-red': '#E63946',
        'operational-green': '#39FF14',
        'intel-gold': '#D4AF37',
        'command-purple': '#7B2CBF',
        
        // Logo (restricted usage)
        'gecko-green': '#00400D',
        'lockheed-blue': '#003366',
      },
    },
  },
}
```

### Typography

```javascript
fontFamily: {
  'display': ['Space Grotesk', 'system-ui', 'sans-serif'],
  'body': ['Inter', 'system-ui', 'sans-serif'],
  'mono': ['JetBrains Mono Variable', 'monospace'],
}
```

**Usage:**
- Headlines: Space Grotesk, UPPERCASE, letter-spacing: 0.05em
- Body: Inter, normal case
- Code/Coordinates: JetBrains Mono

### Design Principles

1. **Dark theme only** — No light mode
2. **Tactical aesthetic** — Grid overlays, corner brackets, status indicators
3. **Restrained accents** — Cyan primary, other colors sparingly
4. **Mobile-first** — Responsive from the start
5. **Performance** — Optimize images, lazy load, minimal JS
6. **Accessibility** — Respect prefers-reduced-motion, proper contrast

---

## 📁 Project Structure

```
lizardi-mx/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── SectionContainer.astro
│   │   │   ├── CornerBrackets.astro
│   │   │   ├── StatusIndicator.astro
│   │   │   └── CoordinateStamp.astro
│   │   ├── layout/
│   │   │   ├── Navigation.astro
│   │   │   ├── Footer.astro
│   │   │   ├── MobileMenu.astro
│   │   │   └── BaseHead.astro
│   │   ├── home/
│   │   │   ├── Hero.astro
│   │   │   ├── ServicesGrid.astro
│   │   │   ├── IntegratedCTA.astro
│   │   │   ├── AboutPreview.astro
│   │   │   └── NewsletterCTA.astro
│   │   ├── contact/
│   │   │   └── ContactForm.astro
│   │   ├── newsletter/
│   │   │   └── NewsletterForm.astro
│   │   └── ui/
│   │       ├── ScanLine.astro
│   │       ├── GradientOrb.astro
│   │       └── TacticalOverlay.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ServiceLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── newsletter.astro
│   │   ├── services/
│   │   │   ├── index.astro
│   │   │   ├── ai-consulting.astro
│   │   │   ├── security/
│   │   │   │   ├── index.astro
│   │   │   │   ├── cybersecurity.astro
│   │   │   │   ├── physical-security.astro
│   │   │   │   └── managed-services.astro
│   │   │   ├── brand-protection/
│   │   │   │   ├── index.astro
│   │   │   │   ├── reputation-defense.astro
│   │   │   │   └── crisis-communications.astro
│   │   │   └── integrated-security.astro
│   │   └── 404.astro
│   ├── styles/
│   │   ├── global.css
│   │   └── animations.css
│   ├── data/
│   │   ├── services.ts
│   │   ├── navigation.ts
│   │   └── social.ts
│   ├── lib/
│   │   ├── utils.ts
│   │   └── validation.ts
│   └── types/
│       └── index.ts
├── public/
│   ├── fonts/
│   ├── assets/
│   │   ├── heroes/
│   │   ├── sections/
│   │   └── icons/
│   ├── logo-gecko.svg
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   └── robots.txt
├── tests/
│   ├── e2e/
│   │   ├── navigation.spec.ts
│   │   ├── contact-form.spec.ts
│   │   ├── newsletter.spec.ts
│   │   └── accessibility.spec.ts
│   └── playwright.config.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

## 📄 Page Specifications

### Homepage (/)

**Sections in order:**

1. **Hero Section**
   - Full viewport height
   - Background: hero-home.webp with subtle overlay
   - Gecko logo (centered, with pulse-glow animation)
   - "LIZARDI CONSULTING" headline
   - "Information, Media & Security Consulting" tagline
   - Two CTAs: "Initiate Consultation" (primary), "View Operations" (secondary)
   - Corner brackets (subtle, 50% opacity cyan)
   - Coordinate stamp: "19.37°N, 99.28°W"
   - Status indicator: "● OPERATIONAL" with green pulse
   - Scan line animation (8s loop, 30% opacity)

2. **Services Grid**
   - "Operations & Services" headline with section marker (SEC-01)
   - 3-column grid (desktop), 1-column (mobile)
   - Cards for: AI Consulting, Security Services, Brand Protection
   - Each card: icon, title, description, "Learn More" arrow link
   - Card hover: lift 4px + cyan glow

3. **Integrated Security CTA**
   - Full-width dark section
   - "Full-Spectrum Protection" headline
   - Brief description of integrated offering
   - Visual: three-layer graphic (3.5)
   - CTA: "Request Briefing"

4. **About Preview**
   - Split layout (text left, credentials right)
   - Brief bio paragraph
   - Credential badges: GE Vernova, IBM AI Engineering, ISO 9001
   - "Meet the Operator" link

5. **Newsletter CTA**
   - "Stay Informed" headline
   - Email input + subscribe button (inline on desktop)
   - Brief value proposition
   - Corner brackets framing

6. **Footer**
   - Logo
   - Navigation links
   - Social links (LinkedIn, GitHub)
   - Mercalitica reference
   - Copyright + coordinates

---

### Contact Page (/contact)

**Critical: This page must be fully functional**

**Layout:**
```
┌─────────────────────────────────────────────────────┐
│ Hero: "Initiate Contact"                            │
│ Subtext: "Ready to discuss your security needs?"   │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─────────────────────┐  ┌──────────────────────┐ │
│  │ Contact Form        │  │ Direct Contact       │ │
│  │                     │  │                      │ │
│  │ Name*               │  │ Email:               │ │
│  │ [________________]  │  │ hola@lizardi.mx      │ │
│  │                     │  │                      │ │
│  │ Email*              │  │ Location:            │ │
│  │ [________________]  │  │ Mexico City          │ │
│  │                     │  │ 19.37°N, 99.28°W     │ │
│  │ Company             │  │                      │ │
│  │ [________________]  │  │ Social:              │ │
│  │                     │  │ [LinkedIn] [GitHub]  │ │
│  │ Service Interest    │  │                      │ │
│  │ [▼ Select...]       │  │ Response Time:       │ │
│  │                     │  │ 24-48 hours          │ │
│  │ Message*            │  │                      │ │
│  │ [________________]  │  └──────────────────────┘ │
│  │ [________________]  │                          │
│  │ [________________]  │                          │
│  │                     │                          │
│  │ [ Send Message ]    │                          │
│  └─────────────────────┘                          │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Form Fields:**
- Name (required)
- Email (required, validated)
- Company (optional)
- Service Interest (dropdown: AI Consulting, Security, Brand Protection, Integrated, Other)
- Message (required, min 20 chars)

**Form Handling:**
- Client-side validation with clear error messages
- Submit to serverless function (Netlify Forms or custom endpoint)
- Success state: "Message received. Expect response within 24-48 hours."
- Error state: Clear error message with retry option

**Security Considerations:**
- Honeypot field for spam prevention
- Rate limiting consideration
- Sanitize all inputs
- CSRF protection if using custom backend

---

### Newsletter Page (/newsletter)

**Layout:**
```
┌─────────────────────────────────────────────────────┐
│ Hero: "Intelligence Briefings"                      │
│ Subtext: "Subscribe to strategic insights"          │
├─────────────────────────────────────────────────────┤
│                                                     │
│  What you'll receive:                               │
│  • AI trends and practical applications             │
│  • Security insights and threat awareness           │
│  • Reputation intelligence                          │
│  • Curious Indicators (unique data perspectives)    │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │ Email                                        │   │
│  │ [____________________________________]      │   │
│  │                                              │   │
│  │ [ Subscribe ]                               │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  Frequency: Weekly or bi-weekly                     │
│  Unsubscribe anytime.                               │
│                                                     │
└─────────────────────────────────────────────────────┘
```

**Integration Options:**
1. Beehiiv embed
2. Substack embed
3. Custom with serverless function

**For MVP:** Use a simple form that stores to a JSON file or connects to a mailing list service.

---

## 🧩 Component Specifications

### Button Component

```astro
---
// src/components/common/Button.astro
interface Props {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  class?: string;
}

const { 
  variant = 'primary', 
  size = 'md', 
  href, 
  type = 'button',
  disabled = false,
  class: className = '' 
} = Astro.props;

const baseStyles = `
  inline-flex items-center justify-center
  font-display font-semibold uppercase tracking-wider
  transition-all duration-300
  disabled:opacity-50 disabled:cursor-not-allowed
  relative overflow-hidden
`;

const variants = {
  primary: `
    bg-electric-cyan text-rich-black
    hover:shadow-[0_0_20px_rgba(0,217,255,0.4)]
    active:scale-[0.98]
  `,
  secondary: `
    border border-electric-cyan text-electric-cyan bg-transparent
    hover:bg-electric-cyan hover:text-rich-black
  `,
  ghost: `
    text-signal-white bg-transparent
    hover:text-electric-cyan
  `,
};

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const Element = href ? 'a' : 'button';
---

<Element
  href={href}
  type={!href ? type : undefined}
  disabled={disabled}
  class:list={[baseStyles, variants[variant], sizes[size], className]}
>
  <span class="relative z-10"><slot /></span>
  {variant === 'primary' && (
    <span class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
  )}
</Element>
```

### Card Component

```astro
---
// src/components/common/Card.astro
interface Props {
  hover?: boolean;
  class?: string;
}

const { hover = true, class: className = '' } = Astro.props;
---

<div
  class:list={[
    'relative p-6 bg-gunmetal/50 border border-steel-gray/30',
    hover && 'group hover:border-electric-cyan/50 hover:shadow-[0_0_30px_rgba(0,217,255,0.1)] hover:-translate-y-1 transition-all duration-300',
    className,
  ]}
>
  <!-- Corner Brackets -->
  <div class="absolute top-0 left-0 w-4 h-4 border-t border-l border-electric-cyan/30 group-hover:border-electric-cyan/60 transition-colors" />
  <div class="absolute top-0 right-0 w-4 h-4 border-t border-r border-electric-cyan/30 group-hover:border-electric-cyan/60 transition-colors" />
  <div class="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-electric-cyan/30 group-hover:border-electric-cyan/60 transition-colors" />
  <div class="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-electric-cyan/30 group-hover:border-electric-cyan/60 transition-colors" />
  
  <div class="relative z-10">
    <slot />
  </div>
</div>
```

### Navigation Component

```astro
---
// src/components/layout/Navigation.astro
import { navigation } from '../../data/navigation';
import Button from '../common/Button.astro';
---

<nav class="fixed top-0 left-0 right-0 z-50 bg-rich-black/90 backdrop-blur-sm border-b border-steel-gray/20">
  <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
    <!-- Logo -->
    <a href="/" class="flex items-center gap-3 group">
      <img 
        src="/logo-gecko.svg" 
        alt="Lizardi Consulting" 
        class="h-10 w-auto transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(0,217,255,0.3)]"
      />
      <span class="font-display font-semibold text-signal-white tracking-wider hidden sm:block">
        LIZARDI
      </span>
    </a>
    
    <!-- Desktop Navigation -->
    <div class="hidden md:flex items-center gap-8">
      {navigation.main.map((link) => (
        <a 
          href={link.href}
          class="nav-link text-intel-gray text-sm font-display uppercase tracking-wider hover:text-signal-white transition-colors relative"
        >
          {link.label}
        </a>
      ))}
    </div>
    
    <!-- CTA -->
    <div class="hidden md:block">
      <Button href="/contact" size="sm">Contact</Button>
    </div>
    
    <!-- Mobile Menu Button -->
    <button 
      id="mobile-menu-toggle"
      class="md:hidden text-signal-white p-2 hover:text-electric-cyan transition-colors"
      aria-label="Toggle menu"
    >
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>
</nav>

<!-- Mobile Menu (hidden by default) -->
<div id="mobile-menu" class="fixed inset-0 z-40 bg-rich-black/98 hidden md:hidden">
  <div class="flex flex-col items-center justify-center h-full gap-8">
    {navigation.main.map((link) => (
      <a 
        href={link.href}
        class="text-signal-white text-2xl font-display uppercase tracking-wider hover:text-electric-cyan transition-colors"
      >
        {link.label}
      </a>
    ))}
    <Button href="/contact" size="lg" class="mt-8">Contact</Button>
  </div>
</div>

<style>
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    width: 0;
    height: 1px;
    background: theme('colors.electric-cyan');
    transition: all 0.3s ease;
  }
  
  .nav-link:hover::after {
    left: 0;
    width: 100%;
  }
</style>

<script>
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  
  toggle?.addEventListener('click', () => {
    menu?.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
  });
  
  // Close menu when clicking a link
  menu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  });
</script>
```

---

## 🎬 Animations

### Global CSS Animations

```css
/* src/styles/animations.css */

/* Scan Line */
@keyframes scan {
  0%, 100% { 
    top: 0; 
    opacity: 0; 
  }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { 
    top: 100%; 
    opacity: 0; 
  }
}

.animate-scan {
  animation: scan 8s ease-in-out infinite;
}

/* Pulse Glow */
@keyframes pulse-glow {
  0%, 100% { 
    filter: drop-shadow(0 0 5px rgba(0, 217, 255, 0.2));
    opacity: 0.9;
  }
  50% { 
    filter: drop-shadow(0 0 20px rgba(0, 217, 255, 0.4));
    opacity: 1;
  }
}

.animate-pulse-glow {
  animation: pulse-glow 4s ease-in-out infinite;
}

/* Status Pulse */
@keyframes status-pulse {
  0%, 100% { 
    box-shadow: 0 0 0 0 rgba(57, 255, 20, 0.4);
  }
  50% { 
    box-shadow: 0 0 0 8px rgba(57, 255, 20, 0);
  }
}

.animate-status-pulse {
  animation: status-pulse 2s ease-in-out infinite;
}

/* Typing Cursor */
@keyframes blink {
  0%, 50% { border-color: theme('colors.electric-cyan'); }
  51%, 100% { border-color: transparent; }
}

.animate-typing-cursor {
  border-right: 2px solid;
  animation: blink 0.75s step-end infinite;
}

/* Reduced Motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .animate-scan,
  .animate-pulse-glow,
  .animate-status-pulse {
    animation: none;
  }
}
```

---

## 🔐 Security Considerations

### Form Security

1. **Input Validation**
   - Client-side: Real-time validation with clear feedback
   - Server-side: Always validate/sanitize on backend
   - Email: Proper regex validation
   - Message: Min/max length limits

2. **Spam Prevention**
   - Honeypot field (hidden input that bots fill)
   - Rate limiting on form submissions
   - Consider reCAPTCHA v3 for high-traffic

3. **Data Handling**
   - Never expose API keys in client code
   - Use environment variables
   - HTTPS only

```typescript
// src/lib/validation.ts
export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Basic XSS prevention
    .slice(0, 5000); // Limit length
}

export function validateContactForm(data: {
  name: string;
  email: string;
  message: string;
}): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};
  
  if (!data.name || data.name.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }
  
  if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (!data.message || data.message.length < 20) {
    errors.message = 'Message must be at least 20 characters';
  }
  
  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
```

### Headers & Meta

```astro
---
// src/components/layout/BaseHead.astro
interface Props {
  title: string;
  description: string;
  image?: string;
}

const { title, description, image = '/og-default.png' } = Astro.props;
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---

<!-- Security Headers (configure in hosting) -->
<!--
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
-->

<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="generator" content={Astro.generator} />

<title>{title} | Lizardi Consulting</title>
<meta name="description" content={description} />
<link rel="canonical" href={canonicalURL} />

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="icon" type="image/x-icon" href="/favicon.ico" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content={canonicalURL} />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={new URL(image, Astro.site)} />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={new URL(image, Astro.site)} />

<!-- Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

---

## 🧪 Testing with Playwright

### Setup

```bash
# Install Playwright
npm install -D @playwright/test
npx playwright install

# Create config
touch playwright.config.ts
```

### Playwright Config

```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:4321',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
  },
});
```

### Test Files

```typescript
// tests/e2e/navigation.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate to all main pages', async ({ page }) => {
    await page.goto('/');
    
    // Check logo is visible
    await expect(page.locator('img[alt="Lizardi Consulting"]')).toBeVisible();
    
    // Navigate to Services
    await page.click('text=Services');
    await expect(page).toHaveURL(/.*services/);
    
    // Navigate to About
    await page.click('text=About');
    await expect(page).toHaveURL(/.*about/);
    
    // Navigate to Contact
    await page.click('text=Contact');
    await expect(page).toHaveURL(/.*contact/);
  });
  
  test('should show mobile menu on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Desktop nav should be hidden
    await expect(page.locator('.hidden.md\\:flex')).toBeHidden();
    
    // Mobile menu button should be visible
    await expect(page.locator('#mobile-menu-toggle')).toBeVisible();
  });
});
```

```typescript
// tests/e2e/contact-form.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });
  
  test('should show validation errors for empty form', async ({ page }) => {
    await page.click('button[type="submit"]');
    
    await expect(page.locator('text=Name is required')).toBeVisible();
    await expect(page.locator('text=Email is required')).toBeVisible();
    await expect(page.locator('text=Message is required')).toBeVisible();
  });
  
  test('should validate email format', async ({ page }) => {
    await page.fill('input[name="email"]', 'invalid-email');
    await page.click('button[type="submit"]');
    
    await expect(page.locator('text=valid email')).toBeVisible();
  });
  
  test('should submit valid form', async ({ page }) => {
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="company"]', 'Test Company');
    await page.selectOption('select[name="service"]', 'ai-consulting');
    await page.fill('textarea[name="message"]', 'This is a test message that is long enough to pass validation.');
    
    await page.click('button[type="submit"]');
    
    // Should show success message
    await expect(page.locator('text=Message received')).toBeVisible({ timeout: 5000 });
  });
});
```

```typescript
// tests/e2e/accessibility.spec.ts
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility', () => {
  test('homepage should have no accessibility violations', async ({ page }) => {
    await page.goto('/');
    
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });
  
  test('contact page should have no accessibility violations', async ({ page }) => {
    await page.goto('/contact');
    
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });
  
  test('should respect prefers-reduced-motion', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto('/');
    
    // Scan line should not be animating
    const scanLine = page.locator('.animate-scan');
    const styles = await scanLine.evaluate((el) => 
      window.getComputedStyle(el).animationDuration
    );
    
    expect(styles).toBe('0.01ms');
  });
});
```

### Running Tests

```bash
# Run all tests
npx playwright test

# Run with UI
npx playwright test --ui

# Run specific test file
npx playwright test tests/e2e/contact-form.spec.ts

# Run in headed mode
npx playwright test --headed

# Generate report
npx playwright show-report
```

### Docker MCP Testing

If using Docker MCP with Playwright:

```bash
# In Docker container
docker exec -it <container> npx playwright test

# Or configure in package.json
{
  "scripts": {
    "test": "playwright test",
    "test:ui": "playwright test --ui",
    "test:docker": "docker exec lizardi-mx npx playwright test"
  }
}
```

---

## 📦 Data Files

### Services Data

```typescript
// src/data/services.ts
export interface Service {
  id: string;
  title: string;
  shortTitle?: string;
  icon: string;
  description: string;
  href: string;
  features: string[];
  featured?: boolean;
}

export const services: Service[] = [
  {
    id: 'ai-consulting',
    title: 'AI Consulting',
    icon: 'Brain',
    description: 'Pragmatic AI strategy and implementation for businesses ready to leverage artificial intelligence.',
    href: '/services/ai-consulting',
    features: [
      'AI strategy development',
      'Implementation roadmaps',
      'Integration with existing systems',
      'AI-assisted workflow design',
    ],
  },
  {
    id: 'security',
    title: 'Security Services',
    icon: 'Shield',
    description: 'Comprehensive protection across cyber and physical domains for businesses and residences.',
    href: '/services/security',
    features: [
      'Cybersecurity assessments',
      'Physical security systems',
      'Managed security services',
      '24/7 monitoring options',
    ],
  },
  {
    id: 'brand-protection',
    title: 'Brand Protection',
    icon: 'Megaphone',
    description: 'Reputation defense, crisis communications, and strategic messaging for information resilience.',
    href: '/services/brand-protection',
    features: [
      'Reputation monitoring',
      'Crisis communications',
      'Strategic messaging',
      'Digital threat response',
    ],
  },
  {
    id: 'integrated-security',
    title: 'Integrated Security',
    icon: 'Layers',
    description: 'Full-spectrum protection combining physical, cyber, and reputation defense.',
    href: '/services/integrated-security',
    featured: true,
    features: [
      'Physical premises security',
      'Cyber infrastructure protection',
      'Reputation monitoring & defense',
      'Unified threat assessment',
    ],
  },
];
```

### Navigation Data

```typescript
// src/data/navigation.ts
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const navigation = {
  main: [
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Newsletter', href: '/newsletter' },
    { label: 'Contact', href: '/contact' },
  ] as NavLink[],
  
  footer: [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Newsletter', href: '/newsletter' },
  ] as NavLink[],
  
  services: [
    { label: 'AI Consulting', href: '/services/ai-consulting' },
    { label: 'Security Services', href: '/services/security' },
    { label: 'Brand Protection', href: '/services/brand-protection' },
    { label: 'Integrated Security', href: '/services/integrated-security' },
  ] as NavLink[],
};
```

### Social Data

```typescript
// src/data/social.ts
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const social: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/josemanuel-lizardi/',
    icon: 'Linkedin',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/xXMantequillaXx',
    icon: 'Github',
  },
];

export const mercalitica = {
  name: 'Mercalitica',
  url: 'https://www.mercalitica.mx',
  teamUrl: 'https://www.mercalitica.mx/team',
};
```

---

## 📍 Asset Locations

All generated assets will be placed in:

```
/public/assets/
├── heroes/
│   ├── hero-home.webp
│   ├── hero-about.webp
│   └── hero-services.webp
├── sections/
│   ├── ai-consulting.webp
│   ├── cybersecurity.webp
│   ├── physical-security.webp
│   ├── brand-protection.webp
│   ├── integrated.webp
│   └── managed-services.webp
└── misc/
    ├── topo-map.webp
    └── fortress.webp

/public/
├── logo-gecko.svg
├── favicon.svg
├── favicon.ico
├── apple-touch-icon.png
└── og-default.png
```

---

## 🚀 Deployment Checklist

### Pre-Deployment

- [ ] All pages render correctly
- [ ] Forms submit successfully
- [ ] Mobile responsive on all pages
- [ ] All links work (no 404s except /404)
- [ ] Images optimized (WebP, proper sizing)
- [ ] Lighthouse score > 90 for all categories
- [ ] Playwright tests pass
- [ ] Accessibility tests pass
- [ ] No console errors

### Build & Deploy

```bash
# Build
npm run build

# Preview
npm run preview

# Deploy (Vercel)
npx vercel --prod

# Or (Netlify)
npx netlify deploy --prod
```

### Post-Deployment

- [ ] Verify SSL certificate
- [ ] Test contact form in production
- [ ] Check OG images on social platforms
- [ ] Submit sitemap to Google Search Console
- [ ] Set up analytics (optional)

---

## 📚 Reference Documents

The following design documents contain detailed specifications:

1. **lizardi-mx-requirements.md** — Business requirements, services, content strategy
2. **lizardi-mx-visual-guide.md** — Complete visual design system, components, layouts
3. **lizardi-mx-asset-requirements.md** — Asset specifications, file formats, dimensions
4. **lizardi-mx-asset-prompts-final.md** — AI image generation prompts (what to generate vs CSS)
5. **lizardi-mx-build-prompt.md** — Quick reference for component code

---

## ⚡ Quick Start Commands

```bash
# Development
npm run dev

# Build
npm run build

# Preview build
npm run preview

# Run tests
npm run test

# Lint
npm run lint

# Format
npm run format
```

---

## 🎯 Success Criteria

### MVP Must Have
- [x] Homepage with all sections
- [x] Services overview page
- [x] Contact page with working form
- [x] Newsletter signup
- [x] About page
- [x] Mobile responsive
- [x] Core animations (scan line, hover states)
- [x] SEO basics (meta tags, sitemap)
- [x] Accessibility compliant

### Nice to Have
- [ ] Individual service pages
- [ ] 404 page with brand personality
- [ ] Page transitions
- [ ] Blog section (Phase 2)
- [ ] Case studies (Phase 3)

---

*Claude Code Project Brief*  
*lizardi.mx — Information, Media & Security Consulting*  
*December 2024*
