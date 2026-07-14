---
name: Luminous Portfolio System
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#b9ccb2'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#84967e'
  outline-variant: '#3b4b37'
  surface-tint: '#00e639'
  primary: '#ebffe2'
  on-primary: '#003907'
  primary-container: '#00ff41'
  on-primary-container: '#007117'
  inverse-primary: '#006e16'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#fcf8f8'
  on-tertiary: '#313030'
  tertiary-container: '#dfdcdb'
  on-tertiary-container: '#616060'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#72ff70'
  primary-fixed-dim: '#00e639'
  on-primary-fixed: '#002203'
  on-primary-fixed-variant: '#00530e'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  neon-glow: rgba(0, 255, 65, 0.4)
  surface-elevated: '#121212'
  text-muted: '#888888'
typography:
  display-hero:
    fontFamily: Syne
    fontSize: 84px
    fontWeight: '800'
    lineHeight: 90px
    letterSpacing: -0.04em
  display-hero-mobile:
    fontFamily: Syne
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Syne
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Syne
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 38px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 120px
  module-gap: 4px
---

## Brand & Style

This design system is engineered for a high-impact graphic design portfolio. It balances a professional, authoritative brand voice with a raw, creative energy. The visual language is a blend of **Minimalism** and **High-Contrast / Bold** aesthetics, utilizing a deep obsidian environment to make creative work and neon accents vibrate with intensity.

The personality is "Content-First" but with a distinct, tech-forward edge. It aims to evoke a sense of professional excellence and modern digital craftsmanship, ensuring that the artist is perceived as both a creative visionary and a reliable partner.

## Colors

The palette is strictly high-contrast, designed for a dark-mode-only experience. 

- **Primary:** A vibrant Neon Green (#00FF41) used sparingly for key actions, status indicators ("Availability: Now"), and editorial flourishes.
- **Backgrounds:** The primary surface is a pure, deep black (#0A0A0A). Elevated surfaces and containers use a subtle #121212 to maintain depth without sacrificing the "void" aesthetic.
- **Typography:** Headlines use pure white (#FFFFFF) for maximum legibility against the dark background, while metadata and secondary labels use a muted gray (#888888).

## Typography

The typography system relies on a three-way contrast between expressive display type, utilitarian body type, and technical labels.

- **Headline (Syne):** Used for project titles and major section headers. Its geometric and avant-garde character provides the "creative" edge.
- **Body (Inter):** Used for biographical text and project descriptions. It provides a clean, neutral balance to the expressive headlines.
- **Labels (JetBrains Mono):** Used for metadata, tool tags (Photoshop, Illustrator), and stats. The monospaced nature emphasizes the technical precision of the work.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for textual content while allowing visual "Modules" to expand.

- **Desktop:** A 12-column centered grid with a 1280px max-width.
- **Portfolio Modules:** Images should be stacked vertically with a very tight `4px` gap, creating a seamless "scrollable wall" of work.
- **Sectioning:** Large vertical gaps (`120px`) are used to separate major narrative shifts (e.g., from Social Media Design to Product Ads).
- **Mobile:** Content reflows to a single column with `16px` side margins. Floating elements (like the navigation) remain centered at the bottom of the viewport.

## Elevation & Depth

This design system eschews traditional shadows in favor of **Tonal Layers** and **Glow Effects**.

- **Depth Tiers:** The base layer is #0A0A0A. Hovering over cards or interacting with inputs reveals the #121212 layer.
- **Floating Navigation:** The pill-shaped menu uses a glassmorphic background blur (32px) and a subtle neon-green outer glow to separate it from the content scroll.
- **Neon Accents:** Instead of shadows, use "Neon Underglows" (a soft green drop shadow with 0 offset and a large blur) for primary buttons and active status indicators.

## Shapes

The shape language is primarily architectural and sharp, but utilizes extreme roundedness for interactive components to create a tactile, modern feel.

- **Containers & Images:** Use sharp corners or a very subtle `4px` radius to maintain a professional, "grid-aligned" look.
- **Interactive Elements:** Buttons, tags, and the main navigation menu are **Pill-shaped** (full round) to contrast against the rigid layout and signal touchability.
- **Avatars:** Strictly circular to maintain consistency with industry-standard profile patterns.

## Components

### Navigation Menu
A floating, pill-shaped bar positioned at the bottom-center of the viewport. It features a semi-transparent black background with a heavy backdrop-blur and a 1px border using a 10% white opacity. The active state is indicated by a Neon Green icon and a soft glow.

### Buttons
- **Primary:** Neon Green background with black text. Pill-shaped. On hover, the green "glow" expands.
- **Secondary:** Transparent background with a white 1px border. Pill-shaped.

### Portfolio Modules
Images should be presented in high-resolution, full-bleed within their grid containers. Hovering over a module should reveal a subtle overlay with the project name (Syne) and tags (JetBrains Mono).

### Status Indicator (Availability)
A small, pill-shaped badge using a low-opacity green background with a bright Neon Green dot and text. This is a critical conversion element and should be placed prominently in the header and footer.

### Chips / Tags
Used for software (e.g., "Photoshop") and categories. These use the Monospaced font at a small scale, enclosed in a dark gray pill with no border.