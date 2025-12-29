# lizardi.mx — Complete Asset Requirements & Production Checklist

> **Project:** Personal Brand Website  
> **Domain:** lizardi.mx  
> **Version:** 3.0 — Motion Edition  
> **Last Updated:** December 2024  
> **Status:** Asset Production Phase

---

## Document Purpose

This document consolidates ALL visual and media assets required to launch and maintain lizardi.mx. Use this as your master checklist during the production process.

---

## 0. Tactical Aesthetic Direction

### Design Philosophy: Defense Contractor Meets Intelligence Agency

The visual identity draws inspiration from organizations like **Lockheed Martin**, the **CIA's modern rebrand**, and **Mossad's** authoritative minimalism. This creates a sense of:

- **Precision & Authority** — Engineering-grade exactness
- **Operational Readiness** — Mission-critical clarity
- **Controlled Power** — Restrained but undeniably capable
- **Intelligence & Sophistication** — Strategic depth, not flashy

### Reference Aesthetic DNA

| Source | Elements to Adopt |
|--------|-------------------|
| **Lockheed Martin** | Dark navy/blue-black foundations, star/angular symbology, bold uppercase typography, aerospace precision, "21st Century Security" confidence |
| **CIA (2024 Rebrand)** | High-contrast black/white, singular red accent, interconnected thread patterns, fingerprint/topographic textures, glyph iconography, bold sans-serif |
| **Mossad / Israeli Intel** | Extreme minimalism, Hebrew-inspired angular geometry, authoritative restraint, no-nonsense professionalism |
| **Defense UI/HUD** | Grid overlays, status indicators, data visualization, targeting reticles, coordinate systems, mission briefing layouts |

### Tactical Color Refinement

**Primary Palette (Operational Foundation):**
```
Rich Black        #0A0A0A    — Primary background (unchanged)
Tactical Navy     #0D1B2A    — NEW: Secondary background, depth
Gunmetal          #1C2833    — NEW: Cards, elevated surfaces
Steel Gray        #2C3E50    — NEW: Borders, dividers
```

**Text Hierarchy:**
```
Signal White      #F5F5F5    — Primary text (unchanged)
Intel Gray        #8B9DC3    — NEW: Secondary text (blue-tinted)
Muted Steel       #5D6D7E    — Tertiary/disabled text
```

**Accent Colors (Status/Operational):**
```
Electric Cyan     #00D9FF    — Primary accent (retained - "friendly" status)
Alert Red         #E63946    — NEW: Critical alerts, warnings, CTAs
Tactical Orange   #FF6B35    — Secondary warnings (retained)
Operational Green #39FF14    — Success, active, "go" status (retained)
Intel Gold        #D4AF37    — NEW: Featured, classified, premium
Command Purple    #7B2CBF    — Special operations (retained)
Gecko Green       #00400D    — Logo primary color, dark forest green
Lockheed Blue     #003366    — Logo alternative, deep navy blue
```

**Tactical Accent Usage:**
- **Cyan:** Default links, friendly indicators, technology
- **Red:** Primary CTAs, critical information, threat indicators
- **Orange:** Warnings, attention required
- **Green:** Success states, active systems, "operational"
- **Gold:** Premium/featured content, "classified" styling
- **Purple:** Special sections, advanced/specialized services

### Typography — Tactical Refinement

**Display/Headlines:** 
- **Primary:** Space Grotesk (geometric, technical) or **Bebas Neue** (bold, commanding)
- **Alternative:** Rajdhani (angular, military-tech feel)
- Style: UPPERCASE for major headlines, increased letter-spacing (0.05-0.1em)

**Body Text:**
- **Primary:** Inter or IBM Plex Sans (clean, technical readability)
- Style: Regular weight, generous line-height (1.7)

**Tactical/Data:**
- **Primary:** JetBrains Mono or **Share Tech Mono**
- Usage: Coordinates, codes, data readouts, "classified" labels

**Headline Treatment Examples:**
```
INTEGRATED SECURITY SOLUTIONS
L I Z A R D I  C O N S U L T I N G
MISSION: PROTECT
SECTOR: NARRATIVE DEFENSE
STATUS: OPERATIONAL
```

### Tactical Visual Elements

**1. Grid Overlays & Coordinates**
- Subtle coordinate grid in backgrounds (like tactical maps)
- Corner markers: `[ 19.37°N, 99.28°W ]` (Mexico City coordinates)
- Section markers: `SEC-01`, `SEC-02`, etc.

**2. HUD-Style UI Elements**
- Targeting brackets around key elements: `[ CONTENT ]`
- Status indicators: `● ACTIVE`, `◐ PENDING`, `○ INACTIVE`
- Progress bars with tactical styling
- Corner accents resembling viewfinder/scope elements

**3. Interconnected Thread Patterns (CIA-inspired)**
- Subtle lines connecting related elements
- Network/constellation visualizations
- Data flow indicators

**4. Topographic/Fingerprint Textures**
- Contour line patterns in backgrounds
- Abstract topographic maps for section backgrounds
- Fingerprint swirl patterns (subtle, 3-5% opacity)

**5. Classification Badges**
- `[ CLASSIFIED ]`, `[ CONFIDENTIAL ]`, `[ FOR CLIENT EYES ONLY ]`
- Used stylistically for premium content or gated material
- Gold or red accent coloring

**6. Briefing/Dossier Styling**
- Service pages styled like intelligence briefings
- "Mission Parameters," "Threat Assessment," "Operational Objectives"
- Case studies as "After Action Reports"

### Tactical Iconography Style

- **Stroke weight:** 1.5-2px (slightly heavier than before)
- **Style:** Sharp corners (2px radius max), angular cuts
- **Additions:** 
  - Corner tick marks on icons
  - Targeting reticle elements
  - Status indicator dots

### Gecko Logo — Tactical Integration

The geometric gecko already fits the tactical aesthetic perfectly. Enhancements:
- Add subtle grid/coordinate overlay version
- Create "operational" badge version with status ring
- Develop HUD-style version with corner brackets
- Consider angular "stealth" simplified version

### Motion & Animation — Tactical Feel

- **Reveals:** Sharp, precise (no bouncy easing)
- **Transitions:** Linear or ease-out (military precision)
- **Scanning effects:** Horizontal line scans for loading states
- **Typing effects:** For "classified" text reveals
- **Glitch effects:** Subtle, for emphasis (not overused)
- **Radar sweep:** For monitoring/scanning sections

### Photography Treatment — Tactical Filter

Apply to all imagery:
```css
filter: 
  grayscale(30%)           /* Desaturate slightly */
  contrast(1.15)           /* Increase contrast */
  brightness(0.9);         /* Slightly darker */
  
/* Optional tactical overlay */
mix-blend-mode: overlay;
background: linear-gradient(
  135deg, 
  rgba(0,217,255,0.05) 0%, 
  rgba(230,57,70,0.05) 100%
);
```

### Sample UI Patterns

**Tactical Card:**
```
┌─────────────────────────────────────┐
│ SEC-01                    ● ACTIVE  │
├─────────────────────────────────────┤
│                                     │
│  [ AI CONSULTING ]                  │
│                                     │
│  Strategic implementation of        │
│  artificial intelligence systems    │
│  for operational advantage.         │
│                                     │
│  ─────────────────────────────────  │
│  CLEARANCE: STANDARD                │
│  [ INITIATE BRIEFING → ]            │
│                                     │
└─────────────────────────────────────┘
```

**Tactical Button States:**
```
[ DEFAULT ]     → Border: Steel Gray, Text: White
[ HOVER ]       → Border: Cyan, Glow effect
[ PRIMARY ]     → Background: Red, Text: White
[ ACTIVE ]      → Border: Green, "● ENGAGED"
```

### Mood Board Keywords

Search for inspiration using:
- "Defense contractor website design"
- "Military HUD interface"
- "Tactical UI dark mode"
- "Intelligence agency branding"
- "Aerospace control room interface"
- "Mission control dashboard"
- "Cyberpunk military aesthetic"
- "Stealth fighter cockpit UI"

### Reference Sites (Tactical Aesthetic)

| Site | Why It's Relevant |
|------|-------------------|
| [cia.gov](https://www.cia.gov) | Bold black/white, red accent, modern intel aesthetic |
| [lockheedmartin.com](https://www.lockheedmartin.com) | Defense contractor authority, precision |
| [northropgrumman.com](https://www.northropgrumman.com) | Aerospace, dark professional |
| [anduril.com](https://www.anduril.com) | Modern defense tech startup |
| [palantir.com](https://www.palantir.com) | Intelligence/data platform aesthetic |
| [helsing.ai](https://www.helsing.ai) | European defense AI, minimalist |
| [linear.app](https://linear.app) | Clean dark UI (tech reference) |

### Do's and Don'ts — Tactical Edition

**DO:**
- Use UPPERCASE for section headers and key labels
- Add subtle grid/coordinate elements
- Incorporate status indicators where appropriate
- Use red strategically (CTAs, critical info only)
- Maintain sharp, precise animations
- Create sense of "controlled access" and authority
- Use monospace for data/technical elements

**DON'T:**
- Overdo military clichés (camo, excessive stars/eagles)
- Use red everywhere (loses impact)
- Make it feel like a video game
- Sacrifice readability for aesthetic
- Add so many tactical elements it feels cluttered
- Use rounded, soft, "friendly" design elements
- Forget this is still a professional consulting brand

---

## Table of Contents

1. [Updated Service Structure](#1-updated-service-structure)
2. [Brand Assets](#2-brand-assets)
3. [Photography Requirements](#3-photography-requirements)
4. [Graphic Design Assets](#4-graphic-design-assets)
5. [Icon Library](#5-icon-library)
6. [UI Component Assets](#6-ui-component-assets)
7. [Content Graphics](#7-content-graphics)
8. [Animation Assets](#8-animation-assets)
9. [Social Media Kit](#9-social-media-kit)
10. [Print & Document Assets](#10-print--document-assets)
11. [Video Assets](#11-video-assets)
12. [Production Priority Matrix](#12-production-priority-matrix)
13. [Asset Specifications Quick Reference](#13-asset-specifications-quick-reference)
14. [File Naming Convention](#14-file-naming-convention)
15. [Delivery Checklist](#15-delivery-checklist)

---

## 1. Updated Service Structure

### Integrated Positioning

**Primary Brand Offering:**
> "Information & Security Consulting — Protecting your business, data, and narrative in the digital age."

### Service Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    LIZARDI CONSULTING                           │
│         "The Technical Mind Behind the Strategy"                │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐          │
│   │     AI      │   │  SECURITY   │   │  STRATEGIC  │          │
│   │ CONSULTING  │   │  SERVICES   │   │   COMMS     │          │
│   └─────────────┘   └─────────────┘   └─────────────┘          │
│                                                                 │
│   ┌─────────────────────────────────────────────────┐          │
│   │         INTEGRATED SECURITY & INTELLIGENCE      │          │
│   │    (Physical + Cyber + Narrative Protection)    │          │
│   └─────────────────────────────────────────────────┘          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Service Pillars Detail

#### Pillar 1: AI Consulting
- AI strategy development
- Implementation roadmaps
- Integration with existing systems
- AI-assisted workflow design

#### Pillar 2: Security Services (Residential + Commercial)

**Cybersecurity:**
- Security assessments & audits
- Network security implementation
- Threat monitoring (managed services)
- Incident response planning
- Compliance documentation (ISO mindset)

**Physical Security:**
- Camera system design & installation
- Access control systems
- Smart security integration
- Monitoring solutions

**Service Tiers:**
- Consulting (assessment, recommendations)
- Implementation (installation, configuration)
- Managed Services (ongoing monitoring, maintenance)

#### Pillar 3: Strategic Communications

**Narrative Control (Defensive):**
- Reputation monitoring
- Disinformation detection
- Crisis communications planning
- Brand protection strategies

**Narrative Management (Offensive):**
- Strategic messaging development
- Influence campaign design
- Persuasive content strategy
- Public perception shaping

**Propaganda Analysis:**
- Information environment assessment
- Competitor narrative analysis
- Media landscape mapping
- Counter-narrative development

#### Integrated Offering: Complete Security & Intelligence

For clients needing full-spectrum protection:
- Physical premises security
- Cyber infrastructure protection
- Information/narrative defense
- Unified threat monitoring
- Comprehensive risk assessment

### Service Page Structure

```
/services
├── /ai-consulting
├── /security
│   ├── /cybersecurity
│   ├── /physical-security
│   └── /managed-services
├── /strategic-communications
│   ├── /narrative-defense
│   └── /influence-strategy
└── /integrated-security (flagship offering)
```

---

## 2. Brand Assets

### 2.1 Logo Package

| Asset | Filename | Dimensions | Format | Status |
|-------|----------|------------|--------|--------|
| Primary logo (full color, dark bg) | `logo-primary-color.svg` | Vector | SVG | ☐ |
| Primary logo (full color, dark bg) | `logo-primary-color.png` | 800px height | PNG | ☐ |
| Primary logo (full color, dark bg) @2x | `logo-primary-color@2x.png` | 1600px height | PNG | ☐ |
| Logo white silhouette | `logo-white.svg` | Vector | SVG | ☐ |
| Logo white silhouette | `logo-white.png` | 800px height | PNG | ☐ |
| Logo grayscale | `logo-grayscale.svg` | Vector | SVG | ☐ |
| Logo black silhouette | `logo-black.svg` | Vector | SVG | ☐ |
| Logo horizontal lockup (if needed) | `logo-horizontal.svg` | Vector | SVG | ☐ |
| Logo + wordmark "LIZARDI" | `logo-wordmark.svg` | Vector | SVG | ☐ |
| Logo + wordmark "LIZARDI" | `logo-wordmark.png` | 400px height | PNG | ☐ |

### 2.2 Favicon Package

| Asset | Filename | Dimensions | Format | Status |
|-------|----------|------------|--------|--------|
| Favicon ICO (multi-size) | `favicon.ico` | 16, 32, 48px | ICO | ☐ |
| Favicon PNG 16x16 | `favicon-16x16.png` | 16 × 16px | PNG | ☐ |
| Favicon PNG 32x32 | `favicon-32x32.png` | 32 × 32px | PNG | ☐ |
| Favicon SVG | `favicon.svg` | Vector | SVG | ☐ |
| Apple Touch Icon | `apple-touch-icon.png` | 180 × 180px | PNG | ☐ |
| Android Chrome 192 | `android-chrome-192x192.png` | 192 × 192px | PNG | ☐ |
| Android Chrome 512 | `android-chrome-512x512.png` | 512 × 512px | PNG | ☐ |
| Safari Pinned Tab | `safari-pinned-tab.svg` | Vector (mono) | SVG | ☐ |
| MS Tile | `mstile-150x150.png` | 150 × 150px | PNG | ☐ |

### 2.3 Social Media Avatars

| Asset | Filename | Dimensions | Format | Platform | Status |
|-------|----------|------------|--------|----------|--------|
| LinkedIn profile | `avatar-linkedin.png` | 400 × 400px | PNG | LinkedIn | ☐ |
| Twitter/X profile | `avatar-twitter.png` | 400 × 400px | PNG | Twitter | ☐ |
| GitHub profile | `avatar-github.png` | 500 × 500px | PNG | GitHub | ☐ |
| Generic square avatar | `avatar-square.png` | 500 × 500px | PNG | General | ☐ |
| Newsletter avatar | `avatar-newsletter.png` | 200 × 200px | PNG | Email | ☐ |

---

## 3. Photography Requirements

### 3.1 Portrait Photography

| Asset | Filename | Dimensions | Format | Notes | Status |
|-------|----------|------------|--------|-------|--------|
| Professional headshot | `portrait-professional.jpg` | 800 × 800px | JPG/WebP | Dark bg, dramatic lighting | ☐ |
| Professional headshot @2x | `portrait-professional@2x.jpg` | 1600 × 1600px | JPG/WebP | High-res version | ☐ |
| Casual/approachable shot | `portrait-casual.jpg` | 800 × 800px | JPG/WebP | Optional, for About | ☐ |
| Action shot (working) | `portrait-working.jpg` | 1200 × 800px | JPG/WebP | Optional, at computer/desk | ☐ |

**Photography Direction:**
- Dark backgrounds (black, dark gray, or dark blue)
- Dramatic side lighting (not flat)
- Professional but approachable expression
- Clothing: Dark colors, smart casual
- May incorporate tech elements (screen reflections, subtle)

### 3.2 Stock Photography to Source

| Category | Quantity | Description | Usage | Status |
|----------|----------|-------------|-------|--------|
| Abstract tech/data | 5-8 | Dark backgrounds, glowing elements | Hero, backgrounds | ☐ |
| Cybersecurity themed | 4-6 | Locks, shields, networks, code | Security services | ☐ |
| Camera/surveillance | 3-4 | Security cameras, monitoring | Physical security | ☐ |
| AI/neural networks | 3-4 | Abstract AI visualization | AI consulting | ☐ |
| Strategic/chess/planning | 2-3 | Strategy metaphors | Strategic comms | ☐ |
| Industrial/engineering | 3-4 | Turbines, power plants, machinery | Background/credibility | ☐ |
| Communication/media | 2-3 | News, broadcasting, influence | Narrative services | ☐ |
| Smart home | 2-3 | Connected devices, modern homes | Residential security | ☐ |
| Office/commercial space | 2-3 | Modern offices, buildings | Commercial security | ☐ |

**Stock Photo Specifications:**
- Minimum resolution: 2400 × 1600px
- Dark/moody aesthetic
- High contrast
- License: Commercial use permitted
- Sources: Unsplash, Pexels, Adobe Stock

### 3.3 AI-Generated Imagery to Create

| Asset | Description | Style | Usage | Status |
|-------|-------------|-------|-------|--------|
| Abstract gecko pattern | Low-poly geometric pattern inspired by logo | Geometric, colorful on dark | Hero background | ☐ |
| Neural network visualization | Brain/network with glowing nodes | Tech, cyan/magenta accents | AI section | ☐ |
| Shield/fortress abstract | Protection/security metaphor | Geometric, authoritative | Security section | ☑ |
| Information flow | Data streams, narrative visualization | Abstract, flowing | Strategic comms | ☑ |
| Integrated defense | Combined physical/cyber/narrative visual | Complex, layered | Integrated offering | ☑ |

### AI Image Generation — Flux 2 Settings

**Resolution Reference:**
| Aspect Ratio | Dimensions | Megapixels | Use Case |
|--------------|------------|------------|----------|
| **16:9** | 2688 × 1512 | 4.06 MP | Hero backgrounds (full quality) |
| **1:1** | 2048 × 2048 | 4.19 MP | Patterns, logos |
| **4:3** | 2360 × 1770 | 4.18 MP | Service graphics |

### Hero Background Status

| ID | Image | Status | Overlay Needed | Use For |
|----|-------|--------|----------------|---------|
| 2.7 | Atmospheric Dark | ⏳ Generate | None | Homepage (primary) |
| 2.8 | Subtle Network | ⏳ Generate | None | Homepage (alt) |
| 2.1 | Tactical Grid | ⏳ Regenerate | Light (20%) | About page |
| 2.2 | Abstract Shield | ✅ Complete | Medium (40-60%) | Security Services |
| 2.3 | Intelligence | ⏳ Regenerate | Medium | AI Consulting |
| 2.4 | Topographic Map | ✅ Complete | Heavy (50-70%) | Strategic Comms |
| 2.5 | Geometric Fortress | ✅ Complete | Position text | Integrated Security |
| 2.6 | Encrypted Data | ⏳ Regenerate | Medium (30-40%) | Cybersecurity |

**Critical Design Principle:**
> Hero backgrounds must be **SUBTLE TEXTURES** (5-15% visual intensity) that support content overlay. They should NOT compete for attention with logo, headlines, or CTAs.

**Prompt Reference:**
See `lizardi-mx-asset-prompts.md` Section 2 for complete, updated prompts.

---

## 4. Graphic Design Assets

### 4.0 Tactical Overlay Elements (NEW)

| Asset | Filename | Dimensions | Format | Description | Status |
|-------|----------|------------|--------|-------------|--------|
| Coordinate grid overlay | `tactical-grid.svg` | Tileable | SVG | Subtle coordinate grid, 3-5% opacity | ☐ |
| Corner brackets (TL) | `tactical-bracket-tl.svg` | 40 × 40px | SVG | HUD-style corner marker | ☐ |
| Corner brackets (TR) | `tactical-bracket-tr.svg` | 40 × 40px | SVG | HUD-style corner marker | ☐ |
| Corner brackets (BL) | `tactical-bracket-bl.svg` | 40 × 40px | SVG | HUD-style corner marker | ☐ |
| Corner brackets (BR) | `tactical-bracket-br.svg` | 40 × 40px | SVG | HUD-style corner marker | ☐ |
| Targeting reticle | `tactical-reticle.svg` | 100 × 100px | SVG | Crosshair/scope element | ☐ |
| Status indicator set | `tactical-status.svg` | Various | SVG | ● ◐ ○ Active/Pending/Inactive | ☐ |
| Scan line animation | `tactical-scanline.svg` | 100% × 2px | SVG | Horizontal scanning line | ☐ |
| Thread connection lines | `tactical-threads.svg` | Various | SVG | CIA-style interconnecting lines | ☐ |
| Classification badge | `tactical-classified.svg` | 120 × 24px | SVG | [ CLASSIFIED ] label style | ☐ |
| Briefing header bar | `tactical-header-bar.svg` | 100% × 4px | SVG | Red accent line for sections | ☐ |
| Radar sweep element | `tactical-radar.svg` | 200 × 200px | SVG | Rotating radar animation base | ☐ |
| Coordinate stamp | `tactical-coords.svg` | 200 × 20px | SVG | "19.37°N 99.28°W" style | ☐ |
| Section marker | `tactical-section-marker.svg` | 80 × 24px | SVG | "SEC-01" style labels | ☐ |
| Data readout frame | `tactical-data-frame.svg` | 300 × 200px | SVG | HUD-style data container | ☐ |
| Topographic texture | `tactical-topo.svg` | Tileable | SVG | Contour line pattern | ☐ |
| Fingerprint swirl | `tactical-fingerprint.svg` | 400 × 400px | SVG | Abstract fingerprint pattern | ☐ |

### 4.1 Background Patterns

| Asset | Filename | Dimensions | Format | Description | Status |
|-------|----------|------------|--------|-------------|--------|
| Triangle mesh (subtle) | `pattern-triangles.svg` | Tileable | SVG | Interconnected triangles, 3-5% opacity | ☐ |
| Triangle mesh (PNG) | `pattern-triangles.png` | 1000 × 1000px | PNG | For fallback | ☐ |
| Dot grid | `pattern-dots.svg` | Tileable | SVG | Evenly spaced dots, 5-8% opacity | ☐ |
| Hexagonal grid | `pattern-hexagons.svg` | Tileable | SVG | Tech-inspired hexagons | ☐ |
| Circuit lines | `pattern-circuits.svg` | Tileable | SVG | PCB-inspired pathways | ☐ |
| Noise/grain texture | `texture-grain.png` | 500 × 500px | PNG | Subtle noise overlay, tileable | ☐ |
| Topographic lines | `pattern-topo.svg` | Tileable | SVG | Contour lines, data viz inspired | ☐ |

### 4.2 Gradient Orbs (Background Atmosphere)

| Asset | Filename | Dimensions | Format | Color | Status |
|-------|----------|------------|--------|-------|--------|
| Cyan orb large | `orb-cyan-lg.png` | 1000 × 1000px | PNG (transparent) | #00D9FF @ 15% | ☐ |
| Cyan orb medium | `orb-cyan-md.png` | 600 × 600px | PNG (transparent) | #00D9FF @ 15% | ☐ |
| Magenta orb large | `orb-magenta-lg.png` | 1000 × 1000px | PNG (transparent) | #FF3CAC @ 12% | ☐ |
| Magenta orb medium | `orb-magenta-md.png` | 600 × 600px | PNG (transparent) | #FF3CAC @ 12% | ☐ |
| Purple orb | `orb-purple.png` | 800 × 800px | PNG (transparent) | #7B2CBF @ 10% | ☐ |
| Green orb | `orb-green.png` | 600 × 600px | PNG (transparent) | #39FF14 @ 10% | ☐ |
| Mixed gradient orb | `orb-gradient.png` | 1200 × 1200px | PNG (transparent) | Cyan → Magenta | ☐ |

**Production Notes:**
- Create as circles with radial gradient (solid center → transparent edge)
- Apply Gaussian blur (80-120px radius) in final use
- Export with transparency
- Can be created in Figma, Photoshop, or Illustrator

### 4.3 Section Dividers

| Asset | Filename | Dimensions | Format | Description | Status |
|-------|----------|------------|--------|-------------|--------|
| Gradient line horizontal | `divider-gradient-h.svg` | 100% × 2px | SVG | Cyan → Magenta → Transparent | ☐ |
| Gradient line vertical | `divider-gradient-v.svg` | 2px × 100% | SVG | For sidebars | ☐ |
| Angular divider (down) | `divider-angle-down.svg` | 100% × 80px | SVG | Angled section transition | ☐ |
| Angular divider (up) | `divider-angle-up.svg` | 100% × 80px | SVG | Reverse angle | ☐ |
| Wave divider | `divider-wave.svg` | 100% × 60px | SVG | Subtle wave shape | ☐ |
| Geometric divider | `divider-geometric.svg` | 100% × 40px | SVG | Triangle/polygon pattern | ☐ |

### 4.4 Decorative Elements

| Asset | Filename | Dimensions | Format | Description | Status |
|-------|----------|------------|--------|-------------|--------|
| Corner accent (top-right) | `accent-corner-tr.svg` | 200 × 200px | SVG | Geometric corner decoration | ☐ |
| Corner accent (bottom-left) | `accent-corner-bl.svg` | 200 × 200px | SVG | Geometric corner decoration | ☐ |
| Quote marks decorative | `accent-quotes.svg` | 60 × 60px | SVG | For testimonials | ☐ |
| Bullet/list marker | `accent-bullet.svg` | 8 × 8px | SVG | Custom list bullet | ☐ |
| Arrow right (decorative) | `accent-arrow.svg` | 24 × 24px | SVG | For CTAs | ☐ |
| Gecko silhouette mark | `accent-gecko.svg` | 40 × 40px | SVG | Small brand accent | ☐ |

---

## 5. Icon Library

### 5.1 Service Icons (Custom, 48×48px base)

| Icon | Filename | Description | Service | Status |
|------|----------|-------------|---------|--------|
| AI Brain | `icon-ai-brain.svg` | Brain with circuit/neural pattern | AI Consulting | ☐ |
| Shield Lock | `icon-shield-lock.svg` | Shield with lock symbol | Cybersecurity | ☐ |
| Camera Eye | `icon-camera.svg` | Security camera / surveillance | Physical Security | ☐ |
| Network Nodes | `icon-network.svg` | Connected nodes/mesh | Network Security | ☐ |
| Home Shield | `icon-home-shield.svg` | House with protection symbol | Residential Security | ☐ |
| Building Shield | `icon-building-shield.svg` | Building with protection | Commercial Security | ☐ |
| Megaphone | `icon-megaphone.svg` | Communication/broadcasting | Strategic Comms | ☐ |
| Target Crosshair | `icon-target.svg` | Precision/targeting | Narrative Strategy | ☐ |
| Shield Radar | `icon-radar.svg` | Defensive scanning | Narrative Defense | ☐ |
| Chess Knight | `icon-strategy.svg` | Strategic thinking | Strategy | ☐ |
| Layers Stack | `icon-integrated.svg` | Multiple layers combined | Integrated Services | ☐ |
| Newsletter/Mail | `icon-newsletter.svg` | Envelope with signal lines | Newsletter | ☐ |
| Chart Trending | `icon-chart.svg` | Upward trend line | Curious Indicators | ☐ |
| Document Check | `icon-compliance.svg` | Document with checkmark | ISO/Compliance | ☐ |
| Gear Process | `icon-process.svg` | Gear/cog wheel | Process/Implementation | ☐ |
| Headset Support | `icon-support.svg` | Headset/support | Managed Services | ☐ |
| Eye Monitor | `icon-monitoring.svg` | Eye/monitoring symbol | Threat Monitoring | ☐ |
| Alert Bell | `icon-alert.svg` | Alert/notification bell | Incident Response | ☐ |

### 5.1b Tactical Operation Icons (NEW - 48×48px base)

| Icon | Filename | Description | Usage | Status |
|------|----------|-------------|-------|--------|
| Reconnaissance | `icon-recon.svg` | Binoculars with data overlay | Intel gathering | ☐ |
| Perimeter | `icon-perimeter.svg` | Boundary/fence with sensors | Physical security | ☐ |
| Infiltration Shield | `icon-infiltration.svg` | Shield with breach attempt | Threat prevention | ☐ |
| Signal Intercept | `icon-sigint.svg` | Radio waves with capture | Communications intel | ☐ |
| Dossier | `icon-dossier.svg` | Classified folder | Case studies/reports | ☐ |
| Operative | `icon-operative.svg` | Silhouette with comms | Personnel/team | ☐ |
| Extraction | `icon-extraction.svg` | Arrow out of boundary | Crisis response | ☐ |
| Counter-Intel | `icon-counter-intel.svg` | Mirror/reflection symbol | Defensive narrative | ☐ |
| Propaganda Shield | `icon-propaganda-shield.svg` | Shield blocking waves | Narrative defense | ☐ |
| Information Warfare | `icon-info-war.svg` | Crossed signals/broadcast | Offensive comms | ☐ |
| Threat Assessment | `icon-threat-assessment.svg` | Crosshair on target | Risk analysis | ☐ |
| Secure Comms | `icon-secure-comms.svg` | Encrypted message bubble | Secure communications | ☐ |
| Mission Brief | `icon-mission-brief.svg` | Document with target | Service briefings | ☐ |
| Operational Status | `icon-op-status.svg` | Dashboard gauge | Status indicators | ☐ |
| Clearance Badge | `icon-clearance.svg` | ID badge with level | Access/premium content | ☐ |
| Tactical Map | `icon-tactical-map.svg` | Grid with markers | Location/coverage | ☐ |

### 5.2 UI Icons (24×24px base, outline style)

| Icon | Filename | Usage | Status |
|------|----------|-------|--------|
| Menu (hamburger) | `ui-menu.svg` | Mobile navigation | ☐ |
| Close (X) | `ui-close.svg` | Close modals/menus | ☐ |
| Arrow right | `ui-arrow-right.svg` | Links, CTAs | ☐ |
| Arrow left | `ui-arrow-left.svg` | Back navigation | ☐ |
| Arrow down | `ui-arrow-down.svg` | Dropdowns, scroll | ☐ |
| Arrow up | `ui-arrow-up.svg` | Scroll to top | ☐ |
| External link | `ui-external.svg` | External URLs | ☐ |
| Download | `ui-download.svg` | Downloads | ☐ |
| Email/envelope | `ui-email.svg` | Contact | ☐ |
| Phone | `ui-phone.svg` | Contact | ☐ |
| Calendar | `ui-calendar.svg` | Scheduling | ☐ |
| Clock | `ui-clock.svg` | Time/reading time | ☐ |
| Search | `ui-search.svg` | Search function | ☐ |
| Filter | `ui-filter.svg` | Filter content | ☐ |
| Check | `ui-check.svg` | Success, checkmarks | ☐ |
| Plus | `ui-plus.svg` | Add, expand | ☐ |
| Minus | `ui-minus.svg` | Remove, collapse | ☐ |
| Info | `ui-info.svg` | Information | ☐ |
| Warning | `ui-warning.svg` | Warnings | ☐ |
| Copy | `ui-copy.svg` | Copy to clipboard | ☐ |
| Share | `ui-share.svg` | Share content | ☐ |
| Sun | `ui-sun.svg` | Light mode (if toggle) | ☐ |
| Moon | `ui-moon.svg` | Dark mode (if toggle) | ☐ |

### 5.3 Social Media Icons (24×24px base)

| Icon | Filename | Status |
|------|----------|--------|
| LinkedIn | `social-linkedin.svg` | ☐ |
| GitHub | `social-github.svg` | ☐ |
| Twitter/X | `social-twitter.svg` | ☐ |
| Email | `social-email.svg` | ☐ |
| YouTube | `social-youtube.svg` | ☐ |
| Substack | `social-substack.svg` | ☐ |
| RSS | `social-rss.svg` | ☐ |

### 5.4 Technology/Skill Icons (if displaying tech stack)

| Icon | Filename | Status |
|------|----------|--------|
| Python | `tech-python.svg` | ☐ |
| AI/ML generic | `tech-ai.svg` | ☐ |
| Cloud | `tech-cloud.svg` | ☐ |
| Database | `tech-database.svg` | ☐ |
| API | `tech-api.svg` | ☐ |
| Security | `tech-security.svg` | ☐ |

**Icon Production Specifications:**
- Stroke width: 1.5px consistent
- Corners: 2px radius (rounded)
- Line caps: Round
- Grid: 24×24px with 2px padding (20×20px safe area)
- Export: SVG (optimized), PNG @1x and @2x
- Colors: Export in #A0A0A0 (can be colored via CSS)

---

## 6. UI Component Assets

### 6.1 Button Styles (Create as design components)

| Component | Variants | States | Status |
|-----------|----------|--------|--------|
| Button Primary (Gradient) | Default, Small, Large | Default, Hover, Active, Disabled | ☐ |
| Button Secondary (Outline) | Default, Small, Large | Default, Hover, Active, Disabled | ☐ |
| Button Ghost (Text only) | Default, Small | Default, Hover, Active | ☐ |
| Button Icon (Circle) | Default, Small | Default, Hover, Active | ☐ |

### 6.2 Card Components

| Component | Variants | Status |
|-----------|----------|--------|
| Service Card | Default, Hover | ☐ |
| Blog Post Card | Default, Hover, Featured | ☐ |
| Testimonial Card | Default | ☐ |
| Stats Card | Default | ☐ |
| Feature Card (Glassmorphism) | Default, Hover | ☐ |
| Team/Profile Card | Default | ☐ |
| Pricing Card | Default, Featured | ☐ |

### 6.3 Form Elements

| Component | States | Status |
|-----------|--------|--------|
| Text Input | Default, Focus, Error, Disabled | ☐ |
| Text Area | Default, Focus, Error | ☐ |
| Select Dropdown | Default, Open, Focus | ☐ |
| Checkbox | Unchecked, Checked, Disabled | ☐ |
| Radio Button | Unselected, Selected | ☐ |
| Toggle Switch | Off, On | ☐ |
| Newsletter Input + Button | Default, Focus, Success | ☐ |

### 6.4 Navigation Components

| Component | Variants/States | Status |
|-----------|-----------------|--------|
| Header Desktop | Default, Scrolled | ☐ |
| Header Mobile | Default, Menu Open | ☐ |
| Mobile Menu Overlay | Open state | ☐ |
| Footer | Default | ☐ |
| Breadcrumbs | Default | ☐ |
| Pagination | Default | ☐ |

### 6.5 Miscellaneous Components

| Component | Status |
|-----------|--------|
| Modal/Dialog | ☐ |
| Toast Notification | ☐ |
| Loading Spinner | ☐ |
| Progress Bar | ☐ |
| Tooltip | ☐ |
| Badge/Tag | ☐ |
| Accordion | ☐ |
| Tab Navigation | ☐ |

---

## 7. Content Graphics

### 7.1 Blog/Insights Graphics

| Asset | Filename | Dimensions | Format | Description | Status |
|-------|----------|------------|--------|-------------|--------|
| Default featured image | `blog-default.jpg` | 1200 × 675px | JPG/WebP | Generic branded image | ☐ |
| AI category image | `blog-cat-ai.jpg` | 1200 × 675px | JPG/WebP | AI-themed | ☐ |
| Security category image | `blog-cat-security.jpg` | 1200 × 675px | JPG/WebP | Security-themed | ☐ |
| Strategy category image | `blog-cat-strategy.jpg` | 1200 × 675px | JPG/WebP | Strategy-themed | ☐ |
| Curious Indicators image | `blog-cat-indicators.jpg` | 1200 × 675px | JPG/WebP | Data/charts-themed | ☐ |
| Learning Journey image | `blog-cat-learning.jpg` | 1200 × 675px | JPG/WebP | Education-themed | ☐ |

### 7.2 "Curious Indicators" Data Visualization Templates

| Asset | Filename | Dimensions | Format | Description | Status |
|-------|----------|------------|--------|-------------|--------|
| Line chart template | `chart-line.svg` | 800 × 450px | SVG | Basic line chart style | ☐ |
| Bar chart template | `chart-bar.svg` | 800 × 450px | SVG | Bar chart style | ☐ |
| Area chart template | `chart-area.svg` | 800 × 450px | SVG | Filled area chart | ☐ |
| Correlation scatter | `chart-scatter.svg` | 800 × 450px | SVG | Scatter plot for correlations | ☐ |
| Multi-line comparison | `chart-multiline.svg` | 800 × 450px | SVG | Multiple trend lines | ☐ |
| Indicator card template | `indicator-card.svg` | 400 × 300px | SVG | Single metric display | ☐ |

**Chart Color Scheme:**
- Primary data: #00D9FF (Electric Cyan)
- Secondary data: #FF3CAC (Hot Magenta)
- Tertiary data: #39FF14 (Lime Green)
- Grid lines: #252525
- Labels: #A0A0A0
- Background: Transparent or #141414

### 7.3 Service Page Graphics

| Asset | Filename | Dimensions | Format | Service | Status |
|-------|----------|------------|--------|---------|--------|
| AI Consulting hero | `service-ai-hero.jpg` | 1920 × 800px | JPG/WebP | AI Consulting | ☐ |
| Cybersecurity hero | `service-cyber-hero.jpg` | 1920 × 800px | JPG/WebP | Cybersecurity | ☐ |
| Physical Security hero | `service-physical-hero.jpg` | 1920 × 800px | JPG/WebP | Physical Security | ☐ |
| Strategic Comms hero | `service-comms-hero.jpg` | 1920 × 800px | JPG/WebP | Strategic Comms | ☐ |
| Integrated Security hero | `service-integrated-hero.jpg` | 1920 × 800px | JPG/WebP | Integrated Offering | ☐ |
| Managed Services hero | `service-managed-hero.jpg` | 1920 × 800px | JPG/WebP | Managed Services | ☐ |

### 7.4 Process/Workflow Diagrams

| Asset | Filename | Description | Status |
|-------|----------|-------------|--------|
| Security assessment flow | `diagram-assessment.svg` | Consulting process steps | ☐ |
| Implementation timeline | `diagram-implementation.svg` | Project phases | ☐ |
| Managed services cycle | `diagram-managed.svg` | Ongoing service loop | ☐ |
| Integrated security layers | `diagram-layers.svg` | Physical + Cyber + Narrative | ☐ |
| Threat response flow | `diagram-response.svg` | Incident response steps | ☐ |

### 7.5 Infographics

| Asset | Filename | Description | Status |
|-------|----------|-------------|--------|
| "Why Integrated Security" | `infographic-why-integrated.svg` | Benefits visualization | ☐ |
| Service comparison | `infographic-tiers.svg` | Consulting vs Implementation vs Managed | ☐ |
| Threat landscape | `infographic-threats.svg` | Types of threats covered | ☐ |
| Skills/expertise map | `infographic-skills.svg` | Domain expertise visualization | ☐ |

### 7.6 Newsletter Graphics

| Asset | Filename | Dimensions | Format | Description | Status |
|-------|----------|------------|--------|-------------|--------|
| Newsletter header | `newsletter-header.png` | 600 × 200px | PNG | Email header graphic | ☐ |
| Newsletter footer | `newsletter-footer.png` | 600 × 100px | PNG | Email footer graphic | ☐ |
| Subscribe success | `newsletter-success.svg` | 400 × 300px | SVG | Confirmation graphic | ☐ |
| Newsletter thumbnail | `newsletter-thumb.jpg` | 400 × 225px | JPG/WebP | For web display | ☐ |

### 7.7 About Page Graphics

| Asset | Filename | Description | Status |
|-------|----------|-------------|--------|
| Timeline graphic | `about-timeline.svg` | Career/education timeline | ☐ |
| Skills radar chart | `about-skills.svg` | Competency visualization | ☐ |
| Domain connections | `about-domains.svg` | How expertise areas connect | ☐ |
| Certifications display | `about-certs.svg` | Badges/certifications visual | ☐ |

---

## 8. Animation Assets

> **Principle:** Motion should feel like surveillance systems, command centers, and intelligence dashboards — purposeful, subtle, and never distracting from content.
> **Priority:** CSS animations first (MVP), Lottie second (Phase 2), Video loops third (Phase 3)

### 8.0 CSS Animations — MVP Priority

| Animation | Filename/Class | Duration | Priority | Status |
|-----------|----------------|----------|----------|--------|
| Scanning line | `.hero-scan-line` | 8s loop | MVP | ☐ |
| Pulsing glow | `.pulse-glow` | 4s loop | MVP | ☐ |
| Button hover (scan) | `.btn-tactical` | 0.5s | MVP | ☐ |
| Card hover (lift) | `.service-card` | 0.3s | MVP | ☐ |
| Nav link underline | `.nav-link` | 0.3s | MVP | ☐ |
| Loading bars | `.loading-container` | 1s loop | MVP | ☐ |
| Typing effect | `.typing-text` | 3s | Phase 2 | ☐ |
| Grid pulse | `.grid-pulse` | 6s loop | Phase 2 | ☐ |
| Node blink | `.node` | 3s loop | Phase 2 | ☐ |
| Glitch hover | `.glitch-hover` | 0.3s | Phase 3 | ☐ |

### 8.1 Tactical Lottie Animations

| Asset | Filename | Duration | Priority | Status |
|-------|----------|----------|----------|--------|
| Logo reveal | `anim-logo-reveal.json` | 2.5s | Phase 3 | ☐ |
| Shield formation | `anim-shield.json` | 2s | Phase 3 | ☐ |
| Data encryption | `anim-encrypt.json` | 1.5s | Phase 3 | ☐ |
| Network pulse | `anim-network.json` | 3s loop | Phase 3 | ☐ |
| Scan line sweep | `anim-scanline.json` | 2s loop | Phase 3 | ☐ |
| Radar sweep | `anim-radar.json` | 4s loop | Phase 3 | ☐ |
| Target lock | `anim-target.json` | 1s | Phase 3 | ☐ |
| Status pulse | `anim-status.json` | 1.5s loop | Phase 3 | ☐ |
| Loading spinner | `anim-loading.json` | 1s loop | Phase 2 | ☐ |
| Success check | `anim-success.json` | 1s | Phase 2 | ☐ |

### 8.2 SVG Animations

| Asset | Filename | Duration | Description | Status |
|-------|----------|----------|-------------|--------|
| Corner brackets draw | `svg-brackets.svg` | 0.5s | HUD brackets drawing in | ☐ |
| Connection line draw | `svg-connection.svg` | 2s | Line connecting two points | ☐ |
| Radar sweep | `svg-radar.svg` | 4s loop | Circular radar with trail | ☐ |
| Coordinate stamp reveal | `svg-coords.svg` | 1s | Coords appearing | ☐ |

### 8.3 Video Loops (Phase 3 — Optional Enhancement)

| Asset | Filename | Resolution | Duration | Motion % | Status |
|-------|----------|------------|----------|----------|--------|
| Hero atmospheric | `video-hero-atmos.mp4` | 2688 × 1512 | 5-8s | 10-15% | ☐ |
| Network topology | `video-network.mp4` | 1920 × 1080 | 8s | 15-20% | ☐ |
| Encrypted stream | `video-encrypt.mp4` | 1920 × 1080 | 6s | 20-25% | ☐ |
| Fortress glow | `video-fortress.mp4` | 1920 × 1080 | 8s | 10-15% | ☐ |

**Video Generation Tools:** Runway ML, Pika, Kling
**Format:** MP4 (H.264) + WebM fallback
**Compression:** CRF 23-28

### 8.4 Micro-interaction Specifications

| Element | Trigger | Animation | Duration | Notes |
|---------|---------|-----------|----------|-------|
| Primary button | Hover | Scan line + subtle glow | 0.5s | Cyan glow |
| Primary button | Click | Scale 0.98 | 0.1s | Tactile feedback |
| Secondary button | Hover | Background fill | 0.2s | Subtle |
| Service card | Hover | Lift 4px + glow | 0.3s | Cyan shadow |
| Navigation link | Hover | Underline grow center | 0.3s | Cyan underline |
| Form input | Focus | Border glow | 0.2s | Cyan border |
| Logo | Page load | Pulse once | 4s | Subtle attention |
| CTA button | Idle | Soft pulse | 4s loop | Very subtle |

### 8.5 Animation Timing Reference

| Type | Duration | Easing | Use Case |
|------|----------|--------|----------|
| Fast interaction | 150-250ms | ease-out | Hovers, clicks |
| Medium transition | 300-500ms | ease-out | Reveals, state changes |
| Slow ambient | 3-8s | ease-in-out | Background loops |
| Mechanical/scan | 2-8s | linear | Scan lines, radar |

### 8.6 Accessibility Requirements

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .hero-scan-line,
  .pulse-glow,
  video[autoplay] {
    display: none;
  }
}
```

**Required:** All animations must have static fallbacks.

---

## 9. Social Media Kit

### 9.1 Open Graph / Social Sharing Images

| Asset | Filename | Dimensions | Format | Platform | Status |
|-------|----------|------------|--------|----------|--------|
| Default OG image | `og-default.png` | 1200 × 630px | PNG | Facebook, LinkedIn | ☐ |
| Twitter card default | `twitter-default.png` | 1200 × 600px | PNG | Twitter/X | ☐ |
| Blog post OG template | `og-blog-template.psd` | 1200 × 630px | PSD/Figma | Template | ☐ |
| Service page OG - AI | `og-service-ai.png` | 1200 × 630px | PNG | Social | ☐ |
| Service page OG - Security | `og-service-security.png` | 1200 × 630px | PNG | Social | ☐ |
| Service page OG - Comms | `og-service-comms.png` | 1200 × 630px | PNG | Social | ☐ |
| About page OG | `og-about.png` | 1200 × 630px | PNG | Social | ☐ |

### 9.2 Social Media Post Templates

| Asset | Filename | Dimensions | Format | Platform | Status |
|-------|----------|------------|--------|----------|--------|
| Square post template | `social-square.psd` | 1080 × 1080px | PSD/Figma | Instagram, LinkedIn | ☐ |
| Landscape post template | `social-landscape.psd` | 1200 × 628px | PSD/Figma | Twitter, Facebook | ☐ |
| Story template | `social-story.psd` | 1080 × 1920px | PSD/Figma | Stories | ☐ |
| LinkedIn article header | `social-linkedin-article.psd` | 1280 × 720px | PSD/Figma | LinkedIn | ☐ |
| Quote card template | `social-quote.psd` | 1080 × 1080px | PSD/Figma | General | ☐ |
| Stat/data card template | `social-stat.psd` | 1080 × 1080px | PSD/Figma | General | ☐ |
| Carousel slide template | `social-carousel.psd` | 1080 × 1080px | PSD/Figma | Instagram, LinkedIn | ☐ |

### 9.3 LinkedIn Specific

| Asset | Filename | Dimensions | Format | Status |
|-------|----------|------------|--------|--------|
| LinkedIn banner | `linkedin-banner.png` | 1584 × 396px | PNG | ☐ |
| LinkedIn company banner | `linkedin-company-banner.png` | 1128 × 191px | PNG | ☐ |

### 9.4 Twitter/X Specific

| Asset | Filename | Dimensions | Format | Status |
|-------|----------|------------|--------|--------|
| Twitter header | `twitter-header.png` | 1500 × 500px | PNG | ☐ |

### 9.5 YouTube (If creating video content)

| Asset | Filename | Dimensions | Format | Status |
|-------|----------|------------|--------|--------|
| Channel banner | `youtube-banner.png` | 2560 × 1440px | PNG | ☐ |
| Video thumbnail template | `youtube-thumb.psd` | 1280 × 720px | PSD/Figma | ☐ |

---

## 10. Print & Document Assets

### 10.1 Business Documents

| Asset | Filename | Dimensions | Format | Status |
|-------|----------|------------|--------|--------|
| Business card front | `print-card-front.pdf` | 3.5 × 2 in | PDF (CMYK) | ☐ |
| Business card back | `print-card-back.pdf` | 3.5 × 2 in | PDF (CMYK) | ☐ |
| Letterhead | `print-letterhead.pdf` | Letter/A4 | PDF (CMYK) | ☐ |
| Envelope | `print-envelope.pdf` | #10 envelope | PDF (CMYK) | ☐ |
| Invoice template | `doc-invoice.docx` | Letter/A4 | DOCX | ☐ |
| Proposal template | `doc-proposal.docx` | Letter/A4 | DOCX | ☐ |
| Contract template | `doc-contract.docx` | Letter/A4 | DOCX | ☐ |

### 10.2 Presentation Template

| Asset | Filename | Dimensions | Format | Status |
|-------|----------|------------|--------|--------|
| Presentation template | `presentation-template.pptx` | 16:9 | PPTX | ☐ |
| Title slide | Included | 1920 × 1080px | — | ☐ |
| Content slides (5+ layouts) | Included | 1920 × 1080px | — | ☐ |
| Section divider slide | Included | 1920 × 1080px | — | ☐ |
| Closing slide | Included | 1920 × 1080px | — | ☐ |

### 10.3 Case Study Template

| Asset | Filename | Format | Status |
|-------|----------|--------|--------|
| Case study template | `doc-case-study.pdf` | PDF | ☐ |
| Case study (editable) | `doc-case-study.indd` | InDesign/Figma | ☐ |

### 10.4 Service Brochure (Optional)

| Asset | Filename | Dimensions | Format | Status |
|-------|----------|------------|--------|--------|
| Services overview | `print-brochure.pdf` | Tri-fold | PDF (CMYK) | ☐ |

---

## 11. Video Assets

### 11.1 Website Video

| Asset | Filename | Dimensions | Format | Duration | Status |
|-------|----------|------------|--------|----------|--------|
| Hero background loop | `video-hero-bg.mp4` | 1920 × 1080px | MP4 (H.264) | 10-15s | ☐ |
| Hero background (WebM) | `video-hero-bg.webm` | 1920 × 1080px | WebM | 10-15s | ☐ |
| Hero mobile version | `video-hero-bg-mobile.mp4` | 1080 × 1920px | MP4 | 10-15s | ☐ |

### 11.2 Social/Promo Videos (Future)

| Asset | Filename | Dimensions | Format | Duration | Status |
|-------|----------|------------|--------|----------|--------|
| Intro animation | `video-intro.mp4` | 1920 × 1080px | MP4 | 5-10s | ☐ |
| Service overview | `video-services.mp4` | 1920 × 1080px | MP4 | 60-90s | ☐ |
| Social clip template | `video-social-square.mp4` | 1080 × 1080px | MP4 | 15-30s | ☐ |

### 11.3 Video Production Elements

| Asset | Filename | Format | Description | Status |
|-------|----------|--------|-------------|--------|
| Lower third template | `video-lower-third.mogrt` | After Effects | Name/title overlay | ☐ |
| Logo animation (video) | `video-logo-anim.mov` | ProRes/MOV | Transparent logo reveal | ☐ |
| Transition wipe | `video-transition.mov` | ProRes/MOV | Scene transition | ☐ |
| End card | `video-end-card.mp4` | MP4 | Video outro with CTA | ☐ |

---

## 12. Production Priority Matrix

### Priority 1: MVP Launch (Must Have)

**Complete these before website launch:**

| Category | Assets | Est. Time |
|----------|--------|-----------|
| Logo Package | Primary logo (SVG, PNG), Wordmark | 2-4 hours |
| Favicon Package | ICO, PNG set, Apple Touch Icon | 1-2 hours |
| Social Avatars | LinkedIn, GitHub avatars | 1 hour |
| Hero Background | Pattern or image + gradient orbs | 3-4 hours |
| Service Icons | 6 main service icons | 4-6 hours |
| UI Icons | 15 essential UI icons | 3-4 hours |
| Social Icons | 5 platform icons | 1 hour |
| Background Pattern | 1 subtle tileable pattern | 1-2 hours |
| Gradient Orbs | 4-5 orbs for atmosphere | 2 hours |
| Section Divider | 1-2 divider options | 1 hour |
| OG Images | Default, About, main Services | 2-3 hours |
| Portrait Photo | 1 professional headshot | 2-4 hours (shoot + edit) |
| Stock Photos | 8-10 themed images | 2-3 hours (sourcing) |

**Total Priority 1: ~25-40 hours**

### Priority 2: Content Launch (Should Have)

**Complete for content/blog launch:**

| Category | Assets | Est. Time |
|----------|--------|-----------|
| Blog Category Images | 5 category hero images | 3-4 hours |
| Chart Templates | 4-5 data viz templates | 4-6 hours |
| Additional Service Icons | Remaining service icons | 2-3 hours |
| Process Diagrams | 3-4 workflow diagrams | 4-6 hours |
| Newsletter Graphics | Header, footer, success | 2-3 hours |
| Additional UI Icons | Complete icon set | 2-3 hours |
| Social Post Templates | 3-4 templates | 3-4 hours |
| About Page Graphics | Timeline, skills viz | 3-4 hours |

**Total Priority 2: ~25-35 hours**

### Priority 3: Enhancement (Nice to Have)

**Complete for polish and expansion:**

| Category | Assets | Est. Time |
|----------|--------|-----------|
| Logo Animation (Lottie) | Intro animation | 4-6 hours |
| Loading Animation | Spinner/loader | 2-3 hours |
| Micro-interaction Anims | Button, card hovers | 3-4 hours |
| Infographics | 2-3 detailed graphics | 6-8 hours |
| Video Assets | Hero background loop | 4-8 hours |
| Print Materials | Business card, letterhead | 4-6 hours |
| Presentation Template | Full slide deck template | 6-8 hours |
| Case Study Template | Detailed PDF template | 4-6 hours |

**Total Priority 3: ~35-50 hours**

### Priority 4: Ongoing/As Needed

| Category | Assets | Notes |
|----------|--------|-------|
| Blog Featured Images | Per post | 30min-1hr each |
| Social Media Posts | Regular cadence | Template-based |
| Newsletter Issues | Per send | Template-based |
| Case Studies | Per project | 2-4 hours each |
| Video Content | As created | Varies |

---

## 13. Asset Specifications Quick Reference

### Image Formats

| Use Case | Format | Why |
|----------|--------|-----|
| Photos (web) | WebP (with JPG fallback) | Best compression, wide support |
| Icons, logos | SVG | Scalable, small file size |
| Complex graphics | PNG | Supports transparency |
| Animations | Lottie JSON, GIF (fallback) | Small, scalable |
| Print | PDF (CMYK), TIFF | Print-ready |

### Color Modes

| Use Case | Color Mode |
|----------|------------|
| Web/Digital | RGB (sRGB) |
| Print | CMYK |
| Video | RGB (Rec. 709) |

### File Size Targets

| Asset Type | Max Size |
|------------|----------|
| Hero image | 200KB |
| Blog thumbnail | 80KB |
| Service card image | 60KB |
| Icon (SVG) | 5KB |
| Logo (SVG) | 10KB |
| OG image | 100KB |
| Background video | 5MB |

### Resolution Guidelines

| Display Type | Resolution |
|--------------|------------|
| Standard displays | 1x |
| Retina displays | 2x |
| Favicon ICO | Multi-res (16, 32, 48) |

---

## 14. File Naming Convention

### Pattern
```
[type]-[name]-[variant]-[size].[format]

Examples:
logo-primary-color.svg
logo-primary-color@2x.png
icon-ai-brain.svg
icon-ai-brain-48.png
blog-cat-security.jpg
og-service-ai.png
pattern-triangles.svg
orb-cyan-lg.png
```

### Type Prefixes

| Prefix | Category |
|--------|----------|
| `logo-` | Logo assets |
| `icon-` | Icons |
| `ui-` | UI icons |
| `social-` | Social media icons/graphics |
| `pattern-` | Background patterns |
| `texture-` | Textures |
| `orb-` | Gradient orbs |
| `divider-` | Section dividers |
| `accent-` | Decorative accents |
| `blog-` | Blog graphics |
| `service-` | Service page graphics |
| `og-` | Open Graph images |
| `chart-` | Chart/data viz |
| `diagram-` | Process diagrams |
| `anim-` | Animations |
| `video-` | Video assets |
| `print-` | Print materials |
| `doc-` | Document templates |
| `portrait-` | Portrait photos |

### Variant Suffixes

| Suffix | Meaning |
|--------|---------|
| `-color` | Full color version |
| `-white` | White/light version |
| `-black` | Black/dark version |
| `-grayscale` | Grayscale version |
| `-outline` | Outline only |
| `-filled` | Filled version |
| `-hover` | Hover state |
| `-active` | Active state |
| `-lg` | Large size |
| `-md` | Medium size |
| `-sm` | Small size |
| `@2x` | Retina/2x resolution |

---

## 15. Delivery Checklist

### Final Delivery Structure

```
lizardi-assets/
├── 01-brand/
│   ├── logo/
│   │   ├── svg/
│   │   └── png/
│   ├── favicon/
│   └── avatars/
├── 02-photography/
│   ├── portraits/
│   └── stock/
├── 03-graphics/
│   ├── patterns/
│   ├── orbs/
│   ├── dividers/
│   └── accents/
├── 04-icons/
│   ├── service-icons/
│   ├── ui-icons/
│   └── social-icons/
├── 05-content/
│   ├── blog/
│   ├── charts/
│   ├── diagrams/
│   └── newsletter/
├── 06-social-media/
│   ├── og-images/
│   ├── templates/
│   └── platform-specific/
├── 07-animations/
│   ├── lottie/
│   └── video/
├── 08-print/
│   ├── business-cards/
│   ├── stationery/
│   └── presentations/
└── 09-source-files/
    ├── figma/
    ├── illustrator/
    └── after-effects/
```

### Quality Checklist

Before delivering each asset, verify:

- [ ] Correct dimensions
- [ ] Correct color mode (RGB for web)
- [ ] File size optimized
- [ ] Naming convention followed
- [ ] Transparent backgrounds where needed
- [ ] Retina versions provided where specified
- [ ] SVGs optimized (SVGO or similar)
- [ ] No lorem ipsum or placeholder text
- [ ] Consistent styling across related assets
- [ ] Source files organized and labeled

### Handoff Notes

When delivering to developer:

1. **Provide CSS color variables** (from Visual Guide)
2. **Note any animation specifications** (timing, easing)
3. **Document icon usage guidelines** (sizes, colors, states)
4. **Include font files or hosting links**
5. **Provide image srcset versions** for responsive loading
6. **Include original source files** (Figma, AI, PSD)

---

## Appendix: Color Reference (Quick Copy)

```css
/* Backgrounds */
--bg-primary: #0A0A0A;
--bg-secondary: #141414;
--bg-tertiary: #1E1E1E;
--bg-elevated: #252525;

/* Text */
--text-primary: #F5F5F5;
--text-secondary: #A0A0A0;
--text-tertiary: #666666;

/* Accents */
--accent-cyan: #00D9FF;
--accent-magenta: #FF3CAC;
--accent-green: #39FF14;
--accent-orange: #FF6B35;
--accent-purple: #7B2CBF;
--accent-yellow: #FFD700;

/* Gradients */
--gradient-primary: linear-gradient(135deg, #00D9FF 0%, #FF3CAC 100%);
--gradient-secondary: linear-gradient(135deg, #39FF14 0%, #00D9FF 100%);
--gradient-warm: linear-gradient(135deg, #FF6B35 0%, #FF3CAC 100%);
```

---

*Asset Requirements Document for lizardi.mx*  
*Version 2.0 — December 2024*  
*Total Estimated Production Time: 85-125 hours*
