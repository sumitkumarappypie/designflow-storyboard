var kc = Object.defineProperty;
var xc = (r, t, e) => t in r ? kc(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Mr = (r, t, e) => xc(r, typeof t != "symbol" ? t + "" : t, e);
/*!
    DivKit v32.39.0
    https://github.com/divkit/divkit
    @licence Apache-2.0
*/
function h() {
}
const Ec = (r) => r;
function Ac(r) {
  return r();
}
function Cc() {
  return /* @__PURE__ */ Object.create(null);
}
function Ns(r) {
  r.forEach(Ac);
}
function Vc(r) {
  return typeof r == "function";
}
function Fc(r, t) {
  return r != r ? t == t : r !== t || r && typeof r == "object" || typeof r == "function";
}
function p(r, ...t) {
  if (r == null) {
    for (const n of t)
      n(void 0);
    return h;
  }
  const e = r.subscribe(...t);
  return e.unsubscribe ? () => e.unsubscribe() : e;
}
function bs(r) {
  let t;
  return p(r, (e) => t = e)(), t;
}
function Sc(r, t, { bubbles: e = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(r, { detail: t, bubbles: e, cancelable: n });
}
let Xi;
function Zi(r) {
  Xi = r;
}
function Go() {
  if (!Xi) throw new Error("Function called outside component initialization");
  return Xi;
}
function Pr(r) {
  Go().$$.on_destroy.push(r);
}
function Dc() {
  const r = Go();
  return (t, e, { cancelable: n = !1 } = {}) => {
    const i = r.$$.callbacks[t];
    if (i) {
      const o = Sc(
        /** @type {string} */
        t,
        e,
        { cancelable: n }
      );
      return i.slice().forEach((a) => {
        a.call(r, o);
      }), !o.defaultPrevented;
    }
    return !0;
  };
}
function fi(r, t) {
  return Go().$$.context.set(r, t), t;
}
function sr(r) {
  return Go().$$.context.get(r);
}
const Wi = [], pa = [];
let jo = [];
const _a = [], Il = /* @__PURE__ */ Promise.resolve();
let vs = !1;
function Ic() {
  vs || (vs = !0, Il.then(Mc));
}
function Fn() {
  return Ic(), Il;
}
function Tc(r) {
  jo.push(r);
}
const os = /* @__PURE__ */ new Set();
let wi = 0;
function Mc() {
  if (wi !== 0)
    return;
  const r = Xi;
  do {
    try {
      for (; wi < Wi.length; ) {
        const t = Wi[wi];
        wi++, Zi(t), Pc(t.$$);
      }
    } catch (t) {
      throw Wi.length = 0, wi = 0, t;
    }
    for (Zi(null), Wi.length = 0, wi = 0; pa.length; ) pa.pop()();
    for (let t = 0; t < jo.length; t += 1) {
      const e = jo[t];
      os.has(e) || (os.add(e), e());
    }
    jo.length = 0;
  } while (Wi.length);
  for (; _a.length; )
    _a.pop()();
  vs = !1, os.clear(), Zi(r);
}
function Pc(r) {
  if (r.fragment !== null) {
    r.update(), Ns(r.before_update);
    const t = r.dirty;
    r.dirty = [-1], r.fragment && r.fragment.p(r.ctx, t), r.after_update.forEach(Tc);
  }
}
function zc(r) {
  return (r == null ? void 0 : r.length) !== void 0 ? r : Array.from(r);
}
const Oc = (
  /** @type {const} */
  [
    "allowfullscreen",
    "allowpaymentrequest",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "hidden",
    "inert",
    "ismap",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected"
  ]
), Nc = /* @__PURE__ */ new Set([...Oc]), Bc = /[&"<]/g, Rc = /[&<]/g;
function gt(r, t = !1) {
  const e = String(r), n = t ? Bc : Rc;
  n.lastIndex = 0;
  let i = "", o = 0;
  for (; n.test(e); ) {
    const a = n.lastIndex - 1, c = e[a];
    i += e.substring(o, a) + (c === "&" ? "&amp;" : c === '"' ? "&quot;" : "&lt;"), o = a + 1;
  }
  return i + e.substring(o);
}
const Lc = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function Zn(r) {
  return Lc.test(r) || r.toLowerCase() === "!doctype";
}
const Hc = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
function Di(r, t) {
  const e = Object.assign({}, ...r);
  if (t) {
    const i = t.classes, o = t.styles;
    i && (e.class == null ? e.class = i : e.class += " " + i), o && (e.style == null ? e.style = ys(o) : e.style = ys(
      Wc(e.style, o)
    ));
  }
  let n = "";
  return Object.keys(e).forEach((i) => {
    if (Hc.test(i)) return;
    const o = e[i];
    o === !0 ? n += " " + i : Nc.has(i.toLowerCase()) ? o && (n += " " + i) : o != null && (n += ` ${i}="${o}"`);
  }), n;
}
function Wc(r, t) {
  const e = {};
  for (const n of r.split(";")) {
    const i = n.indexOf(":"), o = n.slice(0, i).trim(), a = n.slice(i + 1).trim();
    o && (e[o] = a);
  }
  for (const n in t) {
    const i = t[n];
    i ? e[n] = i : delete e[n];
  }
  return e;
}
function Zr(r) {
  return typeof r == "string" || r && typeof r == "object" ? gt(r, !0) : r;
}
function Ii(r) {
  const t = {};
  for (const e in r)
    t[e] = Zr(r[e]);
  return t;
}
function Vr(r, t) {
  r = zc(r);
  let e = "";
  for (let n = 0; n < r.length; n += 1)
    e += t(r[n], n);
  return e;
}
const Uc = {
  $$render: () => ""
};
function Wt(r, t) {
  if (!r || !r.$$render)
    throw t === "svelte:component" && (t += " this={...}"), new Error(
      `<${t}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${t}>.`
    );
  return r;
}
let ss;
function gr(r) {
  function t(e, n, i, o, a) {
    const c = Xi, g = {
      on_destroy: ss,
      context: new Map(a || (c ? c.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: Cc()
    };
    Zi({ $$: g });
    const d = r(e, n, i, o);
    return Zi(c), d;
  }
  return {
    render: (e = {}, { $$slots: n = {}, context: i = /* @__PURE__ */ new Map() } = {}) => {
      ss = [];
      const o = { title: "", head: "", css: /* @__PURE__ */ new Set() }, a = t(o, e, {}, n, i);
      return Ns(ss), {
        html: a,
        css: {
          code: Array.from(o.css).map((c) => c.code).join(`
`),
          map: null
          // TODO
        },
        head: o.title + o.head
      };
    },
    $$render: t
  };
}
function m(r, t, e) {
  if (t == null || e) return "";
  const n = `="${gt(t, !0)}"`;
  return ` ${r}${n}`;
}
function ys(r) {
  return Object.keys(r).filter((t) => r[t] != null && r[t] !== "").map((t) => `${t}: ${Zr(r[t])};`).join(" ");
}
function Ar(r) {
  const t = ys(r);
  return t ? ` style="${t}"` : "";
}
const $i = [];
function Gc(r, t) {
  return {
    subscribe: Mn(r, t).subscribe
  };
}
function Mn(r, t = h) {
  let e;
  const n = /* @__PURE__ */ new Set();
  function i(c) {
    if (Fc(r, c) && (r = c, e)) {
      const g = !$i.length;
      for (const d of n)
        d[1](), $i.push(d, r);
      if (g) {
        for (let d = 0; d < $i.length; d += 2)
          $i[d][0]($i[d + 1]);
        $i.length = 0;
      }
    }
  }
  function o(c) {
    i(c(r));
  }
  function a(c, g = h) {
    const d = [c, g];
    return n.add(d), n.size === 1 && (e = t(i, o) || h), c(r), () => {
      n.delete(d), n.size === 0 && e && (e(), e = null);
    };
  }
  return { set: i, update: o, subscribe: a };
}
function zi(r, t, e) {
  const n = !Array.isArray(r), i = n ? [r] : r;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const o = t.length < 2;
  return Gc(e, (a, c) => {
    let g = !1;
    const d = [];
    let _ = 0, k = h;
    const I = () => {
      if (_)
        return;
      k();
      const D = t(n ? d[0] : d, a, c);
      o ? a(D) : k = Vc(D) ? D : h;
    }, T = i.map(
      (D, B) => p(
        D,
        (V) => {
          d[B] = V, _ &= ~(1 << B), g && I();
        },
        () => {
          _ |= 1 << B;
        }
      )
    );
    return g = !0, I(), function() {
      Ns(T), k(), g = !1;
    };
  });
}
const Jc = "appkit-root_platform_desktop", qc = "appkit-root__clickable", Yc = "appkit-root", Kc = "appkit-root__selectable", Zc = "appkit-root__unselectable", Jr = {
  root_platform_desktop: Jc,
  root__clickable: qc,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  "root__any-actions": "appkit-root__any-actions",
  root: Yc,
  root__selectable: Kc,
  root__unselectable: Zc,
  "root__only-desktop": "appkit-root__only-desktop",
  "root_restrict-scroll": "appkit-root_restrict-scroll",
  "root_disabled-context-menu": "appkit-root_disabled-context-menu"
}, $r = Symbol("root");
function C(r, t = {}) {
  const e = r;
  return e.level = t.level || "error", t.additional && (e.additional = t.additional), e;
}
const Xc = "appkit-outer", Qc = "appkit-outer_width_content", eu = "appkit-outer_height_content", tu = "appkit-root__clickable", ru = "appkit-outer__border", nu = "appkit-outer_visibility_invisible", iu = "appkit-outer_visibility_gone", ws = {
  outer: Xc,
  outer_width_content: Qc,
  outer_height_content: eu,
  root__clickable: tu,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  "outer_hide-on-transition-in": "appkit-outer_hide-on-transition-in",
  "outer_halign-self_start": "appkit-outer_halign-self_start",
  "outer_halign-self_center": "appkit-outer_halign-self_center",
  "outer_halign-self_end": "appkit-outer_halign-self_end",
  "outer_halign-self_stretch": "appkit-outer_halign-self_stretch",
  "outer_valign-self_start": "appkit-outer_valign-self_start",
  "outer_valign-self_center": "appkit-outer_valign-self_center",
  "outer_valign-self_end": "appkit-outer_valign-self_end",
  "outer_valign-self_stretch": "appkit-outer_valign-self_stretch",
  "outer_parent-flex_vertical": "appkit-outer_parent-flex_vertical",
  "outer_parent-flex_horizontal": "appkit-outer_parent-flex_horizontal",
  "outer_valign-self_baseline": "appkit-outer_valign-self_baseline",
  "outer_width-constrained": "appkit-outer_width-constrained",
  "outer_parent-grid": "appkit-outer_parent-grid",
  "outer_height-constrained": "appkit-outer_height-constrained",
  "outer_parent-overlap": "appkit-outer_parent-overlap",
  "outer_scroll-snap_start": "appkit-outer_scroll-snap_start",
  "outer_scroll-snap_center": "appkit-outer_scroll-snap_center",
  "outer_scroll-snap_end": "appkit-outer_scroll-snap_end",
  outer__border: ru,
  outer_visibility_invisible: nu,
  outer_visibility_gone: iu,
  "outer_has-action-animation": "appkit-outer_has-action-animation",
  "outer_has-custom-focus": "appkit-outer_has-custom-focus"
};
function Cr(r) {
  if (!r)
    return;
  let t = "";
  for (const e in r)
    if (r.hasOwnProperty(e)) {
      if (!r[e] && r[e] !== 0)
        continue;
      t && (t += ";"), t += e + ":" + String(r[e]);
    }
  return t || void 0;
}
function ee(r) {
  if (typeof r != "number" && typeof r != "string" || !r)
    return "0";
  const t = Number(r);
  return Number.isNaN(t) ? "0" : Math.ceil(t * 1e3) / 1e4 + "em";
}
function Wr(r) {
  let t = ee(r);
  return t === "0" && (t += "em"), t;
}
function Tl(r, t) {
  for (; r.length < t; )
    r = "0" + r;
  return r;
}
function Ot(r, t = 1, e = "transparent") {
  if (r = (typeof r == "string" && r || "").toLowerCase(), r.charAt(0) !== "#")
    return e;
  const n = xn(r);
  return n ? (n.a *= t, Bs(n)) : e;
}
function ou(r, t, e = "transparent") {
  if (r = (typeof r == "string" && r || "").toLowerCase(), r.charAt(0) !== "#")
    return e;
  const n = xn(r);
  return n ? (n.a = t, Bs(n)) : e;
}
function Bs(r) {
  return r.a === 255 ? `#${[r.r, r.g, r.b].map((t) => Tl(Math.round(t).toString(16), 2)).join("")}` : `rgba(${r.r},${r.g},${r.b},${(r.a / 255).toFixed(2)})`;
}
function xn(r) {
  const t = (
    // #AARRGGBB
    r.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i) || // #ARGB
    r.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])$/i) || // #RRGGBB
    r.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i) || // #RGB
    r.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i)
  );
  if (t) {
    if (t.length === 5) {
      const [d, _, k, I, T] = t, D = k.length === 2 ? k : k + k, B = I.length === 2 ? I : I + I, V = T.length === 2 ? T : T + T, A = _.length === 2 ? _ : _ + _;
      return {
        a: parseInt(A, 16),
        r: parseInt(D, 16),
        g: parseInt(B, 16),
        b: parseInt(V, 16)
      };
    }
    const [e, n, i, o] = t, a = n.length === 2 ? n : n + n, c = i.length === 2 ? i : i + i, g = o.length === 2 ? o : o + o;
    return {
      a: 255,
      r: parseInt(a, 16),
      g: parseInt(c, 16),
      b: parseInt(g, 16)
    };
  }
  return null;
}
function $s(r) {
  let t = String(r);
  return t.indexOf("&") > -1 && (t = t.replace(/&/g, "&amp;")), t.indexOf("<") > -1 && (t = t.replace(/</g, "&lt;")), t.indexOf(">") > -1 && (t = t.replace(/>/g, "&gt;")), t.indexOf('"') > -1 && (t = t.replace(/"/g, "&quot;")), t;
}
const zn = Boolean;
function Jo(r, t) {
  if (r.length === 1 && r[0].type === "solid")
    return au({
      bg: r[0]
    });
  const e = r.map((n) => {
    if (n.type === "solid")
      return su({
        bg: n
      });
    if (n.type === "gradient")
      return lu({
        bg: n
      });
    if (n.type === "image")
      return du({
        bg: n,
        direction: t
      });
    if (n.type === "radial_gradient")
      return uu({
        bg: n
      });
  }).filter(zn).reverse().reduce(function(n, i) {
    return n.image.push(i.image), n.size.push(i.size || "auto"), n.position.push(i.pos || "50% 50%"), n;
  }, {
    image: [],
    size: [],
    position: []
  });
  return {
    image: e.image.join(","),
    size: e.size.join(","),
    position: e.position.join(",")
  };
}
function su(r) {
  const t = Ot(r.bg.color || "transparent");
  return {
    size: void 0,
    pos: void 0,
    image: `linear-gradient(to bottom,${t},${t})`
  };
}
function au(r) {
  return {
    color: Ot(r.bg.color || "transparent"),
    size: "auto",
    position: "50% 50%"
  };
}
function Ml(r) {
  return r.every((n) => n.color && typeof n.position == "number" && n.position >= 0 && n.position <= 1) ? r.sort((n, i) => Math.abs(n.position - i.position) < 1e-6 ? 0 : n.position - i.position).map((n) => `${Ot(n.color)} ${(n.position * 100).toFixed(2)}%`).join(",") : void 0;
}
function lu(r) {
  var n, i, o, a;
  if (!Array.isArray((n = r.bg) == null ? void 0 : n.colors) && !Array.isArray((i = r.bg) == null ? void 0 : i.color_map))
    return;
  const t = (o = r.bg.colors) == null ? void 0 : o.filter(zn);
  if (!(t != null && t.length) && !((a = r.bg) != null && a.color_map))
    return;
  let e;
  if (r.bg.color_map) {
    const c = Ml(r.bg.color_map);
    if (!c)
      return;
    e = "linear-gradient(" + (90 - Number(r.bg.angle || 0) + "deg") + "," + c + ")";
  } else {
    if (!t)
      return;
    e = "linear-gradient(" + (90 - Number(r.bg.angle || 0) + "deg") + "," + t.map((c) => Ot(c)).join(",") + ")";
  }
  return {
    size: void 0,
    pos: void 0,
    image: e
  };
}
const cu = {
  nearest_corner: "closest-corner",
  farthest_corner: "farthest-corner",
  nearest_side: "closest-side",
  farthest_side: "farthest-side"
};
function ha(r) {
  if (r && typeof r == "object" && "type" in r && r.value !== void 0) {
    if (r.type === "fixed")
      return Wr(r.value);
    if (r.type === "relative")
      return `${Number(r.value) * 100}%`;
  }
  return "50%";
}
function uu(r) {
  var c, g, d, _;
  if (!Array.isArray((c = r.bg) == null ? void 0 : c.colors) && !Array.isArray((g = r.bg) == null ? void 0 : g.color_map))
    return;
  const t = (d = r.bg.colors) == null ? void 0 : d.filter(zn);
  if (!(t != null && t.length) && !((_ = r.bg) != null && _.color_map))
    return;
  let e;
  if (r.bg.color_map ? e = Ml(r.bg.color_map) : t && (e = t.map((k) => Ot(k)).join(",")), !e)
    return;
  const n = r.bg.radius;
  let i;
  n && typeof n == "object" && "type" in n && n.value !== void 0 && (n.type === "fixed" ? i = Wr(n.value) : n.type === "relative" && (i = cu[n.value]));
  const o = ha(r.bg.center_x), a = ha(r.bg.center_y);
  return {
    size: void 0,
    pos: void 0,
    image: `radial-gradient(circle ${i || "farthest-corner"} at ${o} ${a},` + e + ")"
  };
}
function du(r) {
  var e;
  const t = (e = r.bg) == null ? void 0 : e.image_url;
  if (t)
    return {
      size: Pl(r.bg.scale),
      pos: zl(r.bg, r.direction),
      image: 'url("' + $s(t) + '")'
    };
}
function Pl(r) {
  return r === "fit" ? "contain" : r === "stretch" ? "fill" : r === "no_scale" ? "none" : "cover";
}
function fu(r) {
  return r === "none" ? "auto" : r === "fill" ? "100% 100%" : r;
}
function zl(r, t) {
  let e, n;
  return r.content_alignment_horizontal === "left" || t === "ltr" && r.content_alignment_horizontal === "start" || t === "rtl" && r.content_alignment_horizontal === "end" ? e = "0%" : r.content_alignment_horizontal === "right" || t === "ltr" && r.content_alignment_horizontal === "end" || t === "rtl" && r.content_alignment_horizontal === "start" ? e = "100%" : e = "50%", r.content_alignment_vertical === "top" ? n = "0%" : r.content_alignment_vertical === "bottom" ? n = "100%" : n = "50%", e + " " + n;
}
function Sr(r, t) {
  const e = Number(r);
  return Number.isNaN(e) || e < 0 ? t : e;
}
function ma(r, t, e) {
  return typeof t == "number" && (r && t > 0 && t <= 100 || !r && t >= 0 && t < 100) ? t : e;
}
function gu(r) {
  return r.is_enabled !== 0 && r.is_enabled !== !1 && r.index !== void 0;
}
function pu(r, {
  visibilityActions: t,
  disappearActions: e,
  rootCtx: n,
  componentContext: i
}) {
  const o = [];
  t && t.forEach((T) => {
    o.push({
      type: "visibility",
      index: o.length,
      action: T,
      visible: !1,
      count: 0,
      finished: !1
    });
  }), e && e.forEach((T) => {
    o.push({
      type: "disappear",
      index: o.length,
      action: T,
      // false, so disappear only works after the element becomes visible
      visible: !1,
      count: 0,
      finished: !1
    });
  });
  const a = o.map((T, D) => {
    const B = T.type === "visibility";
    return i.getDerivedFromVars({
      index: D,
      visibility_percentage: T.action.visibility_percentage,
      visibility_duration: B ? T.action.visibility_duration : T.action.disappear_duration,
      log_limit: T.action.log_limit,
      is_enabled: T.action.is_enabled
    }, void 0, !0);
  });
  let c;
  const g = () => {
    c && c.disconnect(), o.forEach((T) => {
      T.timer && clearTimeout(T.timer);
    });
  }, d = zi(a, (T) => T);
  let _;
  const k = (T) => {
    const D = T.type === "visibility";
    i.execAnyActions([T.action], {
      logType: D ? "visible" : "disappear",
      node: r,
      processUrls: !1
    });
  }, I = d.subscribe((T) => {
    _ = T.filter(gu);
    const D = {};
    _.forEach((A) => {
      D[A.index] = A;
    }), g();
    const B = [...new Set(_.map((A) => {
      const $e = o[A.index].type === "visibility";
      return ma(
        $e,
        A.visibility_percentage,
        $e ? 50 : 0
      ) / 100;
    }))];
    if (!B.length)
      return;
    const V = (A) => {
      A.forEach(($e) => {
        _.forEach((Y) => {
          const ue = o[Y.index], Z = ue.type === "visibility", ae = ma(
            Z,
            Y.visibility_percentage,
            Z ? 50 : 0
          );
          let ke;
          ae === 0 ? ke = $e.intersectionRatio >= 1e-12 : ke = $e.intersectionRatio >= ae / 100, (Z ? !ue.visible && ke : ue.visible && !ke) ? ue.finished || (ue.timer = setTimeout(() => {
            ++ue.count;
            const _e = Y.log_limit === 0 ? 1 / 0 : Y.log_limit || 1;
            ue.count >= _e && (ue.finished = !0), k(ue);
          }, Sr(Y.visibility_duration, 800))) : (Z ? !ke : ke) && ue.timer && clearTimeout(ue.timer), ue.visible = ke;
        });
      });
    };
    c = new IntersectionObserver(V, {
      threshold: B
    }), c.observe(r);
  });
  return {
    destroy() {
      _ == null || _.forEach((T) => {
        const D = o[T.index];
        !D || D.type !== "disappear" || !D.visible || D.finished || n.registerTimeout(window.setTimeout(() => {
          k(D);
        }, T.visibility_duration));
      }), g(), I();
    }
  };
}
function ba(r, t) {
  t && r.push(t);
}
function Ht(r, t, e) {
  const n = [];
  ba(n, t[r]);
  for (const i in e)
    if (e.hasOwnProperty(i)) {
      const o = e[i];
      if (o) {
        const a = `${r}_${i}` + (typeof o == "string" ? `_${o}` : "");
        ba(n, t[a]);
      }
    }
  return n.join(" ");
}
const Rs = Symbol("state");
function En(r, t) {
  var a, c;
  const e = r.top || 0, n = ((a = t === "ltr" ? r.end : r.start) != null ? a : r.right) || 0, i = r.bottom || 0, o = ((c = t === "ltr" ? r.start : r.end) != null ? c : r.left) || 0;
  return e === 0 && n === 0 && i === 0 && o === 0 ? "" : ee(e) + " " + ee(n) + " " + ee(i) + " " + ee(o);
}
function no(r) {
  if (typeof r != "number" && typeof r != "string")
    return !1;
  const t = Number(r);
  return !Number.isNaN(t);
}
function an(r) {
  return no(r) && r >= 0;
}
function Qi(r, t, e) {
  var i, o;
  if (!r)
    return e;
  const n = [
    r.top,
    (i = t === "ltr" ? r.end : r.start) != null ? i : r.right,
    r.bottom,
    (o = t === "ltr" ? r.start : r.end) != null ? o : r.left
  ];
  for (let a = 0; a < n.length; ++a)
    if (n[a] && !an(n[a]))
      return e;
  return En(r, t);
}
function _u(r, t) {
  return !an(r) || r === void 0 || r > 1 ? t : Number(r);
}
const hu = Object.prototype.hasOwnProperty;
function Oi(r, t) {
  if (Object.is(r, t))
    return !0;
  if (typeof r != "object" || r === null || typeof t != "object" || t === null)
    return Object.is(r, t);
  const e = Object.keys(r), n = Object.keys(t);
  if (e.length !== n.length)
    return !1;
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    if (!hu.call(t, o) || !Oi(r[o], t[o]))
      return !1;
  }
  return !0;
}
function Xn(r, t) {
  return Oi(r, t) ? t : r;
}
function mu(r, t) {
  return r === "visible" || r === "invisible" || r === "gone" ? r : t;
}
function Ol(r, t) {
  return r === "linear" || r === "ease" || r === "ease_in_out" || r === "ease_in" || r === "ease_out" ? r : t;
}
function jn(r, t) {
  const e = Number(r);
  return Number.isNaN(e) ? t : e;
}
function Bo(r) {
  const t = [];
  return r.name === "set" ? (r.items || []).forEach((e) => {
    t.push(...Bo(e));
  }) : t.push(r), t;
}
function Qn(r, t) {
  if (!r || typeof r != "object")
    return t;
  const e = [
    "top",
    "right",
    "bottom",
    "left"
  ];
  for (let n = 0; n < e.length; ++n)
    if (r[e[n]] && !an(r[e[n]]))
      return t;
  return r;
}
function bu(r, t) {
  if (!r && !t)
    return {};
  if (!t)
    return r;
  if (!r)
    return t;
  const e = {};
  return [
    "top",
    "right",
    "bottom",
    "left",
    "start",
    "end"
  ].forEach((n) => {
    const i = r[n];
    i && (e[n] = i);
    const o = t[n];
    o && (e[n] = (e[n] || 0) + o);
  }), e;
}
function vu(r, t) {
  const e = [
    r["top-left"],
    r["top-right"],
    r["bottom-right"],
    r["bottom-left"]
  ];
  for (let n = 0; n < e.length; ++n)
    if (e[n] && !an(e[n]))
      return t;
  return r;
}
function ko(r, t = 0, e = 10) {
  return [
    r["top-left"],
    r["top-right"],
    r["bottom-right"],
    r["bottom-left"]
  ].map((n) => ee((n || t) / e * 10)).join(" ");
}
function yu(r) {
  var t, e, n, i, o, a;
  return ee(((e = (t = r.offset) == null ? void 0 : t.x) == null ? void 0 : e.value) || 0) + " " + ee(((i = (n = r.offset) == null ? void 0 : n.y) == null ? void 0 : i.value) || 0) + " " + ee((o = r.blur) != null ? o : 2) + " " + Ot(r.color || "#000000", (a = r.alpha) != null ? a : 0.19);
}
function wu(r, t) {
  var e, n, i, o, a, c;
  return "drop-shadow(" + Ot(r.color || "#000000", (e = r.alpha) != null ? e : 0.19) + " " + ee((((i = (n = r.offset) == null ? void 0 : n.x) == null ? void 0 : i.value) || 0) * 10 / t) + " " + ee((((a = (o = r.offset) == null ? void 0 : o.y) == null ? void 0 : a.value) || 0) * 10 / t) + " " + ee(((c = r.blur) != null ? c : 2) * 10 / t) + ")";
}
let as;
function js() {
  return typeof matchMedia > "u" ? !1 : (as || (as = window.matchMedia("(prefers-reduced-motion)")), as.matches);
}
const $u = 8, ju = (r, t, e, n) => {
  let i;
  return (e || n) && typeof ResizeObserver < "u" && (i = new ResizeObserver(async () => {
    let o = 0;
    const a = {}, c = (d, _) => {
      if (d) {
        const k = t.getVariable(d, "integer");
        if (k) {
          if (_ = Math.round(_), a[d] || (a[d] = /* @__PURE__ */ new Set()), !a[d].has(_))
            return k.setValue(_), a[d].add(_), !0;
        } else {
          const I = new Error("Missing variable");
          I.level = "error", I.additional = {
            variableName: d
          }, t.logError(I);
        }
      }
      return !1;
    }, g = () => {
      if (!r)
        return !1;
      const d = r.getBoundingClientRect(), _ = c(e, d.width), k = c(n, d.height);
      return _ || k;
    };
    for (; g(); ) {
      if (++o > $u) {
        const d = new Error("Recursive layout in size_provider");
        d.level = "warn", d.additional = {
          widthVariableName: e,
          heightVariableName: n
        }, t.logError(d);
        break;
      }
      await Fn();
    }
  }), i.observe(r)), i;
}, Ls = Symbol("enabled");
function Fr(r, t) {
  return r === 1 || r === 0 || r === !1 || r === !0 ? !!r : t;
}
function Un(r) {
  return [
    r.state_description,
    r.description,
    r.hint
  ].filter(Boolean).join(", ");
}
const Mi = 2;
function va(r, t = 1) {
  if (!(!r || typeof r.value != "number")) {
    if (r.type === "translation-fixed")
      return ee(r.value * t);
    if (r.type === "translation-percentage")
      return `${r.value * t}%`;
  }
}
function oo(r, t = 1) {
  if (!(!r || typeof r.value != "number")) {
    if (r.type === "pivot-fixed")
      return ee(r.value * t);
    if (r.type === "pivot-percentage")
      return `${r.value * t}%`;
  }
}
function ku(r) {
  return r.map((t) => {
    if (t.type === "rotation") {
      if (typeof t.angle == "number") {
        const e = oo(t.pivot_x) || "50%", n = oo(t.pivot_y) || "50%", i = oo(t.pivot_x, -1) || "-50%", o = oo(t.pivot_y, -1) || "-50%";
        return `translate(${e}, ${n}) rotate(${t.angle}deg) translate(${i}, ${o})`;
      }
    } else if (t.type === "translation") {
      const e = va(t.x) || 0, n = va(t.y) || 0;
      return `translate(${e}, ${n})`;
    }
  }).filter(Boolean).join(" ");
}
const xu = "appkit-actionable__button", Eu = {
  actionable__button: xu
};
function Au() {
}
const Pn = Symbol("action");
function Nl(r) {
  if (r.startsWith("tel:"))
    return "tel";
  if (r.startsWith("/"))
    return "https";
  const t = /^([^/]+):\/\//.exec(r);
  return t && t[1] || "";
}
function Bl(r, t) {
  return t.has(r);
}
const Cu = /* @__PURE__ */ new Set(["button", "image", "checkbox", "radio", "header"]), qo = gr((r, t, e, n) => {
  let i, o, a = h, c = () => (a(), a = p(i, (H) => o = H), i), { componentContext: g } = t, { id: d = "" } = t, { actions: _ = void 0 } = t, { doubleTapActions: k = void 0 } = t, { longTapActions: I = void 0 } = t, { pressStartActions: T = void 0 } = t, { pressEndActions: D = void 0 } = t, { hoverStartActions: B = void 0 } = t, { hoverEndActions: V = void 0 } = t, { cls: A = "" } = t, { style: $e = null } = t, { attrs: Y = void 0 } = t, { use: ue = Au } = t, { customAction: Z = null } = t, { isNativeActionAnimation: ae = !0 } = t, { hasInnerFocusable: ke = !1 } = t, { customAccessibility: le = void 0 } = t, { captureFocusOnAction: Q = !0 } = t, { containerElement: _e = "span" } = t;
  const de = sr($r), te = sr(Pn);
  fi(Pn, {
    hasAction() {
      return !!(te.hasAction() || _ != null && _.length || (le == null ? void 0 : le.mode) === "exclude");
    }
  });
  let me, Ve = "", Fe, L = null, We = !1, Ne, Se, je = !1;
  function S(H) {
  }
  function fe(H) {
    te.hasAction();
  }
  Pr(() => {
    typeof window < "u" && (window.removeEventListener("pointermove", S), window.removeEventListener("pointerup", fe), window.removeEventListener("pointercancel", fe)), d && !ke && de.unregisterFocusable(d);
  }), t.componentContext === void 0 && e.componentContext && g !== void 0 && e.componentContext(g), t.id === void 0 && e.id && d !== void 0 && e.id(d), t.actions === void 0 && e.actions && _ !== void 0 && e.actions(_), t.doubleTapActions === void 0 && e.doubleTapActions && k !== void 0 && e.doubleTapActions(k), t.longTapActions === void 0 && e.longTapActions && I !== void 0 && e.longTapActions(I), t.pressStartActions === void 0 && e.pressStartActions && T !== void 0 && e.pressStartActions(T), t.pressEndActions === void 0 && e.pressEndActions && D !== void 0 && e.pressEndActions(D), t.hoverStartActions === void 0 && e.hoverStartActions && B !== void 0 && e.hoverStartActions(B), t.hoverEndActions === void 0 && e.hoverEndActions && V !== void 0 && e.hoverEndActions(V), t.cls === void 0 && e.cls && A !== void 0 && e.cls(A), t.style === void 0 && e.style && $e !== void 0 && e.style($e), t.attrs === void 0 && e.attrs && Y !== void 0 && e.attrs(Y), t.use === void 0 && e.use && ue !== void 0 && e.use(ue), t.customAction === void 0 && e.customAction && Z !== void 0 && e.customAction(Z), t.isNativeActionAnimation === void 0 && e.isNativeActionAnimation && ae !== void 0 && e.isNativeActionAnimation(ae), t.hasInnerFocusable === void 0 && e.hasInnerFocusable && ke !== void 0 && e.hasInnerFocusable(ke), t.customAccessibility === void 0 && e.customAccessibility && le !== void 0 && e.customAccessibility(le), t.captureFocusOnAction === void 0 && e.captureFocusOnAction && Q !== void 0 && e.captureFocusOnAction(Q), t.containerElement === void 0 && e.containerElement && _e !== void 0 && e.containerElement(_e), je = (le == null ? void 0 : le.mode) === "exclude", c(i = g.getDerivedFromVars(_, void 0, !0));
  {
    if (Array.isArray(o) && (o != null && o.length))
      for (let H = 0; H < o.length; ++H) {
        const re = o[H].url;
        if (re) {
          Ve = re, Fe = o[H].target || void 0;
          break;
        }
      }
    We = !!Z, (Ve || Array.isArray(o) && (o != null && o.length)) && (te.hasAction() || je) ? (Ve = "", g.logError(C(new Error("Actionable element is forbidden inside other actionable element or inside accessibility mode=exlucde"), {
      level: "warn",
      additional: { actions: o }
    }))) : Ve && !Bl(Nl(Ve), de.getBuiltinProtocols()) ? (Ve = "", We = !0) : !Ve && Array.isArray(o) && (o != null && o.length) && (We = !0, o.some((H) => H.url || H.typed || H.menu_items) || g.logError(C(new Error("The component has a list of actions, but does not have a real action"), {
      level: "warn",
      additional: { actions: o }
    })));
  }
  return le != null && le.type && Cu.has(le.type) ? le.type === "header" ? Ne = "heading" : Ne = le.type : Ve ? Ne = void 0 : We && (Ne = "button"), (Ne === "checkbox" || Ne === "radio") && typeof (le == null ? void 0 : le.is_checked) == "boolean" ? Se = le.is_checked : Se = void 0, a(), `${Ve ? `<a${Di(
    [
      { href: Zr(Ve) },
      { target: Zr(Fe) },
      { style: Zr($e) },
      { role: Zr(Ne) },
      {
        "aria-checked": Zr(Se)
      },
      {
        class: gt(A, !0) + " " + gt(Jr["root__any-actions"], !0) + " " + gt(
          ae ? Jr.root__clickable : Jr["root__clickable-no-transition"],
          !0
        ) + " " + gt(
          I != null && I.length ? Jr["root_disabled-context-menu"] : "",
          !0
        )
      },
      {
        tabindex: Zr(g.fakeElement === Mi ? -1 : null)
      },
      Ii(Y)
    ],
    {}
  )}${m("this", me, 0)}>${n.default ? n.default({}) : ""}</a>` : `${We ? `<button${Di(
    [
      {
        class: gt(A, !0) + " " + gt(Eu.actionable__button, !0) + " " + gt(Jr["root__any-actions"], !0) + gt(
          ` ${ae ? Jr.root__clickable : Jr["root__clickable-no-transition"]} ${Jr.root__unselectable}`,
          !0
        ) + " " + gt(
          I != null && I.length ? Jr["root_disabled-context-menu"] : "",
          !0
        )
      },
      { style: Zr($e) },
      { role: Zr(Ne) },
      {
        "aria-checked": Zr(Se)
      },
      { type: "button" },
      {
        tabindex: Zr(g.fakeElement === Mi ? -1 : null)
      },
      Ii(Y)
    ],
    {}
  )}${m("this", me, 0)}>${n.default ? n.default({}) : ""}</button>` : `${((H) => H ? `<${_e}${Di(
    [
      {
        class: gt(A, !0) + " " + gt(
          I != null && I.length ? Jr["root_disabled-context-menu"] : "",
          !0
        ) + " " + gt("", !0)
      },
      { style: Zr($e) },
      { role: Zr(Ne) },
      {
        "aria-checked": Zr(Se)
      },
      {
        "aria-hidden": Zr(je || void 0)
      },
      Ii(Y)
    ],
    {}
  )}${m("this", me, 0)}>${Zn(H) ? "" : `${n.default ? n.default({}) : ""}`}${Zn(H) ? "" : `</${H}>`}` : "")(_e)}`}`}`;
}), so = {
  "outer-background": "appkit-outer-background",
  "outer-background_clip": "appkit-outer-background_clip",
  "outer-background__item": "appkit-outer-background__item",
  "outer-background__item_hidden": "appkit-outer-background__item_hidden"
};
function tn(r) {
  return no(r) && r > 0;
}
function Rl(r, t) {
  return r.map((e) => {
    if (!e) {
      t(C(new Error("Incorrect filter"), {
        level: "warn"
      }));
      return;
    }
    if (e.type === "blur") {
      if (tn(e.radius))
        return `blur(${Wr(e.radius / 2)})`;
    } else {
      if (e.type === "rtl_mirror")
        return;
      t(C(new Error("Unknown filter"), {
        level: "warn",
        additional: {
          filter: e.type
        }
      }));
    }
  }).filter(Boolean).join(" ");
}
const Vu = gr((r, t, e, n) => {
  let i, { direction: o } = t, { componentContext: a } = t, { background: c = [] } = t, { radius: g = "" } = t;
  return t.direction === void 0 && e.direction && o !== void 0 && e.direction(o), t.componentContext === void 0 && e.componentContext && a !== void 0 && e.componentContext(a), t.background === void 0 && e.background && c !== void 0 && e.background(c), t.radius === void 0 && e.radius && g !== void 0 && e.radius(g), i = c.map((d) => {
    const _ = {}, k = { style: _ };
    if (d.type === "nine_patch_image" && d.insets)
      _["border-image"] = `url("${d.image_url}") ${d.insets.top || 0} ${d.insets.right || 0} ${d.insets.bottom || 0} ${d.insets.left || 0} fill`, _["border-image-width"] = "auto";
    else {
      const I = Jo([d], o);
      d.type === "solid" && (_["background-color"] = I.color), d.type === "gradient" && (_["background-image"] = I.image), d.type === "image" && (_.opacity = Number(d.alpha), k.image_url = d.image_url, _["object-fit"] = I.size, _["object-position"] = I.position, Array.isArray(d.filters) && d.filters.length && (_.filter = Rl(d.filters, a.logError), o === "rtl" && d.filters.some((T) => T.type === "rtl_mirror") && (_.transform = "scale(-1,1)")));
    }
    return k;
  }), `<span${m("class", so["outer-background"] + (g ? " " + so["outer-background_clip"] : ""), 0)}${Ar({ "border-radius": g })}>${Vr(i, (d) => `${d.image_url ? `<img${m("src", d.image_url, 0)} alt="" aria-hidden="true" loading="lazy" decoding="async"${m("class", so["outer-background__item"], 0)}${m("style", Cr(d.style), 0)}>` : `<span${m("class", so["outer-background__item"], 0)}${m("style", Cr(d.style), 0)}></span>`}`)}</span>`;
}), ya = {
  left: "start",
  center: "center",
  right: "end",
  start: "start",
  end: "end"
}, wa = {
  left: "end",
  center: "center",
  right: "start",
  start: "start",
  end: "end"
}, $a = {
  top: "start",
  center: "center",
  bottom: "end",
  baseline: "baseline"
}, ls = (r) => `The component id with the "${r}" property for state change is missing. Either specify the id, or specify the "transition_trigger" property without "state_change" value.`;
function Fu(r) {
  return r.some((t) => t.name === "native");
}
const Lr = gr((r, t, e, n) => {
  var na, ia, oa, sa, aa, la, ca, ua, da, fa, ga;
  let i, o, a, c, g, d, _, k, I, T, D, B, V, A, $e, Y, ue, Z, ae, ke, le, Q, _e, de, te, me, Ve, Fe, L, We, Ne, Se, je, S, fe, H, re, ye, Ke, Ge, Me, Pe, R, Te, oe, ot, et, K, Ce = h, ze = () => (Ce(), Ce = p($e, (M) => K = M), $e), ce, lt = h, pe = () => (lt(), lt = p(Y, (M) => ce = M), Y), be, Ze = h, Je = () => (Ze(), Ze = p(A, (M) => be = M), A), De, At = h, Xe = () => (At(), At = p(ue, (M) => De = M), ue), q, Ye = h, dt = () => (Ye(), Ye = p(V, (M) => q = M), V), Le, tt = h, Be = () => (tt(), tt = p(B, (M) => Le = M), B), yt, Ut = h, jt = () => (Ut(), Ut = p(o, (M) => yt = M), o), kt, ge = h, we = () => (ge(), ge = p(D, (M) => kt = M), D), Vt, Pt = h, St = () => (Pt(), Pt = p(T, (M) => Vt = M), T), qe, Yt = h, W = () => (Yt(), Yt = p(I, (M) => qe = M), I), Re, bt = h, Ie = () => (bt(), bt = p(k, (M) => Re = M), k), rt, Tt = h, xt = () => (Tt(), Tt = p(g, (M) => rt = M), g), He, nt = h, Dt = () => (nt(), nt = p(_, (M) => He = M), _), ft, Zt = h, er = () => (Zt(), Zt = p(d, (M) => ft = M), d), zt, tr = h, Mt = () => (tr(), tr = p(c, (M) => zt = M), c), Xt, It = h, ct = () => (It(), It = p(a, (M) => Xt = M), a), pt, nr, { componentContext: O } = t, { cls: rr = "" } = t, { style: Jt = void 0 } = t, { layoutParams: xe = {} } = t, { customDescription: ir = !1 } = t, { customPaddings: Kt = !1 } = t, { customActions: ne = "" } = t, { additionalPaddings: ve = null } = t, { heightByAspect: Et = !1 } = t, { parentOf: $ = void 0 } = t, { parentOfSimpleMode: y = void 0 } = t, { replaceItems: U = void 0 } = t, { hasInnerFocusable: v = !1 } = t, { alwaysCustomFocus: N = !1 } = t, { containerElement: Ae = "span" } = t, { devapi: _t = void 0 } = t;
  const wt = sr($r), Ct = sr(Rs), { isEnabled: _r } = sr(Ls);
  nr = p(_r, (M) => pt = M);
  const s = wt.direction;
  et = p(s, (M) => ot = M);
  let ht, Dr, ut = null, ie = [], P = {}, ar = {}, yr = !1, Bt = 1, zr = "transparent", lr = 0, st = {
    "top-left": 0,
    "top-right": 0,
    "bottom-right": 0,
    "bottom-left": 0
  }, wr = "", Hr = null, cr = "", G = {}, rn, Ur, Or, qr = 0, jr = 0, Qr = 0, f = !1, b = !1, w = {}, z, E, Ue, se = 0, Nt = 0, $t = 0, Oe = !1, Ft = !1, it = 1, Qt, ur, Ir, Tr, nn = [], Gr = !1, on = !1, vt, l, u, F = [], j = [], X = [], J = [], at = [], mt = [], pr = [], or = [], kr = [], On = [], Sn = "", si, Cn, Qs, ea, io = !1, ai = "visible", Ri, li, bi = !1, ns = !0, is, hn, Li, ci;
  function bc() {
    Hr = null, cr = "", it = 1, io = !1, ai = "visible", Ri = void 0, ns = !0, nn = O.fakeElement ? [] : O.json.transition_triggers || ["state_change", "visibility_change"], Gr = nn.indexOf("state_change") !== -1, on = nn.indexOf("visibility_change") !== -1, ht && ra(ht), hn == null || hn(), pt && (hn = wt.processVariableTriggers(O, O.json.variable_triggers));
  }
  function vc(M, Gt) {
    if (!Array.isArray($) || !U || y && (Array.isArray(Gt) ? Gt.length : 0) !== 1)
      return;
    const dr = $.findIndex((qt) => (qt == null ? void 0 : qt.id) === M), br = $.slice();
    br.splice(dr, 1, ...(Gt || []).map((qt) => ({ json: qt, id: qt == null ? void 0 : qt.id }))), $ = br, U(br.map((qt) => qt == null ? void 0 : qt.json));
  }
  function yc(M) {
    const Gt = jn(M.start_value, 1), dr = jn(M.end_value, 1), br = Sr(M.start_delay, 0), qt = js() ? 0 : Sr(M.duration, 300), hr = Ol(M.interpolator, "ease_in_out").replace(/_/g, "-");
    switch (M.name) {
      case "fade":
        return si = Gt, Cn = dr, `opacity ${qt}ms ${hr} ${br}ms`;
      case "scale":
        return Qs = Gt, ea = dr, `transform ${qt}ms ${hr} ${br}ms`;
      case "native":
      case "no_animation":
        return "";
      default:
        return O.logError(C(new Error("Unknown action_animation name"), {
          additional: { animation: M.name }
        })), "";
    }
  }
  async function wc(M) {
    ai = M;
    const Gt = M === "visible" ? "in" : "out", dr = Gt === "in" ? O.json.transition_in : O.json.transition_out;
    if (on && dr) {
      let br;
      M === "gone" && (br = ht.getBoundingClientRect()), await Fn(), Gt === "in" && (l = !0), Ct.runVisibilityTransition(
        {
          ...O.json,
          visibility: "visible"
        },
        O,
        dr,
        ht,
        Gt,
        br
      ).then(() => {
        Gt === "in" && (l = !1);
      }).catch((qt) => {
        throw Gt === "in" && (l = !1), qt;
      });
    }
  }
  function ta() {
    if (ut && ht) {
      const M = wt.getExtensionContext(O);
      ut.forEach((Gt) => {
        var dr;
        (dr = Gt.unmountView) == null || dr.call(Gt, ht, M);
      }), ut = null;
    }
  }
  let Nn = null, Jn = null, vi = "desktop";
  function Hi() {
    Nn != null && Nn.matches ? vi = "mobile" : Jn != null && Jn.matches ? vi = "tablet" : vi = "desktop";
  }
  let Dn = null, yi = "";
  function ra(M) {
    var sn, wn, $n;
    Li == null || Li.destroy(), ht = M, Gr && O.json.transition_in && (O.id ? Ct.registerChildWithTransitionIn(O.json, O, O.json.transition_in, M).then(() => {
      vt = !1;
    }).catch((Er) => {
      throw vt = !1, Er;
    }) : O.logError(C(new Error(ls("transition_in")), { level: "warn" }))), Gr && O.json.transition_out && (O.id ? Ct.registerChildWithTransitionOut(O.json, O, O.json.transition_out, M) : O.logError(C(new Error(ls("transition_out")), { level: "warn" }))), O.fakeElement || (O.json.transition_change && !O.id && O.logError(C(new Error(ls("transition_change")), { level: "warn" })), Ct.registerChildWithTransitionChange(O.json, O, O.json.transition_change, M).then(() => {
      u = !1;
    }).catch((Er) => {
      throw u = !1, Er;
    }));
    const Gt = !O.fakeElement || O.fakeElement === Mi, dr = Gt ? O.json.visibility_actions || O.json.visibility_action && [O.json.visibility_action] : [], br = Gt ? O.json.disappear_actions : [];
    let qt;
    (Array.isArray(dr) && dr.length || Array.isArray(br) && br.length) && (qt = pu(M, {
      visibilityActions: dr,
      disappearActions: br,
      rootCtx: wt,
      componentContext: O
    }));
    const hr = O.id;
    return hr && (ci == null || ci(), ci = wt.registerId(hr, {
      context: () => O,
      node: () => ht
    }), Ct.registerChild(hr)), (sn = O.json.tooltips) == null || sn.forEach((Er) => {
      wt.registerTooltip(M, Er);
    }), li && (li.disconnect(), li = void 0), li = ju(ht, O, (wn = O.json.layout_provider) == null ? void 0 : wn.width_variable_name, ($n = O.json.layout_provider) == null ? void 0 : $n.height_variable_name), Li = {
      destroy() {
        ci && (ci(), ci = void 0), hr && Ct.unregisterChild(hr), qt && qt.destroy();
      }
    }, Li;
  }
  function $c() {
    O.json.focus && ((N || !bs(wt.isPointerFocus)) && (bi = !0), O.execAnyActions(J));
  }
  function jc() {
    O.json.focus && (bi = !1, O.execAnyActions(at));
  }
  Pr(() => {
    var M;
    ie.forEach((Gt) => {
      wt.unregisterParentOf(Gt);
    }), ie = [], li && (li.disconnect(), li = void 0), (M = O.json.tooltips) == null || M.forEach((Gt) => {
      wt.unregisterTooltip(Gt);
    }), hn == null || hn(), ta(), Dn && (Dn.remove(), Dn = null), Nn && (Nn.removeEventListener("change", Hi), Nn = null), Jn && (Jn.removeEventListener("change", Hi), Jn = null);
  }), t.componentContext === void 0 && e.componentContext && O !== void 0 && e.componentContext(O), t.cls === void 0 && e.cls && rr !== void 0 && e.cls(rr), t.style === void 0 && e.style && Jt !== void 0 && e.style(Jt), t.layoutParams === void 0 && e.layoutParams && xe !== void 0 && e.layoutParams(xe), t.customDescription === void 0 && e.customDescription && ir !== void 0 && e.customDescription(ir), t.customPaddings === void 0 && e.customPaddings && Kt !== void 0 && e.customPaddings(Kt), t.customActions === void 0 && e.customActions && ne !== void 0 && e.customActions(ne), t.additionalPaddings === void 0 && e.additionalPaddings && ve !== void 0 && e.additionalPaddings(ve), t.heightByAspect === void 0 && e.heightByAspect && Et !== void 0 && e.heightByAspect(Et), t.parentOf === void 0 && e.parentOf && $ !== void 0 && e.parentOf($), t.parentOfSimpleMode === void 0 && e.parentOfSimpleMode && y !== void 0 && e.parentOfSimpleMode(y), t.replaceItems === void 0 && e.replaceItems && U !== void 0 && e.replaceItems(U), t.hasInnerFocusable === void 0 && e.hasInnerFocusable && v !== void 0 && e.hasInnerFocusable(v), t.alwaysCustomFocus === void 0 && e.alwaysCustomFocus && N !== void 0 && e.alwaysCustomFocus(N), t.containerElement === void 0 && e.containerElement && Ae !== void 0 && e.containerElement(Ae), t.devapi === void 0 && e.devapi && _t !== void 0 && e.devapi(_t), i = O.origJson, i && bc(), pt ? (hn == null || hn(), hn = wt.processVariableTriggers(O, O.json.variable_triggers)) : hn == null || hn(), jt(o = O.getDerivedFromVars(O.json.focus)), ct(a = O.getDerivedFromVars(O.json.border)), Mt(c = O.getDerivedFromVars(O.json.paddings)), xt(g = O.getDerivedFromVars(O.json.margins)), er(d = O.getDerivedFromVars(O.json.width)), Dt(_ = O.getDerivedFromVars(O.json.alignment_horizontal)), Ie(k = O.getDerivedFromVars(O.json.height)), W(I = O.getDerivedFromVars(O.json.alignment_vertical)), St(T = O.getDerivedFromVars(O.json.alpha)), we(D = O.getDerivedFromVars(O.json.accessibility)), Be(B = O.getDerivedFromVars(O.json.background)), dt(V = O.getDerivedFromVars(O.json.action_animation)), Je(A = O.getDerivedFromVars(O.json.visibility)), ze($e = O.getDerivedFromVars(O.json.transform)), pe(Y = O.getDerivedFromVars(O.json.transformations)), Xe(ue = O.getDerivedFromVars(O.json.capture_focus_on_action)), ie.forEach((M) => {
    wt.unregisterParentOf(M);
  }), ie = [], $ && $.forEach((M) => {
    M != null && M.id && (ie.push(M.id), wt.registerParentOf(M.id, {
      replaceWith: vc,
      isSingleMode: !!y
    }));
  });
  {
    const M = bi && (yt != null && yt.border) ? yt.border : Xt;
    let Gt = {}, dr = {}, br = !1, qt = "";
    if (M) {
      if (Fr(M.has_shadow, !1)) {
        const hr = M.shadow;
        hr ? Gt["box-shadow"] = yu(hr) : Gt["box-shadow"] = "0 1px 2px 0 rgba(0,0,0,.18), 0 0 0 1px rgba(0,0,0,.07)";
      }
      if (M.stroke) {
        br = !0, Bt = Sr(M.stroke.width, Bt), zr = Ot(M.stroke.color, 1, zr);
        const hr = ((na = M.stroke.style) == null ? void 0 : na.type) === "dashed" ? "dashed" : "solid";
        dr["--divkit-border"] = `${ee(Bt + 1)} ${hr} ${zr}`;
      }
      if (M.corners_radius && typeof M.corners_radius == "object") {
        st = vu(M.corners_radius, st), Gt["border-radius"] = ko(st);
        const hr = {};
        ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((sn) => {
          hr[sn] = (st[sn] || 0) + 1;
        }), dr["--divkit-border-radius"] = ko(hr);
      } else M.corner_radius && (lr = Sr(M.corner_radius, lr), st = {
        "top-left": lr,
        "top-right": lr,
        "bottom-right": lr,
        "bottom-left": lr
      }, Gt["border-radius"] = ee(lr), dr["--divkit-border-radius"] = ee(lr + 1));
      if (br && Bt && (M.corners_radius || M.corner_radius)) {
        let hr = { ...st };
        ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((sn) => {
          hr[sn] = (hr[sn] || 0) + Bt / 2;
        }), qt = ko(hr);
      }
    }
    P = Xn(Gt, P), ar = Xn(dr, ar), yr = br, wr = qt;
  }
  Hr = Qn(
    zt && !Kt ? zt : void 0,
    Hr
  ), Z = En(bu(Hr, ve), ot), cr = Qi(rt, ot, cr), je = O.json.responsive, je && typeof je == "object" && typeof window < "u" ? (Nn || (Nn = window.matchMedia("(max-width: 767px)"), Jn = window.matchMedia("(min-width: 768px) and (max-width: 1023px)"), Nn.addEventListener("change", Hi), Jn.addEventListener("change", Hi)), Hi()) : vi = "desktop", S = vi !== "desktop" && (je == null ? void 0 : je[vi]) || null, Pe = (() => {
    const M = S == null ? void 0 : S.alignment_horizontal;
    if (M === "left" || M === "center" || M === "right" || M === "start" || M === "end")
      return (ot === "ltr" ? ya : wa)[M];
  })();
  {
    let M, Gt, dr, br, qt = {}, hr = 0, sn = 0, wn = !1, $n = !1;
    const Er = (ia = O.json.width) == null ? void 0 : ia.type;
    if (Er === "fixed")
      qr = Sr(ft == null ? void 0 : ft.value, qr), Gt = ee(qr);
    else if (Er === "wrap_content" || (Er === "match_parent" || !Er) && xe.parentHorizontalWrapContent)
      M = "content", (Er === "wrap_content" && (ft != null && ft.constrained) || (Er === "match_parent" || !Er) && xe.parentHorizontalWrapContent) && (qt["width-constrained"] = !0, xe.parentContainerOrientation === "horizontal" && (sn = 1)), (Er === "match_parent" || !Er) && O.logError(C(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
    else if (M = "parent", xe.parentContainerOrientation === "vertical" && xe.parentContainerWrap && ($n = !0, O.logError(C(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), xe.parentContainerOrientation === "vertical" && xe.parentContainerKnownWidth || xe.stretchWidth || xe.parentContainerOrientation === "horizontal" && xe.treatMatchParentAs100) {
      const xr = (sa = (oa = ot === "ltr" ? rt == null ? void 0 : rt.start : rt == null ? void 0 : rt.end) != null ? oa : rt == null ? void 0 : rt.left) != null ? sa : 0, en = (la = (aa = ot === "ltr" ? rt == null ? void 0 : rt.end : rt == null ? void 0 : rt.start) != null ? aa : rt == null ? void 0 : rt.right) != null ? la : 0, Yr = `calc(100% - ${Wr(xr + en)})`;
      xe.stretchWidth ? (Gt = "0", dr = Yr) : Gt = Yr;
    } else xe.parentContainerOrientation === "horizontal" && (hr = ft && "weight" in ft && ft.weight || 1, xe.parentContainerWrap && (wn = !0));
    if (Er === "wrap_content" || Er === "match_parent") {
      const xr = ft;
      let en, Yr;
      xr.min_size && an(xr.min_size.value) && (en = xr.min_size.value), xr.max_size && an(xr.max_size.value) && (Yr = xr.max_size.value), en !== void 0 && Yr !== void 0 && en > Yr && (O.logError(C(new Error("Element has incorrect width constraints (min size is bigger than max size)."), {
        additional: {
          id: O.json.id,
          minSize: en + "dp",
          maxSize: Yr + "dp"
        }
      })), en = Yr = void 0), en !== void 0 && (dr = ee(en)), Yr !== void 0 && (br = ee(Yr));
    }
    if (Pe)
      qt["halign-self"] = Pe;
    else if (M === "parent")
      qt["halign-self"] = "stretch";
    else {
      const xr = He;
      xr === "left" || xr === "center" || xr === "right" || xr === "start" || xr === "end" ? qt["halign-self"] = (ot === "ltr" ? ya : wa)[xr] : qt["halign-self"] = xe.parentHAlign || "start";
    }
    M && (qt.width = M), rn = Gt, Ur = dr, Or = br, jr = hr, Qr = sn, G = Xn(qt, G), f = wn, b = $n;
  }
  R = (() => {
    const M = S == null ? void 0 : S.alignment_vertical;
    if (M === "top" || M === "center" || M === "bottom" || M === "baseline")
      return $a[M];
  })();
  {
    let M, Gt, dr, br, qt = {}, hr = 0, sn = 0, wn = !1, $n = !1;
    const Er = (ca = O.json.height) == null ? void 0 : ca.type;
    if (!Et) if (Er === "fixed")
      se = Sr(Re == null ? void 0 : Re.value, se), Gt = ee(se);
    else if (Er === "match_parent" && !xe.parentVerticalWrapContent)
      if (M = "parent", xe.parentContainerOrientation === "horizontal" && xe.parentContainerWrap && ($n = !0, O.logError(C(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), xe.parentContainerOrientation === "horizontal" && xe.parentContainerKnownHeight || xe.stretchHeight || xe.parentContainerOrientation === "vertical" && xe.treatMatchParentAs100) {
        const xr = (ua = rt == null ? void 0 : rt.top) != null ? ua : 0, en = (da = rt == null ? void 0 : rt.bottom) != null ? da : 0, Yr = `calc(100% - ${Wr(xr + en)})`;
        xe.stretchHeight ? (Gt = "0", dr = Yr) : Gt = Yr;
      } else xe.parentContainerOrientation === "vertical" && (hr = (Re == null ? void 0 : Re.weight) || 1, xe.parentContainerWrap && (wn = !0));
    else
      M = "content", (Er === "wrap_content" && (Re != null && Re.constrained) || Er === "match_parent" && xe.parentVerticalWrapContent) && (qt["height-constrained"] = !0, xe.parentContainerOrientation === "vertical" && (sn = 1)), Er === "match_parent" && O.logError(C(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
    if (!Et && (Er === "match_parent" || Er === "wrap_content")) {
      const xr = Re;
      let en, Yr;
      xr.min_size && an(xr.min_size.value) && (en = xr.min_size.value), xr.max_size && an(xr.max_size.value) && (Yr = xr.max_size.value), en !== void 0 && Yr !== void 0 && en > Yr && (O.logError(C(new Error("Element has incorrect height constraints (min size is bigger than max size)."), {
        additional: {
          id: O.json.id,
          minSize: en + "dp",
          maxSize: Yr + "dp"
        }
      })), en = Yr = void 0), en !== void 0 && (dr = ee(en)), Yr !== void 0 && (br = ee(Yr));
    }
    if (R)
      qt["valign-self"] = R;
    else if (M === "parent")
      qt["valign-self"] = "stretch";
    else {
      const xr = qe;
      xr === "top" || xr === "center" || xr === "bottom" || xr === "baseline" && xe.parentContainerOrientation === "horizontal" ? qt["valign-self"] = $a[xr] : qt["valign-self"] = xe.parentVAlign || "start";
    }
    M && (qt.height = M), z = Gt, E = dr, Ue = br, Nt = hr, $t = sn, w = Xn(qt, w), Oe = wn, Ft = $n;
  }
  if (ae = xe.overlapParent ? !0 : void 0, ke = xe.gridArea ? `${xe.gridArea.y + 1}/${xe.gridArea.x + 1}/span ${xe.gridArea.rowSpan}/span ${xe.gridArea.colSpan}` : void 0, it = _u(Vt, it), Qt = it === 1 ? void 0 : it, Dr = void 0, kt && !ir) {
    const M = Un(kt);
    M && (Dr = {}, Dr["aria-label"] = M);
  }
  if (ur = bi && (yt != null && yt.background) ? yt.background : Le, Ir = {}, Tr = !1, Array.isArray(ur) && (Tr = ur.some((M) => M.type === "image" || M.type === "nine_patch_image") || !!wr, !Tr)) {
    const M = Jo(ur, ot);
    Ir["background-color"] = M.color, Ir["background-image"] = M.image, Ir["background-size"] = M.size, Ir["background-position"] = M.position, Ir["background-repeat"] = "no-repeat";
  }
  vt = void 0, Gr && O.id && O.json.transition_in && wt.isRunning("stateChange") && (vt = !0), u = void 0, Gr && O.id && wt.isRunning("stateChange") && Ct.hasTransitionChange(O.id) && (u = !0);
  {
    const M = O.json;
    let Gt = M.actions || M.action && [M.action] || [], dr = M.doubletap_actions || [], br = M.longtap_actions || [], qt = ((fa = M.focus) == null ? void 0 : fa.on_focus) || [], hr = ((ga = M.focus) == null ? void 0 : ga.on_blur) || [], sn = M.press_start_actions || [], wn = M.press_end_actions || [], $n = M.hover_start_actions || [], Er = M.hover_end_actions || [];
    O.fakeElement && O.fakeElement !== Mi ? (Gt = [], dr = [], br = [], qt = [], hr = []) : (Array.isArray(Gt) || (Gt = [], O.logError(C(new Error("Actions should be array")))), Array.isArray(dr) || (dr = [], O.logError(C(new Error("DoubleTapActions should be array")))), Array.isArray(br) || (br = [], O.logError(C(new Error("LongTapActions should be array")))), Array.isArray(qt) || (qt = [], O.logError(C(new Error("FocusActions should be array")))), Array.isArray(hr) || (hr = [], O.logError(C(new Error("BlurActions should be array")))), Array.isArray(sn) || (sn = [], O.logError(C(new Error("PressStartActions should be array")))), Array.isArray(wn) || (wn = [], O.logError(C(new Error("PressEndActions should be array")))), Array.isArray($n) || ($n = [], O.logError(C(new Error("HoverStartActions should be array")))), Array.isArray(Er) || (Er = [], O.logError(C(new Error("HoverEndActions should be array"))))), (Gt.length || dr.length || br.length || mt.length || pr.length || or.length || kr.length) && ne && (Gt = [], dr = [], br = [], mt = [], pr = [], or = [], kr = [], O.logError(C(new Error(`Cannot use action on component "${ne}"`)))), F = Gt, j = dr, X = br, J = qt, at = hr, mt = sn, pr = wn, or = $n, kr = Er;
  }
  q && (On = Bo(q), Sn = On.map(yc).filter(Boolean).join(", ")), typeof De == "boolean" && (ns = De);
  {
    const M = ai, Gt = mu(be, ai);
    M !== Gt && (io && (ai === "visible" || Gt === "visible") ? wc(Gt) : ai = Gt), io || (io = !0);
  }
  if (O.json && ht && !Oi(O.json.extensions, is)) {
    let M = is = O.json.extensions;
    Fn().then(() => {
      if (!(M !== is || !ht) && (ta(), Array.isArray(O.json.extensions))) {
        const Gt = wt.getExtensionContext(O);
        ut = O.json.extensions.map((dr) => {
          var hr;
          const br = dr.id;
          if (!br)
            return;
          const qt = wt.getExtension(br, dr.params);
          return qt && ((hr = qt.mountView) == null || hr.call(qt, ht, Gt)), qt;
        }).filter(zn);
      }
    });
  }
  Me = S == null ? void 0 : S.visibility, le = {
    ...G,
    ...w,
    ...Pe ? {
      "halign-self": Pe
    } : {},
    ...R ? {
      "valign-self": R
    } : {},
    "parent-overlap": ae,
    "scroll-snap": xe.scrollSnap,
    "hide-on-transition-in": vt || l || u,
    visibility: Me || ai,
    "has-action-animation": !!Sn,
    "parent-flex": xe.parentContainerOrientation || void 0,
    "parent-grid": !!xe.gridArea || void 0,
    "has-custom-focus": !!(bi && O.json.focus)
  };
  {
    let M;
    Array.isArray(ce) ? M = ce : K && K.rotation !== void 0 && (M = [
      {
        type: "rotation",
        angle: K.rotation,
        pivot_x: K.pivot_x,
        pivot_y: K.pivot_y
      }
    ]), M ? Ri = ku(M) : Ri = void 0;
  }
  if (Q = f || Oe ? "100%" : jr || Nt ? 0 : void 0, _e = O.json["custom-class"] || "", de = O.json.position, te = O.json.sticky_top, me = O.json.sticky_bottom, Ve = O.json.z_index, Fe = O.json.cursor, L = O.json.backdrop_filter, We = O.json.overflow, Ne = O.json["box-shadow"], Se = O.json.custom_transition, fe = (() => {
    if (!(S != null && S.paddings)) return;
    const M = S.paddings;
    return En(Qn(M, null), ot);
  })(), H = (() => {
    if (!(S != null && S.margins)) return;
    const M = S.margins;
    return Qi(M, ot, "");
  })(), re = (() => {
    if (S != null && S["max-width"] && typeof S["max-width"] == "string")
      return S["max-width"];
    if (!(S != null && S.max_width)) return;
    const M = S.max_width;
    if (M.type === "fixed" && M.value) return M.value + "px";
  })(), ye = (() => {
    if (!(S != null && S.width)) return;
    const M = S.width;
    if (M.type === "fixed" && M.value) return ee(M.value);
    if (M.type === "match_parent") return "100%";
  })(), Ke = (() => {
    if (!(S != null && S.height)) return;
    const M = S.height;
    if (M.type === "fixed" && M.value) return ee(M.value);
    if (M.type === "match_parent") return "100%";
  })(), Ge = (S == null ? void 0 : S.opacity) !== void 0 ? S.opacity : void 0, Te = O.json.hover, Te && typeof Te == "object" && typeof document < "u") {
    yi || (yi = "divkit-hover-" + Math.random().toString(36).slice(2, 9));
    let M = "";
    Te.background_color && (M += `background-color: ${Te.background_color} !important;`), Te.opacity !== void 0 && (M += `opacity: ${Te.opacity} !important;`), Te.scale !== void 0 && (M += `scale: ${Te.scale} !important;`), Te.color && (M += `color: ${Te.color} !important;`), Te.border_color && (M += `border-color: ${Te.border_color} !important;`), (Te["box-shadow"] || Te.box_shadow) && (M += `box-shadow: ${Te["box-shadow"] || Te.box_shadow} !important;`), M && (Dn || (Dn = document.createElement("style"), document.head.appendChild(Dn)), Dn.textContent = `.${yi}:hover { ${M} }`);
  } else Dn && (Dn.remove(), Dn = null, yi = "");
  return oe = {
    ...Jt,
    ...Ir,
    ...P,
    width: ye || rn,
    "min-width": Ur,
    "max-width": re || Or || (() => {
      const M = O.json.max_width;
      if ((M == null ? void 0 : M.type) === "fixed" && (M != null && M.value)) return ee(M.value);
    })(),
    height: Ke || z,
    "min-height": E,
    // input max-height
    "max-height": Ue || (Jt == null ? void 0 : Jt["max-height"]) || (() => {
      const M = O.json.max_height;
      if ((M == null ? void 0 : M.type) === "fixed" && (M != null && M.value)) return ee(M.value);
    })(),
    "grid-area": ke,
    padding: fe || Z,
    margin: H || cr,
    opacity: Ge !== void 0 ? Ge : Qt,
    transition: Se || Sn,
    "transform-origin": Ri ? "0 0" : void 0,
    transform: Ri,
    "flex-grow": jr || Nt || void 0,
    "flex-shrink": Qr || $t ? 1 : void 0,
    "flex-basis": Q,
    position: de,
    top: de === "sticky" && te !== void 0 ? ee(te) : void 0,
    bottom: de === "sticky" && me !== void 0 ? ee(me) : void 0,
    "z-index": Ve,
    cursor: Fe,
    "backdrop-filter": L,
    "-webkit-backdrop-filter": L,
    overflow: We,
    "box-shadow": Ne,
    "--divkit-animation-opacity-start": si,
    "--divkit-animation-opacity-end": Cn,
    "--divkit-animation-scale-start": Qs,
    "--divkit-animation-scale-end": ea
  }, et(), Ce(), lt(), Ze(), At(), Ye(), tt(), Ut(), ge(), Pt(), Yt(), bt(), Tt(), nt(), Zt(), tr(), It(), nr(), `${!b && !Ft ? `${Wt(qo, "Actionable").$$render(
    r,
    {
      componentContext: O,
      id: O.json.id,
      use: ra,
      cls: rr + " " + Ht("outer", ws, le) + (_e ? ` ${_e}` : "") + (yi ? ` ${yi}` : ""),
      style: Cr(oe),
      actions: F,
      doubleTapActions: j,
      longTapActions: X,
      pressStartActions: mt,
      pressEndActions: pr,
      hoverStartActions: or,
      hoverEndActions: kr,
      attrs: Dr,
      hasInnerFocusable: v,
      isNativeActionAnimation: !On.length || Fu(On),
      customAccessibility: kt,
      captureFocusOnAction: ns,
      containerElement: Ae
    },
    {},
    {
      default: () => ` ${Tr ? `${Wt(Vu, "OuterBackground").$$render(
        r,
        {
          componentContext: O,
          direction: ot,
          background: ur,
          radius: wr
        },
        {},
        {}
      )}` : ""}${n.default ? n.default({
        focusHandler: $c,
        blurHandler: jc,
        hasCustomFocus: bi,
        widthMin: Ur,
        widthMax: Or,
        heightMin: E,
        heightMax: Ue
      }) : ""}${yr ? `<span${m("class", ws.outer__border, 0)}${m("style", Cr(ar), 0)}></span>` : ""}`
    }
  )}` : ""}`;
}), Su = "appkit-text", Du = "appkit-text_halign_start", Iu = "appkit-text_halign_center", Tu = "appkit-text_halign_end", Mu = "appkit-text_valign_start", Pu = "appkit-text_valign_center", zu = "appkit-text_valign_end", Ou = "appkit-text_valign_baseline", Nu = "appkit-text__inner", Bu = "appkit-text_singleline", Ru = "appkit-text_multiline", Lu = "appkit-text_truncate_none", Hu = "appkit-text__inner_gradient", Wu = "appkit-text__image", Uu = "appkit-text__image_hidden", ji = {
  "text-range": "appkit-text-range",
  text: Su,
  text_halign_start: Du,
  text_halign_center: Iu,
  text_halign_end: Tu,
  text_valign_start: Mu,
  text_valign_center: Pu,
  text_valign_end: zu,
  text_valign_baseline: Ou,
  text__inner: Nu,
  text_singleline: Bu,
  text_multiline: Ru,
  text_truncate_none: Lu,
  "text__inner_has-cloud-bg": "appkit-text__inner_has-cloud-bg",
  "text__inner_cloud-bg": "appkit-text__inner_cloud-bg",
  text__inner_gradient: Hu,
  "text__image-wrapper": "appkit-text__image-wrapper",
  "text__image-wrapper_crop": "appkit-text__image-wrapper_crop",
  "text__image-wrapper_align_top": "appkit-text__image-wrapper_align_top",
  "text__image-wrapper_align_center": "appkit-text__image-wrapper_align_center",
  "text__image-wrapper_align_bottom": "appkit-text__image-wrapper_align_bottom",
  "text__image-wrapper_align_baseline": "appkit-text__image-wrapper_align_baseline",
  text__image: Wu,
  text__image_hidden: Uu,
  "text_has-focus-color": "appkit-text_has-focus-color"
}, Bn = {
  "text-range": "appkit-text-range",
  "text-range_cloud": "appkit-text-range_cloud",
  "text-range_singleline": "appkit-text-range_singleline",
  "text-range__top-offset": "appkit-text-range__top-offset",
  "text-range_decoration_both": "appkit-text-range_decoration_both",
  "text-range_decoration_underline": "appkit-text-range_decoration_underline",
  "text-range_decoration_strike": "appkit-text-range_decoration_strike",
  "text-range_decoration_none": "appkit-text-range_decoration_none",
  "text-range_align_top": "appkit-text-range_align_top",
  "text-range_align_center": "appkit-text-range_align_center",
  "text-range_align_bottom": "appkit-text-range_align_bottom",
  "text-range_align_baseline": "appkit-text-range_align_baseline",
  "text-range__cloud-svg": "appkit-text-range__cloud-svg",
  "text-range_relative-vertical-align": "appkit-text-range_relative-vertical-align",
  "text-range_has-particles-mask": "appkit-text-range_has-particles-mask",
  "text-range__mask-animation": "appkit-text-range__mask-animation",
  "text-range_mask-animated": "appkit-text-range_mask-animated",
  "divkit-mask-particles-0": "appkit-divkit-mask-particles-0",
  "divkit-mask-particles-1": "appkit-divkit-mask-particles-1",
  "divkit-mask-particles-2": "appkit-divkit-mask-particles-2",
  "divkit-mask-particles-3": "appkit-divkit-mask-particles-3",
  "divkit-mask-particles-4": "appkit-divkit-mask-particles-4",
  "divkit-mask-particles-5": "appkit-divkit-mask-particles-5"
};
function un(r, t) {
  const e = Number(r);
  return Number.isNaN(e) || e <= 0 ? t : e;
}
function Gu(r) {
  if (r === "light" || r === "medium" || r === "bold" || r === "regular" || r === "semi_bold")
    return r === "medium" ? 500 : r === "bold" ? 700 : r === "light" ? 300 : r === "semi_bold" ? 600 : 400;
}
function ei(r, t, e) {
  return typeof t == "number" && t > 0 ? t : Gu(r) || e;
}
function ks(r, t) {
  if (!r)
    return {};
  const e = {};
  for (const n of ["left", "top", "right", "bottom", "start", "end"]) {
    const i = r[n];
    i && (e[n] = i * t);
  }
  return e;
}
function gi(r) {
  if (r && typeof r == "object") {
    const t = [];
    for (const e in r) {
      const n = r[e];
      t.push(`"${e}" ${n}`);
    }
    return t.join(", ");
  }
  return "";
}
const cs = gr((r, t, e, n) => {
  var Ke, Ge, Me, Pe, R, Te, oe, ot;
  let i, o, a, c, g, d, _, k, I, T, { componentContext: D } = t, { text: B } = t, { rootFontSize: V } = t, { textStyles: A = {} } = t, { singleline: $e = !1 } = t, { actions: Y = void 0 } = t, { cloudBg: ue = !1 } = t, { cloudBgId: Z = "" } = t, { customLineHeight: ae = null } = t;
  const ke = sr($r), le = ke.direction;
  T = p(le, (et) => I = et);
  const Q = ue && Z || ke.genId("text-range") || "";
  let _e = "none", de = 12, te = 1.25, me = "", Ve, Fe = "", L = "", We = "", Ne, Se = null, je, S, fe = !1, H, re, ye;
  t.componentContext === void 0 && e.componentContext && D !== void 0 && e.componentContext(D), t.text === void 0 && e.text && B !== void 0 && e.text(B), t.rootFontSize === void 0 && e.rootFontSize && V !== void 0 && e.rootFontSize(V), t.textStyles === void 0 && e.textStyles && A !== void 0 && e.textStyles(A), t.singleline === void 0 && e.singleline && $e !== void 0 && e.singleline($e), t.actions === void 0 && e.actions && Y !== void 0 && e.actions(Y), t.cloudBg === void 0 && e.cloudBg && ue !== void 0 && e.cloudBg(ue), t.cloudBgId === void 0 && e.cloudBgId && Z !== void 0 && e.cloudBgId(Z), t.customLineHeight === void 0 && e.customLineHeight && ae !== void 0 && e.customLineHeight(ae), D.json && (_e = "none", de = 12, te = 1.25, me = "", Ve = void 0, Fe = "", L = "", We = "", Ne = void 0, Se = null, je = void 0, S = void 0, fe = !1, H = void 0, re = void 0, ye = void 0);
  {
    let et = "none";
    (A.underline || A.strike) && (A.underline === "single" && A.strike === "single" ? et = "both" : A.underline === "single" ? et = "underline" : A.strike === "single" && (et = "strike")), _e = et;
  }
  de = un(A.font_size, de), tn(A.line_height) && (te = Number(A.line_height) / de), an(A.letter_spacing) && (me = ee(A.letter_spacing)), Ve = ei(A.font_weight, A.font_weight_value, Ve), typeof A.font_family == "string" && A.font_family ? Fe = ke.typefaceProvider(A.font_family, { fontWeight: Ve || 400 }) : Fe = "";
  {
    const et = gi(A.font_variation_settings);
    et !== L && (L = et);
  }
  We = Ot(A.text_color, 1, We), i = A.top_offset ? ee(A.top_offset) : "", o = ((Ke = A.background) == null ? void 0 : Ke.type) === "cloud", a = ((Ge = A.background) == null ? void 0 : Ge.type) === "cloud" ? A.background.paddings : void 0;
  {
    const et = A.mask, K = !!(et && (et.type === "solid" || et.type === "particles") && et.is_enabled !== !1 && et.color);
    if (ue || K ? Ne = "transparent" : Ne = void 0, fe = !1, H = void 0, re = void 0, ye = void 0, ue)
      o ? S = ou(A.background.color, 255, "transparent") : S = void 0;
    else if (et && K) {
      if (et.type === "solid")
        S = Ot(et.color);
      else if (et.type === "particles") {
        const Ce = un((Me = et.particle_size) == null ? void 0 : Me.value, 1), ze = ee(Ce * 10 / de), ce = un(et.density, 0.8), lt = Ot(et.color);
        S = void 0, H = lt, re = ze, ye = String(ce), fe = et.is_animated === !0;
      }
    } else ((Pe = A.background) == null ? void 0 : Pe.type) === "solid" ? S = Jo([A.background], I).color : S = void 0;
  }
  return (R = A.border) != null && R.stroke && A.border.stroke.color && Ot(A.border.stroke.color) !== "transparent" && tn(A.border.stroke.width) && ((Te = A.background) == null ? void 0 : Te.type) !== "cloud" ? Se = {
    color: A.border.stroke.color,
    width: A.border.stroke.width,
    corner_radius: A.border.corner_radius
  } : Se = null, c = ue ? o && A.background.corner_radius || 0 : Se ? un(Se.corner_radius, 0) : 0, g = A.text_shadow ? wu(A.text_shadow, de) : void 0, typeof A.baseline_offset == "number" && (je = A.baseline_offset), d = typeof A.baseline_offset == "number" ? void 0 : A.alignment_vertical, _ = {
    singleline: $e,
    decoration: _e,
    align: d,
    cloud: o,
    "relative-vertical-align": !!(ae && je),
    "has-particles-mask": !!H,
    "mask-animated": fe
  }, k = {
    "font-size": ee(de * 10 / V),
    "line-height": d ? "normal" : te,
    "letter-spacing": me,
    "font-weight": Ve,
    "font-family": Fe,
    "vertical-align": ae || je === void 0 ? void 0 : ee(je * 10 / de),
    top: ae && je !== void 0 ? ee(-je * 10 / de) : void 0,
    margin: a ? En(ks(a, -10 / de), I) : void 0,
    padding: a ? En(ks(a, 10 / de), I) : void 0,
    filter: ue && o && !Z ? `url(#${Q})` : g,
    color: Ne || We,
    background: S,
    opacity: ue && o && !Z ? ((ot = (oe = xn(A.background.color)) == null ? void 0 : oe.a) != null ? ot : 255) / 255 : void 0,
    /**
    * box-shadow instead of border because:
    * 1) Doesn't take space as border does
    * 2) There should not be a border-radius on line breaks, but there should be a border
    */
    "box-shadow": Se ? `inset 0 0 0 ${ee(Se.width * 10 / de)} ${Se.color}` : void 0,
    "border-radius": c ? ee(c * 10 / de) : void 0,
    "font-feature-settings": A.font_feature_settings || void 0,
    "font-variation-settings": L || void 0,
    "--divkit-text-mask-color": H,
    "--divkit-text-mask-size": re,
    "--divkit-text-mask-density": ye
  }, T(), `${ue && o ? `<svg${m("class", Bn["text-range__cloud-svg"], 0)}><defs><filter${m("id", Q, 0)}><feGaussianBlur in="SourceGraphic" result="blurred" stdDeviation="3"></feGaussianBlur><feColorMatrix in="blurred" result="withMatrix" type="matrix" values="${"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 " + gt(2 * c, !0) + " -" + gt(c, !0)}"></feColorMatrix><feBlend in="SourceGraphic" in2="withMatrix"></feBlend></filter></defs></svg>` : ""}${i ? `<span${m("class", Bn["text-range__top-offset"], 0)}${Ar({ "margin-top": i })}></span>` : ""}${Wt(qo, "Actionable").$$render(
    r,
    {
      componentContext: D,
      cls: Ht("text-range", Bn, _),
      actions: Y,
      style: Cr(k)
    },
    {},
    {
      default: () => `${H ? `<div${m("class", Bn["text-range__mask-animation"], 0)}></div><div${m("class", Bn["text-range__mask-animation"], 0)}></div><div${m("class", Bn["text-range__mask-animation"], 0)}></div><div${m("class", Bn["text-range__mask-animation"], 0)}></div><div${m("class", Bn["text-range__mask-animation"], 0)}></div><div${m("class", Bn["text-range__mask-animation"], 0)}></div>` : ""}${gt(B || "​")}`
    }
  )}`;
});
function Yo(r, t, e) {
  return r === "left" || r === "center" || r === "right" || r === "start" || r === "end" ? r === "left" ? t === "ltr" ? "start" : "end" : r === "right" ? t === "ltr" ? "end" : "start" : r : e;
}
function Ko(r, t) {
  return r === "top" || r === "center" || r === "bottom" || r === "baseline" ? r === "top" ? "start" : r === "bottom" ? "end" : r : t;
}
function Ju(r) {
  return String(r != null ? r : "");
}
function Ll(r, t) {
  return r === "source_in" || r === "source_atop" || r === "darken" || r === "lighten" || r === "multiply" || r === "screen" ? r : t;
}
function Hs(r) {
  return r.is_enabled !== 0 && r.is_enabled !== !1;
}
function qu(r, t) {
  let e;
  return function(...n) {
    e !== null && clearTimeout(e), e = setTimeout(() => {
      r.apply(this, n), e = null;
    }, t);
  };
}
const Yu = gr((r, t, e, n) => {
  var ve, Et;
  let i, o, a, c, g, d, _, k, I, T, D, B, V, A, $e, Y, ue, Z, ae, ke, le, Q, _e, de, te, me, Ve, Fe, L, We = h, Ne = () => (We(), We = p(Y, ($) => L = $), Y), Se, je = h, S = () => (je(), je = p(a, ($) => Se = $), a), fe, H = h, re = () => (H(), H = p(o, ($) => fe = $), o), ye, Ke = h, Ge = () => (Ke(), Ke = p(A, ($) => ye = $), A), Me, Pe = h, R = () => (Pe(), Pe = p(V, ($) => Me = $), V), Te, oe = h, ot = () => (oe(), oe = p(B, ($) => Te = $), B), et, K = h, Ce = () => (K(), K = p(D, ($) => et = $), D), ze, ce = h, lt = () => (ce(), ce = p(T, ($) => ze = $), T), pe, be = h, Ze = () => (be(), be = p(_, ($) => pe = $), _), Je, De = h, At = () => (De(), De = p(I, ($) => Je = $), I), Xe, q = h, Ye = () => (q(), q = p(k, ($) => Xe = $), k), dt, Le = h, tt = () => (Le(), Le = p($e, ($) => dt = $), $e), Be, yt = h, Ut = () => (yt(), yt = p(d, ($) => Be = $), d), jt, kt = h, ge = () => (kt(), kt = p(g, ($) => jt = $), g), we, Vt = h, Pt = () => (Vt(), Vt = p(c, ($) => we = $), c), St, qe = h, Yt = () => (qe(), qe = p(i, ($) => St = $), i), W, Re = h, bt = () => (Re(), Re = p(ue, ($) => W = $), ue), { componentContext: Ie } = t, { layoutParams: rt = void 0 } = t;
  const Tt = sr($r), xt = Tt.direction;
  Fe = p(xt, ($) => Ve = $);
  let He = "", nt = 12, Dt = 1.25, ft = null, Zt = "", er = "", zt = !1, tr = "start", Mt = "start", Xt = "", It = "", ct = "", pt = !1, nr = [], O = !1, rr = "", Jt, xe = [], ir = {}, Kt = "span";
  function ne($, y, U, v) {
    var ht, Dr;
    let N = [];
    if (xe.forEach(([ut, ie]) => {
      Tt.removeSvgFilter(ut, ie);
    }), xe = [], !(Array.isArray(y) && y.length || Array.isArray(U) && U.length && $)) {
      nr = [];
      return;
    }
    const Ae = $;
    let _t = y || [{ start: 0, end: Ae.length }], wt = U || [], Ct = 0, _r = [], s = [];
    _t.forEach((ut) => {
      const ie = ut.start || 0, P = ut.end || $.length, ar = {
        top_offset: 0,
        ...ut,
        start: ie,
        end: P
      };
      s.push({
        index: ie,
        range: ar,
        type: "rangeStart",
        isStart: !0
      }), s.push({
        index: P,
        range: ar,
        type: "rangeEnd"
      });
    }), wt.forEach((ut, ie) => {
      ut.start !== void 0 && ut.url && ut.start <= Ae.length && s.push({
        index: ut.indexing_direction === "reversed" ? $.length - ut.start : ut.start,
        image: ut,
        type: "image",
        arrayIndex: ie
      });
    }), s.sort((ut, ie) => ut.index === ie.index ? ut.type !== ie.type ? ut.type === "image" ? -1 : ie.type === "image" ? 1 : ut.type < ie.type ? -1 : 1 : ut.type === "image" && ie.type === "image" ? ie.arrayIndex - ut.arrayIndex : ut.type === "rangeStart" && ie.type === "rangeStart" ? ut.range.end - ie.range.end : ut.type === "rangeStart" ? 1 : ie.type === "rangeStart" ? -1 : ut.type !== "image" && ie.type !== "image" ? ut.range.start - ie.range.start : 0 : ut.index - ie.index), s.forEach((ut) => {
      var ar, yr, Bt, zr;
      let ie = ut.type === "image" ? null : ut.range, P = ut.index;
      if (P > Ct) {
        let lr = Object.assign({ ...v }, ..._r);
        _r.length && _r[_r.length - 1].start !== Ct && (lr.top_offset = 0), N.push({
          text: Ae.substring(Ct, P),
          textStyles: lr,
          actions: ut.type === "rangeEnd" && ((yr = (ar = ut.range) == null ? void 0 : ar.actions) == null ? void 0 : yr.filter(Hs)) || void 0
        });
      }
      if (ut.type === "rangeStart" && ie)
        _r.push(ie);
      else if (ut.type === "rangeEnd")
        _r = _r.filter((lr) => lr !== ut.range);
      else if (ut.type === "image") {
        let lr = Object.assign({ ...v }, ..._r), st = ee((ut.image.width && ut.image.width.value || 20) * 10 / (lr.font_size || 12)), wr = ee((ut.image.height && ut.image.height.value || 20) * 10 / (lr.font_size || 12));
        const Hr = {
          "font-size": ee((Number(lr.font_size) || 12) * 10 / nt)
        };
        let cr = "";
        const G = ut.image.tint_color, rn = Ll(ut.image.tint_mode, "source_in");
        if (G) {
          const jr = Ot(ut.image.tint_color);
          cr = Tt.addSvgFilter(jr, rn), xe.push([jr, rn]);
        }
        const Ur = {}, Or = (Bt = ut.image.accessibility) == null ? void 0 : Bt.type, qr = ((zr = ut.image.accessibility) == null ? void 0 : zr.description) || "";
        (Or === "button" || Or === "image") && qr ? Ur.role = Or : (!qr || Or === "none") && (Ur["aria-hidden"] = "true"), N.push({
          image: {
            url: ut.image.url,
            width: st,
            height: wr,
            wrapperStyle: Hr,
            svgFilterId: cr,
            preloadRequired: !!ut.image.preload_required,
            verticalAlign: ut.image.alignment_vertical,
            description: qr,
            a11yAttrs: Ur
          }
        });
      }
      Ct = P;
    }), Ct < Ae.length && N.push({
      text: Ae.substring(Ct),
      textStyles: { ...v }
    }), nr = N, O = N.some((ut) => {
      var ie;
      return "text" in ut && ((ie = ut.textStyles.background) == null ? void 0 : ie.type) === "cloud";
    }), rr = O && N.length === 1 ? Tt.genId("text-whole-bg") : "", Jt = rr ? ((Dr = (ht = xn(N[0].textStyles.background.color)) == null ? void 0 : ht.a) != null ? Dr : 255) / 255 : void 0;
  }
  Pr(() => {
    xe.forEach(([$, y]) => {
      Tt.removeSvgFilter($, y);
    });
  }), t.componentContext === void 0 && e.componentContext && Ie !== void 0 && e.componentContext(Ie), t.layoutParams === void 0 && e.layoutParams && rt !== void 0 && e.layoutParams(rt), Ie.json && (nt = 12, Dt = 1.25, ft = null, Zt = "", er = "", zt = !1, tr = "start", Mt = "start", Xt = "", ct = "", pt = !1), Yt(i = Ie.getDerivedFromVars(Ie.json.text)), re(o = Ie.getDerivedFromVars(Ie.json.ranges, void 0, !0, 3)), S(a = Ie.getDerivedFromVars(Ie.json.images)), Pt(c = Ie.getDerivedFromVars(
    {
      font_size: Ie.json.font_size,
      letter_spacing: Ie.json.letter_spacing,
      font_weight: Ie.json.font_weight,
      font_weight_value: Ie.json.font_weight_value,
      font_family: Ie.json.font_family,
      text_color: Ie.json.text_color,
      underline: Ie.json.underline,
      strike: Ie.json.strike,
      line_height: Ie.json.line_height,
      text_shadow: Ie.json.text_shadow,
      font_feature_settings: Ie.json.font_feature_settings,
      font_variation_settings: Ie.json.font_variation_settings
    },
    void 0,
    !0,
    1
  )), ge(g = Ie.getDerivedFromVars(Ie.json.font_size)), Ut(d = Ie.getDerivedFromVars(Ie.json.line_height)), Ze(_ = Ie.getDerivedFromVars(Ie.json.max_lines)), Ye(k = Ie.getDerivedFromVars(Ie.json.text_alignment_horizontal)), At(I = Ie.getDerivedFromVars(Ie.json.text_alignment_vertical)), lt(T = Ie.getDerivedFromVars(Ie.json.text_color)), Ce(D = Ie.getDerivedFromVars(Ie.json.focused_text_color)), ot(B = Ie.getDerivedFromVars(Ie.json.truncate)), R(V = Ie.getDerivedFromVars(Ie.json.text_gradient)), Ge(A = Ie.getDerivedFromVars(Ie.json.selectable)), tt($e = Ie.getDerivedFromVars(Ie.json.auto_ellipsize)), Ne(Y = Ie.getDerivedFromVars(Ie.json.paddings)), bt(ue = Ie.getDerivedFromVars(Ie.json.heading_type)), Z = (() => {
    const $ = W;
    if ($ && typeof $ == "string") {
      const y = $.toLowerCase();
      if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(y))
        return y;
    }
    return "span";
  })(), Kt = Z !== "span" ? "div" : "span", typeof Ie.json.text == "string" ? He = Ju(St) : (He = "", Ie.logError(C(new Error("Incorrect text value type"))));
  {
    let $ = "";
    if (Me) {
      const y = Jo([Me], Ve);
      y.image && ($ = y.image);
    }
    ct = $;
  }
  ir = ct ? { ...we, text_color: "" } : we;
  {
    nt = un(jt, nt);
    const $ = Ie.json.responsive;
    if ($ && typeof $ == "object" && typeof window < "u") {
      const y = window.matchMedia("(max-width: 767px)").matches, U = window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches;
      y && ((ve = $.mobile) != null && ve.font_size) ? nt = $.mobile.font_size : U && ((Et = $.tablet) != null && Et.font_size) && (nt = $.tablet.font_size);
    }
  }
  {
    const $ = Be;
    tn($) ? (Dt = Number($) / nt, ft = Dt) : ft = null;
  }
  ae = pe === 1;
  {
    let $ = "", y = "", U = !1;
    if (pe && pe > 1) {
      const v = Number(pe);
      $ = v * Dt + "em", y = v, U = !0;
    } else dt && pe !== 1 && (U = !0);
    Zt = $, er = y, zt = U;
  }
  tr = Yo(Xe, Ve, tr), Mt = Ko(Je, Mt), ke = !fe || He && fe.length === 1 && fe[0] && (!fe[0].start || fe[0].start === 0) && (!fe[0].end || typeof fe[0].end == "number" && fe[0].end >= He.length), le = !!(!ct && ze) != !!(fe && fe[0] && fe[0].text_color);
  {
    let $ = "";
    pe && ke && le && ($ = Ot(ze || fe && fe[0] && fe[0].text_color, 1, Xt)), Xt = $;
  }
  return It = Ot(et, 1, It), Q = Te === "none" ? "none" : "", pt = Fr(ye, pt), ne(He, fe, Se, ir), _e = {
    singleline: ae,
    multiline: zt,
    halign: tr,
    valign: Mt,
    truncate: Q,
    "has-focus-color": !!It
  }, de = {
    gradient: !!ct,
    "has-cloud-bg": O
  }, te = {
    "font-size": ee(nt),
    "line-height": Dt,
    "max-height": Zt,
    "-webkit-line-clamp": er,
    color: Xt,
    "background-image": ct,
    "--divkit-text-focus-color": It
  }, me = En(ks(Qn(L, {}) || {}, 10 / nt), Ve), Fe(), We(), je(), H(), Ke(), Pe(), oe(), K(), ce(), be(), De(), q(), Le(), yt(), kt(), Vt(), qe(), Re(), `${Wt(Lr, "Outer").$$render(
    r,
    {
      cls: Ht("text", ji, _e) + " " + (pt ? Jr.root__selectable : Jr.root__unselectable),
      componentContext: Ie,
      layoutParams: rt,
      containerElement: Kt
    },
    {},
    {
      default: () => `${O ? `${(($) => $ ? `<${Z}${m("class", Ht("text__inner", ji, { ...de, "cloud-bg": !0 }), 0)}${m(
        "style",
        Cr({
          ...te,
          padding: me,
          filter: rr ? `url(#${rr})` : void 0,
          opacity: Jt
        }),
        0
      )}>${Zn($) ? "" : `${Vr(nr, (y) => `${"text" in y ? `${y.text ? `${Wt(cs, "TextRangeView").$$render(
        r,
        {
          componentContext: Ie,
          text: y.text,
          rootFontSize: nt,
          textStyles: y.textStyles,
          singleline: ae,
          cloudBg: !0,
          cloudBgId: rr
        },
        {},
        {}
      )}` : ""}` : `${y.image ? `<span${m("style", Cr(y.image.wrapperStyle), 0)}><span${m(
        "class",
        Ht("text__image-wrapper", ji, {
          align: y.image.verticalAlign,
          crop: ft !== null
        }),
        0
      )}${m(
        "style",
        Cr({
          width: y.image.width,
          height: ft && y.image.verticalAlign !== "baseline" ? ft + "em" : void 0
        }),
        0
      )}></span></span>` : ""}`}`)}`}${Zn($) ? "" : `</${$}>`}` : "")(Z)}` : ""} ${(($) => $ ? `<${Z}${m("class", Ht("text__inner", ji, de), 0)}${m("style", Cr(te), 0)}>${Zn($) ? "" : `${nr.length ? `${Vr(nr, (y) => `${"text" in y ? `${y.text ? `${Wt(cs, "TextRangeView").$$render(
        r,
        {
          componentContext: Ie,
          text: y.text,
          rootFontSize: nt,
          textStyles: y.textStyles,
          singleline: ae,
          actions: y.actions,
          customLineHeight: ft
        },
        {},
        {}
      )}` : ""}` : `${y.image ? `<span${m("style", Cr(y.image.wrapperStyle), 0)}><span${m(
        "class",
        Ht("text__image-wrapper", ji, {
          align: y.image.verticalAlign,
          crop: ft !== null
        }),
        0
      )}${m(
        "style",
        Cr({
          width: y.image.width,
          height: ft && y.image.verticalAlign !== "baseline" ? ft + "em" : void 0
        }),
        0
      )}><img${Di(
        [
          {
            class: Zr(ji.text__image)
          },
          {
            src: Zr(y.image.url)
          },
          {
            loading: Zr(y.image.preloadRequired ? "eager" : "lazy")
          },
          { decoding: "async" },
          {
            alt: Zr(y.image.description)
          },
          Ii(y.image.a11yAttrs),
          {
            style: Zr(Cr({
              height: y.image.height,
              filter: y.image.svgFilterId ? `url(#${y.image.svgFilterId})` : void 0
            }))
          }
        ],
        {}
      )}></span></span>` : ""}`}`)}` : `${Wt(cs, "TextRangeView").$$render(
        r,
        {
          componentContext: Ie,
          text: He,
          rootFontSize: nt,
          textStyles: ir,
          singleline: ae,
          customLineHeight: ft
        },
        {},
        {}
      )}`}`}${Zn($) ? "" : `</${$}>`}` : "")(Z)}`
    }
  )}`;
}), Ku = "appkit-container", Zu = "appkit-container_wrap", Xu = "appkit-container_overflow_visible", Qu = "appkit-container_orientation_vertical", ed = "appkit-container_valign_start", td = "appkit-container_valign_center", rd = "appkit-container_valign_end", nd = "appkit-container_halign_start", id = "appkit-container_halign_center", od = "appkit-container_halign_end", sd = "appkit-container_orientation_horizontal", ad = "appkit-container_orientation_overlap", ld = {
  container: Ku,
  container_wrap: Zu,
  container_overflow_visible: Xu,
  container_orientation_vertical: Qu,
  container_valign_start: ed,
  container_valign_center: td,
  container_valign_end: rd,
  "container_valign_space-between": "appkit-container_valign_space-between",
  "container_valign_space-around": "appkit-container_valign_space-around",
  "container_valign_space-evenly": "appkit-container_valign_space-evenly",
  container_halign_start: nd,
  container_halign_center: id,
  container_halign_end: od,
  "container_halign_space-between": "appkit-container_halign_space-between",
  "container_halign_space-around": "appkit-container_halign_space-around",
  "container_halign_space-evenly": "appkit-container_halign_space-evenly",
  container_orientation_horizontal: sd,
  container_orientation_overlap: ad,
  "container_fixed-container": "appkit-container_fixed-container",
  "container_responsive-mobile-vertical": "appkit-container_responsive-mobile-vertical",
  "container_responsive-mobile-horizontal": "appkit-container_responsive-mobile-horizontal",
  "container_responsive-mobile-has-height": "appkit-container_responsive-mobile-has-height",
  "container_responsive-tablet-vertical": "appkit-container_responsive-tablet-vertical",
  "container_responsive-tablet-horizontal": "appkit-container_responsive-tablet-horizontal",
  "container_responsive-tablet-has-height": "appkit-container_responsive-tablet-has-height"
};
function ja(r) {
  return {
    top: Number(r == null ? void 0 : r.top) || 0,
    right: Number(r == null ? void 0 : r.right) || 0,
    bottom: Number(r == null ? void 0 : r.bottom) || 0,
    left: Number(r == null ? void 0 : r.left) || 0
  };
}
function ka(r, t, e) {
  const n = ((t == null ? void 0 : t.margins.left) || 0) + ((t == null ? void 0 : t.margins.right) || 0), i = ((t == null ? void 0 : t.margins.top) || 0) + ((t == null ? void 0 : t.margins.bottom) || 0);
  t != null && t.show_at_start && (e ? r.top = t.style.height + i : r.left = t.style.width + n), t != null && t.show_at_end && (e ? r.bottom = t.style.height + i : r.right = t.style.width + n);
}
function cd(r, t, e) {
  const n = {};
  return ka(n, t, r === "vertical"), ka(n, e, r === "horizontal"), n;
}
function ud({
  orientation: r,
  separator: t,
  lineSeparator: e,
  itemSpacing: n,
  lineSpacing: i
}) {
  let o;
  const a = ((t == null ? void 0 : t.margins.left) || 0) + ((t == null ? void 0 : t.margins.right) || 0), c = ((t == null ? void 0 : t.margins.top) || 0) + ((t == null ? void 0 : t.margins.bottom) || 0), g = ((e == null ? void 0 : e.margins.left) || 0) + ((e == null ? void 0 : e.margins.right) || 0), d = ((e == null ? void 0 : e.margins.top) || 0) + ((e == null ? void 0 : e.margins.bottom) || 0);
  return r === "horizontal" ? o = [
    e != null && e.show_between ? e.style.height + d : i,
    t != null && t.show_between ? t.style.width + a : n
  ] : o = [
    t != null && t.show_between ? t.style.height + c : n,
    e != null && e.show_between ? e.style.width + g : i
  ], o.map(ee).join(" ");
}
function dd(r) {
  var e;
  const t = (e = r.width) == null ? void 0 : e.type;
  return t !== "wrap_content" && t !== "fixed";
}
function fd(r) {
  var e;
  return ((e = r.height) == null ? void 0 : e.type) === "match_parent";
}
function gd(r, t) {
  return r === "vertical" || r === "horizontal" || r === "overlap" ? r : t;
}
function pd(r) {
  var t, e, n;
  return {
    width: Sr((t = r.item_width) == null ? void 0 : t.value, 10),
    height: Sr((e = r.item_height) == null ? void 0 : e.value, 10),
    radius: Sr((n = r.corner_radius) == null ? void 0 : n.value, 5)
  };
}
function _d(r) {
  var e;
  const t = Sr((e = r.radius) == null ? void 0 : e.value, 10) * 2;
  return {
    width: t,
    height: t,
    radius: t
  };
}
function hd(r, t, e) {
  var g;
  const n = {}, i = t.stroke || (e == null ? void 0 : e.stroke), o = i != null && i.color ? Ot(i.color) : "", a = i != null && i.width ? Number((g = i.width) != null ? g : 1) : "";
  n.width = r.width, n.height = r.height, n.borderRadius = r.radius;
  const c = t.background_color || (e == null ? void 0 : e.color);
  return n.background = Ot(c), o && a && (n.boxShadow = `inset 0 0 0 ${ee(a)} ${o}`), n;
}
function kn(r, t, e) {
  if (!r || !r.shape || !r.shape.type || !t.includes(r.shape.type) || r.type !== "shape_drawable")
    return e;
  let n;
  if (r.shape.type === "rounded_rectangle")
    n = pd(r.shape);
  else if (r.shape.type === "circle")
    n = _d(r.shape);
  else
    return e;
  return hd(n, r.shape, {
    color: r.color,
    stroke: r.stroke
  });
}
let Ui;
function xa() {
  if (typeof document > "u" && (Ui = !0), Ui !== void 0)
    return Ui;
  const r = document.createElement("div");
  return r.style.position = "absolute", r.style.display = "flex", r.style.flexDirection = "column", r.style.gap = "1px", r.appendChild(document.createElement("div")), r.appendChild(document.createElement("div")), document.body.appendChild(r), Ui = r.scrollHeight === 1, document.body.removeChild(r), Ui;
}
function md(r, t) {
  return r === "top" || r === "center" || r === "bottom" || r === "baseline" || r === "space-between" || r === "space-around" || r === "space-evenly" ? r === "top" ? "start" : r === "bottom" ? "end" : r : t;
}
function bd(r, t, e) {
  return r === "left" || r === "center" || r === "right" || r === "space-between" || r === "space-around" || r === "space-evenly" || r === "start" || r === "end" ? r === "left" ? t === "ltr" ? "start" : "end" : r === "right" ? t === "ltr" ? "end" : "start" : r : e;
}
function vd() {
}
function Hn(r) {
  return {
    subscribe(t) {
      return t(r), vd;
    }
  };
}
function Zo(r, t, e, n) {
  const i = [], o = n.prototypes;
  return o && r.forEach((a, c) => {
    if (a === null || typeof a != "object")
      return;
    const g = t.preparePrototypeVariables(n.data_element_name || "it", a, c);
    let d, _;
    for (let k = 0; k < o.length; ++k) {
      const I = o[k];
      if (!I.div)
        continue;
      if (I.selector === void 0) {
        d = I.div, _ = e.getJsonWithVars(I.id, g);
        break;
      }
      if (e.getJsonWithVars(I.selector, g)) {
        d = I.div, _ = e.getJsonWithVars(I.id, g);
        break;
      }
    }
    d && i.push({
      div: d,
      id: _,
      vars: g,
      key: _ || { index: c, data: a }
    });
  }), i;
}
const Gi = {
  "container-separator": "appkit-container-separator",
  "container-separator__item": "appkit-container-separator__item",
  "container-separator__shape": "appkit-container-separator__shape"
};
function yd(r, t) {
  let e = 0, n, i = !1;
  return function() {
    const o = Date.now();
    return !e || Math.abs(o - e) > t ? (e = o, n = r.apply(this, arguments)) : (i || (i = !0, setTimeout(() => {
      i = !1, n = r.apply(this, arguments);
    }, t)), n);
  };
}
function wd(r) {
  const t = r.getBoundingClientRect(), e = getComputedStyle(r);
  return {
    top: t.top - parseFloat(e.marginTop),
    right: t.right + parseFloat(e.marginRight),
    bottom: t.bottom + parseFloat(e.marginBottom),
    left: t.left - parseFloat(e.marginLeft)
  };
}
const $d = 10;
function us(r, t, e, n, i, o) {
  const a = t.margins.left, c = t.margins.right, g = t.margins.top, d = t.margins.bottom;
  o ? r.push({
    top: e.bottom + g,
    left: i.left + a,
    width: Math.max(0, i.right - i.left - a - c),
    height: n.top - e.bottom - g - d,
    style: t.style
  }) : r.push({
    top: i.top + g,
    left: e.right + a,
    width: n.left - e.right - a - c,
    height: Math.max(0, i.bottom - i.top - g - d),
    style: t.style
  });
}
function Ea(r, t, e, n, i, o) {
  const a = {
    top: Math.min(...e.map((c) => c.top)),
    right: Math.max(...e.map((c) => c.right)),
    bottom: Math.max(...e.map((c) => c.bottom)),
    left: Math.min(...e.map((c) => c.left))
  };
  if (t != null && t.show_at_start) {
    let c, g;
    i === "space-around" || i === "space-evenly" ? (c = o.left - t.style.width, g = o.top - t.style.height) : (c = e[0].left - t.style.width - t.margins.left - t.margins.right, g = e[0].top - t.style.height - t.margins.top - t.margins.bottom), us(
      r,
      t,
      // only right and bottom is used
      { top: 0, right: c, bottom: g, left: 0 },
      e[0],
      a,
      n
    );
  }
  if (t != null && t.show_between)
    for (let c = 0; c < e.length - 1; ++c)
      us(r, t, e[c], e[c + 1], a, n);
  if (t != null && t.show_at_end) {
    const c = e[e.length - 1];
    let g, d;
    i === "space-around" || i === "space-evenly" ? (g = o.bottom + t.style.height, d = o.right + t.style.width) : (g = c.bottom + t.style.height + t.margins.top + t.margins.bottom, d = c.right + t.style.width + t.margins.left + t.margins.right), us(
      r,
      t,
      c,
      // only top and left is used
      { top: g, right: 0, bottom: 0, left: d },
      a,
      n
    );
  }
}
const jd = gr((r, t, e, n) => {
  let i, { orientation: o } = t, { separator: a } = t, { lineSeparator: c } = t, { contentHAlign: g } = t, { contentVAlign: d } = t, { direction: _ } = t;
  const k = yd($e, $d);
  let I = [], T, D = !1, B = null, V = null;
  function A(Y) {
    Y.some((ue) => {
      var ae;
      const Z = (ae = ue.target) == null ? void 0 : ae.classList;
      return !(Z != null && Z.contains(Gi["container-separator__shape"])) && !(Z != null && Z.contains(Gi["container-separator"]));
    }) && k();
  }
  function $e() {
    if (!i)
      return;
    const Y = i.getBoundingClientRect(), ue = window.getComputedStyle(i), Z = {
      top: Y.top + parseFloat(ue.paddingTop),
      right: Y.right - parseFloat(ue.paddingRight),
      bottom: Y.bottom - parseFloat(ue.paddingBottom),
      left: Y.left + parseFloat(ue.paddingLeft)
    };
    I = [];
    let ae = [...i.children].filter((Q) => Q !== T && Q instanceof HTMLElement && !Q.classList.contains(ws.outer__border) && getComputedStyle(Q).display !== "none"), ke = [];
    for (; ae.length; ) {
      const Q = [], _e = ae.shift();
      Q.push(_e);
      let de = _e.getBoundingClientRect(), te = de.left, me = de.right, Ve = de.bottom;
      for (; ae.length; ) {
        let Fe = ae[0], L = Fe.getBoundingClientRect();
        if (o === "vertical") {
          if (L.top < Ve)
            break;
        } else if (_ === "ltr" ? L.left < me : L.right > te)
          break;
        me = Math.max(me, L.right), te = Math.min(te, L.left), Ve = Math.max(Ve, L.bottom), Q.push(Fe), ae.shift();
      }
      ke.push(Q);
    }
    const le = [];
    ke.forEach((Q) => {
      const _e = Q.map((te) => wd(te));
      _ === "rtl" && o === "horizontal" && _e.reverse(), a && Ea(
        I,
        a,
        _e,
        o === "vertical",
        o === "vertical" ? d : g,
        Z
      );
      const de = {
        top: Math.min(..._e.map((te) => te.top)),
        right: Math.max(..._e.map((te) => te.right)),
        bottom: Math.max(..._e.map((te) => te.bottom)),
        left: Math.min(..._e.map((te) => te.left))
      };
      le.push(de);
    }), _ === "rtl" && o === "vertical" && le.reverse(), c && Ea(
      I,
      c,
      le,
      o === "horizontal",
      o === "vertical" ? g : d,
      Z
    ), I.forEach((Q) => {
      Q.top -= Y.top, Q.left -= Y.left;
    });
  }
  return Pr(() => {
    D = !1;
  }), t.orientation === void 0 && e.orientation && o !== void 0 && e.orientation(o), t.separator === void 0 && e.separator && a !== void 0 && e.separator(a), t.lineSeparator === void 0 && e.lineSeparator && c !== void 0 && e.lineSeparator(c), t.contentHAlign === void 0 && e.contentHAlign && g !== void 0 && e.contentHAlign(g), t.contentVAlign === void 0 && e.contentVAlign && d !== void 0 && e.contentVAlign(d), t.direction === void 0 && e.direction && _ !== void 0 && e.direction(_), i = null, (D && i || B || V) && (B && (B.disconnect(), B = null), V && (V.disconnect(), V = null), D && i && (typeof MutationObserver < "u" && (B = new MutationObserver(A), B.observe(i, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  })), typeof ResizeObserver < "u" && (V = new ResizeObserver(k), V.observe(i)))), D && i && k(), ` <div${m("class", Gi["container-separator"], 0)}${m("this", T, 0)}>${Vr(I, (Y) => `<div${m("class", Gi["container-separator__item"], 0)}${Ar({
    left: `${Y.left}px`,
    top: `${Y.top}px`,
    width: `${Y.width}px`,
    height: `${Y.height}px`
  })}><div${m("class", Gi["container-separator__shape"], 0)}${Ar({
    width: `${Y.style.width}px`,
    height: `${Y.style.height}px`,
    "border-radius": `${Y.style.borderRadius}px`,
    background: Y.style.background,
    "box-shadow": Y.style.boxShadow
  })}></div> </div>`)}</div>`;
}), kd = {
  start: "start",
  center: "center",
  end: "end",
  // 'space-*' values doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, xd = {
  start: "start",
  center: "center",
  end: "end",
  baseline: "baseline",
  // 'space-*' doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, Aa = ["rounded_rectangle", "circle"], Ed = gr((r, t, e, n) => {
  var nr, O, rr, Jt, xe, ir, Kt, ne, ve, Et, $;
  let i, o, a, c, g, d, _, k, I, T, D, B, V, A, $e, Y, ue, Z, ae, ke, le, Q, _e, de, te, me = h, Ve = () => (me(), me = p($e, (y) => te = y), $e), Fe, L = h, We = () => (L(), L = p(ue, (y) => Fe = y), ue), Ne, Se = h, je = () => (Se(), Se = p(Y, (y) => Ne = y), Y), S, fe = h, H = () => (fe(), fe = p(A, (y) => S = y), A), re, ye = h, Ke = () => (ye(), ye = p(V, (y) => re = y), V), Ge, Me = h, Pe = () => (Me(), Me = p(B, (y) => Ge = y), B), R, Te = h, oe = () => (Te(), Te = p(I, (y) => R = y), I), ot, et = h, K = () => (et(), et = p(k, (y) => ot = y), k), Ce, ze = h, ce = () => (ze(), ze = p(D, (y) => Ce = y), D), lt, pe = h, be = () => (pe(), pe = p(T, (y) => lt = y), T), Ze, Je, De, At = h, Xe = () => (At(), At = p(_, (y) => De = y), _), q, Ye = h, dt = () => (Ye(), Ye = p(d, (y) => q = y), d), Le, tt = h, Be = () => (tt(), tt = p(bt, (y) => Le = y), bt), yt, Ut = h, jt = () => (Ut(), Ut = p(g, (y) => yt = y), g), kt, ge = h, we = () => (ge(), ge = p(c, (y) => kt = y), c), Vt, Pt = h, St = () => (Pt(), Pt = p(a, (y) => Vt = y), a), { componentContext: qe } = t, { layoutParams: Yt = void 0 } = t;
  const W = sr($r), Re = W.direction;
  Je = p(Re, (y) => Ze = y);
  let bt, Ie = "vertical", rt = "start", Tt = "start", xt = null, He = null, nt, Dt = {}, ft = 0, Zt = 0, er = !1;
  function zt() {
    Ie = "vertical", rt = "start", Tt = "start", nt = void 0, ft = 0, Zt = 0, er = !1;
  }
  function tr(y) {
    qe = Xt = {
      ...qe,
      json: {
        ...qe.json,
        items: y.filter(zn)
      }
    };
  }
  let Mt = [], Xt, It = {}, ct, pt;
  Pr(() => {
    Mt.forEach((y) => {
      y.destroy();
    });
  }), t.componentContext === void 0 && e.componentContext && qe !== void 0 && e.componentContext(qe), t.layoutParams === void 0 && e.layoutParams && Yt !== void 0 && e.layoutParams(Yt), i = qe.origJson, i && zt(), o = qe.json.items, St(a = typeof ((nr = qe.json.item_builder) == null ? void 0 : nr.data) == "string" ? qe.getDerivedFromVars((O = qe.json.item_builder) == null ? void 0 : O.data, void 0, !0) : (rr = qe.json.item_builder) != null && rr.data ? Hn(qe.json.item_builder.data) : void 0), we(c = qe.getDerivedFromVars(qe.json.orientation)), jt(g = qe.getDerivedFromVars(qe.json.layout_mode)), dt(d = qe.getDerivedFromVars(qe.json.content_alignment_vertical)), Xe(_ = qe.getDerivedFromVars(qe.json.content_alignment_horizontal)), K(k = qe.getDerivedFromVars(qe.json.separator)), oe(I = qe.getDerivedFromVars(qe.json.line_separator)), be(T = qe.getDerivedFromVars(qe.json.item_spacing)), ce(D = qe.getDerivedFromVars(qe.json.line_spacing)), Pe(B = qe.getDerivedFromVars(qe.json.aspect)), Ke(V = qe.getDerivedFromVars(qe.json.width)), H(A = qe.getDerivedFromVars(qe.json.height)), Ve($e = qe.getDerivedFromVars(qe.json.clip_to_bounds)), je(Y = qe.getDerivedFromVars(qe.json.max_width)), We(ue = qe.getDerivedFromVars(qe.json.responsive));
  {
    let y = [];
    if (qe.json.item_builder && Array.isArray(Vt) && Array.isArray(qe.json.item_builder.prototypes)) {
      const Ae = qe.json.item_builder;
      y = Zo(Vt, W, qe, Ae);
    } else
      y = (Array.isArray(o) && o || []).map((Ae, _t) => ({
        div: Ae,
        key: Ae.id || { index: _t, data: Ae }
      }));
    const U = new Set(Mt), v = /* @__PURE__ */ new Map();
    let N = !1;
    Xt === qe && Mt.forEach((Ae) => {
      Ae.key && (typeof Ae.key == "string" && v.has(Ae.key) ? N || (N = !0, qe.logError(C(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: Ae.key } }))) : v.set(
        typeof Ae.key == "string" ? Ae.key : Ae.key.index,
        Ae
      ));
    }), Mt = y.map((Ae, _t) => {
      let wt = !N && v.get(Ae.id), Ct = v.get(_t);
      return !wt && !Ae.id && typeof Ae.key == "object" && typeof (Ct == null ? void 0 : Ct.key) == "object" && Oi(Ct.key.data, Ae.key.data) && (wt = Ct), wt ? (U.delete(wt), wt) : qe.produceChildContext(Ae.div, {
        path: _t,
        variables: Ae.vars,
        id: Ae.id,
        key: Ae.key
      });
    });
    for (const Ae of U)
      Ae.destroy();
    Xt = qe;
  }
  {
    let y = [];
    Mt.forEach((U) => {
      y.push(qe.getDerivedFromVars({
        width: U.json.width,
        height: U.json.height
      }));
    }), Be(bt = zi(y, (U) => [...U]));
  }
  if (Ie = gd(kt, Ie), Z = yt === "wrap", ae = Ie !== "horizontal" && !Z, ke = Ie !== "vertical" && !Z, le = Ie === "overlap" && !Le.every(dd), Q = Ie === "overlap" && !Le.every(fd), rt = md(q, rt), Tt = bd(De, Ze, Tt), ft = Sr(lt, ft), Zt = Sr(Ce, Zt), ot != null && ot.style && Ie !== "overlap" && xa()) {
    const y = kn(ot.style, Aa, (xt == null ? void 0 : xt.style) || null);
    y ? (xt = {
      show_at_start: !!((Jt = ot.show_at_start) != null && Jt),
      show_at_end: !!((xe = ot.show_at_end) != null && xe),
      show_between: !!((ir = ot.show_between) == null || ir),
      style: y,
      margins: ja(ot.margins)
    }, xt.show_between && ft && qe.logError(C(new Error("item_spacing will be ignored due to the 'separator' property."), { level: "warn" }))) : xt = null;
  } else
    xt = null;
  if (R != null && R.style && Ie !== "overlap" && xa()) {
    const y = kn(R.style, Aa, (He == null ? void 0 : He.style) || null);
    y ? (He = {
      show_at_start: !!((Kt = R.show_at_start) != null && Kt),
      show_at_end: !!((ne = R.show_at_end) != null && ne),
      show_between: !!((ve = R.show_between) == null || ve),
      style: y,
      margins: ja(R.margins)
    }, He.show_between && Zt && qe.logError(C(new Error("line_spacing will be ignored due to the 'line_separator' property."), { level: "warn" }))) : He = null;
  } else
    He = null;
  _e = xt || He ? cd(Ie, xt, He) : null;
  {
    const y = Ge == null ? void 0 : Ge.ratio;
    y && tn(y) ? nt = y : nt = void 0;
  }
  {
    let y = {};
    Ie === "overlap" && (y.overlapParent = !0), Ie !== "horizontal" && (y.parentHAlign = Z ? "start" : kd[Tt]), Ie !== "vertical" && (y.parentVAlign = Z ? "start" : xd[rt]);
    const U = (re == null ? void 0 : re.type) === "wrap_content" || (re == null ? void 0 : re.type) === "match_parent" && (Yt == null ? void 0 : Yt.parentHorizontalWrapContent), v = !S || S.type === "wrap_content" || S.type === "match_parent" && (Yt == null ? void 0 : Yt.parentVerticalWrapContent);
    !ae && U && (y.parentHorizontalWrapContent = !0), !nt && !ke && v && (y.parentVerticalWrapContent = !0), U || (y.parentContainerKnownWidth = !0), v || (y.parentContainerKnownHeight = !0), y.stretchWidth = le, y.stretchHeight = Q, Ie === "horizontal" && (y.parentContainerOrientation = "horizontal"), Ie === "vertical" && (y.parentContainerOrientation = "vertical"), Z && (y.parentContainerWrap = !0), Dt = Xn(y, Dt);
  }
  er = (Ne == null ? void 0 : Ne.type) === "fixed";
  {
    let y, U;
    if (ct = void 0, pt = void 0, Fe) {
      const v = Fe == null ? void 0 : Fe.mobile, N = Fe == null ? void 0 : Fe.tablet;
      if (v != null && v.orientation && (y = String(v.orientation)), N != null && N.orientation && (U = String(N.orientation)), ((Et = v == null ? void 0 : v.height) == null ? void 0 : Et.type) === "fixed" && v.height.value !== void 0) {
        const Ae = Sr(v.height.value, 0);
        ct = Ae > 0 ? Ae : void 0;
      }
      if ((($ = N == null ? void 0 : N.height) == null ? void 0 : $.type) === "fixed" && N.height.value !== void 0) {
        const Ae = Sr(N.height.value, 0);
        pt = Ae > 0 ? Ae : void 0;
      }
    }
    It = {
      orientation: Ie,
      valign: rt,
      halign: Tt,
      wrap: Z,
      overflow: te === !1 || te === 0 ? "visible" : void 0,
      "fixed-container": er,
      "responsive-mobile-vertical": y === "vertical",
      "responsive-mobile-horizontal": y === "horizontal",
      "responsive-tablet-vertical": U === "vertical",
      "responsive-tablet-horizontal": U === "horizontal",
      "responsive-mobile-has-height": ct !== void 0,
      "responsive-tablet-has-height": pt !== void 0
    };
  }
  return de = {
    gap: xt || He || ft || Zt ? ud({
      orientation: Ie,
      separator: xt,
      lineSeparator: He,
      itemSpacing: ft,
      lineSpacing: Zt
    }) : void 0,
    "aspect-ratio": nt,
    "--responsive-mobile-height": ct !== void 0 ? ee(ct) : void 0,
    "--responsive-tablet-height": pt !== void 0 ? ee(pt) : void 0
  }, me(), L(), Se(), fe(), ye(), Me(), Te(), et(), ze(), pe(), Je(), At(), Ye(), tt(), Ut(), ge(), Pt(), `${Wt(Lr, "Outer").$$render(
    r,
    {
      cls: Ht("container", ld, It),
      componentContext: qe,
      layoutParams: Yt,
      style: de,
      additionalPaddings: _e,
      heightByAspect: !!nt,
      parentOf: Mt,
      replaceItems: tr
    },
    {},
    {
      default: () => `${Vr(Mt, (y) => `${Wt(gn, "Unknown").$$render(
        r,
        {
          componentContext: y,
          layoutParams: Dt
        },
        {},
        {}
      )}`)} ${xt || He ? `${Wt(jd, "ContainerSeparators").$$render(
        r,
        {
          direction: Ze,
          separator: xt,
          lineSeparator: He,
          orientation: Ie,
          contentHAlign: Tt,
          contentVAlign: rt
        },
        {},
        {}
      )}` : ""}`
    }
  )}`;
}), Ad = "appkit-separator", Cd = "appkit-separator_orientation_horizontal", Vd = "appkit-separator_orientation_vertical", Fd = "appkit-separator__inner", Ca = {
  separator: Ad,
  separator_orientation_horizontal: Cd,
  separator_orientation_vertical: Vd,
  separator__inner: Fd
};
function Ws(r, t) {
  return r === "vertical" || r === "horizontal" ? r : t;
}
const Sd = gr((r, t, e, n) => {
  let i, o, a, c, g, d, _, k, I = h, T = () => (I(), I = p(o, (Y) => k = Y), o), { componentContext: D } = t, { layoutParams: B = void 0 } = t, V = "horizontal", A = "rgba(0,0,0,0.08)";
  function $e() {
    V = "horizontal", A = "rgba(0,0,0,0.08)";
  }
  return t.componentContext === void 0 && e.componentContext && D !== void 0 && e.componentContext(D), t.layoutParams === void 0 && e.layoutParams && B !== void 0 && e.layoutParams(B), i = D.origJson, i && $e(), T(o = D.getDerivedFromVars(D.json.delimiter_style)), V = Ws(k == null ? void 0 : k.orientation, V), a = !(k != null && k.color && (k.color === "transparent" || k.color.length === 9 && k.color.indexOf("#00") === 0)), A = Ot(k == null ? void 0 : k.color, 1, A), c = V === "horizontal" ? "100%" : ee(1), g = V === "horizontal" ? ee(1) : "100%", d = { background: A, width: c, height: g }, _ = { orientation: V }, I(), `${Wt(Lr, "Outer").$$render(
    r,
    {
      cls: Ht("separator", Ca, _),
      componentContext: D,
      layoutParams: B
    },
    {},
    {
      default: () => `${a ? `<span${m("class", Ca.separator__inner, 0)}${m("style", Cr(d), 0)}></span>` : ""}`
    }
  )}`;
}), Dd = "appkit-image", Id = "appkit-image__image", Td = "appkit-image_error", Md = "appkit-image_aspect", Pd = "appkit-image_loaded", Va = {
  image: Dd,
  "image_is-width-content": "appkit-image_is-width-content",
  "image_is-height-content": "appkit-image_is-height-content",
  image__image: Id,
  image_error: Td,
  "image_is-rtl-mirror": "appkit-image_is-rtl-mirror",
  image_aspect: Md,
  "image_aspect-content": "appkit-image_aspect-content",
  image_loaded: Pd,
  "divkit-image-appearance": "appkit-divkit-image-appearance",
  "image_before-appearance": "appkit-image_before-appearance"
};
function zd(r, t, e) {
  const n = r.content_alignment_horizontal, i = r.content_alignment_vertical;
  return n && n !== "left" && n !== "center" && n !== "right" && n !== "start" && n !== "end" || i && i !== "top" && i !== "center" && i !== "bottom" ? e : zl({
    content_alignment_horizontal: n,
    content_alignment_vertical: i
  }, t);
}
function Hl(r) {
  return r.startsWith("data:") ? $s(r) : `data:image/jpg;base64,${$s(r)}`;
}
const Fa = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Od = "empty://", Nd = "rgba(0,0,0,0.08)", Ji = 0, Sa = 1, ds = 2, Da = /\.gif($|\?)/i, Bd = "data:image/gif", Ia = 'A Gif image was used for the "Image" component. The animation will be played on the web platform, but it does not match the behavior of other platforms.', Ta = gr((r, t, e, n) => {
  var y;
  let i, o, a, c, g, d, _, k, I, T, D, B, V, A, $e, Y, ue, Z, ae, ke, le, Q, _e, de, te = h, me = () => (te(), te = p(Y, (U) => de = U), Y), Ve, Fe, L, We = h, Ne = () => (We(), We = p($e, (U) => L = U), $e), Se, je = h, S = () => (je(), je = p(A, (U) => Se = U), A), fe, H = h, re = () => (H(), H = p(V, (U) => fe = U), V), ye, Ke = h, Ge = () => (Ke(), Ke = p(T, (U) => ye = U), T), Me, Pe = h, R = () => (Pe(), Pe = p(B, (U) => Me = U), B), Te, oe = h, ot = () => (oe(), oe = p(D, (U) => Te = U), D), et, K = h, Ce = () => (K(), K = p(I, (U) => et = U), I), ze, ce = h, lt = () => (ce(), ce = p(k, (U) => ze = U), k), pe, be = h, Ze = () => (be(), be = p(_, (U) => pe = U), _), Je, De = h, At = () => (De(), De = p(d, (U) => Je = U), d), Xe, q = h, Ye = () => (q(), q = p(g, (U) => Xe = U), g), dt, Le = h, tt = () => (Le(), Le = p(c, (U) => dt = U), c), Be, yt = h, Ut = () => (yt(), yt = p(Z, (U) => Be = U), Z), jt, kt = h, ge = () => (kt(), kt = p(o, (U) => jt = U), o), we, Vt = h, Pt = () => (Vt(), Vt = p(a, (U) => we = U), a), St, qe = h, Yt = () => (qe(), qe = p(ue, (U) => St = U), ue), { componentContext: W } = t, { layoutParams: Re = void 0 } = t;
  const bt = sr($r), Ie = bt.direction;
  Fe = p(Ie, (U) => Ve = U);
  let rt, Tt = Ji, xt = !1, He = Nd, nt = !1, Dt, ft = "", Zt = "none", er = "50% 50%", zt = !1, tr = "center", Mt, Xt, It = "source_in", ct = "", pt = "", nr = 0, O = 0, rr = 0, Jt = "", xe = "", ir = !1, Kt = !1, ne = !1;
  function ve() {
    Mt = void 0, zt = !1, Zt = "none", er = "50% 50%", It = "source_in", Kt = !1, ne = !1;
  }
  function Et(U) {
    Tt = Ji;
  }
  function $(U) {
    er = zd(U, Ve, er);
  }
  Pr(() => {
    bt.removeSvgFilter(Xt, It);
  }), t.componentContext === void 0 && e.componentContext && W !== void 0 && e.componentContext(W), t.layoutParams === void 0 && e.layoutParams && Re !== void 0 && e.layoutParams(Re), i = W.origJson, i && ve(), ge(o = W.getDerivedFromVars(W.json.image_url)), Pt(a = W.getDerivedFromVars(W.json.gif_url)), tt(c = W.getDerivedFromVars(W.json.width)), Ye(g = W.getDerivedFromVars(W.json.height)), At(d = W.getDerivedFromVars(W.json.preview)), Ze(_ = W.getDerivedFromVars(W.json.preview_url)), lt(k = W.getDerivedFromVars(W.json.placeholder_color)), Ce(I = W.getDerivedFromVars(W.json.scale)), Ge(T = W.getDerivedFromVars({
    content_alignment_horizontal: W.json.content_alignment_horizontal,
    content_alignment_vertical: W.json.content_alignment_vertical
  })), ot(D = W.getDerivedFromVars(W.json.accessibility)), R(B = W.getDerivedFromVars(W.json.aspect)), re(V = W.getDerivedFromVars(W.json.tint_color)), S(A = W.getDerivedFromVars(W.json.tint_mode)), Ne($e = W.getDerivedFromVars(W.json.appearance_animation)), me(Y = W.getDerivedFromVars(W.json.filters)), Yt(ue = W.getDerivedFromVars(W.json.preload_required)), Ut(Z = W.getDerivedFromVars(W.json.high_priority_preview_show));
  {
    const U = W.json.type === "gif";
    let v = U ? we : jt;
    xt = v === Od, xt && (v = Fa), Dt = v, !U && Dt && Da.test(Dt) && W.logError(C(new Error(Ia), { level: "warn" }));
  }
  Et(), Kt = Fr(Be, Kt), Dt ? nt = !1 : (nt = !0, W.logError(C(new Error(`Missing "${W.json.type === "gif" ? "gif_url" : "image_url"}" for "${W.json.type}"`)))), ae = (dt == null ? void 0 : dt.type) === "wrap_content", ke = (Xe == null ? void 0 : Xe.type) === "wrap_content";
  {
    const U = W.json.type === "gif", v = Je, N = pe;
    (Tt === Ji || Tt === ds || xt) && (v || N) ? (ft = `url("${N || Hl(v || "")}")`, ne = Kt) : (ft = "", ne = !1), !U && (N && Da.test(N) || v && v.startsWith(Bd)) && W.logError(C(new Error(Ia), { level: "warn" }));
  }
  Tt === Ji || Tt === ds || xt ? He = Ot(ze, 1, He) : He = "", Zt = Pl(et) || Zt, $(ye), le = (Te == null ? void 0 : Te.description) || "";
  {
    tr = "center";
    const U = Me == null ? void 0 : Me.ratio;
    U && tn(U) ? (Mt = U, zt = ((y = W.json.width) == null ? void 0 : y.type) === "wrap_content", zt && (ye.content_alignment_vertical === "top" ? tr = "top" : ye.content_alignment_vertical === "bottom" && (tr = "bottom"))) : Mt = void 0;
  }
  {
    const U = fe, v = U ? Ot(U) : void 0, N = Ll(Se, It);
    (v !== Xt || N !== It) && (bt.removeSvgFilter(Xt, It), ct = v ? bt.addSvgFilter(v, N) : "", Xt = v, It = N);
  }
  if (L && L.type === "fade") {
    const U = L;
    pt = Ol(U.interpolator, "ease_in_out").replace(/_/g, "-"), rr = Sr(U.duration, 300), O = Sr(U.start_delay, 0), nr = Sr(U.alpha, 0);
  }
  {
    let U = "", v = "";
    Array.isArray(de) && de.length && (U = Rl(de, W.logError)), U && (v = "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)"), Jt = U, xe = v, ir = Ve === "rtl" && Array.isArray(de) && de.some((N) => N.type === "rtl_mirror");
  }
  return Q = {
    aspect: Mt !== void 0,
    "aspect-content": zt,
    "aspect-valign": tr !== "center" ? tr : void 0,
    "is-width-content": ae,
    "is-height-content": ke,
    loaded: Tt === Sa,
    "before-appearance": !!pt && Tt === Ji,
    "is-rtl-mirror": ir
  }, _e = {
    // Image preview shows, if loading of original image is failed
    "background-image": ft,
    "background-color": ft ? void 0 : He,
    "background-size": fu(Zt),
    "clip-path": xe || void 0,
    "object-fit": Zt,
    "object-position": er,
    "aspect-ratio": Mt,
    filter: [
      Tt === Sa && ct ? `url(#${ct})` : "",
      Jt
    ].filter(Boolean).join(" "),
    "--divkit-appearance-interpolator": pt || void 0,
    "--divkit-appearance-fade-start": pt ? nr : void 0,
    "--divkit-appearance-delay": pt ? `${O}ms` : void 0,
    "--divkit-appearance-duration": pt ? `${rr}ms` : void 0
  }, te(), Fe(), We(), je(), H(), Ke(), Pe(), oe(), K(), ce(), be(), De(), q(), Le(), yt(), kt(), Vt(), qe(), `${nt ? "" : `${Wt(Lr, "Outer").$$render(
    r,
    {
      cls: Ht("image", Va, Q),
      componentContext: W,
      layoutParams: Re,
      customDescription: !0,
      style: { "aspect-ratio": Mt },
      heightByAspect: Mt !== void 0
    },
    {},
    {
      default: ({ widthMin: U, widthMax: v, heightMin: N, heightMax: Ae }) => ` <img${m("class", Va.image__image, 0)}${m("src", Tt === ds ? Fa : Dt, 0)}${m("loading", St || ne ? "eager" : "lazy", 0)}${m("decoding", ne ? "sync" : "async", 0)}${m(
        "style",
        Cr({
          ..._e,
          "min-width": ae ? U : void 0,
          "max-width": ae ? v : void 0,
          "min-height": ke ? N : void 0,
          "max-height": ke ? Ae : void 0
        }),
        0
      )}${m("alt", le, 0)}${m("aria-hidden", le ? null : "true", 0)}${m("this", rt, 0)}>`
    }
  )}`}`;
}), Rd = "appkit-grid", Ld = "appkit-grid_halign_start", Hd = "appkit-grid_halign_center", Wd = "appkit-grid_halign_end", Ud = "appkit-grid_valign_start", Gd = "appkit-grid_valign_center", Jd = "appkit-grid_valign_end", qd = {
  grid: Rd,
  grid_halign_start: Ld,
  grid_halign_center: Hd,
  grid_halign_end: Wd,
  grid_valign_start: Ud,
  grid_valign_center: Gd,
  grid_valign_end: Jd
};
function Ma(r) {
  return r > 0 && r < 1;
}
function Pa(r) {
  return String(Math.ceil(r * 1e3) / 1e3);
}
function za(r, t, e, n) {
  if (r.some(Ma)) {
    const g = Math.max(...r.filter(Ma).map((d) => 1 / d));
    r = r.map((d) => d * g);
  }
  const i = r.every(Boolean);
  let o = 0, a = 0;
  const c = [];
  if (i) {
    a = r.reduce((g, d) => g + d, 0);
    for (let g = 0; g < n; ++g) {
      if (!t[g])
        continue;
      const d = t[g] / r[g] * a;
      d > o && (o = d);
    }
  }
  for (let g = 0; g < n; ++g)
    o && !e[g] ? c[g] = `minmax(${ee(o * r[g] / a)},${Pa(r[g])}fr)` : i || !e[g] && r[g] ? c[g] = `${Pa(r[g])}fr` : c[g] = "auto";
  return c.join(" ");
}
const Yd = gr((r, t, e, n) => {
  let i, o, a, c, g, d, _, k, I, T, D = h, B = () => (D(), D = p(g, (R) => T = R), g), V, A = h, $e = () => (A(), A = p(c, (R) => V = R), c), Y, ue = h, Z = () => (ue(), ue = p(Fe, (R) => Y = R), Fe), ae, ke = h, le = () => (ke(), ke = p(a, (R) => ae = R), a), { componentContext: Q } = t, { layoutParams: _e = void 0 } = t;
  const te = sr($r).direction;
  I = p(te, (R) => k = R);
  let me = !1, Ve = 0, Fe, L, We = [], Ne = [], Se = [], je = [], S = [], fe = [], H = 0, re = "start", ye = "start", Ke = [], Ge;
  function Me() {
    me = !1, Ve = 0, re = "start", ye = "start";
  }
  function Pe(R) {
    Q = Ge = {
      ...Q,
      json: {
        ...Q.json,
        items: R.filter(zn)
      }
    };
  }
  Pr(() => {
    Ke.forEach((R) => {
      R.destroy();
    });
  }), t.componentContext === void 0 && e.componentContext && Q !== void 0 && e.componentContext(Q), t.layoutParams === void 0 && e.layoutParams && _e !== void 0 && e.layoutParams(_e), i = Q.origJson, i && Me(), o = Array.isArray(Q.json.items) && Q.json.items || [], le(a = Q.getDerivedFromVars(Q.json.column_count)), $e(c = Q.getDerivedFromVars(Q.json.content_alignment_vertical)), B(g = Q.getDerivedFromVars(Q.json.content_alignment_horizontal)), Ve = un(ae, Ve), Ve < 1 ? (me = !0, Q.logError(C(new Error("Incorrect column_count for grid")))) : me = !1;
  {
    const R = new Set(Ke), Te = /* @__PURE__ */ new Map();
    Ge === Q && Ke.forEach((oe) => {
      Te.set(oe.json, oe);
    }), Ke = o.map((oe, ot) => {
      const et = Te.get(oe);
      return et ? (R.delete(et), et) : Q.produceChildContext(oe, { path: ot });
    });
    for (const oe of R)
      oe.destroy();
    Ge = Q;
  }
  {
    let R = [];
    Ke.forEach((Te) => {
      R.push(Q.getDerivedFromVars({
        rowSpan: Te.json.row_span,
        columnSpan: Te.json.column_span,
        width: Te.json.width,
        height: Te.json.height
      }));
    }), Z(Fe = zi(R, (Te) => [...Te]));
  }
  {
    const R = {};
    let Te = 0, oe = 0;
    We = [], Ne = [], Se = [], je = [], S = [], fe = [];
    let ot = 0;
    L = Ke.map((et, K) => {
      var De, At, Xe, q;
      const Ce = Y[K], ze = Math.min(Ve, Number(Ce.columnSpan) || 1), ce = Number(Ce.rowSpan) || 1, lt = ((De = Ce.width) == null ? void 0 : De.type) === "match_parent" ? Number(Ce.width.weight || 1) / ze : 0, pe = ((At = Ce.height) == null ? void 0 : At.type) === "match_parent" ? Number(Ce.height.weight || 1) / ce : 0, be = ((Xe = Ce.width) == null ? void 0 : Xe.type) === "fixed" && Ce.width.value ? Number(Ce.width.value) / ze : 0, Ze = ((q = Ce.height) == null ? void 0 : q.type) === "fixed" && Ce.height.value ? Number(Ce.height.value) / ce : 0;
      for (; ; ) {
        let Ye = !0;
        e: for (let dt = Te; dt < Te + ze; ++dt)
          for (let Le = oe; Le < oe + ce; ++Le)
            if (R[dt + "_" + Le]) {
              Ye = !1;
              break e;
            }
        if (Ye)
          break;
        ++Te, Te > Ve - ze && (Te = 0, ++oe);
      }
      const Je = { x: Te, y: oe, colSpan: ze, rowSpan: ce };
      for (let Ye = Te; Ye < Te + ze; ++Ye)
        for (let dt = oe; dt < oe + ce; ++dt)
          R[Ye + "_" + dt] = !0, (!We[Ye] || We[Ye] < lt) && (We[Ye] = lt), (!Ne[dt] || Ne[dt] < pe) && (Ne[dt] = pe), ze === 1 && (!Se[Ye] || Se[Ye] < be) && (Se[Ye] = be), ce === 1 && (!je[dt] || je[dt] < Ze) && (je[dt] = Ze), ze === 1 && be && (S[Ye] = be), ce === 1 && Ze && (fe[Ye] = Ze);
      return ot = Math.max(ot, oe + ce), {
        componentContext: et,
        layoutParams: { gridArea: Je }
      };
    }), H = Math.max(oe + 1, ot);
  }
  return re = Ko(V, re), ye = Yo(T, k, ye), d = {
    valign: re,
    halign: ye
  }, _ = {
    "grid-template-columns": za(We, Se, S, Ve),
    "grid-template-rows": za(Ne, je, fe, H)
  }, I(), D(), A(), ue(), ke(), `${me ? "" : `${Wt(Lr, "Outer").$$render(
    r,
    {
      cls: Ht("grid", qd, d),
      componentContext: Q,
      style: _,
      layoutParams: _e,
      parentOf: Ke,
      replaceItems: Pe
    },
    {},
    {
      default: () => `${Vr(L, (R) => `${Wt(gn, "Unknown").$$render(
        r,
        {
          componentContext: R.componentContext,
          layoutParams: R.layoutParams
        },
        {},
        {}
      )}`)}`
    }
  )}`}`;
}), Kd = "appkit-outer_width_content", Zd = "appkit-outer_height_content", Xd = "appkit-gallery", Qd = "appkit-gallery__scroller", ef = "appkit-gallery_scrollbar_none", tf = "appkit-gallery_orientation_horizontal", rf = "appkit-gallery_orientation_vertical", nf = "appkit-gallery__items", of = "appkit-gallery__arrow", sf = "appkit-gallery__gap", ki = {
  outer_width_content: Kd,
  outer_height_content: Zd,
  gallery: Xd,
  gallery__scroller: Qd,
  gallery_scrollbar_none: ef,
  gallery_orientation_horizontal: tf,
  gallery_orientation_vertical: rf,
  "gallery_scroll-snap": "appkit-gallery_scroll-snap",
  "gallery__items-grid": "appkit-gallery__items-grid",
  gallery__items: nf,
  gallery__arrow: of,
  "gallery__arrow-icon-path": "appkit-gallery__arrow-icon-path",
  gallery__gap: sf
}, af = "appkit-arrow", lf = "appkit-arrow__icon", cf = "appkit-arrow_left", uf = "appkit-arrow_right", xi = {
  arrow: af,
  arrow__icon: lf,
  arrow_left: cf,
  arrow_right: uf
};
function df(r, t) {
  return r === "start" || r === "center" || r === "end" ? r : t;
}
function ff(r) {
  const t = [];
  let e = r[0], n = 1;
  for (let i = 1; i <= r.length; i++)
    r[i] !== e ? (t.push(n > 1 ? `repeat(${n}, ${e})` : e), e = r[i], n = 1) : n++;
  return t.join(" ");
}
function Tn(r, t) {
  let e = r % t;
  return e < 0 && (e += t), e;
}
function gf(r, t, e) {
  let n = 0, i = [], o = [];
  for (let a = 0; a < r.length; ++a)
    i[n] || (i[n] = []), i[n].push({
      index: a,
      hasGapBefore: o[n] && t[a].visibility !== "gone",
      componentContext: r[a]
    }), !o[n] && t[a].visibility !== "gone" && (o[n] = !0), ++n >= e && (n = 0);
  return i;
}
const pf = gr((r, t, e, n) => {
  var xe, ir, Kt, ne, ve, Et;
  let i, o, a, c, g, d, _, k, I, T, D, B, V, A, $e, Y, ue, Z, ae, ke, le, Q, _e = h, de = () => (_e(), _e = p(V, ($) => $), V), te, me = h, Ve = () => (me(), me = p(B, ($) => te = $), B), Fe, L = h, We = () => (L(), L = p(T, ($) => Fe = $), T), Ne, Se = h, je = () => (Se(), Se = p(Ie, ($) => Ne = $), Ie), S, fe = h, H = () => (fe(), fe = p(I, ($) => S = $), I), re, ye = h, Ke = () => (ye(), ye = p(k, ($) => re = $), k), Ge, Me = h, Pe = () => (Me(), Me = p(_, ($) => Ge = $), _), R, Te = h, oe = () => (Te(), Te = p(d, ($) => R = $), d), ot, et = h, K = () => (et(), et = p(g, ($) => ot = $), g), Ce, ze, ce, lt = h, pe = () => (lt(), lt = p(a, ($) => ce = $), a), be, Ze = h, Je = () => (Ze(), Ze = p(c, ($) => be = $), c), De, At = h, Xe = () => (At(), At = p(D, ($) => De = $), D), { componentContext: q } = t, { layoutParams: Ye = void 0 } = t;
  const dt = sr($r), Le = dt.direction;
  Q = p(Le, ($) => le = $);
  let tt, Be = [], yt = null, Ut, jt = !1;
  dt.getCustomization("galleryLeftClass"), dt.getCustomization("galleryRightClass");
  let kt, ge = 1, we = "horizontal", Vt = "start", Pt, St = 8, qe, Yt, W = "", Re, bt = [], Ie, rt = {}, Tt = !1, xt = {};
  function He() {
    ge = 1, we = "horizontal", Vt = "start", St = 8, W = "";
  }
  let nt = null, Dt = null;
  function ft() {
    var U, v;
    const $ = un(be, ge), y = q.json.responsive;
    if (!y || typeof y != "object") {
      ge = $;
      return;
    }
    nt != null && nt.matches && ((U = y.mobile) != null && U.column_count) ? ge = y.mobile.column_count : Dt != null && Dt.matches && ((v = y.tablet) != null && v.column_count) ? ge = y.tablet.column_count : ge = $;
  }
  function Zt($) {
    q = tr = {
      ...q,
      json: {
        ...q.json,
        items: $.filter(zn)
      }
    };
  }
  const er = dt.isDesktop;
  ze = p(er, ($) => Ce = $);
  let zt = [], tr;
  function Mt() {
  }
  const Xt = qu(Mt, 50);
  function It() {
    let $ = [], y = Be[0].children.length;
    for (let U = 0; U < y; U += 2)
      for (let v = 0; v < ge; ++v) {
        const N = Be[v].children[U];
        N && $.push(N);
      }
    return $;
  }
  function ct($, y = !0) {
    const v = we === "horizontal" ? "left" : "top";
    tt.scroll({
      [v]: $,
      behavior: y ? "smooth" : "instant"
    });
  }
  function pt($, y, { animated: U = !0, extraOffset: v = 0, overflow: N = "clamp" } = {}) {
    const Ae = we === "horizontal", _t = Ae ? "offsetLeft" : "offsetTop";
    y > $.length - 1 ? y = N === "ring" ? Tn(y, $.length) : $.length - 1 : y < 0 && (y = N === "ring" ? Tn(y, $.length) : 0);
    const wt = $[y];
    if (wt) {
      let Ct;
      if (le === "ltr" || !Ae)
        Ct = wt[_t] + 0.01 - St / 2;
      else {
        const _r = tt.offsetWidth;
        Ct = wt[_t] + wt.offsetWidth + 0.01 - St / 2 - _r;
      }
      if (v) {
        Ct += v;
        const _r = Ae ? tt.scrollWidth - tt.offsetWidth : tt.scrollHeight - tt.offsetHeight;
        Ct > _r && (N === "clamp" ? Ct = _r : N === "ring" && (Ct = Tn(Ct, _r))), Ct < 0 && (N === "clamp" ? Ct = 0 : N === "ring" && (Ct = Tn(Ct, _r)));
      }
      ct(Ct, U);
    }
  }
  function nr($, { overflow: y = "clamp", animated: U = !0 } = {}) {
    const v = we === "horizontal", N = le === "ltr" || !v ? 1 : -1, Ae = v ? tt.scrollLeft : tt.scrollTop, _t = v ? tt.scrollWidth - tt.offsetWidth : tt.scrollHeight - tt.offsetHeight;
    let wt = Ae * N + $;
    wt > _t ? y === "clamp" ? wt = _t : y === "ring" && (wt = Tn(wt, _t)) : wt < 0 && (y === "clamp" ? wt = 0 : y === "ring" && (wt = Tn(wt, _t))), ct(wt * N, U);
  }
  function O($, y) {
    return we === "horizontal" ? y.right > $.left && $.right > y.left : y.bottom > $.top && $.bottom > y.top;
  }
  function rr($, y) {
    return we === "horizontal" ? y.left >= $.left && y.right <= $.right : y.top >= $.top && y.bottom <= $.bottom;
  }
  function Jt($) {
    const y = It(), U = tt.getBoundingClientRect(), v = y.findIndex((_t) => rr(U, _t.getBoundingClientRect()));
    if (v !== -1)
      return v;
    const N = y.map((_t) => O(U, _t.getBoundingClientRect())), Ae = N.findIndex(Boolean);
    return Ae !== -1 ? $ === "prev" && N.filter(Boolean).length === 2 ? Ae + 1 : Ae : $ === "prev" ? 1 : y.length - 2;
  }
  Pr(() => {
    jt = !1, zt.forEach(($) => {
      $.destroy();
    }), kt && !q.fakeElement && (dt.unregisterInstance(kt), kt = void 0), nt && nt.removeEventListener("change", ft), Dt && Dt.removeEventListener("change", ft);
  }), t.componentContext === void 0 && e.componentContext && q !== void 0 && e.componentContext(q), t.layoutParams === void 0 && e.layoutParams && Ye !== void 0 && e.layoutParams(Ye), i = q.origJson, i && He(), o = Array.isArray(q.json.items) && q.json.items || [], pe(a = typeof ((xe = q.json.item_builder) == null ? void 0 : xe.data) == "string" ? q.getDerivedFromVars((ir = q.json.item_builder) == null ? void 0 : ir.data, void 0, !0) : (Kt = q.json.item_builder) != null && Kt.data ? Hn(q.json.item_builder.data) : void 0), Je(c = q.getDerivedFromVars(q.json.column_count)), K(g = q.getDerivedFromVars(q.json.orientation));
  {
    const $ = un(be, ge), y = q.json.responsive;
    y && typeof y == "object" && typeof window < "u" ? (nt || (nt = window.matchMedia("(max-width: 767px)"), Dt = window.matchMedia("(min-width: 768px) and (max-width: 1023px)"), nt.addEventListener("change", ft), Dt.addEventListener("change", ft)), ft()) : ge = $;
  }
  oe(d = q.getDerivedFromVars(q.json.cross_content_alignment)), Pe(_ = q.getDerivedFromVars(q.json.item_spacing)), Ke(k = q.getDerivedFromVars(q.json.cross_spacing)), H(I = q.getDerivedFromVars(q.json.paddings)), We(T = q.getDerivedFromVars(q.json.scroll_mode)), Xe(D = q.getDerivedFromVars(q.json.restrict_parent_scroll)), Ve(B = q.getDerivedFromVars(q.json.scrollbar)), de(V = q.getDerivedFromVars(q.json.default_item));
  {
    let $ = [];
    if (q.json.item_builder && Array.isArray(ce) && Array.isArray(q.json.item_builder.prototypes)) {
      const N = q.json.item_builder;
      $ = Zo(ce, dt, q, N);
    } else
      $ = (Array.isArray(o) && o || []).map((N, Ae) => ({
        div: N,
        key: N.id || { index: Ae, data: N }
      }));
    const y = new Set(zt), U = /* @__PURE__ */ new Map();
    let v = !1;
    tr === q && zt.forEach((N) => {
      N.key && (typeof N.key == "string" && U.has(N.key) ? v || (v = !0, q.logError(C(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: N.key } }))) : U.set(
        typeof N.key == "string" ? N.key : N.key.index,
        N
      ));
    }), zt = $.map((N, Ae) => {
      let _t = !v && U.get(N.id), wt = U.get(Ae);
      return !_t && !N.id && typeof N.key == "object" && typeof (wt == null ? void 0 : wt.key) == "object" && Oi(wt.key.data, N.key.data) && (_t = wt), _t ? (y.delete(_t), _t) : q.produceChildContext(N.div, {
        path: Ae,
        variables: N.vars,
        id: N.id,
        key: N.key
      });
    });
    for (const N of y)
      N.destroy();
    tr = q;
  }
  A = Ce && jt, A ? typeof ResizeObserver < "u" && (yt = new ResizeObserver(() => {
    Xt();
  }), yt.observe(Ut)) : yt && (yt.disconnect(), yt = null), we = Ws(ot, we), Vt = df(R, Vt), St = Sr(Ge, St), Pt = ee(St), Yt = Sr(re, St), qe = ee(Yt);
  {
    W = Qi(S, le, W);
    const $ = we === "horizontal" ? (ve = (ne = S == null ? void 0 : S.end) != null ? ne : S == null ? void 0 : S[le === "ltr" ? "right" : "left"]) != null ? ve : 0 : (Et = S == null ? void 0 : S.bottom) != null ? Et : 0, y = ee($);
    Re = {
      width: we === "horizontal" ? y : "1px",
      height: we === "horizontal" ? "1px" : y,
      "margin-right": we === "horizontal" && le === "ltr" ? "-" + y : void 0,
      "margin-left": we === "horizontal" && le === "rtl" ? "-" + y : void 0,
      "margin-bottom": we === "vertical" ? "-" + y : void 0
    };
  }
  {
    let $ = [];
    zt.forEach((y) => {
      const U = we === "horizontal" ? "width" : "height";
      $.push(y.getDerivedFromVars({
        size: y.json[U],
        visibility: y.json.visibility
      }));
    }), je(Ie = zi($, (y) => [...y]));
  }
  $e = gf(zt, Ne, ge), bt = [], ge > 1 || Ne.forEach(($, y) => {
    var U;
    $.visibility !== "gone" && (!$.size && we === "horizontal" || ((U = $.size) == null ? void 0 : U.type) === "match_parent" ? bt.push("100%") : bt.push("max-content"), y + 1 < Ne.length && bt.push("auto"));
  }), bt.push("auto"), Y = q.json.fixed_columns === !0;
  {
    const $ = {};
    let y = {};
    if (Tt = !1, y.treatMatchParentAs100 = !0, we === "horizontal" ? (y.parentVAlign = Vt, y.parentContainerOrientation = "horizontal") : (y.parentHAlign = Vt, y.parentContainerOrientation = "vertical"), Fe === "paging") {
      Tt = !0, y.scrollSnap = "start";
      const U = we === "horizontal" ? "scroll-padding-left" : "scroll-padding-top";
      $[U] = ee(St / 2);
    }
    rt = Xn($, rt), xt = Xn(y, xt);
  }
  return ue = we === "horizontal" ? "grid-template-columns" : "grid-template-rows", Z = {
    padding: W,
    "grid-gap": qe,
    ...Y && ge > 1 && we === "vertical" ? {
      display: "grid",
      "grid-template-columns": `repeat(${ge}, 1fr)`
    } : {}
  }, ae = {
    [ue]: ff(bt)
  }, ke = {
    orientation: we,
    "scroll-snap": Tt,
    scrollbar: te === "auto" ? "auto" : "none"
  }, q.json && Xt(), q.json && (kt && (dt.unregisterInstance(kt), kt = void 0), q.id && !q.fakeElement && (kt = q.id, dt.registerInstance(kt, {
    setCurrentItem($, y) {
      const U = It();
      if ($ < 0 || $ > U.length - 1)
        throw new Error('Item is out of range in "set-current-item" action');
      pt(U, $, { animated: y });
    },
    setPreviousItem($, y, U) {
      const v = Jt("prev"), N = It();
      let Ae = v - $;
      pt(N, Ae, { animated: U, overflow: y });
    },
    setNextItem($, y, U) {
      const v = we === "horizontal", N = le === "ltr" || !v ? 1 : -1, Ae = v ? tt.scrollLeft * N + tt.offsetWidth === tt.scrollWidth : tt.scrollTop + tt.offsetHeight === tt.scrollHeight, _t = It();
      if (Ae && y === "ring") {
        pt(_t, 0, { animated: U });
        return;
      }
      let Ct = Jt("next") + $;
      pt(_t, Ct, { animated: U, overflow: y });
    },
    scrollToStart($) {
      ct(0, $);
    },
    scrollToEnd($) {
      ct(
        le === "ltr" || we !== "horizontal" ? 1e6 : -1e6,
        $
      );
    },
    scrollToPosition($, y) {
      ct(
        le === "ltr" || we !== "horizontal" ? $ : -$,
        y
      );
    },
    scrollCombined({ step: $, offset: y, overflow: U, animated: v }) {
      if ($) {
        const Ae = Jt($ > 0 ? "next" : "prev") + $;
        pt(It(), Ae, { animated: v, extraOffset: y, overflow: U });
      } else y && nr(y, { overflow: U, animated: v });
    }
  }))), Q(), _e(), me(), L(), Se(), fe(), ye(), Me(), Te(), et(), ze(), lt(), Ze(), At(), ` ${Wt(Lr, "Outer").$$render(
    r,
    {
      cls: Ht("gallery", ki, ke),
      componentContext: q,
      layoutParams: Ye,
      customPaddings: !0,
      customActions: "gallery",
      parentOf: zt,
      replaceItems: Zt
    },
    {},
    {
      default: () => `<div class="${gt(ki.gallery__scroller, !0) + " " + gt(
        De ? Jr["root_restrict-scroll"] : "",
        !0
      )}"${m("style", Cr(rt), 0)}${m("this", tt, 0)}><div${m("class", ki["gallery__items-grid"], 0)}${m("style", Cr(Z), 0)}${m("this", Ut, 0)}>${Vr($e, ($, y) => `<div${m("class", ki.gallery__items, 0)}${m("style", Cr(ae), 0)}${m("this", Be[y], 0)}>${Vr($, (U) => `${U.hasGapBefore ? `<div${m("class", ki.gallery__gap, 0)}${Ar({
        width: we === "horizontal" ? Pt : void 0,
        height: we !== "horizontal" ? Pt : void 0
      })}></div>` : ""} ${Wt(gn, "Unknown").$$render(
        r,
        {
          componentContext: U.componentContext,
          layoutParams: xt
        },
        {},
        {}
      )}`)} <div${m("class", ki.gallery__gap, 0)}${m("style", Cr(Re), 0)}></div> </div>`)}</div></div> ${we === "horizontal" ? " " : ""}`
    }
  )}`;
}), _f = "appkit-outer", hf = "appkit-tabs", mf = "appkit-tabs__list", bf = "appkit-tabs__item", vf = "appkit-tabs__item_selected", yf = "appkit-tabs_animation_fade", wf = "appkit-tabs_animation_none", $f = "appkit-tabs__item_actionable", jf = "appkit-tabs__panels", kf = "appkit-tabs__swiper", xf = "appkit-tabs__swiper_animated", Ef = "appkit-tabs__swiper_inited", Af = "appkit-tabs__panel", Cf = "appkit-tabs__panel_visible", Vf = "appkit-tabs__separator", Ff = "appkit-tabs__delimitier", vn = {
  outer: _f,
  "root__any-actions": "appkit-root__any-actions",
  tabs: hf,
  tabs__list: mf,
  "tabs__items-bg": "appkit-tabs__items-bg",
  "tabs__items-text": "appkit-tabs__items-text",
  tabs__item: bf,
  tabs__item_selected: vf,
  tabs_animation_fade: yf,
  tabs_animation_none: wf,
  tabs__item_actionable: $f,
  tabs__panels: jf,
  "tabs_own-height": "appkit-tabs_own-height",
  tabs__swiper: kf,
  tabs__swiper_animated: xf,
  tabs__swiper_inited: Ef,
  tabs__panel: Af,
  tabs__panel_visible: Cf,
  "tabs_height-parent_yes": "appkit-tabs_height-parent_yes",
  tabs__separator: Vf,
  tabs__delimitier: Ff,
  "tabs__tabs-highlighter": "appkit-tabs__tabs-highlighter"
};
function Sf(r, t) {
  var n, i;
  if (!r || !r.image_url || typeof r.image_url != "string")
    return t;
  const e = {
    url: r.image_url,
    width: 12,
    height: 12
  };
  return ((n = r.width) == null ? void 0 : n.type) === "fixed" && tn(r.width.value) && (e.width = r.width.value), ((i = r.height) == null ? void 0 : i.type) === "fixed" && tn(r.height.value) && (e.height = r.height.value), e;
}
function Df(r, t, e, n) {
  const i = [
    r["top-left"],
    r["top-right"],
    r["bottom-right"],
    r["bottom-left"]
  ];
  for (let o = 0; o < i.length; ++o)
    if (i[o] && !an(i[o]))
      return n;
  return ko(r, t, e);
}
const If = gr((r, t, e, n) => {
  let { componentContext: i } = t, { layoutParams: o = void 0 } = t, { enabled: a } = t;
  const c = Mn(a);
  return fi(Ls, { isEnabled: c }), t.componentContext === void 0 && e.componentContext && i !== void 0 && e.componentContext(i), t.layoutParams === void 0 && e.layoutParams && o !== void 0 && e.layoutParams(o), t.enabled === void 0 && e.enabled && a !== void 0 && e.enabled(a), c.set(a), `${Wt(gn, "Unknown").$$render(r, { componentContext: i, layoutParams: o }, {}, {})}`;
}), Tf = gr((r, t, e, n) => {
  var Jt, xe, ir, Kt, ne, ve, Et, $, y, U;
  let i, o, a, c, g, d, _, k, I, T, D, B, V, A, $e, Y, ue, Z, ae = h, ke = () => (ae(), ae = p(g, (v) => Z = v), g), le, Q = h, _e = () => (Q(), Q = p(B, (v) => le = v), B), de, te = h, me = () => (te(), te = p(D, (v) => de = v), D), Ve = h, Fe = () => (Ve(), Ve = p(I, (v) => v), I), L, We, Ne, Se = h, je = () => (Se(), Se = p(k, (v) => Ne = v), k), S, fe = h, H = () => (fe(), fe = p(_, (v) => S = v), _), re, ye = h, Ke = () => (ye(), ye = p(d, (v) => re = v), d), Ge, Me = h, Pe = () => (Me(), Me = p(T, (v) => Ge = v), T), { componentContext: R } = t, { layoutParams: Te = void 0 } = t;
  const oe = sr($r), ot = oe.direction;
  We = p(ot, (v) => L = v);
  const et = oe.genId("tabs");
  let K, Ce = !1, ze = Mn([]);
  ue = p(ze, (v) => Y = v);
  let ce = {}, lt, pe, be, Ze = {}, Je = 12, De = "", At = "", Xe = "", q = "", Ye, dt = "", Le = "", tt, Be = "", yt = "", Ut = "", jt = "", kt = "", ge = "", we = 0, Vt = "", Pt = "", St = null, qe = !1, Yt = !1, W, Re = [], bt = [], Ie = null, rt, Tt = "slide", xt, He, nt, Dt;
  function ft() {
    Je = 12, De = "", q = "", Ye = void 0, dt = "", Le = "", tt = void 0, Be = "", yt = "", Ut = "", jt = "", kt = "", ge = "", we = 0, Vt = "", Pt = "", St = null, rt = void 0, Tt = "slide", xt = 300, He = void 0, rr();
  }
  function Zt(v) {
    R.json.items && (R = nt = {
      ...R,
      json: {
        ...R.json,
        items: R.json.items.map((N, Ae) => ({ ...N, div: v[Ae] }))
      }
    });
  }
  function er(v) {
    if (Ce)
      return;
    const N = new Set(Re.filter(zn)), Ae = /* @__PURE__ */ new Map();
    nt === R && Re.forEach((_t) => {
      _t && Ae.set(_t.json, _t);
    }), Re = v.map((_t, wt) => {
      if ((wt === V || Re[wt]) && (_t != null && _t.div)) {
        const Ct = Ae.get(_t.div);
        return Ct ? (N.delete(Ct), Ct) : R.produceChildContext(_t.div, { path: wt });
      }
    }), bt = v.map((_t, wt) => wt === V);
    for (const _t of N)
      _t.destroy();
    nt = R;
  }
  async function zt(v, N, Ae) {
    W = V, V = v, nr(), Mt(Ae), rr();
  }
  function tr(v, N) {
    return V !== N ? (zt(N, !1, !0), !1) : !0;
  }
  function Mt(v = !0) {
    Yt = v, Xt(-V * 100), It(), ct(), pt(), -V * pe.clientWidth;
  }
  async function Xt(v) {
    await Fn(), be.style.transform = `translate3d(${v}%,0,0)`;
  }
  function It(v = !1) {
    const N = v ? Math.max(0, V - 1) : Math.min(V, W != null ? W : V), Ae = v ? Math.min(o.length - 1, V + 1) : Math.max(V, W != null ? W : V);
    oe.devtoolCreateHierarchy, Re.forEach((_t) => {
      _t == null || _t.destroy();
    }), Re = Re.map((_t, wt) => {
      var _r;
      if (_t)
        return _t;
      const Ct = (_r = o[wt]) == null ? void 0 : _r.div;
      if ((wt >= N && wt <= Ae || oe.devtoolCreateHierarchy === "eager" && !1) && Ct)
        return R.produceChildContext(Ct, { path: wt });
    }), bt = bt.map((_t, wt) => wt >= N && wt <= Ae);
  }
  async function ct() {
    var N;
    if (((N = R.json.height) == null ? void 0 : N.type) === "match_parent")
      return;
    await Fn();
    const v = document.getElementById(`${et}-panel-${V}`);
    v && (pe.style.height = ee(v.offsetHeight));
  }
  function pt() {
    Ie && clearTimeout(Ie), Ie = window.setTimeout(
      () => {
        bt = o.map((v, N) => N === V);
      },
      400
    );
  }
  function nr() {
    qe || (qe = !0, pe.style.height = ee(pe.clientHeight), be.style.transform = `translate3d(${-(W != null ? W : V) * 100}%,0,0)`);
  }
  function O(v, N) {
    return v > o.length - 1 ? N === "ring" ? Tn(v, o.length) : o.length - 1 : v < 0 ? N === "ring" ? Tn(v, o.length) : 0 : v;
  }
  function rr() {
    Tt === "slide" && Fn().then(() => {
    });
  }
  if (Pr(() => {
    Re.forEach((v) => {
      v == null || v.destroy();
    }), K && (oe.unregisterInstance(K), K = void 0);
  }), t.componentContext === void 0 && e.componentContext && R !== void 0 && e.componentContext(R), t.layoutParams === void 0 && e.layoutParams && Te !== void 0 && e.layoutParams(Te), i = R.origJson, i && ft(), o = Array.isArray(R.json.items) && R.json.items || [], a = o.map((v) => {
    var N;
    return { json: v.div, id: (N = v.div) == null ? void 0 : N.id };
  }), c = R.getJsonWithVars(R.json.selected_tab), ke(g = R.getDerivedFromVars(R.json.tab_title_style, void 0, !0)), Ke(d = R.getDerivedFromVars(R.json.has_separator)), H(_ = R.getDerivedFromVars(R.json.separator_color)), je(k = R.getDerivedFromVars(R.json.separator_paddings)), Fe(I = R.getDerivedFromVars(R.json.switch_tabs_by_content_swipe_enabled)), Pe(T = R.getDerivedFromVars(R.json.restrict_parent_scroll)), me(D = R.getDerivedFromVars(R.json.title_paddings)), _e(B = R.getDerivedFromVars(R.json.tab_title_delimiter)), V = c && Number(c) || 0, Array.isArray(o) && o.length) {
    let v = [];
    o.forEach((N, Ae) => {
      const _t = R.getJsonWithVars({
        index: Ae,
        title: N.title,
        title_click_action: N.title_click_action
      });
      _t.title && typeof _t.title == "string" ? v.push(_t) : R.logError(C(new Error("Incorrect title for the tab"), { additional: { index: Ae } }));
    }), ze.set(v);
  } else
    ze.set([]);
  Y != null && Y.length ? Ce = !1 : (Ce = !0, R.logError(C(new Error('Incorrect or empty "items" prop for div "tabs"'))));
  {
    let v = { parentContainerOrientation: "horizontal" };
    ((Jt = R.json.width) == null ? void 0 : Jt.type) === "wrap_content" && (v.parentHorizontalWrapContent = !0), (!R.json.height || R.json.height.type === "wrap_content") && (v.parentVerticalWrapContent = !0), ce = Xn(v, ce);
  }
  if (!Ce && (V < 0 || V >= o.length) && (R.logError(C(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
    additional: {
      selected: R.json.selected_tab,
      length: o.length
    }
  })), V = V < 0 ? 0 : o.length - 1), !Ce && !Y.some((v) => V === v.index) && (R.logError(C(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
    additional: {
      selected: R.json.selected_tab
    }
  })), V = ((xe = Y[0]) == null ? void 0 : xe.index) || 0), A = Z || {}, Je = un(A.font_size, Je), A.font_size || A.paddings) {
    const v = A.paddings || { top: 6, right: 8, bottom: 6, left: 8 }, N = {
      top: (Number(v.top) || 0) / Je * 10,
      right: (Number(L === "ltr" ? v.end : v.start) || Number(v.right) || 0) / Je * 10,
      bottom: (Number(v.bottom) || 0) / Je * 10,
      left: (Number(L === "ltr" ? v.start : v.end) || Number(v.left) || 0) / Je * 10
    };
    De = Qi(N, L, De);
  }
  {
    const v = A.line_height;
    v !== void 0 && tn(v) && (At = ee(v / Je * 10));
  }
  {
    const v = A.letter_spacing;
    v !== void 0 && an(v) && (Xe = ee(v / Je * 10));
  }
  if (A.corner_radius || A.corners_radius || A.font_size) {
    const v = (ir = A.corner_radius) != null ? ir : 1e3;
    A.corners_radius ? q = Df(A.corners_radius, v, Je, q) : an(v) && (q = ee(v / Je * 10));
  }
  return Ye = ei(A.active_font_weight || A.font_weight, void 0, Ye), A.font_family && typeof A.font_family == "string" ? dt = oe.typefaceProvider(A.font_family, { fontWeight: Ye || 400 }) : dt = "", Le = gi(A.active_font_variation_settings), tt = ei(A.inactive_font_weight || A.font_weight, void 0, tt), A.font_family && typeof A.font_family == "string" ? Be = oe.typefaceProvider(A.font_family, { fontWeight: tt || 400 }) : Be = "", yt = gi(A.inactive_font_variation_settings), Ut = Ot(A.active_text_color, 1, Ut), jt = Ot(A.inactive_text_color, 1, jt), kt = Ot(A.active_background_color, 1, kt), ge = Ot(A.inactive_background_color, 1, ge), we = Sr(A.item_spacing, we), re && (S && (Vt = Ot(S, 1, Vt)), Ne && (Pt = Qi(Ne, L, Pt))), $e = {
    background: Vt,
    margin: Pt
  }, St = Qn(de || void 0, St), rt = Sf(le, rt), ((Z == null ? void 0 : Z.animation_type) === "fade" || (Z == null ? void 0 : Z.animation_type) === "none") && (Tt = Z.animation_type), an(Z == null ? void 0 : Z.animation_duration) && (xt = Z.animation_duration), er(o), R.json && (K && (oe.unregisterInstance(K), K = void 0), R.id && !Ce && !R.fakeElement && (K = R.id, oe.registerInstance(K, {
    setCurrentItem(v, N) {
      if (v < 0 || v > o.length - 1)
        throw new Error('Item is out of range in "set-current-item" action');
      zt(v, !1, N);
    },
    setPreviousItem(v, N, Ae) {
      let _t = O(V - v, N);
      zt(_t, !1, Ae);
    },
    setNextItem(v, N, Ae) {
      let _t = O(V + v, N);
      zt(_t, !1, Ae);
    },
    scrollToStart(v) {
      zt(0, !1, v);
    },
    scrollToEnd(v) {
      zt(o.length - 1, !1, v);
    },
    scrollCombined({ step: v, overflow: N, animated: Ae }) {
      v && zt(O(V + v, N || "clamp"), !1, Ae || !0);
    }
  }))), Ze = {
    "height-parent": ((Kt = R.json.height) == null ? void 0 : Kt.type) === "match_parent" ? "yes" : "",
    "own-height": (((ne = R.json.height) == null ? void 0 : ne.type) === "match_parent" || ((ve = R.json.height) == null ? void 0 : ve.type) === "fixed") && !(((y = ($ = (Et = o[V]) == null ? void 0 : Et.div) == null ? void 0 : $.height) == null ? void 0 : y.type) === "wrap_content" && ((U = o[V].div) != null && U.height.constrained)),
    animation: Tt
  }, ue(), ae(), Q(), te(), Ve(), We(), Se(), fe(), ye(), Me(), ` ${Ce ? "" : `${Wt(Lr, "Outer").$$render(r, Object.assign({}, { cls: Ht("tabs", vn, Ze) }, { componentContext: R }, { layoutParams: Te }, { customActions: "tabs" }, { parentOf: a }, { parentOfSimpleMode: !0 }, { replaceItems: Zt }, Dt), {}, {
    default: () => ` <div class="${gt(vn.tabs__list, !0) + " " + gt(
      Ge ? Jr["root_restrict-scroll"] : "",
      !0
    )}" role="tablist"${Ar({
      "--divkit-tabs-title-padding": St ? En(St, L) : "",
      "--divkit-tabs-font-size": ee(Je),
      "--divkit-tabs-paddings": De,
      "--divkit-tabs-line-height": At,
      "--divkit-tabs-letter-spacing": Xe,
      "--divkit-tabs-active-font-weight": Ye || "",
      "--divkit-tabs-inactive-font-weight": tt || "",
      "--divkit-tabs-active-font-family": dt || "",
      "--divkit-tabs-inactive-font-family": Be || "",
      "--divkit-tabs-active-font-variation-settings": Le || "",
      "--divkit-tabs-inactive-font-variation-settings": yt || "",
      "--divkit-tabs-active-text-color": Ut,
      "--divkit-tabs-inactive-text-color": jt,
      "--divkit-tabs-active-background-color": kt,
      "--divkit-tabs-inactive-background-color": ge,
      "--divkit-tabs-border-radius": q,
      "--divkit-tabs-items-spacing": we ? Wr(we * 10 / Je) : "",
      "--divkit-tabs-animation-duration": xt !== void 0 ? `${xt}ms` : ""
    })}${m("this", lt, 0)}><div${m("class", vn["tabs__items-bg"], 0)} aria-hidden="true">${Vr(Y, (v) => {
      let N = v.index, Ae = N === V;
      return `  ${rt && N > 0 ? `<span${m("class", vn.tabs__delimitier, 0)}${Ar({
        width: rt.width ? ee(rt.width) : void 0,
        height: rt.height ? ee(rt.height) : void 0
      })}></span>` : ""} <span${m(
        "class",
        Ht("tabs__item", vn, {
          selected: Ae,
          actionable: !!v.title_click_action
        }),
        0
      )}>${gt(v.title)}</span>`;
    })} ${Tt === "slide" && He ? `<div${m("class", vn["tabs__tabs-highlighter"], 0)}${m("style", Cr(He), 0)}></div>` : ""}</div> <div${m("class", vn["tabs__items-text"], 0)}>${Vr(Y, (v) => {
      let N = v.index, Ae = N === V;
      return `  ${rt && N > 0 ? `<img${m("class", vn.tabs__delimitier, 0)} alt="" loading="lazy" decoding="async"${m("src", rt.url, 0)}${Ar({
        width: rt.width ? ee(rt.width) : void 0,
        height: rt.height ? ee(rt.height) : void 0
      })}>` : ""} ${Wt(qo, "Actionable").$$render(
        r,
        {
          componentContext: R,
          cls: Ht("tabs__item", vn, {
            selected: Ae,
            actionable: !!v.title_click_action
          }),
          actions: v.title_click_action && !R.fakeElement ? [v.title_click_action].filter(Hs) : [],
          attrs: {
            id: `${et}-tab-${N}`,
            "aria-controls": `${et}-panel-${N}`,
            role: "tab",
            // eslint-disable-next-line no-nested-ternary
            tabindex: Ae && !R.fakeElement ? v.title_click_action ? void 0 : "0" : "-1",
            "aria-selected": Ae ? "true" : "false"
          },
          customAction: R.fakeElement ? null : (_t) => tr(_t, N)
        },
        {},
        {
          default: () => `${gt(v.title)}`
        }
      )}`;
    })}</div></div> ${re ? `<div${m("class", vn.tabs__separator, 0)}${m("style", Cr($e), 0)}></div>` : ""} <div class="${gt(vn.tabs__panels, !0) + " " + gt(
      Ge ? Jr["root_restrict-scroll"] : "",
      !0
    )}"${m("this", pe, 0)}><div${m(
      "class",
      Ht("tabs__swiper", vn, {
        inited: qe,
        animated: Yt
      }),
      0
    )}${m("this", be, 0)}>${Vr(Y, (v) => {
      let N = v.index, Ae = Re[N];
      return `  <div${m("class", Ht("tabs__panel", vn, { visible: bt[N] }), 0)} role="tabpanel" id="${gt(et, !0) + "-panel-" + gt(N, !0)}" aria-labelledby="${gt(et, !0) + "-tab-" + gt(N, !0)}" style="${"left: " + gt(N * 100, !0) + "%"}">${Ae ? `${Wt(If, "EnabledContext").$$render(
        r,
        {
          componentContext: Ae,
          layoutParams: ce,
          enabled: N === V
        },
        {},
        {}
      )}` : ""} </div>`;
    })}</div></div>`
  })}`}`;
}), Mf = "appkit-state", Pf = "appkit-state_overflow_visible", zf = "appkit-state__animations", Ei = {
  state: Mf,
  state_overflow_visible: Pf,
  state__animations: zf,
  "state__animation-child": "appkit-state__animation-child",
  "state__animation-child-inner": "appkit-state__animation-child-inner"
};
function Of(r) {
  return r < 0.5 ? 4 * r * r * r : 0.5 * Math.pow(2 * r - 2, 3) + 1;
}
function Nf(r) {
  return r * r * r;
}
function Bf(r) {
  const t = r - 1;
  return t * t * t + 1;
}
function Wl(r) {
  return (t) => {
    if (t <= 0)
      return 0;
    if (t >= 1)
      return 1;
    const e = t * r.length, n = Math.floor(e), i = r[n], o = r[n + 1], a = e - n;
    return i * a + o * (1 - a);
  };
}
const Rf = [
  21e-4,
  45e-4,
  71e-4,
  0.01,
  0.0131,
  0.0165,
  0.0202,
  0.0242,
  0.0284,
  0.033,
  0.0378,
  0.0429,
  0.0483,
  0.054,
  0.0601,
  0.0664,
  0.0731,
  0.08,
  0.0872,
  0.0948,
  0.1026,
  0.1108,
  0.1192,
  0.1279,
  0.1369,
  0.1461,
  0.1556,
  0.1653,
  0.1753,
  0.1855,
  0.1958,
  0.2064,
  0.2171,
  0.2279,
  0.2389,
  0.25,
  0.2612,
  0.2725,
  0.2839,
  0.2952,
  0.3067,
  0.3181,
  0.3295,
  0.341,
  0.3524,
  0.3637,
  0.375,
  0.3863,
  0.3974,
  0.4085,
  0.4195,
  0.4304,
  0.4412,
  0.4519,
  0.4624,
  0.4729,
  0.4832,
  0.4934,
  0.5034,
  0.5133,
  0.5231,
  0.5327,
  0.5422,
  0.5516,
  0.5608,
  0.5699,
  0.5788,
  0.5876,
  0.5963,
  0.6048,
  0.6132,
  0.6214,
  0.6295,
  0.6375,
  0.6453,
  0.653,
  0.6606,
  0.668,
  0.6754,
  0.6825,
  0.6896,
  0.6965,
  0.7034,
  0.7101,
  0.7166,
  0.7231,
  0.7295,
  0.7357,
  0.7418,
  0.7479,
  0.7538,
  0.7596,
  0.7653,
  0.7709,
  0.7764,
  0.7818,
  0.7871,
  0.7923,
  0.7974,
  0.8024,
  0.8073,
  0.8122,
  0.8169,
  0.8216,
  0.8261,
  0.8306,
  0.835,
  0.8394,
  0.8436,
  0.8478,
  0.8518,
  0.8558,
  0.8598,
  0.8636,
  0.8674,
  0.8711,
  0.8747,
  0.8783,
  0.8818,
  0.8852,
  0.8886,
  0.8919,
  0.8951,
  0.8983,
  0.9014,
  0.9044,
  0.9074,
  0.9103,
  0.9131,
  0.9159,
  0.9187,
  0.9213,
  0.924,
  0.9265,
  0.929,
  0.9315,
  0.9339,
  0.9362,
  0.9385,
  0.9408,
  0.943,
  0.9451,
  0.9472,
  0.9492,
  0.9512,
  0.9532,
  0.9551,
  0.9569,
  0.9587,
  0.9605,
  0.9622,
  0.9638,
  0.9655,
  0.967,
  0.9686,
  0.9701,
  0.9715,
  0.9729,
  0.9743,
  0.9756,
  0.9769,
  0.9782,
  0.9794,
  0.9805,
  0.9817,
  0.9828,
  0.9838,
  0.9848,
  0.9858,
  0.9868,
  0.9877,
  0.9886,
  0.9894,
  0.9902,
  0.991,
  0.9917,
  0.9924,
  0.9931,
  0.9937,
  0.9943,
  0.9949,
  0.9954,
  0.9959,
  0.9964,
  0.9969,
  0.9973,
  0.9977,
  0.998,
  0.9983,
  0.9986,
  0.9989,
  0.9991,
  0.9993,
  0.9995,
  0.9997,
  0.9998,
  0.9999,
  0.9999,
  1,
  1
], Lf = Wl(Rf), Hf = [
  5e-4,
  2e-3,
  45e-4,
  78e-4,
  0.0119,
  0.0168,
  0.0224,
  0.0286,
  0.0355,
  0.0429,
  0.0508,
  0.0592,
  0.0681,
  0.0774,
  0.087,
  0.0969,
  0.1072,
  0.1177,
  0.1285,
  0.1395,
  0.1507,
  0.1621,
  0.1736,
  0.1853,
  0.197,
  0.2089,
  0.2208,
  0.2328,
  0.2448,
  0.2569,
  0.2689,
  0.281,
  0.293,
  0.305,
  0.317,
  0.3289,
  0.3408,
  0.3526,
  0.3644,
  0.376,
  0.3876,
  0.3991,
  0.4105,
  0.4218,
  0.433,
  0.444,
  0.455,
  0.4658,
  0.4765,
  0.4871,
  0.4975,
  0.5078,
  0.518,
  0.528,
  0.5379,
  0.5477,
  0.5573,
  0.5668,
  0.5761,
  0.5853,
  0.5944,
  0.6033,
  0.612,
  0.6206,
  0.6291,
  0.6374,
  0.6456,
  0.6537,
  0.6616,
  0.6693,
  0.677,
  0.6845,
  0.6918,
  0.699,
  0.7061,
  0.713,
  0.7199,
  0.7265,
  0.7331,
  0.7395,
  0.7458,
  0.752,
  0.758,
  0.764,
  0.7698,
  0.7755,
  0.781,
  0.7865,
  0.7918,
  0.7971,
  0.8022,
  0.8072,
  0.8121,
  0.8169,
  0.8216,
  0.8262,
  0.8307,
  0.8351,
  0.8394,
  0.8436,
  0.8477,
  0.8517,
  0.8557,
  0.8595,
  0.8633,
  0.8669,
  0.8705,
  0.874,
  0.8775,
  0.8808,
  0.8841,
  0.8873,
  0.8904,
  0.8934,
  0.8964,
  0.8993,
  0.9022,
  0.9049,
  0.9076,
  0.9103,
  0.9129,
  0.9154,
  0.9178,
  0.9202,
  0.9226,
  0.9249,
  0.9271,
  0.9293,
  0.9314,
  0.9335,
  0.9355,
  0.9375,
  0.9394,
  0.9413,
  0.9431,
  0.9449,
  0.9466,
  0.9483,
  0.95,
  0.9516,
  0.9532,
  0.9547,
  0.9562,
  0.9576,
  0.9591,
  0.9605,
  0.9618,
  0.9631,
  0.9644,
  0.9657,
  0.9669,
  0.9681,
  0.9692,
  0.9703,
  0.9714,
  0.9725,
  0.9736,
  0.9746,
  0.9756,
  0.9765,
  0.9775,
  0.9784,
  0.9793,
  0.9802,
  0.981,
  0.9818,
  0.9826,
  0.9834,
  0.9842,
  0.9849,
  0.9856,
  0.9863,
  0.987,
  0.9877,
  0.9883,
  0.989,
  0.9896,
  0.9902,
  0.9908,
  0.9913,
  0.9919,
  0.9924,
  0.993,
  0.9935,
  0.994,
  0.9944,
  0.9949,
  0.9954,
  0.9958,
  0.9963,
  0.9967,
  0.9971,
  0.9975,
  0.9979,
  0.9983,
  0.9986,
  0.999,
  0.9993,
  0.9997,
  1
], Wf = Wl(Hf), Uf = {
  linear: Ec,
  ease: Lf,
  ease_in: Nf,
  ease_out: Bf,
  ease_in_out: Of,
  spring: Wf
};
function Gf(r) {
  return Uf[r];
}
function qi(r, t, e) {
  return r * (1 - e) + t * e;
}
const Jf = gr((r, t, e, n) => {
  let i, o, a, c, g, d, _, k, I, T, D = h, B = () => (D(), D = p(a, (S) => T = S), a), { componentContext: V } = t, { layoutParams: A = void 0 } = t;
  const $e = sr($r);
  let Y = !1, ue, Z = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Set(), ke = [], le = [], Q = [], _e = [], de, te, me, Ve = !1, Fe;
  function L() {
    Ve = !1;
  }
  function We(S) {
    me && me.destroy(), me = S != null && S.div ? V.produceChildContext(S.div, {
      path: S.state_id || "<unknown>"
    }) : void 0;
  }
  function Ne(S) {
    const fe = V.json.states;
    if (!fe)
      return;
    const H = /* @__PURE__ */ new Set();
    _ = fe.map((re, ye) => (_[ye].div !== S[ye] && re.state_id && H.add(re.state_id), { ...re, div: S[ye] })), V.json = { ...V.json, states: _ }, te && H.has(te) && We(_.find((re) => re.state_id === te) || null);
  }
  async function Se(S) {
    if (te === S)
      return V;
    $e.setRunning("stateChange", !0), new Set(ae), ke.forEach((H) => {
      H.resolvePromise && H.resolvePromise();
    }), ke = [], _e.forEach((H) => {
      H.transitions && Z.set(H.id, {
        transitions: H.transitions,
        rect: H.node.getBoundingClientRect()
      });
    }), le = [], Q = [], _e = [];
    const fe = _.find((H) => H.state_id === S) || null;
    fe ? (te = S, g == null || g.setValue(te), We(fe)) : V.logError(C(new Error("Cannot find state with id"), { additional: { stateId: S } })), await Fn();
  }
  fi(Rs, {
    // eslint-disable-next-line max-params
    runVisibilityTransition(S, fe, H, re, ye, Ke) {
      return Promise.resolve();
    },
    registerChildWithTransitionIn(S, fe, H, re) {
      const ye = {
        json: S,
        parentComponentContext: fe,
        transitions: H,
        node: re
      };
      return le.push(ye), new Promise((Ke) => {
        ye.resolvePromise = Ke;
      });
    },
    registerChildWithTransitionOut(S, fe, H, re) {
      const ye = {
        json: S,
        parentComponentContext: fe,
        transitions: H,
        node: re
      };
      return Q.push(ye), new Promise((Ke) => {
        ye.resolvePromise = Ke;
      });
    },
    registerChildWithTransitionChange(S, fe, H, re) {
      const ye = fe.id;
      if (!ye)
        return Promise.resolve();
      const Ke = {
        id: ye,
        json: S,
        parentComponentContext: fe,
        transitions: H,
        node: re
      };
      return _e.push(Ke), new Promise((Ge) => {
        Ke.resolvePromise = Ge;
      });
    },
    hasTransitionChange(S) {
      return S ? Z.has(S) : !1;
    },
    registerChild(S) {
      ae.add(S);
    },
    unregisterChild(S) {
      ae.delete(S);
    }
  });
  function je(S) {
    if (!Ve && (Ve = !0, S.length)) {
      const fe = (g == null ? void 0 : g.getValue()) || o;
      if (fe) {
        te = fe;
        const H = S.find((re) => re.state_id === te) || null;
        We(H), H || V.logError(C(new Error("Cannot find state for default_state_id"), { additional: { selectedId: te } }));
      } else {
        const H = S[0];
        te = H.state_id, We(H);
      }
      g && (g.setValue(te), g.subscribe((H) => {
        Se(H);
      }));
    }
  }
  return Pr(() => {
    me && me.destroy(), de && (de(), de = void 0);
  }), t.componentContext === void 0 && e.componentContext && V !== void 0 && e.componentContext(V), t.layoutParams === void 0 && e.layoutParams && A !== void 0 && e.layoutParams(A), i = V.json.div_id || V.id, o = V.getJsonWithVars(V.json.default_state_id), B(a = V.getDerivedFromVars(V.json.clip_to_bounds)), c = V.json.state_id_variable, g = c ? V.getVariable(c, "string") || $e.awaitGlobalVariable(c, "string", "") : null, d = V.origJson, d && L(), i ? Y = !1 : (Y = !0, V.logError(C(new Error('Missing "id" prop for div "state"')))), V.json && (ae = /* @__PURE__ */ new Set()), _ = Array.isArray(V.json.states) && V.json.states || [], k = _.map((S) => {
    var fe;
    return { json: S.div, id: (fe = S.div) == null ? void 0 : fe.id };
  }), _ != null && _.length ? Y = !1 : (Y = !0, V.logError(C(new Error('Empty "states" prop for div "state"')))), V.json && (de && (de(), de = void 0), i && !(V != null && V.fakeElement) && (de = V.registerState(i, Se))), !Ve && je(_), I = {
    overflow: T === !1 || T === 0 ? "visible" : void 0
  }, D(), `${Y ? "" : `${Wt(Lr, "Outer").$$render(r, Object.assign({}, { cls: Ht("state", Ei, I) }, { componentContext: V }, { layoutParams: A }, { parentOf: k }, { parentOfSimpleMode: !0 }, { replaceItems: Ne }, Fe), {}, {
    default: () => ` ${me ? `${Wt(gn, "Unknown").$$render(
      r,
      {
        componentContext: me
      },
      {},
      {}
    )}` : ""} <div${m("class", Ei.state__animations, 0)} aria-hidden="true"${m("this", ue, 0)}>${Vr(ke, (S) => `${"direction" in S ? `<div${m("class", Ei["state__animation-child"], 0)}${Ar({
      left: `${S.offsetLeft}px`,
      top: `${S.offsetTop}px`,
      width: `${S.width}px`,
      height: `${S.height}px`
    })}><div${m("class", Ei["state__animation-child-inner"], 0)}>${Wt(gn, "Unknown").$$render(
      r,
      {
        componentContext: S.componentContextCopy
      },
      {},
      {}
    )}</div> </div>` : `<div${m("class", Ei["state__animation-child"], 0)}><div${m("class", Ei["state__animation-child-inner"], 0)}>${Wt(gn, "Unknown").$$render(
      r,
      {
        componentContext: S.componentContextCopy
      },
      {},
      {}
    )}</div> </div>`}`)}</div>`
  })}`}`;
}), qf = "appkit-pager", Yf = "appkit-pager__items", Kf = "appkit-pager_animated", Zf = "appkit-pager__item", Xf = "appkit-pager_clip", Qf = "appkit-pager_orientation_horizontal", eg = "appkit-pager_orientation_vertical", tg = "appkit-pager__item_height_content", rg = "appkit-pager__item_height_fixed", ng = "appkit-pager__item_width_content", ig = "appkit-pager__item_width_fixed", og = "appkit-pager__arrow", ui = {
  pager: qf,
  pager__items: Yf,
  pager_animated: Kf,
  pager__item: Zf,
  "pager_scroll-align_start": "appkit-pager_scroll-align_start",
  "pager_scroll-align_center": "appkit-pager_scroll-align_center",
  "pager_scroll-align_end": "appkit-pager_scroll-align_end",
  pager_clip: Xf,
  pager_orientation_horizontal: Qf,
  pager_orientation_vertical: eg,
  "pager_cross-align_center": "appkit-pager_cross-align_center",
  "pager_cross-align_end": "appkit-pager_cross-align_end",
  pager__item_height_content: tg,
  pager__item_height_fixed: rg,
  "pager__item_height-constrained": "appkit-pager__item_height-constrained",
  pager__item_width_content: ng,
  pager__item_width_fixed: ig,
  "pager__item_width-constrained": "appkit-pager__item_width-constrained",
  pager__arrow: og,
  "pager__arrow-icon-path": "appkit-pager__arrow-icon-path"
}, ao = {
  wrap_content: "content",
  fixed: "fixed",
  match_parent: "parent"
}, Rn = 2;
function sg(r, t) {
  var n, i, o, a;
  if (r === "horizontal") {
    const c = ((n = t.height) == null ? void 0 : n.type) || "";
    return {
      height: c in ao ? ao[c] : "content",
      "height-constrained": ((i = t.height) == null ? void 0 : i.type) === "wrap_content" ? Fr(t.height.constrained, !1) : !1
    };
  }
  const e = ((o = t.width) == null ? void 0 : o.type) || "";
  return {
    width: e in ao ? ao[e] : "parent",
    "width-constrained": ((a = t.width) == null ? void 0 : a.type) === "wrap_content" ? Fr(t.width.constrained, !1) : !1
  };
}
const ag = gr((r, t, e, n) => {
  var rr, Jt, xe, ir, Kt;
  let i, o, a, c, g, d, _, k, I, T, D, B, V, A, $e, Y, ue, Z, ae, ke, le, Q, _e, de = h, te = () => (de(), de = p(k, (ne) => _e = ne), k), me, Ve = h, Fe = () => (Ve(), Ve = p(a, (ne) => me = ne), a), L, We = h, Ne = () => (We(), We = p(I, (ne) => L = ne), I), Se, je = h, S = () => (je(), je = p(d, (ne) => Se = ne), d), fe, H = h, re = () => (H(), H = p(g, (ne) => fe = ne), g), ye, Ke = h, Ge = () => (Ke(), Ke = p(c, (ne) => ye = ne), c), Me, Pe = h, R = () => (Pe(), Pe = p(tt, (ne) => Me = ne), tt), Te, oe = h, ot = () => (oe(), oe = p(o, (ne) => Te = ne), o), et, K = h, Ce = () => (K(), K = p(T, (ne) => et = ne), T), ze, ce = h, lt = () => (ce(), ce = p(_, (ne) => ze = ne), _), { componentContext: pe } = t, { layoutParams: be = void 0 } = t;
  const Ze = sr($r), Je = Ze.direction;
  ke = p(Je, (ne) => ae = ne);
  const De = Ze.genId("pager"), At = Ze.getCustomization("pagerLeftClass"), Xe = Ze.getCustomization("pagerRightClass"), q = Ze.isDesktop;
  Q = p(q, (ne) => le = ne);
  let Ye, dt, Le = !1, tt, Be = 0, yt = 0, Ut = !1, jt = "horizontal", kt = "0em", ge = {}, we = "", Vt = "", Pt = "", St = {}, qe = "start", Yt = "center", W = [], Re = 0, bt = [], Ie = {}, rt = {}, Tt, xt, He = !1, nt = !1, Dt = !1, ft = "";
  function Zt() {
    ge = {}, St = {}, qe = "start", Yt = "center", He = !1, nt = !1;
  }
  function er(ne) {
    pe = Tt = {
      ...pe,
      json: {
        ...pe.json,
        items: ne.filter(zn)
      }
    };
  }
  function zt(ne, ve) {
    xt && xt.update({
      instId: De,
      currentItem: rt[ve],
      size: ne,
      scrollToPagerItem(Et) {
        Xt(Ie[Et]);
      }
    });
  }
  function tr(ne) {
    var Et;
    if (ne === yt || (yt = ne, !W[ne]))
      return;
    const ve = (Et = W[ne].json) == null ? void 0 : Et.selected_actions;
    ve != null && ve.length && pe.execAnyActions(ve);
  }
  function Mt(ne, ve) {
  }
  function Xt(ne, ve = !0) {
    var Et;
    (Et = rt[ne]) != null;
  }
  function It(ne, ve) {
    return nt && ne >= -Rn && ne < Re + Rn ? ne : ne > bt.length - 1 ? ve === "ring" ? Tn(ne, bt.length) : bt.length - 1 : ne < 0 ? ve === "ring" ? Tn(ne, bt.length) : 0 : ne;
  }
  function ct(ne, ve, Et) {
    It(rt[Be] - ne, ve);
  }
  function pt(ne, ve, Et) {
    It(rt[Be] + ne, ve);
  }
  function nr() {
    xt == null || xt.destroy(), xt = void 0, Ye && (Ze.unregisterInstance(Ye), Ye = void 0), pe.fakeElement || (xt = pe.registerPager(pe.id || void 0)), pe.id && !pe.fakeElement && (Ye = pe.id, Ze.registerInstance(
      Ye,
      {
        setCurrentItem(ne, ve) {
          if (ne < 0 || ne > W.length - 1)
            throw new Error('Item is out of range in "set-current-item" action');
          Xt(ne, ve);
        },
        setPreviousItem: ct,
        setNextItem: pt,
        scrollToStart(ne) {
          Xt(bt[nt ? Rn : 0].index, ne);
        },
        scrollToEnd(ne) {
          Xt(bt[bt.length - 1 - (nt ? Rn : 0)].index, ne);
        },
        scrollCombined({ step: ne, overflow: ve, animated: Et }) {
          ne && Xt(It(rt[Be] + ne, ve || "clamp"), Et);
        }
      },
      "warn"
    ));
  }
  function O() {
    Fn().then(() => {
      Xt(Be, !1);
    });
  }
  Pr(() => {
    Le = !1, W.forEach((ne) => {
      ne.destroy();
    }), Ye && (Ze.unregisterInstance(Ye), Ye = void 0), xt == null || xt.destroy(), xt = void 0;
  }), t.componentContext === void 0 && e.componentContext && pe !== void 0 && e.componentContext(pe), t.layoutParams === void 0 && e.layoutParams && be !== void 0 && e.layoutParams(be), i = pe.origJson, i && Zt(), ot(o = typeof ((rr = pe.json.item_builder) == null ? void 0 : rr.data) == "string" ? pe.getDerivedFromVars((Jt = pe.json.item_builder) == null ? void 0 : Jt.data, void 0, !0) : (xe = pe.json.item_builder) != null && xe.data ? Hn(pe.json.item_builder.data) : void 0), Fe(a = pe.getDerivedFromVars(pe.json.layout_mode)), Ge(c = pe.getDerivedFromVars(pe.json.orientation)), re(g = pe.getDerivedFromVars(pe.json.item_spacing)), S(d = pe.getDerivedFromVars(pe.json.paddings)), lt(_ = pe.getDerivedFromVars(pe.json.restrict_parent_scroll)), te(k = pe.getDerivedFromVars(pe.json.cross_axis_alignment)), Ne(I = pe.getDerivedFromVars(pe.json.scroll_axis_alignment)), Ce(T = pe.getDerivedFromVars(pe.json.infinite_scroll)), He = Fr(et, He);
  {
    let ne = [];
    if (pe.json.item_builder && Array.isArray(Te) && Array.isArray(pe.json.item_builder.prototypes)) {
      const y = pe.json.item_builder;
      ne = Zo(Te, Ze, pe, y);
    } else
      ne = (Array.isArray(pe.json.items) && pe.json.items || []).map((y, U) => ({
        div: y,
        key: y.id || { index: U, data: y }
      }));
    const ve = new Set(W), Et = /* @__PURE__ */ new Map();
    let $ = !1;
    Tt === pe && W.forEach((y) => {
      y.key && (typeof y.key == "string" && Et.has(y.key) ? $ || ($ = !0, pe.logError(C(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: y.key } }))) : Et.set(
        typeof y.key == "string" ? y.key : y.key.index,
        y
      ));
    }), W = ne.map((y, U) => {
      let v = !$ && Et.get(y.id), N = Et.get(U);
      return !v && !y.id && typeof y.key == "object" && typeof (N == null ? void 0 : N.key) == "object" && Oi(N.key.data, y.key.data) && (v = N), v ? (ve.delete(v), v) : pe.produceChildContext(y.div, {
        path: U,
        variables: y.vars,
        id: y.id,
        key: y.key
      });
    });
    for (const y of ve)
      y.destroy();
    Tt = pe;
  }
  {
    let ne = [];
    W.forEach((ve) => {
      ne.push(pe.getDerivedFromVars({
        width: ve.json.width,
        height: ve.json.height,
        visibility: ve.json.visibility
      }));
    }), R(tt = zi(ne, (ve) => [...ve]));
  }
  {
    if (rt = {}, Ie = {}, bt = Me.map((ne, ve) => ({
      width: ne.width,
      height: ne.height,
      index: ve,
      componentContext: W[ve]
    })).filter((ne, ve) => Me[ve].visibility !== "gone"), bt.forEach((ne, ve) => {
      Ie[ve] = ne.index, rt[ne.index] = ve;
    }), Re = bt.length, He && bt.length >= Rn) {
      const ne = bt.slice(0, Rn).map((Et) => ({
        ...Et,
        componentContext: Et.componentContext.dup(Mi),
        duplicate: !0
      })), ve = bt.slice(bt.length - Rn).map((Et) => ({
        ...Et,
        componentContext: Et.componentContext.dup(Mi),
        duplicate: !0
      }));
      ne.forEach((Et, $) => {
        Ie[bt.length + $] = $;
      }), ve.forEach((Et, $) => {
        Ie[$ - Rn] = bt.length - Rn + $;
      }), bt = [].concat(ve, bt, ne), nt = !0;
    } else
      nt = !1;
    O();
  }
  me ? me.type !== "percentage" && me.type !== "fixed" && me.type !== "wrap_content" ? (Ut = !0, pe.logError(C(new Error('Incorrect value of "layout_mode.type" for div "pager"')))) : Ut = !1 : (Ut = !0, pe.logError(C(new Error('Empty "layout_mode" prop for div "pager"')))), jt = Ws(ye, jt);
  {
    const ne = fe == null ? void 0 : fe.value;
    ne && an(ne) && (kt = Wr(ne || 0));
  }
  ge = Qn(Se, ge), we = En(ge, ae), D = jt === "horizontal" ? "grid-auto-columns" : "grid-auto-rows", B = jt === "horizontal" ? "grid-template-columns" : "grid-template-rows", (L === "start" || L === "center" || L === "end") && (Yt = L, O());
  {
    const ne = Wr(jt === "horizontal" ? (ge == null ? void 0 : ge.start) || (ae === "ltr" ? ge == null ? void 0 : ge.left : ge == null ? void 0 : ge.right) || 0 : (ge == null ? void 0 : ge.top) || 0), ve = Wr(jt === "horizontal" ? (ge == null ? void 0 : ge.end) || (ae === "ltr" ? ge == null ? void 0 : ge.right : ge == null ? void 0 : ge.left) || 0 : (ge == null ? void 0 : ge.bottom) || 0);
    if ((me == null ? void 0 : me.type) === "fixed") {
      const Et = ((ir = me.neighbour_page_width) == null ? void 0 : ir.value) || 0;
      Yt === "center" ? Vt = `calc(100% + ${ne} + ${ve} - 2 * ${Wr(Et)} - 2 * ${kt})` : Yt === "start" ? Vt = `calc(100% + ${ve} - ${Wr(Et)} - ${kt})` : Vt = `calc(100% + ${ne} - ${Wr(Et)} - ${kt})`, Pt = "";
    } else if ((me == null ? void 0 : me.type) === "percentage") {
      let Et = (Kt = me.page_width) == null ? void 0 : Kt.value;
      (typeof Et != "number" || Et < 0) && (Et = 100), Vt = `calc(${(Et / 100).toFixed(2)} * (100% + ${ne} + ${ve}))`, Pt = "";
    } else (me == null ? void 0 : me.type) === "wrap_content" && (Vt = "", Pt = bt.map((Et) => {
      var U, v;
      const $ = Et[jt === "horizontal" ? "width" : "height"];
      if (($ == null ? void 0 : $.type) === "fixed" || ($ == null ? void 0 : $.type) === "wrap_content")
        return "minmax(max-content, auto)";
      let y = "100%";
      return ($ == null ? void 0 : $.type) === "match_parent" && (an((U = $.max_size) == null ? void 0 : U.value) && (y = `min(${y}, ${Wr($.max_size.value)})`), an((v = $.min_size) == null ? void 0 : v.value) && (y = `max(${y}, ${Wr($.min_size.value)})`)), y;
    }).join(" "));
  }
  if ((_e === "start" || _e === "center" || _e === "end") && (qe = _e, St = {
    [jt === "horizontal" ? "parentVAlign" : "parentHAlign"]: qe
  }), V = {
    "grid-gap": kt,
    padding: we,
    [D]: Vt,
    [B]: Pt,
    transform: ft
  }, A = {
    animated: Dt,
    clip: Ze.pagerChildrenClipEnabled,
    orientation: jt,
    "cross-align": qe,
    "scroll-align": Yt
  }, $e = Ut, Y = le && Le && !$e, pe.json) {
    const ne = pe.getJsonWithVars(pe.json.default_item);
    typeof ne == "number" && ne >= 0 && ne < W.length && (Be = yt = ne, zt(W.length, ne)), nr();
  }
  return ue = nt || (ae === "ltr" ? rt[Be] > 0 : rt[Be] + 1 < bt.length), Z = nt || (ae === "ltr" ? rt[Be] + 1 < bt.length : rt[Be] > 0), zt(Re, Be), tr(Be), ke(), Q(), de(), Ve(), We(), je(), H(), Ke(), Pe(), oe(), K(), ce(), ` ${$e ? "" : `${Wt(Lr, "Outer").$$render(
    r,
    {
      cls: Ht("pager", ui, A),
      componentContext: pe,
      layoutParams: be,
      customPaddings: !0,
      parentOf: W,
      replaceItems: er
    },
    {},
    {
      default: () => `  <div class="${gt(ui.pager__items, !0) + " " + gt(
        ze ? Jr["root_restrict-scroll"] : "",
        !0
      )}"${m("style", Cr(V), 0)}${m("this", dt, 0)}>${Vr(bt, (ne) => `<div${m("class", Ht("pager__item", ui, sg(jt, ne)), 0)} role="tabpanel" id="${gt(De, !0) + "-panel-" + gt(ne.index, !0)}" aria-labelledby="${gt(De, !0) + "-tab-" + gt(ne.index, !0)}">${Wt(gn, "Unknown").$$render(
        r,
        {
          componentContext: ne.componentContext,
          layoutParams: St
        },
        {},
        {}
      )} </div>`)}</div> ${ue && Y ? `  <div${m("class", At || `${ui.pager__arrow} ${xi.arrow} ${xi.arrow_left}`, 0)}>${At ? "" : `<svg${m("class", xi.arrow__icon, 0)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path${m("class", ui["pager__arrow-icon-path"], 0)} d="m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"></path></svg>`}</div>` : ""} ${Z && Y ? `  <div${m("class", Xe || `${ui.pager__arrow} ${xi.arrow} ${xi.arrow_right}`, 0)}>${Xe ? "" : `<svg${m("class", xi.arrow__icon, 0)} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path${m("class", ui["pager__arrow-icon-path"], 0)} d="M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"></path></svg>`}</div>` : ""}`
    }
  )}`}`;
}), lg = "appkit-indicator", cg = "appkit-indicator_visible", ug = "appkit-indicator__scroller", dg = "appkit-indicator__items", fg = "appkit-indicator__item", gg = "appkit-indicator_placement_default", pg = "appkit-indicator__item_active", _g = "appkit-indicator_direction_ltr", hg = "appkit-indicator_direction_rtl", mg = "appkit-indicator_placement_stretch", lo = {
  indicator: lg,
  indicator_visible: cg,
  indicator__scroller: ug,
  indicator__items: dg,
  indicator__item: fg,
  indicator_placement_default: gg,
  indicator__item_active: pg,
  indicator_direction_ltr: _g,
  indicator_direction_rtl: hg,
  indicator_placement_stretch: mg
}, fs = ["rounded_rectangle", "circle"], bg = gr((r, t, e, n) => {
  var Ze, Je;
  let i, o, a, c, g, d, _, k, I, T, D, B, V, A = h, $e = () => (A(), A = p(k, (De) => V = De), k), Y, ue = h, Z = () => (ue(), ue = p(I, (De) => Y = De), I), ae, ke = h, le = () => (ke(), ke = p(a, (De) => ae = De), a), Q, _e = h, de = () => (_e(), _e = p(c, (De) => Q = De), c), te, me = h, Ve = () => (me(), me = p(o, (De) => te = De), o), Fe, L = h, We = () => (L(), L = p(g, (De) => Fe = De), g), Ne, Se = h, je = () => (Se(), Se = p(_, (De) => Ne = De), _), S, fe = h, H = () => (fe(), fe = p(d, (De) => S = De), d), { componentContext: re } = t, { layoutParams: ye = void 0 } = t;
  const Ge = sr($r).direction;
  B = p(Ge, (De) => D = De);
  let Me = {
    width: 13,
    height: 13,
    borderRadius: 6.5,
    background: "#ffdc60"
  }, Pe = {
    width: 10,
    height: 10,
    borderRadius: 5,
    background: "#33919cb5"
  }, R = "default", Te = 15, oe = 10, ot = 5, et, K, Ce, ze, ce = !1;
  function lt() {
    R = "default", Te = 15, oe = 10, ot = 5, Me = {
      width: 13,
      height: 13,
      borderRadius: 6.5,
      background: "#ffdc60"
    }, Pe = {
      width: 10,
      height: 10,
      borderRadius: 5,
      background: "#33919cb5"
    };
  }
  async function pe(De) {
    Ce = De, await Fn();
  }
  function be() {
    ze == null || ze(), ze = void 0;
    const De = re.json.pager_id;
    ze = re.listenPager(De, pe);
  }
  if (Pr(() => {
    ce = !1, ze == null || ze(), ze = void 0;
  }), t.componentContext === void 0 && e.componentContext && re !== void 0 && e.componentContext(re), t.layoutParams === void 0 && e.layoutParams && ye !== void 0 && e.layoutParams(ye), i = re.origJson, i && lt(), i && ce && be(), Ve(o = re.getDerivedFromVars(re.json.shape)), le(a = re.getDerivedFromVars(re.json.active_item_color)), de(c = re.getDerivedFromVars(re.json.inactive_item_color)), We(g = re.getDerivedFromVars(re.json.active_item_size)), H(d = re.getDerivedFromVars(re.json.active_shape)), je(_ = re.getDerivedFromVars(re.json.inactive_shape)), $e(k = re.getDerivedFromVars(re.json.space_between_centers)), Z(I = re.getDerivedFromVars(re.json.items_placement)), S && (Me = kn(
    {
      type: "shape_drawable",
      shape: S
    },
    fs,
    Me
  )), Ne && (Pe = kn(
    {
      type: "shape_drawable",
      shape: Ne
    },
    fs,
    Pe
  )), !S && !Ne && te) {
    const De = un(Fe, 1.3);
    Pe = kn(
      {
        type: "shape_drawable",
        shape: te,
        color: Pe.background
      },
      fs,
      Pe
    ), Pe.background = Ot(Q, 1, Pe.background), Me = {
      ...Pe,
      width: Pe.width * De,
      height: Pe.height * De,
      borderRadius: Pe.borderRadius * De,
      background: Me.background
    }, Me.background = Ot(ae, 1, Me.background);
  }
  if (Y && (Y.type === "default" || Y.type === "stretch")) {
    if (R = Y.type, R === "default")
      Te = Sr((Ze = Y.space_between_centers) == null ? void 0 : Ze.value, Te);
    else if (R === "stretch") {
      const De = Y;
      oe = un(De.max_visible_items, oe), ot = Sr((Je = De.item_spacing) == null ? void 0 : Je.value, ot);
    }
  } else
    R = "default", V && (Te = Sr(V.value, Te));
  return T = {
    placement: R,
    direction: D,
    visible: (Ce == null ? void 0 : Ce.size) > 1
  }, B(), A(), ue(), ke(), _e(), me(), L(), Se(), fe(), `${Wt(Lr, "Outer").$$render(
    r,
    {
      cls: Ht("indicator", lo, T),
      componentContext: re,
      layoutParams: ye
    },
    {},
    {
      default: () => `<div${m("class", lo.indicator__scroller, 0)}${m("this", et, 0)}><div${m("class", lo.indicator__items, 0)} role="tablist"${Ar({
        margin: R === "default" ? `0 ${ee(Math.max(0, Me.width - Pe.width) / 2)}` : "",
        "--divkit-indicator-inactive-width": ee(Pe.width),
        "--divkit-indicator-inactive-height": ee(Pe.height),
        "--divkit-indicator-inactive-border-radius": ee(Pe.borderRadius),
        "--divkit-indicator-inactive-background": Pe.background || "",
        "--divkit-indicator-inactive-box-shadow": Pe.boxShadow || "",
        "--divkit-indicator-active-width": ee(Me.width),
        "--divkit-indicator-active-height": ee(Me.height),
        "--divkit-indicator-active-border-radius": ee(Me.borderRadius),
        "--divkit-indicator-active-background": Me.background || "",
        "--divkit-indicator-active-box-shadow": Me.boxShadow || "",
        "--divkit-indicator-active-scale": Me.width / Pe.width,
        "--divkit-indicator-default-margin": R === "default" ? `0 ${ee((Te - Pe.width) / 2)}` : "",
        "--divkit-indicator-stretch-margin": R === "stretch" ? ee(ot) : "",
        "--divkit-indicator-stretch-max-count": R === "stretch" ? oe : "",
        "--divkit-indicator-stretch-max-spacer": R === "stretch" ? ee((oe - 1) * ot) : ""
      })}${m("this", K, 0)}>${Ce ? `${Vr(Array(Ce.size), (De, At) => {
        let Xe = At === Ce.currentItem;
        return ` <div class="${gt(Ht("indicator__item", lo, { active: Xe }), !0) + " " + gt(Jr.root__clickable, !0)}" role="tab" id="${gt(Ce.instId, !0) + "-tab-" + gt(At, !0)}" aria-controls="${gt(Ce.instId, !0) + "-panel-" + gt(At, !0)}"${m("aria-selected", Xe ? "true" : "false", 0)}${m("tabindex", Xe ? 0 : -1, 0)}></div>`;
      })}` : ""}</div></div>`
    }
  )}`;
}), vg = "appkit-slider", yg = "appkit-slider__input", wg = "appkit-slider__input_secondary", $g = "appkit-slider__thumb", jg = "appkit-slider_direction_rtl", kg = "appkit-slider__thumb_secondary", xg = "appkit-slider__track", Eg = "appkit-slider__tick", Ag = "appkit-slider__tick_active", Cg = "appkit-slider__tick_inactive", Kr = {
  slider: vg,
  slider__input: yg,
  slider__input_secondary: wg,
  slider__thumb: $g,
  slider_direction_rtl: jg,
  slider__thumb_secondary: kg,
  "slider__tracks-wrapper": "appkit-slider__tracks-wrapper",
  "slider__tracks-inner": "appkit-slider__tracks-inner",
  "slider__tracks-ranges": "appkit-slider__tracks-ranges",
  "slider__tracks-ranges_rtl": "appkit-slider__tracks-ranges_rtl",
  slider__track: xg,
  "slider__thumb-text": "appkit-slider__thumb-text",
  "slider__thumb-text_secondary": "appkit-slider__thumb-text_secondary",
  slider__tick: Eg,
  slider__tick_active: Ag,
  slider__tick_inactive: Cg
};
function Oa(r, t, e) {
  var c, g;
  if (!r || !r.font_size)
    return e;
  const n = r.offset, i = r.text_color && Ot(r.text_color) || "#000", o = ei(r.font_weight, r.font_weight_value, void 0), a = gi(r.font_variation_settings) || void 0;
  if (tn(r.font_size) && i !== "transparent") {
    const d = {
      fontSize: ee(r.font_size),
      fontWeight: o,
      fontVariationSettings: a,
      textColor: i
    };
    return typeof ((c = n == null ? void 0 : n.x) == null ? void 0 : c.value) == "number" && typeof ((g = n == null ? void 0 : n.y) == null ? void 0 : g.value) == "number" && (d.offset = {
      x: n.x.value,
      y: n.y.value
    }), r.font_family && typeof r.font_family == "string" && (d.fontFamily = t(r.font_family, {
      fontWeight: o
    }) || ""), d;
  }
}
function Wn(r, t, e) {
  return Math.max(t, Math.min(e, Number(r)));
}
function Us(r) {
  return BigInt(r);
}
const eo = Us("9223372036854775807"), to = Us("-9223372036854775808");
function Rr(r) {
  const t = Us(r);
  if (t > eo || t < to)
    throw new Error("Integer overflow.");
  return t;
}
const pi = Rr(0);
function Ul(r) {
  let t = r;
  return t < 0 && (t = -t), t;
}
function Gl(r) {
  let t = 0;
  return r > 0 ? t = 1 : r < 0 && (t = -1), Rr(t);
}
function yn(r, t) {
  var e;
  switch ((e = t[r.type]) == null || e.call(t, r), r.type) {
    case "TemplateLiteral":
      r.expressions.forEach((n) => {
        yn(n, t);
      });
      break;
    case "BinaryExpression":
    case "LogicalExpression":
      yn(r.left, t), yn(r.right, t);
      break;
    case "UnaryExpression":
      yn(r.argument, t);
      break;
    case "ConditionalExpression":
      yn(r.test, t), yn(r.consequent, t), yn(r.alternate, t);
      break;
    case "TryExpression":
      yn(r.test, t), yn(r.alternate, t);
      break;
    case "CallExpression":
      r.arguments.forEach((n) => {
        yn(n, t);
      });
      break;
    case "MethodExpression":
      yn(r.object, t), r.arguments.forEach((n) => {
        yn(n, t);
      });
      break;
  }
}
const Vg = 2147483647, Fg = -2147483648, Sg = Number.MAX_VALUE, Dg = Number.MIN_VALUE, Ee = "string", he = "integer", Qe = "number", vr = "boolean", Nr = "color", bn = "url", fr = "datetime", Rt = "dict", Lt = "array", Ig = "function";
class Gs extends Error {
}
function Ro(r) {
  return r.type === "url" || r.type === "color" ? {
    type: "string",
    value: r.value
  } : r;
}
function Jl(r) {
  return r.toISOString().replace("T", " ").replace(/\.\d{3}Z$/, "");
}
function _i(r, t) {
  if (r.type === "string")
    return r.value;
  if (r.type === "integer")
    return String(r.value);
  if (r.type === "number") {
    let e = String(r.value);
    return e.includes(".") || (e.includes("e") ? e = e.replace("e", ".0e") : e += ".0"), e = e.replace(/e\+?/i, "E"), e;
  } else {
    if (r.type === "boolean")
      return r.value ? "true" : "false";
    if (r.type === "datetime")
      return Jl(r.value);
    if (r.type === "color")
      return mi(Xo(r.value));
    if (r.type === "url")
      return r.value;
    if ((r.type === "dict" || r.type === "array") && t)
      return JSON.stringify(r.value);
    if (r.type === "dict")
      return "<dict>";
    if (r.type === "array")
      return "<array>";
    if (r.type === "function")
      return r.value[0].name || "Function";
  }
  throw new Error(`Unexpected type ${r.type}`);
}
function Br(r) {
  let t = _i(r, !1);
  return r.type === "string" && (t = "'" + t.replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'"), t;
}
function _n(r) {
  return r === "datetime" ? "DateTime" : r.charAt(0).toUpperCase() + r.substring(1);
}
function hi(r, t) {
  return Rr(t);
}
function ln(r, t) {
  if (t < to || t > eo)
    throw new Error("Integer overflow.");
}
function An(r) {
  if (typeof r != "string")
    throw new Error("Incorrect url value.");
  try {
    new URL(r);
  } catch {
    throw new Error("Incorrect url value.");
  }
}
function Tg(r) {
  try {
    return An(r), !0;
  } catch {
    return !1;
  }
}
function Mg(r) {
  const t = /* @__PURE__ */ new Set();
  return yn(r, {
    Variable(e) {
      t.add(e.id.name);
    }
  }), [...t];
}
function Xr(r, t) {
  throw new Gs(`Failed to evaluate [${r}]. ${t}`);
}
function Pg(r, t) {
  throw new Error(t);
}
function Xo(r) {
  const t = xn(r);
  if (t)
    return t;
  throw new Error("Unable to convert value to Color, expected format #AARRGGBB.");
}
function mi(r) {
  return `#${[r.a, r.r, r.g, r.b].map((t) => {
    if (t < 0 || t > 255)
      throw new Error("Value out of range 0..1.");
    return Tl(Math.round(t).toString(16), 2);
  }).join("").toUpperCase()}`;
}
function ti(r) {
  return mi(Xo(r));
}
function xs(r) {
  return {
    type: Qe,
    value: Number(r.value)
  };
}
const zg = {
  string: "string",
  number: "number",
  integer: "number",
  boolean: "boolean",
  color: "string",
  url: "string",
  array: "array",
  dict: "object",
  datetime: "never"
};
function Qo(r, t, e) {
  if (e === "function")
    throw new Error("Cannot convert function");
  const n = zg[e];
  let i = typeof t;
  if (n === "array" && !Array.isArray(t) || n !== "array" && i !== n || i === "object" && t === null)
    throw i === "object" && (Array.isArray(t) ? i = "array" : t === null ? i = "null" : i = "dict"), new Error(`Incorrect value type: expected ${_n(e)}, got ${_n(i)}.`);
  if (n === "number" && e === "integer") {
    r && ln(r, t);
    try {
      t = Rr(t);
    } catch {
      throw new Error("Cannot convert value to integer.");
    }
  }
  return n === "string" && e === "color" && (t = ti(t)), n === "string" && e === "url" && An(t), n === "boolean" && e === vr && (t = t ? 1 : 0), {
    type: e,
    value: t
  };
}
function Og(r) {
  return r.type === "number" || r.type === "integer" ? Number(r.value) : r.type === "boolean" ? !!r.value : r.value;
}
function es(r) {
  return Og(
    Qo(void 0, r.value, r.type)
  );
}
class Gn {
  constructor(t, e) {
    Mr(this, "name");
    Mr(this, "value");
    Mr(this, "store");
    const n = this.convertValue(e);
    this.name = t, this.value = n;
  }
  getName() {
    return this.name;
  }
  subscribe(t) {
    return this.store || (this.store = Mn(this.value)), this.store.subscribe(t);
  }
  set(t) {
    const e = this.fromString(t);
    this.setValue(e);
  }
  setValue(t) {
    const e = this.convertValue(t);
    this.value = e, this.store && this.store.set(e);
  }
  getValue() {
    return this.value;
  }
}
class ql extends Gn {
  convertValue(t) {
    if (typeof t != "string")
      throw new Error("Incorrect variable value");
    return t;
  }
  fromString(t) {
    return t;
  }
  getType() {
    return "string";
  }
}
class Yl extends Gn {
  convertValue(t) {
    if (typeof t != "bigint" && typeof t != "number")
      throw new Error("Incorrect variable value");
    try {
      return Rr(t);
    } catch {
      throw new Error("Incorrect variable value");
    }
  }
  fromString(t) {
    try {
      return Rr(t);
    } catch {
      throw new Error("Incorrect variable value");
    }
  }
  getType() {
    return "integer";
  }
}
class Kl extends Gn {
  convertValue(t) {
    if (typeof t != "number" || Number.isNaN(t) || !isFinite(t))
      throw new Error("Incorrect variable value");
    return t;
  }
  fromString(t) {
    const e = Number(t);
    return this.convertValue(e);
  }
  getType() {
    return "number";
  }
}
class Zl extends Gn {
  convertValue(t) {
    if (t !== 1 && t !== 0 && t !== !0 && t !== !1)
      throw new Error("Incorrect variable value");
    return !!t;
  }
  fromString(t) {
    if (t === "1" || t === "true")
      return !0;
    if (t === "0" || t === "false")
      return !1;
    throw new Error("Incorrect variable value");
  }
  getType() {
    return "boolean";
  }
}
class Xl extends Gn {
  convertValue(t) {
    if (typeof t != "string" || !xn(t))
      throw new Error("Incorrect variable value");
    return ti(t);
  }
  fromString(t) {
    return this.convertValue(t);
  }
  getType() {
    return "color";
  }
}
class Ql extends Gn {
  convertValue(t) {
    if (typeof t != "string")
      throw new Error("Incorrect variable value");
    return An(t), t;
  }
  fromString(t) {
    return An(t), t;
  }
  getType() {
    return "url";
  }
}
class ec extends Gn {
  convertValue(t) {
    if (typeof t != "object" || !t)
      throw new Error("Incorrect variable value");
    return t;
  }
  fromString(t) {
    try {
      return JSON.parse(t);
    } catch {
      throw new Error("Incorrect dict value");
    }
  }
  getType() {
    return "dict";
  }
}
class tc extends Gn {
  convertValue(t) {
    if (!Array.isArray(t))
      throw new Error("Incorrect variable value");
    return t;
  }
  fromString(t) {
    try {
      return JSON.parse(t);
    } catch {
      throw new Error("Incorrect array value");
    }
  }
  getType() {
    return "array";
  }
}
const Es = {
  string: ql,
  number: Kl,
  integer: Yl,
  boolean: Zl,
  color: Xl,
  url: Ql,
  dict: ec,
  array: tc
};
function pn(r, t, e) {
  if (!(t in Es))
    throw new Error("Unsupported variable type");
  return new Es[t](r, e);
}
function Ng() {
}
function Bg(r) {
  return r(this.value), Ng;
}
function Na() {
  throw new Error("Cannot change the value of this type of variable");
}
class Rg extends ql {
}
class Lg extends Kl {
}
class Hg extends Yl {
}
class Wg extends Zl {
}
class Ug extends Xl {
}
class Gg extends Ql {
}
class Jg extends ec {
}
class qg extends tc {
}
class Yg extends Gn {
  convertValue(t) {
    if (!(t instanceof Date))
      throw new Error("Incorrect variable value");
    return t;
  }
  fromString() {
    throw new Error("Datetime variable does not support setter from string");
  }
  getType() {
    return "datetime";
  }
}
const Lo = {
  string: Rg,
  number: Lg,
  integer: Hg,
  boolean: Wg,
  color: Ug,
  url: Gg,
  dict: Jg,
  array: qg,
  datetime: Yg
};
for (const r in Lo) {
  const t = Lo[r];
  t.prototype.subscribe = Bg, t.prototype.set = Na, t.prototype.setValue = Na;
}
function xo(r, t, e) {
  if (!(t in Lo))
    throw new Error("Unsupported variable type");
  return new Lo[t](r, e);
}
function Kg(r) {
  const t = r.getType();
  let e = r.getValue();
  return t === vr && (e = e ? 1 : 0), {
    type: t,
    value: e
  };
}
function Zg(r, t) {
  if (t === "string")
    return r;
  if (t === "integer")
    try {
      return Rr(r);
    } catch {
      throw new Error("Incorrect variable value");
    }
  else if (t === "number") {
    const e = Number(r);
    if (Number.isNaN(e) || !isFinite(e))
      throw new Error("Incorrect variable value");
    return e;
  } else if (t === "boolean") {
    if (r === "1" || r === "true")
      return !0;
    if (r === "0" || r === "false")
      return !1;
    throw new Error("Incorrect variable value");
  } else if (t === "color") {
    if (typeof r != "string" || !xn(r))
      throw new Error("Incorrect variable value");
    return ti(r);
  } else if (t === "url") {
    if (typeof r != "string")
      throw new Error("Incorrect variable value");
    return An(r), r;
  } else if (t === "dict" || t === "array")
    try {
      return JSON.parse(r);
    } catch {
      throw new Error("Incorrect dict value");
    }
  throw new Error(`Unexpected type ${t}`);
}
const mn = {
  width: 10,
  height: 10,
  borderRadius: 5,
  background: "#000"
}, co = ["rounded_rectangle", "circle"], gs = ["rounded_rectangle"];
function uo(r, t, e, n, i) {
  let o = [];
  if (i)
    for (let a = r; a < t; ++a)
      o.push((a - e) / (n - e));
  else {
    for (let a = e; a < r; ++a)
      o.push((a - e) / (n - e));
    for (let a = t; a < n + 1; ++a)
      o.push((a - e) / (n - e));
  }
  return o;
}
const Xg = gr((r, t, e, n) => {
  var Et, $, y, U;
  let i, o, a, c, g, d, _, k, I, T, D, B, V, A, $e, Y, ue, Z, ae, ke, le, Q, _e, de, te, me, Ve, Fe, L, We, Ne = h, Se = () => (Ne(), Ne = p(ae, (v) => We = v), ae), je, S = h, fe = () => (S(), S = p(ue, (v) => je = v), ue), H, re = h, ye = () => (re(), re = p(Z, (v) => H = v), Z), Ke, Ge = h, Me = () => (Ge(), Ge = p(Y, (v) => Ke = v), Y), Pe, R = h, Te = () => (R(), R = p($e, (v) => Pe = v), $e), oe, ot = h, et = () => (ot(), ot = p(A, (v) => oe = v), A), K, Ce = h, ze = () => (Ce(), Ce = p(V, (v) => K = v), V), ce, lt = h, pe = () => (lt(), lt = p(B, (v) => ce = v), B), be, Ze = h, Je = () => (Ze(), Ze = p(D, (v) => be = v), D), De, At = h, Xe = () => (At(), At = p(T, (v) => De = v), T), q, Ye = h, dt = () => (Ye(), Ye = p(I, (v) => q = v), I), Le, tt = h, Be = () => (tt(), tt = p(k, (v) => Le = v), k), yt, Ut = h, jt = () => (Ut(), Ut = p(g, (v) => yt = v), g), kt, ge = h, we = () => (ge(), ge = p(c, (v) => kt = v), c), Vt, Pt = h, St = () => (Pt(), Pt = p(_, (v) => Vt = v), _), qe, Yt = h, W = () => (Yt(), Yt = p(d, (v) => qe = v), d), { componentContext: Re } = t, { layoutParams: bt = void 0 } = t;
  const Ie = sr($r), rt = sr(Pn), Tt = Ie.direction;
  L = p(Tt, (v) => Fe = v);
  let xt, He, nt = 0, Dt = 100, ft = mn, Zt = ft, er = mn, zt = mn, tr, Mt = null, Xt, It = null, ct, pt = ct, nr = "", O = "", rr = !0, Jt = !1, xe = [];
  function ir() {
    ft = mn, Zt = ft, er = mn, zt = mn, Mt = null, It = null, ct = void 0, pt = void 0, nr = "", rr = !0, O = "";
  }
  let Kt = Wn(kt || 0, nt, Dt), ne = Wn(yt || 0, nt, Dt);
  function ve({ direction: v, minValue: N, maxValue: Ae, trackActiveOffset: _t, trackActivePart: wt, trackInactiveStyle: Ct, trackActiveStyle: _r, ranges: s = [] }) {
    const ht = [], Dr = (ie, P, ar) => {
      var Bt, zr, lr, st;
      const yr = (wr, Hr, cr, G) => {
        var Or, qr, jr, Qr;
        const rn = Math.max(wr, P);
        if (Math.min(Hr, ar) - rn > 0) {
          const f = G && (qr = (Or = G[v === "ltr" ? "start" : "end"]) != null ? Or : G.left) != null ? qr : 0, b = G && (Qr = (jr = G[v === "ltr" ? "end" : "start"]) != null ? jr : G.right) != null ? Qr : 0;
          ht.push({
            left: wr,
            right: Hr,
            totalLeft: P,
            totalRight: ar,
            leftMargin: f,
            rightMargin: b,
            style: cr
          });
        }
      };
      if ((!s[0] || ((Bt = s[0].start) != null ? Bt : N) > P) && yr(P, s[0] ? (zr = s[0].start) != null ? zr : N : ar, ie === "inactive" ? Ct : _r), s.forEach((wr, Hr) => {
        var Qr, f, b, w;
        const cr = wr[ie === "inactive" ? "track_inactive_style" : "track_active_style"], rn = cr ? kn(cr, gs, mn) : ie === "inactive" ? Ct : _r, Ur = s[Hr - 1], Or = s[Hr + 1], qr = (f = (Qr = wr.start) != null ? Qr : Ur == null ? void 0 : Ur.end) != null ? f : P, jr = (w = (b = wr.end) != null ? b : Or == null ? void 0 : Or.start) != null ? w : ar;
        yr(qr, jr, rn, wr.margins);
      }), s[s.length - 1] && ((lr = s[s.length - 1].end) != null ? lr : Ae) < ar) {
        const wr = (st = s[s.length - 1].end) != null ? st : Ae;
        yr(wr, ar, ie === "inactive" ? Ct : _r);
      }
    };
    Dr("inactive", N, Ae), Dr("active", _t, _t + wt);
    const ut = Ae - N;
    xe = ht.map((ie) => {
      let P = `${(ie.left - N) * 100 / ut}%`;
      ie.leftMargin && (P = `calc(${P} + ${Wr(ie.leftMargin)})`);
      let ar;
      ie.totalLeft < ie.left ? ar = P : ie.leftMargin ? ar = `max(${(ie.totalLeft - N) * 100 / ut}%, ${P})` : ar = `${(Math.max(ie.totalLeft, ie.left) - N) * 100 / ut}%`;
      let yr = `${(1 - (ie.right - N) / ut) * 100}%`;
      ie.rightMargin && (yr = `calc(${yr} + ${Wr(ie.rightMargin)})`);
      let Bt;
      return ie.totalRight > ie.right ? Bt = yr : ie.rightMargin ? Bt = `max(${(1 - (ie.totalRight - N) / ut) * 100}%, ${yr})` : Bt = `${(1 - (Math.max(ie.totalRight, ie.right) - N) / ut) * 100}%`, {
        left: ar,
        right: Bt,
        height: ee(ie.style.height),
        borderRadius: ee(ie.style.borderRadius),
        background: ie.style.background,
        boxShadow: ie.style.boxShadow || ""
      };
    });
  }
  Pr(() => {
  }), t.componentContext === void 0 && e.componentContext && Re !== void 0 && e.componentContext(Re), t.layoutParams === void 0 && e.layoutParams && bt !== void 0 && e.layoutParams(bt), i = Re.origJson, i && ir(), o = Re.json.thumb_value_variable, a = Re.json.thumb_secondary_value_variable, we(c = o && (Re.getVariable(o, "integer") || Ie.awaitGlobalVariable(o, "integer", 0)) || pn("temp", "integer", 0)), jt(g = a && (Re.getVariable(a, "integer") || Ie.awaitGlobalVariable(a, "integer", 0)) || pn("temp", "integer", 0)), W(d = Re.getDerivedFromVars(Re.json.min_value)), St(_ = Re.getDerivedFromVars(Re.json.max_value)), Be(k = Re.getDerivedFromVars(Re.json.thumb_style)), dt(I = Re.getDerivedFromVars(Re.json.thumb_secondary_style)), Xe(T = Re.getDerivedFromVars(Re.json.track_inactive_style)), Je(D = Re.getDerivedFromVars(Re.json.track_active_style)), pe(B = Re.getDerivedFromVars(Re.json.tick_mark_active_style)), ze(V = Re.getDerivedFromVars(Re.json.tick_mark_inactive_style)), et(A = Re.getDerivedFromVars(Re.json.thumb_text_style, void 0, !0, 1)), Te($e = Re.getDerivedFromVars(Re.json.thumb_secondary_text_style, void 0, !0, 1)), Me(Y = Re.getDerivedFromVars(Re.json.accessibility)), fe(ue = Re.getDerivedFromVars(Re.json.secondary_value_accessibility)), ye(Z = Re.getDerivedFromVars(Re.json.is_enabled)), Se(ae = Re.getDerivedFromVars(Re.json.ranges)), nt = jn(qe, nt), Dt = jn(Vt, Dt);
  {
    const v = Wn(kt || 0, nt, Dt);
    v !== Kt && (Kt = v);
  }
  {
    const v = Wn(yt || 0, nt, Dt);
    v !== ne && (ne = v);
  }
  ft = kn(Le, co, ft), Zt = kn(q, co, ft), er = kn(De, gs, er), zt = kn(be, gs, zt);
  {
    let v = kn(ce, co, mn);
    v !== mn && (Mt = v);
  }
  Mt ? tr = a ? uo(Math.min(Kt, ne), Math.max(Kt, ne) + 1, nt, Dt, !0) : uo(nt, Kt, nt, Dt, !0) : tr = [];
  {
    let v = kn(K, co, mn);
    v !== mn && (It = v);
  }
  It ? Xt = a ? uo(Math.min(Kt, ne), Math.max(Kt, ne) + 1, nt, Dt, !1) : uo(Kt + 1, Dt + 1, nt, Dt, !0) : Xt = [], ct = Oa(oe, Ie.typefaceProvider, ct), pt = Oa(Pe, Ie.typefaceProvider, ct), Ke != null && Ke.description ? nr = Un(Ke) : Re.logError(C(new Error('Missing accessibility "description" for slider'), { level: "warn" })), rr = Fr(H, rr), je != null && je.description ? O = Un(je) : a && Re.logError(C(new Error('Missing second accessibility "description" for slider'), { level: "warn" }));
  {
    let v = !1;
    rt.hasAction() ? (Re.logError(C(new Error('Cannot show "slider" inside component with an action or inside accessibility mode=exclude'))), v = !0) : ft === mn ? (Re.logError(C(new Error('Missing "thumb_style" in slider'))), v = !0) : zt === mn ? (Re.logError(C(new Error('Missing "track_active_style" in slider'))), v = !0) : er === mn && (Re.logError(C(new Error('Missing "track_inactive_style" in slider'))), v = !0), v !== Jt && (Jt = v);
  }
  return ke = ee(Math.max(...[ft.width, Zt.width, 0].filter(an))), le = ee(Math.max(...[ft.height, Zt.height, 0].filter(an))), Q = (Kt - nt) / (Dt - nt), _e = a ? (ne - nt) / (Dt - nt) : void 0, de = _e !== void 0 ? Math.min(Kt, ne) : nt, te = _e !== void 0 ? Math.abs(ne - Kt) : Kt - nt, ve({
    direction: Fe,
    minValue: nt,
    maxValue: Dt,
    trackActiveOffset: de,
    trackActivePart: te,
    trackInactiveStyle: er,
    trackActiveStyle: zt,
    ranges: We
  }), me = {
    "--divkit-slider-thumb-width": ee(ft.width),
    "--divkit-slider-thumb-height": ee(ft.height),
    "--divkit-slider-thumb-secondary-width": ee(Zt.width),
    "--divkit-slider-thumb-secondary-height": ee(Zt.height),
    "--divkit-slider-text-offset-x": (Et = ct == null ? void 0 : ct.offset) != null && Et.x ? Wr(ct.offset.x) : void 0,
    "--divkit-slider-text-offset-y": ($ = ct == null ? void 0 : ct.offset) != null && $.y ? Wr(ct.offset.y) : void 0,
    "--divkit-slider-text-secondary-offset-x": (y = pt == null ? void 0 : pt.offset) != null && y.x ? Wr(pt.offset.x) : void 0,
    "--divkit-slider-text-secondary-offset-y": (U = pt == null ? void 0 : pt.offset) != null && U.y ? Wr(pt.offset.y) : void 0,
    "--divkit-slider-tick-active-width": Mt ? ee(Mt.width) : void 0,
    "--divkit-slider-tick-active-height": Mt ? ee(Mt.height) : void 0,
    "--divkit-slider-tick-active-border-radius": Mt ? ee(Mt.borderRadius) : void 0,
    "--divkit-slider-tick-active-background": (Mt == null ? void 0 : Mt.background) || void 0,
    "--divkit-slider-tick-active-box-shadow": (Mt == null ? void 0 : Mt.boxShadow) || void 0,
    "--divkit-slider-tick-inactive-width": It ? ee(It.width) : void 0,
    "--divkit-slider-tick-inactive-height": It ? ee(It.height) : void 0,
    "--divkit-slider-tick-inactive-border-radius": It ? ee(It.borderRadius) : void 0,
    "--divkit-slider-tick-inactive-background": (It == null ? void 0 : It.background) || void 0,
    "--divkit-slider-tick-inactive-box-shadow": (It == null ? void 0 : It.boxShadow) || void 0,
    "--divkit-slider-max-thumb-width": ke,
    "--divkit-slider-max-thumb-height": le,
    "--divkit-slider-track-part": Q,
    "--divkit-slider-track-secondary-part": _e
  }, Ve = { direction: Fe }, Re.json, L(), Ne(), S(), re(), Ge(), R(), ot(), Ce(), lt(), Ze(), At(), Ye(), tt(), Ut(), ge(), Pt(), Yt(), ` ${Jt ? "" : `${Wt(Lr, "Outer").$$render(
    r,
    {
      cls: Ht("slider", Kr, Ve),
      style: me,
      customDescription: !0,
      customActions: "slider",
      hasInnerFocusable: !0,
      componentContext: Re,
      layoutParams: bt
    },
    {},
    {
      default: ({ focusHandler: v, blurHandler: N }) => `<div${m("class", Kr["slider__tracks-wrapper"], 0)}><div${m("class", Kr["slider__tracks-inner"], 0)}${m("this", He, 0)}><div${m(
        "class",
        Kr["slider__tracks-ranges"] + (Fe === "rtl" ? " " + Kr["slider__tracks-ranges_rtl"] : ""),
        0
      )}>${Vr(xe, (Ae) => `<div${m("class", Kr.slider__track, 0)}${Ar({
        left: Ae.left,
        right: Ae.right,
        height: Ae.height,
        "border-radius": Ae.borderRadius,
        background: Ae.background,
        "box-shadow": Ae.boxShadow
      })}></div>`)}</div> ${Vr(tr, (Ae) => `<div class="${gt(Kr.slider__tick, !0) + " " + gt(Kr.slider__tick_active, !0)}"${Ar({ "--divkit-slider-tick": Ae })}></div>`)} ${Vr(Xt, (Ae) => `<div class="${gt(Kr.slider__tick, !0) + " " + gt(Kr.slider__tick_inactive, !0)}"${Ar({ "--divkit-slider-tick": Ae })}></div>`)} <div${m("class", Kr.slider__thumb, 0)}${Ar({
        "border-radius": ee(ft.borderRadius),
        background: ft.background,
        "box-shadow": ft.boxShadow || ""
      })}>${ct ? `<div${m("class", Kr["slider__thumb-text"], 0)}><div${m("class", Kr["slider__thumb-text-inner"], 0)}${Ar({
        "font-size": (ct == null ? void 0 : ct.fontSize) || "1em",
        "font-weight": (ct == null ? void 0 : ct.fontWeight) || "",
        "font-family": (ct == null ? void 0 : ct.fontFamily) || "",
        "font-variation-settings": (ct == null ? void 0 : ct.fontVariationSettings) || "",
        color: (ct == null ? void 0 : ct.textColor) || "#000"
      })}>${gt(Kt)}</div></div>` : ""}</div> ${a ? `<div class="${gt(Kr.slider__thumb, !0) + " " + gt(Kr.slider__thumb_secondary, !0)}"${Ar({
        "border-radius": ee(Zt.borderRadius),
        background: Zt.background,
        "box-shadow": Zt.boxShadow || ""
      })}>${pt ? `<div class="${gt(Kr["slider__thumb-text"], !0) + " " + gt(Kr["slider__thumb-text_secondary"], !0)}"><div${m("class", Kr["slider__thumb-text-inner"], 0)}${Ar({
        "font-size": (pt == null ? void 0 : pt.fontSize) || "1em",
        "font-weight": (pt == null ? void 0 : pt.fontWeight) || "",
        "font-family": (pt == null ? void 0 : pt.fontFamily) || "",
        "font-variation-settings": (pt == null ? void 0 : pt.fontVariationSettings) || "",
        color: (pt == null ? void 0 : pt.textColor) || "#000"
      })}>${gt(ne)}</div></div>` : ""}</div>` : ""} <input type="range"${m(
        "class",
        Kr.slider__input,
        0
      )}${m("min", nt, 0)}${m("max", Dt, 0)} step="1"${m("value", Kt, 0)} ${rr ? "" : "disabled"}${m("aria-label", nr, 0)}${m("this", xt, 0)}> ${a ? `<input type="range"${m(
        "class",
        `${Kr.slider__input} ${Kr.slider__input_secondary}`,
        0
      )}${m("min", nt, 0)}${m("max", Dt, 0)} step="1"${m("value", ne, 0)} ${rr ? "" : "disabled"}${m("aria-label", O, 0)}>` : ""}</div></div>`
    }
  )}`}`;
}), Qg = "appkit-input", ep = "appkit-input__aligner", tp = "appkit-input__input", rp = "appkit-input__placeholder", np = "appkit-input__input_singleline", ip = "appkit-input__input_multiline", ps = {
  input: Qg,
  "input_alignment-horizontal_center": "appkit-input_alignment-horizontal_center",
  "input_alignment-horizontal_end": "appkit-input_alignment-horizontal_end",
  input__aligner: ep,
  input__input: tp,
  input__placeholder: rp,
  "input_alignment-vertical_start": "appkit-input_alignment-vertical_start",
  "input_alignment-vertical_end": "appkit-input_alignment-vertical_end",
  "input_alignment-vertical_baseline": "appkit-input_alignment-vertical_baseline",
  "input_highlight-color": "appkit-input_highlight-color",
  input__input_singleline: np,
  "input__scroll-wrapper": "appkit-input__scroll-wrapper",
  input__input_multiline: ip,
  "input__input_has-custom-focus": "appkit-input__input_has-custom-focus"
};
function ro(r, t) {
  if (r === t)
    return {
      start: r.length,
      added: 0,
      removed: 0
    };
  if (r.length > t.length) {
    const o = ro(t, r);
    return {
      start: o.start,
      added: o.removed,
      removed: o.added
    };
  }
  let e = 0, n = t.length - 1;
  const i = t.length - r.length;
  for (; e < n && e < r.length && r[e] === t[e]; )
    ++e;
  for (; n - i >= e && r[n - i] === t[n]; )
    --n;
  return ++n, {
    start: e,
    added: n - e,
    removed: n - e - i
  };
}
class Ba {
  constructor(t) {
    this.char = t;
  }
}
class Vn {
  constructor(t, e, n) {
    this.char = t, this.filter = e, this.placeholder = n;
  }
}
class Js {
  constructor(t) {
    Mr(this, "maskData");
    Mr(this, "filters", /* @__PURE__ */ new Map());
    Mr(this, "destructedValue", []);
    Mr(this, "cursorPos", 0);
    this.maskData = t, this.updateMaskData(t);
  }
  get cursorPosition() {
    return this.cursorPos;
  }
  get rawValue() {
    return this.collectValueRange(0, this.destructedValue.length - 1);
  }
  get value() {
    let t = "";
    for (let e = 0; e < this.destructedValue.length; ++e) {
      const n = this.destructedValue[e];
      if (n instanceof Ba)
        t += n.char;
      else if (n instanceof Vn)
        if (n.char)
          t += n.char;
        else if (this.maskData.alwaysVisible)
          t += n.placeholder;
        else
          break;
    }
    return t;
  }
  firstEmptyHolderIndex() {
    const t = this.destructedValue.findIndex((e) => e instanceof Vn && !e.char);
    return t !== -1 ? t : this.destructedValue.length;
  }
  updateMaskData(t, e = !0) {
    const n = this.maskData !== t && e ? this.rawValue : null;
    this.filters = /* @__PURE__ */ new Map(), this.maskData = t, this.maskData.decoding.forEach((i) => {
      if (i.filter)
        try {
          const o = new RegExp(i.filter);
          this.filters.set(i.key, o);
        } catch (o) {
          this.onException(C(o, {
            level: "error",
            additional: {
              key: i.key
            }
          }));
        }
    }), this.destructedValue = this.maskData.pattern.split("").map((i) => {
      const o = this.maskData.decoding.find((a) => a.key === i);
      return o ? new Vn(
        null,
        this.filters.get(o.key),
        o.placeholder
      ) : new Ba(i);
    }), n !== null && this.overrideRawValue(n);
  }
  overrideRawValue(t) {
    this.clearRange(0, this.destructedValue.length), this.replaceChars(t, 0), this.cursorPos = Math.min(this.cursorPos, this.value.length);
  }
  applyChangeFrom(t, e) {
    const n = ro(this.value, t);
    e !== void 0 && (n.start = Math.max(0, e - n.added));
    const i = this.replaceBodyTail(n, t);
    this.calculateCursorPosition(n, i);
  }
  replaceBodyTail(t, e) {
    const n = this.buildBodySubstring(t, e), i = this.buildTailSubstring(t);
    this.cleanup(t);
    const o = this.firstEmptyHolderIndex(), a = i ? this.calculateMaxShift(i, o) : void 0;
    this.replaceChars(n, o, a);
    const c = this.firstEmptyHolderIndex();
    return this.replaceChars(i, c), c;
  }
  buildBodySubstring(t, e) {
    return e.substring(t.start, t.start + t.added);
  }
  buildTailSubstring(t) {
    return this.collectValueRange(
      t.start + t.removed,
      this.destructedValue.length - 1
    );
  }
  calculateMaxShift(t, e) {
    if (this.filters.size <= 1) {
      let o = 0, a = e;
      for (; a < this.destructedValue.length; )
        this.destructedValue[a] instanceof Vn && ++o, ++a;
      return Math.max(0, o - t.length);
    }
    const n = this.calculateInsertableSubstring(t, e);
    let i = 0;
    for (; i < this.destructedValue.length && n === this.calculateInsertableSubstring(t, e + i); )
      ++i;
    return Math.max(0, i - 1);
  }
  cleanup(t) {
    if (t.added === 0 && t.removed === 1) {
      let e = t.start;
      for (; e >= 0; ) {
        const n = this.destructedValue[e];
        if (n instanceof Vn && n.char !== null) {
          n.char = null;
          break;
        } else
          --e;
      }
    }
    this.clearRange(t.start, this.destructedValue.length);
  }
  clearRange(t, e) {
    let n = t;
    for (; n < e && n < this.destructedValue.length; ) {
      const i = this.destructedValue[n];
      i instanceof Vn && (i.char = null), ++n;
    }
  }
  calculateCursorPosition(t, e) {
    const n = this.firstEmptyHolderIndex();
    let i;
    t.start < n ? i = Math.min(this.firstHolderAfter(e), this.value.length) : i = n, this.cursorPos = i;
  }
  calculateInsertableSubstring(t, e) {
    let n = "", i = e;
    const o = () => {
      var a;
      for (; i < this.destructedValue.length && !(this.destructedValue[i] instanceof Vn); )
        ++i;
      return (a = this.destructedValue[i]) == null ? void 0 : a.filter;
    };
    return t.split("").forEach((a) => {
      const c = o();
      c != null && c.test(a) && (n += a, ++i);
    }), n;
  }
  collectValueRange(t, e) {
    let n = "", i = t;
    for (; i <= e; ) {
      const o = this.destructedValue[i];
      o instanceof Vn && o.char !== null && (n += o.char), ++i;
    }
    return n;
  }
  replaceChars(t, e, n) {
    let i = this.calculateInsertableSubstring(t, e);
    n !== void 0 && (i = i.substring(0, n));
    let o = e, a = 0;
    for (; o < this.destructedValue.length && a < i.length; ) {
      const c = this.destructedValue[o], g = i[a];
      c instanceof Vn && (c.char = g, ++a), ++o;
    }
  }
  firstHolderAfter(t) {
    let e = t;
    for (; e < this.destructedValue.length && !(this.destructedValue[e] instanceof Vn); )
      ++e;
    return e;
  }
}
class op extends Js {
  constructor(t, e) {
    super(t), this.logError = e;
  }
  onException(t) {
    this.logError(t);
  }
}
function sp(r, t, e) {
  if (typeof r.pattern == "string" && Array.isArray(r.pattern_elements) && r.pattern_elements.every((n) => n.key && typeof n.key == "string")) {
    const n = {
      pattern: r.pattern,
      alwaysVisible: !!r.always_visible,
      decoding: r.pattern_elements.map((i) => ({
        key: i.key,
        filter: i.regex && typeof i.regex == "string" ? i.regex : void 0,
        placeholder: i.placeholder && typeof i.placeholder == "string" ? i.placeholder : "_"
      }))
    };
    return e ? (e.updateMaskData(n), e) : new op(n, t);
  }
  return e || null;
}
class ap extends Js {
  constructor(e = void 0, n) {
    super({
      pattern: "",
      decoding: [],
      alwaysVisible: !1
    });
    Mr(this, "currencyFormatter", new Intl.NumberFormat());
    Mr(this, "decimalSeparator", ".");
    Mr(this, "localeDigits", {});
    Mr(this, "trimZeroRegExp", new RegExp(""));
    this.logError = n, this.initFormatter(e);
  }
  updateCurrencyParams(e) {
    const n = this.parseFormat(this.rawValue) || 0;
    this.initFormatter(e);
    const i = n.toString().replace(".", this.decimalSeparator);
    this.applyChangeFrom(i);
  }
  initFormatter(e) {
    try {
      this.currencyFormatter = new Intl.NumberFormat(e, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }), this.decimalSeparator = this.currencyFormatter.format(0)[1], this.localeDigits = new Array(10).fill("").reduce((o, a, c) => (o[c] = this.currencyFormatter.format(c)[0], o), {});
      const i = Object.keys(this.localeDigits).filter((o) => o !== "0").map((o) => this.localeDigits[o]).join("|");
      this.trimZeroRegExp = new RegExp(`^${this.localeDigits[0]}+(?=${i})`);
    } catch (n) {
      this.onException(C(n, {
        level: "error",
        additional: {
          locale: e
        }
      }));
    }
  }
  invalidateMaskDataForFormatted(e) {
    const n = this.currencyFormatter.format(e), i = this.formatPattern(n), o = [{
      key: "#",
      filter: `[${[...Object.values(this.localeDigits)].join("")}]`,
      placeholder: this.localeDigits[0]
    }, {
      key: this.decimalSeparator,
      filter: `[${this.decimalSeparator}]`,
      placeholder: this.decimalSeparator
    }];
    this.updateMaskData({
      pattern: i,
      decoding: o,
      alwaysVisible: this.maskData.alwaysVisible
    }, !1);
  }
  overrideRawValue(e) {
    const n = this.parseFormat(e) || 0;
    this.invalidateMaskDataForFormatted(n), super.overrideRawValue(e);
  }
  applyChangeFrom(e, n) {
    const i = ro(this.value, e), o = this.value.lastIndexOf(this.decimalSeparator), a = e.lastIndexOf(this.decimalSeparator), c = o !== a || o === -1 && a === -1, g = this.validFormat(e, i);
    this.cleanup(i);
    const d = this.parseFormat(g) || 0;
    c && this.invalidateMaskDataForFormatted(d), this.replaceChars(g, 0), this.value.length > i.start && !this.isDigit(this.value[i.start]) ? this.cursorPos = n != null ? n : this.cursorPosition : this.cursorPos = Math.abs(this.value.length - (e.length - (n != null ? n : this.cursorPosition)));
  }
  parseFormat(e) {
    return parseFloat(
      e.replace(/./g, (n) => {
        const i = this.localeDigits[n];
        return i || (n === this.decimalSeparator ? "." : "");
      })
    );
  }
  formatPattern(e) {
    let n = "";
    for (const i of e)
      n += this.isDigit(i) ? "#" : i;
    return n;
  }
  validFormat(e, n) {
    if (!e)
      return "";
    let i = -1, o = 0;
    for (; o < e.length; ) {
      if (e[o] === this.decimalSeparator && !this.inDiff(n, o)) {
        i = o;
        break;
      }
      o++;
    }
    let a = -1;
    n.added === 1 && n.removed === 0 && [",", "."].includes(e[n.start]) && (a = n.start);
    const c = this.currencyFormatter.resolvedOptions().maximumFractionDigits || 0;
    let g = c;
    if (i !== -1)
      for (o = i; o < e.length; )
        this.isDigit(e[o]) && !this.inDiff(n, o) && g--, o++;
    else {
      let I = !1;
      for (let T = 0; T < e.length; T++) {
        const D = e[T];
        D === this.decimalSeparator ? I = !0 : !this.inDiff(n, T) && I && this.isDigit(D) && g--;
      }
    }
    const d = e.includes(this.decimalSeparator) || a !== -1, _ = [];
    o = e.length - 1;
    let k = !1;
    for (; o >= 0; ) {
      const I = e[o], T = _.length <= c;
      this.isDigit(I) ? this.inDiff(n, o) && !k && d ? g > 0 && (_.push(I), g--) : _.push(I) : T && i === -1 && o === a ? (_.push(this.decimalSeparator), k = !0) : T && I === this.decimalSeparator && (i === o || i === -1) && (_.push(this.decimalSeparator), k = !0, i = o), o--;
    }
    return _.reverse().join("").replace(this.trimZeroRegExp, "");
  }
  inDiff(e, n) {
    return e.start <= n && n < e.start + e.added;
  }
  isDigit(e) {
    return !!this.localeDigits[e];
  }
  onException(e) {
    this.logError(e);
  }
}
function lp(r, t, e) {
  return e ? (e.updateCurrencyParams(r.locale), e) : new ap(r.locale, t);
}
const cp = {
  kotlin: {
    public_default_values: !0
  },
  swift: {
    public_default_values: !0
  }
}, up = {
  rus_local: {
    value: "0 (000) 000-00-00"
  },
  rus: {
    value: "+0 (000) 000-00-00"
  },
  am: {
    value: "+000 (000) 000-00-00"
  },
  az: {
    value: "+000 (000) 000-00-00"
  },
  br: {
    value: "+00 (00) 0000-0000"
  },
  by: {
    value: "+000 (00) 000-00-00"
  },
  kg: {
    value: "+000 (000) 000-00-00"
  },
  md: {
    value: "+000 (000) 0-00-00"
  },
  kz: {
    value: "+0 (000) 000-00-00"
  },
  ua: {
    value: "+000 (00) 000-00-00"
  },
  uz: {
    value: "+000 (00) 000-00-00"
  },
  uk: {
    value: "+00 0000 000000"
  },
  swiss: {
    value: "+00 00 000-00-00"
  },
  angola: {
    value: "+000 000 000 000"
  },
  netherlands: {
    value: "+00 00 000 0000"
  },
  ge: {
    value: "+000 (000) 00-00-00"
  },
  short: {
    value: "+0 (000) 000-00-00"
  },
  middle: {
    value: "+00 (000) 000-00-00"
  },
  long: {
    value: "+000 (00) 000-00-00"
  },
  universal: {
    value: "+0000000000000"
  }
}, dp = "object", fp = {
  extra_numbers: {
    type: "string",
    enum: [
      "00"
    ]
  },
  value: {
    type: "object",
    additionalProperties: !0,
    default_value: {
      1: {
        $ref: "#/constants/short"
      },
      2: {
        0: {
          $ref: "#/constants/middle"
        },
        4: {
          4: {
            $ref: "#/constants/angola"
          },
          "*": {
            $ref: "#/constants/long"
          }
        },
        7: {
          $ref: "#/constants/middle"
        },
        "*": {
          $ref: "#/constants/long"
        }
      },
      3: {
        1: {
          $ref: "#/constants/netherlands"
        },
        5: {
          0: {
            $ref: "#/constants/ua"
          },
          "*": {
            $ref: "#/constants/long"
          }
        },
        7: {
          3: {
            $ref: "#/constants/md"
          },
          4: {
            $ref: "#/constants/am"
          },
          5: {
            $ref: "#/constants/by"
          },
          "*": {
            $ref: "#/constants/long"
          }
        },
        8: {
          0: {
            $ref: "#/constants/ua"
          },
          "*": {
            $ref: "#/constants/long"
          }
        },
        "*": {
          $ref: "#/constants/middle"
        }
      },
      4: {
        1: {
          $ref: "#/constants/swiss"
        },
        2: {
          $ref: "#/constants/long"
        },
        4: {
          $ref: "#/constants/uk"
        },
        "*": {
          $ref: "#/constants/middle"
        }
      },
      5: {
        0: {
          $ref: "#/constants/long"
        },
        5: {
          $ref: "#/constants/br"
        },
        9: {
          $ref: "#/constants/long"
        },
        "*": {
          $ref: "#/constants/middle"
        }
      },
      6: {
        7: {
          $ref: "#/constants/long"
        },
        8: {
          $ref: "#/constants/long"
        },
        9: {
          $ref: "#/constants/long"
        },
        "*": {
          $ref: "#/constants/middle"
        }
      },
      7: {
        3: {
          3: {
            $ref: "#/constants/kz"
          },
          "*": {
            $ref: "#/constants/rus"
          }
        },
        7: {
          $ref: "#/constants/kz"
        },
        "*": {
          $ref: "#/constants/rus"
        }
      },
      8: {
        5: {
          $ref: "#/constants/long"
        },
        8: {
          $ref: "#/constants/long"
        },
        9: {
          $ref: "#/constants/rus_local"
        },
        "*": {
          $ref: "#/constants/middle"
        }
      },
      9: {
        6: {
          $ref: "#/constants/long"
        },
        7: {
          $ref: "#/constants/long"
        },
        9: {
          4: {
            $ref: "#/constants/az"
          },
          5: {
            $ref: "#/constants/ge"
          },
          6: {
            $ref: "#/constants/kg"
          },
          8: {
            $ref: "#/constants/uz"
          },
          "*": {
            $ref: "#/constants/long"
          }
        },
        "*": {
          $ref: "#/constants/middle"
        }
      },
      "*": {
        $ref: "#/constants/universal"
      }
    }
  }
}, rc = {
  codegen: cp,
  constants: up,
  type: dp,
  properties: fp
}, gp = "000000000000000", Ra = "*", pp = "00", La = [{
  key: "0",
  filter: "\\d",
  placeholder: "_"
}];
class _p extends Js {
  constructor(e) {
    super({
      pattern: Wa(""),
      decoding: La,
      alwaysVisible: !1
    });
    Mr(this, "decimalSeparator", ".");
    Mr(this, "localeDigits", {});
    Mr(this, "trimZeroRegExp", new RegExp(""));
    this.logError = e;
  }
  overrideRawValue(e) {
    this.tryInvalidateMaskDataWith(e), super.overrideRawValue(e);
  }
  applyChangeFrom(e, n) {
    const i = ro(this.value, e);
    n !== void 0 && (i.start = Math.max(0, n - i.added));
    const o = this.rawValue, a = this.replaceBodyTail(i, e), c = this.rawValue, g = this.newMaskPatternFor(c);
    if (g == null) {
      this.calculateCursorPosition(i, a);
      return;
    }
    this.updateMaskDataWith(g), this.replaceChars(c, 0);
    const d = ro(o, c), _ = d.start + d.added;
    this.calculateCursorPositionBy(_);
  }
  calculateCursorPositionBy(e) {
    let n = 0, i = 0;
    for (; n < this.destructedValue.length && i < e; )
      this.destructedValue[n++] instanceof Vn && i++;
    this.cursorPos = this.firstHolderAfter(n);
  }
  tryInvalidateMaskDataWith(e) {
    const n = this.newMaskPatternFor(e);
    n && this.updateMaskDataWith(n);
  }
  newMaskPatternFor(e) {
    const n = Wa(e), i = this.maskData.pattern;
    return n !== i ? n : null;
  }
  updateMaskDataWith(e) {
    return this.updateMaskData({
      pattern: e,
      decoding: La,
      alwaysVisible: this.maskData.alwaysVisible
    }, !1);
  }
  onException(e) {
    this.logError(e);
  }
}
function Ha(r) {
  return "$ref" in r ? rc.constants[r.$ref.split("/").pop()] : r;
}
function Wa(r) {
  if (!r)
    return gp;
  let t = rc.properties.value.default_value, e = 0;
  for (; !("value" in t); ) {
    if (e >= r.length) {
      t = Ha(t[Ra]);
      break;
    }
    const n = r[e++];
    t = Ha(t[n in t ? n : Ra]);
  }
  return t.value + pp;
}
function hp(r, t) {
  return t || new _p(r);
}
const mp = typeof document < "u" && "inputMode" in document.createElement("input"), Ua = {
  email: "email",
  number: "number",
  phone: "tel",
  single_line_text: "text",
  multi_line_text: "text",
  uri: "url",
  password: "password"
}, bp = gr((r, t, e, n) => {
  var l;
  let i, o, a, c, g, d, _, k, I, T, D, B, V, A, $e, Y, ue, Z, ae, ke, le, Q, _e, de, te, me, Ve, Fe, L, We, Ne, Se, je, S, fe, H, re, ye = h, Ke = () => (ye(), ye = p(c, (u) => re = u), c), Ge, Me = h, Pe = () => (Me(), Me = p(g, (u) => Ge = u), g), R = h, Te = () => (R(), R = p(We, (u) => u), We), oe, ot = h, et = () => (ot(), ot = p(Fe, (u) => oe = u), Fe), K, Ce = h, ze = () => (Ce(), Ce = p(_e, (u) => K = u), _e), ce, lt = h, pe = () => (lt(), lt = p(Ve, (u) => ce = u), Ve), be, Ze, Je, De = h, At = () => (De(), De = p(Q, (u) => Je = u), Q), Xe, q = h, Ye = () => (q(), q = p(le, (u) => Xe = u), le), dt, Le = h, tt = () => (Le(), Le = p(Ne, (u) => dt = u), Ne), Be, yt = h, Ut = () => (yt(), yt = p(ke, (u) => Be = u), ke), jt, kt = h, ge = () => (kt(), kt = p(ae, (u) => jt = u), ae), we, Vt = h, Pt = () => (Vt(), Vt = p(me, (u) => we = u), me), St, qe = h, Yt = () => (qe(), qe = p(te, (u) => St = u), te), W, Re = h, bt = () => (Re(), Re = p(Z, (u) => W = u), Z), Ie, rt = h, Tt = () => (rt(), rt = p(ue, (u) => Ie = u), ue), xt, He = h, nt = () => (He(), He = p(Y, (u) => xt = u), Y), Dt, ft = h, Zt = () => (ft(), ft = p($e, (u) => Dt = u), $e), er, zt = h, tr = () => (zt(), zt = p(A, (u) => er = u), A), Mt, Xt = h, It = () => (Xt(), Xt = p(V, (u) => Mt = u), V), ct, pt = h, nr = () => (pt(), pt = p(B, (u) => ct = u), B), O, rr = h, Jt = () => (rr(), rr = p(D, (u) => O = u), D), xe, ir = h, Kt = () => (ir(), ir = p(T, (u) => xe = u), T), ne, ve = h, Et = () => (ve(), ve = p(I, (u) => ne = u), I), $, y = h, U = () => (y(), y = p(k, (u) => $ = u), k), v, N = h, Ae = () => (N(), N = p(_, (u) => v = u), _), _t, wt = h, Ct = () => (wt(), wt = p(d, (u) => _t = u), d), _r, s = h, ht = () => (s(), s = p(L, (u) => _r = u), L), Dr = h, ut = () => (Dr(), Dr = p(de, (u) => u), de), { componentContext: ie } = t, { layoutParams: P = void 0 } = t;
  const ar = sr($r), yr = sr(Pn), Bt = ar.direction;
  Ze = p(Bt, (u) => be = u);
  let zr, lr = null, st = "", wr = !1, Hr = "", cr = 12, G, rn = "", Ur = "", Or, qr = "", jr = "#000", Qr = "", f = "start", b = "center", w = "multi_line_text", z = "text", E, Ue = "", se = null, Nt = "", $t = "", Oe = !0, Ft = 1 / 0, it = "off", Qt = "default", ur = "", Ir = !1, Tr = !0;
  function nn() {
    Hr = "", cr = 12, G = void 0, rn = "", Ur = "", Or = void 0, jr = "#000", Qr = "", f = "left", b = "center", w = "multi_line_text", z = "text", E = void 0, Oe = !0, Ft = 1 / 0, it = "off", Qt = "default", ur = "";
  }
  function Gr(u) {
    (u == null ? void 0 : u.type) === "fixed_length" ? lr = sp(u, ie.logError, lr) : (u == null ? void 0 : u.type) === "currency" ? lr = lp(u, ie.logError, lr) : (u == null ? void 0 : u.type) === "phone" && (lr = hp(ie.logError, lr)), lr && on();
  }
  async function on() {
  }
  function vt() {
    const u = Tr;
    Tr = !1;
    const F = ie.json.validators;
    if (!Array.isArray(F) || !F.length)
      return;
    const X = ie.getJsonWithVars(F).filter((at) => (at.type === "regex" || at.type === "expression") && at.label_id && at.variable), J = [];
    X.forEach((at) => {
      const mt = ie.getVariable(at.variable);
      if (!mt)
        return;
      if (mt.getType() !== "boolean") {
        u && ie.logError(C(new Error("Incorrect variable type for the validator"), {
          additional: { variable: at.variable }
        }));
        return;
      }
      let pr = !1;
      if (st === "" && (at.allow_empty === !0 || at.allow_empty === 1))
        pr = !0;
      else if (at.type === "regex") {
        if (!at.pattern || typeof at.pattern != "string")
          return;
        try {
          pr = new RegExp("^" + at.pattern + "$").test(st);
        } catch {
          u && ie.logError(C(new Error("Failed to create a regular expression using the validator pattern"), {
            additional: { pattern: at.pattern }
          }));
          return;
        }
      } else if (at.type === "expression")
        pr = at.condition === !0 || at.condition === 1;
      else
        return;
      if (mt.setValue(pr), !pr) {
        const or = ar.getComponentId(at.label_id);
        or && J.push(or);
      }
    }), ur = J.join(" ");
  }
  Pr(() => {
    Ir = !1;
  }), t.componentContext === void 0 && e.componentContext && ie !== void 0 && e.componentContext(ie), t.layoutParams === void 0 && e.layoutParams && P !== void 0 && e.layoutParams(P), i = ie.origJson, i && nn(), o = ie.json.text_variable, a = (l = ie.json.mask) == null ? void 0 : l.raw_text_variable, Ke(c = o && (ie.getVariable(o, "string") || ar.awaitGlobalVariable(o, "string", "")) || pn("temp", "string", "")), Pe(g = a && (ie.getVariable(a, "string") || ar.awaitGlobalVariable(a, "string", "")) || pn("temp", "string", "")), Ct(d = ie.getDerivedFromVars(ie.json.hint_text)), Ae(_ = ie.getDerivedFromVars(ie.json.hint_color)), U(k = ie.getDerivedFromVars(ie.json.font_size)), Et(I = ie.getDerivedFromVars(ie.json.font_weight)), Kt(T = ie.getDerivedFromVars(ie.json.font_weight_value)), Jt(D = ie.getDerivedFromVars(ie.json.font_family)), nr(B = ie.getDerivedFromVars(ie.json.font_variation_settings, void 0, !0, 0)), It(V = ie.getDerivedFromVars(ie.json.line_height)), tr(A = ie.getDerivedFromVars(ie.json.letter_spacing)), Zt($e = ie.getDerivedFromVars(ie.json.text_color)), nt(Y = ie.getDerivedFromVars(ie.json.highlight_color)), Tt(ue = ie.getDerivedFromVars(ie.json.text_alignment_horizontal)), bt(Z = ie.getDerivedFromVars(ie.json.text_alignment_vertical)), ge(ae = ie.getDerivedFromVars(ie.json.keyboard_type)), Ut(ke = ie.getDerivedFromVars(ie.json.mask)), Ye(le = ie.getDerivedFromVars(ie.json.max_visible_lines)), At(Q = ie.getDerivedFromVars(ie.json.paddings)), ze(_e = ie.getDerivedFromVars(ie.json.accessibility)), ut(de = ie.getDerivedFromVars(ie.json.select_all_on_focus)), Yt(te = ie.getDerivedFromVars(ie.json.is_enabled)), Pt(me = ie.getDerivedFromVars(ie.json.max_length)), pe(Ve = ie.getDerivedFromVars(ie.json.autocapitalization)), et(Fe = ie.getDerivedFromVars(ie.json.enter_key_type)), ht(L = ie.getDerivedFromVars(ie.json.validators)), Te(We = ie.getDerivedFromVars(ie.json.filters)), tt(Ne = ie.getDerivedFromVars(ie.json.max_input_height));
  {
    let u = !1;
    o ? (yr.hasAction() || (K == null ? void 0 : K.mode) === "exclude") && (u = !0, ie.logError(C(new Error('Cannot show "input" inside component with an action or inside accessibility mode=exclude')))) : (wr = !0, ie.logError(C(new Error('Missing "text_variable" in "input"')))), wr !== u && (wr = u);
  }
  if (Gr(Be), Ft = un(we, Ft), !lr && st !== re) {
    let u = re;
    u.length > Ft && (u = u.slice(0, Ft), c.setValue(u)), st = u, vt();
  }
  lr && lr.rawValue !== Ge && (on(), vt()), _r && Ir && vt(), Se = _t, Hr = Ot(v, 1, Hr), cr = un($, cr), G = ei(ne, xe, G), O && typeof O == "string" ? rn = ar.typefaceProvider(O, { fontWeight: G || 400 }) : rn = "";
  {
    const u = gi(ct);
    u !== Ur && (Ur = u);
  }
  {
    const u = Mt;
    tn(u) && (Or = u / cr);
  }
  return no(er) && (qr = ee(er)), jr = Ot(Dt, 1, jr), Qr = Ot(xt, 1, Qr), f = Yo(Ie, be, f), b = Ko(W, b), Oe = Fr(St, Oe), jt && jt in Ua && (z = Ua[jt], w = jt), (Be == null ? void 0 : Be.type) === "currency" ? (z = mp ? "text" : "tel", E = "decimal") : w === "number" ? E = "decimal" : E = void 0, je = w === "multi_line_text", tn(dt) ? Ue = Wr(dt) : tn(Xe) ? Ue = `calc(${Xe * (Or || 1.25) * (cr / 10) + "em"} + ${Wr(Sr(Je == null ? void 0 : Je.top, 0) + Sr(Je == null ? void 0 : Je.bottom, 0))})` : Ue = "", se = Qn(Je || void 0, se), Nt = se ? En(
    {
      top: (Number(se.top) || 0) / cr * 10,
      right: (Number(be === "ltr" ? se.end : se.start) || Number(se.right) || 0) / cr * 10,
      bottom: (Number(se.bottom) || 0) / cr * 10,
      left: (Number(be === "ltr" ? se.start : se.end) || Number(se.left) || 0) / cr * 10
    },
    be
  ) : "", se && En(
    {
      top: (Number(se.top) || 0) / cr * 10,
      bottom: (Number(se.bottom) || 0) / cr * 10
    },
    be
  ), ce === "all_characters" ? it = "characters" : ce === "sentences" ? it = "sentences" : ce === "words" ? it = "words" : (ce === "none" || ce === "auto") && (it = "off"), K != null && K.description ? $t = Un(K) : ie.logError(C(new Error('Missing accessibility "description" for input'), { level: "warn" })), (oe === "default" || oe === "done" || oe === "go" || oe === "search" || oe === "send") && (Qt = oe), S = {
    "highlight-color": !!Qr,
    multiline: je,
    "alignment-horizontal": f,
    "alignment-vertical": b
  }, fe = {
    "--divkit-input-hint-color": Hr,
    "--divkit-input-highlight-color": Qr,
    "--divkit-input-line-height": Or,
    "font-weight": G,
    "font-family": rn,
    "font-variation-settings": Ur,
    "letter-spacing": qr,
    color: jr,
    "max-height": Ue
  }, H = { "font-size": ee(cr), padding: Nt }, ye(), Me(), R(), ot(), Ce(), lt(), Ze(), De(), q(), Le(), yt(), kt(), Vt(), qe(), Re(), rt(), He(), ft(), zt(), Xt(), pt(), rr(), ir(), ve(), y(), N(), wt(), s(), Dr(), `${wr ? "" : `${Wt(Lr, "Outer").$$render(
    r,
    {
      alwaysCustomFocus: !0,
      cls: Ht("input", ps, S),
      style: fe,
      customDescription: !0,
      customActions: "input",
      customPaddings: !0,
      hasInnerFocusable: !0,
      componentContext: ie,
      layoutParams: P
    },
    {},
    {
      default: ({ focusHandler: u, blurHandler: F, hasCustomFocus: j }) => `${je ? `<textarea${m(
        "class",
        Ht("input__input", ps, {
          "has-custom-focus": j,
          multiline: !0
        }),
        0
      )}${m("autocapitalize", it, 0)}${m("aria-label", $t, 0)}${m("aria-describedby", ur || void 0, 0)}${m("enterkeyhint", Qt === "default" ? void 0 : Qt, 0)}${m("style", Cr(H), 0)} ${Oe ? "" : "disabled"}${m("maxlength", Ft === 1 / 0 ? void 0 : Ft, 0)}${m("placeholder", Se, 0)}${m("this", zr, 0)}>${gt(st, !1)}</textarea>` : `<input${m("type", z, 0)}${m("inputmode", E, 0)}${m(
        "class",
        Ht("input__input", ps, {
          "has-custom-focus": j,
          singleline: !0
        }),
        0
      )} autocomplete="off"${m("autocapitalize", it, 0)}${m("aria-label", $t, 0)}${m("aria-describedby", ur || void 0, 0)}${m("style", Cr(H), 0)} ${Oe ? "" : "disabled"}${m("maxlength", Ft === 1 / 0 ? void 0 : Ft, 0)}${m("placeholder", Se, 0)}${m("value", st, 0)}${m("enterkeyhint", Qt === "default" ? void 0 : Qt, 0)}${m("this", zr, 0)}>`}`
    }
  )}`}`;
}), vp = "appkit-select", yp = "appkit-select_hint", wp = "appkit-select__select", $p = "appkit-select__option", fo = {
  select: vp,
  "select__select-text": "appkit-select__select-text",
  select_hint: yp,
  select__select: wp,
  "select__select_has-custom-focused": "appkit-select__select_has-custom-focused",
  "has-custom-focused": "appkit-has-custom-focused",
  select__option: $p
}, jp = gr((r, t, e, n) => {
  let i, o, a, c, g, d, _, k, I, T, D, B, V, A, $e, Y, ue, Z, ae, ke, le, Q, _e = h, de = () => (_e(), _e = p(ue, (He) => Q = He), ue), te, me = h, Ve = () => (me(), me = p(Y, (He) => te = He), Y), Fe, L = h, We = () => (L(), L = p($e, (He) => Fe = He), $e), Ne, Se = h, je = () => (Se(), Se = p(A, (He) => Ne = He), A), S, fe = h, H = () => (fe(), fe = p(V, (He) => S = He), V), re, ye = h, Ke = () => (ye(), ye = p(B, (He) => re = He), B), Ge, Me = h, Pe = () => (Me(), Me = p(D, (He) => Ge = He), D), R, Te = h, oe = () => (Te(), Te = p(T, (He) => R = He), T), ot, et = h, K = () => (et(), et = p(I, (He) => ot = He), I), Ce, ze = h, ce = () => (ze(), ze = p(k, (He) => Ce = He), k), lt, pe, be, Ze = h, Je = () => (Ze(), Ze = p(d, (He) => be = He), d), De, At = h, Xe = () => (At(), At = p(g, (He) => De = He), g), q, Ye = h, dt = () => (Ye(), Ye = p(_, (He) => q = He), _), { componentContext: Le } = t, { layoutParams: tt = void 0 } = t;
  const Be = sr($r), yt = sr(Pn), Ut = Be.direction;
  pe = p(Ut, (He) => lt = He);
  let jt, kt = !1, ge = "", we = null, Vt = "", Pt = "rgba(0,0,0,.45)", St = 12, qe, Yt = "", W = "", Re, bt = "", Ie = "#000", rt = "", Tt;
  function xt() {
    we = null, Pt = "rgba(0,0,0,.45)", St = 12, qe = void 0, Yt = "", W = "", Re = void 0, bt = "", Ie = "#000", rt = "";
  }
  Pr(() => {
  }), t.componentContext === void 0 && e.componentContext && Le !== void 0 && e.componentContext(Le), t.layoutParams === void 0 && e.layoutParams && tt !== void 0 && e.layoutParams(tt), i = Le.origJson, i && xt(), o = Le.json.value_variable, a = Le.json.options, c = Array.isArray(a) && a.filter((He) => typeof He.value == "string") || [], Xe(g = o && (Le.getVariable(o, "string") || Be.awaitGlobalVariable(o, "string", "")) || pn("temp", "string", "")), Je(d = Le.getDerivedFromVars(Le.json.paddings)), dt(_ = Le.getDerivedFromVars(Le.json.hint_text)), ce(k = Le.getDerivedFromVars(Le.json.hint_color)), K(I = Le.getDerivedFromVars(Le.json.font_size)), oe(T = Le.getDerivedFromVars(Le.json.font_weight)), Pe(D = Le.getDerivedFromVars(Le.json.font_weight_value)), Ke(B = Le.getDerivedFromVars(Le.json.font_family)), H(V = Le.getDerivedFromVars(Le.json.font_variation_settings, void 0, !0, 0)), je(A = Le.getDerivedFromVars(Le.json.line_height)), We($e = Le.getDerivedFromVars(Le.json.letter_spacing)), Ve(Y = Le.getDerivedFromVars(Le.json.text_color)), de(ue = Le.getDerivedFromVars(Le.json.accessibility)), Array.isArray(c) && c.length || Le.logError(C(new Error('Empty selection "items" in "select"')));
  {
    let He = !1;
    o ? (yt.hasAction() || (Q == null ? void 0 : Q.mode) === "exclude") && (He = !0, Le.logError(C(new Error('Cannot show "select" inside component with an action or inside accessibility mode=exclude')))) : (kt = !0, Le.logError(C(new Error('Missing "value_variable" in "select"')))), kt !== He && (kt = He);
  }
  {
    const He = c.find((nt) => nt.value === De);
    He ? ge = (typeof He.text == "string" ? He.text : He.value) || "" : (ge = "", De && Tt !== De && (Tt = De, Le.logError(C(new Error('Value from the variable was not found in the selection items for "select"')))));
  }
  St = un(ot, St), we = Qn(be || void 0, we), Vt = we ? En(
    {
      top: (Number(we.top) || 0) / St * 10,
      right: (Number(lt === "ltr" ? we.end : we.start) || Number(we.right) || 0) / St * 10,
      bottom: (Number(we.bottom) || 0) / St * 10,
      left: (Number(lt === "ltr" ? we.start : we.end) || Number(we.left) || 0) / St * 10
    },
    lt
  ) : "", Pt = Ot(Ce, 1, Pt), qe = ei(R, Ge, qe), re && typeof re == "string" ? Yt = Be.typefaceProvider(re, { fontWeight: qe || 400 }) : Yt = "";
  {
    const He = gi(S);
    He !== W && (W = He);
  }
  {
    const He = Ne;
    tn(He) && (Re = He / St);
  }
  return no(Fe) && (bt = ee(Fe / St * 10)), Ie = Ot(te, 1, Ie), Q != null && Q.description ? rt = Un(Q) : Le.logError(C(new Error('Missing accessibility "description" for select'), { level: "warn" })), Z = { hint: !ge }, ae = {
    "--divkit-input-hint-color": Pt,
    "font-weight": qe,
    "font-family": Yt,
    "font-variation-settings": W,
    color: Ie
  }, ke = {
    padding: Vt,
    "font-size": ee(St),
    "line-height": Re,
    "letter-spacing": bt
  }, le = {
    "font-size": ee(St),
    "line-height": Re,
    "letter-spacing": bt
  }, Le.json, _e(), me(), L(), Se(), fe(), ye(), Me(), Te(), et(), ze(), pe(), Ze(), At(), Ye(), `${kt ? "" : `${Wt(Lr, "Outer").$$render(
    r,
    {
      cls: Ht("select", fo, Z),
      style: ae,
      customDescription: !0,
      customActions: "select",
      customPaddings: !0,
      hasInnerFocusable: !0,
      componentContext: Le,
      layoutParams: tt
    },
    {},
    {
      default: ({ hasCustomFocus: He, focusHandler: nt, blurHandler: Dt }) => `<span${m("class", fo["select__select-text"], 0)}${m("style", Cr(ke), 0)} aria-hidden="true"> ${gt(ge || q || "​")}</span> <select${m("class", Ht("select__select", fo, { "has-custom-focus": He }), 0)}${m("aria-label", rt, 0)}${m("style", Cr(le), 0)}${m("this", jt, 0)}>${Vr(c, (ft) => `<option${m("class", fo.select__option, 0)}${m("value", ft.value, 0)}>${gt(ft.text || ft.value)}</option>`)}</select>`
    }
  )}`}`;
}), kp = "appkit-video__video", xp = "appkit-video__container", Ep = "appkit-video_absolute", Ai = {
  video__video: kp,
  video__container: xp,
  "video__aspect-wrapper": "appkit-video__aspect-wrapper",
  video_absolute: Ep
};
function Ap(r, t) {
  return Array.isArray(r) && r.length ? r.filter((e) => (e == null ? void 0 : e.type) === "video_source" && typeof e.url == "string" && typeof e.mime_type == "string").map((e) => {
    const n = {
      src: e.url
    };
    return e.mime_type && (n.type = e.mime_type), n;
  }) : t;
}
function Cp(r) {
  return r === "fill" ? "cover" : r === "no_scale" ? "none" : "contain";
}
const Vp = gr((r, t, e, n) => {
  let i, o, a, c, g, d, _, k, I, T, D, B, V, A, $e, Y = h, ue = () => (Y(), Y = p(g, (ge) => $e = ge), g), Z, ae = h, ke = () => (ae(), ae = p(B, (ge) => Z = ge), B), le, Q = h, _e = () => (Q(), Q = p(D, (ge) => le = ge), D), de, te = h, me = () => (te(), te = p(T, (ge) => de = ge), T), Ve, Fe = h, L = () => (Fe(), Fe = p(I, (ge) => Ve = ge), I), We, Ne = h, Se = () => (Ne(), Ne = p(k, (ge) => We = ge), k), je, S = h, fe = () => (S(), S = p(_, (ge) => je = ge), _), H, re = h, ye = () => (re(), re = p(d, (ge) => H = ge), d), Ke, Ge = h, Me = () => (Ge(), Ge = p(c, (ge) => Ke = ge), c), Pe, R = h, Te = () => (R(), R = p(a, (ge) => Pe = ge), a), { componentContext: oe } = t, { layoutParams: ot = void 0 } = t;
  const et = sr($r), K = et.videoPlayerProvider;
  let Ce, ze = !1, ce, lt, pe = [], be = !1, Ze = !1, Je = !1, De = !1, At, Xe = "fit", q = "0", Ye = !1, dt, Le = "", tt, Be = !!K;
  if (K) {
    const ge = K;
    if (typeof ge.template == "string")
      Le = ge.template;
    else {
      const we = yt(oe.json);
      we ? Le = ge.template(we) : Be = !1;
    }
  }
  function yt(ge) {
    var W, Re;
    const we = oe.getJsonWithVars({
      sources: ge.video_sources,
      repeatable: ge.repeatable,
      autostart: ge.autostart,
      preloadRequired: ge.preload_required,
      muted: ge.muted,
      preview: ge.preview,
      aspect: ge.aspect,
      scale: ge.scale,
      payload: ge.player_settings_payload
    }), Vt = Fr(we.repeatable, !1), Pt = Fr(we.autostart, !1), St = Fr(we.preloadRequired, !1), qe = Fr(we.muted, !1), Yt = (W = we.aspect) != null && W.ratio && tn(we.aspect.ratio) ? we.aspect.ratio : void 0;
    if ((Re = we.sources) != null && Re.length)
      return {
        sources: we.sources,
        repeatable: Vt,
        autostart: Pt,
        preloadRequired: St,
        muted: qe,
        preview: we.preview,
        aspect: Yt,
        scale: we.scale,
        payload: we.payload
      };
  }
  function Ut(ge) {
  }
  function jt() {
  }
  function kt() {
  }
  Pr(() => {
    Ce && (et.unregisterInstance(Ce), Ce = void 0), dt && (dt(), dt = void 0);
  }), t.componentContext === void 0 && e.componentContext && oe !== void 0 && e.componentContext(oe), t.layoutParams === void 0 && e.layoutParams && ot !== void 0 && e.layoutParams(ot), oe.json && (be = !1, Ze = !1, Je = !1, De = !1, At = void 0, Xe = "fit", Ye = !1, Be = !!K), oe.json, i = oe.json.elapsed_time_variable, o = i && (oe.getVariable(i, "integer") || et.awaitGlobalVariable(i, "integer", 0)) || pn("temp", "integer", 0), o && (dt && dt(), dt = o.subscribe(Ut)), Te(a = oe.getDerivedFromVars(oe.json.video_sources)), Me(c = oe.getDerivedFromVars(oe.json.repeatable)), ue(g = oe.getDerivedFromVars(oe.json.autostart)), ye(d = oe.getDerivedFromVars(oe.json.muted)), fe(_ = oe.getDerivedFromVars(oe.json.preload_required)), Se(k = oe.getDerivedFromVars(oe.json.preview)), L(I = oe.getDerivedFromVars(oe.json.scale)), me(T = oe.getDerivedFromVars(oe.json.aspect)), _e(D = oe.getDerivedFromVars(oe.json.width)), ke(B = oe.getDerivedFromVars(oe.json.height)), pe = Ap(Pe, pe), pe.length ? ze = !1 : (ze = !0, oe.logError(C(new Error('Missing "video_sources" in "video"')))), be = Fr(Ke, be), Ze = Fr($e, Ze), Je = Fr(H, Je), De = Fr(je, De), At = typeof We == "string" ? Hl(We) : At, Xe = Cp(Ve) || Xe;
  {
    const ge = de == null ? void 0 : de.ratio;
    ge && tn(ge) ? (q = (100 / Number(ge)).toFixed(2), Ye = !0) : (q = "0", Ye = (!le || le.type === "match_parent") && (Z == null ? void 0 : Z.type) === "match_parent");
  }
  return oe.json && (Ce && (et.unregisterInstance(Ce), Ce = void 0), oe.id && !ze && !oe.fakeElement && (Ce = oe.id, et.registerInstance(Ce, { pause: jt, start: kt }))), oe.json, V = { absolute: Ye }, A = { "object-fit": Xe }, Y(), ae(), Q(), te(), Fe(), Ne(), S(), re(), Ge(), R(), `${ze ? "" : `${Wt(Lr, "Outer").$$render(
    r,
    {
      cls: Ht("video", Ai, V),
      customActions: "video",
      componentContext: oe,
      layoutParams: ot,
      heightByAspect: q !== "0"
    },
    {},
    {
      default: () => `${q !== "0" ? `<div${m("class", Ai["video__aspect-wrapper"], 0)}${Ar({
        "padding-bottom": `${q}%`
      })}>${Be ? `<div${m("class", Ai.video__container, 0)}${m("this", lt, 0)}> ${Le}</div>` : `<video${m("class", Ai.video__video, 0)}${m("style", Cr(A), 0)} playsinline ${be ? "loop" : ""} ${Ze ? "autoplay" : ""} ${Je ? "muted" : ""}${m("poster", At, 0)}${m("preload", De ? "metadata" : "auto", 0)}${m("this", ce, 0)}>${Vr(pe, (ge) => `<source${m("src", ge.src, 0)}${m("type", ge.type, 0)}>`)}</video>`}</div>` : `${Be ? `<div${m("class", Ai.video__container, 0)}${m("this", lt, 0)}> ${Le}</div>` : `<video${m("class", Ai.video__video, 0)}${m("style", Cr(A), 0)} playsinline ${be ? "loop" : ""} ${Ze ? "autoplay" : ""} ${Je ? "muted" : ""}${m("poster", At, 0)}${m("preload", De ? "metadata" : "auto", 0)}${m("this", ce, 0)}>${Vr(pe, (ge) => `<source${m("src", ge.src, 0)}${m("type", ge.type, 0)}>`)}</video>`}`}`
    }
  )}`}`;
}), Fp = "appkit-switch__tumbler", Sp = "appkit-switch__tumbler_checked", Dp = "appkit-switch_disabled", Ip = "appkit-switch__thumb", Tp = "appkit-switch_direction_rtl", Mp = "appkit-switch__input", go = {
  switch: "appkit-switch",
  switch__tumbler: Fp,
  switch__tumbler_checked: Sp,
  switch_disabled: Dp,
  switch__thumb: Ip,
  switch_direction_rtl: Tp,
  switch__input: Mp
};
function Ti(r) {
  return r === !0 || r === 1;
}
const Pp = gr((r, t, e, n) => {
  let i, o, a, c, g, d, _, k, I, T, D, B = h, V = () => (B(), B = p(c, (H) => D = H), c), A, $e = h, Y = () => ($e(), $e = p(d, (H) => A = H), d), ue, Z = h, ae = () => (Z(), Z = p(g, (H) => ue = H), g), ke, le = h, Q = () => (le(), le = p(a, (H) => ke = H), a), { componentContext: _e } = t, { layoutParams: de = void 0 } = t;
  const te = sr($r), me = sr(Pn), Ve = te.direction;
  T = p(Ve, (H) => I = H);
  let Fe, L = !1, We = !1, Ne = "", Se = !0, je = "#129386", S = "#1293864c";
  function fe() {
    Se = !0, je = "#129386", S = "#1293864c";
  }
  Pr(() => {
  }), t.componentContext === void 0 && e.componentContext && _e !== void 0 && e.componentContext(_e), t.layoutParams === void 0 && e.layoutParams && de !== void 0 && e.layoutParams(de), i = _e.origJson, i && fe(), o = _e.json.is_on_variable, Q(a = o && (_e.getVariable(o, "boolean") || te.awaitGlobalVariable(o, "boolean", !1)) || pn("temp", "boolean", !1)), V(c = _e.getDerivedFromVars(_e.json.accessibility)), ae(g = _e.getDerivedFromVars(_e.json.is_enabled)), Y(d = _e.getDerivedFromVars(_e.json.on_color));
  {
    let H = !1;
    o ? (me.hasAction() || (D == null ? void 0 : D.mode) === "exclude") && (H = !0, _e.logError(C(new Error('Cannot show "switch" inside component with an action or inside accessibility mode=exclude')))) : (H = !0, _e.logError(C(new Error('Missing "is_on_variable" in "switch"')))), We !== H && (We = H);
  }
  if (Ti(L) !== Ti(ke) && (L = Ti(ke)), Se = Fr(ue, Se), je = Ot(A, 1, je), typeof A == "string") {
    const H = xn(A);
    H && (H.a *= 0.3, S = Bs(H));
  }
  return D != null && D.description ? Ne = Un(D) : _e.logError(C(new Error('Missing accessibility "description" for switch'), { level: "warn" })), _ = {
    disabled: !Se,
    direction: I
  }, k = {
    "--divkit-switch-on-color": je,
    "--divkit-switch-on-sub-color": S
  }, T(), B(), $e(), Z(), le(), `${We ? "" : `${Wt(Lr, "Outer").$$render(
    r,
    {
      cls: Ht("switch", go, _),
      style: k,
      customDescription: !0,
      customActions: "switch",
      hasInnerFocusable: !0,
      componentContext: _e,
      layoutParams: de
    },
    {},
    {
      default: ({ focusHandler: H, blurHandler: re, hasCustomFocus: ye }) => `<div${m("class", Ht("switch__tumbler", go, { checked: L }), 0)}><div${m("class", go.switch__thumb, 0)}></div></div> <input type="checkbox"${m("class", Ht("switch__input", go, { "has-custom-focus": ye }), 0)} autocomplete="off"${m("aria-label", Ne, 0)} ${Se ? "" : "disabled"} ${L ? "checked" : ""}${m("this", Fe, 0)}>`
    }
  )}`}`;
}), zp = "appkit-checkbox", Op = "appkit-checkbox__box", Np = "appkit-checkbox__box_checked", Bp = "appkit-checkbox__checkmark", Rp = "appkit-checkbox_disabled", Lp = "appkit-checkbox__input", po = {
  checkbox: zp,
  checkbox__box: Op,
  checkbox__box_checked: Np,
  checkbox__checkmark: Bp,
  checkbox_disabled: Rp,
  checkbox__input: Lp
}, Hp = gr((r, t, e, n) => {
  let i, o, a, c, g, d, _, k, I, T, D, B = h, V = () => (B(), B = p(c, (Pe) => D = Pe), c), A, $e = h, Y = () => ($e(), $e = p(k, (Pe) => A = Pe), k), ue, Z = h, ae = () => (Z(), Z = p(_, (Pe) => ue = Pe), _), ke, le = h, Q = () => (le(), le = p(d, (Pe) => ke = Pe), d), _e, de = h, te = () => (de(), de = p(g, (Pe) => _e = Pe), g), me, Ve = h, Fe = () => (Ve(), Ve = p(a, (Pe) => me = Pe), a), { componentContext: L } = t, { layoutParams: We = void 0 } = t;
  const Ne = sr($r), Se = sr(Pn);
  let je, S = !1, fe = !1, H = "", re = !0, ye = "#129386", Ke = "rgba(0, 0, 0, .3)", Ge = "#fff";
  function Me() {
    re = !0, ye = "#129386", Ke = "rgba(0, 0, 0, .3)", Ge = "#fff";
  }
  Pr(() => {
  }), t.componentContext === void 0 && e.componentContext && L !== void 0 && e.componentContext(L), t.layoutParams === void 0 && e.layoutParams && We !== void 0 && e.layoutParams(We), i = L.origJson, i && Me(), o = L.json.is_checked_variable, Fe(a = o && (L.getVariable(o, "boolean") || Ne.awaitGlobalVariable(o, "boolean", !1)) || pn("temp", "boolean", !1)), V(c = L.getDerivedFromVars(L.json.accessibility)), te(g = L.getDerivedFromVars(L.json.is_enabled)), Q(d = L.getDerivedFromVars(L.json.on_color)), ae(_ = L.getDerivedFromVars(L.json.off_color)), Y(k = L.getDerivedFromVars(L.json.check_mark_color));
  {
    let Pe = !1;
    o ? (Se.hasAction() || (D == null ? void 0 : D.mode) === "exclude") && (Pe = !0, L.logError(C(new Error('Cannot show "checkbox" inside component with an action or inside accessibility mode=exclude')))) : (Pe = !0, L.logError(C(new Error('Missing "is_checked_variable" in "checkbox"')))), fe !== Pe && (fe = Pe);
  }
  return Ti(S) !== Ti(me) && (S = Ti(me)), re = Fr(_e, re), ye = Ot(ke, 1, ye), Ke = Ot(ue, 1, Ke), Ge = Ot(A, 1, Ge), D != null && D.description ? H = Un(D) : L.logError(C(new Error('Missing accessibility "description" for checkbox'), { level: "warn" })), I = { disabled: !re }, T = {
    "--divkit-checkbox-on-color": ye,
    "--divkit-checkbox-off-color": Ke,
    "--divkit-checkbox-check-mark-color": Ge
  }, B(), $e(), Z(), le(), de(), Ve(), `${fe ? "" : `${Wt(Lr, "Outer").$$render(
    r,
    {
      cls: Ht("checkbox", po, I),
      style: T,
      customDescription: !0,
      customActions: "checkbox",
      hasInnerFocusable: !0,
      componentContext: L,
      layoutParams: We
    },
    {},
    {
      default: ({ focusHandler: Pe, blurHandler: R, hasCustomFocus: Te }) => `<div${m("class", Ht("checkbox__box", po, { checked: S }), 0)}><div${m("class", po.checkbox__checkmark, 0)}></div></div> <input type="checkbox"${m("class", Ht("checkbox__input", po, { "has-custom-focus": Te }), 0)} autocomplete="off" role="checkbox"${m("aria-checked", S, 0)}${m("aria-label", H, 0)} ${re ? "" : "disabled"} ${S ? "checked" : ""}${m("this", je, 0)}>`
    }
  )}`}`;
}), Wp = "appkit-radio", Up = "appkit-radio__group", Gp = "appkit-radio__group_vertical", Jp = "appkit-radio__group_horizontal", qp = "appkit-radio__item", Yp = "appkit-radio_disabled", Kp = "appkit-radio__circle", Zp = "appkit-radio__circle_selected", Xp = "appkit-radio__dot", Qp = "appkit-radio__label", e_ = "appkit-radio__input", qn = {
  radio: Wp,
  radio__group: Up,
  radio__group_vertical: Gp,
  radio__group_horizontal: Jp,
  radio__item: qp,
  radio_disabled: Yp,
  radio__circle: Kp,
  radio__circle_selected: Zp,
  radio__dot: Xp,
  radio__label: Qp,
  radio__input: e_
}, t_ = gr((r, t, e, n) => {
  let i, o, a, c, g, d, _, k, I, T, D, B, V, A, $e, Y, ue, Z, ae, ke, le, Q = h, _e = () => (Q(), Q = p(d, (we) => le = we), d), de, te = h, me = () => (te(), te = p($e, (we) => de = we), $e), Ve, Fe = h, L = () => (Fe(), Fe = p(A, (we) => Ve = we), A), We, Ne = h, Se = () => (Ne(), Ne = p(V, (we) => We = we), V), je, S = h, fe = () => (S(), S = p(B, (we) => je = we), B), H, re = h, ye = () => (re(), re = p(D, (we) => H = we), D), Ke, Ge = h, Me = () => (Ge(), Ge = p(T, (we) => Ke = we), T), Pe, R = h, Te = () => (R(), R = p(I, (we) => Pe = we), I), oe, ot = h, et = () => (ot(), ot = p(k, (we) => oe = we), k), K, Ce = h, ze = () => (Ce(), Ce = p(_, (we) => K = we), _), ce, lt = h, pe = () => (lt(), lt = p(g, (we) => ce = we), g), { componentContext: be } = t, { layoutParams: Ze = void 0 } = t;
  const Je = sr($r), De = sr(Pn);
  let At, Xe = !1, q = "", Ye = !0, dt = "#129386", Le = "rgba(0, 0, 0, 0.3)", tt = "", Be, yt, Ut = "", jt = "vertical", kt = 8;
  function ge() {
    Ye = !0, dt = "#129386", Le = "rgba(0, 0, 0, 0.3)", tt = "", Be = void 0, yt = void 0, Ut = "", jt = "vertical", kt = 8;
  }
  Pr(() => {
  }), t.componentContext === void 0 && e.componentContext && be !== void 0 && e.componentContext(be), t.layoutParams === void 0 && e.layoutParams && Ze !== void 0 && e.layoutParams(Ze), i = be.origJson, i && ge(), o = be.json.value_variable, a = be.json.options, c = Array.isArray(a) && a.filter((we) => typeof we.value == "string") || [], pe(g = o && (be.getVariable(o, "string") || Je.awaitGlobalVariable(o, "string", "")) || pn("temp", "string", "")), _e(d = be.getDerivedFromVars(be.json.accessibility)), ze(_ = be.getDerivedFromVars(be.json.is_enabled)), et(k = be.getDerivedFromVars(be.json.selected_color)), Te(I = be.getDerivedFromVars(be.json.default_color)), Me(T = be.getDerivedFromVars(be.json.text_color)), ye(D = be.getDerivedFromVars(be.json.font_size)), fe(B = be.getDerivedFromVars(be.json.font_weight)), Se(V = be.getDerivedFromVars(be.json.font_family)), L(A = be.getDerivedFromVars(be.json.orientation)), me($e = be.getDerivedFromVars(be.json.item_spacing)), Array.isArray(c) && c.length || be.logError(C(new Error('Empty "options" in "radio"')));
  {
    let we = !1;
    o ? (De.hasAction() || (le == null ? void 0 : le.mode) === "exclude") && (we = !0, be.logError(C(new Error('Cannot show "radio" inside component with an action or inside accessibility mode=exclude')))) : (we = !0, be.logError(C(new Error('Missing "value_variable" in "radio"')))), Xe !== we && (Xe = we);
  }
  return Ye = Fr(K, Ye), dt = Ot(oe, 1, dt), Le = Ot(Pe, 1, Le), tt = Ot(Ke, 1, tt), Be = typeof H == "number" && H > 0 ? H : Be, yt = ei(je, void 0, yt), We && typeof We == "string" ? Ut = Je.typefaceProvider(We, { fontWeight: yt || 400 }) : Ut = "", jt = Ve === "horizontal" || Ve === "vertical" ? Ve : jt, kt = typeof de == "number" && de >= 0 ? de : kt, le != null && le.description ? q = Un(le) : be.logError(C(new Error('Missing accessibility "description" for radio'), { level: "warn" })), Y = be.id || `radio_${Math.random().toString(36).slice(2)}`, ue = { disabled: !Ye }, Z = { [jt]: !0 }, ae = {
    "--divkit-radio-selected-color": dt,
    "--divkit-radio-default-color": Le,
    ...tt ? { "--divkit-radio-text-color": tt } : {},
    ...Be ? { "font-size": ee(Be) } : {},
    ...yt ? { "font-weight": yt } : {},
    ...Ut ? { "font-family": Ut } : {}
  }, ke = `gap: ${ee(kt)}`, Q(), te(), Fe(), Ne(), S(), re(), Ge(), R(), ot(), Ce(), lt(), `${Xe ? "" : `${Wt(Lr, "Outer").$$render(
    r,
    {
      cls: Ht("radio", qn, ue),
      style: ae,
      customDescription: !0,
      customActions: "radio",
      hasInnerFocusable: !0,
      componentContext: be,
      layoutParams: Ze
    },
    {},
    {
      default: ({ focusHandler: we, blurHandler: Vt, hasCustomFocus: Pt }) => `<div${m("class", Ht("radio__group", qn, Z), 0)}${m("style", ke, 0)} role="radiogroup"${m("aria-label", q, 0)}${m("this", At, 0)}>${Vr(c, (St) => `<label${m("class", qn.radio__item, 0)}><div${m("class", Ht("radio__circle", qn, { selected: ce === St.value }), 0)}><div${m("class", qn.radio__dot, 0)}></div></div> ${St.text ? `<span${m("class", qn.radio__label, 0)}>${gt(St.text)}</span>` : `<span${m("class", qn.radio__label, 0)}>${gt(St.value)}</span>`} <input type="radio"${m("class", qn.radio__input, 0)}${m("name", Y, 0)}${m("value", St.value, 0)} ${ce === St.value ? "checked" : ""} ${Ye ? "" : "disabled"}> </label>`)}</div>`
    }
  )}`}`;
}), r_ = "appkit-progress", n_ = "appkit-progress__linear", i_ = "appkit-progress__circular", Ci = {
  progress: r_,
  progress__linear: n_,
  "progress__linear-fill": "appkit-progress__linear-fill",
  "progress__linear-fill_indeterminate": "appkit-progress__linear-fill_indeterminate",
  "progress-linear-indeterminate": "appkit-progress-linear-indeterminate",
  progress__circular: i_,
  "progress__circular-track": "appkit-progress__circular-track",
  "progress__circular-fill": "appkit-progress__circular-fill",
  "progress__circular-fill_indeterminate": "appkit-progress__circular-fill_indeterminate",
  "progress-circular-indeterminate": "appkit-progress-circular-indeterminate"
}, Yn = 48, _s = 20, o_ = gr((r, t, e, n) => {
  let i, o, a, c, g, d, _, k, I, T, D, B = h, V = () => (B(), B = p(_, (Ke) => D = Ke), _), A, $e = h, Y = () => ($e(), $e = p(d, (Ke) => A = Ke), d), ue, Z = h, ae = () => (Z(), Z = p(g, (Ke) => ue = Ke), g), ke, le = h, Q = () => (le(), le = p(c, (Ke) => ke = Ke), c), _e, de = h, te = () => (de(), de = p(a, (Ke) => _e = Ke), a), me, Ve = h, Fe = () => (Ve(), Ve = p(o, (Ke) => me = Ke), o), { componentContext: L } = t, { layoutParams: We = void 0 } = t;
  sr($r);
  let Ne = 0, Se = "linear", je = !1, S = "#129386", fe = "rgba(0, 0, 0, .1)", H = 4;
  function re() {
    Ne = 0, Se = "linear", je = !1, S = "#129386", fe = "rgba(0, 0, 0, .1)", H = 4;
  }
  const ye = 2 * Math.PI * _s;
  return t.componentContext === void 0 && e.componentContext && L !== void 0 && e.componentContext(L), t.layoutParams === void 0 && e.layoutParams && We !== void 0 && e.layoutParams(We), i = L.origJson, i && re(), Fe(o = L.getDerivedFromVars(L.json.value)), te(a = L.getDerivedFromVars(L.json.style)), Q(c = L.getDerivedFromVars(L.json.is_indeterminate)), ae(g = L.getDerivedFromVars(L.json.active_color)), Y(d = L.getDerivedFromVars(L.json.inactive_color)), V(_ = L.getDerivedFromVars(L.json.track_thickness)), Ne = typeof me == "number" ? Math.max(0, Math.min(1, me)) : Ne, Se = _e === "linear" || _e === "circular" ? _e : Se, je = Fr(ke, je), S = Ot(ue, 1, S), fe = Ot(A, 1, fe), H = typeof D == "number" && D >= 0 ? D : H, k = ye * (1 - Ne), I = {
    "--divkit-progress-active-color": S,
    "--divkit-progress-inactive-color": fe
  }, T = je ? void 0 : Math.round(Ne * 100), B(), $e(), Z(), le(), de(), Ve(), `${`${Wt(Lr, "Outer").$$render(
    r,
    {
      cls: Ht("progress", Ci, {}),
      style: I,
      componentContext: L,
      layoutParams: We
    },
    {},
    {
      default: () => `${Se === "linear" ? `<div${m("class", Ci.progress__linear, 0)} style="${"height: " + gt(ee(H), !0)}" role="progressbar"${m("aria-valuenow", T, 0)}${m("aria-valuemin", 0, 0)}${m("aria-valuemax", 100, 0)}><div${m("class", Ht("progress__linear-fill", Ci, { indeterminate: je }), 0)} style="${"width: " + gt(je ? "30%" : Ne * 100 + "%", !0)}"></div></div>` : `<svg${m("class", Ci.progress__circular, 0)}${m("width", Yn, 0)}${m("height", Yn, 0)} viewBox="${"0 0 " + gt(Yn, !0) + " " + gt(Yn, !0)}" role="progressbar"${m("aria-valuenow", T, 0)}${m("aria-valuemin", 0, 0)}${m("aria-valuemax", 100, 0)}><circle${m("class", Ci["progress__circular-track"], 0)}${m("cx", Yn / 2, 0)}${m("cy", Yn / 2, 0)}${m("r", _s, 0)}${m("stroke-width", H, 0)}></circle><circle${m("class", Ht("progress__circular-fill", Ci, { indeterminate: je }), 0)}${m("cx", Yn / 2, 0)}${m("cy", Yn / 2, 0)}${m("r", _s, 0)}${m("stroke-width", H, 0)}${m("stroke-dasharray", ye, 0)}${m(
        "stroke-dashoffset",
        je ? ye * 0.75 : k,
        0
      )} stroke-linecap="round"></circle></svg>`}`
    }
  )}`}`;
}), s_ = "appkit-table", a_ = "appkit-table_halign_start", l_ = "appkit-table_halign_center", c_ = "appkit-table_halign_end", u_ = "appkit-table_valign_start", d_ = "appkit-table_valign_center", f_ = "appkit-table_valign_end", g_ = "appkit-table__cell", p_ = "appkit-table__cell_halign_left", __ = "appkit-table__cell_halign_start", h_ = "appkit-table__cell_halign_center", m_ = "appkit-table__cell_halign_right", b_ = "appkit-table__cell_halign_end", v_ = "appkit-table__cell_valign_top", y_ = "appkit-table__cell_valign_center", w_ = "appkit-table__cell_valign_bottom", $_ = "appkit-table__cell_valign_baseline", j_ = "appkit-table__separator", k_ = "appkit-table__separator_row", x_ = "appkit-table__separator_col", Yi = {
  table: s_,
  table_halign_start: a_,
  table_halign_center: l_,
  table_halign_end: c_,
  table_valign_start: u_,
  table_valign_center: d_,
  table_valign_end: f_,
  table__cell: g_,
  table__cell_halign_left: p_,
  table__cell_halign_start: __,
  table__cell_halign_center: h_,
  table__cell_halign_right: m_,
  table__cell_halign_end: b_,
  table__cell_valign_top: v_,
  table__cell_valign_center: y_,
  table__cell_valign_bottom: w_,
  table__cell_valign_baseline: $_,
  table__separator: j_,
  table__separator_row: k_,
  table__separator_col: x_
}, E_ = gr((r, t, e, n) => {
  var oe, ot, et;
  let i, o, a, c, g, d, _, k, I, T, D, B, V, A = h, $e = () => (A(), A = p(c, (K) => V = K), c), Y, ue = h, Z = () => (ue(), ue = p(a, (K) => Y = K), a), ae, ke = h, le = () => (ke(), ke = p(g, (K) => ae = K), g), Q, _e = h, de = () => (_e(), _e = p(d, (K) => Q = K), d), { componentContext: te } = t, { layoutParams: me = void 0 } = t;
  const Ve = sr($r), Fe = Ve.direction;
  B = p(Fe, (K) => D = K);
  let L = !1, We = "start", Ne = "start", Se = [], je, S = [], fe = [], H = "";
  function re() {
    L = !1, We = "start", Ne = "start";
  }
  function ye(K) {
    var pe, be;
    if (!K || !K.style) return null;
    let Ce = "#E0E0E0", ze = 1;
    const ce = K.style;
    if (ce.type === "shape_drawable" && ce.shape) {
      const Ze = ce.shape;
      Ce = Ot(Ze.background_color || ce.color || "#E0E0E0"), Ze.type === "rounded_rectangle" && (ze = Number(((pe = Ze.item_height) == null ? void 0 : pe.value) || ((be = Ze.item_width) == null ? void 0 : be.value) || 1));
    } else ce.color && (Ce = Ot(ce.color));
    const lt = K.margins || {};
    return {
      color: Ce,
      thickness: ze,
      show_at_start: K.show_at_start === 1 || K.show_at_start === !0,
      show_between: K.show_between !== 0 && K.show_between !== !1,
      show_at_end: K.show_at_end === 1 || K.show_at_end === !0,
      marginTop: Number(lt.top) || 0,
      marginBottom: Number(lt.bottom) || 0,
      marginLeft: Number(lt.left) || 0,
      marginRight: Number(lt.right) || 0
    };
  }
  function Ke(K, Ce) {
    const ze = K.header_row;
    let ce = [];
    return K.row_builder && Array.isArray(Ce) ? ce = Zo(Ce, Ve, te, K.row_builder).map((pe) => pe.div) : Array.isArray(K.rows) && (ce = K.rows), { rows: ce, headerRow: ze };
  }
  let Ge = [];
  function Me(K, Ce) {
    Ge = [];
    for (let ze = 0; ze < K; ze++)
      Ge[ze] = new Array(Ce).fill(!1);
  }
  function Pe(K, Ce, ze, ce) {
    var lt;
    for (let pe = K; pe < K + ze && pe < Ge.length; pe++)
      for (let be = Ce; be < Ce + ce && be < (((lt = Ge[0]) == null ? void 0 : lt.length) || 0); be++)
        Ge[pe][be] = !0;
  }
  function R(K, Ce) {
    var ce;
    if (K >= Ge.length) return Ce;
    let ze = Ce;
    for (; ze < (((ce = Ge[0]) == null ? void 0 : ce.length) || 0) && Ge[K][ze]; )
      ze++;
    return ze;
  }
  function Te(K, Ce, ze, ce, lt, pe, be, Ze, Je, De) {
    const At = Array.isArray(K.cells) ? K.cells : [];
    let Xe = 0;
    for (let q = 0; q < At.length; q++) {
      const Ye = At[q];
      if (!Ye || !Ye.div) continue;
      const dt = Math.max(1, Number(Ye.column_span) || 1), Le = Math.max(1, Number(Ye.row_span) || 1);
      Xe = R(Ce, Xe), Pe(Ce, Xe, Le, dt);
      const tt = Array.isArray(ze) && ze[Xe], Be = Ye.content_alignment_horizontal || tt && tt.content_alignment_horizontal || void 0, yt = Ye.content_alignment_vertical || tt && tt.content_alignment_vertical || void 0;
      let Ut;
      const jt = Ye.background || ce;
      if (jt && Array.isArray(jt) && jt.length > 0) {
        const we = jt[0];
        we && we.type === "solid" && we.color && (Ut = Ot(we.color));
      }
      const kt = Je.get(Ye.div);
      let ge;
      kt ? (De.delete(kt), ge = kt) : ge = te.produceChildContext(Ye.div, { path: `${pe}_${q}` }), be.push(ge), Ze.push({
        componentContext: ge,
        layoutParams: {
          gridArea: {
            x: Xe,
            y: Ce,
            colSpan: dt,
            rowSpan: Le
          }
        },
        cellHAlign: Be,
        cellVAlign: yt,
        backgroundStyle: Ut
      }), Xe += dt;
    }
  }
  if (Pr(() => {
    Se.forEach((K) => {
      K.destroy();
    });
  }), t.componentContext === void 0 && e.componentContext && te !== void 0 && e.componentContext(te), t.layoutParams === void 0 && e.layoutParams && me !== void 0 && e.layoutParams(me), i = te.origJson, i && re(), o = te.json.columns, Z(a = te.getDerivedFromVars(te.json.content_alignment_vertical)), $e(c = te.getDerivedFromVars(te.json.content_alignment_horizontal)), le(g = te.getDerivedFromVars(te.json.striped)), de(d = typeof ((oe = te.json.row_builder) == null ? void 0 : oe.data) == "string" ? te.getDerivedFromVars((ot = te.json.row_builder) == null ? void 0 : ot.data, void 0, !0) : (et = te.json.row_builder) != null && et.data ? Hn(te.json.row_builder.data) : void 0), !Array.isArray(o) || o.length === 0 ? L = !0 : L = !1, _ = Array.isArray(o) ? o.length : 0, Array.isArray(o)) {
    const K = [];
    for (let Ce = 0; Ce < o.length; Ce++) {
      const ze = o[Ce], ce = ze == null ? void 0 : ze.width;
      if ((ce == null ? void 0 : ce.type) === "fixed" && ce.value)
        K.push(ee(Number(ce.value)));
      else if ((ce == null ? void 0 : ce.type) === "match_parent") {
        const lt = Number(ce.weight || 1);
        K.push(`${lt}fr`);
      } else
        K.push("auto");
    }
    H = K.join(" ");
  } else
    H = "";
  k = Ke(te.json, Q);
  {
    const K = new Set(Se), Ce = /* @__PURE__ */ new Map();
    je === te && Se.forEach((tt) => {
      Ce.set(tt.json, tt);
    });
    const ze = [], ce = [], lt = [];
    let pe = 0;
    const be = te.json, Ze = Array.isArray(o) ? o : [], Je = !!(k.headerRow && Array.isArray(k.headerRow.cells)), De = k.rows.length, At = (Je ? 1 : 0) + De;
    Me(At + 10, _ + 10);
    const Xe = ye(be.row_separator), q = ye(be.column_separator), Ye = ye(be.header_separator);
    Je && (Te(k.headerRow, pe, Ze, k.headerRow.background || be.header_background, void 0, -1, ze, ce, Ce, K), pe++);
    const dt = k.rows;
    for (let tt = 0; tt < dt.length; tt++) {
      const Be = dt[tt];
      if (!Be || !Array.isArray(Be.cells)) continue;
      let yt = Be.background;
      !yt && ae && (tt % 2 === 0 ? yt = ae.even_row_background : yt = ae.odd_row_background), Te(Be, pe, Ze, yt, void 0, tt, ze, ce, Ce, K), pe++;
    }
    const Le = pe;
    if (Ye && Je && De > 0 && lt.push({
      gridColumn: `1 / span ${_}`,
      gridRow: "1 / span 1",
      background: Ye.color,
      height: ee(Ye.thickness),
      marginTop: Ye.marginTop ? ee(Ye.marginTop) : void 0,
      marginBottom: Ye.marginBottom ? ee(Ye.marginBottom) : void 0,
      marginLeft: Ye.marginLeft ? ee(Ye.marginLeft) : void 0,
      marginRight: Ye.marginRight ? ee(Ye.marginRight) : void 0
    }), Xe) {
      const tt = Je ? 1 : 0;
      if (Xe.show_at_start && De > 0 && lt.push({
        gridColumn: `1 / span ${_}`,
        gridRow: `${tt + 1} / span 1`,
        background: Xe.color,
        height: ee(Xe.thickness),
        marginTop: Xe.marginTop ? ee(Xe.marginTop) : void 0,
        marginBottom: Xe.marginBottom ? ee(Xe.marginBottom) : void 0,
        marginLeft: Xe.marginLeft ? ee(Xe.marginLeft) : void 0,
        marginRight: Xe.marginRight ? ee(Xe.marginRight) : void 0
      }), Xe.show_between)
        for (let Be = tt; Be < Le - 1; Be++)
          lt.push({
            gridColumn: `1 / span ${_}`,
            gridRow: `${Be + 1} / span 1`,
            background: Xe.color,
            height: ee(Xe.thickness),
            marginTop: Xe.marginTop ? ee(Xe.marginTop) : void 0,
            marginBottom: Xe.marginBottom ? ee(Xe.marginBottom) : void 0,
            marginLeft: Xe.marginLeft ? ee(Xe.marginLeft) : void 0,
            marginRight: Xe.marginRight ? ee(Xe.marginRight) : void 0
          });
      Xe.show_at_end && De > 0 && lt.push({
        gridColumn: `1 / span ${_}`,
        gridRow: `${Le} / span 1`,
        background: Xe.color,
        height: ee(Xe.thickness),
        marginTop: Xe.marginTop ? ee(Xe.marginTop) : void 0,
        marginBottom: Xe.marginBottom ? ee(Xe.marginBottom) : void 0,
        marginLeft: Xe.marginLeft ? ee(Xe.marginLeft) : void 0,
        marginRight: Xe.marginRight ? ee(Xe.marginRight) : void 0
      });
    }
    if (q && _ > 0) {
      if (q.show_at_start && lt.push({
        gridColumn: "1 / span 1",
        gridRow: `1 / span ${Le}`,
        background: q.color,
        width: ee(q.thickness),
        marginTop: q.marginTop ? ee(q.marginTop) : void 0,
        marginBottom: q.marginBottom ? ee(q.marginBottom) : void 0,
        marginLeft: q.marginLeft ? ee(q.marginLeft) : void 0,
        marginRight: q.marginRight ? ee(q.marginRight) : void 0
      }), q.show_between)
        for (let tt = 0; tt < _ - 1; tt++)
          lt.push({
            gridColumn: `${tt + 1} / span 1`,
            gridRow: `1 / span ${Le}`,
            background: q.color,
            width: ee(q.thickness),
            marginTop: q.marginTop ? ee(q.marginTop) : void 0,
            marginBottom: q.marginBottom ? ee(q.marginBottom) : void 0,
            marginLeft: q.marginLeft ? ee(q.marginLeft) : void 0,
            marginRight: q.marginRight ? ee(q.marginRight) : void 0
          });
      q.show_at_end && lt.push({
        gridColumn: `${_} / span 1`,
        gridRow: `1 / span ${Le}`,
        background: q.color,
        width: ee(q.thickness),
        marginTop: q.marginTop ? ee(q.marginTop) : void 0,
        marginBottom: q.marginBottom ? ee(q.marginBottom) : void 0,
        marginLeft: q.marginLeft ? ee(q.marginLeft) : void 0,
        marginRight: q.marginRight ? ee(q.marginRight) : void 0
      });
    }
    for (const tt of K)
      tt.destroy();
    Se = ze, S = ce, fe = lt, je = te;
  }
  return We = Ko(Y, We), Ne = Yo(V, D, Ne), I = {
    valign: We,
    halign: Ne
  }, T = {
    "grid-template-columns": H
  }, B(), A(), ue(), ke(), _e(), `${L ? "" : `${Wt(Lr, "Outer").$$render(
    r,
    {
      cls: Ht("table", Yi, I),
      componentContext: te,
      style: T,
      layoutParams: me,
      parentOf: Se
    },
    {},
    {
      default: () => `${Vr(S, (K) => {
        var Ce, ze, ce, lt, pe, be, Ze, Je;
        return `<div${m(
          "class",
          Ht("table__cell", Yi, {
            halign: K.cellHAlign,
            valign: K.cellVAlign
          }),
          0
        )}${Ar({
          "grid-column": `${((ze = (Ce = K.layoutParams.gridArea) == null ? void 0 : Ce.x) != null ? ze : 0) + 1} / span ${(lt = (ce = K.layoutParams.gridArea) == null ? void 0 : ce.colSpan) != null ? lt : 1}`,
          "grid-row": `${((be = (pe = K.layoutParams.gridArea) == null ? void 0 : pe.y) != null ? be : 0) + 1} / span ${(Je = (Ze = K.layoutParams.gridArea) == null ? void 0 : Ze.rowSpan) != null ? Je : 1}`,
          background: K.backgroundStyle || void 0
        })}>${Wt(gn, "Unknown").$$render(
          r,
          {
            componentContext: K.componentContext,
            layoutParams: K.layoutParams
          },
          {},
          {}
        )} </div>`;
      })} ${Vr(fe, (K) => `<div${m("class", Yi.table__separator, 0)}${Ar({
        "grid-column": K.gridColumn,
        "grid-row": K.gridRow,
        "margin-top": K.marginTop || void 0,
        "margin-bottom": K.marginBottom || void 0,
        "margin-left": K.marginLeft || void 0,
        "margin-right": K.marginRight || void 0
      })}><div${m(
        "class",
        K.width ? Yi.table__separator_col : Yi.table__separator_row,
        0
      )}${Ar({
        background: K.background,
        height: K.height || void 0,
        width: K.width || void 0
      })}></div> </div>`)}`
    }
  )}`}`;
}), A_ = "appkit-counter", C_ = "appkit-counter__container", V_ = "appkit-counter__button", F_ = "appkit-counter__value", S_ = "appkit-counter_disabled", Ki = {
  counter: A_,
  counter__container: C_,
  counter__button: V_,
  counter__value: F_,
  counter_disabled: S_
}, D_ = gr((r, t, e, n) => {
  let i, o, a, c, g, d, _, k, I, T, D, B, V, A, $e, Y, ue, Z, ae, ke, le, Q, _e, de, te = h, me = () => (te(), te = p(a, (xe) => de = xe), a), Ve = h, Fe = () => (Ve(), Ve = p(ke, (xe) => xe), ke), L, We = h, Ne = () => (We(), We = p(ae, (xe) => L = xe), ae), Se, je = h, S = () => (je(), je = p(Z, (xe) => Se = xe), Z), fe, H = h, re = () => (H(), H = p(ue, (xe) => fe = xe), ue), ye, Ke = h, Ge = () => (Ke(), Ke = p(Y, (xe) => ye = xe), Y), Me, Pe = h, R = () => (Pe(), Pe = p($e, (xe) => Me = xe), $e), Te, oe = h, ot = () => (oe(), oe = p(A, (xe) => Te = xe), A), et, K = h, Ce = () => (K(), K = p(V, (xe) => et = xe), V), ze, ce = h, lt = () => (ce(), ce = p(B, (xe) => ze = xe), B), pe, be = h, Ze = () => (be(), be = p(D, (xe) => pe = xe), D), Je, De = h, At = () => (De(), De = p(T, (xe) => Je = xe), T), Xe, q = h, Ye = () => (q(), q = p(I, (xe) => Xe = xe), I), dt, Le = h, tt = () => (Le(), Le = p(k, (xe) => dt = xe), k), Be, yt = h, Ut = () => (yt(), yt = p(_, (xe) => Be = xe), _), jt, kt = h, ge = () => (kt(), kt = p(d, (xe) => jt = xe), d), we, Vt = h, Pt = () => (Vt(), Vt = p(g, (xe) => we = xe), g), St, qe = h, Yt = () => (qe(), qe = p(c, (xe) => St = xe), c), { componentContext: W } = t, { layoutParams: Re = void 0 } = t;
  const bt = sr($r), Ie = sr(Pn);
  let rt = !1, Tt = !0, xt = "#4CAF50", He = 36, nt = "#ffffff", Dt = "#cccccc", ft = "#1B2630", Zt = 16, er = 700, zt = 40, tr = "#F5F5F5", Mt = "#E0E0E0", Xt = 1, It = 999, ct = 6, pt = 0, nr = 99;
  const O = {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700
  };
  function rr() {
    Tt = !0, xt = "#4CAF50", He = 36, nt = "#ffffff", Dt = "#cccccc", ft = "#1B2630", Zt = 16, er = 700, zt = 40, tr = "#F5F5F5", Mt = "#E0E0E0", Xt = 1, It = 999, ct = 6, pt = 0, nr = 99;
  }
  let Jt;
  Pr(() => {
    Jt && (bt.unregisterFocusable(Jt), Jt = void 0);
  }), t.componentContext === void 0 && e.componentContext && W !== void 0 && e.componentContext(W), t.layoutParams === void 0 && e.layoutParams && Re !== void 0 && e.layoutParams(Re), i = W.origJson, i && rr(), o = W.json.counter_value_variable, me(a = o && (W.getVariable(o, "integer") || bt.awaitGlobalVariable(o, "integer", 0)) || pn("temp", "integer", 0)), Yt(c = W.getDerivedFromVars(W.json.is_enabled)), Pt(g = W.getDerivedFromVars(W.json.button_color)), ge(d = W.getDerivedFromVars(W.json.button_size)), Ut(_ = W.getDerivedFromVars(W.json.icon_color)), tt(k = W.getDerivedFromVars(W.json.disabled_button_color)), Ye(I = W.getDerivedFromVars(W.json.text_color)), At(T = W.getDerivedFromVars(W.json.font_size)), Ze(D = W.getDerivedFromVars(W.json.font_weight)), lt(B = W.getDerivedFromVars(W.json.value_width)), Ce(V = W.getDerivedFromVars(W.json.background_color)), ot(A = W.getDerivedFromVars(W.json.border_color)), R($e = W.getDerivedFromVars(W.json.border_width)), Ge(Y = W.getDerivedFromVars(W.json.corner_radius)), re(ue = W.getDerivedFromVars(W.json.padding)), S(Z = W.getDerivedFromVars(W.json.min_value)), Ne(ae = W.getDerivedFromVars(W.json.max_value)), Fe(ke = W.getDerivedFromVars(W.json.step)), Tt = Fr(St, Tt), xt = Ot(we, 1, xt), He = jn(jt, He), nt = Ot(Be, 1, nt), Dt = Ot(dt, 1, Dt), ft = Ot(Xe, 1, ft), Zt = jn(Je, Zt);
  {
    const xe = pe;
    if (typeof xe == "string")
      if (xe in O)
        er = O[xe];
      else {
        const ir = parseInt(xe, 10);
        !Number.isNaN(ir) && ir > 0 && (er = ir);
      }
    else typeof xe == "number" && xe > 0 && (er = xe);
  }
  zt = jn(ze, zt), tr = Ot(et, 1, tr), Mt = Ot(Te, 1, Mt), Xt = jn(Me, Xt), It = jn(ye, It), ct = jn(fe, ct), pt = jn(Se, pt), nr = jn(L, nr), le = Wn(de || 0, pt, nr);
  {
    let xe = !1;
    o ? Ie.hasAction() && (xe = !0, W.logError(C(new Error('Cannot show "counter" inside component with an action')))) : (xe = !0, W.logError(C(new Error('Missing "counter_value_variable" in "counter"')))), rt !== xe && (rt = xe);
  }
  return Q = { disabled: !Tt }, _e = {
    "--divkit-counter-bg": tr,
    "--divkit-counter-border-color": Mt,
    "--divkit-counter-border-width": ee(Xt),
    "--divkit-counter-radius": ee(It),
    "--divkit-counter-padding": ee(ct),
    "--divkit-counter-icon-color": nt
  }, W.json && (Jt && (bt.unregisterFocusable(Jt), Jt = void 0), W.id && !W.fakeElement && (Jt = W.id, bt.registerFocusable(Jt, {
    focus() {
    }
  }))), te(), Ve(), We(), je(), H(), Ke(), Pe(), oe(), K(), ce(), be(), De(), q(), Le(), yt(), kt(), Vt(), qe(), `${rt ? "" : `${Wt(Lr, "Outer").$$render(
    r,
    {
      cls: Ht("counter", Ki, Q),
      style: _e,
      customDescription: !0,
      customActions: "counter",
      componentContext: W,
      layoutParams: Re
    },
    {},
    {
      default: () => `<div${m("class", Ki.counter__container, 0)}><button${m("class", Ki.counter__button, 0)} ${!Tt || le <= pt ? "disabled" : ""} aria-label="Decrease value"${Ar({
        background: le <= pt ? Dt : xt,
        width: ee(He),
        height: ee(He)
      })}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="6" y1="12" x2="18" y2="12"${m("stroke", nt, 0)} stroke-width="2.5" stroke-linecap="round"></line></svg></button> <div${m("class", Ki.counter__value, 0)}${Ar({
        width: ee(zt),
        color: ft,
        "font-size": ee(Zt),
        "font-weight": er
      })}>${gt(le)}</div> <button${m("class", Ki.counter__button, 0)} ${!Tt || le >= nr ? "disabled" : ""} aria-label="Increase value"${Ar({
        background: le >= nr ? Dt : xt,
        width: ee(He),
        height: ee(He)
      })}><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="12" y1="6" x2="12" y2="18"${m("stroke", nt, 0)} stroke-width="2.5" stroke-linecap="round"></line><line x1="6" y1="12" x2="18" y2="12"${m("stroke", nt, 0)} stroke-width="2.5" stroke-linecap="round"></line></svg></button></div>`
    }
  )}`}`;
}), I_ = "appkit-webview__frame", _o = {
  webview__frame: I_,
  "webview__aspect-wrapper": "appkit-webview__aspect-wrapper"
}, T_ = gr((r, t, e, n) => {
  let i, o, a, c, g, d, _, k, I, T = h, D = () => (T(), T = p(_, (ye) => I = ye), _), B = h, V = () => (B(), B = p(d, (ye) => ye), d), A, $e = h, Y = () => ($e(), $e = p(g, (ye) => A = ye), g), ue, Z = h, ae = () => (Z(), Z = p(c, (ye) => ue = ye), c), ke, le = h, Q = () => (le(), le = p(a, (ye) => ke = ye), a), _e, de = h, te = () => (de(), de = p(o, (ye) => _e = ye), o), me, Ve = h, Fe = () => (Ve(), Ve = p(i, (ye) => me = ye), i), { componentContext: L } = t, { layoutParams: We = void 0 } = t;
  sr($r);
  let Ne = !1, Se, je, S = !1, fe = !0, H = !1, re = "0";
  t.componentContext === void 0 && e.componentContext && L !== void 0 && e.componentContext(L), t.layoutParams === void 0 && e.layoutParams && We !== void 0 && e.layoutParams(We), Fe(i = L.getDerivedFromVars(L.json.url)), te(o = L.getDerivedFromVars(L.json.html)), Q(a = L.getDerivedFromVars(L.json.javascript_enabled)), ae(c = L.getDerivedFromVars(L.json.allow_scrolling)), Y(g = L.getDerivedFromVars(L.json.allow_navigation)), V(d = L.getDerivedFromVars(L.json.scale_to_fit)), D(_ = L.getDerivedFromVars(L.json.aspect)), Se = typeof me == "string" ? me : void 0, je = typeof _e == "string" ? _e : void 0, !Se && !je ? (Ne = !0, L.logError(C(new Error('Missing "url" or "html" in "webview"')))) : Ne = !1, S = Fr(ke, S), fe = Fr(ue, fe), H = Fr(A, H);
  {
    const ye = I == null ? void 0 : I.ratio;
    ye && tn(ye) ? re = (100 / Number(ye)).toFixed(2) : re = "0";
  }
  return k = [
    "allow-same-origin",
    ...S ? ["allow-scripts"] : [],
    ...H ? ["allow-popups"] : []
  ].join(" "), T(), B(), $e(), Z(), le(), de(), Ve(), `${Ne ? "" : `${Wt(Lr, "Outer").$$render(
    r,
    {
      cls: Ht("webview", _o, {}),
      componentContext: L,
      layoutParams: We,
      heightByAspect: re !== "0"
    },
    {},
    {
      default: () => `${re !== "0" ? `<div${m("class", _o["webview__aspect-wrapper"], 0)}${Ar({
        "padding-bottom": `${re}%`
      })}><iframe${m("class", _o.webview__frame, 0)}${m("src", Se || void 0, 0)}${m("srcdoc", Se ? void 0 : je, 0)}${m("sandbox", k, 0)}${m("scrolling", fe ? "auto" : "no", 0)} title="webview"></iframe></div>` : `<iframe${m("class", _o.webview__frame, 0)}${m("src", Se || void 0, 0)}${m("srcdoc", Se ? void 0 : je, 0)}${m("sandbox", k, 0)}${m("scrolling", fe ? "auto" : "no", 0)} title="webview"></iframe>`}`
    }
  )}`}`;
}), ho = {
  "google-map__frame": "appkit-google-map__frame",
  "google-map__aspect-wrapper": "appkit-google-map__aspect-wrapper"
};
function As(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function M_(r) {
  switch (r) {
    case "satellite":
      return "satellite";
    case "terrain":
      return "terrain";
    case "hybrid":
      return "hybrid";
    case "normal":
    default:
      return "roadmap";
  }
}
function P_(r) {
  return r.map((t, e) => {
    const n = Number(t.latitude) || 0, i = Number(t.longitude) || 0, o = t.title ? As(String(t.title)) : "", a = t.color ? String(t.color) : "", c = t.on_click_actions && t.on_click_actions.length > 0;
    let g = "";
    a && (g = `,icon:{path:google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,fillColor:'${As(a)}',fillOpacity:1,strokeColor:'#333',strokeWeight:1,scale:6,anchor:new google.maps.Point(0,0)}`);
    const d = c ? `m.addListener('click',function(){window.parent.postMessage({type:'marker_click',index:${e}},'*');});` : "";
    return `(function(){var m=new google.maps.Marker({position:{lat:${n},lng:${i}},map:map,title:'${o}'${g}});${d}})();`;
  }).join(`
`);
}
const z_ = gr((r, t, e, n) => {
  let i, o, a, c, g, d, _, k, I, T, D, B = h, V = () => (B(), B = p(T, (Je) => D = Je), T), A, $e = h, Y = () => ($e(), $e = p(d, (Je) => A = Je), d), ue, Z = h, ae = () => (Z(), Z = p(g, (Je) => ue = Je), g), ke, le = h, Q = () => (le(), le = p(I, (Je) => ke = Je), I), _e, de = h, te = () => (de(), de = p(_, (Je) => _e = Je), _), me, Ve = h, Fe = () => (Ve(), Ve = p(k, (Je) => me = Je), k), L, We = h, Ne = () => (We(), We = p(c, (Je) => L = Je), c), Se, je = h, S = () => (je(), je = p(a, (Je) => Se = Je), a), fe, H = h, re = () => (H(), H = p(o, (Je) => fe = Je), o), ye, Ke = h, Ge = () => (Ke(), Ke = p(i, (Je) => ye = Je), i), { componentContext: Me } = t, { layoutParams: Pe = void 0 } = t;
  sr($r);
  let R = !1, Te = "0", oe = 0, ot = 0, et = 10, K = "normal", Ce = !0, ze = !0, ce, lt = [], pe = "", be;
  function Ze(Je) {
  }
  Pr(() => {
    window.removeEventListener("message", Ze);
  }), t.componentContext === void 0 && e.componentContext && Me !== void 0 && e.componentContext(Me), t.layoutParams === void 0 && e.layoutParams && Pe !== void 0 && e.layoutParams(Pe), Ge(i = Me.getDerivedFromVars(Me.json.latitude)), re(o = Me.getDerivedFromVars(Me.json.longitude)), S(a = Me.getDerivedFromVars(Me.json.zoom)), Ne(c = Me.getDerivedFromVars(Me.json.map_type)), ae(g = Me.getDerivedFromVars(Me.json.allow_zoom)), Y(d = Me.getDerivedFromVars(Me.json.allow_scroll)), te(_ = Me.getDerivedFromVars(Me.json.api_key)), Fe(k = Me.getDerivedFromVars(Me.json.api_key_web)), Q(I = Me.getDerivedFromVars(Me.json.markers)), V(T = Me.getDerivedFromVars(Me.json.aspect));
  {
    oe = typeof ye == "number" ? ye : 0, ot = typeof fe == "number" ? fe : 0, et = typeof Se == "number" ? Se : 10, K = typeof L == "string" ? L : "normal";
    const Je = me, De = _e;
    ce = typeof Je == "string" ? Je : typeof De == "string" ? De : void 0, lt = Array.isArray(ke) ? ke : [], ce ? R = !1 : (R = !0, Me.logError(C(new Error('Missing "api_key" or "api_key_web" in "google_map"'))));
  }
  Ce = Fr(ue, Ce), ze = Fr(A, ze);
  {
    const Je = D == null ? void 0 : D.ratio;
    Je && tn(Je) ? Te = (100 / Number(Je)).toFixed(2) : Te = "0";
  }
  if (ce) {
    const Je = P_(lt), De = M_(K), At = ze || Ce ? "auto" : "none";
    pe = `<!DOCTYPE html>
<html><head>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>html,body,#map{width:100%;height:100%;margin:0;padding:0;}</style>
</head><body>
<div id="map"></div>
<script>
function initMap(){
var map=new google.maps.Map(document.getElementById('map'),{
center:{lat:${oe},lng:${ot}},
zoom:${Math.round(et)},
mapTypeId:'${De}',
gestureHandling:'${At}',
zoomControl:${Ce},
scrollwheel:${ze},
draggable:${ze},
fullscreenControl:false,
streetViewControl:false
});
${Je}
google.maps.event.addListenerOnce(map,'idle',function(){
window.parent.postMessage({type:'map_ready'},'*');
});
}
<\/script>
<script src="https://maps.googleapis.com/maps/api/js?key=${As(ce)}&callback=initMap" async defer
onerror="window.parent.postMessage({type:'map_error'},'*')"><\/script>
</body></html>`;
  } else
    pe = "";
  return B(), $e(), Z(), le(), de(), Ve(), We(), je(), H(), Ke(), `${!R && pe ? `${Wt(Lr, "Outer").$$render(
    r,
    {
      cls: Ht("google-map", ho, {}),
      componentContext: Me,
      layoutParams: Pe,
      heightByAspect: Te !== "0"
    },
    {},
    {
      default: () => `${Te !== "0" ? `<div${m("class", ho["google-map__aspect-wrapper"], 0)}${Ar({
        "padding-bottom": `${Te}%`
      })}><iframe${m("class", ho["google-map__frame"], 0)}${m("srcdoc", pe, 0)} title="Google Map" sandbox="allow-scripts allow-same-origin"${m("this", be, 0)}></iframe></div>` : `<iframe${m("class", ho["google-map__frame"], 0)}${m("srcdoc", pe, 0)} title="Google Map" sandbox="allow-scripts allow-same-origin"${m("this", be, 0)}></iframe>`}`
    }
  )}` : ""}`;
}), O_ = gr((r, t, e, n) => {
  var D;
  let i, { componentContext: o } = t, { layoutParams: a = void 0 } = t;
  const c = sr($r);
  let g, d = null, _ = "", k = {}, I = [], T = !1;
  if (Pr(() => {
    I.forEach((B) => {
      B.destroy();
    });
  }), t.componentContext === void 0 && e.componentContext && o !== void 0 && e.componentContext(o), t.layoutParams === void 0 && e.layoutParams && a !== void 0 && e.layoutParams(a), typeof o.json.custom_type == "string" && o.json.custom_type && ((D = c.customComponents) != null && D.has(o.json.custom_type))) {
    if (d = c.customComponents.get(o.json.custom_type), typeof d.template == "function") {
      const B = c.getExtensionContext(o), V = /* @__PURE__ */ new Map();
      for (const [A, $e] of B.variables)
        V.set(A, $e.getValue());
      _ = d.template({
        props: o.json.custom_props,
        variables: V
      });
    } else d.template && typeof d.template == "string" ? _ = d.template : _ = "";
    k = {
      shadowrootmode: d.shadowRootMode || "open"
    };
  } else
    d = null, _ = ";", o.logError(C(new Error('Unknown or incorrect "custom_type" prop for div "custom"')));
  return i = o.json.items, i !== void 0 && !Array.isArray(i) ? (T = !0, o.logError(C(new Error('Incorrect "items" prop for div "custom"')))) : T = !1, I.forEach((B) => {
    B.destroy();
  }), I = (!T && i || []).map((B, V) => o.produceChildContext(B, { path: V })), `${d ? `${Wt(Lr, "Outer").$$render(r, { componentContext: o, layoutParams: a }, {}, {
    default: () => `${((B) => B ? `<${d.element}${Di([Ii(o.json.custom_props || {})], {})}${m("this", g, 0)}>${Zn(B) ? "" : `${_ ? `<template${Di([Ii(k)], {})}> ${_}</template>` : ""} ${!T && i ? `${Vr(I, (V) => `${Wt(gn, "Unknown").$$render(r, { componentContext: V }, {}, {})}`)}` : ""}`}${Zn(B) ? "" : `</${B}>`}` : "")(d.element)}`
  })}` : ""}`;
}), N_ = "appkit-breadcrumb", B_ = "appkit-breadcrumb__list", R_ = "appkit-breadcrumb__item", L_ = "appkit-breadcrumb__label", H_ = "appkit-breadcrumb__label_link", W_ = "appkit-breadcrumb__separator", di = {
  breadcrumb: N_,
  breadcrumb__list: B_,
  breadcrumb__item: R_,
  breadcrumb__label: L_,
  breadcrumb__label_link: H_,
  breadcrumb__separator: W_
};
function U_(r) {
  var t;
  return (t = r.action) != null && t.url && !r.action.url.startsWith("div-action://") ? r.action.url : "#";
}
const G_ = gr((r, t, e, n) => {
  var re, ye, Ke;
  let i, o, a, c, g, d, _, k, I, T, D = h, B = () => (D(), D = p(_, (Ge) => T = Ge), _), V, A = h, $e = () => (A(), A = p(d, (Ge) => V = Ge), d), Y, ue = h, Z = () => (ue(), ue = p(g, (Ge) => Y = Ge), g), ae, ke = h, le = () => (ke(), ke = p(c, (Ge) => ae = Ge), c), Q, _e = h, de = () => (_e(), _e = p(a, (Ge) => Q = Ge), a), te, me = h, Ve = () => (me(), me = p(o, (Ge) => te = Ge), o), { componentContext: Fe } = t, { layoutParams: L = void 0 } = t;
  const We = sr($r);
  let Ne = "/", Se = "#0077CC", je = "#111111", S = 14;
  function fe() {
    Ne = "/", Se = "#0077CC", je = "#111111", S = 14;
  }
  function H(Ge, Me) {
    const Pe = Fe.json.item_builder;
    if (Pe && Array.isArray(Me) && Array.isArray(Pe.prototypes)) {
      const R = [];
      return Me.forEach((Te, oe) => {
        if (Te === null || typeof Te != "object")
          return;
        const ot = We.preparePrototypeVariables(Pe.data_element_name || "it", Te, oe);
        for (let et = 0; et < Pe.prototypes.length; ++et) {
          const K = Pe.prototypes[et];
          if (!K.title || K.selector !== void 0 && !Fe.getJsonWithVars(K.selector, ot))
            continue;
          const ze = { title: Fe.getJsonWithVars(K.title, ot) };
          if (K.action) {
            const ce = Fe.getJsonWithVars(K.action, ot);
            ce && (ze.action = ce);
          }
          R.push(ze);
          break;
        }
      }), R;
    }
    return Array.isArray(Ge) ? Ge : Fe.json.crumbs || [];
  }
  return t.componentContext === void 0 && e.componentContext && Fe !== void 0 && e.componentContext(Fe), t.layoutParams === void 0 && e.layoutParams && L !== void 0 && e.layoutParams(L), i = Fe.origJson, i && fe(), Ve(o = Fe.getDerivedFromVars(Fe.json.separator)), de(a = Fe.getDerivedFromVars(Fe.json.item_text_color)), le(c = Fe.getDerivedFromVars(Fe.json.active_text_color)), Z(g = Fe.getDerivedFromVars(Fe.json.item_font_size)), $e(d = Fe.getDerivedFromVars(Fe.json.crumbs)), B(_ = typeof ((re = Fe.json.item_builder) == null ? void 0 : re.data) == "string" ? Fe.getDerivedFromVars((ye = Fe.json.item_builder) == null ? void 0 : ye.data, void 0, !0) : (Ke = Fe.json.item_builder) != null && Ke.data ? Hn(Fe.json.item_builder.data) : void 0), Ne = typeof te == "string" && te.length > 0 ? te : Ne, Se = Ot(Q, 1, Se), je = Ot(ae, 1, je), S = un(Y, S), k = H(V, T), I = {
    "--divkit-breadcrumb-item-color": Se,
    "--divkit-breadcrumb-active-color": je,
    "--divkit-breadcrumb-font-size": ee(S)
  }, D(), A(), ue(), ke(), _e(), me(), `${`${Wt(Lr, "Outer").$$render(
    r,
    {
      cls: Ht("breadcrumb", di, {}),
      style: I,
      componentContext: Fe,
      layoutParams: L
    },
    {},
    {
      default: () => `<nav aria-label="breadcrumb"><ol${m("class", di.breadcrumb__list, 0)}>${Vr(k, (Ge, Me) => `<li${m("class", di.breadcrumb__item, 0)}>${Me === k.length - 1 ? `<span${m("class", di.breadcrumb__label, 0)} aria-current="page">${gt(Ge.title)}</span>` : `<a class="${gt(di.breadcrumb__label, !0) + " " + gt(di.breadcrumb__label_link, !0)}"${m("href", U_(Ge), 0)}>${gt(Ge.title)}</a> <span${m("class", di.breadcrumb__separator, 0)} aria-hidden="true">${gt(Ne)}</span>`} </li>`)}</ol></nav>`
    }
  )}`}`;
}), J_ = "appkit-autocomplete", q_ = "appkit-autocomplete__input", Y_ = "appkit-autocomplete__dropdown", K_ = "appkit-autocomplete__dropdown_below", Z_ = "appkit-autocomplete__dropdown_above", X_ = "appkit-autocomplete__suggestion", Q_ = "appkit-autocomplete__suggestion_highlighted", Vi = {
  autocomplete: J_,
  autocomplete__input: q_,
  "autocomplete__input_has-custom-focus": "appkit-autocomplete__input_has-custom-focus",
  autocomplete__dropdown: Y_,
  autocomplete__dropdown_below: K_,
  autocomplete__dropdown_above: Z_,
  autocomplete__suggestion: X_,
  autocomplete__suggestion_highlighted: Q_,
  "autocomplete__suggestion-text": "appkit-autocomplete__suggestion-text",
  "autocomplete__suggestion-secondary": "appkit-autocomplete__suggestion-secondary"
};
function eh(r) {
  return Array.isArray(r) ? r.filter((t) => typeof t == "object" && t !== null && typeof t.value == "string") : [];
}
const th = gr((r, t, e, n) => {
  let i, o, a, c, g, d, _, k, I, T, D, B, V, A, $e, Y, ue, Z, ae, ke, le, Q, _e, de, te, me, Ve, Fe, L, We, Ne, Se, je, S, fe, H, re = h, ye = () => (re(), re = p(me, (st) => H = st), me), Ke, Ge = h, Me = () => (Ge(), Ge = p(c, (st) => Ke = st), c), Pe, R = h, Te = () => (R(), R = p(Z, (st) => Pe = st), Z), oe, ot = h, et = () => (ot(), ot = p(ue, (st) => oe = st), ue), K, Ce = h, ze = () => (Ce(), Ce = p(Y, (st) => K = st), Y), ce, lt = h, pe = () => (lt(), lt = p($e, (st) => ce = st), $e), be, Ze = h, Je = () => (Ze(), Ze = p(A, (st) => be = st), A), De, At = h, Xe = () => (At(), At = p(V, (st) => De = st), V), q, Ye = h, dt = () => (Ye(), Ye = p(B, (st) => q = st), B), Le, tt = h, Be = () => (tt(), tt = p(D, (st) => Le = st), D), yt, Ut = h, jt = () => (Ut(), Ut = p(T, (st) => yt = st), T), kt, ge = h, we = () => (ge(), ge = p(I, (st) => kt = st), I), Vt, Pt = h, St = () => (Pt(), Pt = p(k, (st) => Vt = st), k), qe, Yt, W, Re = h, bt = () => (Re(), Re = p(d, (st) => W = st), d), Ie, rt = h, Tt = () => (rt(), rt = p(g, (st) => Ie = st), g), xt, He = h, nt = () => (He(), He = p(te, (st) => xt = st), te), Dt, ft = h, Zt = () => (ft(), ft = p(ae, (st) => Dt = st), ae), er, zt = h, tr = () => (zt(), zt = p(de, (st) => er = st), de), Mt = h, Xt = () => (Mt(), Mt = p(_e, (st) => st), _e), It = h, ct = () => (It(), It = p(Q, (st) => st), Q), pt, nr = h, O = () => (nr(), nr = p(le, (st) => pt = st), le), rr, Jt = h, xe = () => (Jt(), Jt = p(ke, (st) => rr = st), ke), ir, Kt = h, ne = () => (Kt(), Kt = p(_, (st) => ir = st), _), { componentContext: ve } = t, { layoutParams: Et = void 0 } = t;
  const $ = sr($r), y = $.direction;
  Yt = p(y, (st) => qe = st);
  let U, v, N = !1, Ae = !1, _t = -1, wt = "below", Ct = null, _r = "", s = "rgba(0,0,0,.45)", ht = 12, Dr, ut = "", ie = "", P, ar = "", yr = "#000", Bt = "#000", zr = "";
  function lr() {
    Ct = null, s = "rgba(0,0,0,.45)", ht = 12, Dr = void 0, ut = "", ie = "", P = void 0, ar = "", yr = "#000", Bt = "#000", zr = "", Ae = !1, _t = -1;
  }
  Pr(() => {
  }), t.componentContext === void 0 && e.componentContext && ve !== void 0 && e.componentContext(ve), t.layoutParams === void 0 && e.layoutParams && Et !== void 0 && e.layoutParams(Et), i = ve.origJson, i && lr(), o = ve.json.text_variable, a = ve.json.suggestions_variable, ve.json.value_variable, Me(c = o && (ve.getVariable(o, "string") || $.awaitGlobalVariable(o, "string", "")) || pn("temp", "string", "")), Tt(g = a && (ve.getVariable(a, "array") || $.awaitGlobalVariable(a, "array", [])) || pn("temp", "array", [])), bt(d = ve.getDerivedFromVars(ve.json.paddings)), ne(_ = ve.getDerivedFromVars(ve.json.hint_text)), St(k = ve.getDerivedFromVars(ve.json.hint_color)), we(I = ve.getDerivedFromVars(ve.json.font_size)), jt(T = ve.getDerivedFromVars(ve.json.font_weight)), Be(D = ve.getDerivedFromVars(ve.json.font_weight_value)), dt(B = ve.getDerivedFromVars(ve.json.font_family)), Xe(V = ve.getDerivedFromVars(ve.json.font_variation_settings, void 0, !0, 0)), Je(A = ve.getDerivedFromVars(ve.json.line_height)), pe($e = ve.getDerivedFromVars(ve.json.letter_spacing)), ze(Y = ve.getDerivedFromVars(ve.json.text_color)), et(ue = ve.getDerivedFromVars(ve.json.suggestion_text_color)), Te(Z = ve.getDerivedFromVars(ve.json.accessibility)), Zt(ae = ve.getDerivedFromVars(ve.json.is_enabled)), xe(ke = ve.getDerivedFromVars(ve.json.min_query_length)), O(le = ve.getDerivedFromVars(ve.json.max_visible_suggestions)), ct(Q = ve.getDerivedFromVars(ve.json.dismiss_on_selection)), Xt(_e = ve.getDerivedFromVars(ve.json.dismiss_on_blur)), tr(de = ve.getDerivedFromVars(ve.json.dismiss_on_empty)), nt(te = ve.getDerivedFromVars(ve.json.keyboard_type)), ye(me = ve.getDerivedFromVars(ve.json.highlight_color)), Ve = Math.max(1, Number(rr) || 1), Fe = Math.max(1, Number(pt) || 5), L = Fr(er, !0), We = Fr(Dt, !0), Ne = xt === "password" ? "password" : xt === "email" ? "email" : xt === "uri" ? "url" : xt === "phone" ? "tel" : xt === "number" ? "number" : "text", Se = eh(Ie);
  {
    const st = Ke || "";
    st.length < Ve || L && Se.length === 0 ? Ae = !1 : Se.length > 0 && st.length >= Ve && (Ae = !0);
  }
  {
    let st = !1;
    o || (st = !0, ve.logError(C(new Error('Missing "text_variable" in "autocomplete"')))), a || (st = !0, ve.logError(C(new Error('Missing "suggestions_variable" in "autocomplete"')))), N !== st && (N = st);
  }
  ht = un(kt, ht), Ct = Qn(W || void 0, Ct), _r = Ct ? En(
    {
      top: (Number(Ct.top) || 0) / ht * 10,
      right: (Number(qe === "ltr" ? Ct.end : Ct.start) || Number(Ct.right) || 0) / ht * 10,
      bottom: (Number(Ct.bottom) || 0) / ht * 10,
      left: (Number(qe === "ltr" ? Ct.start : Ct.end) || Number(Ct.left) || 0) / ht * 10
    },
    qe
  ) : "", s = Ot(Vt, 1, s), Dr = ei(yt, Le, Dr), q && typeof q == "string" ? ut = $.typefaceProvider(q, { fontWeight: Dr || 400 }) : ut = "";
  {
    const st = gi(De);
    st !== ie && (ie = st);
  }
  {
    const st = be;
    tn(st) && (P = st / ht);
  }
  return no(ce) && (ar = ee(ce / ht * 10)), yr = Ot(K, 1, yr), Bt = Ot(oe, 1, Bt), Pe != null && Pe.description ? zr = Un(Pe) : ve.logError(C(new Error('Missing accessibility "description" for autocomplete'), { level: "warn" })), je = {
    "--divkit-input-hint-color": s,
    "--divkit-input-highlight-color": H || void 0,
    "font-weight": Dr,
    "font-family": ut,
    "font-variation-settings": ie,
    color: yr
  }, S = {
    padding: _r,
    "font-size": ee(ht),
    "line-height": P,
    "letter-spacing": ar
  }, fe = {
    "max-height": Fe * 44 + "px",
    color: Bt
  }, ve.json, re(), Ge(), R(), ot(), Ce(), lt(), Ze(), At(), Ye(), tt(), Ut(), ge(), Pt(), Yt(), Re(), rt(), He(), ft(), zt(), Mt(), It(), nr(), Jt(), Kt(), `${N ? "" : `${Wt(Lr, "Outer").$$render(
    r,
    {
      cls: Ht("autocomplete", Vi, {}),
      style: je,
      customDescription: !0,
      customActions: "autocomplete",
      customPaddings: !0,
      hasInnerFocusable: !0,
      componentContext: ve,
      layoutParams: Et
    },
    {},
    {
      default: ({ hasCustomFocus: st, focusHandler: wr, blurHandler: Hr }) => `<input${m("class", Ht("autocomplete__input", Vi, { "has-custom-focus": st }), 0)}${m("style", Cr(S), 0)}${m("type", Ne, 0)}${m("placeholder", ir || "", 0)}${m("aria-label", zr, 0)} aria-autocomplete="list"${m("aria-expanded", Ae, 0)} autocomplete="off" ${We ? "" : "disabled"}${m("value", Ke, 0)}${m("this", U, 0)}> ${Ae && Se.length > 0 ? `<div${m("class", Ht("autocomplete__dropdown", Vi, { [wt]: !0 }), 0)}${m("style", Cr(fe), 0)} role="listbox"${m("this", v, 0)}>${Vr(Se, (cr, G) => `<div${m("class", Ht("autocomplete__suggestion", Vi, { highlighted: G === _t }), 0)} role="option"${m("aria-selected", G === _t, 0)}><div${m("class", Vi["autocomplete__suggestion-text"], 0)}>${gt(cr.text || cr.value)}</div> ${cr.secondary_text ? `<div${m("class", Vi["autocomplete__suggestion-secondary"], 0)}>${gt(cr.secondary_text)} </div>` : ""} </div>`)}</div>` : ""}`
    }
  )}`}`;
}), nc = {
  text: Yu,
  container: Ed,
  separator: Sd,
  image: Ta,
  gif: Ta,
  grid: Yd,
  gallery: pf,
  tabs: Tf,
  state: Jf,
  pager: ag,
  indicator: bg,
  slider: Xg,
  input: bp,
  select: jp,
  video: Vp,
  switch: Pp,
  checkbox: Hp,
  radio: t_,
  progress: o_,
  table: E_,
  counter: D_,
  webview: T_,
  google_map: z_,
  custom: O_,
  breadcrumb: G_,
  autocomplete: th
}, gn = gr((r, t, e, n) => {
  let { componentContext: i } = t, { layoutParams: o = void 0 } = t;
  const a = sr($r);
  let c;
  t.componentContext === void 0 && e.componentContext && i !== void 0 && e.componentContext(i), t.layoutParams === void 0 && e.layoutParams && o !== void 0 && e.layoutParams(o);
  {
    const g = i.json;
    if (c = (g == null ? void 0 : g.type) && nc[g.type] || void 0, !c) {
      let d;
      g != null && g.type && a.hasTemplate(g.type) ? d = "Recursive template" : d = "Unknown component", i.logError(C(new Error(d), {
        additional: {
          component: (g == null ? void 0 : g.type) || "<missing>"
        }
      }));
    }
  }
  return `${c ? `${Wt(c || Uc, "svelte:component").$$render(r, { componentContext: i, layoutParams: o }, {}, {})}` : ""}`;
}), rh = {
  "root-svg-filters": "appkit-root-svg-filters"
}, nh = gr((r, t, e, n) => {
  let { svgFiltersMap: i } = t;
  return t.svgFiltersMap === void 0 && e.svgFiltersMap && i !== void 0 && e.svgFiltersMap(i), `${Object.keys(i).length ? `<svg${m("class", rh["root-svg-filters"], 0)} aria-hidden="true"><defs>${Vr([...Object.keys(i)], (o) => {
    let [a, c] = o.split(":");
    return ` <filter${m("id", i[o], 0)}><feFlood${m("flood-color", a, 0)}></feFlood>${c === "source_in" || c === "source_atop" ? `<feComposite in2="SourceGraphic"${m("operator", c.split("_")[1], 0)}></feComposite>` : `${c === "multiply" ? '<feComposite in2="SourceGraphic" operator="arithmetic" k1="1" k2="0" k3="0" k4="0"></feComposite>' : `<feBlend in2="SourceGraphic"${m("mode", c, 0)}></feBlend>`}`}</filter>`;
  })}</defs></svg>` : ""}`;
});
function ih(r, t, e, n) {
  const i = e[r.type];
  if (!i)
    return n(C(new Error("No such template"), {
      additional: {
        template: r.type
      }
    })), {
      json: r,
      templateContext: t
    };
  let o;
  const a = {};
  for (o in t)
    t.hasOwnProperty(o) && (a[o] = t[o]);
  for (o in r)
    o === "type" || o === "__proto__" || r.hasOwnProperty(o) && (a[o] = r[o]);
  function c(d, _) {
    const k = Object.keys(_).filter((D) => D !== "__proto__"), I = k.filter((D) => D.charAt(0) !== "$"), T = k.filter((D) => D.charAt(0) === "$");
    return I.forEach((D) => {
      const B = _[D];
      typeof B == "object" && B !== null ? (d[D] = Array.isArray(B) ? [] : {}, c(d[D], B)) : d[D] = B;
    }), T.forEach((D) => {
      const B = _[D], V = a[B];
      if (V !== void 0) {
        const A = D.substring(1);
        d[A] = V;
      }
    }), d;
  }
  const g = c({}, i);
  for (o in r)
    o === "type" || o === "__proto__" || r.hasOwnProperty(o) && (g[o] = r[o]);
  return {
    json: g,
    templateContext: a
  };
}
const Eo = /* @__PURE__ */ new Map(), Cs = /* @__PURE__ */ new Map(), Ao = /* @__PURE__ */ new Map(), Vs = /* @__PURE__ */ new Map();
function x(r, t, e) {
  const n = {
    args: t,
    cb: e
  }, i = Eo.get(r) || [];
  Eo.has(r) || Eo.set(r, i), i.push(n);
  const o = r + ":" + t.map((a) => typeof a == "object" ? a.type : a).join("#");
  Cs.set(o, n);
}
function mr(r, t, e) {
  const n = {
    args: t,
    cb: e
  }, i = Ao.get(r) || [];
  Ao.has(r) || Ao.set(r, i), i.push(n);
  const o = r + ":" + t.map((a) => typeof a == "object" ? a.type : a).join("#");
  Vs.set(o, n);
}
function oh(r, t, e) {
  const n = r.args.length;
  let i = r.args.length, o = 0;
  const a = r.args[r.args.length - 1];
  if (typeof a == "object" && a.isVararg && (i = 1 / 0), t.length < n)
    return {
      type: "few",
      expected: n,
      found: t.length,
      def: r,
      hasOverloads: e
    };
  if (t.length > i)
    return {
      type: "many",
      expected: i,
      found: t.length,
      def: r,
      hasOverloads: e
    };
  for (let c = 0; c < t.length; ++c) {
    let g = c >= r.args.length ? r.args[r.args.length - 1] : r.args[c];
    if (typeof g != "object" && (g = {
      type: g
    }), g.type === Qe && t[c].type === he) {
      ++o;
      continue;
    }
    if (g.type !== t[c].type)
      return {
        type: "mismatch",
        expected: g.type,
        found: t[c].type,
        def: r,
        hasOverloads: e
      };
  }
  return {
    type: "match",
    conversions: o
  };
}
function ic(r, t) {
  if (!r)
    return {
      type: "missing"
    };
  let e = null, n = null;
  for (let i = 0; i < r.length; ++i) {
    const o = oh(r[i], t, r.length > 1);
    if (o.type === "match") {
      (!n || n.conversions > o.conversions) && (n = {
        func: r[i],
        conversions: o.conversions
      });
      continue;
    }
    e || (e = o);
  }
  if (!n) {
    if (e)
      return e;
    throw new Error("Missing function");
  }
  return n;
}
function Fs(r, t, e) {
  return ic(r.get(t), e);
}
function oc(r, t) {
  return t.map((e, n) => {
    let i = n >= r.args.length ? r.args[r.args.length - 1] : r.args[n];
    return typeof i != "object" && (i = {
      type: i
    }), i.type === Qe && e.type === he ? xs(e) : e;
  });
}
function Ga(r, t) {
  return r + ":" + t.args.map((e) => typeof e == "string" ? e : e.type).join("#");
}
function dn(r, t) {
  return {
    type: Ee,
    value: _i(t, !0)
  };
}
function Ja(r, t) {
  const e = Number(t.value);
  if (Number.isNaN(e) || !Number.isFinite(e))
    throw new Error("Unable to convert value to Number.");
  if (t.value === "")
    throw new Error("Unable to convert value to Number.");
  return {
    type: Qe,
    value: e
  };
}
function sh(r, t) {
  if (t.value > eo || t.value < to)
    throw new Error("Unable to convert value to Integer.");
  const e = t.value - t.value % 1;
  return {
    type: he,
    value: Rr(e)
  };
}
function ah(r, t) {
  let e;
  try {
    e = Rr(t.value);
  } catch {
    throw new Error("Unable to convert value to Integer.");
  }
  return {
    type: he,
    value: e
  };
}
function lh(r, t) {
  return {
    type: he,
    value: Rr(t.value ? 1 : 0)
  };
}
function ch(r, t) {
  const e = Number(t.value);
  if (e !== 1 && e !== 0)
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: vr,
    value: e
  };
}
function uh(r, t) {
  if (t.value !== "true" && t.value !== "false")
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: vr,
    value: t.value === "true" ? 1 : 0
  };
}
function dh(r, t) {
  return {
    type: Nr,
    value: ti(t.value)
  };
}
function fh(r, t) {
  return An(t.value), {
    type: bn,
    value: t.value
  };
}
function gh(r, t) {
  try {
    return {
      type: Ee,
      value: encodeURIComponent(t.value)
    };
  } catch {
    throw new Error("Unable to encodeUri string.");
  }
}
function ph(r, t) {
  try {
    return {
      type: Ee,
      value: decodeURIComponent(t.value)
    };
  } catch {
    throw new Error("Unable to decodeUri string.");
  }
}
function qs(r, t, e, n) {
  const i = r.variables.get(t.value);
  let o;
  return i && i.getType() === n ? (o = i.getValue(), r.storeUsedVars || (r.storeUsedVars = /* @__PURE__ */ new Set()), r.storeUsedVars.add(i)) : o = e.value, n === "color" ? o = ti(o) : n === "url" && An(o), {
    type: n,
    // value is synced with type by params
    value: o
  };
}
function mo(r, t, e) {
  return qs(r, t, e, e.type);
}
function qa(r, t, e) {
  return qs(r, t, e, "color");
}
function Ya(r, t, e) {
  return qs(r, t, e, "url");
}
function sc(r, t) {
  for (let e = 0; e < t.length; ++e) {
    const n = r.charAt(e), i = t.charAt(e);
    if (n !== i && i)
      return i;
  }
  return "";
}
const Ho = 1234567890;
function Ka(r) {
  const t = new Intl.NumberFormat(r, {
    maximumFractionDigits: 0
  }), e = new Intl.NumberFormat(r, {
    minimumFractionDigits: 1
  }), n = t.format(Ho), i = e.format(Ho);
  return sc(n, i);
}
function _h(r) {
  const t = new Intl.NumberFormat(r, {
    useGrouping: !1
  }), e = new Intl.NumberFormat(r, {
    useGrouping: !0
  }), n = t.format(Ho), i = e.format(Ho);
  return sc(n, i);
}
function Kn(r, t, e, n) {
  const i = e.value, o = i.replace(/,/g, "");
  if (!/^((#+)|(#*0+))(\.0*#*)?$/.test(o) && !/^#*0*\.((0*#*)|(#+))$/.test(o) || /,.*,/.test(i) || i.indexOf(",") > i.indexOf(".") && i.indexOf(".") > -1)
    throw new Error("Incorrect format pattern.");
  const a = i.split("."), c = a[0], g = a[1] || "", d = i.replace(/[^#0.]/g, "").split("."), _ = d[0], k = d[1] || "", I = c.indexOf(","), T = I > -1 ? c.length - I - 1 : -1;
  if (I > -1 && T < 1 || g.indexOf(",") > -1)
    throw new Error("Incorrect format pattern.");
  try {
    let D = 0;
    for (; _[_.length - 1 - D] === "0"; )
      ++D;
    let B = 0;
    for (; k[B] === "0"; )
      ++B;
    let V = B;
    for (; k[V] === "#"; )
      ++V;
    let $e = new Intl.NumberFormat((n == null ? void 0 : n.value) || void 0, {
      useGrouping: !1,
      minimumIntegerDigits: Math.min(Math.max(D, 1), 21),
      minimumFractionDigits: Math.min(Math.max(B, 0), 100),
      maximumFractionDigits: Math.min(Math.max(V, B, 0), 100),
      roundingMode: "halfEven"
    }).format(t.value);
    if (I > -1 && T > 0) {
      const Y = _h(n == null ? void 0 : n.value), ue = Ka(n == null ? void 0 : n.value);
      if (Y && ue) {
        const Z = $e.split(ue), ae = Z[0];
        let ke = "";
        for (let le = ae.length - 1; le >= 0; --le)
          ke = ae[le] + ke, le > 0 && (ae.length - le) % T === 0 && (ke = Y + ke);
        $e = ke + (Z.length > 1 ? ue + Z[1] : "");
      }
    }
    if (B === 0 && V === 0 && i.endsWith(".")) {
      const Y = Ka(n == null ? void 0 : n.value);
      Y && ($e += Y);
    }
    return {
      type: Ee,
      value: $e
    };
  } catch (D) {
    throw new Error("Incorrect or unsupported number format." + D + " " + (n == null ? void 0 : n.value) || void 0);
  }
}
function hh() {
  x("toString", [he], dn), x("toString", [Qe], dn), x("toString", [vr], dn), x("toString", [Nr], dn), x("toString", [bn], dn), x("toString", [Ee], dn), x("toString", [Lt], dn), x("toString", [Rt], dn), x("toNumber", [he], Ja), x("toNumber", [Ee], Ja), x("toInteger", [Qe], sh), x("toInteger", [Ee], ah), x("toInteger", [vr], lh), x("toBoolean", [he], ch), x("toBoolean", [Ee], uh), x("toColor", [Ee], dh), x("toUrl", [Ee], fh), x("encodeUri", [Ee], gh), x("decodeUri", [Ee], ph), x("getIntegerValue", [Ee, he], mo), x("getNumberValue", [Ee, Qe], mo), x("getBooleanValue", [Ee, vr], mo), x("getStringValue", [Ee, Ee], mo), x("getColorValue", [Ee, Nr], qa), x("getColorValue", [Ee, Ee], qa), x("getUrlValue", [Ee, bn], Ya), x("getUrlValue", [Ee, Ee], Ya), mr("toString", [he], dn), mr("toString", [Qe], dn), mr("toString", [vr], dn), mr("toString", [Nr], dn), mr("toString", [bn], dn), mr("toString", [Ee], dn), mr("toString", [Lt], dn), mr("toString", [Rt], dn), x("decimalFormat", [he, Ee], Kn), x("decimalFormat", [Qe, Ee], Kn), x("decimalFormat", [he, Ee, Ee], Kn), x("decimalFormat", [Qe, Ee, Ee], Kn), mr("decimalFormat", [he, Ee], Kn), mr("decimalFormat", [Qe, Ee], Kn), mr("decimalFormat", [he, Ee, Ee], Kn), mr("decimalFormat", [Qe, Ee, Ee], Kn);
}
function fn(r, t) {
  return !r || !t ? r : r.padStart(t, "0");
}
const Ss = {
  G(r, t) {
    let e;
    return r < 4 ? e = "short" : r === 5 ? e = "narrow" : e = "long", t({
      era: e
    }, "era");
  },
  d(r, t) {
    return fn(t({
      day: "numeric"
    }, "day"), r > 1 ? r : 0);
  },
  D(r, t) {
    return fn(t({}, "dayofyear"), r > 1 ? r : 0);
  },
  F(r, t) {
    return fn(t({}, "dayofweekinmonth"), r > 1 ? r : 0);
  },
  M(r, t) {
    let e;
    return r === 1 ? e = "numeric" : r === 2 ? e = "2-digit" : r === 3 ? e = "short" : r === 5 ? e = "narrow" : e = "long", t({
      month: e,
      // to get a genitive case of month
      day: "numeric"
    }, "month");
  },
  y(r, t) {
    return fn(t({
      year: r === 2 ? "2-digit" : "numeric"
    }, "year"), r > 2 ? r : void 0);
  },
  Y(r, t) {
    return fn(t({
      year: r === 2 ? "2-digit" : "numeric"
    }, "weekyear"), r > 2 ? r : void 0);
  },
  u(r, t) {
    return fn(t({
      year: "numeric"
    }, "extendedyear"), r > 1 ? r : void 0);
  },
  E(r, t) {
    let e;
    return r <= 3 ? e = "short" : r === 5 ? e = "narrow" : e = "long", t({
      weekday: e
    }, "weekday");
  },
  e(r, t) {
    return r > 2 ? Ss.E(r, t) : fn(t({}, "weekdaynumeric"), r > 1 ? r : void 0);
  },
  w(r, t) {
    return fn(t({}, "week"), r > 1 ? r : void 0);
  },
  W(r, t) {
    return fn(t({}, "weekofmonth"), r > 1 ? r : void 0);
  },
  H(r, t) {
    const e = t({
      hour: "numeric",
      hour12: !1,
      hourCycle: "h23"
    }, "hour");
    if (!e)
      return;
    const n = String(Number(e) % 24);
    return fn(n, r > 1 ? r : void 0);
  },
  h(r, t) {
    return fn(t({
      hour: "numeric",
      hour12: !0,
      hourCycle: "h12"
    }, "hour"), r > 1 ? r : void 0);
  },
  K(r, t) {
    const e = t({
      hour: "numeric",
      hour12: !0,
      hourCycle: "h11"
    }, "hour");
    if (!e)
      return;
    const n = String(Number(e) % 12);
    return fn(n, r > 1 ? r : void 0);
  },
  k(r, t) {
    return fn(t({
      hour: "numeric",
      hour12: !1,
      hourCycle: "h24"
    }, "hour"), r > 2 ? r : void 0);
  },
  a(r, t) {
    return t({
      hour: "numeric",
      hour12: !0,
      hourCycle: "h11",
      dayPeriod: void 0
    }, "dayPeriod");
  },
  m(r, t) {
    return fn(t({
      minute: "numeric"
    }, "minute"), r > 1 ? r : void 0);
  },
  s(r, t) {
    return fn(t({
      second: "numeric"
    }, "second"), r > 1 ? r : void 0);
  },
  S(r, t) {
    const e = t({
      fractionalSecondDigits: Math.min(3, r)
    }, "fractionalSecond");
    return e && r > 3 ? e.padEnd(r, "0") : e;
  },
  z(r, t) {
    return t({
      timeZoneName: r === 4 ? "long" : "short"
    }, "timeZoneName");
  },
  Z(r, t) {
    const e = -Number(t({}, "timezoneoffset")), n = Math.abs(e / 60), i = Math.floor(n) * 100 + (n - Math.floor(n)) * 60;
    return (e >= 0 ? "+" : "-") + fn(String(i), 4);
  }
}, mh = /(\w)\1*|''|'(''|[^'])+('|$)|./g, bh = /^'([^]*?)'?$/, vh = /''/g, yh = /[a-zA-Z]/, Ys = 1e3 * 60 * 60 * 24;
function wh(r) {
  const t = r.match(bh);
  return t ? t[1].replace(vh, "'") : r;
}
function Ds(r, t, e) {
  const n = r[t ? "getUTCDay" : "getDay"](), i = n < e ? e - n - 7 : e - n;
  return new Date(r.getTime() + Ys * i);
}
function Za(r, t, e) {
  const n = new Date(r);
  return n[t ? "setUTCDate" : "setDate"](1), n[t ? "setUTCMonth" : "setMonth"](0), Ds(n, t, e);
}
function Xa(r, t) {
  return Math.round((r.getTime() - t.getTime()) / Ys);
}
function Qa(r, t, e) {
  let n = 0;
  const i = Za(r, t || !1, e), o = new Date(r);
  o[t ? "setUTCFullYear" : "setFullYear"](r[t ? "getUTCFullYear" : "getFullYear"]() + 1);
  const a = Za(o, t || !1, e), c = r.getTime() < i.getTime(), g = r.getTime() >= a.getTime();
  let d = r[t ? "getUTCFullYear" : "getFullYear"]();
  if (c) {
    --d, i[t ? "setUTCFullYear" : "setFullYear"](i[t ? "getUTCFullYear" : "getFullYear"]() - 1);
    const _ = Xa(Ds(r, t, e), i);
    n = Math.round(_ / 7) + 1;
  } else if (g)
    ++d, n = 1;
  else {
    const _ = Xa(Ds(r, t, e), i);
    n = Math.round(_ / 7) + 1;
  }
  return {
    week: n,
    year: d
  };
}
function $h(r, t, {
  locale: e,
  isUTC: n,
  weekStartDay: i = 0
} = {}) {
  const o = (a, c) => {
    if (c === "week") {
      const { week: _ } = Qa(r, n || !1, i);
      return String(_);
    }
    if (c === "weekofmonth") {
      const _ = r[n ? "getUTCDay" : "getDay"](), k = new Date(r);
      k[n ? "setUTCDate" : "setDate"](1);
      const I = k[n ? "getUTCDay" : "getDay"](), T = r[n ? "getUTCDate" : "getDate"]();
      return String(Math.ceil(T / 7) + (_ < I ? 1 : 0));
    }
    if (c === "dayofweekinmonth") {
      const _ = r[n ? "getUTCDate" : "getDate"]();
      return String(Math.ceil(_ / 7));
    }
    if (c === "weekdaynumeric") {
      let _ = r[n ? "getUTCDay" : "getDay"]();
      return _ < i && (_ += 7), String(_ - i + 1);
    }
    if (c === "dayofyear") {
      const _ = new Date(r);
      _[n ? "setUTCMonth" : "setMonth"](0), _[n ? "setUTCDate" : "setDate"](1), _[n ? "setUTCHours" : "setHours"](1), _[n ? "setUTCMinutes" : "setMinutes"](1), _[n ? "setUTCSeconds" : "setSeconds"](1);
      const k = Math.ceil((r.getTime() - _.getTime()) / Ys);
      return String(k);
    }
    if (c === "weekyear") {
      let { year: _ } = Qa(r, n || !1, i);
      return _ < 1 && (_ = 1 - _), a.year === "2-digit" ? String(_ % 100) : String(_);
    }
    if (c === "extendedyear") {
      const _ = r[n ? "getUTCFullYear" : "getFullYear"]();
      return a.year === "2-digit" ? String(_ % 100) : String(_);
    }
    if (c === "timezoneoffset")
      return n ? "0" : String(r.getTimezoneOffset());
    n && (a.timeZone = "UTC");
    const d = new Intl.DateTimeFormat(e, a).formatToParts(r);
    for (let _ = 0; _ < d.length; ++_)
      if (d[_].type === c)
        return d[_].value;
  };
  return (t.match(mh) || []).map((a) => {
    if (a === "''")
      return "'";
    const c = a[0];
    if (c === "'")
      return wh(a);
    if (Ss[c])
      return Ss[c](a.length, o);
    if (c.match(yh))
      throw new Error(
        `Format string contains an unescaped latin alphabet character "${c}"`
      );
    return a;
  }).join("");
}
function jh(r) {
  const t = new Date(r);
  return t.setUTCMonth(t.getUTCMonth() + 1), t.setUTCDate(0), t.getUTCDate();
}
function kh(r, t) {
  return {
    type: fr,
    value: new Date(Number(t.value) * 1e3)
  };
}
function xh(r, t) {
  const e = new Date(Number(t.value) * 1e3), n = e.getTimezoneOffset();
  return e.setMinutes(e.getMinutes() - n), {
    type: fr,
    value: e
  };
}
function Eh() {
  return {
    type: fr,
    value: /* @__PURE__ */ new Date()
  };
}
function Ah(r, t, e) {
  return {
    type: fr,
    value: new Date(t.value.getTime() + Number(e.value))
  };
}
function Ch(r, t, e) {
  const n = new Date(t.value);
  return n.setUTCFullYear(Number(e.value)), {
    type: fr,
    value: n
  };
}
function Vh(r, t, e) {
  const n = Number(e.value);
  if (n < 1 || n > 12)
    throw new Error(`Expecting month in [1..12], instead got ${n}.`);
  const i = new Date(t.value);
  return i.setUTCMonth(n - 1), {
    type: fr,
    value: i
  };
}
function Fh(r, t, e) {
  const n = new Date(t.value), i = Number(e.value);
  if (i <= 0 && i !== -1 || i > jh(n))
    throw new Error(`Unable to set day ${i} for date ${_i(t, !1)}.`);
  return n.setUTCDate(i === -1 ? 0 : i), {
    type: fr,
    value: n
  };
}
function Sh(r, t, e) {
  const n = Number(e.value);
  if (n < 0 || n > 23)
    throw new Error(`Expecting hours in [0..23], instead got ${n}.`);
  const i = new Date(t.value);
  return i.setUTCHours(n), {
    type: fr,
    value: i
  };
}
function Dh(r, t, e) {
  const n = Number(e.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting minutes in [0..59], instead got ${n}.`);
  const i = new Date(t.value);
  return i.setUTCMinutes(n), {
    type: fr,
    value: i
  };
}
function Ih(r, t, e) {
  const n = Number(e.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting seconds in [0..59], instead got ${n}.`);
  const i = new Date(t.value);
  return i.setUTCSeconds(n), {
    type: fr,
    value: i
  };
}
function Th(r, t, e) {
  const n = Number(e.value);
  if (n < 0 || n > 999)
    throw new Error(`Expecting millis in [0..999], instead got ${n}.`);
  const i = new Date(t.value);
  return i.setUTCMilliseconds(n), {
    type: fr,
    value: i
  };
}
const ri = (r) => (t, e) => {
  let i = new Date(e.value.getTime())[r]();
  return r === "getUTCMonth" ? ++i : r === "getUTCDay" && i === 0 && (i = 7), {
    type: he,
    value: Rr(i)
  };
};
function ac(r) {
  return (t, e, n, i) => ({
    type: Ee,
    value: $h(e.value, n.value, {
      locale: i == null ? void 0 : i.value,
      isUTC: r,
      weekStartDay: t.weekStartDay
    })
  });
}
const Mh = ri("getUTCFullYear"), Ph = ri("getUTCMonth"), zh = ri("getUTCDate"), Oh = ri("getUTCDay"), Nh = ri("getUTCHours"), Bh = ri("getUTCMinutes"), Rh = ri("getUTCSeconds"), Lh = ri("getUTCMilliseconds"), el = ac(!1), tl = ac(!0);
function Hh() {
  x("parseUnixTime", [he], kh), x("parseUnixTimeAsLocal", [he], xh), x("nowLocal", [], Eh), x("addMillis", [fr, he], Ah), x("setYear", [fr, he], Ch), x("setMonth", [fr, he], Vh), x("setDay", [fr, he], Fh), x("setHours", [fr, he], Sh), x("setMinutes", [fr, he], Dh), x("setSeconds", [fr, he], Ih), x("setMillis", [fr, he], Th), x("getYear", [fr], Mh), x("getMonth", [fr], Ph), x("getDay", [fr], zh), x("getDayOfWeek", [fr], Oh), x("getHours", [fr], Nh), x("getMinutes", [fr], Bh), x("getSeconds", [fr], Rh), x("getMillis", [fr], Lh), x("formatDateAsLocal", [fr, Ee], el), x("formatDateAsUTC", [fr, Ee], tl), x("formatDateAsLocalWithLocale", [fr, Ee, Ee], el), x("formatDateAsUTCWithLocale", [fr, Ee, Ee], tl);
}
function Wh(r) {
  return r.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function Uh(r, t) {
  return {
    type: he,
    value: Rr(t.value.length)
  };
}
function Gh(r, t, e) {
  return {
    type: vr,
    value: t.value.includes(e.value) ? 1 : 0
  };
}
function Jh(r, t, e, n) {
  if (n.value < e.value)
    throw new Error("Indexes should be in ascending order.");
  if (e.value < 0 || e.value > t.value.length || n.value < 0 || n.value > t.value.length)
    throw new Error("Indexes are out of bounds.");
  return {
    type: Ee,
    value: t.value.substring(Number(e.value), Number(n.value))
  };
}
function qh(r, t, e, n) {
  let i;
  return e.value ? i = t.value.replace(new RegExp(Wh(e.value), "g"), n.value) : i = t.value, {
    type: Ee,
    value: i
  };
}
function Yh(r, t, e) {
  return {
    type: he,
    value: Rr(t.value.indexOf(e.value))
  };
}
function Kh(r, t, e) {
  return {
    type: he,
    value: Rr(t.value.lastIndexOf(e.value))
  };
}
function Zh(r, t) {
  return {
    type: Ee,
    value: t.value.trim()
  };
}
function Xh(r, t) {
  return {
    type: Ee,
    value: t.value.replace(/^\s+/, "")
  };
}
function Qh(r, t) {
  return {
    type: Ee,
    value: t.value.replace(/\s+$/, "")
  };
}
function em(r, t) {
  return {
    type: Ee,
    value: t.value.toUpperCase()
  };
}
function tm(r, t) {
  return {
    type: Ee,
    value: t.value.toLowerCase()
  };
}
function lc(r, t, e, n) {
  if (!n.value.length)
    return r.warnings.push(C(new Error("String for padding is empty."), {
      level: "warn"
    })), "";
  let i = "";
  const o = t.type === Ee ? t.value : _i(t, !1);
  for (; i.length + o.length < e.value; )
    i += n.value;
  return i.length > 0 && i.length + o.length > e.value && (i = i.substring(0, Number(e.value) - Number(o.length))), i;
}
function rl(r, t, e, n) {
  const i = lc(r, t, e, n);
  return {
    type: Ee,
    value: i + _i(t, !1)
  };
}
function nl(r, t, e, n) {
  const i = lc(r, t, e, n);
  return {
    type: Ee,
    value: _i(t, !1) + i
  };
}
function rm(r, t, e) {
  let n;
  try {
    n = new RegExp(e.value);
  } catch {
    throw new Error("Invalid regular expression.");
  }
  return {
    type: vr,
    value: n.test(t.value) ? 1 : 0
  };
}
function nm(r, t) {
  return {
    type: Ee,
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#escaping
    value: t.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  };
}
function im() {
  x("len", [Ee], Uh), x("contains", [Ee, Ee], Gh), x("substring", [Ee, he, he], Jh), x("replaceAll", [Ee, Ee, Ee], qh), x("index", [Ee, Ee], Yh), x("lastIndex", [Ee, Ee], Kh), x("trim", [Ee], Zh), x("trimLeft", [Ee], Xh), x("trimRight", [Ee], Qh), x("toUpperCase", [Ee], em), x("toLowerCase", [Ee], tm), x("padStart", [Ee, he, Ee], rl), x("padStart", [he, he, Ee], rl), x("padEnd", [Ee, he, Ee], nl), x("padEnd", [he, he, Ee], nl), x("testRegex", [Ee, Ee], rm), x("encodeRegex", [Ee], nm);
}
function om(r, t, e) {
  if (e.value === pi)
    throw new Error("Division by zero is not supported.");
  let n = t.value / e.value;
  return n = hi(r, n), ln(r, n), {
    type: he,
    value: n
  };
}
function sm(r, t, e) {
  if (e.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = t.value / e.value;
  return {
    type: Qe,
    value: n
  };
}
function am(r, t, e) {
  if (e.value === pi)
    throw new Error("Division by zero is not supported.");
  let n = t.value % e.value;
  return n = hi(r, n), ln(r, n), {
    type: he,
    value: n
  };
}
function lm(r, t, e) {
  if (e.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = t.value % e.value;
  return {
    type: Qe,
    value: n
  };
}
function cm(r, ...t) {
  let e = t.length ? t[0].value : pi;
  for (let n = 1; n < t.length; ++n)
    e *= t[n].value, e = hi(r, e), ln(r, e);
  return {
    type: he,
    value: e
  };
}
function um(r, ...t) {
  let e = t.length ? t[0].value : 0;
  for (let n = 1; n < t.length; ++n)
    e *= t[n].value;
  return {
    type: Qe,
    value: e
  };
}
function dm(r, ...t) {
  let e = t.length ? t[0].value : pi;
  for (let n = 1; n < t.length; ++n)
    e -= t[n].value, e = hi(r, e), ln(r, e);
  return {
    type: he,
    value: e
  };
}
function fm(r, ...t) {
  let e = t.length ? t[0].value : 0;
  for (let n = 1; n < t.length; ++n)
    e -= t[n].value;
  return {
    type: Qe,
    value: e
  };
}
function gm(r, ...t) {
  let e = pi;
  for (let n = 0; n < t.length; ++n)
    e += t[n].value, e = hi(r, e), ln(r, e);
  return {
    type: he,
    value: e
  };
}
function pm(r, ...t) {
  let e = 0;
  for (let n = 0; n < t.length; ++n)
    e += t[n].value;
  return {
    type: Qe,
    value: e
  };
}
function _m(r, t) {
  const e = Ul(t.value);
  return ln(r, e), {
    type: t.type,
    value: e
  };
}
function hm(r, t) {
  const e = Math.abs(t.value);
  return {
    type: Qe,
    value: e
  };
}
function mm(r, ...t) {
  if (!t.length)
    throw new Error("Function requires non empty argument list.");
  let e = t[0].value;
  for (let n = 1; n < t.length; ++n)
    t[n].value > e && (e = t[n].value);
  return {
    type: he,
    value: e
  };
}
function bm(r, ...t) {
  if (!t.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: Qe,
    value: Math.max(...t.map((e) => e.value))
  };
}
function vm(r, ...t) {
  if (!t.length)
    throw new Error("Function requires non empty argument list.");
  let e = t[0].value;
  for (let n = 1; n < t.length; ++n)
    t[n].value < e && (e = t[n].value);
  return {
    type: he,
    value: e
  };
}
function ym(r, ...t) {
  if (!t.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: Qe,
    value: Math.min(...t.map((e) => e.value))
  };
}
function wm() {
  return {
    type: Qe,
    value: Sg
  };
}
function $m() {
  return {
    type: Qe,
    value: Dg
  };
}
function jm(r) {
  return ln(r, eo), {
    type: he,
    value: eo
  };
}
function km(r) {
  return ln(r, to), {
    type: he,
    value: to
  };
}
function xm(r, t) {
  const e = Math.sign(t.value);
  return {
    type: Qe,
    // js treats Math.round(-0.5) as 0, which is different to other platforms
    value: e * Math.round(Math.abs(t.value))
  };
}
function Em(r, t) {
  return {
    type: Qe,
    value: Math.floor(t.value)
  };
}
function Am(r, t) {
  return {
    type: Qe,
    value: Math.ceil(t.value)
  };
}
function Cm(r, t) {
  return {
    type: he,
    value: Gl(t.value)
  };
}
function Vm(r, t) {
  return {
    type: Qe,
    value: Math.sign(t.value)
  };
}
function Fm(r, t, e) {
  let n;
  if (e.value === pi)
    n = t.value;
  else if (t.value === pi)
    n = Rr(0);
  else {
    const i = Gl(e.value);
    n = Ul(t.value) * i;
  }
  return ln(r, n), {
    type: he,
    value: n
  };
}
function Sm(r, t, e) {
  let n = Math.sign(e.value);
  n === 0 && (n = Object.is(n, 0) ? 1 : -1);
  const i = Math.abs(t.value) * n;
  return {
    type: Qe,
    value: i
  };
}
function Dm() {
  x("div", [he, he], om), x("div", [Qe, Qe], sm), x("mod", [he, he], am), x("mod", [Qe, Qe], lm), x("mul", [{
    type: he,
    isVararg: !0
  }], cm), x("mul", [{
    type: Qe,
    isVararg: !0
  }], um), x("sub", [{
    type: he,
    isVararg: !0
  }], dm), x("sub", [{
    type: Qe,
    isVararg: !0
  }], fm), x("sum", [{
    type: he,
    isVararg: !0
  }], gm), x("sum", [{
    type: Qe,
    isVararg: !0
  }], pm), x("abs", [he], _m), x("abs", [Qe], hm), x("max", [{
    type: he,
    isVararg: !0
  }], mm), x("max", [{
    type: Qe,
    isVararg: !0
  }], bm), x("min", [{
    type: he,
    isVararg: !0
  }], vm), x("min", [{
    type: Qe,
    isVararg: !0
  }], ym), x("maxNumber", [], wm), x("minNumber", [], $m), x("maxInteger", [], jm), x("minInteger", [], km), x("round", [Qe], xm), x("floor", [Qe], Em), x("ceil", [Qe], Am), x("signum", [he], Cm), x("signum", [Qe], Vm), x("copySign", [he, he], Fm), x("copySign", [Qe, Qe], Sm);
}
function ts(r) {
  return (t, e) => {
    const n = Xo(e.value);
    return {
      type: Qe,
      value: n[r] / 255
    };
  };
}
function rs(r) {
  return (t, e, n) => {
    const i = Xo(e.value);
    return i[r] = n.value * 255, {
      type: Nr,
      value: mi(i)
    };
  };
}
const il = ts("a"), ol = ts("r"), sl = ts("g"), al = ts("b"), ll = rs("a"), cl = rs("r"), ul = rs("g"), dl = rs("b");
function Im(r, t, e, n) {
  const i = {
    a: 255,
    r: t.value * 255,
    g: e.value * 255,
    b: n.value * 255
  };
  return {
    type: Nr,
    value: mi(i)
  };
}
function Tm(r, t, e, n, i) {
  const o = {
    a: t.value * 255,
    r: e.value * 255,
    g: n.value * 255,
    b: i.value * 255
  };
  return {
    type: Nr,
    value: mi(o)
  };
}
function Mm() {
  x("getColorAlpha", [Ee], il), x("getColorAlpha", [Nr], il), x("getColorRed", [Ee], ol), x("getColorRed", [Nr], ol), x("getColorGreen", [Ee], sl), x("getColorGreen", [Nr], sl), x("getColorBlue", [Ee], al), x("getColorBlue", [Nr], al), x("setColorAlpha", [Ee, Qe], ll), x("setColorAlpha", [Nr, Qe], ll), x("setColorRed", [Ee, Qe], cl), x("setColorRed", [Nr, Qe], cl), x("setColorGreen", [Ee, Qe], ul), x("setColorGreen", [Nr, Qe], ul), x("setColorBlue", [Ee, Qe], dl), x("setColorBlue", [Nr, Qe], dl), x("rgb", [Qe, Qe, Qe], Im), x("argb", [Qe, Qe, Qe, Qe], Tm);
}
function ni(r, t, e, n) {
  if (t.value < 0)
    throw new Error("Expecting non-negative number of milliseconds.");
  let i = Rr(t.value) / Rr(e);
  return ln(r, i), n && (i = Rr(i) % Rr(n)), {
    type: he,
    value: i
  };
}
const cc = 1e3, Pm = 60, uc = 1e3 * 60, zm = 60, dc = 1e3 * 60 * 60, Om = 24, Nm = 1e3 * 60 * 60 * 24, Bm = 1e3 * 60 * 60 * 24 * 7;
function Rm(r, t) {
  return ni(r, t, cc, Pm);
}
function Lm(r, t) {
  return ni(r, t, cc);
}
function Hm(r, t) {
  return ni(r, t, uc, zm);
}
function Wm(r, t) {
  return ni(r, t, uc);
}
function Um(r, t) {
  return ni(r, t, dc, Om);
}
function Gm(r, t) {
  return ni(r, t, dc);
}
function Jm(r, t) {
  return ni(r, t, Nm);
}
function qm(r, t) {
  return ni(r, t, Bm);
}
function Ym() {
  x("getIntervalSeconds", [he], Rm), x("getIntervalTotalSeconds", [he], Lm), x("getIntervalMinutes", [he], Hm), x("getIntervalTotalMinutes", [he], Wm), x("getIntervalHours", [he], Um), x("getIntervalTotalHours", [he], Gm), x("getIntervalTotalDays", [he], Jm), x("getIntervalTotalWeeks", [he], qm);
}
function Km(r, t) {
  let e = r;
  for (let n = 0; n < t.length; ++n) {
    if (!e)
      throw new Error(`Missing property "${t[n]}" in the dict.`);
    const i = e[t[n]];
    if (i === void 0)
      throw new Error(`Missing property "${t[n]}" in the dict.`);
    e = i;
  }
  return e;
}
function ii(r) {
  return (t, e, ...n) => {
    if (n.length === 0)
      throw new Error("Non empty argument list is required.");
    const i = Km(e.value, n.map((o) => o.value));
    return Qo(t, i, r);
  };
}
function Ni(r, t) {
  return (e, n, i, ...o) => {
    try {
      return r(e, i, ...o);
    } catch {
      let c = n.value;
      return t === "color" ? c = ti(c) : t === "url" && An(c), {
        type: t,
        value: c
      };
    }
  };
}
const Co = ii(Ee), Vo = ii(Qe), Fo = ii(he), So = ii(vr), Do = ii(Nr), Io = ii(bn), Is = ii(Lt), Ts = ii(Rt), fl = Ni(Co, Ee), gl = Ni(Vo, Qe), pl = Ni(Fo, he), _l = Ni(So, vr), bo = Ni(Do, Nr), vo = Ni(Io, bn);
function Zm(r, t, ...e) {
  try {
    return Is(r, t, ...e);
  } catch {
    return {
      type: Lt,
      value: []
    };
  }
}
function Xm(r, t, ...e) {
  try {
    return Ts(r, t, ...e);
  } catch {
    return {
      type: Rt,
      value: {}
    };
  }
}
function Qm(r, t, e) {
  return {
    type: vr,
    value: e.value in t.value ? 1 : 0
  };
}
function eb(r, t) {
  return {
    type: vr,
    value: Object.keys(t.value).length ? 0 : 1
  };
}
function tb(r, t) {
  return {
    type: he,
    value: Rr(Object.keys(t.value).length)
  };
}
function hl(r, t) {
  return {
    type: Lt,
    value: Object.keys(t.value)
  };
}
function ml(r, t) {
  return {
    type: Lt,
    value: Object.values(t.value)
  };
}
function rb() {
  const r = {
    type: Ee,
    isVararg: !0
  };
  x("getDictString", [Rt, r], Co), x("getStringFromDict", [Rt, r], Co), x("getDictNumber", [Rt, r], Vo), x("getNumberFromDict", [Rt, r], Vo), x("getDictInteger", [Rt, r], Fo), x("getIntegerFromDict", [Rt, r], Fo), x("getDictBoolean", [Rt, r], So), x("getBooleanFromDict", [Rt, r], So), x("getDictColor", [Rt, r], Do), x("getColorFromDict", [Rt, r], Do), x("getDictUrl", [Rt, r], Io), x("getUrlFromDict", [Rt, r], Io), x("getDictOptString", [Ee, Rt, r], fl), x("getOptStringFromDict", [Ee, Rt, r], fl), x("getDictOptNumber", [Qe, Rt, r], gl), x("getOptNumberFromDict", [Qe, Rt, r], gl), x("getDictOptInteger", [he, Rt, r], pl), x("getOptIntegerFromDict", [he, Rt, r], pl), x("getDictOptBoolean", [vr, Rt, r], _l), x("getOptBooleanFromDict", [vr, Rt, r], _l), x("getDictOptColor", [Nr, Rt, r], bo), x("getOptColorFromDict", [Nr, Rt, r], bo), x("getDictOptColor", [Ee, Rt, r], bo), x("getOptColorFromDict", [Ee, Rt, r], bo), x("getDictOptUrl", [Ee, Rt, r], vo), x("getOptUrlFromDict", [Ee, Rt, r], vo), x("getDictOptUrl", [bn, Rt, r], vo), x("getOptUrlFromDict", [bn, Rt, r], vo), x("getDictFromDict", [Rt, r], Ts), x("getArrayFromDict", [Rt, r], Is), x("getOptArrayFromDict", [Rt, r], Zm), x("getOptDictFromDict", [Rt, r], Xm), x("len", [Rt], tb), x("getDictKeys", [Rt], hl), x("getDictValues", [Rt], ml), mr("getString", [Rt, r], Co), mr("getBoolean", [Rt, r], So), mr("getInteger", [Rt, r], Fo), mr("getNumber", [Rt, r], Vo), mr("getUrl", [Rt, r], Io), mr("getColor", [Rt, r], Do), mr("getArray", [Rt, r], Is), mr("getDict", [Rt, r], Ts), mr("containsKey", [Rt, Ee], Qm), mr("isEmpty", [Rt], eb), mr("getKeys", [Rt], hl), mr("getValues", [Rt], ml);
}
function oi(r, t) {
  return (e, n, i) => {
    if (i.value < 0 || i.value >= n.value.length)
      throw new Error(`Requested index (${i.value}) out of bounds array size (${n.value.length}).`);
    let o = n.value[Number(i.value)], a = typeof o;
    if (r === "array" && !Array.isArray(o) || r !== "array" && a !== r || a === "object" && o === null)
      throw a === "object" && (Array.isArray(o) ? a = "Array" : o === null ? a = "Null" : a = "Dict"), new Error(`Incorrect value type: expected ${_n(t)}, got ${_n(a)}.`);
    if (r === "number" && t === "integer") {
      ln(e, o);
      try {
        o = Rr(o);
      } catch {
        throw new Error("Cannot convert value to integer.");
      }
    }
    return r === "string" && t === "color" && (o = ti(o)), r === "string" && t === "url" && An(o), {
      type: t,
      value: o
    };
  };
}
function Bi(r, t) {
  return (e, n, i, o) => {
    try {
      return r(e, n, i);
    } catch {
      let c = o.value;
      return t === "color" ? c = ti(c) : t === "url" && An(c), {
        type: t,
        value: c
      };
    }
  };
}
const To = oi("string", "string"), Mo = oi("number", "number"), Po = oi("number", "integer"), zo = oi("boolean", "boolean"), Oo = oi("string", "color"), No = oi("string", "url"), Ms = oi("array", "array"), Ps = oi("object", "dict"), bl = Bi(To, "string"), vl = Bi(Mo, "number"), yl = Bi(Po, "integer"), wl = Bi(zo, "boolean"), yo = Bi(Oo, "color"), wo = Bi(No, "url");
function nb(r, t, e) {
  try {
    return Ms(r, t, e);
  } catch {
    return {
      type: Lt,
      value: []
    };
  }
}
function ib(r, t, e) {
  try {
    return Ps(r, t, e);
  } catch {
    return {
      type: Rt,
      value: {}
    };
  }
}
function ob(r, t) {
  return {
    type: he,
    value: Rr(t.value.length)
  };
}
function sb(r, t) {
  return {
    type: vr,
    value: t.value.length === 0 ? 1 : 0
  };
}
function ab(r, t, e) {
  return t.value.length ? {
    type: Lt,
    value: t.value.filter((n) => {
      const i = [];
      if (typeof n == "string")
        xn(n) && i.push([{
          type: Nr,
          value: n
        }]), Tg(n) && i.push([{
          type: bn,
          value: n
        }]), i.push([{
          type: Ee,
          value: n
        }]);
      else if (typeof n == "number")
        Math.round(n) === n && (ln(r, n), i.push([{
          type: he,
          value: Rr(n)
        }])), i.push([{
          type: Qe,
          value: n
        }]);
      else if (typeof n == "bigint")
        ln(r, n), i.push([{
          type: he,
          value: n
        }]);
      else if (Array.isArray(n))
        i.push([{
          type: Lt,
          value: n
        }]);
      else if (typeof n == "object") {
        if (n === null)
          throw new Error("Incorrect value type: Null");
        i.push([{
          type: Rt,
          value: n
        }]);
      } else if (typeof n == "boolean")
        i.push([{
          type: vr,
          value: n ? 1 : 0
        }]);
      else
        throw new Error(`Incorrect value type: ${_n(typeof n)}`);
      let o = {
        type: "missing"
      };
      for (const _ of i)
        if (o = ic(e.value, _), "func" in o)
          break;
      let a;
      if ("func" in o)
        a = o.func;
      else {
        const _ = e.value[0];
        fc(_.name || "Function", i[0], o, !0);
      }
      const c = a.args[0], g = Qo(
        r,
        n,
        typeof c == "string" ? c : c.type
      ), d = a.cb(r, g);
      if (d.type !== vr)
        throw new Error("Function must return boolean value.");
      return d.value;
    })
  } : {
    type: Lt,
    value: []
  };
}
function lb() {
  x("getArrayString", [
    Lt,
    he
  ], To), x("getStringFromArray", [
    Lt,
    he
  ], To), x("getArrayNumber", [
    Lt,
    he
  ], Mo), x("getNumberFromArray", [
    Lt,
    he
  ], Mo), x("getArrayInteger", [
    Lt,
    he
  ], Po), x("getIntegerFromArray", [
    Lt,
    he
  ], Po), x("getArrayBoolean", [
    Lt,
    he
  ], zo), x("getBooleanFromArray", [
    Lt,
    he
  ], zo), x("getArrayColor", [
    Lt,
    he
  ], Oo), x("getColorFromArray", [
    Lt,
    he
  ], Oo), x("getArrayUrl", [
    Lt,
    he
  ], No), x("getUrlFromArray", [
    Lt,
    he
  ], No), x("getArrayFromArray", [
    Lt,
    he
  ], Ms), x("getDictFromArray", [
    Lt,
    he
  ], Ps), x("getArrayOptString", [
    Lt,
    he,
    Ee
  ], bl), x("getOptStringFromArray", [
    Lt,
    he,
    Ee
  ], bl), x("getArrayOptNumber", [
    Lt,
    he,
    Qe
  ], vl), x("getOptNumberFromArray", [
    Lt,
    he,
    Qe
  ], vl), x("getArrayOptInteger", [
    Lt,
    he,
    he
  ], yl), x("getOptIntegerFromArray", [
    Lt,
    he,
    he
  ], yl), x("getArrayOptBoolean", [
    Lt,
    he,
    vr
  ], wl), x("getOptBooleanFromArray", [
    Lt,
    he,
    vr
  ], wl), x("getArrayOptColor", [
    Lt,
    he,
    Nr
  ], yo), x("getOptColorFromArray", [
    Lt,
    he,
    Nr
  ], yo), x("getArrayOptColor", [
    Lt,
    he,
    Ee
  ], yo), x("getOptColorFromArray", [
    Lt,
    he,
    Ee
  ], yo), x("getArrayOptUrl", [
    Lt,
    he,
    bn
  ], wo), x("getOptUrlFromArray", [
    Lt,
    he,
    bn
  ], wo), x("getArrayOptUrl", [
    Lt,
    he,
    Ee
  ], wo), x("getOptUrlFromArray", [
    Lt,
    he,
    Ee
  ], wo), x("getOptArrayFromArray", [
    Lt,
    he
  ], nb), x("getOptDictFromArray", [
    Lt,
    he
  ], ib), x("len", [
    Lt
  ], ob), mr("getString", [Lt, he], To), mr("getInteger", [Lt, he], Po), mr("getNumber", [Lt, he], Mo), mr("getBoolean", [Lt, he], zo), mr("getUrl", [Lt, he], No), mr("getColor", [Lt, he], Oo), mr("getArray", [Lt, he], Ms), mr("getDict", [Lt, he], Ps), mr("isEmpty", [Lt], sb), mr("filter", [Lt, Ig], ab);
}
function In(r) {
  return (t, e, n) => {
    if (!t.store) {
      if (!n)
        throw new Error("Missing value.");
      return {
        type: r,
        value: n.value
      };
    }
    let i;
    r === "boolean" ? i = "boolean" : r === "number" || r === "integer" ? i = "number" : i = "string";
    let o;
    if (t.store.get ? o = t.store.get(e.value, r) : t.store.getValue && (o = t.store.getValue(e.value, i)), o === void 0) {
      if (!n)
        throw new Error("Missing value.");
      return r === "url" && An(n.value), {
        type: r,
        value: n.value
      };
    } else r === "url" && An(o);
    return Qo(t, o, r);
  };
}
function cb() {
  x("getStoredIntegerValue", [Ee, he], In(he)), x("getStoredNumberValue", [Ee, Qe], In(Qe)), x("getStoredStringValue", [Ee, Ee], In(Ee)), x("getStoredUrlValue", [Ee, bn], In(bn)), x("getStoredUrlValue", [Ee, Ee], In(bn)), x("getStoredColorValue", [Ee, Nr], In(Nr)), x("getStoredColorValue", [Ee, Ee], In(Nr)), x("getStoredBooleanValue", [Ee, vr], In(vr)), x("getStoredArrayValue", [Ee], In(Lt)), x("getStoredDictValue", [Ee], In(Rt));
}
function ub() {
  return {
    type: Qe,
    value: Math.PI
  };
}
function db(r, t) {
  return {
    type: Qe,
    value: t.value / 180 * Math.PI
  };
}
function fb(r, t) {
  return {
    type: Qe,
    value: t.value / Math.PI * 180
  };
}
function gb(r, t) {
  return {
    type: Qe,
    value: Math.sin(t.value)
  };
}
function pb(r, t) {
  return {
    type: Qe,
    value: Math.cos(t.value)
  };
}
function _b(r, t) {
  return {
    type: Qe,
    value: Math.tan(t.value)
  };
}
function hb(r, t) {
  const e = Math.tan(t.value);
  if (Math.abs(e) < 1e-12)
    throw new Error("Cotangent is undefined for the given value.");
  return {
    type: Qe,
    value: 1 / e
  };
}
function mb(r, t) {
  return {
    type: Qe,
    value: Math.atan(t.value)
  };
}
function bb(r, t, e) {
  return {
    type: Qe,
    value: Math.atan2(t.value, e.value)
  };
}
function vb(r, t) {
  if (t.value > 1 || t.value < -1)
    throw new Error("Arcsine is undefined for the given value.");
  return {
    type: Qe,
    value: Math.asin(t.value)
  };
}
function yb(r, t) {
  if (t.value > 1 || t.value < -1)
    throw new Error("Arccosine is undefined for the given value.");
  return {
    type: Qe,
    value: Math.acos(t.value)
  };
}
function wb() {
  x("pi", [], ub), x("toRadians", [Qe], db), x("toDegrees", [Qe], fb), x("sin", [Qe], gb), x("cos", [Qe], pb), x("tan", [Qe], _b), x("cot", [Qe], hb), x("atan", [Qe], mb), x("atan2", [Qe, Qe], bb), x("asin", [Qe], vb), x("acos", [Qe], yb);
}
function $b() {
  hh(), Hh(), Ym(), im(), Dm(), Mm(), rb(), lb(), cb(), wb();
}
$b();
function jb(r, t) {
  return {
    type: Ee,
    value: t.value
  };
}
function kb(r, t) {
  return {
    type: Qe,
    value: t.value
  };
}
function xb(r, t) {
  return ln(r, t.value), {
    type: he,
    value: t.value
  };
}
function Eb(r, t) {
  return {
    type: vr,
    value: t.value ? 1 : 0
  };
}
function Ab(r, t) {
  const e = Ro(cn(r, t.argument));
  switch (t.operator) {
    case "!":
      if (e.type === vr)
        return {
          type: vr,
          value: e.value ? 0 : 1
        };
      Xr(`${t.operator}${Br(e)}`, "A Boolean is expected after a unary not.");
    case "+":
    case "-":
      const n = t.operator === "+" ? 1 : -1;
      if (e.type === he) {
        const i = e.value * Rr(n);
        return ln(r, i), {
          type: he,
          value: i
        };
      } else {
        if (e.type === Qe)
          return {
            type: Qe,
            value: e.value * n
          };
        Xr(
          `${t.operator}${Br(e)}`,
          `A Number is expected after a unary ${t.operator === "+" ? "plus" : "minus"}.`
        );
      }
  }
}
function Cb(r, t) {
  const e = Ro(cn(r, t.test));
  if (e.type === vr)
    return e.value ? cn(r, t.consequent) : cn(r, t.alternate);
  Xr(
    `${Br(e)} ? ${Br(cn(r, t.consequent))} : ${Br(cn(r, t.alternate))}`,
    "Ternary must be called with a Boolean value as a condition."
  );
}
function Vb(r, t) {
  try {
    return cn(r, t.test);
  } catch {
    return cn(r, t.alternate);
  }
}
function Fb(r, t) {
  let e = "";
  if (t.quasis.length === 2 && t.quasis[0].value === "" && t.quasis[1].value === "")
    return cn(r, t.expressions[0]);
  for (let n = 0; n < t.expressions.length; ++n)
    e += t.quasis[n].value, e += _i(cn(r, t.expressions[n]), !0);
  return e += t.quasis[t.quasis.length - 1].value, {
    type: Ee,
    value: e
  };
}
function Sb(r, t) {
  const e = Ro(cn(r, t.left));
  if (e.type !== vr && Xr(
    `${Br(e)} ${t.operator} ...`,
    `'${t.operator}' must be called with boolean operands.`
  ), t.operator === "||" && e.value)
    return e;
  if (t.operator === "&&" && !e.value)
    return {
      type: vr,
      value: 0
    };
  const n = Ro(cn(r, t.right));
  return n.type !== vr && Xr(
    `${Br(e)} ${t.operator} ${Br(n)}`,
    `Operator '${t.operator}' cannot be applied to different types: Boolean and ${_n(n.type)}.`
  ), {
    type: vr,
    value: n.value
  };
}
function Db(r, t, e) {
  let n;
  return t.type === fr && e.type === fr ? n = t.value.getTime() === e.value.getTime() : n = t.value === e.value, r === "!=" && (n = !n), {
    type: vr,
    value: n ? 1 : 0
  };
}
function Ib(r, t, e) {
  (t.type !== Qe && t.type !== he && t.type !== fr || e.type !== Qe && e.type !== he && e.type !== fr) && Xr(
    `${Br(t)} ${r} ${Br(e)}`,
    `Operator '${r}' cannot be applied to ${_n(t.type)} type.`
  );
  let n;
  const i = t.type === fr ? t.value.getTime() : t.value, o = e.type === fr ? e.value.getTime() : e.value;
  return r === ">" ? n = i > o : r === ">=" ? n = i >= o : r === "<" ? n = i < o : n = i <= o, {
    type: vr,
    value: n ? 1 : 0
  };
}
function Tb(r, t, e, n) {
  if (e.type !== Ee && e.type !== Qe && e.type !== he && Xr(
    `${Br(e)} ${t} ${Br(n)}`,
    `Operator '${t}' cannot be applied to ${_n(e.type)} type.`
  ), e.type === Ee)
    return t === "-" && Xr(
      `${Br(e)} - ${Br(n)}`,
      `Operator '${t}' cannot be applied to ${_n(e.type)} type.`
    ), {
      type: Ee,
      value: e.value + n.value
    };
  let i = t === "+" ? e.value + n.value : e.value - n.value;
  if (e.type === he)
    try {
      i = hi(r, i), ln(r, i);
    } catch (o) {
      Xr(
        `${Br(e)} ${t} ${Br(n)}`,
        o.message
      );
    }
  return {
    type: e.type,
    value: i
  };
}
function Mb(r, t, e, n) {
  e.type !== he && e.type !== Qe && Xr(
    `${Br(e)} ${t} ${Br(n)}`,
    `Operator '${t}' cannot be applied to ${_n(e.type)} type.`
  );
  let i;
  if (t === "*")
    i = e.value * n.value;
  else if (t === "/" || t === "%")
    Number(n.value) === 0 && Xr(
      `${Br(e)} ${t} ${Br(n)}`,
      "Division by zero is not supported."
    ), t === "/" ? i = e.value / n.value : i = e.value % n.value;
  else
    throw new Error(`Unsupported operation ${t}`);
  if (e.type === he)
    try {
      i = hi(r, i), ln(r, i);
    } catch (o) {
      Xr(
        `${Br(e)} ${t} ${Br(n)}`,
        o.message
      );
    }
  return {
    type: e.type,
    value: i
  };
}
function Pb(r, t) {
  const e = t.operator;
  let n = cn(r, t.left), i = cn(r, t.right);
  if ((n.type === "number" && i.type === "integer" || n.type === "integer" && i.type === "number") && (n.type === "integer" ? n = xs(n) : i.type === "integer" && (i = xs(i))), n.type !== i.type && Xr(
    `${Br(n)} ${t.operator} ${Br(i)}`,
    `Operator '${e}' cannot be applied to different types: ${_n(n.type)} and ${_n(i.type)}.`
  ), e === "==" || e === "!=")
    return Db(e, n, i);
  if (e === ">" || e === ">=" || e === "<" || e === "<=")
    return Ib(e, n, i);
  if (e === "+" || e === "-")
    return Tb(r, e, n, i);
  if (e === "/" || e === "*" || e === "%")
    return Mb(r, e, n, i);
  throw new Error(`Unsupported operation ${e}`);
}
function Wo(r) {
  return r.map(Br).join(", ");
}
function zb(r, t) {
  const e = t.callee.name;
  let n, i = t.arguments.map((c) => cn(r, c));
  const o = e + ":" + i.map((c) => c.type).join("#");
  let a;
  if (r.customFunctions && (a = Fs(r.customFunctions, e, i)), !a || !("func" in a))
    if (Cs.has(o))
      a = {
        func: Cs.get(o),
        conversions: 0
      };
    else {
      const c = Fs(Eo, e, i);
      ("func" in c || !a || a.type === "missing") && (a = c);
    }
  if (a && (("expected" in a || "type" in a && a.type === "missing") && fc(e, i, a), n = a.func, a.conversions && (i = oc(n, i))), !n)
    throw new Error("Function not found");
  try {
    return n.cb(r, ...i);
  } catch (c) {
    if (c && c instanceof Gs)
      throw c;
    const g = `${e}(${Wo(i)})`;
    Xr(g, c.message);
  }
}
function fc(r, t, e, n = !1) {
  const i = t.map((c) => _n(c.type)).join(", "), o = `${r}(${Wo(t)})`, a = n ? Pg : Xr;
  if (e.type === "few" && t.length === 0 && e.hasOverloads)
    a(o, "Function requires non empty argument list.");
  else if (e.type === "many" || e.type === "few" || e.type === "mismatch")
    if (e.hasOverloads)
      a(o, `Function has no matching overload for given argument types: ${i}.`);
    else if (e.type === "many" || e.type === "few")
      e.def.args.some((c) => typeof c == "object" && c.isVararg) ? a(o, `At least ${e.def.args.length} argument(s) expected.`) : a(o, `Exactly ${e.def.args.length} argument(s) expected.`);
    else {
      const c = e.def.args.map((g) => _n(typeof g == "string" ? g : g.type)).join(", ");
      a(o, `Invalid argument type: expected ${c}, got ${i}.`);
    }
  else
    a(o, `Unknown function name: ${r}.`);
}
function Ob(r, t) {
  const e = t.method.name;
  let n, i = [t.object, ...t.arguments].map((a) => cn(r, a));
  const o = e + ":" + i.map((a) => a.type).join("#");
  if (Vs.has(o))
    n = Vs.get(o);
  else {
    const a = Fs(Ao, e, i);
    if ("expected" in a || "type" in a && a.type === "missing") {
      const c = i.slice(1).map((d) => _n(d.type)).join(", "), g = `${e}(${Wo(i.slice(1))})`;
      a.type === "few" && i.length === 1 ? Xr(g, "Method requires non empty argument list.") : a.type === "many" ? Xr(g, `Method has no matching overload for given argument types: ${c}.`) : a.type === "few" || a.type === "mismatch" ? Xr(g, `Method has no matching overload for given argument types: ${c}.`) : Xr(g, `Unknown method name: ${e}.`);
    }
    n = a.func, a.conversions && (i = oc(n, i));
  }
  if (!n)
    throw new Error("Method not found");
  try {
    return n.cb(r, ...i);
  } catch (a) {
    if (a && a instanceof Gs)
      throw a;
    const c = `${e}(${Wo(i.slice(1))})`;
    Xr(c, a.message);
  }
}
function Nb(r, t) {
  var o;
  const e = t.id.name, n = (o = r.customFunctions) == null ? void 0 : o.get(e);
  if (n)
    return {
      type: "function",
      value: n
    };
  const i = r.variables.get(e);
  if (i)
    return Kg(i);
  throw new Error(`Variable '${e}' is missing.`);
}
const $l = {
  StringLiteral: jb,
  NumberLiteral: kb,
  IntegerLiteral: xb,
  BooleanLiteral: Eb,
  UnaryExpression: Ab,
  ConditionalExpression: Cb,
  TryExpression: Vb,
  TemplateLiteral: Fb,
  LogicalExpression: Sb,
  BinaryExpression: Pb,
  CallExpression: zb,
  MethodExpression: Ob,
  Variable: Nb
};
function cn(r, t) {
  if (t.type in $l)
    return $l[t.type](r, t);
  throw new Error("Unsupported expression");
}
function Ks(r, t, e, n, i) {
  try {
    const o = {
      variables: r,
      customFunctions: t,
      warnings: [],
      store: e,
      weekStartDay: (i == null ? void 0 : i.weekStartDay) || 0
    };
    return {
      result: cn(o, n),
      warnings: o.warnings,
      usedVars: o.storeUsedVars
    };
  } catch (o) {
    return {
      result: {
        type: "error",
        value: o.message
      },
      warnings: []
    };
  }
}
function Bb(r, t) {
  return t && t[3] && t[7] ? { type: "ConditionalExpression", test: r, consequent: t[3], alternate: t[7] } : r;
}
function Rb(r, t) {
  return t && t[3] ? { type: "TryExpression", test: r, alternate: t[3] } : r;
}
function $o(r, t) {
  return t.length ? t.reduce((e, n) => ({
    type: "BinaryExpression",
    operator: n[1],
    left: e,
    right: n[3]
  }), r) : r;
}
function jl(r, t) {
  return t.length ? t.reduce((e, n) => ({
    type: "LogicalExpression",
    operator: n[1],
    left: e,
    right: n[3]
  }), r) : r;
}
function Lb(r, t) {
  return t.length ? t.reduce((e, n) => {
    if (!n[5])
      throw new Error("Method expected after .");
    return {
      type: "MethodExpression",
      object: e,
      method: n[3],
      arguments: n[5][2]
    };
  }, r) : r;
}
function Hb(r) {
  return r === "true" || r === "false" ? { type: "BooleanLiteral", value: r === "true" } : { type: "Variable", id: { type: "Identifier", name: r } };
}
function kl(r) {
  if (r.every((e) => typeof e == "string"))
    return { type: "StringLiteral", value: r.join("") };
  let t = r.reduce((e, n) => (typeof n == "string" && typeof e[e.length - 1] == "string" ? e[e.length - 1] += n : e.push(n), e), []).reduce((e, n) => (typeof n == "string" ? e.quasis.push({ type: "StringLiteral", value: n }) : (e.quasis.length === e.expressions.length && e.quasis.push({ type: "StringLiteral", value: "" }), e.expressions.push(n)), e), {
    type: "TemplateLiteral",
    quasis: [],
    expressions: []
  });
  return t.quasis.length === t.expressions.length && t.quasis.push({ type: "StringLiteral", value: "" }), t;
}
function Wb(r) {
  try {
    return Rr(r);
  } catch {
    throw new Error(`Value ${r} can't be converted to Integer type.`);
  }
}
function xl(r) {
  if (r === "'" || r === "\\")
    return r;
  throw new Error("Incorrect string escape");
}
function Ub(r, t) {
  function e() {
    this.constructor = r;
  }
  e.prototype = t.prototype, r.prototype = new e();
}
function Pi(r, t, e, n) {
  var i = Error.call(this, r);
  return Object.setPrototypeOf && Object.setPrototypeOf(i, Pi.prototype), i.expected = t, i.found = e, i.location = n, i.name = "SyntaxError", i;
}
Ub(Pi, Error);
function hs(r, t, e) {
  return e = e || " ", r.length > t ? r : (t -= r.length, e += e.repeat(t), r + e.slice(0, t));
}
Pi.prototype.format = function(r) {
  var t = "Error: " + this.message;
  if (this.location) {
    var e = null, n;
    for (n = 0; n < r.length; n++)
      if (r[n].source === this.location.source) {
        e = r[n].text.split(/\r\n|\n|\r/g);
        break;
      }
    var i = this.location.start, o = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(i) : i, a = this.location.source + ":" + o.line + ":" + o.column;
    if (e) {
      var c = this.location.end, g = hs("", o.line.toString().length, " "), d = e[i.line - 1], _ = i.line === c.line ? c.column : d.length + 1, k = _ - i.column || 1;
      t += `
 --> ` + a + `
` + g + ` |
` + o.line + " | " + d + `
` + g + " | " + hs("", i.column - 1, " ") + hs("", k, "^");
    } else
      t += `
 at ` + a;
  }
  return t;
};
Pi.buildMessage = function(r, t) {
  var e = {
    literal: function(d) {
      return '"' + i(d.text) + '"';
    },
    class: function(d) {
      var _ = d.parts.map(function(k) {
        return Array.isArray(k) ? o(k[0]) + "-" + o(k[1]) : o(k);
      });
      return "[" + (d.inverted ? "^" : "") + _.join("") + "]";
    },
    any: function() {
      return "any character";
    },
    end: function() {
      return "end of input";
    },
    other: function(d) {
      return d.description;
    }
  };
  function n(d) {
    return d.charCodeAt(0).toString(16).toUpperCase();
  }
  function i(d) {
    return d.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(_) {
      return "\\x0" + n(_);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(_) {
      return "\\x" + n(_);
    });
  }
  function o(d) {
    return d.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(_) {
      return "\\x0" + n(_);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(_) {
      return "\\x" + n(_);
    });
  }
  function a(d) {
    return e[d.type](d);
  }
  function c(d) {
    var _ = d.map(a), k, I;
    if (_.sort(), _.length > 0) {
      for (k = 1, I = 1; k < _.length; k++)
        _[k - 1] !== _[k] && (_[I] = _[k], I++);
      _.length = I;
    }
    switch (_.length) {
      case 1:
        return _[0];
      case 2:
        return _[0] + " or " + _[1];
      default:
        return _.slice(0, -1).join(", ") + ", or " + _[_.length - 1];
    }
  }
  function g(d) {
    return d ? '"' + i(d) + '"' : "end of input";
  }
  return "Expected " + c(r) + " but " + g(t) + " found.";
};
function gc(r, t) {
  t = t !== void 0 ? t : {};
  var e = {}, n = t.grammarSource, i = { start: Ur, JsonStringContents: Or }, o = Ur, a = "@{", c = "}", g = "@{}", d = "\\", _ = "?", k = ":", I = "!:", T = "||", D = "&&", B = "==", V = "!=", A = ">=", $e = ">", Y = "<=", ue = "<", Z = "+", ae = "-", ke = "/", le = "*", Q = "%", _e = "!", de = ".", te = "(", me = ")", Ve = ",", Fe = "'", L = "e", We = "E", Ne = /^[^}]/, Se = /^[^'}]/, je = /^[0-9]/, S = /^[a-zA-Z_]/, fe = /^[a-zA-Z_0-9]/, H = /^[ \t\r\n]/, re = Bt("@{", !1), ye = Bt("}", !1), Ke = Bt("@{}", !1), Ge = Bt("\\", !1), Me = lr(), Pe = zr(["}"], !0, !1), R = Bt("?", !1), Te = Bt(":", !1), oe = Bt("!:", !1), ot = Bt("||", !1), et = Bt("&&", !1), K = Bt("==", !1), Ce = Bt("!=", !1), ze = Bt(">=", !1), ce = Bt(">", !1), lt = Bt("<=", !1), pe = Bt("<", !1), be = Bt("+", !1), Ze = Bt("-", !1), Je = Bt("/", !1), De = Bt("*", !1), At = Bt("%", !1), Xe = Bt("!", !1), q = Bt(".", !1), Ye = Bt("(", !1), dt = Bt(")", !1), Le = Bt(",", !1), tt = wr("string"), Be = Bt("'", !1), yt = zr(["'", "}"], !0, !1), Ut = wr("integer"), jt = zr([["0", "9"]], !1, !1), kt = wr("number"), ge = Bt("e", !1), we = Bt("E", !1), Vt = zr([["a", "z"], ["A", "Z"], "_"], !1, !1), Pt = zr([["a", "z"], ["A", "Z"], "_", ["0", "9"]], !1, !1), St = wr("whitespace"), qe = zr([" ", "	", "\r", `
`], !1, !1), Yt = function(l) {
    return l;
  }, W = function(l) {
    return kl(l);
  }, Re = function(l) {
    return l;
  }, bt = function() {
    return "";
  }, Ie = function() {
    return yr();
  }, rt = function() {
    throw new Error("Error tokenizing '" + r + "'.");
  }, Tt = function() {
    throw new Error("Error tokenizing '" + r + "'.");
  }, xt = function(l) {
    return l;
  }, He = function(l) {
    return xl(l);
  }, nt = function() {
    throw new Error("Error tokenizing '" + r + "'.");
  }, Dt = function(l, u) {
    return Bb(l, u);
  }, ft = function(l, u) {
    return Rb(l, u);
  }, Zt = function(l, u) {
    return jl(l, u);
  }, er = function(l, u) {
    return jl(l, u);
  }, zt = function(l, u) {
    return $o(l, u);
  }, tr = function(l, u) {
    return $o(l, u);
  }, Mt = function(l, u) {
    return $o(l, u);
  }, Xt = function(l, u) {
    return $o(l, u);
  }, It = function(l) {
    return l;
  }, ct = function(l) {
    return l;
  }, pt = function(l, u) {
    return { type: "UnaryExpression", operator: l, argument: u };
  }, nr = function() {
    throw new Error("Incorrect unary operator");
  }, O = function(l, u) {
    return Lb(l, u);
  }, rr = function(l, u) {
    return { type: "CallExpression", callee: l, arguments: u };
  }, Jt = function(l, u) {
    return [l, ...u];
  }, xe = function(l) {
    return l;
  }, ir = function(l) {
    return l;
  }, Kt = function(l) {
    return kl(l);
  }, ne = function(l) {
    return l;
  }, ve = function() {
    return "";
  }, Et = function() {
    return yr();
  }, $ = function() {
    throw new Error("Error tokenizing '" + r + "'.");
  }, y = function() {
    throw new Error("Error tokenizing '" + r + "'.");
  }, U = function(l) {
    return l;
  }, v = function(l) {
    return xl(l);
  }, N = function() {
    throw new Error("Error tokenizing '" + r + "'.");
  }, Ae = function() {
    return { type: "IntegerLiteral", value: Wb(yr()) };
  }, _t = function() {
    return { type: "NumberLiteral", value: parseFloat(yr()) };
  }, wt = function() {
    return { type: "NumberLiteral", value: parseFloat(yr()) };
  }, Ct = function() {
    const l = yr();
    if (/\.\./.test(l) || /\.$/.test(l))
      throw new Error("Unexpected token: .");
    return Hb(l);
  }, _r = function() {
    return { type: "Identifier", name: yr() };
  }, s = 0, ht = 0, Dr = [{ line: 1, column: 1 }], ut = 0, ie = [], P = 0, ar;
  if ("startRule" in t) {
    if (!(t.startRule in i))
      throw new Error(`Can't start parsing from rule "` + t.startRule + '".');
    o = i[t.startRule];
  }
  function yr() {
    return r.substring(ht, s);
  }
  function Bt(l, u) {
    return { type: "literal", text: l, ignoreCase: u };
  }
  function zr(l, u, F) {
    return { type: "class", parts: l, inverted: u, ignoreCase: F };
  }
  function lr() {
    return { type: "any" };
  }
  function st() {
    return { type: "end" };
  }
  function wr(l) {
    return { type: "other", description: l };
  }
  function Hr(l) {
    var u = Dr[l], F;
    if (u)
      return u;
    for (F = l - 1; !Dr[F]; )
      F--;
    for (u = Dr[F], u = {
      line: u.line,
      column: u.column
    }; F < l; )
      r.charCodeAt(F) === 10 ? (u.line++, u.column = 1) : u.column++, F++;
    return Dr[l] = u, u;
  }
  function cr(l, u, F) {
    var j = Hr(l), X = Hr(u), J = {
      source: n,
      start: {
        offset: l,
        line: j.line,
        column: j.column
      },
      end: {
        offset: u,
        line: X.line,
        column: X.column
      }
    };
    return J;
  }
  function G(l) {
    s < ut || (s > ut && (ut = s, ie = []), ie.push(l));
  }
  function rn(l, u, F) {
    return new Pi(
      Pi.buildMessage(l, u),
      l,
      u,
      F
    );
  }
  function Ur() {
    var l, u;
    return l = s, vt(), u = jr(), u !== e ? (vt(), ht = l, l = Yt(u)) : (s = l, l = e), l;
  }
  function Or() {
    var l, u, F;
    for (l = s, u = [], F = qr(); F !== e; )
      u.push(F), F = qr();
    return ht = l, u = W(u), l = u, l;
  }
  function qr() {
    var l, u, F, j, X;
    if (l = s, r.substr(s, 2) === a ? (u = a, s += 2) : (u = e, P === 0 && G(re)), u !== e ? (F = vt(), j = jr(), j !== e ? (vt(), r.charCodeAt(s) === 125 ? (X = c, s++) : (X = e, P === 0 && G(ye)), X !== e ? (ht = l, l = Re(j)) : (s = l, l = e)) : (s = l, l = e)) : (s = l, l = e), l === e && (l = s, r.substr(s, 3) === g ? (u = g, s += 3) : (u = e, P === 0 && G(Ke)), u !== e && (ht = l, u = bt()), l = u, l === e && (l = s, u = s, P++, r.charCodeAt(s) === 92 ? (F = d, s++) : (F = e, P === 0 && G(Ge)), F === e && (r.substr(s, 2) === a ? (F = a, s += 2) : (F = e, P === 0 && G(re))), P--, F === e ? u = void 0 : (s = u, u = e), u !== e ? (r.length > s ? (F = r.charAt(s), s++) : (F = e, P === 0 && G(Me)), F !== e ? (ht = l, l = Ie()) : (s = l, l = e)) : (s = l, l = e), l === e))) {
      if (l = s, r.substr(s, 2) === a ? (u = a, s += 2) : (u = e, P === 0 && G(re)), u !== e) {
        if (F = [], Ne.test(r.charAt(s)) ? (j = r.charAt(s), s++) : (j = e, P === 0 && G(Pe)), j !== e)
          for (; j !== e; )
            F.push(j), Ne.test(r.charAt(s)) ? (j = r.charAt(s), s++) : (j = e, P === 0 && G(Pe));
        else
          F = e;
        F !== e ? (r.charCodeAt(s) === 125 ? (j = c, s++) : (j = e, P === 0 && G(ye)), j !== e ? (ht = l, l = rt()) : (s = l, l = e)) : (s = l, l = e);
      } else
        s = l, l = e;
      l === e && (l = s, r.substr(s, 2) === a ? (u = a, s += 2) : (u = e, P === 0 && G(re)), u !== e && (ht = l, u = Tt()), l = u, l === e && (l = s, r.charCodeAt(s) === 92 ? (u = d, s++) : (u = e, P === 0 && G(Ge)), u !== e ? (r.substr(s, 2) === a ? (F = a, s += 2) : (F = e, P === 0 && G(re)), F !== e ? (ht = l, l = xt(F)) : (s = l, l = e)) : (s = l, l = e), l === e && (l = s, r.charCodeAt(s) === 92 ? (u = d, s++) : (u = e, P === 0 && G(Ge)), u !== e ? (r.length > s ? (F = r.charAt(s), s++) : (F = e, P === 0 && G(Me)), F !== e ? (ht = l, l = He(F)) : (s = l, l = e)) : (s = l, l = e), l === e && (l = s, r.charCodeAt(s) === 92 ? (u = d, s++) : (u = e, P === 0 && G(Ge)), u !== e && (ht = l, u = nt()), l = u))));
    }
    return l;
  }
  function jr() {
    var l, u, F, j, X, J, at, mt, pr, or, kr;
    return l = s, u = Qr(), u !== e ? (F = s, j = vt(), r.charCodeAt(s) === 63 ? (X = _, s++) : (X = e, P === 0 && G(R)), X !== e ? (J = vt(), at = jr(), at !== e ? (mt = vt(), r.charCodeAt(s) === 58 ? (pr = k, s++) : (pr = e, P === 0 && G(Te)), pr !== e ? (or = vt(), kr = jr(), kr !== e ? (j = [j, X, J, at, mt, pr, or, kr], F = j) : (s = F, F = e)) : (s = F, F = e)) : (s = F, F = e)) : (s = F, F = e), F === e && (F = null), ht = l, l = Dt(u, F)) : (s = l, l = e), l;
  }
  function Qr() {
    var l, u, F, j, X, J, at;
    return l = s, u = f(), u !== e ? (F = s, j = vt(), r.substr(s, 2) === I ? (X = I, s += 2) : (X = e, P === 0 && G(oe)), X !== e ? (J = vt(), at = jr(), at !== e ? (j = [j, X, J, at], F = j) : (s = F, F = e)) : (s = F, F = e), F === e && (F = null), ht = l, l = ft(u, F)) : (s = l, l = e), l;
  }
  function f() {
    var l, u, F, j, X, J, at, mt;
    if (l = s, u = b(), u !== e) {
      for (F = [], j = s, X = vt(), r.substr(s, 2) === T ? (J = T, s += 2) : (J = e, P === 0 && G(ot)), J !== e ? (at = vt(), mt = b(), mt !== e ? (X = [X, J, at, mt], j = X) : (s = j, j = e)) : (s = j, j = e); j !== e; )
        F.push(j), j = s, X = vt(), r.substr(s, 2) === T ? (J = T, s += 2) : (J = e, P === 0 && G(ot)), J !== e ? (at = vt(), mt = b(), mt !== e ? (X = [X, J, at, mt], j = X) : (s = j, j = e)) : (s = j, j = e);
      ht = l, l = Zt(u, F);
    } else
      s = l, l = e;
    return l;
  }
  function b() {
    var l, u, F, j, X, J, at, mt;
    if (l = s, u = w(), u !== e) {
      for (F = [], j = s, X = vt(), r.substr(s, 2) === D ? (J = D, s += 2) : (J = e, P === 0 && G(et)), J !== e ? (at = vt(), mt = w(), mt !== e ? (X = [X, J, at, mt], j = X) : (s = j, j = e)) : (s = j, j = e); j !== e; )
        F.push(j), j = s, X = vt(), r.substr(s, 2) === D ? (J = D, s += 2) : (J = e, P === 0 && G(et)), J !== e ? (at = vt(), mt = w(), mt !== e ? (X = [X, J, at, mt], j = X) : (s = j, j = e)) : (s = j, j = e);
      ht = l, l = er(u, F);
    } else
      s = l, l = e;
    return l;
  }
  function w() {
    var l, u, F, j, X, J, at, mt;
    if (l = s, u = z(), u !== e) {
      for (F = [], j = s, X = vt(), r.substr(s, 2) === B ? (J = B, s += 2) : (J = e, P === 0 && G(K)), J === e && (r.substr(s, 2) === V ? (J = V, s += 2) : (J = e, P === 0 && G(Ce))), J !== e ? (at = vt(), mt = z(), mt !== e ? (X = [X, J, at, mt], j = X) : (s = j, j = e)) : (s = j, j = e); j !== e; )
        F.push(j), j = s, X = vt(), r.substr(s, 2) === B ? (J = B, s += 2) : (J = e, P === 0 && G(K)), J === e && (r.substr(s, 2) === V ? (J = V, s += 2) : (J = e, P === 0 && G(Ce))), J !== e ? (at = vt(), mt = z(), mt !== e ? (X = [X, J, at, mt], j = X) : (s = j, j = e)) : (s = j, j = e);
      ht = l, l = zt(u, F);
    } else
      s = l, l = e;
    return l;
  }
  function z() {
    var l, u, F, j, X, J, at, mt;
    if (l = s, u = E(), u !== e) {
      for (F = [], j = s, X = vt(), r.substr(s, 2) === A ? (J = A, s += 2) : (J = e, P === 0 && G(ze)), J === e && (r.charCodeAt(s) === 62 ? (J = $e, s++) : (J = e, P === 0 && G(ce)), J === e && (r.substr(s, 2) === Y ? (J = Y, s += 2) : (J = e, P === 0 && G(lt)), J === e && (r.charCodeAt(s) === 60 ? (J = ue, s++) : (J = e, P === 0 && G(pe))))), J !== e ? (at = vt(), mt = E(), mt !== e ? (X = [X, J, at, mt], j = X) : (s = j, j = e)) : (s = j, j = e); j !== e; )
        F.push(j), j = s, X = vt(), r.substr(s, 2) === A ? (J = A, s += 2) : (J = e, P === 0 && G(ze)), J === e && (r.charCodeAt(s) === 62 ? (J = $e, s++) : (J = e, P === 0 && G(ce)), J === e && (r.substr(s, 2) === Y ? (J = Y, s += 2) : (J = e, P === 0 && G(lt)), J === e && (r.charCodeAt(s) === 60 ? (J = ue, s++) : (J = e, P === 0 && G(pe))))), J !== e ? (at = vt(), mt = E(), mt !== e ? (X = [X, J, at, mt], j = X) : (s = j, j = e)) : (s = j, j = e);
      ht = l, l = tr(u, F);
    } else
      s = l, l = e;
    return l;
  }
  function E() {
    var l, u, F, j, X, J, at, mt;
    if (l = s, u = Ue(), u !== e) {
      for (F = [], j = s, X = vt(), r.charCodeAt(s) === 43 ? (J = Z, s++) : (J = e, P === 0 && G(be)), J === e && (r.charCodeAt(s) === 45 ? (J = ae, s++) : (J = e, P === 0 && G(Ze))), J !== e ? (at = vt(), mt = Ue(), mt !== e ? (X = [X, J, at, mt], j = X) : (s = j, j = e)) : (s = j, j = e); j !== e; )
        F.push(j), j = s, X = vt(), r.charCodeAt(s) === 43 ? (J = Z, s++) : (J = e, P === 0 && G(be)), J === e && (r.charCodeAt(s) === 45 ? (J = ae, s++) : (J = e, P === 0 && G(Ze))), J !== e ? (at = vt(), mt = Ue(), mt !== e ? (X = [X, J, at, mt], j = X) : (s = j, j = e)) : (s = j, j = e);
      ht = l, l = Mt(u, F);
    } else
      s = l, l = e;
    return l;
  }
  function Ue() {
    var l, u, F, j, X, J, at, mt;
    if (l = s, u = se(), u !== e) {
      for (F = [], j = s, X = vt(), r.charCodeAt(s) === 47 ? (J = ke, s++) : (J = e, P === 0 && G(Je)), J === e && (r.charCodeAt(s) === 42 ? (J = le, s++) : (J = e, P === 0 && G(De)), J === e && (r.charCodeAt(s) === 37 ? (J = Q, s++) : (J = e, P === 0 && G(At)))), J !== e ? (at = vt(), mt = se(), mt !== e ? (X = [X, J, at, mt], j = X) : (s = j, j = e)) : (s = j, j = e); j !== e; )
        F.push(j), j = s, X = vt(), r.charCodeAt(s) === 47 ? (J = ke, s++) : (J = e, P === 0 && G(Je)), J === e && (r.charCodeAt(s) === 42 ? (J = le, s++) : (J = e, P === 0 && G(De)), J === e && (r.charCodeAt(s) === 37 ? (J = Q, s++) : (J = e, P === 0 && G(At)))), J !== e ? (at = vt(), mt = se(), mt !== e ? (X = [X, J, at, mt], j = X) : (s = j, j = e)) : (s = j, j = e);
      ht = l, l = Xt(u, F);
    } else
      s = l, l = e;
    return l;
  }
  function se() {
    var l, u, F, j;
    return l = s, u = s, P++, r.charCodeAt(s) === 45 ? (F = ae, s++) : (F = e, P === 0 && G(Ze)), P--, F !== e ? (s = u, u = void 0) : u = e, u !== e ? (F = nn(), F !== e ? (ht = l, l = It(F)) : (s = l, l = e)) : (s = l, l = e), l === e && (l = s, u = s, P++, r.charCodeAt(s) === 45 ? (F = ae, s++) : (F = e, P === 0 && G(Ze)), P--, F !== e ? (s = u, u = void 0) : u = e, u !== e ? (F = Tr(), F !== e ? (ht = l, l = ct(F)) : (s = l, l = e)) : (s = l, l = e), l === e && (l = s, r.charCodeAt(s) === 33 ? (u = _e, s++) : (u = e, P === 0 && G(Xe)), u === e && (r.charCodeAt(s) === 43 ? (u = Z, s++) : (u = e, P === 0 && G(be)), u === e && (r.charCodeAt(s) === 45 ? (u = ae, s++) : (u = e, P === 0 && G(Ze)))), u !== e ? (F = vt(), j = Nt(), j === e && (j = $t()), j !== e ? (ht = l, l = pt(u, j)) : (s = l, l = e)) : (s = l, l = e), l === e && (l = $t()))), l;
  }
  function Nt() {
    var l, u;
    return l = s, r.charCodeAt(s) === 43 ? (u = Z, s++) : (u = e, P === 0 && G(be)), u === e && (r.charCodeAt(s) === 45 ? (u = ae, s++) : (u = e, P === 0 && G(Ze))), u !== e && (ht = l, u = nr()), l = u, l;
  }
  function $t() {
    var l, u, F, j, X, J, at, mt, pr, or, kr, On, Sn, si, Cn;
    if (l = s, u = Oe(), u !== e) {
      for (F = [], j = s, X = vt(), r.charCodeAt(s) === 46 ? (J = de, s++) : (J = e, P === 0 && G(q)), J !== e ? (at = vt(), mt = on(), mt !== e ? (pr = vt(), or = s, r.charCodeAt(s) === 40 ? (kr = te, s++) : (kr = e, P === 0 && G(Ye)), kr !== e ? (On = vt(), Sn = Ft(), Sn !== e ? (si = vt(), r.charCodeAt(s) === 41 ? (Cn = me, s++) : (Cn = e, P === 0 && G(dt)), Cn !== e ? (kr = [kr, On, Sn, si, Cn], or = kr) : (s = or, or = e)) : (s = or, or = e)) : (s = or, or = e), or === e && (or = null), X = [X, J, at, mt, pr, or], j = X) : (s = j, j = e)) : (s = j, j = e); j !== e; )
        F.push(j), j = s, X = vt(), r.charCodeAt(s) === 46 ? (J = de, s++) : (J = e, P === 0 && G(q)), J !== e ? (at = vt(), mt = on(), mt !== e ? (pr = vt(), or = s, r.charCodeAt(s) === 40 ? (kr = te, s++) : (kr = e, P === 0 && G(Ye)), kr !== e ? (On = vt(), Sn = Ft(), Sn !== e ? (si = vt(), r.charCodeAt(s) === 41 ? (Cn = me, s++) : (Cn = e, P === 0 && G(dt)), Cn !== e ? (kr = [kr, On, Sn, si, Cn], or = kr) : (s = or, or = e)) : (s = or, or = e)) : (s = or, or = e), or === e && (or = null), X = [X, J, at, mt, pr, or], j = X) : (s = j, j = e)) : (s = j, j = e);
      ht = l, l = O(u, F);
    } else
      s = l, l = e;
    return l;
  }
  function Oe() {
    var l, u, F, j, X;
    return l = s, u = on(), u !== e ? (vt(), r.charCodeAt(s) === 40 ? (F = te, s++) : (F = e, P === 0 && G(Ye)), F !== e ? (vt(), j = Ft(), j !== e ? (vt(), r.charCodeAt(s) === 41 ? (X = me, s++) : (X = e, P === 0 && G(dt)), X !== e ? (ht = l, l = rr(u, j)) : (s = l, l = e)) : (s = l, l = e)) : (s = l, l = e)) : (s = l, l = e), l === e && (l = it()), l;
  }
  function Ft() {
    var l, u, F, j, X, J;
    if (l = s, u = jr(), u !== e) {
      for (F = [], j = s, vt(), r.charCodeAt(s) === 44 ? (X = Ve, s++) : (X = e, P === 0 && G(Le)), X !== e ? (vt(), J = jr(), J !== e ? j = J : (s = j, j = e)) : (s = j, j = e); j !== e; )
        F.push(j), j = s, vt(), r.charCodeAt(s) === 44 ? (X = Ve, s++) : (X = e, P === 0 && G(Le)), X !== e ? (vt(), J = jr(), J !== e ? j = J : (s = j, j = e)) : (s = j, j = e);
      ht = l, l = Jt(u, F);
    } else
      s = l, l = e;
    return l === e && (l = vt()), l;
  }
  function it() {
    var l, u, F, j;
    return l = Gr(), l === e && (l = Qt(), l === e && (l = nn(), l === e && (l = Tr(), l === e && (l = s, r.charCodeAt(s) === 40 ? (u = te, s++) : (u = e, P === 0 && G(Ye)), u !== e ? (vt(), F = jr(), F !== e ? (vt(), r.charCodeAt(s) === 41 ? (j = me, s++) : (j = e, P === 0 && G(dt)), j !== e ? (ht = l, l = xe(F)) : (s = l, l = e)) : (s = l, l = e)) : (s = l, l = e))))), l;
  }
  function Qt() {
    var l, u, F, j;
    return P++, l = s, r.charCodeAt(s) === 39 ? (u = Fe, s++) : (u = e, P === 0 && G(Be)), u !== e ? (F = ur(), r.charCodeAt(s) === 39 ? (j = Fe, s++) : (j = e, P === 0 && G(Be)), j !== e ? (ht = l, l = ir(F)) : (s = l, l = e)) : (s = l, l = e), P--, l === e && (u = e, P === 0 && G(tt)), l;
  }
  function ur() {
    var l, u, F;
    for (l = s, u = [], F = Ir(); F !== e; )
      u.push(F), F = Ir();
    return ht = l, u = Kt(u), l = u, l;
  }
  function Ir() {
    var l, u, F, j, X;
    if (l = s, r.substr(s, 2) === a ? (u = a, s += 2) : (u = e, P === 0 && G(re)), u !== e ? (F = vt(), j = jr(), j !== e ? (vt(), r.charCodeAt(s) === 125 ? (X = c, s++) : (X = e, P === 0 && G(ye)), X !== e ? (ht = l, l = ne(j)) : (s = l, l = e)) : (s = l, l = e)) : (s = l, l = e), l === e && (l = s, r.substr(s, 3) === g ? (u = g, s += 3) : (u = e, P === 0 && G(Ke)), u !== e && (ht = l, u = ve()), l = u, l === e && (l = s, u = s, P++, r.charCodeAt(s) === 92 ? (F = d, s++) : (F = e, P === 0 && G(Ge)), F === e && (r.charCodeAt(s) === 39 ? (F = Fe, s++) : (F = e, P === 0 && G(Be)), F === e && (r.substr(s, 2) === a ? (F = a, s += 2) : (F = e, P === 0 && G(re)))), P--, F === e ? u = void 0 : (s = u, u = e), u !== e ? (r.length > s ? (F = r.charAt(s), s++) : (F = e, P === 0 && G(Me)), F !== e ? (ht = l, l = Et()) : (s = l, l = e)) : (s = l, l = e), l === e))) {
      if (l = s, r.substr(s, 2) === a ? (u = a, s += 2) : (u = e, P === 0 && G(re)), u !== e) {
        if (F = [], Se.test(r.charAt(s)) ? (j = r.charAt(s), s++) : (j = e, P === 0 && G(yt)), j !== e)
          for (; j !== e; )
            F.push(j), Se.test(r.charAt(s)) ? (j = r.charAt(s), s++) : (j = e, P === 0 && G(yt));
        else
          F = e;
        F !== e ? (r.charCodeAt(s) === 125 ? (j = c, s++) : (j = e, P === 0 && G(ye)), j !== e ? (ht = l, l = $()) : (s = l, l = e)) : (s = l, l = e);
      } else
        s = l, l = e;
      l === e && (l = s, r.substr(s, 2) === a ? (u = a, s += 2) : (u = e, P === 0 && G(re)), u !== e && (ht = l, u = y()), l = u, l === e && (l = s, r.charCodeAt(s) === 92 ? (u = d, s++) : (u = e, P === 0 && G(Ge)), u !== e ? (r.substr(s, 2) === a ? (F = a, s += 2) : (F = e, P === 0 && G(re)), F !== e ? (ht = l, l = U(F)) : (s = l, l = e)) : (s = l, l = e), l === e && (l = s, r.charCodeAt(s) === 92 ? (u = d, s++) : (u = e, P === 0 && G(Ge)), u !== e ? (r.length > s ? (F = r.charAt(s), s++) : (F = e, P === 0 && G(Me)), F !== e ? (ht = l, l = v(F)) : (s = l, l = e)) : (s = l, l = e), l === e && (l = s, r.charCodeAt(s) === 92 ? (u = d, s++) : (u = e, P === 0 && G(Ge)), u !== e && (ht = l, u = N()), l = u))));
    }
    return l;
  }
  function Tr() {
    var l, u, F;
    if (P++, l = s, r.charCodeAt(s) === 45 ? s++ : P === 0 && G(Ze), u = [], je.test(r.charAt(s)) ? (F = r.charAt(s), s++) : (F = e, P === 0 && G(jt)), F !== e)
      for (; F !== e; )
        u.push(F), je.test(r.charAt(s)) ? (F = r.charAt(s), s++) : (F = e, P === 0 && G(jt));
    else
      u = e;
    return u !== e ? (ht = l, l = Ae()) : (s = l, l = e), P--, l === e && P === 0 && G(Ut), l;
  }
  function nn() {
    var l, u, F, j, X, J, at, mt, pr;
    for (P++, l = s, r.charCodeAt(s) === 45 ? s++ : P === 0 && G(Ze), u = [], je.test(r.charAt(s)) ? (F = r.charAt(s), s++) : (F = e, P === 0 && G(jt)); F !== e; )
      u.push(F), je.test(r.charAt(s)) ? (F = r.charAt(s), s++) : (F = e, P === 0 && G(jt));
    if (r.charCodeAt(s) === 46 ? (F = de, s++) : (F = e, P === 0 && G(q)), F !== e) {
      if (j = [], je.test(r.charAt(s)) ? (X = r.charAt(s), s++) : (X = e, P === 0 && G(jt)), X !== e)
        for (; X !== e; )
          j.push(X), je.test(r.charAt(s)) ? (X = r.charAt(s), s++) : (X = e, P === 0 && G(jt));
      else
        j = e;
      if (j !== e) {
        if (X = s, r.charCodeAt(s) === 101 ? (J = L, s++) : (J = e, P === 0 && G(ge)), J === e && (r.charCodeAt(s) === 69 ? (J = We, s++) : (J = e, P === 0 && G(we))), J !== e) {
          if (r.charCodeAt(s) === 43 ? (at = Z, s++) : (at = e, P === 0 && G(be)), at === e && (r.charCodeAt(s) === 45 ? (at = ae, s++) : (at = e, P === 0 && G(Ze))), at === e && (at = null), mt = [], je.test(r.charAt(s)) ? (pr = r.charAt(s), s++) : (pr = e, P === 0 && G(jt)), pr !== e)
            for (; pr !== e; )
              mt.push(pr), je.test(r.charAt(s)) ? (pr = r.charAt(s), s++) : (pr = e, P === 0 && G(jt));
          else
            mt = e;
          mt !== e ? (J = [J, at, mt], X = J) : (s = X, X = e);
        } else
          s = X, X = e;
        X === e && (X = null), ht = l, l = _t();
      } else
        s = l, l = e;
    } else
      s = l, l = e;
    if (l === e) {
      if (l = s, r.charCodeAt(s) === 45 ? s++ : P === 0 && G(Ze), u = [], je.test(r.charAt(s)) ? (F = r.charAt(s), s++) : (F = e, P === 0 && G(jt)), F !== e)
        for (; F !== e; )
          u.push(F), je.test(r.charAt(s)) ? (F = r.charAt(s), s++) : (F = e, P === 0 && G(jt));
      else
        u = e;
      if (u !== e)
        if (r.charCodeAt(s) === 101 ? (F = L, s++) : (F = e, P === 0 && G(ge)), F === e && (r.charCodeAt(s) === 69 ? (F = We, s++) : (F = e, P === 0 && G(we))), F !== e) {
          if (r.charCodeAt(s) === 43 ? (j = Z, s++) : (j = e, P === 0 && G(be)), j === e && (r.charCodeAt(s) === 45 ? (j = ae, s++) : (j = e, P === 0 && G(Ze))), j === e && (j = null), X = [], je.test(r.charAt(s)) ? (J = r.charAt(s), s++) : (J = e, P === 0 && G(jt)), J !== e)
            for (; J !== e; )
              X.push(J), je.test(r.charAt(s)) ? (J = r.charAt(s), s++) : (J = e, P === 0 && G(jt));
          else
            X = e;
          X !== e ? (ht = l, l = wt()) : (s = l, l = e);
        } else
          s = l, l = e;
      else
        s = l, l = e;
    }
    return P--, l === e && P === 0 && G(kt), l;
  }
  function Gr() {
    var l, u, F, j, X, J, at, mt, pr, or, kr;
    if (l = s, S.test(r.charAt(s)) ? (u = r.charAt(s), s++) : (u = e, P === 0 && G(Vt)), u !== e) {
      if (F = [], j = [], fe.test(r.charAt(s)) ? (X = r.charAt(s), s++) : (X = e, P === 0 && G(Pt)), X !== e)
        for (; X !== e; )
          j.push(X), fe.test(r.charAt(s)) ? (X = r.charAt(s), s++) : (X = e, P === 0 && G(Pt));
      else
        j = e;
      for (j === e && (j = s, r.charCodeAt(s) === 46 ? (X = de, s++) : (X = e, P === 0 && G(q)), X !== e ? (J = s, P++, at = s, mt = vt(), pr = on(), pr !== e ? (or = vt(), r.charCodeAt(s) === 40 ? (kr = te, s++) : (kr = e, P === 0 && G(Ye)), kr !== e ? (mt = [mt, pr, or, kr], at = mt) : (s = at, at = e)) : (s = at, at = e), P--, at === e ? J = void 0 : (s = J, J = e), J !== e ? (X = [X, J], j = X) : (s = j, j = e)) : (s = j, j = e)); j !== e; ) {
        if (F.push(j), j = [], fe.test(r.charAt(s)) ? (X = r.charAt(s), s++) : (X = e, P === 0 && G(Pt)), X !== e)
          for (; X !== e; )
            j.push(X), fe.test(r.charAt(s)) ? (X = r.charAt(s), s++) : (X = e, P === 0 && G(Pt));
        else
          j = e;
        j === e && (j = s, r.charCodeAt(s) === 46 ? (X = de, s++) : (X = e, P === 0 && G(q)), X !== e ? (J = s, P++, at = s, mt = vt(), pr = on(), pr !== e ? (or = vt(), r.charCodeAt(s) === 40 ? (kr = te, s++) : (kr = e, P === 0 && G(Ye)), kr !== e ? (mt = [mt, pr, or, kr], at = mt) : (s = at, at = e)) : (s = at, at = e), P--, at === e ? J = void 0 : (s = J, J = e), J !== e ? (X = [X, J], j = X) : (s = j, j = e)) : (s = j, j = e));
      }
      ht = l, l = Ct();
    } else
      s = l, l = e;
    return l;
  }
  function on() {
    var l, u, F, j;
    if (l = s, S.test(r.charAt(s)) ? (u = r.charAt(s), s++) : (u = e, P === 0 && G(Vt)), u !== e) {
      for (F = [], fe.test(r.charAt(s)) ? (j = r.charAt(s), s++) : (j = e, P === 0 && G(Pt)); j !== e; )
        F.push(j), fe.test(r.charAt(s)) ? (j = r.charAt(s), s++) : (j = e, P === 0 && G(Pt));
      ht = l, l = _r();
    } else
      s = l, l = e;
    return l;
  }
  function vt() {
    var l, u;
    for (P++, l = [], H.test(r.charAt(s)) ? (u = r.charAt(s), s++) : (u = e, P === 0 && G(qe)); u !== e; )
      l.push(u), H.test(r.charAt(s)) ? (u = r.charAt(s), s++) : (u = e, P === 0 && G(qe));
    return P--, u = e, P === 0 && G(St), l;
  }
  if (ar = o(), ar !== e && s === r.length)
    return ar;
  throw ar !== e && s < r.length && G(st()), rn(
    ie,
    ut < r.length ? r.charAt(ut) : null,
    ut < r.length ? cr(ut, ut + 1) : cr(ut, ut)
  );
}
const Gb = 128, Si = /* @__PURE__ */ new Map();
let El;
function pc(r) {
  return Si.get(r);
}
function _c(r, t) {
  r !== El && (Si.delete(r), Si.size >= Gb && Si.delete(Si.keys().next().value), Si.set(r, t), El = r);
}
const Al = /* @__PURE__ */ new Set([
  "string",
  "integer",
  "number",
  "boolean",
  "datetime",
  "color",
  "url",
  "dict",
  "array"
]);
function Jb(r) {
  if (!(typeof r.name == "string" && r.name))
    throw new Error("Incorrect function name");
  if (!(typeof r.body == "string" && r.body))
    throw new Error("Incorrect function body");
  if (!(r.return_type && Al.has(r.return_type)))
    throw new Error("Incorrect function return_type");
  if (!Array.isArray(r.arguments))
    throw new Error("Incorrect function arguments");
  const t = /* @__PURE__ */ new Set();
  r.arguments.forEach((e) => {
    if (!(typeof e.name == "string" && e.name))
      throw new Error("Incorrect argument name");
    if (!(e.type && Al.has(e.type)))
      throw new Error("Incorrect argument type");
    if (t.has(e.name))
      throw new Error("Duplicate argument name");
    t.add(e.name);
  });
}
function qb(r) {
  let t;
  return {
    name: r.name,
    args: r.arguments.map((e) => ({
      type: e.type
    })),
    cb(e, ...n) {
      t || (t = pc(r.body) || gc(r.body, {
        startRule: "JsonStringContents"
      }), _c(r.body, t));
      const i = /* @__PURE__ */ new Map();
      n.forEach((c, g) => {
        if (c.type === "function")
          throw new Error("Incorrect argument type: function");
        const d = xo(r.arguments[g].name, c.type, c.value);
        i.set(d.getName(), d);
      });
      const o = Ks(i, e.customFunctions, e.store, t, {
        weekStartDay: e.weekStartDay
      });
      o.warnings.forEach((c) => {
        e.warnings.push(c);
      });
      const a = o.result;
      if (a.type === "error")
        throw new Error(a.value);
      if (a.type !== r.return_type)
        throw new Error("Incorrect function return_type");
      return a;
    }
  };
}
function Yb(r, t) {
  if (!r)
    return t || void 0;
  if (!t)
    return r || void 0;
  const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set();
  for (const [i, o] of t) {
    for (const a of o) {
      const c = Ga(i, a);
      n.add(c);
    }
    e.set(i, o);
  }
  for (const [i, o] of r)
    for (const a of o) {
      const c = Ga(i, a);
      if (!n.has(c)) {
        n.add(c);
        const g = e.get(i) || [];
        g.push(a), e.set(i, g);
      }
    }
  return e;
}
function Kb(r) {
  if (!r)
    return C(new Error("Missing object"));
  const t = r.card, e = r.templates || {};
  if (!t)
    return C(new Error("Missing card"));
  if (!t.states || !t.states.length)
    return C(new Error("Missing states"));
  for (const n in e)
    if (e.hasOwnProperty(n) && n in nc)
      return C(new Error("Template name collision"), {
        additional: {
          templateName: n
        }
      });
  for (let n = 0; n < t.states.length; ++n) {
    if (!t.states[n].div)
      return C(new Error("Missing state div"), {
        additional: {
          stateId: t.states[n].state_id
        }
      });
    if (typeof t.states[n].state_id != "number")
      return C(new Error("Missing state_id"), {
        additional: {
          index: n
        }
      });
  }
  return null;
}
function Zb(r) {
  return [...new Set(r)];
}
class hc {
  constructor(t, e) {
    Mr(this, "ast");
    Mr(this, "expr");
    this.ast = t, this.expr = e;
  }
  /**
   * Applies variables into ast
   * @param variables
   * @param logError
   */
  apply({
    variables: t,
    customFunctions: e,
    logError: n,
    store: i,
    weekStartDay: o,
    keepComplex: a
  }) {
    var g;
    let c;
    try {
      c = Ks(t, e, i, this.ast, {
        weekStartDay: o
      }), c.warnings.forEach(n);
      const d = c.result;
      if (d.type === "error")
        return n(C(new Error("Expression execution error"), {
          additional: {
            message: d.value,
            expression: this.expr
          }
        })), {
          result: void 0,
          usedVars: c.usedVars
        };
      const _ = d.value;
      if (_ instanceof Date)
        return {
          result: Jl(_),
          usedVars: c.usedVars
        };
      if (d.type === "boolean")
        return {
          result: !!_,
          usedVars: c.usedVars
        };
      if (d.type === "color") {
        const k = xn(String(_));
        if (k)
          return {
            result: mi(k),
            usedVars: c.usedVars
          };
        n(C(new Error("Expression execution error")));
      }
      if (d.type === "integer")
        return _ > Vg || _ < Fg ? (n(C(new Error("Expression result is out of 32-bit int range"))), {
          result: void 0,
          usedVars: c.usedVars
        }) : {
          result: Number(_),
          usedVars: c.usedVars
        };
      if (d.type === "function")
        return {
          result: `<${((g = d.value[0]) == null ? void 0 : g.name) || "Function"}>`,
          usedVars: c.usedVars
        };
      if (!a && (d.type === "array" || d.type === "dict"))
        try {
          return {
            result: JSON.stringify(_),
            usedVars: c.usedVars
          };
        } catch {
          return n(C(new Error(`Failed to stringify ${d.type}`))), {
            result: `<${d.type}>`,
            usedVars: c.usedVars
          };
        }
      return {
        result: _,
        usedVars: c.usedVars
      };
    } catch {
      return n(C(new Error("Expression execution error"), {
        additional: {
          expression: this.expr
        }
      })), {
        result: void 0,
        usedVars: c == null ? void 0 : c.usedVars
      };
    }
  }
}
function Xb(r) {
  return r.indexOf("@{") > -1 || r.indexOf("\\") > -1;
}
function zs(r, t, e, n) {
  if (r)
    if (typeof r == "string") {
      if (Xb(r)) {
        t.hasExpression = !0;
        try {
          const i = pc(r) || gc(r, {
            startRule: "JsonStringContents"
          });
          _c(r, i);
          const o = Mg(i);
          return t.vars.push(...o), new hc(i, r);
        } catch {
          e(C(new Error("Unable to parse expression"), {
            additional: {
              expression: r
            }
          }));
          return;
        }
      }
    } else {
      if (Array.isArray(r) && n > 0)
        return r.map((i) => zs(i, t, e, n - 1));
      if (typeof r == "object" && n > 0) {
        const i = {};
        for (const o in r)
          i[o] = zs(r[o], t, e, n - 1);
        return i;
      }
    }
  return r;
}
function Os(r, t) {
  if (r) {
    if (r instanceof hc)
      return r.apply(t);
    if (Array.isArray(r)) {
      let e;
      return {
        result: r.map((i) => {
          const o = Os(i, t);
          if (o.usedVars) {
            e || (e = /* @__PURE__ */ new Set());
            for (const a of o.usedVars)
              e.add(a);
          }
          return o.result;
        }),
        usedVars: e
      };
    } else if (typeof r == "object") {
      const e = {};
      let n;
      for (const i in r) {
        const o = Os(r[i], t);
        if (e[i] = o.result, o.usedVars) {
          n || (n = /* @__PURE__ */ new Set());
          for (const a of o.usedVars)
            n.add(a);
        }
      }
      return {
        result: e,
        usedVars: n
      };
    }
  }
  return {
    result: r
  };
}
function Cl(r, t, e, n, i = 1 / 0) {
  const o = {
    vars: [],
    hasExpression: !1
  }, a = zs(r, o, t, i);
  return {
    vars: Zb(o.vars),
    hasExpression: o.hasExpression,
    applyVars(g, d, _) {
      return Os(a, {
        variables: g,
        customFunctions: d,
        logError: t,
        store: e,
        weekStartDay: n,
        keepComplex: _
      });
    }
  };
}
class mc {
  constructor() {
    Mr(this, "_vars", /* @__PURE__ */ new Map());
    Mr(this, "_lastAddedVariable", Mn(""));
  }
  setVariable(t) {
    const e = t.getName();
    if (this._vars.has(e))
      throw new Error("Variable with the same name already exist");
    this._vars.set(e, t), this._lastAddedVariable.set(e);
  }
  getVariable(t) {
    return this._vars.get(t);
  }
  list() {
    return this._vars.values();
  }
  getVariables() {
    return this._vars;
  }
  getLastAddedVariableStore() {
    return this._lastAddedVariable;
  }
}
function Rv() {
  return new mc();
}
const Qb = ["start", "stop", "pause", "resume", "cancel", "reset"], ev = new Set(Qb);
class tv {
  constructor(t) {
    Mr(this, "timers", /* @__PURE__ */ new Map());
    Mr(this, "logError");
    Mr(this, "applyVars");
    Mr(this, "hasVariableWithType");
    Mr(this, "setVariableValue");
    Mr(this, "execAnyActions");
    Mr(this, "visibilityHandler");
    Mr(this, "awaitActions", []);
    this.logError = t.logError, this.applyVars = t.applyVars, this.hasVariableWithType = t.hasVariableWithType, this.setVariableValue = t.setVariableValue, this.execAnyActions = t.execAnyActions, this.visibilityHandler = () => {
      document.visibilityState === "visible" ? (this.awaitActions.forEach(({ id: e, action: n }) => {
        this.execTimerAction(e, n);
      }), this.awaitActions = [], this.unholdAll()) : this.holdAll();
    }, document.addEventListener("visibilitychange", this.visibilityHandler);
  }
  destroy() {
    document.removeEventListener("visibilitychange", this.visibilityHandler);
    for (const [t, e] of this.timers)
      this.stopTimerTimeouts(e);
  }
  createTimer(t) {
    if (!(t != null && t.id)) {
      this.logError(C(new Error("Missing timer id")));
      return;
    }
    if (!(t.duration || t.tick_interval && (t.value_variable || t.tick_actions))) {
      this.logError(C(new Error("Misconfigured timer"), {
        additional: {
          id: t.id
        }
      }));
      return;
    }
    this.timers.set(t.id, {
      state: "stopped",
      definition: t
    });
  }
  execTimerAction(t, e) {
    if (!t || !e || !this.timers.has(t) || !ev.has(e)) {
      this.logError(C(new Error("Incorrect timer action"), {
        additional: {
          id: t,
          action: e
        }
      }));
      return;
    }
    const n = e;
    if (document.visibilityState !== "visible") {
      this.awaitActions.push({
        id: t,
        action: n
      });
      return;
    }
    const i = this.timers.get(t);
    this[n](i);
  }
  stopTimerTimeouts(t) {
    t.durationTimeout && (clearTimeout(t.durationTimeout), t.durationTimeout = void 0), t.tickTimeout && (clearTimeout(t.tickTimeout), t.tickTimeout = void 0);
  }
  async tickOrUnholdAction(t) {
    const e = performance.now(), n = (t.durationPassed || 0) + e - (t.durationStarted || 0);
    t.duration && n > t.duration || (this.updateVariable(t, n), await this.callActions(t, "tick"), t.tickCount !== void 0 && ++t.tickCount);
  }
  startOrResume(t) {
    t.state = "running", t.hold = !1, t.durationStarted = performance.now();
    const e = t.duration;
    e && (t.durationTimeout = window.setTimeout(async () => {
      this.updateVariable(t, e), t.tickCountPredict && t.tickCount !== void 0 && t.tickCount < t.tickCountPredict && await this.callActions(t, "tick"), this.stop(t);
    }, Math.max(0, e - (t.durationPassed || 0))));
    const n = t.tick;
    if (n) {
      const i = () => {
        const o = t.tickStarted = performance.now(), a = Math.max(0, n - (t.tickPassed || 0));
        t.tickTimeout = window.setTimeout(async () => {
          await this.tickOrUnholdAction(t), t.tickPassed = (performance.now() - o - a) % n, t.state === "running" && i();
        }, a);
      };
      i();
    }
  }
  applyVarsInt(t) {
    let e = this.applyVars(t);
    if (typeof e == "string") {
      if (e === t)
        return;
      e = Number(e);
    }
    if (!(e === void 0 || Number.isNaN(e) || Math.round(e) !== e))
      return e;
  }
  start(t) {
    if (t.state === "running") {
      this.logError(C(new Error("The timer is already running")));
      return;
    } else if (t.state === "paused") {
      this.logError(C(new Error("The timer is paused")));
      return;
    }
    const e = t.definition.value_variable;
    if (e && !this.hasVariableWithType(e, "integer")) {
      this.logError(C(new Error("Cannot find variable"), {
        additional: {
          name: e
        }
      }));
      return;
    }
    if (e && this.setVariableValue(e, 0), t.definition.duration !== void 0 && (t.duration = this.applyVarsInt(t.definition.duration), t.duration === void 0 || t.duration < 0)) {
      this.logError(C(new Error("Incorrect timer properties"), {
        additional: {
          id: t.definition.id
        }
      }));
      return;
    }
    if (t.definition.tick_interval !== void 0 && (t.tick = this.applyVarsInt(t.definition.tick_interval), t.tick === void 0 || t.tick <= 0)) {
      this.logError(C(new Error("Incorrect timer properties"), {
        additional: {
          id: t.definition.id
        }
      }));
      return;
    }
    t.duration !== void 0 && t.tick !== void 0 && (t.tickCount = 0, t.tickCountPredict = Math.floor(t.duration / t.tick)), this.startOrResume(t);
  }
  stop(t) {
    if (t.state === "stopped") {
      this.logError(C(new Error("The timer has already been stopped")));
      return;
    }
    t.state = "stopped", t.durationPassed = 0, t.tickPassed = 0, this.stopTimerTimeouts(t), this.callActions(t, "end");
  }
  pause(t) {
    if (t.state === "stopped") {
      this.logError(C(new Error("The timer has already been stopped")));
      return;
    } else if (t.state === "paused") {
      this.logError(C(new Error("The timer has already been paused")));
      return;
    }
    t.state = "paused", this.stopTimerTimeouts(t);
    const e = performance.now();
    t.durationStarted && (t.durationPassed = (t.durationPassed || 0) + e - t.durationStarted), t.tickStarted && (t.tickPassed = (t.tickPassed || 0) + e - t.tickStarted);
    const n = t.definition.value_variable;
    n && t.durationPassed && this.setVariableValue(n, Math.round(t.durationPassed));
  }
  resume(t) {
    if (t.state === "stopped") {
      this.logError(C(new Error("The timer has already been stopped")));
      return;
    } else if (t.state === "running") {
      this.logError(C(new Error("The timer is already running")));
      return;
    }
    this.startOrResume(t);
  }
  cancel(t) {
    t.state !== "stopped" && (t.state = "stopped", t.durationPassed = 0, t.tickPassed = 0, this.stopTimerTimeouts(t));
  }
  reset(t) {
    this.cancel(t), this.start(t);
  }
  updateVariable(t, e) {
    const n = t.definition.value_variable;
    n && this.setVariableValue(n, Math.round(e));
  }
  async callActions(t, e) {
    const n = t.definition[e === "end" ? "end_actions" : "tick_actions"];
    if (n)
      return this.execAnyActions(n, {
        processUrls: !1
      });
  }
  holdAll() {
    for (const [t, e] of this.timers)
      e.state === "running" && (e.hold = !0, this.stopTimerTimeouts(e));
  }
  async unholdAll() {
    for (const [t, e] of this.timers)
      if (e.state === "running" && e.hold) {
        const n = performance.now();
        e.durationStarted && (e.durationPassed = (e.durationPassed || 0) + n - e.durationStarted), e.tickStarted && (e.tickPassed = (e.tickPassed || 0) + n - e.tickStarted), e.tick && await this.tickOrUnholdAction(e), this.startOrResume(e);
      }
  }
}
function rv(r, t, e, n) {
  const { variable_name: i, index: o, value: a } = n;
  if (!a || typeof o != "number" && o !== void 0) {
    e(C(new Error("Incorrect array_insert_value action"), {
      additional: {
        name: i
      }
    }));
    return;
  }
  Zs(r, t, e, n, (c) => {
    const g = c.getValue();
    if (typeof o == "number" && (o < 0 || o > g.length))
      e(C(new Error(`Index out of bound for mutation ${n.type}`), {
        additional: {
          name: i,
          index: o,
          length: g.length
        }
      }));
    else if (!a.type)
      e(C(new Error("Incorrect value type"), {
        additional: {
          name: i
        }
      }));
    else {
      const d = g.slice(), _ = es(a);
      typeof o == "number" ? d.splice(o, 0, _) : d.push(_), c.setValue(d);
    }
  });
}
function nv(r, t, e, n) {
  const { variable_name: i, index: o } = n;
  if (typeof o != "number") {
    e(C(new Error("Incorrect array_remove_value action"), {
      additional: {
        name: i
      }
    }));
    return;
  }
  Zs(r, t, e, n, (a) => {
    const c = a.getValue();
    if (typeof o == "number" && (o < 0 || o >= c.length))
      e(C(new Error(`Index out of bound for mutation ${n.type}`), {
        additional: {
          name: i,
          index: o,
          length: c.length
        }
      }));
    else {
      const g = c.slice();
      g.splice(o, 1), a.setValue(g);
    }
  });
}
function iv(r, t, e, n) {
  const { variable_name: i, index: o, value: a } = n;
  if (!a || typeof o != "number") {
    e(C(new Error("Incorrect array_set_value action"), {
      additional: {
        name: i
      }
    }));
    return;
  }
  Zs(r, t, e, n, (c) => {
    const g = c.getValue();
    if (typeof o == "number" && (o < 0 || o >= g.length))
      e(C(new Error(`Index out of bound for mutation ${n.type}`), {
        additional: {
          name: i,
          index: o,
          length: g.length
        }
      }));
    else if (!a.type)
      e(C(new Error("Incorrect value type"), {
        additional: {
          name: i
        }
      }));
    else {
      const d = g.slice();
      d[o] = es(a), c.setValue(d);
    }
  });
}
function Zs(r, t, e, n, i) {
  const { variable_name: o } = n;
  if (!o) {
    e(C(new Error(`Incorrect ${n.type} action`), {
      additional: {
        name: o
      }
    }));
    return;
  }
  const a = (r == null ? void 0 : r.getVariable(o)) || t.get(o);
  if (!a) {
    e(C(new Error("Cannot find variable"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  const c = a.getType();
  c === "array" ? i(a) : e(C(new Error("Trying to insert value into the non-array"), {
    additional: {
      name: o,
      type: c
    }
  }));
}
function ov(r, t, e, n) {
  const { variable_name: i, key: o, value: a } = n;
  if (typeof o != "string") {
    e(C(new Error("Incorrect dict_set_value action"), {
      additional: {
        name: i
      }
    }));
    return;
  }
  if (!i) {
    e(C(new Error(`Incorrect ${n.type} action`), {
      additional: {
        name: i
      }
    }));
    return;
  }
  a && !a.type && e(C(new Error("Incorrect value type"), {
    additional: {
      name: i
    }
  }));
  const c = (r == null ? void 0 : r.getVariable(i)) || t.get(i);
  if (!c) {
    e(C(new Error("Cannot find variable"), {
      additional: {
        name: i
      }
    }));
    return;
  }
  const g = c.getType();
  if (g === "dict") {
    const _ = { ...c.getValue() };
    a ? _[o] = es(a) : delete _[o], c.setValue(_);
  } else
    e(C(new Error("Trying to set value into the non-dict"), {
      additional: {
        name: i,
        type: g
      }
    }));
}
function sv(r, t) {
  if (!(t.content && (t.content.type === "text" || t.content.type === "url") && typeof t.content.value == "string")) {
    r(C(new Error("Incorrect action"), {
      additional: {
        action: t
      }
    }));
    return;
  }
  if (!(typeof navigator < "u" && "clipboard" in navigator && navigator.clipboard && "writeText" in navigator.clipboard && typeof navigator.clipboard.writeText == "function")) {
    r(C(new Error("Clipboard is unavailable"), {
      additional: {
        action: t
      }
    }));
    return;
  }
  navigator.clipboard.writeText(t.content.value).catch((e) => {
    r(C(new Error("Failed to copy to the clipboard"), {
      additional: {
        originalError: String(e)
      }
    }));
  });
}
function av(r) {
  if (r === "normal" || r === "reverse" || r === "alternate" || r === "alternate_reverse")
    return r;
}
function lv(r, t, e, n) {
  var Y, ue, Z, ae;
  const i = un(r.duration, 0);
  if (!i || r.type !== "color_animator" && r.type !== "number_animator")
    return;
  const o = (Y = r.start_value_typed ? r.start_value_typed.value : r.start_value) != null ? Y : t.getValue(), a = r.end_value_typed ? r.end_value_typed.value : r.end_value;
  if (o === void 0 || a === void 0 || r.type === "color_animator" && (typeof o != "string" && o !== void 0 || typeof a != "string") || r.type === "number_animator" && (typeof o != "number" && o !== void 0 || typeof a != "number"))
    return;
  const c = r.type === "color_animator" && xn(o), g = r.type === "color_animator" && xn(a);
  if (r.type === "color_animator" && (!c || !g))
    return;
  const d = Sr(r.start_delay, 0), _ = Gf(r.interpolator || "linear"), k = av(r.direction) || "normal", I = ((ue = r.repeat_count) == null ? void 0 : ue.type) === "infinity" ? 1 / 0 : ((Z = r.repeat_count) == null ? void 0 : Z.type) === "fixed" ? Sr((ae = r.repeat_count) == null ? void 0 : ae.value, 1) : 1;
  let T = 0, D = performance.now();
  const B = I === 1 / 0 ? 1 / 0 : I * i + d;
  function V(ke) {
    if (r.type === "color_animator") {
      if (!c || !g)
        throw new Error("Missing start/end value");
      return mi({
        a: Wn(qi(c.a, g.a, ke), 0, 255),
        r: Wn(qi(c.r, g.r, ke), 0, 255),
        g: Wn(qi(c.g, g.g, ke), 0, 255),
        b: Wn(qi(c.b, g.b, ke), 0, 255)
      });
    }
    return qi(o, a, ke);
  }
  function A(ke) {
    const le = ke - D;
    if (D = ke, T += le, T >= d) {
      let Q = Math.floor((T - d) / i), _e = (T - d - Q * i) / i;
      Q >= I && (Q = I - 1, _e = 1);
      let de;
      k === "normal" || k === "alternate" && Q % 2 === 0 || k === "alternate_reverse" && Q % 2 === 1 ? de = "normal" : de = "reverse", de === "reverse" && (_e = 1 - _e);
      const te = V(_(_e));
      t.setValue(te);
    }
    T < B ? $e = requestAnimationFrame(A) : (e(), n(r.end_actions));
  }
  let $e = requestAnimationFrame(A);
  return {
    stop() {
      cancelAnimationFrame($e), n(r.cancel_actions), n(r.end_actions);
    }
  };
}
function cv(r) {
  let t = r;
  for (; t && !t.isTooltipRoot; )
    t = t.parent;
  return t;
}
function uv(r) {
  let t = r;
  for (; t != null && t.parent && t.json.type !== "state" && !t.isRootState && !t.isTooltipRoot; )
    t = t.parent;
  return t;
}
function Uo(r) {
  return !!(r && typeof r == "string");
}
const dv = /* @__PURE__ */ new Set([
  "get",
  "post",
  "put",
  "patch",
  "delete",
  "head",
  "options"
]);
function fv(r) {
  return r === void 0 || dv.has(r);
}
function gv(r) {
  return r === void 0 || Array.isArray(r) && r.every((t) => Uo(t.name) && Uo(t.value));
}
function pv(r) {
  var t, e, n;
  return Uo(r.container_id) && Uo((t = r.request) == null ? void 0 : t.url) && fv((e = r.request) == null ? void 0 : e.method) && gv((n = r.request) == null ? void 0 : n.headers);
}
function _v(r, t, e, n) {
  const { variable_name: i, path: o, value: a } = n;
  if (!(a != null && a.value)) {
    e(C(new Error("Missing value for an action"), {
      additional: {
        name: i
      }
    }));
    return;
  }
  if (typeof o != "string" || !o || o.charAt(0) === "/" || o.charAt(o.length - 1) === "/") {
    e(C(new Error(`Value '${o}' for key 'path' is not valid`), {
      additional: {
        name: i
      }
    }));
    return;
  }
  if (!i) {
    e(C(new Error(`Incorrect ${n.type} action`), {
      additional: {
        name: i
      }
    }));
    return;
  }
  const c = (r == null ? void 0 : r.getVariable(i)) || t.get(i);
  if (!c) {
    e(C(new Error("Cannot find variable"), {
      additional: {
        name: i
      }
    }));
    return;
  }
  const g = c.getType();
  if (g === "dict" || g === "array") {
    const d = c.getValue(), _ = o.replace(/\/+/g, "/");
    if (_ === "/") {
      e(C(new Error(`Value '${o}' for key 'path' is not valid`), {
        additional: {
          name: i,
          type: g,
          path: o
        }
      }));
      return;
    }
    const k = _.split("/"), I = g === "array" ? d.slice() : { ...d };
    let T = I;
    for (let D = 0; D < k.length; ++D) {
      const B = k[D];
      if (!B) {
        e(C(new Error("Path is empty"), {
          additional: {
            name: i,
            type: g,
            path: o
          }
        }));
        return;
      }
      if (!T || typeof T != "object") {
        e(C(new Error(`Element with path '${k.slice(0, D).join("/")}' is not ${T === void 0 ? "found" : "a structure"}`), {
          additional: {
            name: i,
            type: g,
            path: o
          }
        }));
        return;
      }
      if (Array.isArray(T)) {
        const V = Number(B);
        if (Number.isNaN(V)) {
          e(C(new Error(`Unable to use '${B}' as array index`), {
            additional: {
              name: i,
              type: g,
              path: o
            }
          }));
          return;
        }
        if (D + 1 === k.length && (V < 0 || V > T.length)) {
          e(C(new Error(`Position '${V}' is out of array bounds`), {
            additional: {
              name: i,
              type: g,
              path: o
            }
          }));
          return;
        }
      }
      D + 1 < k.length && (T = T[B]);
    }
    T[k[k.length - 1]] = es(a), c.setValue(I);
  } else
    e(C(new Error("Action requires array or dictionary variable"), {
      additional: {
        name: i,
        type: g
      }
    }));
}
const hv = "appkit-outer", mv = "appkit-root__clickable", bv = "undefined", vv = "appkit-tooltip", yv = "appkit-tooltip_visible", wv = "appkit-tooltip_modal", $v = "appkit-tooltip__inner", jv = "appkit-tooltip__overlay", kv = "appkit-tooltip__substrate", Fi = {
  outer: hv,
  root__clickable: mv,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  root__selectable: bv,
  tooltip: vv,
  tooltip_visible: yv,
  tooltip_modal: wv,
  tooltip__inner: $v,
  tooltip__overlay: jv,
  tooltip__substrate: kv
}, xv = 300, Ev = 0;
function Vl(r) {
  return Math.max(...r.map(
    (t) => (Number(t.duration) || xv) + (Number(t.start_delay) || Ev)
  ));
}
const Av = typeof window < "u" && "HTMLDialogElement" in window, Fl = {
  name: "set",
  items: [{ name: "translate" }, { name: "fade" }]
};
let Sl = [];
const Cv = gr((r, t, e, n) => {
  var Ge, Me, Pe, R, Te;
  let i, o, a, c, g, d, _ = h, k = () => (_(), _ = p(a, (oe) => oe), a), I = h, T = () => (I(), I = p(o, (oe) => oe), o), D = h, B = () => (D(), D = p(i, (oe) => oe), i), V, A = h, $e = () => (A(), A = p(g, (oe) => V = oe), g), Y, ue = h, Z = () => (ue(), ue = p(c, (oe) => Y = oe), c), ae, ke, { ownerNode: le } = t, { data: Q } = t, { internalId: _e } = t, { parentComponentContext: de } = t;
  const me = sr($r).isDesktop;
  ke = p(me, (oe) => ae = oe);
  let Ve, Fe, L, We, Ne = !1, Se = "", je = "", S = "", fe = "", H, re, ye = !0, Ke = null;
  return Pr(() => {
    if (H && H.destroy(), re && re.destroy(), Sl = Sl.filter((oe) => oe !== Ve), ye && Ke && Ke instanceof HTMLElement)
      try {
        Ke.focus({ preventScroll: !0 });
      } catch {
      }
  }), t.ownerNode === void 0 && e.ownerNode && le !== void 0 && e.ownerNode(le), t.data === void 0 && e.data && Q !== void 0 && e.data(Q), t.internalId === void 0 && e.internalId && _e !== void 0 && e.internalId(_e), t.parentComponentContext === void 0 && e.parentComponentContext && de !== void 0 && e.parentComponentContext(de), H && H.destroy(), H = de.produceChildContext(Q.div || {}, { isTooltipRoot: !0 }), Q.substrate_div && (re = de.produceChildContext(Q.substrate_div, { isTooltipRoot: !0 })), B(i = de.getDerivedFromVars(Q.position)), T(o = de.getDerivedFromVars((Me = (Ge = Q.offset) == null ? void 0 : Ge.x) == null ? void 0 : Me.value)), k(a = de.getDerivedFromVars((R = (Pe = Q.offset) == null ? void 0 : Pe.y) == null ? void 0 : R.value)), Z(c = de.getDerivedFromVars(Q.animation_in)), $e(g = de.getDerivedFromVars(Q.animation_out)), js() || Vl(Bo(Y || Fl)), js() || Vl(Bo(V || Fl)), ((Te = Q.mode) == null ? void 0 : Te.type) === "non_modal" ? ye = !1 : ye = !0, d = { visible: Ne, modal: ye }, _(), I(), D(), A(), ue(), ke(), `  ${Av ? `${re ? `<div${m("class", Fi.tooltip__substrate, 0)}${m("this", L, 0)}>${Wt(gn, "Unknown").$$render(
    r,
    {
      componentContext: re
    },
    {},
    {}
  )}</div> <div${m("this", We, 0)}></div>` : ""}  <dialog class="${gt(Ht("tooltip", Fi, d), !0) + " " + gt(ae ? Jr.root_platform_desktop : "", !0)}"${Ar({
    top: je,
    left: Se,
    width: S,
    height: fe
  })}${m("this", Ve, 0)}> <div${m("class", Fi.tooltip__inner, 0)}${m("this", Fe, 0)}>${Wt(gn, "Unknown").$$render(r, { componentContext: H }, {}, {})}</div></dialog>` : ` ${re ? `<div${m("class", Fi.tooltip__substrate, 0)}${m("this", L, 0)}>${Wt(gn, "Unknown").$$render(
    r,
    {
      componentContext: re
    },
    {},
    {}
  )}</div> <div${m("this", We, 0)}></div>` : ""}  <div class="${gt(Ht("tooltip", Fi, d), !0) + " " + gt(ae ? Jr.root_platform_desktop : "", !0)}" role="dialog"${m("aria-modal", ye, 0)}${Ar({
    top: je,
    left: Se,
    width: S,
    height: fe
  })}${m("this", Ve, 0)}><div${m("class", Fi.tooltip__inner, 0)}${m("this", Fe, 0)}>${Wt(gn, "Unknown").$$render(r, { componentContext: H }, {}, {})}</div></div>`}`;
}), Vv = "appkit-root_platform_desktop", Fv = "appkit-menu", Sv = "appkit-menu_visible", Dv = "appkit-menu__list", Iv = "appkit-menu__item", ms = {
  root_platform_desktop: Vv,
  menu: Fv,
  menu_visible: Sv,
  menu__list: Dv,
  menu__item: Iv
}, Tv = gr((r, t, e, n) => {
  let i, o, a, { ownerNode: c } = t, { items: g } = t, { parentComponentContext: d } = t;
  const _ = sr($r), k = _.getCustomization("menuPopupClass") || "", I = _.getCustomization("menuItemClass") || "", T = _.isDesktop;
  a = p(T, (ae) => o = ae);
  const D = Dc();
  let B, V = !1, A = "", $e = "", Y = "", ue = "";
  function Z() {
    return D("close"), !0;
  }
  return Pr(() => {
  }), t.ownerNode === void 0 && e.ownerNode && c !== void 0 && e.ownerNode(c), t.items === void 0 && e.items && g !== void 0 && e.items(g), t.parentComponentContext === void 0 && e.parentComponentContext && d !== void 0 && e.parentComponentContext(d), i = { visible: V }, a(), ` <div class="${gt(Ht("menu", ms, i), !0) + " " + gt(o ? Jr.root_platform_desktop : "", !0) + " " + gt(k, !0)}"${Ar({
    top: $e,
    left: A,
    width: Y,
    height: ue
  })}${m("this", B, 0)}><ul${m("class", ms.menu__list, 0)}>${Vr(g, (ae) => `<li>${Wt(qo, "Actionable").$$render(
    r,
    {
      componentContext: d,
      actions: ae.actions || ae.action && [ae.action],
      cls: ms.menu__item + " " + I,
      customAction: Z
    },
    {},
    {
      default: () => `${gt(ae.text)} `
    }
  )} </li>`)}</ul></div>`;
});
let Xs = Mn(!0), Dl = 0;
function Mv() {
  Xs.set(!1);
}
function Pv() {
  Xs.set(!0);
}
const zv = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean"]), Ov = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean", "array", "dict"]);
function Ln(r, t) {
  if (r && t)
    return new Map([...r, ...t]);
  if (r)
    return r;
  if (t)
    return t;
}
const Nv = gr((r, t, e, n) => {
  var Ur, Or, qr, jr, Qr;
  let i, o, a, c, g, d, { id: _ } = t, { json: k = {} } = t, { platform: I = "auto" } = t, { theme: T = "system" } = t, { globalVariablesController: D = void 0 } = t, { mix: B = "" } = t, { customization: V = {} } = t, { builtinProtocols: A = ["http", "https", "tel", "mailto", "intent"] } = t, { extensions: $e = /* @__PURE__ */ new Map() } = t, { onError: Y = void 0 } = t, { onStat: ue = void 0 } = t, { onSubmit: Z = void 0 } = t, { onCustomAction: ae = void 0 } = t, { onComponent: ke = void 0 } = t, { typefaceProvider: le = (f) => "" } = t, { fetchInit: Q = {} } = t, { tooltipRoot: _e = void 0 } = t, { customComponents: de = void 0 } = t, { direction: te = "ltr" } = t, { store: me = void 0 } = t, { pagerChildrenClipEnabled: Ve = !0 } = t, { pagerMouseDragEnabled: Fe = !0 } = t, { weekStartDay: L = 0 } = t, { videoPlayerProvider: We = void 0 } = t, { devtoolCreateHierarchy: Ne = "lazy" } = t, Se = !0, je = Mn(I === "desktop");
  if (c = p(je, (f) => a = f), I === "auto" && typeof matchMedia < "u") {
    const f = matchMedia("(any-pointer: coarse)");
    je.set(!f.matches), f.addListener(() => {
      je.set(!f.matches);
    });
  }
  let S = "light", fe = null;
  const H = Mn(te === "rtl" ? "rtl" : "ltr");
  d = p(H, (f) => g = f);
  function re() {
    T !== "system" || !fe || (S = fe.matches ? "dark" : "light");
  }
  function ye(f) {
    T = f;
  }
  function Ke() {
    return /* @__PURE__ */ new Map();
  }
  function Ge() {
    return /* @__PURE__ */ new Map();
  }
  function Me(f) {
    k = f;
  }
  function Pe(f) {
    return Zt(f, Be);
  }
  const R = new Set(A);
  let Te = !1, oe = !1;
  _ || (oe = !0, Be(C(new Error('"id" prop is required'))));
  const ot = { stateChange: !1 }, et = D || new mc(), K = et.getLastAddedVariableStore(), Ce = et.getVariables(), ze = /* @__PURE__ */ new Map(), ce = /* @__PURE__ */ new Map(), lt = /* @__PURE__ */ new Map(), pe = /* @__PURE__ */ new Map();
  let be = null;
  const Ze = /* @__PURE__ */ new Map();
  let Je = 0, De = [];
  const At = /* @__PURE__ */ new Set();
  let Xe;
  const q = [];
  function Ye(f) {
    return V == null ? void 0 : V[f];
  }
  function dt(f, b, { additionalVars: w, keepComplex: z = !1, customFunctions: E, emptyVarsError: Ue, maxDepth: se } = {}) {
    var Ft;
    if (!b)
      return Hn(b);
    const Nt = Ln(ce, w), $t = Cl(b, f, me, L, se);
    if (!$t.vars.length)
      if ($t.hasExpression) {
        const it = $t.applyVars(Nt, E);
        if (!((Ft = it.usedVars) != null && Ft.size))
          return Ue && Ue(), Hn(it.result);
      } else
        return Ue && Ue(), Hn(b);
    const Oe = $t.vars.map((it) => Nt.get(it) || wt(it)).filter(zn);
    return Mn(void 0, (it) => {
      const Qt = /* @__PURE__ */ new Map();
      let ur;
      const Ir = () => {
        var nn;
        const Tr = $t.applyVars(Nt, E, z);
        for (const [Gr, on] of Qt)
          (nn = Tr.usedVars) != null && nn.has(Gr) || (on(), Qt.delete(Gr));
        if (Tr.usedVars) {
          for (const Gr of Tr.usedVars)
            if (!Qt.has(Gr)) {
              let on = !0;
              Qt.set(Gr, Gr.subscribe(() => {
                on || it(Ir()), on = !1;
              }));
            }
        }
        return Tr.result;
      };
      return ur = zi(Oe, Ir).subscribe((Tr) => {
        it(Tr);
      }), () => {
        ur == null || ur();
        for (const [Tr, nn] of Qt)
          nn();
      };
    });
  }
  function Le(f, b, w, z = !1, E = void 0) {
    const Ue = Cl(b, f, me, L);
    if (!Ue.hasExpression)
      return b;
    const se = Ln(ce, w);
    return Ue.applyVars(se, E, z).result;
  }
  function tt(f, b, w) {
    const z = /* @__PURE__ */ new Map(), E = xo(f, "dict", b);
    z.set(f, E);
    const Ue = xo("index", "integer", w);
    return z.set("index", Ue), z;
  }
  function Be(f) {
    Y ? Y({ error: f }) : (f == null ? void 0 : f.level) === "warn" ? console.warn(f) : console.error(f);
  }
  function yt(f, b) {
    ue && ue({ type: f, action: b });
  }
  function Ut(f) {
    return f in i;
  }
  function jt(f, b) {
    if (!f)
      return { json: f, templateContext: b };
    const w = /* @__PURE__ */ new Set([f.type]);
    for (; f.type && f.type in i; ) {
      if ({ json: f, templateContext: b } = ih(f, b, i, Be), w.has(f.type))
        return { json: f, templateContext: b };
      w.add(f.type);
    }
    return { json: f, templateContext: b };
  }
  let kt = 0;
  function ge(f) {
    return `${_}-${kt++}`;
  }
  function we(f) {
    return `divkit-${ge()}`;
  }
  let Vt = {}, Pt = {};
  function St(f, b) {
    const w = `${f}:${b}`;
    if (Pt[w] = Pt[w] || 0, ++Pt[w], Vt[w])
      return Vt[w];
    const z = `${ge()}-svg-filter`;
    return Vt = { ...Vt, [w]: z }, z;
  }
  function qe(f, b) {
    if (!f)
      return;
    const w = `${f}:${b}`;
    Pt[w] && --Pt[w] === 0 && (Vt = Object.keys(Vt).reduce(
      (z, E) => (Pt[E] && (z[E] = Vt[E]), z),
      {}
    ));
  }
  const Yt = ge() + "-id-", W = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map();
  function bt(f) {
    return Yt + f;
  }
  function Ie(f, b) {
    let w = W.get(f) || [];
    return W.has(f) || W.set(f, w), w.push(b), () => {
      w = w.filter((E) => E !== b), w.length || W.delete(f);
      const z = bt(f);
      Re.has(z) && Re.delete(z);
    };
  }
  function rt(f) {
    var w, z;
    const b = (z = (w = W.get(f)) == null ? void 0 : w[0]) == null ? void 0 : z.node();
    if (b) {
      const E = bt(f), Ue = Re.get(E);
      return Ue && Ue !== b && Ue.removeAttribute("id"), b.setAttribute("id", E), Re.set(E, b), E;
    }
    return "";
  }
  async function Tt(f, b) {
    var se, Nt;
    if (!f)
      throw new Error("Missing state id");
    let w = f.split("/");
    const z = w.length % 2 === 0 && cv(b);
    let E = z || cr;
    const Ue = (b == null ? void 0 : b.logError) || Be;
    if (!z)
      if ((se = E.states) != null && se.root) {
        const $t = E.states.root;
        if ($t.length > 1) {
          Ue(C(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: f } }));
          return;
        }
        if (E = await $t[0](w[0]), !E)
          return;
        w = w.slice(1);
      } else
        return;
    for (let $t = 0; $t < w.length; $t += 2) {
      const Oe = w[$t], Ft = w[$t + 1];
      if ((Nt = E.states) != null && Nt[Oe]) {
        const it = E.states[Oe];
        if (it.length > 1) {
          Ue(C(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: f } }));
          return;
        }
        if (E = await it[0](Ft), !E)
          return;
      } else
        return;
    }
  }
  async function xt(f, b, w) {
    var Qt;
    const z = (f == null ? void 0 : f.logError) || Be;
    if (!pv(b)) {
      z(C(new Error("Incorrect submit action"), {
        additional: { containerId: b.container_id }
      }));
      return;
    }
    const E = W.get(b.container_id);
    if ((E == null ? void 0 : E.length) !== 1) {
      z(C(new Error("Error resolving container. Found multiple elements that respond to id"), {
        additional: { containerId: b.container_id }
      }));
      return;
    }
    const Ue = E[0].context(), se = {};
    if (Ue.variables)
      for (const [ur, Ir] of Ue.variables) {
        const Tr = Ir.getValue();
        typeof Tr == "bigint" ? se[ur] = Number(Tr) : se[ur] = Tr;
      }
    if (Z) {
      Promise.resolve().then(() => Z(b, se)).then(() => {
        ct(w.on_success_actions, { componentContext: f });
      }).catch(() => {
        ct(w.on_fail_actions, { componentContext: f });
      });
      return;
    }
    const Nt = Object.keys(se).length > 0, $t = (b.request.method || "post").toLowerCase();
    if (($t === "get" || $t === "head") && Nt) {
      z(C(new Error("Can't send variables using the get/head method."), { additional: { url: b.request.url } }));
      return;
    }
    let Oe = !1;
    const Ft = [];
    (Qt = b.request.headers) == null || Qt.forEach((ur) => {
      Ft.push([ur.name, ur.value]), ur.name.toLowerCase() === "content-type" && (Oe = !0);
    }), Oe || Ft.push(["Content-Type", "application/json"]);
    let it;
    typeof Q == "function" ? it = Q(b.request.url) : it = Q, fetch(b.request.url, {
      ...it,
      method: $t,
      headers: Ft,
      body: Nt ? JSON.stringify(se) : void 0
    }).then((ur) => {
      if (!ur.ok)
        throw new Error("Response is not ok");
      ct(w.on_success_actions, { componentContext: f });
    }).catch((ur) => {
      z(C(new Error("Failed to submit"), {
        additional: {
          url: b.request.url,
          originalError: ur
        }
      })), ct(w.on_fail_actions, { componentContext: f });
    });
  }
  function He(f, b) {
    var E, Ue, se, Nt, $t, Oe, Ft, it, Qt;
    const w = (f == null ? void 0 : f.logError) || Be, z = b.id && $(b.id);
    if (!z) {
      w(C(new Error('Missing component for "scroll_to" action'), { additional: { id: b.id } }));
      return;
    }
    if (b.animated !== void 0 && typeof b.animated != "boolean") {
      w(C(new Error('Missing properties for "scroll_to" action'), { additional: { id: b.id } }));
      return;
    }
    switch ((E = b.destination) == null ? void 0 : E.type) {
      case "index": {
        typeof b.destination.value == "number" && z.setCurrentItem(b.destination.value, (Ue = b.animated) != null ? Ue : !0);
        break;
      }
      case "offset": {
        typeof b.destination.value == "number" && ((Nt = z.scrollToPosition) == null || Nt.call(z, b.destination.value, (se = b.animated) != null ? se : !0));
        break;
      }
      case "start": {
        (Oe = z.scrollToStart) == null || Oe.call(z, ($t = b.animated) != null ? $t : !0);
        break;
      }
      case "end": {
        (it = z.scrollToEnd) == null || it.call(z, (Ft = b.animated) != null ? Ft : !0);
        break;
      }
      default:
        w(C(new Error('Unknown destination for "scroll_to" action'), {
          additional: {
            id: b.id,
            destination: (Qt = b.destination) == null ? void 0 : Qt.type
          }
        }));
    }
  }
  function nt(f, b) {
    var E;
    const w = (f == null ? void 0 : f.logError) || Be, z = b.id && $(b.id);
    if (!z) {
      w(C(new Error('Missing component for "scroll_by" action'), { additional: { id: b.id } }));
      return;
    }
    if (typeof b.item_count != "number" && b.item_count !== void 0 || typeof b.offset != "number" && b.offset !== void 0 || b.overflow !== void 0 && b.overflow !== "clamp" && b.overflow !== "ring" || b.animated !== void 0 && typeof b.animated != "boolean") {
      w(C(new Error('Missing properties for "scroll_by" action'), { additional: { id: b.id } }));
      return;
    }
    (E = z.scrollCombined) == null || E.call(z, {
      step: b.item_count,
      offset: b.offset,
      overflow: b.overflow,
      animated: b.animated
    });
  }
  function Dt(f, b, { item: w, step: z, overflow: E, animated: Ue }) {
    var Ft, it, Qt, ur, Ir;
    if (!b)
      throw new Error(`Missing id for "${f}" action`);
    const se = Number(w);
    if (f === "set_current_item" && Number.isNaN(se))
      throw new Error(`Incorrect item for "${f}" action`);
    let Nt = Number(z);
    if (!z && (f === "set_previous_item" || f === "set_next_item") && (Nt = 1), !z && (f === "scroll_backward" || f === "scroll_forward" || f === "scroll_to_position") || Number.isNaN(Nt))
      throw new Error(`Incorrect step value for "${f}" action`);
    if (E && E !== "clamp" && E !== "ring")
      throw new Error(`Incorrect overflow value for "${f}" action`);
    E = E || "clamp";
    const $t = Ue === null || Ue !== "0" && Ue !== "false", Oe = $(b);
    if (Oe)
      switch (f) {
        case "set_current_item":
          Oe.setCurrentItem(se, $t);
          return;
        case "set_previous_item":
          Oe.setPreviousItem(Nt, E, $t);
          return;
        case "set_next_item":
          Oe.setNextItem(Nt, E, $t);
          return;
        case "scroll_to_start":
          (Ft = Oe.scrollToStart) == null || Ft.call(Oe, $t);
          return;
        case "scroll_to_end":
          (it = Oe.scrollToEnd) == null || it.call(Oe, $t);
          return;
        case "scroll_backward":
          (Qt = Oe.scrollCombined) == null || Qt.call(Oe, {
            offset: -Nt,
            overflow: E,
            animated: $t
          });
          return;
        case "scroll_forward":
          (ur = Oe.scrollCombined) == null || ur.call(Oe, {
            offset: Nt,
            overflow: E,
            animated: $t
          });
          return;
        case "scroll_to_position":
          (Ir = Oe.scrollToPosition) == null || Ir.call(Oe, Nt, $t);
          return;
      }
  }
  function ft(f, b, w) {
    const z = (w == null ? void 0 : w.logError) || Be;
    if (f) {
      const E = $(f);
      E ? b === "start" ? E.start() : b === "pause" ? E.pause() : z(C(new Error("Unknown video action"), { additional: { id: f, action: b } })) : z(C(new Error("Video component is not found"), { additional: { id: f, action: b } }));
    } else
      z(C(new Error("Missing id in video action"), { additional: { action: b } }));
  }
  function Zt(f, b, w) {
    var z, E, Ue;
    if (f.templates)
      for (const se in f.templates)
        i.hasOwnProperty(se) || (i[se] = f.templates[se]);
    if (Array.isArray((z = f.patch) == null ? void 0 : z.changes)) {
      if (f.patch.mode === "transactional") {
        const se = f.patch.changes.find((Nt) => {
          const $t = xe.get(Nt.id);
          if (!$t)
            return !0;
          const Oe = Array.isArray(Nt.items) ? Nt.items.length : 0;
          return !!($t.isSingleMode && Oe !== 1);
        });
        if (se)
          return b(C(new Error("Skipping transactional, child is not found or broken"), { additional: { url: w, id: se.id } })), ct((E = f.patch) == null ? void 0 : E.on_failed_actions), !1;
      }
      return f.patch.changes.forEach((se) => {
        const Nt = xe.get(se.id);
        Nt && Nt.replaceWith(se.id, se.items);
      }), ct((Ue = f.patch) == null ? void 0 : Ue.on_applied_actions), !0;
    }
    return !1;
  }
  function er(f, b, w) {
    const z = (w == null ? void 0 : w.logError) || Be;
    if (f) {
      let E;
      typeof Q == "function" ? E = Q(f) : E = Q, fetch(f, E).then((Ue) => {
        if (!Ue.ok)
          throw new Error("Response is not ok");
        return Ue.json();
      }).then((Ue) => {
        if (!Ue) {
          z(C(new Error("Incorrect patch"), { additional: { url: f } })), ct(b == null ? void 0 : b.on_fail_actions, { componentContext: w });
          return;
        }
        Zt(Ue, z, f) ? ct(b == null ? void 0 : b.on_success_actions, { componentContext: w }) : ct(b == null ? void 0 : b.on_fail_actions, { componentContext: w });
      }).catch((Ue) => {
        z(C(new Error("Failed to download the patch"), { additional: { url: f, originalError: Ue } })), ct(b == null ? void 0 : b.on_fail_actions, { componentContext: w });
      });
    } else
      z(C(new Error("Missing url in download action"), { additional: { url: f } }));
  }
  function zt(f, b, w) {
    var Nt;
    const z = (w == null ? void 0 : w.logError) || Be;
    if (!f) {
      z(C(new Error("Missing id in show_tooltip action")));
      return;
    }
    const E = Kt.get(f);
    if (!E) {
      z(C(new Error("Tooltip with the provided id is not found"), { additional: { id: f } }));
      return;
    }
    if (b !== "true" && b !== !0 && At.has(f))
      return;
    At.add(f);
    const Ue = {
      internalId: ++Je,
      ownerNode: E.onwerNode,
      desc: E.tooltip,
      timeoutId: 0,
      componentContext: w
    };
    De = [...De, Ue];
    const se = (Nt = E.tooltip.duration) != null ? Nt : 5e3;
    se && (Ue.timeoutId = window.setTimeout(
      () => {
        Ue.timeoutId = 0, De = De.filter(($t) => $t.internalId !== Ue.internalId);
      },
      se
    ));
  }
  function tr(f, b) {
    const w = (b == null ? void 0 : b.logError) || Be;
    if (!f) {
      w(C(new Error("Missing id in hide_tooltip action")));
      return;
    }
    De = De.filter((z) => {
      const E = z.desc.id !== f;
      return !E && z.timeoutId && (clearTimeout(z.timeoutId), z.timeoutId = null), E;
    });
  }
  function Mt(f, b, w, z, E) {
    const Ue = (f == null ? void 0 : f.logError) || Be;
    if (!me) {
      Ue(C(new Error("Store is not configured")));
      return;
    }
    let se = w;
    if (!b || !se || !z || !E) {
      Ue(C(new Error("Missing required params for set_stored_value")));
      return;
    }
    if (!Ov.has(z)) {
      Ue(C(new Error("Incorrect stored type")));
      return;
    }
    if (z === "boolean" && (se = se === "true" || se === "1"), me.set)
      me.set(b, z, se, Number(E));
    else if (me.setValue) {
      if (!zv.has(z)) {
        Ue(C(new Error("Incorrect stored type")));
        return;
      }
      if (typeof se != "string" && typeof se != "number" && typeof se != "boolean") {
        Ue(C(new Error("Incorrect stored value")));
        return;
      }
      (z === "integer" || z === "number") && (se = Number(se)), me.setValue(b, z, se, Number(E));
    }
  }
  function Xt(f) {
    It(Le(Be, f, void 0, !0), f);
  }
  async function It(f, b, w) {
    var Nt, $t;
    const z = f.scope_id, E = (w == null ? void 0 : w.logError) || Be;
    if (z) {
      const Oe = ne.get(z);
      if (Oe && (Oe == null ? void 0 : Oe.size) > 1)
        E(C(new Error(`Ambiguous scope id. There are ${Oe.size} divs with id '${z}'`), { additional: { count: Oe.size, scopeId: z } }));
      else if ((Oe == null ? void 0 : Oe.size) === 1) {
        const Ft = Oe.values().next().value;
        Ft && (w = Ft);
      } else {
        E(C(new Error("The scope with the specified scope_id is missing"), { additional: { scopeId: z } }));
        return;
      }
    }
    const Ue = f.url ? String(f.url) : "", se = f.typed;
    if (Hs(f)) {
      if (se)
        switch (se.type) {
          case "set_variable": {
            const { variable_name: Oe, value: Ft } = se;
            if (Oe && Ft) {
              const it = (w == null ? void 0 : w.getVariable(Oe)) || ce.get(Oe);
              it ? it.getType() === Ft.type ? it.setValue(Ft.value) : E(C(new Error("Trying to set value with invalid type"), { additional: { name: Oe, type: Ft.type } })) : E(C(new Error("Cannot find variable"), { additional: { name: Oe } }));
            } else
              E(C(new Error("Incorrect set_variable action"), { additional: { name: Oe } }));
            break;
          }
          case "array_insert_value":
            rv(w, ce, E, se);
            break;
          case "array_remove_value":
            nv(w, ce, E, se);
            break;
          case "array_set_value":
            iv(w, ce, E, se);
            break;
          case "copy_to_clipboard":
            sv(E, se);
            break;
          case "focus_element": {
            const Oe = se.element_id && ir.get(se.element_id);
            Oe ? Oe.focus() : E(C(new Error("Incorrect focus_element action"), {
              additional: { elementId: se.element_id }
            }));
            break;
          }
          case "clear_focus": {
            try {
              document.activeElement instanceof HTMLElement && document.activeElement.blur();
            } catch {
            }
            break;
          }
          case "dict_set_value": {
            ov(w, ce, E, se);
            break;
          }
          case "animator_start": {
            const Oe = se.animator_id && (w == null ? void 0 : w.getAnimator(se.animator_id));
            if (!Oe) {
              E(C(new Error("Missing animator"), {
                additional: { animator_id: se.animator_id }
              }));
              return;
            }
            const { duration: Ft, start_delay: it, interpolator: Qt, direction: ur, repeat_count: Ir, start_value: Tr, end_value: nn } = se, Gr = w ? w.getJsonWithVars(Oe) : Le(Be, Oe), on = {
              ...Gr,
              end_actions: Oe.end_actions,
              cancel_actions: Oe.cancel_actions,
              duration: Ft !== void 0 ? Ft : Gr.duration,
              start_delay: it !== void 0 ? it : Gr.start_delay,
              interpolator: Qt !== void 0 ? Qt : Gr.interpolator,
              direction: ur !== void 0 ? ur : Gr.direction,
              repeat_count: Ir !== void 0 ? Ir : Gr.repeat_count,
              start_value_typed: Tr,
              end_value_typed: nn
            }, vt = Oe.variable_name && ((w == null ? void 0 : w.getVariable(Oe.variable_name)) || ce.get(Oe.variable_name));
            if (!vt)
              return;
            const l = Ze.get(Oe.id);
            l && l.stop();
            const u = lv(
              on,
              vt,
              () => {
                Ze.delete(Oe.id);
              },
              (F, j) => ((w == null ? void 0 : w.execAnyActions) || ct)(F, j)
            );
            u && Ze.set(Oe.id, u);
            break;
          }
          case "animator_stop": {
            const Oe = Ze.get(se.animator_id);
            Oe && (Oe.stop(), Ze.delete(se.animator_id));
            break;
          }
          case "show_tooltip": {
            zt(se.id, se.multiple, w);
            break;
          }
          case "hide_tooltip": {
            tr(se.id, w);
            break;
          }
          case "timer": {
            be ? be.execTimerAction(se.id, se.action) : E(C(new Error("Incorrect timer action"), {
              additional: {
                id: se.id,
                action: se.action
              }
            }));
            break;
          }
          case "download": {
            er(se.url, b.typed, w);
            break;
          }
          case "video": {
            ft(se.id, se.action, w);
            break;
          }
          case "set_stored_value": {
            Mt(w, se.name, (Nt = se.value) == null ? void 0 : Nt.value, ($t = se.value) == null ? void 0 : $t.type, se.lifetime);
            break;
          }
          case "set_state": {
            await Tt(se.state_id, w);
            break;
          }
          case "submit": {
            await xt(w, se, b.typed);
            break;
          }
          case "scroll_to": {
            He(w, se);
            break;
          }
          case "scroll_by": {
            nt(w, se);
            break;
          }
          case "update_structure": {
            _v(w, ce, E, se);
            break;
          }
          case "custom": {
            pt({
              ...b,
              // todo remove in major release
              url: ""
            });
            break;
          }
          default:
            E(C(new Error("Unknown type of action"), { additional: { type: se.type } }));
        }
      else if (Ue)
        try {
          const Oe = Ue.replace(/div-action:\/\//, ""), Ft = /([^?]+)\?(.+)/.exec(Oe);
          if (!Ft)
            return;
          const it = new URLSearchParams(Ft[2]);
          switch (Ft[1]) {
            case "set_state":
              await Tt(it.get("state_id"), w);
              break;
            case "set_current_item":
            case "set_previous_item":
            case "set_next_item":
            case "scroll_to_start":
            case "scroll_to_end":
            case "scroll_backward":
            case "scroll_forward":
            case "scroll_to_position":
              Dt(Ft[1], it.get("id"), {
                item: it.get("item"),
                step: it.get("step"),
                overflow: it.get("overflow"),
                animated: it.get("animated")
              });
              break;
            case "set_variable":
              const Qt = it.get("name"), ur = it.get("value");
              if (Qt && ur !== null) {
                const nn = (w == null ? void 0 : w.getVariable(Qt)) || ce.get(Qt);
                nn ? nn.set(ur) : E(C(new Error("Cannot find variable"), { additional: { name: Qt } }));
              } else
                E(C(new Error("Incorrect set_variable_action"), { additional: { url: Oe } }));
              break;
            case "timer":
              const Ir = it.get("action"), Tr = it.get("id");
              be ? be.execTimerAction(Tr, Ir) : E(C(new Error("Incorrect timer action"), {
                additional: { id: Tr, action: Ir }
              }));
              break;
            case "video":
              ft(it.get("id"), it.get("action"), w);
              break;
            case "download":
              er(it.get("url"), b.download_callbacks, w);
              break;
            case "show_tooltip":
              zt(it.get("id"), it.get("multiple"), w);
              break;
            case "hide_tooltip":
              tr(it.get("id"), w);
              break;
            case "set_stored_value": {
              Mt(w, it.get("name"), it.get("value"), it.get("type"), it.get("lifetime"));
              break;
            }
            default:
              E(C(new Error("Unknown type of action"), { additional: { url: Ue } }));
          }
        } catch (Oe) {
          E(C(Oe, { additional: { url: Ue } }));
        }
    }
  }
  async function ct(f, b = {}) {
    var E;
    if (!f || !Array.isArray(f))
      return;
    const w = ((E = b.componentContext) == null ? void 0 : E.logError) || Be, z = (Ue) => b.componentContext ? b.componentContext.getJsonWithVars(Ue, b.additionalVars, !0) : Le(w, Ue, b.additionalVars, !0);
    for (let Ue = 0; Ue < f.length; ++Ue) {
      let se = z(f[Ue]);
      const Nt = se.is_enabled;
      if (Nt === 0 || Nt === !1)
        continue;
      const $t = se.url;
      if (se.typed)
        await It(se, f[Ue], b.componentContext);
      else if ($t) {
        const Ft = Nl($t);
        if (Ft)
          if (Bl(Ft, R)) {
            if (b.processUrls)
              if (se.target === "_blank") {
                const it = window.open("", "_blank");
                it && (it.opener = null, it.location = $t);
              } else
                location.href = $t;
          } else Ft === "div-action" ? (await It(se, f[Ue], b.componentContext), await Fn()) : se.log_id && (pt(se), await Fn());
      } else b.node && Array.isArray(se.menu_items) && se.menu_items.length && (Xe = {
        items: se.menu_items,
        node: b.node,
        componentContext: b.componentContext
      });
    }
    f.forEach((Ue) => {
      Ue.log_id && yt(b.logType || "click", Ue);
    });
  }
  function pt(f) {
    ae == null || ae(f);
  }
  function nr(f, b) {
    const w = (f == null ? void 0 : f.logError) || Be;
    if (!Array.isArray(b) || !b.length)
      return;
    const z = [];
    return b.forEach((E) => {
      let Ue = !1;
      if (typeof E.condition != "string") {
        w(C(new Error("variable_trigger has a condition that is not a string"), {
          additional: { condition: E.condition }
        }));
        return;
      }
      if (!Array.isArray(E.actions)) {
        w(C(new Error("variable_trigger has no actions"), {
          additional: { condition: E.condition }
        }));
        return;
      }
      const se = E.mode || "on_condition";
      if (se !== "on_variable" && se !== "on_condition") {
        w(C(new Error("variable_trigger has an unsupported mode"), { additional: { mode: se } }));
        return;
      }
      const $t = dt(w, { condition: E.condition }, {
        additionalVars: f == null ? void 0 : f.variables,
        customFunctions: f == null ? void 0 : f.customFunctions,
        emptyVarsError: () => {
          w(C(new Error("variable_trigger must have variables in the condition"), {
            additional: { condition: E.condition }
          }));
        }
      }).subscribe(async (Oe) => {
        Oe.condition !== void 0 && (// if condition is truthy
        Oe.condition && // and trigger mode matches
        (se === "on_variable" || se === "on_condition" && Ue === !1) ? (Ue = !!Oe.condition, f ? await f.execAnyActions(E.actions, { logType: "trigger" }) : await ct(E.actions, { logType: "trigger" })) : Ue = !!Oe.condition);
      });
      z.push($t);
    }), () => {
      z.forEach((E) => {
        E();
      });
    };
  }
  function O(f) {
    return ot[f];
  }
  function rr(f, b) {
    ot[f] = b;
  }
  const Jt = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Map(), ir = /* @__PURE__ */ new Map(), Kt = /* @__PURE__ */ new Map(), ne = /* @__PURE__ */ new Map();
  function ve(f, b, w = "error") {
    if (Jt.has(f)) {
      Be(C(new Error("Duplicate instance id"), {
        level: w,
        additional: { id: f }
      }));
      return;
    }
    Jt.set(f, b);
  }
  function Et(f) {
    Jt.delete(f);
  }
  function $(f) {
    if (!Jt.has(f)) {
      Be(C(new Error("Missing instance with id"), { additional: { id: f } }));
      return;
    }
    return Jt.get(f);
  }
  function y(f, b) {
    xe.set(f, b);
  }
  function U(f) {
    xe.delete(f);
  }
  function v(f, b) {
    ir.set(f, b);
  }
  function N(f) {
    ir.delete(f);
  }
  function Ae(f, b) {
    const w = b.id;
    w && (Kt.has(w) && Be(C(new Error("Duplicate tooltip id"), { additional: { id: w } })), Kt.set(w, { onwerNode: f, tooltip: b }));
  }
  function _t(f) {
    const b = f.id;
    b && (Kt.delete(b), De.some((w) => w.desc.id === b) && (De = De.filter((w) => w.desc.id !== b)));
  }
  function wt(f) {
    const b = lt.get(f) || Mn(void 0);
    return lt.has(f) || lt.set(f, b), b;
  }
  function Ct(f, b, w) {
    const z = pe.get(f);
    if (z)
      return z;
    const E = pn(f, b, w);
    return pe.set(f, E), E;
  }
  function _r() {
    if (!wr)
      return;
    wr[S].forEach((b) => {
      const w = ce.get(b.name);
      w && w.setValue(b.color);
    });
  }
  function s() {
    return R;
  }
  function ht(f, b) {
    const w = $e.get(f);
    if (w)
      return new w(b || {});
  }
  function Dr(f) {
    return {
      variables: Ln(ce, f.variables),
      derviedExpression(b) {
        return f.getDerivedFromVars(b);
      },
      processExpressions(b) {
        return f.getJsonWithVars(b);
      },
      execAction: Xt,
      logError: Be,
      getComponentProperty(b) {
        return f.getJsonWithVars(f.json[b]);
      },
      direction: te
    };
  }
  function ut(f, b) {
    const w = /* @__PURE__ */ new Map(), z = (b == null ? void 0 : b.logError) || Be;
    return f.forEach((E) => {
      if (w) {
        try {
          Jb(E);
        } catch (Nt) {
          z(C(Nt));
          return;
        }
        const Ue = E, se = w.get(Ue.name) || [];
        se.push(qb(Ue)), w.set(Ue.name, se);
      }
    }), w;
  }
  function ie(f) {
    const b = {
      id: "",
      json: {},
      path: [],
      templateContext: {},
      logError(w) {
        w.additional = w.additional || {}, w.additional.path = b.path.join("/"), Be(w);
      },
      execAnyActions(w, z = {}) {
        return ct(w, {
          componentContext: b,
          processUrls: z.processUrls,
          node: z.node,
          logType: z.logType,
          additionalVars: z.additionalVars
        });
      },
      getDerivedFromVars(w, z, E = !1, Ue = 1 / 0) {
        return dt(b.logError, w, {
          additionalVars: Ln(b.variables, z),
          keepComplex: E,
          customFunctions: b.customFunctions,
          maxDepth: Ue
        });
      },
      getJsonWithVars(w, z, E = !1) {
        return Le(b.logError, w, Ln(b.variables, z), E, b.customFunctions);
      },
      evalExpression(w, z, E) {
        return Ks(Ln(ce, b.variables), b.customFunctions, w, z, E);
      },
      produceChildContext(w, z = {}) {
        const E = ie(this);
        let Ue = w, se = this.templateContext;
        const { templateContext: Nt, json: $t } = jt(Ue, se);
        if (E.json = $t, E.templateContext = Nt, E.origJson = w, E.id = z.id || $t.id || "", E.id) {
          let it = ne.get(E.id);
          it || (it = /* @__PURE__ */ new Set(), ne.set(E.id, it)), it.add(E);
        }
        z.key && (E.key = z.key), z.path !== void 0 && E.path.push(String(z.path)), w.type && !z.isRootState && E.path.push(w.type), z.isTooltipRoot && (E.isTooltipRoot = !0);
        let Oe;
        Array.isArray($t.variables) ? (Oe = Ln(this.variables, Ln(z.variables, /* @__PURE__ */ new Map())), $t.variables.forEach((it) => {
          const Qt = zr(it, E, Oe);
          Qt && Oe && Oe.set(Qt.getName(), Qt);
        })) : z.variables ? Oe = Ln(this.variables, z.variables) : this.variables && (Oe = this.variables), E.variables = Oe;
        let Ft;
        return Array.isArray($t.functions) && (Ft = ut($t.functions, this)), E.customFunctions = Yb(this.customFunctions, Ft), Array.isArray($t.animators) && (E.animators = $t.animators.reduce(
          (it, Qt) => (Qt.id && (it[Qt.id] = Qt), it),
          {}
        )), z.fake && (E.fakeElement = z.fake), z.isRootState && (E.isRootState = !0), E;
      },
      dup(w) {
        return { ...b, fakeElement: w };
      },
      getVariable(w, z) {
        var Ue;
        const E = ((Ue = b.variables) == null ? void 0 : Ue.get(w)) || ce.get(w);
        if (E) {
          const se = E.getType();
          if (z && se !== z) {
            b.logError(C(new Error(`Variable should have type "${z}"`), { additional: { name: w, foundType: se } }));
            return;
          }
        }
        return E;
      },
      getAnimator(w) {
        var z, E;
        return ((z = b.animators) == null ? void 0 : z[w]) || ((E = b.parent) == null ? void 0 : E.getAnimator(w)) || void 0;
      },
      registerState(w, z) {
        const E = uv(b.parent);
        return E && (E.states = E.states || {}, E.states[w] = E.states[w] || [], E.states[w].push(z)), () => {
          var Ue;
          (Ue = E == null ? void 0 : E.states) != null && Ue[w] && (E.states[w] = E.states[w].filter((se) => se !== z), E.states[w].length || delete E.states[w]);
        };
      },
      registerPager(w) {
        const z = b.parent;
        return z ? (z.pagers = z.pagers || /* @__PURE__ */ new Map(), z.pagers.has(w) ? {
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          update() {
          },
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          destroy() {
          }
        } : (z.pagers.set(w, null), {
          update(E) {
            var $t, Oe;
            z.pagers && z.pagers.set(w, E);
            const Ue = w ? ($t = z.pagerListeners) == null ? void 0 : $t.get(w) : void 0, se = (Oe = z.pagerListeners) == null ? void 0 : Oe.get(void 0);
            [...Ue || [], ...se || []].forEach((Ft) => {
              Ft(E);
            });
          },
          destroy() {
            z.pagers && z.pagers.delete(w);
          }
        })) : {
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          update() {
          },
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          destroy() {
          }
        };
      },
      listenPager(w, z) {
        var $t, Oe, Ft;
        let E = b.parent;
        for (; E && !(E.pagers && (w ? E.pagers.get(w) : ($t = E.pagers) != null && $t.size)); )
          E = E.parent;
        if (!E)
          return () => {
          };
        E.pagerListeners = b.pagerListeners || /* @__PURE__ */ new Map();
        const Ue = E.pagerListeners.get(w) || [];
        E.pagerListeners.has(w) || E.pagerListeners.set(w, Ue), Ue.push(z);
        const se = w || ((Oe = E.pagers) == null ? void 0 : Oe.keys().next().value) || void 0, Nt = (Ft = E.pagers) == null ? void 0 : Ft.get(se);
        return Nt && z(Nt), () => {
          if (!E.pagerListeners)
            return;
          let it = E.pagerListeners.get(se);
          it && (it = it.filter((Qt) => Qt !== z) || [], it.length ? E.pagerListeners.set(w, it) : E.pagerListeners.delete(w));
        };
      },
      destroy() {
        const w = ne.get(b.id);
        w && (w.delete(b), w.size || ne.delete(b.id));
      }
    };
    return f ? (b.parent = f, b.path = f.path.slice(), f.fakeElement && (b.fakeElement = f.fakeElement)) : (b.json = { type: "root" }, b.isRootState = !0), b;
  }
  function P(f) {
    Se ? q.push(f) : clearTimeout(f);
  }
  fi($r, {
    logStat: yt,
    hasTemplate: Ut,
    genId: ge,
    genClass: we,
    execCustomAction: pt,
    processVariableTriggers: nr,
    isRunning: O,
    setRunning: rr,
    pagerChildrenClipEnabled: Ve,
    pagerMouseDragEnabled: Fe,
    registerInstance: ve,
    unregisterInstance: Et,
    registerParentOf: y,
    unregisterParentOf: U,
    registerTooltip: Ae,
    unregisterTooltip: _t,
    onTooltipClose: rn,
    tooltipRoot: _e,
    registerFocusable: v,
    unregisterFocusable: N,
    addSvgFilter: St,
    removeSvgFilter: qe,
    registerId: Ie,
    getComponentId: rt,
    preparePrototypeVariables: tt,
    getCustomization: Ye,
    getBuiltinProtocols: s,
    getExtension: ht,
    getExtensionContext: Dr,
    registerTimeout: P,
    typefaceProvider: le,
    isDesktop: je,
    isPointerFocus: Xs,
    customComponents: de,
    direction: H,
    videoPlayerProvider: We,
    awaitGlobalVariable: Ct,
    componentDevtool: void 0,
    devtoolCreateHierarchy: "lazy"
  }), fi(Pn, {
    hasAction() {
      return !1;
    }
  }), fi(Rs, {
    runVisibilityTransition(f, b, w, z, E) {
      return Promise.resolve();
    },
    registerChildWithTransitionIn(f, b, w, z) {
      return Promise.resolve();
    },
    registerChildWithTransitionOut(f, b, w, z) {
      return Promise.resolve();
    },
    registerChildWithTransitionChange(f, b, w, z) {
      return Promise.resolve();
    },
    hasTransitionChange(f) {
      return !1;
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    registerChild(f) {
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    unregisterChild(f) {
    }
  }), fi(Ls, { isEnabled: Hn(!0) });
  function ar(f, b) {
    const w = ce.get(f);
    return (w == null ? void 0 : w.getType()) === b;
  }
  function yr(f, b) {
    const w = ce.get(f);
    w ? w.setValue(b) : Be(C(new Error("Cannot find variable"), { additional: { name: f } }));
  }
  function Bt(f, b, w) {
    const z = (b == null ? void 0 : b.logError) || Be, E = f.name, Ue = f.value_type;
    if (typeof f.get != "string" || !f.get) {
      z(C(new Error("Incorrect property getter"), { additional: { name: E } }));
      return;
    }
    if (!E) {
      z(C(new Error("Missing property name")));
      return;
    }
    if (!Ue) {
      z(C(new Error("Missing property value_type")));
      return;
    }
    const se = b ? b.getDerivedFromVars(f.get, void 0, !0) : dt(Be, f.get, { keepComplex: !0 });
    if (bs(se) === void 0)
      return;
    const $t = (Oe) => {
      const Ft = xo(f.new_value_variable_name || "new_value", f.value_type, Oe), it = new Map(w);
      it.set(Ft.getName(), Ft), Array.isArray(f.set) && f.set.length ? b ? b.execAnyActions(f.set, { additionalVars: it }) : ct(f.set, { additionalVars: it }) : z(C(new Error("Cannot set property. No setters provided."), { additional: { name: E } }));
    };
    return {
      getName() {
        return E;
      },
      subscribe(Oe) {
        return se.subscribe(Oe);
      },
      set(Oe) {
        const Ft = Zg(Oe, Ue);
        $t(Ft);
      },
      setValue: $t,
      getValue() {
        return bs(se);
      },
      getType() {
        return Ue;
      }
    };
  }
  function zr(f, b, w) {
    if (f.type === "property")
      return Bt(f, b, w);
    if (!f.type || !f.name || !(f.type in Es) || !("value" in f))
      return;
    const z = f.value;
    let E = b ? b.getJsonWithVars(z, w, !0) : Le(Be, z, w, !0);
    if (!(z && typeof z == "string" && E === void 0)) {
      f.type === "integer" && typeof E == "number" && (E > Number.MAX_SAFE_INTEGER || E < Number.MIN_SAFE_INTEGER) && Be(C(new Error("The value of the integer variable could lose accuracy"), {
        level: "warn",
        additional: { name: f.name, value: E }
      }));
      try {
        return pn(f.name, f.type, E);
      } catch (Ue) {
        Be(C(Ue, { additional: { name: f.name } }));
      }
    }
  }
  function lr(f) {
    const b = zr(f);
    b && (ze.set(f.name, b), ce.set(f.name, b));
  }
  for (const [f, b] of Ce)
    ce.has(f) || ce.set(f, b);
  const st = (Ur = k == null ? void 0 : k.card) == null ? void 0 : Ur.variables;
  Array.isArray(st) && st.forEach((f) => {
    if (f && f.name) {
      if (ze.has(f.name)) {
        Be(C(new Error("Duplicate variable"), { additional: { name: f.name } }));
        return;
      }
      lr(f);
    }
  });
  const wr = k.palette;
  wr && wr[S].forEach((b) => {
    if (ze.has(b.name)) {
      Be(C(new Error("Duplicate variable"), { additional: { name: b.name } }));
      return;
    }
    try {
      const w = pn(b.name, "color", b.color);
      ze.set(b.name, w), ce.set(b.name, w);
    } catch (w) {
      Be(C(w, { additional: { name: b.name } }));
    }
  }), K.subscribe((f) => {
    if (f && !ce.has(f)) {
      const b = Ce.get(f);
      ce.set(f, b);
      const w = lt.get(f);
      if (w) {
        let E = 0;
        b.subscribe(() => {
          w.set(++E);
        });
      }
      const z = pe.get(f);
      z && z.getType() === b.getType() && b.subscribe((E) => {
        z.set(E);
      });
    }
  });
  const Hr = (Or = k == null ? void 0 : k.card) == null ? void 0 : Or.timers;
  if (Hr && typeof document < "u") {
    const f = be = new tv({
      logError: Be,
      applyVars: (b) => Le(Be, b),
      hasVariableWithType: ar,
      setVariableValue: yr,
      execAnyActions: ct
    });
    Hr.forEach((b) => f.createTimer(b));
  }
  const cr = ie();
  Array.isArray((qr = k.card) == null ? void 0 : qr.functions) && (cr.customFunctions = ut(k.card.functions));
  let G;
  function rn(f) {
    De = De.filter((b) => b.internalId !== f);
  }
  Pr(() => {
    Se = !1, Dl--, Dl || (window.removeEventListener("keydown", Mv), window.removeEventListener("pointerdown", Pv));
    for (const [f, b] of Ze)
      b.stop();
    be && be.destroy(), De.forEach((f) => {
      f.timeoutId && (clearTimeout(f.timeoutId), f.timeoutId = null);
    }), q.forEach((f) => {
      clearTimeout(f);
    });
  }), t.id === void 0 && e.id && _ !== void 0 && e.id(_), t.json === void 0 && e.json && k !== void 0 && e.json(k), t.platform === void 0 && e.platform && I !== void 0 && e.platform(I), t.theme === void 0 && e.theme && T !== void 0 && e.theme(T), t.globalVariablesController === void 0 && e.globalVariablesController && D !== void 0 && e.globalVariablesController(D), t.mix === void 0 && e.mix && B !== void 0 && e.mix(B), t.customization === void 0 && e.customization && V !== void 0 && e.customization(V), t.builtinProtocols === void 0 && e.builtinProtocols && A !== void 0 && e.builtinProtocols(A), t.extensions === void 0 && e.extensions && $e !== void 0 && e.extensions($e), t.onError === void 0 && e.onError && Y !== void 0 && e.onError(Y), t.onStat === void 0 && e.onStat && ue !== void 0 && e.onStat(ue), t.onSubmit === void 0 && e.onSubmit && Z !== void 0 && e.onSubmit(Z), t.onCustomAction === void 0 && e.onCustomAction && ae !== void 0 && e.onCustomAction(ae), t.onComponent === void 0 && e.onComponent && ke !== void 0 && e.onComponent(ke), t.typefaceProvider === void 0 && e.typefaceProvider && le !== void 0 && e.typefaceProvider(le), t.fetchInit === void 0 && e.fetchInit && Q !== void 0 && e.fetchInit(Q), t.tooltipRoot === void 0 && e.tooltipRoot && _e !== void 0 && e.tooltipRoot(_e), t.customComponents === void 0 && e.customComponents && de !== void 0 && e.customComponents(de), t.direction === void 0 && e.direction && te !== void 0 && e.direction(te), t.store === void 0 && e.store && me !== void 0 && e.store(me), t.pagerChildrenClipEnabled === void 0 && e.pagerChildrenClipEnabled && Ve !== void 0 && e.pagerChildrenClipEnabled(Ve), t.pagerMouseDragEnabled === void 0 && e.pagerMouseDragEnabled && Fe !== void 0 && e.pagerMouseDragEnabled(Fe), t.weekStartDay === void 0 && e.weekStartDay && L !== void 0 && e.weekStartDay(L), t.videoPlayerProvider === void 0 && e.videoPlayerProvider && We !== void 0 && e.videoPlayerProvider(We), t.devtoolCreateHierarchy === void 0 && e.devtoolCreateHierarchy && Ne !== void 0 && e.devtoolCreateHierarchy(Ne), t.setTheme === void 0 && e.setTheme && ye !== void 0 && e.setTheme(ye), t.getDebugVariables === void 0 && e.getDebugVariables && Ke !== void 0 && e.getDebugVariables(Ke), t.getDebugAllVariables === void 0 && e.getDebugAllVariables && Ge !== void 0 && e.getDebugAllVariables(Ge), t.setData === void 0 && e.setData && Me !== void 0 && e.setData(Me), t.applyPatch === void 0 && e.applyPatch && Pe !== void 0 && e.applyPatch(Pe), t.execAction === void 0 && e.execAction && Xt !== void 0 && e.execAction(Xt), T === "light" || T === "dark" ? S = T : T === "system" ? typeof matchMedia < "u" ? (fe || (fe = matchMedia("(prefers-color-scheme: dark)"), fe.addListener(re)), S = fe.matches ? "dark" : "light") : S = "light" : Be(C(new Error("Unsupported theme"))), S && _r();
  {
    Te = !1;
    const f = Kb(k);
    f && (Te = !0, Be(f));
  }
  if (i = k.templates || {}, (jr = k == null ? void 0 : k.card) != null && jr.variables && Array.isArray(k.card.variables) && k.card.variables !== st && k.card.variables.forEach((f) => {
    f && f.name && !ze.has(f.name) && !ce.has(f.name) && lr(f);
  }), o = (Qr = k == null ? void 0 : k.card) == null ? void 0 : Qr.states, o && !Te && !oe) {
    const f = {
      type: "state",
      id: "root",
      width: { type: "match_parent" },
      height: { type: "match_parent" },
      states: o.map((b) => ({
        state_id: b.state_id.toString(),
        div: b.div
      }))
    };
    G = cr.produceChildContext(f, { isRootState: !0 });
  }
  return c(), d(), `${!Te && !oe && G ? `<div class="${gt(Jr.root, !0) + gt(a ? ` ${Jr.root_platform_desktop}` : "", !0) + gt(B ? ` ${B}` : "", !0)}"${m("dir", g, 0)}>${Wt(nh, "RootSvgFilters").$$render(r, { svgFiltersMap: Vt }, {}, {})} ${Wt(gn, "Unknown").$$render(
    r,
    {
      componentContext: G
    },
    {},
    {}
  )} ${De ? `${Vr(De, (f) => `${Wt(Cv, "TooltipView").$$render(
    r,
    {
      ownerNode: f.ownerNode,
      data: f.desc,
      internalId: f.internalId,
      parentComponentContext: f.componentContext || G
    },
    {},
    {}
  )}`)}` : ""} ${Xe ? `${Wt(Tv, "Menu").$$render(
    r,
    {
      ownerNode: Xe.node,
      items: Xe.items,
      parentComponentContext: Xe.componentContext || G
    },
    {},
    {}
  )}` : ""}</div>` : ""}`;
});
function Lv(r) {
  return Nv.render(r).html;
}
export {
  Rv as createGlobalVariablesController,
  pn as createVariable,
  Lv as render
};
//# sourceMappingURL=server.mjs.map
