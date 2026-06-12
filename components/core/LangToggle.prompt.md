The bilingual VI / EN switch from the navbar. It shows the language you'd switch *to*.

```jsx
const [lang, setLang] = React.useState('vi')
<LangToggle lang={lang} onChange={setLang} />
```

`tone="onDark"` for the ink navbar (default), `onLight` elsewhere. SpiceHome is Vietnamese-first — default `lang` to `'vi'`.
