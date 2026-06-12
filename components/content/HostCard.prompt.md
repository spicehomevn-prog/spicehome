The "meet your host" card — round monogram, name, role eyebrow, blurb, contact rows.

```jsx
<HostCard name="Hải (Hailey)" initial="H" role="Main Host"
  blurb="Speaks Vietnamese, English and communicative Mandarin…"
  contacts={[{ icon:'message-circle', label:'WhatsApp / Viber / Zalo', href:'https://wa.me/…' },
             { icon:'phone', label:'+84 904 955 479', href:'tel:+84904955479' }]} />
```

Used as a 2-up grid on About. Contacts without `href` render as plain text. Composes `Icon`.
