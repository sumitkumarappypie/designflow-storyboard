var C_ = Object.defineProperty;
var E_ = (e, r, t) => r in e ? C_(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var Vr = (e, r, t) => E_(e, typeof r != "symbol" ? r + "" : r, t);
/*!
    DivKit v32.39.0
    https://github.com/divkit/divkit
    @licence Apache-2.0
*/
function v() {
}
const rl = (e) => e;
function jo(e, r) {
  for (const t in r) e[t] = r[t];
  return (
    /** @type {T & S} */
    e
  );
}
function ld(e) {
  return e();
}
function Da() {
  return /* @__PURE__ */ Object.create(null);
}
function Rr(e) {
  e.forEach(ld);
}
function zr(e) {
  return typeof e == "function";
}
function A_(e, r) {
  return e != e ? r == r : e !== r || e && typeof e == "object" || typeof e == "function";
}
let ds;
function Xn(e, r) {
  return e === r ? !0 : (ds || (ds = document.createElement("a")), ds.href = r, e === ds.href);
}
function Sr(e, r) {
  return e != e ? r == r : e !== r;
}
function S_(e) {
  return Object.keys(e).length === 0;
}
function E(e, ...r) {
  if (e == null) {
    for (const n of r)
      n(void 0);
    return v;
  }
  const t = e.subscribe(...r);
  return t.unsubscribe ? () => t.unsubscribe() : t;
}
function Nl(e) {
  let r;
  return E(e, (t) => r = t)(), r;
}
function mn(e, r, t) {
  e.$$.on_destroy.push(E(r, t));
}
function nl(e, r, t, n) {
  if (e) {
    const o = ad(e, r, t, n);
    return e[0](o);
  }
}
function ad(e, r, t, n) {
  return e[1] && n ? jo(t.ctx.slice(), e[1](n(r))) : t.ctx;
}
function ol(e, r, t, n) {
  if (e[2] && n) {
    const o = e[2](n(t));
    if (r.dirty === void 0)
      return o;
    if (typeof o == "object") {
      const i = [], s = Math.max(r.dirty.length, o.length);
      for (let a = 0; a < s; a += 1)
        i[a] = r.dirty[a] | o[a];
      return i;
    }
    return r.dirty | o;
  }
  return r.dirty;
}
function il(e, r, t, n, o, i) {
  if (o) {
    const s = ad(r, t, n, i);
    e.p(s, o);
  }
}
function sl(e) {
  if (e.ctx.length > 32) {
    const r = [], t = e.ctx.length / 32;
    for (let n = 0; n < t; n++)
      r[n] = -1;
    return r;
  }
  return -1;
}
function kl(e, r, t) {
  return e.set(t), r;
}
function ll(e) {
  return e && zr(e.destroy) ? e.destroy : v;
}
function Ia(e) {
  const r = typeof e == "string" && e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return r ? [parseFloat(r[1]), r[2] || "px"] : [
    /** @type {number} */
    e,
    "px"
  ];
}
const ud = typeof window < "u";
let la = ud ? () => window.performance.now() : () => Date.now(), aa = ud ? (e) => requestAnimationFrame(e) : v;
const Pi = /* @__PURE__ */ new Set();
function cd(e) {
  Pi.forEach((r) => {
    r.c(e) || (Pi.delete(r), r.f());
  }), Pi.size !== 0 && aa(cd);
}
function ua(e) {
  let r;
  return Pi.size === 0 && aa(cd), {
    promise: new Promise((t) => {
      Pi.add(r = { c: e, f: t });
    }),
    abort() {
      Pi.delete(r);
    }
  };
}
const Po = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
function wt(e, r) {
  e.appendChild(r);
}
function fd(e) {
  if (!e) return document;
  const r = e.getRootNode ? e.getRootNode() : e.ownerDocument;
  return r && /** @type {ShadowRoot} */
  r.host ? (
    /** @type {ShadowRoot} */
    r
  ) : e.ownerDocument;
}
function V_(e) {
  const r = Pe("style");
  return r.textContent = "/* empty */", F_(fd(e), r), r.sheet;
}
function F_(e, r) {
  return wt(
    /** @type {Document} */
    e.head || e,
    r
  ), r.sheet;
}
function K(e, r, t) {
  e.insertBefore(r, t || null);
}
function J(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function un(e, r) {
  for (let t = 0; t < e.length; t += 1)
    e[t] && e[t].d(r);
}
function Pe(e) {
  return document.createElement(e);
}
function rn(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function Nn(e) {
  return document.createTextNode(e);
}
function _r() {
  return Nn(" ");
}
function or() {
  return Nn("");
}
function Qe(e, r, t, n) {
  return e.addEventListener(r, t, n), () => e.removeEventListener(r, t, n);
}
function D_(e) {
  return function(r) {
    return r.preventDefault(), e.call(this, r);
  };
}
function g(e, r, t) {
  t == null ? e.removeAttribute(r) : e.getAttribute(r) !== t && e.setAttribute(r, t);
}
const I_ = ["width", "height"];
function qo(e, r) {
  const t = Object.getOwnPropertyDescriptors(e.__proto__);
  for (const n in r)
    r[n] == null ? e.removeAttribute(n) : n === "style" ? e.style.cssText = r[n] : n === "__value" ? e.value = e[n] = r[n] : t[n] && t[n].set && I_.indexOf(n) === -1 ? e[n] = r[n] : g(e, n, r[n]);
}
function T_(e, r) {
  Object.keys(r).forEach((t) => {
    M_(e, t, r[t]);
  });
}
function M_(e, r, t) {
  const n = r.toLowerCase();
  n in e ? e[n] = typeof e[n] == "boolean" && t === "" ? !0 : t : r in e ? e[r] = typeof e[r] == "boolean" && t === "" ? !0 : t : g(e, r, t);
}
function ri(e) {
  return /-/.test(e) ? T_ : qo;
}
function P_(e) {
  return Array.from(e.childNodes);
}
function Jn(e, r) {
  r = "" + r, e.data !== r && (e.data = /** @type {string} */
  r);
}
function Ta(e, r) {
  e.value = r == null ? "" : r;
}
function I(e, r, t, n) {
  t == null ? e.style.removeProperty(r) : e.style.setProperty(r, t, "");
}
function Ma(e, r, t) {
  for (let n = 0; n < e.options.length; n += 1) {
    const o = e.options[n];
    if (o.__value === r) {
      o.selected = !0;
      return;
    }
  }
  (!t || r !== void 0) && (e.selectedIndex = -1);
}
function N_(e) {
  const r = e.querySelector(":checked");
  return r && r.__value;
}
function dd(e, r, { bubbles: t = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(e, { detail: r, bubbles: t, cancelable: n });
}
function Pa(e, r) {
  return new e(r);
}
const Ws = /* @__PURE__ */ new Map();
let Us = 0;
function z_(e) {
  let r = 5381, t = e.length;
  for (; t--; ) r = (r << 5) - r ^ e.charCodeAt(t);
  return r >>> 0;
}
function L_(e, r) {
  const t = { stylesheet: V_(r), rules: {} };
  return Ws.set(e, t), t;
}
function Gs(e, r, t, n, o, i, s, a = 0) {
  const l = 16.666 / n;
  let u = `{
`;
  for (let w = 0; w <= 1; w += l) {
    const k = r + (t - r) * i(w);
    u += w * 100 + `%{${s(k, 1 - k)}}
`;
  }
  const c = u + `100% {${s(t, 1 - t)}}
}`, f = `__svelte_${z_(c)}_${a}`, _ = fd(e), { stylesheet: h, rules: m } = Ws.get(_) || L_(_, e);
  m[f] || (m[f] = !0, h.insertRule(`@keyframes ${f} ${c}`, h.cssRules.length));
  const p = e.style.animation || "";
  return e.style.animation = `${p ? `${p}, ` : ""}${f} ${n}ms linear ${o}ms 1 both`, Us += 1, f;
}
function Js(e, r) {
  const t = (e.style.animation || "").split(", "), n = t.filter(
    r ? (i) => i.indexOf(r) < 0 : (i) => i.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), o = t.length - n.length;
  o && (e.style.animation = n.join(", "), Us -= o, Us || O_());
}
function O_() {
  aa(() => {
    Us || (Ws.forEach((e) => {
      const { ownerNode: r } = e.stylesheet;
      r && J(r);
    }), Ws.clear());
  });
}
let os;
function rs(e) {
  os = e;
}
function Wi() {
  if (!os) throw new Error("Function called outside component initialization");
  return os;
}
function Qn(e) {
  Wi().$$.on_mount.push(e);
}
function al(e) {
  Wi().$$.after_update.push(e);
}
function ln(e) {
  Wi().$$.on_destroy.push(e);
}
function B_() {
  const e = Wi();
  return (r, t, { cancelable: n = !1 } = {}) => {
    const o = e.$$.callbacks[r];
    if (o) {
      const i = dd(
        /** @type {string} */
        r,
        t,
        { cancelable: n }
      );
      return o.slice().forEach((s) => {
        s.call(e, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function hi(e, r) {
  return Wi().$$.context.set(e, r), r;
}
function Tr(e) {
  return Wi().$$.context.get(e);
}
function On(e, r) {
  const t = e.$$.callbacks[r.type];
  t && t.slice().forEach((n) => n.call(this, r));
}
const Ii = [], Fr = [];
let Ni = [];
const Na = [], _d = /* @__PURE__ */ Promise.resolve();
let zl = !1;
function pd() {
  zl || (zl = !0, _d.then(gd));
}
function An() {
  return pd(), _d;
}
function _o(e) {
  Ni.push(e);
}
const vl = /* @__PURE__ */ new Set();
let Vi = 0;
function gd() {
  if (Vi !== 0)
    return;
  const e = os;
  do {
    try {
      for (; Vi < Ii.length; ) {
        const r = Ii[Vi];
        Vi++, rs(r), R_(r.$$);
      }
    } catch (r) {
      throw Ii.length = 0, Vi = 0, r;
    }
    for (rs(null), Ii.length = 0, Vi = 0; Fr.length; ) Fr.pop()();
    for (let r = 0; r < Ni.length; r += 1) {
      const t = Ni[r];
      vl.has(t) || (vl.add(t), t());
    }
    Ni.length = 0;
  } while (Ii.length);
  for (; Na.length; )
    Na.pop()();
  zl = !1, vl.clear(), rs(e);
}
function R_(e) {
  if (e.fragment !== null) {
    e.update(), Rr(e.before_update);
    const r = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, r), e.after_update.forEach(_o);
  }
}
function H_(e) {
  const r = [], t = [];
  Ni.forEach((n) => e.indexOf(n) === -1 ? r.push(n) : t.push(n)), t.forEach((n) => n()), Ni = r;
}
let $i;
function ca() {
  return $i || ($i = Promise.resolve(), $i.then(() => {
    $i = null;
  })), $i;
}
function bi(e, r, t) {
  e.dispatchEvent(dd(`${r ? "intro" : "outro"}${t}`));
}
const Cs = /* @__PURE__ */ new Set();
let Do;
function pr() {
  Do = {
    r: 0,
    c: [],
    p: Do
    // parent group
  };
}
function gr() {
  Do.r || Rr(Do.c), Do = Do.p;
}
function W(e, r) {
  e && e.i && (Cs.delete(e), e.i(r));
}
function ne(e, r, t, n) {
  if (e && e.o) {
    if (Cs.has(e)) return;
    Cs.add(e), Do.c.push(() => {
      Cs.delete(e), n && (t && e.d(1), n());
    }), e.o(r);
  } else n && n();
}
const fa = { duration: 0 };
function ul(e, r, t) {
  const n = { direction: "in" };
  let o = r(e, t, n), i = !1, s, a, l = 0;
  function u() {
    s && Js(e, s);
  }
  function c() {
    const {
      delay: _ = 0,
      duration: h = 300,
      easing: m = rl,
      tick: p = v,
      css: w
    } = o || fa;
    w && (s = Gs(e, 0, 1, h, _, m, w, l++)), p(0, 1);
    const k = la() + _, N = k + h;
    a && a.abort(), i = !0, _o(() => bi(e, !0, "start")), a = ua((B) => {
      if (i) {
        if (B >= N)
          return p(1, 0), bi(e, !0, "end"), u(), i = !1;
        if (B >= k) {
          const z = m((B - k) / h);
          p(z, 1 - z);
        }
      }
      return i;
    });
  }
  let f = !1;
  return {
    start() {
      f || (f = !0, Js(e), zr(o) ? (o = o(n), ca().then(c)) : c());
    },
    invalidate() {
      f = !1;
    },
    end() {
      i && (u(), i = !1);
    }
  };
}
function hd(e, r, t) {
  const n = { direction: "out" };
  let o = r(e, t, n), i = !0, s;
  const a = Do;
  a.r += 1;
  let l;
  function u() {
    const {
      delay: c = 0,
      duration: f = 300,
      easing: _ = rl,
      tick: h = v,
      css: m
    } = o || fa;
    m && (s = Gs(e, 1, 0, f, c, _, m));
    const p = la() + c, w = p + f;
    _o(() => bi(e, !1, "start")), "inert" in e && (l = /** @type {HTMLElement} */
    e.inert, e.inert = !0), ua((k) => {
      if (i) {
        if (k >= w)
          return h(0, 1), bi(e, !1, "end"), --a.r || Rr(a.c), !1;
        if (k >= p) {
          const N = _((k - p) / f);
          h(1 - N, N);
        }
      }
      return i;
    });
  }
  return zr(o) ? ca().then(() => {
    o = o(n), u();
  }) : u(), {
    end(c) {
      c && "inert" in e && (e.inert = l), c && o.tick && o.tick(1, 0), i && (s && Js(e, s), i = !1);
    }
  };
}
function za(e, r, t, n) {
  let i = r(e, t, { direction: "both" }), s = n ? 0 : 1, a = null, l = null, u = null, c;
  function f() {
    u && Js(e, u);
  }
  function _(m, p) {
    const w = (
      /** @type {Program['d']} */
      m.b - s
    );
    return p *= Math.abs(w), {
      a: s,
      b: m.b,
      d: w,
      duration: p,
      start: m.start,
      end: m.start + p,
      group: m.group
    };
  }
  function h(m) {
    const {
      delay: p = 0,
      duration: w = 300,
      easing: k = rl,
      tick: N = v,
      css: B
    } = i || fa, z = {
      start: la() + p,
      b: m
    };
    m || (z.group = Do, Do.r += 1), "inert" in e && (m ? c !== void 0 && (e.inert = c) : (c = /** @type {HTMLElement} */
    e.inert, e.inert = !0)), a || l ? l = z : (B && (f(), u = Gs(e, s, m, w, p, k, B)), m && N(0, 1), a = _(z, w), _o(() => bi(e, m, "start")), ua((oe) => {
      if (l && oe > l.start && (a = _(l, w), l = null, bi(e, a.b, "start"), B && (f(), u = Gs(
        e,
        s,
        a.b,
        a.duration,
        0,
        k,
        i.css
      ))), a) {
        if (oe >= a.end)
          N(s = a.b, 1 - s), bi(e, a.b, "end"), l || (a.b ? f() : --a.group.r || Rr(a.group.c)), a = null;
        else if (oe >= a.start) {
          const fe = oe - a.start;
          s = a.a + a.d * k(fe / a.duration), N(s, 1 - s);
        }
      }
      return !!(a || l);
    }));
  }
  return {
    run(m) {
      zr(i) ? ca().then(() => {
        i = i({ direction: m ? "in" : "out" }), h(m);
      }) : h(m);
    },
    end() {
      f(), a = l = null;
    }
  };
}
function ur(e) {
  return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
}
function md(e, r) {
  ne(e, 1, 1, () => {
    r.delete(e.key);
  });
}
function bd(e, r, t, n, o, i, s, a, l, u, c, f) {
  let _ = e.length, h = i.length, m = _;
  const p = {};
  for (; m--; ) p[e[m].key] = m;
  const w = [], k = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), B = [];
  for (m = h; m--; ) {
    const T = f(o, i, m), Y = t(T);
    let le = s.get(Y);
    le ? B.push(() => le.p(T, r)) : (le = u(Y, T), le.c()), k.set(Y, w[m] = le), Y in p && N.set(Y, Math.abs(m - p[Y]));
  }
  const z = /* @__PURE__ */ new Set(), oe = /* @__PURE__ */ new Set();
  function fe(T) {
    W(T, 1), T.m(a, c), s.set(T.key, T), c = T.first, h--;
  }
  for (; _ && h; ) {
    const T = w[h - 1], Y = e[_ - 1], le = T.key, A = Y.key;
    T === Y ? (c = T.first, _--, h--) : k.has(A) ? !s.has(le) || z.has(le) ? fe(T) : oe.has(A) ? _-- : N.get(le) > N.get(A) ? (oe.add(le), fe(T)) : (z.add(A), _--) : (l(Y, s), _--);
  }
  for (; _--; ) {
    const T = e[_];
    k.has(T.key) || l(T, s);
  }
  for (; h; ) fe(w[h - 1]);
  return Rr(B), w;
}
function No(e, r) {
  const t = {}, n = {}, o = { $$scope: 1 };
  let i = e.length;
  for (; i--; ) {
    const s = e[i], a = r[i];
    if (a) {
      for (const l in s)
        l in a || (n[l] = 1);
      for (const l in a)
        o[l] || (t[l] = a[l], o[l] = 1);
      e[i] = a;
    } else
      for (const l in s)
        o[l] = 1;
  }
  for (const s in n)
    s in t || (t[s] = void 0);
  return t;
}
function yd(e) {
  return typeof e == "object" && e !== null ? e : {};
}
function Wt(e) {
  e && e.c();
}
function Ot(e, r, t) {
  const { fragment: n, after_update: o } = e.$$;
  n && n.m(r, t), _o(() => {
    const i = e.$$.on_mount.map(ld).filter(zr);
    e.$$.on_destroy ? e.$$.on_destroy.push(...i) : Rr(i), e.$$.on_mount = [];
  }), o.forEach(_o);
}
function Bt(e, r) {
  const t = e.$$;
  t.fragment !== null && (H_(t.after_update), Rr(t.on_destroy), t.fragment && t.fragment.d(r), t.on_destroy = t.fragment = null, t.ctx = []);
}
function W_(e, r) {
  e.$$.dirty[0] === -1 && (Ii.push(e), pd(), e.$$.dirty.fill(0)), e.$$.dirty[r / 31 | 0] |= 1 << r % 31;
}
function Lr(e, r, t, n, o, i, s = null, a = [-1]) {
  const l = os;
  rs(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: v,
    not_equal: o,
    bound: Da(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(r.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: Da(),
    dirty: a,
    skip_bound: !1,
    root: r.target || l.$$.root
  };
  s && s(u.root);
  let c = !1;
  if (u.ctx = t ? t(e, r.props || {}, (f, _, ...h) => {
    const m = h.length ? h[0] : _;
    return u.ctx && o(u.ctx[f], u.ctx[f] = m) && (!u.skip_bound && u.bound[f] && u.bound[f](m), c && W_(e, f)), _;
  }) : [], u.update(), c = !0, Rr(u.before_update), u.fragment = n ? n(u.ctx) : !1, r.target) {
    if (r.hydrate) {
      const f = P_(r.target);
      u.fragment && u.fragment.l(f), f.forEach(J);
    } else
      u.fragment && u.fragment.c();
    r.intro && W(e.$$.fragment), Ot(e, r.target, r.anchor), gd();
  }
  rs(l);
}
class Or {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Vr(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    Vr(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Bt(this, 1), this.$destroy = v;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(r, t) {
    if (!zr(t))
      return v;
    const n = this.$$.callbacks[r] || (this.$$.callbacks[r] = []);
    return n.push(t), () => {
      const o = n.indexOf(t);
      o !== -1 && n.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(r) {
    this.$$set && !S_(r) && (this.$$.skip_bound = !0, this.$$set(r), this.$$.skip_bound = !1);
  }
}
const U_ = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(U_);
const Fi = [];
function G_(e, r) {
  return {
    subscribe: Io(e, r).subscribe
  };
}
function Io(e, r = v) {
  let t;
  const n = /* @__PURE__ */ new Set();
  function o(a) {
    if (A_(e, a) && (e = a, t)) {
      const l = !Fi.length;
      for (const u of n)
        u[1](), Fi.push(u, e);
      if (l) {
        for (let u = 0; u < Fi.length; u += 2)
          Fi[u][0](Fi[u + 1]);
        Fi.length = 0;
      }
    }
  }
  function i(a) {
    o(a(e));
  }
  function s(a, l = v) {
    const u = [a, l];
    return n.add(u), n.size === 1 && (t = r(o, i) || v), a(e), () => {
      n.delete(u), n.size === 0 && t && (t(), t = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
function Ui(e, r, t) {
  const n = !Array.isArray(e), o = n ? [e] : e;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = r.length < 2;
  return G_(t, (s, a) => {
    let l = !1;
    const u = [];
    let c = 0, f = v;
    const _ = () => {
      if (c)
        return;
      f();
      const m = r(n ? u[0] : u, s, a);
      i ? s(m) : f = zr(m) ? m : v;
    }, h = o.map(
      (m, p) => E(
        m,
        (w) => {
          u[p] = w, c &= ~(1 << p), l && _();
        },
        () => {
          c |= 1 << p;
        }
      )
    );
    return l = !0, _(), function() {
      Rr(h), f(), l = !1;
    };
  });
}
const J_ = "appkit-root_platform_desktop", K_ = "appkit-root__clickable", q_ = "appkit-root", Y_ = "appkit-root__selectable", X_ = "appkit-root__unselectable", Ar = {
  root_platform_desktop: J_,
  root__clickable: K_,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  "root__any-actions": "appkit-root__any-actions",
  root: q_,
  root__selectable: Y_,
  root__unselectable: X_,
  "root__only-desktop": "appkit-root__only-desktop",
  "root_restrict-scroll": "appkit-root_restrict-scroll",
  "root_disabled-context-menu": "appkit-root_disabled-context-menu"
}, Xr = Symbol("root");
function X(e, r = {}) {
  const t = e;
  return t.level = r.level || "error", r.additional && (t.additional = r.additional), t;
}
const Z_ = "appkit-outer", Q_ = "appkit-outer_width_content", x_ = "appkit-outer_height_content", $_ = "appkit-root__clickable", ep = "appkit-outer__border", tp = "appkit-outer_visibility_invisible", rp = "appkit-outer_visibility_gone", Ks = {
  outer: Z_,
  outer_width_content: Q_,
  outer_height_content: x_,
  root__clickable: $_,
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
  outer__border: ep,
  outer_visibility_invisible: tp,
  outer_visibility_gone: rp,
  "outer_has-action-animation": "appkit-outer_has-action-animation",
  "outer_has-custom-focus": "appkit-outer_has-custom-focus"
};
function cr(e) {
  if (!e)
    return;
  let r = "";
  for (const t in e)
    if (e.hasOwnProperty(t)) {
      if (!e[t] && e[t] !== 0)
        continue;
      r && (r += ";"), r += t + ":" + String(e[t]);
    }
  return r || void 0;
}
function ge(e) {
  if (typeof e != "number" && typeof e != "string" || !e)
    return "0";
  const r = Number(e);
  return Number.isNaN(r) ? "0" : Math.ceil(r * 1e3) / 1e4 + "em";
}
function cn(e) {
  let r = ge(e);
  return r === "0" && (r += "em"), r;
}
function wd(e, r) {
  for (; e.length < r; )
    e = "0" + e;
  return e;
}
function dr(e, r = 1, t = "transparent") {
  if (e = (typeof e == "string" && e || "").toLowerCase(), e.charAt(0) !== "#")
    return t;
  const n = po(e);
  return n ? (n.a *= r, da(n)) : t;
}
function np(e, r, t = "transparent") {
  if (e = (typeof e == "string" && e || "").toLowerCase(), e.charAt(0) !== "#")
    return t;
  const n = po(e);
  return n ? (n.a = r, da(n)) : t;
}
function da(e) {
  return e.a === 255 ? `#${[e.r, e.g, e.b].map((r) => wd(Math.round(r).toString(16), 2)).join("")}` : `rgba(${e.r},${e.g},${e.b},${(e.a / 255).toFixed(2)})`;
}
function po(e) {
  const r = (
    // #AARRGGBB
    e.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i) || // #ARGB
    e.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])$/i) || // #RRGGBB
    e.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i) || // #RGB
    e.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i)
  );
  if (r) {
    if (r.length === 5) {
      const [u, c, f, _, h] = r, m = f.length === 2 ? f : f + f, p = _.length === 2 ? _ : _ + _, w = h.length === 2 ? h : h + h, k = c.length === 2 ? c : c + c;
      return {
        a: parseInt(k, 16),
        r: parseInt(m, 16),
        g: parseInt(p, 16),
        b: parseInt(w, 16)
      };
    }
    const [t, n, o, i] = r, s = n.length === 2 ? n : n + n, a = o.length === 2 ? o : o + o, l = i.length === 2 ? i : i + i;
    return {
      a: 255,
      r: parseInt(s, 16),
      g: parseInt(a, 16),
      b: parseInt(l, 16)
    };
  }
  return null;
}
function Ll(e) {
  let r = String(e);
  return r.indexOf("&") > -1 && (r = r.replace(/&/g, "&amp;")), r.indexOf("<") > -1 && (r = r.replace(/</g, "&lt;")), r.indexOf(">") > -1 && (r = r.replace(/>/g, "&gt;")), r.indexOf('"') > -1 && (r = r.replace(/"/g, "&quot;")), r;
}
const zo = Boolean;
function cl(e, r) {
  if (e.length === 1 && e[0].type === "solid")
    return ip({
      bg: e[0]
    });
  const t = e.map((n) => {
    if (n.type === "solid")
      return op({
        bg: n
      });
    if (n.type === "gradient")
      return sp({
        bg: n
      });
    if (n.type === "image")
      return up({
        bg: n,
        direction: r
      });
    if (n.type === "radial_gradient")
      return ap({
        bg: n
      });
  }).filter(zo).reverse().reduce(function(n, o) {
    return n.image.push(o.image), n.size.push(o.size || "auto"), n.position.push(o.pos || "50% 50%"), n;
  }, {
    image: [],
    size: [],
    position: []
  });
  return {
    image: t.image.join(","),
    size: t.size.join(","),
    position: t.position.join(",")
  };
}
function op(e) {
  const r = dr(e.bg.color || "transparent");
  return {
    size: void 0,
    pos: void 0,
    image: `linear-gradient(to bottom,${r},${r})`
  };
}
function ip(e) {
  return {
    color: dr(e.bg.color || "transparent"),
    size: "auto",
    position: "50% 50%"
  };
}
function kd(e) {
  return e.every((n) => n.color && typeof n.position == "number" && n.position >= 0 && n.position <= 1) ? e.sort((n, o) => Math.abs(n.position - o.position) < 1e-6 ? 0 : n.position - o.position).map((n) => `${dr(n.color)} ${(n.position * 100).toFixed(2)}%`).join(",") : void 0;
}
function sp(e) {
  var n, o, i, s;
  if (!Array.isArray((n = e.bg) == null ? void 0 : n.colors) && !Array.isArray((o = e.bg) == null ? void 0 : o.color_map))
    return;
  const r = (i = e.bg.colors) == null ? void 0 : i.filter(zo);
  if (!(r != null && r.length) && !((s = e.bg) != null && s.color_map))
    return;
  let t;
  if (e.bg.color_map) {
    const a = kd(e.bg.color_map);
    if (!a)
      return;
    t = "linear-gradient(" + (90 - Number(e.bg.angle || 0) + "deg") + "," + a + ")";
  } else {
    if (!r)
      return;
    t = "linear-gradient(" + (90 - Number(e.bg.angle || 0) + "deg") + "," + r.map((a) => dr(a)).join(",") + ")";
  }
  return {
    size: void 0,
    pos: void 0,
    image: t
  };
}
const lp = {
  nearest_corner: "closest-corner",
  farthest_corner: "farthest-corner",
  nearest_side: "closest-side",
  farthest_side: "farthest-side"
};
function La(e) {
  if (e && typeof e == "object" && "type" in e && e.value !== void 0) {
    if (e.type === "fixed")
      return cn(e.value);
    if (e.type === "relative")
      return `${Number(e.value) * 100}%`;
  }
  return "50%";
}
function ap(e) {
  var a, l, u, c;
  if (!Array.isArray((a = e.bg) == null ? void 0 : a.colors) && !Array.isArray((l = e.bg) == null ? void 0 : l.color_map))
    return;
  const r = (u = e.bg.colors) == null ? void 0 : u.filter(zo);
  if (!(r != null && r.length) && !((c = e.bg) != null && c.color_map))
    return;
  let t;
  if (e.bg.color_map ? t = kd(e.bg.color_map) : r && (t = r.map((f) => dr(f)).join(",")), !t)
    return;
  const n = e.bg.radius;
  let o;
  n && typeof n == "object" && "type" in n && n.value !== void 0 && (n.type === "fixed" ? o = cn(n.value) : n.type === "relative" && (o = lp[n.value]));
  const i = La(e.bg.center_x), s = La(e.bg.center_y);
  return {
    size: void 0,
    pos: void 0,
    image: `radial-gradient(circle ${o || "farthest-corner"} at ${i} ${s},` + t + ")"
  };
}
function up(e) {
  var t;
  const r = (t = e.bg) == null ? void 0 : t.image_url;
  if (r)
    return {
      size: vd(e.bg.scale),
      pos: jd(e.bg, e.direction),
      image: 'url("' + Ll(r) + '")'
    };
}
function vd(e) {
  return e === "fit" ? "contain" : e === "stretch" ? "fill" : e === "no_scale" ? "none" : "cover";
}
function cp(e) {
  return e === "none" ? "auto" : e === "fill" ? "100% 100%" : e;
}
function jd(e, r) {
  let t, n;
  return e.content_alignment_horizontal === "left" || r === "ltr" && e.content_alignment_horizontal === "start" || r === "rtl" && e.content_alignment_horizontal === "end" ? t = "0%" : e.content_alignment_horizontal === "right" || r === "ltr" && e.content_alignment_horizontal === "end" || r === "rtl" && e.content_alignment_horizontal === "start" ? t = "100%" : t = "50%", e.content_alignment_vertical === "top" ? n = "0%" : e.content_alignment_vertical === "bottom" ? n = "100%" : n = "50%", t + " " + n;
}
function nn(e, r) {
  const t = Number(e);
  return Number.isNaN(t) || t < 0 ? r : t;
}
function Oa(e, r, t) {
  return typeof r == "number" && (e && r > 0 && r <= 100 || !e && r >= 0 && r < 100) ? r : t;
}
function fp(e) {
  return e.is_enabled !== 0 && e.is_enabled !== !1 && e.index !== void 0;
}
function dp(e, {
  visibilityActions: r,
  disappearActions: t,
  rootCtx: n,
  componentContext: o
}) {
  const i = [];
  r && r.forEach((h) => {
    i.push({
      type: "visibility",
      index: i.length,
      action: h,
      visible: !1,
      count: 0,
      finished: !1
    });
  }), t && t.forEach((h) => {
    i.push({
      type: "disappear",
      index: i.length,
      action: h,
      // false, so disappear only works after the element becomes visible
      visible: !1,
      count: 0,
      finished: !1
    });
  });
  const s = i.map((h, m) => {
    const p = h.type === "visibility";
    return o.getDerivedFromVars({
      index: m,
      visibility_percentage: h.action.visibility_percentage,
      visibility_duration: p ? h.action.visibility_duration : h.action.disappear_duration,
      log_limit: h.action.log_limit,
      is_enabled: h.action.is_enabled
    }, void 0, !0);
  });
  let a;
  const l = () => {
    a && a.disconnect(), i.forEach((h) => {
      h.timer && clearTimeout(h.timer);
    });
  }, u = Ui(s, (h) => h);
  let c;
  const f = (h) => {
    const m = h.type === "visibility";
    o.execAnyActions([h.action], {
      logType: m ? "visible" : "disappear",
      node: e,
      processUrls: !1
    });
  }, _ = u.subscribe((h) => {
    c = h.filter(fp);
    const m = {};
    c.forEach((k) => {
      m[k.index] = k;
    }), l();
    const p = [...new Set(c.map((k) => {
      const N = i[k.index].type === "visibility";
      return Oa(
        N,
        k.visibility_percentage,
        N ? 50 : 0
      ) / 100;
    }))];
    if (!p.length)
      return;
    const w = (k) => {
      k.forEach((N) => {
        c.forEach((B) => {
          const z = i[B.index], oe = z.type === "visibility", fe = Oa(
            oe,
            B.visibility_percentage,
            oe ? 50 : 0
          );
          let T;
          fe === 0 ? T = N.intersectionRatio >= 1e-12 : T = N.intersectionRatio >= fe / 100, (oe ? !z.visible && T : z.visible && !T) ? z.finished || (z.timer = setTimeout(() => {
            ++z.count;
            const A = B.log_limit === 0 ? 1 / 0 : B.log_limit || 1;
            z.count >= A && (z.finished = !0), f(z);
          }, nn(B.visibility_duration, 800))) : (oe ? !T : T) && z.timer && clearTimeout(z.timer), z.visible = T;
        });
      });
    };
    a = new IntersectionObserver(w, {
      threshold: p
    }), a.observe(e);
  });
  return {
    destroy() {
      c == null || c.forEach((h) => {
        const m = i[h.index];
        !m || m.type !== "disappear" || !m.visible || m.finished || n.registerTimeout(window.setTimeout(() => {
          f(m);
        }, h.visibility_duration));
      }), l(), _();
    }
  };
}
function Ba(e, r) {
  r && e.push(r);
}
function gt(e, r, t) {
  const n = [];
  Ba(n, r[e]);
  for (const o in t)
    if (t.hasOwnProperty(o)) {
      const i = t[o];
      if (i) {
        const s = `${e}_${o}` + (typeof i == "string" ? `_${i}` : "");
        Ba(n, r[s]);
      }
    }
  return n.join(" ");
}
const _a = Symbol("state");
function so(e, r) {
  var s, a;
  const t = e.top || 0, n = ((s = r === "ltr" ? e.end : e.start) != null ? s : e.right) || 0, o = e.bottom || 0, i = ((a = r === "ltr" ? e.start : e.end) != null ? a : e.left) || 0;
  return t === 0 && n === 0 && o === 0 && i === 0 ? "" : ge(t) + " " + ge(n) + " " + ge(o) + " " + ge(i);
}
function fs(e) {
  if (typeof e != "number" && typeof e != "string")
    return !1;
  const r = Number(e);
  return !Number.isNaN(r);
}
function Pn(e) {
  return fs(e) && e >= 0;
}
function is(e, r, t) {
  var o, i;
  if (!e)
    return t;
  const n = [
    e.top,
    (o = r === "ltr" ? e.end : e.start) != null ? o : e.right,
    e.bottom,
    (i = r === "ltr" ? e.start : e.end) != null ? i : e.left
  ];
  for (let s = 0; s < n.length; ++s)
    if (n[s] && !Pn(n[s]))
      return t;
  return so(e, r);
}
function _p(e, r) {
  return !Pn(e) || e === void 0 || e > 1 ? r : Number(e);
}
const pp = Object.prototype.hasOwnProperty;
function Gi(e, r) {
  if (Object.is(e, r))
    return !0;
  if (typeof e != "object" || e === null || typeof r != "object" || r === null)
    return Object.is(e, r);
  const t = Object.keys(e), n = Object.keys(r);
  if (t.length !== n.length)
    return !1;
  for (let o = 0; o < t.length; o++) {
    const i = t[o];
    if (!pp.call(r, i) || !Gi(e[i], r[i]))
      return !1;
  }
  return !0;
}
function ei(e, r) {
  return Gi(e, r) ? r : e;
}
function gp(e, r) {
  return e === "visible" || e === "invisible" || e === "gone" ? e : r;
}
function Cd(e, r) {
  return e === "linear" || e === "ease" || e === "ease_in_out" || e === "ease_in" || e === "ease_out" ? e : r;
}
function io(e, r) {
  const t = Number(e);
  return Number.isNaN(t) ? r : t;
}
function ss(e) {
  const r = [];
  return e.name === "set" ? (e.items || []).forEach((t) => {
    r.push(...ss(t));
  }) : r.push(e), r;
}
function ni(e, r) {
  if (!e || typeof e != "object")
    return r;
  const t = [
    "top",
    "right",
    "bottom",
    "left"
  ];
  for (let n = 0; n < t.length; ++n)
    if (e[t[n]] && !Pn(e[t[n]]))
      return r;
  return e;
}
function hp(e, r) {
  if (!e && !r)
    return {};
  if (!r)
    return e;
  if (!e)
    return r;
  const t = {};
  return [
    "top",
    "right",
    "bottom",
    "left",
    "start",
    "end"
  ].forEach((n) => {
    const o = e[n];
    o && (t[n] = o);
    const i = r[n];
    i && (t[n] = (t[n] || 0) + i);
  }), t;
}
function mp(e, r) {
  const t = [
    e["top-left"],
    e["top-right"],
    e["bottom-right"],
    e["bottom-left"]
  ];
  for (let n = 0; n < t.length; ++n)
    if (t[n] && !Pn(t[n]))
      return r;
  return e;
}
function Es(e, r = 0, t = 10) {
  return [
    e["top-left"],
    e["top-right"],
    e["bottom-right"],
    e["bottom-left"]
  ].map((n) => ge((n || r) / t * 10)).join(" ");
}
function bp(e) {
  var r, t, n, o, i, s;
  return ge(((t = (r = e.offset) == null ? void 0 : r.x) == null ? void 0 : t.value) || 0) + " " + ge(((o = (n = e.offset) == null ? void 0 : n.y) == null ? void 0 : o.value) || 0) + " " + ge((i = e.blur) != null ? i : 2) + " " + dr(e.color || "#000000", (s = e.alpha) != null ? s : 0.19);
}
function yp(e, r) {
  var t, n, o, i, s, a;
  return "drop-shadow(" + dr(e.color || "#000000", (t = e.alpha) != null ? t : 0.19) + " " + ge((((o = (n = e.offset) == null ? void 0 : n.x) == null ? void 0 : o.value) || 0) * 10 / r) + " " + ge((((s = (i = e.offset) == null ? void 0 : i.y) == null ? void 0 : s.value) || 0) * 10 / r) + " " + ge(((a = e.blur) != null ? a : 2) * 10 / r) + ")";
}
let jl;
function Oi() {
  return typeof matchMedia > "u" ? !1 : (jl || (jl = window.matchMedia("(prefers-reduced-motion)")), jl.matches);
}
const wp = 8, kp = (e, r, t, n) => {
  let o;
  return (t || n) && typeof ResizeObserver < "u" && (o = new ResizeObserver(async () => {
    let i = 0;
    const s = {}, a = (u, c) => {
      if (u) {
        const f = r.getVariable(u, "integer");
        if (f) {
          if (c = Math.round(c), s[u] || (s[u] = /* @__PURE__ */ new Set()), !s[u].has(c))
            return f.setValue(c), s[u].add(c), !0;
        } else {
          const _ = new Error("Missing variable");
          _.level = "error", _.additional = {
            variableName: u
          }, r.logError(_);
        }
      }
      return !1;
    }, l = () => {
      if (!e)
        return !1;
      const u = e.getBoundingClientRect(), c = a(t, u.width), f = a(n, u.height);
      return c || f;
    };
    for (; l(); ) {
      if (++i > wp) {
        const u = new Error("Recursive layout in size_provider");
        u.level = "warn", u.additional = {
          widthVariableName: t,
          heightVariableName: n
        }, r.logError(u);
        break;
      }
      await An();
    }
  }), o.observe(e)), o;
}, pa = Symbol("enabled");
function Zr(e, r) {
  return e === 1 || e === 0 || e === !1 || e === !0 ? !!e : r;
}
function Yo(e) {
  return [
    e.state_description,
    e.description,
    e.hint
  ].filter(Boolean).join(", ");
}
const Ra = 1, oi = 2;
function Ha(e, r = 1) {
  if (!(!e || typeof e.value != "number")) {
    if (e.type === "translation-fixed")
      return ge(e.value * r);
    if (e.type === "translation-percentage")
      return `${e.value * r}%`;
  }
}
function _s(e, r = 1) {
  if (!(!e || typeof e.value != "number")) {
    if (e.type === "pivot-fixed")
      return ge(e.value * r);
    if (e.type === "pivot-percentage")
      return `${e.value * r}%`;
  }
}
function vp(e) {
  return e.map((r) => {
    if (r.type === "rotation") {
      if (typeof r.angle == "number") {
        const t = _s(r.pivot_x) || "50%", n = _s(r.pivot_y) || "50%", o = _s(r.pivot_x, -1) || "-50%", i = _s(r.pivot_y, -1) || "-50%";
        return `translate(${t}, ${n}) rotate(${r.angle}deg) translate(${o}, ${i})`;
      }
    } else if (r.type === "translation") {
      const t = Ha(r.x) || 0, n = Ha(r.y) || 0;
      return `translate(${t}, ${n})`;
    }
  }).filter(Boolean).join(" ");
}
const jp = "appkit-actionable__button", Wa = {
  actionable__button: jp
};
function Cp() {
}
const To = Symbol("action");
function Ol(e) {
  if (e.startsWith("tel:"))
    return "tel";
  if (e.startsWith("/"))
    return "https";
  const r = /^([^/]+):\/\//.exec(e);
  return r && r[1] || "";
}
function Bl(e, r) {
  return r.has(e);
}
function Ep(e) {
  let r = (
    /*containerElement*/
    e[7]
  ), t, n, o = (
    /*containerElement*/
    e[7] && Cl(e)
  );
  return {
    c() {
      o && o.c(), t = or();
    },
    m(i, s) {
      o && o.m(i, s), K(i, t, s), n = !0;
    },
    p(i, s) {
      /*containerElement*/
      i[7] ? r ? Sr(
        r,
        /*containerElement*/
        i[7]
      ) ? (o.d(1), o = Cl(i), r = /*containerElement*/
      i[7], o.c(), o.m(t.parentNode, t)) : o.p(i, s) : (o = Cl(i), r = /*containerElement*/
      i[7], o.c(), o.m(t.parentNode, t)) : r && (o.d(1), o = null, r = /*containerElement*/
      i[7]);
    },
    i(i) {
      n || (W(o, i), n = !0);
    },
    o(i) {
      ne(o, i), n = !1;
    },
    d(i) {
      i && J(t), o && o.d(i);
    }
  };
}
function Ap(e) {
  var f;
  let r, t, n, o, i, s;
  const a = (
    /*#slots*/
    e[31].default
  ), l = nl(
    a,
    e,
    /*$$scope*/
    e[30],
    null
  );
  let u = [
    {
      class: t = /*cls*/
      e[2] + " " + Wa.actionable__button + " " + Ar["root__any-actions"] + ` ${/*isNativeActionAnimation*/
      e[6] ? Ar.root__clickable : Ar["root__clickable-no-transition"]} ${Ar.root__unselectable} ` + /*longTapActions*/
      ((f = e[1]) != null && f.length ? Ar["root_disabled-context-menu"] : "")
    },
    { style: (
      /*style*/
      e[3]
    ) },
    { role: (
      /*role*/
      e[11]
    ) },
    { "aria-checked": (
      /*isChecked*/
      e[15]
    ) },
    { type: "button" },
    {
      tabindex: n = /*componentContext*/
      e[0].fakeElement === oi ? -1 : null
    },
    /*attrs*/
    e[4]
  ], c = {};
  for (let _ = 0; _ < u.length; _ += 1)
    c = jo(c, u[_]);
  return {
    c() {
      r = Pe("button"), l && l.c(), qo(r, c);
    },
    m(_, h) {
      K(_, r, h), l && l.m(r, null), r.autofocus && r.focus(), e[48](r), o = !0, i || (s = [
        ll(
          /*use*/
          e[5].call(null, r)
        ),
        Qe(
          r,
          "click",
          /*click_handler_1*/
          e[37]
        ),
        Qe(
          r,
          "keydown",
          /*onKeydown*/
          e[17]
        ),
        Qe(
          r,
          "focus",
          /*focus_handler_1*/
          e[38]
        ),
        Qe(
          r,
          "blur",
          /*blur_handler_1*/
          e[39]
        ),
        Qe(
          r,
          "pointerdown",
          /*pointerdown_handler_1*/
          e[40]
        ),
        Qe(
          r,
          "wheel",
          /*wheel_handler_1*/
          e[41]
        )
      ], i = !0);
    },
    p(_, h) {
      var m;
      l && l.p && (!o || h[0] & /*$$scope*/
      1073741824) && il(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? ol(
          a,
          /*$$scope*/
          _[30],
          h,
          null
        ) : sl(
          /*$$scope*/
          _[30]
        ),
        null
      ), qo(r, c = No(u, [
        (!o || h[0] & /*cls, isNativeActionAnimation, longTapActions*/
        70 && t !== (t = /*cls*/
        _[2] + " " + Wa.actionable__button + " " + Ar["root__any-actions"] + ` ${/*isNativeActionAnimation*/
        _[6] ? Ar.root__clickable : Ar["root__clickable-no-transition"]} ${Ar.root__unselectable} ` + /*longTapActions*/
        ((m = _[1]) != null && m.length ? Ar["root_disabled-context-menu"] : ""))) && { class: t },
        (!o || h[0] & /*style*/
        8) && { style: (
          /*style*/
          _[3]
        ) },
        (!o || h[0] & /*role*/
        2048) && { role: (
          /*role*/
          _[11]
        ) },
        (!o || h[0] & /*isChecked*/
        32768) && { "aria-checked": (
          /*isChecked*/
          _[15]
        ) },
        { type: "button" },
        (!o || h[0] & /*componentContext*/
        1 && n !== (n = /*componentContext*/
        _[0].fakeElement === oi ? -1 : null)) && { tabindex: n },
        h[0] & /*attrs*/
        16 && /*attrs*/
        _[4]
      ]));
    },
    i(_) {
      o || (W(l, _), o = !0);
    },
    o(_) {
      ne(l, _), o = !1;
    },
    d(_) {
      _ && J(r), l && l.d(_), e[48](null), i = !1, Rr(s);
    }
  };
}
function Sp(e) {
  var f;
  let r, t, n, o, i, s;
  const a = (
    /*#slots*/
    e[31].default
  ), l = nl(
    a,
    e,
    /*$$scope*/
    e[30],
    null
  );
  let u = [
    { href: (
      /*href*/
      e[9]
    ) },
    { target: (
      /*target*/
      e[13]
    ) },
    { style: (
      /*style*/
      e[3]
    ) },
    { role: (
      /*role*/
      e[11]
    ) },
    { "aria-checked": (
      /*isChecked*/
      e[15]
    ) },
    {
      class: t = /*cls*/
      e[2] + " " + Ar["root__any-actions"] + " " + /*isNativeActionAnimation*/
      (e[6] ? Ar.root__clickable : Ar["root__clickable-no-transition"]) + " " + /*longTapActions*/
      ((f = e[1]) != null && f.length ? Ar["root_disabled-context-menu"] : "")
    },
    {
      tabindex: n = /*componentContext*/
      e[0].fakeElement === oi ? -1 : null
    },
    /*attrs*/
    e[4]
  ], c = {};
  for (let _ = 0; _ < u.length; _ += 1)
    c = jo(c, u[_]);
  return {
    c() {
      r = Pe("a"), l && l.c(), qo(r, c);
    },
    m(_, h) {
      K(_, r, h), l && l.m(r, null), e[47](r), o = !0, i || (s = [
        ll(
          /*use*/
          e[5].call(null, r)
        ),
        Qe(
          r,
          "click",
          /*click_handler*/
          e[32]
        ),
        Qe(
          r,
          "keydown",
          /*onKeydown*/
          e[17]
        ),
        Qe(
          r,
          "focus",
          /*focus_handler*/
          e[33]
        ),
        Qe(
          r,
          "blur",
          /*blur_handler*/
          e[34]
        ),
        Qe(
          r,
          "pointerdown",
          /*pointerdown_handler*/
          e[35]
        ),
        Qe(
          r,
          "wheel",
          /*wheel_handler*/
          e[36]
        )
      ], i = !0);
    },
    p(_, h) {
      var m;
      l && l.p && (!o || h[0] & /*$$scope*/
      1073741824) && il(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? ol(
          a,
          /*$$scope*/
          _[30],
          h,
          null
        ) : sl(
          /*$$scope*/
          _[30]
        ),
        null
      ), qo(r, c = No(u, [
        (!o || h[0] & /*href*/
        512) && { href: (
          /*href*/
          _[9]
        ) },
        (!o || h[0] & /*target*/
        8192) && { target: (
          /*target*/
          _[13]
        ) },
        (!o || h[0] & /*style*/
        8) && { style: (
          /*style*/
          _[3]
        ) },
        (!o || h[0] & /*role*/
        2048) && { role: (
          /*role*/
          _[11]
        ) },
        (!o || h[0] & /*isChecked*/
        32768) && { "aria-checked": (
          /*isChecked*/
          _[15]
        ) },
        (!o || h[0] & /*cls, isNativeActionAnimation, longTapActions*/
        70 && t !== (t = /*cls*/
        _[2] + " " + Ar["root__any-actions"] + " " + /*isNativeActionAnimation*/
        (_[6] ? Ar.root__clickable : Ar["root__clickable-no-transition"]) + " " + /*longTapActions*/
        ((m = _[1]) != null && m.length ? Ar["root_disabled-context-menu"] : ""))) && { class: t },
        (!o || h[0] & /*componentContext*/
        1 && n !== (n = /*componentContext*/
        _[0].fakeElement === oi ? -1 : null)) && { tabindex: n },
        h[0] & /*attrs*/
        16 && /*attrs*/
        _[4]
      ]));
    },
    i(_) {
      o || (W(l, _), o = !0);
    },
    o(_) {
      ne(l, _), o = !1;
    },
    d(_) {
      _ && J(r), l && l.d(_), e[47](null), i = !1, Rr(s);
    }
  };
}
function Cl(e) {
  var f;
  let r, t, n, o, i, s;
  const a = (
    /*#slots*/
    e[31].default
  ), l = nl(
    a,
    e,
    /*$$scope*/
    e[30],
    null
  );
  let u = [
    {
      class: t = /*cls*/
      e[2] + " " + /*longTapActions*/
      ((f = e[1]) != null && f.length ? Ar["root_disabled-context-menu"] : "") + " " + /*hasAnyActions*/
      (e[14] ? Ar["root__any-actions"] : "")
    },
    { style: (
      /*style*/
      e[3]
    ) },
    { role: (
      /*role*/
      e[11]
    ) },
    { "aria-checked": (
      /*isChecked*/
      e[15]
    ) },
    {
      "aria-hidden": n = /*ariaHidden*/
      e[12] || void 0
    },
    /*attrs*/
    e[4]
  ], c = {};
  for (let _ = 0; _ < u.length; _ += 1)
    c = jo(c, u[_]);
  return {
    c() {
      r = Pe(
        /*containerElement*/
        e[7]
      ), l && l.c(), ri(
        /*containerElement*/
        e[7]
      )(r, c);
    },
    m(_, h) {
      K(_, r, h), l && l.m(r, null), e[49](r), o = !0, i || (s = [
        ll(
          /*use*/
          e[5].call(null, r)
        ),
        Qe(
          r,
          "click",
          /*click_handler_2*/
          e[42]
        ),
        Qe(
          r,
          "keydown",
          /*onKeydown*/
          e[17]
        ),
        Qe(
          r,
          "focus",
          /*focus_handler_2*/
          e[43]
        ),
        Qe(
          r,
          "blur",
          /*blur_handler_2*/
          e[44]
        ),
        Qe(
          r,
          "pointerdown",
          /*pointerdown_handler_2*/
          e[45]
        ),
        Qe(
          r,
          "wheel",
          /*wheel_handler_2*/
          e[46]
        )
      ], i = !0);
    },
    p(_, h) {
      var m;
      l && l.p && (!o || h[0] & /*$$scope*/
      1073741824) && il(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? ol(
          a,
          /*$$scope*/
          _[30],
          h,
          null
        ) : sl(
          /*$$scope*/
          _[30]
        ),
        null
      ), ri(
        /*containerElement*/
        _[7]
      )(r, c = No(u, [
        (!o || h[0] & /*cls, longTapActions, hasAnyActions*/
        16390 && t !== (t = /*cls*/
        _[2] + " " + /*longTapActions*/
        ((m = _[1]) != null && m.length ? Ar["root_disabled-context-menu"] : "") + " " + /*hasAnyActions*/
        (_[14] ? Ar["root__any-actions"] : ""))) && { class: t },
        (!o || h[0] & /*style*/
        8) && { style: (
          /*style*/
          _[3]
        ) },
        (!o || h[0] & /*role*/
        2048) && { role: (
          /*role*/
          _[11]
        ) },
        (!o || h[0] & /*isChecked*/
        32768) && { "aria-checked": (
          /*isChecked*/
          _[15]
        ) },
        (!o || h[0] & /*ariaHidden*/
        4096 && n !== (n = /*ariaHidden*/
        _[12] || void 0)) && {
          "aria-hidden": n
        },
        h[0] & /*attrs*/
        16 && /*attrs*/
        _[4]
      ]));
    },
    i(_) {
      o || (W(l, _), o = !0);
    },
    o(_) {
      ne(l, _), o = !1;
    },
    d(_) {
      _ && J(r), l && l.d(_), e[49](null), i = !1, Rr(s);
    }
  };
}
function Vp(e) {
  let r, t, n, o;
  const i = [Sp, Ap, Ep], s = [];
  function a(l, u) {
    return (
      /*href*/
      l[9] ? 0 : (
        /*hasJSAction*/
        l[10] ? 1 : 2
      )
    );
  }
  return r = a(e), t = s[r] = i[r](e), {
    c() {
      t.c(), n = or();
    },
    m(l, u) {
      s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? s[r].p(l, u) : (pr(), ne(s[c], 1, 1, () => {
        s[c] = null;
      }), gr(), t = s[r], t ? t.p(l, u) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n));
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      ne(t), o = !1;
    },
    d(l) {
      l && J(n), s[r].d(l);
    }
  };
}
const Ua = 8, Ga = 400, El = 400, Fp = /* @__PURE__ */ new Set(["button", "image", "checkbox", "radio", "header"]);
function Ja(e) {
  e.preventDefault();
}
function Dp(e, r, t) {
  let n, o, i = v, s = () => (i(), i = E(n, (Q) => t(29, o = Q)), n);
  e.$$.on_destroy.push(() => i());
  let { $$slots: a = {}, $$scope: l } = r, { componentContext: u } = r, { id: c = "" } = r, { actions: f = void 0 } = r, { doubleTapActions: _ = void 0 } = r, { longTapActions: h = void 0 } = r, { pressStartActions: m = void 0 } = r, { pressEndActions: p = void 0 } = r, { hoverStartActions: w = void 0 } = r, { hoverEndActions: k = void 0 } = r, { cls: N = "" } = r, { style: B = null } = r, { attrs: z = void 0 } = r, { use: oe = Cp } = r, { customAction: fe = null } = r, { isNativeActionAnimation: T = !0 } = r, { hasInnerFocusable: Y = !1 } = r, { customAccessibility: le = void 0 } = r, { captureFocusOnAction: A = !0 } = r, { containerElement: D = "span" } = r;
  const M = Tr(Xr), U = Tr(To);
  hi(To, {
    hasAction() {
      return !!(U.hasAction() || f != null && f.length || (le == null ? void 0 : le.mode) === "exclude");
    }
  });
  let q, be = "", Ae, Ce = -1, he = -1, Fe = null, x = !1, Je = !1, Ye = !1, Xe, ye, Ie, pe, me = !1;
  function _e() {
    return (o == null ? void 0 : o.some((Q) => {
      if (Q != null && Q.typed)
        return !0;
      const At = Q == null ? void 0 : Q.url;
      if (!At)
        return !1;
      const Pt = Ol(At);
      return Pt && !Bl(Pt, M.getBuiltinProtocols());
    })) || !1;
  }
  async function ee(Q, At) {
    f && (Q && _e() && Q.preventDefault(), u.execAnyActions(f, { node: q, processUrls: At }));
  }
  async function ce(Q) {
    if (U.hasAction() || Q.button !== void 0 && Q.button !== 0)
      return;
    const At = Date.now();
    if (Ce > 0 && At > Ce + Ga) {
      Q.preventDefault();
      return;
    }
    if (_ != null && _.length && he > 0 && At - he < El) {
      Q.preventDefault(), u.execAnyActions(_, { processUrls: !0, node: q }), he = -1;
      return;
    }
    if (he = At, _ != null && _.length && Ce > 0 && At < Ce + El) {
      Q.preventDefault(), clearTimeout(ye), ye = window.setTimeout(
        () => {
          ee(void 0, !0);
        },
        El
      );
      return;
    }
    (fe == null ? void 0 : fe(Q)) === !1 ? Q.preventDefault() : ee(Q, !1);
  }
  function te(Q) {
    U.hasAction() || (Fe = { x: Q.clientX, y: Q.clientY }, x = !1, Ce = Date.now(), Xe && clearTimeout(Xe), clearTimeout(ye), u.execAnyActions(m, { node: q }));
  }
  function we(Q) {
    Fe && (Math.abs(Fe.x - Q.clientX) > Ua || Math.abs(Fe.y - Q.clientY) > Ua) && (x = !0);
  }
  function Ue(Q) {
    U.hasAction() || !Fe || Ce < 0 || (!x && Date.now() - Ce >= Ga && (Q.stopImmediatePropagation(), u.execAnyActions(h, { processUrls: !0, node: q })), Xe && clearTimeout(Xe), Xe = window.setTimeout(
      () => {
        Fe = null, Ce = -1;
      },
      100
    ), u.execAnyActions(p, { node: q }));
  }
  function Ke() {
    U.hasAction() || u.execAnyActions(w, { node: q });
  }
  function $() {
    U.hasAction() || u.execAnyActions(k, { node: q });
  }
  function Oe(Q) {
    const At = Q.target;
    At instanceof HTMLElement && (At.tagName === "INPUT" || At.contentEditable === "true") || Q.ctrlKey || Q.metaKey || Q.altKey || Q.shiftKey || Q.key === "Enter" && Array.isArray(f) && f.length && (u.execAnyActions(f), Q.preventDefault());
  }
  Qn(() => {
    c && !Y && M.registerFocusable(c, {
      focus() {
        q && (be || Je) && q.focus();
      }
    });
  }), ln(() => {
    typeof window < "u" && (window.removeEventListener("pointermove", we), window.removeEventListener("pointerup", Ue), window.removeEventListener("pointercancel", Ue)), c && !Y && M.unregisterFocusable(c), Xe && clearTimeout(Xe), ye && clearTimeout(ye);
  });
  function Ne(Q) {
    On.call(this, e, Q);
  }
  function ot(Q) {
    On.call(this, e, Q);
  }
  function ct(Q) {
    On.call(this, e, Q);
  }
  function rt(Q) {
    On.call(this, e, Q);
  }
  function kt(Q) {
    On.call(this, e, Q);
  }
  function it(Q) {
    On.call(this, e, Q);
  }
  function Mt(Q) {
    On.call(this, e, Q);
  }
  function ft(Q) {
    On.call(this, e, Q);
  }
  function Z(Q) {
    On.call(this, e, Q);
  }
  function de(Q) {
    On.call(this, e, Q);
  }
  function lt(Q) {
    On.call(this, e, Q);
  }
  function ze(Q) {
    On.call(this, e, Q);
  }
  function F(Q) {
    On.call(this, e, Q);
  }
  function Et(Q) {
    On.call(this, e, Q);
  }
  function ut(Q) {
    On.call(this, e, Q);
  }
  function Vt(Q) {
    Fr[Q ? "unshift" : "push"](() => {
      q = Q, t(8, q);
    });
  }
  function It(Q) {
    Fr[Q ? "unshift" : "push"](() => {
      q = Q, t(8, q);
    });
  }
  function nt(Q) {
    Fr[Q ? "unshift" : "push"](() => {
      q = Q, t(8, q);
    });
  }
  return e.$$set = (Q) => {
    "componentContext" in Q && t(0, u = Q.componentContext), "id" in Q && t(18, c = Q.id), "actions" in Q && t(19, f = Q.actions), "doubleTapActions" in Q && t(20, _ = Q.doubleTapActions), "longTapActions" in Q && t(1, h = Q.longTapActions), "pressStartActions" in Q && t(21, m = Q.pressStartActions), "pressEndActions" in Q && t(22, p = Q.pressEndActions), "hoverStartActions" in Q && t(23, w = Q.hoverStartActions), "hoverEndActions" in Q && t(24, k = Q.hoverEndActions), "cls" in Q && t(2, N = Q.cls), "style" in Q && t(3, B = Q.style), "attrs" in Q && t(4, z = Q.attrs), "use" in Q && t(5, oe = Q.use), "customAction" in Q && t(25, fe = Q.customAction), "isNativeActionAnimation" in Q && t(6, T = Q.isNativeActionAnimation), "hasInnerFocusable" in Q && t(26, Y = Q.hasInnerFocusable), "customAccessibility" in Q && t(27, le = Q.customAccessibility), "captureFocusOnAction" in Q && t(28, A = Q.captureFocusOnAction), "containerElement" in Q && t(7, D = Q.containerElement), "$$scope" in Q && t(30, l = Q.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*customAccessibility*/
    134217728 && t(12, me = (le == null ? void 0 : le.mode) === "exclude"), e.$$.dirty[0] & /*componentContext, actions*/
    524289 && s(t(16, n = u.getDerivedFromVars(f, void 0, !0))), e.$$.dirty[0] & /*$processedActions, customAction, href, ariaHidden, componentContext*/
    570429953) {
      if (Array.isArray(o) && (o != null && o.length))
        for (let Q = 0; Q < o.length; ++Q) {
          const At = o[Q].url;
          if (At) {
            t(9, be = At), t(13, Ae = o[Q].target || void 0);
            break;
          }
        }
      t(10, Je = !!fe), (be || Array.isArray(o) && (o != null && o.length)) && (U.hasAction() || me) ? (t(9, be = ""), u.logError(X(new Error("Actionable element is forbidden inside other actionable element or inside accessibility mode=exlucde"), {
        level: "warn",
        additional: { actions: o }
      }))) : be && !Bl(Ol(be), M.getBuiltinProtocols()) ? (t(9, be = ""), t(10, Je = !0)) : !be && Array.isArray(o) && (o != null && o.length) && (t(10, Je = !0), o.some((Q) => Q.url || Q.typed || Q.menu_items) || u.logError(X(new Error("The component has a list of actions, but does not have a real action"), {
        level: "warn",
        additional: { actions: o }
      })));
    }
    e.$$.dirty[0] & /*customAccessibility, href, hasJSAction, role*/
    134221312 && (le != null && le.type && Fp.has(le.type) ? le.type === "header" ? t(11, Ie = "heading") : t(11, Ie = le.type) : be ? t(11, Ie = void 0) : Je && t(11, Ie = "button"), (Ie === "checkbox" || Ie === "radio") && typeof (le == null ? void 0 : le.is_checked) == "boolean" ? t(15, pe = le.is_checked) : t(15, pe = void 0)), e.$$.dirty[0] & /*node, href, hasJSAction, doubleTapActions, longTapActions, pressStartActions, pressEndActions, hoverStartActions, hoverEndActions, captureFocusOnAction*/
    300943106 && q && (be || Je || _ != null && _.length ? q.addEventListener("click", ce) : q.removeEventListener("click", ce), _ != null && _.length || h != null && h.length || m != null && m.length || p != null && p.length ? (q.addEventListener("pointerdown", te, { passive: !0 }), window.addEventListener("pointermove", we, { passive: !0 }), window.addEventListener("pointerup", Ue, { passive: !0 }), window.addEventListener("pointercancel", Ue, { passive: !0 })) : (q.removeEventListener("pointerdown", te), window.removeEventListener("pointerup", Ue), window.removeEventListener("pointermove", we), window.removeEventListener("pointercancel", Ue)), w != null && w.length ? q.addEventListener("pointerenter", Ke) : q.removeEventListener("pointerenter", Ke), k != null && k.length ? q.addEventListener("pointerleave", $) : q.removeEventListener("pointerleave", $), A === !1 ? q.addEventListener("mousedown", Ja) : q.removeEventListener("mousedown", Ja), t(14, Ye = !!(be || Je || _ != null && _.length || h != null && h.length || m != null && m.length || p != null && p.length || w != null && w.length || k != null && k.length)));
  }, [
    u,
    h,
    N,
    B,
    z,
    oe,
    T,
    D,
    q,
    be,
    Je,
    Ie,
    me,
    Ae,
    Ye,
    pe,
    n,
    Oe,
    c,
    f,
    _,
    m,
    p,
    w,
    k,
    fe,
    Y,
    le,
    A,
    o,
    l,
    a,
    Ne,
    ot,
    ct,
    rt,
    kt,
    it,
    Mt,
    ft,
    Z,
    de,
    lt,
    ze,
    F,
    Et,
    ut,
    Vt,
    It,
    nt
  ];
}
class fl extends Or {
  constructor(r) {
    super(), Lr(
      this,
      r,
      Dp,
      Vp,
      Sr,
      {
        componentContext: 0,
        id: 18,
        actions: 19,
        doubleTapActions: 20,
        longTapActions: 1,
        pressStartActions: 21,
        pressEndActions: 22,
        hoverStartActions: 23,
        hoverEndActions: 24,
        cls: 2,
        style: 3,
        attrs: 4,
        use: 5,
        customAction: 25,
        isNativeActionAnimation: 6,
        hasInnerFocusable: 26,
        customAccessibility: 27,
        captureFocusOnAction: 28,
        containerElement: 7
      },
      null,
      [-1, -1, -1]
    );
  }
}
const mi = {
  "outer-background": "appkit-outer-background",
  "outer-background_clip": "appkit-outer-background_clip",
  "outer-background__item": "appkit-outer-background__item",
  "outer-background__item_hidden": "appkit-outer-background__item_hidden"
};
function Tn(e) {
  return fs(e) && e > 0;
}
function Ed(e, r) {
  return e.map((t) => {
    if (!t) {
      r(X(new Error("Incorrect filter"), {
        level: "warn"
      }));
      return;
    }
    if (t.type === "blur") {
      if (Tn(t.radius))
        return `blur(${cn(t.radius / 2)})`;
    } else {
      if (t.type === "rtl_mirror")
        return;
      r(X(new Error("Unknown filter"), {
        level: "warn",
        additional: {
          filter: t.type
        }
      }));
    }
  }).filter(Boolean).join(" ");
}
function Ka(e, r, t) {
  const n = e.slice();
  return n[6] = r[t], n;
}
function Ip(e) {
  let r, t;
  return {
    c() {
      r = Pe("span"), g(r, "class", mi["outer-background__item"]), g(r, "style", t = cr(
        /*item*/
        e[6].style
      ));
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o & /*styles*/
      2 && t !== (t = cr(
        /*item*/
        n[6].style
      )) && g(r, "style", t);
    },
    d(n) {
      n && J(r);
    }
  };
}
function Tp(e) {
  let r, t, n, o, i;
  return {
    c() {
      r = Pe("img"), Xn(r.src, t = /*item*/
      e[6].image_url) || g(r, "src", t), g(r, "alt", ""), g(r, "aria-hidden", "true"), g(r, "loading", "lazy"), g(r, "decoding", "async"), g(r, "class", mi["outer-background__item"]), g(r, "style", n = cr(
        /*item*/
        e[6].style
      ));
    },
    m(s, a) {
      K(s, r, a), o || (i = Qe(
        r,
        "error",
        /*onImgError*/
        e[2]
      ), o = !0);
    },
    p(s, a) {
      a & /*styles*/
      2 && !Xn(r.src, t = /*item*/
      s[6].image_url) && g(r, "src", t), a & /*styles*/
      2 && n !== (n = cr(
        /*item*/
        s[6].style
      )) && g(r, "style", n);
    },
    d(s) {
      s && J(r), o = !1, i();
    }
  };
}
function qa(e) {
  let r;
  function t(i, s) {
    return (
      /*item*/
      i[6].image_url ? Tp : Ip
    );
  }
  let n = t(e), o = n(e);
  return {
    c() {
      o.c(), r = or();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = t(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && J(r), o.d(i);
    }
  };
}
function Mp(e) {
  let r, t, n = ur(
    /*styles*/
    e[1]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = qa(Ka(e, n, i));
  return {
    c() {
      r = Pe("span");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(r, "class", t = mi["outer-background"] + /*radius*/
      (e[0] ? " " + mi["outer-background_clip"] : "")), I(
        r,
        "border-radius",
        /*radius*/
        e[0]
      );
    },
    m(i, s) {
      K(i, r, s);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(r, null);
    },
    p(i, [s]) {
      if (s & /*styles, onImgError*/
      6) {
        n = ur(
          /*styles*/
          i[1]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = Ka(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = qa(l), o[a].c(), o[a].m(r, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
      s & /*radius*/
      1 && t !== (t = mi["outer-background"] + /*radius*/
      (i[0] ? " " + mi["outer-background_clip"] : "")) && g(r, "class", t), s & /*radius*/
      1 && I(
        r,
        "border-radius",
        /*radius*/
        i[0]
      );
    },
    i: v,
    o: v,
    d(i) {
      i && J(r), un(o, i);
    }
  };
}
function Pp(e, r, t) {
  let n, { direction: o } = r, { componentContext: i } = r, { background: s = [] } = r, { radius: a = "" } = r;
  function l(u) {
    u.target && "classList" in u.target && u.target.classList.add(mi["outer-background__item_hidden"]);
  }
  return e.$$set = (u) => {
    "direction" in u && t(3, o = u.direction), "componentContext" in u && t(4, i = u.componentContext), "background" in u && t(5, s = u.background), "radius" in u && t(0, a = u.radius);
  }, e.$$.update = () => {
    e.$$.dirty & /*background, direction, componentContext*/
    56 && t(1, n = s.map((u) => {
      const c = {}, f = { style: c };
      if (u.type === "nine_patch_image" && u.insets)
        c["border-image"] = `url("${u.image_url}") ${u.insets.top || 0} ${u.insets.right || 0} ${u.insets.bottom || 0} ${u.insets.left || 0} fill`, c["border-image-width"] = "auto";
      else {
        const _ = cl([u], o);
        u.type === "solid" && (c["background-color"] = _.color), u.type === "gradient" && (c["background-image"] = _.image), u.type === "image" && (c.opacity = Number(u.alpha), f.image_url = u.image_url, c["object-fit"] = _.size, c["object-position"] = _.position, Array.isArray(u.filters) && u.filters.length && (c.filter = Ed(u.filters, i.logError), o === "rtl" && u.filters.some((h) => h.type === "rtl_mirror") && (c.transform = "scale(-1,1)")));
      }
      return f;
    }));
  }, [a, n, l, o, i, s];
}
class Np extends Or {
  constructor(r) {
    super(), Lr(this, r, Pp, Mp, Sr, {
      direction: 3,
      componentContext: 4,
      background: 5,
      radius: 0
    });
  }
}
const zp = (e) => ({
  hasCustomFocus: e[0] & /*hasCustomFocus*/
  131072,
  widthMin: e[0] & /*widthMin*/
  64,
  widthMax: e[0] & /*widthMax*/
  128,
  heightMin: e[0] & /*heightMin*/
  256,
  heightMax: e[0] & /*heightMax*/
  512
}), Ya = (e) => ({
  focusHandler: (
    /*focusHandler*/
    e[51]
  ),
  blurHandler: (
    /*blurHandler*/
    e[52]
  ),
  hasCustomFocus: (
    /*hasCustomFocus*/
    e[17]
  ),
  widthMin: (
    /*widthMin*/
    e[6]
  ),
  widthMax: (
    /*widthMax*/
    e[7]
  ),
  heightMin: (
    /*heightMin*/
    e[8]
  ),
  heightMax: (
    /*heightMax*/
    e[9]
  )
});
function Xa(e) {
  let r, t;
  return r = new fl({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      id: (
        /*componentContext*/
        e[0].json.id
      ),
      use: (
        /*useAction*/
        e[50]
      ),
      cls: (
        /*cls*/
        e[1] + " " + gt(
          "outer",
          Ks,
          /*mods*/
          e[31]
        ) + /*customClass*/
        (e[30] ? ` ${/*customClass*/
        e[30]}` : "") + /*hoverClassName*/
        (e[18] ? ` ${/*hoverClassName*/
        e[18]}` : "")
      ),
      style: cr(
        /*stl*/
        e[29]
      ),
      actions: (
        /*actions*/
        e[25]
      ),
      doubleTapActions: (
        /*doubleTapActions*/
        e[26]
      ),
      longTapActions: (
        /*longTapActions*/
        e[27]
      ),
      pressStartActions: (
        /*pressStartActions*/
        e[12]
      ),
      pressEndActions: (
        /*pressEndActions*/
        e[13]
      ),
      hoverStartActions: (
        /*hoverStartActions*/
        e[14]
      ),
      hoverEndActions: (
        /*hoverEndActions*/
        e[15]
      ),
      attrs: (
        /*attrs*/
        e[21]
      ),
      hasInnerFocusable: (
        /*hasInnerFocusable*/
        e[2]
      ),
      isNativeActionAnimation: !/*actionAnimationList*/
      e[16].length || tu(
        /*actionAnimationList*/
        e[16]
      ),
      customAccessibility: (
        /*$jsonAccessibility*/
        e[20]
      ),
      captureFocusOnAction: (
        /*captureFocusOnAction*/
        e[28]
      ),
      containerElement: (
        /*containerElement*/
        e[3]
      ),
      $$slots: { default: [Lp] },
      $$scope: { ctx: e }
    }
  }), r.$on(
    "focus",
    /*focusHandler*/
    e[51]
  ), r.$on(
    "blur",
    /*blurHandler*/
    e[52]
  ), r.$on(
    "pointerdown",
    /*pointerdown_handler*/
    e[150]
  ), r.$on(
    "wheel",
    /*wheel_handler*/
    e[151]
  ), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*componentContext*/
      1 && (i.id = /*componentContext*/
      n[0].json.id), o[0] & /*cls, customClass, hoverClassName*/
      1074003970 | o[1] & /*mods*/
      1 && (i.cls = /*cls*/
      n[1] + " " + gt(
        "outer",
        Ks,
        /*mods*/
        n[31]
      ) + /*customClass*/
      (n[30] ? ` ${/*customClass*/
      n[30]}` : "") + /*hoverClassName*/
      (n[18] ? ` ${/*hoverClassName*/
      n[18]}` : "")), o[0] & /*stl*/
      536870912 && (i.style = cr(
        /*stl*/
        n[29]
      )), o[0] & /*actions*/
      33554432 && (i.actions = /*actions*/
      n[25]), o[0] & /*doubleTapActions*/
      67108864 && (i.doubleTapActions = /*doubleTapActions*/
      n[26]), o[0] & /*longTapActions*/
      134217728 && (i.longTapActions = /*longTapActions*/
      n[27]), o[0] & /*pressStartActions*/
      4096 && (i.pressStartActions = /*pressStartActions*/
      n[12]), o[0] & /*pressEndActions*/
      8192 && (i.pressEndActions = /*pressEndActions*/
      n[13]), o[0] & /*hoverStartActions*/
      16384 && (i.hoverStartActions = /*hoverStartActions*/
      n[14]), o[0] & /*hoverEndActions*/
      32768 && (i.hoverEndActions = /*hoverEndActions*/
      n[15]), o[0] & /*attrs*/
      2097152 && (i.attrs = /*attrs*/
      n[21]), o[0] & /*hasInnerFocusable*/
      4 && (i.hasInnerFocusable = /*hasInnerFocusable*/
      n[2]), o[0] & /*actionAnimationList*/
      65536 && (i.isNativeActionAnimation = !/*actionAnimationList*/
      n[16].length || tu(
        /*actionAnimationList*/
        n[16]
      )), o[0] & /*$jsonAccessibility*/
      1048576 && (i.customAccessibility = /*$jsonAccessibility*/
      n[20]), o[0] & /*captureFocusOnAction*/
      268435456 && (i.captureFocusOnAction = /*captureFocusOnAction*/
      n[28]), o[0] & /*containerElement*/
      8 && (i.containerElement = /*containerElement*/
      n[3]), o[0] & /*borderElemStyle, hasBorder, hasCustomFocus, widthMin, widthMax, heightMin, heightMax, componentContext, $direction, background, backgroundRadius, hasSeparateBg*/
      4853745 | o[4] & /*$$scope*/
      268435456 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Za(e) {
  let r, t;
  return r = new Np({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      direction: (
        /*$direction*/
        e[19]
      ),
      background: (
        /*background*/
        e[10]
      ),
      radius: (
        /*backgroundRadius*/
        e[5]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*$direction*/
      524288 && (i.direction = /*$direction*/
      n[19]), o[0] & /*background*/
      1024 && (i.background = /*background*/
      n[10]), o[0] & /*backgroundRadius*/
      32 && (i.radius = /*backgroundRadius*/
      n[5]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Qa(e) {
  let r, t;
  return {
    c() {
      r = Pe("span"), g(r, "class", Ks.outer__border), g(r, "style", t = cr(
        /*borderElemStyle*/
        e[4]
      ));
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o[0] & /*borderElemStyle*/
      16 && t !== (t = cr(
        /*borderElemStyle*/
        n[4]
      )) && g(r, "style", t);
    },
    d(n) {
      n && J(r);
    }
  };
}
function Lp(e) {
  let r, t, n, o = (
    /*hasSeparateBg*/
    e[11] && Za(e)
  );
  const i = (
    /*#slots*/
    e[149].default
  ), s = nl(
    i,
    e,
    /*$$scope*/
    e[152],
    Ya
  );
  let a = (
    /*hasBorder*/
    e[22] && Qa(e)
  );
  return {
    c() {
      o && o.c(), r = or(), s && s.c(), a && a.c(), t = or();
    },
    m(l, u) {
      o && o.m(l, u), K(l, r, u), s && s.m(l, u), a && a.m(l, u), K(l, t, u), n = !0;
    },
    p(l, u) {
      /*hasSeparateBg*/
      l[11] ? o ? (o.p(l, u), u[0] & /*hasSeparateBg*/
      2048 && W(o, 1)) : (o = Za(l), o.c(), W(o, 1), o.m(r.parentNode, r)) : o && (pr(), ne(o, 1, 1, () => {
        o = null;
      }), gr()), s && s.p && (!n || u[0] & /*hasCustomFocus, widthMin, widthMax, heightMin, heightMax*/
      132032 | u[4] & /*$$scope*/
      268435456) && il(
        s,
        i,
        l,
        /*$$scope*/
        l[152],
        n ? ol(
          i,
          /*$$scope*/
          l[152],
          u,
          zp
        ) : sl(
          /*$$scope*/
          l[152]
        ),
        Ya
      ), /*hasBorder*/
      l[22] ? a ? a.p(l, u) : (a = Qa(l), a.c(), a.m(t.parentNode, t)) : a && (a.d(1), a = null);
    },
    i(l) {
      n || (W(o), W(s, l), n = !0);
    },
    o(l) {
      ne(o), ne(s, l), n = !1;
    },
    d(l) {
      l && (J(r), J(t)), o && o.d(l), s && s.d(l), a && a.d(l);
    }
  };
}
function Op(e) {
  let r, t, n = !/*hasWidthError*/
  e[23] && !/*hasHeightError*/
  e[24] && Xa(e);
  return {
    c() {
      n && n.c(), r = or();
    },
    m(o, i) {
      n && n.m(o, i), K(o, r, i), t = !0;
    },
    p(o, i) {
      !/*hasWidthError*/
      o[23] && !/*hasHeightError*/
      o[24] ? n ? (n.p(o, i), i[0] & /*hasWidthError, hasHeightError*/
      25165824 && W(n, 1)) : (n = Xa(o), n.c(), W(n, 1), n.m(r.parentNode, r)) : n && (pr(), ne(n, 1, 1, () => {
        n = null;
      }), gr());
    },
    i(o) {
      t || (W(n), t = !0);
    },
    o(o) {
      ne(n), t = !1;
    },
    d(o) {
      o && J(r), n && n.d(o);
    }
  };
}
const xa = {
  left: "start",
  center: "center",
  right: "end",
  start: "start",
  end: "end"
}, $a = {
  left: "end",
  center: "center",
  right: "start",
  start: "start",
  end: "end"
}, eu = {
  top: "start",
  center: "center",
  bottom: "end",
  baseline: "baseline"
}, Al = (e) => `The component id with the "${e}" property for state change is missing. Either specify the id, or specify the "transition_trigger" property without "state_change" value.`;
function tu(e) {
  return e.some((r) => r.name === "native");
}
function Bp(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, B, z, oe, fe, T, Y, le, A, D, M, U, q, be, Ae, Ce, he, Fe, x, Je, Ye, Xe, ye, Ie, pe, me, _e, ee, ce, te, we, Ue, Ke = v, $ = () => (Ke(), Ke = E(k, (_t) => t(133, Ue = _t)), k), Oe, Ne = v, ot = () => (Ne(), Ne = E(N, (_t) => t(134, Oe = _t)), N), ct, rt = v, kt = () => (rt(), rt = E(w, (_t) => t(135, ct = _t)), w), it, Mt = v, ft = () => (Mt(), Mt = E(B, (_t) => t(136, it = _t)), B), Z, de = v, lt = () => (de(), de = E(p, (_t) => t(137, Z = _t)), p), ze, F = v, Et = () => (F(), F = E(m, (_t) => t(138, ze = _t)), m), ut, Vt = v, It = () => (Vt(), Vt = E(o, (_t) => t(139, ut = _t)), o), nt, Q = v, At = () => (Q(), Q = E(h, (_t) => t(20, nt = _t)), h), Pt, $t = v, Zt = () => ($t(), $t = E(_, (_t) => t(140, Pt = _t)), _), Ee, He = v, ht = () => (He(), He = E(f, (_t) => t(141, Ee = _t)), f), Te, xe = v, Le = () => (xe(), xe = E(c, (_t) => t(142, Te = _t)), c), Ft, Be = v, bt = () => (Be(), Be = E(a, (_t) => t(143, Ft = _t)), a), Ut, Tt = v, ir = () => (Tt(), Tt = E(u, (_t) => t(144, Ut = _t)), u), De, jt = v, sr = () => (jt(), jt = E(l, (_t) => t(145, De = _t)), l), rr, nr = v, fr = () => (nr(), nr = E(s, (_t) => t(146, rr = _t)), s), wr, Nt = v, br = () => (Nt(), Nt = E(i, (_t) => t(147, wr = _t)), i), Rt;
  e.$$.on_destroy.push(() => Ke()), e.$$.on_destroy.push(() => Ne()), e.$$.on_destroy.push(() => rt()), e.$$.on_destroy.push(() => Mt()), e.$$.on_destroy.push(() => de()), e.$$.on_destroy.push(() => F()), e.$$.on_destroy.push(() => Vt()), e.$$.on_destroy.push(() => Q()), e.$$.on_destroy.push(() => $t()), e.$$.on_destroy.push(() => He()), e.$$.on_destroy.push(() => xe()), e.$$.on_destroy.push(() => Be()), e.$$.on_destroy.push(() => Tt()), e.$$.on_destroy.push(() => jt()), e.$$.on_destroy.push(() => nr()), e.$$.on_destroy.push(() => Nt());
  let { $$slots: mt = {}, $$scope: er } = r, { componentContext: se } = r, { cls: kr = "" } = r, { style: vr = void 0 } = r, { layoutParams: Ct = {} } = r, { customDescription: Dr = !1 } = r, { customPaddings: Br = !1 } = r, { customActions: ar = "" } = r, { additionalPaddings: at = null } = r, { heightByAspect: St = !1 } = r, { parentOf: Gt = void 0 } = r, { parentOfSimpleMode: Qt = void 0 } = r, { replaceItems: $e = void 0 } = r, { hasInnerFocusable: pt = !1 } = r, { alwaysCustomFocus: ue = !1 } = r, { containerElement: vt = "span" } = r, { devapi: tr = void 0 } = r;
  const Ht = Tr(Xr), yr = Tr(_a), { isEnabled: j } = Tr(pa);
  mn(e, j, (_t) => t(148, Rt = _t));
  const ie = Ht.direction;
  mn(e, ie, (_t) => t(19, we = _t));
  let d, L, je = null, We = [], ke = {}, P = {}, zt = !1, Lt = 1, Ge = "transparent", st = 0, Jt = {
    "top-left": 0,
    "top-right": 0,
    "bottom-right": 0,
    "bottom-left": 0
  }, Er = "", lr = null, Ir = "", yn = {}, Se, qr, Ur, an = 0, y = 0, C = 0, S = !1, ae = !1, R = {}, tt, Me, xt, Dt = 0, H = 0, Xt = 0, dt = !1, jr = !1, Mr = 1, wn, $r, Gr, on, Ln = [], Hn = !1, lo = !1, Mn, Kt, b, V = [], re = [], O = [], Ve = [], ve = [], qt = [], Yt = [], Yr = [], Pr = [], Hr = [], mo = "", ro, no, $n, qi, et = !1, Cr = "visible", sn, Lo, Oo = !1, kn = !0, Zo, Cn, Co, fi;
  function g_() {
    t(72, lr = null), t(73, Ir = ""), t(86, Mr = 1), t(98, et = !1), t(99, Cr = "visible"), t(100, sn = void 0), t(28, kn = !0), Ln = se.fakeElement ? [] : se.json.transition_triggers || ["state_change", "visibility_change"], t(89, Hn = Ln.indexOf("state_change") !== -1), lo = Ln.indexOf("visibility_change") !== -1, d && Va(d), Cn == null || Cn(), Rt && t(102, Cn = Ht.processVariableTriggers(se, se.json.variable_triggers));
  }
  function h_(_t, Qr) {
    if (!Array.isArray(Gt) || !$e || Qt && (Array.isArray(Qr) ? Qr.length : 0) !== 1)
      return;
    const Sn = Gt.findIndex((fn) => (fn == null ? void 0 : fn.id) === _t), Wn = Gt.slice();
    Wn.splice(Sn, 1, ...(Qr || []).map((fn) => ({ json: fn, id: fn == null ? void 0 : fn.id }))), t(53, Gt = Wn), $e(Wn.map((fn) => fn == null ? void 0 : fn.json));
  }
  function m_(_t) {
    const Qr = io(_t.start_value, 1), Sn = io(_t.end_value, 1), Wn = nn(_t.start_delay, 0), fn = Oi() ? 0 : nn(_t.duration, 300), bo = Cd(_t.interpolator, "ease_in_out").replace(/_/g, "-");
    switch (_t.name) {
      case "fade":
        return t(94, ro = Qr), t(95, no = Sn), `opacity ${fn}ms ${bo} ${Wn}ms`;
      case "scale":
        return t(96, $n = Qr), t(97, qi = Sn), `transform ${fn}ms ${bo} ${Wn}ms`;
      case "native":
      case "no_animation":
        return "";
      default:
        return se.logError(X(new Error("Unknown action_animation name"), {
          additional: { animation: _t.name }
        })), "";
    }
  }
  async function b_(_t) {
    t(99, Cr = _t);
    const Qr = _t === "visible" ? "in" : "out", Sn = Qr === "in" ? se.json.transition_in : se.json.transition_out;
    if (lo && Sn) {
      let Wn;
      _t === "gone" && (Wn = d.getBoundingClientRect()), await An(), Qr === "in" && t(91, Kt = !0), yr.runVisibilityTransition(
        {
          ...se.json,
          visibility: "visible"
        },
        se,
        Sn,
        d,
        Qr,
        Wn
      ).then(() => {
        Qr === "in" && t(91, Kt = !1);
      }).catch((fn) => {
        throw Qr === "in" && t(91, Kt = !1), fn;
      });
    }
  }
  function Sa() {
    if (je && d) {
      const _t = Ht.getExtensionContext(se);
      je.forEach((Qr) => {
        var Sn;
        (Sn = Qr.unmountView) == null || Sn.call(Qr, d, _t);
      }), je = null;
    }
  }
  function y_() {
    if (je != null && je.length) {
      const _t = Ht.getExtensionContext(se);
      je.forEach((Qr) => {
        var Sn;
        (Sn = Qr.updateView) == null || Sn.call(Qr, d, _t);
      });
    }
  }
  let Eo = null, Bo = null, di = "desktop";
  function Yi() {
    Eo != null && Eo.matches ? t(105, di = "mobile") : Bo != null && Bo.matches ? t(105, di = "tablet") : t(105, di = "desktop");
  }
  let ao = null, Xi = "";
  function Va(_t) {
    var Zi, Qi, xi;
    Co == null || Co.destroy(), t(65, d = _t), Hn && se.json.transition_in && (se.id ? yr.registerChildWithTransitionIn(se.json, se, se.json.transition_in, _t).then(() => {
      t(90, Mn = !1);
    }).catch((Qo) => {
      throw t(90, Mn = !1), Qo;
    }) : se.logError(X(new Error(Al("transition_in")), { level: "warn" }))), Hn && se.json.transition_out && (se.id ? yr.registerChildWithTransitionOut(se.json, se, se.json.transition_out, _t) : se.logError(X(new Error(Al("transition_out")), { level: "warn" }))), se.fakeElement || (se.json.transition_change && !se.id && se.logError(X(new Error(Al("transition_change")), { level: "warn" })), yr.registerChildWithTransitionChange(se.json, se, se.json.transition_change, _t).then(() => {
      t(92, b = !1);
    }).catch((Qo) => {
      throw t(92, b = !1), Qo;
    }));
    const Qr = !se.fakeElement || se.fakeElement === oi, Sn = Qr ? se.json.visibility_actions || se.json.visibility_action && [se.json.visibility_action] : [], Wn = Qr ? se.json.disappear_actions : [];
    let fn;
    (Array.isArray(Sn) && Sn.length || Array.isArray(Wn) && Wn.length) && (fn = dp(_t, {
      visibilityActions: Sn,
      disappearActions: Wn,
      rootCtx: Ht,
      componentContext: se
    }));
    const bo = se.id;
    return bo && (fi == null || fi(), fi = Ht.registerId(bo, {
      context: () => se,
      node: () => d
    }), yr.registerChild(bo)), (Zi = se.json.tooltips) == null || Zi.forEach((Qo) => {
      Ht.registerTooltip(_t, Qo);
    }), Lo && (Lo.disconnect(), Lo = void 0), Lo = kp(d, se, (Qi = se.json.layout_provider) == null ? void 0 : Qi.width_variable_name, (xi = se.json.layout_provider) == null ? void 0 : xi.height_variable_name), Co = {
      destroy() {
        fi && (fi(), fi = void 0), bo && yr.unregisterChild(bo), fn && fn.destroy();
      }
    }, Co;
  }
  function w_() {
    se.json.focus && ((ue || !Nl(Ht.isPointerFocus)) && t(17, Oo = !0), se.execAnyActions(Ve));
  }
  function k_() {
    se.json.focus && (t(17, Oo = !1), se.execAnyActions(ve));
  }
  al(y_), ln(() => {
    var _t;
    We.forEach((Qr) => {
      Ht.unregisterParentOf(Qr);
    }), t(66, We = []), Lo && (Lo.disconnect(), Lo = void 0), (_t = se.json.tooltips) == null || _t.forEach((Qr) => {
      Ht.unregisterTooltip(Qr);
    }), Cn == null || Cn(), Sa(), ao && (ao.remove(), t(106, ao = null)), Eo && (Eo.removeEventListener("change", Yi), t(103, Eo = null)), Bo && (Bo.removeEventListener("change", Yi), t(104, Bo = null));
  });
  function v_(_t) {
    On.call(this, e, _t);
  }
  function j_(_t) {
    On.call(this, e, _t);
  }
  return e.$$set = (_t) => {
    "componentContext" in _t && t(0, se = _t.componentContext), "cls" in _t && t(1, kr = _t.cls), "style" in _t && t(54, vr = _t.style), "layoutParams" in _t && t(55, Ct = _t.layoutParams), "customDescription" in _t && t(56, Dr = _t.customDescription), "customPaddings" in _t && t(57, Br = _t.customPaddings), "customActions" in _t && t(58, ar = _t.customActions), "additionalPaddings" in _t && t(59, at = _t.additionalPaddings), "heightByAspect" in _t && t(60, St = _t.heightByAspect), "parentOf" in _t && t(53, Gt = _t.parentOf), "parentOfSimpleMode" in _t && t(61, Qt = _t.parentOfSimpleMode), "replaceItems" in _t && t(62, $e = _t.replaceItems), "hasInnerFocusable" in _t && t(2, pt = _t.hasInnerFocusable), "alwaysCustomFocus" in _t && t(63, ue = _t.alwaysCustomFocus), "containerElement" in _t && t(3, vt = _t.containerElement), "devapi" in _t && t(64, tr = _t.devapi), "$$scope" in _t && t(152, er = _t.$$scope);
  }, e.$$.update = () => {
    var _t, Qr, Sn, Wn, fn, bo, Zi, Qi, xi, Qo, Fa;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(132, n = se.origJson), e.$$.dirty[4] & /*origJson*/
    256 && n && g_(), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[3] & /*prevTriggersUnsubscribe*/
    512 | e.$$.dirty[4] & /*$isEnabled*/
    16777216 && (Rt ? (Cn == null || Cn(), t(102, Cn = Ht.processVariableTriggers(se, se.json.variable_triggers))) : Cn == null || Cn()), e.$$.dirty[0] & /*componentContext*/
    1 && It(t(47, o = se.getDerivedFromVars(se.json.focus))), e.$$.dirty[0] & /*componentContext*/
    1 && br(t(46, i = se.getDerivedFromVars(se.json.border))), e.$$.dirty[0] & /*componentContext*/
    1 && fr(t(45, s = se.getDerivedFromVars(se.json.paddings))), e.$$.dirty[0] & /*componentContext*/
    1 && bt(t(44, a = se.getDerivedFromVars(se.json.margins))), e.$$.dirty[0] & /*componentContext*/
    1 && sr(t(43, l = se.getDerivedFromVars(se.json.width))), e.$$.dirty[0] & /*componentContext*/
    1 && ir(t(42, u = se.getDerivedFromVars(se.json.alignment_horizontal))), e.$$.dirty[0] & /*componentContext*/
    1 && Le(t(41, c = se.getDerivedFromVars(se.json.height))), e.$$.dirty[0] & /*componentContext*/
    1 && ht(t(40, f = se.getDerivedFromVars(se.json.alignment_vertical))), e.$$.dirty[0] & /*componentContext*/
    1 && Zt(t(39, _ = se.getDerivedFromVars(se.json.alpha))), e.$$.dirty[0] & /*componentContext*/
    1 && At(t(38, h = se.getDerivedFromVars(se.json.accessibility))), e.$$.dirty[0] & /*componentContext*/
    1 && Et(t(37, m = se.getDerivedFromVars(se.json.background))), e.$$.dirty[0] & /*componentContext*/
    1 && lt(t(36, p = se.getDerivedFromVars(se.json.action_animation))), e.$$.dirty[0] & /*componentContext*/
    1 && kt(t(35, w = se.getDerivedFromVars(se.json.visibility))), e.$$.dirty[0] & /*componentContext*/
    1 && $(t(34, k = se.getDerivedFromVars(se.json.transform))), e.$$.dirty[0] & /*componentContext*/
    1 && ot(t(33, N = se.getDerivedFromVars(se.json.transformations))), e.$$.dirty[0] & /*componentContext*/
    1 && ft(t(32, B = se.getDerivedFromVars(se.json.capture_focus_on_action))), e.$$.dirty[1] & /*parentOf, parentOfSimpleMode*/
    1077936128 | e.$$.dirty[2] & /*prevChilds*/
    16 && (We.forEach((Ze) => {
      Ht.unregisterParentOf(Ze);
    }), t(66, We = []), Gt && Gt.forEach((Ze) => {
      Ze != null && Ze.id && (We.push(Ze.id), Ht.registerParentOf(Ze.id, {
        replaceWith: h_,
        isSingleMode: !!Qt
      }));
    })), e.$$.dirty[0] & /*hasCustomFocus, borderElemStyle*/
    131088 | e.$$.dirty[2] & /*strokeWidth, strokeColor, cornersRadius, cornerRadius, borderStyle*/
    992 | e.$$.dirty[4] & /*$jsonFocus, $jsonBorder*/
    8421376) {
      const Ze = Oo && (ut != null && ut.border) ? ut.border : wr;
      let en = {}, vn = {}, Dn = !1, tn = "";
      if (Ze) {
        if (Zr(Ze.has_shadow, !1)) {
          const dn = Ze.shadow;
          dn ? en["box-shadow"] = bp(dn) : en["box-shadow"] = "0 1px 2px 0 rgba(0,0,0,.18), 0 0 0 1px rgba(0,0,0,.07)";
        }
        if (Ze.stroke) {
          Dn = !0, t(68, Lt = nn(Ze.stroke.width, Lt)), t(69, Ge = dr(Ze.stroke.color, 1, Ge));
          const dn = ((_t = Ze.stroke.style) == null ? void 0 : _t.type) === "dashed" ? "dashed" : "solid";
          vn["--divkit-border"] = `${ge(Lt + 1)} ${dn} ${Ge}`;
        }
        if (Ze.corners_radius && typeof Ze.corners_radius == "object") {
          t(71, Jt = mp(Ze.corners_radius, Jt)), en["border-radius"] = Es(Jt);
          const dn = {};
          ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((Kn) => {
            dn[Kn] = (Jt[Kn] || 0) + 1;
          }), vn["--divkit-border-radius"] = Es(dn);
        } else Ze.corner_radius && (t(70, st = nn(Ze.corner_radius, st)), t(71, Jt = {
          "top-left": st,
          "top-right": st,
          "bottom-right": st,
          "bottom-left": st
        }), en["border-radius"] = ge(st), vn["--divkit-border-radius"] = ge(st + 1));
        if (Dn && Lt && (Ze.corners_radius || Ze.corner_radius)) {
          let dn = { ...Jt };
          ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((Kn) => {
            dn[Kn] = (dn[Kn] || 0) + Lt / 2;
          }), tn = Es(dn);
        }
      }
      t(67, ke = ei(en, ke)), t(4, P = ei(vn, P)), t(22, zt = Dn), t(5, Er = tn);
    }
    if (e.$$.dirty[1] & /*customPaddings*/
    67108864 | e.$$.dirty[2] & /*selfPadding*/
    1024 | e.$$.dirty[4] & /*$jsonPaddings*/
    4194304 && t(72, lr = ni(
      rr && !Br ? rr : void 0,
      lr
    )), e.$$.dirty[0] & /*$direction*/
    524288 | e.$$.dirty[1] & /*additionalPaddings*/
    268435456 | e.$$.dirty[2] & /*selfPadding*/
    1024 && t(119, z = so(hp(lr, at), we)), e.$$.dirty[0] & /*$direction*/
    524288 | e.$$.dirty[2] & /*margin*/
    2048 | e.$$.dirty[4] & /*$jsonMargins*/
    524288 && t(73, Ir = is(Ft, we, Ir)), e.$$.dirty[0] & /*componentContext*/
    1 && t(130, Fe = se.json.responsive), e.$$.dirty[3] & /*responsiveMobileQuery, responsiveTabletQuery*/
    3072 | e.$$.dirty[4] & /*responsiveConfig*/
    64 && (Fe && typeof Fe == "object" && typeof window < "u" ? (Eo || (t(103, Eo = window.matchMedia("(max-width: 767px)")), t(104, Bo = window.matchMedia("(min-width: 768px) and (max-width: 1023px)")), Eo.addEventListener("change", Yi), Bo.addEventListener("change", Yi)), Yi()) : t(105, di = "desktop")), e.$$.dirty[3] & /*responsiveBreakpoint*/
    4096 | e.$$.dirty[4] & /*responsiveConfig*/
    64 && t(126, x = di !== "desktop" && (Fe == null ? void 0 : Fe[di]) || null), e.$$.dirty[0] & /*$direction*/
    524288 | e.$$.dirty[4] & /*activeResponsive*/
    4 && t(128, _e = (() => {
      const Ze = x == null ? void 0 : x.alignment_horizontal;
      if (Ze === "left" || Ze === "center" || Ze === "right" || Ze === "start" || Ze === "end")
        return (we === "ltr" ? xa : $a)[Ze];
    })()), e.$$.dirty[0] & /*componentContext, $direction*/
    524289 | e.$$.dirty[1] & /*layoutParams*/
    16777216 | e.$$.dirty[2] & /*widthNum, widthMods*/
    20480 | e.$$.dirty[4] & /*$jsonWidth, $jsonMargins, responsiveAlignmentHorizontal, $jsonAlignmentHorizontal*/
    3670032) {
      let Ze, en, vn, Dn, tn = {}, dn = 0, Kn = 0, Ro = !1, Ho = !1;
      const bn = (Qr = se.json.width) == null ? void 0 : Qr.type;
      if (bn === "fixed")
        t(76, an = nn(De == null ? void 0 : De.value, an)), en = ge(an);
      else if (bn === "wrap_content" || (bn === "match_parent" || !bn) && Ct.parentHorizontalWrapContent)
        Ze = "content", (bn === "wrap_content" && (De != null && De.constrained) || (bn === "match_parent" || !bn) && Ct.parentHorizontalWrapContent) && (tn["width-constrained"] = !0, Ct.parentContainerOrientation === "horizontal" && (Kn = 1)), (bn === "match_parent" || !bn) && se.logError(X(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
      else if (Ze = "parent", Ct.parentContainerOrientation === "vertical" && Ct.parentContainerWrap && (Ho = !0, se.logError(X(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), Ct.parentContainerOrientation === "vertical" && Ct.parentContainerKnownWidth || Ct.stretchWidth || Ct.parentContainerOrientation === "horizontal" && Ct.treatMatchParentAs100) {
        const xr = (Wn = (Sn = we === "ltr" ? Ft == null ? void 0 : Ft.start : Ft == null ? void 0 : Ft.end) != null ? Sn : Ft == null ? void 0 : Ft.left) != null ? Wn : 0, In = (bo = (fn = we === "ltr" ? Ft == null ? void 0 : Ft.end : Ft == null ? void 0 : Ft.start) != null ? fn : Ft == null ? void 0 : Ft.right) != null ? bo : 0, En = `calc(100% - ${cn(xr + In)})`;
        Ct.stretchWidth ? (en = "0", vn = En) : en = En;
      } else Ct.parentContainerOrientation === "horizontal" && (dn = De && "weight" in De && De.weight || 1, Ct.parentContainerWrap && (Ro = !0));
      if (bn === "wrap_content" || bn === "match_parent") {
        const xr = De;
        let In, En;
        xr.min_size && Pn(xr.min_size.value) && (In = xr.min_size.value), xr.max_size && Pn(xr.max_size.value) && (En = xr.max_size.value), In !== void 0 && En !== void 0 && In > En && (se.logError(X(new Error("Element has incorrect width constraints (min size is bigger than max size)."), {
          additional: {
            id: se.json.id,
            minSize: In + "dp",
            maxSize: En + "dp"
          }
        })), In = En = void 0), In !== void 0 && (vn = ge(In)), En !== void 0 && (Dn = ge(En));
      }
      if (_e)
        tn["halign-self"] = _e;
      else if (Ze === "parent")
        tn["halign-self"] = "stretch";
      else {
        const xr = Ut;
        xr === "left" || xr === "center" || xr === "right" || xr === "start" || xr === "end" ? tn["halign-self"] = (we === "ltr" ? xa : $a)[xr] : tn["halign-self"] = Ct.parentHAlign || "start";
      }
      Ze && (tn.width = Ze), t(75, Se = en), t(6, qr = vn), t(7, Ur = Dn), t(77, y = dn), t(78, C = Kn), t(74, yn = ei(tn, yn)), t(79, S = Ro), t(23, ae = Ho);
    }
    if (e.$$.dirty[4] & /*activeResponsive*/
    4 && t(127, ee = (() => {
      const Ze = x == null ? void 0 : x.alignment_vertical;
      if (Ze === "top" || Ze === "center" || Ze === "bottom" || Ze === "baseline")
        return eu[Ze];
    })()), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*heightByAspect, layoutParams*/
    553648128 | e.$$.dirty[2] & /*heightNum, heightMods*/
    1310720 | e.$$.dirty[4] & /*$jsonHeight, $jsonMargins, responsiveAlignmentVertical, $jsonAlignmentVertical*/
    917512) {
      let Ze, en, vn, Dn, tn = {}, dn = 0, Kn = 0, Ro = !1, Ho = !1;
      const bn = (Zi = se.json.height) == null ? void 0 : Zi.type;
      if (!St) if (bn === "fixed")
        t(82, Dt = nn(Te == null ? void 0 : Te.value, Dt)), en = ge(Dt);
      else if (bn === "match_parent" && !Ct.parentVerticalWrapContent)
        if (Ze = "parent", Ct.parentContainerOrientation === "horizontal" && Ct.parentContainerWrap && (Ho = !0, se.logError(X(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), Ct.parentContainerOrientation === "horizontal" && Ct.parentContainerKnownHeight || Ct.stretchHeight || Ct.parentContainerOrientation === "vertical" && Ct.treatMatchParentAs100) {
          const xr = (Qi = Ft == null ? void 0 : Ft.top) != null ? Qi : 0, In = (xi = Ft == null ? void 0 : Ft.bottom) != null ? xi : 0, En = `calc(100% - ${cn(xr + In)})`;
          Ct.stretchHeight ? (en = "0", vn = En) : en = En;
        } else Ct.parentContainerOrientation === "vertical" && (dn = (Te == null ? void 0 : Te.weight) || 1, Ct.parentContainerWrap && (Ro = !0));
      else
        Ze = "content", (bn === "wrap_content" && (Te != null && Te.constrained) || bn === "match_parent" && Ct.parentVerticalWrapContent) && (tn["height-constrained"] = !0, Ct.parentContainerOrientation === "vertical" && (Kn = 1)), bn === "match_parent" && se.logError(X(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
      if (!St && (bn === "match_parent" || bn === "wrap_content")) {
        const xr = Te;
        let In, En;
        xr.min_size && Pn(xr.min_size.value) && (In = xr.min_size.value), xr.max_size && Pn(xr.max_size.value) && (En = xr.max_size.value), In !== void 0 && En !== void 0 && In > En && (se.logError(X(new Error("Element has incorrect height constraints (min size is bigger than max size)."), {
          additional: {
            id: se.json.id,
            minSize: In + "dp",
            maxSize: En + "dp"
          }
        })), In = En = void 0), In !== void 0 && (vn = ge(In)), En !== void 0 && (Dn = ge(En));
      }
      if (ee)
        tn["valign-self"] = ee;
      else if (Ze === "parent")
        tn["valign-self"] = "stretch";
      else {
        const xr = Ee;
        xr === "top" || xr === "center" || xr === "bottom" || xr === "baseline" && Ct.parentContainerOrientation === "horizontal" ? tn["valign-self"] = eu[xr] : tn["valign-self"] = Ct.parentVAlign || "start";
      }
      Ze && (tn.height = Ze), t(81, tt = en), t(8, Me = vn), t(9, xt = Dn), t(83, H = dn), t(84, Xt = Kn), t(80, R = ei(tn, R)), t(85, dt = Ro), t(24, jr = Ho);
    }
    if (e.$$.dirty[1] & /*layoutParams*/
    16777216 && t(131, oe = Ct.overlapParent ? !0 : void 0), e.$$.dirty[1] & /*layoutParams*/
    16777216 && t(121, fe = Ct.gridArea ? `${Ct.gridArea.y + 1}/${Ct.gridArea.x + 1}/span ${Ct.gridArea.rowSpan}/span ${Ct.gridArea.colSpan}` : void 0), e.$$.dirty[2] & /*alpha*/
    16777216 | e.$$.dirty[4] & /*$jsonAlpha*/
    65536 && (t(86, Mr = _p(Pt, Mr)), t(87, wn = Mr === 1 ? void 0 : Mr)), e.$$.dirty[0] & /*$jsonAccessibility*/
    1048576 | e.$$.dirty[1] & /*customDescription*/
    33554432 && (t(21, L = void 0), nt && !Dr)) {
      const Ze = Yo(nt);
      Ze && (t(21, L = {}), t(21, L["aria-label"] = Ze, L));
    }
    if (e.$$.dirty[0] & /*hasCustomFocus, background, backgroundRadius, hasSeparateBg, $direction*/
    658464 | e.$$.dirty[4] & /*$jsonFocus, $jsonBackground*/
    49152 && (t(10, $r = Oo && (ut != null && ut.background) ? ut.background : ze), t(88, Gr = {}), t(11, on = !1), Array.isArray($r) && (t(11, on = $r.some((Ze) => Ze.type === "image" || Ze.type === "nine_patch_image") || !!Er), !on))) {
      const Ze = cl($r, we);
      t(88, Gr["background-color"] = Ze.color, Gr), t(88, Gr["background-image"] = Ze.image, Gr), t(88, Gr["background-size"] = Ze.size, Gr), t(88, Gr["background-position"] = Ze.position, Gr), t(88, Gr["background-repeat"] = "no-repeat", Gr);
    }
    if (e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[2] & /*hasStateChangeTrigger*/
    134217728 && (t(90, Mn = void 0), Hn && se.id && se.json.transition_in && Ht.isRunning("stateChange") && t(90, Mn = !0)), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[2] & /*hasStateChangeTrigger*/
    134217728 && (t(92, b = void 0), Hn && se.id && Ht.isRunning("stateChange") && yr.hasTransitionChange(se.id) && t(92, b = !0)), e.$$.dirty[0] & /*componentContext, pressStartActions, pressEndActions, hoverStartActions, hoverEndActions*/
    61441 | e.$$.dirty[1] & /*customActions*/
    134217728) {
      const Ze = se.json;
      let en = Ze.actions || Ze.action && [Ze.action] || [], vn = Ze.doubletap_actions || [], Dn = Ze.longtap_actions || [], tn = ((Qo = Ze.focus) == null ? void 0 : Qo.on_focus) || [], dn = ((Fa = Ze.focus) == null ? void 0 : Fa.on_blur) || [], Kn = Ze.press_start_actions || [], Ro = Ze.press_end_actions || [], Ho = Ze.hover_start_actions || [], bn = Ze.hover_end_actions || [];
      se.fakeElement && se.fakeElement !== oi ? (en = [], vn = [], Dn = [], tn = [], dn = []) : (Array.isArray(en) || (en = [], se.logError(X(new Error("Actions should be array")))), Array.isArray(vn) || (vn = [], se.logError(X(new Error("DoubleTapActions should be array")))), Array.isArray(Dn) || (Dn = [], se.logError(X(new Error("LongTapActions should be array")))), Array.isArray(tn) || (tn = [], se.logError(X(new Error("FocusActions should be array")))), Array.isArray(dn) || (dn = [], se.logError(X(new Error("BlurActions should be array")))), Array.isArray(Kn) || (Kn = [], se.logError(X(new Error("PressStartActions should be array")))), Array.isArray(Ro) || (Ro = [], se.logError(X(new Error("PressEndActions should be array")))), Array.isArray(Ho) || (Ho = [], se.logError(X(new Error("HoverStartActions should be array")))), Array.isArray(bn) || (bn = [], se.logError(X(new Error("HoverEndActions should be array"))))), (en.length || vn.length || Dn.length || qt.length || Yt.length || Yr.length || Pr.length) && ar && (en = [], vn = [], Dn = [], t(12, qt = []), t(13, Yt = []), t(14, Yr = []), t(15, Pr = []), se.logError(X(new Error(`Cannot use action on component "${ar}"`)))), t(25, V = en), t(26, re = vn), t(27, O = Dn), Ve = tn, ve = dn, t(12, qt = Kn), t(13, Yt = Ro), t(14, Yr = Ho), t(15, Pr = bn);
    }
    if (e.$$.dirty[0] & /*actionAnimationList*/
    65536 | e.$$.dirty[4] & /*$jsonActionAnimation*/
    8192 && Z && (t(16, Hr = ss(Z)), t(93, mo = Hr.map(m_).filter(Boolean).join(", "))), e.$$.dirty[4] & /*$jsonCaptureFocusOnAction*/
    4096 && typeof it == "boolean" && t(28, kn = it), e.$$.dirty[3] & /*visibility, isVisibilityInited*/
    96 | e.$$.dirty[4] & /*$jsonVisibility*/
    2048) {
      const Ze = Cr, en = gp(ct, Cr);
      Ze !== en && (et && (Cr === "visible" || en === "visible") ? b_(en) : t(99, Cr = en)), et || t(98, et = !0);
    }
    if (e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[2] & /*currentNode*/
    8 | e.$$.dirty[3] & /*prevExtensionsVal*/
    256 && se.json && d && !Gi(se.json.extensions, Zo)) {
      let Ze = t(101, Zo = se.json.extensions);
      An().then(() => {
        if (!(Ze !== Zo || !d) && (Sa(), Array.isArray(se.json.extensions))) {
          const en = Ht.getExtensionContext(se);
          je = se.json.extensions.map((vn) => {
            var dn;
            const Dn = vn.id;
            if (!Dn)
              return;
            const tn = Ht.getExtension(Dn, vn.params);
            return tn && ((dn = tn.mountView) == null || dn.call(tn, d, en)), tn;
          }).filter(zo);
        }
      });
    }
    if (e.$$.dirty[4] & /*activeResponsive*/
    4 && t(129, me = x == null ? void 0 : x.visibility), e.$$.dirty[0] & /*hasCustomFocus, componentContext*/
    131073 | e.$$.dirty[1] & /*layoutParams*/
    16777216 | e.$$.dirty[2] & /*widthMods, heightMods, stateChangingInProgress, visibilityChangingInProgress, transitionChangeInProgress*/
    1879314432 | e.$$.dirty[3] & /*visibility, actionAnimationTransition*/
    65 | e.$$.dirty[4] & /*responsiveAlignmentHorizontal, responsiveAlignmentVertical, parentOverlapMod, responsiveVisibility*/
    184 && t(31, T = {
      ...yn,
      ...R,
      ..._e ? {
        "halign-self": _e
      } : {},
      ...ee ? {
        "valign-self": ee
      } : {},
      "parent-overlap": oe,
      "scroll-snap": Ct.scrollSnap,
      "hide-on-transition-in": Mn || Kt || b,
      visibility: me || Cr,
      "has-action-animation": !!mo,
      "parent-flex": Ct.parentContainerOrientation || void 0,
      "parent-grid": !!Ct.gridArea || void 0,
      "has-custom-focus": !!(Oo && se.json.focus)
    }), e.$$.dirty[4] & /*$jsonTransformations, $jsonTransform*/
    1536) {
      let Ze;
      Array.isArray(Oe) ? Ze = Oe : Ue && Ue.rotation !== void 0 && (Ze = [
        {
          type: "rotation",
          angle: Ue.rotation,
          pivot_x: Ue.pivot_x,
          pivot_y: Ue.pivot_y
        }
      ]), Ze ? t(100, sn = vp(Ze)) : t(100, sn = void 0);
    }
    if (e.$$.dirty[2] & /*widthFill, heightFill, widthFlexGrow, heightFlexGrow*/
    10649600 && t(115, Y = S || dt ? "100%" : y || H ? 0 : void 0), e.$$.dirty[0] & /*componentContext*/
    1 && t(30, le = se.json["custom-class"] || ""), e.$$.dirty[0] & /*componentContext*/
    1 && t(113, A = se.json.position), e.$$.dirty[0] & /*componentContext*/
    1 && t(114, D = se.json.sticky_top), e.$$.dirty[0] & /*componentContext*/
    1 && t(112, M = se.json.sticky_bottom), e.$$.dirty[0] & /*componentContext*/
    1 && t(111, U = se.json.z_index), e.$$.dirty[0] & /*componentContext*/
    1 && t(110, q = se.json.cursor), e.$$.dirty[0] & /*componentContext*/
    1 && t(109, be = se.json.backdrop_filter), e.$$.dirty[0] & /*componentContext*/
    1 && t(108, Ae = se.json.overflow), e.$$.dirty[0] & /*componentContext*/
    1 && t(107, Ce = se.json["box-shadow"]), e.$$.dirty[0] & /*componentContext*/
    1 && t(116, he = se.json.custom_transition), e.$$.dirty[0] & /*$direction*/
    524288 | e.$$.dirty[4] & /*activeResponsive*/
    4 && t(120, Je = (() => {
      if (!(x != null && x.paddings)) return;
      const Ze = x.paddings;
      return so(ni(Ze, null), we);
    })()), e.$$.dirty[0] & /*$direction*/
    524288 | e.$$.dirty[4] & /*activeResponsive*/
    4 && t(118, Ye = (() => {
      if (!(x != null && x.margins)) return;
      const Ze = x.margins;
      return is(Ze, we, "");
    })()), e.$$.dirty[4] & /*activeResponsive*/
    4 && t(123, Xe = (() => {
      if (x != null && x["max-width"] && typeof x["max-width"] == "string")
        return x["max-width"];
      if (!(x != null && x.max_width)) return;
      const Ze = x.max_width;
      if (Ze.type === "fixed" && Ze.value) return Ze.value + "px";
    })()), e.$$.dirty[4] & /*activeResponsive*/
    4 && t(124, ye = (() => {
      if (!(x != null && x.width)) return;
      const Ze = x.width;
      if (Ze.type === "fixed" && Ze.value) return ge(Ze.value);
      if (Ze.type === "match_parent") return "100%";
    })()), e.$$.dirty[4] & /*activeResponsive*/
    4 && t(122, Ie = (() => {
      if (!(x != null && x.height)) return;
      const Ze = x.height;
      if (Ze.type === "fixed" && Ze.value) return ge(Ze.value);
      if (Ze.type === "match_parent") return "100%";
    })()), e.$$.dirty[4] & /*activeResponsive*/
    4 && t(117, pe = (x == null ? void 0 : x.opacity) !== void 0 ? x.opacity : void 0), e.$$.dirty[0] & /*componentContext*/
    1 && t(125, ce = se.json.hover), e.$$.dirty[0] & /*hoverClassName*/
    262144 | e.$$.dirty[3] & /*hoverStyleEl*/
    8192 | e.$$.dirty[4] & /*hoverConfig*/
    2)
      if (ce && typeof ce == "object" && typeof document < "u") {
        Xi || t(18, Xi = "divkit-hover-" + Math.random().toString(36).slice(2, 9));
        let Ze = "";
        ce.background_color && (Ze += `background-color: ${ce.background_color} !important;`), ce.opacity !== void 0 && (Ze += `opacity: ${ce.opacity} !important;`), ce.scale !== void 0 && (Ze += `scale: ${ce.scale} !important;`), ce.color && (Ze += `color: ${ce.color} !important;`), ce.border_color && (Ze += `border-color: ${ce.border_color} !important;`), (ce["box-shadow"] || ce.box_shadow) && (Ze += `box-shadow: ${ce["box-shadow"] || ce.box_shadow} !important;`), Ze && (ao || (t(106, ao = document.createElement("style")), document.head.appendChild(ao)), t(106, ao.textContent = `.${Xi}:hover { ${Ze} }`, ao));
      } else ao && (ao.remove(), t(106, ao = null), t(18, Xi = ""));
    e.$$.dirty[0] & /*widthMin, widthMax, componentContext, heightMin, heightMax*/
    961 | e.$$.dirty[1] & /*style*/
    8388608 | e.$$.dirty[2] & /*backgroundStyle, borderStyle, width, height, margin, opacity, widthFlexGrow, heightFlexGrow, widthFlexShrink, heightFlexShrink*/
    107587616 | e.$$.dirty[3] & /*responsiveMaxWidth, responsiveHeight, gridArea, responsivePadding, padding, responsiveMargin, responsiveOpacity, customTransition, actionAnimationTransition, transform, flexBasis, customPosition, customStickyTop, customStickyBottom, customZIndex, customCursor, customBackdropFilter, customOverflow, customBoxShadow, animationOpacityStart, animationOpacityEnd, animationScaleStart, animationScaleEnd*/
    2147467423 | e.$$.dirty[4] & /*responsiveWidth*/
    1 && t(29, te = {
      ...vr,
      ...Gr,
      ...ke,
      width: ye || Se,
      "min-width": qr,
      "max-width": Xe || Ur || (() => {
        const Ze = se.json.max_width;
        if ((Ze == null ? void 0 : Ze.type) === "fixed" && (Ze != null && Ze.value)) return ge(Ze.value);
      })(),
      height: Ie || tt,
      "min-height": Me,
      // input max-height
      "max-height": xt || (vr == null ? void 0 : vr["max-height"]) || (() => {
        const Ze = se.json.max_height;
        if ((Ze == null ? void 0 : Ze.type) === "fixed" && (Ze != null && Ze.value)) return ge(Ze.value);
      })(),
      "grid-area": fe,
      padding: Je || z,
      margin: Ye || Ir,
      opacity: pe !== void 0 ? pe : wn,
      transition: he || mo,
      "transform-origin": sn ? "0 0" : void 0,
      transform: sn,
      "flex-grow": y || H || void 0,
      "flex-shrink": C || Xt ? 1 : void 0,
      "flex-basis": Y,
      position: A,
      top: A === "sticky" && D !== void 0 ? ge(D) : void 0,
      bottom: A === "sticky" && M !== void 0 ? ge(M) : void 0,
      "z-index": U,
      cursor: q,
      "backdrop-filter": be,
      "-webkit-backdrop-filter": be,
      overflow: Ae,
      "box-shadow": Ce,
      "--divkit-animation-opacity-start": ro,
      "--divkit-animation-opacity-end": no,
      "--divkit-animation-scale-start": $n,
      "--divkit-animation-scale-end": qi
    });
  }, [
    se,
    kr,
    pt,
    vt,
    P,
    Er,
    qr,
    Ur,
    Me,
    xt,
    $r,
    on,
    qt,
    Yt,
    Yr,
    Pr,
    Hr,
    Oo,
    Xi,
    we,
    nt,
    L,
    zt,
    ae,
    jr,
    V,
    re,
    O,
    kn,
    te,
    le,
    T,
    B,
    N,
    k,
    w,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    j,
    ie,
    Va,
    w_,
    k_,
    Gt,
    vr,
    Ct,
    Dr,
    Br,
    ar,
    at,
    St,
    Qt,
    $e,
    ue,
    tr,
    d,
    We,
    ke,
    Lt,
    Ge,
    st,
    Jt,
    lr,
    Ir,
    yn,
    Se,
    an,
    y,
    C,
    S,
    R,
    tt,
    Dt,
    H,
    Xt,
    dt,
    Mr,
    wn,
    Gr,
    Hn,
    Mn,
    Kt,
    b,
    mo,
    ro,
    no,
    $n,
    qi,
    et,
    Cr,
    sn,
    Zo,
    Cn,
    Eo,
    Bo,
    di,
    ao,
    Ce,
    Ae,
    be,
    q,
    U,
    M,
    A,
    D,
    Y,
    he,
    pe,
    Ye,
    z,
    Je,
    fe,
    Ie,
    Xe,
    ye,
    ce,
    x,
    ee,
    _e,
    me,
    Fe,
    oe,
    n,
    Ue,
    Oe,
    ct,
    it,
    Z,
    ze,
    ut,
    Pt,
    Ee,
    Te,
    Ft,
    Ut,
    De,
    rr,
    wr,
    Rt,
    mt,
    v_,
    j_,
    er
  ];
}
class hn extends Or {
  constructor(r) {
    super(), Lr(
      this,
      r,
      Bp,
      Op,
      Sr,
      {
        componentContext: 0,
        cls: 1,
        style: 54,
        layoutParams: 55,
        customDescription: 56,
        customPaddings: 57,
        customActions: 58,
        additionalPaddings: 59,
        heightByAspect: 60,
        parentOf: 53,
        parentOfSimpleMode: 61,
        replaceItems: 62,
        hasInnerFocusable: 2,
        alwaysCustomFocus: 63,
        containerElement: 3,
        devapi: 64
      },
      null,
      [-1, -1, -1, -1, -1, -1]
    );
  }
}
const Rp = "appkit-text", Hp = "appkit-text_halign_start", Wp = "appkit-text_halign_center", Up = "appkit-text_halign_end", Gp = "appkit-text_valign_start", Jp = "appkit-text_valign_center", Kp = "appkit-text_valign_end", qp = "appkit-text_valign_baseline", Yp = "appkit-text__inner", Xp = "appkit-text_singleline", Zp = "appkit-text_multiline", Qp = "appkit-text_truncate_none", xp = "appkit-text__inner_gradient", $p = "appkit-text__image", eg = "appkit-text__image_hidden", co = {
  "text-range": "appkit-text-range",
  text: Rp,
  text_halign_start: Hp,
  text_halign_center: Wp,
  text_halign_end: Up,
  text_valign_start: Gp,
  text_valign_center: Jp,
  text_valign_end: Kp,
  text_valign_baseline: qp,
  text__inner: Yp,
  text_singleline: Xp,
  text_multiline: Zp,
  text_truncate_none: Qp,
  "text__inner_has-cloud-bg": "appkit-text__inner_has-cloud-bg",
  "text__inner_cloud-bg": "appkit-text__inner_cloud-bg",
  text__inner_gradient: xp,
  "text__image-wrapper": "appkit-text__image-wrapper",
  "text__image-wrapper_crop": "appkit-text__image-wrapper_crop",
  "text__image-wrapper_align_top": "appkit-text__image-wrapper_align_top",
  "text__image-wrapper_align_center": "appkit-text__image-wrapper_align_center",
  "text__image-wrapper_align_bottom": "appkit-text__image-wrapper_align_bottom",
  "text__image-wrapper_align_baseline": "appkit-text__image-wrapper_align_baseline",
  text__image: $p,
  text__image_hidden: eg,
  "text_has-focus-color": "appkit-text_has-focus-color"
}, So = {
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
function Rn(e, r) {
  const t = Number(e);
  return Number.isNaN(t) || t <= 0 ? r : t;
}
function tg(e) {
  if (e === "light" || e === "medium" || e === "bold" || e === "regular" || e === "semi_bold")
    return e === "medium" ? 500 : e === "bold" ? 700 : e === "light" ? 300 : e === "semi_bold" ? 600 : 400;
}
function ii(e, r, t) {
  return typeof r == "number" && r > 0 ? r : tg(e) || t;
}
function Rl(e, r) {
  if (!e)
    return {};
  const t = {};
  for (const n of ["left", "top", "right", "bottom", "start", "end"]) {
    const o = e[n];
    o && (t[n] = o * r);
  }
  return t;
}
function wi(e) {
  if (e && typeof e == "object") {
    const r = [];
    for (const t in e) {
      const n = e[t];
      r.push(`"${t}" ${n}`);
    }
    return r.join(", ");
  }
  return "";
}
function ru(e) {
  let r, t, n, o, i, s, a;
  return {
    c() {
      r = rn("svg"), t = rn("defs"), n = rn("filter"), o = rn("feGaussianBlur"), i = rn("feColorMatrix"), a = rn("feBlend"), g(o, "in", "SourceGraphic"), g(o, "result", "blurred"), g(o, "stdDeviation", "3"), g(i, "in", "blurred"), g(i, "result", "withMatrix"), g(i, "type", "matrix"), g(i, "values", s = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 " + 2 * /*borderRadius*/
      e[5] + " -" + /*borderRadius*/
      e[5]), g(a, "in", "SourceGraphic"), g(a, "in2", "withMatrix"), g(
        n,
        "id",
        /*cloudFilterId*/
        e[11]
      ), g(r, "class", So["text-range__cloud-svg"]);
    },
    m(l, u) {
      K(l, r, u), wt(r, t), wt(t, n), wt(n, o), wt(n, i), wt(n, a);
    },
    p(l, u) {
      u[0] & /*borderRadius*/
      32 && s !== (s = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 " + 2 * /*borderRadius*/
      l[5] + " -" + /*borderRadius*/
      l[5]) && g(i, "values", s);
    },
    d(l) {
      l && J(r);
    }
  };
}
function nu(e) {
  let r;
  return {
    c() {
      r = Pe("span"), g(r, "class", So["text-range__top-offset"]), I(
        r,
        "margin-top",
        /*topOffset*/
        e[9]
      );
    },
    m(t, n) {
      K(t, r, n);
    },
    p(t, n) {
      n[0] & /*topOffset*/
      512 && I(
        r,
        "margin-top",
        /*topOffset*/
        t[9]
      );
    },
    d(t) {
      t && J(r);
    }
  };
}
function ou(e) {
  let r, t, n, o, i, s;
  return {
    c() {
      r = Pe("div"), t = Pe("div"), n = Pe("div"), o = Pe("div"), i = Pe("div"), s = Pe("div"), g(r, "class", So["text-range__mask-animation"]), g(t, "class", So["text-range__mask-animation"]), g(n, "class", So["text-range__mask-animation"]), g(o, "class", So["text-range__mask-animation"]), g(i, "class", So["text-range__mask-animation"]), g(s, "class", So["text-range__mask-animation"]);
    },
    m(a, l) {
      K(a, r, l), K(a, t, l), K(a, n, l), K(a, o, l), K(a, i, l), K(a, s, l);
    },
    d(a) {
      a && (J(r), J(t), J(n), J(o), J(i), J(s));
    }
  };
}
function rg(e) {
  let r = (
    /*text*/
    (e[1] || "​") + ""
  ), t, n = (
    /*maskColor*/
    e[4] && ou()
  );
  return {
    c() {
      n && n.c(), t = Nn(r);
    },
    m(o, i) {
      n && n.m(o, i), K(o, t, i);
    },
    p(o, i) {
      /*maskColor*/
      o[4] ? n || (n = ou(), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null), i[0] & /*text*/
      2 && r !== (r = /*text*/
      (o[1] || "​") + "") && Jn(t, r);
    },
    d(o) {
      o && J(t), n && n.d(o);
    }
  };
}
function ng(e) {
  let r, t, n, o, i = (
    /*cloudBg*/
    e[3] && /*hasCloudBg*/
    e[6] && ru(e)
  ), s = (
    /*topOffset*/
    e[9] && nu(e)
  );
  return n = new fl({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      cls: gt(
        "text-range",
        So,
        /*mods*/
        e[8]
      ),
      actions: (
        /*actions*/
        e[2]
      ),
      style: cr(
        /*style*/
        e[7]
      ),
      $$slots: { default: [rg] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      i && i.c(), r = or(), s && s.c(), t = or(), Wt(n.$$.fragment);
    },
    m(a, l) {
      i && i.m(a, l), K(a, r, l), s && s.m(a, l), K(a, t, l), Ot(n, a, l), o = !0;
    },
    p(a, l) {
      /*cloudBg*/
      a[3] && /*hasCloudBg*/
      a[6] ? i ? i.p(a, l) : (i = ru(a), i.c(), i.m(r.parentNode, r)) : i && (i.d(1), i = null), /*topOffset*/
      a[9] ? s ? s.p(a, l) : (s = nu(a), s.c(), s.m(t.parentNode, t)) : s && (s.d(1), s = null);
      const u = {};
      l[0] & /*componentContext*/
      1 && (u.componentContext = /*componentContext*/
      a[0]), l[0] & /*mods*/
      256 && (u.cls = gt(
        "text-range",
        So,
        /*mods*/
        a[8]
      )), l[0] & /*actions*/
      4 && (u.actions = /*actions*/
      a[2]), l[0] & /*style*/
      128 && (u.style = cr(
        /*style*/
        a[7]
      )), l[0] & /*text, maskColor*/
      18 | l[1] & /*$$scope*/
      64 && (u.$$scope = { dirty: l, ctx: a }), n.$set(u);
    },
    i(a) {
      o || (W(n.$$.fragment, a), o = !0);
    },
    o(a) {
      ne(n.$$.fragment, a), o = !1;
    },
    d(a) {
      a && (J(r), J(t)), i && i.d(a), s && s.d(a), Bt(n, a);
    }
  };
}
function og(e, r, t) {
  let n, o, i, s, a, l, u, c, f, { componentContext: _ } = r, { text: h } = r, { rootFontSize: m } = r, { textStyles: p = {} } = r, { singleline: w = !1 } = r, { actions: k = void 0 } = r, { cloudBg: N = !1 } = r, { cloudBgId: B = "" } = r, { customLineHeight: z = null } = r;
  const oe = Tr(Xr), fe = oe.direction;
  mn(e, fe, (ye) => t(35, f = ye));
  const T = N && B || oe.genId("text-range") || "";
  let Y = "none", le = 12, A = 1.25, D = "", M, U = "", q = "", be = "", Ae, Ce = null, he, Fe, x = !1, Je, Ye, Xe;
  return e.$$set = (ye) => {
    "componentContext" in ye && t(0, _ = ye.componentContext), "text" in ye && t(1, h = ye.text), "rootFontSize" in ye && t(12, m = ye.rootFontSize), "textStyles" in ye && t(13, p = ye.textStyles), "singleline" in ye && t(14, w = ye.singleline), "actions" in ye && t(2, k = ye.actions), "cloudBg" in ye && t(3, N = ye.cloudBg), "cloudBgId" in ye && t(15, B = ye.cloudBgId), "customLineHeight" in ye && t(16, z = ye.customLineHeight);
  }, e.$$.update = () => {
    var ye, Ie, pe, me, _e, ee, ce, te;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && _.json && (t(17, Y = "none"), t(18, le = 12), t(19, A = 1.25), t(20, D = ""), t(21, M = void 0), t(22, U = ""), t(23, q = ""), t(24, be = ""), t(25, Ae = void 0), t(26, Ce = null), t(27, he = void 0), t(28, Fe = void 0), t(29, x = !1), t(4, Je = void 0), t(30, Ye = void 0), t(31, Xe = void 0)), e.$$.dirty[0] & /*textStyles*/
    8192) {
      let we = "none";
      (p.underline || p.strike) && (p.underline === "single" && p.strike === "single" ? we = "both" : p.underline === "single" ? we = "underline" : p.strike === "single" && (we = "strike")), t(17, Y = we);
    }
    if (e.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && t(18, le = Rn(p.font_size, le)), e.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && Tn(p.line_height) && t(19, A = Number(p.line_height) / le), e.$$.dirty[0] & /*textStyles*/
    8192 && Pn(p.letter_spacing) && t(20, D = ge(p.letter_spacing)), e.$$.dirty[0] & /*textStyles, fontWeight*/
    2105344 && (t(21, M = ii(p.font_weight, p.font_weight_value, M)), typeof p.font_family == "string" && p.font_family ? t(22, U = oe.typefaceProvider(p.font_family, { fontWeight: M || 400 })) : t(22, U = "")), e.$$.dirty[0] & /*textStyles, fontVariationSettings*/
    8396800) {
      const we = wi(p.font_variation_settings);
      we !== q && t(23, q = we);
    }
    if (e.$$.dirty[0] & /*textStyles, color*/
    16785408 && t(24, be = dr(p.text_color, 1, be)), e.$$.dirty[0] & /*textStyles*/
    8192 && t(9, n = p.top_offset ? ge(p.top_offset) : ""), e.$$.dirty[0] & /*textStyles*/
    8192 && t(6, o = ((ye = p.background) == null ? void 0 : ye.type) === "cloud"), e.$$.dirty[0] & /*textStyles*/
    8192 && t(33, i = ((Ie = p.background) == null ? void 0 : Ie.type) === "cloud" ? p.background.paddings : void 0), e.$$.dirty[0] & /*textStyles, cloudBg, hasCloudBg, fontSize*/
    270408 | e.$$.dirty[1] & /*$direction*/
    16) {
      const we = p.mask, Ue = !!(we && (we.type === "solid" || we.type === "particles") && we.is_enabled !== !1 && we.color);
      if (N || Ue ? t(25, Ae = "transparent") : t(25, Ae = void 0), t(29, x = !1), t(4, Je = void 0), t(30, Ye = void 0), t(31, Xe = void 0), N)
        o ? t(28, Fe = np(p.background.color, 255, "transparent")) : t(28, Fe = void 0);
      else if (we && Ue) {
        if (we.type === "solid")
          t(28, Fe = dr(we.color));
        else if (we.type === "particles") {
          const Ke = Rn((pe = we.particle_size) == null ? void 0 : pe.value, 1), $ = ge(Ke * 10 / le), Oe = Rn(we.density, 0.8), Ne = dr(we.color);
          t(28, Fe = void 0), t(4, Je = Ne), t(30, Ye = $), t(31, Xe = String(Oe)), t(29, x = we.is_animated === !0);
        }
      } else ((me = p.background) == null ? void 0 : me.type) === "solid" ? t(28, Fe = cl([p.background], f).color) : t(28, Fe = void 0);
    }
    e.$$.dirty[0] & /*textStyles*/
    8192 && ((_e = p.border) != null && _e.stroke && p.border.stroke.color && dr(p.border.stroke.color) !== "transparent" && Tn(p.border.stroke.width) && ((ee = p.background) == null ? void 0 : ee.type) !== "cloud" ? t(26, Ce = {
      color: p.border.stroke.color,
      width: p.border.stroke.width,
      corner_radius: p.border.corner_radius
    }) : t(26, Ce = null)), e.$$.dirty[0] & /*cloudBg, hasCloudBg, textStyles, border*/
    67117128 && t(5, s = N ? o && p.background.corner_radius || 0 : Ce ? Rn(Ce.corner_radius, 0) : 0), e.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && t(32, a = p.text_shadow ? yp(p.text_shadow, le) : void 0), e.$$.dirty[0] & /*textStyles*/
    8192 && typeof p.baseline_offset == "number" && t(27, he = p.baseline_offset), e.$$.dirty[0] & /*textStyles*/
    8192 && t(34, l = typeof p.baseline_offset == "number" ? void 0 : p.alignment_vertical), e.$$.dirty[0] & /*singleline, decoration, hasCloudBg, customLineHeight, verticalAlign, maskColor, maskAnimated*/
    671301712 | e.$$.dirty[1] & /*customVerticalAlign*/
    8 && t(8, u = {
      singleline: w,
      decoration: Y,
      align: l,
      cloud: o,
      "relative-vertical-align": !!(z && he),
      "has-particles-mask": !!Je,
      "mask-animated": x
    }), e.$$.dirty[0] & /*fontSize, rootFontSize, lineHeight, letterSpacing, fontWeight, fontFamily, customLineHeight, verticalAlign, cloudBg, hasCloudBg, cloudBgId, colorOverride, color, background, textStyles, border, borderRadius, fontVariationSettings, maskColor, maskSize*/
    1610461304 | e.$$.dirty[1] & /*customVerticalAlign, cloudPadding, $direction, shadow, maskDensity*/
    31 && t(7, c = {
      "font-size": ge(le * 10 / m),
      "line-height": l ? "normal" : A,
      "letter-spacing": D,
      "font-weight": M,
      "font-family": U,
      "vertical-align": z || he === void 0 ? void 0 : ge(he * 10 / le),
      top: z && he !== void 0 ? ge(-he * 10 / le) : void 0,
      margin: i ? so(Rl(i, -10 / le), f) : void 0,
      padding: i ? so(Rl(i, 10 / le), f) : void 0,
      filter: N && o && !B ? `url(#${T})` : a,
      color: Ae || be,
      background: Fe,
      opacity: N && o && !B ? ((te = (ce = po(p.background.color)) == null ? void 0 : ce.a) != null ? te : 255) / 255 : void 0,
      /**
      * box-shadow instead of border because:
      * 1) Doesn't take space as border does
      * 2) There should not be a border-radius on line breaks, but there should be a border
      */
      "box-shadow": Ce ? `inset 0 0 0 ${ge(Ce.width * 10 / le)} ${Ce.color}` : void 0,
      "border-radius": s ? ge(s * 10 / le) : void 0,
      "font-feature-settings": p.font_feature_settings || void 0,
      "font-variation-settings": q || void 0,
      "--divkit-text-mask-color": Je,
      "--divkit-text-mask-size": Ye,
      "--divkit-text-mask-density": Xe
    });
  }, [
    _,
    h,
    k,
    N,
    Je,
    s,
    o,
    c,
    u,
    n,
    fe,
    T,
    m,
    p,
    w,
    B,
    z,
    Y,
    le,
    A,
    D,
    M,
    U,
    q,
    be,
    Ae,
    Ce,
    he,
    Fe,
    x,
    Ye,
    Xe,
    a,
    i,
    l,
    f
  ];
}
class ga extends Or {
  constructor(r) {
    super(), Lr(
      this,
      r,
      og,
      ng,
      Sr,
      {
        componentContext: 0,
        text: 1,
        rootFontSize: 12,
        textStyles: 13,
        singleline: 14,
        actions: 2,
        cloudBg: 3,
        cloudBgId: 15,
        customLineHeight: 16
      },
      null,
      [-1, -1]
    );
  }
}
function dl(e, r, t) {
  return e === "left" || e === "center" || e === "right" || e === "start" || e === "end" ? e === "left" ? r === "ltr" ? "start" : "end" : e === "right" ? r === "ltr" ? "end" : "start" : e : t;
}
function _l(e, r) {
  return e === "top" || e === "center" || e === "bottom" || e === "baseline" ? e === "top" ? "start" : e === "bottom" ? "end" : e : r;
}
function ig(e) {
  return String(e != null ? e : "");
}
function Ad(e, r) {
  return e === "source_in" || e === "source_atop" || e === "darken" || e === "lighten" || e === "multiply" || e === "screen" ? e : r;
}
function qs(e) {
  return e.is_enabled !== 0 && e.is_enabled !== !1;
}
function ha(e, r) {
  let t;
  return function(...n) {
    t !== null && clearTimeout(t), t = setTimeout(() => {
      e.apply(this, n), t = null;
    }, r);
  };
}
function sg(e, r) {
  let t = null;
  const n = () => {
    const a = getComputedStyle(e), l = parseFloat(a.lineHeight);
    e.style.webkitLineClamp = "", e.style.maxHeight = "";
    const u = e.offsetHeight, c = e.scrollHeight;
    let f = Math.max(1, Math.floor(u / l));
    r.maxLines && r.maxLines < f && (f = r.maxLines), c > f * l + 1e-9 && (e.style.webkitLineClamp = String(f), e.style.maxHeight = l * f + "px");
  }, o = ha(n, 50), i = () => {
    t && (t.disconnect(), t = null);
  }, s = () => {
    if (i(), r.enabled) {
      if (n(), typeof ResizeObserver < "u") {
        t = new ResizeObserver(o);
        const a = e.parentElement;
        a && t.observe(a);
      }
    } else
      e.style.webkitLineClamp = String(r.lineClamp || "");
  };
  return s(), {
    update(a) {
      r = a, s();
    },
    destroy() {
      i();
    }
  };
}
const { Boolean: Sd } = Po;
function iu(e, r, t) {
  const n = e.slice();
  return n[71] = r[t], n;
}
function su(e, r, t) {
  const n = e.slice();
  return n[71] = r[t], n;
}
function lu(e) {
  let r = (
    /*htmlTag*/
    e[9]
  ), t, n = (
    /*htmlTag*/
    e[9] && Sl(e)
  );
  return {
    c() {
      n && n.c(), t = or();
    },
    m(o, i) {
      n && n.m(o, i), K(o, t, i);
    },
    p(o, i) {
      /*htmlTag*/
      o[9] ? r ? Sr(
        r,
        /*htmlTag*/
        o[9]
      ) ? (n.d(1), n = Sl(o), r = /*htmlTag*/
      o[9], n.c(), n.m(t.parentNode, t)) : n.p(o, i) : (n = Sl(o), r = /*htmlTag*/
      o[9], n.c(), n.m(t.parentNode, t)) : r && (n.d(1), n = null, r = /*htmlTag*/
      o[9]);
    },
    i: v,
    o(o) {
      ne(n, o);
    },
    d(o) {
      o && J(t), n && n.d(o);
    }
  };
}
function lg(e) {
  let r, t, n, o, i;
  return {
    c() {
      r = Pe("span"), t = Pe("span"), g(t, "class", n = gt("text__image-wrapper", co, {
        align: (
          /*item*/
          e[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          e[11] !== null
        )
      })), g(t, "style", o = cr({
        width: (
          /*item*/
          e[71].image.width
        ),
        height: (
          /*customLineHeight*/
          e[11] && /*item*/
          e[71].image.verticalAlign !== "baseline" ? (
            /*customLineHeight*/
            e[11] + "em"
          ) : void 0
        )
      })), g(r, "style", i = cr(
        /*item*/
        e[71].image.wrapperStyle
      ));
    },
    m(s, a) {
      K(s, r, a), wt(r, t);
    },
    p(s, a) {
      a[0] & /*renderList, customLineHeight*/
      10240 && n !== (n = gt("text__image-wrapper", co, {
        align: (
          /*item*/
          s[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          s[11] !== null
        )
      })) && g(t, "class", n), a[0] & /*renderList, customLineHeight*/
      10240 && o !== (o = cr({
        width: (
          /*item*/
          s[71].image.width
        ),
        height: (
          /*customLineHeight*/
          s[11] && /*item*/
          s[71].image.verticalAlign !== "baseline" ? (
            /*customLineHeight*/
            s[11] + "em"
          ) : void 0
        )
      })) && g(t, "style", o), a[0] & /*renderList*/
      8192 && i !== (i = cr(
        /*item*/
        s[71].image.wrapperStyle
      )) && g(r, "style", i);
    },
    i: v,
    o: v,
    d(s) {
      s && J(r);
    }
  };
}
function ag(e) {
  let r, t, n = (
    /*item*/
    e[71].text && au(e)
  );
  return {
    c() {
      n && n.c(), r = or();
    },
    m(o, i) {
      n && n.m(o, i), K(o, r, i), t = !0;
    },
    p(o, i) {
      /*item*/
      o[71].text ? n ? (n.p(o, i), i[0] & /*renderList*/
      8192 && W(n, 1)) : (n = au(o), n.c(), W(n, 1), n.m(r.parentNode, r)) : n && (pr(), ne(n, 1, 1, () => {
        n = null;
      }), gr());
    },
    i(o) {
      t || (W(n), t = !0);
    },
    o(o) {
      ne(n), t = !1;
    },
    d(o) {
      o && J(r), n && n.d(o);
    }
  };
}
function au(e) {
  let r, t;
  return r = new ga({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      text: (
        /*item*/
        e[71].text
      ),
      rootFontSize: (
        /*fontSize*/
        e[3]
      ),
      textStyles: (
        /*item*/
        e[71].textStyles
      ),
      singleline: (
        /*singleline*/
        e[8]
      ),
      cloudBg: !0,
      cloudBgId: (
        /*wholeTextCloudBgId*/
        e[14]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*renderList*/
      8192 && (i.text = /*item*/
      n[71].text), o[0] & /*fontSize*/
      8 && (i.rootFontSize = /*fontSize*/
      n[3]), o[0] & /*renderList*/
      8192 && (i.textStyles = /*item*/
      n[71].textStyles), o[0] & /*singleline*/
      256 && (i.singleline = /*singleline*/
      n[8]), o[0] & /*wholeTextCloudBgId*/
      16384 && (i.cloudBgId = /*wholeTextCloudBgId*/
      n[14]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function uu(e) {
  let r, t, n, o;
  const i = [ag, lg], s = [];
  function a(l, u) {
    return "text" in /*item*/
    l[71] ? 0 : (
      /*item*/
      l[71].image ? 1 : -1
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = or();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (t && (pr(), ne(s[c], 1, 1, () => {
        s[c] = null;
      }), gr()), ~r ? (t = s[r], t ? t.p(l, u) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      ne(t), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function Sl(e) {
  let r, t, n, o, i = ur(
    /*renderList*/
    e[13]
  ), s = [];
  for (let c = 0; c < i.length; c += 1)
    s[c] = uu(su(e, i, c));
  const a = (c) => ne(s[c], 1, 1, () => {
    s[c] = null;
  });
  let l = [
    {
      class: t = gt("text__inner", co, {
        .../*innerMods*/
        e[19],
        "cloud-bg": !0
      })
    },
    {
      style: n = cr({
        .../*style*/
        e[18],
        padding: (
          /*cloudPadding*/
          e[17]
        ),
        filter: (
          /*wholeTextCloudBgId*/
          e[14] ? `url(#${/*wholeTextCloudBgId*/
          e[14]})` : void 0
        ),
        opacity: (
          /*wholeTextCloudBgOpacity*/
          e[15]
        )
      })
    }
  ], u = {};
  for (let c = 0; c < l.length; c += 1)
    u = jo(u, l[c]);
  return {
    c() {
      r = Pe(
        /*htmlTag*/
        e[9]
      );
      for (let c = 0; c < s.length; c += 1)
        s[c].c();
      ri(
        /*htmlTag*/
        e[9]
      )(r, u);
    },
    m(c, f) {
      K(c, r, f);
      for (let _ = 0; _ < s.length; _ += 1)
        s[_] && s[_].m(r, null);
      o = !0;
    },
    p(c, f) {
      if (f[0] & /*componentContext, renderList, fontSize, singleline, wholeTextCloudBgId, customLineHeight*/
      26889) {
        i = ur(
          /*renderList*/
          c[13]
        );
        let _;
        for (_ = 0; _ < i.length; _ += 1) {
          const h = su(c, i, _);
          s[_] ? (s[_].p(h, f), W(s[_], 1)) : (s[_] = uu(h), s[_].c(), W(s[_], 1), s[_].m(r, null));
        }
        for (pr(), _ = i.length; _ < s.length; _ += 1)
          a(_);
        gr();
      }
      ri(
        /*htmlTag*/
        c[9]
      )(r, u = No(l, [
        (!o || f[0] & /*innerMods*/
        524288 && t !== (t = gt("text__inner", co, {
          .../*innerMods*/
          c[19],
          "cloud-bg": !0
        }))) && { class: t },
        (!o || f[0] & /*style, cloudPadding, wholeTextCloudBgId, wholeTextCloudBgOpacity*/
        442368 && n !== (n = cr({
          .../*style*/
          c[18],
          padding: (
            /*cloudPadding*/
            c[17]
          ),
          filter: (
            /*wholeTextCloudBgId*/
            c[14] ? `url(#${/*wholeTextCloudBgId*/
            c[14]})` : void 0
          ),
          opacity: (
            /*wholeTextCloudBgOpacity*/
            c[15]
          )
        }))) && { style: n }
      ]));
    },
    i(c) {
      if (!o) {
        for (let f = 0; f < i.length; f += 1)
          W(s[f]);
        o = !0;
      }
    },
    o(c) {
      s = s.filter(Sd);
      for (let f = 0; f < s.length; f += 1)
        ne(s[f]);
      o = !1;
    },
    d(c) {
      c && J(r), un(s, c);
    }
  };
}
function ug(e) {
  let r, t;
  return r = new ga({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      text: (
        /*text*/
        e[2]
      ),
      rootFontSize: (
        /*fontSize*/
        e[3]
      ),
      textStyles: (
        /*rootTextStyles*/
        e[7]
      ),
      singleline: (
        /*singleline*/
        e[8]
      ),
      customLineHeight: (
        /*customLineHeight*/
        e[11]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*text*/
      4 && (i.text = /*text*/
      n[2]), o[0] & /*fontSize*/
      8 && (i.rootFontSize = /*fontSize*/
      n[3]), o[0] & /*rootTextStyles*/
      128 && (i.textStyles = /*rootTextStyles*/
      n[7]), o[0] & /*singleline*/
      256 && (i.singleline = /*singleline*/
      n[8]), o[0] & /*customLineHeight*/
      2048 && (i.customLineHeight = /*customLineHeight*/
      n[11]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function cg(e) {
  let r, t, n = ur(
    /*renderList*/
    e[13]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = fu(iu(e, n, s));
  const i = (s) => ne(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = or();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      K(s, r, a), t = !0;
    },
    p(s, a) {
      if (a[0] & /*componentContext, renderList, fontSize, singleline, customLineHeight*/
      10505 | a[1] & /*onImgError*/
      256) {
        n = ur(
          /*renderList*/
          s[13]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const u = iu(s, n, l);
          o[l] ? (o[l].p(u, a), W(o[l], 1)) : (o[l] = fu(u), o[l].c(), W(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (pr(), l = n.length; l < o.length; l += 1)
          i(l);
        gr();
      }
    },
    i(s) {
      if (!t) {
        for (let a = 0; a < n.length; a += 1)
          W(o[a]);
        t = !0;
      }
    },
    o(s) {
      o = o.filter(Sd);
      for (let a = 0; a < o.length; a += 1)
        ne(o[a]);
      t = !1;
    },
    d(s) {
      s && J(r), un(o, s);
    }
  };
}
function fg(e) {
  let r, t, n, o, i, s, a, l, u, c, f, _, h, m = [
    { class: o = co.text__image },
    {
      src: i = /*item*/
      e[71].image.url
    },
    {
      loading: s = /*item*/
      e[71].image.preloadRequired ? "eager" : "lazy"
    },
    { decoding: "async" },
    {
      alt: a = /*item*/
      e[71].image.description
    },
    /*item*/
    e[71].image.a11yAttrs,
    {
      style: l = cr({
        height: (
          /*item*/
          e[71].image.height
        ),
        filter: (
          /*item*/
          e[71].image.svgFilterId ? `url(#${/*item*/
          e[71].image.svgFilterId})` : void 0
        )
      })
    }
  ], p = {};
  for (let w = 0; w < m.length; w += 1)
    p = jo(p, m[w]);
  return {
    c() {
      r = Pe("span"), t = Pe("span"), n = Pe("img"), qo(n, p), g(t, "class", u = gt("text__image-wrapper", co, {
        align: (
          /*item*/
          e[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          e[11] !== null
        )
      })), g(t, "style", c = cr({
        width: (
          /*item*/
          e[71].image.width
        ),
        height: (
          /*customLineHeight*/
          e[11] && /*item*/
          e[71].image.verticalAlign !== "baseline" ? (
            /*customLineHeight*/
            e[11] + "em"
          ) : void 0
        )
      })), g(r, "style", f = cr(
        /*item*/
        e[71].image.wrapperStyle
      ));
    },
    m(w, k) {
      K(w, r, k), wt(r, t), wt(t, n), _ || (h = Qe(
        n,
        "error",
        /*onImgError*/
        e[39]
      ), _ = !0);
    },
    p(w, k) {
      qo(n, p = No(m, [
        { class: o },
        k[0] & /*renderList*/
        8192 && !Xn(n.src, i = /*item*/
        w[71].image.url) && { src: i },
        k[0] & /*renderList*/
        8192 && s !== (s = /*item*/
        w[71].image.preloadRequired ? "eager" : "lazy") && { loading: s },
        { decoding: "async" },
        k[0] & /*renderList*/
        8192 && a !== (a = /*item*/
        w[71].image.description) && { alt: a },
        k[0] & /*renderList*/
        8192 && /*item*/
        w[71].image.a11yAttrs,
        k[0] & /*renderList*/
        8192 && l !== (l = cr({
          height: (
            /*item*/
            w[71].image.height
          ),
          filter: (
            /*item*/
            w[71].image.svgFilterId ? `url(#${/*item*/
            w[71].image.svgFilterId})` : void 0
          )
        })) && { style: l }
      ])), k[0] & /*renderList, customLineHeight*/
      10240 && u !== (u = gt("text__image-wrapper", co, {
        align: (
          /*item*/
          w[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          w[11] !== null
        )
      })) && g(t, "class", u), k[0] & /*renderList, customLineHeight*/
      10240 && c !== (c = cr({
        width: (
          /*item*/
          w[71].image.width
        ),
        height: (
          /*customLineHeight*/
          w[11] && /*item*/
          w[71].image.verticalAlign !== "baseline" ? (
            /*customLineHeight*/
            w[11] + "em"
          ) : void 0
        )
      })) && g(t, "style", c), k[0] & /*renderList*/
      8192 && f !== (f = cr(
        /*item*/
        w[71].image.wrapperStyle
      )) && g(r, "style", f);
    },
    i: v,
    o: v,
    d(w) {
      w && J(r), _ = !1, h();
    }
  };
}
function dg(e) {
  let r, t, n = (
    /*item*/
    e[71].text && cu(e)
  );
  return {
    c() {
      n && n.c(), r = or();
    },
    m(o, i) {
      n && n.m(o, i), K(o, r, i), t = !0;
    },
    p(o, i) {
      /*item*/
      o[71].text ? n ? (n.p(o, i), i[0] & /*renderList*/
      8192 && W(n, 1)) : (n = cu(o), n.c(), W(n, 1), n.m(r.parentNode, r)) : n && (pr(), ne(n, 1, 1, () => {
        n = null;
      }), gr());
    },
    i(o) {
      t || (W(n), t = !0);
    },
    o(o) {
      ne(n), t = !1;
    },
    d(o) {
      o && J(r), n && n.d(o);
    }
  };
}
function cu(e) {
  let r, t;
  return r = new ga({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      text: (
        /*item*/
        e[71].text
      ),
      rootFontSize: (
        /*fontSize*/
        e[3]
      ),
      textStyles: (
        /*item*/
        e[71].textStyles
      ),
      singleline: (
        /*singleline*/
        e[8]
      ),
      actions: (
        /*item*/
        e[71].actions
      ),
      customLineHeight: (
        /*customLineHeight*/
        e[11]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*renderList*/
      8192 && (i.text = /*item*/
      n[71].text), o[0] & /*fontSize*/
      8 && (i.rootFontSize = /*fontSize*/
      n[3]), o[0] & /*renderList*/
      8192 && (i.textStyles = /*item*/
      n[71].textStyles), o[0] & /*singleline*/
      256 && (i.singleline = /*singleline*/
      n[8]), o[0] & /*renderList*/
      8192 && (i.actions = /*item*/
      n[71].actions), o[0] & /*customLineHeight*/
      2048 && (i.customLineHeight = /*customLineHeight*/
      n[11]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function fu(e) {
  let r, t, n, o;
  const i = [dg, fg], s = [];
  function a(l, u) {
    return "text" in /*item*/
    l[71] ? 0 : (
      /*item*/
      l[71].image ? 1 : -1
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = or();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (t && (pr(), ne(s[c], 1, 1, () => {
        s[c] = null;
      }), gr()), ~r ? (t = s[r], t ? t.p(l, u) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      ne(t), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function Vl(e) {
  let r, t, n, o, i, s, a, l, u;
  const c = [cg, ug], f = [];
  function _(p, w) {
    return (
      /*renderList*/
      p[13].length ? 0 : 1
    );
  }
  t = _(e), n = f[t] = c[t](e);
  let h = [
    {
      class: o = gt(
        "text__inner",
        co,
        /*innerMods*/
        e[19]
      )
    },
    {
      style: i = cr(
        /*style*/
        e[18]
      )
    }
  ], m = {};
  for (let p = 0; p < h.length; p += 1)
    m = jo(m, h[p]);
  return {
    c() {
      r = Pe(
        /*htmlTag*/
        e[9]
      ), n.c(), ri(
        /*htmlTag*/
        e[9]
      )(r, m);
    },
    m(p, w) {
      K(p, r, w), f[t].m(r, null), a = !0, l || (u = ll(s = sg.call(null, r, {
        enabled: (
          /*$jsonAutoEllipsize*/
          e[10]
        ),
        lineClamp: typeof /*lineClamp*/
        e[4] == "number" ? (
          /*lineClamp*/
          e[4]
        ) : void 0,
        maxLines: (
          /*maxLines*/
          e[12]
        )
      })), l = !0);
    },
    p(p, w) {
      let k = t;
      t = _(p), t === k ? f[t].p(p, w) : (pr(), ne(f[k], 1, 1, () => {
        f[k] = null;
      }), gr(), n = f[t], n ? n.p(p, w) : (n = f[t] = c[t](p), n.c()), W(n, 1), n.m(r, null)), ri(
        /*htmlTag*/
        p[9]
      )(r, m = No(h, [
        (!a || w[0] & /*innerMods*/
        524288 && o !== (o = gt(
          "text__inner",
          co,
          /*innerMods*/
          p[19]
        ))) && { class: o },
        (!a || w[0] & /*style*/
        262144 && i !== (i = cr(
          /*style*/
          p[18]
        ))) && { style: i }
      ])), s && zr(s.update) && w[0] & /*$jsonAutoEllipsize, lineClamp, maxLines*/
      5136 && s.update.call(null, {
        enabled: (
          /*$jsonAutoEllipsize*/
          p[10]
        ),
        lineClamp: typeof /*lineClamp*/
        p[4] == "number" ? (
          /*lineClamp*/
          p[4]
        ) : void 0,
        maxLines: (
          /*maxLines*/
          p[12]
        )
      });
    },
    i(p) {
      a || (W(n), a = !0);
    },
    o(p) {
      ne(n), a = !1;
    },
    d(p) {
      p && J(r), f[t].d(), l = !1, u();
    }
  };
}
function _g(e) {
  let r, t = (
    /*htmlTag*/
    e[9]
  ), n, o, i = (
    /*hasCloudBg*/
    e[6] && lu(e)
  ), s = (
    /*htmlTag*/
    e[9] && Vl(e)
  );
  return {
    c() {
      i && i.c(), r = _r(), s && s.c(), n = or();
    },
    m(a, l) {
      i && i.m(a, l), K(a, r, l), s && s.m(a, l), K(a, n, l), o = !0;
    },
    p(a, l) {
      /*hasCloudBg*/
      a[6] ? i ? (i.p(a, l), l[0] & /*hasCloudBg*/
      64 && W(i, 1)) : (i = lu(a), i.c(), W(i, 1), i.m(r.parentNode, r)) : i && (pr(), ne(i, 1, 1, () => {
        i = null;
      }), gr()), /*htmlTag*/
      a[9] ? t ? Sr(
        t,
        /*htmlTag*/
        a[9]
      ) ? (s.d(1), s = Vl(a), t = /*htmlTag*/
      a[9], s.c(), s.m(n.parentNode, n)) : s.p(a, l) : (s = Vl(a), t = /*htmlTag*/
      a[9], s.c(), s.m(n.parentNode, n)) : t && (s.d(1), s = null, t = /*htmlTag*/
      a[9]);
    },
    i(a) {
      o || (W(i), o = !0);
    },
    o(a) {
      ne(i), ne(s, a), o = !1;
    },
    d(a) {
      a && (J(r), J(n)), i && i.d(a), s && s.d(a);
    }
  };
}
function pg(e) {
  let r, t;
  return r = new hn({
    props: {
      cls: gt(
        "text",
        co,
        /*mods*/
        e[20]
      ) + " " + /*selectable*/
      (e[5] ? Ar.root__selectable : Ar.root__unselectable),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      containerElement: (
        /*containerElement*/
        e[16]
      ),
      $$slots: { default: [_g] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods, selectable*/
      1048608 && (i.cls = gt(
        "text",
        co,
        /*mods*/
        n[20]
      ) + " " + /*selectable*/
      (n[5] ? Ar.root__selectable : Ar.root__unselectable)), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*containerElement*/
      65536 && (i.containerElement = /*containerElement*/
      n[16]), o[0] & /*innerMods, style, htmlTag, $jsonAutoEllipsize, lineClamp, maxLines, renderList, componentContext, fontSize, singleline, customLineHeight, text, rootTextStyles, cloudPadding, wholeTextCloudBgId, wholeTextCloudBgOpacity, hasCloudBg*/
      983005 | o[2] & /*$$scope*/
      16384 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function gg(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, B, z, oe, fe, T, Y, le, A, D, M, U, q, be = v, Ae = () => (be(), be = E(N, (St) => t(52, q = St)), N), Ce, he = v, Fe = () => (he(), he = E(i, (St) => t(53, Ce = St)), i), x, Je = v, Ye = () => (Je(), Je = E(o, (St) => t(54, x = St)), o), Xe, ye = v, Ie = () => (ye(), ye = E(w, (St) => t(55, Xe = St)), w), pe, me = v, _e = () => (me(), me = E(p, (St) => t(56, pe = St)), p), ee, ce = v, te = () => (ce(), ce = E(m, (St) => t(57, ee = St)), m), we, Ue = v, Ke = () => (Ue(), Ue = E(h, (St) => t(58, we = St)), h), $, Oe = v, Ne = () => (Oe(), Oe = E(_, (St) => t(59, $ = St)), _), ot, ct = v, rt = () => (ct(), ct = E(u, (St) => t(60, ot = St)), u), kt, it = v, Mt = () => (it(), it = E(f, (St) => t(61, kt = St)), f), ft, Z = v, de = () => (Z(), Z = E(c, (St) => t(62, ft = St)), c), lt, ze = v, F = () => (ze(), ze = E(k, (St) => t(10, lt = St)), k), Et, ut = v, Vt = () => (ut(), ut = E(l, (St) => t(63, Et = St)), l), It, nt = v, Q = () => (nt(), nt = E(a, (St) => t(64, It = St)), a), At, Pt = v, $t = () => (Pt(), Pt = E(s, (St) => t(65, At = St)), s), Zt, Ee = v, He = () => (Ee(), Ee = E(n, (St) => t(66, Zt = St)), n), ht, Te = v, xe = () => (Te(), Te = E(B, (St) => t(67, ht = St)), B);
  e.$$.on_destroy.push(() => be()), e.$$.on_destroy.push(() => he()), e.$$.on_destroy.push(() => Je()), e.$$.on_destroy.push(() => ye()), e.$$.on_destroy.push(() => me()), e.$$.on_destroy.push(() => ce()), e.$$.on_destroy.push(() => Ue()), e.$$.on_destroy.push(() => Oe()), e.$$.on_destroy.push(() => ct()), e.$$.on_destroy.push(() => it()), e.$$.on_destroy.push(() => Z()), e.$$.on_destroy.push(() => ze()), e.$$.on_destroy.push(() => ut()), e.$$.on_destroy.push(() => nt()), e.$$.on_destroy.push(() => Pt()), e.$$.on_destroy.push(() => Ee()), e.$$.on_destroy.push(() => Te());
  let { componentContext: Le } = r, { layoutParams: Ft = void 0 } = r;
  const Be = Tr(Xr), bt = Be.direction;
  mn(e, bt, (St) => t(51, U = St));
  let Ut = "", Tt = 12, ir = 1.25, De = null, jt = "", sr, rr = "", nr = !1, fr = "start", wr = "start", Nt = "", br = "", Rt = "", mt = !1, er = [], se = !1, kr = "", vr, Ct = [], Dr = {}, Br = "span";
  function ar(St, Gt, Qt, $e) {
    var ie, d;
    let pt = [];
    if (Ct.forEach(([L, je]) => {
      Be.removeSvgFilter(L, je);
    }), Ct = [], !(Array.isArray(Gt) && Gt.length || Array.isArray(Qt) && Qt.length && St)) {
      t(13, er = []);
      return;
    }
    const ue = St;
    let vt = Gt || [{ start: 0, end: ue.length }], tr = Qt || [], Ht = 0, yr = [], j = [];
    vt.forEach((L) => {
      const je = L.start || 0, We = L.end || St.length, ke = {
        top_offset: 0,
        ...L,
        start: je,
        end: We
      };
      j.push({
        index: je,
        range: ke,
        type: "rangeStart",
        isStart: !0
      }), j.push({
        index: We,
        range: ke,
        type: "rangeEnd"
      });
    }), tr.forEach((L, je) => {
      L.start !== void 0 && L.url && L.start <= ue.length && j.push({
        index: L.indexing_direction === "reversed" ? St.length - L.start : L.start,
        image: L,
        type: "image",
        arrayIndex: je
      });
    }), j.sort((L, je) => L.index === je.index ? L.type !== je.type ? L.type === "image" ? -1 : je.type === "image" ? 1 : L.type < je.type ? -1 : 1 : L.type === "image" && je.type === "image" ? je.arrayIndex - L.arrayIndex : L.type === "rangeStart" && je.type === "rangeStart" ? L.range.end - je.range.end : L.type === "rangeStart" ? 1 : je.type === "rangeStart" ? -1 : L.type !== "image" && je.type !== "image" ? L.range.start - je.range.start : 0 : L.index - je.index), j.forEach((L) => {
      var ke, P, zt, Lt;
      let je = L.type === "image" ? null : L.range, We = L.index;
      if (We > Ht) {
        let Ge = Object.assign({ ...$e }, ...yr);
        yr.length && yr[yr.length - 1].start !== Ht && (Ge.top_offset = 0), pt.push({
          text: ue.substring(Ht, We),
          textStyles: Ge,
          actions: L.type === "rangeEnd" && ((P = (ke = L.range) == null ? void 0 : ke.actions) == null ? void 0 : P.filter(qs)) || void 0
        });
      }
      if (L.type === "rangeStart" && je)
        yr.push(je);
      else if (L.type === "rangeEnd")
        yr = yr.filter((Ge) => Ge !== L.range);
      else if (L.type === "image") {
        let Ge = Object.assign({ ...$e }, ...yr), st = ge((L.image.width && L.image.width.value || 20) * 10 / (Ge.font_size || 12)), Jt = ge((L.image.height && L.image.height.value || 20) * 10 / (Ge.font_size || 12));
        const Er = {
          "font-size": ge((Number(Ge.font_size) || 12) * 10 / Tt)
        };
        let lr = "";
        const Ir = L.image.tint_color, yn = Ad(L.image.tint_mode, "source_in");
        if (Ir) {
          const an = dr(L.image.tint_color);
          lr = Be.addSvgFilter(an, yn), Ct.push([an, yn]);
        }
        const Se = {}, qr = (zt = L.image.accessibility) == null ? void 0 : zt.type, Ur = ((Lt = L.image.accessibility) == null ? void 0 : Lt.description) || "";
        (qr === "button" || qr === "image") && Ur ? Se.role = qr : (!Ur || qr === "none") && (Se["aria-hidden"] = "true"), pt.push({
          image: {
            url: L.image.url,
            width: st,
            height: Jt,
            wrapperStyle: Er,
            svgFilterId: lr,
            preloadRequired: !!L.image.preload_required,
            verticalAlign: L.image.alignment_vertical,
            description: Ur,
            a11yAttrs: Se
          }
        });
      }
      Ht = We;
    }), Ht < ue.length && pt.push({
      text: ue.substring(Ht),
      textStyles: { ...$e }
    }), t(13, er = pt), t(6, se = pt.some((L) => {
      var je;
      return "text" in L && ((je = L.textStyles.background) == null ? void 0 : je.type) === "cloud";
    })), t(14, kr = se && pt.length === 1 ? Be.genId("text-whole-bg") : ""), t(15, vr = kr ? ((d = (ie = po(pt[0].textStyles.background.color)) == null ? void 0 : ie.a) != null ? d : 255) / 255 : void 0);
  }
  function at(St) {
    St.target && "classList" in St.target && St.target.classList.add(co.text__image_hidden);
  }
  return ln(() => {
    Ct.forEach(([St, Gt]) => {
      Be.removeSvgFilter(St, Gt);
    });
  }), e.$$set = (St) => {
    "componentContext" in St && t(0, Le = St.componentContext), "layoutParams" in St && t(1, Ft = St.layoutParams);
  }, e.$$.update = () => {
    var St, Gt;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && Le.json && (t(3, Tt = 12), t(40, ir = 1.25), t(11, De = null), t(41, jt = ""), t(12, sr = void 0), t(4, rr = ""), t(42, nr = !1), t(43, fr = "start"), t(44, wr = "start"), t(45, Nt = ""), t(47, Rt = ""), t(5, mt = !1)), e.$$.dirty[0] & /*componentContext*/
    1 && He(t(37, n = Le.getDerivedFromVars(Le.json.text))), e.$$.dirty[0] & /*componentContext*/
    1 && Ye(t(36, o = Le.getDerivedFromVars(Le.json.ranges, void 0, !0, 3))), e.$$.dirty[0] & /*componentContext*/
    1 && Fe(t(35, i = Le.getDerivedFromVars(Le.json.images))), e.$$.dirty[0] & /*componentContext*/
    1 && $t(t(34, s = Le.getDerivedFromVars(
      {
        font_size: Le.json.font_size,
        letter_spacing: Le.json.letter_spacing,
        font_weight: Le.json.font_weight,
        font_weight_value: Le.json.font_weight_value,
        font_family: Le.json.font_family,
        text_color: Le.json.text_color,
        underline: Le.json.underline,
        strike: Le.json.strike,
        line_height: Le.json.line_height,
        text_shadow: Le.json.text_shadow,
        font_feature_settings: Le.json.font_feature_settings,
        font_variation_settings: Le.json.font_variation_settings
      },
      void 0,
      !0,
      1
    ))), e.$$.dirty[0] & /*componentContext*/
    1 && Q(t(33, a = Le.getDerivedFromVars(Le.json.font_size))), e.$$.dirty[0] & /*componentContext*/
    1 && Vt(t(32, l = Le.getDerivedFromVars(Le.json.line_height))), e.$$.dirty[0] & /*componentContext*/
    1 && rt(t(31, u = Le.getDerivedFromVars(Le.json.max_lines))), e.$$.dirty[0] & /*componentContext*/
    1 && de(t(30, c = Le.getDerivedFromVars(Le.json.text_alignment_horizontal))), e.$$.dirty[0] & /*componentContext*/
    1 && Mt(t(29, f = Le.getDerivedFromVars(Le.json.text_alignment_vertical))), e.$$.dirty[0] & /*componentContext*/
    1 && Ne(t(28, _ = Le.getDerivedFromVars(Le.json.text_color))), e.$$.dirty[0] & /*componentContext*/
    1 && Ke(t(27, h = Le.getDerivedFromVars(Le.json.focused_text_color))), e.$$.dirty[0] & /*componentContext*/
    1 && te(t(26, m = Le.getDerivedFromVars(Le.json.truncate))), e.$$.dirty[0] & /*componentContext*/
    1 && _e(t(25, p = Le.getDerivedFromVars(Le.json.text_gradient))), e.$$.dirty[0] & /*componentContext*/
    1 && Ie(t(24, w = Le.getDerivedFromVars(Le.json.selectable))), e.$$.dirty[0] & /*componentContext*/
    1 && F(t(23, k = Le.getDerivedFromVars(Le.json.auto_ellipsize))), e.$$.dirty[0] & /*componentContext*/
    1 && Ae(t(22, N = Le.getDerivedFromVars(Le.json.paddings))), e.$$.dirty[0] & /*componentContext*/
    1 && xe(t(21, B = Le.getDerivedFromVars(Le.json.heading_type))), e.$$.dirty[2] & /*$jsonHeadingType*/
    32 && t(9, z = (() => {
      const Qt = ht;
      if (Qt && typeof Qt == "string") {
        const $e = Qt.toLowerCase();
        if (["h1", "h2", "h3", "h4", "h5", "h6"].includes($e))
          return $e;
      }
      return "span";
    })()), e.$$.dirty[0] & /*htmlTag*/
    512 && t(16, Br = z !== "span" ? "div" : "span"), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[2] & /*$jsonText*/
    16 && (typeof Le.json.text == "string" ? t(2, Ut = ig(Zt)) : (t(2, Ut = ""), Le.logError(X(new Error("Incorrect text value type"))))), e.$$.dirty[1] & /*$jsonTextGradient, $direction*/
    34603008) {
      let Qt = "";
      if (pe) {
        const $e = cl([pe], U);
        $e.image && (Qt = $e.image);
      }
      t(47, Rt = Qt);
    }
    if (e.$$.dirty[1] & /*gradient*/
    65536 | e.$$.dirty[2] & /*$jsonRootTextStyles*/
    8 && t(7, Dr = Rt ? { ...At, text_color: "" } : At), e.$$.dirty[0] & /*fontSize, componentContext*/
    9 | e.$$.dirty[2] & /*$jsonTextSize*/
    4) {
      t(3, Tt = Rn(It, Tt));
      const Qt = Le.json.responsive;
      if (Qt && typeof Qt == "object" && typeof window < "u") {
        const $e = window.matchMedia("(max-width: 767px)").matches, pt = window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches;
        $e && ((St = Qt.mobile) != null && St.font_size) ? t(3, Tt = Qt.mobile.font_size) : pt && ((Gt = Qt.tablet) != null && Gt.font_size) && t(3, Tt = Qt.tablet.font_size);
      }
    }
    if (e.$$.dirty[0] & /*fontSize*/
    8 | e.$$.dirty[1] & /*lineHeight*/
    512 | e.$$.dirty[2] & /*$jsonLineHeight*/
    2) {
      const Qt = Et;
      Tn(Qt) ? (t(40, ir = Number(Qt) / Tt), t(11, De = ir)) : t(11, De = null);
    }
    if (e.$$.dirty[1] & /*$jsonMaxLines*/
    536870912 && t(8, oe = ot === 1), e.$$.dirty[0] & /*$jsonAutoEllipsize*/
    1024 | e.$$.dirty[1] & /*$jsonMaxLines, lineHeight*/
    536871424) {
      let Qt = "", $e, pt = "", ue = !1;
      if (ot && ot > 1) {
        const vt = Number(ot);
        Qt = vt * ir + "em", $e = vt, pt = vt, ue = !0;
      } else lt && ot !== 1 && (ue = !0);
      t(41, jt = Qt), t(12, sr = $e), t(4, rr = pt), t(42, nr = ue);
    }
    if (e.$$.dirty[1] & /*$direction, halign*/
    1052672 | e.$$.dirty[2] & /*$jsonHAlign*/
    1 && t(43, fr = dl(ft, U, fr)), e.$$.dirty[1] & /*$jsonVAlign, valign*/
    1073750016 && t(44, wr = _l(kt, wr)), e.$$.dirty[0] & /*text*/
    4 | e.$$.dirty[1] & /*$jsonRanges*/
    8388608 && t(50, fe = !x || Ut && x.length === 1 && x[0] && (!x[0].start || x[0].start === 0) && (!x[0].end || typeof x[0].end == "number" && x[0].end >= Ut.length)), e.$$.dirty[1] & /*gradient, $jsonTextColor, $jsonRanges*/
    276889600 && t(49, T = !!(!Rt && $) != !!(x && x[0] && x[0].text_color)), e.$$.dirty[1] & /*$jsonMaxLines, isAllTextSameColor, isOnlyOneColorDefined, $jsonTextColor, $jsonRanges, rootTextColor*/
    814497792) {
      let Qt = "";
      ot && fe && T && (Qt = dr($ || x && x[0] && x[0].text_color, 1, Nt)), t(45, Nt = Qt);
    }
    e.$$.dirty[1] & /*$jsonFocusTextColor, focusTextColor*/
    134250496 && t(46, br = dr(we, 1, br)), e.$$.dirty[1] & /*$jsonTruncate*/
    67108864 && t(48, Y = ee === "none" ? "none" : ""), e.$$.dirty[0] & /*selectable*/
    32 | e.$$.dirty[1] & /*$jsonSelectable*/
    16777216 && t(5, mt = Zr(Xe, mt)), e.$$.dirty[0] & /*text, rootTextStyles*/
    132 | e.$$.dirty[1] & /*$jsonRanges, $jsonImages*/
    12582912 && ar(Ut, x, Ce, Dr), e.$$.dirty[0] & /*singleline*/
    256 | e.$$.dirty[1] & /*multiline, halign, valign, truncate, focusTextColor*/
    178176 && t(20, le = {
      singleline: oe,
      multiline: nr,
      halign: fr,
      valign: wr,
      truncate: Y,
      "has-focus-color": !!br
    }), e.$$.dirty[0] & /*hasCloudBg*/
    64 | e.$$.dirty[1] & /*gradient*/
    65536 && t(19, A = {
      gradient: !!Rt,
      "has-cloud-bg": se
    }), e.$$.dirty[0] & /*fontSize, lineClamp*/
    24 | e.$$.dirty[1] & /*lineHeight, maxHeight, rootTextColor, gradient, focusTextColor*/
    116224 && t(18, D = {
      "font-size": ge(Tt),
      "line-height": ir,
      "max-height": jt,
      "-webkit-line-clamp": rr,
      color: Nt,
      "background-image": Rt,
      "--divkit-text-focus-color": br
    }), e.$$.dirty[0] & /*fontSize*/
    8 | e.$$.dirty[1] & /*$jsonPaddings, $direction*/
    3145728 && t(17, M = so(Rl(ni(q, {}) || {}, 10 / Tt), U));
  }, [
    Le,
    Ft,
    Ut,
    Tt,
    rr,
    mt,
    se,
    Dr,
    oe,
    z,
    lt,
    De,
    sr,
    er,
    kr,
    vr,
    Br,
    M,
    D,
    A,
    le,
    B,
    N,
    k,
    w,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    n,
    bt,
    at,
    ir,
    jt,
    nr,
    fr,
    wr,
    Nt,
    br,
    Rt,
    Y,
    T,
    fe,
    U,
    q,
    Ce,
    x,
    Xe,
    pe,
    ee,
    we,
    $,
    ot,
    kt,
    ft,
    Et,
    It,
    At,
    Zt,
    ht
  ];
}
class hg extends Or {
  constructor(r) {
    super(), Lr(this, r, gg, pg, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const mg = "appkit-container", bg = "appkit-container_wrap", yg = "appkit-container_overflow_visible", wg = "appkit-container_orientation_vertical", kg = "appkit-container_valign_start", vg = "appkit-container_valign_center", jg = "appkit-container_valign_end", Cg = "appkit-container_halign_start", Eg = "appkit-container_halign_center", Ag = "appkit-container_halign_end", Sg = "appkit-container_orientation_horizontal", Vg = "appkit-container_orientation_overlap", du = {
  container: mg,
  container_wrap: bg,
  container_overflow_visible: yg,
  container_orientation_vertical: wg,
  container_valign_start: kg,
  container_valign_center: vg,
  container_valign_end: jg,
  "container_valign_space-between": "appkit-container_valign_space-between",
  "container_valign_space-around": "appkit-container_valign_space-around",
  "container_valign_space-evenly": "appkit-container_valign_space-evenly",
  container_halign_start: Cg,
  container_halign_center: Eg,
  container_halign_end: Ag,
  "container_halign_space-between": "appkit-container_halign_space-between",
  "container_halign_space-around": "appkit-container_halign_space-around",
  "container_halign_space-evenly": "appkit-container_halign_space-evenly",
  container_orientation_horizontal: Sg,
  container_orientation_overlap: Vg,
  "container_fixed-container": "appkit-container_fixed-container",
  "container_responsive-mobile-vertical": "appkit-container_responsive-mobile-vertical",
  "container_responsive-mobile-horizontal": "appkit-container_responsive-mobile-horizontal",
  "container_responsive-mobile-has-height": "appkit-container_responsive-mobile-has-height",
  "container_responsive-tablet-vertical": "appkit-container_responsive-tablet-vertical",
  "container_responsive-tablet-horizontal": "appkit-container_responsive-tablet-horizontal",
  "container_responsive-tablet-has-height": "appkit-container_responsive-tablet-has-height"
};
function _u(e) {
  return {
    top: Number(e == null ? void 0 : e.top) || 0,
    right: Number(e == null ? void 0 : e.right) || 0,
    bottom: Number(e == null ? void 0 : e.bottom) || 0,
    left: Number(e == null ? void 0 : e.left) || 0
  };
}
function pu(e, r, t) {
  const n = ((r == null ? void 0 : r.margins.left) || 0) + ((r == null ? void 0 : r.margins.right) || 0), o = ((r == null ? void 0 : r.margins.top) || 0) + ((r == null ? void 0 : r.margins.bottom) || 0);
  r != null && r.show_at_start && (t ? e.top = r.style.height + o : e.left = r.style.width + n), r != null && r.show_at_end && (t ? e.bottom = r.style.height + o : e.right = r.style.width + n);
}
function Fg(e, r, t) {
  const n = {};
  return pu(n, r, e === "vertical"), pu(n, t, e === "horizontal"), n;
}
function Dg({
  orientation: e,
  separator: r,
  lineSeparator: t,
  itemSpacing: n,
  lineSpacing: o
}) {
  let i;
  const s = ((r == null ? void 0 : r.margins.left) || 0) + ((r == null ? void 0 : r.margins.right) || 0), a = ((r == null ? void 0 : r.margins.top) || 0) + ((r == null ? void 0 : r.margins.bottom) || 0), l = ((t == null ? void 0 : t.margins.left) || 0) + ((t == null ? void 0 : t.margins.right) || 0), u = ((t == null ? void 0 : t.margins.top) || 0) + ((t == null ? void 0 : t.margins.bottom) || 0);
  return e === "horizontal" ? i = [
    t != null && t.show_between ? t.style.height + u : o,
    r != null && r.show_between ? r.style.width + s : n
  ] : i = [
    r != null && r.show_between ? r.style.height + a : n,
    t != null && t.show_between ? t.style.width + l : o
  ], i.map(ge).join(" ");
}
function Ig(e) {
  var t;
  const r = (t = e.width) == null ? void 0 : t.type;
  return r !== "wrap_content" && r !== "fixed";
}
function Tg(e) {
  var t;
  return ((t = e.height) == null ? void 0 : t.type) === "match_parent";
}
function Mg(e, r) {
  return e === "vertical" || e === "horizontal" || e === "overlap" ? e : r;
}
function Pg(e) {
  var r, t, n;
  return {
    width: nn((r = e.item_width) == null ? void 0 : r.value, 10),
    height: nn((t = e.item_height) == null ? void 0 : t.value, 10),
    radius: nn((n = e.corner_radius) == null ? void 0 : n.value, 5)
  };
}
function Ng(e) {
  var t;
  const r = nn((t = e.radius) == null ? void 0 : t.value, 10) * 2;
  return {
    width: r,
    height: r,
    radius: r
  };
}
function zg(e, r, t) {
  var l;
  const n = {}, o = r.stroke || (t == null ? void 0 : t.stroke), i = o != null && o.color ? dr(o.color) : "", s = o != null && o.width ? Number((l = o.width) != null ? l : 1) : "";
  n.width = e.width, n.height = e.height, n.borderRadius = e.radius;
  const a = r.background_color || (t == null ? void 0 : t.color);
  return n.background = dr(a), i && s && (n.boxShadow = `inset 0 0 0 ${ge(s)} ${i}`), n;
}
function uo(e, r, t) {
  if (!e || !e.shape || !e.shape.type || !r.includes(e.shape.type) || e.type !== "shape_drawable")
    return t;
  let n;
  if (e.shape.type === "rounded_rectangle")
    n = Pg(e.shape);
  else if (e.shape.type === "circle")
    n = Ng(e.shape);
  else
    return t;
  return zg(n, e.shape, {
    color: e.color,
    stroke: e.stroke
  });
}
let es;
function gu() {
  if (typeof document > "u" && (es = !0), es !== void 0)
    return es;
  const e = document.createElement("div");
  return e.style.position = "absolute", e.style.display = "flex", e.style.flexDirection = "column", e.style.gap = "1px", e.appendChild(document.createElement("div")), e.appendChild(document.createElement("div")), document.body.appendChild(e), es = e.scrollHeight === 1, document.body.removeChild(e), es;
}
function Lg(e, r) {
  return e === "top" || e === "center" || e === "bottom" || e === "baseline" || e === "space-between" || e === "space-around" || e === "space-evenly" ? e === "top" ? "start" : e === "bottom" ? "end" : e : r;
}
function Og(e, r, t) {
  return e === "left" || e === "center" || e === "right" || e === "space-between" || e === "space-around" || e === "space-evenly" || e === "start" || e === "end" ? e === "left" ? r === "ltr" ? "start" : "end" : e === "right" ? r === "ltr" ? "end" : "start" : e : t;
}
function Bg() {
}
function Jo(e) {
  return {
    subscribe(r) {
      return r(e), Bg;
    }
  };
}
function pl(e, r, t, n) {
  const o = [], i = n.prototypes;
  return i && e.forEach((s, a) => {
    if (s === null || typeof s != "object")
      return;
    const l = r.preparePrototypeVariables(n.data_element_name || "it", s, a);
    let u, c;
    for (let f = 0; f < i.length; ++f) {
      const _ = i[f];
      if (!_.div)
        continue;
      if (_.selector === void 0) {
        u = _.div, c = t.getJsonWithVars(_.id, l);
        break;
      }
      if (t.getJsonWithVars(_.selector, l)) {
        u = _.div, c = t.getJsonWithVars(_.id, l);
        break;
      }
    }
    u && o.push({
      div: u,
      id: c,
      vars: l,
      key: c || { index: a, data: s }
    });
  }), o;
}
const ls = {
  "container-separator": "appkit-container-separator",
  "container-separator__item": "appkit-container-separator__item",
  "container-separator__shape": "appkit-container-separator__shape"
};
function Rg(e, r) {
  let t = 0, n, o = !1;
  return function() {
    const i = Date.now();
    return !t || Math.abs(i - t) > r ? (t = i, n = e.apply(this, arguments)) : (o || (o = !0, setTimeout(() => {
      o = !1, n = e.apply(this, arguments);
    }, r)), n);
  };
}
function Hg(e) {
  const r = e.getBoundingClientRect(), t = getComputedStyle(e);
  return {
    top: r.top - parseFloat(t.marginTop),
    right: r.right + parseFloat(t.marginRight),
    bottom: r.bottom + parseFloat(t.marginBottom),
    left: r.left - parseFloat(t.marginLeft)
  };
}
const { window: Wg } = Po;
function hu(e, r, t) {
  const n = e.slice();
  return n[16] = r[t], n;
}
function mu(e) {
  let r, t, n = `${/*item*/
  e[16].style.width}px`, o = `${/*item*/
  e[16].style.height}px`, i = `${/*item*/
  e[16].style.borderRadius}px`, s, a = `${/*item*/
  e[16].left}px`, l = `${/*item*/
  e[16].top}px`, u = `${/*item*/
  e[16].width}px`, c = `${/*item*/
  e[16].height}px`;
  return {
    c() {
      r = Pe("div"), t = Pe("div"), s = _r(), g(t, "class", ls["container-separator__shape"]), I(t, "width", n), I(t, "height", o), I(t, "border-radius", i), I(
        t,
        "background",
        /*item*/
        e[16].style.background
      ), I(
        t,
        "box-shadow",
        /*item*/
        e[16].style.boxShadow
      ), g(r, "class", ls["container-separator__item"]), I(r, "left", a), I(r, "top", l), I(r, "width", u), I(r, "height", c);
    },
    m(f, _) {
      K(f, r, _), wt(r, t), wt(r, s);
    },
    p(f, _) {
      _ & /*separators*/
      2 && n !== (n = `${/*item*/
      f[16].style.width}px`) && I(t, "width", n), _ & /*separators*/
      2 && o !== (o = `${/*item*/
      f[16].style.height}px`) && I(t, "height", o), _ & /*separators*/
      2 && i !== (i = `${/*item*/
      f[16].style.borderRadius}px`) && I(t, "border-radius", i), _ & /*separators*/
      2 && I(
        t,
        "background",
        /*item*/
        f[16].style.background
      ), _ & /*separators*/
      2 && I(
        t,
        "box-shadow",
        /*item*/
        f[16].style.boxShadow
      ), _ & /*separators*/
      2 && a !== (a = `${/*item*/
      f[16].left}px`) && I(r, "left", a), _ & /*separators*/
      2 && l !== (l = `${/*item*/
      f[16].top}px`) && I(r, "top", l), _ & /*separators*/
      2 && u !== (u = `${/*item*/
      f[16].width}px`) && I(r, "width", u), _ & /*separators*/
      2 && c !== (c = `${/*item*/
      f[16].height}px`) && I(r, "height", c);
    },
    d(f) {
      f && J(r);
    }
  };
}
function Ug(e) {
  let r, t, n, o = ur(
    /*separators*/
    e[1]
  ), i = [];
  for (let s = 0; s < o.length; s += 1)
    i[s] = mu(hu(e, o, s));
  return {
    c() {
      r = Pe("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      g(r, "class", ls["container-separator"]);
    },
    m(s, a) {
      K(s, r, a);
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(r, null);
      e[13](r), t || (n = Qe(
        Wg,
        "resize",
        /*throttledUpdated*/
        e[2]
      ), t = !0);
    },
    p(s, [a]) {
      if (a & /*separators*/
      2) {
        o = ur(
          /*separators*/
          s[1]
        );
        let l;
        for (l = 0; l < o.length; l += 1) {
          const u = hu(s, o, l);
          i[l] ? i[l].p(u, a) : (i[l] = mu(u), i[l].c(), i[l].m(r, null));
        }
        for (; l < i.length; l += 1)
          i[l].d(1);
        i.length = o.length;
      }
    },
    i: v,
    o: v,
    d(s) {
      s && J(r), un(i, s), e[13](null), t = !1, n();
    }
  };
}
const Gg = 10;
function Fl(e, r, t, n, o, i) {
  const s = r.margins.left, a = r.margins.right, l = r.margins.top, u = r.margins.bottom;
  i ? e.push({
    top: t.bottom + l,
    left: o.left + s,
    width: Math.max(0, o.right - o.left - s - a),
    height: n.top - t.bottom - l - u,
    style: r.style
  }) : e.push({
    top: o.top + l,
    left: t.right + s,
    width: n.left - t.right - s - a,
    height: Math.max(0, o.bottom - o.top - l - u),
    style: r.style
  });
}
function bu(e, r, t, n, o, i) {
  const s = {
    top: Math.min(...t.map((a) => a.top)),
    right: Math.max(...t.map((a) => a.right)),
    bottom: Math.max(...t.map((a) => a.bottom)),
    left: Math.min(...t.map((a) => a.left))
  };
  if (r != null && r.show_at_start) {
    let a, l;
    o === "space-around" || o === "space-evenly" ? (a = i.left - r.style.width, l = i.top - r.style.height) : (a = t[0].left - r.style.width - r.margins.left - r.margins.right, l = t[0].top - r.style.height - r.margins.top - r.margins.bottom), Fl(
      e,
      r,
      // only right and bottom is used
      { top: 0, right: a, bottom: l, left: 0 },
      t[0],
      s,
      n
    );
  }
  if (r != null && r.show_between)
    for (let a = 0; a < t.length - 1; ++a)
      Fl(e, r, t[a], t[a + 1], s, n);
  if (r != null && r.show_at_end) {
    const a = t[t.length - 1];
    let l, u;
    o === "space-around" || o === "space-evenly" ? (l = i.bottom + r.style.height, u = i.right + r.style.width) : (l = a.bottom + r.style.height + r.margins.top + r.margins.bottom, u = a.right + r.style.width + r.margins.left + r.margins.right), Fl(
      e,
      r,
      a,
      // only top and left is used
      { top: l, right: 0, bottom: 0, left: u },
      s,
      n
    );
  }
}
function Jg(e, r, t) {
  let n, { orientation: o } = r, { separator: i } = r, { lineSeparator: s } = r, { contentHAlign: a } = r, { contentVAlign: l } = r, { direction: u } = r;
  const c = Rg(k, Gg);
  let f = [], _, h = !1, m = null, p = null;
  function w(B) {
    B.some((z) => {
      var fe;
      const oe = (fe = z.target) == null ? void 0 : fe.classList;
      return !(oe != null && oe.contains(ls["container-separator__shape"])) && !(oe != null && oe.contains(ls["container-separator"]));
    }) && c();
  }
  function k() {
    if (!n)
      return;
    const B = n.getBoundingClientRect(), z = window.getComputedStyle(n), oe = {
      top: B.top + parseFloat(z.paddingTop),
      right: B.right - parseFloat(z.paddingRight),
      bottom: B.bottom - parseFloat(z.paddingBottom),
      left: B.left + parseFloat(z.paddingLeft)
    };
    t(1, f = []);
    let fe = [...n.children].filter((le) => le !== _ && le instanceof HTMLElement && !le.classList.contains(Ks.outer__border) && getComputedStyle(le).display !== "none"), T = [];
    for (; fe.length; ) {
      const le = [], A = fe.shift();
      le.push(A);
      let D = A.getBoundingClientRect(), M = D.left, U = D.right, q = D.bottom;
      for (; fe.length; ) {
        let be = fe[0], Ae = be.getBoundingClientRect();
        if (o === "vertical") {
          if (Ae.top < q)
            break;
        } else if (u === "ltr" ? Ae.left < U : Ae.right > M)
          break;
        U = Math.max(U, Ae.right), M = Math.min(M, Ae.left), q = Math.max(q, Ae.bottom), le.push(be), fe.shift();
      }
      T.push(le);
    }
    const Y = [];
    T.forEach((le) => {
      const A = le.map((M) => Hg(M));
      u === "rtl" && o === "horizontal" && A.reverse(), i && bu(
        f,
        i,
        A,
        o === "vertical",
        o === "vertical" ? l : a,
        oe
      );
      const D = {
        top: Math.min(...A.map((M) => M.top)),
        right: Math.max(...A.map((M) => M.right)),
        bottom: Math.max(...A.map((M) => M.bottom)),
        left: Math.min(...A.map((M) => M.left))
      };
      Y.push(D);
    }), u === "rtl" && o === "vertical" && Y.reverse(), s && bu(
      f,
      s,
      Y,
      o === "horizontal",
      o === "vertical" ? a : l,
      oe
    ), f.forEach((le) => {
      le.top -= B.top, le.left -= B.left;
    });
  }
  Qn(() => {
    t(9, h = !0);
  }), ln(() => {
    t(9, h = !1);
  });
  function N(B) {
    Fr[B ? "unshift" : "push"](() => {
      _ = B, t(0, _);
    });
  }
  return e.$$set = (B) => {
    "orientation" in B && t(3, o = B.orientation), "separator" in B && t(4, i = B.separator), "lineSeparator" in B && t(5, s = B.lineSeparator), "contentHAlign" in B && t(6, a = B.contentHAlign), "contentVAlign" in B && t(7, l = B.contentVAlign), "direction" in B && t(8, u = B.direction);
  }, e.$$.update = () => {
    e.$$.dirty & /*node*/
    1 && t(12, n = (_ == null ? void 0 : _.parentElement) || null), e.$$.dirty & /*mounted, parentElement, mutationObserver, resizeObserver*/
    7680 && (h && n || m || p) && (m && (m.disconnect(), t(10, m = null)), p && (p.disconnect(), t(11, p = null)), h && n && (typeof MutationObserver < "u" && (t(10, m = new MutationObserver(w)), m.observe(n, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    })), typeof ResizeObserver < "u" && (t(11, p = new ResizeObserver(c)), p.observe(n)))), e.$$.dirty & /*mounted, parentElement*/
    4608 && h && n && c();
  }, [
    _,
    f,
    c,
    o,
    i,
    s,
    a,
    l,
    u,
    h,
    m,
    p,
    n,
    N
  ];
}
class Kg extends Or {
  constructor(r) {
    super(), Lr(this, r, Jg, Ug, Sr, {
      orientation: 3,
      separator: 4,
      lineSeparator: 5,
      contentHAlign: 6,
      contentVAlign: 7,
      direction: 8
    });
  }
}
const { Boolean: qg } = Po;
function yu(e, r, t) {
  const n = e.slice();
  return n[63] = r[t], n;
}
function wu(e) {
  let r, t;
  return r = new xn({
    props: {
      componentContext: (
        /*item*/
        e[63]
      ),
      layoutParams: (
        /*childLayoutParams*/
        e[8]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*items*/
      512 && (i.componentContext = /*item*/
      n[63]), o[0] & /*childLayoutParams*/
      256 && (i.layoutParams = /*childLayoutParams*/
      n[8]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function ku(e) {
  let r, t;
  return r = new Kg({
    props: {
      direction: (
        /*$direction*/
        e[10]
      ),
      separator: (
        /*separator*/
        e[5]
      ),
      lineSeparator: (
        /*lineSeparator*/
        e[6]
      ),
      orientation: (
        /*orientation*/
        e[2]
      ),
      contentHAlign: (
        /*contentHAlign*/
        e[4]
      ),
      contentVAlign: (
        /*contentVAlign*/
        e[3]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*$direction*/
      1024 && (i.direction = /*$direction*/
      n[10]), o[0] & /*separator*/
      32 && (i.separator = /*separator*/
      n[5]), o[0] & /*lineSeparator*/
      64 && (i.lineSeparator = /*lineSeparator*/
      n[6]), o[0] & /*orientation*/
      4 && (i.orientation = /*orientation*/
      n[2]), o[0] & /*contentHAlign*/
      16 && (i.contentHAlign = /*contentHAlign*/
      n[4]), o[0] & /*contentVAlign*/
      8 && (i.contentVAlign = /*contentVAlign*/
      n[3]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Yg(e) {
  let r, t, n, o = ur(
    /*items*/
    e[9]
  ), i = [];
  for (let l = 0; l < o.length; l += 1)
    i[l] = wu(yu(e, o, l));
  const s = (l) => ne(i[l], 1, 1, () => {
    i[l] = null;
  });
  let a = (
    /*separator*/
    (e[5] || /*lineSeparator*/
    e[6]) && ku(e)
  );
  return {
    c() {
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      r = _r(), a && a.c(), t = or();
    },
    m(l, u) {
      for (let c = 0; c < i.length; c += 1)
        i[c] && i[c].m(l, u);
      K(l, r, u), a && a.m(l, u), K(l, t, u), n = !0;
    },
    p(l, u) {
      if (u[0] & /*items, childLayoutParams*/
      768) {
        o = ur(
          /*items*/
          l[9]
        );
        let c;
        for (c = 0; c < o.length; c += 1) {
          const f = yu(l, o, c);
          i[c] ? (i[c].p(f, u), W(i[c], 1)) : (i[c] = wu(f), i[c].c(), W(i[c], 1), i[c].m(r.parentNode, r));
        }
        for (pr(), c = o.length; c < i.length; c += 1)
          s(c);
        gr();
      }
      /*separator*/
      l[5] || /*lineSeparator*/
      l[6] ? a ? (a.p(l, u), u[0] & /*separator, lineSeparator*/
      96 && W(a, 1)) : (a = ku(l), a.c(), W(a, 1), a.m(t.parentNode, t)) : a && (pr(), ne(a, 1, 1, () => {
        a = null;
      }), gr());
    },
    i(l) {
      if (!n) {
        for (let u = 0; u < o.length; u += 1)
          W(i[u]);
        W(a), n = !0;
      }
    },
    o(l) {
      i = i.filter(qg);
      for (let u = 0; u < i.length; u += 1)
        ne(i[u]);
      ne(a), n = !1;
    },
    d(l) {
      l && (J(r), J(t)), un(i, l), a && a.d(l);
    }
  };
}
function Xg(e) {
  let r, t;
  return r = new hn({
    props: {
      cls: gt(
        "container",
        du,
        /*mods*/
        e[12]
      ),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      style: (
        /*style*/
        e[13]
      ),
      additionalPaddings: (
        /*additionalPaddings*/
        e[14]
      ),
      heightByAspect: !!/*aspect*/
      e[7],
      parentOf: (
        /*items*/
        e[9]
      ),
      replaceItems: (
        /*replaceItems*/
        e[31]
      ),
      $$slots: { default: [Yg] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      4096 && (i.cls = gt(
        "container",
        du,
        /*mods*/
        n[12]
      )), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*style*/
      8192 && (i.style = /*style*/
      n[13]), o[0] & /*additionalPaddings*/
      16384 && (i.additionalPaddings = /*additionalPaddings*/
      n[14]), o[0] & /*aspect*/
      128 && (i.heightByAspect = !!/*aspect*/
      n[7]), o[0] & /*items*/
      512 && (i.parentOf = /*items*/
      n[9]), o[0] & /*$direction, separator, lineSeparator, orientation, contentHAlign, contentVAlign, items, childLayoutParams*/
      1916 | o[2] & /*$$scope*/
      16 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
const Zg = {
  start: "start",
  center: "center",
  end: "end",
  // 'space-*' values doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, Qg = {
  start: "start",
  center: "center",
  end: "end",
  baseline: "baseline",
  // 'space-*' doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, vu = ["rounded_rectangle", "circle"];
function xg(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, B, z, oe, fe, T, Y, le, A, D, M = v, U = () => (M(), M = E(k, (mt) => t(45, D = mt)), k), q, be = v, Ae = () => (be(), be = E(B, (mt) => t(46, q = mt)), B), Ce, he = v, Fe = () => (he(), he = E(N, (mt) => t(47, Ce = mt)), N), x, Je = v, Ye = () => (Je(), Je = E(w, (mt) => t(48, x = mt)), w), Xe, ye = v, Ie = () => (ye(), ye = E(p, (mt) => t(49, Xe = mt)), p), pe, me = v, _e = () => (me(), me = E(m, (mt) => t(50, pe = mt)), m), ee, ce = v, te = () => (ce(), ce = E(f, (mt) => t(51, ee = mt)), f), we, Ue = v, Ke = () => (Ue(), Ue = E(c, (mt) => t(52, we = mt)), c), $, Oe = v, Ne = () => (Oe(), Oe = E(h, (mt) => t(53, $ = mt)), h), ot, ct = v, rt = () => (ct(), ct = E(_, (mt) => t(54, ot = mt)), _), kt, it, Mt = v, ft = () => (Mt(), Mt = E(u, (mt) => t(55, it = mt)), u), Z, de = v, lt = () => (de(), de = E(l, (mt) => t(56, Z = mt)), l), ze, F = v, Et = () => (F(), F = E(xe, (mt) => t(57, ze = mt)), xe), ut, Vt = v, It = () => (Vt(), Vt = E(a, (mt) => t(58, ut = mt)), a), nt, Q = v, At = () => (Q(), Q = E(s, (mt) => t(59, nt = mt)), s), Pt, $t = v, Zt = () => ($t(), $t = E(i, (mt) => t(60, Pt = mt)), i);
  e.$$.on_destroy.push(() => M()), e.$$.on_destroy.push(() => be()), e.$$.on_destroy.push(() => he()), e.$$.on_destroy.push(() => Je()), e.$$.on_destroy.push(() => ye()), e.$$.on_destroy.push(() => me()), e.$$.on_destroy.push(() => ce()), e.$$.on_destroy.push(() => Ue()), e.$$.on_destroy.push(() => Oe()), e.$$.on_destroy.push(() => ct()), e.$$.on_destroy.push(() => Mt()), e.$$.on_destroy.push(() => de()), e.$$.on_destroy.push(() => F()), e.$$.on_destroy.push(() => Vt()), e.$$.on_destroy.push(() => Q()), e.$$.on_destroy.push(() => $t());
  let { componentContext: Ee } = r, { layoutParams: He = void 0 } = r;
  const ht = Tr(Xr), Te = ht.direction;
  mn(e, Te, (mt) => t(10, kt = mt));
  let xe, Le = "vertical", Ft = "start", Be = "start", bt = null, Ut = null, Tt, ir = {}, De = 0, jt = 0, sr = !1;
  function rr() {
    t(2, Le = "vertical"), t(3, Ft = "start"), t(4, Be = "start"), t(7, Tt = void 0), t(32, De = 0), t(33, jt = 0), t(34, sr = !1);
  }
  function nr(mt) {
    t(0, Ee = t(35, wr = {
      ...Ee,
      json: {
        ...Ee.json,
        items: mt.filter(zo)
      }
    }));
  }
  let fr = [], wr, Nt = {}, br, Rt;
  return ln(() => {
    fr.forEach((mt) => {
      mt.destroy();
    });
  }), e.$$set = (mt) => {
    "componentContext" in mt && t(0, Ee = mt.componentContext), "layoutParams" in mt && t(1, He = mt.layoutParams);
  }, e.$$.update = () => {
    var mt, er, se, kr, vr, Ct, Dr, Br, ar, at, St;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(44, n = Ee.origJson), e.$$.dirty[1] & /*origJson*/
    8192 && n && rr(), e.$$.dirty[0] & /*componentContext*/
    1 && t(43, o = Ee.json.items), e.$$.dirty[0] & /*componentContext*/
    1 && Zt(t(29, i = typeof ((mt = Ee.json.item_builder) == null ? void 0 : mt.data) == "string" ? Ee.getDerivedFromVars((er = Ee.json.item_builder) == null ? void 0 : er.data, void 0, !0) : (se = Ee.json.item_builder) != null && se.data ? Jo(Ee.json.item_builder.data) : void 0)), e.$$.dirty[0] & /*componentContext*/
    1 && At(t(28, s = Ee.getDerivedFromVars(Ee.json.orientation))), e.$$.dirty[0] & /*componentContext*/
    1 && It(t(27, a = Ee.getDerivedFromVars(Ee.json.layout_mode))), e.$$.dirty[0] & /*componentContext*/
    1 && lt(t(26, l = Ee.getDerivedFromVars(Ee.json.content_alignment_vertical))), e.$$.dirty[0] & /*componentContext*/
    1 && ft(t(25, u = Ee.getDerivedFromVars(Ee.json.content_alignment_horizontal))), e.$$.dirty[0] & /*componentContext*/
    1 && Ke(t(24, c = Ee.getDerivedFromVars(Ee.json.separator))), e.$$.dirty[0] & /*componentContext*/
    1 && te(t(23, f = Ee.getDerivedFromVars(Ee.json.line_separator))), e.$$.dirty[0] & /*componentContext*/
    1 && rt(t(22, _ = Ee.getDerivedFromVars(Ee.json.item_spacing))), e.$$.dirty[0] & /*componentContext*/
    1 && Ne(t(21, h = Ee.getDerivedFromVars(Ee.json.line_spacing))), e.$$.dirty[0] & /*componentContext*/
    1 && _e(t(20, m = Ee.getDerivedFromVars(Ee.json.aspect))), e.$$.dirty[0] & /*componentContext*/
    1 && Ie(t(19, p = Ee.getDerivedFromVars(Ee.json.width))), e.$$.dirty[0] & /*componentContext*/
    1 && Ye(t(18, w = Ee.getDerivedFromVars(Ee.json.height))), e.$$.dirty[0] & /*componentContext*/
    1 && U(t(17, k = Ee.getDerivedFromVars(Ee.json.clip_to_bounds))), e.$$.dirty[0] & /*componentContext*/
    1 && Fe(t(16, N = Ee.getDerivedFromVars(Ee.json.max_width))), e.$$.dirty[0] & /*componentContext*/
    1 && Ae(t(15, B = Ee.getDerivedFromVars(Ee.json.responsive))), e.$$.dirty[0] & /*componentContext, items*/
    513 | e.$$.dirty[1] & /*$jsonItemBuilderData, jsonItems, prevContext*/
    536875024) {
      let Gt = [];
      if (Ee.json.item_builder && Array.isArray(Pt) && Array.isArray(Ee.json.item_builder.prototypes)) {
        const ue = Ee.json.item_builder;
        Gt = pl(Pt, ht, Ee, ue);
      } else
        Gt = (Array.isArray(o) && o || []).map((ue, vt) => ({
          div: ue,
          key: ue.id || { index: vt, data: ue }
        }));
      const Qt = new Set(fr), $e = /* @__PURE__ */ new Map();
      let pt = !1;
      wr === Ee && fr.forEach((ue) => {
        ue.key && (typeof ue.key == "string" && $e.has(ue.key) ? pt || (pt = !0, Ee.logError(X(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: ue.key } }))) : $e.set(
          typeof ue.key == "string" ? ue.key : ue.key.index,
          ue
        ));
      }), t(9, fr = Gt.map((ue, vt) => {
        let tr = !pt && $e.get(ue.id), Ht = $e.get(vt);
        return !tr && !ue.id && typeof ue.key == "object" && typeof (Ht == null ? void 0 : Ht.key) == "object" && Gi(Ht.key.data, ue.key.data) && (tr = Ht), tr ? (Qt.delete(tr), tr) : Ee.produceChildContext(ue.div, {
          path: vt,
          variables: ue.vars,
          id: ue.id,
          key: ue.key
        });
      }));
      for (const ue of Qt)
        ue.destroy();
      t(35, wr = Ee);
    }
    if (e.$$.dirty[0] & /*items, componentContext*/
    513) {
      let Gt = [];
      fr.forEach((Qt) => {
        Gt.push(Ee.getDerivedFromVars({
          width: Qt.json.width,
          height: Qt.json.height
        }));
      }), Et(t(11, xe = Ui(Gt, (Qt) => [...Qt])));
    }
    if (e.$$.dirty[0] & /*orientation*/
    4 | e.$$.dirty[1] & /*$jsonOrientation*/
    268435456 && t(2, Le = Mg(nt, Le)), e.$$.dirty[1] & /*$jsonLayoutMode*/
    134217728 && t(38, z = ut === "wrap"), e.$$.dirty[0] & /*orientation*/
    4 | e.$$.dirty[1] & /*wrap*/
    128 && t(42, oe = Le !== "horizontal" && !z), e.$$.dirty[0] & /*orientation*/
    4 | e.$$.dirty[1] & /*wrap*/
    128 && t(41, fe = Le !== "vertical" && !z), e.$$.dirty[0] & /*orientation*/
    4 | e.$$.dirty[1] & /*$childStore*/
    67108864 && t(40, T = Le === "overlap" && !ze.every(Ig)), e.$$.dirty[0] & /*orientation*/
    4 | e.$$.dirty[1] & /*$childStore*/
    67108864 && t(39, Y = Le === "overlap" && !ze.every(Tg)), e.$$.dirty[0] & /*contentVAlign*/
    8 | e.$$.dirty[1] & /*$jsonContentVAlign*/
    33554432 && t(3, Ft = Lg(Z, Ft)), e.$$.dirty[0] & /*$direction, contentHAlign*/
    1040 | e.$$.dirty[1] & /*$jsonContentHAlign*/
    16777216 && t(4, Be = Og(it, kt, Be)), e.$$.dirty[1] & /*$jsonItemSpacing, itemSpacing*/
    8388610 && t(32, De = nn(ot, De)), e.$$.dirty[1] & /*$jsonLineSpacing, lineSpacing*/
    4194308 && t(33, jt = nn($, jt)), e.$$.dirty[0] & /*orientation, separator, componentContext*/
    37 | e.$$.dirty[1] & /*$jsonSeparator, itemSpacing*/
    2097154)
      if (we != null && we.style && Le !== "overlap" && gu()) {
        const Gt = uo(we.style, vu, (bt == null ? void 0 : bt.style) || null);
        Gt ? (t(5, bt = {
          show_at_start: !!((kr = we.show_at_start) != null && kr),
          show_at_end: !!((vr = we.show_at_end) != null && vr),
          show_between: !!((Ct = we.show_between) == null || Ct),
          style: Gt,
          margins: _u(we.margins)
        }), bt.show_between && De && Ee.logError(X(new Error("item_spacing will be ignored due to the 'separator' property."), { level: "warn" }))) : t(5, bt = null);
      } else
        t(5, bt = null);
    if (e.$$.dirty[0] & /*orientation, lineSeparator, componentContext*/
    69 | e.$$.dirty[1] & /*$jsonLineSeparator, lineSpacing*/
    1048580)
      if (ee != null && ee.style && Le !== "overlap" && gu()) {
        const Gt = uo(ee.style, vu, (Ut == null ? void 0 : Ut.style) || null);
        Gt ? (t(6, Ut = {
          show_at_start: !!((Dr = ee.show_at_start) != null && Dr),
          show_at_end: !!((Br = ee.show_at_end) != null && Br),
          show_between: !!((ar = ee.show_between) == null || ar),
          style: Gt,
          margins: _u(ee.margins)
        }), Ut.show_between && jt && Ee.logError(X(new Error("line_spacing will be ignored due to the 'line_separator' property."), { level: "warn" }))) : t(6, Ut = null);
      } else
        t(6, Ut = null);
    if (e.$$.dirty[0] & /*separator, lineSeparator, orientation*/
    100 && t(14, le = bt || Ut ? Fg(Le, bt, Ut) : null), e.$$.dirty[1] & /*$jsonAspect*/
    524288) {
      const Gt = pe == null ? void 0 : pe.ratio;
      Gt && Tn(Gt) ? t(7, Tt = Gt) : t(7, Tt = void 0);
    }
    if (e.$$.dirty[0] & /*orientation, contentHAlign, contentVAlign, layoutParams, aspect, childLayoutParams*/
    414 | e.$$.dirty[1] & /*wrap, $jsonWidth, $jsonHeight, supportWidthWrapContent, supportHeightWrapContent, stretchWidth, stretchHeight*/
    397184) {
      let Gt = {};
      Le === "overlap" && (Gt.overlapParent = !0), Le !== "horizontal" && (Gt.parentHAlign = z ? "start" : Zg[Be]), Le !== "vertical" && (Gt.parentVAlign = z ? "start" : Qg[Ft]);
      const Qt = (Xe == null ? void 0 : Xe.type) === "wrap_content" || (Xe == null ? void 0 : Xe.type) === "match_parent" && (He == null ? void 0 : He.parentHorizontalWrapContent), $e = !x || x.type === "wrap_content" || x.type === "match_parent" && (He == null ? void 0 : He.parentVerticalWrapContent);
      !oe && Qt && (Gt.parentHorizontalWrapContent = !0), !Tt && !fe && $e && (Gt.parentVerticalWrapContent = !0), Qt || (Gt.parentContainerKnownWidth = !0), $e || (Gt.parentContainerKnownHeight = !0), Gt.stretchWidth = T, Gt.stretchHeight = Y, Le === "horizontal" && (Gt.parentContainerOrientation = "horizontal"), Le === "vertical" && (Gt.parentContainerOrientation = "vertical"), z && (Gt.parentContainerWrap = !0), t(8, ir = ei(Gt, ir));
    }
    if (e.$$.dirty[1] & /*$jsonMaxWidth*/
    65536 && t(34, sr = (Ce == null ? void 0 : Ce.type) === "fixed"), e.$$.dirty[0] & /*orientation, contentVAlign, contentHAlign*/
    28 | e.$$.dirty[1] & /*$jsonResponsive, wrap, $jsonClipToBounds, isFixedContainer, responsiveMobileHeight, responsiveTabletHeight*/
    49384) {
      let Gt, Qt;
      if (t(36, br = void 0), t(37, Rt = void 0), q) {
        const $e = q == null ? void 0 : q.mobile, pt = q == null ? void 0 : q.tablet;
        if ($e != null && $e.orientation && (Gt = String($e.orientation)), pt != null && pt.orientation && (Qt = String(pt.orientation)), ((at = $e == null ? void 0 : $e.height) == null ? void 0 : at.type) === "fixed" && $e.height.value !== void 0) {
          const ue = nn($e.height.value, 0);
          t(36, br = ue > 0 ? ue : void 0);
        }
        if (((St = pt == null ? void 0 : pt.height) == null ? void 0 : St.type) === "fixed" && pt.height.value !== void 0) {
          const ue = nn(pt.height.value, 0);
          t(37, Rt = ue > 0 ? ue : void 0);
        }
      }
      t(12, Nt = {
        orientation: Le,
        valign: Ft,
        halign: Be,
        wrap: z,
        overflow: D === !1 || D === 0 ? "visible" : void 0,
        "fixed-container": sr,
        "responsive-mobile-vertical": Gt === "vertical",
        "responsive-mobile-horizontal": Gt === "horizontal",
        "responsive-tablet-vertical": Qt === "vertical",
        "responsive-tablet-horizontal": Qt === "horizontal",
        "responsive-mobile-has-height": br !== void 0,
        "responsive-tablet-has-height": Rt !== void 0
      });
    }
    e.$$.dirty[0] & /*separator, lineSeparator, orientation, aspect*/
    228 | e.$$.dirty[1] & /*itemSpacing, lineSpacing, responsiveMobileHeight, responsiveTabletHeight*/
    102 && t(13, A = {
      gap: bt || Ut || De || jt ? Dg({
        orientation: Le,
        separator: bt,
        lineSeparator: Ut,
        itemSpacing: De,
        lineSpacing: jt
      }) : void 0,
      "aspect-ratio": Tt,
      "--responsive-mobile-height": br !== void 0 ? ge(br) : void 0,
      "--responsive-tablet-height": Rt !== void 0 ? ge(Rt) : void 0
    });
  }, [
    Ee,
    He,
    Le,
    Ft,
    Be,
    bt,
    Ut,
    Tt,
    ir,
    fr,
    kt,
    xe,
    Nt,
    A,
    le,
    B,
    N,
    k,
    w,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    Te,
    nr,
    De,
    jt,
    sr,
    wr,
    br,
    Rt,
    z,
    Y,
    T,
    fe,
    oe,
    o,
    n,
    D,
    q,
    Ce,
    x,
    Xe,
    pe,
    ee,
    we,
    $,
    ot,
    it,
    Z,
    ze,
    ut,
    nt,
    Pt
  ];
}
class $g extends Or {
  constructor(r) {
    super(), Lr(this, r, xg, Xg, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const eh = "appkit-separator", th = "appkit-separator_orientation_horizontal", rh = "appkit-separator_orientation_vertical", nh = "appkit-separator__inner", Hl = {
  separator: eh,
  separator_orientation_horizontal: th,
  separator_orientation_vertical: rh,
  separator__inner: nh
};
function ma(e, r) {
  return e === "vertical" || e === "horizontal" ? e : r;
}
function ju(e) {
  let r, t;
  return {
    c() {
      r = Pe("span"), g(r, "class", Hl.separator__inner), g(r, "style", t = cr(
        /*style*/
        e[3]
      ));
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o & /*style*/
      8 && t !== (t = cr(
        /*style*/
        n[3]
      )) && g(r, "style", t);
    },
    d(n) {
      n && J(r);
    }
  };
}
function oh(e) {
  let r, t = (
    /*hasContent*/
    e[4] && ju(e)
  );
  return {
    c() {
      t && t.c(), r = or();
    },
    m(n, o) {
      t && t.m(n, o), K(n, r, o);
    },
    p(n, o) {
      /*hasContent*/
      n[4] ? t ? t.p(n, o) : (t = ju(n), t.c(), t.m(r.parentNode, r)) : t && (t.d(1), t = null);
    },
    d(n) {
      n && J(r), t && t.d(n);
    }
  };
}
function ih(e) {
  let r, t;
  return r = new hn({
    props: {
      cls: gt(
        "separator",
        Hl,
        /*mods*/
        e[2]
      ),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: { default: [oh] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, [o]) {
      const i = {};
      o & /*mods*/
      4 && (i.cls = gt(
        "separator",
        Hl,
        /*mods*/
        n[2]
      )), o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o & /*$$scope, style, hasContent*/
      8216 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function sh(e, r, t) {
  let n, o, i, s, a, l, u, c, f = v, _ = () => (f(), f = E(o, (N) => t(11, c = N)), o);
  e.$$.on_destroy.push(() => f());
  let { componentContext: h } = r, { layoutParams: m = void 0 } = r, p = "horizontal", w = "rgba(0,0,0,0.08)";
  function k() {
    t(6, p = "horizontal"), t(7, w = "rgba(0,0,0,0.08)");
  }
  return e.$$set = (N) => {
    "componentContext" in N && t(0, h = N.componentContext), "layoutParams" in N && t(1, m = N.layoutParams);
  }, e.$$.update = () => {
    e.$$.dirty & /*componentContext*/
    1 && t(10, n = h.origJson), e.$$.dirty & /*origJson*/
    1024 && n && k(), e.$$.dirty & /*componentContext*/
    1 && _(t(5, o = h.getDerivedFromVars(h.json.delimiter_style))), e.$$.dirty & /*$jsonDelimiterStyle, orientation*/
    2112 && t(6, p = ma(c == null ? void 0 : c.orientation, p)), e.$$.dirty & /*$jsonDelimiterStyle*/
    2048 && t(4, i = !(c != null && c.color && (c.color === "transparent" || c.color.length === 9 && c.color.indexOf("#00") === 0))), e.$$.dirty & /*$jsonDelimiterStyle, background*/
    2176 && t(7, w = dr(c == null ? void 0 : c.color, 1, w)), e.$$.dirty & /*orientation*/
    64 && t(9, s = p === "horizontal" ? "100%" : ge(1)), e.$$.dirty & /*orientation*/
    64 && t(8, a = p === "horizontal" ? ge(1) : "100%"), e.$$.dirty & /*background, width, height*/
    896 && t(3, l = { background: w, width: s, height: a }), e.$$.dirty & /*orientation*/
    64 && t(2, u = { orientation: p });
  }, [
    h,
    m,
    u,
    l,
    i,
    o,
    p,
    w,
    a,
    s,
    n,
    c
  ];
}
class lh extends Or {
  constructor(r) {
    super(), Lr(this, r, sh, ih, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const ah = "appkit-image", uh = "appkit-image__image", ch = "appkit-image_error", fh = "appkit-image_aspect", dh = "appkit-image_loaded", Wl = {
  image: ah,
  "image_is-width-content": "appkit-image_is-width-content",
  "image_is-height-content": "appkit-image_is-height-content",
  image__image: uh,
  image_error: ch,
  "image_is-rtl-mirror": "appkit-image_is-rtl-mirror",
  image_aspect: fh,
  "image_aspect-content": "appkit-image_aspect-content",
  image_loaded: dh,
  "divkit-image-appearance": "appkit-divkit-image-appearance",
  "image_before-appearance": "appkit-image_before-appearance"
};
function _h(e, r, t) {
  const n = e.content_alignment_horizontal, o = e.content_alignment_vertical;
  return n && n !== "left" && n !== "center" && n !== "right" && n !== "start" && n !== "end" || o && o !== "top" && o !== "center" && o !== "bottom" ? t : jd({
    content_alignment_horizontal: n,
    content_alignment_vertical: o
  }, r);
}
function Vd(e) {
  return e.startsWith("data:") ? Ll(e) : `data:image/jpg;base64,${Ll(e)}`;
}
function ph(e, r, t) {
  let { componentContext: n } = r;
  Tr(Xr);
  function o() {
  }
  return Qn(() => {
  }), al(o), ln(() => {
  }), e.$$set = (i) => {
    "componentContext" in i && t(0, n = i.componentContext);
  }, [n];
}
class Fn extends Or {
  constructor(r) {
    super(), Lr(this, r, ph, null, Sr, { componentContext: 0 });
  }
}
function gh(e) {
  let r, t;
  return r = new Fn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function hh(e) {
  let r, t;
  return r = new hn({
    props: {
      cls: gt(
        "image",
        Wl,
        /*mods*/
        e[12]
      ),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      customDescription: !0,
      style: { "aspect-ratio": (
        /*aspectRatio*/
        e[4]
      ) },
      heightByAspect: (
        /*aspectRatio*/
        e[4] !== void 0
      ),
      $$slots: {
        default: [
          mh,
          ({ widthMin: n, widthMax: o, heightMin: i, heightMax: s }) => ({
            75: n,
            76: o,
            77: i,
            78: s
          }),
          ({ widthMin: n, widthMax: o, heightMin: i, heightMax: s }) => [
            0,
            0,
            (n ? 8192 : 0) | (o ? 16384 : 0) | (i ? 32768 : 0) | (s ? 65536 : 0)
          ]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      4096 && (i.cls = gt(
        "image",
        Wl,
        /*mods*/
        n[12]
      )), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*aspectRatio*/
      16 && (i.style = { "aspect-ratio": (
        /*aspectRatio*/
        n[4]
      ) }), o[0] & /*aspectRatio*/
      16 && (i.heightByAspect = /*aspectRatio*/
      n[4] !== void 0), o[0] & /*svgFilterId, state, imageUrl, highPrority, style, isWidthContent, isHeightContent, alt, img*/
      11756 | o[1] & /*$jsonPreloadRequired*/
      1 | o[2] & /*$$scope, widthMin, widthMax, heightMin, heightMax*/
      253952 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Cu(e) {
  let r, t, n, o, i, s, a, l;
  return {
    c() {
      r = Pe("img"), g(r, "class", Wl.image__image), Xn(r.src, t = /*state*/
      e[2] === ns ? Ul : (
        /*imageUrl*/
        e[3]
      )) || g(r, "src", t), g(r, "loading", n = /*$jsonPreloadRequired*/
      e[31] || /*highPrority*/
      e[10] ? "eager" : "lazy"), g(r, "decoding", o = /*highPrority*/
      e[10] ? "sync" : "async"), g(r, "style", i = cr({
        .../*style*/
        e[11],
        "min-width": (
          /*isWidthContent*/
          e[7] ? (
            /*widthMin*/
            e[75]
          ) : void 0
        ),
        "max-width": (
          /*isWidthContent*/
          e[7] ? (
            /*widthMax*/
            e[76]
          ) : void 0
        ),
        "min-height": (
          /*isHeightContent*/
          e[6] ? (
            /*heightMin*/
            e[77]
          ) : void 0
        ),
        "max-height": (
          /*isHeightContent*/
          e[6] ? (
            /*heightMax*/
            e[78]
          ) : void 0
        )
      })), g(
        r,
        "alt",
        /*alt*/
        e[13]
      ), g(r, "aria-hidden", s = /*alt*/
      e[13] ? null : "true");
    },
    m(u, c) {
      K(u, r, c), e[70](r), a || (l = [
        Qe(
          r,
          "load",
          /*onLoad*/
          e[33]
        ),
        Qe(
          r,
          "error",
          /*onError*/
          e[34]
        )
      ], a = !0);
    },
    p(u, c) {
      c[0] & /*state, imageUrl*/
      12 && !Xn(r.src, t = /*state*/
      u[2] === ns ? Ul : (
        /*imageUrl*/
        u[3]
      )) && g(r, "src", t), c[0] & /*highPrority*/
      1024 | c[1] & /*$jsonPreloadRequired*/
      1 && n !== (n = /*$jsonPreloadRequired*/
      u[31] || /*highPrority*/
      u[10] ? "eager" : "lazy") && g(r, "loading", n), c[0] & /*highPrority*/
      1024 && o !== (o = /*highPrority*/
      u[10] ? "sync" : "async") && g(r, "decoding", o), c[0] & /*style, isWidthContent, isHeightContent*/
      2240 | c[2] & /*widthMin, widthMax, heightMin, heightMax*/
      122880 && i !== (i = cr({
        .../*style*/
        u[11],
        "min-width": (
          /*isWidthContent*/
          u[7] ? (
            /*widthMin*/
            u[75]
          ) : void 0
        ),
        "max-width": (
          /*isWidthContent*/
          u[7] ? (
            /*widthMax*/
            u[76]
          ) : void 0
        ),
        "min-height": (
          /*isHeightContent*/
          u[6] ? (
            /*heightMin*/
            u[77]
          ) : void 0
        ),
        "max-height": (
          /*isHeightContent*/
          u[6] ? (
            /*heightMax*/
            u[78]
          ) : void 0
        )
      })) && g(r, "style", i), c[0] & /*alt*/
      8192 && g(
        r,
        "alt",
        /*alt*/
        u[13]
      ), c[0] & /*alt*/
      8192 && s !== (s = /*alt*/
      u[13] ? null : "true") && g(r, "aria-hidden", s);
    },
    d(u) {
      u && J(r), e[70](null), a = !1, Rr(l);
    }
  };
}
function mh(e) {
  let r = (
    /*svgFilterId*/
    e[5]
  ), t, n = Cu(e);
  return {
    c() {
      n.c(), t = or();
    },
    m(o, i) {
      n.m(o, i), K(o, t, i);
    },
    p(o, i) {
      i[0] & /*svgFilterId*/
      32 && Sr(r, r = /*svgFilterId*/
      o[5]) ? (n.d(1), n = Cu(o), n.c(), n.m(t.parentNode, t)) : n.p(o, i);
    },
    d(o) {
      o && J(t), n.d(o);
    }
  };
}
function bh(e) {
  let r, t, n, o;
  const i = [hh, gh], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[9] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = or();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (t && (pr(), ne(s[c], 1, 1, () => {
        s[c] = null;
      }), gr()), ~r ? (t = s[r], t ? t.p(l, u) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      ne(t), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
const Ul = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", yh = "empty://", wh = "rgba(0,0,0,0.08)", _i = 0, Dl = 1, ns = 2, Eu = /\.gif($|\?)/i, kh = "data:image/gif", Au = 'A Gif image was used for the "Image" component. The animation will be played on the web platform, but it does not match the behavior of other platforms.';
function vh(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, B, z, oe, fe, T, Y, le, A, D = v, M = () => (D(), D = E(N, (pt) => t(53, A = pt)), N), U, q, be = v, Ae = () => (be(), be = E(k, (pt) => t(55, q = pt)), k), Ce, he = v, Fe = () => (he(), he = E(w, (pt) => t(56, Ce = pt)), w), x, Je = v, Ye = () => (Je(), Je = E(p, (pt) => t(57, x = pt)), p), Xe, ye = v, Ie = () => (ye(), ye = E(_, (pt) => t(58, Xe = pt)), _), pe, me = v, _e = () => (me(), me = E(m, (pt) => t(59, pe = pt)), m), ee, ce = v, te = () => (ce(), ce = E(h, (pt) => t(60, ee = pt)), h), we, Ue = v, Ke = () => (Ue(), Ue = E(f, (pt) => t(61, we = pt)), f), $, Oe = v, Ne = () => (Oe(), Oe = E(c, (pt) => t(62, $ = pt)), c), ot, ct = v, rt = () => (ct(), ct = E(u, (pt) => t(63, ot = pt)), u), kt, it = v, Mt = () => (it(), it = E(l, (pt) => t(64, kt = pt)), l), ft, Z = v, de = () => (Z(), Z = E(a, (pt) => t(65, ft = pt)), a), lt, ze = v, F = () => (ze(), ze = E(s, (pt) => t(66, lt = pt)), s), Et, ut = v, Vt = () => (ut(), ut = E(z, (pt) => t(67, Et = pt)), z), It, nt = v, Q = () => (nt(), nt = E(o, (pt) => t(68, It = pt)), o), At, Pt = v, $t = () => (Pt(), Pt = E(i, (pt) => t(69, At = pt)), i), Zt, Ee = v, He = () => (Ee(), Ee = E(B, (pt) => t(31, Zt = pt)), B);
  e.$$.on_destroy.push(() => D()), e.$$.on_destroy.push(() => be()), e.$$.on_destroy.push(() => he()), e.$$.on_destroy.push(() => Je()), e.$$.on_destroy.push(() => ye()), e.$$.on_destroy.push(() => me()), e.$$.on_destroy.push(() => ce()), e.$$.on_destroy.push(() => Ue()), e.$$.on_destroy.push(() => Oe()), e.$$.on_destroy.push(() => ct()), e.$$.on_destroy.push(() => it()), e.$$.on_destroy.push(() => Z()), e.$$.on_destroy.push(() => ze()), e.$$.on_destroy.push(() => ut()), e.$$.on_destroy.push(() => nt()), e.$$.on_destroy.push(() => Pt()), e.$$.on_destroy.push(() => Ee());
  let { componentContext: ht } = r, { layoutParams: Te = void 0 } = r;
  const xe = Tr(Xr), Le = xe.direction;
  mn(e, Le, (pt) => t(54, U = pt));
  let Ft, Be = _i, bt = !1, Ut = wh, Tt = !1, ir, De = "", jt = "none", sr = "50% 50%", rr = !1, nr = "center", fr, wr, Nt = "source_in", br = "", Rt = "", mt = 0, er = 0, se = 0, kr = "", vr = "", Ct = !1, Dr = !1, Br = !1;
  function ar() {
    t(4, fr = void 0), t(40, rr = !1), t(38, jt = "none"), t(39, sr = "50% 50%"), t(43, Nt = "source_in"), t(51, Dr = !1), t(10, Br = !1);
  }
  function at(pt) {
    t(2, Be = _i);
  }
  function St(pt) {
    t(39, sr = _h(pt, U, sr));
  }
  function Gt() {
    Be === _i && t(2, Be = Dl);
  }
  function Qt() {
    Be === _i && t(2, Be = ns);
  }
  ln(() => {
    xe.removeSvgFilter(wr, Nt);
  });
  function $e(pt) {
    Fr[pt ? "unshift" : "push"](() => {
      Ft = pt, t(8, Ft);
    });
  }
  return e.$$set = (pt) => {
    "componentContext" in pt && t(0, ht = pt.componentContext), "layoutParams" in pt && t(1, Te = pt.layoutParams);
  }, e.$$.update = () => {
    var pt;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(52, n = ht.origJson), e.$$.dirty[1] & /*origJson*/
    2097152 && n && ar(), e.$$.dirty[0] & /*componentContext*/
    1 && Q(t(30, o = ht.getDerivedFromVars(ht.json.image_url))), e.$$.dirty[0] & /*componentContext*/
    1 && $t(t(29, i = ht.getDerivedFromVars(ht.json.gif_url))), e.$$.dirty[0] & /*componentContext*/
    1 && F(t(28, s = ht.getDerivedFromVars(ht.json.width))), e.$$.dirty[0] & /*componentContext*/
    1 && de(t(27, a = ht.getDerivedFromVars(ht.json.height))), e.$$.dirty[0] & /*componentContext*/
    1 && Mt(t(26, l = ht.getDerivedFromVars(ht.json.preview))), e.$$.dirty[0] & /*componentContext*/
    1 && rt(t(25, u = ht.getDerivedFromVars(ht.json.preview_url))), e.$$.dirty[0] & /*componentContext*/
    1 && Ne(t(24, c = ht.getDerivedFromVars(ht.json.placeholder_color))), e.$$.dirty[0] & /*componentContext*/
    1 && Ke(t(23, f = ht.getDerivedFromVars(ht.json.scale))), e.$$.dirty[0] & /*componentContext*/
    1 && Ie(t(22, _ = ht.getDerivedFromVars({
      content_alignment_horizontal: ht.json.content_alignment_horizontal,
      content_alignment_vertical: ht.json.content_alignment_vertical
    }))), e.$$.dirty[0] & /*componentContext*/
    1 && te(t(21, h = ht.getDerivedFromVars(ht.json.accessibility))), e.$$.dirty[0] & /*componentContext*/
    1 && _e(t(20, m = ht.getDerivedFromVars(ht.json.aspect))), e.$$.dirty[0] & /*componentContext*/
    1 && Ye(t(19, p = ht.getDerivedFromVars(ht.json.tint_color))), e.$$.dirty[0] & /*componentContext*/
    1 && Fe(t(18, w = ht.getDerivedFromVars(ht.json.tint_mode))), e.$$.dirty[0] & /*componentContext*/
    1 && Ae(t(17, k = ht.getDerivedFromVars(ht.json.appearance_animation))), e.$$.dirty[0] & /*componentContext*/
    1 && M(t(16, N = ht.getDerivedFromVars(ht.json.filters))), e.$$.dirty[0] & /*componentContext*/
    1 && He(t(15, B = ht.getDerivedFromVars(ht.json.preload_required))), e.$$.dirty[0] & /*componentContext*/
    1 && Vt(t(14, z = ht.getDerivedFromVars(ht.json.high_priority_preview_show))), e.$$.dirty[0] & /*componentContext, imageUrl*/
    9 | e.$$.dirty[1] & /*isEmpty*/
    16 | e.$$.dirty[2] & /*$jsonGifUrl, $jsonImageUrl*/
    192) {
      const ue = ht.json.type === "gif";
      let vt = ue ? At : It;
      t(35, bt = vt === yh), bt && (vt = Ul), t(3, ir = vt), !ue && ir && Eu.test(ir) && ht.logError(X(new Error(Au), { level: "warn" }));
    }
    if (e.$$.dirty[0] & /*imageUrl*/
    8 && at(), e.$$.dirty[1] & /*highPriorityPreview*/
    1048576 | e.$$.dirty[2] & /*$jsonHighPriorityPreviewShow*/
    32 && t(51, Dr = Zr(Et, Dr)), e.$$.dirty[0] & /*imageUrl, componentContext*/
    9 && (ir ? t(9, Tt = !1) : (t(9, Tt = !0), ht.logError(X(new Error(`Missing "${ht.json.type === "gif" ? "gif_url" : "image_url"}" for "${ht.json.type}"`))))), e.$$.dirty[2] & /*$jsonWidth*/
    16 && t(7, oe = (lt == null ? void 0 : lt.type) === "wrap_content"), e.$$.dirty[2] & /*$jsonHeight*/
    8 && t(6, fe = (ft == null ? void 0 : ft.type) === "wrap_content"), e.$$.dirty[0] & /*componentContext, state*/
    5 | e.$$.dirty[1] & /*isEmpty, highPriorityPreview*/
    1048592 | e.$$.dirty[2] & /*$jsonPreview, $jsonPreviewUrl*/
    6) {
      const ue = ht.json.type === "gif", vt = kt, tr = ot;
      (Be === _i || Be === ns || bt) && (vt || tr) ? (t(37, De = `url("${tr || Vd(vt || "")}")`), t(10, Br = Dr)) : (t(37, De = ""), t(10, Br = !1)), !ue && (tr && Eu.test(tr) || vt && vt.startsWith(kh)) && ht.logError(X(new Error(Au), { level: "warn" }));
    }
    if (e.$$.dirty[0] & /*state*/
    4 | e.$$.dirty[1] & /*isEmpty, placeholderColor*/
    48 | e.$$.dirty[2] & /*$jsonPlaceholderColor*/
    1 && (Be === _i || Be === ns || bt ? t(36, Ut = dr($, 1, Ut)) : t(36, Ut = "")), e.$$.dirty[1] & /*$jsonScale, scale*/
    1073741952 && t(38, jt = vd(we) || jt), e.$$.dirty[1] & /*$jsonPosition*/
    134217728 && St(Xe), e.$$.dirty[1] & /*$jsonA11y*/
    536870912 && t(13, T = (ee == null ? void 0 : ee.description) || ""), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*$jsonAspect, aspectContent, $jsonPosition*/
    402653696) {
      t(41, nr = "center");
      const ue = pe == null ? void 0 : pe.ratio;
      ue && Tn(ue) ? (t(4, fr = ue), t(40, rr = ((pt = ht.json.width) == null ? void 0 : pt.type) === "wrap_content"), rr && (Xe.content_alignment_vertical === "top" ? t(41, nr = "top") : Xe.content_alignment_vertical === "bottom" && t(41, nr = "bottom"))) : t(4, fr = void 0);
    }
    if (e.$$.dirty[1] & /*$jsonTintColor, $jsonTintMode, tintMode, tintColor*/
    100669440) {
      const ue = x, vt = ue ? dr(ue) : void 0, tr = Ad(Ce, Nt);
      (vt !== wr || tr !== Nt) && (xe.removeSvgFilter(wr, Nt), t(5, br = vt ? xe.addSvgFilter(vt, tr) : ""), t(42, wr = vt), t(43, Nt = tr));
    }
    if (e.$$.dirty[1] & /*$jsonAppearanceAnimation*/
    16777216 && q && q.type === "fade") {
      const ue = q;
      t(44, Rt = Cd(ue.interpolator, "ease_in_out").replace(/_/g, "-")), t(47, se = nn(ue.duration, 300)), t(46, er = nn(ue.start_delay, 0)), t(45, mt = nn(ue.alpha, 0));
    }
    if (e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*$jsonFilters, $direction*/
    12582912) {
      let ue = "", vt = "";
      Array.isArray(A) && A.length && (ue = Ed(A, ht.logError)), ue && (vt = "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)"), t(48, kr = ue), t(49, vr = vt), t(50, Ct = U === "rtl" && Array.isArray(A) && A.some((tr) => tr.type === "rtl_mirror"));
    }
    e.$$.dirty[0] & /*aspectRatio, isWidthContent, isHeightContent, state*/
    212 | e.$$.dirty[1] & /*aspectContent, aspectContentVAlign, animationInterpolator, isRTLMirror*/
    534016 && t(12, Y = {
      aspect: fr !== void 0,
      "aspect-content": rr,
      "aspect-valign": nr !== "center" ? nr : void 0,
      "is-width-content": oe,
      "is-height-content": fe,
      loaded: Be === Dl,
      "before-appearance": !!Rt && Be === _i,
      "is-rtl-mirror": Ct
    }), e.$$.dirty[0] & /*aspectRatio, state, svgFilterId*/
    52 | e.$$.dirty[1] & /*backgroundImage, placeholderColor, scale, filterClipPath, position, filter, animationInterpolator, animationFadeStart, animationDelay, animationDuration*/
    516576 && t(11, le = {
      // Image preview shows, if loading of original image is failed
      "background-image": De,
      "background-color": De ? void 0 : Ut,
      "background-size": cp(jt),
      "clip-path": vr || void 0,
      "object-fit": jt,
      "object-position": sr,
      "aspect-ratio": fr,
      filter: [
        Be === Dl && br ? `url(#${br})` : "",
        kr
      ].filter(Boolean).join(" "),
      "--divkit-appearance-interpolator": Rt || void 0,
      "--divkit-appearance-fade-start": Rt ? mt : void 0,
      "--divkit-appearance-delay": Rt ? `${er}ms` : void 0,
      "--divkit-appearance-duration": Rt ? `${se}ms` : void 0
    });
  }, [
    ht,
    Te,
    Be,
    ir,
    fr,
    br,
    fe,
    oe,
    Ft,
    Tt,
    Br,
    le,
    Y,
    T,
    z,
    B,
    N,
    k,
    w,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    Zt,
    Le,
    Gt,
    Qt,
    bt,
    Ut,
    De,
    jt,
    sr,
    rr,
    nr,
    wr,
    Nt,
    Rt,
    mt,
    er,
    se,
    kr,
    vr,
    Ct,
    Dr,
    n,
    A,
    U,
    q,
    Ce,
    x,
    Xe,
    pe,
    ee,
    we,
    $,
    ot,
    kt,
    ft,
    lt,
    Et,
    It,
    At,
    $e
  ];
}
class Su extends Or {
  constructor(r) {
    super(), Lr(this, r, vh, bh, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const jh = "appkit-grid", Ch = "appkit-grid_halign_start", Eh = "appkit-grid_halign_center", Ah = "appkit-grid_halign_end", Sh = "appkit-grid_valign_start", Vh = "appkit-grid_valign_center", Fh = "appkit-grid_valign_end", Vu = {
  grid: jh,
  grid_halign_start: Ch,
  grid_halign_center: Eh,
  grid_halign_end: Ah,
  grid_valign_start: Sh,
  grid_valign_center: Vh,
  grid_valign_end: Fh
};
function Fu(e) {
  return e > 0 && e < 1;
}
function Du(e) {
  return String(Math.ceil(e * 1e3) / 1e3);
}
function Iu(e, r, t, n) {
  if (e.some(Fu)) {
    const l = Math.max(...e.filter(Fu).map((u) => 1 / u));
    e = e.map((u) => u * l);
  }
  const o = e.every(Boolean);
  let i = 0, s = 0;
  const a = [];
  if (o) {
    s = e.reduce((l, u) => l + u, 0);
    for (let l = 0; l < n; ++l) {
      if (!r[l])
        continue;
      const u = r[l] / e[l] * s;
      u > i && (i = u);
    }
  }
  for (let l = 0; l < n; ++l)
    i && !t[l] ? a[l] = `minmax(${ge(i * e[l] / s)},${Du(e[l])}fr)` : o || !t[l] && e[l] ? a[l] = `${Du(e[l])}fr` : a[l] = "auto";
  return a.join(" ");
}
function Tu(e, r, t) {
  const n = e.slice();
  return n[33] = r[t], n;
}
function Dh(e) {
  let r, t;
  return r = new Fn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Ih(e) {
  let r, t;
  return r = new hn({
    props: {
      cls: gt(
        "grid",
        Vu,
        /*mods*/
        e[7]
      ),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      style: (
        /*style*/
        e[6]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      parentOf: (
        /*items*/
        e[2]
      ),
      replaceItems: (
        /*replaceItems*/
        e[12]
      ),
      $$slots: { default: [Th] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      128 && (i.cls = gt(
        "grid",
        Vu,
        /*mods*/
        n[7]
      )), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*style*/
      64 && (i.style = /*style*/
      n[6]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*items*/
      4 && (i.parentOf = /*items*/
      n[2]), o[0] & /*resultItems*/
      32 | o[1] & /*$$scope*/
      32 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Mu(e) {
  let r, t;
  return r = new xn({
    props: {
      componentContext: (
        /*item*/
        e[33].componentContext
      ),
      layoutParams: (
        /*item*/
        e[33].layoutParams
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*resultItems*/
      32 && (i.componentContext = /*item*/
      n[33].componentContext), o[0] & /*resultItems*/
      32 && (i.layoutParams = /*item*/
      n[33].layoutParams), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Th(e) {
  let r, t, n = ur(
    /*resultItems*/
    e[5]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Mu(Tu(e, n, s));
  const i = (s) => ne(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = or();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      K(s, r, a), t = !0;
    },
    p(s, a) {
      if (a[0] & /*resultItems*/
      32) {
        n = ur(
          /*resultItems*/
          s[5]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const u = Tu(s, n, l);
          o[l] ? (o[l].p(u, a), W(o[l], 1)) : (o[l] = Mu(u), o[l].c(), W(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (pr(), l = n.length; l < o.length; l += 1)
          i(l);
        gr();
      }
    },
    i(s) {
      if (!t) {
        for (let a = 0; a < n.length; a += 1)
          W(o[a]);
        t = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        ne(o[a]);
      t = !1;
    },
    d(s) {
      s && J(r), un(o, s);
    }
  };
}
function Mh(e) {
  let r, t, n, o;
  const i = [Ih, Dh], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = or();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (t && (pr(), ne(s[c], 1, 1, () => {
        s[c] = null;
      }), gr()), ~r ? (t = s[r], t ? t.p(l, u) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      ne(t), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function Ph(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _ = v, h = () => (_(), _ = E(a, (_e) => t(27, f = _e)), a), m, p = v, w = () => (p(), p = E(s, (_e) => t(28, m = _e)), s), k, N = v, B = () => (N(), N = E(U, (_e) => t(29, k = _e)), U), z, oe = v, fe = () => (oe(), oe = E(i, (_e) => t(30, z = _e)), i);
  e.$$.on_destroy.push(() => _()), e.$$.on_destroy.push(() => p()), e.$$.on_destroy.push(() => N()), e.$$.on_destroy.push(() => oe());
  let { componentContext: T } = r, { layoutParams: Y = void 0 } = r;
  const A = Tr(Xr).direction;
  mn(e, A, (_e) => t(26, c = _e));
  let D = !1, M = 0, U, q, be = [], Ae = [], Ce = [], he = [], Fe = [], x = [], Je = 0, Ye = "start", Xe = "start", ye = [], Ie;
  function pe() {
    t(3, D = !1), t(13, M = 0), t(21, Ye = "start"), t(22, Xe = "start");
  }
  function me(_e) {
    t(0, T = t(23, Ie = {
      ...T,
      json: {
        ...T.json,
        items: _e.filter(zo)
      }
    }));
  }
  return ln(() => {
    ye.forEach((_e) => {
      _e.destroy();
    });
  }), e.$$set = (_e) => {
    "componentContext" in _e && t(0, T = _e.componentContext), "layoutParams" in _e && t(1, Y = _e.layoutParams);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(25, n = T.origJson), e.$$.dirty[0] & /*origJson*/
    33554432 && n && pe(), e.$$.dirty[0] & /*componentContext*/
    1 && t(24, o = Array.isArray(T.json.items) && T.json.items || []), e.$$.dirty[0] & /*componentContext*/
    1 && fe(t(10, i = T.getDerivedFromVars(T.json.column_count))), e.$$.dirty[0] & /*componentContext*/
    1 && w(t(9, s = T.getDerivedFromVars(T.json.content_alignment_vertical))), e.$$.dirty[0] & /*componentContext*/
    1 && h(t(8, a = T.getDerivedFromVars(T.json.content_alignment_horizontal))), e.$$.dirty[0] & /*$jsonColumnCount, columnCount, componentContext*/
    1073750017 && (t(13, M = Rn(z, M)), M < 1 ? (t(3, D = !0), T.logError(X(new Error("Incorrect column_count for grid")))) : t(3, D = !1)), e.$$.dirty[0] & /*items, prevContext, componentContext, jsonItems*/
    25165829) {
      const _e = new Set(ye), ee = /* @__PURE__ */ new Map();
      Ie === T && ye.forEach((ce) => {
        ee.set(ce.json, ce);
      }), t(2, ye = o.map((ce, te) => {
        const we = ee.get(ce);
        return we ? (_e.delete(we), we) : T.produceChildContext(ce, { path: te });
      }));
      for (const ce of _e)
        ce.destroy();
      t(23, Ie = T);
    }
    if (e.$$.dirty[0] & /*items, componentContext*/
    5) {
      let _e = [];
      ye.forEach((ee) => {
        _e.push(T.getDerivedFromVars({
          rowSpan: ee.json.row_span,
          columnSpan: ee.json.column_span,
          width: ee.json.width,
          height: ee.json.height
        }));
      }), B(t(4, U = Ui(_e, (ee) => [...ee])));
    }
    if (e.$$.dirty[0] & /*items, $childStore, columnCount, columnsWeight, rowsWeight, columnsMinWidth, rowsMinHeight*/
    537124868) {
      const _e = {};
      let ee = 0, ce = 0;
      t(14, be = []), t(15, Ae = []), t(16, Ce = []), t(17, he = []), t(18, Fe = []), t(19, x = []);
      let te = 0;
      t(5, q = ye.map((we, Ue) => {
        var it, Mt, ft, Z;
        const Ke = k[Ue], $ = Math.min(M, Number(Ke.columnSpan) || 1), Oe = Number(Ke.rowSpan) || 1, Ne = ((it = Ke.width) == null ? void 0 : it.type) === "match_parent" ? Number(Ke.width.weight || 1) / $ : 0, ot = ((Mt = Ke.height) == null ? void 0 : Mt.type) === "match_parent" ? Number(Ke.height.weight || 1) / Oe : 0, ct = ((ft = Ke.width) == null ? void 0 : ft.type) === "fixed" && Ke.width.value ? Number(Ke.width.value) / $ : 0, rt = ((Z = Ke.height) == null ? void 0 : Z.type) === "fixed" && Ke.height.value ? Number(Ke.height.value) / Oe : 0;
        for (; ; ) {
          let de = !0;
          e: for (let lt = ee; lt < ee + $; ++lt)
            for (let ze = ce; ze < ce + Oe; ++ze)
              if (_e[lt + "_" + ze]) {
                de = !1;
                break e;
              }
          if (de)
            break;
          ++ee, ee > M - $ && (ee = 0, ++ce);
        }
        const kt = { x: ee, y: ce, colSpan: $, rowSpan: Oe };
        for (let de = ee; de < ee + $; ++de)
          for (let lt = ce; lt < ce + Oe; ++lt)
            _e[de + "_" + lt] = !0, (!be[de] || be[de] < Ne) && t(14, be[de] = Ne, be), (!Ae[lt] || Ae[lt] < ot) && t(15, Ae[lt] = ot, Ae), $ === 1 && (!Ce[de] || Ce[de] < ct) && t(16, Ce[de] = ct, Ce), Oe === 1 && (!he[lt] || he[lt] < rt) && t(17, he[lt] = rt, he), $ === 1 && ct && t(18, Fe[de] = ct, Fe), Oe === 1 && rt && t(19, x[de] = rt, x);
        return te = Math.max(te, ce + Oe), {
          componentContext: we,
          layoutParams: { gridArea: kt }
        };
      })), t(20, Je = Math.max(ce + 1, te));
    }
    e.$$.dirty[0] & /*$jsonContentVAlign, contentVAlign*/
    270532608 && t(21, Ye = _l(m, Ye)), e.$$.dirty[0] & /*$jsonContentHAlign, $direction, contentHAlign*/
    205520896 && t(22, Xe = dl(f, c, Xe)), e.$$.dirty[0] & /*contentVAlign, contentHAlign*/
    6291456 && t(7, l = {
      valign: Ye,
      halign: Xe
    }), e.$$.dirty[0] & /*columnsWeight, columnsMinWidth, columnsWidth, columnCount, rowsWeight, rowsMinHeight, rowsHeight, rowCount*/
    2088960 && t(6, u = {
      "grid-template-columns": Iu(be, Ce, Fe, M),
      "grid-template-rows": Iu(Ae, he, x, Je)
    });
  }, [
    T,
    Y,
    ye,
    D,
    U,
    q,
    u,
    l,
    a,
    s,
    i,
    A,
    me,
    M,
    be,
    Ae,
    Ce,
    he,
    Fe,
    x,
    Je,
    Ye,
    Xe,
    Ie,
    o,
    n,
    c,
    f,
    m,
    k,
    z
  ];
}
class Nh extends Or {
  constructor(r) {
    super(), Lr(this, r, Ph, Mh, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const zh = "appkit-outer_width_content", Lh = "appkit-outer_height_content", Oh = "appkit-gallery", Bh = "appkit-gallery__scroller", Rh = "appkit-gallery_scrollbar_none", Hh = "appkit-gallery_orientation_horizontal", Wh = "appkit-gallery_orientation_vertical", Uh = "appkit-gallery__items", Gh = "appkit-gallery__arrow", Jh = "appkit-gallery__gap", fo = {
  outer_width_content: zh,
  outer_height_content: Lh,
  gallery: Oh,
  gallery__scroller: Bh,
  gallery_scrollbar_none: Rh,
  gallery_orientation_horizontal: Hh,
  gallery_orientation_vertical: Wh,
  "gallery_scroll-snap": "appkit-gallery_scroll-snap",
  "gallery__items-grid": "appkit-gallery__items-grid",
  gallery__items: Uh,
  gallery__arrow: Gh,
  "gallery__arrow-icon-path": "appkit-gallery__arrow-icon-path",
  gallery__gap: Jh
}, Kh = "appkit-arrow", qh = "appkit-arrow__icon", Yh = "appkit-arrow_left", Xh = "appkit-arrow_right", go = {
  arrow: Kh,
  arrow__icon: qh,
  arrow_left: Yh,
  arrow_right: Xh
};
function Zh(e, r) {
  return e === "start" || e === "center" || e === "end" ? e : r;
}
function Qh(e) {
  const r = [];
  let t = e[0], n = 1;
  for (let o = 1; o <= e.length; o++)
    e[o] !== t ? (r.push(n > 1 ? `repeat(${n}, ${t})` : t), t = e[o], n = 1) : n++;
  return r.join(" ");
}
function Vo(e, r) {
  let t = e % r;
  return t < 0 && (t += r), t;
}
const { Boolean: Fd, window: xh } = Po;
function Pu(e, r, t) {
  const n = e.slice();
  return n[86] = r[t], n[87] = r, n[88] = t, n;
}
function Nu(e, r, t) {
  const n = e.slice();
  return n[89] = r[t], n;
}
function zu(e) {
  let r;
  return {
    c() {
      r = Pe("div"), g(r, "class", fo.gallery__gap), I(
        r,
        "width",
        /*orientation*/
        e[4] === "horizontal" ? (
          /*gridGap*/
          e[12]
        ) : void 0
      ), I(
        r,
        "height",
        /*orientation*/
        e[4] !== "horizontal" ? (
          /*gridGap*/
          e[12]
        ) : void 0
      );
    },
    m(t, n) {
      K(t, r, n);
    },
    p(t, n) {
      n[0] & /*orientation, gridGap*/
      4112 && I(
        r,
        "width",
        /*orientation*/
        t[4] === "horizontal" ? (
          /*gridGap*/
          t[12]
        ) : void 0
      ), n[0] & /*orientation, gridGap*/
      4112 && I(
        r,
        "height",
        /*orientation*/
        t[4] !== "horizontal" ? (
          /*gridGap*/
          t[12]
        ) : void 0
      );
    },
    d(t) {
      t && J(r);
    }
  };
}
function Lu(e) {
  let r, t, n, o = (
    /*item*/
    e[89].hasGapBefore && zu(e)
  );
  return t = new xn({
    props: {
      componentContext: (
        /*item*/
        e[89].componentContext
      ),
      layoutParams: (
        /*childLayoutParams*/
        e[6]
      )
    }
  }), {
    c() {
      o && o.c(), r = _r(), Wt(t.$$.fragment);
    },
    m(i, s) {
      o && o.m(i, s), K(i, r, s), Ot(t, i, s), n = !0;
    },
    p(i, s) {
      /*item*/
      i[89].hasGapBefore ? o ? o.p(i, s) : (o = zu(i), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
      const a = {};
      s[0] & /*itemsGrid*/
      262144 && (a.componentContext = /*item*/
      i[89].componentContext), s[0] & /*childLayoutParams*/
      64 && (a.layoutParams = /*childLayoutParams*/
      i[6]), t.$set(a);
    },
    i(i) {
      n || (W(t.$$.fragment, i), n = !0);
    },
    o(i) {
      ne(t.$$.fragment, i), n = !1;
    },
    d(i) {
      i && J(r), o && o.d(i), Bt(t, i);
    }
  };
}
function Ou(e) {
  let r, t, n, o, i, s, a = (
    /*rowIndex*/
    e[88]
  ), l, u = ur(
    /*itemsRow*/
    e[86]
  ), c = [];
  for (let m = 0; m < u.length; m += 1)
    c[m] = Lu(Nu(e, u, m));
  const f = (m) => ne(c[m], 1, 1, () => {
    c[m] = null;
  }), _ = () => (
    /*div1_binding*/
    e[71](r, a)
  ), h = () => (
    /*div1_binding*/
    e[71](null, a)
  );
  return {
    c() {
      r = Pe("div");
      for (let m = 0; m < c.length; m += 1)
        c[m].c();
      t = _r(), n = Pe("div"), i = _r(), g(n, "class", fo.gallery__gap), g(n, "style", o = cr(
        /*lastPaddingSize*/
        e[13]
      )), g(r, "class", fo.gallery__items), g(r, "style", s = cr(
        /*columnStyle*/
        e[16]
      ));
    },
    m(m, p) {
      K(m, r, p);
      for (let w = 0; w < c.length; w += 1)
        c[w] && c[w].m(r, null);
      wt(r, t), wt(r, n), wt(r, i), _(), l = !0;
    },
    p(m, p) {
      if (e = m, p[0] & /*itemsGrid, childLayoutParams, orientation, gridGap*/
      266320) {
        u = ur(
          /*itemsRow*/
          e[86]
        );
        let w;
        for (w = 0; w < u.length; w += 1) {
          const k = Nu(e, u, w);
          c[w] ? (c[w].p(k, p), W(c[w], 1)) : (c[w] = Lu(k), c[w].c(), W(c[w], 1), c[w].m(r, t));
        }
        for (pr(), w = u.length; w < c.length; w += 1)
          f(w);
        gr();
      }
      (!l || p[0] & /*lastPaddingSize*/
      8192 && o !== (o = cr(
        /*lastPaddingSize*/
        e[13]
      ))) && g(n, "style", o), (!l || p[0] & /*columnStyle*/
      65536 && s !== (s = cr(
        /*columnStyle*/
        e[16]
      ))) && g(r, "style", s), a !== /*rowIndex*/
      e[88] && (h(), a = /*rowIndex*/
      e[88], _());
    },
    i(m) {
      if (!l) {
        for (let p = 0; p < u.length; p += 1)
          W(c[p]);
        l = !0;
      }
    },
    o(m) {
      c = c.filter(Fd);
      for (let p = 0; p < c.length; p += 1)
        ne(c[p]);
      l = !1;
    },
    d(m) {
      m && J(r), un(c, m), h();
    }
  };
}
function Bu(e) {
  let r, t, n = (
    /*hasScrollLeft*/
    e[10] && /*shouldCheckArrows*/
    e[8] && Ru(e)
  ), o = (
    /*hasScrollRight*/
    e[11] && /*shouldCheckArrows*/
    e[8] && Hu(e)
  );
  return {
    c() {
      n && n.c(), r = _r(), o && o.c(), t = or();
    },
    m(i, s) {
      n && n.m(i, s), K(i, r, s), o && o.m(i, s), K(i, t, s);
    },
    p(i, s) {
      /*hasScrollLeft*/
      i[10] && /*shouldCheckArrows*/
      i[8] ? n ? n.p(i, s) : (n = Ru(i), n.c(), n.m(r.parentNode, r)) : n && (n.d(1), n = null), /*hasScrollRight*/
      i[11] && /*shouldCheckArrows*/
      i[8] ? o ? o.p(i, s) : (o = Hu(i), o.c(), o.m(t.parentNode, t)) : o && (o.d(1), o = null);
    },
    d(i) {
      i && (J(r), J(t)), n && n.d(i), o && o.d(i);
    }
  };
}
function Ru(e) {
  let r, t, n, o = !/*leftClass*/
  e[32] && $h();
  return {
    c() {
      r = Pe("div"), o && o.c(), g(
        r,
        "class",
        /*leftClass*/
        e[32] || `${fo.gallery__arrow} ${go.arrow} ${go.arrow_left}`
      );
    },
    m(i, s) {
      K(i, r, s), o && o.m(r, null), t || (n = Qe(
        r,
        "click",
        /*click_handler*/
        e[74]
      ), t = !0);
    },
    p: v,
    d(i) {
      i && J(r), o && o.d(), t = !1, n();
    }
  };
}
function $h(e) {
  let r, t;
  return {
    c() {
      r = rn("svg"), t = rn("path"), g(t, "class", fo["gallery__arrow-icon-path"]), g(t, "d", "m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"), g(r, "class", go.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      K(n, r, o), wt(r, t);
    },
    d(n) {
      n && J(r);
    }
  };
}
function Hu(e) {
  let r, t, n, o = !/*rightClass*/
  e[33] && em();
  return {
    c() {
      r = Pe("div"), o && o.c(), g(
        r,
        "class",
        /*rightClass*/
        e[33] || `${fo.gallery__arrow} ${go.arrow} ${go.arrow_right}`
      );
    },
    m(i, s) {
      K(i, r, s), o && o.m(r, null), t || (n = Qe(
        r,
        "click",
        /*click_handler_1*/
        e[75]
      ), t = !0);
    },
    p: v,
    d(i) {
      i && J(r), o && o.d(), t = !1, n();
    }
  };
}
function em(e) {
  let r, t;
  return {
    c() {
      r = rn("svg"), t = rn("path"), g(t, "class", fo["gallery__arrow-icon-path"]), g(t, "d", "M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"), g(r, "class", go.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      K(n, r, o), wt(r, t);
    },
    d(n) {
      n && J(r);
    }
  };
}
function tm(e) {
  let r, t, n, o, i, s, a, l, u, c, f = ur(
    /*itemsGrid*/
    e[18]
  ), _ = [];
  for (let p = 0; p < f.length; p += 1)
    _[p] = Ou(Pu(e, f, p));
  const h = (p) => ne(_[p], 1, 1, () => {
    _[p] = null;
  });
  let m = (
    /*orientation*/
    e[4] === "horizontal" && Bu(e)
  );
  return {
    c() {
      r = Pe("div"), t = Pe("div");
      for (let p = 0; p < _.length; p += 1)
        _[p].c();
      s = _r(), m && m.c(), a = or(), g(t, "class", fo["gallery__items-grid"]), g(t, "style", n = cr(
        /*gridStyle*/
        e[17]
      )), g(r, "class", o = fo.gallery__scroller + " " + /*$jsonRestrictParentScroll*/
      (e[30] ? Ar["root_restrict-scroll"] : "")), g(r, "style", i = cr(
        /*scrollerStyle*/
        e[5]
      ));
    },
    m(p, w) {
      K(p, r, w), wt(r, t);
      for (let k = 0; k < _.length; k += 1)
        _[k] && _[k].m(t, null);
      e[72](t), e[73](r), K(p, s, w), m && m.m(p, w), K(p, a, w), l = !0, u || (c = Qe(r, "scroll", function() {
        zr(
          /*shouldCheckArrows*/
          e[8] ? (
            /*updateArrowsVisibility*/
            e[36]
          ) : null
        ) && /*shouldCheckArrows*/
        (e[8] ? (
          /*updateArrowsVisibility*/
          e[36]
        ) : null).apply(this, arguments);
      }), u = !0);
    },
    p(p, w) {
      if (e = p, w[0] & /*columnStyle, galleryItemsWrappers, lastPaddingSize, itemsGrid, childLayoutParams, orientation, gridGap*/
      340560) {
        f = ur(
          /*itemsGrid*/
          e[18]
        );
        let k;
        for (k = 0; k < f.length; k += 1) {
          const N = Pu(e, f, k);
          _[k] ? (_[k].p(N, w), W(_[k], 1)) : (_[k] = Ou(N), _[k].c(), W(_[k], 1), _[k].m(t, null));
        }
        for (pr(), k = f.length; k < _.length; k += 1)
          h(k);
        gr();
      }
      (!l || w[0] & /*gridStyle*/
      131072 && n !== (n = cr(
        /*gridStyle*/
        e[17]
      ))) && g(t, "style", n), (!l || w[0] & /*$jsonRestrictParentScroll*/
      1073741824 && o !== (o = fo.gallery__scroller + " " + /*$jsonRestrictParentScroll*/
      (e[30] ? Ar["root_restrict-scroll"] : ""))) && g(r, "class", o), (!l || w[0] & /*scrollerStyle*/
      32 && i !== (i = cr(
        /*scrollerStyle*/
        e[5]
      ))) && g(r, "style", i), /*orientation*/
      e[4] === "horizontal" ? m ? m.p(e, w) : (m = Bu(e), m.c(), m.m(a.parentNode, a)) : m && (m.d(1), m = null);
    },
    i(p) {
      if (!l) {
        for (let w = 0; w < f.length; w += 1)
          W(_[w]);
        l = !0;
      }
    },
    o(p) {
      _ = _.filter(Fd);
      for (let w = 0; w < _.length; w += 1)
        ne(_[w]);
      l = !1;
    },
    d(p) {
      p && (J(r), J(s), J(a)), un(_, p), e[72](null), e[73](null), m && m.d(p), u = !1, c();
    }
  };
}
function rm(e) {
  let r, t, n, o;
  return r = new hn({
    props: {
      cls: gt(
        "gallery",
        fo,
        /*mods*/
        e[15]
      ),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      customPaddings: !0,
      customActions: "gallery",
      parentOf: (
        /*items*/
        e[7]
      ),
      replaceItems: (
        /*replaceItems*/
        e[34]
      ),
      $$slots: { default: [tm] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(i, s) {
      Ot(r, i, s), t = !0, n || (o = Qe(xh, "resize", function() {
        zr(
          /*shouldCheckArrows*/
          e[8] ? (
            /*updateArrowsVisibilityDebounced*/
            e[37]
          ) : null
        ) && /*shouldCheckArrows*/
        (e[8] ? (
          /*updateArrowsVisibilityDebounced*/
          e[37]
        ) : null).apply(this, arguments);
      }), n = !0);
    },
    p(i, s) {
      e = i;
      const a = {};
      s[0] & /*mods*/
      32768 && (a.cls = gt(
        "gallery",
        fo,
        /*mods*/
        e[15]
      )), s[0] & /*componentContext*/
      1 && (a.componentContext = /*componentContext*/
      e[0]), s[0] & /*layoutParams*/
      2 && (a.layoutParams = /*layoutParams*/
      e[1]), s[0] & /*items*/
      128 && (a.parentOf = /*items*/
      e[7]), s[0] & /*hasScrollRight, shouldCheckArrows, hasScrollLeft, orientation, $jsonRestrictParentScroll, scrollerStyle, scroller, gridStyle, itemsGridElem, itemsGrid, columnStyle, galleryItemsWrappers, lastPaddingSize, childLayoutParams, gridGap*/
      1074216828 | s[2] & /*$$scope*/
      1073741824 && (a.$$scope = { dirty: s, ctx: e }), r.$set(a);
    },
    i(i) {
      t || (W(r.$$.fragment, i), t = !0);
    },
    o(i) {
      ne(r.$$.fragment, i), t = !1;
    },
    d(i) {
      Bt(r, i), n = !1, o();
    }
  };
}
function nm(e, r, t) {
  let n = 0, o = [], i = [];
  for (let s = 0; s < e.length; ++s)
    o[n] || (o[n] = []), o[n].push({
      index: s,
      hasGapBefore: i[n] && r[s].visibility !== "gone",
      componentContext: e[s]
    }), !i[n] && r[s].visibility !== "gone" && (i[n] = !0), ++n >= t && (n = 0);
  return o;
}
function om(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, B, z, oe, fe, T, Y, le = v, A = () => (le(), le = E(p, (ue) => t(59, Y = ue)), p), D, M = v, U = () => (M(), M = E(m, (ue) => t(60, D = ue)), m), q, be = v, Ae = () => (be(), be = E(_, (ue) => t(61, q = ue)), _), Ce, he = v, Fe = () => (he(), he = E(Ut, (ue) => t(62, Ce = ue)), Ut), x, Je = v, Ye = () => (Je(), Je = E(f, (ue) => t(63, x = ue)), f), Xe, ye = v, Ie = () => (ye(), ye = E(c, (ue) => t(64, Xe = ue)), c), pe, me = v, _e = () => (me(), me = E(u, (ue) => t(65, pe = ue)), u), ee, ce = v, te = () => (ce(), ce = E(l, (ue) => t(66, ee = ue)), l), we, Ue = v, Ke = () => (Ue(), Ue = E(a, (ue) => t(67, we = ue)), a), $, Oe, Ne = v, ot = () => (Ne(), Ne = E(i, (ue) => t(69, Oe = ue)), i), ct, rt = v, kt = () => (rt(), rt = E(s, (ue) => t(70, ct = ue)), s), it, Mt = v, ft = () => (Mt(), Mt = E(h, (ue) => t(30, it = ue)), h);
  e.$$.on_destroy.push(() => le()), e.$$.on_destroy.push(() => M()), e.$$.on_destroy.push(() => be()), e.$$.on_destroy.push(() => he()), e.$$.on_destroy.push(() => Je()), e.$$.on_destroy.push(() => ye()), e.$$.on_destroy.push(() => me()), e.$$.on_destroy.push(() => ce()), e.$$.on_destroy.push(() => Ue()), e.$$.on_destroy.push(() => Ne()), e.$$.on_destroy.push(() => rt()), e.$$.on_destroy.push(() => Mt());
  let { componentContext: Z } = r, { layoutParams: de = void 0 } = r;
  const lt = Tr(Xr), ze = lt.direction;
  mn(e, ze, (ue) => t(58, T = ue));
  let F, Et = [], ut = !1, Vt = !1, It = null, nt, Q = !1;
  const At = lt.getCustomization("galleryLeftClass"), Pt = lt.getCustomization("galleryRightClass");
  let $t, Zt = 1, Ee = "horizontal", He = "start", ht, Te = 8, xe, Le, Ft = "", Be, bt = [], Ut, Tt = {}, ir = !1, De = {}, jt = 0;
  function sr() {
    t(42, Zt = 1), t(4, Ee = "horizontal"), t(43, He = "start"), t(44, Te = 8), t(47, Ft = "");
  }
  let rr = null, nr = null;
  function fr() {
    var tr, Ht;
    const ue = Rn(ct, Zt), vt = Z.json.responsive;
    if (!vt || typeof vt != "object") {
      t(42, Zt = ue);
      return;
    }
    rr != null && rr.matches && ((tr = vt.mobile) != null && tr.column_count) ? t(42, Zt = vt.mobile.column_count) : nr != null && nr.matches && ((Ht = vt.tablet) != null && Ht.column_count) ? t(42, Zt = vt.tablet.column_count) : t(42, Zt = ue);
  }
  function wr(ue) {
    t(0, Z = t(53, Rt = {
      ...Z,
      json: {
        ...Z.json,
        items: ue.filter(zo)
      }
    }));
  }
  const Nt = lt.isDesktop;
  mn(e, Nt, (ue) => t(68, $ = ue));
  let br = [], Rt;
  function mt() {
    if (!F)
      return;
    let ue = F.scrollLeft;
    T === "rtl" && (ue *= -1);
    const vt = F.scrollWidth, tr = F.offsetWidth;
    T === "ltr" ? (t(10, ut = ue > 2), t(11, Vt = ue + tr < vt - 2)) : (t(11, Vt = ue > 2), t(10, ut = ue + tr < vt - 2));
  }
  const er = ha(mt, 50);
  function se(ue) {
    F.scroll({
      left: F.scrollLeft + F.offsetWidth * 0.75 * (ue === "right" ? 1 : -1),
      behavior: "smooth"
    });
  }
  function kr() {
    let ue = [], vt = Et[0].children.length;
    for (let tr = 0; tr < vt; tr += 2)
      for (let Ht = 0; Ht < Zt; ++Ht) {
        const yr = Et[Ht].children[tr];
        yr && ue.push(yr);
      }
    return ue;
  }
  function vr(ue, vt = !0) {
    const Ht = Ee === "horizontal" ? "left" : "top";
    F.scroll({
      [Ht]: ue,
      behavior: vt ? "smooth" : "instant"
    });
  }
  function Ct(ue, vt, { animated: tr = !0, extraOffset: Ht = 0, overflow: yr = "clamp" } = {}) {
    const j = Ee === "horizontal", ie = j ? "offsetLeft" : "offsetTop";
    vt > ue.length - 1 ? vt = yr === "ring" ? Vo(vt, ue.length) : ue.length - 1 : vt < 0 && (vt = yr === "ring" ? Vo(vt, ue.length) : 0);
    const d = ue[vt];
    if (d) {
      let L;
      if (T === "ltr" || !j)
        L = d[ie] + 0.01 - Te / 2;
      else {
        const je = F.offsetWidth;
        L = d[ie] + d.offsetWidth + 0.01 - Te / 2 - je;
      }
      if (Ht) {
        L += Ht;
        const je = j ? F.scrollWidth - F.offsetWidth : F.scrollHeight - F.offsetHeight;
        L > je && (yr === "clamp" ? L = je : yr === "ring" && (L = Vo(L, je))), L < 0 && (yr === "clamp" ? L = 0 : yr === "ring" && (L = Vo(L, je)));
      }
      vr(L, tr);
    }
  }
  function Dr(ue, { overflow: vt = "clamp", animated: tr = !0 } = {}) {
    const Ht = Ee === "horizontal", yr = T === "ltr" || !Ht ? 1 : -1, j = Ht ? F.scrollLeft : F.scrollTop, ie = Ht ? F.scrollWidth - F.offsetWidth : F.scrollHeight - F.offsetHeight;
    let d = j * yr + ue;
    d > ie ? vt === "clamp" ? d = ie : vt === "ring" && (d = Vo(d, ie)) : d < 0 && (vt === "clamp" ? d = 0 : vt === "ring" && (d = Vo(d, ie))), vr(d * yr, tr);
  }
  function Br(ue, vt) {
    return Ee === "horizontal" ? vt.right > ue.left && ue.right > vt.left : vt.bottom > ue.top && ue.bottom > vt.top;
  }
  function ar(ue, vt) {
    return Ee === "horizontal" ? vt.left >= ue.left && vt.right <= ue.right : vt.top >= ue.top && vt.bottom <= ue.bottom;
  }
  function at(ue) {
    const vt = kr(), tr = F.getBoundingClientRect(), Ht = vt.findIndex((ie) => ar(tr, ie.getBoundingClientRect()));
    if (Ht !== -1)
      return Ht;
    const yr = vt.map((ie) => Br(tr, ie.getBoundingClientRect())), j = yr.findIndex(Boolean);
    return j !== -1 ? ue === "prev" && yr.filter(Boolean).length === 2 ? j + 1 : j : ue === "prev" ? 1 : vt.length - 2;
  }
  Qn(() => {
    if (t(40, Q = !0), mt(), jt) {
      const ue = kr();
      Ct(ue, jt, { animated: !1 });
    }
  }), ln(() => {
    t(40, Q = !1), br.forEach((ue) => {
      ue.destroy();
    }), $t && !Z.fakeElement && (lt.unregisterInstance($t), t(41, $t = void 0)), rr && rr.removeEventListener("change", fr), nr && nr.removeEventListener("change", fr);
  });
  function St(ue, vt) {
    Fr[ue ? "unshift" : "push"](() => {
      Et[vt] = ue, t(9, Et);
    });
  }
  function Gt(ue) {
    Fr[ue ? "unshift" : "push"](() => {
      nt = ue, t(3, nt);
    });
  }
  function Qt(ue) {
    Fr[ue ? "unshift" : "push"](() => {
      F = ue, t(2, F);
    });
  }
  const $e = () => se("left"), pt = () => se("right");
  return e.$$set = (ue) => {
    "componentContext" in ue && t(0, Z = ue.componentContext), "layoutParams" in ue && t(1, de = ue.layoutParams);
  }, e.$$.update = () => {
    var ue, vt, tr, Ht, yr, j;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(57, n = Z.origJson), e.$$.dirty[1] & /*origJson*/
    67108864 && n && sr(), e.$$.dirty[0] & /*componentContext*/
    1 && t(56, o = Array.isArray(Z.json.items) && Z.json.items || []), e.$$.dirty[0] & /*componentContext*/
    1 && ot(t(29, i = typeof ((ue = Z.json.item_builder) == null ? void 0 : ue.data) == "string" ? Z.getDerivedFromVars((vt = Z.json.item_builder) == null ? void 0 : vt.data, void 0, !0) : (tr = Z.json.item_builder) != null && tr.data ? Jo(Z.json.item_builder.data) : void 0)), e.$$.dirty[0] & /*componentContext*/
    1 && kt(t(28, s = Z.getDerivedFromVars(Z.json.column_count))), e.$$.dirty[0] & /*componentContext*/
    1 && Ke(t(27, a = Z.getDerivedFromVars(Z.json.orientation))), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*columns, mobileQuery, tabletQuery*/
    3147776 | e.$$.dirty[2] & /*$jsonColumnCount*/
    256) {
      const ie = Rn(ct, Zt), d = Z.json.responsive;
      d && typeof d == "object" && typeof window < "u" ? (rr || (t(51, rr = window.matchMedia("(max-width: 767px)")), t(52, nr = window.matchMedia("(min-width: 768px) and (max-width: 1023px)")), rr.addEventListener("change", fr), nr.addEventListener("change", fr)), fr()) : t(42, Zt = ie);
    }
    if (e.$$.dirty[0] & /*componentContext*/
    1 && te(t(26, l = Z.getDerivedFromVars(Z.json.cross_content_alignment))), e.$$.dirty[0] & /*componentContext*/
    1 && _e(t(25, u = Z.getDerivedFromVars(Z.json.item_spacing))), e.$$.dirty[0] & /*componentContext*/
    1 && Ie(t(24, c = Z.getDerivedFromVars(Z.json.cross_spacing))), e.$$.dirty[0] & /*componentContext*/
    1 && Ye(t(23, f = Z.getDerivedFromVars(Z.json.paddings))), e.$$.dirty[0] & /*componentContext*/
    1 && Ae(t(22, _ = Z.getDerivedFromVars(Z.json.scroll_mode))), e.$$.dirty[0] & /*componentContext*/
    1 && ft(t(21, h = Z.getDerivedFromVars(Z.json.restrict_parent_scroll))), e.$$.dirty[0] & /*componentContext*/
    1 && U(t(20, m = Z.getDerivedFromVars(Z.json.scrollbar))), e.$$.dirty[0] & /*componentContext*/
    1 && A(t(19, p = Z.getDerivedFromVars(Z.json.default_item))), e.$$.dirty[0] & /*componentContext, items*/
    129 | e.$$.dirty[1] & /*jsonItems, prevContext*/
    37748736 | e.$$.dirty[2] & /*$jsonItemBuilderData*/
    128) {
      let ie = [];
      if (Z.json.item_builder && Array.isArray(Oe) && Array.isArray(Z.json.item_builder.prototypes)) {
        const We = Z.json.item_builder;
        ie = pl(Oe, lt, Z, We);
      } else
        ie = (Array.isArray(o) && o || []).map((We, ke) => ({
          div: We,
          key: We.id || { index: ke, data: We }
        }));
      const d = new Set(br), L = /* @__PURE__ */ new Map();
      let je = !1;
      Rt === Z && br.forEach((We) => {
        We.key && (typeof We.key == "string" && L.has(We.key) ? je || (je = !0, Z.logError(X(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: We.key } }))) : L.set(
          typeof We.key == "string" ? We.key : We.key.index,
          We
        ));
      }), t(7, br = ie.map((We, ke) => {
        let P = !je && L.get(We.id), zt = L.get(ke);
        return !P && !We.id && typeof We.key == "object" && typeof (zt == null ? void 0 : zt.key) == "object" && Gi(zt.key.data, We.key.data) && (P = zt), P ? (d.delete(P), P) : Z.produceChildContext(We.div, {
          path: ke,
          variables: We.vars,
          id: We.id,
          key: We.key
        });
      }));
      for (const We of d)
        We.destroy();
      t(53, Rt = Z);
    }
    if (e.$$.dirty[1] & /*mounted*/
    512 | e.$$.dirty[2] & /*$isDesktop*/
    64 && t(8, w = $ && Q), e.$$.dirty[0] & /*shouldCheckArrows, itemsGridElem*/
    264 | e.$$.dirty[1] & /*resizeObserver*/
    256 && (w ? typeof ResizeObserver < "u" && (t(39, It = new ResizeObserver(() => {
      er();
    })), It.observe(nt)) : It && (It.disconnect(), t(39, It = null))), e.$$.dirty[0] & /*orientation*/
    16 | e.$$.dirty[2] & /*$jsonOrientation*/
    32 && t(4, Ee = ma(we, Ee)), e.$$.dirty[1] & /*align*/
    4096 | e.$$.dirty[2] & /*$jsonCrossContentAlignment*/
    16 && t(43, He = Zh(ee, He)), e.$$.dirty[1] & /*itemSpacing*/
    8192 | e.$$.dirty[2] & /*$jsonItemSpacing*/
    8 && (t(44, Te = nn(pe, Te)), t(12, ht = ge(Te))), e.$$.dirty[1] & /*itemSpacing, crossSpacing*/
    40960 | e.$$.dirty[2] & /*$jsonCrossSpacing*/
    4 && (t(46, Le = nn(Xe, Te)), t(45, xe = ge(Le))), e.$$.dirty[0] & /*orientation*/
    16 | e.$$.dirty[1] & /*$direction, padding*/
    134283264 | e.$$.dirty[2] & /*$jsonPaddings*/
    2) {
      t(47, Ft = is(x, T, Ft));
      const ie = Ee === "horizontal" ? (yr = (Ht = x == null ? void 0 : x.end) != null ? Ht : x == null ? void 0 : x[T === "ltr" ? "right" : "left"]) != null ? yr : 0 : (j = x == null ? void 0 : x.bottom) != null ? j : 0, d = ge(ie);
      t(13, Be = {
        width: Ee === "horizontal" ? d : "1px",
        height: Ee === "horizontal" ? "1px" : d,
        "margin-right": Ee === "horizontal" && T === "ltr" ? "-" + d : void 0,
        "margin-left": Ee === "horizontal" && T === "rtl" ? "-" + d : void 0,
        "margin-bottom": Ee === "vertical" ? "-" + d : void 0
      });
    }
    if (e.$$.dirty[0] & /*items, orientation*/
    144) {
      let ie = [];
      br.forEach((d) => {
        const L = Ee === "horizontal" ? "width" : "height";
        ie.push(d.getDerivedFromVars({
          size: d.json[L],
          visibility: d.json.visibility
        }));
      }), Fe(t(14, Ut = Ui(ie, (d) => [...d])));
    }
    if (e.$$.dirty[0] & /*items*/
    128 | e.$$.dirty[1] & /*columns*/
    2048 | e.$$.dirty[2] & /*$childStore*/
    1 && t(18, k = nm(br, Ce, Zt)), e.$$.dirty[0] & /*orientation*/
    16 | e.$$.dirty[1] & /*columns, templateSizes*/
    133120 | e.$$.dirty[2] & /*$childStore*/
    1 && (t(48, bt = []), Zt > 1 || Ce.forEach((ie, d) => {
      var L;
      ie.visibility !== "gone" && (!ie.size && Ee === "horizontal" || ((L = ie.size) == null ? void 0 : L.type) === "match_parent" ? bt.push("100%") : bt.push("max-content"), d + 1 < Ce.length && bt.push("auto"));
    }), bt.push("auto")), e.$$.dirty[0] & /*componentContext*/
    1 && t(55, N = Z.json.fixed_columns === !0), e.$$.dirty[0] & /*orientation, scrollerStyle, childLayoutParams*/
    112 | e.$$.dirty[1] & /*align, $jsonScrollMode, itemSpacing*/
    1073754112) {
      const ie = {};
      let d = {};
      if (t(49, ir = !1), d.treatMatchParentAs100 = !0, Ee === "horizontal" ? (d.parentVAlign = He, d.parentContainerOrientation = "horizontal") : (d.parentHAlign = He, d.parentContainerOrientation = "vertical"), q === "paging") {
        t(49, ir = !0), d.scrollSnap = "start";
        const L = Ee === "horizontal" ? "scroll-padding-left" : "scroll-padding-top";
        ie[L] = ge(Te / 2);
      }
      t(5, Tt = ei(ie, Tt)), t(6, De = ei(d, De));
    }
    e.$$.dirty[0] & /*orientation*/
    16 && t(54, B = Ee === "horizontal" ? "grid-template-columns" : "grid-template-rows"), e.$$.dirty[0] & /*orientation*/
    16 | e.$$.dirty[1] & /*padding, crossGridGap, fixedColumns, columns*/
    16861184 && t(17, z = {
      padding: Ft,
      "grid-gap": xe,
      ...N && Zt > 1 && Ee === "vertical" ? {
        display: "grid",
        "grid-template-columns": `repeat(${Zt}, 1fr)`
      } : {}
    }), e.$$.dirty[1] & /*gridTemplate, templateSizes*/
    8519680 && t(16, oe = {
      [B]: Qh(bt)
    }), e.$$.dirty[0] & /*orientation*/
    16 | e.$$.dirty[1] & /*scrollSnap, $jsonScrollbar*/
    537133056 && t(15, fe = {
      orientation: Ee,
      "scroll-snap": ir,
      scrollbar: D === "auto" ? "auto" : "none"
    }), e.$$.dirty[1] & /*$jsonDefaultItem, defaultItem*/
    268959744 && t(50, jt = nn(Y, jt)), e.$$.dirty[0] & /*componentContext*/
    1 && Z.json && er(), e.$$.dirty[0] & /*componentContext, orientation, scroller*/
    21 | e.$$.dirty[1] & /*prevId, $direction*/
    134218752 && Z.json && ($t && (lt.unregisterInstance($t), t(41, $t = void 0)), Z.id && !Z.fakeElement && (t(41, $t = Z.id), lt.registerInstance($t, {
      setCurrentItem(ie, d) {
        const L = kr();
        if (ie < 0 || ie > L.length - 1)
          throw new Error('Item is out of range in "set-current-item" action');
        Ct(L, ie, { animated: d });
      },
      setPreviousItem(ie, d, L) {
        const je = at("prev"), We = kr();
        let ke = je - ie;
        Ct(We, ke, { animated: L, overflow: d });
      },
      setNextItem(ie, d, L) {
        const je = Ee === "horizontal", We = T === "ltr" || !je ? 1 : -1, ke = je ? F.scrollLeft * We + F.offsetWidth === F.scrollWidth : F.scrollTop + F.offsetHeight === F.scrollHeight, P = kr();
        if (ke && d === "ring") {
          Ct(P, 0, { animated: L });
          return;
        }
        let Lt = at("next") + ie;
        Ct(P, Lt, { animated: L, overflow: d });
      },
      scrollToStart(ie) {
        vr(0, ie);
      },
      scrollToEnd(ie) {
        vr(
          T === "ltr" || Ee !== "horizontal" ? 1e6 : -1e6,
          ie
        );
      },
      scrollToPosition(ie, d) {
        vr(
          T === "ltr" || Ee !== "horizontal" ? ie : -ie,
          d
        );
      },
      scrollCombined({ step: ie, offset: d, overflow: L, animated: je }) {
        if (ie) {
          const ke = at(ie > 0 ? "next" : "prev") + ie;
          Ct(kr(), ke, { animated: je, extraOffset: d, overflow: L });
        } else d && Dr(d, { overflow: L, animated: je });
      }
    })));
  }, [
    Z,
    de,
    F,
    nt,
    Ee,
    Tt,
    De,
    br,
    w,
    Et,
    ut,
    Vt,
    ht,
    Be,
    Ut,
    fe,
    oe,
    z,
    k,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    it,
    ze,
    At,
    Pt,
    wr,
    Nt,
    mt,
    er,
    se,
    It,
    Q,
    $t,
    Zt,
    He,
    Te,
    xe,
    Le,
    Ft,
    bt,
    ir,
    jt,
    rr,
    nr,
    Rt,
    B,
    N,
    o,
    n,
    T,
    Y,
    D,
    q,
    Ce,
    x,
    Xe,
    pe,
    ee,
    we,
    $,
    Oe,
    ct,
    St,
    Gt,
    Qt,
    $e,
    pt
  ];
}
class im extends Or {
  constructor(r) {
    super(), Lr(this, r, om, rm, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const sm = "appkit-outer", lm = "appkit-tabs", am = "appkit-tabs__list", um = "appkit-tabs__item", cm = "appkit-tabs__item_selected", fm = "appkit-tabs_animation_fade", dm = "appkit-tabs_animation_none", _m = "appkit-tabs__item_actionable", pm = "appkit-tabs__panels", gm = "appkit-tabs__swiper", hm = "appkit-tabs__swiper_animated", mm = "appkit-tabs__swiper_inited", bm = "appkit-tabs__panel", ym = "appkit-tabs__panel_visible", wm = "appkit-tabs__separator", km = "appkit-tabs__delimitier", jn = {
  outer: sm,
  "root__any-actions": "appkit-root__any-actions",
  tabs: lm,
  tabs__list: am,
  "tabs__items-bg": "appkit-tabs__items-bg",
  "tabs__items-text": "appkit-tabs__items-text",
  tabs__item: um,
  tabs__item_selected: cm,
  tabs_animation_fade: fm,
  tabs_animation_none: dm,
  tabs__item_actionable: _m,
  tabs__panels: pm,
  "tabs_own-height": "appkit-tabs_own-height",
  tabs__swiper: gm,
  tabs__swiper_animated: hm,
  tabs__swiper_inited: mm,
  tabs__panel: bm,
  tabs__panel_visible: ym,
  "tabs_height-parent_yes": "appkit-tabs_height-parent_yes",
  tabs__separator: wm,
  tabs__delimitier: km,
  "tabs__tabs-highlighter": "appkit-tabs__tabs-highlighter"
};
function vm(e, r) {
  var n, o;
  if (!e || !e.image_url || typeof e.image_url != "string")
    return r;
  const t = {
    url: e.image_url,
    width: 12,
    height: 12
  };
  return ((n = e.width) == null ? void 0 : n.type) === "fixed" && Tn(e.width.value) && (t.width = e.width.value), ((o = e.height) == null ? void 0 : o.type) === "fixed" && Tn(e.height.value) && (t.height = e.height.value), t;
}
const Dd = 37, Id = 39, Td = 36, Md = 35;
function jm(e, r, t, n) {
  const o = [
    e["top-left"],
    e["top-right"],
    e["bottom-right"],
    e["bottom-left"]
  ];
  for (let i = 0; i < o.length; ++i)
    if (o[i] && !Pn(o[i]))
      return n;
  return Es(e, r, t);
}
function Wu(e) {
  const r = e.touches[0], t = r.clientX || r.pageX, n = r.clientY || r.pageY;
  return { x: t, y: n };
}
function Cm(e) {
  let r, t;
  return r = new xn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, [o]) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Em(e, r, t) {
  let { componentContext: n } = r, { layoutParams: o = void 0 } = r, { enabled: i } = r;
  const s = Io(i);
  return hi(pa, { isEnabled: s }), e.$$set = (a) => {
    "componentContext" in a && t(0, n = a.componentContext), "layoutParams" in a && t(1, o = a.layoutParams), "enabled" in a && t(2, i = a.enabled);
  }, e.$$.update = () => {
    e.$$.dirty & /*enabled*/
    4 && s.set(i);
  }, [n, o, i];
}
class Am extends Or {
  constructor(r) {
    super(), Lr(this, r, Em, Cm, Sr, {
      componentContext: 0,
      layoutParams: 1,
      enabled: 2
    });
  }
}
const { Boolean: Uu, window: Sm } = Po;
function Gu(e, r, t) {
  const n = e.slice();
  n[99] = r[t];
  const o = (
    /*item*/
    n[99].index
  );
  n[100] = o;
  const i = (
    /*showedPanels*/
    n[33][
      /*index*/
      n[100]
    ]
  );
  return n[101] = i, n;
}
function Ju(e, r, t) {
  const n = e.slice();
  n[99] = r[t];
  const o = (
    /*item*/
    n[99].index
  );
  n[100] = o;
  const i = (
    /*index*/
    n[100] === /*selected*/
    n[17]
  );
  return n[104] = i, n;
}
function Ku(e, r, t) {
  const n = e.slice();
  n[99] = r[t];
  const o = (
    /*item*/
    n[99].index
  );
  n[100] = o;
  const i = (
    /*index*/
    n[100] === /*selected*/
    n[17]
  );
  return n[104] = i, n;
}
function Vm(e) {
  let r, t;
  return r = new Fn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Fm(e) {
  let r, t;
  const n = [
    {
      cls: gt(
        "tabs",
        jn,
        /*mods*/
        e[24]
      )
    },
    {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    },
    { layoutParams: (
      /*layoutParams*/
      e[1]
    ) },
    { customActions: "tabs" },
    { parentOf: (
      /*parentOfItems*/
      e[47]
    ) },
    { parentOfSimpleMode: !0 },
    { replaceItems: (
      /*replaceItems*/
      e[53]
    ) },
    /*devapi*/
    e[52]
  ];
  let o = {
    $$slots: { default: [Im] },
    $$scope: { ctx: e }
  };
  for (let i = 0; i < n.length; i += 1)
    o = jo(o, n[i]);
  return r = new hn({ props: o }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(i, s) {
      Ot(r, i, s), t = !0;
    },
    p(i, s) {
      const a = s[0] & /*mods, componentContext, layoutParams*/
      16777219 | s[1] & /*parentOfItems, replaceItems, devapi*/
      6356992 ? No(n, [
        s[0] & /*mods*/
        16777216 && {
          cls: gt(
            "tabs",
            jn,
            /*mods*/
            i[24]
          )
        },
        s[0] & /*componentContext*/
        1 && {
          componentContext: (
            /*componentContext*/
            i[0]
          )
        },
        s[0] & /*layoutParams*/
        2 && { layoutParams: (
          /*layoutParams*/
          i[1]
        ) },
        n[3],
        s[1] & /*parentOfItems*/
        65536 && { parentOf: (
          /*parentOfItems*/
          i[47]
        ) },
        n[5],
        s[1] & /*replaceItems*/
        4194304 && { replaceItems: (
          /*replaceItems*/
          i[53]
        ) },
        s[1] & /*devapi*/
        2097152 && yd(
          /*devapi*/
          i[52]
        )
      ]) : {};
      s[0] & /*panelsWrapper, swiperElem, $childStore, childLayoutParams, selected, $jsonSeparator, tabsElem, titlePadding, $direction, tabFontSize, tabPaddings, tabLineHeight, tabLetterSpacing, tabActiveFontWeight, tabInactiveFontWeight, tabActiveFontFamily, tabInactiveFontFamily, tabActiveFontVariationSettings, tabInactiveFontVariationSettings, tabActiveTextColor, tabInactiveTextColor, tabActiveBackground, tabInactiveBackground, tabBorderRadius, tabItemSpacing, componentContext, delimitierStyle, animationType*/
      2130706425 | s[1] & /*$jsonRestrictParentScroll, isSwipeEnabled, isSwipeInitialized, isAnimated, visiblePanels, showedPanels, separatorStyle, animationDuration, selectedTabStyles*/
      131327 | s[3] & /*$$scope*/
      65536 && (a.$$scope = { dirty: s, ctx: i }), r.$set(a);
    },
    i(i) {
      t || (W(r.$$.fragment, i), t = !0);
    },
    o(i) {
      ne(r.$$.fragment, i), t = !1;
    },
    d(i) {
      Bt(r, i);
    }
  };
}
function qu(e) {
  let r;
  return {
    c() {
      r = Pe("span"), g(r, "class", jn.tabs__delimitier), I(
        r,
        "width",
        /*delimitierStyle*/
        e[15].width ? ge(
          /*delimitierStyle*/
          e[15].width
        ) : void 0
      ), I(
        r,
        "height",
        /*delimitierStyle*/
        e[15].height ? ge(
          /*delimitierStyle*/
          e[15].height
        ) : void 0
      );
    },
    m(t, n) {
      K(t, r, n);
    },
    p(t, n) {
      n[0] & /*delimitierStyle*/
      32768 && I(
        r,
        "width",
        /*delimitierStyle*/
        t[15].width ? ge(
          /*delimitierStyle*/
          t[15].width
        ) : void 0
      ), n[0] & /*delimitierStyle*/
      32768 && I(
        r,
        "height",
        /*delimitierStyle*/
        t[15].height ? ge(
          /*delimitierStyle*/
          t[15].height
        ) : void 0
      );
    },
    d(t) {
      t && J(r);
    }
  };
}
function Yu(e) {
  let r, t, n = (
    /*item*/
    e[99].title + ""
  ), o, i, s = (
    /*delimitierStyle*/
    e[15] && /*index*/
    e[100] > 0 && qu(e)
  );
  return {
    c() {
      s && s.c(), r = _r(), t = Pe("span"), o = Nn(n), g(t, "class", i = gt("tabs__item", jn, {
        selected: (
          /*isSelected*/
          e[104]
        ),
        actionable: !!/*item*/
        e[99].title_click_action
      }));
    },
    m(a, l) {
      s && s.m(a, l), K(a, r, l), K(a, t, l), wt(t, o);
    },
    p(a, l) {
      /*delimitierStyle*/
      a[15] && /*index*/
      a[100] > 0 ? s ? s.p(a, l) : (s = qu(a), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null), l[0] & /*$childStore*/
      262144 && n !== (n = /*item*/
      a[99].title + "") && Jn(o, n), l[0] & /*$childStore, selected*/
      393216 && i !== (i = gt("tabs__item", jn, {
        selected: (
          /*isSelected*/
          a[104]
        ),
        actionable: !!/*item*/
        a[99].title_click_action
      })) && g(t, "class", i);
    },
    d(a) {
      a && (J(r), J(t)), s && s.d(a);
    }
  };
}
function Xu(e) {
  let r, t;
  return {
    c() {
      r = Pe("div"), g(r, "class", jn["tabs__tabs-highlighter"]), g(r, "style", t = cr(
        /*selectedTabStyles*/
        e[36]
      ));
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o[1] & /*selectedTabStyles*/
      32 && t !== (t = cr(
        /*selectedTabStyles*/
        n[36]
      )) && g(r, "style", t);
    },
    d(n) {
      n && J(r);
    }
  };
}
function Zu(e) {
  let r, t;
  return {
    c() {
      r = Pe("img"), g(r, "class", jn.tabs__delimitier), g(r, "alt", ""), g(r, "loading", "lazy"), g(r, "decoding", "async"), Xn(r.src, t = /*delimitierStyle*/
      e[15].url) || g(r, "src", t), I(
        r,
        "width",
        /*delimitierStyle*/
        e[15].width ? ge(
          /*delimitierStyle*/
          e[15].width
        ) : void 0
      ), I(
        r,
        "height",
        /*delimitierStyle*/
        e[15].height ? ge(
          /*delimitierStyle*/
          e[15].height
        ) : void 0
      );
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o[0] & /*delimitierStyle*/
      32768 && !Xn(r.src, t = /*delimitierStyle*/
      n[15].url) && g(r, "src", t), o[0] & /*delimitierStyle*/
      32768 && I(
        r,
        "width",
        /*delimitierStyle*/
        n[15].width ? ge(
          /*delimitierStyle*/
          n[15].width
        ) : void 0
      ), o[0] & /*delimitierStyle*/
      32768 && I(
        r,
        "height",
        /*delimitierStyle*/
        n[15].height ? ge(
          /*delimitierStyle*/
          n[15].height
        ) : void 0
      );
    },
    d(n) {
      n && J(r);
    }
  };
}
function Dm(e) {
  let r = (
    /*item*/
    e[99].title + ""
  ), t;
  return {
    c() {
      t = Nn(r);
    },
    m(n, o) {
      K(n, t, o);
    },
    p(n, o) {
      o[0] & /*$childStore*/
      262144 && r !== (r = /*item*/
      n[99].title + "") && Jn(t, r);
    },
    d(n) {
      n && J(t);
    }
  };
}
function Qu(e) {
  let r, t, n, o = (
    /*delimitierStyle*/
    e[15] && /*index*/
    e[100] > 0 && Zu(e)
  );
  function i(...s) {
    return (
      /*func*/
      e[73](
        /*index*/
        e[100],
        ...s
      )
    );
  }
  return t = new fl({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      cls: gt("tabs__item", jn, {
        selected: (
          /*isSelected*/
          e[104]
        ),
        actionable: !!/*item*/
        e[99].title_click_action
      }),
      actions: (
        /*item*/
        e[99].title_click_action && !/*componentContext*/
        e[0].fakeElement ? [
          /*item*/
          e[99].title_click_action
        ].filter(qs) : []
      ),
      attrs: {
        id: `${/*instId*/
        e[50]}-tab-${/*index*/
        e[100]}`,
        "aria-controls": `${/*instId*/
        e[50]}-panel-${/*index*/
        e[100]}`,
        role: "tab",
        // eslint-disable-next-line no-nested-ternary
        tabindex: (
          /*isSelected*/
          e[104] && !/*componentContext*/
          e[0].fakeElement ? (
            /*item*/
            e[99].title_click_action ? void 0 : "0"
          ) : "-1"
        ),
        "aria-selected": (
          /*isSelected*/
          e[104] ? "true" : "false"
        )
      },
      customAction: (
        /*componentContext*/
        e[0].fakeElement ? null : i
      ),
      $$slots: { default: [Dm] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      o && o.c(), r = _r(), Wt(t.$$.fragment);
    },
    m(s, a) {
      o && o.m(s, a), K(s, r, a), Ot(t, s, a), n = !0;
    },
    p(s, a) {
      e = s, /*delimitierStyle*/
      e[15] && /*index*/
      e[100] > 0 ? o ? o.p(e, a) : (o = Zu(e), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
      const l = {};
      a[0] & /*componentContext*/
      1 && (l.componentContext = /*componentContext*/
      e[0]), a[0] & /*$childStore, selected*/
      393216 && (l.cls = gt("tabs__item", jn, {
        selected: (
          /*isSelected*/
          e[104]
        ),
        actionable: !!/*item*/
        e[99].title_click_action
      })), a[0] & /*$childStore, componentContext*/
      262145 && (l.actions = /*item*/
      e[99].title_click_action && !/*componentContext*/
      e[0].fakeElement ? [
        /*item*/
        e[99].title_click_action
      ].filter(qs) : []), a[0] & /*$childStore, selected, componentContext*/
      393217 && (l.attrs = {
        id: `${/*instId*/
        e[50]}-tab-${/*index*/
        e[100]}`,
        "aria-controls": `${/*instId*/
        e[50]}-panel-${/*index*/
        e[100]}`,
        role: "tab",
        // eslint-disable-next-line no-nested-ternary
        tabindex: (
          /*isSelected*/
          e[104] && !/*componentContext*/
          e[0].fakeElement ? (
            /*item*/
            e[99].title_click_action ? void 0 : "0"
          ) : "-1"
        ),
        "aria-selected": (
          /*isSelected*/
          e[104] ? "true" : "false"
        )
      }), a[0] & /*componentContext, $childStore*/
      262145 && (l.customAction = /*componentContext*/
      e[0].fakeElement ? null : i), a[0] & /*$childStore*/
      262144 | a[3] & /*$$scope*/
      65536 && (l.$$scope = { dirty: a, ctx: e }), t.$set(l);
    },
    i(s) {
      n || (W(t.$$.fragment, s), n = !0);
    },
    o(s) {
      ne(t.$$.fragment, s), n = !1;
    },
    d(s) {
      s && J(r), o && o.d(s), Bt(t, s);
    }
  };
}
function xu(e) {
  let r, t;
  return {
    c() {
      r = Pe("div"), g(r, "class", jn.tabs__separator), g(r, "style", t = cr(
        /*separatorStyle*/
        e[38]
      ));
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o[1] & /*separatorStyle*/
      128 && t !== (t = cr(
        /*separatorStyle*/
        n[38]
      )) && g(r, "style", t);
    },
    d(n) {
      n && J(r);
    }
  };
}
function $u(e) {
  let r, t;
  return r = new Am({
    props: {
      componentContext: (
        /*childComponentContext*/
        e[101]
      ),
      layoutParams: (
        /*childLayoutParams*/
        e[3]
      ),
      enabled: (
        /*index*/
        e[100] === /*selected*/
        e[17]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*$childStore*/
      262144 | o[1] & /*showedPanels*/
      4 && (i.componentContext = /*childComponentContext*/
      n[101]), o[0] & /*childLayoutParams*/
      8 && (i.layoutParams = /*childLayoutParams*/
      n[3]), o[0] & /*$childStore, selected*/
      393216 && (i.enabled = /*index*/
      n[100] === /*selected*/
      n[17]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function ec(e) {
  let r, t, n, o, i, s, a = (
    /*childComponentContext*/
    e[101] && $u(e)
  );
  return {
    c() {
      r = Pe("div"), a && a.c(), t = _r(), g(r, "class", n = gt("tabs__panel", jn, {
        visible: (
          /*visiblePanels*/
          e[34][
            /*index*/
            e[100]
          ]
        )
      })), g(r, "role", "tabpanel"), g(r, "id", o = /*instId*/
      e[50] + "-panel-" + /*index*/
      e[100]), g(r, "aria-labelledby", i = /*instId*/
      e[50] + "-tab-" + /*index*/
      e[100]), I(
        r,
        "left",
        /*index*/
        e[100] * 100 + "%"
      );
    },
    m(l, u) {
      K(l, r, u), a && a.m(r, null), wt(r, t), s = !0;
    },
    p(l, u) {
      /*childComponentContext*/
      l[101] ? a ? (a.p(l, u), u[0] & /*$childStore*/
      262144 | u[1] & /*showedPanels*/
      4 && W(a, 1)) : (a = $u(l), a.c(), W(a, 1), a.m(r, t)) : a && (pr(), ne(a, 1, 1, () => {
        a = null;
      }), gr()), (!s || u[0] & /*$childStore*/
      262144 | u[1] & /*visiblePanels*/
      8 && n !== (n = gt("tabs__panel", jn, {
        visible: (
          /*visiblePanels*/
          l[34][
            /*index*/
            l[100]
          ]
        )
      }))) && g(r, "class", n), (!s || u[0] & /*$childStore*/
      262144 && o !== (o = /*instId*/
      l[50] + "-panel-" + /*index*/
      l[100])) && g(r, "id", o), (!s || u[0] & /*$childStore*/
      262144 && i !== (i = /*instId*/
      l[50] + "-tab-" + /*index*/
      l[100])) && g(r, "aria-labelledby", i), (!s || u[0] & /*$childStore*/
      262144) && I(
        r,
        "left",
        /*index*/
        l[100] * 100 + "%"
      );
    },
    i(l) {
      s || (W(a), s = !0);
    },
    o(l) {
      ne(a), s = !1;
    },
    d(l) {
      l && J(r), a && a.d();
    }
  };
}
function Im(e) {
  let r, t, n, o, i, s, a, l, u, c, f, _, h, m, p, w = ur(
    /*$childStore*/
    e[18]
  ), k = [];
  for (let A = 0; A < w.length; A += 1)
    k[A] = Yu(Ku(e, w, A));
  let N = (
    /*animationType*/
    e[16] === "slide" && /*selectedTabStyles*/
    e[36] && Xu(e)
  ), B = ur(
    /*$childStore*/
    e[18]
  ), z = [];
  for (let A = 0; A < B.length; A += 1)
    z[A] = Qu(Ju(e, B, A));
  const oe = (A) => ne(z[A], 1, 1, () => {
    z[A] = null;
  });
  let fe = (
    /*$jsonSeparator*/
    e[20] && xu(e)
  ), T = ur(
    /*$childStore*/
    e[18]
  ), Y = [];
  for (let A = 0; A < T.length; A += 1)
    Y[A] = ec(Gu(e, T, A));
  const le = (A) => ne(Y[A], 1, 1, () => {
    Y[A] = null;
  });
  return {
    c() {
      r = Pe("div"), t = Pe("div");
      for (let A = 0; A < k.length; A += 1)
        k[A].c();
      n = _r(), N && N.c(), o = _r(), i = Pe("div");
      for (let A = 0; A < z.length; A += 1)
        z[A].c();
      a = _r(), fe && fe.c(), l = _r(), u = Pe("div"), c = Pe("div");
      for (let A = 0; A < Y.length; A += 1)
        Y[A].c();
      g(t, "class", jn["tabs__items-bg"]), g(t, "aria-hidden", "true"), g(i, "class", jn["tabs__items-text"]), g(r, "class", s = jn.tabs__list + " " + /*$jsonRestrictParentScroll*/
      (e[48] ? Ar["root_restrict-scroll"] : "")), g(r, "role", "tablist"), I(
        r,
        "--divkit-tabs-title-padding",
        /*titlePadding*/
        e[14] ? so(
          /*titlePadding*/
          e[14],
          /*$direction*/
          e[19]
        ) : ""
      ), I(r, "--divkit-tabs-font-size", ge(
        /*tabFontSize*/
        e[4]
      )), I(
        r,
        "--divkit-tabs-paddings",
        /*tabPaddings*/
        e[5]
      ), I(
        r,
        "--divkit-tabs-line-height",
        /*tabLineHeight*/
        e[25]
      ), I(
        r,
        "--divkit-tabs-letter-spacing",
        /*tabLetterSpacing*/
        e[26]
      ), I(
        r,
        "--divkit-tabs-active-font-weight",
        /*tabActiveFontWeight*/
        e[7] || ""
      ), I(
        r,
        "--divkit-tabs-inactive-font-weight",
        /*tabInactiveFontWeight*/
        e[8] || ""
      ), I(
        r,
        "--divkit-tabs-active-font-family",
        /*tabActiveFontFamily*/
        e[27] || ""
      ), I(
        r,
        "--divkit-tabs-inactive-font-family",
        /*tabInactiveFontFamily*/
        e[29] || ""
      ), I(
        r,
        "--divkit-tabs-active-font-variation-settings",
        /*tabActiveFontVariationSettings*/
        e[28] || ""
      ), I(
        r,
        "--divkit-tabs-inactive-font-variation-settings",
        /*tabInactiveFontVariationSettings*/
        e[30] || ""
      ), I(
        r,
        "--divkit-tabs-active-text-color",
        /*tabActiveTextColor*/
        e[9]
      ), I(
        r,
        "--divkit-tabs-inactive-text-color",
        /*tabInactiveTextColor*/
        e[10]
      ), I(
        r,
        "--divkit-tabs-active-background-color",
        /*tabActiveBackground*/
        e[11]
      ), I(
        r,
        "--divkit-tabs-inactive-background-color",
        /*tabInactiveBackground*/
        e[12]
      ), I(
        r,
        "--divkit-tabs-border-radius",
        /*tabBorderRadius*/
        e[6]
      ), I(
        r,
        "--divkit-tabs-items-spacing",
        /*tabItemSpacing*/
        e[13] ? cn(
          /*tabItemSpacing*/
          e[13] * 10 / /*tabFontSize*/
          e[4]
        ) : ""
      ), I(
        r,
        "--divkit-tabs-animation-duration",
        /*animationDuration*/
        e[35] !== void 0 ? `${/*animationDuration*/
        e[35]}ms` : ""
      ), g(c, "class", f = gt("tabs__swiper", jn, {
        inited: (
          /*isSwipeInitialized*/
          e[31]
        ),
        animated: (
          /*isAnimated*/
          e[32]
        )
      })), g(u, "class", _ = jn.tabs__panels + " " + /*$jsonRestrictParentScroll*/
      (e[48] ? Ar["root_restrict-scroll"] : ""));
    },
    m(A, D) {
      K(A, r, D), wt(r, t);
      for (let M = 0; M < k.length; M += 1)
        k[M] && k[M].m(t, null);
      wt(t, n), N && N.m(t, null), wt(r, o), wt(r, i);
      for (let M = 0; M < z.length; M += 1)
        z[M] && z[M].m(i, null);
      e[74](r), K(A, a, D), fe && fe.m(A, D), K(A, l, D), K(A, u, D), wt(u, c);
      for (let M = 0; M < Y.length; M += 1)
        Y[M] && Y[M].m(c, null);
      e[75](c), e[76](u), h = !0, m || (p = [
        Qe(
          r,
          "keydown",
          /*onTabKeydown*/
          e[55]
        ),
        Qe(u, "touchstart", function() {
          zr(
            /*isSwipeEnabled*/
            e[37] ? (
              /*onTouchStart*/
              e[56]
            ) : void 0
          ) && (e[37] ? (
            /*onTouchStart*/
            e[56]
          ) : void 0).apply(this, arguments);
        }),
        Qe(u, "touchmove", function() {
          zr(
            /*isSwipeEnabled*/
            e[37] ? (
              /*onTouchMove*/
              e[57]
            ) : void 0
          ) && (e[37] ? (
            /*onTouchMove*/
            e[57]
          ) : void 0).apply(this, arguments);
        }),
        Qe(u, "touchend", function() {
          zr(
            /*isSwipeEnabled*/
            e[37] ? (
              /*onTouchEnd*/
              e[58]
            ) : void 0
          ) && (e[37] ? (
            /*onTouchEnd*/
            e[58]
          ) : void 0).apply(this, arguments);
        }),
        Qe(u, "touchcancel", function() {
          zr(
            /*isSwipeEnabled*/
            e[37] ? (
              /*onTouchEnd*/
              e[58]
            ) : void 0
          ) && (e[37] ? (
            /*onTouchEnd*/
            e[58]
          ) : void 0).apply(this, arguments);
        })
      ], m = !0);
    },
    p(A, D) {
      if (e = A, D[0] & /*$childStore, selected, delimitierStyle*/
      425984) {
        w = ur(
          /*$childStore*/
          e[18]
        );
        let M;
        for (M = 0; M < w.length; M += 1) {
          const U = Ku(e, w, M);
          k[M] ? k[M].p(U, D) : (k[M] = Yu(U), k[M].c(), k[M].m(t, n));
        }
        for (; M < k.length; M += 1)
          k[M].d(1);
        k.length = w.length;
      }
      if (/*animationType*/
      e[16] === "slide" && /*selectedTabStyles*/
      e[36] ? N ? N.p(e, D) : (N = Xu(e), N.c(), N.m(t, null)) : N && (N.d(1), N = null), D[0] & /*componentContext, $childStore, selected, delimitierStyle*/
      425985 | D[1] & /*instId, selectItem*/
      8912896) {
        B = ur(
          /*$childStore*/
          e[18]
        );
        let M;
        for (M = 0; M < B.length; M += 1) {
          const U = Ju(e, B, M);
          z[M] ? (z[M].p(U, D), W(z[M], 1)) : (z[M] = Qu(U), z[M].c(), W(z[M], 1), z[M].m(i, null));
        }
        for (pr(), M = B.length; M < z.length; M += 1)
          oe(M);
        gr();
      }
      if ((!h || D[1] & /*$jsonRestrictParentScroll*/
      131072 && s !== (s = jn.tabs__list + " " + /*$jsonRestrictParentScroll*/
      (e[48] ? Ar["root_restrict-scroll"] : ""))) && g(r, "class", s), D[0] & /*titlePadding, $direction*/
      540672 && I(
        r,
        "--divkit-tabs-title-padding",
        /*titlePadding*/
        e[14] ? so(
          /*titlePadding*/
          e[14],
          /*$direction*/
          e[19]
        ) : ""
      ), D[0] & /*tabFontSize*/
      16 && I(r, "--divkit-tabs-font-size", ge(
        /*tabFontSize*/
        e[4]
      )), D[0] & /*tabPaddings*/
      32 && I(
        r,
        "--divkit-tabs-paddings",
        /*tabPaddings*/
        e[5]
      ), D[0] & /*tabLineHeight*/
      33554432 && I(
        r,
        "--divkit-tabs-line-height",
        /*tabLineHeight*/
        e[25]
      ), D[0] & /*tabLetterSpacing*/
      67108864 && I(
        r,
        "--divkit-tabs-letter-spacing",
        /*tabLetterSpacing*/
        e[26]
      ), D[0] & /*tabActiveFontWeight*/
      128 && I(
        r,
        "--divkit-tabs-active-font-weight",
        /*tabActiveFontWeight*/
        e[7] || ""
      ), D[0] & /*tabInactiveFontWeight*/
      256 && I(
        r,
        "--divkit-tabs-inactive-font-weight",
        /*tabInactiveFontWeight*/
        e[8] || ""
      ), D[0] & /*tabActiveFontFamily*/
      134217728 && I(
        r,
        "--divkit-tabs-active-font-family",
        /*tabActiveFontFamily*/
        e[27] || ""
      ), D[0] & /*tabInactiveFontFamily*/
      536870912 && I(
        r,
        "--divkit-tabs-inactive-font-family",
        /*tabInactiveFontFamily*/
        e[29] || ""
      ), D[0] & /*tabActiveFontVariationSettings*/
      268435456 && I(
        r,
        "--divkit-tabs-active-font-variation-settings",
        /*tabActiveFontVariationSettings*/
        e[28] || ""
      ), D[0] & /*tabInactiveFontVariationSettings*/
      1073741824 && I(
        r,
        "--divkit-tabs-inactive-font-variation-settings",
        /*tabInactiveFontVariationSettings*/
        e[30] || ""
      ), D[0] & /*tabActiveTextColor*/
      512 && I(
        r,
        "--divkit-tabs-active-text-color",
        /*tabActiveTextColor*/
        e[9]
      ), D[0] & /*tabInactiveTextColor*/
      1024 && I(
        r,
        "--divkit-tabs-inactive-text-color",
        /*tabInactiveTextColor*/
        e[10]
      ), D[0] & /*tabActiveBackground*/
      2048 && I(
        r,
        "--divkit-tabs-active-background-color",
        /*tabActiveBackground*/
        e[11]
      ), D[0] & /*tabInactiveBackground*/
      4096 && I(
        r,
        "--divkit-tabs-inactive-background-color",
        /*tabInactiveBackground*/
        e[12]
      ), D[0] & /*tabBorderRadius*/
      64 && I(
        r,
        "--divkit-tabs-border-radius",
        /*tabBorderRadius*/
        e[6]
      ), D[0] & /*tabItemSpacing, tabFontSize*/
      8208 && I(
        r,
        "--divkit-tabs-items-spacing",
        /*tabItemSpacing*/
        e[13] ? cn(
          /*tabItemSpacing*/
          e[13] * 10 / /*tabFontSize*/
          e[4]
        ) : ""
      ), D[1] & /*animationDuration*/
      16 && I(
        r,
        "--divkit-tabs-animation-duration",
        /*animationDuration*/
        e[35] !== void 0 ? `${/*animationDuration*/
        e[35]}ms` : ""
      ), /*$jsonSeparator*/
      e[20] ? fe ? fe.p(e, D) : (fe = xu(e), fe.c(), fe.m(l.parentNode, l)) : fe && (fe.d(1), fe = null), D[0] & /*$childStore, childLayoutParams, selected*/
      393224 | D[1] & /*visiblePanels, instId, showedPanels*/
      524300) {
        T = ur(
          /*$childStore*/
          e[18]
        );
        let M;
        for (M = 0; M < T.length; M += 1) {
          const U = Gu(e, T, M);
          Y[M] ? (Y[M].p(U, D), W(Y[M], 1)) : (Y[M] = ec(U), Y[M].c(), W(Y[M], 1), Y[M].m(c, null));
        }
        for (pr(), M = T.length; M < Y.length; M += 1)
          le(M);
        gr();
      }
      (!h || D[1] & /*isSwipeInitialized, isAnimated*/
      3 && f !== (f = gt("tabs__swiper", jn, {
        inited: (
          /*isSwipeInitialized*/
          e[31]
        ),
        animated: (
          /*isAnimated*/
          e[32]
        )
      }))) && g(c, "class", f), (!h || D[1] & /*$jsonRestrictParentScroll*/
      131072 && _ !== (_ = jn.tabs__panels + " " + /*$jsonRestrictParentScroll*/
      (e[48] ? Ar["root_restrict-scroll"] : ""))) && g(u, "class", _);
    },
    i(A) {
      if (!h) {
        for (let D = 0; D < B.length; D += 1)
          W(z[D]);
        for (let D = 0; D < T.length; D += 1)
          W(Y[D]);
        h = !0;
      }
    },
    o(A) {
      z = z.filter(Uu);
      for (let D = 0; D < z.length; D += 1)
        ne(z[D]);
      Y = Y.filter(Uu);
      for (let D = 0; D < Y.length; D += 1)
        ne(Y[D]);
      h = !1;
    },
    d(A) {
      A && (J(r), J(a), J(l), J(u)), un(k, A), N && N.d(), un(z, A), e[74](null), fe && fe.d(A), un(Y, A), e[75](null), e[76](null), m = !1, Rr(p);
    }
  };
}
function Tm(e) {
  let r, t, n, o, i, s;
  const a = [Fm, Vm], l = [];
  function u(c, f) {
    return (
      /*hasError*/
      c[2] ? -1 : 0
    );
  }
  return ~(r = u(e)) && (t = l[r] = a[r](e)), {
    c() {
      t && t.c(), n = or();
    },
    m(c, f) {
      ~r && l[r].m(c, f), K(c, n, f), o = !0, i || (s = Qe(Sm, "resize", function() {
        zr(
          /*animationType*/
          e[16] === "slide" ? (
            /*updateSlideAnimation*/
            e[59]
          ) : void 0
        ) && (e[16] === "slide" ? (
          /*updateSlideAnimation*/
          e[59]
        ) : void 0).apply(this, arguments);
      }), i = !0);
    },
    p(c, f) {
      e = c;
      let _ = r;
      r = u(e), r === _ ? ~r && l[r].p(e, f) : (t && (pr(), ne(l[_], 1, 1, () => {
        l[_] = null;
      }), gr()), ~r ? (t = l[r], t ? t.p(e, f) : (t = l[r] = a[r](e), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(c) {
      o || (W(t), o = !0);
    },
    o(c) {
      ne(t), o = !1;
    },
    d(c) {
      c && J(n), ~r && l[r].d(c), i = !1, s();
    }
  };
}
function Mm(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, B, z, oe = v, fe = () => (oe(), oe = E(a, (j) => t(67, z = j)), a), T, Y = v, le = () => (Y(), Y = E(m, (j) => t(68, T = j)), m), A, D = v, M = () => (D(), D = E(h, (j) => t(69, A = j)), h), U, q = v, be = () => (q(), q = E(f, (j) => t(70, U = j)), f), Ae, Ce, he = v, Fe = () => (he(), he = E(c, (j) => t(71, Ce = j)), c), x, Je = v, Ye = () => (Je(), Je = E(u, (j) => t(72, x = j)), u), Xe, ye = v, Ie = () => (ye(), ye = E(l, (j) => t(20, Xe = j)), l), pe, me = v, _e = () => (me(), me = E(_, (j) => t(48, pe = j)), _);
  e.$$.on_destroy.push(() => oe()), e.$$.on_destroy.push(() => Y()), e.$$.on_destroy.push(() => D()), e.$$.on_destroy.push(() => q()), e.$$.on_destroy.push(() => he()), e.$$.on_destroy.push(() => Je()), e.$$.on_destroy.push(() => ye()), e.$$.on_destroy.push(() => me());
  let { componentContext: ee } = r, { layoutParams: ce = void 0 } = r;
  const te = Tr(Xr), we = te.direction;
  mn(e, we, (j) => t(19, Ae = j));
  const Ue = te.genId("tabs");
  let Ke, $ = !1, Oe = Io([]);
  mn(e, Oe, (j) => t(18, B = j));
  let Ne = {}, ot, ct, rt, kt = {}, it = 12, Mt = "", ft = "", Z = "", de = "", lt, ze = "", F = "", Et, ut = "", Vt = "", It = "", nt = "", Q = "", At = "", Pt = 0, $t = "", Zt = "", Ee = null, He = !1, ht = !1, Te, xe = [], Le = [], Ft = null, Be = null, bt = null, Ut, Tt = !1, ir = !1, De, jt, sr, rr = "slide", nr, fr, wr, Nt;
  function br() {
    t(4, it = 12), t(5, Mt = ""), t(6, de = ""), t(7, lt = void 0), t(27, ze = ""), t(28, F = ""), t(8, Et = void 0), t(29, ut = ""), t(30, Vt = ""), t(9, It = ""), t(10, nt = ""), t(11, Q = ""), t(12, At = ""), t(13, Pt = 0), t(61, $t = ""), t(62, Zt = ""), t(14, Ee = null), t(15, sr = void 0), t(16, rr = "slide"), t(35, nr = 300), t(36, fr = void 0), ue();
  }
  function Rt(j) {
    ee.json.items && t(0, ee = wr = {
      ...ee,
      json: {
        ...ee.json,
        items: ee.json.items.map((ie, d) => ({ ...ie, div: j[d] }))
      }
    });
  }
  function mt(j) {
    if ($)
      return;
    const ie = new Set(xe.filter(zo)), d = /* @__PURE__ */ new Map();
    wr === ee && xe.forEach((L) => {
      L && d.set(L.json, L);
    }), t(33, xe = j.map((L, je) => {
      if ((je === p || xe[je]) && (L != null && L.div)) {
        const We = d.get(L.div);
        return We ? (ie.delete(We), We) : ee.produceChildContext(L.div, { path: je });
      }
    })), t(34, Le = j.map((L, je) => je === p));
    for (const L of ie)
      L.destroy();
    wr = ee;
  }
  async function er(j, ie, d) {
    if (Te = p, t(17, p = j), St(), vr(d), ue(), ie) {
      await An();
      const L = ot.querySelector(`.${jn.tabs__item_selected}`);
      L && L.focus();
    }
  }
  function se(j, ie = !1) {
    const d = B == null ? void 0 : B.length;
    if (!d)
      return;
    const L = B.map((P) => P.index);
    let We = L.indexOf(p) + j;
    We >= d ? We = 0 : We < 0 && (We = d - 1);
    const ke = L[We];
    er(ke, ie, !0);
  }
  function kr(j, ie) {
    return p !== ie ? (er(ie, !1, !0), !1) : !0;
  }
  function vr(j = !0) {
    t(32, ht = j), Ct(-p * 100), Dr(), Br(), ar(), jt = -p * ct.clientWidth;
  }
  async function Ct(j) {
    await An(), t(23, rt.style.transform = `translate3d(${j}%,0,0)`, rt);
  }
  function Dr(j = !1) {
    const ie = j ? Math.max(0, p - 1) : Math.min(p, Te != null ? Te : p), d = j ? Math.min(o.length - 1, p + 1) : Math.max(p, Te != null ? Te : p);
    te.devtoolCreateHierarchy, xe.forEach((L) => {
      L == null || L.destroy();
    }), t(33, xe = xe.map((L, je) => {
      var ke;
      if (L)
        return L;
      const We = (ke = o[je]) == null ? void 0 : ke.div;
      if ((je >= ie && je <= d || te.devtoolCreateHierarchy === "eager" && !1) && We)
        return ee.produceChildContext(We, { path: je });
    })), t(34, Le = Le.map((L, je) => je >= ie && je <= d));
  }
  async function Br() {
    var ie;
    if (((ie = ee.json.height) == null ? void 0 : ie.type) === "match_parent")
      return;
    await An();
    const j = document.getElementById(`${Ue}-panel-${p}`);
    j && t(22, ct.style.height = ge(j.offsetHeight), ct);
  }
  function ar() {
    Ft && clearTimeout(Ft), Ft = window.setTimeout(
      () => {
        t(34, Le = o.map((j, ie) => ie === p));
      },
      400
    );
  }
  function at(j) {
    if (!(j.ctrlKey || j.shiftKey || j.altKey || j.metaKey) && o) {
      if (j.which === Dd)
        se(-1, !0);
      else if (j.which === Id)
        se(1, !0);
      else if (j.which === Td)
        er(0, !0, !0);
      else if (j.which === Md)
        er(o.length - 1, !0, !0);
      else
        return;
      j.preventDefault();
    }
  }
  function St() {
    He || (t(31, He = !0), t(22, ct.style.height = ge(ct.clientHeight), ct), t(23, rt.style.transform = `translate3d(${-(Te != null ? Te : p) * 100}%,0,0)`, rt));
  }
  function Gt(j) {
    var L;
    const ie = j.target, d = (L = ie == null ? void 0 : ie.closest) == null ? void 0 : L.call(ie, `.${Ar["root_restrict-scroll"]}`);
    o.length < 2 || j.touches.length > 1 || d && d !== ct || (Tt = !1, ir = !1, Be = Wu(j), bt = null, Ut = Date.now(), De = jt || -p * ct.clientWidth, t(32, ht = !1), Ft && clearTimeout(Ft));
  }
  function Qt(j) {
    const ie = Wu(j);
    if (!Be || bt && bt.x === ie.x && bt.y === ie.y)
      return;
    bt = ie;
    const d = ct.clientWidth;
    if (Tt) {
      jt = ie.x - Be.x + De;
      const L = d * o.length;
      if (jt > 0)
        jt = jt * d / (jt + d * 3);
      else if (-jt + d > L) {
        let je = -jt + d - L;
        je = je * d / (je + d * 3), jt = d - L - je;
      }
      Ct(jt * 100 / d);
    } else Math.abs(ie.y - Be.y) > 10 ? ir = !0 : !ir && Math.abs(ie.x - Be.x) > 8 && (St(), Tt = !0, Be = ie, Ct(-p * 100), Dr(!0));
    Tt && j.cancelable && j.preventDefault();
  }
  function $e() {
    ir = !1, Be = null;
    let j = p;
    if (!Tt)
      return;
    Tt = !1;
    const ie = Math.min(512, ct.clientWidth), d = Math.abs(De - jt), L = Math.min(1, (Date.now() - Ut) / 750);
    d > ie / 4 * L && (j += De > jt ? 1 : -1), j >= o.length ? j = o.length - 1 : j < 0 && (j = 0), j === p ? (t(32, ht = !0), jt = -j * ie, Ct(-j * 100), ar()) : er(j, !1, !0);
  }
  function pt(j, ie) {
    return j > o.length - 1 ? ie === "ring" ? Vo(j, o.length) : o.length - 1 : j < 0 ? ie === "ring" ? Vo(j, o.length) : 0 : j;
  }
  function ue() {
    rr === "slide" && An().then(() => {
      const j = ot == null ? void 0 : ot.querySelector("." + jn.tabs__item_selected);
      j && t(36, fr = {
        left: `${j.offsetLeft}px`,
        width: `${j.offsetWidth}px`,
        height: `${j.offsetHeight}px`
      });
    });
  }
  Qn(() => {
    ue(), te.devtoolCreateHierarchy;
  }), ln(() => {
    xe.forEach((j) => {
      j == null || j.destroy();
    }), Ke && (te.unregisterInstance(Ke), t(60, Ke = void 0));
  });
  const vt = (j, ie) => kr(ie, j);
  function tr(j) {
    Fr[j ? "unshift" : "push"](() => {
      ot = j, t(21, ot);
    });
  }
  function Ht(j) {
    Fr[j ? "unshift" : "push"](() => {
      rt = j, t(23, rt);
    });
  }
  function yr(j) {
    Fr[j ? "unshift" : "push"](() => {
      ct = j, t(22, ct);
    });
  }
  return e.$$set = (j) => {
    "componentContext" in j && t(0, ee = j.componentContext), "layoutParams" in j && t(1, ce = j.layoutParams);
  }, e.$$.update = () => {
    var j, ie, d, L, je, We, ke, P, zt, Lt;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(66, n = ee.origJson), e.$$.dirty[2] & /*origJson*/
    16 && n && br(), e.$$.dirty[0] & /*componentContext*/
    1 && t(63, o = Array.isArray(ee.json.items) && ee.json.items || []), e.$$.dirty[2] & /*items*/
    2 && t(47, i = o.map((Ge) => {
      var st;
      return { json: Ge.div, id: (st = Ge.div) == null ? void 0 : st.id };
    })), e.$$.dirty[0] & /*componentContext*/
    1 && t(65, s = ee.getJsonWithVars(ee.json.selected_tab)), e.$$.dirty[0] & /*componentContext*/
    1 && fe(t(46, a = ee.getDerivedFromVars(ee.json.tab_title_style, void 0, !0))), e.$$.dirty[0] & /*componentContext*/
    1 && Ie(t(45, l = ee.getDerivedFromVars(ee.json.has_separator))), e.$$.dirty[0] & /*componentContext*/
    1 && Ye(t(44, u = ee.getDerivedFromVars(ee.json.separator_color))), e.$$.dirty[0] & /*componentContext*/
    1 && Fe(t(43, c = ee.getDerivedFromVars(ee.json.separator_paddings))), e.$$.dirty[0] & /*componentContext*/
    1 && be(t(42, f = ee.getDerivedFromVars(ee.json.switch_tabs_by_content_swipe_enabled))), e.$$.dirty[0] & /*componentContext*/
    1 && _e(t(41, _ = ee.getDerivedFromVars(ee.json.restrict_parent_scroll))), e.$$.dirty[0] & /*componentContext*/
    1 && M(t(40, h = ee.getDerivedFromVars(ee.json.title_paddings))), e.$$.dirty[0] & /*componentContext*/
    1 && le(t(39, m = ee.getDerivedFromVars(ee.json.tab_title_delimiter))), e.$$.dirty[2] & /*jsonSelectedTab*/
    8 && t(17, p = s && Number(s) || 0), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[2] & /*items*/
    2)
      if (Array.isArray(o) && o.length) {
        let Ge = [];
        o.forEach((st, Jt) => {
          const Er = ee.getJsonWithVars({
            index: Jt,
            title: st.title,
            title_click_action: st.title_click_action
          });
          Er.title && typeof Er.title == "string" ? Ge.push(Er) : ee.logError(X(new Error("Incorrect title for the tab"), { additional: { index: Jt } }));
        }), Oe.set(Ge);
      } else
        Oe.set([]);
    if (e.$$.dirty[0] & /*$childStore, componentContext*/
    262145 && (B != null && B.length ? t(2, $ = !1) : (t(2, $ = !0), ee.logError(X(new Error('Incorrect or empty "items" prop for div "tabs"'))))), e.$$.dirty[0] & /*componentContext, childLayoutParams*/
    9) {
      let Ge = { parentContainerOrientation: "horizontal" };
      ((j = ee.json.width) == null ? void 0 : j.type) === "wrap_content" && (Ge.parentHorizontalWrapContent = !0), (!ee.json.height || ee.json.height.type === "wrap_content") && (Ge.parentVerticalWrapContent = !0), t(3, Ne = ei(Ge, Ne));
    }
    if (e.$$.dirty[0] & /*hasError, selected, componentContext*/
    131077 | e.$$.dirty[2] & /*items*/
    2 && !$ && (p < 0 || p >= o.length) && (ee.logError(X(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
      additional: {
        selected: ee.json.selected_tab,
        length: o.length
      }
    })), t(17, p = p < 0 ? 0 : o.length - 1)), e.$$.dirty[0] & /*hasError, $childStore, selected, componentContext*/
    393221 && !$ && !B.some((Ge) => p === Ge.index) && (ee.logError(X(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
      additional: {
        selected: ee.json.selected_tab
      }
    })), t(17, p = ((ie = B[0]) == null ? void 0 : ie.index) || 0)), e.$$.dirty[2] & /*$jsonTabStyle*/
    32 && t(64, w = z || {}), e.$$.dirty[0] & /*tabFontSize*/
    16 | e.$$.dirty[2] & /*tabStyle*/
    4 && t(4, it = Rn(w.font_size, it)), e.$$.dirty[0] & /*tabFontSize, $direction, tabPaddings*/
    524336 | e.$$.dirty[2] & /*tabStyle*/
    4 && (w.font_size || w.paddings)) {
      const Ge = w.paddings || { top: 6, right: 8, bottom: 6, left: 8 }, st = {
        top: (Number(Ge.top) || 0) / it * 10,
        right: (Number(Ae === "ltr" ? Ge.end : Ge.start) || Number(Ge.right) || 0) / it * 10,
        bottom: (Number(Ge.bottom) || 0) / it * 10,
        left: (Number(Ae === "ltr" ? Ge.start : Ge.end) || Number(Ge.left) || 0) / it * 10
      };
      t(5, Mt = is(st, Ae, Mt));
    }
    if (e.$$.dirty[0] & /*tabFontSize*/
    16 | e.$$.dirty[2] & /*tabStyle*/
    4) {
      const Ge = w.line_height;
      Ge !== void 0 && Tn(Ge) && t(25, ft = ge(Ge / it * 10));
    }
    if (e.$$.dirty[0] & /*tabFontSize*/
    16 | e.$$.dirty[2] & /*tabStyle*/
    4) {
      const Ge = w.letter_spacing;
      Ge !== void 0 && Pn(Ge) && t(26, Z = ge(Ge / it * 10));
    }
    if (e.$$.dirty[0] & /*tabFontSize, tabBorderRadius*/
    80 | e.$$.dirty[2] & /*tabStyle*/
    4 && (w.corner_radius || w.corners_radius || w.font_size)) {
      const Ge = (d = w.corner_radius) != null ? d : 1e3;
      w.corners_radius ? t(6, de = jm(w.corners_radius, Ge, it, de)) : Pn(Ge) && t(6, de = ge(Ge / it * 10));
    }
    e.$$.dirty[0] & /*tabActiveFontWeight*/
    128 | e.$$.dirty[2] & /*tabStyle*/
    4 && (t(7, lt = ii(w.active_font_weight || w.font_weight, void 0, lt)), w.font_family && typeof w.font_family == "string" ? t(27, ze = te.typefaceProvider(w.font_family, { fontWeight: lt || 400 })) : t(27, ze = ""), t(28, F = wi(w.active_font_variation_settings))), e.$$.dirty[0] & /*tabInactiveFontWeight*/
    256 | e.$$.dirty[2] & /*tabStyle*/
    4 && (t(8, Et = ii(w.inactive_font_weight || w.font_weight, void 0, Et)), w.font_family && typeof w.font_family == "string" ? t(29, ut = te.typefaceProvider(w.font_family, { fontWeight: Et || 400 })) : t(29, ut = ""), t(30, Vt = wi(w.inactive_font_variation_settings))), e.$$.dirty[0] & /*tabActiveTextColor*/
    512 | e.$$.dirty[2] & /*tabStyle*/
    4 && t(9, It = dr(w.active_text_color, 1, It)), e.$$.dirty[0] & /*tabInactiveTextColor*/
    1024 | e.$$.dirty[2] & /*tabStyle*/
    4 && t(10, nt = dr(w.inactive_text_color, 1, nt)), e.$$.dirty[0] & /*tabActiveBackground*/
    2048 | e.$$.dirty[2] & /*tabStyle*/
    4 && t(11, Q = dr(w.active_background_color, 1, Q)), e.$$.dirty[0] & /*tabInactiveBackground*/
    4096 | e.$$.dirty[2] & /*tabStyle*/
    4 && t(12, At = dr(w.inactive_background_color, 1, At)), e.$$.dirty[0] & /*tabItemSpacing*/
    8192 | e.$$.dirty[2] & /*tabStyle*/
    4 && t(13, Pt = nn(w.item_spacing, Pt)), e.$$.dirty[0] & /*$jsonSeparator, $direction*/
    1572864 | e.$$.dirty[1] & /*separatorBackground*/
    1073741824 | e.$$.dirty[2] & /*$jsonSeparatorColor, $jsonSeparatorPaddings, separatorMargins*/
    1537 && Xe && (x && t(61, $t = dr(x, 1, $t)), Ce && t(62, Zt = is(Ce, Ae, Zt))), e.$$.dirty[1] & /*separatorBackground*/
    1073741824 | e.$$.dirty[2] & /*separatorMargins*/
    1 && t(38, k = {
      background: $t,
      margin: Zt
    }), e.$$.dirty[2] & /*$jsonSwipeEnabled*/
    256 && t(37, N = typeof U > "u" ? !0 : !!U), e.$$.dirty[0] & /*titlePadding*/
    16384 | e.$$.dirty[2] & /*$jsonTitlePaddings*/
    128 && t(14, Ee = ni(A || void 0, Ee)), e.$$.dirty[0] & /*delimitierStyle*/
    32768 | e.$$.dirty[2] & /*$jsonDelimiterStyle*/
    64 && t(15, sr = vm(T, sr)), e.$$.dirty[2] & /*$jsonTabStyle*/
    32 && ((z == null ? void 0 : z.animation_type) === "fade" || (z == null ? void 0 : z.animation_type) === "none") && t(16, rr = z.animation_type), e.$$.dirty[2] & /*$jsonTabStyle*/
    32 && Pn(z == null ? void 0 : z.animation_duration) && t(35, nr = z.animation_duration), e.$$.dirty[2] & /*items*/
    2 && mt(o), e.$$.dirty[0] & /*componentContext, hasError, selected*/
    131077 | e.$$.dirty[1] & /*prevId*/
    536870912 | e.$$.dirty[2] & /*items*/
    2 && ee.json && (Ke && (te.unregisterInstance(Ke), t(60, Ke = void 0)), ee.id && !$ && !ee.fakeElement && (t(60, Ke = ee.id), te.registerInstance(Ke, {
      setCurrentItem(Ge, st) {
        if (Ge < 0 || Ge > o.length - 1)
          throw new Error('Item is out of range in "set-current-item" action');
        er(Ge, !1, st);
      },
      setPreviousItem(Ge, st, Jt) {
        let Er = pt(p - Ge, st);
        er(Er, !1, Jt);
      },
      setNextItem(Ge, st, Jt) {
        let Er = pt(p + Ge, st);
        er(Er, !1, Jt);
      },
      scrollToStart(Ge) {
        er(0, !1, Ge);
      },
      scrollToEnd(Ge) {
        er(o.length - 1, !1, Ge);
      },
      scrollCombined({ step: Ge, overflow: st, animated: Jt }) {
        Ge && er(pt(p + Ge, st || "clamp"), !1, Jt || !0);
      }
    }))), e.$$.dirty[0] & /*componentContext, selected, animationType*/
    196609 | e.$$.dirty[2] & /*items*/
    2 && t(24, kt = {
      "height-parent": ((L = ee.json.height) == null ? void 0 : L.type) === "match_parent" ? "yes" : "",
      "own-height": (((je = ee.json.height) == null ? void 0 : je.type) === "match_parent" || ((We = ee.json.height) == null ? void 0 : We.type) === "fixed") && !(((zt = (P = (ke = o[p]) == null ? void 0 : ke.div) == null ? void 0 : P.height) == null ? void 0 : zt.type) === "wrap_content" && ((Lt = o[p].div) != null && Lt.height.constrained)),
      animation: rr
    });
  }, [
    ee,
    ce,
    $,
    Ne,
    it,
    Mt,
    de,
    lt,
    Et,
    It,
    nt,
    Q,
    At,
    Pt,
    Ee,
    sr,
    rr,
    p,
    B,
    Ae,
    Xe,
    ot,
    ct,
    rt,
    kt,
    ft,
    Z,
    ze,
    F,
    ut,
    Vt,
    He,
    ht,
    xe,
    Le,
    nr,
    fr,
    N,
    k,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    a,
    i,
    pe,
    we,
    Ue,
    Oe,
    Nt,
    Rt,
    kr,
    at,
    Gt,
    Qt,
    $e,
    ue,
    Ke,
    $t,
    Zt,
    o,
    w,
    s,
    n,
    z,
    T,
    A,
    U,
    Ce,
    x,
    vt,
    tr,
    Ht,
    yr
  ];
}
class Pm extends Or {
  constructor(r) {
    super(), Lr(this, r, Mm, Tm, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const Nm = "appkit-state", zm = "appkit-state_overflow_visible", Lm = "appkit-state__animations", ki = {
  state: Nm,
  state_overflow_visible: zm,
  state__animations: Lm,
  "state__animation-child": "appkit-state__animation-child",
  "state__animation-child-inner": "appkit-state__animation-child-inner"
};
function gl(e) {
  return e < 0.5 ? 4 * e * e * e : 0.5 * Math.pow(2 * e - 2, 3) + 1;
}
function Om(e) {
  return e * e * e;
}
function Pd(e) {
  const r = e - 1;
  return r * r * r + 1;
}
function Nd(e) {
  return (r) => {
    if (r <= 0)
      return 0;
    if (r >= 1)
      return 1;
    const t = r * e.length, n = Math.floor(t), o = e[n], i = e[n + 1], s = t - n;
    return o * s + i * (1 - s);
  };
}
const Bm = [
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
], Rm = Nd(Bm), Hm = [
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
], Wm = Nd(Hm), Gl = {
  linear: rl,
  ease: Rm,
  ease_in: Om,
  ease_out: Pd,
  ease_in_out: gl,
  spring: Wm
};
function ba(e) {
  return Gl[e];
}
const zd = 200, Ld = 0, Um = 0, Gm = 0;
function tc(e) {
  return Math.max(...e.map(
    (r) => (Number(r.duration) || zd) + (Number(r.start_delay) || Ld)
  ));
}
function Jm(e, {
  transitions: r,
  elementBbox: t,
  rootBbox: n,
  direction: o,
  maxDuration: i,
  alpha: s
}) {
  const a = s != null ? s : 1;
  return {
    duration: Oi() ? 0 : i,
    css: (l) => {
      const u = l * i, c = r.map((k) => {
        var Y, le, A;
        const N = Number(k.start_delay) || Ld, B = Number(k.duration) || zd, z = Math.max(0, Math.min(1, (u - N) / B)), oe = o === "in" ? 1 - z : z, T = (ba(k.interpolator || "ease_in_out") || gl)(oe);
        if (k.type === "fade")
          return T >= 1 ? {
            active: !1,
            opacity: 0
          } : {
            active: T > 0 && T < 1,
            opacity: (1 - T) * a + T * (k.alpha || Um)
          };
        if (k.type === "slide") {
          const D = k.edge === "top" || k.edge === "left" ? -1 : 1, M = k.edge === "top" || k.edge === "bottom" || !k.edge ? "translateY" : "translateX";
          let U = (Y = k.distance) == null ? void 0 : Y.value;
          U === void 0 && (k.edge === "top" || k.edge === "bottom" || !k.edge ? U = Math.abs(
            n[k.edge === "bottom" ? "bottom" : "top"] - t[k.edge === "bottom" ? "top" : "bottom"]
          ) : U = Math.abs(
            n[k.edge === "left" ? "left" : "right"] - t[k.edge === "left" ? "right" : "left"]
          ));
          const q = U * T;
          return {
            active: T > 0 && T < 1,
            translate: `${M}(${q * D}px)`
          };
        } else if (k.type === "scale") {
          const D = 1 - T + T * (k.scale || Gm), M = (le = k.pivot_x) != null ? le : 0.5, U = (A = k.pivot_y) != null ? A : 0.5, q = (1 - D) * t.width * M, be = (1 - D) * t.height * U;
          return {
            active: T > 0 && T < 1,
            scale: `translate(${q}px, ${be}px) scale(${D})`
          };
        }
        return {};
      }), f = c.map((k) => k.opacity).filter((k) => k !== void 0).reduce((k, N) => k * N, 1), _ = c.map((k) => k.translate).filter((k) => k !== void 0).join(" "), h = c.map((k) => k.scale).filter((k) => k !== void 0).join(" "), m = c.filter((k) => k.active).map((k) => k.scale).filter((k) => k !== void 0), p = m.length ? m[m.length - 1] : h;
      return `transform:${[_, p].filter(Boolean).join(" ") || "none"};opacity:${f}`;
    }
  };
}
function Uo(e, r, t) {
  return e * (1 - t) + r * t;
}
const Km = 200, qm = 0;
function Ym(e, {
  rootBbox: r,
  beforeBbox: t,
  afterBbox: n,
  transition: o
}) {
  var i, s;
  return {
    delay: (i = o.start_delay) != null ? i : qm,
    duration: Oi() ? 0 : (s = o.duration) != null ? s : Km,
    easing: o.interpolator && o.interpolator in Gl ? Gl[o.interpolator] : gl,
    css: (a) => [
      `top:${Uo(t.top, n.top, a) - r.top}px`,
      `left:${Uo(t.left, n.left, a) - r.left}px`,
      `width:${Uo(t.width, n.width, a)}px`,
      `height:${Uo(t.height, n.height, a)}px`
    ].join(";")
  };
}
function Od(e) {
  const r = [];
  return e.type === "set" ? (e.items || []).forEach((t) => {
    r.push(...Od(t));
  }) : r.push(e), r;
}
const { Map: Xm } = Po;
function rc(e, r, t) {
  const n = e.slice();
  return n[37] = r[t], n;
}
function Zm(e) {
  let r, t;
  return r = new Fn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Qm(e) {
  let r, t;
  const n = [
    {
      cls: gt(
        "state",
        ki,
        /*mods*/
        e[8]
      )
    },
    {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    },
    { layoutParams: (
      /*layoutParams*/
      e[1]
    ) },
    { parentOf: (
      /*parentOfItems*/
      e[9]
    ) },
    { parentOfSimpleMode: !0 },
    { replaceItems: (
      /*replaceItems*/
      e[12]
    ) },
    /*devapi*/
    e[11]
  ];
  let o = {
    $$slots: { default: [e0] },
    $$scope: { ctx: e }
  };
  for (let i = 0; i < n.length; i += 1)
    o = jo(o, n[i]);
  return r = new hn({ props: o }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(i, s) {
      Ot(r, i, s), t = !0;
    },
    p(i, s) {
      const a = s[0] & /*mods, componentContext, layoutParams, parentOfItems, replaceItems, devapi*/
      6915 ? No(n, [
        s[0] & /*mods*/
        256 && {
          cls: gt(
            "state",
            ki,
            /*mods*/
            i[8]
          )
        },
        s[0] & /*componentContext*/
        1 && {
          componentContext: (
            /*componentContext*/
            i[0]
          )
        },
        s[0] & /*layoutParams*/
        2 && { layoutParams: (
          /*layoutParams*/
          i[1]
        ) },
        s[0] & /*parentOfItems*/
        512 && { parentOf: (
          /*parentOfItems*/
          i[9]
        ) },
        n[4],
        s[0] & /*replaceItems*/
        4096 && { replaceItems: (
          /*replaceItems*/
          i[12]
        ) },
        s[0] & /*devapi*/
        2048 && yd(
          /*devapi*/
          i[11]
        )
      ]) : {};
      s[0] & /*animationRoot, animationList, selectedId, selectedComponentContext, childContexts*/
      248 | s[1] & /*$$scope*/
      4096 && (a.$$scope = { dirty: s, ctx: i }), r.$set(a);
    },
    i(i) {
      t || (W(r.$$.fragment, i), t = !0);
    },
    o(i) {
      ne(r.$$.fragment, i), t = !1;
    },
    d(i) {
      Bt(r, i);
    }
  };
}
function nc(e) {
  let r = (
    /*selectedId*/
    e[5]
  ), t, n, o = oc(e);
  return {
    c() {
      o.c(), t = or();
    },
    m(i, s) {
      o.m(i, s), K(i, t, s), n = !0;
    },
    p(i, s) {
      s[0] & /*selectedId*/
      32 && Sr(r, r = /*selectedId*/
      i[5]) ? (pr(), ne(o, 1, 1, v), gr(), o = oc(i), o.c(), W(o, 1), o.m(t.parentNode, t)) : o.p(i, s);
    },
    i(i) {
      n || (W(o), n = !0);
    },
    o(i) {
      ne(o), n = !1;
    },
    d(i) {
      i && J(t), o.d(i);
    }
  };
}
function oc(e) {
  let r, t;
  return r = new xn({
    props: {
      componentContext: (
        /*selectedComponentContext*/
        e[6]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*selectedComponentContext*/
      64 && (i.componentContext = /*selectedComponentContext*/
      n[6]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function xm(e) {
  let r, t, n, o, i, s, a, l;
  n = new xn({
    props: {
      componentContext: (
        /*item*/
        e[37].componentContextCopy
      )
    }
  });
  function u() {
    return (
      /*introend_handler_1*/
      e[22](
        /*item*/
        e[37]
      )
    );
  }
  return {
    c() {
      r = Pe("div"), t = Pe("div"), Wt(n.$$.fragment), o = _r(), g(t, "class", ki["state__animation-child-inner"]), g(r, "class", ki["state__animation-child"]);
    },
    m(c, f) {
      K(c, r, f), wt(r, t), Ot(n, t, null), wt(r, o), s = !0, a || (l = Qe(r, "introend", u), a = !0);
    },
    p(c, f) {
      e = c;
      const _ = {};
      f[0] & /*animationList*/
      16 && (_.componentContext = /*item*/
      e[37].componentContextCopy), n.$set(_);
    },
    i(c) {
      s || (W(n.$$.fragment, c), i || _o(() => {
        i = ul(
          r,
          Ym,
          /*item*/
          e[37]
        ), i.start();
      }), s = !0);
    },
    o(c) {
      ne(n.$$.fragment, c), s = !1;
    },
    d(c) {
      c && J(r), Bt(n), a = !1, l();
    }
  };
}
function $m(e) {
  let r, t, n, o, i, s = `${/*item*/
  e[37].offsetLeft}px`, a = `${/*item*/
  e[37].offsetTop}px`, l = `${/*item*/
  e[37].width}px`, u = `${/*item*/
  e[37].height}px`, c, f, _;
  n = new xn({
    props: {
      componentContext: (
        /*item*/
        e[37].componentContextCopy
      )
    }
  });
  function h() {
    return (
      /*introend_handler*/
      e[21](
        /*item*/
        e[37]
      )
    );
  }
  return {
    c() {
      r = Pe("div"), t = Pe("div"), Wt(n.$$.fragment), o = _r(), g(t, "class", ki["state__animation-child-inner"]), g(r, "class", ki["state__animation-child"]), I(r, "left", s), I(r, "top", a), I(r, "width", l), I(r, "height", u);
    },
    m(m, p) {
      K(m, r, p), wt(r, t), Ot(n, t, null), wt(r, o), c = !0, f || (_ = Qe(r, "introend", h), f = !0);
    },
    p(m, p) {
      e = m;
      const w = {};
      p[0] & /*animationList*/
      16 && (w.componentContext = /*item*/
      e[37].componentContextCopy), n.$set(w), p[0] & /*animationList*/
      16 && s !== (s = `${/*item*/
      e[37].offsetLeft}px`) && I(r, "left", s), p[0] & /*animationList*/
      16 && a !== (a = `${/*item*/
      e[37].offsetTop}px`) && I(r, "top", a), p[0] & /*animationList*/
      16 && l !== (l = `${/*item*/
      e[37].width}px`) && I(r, "width", l), p[0] & /*animationList*/
      16 && u !== (u = `${/*item*/
      e[37].height}px`) && I(r, "height", u);
    },
    i(m) {
      c || (W(n.$$.fragment, m), i || _o(() => {
        i = ul(
          r,
          Jm,
          /*item*/
          e[37]
        ), i.start();
      }), c = !0);
    },
    o(m) {
      ne(n.$$.fragment, m), c = !1;
    },
    d(m) {
      m && J(r), Bt(n), f = !1, _();
    }
  };
}
function ic(e, r) {
  let t, n, o, i, s;
  const a = [$m, xm], l = [];
  function u(c, f) {
    return "direction" in /*item*/
    c[37] ? 0 : 1;
  }
  return n = u(r), o = l[n] = a[n](r), {
    key: e,
    first: null,
    c() {
      t = or(), o.c(), i = or(), this.first = t;
    },
    m(c, f) {
      K(c, t, f), l[n].m(c, f), K(c, i, f), s = !0;
    },
    p(c, f) {
      r = c;
      let _ = n;
      n = u(r), n === _ ? l[n].p(r, f) : (pr(), ne(l[_], 1, 1, () => {
        l[_] = null;
      }), gr(), o = l[n], o ? o.p(r, f) : (o = l[n] = a[n](r), o.c()), W(o, 1), o.m(i.parentNode, i));
    },
    i(c) {
      s || (W(o), s = !0);
    },
    o(c) {
      ne(o), s = !1;
    },
    d(c) {
      c && (J(t), J(i)), l[n].d(c);
    }
  };
}
function e0(e) {
  let r, t, n, o = [], i = new Xm(), s, a = !1, l = (
    /*selectedComponentContext*/
    e[6] && nc(e)
  ), u = ur(
    /*animationList*/
    e[4]
  );
  const c = (f) => (
    /*item*/
    f[37]
  );
  for (let f = 0; f < u.length; f += 1) {
    let _ = rc(e, u, f), h = c(_);
    i.set(h, o[f] = ic(h, _));
  }
  return {
    c() {
      r = _r(), l && l.c(), t = _r(), n = Pe("div");
      for (let f = 0; f < o.length; f += 1)
        o[f].c();
      g(n, "class", ki.state__animations), g(n, "aria-hidden", "true");
    },
    m(f, _) {
      K(f, r, _), l && l.m(f, _), K(f, t, _), K(f, n, _);
      for (let h = 0; h < o.length; h += 1)
        o[h] && o[h].m(n, null);
      e[23](n), s = !0;
    },
    p(f, _) {
      /*selectedComponentContext*/
      f[6] ? l ? (l.p(f, _), _[0] & /*selectedComponentContext*/
      64 && W(l, 1)) : (l = nc(f), l.c(), W(l, 1), l.m(t.parentNode, t)) : l && (pr(), ne(l, 1, 1, () => {
        l = null;
      }), gr()), _[0] & /*animationList, onOutro*/
      8208 && (u = ur(
        /*animationList*/
        f[4]
      ), pr(), o = bd(o, _, c, 1, f, u, i, n, md, ic, null, rc), gr());
    },
    i(f) {
      if (!s) {
        W(a), W(l);
        for (let _ = 0; _ < u.length; _ += 1)
          W(o[_]);
        s = !0;
      }
    },
    o(f) {
      ne(a), ne(l);
      for (let _ = 0; _ < o.length; _ += 1)
        ne(o[_]);
      s = !1;
    },
    d(f) {
      f && (J(r), J(t), J(n)), l && l.d(f);
      for (let _ = 0; _ < o.length; _ += 1)
        o[_].d();
      e[23](null);
    }
  };
}
function t0(e) {
  let r, t, n, o;
  const i = [Qm, Zm], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[2] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = or();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (t && (pr(), ne(s[c], 1, 1, () => {
        s[c] = null;
      }), gr()), ~r ? (t = s[r], t ? t.p(l, u) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      ne(t), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function r0(e) {
  return e.some((r) => r.type === "fade");
}
function Bd(e) {
  return e.type === "change_bounds" ? e : e.type === "set" ? Bd(e.items[0]) : null;
}
function n0(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _, h = v, m = () => (h(), h = E(i, (pe) => t(20, _ = pe)), i);
  e.$$.on_destroy.push(() => h());
  let { componentContext: p } = r, { layoutParams: w = void 0 } = r;
  const k = Tr(Xr);
  let N = !1, B, z = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Set(), fe = [], T = [], Y = [], le = [], A, D, M, U, q = !1, be;
  function Ae() {
    t(15, q = !1);
  }
  function Ce(pe) {
    M && M.destroy(), t(6, M = pe != null && pe.div ? p.produceChildContext(pe.div, {
      path: pe.state_id || "<unknown>"
    }) : void 0);
  }
  function he(pe) {
    const me = p.json.states;
    if (!me)
      return;
    const _e = /* @__PURE__ */ new Set();
    t(16, u = me.map((ee, ce) => (u[ce].div !== pe[ce] && ee.state_id && _e.add(ee.state_id), { ...ee, div: pe[ce] }))), t(0, p.json = { ...p.json, states: u }, p), D && _e.has(D) && Ce(u.find((ee) => ee.state_id === D) || null);
  }
  function Fe(pe, me, _e) {
    let { json: ee, parentComponentContext: ce, transitions: te, node: we } = me;
    ee = p.getJsonWithVars(ee), te = p.getJsonWithVars(te);
    const Ue = Od(te), Ke = me.bbox || we.getBoundingClientRect(), $ = {
      ...ee,
      margins: void 0,
      alpha: r0(Ue) ? void 0 : ee.alpha
    };
    return {
      id: ce.id || "",
      json: $,
      componentContextCopy: ce.produceChildContext($, { fake: Ra }),
      elementBbox: Ke,
      rootBbox: pe,
      transitions: Ue,
      alpha: ee.alpha,
      width: Ke.width,
      height: Ke.height,
      offsetTop: Ke.top - pe.top,
      offsetLeft: Ke.left - pe.left,
      direction: _e,
      resolvePromise: me.resolvePromise,
      node: me.node
    };
  }
  async function x(pe) {
    if (D === pe)
      return p;
    k.setRunning("stateChange", !0);
    const me = new Set(oe);
    fe.forEach(($) => {
      $.resolvePromise && $.resolvePromise();
    }), t(4, fe = []);
    let _e = [];
    if (B) {
      const $ = B.getBoundingClientRect();
      _e = Y.map((Oe) => Fe($, Oe, "out"));
    }
    le.forEach(($) => {
      $.transitions && z.set($.id, {
        transitions: $.transitions,
        rect: $.node.getBoundingClientRect()
      });
    }), T = [], Y = [], le = [];
    const ee = u.find(($) => $.state_id === pe) || null;
    if (ee ? (t(5, D = pe), a == null || a.setValue(D), Ce(ee)) : p.logError(X(new Error("Cannot find state with id"), { additional: { stateId: pe } })), await An(), !B)
      return;
    const ce = B.getBoundingClientRect();
    let te = T.filter(($) => {
      var Oe;
      return $.parentComponentContext.id && !me.has($.parentComponentContext.id) ? !0 : ((Oe = $.resolvePromise) == null || Oe.call($), !1);
    }).map(($) => Fe(ce, $, "in"));
    _e = _e.filter(($) => {
      var Oe;
      return $.id && !oe.has($.id) ? !0 : ((Oe = $.resolvePromise) == null || Oe.call($), !1);
    });
    const we = _e.concat(te), Ue = we.reduce(
      ($, Oe) => Math.max($, tc(Oe.transitions)),
      0
    ), Ke = le.filter(($) => z.has($.id)).map(($) => {
      const Oe = {
        ...$.json,
        margins: void 0,
        width: { type: "match_parent" },
        height: { type: "match_parent" }
      }, Ne = z.get($.id);
      return {
        id: $.parentComponentContext.id || "",
        json: Oe,
        componentContextCopy: $.parentComponentContext.produceChildContext(Oe, { fake: Ra }),
        rootBbox: ce,
        beforeBbox: Ne.rect,
        afterBbox: $.node.getBoundingClientRect(),
        node: $.node,
        transition: p.getJsonWithVars(Bd(Ne.transitions)),
        resolvePromise: $.resolvePromise
      };
    });
    return t(4, fe = [
      ...we.map(($) => ({ ...$, maxDuration: Ue })),
      ...Ke
    ]), z.clear(), k.setRunning("stateChange", !1), p;
  }
  hi(_a, {
    // eslint-disable-next-line max-params
    runVisibilityTransition(pe, me, _e, ee, ce, te) {
      if (!B)
        return Promise.resolve();
      const we = B.getBoundingClientRect(), Ue = Fe(
        we,
        {
          json: pe,
          parentComponentContext: me,
          transitions: _e,
          node: ee,
          bbox: te
        },
        ce
      ), Ke = tc(Ue.transitions), $ = { ...Ue, maxDuration: Ke };
      return t(4, fe = [...fe.filter((Oe) => Oe.node !== Ue.node), $]), new Promise((Oe) => {
        $.resolvePromise = Oe;
      });
    },
    registerChildWithTransitionIn(pe, me, _e, ee) {
      const ce = {
        json: pe,
        parentComponentContext: me,
        transitions: _e,
        node: ee
      };
      return T.push(ce), new Promise((te) => {
        ce.resolvePromise = te;
      });
    },
    registerChildWithTransitionOut(pe, me, _e, ee) {
      const ce = {
        json: pe,
        parentComponentContext: me,
        transitions: _e,
        node: ee
      };
      return Y.push(ce), new Promise((te) => {
        ce.resolvePromise = te;
      });
    },
    registerChildWithTransitionChange(pe, me, _e, ee) {
      const ce = me.id;
      if (!ce)
        return Promise.resolve();
      const te = {
        id: ce,
        json: pe,
        parentComponentContext: me,
        transitions: _e,
        node: ee
      };
      return le.push(te), new Promise((we) => {
        te.resolvePromise = we;
      });
    },
    hasTransitionChange(pe) {
      return pe ? z.has(pe) : !1;
    },
    registerChild(pe) {
      oe.add(pe);
    },
    unregisterChild(pe) {
      oe.delete(pe);
    }
  });
  function Je(pe) {
    if (!q && (t(15, q = !0), pe.length)) {
      const me = (a == null ? void 0 : a.getValue()) || o;
      if (me) {
        t(5, D = me);
        const _e = pe.find((ee) => ee.state_id === D) || null;
        Ce(_e), _e || p.logError(X(new Error("Cannot find state for default_state_id"), { additional: { selectedId: D } }));
      } else {
        const _e = pe[0];
        t(5, D = _e.state_id), Ce(_e);
      }
      a && (a.setValue(D), a.subscribe((_e) => {
        x(_e);
      }));
    }
  }
  function Ye(pe) {
    t(4, fe = fe.filter((me) => me !== pe)), pe.resolvePromise && pe.resolvePromise();
  }
  ln(() => {
    M && M.destroy(), A && (A(), t(14, A = void 0));
  });
  const Xe = (pe) => Ye(pe), ye = (pe) => Ye(pe);
  function Ie(pe) {
    Fr[pe ? "unshift" : "push"](() => {
      B = pe, t(3, B);
    });
  }
  return e.$$set = (pe) => {
    "componentContext" in pe && t(0, p = pe.componentContext), "layoutParams" in pe && t(1, w = pe.layoutParams);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*componentContext*/
    1 && t(17, n = p.json.div_id || p.id), e.$$.dirty[0] & /*componentContext*/
    1 && (o = p.getJsonWithVars(p.json.default_state_id)), e.$$.dirty[0] & /*componentContext*/
    1 && m(t(10, i = p.getDerivedFromVars(p.json.clip_to_bounds))), e.$$.dirty[0] & /*componentContext*/
    1 && t(19, s = p.json.state_id_variable), e.$$.dirty[0] & /*stateVariableName, componentContext*/
    524289 && (a = s ? p.getVariable(s, "string") || k.awaitGlobalVariable(s, "string", "") : null), e.$$.dirty[0] & /*componentContext*/
    1 && t(18, l = p.origJson), e.$$.dirty[0] & /*origJson*/
    262144 && l && Ae(), e.$$.dirty[0] & /*stateId, componentContext*/
    131073 && (n ? t(2, N = !1) : (t(2, N = !0), p.logError(X(new Error('Missing "id" prop for div "state"'))))), e.$$.dirty[0] & /*componentContext*/
    1 && p.json && (oe = /* @__PURE__ */ new Set()), e.$$.dirty[0] & /*componentContext*/
    1 && t(16, u = Array.isArray(p.json.states) && p.json.states || []), e.$$.dirty[0] & /*items*/
    65536 && t(9, c = u.map((pe) => {
      var me;
      return { json: pe.div, id: (me = pe.div) == null ? void 0 : me.id };
    })), e.$$.dirty[0] & /*items, componentContext*/
    65537 && (u != null && u.length ? t(2, N = !1) : (t(2, N = !0), p.logError(X(new Error('Empty "states" prop for div "state"'))))), e.$$.dirty[0] & /*componentContext, stateUnregister, stateId*/
    147457 && p.json && (A && (A(), t(14, A = void 0)), n && !(p != null && p.fakeElement) && t(14, A = p.registerState(n, x))), e.$$.dirty[0] & /*inited, items*/
    98304 && !q && Je(u), e.$$.dirty[0] & /*$jsonClipToBounds*/
    1048576 && t(8, f = {
      overflow: _ === !1 || _ === 0 ? "visible" : void 0
    });
  }, [
    p,
    w,
    N,
    B,
    fe,
    D,
    M,
    U,
    f,
    c,
    i,
    be,
    he,
    Ye,
    A,
    q,
    u,
    n,
    l,
    s,
    _,
    Xe,
    ye,
    Ie
  ];
}
class o0 extends Or {
  constructor(r) {
    super(), Lr(this, r, n0, t0, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const i0 = "appkit-pager", s0 = "appkit-pager__items", l0 = "appkit-pager_animated", a0 = "appkit-pager__item", u0 = "appkit-pager_clip", c0 = "appkit-pager_orientation_horizontal", f0 = "appkit-pager_orientation_vertical", d0 = "appkit-pager__item_height_content", _0 = "appkit-pager__item_height_fixed", p0 = "appkit-pager__item_width_content", g0 = "appkit-pager__item_width_fixed", h0 = "appkit-pager__arrow", Mo = {
  pager: i0,
  pager__items: s0,
  pager_animated: l0,
  pager__item: a0,
  "pager_scroll-align_start": "appkit-pager_scroll-align_start",
  "pager_scroll-align_center": "appkit-pager_scroll-align_center",
  "pager_scroll-align_end": "appkit-pager_scroll-align_end",
  pager_clip: u0,
  pager_orientation_horizontal: c0,
  pager_orientation_vertical: f0,
  "pager_cross-align_center": "appkit-pager_cross-align_center",
  "pager_cross-align_end": "appkit-pager_cross-align_end",
  pager__item_height_content: d0,
  pager__item_height_fixed: _0,
  "pager__item_height-constrained": "appkit-pager__item_height-constrained",
  pager__item_width_content: p0,
  pager__item_width_fixed: g0,
  "pager__item_width-constrained": "appkit-pager__item_width-constrained",
  pager__arrow: h0,
  "pager__arrow-icon-path": "appkit-pager__arrow-icon-path"
}, { window: m0 } = Po;
function sc(e, r, t) {
  const n = e.slice();
  return n[95] = r[t], n;
}
function b0(e) {
  let r, t;
  return r = new Fn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function y0(e) {
  let r, t;
  return r = new hn({
    props: {
      cls: gt(
        "pager",
        Mo,
        /*mods*/
        e[13]
      ),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      customPaddings: !0,
      parentOf: (
        /*items*/
        e[3]
      ),
      replaceItems: (
        /*replaceItems*/
        e[30]
      ),
      $$slots: { default: [v0] },
      $$scope: { ctx: e }
    }
  }), r.$on(
    "pointerdown",
    /*onPointerDown*/
    e[35]
  ), r.$on(
    "wheel",
    /*onWheel*/
    e[36]
  ), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      8192 && (i.cls = gt(
        "pager",
        Mo,
        /*mods*/
        n[13]
      )), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*items*/
      8 && (i.parentOf = /*items*/
      n[3]), o[0] & /*$direction, hasScrollRight, shouldCheckArrows, hasScrollLeft, $jsonRestrictParentScroll, style, pagerItemsWrapper, visibleItems, orientation, childLayoutParams*/
      16801492 | o[3] & /*$$scope*/
      32 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function lc(e) {
  let r, t, n, o, i, s, a;
  return t = new xn({
    props: {
      componentContext: (
        /*item*/
        e[95].componentContext
      ),
      layoutParams: (
        /*childLayoutParams*/
        e[9]
      )
    }
  }), {
    c() {
      r = Pe("div"), Wt(t.$$.fragment), n = _r(), g(r, "class", o = gt("pager__item", Mo, cc(
        /*orientation*/
        e[2],
        /*item*/
        e[95]
      ))), g(r, "role", "tabpanel"), g(r, "id", i = /*instId*/
      e[26] + "-panel-" + /*item*/
      e[95].index), g(r, "aria-labelledby", s = /*instId*/
      e[26] + "-tab-" + /*item*/
      e[95].index);
    },
    m(l, u) {
      K(l, r, u), Ot(t, r, null), wt(r, n), a = !0;
    },
    p(l, u) {
      const c = {};
      u[0] & /*visibleItems*/
      16 && (c.componentContext = /*item*/
      l[95].componentContext), u[0] & /*childLayoutParams*/
      512 && (c.layoutParams = /*childLayoutParams*/
      l[9]), t.$set(c), (!a || u[0] & /*orientation, visibleItems*/
      20 && o !== (o = gt("pager__item", Mo, cc(
        /*orientation*/
        l[2],
        /*item*/
        l[95]
      )))) && g(r, "class", o), (!a || u[0] & /*visibleItems*/
      16 && i !== (i = /*instId*/
      l[26] + "-panel-" + /*item*/
      l[95].index)) && g(r, "id", i), (!a || u[0] & /*visibleItems*/
      16 && s !== (s = /*instId*/
      l[26] + "-tab-" + /*item*/
      l[95].index)) && g(r, "aria-labelledby", s);
    },
    i(l) {
      a || (W(t.$$.fragment, l), a = !0);
    },
    o(l) {
      ne(t.$$.fragment, l), a = !1;
    },
    d(l) {
      l && J(r), Bt(t);
    }
  };
}
function ac(e) {
  let r, t, n, o = !/*leftClass*/
  e[27] && w0();
  return {
    c() {
      r = Pe("div"), o && o.c(), g(
        r,
        "class",
        /*leftClass*/
        e[27] || `${Mo.pager__arrow} ${go.arrow} ${go.arrow_left}`
      );
    },
    m(i, s) {
      K(i, r, s), o && o.m(r, null), t || (n = Qe(
        r,
        "click",
        /*click_handler*/
        e[70]
      ), t = !0);
    },
    p: v,
    d(i) {
      i && J(r), o && o.d(), t = !1, n();
    }
  };
}
function w0(e) {
  let r, t;
  return {
    c() {
      r = rn("svg"), t = rn("path"), g(t, "class", Mo["pager__arrow-icon-path"]), g(t, "d", "m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"), g(r, "class", go.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      K(n, r, o), wt(r, t);
    },
    d(n) {
      n && J(r);
    }
  };
}
function uc(e) {
  let r, t, n, o = !/*rightClass*/
  e[28] && k0();
  return {
    c() {
      r = Pe("div"), o && o.c(), g(
        r,
        "class",
        /*rightClass*/
        e[28] || `${Mo.pager__arrow} ${go.arrow} ${go.arrow_right}`
      );
    },
    m(i, s) {
      K(i, r, s), o && o.m(r, null), t || (n = Qe(
        r,
        "click",
        /*click_handler_1*/
        e[71]
      ), t = !0);
    },
    p: v,
    d(i) {
      i && J(r), o && o.d(), t = !1, n();
    }
  };
}
function k0(e) {
  let r, t;
  return {
    c() {
      r = rn("svg"), t = rn("path"), g(t, "class", Mo["pager__arrow-icon-path"]), g(t, "d", "M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"), g(r, "class", go.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      K(n, r, o), wt(r, t);
    },
    d(n) {
      n && J(r);
    }
  };
}
function v0(e) {
  let r, t, n, o, i, s, a, l, u, c = ur(
    /*visibleItems*/
    e[4]
  ), f = [];
  for (let p = 0; p < c.length; p += 1)
    f[p] = lc(sc(e, c, p));
  const _ = (p) => ne(f[p], 1, 1, () => {
    f[p] = null;
  });
  let h = (
    /*hasScrollLeft*/
    e[11] && /*shouldCheckArrows*/
    e[12] && ac(e)
  ), m = (
    /*hasScrollRight*/
    e[10] && /*shouldCheckArrows*/
    e[12] && uc(e)
  );
  return {
    c() {
      r = Pe("div");
      for (let p = 0; p < f.length; p += 1)
        f[p].c();
      o = _r(), h && h.c(), i = _r(), m && m.c(), s = or(), g(r, "class", t = Mo.pager__items + " " + /*$jsonRestrictParentScroll*/
      (e[24] ? Ar["root_restrict-scroll"] : "")), g(r, "style", n = cr(
        /*style*/
        e[14]
      ));
    },
    m(p, w) {
      K(p, r, w);
      for (let k = 0; k < f.length; k += 1)
        f[k] && f[k].m(r, null);
      e[69](r), K(p, o, w), h && h.m(p, w), K(p, i, w), m && m.m(p, w), K(p, s, w), a = !0, l || (u = [
        Qe(
          r,
          "transitionend",
          /*onTransitionEnd*/
          e[37]
        ),
        Qe(
          r,
          "focus",
          /*onFocus*/
          e[33],
          !0
        ),
        Qe(
          r,
          "click",
          /*onItemsClick*/
          e[34],
          !0
        )
      ], l = !0);
    },
    p(p, w) {
      if (w[0] & /*orientation, visibleItems, instId, childLayoutParams*/
      67109396) {
        c = ur(
          /*visibleItems*/
          p[4]
        );
        let k;
        for (k = 0; k < c.length; k += 1) {
          const N = sc(p, c, k);
          f[k] ? (f[k].p(N, w), W(f[k], 1)) : (f[k] = lc(N), f[k].c(), W(f[k], 1), f[k].m(r, null));
        }
        for (pr(), k = c.length; k < f.length; k += 1)
          _(k);
        gr();
      }
      (!a || w[0] & /*$jsonRestrictParentScroll*/
      16777216 && t !== (t = Mo.pager__items + " " + /*$jsonRestrictParentScroll*/
      (p[24] ? Ar["root_restrict-scroll"] : ""))) && g(r, "class", t), (!a || w[0] & /*style*/
      16384 && n !== (n = cr(
        /*style*/
        p[14]
      ))) && g(r, "style", n), /*hasScrollLeft*/
      p[11] && /*shouldCheckArrows*/
      p[12] ? h ? h.p(p, w) : (h = ac(p), h.c(), h.m(i.parentNode, i)) : h && (h.d(1), h = null), /*hasScrollRight*/
      p[10] && /*shouldCheckArrows*/
      p[12] ? m ? m.p(p, w) : (m = uc(p), m.c(), m.m(s.parentNode, s)) : m && (m.d(1), m = null);
    },
    i(p) {
      if (!a) {
        for (let w = 0; w < c.length; w += 1)
          W(f[w]);
        a = !0;
      }
    },
    o(p) {
      f = f.filter(Boolean);
      for (let w = 0; w < f.length; w += 1)
        ne(f[w]);
      a = !1;
    },
    d(p) {
      p && (J(r), J(o), J(i), J(s)), un(f, p), e[69](null), h && h.d(p), m && m.d(p), l = !1, Rr(u);
    }
  };
}
function j0(e) {
  let r, t, n, o, i, s;
  const a = [y0, b0], l = [];
  function u(c, f) {
    return (
      /*hasError*/
      c[5] ? -1 : 0
    );
  }
  return ~(r = u(e)) && (t = l[r] = a[r](e)), {
    c() {
      t && t.c(), n = or();
    },
    m(c, f) {
      ~r && l[r].m(c, f), K(c, n, f), o = !0, i || (s = Qe(
        m0,
        "resize",
        /*resnap*/
        e[38]
      ), i = !0);
    },
    p(c, f) {
      let _ = r;
      r = u(c), r === _ ? ~r && l[r].p(c, f) : (t && (pr(), ne(l[_], 1, 1, () => {
        l[_] = null;
      }), gr()), ~r ? (t = l[r], t ? t.p(c, f) : (t = l[r] = a[r](c), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(c) {
      o || (W(t), o = !0);
    },
    o(c) {
      ne(t), o = !1;
    },
    d(c) {
      c && J(n), ~r && l[r].d(c), i = !1, s();
    }
  };
}
const ps = {
  wrap_content: "content",
  fixed: "fixed",
  match_parent: "parent"
}, yo = 2, C0 = 400, E0 = 8;
function cc(e, r) {
  var n, o, i, s;
  if (e === "horizontal") {
    const a = ((n = r.height) == null ? void 0 : n.type) || "";
    return {
      height: a in ps ? ps[a] : "content",
      "height-constrained": ((o = r.height) == null ? void 0 : o.type) === "wrap_content" ? Zr(r.height.constrained, !1) : !1
    };
  }
  const t = ((i = r.width) == null ? void 0 : i.type) || "";
  return {
    width: t in ps ? ps[t] : "parent",
    "width-constrained": ((s = r.width) == null ? void 0 : s.type) === "wrap_content" ? Zr(r.width.constrained, !1) : !1
  };
}
function A0(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, B, z, oe, fe, T, Y = v, le = () => (Y(), Y = E(c, (j) => t(60, T = j)), c), A, D = v, M = () => (D(), D = E(i, (j) => t(61, A = j)), i), U, q = v, be = () => (q(), q = E(f, (j) => t(62, U = j)), f), Ae, Ce = v, he = () => (Ce(), Ce = E(l, (j) => t(63, Ae = j)), l), Fe, x = v, Je = () => (x(), x = E(a, (j) => t(64, Fe = j)), a), Ye, Xe = v, ye = () => (Xe(), Xe = E(s, (j) => t(65, Ye = j)), s), Ie, pe = v, me = () => (pe(), pe = E(ze, (j) => t(66, Ie = j)), ze), _e, ee = v, ce = () => (ee(), ee = E(o, (j) => t(67, _e = j)), o), te, we = v, Ue = () => (we(), we = E(_, (j) => t(68, te = j)), _), Ke, $ = v, Oe = () => ($(), $ = E(u, (j) => t(24, Ke = j)), u);
  e.$$.on_destroy.push(() => Y()), e.$$.on_destroy.push(() => D()), e.$$.on_destroy.push(() => q()), e.$$.on_destroy.push(() => Ce()), e.$$.on_destroy.push(() => x()), e.$$.on_destroy.push(() => Xe()), e.$$.on_destroy.push(() => pe()), e.$$.on_destroy.push(() => ee()), e.$$.on_destroy.push(() => we()), e.$$.on_destroy.push(() => $());
  let { componentContext: Ne } = r, { layoutParams: ot = void 0 } = r;
  const ct = Tr(Xr), rt = ct.direction;
  mn(e, rt, (j) => t(6, oe = j));
  const kt = ct.genId("pager"), it = ct.getCustomization("pagerLeftClass"), Mt = ct.getCustomization("pagerRightClass"), ft = ct.isDesktop;
  mn(e, ft, (j) => t(59, fe = j));
  let Z, de, lt = !1, ze, F = 0, Et = 0, ut = !1, Vt = "horizontal", It = "0em", nt = {}, Q = "", At = "", Pt = "", $t = {}, Zt = "start", Ee = "center", He = [], ht = 0, Te = [], xe = {}, Le = {}, Ft, Be, bt = 0, Ut = !1, Tt = !1, ir = !1, De = !1, jt = 0, sr = "", rr = 0, nr;
  function fr() {
    t(43, nt = {}), t(9, $t = {}), t(47, Zt = "start"), t(48, Ee = "center"), t(52, Ut = !1), t(53, Tt = !1), De = !1;
  }
  function wr(j) {
    t(0, Ne = t(51, Ft = {
      ...Ne,
      json: {
        ...Ne.json,
        items: j.filter(zo)
      }
    }));
  }
  function Nt(j, ie) {
    Be && Be.update({
      instId: kt,
      currentItem: Le[ie],
      size: j,
      scrollToPagerItem(d) {
        er(xe[d]);
      }
    });
  }
  function br(j) {
    var d;
    if (j === Et || (Et = j, !He[j]))
      return;
    const ie = (d = He[j].json) == null ? void 0 : d.selected_actions;
    ie != null && ie.length && Ne.execAnyActions(ie);
  }
  function Rt(j) {
    const ie = Tt ? !1 : j === 0, d = Tt ? !1 : j === Te.length - 1, L = Vt === "horizontal", je = de.children[j + (Tt ? yo : 0)];
    if (!je)
      return 0;
    const We = L ? "offsetLeft" : "offsetTop", ke = L ? "offsetWidth" : "offsetHeight", P = at(), zt = Br(), Lt = ar(), Ge = St();
    return P >= Ge + zt + Lt || ie ? 0 : d ? (P - zt - Lt - Ge) * (oe === "rtl" ? -1 : 1) : Ee === "start" && oe === "ltr" || Ee === "end" && oe === "rtl" ? -(je[We] - zt) : Ee === "end" && oe === "ltr" || Ee === "start" && oe === "rtl" ? -(je[We] + je[ke] - P + Lt) : de[ke] / 2 - (je[We] + je[ke] / 2);
  }
  function mt(j, ie) {
    if (!de)
      return;
    const d = Rt(j);
    t(54, ir = ie), An().then(() => {
      var L;
      jt = d, t(55, sr = se(jt)), t(40, F = (L = xe[j]) != null ? L : 0), De = Tt && (j < 0 || j >= ht);
    });
  }
  function er(j, ie = !0) {
    var d;
    mt((d = Le[j]) != null ? d : 0, ie);
  }
  function se(j) {
    return `${Vt === "horizontal" ? "translateX" : "translateY"}(${cn(j)})`;
  }
  function kr(j, ie) {
    return Tt && j >= -yo && j < ht + yo ? j : j > Te.length - 1 ? ie === "ring" ? Vo(j, Te.length) : Te.length - 1 : j < 0 ? ie === "ring" ? Vo(j, Te.length) : 0 : j;
  }
  function vr(j, ie, d) {
    const L = kr(Le[F] - j, ie);
    mt(L, d);
  }
  function Ct(j, ie, d) {
    const L = kr(Le[F] + j, ie);
    mt(L, d);
  }
  function Dr() {
    Be == null || Be.destroy(), Be = void 0, Z && (ct.unregisterInstance(Z), Z = void 0), Ne.fakeElement || (Be = Ne.registerPager(Ne.id || void 0)), Ne.id && !Ne.fakeElement && (Z = Ne.id, ct.registerInstance(
      Z,
      {
        setCurrentItem(j, ie) {
          if (j < 0 || j > He.length - 1)
            throw new Error('Item is out of range in "set-current-item" action');
          er(j, ie);
        },
        setPreviousItem: vr,
        setNextItem: Ct,
        scrollToStart(j) {
          er(Te[Tt ? yo : 0].index, j);
        },
        scrollToEnd(j) {
          er(Te[Te.length - 1 - (Tt ? yo : 0)].index, j);
        },
        scrollCombined({ step: j, overflow: ie, animated: d }) {
          j && er(kr(Le[F] + j, ie || "clamp"), d);
        }
      },
      "warn"
    ));
  }
  function Br() {
    var ie, d, L;
    return Vt === "horizontal" ? (d = (ie = nt.start) != null ? ie : oe === "ltr" ? nt.left : nt.right) != null ? d : 0 : (L = nt.top) != null ? L : 0;
  }
  function ar() {
    var ie, d, L;
    return Vt === "horizontal" ? (d = (ie = nt.end) != null ? ie : oe === "ltr" ? nt.right : nt.left) != null ? d : 0 : (L = nt.bottom) != null ? L : 0;
  }
  function at() {
    var ie, d;
    return de ? Vt === "horizontal" ? ((ie = de.parentElement) == null ? void 0 : ie.offsetWidth) || 0 : ((d = de.parentElement) == null ? void 0 : d.offsetHeight) || 0 : 0;
  }
  function St() {
    const j = Vt === "horizontal", ie = Array.from(de.children), d = ie[0].getBoundingClientRect(), L = ie[ie.length - 1].getBoundingClientRect();
    return j ? oe === "rtl" ? d.right - L.left : L.right - d.left : L.bottom - d.top;
  }
  function Gt(j) {
    const ie = j.target;
    if (!(ie instanceof Element) || !de)
      return;
    let d = ie;
    for (; d.parentElement && d.parentElement !== de; )
      d = d.parentElement;
    if (!d)
      return;
    const L = Array.from(de.children).indexOf(d);
    if (L < 0)
      return;
    const je = L - (Tt ? yo : 0);
    mt(je, !0);
  }
  function Qt(j) {
    Date.now() - rr < 300 && (j.preventDefault(), j.stopImmediatePropagation());
  }
  function $e(j) {
    if (!ct.pagerMouseDragEnabled && j.pointerType === "mouse")
      return;
    const ie = Vt === "horizontal", d = ie ? j.pageX : j.pageY, L = jt, je = at() - Br() - ar(), We = St(), ke = Date.now(), P = (Lt) => {
      const Ge = ie ? Lt.pageX : Lt.pageY;
      let st = L + Ge - d;
      if (!Tt) {
        if (oe === "rtl") {
          if (st < 0)
            st = st * je / (st + je * 3);
          else if (st + je > We) {
            let Jt = st + je - We;
            Jt = Jt * je / (Jt + je * 3), st = -je + We + Jt;
          }
        } else if (oe === "ltr") {
          if (st > 0)
            st = st * je / (st + je * 3);
          else if (-st + je > We) {
            let Jt = -st + je - We;
            Jt = Jt * je / (Jt + je * 3), st = je - We - Jt;
          }
        }
      }
      jt = st, t(55, sr = se(jt)), Lt.preventDefault();
    }, zt = (Lt) => {
      nr == null || nr(), nr = void 0;
      const Ge = Math.min(512, je), st = Math.abs(L - jt);
      if (st < E0) {
        mt(Le[F], !0);
        return;
      }
      Lt.preventDefault(), rr = Date.now();
      const Jt = Math.min(1, (Date.now() - ke) / 750);
      let Er = Le[F];
      st > Ge / 4 * Jt && (Er += (L > jt ? 1 : -1) * (oe === "rtl" ? -1 : 1)), Tt || (Er >= Te.length ? Er = Te.length - 1 : Er < 0 && (Er = 0)), mt(Er, !0);
    };
    window.addEventListener("pointermove", P), window.addEventListener("pointerup", zt), window.addEventListener("pointercancel", zt), nr == null || nr(), nr = () => {
      window.removeEventListener("pointermove", P), window.removeEventListener("pointerup", zt), window.removeEventListener("pointercancel", zt);
    };
  }
  function pt(j) {
    if (!j.deltaX || Math.abs(j.deltaX) < Math.abs(j.deltaY))
      return;
    const ie = Date.now();
    if (ie - bt < C0)
      return;
    bt = ie, (oe === "rtl" ? -1 : 1) * j.deltaX > 0 ? Ct(1, "clamp", !0) : vr(1, "clamp", !0);
  }
  function ue() {
    t(54, ir = !1), De && An().then(() => {
      er(F, !1);
    });
  }
  function vt() {
    An().then(() => {
      er(F, !1);
    });
  }
  Qn(() => {
    t(39, lt = !0), de && er(F, !1);
  }), ln(() => {
    t(39, lt = !1), nr == null || nr(), He.forEach((j) => {
      j.destroy();
    }), Z && (ct.unregisterInstance(Z), Z = void 0), Be == null || Be.destroy(), Be = void 0;
  });
  function tr(j) {
    Fr[j ? "unshift" : "push"](() => {
      de = j, t(7, de);
    });
  }
  const Ht = () => (oe === "ltr" ? vr : Ct)(1, "clamp", !0), yr = () => (oe === "ltr" ? Ct : vr)(1, "clamp", !0);
  return e.$$set = (j) => {
    "componentContext" in j && t(0, Ne = j.componentContext), "layoutParams" in j && t(1, ot = j.layoutParams);
  }, e.$$.update = () => {
    var j, ie, d, L, je;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(58, n = Ne.origJson), e.$$.dirty[1] & /*origJson*/
    134217728 && n && fr(), e.$$.dirty[0] & /*componentContext*/
    1 && ce(t(23, o = typeof ((j = Ne.json.item_builder) == null ? void 0 : j.data) == "string" ? Ne.getDerivedFromVars((ie = Ne.json.item_builder) == null ? void 0 : ie.data, void 0, !0) : (d = Ne.json.item_builder) != null && d.data ? Jo(Ne.json.item_builder.data) : void 0)), e.$$.dirty[0] & /*componentContext*/
    1 && M(t(22, i = Ne.getDerivedFromVars(Ne.json.layout_mode))), e.$$.dirty[0] & /*componentContext*/
    1 && ye(t(21, s = Ne.getDerivedFromVars(Ne.json.orientation))), e.$$.dirty[0] & /*componentContext*/
    1 && Je(t(20, a = Ne.getDerivedFromVars(Ne.json.item_spacing))), e.$$.dirty[0] & /*componentContext*/
    1 && he(t(19, l = Ne.getDerivedFromVars(Ne.json.paddings))), e.$$.dirty[0] & /*componentContext*/
    1 && Oe(t(18, u = Ne.getDerivedFromVars(Ne.json.restrict_parent_scroll))), e.$$.dirty[0] & /*componentContext*/
    1 && le(t(17, c = Ne.getDerivedFromVars(Ne.json.cross_axis_alignment))), e.$$.dirty[0] & /*componentContext*/
    1 && be(t(16, f = Ne.getDerivedFromVars(Ne.json.scroll_axis_alignment))), e.$$.dirty[0] & /*componentContext*/
    1 && Ue(t(15, _ = Ne.getDerivedFromVars(Ne.json.infinite_scroll))), e.$$.dirty[1] & /*infinite*/
    2097152 | e.$$.dirty[2] & /*$jsonInfiniteScroll*/
    64 && t(52, Ut = Zr(te, Ut)), e.$$.dirty[0] & /*componentContext, items*/
    9 | e.$$.dirty[1] & /*prevContext*/
    1048576 | e.$$.dirty[2] & /*$jsonItemBuilderData*/
    32) {
      let We = [];
      if (Ne.json.item_builder && Array.isArray(_e) && Array.isArray(Ne.json.item_builder.prototypes)) {
        const Lt = Ne.json.item_builder;
        We = pl(_e, ct, Ne, Lt);
      } else
        We = (Array.isArray(Ne.json.items) && Ne.json.items || []).map((Lt, Ge) => ({
          div: Lt,
          key: Lt.id || { index: Ge, data: Lt }
        }));
      const ke = new Set(He), P = /* @__PURE__ */ new Map();
      let zt = !1;
      Ft === Ne && He.forEach((Lt) => {
        Lt.key && (typeof Lt.key == "string" && P.has(Lt.key) ? zt || (zt = !0, Ne.logError(X(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: Lt.key } }))) : P.set(
          typeof Lt.key == "string" ? Lt.key : Lt.key.index,
          Lt
        ));
      }), t(3, He = We.map((Lt, Ge) => {
        let st = !zt && P.get(Lt.id), Jt = P.get(Ge);
        return !st && !Lt.id && typeof Lt.key == "object" && typeof (Jt == null ? void 0 : Jt.key) == "object" && Gi(Jt.key.data, Lt.key.data) && (st = Jt), st ? (ke.delete(st), st) : Ne.produceChildContext(Lt.div, {
          path: Ge,
          variables: Lt.vars,
          id: Lt.id,
          key: Lt.key
        });
      }));
      for (const Lt of ke)
        Lt.destroy();
      t(51, Ft = Ne);
    }
    if (e.$$.dirty[0] & /*items, componentContext*/
    9) {
      let We = [];
      He.forEach((ke) => {
        We.push(Ne.getDerivedFromVars({
          width: ke.json.width,
          height: ke.json.height,
          visibility: ke.json.visibility
        }));
      }), me(t(8, ze = Ui(We, (ke) => [...ke])));
    }
    if (e.$$.dirty[0] & /*items, visibleItems*/
    24 | e.$$.dirty[1] & /*infinite*/
    2097152 | e.$$.dirty[2] & /*$childStore*/
    16) {
      if (t(50, Le = {}), xe = {}, t(4, Te = Ie.map((We, ke) => ({
        width: We.width,
        height: We.height,
        index: ke,
        componentContext: He[ke]
      })).filter((We, ke) => Ie[ke].visibility !== "gone")), Te.forEach((We, ke) => {
        xe[ke] = We.index, t(50, Le[We.index] = ke, Le);
      }), t(49, ht = Te.length), Ut && Te.length >= yo) {
        const We = Te.slice(0, yo).map((P) => ({
          ...P,
          componentContext: P.componentContext.dup(oi),
          duplicate: !0
        })), ke = Te.slice(Te.length - yo).map((P) => ({
          ...P,
          componentContext: P.componentContext.dup(oi),
          duplicate: !0
        }));
        We.forEach((P, zt) => {
          xe[Te.length + zt] = zt;
        }), ke.forEach((P, zt) => {
          xe[zt - yo] = Te.length - yo + zt;
        }), t(4, Te = [].concat(ke, Te, We)), t(53, Tt = !0);
      } else
        t(53, Tt = !1);
      vt();
    }
    if (e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*$jsonLayoutMode*/
    1073741824 && (A ? A.type !== "percentage" && A.type !== "fixed" && A.type !== "wrap_content" ? (t(41, ut = !0), Ne.logError(X(new Error('Incorrect value of "layout_mode.type" for div "pager"')))) : t(41, ut = !1) : (t(41, ut = !0), Ne.logError(X(new Error('Empty "layout_mode" prop for div "pager"'))))), e.$$.dirty[0] & /*orientation*/
    4 | e.$$.dirty[2] & /*$jsonOrientation*/
    8 && t(2, Vt = ma(Ye, Vt)), e.$$.dirty[2] & /*$jsonItemSpacing*/
    4) {
      const We = Fe == null ? void 0 : Fe.value;
      We && Pn(We) && t(42, It = cn(We || 0));
    }
    if (e.$$.dirty[0] & /*$direction*/
    64 | e.$$.dirty[1] & /*paddingObj*/
    4096 | e.$$.dirty[2] & /*$jsonPaddings*/
    2 && (t(43, nt = ni(Ae, nt)), t(44, Q = so(nt, oe))), e.$$.dirty[0] & /*orientation*/
    4 && t(57, h = Vt === "horizontal" ? "grid-auto-columns" : "grid-auto-rows"), e.$$.dirty[0] & /*orientation*/
    4 && t(56, m = Vt === "horizontal" ? "grid-template-columns" : "grid-template-rows"), e.$$.dirty[2] & /*$jsonScrollAxisAlignment*/
    1 && (U === "start" || U === "center" || U === "end") && (t(48, Ee = U), vt()), e.$$.dirty[0] & /*orientation, $direction, visibleItems*/
    84 | e.$$.dirty[1] & /*paddingObj, $jsonLayoutMode, scrollAxisAlignment, itemSpacing*/
    1073879040) {
      const We = cn(Vt === "horizontal" ? (nt == null ? void 0 : nt.start) || (oe === "ltr" ? nt == null ? void 0 : nt.left : nt == null ? void 0 : nt.right) || 0 : (nt == null ? void 0 : nt.top) || 0), ke = cn(Vt === "horizontal" ? (nt == null ? void 0 : nt.end) || (oe === "ltr" ? nt == null ? void 0 : nt.right : nt == null ? void 0 : nt.left) || 0 : (nt == null ? void 0 : nt.bottom) || 0);
      if ((A == null ? void 0 : A.type) === "fixed") {
        const P = ((L = A.neighbour_page_width) == null ? void 0 : L.value) || 0;
        Ee === "center" ? t(45, At = `calc(100% + ${We} + ${ke} - 2 * ${cn(P)} - 2 * ${It})`) : Ee === "start" ? t(45, At = `calc(100% + ${ke} - ${cn(P)} - ${It})`) : t(45, At = `calc(100% + ${We} - ${cn(P)} - ${It})`), t(46, Pt = "");
      } else if ((A == null ? void 0 : A.type) === "percentage") {
        let P = (je = A.page_width) == null ? void 0 : je.value;
        (typeof P != "number" || P < 0) && (P = 100), t(45, At = `calc(${(P / 100).toFixed(2)} * (100% + ${We} + ${ke}))`), t(46, Pt = "");
      } else (A == null ? void 0 : A.type) === "wrap_content" && (t(45, At = ""), t(46, Pt = Te.map((P) => {
        var Ge, st;
        const zt = P[Vt === "horizontal" ? "width" : "height"];
        if ((zt == null ? void 0 : zt.type) === "fixed" || (zt == null ? void 0 : zt.type) === "wrap_content")
          return "minmax(max-content, auto)";
        let Lt = "100%";
        return (zt == null ? void 0 : zt.type) === "match_parent" && (Pn((Ge = zt.max_size) == null ? void 0 : Ge.value) && (Lt = `min(${Lt}, ${cn(zt.max_size.value)})`), Pn((st = zt.min_size) == null ? void 0 : st.value) && (Lt = `max(${Lt}, ${cn(zt.min_size.value)})`)), Lt;
      }).join(" ")));
    }
    if (e.$$.dirty[0] & /*orientation*/
    4 | e.$$.dirty[1] & /*$jsonCrossAxisAlignment, crossAxisAlignment*/
    536936448 && (T === "start" || T === "center" || T === "end") && (t(47, Zt = T), t(9, $t = {
      [Vt === "horizontal" ? "parentVAlign" : "parentHAlign"]: Zt
    })), e.$$.dirty[1] & /*itemSpacing, padding, gridAutoSizeProp, autoSizeVal, gridTemplateSizeProp, templateSizeVal, transformStr*/
    117499904 && t(14, p = {
      "grid-gap": It,
      padding: Q,
      [h]: At,
      [m]: Pt,
      transform: sr
    }), e.$$.dirty[0] & /*orientation*/
    4 | e.$$.dirty[1] & /*animated, crossAxisAlignment, scrollAxisAlignment*/
    8585216 && t(13, w = {
      animated: ir,
      clip: ct.pagerChildrenClipEnabled,
      orientation: Vt,
      "cross-align": Zt,
      "scroll-align": Ee
    }), e.$$.dirty[1] & /*hasLayoutModeError*/
    1024 && t(5, k = ut), e.$$.dirty[0] & /*hasError*/
    32 | e.$$.dirty[1] & /*$isDesktop, mounted*/
    268435712 && t(12, N = fe && lt && !k), e.$$.dirty[0] & /*componentContext, items*/
    9 && Ne.json) {
      const We = Ne.getJsonWithVars(Ne.json.default_item);
      typeof We == "number" && We >= 0 && We < He.length && (t(40, F = Et = We), Nt(He.length, We)), Dr();
    }
    e.$$.dirty[0] & /*$direction, visibleItems*/
    80 | e.$$.dirty[1] & /*hasDuplicates, allToVisibleMap, currentItem*/
    4719104 && t(11, B = Tt || (oe === "ltr" ? Le[F] > 0 : Le[F] + 1 < Te.length)), e.$$.dirty[0] & /*$direction, visibleItems*/
    80 | e.$$.dirty[1] & /*hasDuplicates, allToVisibleMap, currentItem*/
    4719104 && t(10, z = Tt || (oe === "ltr" ? Le[F] + 1 < Te.length : Le[F] > 0)), e.$$.dirty[1] & /*visibleItemsWithOutDuplicates, currentItem*/
    262656 && Nt(ht, F), e.$$.dirty[1] & /*currentItem*/
    512 && br(F);
  }, [
    Ne,
    ot,
    Vt,
    He,
    Te,
    k,
    oe,
    de,
    ze,
    $t,
    z,
    B,
    N,
    w,
    p,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    Ke,
    rt,
    kt,
    it,
    Mt,
    ft,
    wr,
    vr,
    Ct,
    Gt,
    Qt,
    $e,
    pt,
    ue,
    vt,
    lt,
    F,
    ut,
    It,
    nt,
    Q,
    At,
    Pt,
    Zt,
    Ee,
    ht,
    Le,
    Ft,
    Ut,
    Tt,
    ir,
    sr,
    m,
    h,
    n,
    fe,
    T,
    A,
    U,
    Ae,
    Fe,
    Ye,
    Ie,
    _e,
    te,
    tr,
    Ht,
    yr
  ];
}
class S0 extends Or {
  constructor(r) {
    super(), Lr(this, r, A0, j0, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const V0 = "appkit-indicator", F0 = "appkit-indicator_visible", D0 = "appkit-indicator__scroller", I0 = "appkit-indicator__items", T0 = "appkit-indicator__item", M0 = "appkit-indicator_placement_default", P0 = "appkit-indicator__item_active", N0 = "appkit-indicator_direction_ltr", z0 = "appkit-indicator_direction_rtl", L0 = "appkit-indicator_placement_stretch", vi = {
  indicator: V0,
  indicator_visible: F0,
  indicator__scroller: D0,
  indicator__items: I0,
  indicator__item: T0,
  indicator_placement_default: M0,
  indicator__item_active: P0,
  indicator_direction_ltr: N0,
  indicator_direction_rtl: z0,
  indicator_placement_stretch: L0
};
function fc(e, r, t) {
  const n = e.slice();
  n[43] = r[t], n[46] = t;
  const o = (
    /*index*/
    n[46] === /*pagerData*/
    n[8].currentItem
  );
  return n[44] = o, n;
}
function dc(e) {
  let r, t = ur(Array(
    /*pagerData*/
    e[8].size
  )), n = [];
  for (let o = 0; o < t.length; o += 1)
    n[o] = _c(fc(e, t, o));
  return {
    c() {
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      r = or();
    },
    m(o, i) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(o, i);
      K(o, r, i);
    },
    p(o, i) {
      if (i[0] & /*pagerData, onIndicatorItemClick, onIndicatorItemKeydown*/
      6291712) {
        t = ur(Array(
          /*pagerData*/
          o[8].size
        ));
        let s;
        for (s = 0; s < t.length; s += 1) {
          const a = fc(o, t, s);
          n[s] ? n[s].p(a, i) : (n[s] = _c(a), n[s].c(), n[s].m(r.parentNode, r));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = t.length;
      }
    },
    d(o) {
      o && J(r), un(n, o);
    }
  };
}
function _c(e) {
  let r, t, n, o, i, s, a, l;
  function u() {
    return (
      /*click_handler*/
      e[34](
        /*index*/
        e[46]
      )
    );
  }
  return {
    c() {
      r = Pe("div"), g(r, "class", t = gt("indicator__item", vi, { active: (
        /*isActiveItem*/
        e[44]
      ) }) + " " + Ar.root__clickable), g(r, "role", "tab"), g(r, "id", n = /*pagerData*/
      e[8].instId + "-tab-" + /*index*/
      e[46]), g(r, "aria-controls", o = /*pagerData*/
      e[8].instId + "-panel-" + /*index*/
      e[46]), g(r, "aria-selected", i = /*isActiveItem*/
      e[44] ? "true" : "false"), g(r, "tabindex", s = /*isActiveItem*/
      e[44] ? 0 : -1);
    },
    m(c, f) {
      K(c, r, f), a || (l = [
        Qe(r, "click", u),
        Qe(
          r,
          "keydown",
          /*onIndicatorItemKeydown*/
          e[22]
        )
      ], a = !0);
    },
    p(c, f) {
      e = c, f[0] & /*pagerData*/
      256 && t !== (t = gt("indicator__item", vi, { active: (
        /*isActiveItem*/
        e[44]
      ) }) + " " + Ar.root__clickable) && g(r, "class", t), f[0] & /*pagerData*/
      256 && n !== (n = /*pagerData*/
      e[8].instId + "-tab-" + /*index*/
      e[46]) && g(r, "id", n), f[0] & /*pagerData*/
      256 && o !== (o = /*pagerData*/
      e[8].instId + "-panel-" + /*index*/
      e[46]) && g(r, "aria-controls", o), f[0] & /*pagerData*/
      256 && i !== (i = /*isActiveItem*/
      e[44] ? "true" : "false") && g(r, "aria-selected", i), f[0] & /*pagerData*/
      256 && s !== (s = /*isActiveItem*/
      e[44] ? 0 : -1) && g(r, "tabindex", s);
    },
    d(c) {
      c && J(r), a = !1, Rr(l);
    }
  };
}
function O0(e) {
  let r, t, n = (
    /*pagerData*/
    e[8] && dc(e)
  );
  return {
    c() {
      r = Pe("div"), t = Pe("div"), n && n.c(), g(t, "class", vi.indicator__items), g(t, "role", "tablist"), I(
        t,
        "margin",
        /*placement*/
        e[4] === "default" ? `0 ${ge(Math.max(
          0,
          /*activeStyle*/
          e[2].width - /*inactiveStyle*/
          e[3].width
        ) / 2)}` : ""
      ), I(t, "--divkit-indicator-inactive-width", ge(
        /*inactiveStyle*/
        e[3].width
      )), I(t, "--divkit-indicator-inactive-height", ge(
        /*inactiveStyle*/
        e[3].height
      )), I(t, "--divkit-indicator-inactive-border-radius", ge(
        /*inactiveStyle*/
        e[3].borderRadius
      )), I(
        t,
        "--divkit-indicator-inactive-background",
        /*inactiveStyle*/
        e[3].background || ""
      ), I(
        t,
        "--divkit-indicator-inactive-box-shadow",
        /*inactiveStyle*/
        e[3].boxShadow || ""
      ), I(t, "--divkit-indicator-active-width", ge(
        /*activeStyle*/
        e[2].width
      )), I(t, "--divkit-indicator-active-height", ge(
        /*activeStyle*/
        e[2].height
      )), I(t, "--divkit-indicator-active-border-radius", ge(
        /*activeStyle*/
        e[2].borderRadius
      )), I(
        t,
        "--divkit-indicator-active-background",
        /*activeStyle*/
        e[2].background || ""
      ), I(
        t,
        "--divkit-indicator-active-box-shadow",
        /*activeStyle*/
        e[2].boxShadow || ""
      ), I(
        t,
        "--divkit-indicator-active-scale",
        /*activeStyle*/
        e[2].width / /*inactiveStyle*/
        e[3].width
      ), I(
        t,
        "--divkit-indicator-default-margin",
        /*placement*/
        e[4] === "default" ? `0 ${ge(
          /*spaceBetweenCenters*/
          (e[5] - /*inactiveStyle*/
          e[3].width) / 2
        )}` : ""
      ), I(
        t,
        "--divkit-indicator-stretch-margin",
        /*placement*/
        e[4] === "stretch" ? ge(
          /*itemSpacing*/
          e[7]
        ) : ""
      ), I(
        t,
        "--divkit-indicator-stretch-max-count",
        /*placement*/
        e[4] === "stretch" ? (
          /*maxVisibleItems*/
          e[6]
        ) : ""
      ), I(
        t,
        "--divkit-indicator-stretch-max-spacer",
        /*placement*/
        e[4] === "stretch" ? ge(
          /*maxVisibleItems*/
          (e[6] - 1) * /*itemSpacing*/
          e[7]
        ) : ""
      ), g(r, "class", vi.indicator__scroller);
    },
    m(o, i) {
      K(o, r, i), wt(r, t), n && n.m(t, null), e[35](t), e[36](r);
    },
    p(o, i) {
      /*pagerData*/
      o[8] ? n ? n.p(o, i) : (n = dc(o), n.c(), n.m(t, null)) : n && (n.d(1), n = null), i[0] & /*placement, activeStyle, inactiveStyle*/
      28 && I(
        t,
        "margin",
        /*placement*/
        o[4] === "default" ? `0 ${ge(Math.max(
          0,
          /*activeStyle*/
          o[2].width - /*inactiveStyle*/
          o[3].width
        ) / 2)}` : ""
      ), i[0] & /*inactiveStyle*/
      8 && I(t, "--divkit-indicator-inactive-width", ge(
        /*inactiveStyle*/
        o[3].width
      )), i[0] & /*inactiveStyle*/
      8 && I(t, "--divkit-indicator-inactive-height", ge(
        /*inactiveStyle*/
        o[3].height
      )), i[0] & /*inactiveStyle*/
      8 && I(t, "--divkit-indicator-inactive-border-radius", ge(
        /*inactiveStyle*/
        o[3].borderRadius
      )), i[0] & /*inactiveStyle*/
      8 && I(
        t,
        "--divkit-indicator-inactive-background",
        /*inactiveStyle*/
        o[3].background || ""
      ), i[0] & /*inactiveStyle*/
      8 && I(
        t,
        "--divkit-indicator-inactive-box-shadow",
        /*inactiveStyle*/
        o[3].boxShadow || ""
      ), i[0] & /*activeStyle*/
      4 && I(t, "--divkit-indicator-active-width", ge(
        /*activeStyle*/
        o[2].width
      )), i[0] & /*activeStyle*/
      4 && I(t, "--divkit-indicator-active-height", ge(
        /*activeStyle*/
        o[2].height
      )), i[0] & /*activeStyle*/
      4 && I(t, "--divkit-indicator-active-border-radius", ge(
        /*activeStyle*/
        o[2].borderRadius
      )), i[0] & /*activeStyle*/
      4 && I(
        t,
        "--divkit-indicator-active-background",
        /*activeStyle*/
        o[2].background || ""
      ), i[0] & /*activeStyle*/
      4 && I(
        t,
        "--divkit-indicator-active-box-shadow",
        /*activeStyle*/
        o[2].boxShadow || ""
      ), i[0] & /*activeStyle, inactiveStyle*/
      12 && I(
        t,
        "--divkit-indicator-active-scale",
        /*activeStyle*/
        o[2].width / /*inactiveStyle*/
        o[3].width
      ), i[0] & /*placement, spaceBetweenCenters, inactiveStyle*/
      56 && I(
        t,
        "--divkit-indicator-default-margin",
        /*placement*/
        o[4] === "default" ? `0 ${ge(
          /*spaceBetweenCenters*/
          (o[5] - /*inactiveStyle*/
          o[3].width) / 2
        )}` : ""
      ), i[0] & /*placement, itemSpacing*/
      144 && I(
        t,
        "--divkit-indicator-stretch-margin",
        /*placement*/
        o[4] === "stretch" ? ge(
          /*itemSpacing*/
          o[7]
        ) : ""
      ), i[0] & /*placement, maxVisibleItems*/
      80 && I(
        t,
        "--divkit-indicator-stretch-max-count",
        /*placement*/
        o[4] === "stretch" ? (
          /*maxVisibleItems*/
          o[6]
        ) : ""
      ), i[0] & /*placement, maxVisibleItems, itemSpacing*/
      208 && I(
        t,
        "--divkit-indicator-stretch-max-spacer",
        /*placement*/
        o[4] === "stretch" ? ge(
          /*maxVisibleItems*/
          (o[6] - 1) * /*itemSpacing*/
          o[7]
        ) : ""
      );
    },
    d(o) {
      o && J(r), n && n.d(), e[35](null), e[36](null);
    }
  };
}
function B0(e) {
  let r, t;
  return r = new hn({
    props: {
      cls: gt(
        "indicator",
        vi,
        /*mods*/
        e[11]
      ),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: { default: [O0] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = gt(
        "indicator",
        vi,
        /*mods*/
        n[11]
      )), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*scroller, indicatorItemsWrapper, placement, activeStyle, inactiveStyle, spaceBetweenCenters, itemSpacing, maxVisibleItems, pagerData*/
      2044 | o[1] & /*$$scope*/
      65536 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
const Il = ["rounded_rectangle", "circle"];
function R0(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p = v, w = () => (p(), p = E(c, (de) => t(26, m = de)), c), k, N = v, B = () => (N(), N = E(f, (de) => t(27, k = de)), f), z, oe = v, fe = () => (oe(), oe = E(i, (de) => t(28, z = de)), i), T, Y = v, le = () => (Y(), Y = E(s, (de) => t(29, T = de)), s), A, D = v, M = () => (D(), D = E(o, (de) => t(30, A = de)), o), U, q = v, be = () => (q(), q = E(a, (de) => t(31, U = de)), a), Ae, Ce = v, he = () => (Ce(), Ce = E(u, (de) => t(32, Ae = de)), u), Fe, x = v, Je = () => (x(), x = E(l, (de) => t(33, Fe = de)), l);
  e.$$.on_destroy.push(() => p()), e.$$.on_destroy.push(() => N()), e.$$.on_destroy.push(() => oe()), e.$$.on_destroy.push(() => Y()), e.$$.on_destroy.push(() => D()), e.$$.on_destroy.push(() => q()), e.$$.on_destroy.push(() => Ce()), e.$$.on_destroy.push(() => x());
  let { componentContext: Ye } = r, { layoutParams: Xe = void 0 } = r;
  const Ie = Tr(Xr).direction;
  mn(e, Ie, (de) => t(25, h = de));
  let pe = {
    width: 13,
    height: 13,
    borderRadius: 6.5,
    background: "#ffdc60"
  }, me = {
    width: 10,
    height: 10,
    borderRadius: 5,
    background: "#33919cb5"
  }, _e = "default", ee = 15, ce = 10, te = 5, we, Ue, Ke, $, Oe = !1;
  function Ne() {
    t(4, _e = "default"), t(5, ee = 15), t(6, ce = 10), t(7, te = 5), t(2, pe = {
      width: 13,
      height: 13,
      borderRadius: 6.5,
      background: "#ffdc60"
    }), t(3, me = {
      width: 10,
      height: 10,
      borderRadius: 5,
      background: "#33919cb5"
    });
  }
  async function ot(de) {
    if (t(8, Ke = de), await An(), Ue) {
      const lt = Ue.children[Ke.currentItem];
      if (lt) {
        const ze = lt.offsetLeft;
        we.scroll({
          left: ze - we.clientWidth / 2,
          behavior: "smooth"
        });
      }
    }
  }
  function ct(de) {
    de !== Ke.currentItem && Ke.scrollToPagerItem(de);
  }
  function rt(de) {
    if (de.ctrlKey || de.shiftKey || de.altKey || de.metaKey)
      return;
    const { size: lt, currentItem: ze } = Ke;
    if (de.which === Dd) {
      const F = ze - 1 < 0 ? ze : ze - 1;
      kt(F);
    } else if (de.which === Id) {
      const F = ze + 1 >= lt ? ze : ze + 1;
      kt(F);
    } else if (de.which === Td)
      kt(0);
    else if (de.which === Md)
      kt(lt - 1);
    else
      return;
    de.preventDefault();
  }
  async function kt(de) {
    Ke.scrollToPagerItem(de), await An();
    const lt = Ue.querySelector(`.${vi.indicator__item_active}`);
    lt && lt.focus();
  }
  function it() {
    $ == null || $(), $ = void 0;
    const de = Ye.json.pager_id;
    $ = Ye.listenPager(de, ot);
  }
  Qn(() => {
    t(23, Oe = !0);
  }), ln(() => {
    t(23, Oe = !1), $ == null || $(), $ = void 0;
  });
  const Mt = (de) => ct(de);
  function ft(de) {
    Fr[de ? "unshift" : "push"](() => {
      Ue = de, t(10, Ue);
    });
  }
  function Z(de) {
    Fr[de ? "unshift" : "push"](() => {
      we = de, t(9, we);
    });
  }
  return e.$$set = (de) => {
    "componentContext" in de && t(0, Ye = de.componentContext), "layoutParams" in de && t(1, Xe = de.layoutParams);
  }, e.$$.update = () => {
    var de, lt;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(24, n = Ye.origJson), e.$$.dirty[0] & /*origJson*/
    16777216 && n && Ne(), e.$$.dirty[0] & /*origJson, mounted*/
    25165824 && n && Oe && it(), e.$$.dirty[0] & /*componentContext*/
    1 && M(t(19, o = Ye.getDerivedFromVars(Ye.json.shape))), e.$$.dirty[0] & /*componentContext*/
    1 && fe(t(18, i = Ye.getDerivedFromVars(Ye.json.active_item_color))), e.$$.dirty[0] & /*componentContext*/
    1 && le(t(17, s = Ye.getDerivedFromVars(Ye.json.inactive_item_color))), e.$$.dirty[0] & /*componentContext*/
    1 && be(t(16, a = Ye.getDerivedFromVars(Ye.json.active_item_size))), e.$$.dirty[0] & /*componentContext*/
    1 && Je(t(15, l = Ye.getDerivedFromVars(Ye.json.active_shape))), e.$$.dirty[0] & /*componentContext*/
    1 && he(t(14, u = Ye.getDerivedFromVars(Ye.json.inactive_shape))), e.$$.dirty[0] & /*componentContext*/
    1 && w(t(13, c = Ye.getDerivedFromVars(Ye.json.space_between_centers))), e.$$.dirty[0] & /*componentContext*/
    1 && B(t(12, f = Ye.getDerivedFromVars(Ye.json.items_placement))), e.$$.dirty[0] & /*activeStyle, inactiveStyle, $jsonShape, $jsonInactiveItemColor, $jsonActiveItemColor*/
    1879048204 | e.$$.dirty[1] & /*$jsonActiveShape, $jsonInactiveShape, $jsonActiveItemSize*/
    7 && (Fe && t(2, pe = uo(
      {
        type: "shape_drawable",
        shape: Fe
      },
      Il,
      pe
    )), Ae && t(3, me = uo(
      {
        type: "shape_drawable",
        shape: Ae
      },
      Il,
      me
    )), !Fe && !Ae && A)) {
      const ze = Rn(U, 1.3);
      t(3, me = uo(
        {
          type: "shape_drawable",
          shape: A,
          color: me.background
        },
        Il,
        me
      )), t(3, me.background = dr(T, 1, me.background), me), t(2, pe = {
        ...me,
        width: me.width * ze,
        height: me.height * ze,
        borderRadius: me.borderRadius * ze,
        background: pe.background
      }), t(2, pe.background = dr(z, 1, pe.background), pe);
    }
    if (e.$$.dirty[0] & /*$jsonItemsPlacement, placement, spaceBetweenCenters, maxVisibleItems, itemSpacing, $jsonSpaceBetweenCenters*/
    201326832)
      if (k && (k.type === "default" || k.type === "stretch")) {
        if (t(4, _e = k.type), _e === "default")
          t(5, ee = nn((de = k.space_between_centers) == null ? void 0 : de.value, ee));
        else if (_e === "stretch") {
          const ze = k;
          t(6, ce = Rn(ze.max_visible_items, ce)), t(7, te = nn((lt = ze.item_spacing) == null ? void 0 : lt.value, te));
        }
      } else
        t(4, _e = "default"), m && t(5, ee = nn(m.value, ee));
    e.$$.dirty[0] & /*placement, $direction, pagerData*/
    33554704 && t(11, _ = {
      placement: _e,
      direction: h,
      visible: (Ke == null ? void 0 : Ke.size) > 1
    });
  }, [
    Ye,
    Xe,
    pe,
    me,
    _e,
    ee,
    ce,
    te,
    Ke,
    we,
    Ue,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    Ie,
    ct,
    rt,
    Oe,
    n,
    h,
    m,
    k,
    z,
    T,
    A,
    U,
    Ae,
    Fe,
    Mt,
    ft,
    Z
  ];
}
class H0 extends Or {
  constructor(r) {
    super(), Lr(this, r, R0, B0, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const W0 = "appkit-slider", U0 = "appkit-slider__input", G0 = "appkit-slider__input_secondary", J0 = "appkit-slider__thumb", K0 = "appkit-slider_direction_rtl", q0 = "appkit-slider__thumb_secondary", Y0 = "appkit-slider__track", X0 = "appkit-slider__tick", Z0 = "appkit-slider__tick_active", Q0 = "appkit-slider__tick_inactive", Jr = {
  slider: W0,
  slider__input: U0,
  slider__input_secondary: G0,
  slider__thumb: J0,
  slider_direction_rtl: K0,
  slider__thumb_secondary: q0,
  "slider__tracks-wrapper": "appkit-slider__tracks-wrapper",
  "slider__tracks-inner": "appkit-slider__tracks-inner",
  "slider__tracks-ranges": "appkit-slider__tracks-ranges",
  "slider__tracks-ranges_rtl": "appkit-slider__tracks-ranges_rtl",
  slider__track: Y0,
  "slider__thumb-text": "appkit-slider__thumb-text",
  "slider__thumb-text_secondary": "appkit-slider__thumb-text_secondary",
  slider__tick: X0,
  slider__tick_active: Z0,
  slider__tick_inactive: Q0
};
function pc(e, r, t) {
  var a, l;
  if (!e || !e.font_size)
    return t;
  const n = e.offset, o = e.text_color && dr(e.text_color) || "#000", i = ii(e.font_weight, e.font_weight_value, void 0), s = wi(e.font_variation_settings) || void 0;
  if (Tn(e.font_size) && o !== "transparent") {
    const u = {
      fontSize: ge(e.font_size),
      fontWeight: i,
      fontVariationSettings: s,
      textColor: o
    };
    return typeof ((a = n == null ? void 0 : n.x) == null ? void 0 : a.value) == "number" && typeof ((l = n == null ? void 0 : n.y) == null ? void 0 : l.value) == "number" && (u.offset = {
      x: n.x.value,
      y: n.y.value
    }), e.font_family && typeof e.font_family == "string" && (u.fontFamily = r(e.font_family, {
      fontWeight: i
    }) || ""), u;
  }
}
function Fo(e, r, t) {
  return Math.max(r, Math.min(t, Number(e)));
}
function ya(e) {
  return BigInt(e);
}
const as = ya("9223372036854775807"), us = ya("-9223372036854775808");
function gn(e) {
  const r = ya(e);
  if (r > as || r < us)
    throw new Error("Integer overflow.");
  return r;
}
const ji = gn(0);
function Rd(e) {
  let r = e;
  return r < 0 && (r = -r), r;
}
function Hd(e) {
  let r = 0;
  return e > 0 ? r = 1 : e < 0 && (r = -1), gn(r);
}
function oo(e, r) {
  var t;
  switch ((t = r[e.type]) == null || t.call(r, e), e.type) {
    case "TemplateLiteral":
      e.expressions.forEach((n) => {
        oo(n, r);
      });
      break;
    case "BinaryExpression":
    case "LogicalExpression":
      oo(e.left, r), oo(e.right, r);
      break;
    case "UnaryExpression":
      oo(e.argument, r);
      break;
    case "ConditionalExpression":
      oo(e.test, r), oo(e.consequent, r), oo(e.alternate, r);
      break;
    case "TryExpression":
      oo(e.test, r), oo(e.alternate, r);
      break;
    case "CallExpression":
      e.arguments.forEach((n) => {
        oo(n, r);
      });
      break;
    case "MethodExpression":
      oo(e.object, r), e.arguments.forEach((n) => {
        oo(n, r);
      });
      break;
  }
}
const x0 = 2147483647, $0 = -2147483648, e1 = Number.MAX_VALUE, t1 = Number.MIN_VALUE, qe = "string", Re = "integer", yt = "number", Kr = "boolean", _n = "color", to = "url", Nr = "datetime", hr = "dict", mr = "array", r1 = "function";
class wa extends Error {
}
function Ys(e) {
  return e.type === "url" || e.type === "color" ? {
    type: "string",
    value: e.value
  } : e;
}
function Wd(e) {
  return e.toISOString().replace("T", " ").replace(/\.\d{3}Z$/, "");
}
function Ei(e, r) {
  if (e.type === "string")
    return e.value;
  if (e.type === "integer")
    return String(e.value);
  if (e.type === "number") {
    let t = String(e.value);
    return t.includes(".") || (t.includes("e") ? t = t.replace("e", ".0e") : t += ".0"), t = t.replace(/e\+?/i, "E"), t;
  } else {
    if (e.type === "boolean")
      return e.value ? "true" : "false";
    if (e.type === "datetime")
      return Wd(e.value);
    if (e.type === "color")
      return Si(hl(e.value));
    if (e.type === "url")
      return e.value;
    if ((e.type === "dict" || e.type === "array") && r)
      return JSON.stringify(e.value);
    if (e.type === "dict")
      return "<dict>";
    if (e.type === "array")
      return "<array>";
    if (e.type === "function")
      return e.value[0].name || "Function";
  }
  throw new Error(`Unexpected type ${e.type}`);
}
function pn(e) {
  let r = Ei(e, !1);
  return e.type === "string" && (r = "'" + r.replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'"), r;
}
function Zn(e) {
  return e === "datetime" ? "DateTime" : e.charAt(0).toUpperCase() + e.substring(1);
}
function Ai(e, r) {
  return gn(r);
}
function zn(e, r) {
  if (r < us || r > as)
    throw new Error("Integer overflow.");
}
function ho(e) {
  if (typeof e != "string")
    throw new Error("Incorrect url value.");
  try {
    new URL(e);
  } catch {
    throw new Error("Incorrect url value.");
  }
}
function n1(e) {
  try {
    return ho(e), !0;
  } catch {
    return !1;
  }
}
function o1(e) {
  const r = /* @__PURE__ */ new Set();
  return oo(e, {
    Variable(t) {
      r.add(t.id.name);
    }
  }), [...r];
}
function Vn(e, r) {
  throw new wa(`Failed to evaluate [${e}]. ${r}`);
}
function i1(e, r) {
  throw new Error(r);
}
function hl(e) {
  const r = po(e);
  if (r)
    return r;
  throw new Error("Unable to convert value to Color, expected format #AARRGGBB.");
}
function Si(e) {
  return `#${[e.a, e.r, e.g, e.b].map((r) => {
    if (r < 0 || r > 255)
      throw new Error("Value out of range 0..1.");
    return wd(Math.round(r).toString(16), 2);
  }).join("").toUpperCase()}`;
}
function si(e) {
  return Si(hl(e));
}
function Jl(e) {
  return {
    type: yt,
    value: Number(e.value)
  };
}
const s1 = {
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
function ml(e, r, t) {
  if (t === "function")
    throw new Error("Cannot convert function");
  const n = s1[t];
  let o = typeof r;
  if (n === "array" && !Array.isArray(r) || n !== "array" && o !== n || o === "object" && r === null)
    throw o === "object" && (Array.isArray(r) ? o = "array" : r === null ? o = "null" : o = "dict"), new Error(`Incorrect value type: expected ${Zn(t)}, got ${Zn(o)}.`);
  if (n === "number" && t === "integer") {
    e && zn(e, r);
    try {
      r = gn(r);
    } catch {
      throw new Error("Cannot convert value to integer.");
    }
  }
  return n === "string" && t === "color" && (r = si(r)), n === "string" && t === "url" && ho(r), n === "boolean" && t === Kr && (r = r ? 1 : 0), {
    type: t,
    value: r
  };
}
function l1(e) {
  return e.type === "number" || e.type === "integer" ? Number(e.value) : e.type === "boolean" ? !!e.value : e.value;
}
function bl(e) {
  return l1(
    ml(void 0, e.value, e.type)
  );
}
class Xo {
  constructor(r, t) {
    Vr(this, "name");
    Vr(this, "value");
    Vr(this, "store");
    const n = this.convertValue(t);
    this.name = r, this.value = n;
  }
  getName() {
    return this.name;
  }
  subscribe(r) {
    return this.store || (this.store = Io(this.value)), this.store.subscribe(r);
  }
  set(r) {
    const t = this.fromString(r);
    this.setValue(t);
  }
  setValue(r) {
    const t = this.convertValue(r);
    this.value = t, this.store && this.store.set(t);
  }
  getValue() {
    return this.value;
  }
}
class Ud extends Xo {
  convertValue(r) {
    if (typeof r != "string")
      throw new Error("Incorrect variable value");
    return r;
  }
  fromString(r) {
    return r;
  }
  getType() {
    return "string";
  }
}
class Gd extends Xo {
  convertValue(r) {
    if (typeof r != "bigint" && typeof r != "number")
      throw new Error("Incorrect variable value");
    try {
      return gn(r);
    } catch {
      throw new Error("Incorrect variable value");
    }
  }
  fromString(r) {
    try {
      return gn(r);
    } catch {
      throw new Error("Incorrect variable value");
    }
  }
  getType() {
    return "integer";
  }
}
class Jd extends Xo {
  convertValue(r) {
    if (typeof r != "number" || Number.isNaN(r) || !isFinite(r))
      throw new Error("Incorrect variable value");
    return r;
  }
  fromString(r) {
    const t = Number(r);
    return this.convertValue(t);
  }
  getType() {
    return "number";
  }
}
class Kd extends Xo {
  convertValue(r) {
    if (r !== 1 && r !== 0 && r !== !0 && r !== !1)
      throw new Error("Incorrect variable value");
    return !!r;
  }
  fromString(r) {
    if (r === "1" || r === "true")
      return !0;
    if (r === "0" || r === "false")
      return !1;
    throw new Error("Incorrect variable value");
  }
  getType() {
    return "boolean";
  }
}
class qd extends Xo {
  convertValue(r) {
    if (typeof r != "string" || !po(r))
      throw new Error("Incorrect variable value");
    return si(r);
  }
  fromString(r) {
    return this.convertValue(r);
  }
  getType() {
    return "color";
  }
}
class Yd extends Xo {
  convertValue(r) {
    if (typeof r != "string")
      throw new Error("Incorrect variable value");
    return ho(r), r;
  }
  fromString(r) {
    return ho(r), r;
  }
  getType() {
    return "url";
  }
}
class Xd extends Xo {
  convertValue(r) {
    if (typeof r != "object" || !r)
      throw new Error("Incorrect variable value");
    return r;
  }
  fromString(r) {
    try {
      return JSON.parse(r);
    } catch {
      throw new Error("Incorrect dict value");
    }
  }
  getType() {
    return "dict";
  }
}
class Zd extends Xo {
  convertValue(r) {
    if (!Array.isArray(r))
      throw new Error("Incorrect variable value");
    return r;
  }
  fromString(r) {
    try {
      return JSON.parse(r);
    } catch {
      throw new Error("Incorrect array value");
    }
  }
  getType() {
    return "array";
  }
}
const Kl = {
  string: Ud,
  number: Jd,
  integer: Gd,
  boolean: Kd,
  color: qd,
  url: Yd,
  dict: Xd,
  array: Zd
};
function Yn(e, r, t) {
  if (!(r in Kl))
    throw new Error("Unsupported variable type");
  return new Kl[r](e, t);
}
function a1() {
}
function u1(e) {
  return e(this.value), a1;
}
function gc() {
  throw new Error("Cannot change the value of this type of variable");
}
class c1 extends Ud {
}
class f1 extends Jd {
}
class d1 extends Gd {
}
class _1 extends Kd {
}
class p1 extends qd {
}
class g1 extends Yd {
}
class h1 extends Xd {
}
class m1 extends Zd {
}
class b1 extends Xo {
  convertValue(r) {
    if (!(r instanceof Date))
      throw new Error("Incorrect variable value");
    return r;
  }
  fromString() {
    throw new Error("Datetime variable does not support setter from string");
  }
  getType() {
    return "datetime";
  }
}
const Xs = {
  string: c1,
  number: f1,
  integer: d1,
  boolean: _1,
  color: p1,
  url: g1,
  dict: h1,
  array: m1,
  datetime: b1
};
for (const e in Xs) {
  const r = Xs[e];
  r.prototype.subscribe = u1, r.prototype.set = gc, r.prototype.setValue = gc;
}
function As(e, r, t) {
  if (!(r in Xs))
    throw new Error("Unsupported variable type");
  return new Xs[r](e, t);
}
function y1(e) {
  const r = e.getType();
  let t = e.getValue();
  return r === Kr && (t = t ? 1 : 0), {
    type: r,
    value: t
  };
}
function w1(e, r) {
  if (r === "string")
    return e;
  if (r === "integer")
    try {
      return gn(e);
    } catch {
      throw new Error("Incorrect variable value");
    }
  else if (r === "number") {
    const t = Number(e);
    if (Number.isNaN(t) || !isFinite(t))
      throw new Error("Incorrect variable value");
    return t;
  } else if (r === "boolean") {
    if (e === "1" || e === "true")
      return !0;
    if (e === "0" || e === "false")
      return !1;
    throw new Error("Incorrect variable value");
  } else if (r === "color") {
    if (typeof e != "string" || !po(e))
      throw new Error("Incorrect variable value");
    return si(e);
  } else if (r === "url") {
    if (typeof e != "string")
      throw new Error("Incorrect variable value");
    return ho(e), e;
  } else if (r === "dict" || r === "array")
    try {
      return JSON.parse(e);
    } catch {
      throw new Error("Incorrect dict value");
    }
  throw new Error(`Unexpected type ${r}`);
}
function hc(e, r, t) {
  const n = e.slice();
  return n[85] = r[t], n;
}
function mc(e, r, t) {
  const n = e.slice();
  return n[85] = r[t], n;
}
function bc(e, r, t) {
  const n = e.slice();
  return n[90] = r[t], n;
}
function k1(e) {
  let r, t;
  return r = new Fn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function v1(e) {
  let r, t;
  return r = new hn({
    props: {
      cls: gt(
        "slider",
        Jr,
        /*mods*/
        e[24]
      ),
      style: (
        /*stl*/
        e[25]
      ),
      customDescription: !0,
      customActions: "slider",
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: {
        default: [
          j1,
          ({ focusHandler: n, blurHandler: o }) => ({ 83: n, 84: o }),
          ({ focusHandler: n, blurHandler: o }) => [0, 0, (n ? 2097152 : 0) | (o ? 4194304 : 0)]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      16777216 && (i.cls = gt(
        "slider",
        Jr,
        /*mods*/
        n[24]
      )), o[0] & /*stl*/
      33554432 && (i.style = /*stl*/
      n[25]), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*tracksInner, switchedTracks, minValue, maxValue, value, value2, isEnabled, secondaryDescription, secondVariable, description, input, thumbSecondaryStyle, textSecondaryStyle, thumbStyle, textStyle, markInactiveTicks, markActiveTicks, $direction, renderRanges*/
      4193276 | o[2] & /*focusHandler, blurHandler*/
      6291456 | o[3] & /*$$scope*/
      1 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function yc(e) {
  let r;
  return {
    c() {
      r = Pe("div"), g(r, "class", Jr.slider__track), I(
        r,
        "left",
        /*range*/
        e[90].left
      ), I(
        r,
        "right",
        /*range*/
        e[90].right
      ), I(
        r,
        "height",
        /*range*/
        e[90].height
      ), I(
        r,
        "border-radius",
        /*range*/
        e[90].borderRadius
      ), I(
        r,
        "background",
        /*range*/
        e[90].background
      ), I(
        r,
        "box-shadow",
        /*range*/
        e[90].boxShadow
      );
    },
    m(t, n) {
      K(t, r, n);
    },
    p(t, n) {
      n[0] & /*renderRanges*/
      2097152 && I(
        r,
        "left",
        /*range*/
        t[90].left
      ), n[0] & /*renderRanges*/
      2097152 && I(
        r,
        "right",
        /*range*/
        t[90].right
      ), n[0] & /*renderRanges*/
      2097152 && I(
        r,
        "height",
        /*range*/
        t[90].height
      ), n[0] & /*renderRanges*/
      2097152 && I(
        r,
        "border-radius",
        /*range*/
        t[90].borderRadius
      ), n[0] & /*renderRanges*/
      2097152 && I(
        r,
        "background",
        /*range*/
        t[90].background
      ), n[0] & /*renderRanges*/
      2097152 && I(
        r,
        "box-shadow",
        /*range*/
        t[90].boxShadow
      );
    },
    d(t) {
      t && J(r);
    }
  };
}
function wc(e) {
  let r;
  return {
    c() {
      r = Pe("div"), g(r, "class", Jr.slider__tick + " " + Jr.slider__tick_active), I(
        r,
        "--divkit-slider-tick",
        /*val*/
        e[85]
      );
    },
    m(t, n) {
      K(t, r, n);
    },
    p(t, n) {
      n[0] & /*markActiveTicks*/
      131072 && I(
        r,
        "--divkit-slider-tick",
        /*val*/
        t[85]
      );
    },
    d(t) {
      t && J(r);
    }
  };
}
function kc(e) {
  let r;
  return {
    c() {
      r = Pe("div"), g(r, "class", Jr.slider__tick + " " + Jr.slider__tick_inactive), I(
        r,
        "--divkit-slider-tick",
        /*val*/
        e[85]
      );
    },
    m(t, n) {
      K(t, r, n);
    },
    p(t, n) {
      n[0] & /*markInactiveTicks*/
      262144 && I(
        r,
        "--divkit-slider-tick",
        /*val*/
        t[85]
      );
    },
    d(t) {
      t && J(r);
    }
  };
}
function vc(e) {
  let r, t, n;
  return {
    c() {
      var o, i, s, a, l;
      r = Pe("div"), t = Pe("div"), n = Nn(
        /*value*/
        e[11]
      ), g(t, "class", Jr["slider__thumb-text-inner"]), I(
        t,
        "font-size",
        /*textStyle*/
        ((o = e[7]) == null ? void 0 : o.fontSize) || "1em"
      ), I(
        t,
        "font-weight",
        /*textStyle*/
        ((i = e[7]) == null ? void 0 : i.fontWeight) || ""
      ), I(
        t,
        "font-family",
        /*textStyle*/
        ((s = e[7]) == null ? void 0 : s.fontFamily) || ""
      ), I(
        t,
        "font-variation-settings",
        /*textStyle*/
        ((a = e[7]) == null ? void 0 : a.fontVariationSettings) || ""
      ), I(
        t,
        "color",
        /*textStyle*/
        ((l = e[7]) == null ? void 0 : l.textColor) || "#000"
      ), g(r, "class", Jr["slider__thumb-text"]);
    },
    m(o, i) {
      K(o, r, i), wt(r, t), wt(t, n);
    },
    p(o, i) {
      var s, a, l, u, c;
      i[0] & /*value*/
      2048 && Jn(
        n,
        /*value*/
        o[11]
      ), i[0] & /*textStyle*/
      128 && I(
        t,
        "font-size",
        /*textStyle*/
        ((s = o[7]) == null ? void 0 : s.fontSize) || "1em"
      ), i[0] & /*textStyle*/
      128 && I(
        t,
        "font-weight",
        /*textStyle*/
        ((a = o[7]) == null ? void 0 : a.fontWeight) || ""
      ), i[0] & /*textStyle*/
      128 && I(
        t,
        "font-family",
        /*textStyle*/
        ((l = o[7]) == null ? void 0 : l.fontFamily) || ""
      ), i[0] & /*textStyle*/
      128 && I(
        t,
        "font-variation-settings",
        /*textStyle*/
        ((u = o[7]) == null ? void 0 : u.fontVariationSettings) || ""
      ), i[0] & /*textStyle*/
      128 && I(
        t,
        "color",
        /*textStyle*/
        ((c = o[7]) == null ? void 0 : c.textColor) || "#000"
      );
    },
    d(o) {
      o && J(r);
    }
  };
}
function jc(e) {
  let r, t = (
    /*textSecondaryStyle*/
    e[8] && Cc(e)
  );
  return {
    c() {
      r = Pe("div"), t && t.c(), g(r, "class", Jr.slider__thumb + " " + Jr.slider__thumb_secondary), I(r, "border-radius", ge(
        /*thumbSecondaryStyle*/
        e[6].borderRadius
      )), I(
        r,
        "background",
        /*thumbSecondaryStyle*/
        e[6].background
      ), I(
        r,
        "box-shadow",
        /*thumbSecondaryStyle*/
        e[6].boxShadow || ""
      );
    },
    m(n, o) {
      K(n, r, o), t && t.m(r, null);
    },
    p(n, o) {
      /*textSecondaryStyle*/
      n[8] ? t ? t.p(n, o) : (t = Cc(n), t.c(), t.m(r, null)) : t && (t.d(1), t = null), o[0] & /*thumbSecondaryStyle*/
      64 && I(r, "border-radius", ge(
        /*thumbSecondaryStyle*/
        n[6].borderRadius
      )), o[0] & /*thumbSecondaryStyle*/
      64 && I(
        r,
        "background",
        /*thumbSecondaryStyle*/
        n[6].background
      ), o[0] & /*thumbSecondaryStyle*/
      64 && I(
        r,
        "box-shadow",
        /*thumbSecondaryStyle*/
        n[6].boxShadow || ""
      );
    },
    d(n) {
      n && J(r), t && t.d();
    }
  };
}
function Cc(e) {
  let r, t, n;
  return {
    c() {
      var o, i, s, a, l;
      r = Pe("div"), t = Pe("div"), n = Nn(
        /*value2*/
        e[12]
      ), g(t, "class", Jr["slider__thumb-text-inner"]), I(
        t,
        "font-size",
        /*textSecondaryStyle*/
        ((o = e[8]) == null ? void 0 : o.fontSize) || "1em"
      ), I(
        t,
        "font-weight",
        /*textSecondaryStyle*/
        ((i = e[8]) == null ? void 0 : i.fontWeight) || ""
      ), I(
        t,
        "font-family",
        /*textSecondaryStyle*/
        ((s = e[8]) == null ? void 0 : s.fontFamily) || ""
      ), I(
        t,
        "font-variation-settings",
        /*textSecondaryStyle*/
        ((a = e[8]) == null ? void 0 : a.fontVariationSettings) || ""
      ), I(
        t,
        "color",
        /*textSecondaryStyle*/
        ((l = e[8]) == null ? void 0 : l.textColor) || "#000"
      ), g(r, "class", Jr["slider__thumb-text"] + " " + Jr["slider__thumb-text_secondary"]);
    },
    m(o, i) {
      K(o, r, i), wt(r, t), wt(t, n);
    },
    p(o, i) {
      var s, a, l, u, c;
      i[0] & /*value2*/
      4096 && Jn(
        n,
        /*value2*/
        o[12]
      ), i[0] & /*textSecondaryStyle*/
      256 && I(
        t,
        "font-size",
        /*textSecondaryStyle*/
        ((s = o[8]) == null ? void 0 : s.fontSize) || "1em"
      ), i[0] & /*textSecondaryStyle*/
      256 && I(
        t,
        "font-weight",
        /*textSecondaryStyle*/
        ((a = o[8]) == null ? void 0 : a.fontWeight) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && I(
        t,
        "font-family",
        /*textSecondaryStyle*/
        ((l = o[8]) == null ? void 0 : l.fontFamily) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && I(
        t,
        "font-variation-settings",
        /*textSecondaryStyle*/
        ((u = o[8]) == null ? void 0 : u.fontVariationSettings) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && I(
        t,
        "color",
        /*textSecondaryStyle*/
        ((c = o[8]) == null ? void 0 : c.textColor) || "#000"
      );
    },
    d(o) {
      o && J(r);
    }
  };
}
function Ec(e) {
  let r, t, n, o, i, s;
  return {
    c() {
      r = Pe("input"), g(r, "type", "range"), g(r, "class", t = /*switchedTracks*/
      e[16] ? Jr.slider__input : `${Jr.slider__input} ${Jr.slider__input_secondary}`), g(
        r,
        "min",
        /*minValue*/
        e[3]
      ), g(
        r,
        "max",
        /*maxValue*/
        e[4]
      ), g(r, "step", "1"), r.value = n = /*switchedTracks*/
      e[16] ? (
        /*value*/
        e[11]
      ) : (
        /*value2*/
        e[12]
      ), r.disabled = o = !/*isEnabled*/
      e[9], g(
        r,
        "aria-label",
        /*secondaryDescription*/
        e[20]
      );
    },
    m(a, l) {
      K(a, r, l), i || (s = [
        Qe(
          r,
          "input",
          /*input_handler_1*/
          e[75]
        ),
        Qe(r, "mousedown", function() {
          zr(
            /*secondVariable*/
            e[13] ? (
              /*onSecondMousedown*/
              e[41]
            ) : null
          ) && (e[13] ? (
            /*onSecondMousedown*/
            e[41]
          ) : null).apply(this, arguments);
        }),
        Qe(r, "touchstart", function() {
          zr(
            /*secondVariable*/
            e[13] ? (
              /*onSecondMousedown*/
              e[41]
            ) : null
          ) && (e[13] ? (
            /*onSecondMousedown*/
            e[41]
          ) : null).apply(this, arguments);
        }),
        Qe(r, "focus", function() {
          zr(
            /*focusHandler*/
            e[83]
          ) && e[83].apply(this, arguments);
        }),
        Qe(r, "blur", function() {
          zr(
            /*blurHandler*/
            e[84]
          ) && e[84].apply(this, arguments);
        })
      ], i = !0);
    },
    p(a, l) {
      e = a, l[0] & /*switchedTracks*/
      65536 && t !== (t = /*switchedTracks*/
      e[16] ? Jr.slider__input : `${Jr.slider__input} ${Jr.slider__input_secondary}`) && g(r, "class", t), l[0] & /*minValue*/
      8 && g(
        r,
        "min",
        /*minValue*/
        e[3]
      ), l[0] & /*maxValue*/
      16 && g(
        r,
        "max",
        /*maxValue*/
        e[4]
      ), l[0] & /*switchedTracks, value, value2*/
      71680 && n !== (n = /*switchedTracks*/
      e[16] ? (
        /*value*/
        e[11]
      ) : (
        /*value2*/
        e[12]
      )) && (r.value = n), l[0] & /*isEnabled*/
      512 && o !== (o = !/*isEnabled*/
      e[9]) && (r.disabled = o), l[0] & /*secondaryDescription*/
      1048576 && g(
        r,
        "aria-label",
        /*secondaryDescription*/
        e[20]
      );
    },
    d(a) {
      a && J(r), i = !1, Rr(s);
    }
  };
}
function j1(e) {
  let r, t, n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N = ur(
    /*renderRanges*/
    e[21]
  ), B = [];
  for (let D = 0; D < N.length; D += 1)
    B[D] = yc(bc(e, N, D));
  let z = ur(
    /*markActiveTicks*/
    e[17]
  ), oe = [];
  for (let D = 0; D < z.length; D += 1)
    oe[D] = wc(mc(e, z, D));
  let fe = ur(
    /*markInactiveTicks*/
    e[18]
  ), T = [];
  for (let D = 0; D < fe.length; D += 1)
    T[D] = kc(hc(e, fe, D));
  let Y = (
    /*textStyle*/
    e[7] && vc(e)
  ), le = (
    /*secondVariable*/
    e[13] && jc(e)
  ), A = (
    /*secondVariable*/
    e[13] && Ec(e)
  );
  return {
    c() {
      r = Pe("div"), t = Pe("div"), n = Pe("div");
      for (let D = 0; D < B.length; D += 1)
        B[D].c();
      i = _r();
      for (let D = 0; D < oe.length; D += 1)
        oe[D].c();
      s = _r();
      for (let D = 0; D < T.length; D += 1)
        T[D].c();
      a = _r(), l = Pe("div"), Y && Y.c(), u = _r(), le && le.c(), c = _r(), f = Pe("input"), p = _r(), A && A.c(), g(n, "class", o = Jr["slider__tracks-ranges"] + /*$direction*/
      (e[14] === "rtl" ? " " + Jr["slider__tracks-ranges_rtl"] : "")), g(l, "class", Jr.slider__thumb), I(l, "border-radius", ge(
        /*thumbStyle*/
        e[5].borderRadius
      )), I(
        l,
        "background",
        /*thumbStyle*/
        e[5].background
      ), I(
        l,
        "box-shadow",
        /*thumbStyle*/
        e[5].boxShadow || ""
      ), g(f, "type", "range"), g(f, "class", _ = /*switchedTracks*/
      e[16] ? `${Jr.slider__input} ${Jr.slider__input_secondary}` : Jr.slider__input), g(
        f,
        "min",
        /*minValue*/
        e[3]
      ), g(
        f,
        "max",
        /*maxValue*/
        e[4]
      ), g(f, "step", "1"), f.value = h = /*switchedTracks*/
      e[16] ? (
        /*value2*/
        e[12]
      ) : (
        /*value*/
        e[11]
      ), f.disabled = m = !/*isEnabled*/
      e[9], g(
        f,
        "aria-label",
        /*description*/
        e[19]
      ), g(t, "class", Jr["slider__tracks-inner"]), g(r, "class", Jr["slider__tracks-wrapper"]);
    },
    m(D, M) {
      K(D, r, M), wt(r, t), wt(t, n);
      for (let U = 0; U < B.length; U += 1)
        B[U] && B[U].m(n, null);
      wt(t, i);
      for (let U = 0; U < oe.length; U += 1)
        oe[U] && oe[U].m(t, null);
      wt(t, s);
      for (let U = 0; U < T.length; U += 1)
        T[U] && T[U].m(t, null);
      wt(t, a), wt(t, l), Y && Y.m(l, null), wt(t, u), le && le.m(t, null), wt(t, c), wt(t, f), e[74](f), wt(t, p), A && A.m(t, null), e[76](t), w || (k = [
        Qe(
          f,
          "input",
          /*input_handler*/
          e[73]
        ),
        Qe(f, "focus", function() {
          zr(
            /*focusHandler*/
            e[83]
          ) && e[83].apply(this, arguments);
        }),
        Qe(f, "blur", function() {
          zr(
            /*blurHandler*/
            e[84]
          ) && e[84].apply(this, arguments);
        })
      ], w = !0);
    },
    p(D, M) {
      if (e = D, M[0] & /*renderRanges*/
      2097152) {
        N = ur(
          /*renderRanges*/
          e[21]
        );
        let U;
        for (U = 0; U < N.length; U += 1) {
          const q = bc(e, N, U);
          B[U] ? B[U].p(q, M) : (B[U] = yc(q), B[U].c(), B[U].m(n, null));
        }
        for (; U < B.length; U += 1)
          B[U].d(1);
        B.length = N.length;
      }
      if (M[0] & /*$direction*/
      16384 && o !== (o = Jr["slider__tracks-ranges"] + /*$direction*/
      (e[14] === "rtl" ? " " + Jr["slider__tracks-ranges_rtl"] : "")) && g(n, "class", o), M[0] & /*markActiveTicks*/
      131072) {
        z = ur(
          /*markActiveTicks*/
          e[17]
        );
        let U;
        for (U = 0; U < z.length; U += 1) {
          const q = mc(e, z, U);
          oe[U] ? oe[U].p(q, M) : (oe[U] = wc(q), oe[U].c(), oe[U].m(t, s));
        }
        for (; U < oe.length; U += 1)
          oe[U].d(1);
        oe.length = z.length;
      }
      if (M[0] & /*markInactiveTicks*/
      262144) {
        fe = ur(
          /*markInactiveTicks*/
          e[18]
        );
        let U;
        for (U = 0; U < fe.length; U += 1) {
          const q = hc(e, fe, U);
          T[U] ? T[U].p(q, M) : (T[U] = kc(q), T[U].c(), T[U].m(t, a));
        }
        for (; U < T.length; U += 1)
          T[U].d(1);
        T.length = fe.length;
      }
      /*textStyle*/
      e[7] ? Y ? Y.p(e, M) : (Y = vc(e), Y.c(), Y.m(l, null)) : Y && (Y.d(1), Y = null), M[0] & /*thumbStyle*/
      32 && I(l, "border-radius", ge(
        /*thumbStyle*/
        e[5].borderRadius
      )), M[0] & /*thumbStyle*/
      32 && I(
        l,
        "background",
        /*thumbStyle*/
        e[5].background
      ), M[0] & /*thumbStyle*/
      32 && I(
        l,
        "box-shadow",
        /*thumbStyle*/
        e[5].boxShadow || ""
      ), /*secondVariable*/
      e[13] ? le ? le.p(e, M) : (le = jc(e), le.c(), le.m(t, c)) : le && (le.d(1), le = null), M[0] & /*switchedTracks*/
      65536 && _ !== (_ = /*switchedTracks*/
      e[16] ? `${Jr.slider__input} ${Jr.slider__input_secondary}` : Jr.slider__input) && g(f, "class", _), M[0] & /*minValue*/
      8 && g(
        f,
        "min",
        /*minValue*/
        e[3]
      ), M[0] & /*maxValue*/
      16 && g(
        f,
        "max",
        /*maxValue*/
        e[4]
      ), M[0] & /*switchedTracks, value2, value*/
      71680 && h !== (h = /*switchedTracks*/
      e[16] ? (
        /*value2*/
        e[12]
      ) : (
        /*value*/
        e[11]
      )) && (f.value = h), M[0] & /*isEnabled*/
      512 && m !== (m = !/*isEnabled*/
      e[9]) && (f.disabled = m), M[0] & /*description*/
      524288 && g(
        f,
        "aria-label",
        /*description*/
        e[19]
      ), /*secondVariable*/
      e[13] ? A ? A.p(e, M) : (A = Ec(e), A.c(), A.m(t, null)) : A && (A.d(1), A = null);
    },
    d(D) {
      D && J(r), un(B, D), un(oe, D), un(T, D), Y && Y.d(), le && le.d(), e[74](null), A && A.d(), e[76](null), w = !1, Rr(k);
    }
  };
}
function C1(e) {
  let r, t, n, o, i, s;
  const a = [v1, k1], l = [];
  function u(c, f) {
    return (
      /*hasError*/
      c[10] ? -1 : 0
    );
  }
  return ~(r = u(e)) && (t = l[r] = a[r](e)), {
    c() {
      t && t.c(), n = or();
    },
    m(c, f) {
      ~r && l[r].m(c, f), K(c, n, f), o = !0, i || (s = Qe(
        window,
        "resize",
        /*checkTicksDebounced*/
        e[43]
      ), i = !0);
    },
    p(c, f) {
      let _ = r;
      r = u(c), r === _ ? ~r && l[r].p(c, f) : (t && (pr(), ne(l[_], 1, 1, () => {
        l[_] = null;
      }), gr()), ~r ? (t = l[r], t ? t.p(c, f) : (t = l[r] = a[r](c), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(c) {
      o || (W(t), o = !0);
    },
    o(c) {
      ne(t), o = !1;
    },
    d(c) {
      c && J(n), ~r && l[r].d(c), i = !1, s();
    }
  };
}
const eo = {
  width: 10,
  height: 10,
  borderRadius: 5,
  background: "#000"
}, gs = ["rounded_rectangle", "circle"], Tl = ["rounded_rectangle"];
function hs(e, r, t, n, o) {
  let i = [];
  if (o)
    for (let s = e; s < r; ++s)
      i.push((s - t) / (n - t));
  else {
    for (let s = t; s < e; ++s)
      i.push((s - t) / (n - t));
    for (let s = r; s < n + 1; ++s)
      i.push((s - t) / (n - t));
  }
  return i;
}
function E1(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, B, z, oe, fe, T, Y, le, A, D, M, U, q, be, Ae = v, Ce = () => (Ae(), Ae = E(oe, (j) => t(57, be = j)), oe), he, Fe = v, x = () => (Fe(), Fe = E(B, (j) => t(58, he = j)), B), Je, Ye = v, Xe = () => (Ye(), Ye = E(z, (j) => t(59, Je = j)), z), ye, Ie = v, pe = () => (Ie(), Ie = E(N, (j) => t(60, ye = j)), N), me, _e = v, ee = () => (_e(), _e = E(k, (j) => t(61, me = j)), k), ce, te = v, we = () => (te(), te = E(w, (j) => t(62, ce = j)), w), Ue, Ke = v, $ = () => (Ke(), Ke = E(p, (j) => t(63, Ue = j)), p), Oe, Ne = v, ot = () => (Ne(), Ne = E(m, (j) => t(64, Oe = j)), m), ct, rt = v, kt = () => (rt(), rt = E(h, (j) => t(65, ct = j)), h), it, Mt = v, ft = () => (Mt(), Mt = E(_, (j) => t(66, it = j)), _), Z, de = v, lt = () => (de(), de = E(f, (j) => t(67, Z = j)), f), ze, F = v, Et = () => (F(), F = E(c, (j) => t(68, ze = j)), c), ut, Vt = v, It = () => (Vt(), Vt = E(a, (j) => t(69, ut = j)), a), nt, Q = v, At = () => (Q(), Q = E(s, (j) => t(70, nt = j)), s), Pt, $t = v, Zt = () => ($t(), $t = E(u, (j) => t(71, Pt = j)), u), Ee, He = v, ht = () => (He(), He = E(l, (j) => t(72, Ee = j)), l);
  e.$$.on_destroy.push(() => Ae()), e.$$.on_destroy.push(() => Fe()), e.$$.on_destroy.push(() => Ye()), e.$$.on_destroy.push(() => Ie()), e.$$.on_destroy.push(() => _e()), e.$$.on_destroy.push(() => te()), e.$$.on_destroy.push(() => Ke()), e.$$.on_destroy.push(() => Ne()), e.$$.on_destroy.push(() => rt()), e.$$.on_destroy.push(() => Mt()), e.$$.on_destroy.push(() => de()), e.$$.on_destroy.push(() => F()), e.$$.on_destroy.push(() => Vt()), e.$$.on_destroy.push(() => Q()), e.$$.on_destroy.push(() => $t()), e.$$.on_destroy.push(() => He());
  let { componentContext: Te } = r, { layoutParams: xe = void 0 } = r;
  const Le = Tr(Xr), Ft = Tr(To), Be = Le.direction;
  mn(e, Be, (j) => t(14, q = j));
  let bt, Ut, Tt, ir = !1, De = 0, jt = 100, sr = eo, rr = sr, nr = eo, fr = eo, wr, Nt = null, br, Rt = null, mt, er = mt, se = "", kr = "", vr = !0, Ct = !1, Dr = [];
  function Br() {
    t(5, sr = eo), t(6, rr = sr), t(45, nr = eo), t(46, fr = eo), t(47, Nt = null), t(48, Rt = null), t(7, mt = void 0), t(8, er = void 0), t(19, se = ""), t(9, vr = !0), t(20, kr = "");
  }
  let ar = Fo(nt || 0, De, jt), at = Fo(ut || 0, De, jt);
  function St({ direction: j, minValue: ie, maxValue: d, trackActiveOffset: L, trackActivePart: je, trackInactiveStyle: We, trackActiveStyle: ke, ranges: P = [] }) {
    const zt = [], Lt = (st, Jt, Er) => {
      var Ir, yn, Se, qr;
      const lr = (Ur, an, y, C) => {
        var R, tt, Me, xt;
        const S = Math.max(Ur, Jt);
        if (Math.min(an, Er) - S > 0) {
          const Dt = C && (tt = (R = C[j === "ltr" ? "start" : "end"]) != null ? R : C.left) != null ? tt : 0, H = C && (xt = (Me = C[j === "ltr" ? "end" : "start"]) != null ? Me : C.right) != null ? xt : 0;
          zt.push({
            left: Ur,
            right: an,
            totalLeft: Jt,
            totalRight: Er,
            leftMargin: Dt,
            rightMargin: H,
            style: y
          });
        }
      };
      if ((!P[0] || ((Ir = P[0].start) != null ? Ir : ie) > Jt) && lr(Jt, P[0] ? (yn = P[0].start) != null ? yn : ie : Er, st === "inactive" ? We : ke), P.forEach((Ur, an) => {
        var xt, Dt, H, Xt;
        const y = Ur[st === "inactive" ? "track_inactive_style" : "track_active_style"], S = y ? uo(y, Tl, eo) : st === "inactive" ? We : ke, ae = P[an - 1], R = P[an + 1], tt = (Dt = (xt = Ur.start) != null ? xt : ae == null ? void 0 : ae.end) != null ? Dt : Jt, Me = (Xt = (H = Ur.end) != null ? H : R == null ? void 0 : R.start) != null ? Xt : Er;
        lr(tt, Me, S, Ur.margins);
      }), P[P.length - 1] && ((Se = P[P.length - 1].end) != null ? Se : d) < Er) {
        const Ur = (qr = P[P.length - 1].end) != null ? qr : d;
        lr(Ur, Er, st === "inactive" ? We : ke);
      }
    };
    Lt("inactive", ie, d), Lt("active", L, L + je);
    const Ge = d - ie;
    t(21, Dr = zt.map((st) => {
      let Jt = `${(st.left - ie) * 100 / Ge}%`;
      st.leftMargin && (Jt = `calc(${Jt} + ${cn(st.leftMargin)})`);
      let Er;
      st.totalLeft < st.left ? Er = Jt : st.leftMargin ? Er = `max(${(st.totalLeft - ie) * 100 / Ge}%, ${Jt})` : Er = `${(Math.max(st.totalLeft, st.left) - ie) * 100 / Ge}%`;
      let lr = `${(1 - (st.right - ie) / Ge) * 100}%`;
      st.rightMargin && (lr = `calc(${lr} + ${cn(st.rightMargin)})`);
      let Ir;
      return st.totalRight > st.right ? Ir = lr : st.rightMargin ? Ir = `max(${(1 - (st.totalRight - ie) / Ge) * 100}%, ${lr})` : Ir = `${(1 - (Math.max(st.totalRight, st.right) - ie) / Ge) * 100}%`, {
        left: Er,
        right: Ir,
        height: ge(st.style.height),
        borderRadius: ge(st.style.borderRadius),
        background: st.style.background,
        boxShadow: st.style.boxShadow || ""
      };
    }));
  }
  function Gt(j) {
    var P, zt;
    if (!vr)
      return;
    const ie = "pageX" in j ? j.pageX : (zt = (P = j.changedTouches) == null ? void 0 : P[0]) == null ? void 0 : zt.pageX;
    if (ie === void 0)
      return;
    const d = Tt.getBoundingClientRect();
    let L = (ie - d.left) / d.width;
    q === "rtl" && (L = 1 - L);
    const je = De + (jt - De) * L, We = Math.round(Fo(je, De, jt)), ke = (ar + at) / 2;
    t(16, ir = We < ke == ar < at);
  }
  function Qt(j, ie) {
    const d = Number(j.target.value);
    ir === (ie === "first") ? (t(12, at = d), a.setValue(d)) : (t(11, ar = d), s.setValue(d));
  }
  let $e = !1;
  function pt() {
    if (!Tt)
      return;
    const j = jt - De, ie = (Nt == null ? void 0 : Nt.width) || 0, d = (Rt == null ? void 0 : Rt.width) || 0;
    Math.max(ie, d) * j >= (Tt == null ? void 0 : Tt.clientWidth) ? $e || (Te.logError(X(new Error("Slider ticks overlap each other"), { level: "warn" })), $e = !0) : $e = !1;
  }
  const ue = ha(pt, 50);
  Qn(() => {
    pt();
  }), ln(() => {
    bt && (Le.unregisterFocusable(bt), t(44, bt = void 0));
  });
  const vt = (j) => Qt(j, "first");
  function tr(j) {
    Fr[j ? "unshift" : "push"](() => {
      Ut = j, t(2, Ut);
    });
  }
  const Ht = (j) => Qt(j, "second");
  function yr(j) {
    Fr[j ? "unshift" : "push"](() => {
      Tt = j, t(15, Tt);
    });
  }
  return e.$$set = (j) => {
    "componentContext" in j && t(0, Te = j.componentContext), "layoutParams" in j && t(1, xe = j.layoutParams);
  }, e.$$.update = () => {
    var j, ie, d, L;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(56, n = Te.origJson), e.$$.dirty[1] & /*origJson*/
    33554432 && n && Br(), e.$$.dirty[0] & /*componentContext*/
    1 && t(55, o = Te.json.thumb_value_variable), e.$$.dirty[0] & /*componentContext*/
    1 && t(13, i = Te.json.thumb_secondary_value_variable), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*firstVariable*/
    16777216 && At(t(22, s = o && (Te.getVariable(o, "integer") || Le.awaitGlobalVariable(o, "integer", 0)) || Yn("temp", "integer", 0))), e.$$.dirty[0] & /*secondVariable, componentContext*/
    8193 && It(t(23, a = i && (Te.getVariable(i, "integer") || Le.awaitGlobalVariable(i, "integer", 0)) || Yn("temp", "integer", 0))), e.$$.dirty[0] & /*componentContext*/
    1 && ht(t(39, l = Te.getDerivedFromVars(Te.json.min_value))), e.$$.dirty[0] & /*componentContext*/
    1 && Zt(t(38, u = Te.getDerivedFromVars(Te.json.max_value))), e.$$.dirty[0] & /*componentContext*/
    1 && Et(t(37, c = Te.getDerivedFromVars(Te.json.thumb_style))), e.$$.dirty[0] & /*componentContext*/
    1 && lt(t(36, f = Te.getDerivedFromVars(Te.json.thumb_secondary_style))), e.$$.dirty[0] & /*componentContext*/
    1 && ft(t(35, _ = Te.getDerivedFromVars(Te.json.track_inactive_style))), e.$$.dirty[0] & /*componentContext*/
    1 && kt(t(34, h = Te.getDerivedFromVars(Te.json.track_active_style))), e.$$.dirty[0] & /*componentContext*/
    1 && ot(t(33, m = Te.getDerivedFromVars(Te.json.tick_mark_active_style))), e.$$.dirty[0] & /*componentContext*/
    1 && $(t(32, p = Te.getDerivedFromVars(Te.json.tick_mark_inactive_style))), e.$$.dirty[0] & /*componentContext*/
    1 && we(t(31, w = Te.getDerivedFromVars(Te.json.thumb_text_style, void 0, !0, 1))), e.$$.dirty[0] & /*componentContext*/
    1 && ee(t(30, k = Te.getDerivedFromVars(Te.json.thumb_secondary_text_style, void 0, !0, 1))), e.$$.dirty[0] & /*componentContext*/
    1 && pe(t(29, N = Te.getDerivedFromVars(Te.json.accessibility))), e.$$.dirty[0] & /*componentContext*/
    1 && x(t(28, B = Te.getDerivedFromVars(Te.json.secondary_value_accessibility))), e.$$.dirty[0] & /*componentContext*/
    1 && Xe(t(27, z = Te.getDerivedFromVars(Te.json.is_enabled))), e.$$.dirty[0] & /*componentContext*/
    1 && Ce(t(26, oe = Te.getDerivedFromVars(Te.json.ranges))), e.$$.dirty[0] & /*minValue, maxValue*/
    24 | e.$$.dirty[2] & /*$jsonMinValue, $jsonMaxValue*/
    1536 && (t(3, De = io(Ee, De)), t(4, jt = io(Pt, jt)), pt()), e.$$.dirty[0] & /*minValue, maxValue, value*/
    2072 | e.$$.dirty[2] & /*$valueVariable*/
    256) {
      const je = Fo(nt || 0, De, jt);
      je !== ar && t(11, ar = je);
    }
    if (e.$$.dirty[0] & /*minValue, maxValue, value2*/
    4120 | e.$$.dirty[2] & /*$value2Variable*/
    128) {
      const je = Fo(ut || 0, De, jt);
      je !== at && t(12, at = je);
    }
    if (e.$$.dirty[0] & /*thumbStyle*/
    32 | e.$$.dirty[2] & /*$jsonThumbStyle*/
    64 && t(5, sr = uo(ze, gs, sr)), e.$$.dirty[0] & /*thumbStyle*/
    32 | e.$$.dirty[2] & /*$jsonThumbSecondaryStyle*/
    32 && t(6, rr = uo(Z, gs, sr)), e.$$.dirty[1] & /*trackInactiveStyle*/
    16384 | e.$$.dirty[2] & /*$jsonTrackInactiveStyle*/
    16 && t(45, nr = uo(it, Tl, nr)), e.$$.dirty[1] & /*trackActiveStyle*/
    32768 | e.$$.dirty[2] & /*$jsonTrackActiveStyle*/
    8 && t(46, fr = uo(ct, Tl, fr)), e.$$.dirty[2] & /*$jsonMarkActiveStyle*/
    4) {
      let je = uo(Oe, gs, eo);
      je !== eo && t(47, Nt = je);
    }
    if (e.$$.dirty[0] & /*secondVariable, value, value2, minValue, maxValue*/
    14360 | e.$$.dirty[1] & /*markActiveStyle*/
    65536 && (Nt ? (t(17, wr = i ? hs(Math.min(ar, at), Math.max(ar, at) + 1, De, jt, !0) : hs(De, ar, De, jt, !0)), pt()) : t(17, wr = [])), e.$$.dirty[2] & /*$jsonMarkInactiveStyle*/
    2) {
      let je = uo(Ue, gs, eo);
      je !== eo && t(48, Rt = je);
    }
    if (e.$$.dirty[0] & /*secondVariable, value, value2, minValue, maxValue*/
    14360 | e.$$.dirty[1] & /*markInactiveStyle*/
    131072 && (Rt ? (t(18, br = i ? hs(Math.min(ar, at), Math.max(ar, at) + 1, De, jt, !1) : hs(ar + 1, jt + 1, De, jt, !0)), pt()) : t(18, br = [])), e.$$.dirty[0] & /*textStyle*/
    128 | e.$$.dirty[2] & /*$jsonTextStyle*/
    1 && t(7, mt = pc(ce, Le.typefaceProvider, mt)), e.$$.dirty[0] & /*textStyle*/
    128 | e.$$.dirty[1] & /*$jsonSecondaryTextStyle*/
    1073741824 && t(8, er = pc(me, Le.typefaceProvider, mt)), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*$jsonAccessibility*/
    536870912 && (ye != null && ye.description ? t(19, se = Yo(ye)) : Te.logError(X(new Error('Missing accessibility "description" for slider'), { level: "warn" }))), e.$$.dirty[0] & /*isEnabled*/
    512 | e.$$.dirty[1] & /*$jsonIsEnabled*/
    268435456 && t(9, vr = Zr(Je, vr)), e.$$.dirty[0] & /*secondVariable, componentContext*/
    8193 | e.$$.dirty[1] & /*$jsonSecondaryAccessibility*/
    134217728 && (he != null && he.description ? t(20, kr = Yo(he)) : i && Te.logError(X(new Error('Missing second accessibility "description" for slider'), { level: "warn" }))), e.$$.dirty[0] & /*componentContext, thumbStyle, hasError*/
    1057 | e.$$.dirty[1] & /*trackActiveStyle, trackInactiveStyle*/
    49152) {
      let je = !1;
      Ft.hasAction() ? (Te.logError(X(new Error('Cannot show "slider" inside component with an action or inside accessibility mode=exclude'))), je = !0) : sr === eo ? (Te.logError(X(new Error('Missing "thumb_style" in slider'))), je = !0) : fr === eo ? (Te.logError(X(new Error('Missing "track_active_style" in slider'))), je = !0) : nr === eo && (Te.logError(X(new Error('Missing "track_inactive_style" in slider'))), je = !0), je !== Ct && t(10, Ct = je);
    }
    e.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle*/
    96 && t(52, fe = ge(Math.max(...[sr.width, rr.width, 0].filter(Pn)))), e.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle*/
    96 && t(51, T = ge(Math.max(...[sr.height, rr.height, 0].filter(Pn)))), e.$$.dirty[0] & /*value, minValue, maxValue*/
    2072 && t(50, Y = (ar - De) / (jt - De)), e.$$.dirty[0] & /*secondVariable, value2, minValue, maxValue*/
    12312 && t(49, le = i ? (at - De) / (jt - De) : void 0), e.$$.dirty[0] & /*value, value2, minValue*/
    6152 | e.$$.dirty[1] & /*trackSecondaryPart*/
    262144 && t(54, A = le !== void 0 ? Math.min(ar, at) : De), e.$$.dirty[0] & /*value2, value, minValue*/
    6152 | e.$$.dirty[1] & /*trackSecondaryPart*/
    262144 && t(53, D = le !== void 0 ? Math.abs(at - ar) : ar - De), e.$$.dirty[0] & /*$direction, minValue, maxValue*/
    16408 | e.$$.dirty[1] & /*trackActiveOffset, trackActivePart, trackInactiveStyle, trackActiveStyle, $jsonRanges*/
    79740928 && St({
      direction: q,
      minValue: De,
      maxValue: jt,
      trackActiveOffset: A,
      trackActivePart: D,
      trackInactiveStyle: nr,
      trackActiveStyle: fr,
      ranges: be
    }), e.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle, textStyle, textSecondaryStyle*/
    480 | e.$$.dirty[1] & /*markActiveStyle, markInactiveStyle, maxThumbWidth, maxThumbHeight, trackPart, trackSecondaryPart*/
    4128768 && t(25, M = {
      "--divkit-slider-thumb-width": ge(sr.width),
      "--divkit-slider-thumb-height": ge(sr.height),
      "--divkit-slider-thumb-secondary-width": ge(rr.width),
      "--divkit-slider-thumb-secondary-height": ge(rr.height),
      "--divkit-slider-text-offset-x": (j = mt == null ? void 0 : mt.offset) != null && j.x ? cn(mt.offset.x) : void 0,
      "--divkit-slider-text-offset-y": (ie = mt == null ? void 0 : mt.offset) != null && ie.y ? cn(mt.offset.y) : void 0,
      "--divkit-slider-text-secondary-offset-x": (d = er == null ? void 0 : er.offset) != null && d.x ? cn(er.offset.x) : void 0,
      "--divkit-slider-text-secondary-offset-y": (L = er == null ? void 0 : er.offset) != null && L.y ? cn(er.offset.y) : void 0,
      "--divkit-slider-tick-active-width": Nt ? ge(Nt.width) : void 0,
      "--divkit-slider-tick-active-height": Nt ? ge(Nt.height) : void 0,
      "--divkit-slider-tick-active-border-radius": Nt ? ge(Nt.borderRadius) : void 0,
      "--divkit-slider-tick-active-background": (Nt == null ? void 0 : Nt.background) || void 0,
      "--divkit-slider-tick-active-box-shadow": (Nt == null ? void 0 : Nt.boxShadow) || void 0,
      "--divkit-slider-tick-inactive-width": Rt ? ge(Rt.width) : void 0,
      "--divkit-slider-tick-inactive-height": Rt ? ge(Rt.height) : void 0,
      "--divkit-slider-tick-inactive-border-radius": Rt ? ge(Rt.borderRadius) : void 0,
      "--divkit-slider-tick-inactive-background": (Rt == null ? void 0 : Rt.background) || void 0,
      "--divkit-slider-tick-inactive-box-shadow": (Rt == null ? void 0 : Rt.boxShadow) || void 0,
      "--divkit-slider-max-thumb-width": fe,
      "--divkit-slider-max-thumb-height": T,
      "--divkit-slider-track-part": Y,
      "--divkit-slider-track-secondary-part": le
    }), e.$$.dirty[0] & /*$direction*/
    16384 && t(24, U = { direction: q }), e.$$.dirty[0] & /*componentContext, input*/
    5 | e.$$.dirty[1] & /*prevId*/
    8192 && Te.json && Ut && (bt && (Le.unregisterFocusable(bt), t(44, bt = void 0)), Te.id && !Te.fakeElement && (t(44, bt = Te.id), Le.registerFocusable(bt, {
      focus() {
        Ut && Ut.focus();
      }
    })));
  }, [
    Te,
    xe,
    Ut,
    De,
    jt,
    sr,
    rr,
    mt,
    er,
    vr,
    Ct,
    ar,
    at,
    i,
    q,
    Tt,
    ir,
    wr,
    br,
    se,
    kr,
    Dr,
    s,
    a,
    U,
    M,
    oe,
    z,
    B,
    N,
    k,
    w,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    Be,
    Gt,
    Qt,
    ue,
    bt,
    nr,
    fr,
    Nt,
    Rt,
    le,
    Y,
    T,
    fe,
    D,
    A,
    o,
    n,
    be,
    he,
    Je,
    ye,
    me,
    ce,
    Ue,
    Oe,
    ct,
    it,
    Z,
    ze,
    ut,
    nt,
    Pt,
    Ee,
    vt,
    tr,
    Ht,
    yr
  ];
}
class A1 extends Or {
  constructor(r) {
    super(), Lr(this, r, E1, C1, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const S1 = "appkit-input", V1 = "appkit-input__aligner", F1 = "appkit-input__input", D1 = "appkit-input__placeholder", I1 = "appkit-input__input_singleline", T1 = "appkit-input__input_multiline", Bi = {
  input: S1,
  "input_alignment-horizontal_center": "appkit-input_alignment-horizontal_center",
  "input_alignment-horizontal_end": "appkit-input_alignment-horizontal_end",
  input__aligner: V1,
  input__input: F1,
  input__placeholder: D1,
  "input_alignment-vertical_start": "appkit-input_alignment-vertical_start",
  "input_alignment-vertical_end": "appkit-input_alignment-vertical_end",
  "input_alignment-vertical_baseline": "appkit-input_alignment-vertical_baseline",
  "input_highlight-color": "appkit-input_highlight-color",
  input__input_singleline: I1,
  "input__scroll-wrapper": "appkit-input__scroll-wrapper",
  input__input_multiline: T1,
  "input__input_has-custom-focus": "appkit-input__input_has-custom-focus"
};
function cs(e, r) {
  if (e === r)
    return {
      start: e.length,
      added: 0,
      removed: 0
    };
  if (e.length > r.length) {
    const i = cs(r, e);
    return {
      start: i.start,
      added: i.removed,
      removed: i.added
    };
  }
  let t = 0, n = r.length - 1;
  const o = r.length - e.length;
  for (; t < n && t < e.length && e[t] === r[t]; )
    ++t;
  for (; n - o >= t && e[n - o] === r[n]; )
    --n;
  return ++n, {
    start: t,
    added: n - t,
    removed: n - t - o
  };
}
class Ac {
  constructor(r) {
    this.char = r;
  }
}
class wo {
  constructor(r, t, n) {
    this.char = r, this.filter = t, this.placeholder = n;
  }
}
class ka {
  constructor(r) {
    Vr(this, "maskData");
    Vr(this, "filters", /* @__PURE__ */ new Map());
    Vr(this, "destructedValue", []);
    Vr(this, "cursorPos", 0);
    this.maskData = r, this.updateMaskData(r);
  }
  get cursorPosition() {
    return this.cursorPos;
  }
  get rawValue() {
    return this.collectValueRange(0, this.destructedValue.length - 1);
  }
  get value() {
    let r = "";
    for (let t = 0; t < this.destructedValue.length; ++t) {
      const n = this.destructedValue[t];
      if (n instanceof Ac)
        r += n.char;
      else if (n instanceof wo)
        if (n.char)
          r += n.char;
        else if (this.maskData.alwaysVisible)
          r += n.placeholder;
        else
          break;
    }
    return r;
  }
  firstEmptyHolderIndex() {
    const r = this.destructedValue.findIndex((t) => t instanceof wo && !t.char);
    return r !== -1 ? r : this.destructedValue.length;
  }
  updateMaskData(r, t = !0) {
    const n = this.maskData !== r && t ? this.rawValue : null;
    this.filters = /* @__PURE__ */ new Map(), this.maskData = r, this.maskData.decoding.forEach((o) => {
      if (o.filter)
        try {
          const i = new RegExp(o.filter);
          this.filters.set(o.key, i);
        } catch (i) {
          this.onException(X(i, {
            level: "error",
            additional: {
              key: o.key
            }
          }));
        }
    }), this.destructedValue = this.maskData.pattern.split("").map((o) => {
      const i = this.maskData.decoding.find((s) => s.key === o);
      return i ? new wo(
        null,
        this.filters.get(i.key),
        i.placeholder
      ) : new Ac(o);
    }), n !== null && this.overrideRawValue(n);
  }
  overrideRawValue(r) {
    this.clearRange(0, this.destructedValue.length), this.replaceChars(r, 0), this.cursorPos = Math.min(this.cursorPos, this.value.length);
  }
  applyChangeFrom(r, t) {
    const n = cs(this.value, r);
    t !== void 0 && (n.start = Math.max(0, t - n.added));
    const o = this.replaceBodyTail(n, r);
    this.calculateCursorPosition(n, o);
  }
  replaceBodyTail(r, t) {
    const n = this.buildBodySubstring(r, t), o = this.buildTailSubstring(r);
    this.cleanup(r);
    const i = this.firstEmptyHolderIndex(), s = o ? this.calculateMaxShift(o, i) : void 0;
    this.replaceChars(n, i, s);
    const a = this.firstEmptyHolderIndex();
    return this.replaceChars(o, a), a;
  }
  buildBodySubstring(r, t) {
    return t.substring(r.start, r.start + r.added);
  }
  buildTailSubstring(r) {
    return this.collectValueRange(
      r.start + r.removed,
      this.destructedValue.length - 1
    );
  }
  calculateMaxShift(r, t) {
    if (this.filters.size <= 1) {
      let i = 0, s = t;
      for (; s < this.destructedValue.length; )
        this.destructedValue[s] instanceof wo && ++i, ++s;
      return Math.max(0, i - r.length);
    }
    const n = this.calculateInsertableSubstring(r, t);
    let o = 0;
    for (; o < this.destructedValue.length && n === this.calculateInsertableSubstring(r, t + o); )
      ++o;
    return Math.max(0, o - 1);
  }
  cleanup(r) {
    if (r.added === 0 && r.removed === 1) {
      let t = r.start;
      for (; t >= 0; ) {
        const n = this.destructedValue[t];
        if (n instanceof wo && n.char !== null) {
          n.char = null;
          break;
        } else
          --t;
      }
    }
    this.clearRange(r.start, this.destructedValue.length);
  }
  clearRange(r, t) {
    let n = r;
    for (; n < t && n < this.destructedValue.length; ) {
      const o = this.destructedValue[n];
      o instanceof wo && (o.char = null), ++n;
    }
  }
  calculateCursorPosition(r, t) {
    const n = this.firstEmptyHolderIndex();
    let o;
    r.start < n ? o = Math.min(this.firstHolderAfter(t), this.value.length) : o = n, this.cursorPos = o;
  }
  calculateInsertableSubstring(r, t) {
    let n = "", o = t;
    const i = () => {
      var s;
      for (; o < this.destructedValue.length && !(this.destructedValue[o] instanceof wo); )
        ++o;
      return (s = this.destructedValue[o]) == null ? void 0 : s.filter;
    };
    return r.split("").forEach((s) => {
      const a = i();
      a != null && a.test(s) && (n += s, ++o);
    }), n;
  }
  collectValueRange(r, t) {
    let n = "", o = r;
    for (; o <= t; ) {
      const i = this.destructedValue[o];
      i instanceof wo && i.char !== null && (n += i.char), ++o;
    }
    return n;
  }
  replaceChars(r, t, n) {
    let o = this.calculateInsertableSubstring(r, t);
    n !== void 0 && (o = o.substring(0, n));
    let i = t, s = 0;
    for (; i < this.destructedValue.length && s < o.length; ) {
      const a = this.destructedValue[i], l = o[s];
      a instanceof wo && (a.char = l, ++s), ++i;
    }
  }
  firstHolderAfter(r) {
    let t = r;
    for (; t < this.destructedValue.length && !(this.destructedValue[t] instanceof wo); )
      ++t;
    return t;
  }
}
class M1 extends ka {
  constructor(r, t) {
    super(r), this.logError = t;
  }
  onException(r) {
    this.logError(r);
  }
}
function P1(e, r, t) {
  if (typeof e.pattern == "string" && Array.isArray(e.pattern_elements) && e.pattern_elements.every((n) => n.key && typeof n.key == "string")) {
    const n = {
      pattern: e.pattern,
      alwaysVisible: !!e.always_visible,
      decoding: e.pattern_elements.map((o) => ({
        key: o.key,
        filter: o.regex && typeof o.regex == "string" ? o.regex : void 0,
        placeholder: o.placeholder && typeof o.placeholder == "string" ? o.placeholder : "_"
      }))
    };
    return t ? (t.updateMaskData(n), t) : new M1(n, r);
  }
  return t || null;
}
class N1 extends ka {
  constructor(t = void 0, n) {
    super({
      pattern: "",
      decoding: [],
      alwaysVisible: !1
    });
    Vr(this, "currencyFormatter", new Intl.NumberFormat());
    Vr(this, "decimalSeparator", ".");
    Vr(this, "localeDigits", {});
    Vr(this, "trimZeroRegExp", new RegExp(""));
    this.logError = n, this.initFormatter(t);
  }
  updateCurrencyParams(t) {
    const n = this.parseFormat(this.rawValue) || 0;
    this.initFormatter(t);
    const o = n.toString().replace(".", this.decimalSeparator);
    this.applyChangeFrom(o);
  }
  initFormatter(t) {
    try {
      this.currencyFormatter = new Intl.NumberFormat(t, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }), this.decimalSeparator = this.currencyFormatter.format(0)[1], this.localeDigits = new Array(10).fill("").reduce((i, s, a) => (i[a] = this.currencyFormatter.format(a)[0], i), {});
      const o = Object.keys(this.localeDigits).filter((i) => i !== "0").map((i) => this.localeDigits[i]).join("|");
      this.trimZeroRegExp = new RegExp(`^${this.localeDigits[0]}+(?=${o})`);
    } catch (n) {
      this.onException(X(n, {
        level: "error",
        additional: {
          locale: t
        }
      }));
    }
  }
  invalidateMaskDataForFormatted(t) {
    const n = this.currencyFormatter.format(t), o = this.formatPattern(n), i = [{
      key: "#",
      filter: `[${[...Object.values(this.localeDigits)].join("")}]`,
      placeholder: this.localeDigits[0]
    }, {
      key: this.decimalSeparator,
      filter: `[${this.decimalSeparator}]`,
      placeholder: this.decimalSeparator
    }];
    this.updateMaskData({
      pattern: o,
      decoding: i,
      alwaysVisible: this.maskData.alwaysVisible
    }, !1);
  }
  overrideRawValue(t) {
    const n = this.parseFormat(t) || 0;
    this.invalidateMaskDataForFormatted(n), super.overrideRawValue(t);
  }
  applyChangeFrom(t, n) {
    const o = cs(this.value, t), i = this.value.lastIndexOf(this.decimalSeparator), s = t.lastIndexOf(this.decimalSeparator), a = i !== s || i === -1 && s === -1, l = this.validFormat(t, o);
    this.cleanup(o);
    const u = this.parseFormat(l) || 0;
    a && this.invalidateMaskDataForFormatted(u), this.replaceChars(l, 0), this.value.length > o.start && !this.isDigit(this.value[o.start]) ? this.cursorPos = n != null ? n : this.cursorPosition : this.cursorPos = Math.abs(this.value.length - (t.length - (n != null ? n : this.cursorPosition)));
  }
  parseFormat(t) {
    return parseFloat(
      t.replace(/./g, (n) => {
        const o = this.localeDigits[n];
        return o || (n === this.decimalSeparator ? "." : "");
      })
    );
  }
  formatPattern(t) {
    let n = "";
    for (const o of t)
      n += this.isDigit(o) ? "#" : o;
    return n;
  }
  validFormat(t, n) {
    if (!t)
      return "";
    let o = -1, i = 0;
    for (; i < t.length; ) {
      if (t[i] === this.decimalSeparator && !this.inDiff(n, i)) {
        o = i;
        break;
      }
      i++;
    }
    let s = -1;
    n.added === 1 && n.removed === 0 && [",", "."].includes(t[n.start]) && (s = n.start);
    const a = this.currencyFormatter.resolvedOptions().maximumFractionDigits || 0;
    let l = a;
    if (o !== -1)
      for (i = o; i < t.length; )
        this.isDigit(t[i]) && !this.inDiff(n, i) && l--, i++;
    else {
      let _ = !1;
      for (let h = 0; h < t.length; h++) {
        const m = t[h];
        m === this.decimalSeparator ? _ = !0 : !this.inDiff(n, h) && _ && this.isDigit(m) && l--;
      }
    }
    const u = t.includes(this.decimalSeparator) || s !== -1, c = [];
    i = t.length - 1;
    let f = !1;
    for (; i >= 0; ) {
      const _ = t[i], h = c.length <= a;
      this.isDigit(_) ? this.inDiff(n, i) && !f && u ? l > 0 && (c.push(_), l--) : c.push(_) : h && o === -1 && i === s ? (c.push(this.decimalSeparator), f = !0) : h && _ === this.decimalSeparator && (o === i || o === -1) && (c.push(this.decimalSeparator), f = !0, o = i), i--;
    }
    return c.reverse().join("").replace(this.trimZeroRegExp, "");
  }
  inDiff(t, n) {
    return t.start <= n && n < t.start + t.added;
  }
  isDigit(t) {
    return !!this.localeDigits[t];
  }
  onException(t) {
    this.logError(t);
  }
}
function z1(e, r, t) {
  return t ? (t.updateCurrencyParams(e.locale), t) : new N1(e.locale, r);
}
const L1 = {
  kotlin: {
    public_default_values: !0
  },
  swift: {
    public_default_values: !0
  }
}, O1 = {
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
}, B1 = "object", R1 = {
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
}, Qd = {
  codegen: L1,
  constants: O1,
  type: B1,
  properties: R1
}, H1 = "000000000000000", Sc = "*", W1 = "00", Vc = [{
  key: "0",
  filter: "\\d",
  placeholder: "_"
}];
class U1 extends ka {
  constructor(t) {
    super({
      pattern: Dc(""),
      decoding: Vc,
      alwaysVisible: !1
    });
    Vr(this, "decimalSeparator", ".");
    Vr(this, "localeDigits", {});
    Vr(this, "trimZeroRegExp", new RegExp(""));
    this.logError = t;
  }
  overrideRawValue(t) {
    this.tryInvalidateMaskDataWith(t), super.overrideRawValue(t);
  }
  applyChangeFrom(t, n) {
    const o = cs(this.value, t);
    n !== void 0 && (o.start = Math.max(0, n - o.added));
    const i = this.rawValue, s = this.replaceBodyTail(o, t), a = this.rawValue, l = this.newMaskPatternFor(a);
    if (l == null) {
      this.calculateCursorPosition(o, s);
      return;
    }
    this.updateMaskDataWith(l), this.replaceChars(a, 0);
    const u = cs(i, a), c = u.start + u.added;
    this.calculateCursorPositionBy(c);
  }
  calculateCursorPositionBy(t) {
    let n = 0, o = 0;
    for (; n < this.destructedValue.length && o < t; )
      this.destructedValue[n++] instanceof wo && o++;
    this.cursorPos = this.firstHolderAfter(n);
  }
  tryInvalidateMaskDataWith(t) {
    const n = this.newMaskPatternFor(t);
    n && this.updateMaskDataWith(n);
  }
  newMaskPatternFor(t) {
    const n = Dc(t), o = this.maskData.pattern;
    return n !== o ? n : null;
  }
  updateMaskDataWith(t) {
    return this.updateMaskData({
      pattern: t,
      decoding: Vc,
      alwaysVisible: this.maskData.alwaysVisible
    }, !1);
  }
  onException(t) {
    this.logError(t);
  }
}
function Fc(e) {
  return "$ref" in e ? Qd.constants[e.$ref.split("/").pop()] : e;
}
function Dc(e) {
  if (!e)
    return H1;
  let r = Qd.properties.value.default_value, t = 0;
  for (; !("value" in r); ) {
    if (t >= e.length) {
      r = Fc(r[Sc]);
      break;
    }
    const n = e[t++];
    r = Fc(r[n in r ? n : Sc]);
  }
  return r.value + W1;
}
function G1(e, r) {
  return r || new U1(e);
}
function J1(e) {
  let r, t;
  return r = new Fn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function K1(e) {
  let r, t;
  return r = new hn({
    props: {
      alwaysCustomFocus: !0,
      cls: gt(
        "input",
        Bi,
        /*mods*/
        e[18]
      ),
      style: (
        /*stl*/
        e[17]
      ),
      customDescription: !0,
      customActions: "input",
      customPaddings: !0,
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: {
        default: [
          X1,
          ({ focusHandler: n, blurHandler: o, hasCustomFocus: i }) => ({
            121: n,
            122: o,
            123: i
          }),
          ({ focusHandler: n, blurHandler: o, hasCustomFocus: i }) => [
            0,
            0,
            0,
            (n ? 268435456 : 0) | (o ? 536870912 : 0) | (i ? 1073741824 : 0)
          ]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      262144 && (i.cls = gt(
        "input",
        Bi,
        /*mods*/
        n[18]
      )), o[0] & /*stl*/
      131072 && (i.style = /*stl*/
      n[17]), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*autocapitalization, description, describedBy, enterKeyType, paddingStl, isEnabled, maxLength, placeholder, value, input, isMultiline, inputType, inputMode*/
      622444 | o[1] & /*$jsonSelectAll*/
      32768 | o[3] & /*hasCustomFocus, focusHandler, blurHandler*/
      1879048192 | o[4] & /*$$scope*/
      1 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function q1(e) {
  let r, t, n, o, i, s, a, l, u;
  return {
    c() {
      r = Pe("input"), g(
        r,
        "type",
        /*inputType*/
        e[9]
      ), g(
        r,
        "inputmode",
        /*inputMode*/
        e[10]
      ), g(r, "class", t = gt("input__input", Bi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          e[123]
        ),
        singleline: !0
      })), g(r, "autocomplete", "off"), g(
        r,
        "autocapitalize",
        /*autocapitalization*/
        e[12]
      ), g(
        r,
        "aria-label",
        /*description*/
        e[11]
      ), g(r, "aria-describedby", n = /*describedBy*/
      e[14] || void 0), g(r, "style", o = cr(
        /*paddingStl*/
        e[16]
      )), r.disabled = i = !/*isEnabled*/
      e[5], g(r, "maxlength", s = /*maxLength*/
      e[6] === 1 / 0 ? void 0 : (
        /*maxLength*/
        e[6]
      )), g(
        r,
        "placeholder",
        /*placeholder*/
        e[19]
      ), r.value = /*value*/
      e[3], g(r, "enterkeyhint", a = /*enterKeyType*/
      e[13] === "default" ? void 0 : (
        /*enterKeyType*/
        e[13]
      ));
    },
    m(c, f) {
      K(c, r, f), e[102](r), l || (u = [
        Qe(
          r,
          "input",
          /*onInput*/
          e[48]
        ),
        Qe(
          r,
          "keydown",
          /*onKeyDown*/
          e[49]
        ),
        Qe(r, "mousedown", function() {
          zr(
            /*$jsonSelectAll*/
            e[46] ? (
              /*onMousedown*/
              e[50]
            ) : void 0
          ) && (e[46] ? (
            /*onMousedown*/
            e[50]
          ) : void 0).apply(this, arguments);
        }),
        Qe(r, "click", function() {
          zr(
            /*$jsonSelectAll*/
            e[46] ? (
              /*onClick*/
              e[51]
            ) : void 0
          ) && (e[46] ? (
            /*onClick*/
            e[51]
          ) : void 0).apply(this, arguments);
        }),
        Qe(r, "focus", function() {
          zr(
            /*focusHandler*/
            e[121]
          ) && e[121].apply(this, arguments);
        }),
        Qe(r, "blur", function() {
          zr(
            /*blurHandler*/
            e[122]
          ) && e[122].apply(this, arguments);
        })
      ], l = !0);
    },
    p(c, f) {
      e = c, f[0] & /*inputType*/
      512 && g(
        r,
        "type",
        /*inputType*/
        e[9]
      ), f[0] & /*inputMode*/
      1024 && g(
        r,
        "inputmode",
        /*inputMode*/
        e[10]
      ), f[3] & /*hasCustomFocus*/
      1073741824 && t !== (t = gt("input__input", Bi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          e[123]
        ),
        singleline: !0
      })) && g(r, "class", t), f[0] & /*autocapitalization*/
      4096 && g(
        r,
        "autocapitalize",
        /*autocapitalization*/
        e[12]
      ), f[0] & /*description*/
      2048 && g(
        r,
        "aria-label",
        /*description*/
        e[11]
      ), f[0] & /*describedBy*/
      16384 && n !== (n = /*describedBy*/
      e[14] || void 0) && g(r, "aria-describedby", n), f[0] & /*paddingStl*/
      65536 && o !== (o = cr(
        /*paddingStl*/
        e[16]
      )) && g(r, "style", o), f[0] & /*isEnabled*/
      32 && i !== (i = !/*isEnabled*/
      e[5]) && (r.disabled = i), f[0] & /*maxLength*/
      64 && s !== (s = /*maxLength*/
      e[6] === 1 / 0 ? void 0 : (
        /*maxLength*/
        e[6]
      )) && g(r, "maxlength", s), f[0] & /*placeholder*/
      524288 && g(
        r,
        "placeholder",
        /*placeholder*/
        e[19]
      ), f[0] & /*value*/
      8 && r.value !== /*value*/
      e[3] && (r.value = /*value*/
      e[3]), f[0] & /*enterKeyType*/
      8192 && a !== (a = /*enterKeyType*/
      e[13] === "default" ? void 0 : (
        /*enterKeyType*/
        e[13]
      )) && g(r, "enterkeyhint", a);
    },
    d(c) {
      c && J(r), e[102](null), l = !1, Rr(u);
    }
  };
}
function Y1(e) {
  let r, t, n, o, i, s, a, l, u;
  return {
    c() {
      r = Pe("textarea"), g(r, "class", t = gt("input__input", Bi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          e[123]
        ),
        multiline: !0
      })), g(
        r,
        "autocapitalize",
        /*autocapitalization*/
        e[12]
      ), g(
        r,
        "aria-label",
        /*description*/
        e[11]
      ), g(r, "aria-describedby", n = /*describedBy*/
      e[14] || void 0), g(r, "enterkeyhint", o = /*enterKeyType*/
      e[13] === "default" ? void 0 : (
        /*enterKeyType*/
        e[13]
      )), g(r, "style", i = cr(
        /*paddingStl*/
        e[16]
      )), r.disabled = s = !/*isEnabled*/
      e[5], g(r, "maxlength", a = /*maxLength*/
      e[6] === 1 / 0 ? void 0 : (
        /*maxLength*/
        e[6]
      )), g(
        r,
        "placeholder",
        /*placeholder*/
        e[19]
      ), r.value = /*value*/
      e[3];
    },
    m(c, f) {
      K(c, r, f), e[101](r), l || (u = [
        Qe(
          r,
          "input",
          /*onInput*/
          e[48]
        ),
        Qe(
          r,
          "keydown",
          /*onKeyDown*/
          e[49]
        ),
        Qe(r, "mousedown", function() {
          zr(
            /*$jsonSelectAll*/
            e[46] ? (
              /*onMousedown*/
              e[50]
            ) : void 0
          ) && (e[46] ? (
            /*onMousedown*/
            e[50]
          ) : void 0).apply(this, arguments);
        }),
        Qe(r, "click", function() {
          zr(
            /*$jsonSelectAll*/
            e[46] ? (
              /*onClick*/
              e[51]
            ) : void 0
          ) && (e[46] ? (
            /*onClick*/
            e[51]
          ) : void 0).apply(this, arguments);
        }),
        Qe(r, "focus", function() {
          zr(
            /*focusHandler*/
            e[121]
          ) && e[121].apply(this, arguments);
        }),
        Qe(r, "blur", function() {
          zr(
            /*blurHandler*/
            e[122]
          ) && e[122].apply(this, arguments);
        })
      ], l = !0);
    },
    p(c, f) {
      e = c, f[3] & /*hasCustomFocus*/
      1073741824 && t !== (t = gt("input__input", Bi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          e[123]
        ),
        multiline: !0
      })) && g(r, "class", t), f[0] & /*autocapitalization*/
      4096 && g(
        r,
        "autocapitalize",
        /*autocapitalization*/
        e[12]
      ), f[0] & /*description*/
      2048 && g(
        r,
        "aria-label",
        /*description*/
        e[11]
      ), f[0] & /*describedBy*/
      16384 && n !== (n = /*describedBy*/
      e[14] || void 0) && g(r, "aria-describedby", n), f[0] & /*enterKeyType*/
      8192 && o !== (o = /*enterKeyType*/
      e[13] === "default" ? void 0 : (
        /*enterKeyType*/
        e[13]
      )) && g(r, "enterkeyhint", o), f[0] & /*paddingStl*/
      65536 && i !== (i = cr(
        /*paddingStl*/
        e[16]
      )) && g(r, "style", i), f[0] & /*isEnabled*/
      32 && s !== (s = !/*isEnabled*/
      e[5]) && (r.disabled = s), f[0] & /*maxLength*/
      64 && a !== (a = /*maxLength*/
      e[6] === 1 / 0 ? void 0 : (
        /*maxLength*/
        e[6]
      )) && g(r, "maxlength", a), f[0] & /*placeholder*/
      524288 && g(
        r,
        "placeholder",
        /*placeholder*/
        e[19]
      ), f[0] & /*value*/
      8 && (r.value = /*value*/
      e[3]);
    },
    d(c) {
      c && J(r), e[101](null), l = !1, Rr(u);
    }
  };
}
function X1(e) {
  let r;
  function t(i, s) {
    return (
      /*isMultiline*/
      i[8] ? Y1 : q1
    );
  }
  let n = t(e), o = n(e);
  return {
    c() {
      o.c(), r = or();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = t(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && J(r), o.d(i);
    }
  };
}
function Z1(e) {
  let r, t, n, o;
  const i = [K1, J1], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[4] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = or();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (t && (pr(), ne(s[c], 1, 1, () => {
        s[c] = null;
      }), gr()), ~r ? (t = s[r], t ? t.p(l, u) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      ne(t), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
const Q1 = typeof document < "u" && "inputMode" in document.createElement("input"), Ic = {
  email: "email",
  number: "number",
  phone: "tel",
  single_line_text: "text",
  multi_line_text: "text",
  uri: "url",
  password: "password"
};
function x1(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, B, z, oe, fe, T, Y, le, A, D, M, U, q, be, Ae, Ce, he, Fe, x, Je, Ye, Xe, ye = v, Ie = () => (ye(), ye = E(s, (et) => t(74, Xe = et)), s), pe, me = v, _e = () => (me(), me = E(a, (et) => t(75, pe = et)), a), ee, ce = v, te = () => (ce(), ce = E(Ae, (et) => t(108, ee = et)), Ae), we, Ue = v, Ke = () => (Ue(), Ue = E(q, (et) => t(76, we = et)), q), $, Oe = v, Ne = () => (Oe(), Oe = E(le, (et) => t(77, $ = et)), le), ot, ct = v, rt = () => (ct(), ct = E(U, (et) => t(78, ot = et)), U), kt, it, Mt = v, ft = () => (Mt(), Mt = E(Y, (et) => t(80, it = et)), Y), Z, de = v, lt = () => (de(), de = E(T, (et) => t(81, Z = et)), T), ze, F = v, Et = () => (F(), F = E(Ce, (et) => t(82, ze = et)), Ce), ut, Vt = v, It = () => (Vt(), Vt = E(fe, (et) => t(83, ut = et)), fe), nt, Q = v, At = () => (Q(), Q = E(oe, (et) => t(84, nt = et)), oe), Pt, $t = v, Zt = () => ($t(), $t = E(M, (et) => t(85, Pt = et)), M), Ee, He = v, ht = () => (He(), He = E(D, (et) => t(86, Ee = et)), D), Te, xe = v, Le = () => (xe(), xe = E(z, (et) => t(87, Te = et)), z), Ft, Be = v, bt = () => (Be(), Be = E(B, (et) => t(88, Ft = et)), B), Ut, Tt = v, ir = () => (Tt(), Tt = E(N, (et) => t(89, Ut = et)), N), De, jt = v, sr = () => (jt(), jt = E(k, (et) => t(90, De = et)), k), rr, nr = v, fr = () => (nr(), nr = E(w, (et) => t(91, rr = et)), w), wr, Nt = v, br = () => (Nt(), Nt = E(p, (et) => t(92, wr = et)), p), Rt, mt = v, er = () => (mt(), mt = E(m, (et) => t(93, Rt = et)), m), se, kr = v, vr = () => (kr(), kr = E(h, (et) => t(94, se = et)), h), Ct, Dr = v, Br = () => (Dr(), Dr = E(_, (et) => t(95, Ct = et)), _), ar, at = v, St = () => (at(), at = E(f, (et) => t(96, ar = et)), f), Gt, Qt = v, $e = () => (Qt(), Qt = E(c, (et) => t(97, Gt = et)), c), pt, ue = v, vt = () => (ue(), ue = E(u, (et) => t(98, pt = et)), u), tr, Ht = v, yr = () => (Ht(), Ht = E(l, (et) => t(99, tr = et)), l), j, ie = v, d = () => (ie(), ie = E(be, (et) => t(100, j = et)), be), L, je = v, We = () => (je(), je = E(A, (et) => t(46, L = et)), A);
  e.$$.on_destroy.push(() => ye()), e.$$.on_destroy.push(() => me()), e.$$.on_destroy.push(() => ce()), e.$$.on_destroy.push(() => Ue()), e.$$.on_destroy.push(() => Oe()), e.$$.on_destroy.push(() => ct()), e.$$.on_destroy.push(() => Mt()), e.$$.on_destroy.push(() => de()), e.$$.on_destroy.push(() => F()), e.$$.on_destroy.push(() => Vt()), e.$$.on_destroy.push(() => Q()), e.$$.on_destroy.push(() => $t()), e.$$.on_destroy.push(() => He()), e.$$.on_destroy.push(() => xe()), e.$$.on_destroy.push(() => Be()), e.$$.on_destroy.push(() => Tt()), e.$$.on_destroy.push(() => jt()), e.$$.on_destroy.push(() => nr()), e.$$.on_destroy.push(() => Nt()), e.$$.on_destroy.push(() => mt()), e.$$.on_destroy.push(() => kr()), e.$$.on_destroy.push(() => Dr()), e.$$.on_destroy.push(() => at()), e.$$.on_destroy.push(() => Qt()), e.$$.on_destroy.push(() => ue()), e.$$.on_destroy.push(() => Ht()), e.$$.on_destroy.push(() => ie()), e.$$.on_destroy.push(() => je());
  let { componentContext: ke } = r, { layoutParams: P = void 0 } = r;
  const zt = Tr(Xr), Lt = Tr(To), Ge = zt.direction;
  mn(e, Ge, (et) => t(79, kt = et));
  let st, Jt, Er = !1, lr = null, Ir = "", yn = !1, Se = "", qr = 12, Ur, an = "", y = "", C, S = "", ae = "#000", R = "", tt = "start", Me = "center", xt = "multi_line_text", Dt = "text", H, Xt = "", dt = null, jr = "", Mr = "", wn = "", $r = !0, Gr = 1 / 0, on = "off", Ln = "default", Hn = "", lo = !1, Mn = !0, Kt = 0, b = 0;
  function V() {
    t(54, Se = ""), t(55, qr = 12), t(56, Ur = void 0), t(57, an = ""), t(58, y = ""), t(59, C = void 0), t(61, ae = "#000"), t(62, R = ""), t(63, tt = "left"), t(64, Me = "center"), t(65, xt = "multi_line_text"), t(9, Dt = "text"), t(10, H = void 0), t(5, $r = !0), t(6, Gr = 1 / 0), t(12, on = "off"), t(13, Ln = "default"), t(14, Hn = ""), Kt = 0, b = 0;
  }
  function re(et) {
    (et == null ? void 0 : et.type) === "fixed_length" ? t(53, lr = P1(et, ke.logError, lr)) : (et == null ? void 0 : et.type) === "currency" ? t(53, lr = z1(et, ke.logError, lr)) : (et == null ? void 0 : et.type) === "phone" && t(53, lr = G1(ke.logError, lr)), lr && ro();
  }
  function O(et) {
    if (!Array.isArray(ee))
      return !0;
    for (const Cr of ee)
      if (Cr) {
        if (Cr.type === "regex")
          try {
            if (!new RegExp("^" + (Cr.pattern || "") + "$").test(et))
              return !1;
          } catch (sn) {
            return ke.logError(X(new Error("Failed to create a regex"), {
              additional: { originalError: String(sn) }
            })), !0;
          }
        else if (Cr.type === "expression" && !Cr.condition)
          return !1;
      }
    return !0;
  }
  function Ve(et) {
    const Cr = et.target;
    let sn = Cr.value || "";
    sn === `
` && (sn = ""), sn.length > Gr && (sn = Ir, Cr instanceof HTMLInputElement && (Cr.value = sn)), Ir !== sn && (O(sn) ? (t(3, Ir = sn), s.setValue(sn), lr && mo(), no()) : (t(3, Ir = sn), Cr instanceof HTMLInputElement && (Cr.value = sn), An().then(() => {
      Hr(Kt, b);
    })));
  }
  function ve(et) {
    if (Kt = Yr() || 0, b = Pr() || 0, et.ctrlKey || et.metaKey || et.altKey || et.shiftKey)
      return;
    const Cr = ke.json.enter_key_actions;
    et.key === "Enter" && Array.isArray(Cr) && Cr.length && (et.preventDefault(), ke.execAnyActions(Cr));
  }
  function qt() {
    Er = !1, setTimeout(
      () => {
        Er = !0;
      },
      250
    );
  }
  function Yt() {
    Er || Jt.select();
  }
  function Yr() {
    const et = Jt;
    return et.selectionStart === null ? void 0 : et.selectionStart;
  }
  function Pr() {
    const et = Jt;
    return et.selectionEnd === null ? void 0 : et.selectionEnd;
  }
  function Hr(et, Cr) {
    const sn = Jt;
    sn.selectionStart = et, sn.selectionEnd = Cr;
  }
  async function mo() {
    if (!Jt || !lr)
      return;
    const et = Yr() || 0, Cr = Pr() || 0;
    lr.applyChangeFrom(Ir, Cr === et ? Cr : 0), a.set(lr.rawValue), kl(s, Xe = t(3, Ir = lr.value), Xe);
    const sn = lr.cursorPosition;
    await An(), document.activeElement === Jt && Hr(sn, sn);
  }
  async function ro() {
    if (!Jt || !lr)
      return;
    lr.overrideRawValue(pe), a.set(lr.rawValue), kl(s, Xe = t(3, Ir = lr.value), Xe);
    const et = lr.cursorPosition;
    await An(), document.activeElement === Jt && Hr(et, et);
  }
  function no() {
    const et = Mn;
    Mn = !1;
    const Cr = ke.json.validators;
    if (!Array.isArray(Cr) || !Cr.length)
      return;
    const Lo = ke.getJsonWithVars(Cr).filter((kn) => (kn.type === "regex" || kn.type === "expression") && kn.label_id && kn.variable), Oo = [];
    Lo.forEach((kn) => {
      const Zo = ke.getVariable(kn.variable);
      if (!Zo)
        return;
      if (Zo.getType() !== "boolean") {
        et && ke.logError(X(new Error("Incorrect variable type for the validator"), {
          additional: { variable: kn.variable }
        }));
        return;
      }
      let Cn = !1;
      if (Ir === "" && (kn.allow_empty === !0 || kn.allow_empty === 1))
        Cn = !0;
      else if (kn.type === "regex") {
        if (!kn.pattern || typeof kn.pattern != "string")
          return;
        try {
          Cn = new RegExp("^" + kn.pattern + "$").test(Ir);
        } catch {
          et && ke.logError(X(new Error("Failed to create a regular expression using the validator pattern"), {
            additional: { pattern: kn.pattern }
          }));
          return;
        }
      } else if (kn.type === "expression")
        Cn = kn.condition === !0 || kn.condition === 1;
      else
        return;
      if (Zo.setValue(Cn), !Cn) {
        const Co = zt.getComponentId(kn.label_id);
        Co && Oo.push(Co);
      }
    }), t(14, Hn = Oo.join(" "));
  }
  Qn(() => {
    t(70, lo = !0), Jt && lr && pe && (lr.overrideRawValue(pe), kl(s, Xe = t(3, Ir = lr.value), Xe));
  }), ln(() => {
    t(70, lo = !1), st && (zt.unregisterFocusable(st), t(52, st = void 0));
  });
  function $n(et) {
    Fr[et ? "unshift" : "push"](() => {
      Jt = et, t(2, Jt);
    });
  }
  function qi(et) {
    Fr[et ? "unshift" : "push"](() => {
      Jt = et, t(2, Jt);
    });
  }
  return e.$$set = (et) => {
    "componentContext" in et && t(0, ke = et.componentContext), "layoutParams" in et && t(1, P = et.layoutParams);
  }, e.$$.update = () => {
    var et;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(73, n = ke.origJson), e.$$.dirty[2] & /*origJson*/
    2048 && n && V(), e.$$.dirty[0] & /*componentContext*/
    1 && t(71, o = ke.json.text_variable), e.$$.dirty[0] & /*componentContext*/
    1 && t(72, i = (et = ke.json.mask) == null ? void 0 : et.raw_text_variable), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[2] & /*variable*/
    512 && Ie(t(7, s = o && (ke.getVariable(o, "string") || zt.awaitGlobalVariable(o, "string", "")) || Yn("temp", "string", ""))), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[2] & /*rawVariable*/
    1024 && _e(t(15, a = i && (ke.getVariable(i, "string") || zt.awaitGlobalVariable(i, "string", "")) || Yn("temp", "string", ""))), e.$$.dirty[0] & /*componentContext*/
    1 && yr(t(45, l = ke.getDerivedFromVars(ke.json.hint_text))), e.$$.dirty[0] & /*componentContext*/
    1 && vt(t(44, u = ke.getDerivedFromVars(ke.json.hint_color))), e.$$.dirty[0] & /*componentContext*/
    1 && $e(t(43, c = ke.getDerivedFromVars(ke.json.font_size))), e.$$.dirty[0] & /*componentContext*/
    1 && St(t(42, f = ke.getDerivedFromVars(ke.json.font_weight))), e.$$.dirty[0] & /*componentContext*/
    1 && Br(t(41, _ = ke.getDerivedFromVars(ke.json.font_weight_value))), e.$$.dirty[0] & /*componentContext*/
    1 && vr(t(40, h = ke.getDerivedFromVars(ke.json.font_family))), e.$$.dirty[0] & /*componentContext*/
    1 && er(t(39, m = ke.getDerivedFromVars(ke.json.font_variation_settings, void 0, !0, 0))), e.$$.dirty[0] & /*componentContext*/
    1 && br(t(38, p = ke.getDerivedFromVars(ke.json.line_height))), e.$$.dirty[0] & /*componentContext*/
    1 && fr(t(37, w = ke.getDerivedFromVars(ke.json.letter_spacing))), e.$$.dirty[0] & /*componentContext*/
    1 && sr(t(36, k = ke.getDerivedFromVars(ke.json.text_color))), e.$$.dirty[0] & /*componentContext*/
    1 && ir(t(35, N = ke.getDerivedFromVars(ke.json.highlight_color))), e.$$.dirty[0] & /*componentContext*/
    1 && bt(t(34, B = ke.getDerivedFromVars(ke.json.text_alignment_horizontal))), e.$$.dirty[0] & /*componentContext*/
    1 && Le(t(33, z = ke.getDerivedFromVars(ke.json.text_alignment_vertical))), e.$$.dirty[0] & /*componentContext*/
    1 && At(t(32, oe = ke.getDerivedFromVars(ke.json.keyboard_type))), e.$$.dirty[0] & /*componentContext*/
    1 && It(t(31, fe = ke.getDerivedFromVars(ke.json.mask))), e.$$.dirty[0] & /*componentContext*/
    1 && lt(t(30, T = ke.getDerivedFromVars(ke.json.max_visible_lines))), e.$$.dirty[0] & /*componentContext*/
    1 && ft(t(29, Y = ke.getDerivedFromVars(ke.json.paddings))), e.$$.dirty[0] & /*componentContext*/
    1 && Ne(t(28, le = ke.getDerivedFromVars(ke.json.accessibility))), e.$$.dirty[0] & /*componentContext*/
    1 && We(t(27, A = ke.getDerivedFromVars(ke.json.select_all_on_focus))), e.$$.dirty[0] & /*componentContext*/
    1 && ht(t(26, D = ke.getDerivedFromVars(ke.json.is_enabled))), e.$$.dirty[0] & /*componentContext*/
    1 && Zt(t(25, M = ke.getDerivedFromVars(ke.json.max_length))), e.$$.dirty[0] & /*componentContext*/
    1 && rt(t(24, U = ke.getDerivedFromVars(ke.json.autocapitalization))), e.$$.dirty[0] & /*componentContext*/
    1 && Ke(t(23, q = ke.getDerivedFromVars(ke.json.enter_key_type))), e.$$.dirty[0] & /*componentContext*/
    1 && d(t(22, be = ke.getDerivedFromVars(ke.json.validators))), e.$$.dirty[0] & /*componentContext*/
    1 && te(t(21, Ae = ke.getDerivedFromVars(ke.json.filters))), e.$$.dirty[0] & /*componentContext*/
    1 && Et(t(20, Ce = ke.getDerivedFromVars(ke.json.max_input_height))), e.$$.dirty[0] & /*componentContext, hasError*/
    17 | e.$$.dirty[2] & /*variable, $jsonAccessibility*/
    33280) {
      let Cr = !1;
      o ? (Lt.hasAction() || ($ == null ? void 0 : $.mode) === "exclude") && (Cr = !0, ke.logError(X(new Error('Cannot show "input" inside component with an action or inside accessibility mode=exclude')))) : (t(4, yn = !0), ke.logError(X(new Error('Missing "text_variable" in "input"')))), yn !== Cr && t(4, yn = Cr);
    }
    if (e.$$.dirty[2] & /*$jsonMask*/
    2097152 && re(ut), e.$$.dirty[0] & /*maxLength*/
    64 | e.$$.dirty[2] & /*$jsonMaxLength*/
    8388608 && t(6, Gr = Rn(Pt, Gr)), e.$$.dirty[0] & /*value, maxLength, valueVariable*/
    200 | e.$$.dirty[1] & /*inputMask*/
    4194304 | e.$$.dirty[2] & /*$valueVariable*/
    4096 && !lr && Ir !== Xe) {
      let Cr = Xe;
      Cr.length > Gr && (Cr = Cr.slice(0, Gr), s.setValue(Cr)), t(3, Ir = Cr), no();
    }
    if (e.$$.dirty[1] & /*inputMask*/
    4194304 | e.$$.dirty[2] & /*$rawValueVariable*/
    8192 && lr && lr.rawValue !== pe && (ro(), no()), e.$$.dirty[2] & /*mounted*/
    256 | e.$$.dirty[3] & /*$jsonValidators*/
    128 && j && lo && no(), e.$$.dirty[3] & /*$jsonHintText*/
    64 && t(19, he = tr), e.$$.dirty[1] & /*hintColor*/
    8388608 | e.$$.dirty[3] & /*$jsonHintColor*/
    32 && t(54, Se = dr(pt, 1, Se)), e.$$.dirty[1] & /*fontSize*/
    16777216 | e.$$.dirty[3] & /*$jsonFontSize*/
    16 && t(55, qr = Rn(Gt, qr)), e.$$.dirty[1] & /*fontWeight*/
    33554432 | e.$$.dirty[3] & /*$jsonFontWeight, $jsonFontWeightValue, $jsonFontFamily*/
    14 && (t(56, Ur = ii(ar, Ct, Ur)), se && typeof se == "string" ? t(57, an = zt.typefaceProvider(se, { fontWeight: Ur || 400 })) : t(57, an = "")), e.$$.dirty[1] & /*fontVariationSettings*/
    134217728 | e.$$.dirty[3] & /*$jsonFontVariationSettings*/
    1) {
      const Cr = wi(Rt);
      Cr !== y && t(58, y = Cr);
    }
    if (e.$$.dirty[1] & /*fontSize*/
    16777216 | e.$$.dirty[2] & /*$jsonLineHeight*/
    1073741824) {
      const Cr = wr;
      Tn(Cr) && t(59, C = Cr / qr);
    }
    e.$$.dirty[2] & /*$jsonLetterSpacing*/
    536870912 && fs(rr) && t(60, S = ge(rr)), e.$$.dirty[1] & /*textColor*/
    1073741824 | e.$$.dirty[2] & /*$jsonTextColor*/
    268435456 && t(61, ae = dr(De, 1, ae)), e.$$.dirty[2] & /*$jsonHighlightColor, highlightColor*/
    134217729 && t(62, R = dr(Ut, 1, R)), e.$$.dirty[2] & /*$jsonAlignmentHorizontal, $direction, alignmentHorizontal*/
    67239938 && t(63, tt = dl(Ft, kt, tt)), e.$$.dirty[2] & /*$jsonAlignmentVertical, alignmentVertical*/
    33554436 && t(64, Me = _l(Te, Me)), e.$$.dirty[0] & /*isEnabled*/
    32 | e.$$.dirty[2] & /*$jsonIsEnabled*/
    16777216 && t(5, $r = Zr(Ee, $r)), e.$$.dirty[2] & /*$jsonKeyboardType, $jsonMask, keyboardType*/
    6291464 && (nt && nt in Ic && (t(9, Dt = Ic[nt]), t(65, xt = nt)), (ut == null ? void 0 : ut.type) === "currency" ? (t(9, Dt = Q1 ? "text" : "tel"), t(10, H = "decimal")) : xt === "number" ? t(10, H = "decimal") : t(10, H = void 0)), e.$$.dirty[2] & /*keyboardType*/
    8 && t(8, Fe = xt === "multi_line_text"), e.$$.dirty[1] & /*lineHeight, fontSize*/
    285212672 | e.$$.dirty[2] & /*$jsonMaxInputHeight, $jsonVisibleMaxLines, $jsonPaddings, selfPadding, $direction*/
    1966112 && (Tn(ze) ? t(66, Xt = cn(ze)) : Tn(Z) ? t(66, Xt = `calc(${Z * (C || 1.25) * (qr / 10) + "em"} + ${cn(nn(it == null ? void 0 : it.top, 0) + nn(it == null ? void 0 : it.bottom, 0))})`) : t(66, Xt = ""), t(67, dt = ni(it || void 0, dt)), t(68, jr = dt ? so(
      {
        top: (Number(dt.top) || 0) / qr * 10,
        right: (Number(kt === "ltr" ? dt.end : dt.start) || Number(dt.right) || 0) / qr * 10,
        bottom: (Number(dt.bottom) || 0) / qr * 10,
        left: (Number(kt === "ltr" ? dt.start : dt.end) || Number(dt.left) || 0) / qr * 10
      },
      kt
    ) : ""), t(69, Mr = dt ? so(
      {
        top: (Number(dt.top) || 0) / qr * 10,
        bottom: (Number(dt.bottom) || 0) / qr * 10
      },
      kt
    ) : "")), e.$$.dirty[2] & /*$jsonAutocapitalization*/
    65536 && (ot === "all_characters" ? t(12, on = "characters") : ot === "sentences" ? t(12, on = "sentences") : ot === "words" ? t(12, on = "words") : (ot === "none" || ot === "auto") && t(12, on = "off")), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[2] & /*$jsonAccessibility*/
    32768 && ($ != null && $.description ? t(11, wn = Yo($)) : ke.logError(X(new Error('Missing accessibility "description" for input'), { level: "warn" }))), e.$$.dirty[2] & /*$jsonEnterKeyType*/
    16384 && (we === "default" || we === "done" || we === "go" || we === "search" || we === "send") && t(13, Ln = we), e.$$.dirty[0] & /*isMultiline*/
    256 | e.$$.dirty[2] & /*highlightColor, alignmentHorizontal, alignmentVertical*/
    7 && t(18, x = {
      "highlight-color": !!R,
      multiline: Fe,
      "alignment-horizontal": tt,
      "alignment-vertical": Me
    }), e.$$.dirty[1] & /*hintColor, lineHeight, fontWeight, fontFamily, fontVariationSettings, letterSpacing, textColor*/
    2122317824 | e.$$.dirty[2] & /*highlightColor, maxHeight*/
    17 && t(17, Je = {
      "--divkit-input-hint-color": Se,
      "--divkit-input-highlight-color": R,
      "--divkit-input-line-height": C,
      "font-weight": Ur,
      "font-family": an,
      "font-variation-settings": y,
      "letter-spacing": S,
      color: ae,
      "max-height": Xt
    }), e.$$.dirty[1] & /*fontSize*/
    16777216 | e.$$.dirty[2] & /*padding*/
    64 && t(16, Ye = { "font-size": ge(qr), padding: jr }), e.$$.dirty[1] & /*fontSize*/
    16777216 | e.$$.dirty[2] & /*verticalPadding*/
    128, e.$$.dirty[0] & /*input, componentContext, value*/
    13 | e.$$.dirty[1] & /*prevId*/
    2097152 && Jt && ke.json && (st && (zt.unregisterFocusable(st), t(52, st = void 0)), ke.id && !ke.fakeElement && (t(52, st = ke.id), zt.registerFocusable(st, {
      focus() {
        Jt && (Jt.focus(), Hr(Ir.length, Ir.length));
      }
    })));
  }, [
    ke,
    P,
    Jt,
    Ir,
    yn,
    $r,
    Gr,
    s,
    Fe,
    Dt,
    H,
    wn,
    on,
    Ln,
    Hn,
    a,
    Ye,
    Je,
    x,
    he,
    Ce,
    Ae,
    be,
    q,
    U,
    M,
    D,
    A,
    le,
    Y,
    T,
    fe,
    oe,
    z,
    B,
    N,
    k,
    w,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    L,
    Ge,
    Ve,
    ve,
    qt,
    Yt,
    st,
    lr,
    Se,
    qr,
    Ur,
    an,
    y,
    C,
    S,
    ae,
    R,
    tt,
    Me,
    xt,
    Xt,
    dt,
    jr,
    Mr,
    lo,
    o,
    i,
    n,
    Xe,
    pe,
    we,
    $,
    ot,
    kt,
    it,
    Z,
    ze,
    ut,
    nt,
    Pt,
    Ee,
    Te,
    Ft,
    Ut,
    De,
    rr,
    wr,
    Rt,
    se,
    Ct,
    ar,
    Gt,
    pt,
    tr,
    j,
    $n,
    qi
  ];
}
class $1 extends Or {
  constructor(r) {
    super(), Lr(this, r, x1, Z1, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1, -1]);
  }
}
const eb = "appkit-select", tb = "appkit-select_hint", rb = "appkit-select__select", nb = "appkit-select__option", zi = {
  select: eb,
  "select__select-text": "appkit-select__select-text",
  select_hint: tb,
  select__select: rb,
  "select__select_has-custom-focused": "appkit-select__select_has-custom-focused",
  "has-custom-focused": "appkit-has-custom-focused",
  select__option: nb
};
function Tc(e, r, t) {
  const n = e.slice();
  return n[62] = r[t], n;
}
function ob(e) {
  let r, t;
  return r = new Fn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function ib(e) {
  let r, t;
  return r = new hn({
    props: {
      cls: gt(
        "select",
        zi,
        /*mods*/
        e[11]
      ),
      style: (
        /*stl*/
        e[10]
      ),
      customDescription: !0,
      customActions: "select",
      customPaddings: !0,
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: {
        default: [
          sb,
          ({ hasCustomFocus: n, focusHandler: o, blurHandler: i }) => ({
            59: n,
            60: o,
            61: i
          }),
          ({ hasCustomFocus: n, focusHandler: o, blurHandler: i }) => [
            0,
            (n ? 268435456 : 0) | (o ? 536870912 : 0) | (i ? 1073741824 : 0)
          ]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = gt(
        "select",
        zi,
        /*mods*/
        n[11]
      )), o[0] & /*stl*/
      1024 && (i.style = /*stl*/
      n[10]), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*description, selectStl, select, $valueVariable, filteredItems, innerStl, selectText, $jsonHintText*/
      33555444 | o[1] & /*hasCustomFocus, focusHandler, blurHandler*/
      1879048192 | o[2] & /*$$scope*/
      8 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Mc(e) {
  let r, t = (
    /*item*/
    (e[62].text || /*item*/
    e[62].value) + ""
  ), n, o;
  return {
    c() {
      r = Pe("option"), n = Nn(t), g(r, "class", zi.select__option), r.__value = o = /*item*/
      e[62].value, Ta(r, r.__value);
    },
    m(i, s) {
      K(i, r, s), wt(r, n);
    },
    p(i, s) {
      s[0] & /*filteredItems*/
      32 && t !== (t = /*item*/
      (i[62].text || /*item*/
      i[62].value) + "") && Jn(n, t), s[0] & /*filteredItems*/
      32 && o !== (o = /*item*/
      i[62].value) && (r.__value = o, Ta(r, r.__value));
    },
    d(i) {
      i && J(r);
    }
  };
}
function sb(e) {
  let r, t = (
    /*selectText*/
    (e[4] || /*$jsonHintText*/
    e[25] || "​") + ""
  ), n, o, i, s, a, l, u, c, f = ur(
    /*filteredItems*/
    e[5]
  ), _ = [];
  for (let h = 0; h < f.length; h += 1)
    _[h] = Mc(Tc(e, f, h));
  return {
    c() {
      r = Pe("span"), n = Nn(t), i = _r(), s = Pe("select");
      for (let h = 0; h < _.length; h += 1)
        _[h].c();
      g(r, "class", zi["select__select-text"]), g(r, "style", o = cr(
        /*innerStl*/
        e[9]
      )), g(r, "aria-hidden", "true"), g(s, "class", a = gt("select__select", zi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          e[59]
        )
      })), g(
        s,
        "aria-label",
        /*description*/
        e[7]
      ), g(s, "style", l = cr(
        /*selectStl*/
        e[8]
      )), /*$valueVariable*/
      e[6] === void 0 && _o(() => (
        /*select_1_change_handler*/
        e[55].call(s)
      ));
    },
    m(h, m) {
      K(h, r, m), wt(r, n), K(h, i, m), K(h, s, m);
      for (let p = 0; p < _.length; p += 1)
        _[p] && _[p].m(s, null);
      e[54](s), Ma(
        s,
        /*$valueVariable*/
        e[6],
        !0
      ), u || (c = [
        Qe(
          s,
          "change",
          /*select_1_change_handler*/
          e[55]
        ),
        Qe(s, "focus", function() {
          zr(
            /*focusHandler*/
            e[60]
          ) && e[60].apply(this, arguments);
        }),
        Qe(s, "blur", function() {
          zr(
            /*blurHandler*/
            e[61]
          ) && e[61].apply(this, arguments);
        })
      ], u = !0);
    },
    p(h, m) {
      if (e = h, m[0] & /*selectText, $jsonHintText*/
      33554448 && t !== (t = /*selectText*/
      (e[4] || /*$jsonHintText*/
      e[25] || "​") + "") && Jn(n, t), m[0] & /*innerStl*/
      512 && o !== (o = cr(
        /*innerStl*/
        e[9]
      )) && g(r, "style", o), m[0] & /*filteredItems*/
      32) {
        f = ur(
          /*filteredItems*/
          e[5]
        );
        let p;
        for (p = 0; p < f.length; p += 1) {
          const w = Tc(e, f, p);
          _[p] ? _[p].p(w, m) : (_[p] = Mc(w), _[p].c(), _[p].m(s, null));
        }
        for (; p < _.length; p += 1)
          _[p].d(1);
        _.length = f.length;
      }
      m[1] & /*hasCustomFocus*/
      268435456 && a !== (a = gt("select__select", zi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          e[59]
        )
      })) && g(s, "class", a), m[0] & /*description*/
      128 && g(
        s,
        "aria-label",
        /*description*/
        e[7]
      ), m[0] & /*selectStl*/
      256 && l !== (l = cr(
        /*selectStl*/
        e[8]
      )) && g(s, "style", l), m[0] & /*$valueVariable, filteredItems*/
      96 && Ma(
        s,
        /*$valueVariable*/
        e[6]
      );
    },
    d(h) {
      h && (J(r), J(i), J(s)), un(_, h), e[54](null), u = !1, Rr(c);
    }
  };
}
function lb(e) {
  let r, t, n, o;
  const i = [ib, ob], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = or();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (t && (pr(), ne(s[c], 1, 1, () => {
        s[c] = null;
      }), gr()), ~r ? (t = s[r], t ? t.p(l, u) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      ne(t), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function ab(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, B, z, oe, fe, T, Y, le = v, A = () => (le(), le = E(B, (De) => t(42, Y = De)), B), D, M = v, U = () => (M(), M = E(N, (De) => t(43, D = De)), N), q, be = v, Ae = () => (be(), be = E(k, (De) => t(44, q = De)), k), Ce, he = v, Fe = () => (he(), he = E(w, (De) => t(45, Ce = De)), w), x, Je = v, Ye = () => (Je(), Je = E(p, (De) => t(46, x = De)), p), Xe, ye = v, Ie = () => (ye(), ye = E(m, (De) => t(47, Xe = De)), m), pe, me = v, _e = () => (me(), me = E(h, (De) => t(48, pe = De)), h), ee, ce = v, te = () => (ce(), ce = E(_, (De) => t(49, ee = De)), _), we, Ue = v, Ke = () => (Ue(), Ue = E(f, (De) => t(50, we = De)), f), $, Oe = v, Ne = () => (Oe(), Oe = E(c, (De) => t(51, $ = De)), c), ot, ct, rt = v, kt = () => (rt(), rt = E(l, (De) => t(53, ct = De)), l), it, Mt = v, ft = () => (Mt(), Mt = E(a, (De) => t(6, it = De)), a), Z, de = v, lt = () => (de(), de = E(u, (De) => t(25, Z = De)), u);
  e.$$.on_destroy.push(() => le()), e.$$.on_destroy.push(() => M()), e.$$.on_destroy.push(() => be()), e.$$.on_destroy.push(() => he()), e.$$.on_destroy.push(() => Je()), e.$$.on_destroy.push(() => ye()), e.$$.on_destroy.push(() => me()), e.$$.on_destroy.push(() => ce()), e.$$.on_destroy.push(() => Ue()), e.$$.on_destroy.push(() => Oe()), e.$$.on_destroy.push(() => rt()), e.$$.on_destroy.push(() => Mt()), e.$$.on_destroy.push(() => de());
  let { componentContext: ze } = r, { layoutParams: F = void 0 } = r;
  const Et = Tr(Xr), ut = Tr(To), Vt = Et.direction;
  mn(e, Vt, (De) => t(52, ot = De));
  let It, nt, Q = !1, At = "", Pt = null, $t = "", Zt = "rgba(0,0,0,.45)", Ee = 12, He, ht = "", Te = "", xe, Le = "", Ft = "#000", Be = "", bt;
  function Ut() {
    t(28, Pt = null), t(30, Zt = "rgba(0,0,0,.45)"), t(31, Ee = 12), t(32, He = void 0), t(33, ht = ""), t(34, Te = ""), t(35, xe = void 0), t(36, Le = ""), t(37, Ft = "#000"), t(7, Be = "");
  }
  ln(() => {
    It && (Et.unregisterFocusable(It), t(27, It = void 0));
  });
  function Tt(De) {
    Fr[De ? "unshift" : "push"](() => {
      nt = De, t(2, nt);
    });
  }
  function ir() {
    it = N_(this), a.set(it), t(5, s), t(40, i), t(0, ze);
  }
  return e.$$set = (De) => {
    "componentContext" in De && t(0, ze = De.componentContext), "layoutParams" in De && t(1, F = De.layoutParams);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(41, n = ze.origJson), e.$$.dirty[1] & /*origJson*/
    1024 && n && Ut(), e.$$.dirty[0] & /*componentContext*/
    1 && t(39, o = ze.json.value_variable), e.$$.dirty[0] & /*componentContext*/
    1 && t(40, i = ze.json.options), e.$$.dirty[1] & /*items*/
    512 && t(5, s = Array.isArray(i) && i.filter((De) => typeof De.value == "string") || []), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*variable*/
    256 && ft(t(24, a = o && (ze.getVariable(o, "string") || Et.awaitGlobalVariable(o, "string", "")) || Yn("temp", "string", ""))), e.$$.dirty[0] & /*componentContext*/
    1 && kt(t(23, l = ze.getDerivedFromVars(ze.json.paddings))), e.$$.dirty[0] & /*componentContext*/
    1 && lt(t(22, u = ze.getDerivedFromVars(ze.json.hint_text))), e.$$.dirty[0] & /*componentContext*/
    1 && Ne(t(21, c = ze.getDerivedFromVars(ze.json.hint_color))), e.$$.dirty[0] & /*componentContext*/
    1 && Ke(t(20, f = ze.getDerivedFromVars(ze.json.font_size))), e.$$.dirty[0] & /*componentContext*/
    1 && te(t(19, _ = ze.getDerivedFromVars(ze.json.font_weight))), e.$$.dirty[0] & /*componentContext*/
    1 && _e(t(18, h = ze.getDerivedFromVars(ze.json.font_weight_value))), e.$$.dirty[0] & /*componentContext*/
    1 && Ie(t(17, m = ze.getDerivedFromVars(ze.json.font_family))), e.$$.dirty[0] & /*componentContext*/
    1 && Ye(t(16, p = ze.getDerivedFromVars(ze.json.font_variation_settings, void 0, !0, 0))), e.$$.dirty[0] & /*componentContext*/
    1 && Fe(t(15, w = ze.getDerivedFromVars(ze.json.line_height))), e.$$.dirty[0] & /*componentContext*/
    1 && Ae(t(14, k = ze.getDerivedFromVars(ze.json.letter_spacing))), e.$$.dirty[0] & /*componentContext*/
    1 && U(t(13, N = ze.getDerivedFromVars(ze.json.text_color))), e.$$.dirty[0] & /*componentContext*/
    1 && A(t(12, B = ze.getDerivedFromVars(ze.json.accessibility))), e.$$.dirty[0] & /*filteredItems, componentContext*/
    33 && (Array.isArray(s) && s.length || ze.logError(X(new Error('Empty selection "items" in "select"')))), e.$$.dirty[0] & /*componentContext, hasError*/
    9 | e.$$.dirty[1] & /*variable, $jsonAccessibility*/
    2304) {
      let De = !1;
      o ? (ut.hasAction() || (Y == null ? void 0 : Y.mode) === "exclude") && (De = !0, ze.logError(X(new Error('Cannot show "select" inside component with an action or inside accessibility mode=exclude')))) : (t(3, Q = !0), ze.logError(X(new Error('Missing "value_variable" in "select"')))), Q !== De && t(3, Q = De);
    }
    if (e.$$.dirty[0] & /*filteredItems, $valueVariable, componentContext*/
    97 | e.$$.dirty[1] & /*prevWarnValue*/
    128) {
      const De = s.find((jt) => jt.value === it);
      De ? t(4, At = (typeof De.text == "string" ? De.text : De.value) || "") : (t(4, At = ""), it && bt !== it && (t(38, bt = it), ze.logError(X(new Error('Value from the variable was not found in the selection items for "select"')))));
    }
    if (e.$$.dirty[1] & /*$jsonFontSize, fontSize*/
    524289 && t(31, Ee = Rn(we, Ee)), e.$$.dirty[0] & /*selfPadding*/
    268435456 | e.$$.dirty[1] & /*$jsonPaddings, fontSize, $direction*/
    6291457 && (t(28, Pt = ni(ct || void 0, Pt)), t(29, $t = Pt ? so(
      {
        top: (Number(Pt.top) || 0) / Ee * 10,
        right: (Number(ot === "ltr" ? Pt.end : Pt.start) || Number(Pt.right) || 0) / Ee * 10,
        bottom: (Number(Pt.bottom) || 0) / Ee * 10,
        left: (Number(ot === "ltr" ? Pt.start : Pt.end) || Number(Pt.left) || 0) / Ee * 10
      },
      ot
    ) : "")), e.$$.dirty[0] & /*hintColor*/
    1073741824 | e.$$.dirty[1] & /*$jsonHintColor*/
    1048576 && t(30, Zt = dr($, 1, Zt)), e.$$.dirty[1] & /*$jsonFontWeight, $jsonFontWeightValue, fontWeight, $jsonFontFamily*/
    458754 && (t(32, He = ii(ee, pe, He)), Xe && typeof Xe == "string" ? t(33, ht = Et.typefaceProvider(Xe, { fontWeight: He || 400 })) : t(33, ht = "")), e.$$.dirty[1] & /*$jsonFontVariationSettings, fontVariationSettings*/
    32776) {
      const De = wi(x);
      De !== Te && t(34, Te = De);
    }
    if (e.$$.dirty[1] & /*$jsonLineHeight, fontSize*/
    16385) {
      const De = Ce;
      Tn(De) && t(35, xe = De / Ee);
    }
    e.$$.dirty[1] & /*$jsonLetterSpacing, fontSize*/
    8193 && fs(q) && t(36, Le = ge(q / Ee * 10)), e.$$.dirty[1] & /*$jsonTextColor, textColor*/
    4160 && t(37, Ft = dr(D, 1, Ft)), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*$jsonAccessibility*/
    2048 && (Y != null && Y.description ? t(7, Be = Yo(Y)) : ze.logError(X(new Error('Missing accessibility "description" for select'), { level: "warn" }))), e.$$.dirty[0] & /*selectText*/
    16 && t(11, z = { hint: !At }), e.$$.dirty[0] & /*hintColor*/
    1073741824 | e.$$.dirty[1] & /*fontWeight, fontFamily, fontVariationSettings, textColor*/
    78 && t(10, oe = {
      "--divkit-input-hint-color": Zt,
      "font-weight": He,
      "font-family": ht,
      "font-variation-settings": Te,
      color: Ft
    }), e.$$.dirty[0] & /*padding*/
    536870912 | e.$$.dirty[1] & /*fontSize, lineHeight, letterSpacing*/
    49 && t(9, fe = {
      padding: $t,
      "font-size": ge(Ee),
      "line-height": xe,
      "letter-spacing": Le
    }), e.$$.dirty[1] & /*fontSize, lineHeight, letterSpacing*/
    49 && t(8, T = {
      "font-size": ge(Ee),
      "line-height": xe,
      "letter-spacing": Le
    }), e.$$.dirty[0] & /*componentContext, select, prevId*/
    134217733 && ze.json && nt && (It && (Et.unregisterFocusable(It), t(27, It = void 0)), ze.id && !ze.fakeElement && (t(27, It = ze.id), Et.registerFocusable(It, {
      focus() {
        nt && nt.focus();
      }
    })));
  }, [
    ze,
    F,
    nt,
    Q,
    At,
    s,
    it,
    Be,
    T,
    fe,
    oe,
    z,
    B,
    N,
    k,
    w,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    a,
    Z,
    Vt,
    It,
    Pt,
    $t,
    Zt,
    Ee,
    He,
    ht,
    Te,
    xe,
    Le,
    Ft,
    bt,
    o,
    i,
    n,
    Y,
    D,
    q,
    Ce,
    x,
    Xe,
    pe,
    ee,
    we,
    $,
    ot,
    ct,
    Tt,
    ir
  ];
}
class ub extends Or {
  constructor(r) {
    super(), Lr(this, r, ab, lb, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const cb = "appkit-video__video", fb = "appkit-video__container", db = "appkit-video_absolute", Ci = {
  video__video: cb,
  video__container: fb,
  "video__aspect-wrapper": "appkit-video__aspect-wrapper",
  video_absolute: db
};
function _b(e, r) {
  return Array.isArray(e) && e.length ? e.filter((t) => (t == null ? void 0 : t.type) === "video_source" && typeof t.url == "string" && typeof t.mime_type == "string").map((t) => {
    const n = {
      src: t.url
    };
    return t.mime_type && (n.type = t.mime_type), n;
  }) : r;
}
function pb(e) {
  return e === "fill" ? "cover" : e === "no_scale" ? "none" : "contain";
}
function Pc(e, r, t) {
  const n = e.slice();
  return n[60] = r[t], n;
}
function Nc(e, r, t) {
  const n = e.slice();
  return n[60] = r[t], n;
}
function gb(e) {
  let r, t;
  return r = new Fn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function hb(e) {
  let r, t;
  return r = new hn({
    props: {
      cls: gt(
        "video",
        Ci,
        /*mods*/
        e[15]
      ),
      customActions: "video",
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      heightByAspect: (
        /*aspectPaddingBottom*/
        e[11] !== "0"
      ),
      $$slots: { default: [vb] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      32768 && (i.cls = gt(
        "video",
        Ci,
        /*mods*/
        n[15]
      )), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*aspectPaddingBottom*/
      2048 && (i.heightByAspect = /*aspectPaddingBottom*/
      n[11] !== "0"), o[0] & /*aspectPaddingBottom, videoParentElem, providedVideoTemplate, shouldUseVideoProvider, style, loop, autoplay, muted, poster, preload, videoElem, sources*/
      32760 | o[2] & /*$$scope*/
      8 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function mb(e) {
  let r, t, n, o, i, s = ur(
    /*sources*/
    e[4]
  ), a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = Lc(Pc(e, s, l));
  return {
    c() {
      r = Pe("video");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      g(r, "class", Ci.video__video), g(r, "style", t = cr(
        /*style*/
        e[14]
      )), r.playsInline = !0, r.loop = /*loop*/
      e[5], r.autoplay = /*autoplay*/
      e[6], r.muted = /*muted*/
      e[7], g(
        r,
        "poster",
        /*poster*/
        e[9]
      ), g(r, "preload", n = /*preload*/
      e[8] ? "metadata" : "auto");
    },
    m(l, u) {
      K(l, r, u);
      for (let c = 0; c < a.length; c += 1)
        a[c] && a[c].m(r, null);
      e[52](r), o || (i = [
        Qe(
          r,
          "timeupdate",
          /*onTimeUpdate*/
          e[26]
        ),
        Qe(
          r,
          "ended",
          /*onEnd*/
          e[27]
        ),
        Qe(
          r,
          "playing",
          /*onPlaying*/
          e[28]
        ),
        Qe(
          r,
          "pause",
          /*onPause*/
          e[29]
        ),
        Qe(
          r,
          "waiting",
          /*onWaiting*/
          e[30]
        ),
        Qe(
          r,
          "error",
          /*onError*/
          e[31]
        )
      ], o = !0);
    },
    p(l, u) {
      if (u[0] & /*sources*/
      16 | u[1] & /*onError*/
      1) {
        s = ur(
          /*sources*/
          l[4]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const f = Pc(l, s, c);
          a[c] ? a[c].p(f, u) : (a[c] = Lc(f), a[c].c(), a[c].m(r, null));
        }
        for (; c < a.length; c += 1)
          a[c].d(1);
        a.length = s.length;
      }
      u[0] & /*style*/
      16384 && t !== (t = cr(
        /*style*/
        l[14]
      )) && g(r, "style", t), u[0] & /*loop*/
      32 && (r.loop = /*loop*/
      l[5]), u[0] & /*autoplay*/
      64 && (r.autoplay = /*autoplay*/
      l[6]), u[0] & /*muted*/
      128 && (r.muted = /*muted*/
      l[7]), u[0] & /*poster*/
      512 && g(
        r,
        "poster",
        /*poster*/
        l[9]
      ), u[0] & /*preload*/
      256 && n !== (n = /*preload*/
      l[8] ? "metadata" : "auto") && g(r, "preload", n);
    },
    d(l) {
      l && J(r), un(a, l), e[52](null), o = !1, Rr(i);
    }
  };
}
function bb(e) {
  let r;
  return {
    c() {
      r = Pe("div"), g(r, "class", Ci.video__container);
    },
    m(t, n) {
      K(t, r, n), r.innerHTML = /*providedVideoTemplate*/
      e[12], e[51](r);
    },
    p(t, n) {
      n[0] & /*providedVideoTemplate*/
      4096 && (r.innerHTML = /*providedVideoTemplate*/
      t[12]);
    },
    d(t) {
      t && J(r), e[51](null);
    }
  };
}
function yb(e) {
  let r, t = `${/*aspectPaddingBottom*/
  e[11]}%`;
  function n(s, a) {
    return (
      /*shouldUseVideoProvider*/
      s[13] ? kb : wb
    );
  }
  let o = n(e), i = o(e);
  return {
    c() {
      r = Pe("div"), i.c(), g(r, "class", Ci["video__aspect-wrapper"]), I(r, "padding-bottom", t);
    },
    m(s, a) {
      K(s, r, a), i.m(r, null);
    },
    p(s, a) {
      o === (o = n(s)) && i ? i.p(s, a) : (i.d(1), i = o(s), i && (i.c(), i.m(r, null))), a[0] & /*aspectPaddingBottom*/
      2048 && t !== (t = `${/*aspectPaddingBottom*/
      s[11]}%`) && I(r, "padding-bottom", t);
    },
    d(s) {
      s && J(r), i.d();
    }
  };
}
function zc(e) {
  let r, t, n, o, i;
  return {
    c() {
      r = Pe("source"), Xn(r.src, t = /*source*/
      e[60].src) || g(r, "src", t), g(r, "type", n = /*source*/
      e[60].type);
    },
    m(s, a) {
      K(s, r, a), o || (i = Qe(
        r,
        "error",
        /*onError*/
        e[31]
      ), o = !0);
    },
    p(s, a) {
      a[0] & /*sources*/
      16 && !Xn(r.src, t = /*source*/
      s[60].src) && g(r, "src", t), a[0] & /*sources*/
      16 && n !== (n = /*source*/
      s[60].type) && g(r, "type", n);
    },
    d(s) {
      s && J(r), o = !1, i();
    }
  };
}
function Lc(e) {
  let r = (
    /*source*/
    e[60]
  ), t, n = zc(e);
  return {
    c() {
      n.c(), t = or();
    },
    m(o, i) {
      n.m(o, i), K(o, t, i);
    },
    p(o, i) {
      i[0] & /*sources*/
      16 && Sr(r, r = /*source*/
      o[60]) ? (n.d(1), n = zc(o), n.c(), n.m(t.parentNode, t)) : n.p(o, i);
    },
    d(o) {
      o && J(t), n.d(o);
    }
  };
}
function wb(e) {
  let r, t, n, o, i, s = ur(
    /*sources*/
    e[4]
  ), a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = Bc(Nc(e, s, l));
  return {
    c() {
      r = Pe("video");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      g(r, "class", Ci.video__video), g(r, "style", t = cr(
        /*style*/
        e[14]
      )), r.playsInline = !0, r.loop = /*loop*/
      e[5], r.autoplay = /*autoplay*/
      e[6], r.muted = /*muted*/
      e[7], g(
        r,
        "poster",
        /*poster*/
        e[9]
      ), g(r, "preload", n = /*preload*/
      e[8] ? "metadata" : "auto");
    },
    m(l, u) {
      K(l, r, u);
      for (let c = 0; c < a.length; c += 1)
        a[c] && a[c].m(r, null);
      e[50](r), o || (i = [
        Qe(
          r,
          "timeupdate",
          /*onTimeUpdate*/
          e[26]
        ),
        Qe(
          r,
          "ended",
          /*onEnd*/
          e[27]
        ),
        Qe(
          r,
          "playing",
          /*onPlaying*/
          e[28]
        ),
        Qe(
          r,
          "pause",
          /*onPause*/
          e[29]
        ),
        Qe(
          r,
          "waiting",
          /*onWaiting*/
          e[30]
        ),
        Qe(
          r,
          "error",
          /*onError*/
          e[31]
        )
      ], o = !0);
    },
    p(l, u) {
      if (u[0] & /*sources*/
      16 | u[1] & /*onError*/
      1) {
        s = ur(
          /*sources*/
          l[4]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const f = Nc(l, s, c);
          a[c] ? a[c].p(f, u) : (a[c] = Bc(f), a[c].c(), a[c].m(r, null));
        }
        for (; c < a.length; c += 1)
          a[c].d(1);
        a.length = s.length;
      }
      u[0] & /*style*/
      16384 && t !== (t = cr(
        /*style*/
        l[14]
      )) && g(r, "style", t), u[0] & /*loop*/
      32 && (r.loop = /*loop*/
      l[5]), u[0] & /*autoplay*/
      64 && (r.autoplay = /*autoplay*/
      l[6]), u[0] & /*muted*/
      128 && (r.muted = /*muted*/
      l[7]), u[0] & /*poster*/
      512 && g(
        r,
        "poster",
        /*poster*/
        l[9]
      ), u[0] & /*preload*/
      256 && n !== (n = /*preload*/
      l[8] ? "metadata" : "auto") && g(r, "preload", n);
    },
    d(l) {
      l && J(r), un(a, l), e[50](null), o = !1, Rr(i);
    }
  };
}
function kb(e) {
  let r;
  return {
    c() {
      r = Pe("div"), g(r, "class", Ci.video__container);
    },
    m(t, n) {
      K(t, r, n), r.innerHTML = /*providedVideoTemplate*/
      e[12], e[49](r);
    },
    p(t, n) {
      n[0] & /*providedVideoTemplate*/
      4096 && (r.innerHTML = /*providedVideoTemplate*/
      t[12]);
    },
    d(t) {
      t && J(r), e[49](null);
    }
  };
}
function Oc(e) {
  let r, t, n, o, i;
  return {
    c() {
      r = Pe("source"), Xn(r.src, t = /*source*/
      e[60].src) || g(r, "src", t), g(r, "type", n = /*source*/
      e[60].type);
    },
    m(s, a) {
      K(s, r, a), o || (i = Qe(
        r,
        "error",
        /*onError*/
        e[31]
      ), o = !0);
    },
    p(s, a) {
      a[0] & /*sources*/
      16 && !Xn(r.src, t = /*source*/
      s[60].src) && g(r, "src", t), a[0] & /*sources*/
      16 && n !== (n = /*source*/
      s[60].type) && g(r, "type", n);
    },
    d(s) {
      s && J(r), o = !1, i();
    }
  };
}
function Bc(e) {
  let r = (
    /*source*/
    e[60]
  ), t, n = Oc(e);
  return {
    c() {
      n.c(), t = or();
    },
    m(o, i) {
      n.m(o, i), K(o, t, i);
    },
    p(o, i) {
      i[0] & /*sources*/
      16 && Sr(r, r = /*source*/
      o[60]) ? (n.d(1), n = Oc(o), n.c(), n.m(t.parentNode, t)) : n.p(o, i);
    },
    d(o) {
      o && J(t), n.d(o);
    }
  };
}
function vb(e) {
  let r;
  function t(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[11] !== "0" ? yb : (
        /*shouldUseVideoProvider*/
        i[13] ? bb : mb
      )
    );
  }
  let n = t(e), o = n(e);
  return {
    c() {
      o.c(), r = or();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = t(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && J(r), o.d(i);
    }
  };
}
function jb(e) {
  let r, t, n, o;
  const i = [hb, gb], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[2] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = or();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (t && (pr(), ne(s[c], 1, 1, () => {
        s[c] = null;
      }), gr()), ~r ? (t = s[r], t ? t.p(l, u) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      ne(t), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function Cb(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N = v, B = () => (N(), N = E(a, (Be) => t(39, k = Be)), a), z, oe = v, fe = () => (oe(), oe = E(m, (Be) => t(40, z = Be)), m), T, Y = v, le = () => (Y(), Y = E(h, (Be) => t(41, T = Be)), h), A, D = v, M = () => (D(), D = E(_, (Be) => t(42, A = Be)), _), U, q = v, be = () => (q(), q = E(f, (Be) => t(43, U = Be)), f), Ae, Ce = v, he = () => (Ce(), Ce = E(c, (Be) => t(44, Ae = Be)), c), Fe, x = v, Je = () => (x(), x = E(u, (Be) => t(45, Fe = Be)), u), Ye, Xe = v, ye = () => (Xe(), Xe = E(l, (Be) => t(46, Ye = Be)), l), Ie, pe = v, me = () => (pe(), pe = E(s, (Be) => t(47, Ie = Be)), s), _e, ee = v, ce = () => (ee(), ee = E(i, (Be) => t(48, _e = Be)), i);
  e.$$.on_destroy.push(() => N()), e.$$.on_destroy.push(() => oe()), e.$$.on_destroy.push(() => Y()), e.$$.on_destroy.push(() => D()), e.$$.on_destroy.push(() => q()), e.$$.on_destroy.push(() => Ce()), e.$$.on_destroy.push(() => x()), e.$$.on_destroy.push(() => Xe()), e.$$.on_destroy.push(() => pe()), e.$$.on_destroy.push(() => ee());
  let { componentContext: te } = r, { layoutParams: we = void 0 } = r;
  const Ue = Tr(Xr), Ke = Ue.videoPlayerProvider;
  let $, Oe = !1, Ne = !1, ot, ct, rt = [], kt = !1, it = !1, Mt = !1, ft = !1, Z, de = "fit", lt = "0", ze = !1, F, Et = "", ut, Vt = !!Ke;
  function It(Be) {
    var sr, rr;
    const bt = te.getJsonWithVars({
      sources: Be.video_sources,
      repeatable: Be.repeatable,
      autostart: Be.autostart,
      preloadRequired: Be.preload_required,
      muted: Be.muted,
      preview: Be.preview,
      aspect: Be.aspect,
      scale: Be.scale,
      payload: Be.player_settings_payload
    }), Ut = Zr(bt.repeatable, !1), Tt = Zr(bt.autostart, !1), ir = Zr(bt.preloadRequired, !1), De = Zr(bt.muted, !1), jt = (sr = bt.aspect) != null && sr.ratio && Tn(bt.aspect.ratio) ? bt.aspect.ratio : void 0;
    if ((rr = bt.sources) != null && rr.length)
      return {
        sources: bt.sources,
        repeatable: Ut,
        autostart: Tt,
        preloadRequired: ir,
        muted: De,
        preview: bt.preview,
        aspect: jt,
        scale: bt.scale,
        payload: bt.payload
      };
  }
  function nt(Be) {
    var bt;
    if (Ne) {
      Ne = !1;
      return;
    }
    ut ? (bt = ut.seek) == null || bt.call(ut, Number(Be)) : ot && t(3, ot.currentTime = Number(Be) / 1e3, ot);
  }
  function Q() {
    ut ? ut.pause() : ot == null || ot.pause();
  }
  function At() {
    if (ut) {
      ut.play();
      return;
    }
    const Be = ot == null ? void 0 : ot.play();
    Be && Be.catch((bt) => {
      te.logError(X(new Error("Video playing error"), {
        level: "error",
        additional: { originalText: String(bt) }
      }));
    });
  }
  function Pt() {
    ot && (Ne = !0, o.setValue(Math.floor(ot.currentTime * 1e3)));
  }
  function $t() {
    te.execAnyActions(te.json.end_actions);
  }
  function Zt() {
    te.execAnyActions(te.json.resume_actions);
  }
  function Ee() {
    te.execAnyActions(te.json.pause_actions);
  }
  function He() {
    te.execAnyActions(te.json.buffering_actions);
  }
  function ht() {
    te.execAnyActions(te.json.fatal_actions);
  }
  Qn(() => {
    if (Ke && ct) {
      const Be = It(te.json);
      if (Be) {
        const bt = Ke.instance(ct, Be);
        bt ? t(36, ut = bt) : t(13, Vt = !1);
      }
    }
  }), ln(() => {
    $ && (Ue.unregisterInstance($), t(32, $ = void 0)), F && (F(), t(35, F = void 0)), ut && (ut.destroy(), t(36, ut = void 0));
  });
  function Te(Be) {
    Fr[Be ? "unshift" : "push"](() => {
      ct = Be, t(10, ct);
    });
  }
  function xe(Be) {
    Fr[Be ? "unshift" : "push"](() => {
      ot = Be, t(3, ot);
    });
  }
  function Le(Be) {
    Fr[Be ? "unshift" : "push"](() => {
      ct = Be, t(10, ct);
    });
  }
  function Ft(Be) {
    Fr[Be ? "unshift" : "push"](() => {
      ot = Be, t(3, ot);
    });
  }
  return e.$$set = (Be) => {
    "componentContext" in Be && t(0, te = Be.componentContext), "layoutParams" in Be && t(1, we = Be.layoutParams);
  }, e.$$.update = () => {
    var Be;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && te.json && (t(5, kt = !1), t(6, it = !1), t(7, Mt = !1), t(8, ft = !1), t(9, Z = void 0), t(33, de = "fit"), t(34, ze = !1), t(13, Vt = !!Ke)), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*customVideoInstance, $jsonSource, $jsonRepeatable, $jsonAutostart, $jsonMuted, $jsonPreload, $jsonPreview, $jsonScale, $jsonAspect*/
    260384 && te.json && ut && (_e || Ie || k || Ye || Fe || Ae || U || A)) {
      const bt = It(te.json);
      bt && ((Be = ut.update) == null || Be.call(ut, bt));
    }
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(38, n = te.json.elapsed_time_variable), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*elapsedVariableName*/
    128 && t(37, o = n && (te.getVariable(n, "integer") || Ue.awaitGlobalVariable(n, "integer", 0)) || Yn("temp", "integer", 0)), e.$$.dirty[1] & /*elapsedVariable, elapsedVariableUnsubscriber*/
    80 && o && (F && F(), t(35, F = o.subscribe(nt))), e.$$.dirty[0] & /*componentContext*/
    1 && ce(t(25, i = te.getDerivedFromVars(te.json.video_sources))), e.$$.dirty[0] & /*componentContext*/
    1 && me(t(24, s = te.getDerivedFromVars(te.json.repeatable))), e.$$.dirty[0] & /*componentContext*/
    1 && B(t(23, a = te.getDerivedFromVars(te.json.autostart))), e.$$.dirty[0] & /*componentContext*/
    1 && ye(t(22, l = te.getDerivedFromVars(te.json.muted))), e.$$.dirty[0] & /*componentContext*/
    1 && Je(t(21, u = te.getDerivedFromVars(te.json.preload_required))), e.$$.dirty[0] & /*componentContext*/
    1 && he(t(20, c = te.getDerivedFromVars(te.json.preview))), e.$$.dirty[0] & /*componentContext*/
    1 && be(t(19, f = te.getDerivedFromVars(te.json.scale))), e.$$.dirty[0] & /*componentContext*/
    1 && M(t(18, _ = te.getDerivedFromVars(te.json.aspect))), e.$$.dirty[0] & /*componentContext*/
    1 && le(t(17, h = te.getDerivedFromVars(te.json.width))), e.$$.dirty[0] & /*componentContext*/
    1 && fe(t(16, m = te.getDerivedFromVars(te.json.height))), e.$$.dirty[0] & /*sources, componentContext*/
    17 | e.$$.dirty[1] & /*$jsonSource*/
    131072 && (t(4, rt = _b(_e, rt)), rt.length ? t(2, Oe = !1) : (t(2, Oe = !0), te.logError(X(new Error('Missing "video_sources" in "video"'))))), e.$$.dirty[0] & /*loop*/
    32 | e.$$.dirty[1] & /*$jsonRepeatable*/
    65536 && t(5, kt = Zr(Ie, kt)), e.$$.dirty[0] & /*autoplay*/
    64 | e.$$.dirty[1] & /*$jsonAutostart*/
    256 && t(6, it = Zr(k, it)), e.$$.dirty[0] & /*muted*/
    128 | e.$$.dirty[1] & /*$jsonMuted*/
    32768 && t(7, Mt = Zr(Ye, Mt)), e.$$.dirty[0] & /*preload*/
    256 | e.$$.dirty[1] & /*$jsonPreload*/
    16384 && t(8, ft = Zr(Fe, ft)), e.$$.dirty[0] & /*poster*/
    512 | e.$$.dirty[1] & /*$jsonPreview*/
    8192 && t(9, Z = typeof Ae == "string" ? Vd(Ae) : Z), e.$$.dirty[1] & /*$jsonScale, scale*/
    4100 && t(33, de = pb(U) || de), e.$$.dirty[1] & /*$jsonAspect, $jsonWidth, $jsonHeight*/
    3584) {
      const bt = A == null ? void 0 : A.ratio;
      bt && Tn(bt) ? (t(11, lt = (100 / Number(bt)).toFixed(2)), t(34, ze = !0)) : (t(11, lt = "0"), t(34, ze = (!T || T.type === "match_parent") && (z == null ? void 0 : z.type) === "match_parent"));
    }
    e.$$.dirty[0] & /*componentContext, hasError*/
    5 | e.$$.dirty[1] & /*prevId*/
    2 && te.json && ($ && (Ue.unregisterInstance($), t(32, $ = void 0)), te.id && !Oe && !te.fakeElement && (t(32, $ = te.id), Ue.registerInstance($, { pause: Q, start: At }))), e.$$.dirty[0] & /*componentContext, videoElem*/
    9 | e.$$.dirty[1] & /*$jsonAutostart*/
    256 && te.json && k && ot && At(), e.$$.dirty[1] & /*isAbsolute*/
    8 && t(15, p = { absolute: ze }), e.$$.dirty[1] & /*scale*/
    4 && t(14, w = { "object-fit": de });
  }, [
    te,
    we,
    Oe,
    ot,
    rt,
    kt,
    it,
    Mt,
    ft,
    Z,
    ct,
    lt,
    Et,
    Vt,
    w,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    Pt,
    $t,
    Zt,
    Ee,
    He,
    ht,
    $,
    de,
    ze,
    F,
    ut,
    o,
    n,
    k,
    z,
    T,
    A,
    U,
    Ae,
    Fe,
    Ye,
    Ie,
    _e,
    Te,
    xe,
    Le,
    Ft
  ];
}
class Eb extends Or {
  constructor(r) {
    super(), Lr(this, r, Cb, jb, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Ab = "appkit-switch__tumbler", Sb = "appkit-switch__tumbler_checked", Vb = "appkit-switch_disabled", Fb = "appkit-switch__thumb", Db = "appkit-switch_direction_rtl", Ib = "appkit-switch__input", pi = {
  switch: "appkit-switch",
  switch__tumbler: Ab,
  switch__tumbler_checked: Sb,
  switch_disabled: Vb,
  switch__thumb: Fb,
  switch_direction_rtl: Db,
  switch__input: Ib
};
function Li(e) {
  return e === !0 || e === 1;
}
function Tb(e) {
  let r, t;
  return r = new Fn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Mb(e) {
  let r, t;
  return r = new hn({
    props: {
      cls: gt(
        "switch",
        pi,
        /*mods*/
        e[9]
      ),
      style: (
        /*stl*/
        e[8]
      ),
      customDescription: !0,
      customActions: "switch",
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: {
        default: [
          Pb,
          ({ focusHandler: n, blurHandler: o, hasCustomFocus: i }) => ({
            29: n,
            30: o,
            31: i
          }),
          ({ focusHandler: n, blurHandler: o, hasCustomFocus: i }) => [
            (n ? 536870912 : 0) | (o ? 1073741824 : 0),
            i ? 1 : 0
          ]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      512 && (i.cls = gt(
        "switch",
        pi,
        /*mods*/
        n[9]
      )), o[0] & /*stl*/
      256 && (i.style = /*stl*/
      n[8]), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*description, isEnabled, value, input, focusHandler, blurHandler*/
      1610612844 | o[1] & /*$$scope, hasCustomFocus*/
      3 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Pb(e) {
  let r, t, n, o, i, s, a, l, u;
  return {
    c() {
      r = Pe("div"), t = Pe("div"), o = _r(), i = Pe("input"), g(t, "class", pi.switch__thumb), g(r, "class", n = gt("switch__tumbler", pi, { checked: (
        /*value*/
        e[3]
      ) })), g(i, "type", "checkbox"), g(i, "class", s = gt("switch__input", pi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          e[31]
        )
      })), g(i, "autocomplete", "off"), g(
        i,
        "aria-label",
        /*description*/
        e[6]
      ), i.disabled = a = !/*isEnabled*/
      e[5], i.checked = /*value*/
      e[3];
    },
    m(c, f) {
      K(c, r, f), wt(r, t), K(c, o, f), K(c, i, f), e[25](i), l || (u = [
        Qe(
          i,
          "input",
          /*onInput*/
          e[14]
        ),
        Qe(i, "focus", function() {
          zr(
            /*focusHandler*/
            e[29]
          ) && e[29].apply(this, arguments);
        }),
        Qe(i, "blur", function() {
          zr(
            /*blurHandler*/
            e[30]
          ) && e[30].apply(this, arguments);
        })
      ], l = !0);
    },
    p(c, f) {
      e = c, f[0] & /*value*/
      8 && n !== (n = gt("switch__tumbler", pi, { checked: (
        /*value*/
        e[3]
      ) })) && g(r, "class", n), f[1] & /*hasCustomFocus*/
      1 && s !== (s = gt("switch__input", pi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          e[31]
        )
      })) && g(i, "class", s), f[0] & /*description*/
      64 && g(
        i,
        "aria-label",
        /*description*/
        e[6]
      ), f[0] & /*isEnabled*/
      32 && a !== (a = !/*isEnabled*/
      e[5]) && (i.disabled = a), f[0] & /*value*/
      8 && (i.checked = /*value*/
      e[3]);
    },
    d(c) {
      c && (J(r), J(o), J(i)), e[25](null), l = !1, Rr(u);
    }
  };
}
function Nb(e) {
  let r, t, n, o;
  const i = [Mb, Tb], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[4] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = or();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (t && (pr(), ne(s[c], 1, 1, () => {
        s[c] = null;
      }), gr()), ~r ? (t = s[r], t ? t.p(l, u) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      ne(t), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function zb(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _, h = v, m = () => (h(), h = E(s, (ye) => t(21, _ = ye)), s), p, w = v, k = () => (w(), w = E(l, (ye) => t(22, p = ye)), l), N, B = v, z = () => (B(), B = E(a, (ye) => t(23, N = ye)), a), oe, fe = v, T = () => (fe(), fe = E(i, (ye) => t(24, oe = ye)), i);
  e.$$.on_destroy.push(() => h()), e.$$.on_destroy.push(() => w()), e.$$.on_destroy.push(() => B()), e.$$.on_destroy.push(() => fe());
  let { componentContext: Y } = r, { layoutParams: le = void 0 } = r;
  const A = Tr(Xr), D = Tr(To), M = A.direction;
  mn(e, M, (ye) => t(20, f = ye));
  let U, q, be = !1, Ae = !1, Ce = "", he = !0, Fe = "#129386", x = "#1293864c";
  function Je() {
    t(5, he = !0), t(16, Fe = "#129386"), t(17, x = "#1293864c");
  }
  function Ye(ye) {
    t(3, be = ye.target.checked), i.setValue(be);
  }
  ln(() => {
    U && (A.unregisterFocusable(U), t(15, U = void 0));
  });
  function Xe(ye) {
    Fr[ye ? "unshift" : "push"](() => {
      q = ye, t(2, q);
    });
  }
  return e.$$set = (ye) => {
    "componentContext" in ye && t(0, Y = ye.componentContext), "layoutParams" in ye && t(1, le = ye.layoutParams);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(19, n = Y.origJson), e.$$.dirty[0] & /*origJson*/
    524288 && n && Je(), e.$$.dirty[0] & /*componentContext*/
    1 && t(18, o = Y.json.is_on_variable), e.$$.dirty[0] & /*variable, componentContext*/
    262145 && T(t(7, i = o && (Y.getVariable(o, "boolean") || A.awaitGlobalVariable(o, "boolean", !1)) || Yn("temp", "boolean", !1))), e.$$.dirty[0] & /*componentContext*/
    1 && m(t(12, s = Y.getDerivedFromVars(Y.json.accessibility))), e.$$.dirty[0] & /*componentContext*/
    1 && z(t(11, a = Y.getDerivedFromVars(Y.json.is_enabled))), e.$$.dirty[0] & /*componentContext*/
    1 && k(t(10, l = Y.getDerivedFromVars(Y.json.on_color))), e.$$.dirty[0] & /*variable, componentContext, $jsonAccessibility, hasError*/
    2359313) {
      let ye = !1;
      o ? (D.hasAction() || (_ == null ? void 0 : _.mode) === "exclude") && (ye = !0, Y.logError(X(new Error('Cannot show "switch" inside component with an action or inside accessibility mode=exclude')))) : (ye = !0, Y.logError(X(new Error('Missing "is_on_variable" in "switch"')))), Ae !== ye && t(4, Ae = ye);
    }
    if (e.$$.dirty[0] & /*value, $valueVariable*/
    16777224 && Li(be) !== Li(oe) && t(3, be = Li(oe)), e.$$.dirty[0] & /*$jsonIsEnabled, isEnabled*/
    8388640 && t(5, he = Zr(N, he)), e.$$.dirty[0] & /*$jsonOnColor, onColor*/
    4259840 && (t(16, Fe = dr(p, 1, Fe)), typeof p == "string")) {
      const ye = po(p);
      ye && (ye.a *= 0.3, t(17, x = da(ye)));
    }
    e.$$.dirty[0] & /*$jsonAccessibility, componentContext*/
    2097153 && (_ != null && _.description ? t(6, Ce = Yo(_)) : Y.logError(X(new Error('Missing accessibility "description" for switch'), { level: "warn" }))), e.$$.dirty[0] & /*isEnabled, $direction*/
    1048608 && t(9, u = {
      disabled: !he,
      direction: f
    }), e.$$.dirty[0] & /*onColor, onSubColor*/
    196608 && t(8, c = {
      "--divkit-switch-on-color": Fe,
      "--divkit-switch-on-sub-color": x
    }), e.$$.dirty[0] & /*input, componentContext, prevId*/
    32773 && q && Y.json && (U && (A.unregisterFocusable(U), t(15, U = void 0)), Y.id && !Y.fakeElement && (t(15, U = Y.id), A.registerFocusable(U, {
      focus() {
        q && q.focus();
      }
    })));
  }, [
    Y,
    le,
    q,
    be,
    Ae,
    he,
    Ce,
    i,
    c,
    u,
    l,
    a,
    s,
    M,
    Ye,
    U,
    Fe,
    x,
    o,
    n,
    f,
    _,
    p,
    N,
    oe,
    Xe
  ];
}
class Lb extends Or {
  constructor(r) {
    super(), Lr(this, r, zb, Nb, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Ob = "appkit-checkbox", Bb = "appkit-checkbox__box", Rb = "appkit-checkbox__box_checked", Hb = "appkit-checkbox__checkmark", Wb = "appkit-checkbox_disabled", Ub = "appkit-checkbox__input", gi = {
  checkbox: Ob,
  checkbox__box: Bb,
  checkbox__box_checked: Rb,
  checkbox__checkmark: Hb,
  checkbox_disabled: Wb,
  checkbox__input: Ub
};
function Gb(e) {
  let r, t;
  return r = new Fn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Jb(e) {
  let r, t;
  return r = new hn({
    props: {
      cls: gt(
        "checkbox",
        gi,
        /*mods*/
        e[9]
      ),
      style: (
        /*stl*/
        e[8]
      ),
      customDescription: !0,
      customActions: "checkbox",
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: {
        default: [
          Kb,
          ({ focusHandler: n, blurHandler: o, hasCustomFocus: i }) => ({
            32: n,
            33: o,
            34: i
          }),
          ({ focusHandler: n, blurHandler: o, hasCustomFocus: i }) => [
            0,
            (n ? 2 : 0) | (o ? 4 : 0) | (i ? 8 : 0)
          ]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      512 && (i.cls = gt(
        "checkbox",
        gi,
        /*mods*/
        n[9]
      )), o[0] & /*stl*/
      256 && (i.style = /*stl*/
      n[8]), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*value, description, isEnabled, input*/
      108 | o[1] & /*$$scope, hasCustomFocus, focusHandler, blurHandler*/
      30 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Kb(e) {
  let r, t, n, o, i, s, a, l, u;
  return {
    c() {
      r = Pe("div"), t = Pe("div"), o = _r(), i = Pe("input"), g(t, "class", gi.checkbox__checkmark), g(r, "class", n = gt("checkbox__box", gi, { checked: (
        /*value*/
        e[3]
      ) })), g(i, "type", "checkbox"), g(i, "class", s = gt("checkbox__input", gi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          e[34]
        )
      })), g(i, "autocomplete", "off"), g(i, "role", "checkbox"), g(
        i,
        "aria-checked",
        /*value*/
        e[3]
      ), g(
        i,
        "aria-label",
        /*description*/
        e[6]
      ), i.disabled = a = !/*isEnabled*/
      e[5], i.checked = /*value*/
      e[3];
    },
    m(c, f) {
      K(c, r, f), wt(r, t), K(c, o, f), K(c, i, f), e[28](i), l || (u = [
        Qe(
          i,
          "input",
          /*onInput*/
          e[15]
        ),
        Qe(i, "focus", function() {
          zr(
            /*focusHandler*/
            e[32]
          ) && e[32].apply(this, arguments);
        }),
        Qe(i, "blur", function() {
          zr(
            /*blurHandler*/
            e[33]
          ) && e[33].apply(this, arguments);
        })
      ], l = !0);
    },
    p(c, f) {
      e = c, f[0] & /*value*/
      8 && n !== (n = gt("checkbox__box", gi, { checked: (
        /*value*/
        e[3]
      ) })) && g(r, "class", n), f[1] & /*hasCustomFocus*/
      8 && s !== (s = gt("checkbox__input", gi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          e[34]
        )
      })) && g(i, "class", s), f[0] & /*value*/
      8 && g(
        i,
        "aria-checked",
        /*value*/
        e[3]
      ), f[0] & /*description*/
      64 && g(
        i,
        "aria-label",
        /*description*/
        e[6]
      ), f[0] & /*isEnabled*/
      32 && a !== (a = !/*isEnabled*/
      e[5]) && (i.disabled = a), f[0] & /*value*/
      8 && (i.checked = /*value*/
      e[3]);
    },
    d(c) {
      c && (J(r), J(o), J(i)), e[28](null), l = !1, Rr(u);
    }
  };
}
function qb(e) {
  let r, t, n, o;
  const i = [Jb, Gb], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[4] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = or();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (t && (pr(), ne(s[c], 1, 1, () => {
        s[c] = null;
      }), gr()), ~r ? (t = s[r], t ? t.p(l, u) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      ne(t), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function Yb(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _, h, m = v, p = () => (m(), m = E(s, (te) => t(22, h = te)), s), w, k = v, N = () => (k(), k = E(c, (te) => t(23, w = te)), c), B, z = v, oe = () => (z(), z = E(u, (te) => t(24, B = te)), u), fe, T = v, Y = () => (T(), T = E(l, (te) => t(25, fe = te)), l), le, A = v, D = () => (A(), A = E(a, (te) => t(26, le = te)), a), M, U = v, q = () => (U(), U = E(i, (te) => t(27, M = te)), i);
  e.$$.on_destroy.push(() => m()), e.$$.on_destroy.push(() => k()), e.$$.on_destroy.push(() => z()), e.$$.on_destroy.push(() => T()), e.$$.on_destroy.push(() => A()), e.$$.on_destroy.push(() => U());
  let { componentContext: be } = r, { layoutParams: Ae = void 0 } = r;
  const Ce = Tr(Xr), he = Tr(To);
  let Fe, x, Je = !1, Ye = !1, Xe = "", ye = !0, Ie = "#129386", pe = "rgba(0, 0, 0, .3)", me = "#fff";
  function _e() {
    t(5, ye = !0), t(17, Ie = "#129386"), t(18, pe = "rgba(0, 0, 0, .3)"), t(19, me = "#fff");
  }
  function ee(te) {
    t(3, Je = te.target.checked), i.setValue(Je);
  }
  ln(() => {
    Fe && (Ce.unregisterFocusable(Fe), t(16, Fe = void 0));
  });
  function ce(te) {
    Fr[te ? "unshift" : "push"](() => {
      x = te, t(2, x);
    });
  }
  return e.$$set = (te) => {
    "componentContext" in te && t(0, be = te.componentContext), "layoutParams" in te && t(1, Ae = te.layoutParams);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(21, n = be.origJson), e.$$.dirty[0] & /*origJson*/
    2097152 && n && _e(), e.$$.dirty[0] & /*componentContext*/
    1 && t(20, o = be.json.is_checked_variable), e.$$.dirty[0] & /*variable, componentContext*/
    1048577 && q(t(7, i = o && (be.getVariable(o, "boolean") || Ce.awaitGlobalVariable(o, "boolean", !1)) || Yn("temp", "boolean", !1))), e.$$.dirty[0] & /*componentContext*/
    1 && p(t(14, s = be.getDerivedFromVars(be.json.accessibility))), e.$$.dirty[0] & /*componentContext*/
    1 && D(t(13, a = be.getDerivedFromVars(be.json.is_enabled))), e.$$.dirty[0] & /*componentContext*/
    1 && Y(t(12, l = be.getDerivedFromVars(be.json.on_color))), e.$$.dirty[0] & /*componentContext*/
    1 && oe(t(11, u = be.getDerivedFromVars(be.json.off_color))), e.$$.dirty[0] & /*componentContext*/
    1 && N(t(10, c = be.getDerivedFromVars(be.json.check_mark_color))), e.$$.dirty[0] & /*variable, componentContext, $jsonAccessibility, hasError*/
    5242897) {
      let te = !1;
      o ? (he.hasAction() || (h == null ? void 0 : h.mode) === "exclude") && (te = !0, be.logError(X(new Error('Cannot show "checkbox" inside component with an action or inside accessibility mode=exclude')))) : (te = !0, be.logError(X(new Error('Missing "is_checked_variable" in "checkbox"')))), Ye !== te && t(4, Ye = te);
    }
    e.$$.dirty[0] & /*value, $valueVariable*/
    134217736 && Li(Je) !== Li(M) && t(3, Je = Li(M)), e.$$.dirty[0] & /*$jsonIsEnabled, isEnabled*/
    67108896 && t(5, ye = Zr(le, ye)), e.$$.dirty[0] & /*$jsonOnColor, onColor*/
    33685504 && t(17, Ie = dr(fe, 1, Ie)), e.$$.dirty[0] & /*$jsonOffColor, offColor*/
    17039360 && t(18, pe = dr(B, 1, pe)), e.$$.dirty[0] & /*$jsonCheckMarkColor, checkMarkColor*/
    8912896 && t(19, me = dr(w, 1, me)), e.$$.dirty[0] & /*$jsonAccessibility, componentContext*/
    4194305 && (h != null && h.description ? t(6, Xe = Yo(h)) : be.logError(X(new Error('Missing accessibility "description" for checkbox'), { level: "warn" }))), e.$$.dirty[0] & /*isEnabled*/
    32 && t(9, f = { disabled: !ye }), e.$$.dirty[0] & /*onColor, offColor, checkMarkColor*/
    917504 && t(8, _ = {
      "--divkit-checkbox-on-color": Ie,
      "--divkit-checkbox-off-color": pe,
      "--divkit-checkbox-check-mark-color": me
    }), e.$$.dirty[0] & /*input, componentContext, prevId*/
    65541 && x && be.json && (Fe && (Ce.unregisterFocusable(Fe), t(16, Fe = void 0)), be.id && !be.fakeElement && (t(16, Fe = be.id), Ce.registerFocusable(Fe, {
      focus() {
        x && x.focus();
      }
    })));
  }, [
    be,
    Ae,
    x,
    Je,
    Ye,
    ye,
    Xe,
    i,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    ee,
    Fe,
    Ie,
    pe,
    me,
    o,
    n,
    h,
    w,
    B,
    fe,
    le,
    M,
    ce
  ];
}
class Xb extends Or {
  constructor(r) {
    super(), Lr(this, r, Yb, qb, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Zb = "appkit-radio", Qb = "appkit-radio__group", xb = "appkit-radio__group_vertical", $b = "appkit-radio__group_horizontal", ey = "appkit-radio__item", ty = "appkit-radio_disabled", ry = "appkit-radio__circle", ny = "appkit-radio__circle_selected", oy = "appkit-radio__dot", iy = "appkit-radio__label", sy = "appkit-radio__input", ko = {
  radio: Zb,
  radio__group: Qb,
  radio__group_vertical: xb,
  radio__group_horizontal: $b,
  radio__item: ey,
  radio_disabled: ty,
  radio__circle: ry,
  radio__circle_selected: ny,
  radio__dot: oy,
  radio__label: iy,
  radio__input: sy
};
function Rc(e, r, t) {
  const n = e.slice();
  return n[55] = r[t], n;
}
function ly(e) {
  let r, t;
  return r = new Fn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function ay(e) {
  let r, t;
  return r = new hn({
    props: {
      cls: gt(
        "radio",
        ko,
        /*mods*/
        e[11]
      ),
      style: (
        /*stl*/
        e[9]
      ),
      customDescription: !0,
      customActions: "radio",
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: {
        default: [
          fy,
          ({ focusHandler: n, blurHandler: o, hasCustomFocus: i }) => ({
            52: n,
            53: o,
            54: i
          }),
          ({ focusHandler: n, blurHandler: o, hasCustomFocus: i }) => [
            0,
            (n ? 2097152 : 0) | (o ? 4194304 : 0) | (i ? 8388608 : 0)
          ]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = gt(
        "radio",
        ko,
        /*mods*/
        n[11]
      )), o[0] & /*stl*/
      512 && (i.style = /*stl*/
      n[9]), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*groupMods, groupStl, description, container, filteredItems, groupName, $valueVariable, isEnabled*/
      8394100 | o[1] & /*$$scope, focusHandler, blurHandler*/
      140509184 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function uy(e) {
  let r, t = (
    /*item*/
    e[55].value + ""
  ), n;
  return {
    c() {
      r = Pe("span"), n = Nn(t), g(r, "class", ko.radio__label);
    },
    m(o, i) {
      K(o, r, i), wt(r, n);
    },
    p(o, i) {
      i[0] & /*filteredItems*/
      32 && t !== (t = /*item*/
      o[55].value + "") && Jn(n, t);
    },
    d(o) {
      o && J(r);
    }
  };
}
function cy(e) {
  let r, t = (
    /*item*/
    e[55].text + ""
  ), n;
  return {
    c() {
      r = Pe("span"), n = Nn(t), g(r, "class", ko.radio__label);
    },
    m(o, i) {
      K(o, r, i), wt(r, n);
    },
    p(o, i) {
      i[0] & /*filteredItems*/
      32 && t !== (t = /*item*/
      o[55].text + "") && Jn(n, t);
    },
    d(o) {
      o && J(r);
    }
  };
}
function Hc(e) {
  let r, t, n, o, i, s, a, l, u, c, f, _, h;
  function m(N, B) {
    return (
      /*item*/
      N[55].text ? cy : uy
    );
  }
  let p = m(e), w = p(e);
  function k() {
    return (
      /*change_handler*/
      e[47](
        /*item*/
        e[55]
      )
    );
  }
  return {
    c() {
      r = Pe("label"), t = Pe("div"), n = Pe("div"), i = _r(), w.c(), s = _r(), a = Pe("input"), f = _r(), g(n, "class", ko.radio__dot), g(t, "class", o = gt("radio__circle", ko, {
        selected: (
          /*$valueVariable*/
          e[23] === /*item*/
          e[55].value
        )
      })), g(a, "type", "radio"), g(a, "class", ko.radio__input), g(
        a,
        "name",
        /*groupName*/
        e[12]
      ), a.value = l = /*item*/
      e[55].value, a.checked = u = /*$valueVariable*/
      e[23] === /*item*/
      e[55].value, a.disabled = c = !/*isEnabled*/
      e[4], g(r, "class", ko.radio__item);
    },
    m(N, B) {
      K(N, r, B), wt(r, t), wt(t, n), wt(r, i), w.m(r, null), wt(r, s), wt(r, a), wt(r, f), _ || (h = [
        Qe(a, "change", k),
        Qe(a, "focus", function() {
          zr(
            /*focusHandler*/
            e[52]
          ) && e[52].apply(this, arguments);
        }),
        Qe(a, "blur", function() {
          zr(
            /*blurHandler*/
            e[53]
          ) && e[53].apply(this, arguments);
        })
      ], _ = !0);
    },
    p(N, B) {
      e = N, B[0] & /*$valueVariable, filteredItems*/
      8388640 && o !== (o = gt("radio__circle", ko, {
        selected: (
          /*$valueVariable*/
          e[23] === /*item*/
          e[55].value
        )
      })) && g(t, "class", o), p === (p = m(e)) && w ? w.p(e, B) : (w.d(1), w = p(e), w && (w.c(), w.m(r, s))), B[0] & /*groupName*/
      4096 && g(
        a,
        "name",
        /*groupName*/
        e[12]
      ), B[0] & /*filteredItems*/
      32 && l !== (l = /*item*/
      e[55].value) && (a.value = l), B[0] & /*$valueVariable, filteredItems*/
      8388640 && u !== (u = /*$valueVariable*/
      e[23] === /*item*/
      e[55].value) && (a.checked = u), B[0] & /*isEnabled*/
      16 && c !== (c = !/*isEnabled*/
      e[4]) && (a.disabled = c);
    },
    d(N) {
      N && J(r), w.d(), _ = !1, Rr(h);
    }
  };
}
function fy(e) {
  let r, t, n = ur(
    /*filteredItems*/
    e[5]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Hc(Rc(e, n, i));
  return {
    c() {
      r = Pe("div");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(r, "class", t = gt(
        "radio__group",
        ko,
        /*groupMods*/
        e[10]
      )), g(
        r,
        "style",
        /*groupStl*/
        e[8]
      ), g(r, "role", "radiogroup"), g(
        r,
        "aria-label",
        /*description*/
        e[6]
      );
    },
    m(i, s) {
      K(i, r, s);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(r, null);
      e[48](r);
    },
    p(i, s) {
      if (s[0] & /*groupName, filteredItems, $valueVariable, isEnabled, onChange*/
      25169968 | s[1] & /*focusHandler, blurHandler*/
      6291456) {
        n = ur(
          /*filteredItems*/
          i[5]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = Rc(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Hc(l), o[a].c(), o[a].m(r, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
      s[0] & /*groupMods*/
      1024 && t !== (t = gt(
        "radio__group",
        ko,
        /*groupMods*/
        i[10]
      )) && g(r, "class", t), s[0] & /*groupStl*/
      256 && g(
        r,
        "style",
        /*groupStl*/
        i[8]
      ), s[0] & /*description*/
      64 && g(
        r,
        "aria-label",
        /*description*/
        i[6]
      );
    },
    d(i) {
      i && J(r), un(o, i), e[48](null);
    }
  };
}
function dy(e) {
  let r, t, n, o;
  const i = [ay, ly], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = or();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (t && (pr(), ne(s[c], 1, 1, () => {
        s[c] = null;
      }), gr()), ~r ? (t = s[r], t ? t.p(l, u) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      ne(t), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function _y(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, B, z, oe, fe, T, Y = v, le = () => (Y(), Y = E(l, (He) => t(37, T = He)), l), A, D = v, M = () => (D(), D = E(k, (He) => t(38, A = He)), k), U, q = v, be = () => (q(), q = E(w, (He) => t(39, U = He)), w), Ae, Ce = v, he = () => (Ce(), Ce = E(p, (He) => t(40, Ae = He)), p), Fe, x = v, Je = () => (x(), x = E(m, (He) => t(41, Fe = He)), m), Ye, Xe = v, ye = () => (Xe(), Xe = E(h, (He) => t(42, Ye = He)), h), Ie, pe = v, me = () => (pe(), pe = E(_, (He) => t(43, Ie = He)), _), _e, ee = v, ce = () => (ee(), ee = E(f, (He) => t(44, _e = He)), f), te, we = v, Ue = () => (we(), we = E(c, (He) => t(45, te = He)), c), Ke, $ = v, Oe = () => ($(), $ = E(u, (He) => t(46, Ke = He)), u), Ne, ot = v, ct = () => (ot(), ot = E(a, (He) => t(23, Ne = He)), a);
  e.$$.on_destroy.push(() => Y()), e.$$.on_destroy.push(() => D()), e.$$.on_destroy.push(() => q()), e.$$.on_destroy.push(() => Ce()), e.$$.on_destroy.push(() => x()), e.$$.on_destroy.push(() => Xe()), e.$$.on_destroy.push(() => pe()), e.$$.on_destroy.push(() => ee()), e.$$.on_destroy.push(() => we()), e.$$.on_destroy.push(() => $()), e.$$.on_destroy.push(() => ot());
  let { componentContext: rt } = r, { layoutParams: kt = void 0 } = r;
  const it = Tr(Xr), Mt = Tr(To);
  let ft, Z, de = !1, lt = "", ze = !0, F = "#129386", Et = "rgba(0, 0, 0, 0.3)", ut = "", Vt, It, nt = "", Q = "vertical", At = 8;
  function Pt() {
    t(4, ze = !0), t(26, F = "#129386"), t(27, Et = "rgba(0, 0, 0, 0.3)"), t(28, ut = ""), t(29, Vt = void 0), t(30, It = void 0), t(31, nt = ""), t(32, Q = "vertical"), t(33, At = 8);
  }
  function $t(He) {
    a.setValue(He);
  }
  ln(() => {
    ft && (it.unregisterFocusable(ft), t(25, ft = void 0));
  });
  const Zt = (He) => $t(He.value);
  function Ee(He) {
    Fr[He ? "unshift" : "push"](() => {
      Z = He, t(2, Z);
    });
  }
  return e.$$set = (He) => {
    "componentContext" in He && t(0, rt = He.componentContext), "layoutParams" in He && t(1, kt = He.layoutParams);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(36, n = rt.origJson), e.$$.dirty[1] & /*origJson*/
    32 && n && Pt(), e.$$.dirty[0] & /*componentContext*/
    1 && t(34, o = rt.json.value_variable), e.$$.dirty[0] & /*componentContext*/
    1 && t(35, i = rt.json.options), e.$$.dirty[1] & /*items*/
    16 && t(5, s = Array.isArray(i) && i.filter((He) => typeof He.value == "string") || []), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*variable*/
    8 && ct(t(7, a = o && (rt.getVariable(o, "string") || it.awaitGlobalVariable(o, "string", "")) || Yn("temp", "string", ""))), e.$$.dirty[0] & /*componentContext*/
    1 && le(t(22, l = rt.getDerivedFromVars(rt.json.accessibility))), e.$$.dirty[0] & /*componentContext*/
    1 && Oe(t(21, u = rt.getDerivedFromVars(rt.json.is_enabled))), e.$$.dirty[0] & /*componentContext*/
    1 && Ue(t(20, c = rt.getDerivedFromVars(rt.json.selected_color))), e.$$.dirty[0] & /*componentContext*/
    1 && ce(t(19, f = rt.getDerivedFromVars(rt.json.default_color))), e.$$.dirty[0] & /*componentContext*/
    1 && me(t(18, _ = rt.getDerivedFromVars(rt.json.text_color))), e.$$.dirty[0] & /*componentContext*/
    1 && ye(t(17, h = rt.getDerivedFromVars(rt.json.font_size))), e.$$.dirty[0] & /*componentContext*/
    1 && Je(t(16, m = rt.getDerivedFromVars(rt.json.font_weight))), e.$$.dirty[0] & /*componentContext*/
    1 && he(t(15, p = rt.getDerivedFromVars(rt.json.font_family))), e.$$.dirty[0] & /*componentContext*/
    1 && be(t(14, w = rt.getDerivedFromVars(rt.json.orientation))), e.$$.dirty[0] & /*componentContext*/
    1 && M(t(13, k = rt.getDerivedFromVars(rt.json.item_spacing))), e.$$.dirty[0] & /*filteredItems, componentContext*/
    33 && (Array.isArray(s) && s.length || rt.logError(X(new Error('Empty "options" in "radio"')))), e.$$.dirty[0] & /*componentContext, hasError*/
    9 | e.$$.dirty[1] & /*variable, $jsonAccessibility*/
    72) {
      let He = !1;
      o ? (Mt.hasAction() || (T == null ? void 0 : T.mode) === "exclude") && (He = !0, rt.logError(X(new Error('Cannot show "radio" inside component with an action or inside accessibility mode=exclude')))) : (He = !0, rt.logError(X(new Error('Missing "value_variable" in "radio"')))), de !== He && t(3, de = He);
    }
    e.$$.dirty[0] & /*isEnabled*/
    16 | e.$$.dirty[1] & /*$jsonIsEnabled*/
    32768 && t(4, ze = Zr(Ke, ze)), e.$$.dirty[0] & /*selectedColor*/
    67108864 | e.$$.dirty[1] & /*$jsonSelectedColor*/
    16384 && t(26, F = dr(te, 1, F)), e.$$.dirty[0] & /*defaultColor*/
    134217728 | e.$$.dirty[1] & /*$jsonDefaultColor*/
    8192 && t(27, Et = dr(_e, 1, Et)), e.$$.dirty[0] & /*textColor*/
    268435456 | e.$$.dirty[1] & /*$jsonTextColor*/
    4096 && t(28, ut = dr(Ie, 1, ut)), e.$$.dirty[0] & /*fontSize*/
    536870912 | e.$$.dirty[1] & /*$jsonFontSize*/
    2048 && t(29, Vt = typeof Ye == "number" && Ye > 0 ? Ye : Vt), e.$$.dirty[0] & /*fontWeight*/
    1073741824 | e.$$.dirty[1] & /*$jsonFontWeight, $jsonFontFamily*/
    1536 && (t(30, It = ii(Fe, void 0, It)), Ae && typeof Ae == "string" ? t(31, nt = it.typefaceProvider(Ae, { fontWeight: It || 400 })) : t(31, nt = "")), e.$$.dirty[1] & /*$jsonOrientation, orientation*/
    258 && t(32, Q = U === "horizontal" || U === "vertical" ? U : Q), e.$$.dirty[1] & /*$jsonItemSpacing, itemSpacing*/
    132 && t(33, At = typeof A == "number" && A >= 0 ? A : At), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*$jsonAccessibility*/
    64 && (T != null && T.description ? t(6, lt = Yo(T)) : rt.logError(X(new Error('Missing accessibility "description" for radio'), { level: "warn" }))), e.$$.dirty[0] & /*componentContext*/
    1 && t(12, N = rt.id || `radio_${Math.random().toString(36).slice(2)}`), e.$$.dirty[0] & /*isEnabled*/
    16 && t(11, B = { disabled: !ze }), e.$$.dirty[1] & /*orientation*/
    2 && t(10, z = { [Q]: !0 }), e.$$.dirty[0] & /*selectedColor, defaultColor, textColor, fontSize, fontWeight*/
    2080374784 | e.$$.dirty[1] & /*fontFamily*/
    1 && t(9, oe = {
      "--divkit-radio-selected-color": F,
      "--divkit-radio-default-color": Et,
      ...ut ? { "--divkit-radio-text-color": ut } : {},
      ...Vt ? { "font-size": ge(Vt) } : {},
      ...It ? { "font-weight": It } : {},
      ...nt ? { "font-family": nt } : {}
    }), e.$$.dirty[1] & /*itemSpacing*/
    4 && t(8, fe = `gap: ${ge(At)}`), e.$$.dirty[0] & /*container, componentContext, prevId*/
    33554437 && Z && rt.json && (ft && (it.unregisterFocusable(ft), t(25, ft = void 0)), rt.id && !rt.fakeElement && (t(25, ft = rt.id), it.registerFocusable(ft, {
      focus() {
        if (Z) {
          const He = Z.querySelector("input");
          He && He.focus();
        }
      }
    })));
  }, [
    rt,
    kt,
    Z,
    de,
    ze,
    s,
    lt,
    a,
    fe,
    oe,
    z,
    B,
    N,
    k,
    w,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    Ne,
    $t,
    ft,
    F,
    Et,
    ut,
    Vt,
    It,
    nt,
    Q,
    At,
    o,
    i,
    n,
    T,
    A,
    U,
    Ae,
    Fe,
    Ye,
    Ie,
    _e,
    te,
    Ke,
    Zt,
    Ee
  ];
}
class py extends Or {
  constructor(r) {
    super(), Lr(this, r, _y, dy, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const gy = "appkit-progress", hy = "appkit-progress__linear", my = "appkit-progress__circular", ti = {
  progress: gy,
  progress__linear: hy,
  "progress__linear-fill": "appkit-progress__linear-fill",
  "progress__linear-fill_indeterminate": "appkit-progress__linear-fill_indeterminate",
  "progress-linear-indeterminate": "appkit-progress-linear-indeterminate",
  progress__circular: my,
  "progress__circular-track": "appkit-progress__circular-track",
  "progress__circular-fill": "appkit-progress__circular-fill",
  "progress__circular-fill_indeterminate": "appkit-progress__circular-fill_indeterminate",
  "progress-circular-indeterminate": "appkit-progress-circular-indeterminate"
};
function by(e) {
  let r, t;
  return r = new Fn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function yy(e) {
  let r, t;
  return r = new hn({
    props: {
      cls: gt("progress", ti, {}),
      style: (
        /*stl*/
        e[7]
      ),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: { default: [vy] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o & /*stl*/
      128 && (i.style = /*stl*/
      n[7]), o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o & /*$$scope, trackThickness, ariaValue, isIndeterminate, progressValue, progressStyle, circularOffset*/
      134218108 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function wy(e) {
  let r, t, n, o, i;
  return {
    c() {
      r = rn("svg"), t = rn("circle"), n = rn("circle"), g(t, "class", ti["progress__circular-track"]), g(t, "cx", xo / 2), g(t, "cy", xo / 2), g(t, "r", ql), g(
        t,
        "stroke-width",
        /*trackThickness*/
        e[5]
      ), g(n, "class", o = gt("progress__circular-fill", ti, {
        indeterminate: (
          /*isIndeterminate*/
          e[4]
        )
      })), g(n, "cx", xo / 2), g(n, "cy", xo / 2), g(n, "r", ql), g(
        n,
        "stroke-width",
        /*trackThickness*/
        e[5]
      ), g(
        n,
        "stroke-dasharray",
        /*circularCircumference*/
        e[15]
      ), g(n, "stroke-dashoffset", i = /*isIndeterminate*/
      e[4] ? (
        /*circularCircumference*/
        e[15] * 0.75
      ) : (
        /*circularOffset*/
        e[8]
      )), g(n, "stroke-linecap", "round"), g(r, "class", ti.progress__circular), g(r, "width", xo), g(r, "height", xo), g(r, "viewBox", "0 0 " + xo + " " + xo), g(r, "role", "progressbar"), g(
        r,
        "aria-valuenow",
        /*ariaValue*/
        e[6]
      ), g(r, "aria-valuemin", 0), g(r, "aria-valuemax", 100);
    },
    m(s, a) {
      K(s, r, a), wt(r, t), wt(r, n);
    },
    p(s, a) {
      a & /*trackThickness*/
      32 && g(
        t,
        "stroke-width",
        /*trackThickness*/
        s[5]
      ), a & /*isIndeterminate*/
      16 && o !== (o = gt("progress__circular-fill", ti, {
        indeterminate: (
          /*isIndeterminate*/
          s[4]
        )
      })) && g(n, "class", o), a & /*trackThickness*/
      32 && g(
        n,
        "stroke-width",
        /*trackThickness*/
        s[5]
      ), a & /*isIndeterminate, circularOffset*/
      272 && i !== (i = /*isIndeterminate*/
      s[4] ? (
        /*circularCircumference*/
        s[15] * 0.75
      ) : (
        /*circularOffset*/
        s[8]
      )) && g(n, "stroke-dashoffset", i), a & /*ariaValue*/
      64 && g(
        r,
        "aria-valuenow",
        /*ariaValue*/
        s[6]
      );
    },
    d(s) {
      s && J(r);
    }
  };
}
function ky(e) {
  let r, t, n;
  return {
    c() {
      r = Pe("div"), t = Pe("div"), g(t, "class", n = gt("progress__linear-fill", ti, {
        indeterminate: (
          /*isIndeterminate*/
          e[4]
        )
      })), I(
        t,
        "width",
        /*isIndeterminate*/
        e[4] ? "30%" : (
          /*progressValue*/
          e[2] * 100 + "%"
        )
      ), g(r, "class", ti.progress__linear), I(r, "height", ge(
        /*trackThickness*/
        e[5]
      )), g(r, "role", "progressbar"), g(
        r,
        "aria-valuenow",
        /*ariaValue*/
        e[6]
      ), g(r, "aria-valuemin", 0), g(r, "aria-valuemax", 100);
    },
    m(o, i) {
      K(o, r, i), wt(r, t);
    },
    p(o, i) {
      i & /*isIndeterminate*/
      16 && n !== (n = gt("progress__linear-fill", ti, {
        indeterminate: (
          /*isIndeterminate*/
          o[4]
        )
      })) && g(t, "class", n), i & /*isIndeterminate, progressValue*/
      20 && I(
        t,
        "width",
        /*isIndeterminate*/
        o[4] ? "30%" : (
          /*progressValue*/
          o[2] * 100 + "%"
        )
      ), i & /*trackThickness*/
      32 && I(r, "height", ge(
        /*trackThickness*/
        o[5]
      )), i & /*ariaValue*/
      64 && g(
        r,
        "aria-valuenow",
        /*ariaValue*/
        o[6]
      );
    },
    d(o) {
      o && J(r);
    }
  };
}
function vy(e) {
  let r;
  function t(i, s) {
    return (
      /*progressStyle*/
      i[3] === "linear" ? ky : wy
    );
  }
  let n = t(e), o = n(e);
  return {
    c() {
      o.c(), r = or();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = t(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && J(r), o.d(i);
    }
  };
}
function jy(e) {
  let r, t, n, o;
  const i = [yy, by], s = [];
  function a(l, u) {
    return 0;
  }
  return ~(r = a()) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = or();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, [u]) {
      t && t.p(l, u);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      ne(t), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
const xo = 48, ql = 20;
function Cy(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _, h, m = v, p = () => (m(), m = E(u, (Ie) => t(19, h = Ie)), u), w, k = v, N = () => (k(), k = E(l, (Ie) => t(20, w = Ie)), l), B, z = v, oe = () => (z(), z = E(a, (Ie) => t(21, B = Ie)), a), fe, T = v, Y = () => (T(), T = E(s, (Ie) => t(22, fe = Ie)), s), le, A = v, D = () => (A(), A = E(i, (Ie) => t(23, le = Ie)), i), M, U = v, q = () => (U(), U = E(o, (Ie) => t(24, M = Ie)), o);
  e.$$.on_destroy.push(() => m()), e.$$.on_destroy.push(() => k()), e.$$.on_destroy.push(() => z()), e.$$.on_destroy.push(() => T()), e.$$.on_destroy.push(() => A()), e.$$.on_destroy.push(() => U());
  let { componentContext: be } = r, { layoutParams: Ae = void 0 } = r;
  Tr(Xr);
  let Ce = 0, he = "linear", Fe = !1, x = "#129386", Je = "rgba(0, 0, 0, .1)", Ye = 4;
  function Xe() {
    t(2, Ce = 0), t(3, he = "linear"), t(4, Fe = !1), t(16, x = "#129386"), t(17, Je = "rgba(0, 0, 0, .1)"), t(5, Ye = 4);
  }
  const ye = 2 * Math.PI * ql;
  return e.$$set = (Ie) => {
    "componentContext" in Ie && t(0, be = Ie.componentContext), "layoutParams" in Ie && t(1, Ae = Ie.layoutParams);
  }, e.$$.update = () => {
    e.$$.dirty & /*componentContext*/
    1 && t(18, n = be.origJson), e.$$.dirty & /*origJson*/
    262144 && n && Xe(), e.$$.dirty & /*componentContext*/
    1 && q(t(14, o = be.getDerivedFromVars(be.json.value))), e.$$.dirty & /*componentContext*/
    1 && D(t(13, i = be.getDerivedFromVars(be.json.style))), e.$$.dirty & /*componentContext*/
    1 && Y(t(12, s = be.getDerivedFromVars(be.json.is_indeterminate))), e.$$.dirty & /*componentContext*/
    1 && oe(t(11, a = be.getDerivedFromVars(be.json.active_color))), e.$$.dirty & /*componentContext*/
    1 && N(t(10, l = be.getDerivedFromVars(be.json.inactive_color))), e.$$.dirty & /*componentContext*/
    1 && p(t(9, u = be.getDerivedFromVars(be.json.track_thickness))), e.$$.dirty & /*$jsonValue, progressValue*/
    16777220 && t(2, Ce = typeof M == "number" ? Math.max(0, Math.min(1, M)) : Ce), e.$$.dirty & /*$jsonStyle, progressStyle*/
    8388616 && t(3, he = le === "linear" || le === "circular" ? le : he), e.$$.dirty & /*$jsonIsIndeterminate, isIndeterminate*/
    4194320 && t(4, Fe = Zr(fe, Fe)), e.$$.dirty & /*$jsonActiveColor, activeColor*/
    2162688 && t(16, x = dr(B, 1, x)), e.$$.dirty & /*$jsonInactiveColor, inactiveColor*/
    1179648 && t(17, Je = dr(w, 1, Je)), e.$$.dirty & /*$jsonTrackThickness, trackThickness*/
    524320 && t(5, Ye = typeof h == "number" && h >= 0 ? h : Ye), e.$$.dirty & /*progressValue*/
    4 && t(8, c = ye * (1 - Ce)), e.$$.dirty & /*activeColor, inactiveColor*/
    196608 && t(7, f = {
      "--divkit-progress-active-color": x,
      "--divkit-progress-inactive-color": Je
    }), e.$$.dirty & /*isIndeterminate, progressValue*/
    20 && t(6, _ = Fe ? void 0 : Math.round(Ce * 100));
  }, [
    be,
    Ae,
    Ce,
    he,
    Fe,
    Ye,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    ye,
    x,
    Je,
    n,
    h,
    w,
    B,
    fe,
    le,
    M
  ];
}
class Ey extends Or {
  constructor(r) {
    super(), Lr(this, r, Cy, jy, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const Ay = "appkit-table", Sy = "appkit-table_halign_start", Vy = "appkit-table_halign_center", Fy = "appkit-table_halign_end", Dy = "appkit-table_valign_start", Iy = "appkit-table_valign_center", Ty = "appkit-table_valign_end", My = "appkit-table__cell", Py = "appkit-table__cell_halign_left", Ny = "appkit-table__cell_halign_start", zy = "appkit-table__cell_halign_center", Ly = "appkit-table__cell_halign_right", Oy = "appkit-table__cell_halign_end", By = "appkit-table__cell_valign_top", Ry = "appkit-table__cell_valign_center", Hy = "appkit-table__cell_valign_bottom", Wy = "appkit-table__cell_valign_baseline", Uy = "appkit-table__separator", Gy = "appkit-table__separator_row", Jy = "appkit-table__separator_col", Go = {
  table: Ay,
  table_halign_start: Sy,
  table_halign_center: Vy,
  table_halign_end: Fy,
  table_valign_start: Dy,
  table_valign_center: Iy,
  table_valign_end: Ty,
  table__cell: My,
  table__cell_halign_left: Py,
  table__cell_halign_start: Ny,
  table__cell_halign_center: zy,
  table__cell_halign_right: Ly,
  table__cell_halign_end: Oy,
  table__cell_valign_top: By,
  table__cell_valign_center: Ry,
  table__cell_valign_bottom: Hy,
  table__cell_valign_baseline: Wy,
  table__separator: Uy,
  table__separator_row: Gy,
  table__separator_col: Jy
};
function Wc(e, r, t) {
  const n = e.slice();
  return n[35] = r[t], n;
}
function Uc(e, r, t) {
  const n = e.slice();
  return n[38] = r[t], n;
}
function Ky(e) {
  let r, t;
  return r = new Fn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function qy(e) {
  let r, t;
  return r = new hn({
    props: {
      cls: gt(
        "table",
        Go,
        /*mods*/
        e[7]
      ),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      style: (
        /*style*/
        e[6]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      parentOf: (
        /*items*/
        e[2]
      ),
      $$slots: { default: [Yy] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      128 && (i.cls = gt(
        "table",
        Go,
        /*mods*/
        n[7]
      )), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*style*/
      64 && (i.style = /*style*/
      n[6]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*items*/
      4 && (i.parentOf = /*items*/
      n[2]), o[0] & /*separatorElements, cellPlacements*/
      48 | o[1] & /*$$scope*/
      1024 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Gc(e) {
  var a, l, u, c, f, _, h, m;
  let r, t, n, o = `${/*placement*/
  ((l = (a = e[38].layoutParams.gridArea) == null ? void 0 : a.x) != null ? l : 0) + 1} / span ${/*placement*/
  (c = (u = e[38].layoutParams.gridArea) == null ? void 0 : u.colSpan) != null ? c : 1}`, i = `${/*placement*/
  ((_ = (f = e[38].layoutParams.gridArea) == null ? void 0 : f.y) != null ? _ : 0) + 1} / span ${/*placement*/
  (m = (h = e[38].layoutParams.gridArea) == null ? void 0 : h.rowSpan) != null ? m : 1}`, s;
  return t = new xn({
    props: {
      componentContext: (
        /*placement*/
        e[38].componentContext
      ),
      layoutParams: (
        /*placement*/
        e[38].layoutParams
      )
    }
  }), {
    c() {
      r = Pe("div"), Wt(t.$$.fragment), g(r, "class", n = gt("table__cell", Go, {
        halign: (
          /*placement*/
          e[38].cellHAlign
        ),
        valign: (
          /*placement*/
          e[38].cellVAlign
        )
      })), I(r, "grid-column", o), I(r, "grid-row", i), I(
        r,
        "background",
        /*placement*/
        e[38].backgroundStyle || void 0
      );
    },
    m(p, w) {
      K(p, r, w), Ot(t, r, null), s = !0;
    },
    p(p, w) {
      var N, B, z, oe, fe, T, Y, le;
      const k = {};
      w[0] & /*cellPlacements*/
      16 && (k.componentContext = /*placement*/
      p[38].componentContext), w[0] & /*cellPlacements*/
      16 && (k.layoutParams = /*placement*/
      p[38].layoutParams), t.$set(k), (!s || w[0] & /*cellPlacements*/
      16 && n !== (n = gt("table__cell", Go, {
        halign: (
          /*placement*/
          p[38].cellHAlign
        ),
        valign: (
          /*placement*/
          p[38].cellVAlign
        )
      }))) && g(r, "class", n), w[0] & /*cellPlacements*/
      16 && o !== (o = `${/*placement*/
      ((B = (N = p[38].layoutParams.gridArea) == null ? void 0 : N.x) != null ? B : 0) + 1} / span ${/*placement*/
      (oe = (z = p[38].layoutParams.gridArea) == null ? void 0 : z.colSpan) != null ? oe : 1}`) && I(r, "grid-column", o), w[0] & /*cellPlacements*/
      16 && i !== (i = `${/*placement*/
      ((T = (fe = p[38].layoutParams.gridArea) == null ? void 0 : fe.y) != null ? T : 0) + 1} / span ${/*placement*/
      (le = (Y = p[38].layoutParams.gridArea) == null ? void 0 : Y.rowSpan) != null ? le : 1}`) && I(r, "grid-row", i), w[0] & /*cellPlacements*/
      16 && I(
        r,
        "background",
        /*placement*/
        p[38].backgroundStyle || void 0
      );
    },
    i(p) {
      s || (W(t.$$.fragment, p), s = !0);
    },
    o(p) {
      ne(t.$$.fragment, p), s = !1;
    },
    d(p) {
      p && J(r), Bt(t);
    }
  };
}
function Jc(e) {
  let r, t, n, o;
  return {
    c() {
      r = Pe("div"), t = Pe("div"), o = _r(), g(t, "class", n = /*sep*/
      e[35].width ? Go.table__separator_col : Go.table__separator_row), I(
        t,
        "background",
        /*sep*/
        e[35].background
      ), I(
        t,
        "height",
        /*sep*/
        e[35].height || void 0
      ), I(
        t,
        "width",
        /*sep*/
        e[35].width || void 0
      ), g(r, "class", Go.table__separator), I(
        r,
        "grid-column",
        /*sep*/
        e[35].gridColumn
      ), I(
        r,
        "grid-row",
        /*sep*/
        e[35].gridRow
      ), I(
        r,
        "margin-top",
        /*sep*/
        e[35].marginTop || void 0
      ), I(
        r,
        "margin-bottom",
        /*sep*/
        e[35].marginBottom || void 0
      ), I(
        r,
        "margin-left",
        /*sep*/
        e[35].marginLeft || void 0
      ), I(
        r,
        "margin-right",
        /*sep*/
        e[35].marginRight || void 0
      );
    },
    m(i, s) {
      K(i, r, s), wt(r, t), wt(r, o);
    },
    p(i, s) {
      s[0] & /*separatorElements*/
      32 && n !== (n = /*sep*/
      i[35].width ? Go.table__separator_col : Go.table__separator_row) && g(t, "class", n), s[0] & /*separatorElements*/
      32 && I(
        t,
        "background",
        /*sep*/
        i[35].background
      ), s[0] & /*separatorElements*/
      32 && I(
        t,
        "height",
        /*sep*/
        i[35].height || void 0
      ), s[0] & /*separatorElements*/
      32 && I(
        t,
        "width",
        /*sep*/
        i[35].width || void 0
      ), s[0] & /*separatorElements*/
      32 && I(
        r,
        "grid-column",
        /*sep*/
        i[35].gridColumn
      ), s[0] & /*separatorElements*/
      32 && I(
        r,
        "grid-row",
        /*sep*/
        i[35].gridRow
      ), s[0] & /*separatorElements*/
      32 && I(
        r,
        "margin-top",
        /*sep*/
        i[35].marginTop || void 0
      ), s[0] & /*separatorElements*/
      32 && I(
        r,
        "margin-bottom",
        /*sep*/
        i[35].marginBottom || void 0
      ), s[0] & /*separatorElements*/
      32 && I(
        r,
        "margin-left",
        /*sep*/
        i[35].marginLeft || void 0
      ), s[0] & /*separatorElements*/
      32 && I(
        r,
        "margin-right",
        /*sep*/
        i[35].marginRight || void 0
      );
    },
    d(i) {
      i && J(r);
    }
  };
}
function Yy(e) {
  let r, t, n, o = ur(
    /*cellPlacements*/
    e[4]
  ), i = [];
  for (let u = 0; u < o.length; u += 1)
    i[u] = Gc(Uc(e, o, u));
  const s = (u) => ne(i[u], 1, 1, () => {
    i[u] = null;
  });
  let a = ur(
    /*separatorElements*/
    e[5]
  ), l = [];
  for (let u = 0; u < a.length; u += 1)
    l[u] = Jc(Wc(e, a, u));
  return {
    c() {
      for (let u = 0; u < i.length; u += 1)
        i[u].c();
      r = _r();
      for (let u = 0; u < l.length; u += 1)
        l[u].c();
      t = or();
    },
    m(u, c) {
      for (let f = 0; f < i.length; f += 1)
        i[f] && i[f].m(u, c);
      K(u, r, c);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(u, c);
      K(u, t, c), n = !0;
    },
    p(u, c) {
      if (c[0] & /*cellPlacements*/
      16) {
        o = ur(
          /*cellPlacements*/
          u[4]
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const _ = Uc(u, o, f);
          i[f] ? (i[f].p(_, c), W(i[f], 1)) : (i[f] = Gc(_), i[f].c(), W(i[f], 1), i[f].m(r.parentNode, r));
        }
        for (pr(), f = o.length; f < i.length; f += 1)
          s(f);
        gr();
      }
      if (c[0] & /*separatorElements*/
      32) {
        a = ur(
          /*separatorElements*/
          u[5]
        );
        let f;
        for (f = 0; f < a.length; f += 1) {
          const _ = Wc(u, a, f);
          l[f] ? l[f].p(_, c) : (l[f] = Jc(_), l[f].c(), l[f].m(t.parentNode, t));
        }
        for (; f < l.length; f += 1)
          l[f].d(1);
        l.length = a.length;
      }
    },
    i(u) {
      if (!n) {
        for (let c = 0; c < o.length; c += 1)
          W(i[c]);
        n = !0;
      }
    },
    o(u) {
      i = i.filter(Boolean);
      for (let c = 0; c < i.length; c += 1)
        ne(i[c]);
      n = !1;
    },
    d(u) {
      u && (J(r), J(t)), un(i, u), un(l, u);
    }
  };
}
function Xy(e) {
  let r, t, n, o;
  const i = [qy, Ky], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = or();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (t && (pr(), ne(s[c], 1, 1, () => {
        s[c] = null;
      }), gr()), ~r ? (t = s[r], t ? t.p(l, u) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      ne(t), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function Zy(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p = v, w = () => (p(), p = E(s, (ce) => t(22, m = ce)), s), k, N = v, B = () => (N(), N = E(i, (ce) => t(23, k = ce)), i), z, oe = v, fe = () => (oe(), oe = E(a, (ce) => t(24, z = ce)), a), T, Y = v, le = () => (Y(), Y = E(l, (ce) => t(25, T = ce)), l);
  e.$$.on_destroy.push(() => p()), e.$$.on_destroy.push(() => N()), e.$$.on_destroy.push(() => oe()), e.$$.on_destroy.push(() => Y());
  let { componentContext: A } = r, { layoutParams: D = void 0 } = r;
  const M = Tr(Xr), U = M.direction;
  mn(e, U, (ce) => t(21, h = ce));
  let q = !1, be = "start", Ae = "start", Ce = [], he, Fe = [], x = [], Je = "";
  function Ye() {
    t(3, q = !1), t(13, be = "start"), t(14, Ae = "start");
  }
  function Xe(ce) {
    var $, Oe;
    if (!ce || !ce.style) return null;
    let te = "#E0E0E0", we = 1;
    const Ue = ce.style;
    if (Ue.type === "shape_drawable" && Ue.shape) {
      const Ne = Ue.shape;
      te = dr(Ne.background_color || Ue.color || "#E0E0E0"), Ne.type === "rounded_rectangle" && (we = Number((($ = Ne.item_height) == null ? void 0 : $.value) || ((Oe = Ne.item_width) == null ? void 0 : Oe.value) || 1));
    } else Ue.color && (te = dr(Ue.color));
    const Ke = ce.margins || {};
    return {
      color: te,
      thickness: we,
      show_at_start: ce.show_at_start === 1 || ce.show_at_start === !0,
      show_between: ce.show_between !== 0 && ce.show_between !== !1,
      show_at_end: ce.show_at_end === 1 || ce.show_at_end === !0,
      marginTop: Number(Ke.top) || 0,
      marginBottom: Number(Ke.bottom) || 0,
      marginLeft: Number(Ke.left) || 0,
      marginRight: Number(Ke.right) || 0
    };
  }
  function ye(ce, te) {
    const we = ce.header_row;
    let Ue = [];
    return ce.row_builder && Array.isArray(te) ? Ue = pl(te, M, A, ce.row_builder).map(($) => $.div) : Array.isArray(ce.rows) && (Ue = ce.rows), { rows: Ue, headerRow: we };
  }
  let Ie = [];
  function pe(ce, te) {
    Ie = [];
    for (let we = 0; we < ce; we++)
      Ie[we] = new Array(te).fill(!1);
  }
  function me(ce, te, we, Ue) {
    var Ke;
    for (let $ = ce; $ < ce + we && $ < Ie.length; $++)
      for (let Oe = te; Oe < te + Ue && Oe < (((Ke = Ie[0]) == null ? void 0 : Ke.length) || 0); Oe++)
        Ie[$][Oe] = !0;
  }
  function _e(ce, te) {
    var Ue;
    if (ce >= Ie.length) return te;
    let we = te;
    for (; we < (((Ue = Ie[0]) == null ? void 0 : Ue.length) || 0) && Ie[ce][we]; )
      we++;
    return we;
  }
  function ee(ce, te, we, Ue, Ke, $, Oe, Ne, ot, ct) {
    const rt = Array.isArray(ce.cells) ? ce.cells : [];
    let kt = 0;
    for (let it = 0; it < rt.length; it++) {
      const Mt = rt[it];
      if (!Mt || !Mt.div) continue;
      const ft = Math.max(1, Number(Mt.column_span) || 1), Z = Math.max(1, Number(Mt.row_span) || 1);
      kt = _e(te, kt), me(te, kt, Z, ft);
      const de = Array.isArray(we) && we[kt], lt = Mt.content_alignment_horizontal || de && de.content_alignment_horizontal || void 0, ze = Mt.content_alignment_vertical || de && de.content_alignment_vertical || void 0;
      let F;
      const Et = Mt.background || Ue;
      if (Et && Array.isArray(Et) && Et.length > 0) {
        const It = Et[0];
        It && It.type === "solid" && It.color && (F = dr(It.color));
      }
      const ut = ot.get(Mt.div);
      let Vt;
      ut ? (ct.delete(ut), Vt = ut) : Vt = A.produceChildContext(Mt.div, { path: `${$}_${it}` }), Oe.push(Vt), Ne.push({
        componentContext: Vt,
        layoutParams: {
          gridArea: {
            x: kt,
            y: te,
            colSpan: ft,
            rowSpan: Z
          }
        },
        cellHAlign: lt,
        cellVAlign: ze,
        backgroundStyle: F
      }), kt += ft;
    }
  }
  return ln(() => {
    Ce.forEach((ce) => {
      ce.destroy();
    });
  }), e.$$set = (ce) => {
    "componentContext" in ce && t(0, A = ce.componentContext), "layoutParams" in ce && t(1, D = ce.layoutParams);
  }, e.$$.update = () => {
    var ce, te, we;
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(20, n = A.origJson), e.$$.dirty[0] & /*origJson*/
    1048576 && n && Ye(), e.$$.dirty[0] & /*componentContext*/
    1 && t(19, o = A.json.columns), e.$$.dirty[0] & /*componentContext*/
    1 && B(t(11, i = A.getDerivedFromVars(A.json.content_alignment_vertical))), e.$$.dirty[0] & /*componentContext*/
    1 && w(t(10, s = A.getDerivedFromVars(A.json.content_alignment_horizontal))), e.$$.dirty[0] & /*componentContext*/
    1 && fe(t(9, a = A.getDerivedFromVars(A.json.striped))), e.$$.dirty[0] & /*componentContext*/
    1 && le(t(8, l = typeof ((ce = A.json.row_builder) == null ? void 0 : ce.data) == "string" ? A.getDerivedFromVars((te = A.json.row_builder) == null ? void 0 : te.data, void 0, !0) : (we = A.json.row_builder) != null && we.data ? Jo(A.json.row_builder.data) : void 0)), e.$$.dirty[0] & /*jsonColumns*/
    524288 && (!Array.isArray(o) || o.length === 0 ? t(3, q = !0) : t(3, q = !1)), e.$$.dirty[0] & /*jsonColumns*/
    524288 && t(17, u = Array.isArray(o) ? o.length : 0), e.$$.dirty[0] & /*jsonColumns*/
    524288)
      if (Array.isArray(o)) {
        const Ue = [];
        for (let Ke = 0; Ke < o.length; Ke++) {
          const $ = o[Ke], Oe = $ == null ? void 0 : $.width;
          if ((Oe == null ? void 0 : Oe.type) === "fixed" && Oe.value)
            Ue.push(ge(Number(Oe.value)));
          else if ((Oe == null ? void 0 : Oe.type) === "match_parent") {
            const Ne = Number(Oe.weight || 1);
            Ue.push(`${Ne}fr`);
          } else
            Ue.push("auto");
        }
        t(16, Je = Ue.join(" "));
      } else
        t(16, Je = "");
    if (e.$$.dirty[0] & /*componentContext, $jsonRowBuilderData*/
    33554433 && t(18, c = ye(A.json, T)), e.$$.dirty[0] & /*items, prevContext, componentContext, jsonColumns, allRows, columnCount, $jsonStriped*/
    17727493) {
      const Ue = new Set(Ce), Ke = /* @__PURE__ */ new Map();
      he === A && Ce.forEach((F) => {
        Ke.set(F.json, F);
      });
      const $ = [], Oe = [], Ne = [];
      let ot = 0;
      const ct = A.json, rt = Array.isArray(o) ? o : [], kt = !!(c.headerRow && Array.isArray(c.headerRow.cells)), it = c.rows.length, Mt = (kt ? 1 : 0) + it;
      pe(Mt + 10, u + 10);
      const ft = Xe(ct.row_separator), Z = Xe(ct.column_separator), de = Xe(ct.header_separator);
      kt && (ee(c.headerRow, ot, rt, c.headerRow.background || ct.header_background, void 0, -1, $, Oe, Ke, Ue), ot++);
      const lt = c.rows;
      for (let F = 0; F < lt.length; F++) {
        const Et = lt[F];
        if (!Et || !Array.isArray(Et.cells)) continue;
        let ut = Et.background;
        !ut && z && (F % 2 === 0 ? ut = z.even_row_background : ut = z.odd_row_background), ee(Et, ot, rt, ut, void 0, F, $, Oe, Ke, Ue), ot++;
      }
      const ze = ot;
      if (de && kt && it > 0 && Ne.push({
        gridColumn: `1 / span ${u}`,
        gridRow: "1 / span 1",
        background: de.color,
        height: ge(de.thickness),
        marginTop: de.marginTop ? ge(de.marginTop) : void 0,
        marginBottom: de.marginBottom ? ge(de.marginBottom) : void 0,
        marginLeft: de.marginLeft ? ge(de.marginLeft) : void 0,
        marginRight: de.marginRight ? ge(de.marginRight) : void 0
      }), ft) {
        const F = kt ? 1 : 0;
        if (ft.show_at_start && it > 0 && Ne.push({
          gridColumn: `1 / span ${u}`,
          gridRow: `${F + 1} / span 1`,
          background: ft.color,
          height: ge(ft.thickness),
          marginTop: ft.marginTop ? ge(ft.marginTop) : void 0,
          marginBottom: ft.marginBottom ? ge(ft.marginBottom) : void 0,
          marginLeft: ft.marginLeft ? ge(ft.marginLeft) : void 0,
          marginRight: ft.marginRight ? ge(ft.marginRight) : void 0
        }), ft.show_between)
          for (let Et = F; Et < ze - 1; Et++)
            Ne.push({
              gridColumn: `1 / span ${u}`,
              gridRow: `${Et + 1} / span 1`,
              background: ft.color,
              height: ge(ft.thickness),
              marginTop: ft.marginTop ? ge(ft.marginTop) : void 0,
              marginBottom: ft.marginBottom ? ge(ft.marginBottom) : void 0,
              marginLeft: ft.marginLeft ? ge(ft.marginLeft) : void 0,
              marginRight: ft.marginRight ? ge(ft.marginRight) : void 0
            });
        ft.show_at_end && it > 0 && Ne.push({
          gridColumn: `1 / span ${u}`,
          gridRow: `${ze} / span 1`,
          background: ft.color,
          height: ge(ft.thickness),
          marginTop: ft.marginTop ? ge(ft.marginTop) : void 0,
          marginBottom: ft.marginBottom ? ge(ft.marginBottom) : void 0,
          marginLeft: ft.marginLeft ? ge(ft.marginLeft) : void 0,
          marginRight: ft.marginRight ? ge(ft.marginRight) : void 0
        });
      }
      if (Z && u > 0) {
        if (Z.show_at_start && Ne.push({
          gridColumn: "1 / span 1",
          gridRow: `1 / span ${ze}`,
          background: Z.color,
          width: ge(Z.thickness),
          marginTop: Z.marginTop ? ge(Z.marginTop) : void 0,
          marginBottom: Z.marginBottom ? ge(Z.marginBottom) : void 0,
          marginLeft: Z.marginLeft ? ge(Z.marginLeft) : void 0,
          marginRight: Z.marginRight ? ge(Z.marginRight) : void 0
        }), Z.show_between)
          for (let F = 0; F < u - 1; F++)
            Ne.push({
              gridColumn: `${F + 1} / span 1`,
              gridRow: `1 / span ${ze}`,
              background: Z.color,
              width: ge(Z.thickness),
              marginTop: Z.marginTop ? ge(Z.marginTop) : void 0,
              marginBottom: Z.marginBottom ? ge(Z.marginBottom) : void 0,
              marginLeft: Z.marginLeft ? ge(Z.marginLeft) : void 0,
              marginRight: Z.marginRight ? ge(Z.marginRight) : void 0
            });
        Z.show_at_end && Ne.push({
          gridColumn: `${u} / span 1`,
          gridRow: `1 / span ${ze}`,
          background: Z.color,
          width: ge(Z.thickness),
          marginTop: Z.marginTop ? ge(Z.marginTop) : void 0,
          marginBottom: Z.marginBottom ? ge(Z.marginBottom) : void 0,
          marginLeft: Z.marginLeft ? ge(Z.marginLeft) : void 0,
          marginRight: Z.marginRight ? ge(Z.marginRight) : void 0
        });
      }
      for (const F of Ue)
        F.destroy();
      t(2, Ce = $), t(4, Fe = Oe), t(5, x = Ne), t(15, he = A);
    }
    e.$$.dirty[0] & /*$jsonContentVAlign, contentVAlign*/
    8396800 && t(13, be = _l(k, be)), e.$$.dirty[0] & /*$jsonContentHAlign, $direction, contentHAlign*/
    6307840 && t(14, Ae = dl(m, h, Ae)), e.$$.dirty[0] & /*contentVAlign, contentHAlign*/
    24576 && t(7, f = {
      valign: be,
      halign: Ae
    }), e.$$.dirty[0] & /*gridTemplateColumns*/
    65536 && t(6, _ = {
      "grid-template-columns": Je
    });
  }, [
    A,
    D,
    Ce,
    q,
    Fe,
    x,
    _,
    f,
    l,
    a,
    s,
    i,
    U,
    be,
    Ae,
    he,
    Je,
    u,
    c,
    o,
    n,
    h,
    m,
    k,
    z,
    T
  ];
}
class Qy extends Or {
  constructor(r) {
    super(), Lr(this, r, Zy, Xy, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const xy = "appkit-counter", $y = "appkit-counter__container", ew = "appkit-counter__button", tw = "appkit-counter__value", rw = "appkit-counter_disabled", Mi = {
  counter: xy,
  counter__container: $y,
  counter__button: ew,
  counter__value: tw,
  counter_disabled: rw
};
function nw(e) {
  let r, t;
  return r = new Fn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function ow(e) {
  let r, t;
  return r = new hn({
    props: {
      cls: gt(
        "counter",
        Mi,
        /*mods*/
        e[15]
      ),
      style: (
        /*stl*/
        e[14]
      ),
      customDescription: !0,
      customActions: "counter",
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: { default: [iw] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      32768 && (i.cls = gt(
        "counter",
        Mi,
        /*mods*/
        n[15]
      )), o[0] & /*stl*/
      16384 && (i.style = /*stl*/
      n[14]), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*isEnabled, value, maxValue, disabledButtonColor, buttonColor, buttonSize, iconColor, valueWidth, textColor, fontSize, fontWeight, minValue*/
      147448 | o[2] & /*$$scope*/
      64 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function iw(e) {
  let r, t, n, o, i, s, a, l, u, c, f, _, h, m, p, w;
  return {
    c() {
      r = Pe("div"), t = Pe("button"), n = rn("svg"), o = rn("line"), s = _r(), a = Pe("div"), l = Nn(
        /*value*/
        e[17]
      ), u = _r(), c = Pe("button"), f = rn("svg"), _ = rn("line"), h = rn("line"), g(o, "x1", "6"), g(o, "y1", "12"), g(o, "x2", "18"), g(o, "y2", "12"), g(
        o,
        "stroke",
        /*iconColor*/
        e[6]
      ), g(o, "stroke-width", "2.5"), g(o, "stroke-linecap", "round"), g(n, "viewBox", "0 0 24 24"), g(n, "fill", "none"), g(n, "xmlns", "http://www.w3.org/2000/svg"), g(t, "class", Mi.counter__button), t.disabled = i = !/*isEnabled*/
      e[3] || /*value*/
      e[17] <= /*minValue*/
      e[11], g(t, "aria-label", "Decrease value"), I(
        t,
        "background",
        /*value*/
        e[17] <= /*minValue*/
        e[11] ? (
          /*disabledButtonColor*/
          e[7]
        ) : (
          /*buttonColor*/
          e[4]
        )
      ), I(t, "width", ge(
        /*buttonSize*/
        e[5]
      )), I(t, "height", ge(
        /*buttonSize*/
        e[5]
      )), g(a, "class", Mi.counter__value), I(a, "width", ge(
        /*valueWidth*/
        e[10]
      )), I(
        a,
        "color",
        /*textColor*/
        e[8]
      ), I(a, "font-size", ge(
        /*fontSize*/
        e[9]
      )), I(
        a,
        "font-weight",
        /*fontWeight*/
        e[13]
      ), g(_, "x1", "12"), g(_, "y1", "6"), g(_, "x2", "12"), g(_, "y2", "18"), g(
        _,
        "stroke",
        /*iconColor*/
        e[6]
      ), g(_, "stroke-width", "2.5"), g(_, "stroke-linecap", "round"), g(h, "x1", "6"), g(h, "y1", "12"), g(h, "x2", "18"), g(h, "y2", "12"), g(
        h,
        "stroke",
        /*iconColor*/
        e[6]
      ), g(h, "stroke-width", "2.5"), g(h, "stroke-linecap", "round"), g(f, "viewBox", "0 0 24 24"), g(f, "fill", "none"), g(f, "xmlns", "http://www.w3.org/2000/svg"), g(c, "class", Mi.counter__button), c.disabled = m = !/*isEnabled*/
      e[3] || /*value*/
      e[17] >= /*maxValue*/
      e[12], g(c, "aria-label", "Increase value"), I(
        c,
        "background",
        /*value*/
        e[17] >= /*maxValue*/
        e[12] ? (
          /*disabledButtonColor*/
          e[7]
        ) : (
          /*buttonColor*/
          e[4]
        )
      ), I(c, "width", ge(
        /*buttonSize*/
        e[5]
      )), I(c, "height", ge(
        /*buttonSize*/
        e[5]
      )), g(r, "class", Mi.counter__container);
    },
    m(k, N) {
      K(k, r, N), wt(r, t), wt(t, n), wt(n, o), wt(r, s), wt(r, a), wt(a, l), wt(r, u), wt(r, c), wt(c, f), wt(f, _), wt(f, h), p || (w = [
        Qe(
          t,
          "click",
          /*decrement*/
          e[36]
        ),
        Qe(
          c,
          "click",
          /*increment*/
          e[35]
        )
      ], p = !0);
    },
    p(k, N) {
      N[0] & /*iconColor*/
      64 && g(
        o,
        "stroke",
        /*iconColor*/
        k[6]
      ), N[0] & /*isEnabled, value, minValue*/
      133128 && i !== (i = !/*isEnabled*/
      k[3] || /*value*/
      k[17] <= /*minValue*/
      k[11]) && (t.disabled = i), N[0] & /*value, minValue, disabledButtonColor, buttonColor*/
      133264 && I(
        t,
        "background",
        /*value*/
        k[17] <= /*minValue*/
        k[11] ? (
          /*disabledButtonColor*/
          k[7]
        ) : (
          /*buttonColor*/
          k[4]
        )
      ), N[0] & /*buttonSize*/
      32 && I(t, "width", ge(
        /*buttonSize*/
        k[5]
      )), N[0] & /*buttonSize*/
      32 && I(t, "height", ge(
        /*buttonSize*/
        k[5]
      )), N[0] & /*value*/
      131072 && Jn(
        l,
        /*value*/
        k[17]
      ), N[0] & /*valueWidth*/
      1024 && I(a, "width", ge(
        /*valueWidth*/
        k[10]
      )), N[0] & /*textColor*/
      256 && I(
        a,
        "color",
        /*textColor*/
        k[8]
      ), N[0] & /*fontSize*/
      512 && I(a, "font-size", ge(
        /*fontSize*/
        k[9]
      )), N[0] & /*fontWeight*/
      8192 && I(
        a,
        "font-weight",
        /*fontWeight*/
        k[13]
      ), N[0] & /*iconColor*/
      64 && g(
        _,
        "stroke",
        /*iconColor*/
        k[6]
      ), N[0] & /*iconColor*/
      64 && g(
        h,
        "stroke",
        /*iconColor*/
        k[6]
      ), N[0] & /*isEnabled, value, maxValue*/
      135176 && m !== (m = !/*isEnabled*/
      k[3] || /*value*/
      k[17] >= /*maxValue*/
      k[12]) && (c.disabled = m), N[0] & /*value, maxValue, disabledButtonColor, buttonColor*/
      135312 && I(
        c,
        "background",
        /*value*/
        k[17] >= /*maxValue*/
        k[12] ? (
          /*disabledButtonColor*/
          k[7]
        ) : (
          /*buttonColor*/
          k[4]
        )
      ), N[0] & /*buttonSize*/
      32 && I(c, "width", ge(
        /*buttonSize*/
        k[5]
      )), N[0] & /*buttonSize*/
      32 && I(c, "height", ge(
        /*buttonSize*/
        k[5]
      ));
    },
    d(k) {
      k && J(r), p = !1, Rr(w);
    }
  };
}
function sw(e) {
  let r, t, n, o;
  const i = [ow, nw], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[2] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = or();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (t && (pr(), ne(s[c], 1, 1, () => {
        s[c] = null;
      }), gr()), ~r ? (t = s[r], t ? t.p(l, u) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      ne(t), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function lw(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, B, z, oe, fe, T, Y, le, A, D = v, M = () => (D(), D = E(i, (at) => t(46, A = at)), i), U, q = v, be = () => (q(), q = E(fe, (at) => t(47, U = at)), fe), Ae, Ce = v, he = () => (Ce(), Ce = E(oe, (at) => t(48, Ae = at)), oe), Fe, x = v, Je = () => (x(), x = E(z, (at) => t(49, Fe = at)), z), Ye, Xe = v, ye = () => (Xe(), Xe = E(B, (at) => t(50, Ye = at)), B), Ie, pe = v, me = () => (pe(), pe = E(N, (at) => t(51, Ie = at)), N), _e, ee = v, ce = () => (ee(), ee = E(k, (at) => t(52, _e = at)), k), te, we = v, Ue = () => (we(), we = E(w, (at) => t(53, te = at)), w), Ke, $ = v, Oe = () => ($(), $ = E(p, (at) => t(54, Ke = at)), p), Ne, ot = v, ct = () => (ot(), ot = E(m, (at) => t(55, Ne = at)), m), rt, kt = v, it = () => (kt(), kt = E(h, (at) => t(56, rt = at)), h), Mt, ft = v, Z = () => (ft(), ft = E(_, (at) => t(57, Mt = at)), _), de, lt = v, ze = () => (lt(), lt = E(f, (at) => t(58, de = at)), f), F, Et = v, ut = () => (Et(), Et = E(c, (at) => t(59, F = at)), c), Vt, It = v, nt = () => (It(), It = E(u, (at) => t(60, Vt = at)), u), Q, At = v, Pt = () => (At(), At = E(l, (at) => t(61, Q = at)), l), $t, Zt = v, Ee = () => (Zt(), Zt = E(a, (at) => t(62, $t = at)), a), He, ht = v, Te = () => (ht(), ht = E(s, (at) => t(63, He = at)), s);
  e.$$.on_destroy.push(() => D()), e.$$.on_destroy.push(() => q()), e.$$.on_destroy.push(() => Ce()), e.$$.on_destroy.push(() => x()), e.$$.on_destroy.push(() => Xe()), e.$$.on_destroy.push(() => pe()), e.$$.on_destroy.push(() => ee()), e.$$.on_destroy.push(() => we()), e.$$.on_destroy.push(() => $()), e.$$.on_destroy.push(() => ot()), e.$$.on_destroy.push(() => kt()), e.$$.on_destroy.push(() => ft()), e.$$.on_destroy.push(() => lt()), e.$$.on_destroy.push(() => Et()), e.$$.on_destroy.push(() => It()), e.$$.on_destroy.push(() => At()), e.$$.on_destroy.push(() => Zt()), e.$$.on_destroy.push(() => ht());
  let { componentContext: xe } = r, { layoutParams: Le = void 0 } = r;
  const Ft = Tr(Xr), Be = Tr(To);
  let bt = !1, Ut = !0, Tt = "#4CAF50", ir = 36, De = "#ffffff", jt = "#cccccc", sr = "#1B2630", rr = 16, nr = 700, fr = 40, wr = "#F5F5F5", Nt = "#E0E0E0", br = 1, Rt = 999, mt = 6, er = 0, se = 99, kr = 1;
  const vr = {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700
  };
  function Ct() {
    t(3, Ut = !0), t(4, Tt = "#4CAF50"), t(5, ir = 36), t(6, De = "#ffffff"), t(7, jt = "#cccccc"), t(8, sr = "#1B2630"), t(9, rr = 16), t(13, nr = 700), t(10, fr = 40), t(37, wr = "#F5F5F5"), t(38, Nt = "#E0E0E0"), t(39, br = 1), t(40, Rt = 999), t(41, mt = 6), t(11, er = 0), t(12, se = 99), t(42, kr = 1);
  }
  function Dr() {
    if (!Ut) return;
    const at = Math.min(T + kr, se);
    at !== T && (i.setValue(at), xe.json.on_increment_actions && xe.execAnyActions(xe.json.on_increment_actions), xe.json.on_value_change_actions && xe.execAnyActions(xe.json.on_value_change_actions));
  }
  function Br() {
    if (!Ut) return;
    const at = Math.max(T - kr, er);
    at !== T && (i.setValue(at), xe.json.on_decrement_actions && xe.execAnyActions(xe.json.on_decrement_actions), xe.json.on_value_change_actions && xe.execAnyActions(xe.json.on_value_change_actions));
  }
  let ar;
  return ln(() => {
    ar && (Ft.unregisterFocusable(ar), t(43, ar = void 0));
  }), e.$$set = (at) => {
    "componentContext" in at && t(0, xe = at.componentContext), "layoutParams" in at && t(1, Le = at.layoutParams);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(45, n = xe.origJson), e.$$.dirty[1] & /*origJson*/
    16384 && n && Ct(), e.$$.dirty[0] & /*componentContext*/
    1 && t(44, o = xe.json.counter_value_variable), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*variable*/
    8192 && M(t(16, i = o && (xe.getVariable(o, "integer") || Ft.awaitGlobalVariable(o, "integer", 0)) || Yn("temp", "integer", 0))), e.$$.dirty[0] & /*componentContext*/
    1 && Te(t(34, s = xe.getDerivedFromVars(xe.json.is_enabled))), e.$$.dirty[0] & /*componentContext*/
    1 && Ee(t(33, a = xe.getDerivedFromVars(xe.json.button_color))), e.$$.dirty[0] & /*componentContext*/
    1 && Pt(t(32, l = xe.getDerivedFromVars(xe.json.button_size))), e.$$.dirty[0] & /*componentContext*/
    1 && nt(t(31, u = xe.getDerivedFromVars(xe.json.icon_color))), e.$$.dirty[0] & /*componentContext*/
    1 && ut(t(30, c = xe.getDerivedFromVars(xe.json.disabled_button_color))), e.$$.dirty[0] & /*componentContext*/
    1 && ze(t(29, f = xe.getDerivedFromVars(xe.json.text_color))), e.$$.dirty[0] & /*componentContext*/
    1 && Z(t(28, _ = xe.getDerivedFromVars(xe.json.font_size))), e.$$.dirty[0] & /*componentContext*/
    1 && it(t(27, h = xe.getDerivedFromVars(xe.json.font_weight))), e.$$.dirty[0] & /*componentContext*/
    1 && ct(t(26, m = xe.getDerivedFromVars(xe.json.value_width))), e.$$.dirty[0] & /*componentContext*/
    1 && Oe(t(25, p = xe.getDerivedFromVars(xe.json.background_color))), e.$$.dirty[0] & /*componentContext*/
    1 && Ue(t(24, w = xe.getDerivedFromVars(xe.json.border_color))), e.$$.dirty[0] & /*componentContext*/
    1 && ce(t(23, k = xe.getDerivedFromVars(xe.json.border_width))), e.$$.dirty[0] & /*componentContext*/
    1 && me(t(22, N = xe.getDerivedFromVars(xe.json.corner_radius))), e.$$.dirty[0] & /*componentContext*/
    1 && ye(t(21, B = xe.getDerivedFromVars(xe.json.padding))), e.$$.dirty[0] & /*componentContext*/
    1 && Je(t(20, z = xe.getDerivedFromVars(xe.json.min_value))), e.$$.dirty[0] & /*componentContext*/
    1 && he(t(19, oe = xe.getDerivedFromVars(xe.json.max_value))), e.$$.dirty[0] & /*componentContext*/
    1 && be(t(18, fe = xe.getDerivedFromVars(xe.json.step))), e.$$.dirty[0] & /*isEnabled*/
    8 | e.$$.dirty[2] & /*$jsonIsEnabled*/
    2 && t(3, Ut = Zr(He, Ut)), e.$$.dirty[0] & /*buttonColor*/
    16 | e.$$.dirty[2] & /*$jsonButtonColor*/
    1 && t(4, Tt = dr($t, 1, Tt)), e.$$.dirty[0] & /*buttonSize*/
    32 | e.$$.dirty[1] & /*$jsonButtonSize*/
    1073741824 && t(5, ir = io(Q, ir)), e.$$.dirty[0] & /*iconColor*/
    64 | e.$$.dirty[1] & /*$jsonIconColor*/
    536870912 && t(6, De = dr(Vt, 1, De)), e.$$.dirty[0] & /*disabledButtonColor*/
    128 | e.$$.dirty[1] & /*$jsonDisabledButtonColor*/
    268435456 && t(7, jt = dr(F, 1, jt)), e.$$.dirty[0] & /*textColor*/
    256 | e.$$.dirty[1] & /*$jsonTextColor*/
    134217728 && t(8, sr = dr(de, 1, sr)), e.$$.dirty[0] & /*fontSize*/
    512 | e.$$.dirty[1] & /*$jsonFontSize*/
    67108864 && t(9, rr = io(Mt, rr)), e.$$.dirty[1] & /*$jsonFontWeight*/
    33554432) {
      const at = rt;
      if (typeof at == "string")
        if (at in vr)
          t(13, nr = vr[at]);
        else {
          const St = parseInt(at, 10);
          !Number.isNaN(St) && St > 0 && t(13, nr = St);
        }
      else typeof at == "number" && at > 0 && t(13, nr = at);
    }
    if (e.$$.dirty[0] & /*valueWidth*/
    1024 | e.$$.dirty[1] & /*$jsonValueWidth*/
    16777216 && t(10, fr = io(Ne, fr)), e.$$.dirty[1] & /*$jsonBackgroundColor, backgroundColor*/
    8388672 && t(37, wr = dr(Ke, 1, wr)), e.$$.dirty[1] & /*$jsonBorderColor, borderColor*/
    4194432 && t(38, Nt = dr(te, 1, Nt)), e.$$.dirty[1] & /*$jsonBorderWidth, borderWidth*/
    2097408 && t(39, br = io(_e, br)), e.$$.dirty[1] & /*$jsonCornerRadius, cornerRadius*/
    1049088 && t(40, Rt = io(Ie, Rt)), e.$$.dirty[1] & /*$jsonPadding, padding*/
    525312 && t(41, mt = io(Ye, mt)), e.$$.dirty[0] & /*minValue, maxValue*/
    6144 | e.$$.dirty[1] & /*$jsonMinValue, $jsonMaxValue*/
    393216 && (t(11, er = io(Fe, er)), t(12, se = io(Ae, se))), e.$$.dirty[1] & /*$jsonStep, step*/
    67584) {
      const at = io(U, kr);
      at > 0 && t(42, kr = at);
    }
    if (e.$$.dirty[0] & /*minValue, maxValue*/
    6144 | e.$$.dirty[1] & /*$valueVariable*/
    32768 && t(17, T = Fo(A || 0, er, se)), e.$$.dirty[0] & /*componentContext, hasError*/
    5 | e.$$.dirty[1] & /*variable*/
    8192) {
      let at = !1;
      o ? Be.hasAction() && (at = !0, xe.logError(X(new Error('Cannot show "counter" inside component with an action')))) : (at = !0, xe.logError(X(new Error('Missing "counter_value_variable" in "counter"')))), bt !== at && t(2, bt = at);
    }
    e.$$.dirty[0] & /*isEnabled*/
    8 && t(15, Y = { disabled: !Ut }), e.$$.dirty[0] & /*iconColor*/
    64 | e.$$.dirty[1] & /*backgroundColor, borderColor, borderWidth, cornerRadius, padding*/
    1984 && t(14, le = {
      "--divkit-counter-bg": wr,
      "--divkit-counter-border-color": Nt,
      "--divkit-counter-border-width": ge(br),
      "--divkit-counter-radius": ge(Rt),
      "--divkit-counter-padding": ge(mt),
      "--divkit-counter-icon-color": De
    }), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*prevId*/
    4096 && xe.json && (ar && (Ft.unregisterFocusable(ar), t(43, ar = void 0)), xe.id && !xe.fakeElement && (t(43, ar = xe.id), Ft.registerFocusable(ar, {
      focus() {
      }
    })));
  }, [
    xe,
    Le,
    bt,
    Ut,
    Tt,
    ir,
    De,
    jt,
    sr,
    rr,
    fr,
    er,
    se,
    nr,
    le,
    Y,
    i,
    T,
    fe,
    oe,
    z,
    B,
    N,
    k,
    w,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    Dr,
    Br,
    wr,
    Nt,
    br,
    Rt,
    mt,
    kr,
    ar,
    o,
    n,
    A,
    U,
    Ae,
    Fe,
    Ye,
    Ie,
    _e,
    te,
    Ke,
    Ne,
    rt,
    Mt,
    de,
    F,
    Vt,
    Q,
    $t,
    He
  ];
}
class aw extends Or {
  constructor(r) {
    super(), Lr(this, r, lw, sw, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const uw = "appkit-webview__frame", Zs = {
  webview__frame: uw,
  "webview__aspect-wrapper": "appkit-webview__aspect-wrapper"
};
function cw(e) {
  let r, t;
  return r = new Fn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function fw(e) {
  let r, t;
  return r = new hn({
    props: {
      cls: gt("webview", Zs, {}),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      heightByAspect: (
        /*aspectPaddingBottom*/
        e[6] !== "0"
      ),
      $$slots: { default: [pw] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o & /*aspectPaddingBottom*/
      64 && (i.heightByAspect = /*aspectPaddingBottom*/
      n[6] !== "0"), o & /*$$scope, aspectPaddingBottom, url, html, sandbox, allowScrolling*/
      268435676 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function dw(e) {
  let r, t, n, o, i, s;
  return {
    c() {
      r = Pe("iframe"), g(r, "class", Zs.webview__frame), Xn(r.src, t = /*url*/
      e[2] || void 0) || g(r, "src", t), g(r, "srcdoc", n = /*url*/
      e[2] ? void 0 : (
        /*html*/
        e[3]
      )), g(
        r,
        "sandbox",
        /*sandbox*/
        e[7]
      ), g(r, "scrolling", o = /*allowScrolling*/
      e[4] ? "auto" : "no"), g(r, "title", "webview");
    },
    m(a, l) {
      K(a, r, l), i || (s = [
        Qe(
          r,
          "load",
          /*onLoad*/
          e[15]
        ),
        Qe(
          r,
          "error",
          /*onError*/
          e[16]
        )
      ], i = !0);
    },
    p(a, l) {
      l & /*url*/
      4 && !Xn(r.src, t = /*url*/
      a[2] || void 0) && g(r, "src", t), l & /*url, html*/
      12 && n !== (n = /*url*/
      a[2] ? void 0 : (
        /*html*/
        a[3]
      )) && g(r, "srcdoc", n), l & /*sandbox*/
      128 && g(
        r,
        "sandbox",
        /*sandbox*/
        a[7]
      ), l & /*allowScrolling*/
      16 && o !== (o = /*allowScrolling*/
      a[4] ? "auto" : "no") && g(r, "scrolling", o);
    },
    d(a) {
      a && J(r), i = !1, Rr(s);
    }
  };
}
function _w(e) {
  let r, t, n, o, i, s = `${/*aspectPaddingBottom*/
  e[6]}%`, a, l;
  return {
    c() {
      r = Pe("div"), t = Pe("iframe"), g(t, "class", Zs.webview__frame), Xn(t.src, n = /*url*/
      e[2] || void 0) || g(t, "src", n), g(t, "srcdoc", o = /*url*/
      e[2] ? void 0 : (
        /*html*/
        e[3]
      )), g(
        t,
        "sandbox",
        /*sandbox*/
        e[7]
      ), g(t, "scrolling", i = /*allowScrolling*/
      e[4] ? "auto" : "no"), g(t, "title", "webview"), g(r, "class", Zs["webview__aspect-wrapper"]), I(r, "padding-bottom", s);
    },
    m(u, c) {
      K(u, r, c), wt(r, t), a || (l = [
        Qe(
          t,
          "load",
          /*onLoad*/
          e[15]
        ),
        Qe(
          t,
          "error",
          /*onError*/
          e[16]
        )
      ], a = !0);
    },
    p(u, c) {
      c & /*url*/
      4 && !Xn(t.src, n = /*url*/
      u[2] || void 0) && g(t, "src", n), c & /*url, html*/
      12 && o !== (o = /*url*/
      u[2] ? void 0 : (
        /*html*/
        u[3]
      )) && g(t, "srcdoc", o), c & /*sandbox*/
      128 && g(
        t,
        "sandbox",
        /*sandbox*/
        u[7]
      ), c & /*allowScrolling*/
      16 && i !== (i = /*allowScrolling*/
      u[4] ? "auto" : "no") && g(t, "scrolling", i), c & /*aspectPaddingBottom*/
      64 && s !== (s = `${/*aspectPaddingBottom*/
      u[6]}%`) && I(r, "padding-bottom", s);
    },
    d(u) {
      u && J(r), a = !1, Rr(l);
    }
  };
}
function pw(e) {
  let r;
  function t(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[6] !== "0" ? _w : dw
    );
  }
  let n = t(e), o = n(e);
  return {
    c() {
      o.c(), r = or();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = t(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && J(r), o.d(i);
    }
  };
}
function gw(e) {
  let r, t, n, o;
  const i = [fw, cw], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[5] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = or();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, [u]) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (t && (pr(), ne(s[c], 1, 1, () => {
        s[c] = null;
      }), gr()), ~r ? (t = s[r], t ? t.p(l, u) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      ne(t), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function hw(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _ = v, h = () => (_(), _ = E(u, (_e) => t(20, f = _e)), u), m, p = v, w = () => (p(), p = E(l, (_e) => t(21, m = _e)), l), k, N = v, B = () => (N(), N = E(a, (_e) => t(22, k = _e)), a), z, oe = v, fe = () => (oe(), oe = E(s, (_e) => t(23, z = _e)), s), T, Y = v, le = () => (Y(), Y = E(i, (_e) => t(24, T = _e)), i), A, D = v, M = () => (D(), D = E(o, (_e) => t(25, A = _e)), o), U, q = v, be = () => (q(), q = E(n, (_e) => t(26, U = _e)), n);
  e.$$.on_destroy.push(() => _()), e.$$.on_destroy.push(() => p()), e.$$.on_destroy.push(() => N()), e.$$.on_destroy.push(() => oe()), e.$$.on_destroy.push(() => Y()), e.$$.on_destroy.push(() => D()), e.$$.on_destroy.push(() => q());
  let { componentContext: Ae } = r, { layoutParams: Ce = void 0 } = r;
  Tr(Xr);
  let he = !1, Fe, x, Je = !1, Ye = !0, Xe = !1, ye = !1, Ie = "0";
  function pe() {
    Ae.execAnyActions(Ae.json.on_load_actions);
  }
  function me() {
    Ae.execAnyActions(Ae.json.on_error_actions);
  }
  return e.$$set = (_e) => {
    "componentContext" in _e && t(0, Ae = _e.componentContext), "layoutParams" in _e && t(1, Ce = _e.layoutParams);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*componentContext*/
    1 && be(t(14, n = Ae.getDerivedFromVars(Ae.json.url))), e.$$.dirty & /*componentContext*/
    1 && M(t(13, o = Ae.getDerivedFromVars(Ae.json.html))), e.$$.dirty & /*componentContext*/
    1 && le(t(12, i = Ae.getDerivedFromVars(Ae.json.javascript_enabled))), e.$$.dirty & /*componentContext*/
    1 && fe(t(11, s = Ae.getDerivedFromVars(Ae.json.allow_scrolling))), e.$$.dirty & /*componentContext*/
    1 && B(t(10, a = Ae.getDerivedFromVars(Ae.json.allow_navigation))), e.$$.dirty & /*componentContext*/
    1 && w(t(9, l = Ae.getDerivedFromVars(Ae.json.scale_to_fit))), e.$$.dirty & /*componentContext*/
    1 && h(t(8, u = Ae.getDerivedFromVars(Ae.json.aspect))), e.$$.dirty & /*$jsonUrl, $jsonHtml, url, html, componentContext*/
    100663309 && (t(2, Fe = typeof U == "string" ? U : void 0), t(3, x = typeof A == "string" ? A : void 0), !Fe && !x ? (t(5, he = !0), Ae.logError(X(new Error('Missing "url" or "html" in "webview"')))) : t(5, he = !1)), e.$$.dirty & /*$jsonJsEnabled, javascriptEnabled*/
    16908288 && t(17, Je = Zr(T, Je)), e.$$.dirty & /*$jsonAllowScrolling, allowScrolling*/
    8388624 && t(4, Ye = Zr(z, Ye)), e.$$.dirty & /*$jsonAllowNavigation, allowNavigation*/
    4456448 && t(18, Xe = Zr(k, Xe)), e.$$.dirty & /*$jsonScaleToFit, scaleToFit*/
    2621440 && t(19, ye = Zr(m, ye)), e.$$.dirty & /*$jsonAspect*/
    1048576) {
      const _e = f == null ? void 0 : f.ratio;
      _e && Tn(_e) ? t(6, Ie = (100 / Number(_e)).toFixed(2)) : t(6, Ie = "0");
    }
    e.$$.dirty & /*javascriptEnabled, allowNavigation*/
    393216 && t(7, c = [
      "allow-same-origin",
      ...Je ? ["allow-scripts"] : [],
      ...Xe ? ["allow-popups"] : []
    ].join(" "));
  }, [
    Ae,
    Ce,
    Fe,
    x,
    Ye,
    he,
    Ie,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    n,
    pe,
    me,
    Je,
    Xe,
    ye,
    f,
    m,
    k,
    z,
    T,
    A,
    U
  ];
}
class mw extends Or {
  constructor(r) {
    super(), Lr(this, r, hw, gw, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const Qs = {
  "google-map__frame": "appkit-google-map__frame",
  "google-map__aspect-wrapper": "appkit-google-map__aspect-wrapper"
};
function bw(e) {
  let r, t;
  return r = new Fn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function yw(e) {
  let r, t;
  return r = new hn({
    props: {
      cls: gt("google-map", Qs, {}),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      heightByAspect: (
        /*aspectPaddingBottom*/
        e[3] !== "0"
      ),
      $$slots: { default: [vw] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*aspectPaddingBottom*/
      8 && (i.heightByAspect = /*aspectPaddingBottom*/
      n[3] !== "0"), o[0] & /*aspectPaddingBottom, iframeDoc, iframeEl*/
      56 | o[1] & /*$$scope*/
      256 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function ww(e) {
  let r;
  return {
    c() {
      r = Pe("iframe"), g(r, "class", Qs["google-map__frame"]), g(
        r,
        "srcdoc",
        /*iframeDoc*/
        e[4]
      ), g(r, "title", "Google Map"), g(r, "sandbox", "allow-scripts allow-same-origin");
    },
    m(t, n) {
      K(t, r, n), e[35](r);
    },
    p(t, n) {
      n[0] & /*iframeDoc*/
      16 && g(
        r,
        "srcdoc",
        /*iframeDoc*/
        t[4]
      );
    },
    d(t) {
      t && J(r), e[35](null);
    }
  };
}
function kw(e) {
  let r, t, n = `${/*aspectPaddingBottom*/
  e[3]}%`;
  return {
    c() {
      r = Pe("div"), t = Pe("iframe"), g(t, "class", Qs["google-map__frame"]), g(
        t,
        "srcdoc",
        /*iframeDoc*/
        e[4]
      ), g(t, "title", "Google Map"), g(t, "sandbox", "allow-scripts allow-same-origin"), g(r, "class", Qs["google-map__aspect-wrapper"]), I(r, "padding-bottom", n);
    },
    m(o, i) {
      K(o, r, i), wt(r, t), e[34](t);
    },
    p(o, i) {
      i[0] & /*iframeDoc*/
      16 && g(
        t,
        "srcdoc",
        /*iframeDoc*/
        o[4]
      ), i[0] & /*aspectPaddingBottom*/
      8 && n !== (n = `${/*aspectPaddingBottom*/
      o[3]}%`) && I(r, "padding-bottom", n);
    },
    d(o) {
      o && J(r), e[34](null);
    }
  };
}
function vw(e) {
  let r;
  function t(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[3] !== "0" ? kw : ww
    );
  }
  let n = t(e), o = n(e);
  return {
    c() {
      o.c(), r = or();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = t(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && J(r), o.d(i);
    }
  };
}
function jw(e) {
  let r, t, n, o;
  const i = [yw, bw], s = [];
  function a(l, u) {
    return !/*hasError*/
    l[2] && /*iframeDoc*/
    l[4] ? 0 : -1;
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = or();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (t && (pr(), ne(s[c], 1, 1, () => {
        s[c] = null;
      }), gr()), ~r ? (t = s[r], t ? t.p(l, u) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      ne(t), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function Yl(e) {
  return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Cw(e) {
  switch (e) {
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
function Ew(e) {
  return e.map((r, t) => {
    const n = Number(r.latitude) || 0, o = Number(r.longitude) || 0, i = r.title ? Yl(String(r.title)) : "", s = r.color ? String(r.color) : "", a = r.on_click_actions && r.on_click_actions.length > 0;
    let l = "";
    s && (l = `,icon:{path:google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,fillColor:'${Yl(s)}',fillOpacity:1,strokeColor:'#333',strokeWeight:1,scale:6,anchor:new google.maps.Point(0,0)}`);
    const u = a ? `m.addListener('click',function(){window.parent.postMessage({type:'marker_click',index:${t}},'*');});` : "";
    return `(function(){var m=new google.maps.Marker({position:{lat:${n},lng:${o}},map:map,title:'${i}'${l}});${u}})();`;
  }).join(`
`);
}
function Aw(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _, h, m = v, p = () => (m(), m = E(_, (Z) => t(24, h = Z)), _), w, k = v, N = () => (k(), k = E(l, (Z) => t(25, w = Z)), l), B, z = v, oe = () => (z(), z = E(a, (Z) => t(26, B = Z)), a), fe, T = v, Y = () => (T(), T = E(f, (Z) => t(27, fe = Z)), f), le, A = v, D = () => (A(), A = E(u, (Z) => t(28, le = Z)), u), M, U = v, q = () => (U(), U = E(c, (Z) => t(29, M = Z)), c), be, Ae = v, Ce = () => (Ae(), Ae = E(s, (Z) => t(30, be = Z)), s), he, Fe = v, x = () => (Fe(), Fe = E(i, (Z) => t(31, he = Z)), i), Je, Ye = v, Xe = () => (Ye(), Ye = E(o, (Z) => t(32, Je = Z)), o), ye, Ie = v, pe = () => (Ie(), Ie = E(n, (Z) => t(33, ye = Z)), n);
  e.$$.on_destroy.push(() => m()), e.$$.on_destroy.push(() => k()), e.$$.on_destroy.push(() => z()), e.$$.on_destroy.push(() => T()), e.$$.on_destroy.push(() => A()), e.$$.on_destroy.push(() => U()), e.$$.on_destroy.push(() => Ae()), e.$$.on_destroy.push(() => Fe()), e.$$.on_destroy.push(() => Ye()), e.$$.on_destroy.push(() => Ie());
  let { componentContext: me } = r, { layoutParams: _e = void 0 } = r;
  Tr(Xr);
  let ee = !1, ce = "0", te = 0, we = 0, Ue = 10, Ke = "normal", $ = !0, Oe = !0, Ne, ot = [], ct = "", rt, kt = !1;
  function it(Z) {
    if (!rt || Z.source !== rt.contentWindow) return;
    const de = Z.data;
    if (!(!de || typeof de != "object")) {
      if (de.type === "map_ready" && !kt)
        kt = !0, me.execAnyActions(me.json.on_ready_actions);
      else if (de.type === "map_error")
        me.execAnyActions(me.json.on_error_actions);
      else if (de.type === "marker_click" && typeof de.index == "number") {
        const lt = ot[de.index];
        lt != null && lt.on_click_actions && me.execAnyActions(lt.on_click_actions);
      }
    }
  }
  Qn(() => {
    window.addEventListener("message", it);
  }), ln(() => {
    window.removeEventListener("message", it);
  });
  function Mt(Z) {
    Fr[Z ? "unshift" : "push"](() => {
      rt = Z, t(5, rt);
    });
  }
  function ft(Z) {
    Fr[Z ? "unshift" : "push"](() => {
      rt = Z, t(5, rt);
    });
  }
  return e.$$set = (Z) => {
    "componentContext" in Z && t(0, me = Z.componentContext), "layoutParams" in Z && t(1, _e = Z.layoutParams);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*componentContext*/
    1 && pe(t(15, n = me.getDerivedFromVars(me.json.latitude))), e.$$.dirty[0] & /*componentContext*/
    1 && Xe(t(14, o = me.getDerivedFromVars(me.json.longitude))), e.$$.dirty[0] & /*componentContext*/
    1 && x(t(13, i = me.getDerivedFromVars(me.json.zoom))), e.$$.dirty[0] & /*componentContext*/
    1 && Ce(t(12, s = me.getDerivedFromVars(me.json.map_type))), e.$$.dirty[0] & /*componentContext*/
    1 && oe(t(11, a = me.getDerivedFromVars(me.json.allow_zoom))), e.$$.dirty[0] & /*componentContext*/
    1 && N(t(10, l = me.getDerivedFromVars(me.json.allow_scroll))), e.$$.dirty[0] & /*componentContext*/
    1 && D(t(9, u = me.getDerivedFromVars(me.json.api_key))), e.$$.dirty[0] & /*componentContext*/
    1 && q(t(8, c = me.getDerivedFromVars(me.json.api_key_web))), e.$$.dirty[0] & /*componentContext*/
    1 && Y(t(7, f = me.getDerivedFromVars(me.json.markers))), e.$$.dirty[0] & /*componentContext*/
    1 && p(t(6, _ = me.getDerivedFromVars(me.json.aspect))), e.$$.dirty[0] & /*$jsonMapType, $jsonApiKeyWeb, $jsonApiKey, $jsonMarkers, resolvedApiKey, componentContext*/
    2017460225 | e.$$.dirty[1] & /*$jsonLatitude, $jsonLongitude, $jsonZoom*/
    7) {
      t(16, te = typeof ye == "number" ? ye : 0), t(17, we = typeof Je == "number" ? Je : 0), t(18, Ue = typeof he == "number" ? he : 10), t(19, Ke = typeof be == "string" ? be : "normal");
      const Z = M, de = le;
      t(22, Ne = typeof Z == "string" ? Z : typeof de == "string" ? de : void 0), t(23, ot = Array.isArray(fe) ? fe : []), Ne ? t(2, ee = !1) : (t(2, ee = !0), me.logError(X(new Error('Missing "api_key" or "api_key_web" in "google_map"'))));
    }
    if (e.$$.dirty[0] & /*$jsonAllowZoom, allowZoom*/
    68157440 && t(20, $ = Zr(B, $)), e.$$.dirty[0] & /*$jsonAllowScroll, allowScroll*/
    35651584 && t(21, Oe = Zr(w, Oe)), e.$$.dirty[0] & /*$jsonAspect*/
    16777216) {
      const Z = h == null ? void 0 : h.ratio;
      Z && Tn(Z) ? t(3, ce = (100 / Number(Z)).toFixed(2)) : t(3, ce = "0");
    }
    if (e.$$.dirty[0] & /*resolvedApiKey, resolvedMarkers, mapType, allowScroll, allowZoom, latitude, longitude, zoom*/
    16711680)
      if (Ne) {
        const Z = Ew(ot), de = Cw(Ke), lt = Oe || $ ? "auto" : "none";
        t(4, ct = `<!DOCTYPE html>
<html><head>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>html,body,#map{width:100%;height:100%;margin:0;padding:0;}</style>
</head><body>
<div id="map"></div>
<script>
function initMap(){
var map=new google.maps.Map(document.getElementById('map'),{
center:{lat:${te},lng:${we}},
zoom:${Math.round(Ue)},
mapTypeId:'${de}',
gestureHandling:'${lt}',
zoomControl:${$},
scrollwheel:${Oe},
draggable:${Oe},
fullscreenControl:false,
streetViewControl:false
});
${Z}
google.maps.event.addListenerOnce(map,'idle',function(){
window.parent.postMessage({type:'map_ready'},'*');
});
}
<\/script>
<script src="https://maps.googleapis.com/maps/api/js?key=${Yl(Ne)}&callback=initMap" async defer
onerror="window.parent.postMessage({type:'map_error'},'*')"><\/script>
</body></html>`);
      } else
        t(4, ct = "");
  }, [
    me,
    _e,
    ee,
    ce,
    ct,
    rt,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    n,
    te,
    we,
    Ue,
    Ke,
    $,
    Oe,
    Ne,
    ot,
    h,
    w,
    B,
    fe,
    le,
    M,
    be,
    he,
    Je,
    ye,
    Mt,
    ft
  ];
}
class Sw extends Or {
  constructor(r) {
    super(), Lr(this, r, Aw, jw, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
function Kc(e, r, t) {
  const n = e.slice();
  return n[11] = r[t], n;
}
function Vw(e) {
  let r, t;
  return r = new Fn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Fw(e) {
  let r, t;
  return r = new hn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: { default: [Dw] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o & /*$$scope, componentContext, customElem, desc, jsonItems, items, hasItemsError, templateAttrs, templateContent*/
      16893 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function qc(e) {
  let r, t = [
    /*templateAttrs*/
    e[8]
  ], n = {};
  for (let o = 0; o < t.length; o += 1)
    n = jo(n, t[o]);
  return {
    c() {
      r = Pe("template"), qo(r, n);
    },
    m(o, i) {
      K(o, r, i), r.content.innerHTML = /*templateContent*/
      e[7];
    },
    p(o, i) {
      i & /*templateContent*/
      128 && (r.content.innerHTML = /*templateContent*/
      o[7]), qo(r, n = No(t, [i & /*templateAttrs*/
      256 && /*templateAttrs*/
      o[8]]));
    },
    d(o) {
      o && J(r);
    }
  };
}
function Yc(e) {
  let r = (
    /*jsonItems*/
    e[5]
  ), t, n, o = Zc(e);
  return {
    c() {
      o.c(), t = or();
    },
    m(i, s) {
      o.m(i, s), K(i, t, s), n = !0;
    },
    p(i, s) {
      s & /*jsonItems*/
      32 && Sr(r, r = /*jsonItems*/
      i[5]) ? (pr(), ne(o, 1, 1, v), gr(), o = Zc(i), o.c(), W(o, 1), o.m(t.parentNode, t)) : o.p(i, s);
    },
    i(i) {
      n || (W(o), n = !0);
    },
    o(i) {
      ne(o), n = !1;
    },
    d(i) {
      i && J(t), o.d(i);
    }
  };
}
function Xc(e) {
  let r, t;
  return r = new xn({
    props: { componentContext: (
      /*item*/
      e[11]
    ) }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o & /*items*/
      8 && (i.componentContext = /*item*/
      n[11]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Zc(e) {
  let r, t, n = ur(
    /*items*/
    e[3]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Xc(Kc(e, n, s));
  const i = (s) => ne(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = or();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      K(s, r, a), t = !0;
    },
    p(s, a) {
      if (a & /*items*/
      8) {
        n = ur(
          /*items*/
          s[3]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const u = Kc(s, n, l);
          o[l] ? (o[l].p(u, a), W(o[l], 1)) : (o[l] = Xc(u), o[l].c(), W(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (pr(), l = n.length; l < o.length; l += 1)
          i(l);
        gr();
      }
    },
    i(s) {
      if (!t) {
        for (let a = 0; a < n.length; a += 1)
          W(o[a]);
        t = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        ne(o[a]);
      t = !1;
    },
    d(s) {
      s && J(r), un(o, s);
    }
  };
}
function Ml(e) {
  let r, t, n, o = (
    /*templateContent*/
    e[7] && qc(e)
  ), i = !/*hasItemsError*/
  e[4] && /*jsonItems*/
  e[5] && Yc(e), s = [
    /*componentContext*/
    e[0].json.custom_props || {}
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = jo(a, s[l]);
  return {
    c() {
      r = Pe(
        /*desc*/
        e[2].element
      ), o && o.c(), t = _r(), i && i.c(), ri(
        /*desc*/
        e[2].element
      )(r, a);
    },
    m(l, u) {
      K(l, r, u), o && o.m(r, null), wt(r, t), i && i.m(r, null), e[9](r), n = !0;
    },
    p(l, u) {
      /*templateContent*/
      l[7] ? o ? o.p(l, u) : (o = qc(l), o.c(), o.m(r, t)) : o && (o.d(1), o = null), !/*hasItemsError*/
      l[4] && /*jsonItems*/
      l[5] ? i ? (i.p(l, u), u & /*hasItemsError, jsonItems*/
      48 && W(i, 1)) : (i = Yc(l), i.c(), W(i, 1), i.m(r, null)) : i && (pr(), ne(i, 1, 1, () => {
        i = null;
      }), gr()), ri(
        /*desc*/
        l[2].element
      )(r, a = No(s, [
        u & /*componentContext*/
        1 && /*componentContext*/
        (l[0].json.custom_props || {})
      ]));
    },
    i(l) {
      n || (W(i), n = !0);
    },
    o(l) {
      ne(i), n = !1;
    },
    d(l) {
      l && J(r), o && o.d(), i && i.d(), e[9](null);
    }
  };
}
function Dw(e) {
  let r = (
    /*desc*/
    e[2].element
  ), t, n = (
    /*desc*/
    e[2].element && Ml(e)
  );
  return {
    c() {
      n && n.c(), t = or();
    },
    m(o, i) {
      n && n.m(o, i), K(o, t, i);
    },
    p(o, i) {
      /*desc*/
      o[2].element ? r ? Sr(
        r,
        /*desc*/
        o[2].element
      ) ? (n.d(1), n = Ml(o), r = /*desc*/
      o[2].element, n.c(), n.m(t.parentNode, t)) : n.p(o, i) : (n = Ml(o), r = /*desc*/
      o[2].element, n.c(), n.m(t.parentNode, t)) : r && (n.d(1), n = null, r = /*desc*/
      o[2].element);
    },
    i: v,
    o(o) {
      ne(n, o);
    },
    d(o) {
      o && J(t), n && n.d(o);
    }
  };
}
function Iw(e) {
  let r, t, n, o;
  const i = [Fw, Vw], s = [];
  function a(l, u) {
    return (
      /*desc*/
      l[2] ? 0 : -1
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = or();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, [u]) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (t && (pr(), ne(s[c], 1, 1, () => {
        s[c] = null;
      }), gr()), ~r ? (t = s[r], t ? t.p(l, u) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      ne(t), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function Tw(e, r, t) {
  let n, { componentContext: o } = r, { layoutParams: i = void 0 } = r;
  const s = Tr(Xr);
  let a, l = null, u = "", c = {}, f = [], _ = !1;
  Qn(() => {
    if (a && "divKitApiCallback" in a && typeof a.divKitApiCallback == "function") {
      const m = s.getExtensionContext(o);
      a.divKitApiCallback(m);
    }
  }), ln(() => {
    f.forEach((m) => {
      m.destroy();
    });
  });
  function h(m) {
    Fr[m ? "unshift" : "push"](() => {
      a = m, t(6, a);
    });
  }
  return e.$$set = (m) => {
    "componentContext" in m && t(0, o = m.componentContext), "layoutParams" in m && t(1, i = m.layoutParams);
  }, e.$$.update = () => {
    var m;
    if (e.$$.dirty & /*componentContext, desc*/
    5)
      if (typeof o.json.custom_type == "string" && o.json.custom_type && ((m = s.customComponents) != null && m.has(o.json.custom_type))) {
        if (t(2, l = s.customComponents.get(o.json.custom_type)), typeof l.template == "function") {
          const p = s.getExtensionContext(o), w = /* @__PURE__ */ new Map();
          for (const [k, N] of p.variables)
            w.set(k, N.getValue());
          t(7, u = l.template({
            props: o.json.custom_props,
            variables: w
          }));
        } else l.template && typeof l.template == "string" ? t(7, u = l.template) : t(7, u = "");
        t(8, c = {
          shadowrootmode: l.shadowRootMode || "open"
        });
      } else
        t(2, l = null), t(7, u = ";"), o.logError(X(new Error('Unknown or incorrect "custom_type" prop for div "custom"')));
    e.$$.dirty & /*componentContext*/
    1 && t(5, n = o.json.items), e.$$.dirty & /*jsonItems, componentContext*/
    33 && (n !== void 0 && !Array.isArray(n) ? (t(4, _ = !0), o.logError(X(new Error('Incorrect "items" prop for div "custom"')))) : t(4, _ = !1)), e.$$.dirty & /*items, hasItemsError, jsonItems, componentContext*/
    57 && (f.forEach((p) => {
      p.destroy();
    }), t(3, f = (!_ && n || []).map((p, w) => o.produceChildContext(p, { path: w }))));
  }, [
    o,
    i,
    l,
    f,
    _,
    n,
    a,
    u,
    c,
    h
  ];
}
class Mw extends Or {
  constructor(r) {
    super(), Lr(this, r, Tw, Iw, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const Pw = "appkit-breadcrumb", Nw = "appkit-breadcrumb__list", zw = "appkit-breadcrumb__item", Lw = "appkit-breadcrumb__label", Ow = "appkit-breadcrumb__label_link", Bw = "appkit-breadcrumb__separator", yi = {
  breadcrumb: Pw,
  breadcrumb__list: Nw,
  breadcrumb__item: zw,
  breadcrumb__label: Lw,
  breadcrumb__label_link: Ow,
  breadcrumb__separator: Bw
};
function Qc(e, r, t) {
  const n = e.slice();
  return n[26] = r[t], n[28] = t, n;
}
function Rw(e) {
  let r, t;
  return r = new Fn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Hw(e) {
  let r, t;
  return r = new hn({
    props: {
      cls: gt("breadcrumb", yi, {}),
      style: (
        /*stl*/
        e[3]
      ),
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: { default: [Gw] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o & /*stl*/
      8 && (i.style = /*stl*/
      n[3]), o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o & /*$$scope, crumbs, separator*/
      536870932 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function Ww(e) {
  let r, t = (
    /*crumb*/
    e[26].title + ""
  ), n, o, i, s, a, l, u;
  function c(...f) {
    return (
      /*click_handler*/
      e[22](
        /*crumb*/
        e[26],
        ...f
      )
    );
  }
  return {
    c() {
      r = Pe("a"), n = Nn(t), i = _r(), s = Pe("span"), a = Nn(
        /*separator*/
        e[2]
      ), g(r, "class", yi.breadcrumb__label + " " + yi.breadcrumb__label_link), g(r, "href", o = $c(
        /*crumb*/
        e[26]
      )), g(s, "class", yi.breadcrumb__separator), g(s, "aria-hidden", "true");
    },
    m(f, _) {
      K(f, r, _), wt(r, n), K(f, i, _), K(f, s, _), wt(s, a), l || (u = Qe(r, "click", c), l = !0);
    },
    p(f, _) {
      e = f, _ & /*crumbs*/
      16 && t !== (t = /*crumb*/
      e[26].title + "") && Jn(n, t), _ & /*crumbs*/
      16 && o !== (o = $c(
        /*crumb*/
        e[26]
      )) && g(r, "href", o), _ & /*separator*/
      4 && Jn(
        a,
        /*separator*/
        e[2]
      );
    },
    d(f) {
      f && (J(r), J(i), J(s)), l = !1, u();
    }
  };
}
function Uw(e) {
  let r, t = (
    /*crumb*/
    e[26].title + ""
  ), n;
  return {
    c() {
      r = Pe("span"), n = Nn(t), g(r, "class", yi.breadcrumb__label), g(r, "aria-current", "page");
    },
    m(o, i) {
      K(o, r, i), wt(r, n);
    },
    p(o, i) {
      i & /*crumbs*/
      16 && t !== (t = /*crumb*/
      o[26].title + "") && Jn(n, t);
    },
    d(o) {
      o && J(r);
    }
  };
}
function xc(e) {
  let r, t;
  function n(s, a) {
    return (
      /*index*/
      s[28] === /*crumbs*/
      s[4].length - 1 ? Uw : Ww
    );
  }
  let o = n(e), i = o(e);
  return {
    c() {
      r = Pe("li"), i.c(), t = _r(), g(r, "class", yi.breadcrumb__item);
    },
    m(s, a) {
      K(s, r, a), i.m(r, null), wt(r, t);
    },
    p(s, a) {
      o === (o = n(s)) && i ? i.p(s, a) : (i.d(1), i = o(s), i && (i.c(), i.m(r, t)));
    },
    d(s) {
      s && J(r), i.d();
    }
  };
}
function Gw(e) {
  let r, t, n = ur(
    /*crumbs*/
    e[4]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = xc(Qc(e, n, i));
  return {
    c() {
      r = Pe("nav"), t = Pe("ol");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(t, "class", yi.breadcrumb__list), g(r, "aria-label", "breadcrumb");
    },
    m(i, s) {
      K(i, r, s), wt(r, t);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(t, null);
    },
    p(i, s) {
      if (s & /*crumbs, separator, getHref, handleCrumbClick*/
      2068) {
        n = ur(
          /*crumbs*/
          i[4]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = Qc(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = xc(l), o[a].c(), o[a].m(t, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
    },
    d(i) {
      i && J(r), un(o, i);
    }
  };
}
function Jw(e) {
  let r, t, n, o;
  const i = [Hw, Rw], s = [];
  function a(l, u) {
    return 0;
  }
  return ~(r = a()) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = or();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, [u]) {
      t && t.p(l, u);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      ne(t), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function $c(e) {
  var r;
  return (r = e.action) != null && r.url && !e.action.url.startsWith("div-action://") ? e.action.url : "#";
}
function Kw(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _, h = v, m = () => (h(), h = E(u, (Ie) => t(16, _ = Ie)), u), p, w = v, k = () => (w(), w = E(l, (Ie) => t(17, p = Ie)), l), N, B = v, z = () => (B(), B = E(a, (Ie) => t(18, N = Ie)), a), oe, fe = v, T = () => (fe(), fe = E(s, (Ie) => t(19, oe = Ie)), s), Y, le = v, A = () => (le(), le = E(i, (Ie) => t(20, Y = Ie)), i), D, M = v, U = () => (M(), M = E(o, (Ie) => t(21, D = Ie)), o);
  e.$$.on_destroy.push(() => h()), e.$$.on_destroy.push(() => w()), e.$$.on_destroy.push(() => B()), e.$$.on_destroy.push(() => fe()), e.$$.on_destroy.push(() => le()), e.$$.on_destroy.push(() => M());
  let { componentContext: q } = r, { layoutParams: be = void 0 } = r;
  const Ae = Tr(Xr);
  let Ce = "/", he = "#0077CC", Fe = "#111111", x = 14;
  function Je() {
    t(2, Ce = "/"), t(12, he = "#0077CC"), t(13, Fe = "#111111"), t(14, x = 14);
  }
  function Ye(Ie, pe) {
    const me = q.json.item_builder;
    if (me && Array.isArray(pe) && Array.isArray(me.prototypes)) {
      const _e = [];
      return pe.forEach((ee, ce) => {
        if (ee === null || typeof ee != "object")
          return;
        const te = Ae.preparePrototypeVariables(me.data_element_name || "it", ee, ce);
        for (let we = 0; we < me.prototypes.length; ++we) {
          const Ue = me.prototypes[we];
          if (!Ue.title || Ue.selector !== void 0 && !q.getJsonWithVars(Ue.selector, te))
            continue;
          const $ = { title: q.getJsonWithVars(Ue.title, te) };
          if (Ue.action) {
            const Oe = q.getJsonWithVars(Ue.action, te);
            Oe && ($.action = Oe);
          }
          _e.push($);
          break;
        }
      }), _e;
    }
    return Array.isArray(Ie) ? Ie : q.json.crumbs || [];
  }
  function Xe(Ie, pe) {
    pe.action && (Ie.preventDefault(), q.execAnyActions([pe.action]));
  }
  const ye = (Ie, pe) => Xe(pe, Ie);
  return e.$$set = (Ie) => {
    "componentContext" in Ie && t(0, q = Ie.componentContext), "layoutParams" in Ie && t(1, be = Ie.layoutParams);
  }, e.$$.update = () => {
    var Ie, pe, me;
    e.$$.dirty & /*componentContext*/
    1 && t(15, n = q.origJson), e.$$.dirty & /*origJson*/
    32768 && n && Je(), e.$$.dirty & /*componentContext*/
    1 && U(t(10, o = q.getDerivedFromVars(q.json.separator))), e.$$.dirty & /*componentContext*/
    1 && A(t(9, i = q.getDerivedFromVars(q.json.item_text_color))), e.$$.dirty & /*componentContext*/
    1 && T(t(8, s = q.getDerivedFromVars(q.json.active_text_color))), e.$$.dirty & /*componentContext*/
    1 && z(t(7, a = q.getDerivedFromVars(q.json.item_font_size))), e.$$.dirty & /*componentContext*/
    1 && k(t(6, l = q.getDerivedFromVars(q.json.crumbs))), e.$$.dirty & /*componentContext*/
    1 && m(t(5, u = typeof ((Ie = q.json.item_builder) == null ? void 0 : Ie.data) == "string" ? q.getDerivedFromVars((pe = q.json.item_builder) == null ? void 0 : pe.data, void 0, !0) : (me = q.json.item_builder) != null && me.data ? Jo(q.json.item_builder.data) : void 0)), e.$$.dirty & /*$jsonSeparator, separator*/
    2097156 && t(2, Ce = typeof D == "string" && D.length > 0 ? D : Ce), e.$$.dirty & /*$jsonItemTextColor, itemTextColor*/
    1052672 && t(12, he = dr(Y, 1, he)), e.$$.dirty & /*$jsonActiveTextColor, activeTextColor*/
    532480 && t(13, Fe = dr(oe, 1, Fe)), e.$$.dirty & /*$jsonItemFontSize, itemFontSize*/
    278528 && t(14, x = Rn(N, x)), e.$$.dirty & /*$jsonCrumbs, $jsonItemBuilderData*/
    196608 && t(4, c = Ye(p, _)), e.$$.dirty & /*itemTextColor, activeTextColor, itemFontSize*/
    28672 && t(3, f = {
      "--divkit-breadcrumb-item-color": he,
      "--divkit-breadcrumb-active-color": Fe,
      "--divkit-breadcrumb-font-size": ge(x)
    });
  }, [
    q,
    be,
    Ce,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    Xe,
    he,
    Fe,
    x,
    n,
    _,
    p,
    N,
    oe,
    Y,
    D,
    ye
  ];
}
class qw extends Or {
  constructor(r) {
    super(), Lr(this, r, Kw, Jw, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const Yw = "appkit-autocomplete", Xw = "appkit-autocomplete__input", Zw = "appkit-autocomplete__dropdown", Qw = "appkit-autocomplete__dropdown_below", xw = "appkit-autocomplete__dropdown_above", $w = "appkit-autocomplete__suggestion", ek = "appkit-autocomplete__suggestion_highlighted", Ko = {
  autocomplete: Yw,
  autocomplete__input: Xw,
  "autocomplete__input_has-custom-focus": "appkit-autocomplete__input_has-custom-focus",
  autocomplete__dropdown: Zw,
  autocomplete__dropdown_below: Qw,
  autocomplete__dropdown_above: xw,
  autocomplete__suggestion: $w,
  autocomplete__suggestion_highlighted: ek,
  "autocomplete__suggestion-text": "appkit-autocomplete__suggestion-text",
  "autocomplete__suggestion-secondary": "appkit-autocomplete__suggestion-secondary"
};
function ef(e, r, t) {
  const n = e.slice();
  return n[102] = r[t], n[104] = t, n;
}
function tk(e) {
  let r, t;
  return r = new Fn({
    props: {
      componentContext: (
        /*componentContext*/
        e[0]
      )
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function rk(e) {
  let r, t;
  return r = new hn({
    props: {
      cls: gt("autocomplete", Ko, {}),
      style: (
        /*stl*/
        e[13]
      ),
      customDescription: !0,
      customActions: "autocomplete",
      customPaddings: !0,
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        e[0]
      ),
      layoutParams: (
        /*layoutParams*/
        e[1]
      ),
      $$slots: {
        default: [
          nk,
          ({ hasCustomFocus: n, focusHandler: o, blurHandler: i }) => ({
            99: n,
            100: o,
            101: i
          }),
          ({ hasCustomFocus: n, focusHandler: o, blurHandler: i }) => [
            0,
            0,
            0,
            (n ? 64 : 0) | (o ? 128 : 0) | (i ? 256 : 0)
          ]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*stl*/
      8192 && (i.style = /*stl*/
      n[13]), o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), o[0] & /*layoutParams*/
      2 && (i.layoutParams = /*layoutParams*/
      n[1]), o[0] & /*dropdownPosition, dropdownStl, dropdownEl, suggestions, highlightedIndex, showDropdown, inputStl, inputType, description, isEnabled, $textVariable, inputEl*/
      106484 | o[1] & /*$jsonHintText*/
      256 | o[3] & /*$$scope, hasCustomFocus, focusHandler, blurHandler*/
      4544 && (i.$$scope = { dirty: o, ctx: n }), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function tf(e) {
  let r, t, n, o = ur(
    /*suggestions*/
    e[4]
  ), i = [];
  for (let s = 0; s < o.length; s += 1)
    i[s] = nf(ef(e, o, s));
  return {
    c() {
      r = Pe("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      g(r, "class", t = gt("autocomplete__dropdown", Ko, { [
        /*dropdownPosition*/
        e[9]
      ]: !0 })), g(r, "style", n = cr(
        /*dropdownStl*/
        e[11]
      )), g(r, "role", "listbox");
    },
    m(s, a) {
      K(s, r, a);
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(r, null);
      e[91](r);
    },
    p(s, a) {
      if (a[0] & /*highlightedIndex, suggestions*/
      272 | a[1] & /*selectSuggestion*/
      8192) {
        o = ur(
          /*suggestions*/
          s[4]
        );
        let l;
        for (l = 0; l < o.length; l += 1) {
          const u = ef(s, o, l);
          i[l] ? i[l].p(u, a) : (i[l] = nf(u), i[l].c(), i[l].m(r, null));
        }
        for (; l < i.length; l += 1)
          i[l].d(1);
        i.length = o.length;
      }
      a[0] & /*dropdownPosition*/
      512 && t !== (t = gt("autocomplete__dropdown", Ko, { [
        /*dropdownPosition*/
        s[9]
      ]: !0 })) && g(r, "class", t), a[0] & /*dropdownStl*/
      2048 && n !== (n = cr(
        /*dropdownStl*/
        s[11]
      )) && g(r, "style", n);
    },
    d(s) {
      s && J(r), un(i, s), e[91](null);
    }
  };
}
function rf(e) {
  let r, t = (
    /*suggestion*/
    e[102].secondary_text + ""
  ), n;
  return {
    c() {
      r = Pe("div"), n = Nn(t), g(r, "class", Ko["autocomplete__suggestion-secondary"]);
    },
    m(o, i) {
      K(o, r, i), wt(r, n);
    },
    p(o, i) {
      i[0] & /*suggestions*/
      16 && t !== (t = /*suggestion*/
      o[102].secondary_text + "") && Jn(n, t);
    },
    d(o) {
      o && J(r);
    }
  };
}
function nf(e) {
  let r, t, n = (
    /*suggestion*/
    (e[102].text || /*suggestion*/
    e[102].value) + ""
  ), o, i, s, a, l, u, c, f = (
    /*suggestion*/
    e[102].secondary_text && rf(e)
  );
  function _() {
    return (
      /*mousedown_handler*/
      e[89](
        /*suggestion*/
        e[102]
      )
    );
  }
  function h() {
    return (
      /*mouseenter_handler*/
      e[90](
        /*index*/
        e[104]
      )
    );
  }
  return {
    c() {
      r = Pe("div"), t = Pe("div"), o = Nn(n), i = _r(), f && f.c(), s = _r(), g(t, "class", Ko["autocomplete__suggestion-text"]), g(r, "class", a = gt("autocomplete__suggestion", Ko, {
        highlighted: (
          /*index*/
          e[104] === /*highlightedIndex*/
          e[8]
        )
      })), g(r, "role", "option"), g(r, "aria-selected", l = /*index*/
      e[104] === /*highlightedIndex*/
      e[8]);
    },
    m(m, p) {
      K(m, r, p), wt(r, t), wt(t, o), wt(r, i), f && f.m(r, null), wt(r, s), u || (c = [
        Qe(r, "mousedown", D_(_)),
        Qe(r, "mouseenter", h)
      ], u = !0);
    },
    p(m, p) {
      e = m, p[0] & /*suggestions*/
      16 && n !== (n = /*suggestion*/
      (e[102].text || /*suggestion*/
      e[102].value) + "") && Jn(o, n), /*suggestion*/
      e[102].secondary_text ? f ? f.p(e, p) : (f = rf(e), f.c(), f.m(r, s)) : f && (f.d(1), f = null), p[0] & /*highlightedIndex*/
      256 && a !== (a = gt("autocomplete__suggestion", Ko, {
        highlighted: (
          /*index*/
          e[104] === /*highlightedIndex*/
          e[8]
        )
      })) && g(r, "class", a), p[0] & /*highlightedIndex*/
      256 && l !== (l = /*index*/
      e[104] === /*highlightedIndex*/
      e[8]) && g(r, "aria-selected", l);
    },
    d(m) {
      m && J(r), f && f.d(), u = !1, Rr(c);
    }
  };
}
function nk(e) {
  let r, t, n, o, i, s, a, l, u;
  function c(...h) {
    return (
      /*focus_handler*/
      e[87](
        /*focusHandler*/
        e[100],
        ...h
      )
    );
  }
  function f(...h) {
    return (
      /*blur_handler*/
      e[88](
        /*blurHandler*/
        e[101],
        ...h
      )
    );
  }
  let _ = (
    /*showDropdown*/
    e[7] && /*suggestions*/
    e[4].length > 0 && tf(e)
  );
  return {
    c() {
      r = Pe("input"), s = _r(), _ && _.c(), a = or(), g(r, "class", t = gt("autocomplete__input", Ko, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          e[99]
        )
      })), g(r, "style", n = cr(
        /*inputStl*/
        e[12]
      )), g(
        r,
        "type",
        /*inputType*/
        e[15]
      ), g(r, "placeholder", o = /*$jsonHintText*/
      e[39] || ""), g(
        r,
        "aria-label",
        /*description*/
        e[10]
      ), g(r, "aria-autocomplete", "list"), g(
        r,
        "aria-expanded",
        /*showDropdown*/
        e[7]
      ), g(r, "autocomplete", "off"), r.disabled = i = !/*isEnabled*/
      e[16], r.value = /*$textVariable*/
      e[5];
    },
    m(h, m) {
      K(h, r, m), e[86](r), K(h, s, m), _ && _.m(h, m), K(h, a, m), l || (u = [
        Qe(
          r,
          "input",
          /*onInput*/
          e[41]
        ),
        Qe(r, "focus", c),
        Qe(r, "blur", f),
        Qe(
          r,
          "keydown",
          /*onKeyDown*/
          e[45]
        )
      ], l = !0);
    },
    p(h, m) {
      e = h, m[3] & /*hasCustomFocus*/
      64 && t !== (t = gt("autocomplete__input", Ko, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          e[99]
        )
      })) && g(r, "class", t), m[0] & /*inputStl*/
      4096 && n !== (n = cr(
        /*inputStl*/
        e[12]
      )) && g(r, "style", n), m[0] & /*inputType*/
      32768 && g(
        r,
        "type",
        /*inputType*/
        e[15]
      ), m[1] & /*$jsonHintText*/
      256 && o !== (o = /*$jsonHintText*/
      e[39] || "") && g(r, "placeholder", o), m[0] & /*description*/
      1024 && g(
        r,
        "aria-label",
        /*description*/
        e[10]
      ), m[0] & /*showDropdown*/
      128 && g(
        r,
        "aria-expanded",
        /*showDropdown*/
        e[7]
      ), m[0] & /*isEnabled*/
      65536 && i !== (i = !/*isEnabled*/
      e[16]) && (r.disabled = i), m[0] & /*$textVariable*/
      32 && r.value !== /*$textVariable*/
      e[5] && (r.value = /*$textVariable*/
      e[5]), /*showDropdown*/
      e[7] && /*suggestions*/
      e[4].length > 0 ? _ ? _.p(e, m) : (_ = tf(e), _.c(), _.m(a.parentNode, a)) : _ && (_.d(1), _ = null);
    },
    d(h) {
      h && (J(r), J(s), J(a)), e[86](null), _ && _.d(h), l = !1, Rr(u);
    }
  };
}
function ok(e) {
  let r, t, n, o;
  const i = [rk, tk], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(e)) && (t = s[r] = i[r](e)), {
    c() {
      t && t.c(), n = or();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (t && (pr(), ne(s[c], 1, 1, () => {
        s[c] = null;
      }), gr()), ~r ? (t = s[r], t ? t.p(l, u) : (t = s[r] = i[r](l), t.c()), W(t, 1), t.m(n.parentNode, n)) : t = null);
    },
    i(l) {
      o || (W(t), o = !0);
    },
    o(l) {
      ne(t), o = !1;
    },
    d(l) {
      l && J(n), ~r && s[r].d(l);
    }
  };
}
function ik(e) {
  return Array.isArray(e) ? e.filter((r) => typeof r == "object" && r !== null && typeof r.value == "string") : [];
}
function sk(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, B, z, oe, fe, T, Y, le, A, D, M, U, q, be, Ae, Ce, he, Fe, x, Je, Ye, Xe, ye, Ie, pe = v, me = () => (pe(), pe = E(U, (H) => t(64, Ie = H)), U), _e, ee = v, ce = () => (ee(), ee = E(a, (H) => t(5, _e = H)), a), te, we = v, Ue = () => (we(), we = E(oe, (H) => t(65, te = H)), oe), Ke, $ = v, Oe = () => ($(), $ = E(z, (H) => t(66, Ke = H)), z), Ne, ot = v, ct = () => (ot(), ot = E(B, (H) => t(67, Ne = H)), B), rt, kt = v, it = () => (kt(), kt = E(N, (H) => t(68, rt = H)), N), Mt, ft = v, Z = () => (ft(), ft = E(k, (H) => t(69, Mt = H)), k), de, lt = v, ze = () => (lt(), lt = E(w, (H) => t(70, de = H)), w), F, Et = v, ut = () => (Et(), Et = E(p, (H) => t(71, F = H)), p), Vt, It = v, nt = () => (It(), It = E(m, (H) => t(72, Vt = H)), m), Q, At = v, Pt = () => (At(), At = E(h, (H) => t(73, Q = H)), h), $t, Zt = v, Ee = () => (Zt(), Zt = E(_, (H) => t(74, $t = H)), _), He, ht = v, Te = () => (ht(), ht = E(f, (H) => t(75, He = H)), f), xe, Le, Ft = v, Be = () => (Ft(), Ft = E(u, (H) => t(77, Le = H)), u), bt, Ut = v, Tt = () => (Ut(), Ut = E(l, (H) => t(78, bt = H)), l), ir, De = v, jt = () => (De(), De = E(M, (H) => t(79, ir = H)), M), sr, rr = v, nr = () => (rr(), rr = E(fe, (H) => t(80, sr = H)), fe), fr, wr = v, Nt = () => (wr(), wr = E(D, (H) => t(81, fr = H)), D), br, Rt = v, mt = () => (Rt(), Rt = E(A, (H) => t(82, br = H)), A), er, se = v, kr = () => (se(), se = E(le, (H) => t(83, er = H)), le), vr, Ct = v, Dr = () => (Ct(), Ct = E(Y, (H) => t(84, vr = H)), Y), Br, ar = v, at = () => (ar(), ar = E(T, (H) => t(85, Br = H)), T), St, Gt = v, Qt = () => (Gt(), Gt = E(c, (H) => t(39, St = H)), c);
  e.$$.on_destroy.push(() => pe()), e.$$.on_destroy.push(() => ee()), e.$$.on_destroy.push(() => we()), e.$$.on_destroy.push(() => $()), e.$$.on_destroy.push(() => ot()), e.$$.on_destroy.push(() => kt()), e.$$.on_destroy.push(() => ft()), e.$$.on_destroy.push(() => lt()), e.$$.on_destroy.push(() => Et()), e.$$.on_destroy.push(() => It()), e.$$.on_destroy.push(() => At()), e.$$.on_destroy.push(() => Zt()), e.$$.on_destroy.push(() => ht()), e.$$.on_destroy.push(() => Ft()), e.$$.on_destroy.push(() => Ut()), e.$$.on_destroy.push(() => De()), e.$$.on_destroy.push(() => rr()), e.$$.on_destroy.push(() => wr()), e.$$.on_destroy.push(() => Rt()), e.$$.on_destroy.push(() => se()), e.$$.on_destroy.push(() => Ct()), e.$$.on_destroy.push(() => ar()), e.$$.on_destroy.push(() => Gt());
  let { componentContext: $e } = r, { layoutParams: pt = void 0 } = r;
  const ue = Tr(Xr), vt = ue.direction;
  mn(e, vt, (H) => t(76, xe = H));
  let tr, Ht, yr, j = !1, ie = !1, d = -1, L = "below", je = null, We = "", ke = "rgba(0,0,0,.45)", P = 12, zt, Lt = "", Ge = "", st, Jt = "", Er = "#000", lr = "#000", Ir = "";
  function yn() {
    t(47, je = null), t(49, ke = "rgba(0,0,0,.45)"), t(50, P = 12), t(51, zt = void 0), t(52, Lt = ""), t(53, Ge = ""), t(54, st = void 0), t(55, Jt = ""), t(56, Er = "#000"), t(57, lr = "#000"), t(10, Ir = ""), t(7, ie = !1), t(8, d = -1);
  }
  function Se() {
    if (!Ht) return;
    const H = Ht.getBoundingClientRect(), Xt = window.innerHeight - H.bottom, dt = H.top;
    t(9, L = Xt >= 200 || Xt >= dt ? "below" : "above");
  }
  function qr(H) {
    const dt = H.target.value;
    if (a.setValue(dt), t(8, d = -1), dt.length >= q) {
      Se();
      const jr = $e.json.text_change_actions;
      jr && jr.length && $e.execAnyActions(jr);
    }
  }
  function Ur() {
    (_e || "").length >= q && Je.length > 0 && (Se(), t(7, ie = !0));
  }
  function an() {
    Ce && setTimeout(
      () => {
        t(7, ie = !1), t(8, d = -1);
      },
      200
    );
  }
  function y(H) {
    const Xt = H.text || H.value;
    if (a.setValue(Xt), s) {
      const jr = $e.getVariable(s, "string") || ue.awaitGlobalVariable(s, "string", "");
      jr && jr.setValue(H.value);
    }
    Ae && t(7, ie = !1), t(8, d = -1);
    const dt = $e.json.selection_actions;
    dt && dt.length && $e.execAnyActions(dt);
  }
  function C(H) {
    !ie || Je.length === 0 || (H.key === "ArrowDown" ? (H.preventDefault(), t(8, d = (d + 1) % Je.length), S()) : H.key === "ArrowUp" ? (H.preventDefault(), t(8, d = d <= 0 ? Je.length - 1 : d - 1), S()) : H.key === "Enter" && d >= 0 ? (H.preventDefault(), y(Je[d])) : H.key === "Escape" && (t(7, ie = !1), t(8, d = -1)));
  }
  function S() {
    An().then(() => {
      if (yr && d >= 0) {
        const H = yr.children;
        H[d] && H[d].scrollIntoView({ block: "nearest" });
      }
    });
  }
  ln(() => {
    tr && (ue.unregisterFocusable(tr), t(46, tr = void 0));
  });
  function ae(H) {
    Fr[H ? "unshift" : "push"](() => {
      Ht = H, t(2, Ht);
    });
  }
  const R = (H, Xt) => {
    H(Xt), Ur();
  }, tt = (H, Xt) => {
    H(Xt), an();
  }, Me = (H) => y(H), xt = (H) => {
    t(8, d = H);
  };
  function Dt(H) {
    Fr[H ? "unshift" : "push"](() => {
      yr = H, t(6, yr);
    });
  }
  return e.$$set = (H) => {
    "componentContext" in H && t(0, $e = H.componentContext), "layoutParams" in H && t(1, pt = H.layoutParams);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*componentContext*/
    1 && t(63, n = $e.origJson), e.$$.dirty[2] & /*origJson*/
    2 && n && yn(), e.$$.dirty[0] & /*componentContext*/
    1 && t(61, o = $e.json.text_variable), e.$$.dirty[0] & /*componentContext*/
    1 && t(60, i = $e.json.suggestions_variable), e.$$.dirty[0] & /*componentContext*/
    1 && (s = $e.json.value_variable), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*textVarName*/
    1073741824 && ce(t(14, a = o && ($e.getVariable(o, "string") || ue.awaitGlobalVariable(o, "string", "")) || Yn("temp", "string", ""))), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[1] & /*suggestionsVarName*/
    536870912 && Tt(t(38, l = i && ($e.getVariable(i, "array") || ue.awaitGlobalVariable(i, "array", [])) || Yn("temp", "array", []))), e.$$.dirty[0] & /*componentContext*/
    1 && Be(t(37, u = $e.getDerivedFromVars($e.json.paddings))), e.$$.dirty[0] & /*componentContext*/
    1 && Qt(t(36, c = $e.getDerivedFromVars($e.json.hint_text))), e.$$.dirty[0] & /*componentContext*/
    1 && Te(t(35, f = $e.getDerivedFromVars($e.json.hint_color))), e.$$.dirty[0] & /*componentContext*/
    1 && Ee(t(34, _ = $e.getDerivedFromVars($e.json.font_size))), e.$$.dirty[0] & /*componentContext*/
    1 && Pt(t(33, h = $e.getDerivedFromVars($e.json.font_weight))), e.$$.dirty[0] & /*componentContext*/
    1 && nt(t(32, m = $e.getDerivedFromVars($e.json.font_weight_value))), e.$$.dirty[0] & /*componentContext*/
    1 && ut(t(31, p = $e.getDerivedFromVars($e.json.font_family))), e.$$.dirty[0] & /*componentContext*/
    1 && ze(t(30, w = $e.getDerivedFromVars($e.json.font_variation_settings, void 0, !0, 0))), e.$$.dirty[0] & /*componentContext*/
    1 && Z(t(29, k = $e.getDerivedFromVars($e.json.line_height))), e.$$.dirty[0] & /*componentContext*/
    1 && it(t(28, N = $e.getDerivedFromVars($e.json.letter_spacing))), e.$$.dirty[0] & /*componentContext*/
    1 && ct(t(27, B = $e.getDerivedFromVars($e.json.text_color))), e.$$.dirty[0] & /*componentContext*/
    1 && Oe(t(26, z = $e.getDerivedFromVars($e.json.suggestion_text_color))), e.$$.dirty[0] & /*componentContext*/
    1 && Ue(t(25, oe = $e.getDerivedFromVars($e.json.accessibility))), e.$$.dirty[0] & /*componentContext*/
    1 && nr(t(24, fe = $e.getDerivedFromVars($e.json.is_enabled))), e.$$.dirty[0] & /*componentContext*/
    1 && at(t(23, T = $e.getDerivedFromVars($e.json.min_query_length))), e.$$.dirty[0] & /*componentContext*/
    1 && Dr(t(22, Y = $e.getDerivedFromVars($e.json.max_visible_suggestions))), e.$$.dirty[0] & /*componentContext*/
    1 && kr(t(21, le = $e.getDerivedFromVars($e.json.dismiss_on_selection))), e.$$.dirty[0] & /*componentContext*/
    1 && mt(t(20, A = $e.getDerivedFromVars($e.json.dismiss_on_blur))), e.$$.dirty[0] & /*componentContext*/
    1 && Nt(t(19, D = $e.getDerivedFromVars($e.json.dismiss_on_empty))), e.$$.dirty[0] & /*componentContext*/
    1 && jt(t(18, M = $e.getDerivedFromVars($e.json.keyboard_type))), e.$$.dirty[0] & /*componentContext*/
    1 && me(t(17, U = $e.getDerivedFromVars($e.json.highlight_color))), e.$$.dirty[2] & /*$jsonMinQueryLength*/
    8388608 && t(59, q = Math.max(1, Number(Br) || 1)), e.$$.dirty[2] & /*$jsonMaxVisibleSuggestions*/
    4194304 && t(58, be = Math.max(1, Number(vr) || 5)), e.$$.dirty[2] & /*$jsonDismissOnSelection*/
    2097152 && (Ae = Zr(er, !0)), e.$$.dirty[2] & /*$jsonDismissOnBlur*/
    1048576 && (Ce = Zr(br, !0)), e.$$.dirty[2] & /*$jsonDismissOnEmpty*/
    524288 && t(62, he = Zr(fr, !0)), e.$$.dirty[2] & /*$jsonIsEnabled*/
    262144 && t(16, Fe = Zr(sr, !0)), e.$$.dirty[2] & /*$jsonKeyboardType*/
    131072 && t(15, x = ir === "password" ? "password" : ir === "email" ? "email" : ir === "uri" ? "url" : ir === "phone" ? "tel" : ir === "number" ? "number" : "text"), e.$$.dirty[2] & /*$suggestionsVariable*/
    65536 && t(4, Je = ik(bt)), e.$$.dirty[0] & /*$textVariable, suggestions*/
    48 | e.$$.dirty[1] & /*minQueryLength*/
    268435456 | e.$$.dirty[2] & /*dismissOnEmpty*/
    1) {
      const H = _e || "";
      H.length < q || he && Je.length === 0 ? t(7, ie = !1) : Je.length > 0 && H.length >= q && t(7, ie = !0);
    }
    if (e.$$.dirty[0] & /*componentContext, hasError*/
    9 | e.$$.dirty[1] & /*textVarName, suggestionsVarName*/
    1610612736) {
      let H = !1;
      o || (H = !0, $e.logError(X(new Error('Missing "text_variable" in "autocomplete"')))), i || (H = !0, $e.logError(X(new Error('Missing "suggestions_variable" in "autocomplete"')))), j !== H && t(3, j = H);
    }
    if (e.$$.dirty[1] & /*fontSize*/
    524288 | e.$$.dirty[2] & /*$jsonFontSize*/
    4096 && t(50, P = Rn($t, P)), e.$$.dirty[1] & /*selfPadding, fontSize*/
    589824 | e.$$.dirty[2] & /*$jsonPaddings, $direction*/
    49152 && (t(47, je = ni(Le || void 0, je)), t(48, We = je ? so(
      {
        top: (Number(je.top) || 0) / P * 10,
        right: (Number(xe === "ltr" ? je.end : je.start) || Number(je.right) || 0) / P * 10,
        bottom: (Number(je.bottom) || 0) / P * 10,
        left: (Number(xe === "ltr" ? je.start : je.end) || Number(je.left) || 0) / P * 10
      },
      xe
    ) : "")), e.$$.dirty[1] & /*hintColor*/
    262144 | e.$$.dirty[2] & /*$jsonHintColor*/
    8192 && t(49, ke = dr(He, 1, ke)), e.$$.dirty[1] & /*fontWeight*/
    1048576 | e.$$.dirty[2] & /*$jsonFontWeight, $jsonFontWeightValue, $jsonFontFamily*/
    3584 && (t(51, zt = ii(Q, Vt, zt)), F && typeof F == "string" ? t(52, Lt = ue.typefaceProvider(F, { fontWeight: zt || 400 })) : t(52, Lt = "")), e.$$.dirty[1] & /*fontVariationSettings*/
    4194304 | e.$$.dirty[2] & /*$jsonFontVariationSettings*/
    256) {
      const H = wi(de);
      H !== Ge && t(53, Ge = H);
    }
    if (e.$$.dirty[1] & /*fontSize*/
    524288 | e.$$.dirty[2] & /*$jsonLineHeight*/
    128) {
      const H = Mt;
      Tn(H) && t(54, st = H / P);
    }
    e.$$.dirty[1] & /*fontSize*/
    524288 | e.$$.dirty[2] & /*$jsonLetterSpacing*/
    64 && fs(rt) && t(55, Jt = ge(rt / P * 10)), e.$$.dirty[1] & /*textColor*/
    33554432 | e.$$.dirty[2] & /*$jsonTextColor*/
    32 && t(56, Er = dr(Ne, 1, Er)), e.$$.dirty[1] & /*suggestionColor*/
    67108864 | e.$$.dirty[2] & /*$jsonSuggestionTextColor*/
    16 && t(57, lr = dr(Ke, 1, lr)), e.$$.dirty[0] & /*componentContext*/
    1 | e.$$.dirty[2] & /*$jsonAccessibility*/
    8 && (te != null && te.description ? t(10, Ir = Yo(te)) : $e.logError(X(new Error('Missing accessibility "description" for autocomplete'), { level: "warn" }))), e.$$.dirty[1] & /*hintColor, fontWeight, fontFamily, fontVariationSettings, textColor*/
    41156608 | e.$$.dirty[2] & /*$jsonHighlightColor*/
    4 && t(13, Ye = {
      "--divkit-input-hint-color": ke,
      "--divkit-input-highlight-color": Ie || void 0,
      "font-weight": zt,
      "font-family": Lt,
      "font-variation-settings": Ge,
      color: Er
    }), e.$$.dirty[1] & /*padding, fontSize, lineHeight, letterSpacing*/
    25821184 && t(12, Xe = {
      padding: We,
      "font-size": ge(P),
      "line-height": st,
      "letter-spacing": Jt
    }), e.$$.dirty[1] & /*maxVisibleSuggestions, suggestionColor*/
    201326592 && t(11, ye = {
      "max-height": be * 44 + "px",
      color: lr
    }), e.$$.dirty[0] & /*componentContext, inputEl*/
    5 | e.$$.dirty[1] & /*prevId*/
    32768 && $e.json && Ht && (tr && (ue.unregisterFocusable(tr), t(46, tr = void 0)), $e.id && !$e.fakeElement && (t(46, tr = $e.id), ue.registerFocusable(tr, {
      focus() {
        Ht && Ht.focus();
      }
    })));
  }, [
    $e,
    pt,
    Ht,
    j,
    Je,
    _e,
    yr,
    ie,
    d,
    L,
    Ir,
    ye,
    Xe,
    Ye,
    a,
    x,
    Fe,
    U,
    M,
    D,
    A,
    le,
    Y,
    T,
    fe,
    oe,
    z,
    B,
    N,
    k,
    w,
    p,
    m,
    h,
    _,
    f,
    c,
    u,
    l,
    St,
    vt,
    qr,
    Ur,
    an,
    y,
    C,
    tr,
    je,
    We,
    ke,
    P,
    zt,
    Lt,
    Ge,
    st,
    Jt,
    Er,
    lr,
    be,
    q,
    i,
    o,
    he,
    n,
    Ie,
    te,
    Ke,
    Ne,
    rt,
    Mt,
    de,
    F,
    Vt,
    Q,
    $t,
    He,
    xe,
    Le,
    bt,
    ir,
    sr,
    fr,
    br,
    er,
    vr,
    Br,
    ae,
    R,
    tt,
    Me,
    xt,
    Dt
  ];
}
class lk extends Or {
  constructor(r) {
    super(), Lr(this, r, sk, ok, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const xd = {
  text: hg,
  container: $g,
  separator: lh,
  image: Su,
  gif: Su,
  grid: Nh,
  gallery: im,
  tabs: Pm,
  state: o0,
  pager: S0,
  indicator: H0,
  slider: A1,
  input: $1,
  select: ub,
  video: Eb,
  switch: Lb,
  checkbox: Xb,
  radio: py,
  progress: Ey,
  table: Qy,
  counter: aw,
  webview: mw,
  google_map: Sw,
  custom: Mw,
  breadcrumb: qw,
  autocomplete: lk
};
function of(e) {
  let r, t, n;
  var o = (
    /*component*/
    e[2]
  );
  function i(s, a) {
    return {
      props: {
        componentContext: (
          /*componentContext*/
          s[0]
        ),
        layoutParams: (
          /*layoutParams*/
          s[1]
        )
      }
    };
  }
  return o && (r = Pa(o, i(e))), {
    c() {
      r && Wt(r.$$.fragment), t = or();
    },
    m(s, a) {
      r && Ot(r, s, a), K(s, t, a), n = !0;
    },
    p(s, a) {
      if (a & /*component*/
      4 && o !== (o = /*component*/
      s[2])) {
        if (r) {
          pr();
          const l = r;
          ne(l.$$.fragment, 1, 0, () => {
            Bt(l, 1);
          }), gr();
        }
        o ? (r = Pa(o, i(s)), Wt(r.$$.fragment), W(r.$$.fragment, 1), Ot(r, t.parentNode, t)) : r = null;
      } else if (o) {
        const l = {};
        a & /*componentContext*/
        1 && (l.componentContext = /*componentContext*/
        s[0]), a & /*layoutParams*/
        2 && (l.layoutParams = /*layoutParams*/
        s[1]), r.$set(l);
      }
    },
    i(s) {
      n || (r && W(r.$$.fragment, s), n = !0);
    },
    o(s) {
      r && ne(r.$$.fragment, s), n = !1;
    },
    d(s) {
      s && J(t), r && Bt(r, s);
    }
  };
}
function ak(e) {
  let r, t, n = (
    /*component*/
    e[2] && of(e)
  );
  return {
    c() {
      n && n.c(), r = or();
    },
    m(o, i) {
      n && n.m(o, i), K(o, r, i), t = !0;
    },
    p(o, [i]) {
      /*component*/
      o[2] ? n ? (n.p(o, i), i & /*component*/
      4 && W(n, 1)) : (n = of(o), n.c(), W(n, 1), n.m(r.parentNode, r)) : n && (pr(), ne(n, 1, 1, () => {
        n = null;
      }), gr());
    },
    i(o) {
      t || (W(n), t = !0);
    },
    o(o) {
      ne(n), t = !1;
    },
    d(o) {
      o && J(r), n && n.d(o);
    }
  };
}
function uk(e, r, t) {
  let { componentContext: n } = r, { layoutParams: o = void 0 } = r;
  const i = Tr(Xr);
  let s;
  return e.$$set = (a) => {
    "componentContext" in a && t(0, n = a.componentContext), "layoutParams" in a && t(1, o = a.layoutParams);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*componentContext, component*/
    5) {
      const a = n.json;
      if (t(2, s = (a == null ? void 0 : a.type) && xd[a.type] || void 0), !s) {
        let l;
        a != null && a.type && i.hasTemplate(a.type) ? l = "Recursive template" : l = "Unknown component", n.logError(X(new Error(l), {
          additional: {
            component: (a == null ? void 0 : a.type) || "<missing>"
          }
        }));
      }
    }
  }, [n, o, s];
}
class xn extends Or {
  constructor(r) {
    super(), Lr(this, r, uk, ak, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const ck = {
  "root-svg-filters": "appkit-root-svg-filters"
};
function sf(e, r, t) {
  const n = e.slice();
  n[1] = r[t];
  const o = (
    /*filterKey*/
    n[1].split(":")
  );
  return n[2] = o[0], n[3] = o[1], n;
}
function lf(e) {
  let r, t, n = ur([...Object.keys(
    /*svgFiltersMap*/
    e[0]
  )]), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = af(sf(e, n, i));
  return {
    c() {
      r = rn("svg"), t = rn("defs");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(r, "class", ck["root-svg-filters"]), g(r, "aria-hidden", "true");
    },
    m(i, s) {
      K(i, r, s), wt(r, t);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(t, null);
    },
    p(i, s) {
      if (s & /*svgFiltersMap, Object*/
      1) {
        n = ur([...Object.keys(
          /*svgFiltersMap*/
          i[0]
        )]);
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = sf(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = af(l), o[a].c(), o[a].m(t, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
    },
    d(i) {
      i && J(r), un(o, i);
    }
  };
}
function fk(e) {
  let r, t;
  return {
    c() {
      r = rn("feBlend"), g(r, "in2", "SourceGraphic"), g(r, "mode", t = /*filterMode*/
      e[3]);
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o & /*svgFiltersMap*/
      1 && t !== (t = /*filterMode*/
      n[3]) && g(r, "mode", t);
    },
    d(n) {
      n && J(r);
    }
  };
}
function dk(e) {
  let r;
  return {
    c() {
      r = rn("feComposite"), g(r, "in2", "SourceGraphic"), g(r, "operator", "arithmetic"), g(r, "k1", "1"), g(r, "k2", "0"), g(r, "k3", "0"), g(r, "k4", "0");
    },
    m(t, n) {
      K(t, r, n);
    },
    p: v,
    d(t) {
      t && J(r);
    }
  };
}
function _k(e) {
  let r, t;
  return {
    c() {
      r = rn("feComposite"), g(r, "in2", "SourceGraphic"), g(r, "operator", t = /*filterMode*/
      e[3].split("_")[1]);
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o & /*svgFiltersMap*/
      1 && t !== (t = /*filterMode*/
      n[3].split("_")[1]) && g(r, "operator", t);
    },
    d(n) {
      n && J(r);
    }
  };
}
function af(e) {
  let r, t, n, o;
  function i(l, u) {
    return (
      /*filterMode*/
      l[3] === "source_in" || /*filterMode*/
      l[3] === "source_atop" ? _k : (
        /*filterMode*/
        l[3] === "multiply" ? dk : fk
      )
    );
  }
  let s = i(e), a = s(e);
  return {
    c() {
      r = rn("filter"), t = rn("feFlood"), a.c(), g(t, "flood-color", n = /*filterColor*/
      e[2]), g(r, "id", o = /*svgFiltersMap*/
      e[0][
        /*filterKey*/
        e[1]
      ]);
    },
    m(l, u) {
      K(l, r, u), wt(r, t), a.m(r, null);
    },
    p(l, u) {
      u & /*svgFiltersMap*/
      1 && n !== (n = /*filterColor*/
      l[2]) && g(t, "flood-color", n), s === (s = i(l)) && a ? a.p(l, u) : (a.d(1), a = s(l), a && (a.c(), a.m(r, null))), u & /*svgFiltersMap*/
      1 && o !== (o = /*svgFiltersMap*/
      l[0][
        /*filterKey*/
        l[1]
      ]) && g(r, "id", o);
    },
    d(l) {
      l && J(r), a.d();
    }
  };
}
function pk(e) {
  let r = Object.keys(
    /*svgFiltersMap*/
    e[0]
  ).length, t, n = r && lf(e);
  return {
    c() {
      n && n.c(), t = or();
    },
    m(o, i) {
      n && n.m(o, i), K(o, t, i);
    },
    p(o, [i]) {
      i & /*svgFiltersMap*/
      1 && (r = Object.keys(
        /*svgFiltersMap*/
        o[0]
      ).length), r ? n ? n.p(o, i) : (n = lf(o), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: v,
    o: v,
    d(o) {
      o && J(t), n && n.d(o);
    }
  };
}
function gk(e, r, t) {
  let { svgFiltersMap: n } = r;
  return e.$$set = (o) => {
    "svgFiltersMap" in o && t(0, n = o.svgFiltersMap);
  }, [n];
}
class hk extends Or {
  constructor(r) {
    super(), Lr(this, r, gk, pk, Sr, { svgFiltersMap: 0 });
  }
}
function mk(e, r, t, n) {
  const o = t[e.type];
  if (!o)
    return n(X(new Error("No such template"), {
      additional: {
        template: e.type
      }
    })), {
      json: e,
      templateContext: r
    };
  let i;
  const s = {};
  for (i in r)
    r.hasOwnProperty(i) && (s[i] = r[i]);
  for (i in e)
    i === "type" || i === "__proto__" || e.hasOwnProperty(i) && (s[i] = e[i]);
  function a(u, c) {
    const f = Object.keys(c).filter((m) => m !== "__proto__"), _ = f.filter((m) => m.charAt(0) !== "$"), h = f.filter((m) => m.charAt(0) === "$");
    return _.forEach((m) => {
      const p = c[m];
      typeof p == "object" && p !== null ? (u[m] = Array.isArray(p) ? [] : {}, a(u[m], p)) : u[m] = p;
    }), h.forEach((m) => {
      const p = c[m], w = s[p];
      if (w !== void 0) {
        const k = m.substring(1);
        u[k] = w;
      }
    }), u;
  }
  const l = a({}, o);
  for (i in e)
    i === "type" || i === "__proto__" || e.hasOwnProperty(i) && (l[i] = e[i]);
  return {
    json: l,
    templateContext: s
  };
}
const Ss = /* @__PURE__ */ new Map(), Xl = /* @__PURE__ */ new Map(), Vs = /* @__PURE__ */ new Map(), Zl = /* @__PURE__ */ new Map();
function G(e, r, t) {
  const n = {
    args: r,
    cb: t
  }, o = Ss.get(e) || [];
  Ss.has(e) || Ss.set(e, o), o.push(n);
  const i = e + ":" + r.map((s) => typeof s == "object" ? s.type : s).join("#");
  Xl.set(i, n);
}
function Wr(e, r, t) {
  const n = {
    args: r,
    cb: t
  }, o = Vs.get(e) || [];
  Vs.has(e) || Vs.set(e, o), o.push(n);
  const i = e + ":" + r.map((s) => typeof s == "object" ? s.type : s).join("#");
  Zl.set(i, n);
}
function bk(e, r, t) {
  const n = e.args.length;
  let o = e.args.length, i = 0;
  const s = e.args[e.args.length - 1];
  if (typeof s == "object" && s.isVararg && (o = 1 / 0), r.length < n)
    return {
      type: "few",
      expected: n,
      found: r.length,
      def: e,
      hasOverloads: t
    };
  if (r.length > o)
    return {
      type: "many",
      expected: o,
      found: r.length,
      def: e,
      hasOverloads: t
    };
  for (let a = 0; a < r.length; ++a) {
    let l = a >= e.args.length ? e.args[e.args.length - 1] : e.args[a];
    if (typeof l != "object" && (l = {
      type: l
    }), l.type === yt && r[a].type === Re) {
      ++i;
      continue;
    }
    if (l.type !== r[a].type)
      return {
        type: "mismatch",
        expected: l.type,
        found: r[a].type,
        def: e,
        hasOverloads: t
      };
  }
  return {
    type: "match",
    conversions: i
  };
}
function $d(e, r) {
  if (!e)
    return {
      type: "missing"
    };
  let t = null, n = null;
  for (let o = 0; o < e.length; ++o) {
    const i = bk(e[o], r, e.length > 1);
    if (i.type === "match") {
      (!n || n.conversions > i.conversions) && (n = {
        func: e[o],
        conversions: i.conversions
      });
      continue;
    }
    t || (t = i);
  }
  if (!n) {
    if (t)
      return t;
    throw new Error("Missing function");
  }
  return n;
}
function Ql(e, r, t) {
  return $d(e.get(r), t);
}
function e_(e, r) {
  return r.map((t, n) => {
    let o = n >= e.args.length ? e.args[e.args.length - 1] : e.args[n];
    return typeof o != "object" && (o = {
      type: o
    }), o.type === yt && t.type === Re ? Jl(t) : t;
  });
}
function uf(e, r) {
  return e + ":" + r.args.map((t) => typeof t == "string" ? t : t.type).join("#");
}
function Un(e, r) {
  return {
    type: qe,
    value: Ei(r, !0)
  };
}
function cf(e, r) {
  const t = Number(r.value);
  if (Number.isNaN(t) || !Number.isFinite(t))
    throw new Error("Unable to convert value to Number.");
  if (r.value === "")
    throw new Error("Unable to convert value to Number.");
  return {
    type: yt,
    value: t
  };
}
function yk(e, r) {
  if (r.value > as || r.value < us)
    throw new Error("Unable to convert value to Integer.");
  const t = r.value - r.value % 1;
  return {
    type: Re,
    value: gn(t)
  };
}
function wk(e, r) {
  let t;
  try {
    t = gn(r.value);
  } catch {
    throw new Error("Unable to convert value to Integer.");
  }
  return {
    type: Re,
    value: t
  };
}
function kk(e, r) {
  return {
    type: Re,
    value: gn(r.value ? 1 : 0)
  };
}
function vk(e, r) {
  const t = Number(r.value);
  if (t !== 1 && t !== 0)
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: Kr,
    value: t
  };
}
function jk(e, r) {
  if (r.value !== "true" && r.value !== "false")
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: Kr,
    value: r.value === "true" ? 1 : 0
  };
}
function Ck(e, r) {
  return {
    type: _n,
    value: si(r.value)
  };
}
function Ek(e, r) {
  return ho(r.value), {
    type: to,
    value: r.value
  };
}
function Ak(e, r) {
  try {
    return {
      type: qe,
      value: encodeURIComponent(r.value)
    };
  } catch {
    throw new Error("Unable to encodeUri string.");
  }
}
function Sk(e, r) {
  try {
    return {
      type: qe,
      value: decodeURIComponent(r.value)
    };
  } catch {
    throw new Error("Unable to decodeUri string.");
  }
}
function va(e, r, t, n) {
  const o = e.variables.get(r.value);
  let i;
  return o && o.getType() === n ? (i = o.getValue(), e.storeUsedVars || (e.storeUsedVars = /* @__PURE__ */ new Set()), e.storeUsedVars.add(o)) : i = t.value, n === "color" ? i = si(i) : n === "url" && ho(i), {
    type: n,
    // value is synced with type by params
    value: i
  };
}
function ms(e, r, t) {
  return va(e, r, t, t.type);
}
function ff(e, r, t) {
  return va(e, r, t, "color");
}
function df(e, r, t) {
  return va(e, r, t, "url");
}
function t_(e, r) {
  for (let t = 0; t < r.length; ++t) {
    const n = e.charAt(t), o = r.charAt(t);
    if (n !== o && o)
      return o;
  }
  return "";
}
const xs = 1234567890;
function _f(e) {
  const r = new Intl.NumberFormat(e, {
    maximumFractionDigits: 0
  }), t = new Intl.NumberFormat(e, {
    minimumFractionDigits: 1
  }), n = r.format(xs), o = t.format(xs);
  return t_(n, o);
}
function Vk(e) {
  const r = new Intl.NumberFormat(e, {
    useGrouping: !1
  }), t = new Intl.NumberFormat(e, {
    useGrouping: !0
  }), n = r.format(xs), o = t.format(xs);
  return t_(n, o);
}
function $o(e, r, t, n) {
  const o = t.value, i = o.replace(/,/g, "");
  if (!/^((#+)|(#*0+))(\.0*#*)?$/.test(i) && !/^#*0*\.((0*#*)|(#+))$/.test(i) || /,.*,/.test(o) || o.indexOf(",") > o.indexOf(".") && o.indexOf(".") > -1)
    throw new Error("Incorrect format pattern.");
  const s = o.split("."), a = s[0], l = s[1] || "", u = o.replace(/[^#0.]/g, "").split("."), c = u[0], f = u[1] || "", _ = a.indexOf(","), h = _ > -1 ? a.length - _ - 1 : -1;
  if (_ > -1 && h < 1 || l.indexOf(",") > -1)
    throw new Error("Incorrect format pattern.");
  try {
    let m = 0;
    for (; c[c.length - 1 - m] === "0"; )
      ++m;
    let p = 0;
    for (; f[p] === "0"; )
      ++p;
    let w = p;
    for (; f[w] === "#"; )
      ++w;
    let N = new Intl.NumberFormat((n == null ? void 0 : n.value) || void 0, {
      useGrouping: !1,
      minimumIntegerDigits: Math.min(Math.max(m, 1), 21),
      minimumFractionDigits: Math.min(Math.max(p, 0), 100),
      maximumFractionDigits: Math.min(Math.max(w, p, 0), 100),
      roundingMode: "halfEven"
    }).format(r.value);
    if (_ > -1 && h > 0) {
      const B = Vk(n == null ? void 0 : n.value), z = _f(n == null ? void 0 : n.value);
      if (B && z) {
        const oe = N.split(z), fe = oe[0];
        let T = "";
        for (let Y = fe.length - 1; Y >= 0; --Y)
          T = fe[Y] + T, Y > 0 && (fe.length - Y) % h === 0 && (T = B + T);
        N = T + (oe.length > 1 ? z + oe[1] : "");
      }
    }
    if (p === 0 && w === 0 && o.endsWith(".")) {
      const B = _f(n == null ? void 0 : n.value);
      B && (N += B);
    }
    return {
      type: qe,
      value: N
    };
  } catch (m) {
    throw new Error("Incorrect or unsupported number format." + m + " " + (n == null ? void 0 : n.value) || void 0);
  }
}
function Fk() {
  G("toString", [Re], Un), G("toString", [yt], Un), G("toString", [Kr], Un), G("toString", [_n], Un), G("toString", [to], Un), G("toString", [qe], Un), G("toString", [mr], Un), G("toString", [hr], Un), G("toNumber", [Re], cf), G("toNumber", [qe], cf), G("toInteger", [yt], yk), G("toInteger", [qe], wk), G("toInteger", [Kr], kk), G("toBoolean", [Re], vk), G("toBoolean", [qe], jk), G("toColor", [qe], Ck), G("toUrl", [qe], Ek), G("encodeUri", [qe], Ak), G("decodeUri", [qe], Sk), G("getIntegerValue", [qe, Re], ms), G("getNumberValue", [qe, yt], ms), G("getBooleanValue", [qe, Kr], ms), G("getStringValue", [qe, qe], ms), G("getColorValue", [qe, _n], ff), G("getColorValue", [qe, qe], ff), G("getUrlValue", [qe, to], df), G("getUrlValue", [qe, qe], df), Wr("toString", [Re], Un), Wr("toString", [yt], Un), Wr("toString", [Kr], Un), Wr("toString", [_n], Un), Wr("toString", [to], Un), Wr("toString", [qe], Un), Wr("toString", [mr], Un), Wr("toString", [hr], Un), G("decimalFormat", [Re, qe], $o), G("decimalFormat", [yt, qe], $o), G("decimalFormat", [Re, qe, qe], $o), G("decimalFormat", [yt, qe, qe], $o), Wr("decimalFormat", [Re, qe], $o), Wr("decimalFormat", [yt, qe], $o), Wr("decimalFormat", [Re, qe, qe], $o), Wr("decimalFormat", [yt, qe, qe], $o);
}
function Gn(e, r) {
  return !e || !r ? e : e.padStart(r, "0");
}
const xl = {
  G(e, r) {
    let t;
    return e < 4 ? t = "short" : e === 5 ? t = "narrow" : t = "long", r({
      era: t
    }, "era");
  },
  d(e, r) {
    return Gn(r({
      day: "numeric"
    }, "day"), e > 1 ? e : 0);
  },
  D(e, r) {
    return Gn(r({}, "dayofyear"), e > 1 ? e : 0);
  },
  F(e, r) {
    return Gn(r({}, "dayofweekinmonth"), e > 1 ? e : 0);
  },
  M(e, r) {
    let t;
    return e === 1 ? t = "numeric" : e === 2 ? t = "2-digit" : e === 3 ? t = "short" : e === 5 ? t = "narrow" : t = "long", r({
      month: t,
      // to get a genitive case of month
      day: "numeric"
    }, "month");
  },
  y(e, r) {
    return Gn(r({
      year: e === 2 ? "2-digit" : "numeric"
    }, "year"), e > 2 ? e : void 0);
  },
  Y(e, r) {
    return Gn(r({
      year: e === 2 ? "2-digit" : "numeric"
    }, "weekyear"), e > 2 ? e : void 0);
  },
  u(e, r) {
    return Gn(r({
      year: "numeric"
    }, "extendedyear"), e > 1 ? e : void 0);
  },
  E(e, r) {
    let t;
    return e <= 3 ? t = "short" : e === 5 ? t = "narrow" : t = "long", r({
      weekday: t
    }, "weekday");
  },
  e(e, r) {
    return e > 2 ? xl.E(e, r) : Gn(r({}, "weekdaynumeric"), e > 1 ? e : void 0);
  },
  w(e, r) {
    return Gn(r({}, "week"), e > 1 ? e : void 0);
  },
  W(e, r) {
    return Gn(r({}, "weekofmonth"), e > 1 ? e : void 0);
  },
  H(e, r) {
    const t = r({
      hour: "numeric",
      hour12: !1,
      hourCycle: "h23"
    }, "hour");
    if (!t)
      return;
    const n = String(Number(t) % 24);
    return Gn(n, e > 1 ? e : void 0);
  },
  h(e, r) {
    return Gn(r({
      hour: "numeric",
      hour12: !0,
      hourCycle: "h12"
    }, "hour"), e > 1 ? e : void 0);
  },
  K(e, r) {
    const t = r({
      hour: "numeric",
      hour12: !0,
      hourCycle: "h11"
    }, "hour");
    if (!t)
      return;
    const n = String(Number(t) % 12);
    return Gn(n, e > 1 ? e : void 0);
  },
  k(e, r) {
    return Gn(r({
      hour: "numeric",
      hour12: !1,
      hourCycle: "h24"
    }, "hour"), e > 2 ? e : void 0);
  },
  a(e, r) {
    return r({
      hour: "numeric",
      hour12: !0,
      hourCycle: "h11",
      dayPeriod: void 0
    }, "dayPeriod");
  },
  m(e, r) {
    return Gn(r({
      minute: "numeric"
    }, "minute"), e > 1 ? e : void 0);
  },
  s(e, r) {
    return Gn(r({
      second: "numeric"
    }, "second"), e > 1 ? e : void 0);
  },
  S(e, r) {
    const t = r({
      fractionalSecondDigits: Math.min(3, e)
    }, "fractionalSecond");
    return t && e > 3 ? t.padEnd(e, "0") : t;
  },
  z(e, r) {
    return r({
      timeZoneName: e === 4 ? "long" : "short"
    }, "timeZoneName");
  },
  Z(e, r) {
    const t = -Number(r({}, "timezoneoffset")), n = Math.abs(t / 60), o = Math.floor(n) * 100 + (n - Math.floor(n)) * 60;
    return (t >= 0 ? "+" : "-") + Gn(String(o), 4);
  }
}, Dk = /(\w)\1*|''|'(''|[^'])+('|$)|./g, Ik = /^'([^]*?)'?$/, Tk = /''/g, Mk = /[a-zA-Z]/, ja = 1e3 * 60 * 60 * 24;
function Pk(e) {
  const r = e.match(Ik);
  return r ? r[1].replace(Tk, "'") : e;
}
function $l(e, r, t) {
  const n = e[r ? "getUTCDay" : "getDay"](), o = n < t ? t - n - 7 : t - n;
  return new Date(e.getTime() + ja * o);
}
function pf(e, r, t) {
  const n = new Date(e);
  return n[r ? "setUTCDate" : "setDate"](1), n[r ? "setUTCMonth" : "setMonth"](0), $l(n, r, t);
}
function gf(e, r) {
  return Math.round((e.getTime() - r.getTime()) / ja);
}
function hf(e, r, t) {
  let n = 0;
  const o = pf(e, r || !1, t), i = new Date(e);
  i[r ? "setUTCFullYear" : "setFullYear"](e[r ? "getUTCFullYear" : "getFullYear"]() + 1);
  const s = pf(i, r || !1, t), a = e.getTime() < o.getTime(), l = e.getTime() >= s.getTime();
  let u = e[r ? "getUTCFullYear" : "getFullYear"]();
  if (a) {
    --u, o[r ? "setUTCFullYear" : "setFullYear"](o[r ? "getUTCFullYear" : "getFullYear"]() - 1);
    const c = gf($l(e, r, t), o);
    n = Math.round(c / 7) + 1;
  } else if (l)
    ++u, n = 1;
  else {
    const c = gf($l(e, r, t), o);
    n = Math.round(c / 7) + 1;
  }
  return {
    week: n,
    year: u
  };
}
function Nk(e, r, {
  locale: t,
  isUTC: n,
  weekStartDay: o = 0
} = {}) {
  const i = (s, a) => {
    if (a === "week") {
      const { week: c } = hf(e, n || !1, o);
      return String(c);
    }
    if (a === "weekofmonth") {
      const c = e[n ? "getUTCDay" : "getDay"](), f = new Date(e);
      f[n ? "setUTCDate" : "setDate"](1);
      const _ = f[n ? "getUTCDay" : "getDay"](), h = e[n ? "getUTCDate" : "getDate"]();
      return String(Math.ceil(h / 7) + (c < _ ? 1 : 0));
    }
    if (a === "dayofweekinmonth") {
      const c = e[n ? "getUTCDate" : "getDate"]();
      return String(Math.ceil(c / 7));
    }
    if (a === "weekdaynumeric") {
      let c = e[n ? "getUTCDay" : "getDay"]();
      return c < o && (c += 7), String(c - o + 1);
    }
    if (a === "dayofyear") {
      const c = new Date(e);
      c[n ? "setUTCMonth" : "setMonth"](0), c[n ? "setUTCDate" : "setDate"](1), c[n ? "setUTCHours" : "setHours"](1), c[n ? "setUTCMinutes" : "setMinutes"](1), c[n ? "setUTCSeconds" : "setSeconds"](1);
      const f = Math.ceil((e.getTime() - c.getTime()) / ja);
      return String(f);
    }
    if (a === "weekyear") {
      let { year: c } = hf(e, n || !1, o);
      return c < 1 && (c = 1 - c), s.year === "2-digit" ? String(c % 100) : String(c);
    }
    if (a === "extendedyear") {
      const c = e[n ? "getUTCFullYear" : "getFullYear"]();
      return s.year === "2-digit" ? String(c % 100) : String(c);
    }
    if (a === "timezoneoffset")
      return n ? "0" : String(e.getTimezoneOffset());
    n && (s.timeZone = "UTC");
    const u = new Intl.DateTimeFormat(t, s).formatToParts(e);
    for (let c = 0; c < u.length; ++c)
      if (u[c].type === a)
        return u[c].value;
  };
  return (r.match(Dk) || []).map((s) => {
    if (s === "''")
      return "'";
    const a = s[0];
    if (a === "'")
      return Pk(s);
    if (xl[a])
      return xl[a](s.length, i);
    if (a.match(Mk))
      throw new Error(
        `Format string contains an unescaped latin alphabet character "${a}"`
      );
    return s;
  }).join("");
}
function zk(e) {
  const r = new Date(e);
  return r.setUTCMonth(r.getUTCMonth() + 1), r.setUTCDate(0), r.getUTCDate();
}
function Lk(e, r) {
  return {
    type: Nr,
    value: new Date(Number(r.value) * 1e3)
  };
}
function Ok(e, r) {
  const t = new Date(Number(r.value) * 1e3), n = t.getTimezoneOffset();
  return t.setMinutes(t.getMinutes() - n), {
    type: Nr,
    value: t
  };
}
function Bk() {
  return {
    type: Nr,
    value: /* @__PURE__ */ new Date()
  };
}
function Rk(e, r, t) {
  return {
    type: Nr,
    value: new Date(r.value.getTime() + Number(t.value))
  };
}
function Hk(e, r, t) {
  const n = new Date(r.value);
  return n.setUTCFullYear(Number(t.value)), {
    type: Nr,
    value: n
  };
}
function Wk(e, r, t) {
  const n = Number(t.value);
  if (n < 1 || n > 12)
    throw new Error(`Expecting month in [1..12], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMonth(n - 1), {
    type: Nr,
    value: o
  };
}
function Uk(e, r, t) {
  const n = new Date(r.value), o = Number(t.value);
  if (o <= 0 && o !== -1 || o > zk(n))
    throw new Error(`Unable to set day ${o} for date ${Ei(r, !1)}.`);
  return n.setUTCDate(o === -1 ? 0 : o), {
    type: Nr,
    value: n
  };
}
function Gk(e, r, t) {
  const n = Number(t.value);
  if (n < 0 || n > 23)
    throw new Error(`Expecting hours in [0..23], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCHours(n), {
    type: Nr,
    value: o
  };
}
function Jk(e, r, t) {
  const n = Number(t.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting minutes in [0..59], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMinutes(n), {
    type: Nr,
    value: o
  };
}
function Kk(e, r, t) {
  const n = Number(t.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting seconds in [0..59], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCSeconds(n), {
    type: Nr,
    value: o
  };
}
function qk(e, r, t) {
  const n = Number(t.value);
  if (n < 0 || n > 999)
    throw new Error(`Expecting millis in [0..999], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMilliseconds(n), {
    type: Nr,
    value: o
  };
}
const li = (e) => (r, t) => {
  let o = new Date(t.value.getTime())[e]();
  return e === "getUTCMonth" ? ++o : e === "getUTCDay" && o === 0 && (o = 7), {
    type: Re,
    value: gn(o)
  };
};
function r_(e) {
  return (r, t, n, o) => ({
    type: qe,
    value: Nk(t.value, n.value, {
      locale: o == null ? void 0 : o.value,
      isUTC: e,
      weekStartDay: r.weekStartDay
    })
  });
}
const Yk = li("getUTCFullYear"), Xk = li("getUTCMonth"), Zk = li("getUTCDate"), Qk = li("getUTCDay"), xk = li("getUTCHours"), $k = li("getUTCMinutes"), e2 = li("getUTCSeconds"), t2 = li("getUTCMilliseconds"), mf = r_(!1), bf = r_(!0);
function r2() {
  G("parseUnixTime", [Re], Lk), G("parseUnixTimeAsLocal", [Re], Ok), G("nowLocal", [], Bk), G("addMillis", [Nr, Re], Rk), G("setYear", [Nr, Re], Hk), G("setMonth", [Nr, Re], Wk), G("setDay", [Nr, Re], Uk), G("setHours", [Nr, Re], Gk), G("setMinutes", [Nr, Re], Jk), G("setSeconds", [Nr, Re], Kk), G("setMillis", [Nr, Re], qk), G("getYear", [Nr], Yk), G("getMonth", [Nr], Xk), G("getDay", [Nr], Zk), G("getDayOfWeek", [Nr], Qk), G("getHours", [Nr], xk), G("getMinutes", [Nr], $k), G("getSeconds", [Nr], e2), G("getMillis", [Nr], t2), G("formatDateAsLocal", [Nr, qe], mf), G("formatDateAsUTC", [Nr, qe], bf), G("formatDateAsLocalWithLocale", [Nr, qe, qe], mf), G("formatDateAsUTCWithLocale", [Nr, qe, qe], bf);
}
function n2(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function o2(e, r) {
  return {
    type: Re,
    value: gn(r.value.length)
  };
}
function i2(e, r, t) {
  return {
    type: Kr,
    value: r.value.includes(t.value) ? 1 : 0
  };
}
function s2(e, r, t, n) {
  if (n.value < t.value)
    throw new Error("Indexes should be in ascending order.");
  if (t.value < 0 || t.value > r.value.length || n.value < 0 || n.value > r.value.length)
    throw new Error("Indexes are out of bounds.");
  return {
    type: qe,
    value: r.value.substring(Number(t.value), Number(n.value))
  };
}
function l2(e, r, t, n) {
  let o;
  return t.value ? o = r.value.replace(new RegExp(n2(t.value), "g"), n.value) : o = r.value, {
    type: qe,
    value: o
  };
}
function a2(e, r, t) {
  return {
    type: Re,
    value: gn(r.value.indexOf(t.value))
  };
}
function u2(e, r, t) {
  return {
    type: Re,
    value: gn(r.value.lastIndexOf(t.value))
  };
}
function c2(e, r) {
  return {
    type: qe,
    value: r.value.trim()
  };
}
function f2(e, r) {
  return {
    type: qe,
    value: r.value.replace(/^\s+/, "")
  };
}
function d2(e, r) {
  return {
    type: qe,
    value: r.value.replace(/\s+$/, "")
  };
}
function _2(e, r) {
  return {
    type: qe,
    value: r.value.toUpperCase()
  };
}
function p2(e, r) {
  return {
    type: qe,
    value: r.value.toLowerCase()
  };
}
function n_(e, r, t, n) {
  if (!n.value.length)
    return e.warnings.push(X(new Error("String for padding is empty."), {
      level: "warn"
    })), "";
  let o = "";
  const i = r.type === qe ? r.value : Ei(r, !1);
  for (; o.length + i.length < t.value; )
    o += n.value;
  return o.length > 0 && o.length + i.length > t.value && (o = o.substring(0, Number(t.value) - Number(i.length))), o;
}
function yf(e, r, t, n) {
  const o = n_(e, r, t, n);
  return {
    type: qe,
    value: o + Ei(r, !1)
  };
}
function wf(e, r, t, n) {
  const o = n_(e, r, t, n);
  return {
    type: qe,
    value: Ei(r, !1) + o
  };
}
function g2(e, r, t) {
  let n;
  try {
    n = new RegExp(t.value);
  } catch {
    throw new Error("Invalid regular expression.");
  }
  return {
    type: Kr,
    value: n.test(r.value) ? 1 : 0
  };
}
function h2(e, r) {
  return {
    type: qe,
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#escaping
    value: r.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  };
}
function m2() {
  G("len", [qe], o2), G("contains", [qe, qe], i2), G("substring", [qe, Re, Re], s2), G("replaceAll", [qe, qe, qe], l2), G("index", [qe, qe], a2), G("lastIndex", [qe, qe], u2), G("trim", [qe], c2), G("trimLeft", [qe], f2), G("trimRight", [qe], d2), G("toUpperCase", [qe], _2), G("toLowerCase", [qe], p2), G("padStart", [qe, Re, qe], yf), G("padStart", [Re, Re, qe], yf), G("padEnd", [qe, Re, qe], wf), G("padEnd", [Re, Re, qe], wf), G("testRegex", [qe, qe], g2), G("encodeRegex", [qe], h2);
}
function b2(e, r, t) {
  if (t.value === ji)
    throw new Error("Division by zero is not supported.");
  let n = r.value / t.value;
  return n = Ai(e, n), zn(e, n), {
    type: Re,
    value: n
  };
}
function y2(e, r, t) {
  if (t.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = r.value / t.value;
  return {
    type: yt,
    value: n
  };
}
function w2(e, r, t) {
  if (t.value === ji)
    throw new Error("Division by zero is not supported.");
  let n = r.value % t.value;
  return n = Ai(e, n), zn(e, n), {
    type: Re,
    value: n
  };
}
function k2(e, r, t) {
  if (t.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = r.value % t.value;
  return {
    type: yt,
    value: n
  };
}
function v2(e, ...r) {
  let t = r.length ? r[0].value : ji;
  for (let n = 1; n < r.length; ++n)
    t *= r[n].value, t = Ai(e, t), zn(e, t);
  return {
    type: Re,
    value: t
  };
}
function j2(e, ...r) {
  let t = r.length ? r[0].value : 0;
  for (let n = 1; n < r.length; ++n)
    t *= r[n].value;
  return {
    type: yt,
    value: t
  };
}
function C2(e, ...r) {
  let t = r.length ? r[0].value : ji;
  for (let n = 1; n < r.length; ++n)
    t -= r[n].value, t = Ai(e, t), zn(e, t);
  return {
    type: Re,
    value: t
  };
}
function E2(e, ...r) {
  let t = r.length ? r[0].value : 0;
  for (let n = 1; n < r.length; ++n)
    t -= r[n].value;
  return {
    type: yt,
    value: t
  };
}
function A2(e, ...r) {
  let t = ji;
  for (let n = 0; n < r.length; ++n)
    t += r[n].value, t = Ai(e, t), zn(e, t);
  return {
    type: Re,
    value: t
  };
}
function S2(e, ...r) {
  let t = 0;
  for (let n = 0; n < r.length; ++n)
    t += r[n].value;
  return {
    type: yt,
    value: t
  };
}
function V2(e, r) {
  const t = Rd(r.value);
  return zn(e, t), {
    type: r.type,
    value: t
  };
}
function F2(e, r) {
  const t = Math.abs(r.value);
  return {
    type: yt,
    value: t
  };
}
function D2(e, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  let t = r[0].value;
  for (let n = 1; n < r.length; ++n)
    r[n].value > t && (t = r[n].value);
  return {
    type: Re,
    value: t
  };
}
function I2(e, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: yt,
    value: Math.max(...r.map((t) => t.value))
  };
}
function T2(e, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  let t = r[0].value;
  for (let n = 1; n < r.length; ++n)
    r[n].value < t && (t = r[n].value);
  return {
    type: Re,
    value: t
  };
}
function M2(e, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: yt,
    value: Math.min(...r.map((t) => t.value))
  };
}
function P2() {
  return {
    type: yt,
    value: e1
  };
}
function N2() {
  return {
    type: yt,
    value: t1
  };
}
function z2(e) {
  return zn(e, as), {
    type: Re,
    value: as
  };
}
function L2(e) {
  return zn(e, us), {
    type: Re,
    value: us
  };
}
function O2(e, r) {
  const t = Math.sign(r.value);
  return {
    type: yt,
    // js treats Math.round(-0.5) as 0, which is different to other platforms
    value: t * Math.round(Math.abs(r.value))
  };
}
function B2(e, r) {
  return {
    type: yt,
    value: Math.floor(r.value)
  };
}
function R2(e, r) {
  return {
    type: yt,
    value: Math.ceil(r.value)
  };
}
function H2(e, r) {
  return {
    type: Re,
    value: Hd(r.value)
  };
}
function W2(e, r) {
  return {
    type: yt,
    value: Math.sign(r.value)
  };
}
function U2(e, r, t) {
  let n;
  if (t.value === ji)
    n = r.value;
  else if (r.value === ji)
    n = gn(0);
  else {
    const o = Hd(t.value);
    n = Rd(r.value) * o;
  }
  return zn(e, n), {
    type: Re,
    value: n
  };
}
function G2(e, r, t) {
  let n = Math.sign(t.value);
  n === 0 && (n = Object.is(n, 0) ? 1 : -1);
  const o = Math.abs(r.value) * n;
  return {
    type: yt,
    value: o
  };
}
function J2() {
  G("div", [Re, Re], b2), G("div", [yt, yt], y2), G("mod", [Re, Re], w2), G("mod", [yt, yt], k2), G("mul", [{
    type: Re,
    isVararg: !0
  }], v2), G("mul", [{
    type: yt,
    isVararg: !0
  }], j2), G("sub", [{
    type: Re,
    isVararg: !0
  }], C2), G("sub", [{
    type: yt,
    isVararg: !0
  }], E2), G("sum", [{
    type: Re,
    isVararg: !0
  }], A2), G("sum", [{
    type: yt,
    isVararg: !0
  }], S2), G("abs", [Re], V2), G("abs", [yt], F2), G("max", [{
    type: Re,
    isVararg: !0
  }], D2), G("max", [{
    type: yt,
    isVararg: !0
  }], I2), G("min", [{
    type: Re,
    isVararg: !0
  }], T2), G("min", [{
    type: yt,
    isVararg: !0
  }], M2), G("maxNumber", [], P2), G("minNumber", [], N2), G("maxInteger", [], z2), G("minInteger", [], L2), G("round", [yt], O2), G("floor", [yt], B2), G("ceil", [yt], R2), G("signum", [Re], H2), G("signum", [yt], W2), G("copySign", [Re, Re], U2), G("copySign", [yt, yt], G2);
}
function yl(e) {
  return (r, t) => {
    const n = hl(t.value);
    return {
      type: yt,
      value: n[e] / 255
    };
  };
}
function wl(e) {
  return (r, t, n) => {
    const o = hl(t.value);
    return o[e] = n.value * 255, {
      type: _n,
      value: Si(o)
    };
  };
}
const kf = yl("a"), vf = yl("r"), jf = yl("g"), Cf = yl("b"), Ef = wl("a"), Af = wl("r"), Sf = wl("g"), Vf = wl("b");
function K2(e, r, t, n) {
  const o = {
    a: 255,
    r: r.value * 255,
    g: t.value * 255,
    b: n.value * 255
  };
  return {
    type: _n,
    value: Si(o)
  };
}
function q2(e, r, t, n, o) {
  const i = {
    a: r.value * 255,
    r: t.value * 255,
    g: n.value * 255,
    b: o.value * 255
  };
  return {
    type: _n,
    value: Si(i)
  };
}
function Y2() {
  G("getColorAlpha", [qe], kf), G("getColorAlpha", [_n], kf), G("getColorRed", [qe], vf), G("getColorRed", [_n], vf), G("getColorGreen", [qe], jf), G("getColorGreen", [_n], jf), G("getColorBlue", [qe], Cf), G("getColorBlue", [_n], Cf), G("setColorAlpha", [qe, yt], Ef), G("setColorAlpha", [_n, yt], Ef), G("setColorRed", [qe, yt], Af), G("setColorRed", [_n, yt], Af), G("setColorGreen", [qe, yt], Sf), G("setColorGreen", [_n, yt], Sf), G("setColorBlue", [qe, yt], Vf), G("setColorBlue", [_n, yt], Vf), G("rgb", [yt, yt, yt], K2), G("argb", [yt, yt, yt, yt], q2);
}
function ai(e, r, t, n) {
  if (r.value < 0)
    throw new Error("Expecting non-negative number of milliseconds.");
  let o = gn(r.value) / gn(t);
  return zn(e, o), n && (o = gn(o) % gn(n)), {
    type: Re,
    value: o
  };
}
const o_ = 1e3, X2 = 60, i_ = 1e3 * 60, Z2 = 60, s_ = 1e3 * 60 * 60, Q2 = 24, x2 = 1e3 * 60 * 60 * 24, $2 = 1e3 * 60 * 60 * 24 * 7;
function ev(e, r) {
  return ai(e, r, o_, X2);
}
function tv(e, r) {
  return ai(e, r, o_);
}
function rv(e, r) {
  return ai(e, r, i_, Z2);
}
function nv(e, r) {
  return ai(e, r, i_);
}
function ov(e, r) {
  return ai(e, r, s_, Q2);
}
function iv(e, r) {
  return ai(e, r, s_);
}
function sv(e, r) {
  return ai(e, r, x2);
}
function lv(e, r) {
  return ai(e, r, $2);
}
function av() {
  G("getIntervalSeconds", [Re], ev), G("getIntervalTotalSeconds", [Re], tv), G("getIntervalMinutes", [Re], rv), G("getIntervalTotalMinutes", [Re], nv), G("getIntervalHours", [Re], ov), G("getIntervalTotalHours", [Re], iv), G("getIntervalTotalDays", [Re], sv), G("getIntervalTotalWeeks", [Re], lv);
}
function uv(e, r) {
  let t = e;
  for (let n = 0; n < r.length; ++n) {
    if (!t)
      throw new Error(`Missing property "${r[n]}" in the dict.`);
    const o = t[r[n]];
    if (o === void 0)
      throw new Error(`Missing property "${r[n]}" in the dict.`);
    t = o;
  }
  return t;
}
function ui(e) {
  return (r, t, ...n) => {
    if (n.length === 0)
      throw new Error("Non empty argument list is required.");
    const o = uv(t.value, n.map((i) => i.value));
    return ml(r, o, e);
  };
}
function Ji(e, r) {
  return (t, n, o, ...i) => {
    try {
      return e(t, o, ...i);
    } catch {
      let a = n.value;
      return r === "color" ? a = si(a) : r === "url" && ho(a), {
        type: r,
        value: a
      };
    }
  };
}
const Fs = ui(qe), Ds = ui(yt), Is = ui(Re), Ts = ui(Kr), Ms = ui(_n), Ps = ui(to), ea = ui(mr), ta = ui(hr), Ff = Ji(Fs, qe), Df = Ji(Ds, yt), If = Ji(Is, Re), Tf = Ji(Ts, Kr), bs = Ji(Ms, _n), ys = Ji(Ps, to);
function cv(e, r, ...t) {
  try {
    return ea(e, r, ...t);
  } catch {
    return {
      type: mr,
      value: []
    };
  }
}
function fv(e, r, ...t) {
  try {
    return ta(e, r, ...t);
  } catch {
    return {
      type: hr,
      value: {}
    };
  }
}
function dv(e, r, t) {
  return {
    type: Kr,
    value: t.value in r.value ? 1 : 0
  };
}
function _v(e, r) {
  return {
    type: Kr,
    value: Object.keys(r.value).length ? 0 : 1
  };
}
function pv(e, r) {
  return {
    type: Re,
    value: gn(Object.keys(r.value).length)
  };
}
function Mf(e, r) {
  return {
    type: mr,
    value: Object.keys(r.value)
  };
}
function Pf(e, r) {
  return {
    type: mr,
    value: Object.values(r.value)
  };
}
function gv() {
  const e = {
    type: qe,
    isVararg: !0
  };
  G("getDictString", [hr, e], Fs), G("getStringFromDict", [hr, e], Fs), G("getDictNumber", [hr, e], Ds), G("getNumberFromDict", [hr, e], Ds), G("getDictInteger", [hr, e], Is), G("getIntegerFromDict", [hr, e], Is), G("getDictBoolean", [hr, e], Ts), G("getBooleanFromDict", [hr, e], Ts), G("getDictColor", [hr, e], Ms), G("getColorFromDict", [hr, e], Ms), G("getDictUrl", [hr, e], Ps), G("getUrlFromDict", [hr, e], Ps), G("getDictOptString", [qe, hr, e], Ff), G("getOptStringFromDict", [qe, hr, e], Ff), G("getDictOptNumber", [yt, hr, e], Df), G("getOptNumberFromDict", [yt, hr, e], Df), G("getDictOptInteger", [Re, hr, e], If), G("getOptIntegerFromDict", [Re, hr, e], If), G("getDictOptBoolean", [Kr, hr, e], Tf), G("getOptBooleanFromDict", [Kr, hr, e], Tf), G("getDictOptColor", [_n, hr, e], bs), G("getOptColorFromDict", [_n, hr, e], bs), G("getDictOptColor", [qe, hr, e], bs), G("getOptColorFromDict", [qe, hr, e], bs), G("getDictOptUrl", [qe, hr, e], ys), G("getOptUrlFromDict", [qe, hr, e], ys), G("getDictOptUrl", [to, hr, e], ys), G("getOptUrlFromDict", [to, hr, e], ys), G("getDictFromDict", [hr, e], ta), G("getArrayFromDict", [hr, e], ea), G("getOptArrayFromDict", [hr, e], cv), G("getOptDictFromDict", [hr, e], fv), G("len", [hr], pv), G("getDictKeys", [hr], Mf), G("getDictValues", [hr], Pf), Wr("getString", [hr, e], Fs), Wr("getBoolean", [hr, e], Ts), Wr("getInteger", [hr, e], Is), Wr("getNumber", [hr, e], Ds), Wr("getUrl", [hr, e], Ps), Wr("getColor", [hr, e], Ms), Wr("getArray", [hr, e], ea), Wr("getDict", [hr, e], ta), Wr("containsKey", [hr, qe], dv), Wr("isEmpty", [hr], _v), Wr("getKeys", [hr], Mf), Wr("getValues", [hr], Pf);
}
function ci(e, r) {
  return (t, n, o) => {
    if (o.value < 0 || o.value >= n.value.length)
      throw new Error(`Requested index (${o.value}) out of bounds array size (${n.value.length}).`);
    let i = n.value[Number(o.value)], s = typeof i;
    if (e === "array" && !Array.isArray(i) || e !== "array" && s !== e || s === "object" && i === null)
      throw s === "object" && (Array.isArray(i) ? s = "Array" : i === null ? s = "Null" : s = "Dict"), new Error(`Incorrect value type: expected ${Zn(r)}, got ${Zn(s)}.`);
    if (e === "number" && r === "integer") {
      zn(t, i);
      try {
        i = gn(i);
      } catch {
        throw new Error("Cannot convert value to integer.");
      }
    }
    return e === "string" && r === "color" && (i = si(i)), e === "string" && r === "url" && ho(i), {
      type: r,
      value: i
    };
  };
}
function Ki(e, r) {
  return (t, n, o, i) => {
    try {
      return e(t, n, o);
    } catch {
      let a = i.value;
      return r === "color" ? a = si(a) : r === "url" && ho(a), {
        type: r,
        value: a
      };
    }
  };
}
const Ns = ci("string", "string"), zs = ci("number", "number"), Ls = ci("number", "integer"), Os = ci("boolean", "boolean"), Bs = ci("string", "color"), Rs = ci("string", "url"), ra = ci("array", "array"), na = ci("object", "dict"), Nf = Ki(Ns, "string"), zf = Ki(zs, "number"), Lf = Ki(Ls, "integer"), Of = Ki(Os, "boolean"), ws = Ki(Bs, "color"), ks = Ki(Rs, "url");
function hv(e, r, t) {
  try {
    return ra(e, r, t);
  } catch {
    return {
      type: mr,
      value: []
    };
  }
}
function mv(e, r, t) {
  try {
    return na(e, r, t);
  } catch {
    return {
      type: hr,
      value: {}
    };
  }
}
function bv(e, r) {
  return {
    type: Re,
    value: gn(r.value.length)
  };
}
function yv(e, r) {
  return {
    type: Kr,
    value: r.value.length === 0 ? 1 : 0
  };
}
function wv(e, r, t) {
  return r.value.length ? {
    type: mr,
    value: r.value.filter((n) => {
      const o = [];
      if (typeof n == "string")
        po(n) && o.push([{
          type: _n,
          value: n
        }]), n1(n) && o.push([{
          type: to,
          value: n
        }]), o.push([{
          type: qe,
          value: n
        }]);
      else if (typeof n == "number")
        Math.round(n) === n && (zn(e, n), o.push([{
          type: Re,
          value: gn(n)
        }])), o.push([{
          type: yt,
          value: n
        }]);
      else if (typeof n == "bigint")
        zn(e, n), o.push([{
          type: Re,
          value: n
        }]);
      else if (Array.isArray(n))
        o.push([{
          type: mr,
          value: n
        }]);
      else if (typeof n == "object") {
        if (n === null)
          throw new Error("Incorrect value type: Null");
        o.push([{
          type: hr,
          value: n
        }]);
      } else if (typeof n == "boolean")
        o.push([{
          type: Kr,
          value: n ? 1 : 0
        }]);
      else
        throw new Error(`Incorrect value type: ${Zn(typeof n)}`);
      let i = {
        type: "missing"
      };
      for (const c of o)
        if (i = $d(t.value, c), "func" in i)
          break;
      let s;
      if ("func" in i)
        s = i.func;
      else {
        const c = t.value[0];
        l_(c.name || "Function", o[0], i, !0);
      }
      const a = s.args[0], l = ml(
        e,
        n,
        typeof a == "string" ? a : a.type
      ), u = s.cb(e, l);
      if (u.type !== Kr)
        throw new Error("Function must return boolean value.");
      return u.value;
    })
  } : {
    type: mr,
    value: []
  };
}
function kv() {
  G("getArrayString", [
    mr,
    Re
  ], Ns), G("getStringFromArray", [
    mr,
    Re
  ], Ns), G("getArrayNumber", [
    mr,
    Re
  ], zs), G("getNumberFromArray", [
    mr,
    Re
  ], zs), G("getArrayInteger", [
    mr,
    Re
  ], Ls), G("getIntegerFromArray", [
    mr,
    Re
  ], Ls), G("getArrayBoolean", [
    mr,
    Re
  ], Os), G("getBooleanFromArray", [
    mr,
    Re
  ], Os), G("getArrayColor", [
    mr,
    Re
  ], Bs), G("getColorFromArray", [
    mr,
    Re
  ], Bs), G("getArrayUrl", [
    mr,
    Re
  ], Rs), G("getUrlFromArray", [
    mr,
    Re
  ], Rs), G("getArrayFromArray", [
    mr,
    Re
  ], ra), G("getDictFromArray", [
    mr,
    Re
  ], na), G("getArrayOptString", [
    mr,
    Re,
    qe
  ], Nf), G("getOptStringFromArray", [
    mr,
    Re,
    qe
  ], Nf), G("getArrayOptNumber", [
    mr,
    Re,
    yt
  ], zf), G("getOptNumberFromArray", [
    mr,
    Re,
    yt
  ], zf), G("getArrayOptInteger", [
    mr,
    Re,
    Re
  ], Lf), G("getOptIntegerFromArray", [
    mr,
    Re,
    Re
  ], Lf), G("getArrayOptBoolean", [
    mr,
    Re,
    Kr
  ], Of), G("getOptBooleanFromArray", [
    mr,
    Re,
    Kr
  ], Of), G("getArrayOptColor", [
    mr,
    Re,
    _n
  ], ws), G("getOptColorFromArray", [
    mr,
    Re,
    _n
  ], ws), G("getArrayOptColor", [
    mr,
    Re,
    qe
  ], ws), G("getOptColorFromArray", [
    mr,
    Re,
    qe
  ], ws), G("getArrayOptUrl", [
    mr,
    Re,
    to
  ], ks), G("getOptUrlFromArray", [
    mr,
    Re,
    to
  ], ks), G("getArrayOptUrl", [
    mr,
    Re,
    qe
  ], ks), G("getOptUrlFromArray", [
    mr,
    Re,
    qe
  ], ks), G("getOptArrayFromArray", [
    mr,
    Re
  ], hv), G("getOptDictFromArray", [
    mr,
    Re
  ], mv), G("len", [
    mr
  ], bv), Wr("getString", [mr, Re], Ns), Wr("getInteger", [mr, Re], Ls), Wr("getNumber", [mr, Re], zs), Wr("getBoolean", [mr, Re], Os), Wr("getUrl", [mr, Re], Rs), Wr("getColor", [mr, Re], Bs), Wr("getArray", [mr, Re], ra), Wr("getDict", [mr, Re], na), Wr("isEmpty", [mr], yv), Wr("filter", [mr, r1], wv);
}
function Ao(e) {
  return (r, t, n) => {
    if (!r.store) {
      if (!n)
        throw new Error("Missing value.");
      return {
        type: e,
        value: n.value
      };
    }
    let o;
    e === "boolean" ? o = "boolean" : e === "number" || e === "integer" ? o = "number" : o = "string";
    let i;
    if (r.store.get ? i = r.store.get(t.value, e) : r.store.getValue && (i = r.store.getValue(t.value, o)), i === void 0) {
      if (!n)
        throw new Error("Missing value.");
      return e === "url" && ho(n.value), {
        type: e,
        value: n.value
      };
    } else e === "url" && ho(i);
    return ml(r, i, e);
  };
}
function vv() {
  G("getStoredIntegerValue", [qe, Re], Ao(Re)), G("getStoredNumberValue", [qe, yt], Ao(yt)), G("getStoredStringValue", [qe, qe], Ao(qe)), G("getStoredUrlValue", [qe, to], Ao(to)), G("getStoredUrlValue", [qe, qe], Ao(to)), G("getStoredColorValue", [qe, _n], Ao(_n)), G("getStoredColorValue", [qe, qe], Ao(_n)), G("getStoredBooleanValue", [qe, Kr], Ao(Kr)), G("getStoredArrayValue", [qe], Ao(mr)), G("getStoredDictValue", [qe], Ao(hr));
}
function jv() {
  return {
    type: yt,
    value: Math.PI
  };
}
function Cv(e, r) {
  return {
    type: yt,
    value: r.value / 180 * Math.PI
  };
}
function Ev(e, r) {
  return {
    type: yt,
    value: r.value / Math.PI * 180
  };
}
function Av(e, r) {
  return {
    type: yt,
    value: Math.sin(r.value)
  };
}
function Sv(e, r) {
  return {
    type: yt,
    value: Math.cos(r.value)
  };
}
function Vv(e, r) {
  return {
    type: yt,
    value: Math.tan(r.value)
  };
}
function Fv(e, r) {
  const t = Math.tan(r.value);
  if (Math.abs(t) < 1e-12)
    throw new Error("Cotangent is undefined for the given value.");
  return {
    type: yt,
    value: 1 / t
  };
}
function Dv(e, r) {
  return {
    type: yt,
    value: Math.atan(r.value)
  };
}
function Iv(e, r, t) {
  return {
    type: yt,
    value: Math.atan2(r.value, t.value)
  };
}
function Tv(e, r) {
  if (r.value > 1 || r.value < -1)
    throw new Error("Arcsine is undefined for the given value.");
  return {
    type: yt,
    value: Math.asin(r.value)
  };
}
function Mv(e, r) {
  if (r.value > 1 || r.value < -1)
    throw new Error("Arccosine is undefined for the given value.");
  return {
    type: yt,
    value: Math.acos(r.value)
  };
}
function Pv() {
  G("pi", [], jv), G("toRadians", [yt], Cv), G("toDegrees", [yt], Ev), G("sin", [yt], Av), G("cos", [yt], Sv), G("tan", [yt], Vv), G("cot", [yt], Fv), G("atan", [yt], Dv), G("atan2", [yt, yt], Iv), G("asin", [yt], Tv), G("acos", [yt], Mv);
}
function Nv() {
  Fk(), r2(), av(), m2(), J2(), Y2(), gv(), kv(), vv(), Pv();
}
Nv();
function zv(e, r) {
  return {
    type: qe,
    value: r.value
  };
}
function Lv(e, r) {
  return {
    type: yt,
    value: r.value
  };
}
function Ov(e, r) {
  return zn(e, r.value), {
    type: Re,
    value: r.value
  };
}
function Bv(e, r) {
  return {
    type: Kr,
    value: r.value ? 1 : 0
  };
}
function Rv(e, r) {
  const t = Ys(Bn(e, r.argument));
  switch (r.operator) {
    case "!":
      if (t.type === Kr)
        return {
          type: Kr,
          value: t.value ? 0 : 1
        };
      Vn(`${r.operator}${pn(t)}`, "A Boolean is expected after a unary not.");
    case "+":
    case "-":
      const n = r.operator === "+" ? 1 : -1;
      if (t.type === Re) {
        const o = t.value * gn(n);
        return zn(e, o), {
          type: Re,
          value: o
        };
      } else {
        if (t.type === yt)
          return {
            type: yt,
            value: t.value * n
          };
        Vn(
          `${r.operator}${pn(t)}`,
          `A Number is expected after a unary ${r.operator === "+" ? "plus" : "minus"}.`
        );
      }
  }
}
function Hv(e, r) {
  const t = Ys(Bn(e, r.test));
  if (t.type === Kr)
    return t.value ? Bn(e, r.consequent) : Bn(e, r.alternate);
  Vn(
    `${pn(t)} ? ${pn(Bn(e, r.consequent))} : ${pn(Bn(e, r.alternate))}`,
    "Ternary must be called with a Boolean value as a condition."
  );
}
function Wv(e, r) {
  try {
    return Bn(e, r.test);
  } catch {
    return Bn(e, r.alternate);
  }
}
function Uv(e, r) {
  let t = "";
  if (r.quasis.length === 2 && r.quasis[0].value === "" && r.quasis[1].value === "")
    return Bn(e, r.expressions[0]);
  for (let n = 0; n < r.expressions.length; ++n)
    t += r.quasis[n].value, t += Ei(Bn(e, r.expressions[n]), !0);
  return t += r.quasis[r.quasis.length - 1].value, {
    type: qe,
    value: t
  };
}
function Gv(e, r) {
  const t = Ys(Bn(e, r.left));
  if (t.type !== Kr && Vn(
    `${pn(t)} ${r.operator} ...`,
    `'${r.operator}' must be called with boolean operands.`
  ), r.operator === "||" && t.value)
    return t;
  if (r.operator === "&&" && !t.value)
    return {
      type: Kr,
      value: 0
    };
  const n = Ys(Bn(e, r.right));
  return n.type !== Kr && Vn(
    `${pn(t)} ${r.operator} ${pn(n)}`,
    `Operator '${r.operator}' cannot be applied to different types: Boolean and ${Zn(n.type)}.`
  ), {
    type: Kr,
    value: n.value
  };
}
function Jv(e, r, t) {
  let n;
  return r.type === Nr && t.type === Nr ? n = r.value.getTime() === t.value.getTime() : n = r.value === t.value, e === "!=" && (n = !n), {
    type: Kr,
    value: n ? 1 : 0
  };
}
function Kv(e, r, t) {
  (r.type !== yt && r.type !== Re && r.type !== Nr || t.type !== yt && t.type !== Re && t.type !== Nr) && Vn(
    `${pn(r)} ${e} ${pn(t)}`,
    `Operator '${e}' cannot be applied to ${Zn(r.type)} type.`
  );
  let n;
  const o = r.type === Nr ? r.value.getTime() : r.value, i = t.type === Nr ? t.value.getTime() : t.value;
  return e === ">" ? n = o > i : e === ">=" ? n = o >= i : e === "<" ? n = o < i : n = o <= i, {
    type: Kr,
    value: n ? 1 : 0
  };
}
function qv(e, r, t, n) {
  if (t.type !== qe && t.type !== yt && t.type !== Re && Vn(
    `${pn(t)} ${r} ${pn(n)}`,
    `Operator '${r}' cannot be applied to ${Zn(t.type)} type.`
  ), t.type === qe)
    return r === "-" && Vn(
      `${pn(t)} - ${pn(n)}`,
      `Operator '${r}' cannot be applied to ${Zn(t.type)} type.`
    ), {
      type: qe,
      value: t.value + n.value
    };
  let o = r === "+" ? t.value + n.value : t.value - n.value;
  if (t.type === Re)
    try {
      o = Ai(e, o), zn(e, o);
    } catch (i) {
      Vn(
        `${pn(t)} ${r} ${pn(n)}`,
        i.message
      );
    }
  return {
    type: t.type,
    value: o
  };
}
function Yv(e, r, t, n) {
  t.type !== Re && t.type !== yt && Vn(
    `${pn(t)} ${r} ${pn(n)}`,
    `Operator '${r}' cannot be applied to ${Zn(t.type)} type.`
  );
  let o;
  if (r === "*")
    o = t.value * n.value;
  else if (r === "/" || r === "%")
    Number(n.value) === 0 && Vn(
      `${pn(t)} ${r} ${pn(n)}`,
      "Division by zero is not supported."
    ), r === "/" ? o = t.value / n.value : o = t.value % n.value;
  else
    throw new Error(`Unsupported operation ${r}`);
  if (t.type === Re)
    try {
      o = Ai(e, o), zn(e, o);
    } catch (i) {
      Vn(
        `${pn(t)} ${r} ${pn(n)}`,
        i.message
      );
    }
  return {
    type: t.type,
    value: o
  };
}
function Xv(e, r) {
  const t = r.operator;
  let n = Bn(e, r.left), o = Bn(e, r.right);
  if ((n.type === "number" && o.type === "integer" || n.type === "integer" && o.type === "number") && (n.type === "integer" ? n = Jl(n) : o.type === "integer" && (o = Jl(o))), n.type !== o.type && Vn(
    `${pn(n)} ${r.operator} ${pn(o)}`,
    `Operator '${t}' cannot be applied to different types: ${Zn(n.type)} and ${Zn(o.type)}.`
  ), t === "==" || t === "!=")
    return Jv(t, n, o);
  if (t === ">" || t === ">=" || t === "<" || t === "<=")
    return Kv(t, n, o);
  if (t === "+" || t === "-")
    return qv(e, t, n, o);
  if (t === "/" || t === "*" || t === "%")
    return Yv(e, t, n, o);
  throw new Error(`Unsupported operation ${t}`);
}
function $s(e) {
  return e.map(pn).join(", ");
}
function Zv(e, r) {
  const t = r.callee.name;
  let n, o = r.arguments.map((a) => Bn(e, a));
  const i = t + ":" + o.map((a) => a.type).join("#");
  let s;
  if (e.customFunctions && (s = Ql(e.customFunctions, t, o)), !s || !("func" in s))
    if (Xl.has(i))
      s = {
        func: Xl.get(i),
        conversions: 0
      };
    else {
      const a = Ql(Ss, t, o);
      ("func" in a || !s || s.type === "missing") && (s = a);
    }
  if (s && (("expected" in s || "type" in s && s.type === "missing") && l_(t, o, s), n = s.func, s.conversions && (o = e_(n, o))), !n)
    throw new Error("Function not found");
  try {
    return n.cb(e, ...o);
  } catch (a) {
    if (a && a instanceof wa)
      throw a;
    const l = `${t}(${$s(o)})`;
    Vn(l, a.message);
  }
}
function l_(e, r, t, n = !1) {
  const o = r.map((a) => Zn(a.type)).join(", "), i = `${e}(${$s(r)})`, s = n ? i1 : Vn;
  if (t.type === "few" && r.length === 0 && t.hasOverloads)
    s(i, "Function requires non empty argument list.");
  else if (t.type === "many" || t.type === "few" || t.type === "mismatch")
    if (t.hasOverloads)
      s(i, `Function has no matching overload for given argument types: ${o}.`);
    else if (t.type === "many" || t.type === "few")
      t.def.args.some((a) => typeof a == "object" && a.isVararg) ? s(i, `At least ${t.def.args.length} argument(s) expected.`) : s(i, `Exactly ${t.def.args.length} argument(s) expected.`);
    else {
      const a = t.def.args.map((l) => Zn(typeof l == "string" ? l : l.type)).join(", ");
      s(i, `Invalid argument type: expected ${a}, got ${o}.`);
    }
  else
    s(i, `Unknown function name: ${e}.`);
}
function Qv(e, r) {
  const t = r.method.name;
  let n, o = [r.object, ...r.arguments].map((s) => Bn(e, s));
  const i = t + ":" + o.map((s) => s.type).join("#");
  if (Zl.has(i))
    n = Zl.get(i);
  else {
    const s = Ql(Vs, t, o);
    if ("expected" in s || "type" in s && s.type === "missing") {
      const a = o.slice(1).map((u) => Zn(u.type)).join(", "), l = `${t}(${$s(o.slice(1))})`;
      s.type === "few" && o.length === 1 ? Vn(l, "Method requires non empty argument list.") : s.type === "many" ? Vn(l, `Method has no matching overload for given argument types: ${a}.`) : s.type === "few" || s.type === "mismatch" ? Vn(l, `Method has no matching overload for given argument types: ${a}.`) : Vn(l, `Unknown method name: ${t}.`);
    }
    n = s.func, s.conversions && (o = e_(n, o));
  }
  if (!n)
    throw new Error("Method not found");
  try {
    return n.cb(e, ...o);
  } catch (s) {
    if (s && s instanceof wa)
      throw s;
    const a = `${t}(${$s(o.slice(1))})`;
    Vn(a, s.message);
  }
}
function xv(e, r) {
  var i;
  const t = r.id.name, n = (i = e.customFunctions) == null ? void 0 : i.get(t);
  if (n)
    return {
      type: "function",
      value: n
    };
  const o = e.variables.get(t);
  if (o)
    return y1(o);
  throw new Error(`Variable '${t}' is missing.`);
}
const Bf = {
  StringLiteral: zv,
  NumberLiteral: Lv,
  IntegerLiteral: Ov,
  BooleanLiteral: Bv,
  UnaryExpression: Rv,
  ConditionalExpression: Hv,
  TryExpression: Wv,
  TemplateLiteral: Uv,
  LogicalExpression: Gv,
  BinaryExpression: Xv,
  CallExpression: Zv,
  MethodExpression: Qv,
  Variable: xv
};
function Bn(e, r) {
  if (r.type in Bf)
    return Bf[r.type](e, r);
  throw new Error("Unsupported expression");
}
function Ca(e, r, t, n, o) {
  try {
    const i = {
      variables: e,
      customFunctions: r,
      warnings: [],
      store: t,
      weekStartDay: (o == null ? void 0 : o.weekStartDay) || 0
    };
    return {
      result: Bn(i, n),
      warnings: i.warnings,
      usedVars: i.storeUsedVars
    };
  } catch (i) {
    return {
      result: {
        type: "error",
        value: i.message
      },
      warnings: []
    };
  }
}
function $v(e, r) {
  return r && r[3] && r[7] ? { type: "ConditionalExpression", test: e, consequent: r[3], alternate: r[7] } : e;
}
function e3(e, r) {
  return r && r[3] ? { type: "TryExpression", test: e, alternate: r[3] } : e;
}
function vs(e, r) {
  return r.length ? r.reduce((t, n) => ({
    type: "BinaryExpression",
    operator: n[1],
    left: t,
    right: n[3]
  }), e) : e;
}
function Rf(e, r) {
  return r.length ? r.reduce((t, n) => ({
    type: "LogicalExpression",
    operator: n[1],
    left: t,
    right: n[3]
  }), e) : e;
}
function t3(e, r) {
  return r.length ? r.reduce((t, n) => {
    if (!n[5])
      throw new Error("Method expected after .");
    return {
      type: "MethodExpression",
      object: t,
      method: n[3],
      arguments: n[5][2]
    };
  }, e) : e;
}
function r3(e) {
  return e === "true" || e === "false" ? { type: "BooleanLiteral", value: e === "true" } : { type: "Variable", id: { type: "Identifier", name: e } };
}
function Hf(e) {
  if (e.every((t) => typeof t == "string"))
    return { type: "StringLiteral", value: e.join("") };
  let r = e.reduce((t, n) => (typeof n == "string" && typeof t[t.length - 1] == "string" ? t[t.length - 1] += n : t.push(n), t), []).reduce((t, n) => (typeof n == "string" ? t.quasis.push({ type: "StringLiteral", value: n }) : (t.quasis.length === t.expressions.length && t.quasis.push({ type: "StringLiteral", value: "" }), t.expressions.push(n)), t), {
    type: "TemplateLiteral",
    quasis: [],
    expressions: []
  });
  return r.quasis.length === r.expressions.length && r.quasis.push({ type: "StringLiteral", value: "" }), r;
}
function n3(e) {
  try {
    return gn(e);
  } catch {
    throw new Error(`Value ${e} can't be converted to Integer type.`);
  }
}
function Wf(e) {
  if (e === "'" || e === "\\")
    return e;
  throw new Error("Incorrect string escape");
}
function o3(e, r) {
  function t() {
    this.constructor = e;
  }
  t.prototype = r.prototype, e.prototype = new t();
}
function Ri(e, r, t, n) {
  var o = Error.call(this, e);
  return Object.setPrototypeOf && Object.setPrototypeOf(o, Ri.prototype), o.expected = r, o.found = t, o.location = n, o.name = "SyntaxError", o;
}
o3(Ri, Error);
function Pl(e, r, t) {
  return t = t || " ", e.length > r ? e : (r -= e.length, t += t.repeat(r), e + t.slice(0, r));
}
Ri.prototype.format = function(e) {
  var r = "Error: " + this.message;
  if (this.location) {
    var t = null, n;
    for (n = 0; n < e.length; n++)
      if (e[n].source === this.location.source) {
        t = e[n].text.split(/\r\n|\n|\r/g);
        break;
      }
    var o = this.location.start, i = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(o) : o, s = this.location.source + ":" + i.line + ":" + i.column;
    if (t) {
      var a = this.location.end, l = Pl("", i.line.toString().length, " "), u = t[o.line - 1], c = o.line === a.line ? a.column : u.length + 1, f = c - o.column || 1;
      r += `
 --> ` + s + `
` + l + ` |
` + i.line + " | " + u + `
` + l + " | " + Pl("", o.column - 1, " ") + Pl("", f, "^");
    } else
      r += `
 at ` + s;
  }
  return r;
};
Ri.buildMessage = function(e, r) {
  var t = {
    literal: function(u) {
      return '"' + o(u.text) + '"';
    },
    class: function(u) {
      var c = u.parts.map(function(f) {
        return Array.isArray(f) ? i(f[0]) + "-" + i(f[1]) : i(f);
      });
      return "[" + (u.inverted ? "^" : "") + c.join("") + "]";
    },
    any: function() {
      return "any character";
    },
    end: function() {
      return "end of input";
    },
    other: function(u) {
      return u.description;
    }
  };
  function n(u) {
    return u.charCodeAt(0).toString(16).toUpperCase();
  }
  function o(u) {
    return u.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(c) {
      return "\\x0" + n(c);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(c) {
      return "\\x" + n(c);
    });
  }
  function i(u) {
    return u.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(c) {
      return "\\x0" + n(c);
    }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(c) {
      return "\\x" + n(c);
    });
  }
  function s(u) {
    return t[u.type](u);
  }
  function a(u) {
    var c = u.map(s), f, _;
    if (c.sort(), c.length > 0) {
      for (f = 1, _ = 1; f < c.length; f++)
        c[f - 1] !== c[f] && (c[_] = c[f], _++);
      c.length = _;
    }
    switch (c.length) {
      case 1:
        return c[0];
      case 2:
        return c[0] + " or " + c[1];
      default:
        return c.slice(0, -1).join(", ") + ", or " + c[c.length - 1];
    }
  }
  function l(u) {
    return u ? '"' + o(u) + '"' : "end of input";
  }
  return "Expected " + a(e) + " but " + l(r) + " found.";
};
function a_(e, r) {
  r = r !== void 0 ? r : {};
  var t = {}, n = r.grammarSource, o = { start: Ur, JsonStringContents: an }, i = Ur, s = "@{", a = "}", l = "@{}", u = "\\", c = "?", f = ":", _ = "!:", h = "||", m = "&&", p = "==", w = "!=", k = ">=", N = ">", B = "<=", z = "<", oe = "+", fe = "-", T = "/", Y = "*", le = "%", A = "!", D = ".", M = "(", U = ")", q = ",", be = "'", Ae = "e", Ce = "E", he = /^[^}]/, Fe = /^[^'}]/, x = /^[0-9]/, Je = /^[a-zA-Z_]/, Ye = /^[a-zA-Z_0-9]/, Xe = /^[ \t\r\n]/, ye = Ge("@{", !1), Ie = Ge("}", !1), pe = Ge("@{}", !1), me = Ge("\\", !1), _e = Jt(), ee = st(["}"], !0, !1), ce = Ge("?", !1), te = Ge(":", !1), we = Ge("!:", !1), Ue = Ge("||", !1), Ke = Ge("&&", !1), $ = Ge("==", !1), Oe = Ge("!=", !1), Ne = Ge(">=", !1), ot = Ge(">", !1), ct = Ge("<=", !1), rt = Ge("<", !1), kt = Ge("+", !1), it = Ge("-", !1), Mt = Ge("/", !1), ft = Ge("*", !1), Z = Ge("%", !1), de = Ge("!", !1), lt = Ge(".", !1), ze = Ge("(", !1), F = Ge(")", !1), Et = Ge(",", !1), ut = lr("string"), Vt = Ge("'", !1), It = st(["'", "}"], !0, !1), nt = lr("integer"), Q = st([["0", "9"]], !1, !1), At = lr("number"), Pt = Ge("e", !1), $t = Ge("E", !1), Zt = st([["a", "z"], ["A", "Z"], "_"], !1, !1), Ee = st([["a", "z"], ["A", "Z"], "_", ["0", "9"]], !1, !1), He = lr("whitespace"), ht = st([" ", "	", "\r", `
`], !1, !1), Te = function(b) {
    return b;
  }, xe = function(b) {
    return Hf(b);
  }, Le = function(b) {
    return b;
  }, Ft = function() {
    return "";
  }, Be = function() {
    return Lt();
  }, bt = function() {
    throw new Error("Error tokenizing '" + e + "'.");
  }, Ut = function() {
    throw new Error("Error tokenizing '" + e + "'.");
  }, Tt = function(b) {
    return b;
  }, ir = function(b) {
    return Wf(b);
  }, De = function() {
    throw new Error("Error tokenizing '" + e + "'.");
  }, jt = function(b, V) {
    return $v(b, V);
  }, sr = function(b, V) {
    return e3(b, V);
  }, rr = function(b, V) {
    return Rf(b, V);
  }, nr = function(b, V) {
    return Rf(b, V);
  }, fr = function(b, V) {
    return vs(b, V);
  }, wr = function(b, V) {
    return vs(b, V);
  }, Nt = function(b, V) {
    return vs(b, V);
  }, br = function(b, V) {
    return vs(b, V);
  }, Rt = function(b) {
    return b;
  }, mt = function(b) {
    return b;
  }, er = function(b, V) {
    return { type: "UnaryExpression", operator: b, argument: V };
  }, se = function() {
    throw new Error("Incorrect unary operator");
  }, kr = function(b, V) {
    return t3(b, V);
  }, vr = function(b, V) {
    return { type: "CallExpression", callee: b, arguments: V };
  }, Ct = function(b, V) {
    return [b, ...V];
  }, Dr = function(b) {
    return b;
  }, Br = function(b) {
    return b;
  }, ar = function(b) {
    return Hf(b);
  }, at = function(b) {
    return b;
  }, St = function() {
    return "";
  }, Gt = function() {
    return Lt();
  }, Qt = function() {
    throw new Error("Error tokenizing '" + e + "'.");
  }, $e = function() {
    throw new Error("Error tokenizing '" + e + "'.");
  }, pt = function(b) {
    return b;
  }, ue = function(b) {
    return Wf(b);
  }, vt = function() {
    throw new Error("Error tokenizing '" + e + "'.");
  }, tr = function() {
    return { type: "IntegerLiteral", value: n3(Lt()) };
  }, Ht = function() {
    return { type: "NumberLiteral", value: parseFloat(Lt()) };
  }, yr = function() {
    return { type: "NumberLiteral", value: parseFloat(Lt()) };
  }, j = function() {
    const b = Lt();
    if (/\.\./.test(b) || /\.$/.test(b))
      throw new Error("Unexpected token: .");
    return r3(b);
  }, ie = function() {
    return { type: "Identifier", name: Lt() };
  }, d = 0, L = 0, je = [{ line: 1, column: 1 }], We = 0, ke = [], P = 0, zt;
  if ("startRule" in r) {
    if (!(r.startRule in o))
      throw new Error(`Can't start parsing from rule "` + r.startRule + '".');
    i = o[r.startRule];
  }
  function Lt() {
    return e.substring(L, d);
  }
  function Ge(b, V) {
    return { type: "literal", text: b, ignoreCase: V };
  }
  function st(b, V, re) {
    return { type: "class", parts: b, inverted: V, ignoreCase: re };
  }
  function Jt() {
    return { type: "any" };
  }
  function Er() {
    return { type: "end" };
  }
  function lr(b) {
    return { type: "other", description: b };
  }
  function Ir(b) {
    var V = je[b], re;
    if (V)
      return V;
    for (re = b - 1; !je[re]; )
      re--;
    for (V = je[re], V = {
      line: V.line,
      column: V.column
    }; re < b; )
      e.charCodeAt(re) === 10 ? (V.line++, V.column = 1) : V.column++, re++;
    return je[b] = V, V;
  }
  function yn(b, V, re) {
    var O = Ir(b), Ve = Ir(V), ve = {
      source: n,
      start: {
        offset: b,
        line: O.line,
        column: O.column
      },
      end: {
        offset: V,
        line: Ve.line,
        column: Ve.column
      }
    };
    return ve;
  }
  function Se(b) {
    d < We || (d > We && (We = d, ke = []), ke.push(b));
  }
  function qr(b, V, re) {
    return new Ri(
      Ri.buildMessage(b, V),
      b,
      V,
      re
    );
  }
  function Ur() {
    var b, V;
    return b = d, Kt(), V = C(), V !== t ? (Kt(), L = b, b = Te(V)) : (d = b, b = t), b;
  }
  function an() {
    var b, V, re;
    for (b = d, V = [], re = y(); re !== t; )
      V.push(re), re = y();
    return L = b, V = xe(V), b = V, b;
  }
  function y() {
    var b, V, re, O, Ve;
    if (b = d, e.substr(d, 2) === s ? (V = s, d += 2) : (V = t, P === 0 && Se(ye)), V !== t ? (re = Kt(), O = C(), O !== t ? (Kt(), e.charCodeAt(d) === 125 ? (Ve = a, d++) : (Ve = t, P === 0 && Se(Ie)), Ve !== t ? (L = b, b = Le(O)) : (d = b, b = t)) : (d = b, b = t)) : (d = b, b = t), b === t && (b = d, e.substr(d, 3) === l ? (V = l, d += 3) : (V = t, P === 0 && Se(pe)), V !== t && (L = b, V = Ft()), b = V, b === t && (b = d, V = d, P++, e.charCodeAt(d) === 92 ? (re = u, d++) : (re = t, P === 0 && Se(me)), re === t && (e.substr(d, 2) === s ? (re = s, d += 2) : (re = t, P === 0 && Se(ye))), P--, re === t ? V = void 0 : (d = V, V = t), V !== t ? (e.length > d ? (re = e.charAt(d), d++) : (re = t, P === 0 && Se(_e)), re !== t ? (L = b, b = Be()) : (d = b, b = t)) : (d = b, b = t), b === t))) {
      if (b = d, e.substr(d, 2) === s ? (V = s, d += 2) : (V = t, P === 0 && Se(ye)), V !== t) {
        if (re = [], he.test(e.charAt(d)) ? (O = e.charAt(d), d++) : (O = t, P === 0 && Se(ee)), O !== t)
          for (; O !== t; )
            re.push(O), he.test(e.charAt(d)) ? (O = e.charAt(d), d++) : (O = t, P === 0 && Se(ee));
        else
          re = t;
        re !== t ? (e.charCodeAt(d) === 125 ? (O = a, d++) : (O = t, P === 0 && Se(Ie)), O !== t ? (L = b, b = bt()) : (d = b, b = t)) : (d = b, b = t);
      } else
        d = b, b = t;
      b === t && (b = d, e.substr(d, 2) === s ? (V = s, d += 2) : (V = t, P === 0 && Se(ye)), V !== t && (L = b, V = Ut()), b = V, b === t && (b = d, e.charCodeAt(d) === 92 ? (V = u, d++) : (V = t, P === 0 && Se(me)), V !== t ? (e.substr(d, 2) === s ? (re = s, d += 2) : (re = t, P === 0 && Se(ye)), re !== t ? (L = b, b = Tt(re)) : (d = b, b = t)) : (d = b, b = t), b === t && (b = d, e.charCodeAt(d) === 92 ? (V = u, d++) : (V = t, P === 0 && Se(me)), V !== t ? (e.length > d ? (re = e.charAt(d), d++) : (re = t, P === 0 && Se(_e)), re !== t ? (L = b, b = ir(re)) : (d = b, b = t)) : (d = b, b = t), b === t && (b = d, e.charCodeAt(d) === 92 ? (V = u, d++) : (V = t, P === 0 && Se(me)), V !== t && (L = b, V = De()), b = V))));
    }
    return b;
  }
  function C() {
    var b, V, re, O, Ve, ve, qt, Yt, Yr, Pr, Hr;
    return b = d, V = S(), V !== t ? (re = d, O = Kt(), e.charCodeAt(d) === 63 ? (Ve = c, d++) : (Ve = t, P === 0 && Se(ce)), Ve !== t ? (ve = Kt(), qt = C(), qt !== t ? (Yt = Kt(), e.charCodeAt(d) === 58 ? (Yr = f, d++) : (Yr = t, P === 0 && Se(te)), Yr !== t ? (Pr = Kt(), Hr = C(), Hr !== t ? (O = [O, Ve, ve, qt, Yt, Yr, Pr, Hr], re = O) : (d = re, re = t)) : (d = re, re = t)) : (d = re, re = t)) : (d = re, re = t), re === t && (re = null), L = b, b = jt(V, re)) : (d = b, b = t), b;
  }
  function S() {
    var b, V, re, O, Ve, ve, qt;
    return b = d, V = ae(), V !== t ? (re = d, O = Kt(), e.substr(d, 2) === _ ? (Ve = _, d += 2) : (Ve = t, P === 0 && Se(we)), Ve !== t ? (ve = Kt(), qt = C(), qt !== t ? (O = [O, Ve, ve, qt], re = O) : (d = re, re = t)) : (d = re, re = t), re === t && (re = null), L = b, b = sr(V, re)) : (d = b, b = t), b;
  }
  function ae() {
    var b, V, re, O, Ve, ve, qt, Yt;
    if (b = d, V = R(), V !== t) {
      for (re = [], O = d, Ve = Kt(), e.substr(d, 2) === h ? (ve = h, d += 2) : (ve = t, P === 0 && Se(Ue)), ve !== t ? (qt = Kt(), Yt = R(), Yt !== t ? (Ve = [Ve, ve, qt, Yt], O = Ve) : (d = O, O = t)) : (d = O, O = t); O !== t; )
        re.push(O), O = d, Ve = Kt(), e.substr(d, 2) === h ? (ve = h, d += 2) : (ve = t, P === 0 && Se(Ue)), ve !== t ? (qt = Kt(), Yt = R(), Yt !== t ? (Ve = [Ve, ve, qt, Yt], O = Ve) : (d = O, O = t)) : (d = O, O = t);
      L = b, b = rr(V, re);
    } else
      d = b, b = t;
    return b;
  }
  function R() {
    var b, V, re, O, Ve, ve, qt, Yt;
    if (b = d, V = tt(), V !== t) {
      for (re = [], O = d, Ve = Kt(), e.substr(d, 2) === m ? (ve = m, d += 2) : (ve = t, P === 0 && Se(Ke)), ve !== t ? (qt = Kt(), Yt = tt(), Yt !== t ? (Ve = [Ve, ve, qt, Yt], O = Ve) : (d = O, O = t)) : (d = O, O = t); O !== t; )
        re.push(O), O = d, Ve = Kt(), e.substr(d, 2) === m ? (ve = m, d += 2) : (ve = t, P === 0 && Se(Ke)), ve !== t ? (qt = Kt(), Yt = tt(), Yt !== t ? (Ve = [Ve, ve, qt, Yt], O = Ve) : (d = O, O = t)) : (d = O, O = t);
      L = b, b = nr(V, re);
    } else
      d = b, b = t;
    return b;
  }
  function tt() {
    var b, V, re, O, Ve, ve, qt, Yt;
    if (b = d, V = Me(), V !== t) {
      for (re = [], O = d, Ve = Kt(), e.substr(d, 2) === p ? (ve = p, d += 2) : (ve = t, P === 0 && Se($)), ve === t && (e.substr(d, 2) === w ? (ve = w, d += 2) : (ve = t, P === 0 && Se(Oe))), ve !== t ? (qt = Kt(), Yt = Me(), Yt !== t ? (Ve = [Ve, ve, qt, Yt], O = Ve) : (d = O, O = t)) : (d = O, O = t); O !== t; )
        re.push(O), O = d, Ve = Kt(), e.substr(d, 2) === p ? (ve = p, d += 2) : (ve = t, P === 0 && Se($)), ve === t && (e.substr(d, 2) === w ? (ve = w, d += 2) : (ve = t, P === 0 && Se(Oe))), ve !== t ? (qt = Kt(), Yt = Me(), Yt !== t ? (Ve = [Ve, ve, qt, Yt], O = Ve) : (d = O, O = t)) : (d = O, O = t);
      L = b, b = fr(V, re);
    } else
      d = b, b = t;
    return b;
  }
  function Me() {
    var b, V, re, O, Ve, ve, qt, Yt;
    if (b = d, V = xt(), V !== t) {
      for (re = [], O = d, Ve = Kt(), e.substr(d, 2) === k ? (ve = k, d += 2) : (ve = t, P === 0 && Se(Ne)), ve === t && (e.charCodeAt(d) === 62 ? (ve = N, d++) : (ve = t, P === 0 && Se(ot)), ve === t && (e.substr(d, 2) === B ? (ve = B, d += 2) : (ve = t, P === 0 && Se(ct)), ve === t && (e.charCodeAt(d) === 60 ? (ve = z, d++) : (ve = t, P === 0 && Se(rt))))), ve !== t ? (qt = Kt(), Yt = xt(), Yt !== t ? (Ve = [Ve, ve, qt, Yt], O = Ve) : (d = O, O = t)) : (d = O, O = t); O !== t; )
        re.push(O), O = d, Ve = Kt(), e.substr(d, 2) === k ? (ve = k, d += 2) : (ve = t, P === 0 && Se(Ne)), ve === t && (e.charCodeAt(d) === 62 ? (ve = N, d++) : (ve = t, P === 0 && Se(ot)), ve === t && (e.substr(d, 2) === B ? (ve = B, d += 2) : (ve = t, P === 0 && Se(ct)), ve === t && (e.charCodeAt(d) === 60 ? (ve = z, d++) : (ve = t, P === 0 && Se(rt))))), ve !== t ? (qt = Kt(), Yt = xt(), Yt !== t ? (Ve = [Ve, ve, qt, Yt], O = Ve) : (d = O, O = t)) : (d = O, O = t);
      L = b, b = wr(V, re);
    } else
      d = b, b = t;
    return b;
  }
  function xt() {
    var b, V, re, O, Ve, ve, qt, Yt;
    if (b = d, V = Dt(), V !== t) {
      for (re = [], O = d, Ve = Kt(), e.charCodeAt(d) === 43 ? (ve = oe, d++) : (ve = t, P === 0 && Se(kt)), ve === t && (e.charCodeAt(d) === 45 ? (ve = fe, d++) : (ve = t, P === 0 && Se(it))), ve !== t ? (qt = Kt(), Yt = Dt(), Yt !== t ? (Ve = [Ve, ve, qt, Yt], O = Ve) : (d = O, O = t)) : (d = O, O = t); O !== t; )
        re.push(O), O = d, Ve = Kt(), e.charCodeAt(d) === 43 ? (ve = oe, d++) : (ve = t, P === 0 && Se(kt)), ve === t && (e.charCodeAt(d) === 45 ? (ve = fe, d++) : (ve = t, P === 0 && Se(it))), ve !== t ? (qt = Kt(), Yt = Dt(), Yt !== t ? (Ve = [Ve, ve, qt, Yt], O = Ve) : (d = O, O = t)) : (d = O, O = t);
      L = b, b = Nt(V, re);
    } else
      d = b, b = t;
    return b;
  }
  function Dt() {
    var b, V, re, O, Ve, ve, qt, Yt;
    if (b = d, V = H(), V !== t) {
      for (re = [], O = d, Ve = Kt(), e.charCodeAt(d) === 47 ? (ve = T, d++) : (ve = t, P === 0 && Se(Mt)), ve === t && (e.charCodeAt(d) === 42 ? (ve = Y, d++) : (ve = t, P === 0 && Se(ft)), ve === t && (e.charCodeAt(d) === 37 ? (ve = le, d++) : (ve = t, P === 0 && Se(Z)))), ve !== t ? (qt = Kt(), Yt = H(), Yt !== t ? (Ve = [Ve, ve, qt, Yt], O = Ve) : (d = O, O = t)) : (d = O, O = t); O !== t; )
        re.push(O), O = d, Ve = Kt(), e.charCodeAt(d) === 47 ? (ve = T, d++) : (ve = t, P === 0 && Se(Mt)), ve === t && (e.charCodeAt(d) === 42 ? (ve = Y, d++) : (ve = t, P === 0 && Se(ft)), ve === t && (e.charCodeAt(d) === 37 ? (ve = le, d++) : (ve = t, P === 0 && Se(Z)))), ve !== t ? (qt = Kt(), Yt = H(), Yt !== t ? (Ve = [Ve, ve, qt, Yt], O = Ve) : (d = O, O = t)) : (d = O, O = t);
      L = b, b = br(V, re);
    } else
      d = b, b = t;
    return b;
  }
  function H() {
    var b, V, re, O;
    return b = d, V = d, P++, e.charCodeAt(d) === 45 ? (re = fe, d++) : (re = t, P === 0 && Se(it)), P--, re !== t ? (d = V, V = void 0) : V = t, V !== t ? (re = Hn(), re !== t ? (L = b, b = Rt(re)) : (d = b, b = t)) : (d = b, b = t), b === t && (b = d, V = d, P++, e.charCodeAt(d) === 45 ? (re = fe, d++) : (re = t, P === 0 && Se(it)), P--, re !== t ? (d = V, V = void 0) : V = t, V !== t ? (re = Ln(), re !== t ? (L = b, b = mt(re)) : (d = b, b = t)) : (d = b, b = t), b === t && (b = d, e.charCodeAt(d) === 33 ? (V = A, d++) : (V = t, P === 0 && Se(de)), V === t && (e.charCodeAt(d) === 43 ? (V = oe, d++) : (V = t, P === 0 && Se(kt)), V === t && (e.charCodeAt(d) === 45 ? (V = fe, d++) : (V = t, P === 0 && Se(it)))), V !== t ? (re = Kt(), O = Xt(), O === t && (O = dt()), O !== t ? (L = b, b = er(V, O)) : (d = b, b = t)) : (d = b, b = t), b === t && (b = dt()))), b;
  }
  function Xt() {
    var b, V;
    return b = d, e.charCodeAt(d) === 43 ? (V = oe, d++) : (V = t, P === 0 && Se(kt)), V === t && (e.charCodeAt(d) === 45 ? (V = fe, d++) : (V = t, P === 0 && Se(it))), V !== t && (L = b, V = se()), b = V, b;
  }
  function dt() {
    var b, V, re, O, Ve, ve, qt, Yt, Yr, Pr, Hr, mo, ro, no, $n;
    if (b = d, V = jr(), V !== t) {
      for (re = [], O = d, Ve = Kt(), e.charCodeAt(d) === 46 ? (ve = D, d++) : (ve = t, P === 0 && Se(lt)), ve !== t ? (qt = Kt(), Yt = Mn(), Yt !== t ? (Yr = Kt(), Pr = d, e.charCodeAt(d) === 40 ? (Hr = M, d++) : (Hr = t, P === 0 && Se(ze)), Hr !== t ? (mo = Kt(), ro = Mr(), ro !== t ? (no = Kt(), e.charCodeAt(d) === 41 ? ($n = U, d++) : ($n = t, P === 0 && Se(F)), $n !== t ? (Hr = [Hr, mo, ro, no, $n], Pr = Hr) : (d = Pr, Pr = t)) : (d = Pr, Pr = t)) : (d = Pr, Pr = t), Pr === t && (Pr = null), Ve = [Ve, ve, qt, Yt, Yr, Pr], O = Ve) : (d = O, O = t)) : (d = O, O = t); O !== t; )
        re.push(O), O = d, Ve = Kt(), e.charCodeAt(d) === 46 ? (ve = D, d++) : (ve = t, P === 0 && Se(lt)), ve !== t ? (qt = Kt(), Yt = Mn(), Yt !== t ? (Yr = Kt(), Pr = d, e.charCodeAt(d) === 40 ? (Hr = M, d++) : (Hr = t, P === 0 && Se(ze)), Hr !== t ? (mo = Kt(), ro = Mr(), ro !== t ? (no = Kt(), e.charCodeAt(d) === 41 ? ($n = U, d++) : ($n = t, P === 0 && Se(F)), $n !== t ? (Hr = [Hr, mo, ro, no, $n], Pr = Hr) : (d = Pr, Pr = t)) : (d = Pr, Pr = t)) : (d = Pr, Pr = t), Pr === t && (Pr = null), Ve = [Ve, ve, qt, Yt, Yr, Pr], O = Ve) : (d = O, O = t)) : (d = O, O = t);
      L = b, b = kr(V, re);
    } else
      d = b, b = t;
    return b;
  }
  function jr() {
    var b, V, re, O, Ve;
    return b = d, V = Mn(), V !== t ? (Kt(), e.charCodeAt(d) === 40 ? (re = M, d++) : (re = t, P === 0 && Se(ze)), re !== t ? (Kt(), O = Mr(), O !== t ? (Kt(), e.charCodeAt(d) === 41 ? (Ve = U, d++) : (Ve = t, P === 0 && Se(F)), Ve !== t ? (L = b, b = vr(V, O)) : (d = b, b = t)) : (d = b, b = t)) : (d = b, b = t)) : (d = b, b = t), b === t && (b = wn()), b;
  }
  function Mr() {
    var b, V, re, O, Ve, ve;
    if (b = d, V = C(), V !== t) {
      for (re = [], O = d, Kt(), e.charCodeAt(d) === 44 ? (Ve = q, d++) : (Ve = t, P === 0 && Se(Et)), Ve !== t ? (Kt(), ve = C(), ve !== t ? O = ve : (d = O, O = t)) : (d = O, O = t); O !== t; )
        re.push(O), O = d, Kt(), e.charCodeAt(d) === 44 ? (Ve = q, d++) : (Ve = t, P === 0 && Se(Et)), Ve !== t ? (Kt(), ve = C(), ve !== t ? O = ve : (d = O, O = t)) : (d = O, O = t);
      L = b, b = Ct(V, re);
    } else
      d = b, b = t;
    return b === t && (b = Kt()), b;
  }
  function wn() {
    var b, V, re, O;
    return b = lo(), b === t && (b = $r(), b === t && (b = Hn(), b === t && (b = Ln(), b === t && (b = d, e.charCodeAt(d) === 40 ? (V = M, d++) : (V = t, P === 0 && Se(ze)), V !== t ? (Kt(), re = C(), re !== t ? (Kt(), e.charCodeAt(d) === 41 ? (O = U, d++) : (O = t, P === 0 && Se(F)), O !== t ? (L = b, b = Dr(re)) : (d = b, b = t)) : (d = b, b = t)) : (d = b, b = t))))), b;
  }
  function $r() {
    var b, V, re, O;
    return P++, b = d, e.charCodeAt(d) === 39 ? (V = be, d++) : (V = t, P === 0 && Se(Vt)), V !== t ? (re = Gr(), e.charCodeAt(d) === 39 ? (O = be, d++) : (O = t, P === 0 && Se(Vt)), O !== t ? (L = b, b = Br(re)) : (d = b, b = t)) : (d = b, b = t), P--, b === t && (V = t, P === 0 && Se(ut)), b;
  }
  function Gr() {
    var b, V, re;
    for (b = d, V = [], re = on(); re !== t; )
      V.push(re), re = on();
    return L = b, V = ar(V), b = V, b;
  }
  function on() {
    var b, V, re, O, Ve;
    if (b = d, e.substr(d, 2) === s ? (V = s, d += 2) : (V = t, P === 0 && Se(ye)), V !== t ? (re = Kt(), O = C(), O !== t ? (Kt(), e.charCodeAt(d) === 125 ? (Ve = a, d++) : (Ve = t, P === 0 && Se(Ie)), Ve !== t ? (L = b, b = at(O)) : (d = b, b = t)) : (d = b, b = t)) : (d = b, b = t), b === t && (b = d, e.substr(d, 3) === l ? (V = l, d += 3) : (V = t, P === 0 && Se(pe)), V !== t && (L = b, V = St()), b = V, b === t && (b = d, V = d, P++, e.charCodeAt(d) === 92 ? (re = u, d++) : (re = t, P === 0 && Se(me)), re === t && (e.charCodeAt(d) === 39 ? (re = be, d++) : (re = t, P === 0 && Se(Vt)), re === t && (e.substr(d, 2) === s ? (re = s, d += 2) : (re = t, P === 0 && Se(ye)))), P--, re === t ? V = void 0 : (d = V, V = t), V !== t ? (e.length > d ? (re = e.charAt(d), d++) : (re = t, P === 0 && Se(_e)), re !== t ? (L = b, b = Gt()) : (d = b, b = t)) : (d = b, b = t), b === t))) {
      if (b = d, e.substr(d, 2) === s ? (V = s, d += 2) : (V = t, P === 0 && Se(ye)), V !== t) {
        if (re = [], Fe.test(e.charAt(d)) ? (O = e.charAt(d), d++) : (O = t, P === 0 && Se(It)), O !== t)
          for (; O !== t; )
            re.push(O), Fe.test(e.charAt(d)) ? (O = e.charAt(d), d++) : (O = t, P === 0 && Se(It));
        else
          re = t;
        re !== t ? (e.charCodeAt(d) === 125 ? (O = a, d++) : (O = t, P === 0 && Se(Ie)), O !== t ? (L = b, b = Qt()) : (d = b, b = t)) : (d = b, b = t);
      } else
        d = b, b = t;
      b === t && (b = d, e.substr(d, 2) === s ? (V = s, d += 2) : (V = t, P === 0 && Se(ye)), V !== t && (L = b, V = $e()), b = V, b === t && (b = d, e.charCodeAt(d) === 92 ? (V = u, d++) : (V = t, P === 0 && Se(me)), V !== t ? (e.substr(d, 2) === s ? (re = s, d += 2) : (re = t, P === 0 && Se(ye)), re !== t ? (L = b, b = pt(re)) : (d = b, b = t)) : (d = b, b = t), b === t && (b = d, e.charCodeAt(d) === 92 ? (V = u, d++) : (V = t, P === 0 && Se(me)), V !== t ? (e.length > d ? (re = e.charAt(d), d++) : (re = t, P === 0 && Se(_e)), re !== t ? (L = b, b = ue(re)) : (d = b, b = t)) : (d = b, b = t), b === t && (b = d, e.charCodeAt(d) === 92 ? (V = u, d++) : (V = t, P === 0 && Se(me)), V !== t && (L = b, V = vt()), b = V))));
    }
    return b;
  }
  function Ln() {
    var b, V, re;
    if (P++, b = d, e.charCodeAt(d) === 45 ? d++ : P === 0 && Se(it), V = [], x.test(e.charAt(d)) ? (re = e.charAt(d), d++) : (re = t, P === 0 && Se(Q)), re !== t)
      for (; re !== t; )
        V.push(re), x.test(e.charAt(d)) ? (re = e.charAt(d), d++) : (re = t, P === 0 && Se(Q));
    else
      V = t;
    return V !== t ? (L = b, b = tr()) : (d = b, b = t), P--, b === t && P === 0 && Se(nt), b;
  }
  function Hn() {
    var b, V, re, O, Ve, ve, qt, Yt, Yr;
    for (P++, b = d, e.charCodeAt(d) === 45 ? d++ : P === 0 && Se(it), V = [], x.test(e.charAt(d)) ? (re = e.charAt(d), d++) : (re = t, P === 0 && Se(Q)); re !== t; )
      V.push(re), x.test(e.charAt(d)) ? (re = e.charAt(d), d++) : (re = t, P === 0 && Se(Q));
    if (e.charCodeAt(d) === 46 ? (re = D, d++) : (re = t, P === 0 && Se(lt)), re !== t) {
      if (O = [], x.test(e.charAt(d)) ? (Ve = e.charAt(d), d++) : (Ve = t, P === 0 && Se(Q)), Ve !== t)
        for (; Ve !== t; )
          O.push(Ve), x.test(e.charAt(d)) ? (Ve = e.charAt(d), d++) : (Ve = t, P === 0 && Se(Q));
      else
        O = t;
      if (O !== t) {
        if (Ve = d, e.charCodeAt(d) === 101 ? (ve = Ae, d++) : (ve = t, P === 0 && Se(Pt)), ve === t && (e.charCodeAt(d) === 69 ? (ve = Ce, d++) : (ve = t, P === 0 && Se($t))), ve !== t) {
          if (e.charCodeAt(d) === 43 ? (qt = oe, d++) : (qt = t, P === 0 && Se(kt)), qt === t && (e.charCodeAt(d) === 45 ? (qt = fe, d++) : (qt = t, P === 0 && Se(it))), qt === t && (qt = null), Yt = [], x.test(e.charAt(d)) ? (Yr = e.charAt(d), d++) : (Yr = t, P === 0 && Se(Q)), Yr !== t)
            for (; Yr !== t; )
              Yt.push(Yr), x.test(e.charAt(d)) ? (Yr = e.charAt(d), d++) : (Yr = t, P === 0 && Se(Q));
          else
            Yt = t;
          Yt !== t ? (ve = [ve, qt, Yt], Ve = ve) : (d = Ve, Ve = t);
        } else
          d = Ve, Ve = t;
        Ve === t && (Ve = null), L = b, b = Ht();
      } else
        d = b, b = t;
    } else
      d = b, b = t;
    if (b === t) {
      if (b = d, e.charCodeAt(d) === 45 ? d++ : P === 0 && Se(it), V = [], x.test(e.charAt(d)) ? (re = e.charAt(d), d++) : (re = t, P === 0 && Se(Q)), re !== t)
        for (; re !== t; )
          V.push(re), x.test(e.charAt(d)) ? (re = e.charAt(d), d++) : (re = t, P === 0 && Se(Q));
      else
        V = t;
      if (V !== t)
        if (e.charCodeAt(d) === 101 ? (re = Ae, d++) : (re = t, P === 0 && Se(Pt)), re === t && (e.charCodeAt(d) === 69 ? (re = Ce, d++) : (re = t, P === 0 && Se($t))), re !== t) {
          if (e.charCodeAt(d) === 43 ? (O = oe, d++) : (O = t, P === 0 && Se(kt)), O === t && (e.charCodeAt(d) === 45 ? (O = fe, d++) : (O = t, P === 0 && Se(it))), O === t && (O = null), Ve = [], x.test(e.charAt(d)) ? (ve = e.charAt(d), d++) : (ve = t, P === 0 && Se(Q)), ve !== t)
            for (; ve !== t; )
              Ve.push(ve), x.test(e.charAt(d)) ? (ve = e.charAt(d), d++) : (ve = t, P === 0 && Se(Q));
          else
            Ve = t;
          Ve !== t ? (L = b, b = yr()) : (d = b, b = t);
        } else
          d = b, b = t;
      else
        d = b, b = t;
    }
    return P--, b === t && P === 0 && Se(At), b;
  }
  function lo() {
    var b, V, re, O, Ve, ve, qt, Yt, Yr, Pr, Hr;
    if (b = d, Je.test(e.charAt(d)) ? (V = e.charAt(d), d++) : (V = t, P === 0 && Se(Zt)), V !== t) {
      if (re = [], O = [], Ye.test(e.charAt(d)) ? (Ve = e.charAt(d), d++) : (Ve = t, P === 0 && Se(Ee)), Ve !== t)
        for (; Ve !== t; )
          O.push(Ve), Ye.test(e.charAt(d)) ? (Ve = e.charAt(d), d++) : (Ve = t, P === 0 && Se(Ee));
      else
        O = t;
      for (O === t && (O = d, e.charCodeAt(d) === 46 ? (Ve = D, d++) : (Ve = t, P === 0 && Se(lt)), Ve !== t ? (ve = d, P++, qt = d, Yt = Kt(), Yr = Mn(), Yr !== t ? (Pr = Kt(), e.charCodeAt(d) === 40 ? (Hr = M, d++) : (Hr = t, P === 0 && Se(ze)), Hr !== t ? (Yt = [Yt, Yr, Pr, Hr], qt = Yt) : (d = qt, qt = t)) : (d = qt, qt = t), P--, qt === t ? ve = void 0 : (d = ve, ve = t), ve !== t ? (Ve = [Ve, ve], O = Ve) : (d = O, O = t)) : (d = O, O = t)); O !== t; ) {
        if (re.push(O), O = [], Ye.test(e.charAt(d)) ? (Ve = e.charAt(d), d++) : (Ve = t, P === 0 && Se(Ee)), Ve !== t)
          for (; Ve !== t; )
            O.push(Ve), Ye.test(e.charAt(d)) ? (Ve = e.charAt(d), d++) : (Ve = t, P === 0 && Se(Ee));
        else
          O = t;
        O === t && (O = d, e.charCodeAt(d) === 46 ? (Ve = D, d++) : (Ve = t, P === 0 && Se(lt)), Ve !== t ? (ve = d, P++, qt = d, Yt = Kt(), Yr = Mn(), Yr !== t ? (Pr = Kt(), e.charCodeAt(d) === 40 ? (Hr = M, d++) : (Hr = t, P === 0 && Se(ze)), Hr !== t ? (Yt = [Yt, Yr, Pr, Hr], qt = Yt) : (d = qt, qt = t)) : (d = qt, qt = t), P--, qt === t ? ve = void 0 : (d = ve, ve = t), ve !== t ? (Ve = [Ve, ve], O = Ve) : (d = O, O = t)) : (d = O, O = t));
      }
      L = b, b = j();
    } else
      d = b, b = t;
    return b;
  }
  function Mn() {
    var b, V, re, O;
    if (b = d, Je.test(e.charAt(d)) ? (V = e.charAt(d), d++) : (V = t, P === 0 && Se(Zt)), V !== t) {
      for (re = [], Ye.test(e.charAt(d)) ? (O = e.charAt(d), d++) : (O = t, P === 0 && Se(Ee)); O !== t; )
        re.push(O), Ye.test(e.charAt(d)) ? (O = e.charAt(d), d++) : (O = t, P === 0 && Se(Ee));
      L = b, b = ie();
    } else
      d = b, b = t;
    return b;
  }
  function Kt() {
    var b, V;
    for (P++, b = [], Xe.test(e.charAt(d)) ? (V = e.charAt(d), d++) : (V = t, P === 0 && Se(ht)); V !== t; )
      b.push(V), Xe.test(e.charAt(d)) ? (V = e.charAt(d), d++) : (V = t, P === 0 && Se(ht));
    return P--, V = t, P === 0 && Se(He), b;
  }
  if (zt = i(), zt !== t && d === e.length)
    return zt;
  throw zt !== t && d < e.length && Se(Er()), qr(
    ke,
    We < e.length ? e.charAt(We) : null,
    We < e.length ? yn(We, We + 1) : yn(We, We)
  );
}
const i3 = 128, Ti = /* @__PURE__ */ new Map();
let Uf;
function u_(e) {
  return Ti.get(e);
}
function c_(e, r) {
  e !== Uf && (Ti.delete(e), Ti.size >= i3 && Ti.delete(Ti.keys().next().value), Ti.set(e, r), Uf = e);
}
const Gf = /* @__PURE__ */ new Set([
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
function s3(e) {
  if (!(typeof e.name == "string" && e.name))
    throw new Error("Incorrect function name");
  if (!(typeof e.body == "string" && e.body))
    throw new Error("Incorrect function body");
  if (!(e.return_type && Gf.has(e.return_type)))
    throw new Error("Incorrect function return_type");
  if (!Array.isArray(e.arguments))
    throw new Error("Incorrect function arguments");
  const r = /* @__PURE__ */ new Set();
  e.arguments.forEach((t) => {
    if (!(typeof t.name == "string" && t.name))
      throw new Error("Incorrect argument name");
    if (!(t.type && Gf.has(t.type)))
      throw new Error("Incorrect argument type");
    if (r.has(t.name))
      throw new Error("Duplicate argument name");
    r.add(t.name);
  });
}
function l3(e) {
  let r;
  return {
    name: e.name,
    args: e.arguments.map((t) => ({
      type: t.type
    })),
    cb(t, ...n) {
      r || (r = u_(e.body) || a_(e.body, {
        startRule: "JsonStringContents"
      }), c_(e.body, r));
      const o = /* @__PURE__ */ new Map();
      n.forEach((a, l) => {
        if (a.type === "function")
          throw new Error("Incorrect argument type: function");
        const u = As(e.arguments[l].name, a.type, a.value);
        o.set(u.getName(), u);
      });
      const i = Ca(o, t.customFunctions, t.store, r, {
        weekStartDay: t.weekStartDay
      });
      i.warnings.forEach((a) => {
        t.warnings.push(a);
      });
      const s = i.result;
      if (s.type === "error")
        throw new Error(s.value);
      if (s.type !== e.return_type)
        throw new Error("Incorrect function return_type");
      return s;
    }
  };
}
function a3(e, r) {
  if (!e)
    return r || void 0;
  if (!r)
    return e || void 0;
  const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set();
  for (const [o, i] of r) {
    for (const s of i) {
      const a = uf(o, s);
      n.add(a);
    }
    t.set(o, i);
  }
  for (const [o, i] of e)
    for (const s of i) {
      const a = uf(o, s);
      if (!n.has(a)) {
        n.add(a);
        const l = t.get(o) || [];
        l.push(s), t.set(o, l);
      }
    }
  return t;
}
function u3(e) {
  if (!e)
    return X(new Error("Missing object"));
  const r = e.card, t = e.templates || {};
  if (!r)
    return X(new Error("Missing card"));
  if (!r.states || !r.states.length)
    return X(new Error("Missing states"));
  for (const n in t)
    if (t.hasOwnProperty(n) && n in xd)
      return X(new Error("Template name collision"), {
        additional: {
          templateName: n
        }
      });
  for (let n = 0; n < r.states.length; ++n) {
    if (!r.states[n].div)
      return X(new Error("Missing state div"), {
        additional: {
          stateId: r.states[n].state_id
        }
      });
    if (typeof r.states[n].state_id != "number")
      return X(new Error("Missing state_id"), {
        additional: {
          index: n
        }
      });
  }
  return null;
}
function c3(e) {
  return [...new Set(e)];
}
class f_ {
  constructor(r, t) {
    Vr(this, "ast");
    Vr(this, "expr");
    this.ast = r, this.expr = t;
  }
  /**
   * Applies variables into ast
   * @param variables
   * @param logError
   */
  apply({
    variables: r,
    customFunctions: t,
    logError: n,
    store: o,
    weekStartDay: i,
    keepComplex: s
  }) {
    var l;
    let a;
    try {
      a = Ca(r, t, o, this.ast, {
        weekStartDay: i
      }), a.warnings.forEach(n);
      const u = a.result;
      if (u.type === "error")
        return n(X(new Error("Expression execution error"), {
          additional: {
            message: u.value,
            expression: this.expr
          }
        })), {
          result: void 0,
          usedVars: a.usedVars
        };
      const c = u.value;
      if (c instanceof Date)
        return {
          result: Wd(c),
          usedVars: a.usedVars
        };
      if (u.type === "boolean")
        return {
          result: !!c,
          usedVars: a.usedVars
        };
      if (u.type === "color") {
        const f = po(String(c));
        if (f)
          return {
            result: Si(f),
            usedVars: a.usedVars
          };
        n(X(new Error("Expression execution error")));
      }
      if (u.type === "integer")
        return c > x0 || c < $0 ? (n(X(new Error("Expression result is out of 32-bit int range"))), {
          result: void 0,
          usedVars: a.usedVars
        }) : {
          result: Number(c),
          usedVars: a.usedVars
        };
      if (u.type === "function")
        return {
          result: `<${((l = u.value[0]) == null ? void 0 : l.name) || "Function"}>`,
          usedVars: a.usedVars
        };
      if (!s && (u.type === "array" || u.type === "dict"))
        try {
          return {
            result: JSON.stringify(c),
            usedVars: a.usedVars
          };
        } catch {
          return n(X(new Error(`Failed to stringify ${u.type}`))), {
            result: `<${u.type}>`,
            usedVars: a.usedVars
          };
        }
      return {
        result: c,
        usedVars: a.usedVars
      };
    } catch {
      return n(X(new Error("Expression execution error"), {
        additional: {
          expression: this.expr
        }
      })), {
        result: void 0,
        usedVars: a == null ? void 0 : a.usedVars
      };
    }
  }
}
function f3(e) {
  return e.indexOf("@{") > -1 || e.indexOf("\\") > -1;
}
function oa(e, r, t, n) {
  if (e)
    if (typeof e == "string") {
      if (f3(e)) {
        r.hasExpression = !0;
        try {
          const o = u_(e) || a_(e, {
            startRule: "JsonStringContents"
          });
          c_(e, o);
          const i = o1(o);
          return r.vars.push(...i), new f_(o, e);
        } catch {
          t(X(new Error("Unable to parse expression"), {
            additional: {
              expression: e
            }
          }));
          return;
        }
      }
    } else {
      if (Array.isArray(e) && n > 0)
        return e.map((o) => oa(o, r, t, n - 1));
      if (typeof e == "object" && n > 0) {
        const o = {};
        for (const i in e)
          o[i] = oa(e[i], r, t, n - 1);
        return o;
      }
    }
  return e;
}
function ia(e, r) {
  if (e) {
    if (e instanceof f_)
      return e.apply(r);
    if (Array.isArray(e)) {
      let t;
      return {
        result: e.map((o) => {
          const i = ia(o, r);
          if (i.usedVars) {
            t || (t = /* @__PURE__ */ new Set());
            for (const s of i.usedVars)
              t.add(s);
          }
          return i.result;
        }),
        usedVars: t
      };
    } else if (typeof e == "object") {
      const t = {};
      let n;
      for (const o in e) {
        const i = ia(e[o], r);
        if (t[o] = i.result, i.usedVars) {
          n || (n = /* @__PURE__ */ new Set());
          for (const s of i.usedVars)
            n.add(s);
        }
      }
      return {
        result: t,
        usedVars: n
      };
    }
  }
  return {
    result: e
  };
}
function Jf(e, r, t, n, o = 1 / 0) {
  const i = {
    vars: [],
    hasExpression: !1
  }, s = oa(e, i, r, o);
  return {
    vars: c3(i.vars),
    hasExpression: i.hasExpression,
    applyVars(l, u, c) {
      return ia(s, {
        variables: l,
        customFunctions: u,
        logError: r,
        store: t,
        weekStartDay: n,
        keepComplex: c
      });
    }
  };
}
class d_ {
  constructor() {
    Vr(this, "_vars", /* @__PURE__ */ new Map());
    Vr(this, "_lastAddedVariable", Io(""));
  }
  setVariable(r) {
    const t = r.getName();
    if (this._vars.has(t))
      throw new Error("Variable with the same name already exist");
    this._vars.set(t, r), this._lastAddedVariable.set(t);
  }
  getVariable(r) {
    return this._vars.get(r);
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
function d4() {
  return new d_();
}
const d3 = ["start", "stop", "pause", "resume", "cancel", "reset"], _3 = new Set(d3);
class p3 {
  constructor(r) {
    Vr(this, "timers", /* @__PURE__ */ new Map());
    Vr(this, "logError");
    Vr(this, "applyVars");
    Vr(this, "hasVariableWithType");
    Vr(this, "setVariableValue");
    Vr(this, "execAnyActions");
    Vr(this, "visibilityHandler");
    Vr(this, "awaitActions", []);
    this.logError = r.logError, this.applyVars = r.applyVars, this.hasVariableWithType = r.hasVariableWithType, this.setVariableValue = r.setVariableValue, this.execAnyActions = r.execAnyActions, this.visibilityHandler = () => {
      document.visibilityState === "visible" ? (this.awaitActions.forEach(({ id: t, action: n }) => {
        this.execTimerAction(t, n);
      }), this.awaitActions = [], this.unholdAll()) : this.holdAll();
    }, document.addEventListener("visibilitychange", this.visibilityHandler);
  }
  destroy() {
    document.removeEventListener("visibilitychange", this.visibilityHandler);
    for (const [r, t] of this.timers)
      this.stopTimerTimeouts(t);
  }
  createTimer(r) {
    if (!(r != null && r.id)) {
      this.logError(X(new Error("Missing timer id")));
      return;
    }
    if (!(r.duration || r.tick_interval && (r.value_variable || r.tick_actions))) {
      this.logError(X(new Error("Misconfigured timer"), {
        additional: {
          id: r.id
        }
      }));
      return;
    }
    this.timers.set(r.id, {
      state: "stopped",
      definition: r
    });
  }
  execTimerAction(r, t) {
    if (!r || !t || !this.timers.has(r) || !_3.has(t)) {
      this.logError(X(new Error("Incorrect timer action"), {
        additional: {
          id: r,
          action: t
        }
      }));
      return;
    }
    const n = t;
    if (document.visibilityState !== "visible") {
      this.awaitActions.push({
        id: r,
        action: n
      });
      return;
    }
    const o = this.timers.get(r);
    this[n](o);
  }
  stopTimerTimeouts(r) {
    r.durationTimeout && (clearTimeout(r.durationTimeout), r.durationTimeout = void 0), r.tickTimeout && (clearTimeout(r.tickTimeout), r.tickTimeout = void 0);
  }
  async tickOrUnholdAction(r) {
    const t = performance.now(), n = (r.durationPassed || 0) + t - (r.durationStarted || 0);
    r.duration && n > r.duration || (this.updateVariable(r, n), await this.callActions(r, "tick"), r.tickCount !== void 0 && ++r.tickCount);
  }
  startOrResume(r) {
    r.state = "running", r.hold = !1, r.durationStarted = performance.now();
    const t = r.duration;
    t && (r.durationTimeout = window.setTimeout(async () => {
      this.updateVariable(r, t), r.tickCountPredict && r.tickCount !== void 0 && r.tickCount < r.tickCountPredict && await this.callActions(r, "tick"), this.stop(r);
    }, Math.max(0, t - (r.durationPassed || 0))));
    const n = r.tick;
    if (n) {
      const o = () => {
        const i = r.tickStarted = performance.now(), s = Math.max(0, n - (r.tickPassed || 0));
        r.tickTimeout = window.setTimeout(async () => {
          await this.tickOrUnholdAction(r), r.tickPassed = (performance.now() - i - s) % n, r.state === "running" && o();
        }, s);
      };
      o();
    }
  }
  applyVarsInt(r) {
    let t = this.applyVars(r);
    if (typeof t == "string") {
      if (t === r)
        return;
      t = Number(t);
    }
    if (!(t === void 0 || Number.isNaN(t) || Math.round(t) !== t))
      return t;
  }
  start(r) {
    if (r.state === "running") {
      this.logError(X(new Error("The timer is already running")));
      return;
    } else if (r.state === "paused") {
      this.logError(X(new Error("The timer is paused")));
      return;
    }
    const t = r.definition.value_variable;
    if (t && !this.hasVariableWithType(t, "integer")) {
      this.logError(X(new Error("Cannot find variable"), {
        additional: {
          name: t
        }
      }));
      return;
    }
    if (t && this.setVariableValue(t, 0), r.definition.duration !== void 0 && (r.duration = this.applyVarsInt(r.definition.duration), r.duration === void 0 || r.duration < 0)) {
      this.logError(X(new Error("Incorrect timer properties"), {
        additional: {
          id: r.definition.id
        }
      }));
      return;
    }
    if (r.definition.tick_interval !== void 0 && (r.tick = this.applyVarsInt(r.definition.tick_interval), r.tick === void 0 || r.tick <= 0)) {
      this.logError(X(new Error("Incorrect timer properties"), {
        additional: {
          id: r.definition.id
        }
      }));
      return;
    }
    r.duration !== void 0 && r.tick !== void 0 && (r.tickCount = 0, r.tickCountPredict = Math.floor(r.duration / r.tick)), this.startOrResume(r);
  }
  stop(r) {
    if (r.state === "stopped") {
      this.logError(X(new Error("The timer has already been stopped")));
      return;
    }
    r.state = "stopped", r.durationPassed = 0, r.tickPassed = 0, this.stopTimerTimeouts(r), this.callActions(r, "end");
  }
  pause(r) {
    if (r.state === "stopped") {
      this.logError(X(new Error("The timer has already been stopped")));
      return;
    } else if (r.state === "paused") {
      this.logError(X(new Error("The timer has already been paused")));
      return;
    }
    r.state = "paused", this.stopTimerTimeouts(r);
    const t = performance.now();
    r.durationStarted && (r.durationPassed = (r.durationPassed || 0) + t - r.durationStarted), r.tickStarted && (r.tickPassed = (r.tickPassed || 0) + t - r.tickStarted);
    const n = r.definition.value_variable;
    n && r.durationPassed && this.setVariableValue(n, Math.round(r.durationPassed));
  }
  resume(r) {
    if (r.state === "stopped") {
      this.logError(X(new Error("The timer has already been stopped")));
      return;
    } else if (r.state === "running") {
      this.logError(X(new Error("The timer is already running")));
      return;
    }
    this.startOrResume(r);
  }
  cancel(r) {
    r.state !== "stopped" && (r.state = "stopped", r.durationPassed = 0, r.tickPassed = 0, this.stopTimerTimeouts(r));
  }
  reset(r) {
    this.cancel(r), this.start(r);
  }
  updateVariable(r, t) {
    const n = r.definition.value_variable;
    n && this.setVariableValue(n, Math.round(t));
  }
  async callActions(r, t) {
    const n = r.definition[t === "end" ? "end_actions" : "tick_actions"];
    if (n)
      return this.execAnyActions(n, {
        processUrls: !1
      });
  }
  holdAll() {
    for (const [r, t] of this.timers)
      t.state === "running" && (t.hold = !0, this.stopTimerTimeouts(t));
  }
  async unholdAll() {
    for (const [r, t] of this.timers)
      if (t.state === "running" && t.hold) {
        const n = performance.now();
        t.durationStarted && (t.durationPassed = (t.durationPassed || 0) + n - t.durationStarted), t.tickStarted && (t.tickPassed = (t.tickPassed || 0) + n - t.tickStarted), t.tick && await this.tickOrUnholdAction(t), this.startOrResume(t);
      }
  }
}
function g3(e, r, t, n) {
  const { variable_name: o, index: i, value: s } = n;
  if (!s || typeof i != "number" && i !== void 0) {
    t(X(new Error("Incorrect array_insert_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Ea(e, r, t, n, (a) => {
    const l = a.getValue();
    if (typeof i == "number" && (i < 0 || i > l.length))
      t(X(new Error(`Index out of bound for mutation ${n.type}`), {
        additional: {
          name: o,
          index: i,
          length: l.length
        }
      }));
    else if (!s.type)
      t(X(new Error("Incorrect value type"), {
        additional: {
          name: o
        }
      }));
    else {
      const u = l.slice(), c = bl(s);
      typeof i == "number" ? u.splice(i, 0, c) : u.push(c), a.setValue(u);
    }
  });
}
function h3(e, r, t, n) {
  const { variable_name: o, index: i } = n;
  if (typeof i != "number") {
    t(X(new Error("Incorrect array_remove_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Ea(e, r, t, n, (s) => {
    const a = s.getValue();
    if (typeof i == "number" && (i < 0 || i >= a.length))
      t(X(new Error(`Index out of bound for mutation ${n.type}`), {
        additional: {
          name: o,
          index: i,
          length: a.length
        }
      }));
    else {
      const l = a.slice();
      l.splice(i, 1), s.setValue(l);
    }
  });
}
function m3(e, r, t, n) {
  const { variable_name: o, index: i, value: s } = n;
  if (!s || typeof i != "number") {
    t(X(new Error("Incorrect array_set_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Ea(e, r, t, n, (a) => {
    const l = a.getValue();
    if (typeof i == "number" && (i < 0 || i >= l.length))
      t(X(new Error(`Index out of bound for mutation ${n.type}`), {
        additional: {
          name: o,
          index: i,
          length: l.length
        }
      }));
    else if (!s.type)
      t(X(new Error("Incorrect value type"), {
        additional: {
          name: o
        }
      }));
    else {
      const u = l.slice();
      u[i] = bl(s), a.setValue(u);
    }
  });
}
function Ea(e, r, t, n, o) {
  const { variable_name: i } = n;
  if (!i) {
    t(X(new Error(`Incorrect ${n.type} action`), {
      additional: {
        name: i
      }
    }));
    return;
  }
  const s = (e == null ? void 0 : e.getVariable(i)) || r.get(i);
  if (!s) {
    t(X(new Error("Cannot find variable"), {
      additional: {
        name: i
      }
    }));
    return;
  }
  const a = s.getType();
  a === "array" ? o(s) : t(X(new Error("Trying to insert value into the non-array"), {
    additional: {
      name: i,
      type: a
    }
  }));
}
function b3(e, r, t, n) {
  const { variable_name: o, key: i, value: s } = n;
  if (typeof i != "string") {
    t(X(new Error("Incorrect dict_set_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  if (!o) {
    t(X(new Error(`Incorrect ${n.type} action`), {
      additional: {
        name: o
      }
    }));
    return;
  }
  s && !s.type && t(X(new Error("Incorrect value type"), {
    additional: {
      name: o
    }
  }));
  const a = (e == null ? void 0 : e.getVariable(o)) || r.get(o);
  if (!a) {
    t(X(new Error("Cannot find variable"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  const l = a.getType();
  if (l === "dict") {
    const c = { ...a.getValue() };
    s ? c[i] = bl(s) : delete c[i], a.setValue(c);
  } else
    t(X(new Error("Trying to set value into the non-dict"), {
      additional: {
        name: o,
        type: l
      }
    }));
}
function y3(e, r) {
  if (!(r.content && (r.content.type === "text" || r.content.type === "url") && typeof r.content.value == "string")) {
    e(X(new Error("Incorrect action"), {
      additional: {
        action: r
      }
    }));
    return;
  }
  if (!(typeof navigator < "u" && "clipboard" in navigator && navigator.clipboard && "writeText" in navigator.clipboard && typeof navigator.clipboard.writeText == "function")) {
    e(X(new Error("Clipboard is unavailable"), {
      additional: {
        action: r
      }
    }));
    return;
  }
  navigator.clipboard.writeText(r.content.value).catch((t) => {
    e(X(new Error("Failed to copy to the clipboard"), {
      additional: {
        originalError: String(t)
      }
    }));
  });
}
function w3(e) {
  if (e === "normal" || e === "reverse" || e === "alternate" || e === "alternate_reverse")
    return e;
}
function k3(e, r, t, n) {
  var B, z, oe, fe;
  const o = Rn(e.duration, 0);
  if (!o || e.type !== "color_animator" && e.type !== "number_animator")
    return;
  const i = (B = e.start_value_typed ? e.start_value_typed.value : e.start_value) != null ? B : r.getValue(), s = e.end_value_typed ? e.end_value_typed.value : e.end_value;
  if (i === void 0 || s === void 0 || e.type === "color_animator" && (typeof i != "string" && i !== void 0 || typeof s != "string") || e.type === "number_animator" && (typeof i != "number" && i !== void 0 || typeof s != "number"))
    return;
  const a = e.type === "color_animator" && po(i), l = e.type === "color_animator" && po(s);
  if (e.type === "color_animator" && (!a || !l))
    return;
  const u = nn(e.start_delay, 0), c = ba(e.interpolator || "linear"), f = w3(e.direction) || "normal", _ = ((z = e.repeat_count) == null ? void 0 : z.type) === "infinity" ? 1 / 0 : ((oe = e.repeat_count) == null ? void 0 : oe.type) === "fixed" ? nn((fe = e.repeat_count) == null ? void 0 : fe.value, 1) : 1;
  let h = 0, m = performance.now();
  const p = _ === 1 / 0 ? 1 / 0 : _ * o + u;
  function w(T) {
    if (e.type === "color_animator") {
      if (!a || !l)
        throw new Error("Missing start/end value");
      return Si({
        a: Fo(Uo(a.a, l.a, T), 0, 255),
        r: Fo(Uo(a.r, l.r, T), 0, 255),
        g: Fo(Uo(a.g, l.g, T), 0, 255),
        b: Fo(Uo(a.b, l.b, T), 0, 255)
      });
    }
    return Uo(i, s, T);
  }
  function k(T) {
    const Y = T - m;
    if (m = T, h += Y, h >= u) {
      let le = Math.floor((h - u) / o), A = (h - u - le * o) / o;
      le >= _ && (le = _ - 1, A = 1);
      let D;
      f === "normal" || f === "alternate" && le % 2 === 0 || f === "alternate_reverse" && le % 2 === 1 ? D = "normal" : D = "reverse", D === "reverse" && (A = 1 - A);
      const M = w(c(A));
      r.setValue(M);
    }
    h < p ? N = requestAnimationFrame(k) : (t(), n(e.end_actions));
  }
  let N = requestAnimationFrame(k);
  return {
    stop() {
      cancelAnimationFrame(N), n(e.cancel_actions), n(e.end_actions);
    }
  };
}
function v3(e) {
  let r = e;
  for (; r && !r.isTooltipRoot; )
    r = r.parent;
  return r;
}
function j3(e) {
  let r = e;
  for (; r != null && r.parent && r.json.type !== "state" && !r.isRootState && !r.isTooltipRoot; )
    r = r.parent;
  return r;
}
function el(e) {
  return !!(e && typeof e == "string");
}
const C3 = /* @__PURE__ */ new Set([
  "get",
  "post",
  "put",
  "patch",
  "delete",
  "head",
  "options"
]);
function E3(e) {
  return e === void 0 || C3.has(e);
}
function A3(e) {
  return e === void 0 || Array.isArray(e) && e.every((r) => el(r.name) && el(r.value));
}
function S3(e) {
  var r, t, n;
  return el(e.container_id) && el((r = e.request) == null ? void 0 : r.url) && E3((t = e.request) == null ? void 0 : t.method) && A3((n = e.request) == null ? void 0 : n.headers);
}
function V3(e, r, t, n) {
  const { variable_name: o, path: i, value: s } = n;
  if (!(s != null && s.value)) {
    t(X(new Error("Missing value for an action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  if (typeof i != "string" || !i || i.charAt(0) === "/" || i.charAt(i.length - 1) === "/") {
    t(X(new Error(`Value '${i}' for key 'path' is not valid`), {
      additional: {
        name: o
      }
    }));
    return;
  }
  if (!o) {
    t(X(new Error(`Incorrect ${n.type} action`), {
      additional: {
        name: o
      }
    }));
    return;
  }
  const a = (e == null ? void 0 : e.getVariable(o)) || r.get(o);
  if (!a) {
    t(X(new Error("Cannot find variable"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  const l = a.getType();
  if (l === "dict" || l === "array") {
    const u = a.getValue(), c = i.replace(/\/+/g, "/");
    if (c === "/") {
      t(X(new Error(`Value '${i}' for key 'path' is not valid`), {
        additional: {
          name: o,
          type: l,
          path: i
        }
      }));
      return;
    }
    const f = c.split("/"), _ = l === "array" ? u.slice() : { ...u };
    let h = _;
    for (let m = 0; m < f.length; ++m) {
      const p = f[m];
      if (!p) {
        t(X(new Error("Path is empty"), {
          additional: {
            name: o,
            type: l,
            path: i
          }
        }));
        return;
      }
      if (!h || typeof h != "object") {
        t(X(new Error(`Element with path '${f.slice(0, m).join("/")}' is not ${h === void 0 ? "found" : "a structure"}`), {
          additional: {
            name: o,
            type: l,
            path: i
          }
        }));
        return;
      }
      if (Array.isArray(h)) {
        const w = Number(p);
        if (Number.isNaN(w)) {
          t(X(new Error(`Unable to use '${p}' as array index`), {
            additional: {
              name: o,
              type: l,
              path: i
            }
          }));
          return;
        }
        if (m + 1 === f.length && (w < 0 || w > h.length)) {
          t(X(new Error(`Position '${w}' is out of array bounds`), {
            additional: {
              name: o,
              type: l,
              path: i
            }
          }));
          return;
        }
      }
      m + 1 < f.length && (h = h[p]);
    }
    h[f[f.length - 1]] = bl(s), a.setValue(_);
  } else
    t(X(new Error("Action requires array or dictionary variable"), {
      additional: {
        name: o,
        type: l
      }
    }));
}
function Kf(e, { delay: r = 0, duration: t = 400, easing: n = Pd, x: o = 0, y: i = 0, opacity: s = 0 } = {}) {
  const a = getComputedStyle(e), l = +a.opacity, u = a.transform === "none" ? "" : a.transform, c = l * (1 - s), [f, _] = Ia(o), [h, m] = Ia(i);
  return {
    delay: r,
    duration: t,
    easing: n,
    css: (p, w) => `
			transform: ${u} translate(${(1 - p) * f}${_}, ${(1 - p) * h}${m});
			opacity: ${l - c * w}`
  };
}
const F3 = "appkit-outer", D3 = "appkit-root__clickable", I3 = "undefined", T3 = "appkit-tooltip", M3 = "appkit-tooltip_visible", P3 = "appkit-tooltip_modal", N3 = "appkit-tooltip__inner", z3 = "appkit-tooltip__overlay", L3 = "appkit-tooltip__substrate", vo = {
  outer: F3,
  root__clickable: D3,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  root__selectable: I3,
  tooltip: T3,
  tooltip_visible: M3,
  tooltip_modal: P3,
  tooltip__inner: N3,
  tooltip__overlay: z3,
  tooltip__substrate: L3
}, __ = 300, p_ = 0;
function sa(e) {
  return Math.max(...e.map(
    (r) => (Number(r.duration) || __) + (Number(r.start_delay) || p_)
  ));
}
function tl(e, {
  animations: r,
  direction: t
}) {
  if (!r)
    return {};
  const n = ss(r), o = sa(n);
  return n.some((s) => s.name === "no_animation") ? {} : {
    duration: Oi() ? 0 : o,
    css: (s) => {
      const a = s * o, l = n.map((p) => {
        var oe, fe, T, Y, le, A, D, M, U, q, be, Ae;
        const w = Number(p.start_delay) || p_, k = Number(p.duration) || __, N = t === "in" ? Math.max(0, Math.min(1, (a - w) / k)) : Math.max(0, Math.min(1, (a - (o - k) + w) / k)), z = (ba(p.interpolator || "ease_in_out") || gl)(N);
        if (p.name === "fade") {
          const Ce = t === "in" ? (oe = p.start_value) != null ? oe : 0 : (fe = p.end_value) != null ? fe : 0, he = t === "in" ? (T = p.end_value) != null ? T : 1 : (Y = p.start_value) != null ? Y : 1;
          return {
            active: z > 0 && z < 1,
            opacity: (1 - z) * Ce + z * he
          };
        } else if (p.name === "translate") {
          const Ce = -(t === "in" ? (le = p.start_value) != null ? le : 10 : (A = p.end_value) != null ? A : 10), he = -(t === "in" ? (D = p.end_value) != null ? D : 0 : (M = p.start_value) != null ? M : 0);
          return {
            active: z > 0 && z < 1,
            translate: `translateY(${(1 - z) * Ce + z * he}${t === "in" && p.start_value !== void 0 || t === "out" && p.end_value !== void 0 ? "%" : "px"})`
          };
        } else if (p.name === "scale") {
          const Ce = t === "in" ? (U = p.start_value) != null ? U : 0 : (q = p.end_value) != null ? q : 0, he = t === "in" ? (be = p.end_value) != null ? be : 1 : (Ae = p.start_value) != null ? Ae : 1;
          return {
            active: z > 0 && z < 1,
            scale: `scale(${(1 - z) * Ce + z * he})`
          };
        }
        return {};
      }), u = l.map((p) => p.opacity).filter((p) => p !== void 0).reduce((p, w) => p * w, 1), c = l.map((p) => p.translate).filter((p) => p !== void 0).join(" "), f = l.map((p) => p.scale).filter((p) => p !== void 0).join(" "), _ = l.filter((p) => p.active).map((p) => p.scale).filter((p) => p !== void 0), h = _.length ? _[_.length - 1] : f;
      return `transform:${[c, h].filter(Boolean).join(" ") || "none"};opacity:${u}`;
    }
  };
}
const ts = typeof window < "u" && "HTMLDialogElement" in window, { document: O3, window: B3 } = Po;
function R3(e) {
  let r, t, n, o, i, s, a, l, u, c, f, _ = (
    /*visible*/
    e[1] && /*modal*/
    e[3] && qf(e)
  ), h = (
    /*substrateComponentContext*/
    e[14] && Yf(e)
  );
  return i = new xn({
    props: {
      componentContext: (
        /*componentContext*/
        e[2]
      )
    }
  }), {
    c() {
      _ && _.c(), r = _r(), h && h.c(), t = _r(), n = Pe("div"), o = Pe("div"), Wt(i.$$.fragment), g(o, "class", vo.tooltip__inner), g(n, "class", s = gt(
        "tooltip",
        vo,
        /*mods*/
        e[15]
      ) + " " + /*$isDesktop*/
      (e[21] ? Ar.root_platform_desktop : "")), g(n, "role", "dialog"), g(
        n,
        "aria-modal",
        /*modal*/
        e[3]
      ), I(
        n,
        "top",
        /*tooltipY*/
        e[11]
      ), I(
        n,
        "left",
        /*tooltipX*/
        e[10]
      ), I(
        n,
        "width",
        /*tooltipWidth*/
        e[12]
      ), I(
        n,
        "height",
        /*tooltipHeight*/
        e[13]
      );
    },
    m(m, p) {
      _ && _.m(m, p), K(m, r, p), h && h.m(m, p), K(m, t, p), K(m, n, p), wt(n, o), Ot(i, o, null), e[40](o), e[41](n), u = !0, c || (f = [
        Qe(
          n,
          "keydown",
          /*onKeyDown*/
          e[26]
        ),
        Qe(
          n,
          "introstart",
          /*onIntroStart*/
          e[28]
        ),
        Qe(
          n,
          "introend",
          /*onIntroEnd*/
          e[29]
        ),
        Qe(
          n,
          "outrostart",
          /*onOutroStart*/
          e[30]
        )
      ], c = !0);
    },
    p(m, p) {
      e = m, /*visible*/
      e[1] && /*modal*/
      e[3] ? _ ? _.p(e, p) : (_ = qf(e), _.c(), _.m(r.parentNode, r)) : _ && (_.d(1), _ = null), /*substrateComponentContext*/
      e[14] ? h ? (h.p(e, p), p[0] & /*substrateComponentContext*/
      16384 && W(h, 1)) : (h = Yf(e), h.c(), W(h, 1), h.m(t.parentNode, t)) : h && (pr(), ne(h, 1, 1, () => {
        h = null;
      }), gr());
      const w = {};
      p[0] & /*componentContext*/
      4 && (w.componentContext = /*componentContext*/
      e[2]), i.$set(w), (!u || p[0] & /*mods, $isDesktop*/
      2129920 && s !== (s = gt(
        "tooltip",
        vo,
        /*mods*/
        e[15]
      ) + " " + /*$isDesktop*/
      (e[21] ? Ar.root_platform_desktop : ""))) && g(n, "class", s), (!u || p[0] & /*modal*/
      8) && g(
        n,
        "aria-modal",
        /*modal*/
        e[3]
      ), p[0] & /*tooltipY*/
      2048 && I(
        n,
        "top",
        /*tooltipY*/
        e[11]
      ), p[0] & /*tooltipX*/
      1024 && I(
        n,
        "left",
        /*tooltipX*/
        e[10]
      ), p[0] & /*tooltipWidth*/
      4096 && I(
        n,
        "width",
        /*tooltipWidth*/
        e[12]
      ), p[0] & /*tooltipHeight*/
      8192 && I(
        n,
        "height",
        /*tooltipHeight*/
        e[13]
      );
    },
    i(m) {
      u || (W(h), W(i.$$.fragment, m), _o(() => {
        u && (l && l.end(1), a = ul(n, tl, {
          animations: (
            /*$animationIn*/
            e[5] || Hi
          ),
          direction: "in"
        }), a.start());
      }), u = !0);
    },
    o(m) {
      ne(h), ne(i.$$.fragment, m), a && a.invalidate(), l = hd(n, tl, {
        animations: (
          /*$animationOut*/
          e[4] || Hi
        ),
        direction: "out"
      }), u = !1;
    },
    d(m) {
      m && (J(r), J(t), J(n)), _ && _.d(m), h && h.d(m), Bt(i), e[40](null), e[41](null), m && l && l.end(), c = !1, Rr(f);
    }
  };
}
function H3(e) {
  let r, t, n, o, i, s, a, l, u, c, f, _ = (
    /*substrateComponentContext*/
    e[14] && Xf(e)
  ), h = (
    /*visible*/
    e[1] && /*modal*/
    e[3] && /*data*/
    e[0].background_accessibility_description && Zf(e)
  );
  return i = new xn({
    props: {
      componentContext: (
        /*componentContext*/
        e[2]
      )
    }
  }), {
    c() {
      _ && _.c(), r = _r(), t = Pe("dialog"), h && h.c(), n = _r(), o = Pe("div"), Wt(i.$$.fragment), g(o, "class", vo.tooltip__inner), g(t, "class", s = gt(
        "tooltip",
        vo,
        /*mods*/
        e[15]
      ) + " " + /*$isDesktop*/
      (e[21] ? Ar.root_platform_desktop : "")), I(
        t,
        "top",
        /*tooltipY*/
        e[11]
      ), I(
        t,
        "left",
        /*tooltipX*/
        e[10]
      ), I(
        t,
        "width",
        /*tooltipWidth*/
        e[12]
      ), I(
        t,
        "height",
        /*tooltipHeight*/
        e[13]
      );
    },
    m(m, p) {
      _ && _.m(m, p), K(m, r, p), K(m, t, p), h && h.m(t, null), wt(t, n), wt(t, o), Ot(i, o, null), e[36](o), e[37](t), u = !0, c || (f = [
        Qe(
          t,
          "keydown",
          /*onKeyDown*/
          e[26]
        ),
        Qe(
          t,
          "close",
          /*onClose*/
          e[27]
        ),
        Qe(
          t,
          "cancel",
          /*onClose*/
          e[27]
        ),
        Qe(
          t,
          "click",
          /*onOutClick*/
          e[23]
        ),
        Qe(
          t,
          "introstart",
          /*onIntroStart*/
          e[28]
        ),
        Qe(
          t,
          "introend",
          /*onIntroEnd*/
          e[29]
        ),
        Qe(
          t,
          "outrostart",
          /*onOutroStart*/
          e[30]
        )
      ], c = !0);
    },
    p(m, p) {
      e = m, /*substrateComponentContext*/
      e[14] ? _ ? (_.p(e, p), p[0] & /*substrateComponentContext*/
      16384 && W(_, 1)) : (_ = Xf(e), _.c(), W(_, 1), _.m(r.parentNode, r)) : _ && (pr(), ne(_, 1, 1, () => {
        _ = null;
      }), gr()), /*visible*/
      e[1] && /*modal*/
      e[3] && /*data*/
      e[0].background_accessibility_description ? h ? h.p(e, p) : (h = Zf(e), h.c(), h.m(t, n)) : h && (h.d(1), h = null);
      const w = {};
      p[0] & /*componentContext*/
      4 && (w.componentContext = /*componentContext*/
      e[2]), i.$set(w), (!u || p[0] & /*mods, $isDesktop*/
      2129920 && s !== (s = gt(
        "tooltip",
        vo,
        /*mods*/
        e[15]
      ) + " " + /*$isDesktop*/
      (e[21] ? Ar.root_platform_desktop : ""))) && g(t, "class", s), p[0] & /*tooltipY*/
      2048 && I(
        t,
        "top",
        /*tooltipY*/
        e[11]
      ), p[0] & /*tooltipX*/
      1024 && I(
        t,
        "left",
        /*tooltipX*/
        e[10]
      ), p[0] & /*tooltipWidth*/
      4096 && I(
        t,
        "width",
        /*tooltipWidth*/
        e[12]
      ), p[0] & /*tooltipHeight*/
      8192 && I(
        t,
        "height",
        /*tooltipHeight*/
        e[13]
      );
    },
    i(m) {
      u || (W(_), W(i.$$.fragment, m), _o(() => {
        u && (l && l.end(1), a = ul(t, tl, {
          animations: (
            /*$animationIn*/
            e[5] || Hi
          ),
          direction: "in"
        }), a.start());
      }), u = !0);
    },
    o(m) {
      ne(_), ne(i.$$.fragment, m), a && a.invalidate(), l = hd(t, tl, {
        animations: (
          /*$animationOut*/
          e[4] || Hi
        ),
        direction: "out"
      }), u = !1;
    },
    d(m) {
      m && (J(r), J(t)), _ && _.d(m), h && h.d(), Bt(i), e[36](null), e[37](null), m && l && l.end(), c = !1, Rr(f);
    }
  };
}
function qf(e) {
  let r;
  function t(i, s) {
    return (
      /*data*/
      i[0].background_accessibility_description ? U3 : W3
    );
  }
  let n = t(e), o = n(e);
  return {
    c() {
      o.c(), r = or();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = t(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && J(r), o.d(i);
    }
  };
}
function W3(e) {
  let r, t, n;
  return {
    c() {
      r = Pe("div"), g(r, "class", vo.tooltip__overlay);
    },
    m(o, i) {
      K(o, r, i), t || (n = Qe(
        r,
        "click",
        /*closeByOutside*/
        e[24]
      ), t = !0);
    },
    p: v,
    d(o) {
      o && J(r), t = !1, n();
    }
  };
}
function U3(e) {
  let r, t, n, o;
  return {
    c() {
      r = Pe("button"), g(r, "class", vo.tooltip__overlay), g(r, "type", "button"), g(r, "aria-label", t = /*data*/
      e[0].background_accessibility_description);
    },
    m(i, s) {
      K(i, r, s), n || (o = Qe(
        r,
        "click",
        /*closeByOutside*/
        e[24]
      ), n = !0);
    },
    p(i, s) {
      s[0] & /*data*/
      1 && t !== (t = /*data*/
      i[0].background_accessibility_description) && g(r, "aria-label", t);
    },
    d(i) {
      i && J(r), n = !1, o();
    }
  };
}
function Yf(e) {
  let r, t, n, o, i;
  return t = new xn({
    props: {
      componentContext: (
        /*substrateComponentContext*/
        e[14]
      )
    }
  }), {
    c() {
      r = Pe("div"), Wt(t.$$.fragment), n = _r(), o = Pe("div"), g(r, "class", vo.tooltip__substrate);
    },
    m(s, a) {
      K(s, r, a), Ot(t, r, null), e[38](r), K(s, n, a), K(s, o, a), e[39](o), i = !0;
    },
    p(s, a) {
      const l = {};
      a[0] & /*substrateComponentContext*/
      16384 && (l.componentContext = /*substrateComponentContext*/
      s[14]), t.$set(l);
    },
    i(s) {
      i || (W(t.$$.fragment, s), i = !0);
    },
    o(s) {
      ne(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && (J(r), J(n), J(o)), Bt(t), e[38](null), e[39](null);
    }
  };
}
function Xf(e) {
  let r, t, n, o, i;
  return t = new xn({
    props: {
      componentContext: (
        /*substrateComponentContext*/
        e[14]
      )
    }
  }), {
    c() {
      r = Pe("div"), Wt(t.$$.fragment), n = _r(), o = Pe("div"), g(r, "class", vo.tooltip__substrate);
    },
    m(s, a) {
      K(s, r, a), Ot(t, r, null), e[34](r), K(s, n, a), K(s, o, a), e[35](o), i = !0;
    },
    p(s, a) {
      const l = {};
      a[0] & /*substrateComponentContext*/
      16384 && (l.componentContext = /*substrateComponentContext*/
      s[14]), t.$set(l);
    },
    i(s) {
      i || (W(t.$$.fragment, s), i = !0);
    },
    o(s) {
      ne(t.$$.fragment, s), i = !1;
    },
    d(s) {
      s && (J(r), J(n), J(o)), Bt(t), e[34](null), e[35](null);
    }
  };
}
function Zf(e) {
  let r, t, n, o;
  return {
    c() {
      r = Pe("button"), g(r, "class", vo.tooltip__overlay), g(r, "type", "button"), g(r, "aria-label", t = /*data*/
      e[0].background_accessibility_description);
    },
    m(i, s) {
      K(i, r, s), n || (o = Qe(
        r,
        "click",
        /*closeByOutside*/
        e[24]
      ), n = !0);
    },
    p(i, s) {
      s[0] & /*data*/
      1 && t !== (t = /*data*/
      i[0].background_accessibility_description) && g(r, "aria-label", t);
    },
    d(i) {
      i && J(r), n = !1, o();
    }
  };
}
function G3(e) {
  let r, t, n, o, i, s, a;
  const l = [H3, R3], u = [];
  function c(f, _) {
    return ts ? 0 : 1;
  }
  return t = c(), n = u[t] = l[t](e), {
    c() {
      r = _r(), n.c(), o = or();
    },
    m(f, _) {
      K(f, r, _), u[t].m(f, _), K(f, o, _), i = !0, s || (a = [
        Qe(
          B3,
          "resize",
          /*onWindowResize*/
          e[25]
        ),
        Qe(
          O3.body,
          "click",
          /*onOutClick*/
          e[23],
          !0
        )
      ], s = !0);
    },
    p(f, _) {
      n.p(f, _);
    },
    i(f) {
      i || (W(n), i = !0);
    },
    o(f) {
      ne(n), i = !1;
    },
    d(f) {
      f && (J(r), J(o)), u[t].d(f), s = !1, Rr(a);
    }
  };
}
const Hi = {
  name: "set",
  items: [{ name: "translate" }, { name: "fade" }]
};
let qn = [];
function J3(e, r, t) {
  let n, o, i, s, a, l, u, c, f, _ = v, h = () => (_(), _ = E(i, (F) => t(46, f = F)), i), m, p = v, w = () => (p(), p = E(o, (F) => t(47, m = F)), o), k, N = v, B = () => (N(), N = E(n, (F) => t(48, k = F)), n), z, oe = v, fe = () => (oe(), oe = E(a, (F) => t(4, z = F)), a), T, Y = v, le = () => (Y(), Y = E(s, (F) => t(5, T = F)), s), A;
  e.$$.on_destroy.push(() => _()), e.$$.on_destroy.push(() => p()), e.$$.on_destroy.push(() => N()), e.$$.on_destroy.push(() => oe()), e.$$.on_destroy.push(() => Y());
  let { ownerNode: D } = r, { data: M } = r, { internalId: U } = r, { parentComponentContext: q } = r;
  const be = Tr(Xr), Ae = be.isDesktop;
  mn(e, Ae, (F) => t(21, A = F));
  const Ce = Date.now();
  let he, Fe, x, Je, Ye = !1, Xe = "", ye = "", Ie = "", pe = "", me = null, _e, ee, ce = !0, te = null;
  function we() {
    var ht, Te;
    if (!he || !D)
      return;
    const F = he.parentElement;
    if (!F)
      return;
    const Et = he.style.cssText;
    t(6, he.style.cssText += ";transform: none !important", he);
    const ut = D.getBoundingClientRect(), Vt = he.getBoundingClientRect(), It = F.getBoundingClientRect();
    t(6, he.style.cssText = Et, he);
    let nt = 0, Q = 0, At = null, Pt = null, $t = 0, Zt = 0;
    const Ee = (ht = _e == null ? void 0 : _e.json) == null ? void 0 : ht.width, He = (Te = _e == null ? void 0 : _e.json) == null ? void 0 : Te.height;
    if (!Ee || Ee.type === "match_parent" ? $t = At = window.innerWidth : Ee.type === "fixed" && Ee.value ? $t = At = Ee.value : $t = Vt.width, (He == null ? void 0 : He.type) === "match_parent" ? Zt = Pt = window.innerHeight : (He == null ? void 0 : He.type) === "fixed" && He.value ? Zt = Pt = He.value : Zt = Vt.height, k === "left" || k === "bottom-left" || k === "top-left")
      nt = ut.left - $t;
    else if (k === "top" || k === "bottom" || k === "center")
      nt = (ut.left + ut.right) / 2 - $t / 2;
    else if (k === "right" || k === "bottom-right" || k === "top-right")
      nt = ut.right;
    else
      return;
    if (k === "top" || k === "top-left" || k === "top-right")
      Q = ut.top - Zt;
    else if (k === "left" || k === "right" || k === "center")
      Q = (ut.top + ut.bottom) / 2 - Zt / 2;
    else if (k === "bottom-left" || k === "bottom" || k === "bottom-right")
      Q = ut.bottom;
    else
      return;
    ts && ce || (nt -= It.left, Q -= It.top), nt += m || 0, Q += f || 0, t(10, Xe = `${nt}px`), t(11, ye = `${Q}px`), t(12, Ie = At !== null ? `${At}px` : ""), t(13, pe = Pt !== null ? `${Pt}px` : ""), t(1, Ye = !0), At === null || Pt === null ? typeof ResizeObserver < "u" && !me && (me = new ResizeObserver(() => {
      requestAnimationFrame(we);
    }), me.observe(he)) : me == null || me.disconnect();
  }
  function Ue(F) {
    if (qn.length && qn[qn.length - 1] !== he)
      return;
    const Et = F.composedPath();
    Date.now() - Ce < 100 || Et.includes(he) && !(ts && Et[0] === he) || Ke();
  }
  function Ke(F) {
    F == null || F.stopPropagation(), F == null || F.preventDefault(), _e.getJsonWithVars(M.close_by_tap_outside) !== !1 && (qn = qn.filter((Et) => Et !== he), be.onTooltipClose(U)), M.tap_outside_actions && _e.execAnyActions(M.tap_outside_actions, { processUrls: !0 });
  }
  function $() {
    we();
  }
  function Oe(F) {
    qn.length && qn[qn.length - 1] !== he || F.key === "Escape" && !F.ctrlKey && !F.shiftKey && !F.altKey && !F.metaKey && (qn = qn.filter((Et) => Et !== he), be.onTooltipClose(U));
  }
  function Ne(F) {
    qn = qn.filter((Et) => Et !== he), be.onTooltipClose(U), F.preventDefault();
  }
  function ot() {
    x && x.animate({ opacity: [0, 1] }, {
      duration: l,
      easing: "ease-in-out"
    });
  }
  function ct() {
    x && he.insertBefore(x, Fe);
  }
  function rt() {
    Je != null && Je.parentElement && x && (Je.parentElement.insertBefore(x, Je), x.animate({ opacity: [1, 0] }, {
      duration: u,
      easing: "ease-in-out"
    }));
  }
  Qn(() => {
    try {
      te = document.activeElement;
    } catch {
    }
    if (be.tooltipRoot) {
      const F = window.getComputedStyle(he);
      t(6, he.style.fontSize = F.fontSize, he), t(6, he.style.fontFamily = F.fontFamily, he), t(6, he.style.lineHeight = F.lineHeight, he), be.tooltipRoot.appendChild(he);
    }
    ts && he && he instanceof HTMLDialogElement && he[ce ? "showModal" : "show"](), ce && qn.push(he);
  }), al(() => {
    Ye || we();
  }), ln(() => {
    if (_e && _e.destroy(), ee && ee.destroy(), me == null || me.disconnect(), qn = qn.filter((F) => F !== he), ce && te && te instanceof HTMLElement) {
      ts && he && he instanceof HTMLDialogElement && he.close();
      try {
        te.focus({ preventScroll: !0 });
      } catch {
      }
    }
  });
  function kt(F) {
    Fr[F ? "unshift" : "push"](() => {
      x = F, t(8, x);
    });
  }
  function it(F) {
    Fr[F ? "unshift" : "push"](() => {
      Je = F, t(9, Je);
    });
  }
  function Mt(F) {
    Fr[F ? "unshift" : "push"](() => {
      Fe = F, t(7, Fe);
    });
  }
  function ft(F) {
    Fr[F ? "unshift" : "push"](() => {
      he = F, t(6, he);
    });
  }
  function Z(F) {
    Fr[F ? "unshift" : "push"](() => {
      x = F, t(8, x);
    });
  }
  function de(F) {
    Fr[F ? "unshift" : "push"](() => {
      Je = F, t(9, Je);
    });
  }
  function lt(F) {
    Fr[F ? "unshift" : "push"](() => {
      Fe = F, t(7, Fe);
    });
  }
  function ze(F) {
    Fr[F ? "unshift" : "push"](() => {
      he = F, t(6, he);
    });
  }
  return e.$$set = (F) => {
    "ownerNode" in F && t(31, D = F.ownerNode), "data" in F && t(0, M = F.data), "internalId" in F && t(32, U = F.internalId), "parentComponentContext" in F && t(33, q = F.parentComponentContext);
  }, e.$$.update = () => {
    var F, Et, ut, Vt, It;
    e.$$.dirty[0] & /*componentContext, data*/
    5 | e.$$.dirty[1] & /*parentComponentContext*/
    4 && (_e && _e.destroy(), t(2, _e = q.produceChildContext(M.div || {}, { isTooltipRoot: !0 })), M.substrate_div && t(14, ee = q.produceChildContext(M.substrate_div, { isTooltipRoot: !0 }))), e.$$.dirty[0] & /*data*/
    1 | e.$$.dirty[1] & /*parentComponentContext*/
    4 && B(t(20, n = q.getDerivedFromVars(M.position))), e.$$.dirty[0] & /*data*/
    1 | e.$$.dirty[1] & /*parentComponentContext*/
    4 && w(t(19, o = q.getDerivedFromVars((Et = (F = M.offset) == null ? void 0 : F.x) == null ? void 0 : Et.value))), e.$$.dirty[0] & /*data*/
    1 | e.$$.dirty[1] & /*parentComponentContext*/
    4 && h(t(18, i = q.getDerivedFromVars((Vt = (ut = M.offset) == null ? void 0 : ut.y) == null ? void 0 : Vt.value))), e.$$.dirty[0] & /*data*/
    1 | e.$$.dirty[1] & /*parentComponentContext*/
    4 && le(t(17, s = q.getDerivedFromVars(M.animation_in))), e.$$.dirty[0] & /*data*/
    1 | e.$$.dirty[1] & /*parentComponentContext*/
    4 && fe(t(16, a = q.getDerivedFromVars(M.animation_out))), e.$$.dirty[0] & /*$animationIn*/
    32 && (l = Oi() ? 0 : sa(ss(T || Hi))), e.$$.dirty[0] & /*$animationOut*/
    16 && (u = Oi() ? 0 : sa(ss(z || Hi))), e.$$.dirty[0] & /*data*/
    1 && (((It = M.mode) == null ? void 0 : It.type) === "non_modal" ? t(3, ce = !1) : t(3, ce = !0)), e.$$.dirty[0] & /*visible, modal*/
    10 && t(15, c = { visible: Ye, modal: ce });
  }, [
    M,
    Ye,
    _e,
    ce,
    z,
    T,
    he,
    Fe,
    x,
    Je,
    Xe,
    ye,
    Ie,
    pe,
    ee,
    c,
    a,
    s,
    i,
    o,
    n,
    A,
    Ae,
    Ue,
    Ke,
    $,
    Oe,
    Ne,
    ot,
    ct,
    rt,
    D,
    U,
    q,
    kt,
    it,
    Mt,
    ft,
    Z,
    de,
    lt,
    ze
  ];
}
class K3 extends Or {
  constructor(r) {
    super(), Lr(
      this,
      r,
      J3,
      G3,
      Sr,
      {
        ownerNode: 31,
        data: 0,
        internalId: 32,
        parentComponentContext: 33
      },
      null,
      [-1, -1]
    );
  }
}
const q3 = "appkit-root_platform_desktop", Y3 = "appkit-menu", X3 = "appkit-menu_visible", Z3 = "appkit-menu__list", Q3 = "appkit-menu__item", Hs = {
  root_platform_desktop: q3,
  menu: Y3,
  menu_visible: X3,
  menu__list: Z3,
  menu__item: Q3
}, { window: Qf } = Po;
function xf(e, r, t) {
  const n = e.slice();
  return n[23] = r[t], n;
}
function x3(e) {
  let r = (
    /*item*/
    e[23].text + ""
  ), t;
  return {
    c() {
      t = Nn(r);
    },
    m(n, o) {
      K(n, t, o);
    },
    p(n, o) {
      o & /*items*/
      1 && r !== (r = /*item*/
      n[23].text + "") && Jn(t, r);
    },
    d(n) {
      n && J(t);
    }
  };
}
function $f(e) {
  let r, t, n, o;
  return t = new fl({
    props: {
      componentContext: (
        /*parentComponentContext*/
        e[1]
      ),
      actions: (
        /*item*/
        e[23].actions || /*item*/
        e[23].action && [
          /*item*/
          e[23].action
        ]
      ),
      cls: Hs.menu__item + " " + /*itemMix*/
      e[10],
      customAction: (
        /*onItemAction*/
        e[14]
      ),
      $$slots: { default: [x3] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      r = Pe("li"), Wt(t.$$.fragment), n = _r();
    },
    m(i, s) {
      K(i, r, s), Ot(t, r, null), wt(r, n), o = !0;
    },
    p(i, s) {
      const a = {};
      s & /*parentComponentContext*/
      2 && (a.componentContext = /*parentComponentContext*/
      i[1]), s & /*items*/
      1 && (a.actions = /*item*/
      i[23].actions || /*item*/
      i[23].action && [
        /*item*/
        i[23].action
      ]), s & /*$$scope, items*/
      67108865 && (a.$$scope = { dirty: s, ctx: i }), t.$set(a);
    },
    i(i) {
      o || (W(t.$$.fragment, i), o = !0);
    },
    o(i) {
      ne(t.$$.fragment, i), o = !1;
    },
    d(i) {
      i && J(r), Bt(t);
    }
  };
}
function $3(e) {
  let r, t, n, o, i, s, a, l = ur(
    /*items*/
    e[0]
  ), u = [];
  for (let f = 0; f < l.length; f += 1)
    u[f] = $f(xf(e, l, f));
  const c = (f) => ne(u[f], 1, 1, () => {
    u[f] = null;
  });
  return {
    c() {
      r = Pe("div"), t = Pe("ul");
      for (let f = 0; f < u.length; f += 1)
        u[f].c();
      g(t, "class", Hs.menu__list), g(r, "class", n = gt(
        "menu",
        Hs,
        /*mods*/
        e[7]
      ) + " " + /*$isDesktop*/
      (e[8] ? Ar.root_platform_desktop : "") + " " + /*popupMix*/
      e[9]), I(
        r,
        "top",
        /*menuY*/
        e[4]
      ), I(
        r,
        "left",
        /*menuX*/
        e[3]
      ), I(
        r,
        "width",
        /*menuWidth*/
        e[5]
      ), I(
        r,
        "height",
        /*menuHeight*/
        e[6]
      );
    },
    m(f, _) {
      K(f, r, _), wt(r, t);
      for (let h = 0; h < u.length; h += 1)
        u[h] && u[h].m(t, null);
      e[17](r), i = !0, s || (a = [
        Qe(
          Qf,
          "click",
          /*onWindowClick*/
          e[12]
        ),
        Qe(
          Qf,
          "resize",
          /*onWindowResize*/
          e[13]
        )
      ], s = !0);
    },
    p(f, [_]) {
      if (_ & /*parentComponentContext, items, itemMix, onItemAction*/
      17411) {
        l = ur(
          /*items*/
          f[0]
        );
        let h;
        for (h = 0; h < l.length; h += 1) {
          const m = xf(f, l, h);
          u[h] ? (u[h].p(m, _), W(u[h], 1)) : (u[h] = $f(m), u[h].c(), W(u[h], 1), u[h].m(t, null));
        }
        for (pr(), h = l.length; h < u.length; h += 1)
          c(h);
        gr();
      }
      (!i || _ & /*mods, $isDesktop*/
      384 && n !== (n = gt(
        "menu",
        Hs,
        /*mods*/
        f[7]
      ) + " " + /*$isDesktop*/
      (f[8] ? Ar.root_platform_desktop : "") + " " + /*popupMix*/
      f[9])) && g(r, "class", n), _ & /*menuY*/
      16 && I(
        r,
        "top",
        /*menuY*/
        f[4]
      ), _ & /*menuX*/
      8 && I(
        r,
        "left",
        /*menuX*/
        f[3]
      ), _ & /*menuWidth*/
      32 && I(
        r,
        "width",
        /*menuWidth*/
        f[5]
      ), _ & /*menuHeight*/
      64 && I(
        r,
        "height",
        /*menuHeight*/
        f[6]
      );
    },
    i(f) {
      if (!i) {
        for (let _ = 0; _ < l.length; _ += 1)
          W(u[_]);
        f && _o(() => {
          i && (o || (o = za(r, Kf, { y: 20 }, !0)), o.run(1));
        }), i = !0;
      }
    },
    o(f) {
      u = u.filter(Boolean);
      for (let _ = 0; _ < u.length; _ += 1)
        ne(u[_]);
      f && (o || (o = za(r, Kf, { y: 20 }, !1)), o.run(0)), i = !1;
    },
    d(f) {
      f && J(r), un(u, f), e[17](null), f && o && o.end(), s = !1, Rr(a);
    }
  };
}
function e4(e, r, t) {
  let n, o, { ownerNode: i } = r, { items: s } = r, { parentComponentContext: a } = r;
  const l = Tr(Xr), u = l.getCustomization("menuPopupClass") || "", c = l.getCustomization("menuItemClass") || "", f = l.isDesktop;
  mn(e, f, (A) => t(8, o = A));
  const _ = Date.now(), h = B_();
  let m, p = !1, w = "", k = "", N = "", B = "", z = null;
  function oe() {
    if (!m || !i)
      return;
    const A = m.parentElement;
    if (!A)
      return;
    const D = i.getBoundingClientRect(), M = m.getBoundingClientRect(), U = A.getBoundingClientRect(), q = window.innerWidth, be = window.innerHeight;
    let Ae = 0, Ce = 0, he = M.width, Fe = M.height;
    Ae = D.left - U.left, Ce = D.bottom - U.top, Ae + he > q && (Ae = q - he), Ae < 0 && (Ae = 0), Ce + Fe > be && (D.top - U.top - Fe > 0 ? Ce = D.top - U.top - Fe : Ce = be - Fe), Ce < 0 && (Ce = 0), t(3, w = `${Ae}px`), t(4, k = `${Ce}px`), t(5, N = ""), t(6, B = ""), t(16, p = !0), typeof ResizeObserver < "u" && !z && (z = new ResizeObserver(() => {
      requestAnimationFrame(oe);
    }), z.observe(m));
  }
  function fe(A) {
    Date.now() - _ < 100 || A.composedPath().includes(m) || h("close");
  }
  function T() {
    oe();
  }
  function Y() {
    return h("close"), !0;
  }
  Qn(() => {
    if (l.tooltipRoot) {
      const A = window.getComputedStyle(m);
      t(2, m.style.fontSize = A.fontSize, m), t(2, m.style.fontFamily = A.fontFamily, m), t(2, m.style.lineHeight = A.lineHeight, m), l.tooltipRoot.appendChild(m);
    }
  }), al(() => {
    p || oe();
  }), ln(() => {
    z == null || z.disconnect();
  });
  function le(A) {
    Fr[A ? "unshift" : "push"](() => {
      m = A, t(2, m);
    });
  }
  return e.$$set = (A) => {
    "ownerNode" in A && t(15, i = A.ownerNode), "items" in A && t(0, s = A.items), "parentComponentContext" in A && t(1, a = A.parentComponentContext);
  }, e.$$.update = () => {
    e.$$.dirty & /*visible*/
    65536 && t(7, n = { visible: p });
  }, [
    s,
    a,
    m,
    w,
    k,
    N,
    B,
    n,
    o,
    u,
    c,
    f,
    fe,
    T,
    Y,
    i,
    p,
    le
  ];
}
class t4 extends Or {
  constructor(r) {
    super(), Lr(this, r, e4, $3, Sr, {
      ownerNode: 15,
      items: 0,
      parentComponentContext: 1
    });
  }
}
const { Map: r4 } = Po;
function ed(e, r, t) {
  const n = e.slice();
  return n[134] = r[t], n;
}
function td(e) {
  let r, t, n, o, i, s, a, l, u, c;
  t = new hk({
    props: { svgFiltersMap: (
      /*svgFiltersMap*/
      e[5]
    ) }
  }), o = new xn({
    props: {
      componentContext: (
        /*rootStateComponentContext*/
        e[6]
      )
    }
  });
  let f = (
    /*tooltips*/
    e[3] && rd(e)
  ), _ = (
    /*menu*/
    e[4] && od(e)
  );
  return {
    c() {
      r = Pe("div"), Wt(t.$$.fragment), n = _r(), Wt(o.$$.fragment), i = _r(), f && f.c(), s = _r(), _ && _.c(), g(r, "class", a = Ar.root + /*$isDesktop*/
      (e[7] ? ` ${Ar.root_platform_desktop}` : "") + /*mix*/
      (e[0] ? ` ${/*mix*/
      e[0]}` : "")), g(
        r,
        "dir",
        /*$directionStore*/
        e[8]
      );
    },
    m(h, m) {
      K(h, r, m), Ot(t, r, null), wt(r, n), Ot(o, r, null), wt(r, i), f && f.m(r, null), wt(r, s), _ && _.m(r, null), l = !0, u || (c = Qe(r, "touchstart", s4, { passive: !0 }), u = !0);
    },
    p(h, m) {
      const p = {};
      m[0] & /*svgFiltersMap*/
      32 && (p.svgFiltersMap = /*svgFiltersMap*/
      h[5]), t.$set(p);
      const w = {};
      m[0] & /*rootStateComponentContext*/
      64 && (w.componentContext = /*rootStateComponentContext*/
      h[6]), o.$set(w), /*tooltips*/
      h[3] ? f ? (f.p(h, m), m[0] & /*tooltips*/
      8 && W(f, 1)) : (f = rd(h), f.c(), W(f, 1), f.m(r, s)) : f && (pr(), ne(f, 1, 1, () => {
        f = null;
      }), gr()), /*menu*/
      h[4] ? _ ? (_.p(h, m), m[0] & /*menu*/
      16 && W(_, 1)) : (_ = od(h), _.c(), W(_, 1), _.m(r, null)) : _ && (pr(), ne(_, 1, 1, () => {
        _ = null;
      }), gr()), (!l || m[0] & /*$isDesktop, mix*/
      129 && a !== (a = Ar.root + /*$isDesktop*/
      (h[7] ? ` ${Ar.root_platform_desktop}` : "") + /*mix*/
      (h[0] ? ` ${/*mix*/
      h[0]}` : ""))) && g(r, "class", a), (!l || m[0] & /*$directionStore*/
      256) && g(
        r,
        "dir",
        /*$directionStore*/
        h[8]
      );
    },
    i(h) {
      l || (W(t.$$.fragment, h), W(o.$$.fragment, h), W(f), W(_), l = !0);
    },
    o(h) {
      ne(t.$$.fragment, h), ne(o.$$.fragment, h), ne(f), ne(_), l = !1;
    },
    d(h) {
      h && J(r), Bt(t), Bt(o), f && f.d(), _ && _.d(), u = !1, c();
    }
  };
}
function rd(e) {
  let r = [], t = new r4(), n, o, i = ur(
    /*tooltips*/
    e[3]
  );
  const s = (a) => (
    /*item*/
    a[134].internalId
  );
  for (let a = 0; a < i.length; a += 1) {
    let l = ed(e, i, a), u = s(l);
    t.set(u, r[a] = nd(u, l));
  }
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      n = or();
    },
    m(a, l) {
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(a, l);
      K(a, n, l), o = !0;
    },
    p(a, l) {
      l[0] & /*tooltips, rootStateComponentContext*/
      72 && (i = ur(
        /*tooltips*/
        a[3]
      ), pr(), r = bd(r, l, s, 1, a, i, t, n.parentNode, md, nd, n, ed), gr());
    },
    i(a) {
      if (!o) {
        for (let l = 0; l < i.length; l += 1)
          W(r[l]);
        o = !0;
      }
    },
    o(a) {
      for (let l = 0; l < r.length; l += 1)
        ne(r[l]);
      o = !1;
    },
    d(a) {
      a && J(n);
      for (let l = 0; l < r.length; l += 1)
        r[l].d(a);
    }
  };
}
function nd(e, r) {
  let t, n, o;
  return n = new K3({
    props: {
      ownerNode: (
        /*item*/
        r[134].ownerNode
      ),
      data: (
        /*item*/
        r[134].desc
      ),
      internalId: (
        /*item*/
        r[134].internalId
      ),
      parentComponentContext: (
        /*item*/
        r[134].componentContext || /*rootStateComponentContext*/
        r[6]
      )
    }
  }), {
    key: e,
    first: null,
    c() {
      t = or(), Wt(n.$$.fragment), this.first = t;
    },
    m(i, s) {
      K(i, t, s), Ot(n, i, s), o = !0;
    },
    p(i, s) {
      r = i;
      const a = {};
      s[0] & /*tooltips*/
      8 && (a.ownerNode = /*item*/
      r[134].ownerNode), s[0] & /*tooltips*/
      8 && (a.data = /*item*/
      r[134].desc), s[0] & /*tooltips*/
      8 && (a.internalId = /*item*/
      r[134].internalId), s[0] & /*tooltips, rootStateComponentContext*/
      72 && (a.parentComponentContext = /*item*/
      r[134].componentContext || /*rootStateComponentContext*/
      r[6]), n.$set(a);
    },
    i(i) {
      o || (W(n.$$.fragment, i), o = !0);
    },
    o(i) {
      ne(n.$$.fragment, i), o = !1;
    },
    d(i) {
      i && J(t), Bt(n, i);
    }
  };
}
function od(e) {
  let r, t;
  return r = new t4({
    props: {
      ownerNode: (
        /*menu*/
        e[4].node
      ),
      items: (
        /*menu*/
        e[4].items
      ),
      parentComponentContext: (
        /*menu*/
        e[4].componentContext || /*rootStateComponentContext*/
        e[6]
      )
    }
  }), r.$on(
    "close",
    /*close_handler*/
    e[45]
  ), {
    c() {
      Wt(r.$$.fragment);
    },
    m(n, o) {
      Ot(r, n, o), t = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*menu*/
      16 && (i.ownerNode = /*menu*/
      n[4].node), o[0] & /*menu*/
      16 && (i.items = /*menu*/
      n[4].items), o[0] & /*menu, rootStateComponentContext*/
      80 && (i.parentComponentContext = /*menu*/
      n[4].componentContext || /*rootStateComponentContext*/
      n[6]), r.$set(i);
    },
    i(n) {
      t || (W(r.$$.fragment, n), t = !0);
    },
    o(n) {
      ne(r.$$.fragment, n), t = !1;
    },
    d(n) {
      Bt(r, n);
    }
  };
}
function n4(e) {
  let r, t, n = !/*hasError*/
  e[1] && !/*hasIdError*/
  e[2] && /*rootStateComponentContext*/
  e[6] && td(e);
  return {
    c() {
      n && n.c(), r = or();
    },
    m(o, i) {
      n && n.m(o, i), K(o, r, i), t = !0;
    },
    p(o, i) {
      !/*hasError*/
      o[1] && !/*hasIdError*/
      o[2] && /*rootStateComponentContext*/
      o[6] ? n ? (n.p(o, i), i[0] & /*hasError, hasIdError, rootStateComponentContext*/
      70 && W(n, 1)) : (n = td(o), n.c(), W(n, 1), n.m(r.parentNode, r)) : n && (pr(), ne(n, 1, 1, () => {
        n = null;
      }), gr());
    },
    i(o) {
      t || (W(n), t = !0);
    },
    o(o) {
      ne(n), t = !1;
    },
    d(o) {
      o && J(r), n && n.d(o);
    }
  };
}
let Aa = Io(!0), js = 0;
function id() {
  Aa.set(!1);
}
function sd() {
  Aa.set(!0);
}
const o4 = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean"]), i4 = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean", "array", "dict"]);
function Wo(e, r) {
  if (e && r)
    return new Map([...e, ...r]);
  if (e)
    return e;
  if (r)
    return r;
}
function s4() {
}
function l4(e, r, t) {
  var qr, Ur, an;
  let n, o, i, s, { id: a } = r, { json: l = {} } = r, { platform: u = "auto" } = r, { theme: c = "system" } = r, { globalVariablesController: f = void 0 } = r, { mix: _ = "" } = r, { customization: h = {} } = r, { builtinProtocols: m = ["http", "https", "tel", "mailto", "intent"] } = r, { extensions: p = /* @__PURE__ */ new Map() } = r, { onError: w = void 0 } = r, { onStat: k = void 0 } = r, { onSubmit: N = void 0 } = r, { onCustomAction: B = void 0 } = r, { onComponent: z = void 0 } = r, { typefaceProvider: oe = (y) => "" } = r, { fetchInit: fe = {} } = r, { tooltipRoot: T = void 0 } = r, { customComponents: Y = void 0 } = r, { direction: le = "ltr" } = r, { store: A = void 0 } = r, { pagerChildrenClipEnabled: D = !0 } = r, { pagerMouseDragEnabled: M = !0 } = r, { weekStartDay: U = 0 } = r, { videoPlayerProvider: q = void 0 } = r, { devtoolCreateHierarchy: be = "lazy" } = r, Ae = !0, Ce = Io(u === "desktop");
  if (mn(e, Ce, (y) => t(7, i = y)), u === "auto" && typeof matchMedia < "u") {
    const y = matchMedia("(any-pointer: coarse)");
    Ce.set(!y.matches), y.addListener(() => {
      Ce.set(!y.matches);
    });
  }
  let he = "light", Fe = null;
  const x = Io(le === "rtl" ? "rtl" : "ltr");
  mn(e, x, (y) => t(8, s = y));
  function Je() {
    c !== "system" || !Fe || t(41, he = Fe.matches ? "dark" : "light");
  }
  function Ye(y) {
    t(12, c = y);
  }
  function Xe() {
    return /* @__PURE__ */ new Map();
  }
  function ye() {
    return /* @__PURE__ */ new Map();
  }
  function Ie(y) {
    t(11, l = y);
  }
  function pe(y) {
    return De(y, F);
  }
  const me = new Set(m);
  let _e = !1, ee = !1;
  a || (ee = !0, F(X(new Error('"id" prop is required'))));
  const ce = { stateChange: !1 }, te = f || new d_(), we = te.getLastAddedVariableStore(), Ue = te.getVariables(), Ke = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map();
  let ot = null;
  const ct = /* @__PURE__ */ new Map();
  let rt = 0, kt = [];
  const it = /* @__PURE__ */ new Set();
  let Mt;
  const ft = [];
  function Z(y) {
    return h == null ? void 0 : h[y];
  }
  function de(y, C, { additionalVars: S, keepComplex: ae = !1, customFunctions: R, emptyVarsError: tt, maxDepth: Me } = {}) {
    var Xt;
    if (!C)
      return Jo(C);
    const xt = Wo($, S), Dt = Jf(C, y, A, U, Me);
    if (!Dt.vars.length)
      if (Dt.hasExpression) {
        const dt = Dt.applyVars(xt, R);
        if (!((Xt = dt.usedVars) != null && Xt.size))
          return tt && tt(), Jo(dt.result);
      } else
        return tt && tt(), Jo(C);
    const H = Dt.vars.map((dt) => xt.get(dt) || vt(dt)).filter(zo);
    return Io(void 0, (dt) => {
      const jr = /* @__PURE__ */ new Map();
      let Mr;
      const wn = () => {
        var Gr;
        const $r = Dt.applyVars(xt, R, ae);
        for (const [on, Ln] of jr)
          (Gr = $r.usedVars) != null && Gr.has(on) || (Ln(), jr.delete(on));
        if ($r.usedVars) {
          for (const on of $r.usedVars)
            if (!jr.has(on)) {
              let Ln = !0;
              jr.set(on, on.subscribe(() => {
                Ln || dt(wn()), Ln = !1;
              }));
            }
        }
        return $r.result;
      };
      return Mr = Ui(H, wn).subscribe(($r) => {
        dt($r);
      }), () => {
        Mr == null || Mr();
        for (const [$r, Gr] of jr)
          Gr();
      };
    });
  }
  function lt(y, C, S, ae = !1, R = void 0) {
    const tt = Jf(C, y, A, U);
    if (!tt.hasExpression)
      return C;
    const Me = Wo($, S);
    return tt.applyVars(Me, R, ae).result;
  }
  function ze(y, C, S) {
    const ae = /* @__PURE__ */ new Map(), R = As(y, "dict", C);
    ae.set(y, R);
    const tt = As("index", "integer", S);
    return ae.set("index", tt), ae;
  }
  function F(y) {
    w ? w({ error: y }) : (y == null ? void 0 : y.level) === "warn" ? console.warn(y) : console.error(y);
  }
  function Et(y, C) {
    k && k({ type: y, action: C });
  }
  function ut(y) {
    return y in n;
  }
  function Vt(y, C) {
    if (!y)
      return { json: y, templateContext: C };
    const S = /* @__PURE__ */ new Set([y.type]);
    for (; y.type && y.type in n; ) {
      if ({ json: y, templateContext: C } = mk(y, C, n, F), S.has(y.type))
        return { json: y, templateContext: C };
      S.add(y.type);
    }
    return { json: y, templateContext: C };
  }
  let It = 0;
  function nt(y) {
    return `${a}-${It++}`;
  }
  function Q(y) {
    return `divkit-${nt()}`;
  }
  let At = {}, Pt = {};
  function $t(y, C) {
    const S = `${y}:${C}`;
    if (Pt[S] = Pt[S] || 0, ++Pt[S], At[S])
      return At[S];
    const ae = `${nt()}-svg-filter`;
    return t(5, At = { ...At, [S]: ae }), ae;
  }
  function Zt(y, C) {
    if (!y)
      return;
    const S = `${y}:${C}`;
    Pt[S] && --Pt[S] === 0 && t(5, At = Object.keys(At).reduce(
      (ae, R) => (Pt[R] && (ae[R] = At[R]), ae),
      {}
    ));
  }
  const Ee = nt() + "-id-", He = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new Map();
  function Te(y) {
    return Ee + y;
  }
  function xe(y, C) {
    let S = He.get(y) || [];
    return He.has(y) || He.set(y, S), S.push(C), () => {
      S = S.filter((R) => R !== C), S.length || He.delete(y);
      const ae = Te(y);
      ht.has(ae) && ht.delete(ae);
    };
  }
  function Le(y) {
    var S, ae;
    const C = (ae = (S = He.get(y)) == null ? void 0 : S[0]) == null ? void 0 : ae.node();
    if (C) {
      const R = Te(y), tt = ht.get(R);
      return tt && tt !== C && tt.removeAttribute("id"), C.setAttribute("id", R), ht.set(R, C), R;
    }
    return "";
  }
  async function Ft(y, C) {
    var Me, xt;
    if (!y)
      throw new Error("Missing state id");
    let S = y.split("/");
    const ae = S.length % 2 === 0 && v3(C);
    let R = ae || lr;
    const tt = (C == null ? void 0 : C.logError) || F;
    if (!ae)
      if ((Me = R.states) != null && Me.root) {
        const Dt = R.states.root;
        if (Dt.length > 1) {
          tt(X(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: y } }));
          return;
        }
        if (R = await Dt[0](S[0]), !R)
          return;
        S = S.slice(1);
      } else
        return;
    for (let Dt = 0; Dt < S.length; Dt += 2) {
      const H = S[Dt], Xt = S[Dt + 1];
      if ((xt = R.states) != null && xt[H]) {
        const dt = R.states[H];
        if (dt.length > 1) {
          tt(X(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: y } }));
          return;
        }
        if (R = await dt[0](Xt), !R)
          return;
      } else
        return;
    }
  }
  async function Be(y, C, S) {
    var jr;
    const ae = (y == null ? void 0 : y.logError) || F;
    if (!S3(C)) {
      ae(X(new Error("Incorrect submit action"), {
        additional: { containerId: C.container_id }
      }));
      return;
    }
    const R = He.get(C.container_id);
    if ((R == null ? void 0 : R.length) !== 1) {
      ae(X(new Error("Error resolving container. Found multiple elements that respond to id"), {
        additional: { containerId: C.container_id }
      }));
      return;
    }
    const tt = R[0].context(), Me = {};
    if (tt.variables)
      for (const [Mr, wn] of tt.variables) {
        const $r = wn.getValue();
        typeof $r == "bigint" ? Me[Mr] = Number($r) : Me[Mr] = $r;
      }
    if (N) {
      Promise.resolve().then(() => N(C, Me)).then(() => {
        Nt(S.on_success_actions, { componentContext: y });
      }).catch(() => {
        Nt(S.on_fail_actions, { componentContext: y });
      });
      return;
    }
    const xt = Object.keys(Me).length > 0, Dt = (C.request.method || "post").toLowerCase();
    if ((Dt === "get" || Dt === "head") && xt) {
      ae(X(new Error("Can't send variables using the get/head method."), { additional: { url: C.request.url } }));
      return;
    }
    let H = !1;
    const Xt = [];
    (jr = C.request.headers) == null || jr.forEach((Mr) => {
      Xt.push([Mr.name, Mr.value]), Mr.name.toLowerCase() === "content-type" && (H = !0);
    }), H || Xt.push(["Content-Type", "application/json"]);
    let dt;
    typeof fe == "function" ? dt = fe(C.request.url) : dt = fe, fetch(C.request.url, {
      ...dt,
      method: Dt,
      headers: Xt,
      body: xt ? JSON.stringify(Me) : void 0
    }).then((Mr) => {
      if (!Mr.ok)
        throw new Error("Response is not ok");
      Nt(S.on_success_actions, { componentContext: y });
    }).catch((Mr) => {
      ae(X(new Error("Failed to submit"), {
        additional: {
          url: C.request.url,
          originalError: Mr
        }
      })), Nt(S.on_fail_actions, { componentContext: y });
    });
  }
  function bt(y, C) {
    var R, tt, Me, xt, Dt, H, Xt, dt, jr;
    const S = (y == null ? void 0 : y.logError) || F, ae = C.id && at(C.id);
    if (!ae) {
      S(X(new Error('Missing component for "scroll_to" action'), { additional: { id: C.id } }));
      return;
    }
    if (C.animated !== void 0 && typeof C.animated != "boolean") {
      S(X(new Error('Missing properties for "scroll_to" action'), { additional: { id: C.id } }));
      return;
    }
    switch ((R = C.destination) == null ? void 0 : R.type) {
      case "index": {
        typeof C.destination.value == "number" && ae.setCurrentItem(C.destination.value, (tt = C.animated) != null ? tt : !0);
        break;
      }
      case "offset": {
        typeof C.destination.value == "number" && ((xt = ae.scrollToPosition) == null || xt.call(ae, C.destination.value, (Me = C.animated) != null ? Me : !0));
        break;
      }
      case "start": {
        (H = ae.scrollToStart) == null || H.call(ae, (Dt = C.animated) != null ? Dt : !0);
        break;
      }
      case "end": {
        (dt = ae.scrollToEnd) == null || dt.call(ae, (Xt = C.animated) != null ? Xt : !0);
        break;
      }
      default:
        S(X(new Error('Unknown destination for "scroll_to" action'), {
          additional: {
            id: C.id,
            destination: (jr = C.destination) == null ? void 0 : jr.type
          }
        }));
    }
  }
  function Ut(y, C) {
    var R;
    const S = (y == null ? void 0 : y.logError) || F, ae = C.id && at(C.id);
    if (!ae) {
      S(X(new Error('Missing component for "scroll_by" action'), { additional: { id: C.id } }));
      return;
    }
    if (typeof C.item_count != "number" && C.item_count !== void 0 || typeof C.offset != "number" && C.offset !== void 0 || C.overflow !== void 0 && C.overflow !== "clamp" && C.overflow !== "ring" || C.animated !== void 0 && typeof C.animated != "boolean") {
      S(X(new Error('Missing properties for "scroll_by" action'), { additional: { id: C.id } }));
      return;
    }
    (R = ae.scrollCombined) == null || R.call(ae, {
      step: C.item_count,
      offset: C.offset,
      overflow: C.overflow,
      animated: C.animated
    });
  }
  function Tt(y, C, { item: S, step: ae, overflow: R, animated: tt }) {
    var Xt, dt, jr, Mr, wn;
    if (!C)
      throw new Error(`Missing id for "${y}" action`);
    const Me = Number(S);
    if (y === "set_current_item" && Number.isNaN(Me))
      throw new Error(`Incorrect item for "${y}" action`);
    let xt = Number(ae);
    if (!ae && (y === "set_previous_item" || y === "set_next_item") && (xt = 1), !ae && (y === "scroll_backward" || y === "scroll_forward" || y === "scroll_to_position") || Number.isNaN(xt))
      throw new Error(`Incorrect step value for "${y}" action`);
    if (R && R !== "clamp" && R !== "ring")
      throw new Error(`Incorrect overflow value for "${y}" action`);
    R = R || "clamp";
    const Dt = tt === null || tt !== "0" && tt !== "false", H = at(C);
    if (H)
      switch (y) {
        case "set_current_item":
          H.setCurrentItem(Me, Dt);
          return;
        case "set_previous_item":
          H.setPreviousItem(xt, R, Dt);
          return;
        case "set_next_item":
          H.setNextItem(xt, R, Dt);
          return;
        case "scroll_to_start":
          (Xt = H.scrollToStart) == null || Xt.call(H, Dt);
          return;
        case "scroll_to_end":
          (dt = H.scrollToEnd) == null || dt.call(H, Dt);
          return;
        case "scroll_backward":
          (jr = H.scrollCombined) == null || jr.call(H, {
            offset: -xt,
            overflow: R,
            animated: Dt
          });
          return;
        case "scroll_forward":
          (Mr = H.scrollCombined) == null || Mr.call(H, {
            offset: xt,
            overflow: R,
            animated: Dt
          });
          return;
        case "scroll_to_position":
          (wn = H.scrollToPosition) == null || wn.call(H, xt, Dt);
          return;
      }
  }
  function ir(y, C, S) {
    const ae = (S == null ? void 0 : S.logError) || F;
    if (y) {
      const R = at(y);
      R ? C === "start" ? R.start() : C === "pause" ? R.pause() : ae(X(new Error("Unknown video action"), { additional: { id: y, action: C } })) : ae(X(new Error("Video component is not found"), { additional: { id: y, action: C } }));
    } else
      ae(X(new Error("Missing id in video action"), { additional: { action: C } }));
  }
  function De(y, C, S) {
    var ae, R, tt;
    if (y.templates)
      for (const Me in y.templates)
        n.hasOwnProperty(Me) || (n[Me] = y.templates[Me]);
    if (Array.isArray((ae = y.patch) == null ? void 0 : ae.changes)) {
      if (y.patch.mode === "transactional") {
        const Me = y.patch.changes.find((xt) => {
          const Dt = kr.get(xt.id);
          if (!Dt)
            return !0;
          const H = Array.isArray(xt.items) ? xt.items.length : 0;
          return !!(Dt.isSingleMode && H !== 1);
        });
        if (Me)
          return C(X(new Error("Skipping transactional, child is not found or broken"), { additional: { url: S, id: Me.id } })), Nt((R = y.patch) == null ? void 0 : R.on_failed_actions), !1;
      }
      return y.patch.changes.forEach((Me) => {
        const xt = kr.get(Me.id);
        xt && xt.replaceWith(Me.id, Me.items);
      }), Nt((tt = y.patch) == null ? void 0 : tt.on_applied_actions), !0;
    }
    return !1;
  }
  function jt(y, C, S) {
    const ae = (S == null ? void 0 : S.logError) || F;
    if (y) {
      let R;
      typeof fe == "function" ? R = fe(y) : R = fe, fetch(y, R).then((tt) => {
        if (!tt.ok)
          throw new Error("Response is not ok");
        return tt.json();
      }).then((tt) => {
        if (!tt) {
          ae(X(new Error("Incorrect patch"), { additional: { url: y } })), Nt(C == null ? void 0 : C.on_fail_actions, { componentContext: S });
          return;
        }
        De(tt, ae, y) ? Nt(C == null ? void 0 : C.on_success_actions, { componentContext: S }) : Nt(C == null ? void 0 : C.on_fail_actions, { componentContext: S });
      }).catch((tt) => {
        ae(X(new Error("Failed to download the patch"), { additional: { url: y, originalError: tt } })), Nt(C == null ? void 0 : C.on_fail_actions, { componentContext: S });
      });
    } else
      ae(X(new Error("Missing url in download action"), { additional: { url: y } }));
  }
  function sr(y, C, S) {
    var xt;
    const ae = (S == null ? void 0 : S.logError) || F;
    if (!y) {
      ae(X(new Error("Missing id in show_tooltip action")));
      return;
    }
    const R = Ct.get(y);
    if (!R) {
      ae(X(new Error("Tooltip with the provided id is not found"), { additional: { id: y } }));
      return;
    }
    if (C !== "true" && C !== !0 && it.has(y))
      return;
    it.add(y);
    const tt = {
      internalId: ++rt,
      ownerNode: R.onwerNode,
      desc: R.tooltip,
      timeoutId: 0,
      componentContext: S
    };
    t(3, kt = [...kt, tt]);
    const Me = (xt = R.tooltip.duration) != null ? xt : 5e3;
    Me && (tt.timeoutId = window.setTimeout(
      () => {
        tt.timeoutId = 0, t(3, kt = kt.filter((Dt) => Dt.internalId !== tt.internalId));
      },
      Me
    ));
  }
  function rr(y, C) {
    const S = (C == null ? void 0 : C.logError) || F;
    if (!y) {
      S(X(new Error("Missing id in hide_tooltip action")));
      return;
    }
    t(3, kt = kt.filter((ae) => {
      const R = ae.desc.id !== y;
      return !R && ae.timeoutId && (clearTimeout(ae.timeoutId), ae.timeoutId = null), R;
    }));
  }
  function nr(y, C, S, ae, R) {
    const tt = (y == null ? void 0 : y.logError) || F;
    if (!A) {
      tt(X(new Error("Store is not configured")));
      return;
    }
    let Me = S;
    if (!C || !Me || !ae || !R) {
      tt(X(new Error("Missing required params for set_stored_value")));
      return;
    }
    if (!i4.has(ae)) {
      tt(X(new Error("Incorrect stored type")));
      return;
    }
    if (ae === "boolean" && (Me = Me === "true" || Me === "1"), A.set)
      A.set(C, ae, Me, Number(R));
    else if (A.setValue) {
      if (!o4.has(ae)) {
        tt(X(new Error("Incorrect stored type")));
        return;
      }
      if (typeof Me != "string" && typeof Me != "number" && typeof Me != "boolean") {
        tt(X(new Error("Incorrect stored value")));
        return;
      }
      (ae === "integer" || ae === "number") && (Me = Number(Me)), A.setValue(C, ae, Me, Number(R));
    }
  }
  function fr(y) {
    wr(lt(F, y, void 0, !0), y);
  }
  async function wr(y, C, S) {
    var xt, Dt;
    const ae = y.scope_id, R = (S == null ? void 0 : S.logError) || F;
    if (ae) {
      const H = Dr.get(ae);
      if (H && (H == null ? void 0 : H.size) > 1)
        R(X(new Error(`Ambiguous scope id. There are ${H.size} divs with id '${ae}'`), { additional: { count: H.size, scopeId: ae } }));
      else if ((H == null ? void 0 : H.size) === 1) {
        const Xt = H.values().next().value;
        Xt && (S = Xt);
      } else {
        R(X(new Error("The scope with the specified scope_id is missing"), { additional: { scopeId: ae } }));
        return;
      }
    }
    const tt = y.url ? String(y.url) : "", Me = y.typed;
    if (qs(y)) {
      if (Me)
        switch (Me.type) {
          case "set_variable": {
            const { variable_name: H, value: Xt } = Me;
            if (H && Xt) {
              const dt = (S == null ? void 0 : S.getVariable(H)) || $.get(H);
              dt ? dt.getType() === Xt.type ? dt.setValue(Xt.value) : R(X(new Error("Trying to set value with invalid type"), { additional: { name: H, type: Xt.type } })) : R(X(new Error("Cannot find variable"), { additional: { name: H } }));
            } else
              R(X(new Error("Incorrect set_variable action"), { additional: { name: H } }));
            break;
          }
          case "array_insert_value":
            g3(S, $, R, Me);
            break;
          case "array_remove_value":
            h3(S, $, R, Me);
            break;
          case "array_set_value":
            m3(S, $, R, Me);
            break;
          case "copy_to_clipboard":
            y3(R, Me);
            break;
          case "focus_element": {
            const H = Me.element_id && vr.get(Me.element_id);
            H ? H.focus() : R(X(new Error("Incorrect focus_element action"), {
              additional: { elementId: Me.element_id }
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
            b3(S, $, R, Me);
            break;
          }
          case "animator_start": {
            const H = Me.animator_id && (S == null ? void 0 : S.getAnimator(Me.animator_id));
            if (!H) {
              R(X(new Error("Missing animator"), {
                additional: { animator_id: Me.animator_id }
              }));
              return;
            }
            const { duration: Xt, start_delay: dt, interpolator: jr, direction: Mr, repeat_count: wn, start_value: $r, end_value: Gr } = Me, on = S ? S.getJsonWithVars(H) : lt(F, H), Ln = {
              ...on,
              end_actions: H.end_actions,
              cancel_actions: H.cancel_actions,
              duration: Xt !== void 0 ? Xt : on.duration,
              start_delay: dt !== void 0 ? dt : on.start_delay,
              interpolator: jr !== void 0 ? jr : on.interpolator,
              direction: Mr !== void 0 ? Mr : on.direction,
              repeat_count: wn !== void 0 ? wn : on.repeat_count,
              start_value_typed: $r,
              end_value_typed: Gr
            }, Hn = H.variable_name && ((S == null ? void 0 : S.getVariable(H.variable_name)) || $.get(H.variable_name));
            if (!Hn)
              return;
            const lo = ct.get(H.id);
            lo && lo.stop();
            const Mn = k3(
              Ln,
              Hn,
              () => {
                ct.delete(H.id);
              },
              (Kt, b) => ((S == null ? void 0 : S.execAnyActions) || Nt)(Kt, b)
            );
            Mn && ct.set(H.id, Mn);
            break;
          }
          case "animator_stop": {
            const H = ct.get(Me.animator_id);
            H && (H.stop(), ct.delete(Me.animator_id));
            break;
          }
          case "show_tooltip": {
            sr(Me.id, Me.multiple, S);
            break;
          }
          case "hide_tooltip": {
            rr(Me.id, S);
            break;
          }
          case "timer": {
            ot ? ot.execTimerAction(Me.id, Me.action) : R(X(new Error("Incorrect timer action"), {
              additional: {
                id: Me.id,
                action: Me.action
              }
            }));
            break;
          }
          case "download": {
            jt(Me.url, C.typed, S);
            break;
          }
          case "video": {
            ir(Me.id, Me.action, S);
            break;
          }
          case "set_stored_value": {
            nr(S, Me.name, (xt = Me.value) == null ? void 0 : xt.value, (Dt = Me.value) == null ? void 0 : Dt.type, Me.lifetime);
            break;
          }
          case "set_state": {
            await Ft(Me.state_id, S);
            break;
          }
          case "submit": {
            await Be(S, Me, C.typed);
            break;
          }
          case "scroll_to": {
            bt(S, Me);
            break;
          }
          case "scroll_by": {
            Ut(S, Me);
            break;
          }
          case "update_structure": {
            V3(S, $, R, Me);
            break;
          }
          case "custom": {
            br({
              ...C,
              // todo remove in major release
              url: ""
            });
            break;
          }
          default:
            R(X(new Error("Unknown type of action"), { additional: { type: Me.type } }));
        }
      else if (tt)
        try {
          const H = tt.replace(/div-action:\/\//, ""), Xt = /([^?]+)\?(.+)/.exec(H);
          if (!Xt)
            return;
          const dt = new URLSearchParams(Xt[2]);
          switch (Xt[1]) {
            case "set_state":
              await Ft(dt.get("state_id"), S);
              break;
            case "set_current_item":
            case "set_previous_item":
            case "set_next_item":
            case "scroll_to_start":
            case "scroll_to_end":
            case "scroll_backward":
            case "scroll_forward":
            case "scroll_to_position":
              Tt(Xt[1], dt.get("id"), {
                item: dt.get("item"),
                step: dt.get("step"),
                overflow: dt.get("overflow"),
                animated: dt.get("animated")
              });
              break;
            case "set_variable":
              const jr = dt.get("name"), Mr = dt.get("value");
              if (jr && Mr !== null) {
                const Gr = (S == null ? void 0 : S.getVariable(jr)) || $.get(jr);
                Gr ? Gr.set(Mr) : R(X(new Error("Cannot find variable"), { additional: { name: jr } }));
              } else
                R(X(new Error("Incorrect set_variable_action"), { additional: { url: H } }));
              break;
            case "timer":
              const wn = dt.get("action"), $r = dt.get("id");
              ot ? ot.execTimerAction($r, wn) : R(X(new Error("Incorrect timer action"), {
                additional: { id: $r, action: wn }
              }));
              break;
            case "video":
              ir(dt.get("id"), dt.get("action"), S);
              break;
            case "download":
              jt(dt.get("url"), C.download_callbacks, S);
              break;
            case "show_tooltip":
              sr(dt.get("id"), dt.get("multiple"), S);
              break;
            case "hide_tooltip":
              rr(dt.get("id"), S);
              break;
            case "set_stored_value": {
              nr(S, dt.get("name"), dt.get("value"), dt.get("type"), dt.get("lifetime"));
              break;
            }
            default:
              R(X(new Error("Unknown type of action"), { additional: { url: tt } }));
          }
        } catch (H) {
          R(X(H, { additional: { url: tt } }));
        }
    }
  }
  async function Nt(y, C = {}) {
    var R;
    if (!y || !Array.isArray(y))
      return;
    const S = ((R = C.componentContext) == null ? void 0 : R.logError) || F, ae = (tt) => C.componentContext ? C.componentContext.getJsonWithVars(tt, C.additionalVars, !0) : lt(S, tt, C.additionalVars, !0);
    for (let tt = 0; tt < y.length; ++tt) {
      let Me = ae(y[tt]);
      const xt = Me.is_enabled;
      if (xt === 0 || xt === !1)
        continue;
      const Dt = Me.url;
      if (Me.typed)
        await wr(Me, y[tt], C.componentContext);
      else if (Dt) {
        const Xt = Ol(Dt);
        if (Xt)
          if (Bl(Xt, me)) {
            if (C.processUrls)
              if (Me.target === "_blank") {
                const dt = window.open("", "_blank");
                dt && (dt.opener = null, dt.location = Dt);
              } else
                location.href = Dt;
          } else Xt === "div-action" ? (await wr(Me, y[tt], C.componentContext), await An()) : Me.log_id && (br(Me), await An());
      } else C.node && Array.isArray(Me.menu_items) && Me.menu_items.length && t(4, Mt = {
        items: Me.menu_items,
        node: C.node,
        componentContext: C.componentContext
      });
    }
    y.forEach((tt) => {
      tt.log_id && Et(C.logType || "click", tt);
    });
  }
  function br(y) {
    B == null || B(y);
  }
  function Rt(y, C) {
    const S = (y == null ? void 0 : y.logError) || F;
    if (!Array.isArray(C) || !C.length)
      return;
    const ae = [];
    return C.forEach((R) => {
      let tt = !1;
      if (typeof R.condition != "string") {
        S(X(new Error("variable_trigger has a condition that is not a string"), {
          additional: { condition: R.condition }
        }));
        return;
      }
      if (!Array.isArray(R.actions)) {
        S(X(new Error("variable_trigger has no actions"), {
          additional: { condition: R.condition }
        }));
        return;
      }
      const Me = R.mode || "on_condition";
      if (Me !== "on_variable" && Me !== "on_condition") {
        S(X(new Error("variable_trigger has an unsupported mode"), { additional: { mode: Me } }));
        return;
      }
      const Dt = de(S, { condition: R.condition }, {
        additionalVars: y == null ? void 0 : y.variables,
        customFunctions: y == null ? void 0 : y.customFunctions,
        emptyVarsError: () => {
          S(X(new Error("variable_trigger must have variables in the condition"), {
            additional: { condition: R.condition }
          }));
        }
      }).subscribe(async (H) => {
        H.condition !== void 0 && (// if condition is truthy
        H.condition && // and trigger mode matches
        (Me === "on_variable" || Me === "on_condition" && tt === !1) ? (tt = !!H.condition, y ? await y.execAnyActions(R.actions, { logType: "trigger" }) : await Nt(R.actions, { logType: "trigger" })) : tt = !!H.condition);
      });
      ae.push(Dt);
    }), () => {
      ae.forEach((R) => {
        R();
      });
    };
  }
  function mt(y) {
    return ce[y];
  }
  function er(y, C) {
    ce[y] = C;
  }
  const se = /* @__PURE__ */ new Map(), kr = /* @__PURE__ */ new Map(), vr = /* @__PURE__ */ new Map(), Ct = /* @__PURE__ */ new Map(), Dr = /* @__PURE__ */ new Map();
  function Br(y, C, S = "error") {
    if (se.has(y)) {
      F(X(new Error("Duplicate instance id"), {
        level: S,
        additional: { id: y }
      }));
      return;
    }
    se.set(y, C);
  }
  function ar(y) {
    se.delete(y);
  }
  function at(y) {
    if (!se.has(y)) {
      F(X(new Error("Missing instance with id"), { additional: { id: y } }));
      return;
    }
    return se.get(y);
  }
  function St(y, C) {
    kr.set(y, C);
  }
  function Gt(y) {
    kr.delete(y);
  }
  function Qt(y, C) {
    vr.set(y, C);
  }
  function $e(y) {
    vr.delete(y);
  }
  function pt(y, C) {
    const S = C.id;
    S && (Ct.has(S) && F(X(new Error("Duplicate tooltip id"), { additional: { id: S } })), Ct.set(S, { onwerNode: y, tooltip: C }));
  }
  function ue(y) {
    const C = y.id;
    C && (Ct.delete(C), kt.some((S) => S.desc.id === C) && t(3, kt = kt.filter((S) => S.desc.id !== C)));
  }
  function vt(y) {
    const C = Oe.get(y) || Io(void 0);
    return Oe.has(y) || Oe.set(y, C), C;
  }
  function tr(y, C, S) {
    const ae = Ne.get(y);
    if (ae)
      return ae;
    const R = Yn(y, C, S);
    return Ne.set(y, R), R;
  }
  function Ht() {
    if (!st)
      return;
    st[he].forEach((C) => {
      const S = $.get(C.name);
      S && S.setValue(C.color);
    });
  }
  function yr() {
    return me;
  }
  function j(y, C) {
    const S = p.get(y);
    if (S)
      return new S(C || {});
  }
  function ie(y) {
    return {
      variables: Wo($, y.variables),
      derviedExpression(C) {
        return y.getDerivedFromVars(C);
      },
      processExpressions(C) {
        return y.getJsonWithVars(C);
      },
      execAction: fr,
      logError: F,
      getComponentProperty(C) {
        return y.getJsonWithVars(y.json[C]);
      },
      direction: le
    };
  }
  function d(y, C) {
    const S = /* @__PURE__ */ new Map(), ae = (C == null ? void 0 : C.logError) || F;
    return y.forEach((R) => {
      if (S) {
        try {
          s3(R);
        } catch (xt) {
          ae(X(xt));
          return;
        }
        const tt = R, Me = S.get(tt.name) || [];
        Me.push(l3(tt)), S.set(tt.name, Me);
      }
    }), S;
  }
  function L(y) {
    const C = {
      id: "",
      json: {},
      path: [],
      templateContext: {},
      logError(S) {
        S.additional = S.additional || {}, S.additional.path = C.path.join("/"), F(S);
      },
      execAnyActions(S, ae = {}) {
        return Nt(S, {
          componentContext: C,
          processUrls: ae.processUrls,
          node: ae.node,
          logType: ae.logType,
          additionalVars: ae.additionalVars
        });
      },
      getDerivedFromVars(S, ae, R = !1, tt = 1 / 0) {
        return de(C.logError, S, {
          additionalVars: Wo(C.variables, ae),
          keepComplex: R,
          customFunctions: C.customFunctions,
          maxDepth: tt
        });
      },
      getJsonWithVars(S, ae, R = !1) {
        return lt(C.logError, S, Wo(C.variables, ae), R, C.customFunctions);
      },
      evalExpression(S, ae, R) {
        return Ca(Wo($, C.variables), C.customFunctions, S, ae, R);
      },
      produceChildContext(S, ae = {}) {
        const R = L(this);
        let tt = S, Me = this.templateContext;
        const { templateContext: xt, json: Dt } = Vt(tt, Me);
        if (R.json = Dt, R.templateContext = xt, R.origJson = S, R.id = ae.id || Dt.id || "", R.id) {
          let dt = Dr.get(R.id);
          dt || (dt = /* @__PURE__ */ new Set(), Dr.set(R.id, dt)), dt.add(R);
        }
        ae.key && (R.key = ae.key), ae.path !== void 0 && R.path.push(String(ae.path)), S.type && !ae.isRootState && R.path.push(S.type), ae.isTooltipRoot && (R.isTooltipRoot = !0);
        let H;
        Array.isArray(Dt.variables) ? (H = Wo(this.variables, Wo(ae.variables, /* @__PURE__ */ new Map())), Dt.variables.forEach((dt) => {
          const jr = zt(dt, R, H);
          jr && H && H.set(jr.getName(), jr);
        })) : ae.variables ? H = Wo(this.variables, ae.variables) : this.variables && (H = this.variables), R.variables = H;
        let Xt;
        return Array.isArray(Dt.functions) && (Xt = d(Dt.functions, this)), R.customFunctions = a3(this.customFunctions, Xt), Array.isArray(Dt.animators) && (R.animators = Dt.animators.reduce(
          (dt, jr) => (jr.id && (dt[jr.id] = jr), dt),
          {}
        )), ae.fake && (R.fakeElement = ae.fake), ae.isRootState && (R.isRootState = !0), R;
      },
      dup(S) {
        return { ...C, fakeElement: S };
      },
      getVariable(S, ae) {
        var tt;
        const R = ((tt = C.variables) == null ? void 0 : tt.get(S)) || $.get(S);
        if (R) {
          const Me = R.getType();
          if (ae && Me !== ae) {
            C.logError(X(new Error(`Variable should have type "${ae}"`), { additional: { name: S, foundType: Me } }));
            return;
          }
        }
        return R;
      },
      getAnimator(S) {
        var ae, R;
        return ((ae = C.animators) == null ? void 0 : ae[S]) || ((R = C.parent) == null ? void 0 : R.getAnimator(S)) || void 0;
      },
      registerState(S, ae) {
        const R = j3(C.parent);
        return R && (R.states = R.states || {}, R.states[S] = R.states[S] || [], R.states[S].push(ae)), () => {
          var tt;
          (tt = R == null ? void 0 : R.states) != null && tt[S] && (R.states[S] = R.states[S].filter((Me) => Me !== ae), R.states[S].length || delete R.states[S]);
        };
      },
      registerPager(S) {
        const ae = C.parent;
        return ae ? (ae.pagers = ae.pagers || /* @__PURE__ */ new Map(), ae.pagers.has(S) ? {
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          update() {
          },
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          destroy() {
          }
        } : (ae.pagers.set(S, null), {
          update(R) {
            var Dt, H;
            ae.pagers && ae.pagers.set(S, R);
            const tt = S ? (Dt = ae.pagerListeners) == null ? void 0 : Dt.get(S) : void 0, Me = (H = ae.pagerListeners) == null ? void 0 : H.get(void 0);
            [...tt || [], ...Me || []].forEach((Xt) => {
              Xt(R);
            });
          },
          destroy() {
            ae.pagers && ae.pagers.delete(S);
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
      listenPager(S, ae) {
        var Dt, H, Xt;
        let R = C.parent;
        for (; R && !(R.pagers && (S ? R.pagers.get(S) : (Dt = R.pagers) != null && Dt.size)); )
          R = R.parent;
        if (!R)
          return () => {
          };
        R.pagerListeners = C.pagerListeners || /* @__PURE__ */ new Map();
        const tt = R.pagerListeners.get(S) || [];
        R.pagerListeners.has(S) || R.pagerListeners.set(S, tt), tt.push(ae);
        const Me = S || ((H = R.pagers) == null ? void 0 : H.keys().next().value) || void 0, xt = (Xt = R.pagers) == null ? void 0 : Xt.get(Me);
        return xt && ae(xt), () => {
          if (!R.pagerListeners)
            return;
          let dt = R.pagerListeners.get(Me);
          dt && (dt = dt.filter((jr) => jr !== ae) || [], dt.length ? R.pagerListeners.set(S, dt) : R.pagerListeners.delete(S));
        };
      },
      destroy() {
        const S = Dr.get(C.id);
        S && (S.delete(C), S.size || Dr.delete(C.id));
      }
    };
    return y ? (C.parent = y, C.path = y.path.slice(), y.fakeElement && (C.fakeElement = y.fakeElement)) : (C.json = { type: "root" }, C.isRootState = !0), C;
  }
  function je(y) {
    Ae ? ft.push(y) : clearTimeout(y);
  }
  hi(Xr, {
    logStat: Et,
    hasTemplate: ut,
    genId: nt,
    genClass: Q,
    execCustomAction: br,
    processVariableTriggers: Rt,
    isRunning: mt,
    setRunning: er,
    pagerChildrenClipEnabled: D,
    pagerMouseDragEnabled: M,
    registerInstance: Br,
    unregisterInstance: ar,
    registerParentOf: St,
    unregisterParentOf: Gt,
    registerTooltip: pt,
    unregisterTooltip: ue,
    onTooltipClose: yn,
    tooltipRoot: T,
    registerFocusable: Qt,
    unregisterFocusable: $e,
    addSvgFilter: $t,
    removeSvgFilter: Zt,
    registerId: xe,
    getComponentId: Le,
    preparePrototypeVariables: ze,
    getCustomization: Z,
    getBuiltinProtocols: yr,
    getExtension: j,
    getExtensionContext: ie,
    registerTimeout: je,
    typefaceProvider: oe,
    isDesktop: Ce,
    isPointerFocus: Aa,
    customComponents: Y,
    direction: x,
    videoPlayerProvider: q,
    awaitGlobalVariable: tr,
    componentDevtool: void 0,
    devtoolCreateHierarchy: "lazy"
  }), hi(To, {
    hasAction() {
      return !1;
    }
  }), hi(_a, {
    runVisibilityTransition(y, C, S, ae, R) {
      return Promise.resolve();
    },
    registerChildWithTransitionIn(y, C, S, ae) {
      return Promise.resolve();
    },
    registerChildWithTransitionOut(y, C, S, ae) {
      return Promise.resolve();
    },
    registerChildWithTransitionChange(y, C, S, ae) {
      return Promise.resolve();
    },
    hasTransitionChange(y) {
      return !1;
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    registerChild(y) {
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    unregisterChild(y) {
    }
  }), hi(pa, { isEnabled: Jo(!0) });
  function We(y, C) {
    const S = $.get(y);
    return (S == null ? void 0 : S.getType()) === C;
  }
  function ke(y, C) {
    const S = $.get(y);
    S ? S.setValue(C) : F(X(new Error("Cannot find variable"), { additional: { name: y } }));
  }
  function P(y, C, S) {
    const ae = (C == null ? void 0 : C.logError) || F, R = y.name, tt = y.value_type;
    if (typeof y.get != "string" || !y.get) {
      ae(X(new Error("Incorrect property getter"), { additional: { name: R } }));
      return;
    }
    if (!R) {
      ae(X(new Error("Missing property name")));
      return;
    }
    if (!tt) {
      ae(X(new Error("Missing property value_type")));
      return;
    }
    const Me = C ? C.getDerivedFromVars(y.get, void 0, !0) : de(F, y.get, { keepComplex: !0 });
    if (Nl(Me) === void 0)
      return;
    const Dt = (H) => {
      const Xt = As(y.new_value_variable_name || "new_value", y.value_type, H), dt = new Map(S);
      dt.set(Xt.getName(), Xt), Array.isArray(y.set) && y.set.length ? C ? C.execAnyActions(y.set, { additionalVars: dt }) : Nt(y.set, { additionalVars: dt }) : ae(X(new Error("Cannot set property. No setters provided."), { additional: { name: R } }));
    };
    return {
      getName() {
        return R;
      },
      subscribe(H) {
        return Me.subscribe(H);
      },
      set(H) {
        const Xt = w1(H, tt);
        Dt(Xt);
      },
      setValue: Dt,
      getValue() {
        return Nl(Me);
      },
      getType() {
        return tt;
      }
    };
  }
  function zt(y, C, S) {
    if (y.type === "property")
      return P(y, C, S);
    if (!y.type || !y.name || !(y.type in Kl) || !("value" in y))
      return;
    const ae = y.value;
    let R = C ? C.getJsonWithVars(ae, S, !0) : lt(F, ae, S, !0);
    if (!(ae && typeof ae == "string" && R === void 0)) {
      y.type === "integer" && typeof R == "number" && (R > Number.MAX_SAFE_INTEGER || R < Number.MIN_SAFE_INTEGER) && F(X(new Error("The value of the integer variable could lose accuracy"), {
        level: "warn",
        additional: { name: y.name, value: R }
      }));
      try {
        return Yn(y.name, y.type, R);
      } catch (tt) {
        F(X(tt, { additional: { name: y.name } }));
      }
    }
  }
  function Lt(y) {
    const C = zt(y);
    C && (Ke.set(y.name, C), $.set(y.name, C));
  }
  for (const [y, C] of Ue)
    $.has(y) || $.set(y, C);
  const Ge = (qr = l == null ? void 0 : l.card) == null ? void 0 : qr.variables;
  Array.isArray(Ge) && Ge.forEach((y) => {
    if (y && y.name) {
      if (Ke.has(y.name)) {
        F(X(new Error("Duplicate variable"), { additional: { name: y.name } }));
        return;
      }
      Lt(y);
    }
  });
  const st = l.palette;
  st && st[he].forEach((C) => {
    if (Ke.has(C.name)) {
      F(X(new Error("Duplicate variable"), { additional: { name: C.name } }));
      return;
    }
    try {
      const S = Yn(C.name, "color", C.color);
      Ke.set(C.name, S), $.set(C.name, S);
    } catch (S) {
      F(X(S, { additional: { name: C.name } }));
    }
  }), we.subscribe((y) => {
    if (y && !$.has(y)) {
      const C = Ue.get(y);
      $.set(y, C);
      const S = Oe.get(y);
      if (S) {
        let R = 0;
        C.subscribe(() => {
          S.set(++R);
        });
      }
      const ae = Ne.get(y);
      ae && ae.getType() === C.getType() && C.subscribe((R) => {
        ae.set(R);
      });
    }
  });
  const Jt = () => {
    var y;
    Rt(void 0, (y = l == null ? void 0 : l.card) == null ? void 0 : y.variable_triggers);
  }, Er = (Ur = l == null ? void 0 : l.card) == null ? void 0 : Ur.timers;
  if (Er && typeof document < "u") {
    const y = ot = new p3({
      logError: F,
      applyVars: (C) => lt(F, C),
      hasVariableWithType: We,
      setVariableValue: ke,
      execAnyActions: Nt
    });
    Er.forEach((C) => y.createTimer(C));
  }
  const lr = L();
  Array.isArray((an = l.card) == null ? void 0 : an.functions) && (lr.customFunctions = d(l.card.functions));
  let Ir;
  function yn(y) {
    t(3, kt = kt.filter((C) => C.internalId !== y));
  }
  Qn(() => {
    js++, js === 1 && (window.addEventListener("keydown", id), window.addEventListener("pointerdown", sd)), An().then(() => {
      Ae && Jt();
    });
  }), ln(() => {
    Ae = !1, js--, js || (window.removeEventListener("keydown", id), window.removeEventListener("pointerdown", sd));
    for (const [y, C] of ct)
      C.stop();
    ot && ot.destroy(), kt.forEach((y) => {
      y.timeoutId && (clearTimeout(y.timeoutId), y.timeoutId = null);
    }), ft.forEach((y) => {
      clearTimeout(y);
    });
  });
  const Se = () => t(4, Mt = void 0);
  return e.$$set = (y) => {
    "id" in y && t(13, a = y.id), "json" in y && t(11, l = y.json), "platform" in y && t(14, u = y.platform), "theme" in y && t(12, c = y.theme), "globalVariablesController" in y && t(15, f = y.globalVariablesController), "mix" in y && t(0, _ = y.mix), "customization" in y && t(16, h = y.customization), "builtinProtocols" in y && t(17, m = y.builtinProtocols), "extensions" in y && t(18, p = y.extensions), "onError" in y && t(19, w = y.onError), "onStat" in y && t(20, k = y.onStat), "onSubmit" in y && t(21, N = y.onSubmit), "onCustomAction" in y && t(22, B = y.onCustomAction), "onComponent" in y && t(23, z = y.onComponent), "typefaceProvider" in y && t(24, oe = y.typefaceProvider), "fetchInit" in y && t(25, fe = y.fetchInit), "tooltipRoot" in y && t(26, T = y.tooltipRoot), "customComponents" in y && t(27, Y = y.customComponents), "direction" in y && t(28, le = y.direction), "store" in y && t(29, A = y.store), "pagerChildrenClipEnabled" in y && t(30, D = y.pagerChildrenClipEnabled), "pagerMouseDragEnabled" in y && t(31, M = y.pagerMouseDragEnabled), "weekStartDay" in y && t(32, U = y.weekStartDay), "videoPlayerProvider" in y && t(33, q = y.videoPlayerProvider), "devtoolCreateHierarchy" in y && t(34, be = y.devtoolCreateHierarchy);
  }, e.$$.update = () => {
    var y, C;
    if (e.$$.dirty[0] & /*theme*/
    4096 | e.$$.dirty[1] & /*themeQuery*/
    2048 && (c === "light" || c === "dark" ? t(41, he = c) : c === "system" ? typeof matchMedia < "u" ? (Fe || (t(42, Fe = matchMedia("(prefers-color-scheme: dark)")), Fe.addListener(Je)), t(41, he = Fe.matches ? "dark" : "light")) : t(41, he = "light") : F(X(new Error("Unsupported theme")))), e.$$.dirty[1] & /*currentTheme*/
    1024 && he && Ht(), e.$$.dirty[0] & /*json*/
    2048) {
      t(1, _e = !1);
      const S = u3(l);
      S && (t(1, _e = !0), F(S));
    }
    if (e.$$.dirty[0] & /*json*/
    2048 && (n = l.templates || {}), e.$$.dirty[0] & /*json*/
    2048 && (y = l == null ? void 0 : l.card) != null && y.variables && Array.isArray(l.card.variables) && l.card.variables !== Ge && l.card.variables.forEach((S) => {
      S && S.name && !Ke.has(S.name) && !$.has(S.name) && Lt(S);
    }), e.$$.dirty[0] & /*json*/
    2048 && t(44, o = (C = l == null ? void 0 : l.card) == null ? void 0 : C.states), e.$$.dirty[0] & /*hasError, hasIdError*/
    6 | e.$$.dirty[1] & /*states, rootComponentContext*/
    12288 && o && !_e && !ee) {
      const S = {
        type: "state",
        id: "root",
        width: { type: "match_parent" },
        height: { type: "match_parent" },
        states: o.map((ae) => ({
          state_id: ae.state_id.toString(),
          div: ae.div
        }))
      };
      t(6, Ir = lr.produceChildContext(S, { isRootState: !0 }));
    }
  }, [
    _,
    _e,
    ee,
    kt,
    Mt,
    At,
    Ir,
    i,
    s,
    Ce,
    x,
    l,
    c,
    a,
    u,
    f,
    h,
    m,
    p,
    w,
    k,
    N,
    B,
    z,
    oe,
    fe,
    T,
    Y,
    le,
    A,
    D,
    M,
    U,
    q,
    be,
    Ye,
    Xe,
    ye,
    Ie,
    pe,
    fr,
    he,
    Fe,
    lr,
    o,
    Se
  ];
}
class a4 extends Or {
  constructor(r) {
    super(), Lr(
      this,
      r,
      l4,
      n4,
      Sr,
      {
        id: 13,
        json: 11,
        platform: 14,
        theme: 12,
        globalVariablesController: 15,
        mix: 0,
        customization: 16,
        builtinProtocols: 17,
        extensions: 18,
        onError: 19,
        onStat: 20,
        onSubmit: 21,
        onCustomAction: 22,
        onComponent: 23,
        typefaceProvider: 24,
        fetchInit: 25,
        tooltipRoot: 26,
        customComponents: 27,
        direction: 28,
        store: 29,
        pagerChildrenClipEnabled: 30,
        pagerMouseDragEnabled: 31,
        weekStartDay: 32,
        videoPlayerProvider: 33,
        devtoolCreateHierarchy: 34,
        setTheme: 35,
        getDebugVariables: 36,
        getDebugAllVariables: 37,
        setData: 38,
        applyPatch: 39,
        execAction: 40
      },
      null,
      [-1, -1, -1, -1, -1]
    );
  }
  get setTheme() {
    return this.$$.ctx[35];
  }
  get getDebugVariables() {
    return this.$$.ctx[36];
  }
  get getDebugAllVariables() {
    return this.$$.ctx[37];
  }
  get setData() {
    return this.$$.ctx[38];
  }
  get applyPatch() {
    return this.$$.ctx[39];
  }
  get execAction() {
    return this.$$.ctx[40];
  }
}
const u4 = 8;
class _4 {
  constructor(r) {
    Vr(this, "widthVariableName");
    Vr(this, "heightVariableName");
    Vr(this, "resizeObserver");
    Vr(this, "context");
    Vr(this, "node");
    Vr(this, "sizeHistory", {});
    this.widthVariableName = r.width_variable_name, this.heightVariableName = r.height_variable_name;
  }
  setVariable(r, t) {
    if (!this.context)
      return !1;
    if (r) {
      const n = this.context.variables.get(r);
      if (n && n.getType() === "integer") {
        if (t = Math.round(t), this.sizeHistory[r] || (this.sizeHistory[r] = /* @__PURE__ */ new Set()), !this.sizeHistory[r].has(t))
          return n.setValue(t), this.sizeHistory[r].add(t), !0;
      } else {
        const o = new Error("Missing variable");
        o.level = "error", o.additional = {
          variableName: r
        }, this.context.logError(o);
      }
    }
    return !1;
  }
  recalcProps() {
    if (!this.node || !this.context)
      return !1;
    const r = this.node.getBoundingClientRect(), t = this.setVariable(this.widthVariableName, r.width), n = this.setVariable(this.heightVariableName, r.height);
    return t || n;
  }
  mountView(r, t) {
    var n;
    this.node = r, this.context = t, !this.resizeObserver && typeof ResizeObserver < "u" && (this.resizeObserver = new ResizeObserver(async () => {
      let o = 0;
      for (; this.recalcProps(); ) {
        if (++o > u4) {
          const i = new Error("Recursive layout in size_provider");
          i.level = "warn", i.additional = {
            widthVariableName: this.widthVariableName,
            heightVariableName: this.heightVariableName
          }, t.logError(i);
          break;
        }
        await An();
      }
      this.sizeHistory = {};
    })), (n = this.resizeObserver) == null || n.observe(r), this.recalcProps();
  }
  unmountView(r, t) {
    var n;
    (n = this.resizeObserver) == null || n.disconnect(), this.resizeObserver = void 0;
  }
}
const Di = 8;
class p4 {
  constructor(r) {
    Vr(this, "context");
    Vr(this, "params");
    Vr(this, "startCoords");
    this.params = r, this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this);
  }
  processActions(r) {
    const t = this.params[r];
    Array.isArray(t) && t.length && this.context && this.context.processExpressions(t).forEach((o) => {
      var i;
      (i = this.context) == null || i.execAction(o);
    });
  }
  onPointerDown(r) {
    this.startCoords = {
      pageX: r.pageX,
      pageY: r.pageY
    };
  }
  onPointerMove(r) {
    if (!this.startCoords)
      return;
    const t = r.pageX - this.startCoords.pageX, n = r.pageY - this.startCoords.pageY;
    (Math.abs(t) > Di || Math.abs(n) > Di) && (Math.abs(t) > Math.abs(n) ? t > Di ? this.processActions("swipe_right") : t < -Di && this.processActions("swipe_left") : n > Di ? this.processActions("swipe_down") : n < -Di && this.processActions("swipe_up"), this.startCoords = void 0);
  }
  onPointerUp() {
    this.startCoords = void 0;
  }
  mountView(r, t) {
    this.context = t, r.addEventListener("pointerdown", this.onPointerDown), r.addEventListener("pointermove", this.onPointerMove), r.addEventListener("pointerup", this.onPointerUp), r.addEventListener("pointercancel", this.onPointerUp), r.style.pointerEvents = "auto";
  }
  updateView(r) {
    r.style.pointerEvents = "auto";
  }
  unmountView(r, t) {
    r.removeEventListener("pointerdown", this.onPointerDown), r.removeEventListener("pointermove", this.onPointerMove), r.removeEventListener("pointerup", this.onPointerUp), r.removeEventListener("pointercancel", this.onPointerUp), r.style.pointerEvents = "";
  }
}
function c4(e) {
  return e instanceof HTMLElement;
}
function h4(e) {
  return class {
    constructor(t) {
      Vr(this, "params");
      Vr(this, "animItem");
      Vr(this, "wrapper");
      Vr(this, "isPlayingUnsubscriber");
      Vr(this, "isPlaying", !0);
      Vr(this, "unsubscribe");
      this.params = t;
    }
    loadData(t) {
      return this.params.lottie_json ? Promise.resolve(this.params.lottie_json) : t ? fetch(t).then((n) => {
        if (!n.ok)
          throw new Error("Response is not ok");
        return n.json();
      }) : Promise.reject("Missing data");
    }
    getRatio(t) {
      var o;
      const n = (o = t.getComponentProperty("aspect")) == null ? void 0 : o.ratio;
      if (typeof n == "number" && n > 0)
        return n;
    }
    getScale(t) {
      const n = t.getComponentProperty("scale");
      if (n === "stretch")
        return {
          attribute: "none",
          noScale: !1,
          hAlign: "center",
          vAlign: "center"
        };
      let o = t.getComponentProperty("content_alignment_horizontal"), i = t.getComponentProperty("content_alignment_vertical"), s = "Mid", a = "Mid";
      return o === "start" ? o = t.direction === "ltr" ? "start" : "end" : o === "end" ? o = t.direction === "ltr" ? "end" : "start" : o === "left" ? o = "start" : o === "right" ? o = "end" : o = "center", i === "top" ? i = "start" : i === "bottom" ? i = "end" : i = "center", n === "no_scale" ? {
        attribute: "xMidYMid meet",
        noScale: !0,
        hAlign: o,
        vAlign: i
      } : (o === "start" ? s = "Min" : o === "end" && (s = "Max"), i === "start" ? a = "Min" : i === "end" && (a = "Max"), n === "fit" || n === "no_scale" ? {
        attribute: `x${s}Y${a} meet`,
        noScale: !1,
        hAlign: o,
        vAlign: i
      } : {
        attribute: `x${s}Y${a} slice`,
        noScale: !1,
        hAlign: o,
        vAlign: i
      });
    }
    getSvg() {
      var n;
      const t = (n = this.wrapper) == null ? void 0 : n.firstElementChild;
      if (t instanceof SVGElement)
        return t;
    }
    setWrapperScale(t) {
      this.wrapper && (t.noScale ? (this.wrapper.style.display = "flex", this.wrapper.style.alignItems = t.vAlign, this.wrapper.style.justifyContent = t.hAlign) : (this.wrapper.style.display = "", this.wrapper.style.alignItems = "", this.wrapper.style.justifyContent = ""));
    }
    setSvgScale(t) {
      const n = this.getSvg();
      n && (t.noScale ? (n.style.flex = "0 0 auto", n.style.width = "", n.style.height = "") : (n.style.flex = "", n.style.width = "100%", n.style.height = "100%"));
    }
    mountView(t, n) {
      var f;
      if (!this.params.lottie_url && !this.params.lottie_json)
        return;
      const o = Array.from(t.children).filter(c4);
      o.forEach((_) => {
        _.style.display = "none";
      }), t.setAttribute("data-lottie", "true");
      const i = this.wrapper = document.createElement("div");
      this.wrapper.style.width = "100%", this.wrapper.style.height = "100%";
      const s = this.getRatio(n), a = this.getScale(n);
      s && (this.wrapper.style.aspectRatio = String(s)), this.setWrapperScale(a), t.appendChild(this.wrapper);
      const l = Number((f = n.processExpressions(this.params.repeat_count)) != null ? f : -1), u = n.processExpressions(this.params.repeat_mode), c = () => {
        var h, m;
        (h = this.animItem) == null || h.destroy(), o.forEach((p) => {
          p.style.display = "";
        }), t.removeAttribute("data-lottie"), this.wrapper && ((m = this.wrapper.parentNode) == null || m.removeChild(this.wrapper), this.wrapper = void 0);
        const _ = new Error("Failed to load lottie animation");
        _.level = "error", _.additional = {
          url: this.params.lottie_url
        }, n.logError(_);
      };
      this.unsubscribe = n.derviedExpression(this.params.lottie_url).subscribe((_) => {
        this.loadData(_).then((h) => {
          var w;
          (w = this.animItem) == null || w.destroy();
          const m = l !== 0, p = this.animItem = e({
            container: i,
            animationData: h,
            renderer: "svg",
            loop: m,
            rendererSettings: {
              preserveAspectRatio: a.attribute
            }
          });
          if (this.setSvgScale(a), this.animItem.addEventListener("data_failed", c), m && (u === "reverse" || l !== -1)) {
            let k = 1, N = 0;
            p.addEventListener("loopComplete", () => {
              ++N, l !== -1 && N === l + 1 ? (p.stop(), p.goToAndStop(p.totalFrames, !0)) : (u === "reverse" && (k *= -1, p.setDirection(k)), p.goToAndPlay(k === 1 ? 0 : p.totalFrames, !0));
            });
          }
        }).catch(c);
      }), this.isPlayingUnsubscriber = n.derviedExpression(this.params.is_playing).subscribe((_) => {
        this.isPlaying = _ !== !1, this.animItem && this.animItem[this.isPlaying ? "play" : "pause"]();
      });
    }
    updateView(t, n) {
      if (!this.wrapper)
        return;
      const o = this.getRatio(n);
      o && (this.wrapper.style.aspectRatio = String(o));
      const i = this.getSvg();
      if (i) {
        const s = this.getScale(n);
        this.setWrapperScale(s), this.setSvgScale(s), i.setAttribute("preserveAspectRatio", s.attribute);
      }
    }
    unmountView(t, n) {
      var o, i, s, a;
      (o = this.animItem) == null || o.destroy(), this.wrapper && ((i = this.wrapper.parentNode) == null || i.removeChild(this.wrapper), this.wrapper = void 0), t.removeAttribute("data-lottie"), (s = this.unsubscribe) == null || s.call(this), (a = this.isPlayingUnsubscriber) == null || a.call(this);
    }
  };
}
function b4(e, r = {}) {
  return class {
    constructor() {
      Vr(this, "prevDOM", null);
    }
    recalc(n, o) {
      const i = n.firstElementChild, s = i == null ? void 0 : i.firstElementChild;
      if (!s)
        return;
      this.prevDOM = i.cloneNode(!0);
      const a = o.getComponentProperty("text") || "", l = e(a), u = document.createElement("div");
      u.innerHTML = l, r != null && r.cssClass && u.classList.add(r.cssClass);
      const c = Array.from(i.childNodes);
      for (let f = 0, _ = c.length; f < _; ++f) {
        const h = c[f];
        (h.nodeType !== 1 || h !== s) && i.removeChild(h);
      }
      s.innerHTML = "", s.appendChild(u);
    }
    mountView(n, o) {
      this.recalc(n, o);
    }
    updateView(n, o) {
      this.recalc(n, o);
    }
    unmountView(n) {
      if (this.prevDOM) {
        const o = n.firstElementChild;
        o && o.replaceWith(this.prevDOM), this.prevDOM = null;
      }
    }
  };
}
function y4(e) {
  const { target: r, hydrate: t, ...n } = e, o = new a4({
    target: r,
    props: n,
    hydrate: t
  });
  return {
    $destroy() {
      o.$destroy();
    },
    execAction(i) {
      o.execAction(i);
    },
    setTheme(i) {
      o.setTheme(i);
    },
    setData(i) {
      o.setData(i);
    },
    applyPatch(i) {
      return o.applyPatch(i);
    }
  };
}
export {
  p4 as Gesture,
  _4 as SizeProvider,
  d4 as createGlobalVariablesController,
  Yn as createVariable,
  h4 as lottieExtensionBuilder,
  b4 as markdownExtensionBuilder,
  y4 as render
};
//# sourceMappingURL=client.mjs.map
