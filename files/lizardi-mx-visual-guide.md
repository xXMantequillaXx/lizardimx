# lizardi.mx — Visual Aid & Art Direction Guidebook

> **Project:** Personal Brand Website  
> **Domain:** lizardi.mx  
> **Version:** 3.0 — Motion Edition  
> **Last Updated:** December 2024

---

## Table of Contents

1. [Visual Identity Overview](#1-visual-identity-overview)
2. [Tactical Aesthetic Direction](#2-tactical-aesthetic-direction)
3. [Color System](#3-color-system)
4. [Typography System](#4-typography-system)
5. [Logo Usage Guidelines](#5-logo-usage-guidelines)
6. [Photography & Imagery](#6-photography--imagery)
7. [Illustration & Graphics](#7-illustration--graphics)
8. [Iconography](#8-iconography)
9. [UI Component Patterns](#9-ui-component-patterns)
10. [Animation & Motion Design](#10-animation--motion-design) ⭐ NEW
11. [Media Asset Requirements](#11-media-asset-requirements)
12. [Asset Checklist](#12-asset-checklist)
13. [Do's and Don'ts](#13-dos-and-donts)
14. [Mood Board References](#14-mood-board-references)

---

## 1. Visual Identity Overview

### Brand Essence
The Lizardi visual identity embodies **operational precision** meeting **strategic intelligence**. The geometric gecko logo—with its low-poly facets and full-spectrum colors—represents adaptability, multidisciplinary capability, and the ability to operate across complex domains. The overall aesthetic draws from defense contractors (Lockheed Martin), intelligence agencies (CIA, Mossad), and tactical operations interfaces.

### Design Philosophy

| Principle | Expression |
|-----------|------------|
| **Precision** | Clean lines, intentional spacing, mathematical grids, coordinate overlays |
| **Authority** | Bold typography, structured hierarchy, commanding presence |
| **Intelligence** | Data visualization aesthetics, interconnected patterns, analytical depth |
| **Operational** | Status indicators, mission-critical clarity, HUD-style elements |
| **Controlled Power** | Restrained accent use, strategic color deployment, confident restraint |

### Visual Tone
- **Primary:** Authoritative, tactical, professionally dangerous
- **Secondary:** Intelligent, analytical, mission-ready
- **Tertiary:** Technical, precise, engineered
- **Avoid:** Playful/casual, corporate/generic, cluttered/chaotic, video game aesthetic

### Core Aesthetic: "Defense Contractor Meets Intelligence Agency"
The visual system uses rich dark backgrounds with tactical overlays, allowing strategic accent colors to create focal points and status indicators. Think Lockheed Martin's authority, CIA's modern boldness, and Mossad's operational minimalism.

---

## 2. Tactical Aesthetic Direction

### Design DNA Sources

| Reference | Elements to Adopt |
|-----------|-------------------|
| **Lockheed Martin** | Dark navy/blue-black foundations, star/angular symbology, bold uppercase typography, aerospace precision |
| **CIA (2024 Rebrand)** | High-contrast black/white, singular red accent, interconnected thread patterns, fingerprint textures, glyph icons |
| **Mossad / Israeli Intel** | Extreme minimalism, Hebrew-inspired angular geometry, authoritative restraint, no-nonsense professionalism |
| **Defense UI/HUD** | Grid overlays, status indicators, targeting brackets, coordinate systems, mission briefing layouts |
| **Palantir** | Intelligence platform aesthetic, data visualization, operational dashboards |

### Tactical Visual Language

**Grid & Coordinate System:**
- Subtle coordinate grids in backgrounds (3-5% opacity)
- Corner markers with location data: `[ 19.37°N, 99.28°W ]`
- Section identifiers: `SEC-01`, `BRIEF-02`, `OP-03`

**HUD-Style Elements:**
- Targeting brackets around key content: `[ CONTENT ]`
- Status indicators: `● ACTIVE` `◐ PENDING` `○ INACTIVE`
- Corner accents resembling viewfinder/scope elements
- Scan lines for loading/transition states

**Classification Styling:**
- Badges: `[ CLASSIFIED ]` `[ CONFIDENTIAL ]` `[ FOR CLIENT EYES ONLY ]`
- Used for premium content, gated material, special sections
- Red or gold accent coloring

**Briefing/Dossier Aesthetic:**
- Service pages styled like intelligence briefings
- Headings: "MISSION PARAMETERS," "THREAT ASSESSMENT," "OPERATIONAL OBJECTIVES"
- Case studies as "AFTER ACTION REPORTS"
- Client work as "OPERATIONS"

### Tactical Typography Treatment

```
UPPERCASE FOR MAJOR HEADLINES
S P A C E D   L E T T E R I N G   F O R   E M P H A S I S
[ BRACKETED LABELS ]
SEC-01: Section Markers
STATUS: OPERATIONAL
```

### Motion & Animation Principles

| Type | Style | Duration | Easing |
|------|-------|----------|--------|
| Reveals | Sharp, precise | 300-400ms | ease-out (no bounce) |
| Transitions | Linear sweep | 200-300ms | linear |
| Loading | Horizontal scan line | 2s loop | linear |
| Text reveal | Typewriter effect | Variable | steps() |
| Status | Pulse/glow | 1.5s loop | ease-in-out |
| Radar | 360° sweep | 3s loop | linear |

### Sample UI Patterns

**Tactical Card:**
```
┌─────────────────────────────────────────┐
│ SEC-01                        ● ACTIVE  │
├─────────────────────────────────────────┤
│                                         │
│  [ CYBERSECURITY ]                      │
│                                         │
│  Network defense and threat             │
│  neutralization for critical            │
│  infrastructure protection.             │
│                                         │
│  ───────────────────────────────────    │
│  CLEARANCE: STANDARD                    │
│  [ REQUEST BRIEFING → ]                 │
│                                         │
└─────────────────────────────────────────┘
```

**Tactical Hero Section:**
```
┌────────────────────────────────────────────────────────────┐
│ ┌──                                                   ──┐  │
│                                                           │
│     L I Z A R D I  C O N S U L T I N G                   │
│                                                           │
│     ═══════════════════════════════════════════          │
│                                                           │
│     INFORMATION & SECURITY CONSULTING                     │
│     FOR THE DIGITAL AGE                                   │
│                                                           │
│     Protecting your business, data, and narrative         │
│     across physical, cyber, and information domains.      │
│                                                           │
│     [ INITIATE CONSULTATION ]     [ VIEW OPERATIONS ]     │
│                                                           │
│ └──                                                   ──┘  │
│                                                           │
│ 19.37°N, 99.28°W                   STATUS: OPERATIONAL   │
└────────────────────────────────────────────────────────────┘
```

---

## 3. Color System

### Tactical Color Palette

#### Backgrounds (Operational Foundation)

```
┌─────────────────────────────────────────────────────────────────────┐
│  Rich Black      Tactical Navy     Gunmetal        Steel Gray      │
│  #0A0A0A         #0D1B2A           #1C2833         #2C3E50         │
│  ████████        ████████          ████████        ████████        │
│  Primary BG      Secondary BG      Cards           Borders         │
└─────────────────────────────────────────────────────────────────────┘
```

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Rich Black | `#0A0A0A` | 10, 10, 10 | Primary background |
| Tactical Navy | `#0D1B2A` | 13, 27, 42 | Secondary background, depth |
| Gunmetal | `#1C2833` | 28, 40, 51 | Card backgrounds, sections |
| Steel Gray | `#2C3E50` | 44, 62, 80 | Borders, dividers, hover states |

#### Text Colors

```
┌─────────────────────────────────────────────────────────────────────┐
│  Signal White    Intel Gray        Muted Steel     Dim Gray        │
│  #F5F5F5         #8B9DC3           #5D6D7E         #4A4A4A         │
│  ████████        ████████          ████████        ████████        │
│  Headlines       Secondary         Tertiary        Disabled        │
└─────────────────────────────────────────────────────────────────────┘
```

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Signal White | `#F5F5F5` | 245, 245, 245 | Primary text, headlines |
| Intel Gray | `#8B9DC3` | 139, 157, 195 | Secondary text (blue-tinted) |
| Muted Steel | `#5D6D7E` | 93, 109, 126 | Tertiary text, captions |
| Dim Gray | `#4A4A4A` | 74, 74, 74 | Disabled states |

#### Operational Accent Colors

```
┌─────────────────────────────────────────────────────────────────────┐
│  Electric Cyan   Alert Red         Tactical Orange  Op Green       │
│  #00D9FF         #E63946           #FF6B35          #39FF14        │
│  ████████        ████████          ████████         ████████       │
│  Friendly/Tech   Critical/CTA      Warning          Success        │
├─────────────────────────────────────────────────────────────────────┤
│  Intel Gold      Command Purple                                    │
│  #D4AF37         #7B2CBF                                           │
│  ████████        ████████                                          │
│  Featured/Class  Special Ops                                       │
└─────────────────────────────────────────────────────────────────────┘
```

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Electric Cyan | `#00D9FF` | 0, 217, 255 | Links, tech elements, friendly status |
| Alert Red | `#E63946` | 230, 57, 70 | Primary CTAs, critical alerts, threat indicators |
| Tactical Orange | `#FF6B35` | 255, 107, 53 | Warnings, attention required |
| Operational Green | `#39FF14` | 57, 255, 20 | Success, active status, "go" signals |
| Intel Gold | `#D4AF37` | 212, 175, 55 | Featured content, classified styling, premium |
| Command Purple | `#7B2CBF` | 123, 44, 191 | Special sections, advanced services |
| **Gecko Green** | `#00400D` | 0, 64, 13 | **Logo primary color**, dark forest green |
| **Lockheed Blue** | `#003366` | 0, 51, 102 | **Logo alternative**, deep navy blue |

#### Status Color System

```css
/* Operational Status */
--status-active:    #39FF14;  /* Green - Operational */
--status-pending:   #FF6B35;  /* Orange - Standby */
--status-inactive:  #5D6D7E;  /* Gray - Offline */
--status-critical:  #E63946;  /* Red - Alert */
--status-secure:    #00D9FF;  /* Cyan - Protected */
```

### Tactical Gradients

```css
/* Primary - Authority (CTAs, Hero accents) */
--gradient-authority: linear-gradient(135deg, #E63946 0%, #0D1B2A 100%);

/* Secondary - Intelligence (Data viz, tech sections) */
--gradient-intel: linear-gradient(135deg, #00D9FF 0%, #0D1B2A 100%);

/* Classified - Premium content */
--gradient-classified: linear-gradient(135deg, #D4AF37 0%, #1C2833 100%);

/* Threat - Alert states */
--gradient-threat: linear-gradient(135deg, #E63946 0%, #FF6B35 100%);

/* Operational - Success states */
--gradient-operational: linear-gradient(135deg, #39FF14 0%, #00D9FF 100%);
```

### Color Usage Ratios

| Category | Percentage | Colors |
|----------|------------|--------|
| Backgrounds | 75-80% | Rich Black, Tactical Navy, Gunmetal |
| Text | 12-15% | Signal White, Intel Gray |
| Accents | 5-8% | Strategic use only |
| Alerts/CTAs | 2-3% | Red sparingly, for impact |
│  #FF6B35           #7B2CBF          #FFD700            │
│  ████████          ████████         ████████           │
│  Warnings          Special          Premium/Featured   │
└─────────────────────────────────────────────────────────┘
```

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Electric Cyan | `#00D9FF` | 0, 217, 255 | Primary CTAs, links, focus states |
| Hot Magenta | `#FF3CAC` | 255, 60, 172 | Hover states, highlights, emphasis |
| Lime Green | `#39FF14` | 57, 255, 20 | Success states, active indicators |
| Vibrant Orange | `#FF6B35` | 255, 107, 53 | Warnings, urgent callouts |
| Royal Purple | `#7B2CBF` | 123, 44, 191 | Special sections, premium content |
| Golden Yellow | `#FFD700` | 255, 215, 0 | Featured items, achievements |

### Gradient Definitions

#### Primary Gradient (Cyan → Magenta)
```css
background: linear-gradient(135deg, #00D9FF 0%, #FF3CAC 100%);
```
**Use for:** Primary CTAs, hero accents, section dividers

#### Secondary Gradient (Green → Cyan)
```css
background: linear-gradient(135deg, #39FF14 0%, #00D9FF 100%);
```
**Use for:** Success states, progress indicators, tech-focused sections

#### Warm Gradient (Orange → Magenta)
```css
background: linear-gradient(135deg, #FF6B35 0%, #FF3CAC 100%);
```
**Use for:** Urgent callouts, newsletter signup emphasis

#### Full Spectrum Gradient (Logo-inspired)
```css
background: linear-gradient(
  135deg, 
  #39FF14 0%, 
  #00D9FF 25%, 
  #7B2CBF 50%, 
  #FF3CAC 75%, 
  #FF6B35 100%
);
```
**Use for:** Special occasions, footer accents, loader animations (sparingly)

### Color Usage Ratios

```
Background Colors:  70-80%  ████████████████░░░░
Text Colors:        15-20%  ███░░░░░░░░░░░░░░░░░
Accent Colors:       5-10%  █░░░░░░░░░░░░░░░░░░░
```

**Rule:** Accent colors should be used strategically to draw attention. If everything is colorful, nothing stands out.

---

## 3. Typography System

### Font Stack

#### Display / Headlines
**Primary:** Clash Display or Space Grotesk  
**Alternative:** Cabinet Grotesk, Satoshi, General Sans

```css
font-family: 'Clash Display', 'Space Grotesk', system-ui, sans-serif;
```

**Characteristics:** Geometric, modern, slightly technical feel, good for large sizes

#### Body Text
**Primary:** Plus Jakarta Sans or DM Sans  
**Alternative:** Manrope, Inter (if others unavailable)

```css
font-family: 'Plus Jakarta Sans', 'DM Sans', system-ui, sans-serif;
```

**Characteristics:** Highly readable, friendly but professional, good x-height

#### Monospace / Code
**Primary:** JetBrains Mono or Fira Code  
**Alternative:** Source Code Pro

```css
font-family: 'JetBrains Mono', 'Fira Code', monospace;
```

**Use for:** Code snippets, technical data, "Curious Indicators" numbers

### Type Scale

| Level | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|-------|---------------|---------------|--------|-------------|
| H1 | 64px / 4rem | 40px / 2.5rem | 700 | 1.1 |
| H2 | 48px / 3rem | 32px / 2rem | 700 | 1.2 |
| H3 | 32px / 2rem | 24px / 1.5rem | 600 | 1.3 |
| H4 | 24px / 1.5rem | 20px / 1.25rem | 600 | 1.4 |
| Body Large | 20px / 1.25rem | 18px / 1.125rem | 400 | 1.6 |
| Body | 16px / 1rem | 16px / 1rem | 400 | 1.6 |
| Small | 14px / 0.875rem | 14px / 0.875rem | 400 | 1.5 |
| Caption | 12px / 0.75rem | 12px / 0.75rem | 400 | 1.4 |

### Typography Examples

```
H1: The Technical Mind Behind the Strategy
    Clash Display, 64px, Bold, #F5F5F5

H2: Services & Expertise
    Clash Display, 48px, Bold, #F5F5F5

H3: AI Consulting
    Space Grotesk, 32px, Semibold, #F5F5F5

Body: I combine engineering rigor with strategic thinking 
      to deliver AI solutions that actually work.
      Plus Jakarta Sans, 16px, Regular, #A0A0A0

Accent Text: VIEW CASE STUDY →
            Space Grotesk, 14px, Semibold, #00D9FF
```

### Text Styling Rules

1. **Headlines:** Always Off-White (#F5F5F5), may use gradient text for hero H1
2. **Body Copy:** Cool Gray (#A0A0A0) for comfortable dark-mode reading
3. **Links:** Electric Cyan (#00D9FF), underline on hover
4. **Emphasis:** Use accent colors sparingly, or bold white text
5. **Code/Data:** Monospace font, slightly smaller size, may use accent color

---

## 4. Logo Usage Guidelines

### Primary Logo
The geometric gecko in full color on black/dark backgrounds.

### Logo Variations Needed

| Variant | Use Case | File Needed |
|---------|----------|-------------|
| **Full Color on Dark** | Website header, social profiles | SVG, PNG @2x |
| **White Silhouette** | Watermarks, favicon fallback | SVG, PNG |
| **Grayscale** | Print contexts, minimalist use | SVG, PNG |
| **Favicon** | Browser tab icon | ICO, PNG 32x32, 16x16 |
| **Social Avatar** | Profile pictures | PNG 400x400 |

### Clear Space
Maintain padding equal to the width of the gecko's head around all sides of the logo.

```
    ┌─────────────────────┐
    │     [clear]         │
    │  ┌─────────────┐    │
    │  │   GECKO     │    │
    │  │   LOGO      │    │
    │  └─────────────┘    │
    │     [clear]         │
    └─────────────────────┘
```

### Minimum Sizes
- **Digital:** 32px height minimum
- **Print:** 0.5 inch / 12mm height minimum

### Logo Don'ts
- ❌ Don't rotate the logo
- ❌ Don't stretch or distort proportions
- ❌ Don't place on busy backgrounds without sufficient contrast
- ❌ Don't add effects (drop shadows, outer glows, bevels)
- ❌ Don't change the colors within the logo
- ❌ Don't crop parts of the gecko
- ❌ Don't outline the logo
- ❌ Don't place inside shapes (circles, squares) that crop it

---

## 5. Photography & Imagery

### Photography Style

#### Overall Aesthetic
- **Mood:** Dark, moody, high-contrast
- **Lighting:** Dramatic, directional lighting; avoid flat lighting
- **Color Treatment:** Desaturated base with selective color pops
- **Subject Matter:** Technology, engineering, abstract patterns

#### Portrait Photography (If Used)
- Dark backgrounds preferred
- Dramatic side lighting
- Professional but approachable expression
- May incorporate tech elements (screens, reflections)
- Dress code: Smart casual, dark colors

#### Stock Photography Guidelines
When selecting stock images, look for:

**DO seek:**
- Dark backgrounds with light subjects
- Abstract technology imagery
- Geometric patterns and structures
- Industrial/engineering contexts (turbines, power plants, machinery)
- Data visualization aesthetics
- Dramatic lighting with colored accents
- Aerial/drone shots of infrastructure
- Circuit boards, server rooms, tech hardware

**AVOID:**
- Generic smiling business people with laptops
- Bright, white backgrounds
- Oversaturated rainbow colors
- Cheesy tech imagery (random binary code, robot hands)
- Overly busy compositions
- Low-resolution or watermarked images
- AI-generated images that look obviously fake

### Image Treatments

#### Standard Treatment
```css
filter: grayscale(20%) contrast(1.1) brightness(0.95);
```
Slightly desaturated, increased contrast to fit dark theme.

#### Accent Overlay Treatment
Apply colored overlay using accent colors at 15-25% opacity:
```css
/* Cyan overlay */
background: linear-gradient(135deg, rgba(0,217,255,0.15), rgba(0,217,255,0.05));

/* Magenta overlay */
background: linear-gradient(135deg, rgba(255,60,172,0.15), rgba(255,60,172,0.05));
```

#### Duotone Treatment
For stylized imagery:
```css
filter: grayscale(100%);
/* Then apply gradient overlay map */
/* Dark: #0A0A0A, Light: #00D9FF */
```

#### Grain Overlay
Subtle noise texture for depth and consistency:
```css
background-image: url('/textures/grain.png');
opacity: 0.03-0.05;
mix-blend-mode: overlay;
```

### Recommended Image Sources

| Source | URL | Best For |
|--------|-----|----------|
| Unsplash | unsplash.com | Dark/moody photos, abstract, tech |
| Pexels | pexels.com | Technology, business, industrial |
| Pixabay | pixabay.com | Free vectors, industrial imagery |
| Generated (Midjourney) | — | Custom abstract art, patterns |
| Generated (DALL-E) | — | Conceptual illustrations |

### Image Keywords for Searching

```
Dark technology, Abstract data, Geometric pattern dark,
Industrial machinery, Power plant night, Turbine closeup,
Circuit board macro, Server room blue, Network visualization,
Code on screen dark, Engineering blueprint, Data center,
Futuristic dark, Cyber security, Digital abstract
```

---

## 6. Illustration & Graphics

### Illustration Style

#### Primary: Geometric / Low-Poly
Inspired by the gecko logo, illustrations should feature:
- Triangular/polygonal shapes
- Faceted surfaces creating 3D effect
- Color gradients within geometric shapes
- Technical/blueprint aesthetic
- Sharp edges, no organic curves

#### Secondary: Abstract Data Art
For content like "Curious Indicators":
- Line graphs and charts with glowing neon accents
- Network/connection node visualizations
- Flowing particle streams
- Topographic-style contour lines
- Heat maps with accent color gradients

#### Tertiary: Technical Diagrams
For process explanations or service descriptions:
- Clean line diagrams
- Flowcharts with geometric nodes
- System architecture visualizations
- Minimal, high-contrast style

### Graphic Elements Library

#### Background Patterns

**1. Triangle Mesh**
```
Subtle interconnected triangles
Opacity: 3-5%
Color: #252525 lines on #0A0A0A
```

**2. Dot Grid**
```
Evenly spaced dots
Opacity: 5-8%
Color: #333333
Size: 2px dots, 20px spacing
```

**3. Hexagonal Grid**
```
Tech/data inspired
Opacity: 3-5%
Color: #1E1E1E fills, #252525 strokes
```

**4. Circuit Lines**
```
PCB-inspired pathways
Opacity: 5-10%
Color: Accent color at low opacity
```

#### Glow Effects

**Accent Glow (for buttons, cards on hover)**
```css
box-shadow: 0 0 40px rgba(0, 217, 255, 0.3);
```

**Intense Glow (for special emphasis)**
```css
box-shadow: 
  0 0 20px rgba(0, 217, 255, 0.4),
  0 0 40px rgba(0, 217, 255, 0.2),
  0 0 60px rgba(0, 217, 255, 0.1);
```

#### Gradient Orbs (Background Atmosphere)

Blurred circular gradients for ambient depth:
```css
/* Cyan orb */
.orb-cyan {
  background: radial-gradient(circle, rgba(0,217,255,0.15) 0%, transparent 70%);
  filter: blur(80px);
  width: 400px;
  height: 400px;
}

/* Magenta orb */
.orb-magenta {
  background: radial-gradient(circle, rgba(255,60,172,0.12) 0%, transparent 70%);
  filter: blur(100px);
  width: 500px;
  height: 500px;
}
```

### Custom Graphic Assets to Create

| Asset | Description | Priority |
|-------|-------------|----------|
| Hero Background | Subtle geometric mesh or abstract pattern | High |
| Section Dividers | Gradient lines, angular shapes, or wave patterns | High |
| Service Icons | Custom geometric icons for AI, Newsletter, Smart Home | High |
| Skills Visualization | Radar chart or node network showing expertise areas | Medium |
| "Curious Indicators" Template | Chart/graph visual style for financial theories | Medium |
| Certificate/Badge Graphics | For displaying certifications, achievements | Low |
| Loading Animation | Gecko-inspired or geometric loader | Low |
| 404 Page Illustration | On-brand error state graphic | Low |

---

## 7. Iconography

### Icon Style Specifications

- **Type:** Outlined/linear (not filled/solid)
- **Stroke Width:** 1.5px consistent
- **Corners:** Slightly rounded (2px radius)
- **Caps:** Round
- **Style:** Geometric, minimal, technical
- **Optical Balance:** Icons should feel equal weight

### Icon Grid System

```
┌─────────────────────────┐
│ ┌─────────────────────┐ │
│ │                     │ │
│ │    SAFE AREA        │ │
│ │    20 × 20px        │ │
│ │                     │ │
│ └─────────────────────┘ │
│      24 × 24px          │
│      (with 2px padding) │
└─────────────────────────┘
```

### Icon Sizes

| Size | Dimensions | Use Case |
|------|------------|----------|
| XS | 16 × 16px | Inline with text, dense UI |
| SM | 20 × 20px | Buttons, form elements |
| MD | 24 × 24px | Default, navigation, lists |
| LG | 32 × 32px | Feature callouts, cards |
| XL | 48 × 48px | Service cards, hero sections |
| 2XL | 64 × 64px | Large feature blocks |

### Icon Color States

| State | Color | Example |
|-------|-------|---------|
| Default | Cool Gray `#A0A0A0` | Navigation icons |
| Hover | Electric Cyan `#00D9FF` | Interactive elements |
| Active | Off-White `#F5F5F5` | Selected state |
| Disabled | Dim Gray `#666666` | Inactive elements |
| On Gradient | Off-White `#F5F5F5` | Icons on colored backgrounds |

### Recommended Icon Libraries

| Library | URL | Notes |
|---------|-----|-------|
| **Lucide** | lucide.dev | React-ready, clean geometric, MIT license |
| **Phosphor** | phosphoricons.com | Adjustable weight, great variety |
| **Heroicons** | heroicons.com | By Tailwind team, simple |
| **Tabler Icons** | tabler-icons.io | 3000+ icons, consistent style |

### Required Custom Icons

Create or source these specific icons:

| Icon Name | Description | Usage |
|-----------|-------------|-------|
| `ai-brain` | Brain with circuit/network pattern | AI Consulting service |
| `newsletter` | Envelope with signal/broadcast lines | Newsletter service |
| `smart-home` | House with shield/lock element | Smart Home & Security |
| `chart-curious` | Abstract chart with question mark | Curious Indicators |
| `process-flow` | Connected nodes/workflow | Process/Quality content |
| `globe-trilingual` | Globe with language indicators | Language capability |
| `gecko-mark` | Simplified gecko silhouette | Brand accent icon |
| `turbine` | Simplified turbine blade | Energy sector reference |
| `certificate` | Document with checkmark/seal | Certifications |

---

## 8. UI Component Patterns

### Cards

#### Standard Service Card
```
┌────────────────────────────────────────┐
│                                        │
│   [48px Icon - Cyan]                   │
│                                        │
│   Service Title                        │
│   H3, Off-White, 24px                  │
│                                        │
│   Brief description of the service     │
│   with enough detail to explain        │
│   the value proposition clearly.       │
│   Body, Cool Gray, 16px                │
│                                        │
│   LEARN MORE →                         │
│   Cyan, 14px, Semibold                 │
│                                        │
└────────────────────────────────────────┘

Specs:
- Background: #141414
- Border: 1px solid #252525
- Border-radius: 16px
- Padding: 32px
- Hover: border-color transitions to #00D9FF
- Hover: subtle box-shadow glow
```

#### Blog/Insight Card
```
┌────────────────────────────────────────┐
│ ┌────────────────────────────────────┐ │
│ │                                    │ │
│ │         [Featured Image]           │ │
│ │         800 × 450px                │ │
│ │                                    │ │
│ └────────────────────────────────────┘ │
│                                        │
│   CATEGORY • 5 MIN READ                │
│   Caption, Cyan + Cool Gray            │
│                                        │
│   Article Title Goes Here              │
│   H4, Off-White                        │
│                                        │
│   Brief excerpt or description...      │
│   Body, Cool Gray                      │
│                                        │
└────────────────────────────────────────┘
```

#### Glassmorphism Card (Accent Use)
```css
.glass-card {
  background: rgba(20, 20, 20, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
}
```

### Buttons

#### Primary Button (Gradient)
```
┌──────────────────────────────┐
│      GET STARTED    →       │
└──────────────────────────────┘

Specs:
- Background: linear-gradient(135deg, #00D9FF, #FF3CAC)
- Text: #0A0A0A (dark), 14px, Semibold
- Padding: 14px 28px
- Border-radius: 8px
- Hover: scale(1.02), enhanced glow shadow
- Active: scale(0.98)
- Transition: all 200ms ease
```

#### Secondary Button (Outline)
```
┌──────────────────────────────┐
│      LEARN MORE     →       │
└──────────────────────────────┘

Specs:
- Background: transparent
- Border: 1.5px solid #00D9FF
- Text: #00D9FF, 14px, Semibold
- Padding: 14px 28px
- Border-radius: 8px
- Hover: background rgba(0,217,255,0.1)
```

#### Ghost Button (Text Only)
```
EXPLORE SERVICES →

Specs:
- Text: #00D9FF, 14px, Semibold
- No background, no border
- Hover: text-decoration underline, or arrow animation
```

### Form Inputs

#### Text Input
```
┌──────────────────────────────────────────┐
│  your@email.com                          │
└──────────────────────────────────────────┘

Specs:
- Background: #1E1E1E
- Border: 1px solid #252525
- Border-radius: 8px
- Padding: 14px 16px
- Text: #F5F5F5, 16px
- Placeholder: #666666
- Focus: border-color #00D9FF, subtle glow
- Error: border-color #FF6B35
```

#### Newsletter Signup Block
```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   Stay Updated                                          │
│   H3, Off-White                                         │
│                                                         │
│   Get insights on AI, marketing, and curious            │
│   theories delivered to your inbox.                     │
│   Body, Cool Gray                                       │
│                                                         │
│   ┌─────────────────────────────┬─────────────────┐    │
│   │  your@email.com             │  SUBSCRIBE  →   │    │
│   └─────────────────────────────┴─────────────────┘    │
│                                                         │
└─────────────────────────────────────────────────────────┘

Container: Glass card style
Input + Button: Inline on desktop, stacked on mobile
```

### Navigation

#### Desktop Header
```
┌────────────────────────────────────────────────────────────────┐
│  [GECKO LOGO]     About   Services   Insights   Newsletter   [CTA BUTTON]  │
└────────────────────────────────────────────────────────────────┘

Specs:
- Background: rgba(10, 10, 10, 0.85)
- Backdrop-filter: blur(20px)
- Position: fixed, top
- Height: 72px
- Border-bottom: 1px solid rgba(255,255,255,0.05)
- Links: #F5F5F5, hover → #00D9FF
- CTA: Primary button (smaller padding)
```

#### Mobile Menu
```
┌──────────────────────┐
│  [LOGO]        [☰]   │  ← Header with hamburger
└──────────────────────┘

┌──────────────────────┐
│                      │
│       About          │  ← Full-screen overlay
│       Services       │
│       Insights       │
│       Newsletter     │
│                      │
│   ┌──────────────┐   │
│   │  CONTACT ME  │   │
│   └──────────────┘   │
│                      │
│   [Social Icons]     │
│                      │
└──────────────────────┘

Specs:
- Background: #0A0A0A (solid)
- Links: Centered, large (24px), spaced
- Animation: Slide in from right or fade
```

### Section Layouts

#### Hero Section
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    [Gradient Orbs in Background]                │
│                                                                 │
│                                                                 │
│         The Technical Mind                                      │
│         Behind the Strategy                                     │
│         H1, 64px, may use gradient text                         │
│                                                                 │
│         Engineering rigor meets AI strategy.                    │
│         Body Large, Cool Gray                                   │
│                                                                 │
│         ┌────────────────┐  ┌────────────────┐                 │
│         │  GET STARTED   │  │  LEARN MORE    │                 │
│         └────────────────┘  └────────────────┘                 │
│                                                                 │
│                          ↓ Scroll                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Services Grid
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    What I Offer                                 │
│                    H2, Centered                                 │
│                                                                 │
│   ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐│
│   │                 │  │                 │  │                 ││
│   │  AI Consulting  │  │   Newsletter    │  │   Smart Home    ││
│   │                 │  │    Strategy     │  │   & Security    ││
│   │                 │  │                 │  │                 ││
│   └─────────────────┘  └─────────────────┘  └─────────────────┘│
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

Desktop: 3-column grid
Tablet: 2-column
Mobile: 1-column stack
```

---

## 10. Animation & Motion Design

> **Principle:** Motion should feel like surveillance systems, command centers, and intelligence dashboards — purposeful, subtle, and never distracting from content.

### Animation Philosophy

| Principle | Application |
|-----------|-------------|
| **Purposeful** | Every animation suggests monitoring, analysis, or status change |
| **Subtle** | 5-15% intensity — noticed subconsciously, not consciously |
| **Performance** | 60fps target, prefer CSS/SVG over video |
| **Accessible** | Always respect `prefers-reduced-motion` |

### Motion Language

**Timing:**
- **Fast interactions:** 150-250ms (hovers, clicks)
- **Medium transitions:** 300-500ms (reveals, state changes)
- **Slow ambient:** 3-8s (background animations, pulses)

**Easing:**
- **UI interactions:** `ease-out` or `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- **Ambient motion:** `ease-in-out` for smooth loops
- **Technical/scan:** `linear` for mechanical feel

### Core Animations

#### Scanning Line
Horizontal cyan line sweeping vertically across hero sections.
- Duration: 8 seconds
- Opacity: 30%
- Use on: Hero sections, full-width containers

#### Pulsing Glow
Subtle breathing effect on accent elements.
- Duration: 4 seconds
- Intensity: 20-40% opacity shift
- Use on: Logo, CTAs, status indicators

#### Typing Effect
Monospace text appearing character by character.
- Speed: 40 characters over 3 seconds
- Cursor: 2px cyan, blinks at 0.75s
- Use on: Headlines, coordinates, taglines

#### Grid Pulse
Radial pulse emanating from center of background grids.
- Duration: 6 seconds
- Spread: 80% of container
- Use on: Grid pattern overlays

#### Node Blink
Random blinking on network visualization nodes.
- Duration: 3 seconds per cycle
- Pattern: Staggered delays for organic feel
- Use on: Network graphics, connection points

### Hover States

**Buttons:**
- Scan line effect moving left to right
- Duration: 500ms
- Background: rgba(0, 217, 255, 0.2)

**Cards:**
- Lift: translateY(-4px)
- Shadow: Add cyan glow
- Duration: 300ms

**Navigation Links:**
- Underline growing from center
- Color: Electric Cyan (#00D9FF)
- Duration: 300ms

### Loading States

**Page Load:**
- 4-bar equalizer pulse
- Bar size: 4px × 20px
- Color: Electric Cyan
- Staggered 0.1s delays

**Content Load:**
- Skeleton screens with subtle shimmer
- Shimmer: 2 second sweep
- Direction: Left to right

### Video Loops (Optional Enhancement)

For premium pages, use 5-10 second seamless video loops:
- Format: MP4/WebM
- Resolution: 1920×1080 minimum
- Motion intensity: 10-15%
- Generate with: Runway ML, Pika, or Kling

### Accessibility Requirements

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Always provide static fallbacks for all animated elements.

---

## 11. Media Asset Requirements

### Image Generation Settings (Flux 2)

| Aspect Ratio | Generation Resolution | Final Resolution | Megapixels | Use Case |
|--------------|----------------------|------------------|------------|----------|
| **16:9** | 2688 × 1512 | 1920 × 1080 | 4.06 MP | Hero backgrounds |
| **1:1** | 2048 × 2048 | 1024 × 1024 | 4.19 MP | Patterns, logos |
| **4:3** | 2360 × 1770 | 1600 × 1200 | 4.18 MP | Service graphics |
| **3:1** | 3464 × 1155 | 1584 × 528 | 4.00 MP | Banners |

> Generate at high resolution, then downscale for web delivery.

### Image Specifications (Web Delivery)

| Asset Type | Dimensions | Aspect Ratio | Format | Max Size | Notes |
|------------|------------|--------------|--------|----------|-------|
| Hero Background | 2688 × 1512px | 16:9 | WebP, AVIF | 300KB | Generate at 4MP, provide @1x and @2x |
| Hero Background (Web) | 1920 × 1080px | 16:9 | WebP, AVIF | 150KB | Downscaled version |
| Blog Thumbnail | 800 × 450px | 16:9 | WebP | 80KB | Used in cards and OG |
| Blog Hero | 1200 × 675px | 16:9 | WebP | 150KB | Top of article |
| Service Icon | 96 × 96px | 1:1 | SVG | 5KB | Vector preferred |
| Profile Photo | 400 × 400px | 1:1 | WebP | 50KB | For About page |
| Team Link Photo | 200 × 200px | 1:1 | WebP | 30KB | Smaller contexts |
| OG Image | 1200 × 630px | 1.91:1 | PNG | 100KB | Social sharing |
| Twitter Card | 1200 × 600px | 2:1 | PNG | 100KB | Twitter specific |
| Favicon | 32 × 32px | 1:1 | ICO, PNG | 5KB | Browser tab |
| Favicon SVG | — | 1:1 | SVG | 3KB | Modern browsers |
| Apple Touch | 180 × 180px | 1:1 | PNG | 15KB | iOS home screen |
| Logo Primary | 200px height | — | SVG | 10KB | Website header |
| Logo Small | 40px height | — | SVG | 5KB | Compact uses |

### Responsive Image Breakpoints

Provide images at multiple widths for responsive loading:

```
Sizes: 400w, 800w, 1200w, 1600w, 2000w

Example srcset:
srcset="
  image-400.webp 400w,
  image-800.webp 800w,
  image-1200.webp 1200w,
  image-1600.webp 1600w
"
sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
```

### Video Specifications

| Type | Resolution | Format | Codec | Max Size | Duration |
|------|------------|--------|-------|----------|----------|
| Hero Background | 1920 × 1080 | MP4 | H.264 | 5MB | 10-15s loop |
| Demo/Explainer | 1920 × 1080 | MP4 | H.264 | — | As needed |
| Social Clip | 1080 × 1080 | MP4 | H.264 | 15MB | 15-60s |
| Story Format | 1080 × 1920 | MP4 | H.264 | 10MB | 15s |

**Video Guidelines:**
- Silent or with optional audio (autoplay requires muted)
- Seamless loop for background videos
- Compress with HandBrake or similar (CRF 23-28)
- Provide WebM fallback for better compression

### Animation Assets

| Type | Format | Duration | Priority | Notes |
|------|--------|----------|----------|-------|
| Scanning Line | CSS | 8s loop | MVP | Hero sections |
| Pulsing Glow | CSS | 4s loop | MVP | Logo, CTAs |
| Button Hover | CSS | 0.5s | MVP | Scan effect |
| Card Hover | CSS | 0.3s | MVP | Lift + glow |
| Nav Underline | CSS | 0.3s | MVP | Grow from center |
| Loading Bars | CSS | 1s loop | MVP | Page load |
| Typing Effect | CSS/JS | 3s | Phase 2 | Headlines |
| Grid Pulse | CSS | 6s loop | Phase 2 | Background |
| Corner Brackets | SVG | 0.5s | Phase 2 | Image frames |
| Radar Sweep | SVG | 4s loop | Phase 3 | Monitoring section |
| Logo Reveal | Lottie | 2.5s | Phase 3 | Page load |
| Network Pulse | Lottie | 3s loop | Phase 3 | AI section |
| Hero Video Loop | MP4/WebM | 5-10s | Phase 3 | Premium pages |

**Video Loop Specifications:**
- Resolution: 1920×1080 minimum (2688×1512 for 4K)
- Format: MP4 (H.264) + WebM fallback
- Motion intensity: 10-15% (subtle, not distracting)
- Seamless loop required
- Generate with: Runway ML, Pika, or Kling
- Compress: CRF 23-28

---

## 12. Asset Checklist

### Phase 1: MVP Launch (Must Have)

#### Brand Assets
- [ ] Gecko logo — HUD version (bracketed)
- [ ] Gecko logo — Stealth/simplified (favicon)
- [ ] Gecko logo — White silhouette SVG
- [ ] Favicon — ICO (16x16, 32x32 combined)
- [ ] Favicon — SVG
- [ ] Apple Touch Icon — PNG 180x180
- [ ] OG Image — Default site sharing image

#### Hero Backgrounds (2688 × 1512)
- [ ] 2.7 Homepage Main — Atmospheric Dark ⭐ PRIORITY
- [ ] 2.8 Homepage Main — Subtle Network (alternative)
- [ ] 2.1 Tactical Grid Network (regenerated, subtle)
- [ ] 2.3 Intelligence/Data Analysis (regenerated)
- [x] 2.2 Abstract Shield ✅
- [x] 2.4 Topographic Map ✅
- [x] 2.5 Geometric Fortress ✅
- [ ] 2.6 Encrypted Data Flow (regenerate with hashed characters)

#### Graphics
- [ ] Geometric background pattern (subtle, tileable)
- [ ] 2-3 gradient orbs for background depth
- [ ] Section divider element
- [ ] Corner brackets set

#### Icons
- [ ] 10 essential service icons
- [ ] 10 essential UI icons
- [ ] Social icons (LinkedIn, GitHub)

#### CSS Animations (MVP)
- [ ] Scanning line (hero sections)
- [ ] Pulsing glow (logo, CTAs)
- [ ] Button hover states
- [ ] Card hover effects
- [ ] Navigation underline
- [ ] Loading bars animation
- [ ] Reduced motion fallbacks

### Phase 2: Content Launch

#### Blog/Insights
- [ ] Default blog post featured image
- [ ] Category icons or color coding system

#### Newsletter
- [ ] Newsletter header graphic
- [ ] Subscribe success illustration

#### Service Section Graphics
- [ ] AI Consulting section background
- [ ] Cybersecurity section background
- [ ] Physical Security section background
- [ ] Strategic Communications background
- [ ] Integrated Security background
- [ ] Managed Services background

#### CSS Animations (Phase 2)
- [ ] Typing effect for headlines
- [ ] Grid pulse background
- [ ] Coordinate brackets SVG animation
- [ ] Counter/ticker animation

### Phase 3: Enhancement

#### Advanced Graphics
- [ ] Logo reveal Lottie animation
- [ ] Network pulse Lottie animation
- [ ] Data encryption Lottie animation
- [ ] 404 page illustration
- [ ] Loading animation (advanced)

#### Video Loops (Optional)
- [ ] Hero background video loop (Runway ML)
- [ ] Network topology video loop
- [ ] Encrypted data stream video loop

#### Additional Assets
- [ ] Radar sweep SVG animation
- [ ] Case study templates
- [ ] Testimonial card design
- [ ] Skills visualization graphic
- [ ] Timeline graphic for About page

---

## 13. Do's and Don'ts — Tactical Edition

### Overall Aesthetic

| ✅ DO | ❌ DON'T |
|-------|----------|
| Project authority and operational precision | Come across as playful or casual |
| Use tactical elements purposefully | Overdo military clichés (camo, excessive eagles) |
| Create sense of "controlled access" | Make it feel like a video game |
| Maintain professional, intelligence-agency restraint | Use every tactical effect available |
| Keep it sophisticated "Lockheed Martin meets CIA" | Go full "Call of Duty" aesthetic |
| Let the gecko logo be the colorful element | Compete with logo using rainbow accents |

### Color Usage — Tactical

| ✅ DO | ❌ DON'T |
|-------|----------|
| Use dark backgrounds (Rich Black, Navy, Gunmetal) | Use bright or light backgrounds |
| Deploy Alert Red strategically for CTAs only | Use red everywhere (loses impact) |
| Apply status colors meaningfully | Rainbow color everything |
| Use Cyan for tech/friendly indicators | Mix too many accent colors at once |
| Reserve Intel Gold for premium/classified content | Use gold generically |
| Keep 75-80% of screen as dark foundation | Let accents dominate the page |

### Typography — Tactical

| ✅ DO | ❌ DON'T |
|-------|----------|
| Use UPPERCASE for major headlines | Use all caps for body text |
| Add letter-spacing (0.1em) for emphasis | Space out everything excessively |
| Use monospace for codes, coordinates, data | Use decorative or script fonts anywhere |
| Keep hierarchy clear and military-precise | Make everything the same weight |
| Use bracketed labels `[ LIKE THIS ]` sparingly | Bracket every single element |
| Employ sharp, angular styling | Use soft, rounded, friendly elements |

### Imagery — Tactical

| ✅ DO | ❌ DON'T |
|-------|----------|
| Apply tactical filter (desaturate, high contrast) | Use untreated, colorful stock photos |
| Choose dark, moody, operational imagery | Use bright white background images |
| Include coordinate/grid overlays on heroes | Overload images with too many overlays |
| Use geometric/abstract security visuals | Use generic smiling business people |
| Source from defense/aerospace contexts | Use cute or whimsical imagery |

### Layout — Tactical

| ✅ DO | ❌ DON'T |
|-------|----------|
| Embrace generous "operational space" | Cram content into every pixel |
| Use grid overlays subtly (3-5% opacity) | Make grids too prominent/distracting |
| Add corner brackets on key sections | Put HUD elements on everything |
| Include status indicators where meaningful | Add fake status to non-operational content |
| Style sections like "briefings" or "dossiers" | Lose sight of usability for aesthetic |

### Icons & Graphics — Tactical

| ✅ DO | ❌ DON'T |
|-------|----------|
| Use sharper corners (2px radius max) | Use soft, rounded icon styles |
| Keep consistent 1.5-2px stroke weight | Mix filled and outlined icons |
| Add targeting/bracket accents sparingly | Make every icon look like a weapon |
| Use angular, geometric shapes | Use organic or hand-drawn styles |
| Color icons with status meaning | Make every icon a different color |

### Animation — Tactical

| ✅ DO | ❌ DON'T |
|-------|----------|
| Use sharp, precise transitions (ease-out) | Use bouncy or playful easing |
| Keep reveals quick (200-400ms) | Use slow, dramatic animations |
| Add scan line effects for loading | Animate everything constantly |
| Use typing effects for "classified" text | Make text bounce or wiggle |
| Include subtle status pulses | Add distracting background animations |
| Respect reduced-motion preferences | Force animations on all users |

### Content & Language — Tactical

| ✅ DO | ❌ DON'T |
|-------|----------|
| Use operational language ("mission," "brief") | Overdo jargon to the point of parody |
| Frame services as "operations" | Call everything "classified" |
| Style case studies as "after action reports" | Pretend to be an actual military org |
| Include section markers (SEC-01) | Number absolutely everything |
| Keep copy professional and direct | Write like a military manual |

---

## 14. Mood Board References

### Primary Inspiration Sites — Tactical & Defense

| Site | URL | What to Study |
|------|-----|---------------|
| **CIA** | cia.gov | Bold black/white, red accent, interconnected patterns, modern intel aesthetic |
| **Lockheed Martin** | lockheedmartin.com | Defense contractor authority, aerospace precision, bold typography |
| **Northrop Grumman** | northropgrumman.com | Dark professional aerospace aesthetic |
| **Anduril** | anduril.com | Modern defense tech startup, clean dark UI |
| **Palantir** | palantir.com | Intelligence/data platform aesthetic, operational dashboards |
| **Helsing.ai** | helsing.ai | European defense AI, minimalist authority |

### Secondary Inspiration — Tech & SaaS

| Site | URL | What to Study |
|------|-----|---------------|
| Linear | linear.app | Clean dark UI, typography, subtle animations |
| Vercel | vercel.com | Gradient usage, developer aesthetic |
| Raycast | raycast.com | Colorful accents on dark, component design |
| Stripe | stripe.com | Gradient mastery, depth, polish |

### Design Pattern References — Tactical

| Pattern | Reference |
|---------|-----------|
| HUD-style UI | Video game interfaces, cockpit displays |
| Classification badges | Government document styling |
| Status indicators | Mission control dashboards |
| Grid overlays | Military mapping software |
| Scan line animations | Security/surveillance systems |
| Briefing layouts | Intelligence document formats |

### Aesthetic Keywords for Searching

When looking for inspiration on Dribbble, Behance, or Pinterest:

```
Defense contractor website, Military UI design, Tactical interface,
Intelligence agency branding, HUD dark mode, Cyberpunk military,
Mission control dashboard, Aerospace web design, Security operations center,
Command center interface, Stealth aesthetic, Black ops UI,
Classified document design, Surveillance interface, Intel platform,
Dark mode defense, Military tech startup, Targeting system UI
```

### Additional Reference Sites

| Category | Sites |
|----------|-------|
| Defense Contractors | raytheon.com, bae.com, general-dynamics.com |
| Government/Intel | intelligence.gov, nsa.gov |
| Data/Analytics | observable.com, flourish.studio |
| Gaming (HUD refs) | callofduty.com, battlefield.com |

### Color Palette Inspiration Tools

| Tool | URL | Use For |
|------|-----|---------|
| Coolors | coolors.co | Palette generation |
| Realtime Colors | realtimecolors.com | Preview on mockup |
| Contrast Checker | webaim.org/resources/contrastchecker | Accessibility |
| Gradient Generator | cssgradient.io | Gradient CSS |

---

## Appendix A: CSS Variables (Copy-Paste Ready) — Tactical Edition

```css
:root {
  /* ═══════════════════════════════════════
     COLORS - BACKGROUNDS (Tactical Foundation)
     ═══════════════════════════════════════ */
  --color-bg-primary: #0A0A0A;      /* Rich Black */
  --color-bg-navy: #0D1B2A;         /* Tactical Navy */
  --color-bg-gunmetal: #1C2833;     /* Gunmetal */
  --color-bg-steel: #2C3E50;        /* Steel Gray */
  
  /* Legacy aliases */
  --color-bg-secondary: #0D1B2A;
  --color-bg-tertiary: #1C2833;
  --color-bg-elevated: #2C3E50;
  
  /* ═══════════════════════════════════════
     COLORS - TEXT
     ═══════════════════════════════════════ */
  --color-text-primary: #F5F5F5;    /* Signal White */
  --color-text-secondary: #8B9DC3;  /* Intel Gray (blue-tinted) */
  --color-text-tertiary: #5D6D7E;   /* Muted Steel */
  --color-text-disabled: #4A4A4A;   /* Dim Gray */
  
  /* ═══════════════════════════════════════
     COLORS - OPERATIONAL ACCENTS
     ═══════════════════════════════════════ */
  --color-accent-cyan: #00D9FF;     /* Friendly / Tech */
  --color-accent-red: #E63946;      /* Alert / Critical / CTAs */
  --color-accent-orange: #FF6B35;   /* Warning */
  --color-accent-green: #39FF14;    /* Operational / Success */
  --color-accent-gold: #D4AF37;     /* Featured / Classified */
  --color-accent-purple: #7B2CBF;   /* Special Operations */
  
  /* Legacy aliases */
  --color-accent-magenta: #E63946;  /* Now Alert Red */
  --color-accent-yellow: #D4AF37;   /* Now Intel Gold */
  
  /* ═══════════════════════════════════════
     STATUS COLORS
     ═══════════════════════════════════════ */
  --status-active: #39FF14;         /* Green - Operational */
  --status-pending: #FF6B35;        /* Orange - Standby */
  --status-inactive: #5D6D7E;       /* Gray - Offline */
  --status-critical: #E63946;       /* Red - Alert */
  --status-secure: #00D9FF;         /* Cyan - Protected */
  
  /* ═══════════════════════════════════════
     GRADIENTS - TACTICAL
     ═══════════════════════════════════════ */
  --gradient-authority: linear-gradient(135deg, #E63946 0%, #0D1B2A 100%);
  --gradient-intel: linear-gradient(135deg, #00D9FF 0%, #0D1B2A 100%);
  --gradient-classified: linear-gradient(135deg, #D4AF37 0%, #1C2833 100%);
  --gradient-threat: linear-gradient(135deg, #E63946 0%, #FF6B35 100%);
  --gradient-operational: linear-gradient(135deg, #39FF14 0%, #00D9FF 100%);
  
  /* Legacy gradients */
  --gradient-primary: linear-gradient(135deg, #E63946 0%, #0D1B2A 100%);
  --gradient-secondary: linear-gradient(135deg, #00D9FF 0%, #0D1B2A 100%);
  
  /* ═══════════════════════════════════════
     TYPOGRAPHY - TACTICAL
     ═══════════════════════════════════════ */
  --font-display: 'Space Grotesk', 'Bebas Neue', system-ui, sans-serif;
  --font-body: 'Inter', 'IBM Plex Sans', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', 'Share Tech Mono', monospace;
  --font-tactical: 'Rajdhani', 'Space Grotesk', system-ui, sans-serif;
  
  /* Font Sizes */
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 2rem;      /* 32px */
  --text-4xl: 3rem;      /* 48px */
  --text-5xl: 4rem;      /* 64px */
  
  /* Letter Spacing - Tactical */
  --tracking-tight: -0.025em;
  --tracking-normal: 0;
  --tracking-wide: 0.05em;
  --tracking-tactical: 0.1em;      /* For spaced headlines */
  --tracking-ultra: 0.2em;         /* For maximum emphasis */
  
  /* ═══════════════════════════════════════
     SPACING
     ═══════════════════════════════════════ */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  
  /* ═══════════════════════════════════════
     BORDER RADIUS - TACTICAL (Sharper)
     ═══════════════════════════════════════ */
  --radius-none: 0;
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 6px;
  --radius-xl: 8px;
  --radius-2xl: 12px;
  --radius-full: 9999px;
  
  /* ═══════════════════════════════════════
     SHADOWS & EFFECTS - TACTICAL
     ═══════════════════════════════════════ */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.6);
  --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 8px 24px rgba(0, 0, 0, 0.5);
  --shadow-glow-cyan: 0 0 30px rgba(0, 217, 255, 0.25);
  --shadow-glow-red: 0 0 30px rgba(230, 57, 70, 0.3);
  --shadow-glow-green: 0 0 30px rgba(57, 255, 20, 0.25);
  --shadow-glow-gold: 0 0 30px rgba(212, 175, 55, 0.3);
  
  /* ═══════════════════════════════════════
     TRANSITIONS - TACTICAL (Sharp, Precise)
     ═══════════════════════════════════════ */
  --transition-instant: 100ms ease-out;
  --transition-fast: 150ms ease-out;
  --transition-base: 250ms ease-out;
  --transition-slow: 400ms ease-out;
  --transition-tactical: 200ms linear;  /* No easing for precision */
  
  /* ═══════════════════════════════════════
     Z-INDEX SCALE
     ═══════════════════════════════════════ */
  --z-base: 0;
  --z-above: 10;
  --z-dropdown: 100;
  --z-sticky: 200;
  --z-overlay: 300;
  --z-modal: 400;
  --z-toast: 500;
  
  /* ═══════════════════════════════════════
     TACTICAL UI ELEMENTS
     ═══════════════════════════════════════ */
  --border-tactical: 1px solid var(--color-bg-steel);
  --border-active: 1px solid var(--color-accent-cyan);
  --border-alert: 1px solid var(--color-accent-red);
}
```

---

## Appendix B: Tailwind Config Snippet — Tactical Edition

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Backgrounds
        'bg-primary': '#0A0A0A',
        'bg-navy': '#0D1B2A',
        'bg-gunmetal': '#1C2833',
        'bg-steel': '#2C3E50',
        
        // Text
        'text-primary': '#F5F5F5',
        'text-secondary': '#8B9DC3',
        'text-tertiary': '#5D6D7E',
        'text-disabled': '#4A4A4A',
        
        // Operational Accents
        'accent-cyan': '#00D9FF',
        'accent-red': '#E63946',
        'accent-orange': '#FF6B35',
        'accent-green': '#39FF14',
        'accent-gold': '#D4AF37',
        'accent-purple': '#7B2CBF',
        
        // Status
        'status-active': '#39FF14',
        'status-pending': '#FF6B35',
        'status-inactive': '#5D6D7E',
        'status-critical': '#E63946',
        'status-secure': '#00D9FF',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Bebas Neue', 'system-ui', 'sans-serif'],
        body: ['Inter', 'IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Share Tech Mono', 'monospace'],
        tactical: ['Rajdhani', 'Space Grotesk', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'tactical': '0.1em',
        'ultra': '0.2em',
      },
      borderRadius: {
        'tactical': '4px',
      },
      backgroundImage: {
        'gradient-authority': 'linear-gradient(135deg, #E63946 0%, #0D1B2A 100%)',
        'gradient-intel': 'linear-gradient(135deg, #00D9FF 0%, #0D1B2A 100%)',
        'gradient-classified': 'linear-gradient(135deg, #D4AF37 0%, #1C2833 100%)',
        'gradient-threat': 'linear-gradient(135deg, #E63946 0%, #FF6B35 100%)',
        'gradient-operational': 'linear-gradient(135deg, #39FF14 0%, #00D9FF 100%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 30px rgba(0, 217, 255, 0.25)',
        'glow-red': '0 0 30px rgba(230, 57, 70, 0.3)',
        'glow-green': '0 0 30px rgba(57, 255, 20, 0.25)',
        'glow-gold': '0 0 30px rgba(212, 175, 55, 0.3)',
      },
    },
  },
}
```

---

## Appendix C: Tactical Component Examples

### Tactical Button CSS

```css
.btn-tactical {
  background: var(--color-accent-red);
  color: var(--color-text-primary);
  font-family: var(--font-tactical);
  font-weight: 600;
  letter-spacing: var(--tracking-tactical);
  text-transform: uppercase;
  padding: var(--space-3) var(--space-6);
  border: none;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: var(--transition-fast);
}

.btn-tactical:hover {
  box-shadow: var(--shadow-glow-red);
  transform: translateY(-1px);
}

.btn-tactical-outline {
  background: transparent;
  border: 1px solid var(--color-accent-cyan);
  color: var(--color-accent-cyan);
}

.btn-tactical-outline:hover {
  background: rgba(0, 217, 255, 0.1);
  box-shadow: var(--shadow-glow-cyan);
}
```

### Tactical Card CSS

```css
.card-tactical {
  background: var(--color-bg-gunmetal);
  border: 1px solid var(--color-bg-steel);
  border-radius: var(--radius-md);
  padding: var(--space-6);
  position: relative;
}

.card-tactical::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gradient-intel);
}

.card-tactical-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--color-bg-steel);
}

.card-tactical-label {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-tertiary);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}

.card-tactical-status {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.status-dot.active { background: var(--status-active); }
.status-dot.pending { background: var(--status-pending); }
.status-dot.critical { background: var(--status-critical); }

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
```

### Tactical Heading CSS

```css
.heading-tactical {
  font-family: var(--font-display);
  font-weight: 700;
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: var(--tracking-tactical);
}

.heading-tactical-spaced {
  letter-spacing: var(--tracking-ultra);
}

.heading-tactical-bracketed::before {
  content: '[ ';
  color: var(--color-accent-cyan);
}

.heading-tactical-bracketed::after {
  content: ' ]';
  color: var(--color-accent-cyan);
}
```

### Classification Badge CSS

```css
.badge-classified {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  padding: var(--space-1) var(--space-3);
  border-radius: var(--radius-sm);
}

.badge-classified.confidential {
  background: rgba(212, 175, 55, 0.15);
  color: var(--color-accent-gold);
  border: 1px solid var(--color-accent-gold);
}

.badge-classified.classified {
  background: rgba(230, 57, 70, 0.15);
  color: var(--color-accent-red);
  border: 1px solid var(--color-accent-red);
}

.badge-classified.standard {
  background: rgba(0, 217, 255, 0.15);
  color: var(--color-accent-cyan);
  border: 1px solid var(--color-accent-cyan);
}
```

---

*Visual Aid & Art Direction Guidebook for lizardi.mx*  
*Version 2.0 — Tactical Edition — December 2024*
