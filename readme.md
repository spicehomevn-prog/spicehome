# SpiceHome Design System

A design system for **SpiceHome** — a warm, authentic homestay in **Phú Nhuận, Hồ Chí Minh City (Sài Gòn), Vietnam**. SpiceHome is not a hotel; it's run by hosts **Hải (Hailey)** and **Thanh**, who position the stay as *"a local living experience"* — sharing their Saigon with travellers like a local friend would. The brand is **bilingual (Vietnamese-first, English second)** and books primarily through Airbnb and a Beacons link.

The product is a marketing/booking website (Next.js) with pages for Home, Rooms, Local Guide, House Manual, and About. There is also a social content operation (Instagram / TikTok / Facebook) with its own Vietnamese tone guide.

## Sources

This system was reverse-engineered from a single attached codebase:

- **`spicehome/`** — Next.js 14 (App Router) marketing site. Key references:
  - `tailwind.config.ts`, `src/app/globals.css` — color + font definitions
  - `src/app/layout.tsx` — fonts (Playfair Display + Inter via `next/font/google`)
  - `src/components/` — `layout/Navbar`, `layout/Footer`, `sections/Hero`, `sections/RoomCard`, `sections/GuideCard`, `ui/SectionLabel`, `ui/GalleryModal`
  - `src/lib/data/rooms.ts`, `guide.ts` — bilingual content models
  - `src/context/LanguageContext.tsx` — the `vi`/`en` `BilingualText` pattern
  - `public/images/` — real homestay photography (copied into `assets/`)
  - `content-calendar/` + `.claude/skills/competitor-content-calendar/references/vietnamese-tone-guide.md` — social voice & strategy

No Figma file was provided. Booking links: Airbnb (`airbnb.com/users/show/479055797`), Beacons (`beacons.ai/spicehomesaigon`).

---

## Content Fundamentals

SpiceHome writes like **a warm local friend, not a hotel marketer**. The voice differs slightly by surface:

**Website** (this system's primary scope) — calm, editorial, sincere. Bilingual: every string exists as `{ vi, en }`. Vietnamese is the default. English is natural and British-leaning in spelling (*"neighbourhood", "cosy", "centre"*).

**Social captions** (see `vietnamese-tone-guide.md`) — more intimate and scene-first.

### Voice rules
- **Person:** intimate. Vietnamese uses **"mình" / "bạn"** (me / you), never the formal "chúng tôi / quý khách". English uses **"we" / "you"**.
- **Open with a scene or feeling, not a pitch.** *"6 giờ sáng tại SpiceHome…"* / *"From an early morning bowl of phở to a late-night walking street…"*
- **Short sentences, natural rhythm.** How a Saigonese person actually texts.
- **Soft, natural CTAs.** *"Bạn có muốn xem không?"*, *"Nhắn tin cho mình để giữ phòng nhé"*, *"Explore Local Guide"*, *"Book Directly"*. Never *"Hãy nhanh tay đặt phòng ngay hôm nay!"*
- **Hyperlocal & honest.** Name the alley, the corner stall, the morning sounds. *"What you see is exactly what you get"* — no over-promising, no travel clichés (avoid *"trải nghiệm tuyệt vời", "dịch vụ chuyên nghiệp"*).
- **Casing:** Sentence case for headings and body. **UPPERCASE only** for the wide-tracked eyebrow labels and button text (e.g. `BOOK ON AIRBNB`, `FEATURED ROOMS`).

### Emoji & special characters
- **Website UI: no emoji.** Icons are line icons (Lucide).
- **Social captions: emoji sparingly** — a single 🏡 at the end of a CTA is on-brand; nothing more decorative.
- Vietnamese diacritics are always preserved correctly (Phú Nhuận, Sài Gòn, phở).

### Hard brand rule
**Never use red** — not in copy references, not in visual guides, not in UI. The warm accent is **terracotta (`#C4773B`)**, an earthy clay tone, never red.

---

## Visual Foundations

The aesthetic is **warm editorial minimalism** — cream paper, a single earthy terracotta accent, serif display type, and sharp, gallery-like framing. It feels like a thoughtfully art-directed boutique stay, not a busy booking portal.

### Color
- **Background is cream `#FAFAF8`**, surfaces are pure white `#FFFFFF`. The warmth of the off-white is essential — never use a cold grey-white.
- **One accent only: terracotta `#C4773B`** (the official brand hex, confirmed; hover `#A8622E`). Used for eyebrow labels, links, icons, primary buttons, and the "Home" in the wordmark. Soft 10% / 5% tints fill icon chips and wash card hovers.
- **Dark bands** use near-black ink `#1A1A18` (nav, footer, feature/CTA sections, page headers). White text at full / 60–70% opacity sits on them.
- Text: graphite `#2C2C2A` for body & headings, stone `#7A7A72` for muted/secondary.
- Hairline borders are warm beige `#E8E4DC`. Full tokens in `tokens/colors.css`.

### Type
- **Playfair Display (serif)** for all headings, and crucially the **italic** voice of the hero and page headers (*"Your cozy home in the heart of Saigon"*). Regular weight; large editorial sizes.
- **Inter (sans)** for body copy **and** the signature uppercase eyebrow/button labels (12px, weight 500, letter-spacing `0.15em`).
- The serif/sans + sentence-case/UPPERCASE contrast is the core typographic signature. See `tokens/typography.css`.

### Shape, borders & shadows
- **Corners are square.** `--radius-none` (0) is the default for cards, buttons, inputs, chips, images. The **only** rounded thing is the pill: round icon chips and host monograms (`--radius-pill`).
- **Hairline 1px borders** define cards and chips — flat at rest.
- **Shadows are minimal.** Cards have no shadow at rest; on hover they lift with a single soft `--shadow-hover` (`0 4px 16px rgba(26,26,24,0.08)`). No heavy drop-shadows anywhere. The lightbox uses a deeper modal shadow.

### Backgrounds & imagery
- No gradients, no patterns, no textures. Backgrounds are flat cream, white, or ink.
- **Photography carries the warmth.** Real homestay interiors: natural daylight, beige walls, light wood furniture, teal accent curtains, small terracotta/Saigon art prints. **Warm tones, no cold presets, no heavy filters** — slightly imperfect and documentary, never stock-glossy.
- Dark feature bands place a photo at low opacity (~20%) behind ink, with white text over it.
- Hero images get a `rgba(0,0,0,0.5)` scrim so white text stays legible.

### Layout
- Centered, generous, editorial. Content max-width ~1152px (`--container-max`); centered prose blocks ~768px.
- **Large vertical section rhythm** — 80px mobile / 112px desktop between sections.
- Sections **alternate cream and white** backgrounds for quiet rhythm, punctuated by occasional full-width **ink** bands.
- Fixed ink navbar (64px) across the top; everything else scrolls.
- Section pattern: centered eyebrow `SectionLabel` → Playfair heading → content grid.

### Motion
- Quiet and slow. **Scroll-reveal:** elements fade up 28px over **0.7s ease-out**, staggered ~100ms across a grid (`.animate-on-scroll`).
- **Hero:** sequential fade-ups at 0s / 0.4s / 0.8s.
- **Image hover:** slow `scale(1.05)` zoom over 500ms inside a fixed frame (image grows, frame clips).
- **Everything else:** 200ms color/background transitions. No bounces, no springs, no parallax. Respects `prefers-reduced-motion`.

### Hover & press states
- **Buttons:** color inversion, not movement — primary darkens to `#A8622E`; outline buttons fill with ink or terracotta and flip text to white.
- **Links / nav:** color shift to terracotta over 200ms.
- **Cards:** soft shadow lift + inner image zoom; the whole card is the affordance.
- No explicit pressed/scale-down state — the product relies on color transitions.

---

## Iconography

- **Lucide** (`lucide-react`) is the icon system — the only icon set in the product. Thin line icons, 24×24 grid, **stroke-width 2**, round caps & joins, no fill, sized 11–28px and colored with the terracotta accent (or white on dark).
- Icons seen in use: `home, coffee, map, star, chevron-down/left/right, menu, x, map-pin, phone, mail, message-circle, users, bed-double, images, utensils, shopping-bag, landmark, bus, clock, lightbulb, external-link`.
- This system ships an **`Icon` component** (`components/core/Icon.jsx`) that embeds the exact Lucide path data for the glyphs the product uses — so design-system components stay self-contained (React-only, no npm icon dependency). For new work you may also load `lucide-react` / the Lucide CDN directly; keep the stroke-2 line style.
- **No emoji as UI icons.** No PNG/raster icons. No custom/hand-drawn iconography. Unicode middle-dot `·` is used as a separator in eyebrows/meta (e.g. *"Phú Nhuận · Sài Gòn"*).
- The **wordmark** is purely typographic: `Spice` + `Home` (terracotta) in Playfair Display — there is no logo mark/symbol.

---

## Index / Manifest

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s everything below.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skills-compatible entry for use in Claude Code.

**`tokens/`** — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`.

**`guidelines/`** — foundation specimen cards (Design System tab): colors (accent, neutrals), type (display, body/label), spacing (scale, corners/borders/shadow), brand (wordmark, photography).

**`components/core/`** — `Button`, `Tag`, `SectionLabel`, `LangToggle`, `Icon`. Card: `core.card.html`.
**`components/content/`** — `RoomCard`, `GuideCard`, `HostCard`. Card: `content.card.html`.

**`ui_kits/website/`** — interactive recreation of the SpiceHome marketing site (`index.html` + screen JSX). Composes the components above.

**`templates/`** — copy-and-edit starting points for consuming projects:
- `landing-page/` — single-page hero + featured rooms + CTA scaffold.
- `room-detail/` — reusable bilingual room page with the 4-section structure (Opening · Không gian/Space · Tiện ích/Access · Lưu ý/Notes). Swap `ROOM_ID` to render any room; content + Airbnb links in `rooms-data.js`.

### Contact (official)
Phones: (+84) 0904 955 479 · (+84) 0355 608 623 · (+84) 0979 80 4343. Booking: Airbnb per-room links `airbnb.com.vn/h/spicehome<NNN>`, plus `beacons.ai/spicehomesaigon`.

**`assets/images/`** — real homestay photography copied from the codebase: `common/` (shared spaces), `hero/`, `rooms/room-*/` (per-room galleries).

### Notes / substitutions
- **Fonts** are loaded from the Google Fonts CDN in `tokens/fonts.css` (both Playfair Display and Inter are exact Google Fonts — no visual substitution). Self-hosted `.woff2` binaries are not bundled; add them to `tokens/fonts/` and swap to `@font-face` if you need offline use.
- **Icons** are embedded Lucide path data (faithful to the product's `lucide-react`), not the npm package.
