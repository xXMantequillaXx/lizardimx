# lizardi.mx — AI Generation Prompts for Brand Assets

> **Purpose:** Comprehensive prompts for generating all visual assets  
> **Generators:** Flux 2, Midjourney, DALL-E 3, Stable Diffusion, Ideogram, Leonardo AI  
> **Version:** 2.0 — Flux 2 Edition  
> **Last Updated:** December 2024

---

## How to Use This Document

1. **Copy the prompt** for the asset you need
2. **Add reference images** if your generator supports them (especially for the gecko logo)
3. **Adjust parameters** like aspect ratio, style, etc. based on your generator
4. **Iterate** — run 3-4 variations and pick the best
5. **Check off** completed assets as you go

### Generator-Specific Tips

| Generator | Best For | Notes |
|-----------|----------|-------|
| **Flux 2** | High-detail backgrounds, photorealistic | Use 2688×1512 for 16:9 at full 4MP |
| **Midjourney** | Artistic, atmospheric backgrounds | Use `--ar 16:9` for heroes, `--stylize 100-250` |
| **DALL-E 3** | Icons, precise graphics, text integration | Great for clean vector-style outputs |
| **Ideogram** | Text and typography, badges | Best for assets with text elements |
| **Leonardo AI** | Consistent style, batch generation | Good for icon sets |
| **Stable Diffusion** | Fine control, ControlNet for patterns | Best for tileable textures |

### Flux 2 Resolution Reference

| Aspect Ratio | Resolution | Megapixels | Use Case |
|--------------|------------|------------|----------|
| **16:9** | 2688 × 1512 | 4.06 MP | Hero backgrounds, headers (FULL QUALITY) |
| **16:9** | 1344 × 768 | 1.03 MP | Fast drafts, iterations |
| **1:1** | 2048 × 2048 | 4.19 MP | Logos, icons, social avatars |
| **1:1** | 1024 × 1024 | 1.05 MP | Fast drafts |
| **4:3** | 2360 × 1770 | 4.18 MP | Service section graphics |
| **3:1** | 3464 × 1155 | 4.00 MP | Banners, headers |

> **Note:** All hero/background prompts below use **2688 × 1512** for maximum quality.

---

## Table of Contents

1. [Logo Variations](#1-logo-variations)
2. [Hero Backgrounds](#2-hero-backgrounds)
3. [Service Section Graphics](#3-service-section-graphics)
4. [Background Patterns & Textures](#4-background-patterns--textures)
5. [Gradient Orbs & Atmospheric Elements](#5-gradient-orbs--atmospheric-elements)
6. [Tactical Overlay Elements](#6-tactical-overlay-elements)
7. [Service Icons](#7-service-icons)
8. [Tactical Operation Icons](#8-tactical-operation-icons)
9. [UI Icons](#9-ui-icons)
10. [Social Media Assets](#10-social-media-assets)
11. [Data Visualization Elements](#11-data-visualization-elements)
12. [Photography Style References](#12-photography-style-references)
13. [About Page Graphics](#13-about-page-graphics)
14. [Newsletter Graphics](#14-newsletter-graphics)
15. [Miscellaneous Assets](#15-miscellaneous-assets)

---

## 1. Logo Variations

> **Note:** For logo variations, always include your existing gecko logo as a reference image.

> **COLOR RESTRICTION:** Logo gecko should ONLY be rendered in one of these three colors:
> - **Gecko Green:** `#00400D` (dark forest green) — Primary choice
> - **Lockheed Martin Blue:** `#003366` (deep navy blue) — Alternative
> - **Signal White:** `#F5F5F5` — For dark backgrounds

### 1.1 Logo with Tactical Grid Overlay
```
Geometric low-poly gecko logo in dark forest green (#00400D) on pure black background (#0A0A0A), 
subtle tactical coordinate grid overlay at 5% opacity in cyan (#00D9FF), 
corner targeting brackets in each corner, military precision aesthetic, 
clean vector style, defense contractor branding, 
sharp edges, professional, minimal

--ar 1:1 --stylize 50
```

### 1.2 Logo with Status Ring (Operational Badge) ⭐ FAVORITE
```
Geometric faceted gecko silhouette in dark forest green (#00400D) centered in circular badge design, 
outer ring with status indicator dots, 
"OPERATIONAL" text curved along bottom of circle in monospace font,
dark navy background (#0D1B2A), cyan accent ring (#00D9FF), 
tactical military badge aesthetic, clean vector graphic, 
defense contractor style, sharp precise lines

Alternative: Use Lockheed Martin blue (#003366) or white (#F5F5F5) for gecko

--ar 1:1 --stylize 50
```

### 1.3 Logo HUD Version (Bracketed) ⭐ FAVORITE
```
Geometric low-poly gecko in dark forest green (#00400D) centered between HUD-style targeting brackets,
[ ] corner markers in cyan (#00D9FF),
small crosshair element above,
coordinates "19.37°N 99.28°W" in small monospace text below,
pure black background (#0A0A0A),
military heads-up display aesthetic, clean minimal design

--ar 1:1 --stylize 50
```

### 1.4 Logo Stealth/Simplified Version ⭐ FAVORITE (BEST FOR FAVICON)
```
Minimalist angular gecko silhouette, 
single color white (#F5F5F5) on black (#0A0A0A),
geometric faceted style reduced to essential shapes,
stealth fighter aesthetic, sharp angular cuts,
defense contractor minimal logo, vector clean lines,
suitable for favicon and small applications

Alternative colors: Gecko green (#00400D) or Lockheed blue (#003366) on black

--ar 1:1 --stylize 25
```

### 1.5 Logo Wordmark Lockup
```
[Use reference image of gecko logo]
Geometric gecko logo in dark forest green (#00400D) on left,
"LIZARDI" text in bold uppercase sans-serif to the right,
wide letter-spacing (0.1em tracking),
white text on black background,
horizontal lockup layout,
defense contractor typography, Space Grotesk or Bebas Neue style font,
clean professional branding

Alternative: White gecko (#F5F5F5) or Lockheed blue (#003366)

--ar 3:1 --stylize 50
```

### 1.6 Logo with Full Tagline ⭐ FAVORITE
```
[Use reference image of gecko logo]
Geometric gecko logo in dark forest green (#00400D) centered and prominent,
"LIZARDI" in smaller bold uppercase below logo (not dominant),
"INFORMATION, MEDIA & SECURITY CONSULTING" in smaller caps below,
tactical military typography, wide letter-spacing,
white text on black (#0A0A0A) background,
vertical lockup with gecko as focal point, defense contractor branding style

Alternative: White gecko (#F5F5F5) or Lockheed blue (#003366)

--ar 1:1.2 --stylize 50
```

---

## 2. Hero Backgrounds

> **Resolution:** 2688 × 1512 (16:9 at full 4MP)  
> **Generator:** Flux 2 recommended  
> **CRITICAL PRINCIPLE:** Hero backgrounds must be SUBTLE TEXTURES that support content overlay (logo, headlines, CTAs). They should NOT be attention-grabbing focal points. Aim for 5-15% visual intensity — the background should create atmosphere, not compete for attention.

### 2.1 Main Hero — Tactical Grid Network ✅ REGENERATE WITH NEW PROMPT
```
Abstract dark tactical background for website hero section,
very subtle glowing network topology at 5-10% visual intensity,
thin faint cyan (#00D9FF) lines connecting barely visible nodes,
network should be a BACKGROUND TEXTURE not a focal element,
subtle coordinate grid on dark surface at 3% opacity,
deep black (#0A0A0A) dominant with hints of navy (#0D1B2A),
faint topographic contour lines barely perceptible,
atmospheric fog, soft volumetric lighting from upper left,
MUST leave visual space for text overlay and logo placement,
dark, moody, professional, cinematic,
the majority of the image should be dark negative space

Width: 2688 | Height: 1512
```

### 2.2 Hero — Abstract Shield/Protection ✅ COMPLETE (use with overlay)
```
Abstract geometric shield shape made of interconnected triangular facets,
low-poly style floating in dark void,
subtle cyan (#00D9FF) and red (#E63946) edge lighting,
digital particle effects surrounding the shield,
deep black background with navy gradient,
defense security concept, protection visualization,
tactical military aesthetic, cinematic lighting, depth of field

Width: 2688 | Height: 1512
```
**Status:** Generated — excellent result. Use for Security Services page.
**Note:** Apply 40-60% dark overlay in CSS when using as page hero to ensure text readability.

### 2.3 Hero — Intelligence/Data Analysis ✅ REGENERATE WITH NEW PROMPT
```
Abstract dark background for website hero section,
subtle geometric data visualization elements at 10% opacity,
faint glowing cyan lines suggesting data flow and analysis,
NO literal screens, monitors, photographs, or recognizable objects,
abstract angular shapes barely visible in the darkness,
soft grid pattern at 3% opacity on lower portion,
deep black (#0A0A0A) to navy (#0D1B2A) gradient,
atmospheric depth with subtle fog,
intelligence agency aesthetic, Palantir-inspired minimalism,
MUST be subtle enough for white text overlay,
90% of image should be dark atmospheric space

Width: 2688 | Height: 1512
```

### 2.4 Hero — Topographic Intelligence Map ✅ COMPLETE (use with overlay)
```
Abstract topographic map visualization,
glowing contour lines on dark background,
tactical markers and waypoints scattered across,
coordinate grid overlay at low opacity,
cyan (#00D9FF) and gold (#D4AF37) accent colors,
military intelligence briefing aesthetic,
map stretching into dark horizon,
atmospheric depth, professional defense style

Width: 2688 | Height: 1512
```
**Status:** Generated — excellent result. Use for Strategic Communications page.
**Note:** Apply 50-70% dark gradient overlay from top to ensure headline readability.

### 2.5 Hero — Geometric Fortress ✅ COMPLETE — USE AS ACCENT HERO
```
Abstract geometric structure resembling a digital fortress,
low-poly faceted architecture floating in dark space,
multiple layers of protective geometric shells,
subtle glow from within in cyan color,
deep shadows and dramatic lighting,
defense contractor concept art,
security and protection symbolism,
cinematic, 8k, atmospheric

Width: 2688 | Height: 1512
```
**Status:** Generated — phenomenal result.
**Best Use:** Integrated Security page or as a visual accent section (not main homepage hero — too dominant).
**Note:** Has a strong focal point, so use for pages with minimal text overlay or position text to the side.

### 2.6 Hero — Encrypted Data Flow ⚠️ REGENERATE WITH NEW PROMPT
```
Abstract visualization of encryption process for website background,
streams of random hexadecimal characters and hash fragments,
characters like "7f3a", "0x4E", "a9c2", "ff08" floating in organized horizontal rows,
characters transforming from readable to scrambled along the flow direction,
monospace terminal font aesthetic,
dark background (#0A0A0A) with cyan (#00D9FF) glowing text,
subtle green (#39FF14) accent on some character groups,
characters at 15-20% opacity to stay as background texture,
NO lock icons, NO padlocks, NO literal security symbols,
cryptographic, technical, authentic representation of data encryption,
professional cybersecurity aesthetic, NOT stock photo style,
leaves space for content overlay

Width: 2688 | Height: 1512
```
**Purpose:** Cybersecurity services page background.
**Note:** Apply 30-40% dark overlay for text readability.

### 2.6b Hero — Data Block Transformation (ALTERNATIVE)
```
Abstract visualization of data encryption transformation,
geometric structured data blocks on left side (organized, grid-like),
blocks fragmenting and scrambling through center transition zone,
transformed into randomized encrypted fragments on right side,
visual metaphor of plaintext to ciphertext transformation,
subtle binary digits "01" and hex values at 5% opacity in background,
dark background (#0A0A0A) to navy (#0D1B2A) gradient,
cyan (#00D9FF) edge lighting on data blocks,
NO literal lock icons or padlock symbols,
technical, cryptographic, defense contractor aesthetic,
subtle enough for text overlay

Width: 2688 | Height: 1512
```
**Purpose:** Alternative cybersecurity background with more abstract approach.

### 2.6c Hero — Cryptographic Key Exchange (ALTERNATIVE)
```
Abstract visualization of cryptographic key exchange handshake,
two minimal geometric nodes on opposite sides of frame,
encrypted data stream flowing between them as thin particle channel,
mathematical symbols and hash fragments barely visible at 5% opacity,
asymmetric key pair concept visualization,
dark atmospheric background (#0A0A0A),
cyan (#00D9FF) primary with gold (#D4AF37) accent on key nodes,
Diffie-Hellman or TLS handshake inspired aesthetic,
NO padlock icons, NO literal lock symbols,
technical, authentic, professional cybersecurity,
90% dark space for content overlay

Width: 2688 | Height: 1512
```
**Purpose:** For pages discussing secure communications or key management.

---

### NEW: 2.7 Homepage Main Hero — Atmospheric Dark (RECOMMENDED)
```
Ultra-dark atmospheric background for main website homepage hero,
deep black (#0A0A0A) with very subtle navy (#0D1B2A) gradient,
barely perceptible tactical grid lines at 2-3% opacity,
faint topographic contour texture in lower third at 3% opacity,
subtle atmospheric fog and light rays from upper left corner,
hint of cyan (#00D9FF) glow in one corner at 5% intensity,
NO focal elements, NO prominent objects, NO bright areas,
designed specifically for logo and headline overlay,
95% dark negative space,
professional, cinematic, defense contractor aesthetic,
moody and sophisticated without being distracting

Width: 2688 | Height: 1512
```
**Purpose:** Clean, dark hero that lets your gecko logo and "LIZARDI CONSULTING" headline be the focal point.

### NEW: 2.8 Homepage Main Hero — Subtle Network Texture (ALTERNATIVE)
```
Dark atmospheric website hero background,
extremely subtle network/constellation pattern,
tiny faint dots connected by hair-thin lines at 5% opacity,
pattern concentrated in lower-right quadrant only,
rest of image is clean dark gradient,
deep black (#0A0A0A) to navy (#0D1B2A) diagonal gradient,
soft volumetric light from upper-left at low intensity,
hint of cyan (#00D9FF) color temperature,
NO bright nodes, NO glowing elements, NO focal points,
designed for text and logo overlay,
minimal, sophisticated, defense contractor aesthetic

Width: 2688 | Height: 1512
```
**Purpose:** Adds subtle tactical texture without competing with content.

### NEW: 2.9 Section Divider — Subtle Gradient
```
Horizontal gradient background for website section transitions,
deep black (#0A0A0A) on edges fading to navy (#0D1B2A) in center,
extremely subtle horizontal scan line texture at 2% opacity,
faint coordinate markers in corners at 3% opacity,
clean, minimal, professional,
NO focal elements, pure atmospheric transition

Width: 2688 | Height: 400
```
**Purpose:** Use between major page sections for visual breathing room.

---

### Hero Image Assignment Summary (REVISED)

| Page/Section | Recommended Image | Overlay Needed | Status |
|--------------|-------------------|----------------|--------|
| **Homepage Main** | 2.7 Atmospheric Dark OR 2.8 Subtle Network | None/minimal | ⏳ Generate |
| **About Page** | 2.1 Tactical Grid (regenerated) | Light (20%) | ⏳ Generate |
| **Security Services** | 2.2 Abstract Shield | Medium (40-60%) | ✅ Ready |
| **Cybersecurity** | 2.6 Hashed Characters | Medium (30-40%) | ⏳ Regenerate |
| **Physical Security** | Generate 3.3 | Medium | ⏳ Generate |
| **Strategic Communications** | 2.4 Topographic Map | Heavy (50-70%) | ✅ Ready |
| **Integrated Security** | 2.5 Geometric Fortress | Position text to side | ✅ Ready |
| **AI Consulting** | Generate 3.1 | Medium | ⏳ Generate |

### CSS Overlay Reference
```css
/* Light overlay - for subtle backgrounds */
.hero-light-overlay {
  background: linear-gradient(
    180deg,
    rgba(10, 10, 10, 0.3) 0%,
    rgba(10, 10, 10, 0.5) 100%
  );
}

/* Medium overlay - for moderate backgrounds */
.hero-medium-overlay {
  background: linear-gradient(
    180deg,
    rgba(10, 10, 10, 0.5) 0%,
    rgba(10, 10, 10, 0.7) 100%
  );
}

/* Heavy overlay - for busy backgrounds */
.hero-heavy-overlay {
  background: linear-gradient(
    180deg,
    rgba(10, 10, 10, 0.6) 0%,
    rgba(10, 10, 10, 0.85) 100%
  );
}
```

---

## 3. Service Section Graphics

> **Resolution:** 2688 × 1512 (16:9 at full 4MP) or 2360 × 1770 (4:3)  
> **Generator:** Flux 2 recommended

### 3.1 AI Consulting Section
```
Abstract neural network visualization,
glowing interconnected nodes forming brain-like structure,
geometric low-poly style,
dark background (#0A0A0A) with cyan (#00D9FF) glow,
subtle grid overlay,
artificial intelligence concept,
professional corporate style, not sci-fi,
clean, sophisticated, technical

Width: 2688 | Height: 1512
```

### 3.2 Cybersecurity Section
```
Abstract digital shield with lock icon integrated,
geometric faceted surface reflecting light,
surrounded by encrypted data streams,
dark navy background (#0D1B2A),
cyan and red accent lighting,
cybersecurity protection concept,
defense contractor aesthetic,
professional, authoritative, secure feeling

Width: 2688 | Height: 1512
```

### 3.3 Physical Security Section
```
Abstract visualization of surveillance network,
geometric camera nodes connected by light beams,
creating protective coverage pattern,
dark environment with grid floor,
subtle red (#E63946) alert accents,
physical security monitoring concept,
tactical operations aesthetic,
professional, not ominous

Width: 2688 | Height: 1512
```

### 3.4 Strategic Communications / Narrative Defense
```
Abstract visualization of information waves,
concentric ripples emanating from central point,
some waves being deflected by geometric shield,
broadcast/signal aesthetic,
dark background with purple (#7B2CBF) and cyan accents,
narrative control and influence concept,
intelligence agency briefing style,
sophisticated, strategic feeling

Width: 2688 | Height: 1512
```

### 3.5 Integrated Security Section
```
Three-layer geometric visualization,
physical layer (bottom, solid geometric shapes),
cyber layer (middle, network nodes and connections),
information layer (top, flowing data streams),
all layers interconnected with light beams,
dark background, multi-colored accents (cyan, red, gold),
comprehensive protection concept,
defense contractor style

Width: 2688 | Height: 1512
```

### 3.6 Managed Services Section
```
Abstract 24/7 monitoring concept,
circular radar sweep visualization,
status indicators and dashboard elements floating,
geometric command center aesthetic,
dark background with green (#39FF14) "active" accents,
operational monitoring concept,
professional security operations center style

Width: 2688 | Height: 1512
```

---

## 4. Background Patterns & Textures

> **Resolution:** 1024 × 1024 or 2048 × 2048 (1:1 for seamless tiling)  
> **Generator:** Flux 2 or Stable Diffusion with tiling mode  
> **Note:** For Flux 2, generate at 2048×2048 then verify seamless tiling in Photoshop

### 4.1 Tactical Coordinate Grid (Tileable)
```
Seamless tileable pattern,
subtle coordinate grid lines,
thin lines in dark gray (#2C3E50) on black (#0A0A0A),
small crosshair markers at intersections,
military tactical map grid aesthetic,
very subtle, 5% opacity feel,
clean vector style, precise lines

Width: 2048 | Height: 2048
```

### 4.2 Triangle Mesh Pattern (Tileable)
```
Seamless tileable pattern,
interconnected triangles forming mesh network,
thin lines in steel gray (#2C3E50),
pure black background (#0A0A0A),
geometric low-poly aesthetic matching gecko logo,
subtle, suitable for background texture,
clean vector style

Width: 2048 | Height: 2048
```

### 4.3 Topographic Contour Lines (Tileable)
```
Seamless tileable pattern,
topographic map contour lines,
flowing organic curves at varying densities,
thin cyan (#00D9FF) lines at 10% opacity,
dark background,
intelligence briefing map aesthetic,
subtle texture, professional

Width: 2048 | Height: 2048
```

### 4.4 Circuit/Network Pattern (Tileable)
```
Seamless tileable pattern,
PCB circuit board inspired lines,
geometric pathways with node points,
thin lines in gunmetal (#1C2833),
pure black background,
technical engineering aesthetic,
subtle, clean, precise

Width: 2048 | Height: 2048
```

### 4.5 Hexagonal Grid (Tileable)
```
Seamless tileable pattern,
hexagonal honeycomb grid,
thin lines in steel gray (#2C3E50),
pure black background (#0A0A0A),
subtle highlight on select hexagons,
technical defensive aesthetic,
clean geometric pattern

Width: 2048 | Height: 2048
```

### 4.6 Fingerprint Swirl Texture
```
Abstract fingerprint pattern,
flowing curved lines forming swirl,
very subtle, low contrast,
dark gray lines on black background,
CIA-inspired biometric aesthetic,
elegant, sophisticated,
suitable for background accent

Width: 2048 | Height: 2048
```

### 4.7 Noise/Grain Texture (Tileable)
```
Seamless tileable texture,
subtle film grain noise pattern,
monochromatic, very fine grain,
adds analog texture to digital designs,
neutral gray tones,
10% opacity application

Width: 2048 | Height: 2048
```

### 4.8 Dot Grid Pattern (Tileable)
```
Seamless tileable pattern,
evenly spaced small dots,
dots in dark gray (#2C3E50),
pure black background,
minimal, technical aesthetic,
engineering drawing style,
very subtle background texture

Width: 2048 | Height: 2048
```

---

## 5. Gradient Orbs & Atmospheric Elements

### 5.1 Cyan Atmospheric Orb (Large)
```
Soft glowing orb shape,
radial gradient from cyan (#00D9FF) center to transparent edges,
heavily blurred, diffuse lighting effect,
isolated on transparent or black background,
atmospheric glow element,
15% opacity feel, very soft edges,
suitable for background atmosphere

--ar 1:1 --stylize 50
```

### 5.2 Red Alert Orb
```
Soft glowing orb shape,
radial gradient from red (#E63946) center to transparent edges,
heavily blurred, diffuse glow,
isolated on transparent or black background,
subtle warning/alert atmosphere element,
10% opacity feel, soft edges

--ar 1:1 --stylize 50
```

### 5.3 Gold Classified Orb
```
Soft glowing orb shape,
radial gradient from gold (#D4AF37) center to transparent edges,
warm premium glow effect,
heavily blurred, diffuse lighting,
isolated on black background,
luxury/classified atmosphere element

--ar 1:1 --stylize 50
```

### 5.4 Purple Command Orb
```
Soft glowing orb shape,
radial gradient from purple (#7B2CBF) center to transparent edges,
heavily blurred, ethereal glow,
isolated on black background,
special operations atmosphere element,
mysterious, sophisticated

--ar 1:1 --stylize 50
```

### 5.5 Dual-Color Gradient Orb (Cyan-Red)
```
Soft glowing oval shape,
gradient from cyan (#00D9FF) on one side to red (#E63946) on other,
heavily blurred, diffuse glow,
creates color tension atmosphere,
isolated on black background,
dramatic accent element

--ar 3:2 --stylize 50
```

### 5.6 Atmospheric Light Leak
```
Abstract light leak effect,
diagonal streak of light,
gradient from cyan to transparent,
film photography light leak aesthetic,
isolated on black background,
subtle accent overlay element

--ar 16:9 --stylize 75
```

---

## 6. Tactical Overlay Elements

### 6.1 Corner Brackets Set (HUD Style)
```
Set of four corner bracket elements,
clean L-shaped targeting brackets,
thin precise lines in cyan (#00D9FF),
military HUD heads-up display style,
each bracket isolated,
suitable for framing content,
vector clean style, sharp edges

--ar 1:1 --stylize 25
```

### 6.2 Targeting Reticle / Crosshair
```
Circular targeting reticle design,
concentric circles with crosshair lines,
tick marks around circumference,
military scope aesthetic,
cyan (#00D9FF) color on black background,
clean precise vector style,
tactical operations design

--ar 1:1 --stylize 25
```

### 6.3 Status Indicator Set
```
Set of three circular status indicators,
solid filled circle (active/green),
half-filled circle (pending/orange),
empty circle outline (inactive/gray),
clean minimal icons,
military status display style,
vector graphics, precise

--ar 3:1 --stylize 10
```

### 6.4 Classification Badge — CLASSIFIED
```
Rectangular badge design,
text "[ CLASSIFIED ]" in center,
bold monospace typography,
red (#E63946) text color,
thin border frame,
military document stamp aesthetic,
clean vector style

--ar 4:1 --stylize 25
```

### 6.5 Classification Badge — CONFIDENTIAL
```
Rectangular badge design,
text "[ CONFIDENTIAL ]" in center,
bold monospace typography,
gold (#D4AF37) text color,
thin border frame,
intelligence document stamp aesthetic,
clean vector style

--ar 4:1 --stylize 25
```

### 6.6 Classification Badge — STANDARD CLEARANCE
```
Rectangular badge design,
text "[ STANDARD CLEARANCE ]" in center,
monospace typography,
cyan (#00D9FF) text color,
thin border frame,
security clearance badge aesthetic

--ar 4:1 --stylize 25
```

### 6.7 Section Marker (SEC-01 Style)
```
Small rectangular label design,
text "SEC-01" in monospace font,
dark background (#1C2833) with light text,
subtle border,
military section identifier style,
minimal, technical,
clean vector graphic

--ar 3:1 --stylize 10
```

### 6.8 Coordinate Stamp
```
Text element design,
"19.37°N 99.28°W" in monospace font,
small, technical typography,
gray (#5D6D7E) text color,
GPS coordinate display aesthetic,
military navigation style

--ar 5:1 --stylize 10
```

### 6.9 Scan Line Element
```
Horizontal line element,
thin glowing cyan (#00D9FF) line,
gradient fade on both ends,
subtle glow effect,
scanning/processing indicator style,
military radar aesthetic

--ar 20:1 --stylize 25
```

### 6.10 Data Frame / HUD Container
```
Rectangular frame design,
corner brackets at each corner,
thin border lines,
small status indicator in top-right,
section label area in top-left,
military HUD data display container,
cyan (#00D9FF) accents on dark background,
clean technical style

--ar 4:3 --stylize 50
```

### 6.11 Radar Sweep Element
```
Circular radar display design,
concentric rings with degree markers,
rotating sweep line indicated,
blip markers scattered on grid,
military radar screen aesthetic,
green (#39FF14) and cyan colors,
dark background

--ar 1:1 --stylize 75
```

### 6.12 Briefing Header Bar
```
Horizontal bar element,
gradient from red (#E63946) to transparent,
thin 4px height,
used as section separator/accent,
military briefing document style,
clean, sharp edges

--ar 50:1 --stylize 10
```

---

## 7. Service Icons

> **Style Guide for All Service Icons:**
> - 48x48px base size, scalable
> - 1.5-2px stroke weight
> - Sharp corners (2px radius max)
> - Single color (provide in white, will recolor via CSS)
> - Minimal, geometric style
> - Defense contractor aesthetic

### 7.1 AI Brain Icon
```
Icon design, 48x48 pixels,
human brain outline with circuit board patterns inside,
geometric simplified style,
1.5px stroke weight, white lines,
neural network nodes integrated,
artificial intelligence symbol,
clean minimal vector icon,
dark background for visibility

--ar 1:1 --stylize 25
```

### 7.2 Shield Lock Icon (Cybersecurity)
```
Icon design, 48x48 pixels,
shield shape with padlock integrated in center,
geometric angular style,
1.5px stroke weight, white lines,
cybersecurity protection symbol,
clean minimal vector icon,
defense contractor aesthetic

--ar 1:1 --stylize 25
```

### 7.3 Security Camera Icon
```
Icon design, 48x48 pixels,
surveillance camera profile view,
geometric simplified style,
1.5px stroke weight, white lines,
lens detail visible,
physical security symbol,
clean minimal vector icon

--ar 1:1 --stylize 25
```

### 7.4 Network Nodes Icon
```
Icon design, 48x48 pixels,
four nodes connected by lines in square arrangement,
geometric style,
1.5px stroke weight, white lines,
network topology symbol,
clean minimal vector icon

--ar 1:1 --stylize 25
```

### 7.5 Home Shield Icon (Residential)
```
Icon design, 48x48 pixels,
house outline with small shield overlay,
geometric simplified style,
1.5px stroke weight, white lines,
residential security symbol,
clean minimal vector icon

--ar 1:1 --stylize 25
```

### 7.6 Building Shield Icon (Commercial)
```
Icon design, 48x48 pixels,
office building outline with shield overlay,
geometric simplified style,
1.5px stroke weight, white lines,
commercial security symbol,
clean minimal vector icon

--ar 1:1 --stylize 25
```

### 7.7 Megaphone Icon (Strategic Comms)
```
Icon design, 48x48 pixels,
megaphone/bullhorn side view,
signal waves emanating from front,
geometric simplified style,
1.5px stroke weight, white lines,
communications/broadcast symbol,
clean minimal vector icon

--ar 1:1 --stylize 25
```

### 7.8 Target Crosshair Icon (Narrative Strategy)
```
Icon design, 48x48 pixels,
circular target with crosshair lines,
geometric precise style,
1.5px stroke weight, white lines,
strategic targeting symbol,
clean minimal vector icon

--ar 1:1 --stylize 25
```

### 7.9 Shield Radar Icon (Narrative Defense)
```
Icon design, 48x48 pixels,
shield shape with radar sweep inside,
geometric style,
1.5px stroke weight, white lines,
defensive monitoring symbol,
clean minimal vector icon

--ar 1:1 --stylize 25
```

### 7.10 Chess Knight Icon (Strategy)
```
Icon design, 48x48 pixels,
chess knight piece profile,
geometric simplified style,
1.5px stroke weight, white lines,
strategic thinking symbol,
clean minimal vector icon

--ar 1:1 --stylize 25
```

### 7.11 Layers Stack Icon (Integrated Services)
```
Icon design, 48x48 pixels,
three stacked horizontal layers with slight offset,
geometric style,
1.5px stroke weight, white lines,
multi-layer integration symbol,
clean minimal vector icon

--ar 1:1 --stylize 25
```

### 7.12 Newsletter/Envelope Icon
```
Icon design, 48x48 pixels,
envelope with signal/broadcast lines above,
geometric simplified style,
1.5px stroke weight, white lines,
newsletter/communications symbol,
clean minimal vector icon

--ar 1:1 --stylize 25
```

### 7.13 Chart Trending Icon (Curious Indicators)
```
Icon design, 48x48 pixels,
line chart with upward trend,
geometric simplified style,
1.5px stroke weight, white lines,
data analytics symbol,
clean minimal vector icon

--ar 1:1 --stylize 25
```

### 7.14 Document Check Icon (Compliance)
```
Icon design, 48x48 pixels,
document/paper with checkmark overlay,
geometric simplified style,
1.5px stroke weight, white lines,
compliance/verification symbol,
clean minimal vector icon

--ar 1:1 --stylize 25
```

### 7.15 Gear/Cog Icon (Process)
```
Icon design, 48x48 pixels,
gear/cog wheel with six teeth,
geometric simplified style,
1.5px stroke weight, white lines,
process/implementation symbol,
clean minimal vector icon

--ar 1:1 --stylize 25
```

### 7.16 Headset Icon (Support/Managed Services)
```
Icon design, 48x48 pixels,
headset with microphone,
geometric simplified style,
1.5px stroke weight, white lines,
support/service symbol,
clean minimal vector icon

--ar 1:1 --stylize 25
```

### 7.17 Eye Monitor Icon (Threat Monitoring)
```
Icon design, 48x48 pixels,
eye symbol with screen/monitor frame,
geometric simplified style,
1.5px stroke weight, white lines,
surveillance monitoring symbol,
clean minimal vector icon

--ar 1:1 --stylize 25
```

### 7.18 Alert Bell Icon (Incident Response)
```
Icon design, 48x48 pixels,
bell with alert indicator dot,
geometric simplified style,
1.5px stroke weight, white lines,
alert/notification symbol,
clean minimal vector icon

--ar 1:1 --stylize 25
```

---

## 8. Tactical Operation Icons

> **Same style guide as Service Icons**

### 8.1 Reconnaissance Icon
```
Icon design, 48x48 pixels,
binoculars with data overlay HUD elements,
geometric tactical style,
1.5px stroke weight, white lines,
intelligence gathering symbol,
military operations aesthetic

--ar 1:1 --stylize 25
```

### 8.2 Perimeter Icon
```
Icon design, 48x48 pixels,
rectangular boundary with sensor nodes at corners,
geometric tactical style,
1.5px stroke weight, white lines,
perimeter security symbol,
clean minimal vector icon

--ar 1:1 --stylize 25
```

### 8.3 Signal Intercept Icon (SIGINT)
```
Icon design, 48x48 pixels,
radio waves being captured/funneled,
geometric tactical style,
1.5px stroke weight, white lines,
signals intelligence symbol,
military operations aesthetic

--ar 1:1 --stylize 25
```

### 8.4 Dossier/Classified Folder Icon
```
Icon design, 48x48 pixels,
folder with "classified" stripe across,
geometric tactical style,
1.5px stroke weight, white lines,
intelligence document symbol,
military operations aesthetic

--ar 1:1 --stylize 25
```

### 8.5 Operative Icon
```
Icon design, 48x48 pixels,
human silhouette with earpiece/comms indicator,
geometric tactical style,
1.5px stroke weight, white lines,
field operative symbol,
military operations aesthetic

--ar 1:1 --stylize 25
```

### 8.6 Extraction Icon
```
Icon design, 48x48 pixels,
arrow pointing out of enclosed boundary,
geometric tactical style,
1.5px stroke weight, white lines,
extraction/exit symbol,
crisis response aesthetic

--ar 1:1 --stylize 25
```

### 8.7 Counter-Intelligence Icon
```
Icon design, 48x48 pixels,
mirror/reflection symbol with shield,
geometric tactical style,
1.5px stroke weight, white lines,
counter-intel symbol,
defensive operations aesthetic

--ar 1:1 --stylize 25
```

### 8.8 Propaganda Shield Icon
```
Icon design, 48x48 pixels,
shield blocking incoming wave/signal patterns,
geometric tactical style,
1.5px stroke weight, white lines,
narrative defense symbol,
information warfare aesthetic

--ar 1:1 --stylize 25
```

### 8.9 Information Warfare Icon
```
Icon design, 48x48 pixels,
crossed broadcast signals/antennas,
geometric tactical style,
1.5px stroke weight, white lines,
offensive communications symbol,
strategic operations aesthetic

--ar 1:1 --stylize 25
```

### 8.10 Threat Assessment Icon
```
Icon design, 48x48 pixels,
crosshair/target with analysis markers,
geometric tactical style,
1.5px stroke weight, white lines,
risk analysis symbol,
intelligence operations aesthetic

--ar 1:1 --stylize 25
```

### 8.11 Secure Communications Icon
```
Icon design, 48x48 pixels,
speech bubble with lock/encryption symbol,
geometric tactical style,
1.5px stroke weight, white lines,
encrypted comms symbol,
secure operations aesthetic

--ar 1:1 --stylize 25
```

### 8.12 Mission Brief Icon
```
Icon design, 48x48 pixels,
document with target/mission marker,
geometric tactical style,
1.5px stroke weight, white lines,
briefing document symbol,
military operations aesthetic

--ar 1:1 --stylize 25
```

### 8.13 Operational Status Icon
```
Icon design, 48x48 pixels,
dashboard gauge/meter display,
geometric tactical style,
1.5px stroke weight, white lines,
status monitoring symbol,
operations center aesthetic

--ar 1:1 --stylize 25
```

### 8.14 Clearance Badge Icon
```
Icon design, 48x48 pixels,
ID badge with access level indicator,
geometric tactical style,
1.5px stroke weight, white lines,
security clearance symbol,
access control aesthetic

--ar 1:1 --stylize 25
```

### 8.15 Tactical Map Icon
```
Icon design, 48x48 pixels,
grid with location markers/pins,
geometric tactical style,
1.5px stroke weight, white lines,
operational mapping symbol,
military navigation aesthetic

--ar 1:1 --stylize 25
```

---

## 9. UI Icons

> **Style:** 24x24px base, 1.5px stroke, outline style

### 9.1 Menu (Hamburger) Icon
```
Icon design, 24x24 pixels,
three horizontal parallel lines,
1.5px stroke weight, white lines,
minimal hamburger menu symbol,
clean vector style

--ar 1:1 --stylize 10
```

### 9.2 Close (X) Icon
```
Icon design, 24x24 pixels,
X shape formed by two diagonal lines,
1.5px stroke weight, white lines,
minimal close symbol,
clean vector style

--ar 1:1 --stylize 10
```

### 9.3 Arrow Right Icon
```
Icon design, 24x24 pixels,
chevron pointing right,
1.5px stroke weight, white lines,
minimal directional arrow,
clean vector style

--ar 1:1 --stylize 10
```

### 9.4 Arrow Down Icon
```
Icon design, 24x24 pixels,
chevron pointing down,
1.5px stroke weight, white lines,
minimal dropdown arrow,
clean vector style

--ar 1:1 --stylize 10
```

### 9.5 External Link Icon
```
Icon design, 24x24 pixels,
square with arrow pointing out diagonally,
1.5px stroke weight, white lines,
external link symbol,
clean vector style

--ar 1:1 --stylize 10
```

### 9.6 Download Icon
```
Icon design, 24x24 pixels,
arrow pointing down into tray/line,
1.5px stroke weight, white lines,
download symbol,
clean vector style

--ar 1:1 --stylize 10
```

### 9.7 Email/Envelope Icon
```
Icon design, 24x24 pixels,
simple envelope outline,
1.5px stroke weight, white lines,
email/contact symbol,
clean vector style

--ar 1:1 --stylize 10
```

### 9.8 Calendar Icon
```
Icon design, 24x24 pixels,
calendar page with grid,
1.5px stroke weight, white lines,
scheduling symbol,
clean vector style

--ar 1:1 --stylize 10
```

### 9.9 Search/Magnifying Glass Icon
```
Icon design, 24x24 pixels,
magnifying glass outline,
1.5px stroke weight, white lines,
search symbol,
clean vector style

--ar 1:1 --stylize 10
```

### 9.10 Check/Checkmark Icon
```
Icon design, 24x24 pixels,
simple checkmark shape,
1.5px stroke weight, white lines,
success/confirm symbol,
clean vector style

--ar 1:1 --stylize 10
```

### 9.11 Plus Icon
```
Icon design, 24x24 pixels,
plus sign / cross shape,
1.5px stroke weight, white lines,
add/expand symbol,
clean vector style

--ar 1:1 --stylize 10
```

### 9.12 Info (i) Icon
```
Icon design, 24x24 pixels,
circle with lowercase i inside,
1.5px stroke weight, white lines,
information symbol,
clean vector style

--ar 1:1 --stylize 10
```

### 9.13 Warning Triangle Icon
```
Icon design, 24x24 pixels,
triangle with exclamation mark,
1.5px stroke weight, white lines,
warning/alert symbol,
clean vector style

--ar 1:1 --stylize 10
```

### 9.14 Copy Icon
```
Icon design, 24x24 pixels,
two overlapping rectangles,
1.5px stroke weight, white lines,
copy/duplicate symbol,
clean vector style

--ar 1:1 --stylize 10
```

### 9.15 Share Icon
```
Icon design, 24x24 pixels,
node with three connection points,
1.5px stroke weight, white lines,
share/network symbol,
clean vector style

--ar 1:1 --stylize 10
```

---

## 10. Social Media Assets

> **Generator:** Flux 2 recommended for backgrounds, add text/logos in Figma/Canva

### 10.1 LinkedIn Banner (1584×396)
```
Dark tactical background,
subtle coordinate grid overlay,
space for geometric gecko logo on left side,
space for "LIZARDI CONSULTING" text in center-right,
cyan (#00D9FF) accent line,
defense contractor professional aesthetic,
dark navy to black gradient background,
NO TEXT in generation - add in post-processing

Width: 1584 | Height: 396
```

### 10.2 Twitter/X Header (1500×500)
```
Dark tactical background,
subtle topographic pattern overlay,
space for geometric gecko logo positioned left,
HUD corner brackets framing composition,
cyan accent elements,
tactical intelligence aesthetic,
NO TEXT in generation - add in post-processing

Width: 1500 | Height: 500
```

### 10.3 Default OG Image (1200×630)
```
Dark background (#0A0A0A),
space for geometric gecko logo centered,
subtle grid pattern overlay,
corner targeting brackets,
defense contractor branding style,
professional, authoritative,
NO TEXT in generation - add in post-processing

Width: 1200 | Height: 630
```

### 10.4 Square Social Avatar (500×500)
```
Dark background (#0A0A0A),
geometric gecko logo centered,
fills most of frame with padding,
subtle glow effect behind logo,
clean, recognizable at small sizes,
no text, logo only

Width: 1024 | Height: 1024 (downscale to 500×500)
```

### 10.5 Service Announcement Template
```
Dark tactical background,
geometric accent element,
space for text overlay,
red (#E63946) accent bar at top or bottom,
announcement/promotional style,
NO TEXT in generation - add in post-processing

Width: 1024 | Height: 1024
```

### 10.6 Quote Card Template
```
Dark background with subtle grid,
large quotation marks in cyan,
space for quote text in center,
geometric accent line below quote,
space for attribution below,
professional insight sharing format,
NO TEXT in generation - add in post-processing

Width: 1024 | Height: 1024
```

---

## 11. Data Visualization Elements

### 11.1 Line Chart Style Reference
```
Data visualization line chart,
dark background (#0A0A0A),
cyan (#00D9FF) primary line with glow,
subtle grid lines in steel gray,
axis labels in monospace font,
tactical data display aesthetic,
professional analytics style

--ar 16:9 --stylize 75
```

### 11.2 Area Chart Style Reference
```
Data visualization area chart,
dark background,
cyan to transparent gradient fill under line,
grid overlay,
clean minimal axes,
tactical intelligence briefing style

--ar 16:9 --stylize 75
```

### 11.3 Multi-Line Comparison Chart
```
Data visualization with multiple trend lines,
cyan, red, and gold lines on dark background,
subtle grid,
legend indicators,
correlation comparison style,
"Curious Indicators" aesthetic

--ar 16:9 --stylize 75
```

### 11.4 Scatter Plot / Correlation
```
Data visualization scatter plot,
data points as small geometric shapes,
dark background with grid,
trend line indicated,
correlation analysis aesthetic,
tactical intelligence style

--ar 1:1 --stylize 75
```

### 11.5 Metric Card / KPI Display
```
Single metric display card,
large number in center,
label text above,
trend indicator arrow,
dark card background (#1C2833),
cyan accent color for number,
dashboard KPI style

--ar 4:3 --stylize 50
```

### 11.6 Gauge / Meter Display
```
Semi-circular gauge meter,
needle indicator,
colored segments (green, yellow, red),
dark background,
tactical operations dashboard style,
status monitoring aesthetic

--ar 1:1 --stylize 50
```

---

## 12. Photography Style References

> **Use these prompts to generate reference images that define the photography style**
> **Then use these as style references when sourcing or editing actual photos**

### 12.1 Professional Portrait Style
```
Professional headshot photography,
dark moody background,
dramatic side lighting from left,
high contrast, slightly desaturated,
subject in dark clothing,
confident authoritative expression,
executive portrait style,
cinematic lighting, shallow depth of field

--ar 1:1 --stylize 150
```

### 12.2 Technology/Cyber Theme
```
Abstract technology concept photography,
dark environment with blue accent lighting,
server room or data center aesthetic,
high contrast, moody atmosphere,
professional corporate style,
not sci-fi, grounded in reality

--ar 16:9 --stylize 150
```

### 12.3 Security/Surveillance Theme
```
Security operations photography,
monitoring screens in dark room,
professional surveillance aesthetic,
high contrast, controlled lighting,
operational environment,
authoritative professional style

--ar 16:9 --stylize 150
```

### 12.4 Industrial/Engineering Theme
```
Industrial engineering photography,
power plant or industrial facility,
dramatic lighting on machinery,
dark atmospheric environment,
high contrast, desaturated colors,
professional engineering documentation style

--ar 16:9 --stylize 150
```

### 12.5 Strategic Planning Theme
```
Strategic planning concept photography,
chess pieces on dark background,
dramatic lighting, shallow depth of field,
abstract strategy metaphor,
executive decision-making aesthetic,
moody professional style

--ar 16:9 --stylize 150
```

### 12.6 Communications/Media Theme
```
Broadcasting or media operations photography,
control room with multiple screens,
dark environment with screen glow,
professional news/media aesthetic,
high contrast, operational feeling,
strategic communications theme

--ar 16:9 --stylize 150
```

---

## 13. About Page Graphics

### 13.1 Career Timeline Visualization
```
Horizontal timeline infographic,
dark background with steel gray line,
milestone markers with icons,
years labeled below,
company logos or symbols at each point,
professional career progression visual,
clean minimal design

--ar 3:1 --stylize 75
```

### 13.2 Skills Domain Visualization
```
Interconnected domain diagram,
central node with branches to skill areas,
geometric node style,
connecting lines between related skills,
dark background, cyan accent colors,
expertise mapping visualization

--ar 1:1 --stylize 75
```

### 13.3 Engineering + Business + Security Venn
```
Three-circle Venn diagram,
"Engineering" "Business" "Security" labels,
intersection area highlighted,
dark background, colored circles semi-transparent,
professional infographic style,
clean minimal design

--ar 1:1 --stylize 50
```

### 13.4 Trilingual Globe Graphic
```
Globe/world map visualization,
three regions highlighted (Mexico, US/UK, Germany/EU),
language labels for each region,
dark background with glowing lines,
global reach visualization,
professional international business style

--ar 16:9 --stylize 100
```

---

## 14. Newsletter Graphics

### 14.1 Newsletter Header
```
Email header graphic,
geometric gecko logo on left,
"LIZARDI LETTER" or newsletter name in center,
subtle tactical pattern background,
dark with cyan accents,
600px width optimized

--ar 3:1 --stylize 75
```

### 14.2 Newsletter Footer
```
Email footer graphic,
thin tactical pattern bar,
"LIZARDI CONSULTING" small text,
social icons placeholder area,
dark minimal design,
600px width optimized

--ar 6:1 --stylize 50
```

### 14.3 Subscribe Success Graphic
```
Success confirmation illustration,
geometric checkmark or shield symbol,
"CONFIRMED" or "ACCESS GRANTED" text,
dark background with green (#39FF14) accents,
tactical badge/stamp aesthetic,
celebration but professional

--ar 4:3 --stylize 75
```

### 14.4 Newsletter Issue Template Header
```
Issue header template,
"ISSUE #XX" label in tactical style,
date in monospace font,
title area with bracketed styling,
dark background, cyan accents,
intelligence briefing aesthetic

--ar 3:1 --stylize 75
```

---

## 15. Miscellaneous Assets

### 15.1 404 Error Page Graphic
```
"404" large numbers in tactical style,
glitched or fragmented effect,
"TARGET NOT FOUND" text below,
broken targeting reticle graphic,
dark background with red accents,
tactical error aesthetic

--ar 16:9 --stylize 100
```

### 15.2 Loading Animation Reference
```
Tactical loading indicator,
circular radar sweep style,
or horizontal scan line,
cyan (#00D9FF) color,
dark background,
military scanning aesthetic

--ar 1:1 --stylize 50
```

### 15.3 Contact Page Header
```
"ESTABLISH CONTACT" or "CONNECT" heading style,
radio/communication wave graphics,
coordinates and location markers,
dark background with cyan accents,
tactical communications aesthetic

--ar 16:9 --stylize 100
```

### 15.4 Services Overview Header
```
"OPERATIONS" or "SERVICES" tactical heading,
three pillars/columns visual metaphor,
shield, network, megaphone symbols,
dark background with multi-color accents,
defense contractor style

--ar 16:9 --stylize 100
```

### 15.5 Blog/Insights Section Header
```
"INTELLIGENCE REPORTS" or "INSIGHTS" heading,
document/dossier visual elements,
classification badge styling,
dark background with gold accents,
intelligence briefing aesthetic

--ar 16:9 --stylize 100
```

### 15.6 Case Study Card Background
```
"AFTER ACTION REPORT" styling,
mission document aesthetic,
redacted text visual elements,
dark background with subtle stamp marks,
tactical case study format

--ar 4:3 --stylize 100
```

### 15.7 Testimonial Section Background
```
Quote marks in tactical bracket style,
subtle grid pattern background,
dark navy with cyan accents,
professional endorsement aesthetic,
"VERIFIED SOURCE" badge styling

--ar 16:9 --stylize 75
```

### 15.8 CTA Banner Background
```
"INITIATE CONSULTATION" or "REQUEST BRIEFING" style,
bold tactical typography,
red (#E63946) accent elements,
urgency without being alarming,
dark background with glow effects

--ar 16:9 --stylize 100
```

---

## Production Checklist

Use this checklist to track your asset generation progress:

### Priority 1 — MVP Launch
- [ ] Logo HUD version (1.3)
- [ ] Logo stealth/simplified version (1.4)
- [ ] **2.7 Homepage Main Hero — Atmospheric Dark** ⭐ NEW (recommended for homepage)
- [ ] **2.8 Homepage Main Hero — Subtle Network** (alternative)
- [ ] **2.1 Tactical Grid Network — REGENERATE** with subtle prompt
- [ ] **2.3 Intelligence/Data Analysis — REGENERATE** with subtle prompt
- [x] 2.2 Hero - Abstract Shield ✅ (use with 40-60% overlay)
- [x] 2.4 Hero - Topographic Map ✅ (use with 50-70% overlay)
- [x] 2.5 Hero - Geometric Fortress ✅ (use for accent sections)
- [ ] **2.6 Encrypted Data Flow — REGENERATE** with hashed characters prompt
- [ ] Triangle mesh pattern (tileable)
- [ ] Tactical grid pattern (tileable)
- [ ] 3-4 gradient orbs
- [ ] Corner brackets set
- [ ] Status indicators
- [ ] 10 essential service icons
- [ ] 10 essential UI icons
- [ ] Default OG image background
- [ ] Social avatar

### Priority 2 — Full Launch
- [ ] All logo variations
- [ ] All service section graphics (3.1-3.6)
- [ ] All background patterns
- [ ] All atmospheric orbs
- [ ] All tactical overlays
- [ ] All service icons (18)
- [ ] All tactical icons (15)
- [ ] All UI icons (15)
- [ ] All social media assets
- [ ] Data visualization elements
- [ ] About page graphics
- [ ] Newsletter graphics

### Priority 3 — Polish
- [ ] 404 error graphic
- [ ] Loading animation reference
- [ ] All page header graphics
- [ ] Case study backgrounds
- [ ] Testimonial elements
- [ ] CTA banner backgrounds
- [ ] Photography style references

---

## Tips for Consistent Results

### For Flux 2
```
Recommended settings:
- 16:9 heroes: Width 2688, Height 1512 (4MP)
- 1:1 patterns: Width 2048, Height 2048
- Use guidance scale 3.5-4.0 for more prompt adherence
- Add "8k, photorealistic, cinematic lighting" for quality
- Add "NO text, no words, no letters" to avoid text artifacts
```

### For Midjourney
```
Add these to maintain consistency:
--seed [use same seed for variations]
--stylize 50-100 for cleaner graphics
--stylize 150-250 for atmospheric images
--no text (if text is rendering poorly)
--v 6.1 (or latest version)
```

### For DALL-E 3
```
Add to prompt:
"vector style, clean lines, no gradients in linework"
"isolated on transparent background" (for icons)
"no text in image" (unless specifically needed)
```

### For Leonardo AI
```
Use negative prompts:
"blurry, noisy, low quality, text, watermark"
Use PhotoReal or different presets for various outputs
```

### Color Reference Card
```
When prompting, include hex codes:
Rich Black: #0A0A0A
Tactical Navy: #0D1B2A
Gunmetal: #1C2833
Steel Gray: #2C3E50
Signal White: #F5F5F5
Electric Cyan: #00D9FF
Alert Red: #E63946
Operational Green: #39FF14
Intel Gold: #D4AF37
Command Purple: #7B2CBF
Gecko Green: #00400D (dark forest green for logo)
Lockheed Blue: #003366 (deep navy blue for logo alternative)
```

---

## 16. Animation & Motion Design

> **Purpose:** Subtle motion elements that add life to the site without distracting from content  
> **Principle:** Motion should feel like surveillance systems, command centers, and intelligence dashboards — purposeful, not decorative

### Animation Philosophy
- **Purposeful:** Every animation should suggest monitoring, analysis, or status
- **Subtle:** 5-15% intensity — noticed subconsciously, not consciously
- **Performance:** Optimize for 60fps, use CSS/SVG over video when possible
- **Accessible:** Respect `prefers-reduced-motion` media query

---

### 16.1 CSS Animations (No Assets Required)

#### 16.1.1 Scanning Line
```css
/* Horizontal scan line sweeping across hero section */
.hero-scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 217, 255, 0.3) 50%,
    transparent 100%
  );
  animation: scan-down 8s ease-in-out infinite;
}

@keyframes scan-down {
  0%, 100% { top: 0; opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { top: 100%; opacity: 0; }
}
```
**Use on:** Hero sections, full-width image containers

#### 16.1.2 Pulsing Glow (Status Indicator)
```css
/* Subtle breathing glow on accent elements */
.pulse-glow {
  animation: pulse 4s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { 
    box-shadow: 0 0 5px rgba(0, 217, 255, 0.2);
    opacity: 0.8;
  }
  50% { 
    box-shadow: 0 0 20px rgba(0, 217, 255, 0.4);
    opacity: 1;
  }
}
```
**Use on:** Logo, status badges, CTA buttons

#### 16.1.3 Typing Effect (Terminal Style)
```css
/* Monospace text appearing character by character */
.typing-text {
  font-family: 'JetBrains Mono', monospace;
  overflow: hidden;
  white-space: nowrap;
  border-right: 2px solid #00D9FF;
  animation: 
    typing 3s steps(40) 1s forwards,
    blink 0.75s step-end infinite;
}

@keyframes typing {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  50% { border-color: transparent; }
}
```
**Use on:** Headlines, taglines, coordinate displays

#### 16.1.4 Grid Pulse (Background Animation)
```css
/* Subtle pulse emanating from center of grid */
.grid-pulse {
  background: 
    radial-gradient(circle at center, transparent 0%, transparent 100%);
  animation: grid-pulse 6s ease-out infinite;
}

@keyframes grid-pulse {
  0% {
    background: radial-gradient(
      circle at center,
      rgba(0, 217, 255, 0.1) 0%,
      transparent 10%
    );
  }
  100% {
    background: radial-gradient(
      circle at center,
      rgba(0, 217, 255, 0) 0%,
      transparent 80%
    );
  }
}
```
**Use on:** Grid pattern overlays, background textures

#### 16.1.5 Node Blink (Network Status)
```css
/* Random blinking effect for network nodes */
.node {
  animation: node-blink 3s ease-in-out infinite;
}

.node:nth-child(odd) { animation-delay: -1s; }
.node:nth-child(3n) { animation-delay: -2s; }

@keyframes node-blink {
  0%, 90%, 100% { opacity: 0.3; }
  95% { opacity: 1; }
}
```
**Use on:** Network visualization graphics, connection indicators

#### 16.1.6 Glitch Effect (Hover State)
```css
/* Brief tactical glitch on hover */
.glitch-hover:hover {
  animation: glitch 0.3s ease-in-out;
}

@keyframes glitch {
  0%, 100% { transform: translate(0); filter: none; }
  20% { transform: translate(-2px, 1px); filter: hue-rotate(90deg); }
  40% { transform: translate(2px, -1px); filter: hue-rotate(-90deg); }
  60% { transform: translate(-1px, -1px); }
  80% { transform: translate(1px, 1px); }
}
```
**Use on:** Navigation links, interactive elements

#### 16.1.7 Counter Ticker
```css
/* Numbers counting up animation */
.counter {
  font-family: 'JetBrains Mono', monospace;
  font-variant-numeric: tabular-nums;
}

/* Implement with JavaScript for actual counting */
```
**Use on:** Statistics, metrics, years of experience

#### 16.1.8 Parallax Scroll Layers
```css
/* Multi-layer parallax for depth */
.parallax-container {
  perspective: 1000px;
  overflow-x: hidden;
}

.parallax-back { transform: translateZ(-200px) scale(1.2); }
.parallax-mid { transform: translateZ(-100px) scale(1.1); }
.parallax-front { transform: translateZ(0); }
```
**Use on:** Hero sections with layered backgrounds

---

### 16.2 SVG Animations

#### 16.2.1 Radar Sweep
```svg
<svg viewBox="0 0 200 200">
  <circle cx="100" cy="100" r="80" fill="none" stroke="#1C2833" stroke-width="1"/>
  <circle cx="100" cy="100" r="60" fill="none" stroke="#1C2833" stroke-width="1"/>
  <circle cx="100" cy="100" r="40" fill="none" stroke="#1C2833" stroke-width="1"/>
  <path d="M100,100 L100,20" stroke="#00D9FF" stroke-width="2" opacity="0.8">
    <animateTransform
      attributeName="transform"
      type="rotate"
      from="0 100 100"
      to="360 100 100"
      dur="4s"
      repeatCount="indefinite"/>
  </path>
  <!-- Fade trail -->
  <path d="M100,100 L100,20" stroke="url(#sweepGradient)" stroke-width="40">
    <animateTransform
      attributeName="transform"
      type="rotate"
      from="0 100 100"
      to="360 100 100"
      dur="4s"
      repeatCount="indefinite"/>
  </path>
</svg>
```
**Use on:** Managed Services section, monitoring dashboards

#### 16.2.2 Connection Line Draw
```svg
<svg>
  <path class="connection-line" d="M0,50 Q50,0 100,50 T200,50"
    stroke="#00D9FF" fill="none" stroke-width="2"
    stroke-dasharray="200" stroke-dashoffset="200">
    <animate attributeName="stroke-dashoffset"
      from="200" to="0" dur="2s" fill="freeze"/>
  </path>
</svg>
```
**Use on:** Service connections, process flows

#### 16.2.3 Coordinate Brackets Animation
```svg
<svg viewBox="0 0 100 100">
  <!-- Top-left bracket -->
  <path d="M0,20 L0,0 L20,0" stroke="#00D9FF" fill="none" 
    stroke-width="2" stroke-dasharray="40" stroke-dashoffset="40">
    <animate attributeName="stroke-dashoffset" 
      from="40" to="0" dur="0.5s" fill="freeze"/>
  </path>
  <!-- Repeat for other corners with delays -->
</svg>
```
**Use on:** Image frames, section borders, HUD elements

---

### 16.3 Lottie Animation Concepts

> **Generator:** Create in After Effects and export with Bodymovin, or use LottieFiles

#### 16.3.1 Logo Reveal Animation
```
Concept: Gecko logo assembles from geometric fragments
Duration: 2-3 seconds
Stages:
1. Scattered triangular fragments float in void (0-0.5s)
2. Fragments converge toward center (0.5-1.5s)
3. Logo solidifies with subtle glow pulse (1.5-2.5s)
4. Hold on complete logo (2.5-3s)
Colors: #00400D (gecko), #00D9FF (glow accents)
```
**Use on:** Page load, about section

#### 16.3.2 Shield Formation
```
Concept: Protective shield builds up layer by layer
Duration: 2 seconds
Stages:
1. Inner core appears (0-0.3s)
2. First geometric layer wraps around (0.3-0.8s)
3. Second layer forms (0.8-1.3s)
4. Outer shell completes with pulse (1.3-2s)
Colors: #00D9FF primary, #E63946 accent edges
```
**Use on:** Security services section

#### 16.3.3 Data Encryption Transform
```
Concept: Readable text transforms into encrypted hash
Duration: 1.5 seconds
Stages:
1. Clean text visible: "SECURE" (0-0.3s)
2. Characters scramble randomly (0.3-1s)
3. Settle into hash: "7f3a9c" (1-1.5s)
Colors: #F5F5F5 text, #39FF14 encrypted
```
**Use on:** Cybersecurity section, loading states

#### 16.3.4 Network Pulse
```
Concept: Central node sends pulse through network
Duration: 3 seconds (loop)
Stages:
1. Central node glows (0-0.3s)
2. Pulse travels outward along connection lines (0.3-1.5s)
3. Outer nodes light up in sequence (1.5-2.5s)
4. Fade back to idle state (2.5-3s)
Colors: #00D9FF nodes, #2C3E50 lines
```
**Use on:** Hero background, AI consulting section

#### 16.3.5 Status Indicators
```
Concept: Tactical status badges with state changes
Duration: 4 seconds (loop)
States:
- STANDBY: Dim amber pulse
- ACTIVE: Green steady glow
- ALERT: Red rapid pulse
Colors: #D4AF37 (standby), #39FF14 (active), #E63946 (alert)
```
**Use on:** Service cards, dashboard elements

---

### 16.4 Video Loop Prompts (Runway ML / Pika / Kling)

> **Format:** MP4, 5-10 seconds, seamless loop  
> **Resolution:** 1920×1080 or 2688×1512 for heroes

#### 16.4.1 Hero Background — Atmospheric Drift
```
Input: Use generated hero background 2.7 or 2.8 as first frame
Prompt: Subtle atmospheric fog drifting slowly from left to right,
barely perceptible particle movement in the darkness,
faint light rays shifting slightly,
NO camera movement, static frame,
extremely subtle, almost imperceptible motion,
5 second seamless loop

Motion intensity: 10-15%
```

#### 16.4.2 Network Topology — Node Activity
```
Input: Use tactical grid network image as first frame
Prompt: Network nodes subtly pulsing with soft glow,
occasional connection line lighting up briefly,
very slow, hypnotic rhythm,
NO camera movement,
ambient background animation,
8 second seamless loop

Motion intensity: 15-20%
```

#### 16.4.3 Topographic Map — Contour Flow
```
Input: Use topographic map hero as first frame
Prompt: Contour lines slowly undulating like gentle waves,
tactical markers with subtle blinking lights,
atmospheric depth shifting slightly,
intelligence briefing room aesthetic,
10 second seamless loop

Motion intensity: 10-15%
```

#### 16.4.4 Encrypted Data Stream
```
Input: Use hashed characters background as first frame
Prompt: Hexadecimal characters slowly scrolling upward,
characters fading in and out,
matrix-style but subtle and professional,
monospace terminal aesthetic,
6 second seamless loop

Motion intensity: 20-25%
```

#### 16.4.5 Geometric Fortress — Ambient Glow
```
Input: Use geometric fortress hero as first frame
Prompt: Inner core glow slowly pulsing,
subtle light reflections on faceted surfaces,
atmospheric fog drifting in background,
NO structural movement, only lighting changes,
8 second seamless loop

Motion intensity: 10-15%
```

---

### 16.5 Loading States & Micro-interactions

#### 16.5.1 Page Loading Animation
```css
/* Tactical loading sequence */
.loading-container {
  display: flex;
  gap: 8px;
}

.loading-bar {
  width: 4px;
  height: 20px;
  background: #00D9FF;
  animation: load-pulse 1s ease-in-out infinite;
}

.loading-bar:nth-child(2) { animation-delay: 0.1s; }
.loading-bar:nth-child(3) { animation-delay: 0.2s; }
.loading-bar:nth-child(4) { animation-delay: 0.3s; }

@keyframes load-pulse {
  0%, 100% { transform: scaleY(0.5); opacity: 0.5; }
  50% { transform: scaleY(1); opacity: 1; }
}
```

#### 16.5.2 Button Hover States
```css
/* Tactical button with scan effect */
.btn-tactical {
  position: relative;
  overflow: hidden;
}

.btn-tactical::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(0, 217, 255, 0.2),
    transparent
  );
  transition: left 0.5s ease;
}

.btn-tactical:hover::before {
  left: 100%;
}
```

#### 16.5.3 Card Hover Effect
```css
/* Subtle lift and glow on service cards */
.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 
    0 10px 40px rgba(0, 0, 0, 0.3),
    0 0 20px rgba(0, 217, 255, 0.1);
}
```

#### 16.5.4 Navigation Link Underline
```css
/* Tactical underline animation */
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  width: 0;
  height: 1px;
  background: #00D9FF;
  transition: all 0.3s ease;
}

.nav-link:hover::after {
  left: 0;
  width: 100%;
}
```

---

### 16.6 Accessibility — Reduced Motion

```css
/* Respect user preferences */
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
  .radar-sweep {
    display: none;
  }
}
```

---

### Animation Production Checklist

#### Priority 1 — MVP Launch
- [ ] Scanning line CSS (hero sections)
- [ ] Pulsing glow CSS (logo, CTAs)
- [ ] Button hover states
- [ ] Card hover effects
- [ ] Navigation underline animation
- [ ] Loading bars animation
- [ ] Reduced motion fallbacks

#### Priority 2 — Enhanced Experience
- [ ] Typing effect for headlines
- [ ] Coordinate brackets SVG animation
- [ ] Grid pulse background
- [ ] Counter/ticker JavaScript
- [ ] Parallax scroll implementation

#### Priority 3 — Premium Polish
- [ ] Logo reveal Lottie animation
- [ ] Radar sweep SVG
- [ ] Hero background video loops (Runway)
- [ ] Data encryption Lottie
- [ ] Network pulse Lottie
- [ ] Glitch hover effects

---

*Asset Generation Prompts for lizardi.mx*  
*Version 2.1 — Flux 2 + Motion Edition*  
*Total Prompts: 100+ static, 20+ animated*  
*Last Updated: December 2024*
