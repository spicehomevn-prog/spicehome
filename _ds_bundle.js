/* @ds-bundle: {"format":3,"namespace":"SpiceHomeDesignSystem_e751f1","components":[{"name":"GuideCard","sourcePath":"components/content/GuideCard.jsx"},{"name":"HostCard","sourcePath":"components/content/HostCard.jsx"},{"name":"RoomCard","sourcePath":"components/content/RoomCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"LangToggle","sourcePath":"components/core/LangToggle.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/content/GuideCard.jsx":"f9199ed774f7","components/content/HostCard.jsx":"37b55f9ddf4d","components/content/RoomCard.jsx":"2678fc5c2b80","components/core/Button.jsx":"6a7d728b128d","components/core/Icon.jsx":"8d2ccc468568","components/core/LangToggle.jsx":"aec7821c9c76","components/core/SectionLabel.jsx":"4446d1b2473b","components/core/Tag.jsx":"83e4f58a6daa","ui_kits/website/AboutPage.jsx":"a02987a41357","ui_kits/website/Footer.jsx":"1100c1173f63","ui_kits/website/GalleryModal.jsx":"e255509bff14","ui_kits/website/GuidePage.jsx":"d61e2146e4f9","ui_kits/website/Hero.jsx":"d3f7c7c5c4b1","ui_kits/website/HomePage.jsx":"87c6384b60e4","ui_kits/website/Navbar.jsx":"fadfae160211","ui_kits/website/Reveal.jsx":"107db963f459","ui_kits/website/RoomsPage.jsx":"352c8adddddf","ui_kits/website/data.js":"d1637ac76e39"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SpiceHomeDesignSystem_e751f1 = window.SpiceHomeDesignSystem_e751f1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SpiceHome Button — square, uppercase, wide-tracked. The house CTA style.
 * Renders an <a> when `href` is given, otherwise a <button>.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  ...rest
}) {
  const base = {
    fontFamily: 'var(--font-label)',
    fontWeight: 'var(--weight-medium)',
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-wide)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    borderRadius: 'var(--radius-none)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'var(--transition-color)',
    textAlign: 'center',
    lineHeight: 1,
    whiteSpace: 'nowrap'
  };
  const sizes = {
    sm: {
      fontSize: 'var(--text-xs)',
      padding: '0.625rem 1.25rem'
    },
    md: {
      fontSize: 'var(--text-xs)',
      padding: '0.75rem 2rem'
    },
    lg: {
      fontSize: 'var(--text-sm)',
      padding: '1rem 2.5rem'
    }
  };
  const variants = {
    primary: {
      background: 'var(--accent)',
      color: '#fff',
      borderColor: 'var(--accent)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-body)',
      borderColor: 'rgba(44,44,42,0.3)'
    },
    accentOutline: {
      background: 'transparent',
      color: 'var(--accent)',
      borderColor: 'var(--accent)'
    },
    onDark: {
      background: '#fff',
      color: 'var(--accent)',
      borderColor: '#fff'
    },
    ghostOnDark: {
      background: 'transparent',
      color: '#fff',
      borderColor: 'var(--border-on-inverse)'
    }
  };
  const style = {
    ...base,
    ...sizes[size],
    ...variants[variant]
  };
  const hoverClass = `sh-btn sh-btn--${variant}`;
  const props = {
    className: `${hoverClass} ${className}`.trim(),
    style,
    'data-variant': variant,
    ...rest
  };

  // Per-variant hover handled via a scoped <style> injected once.
  const hoverCss = `
    .sh-btn--primary:not([aria-disabled="true"]):hover { background: var(--accent-hover) !important; border-color: var(--accent-hover) !important; }
    .sh-btn--outline:not([aria-disabled="true"]):hover { background: var(--bg-inverse) !important; color: #fff !important; border-color: var(--bg-inverse) !important; }
    .sh-btn--accentOutline:not([aria-disabled="true"]):hover { background: var(--accent) !important; color: #fff !important; }
    .sh-btn--onDark:not([aria-disabled="true"]):hover { background: var(--bg-inverse) !important; color: #fff !important; border-color: var(--bg-inverse) !important; }
    .sh-btn--ghostOnDark:not([aria-disabled="true"]):hover { background: #fff !important; color: var(--accent) !important; border-color: #fff !important; }
  `;
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: hoverCss
    }
  }), children);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href
    }, props, {
      onClick: onClick
    }), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    "aria-disabled": disabled,
    onClick: onClick
  }, props), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Lucide icon paths used across SpiceHome. The product uses lucide-react;
 * these are the exact lucide path definitions, embedded so design-system
 * components stay self-contained (React-only, no npm icon dependency).
 * Stroke style matches lucide defaults: 24×24, stroke-width 2, round caps.
 */
const PATHS = {
  home: 'M3 9 12 2l9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z|M9 22V12h6v10',
  coffee: 'M10 2v2|M14 2v2|M6 2v2|M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1',
  map: 'M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3z|M9 3v15|M15 6v15',
  star: 'M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01z',
  'chevron-down': 'm6 9 6 6 6-6',
  'chevron-left': 'm15 18-6-6 6-6',
  'chevron-right': 'm9 18 6-6-6-6',
  menu: 'M4 6h16|M4 12h16|M4 18h16',
  x: 'M18 6 6 18|M6 6l12 12',
  'map-pin': 'M20 10c0 4.99-5.54 10.19-7.4 11.8a1 1 0 0 1-1.2 0C9.54 20.19 4 14.99 4 10a8 8 0 0 1 16 0Z|M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z',
  phone: 'M13.83 16.57a1 1 0 0 0 1.21-.3l.36-.47A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.47.35a1 1 0 0 0-.29 1.23 14 14 0 0 0 6.39 6.39',
  mail: 'm22 7-9 5.73a2 2 0 0 1-2.02 0L2 7|M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
  'message-circle': 'M7.9 20A9 9 0 1 0 4 16.1L2 22z',
  users: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2|M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z|M22 21v-2a4 4 0 0 0-3-3.87|M16 3.13a4 4 0 0 1 0 7.75',
  'bed-double': 'M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8|M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4|M12 4v6|M2 18h20',
  images: 'M18 22H4a2 2 0 0 1-2-2V6|m22 13-1.3-1.3a2.41 2.41 0 0 0-3.4 0L11 18|M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z|M6 2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z',
  utensils: 'M3 2v7c0 1.1.9 2 2 2h2.5a.5.5 0 0 0 .5-.5V2|M7 2v20|M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2z',
  'shopping-bag': 'M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z|M3 6h18|M16 10a4 4 0 0 1-8 0',
  landmark: 'M3 22h18|M6 18v-7|M10 18v-7|M14 18v-7|M18 18v-7|M12 2 20 7H4z',
  bus: 'M8 6v6|M15 6v6|M2 12h19.6|M18 18h3a1 1 0 0 0 1-1v-5a8 8 0 0 0-8-8H6a4 4 0 0 0-4 4v9a1 1 0 0 0 1 1h2|M9 18h6|M5 18a2 2 0 1 0 0 .01|M18 18a2 2 0 1 0 0 .01',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z|M12 6v6l4 2',
  lightbulb: 'M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.8.8 1.3 1.5 1.5 2.5|M9 18h6|M10 22h4',
  'external-link': 'M15 3h6v6|M10 14 21 3|M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'
};

/** A single Lucide-style stroke icon. */
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  className = '',
  style = {},
  ...rest
}) {
  const d = PATHS[name];
  if (!d) return null;
  const segs = d.split('|');
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: className,
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    },
    "aria-hidden": "true"
  }, rest), segs.map((seg, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: seg
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/GuideCard.jsx
try { (() => {
/**
 * GuideCard — a single local-guide listing (eatery, shop, attraction, transit).
 * Flat surface card with optional address, hours, host tip and a maps link.
 */
function GuideCard({
  item,
  lang = 'en'
}) {
  const t = b => b && typeof b === 'object' ? b[lang] : b;
  return /*#__PURE__*/React.createElement("div", {
    className: "sh-guidecard",
    style: {
      background: 'var(--bg-surface)',
      border: 'var(--border)',
      padding: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `
        .sh-guidecard { transition: box-shadow var(--duration-medium) ease; }
        .sh-guidecard:hover { box-shadow: var(--shadow-hover); }
        .sh-guidecard a.sh-maplink:hover { color: var(--accent-hover); }
      `
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h4)',
      color: 'var(--text-heading)',
      margin: '0 0 var(--space-2)'
    }
  }, t(item.name)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-relaxed)',
      margin: '0 0 var(--space-4)'
    }
  }, t(item.description)), item.address && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 8,
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 13,
    style: {
      color: 'var(--accent)',
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", null, item.address)), item.hours && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "clock",
    size: 13,
    style: {
      color: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", null, item.hours)), item.tip && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 8,
      fontSize: 'var(--text-xs)',
      color: 'var(--text-body)',
      background: 'var(--bg-page)',
      border: 'var(--border)',
      padding: 'var(--space-3)',
      marginTop: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "lightbulb",
    size: 13,
    style: {
      color: 'var(--accent)',
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", null, t(item.tip))), item.mapsUrl && /*#__PURE__*/React.createElement("a", {
    href: item.mapsUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "sh-maplink",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 'var(--space-4)',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--accent)'
    }
  }, lang === 'vi' ? 'Xem bản đồ' : 'View on Map', /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "external-link",
    size: 11
  })));
}
Object.assign(__ds_scope, { GuideCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/GuideCard.jsx", error: String((e && e.message) || e) }); }

// components/content/HostCard.jsx
try { (() => {
/**
 * HostCard — meet-your-host card from the About page. Round monogram chip,
 * name, role eyebrow, blurb, and contact rows.
 */
function HostCard({
  name,
  initial,
  role,
  blurb,
  contacts = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-surface)',
      border: 'var(--border)',
      padding: 'var(--space-8)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 80,
      height: 80,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--accent-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      color: 'var(--accent)',
      fontSize: 'var(--text-h3)'
    }
  }, initial)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h4)',
      color: 'var(--text-heading)',
      margin: '0 0 4px'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--accent)',
      margin: '0 0 var(--space-4)'
    }
  }, role), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-relaxed)',
      margin: '0 0 var(--space-5)'
    }
  }, blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, contacts.map((c, i) => {
    const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: c.icon || 'phone',
      size: 13,
      style: {
        color: 'var(--accent)'
      }
    }), /*#__PURE__*/React.createElement("span", null, c.label));
    const style = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    };
    return c.href ? /*#__PURE__*/React.createElement("a", {
      key: i,
      href: c.href,
      target: "_blank",
      rel: "noopener noreferrer",
      style: style
    }, inner) : /*#__PURE__*/React.createElement("p", {
      key: i,
      style: {
        ...style,
        margin: 0
      }
    }, inner);
  })));
}
Object.assign(__ds_scope, { HostCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/HostCard.jsx", error: String((e && e.message) || e) }); }

// components/core/LangToggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * LangToggle — the VI / EN switch from the navbar. Controlled: pass the
 * current `lang` and an `onChange` that receives the other language.
 * Shows the language you'd switch TO (matches the product behaviour).
 */
function LangToggle({
  lang = 'vi',
  onChange,
  tone = 'onDark',
  className = '',
  ...rest
}) {
  const other = lang === 'vi' ? 'en' : 'vi';
  const colors = {
    onDark: {
      color: 'rgba(255,255,255,0.6)'
    },
    onLight: {
      color: 'var(--text-muted)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: () => onChange && onChange(other),
    className: `sh-langtoggle ${className}`.trim(),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      transition: 'var(--transition-color)',
      ...colors[tone]
    },
    "aria-label": `Switch to ${other === 'en' ? 'English' : 'Vietnamese'}`
  }, rest), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `
        .sh-langtoggle:hover { color: ${tone === 'onDark' ? '#fff' : 'var(--accent)'} !important; }
      `
    }
  }), other.toUpperCase());
}
Object.assign(__ds_scope, { LangToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LangToggle.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * SectionLabel — the terracotta uppercase eyebrow that sits above section
 * headings throughout SpiceHome. Wide-tracked Inter, 12px.
 */
function SectionLabel({
  children,
  tone = 'accent',
  className = '',
  ...rest
}) {
  const colors = {
    accent: 'var(--accent)',
    light: 'rgba(196,119,59,0.8)',
    // slightly softened over dark bands
    muted: 'var(--text-muted)'
  };
  return /*#__PURE__*/React.createElement("p", _extends({
    className: className,
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: colors[tone],
      margin: 0
    }
  }, rest), children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — the small bordered chip used for room highlights & amenities.
 * Square, hairline border, muted text on the page background.
 */
function Tag({
  children,
  tone = 'default',
  className = '',
  ...rest
}) {
  const tones = {
    default: {
      background: 'var(--bg-page)',
      color: 'var(--text-muted)',
      borderColor: 'var(--border-hairline)'
    },
    accent: {
      background: 'var(--accent-soft)',
      color: 'var(--accent)',
      borderColor: 'transparent'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      lineHeight: 1.4,
      padding: '0.25rem 0.625rem',
      border: '1px solid',
      borderRadius: 'var(--radius-none)',
      ...tones[tone]
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/RoomCard.jsx
try { (() => {
/**
 * RoomCard — the featured-room card from the homepage / rooms list.
 * `card` layout = compact image + highlight chips. `list` = wide row with
 * full description, meta, amenities and booking buttons.
 */
function RoomCard({
  room,
  layout = 'card',
  onOpenGallery,
  lang = 'en'
}) {
  const t = b => b && typeof b === 'object' ? b[lang] : b;
  const roomLabel = lang === 'vi' ? `Phòng ${room.number}` : `Room ${room.number}`;
  const ImageButton = /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onOpenGallery && onOpenGallery(room),
    style: {
      position: 'relative',
      display: 'block',
      width: '100%',
      height: '100%',
      padding: 0,
      border: 'none',
      background: 'none',
      cursor: 'zoom-in',
      overflow: 'hidden'
    },
    "aria-label": `${lang === 'vi' ? 'Xem ảnh' : 'View photos'} ${roomLabel}`,
    className: "sh-roomimg"
  }, /*#__PURE__*/React.createElement("img", {
    src: room.images[0],
    alt: t(room.name),
    className: "sh-roomimg-img",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transition: 'transform var(--duration-medium) var(--ease-out)'
    }
  }), room.images.length > 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 12,
      right: 12,
      background: 'rgba(0,0,0,0.6)',
      color: '#fff',
      fontSize: 'var(--text-xs)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '0.25rem 0.625rem',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "images",
    size: 12
  }), room.images.length));
  const hoverCss = `
    .sh-roomcard { transition: box-shadow var(--duration-medium) ease; }
    .sh-roomcard:hover { box-shadow: var(--shadow-hover); }
    .sh-roomcard:hover .sh-roomimg-img { transform: scale(1.05); }
  `;
  if (layout === 'list') {
    return /*#__PURE__*/React.createElement("div", {
      className: "sh-roomcard",
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        border: 'var(--border)',
        background: 'var(--bg-surface)'
      }
    }, /*#__PURE__*/React.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: hoverCss
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        flex: '1 1 320px',
        minHeight: 300
      }
    }, ImageButton), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'var(--space-8)',
        flex: '1 1 340px'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-label)',
        fontSize: 'var(--text-sm)',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-wide)',
        color: 'var(--accent)',
        margin: '0 0 var(--space-3)'
      }
    }, roomLabel), /*#__PURE__*/React.createElement("p", {
      style: {
        fontStyle: 'italic',
        color: 'var(--text-muted)',
        fontSize: 'var(--text-sm)',
        margin: '0 0 var(--space-4)'
      }
    }, t(room.tagline)), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'var(--text-body)',
        fontSize: 'var(--text-sm)',
        lineHeight: 'var(--leading-relaxed)',
        margin: '0 0 var(--space-6)',
        whiteSpace: 'pre-line'
      }
    }, t(room.description)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--space-4)',
        marginBottom: 'var(--space-6)',
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "bed-double",
      size: 15,
      style: {
        color: 'var(--accent)'
      }
    }), t(room.bed)), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "users",
      size: 15,
      style: {
        color: 'var(--accent)'
      }
    }), lang === 'vi' ? `Tối đa ${room.capacity} khách` : `Up to ${room.capacity} guests`)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 'var(--space-2)'
      }
    }, (room.amenities || []).slice(0, 5).map((a, i) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
      key: i
    }, t(a))))));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "sh-roomcard",
    style: {
      background: 'var(--bg-surface)',
      border: 'var(--border)'
    }
  }, /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: hoverCss
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 224
    }
  }, ImageButton), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-4) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--accent)',
      margin: '0 0 var(--space-3)'
    }
  }, roomLabel), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, (room.highlights || []).map((h, i) => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: i
  }, t(h))))));
}
Object.assign(__ds_scope, { RoomCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/RoomCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AboutPage.jsx
try { (() => {
// SpiceHome website — About page
function AboutPage({
  lang
}) {
  const {
    SectionLabel,
    HostCard,
    Button
  } = window.SpiceHomeDesignSystem_e751f1;
  const Reveal = window.SH_Reveal;
  const heading = {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
    color: 'var(--text-heading)',
    margin: 0
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-inverse)',
      padding: 'var(--section-y) var(--gutter)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "light"
  }, lang === 'vi' ? 'Câu chuyện của chúng tôi' : 'Our Story'), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      color: '#fff',
      fontSize: 'clamp(2rem, 4.5vw, 2.75rem)',
      margin: 'var(--space-3) auto 0',
      maxWidth: 640
    }
  }, lang === 'vi' ? 'Gặp gỡ những người chủ nhà' : 'Meet your hosts')), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-page)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 'var(--space-12)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/5',
      overflow: 'hidden',
      border: 'var(--border)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/common/staircase.jpg",
    alt: "Inside SpiceHome",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement(SectionLabel, null, lang === 'vi' ? 'Về SpiceHome' : 'About SpiceHome'), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...heading,
      margin: 'var(--space-3) 0 var(--space-6)'
    }
  }, lang === 'vi' ? 'Một góc nhỏ ấm áp giữa Sài Gòn' : 'A warm little corner of Saigon'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, /*#__PURE__*/React.createElement("p", null, lang === 'vi' ? 'SpiceHome bắt đầu từ một mong muốn đơn giản: mang đến cho du khách cảm giác như đang ở nhà ngay giữa lòng Sài Gòn nhộn nhịp.' : 'SpiceHome started from a simple wish: to give travellers the feeling of being at home, right in the middle of bustling Saigon.'), /*#__PURE__*/React.createElement("p", null, lang === 'vi' ? 'Chúng tôi tin rằng điều khiến một chuyến đi đáng nhớ không phải là khách sạn sang trọng, mà là những trải nghiệm chân thật và sự ấm áp của con người địa phương.' : "We believe what makes a trip memorable isn't a luxury hotel, but authentic experiences and the warmth of local people."), /*#__PURE__*/React.createElement("p", null, lang === 'vi' ? 'Những gì bạn thấy chính là những gì bạn nhận — không phóng đại, không hứa hẹn suông.' : 'What you see is exactly what you get — no exaggeration, no empty promises.'))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-surface)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-prose)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-14)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, lang === 'vi' ? 'Chủ nhà' : 'Your Hosts'), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...heading,
      marginTop: 'var(--space-3)'
    }
  }, lang === 'vi' ? 'Hải & Thanh' : 'Hải & Thanh')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 'var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(HostCard, {
    name: "H\u1EA3i (Hailey)",
    initial: "H",
    role: lang === 'vi' ? 'Chủ nhà chính' : 'Main Host',
    blurb: lang === 'vi' ? 'Nói tiếng Việt, tiếng Anh và tiếng Trung giao tiếp. Chuyên gợi ý ẩm thực, điểm vui chơi và mọi điều về Sài Gòn.' : 'Speaks Vietnamese, English and communicative Mandarin. Specialises in local food, attractions, and all things Saigon.',
    contacts: [{
      icon: 'message-circle',
      label: 'WhatsApp / Viber / Zalo',
      href: 'https://wa.me/84904955479'
    }, {
      icon: 'phone',
      label: '(+84) 0904 955 479',
      href: 'tel:+84904955479'
    }]
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement(HostCard, {
    name: "Thanh",
    initial: "T",
    role: lang === 'vi' ? 'Đồng chủ nhà' : 'Co-Host',
    blurb: lang === 'vi' ? 'Luôn sẵn lòng hỗ trợ check-in, dọn phòng và giải đáp mọi thắc mắc trong suốt kỳ nghỉ của bạn.' : 'Always ready to help with check-in, housekeeping, and any questions throughout your stay.',
    contacts: [{
      icon: 'phone',
      label: '(+84) 0355 608 623',
      href: 'tel:+840355608623'
    }, {
      icon: 'phone',
      label: '(+84) 0979 80 4343',
      href: 'tel:+840979804343'
    }]
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--accent)',
      padding: 'var(--space-16) var(--gutter)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      maxWidth: 'var(--container-prose)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...heading,
      color: '#fff',
      margin: '0 0 var(--space-4)'
    }
  }, lang === 'vi' ? 'Hãy ghé thăm chúng tôi' : 'Come stay with us'), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.85)',
      margin: '0 0 var(--space-8)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, lang === 'vi' ? 'Nhắn tin cho mình để giữ phòng nhé — mình luôn sẵn sàng đón bạn.' : "Message us to reserve your room — we'd love to host you."), /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg",
    href: "https://beacons.ai/spicehomesaigon"
  }, lang === 'vi' ? 'Liên hệ ngay' : 'Get in Touch'))));
}
window.SH_AboutPage = AboutPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AboutPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
// SpiceHome website — Footer
function Footer({
  lang,
  setRoute
}) {
  const {
    Button,
    Icon
  } = window.SpiceHomeDesignSystem_e751f1;
  const links = SH_NAV_LINKS;
  const col = {
    fontFamily: 'var(--font-label)',
    fontSize: 'var(--text-xs)',
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: 'var(--tracking-wide)',
    color: 'rgba(255,255,255,0.4)',
    margin: '0 0 var(--space-4)'
  };
  const contact = {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    fontSize: 'var(--text-sm)',
    color: 'rgba(255,255,255,0.6)'
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--bg-inverse)',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-14) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      margin: '0 0 var(--space-3)'
    }
  }, "Spice", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "Home")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.5)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-relaxed)',
      margin: 0
    }
  }, lang === 'vi' ? 'Homestay ấm cúng, chân thật ngay giữa lòng Phú Nhuận — Sài Gòn.' : 'A warm, authentic homestay in the heart of Phú Nhuận, Saigon.')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: col
  }, lang === 'vi' ? 'Trang' : 'Pages'), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.key
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setRoute(l.key),
    className: "sh-footlink",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      fontSize: 'var(--text-sm)',
      color: 'rgba(255,255,255,0.6)',
      transition: 'var(--transition-color)',
      fontFamily: 'var(--font-body)'
    }
  }, lang === 'vi' ? l.vi : l.en))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: col
  }, lang === 'vi' ? 'Liên hệ' : 'Contact'), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      ...contact,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 15,
    style: {
      color: 'var(--accent)',
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", null, "Ph\xFA Nhu\u1EADn, H\u1ED3 Ch\xED Minh")), /*#__PURE__*/React.createElement("li", {
    style: contact
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15,
    style: {
      color: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", null, "(+84) 0904 955 479")), /*#__PURE__*/React.createElement("li", {
    style: contact
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15,
    style: {
      color: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", null, "(+84) 0355 608 623 \xB7 (+84) 0979 80 4343")), /*#__PURE__*/React.createElement("li", {
    style: contact
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 15,
    style: {
      color: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("span", null, "spicehomevn@gmail.com")))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: col
  }, lang === 'vi' ? 'Đặt phòng' : 'Book a Stay'), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-sm)',
      color: 'rgba(255,255,255,0.6)',
      margin: '0 0 var(--space-4)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, lang === 'vi' ? 'Đặt phòng nhanh chóng, tiện lợi và an toàn.' : 'Book quickly, conveniently and safely.'), /*#__PURE__*/React.createElement(Button, {
    variant: "accentOutline",
    size: "sm",
    href: "https://beacons.ai/spicehomesaigon"
  }, lang === 'vi' ? 'Đặt Phòng' : 'Book Now'))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-on-inverse-faint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-5) var(--gutter)',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'rgba(255,255,255,0.3)',
      margin: 0
    }
  }, "\xA9 2026 SpiceHome Homestay. All rights reserved."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xs)',
      color: 'rgba(255,255,255,0.3)',
      margin: 0
    }
  }, "Ph\xFA Nhu\u1EADn, H\u1ED3 Ch\xED Minh City, Vietnam"))), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `.sh-footlink:hover { color: var(--accent) !important; }`
    }
  }));
}
window.SH_Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GalleryModal.jsx
try { (() => {
// SpiceHome website — Gallery lightbox (recreation of GalleryModal)
function GalleryModal({
  images,
  roomLabel,
  onClose
}) {
  const {
    Icon
  } = window.SpiceHomeDesignSystem_e751f1;
  const [current, setCurrent] = React.useState(0);
  const prev = React.useCallback(() => setCurrent(i => (i - 1 + images.length) % images.length), [images.length]);
  const next = React.useCallback(() => setCurrent(i => (i + 1) % images.length), [images.length]);
  React.useEffect(() => {
    const h = e => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [onClose, prev, next]);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'var(--overlay-deep)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 'var(--space-4) var(--space-6)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.7)',
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      margin: 0
    }
  }, roomLabel, " \u2014 ", current + 1, " / ", images.length), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'rgba(255,255,255,0.7)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 24
  }))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: 980,
      height: '74vh',
      padding: '0 var(--space-16)',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: images[current],
    alt: `${roomLabel} ${current + 1}`,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  })), images.length > 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      prev();
    },
    className: "sh-galnav",
    style: {
      position: 'absolute',
      left: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(0,0,0,0.4)',
      border: 'none',
      cursor: 'pointer',
      color: '#fff',
      padding: 12,
      transition: 'var(--transition-color)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 24
  })), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      next();
    },
    className: "sh-galnav",
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'rgba(0,0,0,0.4)',
      border: 'none',
      cursor: 'pointer',
      color: '#fff',
      padding: 12,
      transition: 'var(--transition-color)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 24
  }))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    className: "scrollbar-none",
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      gap: 8,
      justifyContent: 'center',
      padding: 'var(--space-3) var(--space-4)',
      overflowX: 'auto'
    }
  }, images.map((src, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setCurrent(i),
    style: {
      flexShrink: 0,
      width: 56,
      height: 40,
      padding: 0,
      border: 'none',
      cursor: 'pointer',
      overflow: 'hidden',
      outline: i === current ? '2px solid var(--accent)' : 'none',
      opacity: i === current ? 1 : 0.4,
      transition: 'opacity var(--duration-fast) ease'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: `Thumb ${i + 1}`,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `.sh-galnav:hover { background: var(--accent) !important; }`
    }
  }));
}
window.SH_GalleryModal = GalleryModal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GalleryModal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/GuidePage.jsx
try { (() => {
// SpiceHome website — Local Guide page
function GuidePage({
  lang
}) {
  const {
    SectionLabel,
    GuideCard,
    Icon
  } = window.SpiceHomeDesignSystem_e751f1;
  const Reveal = window.SH_Reveal;
  const g = window.SH_DATA.guide;
  const cats = [{
    key: 'food',
    icon: 'utensils',
    vi: 'Ăn uống',
    en: 'Where to Eat'
  }, {
    key: 'shopping',
    icon: 'shopping-bag',
    vi: 'Mua sắm',
    en: 'Shopping & Essentials'
  }, {
    key: 'attractions',
    icon: 'landmark',
    vi: 'Tham quan',
    en: 'Attractions'
  }, {
    key: 'transport',
    icon: 'bus',
    vi: 'Di chuyển',
    en: 'Getting Around'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-inverse)',
      padding: 'var(--section-y) var(--gutter)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "light"
  }, lang === 'vi' ? 'Khám phá Sài Gòn' : 'Explore Saigon'), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      color: '#fff',
      fontSize: 'clamp(2rem, 4.5vw, 2.75rem)',
      margin: 'var(--space-3) auto 0',
      maxWidth: 640
    }
  }, lang === 'vi' ? 'Hướng dẫn địa phương' : 'Your local guide to the neighbourhood'), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.65)',
      maxWidth: 540,
      margin: 'var(--space-5) auto 0',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, lang === 'vi' ? 'Những gợi ý thật lòng từ Hải và Thanh — quán ăn ngon, chỗ mua sắm, điểm tham quan và cách đi lại quanh Phú Nhuận.' : "Honest recommendations from Hải and Thanh — great food, shopping, sights and how to get around Phú Nhuận.")), cats.map((cat, ci) => /*#__PURE__*/React.createElement("section", {
    key: cat.key,
    style: {
      background: ci % 2 === 0 ? 'var(--bg-page)' : 'var(--bg-surface)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      marginBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--accent-soft)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: cat.icon,
    size: 18,
    style: {
      color: 'var(--accent)'
    }
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
      margin: 0
    }
  }, lang === 'vi' ? cat.vi : cat.en)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'var(--space-6)'
    }
  }, g[cat.key].map((item, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: i,
    delay: i * 100
  }, /*#__PURE__*/React.createElement(GuideCard, {
    item: item,
    lang: lang
  }))))))));
}
window.SH_GuidePage = GuidePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/GuidePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// SpiceHome website — Hero (homepage)
function Hero({
  lang,
  setRoute
}) {
  const {
    Button,
    Icon
  } = window.SpiceHomeDesignSystem_e751f1;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: '88vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/common/area3.jpg",
    alt: "SpiceHome Homestay",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-scrim)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 10,
      textAlign: 'center',
      padding: '0 var(--gutter)',
      maxWidth: 880,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "hero-text",
    style: {
      fontFamily: 'var(--font-label)',
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)',
      color: 'rgba(196,119,59,0.9)',
      marginBottom: 'var(--space-6)'
    }
  }, lang === 'vi' ? 'Phú Nhuận · Hồ Chí Minh' : 'Phú Nhuận · Ho Chi Minh City'), /*#__PURE__*/React.createElement("h1", {
    className: "hero-text-delay",
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      color: '#fff',
      fontSize: 'clamp(2.25rem, 5vw, 3rem)',
      lineHeight: 1.15,
      marginBottom: 'var(--space-6)'
    }
  }, lang === 'vi' ? /*#__PURE__*/React.createElement(React.Fragment, null, "Kh\xF4ng gian l\u01B0u tr\xFA \u1EA5m c\xFAng", /*#__PURE__*/React.createElement("br", null), "gi\u1EEFa l\xF2ng S\xE0i G\xF2n") : /*#__PURE__*/React.createElement(React.Fragment, null, "Your cozy home", /*#__PURE__*/React.createElement("br", null), "in the heart of Saigon")), /*#__PURE__*/React.createElement("p", {
    className: "hero-text-delay",
    style: {
      color: 'rgba(255,255,255,0.78)',
      fontSize: 'var(--text-lg)',
      maxWidth: 560,
      margin: '0 auto var(--space-10)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, lang === 'vi' ? 'Không chỉ là nơi lưu trú, mà là một góc Sài Gòn ấm áp để bạn tận hưởng và nghỉ ngơi.' : "Cozy, authentic stays — we don't just rent you a room, we share our Saigon with you."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setRoute('rooms')
  }, lang === 'vi' ? 'Xem Phòng' : 'Explore Rooms'), /*#__PURE__*/React.createElement(Button, {
    variant: "ghostOnDark",
    href: "https://www.airbnb.com/users/show/479055797"
  }, lang === 'vi' ? 'Xem trên Airbnb' : 'View on Airbnb'))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 32,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 28,
    style: {
      color: 'rgba(255,255,255,0.5)'
    },
    className: "sh-bounce"
  })), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `@keyframes shBounce{0%,100%{transform:translateY(0)}50%{transform:translateY(8px)}} .sh-bounce{animation:shBounce 1.6s ease-in-out infinite}`
    }
  }));
}
window.SH_Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomePage.jsx
try { (() => {
// SpiceHome website — Home page
function HomePage({
  lang,
  setRoute,
  openGallery
}) {
  const {
    SectionLabel,
    Button,
    RoomCard,
    Icon
  } = window.SpiceHomeDesignSystem_e751f1;
  const Reveal = window.SH_Reveal;
  const featured = window.SH_DATA.rooms.filter(r => r.featured);
  const why = [{
    icon: 'home',
    vi: {
      t: 'Không gian ấm cúng cảm giác như ở nhà',
      d: 'Phòng riêng tư, sạch sẽ — ấm cúng như ngôi nhà của chính bạn.'
    },
    en: {
      t: 'Home-like comfort',
      d: 'Private, clean rooms — as warm and cosy as your own home.'
    }
  }, {
    icon: 'coffee',
    vi: {
      t: 'Vị trí đắc địa',
      d: 'Ngay giữa Phú Nhuận — tiện đi lại, gần ăn uống, gần trung tâm.'
    },
    en: {
      t: 'Prime location',
      d: 'Right in Phú Nhuận — easy commute, great food nearby, close to the centre.'
    }
  }, {
    icon: 'map',
    vi: {
      t: 'Host am hiểu địa phương',
      d: 'Hải và Thanh sẵn sàng gợi ý quán ăn, điểm vui chơi và mọi thứ bạn cần.'
    },
    en: {
      t: 'Local hosts',
      d: 'Hải and Thanh are always ready with food tips and suggestions.'
    }
  }, {
    icon: 'star',
    vi: {
      t: 'Trải nghiệm chân thật',
      d: 'Không phải khách sạn — chúng tôi chia sẻ Sài Gòn với bạn như một người bạn địa phương.'
    },
    en: {
      t: 'Authentic experience',
      d: 'Not a hotel — we share our Saigon with you like a local friend would.'
    }
  }];
  const heading = {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(1.75rem, 4vw, 2.25rem)',
    color: 'var(--text-heading)',
    margin: 0
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(window.SH_Hero, {
    lang: lang,
    setRoute: setRoute
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-surface)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      maxWidth: 'var(--container-prose)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, lang === 'vi' ? 'Về SpiceHome' : 'About SpiceHome'), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...heading,
      margin: 'var(--space-3) 0 var(--space-6)'
    }
  }, lang === 'vi' ? 'Không chỉ là nơi ở — còn là trải nghiệm cuộc sống địa phương giữa lòng Sài Gòn' : 'Not just a place to stay — a local living experience in the heart of Saigon'), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-relaxed)',
      fontSize: 'var(--text-lg)',
      margin: 0
    }
  }, lang === 'vi' ? 'SpiceHome không đơn thuần là nơi lưu trú. Chúng tôi muốn bạn cảm nhận Sài Gòn như một người dân địa phương — từ đường phố nhộn nhịp ban ngày đến con phố yên tĩnh ban đêm.' : 'SpiceHome is more than a place to sleep. We want you to experience Saigon like a local — from the bustling streets by day to the quiet neighbourhood at night.'))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-page)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-14)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, lang === 'vi' ? 'Phòng nổi bật' : 'Featured Rooms'), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...heading,
      marginTop: 'var(--space-3)'
    }
  }, lang === 'vi' ? 'Không gian của bạn' : 'Your space')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'var(--space-6)'
    }
  }, featured.map((room, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: room.number,
    delay: i * 100
  }, /*#__PURE__*/React.createElement(RoomCard, {
    room: room,
    layout: "card",
    lang: lang,
    onOpenGallery: openGallery
  })))), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      textAlign: 'center',
      marginTop: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setRoute('rooms')
  }, lang === 'vi' ? 'Xem tất cả phòng' : 'View All Rooms')))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-surface)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      textAlign: 'center',
      marginBottom: 'var(--space-14)'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, null, lang === 'vi' ? 'Tại sao chọn chúng tôi' : 'Why SpiceHome'), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...heading,
      marginTop: 'var(--space-3)'
    }
  }, lang === 'vi' ? 'Chúng tôi khác biệt ra sao' : 'What makes us different')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 'var(--space-8)'
    }
  }, why.map((item, i) => {
    const c = lang === 'vi' ? item.vi : item.en;
    return /*#__PURE__*/React.createElement(Reveal, {
      key: i,
      delay: i * 100,
      style: {
        textAlign: 'center'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 48,
        height: 48,
        borderRadius: 'var(--radius-pill)',
        background: 'var(--accent-soft)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto var(--space-4)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: item.icon,
      size: 20,
      style: {
        color: 'var(--accent)'
      }
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontSize: 'var(--text-h4)',
        color: 'var(--text-heading)',
        margin: '0 0 var(--space-2)'
      }
    }, c.t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)',
        lineHeight: 'var(--leading-relaxed)',
        margin: 0
      }
    }, c.d));
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--bg-inverse)',
      padding: 'var(--section-y) var(--gutter)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/common/area1.jpg",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      opacity: 0.2
    }
  }), /*#__PURE__*/React.createElement(Reveal, {
    style: {
      position: 'relative',
      zIndex: 1,
      maxWidth: 'var(--container-prose)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "light"
  }, lang === 'vi' ? 'Khám phá xung quanh' : 'Explore the neighbourhood'), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...heading,
      color: '#fff',
      margin: 'var(--space-3) 0 var(--space-6)'
    }
  }, lang === 'vi' ? 'Phú Nhuận — Sài Gòn nguyên bản' : 'Phú Nhuận — authentic Saigon'), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.7)',
      lineHeight: 'var(--leading-relaxed)',
      margin: '0 0 var(--space-10)'
    }
  }, lang === 'vi' ? 'Từ bát phở sáng sớm đến phố đi bộ về khuya — chúng tôi đã chuẩn bị sẵn hướng dẫn địa phương dành riêng cho bạn.' : "From an early morning bowl of phở to a late-night walking street — we've put together a local guide just for you."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: () => setRoute('guide')
  }, lang === 'vi' ? 'Xem Hướng Dẫn Địa Phương' : 'Explore Local Guide'))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--accent)',
      padding: 'var(--space-16) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      maxWidth: 'var(--container-prose)',
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      ...heading,
      color: '#fff',
      margin: '0 0 var(--space-4)'
    }
  }, lang === 'vi' ? 'Sẵn sàng đặt phòng?' : 'Ready to book?'), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.85)',
      margin: '0 0 var(--space-8)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, lang === 'vi' ? 'Đặt phòng qua Airbnb — nhanh chóng, an toàn và được đảm bảo bởi Airbnb Guest Protection.' : 'Book through Airbnb — fast, secure and covered by Airbnb Guest Protection.'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "onDark",
    size: "lg",
    href: "https://www.airbnb.com/users/show/479055797"
  }, lang === 'vi' ? 'Đặt Phòng Ngay' : 'Book on Airbnb')))));
}
window.SH_HomePage = HomePage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Navbar.jsx
try { (() => {
// SpiceHome website — Navbar
const SH_NAV_LINKS = [{
  key: 'home',
  vi: 'Trang Chủ',
  en: 'Home'
}, {
  key: 'rooms',
  vi: 'Phòng',
  en: 'Rooms'
}, {
  key: 'guide',
  vi: 'Khám Phá',
  en: 'Local Guide'
}, {
  key: 'about',
  vi: 'Về Chúng Tôi',
  en: 'About'
}];
function Navbar({
  lang,
  setLang,
  route,
  setRoute
}) {
  const {
    LangToggle,
    Button
  } = window.SpiceHomeDesignSystem_e751f1;
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--bg-inverse)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      height: 'var(--navbar-height)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setRoute('home'),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      fontFamily: 'var(--font-display)',
      color: '#fff',
      fontSize: '1.25rem',
      letterSpacing: '0.03em'
    }
  }, "Spice", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)'
    }
  }, "Home")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, SH_NAV_LINKS.map(l => {
    const active = route === l.key;
    return /*#__PURE__*/React.createElement("button", {
      key: l.key,
      onClick: () => setRoute(l.key),
      className: "sh-navlink",
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        fontFamily: 'var(--font-label)',
        fontSize: 'var(--text-xs)',
        fontWeight: 500,
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-wide)',
        color: active ? 'var(--accent)' : 'rgba(255,255,255,0.8)',
        transition: 'var(--transition-color)'
      }
    }, lang === 'vi' ? l.vi : l.en);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(LangToggle, {
    lang: lang,
    onChange: setLang
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "ghostOnDark",
    size: "sm",
    href: "https://beacons.ai/spicehomesaigon"
  }, lang === 'vi' ? 'Đặt Phòng' : 'Book Now'))), /*#__PURE__*/React.createElement("style", {
    dangerouslySetInnerHTML: {
      __html: `.sh-navlink:hover { color: var(--accent) !important; }`
    }
  }));
}
window.SH_Navbar = Navbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Reveal.jsx
try { (() => {
// SpiceHome website — scroll-reveal wrapper (fade-up via IntersectionObserver)
function Reveal({
  children,
  delay = 0,
  style = {},
  as = 'div'
}) {
  const ref = React.useRef(null);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setSeen(true);
        io.disconnect();
      }
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, {
    ref: ref,
    style: {
      opacity: seen ? 1 : 0,
      transform: seen ? 'translateY(0)' : 'translateY(var(--reveal-offset))',
      transition: `opacity var(--duration-slow) var(--ease-out) ${delay}ms, transform var(--duration-slow) var(--ease-out) ${delay}ms`,
      ...style
    }
  }, children);
}
window.SH_Reveal = Reveal;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Reveal.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/RoomsPage.jsx
try { (() => {
// SpiceHome website — Rooms page
function RoomsPage({
  lang,
  openGallery
}) {
  const {
    SectionLabel,
    RoomCard,
    Button
  } = window.SpiceHomeDesignSystem_e751f1;
  const Reveal = window.SH_Reveal;
  const rooms = window.SH_DATA.rooms;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-inverse)',
      padding: 'calc(var(--section-y)) var(--gutter)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "light"
  }, lang === 'vi' ? 'Phòng nghỉ' : 'Our Rooms'), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      color: '#fff',
      fontSize: 'clamp(2rem, 4.5vw, 2.75rem)',
      margin: 'var(--space-3) auto 0',
      maxWidth: 640
    }
  }, lang === 'vi' ? 'Tìm không gian phù hợp với bạn' : 'Find the space that suits you'), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.65)',
      maxWidth: 520,
      margin: 'var(--space-5) auto 0',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, lang === 'vi' ? 'Mỗi phòng một cá tính riêng — tất cả đều ấm cúng, sạch sẽ và đầy ánh sáng tự nhiên.' : 'Each room has its own character — all cosy, spotless, and full of natural light.')), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-page)',
      padding: 'var(--section-y) var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, rooms.map((room, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: room.number,
    delay: i % 2 * 100
  }, /*#__PURE__*/React.createElement(RoomCard, {
    room: room,
    layout: "list",
    lang: lang,
    onOpenGallery: openGallery
  }))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--bg-surface)',
      padding: 'var(--space-16) var(--gutter)',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      maxWidth: 'var(--container-prose)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.5rem, 3vw, 2rem)',
      margin: '0 0 var(--space-4)'
    }
  }, lang === 'vi' ? 'Cần giúp chọn phòng?' : 'Need help choosing?'), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      margin: '0 0 var(--space-8)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, lang === 'vi' ? 'Nhắn tin cho Hải hoặc Thanh — chúng tôi sẽ tư vấn phòng phù hợp nhất với bạn.' : 'Message Hải or Thanh — we will help you pick the room that fits you best.'), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    href: "https://wa.me/84904955479"
  }, lang === 'vi' ? 'Nhắn tin cho Host' : 'Message the Host'))));
}
window.SH_RoomsPage = RoomsPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/RoomsPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// SpiceHome website data — bilingual content (subset of the real product data).
// Attaches to window so each Babel-scoped screen script can read it.
window.SH_DATA = {
  rooms: [{
    number: '101',
    floor: 1,
    featured: true,
    name: {
      vi: 'Phòng 101',
      en: 'Room 101'
    },
    tagline: {
      vi: 'Không gian rộng rãi với cửa kính nhìn ra ban công',
      en: 'Spacious room with glass doors opening to a balcony'
    },
    description: {
      vi: 'Phòng rộng rãi tầng 1 với giường đôi êm ái, rèm xanh lam sang trọng và cửa kính lùa nhìn ra khu vực ngoài trời. Ánh sáng tự nhiên ngập tràn, thiết kế hiện đại ấm cúng.',
      en: 'Spacious ground-floor room with a queen-size bed, elegant blue curtains, and sliding glass doors leading to an outdoor seating area. Flooded with natural light and finished with warm modern décor.'
    },
    images: ['../../assets/images/rooms/room-101/main.jpg', '../../assets/images/rooms/room-101/img2.jpg', '../../assets/images/rooms/room-101/img3.jpg', '../../assets/images/rooms/room-101/img4.jpg'],
    highlights: [{
      vi: 'Ban công',
      en: 'Balcony access'
    }, {
      vi: 'Cửa kính lùa',
      en: 'Sliding glass doors'
    }, {
      vi: 'Ánh sáng tự nhiên',
      en: 'Natural light'
    }, {
      vi: 'Tầng 1',
      en: 'Ground floor'
    }],
    bed: {
      vi: 'Giường Queen (160x200cm)',
      en: 'Queen bed (160x200cm)'
    },
    capacity: 2,
    amenities: [{
      vi: 'Điều hòa',
      en: 'Air conditioning'
    }, {
      vi: 'WiFi tốc độ cao',
      en: 'High-speed WiFi'
    }, {
      vi: 'Phòng tắm riêng',
      en: 'Private bathroom'
    }, {
      vi: 'Ban công',
      en: 'Balcony / outdoor area'
    }, {
      vi: 'Bàn làm việc',
      en: 'Work desk'
    }],
    airbnbUrl: 'https://www.airbnb.com.vn/h/spicehome101'
  }, {
    number: '121',
    floor: 1,
    featured: true,
    name: {
      vi: 'Phòng 121',
      en: 'Room 121'
    },
    tagline: {
      vi: 'Điểm nhấn xanh tươi mát, thiết kế compact hiện đại',
      en: 'Fresh green accent, modern compact design'
    },
    description: {
      vi: 'Phòng gọn gàng với điểm nhấn tường xanh lá độc đáo và giường platform phong cách. Không gian nhỏ gọn nhưng đầy đủ tiện nghi — lý tưởng cho khách du lịch một mình hoặc cặp đôi.',
      en: 'A compact room with a distinctive green accent wall and a stylish platform bed. Small but fully equipped — ideal for solo travellers or couples looking for value and comfort.'
    },
    images: ['../../assets/images/rooms/room-121/main.jpg', '../../assets/images/rooms/room-121/img2.jpg'],
    highlights: [{
      vi: 'Phong cách hiện đại',
      en: 'Modern style'
    }, {
      vi: 'Compact',
      en: 'Compact'
    }, {
      vi: 'Điểm nhấn xanh lá',
      en: 'Green accent wall'
    }, {
      vi: 'Tầng 1',
      en: 'Ground floor'
    }],
    bed: {
      vi: 'Giường Queen (160x200cm)',
      en: 'Queen bed (160x200cm)'
    },
    capacity: 2,
    amenities: [{
      vi: 'Điều hòa',
      en: 'Air conditioning'
    }, {
      vi: 'WiFi tốc độ cao',
      en: 'High-speed WiFi'
    }, {
      vi: 'Phòng tắm riêng',
      en: 'Private bathroom'
    }, {
      vi: 'Tủ quần áo',
      en: 'Wardrobe'
    }],
    airbnbUrl: 'https://www.airbnb.com.vn/h/spicehome121'
  }, {
    number: '203',
    floor: 2,
    featured: true,
    name: {
      vi: 'Phòng 203',
      en: 'Room 203'
    },
    tagline: {
      vi: 'Ban công riêng, cửa kính rộng — ánh sáng tự nhiên ngập tràn',
      en: 'Private balcony, floor-to-ceiling windows — bathed in natural light'
    },
    description: {
      vi: 'Phòng đón nhiều ánh sáng tự nhiên cùng ban công riêng được bố trí bàn ghế để thư giãn. Tông màu beige ấm áp mang lại cảm giác tinh tế, thoải mái suốt thời gian lưu trú.',
      en: 'Filled with natural light and featuring a private balcony with seating for relaxing. Warm beige tones create a refined, cosy, and comfortable stay.'
    },
    images: ['../../assets/images/rooms/room-203/main.jpg', '../../assets/images/rooms/room-203/img2.jpg'],
    highlights: [{
      vi: 'Ban công riêng',
      en: 'Private balcony'
    }, {
      vi: 'Cửa kính sàn trần',
      en: 'Floor-to-ceiling windows'
    }, {
      vi: 'View thành phố',
      en: 'City view'
    }, {
      vi: 'Tầng 2',
      en: '2nd floor'
    }],
    bed: {
      vi: 'Giường Queen (160x200cm)',
      en: 'Queen bed (160x200cm)'
    },
    capacity: 2,
    amenities: [{
      vi: 'Điều hòa',
      en: 'Air conditioning'
    }, {
      vi: 'WiFi tốc độ cao',
      en: 'High-speed WiFi'
    }, {
      vi: 'Phòng tắm riêng',
      en: 'Private bathroom'
    }, {
      vi: 'Ban công riêng',
      en: 'Private balcony with seating'
    }, {
      vi: 'Bàn làm việc',
      en: 'Work desk'
    }],
    airbnbUrl: 'https://www.airbnb.com.vn/h/spicehome203'
  }, {
    number: '103',
    floor: 1,
    featured: false,
    name: {
      vi: 'Phòng 103',
      en: 'Room 103'
    },
    tagline: {
      vi: 'Không gian yên tĩnh, ấm cúng cho kỳ nghỉ trọn vẹn',
      en: 'Quiet, cosy space for a complete rest'
    },
    description: {
      vi: 'Phòng tầng 1 yên tĩnh với không gian ấm cúng. Thiết kế đơn giản tinh tế với gỗ tự nhiên và ánh sáng nhẹ nhàng.',
      en: 'A quiet ground-floor room with a cosy atmosphere. Simple, refined design using natural wood tones and soft lighting.'
    },
    images: ['../../assets/images/rooms/room-103/main.jpg'],
    highlights: [{
      vi: 'Giường King',
      en: 'King bed'
    }, {
      vi: 'Không gian rộng',
      en: 'Spacious'
    }, {
      vi: 'Tầng 1',
      en: 'Ground floor'
    }],
    bed: {
      vi: 'Giường King (180x200cm)',
      en: 'King bed (180x200cm)'
    },
    capacity: 2,
    amenities: [{
      vi: 'Điều hòa',
      en: 'Air conditioning'
    }, {
      vi: 'WiFi tốc độ cao',
      en: 'High-speed WiFi'
    }, {
      vi: 'Phòng tắm riêng',
      en: 'Private bathroom'
    }, {
      vi: 'Bàn làm việc',
      en: 'Work desk'
    }],
    airbnbUrl: 'https://www.airbnb.com.vn/h/spicehome103'
  }, {
    number: '201',
    floor: 2,
    featured: false,
    name: {
      vi: 'Phòng 201',
      en: 'Room 201'
    },
    tagline: {
      vi: 'Không gian yên tĩnh, riêng tư',
      en: 'Quiet and private space'
    },
    description: {
      vi: 'Nội thất hiện đại, tông màu ấm áp tạo cảm giác thư thái. Vị trí thuận tiện gần các tiện ích chung của tòa nhà.',
      en: 'Modern furnishings in warm tones create a relaxing ambiance. Conveniently located near shared building amenities.'
    },
    images: ['../../assets/images/rooms/room-201/main.jpg'],
    highlights: [{
      vi: 'View đường phố',
      en: 'Street view'
    }, {
      vi: 'Thoáng đãng',
      en: 'Airy'
    }, {
      vi: 'Tầng 2',
      en: '2nd floor'
    }],
    bed: {
      vi: 'Giường đôi (140x200cm)',
      en: 'Double bed (140x200cm)'
    },
    capacity: 2,
    amenities: [{
      vi: 'Điều hòa',
      en: 'Air conditioning'
    }, {
      vi: 'WiFi tốc độ cao',
      en: 'High-speed WiFi'
    }, {
      vi: 'Phòng tắm riêng',
      en: 'Private bathroom'
    }, {
      vi: 'Bàn làm việc',
      en: 'Work desk'
    }],
    airbnbUrl: 'https://www.airbnb.com.vn/h/spicehome201'
  }, {
    number: '222',
    floor: 2,
    featured: false,
    name: {
      vi: 'Phòng 222',
      en: 'Room 222'
    },
    tagline: {
      vi: 'Tiện nghi cao cấp, không gian thoáng đãng tầng 2',
      en: 'Premium amenities in an airy second-floor setting'
    },
    description: {
      vi: 'Phòng Deluxe tầng 2 với nội thất cao cấp và không gian thoáng đãng. Thiết kế hiện đại, tối giản nhưng vẫn ấm áp và tiện nghi.',
      en: 'A second-floor Deluxe room with premium furnishings and open space. Modern, minimalist design that remains warm and comfortable.'
    },
    images: ['../../assets/images/rooms/room-222/main.jpg'],
    highlights: [{
      vi: 'Cao cấp',
      en: 'Premium'
    }, {
      vi: 'Không gian mở',
      en: 'Open space'
    }, {
      vi: 'Tầng 2',
      en: '2nd floor'
    }],
    bed: {
      vi: 'Giường Queen (160x200cm)',
      en: 'Queen bed (160x200cm)'
    },
    capacity: 2,
    amenities: [{
      vi: 'Điều hòa',
      en: 'Air conditioning'
    }, {
      vi: 'WiFi tốc độ cao',
      en: 'High-speed WiFi'
    }, {
      vi: 'Phòng tắm riêng',
      en: 'Private bathroom'
    }, {
      vi: 'Máy sấy tóc',
      en: 'Hair dryer'
    }],
    airbnbUrl: 'https://www.airbnb.com.vn/h/spicehome222'
  }],
  guide: {
    food: [{
      name: {
        vi: 'Phở Tân Hiệp',
        en: 'Phở Tân Hiệp'
      },
      description: {
        vi: 'Quán phở bò thảo mộc truyền thống — nước dùng ninh lâu. Cách nhà vài bước chân.',
        en: 'Traditional herbal beef noodle soup — slow-simmered broth. Just a short walk from the homestay.'
      },
      address: '122 Lê Văn Sỹ, Phú Nhuận',
      hours: '6:00 – 23:00',
      mapsUrl: '#'
    }, {
      name: {
        vi: 'Bún Bò Trang',
        en: 'Bún Bò Trang'
      },
      description: {
        vi: 'Bún bò Huế cay nồng, nước dùng sánh ngọt — buổi sáng tuyệt vời.',
        en: 'Spicy Huế-style beef noodle soup with a rich broth — a great way to start the morning.'
      },
      address: '84/5 Trần Hữu Trang, Phú Nhuận',
      hours: '6:00 – 12:00',
      mapsUrl: '#'
    }, {
      name: {
        vi: "Bún Thịt Lợn Bà Nội",
        en: "Grandma's Flying Pork Noodles"
      },
      description: {
        vi: 'Quán bún thịt heo nổi tiếng — thịt mềm tan, nước dùng thanh ngọt.',
        en: 'Famous neighbourhood pork noodle shop — tender meat, clear savoury broth.'
      },
      address: '76A Trần Hữu Trang',
      hours: '6:00 – 18:00',
      tip: {
        vi: 'Nên đến sớm vì hết rất nhanh!',
        en: 'Come early — it sells out fast!'
      },
      mapsUrl: '#'
    }],
    shopping: [{
      name: {
        vi: 'Bách Hóa Xanh',
        en: 'Bách Hóa Xanh Supermarket'
      },
      description: {
        vi: 'Siêu thị tiện lợi — thực phẩm tươi, đồ thiết yếu, giá niêm yết rõ ràng.',
        en: 'Convenient grocery — fresh food, daily essentials, clearly labelled prices.'
      },
      address: '123 Trần Hữu Trang, Phú Nhuận',
      hours: '6:00 – 21:00',
      tip: {
        vi: 'Giá niêm yết rõ ràng, không cần mặc cả.',
        en: 'Fixed prices, no bargaining needed.'
      }
    }, {
      name: {
        vi: 'Circle K (24/7)',
        en: 'Circle K (Open 24/7)'
      },
      description: {
        vi: 'Cửa hàng tiện lợi mở cửa 24/7 — lý tưởng cho lúc cần mua đồ khuya.',
        en: 'Convenience store open around the clock — perfect for late-night essentials.'
      },
      address: '135 Lê Văn Sỹ, Phú Nhuận',
      hours: 'Open 24/7'
    }, {
      name: {
        vi: 'Chợ Trần Hữu Trang',
        en: 'Trần Hữu Trang Local Market'
      },
      description: {
        vi: 'Chợ truyền thống — rau củ tươi và đặc sản vùng.',
        en: 'Traditional local market — fresh produce and regional specialties.'
      },
      address: '84C Trần Hữu Trang, Phú Nhuận',
      hours: '6:00 – 17:00',
      tip: {
        vi: 'Nên đi cùng người nói tiếng Việt để tránh bị tính giá cao.',
        en: 'Best visited with a Vietnamese speaker to avoid tourist pricing.'
      }
    }],
    attractions: [{
      name: {
        vi: 'Phố đi bộ Nguyễn Huệ',
        en: 'Nguyễn Huệ Walking Street'
      },
      description: {
        vi: 'Phố đi bộ biểu tượng — nhìn thấy Nhà hát Thành phố, đặt xe bus 2 tầng từ đây.',
        en: "A signature landmark — view the Opera House and board the sightseeing bus from here."
      },
      tip: {
        vi: 'Rực rỡ nhất vào buổi tối cuối tuần.',
        en: 'Most vibrant on weekend evenings.'
      }
    }, {
      name: {
        vi: 'Dinh Độc Lập',
        en: 'Independence Palace'
      },
      description: {
        vi: 'Di tích lịch sử quan trọng — bảo tàng mở cửa tham quan, kiến trúc thập niên 60.',
        en: 'Significant historical landmark — a public museum with distinctive 1960s architecture.'
      }
    }, {
      name: {
        vi: 'Địa đạo Củ Chi',
        en: 'Củ Chi Tunnels'
      },
      description: {
        vi: 'Hệ thống địa đạo huyền thoại — cách trung tâm khoảng 1.5 giờ xe.',
        en: 'Legendary underground tunnel network — about 1.5 hours from the city centre.'
      },
      tip: {
        vi: 'Đặt tour trên KLook để tránh bị lừa đảo.',
        en: 'Book through KLook to avoid scams.'
      }
    }],
    transport: [{
      name: {
        vi: 'Ứng dụng Grab',
        en: 'Grab App'
      },
      description: {
        vi: 'Ứng dụng đặt xe phổ biến nhất Việt Nam — giá rẻ, tiện lợi, giao đồ ăn tới phòng.',
        en: 'The most popular ride-hailing app in Vietnam — affordable, reliable, also delivers food.'
      },
      tip: {
        vi: 'Tải Grab trước khi đến — thanh toán thẻ hoặc tiền mặt.',
        en: 'Download Grab before you arrive — pay by card or cash.'
      }
    }, {
      name: {
        vi: 'Xe buýt công cộng',
        en: 'Public Bus'
      },
      description: {
        vi: 'Nhiều tuyến buýt gần nhà đến trung tâm và sân bay.',
        en: 'Multiple bus routes nearby to the city centre and airport.'
      },
      tip: {
        vi: 'Nhà ga xe lửa cách homestay chỉ 5 phút đi bộ.',
        en: 'The railway station is just 5 minutes on foot.'
      }
    }]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.GuideCard = __ds_scope.GuideCard;

__ds_ns.HostCard = __ds_scope.HostCard;

__ds_ns.RoomCard = __ds_scope.RoomCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.LangToggle = __ds_scope.LangToggle;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.Tag = __ds_scope.Tag;

})();
