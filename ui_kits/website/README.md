# SpiceHome Website — UI Kit

An interactive, click-through recreation of the **SpiceHome marketing site** (the real product is Next.js 14). Bilingual (VI/EN) — toggle in the navbar.

## Run
Open `index.html`. It loads React + Babel, the compiled `_ds_bundle.js`, then the screens.

## Screens & flow
- **Home** (`HomePage.jsx`) — hero, brand intro, featured rooms, "why us", local-guide teaser (dark photo band), book CTA.
- **Rooms** (`RoomsPage.jsx`) — dark page header + full room list (`RoomCard layout="list"`).
- **Local Guide** (`GuidePage.jsx`) — food / shopping / attractions / transport, alternating cream/white bands.
- **About** (`AboutPage.jsx`) — story with image, host cards, contact CTA.
- Click any room image → **GalleryModal** lightbox (←/→/Esc, thumbnails).

## Composition
- Primitives come from the DS bundle: `Button`, `Tag`, `SectionLabel`, `LangToggle`, `Icon`, `RoomCard`, `GuideCard`, `HostCard` (`window.SpiceHomeDesignSystem_e751f1`).
- Kit-local pieces export to `window` (`SH_Navbar`, `SH_Hero`, `SH_Footer`, `SH_GalleryModal`, `SH_*Page`, `SH_Reveal`).
- Content lives in `data.js` (`window.SH_DATA`) — a bilingual subset of the product's `rooms.ts` / `guide.ts`.

## Notes
- `Reveal.jsx` provides the scroll fade-up used throughout.
- Booking links point at the real Airbnb / Beacons URLs; messaging links are illustrative.
