Displays a SpiceHome room. Bilingual fields accept `{ vi, en }` objects (or plain strings); pass `lang`.

```jsx
<RoomCard room={room} layout="card" lang="en" onOpenGallery={openLightbox} />
<RoomCard room={room} layout="list" lang="vi" />
```

`card` = compact image + highlight chips for the homepage grid. `list` = wide row with tagline, description, bed/capacity meta and amenity chips for the rooms page. Image hover zooms 1.05×; whole card lifts with `--shadow-hover`. Composes `Tag` and `Icon`.
