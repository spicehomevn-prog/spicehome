A local-guide listing card — the host's neighbourhood recommendations.

```jsx
<GuideCard item={{ name: { vi:'Phở Hòa', en:'Phở Hòa' }, description:{...}, address:'…', hours:'6–22h', tip:{...}, mapsUrl:'…' }} lang="en" />
```

Address, hours, tip and map link are all optional and only render when present. The `tip` shows in a soft inset box with a lightbulb. Composes `Icon`.
