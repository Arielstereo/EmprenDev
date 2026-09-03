# EmprenDev — Design System

## Direction & feel
Profesional, moderno y cálido para emprendedores. Foco en jerarquía clara (focal point por sección), superficies en una sola temperatura, y un acento azul usado con intención (acciones, links, accent de marcas).

## Depth strategy
**Borders + surface-color shifts.** Superficies se apilan sutilmente (`surface-base` → `surface-1/2/3`) con bordes de baja opacidad. En modo claro se permiten sombras suaves; en oscuro se colapsan a anillos (las sombras no leen sobre fondo oscuro).

## Token architecture
Definido en `tailwind.config.mjs` y como variables CSS en `src/layouts/Layout.astro`:

- **Surfaces** — `surface-base`, `surface-1`, `surface-2`, `surface-3`. Mismo hue, solo luminosidad.
  - Light: `#f5f7fb` base → `#ffffff`.
  - Dark: `#0b1220` → `#111a2c` → `#16213a` → `#1c2947` (slate cálido, mucho mejor que el azul frío anterior).
- **Borders** — `border-subtle` / `-default` / `-emphasis` / `-accent`.
  - Light: `rgba(15,23,42,0.06–0.16)`.
  - Dark: `rgba(255,255,255,0.06–0.16)` — crítico, los blancos de baja opacidad sí se ven sobre fondo oscuro.
- **Text (4 niveles)** — `txt-primary` `txt-secondary` `txt-muted` + accent. Nunca hardcodear gray/slate/zinc/`black dark:white`.
- **Accent** — `accent` `accent-hover` `accent-dark` `accent-subtle` (rgba suave para fondos/chips).

## Hierarchy decisions
- **Type scale ratio ~1.25**, tamaños gestionados por utility Tailwind por sección (headings `text-4xl`/`lg:text-[40px]`, hero display).
- **Peso + color > tamaño** para jerarquía (títulos `font-bold` + `txt-primary`; body `txt-secondary`; meta `txt-muted`).
- **Densidad** media, con ritmo irregular: secciones `py-16/20/24/28` y espaciado de tarjetas de 6–8px en grids.

## Key component patterns
- **CTA/button primario** — `rounded-lg bg-accent hover:bg-accent-hover text-white font-semibold shadow-glow` + focus-visible ring. Sujeto a tokens, no a clases contradictorias.
- **Glass/glimpse card** — clase `.glass` (navbars) y `.glass-card` (tarjetas): `rounded-card` (16px), borde `border-border-default`, sombra `shadow-card`/`shadow-card-hover`.
- **Input** — `min-h-[48px] rounded-control bg-surface-1 border border-border-default placeholder:text-txt-muted focus:border-accent focus:ring-2 focus:ring-accent-subtle`.
- **Chips/tags de Portfolio** — `bg-accent-subtle text-accent dark:text-accent-hover rounded-full`.
- **Navbar** — fluido (sin `absolute`), Logo + links + CTA + ModeButton centrados horizontalmente en desktop, menú desplegable en mobile.

## Spacing
**Base unit 4px**, múltiplos solamente. Padding de tarjetas simétrico (p-5 → p-10 según contexto). `container px-4/6 mx-auto` para ancho de contenido.

## Dark mode notes
- Mantener UN solo hue; variar solo luminosidad entre superficies.
- Colapsar sombras a anillos (`0 0 0 1px rgba(255,255,255,0.06–0.1)`).
- Aclarar accent y gradiente para contraste sobre fondo oscuro.
- Script inline anti-flash en el `<head>` antes del render.

## Motion
Durée < 300ms, `transition-colors` / `transform` / `opacity` (nunca `all`). Respeta `prefers-reduced-motion` (global en Layout).
