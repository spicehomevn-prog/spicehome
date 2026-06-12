---
name: spicehome-design
description: Use this skill to generate well-branded interfaces and assets for SpiceHome (a warm, bilingual VN/EN homestay in Phú Nhuận, Saigon), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Brand:** SpiceHome — a cosy, authentic homestay in Phú Nhuận, Hồ Chí Minh City. Voice: a warm local friend, not a hotel. Bilingual, Vietnamese-first.
- **Color:** cream `#FAFAF8` page, white surfaces, ink `#1A1A18` dark bands, single terracotta accent `#C4773B` (hover `#A8622E`). **Never red.**
- **Type:** Playfair Display (serif, headings + signature italic) / Inter (body + UPPERCASE wide-tracked eyebrows & buttons).
- **Shape:** square corners everywhere (radius 0); pill only for icon chips & avatars. Hairline 1px beige borders; flat cards that lift with one soft shadow on hover. No gradients, no textures.
- **Icons:** Lucide line icons, stroke-2 (the `Icon` component embeds them).
- **Motion:** quiet scroll fade-ups (0.7s), 1.05× image hover zoom, 200ms color transitions. No bounces.

## Files
- `styles.css` — link this; it `@import`s all tokens + fonts.
- `readme.md` — full brand guide (content fundamentals, visual foundations, iconography).
- `tokens/` — CSS custom properties.
- `components/core/`, `components/content/` — React primitives (Button, Tag, SectionLabel, LangToggle, Icon, RoomCard, GuideCard, HostCard).
- `ui_kits/website/` — interactive recreation of the marketing site.
- `assets/images/` — real homestay photography.
