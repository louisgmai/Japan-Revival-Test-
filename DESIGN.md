# Design System: Revival Japan Landing Page
**Project ID:** 12127295683822114837

## 1. Visual Theme & Atmosphere
The overall atmosphere is a striking blend of modern, bold digital culture mapping onto traditional cultural themes. It feels "Vibrant, Minimal-yet-Dynamic, and Forward-looking." The use of stark contrasts (deep blacks, bright reds, clean whites) gives it an energetic, high-impact aesthetic akin to modern streetwear or editorial digital design. The layout breathes with generous spacing but commands attention with large, confident display typography and subtle glassmorphism effects for a contemporary tech feel.

## 2. Color Palette & Roles
* **Revival Crimson (#F74A53)** - *Used for primary actions, branding highlights, tags, and key visual accents. It provides vibrant, energetic urgency.*
* **Soft Canvas White (#F5F0F0)** - *Used for the light mode background. A warm, slightly off-white tone that serves as a comfortable, airy canvas.*
* **Deep Ink Black (#121212)** - *Used for the dark mode background and deepest shadows. Provides a rich, immersive contrast space.*
* **Stark Surface White (#FFFFFF)** - *Used for cards, input fields, and elevated elements in light mode.*
* **Charcoal Surface (#1E1E1E)** - *Used for cards, containers, and elevated elements in dark mode to provide subtle separation from the deeper background.*
* **Slate Text/Elements (#0F172A / #F1F5F9)** - *The `slate-900` and `slate-100` defaults used for primary text layering, offering slightly softer contrast than pure black/white.*

## 3. Typography Rules
* **Display Font (Helvetica / Inter):** Used for large headers, branding ("REVIVAL JAPAN"), and high-impact numbered metrics. Utilizes heavy weights (Bold `font-bold` and tight tracking `tracking-tight` or `tracking-tighter`) to create a monumental, assertive presence.
* **Body Font (Inter):** Used for all paragraph text, ui controls, and metadata. Primarily relies on regular weights with varying opacities (`opacity-70`, `opacity-60`) to establish clear hierarchy without cluttering the visual weight.
* **Typographic Accents:** Uppercase styling with very wide tracking (`tracking-widest` or `tracking-[0.4em]`) is used for category tags and thematic overlines (e.g., "Official Manga Series").

## 4. Component Stylings
* **Buttons:** 
  * *Primary:* Pill-shaped (`rounded-full`), solid Revival Crimson with white text, using bold font weights. Interactive state includes a hover scale effect (`hover:scale-105`) or opacity shift.
  * *Secondary:* Pill-shaped (`rounded-full`), translucent dark/light background (`bg-black/5` or `bg-white/10`) with bold text.
* **Cards/Containers:** 
  * Geometry utilizes subtly rounded corners (`rounded-lg` or `border-radius: 24px` to `32px` ranges for larger elements). 
  * Borders are very delicate, utilizing semi-transparent lines (`border-black/5` or `border-white/10`) to define edges without heavy box models.
  * Interactive cards (like News items or Merch) feature image zoom effects on hover (`group-hover:scale-105`) to add dynamism.
* **Navigation (Glassmorphism):** The top navbar employs a frosted glass effect (`backdrop-filter: blur(12px)`) across a semi-transparent background, creating depth over scrolling content.

## 5. Layout Principles
* **Whitespace & Rhythm:** The layout employs vast, generous spacing (e.g., `py-24`, `pt-40`, `gap-20`) to let large typography and evocative imagery stand out. Elements are rarely cramped.
* **Alignment:** Content is primarily locked into a consistent maximum width container (`max-w-7xl mx-auto`), keeping the experience anchored and legible on ultra-wide screens, though hero elements and imagery are allowed to span wider or break the grid for visual interest.
* **Depth Strategy:** The system uses distinct Z-layers. Deep backgrounds sit flat, glassmorphic headers sit at the very top (`z-50`), and elevated cards use soft, diffused shadows (`shadow-sm`, `shadow-xl`) to lift cleanly off the canvas.
