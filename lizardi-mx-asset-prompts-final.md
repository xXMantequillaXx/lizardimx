# lizardi.mx — Asset Generation Prompts (Final)

> **Project:** Personal Brand Website  
> **Domain:** lizardi.mx  
> **Version:** 3.0 — Final Production  
> **Last Updated:** December 2024  
> **Generator:** Flux 2 Dev (recommended)

---

## Quick Reference

### What to Generate vs Skip

| Category | Action | Count |
|----------|--------|-------|
| **Hero Backgrounds** | ✅ Generate | 5 needed |
| **Service Graphics** | ✅ Generate | 3 needed (3 done) |
| **Gradient Orbs** | ❌ CSS | 0 |
| **Tactical Overlays** | ❌ CSS/SVG | 0 |
| **Patterns (simple)** | ❌ CSS/SVG | 0 |
| **Patterns (complex)** | 🟡 Phase 2 | 2 |
| **Icons** | ❌ Lucide React | 0 |
| **Blog/Newsletter** | 🟡 Phase 2 | 2-3 |

### Resolution Reference (Flux 2 — 4MP Max)

| Aspect | Dimensions | Use Case |
|--------|------------|----------|
| 16:9 | 2688 × 1512 | Hero backgrounds, section graphics |
| 4:3 | 2360 × 1770 | Service cards, blog images |
| 1:1 | 2048 × 2048 | Patterns, textures |
| 3:1 | 3464 × 1155 | Banners |

---

## MVP Generation Checklist

### Priority 1 — Generate Now (5 images)

- [ ] **2.7** Homepage Hero — Atmospheric Dark
- [ ] **2.1** About Page Hero — Tactical Grid (subtle)
- [ ] **3.2** Cybersecurity Section — Network Defense
- [ ] **3.3** Physical Security Section — Protective Perimeter
- [ ] **3.6** Managed Services Section — Protected Network

### Already Complete (6 images)

- [x] **3.1** AI Consulting — Neural Network ✅
- [x] **3.4** Brand Protection — Wave Shield ✅
- [x] **3.5** Integrated Security — Three Layers ✅
- [x] **2.2** Abstract Shield (Security Services overview) ✅
- [x] **2.4** Topographic Map ✅
- [x] **2.5** Geometric Fortress ✅

### Phase 2 — Optional (5 images)

- [ ] **4.5** Circuit Pattern (tileable)
- [ ] **4.6** Topographic Pattern (tileable)
- [ ] **10.1** Default Blog Featured Image
- [ ] **11.1** Newsletter Header
- [ ] **14.1** 404 Page Illustration

---

## 1. Logo Assets

> **Action:** ❌ DO NOT GENERATE — Export from existing source file

The gecko logo already exists. Export in these formats from Illustrator/Figma:

| Asset | Filename | Format | Background |
|-------|----------|--------|------------|
| Primary (color) | `logo-gecko.svg` | SVG | Transparent |
| Primary (color) | `logo-gecko.png` | PNG @2x | Transparent |
| White silhouette | `logo-gecko-white.svg` | SVG | Transparent |
| Favicon | `favicon.svg` | SVG | Transparent |
| Favicon | `favicon.ico` | ICO 32×32 | Transparent |
| Apple Touch | `apple-touch-icon.png` | PNG 180×180 | #0A0A0A |
| OG Image | `og-default.png` | PNG 1200×630 | #0A0A0A |

**Logo Colors (restricted):**
- Gecko Green: `#00400D`
- Lockheed Blue: `#003366`
- Signal White: `#F5F5F5`

---

## 2. Hero Backgrounds

> **Action:** ✅ GENERATE  
> **Resolution:** 2688 × 1512 (16:9)

### Design Principles for Heroes

> Hero backgrounds must be **SUBTLE TEXTURES** (5-15% visual intensity) that support content overlay. They should NOT compete with logo, headlines, or CTAs.

### 2.7 Homepage Main — Atmospheric Dark ⭐ PRIORITY

```
Ultra-dark atmospheric background,
95% pure black negative space,
barely perceptible geometric grid at 2-3% opacity,
single very subtle cyan glow in bottom corner at 5% opacity,
hint of depth through micro-gradient,
MUST leave maximum visual space for logo and text overlay,
NO focal elements, NO bright areas, NO patterns,
rich black (#0A0A0A) base,
cinematic, minimal, premium dark

Width: 2688 | Height: 1512
```

**CSS Overlay:** None needed

---

### 2.1 About Page — Tactical Grid (Subtle) ⭐ PRIORITY

```
Dark tactical background with subtle coordinate grid,
grid lines at 3-5% opacity only,
slight gradient from top-left to bottom-right,
very subtle corner coordinate markers,
atmospheric depth without focal elements,
dark navy (#0D1B2A) to black (#0A0A0A) gradient,
intelligence briefing aesthetic,
professional, restrained, NOT busy,
BACKGROUND TEXTURE not a focal element

Width: 2688 | Height: 1512
```

**CSS Overlay:** Light (20%)

---

### 2.2 Security Services — Abstract Shield ✅ COMPLETE

**Status:** Already generated — use for Security Services overview page

**CSS Overlay:** Medium (40-60%)

---

### 2.4 Topographic Map ✅ COMPLETE

**Status:** Already generated — use for Brand Protection page

**CSS Overlay:** Heavy (50-70%)

---

### 2.5 Geometric Fortress ✅ COMPLETE

**Status:** Already generated — use for Integrated Security page

**CSS Overlay:** Position text to left side, leave fortress visible on right

---

## 3. Service Section Graphics

> **Action:** ✅ GENERATE (3 needed)  
> **Resolution:** 2688 × 1512 (16:9)

### Design Principles

| ❌ Avoid | ✅ Prefer |
|----------|----------|
| Literal symbols (shield, lock, camera grid) | Abstract representations |
| Stock photo energy | Sophisticated, tactical aesthetic |
| Aggressive surveillance | Protective guardian |
| Gaming HUD / cliché radar | Professional command center |
| "We're watching" vibe | "We're protecting" vibe |

**Key Principle:** Show protection through *context*, not *symbols*.

---

### 3.1 AI Consulting ✅ COMPLETE

**Status:** Already generated — low-poly neural network, excellent

**CSS Overlay:** Medium (30-40%)

---

### 3.2 Cybersecurity ⭐ PRIORITY

```
Abstract network topology visualization,
interconnected nodes with subtle encryption indicators,
some nodes highlighted with protective hexagonal shells,
data pathways with subtle geometric patterns,
NOT a central shield, distributed protection concept,
dark background (#0D1B2A),
cyan (#00D9FF) primary with subtle red (#E63946) accent on 1-2 threat points,
sophisticated, technical, not literal,
cybersecurity operations center aesthetic,
NO lock icons, NO shield icons, NO padlocks,
professional, abstract

Width: 2688 | Height: 1512
```

**CSS Overlay:** Medium (30-40%)

---

### 3.3 Physical Security ⭐ PRIORITY

```
Abstract building footprint from above (isometric view),
soft protective perimeter glow around the structure,
subtle sensor points at corners (geometric shapes, not cameras),
visualizes "secured premises" concept,
dark background (#0A0A0A),
cyan (#00D9FF) for secure zones, subtle gold (#D4AF37) accents,
architectural/tactical map aesthetic,
professional property protection,
NOT surveillance grid, NOT camera network,
reassuring, protective feeling,
works for residential AND commercial clients

Width: 2688 | Height: 1512
```

**CSS Overlay:** Medium (40%)

---

### 3.4 Brand Protection ✅ COMPLETE

**Status:** Already generated — purple waves with shield, excellent

**CSS Overlay:** Medium (30-40%)

---

### 3.5 Integrated Security ✅ COMPLETE

**Status:** Already generated — three-layer visualization, excellent

**CSS Overlay:** Light (20%) or position text to side

---

### 3.6 Managed Services ⭐ PRIORITY

```
Abstract network of protected nodes,
central hub with soft protective glow,
connecting to 5-7 satellite points around it,
each node has subtle geometric shield indicator,
visualizes "managed protection across your infrastructure",
dark background (#0A0A0A),
operational green (#39FF14) as accent NOT dominant color,
cyan (#00D9FF) for connections,
professional, calm, reassuring,
defense contractor aesthetic NOT gaming,
NO spinning radar, NO dashboard text, NO HUD elements,
clean, minimal, abstract

Width: 2688 | Height: 1512
```

**CSS Overlay:** Medium (30-40%)

---

## 4. Background Patterns

> **Action:** ❌ SKIP FOR MVP — Use CSS/SVG  
> **Phase 2:** Generate 4.5 and 4.6 only if needed

### 4.1-4.4 Simple Patterns — USE CSS

```css
/* Tactical Grid */
.pattern-grid {
  background-image: 
    linear-gradient(rgba(0,217,255,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,217,255,0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}

/* Dot Grid */
.pattern-dots {
  background-image: radial-gradient(rgba(0,217,255,0.1) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Noise Texture */
.texture-noise {
  filter: url(#noise);
  /* Or use a tiny repeating noise PNG */
}
```

### 4.5 Circuit Pattern — PHASE 2

```
Seamless tileable pattern,
abstract circuit board pathways,
thin lines connecting at nodes,
PCB-inspired but abstracted,
dark gray (#1C2833) lines on black (#0A0A0A),
subtle cyan (#00D9FF) glow at connection points,
technical, precise, geometric

Width: 1024 | Height: 1024
```

### 4.6 Topographic Pattern — PHASE 2

```
Seamless tileable pattern,
topographic contour lines,
organic flowing curves,
elevation map inspired,
dark gray (#2C3E50) lines on black (#0A0A0A),
varying line weights for depth,
intelligence/mapping aesthetic

Width: 1024 | Height: 1024
```

---

## 5. Gradient Orbs & Atmospheric Elements

> **Action:** ❌ DO NOT GENERATE — Use CSS

All gradient orbs should be created with CSS for better performance and flexibility:

```css
/* Base orb mixin */
.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
  mix-blend-mode: screen;
}

/* Cyan Orb */
.orb-cyan {
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(0,217,255,0.15) 0%, transparent 70%);
}

/* Red Alert Orb */
.orb-red {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(230,57,70,0.1) 0%, transparent 70%);
}

/* Gold Orb */
.orb-gold {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%);
}

/* Purple Orb */
.orb-purple {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(123,44,191,0.1) 0%, transparent 70%);
}

/* Dual Color (Cyan-Red) */
.orb-dual {
  width: 800px;
  height: 400px;
  background: linear-gradient(90deg, 
    rgba(0,217,255,0.15) 0%, 
    transparent 50%,
    rgba(230,57,70,0.1) 100%
  );
  filter: blur(100px);
}
```

**Benefits of CSS:**
- Zero file downloads
- Easy color/size tweaking
- Animation-ready
- Better performance

---

## 6. Tactical Overlay Elements

> **Action:** ❌ DO NOT GENERATE — Use CSS/SVG

### Corner Brackets — CSS

```css
.corner-bracket {
  position: absolute;
  width: 24px;
  height: 24px;
}

.corner-bracket--tl {
  top: 0; left: 0;
  border-top: 2px solid rgba(0,217,255,0.5);
  border-left: 2px solid rgba(0,217,255,0.5);
}

.corner-bracket--tr {
  top: 0; right: 0;
  border-top: 2px solid rgba(0,217,255,0.5);
  border-right: 2px solid rgba(0,217,255,0.5);
}

.corner-bracket--bl {
  bottom: 0; left: 0;
  border-bottom: 2px solid rgba(0,217,255,0.5);
  border-left: 2px solid rgba(0,217,255,0.5);
}

.corner-bracket--br {
  bottom: 0; right: 0;
  border-bottom: 2px solid rgba(0,217,255,0.5);
  border-right: 2px solid rgba(0,217,255,0.5);
}
```

### Status Indicators — CSS

```css
.status-indicator {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  text-transform: uppercase;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.status-dot--active {
  background: #39FF14;
  box-shadow: 0 0 10px rgba(57,255,20,0.5);
  animation: pulse 2s ease-in-out infinite;
}

.status-dot--pending {
  background: #D4AF37;
}

.status-dot--inactive {
  background: #5D6D7E;
}
```

### Scan Line — CSS

```css
.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0,217,255,0.4) 50%,
    transparent 100%
  );
  animation: scan 8s ease-in-out infinite;
}

@keyframes scan {
  0%, 100% { top: 0; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}
```

### Coordinate Stamp — CSS

```css
.coordinate-stamp {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  color: rgba(139,157,195,0.6);
  letter-spacing: 0.05em;
}
```

### Classification Badge — CSS

```css
.badge-classified {
  display: inline-block;
  padding: 4px 12px;
  border: 1px solid rgba(212,175,55,0.5);
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #D4AF37;
}
```

---

## 7. Icons

> **Action:** ❌ DO NOT GENERATE — Use Lucide React

### Icon Mapping

```javascript
import {
  Brain,           // AI Consulting
  Shield,          // Security Services
  ShieldCheck,     // Cybersecurity
  Camera,          // Physical Security
  Megaphone,       // Brand Protection
  Layers,          // Integrated Security
  Activity,        // Managed Services
  Mail,            // Newsletter
  Network,         // Network
  Lock,            // Lock/Security
  AlertTriangle,   // Alerts
  Eye,             // Monitoring
  FileText,        // Documents
  Users,           // Team
  MessageSquare,   // Communications
  Settings,        // Settings
  ExternalLink,    // External links
  Menu,            // Mobile menu
  X,               // Close
  ChevronRight,    // Arrows
  ChevronDown,
  Github,          // Social
  Linkedin,
} from 'lucide-react';
```

### Usage

```jsx
<Brain className="w-6 h-6 text-electric-cyan" />
```

---

## 8-15. Other Assets

> **Action:** 🟡 PHASE 2 — Skip for MVP

### Phase 2 Generation List

| Asset | Purpose | Priority |
|-------|---------|----------|
| Default blog image | Placeholder for posts without images | Medium |
| Newsletter header | Email branding | Medium |
| 404 illustration | Error page (brand opportunity) | Low |
| Case study template | Client work showcase | Low |

---

## CSS Overlay Reference

For images that are too prominent, use these overlays:

```css
/* Light - 20-30% darkening */
.overlay-light {
  background: linear-gradient(180deg,
    rgba(10,10,10,0.2) 0%,
    rgba(10,10,10,0.4) 100%
  );
}

/* Medium - 40-50% darkening */
.overlay-medium {
  background: linear-gradient(180deg,
    rgba(10,10,10,0.4) 0%,
    rgba(10,10,10,0.6) 100%
  );
}

/* Heavy - 60-80% darkening */
.overlay-heavy {
  background: linear-gradient(180deg,
    rgba(10,10,10,0.6) 0%,
    rgba(10,10,10,0.85) 100%
  );
}
```

---

## Final Asset Summary

### Files to Generate (8 total)

```
/assets/heroes/
├── hero-home.webp           ← 2.7 Atmospheric Dark
├── hero-about.webp          ← 2.1 Tactical Grid
└── hero-services.webp       ← 2.2 Abstract Shield (done)

/assets/sections/
├── ai-consulting.webp       ← 3.1 (done)
├── cybersecurity.webp       ← 3.2 Network Defense
├── physical-security.webp   ← 3.3 Protective Perimeter
├── brand-protection.webp    ← 3.4 (done)
├── integrated.webp          ← 3.5 (done)
└── managed-services.webp    ← 3.6 Protected Network

/assets/
├── topo-map.webp            ← 2.4 (done)
└── fortress.webp            ← 2.5 (done)
```

### Files NOT Needed (use CSS/code)

- ❌ Gradient orbs
- ❌ Tactical overlays
- ❌ Simple patterns
- ❌ Icons
- ❌ Status indicators
- ❌ Corner brackets
- ❌ Scan lines

---

## Generation Tips for Flux 2

```
Recommended settings:
- Guidance scale: 3.5-4.0
- Steps: 28-35
- Add to all prompts: "8k, professional, cinematic lighting"
- Add to all prompts: "NO text, no words, no letters, no watermarks"
- Use negative prompt: "blurry, noisy, text, watermark, logo"
```

---

*Asset Generation Prompts — Final Production Version*  
*lizardi.mx*  
*December 2024*
