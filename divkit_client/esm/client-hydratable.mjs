var O_ = Object.defineProperty;
var B_ = (t, r, e) => r in t ? O_(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var Vr = (t, r, e) => B_(t, typeof r != "symbol" ? r + "" : r, e);
/*!
    DivKit v32.39.0
    https://github.com/divkit/divkit
    @licence Apache-2.0
*/
function j() {
}
const ul = (t) => t;
function Do(t, r) {
  for (const e in r) t[e] = r[e];
  return (
    /** @type {T & S} */
    t
  );
}
function md(t) {
  return t();
}
function La() {
  return /* @__PURE__ */ Object.create(null);
}
function Gr(t) {
  t.forEach(md);
}
function Rr(t) {
  return typeof t == "function";
}
function L_(t, r) {
  return t != t ? r == r : t !== r || t && typeof t == "object" || typeof t == "function";
}
let ys;
function to(t, r) {
  return t === r ? !0 : (ys || (ys = document.createElement("a")), ys.href = r, t === ys.href);
}
function Tr(t, r) {
  return t != t ? r == r : t !== r;
}
function R_(t) {
  return Object.keys(t).length === 0;
}
function V(t, ...r) {
  if (t == null) {
    for (const n of r)
      n(void 0);
    return j;
  }
  const e = t.subscribe(...r);
  return e.unsubscribe ? () => e.unsubscribe() : e;
}
function Ul(t) {
  let r;
  return V(t, (e) => r = e)(), r;
}
function kn(t, r, e) {
  t.$$.on_destroy.push(V(r, e));
}
function cl(t, r, e, n) {
  if (t) {
    const o = bd(t, r, e, n);
    return t[0](o);
  }
}
function bd(t, r, e, n) {
  return t[1] && n ? Do(e.ctx.slice(), t[1](n(r))) : e.ctx;
}
function fl(t, r, e, n) {
  if (t[2] && n) {
    const o = t[2](n(e));
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
function dl(t, r, e, n, o, i) {
  if (o) {
    const s = bd(r, e, n, i);
    t.p(s, o);
  }
}
function _l(t) {
  if (t.ctx.length > 32) {
    const r = [], e = t.ctx.length / 32;
    for (let n = 0; n < e; n++)
      r[n] = -1;
    return r;
  }
  return -1;
}
function Dl(t, r, e) {
  return t.set(e), r;
}
function hl(t) {
  return t && Rr(t.destroy) ? t.destroy : j;
}
function Ra(t) {
  const r = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return r ? [parseFloat(r[1]), r[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
const yd = typeof window < "u";
let pa = yd ? () => window.performance.now() : () => Date.now(), ga = yd ? (t) => requestAnimationFrame(t) : j;
const Ri = /* @__PURE__ */ new Set();
function wd(t) {
  Ri.forEach((r) => {
    r.c(t) || (Ri.delete(r), r.f());
  }), Ri.size !== 0 && ga(wd);
}
function ma(t) {
  let r;
  return Ri.size === 0 && ga(wd), {
    promise: new Promise((e) => {
      Ri.add(r = { c: t, f: e });
    }),
    abort() {
      Ri.delete(r);
    }
  };
}
const Ro = typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : (
  // @ts-ignore Node typings have this
  global
);
let pl = !1;
function H_() {
  pl = !0;
}
function W_() {
  pl = !1;
}
function U_(t, r, e, n) {
  for (; t < r; ) {
    const o = t + (r - t >> 1);
    e(o) <= n ? t = o + 1 : r = o;
  }
  return t;
}
function G_(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let r = (
    /** @type {ArrayLike<NodeEx2>} */
    t.childNodes
  );
  if (t.nodeName === "HEAD") {
    const l = [];
    for (let u = 0; u < r.length; u++) {
      const c = r[u];
      c.claim_order !== void 0 && l.push(c);
    }
    r = l;
  }
  const e = new Int32Array(r.length + 1), n = new Int32Array(r.length);
  e[0] = -1;
  let o = 0;
  for (let l = 0; l < r.length; l++) {
    const u = r[l].claim_order, c = (o > 0 && r[e[o]].claim_order <= u ? o + 1 : U_(1, o, (_) => r[e[_]].claim_order, u)) - 1;
    n[l] = e[c] + 1;
    const f = c + 1;
    e[f] = l, o = Math.max(f, o);
  }
  const i = [], s = [];
  let a = r.length - 1;
  for (let l = e[o] + 1; l != 0; l = n[l - 1]) {
    for (i.push(r[l - 1]); a >= l; a--)
      s.push(r[a]);
    a--;
  }
  for (; a >= 0; a--)
    s.push(r[a]);
  i.reverse(), s.sort((l, u) => l.claim_order - u.claim_order);
  for (let l = 0, u = 0; l < s.length; l++) {
    for (; u < i.length && s[l].claim_order >= i[u].claim_order; )
      u++;
    const c = u < i.length ? i[u] : null;
    t.insertBefore(s[l], c);
  }
}
function J_(t, r) {
  t.appendChild(r);
}
function vd(t) {
  if (!t) return document;
  const r = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return r && /** @type {ShadowRoot} */
  r.host ? (
    /** @type {ShadowRoot} */
    r
  ) : t.ownerDocument;
}
function q_(t) {
  const r = Me("style");
  return r.textContent = "/* empty */", K_(vd(t), r), r.sheet;
}
function K_(t, r) {
  return J_(
    /** @type {Document} */
    t.head || t,
    r
  ), r.sheet;
}
function jt(t, r) {
  if (pl) {
    for (G_(t), (t.actual_end_child === void 0 || t.actual_end_child !== null && t.actual_end_child.parentNode !== t) && (t.actual_end_child = t.firstChild); t.actual_end_child !== null && t.actual_end_child.claim_order === void 0; )
      t.actual_end_child = t.actual_end_child.nextSibling;
    r !== t.actual_end_child ? (r.claim_order !== void 0 || r.parentNode !== t) && t.insertBefore(r, t.actual_end_child) : t.actual_end_child = r.nextSibling;
  } else (r.parentNode !== t || r.nextSibling !== null) && t.appendChild(r);
}
function Y_(t, r, e) {
  t.insertBefore(r, e || null);
}
function K(t, r, e) {
  pl && !e ? jt(t, r) : (r.parentNode !== t || r.nextSibling != e) && t.insertBefore(r, e || null);
}
function k(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function hn(t, r) {
  for (let e = 0; e < t.length; e += 1)
    t[e] && t[e].d(r);
}
function Me(t) {
  return document.createElement(t);
}
function tn(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function Bn(t) {
  return document.createTextNode(t);
}
function gr() {
  return Bn(" ");
}
function Re() {
  return Bn("");
}
function et(t, r, e, n) {
  return t.addEventListener(r, e, n), () => t.removeEventListener(r, e, n);
}
function X_(t) {
  return function(r) {
    return r.preventDefault(), t.call(this, r);
  };
}
function g(t, r, e) {
  e == null ? t.removeAttribute(r) : t.getAttribute(r) !== e && t.setAttribute(r, e);
}
const Z_ = ["width", "height"];
function $o(t, r) {
  const e = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const n in r)
    r[n] == null ? t.removeAttribute(n) : n === "style" ? t.style.cssText = r[n] : n === "__value" ? t.value = t[n] = r[n] : e[n] && e[n].set && Z_.indexOf(n) === -1 ? t[n] = r[n] : g(t, n, r[n]);
}
function Q_(t, r) {
  Object.keys(r).forEach((e) => {
    x_(t, e, r[e]);
  });
}
function x_(t, r, e) {
  const n = r.toLowerCase();
  n in t ? t[n] = typeof t[n] == "boolean" && e === "" ? !0 : e : r in t ? t[r] = typeof t[r] == "boolean" && e === "" ? !0 : e : g(t, r, e);
}
function ai(t) {
  return /-/.test(t) ? Q_ : $o;
}
function je(t) {
  return Array.from(t.childNodes);
}
function kd(t) {
  t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function jd(t, r, e, n, o = !1) {
  kd(t);
  const i = (() => {
    for (let s = t.claim_info.last_index; s < t.length; s++) {
      const a = t[s];
      if (r(a)) {
        const l = e(a);
        return l === void 0 ? t.splice(s, 1) : t[s] = l, o || (t.claim_info.last_index = s), a;
      }
    }
    for (let s = t.claim_info.last_index - 1; s >= 0; s--) {
      const a = t[s];
      if (r(a)) {
        const l = e(a);
        return l === void 0 ? t.splice(s, 1) : t[s] = l, o ? l === void 0 && t.claim_info.last_index-- : t.claim_info.last_index = s, a;
      }
    }
    return n();
  })();
  return i.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1, i;
}
function Ed(t, r, e, n) {
  return jd(
    t,
    /** @returns {node is Element | SVGElement} */
    (o) => o.nodeName === r,
    /** @param {Element} node */
    (o) => {
      const i = [];
      for (let s = 0; s < o.attributes.length; s++) {
        const a = o.attributes[s];
        e[a.name] || i.push(a.name);
      }
      i.forEach((s) => o.removeAttribute(s));
    },
    () => n(r)
  );
}
function ze(t, r, e) {
  return Ed(t, r, e, Me);
}
function an(t, r, e) {
  return Ed(t, r, e, tn);
}
function qn(t, r) {
  return jd(
    t,
    /** @returns {node is Text} */
    (e) => e.nodeType === 3,
    /** @param {Text} node */
    (e) => {
      const n = "" + r;
      if (e.data.startsWith(n)) {
        if (e.data.length !== n.length)
          return e.splitText(n.length);
      } else
        e.data = n;
    },
    () => Bn(r),
    !0
    // Text nodes should not update last index since it is likely not worth it to eliminate an increasing subsequence of actual elements
  );
}
function mr(t) {
  return qn(t, " ");
}
function Ha(t, r, e) {
  for (let n = e; n < t.length; n += 1) {
    const o = t[n];
    if (o.nodeType === 8 && o.textContent.trim() === r)
      return n;
  }
  return -1;
}
function ba(t, r) {
  const e = Ha(t, "HTML_TAG_START", 0), n = Ha(t, "HTML_TAG_END", e + 1);
  if (e === -1 || n === -1)
    return new Hi(r);
  kd(t);
  const o = t.splice(e, n - e + 1);
  k(o[0]), k(o[o.length - 1]);
  const i = o.slice(1, o.length - 1);
  if (i.length === 0)
    return new Hi(r);
  for (const s of i)
    s.claim_order = t.claim_info.total_claimed, t.claim_info.total_claimed += 1;
  return new Hi(r, i);
}
function Qn(t, r) {
  r = "" + r, t.data !== r && (t.data = /** @type {string} */
  r);
}
function Wa(t, r) {
  t.value = r == null ? "" : r;
}
function N(t, r, e, n) {
  e == null ? t.style.removeProperty(r) : t.style.setProperty(r, e, "");
}
function Ua(t, r, e) {
  for (let n = 0; n < t.options.length; n += 1) {
    const o = t.options[n];
    if (o.__value === r) {
      o.selected = !0;
      return;
    }
  }
  (!e || r !== void 0) && (t.selectedIndex = -1);
}
function $_(t) {
  const r = t.querySelector(":checked");
  return r && r.__value;
}
function Cd(t, r, { bubbles: e = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(t, { detail: r, bubbles: e, cancelable: n });
}
class eh {
  constructor(r = !1) {
    /**
     * @private
     * @default false
     */
    Vr(this, "is_svg", !1);
    /** parent for creating node */
    Vr(this, "e");
    /** html tag nodes */
    Vr(this, "n");
    /** target */
    Vr(this, "t");
    /** anchor */
    Vr(this, "a");
    this.is_svg = r, this.e = this.n = null;
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  c(r) {
    this.h(r);
  }
  /**
   * @param {string} html
   * @param {HTMLElement | SVGElement} target
   * @param {HTMLElement | SVGElement} anchor
   * @returns {void}
   */
  m(r, e, n = null) {
    this.e || (this.is_svg ? this.e = tn(
      /** @type {keyof SVGElementTagNameMap} */
      e.nodeName
    ) : this.e = Me(
      /** @type {keyof HTMLElementTagNameMap} */
      e.nodeType === 11 ? "TEMPLATE" : e.nodeName
    ), this.t = e.tagName !== "TEMPLATE" ? e : (
      /** @type {HTMLTemplateElement} */
      e.content
    ), this.c(r)), this.i(n);
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  h(r) {
    this.e.innerHTML = r, this.n = Array.from(
      this.e.nodeName === "TEMPLATE" ? this.e.content.childNodes : this.e.childNodes
    );
  }
  /**
   * @returns {void} */
  i(r) {
    for (let e = 0; e < this.n.length; e += 1)
      Y_(this.t, this.n[e], r);
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  p(r) {
    this.d(), this.h(r), this.i(this.a);
  }
  /**
   * @returns {void} */
  d() {
    this.n.forEach(k);
  }
}
class Hi extends eh {
  constructor(e = !1, n) {
    super(e);
    /** @type {Element[]} hydration claimed nodes */
    Vr(this, "l");
    this.e = this.n = null, this.l = n;
  }
  /**
   * @param {string} html
   * @returns {void}
   */
  c(e) {
    this.l ? this.n = this.l : super.c(e);
  }
  /**
   * @returns {void} */
  i(e) {
    for (let n = 0; n < this.n.length; n += 1)
      K(this.t, this.n[n], e);
  }
}
function Ga(t, r) {
  return new t(r);
}
const Xs = /* @__PURE__ */ new Map();
let Zs = 0;
function th(t) {
  let r = 5381, e = t.length;
  for (; e--; ) r = (r << 5) - r ^ t.charCodeAt(e);
  return r >>> 0;
}
function rh(t, r) {
  const e = { stylesheet: q_(r), rules: {} };
  return Xs.set(t, e), e;
}
function Qs(t, r, e, n, o, i, s, a = 0) {
  const l = 16.666 / n;
  let u = `{
`;
  for (let y = 0; y <= 1; y += l) {
    const w = r + (e - r) * i(y);
    u += y * 100 + `%{${s(w, 1 - w)}}
`;
  }
  const c = u + `100% {${s(e, 1 - e)}}
}`, f = `__svelte_${th(c)}_${a}`, _ = vd(t), { stylesheet: p, rules: m } = Xs.get(_) || rh(_, t);
  m[f] || (m[f] = !0, p.insertRule(`@keyframes ${f} ${c}`, p.cssRules.length));
  const h = t.style.animation || "";
  return t.style.animation = `${h ? `${h}, ` : ""}${f} ${n}ms linear ${o}ms 1 both`, Zs += 1, f;
}
function xs(t, r) {
  const e = (t.style.animation || "").split(", "), n = e.filter(
    r ? (i) => i.indexOf(r) < 0 : (i) => i.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), o = e.length - n.length;
  o && (t.style.animation = n.join(", "), Zs -= o, Zs || nh());
}
function nh() {
  ga(() => {
    Zs || (Xs.forEach((t) => {
      const { ownerNode: r } = t.stylesheet;
      r && k(r);
    }), Xs.clear());
  });
}
let fs;
function us(t) {
  fs = t;
}
function Xi() {
  if (!fs) throw new Error("Function called outside component initialization");
  return fs;
}
function no(t) {
  Xi().$$.on_mount.push(t);
}
function gl(t) {
  Xi().$$.after_update.push(t);
}
function dn(t) {
  Xi().$$.on_destroy.push(t);
}
function oh() {
  const t = Xi();
  return (r, e, { cancelable: n = !1 } = {}) => {
    const o = t.$$.callbacks[r];
    if (o) {
      const i = Cd(
        /** @type {string} */
        r,
        e,
        { cancelable: n }
      );
      return o.slice().forEach((s) => {
        s.call(t, i);
      }), !i.defaultPrevented;
    }
    return !0;
  };
}
function ki(t, r) {
  return Xi().$$.context.set(t, r), r;
}
function zr(t) {
  return Xi().$$.context.get(t);
}
function Un(t, r) {
  const e = t.$$.callbacks[r.type];
  e && e.slice().forEach((n) => n.call(this, r));
}
const Oi = [], Mr = [];
let Wi = [];
const Ja = [], Ad = /* @__PURE__ */ Promise.resolve();
let Gl = !1;
function Vd() {
  Gl || (Gl = !0, Ad.then(Sd));
}
function Fn() {
  return Vd(), Ad;
}
function yo(t) {
  Wi.push(t);
}
const Il = /* @__PURE__ */ new Set();
let Pi = 0;
function Sd() {
  if (Pi !== 0)
    return;
  const t = fs;
  do {
    try {
      for (; Pi < Oi.length; ) {
        const r = Oi[Pi];
        Pi++, us(r), ih(r.$$);
      }
    } catch (r) {
      throw Oi.length = 0, Pi = 0, r;
    }
    for (us(null), Oi.length = 0, Pi = 0; Mr.length; ) Mr.pop()();
    for (let r = 0; r < Wi.length; r += 1) {
      const e = Wi[r];
      Il.has(e) || (Il.add(e), e());
    }
    Wi.length = 0;
  } while (Oi.length);
  for (; Ja.length; )
    Ja.pop()();
  Gl = !1, Il.clear(), us(t);
}
function ih(t) {
  if (t.fragment !== null) {
    t.update(), Gr(t.before_update);
    const r = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, r), t.after_update.forEach(yo);
  }
}
function sh(t) {
  const r = [], e = [];
  Wi.forEach((n) => t.indexOf(n) === -1 ? r.push(n) : e.push(n)), e.forEach((n) => n()), Wi = r;
}
let ss;
function ya() {
  return ss || (ss = Promise.resolve(), ss.then(() => {
    ss = null;
  })), ss;
}
function Ei(t, r, e) {
  t.dispatchEvent(Cd(`${r ? "intro" : "outro"}${e}`));
}
const Fs = /* @__PURE__ */ new Set();
let zo;
function br() {
  zo = {
    r: 0,
    c: [],
    p: zo
    // parent group
  };
}
function yr() {
  zo.r || Gr(zo.c), zo = zo.p;
}
function G(t, r) {
  t && t.i && (Fs.delete(t), t.i(r));
}
function oe(t, r, e, n) {
  if (t && t.o) {
    if (Fs.has(t)) return;
    Fs.add(t), zo.c.push(() => {
      Fs.delete(t), n && (e && t.d(1), n());
    }), t.o(r);
  } else n && n();
}
const wa = { duration: 0 };
function ml(t, r, e) {
  const n = { direction: "in" };
  let o = r(t, e, n), i = !1, s, a, l = 0;
  function u() {
    s && xs(t, s);
  }
  function c() {
    const {
      delay: _ = 0,
      duration: p = 300,
      easing: m = ul,
      tick: h = j,
      css: y
    } = o || wa;
    y && (s = Qs(t, 0, 1, p, _, m, y, l++)), h(0, 1);
    const w = pa() + _, D = w + p;
    a && a.abort(), i = !0, yo(() => Ei(t, !0, "start")), a = ma((z) => {
      if (i) {
        if (z >= D)
          return h(1, 0), Ei(t, !0, "end"), u(), i = !1;
        if (z >= w) {
          const O = m((z - w) / p);
          h(O, 1 - O);
        }
      }
      return i;
    });
  }
  let f = !1;
  return {
    start() {
      f || (f = !0, xs(t), Rr(o) ? (o = o(n), ya().then(c)) : c());
    },
    invalidate() {
      f = !1;
    },
    end() {
      i && (u(), i = !1);
    }
  };
}
function Dd(t, r, e) {
  const n = { direction: "out" };
  let o = r(t, e, n), i = !0, s;
  const a = zo;
  a.r += 1;
  let l;
  function u() {
    const {
      delay: c = 0,
      duration: f = 300,
      easing: _ = ul,
      tick: p = j,
      css: m
    } = o || wa;
    m && (s = Qs(t, 1, 0, f, c, _, m));
    const h = pa() + c, y = h + f;
    yo(() => Ei(t, !1, "start")), "inert" in t && (l = /** @type {HTMLElement} */
    t.inert, t.inert = !0), ma((w) => {
      if (i) {
        if (w >= y)
          return p(0, 1), Ei(t, !1, "end"), --a.r || Gr(a.c), !1;
        if (w >= h) {
          const D = _((w - h) / f);
          p(1 - D, D);
        }
      }
      return i;
    });
  }
  return Rr(o) ? ya().then(() => {
    o = o(n), u();
  }) : u(), {
    end(c) {
      c && "inert" in t && (t.inert = l), c && o.tick && o.tick(1, 0), i && (s && xs(t, s), i = !1);
    }
  };
}
function qa(t, r, e, n) {
  let i = r(t, e, { direction: "both" }), s = n ? 0 : 1, a = null, l = null, u = null, c;
  function f() {
    u && xs(t, u);
  }
  function _(m, h) {
    const y = (
      /** @type {Program['d']} */
      m.b - s
    );
    return h *= Math.abs(y), {
      a: s,
      b: m.b,
      d: y,
      duration: h,
      start: m.start,
      end: m.start + h,
      group: m.group
    };
  }
  function p(m) {
    const {
      delay: h = 0,
      duration: y = 300,
      easing: w = ul,
      tick: D = j,
      css: z
    } = i || wa, O = {
      start: pa() + h,
      b: m
    };
    m || (O.group = zo, zo.r += 1), "inert" in t && (m ? c !== void 0 && (t.inert = c) : (c = /** @type {HTMLElement} */
    t.inert, t.inert = !0)), a || l ? l = O : (z && (f(), u = Qs(t, s, m, y, h, w, z)), m && D(0, 1), a = _(O, y), yo(() => Ei(t, m, "start")), ma(($) => {
      if (l && $ > l.start && (a = _(l, y), l = null, Ei(t, a.b, "start"), z && (f(), u = Qs(
        t,
        s,
        a.b,
        a.duration,
        0,
        w,
        i.css
      ))), a) {
        if ($ >= a.end)
          D(s = a.b, 1 - s), Ei(t, a.b, "end"), l || (a.b ? f() : --a.group.r || Gr(a.group.c)), a = null;
        else if ($ >= a.start) {
          const ue = $ - a.start;
          s = a.a + a.d * w(ue / a.duration), D(s, 1 - s);
        }
      }
      return !!(a || l);
    }));
  }
  return {
    run(m) {
      Rr(i) ? ya().then(() => {
        i = i({ direction: m ? "in" : "out" }), p(m);
      }) : p(m);
    },
    end() {
      f(), a = l = null;
    }
  };
}
function dr(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function Id(t, r) {
  oe(t, 1, 1, () => {
    r.delete(t.key);
  });
}
function Fd(t, r, e, n, o, i, s, a, l, u, c, f) {
  let _ = t.length, p = i.length, m = _;
  const h = {};
  for (; m--; ) h[t[m].key] = m;
  const y = [], w = /* @__PURE__ */ new Map(), D = /* @__PURE__ */ new Map(), z = [];
  for (m = p; m--; ) {
    const M = f(o, i, m), Y = e(M);
    let se = s.get(Y);
    se ? z.push(() => se.p(M, r)) : (se = u(Y, M), se.c()), w.set(Y, y[m] = se), Y in h && D.set(Y, Math.abs(m - h[Y]));
  }
  const O = /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Set();
  function ue(M) {
    G(M, 1), M.m(a, c), s.set(M.key, M), c = M.first, p--;
  }
  for (; _ && p; ) {
    const M = y[p - 1], Y = t[_ - 1], se = M.key, C = Y.key;
    M === Y ? (c = M.first, _--, p--) : w.has(C) ? !s.has(se) || O.has(se) ? ue(M) : $.has(C) ? _-- : D.get(se) > D.get(C) ? ($.add(se), ue(M)) : (O.add(C), _--) : (l(Y, s), _--);
  }
  for (; _--; ) {
    const M = t[_];
    w.has(M.key) || l(M, s);
  }
  for (; p; ) ue(y[p - 1]);
  return Gr(z), y;
}
function Ho(t, r) {
  const e = {}, n = {}, o = { $$scope: 1 };
  let i = t.length;
  for (; i--; ) {
    const s = t[i], a = r[i];
    if (a) {
      for (const l in s)
        l in a || (n[l] = 1);
      for (const l in a)
        o[l] || (e[l] = a[l], o[l] = 1);
      t[i] = a;
    } else
      for (const l in s)
        o[l] = 1;
  }
  for (const s in n)
    s in e || (e[s] = void 0);
  return e;
}
function Td(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function Jt(t) {
  t && t.c();
}
function Xt(t, r) {
  t && t.l(r);
}
function Ht(t, r, e) {
  const { fragment: n, after_update: o } = t.$$;
  n && n.m(r, e), yo(() => {
    const i = t.$$.on_mount.map(md).filter(Rr);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : Gr(i), t.$$.on_mount = [];
  }), o.forEach(yo);
}
function Wt(t, r) {
  const e = t.$$;
  e.fragment !== null && (sh(e.after_update), Gr(e.on_destroy), e.fragment && e.fragment.d(r), e.on_destroy = e.fragment = null, e.ctx = []);
}
function lh(t, r) {
  t.$$.dirty[0] === -1 && (Oi.push(t), Vd(), t.$$.dirty.fill(0)), t.$$.dirty[r / 31 | 0] |= 1 << r % 31;
}
function Hr(t, r, e, n, o, i, s = null, a = [-1]) {
  const l = fs;
  us(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: j,
    not_equal: o,
    bound: La(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(r.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: La(),
    dirty: a,
    skip_bound: !1,
    root: r.target || l.$$.root
  };
  s && s(u.root);
  let c = !1;
  if (u.ctx = e ? e(t, r.props || {}, (f, _, ...p) => {
    const m = p.length ? p[0] : _;
    return u.ctx && o(u.ctx[f], u.ctx[f] = m) && (!u.skip_bound && u.bound[f] && u.bound[f](m), c && lh(t, f)), _;
  }) : [], u.update(), c = !0, Gr(u.before_update), u.fragment = n ? n(u.ctx) : !1, r.target) {
    if (r.hydrate) {
      H_();
      const f = je(r.target);
      u.fragment && u.fragment.l(f), f.forEach(k);
    } else
      u.fragment && u.fragment.c();
    r.intro && G(t.$$.fragment), Ht(t, r.target, r.anchor), W_(), Sd();
  }
  us(l);
}
class Wr {
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
    Wt(this, 1), this.$destroy = j;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(r, e) {
    if (!Rr(e))
      return j;
    const n = this.$$.callbacks[r] || (this.$$.callbacks[r] = []);
    return n.push(e), () => {
      const o = n.indexOf(e);
      o !== -1 && n.splice(o, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(r) {
    this.$$set && !R_(r) && (this.$$.skip_bound = !0, this.$$set(r), this.$$.skip_bound = !1);
  }
}
const ah = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(ah);
const Ni = [];
function uh(t, r) {
  return {
    subscribe: Oo(t, r).subscribe
  };
}
function Oo(t, r = j) {
  let e;
  const n = /* @__PURE__ */ new Set();
  function o(a) {
    if (L_(t, a) && (t = a, e)) {
      const l = !Ni.length;
      for (const u of n)
        u[1](), Ni.push(u, t);
      if (l) {
        for (let u = 0; u < Ni.length; u += 2)
          Ni[u][0](Ni[u + 1]);
        Ni.length = 0;
      }
    }
  }
  function i(a) {
    o(a(t));
  }
  function s(a, l = j) {
    const u = [a, l];
    return n.add(u), n.size === 1 && (e = r(o, i) || j), a(t), () => {
      n.delete(u), n.size === 0 && e && (e(), e = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
function Zi(t, r, e) {
  const n = !Array.isArray(t), o = n ? [t] : t;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = r.length < 2;
  return uh(e, (s, a) => {
    let l = !1;
    const u = [];
    let c = 0, f = j;
    const _ = () => {
      if (c)
        return;
      f();
      const m = r(n ? u[0] : u, s, a);
      i ? s(m) : f = Rr(m) ? m : j;
    }, p = o.map(
      (m, h) => V(
        m,
        (y) => {
          u[h] = y, c &= ~(1 << h), l && _();
        },
        () => {
          c |= 1 << h;
        }
      )
    );
    return l = !0, _(), function() {
      Gr(p), f(), l = !1;
    };
  });
}
const ch = "appkit-root_platform_desktop", fh = "appkit-root__clickable", dh = "appkit-root", _h = "appkit-root__selectable", hh = "appkit-root__unselectable", Fr = {
  root_platform_desktop: ch,
  root__clickable: fh,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  "root__any-actions": "appkit-root__any-actions",
  root: dh,
  root__selectable: _h,
  root__unselectable: hh,
  "root__only-desktop": "appkit-root__only-desktop",
  "root_restrict-scroll": "appkit-root_restrict-scroll",
  "root_disabled-context-menu": "appkit-root_disabled-context-menu"
}, $r = Symbol("root");
function X(t, r = {}) {
  const e = t;
  return e.level = r.level || "error", r.additional && (e.additional = r.additional), e;
}
const ph = "appkit-outer", gh = "appkit-outer_width_content", mh = "appkit-outer_height_content", bh = "appkit-root__clickable", yh = "appkit-outer__border", wh = "appkit-outer_visibility_invisible", vh = "appkit-outer_visibility_gone", $s = {
  outer: ph,
  outer_width_content: gh,
  outer_height_content: mh,
  root__clickable: bh,
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
  outer__border: yh,
  outer_visibility_invisible: wh,
  outer_visibility_gone: vh,
  "outer_has-action-animation": "appkit-outer_has-action-animation",
  "outer_has-custom-focus": "appkit-outer_has-custom-focus"
};
function _r(t) {
  if (!t)
    return;
  let r = "";
  for (const e in t)
    if (t.hasOwnProperty(e)) {
      if (!t[e] && t[e] !== 0)
        continue;
      r && (r += ";"), r += e + ":" + String(t[e]);
    }
  return r || void 0;
}
function me(t) {
  if (typeof t != "number" && typeof t != "string" || !t)
    return "0";
  const r = Number(t);
  return Number.isNaN(r) ? "0" : Math.ceil(r * 1e3) / 1e4 + "em";
}
function pn(t) {
  let r = me(t);
  return r === "0" && (r += "em"), r;
}
function Md(t, r) {
  for (; t.length < r; )
    t = "0" + t;
  return t;
}
function pr(t, r = 1, e = "transparent") {
  if (t = (typeof t == "string" && t || "").toLowerCase(), t.charAt(0) !== "#")
    return e;
  const n = wo(t);
  return n ? (n.a *= r, va(n)) : e;
}
function kh(t, r, e = "transparent") {
  if (t = (typeof t == "string" && t || "").toLowerCase(), t.charAt(0) !== "#")
    return e;
  const n = wo(t);
  return n ? (n.a = r, va(n)) : e;
}
function va(t) {
  return t.a === 255 ? `#${[t.r, t.g, t.b].map((r) => Md(Math.round(r).toString(16), 2)).join("")}` : `rgba(${t.r},${t.g},${t.b},${(t.a / 255).toFixed(2)})`;
}
function wo(t) {
  const r = (
    // #AARRGGBB
    t.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i) || // #ARGB
    t.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])$/i) || // #RRGGBB
    t.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i) || // #RGB
    t.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i)
  );
  if (r) {
    if (r.length === 5) {
      const [u, c, f, _, p] = r, m = f.length === 2 ? f : f + f, h = _.length === 2 ? _ : _ + _, y = p.length === 2 ? p : p + p, w = c.length === 2 ? c : c + c;
      return {
        a: parseInt(w, 16),
        r: parseInt(m, 16),
        g: parseInt(h, 16),
        b: parseInt(y, 16)
      };
    }
    const [e, n, o, i] = r, s = n.length === 2 ? n : n + n, a = o.length === 2 ? o : o + o, l = i.length === 2 ? i : i + i;
    return {
      a: 255,
      r: parseInt(s, 16),
      g: parseInt(a, 16),
      b: parseInt(l, 16)
    };
  }
  return null;
}
function Jl(t) {
  let r = String(t);
  return r.indexOf("&") > -1 && (r = r.replace(/&/g, "&amp;")), r.indexOf("<") > -1 && (r = r.replace(/</g, "&lt;")), r.indexOf(">") > -1 && (r = r.replace(/>/g, "&gt;")), r.indexOf('"') > -1 && (r = r.replace(/"/g, "&quot;")), r;
}
const Wo = Boolean;
function bl(t, r) {
  if (t.length === 1 && t[0].type === "solid")
    return Eh({
      bg: t[0]
    });
  const e = t.map((n) => {
    if (n.type === "solid")
      return jh({
        bg: n
      });
    if (n.type === "gradient")
      return Ch({
        bg: n
      });
    if (n.type === "image")
      return Sh({
        bg: n,
        direction: r
      });
    if (n.type === "radial_gradient")
      return Vh({
        bg: n
      });
  }).filter(Wo).reverse().reduce(function(n, o) {
    return n.image.push(o.image), n.size.push(o.size || "auto"), n.position.push(o.pos || "50% 50%"), n;
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
function jh(t) {
  const r = pr(t.bg.color || "transparent");
  return {
    size: void 0,
    pos: void 0,
    image: `linear-gradient(to bottom,${r},${r})`
  };
}
function Eh(t) {
  return {
    color: pr(t.bg.color || "transparent"),
    size: "auto",
    position: "50% 50%"
  };
}
function Pd(t) {
  return t.every((n) => n.color && typeof n.position == "number" && n.position >= 0 && n.position <= 1) ? t.sort((n, o) => Math.abs(n.position - o.position) < 1e-6 ? 0 : n.position - o.position).map((n) => `${pr(n.color)} ${(n.position * 100).toFixed(2)}%`).join(",") : void 0;
}
function Ch(t) {
  var n, o, i, s;
  if (!Array.isArray((n = t.bg) == null ? void 0 : n.colors) && !Array.isArray((o = t.bg) == null ? void 0 : o.color_map))
    return;
  const r = (i = t.bg.colors) == null ? void 0 : i.filter(Wo);
  if (!(r != null && r.length) && !((s = t.bg) != null && s.color_map))
    return;
  let e;
  if (t.bg.color_map) {
    const a = Pd(t.bg.color_map);
    if (!a)
      return;
    e = "linear-gradient(" + (90 - Number(t.bg.angle || 0) + "deg") + "," + a + ")";
  } else {
    if (!r)
      return;
    e = "linear-gradient(" + (90 - Number(t.bg.angle || 0) + "deg") + "," + r.map((a) => pr(a)).join(",") + ")";
  }
  return {
    size: void 0,
    pos: void 0,
    image: e
  };
}
const Ah = {
  nearest_corner: "closest-corner",
  farthest_corner: "farthest-corner",
  nearest_side: "closest-side",
  farthest_side: "farthest-side"
};
function Ka(t) {
  if (t && typeof t == "object" && "type" in t && t.value !== void 0) {
    if (t.type === "fixed")
      return pn(t.value);
    if (t.type === "relative")
      return `${Number(t.value) * 100}%`;
  }
  return "50%";
}
function Vh(t) {
  var a, l, u, c;
  if (!Array.isArray((a = t.bg) == null ? void 0 : a.colors) && !Array.isArray((l = t.bg) == null ? void 0 : l.color_map))
    return;
  const r = (u = t.bg.colors) == null ? void 0 : u.filter(Wo);
  if (!(r != null && r.length) && !((c = t.bg) != null && c.color_map))
    return;
  let e;
  if (t.bg.color_map ? e = Pd(t.bg.color_map) : r && (e = r.map((f) => pr(f)).join(",")), !e)
    return;
  const n = t.bg.radius;
  let o;
  n && typeof n == "object" && "type" in n && n.value !== void 0 && (n.type === "fixed" ? o = pn(n.value) : n.type === "relative" && (o = Ah[n.value]));
  const i = Ka(t.bg.center_x), s = Ka(t.bg.center_y);
  return {
    size: void 0,
    pos: void 0,
    image: `radial-gradient(circle ${o || "farthest-corner"} at ${i} ${s},` + e + ")"
  };
}
function Sh(t) {
  var e;
  const r = (e = t.bg) == null ? void 0 : e.image_url;
  if (r)
    return {
      size: Nd(t.bg.scale),
      pos: zd(t.bg, t.direction),
      image: 'url("' + Jl(r) + '")'
    };
}
function Nd(t) {
  return t === "fit" ? "contain" : t === "stretch" ? "fill" : t === "no_scale" ? "none" : "cover";
}
function Dh(t) {
  return t === "none" ? "auto" : t === "fill" ? "100% 100%" : t;
}
function zd(t, r) {
  let e, n;
  return t.content_alignment_horizontal === "left" || r === "ltr" && t.content_alignment_horizontal === "start" || r === "rtl" && t.content_alignment_horizontal === "end" ? e = "0%" : t.content_alignment_horizontal === "right" || r === "ltr" && t.content_alignment_horizontal === "end" || r === "rtl" && t.content_alignment_horizontal === "start" ? e = "100%" : e = "50%", t.content_alignment_vertical === "top" ? n = "0%" : t.content_alignment_vertical === "bottom" ? n = "100%" : n = "50%", e + " " + n;
}
function un(t, r) {
  const e = Number(t);
  return Number.isNaN(e) || e < 0 ? r : e;
}
function Ya(t, r, e) {
  return typeof r == "number" && (t && r > 0 && r <= 100 || !t && r >= 0 && r < 100) ? r : e;
}
function Ih(t) {
  return t.is_enabled !== 0 && t.is_enabled !== !1 && t.index !== void 0;
}
function Fh(t, {
  visibilityActions: r,
  disappearActions: e,
  rootCtx: n,
  componentContext: o
}) {
  const i = [];
  r && r.forEach((p) => {
    i.push({
      type: "visibility",
      index: i.length,
      action: p,
      visible: !1,
      count: 0,
      finished: !1
    });
  }), e && e.forEach((p) => {
    i.push({
      type: "disappear",
      index: i.length,
      action: p,
      // false, so disappear only works after the element becomes visible
      visible: !1,
      count: 0,
      finished: !1
    });
  });
  const s = i.map((p, m) => {
    const h = p.type === "visibility";
    return o.getDerivedFromVars({
      index: m,
      visibility_percentage: p.action.visibility_percentage,
      visibility_duration: h ? p.action.visibility_duration : p.action.disappear_duration,
      log_limit: p.action.log_limit,
      is_enabled: p.action.is_enabled
    }, void 0, !0);
  });
  let a;
  const l = () => {
    a && a.disconnect(), i.forEach((p) => {
      p.timer && clearTimeout(p.timer);
    });
  }, u = Zi(s, (p) => p);
  let c;
  const f = (p) => {
    const m = p.type === "visibility";
    o.execAnyActions([p.action], {
      logType: m ? "visible" : "disappear",
      node: t,
      processUrls: !1
    });
  }, _ = u.subscribe((p) => {
    c = p.filter(Ih);
    const m = {};
    c.forEach((w) => {
      m[w.index] = w;
    }), l();
    const h = [...new Set(c.map((w) => {
      const D = i[w.index].type === "visibility";
      return Ya(
        D,
        w.visibility_percentage,
        D ? 50 : 0
      ) / 100;
    }))];
    if (!h.length)
      return;
    const y = (w) => {
      w.forEach((D) => {
        c.forEach((z) => {
          const O = i[z.index], $ = O.type === "visibility", ue = Ya(
            $,
            z.visibility_percentage,
            $ ? 50 : 0
          );
          let M;
          ue === 0 ? M = D.intersectionRatio >= 1e-12 : M = D.intersectionRatio >= ue / 100, ($ ? !O.visible && M : O.visible && !M) ? O.finished || (O.timer = setTimeout(() => {
            ++O.count;
            const C = z.log_limit === 0 ? 1 / 0 : z.log_limit || 1;
            O.count >= C && (O.finished = !0), f(O);
          }, un(z.visibility_duration, 800))) : ($ ? !M : M) && O.timer && clearTimeout(O.timer), O.visible = M;
        });
      });
    };
    a = new IntersectionObserver(y, {
      threshold: h
    }), a.observe(t);
  });
  return {
    destroy() {
      c == null || c.forEach((p) => {
        const m = i[p.index];
        !m || m.type !== "disappear" || !m.visible || m.finished || n.registerTimeout(window.setTimeout(() => {
          f(m);
        }, p.visibility_duration));
      }), l(), _();
    }
  };
}
function Xa(t, r) {
  r && t.push(r);
}
function bt(t, r, e) {
  const n = [];
  Xa(n, r[t]);
  for (const o in e)
    if (e.hasOwnProperty(o)) {
      const i = e[o];
      if (i) {
        const s = `${t}_${o}` + (typeof i == "string" ? `_${i}` : "");
        Xa(n, r[s]);
      }
    }
  return n.join(" ");
}
const ka = Symbol("state");
function _o(t, r) {
  var s, a;
  const e = t.top || 0, n = ((s = r === "ltr" ? t.end : t.start) != null ? s : t.right) || 0, o = t.bottom || 0, i = ((a = r === "ltr" ? t.start : t.end) != null ? a : t.left) || 0;
  return e === 0 && n === 0 && o === 0 && i === 0 ? "" : me(e) + " " + me(n) + " " + me(o) + " " + me(i);
}
function bs(t) {
  if (typeof t != "number" && typeof t != "string")
    return !1;
  const r = Number(t);
  return !Number.isNaN(r);
}
function Rn(t) {
  return bs(t) && t >= 0;
}
function ds(t, r, e) {
  var o, i;
  if (!t)
    return e;
  const n = [
    t.top,
    (o = r === "ltr" ? t.end : t.start) != null ? o : t.right,
    t.bottom,
    (i = r === "ltr" ? t.start : t.end) != null ? i : t.left
  ];
  for (let s = 0; s < n.length; ++s)
    if (n[s] && !Rn(n[s]))
      return e;
  return _o(t, r);
}
function Th(t, r) {
  return !Rn(t) || t === void 0 || t > 1 ? r : Number(t);
}
const Mh = Object.prototype.hasOwnProperty;
function Qi(t, r) {
  if (Object.is(t, r))
    return !0;
  if (typeof t != "object" || t === null || typeof r != "object" || r === null)
    return Object.is(t, r);
  const e = Object.keys(t), n = Object.keys(r);
  if (e.length !== n.length)
    return !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (!Mh.call(r, i) || !Qi(t[i], r[i]))
      return !1;
  }
  return !0;
}
function si(t, r) {
  return Qi(t, r) ? r : t;
}
function Ph(t, r) {
  return t === "visible" || t === "invisible" || t === "gone" ? t : r;
}
function Od(t, r) {
  return t === "linear" || t === "ease" || t === "ease_in_out" || t === "ease_in" || t === "ease_out" ? t : r;
}
function fo(t, r) {
  const e = Number(t);
  return Number.isNaN(e) ? r : e;
}
function _s(t) {
  const r = [];
  return t.name === "set" ? (t.items || []).forEach((e) => {
    r.push(..._s(e));
  }) : r.push(t), r;
}
function ui(t, r) {
  if (!t || typeof t != "object")
    return r;
  const e = [
    "top",
    "right",
    "bottom",
    "left"
  ];
  for (let n = 0; n < e.length; ++n)
    if (t[e[n]] && !Rn(t[e[n]]))
      return r;
  return t;
}
function Nh(t, r) {
  if (!t && !r)
    return {};
  if (!r)
    return t;
  if (!t)
    return r;
  const e = {};
  return [
    "top",
    "right",
    "bottom",
    "left",
    "start",
    "end"
  ].forEach((n) => {
    const o = t[n];
    o && (e[n] = o);
    const i = r[n];
    i && (e[n] = (e[n] || 0) + i);
  }), e;
}
function zh(t, r) {
  const e = [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ];
  for (let n = 0; n < e.length; ++n)
    if (e[n] && !Rn(e[n]))
      return r;
  return t;
}
function Ts(t, r = 0, e = 10) {
  return [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ].map((n) => me((n || r) / e * 10)).join(" ");
}
function Oh(t) {
  var r, e, n, o, i, s;
  return me(((e = (r = t.offset) == null ? void 0 : r.x) == null ? void 0 : e.value) || 0) + " " + me(((o = (n = t.offset) == null ? void 0 : n.y) == null ? void 0 : o.value) || 0) + " " + me((i = t.blur) != null ? i : 2) + " " + pr(t.color || "#000000", (s = t.alpha) != null ? s : 0.19);
}
function Bh(t, r) {
  var e, n, o, i, s, a;
  return "drop-shadow(" + pr(t.color || "#000000", (e = t.alpha) != null ? e : 0.19) + " " + me((((o = (n = t.offset) == null ? void 0 : n.x) == null ? void 0 : o.value) || 0) * 10 / r) + " " + me((((s = (i = t.offset) == null ? void 0 : i.y) == null ? void 0 : s.value) || 0) * 10 / r) + " " + me(((a = t.blur) != null ? a : 2) * 10 / r) + ")";
}
let Fl;
function Ji() {
  return typeof matchMedia > "u" ? !1 : (Fl || (Fl = window.matchMedia("(prefers-reduced-motion)")), Fl.matches);
}
const Lh = 8, Rh = (t, r, e, n) => {
  let o;
  return (e || n) && typeof ResizeObserver < "u" && (o = new ResizeObserver(async () => {
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
      if (!t)
        return !1;
      const u = t.getBoundingClientRect(), c = a(e, u.width), f = a(n, u.height);
      return c || f;
    };
    for (; l(); ) {
      if (++i > Lh) {
        const u = new Error("Recursive layout in size_provider");
        u.level = "warn", u.additional = {
          widthVariableName: e,
          heightVariableName: n
        }, r.logError(u);
        break;
      }
      await Fn();
    }
  }), o.observe(t)), o;
}, ja = Symbol("enabled");
function en(t, r) {
  return t === 1 || t === 0 || t === !1 || t === !0 ? !!t : r;
}
function ei(t) {
  return [
    t.state_description,
    t.description,
    t.hint
  ].filter(Boolean).join(", ");
}
const Za = 1, ci = 2;
function Qa(t, r = 1) {
  if (!(!t || typeof t.value != "number")) {
    if (t.type === "translation-fixed")
      return me(t.value * r);
    if (t.type === "translation-percentage")
      return `${t.value * r}%`;
  }
}
function ws(t, r = 1) {
  if (!(!t || typeof t.value != "number")) {
    if (t.type === "pivot-fixed")
      return me(t.value * r);
    if (t.type === "pivot-percentage")
      return `${t.value * r}%`;
  }
}
function Hh(t) {
  return t.map((r) => {
    if (r.type === "rotation") {
      if (typeof r.angle == "number") {
        const e = ws(r.pivot_x) || "50%", n = ws(r.pivot_y) || "50%", o = ws(r.pivot_x, -1) || "-50%", i = ws(r.pivot_y, -1) || "-50%";
        return `translate(${e}, ${n}) rotate(${r.angle}deg) translate(${o}, ${i})`;
      }
    } else if (r.type === "translation") {
      const e = Qa(r.x) || 0, n = Qa(r.y) || 0;
      return `translate(${e}, ${n})`;
    }
  }).filter(Boolean).join(" ");
}
const Wh = "appkit-actionable__button", xa = {
  actionable__button: Wh
};
function Uh() {
}
const Bo = Symbol("action");
function ql(t) {
  if (t.startsWith("tel:"))
    return "tel";
  if (t.startsWith("/"))
    return "https";
  const r = /^([^/]+):\/\//.exec(t);
  return r && r[1] || "";
}
function Kl(t, r) {
  return r.has(t);
}
function Gh(t) {
  let r = (
    /*containerElement*/
    t[7]
  ), e, n, o = (
    /*containerElement*/
    t[7] && Tl(t)
  );
  return {
    c() {
      o && o.c(), e = Re();
    },
    l(i) {
      o && o.l(i), e = Re();
    },
    m(i, s) {
      o && o.m(i, s), K(i, e, s), n = !0;
    },
    p(i, s) {
      /*containerElement*/
      i[7] ? r ? Tr(
        r,
        /*containerElement*/
        i[7]
      ) ? (o.d(1), o = Tl(i), r = /*containerElement*/
      i[7], o.c(), o.m(e.parentNode, e)) : o.p(i, s) : (o = Tl(i), r = /*containerElement*/
      i[7], o.c(), o.m(e.parentNode, e)) : r && (o.d(1), o = null, r = /*containerElement*/
      i[7]);
    },
    i(i) {
      n || (G(o, i), n = !0);
    },
    o(i) {
      oe(o, i), n = !1;
    },
    d(i) {
      i && k(e), o && o.d(i);
    }
  };
}
function Jh(t) {
  var f;
  let r, e, n, o, i, s;
  const a = (
    /*#slots*/
    t[31].default
  ), l = cl(
    a,
    t,
    /*$$scope*/
    t[30],
    null
  );
  let u = [
    {
      class: e = /*cls*/
      t[2] + " " + xa.actionable__button + " " + Fr["root__any-actions"] + ` ${/*isNativeActionAnimation*/
      t[6] ? Fr.root__clickable : Fr["root__clickable-no-transition"]} ${Fr.root__unselectable} ` + /*longTapActions*/
      ((f = t[1]) != null && f.length ? Fr["root_disabled-context-menu"] : "")
    },
    { style: (
      /*style*/
      t[3]
    ) },
    { role: (
      /*role*/
      t[11]
    ) },
    { "aria-checked": (
      /*isChecked*/
      t[15]
    ) },
    { type: "button" },
    {
      tabindex: n = /*componentContext*/
      t[0].fakeElement === ci ? -1 : null
    },
    /*attrs*/
    t[4]
  ], c = {};
  for (let _ = 0; _ < u.length; _ += 1)
    c = Do(c, u[_]);
  return {
    c() {
      r = Me("button"), l && l.c(), this.h();
    },
    l(_) {
      r = ze(_, "BUTTON", {
        class: !0,
        style: !0,
        role: !0,
        "aria-checked": !0,
        type: !0,
        tabindex: !0
      });
      var p = je(r);
      l && l.l(p), p.forEach(k), this.h();
    },
    h() {
      $o(r, c);
    },
    m(_, p) {
      K(_, r, p), l && l.m(r, null), r.autofocus && r.focus(), t[48](r), o = !0, i || (s = [
        hl(
          /*use*/
          t[5].call(null, r)
        ),
        et(
          r,
          "click",
          /*click_handler_1*/
          t[37]
        ),
        et(
          r,
          "keydown",
          /*onKeydown*/
          t[17]
        ),
        et(
          r,
          "focus",
          /*focus_handler_1*/
          t[38]
        ),
        et(
          r,
          "blur",
          /*blur_handler_1*/
          t[39]
        ),
        et(
          r,
          "pointerdown",
          /*pointerdown_handler_1*/
          t[40]
        ),
        et(
          r,
          "wheel",
          /*wheel_handler_1*/
          t[41]
        )
      ], i = !0);
    },
    p(_, p) {
      var m;
      l && l.p && (!o || p[0] & /*$$scope*/
      1073741824) && dl(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? fl(
          a,
          /*$$scope*/
          _[30],
          p,
          null
        ) : _l(
          /*$$scope*/
          _[30]
        ),
        null
      ), $o(r, c = Ho(u, [
        (!o || p[0] & /*cls, isNativeActionAnimation, longTapActions*/
        70 && e !== (e = /*cls*/
        _[2] + " " + xa.actionable__button + " " + Fr["root__any-actions"] + ` ${/*isNativeActionAnimation*/
        _[6] ? Fr.root__clickable : Fr["root__clickable-no-transition"]} ${Fr.root__unselectable} ` + /*longTapActions*/
        ((m = _[1]) != null && m.length ? Fr["root_disabled-context-menu"] : ""))) && { class: e },
        (!o || p[0] & /*style*/
        8) && { style: (
          /*style*/
          _[3]
        ) },
        (!o || p[0] & /*role*/
        2048) && { role: (
          /*role*/
          _[11]
        ) },
        (!o || p[0] & /*isChecked*/
        32768) && { "aria-checked": (
          /*isChecked*/
          _[15]
        ) },
        { type: "button" },
        (!o || p[0] & /*componentContext*/
        1 && n !== (n = /*componentContext*/
        _[0].fakeElement === ci ? -1 : null)) && { tabindex: n },
        p[0] & /*attrs*/
        16 && /*attrs*/
        _[4]
      ]));
    },
    i(_) {
      o || (G(l, _), o = !0);
    },
    o(_) {
      oe(l, _), o = !1;
    },
    d(_) {
      _ && k(r), l && l.d(_), t[48](null), i = !1, Gr(s);
    }
  };
}
function qh(t) {
  var f;
  let r, e, n, o, i, s;
  const a = (
    /*#slots*/
    t[31].default
  ), l = cl(
    a,
    t,
    /*$$scope*/
    t[30],
    null
  );
  let u = [
    { href: (
      /*href*/
      t[9]
    ) },
    { target: (
      /*target*/
      t[13]
    ) },
    { style: (
      /*style*/
      t[3]
    ) },
    { role: (
      /*role*/
      t[11]
    ) },
    { "aria-checked": (
      /*isChecked*/
      t[15]
    ) },
    {
      class: e = /*cls*/
      t[2] + " " + Fr["root__any-actions"] + " " + /*isNativeActionAnimation*/
      (t[6] ? Fr.root__clickable : Fr["root__clickable-no-transition"]) + " " + /*longTapActions*/
      ((f = t[1]) != null && f.length ? Fr["root_disabled-context-menu"] : "")
    },
    {
      tabindex: n = /*componentContext*/
      t[0].fakeElement === ci ? -1 : null
    },
    /*attrs*/
    t[4]
  ], c = {};
  for (let _ = 0; _ < u.length; _ += 1)
    c = Do(c, u[_]);
  return {
    c() {
      r = Me("a"), l && l.c(), this.h();
    },
    l(_) {
      r = ze(_, "A", {
        href: !0,
        target: !0,
        style: !0,
        role: !0,
        "aria-checked": !0,
        class: !0,
        tabindex: !0
      });
      var p = je(r);
      l && l.l(p), p.forEach(k), this.h();
    },
    h() {
      $o(r, c);
    },
    m(_, p) {
      K(_, r, p), l && l.m(r, null), t[47](r), o = !0, i || (s = [
        hl(
          /*use*/
          t[5].call(null, r)
        ),
        et(
          r,
          "click",
          /*click_handler*/
          t[32]
        ),
        et(
          r,
          "keydown",
          /*onKeydown*/
          t[17]
        ),
        et(
          r,
          "focus",
          /*focus_handler*/
          t[33]
        ),
        et(
          r,
          "blur",
          /*blur_handler*/
          t[34]
        ),
        et(
          r,
          "pointerdown",
          /*pointerdown_handler*/
          t[35]
        ),
        et(
          r,
          "wheel",
          /*wheel_handler*/
          t[36]
        )
      ], i = !0);
    },
    p(_, p) {
      var m;
      l && l.p && (!o || p[0] & /*$$scope*/
      1073741824) && dl(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? fl(
          a,
          /*$$scope*/
          _[30],
          p,
          null
        ) : _l(
          /*$$scope*/
          _[30]
        ),
        null
      ), $o(r, c = Ho(u, [
        (!o || p[0] & /*href*/
        512) && { href: (
          /*href*/
          _[9]
        ) },
        (!o || p[0] & /*target*/
        8192) && { target: (
          /*target*/
          _[13]
        ) },
        (!o || p[0] & /*style*/
        8) && { style: (
          /*style*/
          _[3]
        ) },
        (!o || p[0] & /*role*/
        2048) && { role: (
          /*role*/
          _[11]
        ) },
        (!o || p[0] & /*isChecked*/
        32768) && { "aria-checked": (
          /*isChecked*/
          _[15]
        ) },
        (!o || p[0] & /*cls, isNativeActionAnimation, longTapActions*/
        70 && e !== (e = /*cls*/
        _[2] + " " + Fr["root__any-actions"] + " " + /*isNativeActionAnimation*/
        (_[6] ? Fr.root__clickable : Fr["root__clickable-no-transition"]) + " " + /*longTapActions*/
        ((m = _[1]) != null && m.length ? Fr["root_disabled-context-menu"] : ""))) && { class: e },
        (!o || p[0] & /*componentContext*/
        1 && n !== (n = /*componentContext*/
        _[0].fakeElement === ci ? -1 : null)) && { tabindex: n },
        p[0] & /*attrs*/
        16 && /*attrs*/
        _[4]
      ]));
    },
    i(_) {
      o || (G(l, _), o = !0);
    },
    o(_) {
      oe(l, _), o = !1;
    },
    d(_) {
      _ && k(r), l && l.d(_), t[47](null), i = !1, Gr(s);
    }
  };
}
function Tl(t) {
  var f;
  let r, e, n, o, i, s;
  const a = (
    /*#slots*/
    t[31].default
  ), l = cl(
    a,
    t,
    /*$$scope*/
    t[30],
    null
  );
  let u = [
    {
      class: e = /*cls*/
      t[2] + " " + /*longTapActions*/
      ((f = t[1]) != null && f.length ? Fr["root_disabled-context-menu"] : "") + " " + /*hasAnyActions*/
      (t[14] ? Fr["root__any-actions"] : "")
    },
    { style: (
      /*style*/
      t[3]
    ) },
    { role: (
      /*role*/
      t[11]
    ) },
    { "aria-checked": (
      /*isChecked*/
      t[15]
    ) },
    {
      "aria-hidden": n = /*ariaHidden*/
      t[12] || void 0
    },
    /*attrs*/
    t[4]
  ], c = {};
  for (let _ = 0; _ < u.length; _ += 1)
    c = Do(c, u[_]);
  return {
    c() {
      r = Me(
        /*containerElement*/
        t[7]
      ), l && l.c(), this.h();
    },
    l(_) {
      r = ze(
        _,
        /*containerElement*/
        (t[7] || "null").toUpperCase(),
        {
          class: !0,
          style: !0,
          role: !0,
          "aria-checked": !0,
          "aria-hidden": !0
        }
      );
      var p = je(r);
      l && l.l(p), p.forEach(k), this.h();
    },
    h() {
      ai(
        /*containerElement*/
        t[7]
      )(r, c);
    },
    m(_, p) {
      K(_, r, p), l && l.m(r, null), t[49](r), o = !0, i || (s = [
        hl(
          /*use*/
          t[5].call(null, r)
        ),
        et(
          r,
          "click",
          /*click_handler_2*/
          t[42]
        ),
        et(
          r,
          "keydown",
          /*onKeydown*/
          t[17]
        ),
        et(
          r,
          "focus",
          /*focus_handler_2*/
          t[43]
        ),
        et(
          r,
          "blur",
          /*blur_handler_2*/
          t[44]
        ),
        et(
          r,
          "pointerdown",
          /*pointerdown_handler_2*/
          t[45]
        ),
        et(
          r,
          "wheel",
          /*wheel_handler_2*/
          t[46]
        )
      ], i = !0);
    },
    p(_, p) {
      var m;
      l && l.p && (!o || p[0] & /*$$scope*/
      1073741824) && dl(
        l,
        a,
        _,
        /*$$scope*/
        _[30],
        o ? fl(
          a,
          /*$$scope*/
          _[30],
          p,
          null
        ) : _l(
          /*$$scope*/
          _[30]
        ),
        null
      ), ai(
        /*containerElement*/
        _[7]
      )(r, c = Ho(u, [
        (!o || p[0] & /*cls, longTapActions, hasAnyActions*/
        16390 && e !== (e = /*cls*/
        _[2] + " " + /*longTapActions*/
        ((m = _[1]) != null && m.length ? Fr["root_disabled-context-menu"] : "") + " " + /*hasAnyActions*/
        (_[14] ? Fr["root__any-actions"] : ""))) && { class: e },
        (!o || p[0] & /*style*/
        8) && { style: (
          /*style*/
          _[3]
        ) },
        (!o || p[0] & /*role*/
        2048) && { role: (
          /*role*/
          _[11]
        ) },
        (!o || p[0] & /*isChecked*/
        32768) && { "aria-checked": (
          /*isChecked*/
          _[15]
        ) },
        (!o || p[0] & /*ariaHidden*/
        4096 && n !== (n = /*ariaHidden*/
        _[12] || void 0)) && {
          "aria-hidden": n
        },
        p[0] & /*attrs*/
        16 && /*attrs*/
        _[4]
      ]));
    },
    i(_) {
      o || (G(l, _), o = !0);
    },
    o(_) {
      oe(l, _), o = !1;
    },
    d(_) {
      _ && k(r), l && l.d(_), t[49](null), i = !1, Gr(s);
    }
  };
}
function Kh(t) {
  let r, e, n, o;
  const i = [qh, Jh, Gh], s = [];
  function a(l, u) {
    return (
      /*href*/
      l[9] ? 0 : (
        /*hasJSAction*/
        l[10] ? 1 : 2
      )
    );
  }
  return r = a(t), e = s[r] = i[r](t), {
    c() {
      e.c(), n = Re();
    },
    l(l) {
      e.l(l), n = Re();
    },
    m(l, u) {
      s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? s[r].p(l, u) : (br(), oe(s[c], 1, 1, () => {
        s[c] = null;
      }), yr(), e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n));
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      oe(e), o = !1;
    },
    d(l) {
      l && k(n), s[r].d(l);
    }
  };
}
const $a = 8, eu = 400, Ml = 400, Yh = /* @__PURE__ */ new Set(["button", "image", "checkbox", "radio", "header"]);
function tu(t) {
  t.preventDefault();
}
function Xh(t, r, e) {
  let n, o, i = j, s = () => (i(), i = V(n, (Q) => e(29, o = Q)), n);
  t.$$.on_destroy.push(() => i());
  let { $$slots: a = {}, $$scope: l } = r, { componentContext: u } = r, { id: c = "" } = r, { actions: f = void 0 } = r, { doubleTapActions: _ = void 0 } = r, { longTapActions: p = void 0 } = r, { pressStartActions: m = void 0 } = r, { pressEndActions: h = void 0 } = r, { hoverStartActions: y = void 0 } = r, { hoverEndActions: w = void 0 } = r, { cls: D = "" } = r, { style: z = null } = r, { attrs: O = void 0 } = r, { use: $ = Uh } = r, { customAction: ue = null } = r, { isNativeActionAnimation: M = !0 } = r, { hasInnerFocusable: Y = !1 } = r, { customAccessibility: se = void 0 } = r, { captureFocusOnAction: C = !0 } = r, { containerElement: I = "span" } = r;
  const P = zr($r), B = zr(Bo);
  ki(Bo, {
    hasAction() {
      return !!(B.hasAction() || f != null && f.length || (se == null ? void 0 : se.mode) === "exclude");
    }
  });
  let q, pe = "", _e, Ae = -1, be = -1, Ie = null, x = !1, Ye = !1, Qe = !1, xe, we, Te, ge, ye = !1;
  function he() {
    return (o == null ? void 0 : o.some((Q) => {
      if (Q != null && Q.typed)
        return !0;
      const Dt = Q == null ? void 0 : Q.url;
      if (!Dt)
        return !1;
      const Ot = ql(Dt);
      return Ot && !Kl(Ot, P.getBuiltinProtocols());
    })) || !1;
  }
  async function te(Q, Dt) {
    f && (Q && he() && Q.preventDefault(), u.execAnyActions(f, { node: q, processUrls: Dt }));
  }
  async function fe(Q) {
    if (B.hasAction() || Q.button !== void 0 && Q.button !== 0)
      return;
    const Dt = Date.now();
    if (Ae > 0 && Dt > Ae + eu) {
      Q.preventDefault();
      return;
    }
    if (_ != null && _.length && be > 0 && Dt - be < Ml) {
      Q.preventDefault(), u.execAnyActions(_, { processUrls: !0, node: q }), be = -1;
      return;
    }
    if (be = Dt, _ != null && _.length && Ae > 0 && Dt < Ae + Ml) {
      Q.preventDefault(), clearTimeout(we), we = window.setTimeout(
        () => {
          te(void 0, !0);
        },
        Ml
      );
      return;
    }
    (ue == null ? void 0 : ue(Q)) === !1 ? Q.preventDefault() : te(Q, !1);
  }
  function re(Q) {
    B.hasAction() || (Ie = { x: Q.clientX, y: Q.clientY }, x = !1, Ae = Date.now(), xe && clearTimeout(xe), clearTimeout(we), u.execAnyActions(m, { node: q }));
  }
  function ve(Q) {
    Ie && (Math.abs(Ie.x - Q.clientX) > $a || Math.abs(Ie.y - Q.clientY) > $a) && (x = !0);
  }
  function qe(Q) {
    B.hasAction() || !Ie || Ae < 0 || (!x && Date.now() - Ae >= eu && (Q.stopImmediatePropagation(), u.execAnyActions(p, { processUrls: !0, node: q })), xe && clearTimeout(xe), xe = window.setTimeout(
      () => {
        Ie = null, Ae = -1;
      },
      100
    ), u.execAnyActions(h, { node: q }));
  }
  function Xe() {
    B.hasAction() || u.execAnyActions(y, { node: q });
  }
  function ee() {
    B.hasAction() || u.execAnyActions(w, { node: q });
  }
  function He(Q) {
    const Dt = Q.target;
    Dt instanceof HTMLElement && (Dt.tagName === "INPUT" || Dt.contentEditable === "true") || Q.ctrlKey || Q.metaKey || Q.altKey || Q.shiftKey || Q.key === "Enter" && Array.isArray(f) && f.length && (u.execAnyActions(f), Q.preventDefault());
  }
  no(() => {
    c && !Y && P.registerFocusable(c, {
      focus() {
        q && (pe || Ye) && q.focus();
      }
    });
  }), dn(() => {
    typeof window < "u" && (window.removeEventListener("pointermove", ve), window.removeEventListener("pointerup", qe), window.removeEventListener("pointercancel", qe)), c && !Y && P.unregisterFocusable(c), xe && clearTimeout(xe), we && clearTimeout(we);
  });
  function Oe(Q) {
    Un.call(this, t, Q);
  }
  function lt(Q) {
    Un.call(this, t, Q);
  }
  function _t(Q) {
    Un.call(this, t, Q);
  }
  function it(Q) {
    Un.call(this, t, Q);
  }
  function Et(Q) {
    Un.call(this, t, Q);
  }
  function at(Q) {
    Un.call(this, t, Q);
  }
  function zt(Q) {
    Un.call(this, t, Q);
  }
  function ht(Q) {
    Un.call(this, t, Q);
  }
  function Z(Q) {
    Un.call(this, t, Q);
  }
  function de(Q) {
    Un.call(this, t, Q);
  }
  function ct(Q) {
    Un.call(this, t, Q);
  }
  function Be(Q) {
    Un.call(this, t, Q);
  }
  function T(Q) {
    Un.call(this, t, Q);
  }
  function St(Q) {
    Un.call(this, t, Q);
  }
  function dt(Q) {
    Un.call(this, t, Q);
  }
  function Ft(Q) {
    Mr[Q ? "unshift" : "push"](() => {
      q = Q, e(8, q);
    });
  }
  function Pt(Q) {
    Mr[Q ? "unshift" : "push"](() => {
      q = Q, e(8, q);
    });
  }
  function st(Q) {
    Mr[Q ? "unshift" : "push"](() => {
      q = Q, e(8, q);
    });
  }
  return t.$$set = (Q) => {
    "componentContext" in Q && e(0, u = Q.componentContext), "id" in Q && e(18, c = Q.id), "actions" in Q && e(19, f = Q.actions), "doubleTapActions" in Q && e(20, _ = Q.doubleTapActions), "longTapActions" in Q && e(1, p = Q.longTapActions), "pressStartActions" in Q && e(21, m = Q.pressStartActions), "pressEndActions" in Q && e(22, h = Q.pressEndActions), "hoverStartActions" in Q && e(23, y = Q.hoverStartActions), "hoverEndActions" in Q && e(24, w = Q.hoverEndActions), "cls" in Q && e(2, D = Q.cls), "style" in Q && e(3, z = Q.style), "attrs" in Q && e(4, O = Q.attrs), "use" in Q && e(5, $ = Q.use), "customAction" in Q && e(25, ue = Q.customAction), "isNativeActionAnimation" in Q && e(6, M = Q.isNativeActionAnimation), "hasInnerFocusable" in Q && e(26, Y = Q.hasInnerFocusable), "customAccessibility" in Q && e(27, se = Q.customAccessibility), "captureFocusOnAction" in Q && e(28, C = Q.captureFocusOnAction), "containerElement" in Q && e(7, I = Q.containerElement), "$$scope" in Q && e(30, l = Q.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*customAccessibility*/
    134217728 && e(12, ye = (se == null ? void 0 : se.mode) === "exclude"), t.$$.dirty[0] & /*componentContext, actions*/
    524289 && s(e(16, n = u.getDerivedFromVars(f, void 0, !0))), t.$$.dirty[0] & /*$processedActions, customAction, href, ariaHidden, componentContext*/
    570429953) {
      if (Array.isArray(o) && (o != null && o.length))
        for (let Q = 0; Q < o.length; ++Q) {
          const Dt = o[Q].url;
          if (Dt) {
            e(9, pe = Dt), e(13, _e = o[Q].target || void 0);
            break;
          }
        }
      e(10, Ye = !!ue), (pe || Array.isArray(o) && (o != null && o.length)) && (B.hasAction() || ye) ? (e(9, pe = ""), u.logError(X(new Error("Actionable element is forbidden inside other actionable element or inside accessibility mode=exlucde"), {
        level: "warn",
        additional: { actions: o }
      }))) : pe && !Kl(ql(pe), P.getBuiltinProtocols()) ? (e(9, pe = ""), e(10, Ye = !0)) : !pe && Array.isArray(o) && (o != null && o.length) && (e(10, Ye = !0), o.some((Q) => Q.url || Q.typed || Q.menu_items) || u.logError(X(new Error("The component has a list of actions, but does not have a real action"), {
        level: "warn",
        additional: { actions: o }
      })));
    }
    t.$$.dirty[0] & /*customAccessibility, href, hasJSAction, role*/
    134221312 && (se != null && se.type && Yh.has(se.type) ? se.type === "header" ? e(11, Te = "heading") : e(11, Te = se.type) : pe ? e(11, Te = void 0) : Ye && e(11, Te = "button"), (Te === "checkbox" || Te === "radio") && typeof (se == null ? void 0 : se.is_checked) == "boolean" ? e(15, ge = se.is_checked) : e(15, ge = void 0)), t.$$.dirty[0] & /*node, href, hasJSAction, doubleTapActions, longTapActions, pressStartActions, pressEndActions, hoverStartActions, hoverEndActions, captureFocusOnAction*/
    300943106 && q && (pe || Ye || _ != null && _.length ? q.addEventListener("click", fe) : q.removeEventListener("click", fe), _ != null && _.length || p != null && p.length || m != null && m.length || h != null && h.length ? (q.addEventListener("pointerdown", re, { passive: !0 }), window.addEventListener("pointermove", ve, { passive: !0 }), window.addEventListener("pointerup", qe, { passive: !0 }), window.addEventListener("pointercancel", qe, { passive: !0 })) : (q.removeEventListener("pointerdown", re), window.removeEventListener("pointerup", qe), window.removeEventListener("pointermove", ve), window.removeEventListener("pointercancel", qe)), y != null && y.length ? q.addEventListener("pointerenter", Xe) : q.removeEventListener("pointerenter", Xe), w != null && w.length ? q.addEventListener("pointerleave", ee) : q.removeEventListener("pointerleave", ee), C === !1 ? q.addEventListener("mousedown", tu) : q.removeEventListener("mousedown", tu), e(14, Qe = !!(pe || Ye || _ != null && _.length || p != null && p.length || m != null && m.length || h != null && h.length || y != null && y.length || w != null && w.length)));
  }, [
    u,
    p,
    D,
    z,
    O,
    $,
    M,
    I,
    q,
    pe,
    Ye,
    Te,
    ye,
    _e,
    Qe,
    ge,
    n,
    He,
    c,
    f,
    _,
    m,
    h,
    y,
    w,
    ue,
    Y,
    se,
    C,
    o,
    l,
    a,
    Oe,
    lt,
    _t,
    it,
    Et,
    at,
    zt,
    ht,
    Z,
    de,
    ct,
    Be,
    T,
    St,
    dt,
    Ft,
    Pt,
    st
  ];
}
class yl extends Wr {
  constructor(r) {
    super(), Hr(
      this,
      r,
      Xh,
      Kh,
      Tr,
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
const ji = {
  "outer-background": "appkit-outer-background",
  "outer-background_clip": "appkit-outer-background_clip",
  "outer-background__item": "appkit-outer-background__item",
  "outer-background__item_hidden": "appkit-outer-background__item_hidden"
};
function On(t) {
  return bs(t) && t > 0;
}
function Bd(t, r) {
  return t.map((e) => {
    if (!e) {
      r(X(new Error("Incorrect filter"), {
        level: "warn"
      }));
      return;
    }
    if (e.type === "blur") {
      if (On(e.radius))
        return `blur(${pn(e.radius / 2)})`;
    } else {
      if (e.type === "rtl_mirror")
        return;
      r(X(new Error("Unknown filter"), {
        level: "warn",
        additional: {
          filter: e.type
        }
      }));
    }
  }).filter(Boolean).join(" ");
}
function ru(t, r, e) {
  const n = t.slice();
  return n[6] = r[e], n;
}
function Zh(t) {
  let r, e;
  return {
    c() {
      r = Me("span"), this.h();
    },
    l(n) {
      r = ze(n, "SPAN", { class: !0, style: !0 }), je(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", ji["outer-background__item"]), g(r, "style", e = _r(
        /*item*/
        t[6].style
      ));
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o & /*styles*/
      2 && e !== (e = _r(
        /*item*/
        n[6].style
      )) && g(r, "style", e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function Qh(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Me("img"), this.h();
    },
    l(s) {
      r = ze(s, "IMG", {
        src: !0,
        alt: !0,
        "aria-hidden": !0,
        loading: !0,
        decoding: !0,
        class: !0,
        style: !0
      }), this.h();
    },
    h() {
      to(r.src, e = /*item*/
      t[6].image_url) || g(r, "src", e), g(r, "alt", ""), g(r, "aria-hidden", "true"), g(r, "loading", "lazy"), g(r, "decoding", "async"), g(r, "class", ji["outer-background__item"]), g(r, "style", n = _r(
        /*item*/
        t[6].style
      ));
    },
    m(s, a) {
      K(s, r, a), o || (i = et(
        r,
        "error",
        /*onImgError*/
        t[2]
      ), o = !0);
    },
    p(s, a) {
      a & /*styles*/
      2 && !to(r.src, e = /*item*/
      s[6].image_url) && g(r, "src", e), a & /*styles*/
      2 && n !== (n = _r(
        /*item*/
        s[6].style
      )) && g(r, "style", n);
    },
    d(s) {
      s && k(r), o = !1, i();
    }
  };
}
function nu(t) {
  let r;
  function e(i, s) {
    return (
      /*item*/
      i[6].image_url ? Qh : Zh
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Re();
    },
    l(i) {
      o.l(i), r = Re();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && k(r), o.d(i);
    }
  };
}
function xh(t) {
  let r, e, n = dr(
    /*styles*/
    t[1]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = nu(ru(t, n, i));
  return {
    c() {
      r = Me("span");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      this.h();
    },
    l(i) {
      r = ze(i, "SPAN", { class: !0 });
      var s = je(r);
      for (let a = 0; a < o.length; a += 1)
        o[a].l(s);
      s.forEach(k), this.h();
    },
    h() {
      g(r, "class", e = ji["outer-background"] + /*radius*/
      (t[0] ? " " + ji["outer-background_clip"] : "")), N(
        r,
        "border-radius",
        /*radius*/
        t[0]
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
        n = dr(
          /*styles*/
          i[1]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = ru(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = nu(l), o[a].c(), o[a].m(r, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
      s & /*radius*/
      1 && e !== (e = ji["outer-background"] + /*radius*/
      (i[0] ? " " + ji["outer-background_clip"] : "")) && g(r, "class", e), s & /*radius*/
      1 && N(
        r,
        "border-radius",
        /*radius*/
        i[0]
      );
    },
    i: j,
    o: j,
    d(i) {
      i && k(r), hn(o, i);
    }
  };
}
function $h(t, r, e) {
  let n, { direction: o } = r, { componentContext: i } = r, { background: s = [] } = r, { radius: a = "" } = r;
  function l(u) {
    u.target && "classList" in u.target && u.target.classList.add(ji["outer-background__item_hidden"]);
  }
  return t.$$set = (u) => {
    "direction" in u && e(3, o = u.direction), "componentContext" in u && e(4, i = u.componentContext), "background" in u && e(5, s = u.background), "radius" in u && e(0, a = u.radius);
  }, t.$$.update = () => {
    t.$$.dirty & /*background, direction, componentContext*/
    56 && e(1, n = s.map((u) => {
      const c = {}, f = { style: c };
      if (u.type === "nine_patch_image" && u.insets)
        c["border-image"] = `url("${u.image_url}") ${u.insets.top || 0} ${u.insets.right || 0} ${u.insets.bottom || 0} ${u.insets.left || 0} fill`, c["border-image-width"] = "auto";
      else {
        const _ = bl([u], o);
        u.type === "solid" && (c["background-color"] = _.color), u.type === "gradient" && (c["background-image"] = _.image), u.type === "image" && (c.opacity = Number(u.alpha), f.image_url = u.image_url, c["object-fit"] = _.size, c["object-position"] = _.position, Array.isArray(u.filters) && u.filters.length && (c.filter = Bd(u.filters, i.logError), o === "rtl" && u.filters.some((p) => p.type === "rtl_mirror") && (c.transform = "scale(-1,1)")));
      }
      return f;
    }));
  }, [a, n, l, o, i, s];
}
class ep extends Wr {
  constructor(r) {
    super(), Hr(this, r, $h, xh, Tr, {
      direction: 3,
      componentContext: 4,
      background: 5,
      radius: 0
    });
  }
}
const tp = (t) => ({
  hasCustomFocus: t[0] & /*hasCustomFocus*/
  131072,
  widthMin: t[0] & /*widthMin*/
  64,
  widthMax: t[0] & /*widthMax*/
  128,
  heightMin: t[0] & /*heightMin*/
  256,
  heightMax: t[0] & /*heightMax*/
  512
}), ou = (t) => ({
  focusHandler: (
    /*focusHandler*/
    t[51]
  ),
  blurHandler: (
    /*blurHandler*/
    t[52]
  ),
  hasCustomFocus: (
    /*hasCustomFocus*/
    t[17]
  ),
  widthMin: (
    /*widthMin*/
    t[6]
  ),
  widthMax: (
    /*widthMax*/
    t[7]
  ),
  heightMin: (
    /*heightMin*/
    t[8]
  ),
  heightMax: (
    /*heightMax*/
    t[9]
  )
});
function iu(t) {
  let r, e;
  return r = new yl({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      id: (
        /*componentContext*/
        t[0].json.id
      ),
      use: (
        /*useAction*/
        t[50]
      ),
      cls: (
        /*cls*/
        t[1] + " " + bt(
          "outer",
          $s,
          /*mods*/
          t[31]
        ) + /*customClass*/
        (t[30] ? ` ${/*customClass*/
        t[30]}` : "") + /*hoverClassName*/
        (t[18] ? ` ${/*hoverClassName*/
        t[18]}` : "")
      ),
      style: _r(
        /*stl*/
        t[29]
      ),
      actions: (
        /*actions*/
        t[25]
      ),
      doubleTapActions: (
        /*doubleTapActions*/
        t[26]
      ),
      longTapActions: (
        /*longTapActions*/
        t[27]
      ),
      pressStartActions: (
        /*pressStartActions*/
        t[12]
      ),
      pressEndActions: (
        /*pressEndActions*/
        t[13]
      ),
      hoverStartActions: (
        /*hoverStartActions*/
        t[14]
      ),
      hoverEndActions: (
        /*hoverEndActions*/
        t[15]
      ),
      attrs: (
        /*attrs*/
        t[21]
      ),
      hasInnerFocusable: (
        /*hasInnerFocusable*/
        t[2]
      ),
      isNativeActionAnimation: !/*actionAnimationList*/
      t[16].length || fu(
        /*actionAnimationList*/
        t[16]
      ),
      customAccessibility: (
        /*$jsonAccessibility*/
        t[20]
      ),
      captureFocusOnAction: (
        /*captureFocusOnAction*/
        t[28]
      ),
      containerElement: (
        /*containerElement*/
        t[3]
      ),
      $$slots: { default: [rp] },
      $$scope: { ctx: t }
    }
  }), r.$on(
    "focus",
    /*focusHandler*/
    t[51]
  ), r.$on(
    "blur",
    /*blurHandler*/
    t[52]
  ), r.$on(
    "pointerdown",
    /*pointerdown_handler*/
    t[150]
  ), r.$on(
    "wheel",
    /*wheel_handler*/
    t[151]
  ), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
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
      n[1] + " " + bt(
        "outer",
        $s,
        /*mods*/
        n[31]
      ) + /*customClass*/
      (n[30] ? ` ${/*customClass*/
      n[30]}` : "") + /*hoverClassName*/
      (n[18] ? ` ${/*hoverClassName*/
      n[18]}` : "")), o[0] & /*stl*/
      536870912 && (i.style = _r(
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
      n[16].length || fu(
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function su(t) {
  let r, e;
  return r = new ep({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      direction: (
        /*$direction*/
        t[19]
      ),
      background: (
        /*background*/
        t[10]
      ),
      radius: (
        /*backgroundRadius*/
        t[5]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function lu(t) {
  let r, e;
  return {
    c() {
      r = Me("span"), this.h();
    },
    l(n) {
      r = ze(n, "SPAN", { class: !0, style: !0 }), je(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", $s.outer__border), g(r, "style", e = _r(
        /*borderElemStyle*/
        t[4]
      ));
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o[0] & /*borderElemStyle*/
      16 && e !== (e = _r(
        /*borderElemStyle*/
        n[4]
      )) && g(r, "style", e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function rp(t) {
  let r, e, n, o = (
    /*hasSeparateBg*/
    t[11] && su(t)
  );
  const i = (
    /*#slots*/
    t[149].default
  ), s = cl(
    i,
    t,
    /*$$scope*/
    t[152],
    ou
  );
  let a = (
    /*hasBorder*/
    t[22] && lu(t)
  );
  return {
    c() {
      o && o.c(), r = Re(), s && s.c(), a && a.c(), e = Re();
    },
    l(l) {
      o && o.l(l), r = Re(), s && s.l(l), a && a.l(l), e = Re();
    },
    m(l, u) {
      o && o.m(l, u), K(l, r, u), s && s.m(l, u), a && a.m(l, u), K(l, e, u), n = !0;
    },
    p(l, u) {
      /*hasSeparateBg*/
      l[11] ? o ? (o.p(l, u), u[0] & /*hasSeparateBg*/
      2048 && G(o, 1)) : (o = su(l), o.c(), G(o, 1), o.m(r.parentNode, r)) : o && (br(), oe(o, 1, 1, () => {
        o = null;
      }), yr()), s && s.p && (!n || u[0] & /*hasCustomFocus, widthMin, widthMax, heightMin, heightMax*/
      132032 | u[4] & /*$$scope*/
      268435456) && dl(
        s,
        i,
        l,
        /*$$scope*/
        l[152],
        n ? fl(
          i,
          /*$$scope*/
          l[152],
          u,
          tp
        ) : _l(
          /*$$scope*/
          l[152]
        ),
        ou
      ), /*hasBorder*/
      l[22] ? a ? a.p(l, u) : (a = lu(l), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null);
    },
    i(l) {
      n || (G(o), G(s, l), n = !0);
    },
    o(l) {
      oe(o), oe(s, l), n = !1;
    },
    d(l) {
      l && (k(r), k(e)), o && o.d(l), s && s.d(l), a && a.d(l);
    }
  };
}
function np(t) {
  let r, e, n = !/*hasWidthError*/
  t[23] && !/*hasHeightError*/
  t[24] && iu(t);
  return {
    c() {
      n && n.c(), r = Re();
    },
    l(o) {
      n && n.l(o), r = Re();
    },
    m(o, i) {
      n && n.m(o, i), K(o, r, i), e = !0;
    },
    p(o, i) {
      !/*hasWidthError*/
      o[23] && !/*hasHeightError*/
      o[24] ? n ? (n.p(o, i), i[0] & /*hasWidthError, hasHeightError*/
      25165824 && G(n, 1)) : (n = iu(o), n.c(), G(n, 1), n.m(r.parentNode, r)) : n && (br(), oe(n, 1, 1, () => {
        n = null;
      }), yr());
    },
    i(o) {
      e || (G(n), e = !0);
    },
    o(o) {
      oe(n), e = !1;
    },
    d(o) {
      o && k(r), n && n.d(o);
    }
  };
}
const au = {
  left: "start",
  center: "center",
  right: "end",
  start: "start",
  end: "end"
}, uu = {
  left: "end",
  center: "center",
  right: "start",
  start: "start",
  end: "end"
}, cu = {
  top: "start",
  center: "center",
  bottom: "end",
  baseline: "baseline"
}, Pl = (t) => `The component id with the "${t}" property for state change is missing. Either specify the id, or specify the "transition_trigger" property without "state_change" value.`;
function fu(t) {
  return t.some((r) => r.name === "native");
}
function op(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, p, m, h, y, w, D, z, O, $, ue, M, Y, se, C, I, P, B, q, pe, _e, Ae, be, Ie, x, Ye, Qe, xe, we, Te, ge, ye, he, te, fe, re, ve, qe, Xe = j, ee = () => (Xe(), Xe = V(w, (gt) => e(133, qe = gt)), w), He, Oe = j, lt = () => (Oe(), Oe = V(D, (gt) => e(134, He = gt)), D), _t, it = j, Et = () => (it(), it = V(y, (gt) => e(135, _t = gt)), y), at, zt = j, ht = () => (zt(), zt = V(z, (gt) => e(136, at = gt)), z), Z, de = j, ct = () => (de(), de = V(h, (gt) => e(137, Z = gt)), h), Be, T = j, St = () => (T(), T = V(m, (gt) => e(138, Be = gt)), m), dt, Ft = j, Pt = () => (Ft(), Ft = V(o, (gt) => e(139, dt = gt)), o), st, Q = j, Dt = () => (Q(), Q = V(p, (gt) => e(20, st = gt)), p), Ot, nr = j, er = () => (nr(), nr = V(_, (gt) => e(140, Ot = gt)), _), Ve, Ge = j, yt = () => (Ge(), Ge = V(f, (gt) => e(141, Ve = gt)), f), Pe, tt = j, Le = () => (tt(), tt = V(c, (gt) => e(142, Pe = gt)), c), Tt, We = j, vt = () => (We(), We = V(a, (gt) => e(143, Tt = gt)), a), qt, Nt = j, ar = () => (Nt(), Nt = V(u, (gt) => e(144, qt = gt)), u), Fe, At = j, ur = () => (At(), At = V(l, (gt) => e(145, Fe = gt)), l), sr, lr = j, hr = () => (lr(), lr = V(s, (gt) => e(146, sr = gt)), s), Er, Bt = j, kr = () => (Bt(), Bt = V(i, (gt) => e(147, Er = gt)), i), Ut;
  t.$$.on_destroy.push(() => Xe()), t.$$.on_destroy.push(() => Oe()), t.$$.on_destroy.push(() => it()), t.$$.on_destroy.push(() => zt()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => T()), t.$$.on_destroy.push(() => Ft()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => nr()), t.$$.on_destroy.push(() => Ge()), t.$$.on_destroy.push(() => tt()), t.$$.on_destroy.push(() => We()), t.$$.on_destroy.push(() => Nt()), t.$$.on_destroy.push(() => At()), t.$$.on_destroy.push(() => lr()), t.$$.on_destroy.push(() => Bt());
  let { $$slots: wt = {}, $$scope: or } = r, { componentContext: le } = r, { cls: Cr = "" } = r, { style: Ar = void 0 } = r, { layoutParams: Vt = {} } = r, { customDescription: Pr = !1 } = r, { customPaddings: Ur = !1 } = r, { customActions: fr = "" } = r, { additionalPaddings: ft = null } = r, { heightByAspect: It = !1 } = r, { parentOf: Kt = void 0 } = r, { parentOfSimpleMode: tr = void 0 } = r, { replaceItems: rt = void 0 } = r, { hasInnerFocusable: mt = !1 } = r, { alwaysCustomFocus: ce = !1 } = r, { containerElement: Ct = "span" } = r, { devapi: ir = void 0 } = r;
  const Gt = zr($r), jr = zr(ka), { isEnabled: E } = zr(ja);
  kn(t, E, (gt) => e(148, Ut = gt));
  const ie = Gt.direction;
  kn(t, ie, (gt) => e(19, ve = gt));
  let d, R, Ce = null, Je = [], ke = {}, L = {}, Lt = !1, Rt = 1, Ke = "transparent", ut = 0, Yt = {
    "top-left": 0,
    "top-right": 0,
    "bottom-right": 0,
    "bottom-left": 0
  }, Ir = "", cr = null, Nr = "", En = {}, Se, Qr, Kr, _n = 0, v = 0, A = 0, S = !1, ae = !1, W = {}, ot, Ne, rr, Mt = 0, U = 0, $t = 0, pt = !1, Sr = !1, Or = 1, Cn, on, Yr, cn, Wn = [], Kn = !1, ho = !1, Ln, Zt, b, F = [], ne = [], H = [], De = [], Ee = [], Qt = [], xt = [], xr = [], Br = [], Jr = [], jo = "", ao, uo, io, es, nt = !1, Dr = "visible", fn, Uo, Go = !1, An = !0, ri, Dn, Io, mi;
  function S_() {
    e(72, cr = null), e(73, Nr = ""), e(86, Or = 1), e(98, nt = !1), e(99, Dr = "visible"), e(100, fn = void 0), e(28, An = !0), Wn = le.fakeElement ? [] : le.json.transition_triggers || ["state_change", "visibility_change"], e(89, Kn = Wn.indexOf("state_change") !== -1), ho = Wn.indexOf("visibility_change") !== -1, d && Oa(d), Dn == null || Dn(), Ut && e(102, Dn = Gt.processVariableTriggers(le, le.json.variable_triggers));
  }
  function D_(gt, rn) {
    if (!Array.isArray(Kt) || !rt || tr && (Array.isArray(rn) ? rn.length : 0) !== 1)
      return;
    const Tn = Kt.findIndex((gn) => (gn == null ? void 0 : gn.id) === gt), Yn = Kt.slice();
    Yn.splice(Tn, 1, ...(rn || []).map((gn) => ({ json: gn, id: gn == null ? void 0 : gn.id }))), e(53, Kt = Yn), rt(Yn.map((gn) => gn == null ? void 0 : gn.json));
  }
  function I_(gt) {
    const rn = fo(gt.start_value, 1), Tn = fo(gt.end_value, 1), Yn = un(gt.start_delay, 0), gn = Ji() ? 0 : un(gt.duration, 300), Eo = Od(gt.interpolator, "ease_in_out").replace(/_/g, "-");
    switch (gt.name) {
      case "fade":
        return e(94, ao = rn), e(95, uo = Tn), `opacity ${gn}ms ${Eo} ${Yn}ms`;
      case "scale":
        return e(96, io = rn), e(97, es = Tn), `transform ${gn}ms ${Eo} ${Yn}ms`;
      case "native":
      case "no_animation":
        return "";
      default:
        return le.logError(X(new Error("Unknown action_animation name"), {
          additional: { animation: gt.name }
        })), "";
    }
  }
  async function F_(gt) {
    e(99, Dr = gt);
    const rn = gt === "visible" ? "in" : "out", Tn = rn === "in" ? le.json.transition_in : le.json.transition_out;
    if (ho && Tn) {
      let Yn;
      gt === "gone" && (Yn = d.getBoundingClientRect()), await Fn(), rn === "in" && e(91, Zt = !0), jr.runVisibilityTransition(
        {
          ...le.json,
          visibility: "visible"
        },
        le,
        Tn,
        d,
        rn,
        Yn
      ).then(() => {
        rn === "in" && e(91, Zt = !1);
      }).catch((gn) => {
        throw rn === "in" && e(91, Zt = !1), gn;
      });
    }
  }
  function za() {
    if (Ce && d) {
      const gt = Gt.getExtensionContext(le);
      Ce.forEach((rn) => {
        var Tn;
        (Tn = rn.unmountView) == null || Tn.call(rn, d, gt);
      }), Ce = null;
    }
  }
  function T_() {
    if (Ce != null && Ce.length) {
      const gt = Gt.getExtensionContext(le);
      Ce.forEach((rn) => {
        var Tn;
        (Tn = rn.updateView) == null || Tn.call(rn, d, gt);
      });
    }
  }
  let Fo = null, Jo = null, bi = "desktop";
  function ts() {
    Fo != null && Fo.matches ? e(105, bi = "mobile") : Jo != null && Jo.matches ? e(105, bi = "tablet") : e(105, bi = "desktop");
  }
  let po = null, rs = "";
  function Oa(gt) {
    var ns, os, is;
    Io == null || Io.destroy(), e(65, d = gt), Kn && le.json.transition_in && (le.id ? jr.registerChildWithTransitionIn(le.json, le, le.json.transition_in, gt).then(() => {
      e(90, Ln = !1);
    }).catch((ni) => {
      throw e(90, Ln = !1), ni;
    }) : le.logError(X(new Error(Pl("transition_in")), { level: "warn" }))), Kn && le.json.transition_out && (le.id ? jr.registerChildWithTransitionOut(le.json, le, le.json.transition_out, gt) : le.logError(X(new Error(Pl("transition_out")), { level: "warn" }))), le.fakeElement || (le.json.transition_change && !le.id && le.logError(X(new Error(Pl("transition_change")), { level: "warn" })), jr.registerChildWithTransitionChange(le.json, le, le.json.transition_change, gt).then(() => {
      e(92, b = !1);
    }).catch((ni) => {
      throw e(92, b = !1), ni;
    }));
    const rn = !le.fakeElement || le.fakeElement === ci, Tn = rn ? le.json.visibility_actions || le.json.visibility_action && [le.json.visibility_action] : [], Yn = rn ? le.json.disappear_actions : [];
    let gn;
    (Array.isArray(Tn) && Tn.length || Array.isArray(Yn) && Yn.length) && (gn = Fh(gt, {
      visibilityActions: Tn,
      disappearActions: Yn,
      rootCtx: Gt,
      componentContext: le
    }));
    const Eo = le.id;
    return Eo && (mi == null || mi(), mi = Gt.registerId(Eo, {
      context: () => le,
      node: () => d
    }), jr.registerChild(Eo)), (ns = le.json.tooltips) == null || ns.forEach((ni) => {
      Gt.registerTooltip(gt, ni);
    }), Uo && (Uo.disconnect(), Uo = void 0), Uo = Rh(d, le, (os = le.json.layout_provider) == null ? void 0 : os.width_variable_name, (is = le.json.layout_provider) == null ? void 0 : is.height_variable_name), Io = {
      destroy() {
        mi && (mi(), mi = void 0), Eo && jr.unregisterChild(Eo), gn && gn.destroy();
      }
    }, Io;
  }
  function M_() {
    le.json.focus && ((ce || !Ul(Gt.isPointerFocus)) && e(17, Go = !0), le.execAnyActions(De));
  }
  function P_() {
    le.json.focus && (e(17, Go = !1), le.execAnyActions(Ee));
  }
  gl(T_), dn(() => {
    var gt;
    Je.forEach((rn) => {
      Gt.unregisterParentOf(rn);
    }), e(66, Je = []), Uo && (Uo.disconnect(), Uo = void 0), (gt = le.json.tooltips) == null || gt.forEach((rn) => {
      Gt.unregisterTooltip(rn);
    }), Dn == null || Dn(), za(), po && (po.remove(), e(106, po = null)), Fo && (Fo.removeEventListener("change", ts), e(103, Fo = null)), Jo && (Jo.removeEventListener("change", ts), e(104, Jo = null));
  });
  function N_(gt) {
    Un.call(this, t, gt);
  }
  function z_(gt) {
    Un.call(this, t, gt);
  }
  return t.$$set = (gt) => {
    "componentContext" in gt && e(0, le = gt.componentContext), "cls" in gt && e(1, Cr = gt.cls), "style" in gt && e(54, Ar = gt.style), "layoutParams" in gt && e(55, Vt = gt.layoutParams), "customDescription" in gt && e(56, Pr = gt.customDescription), "customPaddings" in gt && e(57, Ur = gt.customPaddings), "customActions" in gt && e(58, fr = gt.customActions), "additionalPaddings" in gt && e(59, ft = gt.additionalPaddings), "heightByAspect" in gt && e(60, It = gt.heightByAspect), "parentOf" in gt && e(53, Kt = gt.parentOf), "parentOfSimpleMode" in gt && e(61, tr = gt.parentOfSimpleMode), "replaceItems" in gt && e(62, rt = gt.replaceItems), "hasInnerFocusable" in gt && e(2, mt = gt.hasInnerFocusable), "alwaysCustomFocus" in gt && e(63, ce = gt.alwaysCustomFocus), "containerElement" in gt && e(3, Ct = gt.containerElement), "devapi" in gt && e(64, ir = gt.devapi), "$$scope" in gt && e(152, or = gt.$$scope);
  }, t.$$.update = () => {
    var gt, rn, Tn, Yn, gn, Eo, ns, os, is, ni, Ba;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(132, n = le.origJson), t.$$.dirty[4] & /*origJson*/
    256 && n && S_(), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[3] & /*prevTriggersUnsubscribe*/
    512 | t.$$.dirty[4] & /*$isEnabled*/
    16777216 && (Ut ? (Dn == null || Dn(), e(102, Dn = Gt.processVariableTriggers(le, le.json.variable_triggers))) : Dn == null || Dn()), t.$$.dirty[0] & /*componentContext*/
    1 && Pt(e(47, o = le.getDerivedFromVars(le.json.focus))), t.$$.dirty[0] & /*componentContext*/
    1 && kr(e(46, i = le.getDerivedFromVars(le.json.border))), t.$$.dirty[0] & /*componentContext*/
    1 && hr(e(45, s = le.getDerivedFromVars(le.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && vt(e(44, a = le.getDerivedFromVars(le.json.margins))), t.$$.dirty[0] & /*componentContext*/
    1 && ur(e(43, l = le.getDerivedFromVars(le.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && ar(e(42, u = le.getDerivedFromVars(le.json.alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && Le(e(41, c = le.getDerivedFromVars(le.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && yt(e(40, f = le.getDerivedFromVars(le.json.alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && er(e(39, _ = le.getDerivedFromVars(le.json.alpha))), t.$$.dirty[0] & /*componentContext*/
    1 && Dt(e(38, p = le.getDerivedFromVars(le.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && St(e(37, m = le.getDerivedFromVars(le.json.background))), t.$$.dirty[0] & /*componentContext*/
    1 && ct(e(36, h = le.getDerivedFromVars(le.json.action_animation))), t.$$.dirty[0] & /*componentContext*/
    1 && Et(e(35, y = le.getDerivedFromVars(le.json.visibility))), t.$$.dirty[0] & /*componentContext*/
    1 && ee(e(34, w = le.getDerivedFromVars(le.json.transform))), t.$$.dirty[0] & /*componentContext*/
    1 && lt(e(33, D = le.getDerivedFromVars(le.json.transformations))), t.$$.dirty[0] & /*componentContext*/
    1 && ht(e(32, z = le.getDerivedFromVars(le.json.capture_focus_on_action))), t.$$.dirty[1] & /*parentOf, parentOfSimpleMode*/
    1077936128 | t.$$.dirty[2] & /*prevChilds*/
    16 && (Je.forEach(($e) => {
      Gt.unregisterParentOf($e);
    }), e(66, Je = []), Kt && Kt.forEach(($e) => {
      $e != null && $e.id && (Je.push($e.id), Gt.registerParentOf($e.id, {
        replaceWith: D_,
        isSingleMode: !!tr
      }));
    })), t.$$.dirty[0] & /*hasCustomFocus, borderElemStyle*/
    131088 | t.$$.dirty[2] & /*strokeWidth, strokeColor, cornersRadius, cornerRadius, borderStyle*/
    992 | t.$$.dirty[4] & /*$jsonFocus, $jsonBorder*/
    8421376) {
      const $e = Go && (dt != null && dt.border) ? dt.border : Er;
      let sn = {}, Vn = {}, Nn = !1, ln = "";
      if ($e) {
        if (en($e.has_shadow, !1)) {
          const mn = $e.shadow;
          mn ? sn["box-shadow"] = Oh(mn) : sn["box-shadow"] = "0 1px 2px 0 rgba(0,0,0,.18), 0 0 0 1px rgba(0,0,0,.07)";
        }
        if ($e.stroke) {
          Nn = !0, e(68, Rt = un($e.stroke.width, Rt)), e(69, Ke = pr($e.stroke.color, 1, Ke));
          const mn = ((gt = $e.stroke.style) == null ? void 0 : gt.type) === "dashed" ? "dashed" : "solid";
          Vn["--divkit-border"] = `${me(Rt + 1)} ${mn} ${Ke}`;
        }
        if ($e.corners_radius && typeof $e.corners_radius == "object") {
          e(71, Yt = zh($e.corners_radius, Yt)), sn["border-radius"] = Ts(Yt);
          const mn = {};
          ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((xn) => {
            mn[xn] = (Yt[xn] || 0) + 1;
          }), Vn["--divkit-border-radius"] = Ts(mn);
        } else $e.corner_radius && (e(70, ut = un($e.corner_radius, ut)), e(71, Yt = {
          "top-left": ut,
          "top-right": ut,
          "bottom-right": ut,
          "bottom-left": ut
        }), sn["border-radius"] = me(ut), Vn["--divkit-border-radius"] = me(ut + 1));
        if (Nn && Rt && ($e.corners_radius || $e.corner_radius)) {
          let mn = { ...Yt };
          ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((xn) => {
            mn[xn] = (mn[xn] || 0) + Rt / 2;
          }), ln = Ts(mn);
        }
      }
      e(67, ke = si(sn, ke)), e(4, L = si(Vn, L)), e(22, Lt = Nn), e(5, Ir = ln);
    }
    if (t.$$.dirty[1] & /*customPaddings*/
    67108864 | t.$$.dirty[2] & /*selfPadding*/
    1024 | t.$$.dirty[4] & /*$jsonPaddings*/
    4194304 && e(72, cr = ui(
      sr && !Ur ? sr : void 0,
      cr
    )), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[1] & /*additionalPaddings*/
    268435456 | t.$$.dirty[2] & /*selfPadding*/
    1024 && e(119, O = _o(Nh(cr, ft), ve)), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[2] & /*margin*/
    2048 | t.$$.dirty[4] & /*$jsonMargins*/
    524288 && e(73, Nr = ds(Tt, ve, Nr)), t.$$.dirty[0] & /*componentContext*/
    1 && e(130, Ie = le.json.responsive), t.$$.dirty[3] & /*responsiveMobileQuery, responsiveTabletQuery*/
    3072 | t.$$.dirty[4] & /*responsiveConfig*/
    64 && (Ie && typeof Ie == "object" && typeof window < "u" ? (Fo || (e(103, Fo = window.matchMedia("(max-width: 767px)")), e(104, Jo = window.matchMedia("(min-width: 768px) and (max-width: 1023px)")), Fo.addEventListener("change", ts), Jo.addEventListener("change", ts)), ts()) : e(105, bi = "desktop")), t.$$.dirty[3] & /*responsiveBreakpoint*/
    4096 | t.$$.dirty[4] & /*responsiveConfig*/
    64 && e(126, x = bi !== "desktop" && (Ie == null ? void 0 : Ie[bi]) || null), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[4] & /*activeResponsive*/
    4 && e(128, he = (() => {
      const $e = x == null ? void 0 : x.alignment_horizontal;
      if ($e === "left" || $e === "center" || $e === "right" || $e === "start" || $e === "end")
        return (ve === "ltr" ? au : uu)[$e];
    })()), t.$$.dirty[0] & /*componentContext, $direction*/
    524289 | t.$$.dirty[1] & /*layoutParams*/
    16777216 | t.$$.dirty[2] & /*widthNum, widthMods*/
    20480 | t.$$.dirty[4] & /*$jsonWidth, $jsonMargins, responsiveAlignmentHorizontal, $jsonAlignmentHorizontal*/
    3670032) {
      let $e, sn, Vn, Nn, ln = {}, mn = 0, xn = 0, qo = !1, Ko = !1;
      const jn = (rn = le.json.width) == null ? void 0 : rn.type;
      if (jn === "fixed")
        e(76, _n = un(Fe == null ? void 0 : Fe.value, _n)), sn = me(_n);
      else if (jn === "wrap_content" || (jn === "match_parent" || !jn) && Vt.parentHorizontalWrapContent)
        $e = "content", (jn === "wrap_content" && (Fe != null && Fe.constrained) || (jn === "match_parent" || !jn) && Vt.parentHorizontalWrapContent) && (ln["width-constrained"] = !0, Vt.parentContainerOrientation === "horizontal" && (xn = 1)), (jn === "match_parent" || !jn) && le.logError(X(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
      else if ($e = "parent", Vt.parentContainerOrientation === "vertical" && Vt.parentContainerWrap && (Ko = !0, le.logError(X(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), Vt.parentContainerOrientation === "vertical" && Vt.parentContainerKnownWidth || Vt.stretchWidth || Vt.parentContainerOrientation === "horizontal" && Vt.treatMatchParentAs100) {
        const nn = (Yn = (Tn = ve === "ltr" ? Tt == null ? void 0 : Tt.start : Tt == null ? void 0 : Tt.end) != null ? Tn : Tt == null ? void 0 : Tt.left) != null ? Yn : 0, zn = (Eo = (gn = ve === "ltr" ? Tt == null ? void 0 : Tt.end : Tt == null ? void 0 : Tt.start) != null ? gn : Tt == null ? void 0 : Tt.right) != null ? Eo : 0, In = `calc(100% - ${pn(nn + zn)})`;
        Vt.stretchWidth ? (sn = "0", Vn = In) : sn = In;
      } else Vt.parentContainerOrientation === "horizontal" && (mn = Fe && "weight" in Fe && Fe.weight || 1, Vt.parentContainerWrap && (qo = !0));
      if (jn === "wrap_content" || jn === "match_parent") {
        const nn = Fe;
        let zn, In;
        nn.min_size && Rn(nn.min_size.value) && (zn = nn.min_size.value), nn.max_size && Rn(nn.max_size.value) && (In = nn.max_size.value), zn !== void 0 && In !== void 0 && zn > In && (le.logError(X(new Error("Element has incorrect width constraints (min size is bigger than max size)."), {
          additional: {
            id: le.json.id,
            minSize: zn + "dp",
            maxSize: In + "dp"
          }
        })), zn = In = void 0), zn !== void 0 && (Vn = me(zn)), In !== void 0 && (Nn = me(In));
      }
      if (he)
        ln["halign-self"] = he;
      else if ($e === "parent")
        ln["halign-self"] = "stretch";
      else {
        const nn = qt;
        nn === "left" || nn === "center" || nn === "right" || nn === "start" || nn === "end" ? ln["halign-self"] = (ve === "ltr" ? au : uu)[nn] : ln["halign-self"] = Vt.parentHAlign || "start";
      }
      $e && (ln.width = $e), e(75, Se = sn), e(6, Qr = Vn), e(7, Kr = Nn), e(77, v = mn), e(78, A = xn), e(74, En = si(ln, En)), e(79, S = qo), e(23, ae = Ko);
    }
    if (t.$$.dirty[4] & /*activeResponsive*/
    4 && e(127, te = (() => {
      const $e = x == null ? void 0 : x.alignment_vertical;
      if ($e === "top" || $e === "center" || $e === "bottom" || $e === "baseline")
        return cu[$e];
    })()), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*heightByAspect, layoutParams*/
    553648128 | t.$$.dirty[2] & /*heightNum, heightMods*/
    1310720 | t.$$.dirty[4] & /*$jsonHeight, $jsonMargins, responsiveAlignmentVertical, $jsonAlignmentVertical*/
    917512) {
      let $e, sn, Vn, Nn, ln = {}, mn = 0, xn = 0, qo = !1, Ko = !1;
      const jn = (ns = le.json.height) == null ? void 0 : ns.type;
      if (!It) if (jn === "fixed")
        e(82, Mt = un(Pe == null ? void 0 : Pe.value, Mt)), sn = me(Mt);
      else if (jn === "match_parent" && !Vt.parentVerticalWrapContent)
        if ($e = "parent", Vt.parentContainerOrientation === "horizontal" && Vt.parentContainerWrap && (Ko = !0, le.logError(X(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), Vt.parentContainerOrientation === "horizontal" && Vt.parentContainerKnownHeight || Vt.stretchHeight || Vt.parentContainerOrientation === "vertical" && Vt.treatMatchParentAs100) {
          const nn = (os = Tt == null ? void 0 : Tt.top) != null ? os : 0, zn = (is = Tt == null ? void 0 : Tt.bottom) != null ? is : 0, In = `calc(100% - ${pn(nn + zn)})`;
          Vt.stretchHeight ? (sn = "0", Vn = In) : sn = In;
        } else Vt.parentContainerOrientation === "vertical" && (mn = (Pe == null ? void 0 : Pe.weight) || 1, Vt.parentContainerWrap && (qo = !0));
      else
        $e = "content", (jn === "wrap_content" && (Pe != null && Pe.constrained) || jn === "match_parent" && Vt.parentVerticalWrapContent) && (ln["height-constrained"] = !0, Vt.parentContainerOrientation === "vertical" && (xn = 1)), jn === "match_parent" && le.logError(X(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
      if (!It && (jn === "match_parent" || jn === "wrap_content")) {
        const nn = Pe;
        let zn, In;
        nn.min_size && Rn(nn.min_size.value) && (zn = nn.min_size.value), nn.max_size && Rn(nn.max_size.value) && (In = nn.max_size.value), zn !== void 0 && In !== void 0 && zn > In && (le.logError(X(new Error("Element has incorrect height constraints (min size is bigger than max size)."), {
          additional: {
            id: le.json.id,
            minSize: zn + "dp",
            maxSize: In + "dp"
          }
        })), zn = In = void 0), zn !== void 0 && (Vn = me(zn)), In !== void 0 && (Nn = me(In));
      }
      if (te)
        ln["valign-self"] = te;
      else if ($e === "parent")
        ln["valign-self"] = "stretch";
      else {
        const nn = Ve;
        nn === "top" || nn === "center" || nn === "bottom" || nn === "baseline" && Vt.parentContainerOrientation === "horizontal" ? ln["valign-self"] = cu[nn] : ln["valign-self"] = Vt.parentVAlign || "start";
      }
      $e && (ln.height = $e), e(81, ot = sn), e(8, Ne = Vn), e(9, rr = Nn), e(83, U = mn), e(84, $t = xn), e(80, W = si(ln, W)), e(85, pt = qo), e(24, Sr = Ko);
    }
    if (t.$$.dirty[1] & /*layoutParams*/
    16777216 && e(131, $ = Vt.overlapParent ? !0 : void 0), t.$$.dirty[1] & /*layoutParams*/
    16777216 && e(121, ue = Vt.gridArea ? `${Vt.gridArea.y + 1}/${Vt.gridArea.x + 1}/span ${Vt.gridArea.rowSpan}/span ${Vt.gridArea.colSpan}` : void 0), t.$$.dirty[2] & /*alpha*/
    16777216 | t.$$.dirty[4] & /*$jsonAlpha*/
    65536 && (e(86, Or = Th(Ot, Or)), e(87, Cn = Or === 1 ? void 0 : Or)), t.$$.dirty[0] & /*$jsonAccessibility*/
    1048576 | t.$$.dirty[1] & /*customDescription*/
    33554432 && (e(21, R = void 0), st && !Pr)) {
      const $e = ei(st);
      $e && (e(21, R = {}), e(21, R["aria-label"] = $e, R));
    }
    if (t.$$.dirty[0] & /*hasCustomFocus, background, backgroundRadius, hasSeparateBg, $direction*/
    658464 | t.$$.dirty[4] & /*$jsonFocus, $jsonBackground*/
    49152 && (e(10, on = Go && (dt != null && dt.background) ? dt.background : Be), e(88, Yr = {}), e(11, cn = !1), Array.isArray(on) && (e(11, cn = on.some(($e) => $e.type === "image" || $e.type === "nine_patch_image") || !!Ir), !cn))) {
      const $e = bl(on, ve);
      e(88, Yr["background-color"] = $e.color, Yr), e(88, Yr["background-image"] = $e.image, Yr), e(88, Yr["background-size"] = $e.size, Yr), e(88, Yr["background-position"] = $e.position, Yr), e(88, Yr["background-repeat"] = "no-repeat", Yr);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*hasStateChangeTrigger*/
    134217728 && (e(90, Ln = void 0), Kn && le.id && le.json.transition_in && Gt.isRunning("stateChange") && e(90, Ln = !0)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*hasStateChangeTrigger*/
    134217728 && (e(92, b = void 0), Kn && le.id && Gt.isRunning("stateChange") && jr.hasTransitionChange(le.id) && e(92, b = !0)), t.$$.dirty[0] & /*componentContext, pressStartActions, pressEndActions, hoverStartActions, hoverEndActions*/
    61441 | t.$$.dirty[1] & /*customActions*/
    134217728) {
      const $e = le.json;
      let sn = $e.actions || $e.action && [$e.action] || [], Vn = $e.doubletap_actions || [], Nn = $e.longtap_actions || [], ln = ((ni = $e.focus) == null ? void 0 : ni.on_focus) || [], mn = ((Ba = $e.focus) == null ? void 0 : Ba.on_blur) || [], xn = $e.press_start_actions || [], qo = $e.press_end_actions || [], Ko = $e.hover_start_actions || [], jn = $e.hover_end_actions || [];
      le.fakeElement && le.fakeElement !== ci ? (sn = [], Vn = [], Nn = [], ln = [], mn = []) : (Array.isArray(sn) || (sn = [], le.logError(X(new Error("Actions should be array")))), Array.isArray(Vn) || (Vn = [], le.logError(X(new Error("DoubleTapActions should be array")))), Array.isArray(Nn) || (Nn = [], le.logError(X(new Error("LongTapActions should be array")))), Array.isArray(ln) || (ln = [], le.logError(X(new Error("FocusActions should be array")))), Array.isArray(mn) || (mn = [], le.logError(X(new Error("BlurActions should be array")))), Array.isArray(xn) || (xn = [], le.logError(X(new Error("PressStartActions should be array")))), Array.isArray(qo) || (qo = [], le.logError(X(new Error("PressEndActions should be array")))), Array.isArray(Ko) || (Ko = [], le.logError(X(new Error("HoverStartActions should be array")))), Array.isArray(jn) || (jn = [], le.logError(X(new Error("HoverEndActions should be array"))))), (sn.length || Vn.length || Nn.length || Qt.length || xt.length || xr.length || Br.length) && fr && (sn = [], Vn = [], Nn = [], e(12, Qt = []), e(13, xt = []), e(14, xr = []), e(15, Br = []), le.logError(X(new Error(`Cannot use action on component "${fr}"`)))), e(25, F = sn), e(26, ne = Vn), e(27, H = Nn), De = ln, Ee = mn, e(12, Qt = xn), e(13, xt = qo), e(14, xr = Ko), e(15, Br = jn);
    }
    if (t.$$.dirty[0] & /*actionAnimationList*/
    65536 | t.$$.dirty[4] & /*$jsonActionAnimation*/
    8192 && Z && (e(16, Jr = _s(Z)), e(93, jo = Jr.map(I_).filter(Boolean).join(", "))), t.$$.dirty[4] & /*$jsonCaptureFocusOnAction*/
    4096 && typeof at == "boolean" && e(28, An = at), t.$$.dirty[3] & /*visibility, isVisibilityInited*/
    96 | t.$$.dirty[4] & /*$jsonVisibility*/
    2048) {
      const $e = Dr, sn = Ph(_t, Dr);
      $e !== sn && (nt && (Dr === "visible" || sn === "visible") ? F_(sn) : e(99, Dr = sn)), nt || e(98, nt = !0);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*currentNode*/
    8 | t.$$.dirty[3] & /*prevExtensionsVal*/
    256 && le.json && d && !Qi(le.json.extensions, ri)) {
      let $e = e(101, ri = le.json.extensions);
      Fn().then(() => {
        if (!($e !== ri || !d) && (za(), Array.isArray(le.json.extensions))) {
          const sn = Gt.getExtensionContext(le);
          Ce = le.json.extensions.map((Vn) => {
            var mn;
            const Nn = Vn.id;
            if (!Nn)
              return;
            const ln = Gt.getExtension(Nn, Vn.params);
            return ln && ((mn = ln.mountView) == null || mn.call(ln, d, sn)), ln;
          }).filter(Wo);
        }
      });
    }
    if (t.$$.dirty[4] & /*activeResponsive*/
    4 && e(129, ye = x == null ? void 0 : x.visibility), t.$$.dirty[0] & /*hasCustomFocus, componentContext*/
    131073 | t.$$.dirty[1] & /*layoutParams*/
    16777216 | t.$$.dirty[2] & /*widthMods, heightMods, stateChangingInProgress, visibilityChangingInProgress, transitionChangeInProgress*/
    1879314432 | t.$$.dirty[3] & /*visibility, actionAnimationTransition*/
    65 | t.$$.dirty[4] & /*responsiveAlignmentHorizontal, responsiveAlignmentVertical, parentOverlapMod, responsiveVisibility*/
    184 && e(31, M = {
      ...En,
      ...W,
      ...he ? {
        "halign-self": he
      } : {},
      ...te ? {
        "valign-self": te
      } : {},
      "parent-overlap": $,
      "scroll-snap": Vt.scrollSnap,
      "hide-on-transition-in": Ln || Zt || b,
      visibility: ye || Dr,
      "has-action-animation": !!jo,
      "parent-flex": Vt.parentContainerOrientation || void 0,
      "parent-grid": !!Vt.gridArea || void 0,
      "has-custom-focus": !!(Go && le.json.focus)
    }), t.$$.dirty[4] & /*$jsonTransformations, $jsonTransform*/
    1536) {
      let $e;
      Array.isArray(He) ? $e = He : qe && qe.rotation !== void 0 && ($e = [
        {
          type: "rotation",
          angle: qe.rotation,
          pivot_x: qe.pivot_x,
          pivot_y: qe.pivot_y
        }
      ]), $e ? e(100, fn = Hh($e)) : e(100, fn = void 0);
    }
    if (t.$$.dirty[2] & /*widthFill, heightFill, widthFlexGrow, heightFlexGrow*/
    10649600 && e(115, Y = S || pt ? "100%" : v || U ? 0 : void 0), t.$$.dirty[0] & /*componentContext*/
    1 && e(30, se = le.json["custom-class"] || ""), t.$$.dirty[0] & /*componentContext*/
    1 && e(113, C = le.json.position), t.$$.dirty[0] & /*componentContext*/
    1 && e(114, I = le.json.sticky_top), t.$$.dirty[0] & /*componentContext*/
    1 && e(112, P = le.json.sticky_bottom), t.$$.dirty[0] & /*componentContext*/
    1 && e(111, B = le.json.z_index), t.$$.dirty[0] & /*componentContext*/
    1 && e(110, q = le.json.cursor), t.$$.dirty[0] & /*componentContext*/
    1 && e(109, pe = le.json.backdrop_filter), t.$$.dirty[0] & /*componentContext*/
    1 && e(108, _e = le.json.overflow), t.$$.dirty[0] & /*componentContext*/
    1 && e(107, Ae = le.json["box-shadow"]), t.$$.dirty[0] & /*componentContext*/
    1 && e(116, be = le.json.custom_transition), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[4] & /*activeResponsive*/
    4 && e(120, Ye = (() => {
      if (!(x != null && x.paddings)) return;
      const $e = x.paddings;
      return _o(ui($e, null), ve);
    })()), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[4] & /*activeResponsive*/
    4 && e(118, Qe = (() => {
      if (!(x != null && x.margins)) return;
      const $e = x.margins;
      return ds($e, ve, "");
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(123, xe = (() => {
      if (x != null && x["max-width"] && typeof x["max-width"] == "string")
        return x["max-width"];
      if (!(x != null && x.max_width)) return;
      const $e = x.max_width;
      if ($e.type === "fixed" && $e.value) return $e.value + "px";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(124, we = (() => {
      if (!(x != null && x.width)) return;
      const $e = x.width;
      if ($e.type === "fixed" && $e.value) return me($e.value);
      if ($e.type === "match_parent") return "100%";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(122, Te = (() => {
      if (!(x != null && x.height)) return;
      const $e = x.height;
      if ($e.type === "fixed" && $e.value) return me($e.value);
      if ($e.type === "match_parent") return "100%";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(117, ge = (x == null ? void 0 : x.opacity) !== void 0 ? x.opacity : void 0), t.$$.dirty[0] & /*componentContext*/
    1 && e(125, fe = le.json.hover), t.$$.dirty[0] & /*hoverClassName*/
    262144 | t.$$.dirty[3] & /*hoverStyleEl*/
    8192 | t.$$.dirty[4] & /*hoverConfig*/
    2)
      if (fe && typeof fe == "object" && typeof document < "u") {
        rs || e(18, rs = "divkit-hover-" + Math.random().toString(36).slice(2, 9));
        let $e = "";
        fe.background_color && ($e += `background-color: ${fe.background_color} !important;`), fe.opacity !== void 0 && ($e += `opacity: ${fe.opacity} !important;`), fe.scale !== void 0 && ($e += `scale: ${fe.scale} !important;`), fe.color && ($e += `color: ${fe.color} !important;`), fe.border_color && ($e += `border-color: ${fe.border_color} !important;`), (fe["box-shadow"] || fe.box_shadow) && ($e += `box-shadow: ${fe["box-shadow"] || fe.box_shadow} !important;`), $e && (po || (e(106, po = document.createElement("style")), document.head.appendChild(po)), e(106, po.textContent = `.${rs}:hover { ${$e} }`, po));
      } else po && (po.remove(), e(106, po = null), e(18, rs = ""));
    t.$$.dirty[0] & /*widthMin, widthMax, componentContext, heightMin, heightMax*/
    961 | t.$$.dirty[1] & /*style*/
    8388608 | t.$$.dirty[2] & /*backgroundStyle, borderStyle, width, height, margin, opacity, widthFlexGrow, heightFlexGrow, widthFlexShrink, heightFlexShrink*/
    107587616 | t.$$.dirty[3] & /*responsiveMaxWidth, responsiveHeight, gridArea, responsivePadding, padding, responsiveMargin, responsiveOpacity, customTransition, actionAnimationTransition, transform, flexBasis, customPosition, customStickyTop, customStickyBottom, customZIndex, customCursor, customBackdropFilter, customOverflow, customBoxShadow, animationOpacityStart, animationOpacityEnd, animationScaleStart, animationScaleEnd*/
    2147467423 | t.$$.dirty[4] & /*responsiveWidth*/
    1 && e(29, re = {
      ...Ar,
      ...Yr,
      ...ke,
      width: we || Se,
      "min-width": Qr,
      "max-width": xe || Kr || (() => {
        const $e = le.json.max_width;
        if (($e == null ? void 0 : $e.type) === "fixed" && ($e != null && $e.value)) return me($e.value);
      })(),
      height: Te || ot,
      "min-height": Ne,
      // input max-height
      "max-height": rr || (Ar == null ? void 0 : Ar["max-height"]) || (() => {
        const $e = le.json.max_height;
        if (($e == null ? void 0 : $e.type) === "fixed" && ($e != null && $e.value)) return me($e.value);
      })(),
      "grid-area": ue,
      padding: Ye || O,
      margin: Qe || Nr,
      opacity: ge !== void 0 ? ge : Cn,
      transition: be || jo,
      "transform-origin": fn ? "0 0" : void 0,
      transform: fn,
      "flex-grow": v || U || void 0,
      "flex-shrink": A || $t ? 1 : void 0,
      "flex-basis": Y,
      position: C,
      top: C === "sticky" && I !== void 0 ? me(I) : void 0,
      bottom: C === "sticky" && P !== void 0 ? me(P) : void 0,
      "z-index": B,
      cursor: q,
      "backdrop-filter": pe,
      "-webkit-backdrop-filter": pe,
      overflow: _e,
      "box-shadow": Ae,
      "--divkit-animation-opacity-start": ao,
      "--divkit-animation-opacity-end": uo,
      "--divkit-animation-scale-start": io,
      "--divkit-animation-scale-end": es
    });
  }, [
    le,
    Cr,
    mt,
    Ct,
    L,
    Ir,
    Qr,
    Kr,
    Ne,
    rr,
    on,
    cn,
    Qt,
    xt,
    xr,
    Br,
    Jr,
    Go,
    rs,
    ve,
    st,
    R,
    Lt,
    ae,
    Sr,
    F,
    ne,
    H,
    An,
    re,
    se,
    M,
    z,
    D,
    w,
    y,
    h,
    m,
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
    E,
    ie,
    Oa,
    M_,
    P_,
    Kt,
    Ar,
    Vt,
    Pr,
    Ur,
    fr,
    ft,
    It,
    tr,
    rt,
    ce,
    ir,
    d,
    Je,
    ke,
    Rt,
    Ke,
    ut,
    Yt,
    cr,
    Nr,
    En,
    Se,
    _n,
    v,
    A,
    S,
    W,
    ot,
    Mt,
    U,
    $t,
    pt,
    Or,
    Cn,
    Yr,
    Kn,
    Ln,
    Zt,
    b,
    jo,
    ao,
    uo,
    io,
    es,
    nt,
    Dr,
    fn,
    ri,
    Dn,
    Fo,
    Jo,
    bi,
    po,
    Ae,
    _e,
    pe,
    q,
    B,
    P,
    C,
    I,
    Y,
    be,
    ge,
    Qe,
    O,
    Ye,
    ue,
    Te,
    xe,
    we,
    fe,
    x,
    te,
    he,
    ye,
    Ie,
    $,
    n,
    qe,
    He,
    _t,
    at,
    Z,
    Be,
    dt,
    Ot,
    Ve,
    Pe,
    Tt,
    qt,
    Fe,
    sr,
    Er,
    Ut,
    wt,
    N_,
    z_,
    or
  ];
}
class vn extends Wr {
  constructor(r) {
    super(), Hr(
      this,
      r,
      op,
      np,
      Tr,
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
const ip = "appkit-text", sp = "appkit-text_halign_start", lp = "appkit-text_halign_center", ap = "appkit-text_halign_end", up = "appkit-text_valign_start", cp = "appkit-text_valign_center", fp = "appkit-text_valign_end", dp = "appkit-text_valign_baseline", _p = "appkit-text__inner", hp = "appkit-text_singleline", pp = "appkit-text_multiline", gp = "appkit-text_truncate_none", mp = "appkit-text__inner_gradient", bp = "appkit-text__image", yp = "appkit-text__image_hidden", mo = {
  "text-range": "appkit-text-range",
  text: ip,
  text_halign_start: sp,
  text_halign_center: lp,
  text_halign_end: ap,
  text_valign_start: up,
  text_valign_center: cp,
  text_valign_end: fp,
  text_valign_baseline: dp,
  text__inner: _p,
  text_singleline: hp,
  text_multiline: pp,
  text_truncate_none: gp,
  "text__inner_has-cloud-bg": "appkit-text__inner_has-cloud-bg",
  "text__inner_cloud-bg": "appkit-text__inner_cloud-bg",
  text__inner_gradient: mp,
  "text__image-wrapper": "appkit-text__image-wrapper",
  "text__image-wrapper_crop": "appkit-text__image-wrapper_crop",
  "text__image-wrapper_align_top": "appkit-text__image-wrapper_align_top",
  "text__image-wrapper_align_center": "appkit-text__image-wrapper_align_center",
  "text__image-wrapper_align_bottom": "appkit-text__image-wrapper_align_bottom",
  "text__image-wrapper_align_baseline": "appkit-text__image-wrapper_align_baseline",
  text__image: bp,
  text__image_hidden: yp,
  "text_has-focus-color": "appkit-text_has-focus-color"
}, Mo = {
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
function Jn(t, r) {
  const e = Number(t);
  return Number.isNaN(e) || e <= 0 ? r : e;
}
function wp(t) {
  if (t === "light" || t === "medium" || t === "bold" || t === "regular" || t === "semi_bold")
    return t === "medium" ? 500 : t === "bold" ? 700 : t === "light" ? 300 : t === "semi_bold" ? 600 : 400;
}
function fi(t, r, e) {
  return typeof r == "number" && r > 0 ? r : wp(t) || e;
}
function Yl(t, r) {
  if (!t)
    return {};
  const e = {};
  for (const n of ["left", "top", "right", "bottom", "start", "end"]) {
    const o = t[n];
    o && (e[n] = o * r);
  }
  return e;
}
function Ai(t) {
  if (t && typeof t == "object") {
    const r = [];
    for (const e in t) {
      const n = t[e];
      r.push(`"${e}" ${n}`);
    }
    return r.join(", ");
  }
  return "";
}
function du(t) {
  let r, e, n, o, i, s, a;
  return {
    c() {
      r = tn("svg"), e = tn("defs"), n = tn("filter"), o = tn("feGaussianBlur"), i = tn("feColorMatrix"), a = tn("feBlend"), this.h();
    },
    l(l) {
      r = an(l, "svg", { class: !0 });
      var u = je(r);
      e = an(u, "defs", {});
      var c = je(e);
      n = an(c, "filter", { id: !0 });
      var f = je(n);
      o = an(f, "feGaussianBlur", {
        in: !0,
        result: !0,
        stdDeviation: !0
      }), je(o).forEach(k), i = an(f, "feColorMatrix", {
        in: !0,
        result: !0,
        type: !0,
        values: !0
      }), je(i).forEach(k), a = an(f, "feBlend", { in: !0, in2: !0 }), je(a).forEach(k), f.forEach(k), c.forEach(k), u.forEach(k), this.h();
    },
    h() {
      g(o, "in", "SourceGraphic"), g(o, "result", "blurred"), g(o, "stdDeviation", "3"), g(i, "in", "blurred"), g(i, "result", "withMatrix"), g(i, "type", "matrix"), g(i, "values", s = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 " + 2 * /*borderRadius*/
      t[5] + " -" + /*borderRadius*/
      t[5]), g(a, "in", "SourceGraphic"), g(a, "in2", "withMatrix"), g(
        n,
        "id",
        /*cloudFilterId*/
        t[11]
      ), g(r, "class", Mo["text-range__cloud-svg"]);
    },
    m(l, u) {
      K(l, r, u), jt(r, e), jt(e, n), jt(n, o), jt(n, i), jt(n, a);
    },
    p(l, u) {
      u[0] & /*borderRadius*/
      32 && s !== (s = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 " + 2 * /*borderRadius*/
      l[5] + " -" + /*borderRadius*/
      l[5]) && g(i, "values", s);
    },
    d(l) {
      l && k(r);
    }
  };
}
function _u(t) {
  let r;
  return {
    c() {
      r = Me("span"), this.h();
    },
    l(e) {
      r = ze(e, "SPAN", { class: !0 }), je(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", Mo["text-range__top-offset"]), N(
        r,
        "margin-top",
        /*topOffset*/
        t[9]
      );
    },
    m(e, n) {
      K(e, r, n);
    },
    p(e, n) {
      n[0] & /*topOffset*/
      512 && N(
        r,
        "margin-top",
        /*topOffset*/
        e[9]
      );
    },
    d(e) {
      e && k(r);
    }
  };
}
function hu(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Me("div"), e = Me("div"), n = Me("div"), o = Me("div"), i = Me("div"), s = Me("div"), this.h();
    },
    l(a) {
      r = ze(a, "DIV", { class: !0 }), je(r).forEach(k), e = ze(a, "DIV", { class: !0 }), je(e).forEach(k), n = ze(a, "DIV", { class: !0 }), je(n).forEach(k), o = ze(a, "DIV", { class: !0 }), je(o).forEach(k), i = ze(a, "DIV", { class: !0 }), je(i).forEach(k), s = ze(a, "DIV", { class: !0 }), je(s).forEach(k), this.h();
    },
    h() {
      g(r, "class", Mo["text-range__mask-animation"]), g(e, "class", Mo["text-range__mask-animation"]), g(n, "class", Mo["text-range__mask-animation"]), g(o, "class", Mo["text-range__mask-animation"]), g(i, "class", Mo["text-range__mask-animation"]), g(s, "class", Mo["text-range__mask-animation"]);
    },
    m(a, l) {
      K(a, r, l), K(a, e, l), K(a, n, l), K(a, o, l), K(a, i, l), K(a, s, l);
    },
    d(a) {
      a && (k(r), k(e), k(n), k(o), k(i), k(s));
    }
  };
}
function vp(t) {
  let r = (
    /*text*/
    (t[1] || "​") + ""
  ), e, n = (
    /*maskColor*/
    t[4] && hu()
  );
  return {
    c() {
      n && n.c(), e = Bn(r);
    },
    l(o) {
      n && n.l(o), e = qn(o, r);
    },
    m(o, i) {
      n && n.m(o, i), K(o, e, i);
    },
    p(o, i) {
      /*maskColor*/
      o[4] ? n || (n = hu(), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null), i[0] & /*text*/
      2 && r !== (r = /*text*/
      (o[1] || "​") + "") && Qn(e, r);
    },
    d(o) {
      o && k(e), n && n.d(o);
    }
  };
}
function kp(t) {
  let r, e, n, o, i = (
    /*cloudBg*/
    t[3] && /*hasCloudBg*/
    t[6] && du(t)
  ), s = (
    /*topOffset*/
    t[9] && _u(t)
  );
  return n = new yl({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      cls: bt(
        "text-range",
        Mo,
        /*mods*/
        t[8]
      ),
      actions: (
        /*actions*/
        t[2]
      ),
      style: _r(
        /*style*/
        t[7]
      ),
      $$slots: { default: [vp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      i && i.c(), r = Re(), s && s.c(), e = Re(), Jt(n.$$.fragment);
    },
    l(a) {
      i && i.l(a), r = Re(), s && s.l(a), e = Re(), Xt(n.$$.fragment, a);
    },
    m(a, l) {
      i && i.m(a, l), K(a, r, l), s && s.m(a, l), K(a, e, l), Ht(n, a, l), o = !0;
    },
    p(a, l) {
      /*cloudBg*/
      a[3] && /*hasCloudBg*/
      a[6] ? i ? i.p(a, l) : (i = du(a), i.c(), i.m(r.parentNode, r)) : i && (i.d(1), i = null), /*topOffset*/
      a[9] ? s ? s.p(a, l) : (s = _u(a), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null);
      const u = {};
      l[0] & /*componentContext*/
      1 && (u.componentContext = /*componentContext*/
      a[0]), l[0] & /*mods*/
      256 && (u.cls = bt(
        "text-range",
        Mo,
        /*mods*/
        a[8]
      )), l[0] & /*actions*/
      4 && (u.actions = /*actions*/
      a[2]), l[0] & /*style*/
      128 && (u.style = _r(
        /*style*/
        a[7]
      )), l[0] & /*text, maskColor*/
      18 | l[1] & /*$$scope*/
      64 && (u.$$scope = { dirty: l, ctx: a }), n.$set(u);
    },
    i(a) {
      o || (G(n.$$.fragment, a), o = !0);
    },
    o(a) {
      oe(n.$$.fragment, a), o = !1;
    },
    d(a) {
      a && (k(r), k(e)), i && i.d(a), s && s.d(a), Wt(n, a);
    }
  };
}
function jp(t, r, e) {
  let n, o, i, s, a, l, u, c, f, { componentContext: _ } = r, { text: p } = r, { rootFontSize: m } = r, { textStyles: h = {} } = r, { singleline: y = !1 } = r, { actions: w = void 0 } = r, { cloudBg: D = !1 } = r, { cloudBgId: z = "" } = r, { customLineHeight: O = null } = r;
  const $ = zr($r), ue = $.direction;
  kn(t, ue, (we) => e(35, f = we));
  const M = D && z || $.genId("text-range") || "";
  let Y = "none", se = 12, C = 1.25, I = "", P, B = "", q = "", pe = "", _e, Ae = null, be, Ie, x = !1, Ye, Qe, xe;
  return t.$$set = (we) => {
    "componentContext" in we && e(0, _ = we.componentContext), "text" in we && e(1, p = we.text), "rootFontSize" in we && e(12, m = we.rootFontSize), "textStyles" in we && e(13, h = we.textStyles), "singleline" in we && e(14, y = we.singleline), "actions" in we && e(2, w = we.actions), "cloudBg" in we && e(3, D = we.cloudBg), "cloudBgId" in we && e(15, z = we.cloudBgId), "customLineHeight" in we && e(16, O = we.customLineHeight);
  }, t.$$.update = () => {
    var we, Te, ge, ye, he, te, fe, re;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && _.json && (e(17, Y = "none"), e(18, se = 12), e(19, C = 1.25), e(20, I = ""), e(21, P = void 0), e(22, B = ""), e(23, q = ""), e(24, pe = ""), e(25, _e = void 0), e(26, Ae = null), e(27, be = void 0), e(28, Ie = void 0), e(29, x = !1), e(4, Ye = void 0), e(30, Qe = void 0), e(31, xe = void 0)), t.$$.dirty[0] & /*textStyles*/
    8192) {
      let ve = "none";
      (h.underline || h.strike) && (h.underline === "single" && h.strike === "single" ? ve = "both" : h.underline === "single" ? ve = "underline" : h.strike === "single" && (ve = "strike")), e(17, Y = ve);
    }
    if (t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && e(18, se = Jn(h.font_size, se)), t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && On(h.line_height) && e(19, C = Number(h.line_height) / se), t.$$.dirty[0] & /*textStyles*/
    8192 && Rn(h.letter_spacing) && e(20, I = me(h.letter_spacing)), t.$$.dirty[0] & /*textStyles, fontWeight*/
    2105344 && (e(21, P = fi(h.font_weight, h.font_weight_value, P)), typeof h.font_family == "string" && h.font_family ? e(22, B = $.typefaceProvider(h.font_family, { fontWeight: P || 400 })) : e(22, B = "")), t.$$.dirty[0] & /*textStyles, fontVariationSettings*/
    8396800) {
      const ve = Ai(h.font_variation_settings);
      ve !== q && e(23, q = ve);
    }
    if (t.$$.dirty[0] & /*textStyles, color*/
    16785408 && e(24, pe = pr(h.text_color, 1, pe)), t.$$.dirty[0] & /*textStyles*/
    8192 && e(9, n = h.top_offset ? me(h.top_offset) : ""), t.$$.dirty[0] & /*textStyles*/
    8192 && e(6, o = ((we = h.background) == null ? void 0 : we.type) === "cloud"), t.$$.dirty[0] & /*textStyles*/
    8192 && e(33, i = ((Te = h.background) == null ? void 0 : Te.type) === "cloud" ? h.background.paddings : void 0), t.$$.dirty[0] & /*textStyles, cloudBg, hasCloudBg, fontSize*/
    270408 | t.$$.dirty[1] & /*$direction*/
    16) {
      const ve = h.mask, qe = !!(ve && (ve.type === "solid" || ve.type === "particles") && ve.is_enabled !== !1 && ve.color);
      if (D || qe ? e(25, _e = "transparent") : e(25, _e = void 0), e(29, x = !1), e(4, Ye = void 0), e(30, Qe = void 0), e(31, xe = void 0), D)
        o ? e(28, Ie = kh(h.background.color, 255, "transparent")) : e(28, Ie = void 0);
      else if (ve && qe) {
        if (ve.type === "solid")
          e(28, Ie = pr(ve.color));
        else if (ve.type === "particles") {
          const Xe = Jn((ge = ve.particle_size) == null ? void 0 : ge.value, 1), ee = me(Xe * 10 / se), He = Jn(ve.density, 0.8), Oe = pr(ve.color);
          e(28, Ie = void 0), e(4, Ye = Oe), e(30, Qe = ee), e(31, xe = String(He)), e(29, x = ve.is_animated === !0);
        }
      } else ((ye = h.background) == null ? void 0 : ye.type) === "solid" ? e(28, Ie = bl([h.background], f).color) : e(28, Ie = void 0);
    }
    t.$$.dirty[0] & /*textStyles*/
    8192 && ((he = h.border) != null && he.stroke && h.border.stroke.color && pr(h.border.stroke.color) !== "transparent" && On(h.border.stroke.width) && ((te = h.background) == null ? void 0 : te.type) !== "cloud" ? e(26, Ae = {
      color: h.border.stroke.color,
      width: h.border.stroke.width,
      corner_radius: h.border.corner_radius
    }) : e(26, Ae = null)), t.$$.dirty[0] & /*cloudBg, hasCloudBg, textStyles, border*/
    67117128 && e(5, s = D ? o && h.background.corner_radius || 0 : Ae ? Jn(Ae.corner_radius, 0) : 0), t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && e(32, a = h.text_shadow ? Bh(h.text_shadow, se) : void 0), t.$$.dirty[0] & /*textStyles*/
    8192 && typeof h.baseline_offset == "number" && e(27, be = h.baseline_offset), t.$$.dirty[0] & /*textStyles*/
    8192 && e(34, l = typeof h.baseline_offset == "number" ? void 0 : h.alignment_vertical), t.$$.dirty[0] & /*singleline, decoration, hasCloudBg, customLineHeight, verticalAlign, maskColor, maskAnimated*/
    671301712 | t.$$.dirty[1] & /*customVerticalAlign*/
    8 && e(8, u = {
      singleline: y,
      decoration: Y,
      align: l,
      cloud: o,
      "relative-vertical-align": !!(O && be),
      "has-particles-mask": !!Ye,
      "mask-animated": x
    }), t.$$.dirty[0] & /*fontSize, rootFontSize, lineHeight, letterSpacing, fontWeight, fontFamily, customLineHeight, verticalAlign, cloudBg, hasCloudBg, cloudBgId, colorOverride, color, background, textStyles, border, borderRadius, fontVariationSettings, maskColor, maskSize*/
    1610461304 | t.$$.dirty[1] & /*customVerticalAlign, cloudPadding, $direction, shadow, maskDensity*/
    31 && e(7, c = {
      "font-size": me(se * 10 / m),
      "line-height": l ? "normal" : C,
      "letter-spacing": I,
      "font-weight": P,
      "font-family": B,
      "vertical-align": O || be === void 0 ? void 0 : me(be * 10 / se),
      top: O && be !== void 0 ? me(-be * 10 / se) : void 0,
      margin: i ? _o(Yl(i, -10 / se), f) : void 0,
      padding: i ? _o(Yl(i, 10 / se), f) : void 0,
      filter: D && o && !z ? `url(#${M})` : a,
      color: _e || pe,
      background: Ie,
      opacity: D && o && !z ? ((re = (fe = wo(h.background.color)) == null ? void 0 : fe.a) != null ? re : 255) / 255 : void 0,
      /**
      * box-shadow instead of border because:
      * 1) Doesn't take space as border does
      * 2) There should not be a border-radius on line breaks, but there should be a border
      */
      "box-shadow": Ae ? `inset 0 0 0 ${me(Ae.width * 10 / se)} ${Ae.color}` : void 0,
      "border-radius": s ? me(s * 10 / se) : void 0,
      "font-feature-settings": h.font_feature_settings || void 0,
      "font-variation-settings": q || void 0,
      "--divkit-text-mask-color": Ye,
      "--divkit-text-mask-size": Qe,
      "--divkit-text-mask-density": xe
    });
  }, [
    _,
    p,
    w,
    D,
    Ye,
    s,
    o,
    c,
    u,
    n,
    ue,
    M,
    m,
    h,
    y,
    z,
    O,
    Y,
    se,
    C,
    I,
    P,
    B,
    q,
    pe,
    _e,
    Ae,
    be,
    Ie,
    x,
    Qe,
    xe,
    a,
    i,
    l,
    f
  ];
}
class Ea extends Wr {
  constructor(r) {
    super(), Hr(
      this,
      r,
      jp,
      kp,
      Tr,
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
function wl(t, r, e) {
  return t === "left" || t === "center" || t === "right" || t === "start" || t === "end" ? t === "left" ? r === "ltr" ? "start" : "end" : t === "right" ? r === "ltr" ? "end" : "start" : t : e;
}
function vl(t, r) {
  return t === "top" || t === "center" || t === "bottom" || t === "baseline" ? t === "top" ? "start" : t === "bottom" ? "end" : t : r;
}
function Ep(t) {
  return String(t != null ? t : "");
}
function Ld(t, r) {
  return t === "source_in" || t === "source_atop" || t === "darken" || t === "lighten" || t === "multiply" || t === "screen" ? t : r;
}
function el(t) {
  return t.is_enabled !== 0 && t.is_enabled !== !1;
}
function Ca(t, r) {
  let e;
  return function(...n) {
    e !== null && clearTimeout(e), e = setTimeout(() => {
      t.apply(this, n), e = null;
    }, r);
  };
}
function Cp(t, r) {
  let e = null;
  const n = () => {
    const a = getComputedStyle(t), l = parseFloat(a.lineHeight);
    t.style.webkitLineClamp = "", t.style.maxHeight = "";
    const u = t.offsetHeight, c = t.scrollHeight;
    let f = Math.max(1, Math.floor(u / l));
    r.maxLines && r.maxLines < f && (f = r.maxLines), c > f * l + 1e-9 && (t.style.webkitLineClamp = String(f), t.style.maxHeight = l * f + "px");
  }, o = Ca(n, 50), i = () => {
    e && (e.disconnect(), e = null);
  }, s = () => {
    if (i(), r.enabled) {
      if (n(), typeof ResizeObserver < "u") {
        e = new ResizeObserver(o);
        const a = t.parentElement;
        a && e.observe(a);
      }
    } else
      t.style.webkitLineClamp = String(r.lineClamp || "");
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
const { Boolean: Rd } = Ro;
function pu(t, r, e) {
  const n = t.slice();
  return n[71] = r[e], n;
}
function gu(t, r, e) {
  const n = t.slice();
  return n[71] = r[e], n;
}
function mu(t) {
  let r = (
    /*htmlTag*/
    t[9]
  ), e, n = (
    /*htmlTag*/
    t[9] && Nl(t)
  );
  return {
    c() {
      n && n.c(), e = Re();
    },
    l(o) {
      n && n.l(o), e = Re();
    },
    m(o, i) {
      n && n.m(o, i), K(o, e, i);
    },
    p(o, i) {
      /*htmlTag*/
      o[9] ? r ? Tr(
        r,
        /*htmlTag*/
        o[9]
      ) ? (n.d(1), n = Nl(o), r = /*htmlTag*/
      o[9], n.c(), n.m(e.parentNode, e)) : n.p(o, i) : (n = Nl(o), r = /*htmlTag*/
      o[9], n.c(), n.m(e.parentNode, e)) : r && (n.d(1), n = null, r = /*htmlTag*/
      o[9]);
    },
    i: j,
    o(o) {
      oe(n, o);
    },
    d(o) {
      o && k(e), n && n.d(o);
    }
  };
}
function Ap(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Me("span"), e = Me("span"), this.h();
    },
    l(s) {
      r = ze(s, "SPAN", { style: !0 });
      var a = je(r);
      e = ze(a, "SPAN", { class: !0, style: !0 }), je(e).forEach(k), a.forEach(k), this.h();
    },
    h() {
      g(e, "class", n = bt("text__image-wrapper", mo, {
        align: (
          /*item*/
          t[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          t[11] !== null
        )
      })), g(e, "style", o = _r({
        width: (
          /*item*/
          t[71].image.width
        ),
        height: (
          /*customLineHeight*/
          t[11] && /*item*/
          t[71].image.verticalAlign !== "baseline" ? (
            /*customLineHeight*/
            t[11] + "em"
          ) : void 0
        )
      })), g(r, "style", i = _r(
        /*item*/
        t[71].image.wrapperStyle
      ));
    },
    m(s, a) {
      K(s, r, a), jt(r, e);
    },
    p(s, a) {
      a[0] & /*renderList, customLineHeight*/
      10240 && n !== (n = bt("text__image-wrapper", mo, {
        align: (
          /*item*/
          s[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          s[11] !== null
        )
      })) && g(e, "class", n), a[0] & /*renderList, customLineHeight*/
      10240 && o !== (o = _r({
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
      })) && g(e, "style", o), a[0] & /*renderList*/
      8192 && i !== (i = _r(
        /*item*/
        s[71].image.wrapperStyle
      )) && g(r, "style", i);
    },
    i: j,
    o: j,
    d(s) {
      s && k(r);
    }
  };
}
function Vp(t) {
  let r, e, n = (
    /*item*/
    t[71].text && bu(t)
  );
  return {
    c() {
      n && n.c(), r = Re();
    },
    l(o) {
      n && n.l(o), r = Re();
    },
    m(o, i) {
      n && n.m(o, i), K(o, r, i), e = !0;
    },
    p(o, i) {
      /*item*/
      o[71].text ? n ? (n.p(o, i), i[0] & /*renderList*/
      8192 && G(n, 1)) : (n = bu(o), n.c(), G(n, 1), n.m(r.parentNode, r)) : n && (br(), oe(n, 1, 1, () => {
        n = null;
      }), yr());
    },
    i(o) {
      e || (G(n), e = !0);
    },
    o(o) {
      oe(n), e = !1;
    },
    d(o) {
      o && k(r), n && n.d(o);
    }
  };
}
function bu(t) {
  let r, e;
  return r = new Ea({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      text: (
        /*item*/
        t[71].text
      ),
      rootFontSize: (
        /*fontSize*/
        t[3]
      ),
      textStyles: (
        /*item*/
        t[71].textStyles
      ),
      singleline: (
        /*singleline*/
        t[8]
      ),
      cloudBg: !0,
      cloudBgId: (
        /*wholeTextCloudBgId*/
        t[14]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function yu(t) {
  let r, e, n, o;
  const i = [Vp, Ap], s = [];
  function a(l, u) {
    return "text" in /*item*/
    l[71] ? 0 : (
      /*item*/
      l[71].image ? 1 : -1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Re();
    },
    l(l) {
      e && e.l(l), n = Re();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (br(), oe(s[c], 1, 1, () => {
        s[c] = null;
      }), yr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      oe(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function Nl(t) {
  let r, e, n, o, i = dr(
    /*renderList*/
    t[13]
  ), s = [];
  for (let c = 0; c < i.length; c += 1)
    s[c] = yu(gu(t, i, c));
  const a = (c) => oe(s[c], 1, 1, () => {
    s[c] = null;
  });
  let l = [
    {
      class: e = bt("text__inner", mo, {
        .../*innerMods*/
        t[19],
        "cloud-bg": !0
      })
    },
    {
      style: n = _r({
        .../*style*/
        t[18],
        padding: (
          /*cloudPadding*/
          t[17]
        ),
        filter: (
          /*wholeTextCloudBgId*/
          t[14] ? `url(#${/*wholeTextCloudBgId*/
          t[14]})` : void 0
        ),
        opacity: (
          /*wholeTextCloudBgOpacity*/
          t[15]
        )
      })
    }
  ], u = {};
  for (let c = 0; c < l.length; c += 1)
    u = Do(u, l[c]);
  return {
    c() {
      r = Me(
        /*htmlTag*/
        t[9]
      );
      for (let c = 0; c < s.length; c += 1)
        s[c].c();
      this.h();
    },
    l(c) {
      r = ze(
        c,
        /*htmlTag*/
        (t[9] || "null").toUpperCase(),
        { class: !0, style: !0 }
      );
      var f = je(r);
      for (let _ = 0; _ < s.length; _ += 1)
        s[_].l(f);
      f.forEach(k), this.h();
    },
    h() {
      ai(
        /*htmlTag*/
        t[9]
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
        i = dr(
          /*renderList*/
          c[13]
        );
        let _;
        for (_ = 0; _ < i.length; _ += 1) {
          const p = gu(c, i, _);
          s[_] ? (s[_].p(p, f), G(s[_], 1)) : (s[_] = yu(p), s[_].c(), G(s[_], 1), s[_].m(r, null));
        }
        for (br(), _ = i.length; _ < s.length; _ += 1)
          a(_);
        yr();
      }
      ai(
        /*htmlTag*/
        c[9]
      )(r, u = Ho(l, [
        (!o || f[0] & /*innerMods*/
        524288 && e !== (e = bt("text__inner", mo, {
          .../*innerMods*/
          c[19],
          "cloud-bg": !0
        }))) && { class: e },
        (!o || f[0] & /*style, cloudPadding, wholeTextCloudBgId, wholeTextCloudBgOpacity*/
        442368 && n !== (n = _r({
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
          G(s[f]);
        o = !0;
      }
    },
    o(c) {
      s = s.filter(Rd);
      for (let f = 0; f < s.length; f += 1)
        oe(s[f]);
      o = !1;
    },
    d(c) {
      c && k(r), hn(s, c);
    }
  };
}
function Sp(t) {
  let r, e;
  return r = new Ea({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      text: (
        /*text*/
        t[2]
      ),
      rootFontSize: (
        /*fontSize*/
        t[3]
      ),
      textStyles: (
        /*rootTextStyles*/
        t[7]
      ),
      singleline: (
        /*singleline*/
        t[8]
      ),
      customLineHeight: (
        /*customLineHeight*/
        t[11]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function Dp(t) {
  let r, e, n = dr(
    /*renderList*/
    t[13]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = vu(pu(t, n, s));
  const i = (s) => oe(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = Re();
    },
    l(s) {
      for (let a = 0; a < o.length; a += 1)
        o[a].l(s);
      r = Re();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      K(s, r, a), e = !0;
    },
    p(s, a) {
      if (a[0] & /*componentContext, renderList, fontSize, singleline, customLineHeight*/
      10505 | a[1] & /*onImgError*/
      256) {
        n = dr(
          /*renderList*/
          s[13]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const u = pu(s, n, l);
          o[l] ? (o[l].p(u, a), G(o[l], 1)) : (o[l] = vu(u), o[l].c(), G(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (br(), l = n.length; l < o.length; l += 1)
          i(l);
        yr();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          G(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(Rd);
      for (let a = 0; a < o.length; a += 1)
        oe(o[a]);
      e = !1;
    },
    d(s) {
      s && k(r), hn(o, s);
    }
  };
}
function Ip(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _, p, m = [
    { class: o = mo.text__image },
    {
      src: i = /*item*/
      t[71].image.url
    },
    {
      loading: s = /*item*/
      t[71].image.preloadRequired ? "eager" : "lazy"
    },
    { decoding: "async" },
    {
      alt: a = /*item*/
      t[71].image.description
    },
    /*item*/
    t[71].image.a11yAttrs,
    {
      style: l = _r({
        height: (
          /*item*/
          t[71].image.height
        ),
        filter: (
          /*item*/
          t[71].image.svgFilterId ? `url(#${/*item*/
          t[71].image.svgFilterId})` : void 0
        )
      })
    }
  ], h = {};
  for (let y = 0; y < m.length; y += 1)
    h = Do(h, m[y]);
  return {
    c() {
      r = Me("span"), e = Me("span"), n = Me("img"), this.h();
    },
    l(y) {
      r = ze(y, "SPAN", { style: !0 });
      var w = je(r);
      e = ze(w, "SPAN", { class: !0, style: !0 });
      var D = je(e);
      n = ze(D, "IMG", {
        class: !0,
        src: !0,
        loading: !0,
        decoding: !0,
        alt: !0,
        style: !0
      }), D.forEach(k), w.forEach(k), this.h();
    },
    h() {
      $o(n, h), g(e, "class", u = bt("text__image-wrapper", mo, {
        align: (
          /*item*/
          t[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          t[11] !== null
        )
      })), g(e, "style", c = _r({
        width: (
          /*item*/
          t[71].image.width
        ),
        height: (
          /*customLineHeight*/
          t[11] && /*item*/
          t[71].image.verticalAlign !== "baseline" ? (
            /*customLineHeight*/
            t[11] + "em"
          ) : void 0
        )
      })), g(r, "style", f = _r(
        /*item*/
        t[71].image.wrapperStyle
      ));
    },
    m(y, w) {
      K(y, r, w), jt(r, e), jt(e, n), _ || (p = et(
        n,
        "error",
        /*onImgError*/
        t[39]
      ), _ = !0);
    },
    p(y, w) {
      $o(n, h = Ho(m, [
        { class: o },
        w[0] & /*renderList*/
        8192 && !to(n.src, i = /*item*/
        y[71].image.url) && { src: i },
        w[0] & /*renderList*/
        8192 && s !== (s = /*item*/
        y[71].image.preloadRequired ? "eager" : "lazy") && { loading: s },
        { decoding: "async" },
        w[0] & /*renderList*/
        8192 && a !== (a = /*item*/
        y[71].image.description) && { alt: a },
        w[0] & /*renderList*/
        8192 && /*item*/
        y[71].image.a11yAttrs,
        w[0] & /*renderList*/
        8192 && l !== (l = _r({
          height: (
            /*item*/
            y[71].image.height
          ),
          filter: (
            /*item*/
            y[71].image.svgFilterId ? `url(#${/*item*/
            y[71].image.svgFilterId})` : void 0
          )
        })) && { style: l }
      ])), w[0] & /*renderList, customLineHeight*/
      10240 && u !== (u = bt("text__image-wrapper", mo, {
        align: (
          /*item*/
          y[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          y[11] !== null
        )
      })) && g(e, "class", u), w[0] & /*renderList, customLineHeight*/
      10240 && c !== (c = _r({
        width: (
          /*item*/
          y[71].image.width
        ),
        height: (
          /*customLineHeight*/
          y[11] && /*item*/
          y[71].image.verticalAlign !== "baseline" ? (
            /*customLineHeight*/
            y[11] + "em"
          ) : void 0
        )
      })) && g(e, "style", c), w[0] & /*renderList*/
      8192 && f !== (f = _r(
        /*item*/
        y[71].image.wrapperStyle
      )) && g(r, "style", f);
    },
    i: j,
    o: j,
    d(y) {
      y && k(r), _ = !1, p();
    }
  };
}
function Fp(t) {
  let r, e, n = (
    /*item*/
    t[71].text && wu(t)
  );
  return {
    c() {
      n && n.c(), r = Re();
    },
    l(o) {
      n && n.l(o), r = Re();
    },
    m(o, i) {
      n && n.m(o, i), K(o, r, i), e = !0;
    },
    p(o, i) {
      /*item*/
      o[71].text ? n ? (n.p(o, i), i[0] & /*renderList*/
      8192 && G(n, 1)) : (n = wu(o), n.c(), G(n, 1), n.m(r.parentNode, r)) : n && (br(), oe(n, 1, 1, () => {
        n = null;
      }), yr());
    },
    i(o) {
      e || (G(n), e = !0);
    },
    o(o) {
      oe(n), e = !1;
    },
    d(o) {
      o && k(r), n && n.d(o);
    }
  };
}
function wu(t) {
  let r, e;
  return r = new Ea({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      text: (
        /*item*/
        t[71].text
      ),
      rootFontSize: (
        /*fontSize*/
        t[3]
      ),
      textStyles: (
        /*item*/
        t[71].textStyles
      ),
      singleline: (
        /*singleline*/
        t[8]
      ),
      actions: (
        /*item*/
        t[71].actions
      ),
      customLineHeight: (
        /*customLineHeight*/
        t[11]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function vu(t) {
  let r, e, n, o;
  const i = [Fp, Ip], s = [];
  function a(l, u) {
    return "text" in /*item*/
    l[71] ? 0 : (
      /*item*/
      l[71].image ? 1 : -1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Re();
    },
    l(l) {
      e && e.l(l), n = Re();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (br(), oe(s[c], 1, 1, () => {
        s[c] = null;
      }), yr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      oe(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function zl(t) {
  let r, e, n, o, i, s, a, l, u;
  const c = [Dp, Sp], f = [];
  function _(h, y) {
    return (
      /*renderList*/
      h[13].length ? 0 : 1
    );
  }
  e = _(t), n = f[e] = c[e](t);
  let p = [
    {
      class: o = bt(
        "text__inner",
        mo,
        /*innerMods*/
        t[19]
      )
    },
    {
      style: i = _r(
        /*style*/
        t[18]
      )
    }
  ], m = {};
  for (let h = 0; h < p.length; h += 1)
    m = Do(m, p[h]);
  return {
    c() {
      r = Me(
        /*htmlTag*/
        t[9]
      ), n.c(), this.h();
    },
    l(h) {
      r = ze(
        h,
        /*htmlTag*/
        (t[9] || "null").toUpperCase(),
        { class: !0, style: !0 }
      );
      var y = je(r);
      n.l(y), y.forEach(k), this.h();
    },
    h() {
      ai(
        /*htmlTag*/
        t[9]
      )(r, m);
    },
    m(h, y) {
      K(h, r, y), f[e].m(r, null), a = !0, l || (u = hl(s = Cp.call(null, r, {
        enabled: (
          /*$jsonAutoEllipsize*/
          t[10]
        ),
        lineClamp: typeof /*lineClamp*/
        t[4] == "number" ? (
          /*lineClamp*/
          t[4]
        ) : void 0,
        maxLines: (
          /*maxLines*/
          t[12]
        )
      })), l = !0);
    },
    p(h, y) {
      let w = e;
      e = _(h), e === w ? f[e].p(h, y) : (br(), oe(f[w], 1, 1, () => {
        f[w] = null;
      }), yr(), n = f[e], n ? n.p(h, y) : (n = f[e] = c[e](h), n.c()), G(n, 1), n.m(r, null)), ai(
        /*htmlTag*/
        h[9]
      )(r, m = Ho(p, [
        (!a || y[0] & /*innerMods*/
        524288 && o !== (o = bt(
          "text__inner",
          mo,
          /*innerMods*/
          h[19]
        ))) && { class: o },
        (!a || y[0] & /*style*/
        262144 && i !== (i = _r(
          /*style*/
          h[18]
        ))) && { style: i }
      ])), s && Rr(s.update) && y[0] & /*$jsonAutoEllipsize, lineClamp, maxLines*/
      5136 && s.update.call(null, {
        enabled: (
          /*$jsonAutoEllipsize*/
          h[10]
        ),
        lineClamp: typeof /*lineClamp*/
        h[4] == "number" ? (
          /*lineClamp*/
          h[4]
        ) : void 0,
        maxLines: (
          /*maxLines*/
          h[12]
        )
      });
    },
    i(h) {
      a || (G(n), a = !0);
    },
    o(h) {
      oe(n), a = !1;
    },
    d(h) {
      h && k(r), f[e].d(), l = !1, u();
    }
  };
}
function Tp(t) {
  let r, e = (
    /*htmlTag*/
    t[9]
  ), n, o, i = (
    /*hasCloudBg*/
    t[6] && mu(t)
  ), s = (
    /*htmlTag*/
    t[9] && zl(t)
  );
  return {
    c() {
      i && i.c(), r = gr(), s && s.c(), n = Re();
    },
    l(a) {
      i && i.l(a), r = mr(a), s && s.l(a), n = Re();
    },
    m(a, l) {
      i && i.m(a, l), K(a, r, l), s && s.m(a, l), K(a, n, l), o = !0;
    },
    p(a, l) {
      /*hasCloudBg*/
      a[6] ? i ? (i.p(a, l), l[0] & /*hasCloudBg*/
      64 && G(i, 1)) : (i = mu(a), i.c(), G(i, 1), i.m(r.parentNode, r)) : i && (br(), oe(i, 1, 1, () => {
        i = null;
      }), yr()), /*htmlTag*/
      a[9] ? e ? Tr(
        e,
        /*htmlTag*/
        a[9]
      ) ? (s.d(1), s = zl(a), e = /*htmlTag*/
      a[9], s.c(), s.m(n.parentNode, n)) : s.p(a, l) : (s = zl(a), e = /*htmlTag*/
      a[9], s.c(), s.m(n.parentNode, n)) : e && (s.d(1), s = null, e = /*htmlTag*/
      a[9]);
    },
    i(a) {
      o || (G(i), o = !0);
    },
    o(a) {
      oe(i), oe(s, a), o = !1;
    },
    d(a) {
      a && (k(r), k(n)), i && i.d(a), s && s.d(a);
    }
  };
}
function Mp(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: bt(
        "text",
        mo,
        /*mods*/
        t[20]
      ) + " " + /*selectable*/
      (t[5] ? Fr.root__selectable : Fr.root__unselectable),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      containerElement: (
        /*containerElement*/
        t[16]
      ),
      $$slots: { default: [Tp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods, selectable*/
      1048608 && (i.cls = bt(
        "text",
        mo,
        /*mods*/
        n[20]
      ) + " " + /*selectable*/
      (n[5] ? Fr.root__selectable : Fr.root__unselectable)), o[0] & /*componentContext*/
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function Pp(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, p, m, h, y, w, D, z, O, $, ue, M, Y, se, C, I, P, B, q, pe = j, _e = () => (pe(), pe = V(D, (It) => e(52, q = It)), D), Ae, be = j, Ie = () => (be(), be = V(i, (It) => e(53, Ae = It)), i), x, Ye = j, Qe = () => (Ye(), Ye = V(o, (It) => e(54, x = It)), o), xe, we = j, Te = () => (we(), we = V(y, (It) => e(55, xe = It)), y), ge, ye = j, he = () => (ye(), ye = V(h, (It) => e(56, ge = It)), h), te, fe = j, re = () => (fe(), fe = V(m, (It) => e(57, te = It)), m), ve, qe = j, Xe = () => (qe(), qe = V(p, (It) => e(58, ve = It)), p), ee, He = j, Oe = () => (He(), He = V(_, (It) => e(59, ee = It)), _), lt, _t = j, it = () => (_t(), _t = V(u, (It) => e(60, lt = It)), u), Et, at = j, zt = () => (at(), at = V(f, (It) => e(61, Et = It)), f), ht, Z = j, de = () => (Z(), Z = V(c, (It) => e(62, ht = It)), c), ct, Be = j, T = () => (Be(), Be = V(w, (It) => e(10, ct = It)), w), St, dt = j, Ft = () => (dt(), dt = V(l, (It) => e(63, St = It)), l), Pt, st = j, Q = () => (st(), st = V(a, (It) => e(64, Pt = It)), a), Dt, Ot = j, nr = () => (Ot(), Ot = V(s, (It) => e(65, Dt = It)), s), er, Ve = j, Ge = () => (Ve(), Ve = V(n, (It) => e(66, er = It)), n), yt, Pe = j, tt = () => (Pe(), Pe = V(z, (It) => e(67, yt = It)), z);
  t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => Ye()), t.$$.on_destroy.push(() => we()), t.$$.on_destroy.push(() => ye()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => qe()), t.$$.on_destroy.push(() => He()), t.$$.on_destroy.push(() => _t()), t.$$.on_destroy.push(() => at()), t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => Be()), t.$$.on_destroy.push(() => dt()), t.$$.on_destroy.push(() => st()), t.$$.on_destroy.push(() => Ot()), t.$$.on_destroy.push(() => Ve()), t.$$.on_destroy.push(() => Pe());
  let { componentContext: Le } = r, { layoutParams: Tt = void 0 } = r;
  const We = zr($r), vt = We.direction;
  kn(t, vt, (It) => e(51, B = It));
  let qt = "", Nt = 12, ar = 1.25, Fe = null, At = "", ur, sr = "", lr = !1, hr = "start", Er = "start", Bt = "", kr = "", Ut = "", wt = !1, or = [], le = !1, Cr = "", Ar, Vt = [], Pr = {}, Ur = "span";
  function fr(It, Kt, tr, rt) {
    var ie, d;
    let mt = [];
    if (Vt.forEach(([R, Ce]) => {
      We.removeSvgFilter(R, Ce);
    }), Vt = [], !(Array.isArray(Kt) && Kt.length || Array.isArray(tr) && tr.length && It)) {
      e(13, or = []);
      return;
    }
    const ce = It;
    let Ct = Kt || [{ start: 0, end: ce.length }], ir = tr || [], Gt = 0, jr = [], E = [];
    Ct.forEach((R) => {
      const Ce = R.start || 0, Je = R.end || It.length, ke = {
        top_offset: 0,
        ...R,
        start: Ce,
        end: Je
      };
      E.push({
        index: Ce,
        range: ke,
        type: "rangeStart",
        isStart: !0
      }), E.push({
        index: Je,
        range: ke,
        type: "rangeEnd"
      });
    }), ir.forEach((R, Ce) => {
      R.start !== void 0 && R.url && R.start <= ce.length && E.push({
        index: R.indexing_direction === "reversed" ? It.length - R.start : R.start,
        image: R,
        type: "image",
        arrayIndex: Ce
      });
    }), E.sort((R, Ce) => R.index === Ce.index ? R.type !== Ce.type ? R.type === "image" ? -1 : Ce.type === "image" ? 1 : R.type < Ce.type ? -1 : 1 : R.type === "image" && Ce.type === "image" ? Ce.arrayIndex - R.arrayIndex : R.type === "rangeStart" && Ce.type === "rangeStart" ? R.range.end - Ce.range.end : R.type === "rangeStart" ? 1 : Ce.type === "rangeStart" ? -1 : R.type !== "image" && Ce.type !== "image" ? R.range.start - Ce.range.start : 0 : R.index - Ce.index), E.forEach((R) => {
      var ke, L, Lt, Rt;
      let Ce = R.type === "image" ? null : R.range, Je = R.index;
      if (Je > Gt) {
        let Ke = Object.assign({ ...rt }, ...jr);
        jr.length && jr[jr.length - 1].start !== Gt && (Ke.top_offset = 0), mt.push({
          text: ce.substring(Gt, Je),
          textStyles: Ke,
          actions: R.type === "rangeEnd" && ((L = (ke = R.range) == null ? void 0 : ke.actions) == null ? void 0 : L.filter(el)) || void 0
        });
      }
      if (R.type === "rangeStart" && Ce)
        jr.push(Ce);
      else if (R.type === "rangeEnd")
        jr = jr.filter((Ke) => Ke !== R.range);
      else if (R.type === "image") {
        let Ke = Object.assign({ ...rt }, ...jr), ut = me((R.image.width && R.image.width.value || 20) * 10 / (Ke.font_size || 12)), Yt = me((R.image.height && R.image.height.value || 20) * 10 / (Ke.font_size || 12));
        const Ir = {
          "font-size": me((Number(Ke.font_size) || 12) * 10 / Nt)
        };
        let cr = "";
        const Nr = R.image.tint_color, En = Ld(R.image.tint_mode, "source_in");
        if (Nr) {
          const _n = pr(R.image.tint_color);
          cr = We.addSvgFilter(_n, En), Vt.push([_n, En]);
        }
        const Se = {}, Qr = (Lt = R.image.accessibility) == null ? void 0 : Lt.type, Kr = ((Rt = R.image.accessibility) == null ? void 0 : Rt.description) || "";
        (Qr === "button" || Qr === "image") && Kr ? Se.role = Qr : (!Kr || Qr === "none") && (Se["aria-hidden"] = "true"), mt.push({
          image: {
            url: R.image.url,
            width: ut,
            height: Yt,
            wrapperStyle: Ir,
            svgFilterId: cr,
            preloadRequired: !!R.image.preload_required,
            verticalAlign: R.image.alignment_vertical,
            description: Kr,
            a11yAttrs: Se
          }
        });
      }
      Gt = Je;
    }), Gt < ce.length && mt.push({
      text: ce.substring(Gt),
      textStyles: { ...rt }
    }), e(13, or = mt), e(6, le = mt.some((R) => {
      var Ce;
      return "text" in R && ((Ce = R.textStyles.background) == null ? void 0 : Ce.type) === "cloud";
    })), e(14, Cr = le && mt.length === 1 ? We.genId("text-whole-bg") : ""), e(15, Ar = Cr ? ((d = (ie = wo(mt[0].textStyles.background.color)) == null ? void 0 : ie.a) != null ? d : 255) / 255 : void 0);
  }
  function ft(It) {
    It.target && "classList" in It.target && It.target.classList.add(mo.text__image_hidden);
  }
  return dn(() => {
    Vt.forEach(([It, Kt]) => {
      We.removeSvgFilter(It, Kt);
    });
  }), t.$$set = (It) => {
    "componentContext" in It && e(0, Le = It.componentContext), "layoutParams" in It && e(1, Tt = It.layoutParams);
  }, t.$$.update = () => {
    var It, Kt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && Le.json && (e(3, Nt = 12), e(40, ar = 1.25), e(11, Fe = null), e(41, At = ""), e(12, ur = void 0), e(4, sr = ""), e(42, lr = !1), e(43, hr = "start"), e(44, Er = "start"), e(45, Bt = ""), e(47, Ut = ""), e(5, wt = !1)), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(37, n = Le.getDerivedFromVars(Le.json.text))), t.$$.dirty[0] & /*componentContext*/
    1 && Qe(e(36, o = Le.getDerivedFromVars(Le.json.ranges, void 0, !0, 3))), t.$$.dirty[0] & /*componentContext*/
    1 && Ie(e(35, i = Le.getDerivedFromVars(Le.json.images))), t.$$.dirty[0] & /*componentContext*/
    1 && nr(e(34, s = Le.getDerivedFromVars(
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
    ))), t.$$.dirty[0] & /*componentContext*/
    1 && Q(e(33, a = Le.getDerivedFromVars(Le.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && Ft(e(32, l = Le.getDerivedFromVars(Le.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && it(e(31, u = Le.getDerivedFromVars(Le.json.max_lines))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(30, c = Le.getDerivedFromVars(Le.json.text_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && zt(e(29, f = Le.getDerivedFromVars(Le.json.text_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && Oe(e(28, _ = Le.getDerivedFromVars(Le.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(27, p = Le.getDerivedFromVars(Le.json.focused_text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && re(e(26, m = Le.getDerivedFromVars(Le.json.truncate))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(25, h = Le.getDerivedFromVars(Le.json.text_gradient))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(24, y = Le.getDerivedFromVars(Le.json.selectable))), t.$$.dirty[0] & /*componentContext*/
    1 && T(e(23, w = Le.getDerivedFromVars(Le.json.auto_ellipsize))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(22, D = Le.getDerivedFromVars(Le.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && tt(e(21, z = Le.getDerivedFromVars(Le.json.heading_type))), t.$$.dirty[2] & /*$jsonHeadingType*/
    32 && e(9, O = (() => {
      const tr = yt;
      if (tr && typeof tr == "string") {
        const rt = tr.toLowerCase();
        if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(rt))
          return rt;
      }
      return "span";
    })()), t.$$.dirty[0] & /*htmlTag*/
    512 && e(16, Ur = O !== "span" ? "div" : "span"), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*$jsonText*/
    16 && (typeof Le.json.text == "string" ? e(2, qt = Ep(er)) : (e(2, qt = ""), Le.logError(X(new Error("Incorrect text value type"))))), t.$$.dirty[1] & /*$jsonTextGradient, $direction*/
    34603008) {
      let tr = "";
      if (ge) {
        const rt = bl([ge], B);
        rt.image && (tr = rt.image);
      }
      e(47, Ut = tr);
    }
    if (t.$$.dirty[1] & /*gradient*/
    65536 | t.$$.dirty[2] & /*$jsonRootTextStyles*/
    8 && e(7, Pr = Ut ? { ...Dt, text_color: "" } : Dt), t.$$.dirty[0] & /*fontSize, componentContext*/
    9 | t.$$.dirty[2] & /*$jsonTextSize*/
    4) {
      e(3, Nt = Jn(Pt, Nt));
      const tr = Le.json.responsive;
      if (tr && typeof tr == "object" && typeof window < "u") {
        const rt = window.matchMedia("(max-width: 767px)").matches, mt = window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches;
        rt && ((It = tr.mobile) != null && It.font_size) ? e(3, Nt = tr.mobile.font_size) : mt && ((Kt = tr.tablet) != null && Kt.font_size) && e(3, Nt = tr.tablet.font_size);
      }
    }
    if (t.$$.dirty[0] & /*fontSize*/
    8 | t.$$.dirty[1] & /*lineHeight*/
    512 | t.$$.dirty[2] & /*$jsonLineHeight*/
    2) {
      const tr = St;
      On(tr) ? (e(40, ar = Number(tr) / Nt), e(11, Fe = ar)) : e(11, Fe = null);
    }
    if (t.$$.dirty[1] & /*$jsonMaxLines*/
    536870912 && e(8, $ = lt === 1), t.$$.dirty[0] & /*$jsonAutoEllipsize*/
    1024 | t.$$.dirty[1] & /*$jsonMaxLines, lineHeight*/
    536871424) {
      let tr = "", rt, mt = "", ce = !1;
      if (lt && lt > 1) {
        const Ct = Number(lt);
        tr = Ct * ar + "em", rt = Ct, mt = Ct, ce = !0;
      } else ct && lt !== 1 && (ce = !0);
      e(41, At = tr), e(12, ur = rt), e(4, sr = mt), e(42, lr = ce);
    }
    if (t.$$.dirty[1] & /*$direction, halign*/
    1052672 | t.$$.dirty[2] & /*$jsonHAlign*/
    1 && e(43, hr = wl(ht, B, hr)), t.$$.dirty[1] & /*$jsonVAlign, valign*/
    1073750016 && e(44, Er = vl(Et, Er)), t.$$.dirty[0] & /*text*/
    4 | t.$$.dirty[1] & /*$jsonRanges*/
    8388608 && e(50, ue = !x || qt && x.length === 1 && x[0] && (!x[0].start || x[0].start === 0) && (!x[0].end || typeof x[0].end == "number" && x[0].end >= qt.length)), t.$$.dirty[1] & /*gradient, $jsonTextColor, $jsonRanges*/
    276889600 && e(49, M = !!(!Ut && ee) != !!(x && x[0] && x[0].text_color)), t.$$.dirty[1] & /*$jsonMaxLines, isAllTextSameColor, isOnlyOneColorDefined, $jsonTextColor, $jsonRanges, rootTextColor*/
    814497792) {
      let tr = "";
      lt && ue && M && (tr = pr(ee || x && x[0] && x[0].text_color, 1, Bt)), e(45, Bt = tr);
    }
    t.$$.dirty[1] & /*$jsonFocusTextColor, focusTextColor*/
    134250496 && e(46, kr = pr(ve, 1, kr)), t.$$.dirty[1] & /*$jsonTruncate*/
    67108864 && e(48, Y = te === "none" ? "none" : ""), t.$$.dirty[0] & /*selectable*/
    32 | t.$$.dirty[1] & /*$jsonSelectable*/
    16777216 && e(5, wt = en(xe, wt)), t.$$.dirty[0] & /*text, rootTextStyles*/
    132 | t.$$.dirty[1] & /*$jsonRanges, $jsonImages*/
    12582912 && fr(qt, x, Ae, Pr), t.$$.dirty[0] & /*singleline*/
    256 | t.$$.dirty[1] & /*multiline, halign, valign, truncate, focusTextColor*/
    178176 && e(20, se = {
      singleline: $,
      multiline: lr,
      halign: hr,
      valign: Er,
      truncate: Y,
      "has-focus-color": !!kr
    }), t.$$.dirty[0] & /*hasCloudBg*/
    64 | t.$$.dirty[1] & /*gradient*/
    65536 && e(19, C = {
      gradient: !!Ut,
      "has-cloud-bg": le
    }), t.$$.dirty[0] & /*fontSize, lineClamp*/
    24 | t.$$.dirty[1] & /*lineHeight, maxHeight, rootTextColor, gradient, focusTextColor*/
    116224 && e(18, I = {
      "font-size": me(Nt),
      "line-height": ar,
      "max-height": At,
      "-webkit-line-clamp": sr,
      color: Bt,
      "background-image": Ut,
      "--divkit-text-focus-color": kr
    }), t.$$.dirty[0] & /*fontSize*/
    8 | t.$$.dirty[1] & /*$jsonPaddings, $direction*/
    3145728 && e(17, P = _o(Yl(ui(q, {}) || {}, 10 / Nt), B));
  }, [
    Le,
    Tt,
    qt,
    Nt,
    sr,
    wt,
    le,
    Pr,
    $,
    O,
    ct,
    Fe,
    ur,
    or,
    Cr,
    Ar,
    Ur,
    P,
    I,
    C,
    se,
    z,
    D,
    w,
    y,
    h,
    m,
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
    n,
    vt,
    ft,
    ar,
    At,
    lr,
    hr,
    Er,
    Bt,
    kr,
    Ut,
    Y,
    M,
    ue,
    B,
    q,
    Ae,
    x,
    xe,
    ge,
    te,
    ve,
    ee,
    lt,
    Et,
    ht,
    St,
    Pt,
    Dt,
    er,
    yt
  ];
}
class Np extends Wr {
  constructor(r) {
    super(), Hr(this, r, Pp, Mp, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const zp = "appkit-container", Op = "appkit-container_wrap", Bp = "appkit-container_overflow_visible", Lp = "appkit-container_orientation_vertical", Rp = "appkit-container_valign_start", Hp = "appkit-container_valign_center", Wp = "appkit-container_valign_end", Up = "appkit-container_halign_start", Gp = "appkit-container_halign_center", Jp = "appkit-container_halign_end", qp = "appkit-container_orientation_horizontal", Kp = "appkit-container_orientation_overlap", ku = {
  container: zp,
  container_wrap: Op,
  container_overflow_visible: Bp,
  container_orientation_vertical: Lp,
  container_valign_start: Rp,
  container_valign_center: Hp,
  container_valign_end: Wp,
  "container_valign_space-between": "appkit-container_valign_space-between",
  "container_valign_space-around": "appkit-container_valign_space-around",
  "container_valign_space-evenly": "appkit-container_valign_space-evenly",
  container_halign_start: Up,
  container_halign_center: Gp,
  container_halign_end: Jp,
  "container_halign_space-between": "appkit-container_halign_space-between",
  "container_halign_space-around": "appkit-container_halign_space-around",
  "container_halign_space-evenly": "appkit-container_halign_space-evenly",
  container_orientation_horizontal: qp,
  container_orientation_overlap: Kp,
  "container_fixed-container": "appkit-container_fixed-container",
  "container_responsive-mobile-vertical": "appkit-container_responsive-mobile-vertical",
  "container_responsive-mobile-horizontal": "appkit-container_responsive-mobile-horizontal",
  "container_responsive-mobile-has-height": "appkit-container_responsive-mobile-has-height",
  "container_responsive-tablet-vertical": "appkit-container_responsive-tablet-vertical",
  "container_responsive-tablet-horizontal": "appkit-container_responsive-tablet-horizontal",
  "container_responsive-tablet-has-height": "appkit-container_responsive-tablet-has-height"
};
function ju(t) {
  return {
    top: Number(t == null ? void 0 : t.top) || 0,
    right: Number(t == null ? void 0 : t.right) || 0,
    bottom: Number(t == null ? void 0 : t.bottom) || 0,
    left: Number(t == null ? void 0 : t.left) || 0
  };
}
function Eu(t, r, e) {
  const n = ((r == null ? void 0 : r.margins.left) || 0) + ((r == null ? void 0 : r.margins.right) || 0), o = ((r == null ? void 0 : r.margins.top) || 0) + ((r == null ? void 0 : r.margins.bottom) || 0);
  r != null && r.show_at_start && (e ? t.top = r.style.height + o : t.left = r.style.width + n), r != null && r.show_at_end && (e ? t.bottom = r.style.height + o : t.right = r.style.width + n);
}
function Yp(t, r, e) {
  const n = {};
  return Eu(n, r, t === "vertical"), Eu(n, e, t === "horizontal"), n;
}
function Xp({
  orientation: t,
  separator: r,
  lineSeparator: e,
  itemSpacing: n,
  lineSpacing: o
}) {
  let i;
  const s = ((r == null ? void 0 : r.margins.left) || 0) + ((r == null ? void 0 : r.margins.right) || 0), a = ((r == null ? void 0 : r.margins.top) || 0) + ((r == null ? void 0 : r.margins.bottom) || 0), l = ((e == null ? void 0 : e.margins.left) || 0) + ((e == null ? void 0 : e.margins.right) || 0), u = ((e == null ? void 0 : e.margins.top) || 0) + ((e == null ? void 0 : e.margins.bottom) || 0);
  return t === "horizontal" ? i = [
    e != null && e.show_between ? e.style.height + u : o,
    r != null && r.show_between ? r.style.width + s : n
  ] : i = [
    r != null && r.show_between ? r.style.height + a : n,
    e != null && e.show_between ? e.style.width + l : o
  ], i.map(me).join(" ");
}
function Zp(t) {
  var e;
  const r = (e = t.width) == null ? void 0 : e.type;
  return r !== "wrap_content" && r !== "fixed";
}
function Qp(t) {
  var e;
  return ((e = t.height) == null ? void 0 : e.type) === "match_parent";
}
function xp(t, r) {
  return t === "vertical" || t === "horizontal" || t === "overlap" ? t : r;
}
function $p(t) {
  var r, e, n;
  return {
    width: un((r = t.item_width) == null ? void 0 : r.value, 10),
    height: un((e = t.item_height) == null ? void 0 : e.value, 10),
    radius: un((n = t.corner_radius) == null ? void 0 : n.value, 5)
  };
}
function eg(t) {
  var e;
  const r = un((e = t.radius) == null ? void 0 : e.value, 10) * 2;
  return {
    width: r,
    height: r,
    radius: r
  };
}
function tg(t, r, e) {
  var l;
  const n = {}, o = r.stroke || (e == null ? void 0 : e.stroke), i = o != null && o.color ? pr(o.color) : "", s = o != null && o.width ? Number((l = o.width) != null ? l : 1) : "";
  n.width = t.width, n.height = t.height, n.borderRadius = t.radius;
  const a = r.background_color || (e == null ? void 0 : e.color);
  return n.background = pr(a), i && s && (n.boxShadow = `inset 0 0 0 ${me(s)} ${i}`), n;
}
function go(t, r, e) {
  if (!t || !t.shape || !t.shape.type || !r.includes(t.shape.type) || t.type !== "shape_drawable")
    return e;
  let n;
  if (t.shape.type === "rounded_rectangle")
    n = $p(t.shape);
  else if (t.shape.type === "circle")
    n = eg(t.shape);
  else
    return e;
  return tg(n, t.shape, {
    color: t.color,
    stroke: t.stroke
  });
}
let ls;
function Cu() {
  if (typeof document > "u" && (ls = !0), ls !== void 0)
    return ls;
  const t = document.createElement("div");
  return t.style.position = "absolute", t.style.display = "flex", t.style.flexDirection = "column", t.style.gap = "1px", t.appendChild(document.createElement("div")), t.appendChild(document.createElement("div")), document.body.appendChild(t), ls = t.scrollHeight === 1, document.body.removeChild(t), ls;
}
function rg(t, r) {
  return t === "top" || t === "center" || t === "bottom" || t === "baseline" || t === "space-between" || t === "space-around" || t === "space-evenly" ? t === "top" ? "start" : t === "bottom" ? "end" : t : r;
}
function ng(t, r, e) {
  return t === "left" || t === "center" || t === "right" || t === "space-between" || t === "space-around" || t === "space-evenly" || t === "start" || t === "end" ? t === "left" ? r === "ltr" ? "start" : "end" : t === "right" ? r === "ltr" ? "end" : "start" : t : e;
}
function og() {
}
function Qo(t) {
  return {
    subscribe(r) {
      return r(t), og;
    }
  };
}
function kl(t, r, e, n) {
  const o = [], i = n.prototypes;
  return i && t.forEach((s, a) => {
    if (s === null || typeof s != "object")
      return;
    const l = r.preparePrototypeVariables(n.data_element_name || "it", s, a);
    let u, c;
    for (let f = 0; f < i.length; ++f) {
      const _ = i[f];
      if (!_.div)
        continue;
      if (_.selector === void 0) {
        u = _.div, c = e.getJsonWithVars(_.id, l);
        break;
      }
      if (e.getJsonWithVars(_.selector, l)) {
        u = _.div, c = e.getJsonWithVars(_.id, l);
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
const hs = {
  "container-separator": "appkit-container-separator",
  "container-separator__item": "appkit-container-separator__item",
  "container-separator__shape": "appkit-container-separator__shape"
};
function ig(t, r) {
  let e = 0, n, o = !1;
  return function() {
    const i = Date.now();
    return !e || Math.abs(i - e) > r ? (e = i, n = t.apply(this, arguments)) : (o || (o = !0, setTimeout(() => {
      o = !1, n = t.apply(this, arguments);
    }, r)), n);
  };
}
function sg(t) {
  const r = t.getBoundingClientRect(), e = getComputedStyle(t);
  return {
    top: r.top - parseFloat(e.marginTop),
    right: r.right + parseFloat(e.marginRight),
    bottom: r.bottom + parseFloat(e.marginBottom),
    left: r.left - parseFloat(e.marginLeft)
  };
}
const { window: lg } = Ro;
function Au(t, r, e) {
  const n = t.slice();
  return n[16] = r[e], n;
}
function Vu(t) {
  let r, e, n = `${/*item*/
  t[16].style.width}px`, o = `${/*item*/
  t[16].style.height}px`, i = `${/*item*/
  t[16].style.borderRadius}px`, s, a = `${/*item*/
  t[16].left}px`, l = `${/*item*/
  t[16].top}px`, u = `${/*item*/
  t[16].width}px`, c = `${/*item*/
  t[16].height}px`;
  return {
    c() {
      r = Me("div"), e = Me("div"), s = gr(), this.h();
    },
    l(f) {
      r = ze(f, "DIV", { class: !0 });
      var _ = je(r);
      e = ze(_, "DIV", { class: !0 }), je(e).forEach(k), s = mr(_), _.forEach(k), this.h();
    },
    h() {
      g(e, "class", hs["container-separator__shape"]), N(e, "width", n), N(e, "height", o), N(e, "border-radius", i), N(
        e,
        "background",
        /*item*/
        t[16].style.background
      ), N(
        e,
        "box-shadow",
        /*item*/
        t[16].style.boxShadow
      ), g(r, "class", hs["container-separator__item"]), N(r, "left", a), N(r, "top", l), N(r, "width", u), N(r, "height", c);
    },
    m(f, _) {
      K(f, r, _), jt(r, e), jt(r, s);
    },
    p(f, _) {
      _ & /*separators*/
      2 && n !== (n = `${/*item*/
      f[16].style.width}px`) && N(e, "width", n), _ & /*separators*/
      2 && o !== (o = `${/*item*/
      f[16].style.height}px`) && N(e, "height", o), _ & /*separators*/
      2 && i !== (i = `${/*item*/
      f[16].style.borderRadius}px`) && N(e, "border-radius", i), _ & /*separators*/
      2 && N(
        e,
        "background",
        /*item*/
        f[16].style.background
      ), _ & /*separators*/
      2 && N(
        e,
        "box-shadow",
        /*item*/
        f[16].style.boxShadow
      ), _ & /*separators*/
      2 && a !== (a = `${/*item*/
      f[16].left}px`) && N(r, "left", a), _ & /*separators*/
      2 && l !== (l = `${/*item*/
      f[16].top}px`) && N(r, "top", l), _ & /*separators*/
      2 && u !== (u = `${/*item*/
      f[16].width}px`) && N(r, "width", u), _ & /*separators*/
      2 && c !== (c = `${/*item*/
      f[16].height}px`) && N(r, "height", c);
    },
    d(f) {
      f && k(r);
    }
  };
}
function ag(t) {
  let r, e, n, o = dr(
    /*separators*/
    t[1]
  ), i = [];
  for (let s = 0; s < o.length; s += 1)
    i[s] = Vu(Au(t, o, s));
  return {
    c() {
      r = Me("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      this.h();
    },
    l(s) {
      r = ze(s, "DIV", { class: !0 });
      var a = je(r);
      for (let l = 0; l < i.length; l += 1)
        i[l].l(a);
      a.forEach(k), this.h();
    },
    h() {
      g(r, "class", hs["container-separator"]);
    },
    m(s, a) {
      K(s, r, a);
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(r, null);
      t[13](r), e || (n = et(
        lg,
        "resize",
        /*throttledUpdated*/
        t[2]
      ), e = !0);
    },
    p(s, [a]) {
      if (a & /*separators*/
      2) {
        o = dr(
          /*separators*/
          s[1]
        );
        let l;
        for (l = 0; l < o.length; l += 1) {
          const u = Au(s, o, l);
          i[l] ? i[l].p(u, a) : (i[l] = Vu(u), i[l].c(), i[l].m(r, null));
        }
        for (; l < i.length; l += 1)
          i[l].d(1);
        i.length = o.length;
      }
    },
    i: j,
    o: j,
    d(s) {
      s && k(r), hn(i, s), t[13](null), e = !1, n();
    }
  };
}
const ug = 10;
function Ol(t, r, e, n, o, i) {
  const s = r.margins.left, a = r.margins.right, l = r.margins.top, u = r.margins.bottom;
  i ? t.push({
    top: e.bottom + l,
    left: o.left + s,
    width: Math.max(0, o.right - o.left - s - a),
    height: n.top - e.bottom - l - u,
    style: r.style
  }) : t.push({
    top: o.top + l,
    left: e.right + s,
    width: n.left - e.right - s - a,
    height: Math.max(0, o.bottom - o.top - l - u),
    style: r.style
  });
}
function Su(t, r, e, n, o, i) {
  const s = {
    top: Math.min(...e.map((a) => a.top)),
    right: Math.max(...e.map((a) => a.right)),
    bottom: Math.max(...e.map((a) => a.bottom)),
    left: Math.min(...e.map((a) => a.left))
  };
  if (r != null && r.show_at_start) {
    let a, l;
    o === "space-around" || o === "space-evenly" ? (a = i.left - r.style.width, l = i.top - r.style.height) : (a = e[0].left - r.style.width - r.margins.left - r.margins.right, l = e[0].top - r.style.height - r.margins.top - r.margins.bottom), Ol(
      t,
      r,
      // only right and bottom is used
      { top: 0, right: a, bottom: l, left: 0 },
      e[0],
      s,
      n
    );
  }
  if (r != null && r.show_between)
    for (let a = 0; a < e.length - 1; ++a)
      Ol(t, r, e[a], e[a + 1], s, n);
  if (r != null && r.show_at_end) {
    const a = e[e.length - 1];
    let l, u;
    o === "space-around" || o === "space-evenly" ? (l = i.bottom + r.style.height, u = i.right + r.style.width) : (l = a.bottom + r.style.height + r.margins.top + r.margins.bottom, u = a.right + r.style.width + r.margins.left + r.margins.right), Ol(
      t,
      r,
      a,
      // only top and left is used
      { top: l, right: 0, bottom: 0, left: u },
      s,
      n
    );
  }
}
function cg(t, r, e) {
  let n, { orientation: o } = r, { separator: i } = r, { lineSeparator: s } = r, { contentHAlign: a } = r, { contentVAlign: l } = r, { direction: u } = r;
  const c = ig(w, ug);
  let f = [], _, p = !1, m = null, h = null;
  function y(z) {
    z.some((O) => {
      var ue;
      const $ = (ue = O.target) == null ? void 0 : ue.classList;
      return !($ != null && $.contains(hs["container-separator__shape"])) && !($ != null && $.contains(hs["container-separator"]));
    }) && c();
  }
  function w() {
    if (!n)
      return;
    const z = n.getBoundingClientRect(), O = window.getComputedStyle(n), $ = {
      top: z.top + parseFloat(O.paddingTop),
      right: z.right - parseFloat(O.paddingRight),
      bottom: z.bottom - parseFloat(O.paddingBottom),
      left: z.left + parseFloat(O.paddingLeft)
    };
    e(1, f = []);
    let ue = [...n.children].filter((se) => se !== _ && se instanceof HTMLElement && !se.classList.contains($s.outer__border) && getComputedStyle(se).display !== "none"), M = [];
    for (; ue.length; ) {
      const se = [], C = ue.shift();
      se.push(C);
      let I = C.getBoundingClientRect(), P = I.left, B = I.right, q = I.bottom;
      for (; ue.length; ) {
        let pe = ue[0], _e = pe.getBoundingClientRect();
        if (o === "vertical") {
          if (_e.top < q)
            break;
        } else if (u === "ltr" ? _e.left < B : _e.right > P)
          break;
        B = Math.max(B, _e.right), P = Math.min(P, _e.left), q = Math.max(q, _e.bottom), se.push(pe), ue.shift();
      }
      M.push(se);
    }
    const Y = [];
    M.forEach((se) => {
      const C = se.map((P) => sg(P));
      u === "rtl" && o === "horizontal" && C.reverse(), i && Su(
        f,
        i,
        C,
        o === "vertical",
        o === "vertical" ? l : a,
        $
      );
      const I = {
        top: Math.min(...C.map((P) => P.top)),
        right: Math.max(...C.map((P) => P.right)),
        bottom: Math.max(...C.map((P) => P.bottom)),
        left: Math.min(...C.map((P) => P.left))
      };
      Y.push(I);
    }), u === "rtl" && o === "vertical" && Y.reverse(), s && Su(
      f,
      s,
      Y,
      o === "horizontal",
      o === "vertical" ? a : l,
      $
    ), f.forEach((se) => {
      se.top -= z.top, se.left -= z.left;
    });
  }
  no(() => {
    e(9, p = !0);
  }), dn(() => {
    e(9, p = !1);
  });
  function D(z) {
    Mr[z ? "unshift" : "push"](() => {
      _ = z, e(0, _);
    });
  }
  return t.$$set = (z) => {
    "orientation" in z && e(3, o = z.orientation), "separator" in z && e(4, i = z.separator), "lineSeparator" in z && e(5, s = z.lineSeparator), "contentHAlign" in z && e(6, a = z.contentHAlign), "contentVAlign" in z && e(7, l = z.contentVAlign), "direction" in z && e(8, u = z.direction);
  }, t.$$.update = () => {
    t.$$.dirty & /*node*/
    1 && e(12, n = (_ == null ? void 0 : _.parentElement) || null), t.$$.dirty & /*mounted, parentElement, mutationObserver, resizeObserver*/
    7680 && (p && n || m || h) && (m && (m.disconnect(), e(10, m = null)), h && (h.disconnect(), e(11, h = null)), p && n && (typeof MutationObserver < "u" && (e(10, m = new MutationObserver(y)), m.observe(n, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    })), typeof ResizeObserver < "u" && (e(11, h = new ResizeObserver(c)), h.observe(n)))), t.$$.dirty & /*mounted, parentElement*/
    4608 && p && n && c();
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
    p,
    m,
    h,
    n,
    D
  ];
}
class fg extends Wr {
  constructor(r) {
    super(), Hr(this, r, cg, ag, Tr, {
      orientation: 3,
      separator: 4,
      lineSeparator: 5,
      contentHAlign: 6,
      contentVAlign: 7,
      direction: 8
    });
  }
}
const { Boolean: dg } = Ro;
function Du(t, r, e) {
  const n = t.slice();
  return n[63] = r[e], n;
}
function Iu(t) {
  let r, e;
  return r = new oo({
    props: {
      componentContext: (
        /*item*/
        t[63]
      ),
      layoutParams: (
        /*childLayoutParams*/
        t[8]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function Fu(t) {
  let r, e;
  return r = new fg({
    props: {
      direction: (
        /*$direction*/
        t[10]
      ),
      separator: (
        /*separator*/
        t[5]
      ),
      lineSeparator: (
        /*lineSeparator*/
        t[6]
      ),
      orientation: (
        /*orientation*/
        t[2]
      ),
      contentHAlign: (
        /*contentHAlign*/
        t[4]
      ),
      contentVAlign: (
        /*contentVAlign*/
        t[3]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function _g(t) {
  let r, e, n, o = dr(
    /*items*/
    t[9]
  ), i = [];
  for (let l = 0; l < o.length; l += 1)
    i[l] = Iu(Du(t, o, l));
  const s = (l) => oe(i[l], 1, 1, () => {
    i[l] = null;
  });
  let a = (
    /*separator*/
    (t[5] || /*lineSeparator*/
    t[6]) && Fu(t)
  );
  return {
    c() {
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      r = gr(), a && a.c(), e = Re();
    },
    l(l) {
      for (let u = 0; u < i.length; u += 1)
        i[u].l(l);
      r = mr(l), a && a.l(l), e = Re();
    },
    m(l, u) {
      for (let c = 0; c < i.length; c += 1)
        i[c] && i[c].m(l, u);
      K(l, r, u), a && a.m(l, u), K(l, e, u), n = !0;
    },
    p(l, u) {
      if (u[0] & /*items, childLayoutParams*/
      768) {
        o = dr(
          /*items*/
          l[9]
        );
        let c;
        for (c = 0; c < o.length; c += 1) {
          const f = Du(l, o, c);
          i[c] ? (i[c].p(f, u), G(i[c], 1)) : (i[c] = Iu(f), i[c].c(), G(i[c], 1), i[c].m(r.parentNode, r));
        }
        for (br(), c = o.length; c < i.length; c += 1)
          s(c);
        yr();
      }
      /*separator*/
      l[5] || /*lineSeparator*/
      l[6] ? a ? (a.p(l, u), u[0] & /*separator, lineSeparator*/
      96 && G(a, 1)) : (a = Fu(l), a.c(), G(a, 1), a.m(e.parentNode, e)) : a && (br(), oe(a, 1, 1, () => {
        a = null;
      }), yr());
    },
    i(l) {
      if (!n) {
        for (let u = 0; u < o.length; u += 1)
          G(i[u]);
        G(a), n = !0;
      }
    },
    o(l) {
      i = i.filter(dg);
      for (let u = 0; u < i.length; u += 1)
        oe(i[u]);
      oe(a), n = !1;
    },
    d(l) {
      l && (k(r), k(e)), hn(i, l), a && a.d(l);
    }
  };
}
function hg(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: bt(
        "container",
        ku,
        /*mods*/
        t[12]
      ),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      style: (
        /*style*/
        t[13]
      ),
      additionalPaddings: (
        /*additionalPaddings*/
        t[14]
      ),
      heightByAspect: !!/*aspect*/
      t[7],
      parentOf: (
        /*items*/
        t[9]
      ),
      replaceItems: (
        /*replaceItems*/
        t[31]
      ),
      $$slots: { default: [_g] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      4096 && (i.cls = bt(
        "container",
        ku,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
const pg = {
  start: "start",
  center: "center",
  end: "end",
  // 'space-*' values doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, gg = {
  start: "start",
  center: "center",
  end: "end",
  baseline: "baseline",
  // 'space-*' doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, Tu = ["rounded_rectangle", "circle"];
function mg(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, p, m, h, y, w, D, z, O, $, ue, M, Y, se, C, I, P = j, B = () => (P(), P = V(w, (wt) => e(45, I = wt)), w), q, pe = j, _e = () => (pe(), pe = V(z, (wt) => e(46, q = wt)), z), Ae, be = j, Ie = () => (be(), be = V(D, (wt) => e(47, Ae = wt)), D), x, Ye = j, Qe = () => (Ye(), Ye = V(y, (wt) => e(48, x = wt)), y), xe, we = j, Te = () => (we(), we = V(h, (wt) => e(49, xe = wt)), h), ge, ye = j, he = () => (ye(), ye = V(m, (wt) => e(50, ge = wt)), m), te, fe = j, re = () => (fe(), fe = V(f, (wt) => e(51, te = wt)), f), ve, qe = j, Xe = () => (qe(), qe = V(c, (wt) => e(52, ve = wt)), c), ee, He = j, Oe = () => (He(), He = V(p, (wt) => e(53, ee = wt)), p), lt, _t = j, it = () => (_t(), _t = V(_, (wt) => e(54, lt = wt)), _), Et, at, zt = j, ht = () => (zt(), zt = V(u, (wt) => e(55, at = wt)), u), Z, de = j, ct = () => (de(), de = V(l, (wt) => e(56, Z = wt)), l), Be, T = j, St = () => (T(), T = V(tt, (wt) => e(57, Be = wt)), tt), dt, Ft = j, Pt = () => (Ft(), Ft = V(a, (wt) => e(58, dt = wt)), a), st, Q = j, Dt = () => (Q(), Q = V(s, (wt) => e(59, st = wt)), s), Ot, nr = j, er = () => (nr(), nr = V(i, (wt) => e(60, Ot = wt)), i);
  t.$$.on_destroy.push(() => P()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => Ye()), t.$$.on_destroy.push(() => we()), t.$$.on_destroy.push(() => ye()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => qe()), t.$$.on_destroy.push(() => He()), t.$$.on_destroy.push(() => _t()), t.$$.on_destroy.push(() => zt()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => T()), t.$$.on_destroy.push(() => Ft()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => nr());
  let { componentContext: Ve } = r, { layoutParams: Ge = void 0 } = r;
  const yt = zr($r), Pe = yt.direction;
  kn(t, Pe, (wt) => e(10, Et = wt));
  let tt, Le = "vertical", Tt = "start", We = "start", vt = null, qt = null, Nt, ar = {}, Fe = 0, At = 0, ur = !1;
  function sr() {
    e(2, Le = "vertical"), e(3, Tt = "start"), e(4, We = "start"), e(7, Nt = void 0), e(32, Fe = 0), e(33, At = 0), e(34, ur = !1);
  }
  function lr(wt) {
    e(0, Ve = e(35, Er = {
      ...Ve,
      json: {
        ...Ve.json,
        items: wt.filter(Wo)
      }
    }));
  }
  let hr = [], Er, Bt = {}, kr, Ut;
  return dn(() => {
    hr.forEach((wt) => {
      wt.destroy();
    });
  }), t.$$set = (wt) => {
    "componentContext" in wt && e(0, Ve = wt.componentContext), "layoutParams" in wt && e(1, Ge = wt.layoutParams);
  }, t.$$.update = () => {
    var wt, or, le, Cr, Ar, Vt, Pr, Ur, fr, ft, It;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(44, n = Ve.origJson), t.$$.dirty[1] & /*origJson*/
    8192 && n && sr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(43, o = Ve.json.items), t.$$.dirty[0] & /*componentContext*/
    1 && er(e(29, i = typeof ((wt = Ve.json.item_builder) == null ? void 0 : wt.data) == "string" ? Ve.getDerivedFromVars((or = Ve.json.item_builder) == null ? void 0 : or.data, void 0, !0) : (le = Ve.json.item_builder) != null && le.data ? Qo(Ve.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && Dt(e(28, s = Ve.getDerivedFromVars(Ve.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && Pt(e(27, a = Ve.getDerivedFromVars(Ve.json.layout_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && ct(e(26, l = Ve.getDerivedFromVars(Ve.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && ht(e(25, u = Ve.getDerivedFromVars(Ve.json.content_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(24, c = Ve.getDerivedFromVars(Ve.json.separator))), t.$$.dirty[0] & /*componentContext*/
    1 && re(e(23, f = Ve.getDerivedFromVars(Ve.json.line_separator))), t.$$.dirty[0] & /*componentContext*/
    1 && it(e(22, _ = Ve.getDerivedFromVars(Ve.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && Oe(e(21, p = Ve.getDerivedFromVars(Ve.json.line_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(20, m = Ve.getDerivedFromVars(Ve.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(19, h = Ve.getDerivedFromVars(Ve.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && Qe(e(18, y = Ve.getDerivedFromVars(Ve.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && B(e(17, w = Ve.getDerivedFromVars(Ve.json.clip_to_bounds))), t.$$.dirty[0] & /*componentContext*/
    1 && Ie(e(16, D = Ve.getDerivedFromVars(Ve.json.max_width))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(15, z = Ve.getDerivedFromVars(Ve.json.responsive))), t.$$.dirty[0] & /*componentContext, items*/
    513 | t.$$.dirty[1] & /*$jsonItemBuilderData, jsonItems, prevContext*/
    536875024) {
      let Kt = [];
      if (Ve.json.item_builder && Array.isArray(Ot) && Array.isArray(Ve.json.item_builder.prototypes)) {
        const ce = Ve.json.item_builder;
        Kt = kl(Ot, yt, Ve, ce);
      } else
        Kt = (Array.isArray(o) && o || []).map((ce, Ct) => ({
          div: ce,
          key: ce.id || { index: Ct, data: ce }
        }));
      const tr = new Set(hr), rt = /* @__PURE__ */ new Map();
      let mt = !1;
      Er === Ve && hr.forEach((ce) => {
        ce.key && (typeof ce.key == "string" && rt.has(ce.key) ? mt || (mt = !0, Ve.logError(X(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: ce.key } }))) : rt.set(
          typeof ce.key == "string" ? ce.key : ce.key.index,
          ce
        ));
      }), e(9, hr = Kt.map((ce, Ct) => {
        let ir = !mt && rt.get(ce.id), Gt = rt.get(Ct);
        return !ir && !ce.id && typeof ce.key == "object" && typeof (Gt == null ? void 0 : Gt.key) == "object" && Qi(Gt.key.data, ce.key.data) && (ir = Gt), ir ? (tr.delete(ir), ir) : Ve.produceChildContext(ce.div, {
          path: Ct,
          variables: ce.vars,
          id: ce.id,
          key: ce.key
        });
      }));
      for (const ce of tr)
        ce.destroy();
      e(35, Er = Ve);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    513) {
      let Kt = [];
      hr.forEach((tr) => {
        Kt.push(Ve.getDerivedFromVars({
          width: tr.json.width,
          height: tr.json.height
        }));
      }), St(e(11, tt = Zi(Kt, (tr) => [...tr])));
    }
    if (t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$jsonOrientation*/
    268435456 && e(2, Le = xp(st, Le)), t.$$.dirty[1] & /*$jsonLayoutMode*/
    134217728 && e(38, O = dt === "wrap"), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*wrap*/
    128 && e(42, $ = Le !== "horizontal" && !O), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*wrap*/
    128 && e(41, ue = Le !== "vertical" && !O), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$childStore*/
    67108864 && e(40, M = Le === "overlap" && !Be.every(Zp)), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$childStore*/
    67108864 && e(39, Y = Le === "overlap" && !Be.every(Qp)), t.$$.dirty[0] & /*contentVAlign*/
    8 | t.$$.dirty[1] & /*$jsonContentVAlign*/
    33554432 && e(3, Tt = rg(Z, Tt)), t.$$.dirty[0] & /*$direction, contentHAlign*/
    1040 | t.$$.dirty[1] & /*$jsonContentHAlign*/
    16777216 && e(4, We = ng(at, Et, We)), t.$$.dirty[1] & /*$jsonItemSpacing, itemSpacing*/
    8388610 && e(32, Fe = un(lt, Fe)), t.$$.dirty[1] & /*$jsonLineSpacing, lineSpacing*/
    4194308 && e(33, At = un(ee, At)), t.$$.dirty[0] & /*orientation, separator, componentContext*/
    37 | t.$$.dirty[1] & /*$jsonSeparator, itemSpacing*/
    2097154)
      if (ve != null && ve.style && Le !== "overlap" && Cu()) {
        const Kt = go(ve.style, Tu, (vt == null ? void 0 : vt.style) || null);
        Kt ? (e(5, vt = {
          show_at_start: !!((Cr = ve.show_at_start) != null && Cr),
          show_at_end: !!((Ar = ve.show_at_end) != null && Ar),
          show_between: !!((Vt = ve.show_between) == null || Vt),
          style: Kt,
          margins: ju(ve.margins)
        }), vt.show_between && Fe && Ve.logError(X(new Error("item_spacing will be ignored due to the 'separator' property."), { level: "warn" }))) : e(5, vt = null);
      } else
        e(5, vt = null);
    if (t.$$.dirty[0] & /*orientation, lineSeparator, componentContext*/
    69 | t.$$.dirty[1] & /*$jsonLineSeparator, lineSpacing*/
    1048580)
      if (te != null && te.style && Le !== "overlap" && Cu()) {
        const Kt = go(te.style, Tu, (qt == null ? void 0 : qt.style) || null);
        Kt ? (e(6, qt = {
          show_at_start: !!((Pr = te.show_at_start) != null && Pr),
          show_at_end: !!((Ur = te.show_at_end) != null && Ur),
          show_between: !!((fr = te.show_between) == null || fr),
          style: Kt,
          margins: ju(te.margins)
        }), qt.show_between && At && Ve.logError(X(new Error("line_spacing will be ignored due to the 'line_separator' property."), { level: "warn" }))) : e(6, qt = null);
      } else
        e(6, qt = null);
    if (t.$$.dirty[0] & /*separator, lineSeparator, orientation*/
    100 && e(14, se = vt || qt ? Yp(Le, vt, qt) : null), t.$$.dirty[1] & /*$jsonAspect*/
    524288) {
      const Kt = ge == null ? void 0 : ge.ratio;
      Kt && On(Kt) ? e(7, Nt = Kt) : e(7, Nt = void 0);
    }
    if (t.$$.dirty[0] & /*orientation, contentHAlign, contentVAlign, layoutParams, aspect, childLayoutParams*/
    414 | t.$$.dirty[1] & /*wrap, $jsonWidth, $jsonHeight, supportWidthWrapContent, supportHeightWrapContent, stretchWidth, stretchHeight*/
    397184) {
      let Kt = {};
      Le === "overlap" && (Kt.overlapParent = !0), Le !== "horizontal" && (Kt.parentHAlign = O ? "start" : pg[We]), Le !== "vertical" && (Kt.parentVAlign = O ? "start" : gg[Tt]);
      const tr = (xe == null ? void 0 : xe.type) === "wrap_content" || (xe == null ? void 0 : xe.type) === "match_parent" && (Ge == null ? void 0 : Ge.parentHorizontalWrapContent), rt = !x || x.type === "wrap_content" || x.type === "match_parent" && (Ge == null ? void 0 : Ge.parentVerticalWrapContent);
      !$ && tr && (Kt.parentHorizontalWrapContent = !0), !Nt && !ue && rt && (Kt.parentVerticalWrapContent = !0), tr || (Kt.parentContainerKnownWidth = !0), rt || (Kt.parentContainerKnownHeight = !0), Kt.stretchWidth = M, Kt.stretchHeight = Y, Le === "horizontal" && (Kt.parentContainerOrientation = "horizontal"), Le === "vertical" && (Kt.parentContainerOrientation = "vertical"), O && (Kt.parentContainerWrap = !0), e(8, ar = si(Kt, ar));
    }
    if (t.$$.dirty[1] & /*$jsonMaxWidth*/
    65536 && e(34, ur = (Ae == null ? void 0 : Ae.type) === "fixed"), t.$$.dirty[0] & /*orientation, contentVAlign, contentHAlign*/
    28 | t.$$.dirty[1] & /*$jsonResponsive, wrap, $jsonClipToBounds, isFixedContainer, responsiveMobileHeight, responsiveTabletHeight*/
    49384) {
      let Kt, tr;
      if (e(36, kr = void 0), e(37, Ut = void 0), q) {
        const rt = q == null ? void 0 : q.mobile, mt = q == null ? void 0 : q.tablet;
        if (rt != null && rt.orientation && (Kt = String(rt.orientation)), mt != null && mt.orientation && (tr = String(mt.orientation)), ((ft = rt == null ? void 0 : rt.height) == null ? void 0 : ft.type) === "fixed" && rt.height.value !== void 0) {
          const ce = un(rt.height.value, 0);
          e(36, kr = ce > 0 ? ce : void 0);
        }
        if (((It = mt == null ? void 0 : mt.height) == null ? void 0 : It.type) === "fixed" && mt.height.value !== void 0) {
          const ce = un(mt.height.value, 0);
          e(37, Ut = ce > 0 ? ce : void 0);
        }
      }
      e(12, Bt = {
        orientation: Le,
        valign: Tt,
        halign: We,
        wrap: O,
        overflow: I === !1 || I === 0 ? "visible" : void 0,
        "fixed-container": ur,
        "responsive-mobile-vertical": Kt === "vertical",
        "responsive-mobile-horizontal": Kt === "horizontal",
        "responsive-tablet-vertical": tr === "vertical",
        "responsive-tablet-horizontal": tr === "horizontal",
        "responsive-mobile-has-height": kr !== void 0,
        "responsive-tablet-has-height": Ut !== void 0
      });
    }
    t.$$.dirty[0] & /*separator, lineSeparator, orientation, aspect*/
    228 | t.$$.dirty[1] & /*itemSpacing, lineSpacing, responsiveMobileHeight, responsiveTabletHeight*/
    102 && e(13, C = {
      gap: vt || qt || Fe || At ? Xp({
        orientation: Le,
        separator: vt,
        lineSeparator: qt,
        itemSpacing: Fe,
        lineSpacing: At
      }) : void 0,
      "aspect-ratio": Nt,
      "--responsive-mobile-height": kr !== void 0 ? me(kr) : void 0,
      "--responsive-tablet-height": Ut !== void 0 ? me(Ut) : void 0
    });
  }, [
    Ve,
    Ge,
    Le,
    Tt,
    We,
    vt,
    qt,
    Nt,
    ar,
    hr,
    Et,
    tt,
    Bt,
    C,
    se,
    z,
    D,
    w,
    y,
    h,
    m,
    p,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    Pe,
    lr,
    Fe,
    At,
    ur,
    Er,
    kr,
    Ut,
    O,
    Y,
    M,
    ue,
    $,
    o,
    n,
    I,
    q,
    Ae,
    x,
    xe,
    ge,
    te,
    ve,
    ee,
    lt,
    at,
    Z,
    Be,
    dt,
    st,
    Ot
  ];
}
class bg extends Wr {
  constructor(r) {
    super(), Hr(this, r, mg, hg, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const yg = "appkit-separator", wg = "appkit-separator_orientation_horizontal", vg = "appkit-separator_orientation_vertical", kg = "appkit-separator__inner", Xl = {
  separator: yg,
  separator_orientation_horizontal: wg,
  separator_orientation_vertical: vg,
  separator__inner: kg
};
function Aa(t, r) {
  return t === "vertical" || t === "horizontal" ? t : r;
}
function Mu(t) {
  let r, e;
  return {
    c() {
      r = Me("span"), this.h();
    },
    l(n) {
      r = ze(n, "SPAN", { class: !0, style: !0 }), je(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", Xl.separator__inner), g(r, "style", e = _r(
        /*style*/
        t[3]
      ));
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o & /*style*/
      8 && e !== (e = _r(
        /*style*/
        n[3]
      )) && g(r, "style", e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function jg(t) {
  let r, e = (
    /*hasContent*/
    t[4] && Mu(t)
  );
  return {
    c() {
      e && e.c(), r = Re();
    },
    l(n) {
      e && e.l(n), r = Re();
    },
    m(n, o) {
      e && e.m(n, o), K(n, r, o);
    },
    p(n, o) {
      /*hasContent*/
      n[4] ? e ? e.p(n, o) : (e = Mu(n), e.c(), e.m(r.parentNode, r)) : e && (e.d(1), e = null);
    },
    d(n) {
      n && k(r), e && e.d(n);
    }
  };
}
function Eg(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: bt(
        "separator",
        Xl,
        /*mods*/
        t[2]
      ),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: { default: [jg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, [o]) {
      const i = {};
      o & /*mods*/
      4 && (i.cls = bt(
        "separator",
        Xl,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function Cg(t, r, e) {
  let n, o, i, s, a, l, u, c, f = j, _ = () => (f(), f = V(o, (D) => e(11, c = D)), o);
  t.$$.on_destroy.push(() => f());
  let { componentContext: p } = r, { layoutParams: m = void 0 } = r, h = "horizontal", y = "rgba(0,0,0,0.08)";
  function w() {
    e(6, h = "horizontal"), e(7, y = "rgba(0,0,0,0.08)");
  }
  return t.$$set = (D) => {
    "componentContext" in D && e(0, p = D.componentContext), "layoutParams" in D && e(1, m = D.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty & /*componentContext*/
    1 && e(10, n = p.origJson), t.$$.dirty & /*origJson*/
    1024 && n && w(), t.$$.dirty & /*componentContext*/
    1 && _(e(5, o = p.getDerivedFromVars(p.json.delimiter_style))), t.$$.dirty & /*$jsonDelimiterStyle, orientation*/
    2112 && e(6, h = Aa(c == null ? void 0 : c.orientation, h)), t.$$.dirty & /*$jsonDelimiterStyle*/
    2048 && e(4, i = !(c != null && c.color && (c.color === "transparent" || c.color.length === 9 && c.color.indexOf("#00") === 0))), t.$$.dirty & /*$jsonDelimiterStyle, background*/
    2176 && e(7, y = pr(c == null ? void 0 : c.color, 1, y)), t.$$.dirty & /*orientation*/
    64 && e(9, s = h === "horizontal" ? "100%" : me(1)), t.$$.dirty & /*orientation*/
    64 && e(8, a = h === "horizontal" ? me(1) : "100%"), t.$$.dirty & /*background, width, height*/
    896 && e(3, l = { background: y, width: s, height: a }), t.$$.dirty & /*orientation*/
    64 && e(2, u = { orientation: h });
  }, [
    p,
    m,
    u,
    l,
    i,
    o,
    h,
    y,
    a,
    s,
    n,
    c
  ];
}
class Ag extends Wr {
  constructor(r) {
    super(), Hr(this, r, Cg, Eg, Tr, { componentContext: 0, layoutParams: 1 });
  }
}
const Vg = "appkit-image", Sg = "appkit-image__image", Dg = "appkit-image_error", Ig = "appkit-image_aspect", Fg = "appkit-image_loaded", Zl = {
  image: Vg,
  "image_is-width-content": "appkit-image_is-width-content",
  "image_is-height-content": "appkit-image_is-height-content",
  image__image: Sg,
  image_error: Dg,
  "image_is-rtl-mirror": "appkit-image_is-rtl-mirror",
  image_aspect: Ig,
  "image_aspect-content": "appkit-image_aspect-content",
  image_loaded: Fg,
  "divkit-image-appearance": "appkit-divkit-image-appearance",
  "image_before-appearance": "appkit-image_before-appearance"
};
function Tg(t, r, e) {
  const n = t.content_alignment_horizontal, o = t.content_alignment_vertical;
  return n && n !== "left" && n !== "center" && n !== "right" && n !== "start" && n !== "end" || o && o !== "top" && o !== "center" && o !== "bottom" ? e : zd({
    content_alignment_horizontal: n,
    content_alignment_vertical: o
  }, r);
}
function Hd(t) {
  return t.startsWith("data:") ? Jl(t) : `data:image/jpg;base64,${Jl(t)}`;
}
function Mg(t, r, e) {
  let { componentContext: n } = r;
  zr($r);
  function o() {
  }
  return no(() => {
  }), gl(o), dn(() => {
  }), t.$$set = (i) => {
    "componentContext" in i && e(0, n = i.componentContext);
  }, [n];
}
class Pn extends Wr {
  constructor(r) {
    super(), Hr(this, r, Mg, null, Tr, { componentContext: 0 });
  }
}
function Pg(t) {
  let r, e;
  return r = new Pn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function Ng(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: bt(
        "image",
        Zl,
        /*mods*/
        t[12]
      ),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      customDescription: !0,
      style: { "aspect-ratio": (
        /*aspectRatio*/
        t[4]
      ) },
      heightByAspect: (
        /*aspectRatio*/
        t[4] !== void 0
      ),
      $$slots: {
        default: [
          zg,
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
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      4096 && (i.cls = bt(
        "image",
        Zl,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function Pu(t) {
  let r, e, n, o, i, s, a, l;
  return {
    c() {
      r = Me("img"), this.h();
    },
    l(u) {
      r = ze(u, "IMG", {
        class: !0,
        src: !0,
        loading: !0,
        decoding: !0,
        style: !0,
        alt: !0,
        "aria-hidden": !0
      }), this.h();
    },
    h() {
      g(r, "class", Zl.image__image), to(r.src, e = /*state*/
      t[2] === cs ? Ql : (
        /*imageUrl*/
        t[3]
      )) || g(r, "src", e), g(r, "loading", n = /*$jsonPreloadRequired*/
      t[31] || /*highPrority*/
      t[10] ? "eager" : "lazy"), g(r, "decoding", o = /*highPrority*/
      t[10] ? "sync" : "async"), g(r, "style", i = _r({
        .../*style*/
        t[11],
        "min-width": (
          /*isWidthContent*/
          t[7] ? (
            /*widthMin*/
            t[75]
          ) : void 0
        ),
        "max-width": (
          /*isWidthContent*/
          t[7] ? (
            /*widthMax*/
            t[76]
          ) : void 0
        ),
        "min-height": (
          /*isHeightContent*/
          t[6] ? (
            /*heightMin*/
            t[77]
          ) : void 0
        ),
        "max-height": (
          /*isHeightContent*/
          t[6] ? (
            /*heightMax*/
            t[78]
          ) : void 0
        )
      })), g(
        r,
        "alt",
        /*alt*/
        t[13]
      ), g(r, "aria-hidden", s = /*alt*/
      t[13] ? null : "true");
    },
    m(u, c) {
      K(u, r, c), t[70](r), a || (l = [
        et(
          r,
          "load",
          /*onLoad*/
          t[33]
        ),
        et(
          r,
          "error",
          /*onError*/
          t[34]
        )
      ], a = !0);
    },
    p(u, c) {
      c[0] & /*state, imageUrl*/
      12 && !to(r.src, e = /*state*/
      u[2] === cs ? Ql : (
        /*imageUrl*/
        u[3]
      )) && g(r, "src", e), c[0] & /*highPrority*/
      1024 | c[1] & /*$jsonPreloadRequired*/
      1 && n !== (n = /*$jsonPreloadRequired*/
      u[31] || /*highPrority*/
      u[10] ? "eager" : "lazy") && g(r, "loading", n), c[0] & /*highPrority*/
      1024 && o !== (o = /*highPrority*/
      u[10] ? "sync" : "async") && g(r, "decoding", o), c[0] & /*style, isWidthContent, isHeightContent*/
      2240 | c[2] & /*widthMin, widthMax, heightMin, heightMax*/
      122880 && i !== (i = _r({
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
      u && k(r), t[70](null), a = !1, Gr(l);
    }
  };
}
function zg(t) {
  let r = (
    /*svgFilterId*/
    t[5]
  ), e, n = Pu(t);
  return {
    c() {
      n.c(), e = Re();
    },
    l(o) {
      n.l(o), e = Re();
    },
    m(o, i) {
      n.m(o, i), K(o, e, i);
    },
    p(o, i) {
      i[0] & /*svgFilterId*/
      32 && Tr(r, r = /*svgFilterId*/
      o[5]) ? (n.d(1), n = Pu(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && k(e), n.d(o);
    }
  };
}
function Og(t) {
  let r, e, n, o;
  const i = [Ng, Pg], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[9] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Re();
    },
    l(l) {
      e && e.l(l), n = Re();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (br(), oe(s[c], 1, 1, () => {
        s[c] = null;
      }), yr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      oe(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
const Ql = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Bg = "empty://", Lg = "rgba(0,0,0,0.08)", yi = 0, Bl = 1, cs = 2, Nu = /\.gif($|\?)/i, Rg = "data:image/gif", zu = 'A Gif image was used for the "Image" component. The animation will be played on the web platform, but it does not match the behavior of other platforms.';
function Hg(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, p, m, h, y, w, D, z, O, $, ue, M, Y, se, C, I = j, P = () => (I(), I = V(D, (mt) => e(53, C = mt)), D), B, q, pe = j, _e = () => (pe(), pe = V(w, (mt) => e(55, q = mt)), w), Ae, be = j, Ie = () => (be(), be = V(y, (mt) => e(56, Ae = mt)), y), x, Ye = j, Qe = () => (Ye(), Ye = V(h, (mt) => e(57, x = mt)), h), xe, we = j, Te = () => (we(), we = V(_, (mt) => e(58, xe = mt)), _), ge, ye = j, he = () => (ye(), ye = V(m, (mt) => e(59, ge = mt)), m), te, fe = j, re = () => (fe(), fe = V(p, (mt) => e(60, te = mt)), p), ve, qe = j, Xe = () => (qe(), qe = V(f, (mt) => e(61, ve = mt)), f), ee, He = j, Oe = () => (He(), He = V(c, (mt) => e(62, ee = mt)), c), lt, _t = j, it = () => (_t(), _t = V(u, (mt) => e(63, lt = mt)), u), Et, at = j, zt = () => (at(), at = V(l, (mt) => e(64, Et = mt)), l), ht, Z = j, de = () => (Z(), Z = V(a, (mt) => e(65, ht = mt)), a), ct, Be = j, T = () => (Be(), Be = V(s, (mt) => e(66, ct = mt)), s), St, dt = j, Ft = () => (dt(), dt = V(O, (mt) => e(67, St = mt)), O), Pt, st = j, Q = () => (st(), st = V(o, (mt) => e(68, Pt = mt)), o), Dt, Ot = j, nr = () => (Ot(), Ot = V(i, (mt) => e(69, Dt = mt)), i), er, Ve = j, Ge = () => (Ve(), Ve = V(z, (mt) => e(31, er = mt)), z);
  t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => Ye()), t.$$.on_destroy.push(() => we()), t.$$.on_destroy.push(() => ye()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => qe()), t.$$.on_destroy.push(() => He()), t.$$.on_destroy.push(() => _t()), t.$$.on_destroy.push(() => at()), t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => Be()), t.$$.on_destroy.push(() => dt()), t.$$.on_destroy.push(() => st()), t.$$.on_destroy.push(() => Ot()), t.$$.on_destroy.push(() => Ve());
  let { componentContext: yt } = r, { layoutParams: Pe = void 0 } = r;
  const tt = zr($r), Le = tt.direction;
  kn(t, Le, (mt) => e(54, B = mt));
  let Tt, We = yi, vt = !1, qt = Lg, Nt = !1, ar, Fe = "", At = "none", ur = "50% 50%", sr = !1, lr = "center", hr, Er, Bt = "source_in", kr = "", Ut = "", wt = 0, or = 0, le = 0, Cr = "", Ar = "", Vt = !1, Pr = !1, Ur = !1;
  function fr() {
    e(4, hr = void 0), e(40, sr = !1), e(38, At = "none"), e(39, ur = "50% 50%"), e(43, Bt = "source_in"), e(51, Pr = !1), e(10, Ur = !1);
  }
  function ft(mt) {
    e(2, We = yi);
  }
  function It(mt) {
    e(39, ur = Tg(mt, B, ur));
  }
  function Kt() {
    We === yi && e(2, We = Bl);
  }
  function tr() {
    We === yi && e(2, We = cs);
  }
  dn(() => {
    tt.removeSvgFilter(Er, Bt);
  });
  function rt(mt) {
    Mr[mt ? "unshift" : "push"](() => {
      Tt = mt, e(8, Tt);
    });
  }
  return t.$$set = (mt) => {
    "componentContext" in mt && e(0, yt = mt.componentContext), "layoutParams" in mt && e(1, Pe = mt.layoutParams);
  }, t.$$.update = () => {
    var mt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(52, n = yt.origJson), t.$$.dirty[1] & /*origJson*/
    2097152 && n && fr(), t.$$.dirty[0] & /*componentContext*/
    1 && Q(e(30, o = yt.getDerivedFromVars(yt.json.image_url))), t.$$.dirty[0] & /*componentContext*/
    1 && nr(e(29, i = yt.getDerivedFromVars(yt.json.gif_url))), t.$$.dirty[0] & /*componentContext*/
    1 && T(e(28, s = yt.getDerivedFromVars(yt.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(27, a = yt.getDerivedFromVars(yt.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && zt(e(26, l = yt.getDerivedFromVars(yt.json.preview))), t.$$.dirty[0] & /*componentContext*/
    1 && it(e(25, u = yt.getDerivedFromVars(yt.json.preview_url))), t.$$.dirty[0] & /*componentContext*/
    1 && Oe(e(24, c = yt.getDerivedFromVars(yt.json.placeholder_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(23, f = yt.getDerivedFromVars(yt.json.scale))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(22, _ = yt.getDerivedFromVars({
      content_alignment_horizontal: yt.json.content_alignment_horizontal,
      content_alignment_vertical: yt.json.content_alignment_vertical
    }))), t.$$.dirty[0] & /*componentContext*/
    1 && re(e(21, p = yt.getDerivedFromVars(yt.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(20, m = yt.getDerivedFromVars(yt.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && Qe(e(19, h = yt.getDerivedFromVars(yt.json.tint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ie(e(18, y = yt.getDerivedFromVars(yt.json.tint_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(17, w = yt.getDerivedFromVars(yt.json.appearance_animation))), t.$$.dirty[0] & /*componentContext*/
    1 && P(e(16, D = yt.getDerivedFromVars(yt.json.filters))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(15, z = yt.getDerivedFromVars(yt.json.preload_required))), t.$$.dirty[0] & /*componentContext*/
    1 && Ft(e(14, O = yt.getDerivedFromVars(yt.json.high_priority_preview_show))), t.$$.dirty[0] & /*componentContext, imageUrl*/
    9 | t.$$.dirty[1] & /*isEmpty*/
    16 | t.$$.dirty[2] & /*$jsonGifUrl, $jsonImageUrl*/
    192) {
      const ce = yt.json.type === "gif";
      let Ct = ce ? Dt : Pt;
      e(35, vt = Ct === Bg), vt && (Ct = Ql), e(3, ar = Ct), !ce && ar && Nu.test(ar) && yt.logError(X(new Error(zu), { level: "warn" }));
    }
    if (t.$$.dirty[0] & /*imageUrl*/
    8 && ft(), t.$$.dirty[1] & /*highPriorityPreview*/
    1048576 | t.$$.dirty[2] & /*$jsonHighPriorityPreviewShow*/
    32 && e(51, Pr = en(St, Pr)), t.$$.dirty[0] & /*imageUrl, componentContext*/
    9 && (ar ? e(9, Nt = !1) : (e(9, Nt = !0), yt.logError(X(new Error(`Missing "${yt.json.type === "gif" ? "gif_url" : "image_url"}" for "${yt.json.type}"`))))), t.$$.dirty[2] & /*$jsonWidth*/
    16 && e(7, $ = (ct == null ? void 0 : ct.type) === "wrap_content"), t.$$.dirty[2] & /*$jsonHeight*/
    8 && e(6, ue = (ht == null ? void 0 : ht.type) === "wrap_content"), t.$$.dirty[0] & /*componentContext, state*/
    5 | t.$$.dirty[1] & /*isEmpty, highPriorityPreview*/
    1048592 | t.$$.dirty[2] & /*$jsonPreview, $jsonPreviewUrl*/
    6) {
      const ce = yt.json.type === "gif", Ct = Et, ir = lt;
      (We === yi || We === cs || vt) && (Ct || ir) ? (e(37, Fe = `url("${ir || Hd(Ct || "")}")`), e(10, Ur = Pr)) : (e(37, Fe = ""), e(10, Ur = !1)), !ce && (ir && Nu.test(ir) || Ct && Ct.startsWith(Rg)) && yt.logError(X(new Error(zu), { level: "warn" }));
    }
    if (t.$$.dirty[0] & /*state*/
    4 | t.$$.dirty[1] & /*isEmpty, placeholderColor*/
    48 | t.$$.dirty[2] & /*$jsonPlaceholderColor*/
    1 && (We === yi || We === cs || vt ? e(36, qt = pr(ee, 1, qt)) : e(36, qt = "")), t.$$.dirty[1] & /*$jsonScale, scale*/
    1073741952 && e(38, At = Nd(ve) || At), t.$$.dirty[1] & /*$jsonPosition*/
    134217728 && It(xe), t.$$.dirty[1] & /*$jsonA11y*/
    536870912 && e(13, M = (te == null ? void 0 : te.description) || ""), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAspect, aspectContent, $jsonPosition*/
    402653696) {
      e(41, lr = "center");
      const ce = ge == null ? void 0 : ge.ratio;
      ce && On(ce) ? (e(4, hr = ce), e(40, sr = ((mt = yt.json.width) == null ? void 0 : mt.type) === "wrap_content"), sr && (xe.content_alignment_vertical === "top" ? e(41, lr = "top") : xe.content_alignment_vertical === "bottom" && e(41, lr = "bottom"))) : e(4, hr = void 0);
    }
    if (t.$$.dirty[1] & /*$jsonTintColor, $jsonTintMode, tintMode, tintColor*/
    100669440) {
      const ce = x, Ct = ce ? pr(ce) : void 0, ir = Ld(Ae, Bt);
      (Ct !== Er || ir !== Bt) && (tt.removeSvgFilter(Er, Bt), e(5, kr = Ct ? tt.addSvgFilter(Ct, ir) : ""), e(42, Er = Ct), e(43, Bt = ir));
    }
    if (t.$$.dirty[1] & /*$jsonAppearanceAnimation*/
    16777216 && q && q.type === "fade") {
      const ce = q;
      e(44, Ut = Od(ce.interpolator, "ease_in_out").replace(/_/g, "-")), e(47, le = un(ce.duration, 300)), e(46, or = un(ce.start_delay, 0)), e(45, wt = un(ce.alpha, 0));
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonFilters, $direction*/
    12582912) {
      let ce = "", Ct = "";
      Array.isArray(C) && C.length && (ce = Bd(C, yt.logError)), ce && (Ct = "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)"), e(48, Cr = ce), e(49, Ar = Ct), e(50, Vt = B === "rtl" && Array.isArray(C) && C.some((ir) => ir.type === "rtl_mirror"));
    }
    t.$$.dirty[0] & /*aspectRatio, isWidthContent, isHeightContent, state*/
    212 | t.$$.dirty[1] & /*aspectContent, aspectContentVAlign, animationInterpolator, isRTLMirror*/
    534016 && e(12, Y = {
      aspect: hr !== void 0,
      "aspect-content": sr,
      "aspect-valign": lr !== "center" ? lr : void 0,
      "is-width-content": $,
      "is-height-content": ue,
      loaded: We === Bl,
      "before-appearance": !!Ut && We === yi,
      "is-rtl-mirror": Vt
    }), t.$$.dirty[0] & /*aspectRatio, state, svgFilterId*/
    52 | t.$$.dirty[1] & /*backgroundImage, placeholderColor, scale, filterClipPath, position, filter, animationInterpolator, animationFadeStart, animationDelay, animationDuration*/
    516576 && e(11, se = {
      // Image preview shows, if loading of original image is failed
      "background-image": Fe,
      "background-color": Fe ? void 0 : qt,
      "background-size": Dh(At),
      "clip-path": Ar || void 0,
      "object-fit": At,
      "object-position": ur,
      "aspect-ratio": hr,
      filter: [
        We === Bl && kr ? `url(#${kr})` : "",
        Cr
      ].filter(Boolean).join(" "),
      "--divkit-appearance-interpolator": Ut || void 0,
      "--divkit-appearance-fade-start": Ut ? wt : void 0,
      "--divkit-appearance-delay": Ut ? `${or}ms` : void 0,
      "--divkit-appearance-duration": Ut ? `${le}ms` : void 0
    });
  }, [
    yt,
    Pe,
    We,
    ar,
    hr,
    kr,
    ue,
    $,
    Tt,
    Nt,
    Ur,
    se,
    Y,
    M,
    O,
    z,
    D,
    w,
    y,
    h,
    m,
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
    er,
    Le,
    Kt,
    tr,
    vt,
    qt,
    Fe,
    At,
    ur,
    sr,
    lr,
    Er,
    Bt,
    Ut,
    wt,
    or,
    le,
    Cr,
    Ar,
    Vt,
    Pr,
    n,
    C,
    B,
    q,
    Ae,
    x,
    xe,
    ge,
    te,
    ve,
    ee,
    lt,
    Et,
    ht,
    ct,
    St,
    Pt,
    Dt,
    rt
  ];
}
class Ou extends Wr {
  constructor(r) {
    super(), Hr(this, r, Hg, Og, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Wg = "appkit-grid", Ug = "appkit-grid_halign_start", Gg = "appkit-grid_halign_center", Jg = "appkit-grid_halign_end", qg = "appkit-grid_valign_start", Kg = "appkit-grid_valign_center", Yg = "appkit-grid_valign_end", Bu = {
  grid: Wg,
  grid_halign_start: Ug,
  grid_halign_center: Gg,
  grid_halign_end: Jg,
  grid_valign_start: qg,
  grid_valign_center: Kg,
  grid_valign_end: Yg
};
function Lu(t) {
  return t > 0 && t < 1;
}
function Ru(t) {
  return String(Math.ceil(t * 1e3) / 1e3);
}
function Hu(t, r, e, n) {
  if (t.some(Lu)) {
    const l = Math.max(...t.filter(Lu).map((u) => 1 / u));
    t = t.map((u) => u * l);
  }
  const o = t.every(Boolean);
  let i = 0, s = 0;
  const a = [];
  if (o) {
    s = t.reduce((l, u) => l + u, 0);
    for (let l = 0; l < n; ++l) {
      if (!r[l])
        continue;
      const u = r[l] / t[l] * s;
      u > i && (i = u);
    }
  }
  for (let l = 0; l < n; ++l)
    i && !e[l] ? a[l] = `minmax(${me(i * t[l] / s)},${Ru(t[l])}fr)` : o || !e[l] && t[l] ? a[l] = `${Ru(t[l])}fr` : a[l] = "auto";
  return a.join(" ");
}
function Wu(t, r, e) {
  const n = t.slice();
  return n[33] = r[e], n;
}
function Xg(t) {
  let r, e;
  return r = new Pn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function Zg(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: bt(
        "grid",
        Bu,
        /*mods*/
        t[7]
      ),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      style: (
        /*style*/
        t[6]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      parentOf: (
        /*items*/
        t[2]
      ),
      replaceItems: (
        /*replaceItems*/
        t[12]
      ),
      $$slots: { default: [Qg] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      128 && (i.cls = bt(
        "grid",
        Bu,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function Uu(t) {
  let r, e;
  return r = new oo({
    props: {
      componentContext: (
        /*item*/
        t[33].componentContext
      ),
      layoutParams: (
        /*item*/
        t[33].layoutParams
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function Qg(t) {
  let r, e, n = dr(
    /*resultItems*/
    t[5]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Uu(Wu(t, n, s));
  const i = (s) => oe(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = Re();
    },
    l(s) {
      for (let a = 0; a < o.length; a += 1)
        o[a].l(s);
      r = Re();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      K(s, r, a), e = !0;
    },
    p(s, a) {
      if (a[0] & /*resultItems*/
      32) {
        n = dr(
          /*resultItems*/
          s[5]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const u = Wu(s, n, l);
          o[l] ? (o[l].p(u, a), G(o[l], 1)) : (o[l] = Uu(u), o[l].c(), G(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (br(), l = n.length; l < o.length; l += 1)
          i(l);
        yr();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          G(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        oe(o[a]);
      e = !1;
    },
    d(s) {
      s && k(r), hn(o, s);
    }
  };
}
function xg(t) {
  let r, e, n, o;
  const i = [Zg, Xg], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Re();
    },
    l(l) {
      e && e.l(l), n = Re();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (br(), oe(s[c], 1, 1, () => {
        s[c] = null;
      }), yr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      oe(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function $g(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _ = j, p = () => (_(), _ = V(a, (he) => e(27, f = he)), a), m, h = j, y = () => (h(), h = V(s, (he) => e(28, m = he)), s), w, D = j, z = () => (D(), D = V(B, (he) => e(29, w = he)), B), O, $ = j, ue = () => ($(), $ = V(i, (he) => e(30, O = he)), i);
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => $());
  let { componentContext: M } = r, { layoutParams: Y = void 0 } = r;
  const C = zr($r).direction;
  kn(t, C, (he) => e(26, c = he));
  let I = !1, P = 0, B, q, pe = [], _e = [], Ae = [], be = [], Ie = [], x = [], Ye = 0, Qe = "start", xe = "start", we = [], Te;
  function ge() {
    e(3, I = !1), e(13, P = 0), e(21, Qe = "start"), e(22, xe = "start");
  }
  function ye(he) {
    e(0, M = e(23, Te = {
      ...M,
      json: {
        ...M.json,
        items: he.filter(Wo)
      }
    }));
  }
  return dn(() => {
    we.forEach((he) => {
      he.destroy();
    });
  }), t.$$set = (he) => {
    "componentContext" in he && e(0, M = he.componentContext), "layoutParams" in he && e(1, Y = he.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(25, n = M.origJson), t.$$.dirty[0] & /*origJson*/
    33554432 && n && ge(), t.$$.dirty[0] & /*componentContext*/
    1 && e(24, o = Array.isArray(M.json.items) && M.json.items || []), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(10, i = M.getDerivedFromVars(M.json.column_count))), t.$$.dirty[0] & /*componentContext*/
    1 && y(e(9, s = M.getDerivedFromVars(M.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && p(e(8, a = M.getDerivedFromVars(M.json.content_alignment_horizontal))), t.$$.dirty[0] & /*$jsonColumnCount, columnCount, componentContext*/
    1073750017 && (e(13, P = Jn(O, P)), P < 1 ? (e(3, I = !0), M.logError(X(new Error("Incorrect column_count for grid")))) : e(3, I = !1)), t.$$.dirty[0] & /*items, prevContext, componentContext, jsonItems*/
    25165829) {
      const he = new Set(we), te = /* @__PURE__ */ new Map();
      Te === M && we.forEach((fe) => {
        te.set(fe.json, fe);
      }), e(2, we = o.map((fe, re) => {
        const ve = te.get(fe);
        return ve ? (he.delete(ve), ve) : M.produceChildContext(fe, { path: re });
      }));
      for (const fe of he)
        fe.destroy();
      e(23, Te = M);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    5) {
      let he = [];
      we.forEach((te) => {
        he.push(M.getDerivedFromVars({
          rowSpan: te.json.row_span,
          columnSpan: te.json.column_span,
          width: te.json.width,
          height: te.json.height
        }));
      }), z(e(4, B = Zi(he, (te) => [...te])));
    }
    if (t.$$.dirty[0] & /*items, $childStore, columnCount, columnsWeight, rowsWeight, columnsMinWidth, rowsMinHeight*/
    537124868) {
      const he = {};
      let te = 0, fe = 0;
      e(14, pe = []), e(15, _e = []), e(16, Ae = []), e(17, be = []), e(18, Ie = []), e(19, x = []);
      let re = 0;
      e(5, q = we.map((ve, qe) => {
        var at, zt, ht, Z;
        const Xe = w[qe], ee = Math.min(P, Number(Xe.columnSpan) || 1), He = Number(Xe.rowSpan) || 1, Oe = ((at = Xe.width) == null ? void 0 : at.type) === "match_parent" ? Number(Xe.width.weight || 1) / ee : 0, lt = ((zt = Xe.height) == null ? void 0 : zt.type) === "match_parent" ? Number(Xe.height.weight || 1) / He : 0, _t = ((ht = Xe.width) == null ? void 0 : ht.type) === "fixed" && Xe.width.value ? Number(Xe.width.value) / ee : 0, it = ((Z = Xe.height) == null ? void 0 : Z.type) === "fixed" && Xe.height.value ? Number(Xe.height.value) / He : 0;
        for (; ; ) {
          let de = !0;
          e: for (let ct = te; ct < te + ee; ++ct)
            for (let Be = fe; Be < fe + He; ++Be)
              if (he[ct + "_" + Be]) {
                de = !1;
                break e;
              }
          if (de)
            break;
          ++te, te > P - ee && (te = 0, ++fe);
        }
        const Et = { x: te, y: fe, colSpan: ee, rowSpan: He };
        for (let de = te; de < te + ee; ++de)
          for (let ct = fe; ct < fe + He; ++ct)
            he[de + "_" + ct] = !0, (!pe[de] || pe[de] < Oe) && e(14, pe[de] = Oe, pe), (!_e[ct] || _e[ct] < lt) && e(15, _e[ct] = lt, _e), ee === 1 && (!Ae[de] || Ae[de] < _t) && e(16, Ae[de] = _t, Ae), He === 1 && (!be[ct] || be[ct] < it) && e(17, be[ct] = it, be), ee === 1 && _t && e(18, Ie[de] = _t, Ie), He === 1 && it && e(19, x[de] = it, x);
        return re = Math.max(re, fe + He), {
          componentContext: ve,
          layoutParams: { gridArea: Et }
        };
      })), e(20, Ye = Math.max(fe + 1, re));
    }
    t.$$.dirty[0] & /*$jsonContentVAlign, contentVAlign*/
    270532608 && e(21, Qe = vl(m, Qe)), t.$$.dirty[0] & /*$jsonContentHAlign, $direction, contentHAlign*/
    205520896 && e(22, xe = wl(f, c, xe)), t.$$.dirty[0] & /*contentVAlign, contentHAlign*/
    6291456 && e(7, l = {
      valign: Qe,
      halign: xe
    }), t.$$.dirty[0] & /*columnsWeight, columnsMinWidth, columnsWidth, columnCount, rowsWeight, rowsMinHeight, rowsHeight, rowCount*/
    2088960 && e(6, u = {
      "grid-template-columns": Hu(pe, Ae, Ie, P),
      "grid-template-rows": Hu(_e, be, x, Ye)
    });
  }, [
    M,
    Y,
    we,
    I,
    B,
    q,
    u,
    l,
    a,
    s,
    i,
    C,
    ye,
    P,
    pe,
    _e,
    Ae,
    be,
    Ie,
    x,
    Ye,
    Qe,
    xe,
    Te,
    o,
    n,
    c,
    f,
    m,
    w,
    O
  ];
}
class em extends Wr {
  constructor(r) {
    super(), Hr(this, r, $g, xg, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const tm = "appkit-outer_width_content", rm = "appkit-outer_height_content", nm = "appkit-gallery", om = "appkit-gallery__scroller", im = "appkit-gallery_scrollbar_none", sm = "appkit-gallery_orientation_horizontal", lm = "appkit-gallery_orientation_vertical", am = "appkit-gallery__items", um = "appkit-gallery__arrow", cm = "appkit-gallery__gap", bo = {
  outer_width_content: tm,
  outer_height_content: rm,
  gallery: nm,
  gallery__scroller: om,
  gallery_scrollbar_none: im,
  gallery_orientation_horizontal: sm,
  gallery_orientation_vertical: lm,
  "gallery_scroll-snap": "appkit-gallery_scroll-snap",
  "gallery__items-grid": "appkit-gallery__items-grid",
  gallery__items: am,
  gallery__arrow: um,
  "gallery__arrow-icon-path": "appkit-gallery__arrow-icon-path",
  gallery__gap: cm
}, fm = "appkit-arrow", dm = "appkit-arrow__icon", _m = "appkit-arrow_left", hm = "appkit-arrow_right", vo = {
  arrow: fm,
  arrow__icon: dm,
  arrow_left: _m,
  arrow_right: hm
};
function pm(t, r) {
  return t === "start" || t === "center" || t === "end" ? t : r;
}
function gm(t) {
  const r = [];
  let e = t[0], n = 1;
  for (let o = 1; o <= t.length; o++)
    t[o] !== e ? (r.push(n > 1 ? `repeat(${n}, ${e})` : e), e = t[o], n = 1) : n++;
  return r.join(" ");
}
function Po(t, r) {
  let e = t % r;
  return e < 0 && (e += r), e;
}
const { Boolean: Wd, window: mm } = Ro;
function Gu(t, r, e) {
  const n = t.slice();
  return n[86] = r[e], n[87] = r, n[88] = e, n;
}
function Ju(t, r, e) {
  const n = t.slice();
  return n[89] = r[e], n;
}
function qu(t) {
  let r;
  return {
    c() {
      r = Me("div"), this.h();
    },
    l(e) {
      r = ze(e, "DIV", { class: !0 }), je(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", bo.gallery__gap), N(
        r,
        "width",
        /*orientation*/
        t[4] === "horizontal" ? (
          /*gridGap*/
          t[12]
        ) : void 0
      ), N(
        r,
        "height",
        /*orientation*/
        t[4] !== "horizontal" ? (
          /*gridGap*/
          t[12]
        ) : void 0
      );
    },
    m(e, n) {
      K(e, r, n);
    },
    p(e, n) {
      n[0] & /*orientation, gridGap*/
      4112 && N(
        r,
        "width",
        /*orientation*/
        e[4] === "horizontal" ? (
          /*gridGap*/
          e[12]
        ) : void 0
      ), n[0] & /*orientation, gridGap*/
      4112 && N(
        r,
        "height",
        /*orientation*/
        e[4] !== "horizontal" ? (
          /*gridGap*/
          e[12]
        ) : void 0
      );
    },
    d(e) {
      e && k(r);
    }
  };
}
function Ku(t) {
  let r, e, n, o = (
    /*item*/
    t[89].hasGapBefore && qu(t)
  );
  return e = new oo({
    props: {
      componentContext: (
        /*item*/
        t[89].componentContext
      ),
      layoutParams: (
        /*childLayoutParams*/
        t[6]
      )
    }
  }), {
    c() {
      o && o.c(), r = gr(), Jt(e.$$.fragment);
    },
    l(i) {
      o && o.l(i), r = mr(i), Xt(e.$$.fragment, i);
    },
    m(i, s) {
      o && o.m(i, s), K(i, r, s), Ht(e, i, s), n = !0;
    },
    p(i, s) {
      /*item*/
      i[89].hasGapBefore ? o ? o.p(i, s) : (o = qu(i), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
      const a = {};
      s[0] & /*itemsGrid*/
      262144 && (a.componentContext = /*item*/
      i[89].componentContext), s[0] & /*childLayoutParams*/
      64 && (a.layoutParams = /*childLayoutParams*/
      i[6]), e.$set(a);
    },
    i(i) {
      n || (G(e.$$.fragment, i), n = !0);
    },
    o(i) {
      oe(e.$$.fragment, i), n = !1;
    },
    d(i) {
      i && k(r), o && o.d(i), Wt(e, i);
    }
  };
}
function Yu(t) {
  let r, e, n, o, i, s, a = (
    /*rowIndex*/
    t[88]
  ), l, u = dr(
    /*itemsRow*/
    t[86]
  ), c = [];
  for (let m = 0; m < u.length; m += 1)
    c[m] = Ku(Ju(t, u, m));
  const f = (m) => oe(c[m], 1, 1, () => {
    c[m] = null;
  }), _ = () => (
    /*div1_binding*/
    t[71](r, a)
  ), p = () => (
    /*div1_binding*/
    t[71](null, a)
  );
  return {
    c() {
      r = Me("div");
      for (let m = 0; m < c.length; m += 1)
        c[m].c();
      e = gr(), n = Me("div"), i = gr(), this.h();
    },
    l(m) {
      r = ze(m, "DIV", { class: !0, style: !0 });
      var h = je(r);
      for (let y = 0; y < c.length; y += 1)
        c[y].l(h);
      e = mr(h), n = ze(h, "DIV", { class: !0, style: !0 }), je(n).forEach(k), i = mr(h), h.forEach(k), this.h();
    },
    h() {
      g(n, "class", bo.gallery__gap), g(n, "style", o = _r(
        /*lastPaddingSize*/
        t[13]
      )), g(r, "class", bo.gallery__items), g(r, "style", s = _r(
        /*columnStyle*/
        t[16]
      ));
    },
    m(m, h) {
      K(m, r, h);
      for (let y = 0; y < c.length; y += 1)
        c[y] && c[y].m(r, null);
      jt(r, e), jt(r, n), jt(r, i), _(), l = !0;
    },
    p(m, h) {
      if (t = m, h[0] & /*itemsGrid, childLayoutParams, orientation, gridGap*/
      266320) {
        u = dr(
          /*itemsRow*/
          t[86]
        );
        let y;
        for (y = 0; y < u.length; y += 1) {
          const w = Ju(t, u, y);
          c[y] ? (c[y].p(w, h), G(c[y], 1)) : (c[y] = Ku(w), c[y].c(), G(c[y], 1), c[y].m(r, e));
        }
        for (br(), y = u.length; y < c.length; y += 1)
          f(y);
        yr();
      }
      (!l || h[0] & /*lastPaddingSize*/
      8192 && o !== (o = _r(
        /*lastPaddingSize*/
        t[13]
      ))) && g(n, "style", o), (!l || h[0] & /*columnStyle*/
      65536 && s !== (s = _r(
        /*columnStyle*/
        t[16]
      ))) && g(r, "style", s), a !== /*rowIndex*/
      t[88] && (p(), a = /*rowIndex*/
      t[88], _());
    },
    i(m) {
      if (!l) {
        for (let h = 0; h < u.length; h += 1)
          G(c[h]);
        l = !0;
      }
    },
    o(m) {
      c = c.filter(Wd);
      for (let h = 0; h < c.length; h += 1)
        oe(c[h]);
      l = !1;
    },
    d(m) {
      m && k(r), hn(c, m), p();
    }
  };
}
function Xu(t) {
  let r, e, n = (
    /*hasScrollLeft*/
    t[10] && /*shouldCheckArrows*/
    t[8] && Zu(t)
  ), o = (
    /*hasScrollRight*/
    t[11] && /*shouldCheckArrows*/
    t[8] && Qu(t)
  );
  return {
    c() {
      n && n.c(), r = gr(), o && o.c(), e = Re();
    },
    l(i) {
      n && n.l(i), r = mr(i), o && o.l(i), e = Re();
    },
    m(i, s) {
      n && n.m(i, s), K(i, r, s), o && o.m(i, s), K(i, e, s);
    },
    p(i, s) {
      /*hasScrollLeft*/
      i[10] && /*shouldCheckArrows*/
      i[8] ? n ? n.p(i, s) : (n = Zu(i), n.c(), n.m(r.parentNode, r)) : n && (n.d(1), n = null), /*hasScrollRight*/
      i[11] && /*shouldCheckArrows*/
      i[8] ? o ? o.p(i, s) : (o = Qu(i), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null);
    },
    d(i) {
      i && (k(r), k(e)), n && n.d(i), o && o.d(i);
    }
  };
}
function Zu(t) {
  let r, e, n, o = !/*leftClass*/
  t[32] && bm();
  return {
    c() {
      r = Me("div"), o && o.c(), this.h();
    },
    l(i) {
      r = ze(i, "DIV", { class: !0 });
      var s = je(r);
      o && o.l(s), s.forEach(k), this.h();
    },
    h() {
      g(
        r,
        "class",
        /*leftClass*/
        t[32] || `${bo.gallery__arrow} ${vo.arrow} ${vo.arrow_left}`
      );
    },
    m(i, s) {
      K(i, r, s), o && o.m(r, null), e || (n = et(
        r,
        "click",
        /*click_handler*/
        t[74]
      ), e = !0);
    },
    p: j,
    d(i) {
      i && k(r), o && o.d(), e = !1, n();
    }
  };
}
function bm(t) {
  let r, e;
  return {
    c() {
      r = tn("svg"), e = tn("path"), this.h();
    },
    l(n) {
      r = an(n, "svg", {
        class: !0,
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0
      });
      var o = je(r);
      e = an(o, "path", { class: !0, d: !0 }), je(e).forEach(k), o.forEach(k), this.h();
    },
    h() {
      g(e, "class", bo["gallery__arrow-icon-path"]), g(e, "d", "m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"), g(r, "class", vo.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      K(n, r, o), jt(r, e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function Qu(t) {
  let r, e, n, o = !/*rightClass*/
  t[33] && ym();
  return {
    c() {
      r = Me("div"), o && o.c(), this.h();
    },
    l(i) {
      r = ze(i, "DIV", { class: !0 });
      var s = je(r);
      o && o.l(s), s.forEach(k), this.h();
    },
    h() {
      g(
        r,
        "class",
        /*rightClass*/
        t[33] || `${bo.gallery__arrow} ${vo.arrow} ${vo.arrow_right}`
      );
    },
    m(i, s) {
      K(i, r, s), o && o.m(r, null), e || (n = et(
        r,
        "click",
        /*click_handler_1*/
        t[75]
      ), e = !0);
    },
    p: j,
    d(i) {
      i && k(r), o && o.d(), e = !1, n();
    }
  };
}
function ym(t) {
  let r, e;
  return {
    c() {
      r = tn("svg"), e = tn("path"), this.h();
    },
    l(n) {
      r = an(n, "svg", {
        class: !0,
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0
      });
      var o = je(r);
      e = an(o, "path", { class: !0, d: !0 }), je(e).forEach(k), o.forEach(k), this.h();
    },
    h() {
      g(e, "class", bo["gallery__arrow-icon-path"]), g(e, "d", "M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"), g(r, "class", vo.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      K(n, r, o), jt(r, e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function wm(t) {
  let r, e, n, o, i, s, a, l, u, c, f = dr(
    /*itemsGrid*/
    t[18]
  ), _ = [];
  for (let h = 0; h < f.length; h += 1)
    _[h] = Yu(Gu(t, f, h));
  const p = (h) => oe(_[h], 1, 1, () => {
    _[h] = null;
  });
  let m = (
    /*orientation*/
    t[4] === "horizontal" && Xu(t)
  );
  return {
    c() {
      r = Me("div"), e = Me("div");
      for (let h = 0; h < _.length; h += 1)
        _[h].c();
      s = gr(), m && m.c(), a = Re(), this.h();
    },
    l(h) {
      r = ze(h, "DIV", { class: !0, style: !0 });
      var y = je(r);
      e = ze(y, "DIV", { class: !0, style: !0 });
      var w = je(e);
      for (let D = 0; D < _.length; D += 1)
        _[D].l(w);
      w.forEach(k), y.forEach(k), s = mr(h), m && m.l(h), a = Re(), this.h();
    },
    h() {
      g(e, "class", bo["gallery__items-grid"]), g(e, "style", n = _r(
        /*gridStyle*/
        t[17]
      )), g(r, "class", o = bo.gallery__scroller + " " + /*$jsonRestrictParentScroll*/
      (t[30] ? Fr["root_restrict-scroll"] : "")), g(r, "style", i = _r(
        /*scrollerStyle*/
        t[5]
      ));
    },
    m(h, y) {
      K(h, r, y), jt(r, e);
      for (let w = 0; w < _.length; w += 1)
        _[w] && _[w].m(e, null);
      t[72](e), t[73](r), K(h, s, y), m && m.m(h, y), K(h, a, y), l = !0, u || (c = et(r, "scroll", function() {
        Rr(
          /*shouldCheckArrows*/
          t[8] ? (
            /*updateArrowsVisibility*/
            t[36]
          ) : null
        ) && /*shouldCheckArrows*/
        (t[8] ? (
          /*updateArrowsVisibility*/
          t[36]
        ) : null).apply(this, arguments);
      }), u = !0);
    },
    p(h, y) {
      if (t = h, y[0] & /*columnStyle, galleryItemsWrappers, lastPaddingSize, itemsGrid, childLayoutParams, orientation, gridGap*/
      340560) {
        f = dr(
          /*itemsGrid*/
          t[18]
        );
        let w;
        for (w = 0; w < f.length; w += 1) {
          const D = Gu(t, f, w);
          _[w] ? (_[w].p(D, y), G(_[w], 1)) : (_[w] = Yu(D), _[w].c(), G(_[w], 1), _[w].m(e, null));
        }
        for (br(), w = f.length; w < _.length; w += 1)
          p(w);
        yr();
      }
      (!l || y[0] & /*gridStyle*/
      131072 && n !== (n = _r(
        /*gridStyle*/
        t[17]
      ))) && g(e, "style", n), (!l || y[0] & /*$jsonRestrictParentScroll*/
      1073741824 && o !== (o = bo.gallery__scroller + " " + /*$jsonRestrictParentScroll*/
      (t[30] ? Fr["root_restrict-scroll"] : ""))) && g(r, "class", o), (!l || y[0] & /*scrollerStyle*/
      32 && i !== (i = _r(
        /*scrollerStyle*/
        t[5]
      ))) && g(r, "style", i), /*orientation*/
      t[4] === "horizontal" ? m ? m.p(t, y) : (m = Xu(t), m.c(), m.m(a.parentNode, a)) : m && (m.d(1), m = null);
    },
    i(h) {
      if (!l) {
        for (let y = 0; y < f.length; y += 1)
          G(_[y]);
        l = !0;
      }
    },
    o(h) {
      _ = _.filter(Wd);
      for (let y = 0; y < _.length; y += 1)
        oe(_[y]);
      l = !1;
    },
    d(h) {
      h && (k(r), k(s), k(a)), hn(_, h), t[72](null), t[73](null), m && m.d(h), u = !1, c();
    }
  };
}
function vm(t) {
  let r, e, n, o;
  return r = new vn({
    props: {
      cls: bt(
        "gallery",
        bo,
        /*mods*/
        t[15]
      ),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      customPaddings: !0,
      customActions: "gallery",
      parentOf: (
        /*items*/
        t[7]
      ),
      replaceItems: (
        /*replaceItems*/
        t[34]
      ),
      $$slots: { default: [wm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(i) {
      Xt(r.$$.fragment, i);
    },
    m(i, s) {
      Ht(r, i, s), e = !0, n || (o = et(mm, "resize", function() {
        Rr(
          /*shouldCheckArrows*/
          t[8] ? (
            /*updateArrowsVisibilityDebounced*/
            t[37]
          ) : null
        ) && /*shouldCheckArrows*/
        (t[8] ? (
          /*updateArrowsVisibilityDebounced*/
          t[37]
        ) : null).apply(this, arguments);
      }), n = !0);
    },
    p(i, s) {
      t = i;
      const a = {};
      s[0] & /*mods*/
      32768 && (a.cls = bt(
        "gallery",
        bo,
        /*mods*/
        t[15]
      )), s[0] & /*componentContext*/
      1 && (a.componentContext = /*componentContext*/
      t[0]), s[0] & /*layoutParams*/
      2 && (a.layoutParams = /*layoutParams*/
      t[1]), s[0] & /*items*/
      128 && (a.parentOf = /*items*/
      t[7]), s[0] & /*hasScrollRight, shouldCheckArrows, hasScrollLeft, orientation, $jsonRestrictParentScroll, scrollerStyle, scroller, gridStyle, itemsGridElem, itemsGrid, columnStyle, galleryItemsWrappers, lastPaddingSize, childLayoutParams, gridGap*/
      1074216828 | s[2] & /*$$scope*/
      1073741824 && (a.$$scope = { dirty: s, ctx: t }), r.$set(a);
    },
    i(i) {
      e || (G(r.$$.fragment, i), e = !0);
    },
    o(i) {
      oe(r.$$.fragment, i), e = !1;
    },
    d(i) {
      Wt(r, i), n = !1, o();
    }
  };
}
function km(t, r, e) {
  let n = 0, o = [], i = [];
  for (let s = 0; s < t.length; ++s)
    o[n] || (o[n] = []), o[n].push({
      index: s,
      hasGapBefore: i[n] && r[s].visibility !== "gone",
      componentContext: t[s]
    }), !i[n] && r[s].visibility !== "gone" && (i[n] = !0), ++n >= e && (n = 0);
  return o;
}
function jm(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, p, m, h, y, w, D, z, O, $, ue, M, Y, se = j, C = () => (se(), se = V(h, (ce) => e(59, Y = ce)), h), I, P = j, B = () => (P(), P = V(m, (ce) => e(60, I = ce)), m), q, pe = j, _e = () => (pe(), pe = V(_, (ce) => e(61, q = ce)), _), Ae, be = j, Ie = () => (be(), be = V(qt, (ce) => e(62, Ae = ce)), qt), x, Ye = j, Qe = () => (Ye(), Ye = V(f, (ce) => e(63, x = ce)), f), xe, we = j, Te = () => (we(), we = V(c, (ce) => e(64, xe = ce)), c), ge, ye = j, he = () => (ye(), ye = V(u, (ce) => e(65, ge = ce)), u), te, fe = j, re = () => (fe(), fe = V(l, (ce) => e(66, te = ce)), l), ve, qe = j, Xe = () => (qe(), qe = V(a, (ce) => e(67, ve = ce)), a), ee, He, Oe = j, lt = () => (Oe(), Oe = V(i, (ce) => e(69, He = ce)), i), _t, it = j, Et = () => (it(), it = V(s, (ce) => e(70, _t = ce)), s), at, zt = j, ht = () => (zt(), zt = V(p, (ce) => e(30, at = ce)), p);
  t.$$.on_destroy.push(() => se()), t.$$.on_destroy.push(() => P()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => Ye()), t.$$.on_destroy.push(() => we()), t.$$.on_destroy.push(() => ye()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => qe()), t.$$.on_destroy.push(() => Oe()), t.$$.on_destroy.push(() => it()), t.$$.on_destroy.push(() => zt());
  let { componentContext: Z } = r, { layoutParams: de = void 0 } = r;
  const ct = zr($r), Be = ct.direction;
  kn(t, Be, (ce) => e(58, M = ce));
  let T, St = [], dt = !1, Ft = !1, Pt = null, st, Q = !1;
  const Dt = ct.getCustomization("galleryLeftClass"), Ot = ct.getCustomization("galleryRightClass");
  let nr, er = 1, Ve = "horizontal", Ge = "start", yt, Pe = 8, tt, Le, Tt = "", We, vt = [], qt, Nt = {}, ar = !1, Fe = {}, At = 0;
  function ur() {
    e(42, er = 1), e(4, Ve = "horizontal"), e(43, Ge = "start"), e(44, Pe = 8), e(47, Tt = "");
  }
  let sr = null, lr = null;
  function hr() {
    var ir, Gt;
    const ce = Jn(_t, er), Ct = Z.json.responsive;
    if (!Ct || typeof Ct != "object") {
      e(42, er = ce);
      return;
    }
    sr != null && sr.matches && ((ir = Ct.mobile) != null && ir.column_count) ? e(42, er = Ct.mobile.column_count) : lr != null && lr.matches && ((Gt = Ct.tablet) != null && Gt.column_count) ? e(42, er = Ct.tablet.column_count) : e(42, er = ce);
  }
  function Er(ce) {
    e(0, Z = e(53, Ut = {
      ...Z,
      json: {
        ...Z.json,
        items: ce.filter(Wo)
      }
    }));
  }
  const Bt = ct.isDesktop;
  kn(t, Bt, (ce) => e(68, ee = ce));
  let kr = [], Ut;
  function wt() {
    if (!T)
      return;
    let ce = T.scrollLeft;
    M === "rtl" && (ce *= -1);
    const Ct = T.scrollWidth, ir = T.offsetWidth;
    M === "ltr" ? (e(10, dt = ce > 2), e(11, Ft = ce + ir < Ct - 2)) : (e(11, Ft = ce > 2), e(10, dt = ce + ir < Ct - 2));
  }
  const or = Ca(wt, 50);
  function le(ce) {
    T.scroll({
      left: T.scrollLeft + T.offsetWidth * 0.75 * (ce === "right" ? 1 : -1),
      behavior: "smooth"
    });
  }
  function Cr() {
    let ce = [], Ct = St[0].children.length;
    for (let ir = 0; ir < Ct; ir += 2)
      for (let Gt = 0; Gt < er; ++Gt) {
        const jr = St[Gt].children[ir];
        jr && ce.push(jr);
      }
    return ce;
  }
  function Ar(ce, Ct = !0) {
    const Gt = Ve === "horizontal" ? "left" : "top";
    T.scroll({
      [Gt]: ce,
      behavior: Ct ? "smooth" : "instant"
    });
  }
  function Vt(ce, Ct, { animated: ir = !0, extraOffset: Gt = 0, overflow: jr = "clamp" } = {}) {
    const E = Ve === "horizontal", ie = E ? "offsetLeft" : "offsetTop";
    Ct > ce.length - 1 ? Ct = jr === "ring" ? Po(Ct, ce.length) : ce.length - 1 : Ct < 0 && (Ct = jr === "ring" ? Po(Ct, ce.length) : 0);
    const d = ce[Ct];
    if (d) {
      let R;
      if (M === "ltr" || !E)
        R = d[ie] + 0.01 - Pe / 2;
      else {
        const Ce = T.offsetWidth;
        R = d[ie] + d.offsetWidth + 0.01 - Pe / 2 - Ce;
      }
      if (Gt) {
        R += Gt;
        const Ce = E ? T.scrollWidth - T.offsetWidth : T.scrollHeight - T.offsetHeight;
        R > Ce && (jr === "clamp" ? R = Ce : jr === "ring" && (R = Po(R, Ce))), R < 0 && (jr === "clamp" ? R = 0 : jr === "ring" && (R = Po(R, Ce)));
      }
      Ar(R, ir);
    }
  }
  function Pr(ce, { overflow: Ct = "clamp", animated: ir = !0 } = {}) {
    const Gt = Ve === "horizontal", jr = M === "ltr" || !Gt ? 1 : -1, E = Gt ? T.scrollLeft : T.scrollTop, ie = Gt ? T.scrollWidth - T.offsetWidth : T.scrollHeight - T.offsetHeight;
    let d = E * jr + ce;
    d > ie ? Ct === "clamp" ? d = ie : Ct === "ring" && (d = Po(d, ie)) : d < 0 && (Ct === "clamp" ? d = 0 : Ct === "ring" && (d = Po(d, ie))), Ar(d * jr, ir);
  }
  function Ur(ce, Ct) {
    return Ve === "horizontal" ? Ct.right > ce.left && ce.right > Ct.left : Ct.bottom > ce.top && ce.bottom > Ct.top;
  }
  function fr(ce, Ct) {
    return Ve === "horizontal" ? Ct.left >= ce.left && Ct.right <= ce.right : Ct.top >= ce.top && Ct.bottom <= ce.bottom;
  }
  function ft(ce) {
    const Ct = Cr(), ir = T.getBoundingClientRect(), Gt = Ct.findIndex((ie) => fr(ir, ie.getBoundingClientRect()));
    if (Gt !== -1)
      return Gt;
    const jr = Ct.map((ie) => Ur(ir, ie.getBoundingClientRect())), E = jr.findIndex(Boolean);
    return E !== -1 ? ce === "prev" && jr.filter(Boolean).length === 2 ? E + 1 : E : ce === "prev" ? 1 : Ct.length - 2;
  }
  no(() => {
    if (e(40, Q = !0), wt(), At) {
      const ce = Cr();
      Vt(ce, At, { animated: !1 });
    }
  }), dn(() => {
    e(40, Q = !1), kr.forEach((ce) => {
      ce.destroy();
    }), nr && !Z.fakeElement && (ct.unregisterInstance(nr), e(41, nr = void 0)), sr && sr.removeEventListener("change", hr), lr && lr.removeEventListener("change", hr);
  });
  function It(ce, Ct) {
    Mr[ce ? "unshift" : "push"](() => {
      St[Ct] = ce, e(9, St);
    });
  }
  function Kt(ce) {
    Mr[ce ? "unshift" : "push"](() => {
      st = ce, e(3, st);
    });
  }
  function tr(ce) {
    Mr[ce ? "unshift" : "push"](() => {
      T = ce, e(2, T);
    });
  }
  const rt = () => le("left"), mt = () => le("right");
  return t.$$set = (ce) => {
    "componentContext" in ce && e(0, Z = ce.componentContext), "layoutParams" in ce && e(1, de = ce.layoutParams);
  }, t.$$.update = () => {
    var ce, Ct, ir, Gt, jr, E;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(57, n = Z.origJson), t.$$.dirty[1] & /*origJson*/
    67108864 && n && ur(), t.$$.dirty[0] & /*componentContext*/
    1 && e(56, o = Array.isArray(Z.json.items) && Z.json.items || []), t.$$.dirty[0] & /*componentContext*/
    1 && lt(e(29, i = typeof ((ce = Z.json.item_builder) == null ? void 0 : ce.data) == "string" ? Z.getDerivedFromVars((Ct = Z.json.item_builder) == null ? void 0 : Ct.data, void 0, !0) : (ir = Z.json.item_builder) != null && ir.data ? Qo(Z.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && Et(e(28, s = Z.getDerivedFromVars(Z.json.column_count))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(27, a = Z.getDerivedFromVars(Z.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*columns, mobileQuery, tabletQuery*/
    3147776 | t.$$.dirty[2] & /*$jsonColumnCount*/
    256) {
      const ie = Jn(_t, er), d = Z.json.responsive;
      d && typeof d == "object" && typeof window < "u" ? (sr || (e(51, sr = window.matchMedia("(max-width: 767px)")), e(52, lr = window.matchMedia("(min-width: 768px) and (max-width: 1023px)")), sr.addEventListener("change", hr), lr.addEventListener("change", hr)), hr()) : e(42, er = ie);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 && re(e(26, l = Z.getDerivedFromVars(Z.json.cross_content_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(25, u = Z.getDerivedFromVars(Z.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(24, c = Z.getDerivedFromVars(Z.json.cross_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && Qe(e(23, f = Z.getDerivedFromVars(Z.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(22, _ = Z.getDerivedFromVars(Z.json.scroll_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && ht(e(21, p = Z.getDerivedFromVars(Z.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && B(e(20, m = Z.getDerivedFromVars(Z.json.scrollbar))), t.$$.dirty[0] & /*componentContext*/
    1 && C(e(19, h = Z.getDerivedFromVars(Z.json.default_item))), t.$$.dirty[0] & /*componentContext, items*/
    129 | t.$$.dirty[1] & /*jsonItems, prevContext*/
    37748736 | t.$$.dirty[2] & /*$jsonItemBuilderData*/
    128) {
      let ie = [];
      if (Z.json.item_builder && Array.isArray(He) && Array.isArray(Z.json.item_builder.prototypes)) {
        const Je = Z.json.item_builder;
        ie = kl(He, ct, Z, Je);
      } else
        ie = (Array.isArray(o) && o || []).map((Je, ke) => ({
          div: Je,
          key: Je.id || { index: ke, data: Je }
        }));
      const d = new Set(kr), R = /* @__PURE__ */ new Map();
      let Ce = !1;
      Ut === Z && kr.forEach((Je) => {
        Je.key && (typeof Je.key == "string" && R.has(Je.key) ? Ce || (Ce = !0, Z.logError(X(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: Je.key } }))) : R.set(
          typeof Je.key == "string" ? Je.key : Je.key.index,
          Je
        ));
      }), e(7, kr = ie.map((Je, ke) => {
        let L = !Ce && R.get(Je.id), Lt = R.get(ke);
        return !L && !Je.id && typeof Je.key == "object" && typeof (Lt == null ? void 0 : Lt.key) == "object" && Qi(Lt.key.data, Je.key.data) && (L = Lt), L ? (d.delete(L), L) : Z.produceChildContext(Je.div, {
          path: ke,
          variables: Je.vars,
          id: Je.id,
          key: Je.key
        });
      }));
      for (const Je of d)
        Je.destroy();
      e(53, Ut = Z);
    }
    if (t.$$.dirty[1] & /*mounted*/
    512 | t.$$.dirty[2] & /*$isDesktop*/
    64 && e(8, y = ee && Q), t.$$.dirty[0] & /*shouldCheckArrows, itemsGridElem*/
    264 | t.$$.dirty[1] & /*resizeObserver*/
    256 && (y ? typeof ResizeObserver < "u" && (e(39, Pt = new ResizeObserver(() => {
      or();
    })), Pt.observe(st)) : Pt && (Pt.disconnect(), e(39, Pt = null))), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[2] & /*$jsonOrientation*/
    32 && e(4, Ve = Aa(ve, Ve)), t.$$.dirty[1] & /*align*/
    4096 | t.$$.dirty[2] & /*$jsonCrossContentAlignment*/
    16 && e(43, Ge = pm(te, Ge)), t.$$.dirty[1] & /*itemSpacing*/
    8192 | t.$$.dirty[2] & /*$jsonItemSpacing*/
    8 && (e(44, Pe = un(ge, Pe)), e(12, yt = me(Pe))), t.$$.dirty[1] & /*itemSpacing, crossSpacing*/
    40960 | t.$$.dirty[2] & /*$jsonCrossSpacing*/
    4 && (e(46, Le = un(xe, Pe)), e(45, tt = me(Le))), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*$direction, padding*/
    134283264 | t.$$.dirty[2] & /*$jsonPaddings*/
    2) {
      e(47, Tt = ds(x, M, Tt));
      const ie = Ve === "horizontal" ? (jr = (Gt = x == null ? void 0 : x.end) != null ? Gt : x == null ? void 0 : x[M === "ltr" ? "right" : "left"]) != null ? jr : 0 : (E = x == null ? void 0 : x.bottom) != null ? E : 0, d = me(ie);
      e(13, We = {
        width: Ve === "horizontal" ? d : "1px",
        height: Ve === "horizontal" ? "1px" : d,
        "margin-right": Ve === "horizontal" && M === "ltr" ? "-" + d : void 0,
        "margin-left": Ve === "horizontal" && M === "rtl" ? "-" + d : void 0,
        "margin-bottom": Ve === "vertical" ? "-" + d : void 0
      });
    }
    if (t.$$.dirty[0] & /*items, orientation*/
    144) {
      let ie = [];
      kr.forEach((d) => {
        const R = Ve === "horizontal" ? "width" : "height";
        ie.push(d.getDerivedFromVars({
          size: d.json[R],
          visibility: d.json.visibility
        }));
      }), Ie(e(14, qt = Zi(ie, (d) => [...d])));
    }
    if (t.$$.dirty[0] & /*items*/
    128 | t.$$.dirty[1] & /*columns*/
    2048 | t.$$.dirty[2] & /*$childStore*/
    1 && e(18, w = km(kr, Ae, er)), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*columns, templateSizes*/
    133120 | t.$$.dirty[2] & /*$childStore*/
    1 && (e(48, vt = []), er > 1 || Ae.forEach((ie, d) => {
      var R;
      ie.visibility !== "gone" && (!ie.size && Ve === "horizontal" || ((R = ie.size) == null ? void 0 : R.type) === "match_parent" ? vt.push("100%") : vt.push("max-content"), d + 1 < Ae.length && vt.push("auto"));
    }), vt.push("auto")), t.$$.dirty[0] & /*componentContext*/
    1 && e(55, D = Z.json.fixed_columns === !0), t.$$.dirty[0] & /*orientation, scrollerStyle, childLayoutParams*/
    112 | t.$$.dirty[1] & /*align, $jsonScrollMode, itemSpacing*/
    1073754112) {
      const ie = {};
      let d = {};
      if (e(49, ar = !1), d.treatMatchParentAs100 = !0, Ve === "horizontal" ? (d.parentVAlign = Ge, d.parentContainerOrientation = "horizontal") : (d.parentHAlign = Ge, d.parentContainerOrientation = "vertical"), q === "paging") {
        e(49, ar = !0), d.scrollSnap = "start";
        const R = Ve === "horizontal" ? "scroll-padding-left" : "scroll-padding-top";
        ie[R] = me(Pe / 2);
      }
      e(5, Nt = si(ie, Nt)), e(6, Fe = si(d, Fe));
    }
    t.$$.dirty[0] & /*orientation*/
    16 && e(54, z = Ve === "horizontal" ? "grid-template-columns" : "grid-template-rows"), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*padding, crossGridGap, fixedColumns, columns*/
    16861184 && e(17, O = {
      padding: Tt,
      "grid-gap": tt,
      ...D && er > 1 && Ve === "vertical" ? {
        display: "grid",
        "grid-template-columns": `repeat(${er}, 1fr)`
      } : {}
    }), t.$$.dirty[1] & /*gridTemplate, templateSizes*/
    8519680 && e(16, $ = {
      [z]: gm(vt)
    }), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*scrollSnap, $jsonScrollbar*/
    537133056 && e(15, ue = {
      orientation: Ve,
      "scroll-snap": ar,
      scrollbar: I === "auto" ? "auto" : "none"
    }), t.$$.dirty[1] & /*$jsonDefaultItem, defaultItem*/
    268959744 && e(50, At = un(Y, At)), t.$$.dirty[0] & /*componentContext*/
    1 && Z.json && or(), t.$$.dirty[0] & /*componentContext, orientation, scroller*/
    21 | t.$$.dirty[1] & /*prevId, $direction*/
    134218752 && Z.json && (nr && (ct.unregisterInstance(nr), e(41, nr = void 0)), Z.id && !Z.fakeElement && (e(41, nr = Z.id), ct.registerInstance(nr, {
      setCurrentItem(ie, d) {
        const R = Cr();
        if (ie < 0 || ie > R.length - 1)
          throw new Error('Item is out of range in "set-current-item" action');
        Vt(R, ie, { animated: d });
      },
      setPreviousItem(ie, d, R) {
        const Ce = ft("prev"), Je = Cr();
        let ke = Ce - ie;
        Vt(Je, ke, { animated: R, overflow: d });
      },
      setNextItem(ie, d, R) {
        const Ce = Ve === "horizontal", Je = M === "ltr" || !Ce ? 1 : -1, ke = Ce ? T.scrollLeft * Je + T.offsetWidth === T.scrollWidth : T.scrollTop + T.offsetHeight === T.scrollHeight, L = Cr();
        if (ke && d === "ring") {
          Vt(L, 0, { animated: R });
          return;
        }
        let Rt = ft("next") + ie;
        Vt(L, Rt, { animated: R, overflow: d });
      },
      scrollToStart(ie) {
        Ar(0, ie);
      },
      scrollToEnd(ie) {
        Ar(
          M === "ltr" || Ve !== "horizontal" ? 1e6 : -1e6,
          ie
        );
      },
      scrollToPosition(ie, d) {
        Ar(
          M === "ltr" || Ve !== "horizontal" ? ie : -ie,
          d
        );
      },
      scrollCombined({ step: ie, offset: d, overflow: R, animated: Ce }) {
        if (ie) {
          const ke = ft(ie > 0 ? "next" : "prev") + ie;
          Vt(Cr(), ke, { animated: Ce, extraOffset: d, overflow: R });
        } else d && Pr(d, { overflow: R, animated: Ce });
      }
    })));
  }, [
    Z,
    de,
    T,
    st,
    Ve,
    Nt,
    Fe,
    kr,
    y,
    St,
    dt,
    Ft,
    yt,
    We,
    qt,
    ue,
    $,
    O,
    w,
    h,
    m,
    p,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    at,
    Be,
    Dt,
    Ot,
    Er,
    Bt,
    wt,
    or,
    le,
    Pt,
    Q,
    nr,
    er,
    Ge,
    Pe,
    tt,
    Le,
    Tt,
    vt,
    ar,
    At,
    sr,
    lr,
    Ut,
    z,
    D,
    o,
    n,
    M,
    Y,
    I,
    q,
    Ae,
    x,
    xe,
    ge,
    te,
    ve,
    ee,
    He,
    _t,
    It,
    Kt,
    tr,
    rt,
    mt
  ];
}
class Em extends Wr {
  constructor(r) {
    super(), Hr(this, r, jm, vm, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Cm = "appkit-outer", Am = "appkit-tabs", Vm = "appkit-tabs__list", Sm = "appkit-tabs__item", Dm = "appkit-tabs__item_selected", Im = "appkit-tabs_animation_fade", Fm = "appkit-tabs_animation_none", Tm = "appkit-tabs__item_actionable", Mm = "appkit-tabs__panels", Pm = "appkit-tabs__swiper", Nm = "appkit-tabs__swiper_animated", zm = "appkit-tabs__swiper_inited", Om = "appkit-tabs__panel", Bm = "appkit-tabs__panel_visible", Lm = "appkit-tabs__separator", Rm = "appkit-tabs__delimitier", Sn = {
  outer: Cm,
  "root__any-actions": "appkit-root__any-actions",
  tabs: Am,
  tabs__list: Vm,
  "tabs__items-bg": "appkit-tabs__items-bg",
  "tabs__items-text": "appkit-tabs__items-text",
  tabs__item: Sm,
  tabs__item_selected: Dm,
  tabs_animation_fade: Im,
  tabs_animation_none: Fm,
  tabs__item_actionable: Tm,
  tabs__panels: Mm,
  "tabs_own-height": "appkit-tabs_own-height",
  tabs__swiper: Pm,
  tabs__swiper_animated: Nm,
  tabs__swiper_inited: zm,
  tabs__panel: Om,
  tabs__panel_visible: Bm,
  "tabs_height-parent_yes": "appkit-tabs_height-parent_yes",
  tabs__separator: Lm,
  tabs__delimitier: Rm,
  "tabs__tabs-highlighter": "appkit-tabs__tabs-highlighter"
};
function Hm(t, r) {
  var n, o;
  if (!t || !t.image_url || typeof t.image_url != "string")
    return r;
  const e = {
    url: t.image_url,
    width: 12,
    height: 12
  };
  return ((n = t.width) == null ? void 0 : n.type) === "fixed" && On(t.width.value) && (e.width = t.width.value), ((o = t.height) == null ? void 0 : o.type) === "fixed" && On(t.height.value) && (e.height = t.height.value), e;
}
const Ud = 37, Gd = 39, Jd = 36, qd = 35;
function Wm(t, r, e, n) {
  const o = [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ];
  for (let i = 0; i < o.length; ++i)
    if (o[i] && !Rn(o[i]))
      return n;
  return Ts(t, r, e);
}
function xu(t) {
  const r = t.touches[0], e = r.clientX || r.pageX, n = r.clientY || r.pageY;
  return { x: e, y: n };
}
function Um(t) {
  let r, e;
  return r = new oo({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function Gm(t, r, e) {
  let { componentContext: n } = r, { layoutParams: o = void 0 } = r, { enabled: i } = r;
  const s = Oo(i);
  return ki(ja, { isEnabled: s }), t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext), "layoutParams" in a && e(1, o = a.layoutParams), "enabled" in a && e(2, i = a.enabled);
  }, t.$$.update = () => {
    t.$$.dirty & /*enabled*/
    4 && s.set(i);
  }, [n, o, i];
}
class Jm extends Wr {
  constructor(r) {
    super(), Hr(this, r, Gm, Um, Tr, {
      componentContext: 0,
      layoutParams: 1,
      enabled: 2
    });
  }
}
const { Boolean: $u, window: qm } = Ro;
function ec(t, r, e) {
  const n = t.slice();
  n[99] = r[e];
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
function tc(t, r, e) {
  const n = t.slice();
  n[99] = r[e];
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
function rc(t, r, e) {
  const n = t.slice();
  n[99] = r[e];
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
function Km(t) {
  let r, e;
  return r = new Pn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function Ym(t) {
  let r, e;
  const n = [
    {
      cls: bt(
        "tabs",
        Sn,
        /*mods*/
        t[24]
      )
    },
    {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    },
    { layoutParams: (
      /*layoutParams*/
      t[1]
    ) },
    { customActions: "tabs" },
    { parentOf: (
      /*parentOfItems*/
      t[47]
    ) },
    { parentOfSimpleMode: !0 },
    { replaceItems: (
      /*replaceItems*/
      t[53]
    ) },
    /*devapi*/
    t[52]
  ];
  let o = {
    $$slots: { default: [Zm] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < n.length; i += 1)
    o = Do(o, n[i]);
  return r = new vn({ props: o }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(i) {
      Xt(r.$$.fragment, i);
    },
    m(i, s) {
      Ht(r, i, s), e = !0;
    },
    p(i, s) {
      const a = s[0] & /*mods, componentContext, layoutParams*/
      16777219 | s[1] & /*parentOfItems, replaceItems, devapi*/
      6356992 ? Ho(n, [
        s[0] & /*mods*/
        16777216 && {
          cls: bt(
            "tabs",
            Sn,
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
        2097152 && Td(
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
      e || (G(r.$$.fragment, i), e = !0);
    },
    o(i) {
      oe(r.$$.fragment, i), e = !1;
    },
    d(i) {
      Wt(r, i);
    }
  };
}
function nc(t) {
  let r;
  return {
    c() {
      r = Me("span"), this.h();
    },
    l(e) {
      r = ze(e, "SPAN", { class: !0 }), je(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", Sn.tabs__delimitier), N(
        r,
        "width",
        /*delimitierStyle*/
        t[15].width ? me(
          /*delimitierStyle*/
          t[15].width
        ) : void 0
      ), N(
        r,
        "height",
        /*delimitierStyle*/
        t[15].height ? me(
          /*delimitierStyle*/
          t[15].height
        ) : void 0
      );
    },
    m(e, n) {
      K(e, r, n);
    },
    p(e, n) {
      n[0] & /*delimitierStyle*/
      32768 && N(
        r,
        "width",
        /*delimitierStyle*/
        e[15].width ? me(
          /*delimitierStyle*/
          e[15].width
        ) : void 0
      ), n[0] & /*delimitierStyle*/
      32768 && N(
        r,
        "height",
        /*delimitierStyle*/
        e[15].height ? me(
          /*delimitierStyle*/
          e[15].height
        ) : void 0
      );
    },
    d(e) {
      e && k(r);
    }
  };
}
function oc(t) {
  let r, e, n = (
    /*item*/
    t[99].title + ""
  ), o, i, s = (
    /*delimitierStyle*/
    t[15] && /*index*/
    t[100] > 0 && nc(t)
  );
  return {
    c() {
      s && s.c(), r = gr(), e = Me("span"), o = Bn(n), this.h();
    },
    l(a) {
      s && s.l(a), r = mr(a), e = ze(a, "SPAN", { class: !0 });
      var l = je(e);
      o = qn(l, n), l.forEach(k), this.h();
    },
    h() {
      g(e, "class", i = bt("tabs__item", Sn, {
        selected: (
          /*isSelected*/
          t[104]
        ),
        actionable: !!/*item*/
        t[99].title_click_action
      }));
    },
    m(a, l) {
      s && s.m(a, l), K(a, r, l), K(a, e, l), jt(e, o);
    },
    p(a, l) {
      /*delimitierStyle*/
      a[15] && /*index*/
      a[100] > 0 ? s ? s.p(a, l) : (s = nc(a), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null), l[0] & /*$childStore*/
      262144 && n !== (n = /*item*/
      a[99].title + "") && Qn(o, n), l[0] & /*$childStore, selected*/
      393216 && i !== (i = bt("tabs__item", Sn, {
        selected: (
          /*isSelected*/
          a[104]
        ),
        actionable: !!/*item*/
        a[99].title_click_action
      })) && g(e, "class", i);
    },
    d(a) {
      a && (k(r), k(e)), s && s.d(a);
    }
  };
}
function ic(t) {
  let r, e;
  return {
    c() {
      r = Me("div"), this.h();
    },
    l(n) {
      r = ze(n, "DIV", { class: !0, style: !0 }), je(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", Sn["tabs__tabs-highlighter"]), g(r, "style", e = _r(
        /*selectedTabStyles*/
        t[36]
      ));
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o[1] & /*selectedTabStyles*/
      32 && e !== (e = _r(
        /*selectedTabStyles*/
        n[36]
      )) && g(r, "style", e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function sc(t) {
  let r, e;
  return {
    c() {
      r = Me("img"), this.h();
    },
    l(n) {
      r = ze(n, "IMG", {
        class: !0,
        alt: !0,
        loading: !0,
        decoding: !0,
        src: !0
      }), this.h();
    },
    h() {
      g(r, "class", Sn.tabs__delimitier), g(r, "alt", ""), g(r, "loading", "lazy"), g(r, "decoding", "async"), to(r.src, e = /*delimitierStyle*/
      t[15].url) || g(r, "src", e), N(
        r,
        "width",
        /*delimitierStyle*/
        t[15].width ? me(
          /*delimitierStyle*/
          t[15].width
        ) : void 0
      ), N(
        r,
        "height",
        /*delimitierStyle*/
        t[15].height ? me(
          /*delimitierStyle*/
          t[15].height
        ) : void 0
      );
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o[0] & /*delimitierStyle*/
      32768 && !to(r.src, e = /*delimitierStyle*/
      n[15].url) && g(r, "src", e), o[0] & /*delimitierStyle*/
      32768 && N(
        r,
        "width",
        /*delimitierStyle*/
        n[15].width ? me(
          /*delimitierStyle*/
          n[15].width
        ) : void 0
      ), o[0] & /*delimitierStyle*/
      32768 && N(
        r,
        "height",
        /*delimitierStyle*/
        n[15].height ? me(
          /*delimitierStyle*/
          n[15].height
        ) : void 0
      );
    },
    d(n) {
      n && k(r);
    }
  };
}
function Xm(t) {
  let r = (
    /*item*/
    t[99].title + ""
  ), e;
  return {
    c() {
      e = Bn(r);
    },
    l(n) {
      e = qn(n, r);
    },
    m(n, o) {
      K(n, e, o);
    },
    p(n, o) {
      o[0] & /*$childStore*/
      262144 && r !== (r = /*item*/
      n[99].title + "") && Qn(e, r);
    },
    d(n) {
      n && k(e);
    }
  };
}
function lc(t) {
  let r, e, n, o = (
    /*delimitierStyle*/
    t[15] && /*index*/
    t[100] > 0 && sc(t)
  );
  function i(...s) {
    return (
      /*func*/
      t[73](
        /*index*/
        t[100],
        ...s
      )
    );
  }
  return e = new yl({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      cls: bt("tabs__item", Sn, {
        selected: (
          /*isSelected*/
          t[104]
        ),
        actionable: !!/*item*/
        t[99].title_click_action
      }),
      actions: (
        /*item*/
        t[99].title_click_action && !/*componentContext*/
        t[0].fakeElement ? [
          /*item*/
          t[99].title_click_action
        ].filter(el) : []
      ),
      attrs: {
        id: `${/*instId*/
        t[50]}-tab-${/*index*/
        t[100]}`,
        "aria-controls": `${/*instId*/
        t[50]}-panel-${/*index*/
        t[100]}`,
        role: "tab",
        // eslint-disable-next-line no-nested-ternary
        tabindex: (
          /*isSelected*/
          t[104] && !/*componentContext*/
          t[0].fakeElement ? (
            /*item*/
            t[99].title_click_action ? void 0 : "0"
          ) : "-1"
        ),
        "aria-selected": (
          /*isSelected*/
          t[104] ? "true" : "false"
        )
      },
      customAction: (
        /*componentContext*/
        t[0].fakeElement ? null : i
      ),
      $$slots: { default: [Xm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      o && o.c(), r = gr(), Jt(e.$$.fragment);
    },
    l(s) {
      o && o.l(s), r = mr(s), Xt(e.$$.fragment, s);
    },
    m(s, a) {
      o && o.m(s, a), K(s, r, a), Ht(e, s, a), n = !0;
    },
    p(s, a) {
      t = s, /*delimitierStyle*/
      t[15] && /*index*/
      t[100] > 0 ? o ? o.p(t, a) : (o = sc(t), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
      const l = {};
      a[0] & /*componentContext*/
      1 && (l.componentContext = /*componentContext*/
      t[0]), a[0] & /*$childStore, selected*/
      393216 && (l.cls = bt("tabs__item", Sn, {
        selected: (
          /*isSelected*/
          t[104]
        ),
        actionable: !!/*item*/
        t[99].title_click_action
      })), a[0] & /*$childStore, componentContext*/
      262145 && (l.actions = /*item*/
      t[99].title_click_action && !/*componentContext*/
      t[0].fakeElement ? [
        /*item*/
        t[99].title_click_action
      ].filter(el) : []), a[0] & /*$childStore, selected, componentContext*/
      393217 && (l.attrs = {
        id: `${/*instId*/
        t[50]}-tab-${/*index*/
        t[100]}`,
        "aria-controls": `${/*instId*/
        t[50]}-panel-${/*index*/
        t[100]}`,
        role: "tab",
        // eslint-disable-next-line no-nested-ternary
        tabindex: (
          /*isSelected*/
          t[104] && !/*componentContext*/
          t[0].fakeElement ? (
            /*item*/
            t[99].title_click_action ? void 0 : "0"
          ) : "-1"
        ),
        "aria-selected": (
          /*isSelected*/
          t[104] ? "true" : "false"
        )
      }), a[0] & /*componentContext, $childStore*/
      262145 && (l.customAction = /*componentContext*/
      t[0].fakeElement ? null : i), a[0] & /*$childStore*/
      262144 | a[3] & /*$$scope*/
      65536 && (l.$$scope = { dirty: a, ctx: t }), e.$set(l);
    },
    i(s) {
      n || (G(e.$$.fragment, s), n = !0);
    },
    o(s) {
      oe(e.$$.fragment, s), n = !1;
    },
    d(s) {
      s && k(r), o && o.d(s), Wt(e, s);
    }
  };
}
function ac(t) {
  let r, e;
  return {
    c() {
      r = Me("div"), this.h();
    },
    l(n) {
      r = ze(n, "DIV", { class: !0, style: !0 }), je(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", Sn.tabs__separator), g(r, "style", e = _r(
        /*separatorStyle*/
        t[38]
      ));
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o[1] & /*separatorStyle*/
      128 && e !== (e = _r(
        /*separatorStyle*/
        n[38]
      )) && g(r, "style", e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function uc(t) {
  let r, e;
  return r = new Jm({
    props: {
      componentContext: (
        /*childComponentContext*/
        t[101]
      ),
      layoutParams: (
        /*childLayoutParams*/
        t[3]
      ),
      enabled: (
        /*index*/
        t[100] === /*selected*/
        t[17]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function cc(t) {
  let r, e, n, o, i, s, a = (
    /*childComponentContext*/
    t[101] && uc(t)
  );
  return {
    c() {
      r = Me("div"), a && a.c(), e = gr(), this.h();
    },
    l(l) {
      r = ze(l, "DIV", {
        class: !0,
        role: !0,
        id: !0,
        "aria-labelledby": !0,
        style: !0
      });
      var u = je(r);
      a && a.l(u), e = mr(u), u.forEach(k), this.h();
    },
    h() {
      g(r, "class", n = bt("tabs__panel", Sn, {
        visible: (
          /*visiblePanels*/
          t[34][
            /*index*/
            t[100]
          ]
        )
      })), g(r, "role", "tabpanel"), g(r, "id", o = /*instId*/
      t[50] + "-panel-" + /*index*/
      t[100]), g(r, "aria-labelledby", i = /*instId*/
      t[50] + "-tab-" + /*index*/
      t[100]), N(
        r,
        "left",
        /*index*/
        t[100] * 100 + "%"
      );
    },
    m(l, u) {
      K(l, r, u), a && a.m(r, null), jt(r, e), s = !0;
    },
    p(l, u) {
      /*childComponentContext*/
      l[101] ? a ? (a.p(l, u), u[0] & /*$childStore*/
      262144 | u[1] & /*showedPanels*/
      4 && G(a, 1)) : (a = uc(l), a.c(), G(a, 1), a.m(r, e)) : a && (br(), oe(a, 1, 1, () => {
        a = null;
      }), yr()), (!s || u[0] & /*$childStore*/
      262144 | u[1] & /*visiblePanels*/
      8 && n !== (n = bt("tabs__panel", Sn, {
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
      262144) && N(
        r,
        "left",
        /*index*/
        l[100] * 100 + "%"
      );
    },
    i(l) {
      s || (G(a), s = !0);
    },
    o(l) {
      oe(a), s = !1;
    },
    d(l) {
      l && k(r), a && a.d();
    }
  };
}
function Zm(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _, p, m, h, y = dr(
    /*$childStore*/
    t[18]
  ), w = [];
  for (let C = 0; C < y.length; C += 1)
    w[C] = oc(rc(t, y, C));
  let D = (
    /*animationType*/
    t[16] === "slide" && /*selectedTabStyles*/
    t[36] && ic(t)
  ), z = dr(
    /*$childStore*/
    t[18]
  ), O = [];
  for (let C = 0; C < z.length; C += 1)
    O[C] = lc(tc(t, z, C));
  const $ = (C) => oe(O[C], 1, 1, () => {
    O[C] = null;
  });
  let ue = (
    /*$jsonSeparator*/
    t[20] && ac(t)
  ), M = dr(
    /*$childStore*/
    t[18]
  ), Y = [];
  for (let C = 0; C < M.length; C += 1)
    Y[C] = cc(ec(t, M, C));
  const se = (C) => oe(Y[C], 1, 1, () => {
    Y[C] = null;
  });
  return {
    c() {
      r = Me("div"), e = Me("div");
      for (let C = 0; C < w.length; C += 1)
        w[C].c();
      n = gr(), D && D.c(), o = gr(), i = Me("div");
      for (let C = 0; C < O.length; C += 1)
        O[C].c();
      a = gr(), ue && ue.c(), l = gr(), u = Me("div"), c = Me("div");
      for (let C = 0; C < Y.length; C += 1)
        Y[C].c();
      this.h();
    },
    l(C) {
      r = ze(C, "DIV", { class: !0, role: !0 });
      var I = je(r);
      e = ze(I, "DIV", { class: !0, "aria-hidden": !0 });
      var P = je(e);
      for (let _e = 0; _e < w.length; _e += 1)
        w[_e].l(P);
      n = mr(P), D && D.l(P), P.forEach(k), o = mr(I), i = ze(I, "DIV", { class: !0 });
      var B = je(i);
      for (let _e = 0; _e < O.length; _e += 1)
        O[_e].l(B);
      B.forEach(k), I.forEach(k), a = mr(C), ue && ue.l(C), l = mr(C), u = ze(C, "DIV", { class: !0 });
      var q = je(u);
      c = ze(q, "DIV", { class: !0 });
      var pe = je(c);
      for (let _e = 0; _e < Y.length; _e += 1)
        Y[_e].l(pe);
      pe.forEach(k), q.forEach(k), this.h();
    },
    h() {
      g(e, "class", Sn["tabs__items-bg"]), g(e, "aria-hidden", "true"), g(i, "class", Sn["tabs__items-text"]), g(r, "class", s = Sn.tabs__list + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Fr["root_restrict-scroll"] : "")), g(r, "role", "tablist"), N(
        r,
        "--divkit-tabs-title-padding",
        /*titlePadding*/
        t[14] ? _o(
          /*titlePadding*/
          t[14],
          /*$direction*/
          t[19]
        ) : ""
      ), N(r, "--divkit-tabs-font-size", me(
        /*tabFontSize*/
        t[4]
      )), N(
        r,
        "--divkit-tabs-paddings",
        /*tabPaddings*/
        t[5]
      ), N(
        r,
        "--divkit-tabs-line-height",
        /*tabLineHeight*/
        t[25]
      ), N(
        r,
        "--divkit-tabs-letter-spacing",
        /*tabLetterSpacing*/
        t[26]
      ), N(
        r,
        "--divkit-tabs-active-font-weight",
        /*tabActiveFontWeight*/
        t[7] || ""
      ), N(
        r,
        "--divkit-tabs-inactive-font-weight",
        /*tabInactiveFontWeight*/
        t[8] || ""
      ), N(
        r,
        "--divkit-tabs-active-font-family",
        /*tabActiveFontFamily*/
        t[27] || ""
      ), N(
        r,
        "--divkit-tabs-inactive-font-family",
        /*tabInactiveFontFamily*/
        t[29] || ""
      ), N(
        r,
        "--divkit-tabs-active-font-variation-settings",
        /*tabActiveFontVariationSettings*/
        t[28] || ""
      ), N(
        r,
        "--divkit-tabs-inactive-font-variation-settings",
        /*tabInactiveFontVariationSettings*/
        t[30] || ""
      ), N(
        r,
        "--divkit-tabs-active-text-color",
        /*tabActiveTextColor*/
        t[9]
      ), N(
        r,
        "--divkit-tabs-inactive-text-color",
        /*tabInactiveTextColor*/
        t[10]
      ), N(
        r,
        "--divkit-tabs-active-background-color",
        /*tabActiveBackground*/
        t[11]
      ), N(
        r,
        "--divkit-tabs-inactive-background-color",
        /*tabInactiveBackground*/
        t[12]
      ), N(
        r,
        "--divkit-tabs-border-radius",
        /*tabBorderRadius*/
        t[6]
      ), N(
        r,
        "--divkit-tabs-items-spacing",
        /*tabItemSpacing*/
        t[13] ? pn(
          /*tabItemSpacing*/
          t[13] * 10 / /*tabFontSize*/
          t[4]
        ) : ""
      ), N(
        r,
        "--divkit-tabs-animation-duration",
        /*animationDuration*/
        t[35] !== void 0 ? `${/*animationDuration*/
        t[35]}ms` : ""
      ), g(c, "class", f = bt("tabs__swiper", Sn, {
        inited: (
          /*isSwipeInitialized*/
          t[31]
        ),
        animated: (
          /*isAnimated*/
          t[32]
        )
      })), g(u, "class", _ = Sn.tabs__panels + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Fr["root_restrict-scroll"] : ""));
    },
    m(C, I) {
      K(C, r, I), jt(r, e);
      for (let P = 0; P < w.length; P += 1)
        w[P] && w[P].m(e, null);
      jt(e, n), D && D.m(e, null), jt(r, o), jt(r, i);
      for (let P = 0; P < O.length; P += 1)
        O[P] && O[P].m(i, null);
      t[74](r), K(C, a, I), ue && ue.m(C, I), K(C, l, I), K(C, u, I), jt(u, c);
      for (let P = 0; P < Y.length; P += 1)
        Y[P] && Y[P].m(c, null);
      t[75](c), t[76](u), p = !0, m || (h = [
        et(
          r,
          "keydown",
          /*onTabKeydown*/
          t[55]
        ),
        et(u, "touchstart", function() {
          Rr(
            /*isSwipeEnabled*/
            t[37] ? (
              /*onTouchStart*/
              t[56]
            ) : void 0
          ) && (t[37] ? (
            /*onTouchStart*/
            t[56]
          ) : void 0).apply(this, arguments);
        }),
        et(u, "touchmove", function() {
          Rr(
            /*isSwipeEnabled*/
            t[37] ? (
              /*onTouchMove*/
              t[57]
            ) : void 0
          ) && (t[37] ? (
            /*onTouchMove*/
            t[57]
          ) : void 0).apply(this, arguments);
        }),
        et(u, "touchend", function() {
          Rr(
            /*isSwipeEnabled*/
            t[37] ? (
              /*onTouchEnd*/
              t[58]
            ) : void 0
          ) && (t[37] ? (
            /*onTouchEnd*/
            t[58]
          ) : void 0).apply(this, arguments);
        }),
        et(u, "touchcancel", function() {
          Rr(
            /*isSwipeEnabled*/
            t[37] ? (
              /*onTouchEnd*/
              t[58]
            ) : void 0
          ) && (t[37] ? (
            /*onTouchEnd*/
            t[58]
          ) : void 0).apply(this, arguments);
        })
      ], m = !0);
    },
    p(C, I) {
      if (t = C, I[0] & /*$childStore, selected, delimitierStyle*/
      425984) {
        y = dr(
          /*$childStore*/
          t[18]
        );
        let P;
        for (P = 0; P < y.length; P += 1) {
          const B = rc(t, y, P);
          w[P] ? w[P].p(B, I) : (w[P] = oc(B), w[P].c(), w[P].m(e, n));
        }
        for (; P < w.length; P += 1)
          w[P].d(1);
        w.length = y.length;
      }
      if (/*animationType*/
      t[16] === "slide" && /*selectedTabStyles*/
      t[36] ? D ? D.p(t, I) : (D = ic(t), D.c(), D.m(e, null)) : D && (D.d(1), D = null), I[0] & /*componentContext, $childStore, selected, delimitierStyle*/
      425985 | I[1] & /*instId, selectItem*/
      8912896) {
        z = dr(
          /*$childStore*/
          t[18]
        );
        let P;
        for (P = 0; P < z.length; P += 1) {
          const B = tc(t, z, P);
          O[P] ? (O[P].p(B, I), G(O[P], 1)) : (O[P] = lc(B), O[P].c(), G(O[P], 1), O[P].m(i, null));
        }
        for (br(), P = z.length; P < O.length; P += 1)
          $(P);
        yr();
      }
      if ((!p || I[1] & /*$jsonRestrictParentScroll*/
      131072 && s !== (s = Sn.tabs__list + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Fr["root_restrict-scroll"] : ""))) && g(r, "class", s), I[0] & /*titlePadding, $direction*/
      540672 && N(
        r,
        "--divkit-tabs-title-padding",
        /*titlePadding*/
        t[14] ? _o(
          /*titlePadding*/
          t[14],
          /*$direction*/
          t[19]
        ) : ""
      ), I[0] & /*tabFontSize*/
      16 && N(r, "--divkit-tabs-font-size", me(
        /*tabFontSize*/
        t[4]
      )), I[0] & /*tabPaddings*/
      32 && N(
        r,
        "--divkit-tabs-paddings",
        /*tabPaddings*/
        t[5]
      ), I[0] & /*tabLineHeight*/
      33554432 && N(
        r,
        "--divkit-tabs-line-height",
        /*tabLineHeight*/
        t[25]
      ), I[0] & /*tabLetterSpacing*/
      67108864 && N(
        r,
        "--divkit-tabs-letter-spacing",
        /*tabLetterSpacing*/
        t[26]
      ), I[0] & /*tabActiveFontWeight*/
      128 && N(
        r,
        "--divkit-tabs-active-font-weight",
        /*tabActiveFontWeight*/
        t[7] || ""
      ), I[0] & /*tabInactiveFontWeight*/
      256 && N(
        r,
        "--divkit-tabs-inactive-font-weight",
        /*tabInactiveFontWeight*/
        t[8] || ""
      ), I[0] & /*tabActiveFontFamily*/
      134217728 && N(
        r,
        "--divkit-tabs-active-font-family",
        /*tabActiveFontFamily*/
        t[27] || ""
      ), I[0] & /*tabInactiveFontFamily*/
      536870912 && N(
        r,
        "--divkit-tabs-inactive-font-family",
        /*tabInactiveFontFamily*/
        t[29] || ""
      ), I[0] & /*tabActiveFontVariationSettings*/
      268435456 && N(
        r,
        "--divkit-tabs-active-font-variation-settings",
        /*tabActiveFontVariationSettings*/
        t[28] || ""
      ), I[0] & /*tabInactiveFontVariationSettings*/
      1073741824 && N(
        r,
        "--divkit-tabs-inactive-font-variation-settings",
        /*tabInactiveFontVariationSettings*/
        t[30] || ""
      ), I[0] & /*tabActiveTextColor*/
      512 && N(
        r,
        "--divkit-tabs-active-text-color",
        /*tabActiveTextColor*/
        t[9]
      ), I[0] & /*tabInactiveTextColor*/
      1024 && N(
        r,
        "--divkit-tabs-inactive-text-color",
        /*tabInactiveTextColor*/
        t[10]
      ), I[0] & /*tabActiveBackground*/
      2048 && N(
        r,
        "--divkit-tabs-active-background-color",
        /*tabActiveBackground*/
        t[11]
      ), I[0] & /*tabInactiveBackground*/
      4096 && N(
        r,
        "--divkit-tabs-inactive-background-color",
        /*tabInactiveBackground*/
        t[12]
      ), I[0] & /*tabBorderRadius*/
      64 && N(
        r,
        "--divkit-tabs-border-radius",
        /*tabBorderRadius*/
        t[6]
      ), I[0] & /*tabItemSpacing, tabFontSize*/
      8208 && N(
        r,
        "--divkit-tabs-items-spacing",
        /*tabItemSpacing*/
        t[13] ? pn(
          /*tabItemSpacing*/
          t[13] * 10 / /*tabFontSize*/
          t[4]
        ) : ""
      ), I[1] & /*animationDuration*/
      16 && N(
        r,
        "--divkit-tabs-animation-duration",
        /*animationDuration*/
        t[35] !== void 0 ? `${/*animationDuration*/
        t[35]}ms` : ""
      ), /*$jsonSeparator*/
      t[20] ? ue ? ue.p(t, I) : (ue = ac(t), ue.c(), ue.m(l.parentNode, l)) : ue && (ue.d(1), ue = null), I[0] & /*$childStore, childLayoutParams, selected*/
      393224 | I[1] & /*visiblePanels, instId, showedPanels*/
      524300) {
        M = dr(
          /*$childStore*/
          t[18]
        );
        let P;
        for (P = 0; P < M.length; P += 1) {
          const B = ec(t, M, P);
          Y[P] ? (Y[P].p(B, I), G(Y[P], 1)) : (Y[P] = cc(B), Y[P].c(), G(Y[P], 1), Y[P].m(c, null));
        }
        for (br(), P = M.length; P < Y.length; P += 1)
          se(P);
        yr();
      }
      (!p || I[1] & /*isSwipeInitialized, isAnimated*/
      3 && f !== (f = bt("tabs__swiper", Sn, {
        inited: (
          /*isSwipeInitialized*/
          t[31]
        ),
        animated: (
          /*isAnimated*/
          t[32]
        )
      }))) && g(c, "class", f), (!p || I[1] & /*$jsonRestrictParentScroll*/
      131072 && _ !== (_ = Sn.tabs__panels + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Fr["root_restrict-scroll"] : ""))) && g(u, "class", _);
    },
    i(C) {
      if (!p) {
        for (let I = 0; I < z.length; I += 1)
          G(O[I]);
        for (let I = 0; I < M.length; I += 1)
          G(Y[I]);
        p = !0;
      }
    },
    o(C) {
      O = O.filter($u);
      for (let I = 0; I < O.length; I += 1)
        oe(O[I]);
      Y = Y.filter($u);
      for (let I = 0; I < Y.length; I += 1)
        oe(Y[I]);
      p = !1;
    },
    d(C) {
      C && (k(r), k(a), k(l), k(u)), hn(w, C), D && D.d(), hn(O, C), t[74](null), ue && ue.d(C), hn(Y, C), t[75](null), t[76](null), m = !1, Gr(h);
    }
  };
}
function Qm(t) {
  let r, e, n, o, i, s;
  const a = [Ym, Km], l = [];
  function u(c, f) {
    return (
      /*hasError*/
      c[2] ? -1 : 0
    );
  }
  return ~(r = u(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = Re();
    },
    l(c) {
      e && e.l(c), n = Re();
    },
    m(c, f) {
      ~r && l[r].m(c, f), K(c, n, f), o = !0, i || (s = et(qm, "resize", function() {
        Rr(
          /*animationType*/
          t[16] === "slide" ? (
            /*updateSlideAnimation*/
            t[59]
          ) : void 0
        ) && (t[16] === "slide" ? (
          /*updateSlideAnimation*/
          t[59]
        ) : void 0).apply(this, arguments);
      }), i = !0);
    },
    p(c, f) {
      t = c;
      let _ = r;
      r = u(t), r === _ ? ~r && l[r].p(t, f) : (e && (br(), oe(l[_], 1, 1, () => {
        l[_] = null;
      }), yr()), ~r ? (e = l[r], e ? e.p(t, f) : (e = l[r] = a[r](t), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(c) {
      o || (G(e), o = !0);
    },
    o(c) {
      oe(e), o = !1;
    },
    d(c) {
      c && k(n), ~r && l[r].d(c), i = !1, s();
    }
  };
}
function xm(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, p, m, h, y, w, D, z, O, $ = j, ue = () => ($(), $ = V(a, (E) => e(67, O = E)), a), M, Y = j, se = () => (Y(), Y = V(m, (E) => e(68, M = E)), m), C, I = j, P = () => (I(), I = V(p, (E) => e(69, C = E)), p), B, q = j, pe = () => (q(), q = V(f, (E) => e(70, B = E)), f), _e, Ae, be = j, Ie = () => (be(), be = V(c, (E) => e(71, Ae = E)), c), x, Ye = j, Qe = () => (Ye(), Ye = V(u, (E) => e(72, x = E)), u), xe, we = j, Te = () => (we(), we = V(l, (E) => e(20, xe = E)), l), ge, ye = j, he = () => (ye(), ye = V(_, (E) => e(48, ge = E)), _);
  t.$$.on_destroy.push(() => $()), t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => q()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => Ye()), t.$$.on_destroy.push(() => we()), t.$$.on_destroy.push(() => ye());
  let { componentContext: te } = r, { layoutParams: fe = void 0 } = r;
  const re = zr($r), ve = re.direction;
  kn(t, ve, (E) => e(19, _e = E));
  const qe = re.genId("tabs");
  let Xe, ee = !1, He = Oo([]);
  kn(t, He, (E) => e(18, z = E));
  let Oe = {}, lt, _t, it, Et = {}, at = 12, zt = "", ht = "", Z = "", de = "", ct, Be = "", T = "", St, dt = "", Ft = "", Pt = "", st = "", Q = "", Dt = "", Ot = 0, nr = "", er = "", Ve = null, Ge = !1, yt = !1, Pe, tt = [], Le = [], Tt = null, We = null, vt = null, qt, Nt = !1, ar = !1, Fe, At, ur, sr = "slide", lr, hr, Er, Bt;
  function kr() {
    e(4, at = 12), e(5, zt = ""), e(6, de = ""), e(7, ct = void 0), e(27, Be = ""), e(28, T = ""), e(8, St = void 0), e(29, dt = ""), e(30, Ft = ""), e(9, Pt = ""), e(10, st = ""), e(11, Q = ""), e(12, Dt = ""), e(13, Ot = 0), e(61, nr = ""), e(62, er = ""), e(14, Ve = null), e(15, ur = void 0), e(16, sr = "slide"), e(35, lr = 300), e(36, hr = void 0), ce();
  }
  function Ut(E) {
    te.json.items && e(0, te = Er = {
      ...te,
      json: {
        ...te.json,
        items: te.json.items.map((ie, d) => ({ ...ie, div: E[d] }))
      }
    });
  }
  function wt(E) {
    if (ee)
      return;
    const ie = new Set(tt.filter(Wo)), d = /* @__PURE__ */ new Map();
    Er === te && tt.forEach((R) => {
      R && d.set(R.json, R);
    }), e(33, tt = E.map((R, Ce) => {
      if ((Ce === h || tt[Ce]) && (R != null && R.div)) {
        const Je = d.get(R.div);
        return Je ? (ie.delete(Je), Je) : te.produceChildContext(R.div, { path: Ce });
      }
    })), e(34, Le = E.map((R, Ce) => Ce === h));
    for (const R of ie)
      R.destroy();
    Er = te;
  }
  async function or(E, ie, d) {
    if (Pe = h, e(17, h = E), It(), Ar(d), ce(), ie) {
      await Fn();
      const R = lt.querySelector(`.${Sn.tabs__item_selected}`);
      R && R.focus();
    }
  }
  function le(E, ie = !1) {
    const d = z == null ? void 0 : z.length;
    if (!d)
      return;
    const R = z.map((L) => L.index);
    let Je = R.indexOf(h) + E;
    Je >= d ? Je = 0 : Je < 0 && (Je = d - 1);
    const ke = R[Je];
    or(ke, ie, !0);
  }
  function Cr(E, ie) {
    return h !== ie ? (or(ie, !1, !0), !1) : !0;
  }
  function Ar(E = !0) {
    e(32, yt = E), Vt(-h * 100), Pr(), Ur(), fr(), At = -h * _t.clientWidth;
  }
  async function Vt(E) {
    await Fn(), e(23, it.style.transform = `translate3d(${E}%,0,0)`, it);
  }
  function Pr(E = !1) {
    const ie = E ? Math.max(0, h - 1) : Math.min(h, Pe != null ? Pe : h), d = E ? Math.min(o.length - 1, h + 1) : Math.max(h, Pe != null ? Pe : h);
    re.devtoolCreateHierarchy, tt.forEach((R) => {
      R == null || R.destroy();
    }), e(33, tt = tt.map((R, Ce) => {
      var ke;
      if (R)
        return R;
      const Je = (ke = o[Ce]) == null ? void 0 : ke.div;
      if ((Ce >= ie && Ce <= d || re.devtoolCreateHierarchy === "eager" && !1) && Je)
        return te.produceChildContext(Je, { path: Ce });
    })), e(34, Le = Le.map((R, Ce) => Ce >= ie && Ce <= d));
  }
  async function Ur() {
    var ie;
    if (((ie = te.json.height) == null ? void 0 : ie.type) === "match_parent")
      return;
    await Fn();
    const E = document.getElementById(`${qe}-panel-${h}`);
    E && e(22, _t.style.height = me(E.offsetHeight), _t);
  }
  function fr() {
    Tt && clearTimeout(Tt), Tt = window.setTimeout(
      () => {
        e(34, Le = o.map((E, ie) => ie === h));
      },
      400
    );
  }
  function ft(E) {
    if (!(E.ctrlKey || E.shiftKey || E.altKey || E.metaKey) && o) {
      if (E.which === Ud)
        le(-1, !0);
      else if (E.which === Gd)
        le(1, !0);
      else if (E.which === Jd)
        or(0, !0, !0);
      else if (E.which === qd)
        or(o.length - 1, !0, !0);
      else
        return;
      E.preventDefault();
    }
  }
  function It() {
    Ge || (e(31, Ge = !0), e(22, _t.style.height = me(_t.clientHeight), _t), e(23, it.style.transform = `translate3d(${-(Pe != null ? Pe : h) * 100}%,0,0)`, it));
  }
  function Kt(E) {
    var R;
    const ie = E.target, d = (R = ie == null ? void 0 : ie.closest) == null ? void 0 : R.call(ie, `.${Fr["root_restrict-scroll"]}`);
    o.length < 2 || E.touches.length > 1 || d && d !== _t || (Nt = !1, ar = !1, We = xu(E), vt = null, qt = Date.now(), Fe = At || -h * _t.clientWidth, e(32, yt = !1), Tt && clearTimeout(Tt));
  }
  function tr(E) {
    const ie = xu(E);
    if (!We || vt && vt.x === ie.x && vt.y === ie.y)
      return;
    vt = ie;
    const d = _t.clientWidth;
    if (Nt) {
      At = ie.x - We.x + Fe;
      const R = d * o.length;
      if (At > 0)
        At = At * d / (At + d * 3);
      else if (-At + d > R) {
        let Ce = -At + d - R;
        Ce = Ce * d / (Ce + d * 3), At = d - R - Ce;
      }
      Vt(At * 100 / d);
    } else Math.abs(ie.y - We.y) > 10 ? ar = !0 : !ar && Math.abs(ie.x - We.x) > 8 && (It(), Nt = !0, We = ie, Vt(-h * 100), Pr(!0));
    Nt && E.cancelable && E.preventDefault();
  }
  function rt() {
    ar = !1, We = null;
    let E = h;
    if (!Nt)
      return;
    Nt = !1;
    const ie = Math.min(512, _t.clientWidth), d = Math.abs(Fe - At), R = Math.min(1, (Date.now() - qt) / 750);
    d > ie / 4 * R && (E += Fe > At ? 1 : -1), E >= o.length ? E = o.length - 1 : E < 0 && (E = 0), E === h ? (e(32, yt = !0), At = -E * ie, Vt(-E * 100), fr()) : or(E, !1, !0);
  }
  function mt(E, ie) {
    return E > o.length - 1 ? ie === "ring" ? Po(E, o.length) : o.length - 1 : E < 0 ? ie === "ring" ? Po(E, o.length) : 0 : E;
  }
  function ce() {
    sr === "slide" && Fn().then(() => {
      const E = lt == null ? void 0 : lt.querySelector("." + Sn.tabs__item_selected);
      E && e(36, hr = {
        left: `${E.offsetLeft}px`,
        width: `${E.offsetWidth}px`,
        height: `${E.offsetHeight}px`
      });
    });
  }
  no(() => {
    ce(), re.devtoolCreateHierarchy;
  }), dn(() => {
    tt.forEach((E) => {
      E == null || E.destroy();
    }), Xe && (re.unregisterInstance(Xe), e(60, Xe = void 0));
  });
  const Ct = (E, ie) => Cr(ie, E);
  function ir(E) {
    Mr[E ? "unshift" : "push"](() => {
      lt = E, e(21, lt);
    });
  }
  function Gt(E) {
    Mr[E ? "unshift" : "push"](() => {
      it = E, e(23, it);
    });
  }
  function jr(E) {
    Mr[E ? "unshift" : "push"](() => {
      _t = E, e(22, _t);
    });
  }
  return t.$$set = (E) => {
    "componentContext" in E && e(0, te = E.componentContext), "layoutParams" in E && e(1, fe = E.layoutParams);
  }, t.$$.update = () => {
    var E, ie, d, R, Ce, Je, ke, L, Lt, Rt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(66, n = te.origJson), t.$$.dirty[2] & /*origJson*/
    16 && n && kr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(63, o = Array.isArray(te.json.items) && te.json.items || []), t.$$.dirty[2] & /*items*/
    2 && e(47, i = o.map((Ke) => {
      var ut;
      return { json: Ke.div, id: (ut = Ke.div) == null ? void 0 : ut.id };
    })), t.$$.dirty[0] & /*componentContext*/
    1 && e(65, s = te.getJsonWithVars(te.json.selected_tab)), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(46, a = te.getDerivedFromVars(te.json.tab_title_style, void 0, !0))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(45, l = te.getDerivedFromVars(te.json.has_separator))), t.$$.dirty[0] & /*componentContext*/
    1 && Qe(e(44, u = te.getDerivedFromVars(te.json.separator_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ie(e(43, c = te.getDerivedFromVars(te.json.separator_paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && pe(e(42, f = te.getDerivedFromVars(te.json.switch_tabs_by_content_swipe_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(41, _ = te.getDerivedFromVars(te.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && P(e(40, p = te.getDerivedFromVars(te.json.title_paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && se(e(39, m = te.getDerivedFromVars(te.json.tab_title_delimiter))), t.$$.dirty[2] & /*jsonSelectedTab*/
    8 && e(17, h = s && Number(s) || 0), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*items*/
    2)
      if (Array.isArray(o) && o.length) {
        let Ke = [];
        o.forEach((ut, Yt) => {
          const Ir = te.getJsonWithVars({
            index: Yt,
            title: ut.title,
            title_click_action: ut.title_click_action
          });
          Ir.title && typeof Ir.title == "string" ? Ke.push(Ir) : te.logError(X(new Error("Incorrect title for the tab"), { additional: { index: Yt } }));
        }), He.set(Ke);
      } else
        He.set([]);
    if (t.$$.dirty[0] & /*$childStore, componentContext*/
    262145 && (z != null && z.length ? e(2, ee = !1) : (e(2, ee = !0), te.logError(X(new Error('Incorrect or empty "items" prop for div "tabs"'))))), t.$$.dirty[0] & /*componentContext, childLayoutParams*/
    9) {
      let Ke = { parentContainerOrientation: "horizontal" };
      ((E = te.json.width) == null ? void 0 : E.type) === "wrap_content" && (Ke.parentHorizontalWrapContent = !0), (!te.json.height || te.json.height.type === "wrap_content") && (Ke.parentVerticalWrapContent = !0), e(3, Oe = si(Ke, Oe));
    }
    if (t.$$.dirty[0] & /*hasError, selected, componentContext*/
    131077 | t.$$.dirty[2] & /*items*/
    2 && !ee && (h < 0 || h >= o.length) && (te.logError(X(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
      additional: {
        selected: te.json.selected_tab,
        length: o.length
      }
    })), e(17, h = h < 0 ? 0 : o.length - 1)), t.$$.dirty[0] & /*hasError, $childStore, selected, componentContext*/
    393221 && !ee && !z.some((Ke) => h === Ke.index) && (te.logError(X(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
      additional: {
        selected: te.json.selected_tab
      }
    })), e(17, h = ((ie = z[0]) == null ? void 0 : ie.index) || 0)), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && e(64, y = O || {}), t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(4, at = Jn(y.font_size, at)), t.$$.dirty[0] & /*tabFontSize, $direction, tabPaddings*/
    524336 | t.$$.dirty[2] & /*tabStyle*/
    4 && (y.font_size || y.paddings)) {
      const Ke = y.paddings || { top: 6, right: 8, bottom: 6, left: 8 }, ut = {
        top: (Number(Ke.top) || 0) / at * 10,
        right: (Number(_e === "ltr" ? Ke.end : Ke.start) || Number(Ke.right) || 0) / at * 10,
        bottom: (Number(Ke.bottom) || 0) / at * 10,
        left: (Number(_e === "ltr" ? Ke.start : Ke.end) || Number(Ke.left) || 0) / at * 10
      };
      e(5, zt = ds(ut, _e, zt));
    }
    if (t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4) {
      const Ke = y.line_height;
      Ke !== void 0 && On(Ke) && e(25, ht = me(Ke / at * 10));
    }
    if (t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4) {
      const Ke = y.letter_spacing;
      Ke !== void 0 && Rn(Ke) && e(26, Z = me(Ke / at * 10));
    }
    if (t.$$.dirty[0] & /*tabFontSize, tabBorderRadius*/
    80 | t.$$.dirty[2] & /*tabStyle*/
    4 && (y.corner_radius || y.corners_radius || y.font_size)) {
      const Ke = (d = y.corner_radius) != null ? d : 1e3;
      y.corners_radius ? e(6, de = Wm(y.corners_radius, Ke, at, de)) : Rn(Ke) && e(6, de = me(Ke / at * 10));
    }
    t.$$.dirty[0] & /*tabActiveFontWeight*/
    128 | t.$$.dirty[2] & /*tabStyle*/
    4 && (e(7, ct = fi(y.active_font_weight || y.font_weight, void 0, ct)), y.font_family && typeof y.font_family == "string" ? e(27, Be = re.typefaceProvider(y.font_family, { fontWeight: ct || 400 })) : e(27, Be = ""), e(28, T = Ai(y.active_font_variation_settings))), t.$$.dirty[0] & /*tabInactiveFontWeight*/
    256 | t.$$.dirty[2] & /*tabStyle*/
    4 && (e(8, St = fi(y.inactive_font_weight || y.font_weight, void 0, St)), y.font_family && typeof y.font_family == "string" ? e(29, dt = re.typefaceProvider(y.font_family, { fontWeight: St || 400 })) : e(29, dt = ""), e(30, Ft = Ai(y.inactive_font_variation_settings))), t.$$.dirty[0] & /*tabActiveTextColor*/
    512 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(9, Pt = pr(y.active_text_color, 1, Pt)), t.$$.dirty[0] & /*tabInactiveTextColor*/
    1024 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(10, st = pr(y.inactive_text_color, 1, st)), t.$$.dirty[0] & /*tabActiveBackground*/
    2048 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(11, Q = pr(y.active_background_color, 1, Q)), t.$$.dirty[0] & /*tabInactiveBackground*/
    4096 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(12, Dt = pr(y.inactive_background_color, 1, Dt)), t.$$.dirty[0] & /*tabItemSpacing*/
    8192 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(13, Ot = un(y.item_spacing, Ot)), t.$$.dirty[0] & /*$jsonSeparator, $direction*/
    1572864 | t.$$.dirty[1] & /*separatorBackground*/
    1073741824 | t.$$.dirty[2] & /*$jsonSeparatorColor, $jsonSeparatorPaddings, separatorMargins*/
    1537 && xe && (x && e(61, nr = pr(x, 1, nr)), Ae && e(62, er = ds(Ae, _e, er))), t.$$.dirty[1] & /*separatorBackground*/
    1073741824 | t.$$.dirty[2] & /*separatorMargins*/
    1 && e(38, w = {
      background: nr,
      margin: er
    }), t.$$.dirty[2] & /*$jsonSwipeEnabled*/
    256 && e(37, D = typeof B > "u" ? !0 : !!B), t.$$.dirty[0] & /*titlePadding*/
    16384 | t.$$.dirty[2] & /*$jsonTitlePaddings*/
    128 && e(14, Ve = ui(C || void 0, Ve)), t.$$.dirty[0] & /*delimitierStyle*/
    32768 | t.$$.dirty[2] & /*$jsonDelimiterStyle*/
    64 && e(15, ur = Hm(M, ur)), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && ((O == null ? void 0 : O.animation_type) === "fade" || (O == null ? void 0 : O.animation_type) === "none") && e(16, sr = O.animation_type), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && Rn(O == null ? void 0 : O.animation_duration) && e(35, lr = O.animation_duration), t.$$.dirty[2] & /*items*/
    2 && wt(o), t.$$.dirty[0] & /*componentContext, hasError, selected*/
    131077 | t.$$.dirty[1] & /*prevId*/
    536870912 | t.$$.dirty[2] & /*items*/
    2 && te.json && (Xe && (re.unregisterInstance(Xe), e(60, Xe = void 0)), te.id && !ee && !te.fakeElement && (e(60, Xe = te.id), re.registerInstance(Xe, {
      setCurrentItem(Ke, ut) {
        if (Ke < 0 || Ke > o.length - 1)
          throw new Error('Item is out of range in "set-current-item" action');
        or(Ke, !1, ut);
      },
      setPreviousItem(Ke, ut, Yt) {
        let Ir = mt(h - Ke, ut);
        or(Ir, !1, Yt);
      },
      setNextItem(Ke, ut, Yt) {
        let Ir = mt(h + Ke, ut);
        or(Ir, !1, Yt);
      },
      scrollToStart(Ke) {
        or(0, !1, Ke);
      },
      scrollToEnd(Ke) {
        or(o.length - 1, !1, Ke);
      },
      scrollCombined({ step: Ke, overflow: ut, animated: Yt }) {
        Ke && or(mt(h + Ke, ut || "clamp"), !1, Yt || !0);
      }
    }))), t.$$.dirty[0] & /*componentContext, selected, animationType*/
    196609 | t.$$.dirty[2] & /*items*/
    2 && e(24, Et = {
      "height-parent": ((R = te.json.height) == null ? void 0 : R.type) === "match_parent" ? "yes" : "",
      "own-height": (((Ce = te.json.height) == null ? void 0 : Ce.type) === "match_parent" || ((Je = te.json.height) == null ? void 0 : Je.type) === "fixed") && !(((Lt = (L = (ke = o[h]) == null ? void 0 : ke.div) == null ? void 0 : L.height) == null ? void 0 : Lt.type) === "wrap_content" && ((Rt = o[h].div) != null && Rt.height.constrained)),
      animation: sr
    });
  }, [
    te,
    fe,
    ee,
    Oe,
    at,
    zt,
    de,
    ct,
    St,
    Pt,
    st,
    Q,
    Dt,
    Ot,
    Ve,
    ur,
    sr,
    h,
    z,
    _e,
    xe,
    lt,
    _t,
    it,
    Et,
    ht,
    Z,
    Be,
    T,
    dt,
    Ft,
    Ge,
    yt,
    tt,
    Le,
    lr,
    hr,
    D,
    w,
    m,
    p,
    _,
    f,
    c,
    u,
    l,
    a,
    i,
    ge,
    ve,
    qe,
    He,
    Bt,
    Ut,
    Cr,
    ft,
    Kt,
    tr,
    rt,
    ce,
    Xe,
    nr,
    er,
    o,
    y,
    s,
    n,
    O,
    M,
    C,
    B,
    Ae,
    x,
    Ct,
    ir,
    Gt,
    jr
  ];
}
class $m extends Wr {
  constructor(r) {
    super(), Hr(this, r, xm, Qm, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const e0 = "appkit-state", t0 = "appkit-state_overflow_visible", r0 = "appkit-state__animations", Vi = {
  state: e0,
  state_overflow_visible: t0,
  state__animations: r0,
  "state__animation-child": "appkit-state__animation-child",
  "state__animation-child-inner": "appkit-state__animation-child-inner"
};
function jl(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function n0(t) {
  return t * t * t;
}
function Kd(t) {
  const r = t - 1;
  return r * r * r + 1;
}
function Yd(t) {
  return (r) => {
    if (r <= 0)
      return 0;
    if (r >= 1)
      return 1;
    const e = r * t.length, n = Math.floor(e), o = t[n], i = t[n + 1], s = e - n;
    return o * s + i * (1 - s);
  };
}
const o0 = [
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
], i0 = Yd(o0), s0 = [
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
], l0 = Yd(s0), xl = {
  linear: ul,
  ease: i0,
  ease_in: n0,
  ease_out: Kd,
  ease_in_out: jl,
  spring: l0
};
function Va(t) {
  return xl[t];
}
const Xd = 200, Zd = 0, a0 = 0, u0 = 0;
function fc(t) {
  return Math.max(...t.map(
    (r) => (Number(r.duration) || Xd) + (Number(r.start_delay) || Zd)
  ));
}
function c0(t, {
  transitions: r,
  elementBbox: e,
  rootBbox: n,
  direction: o,
  maxDuration: i,
  alpha: s
}) {
  const a = s != null ? s : 1;
  return {
    duration: Ji() ? 0 : i,
    css: (l) => {
      const u = l * i, c = r.map((w) => {
        var Y, se, C;
        const D = Number(w.start_delay) || Zd, z = Number(w.duration) || Xd, O = Math.max(0, Math.min(1, (u - D) / z)), $ = o === "in" ? 1 - O : O, M = (Va(w.interpolator || "ease_in_out") || jl)($);
        if (w.type === "fade")
          return M >= 1 ? {
            active: !1,
            opacity: 0
          } : {
            active: M > 0 && M < 1,
            opacity: (1 - M) * a + M * (w.alpha || a0)
          };
        if (w.type === "slide") {
          const I = w.edge === "top" || w.edge === "left" ? -1 : 1, P = w.edge === "top" || w.edge === "bottom" || !w.edge ? "translateY" : "translateX";
          let B = (Y = w.distance) == null ? void 0 : Y.value;
          B === void 0 && (w.edge === "top" || w.edge === "bottom" || !w.edge ? B = Math.abs(
            n[w.edge === "bottom" ? "bottom" : "top"] - e[w.edge === "bottom" ? "top" : "bottom"]
          ) : B = Math.abs(
            n[w.edge === "left" ? "left" : "right"] - e[w.edge === "left" ? "right" : "left"]
          ));
          const q = B * M;
          return {
            active: M > 0 && M < 1,
            translate: `${P}(${q * I}px)`
          };
        } else if (w.type === "scale") {
          const I = 1 - M + M * (w.scale || u0), P = (se = w.pivot_x) != null ? se : 0.5, B = (C = w.pivot_y) != null ? C : 0.5, q = (1 - I) * e.width * P, pe = (1 - I) * e.height * B;
          return {
            active: M > 0 && M < 1,
            scale: `translate(${q}px, ${pe}px) scale(${I})`
          };
        }
        return {};
      }), f = c.map((w) => w.opacity).filter((w) => w !== void 0).reduce((w, D) => w * D, 1), _ = c.map((w) => w.translate).filter((w) => w !== void 0).join(" "), p = c.map((w) => w.scale).filter((w) => w !== void 0).join(" "), m = c.filter((w) => w.active).map((w) => w.scale).filter((w) => w !== void 0), h = m.length ? m[m.length - 1] : p;
      return `transform:${[_, h].filter(Boolean).join(" ") || "none"};opacity:${f}`;
    }
  };
}
function Xo(t, r, e) {
  return t * (1 - e) + r * e;
}
const f0 = 200, d0 = 0;
function _0(t, {
  rootBbox: r,
  beforeBbox: e,
  afterBbox: n,
  transition: o
}) {
  var i, s;
  return {
    delay: (i = o.start_delay) != null ? i : d0,
    duration: Ji() ? 0 : (s = o.duration) != null ? s : f0,
    easing: o.interpolator && o.interpolator in xl ? xl[o.interpolator] : jl,
    css: (a) => [
      `top:${Xo(e.top, n.top, a) - r.top}px`,
      `left:${Xo(e.left, n.left, a) - r.left}px`,
      `width:${Xo(e.width, n.width, a)}px`,
      `height:${Xo(e.height, n.height, a)}px`
    ].join(";")
  };
}
function Qd(t) {
  const r = [];
  return t.type === "set" ? (t.items || []).forEach((e) => {
    r.push(...Qd(e));
  }) : r.push(t), r;
}
const { Map: h0 } = Ro;
function dc(t, r, e) {
  const n = t.slice();
  return n[37] = r[e], n;
}
function p0(t) {
  let r, e;
  return r = new Pn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function g0(t) {
  let r, e;
  const n = [
    {
      cls: bt(
        "state",
        Vi,
        /*mods*/
        t[8]
      )
    },
    {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    },
    { layoutParams: (
      /*layoutParams*/
      t[1]
    ) },
    { parentOf: (
      /*parentOfItems*/
      t[9]
    ) },
    { parentOfSimpleMode: !0 },
    { replaceItems: (
      /*replaceItems*/
      t[12]
    ) },
    /*devapi*/
    t[11]
  ];
  let o = {
    $$slots: { default: [y0] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < n.length; i += 1)
    o = Do(o, n[i]);
  return r = new vn({ props: o }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(i) {
      Xt(r.$$.fragment, i);
    },
    m(i, s) {
      Ht(r, i, s), e = !0;
    },
    p(i, s) {
      const a = s[0] & /*mods, componentContext, layoutParams, parentOfItems, replaceItems, devapi*/
      6915 ? Ho(n, [
        s[0] & /*mods*/
        256 && {
          cls: bt(
            "state",
            Vi,
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
        2048 && Td(
          /*devapi*/
          i[11]
        )
      ]) : {};
      s[0] & /*animationRoot, animationList, selectedId, selectedComponentContext, childContexts*/
      248 | s[1] & /*$$scope*/
      4096 && (a.$$scope = { dirty: s, ctx: i }), r.$set(a);
    },
    i(i) {
      e || (G(r.$$.fragment, i), e = !0);
    },
    o(i) {
      oe(r.$$.fragment, i), e = !1;
    },
    d(i) {
      Wt(r, i);
    }
  };
}
function _c(t) {
  let r = (
    /*selectedId*/
    t[5]
  ), e, n, o = hc(t);
  return {
    c() {
      o.c(), e = Re();
    },
    l(i) {
      o.l(i), e = Re();
    },
    m(i, s) {
      o.m(i, s), K(i, e, s), n = !0;
    },
    p(i, s) {
      s[0] & /*selectedId*/
      32 && Tr(r, r = /*selectedId*/
      i[5]) ? (br(), oe(o, 1, 1, j), yr(), o = hc(i), o.c(), G(o, 1), o.m(e.parentNode, e)) : o.p(i, s);
    },
    i(i) {
      n || (G(o), n = !0);
    },
    o(i) {
      oe(o), n = !1;
    },
    d(i) {
      i && k(e), o.d(i);
    }
  };
}
function hc(t) {
  let r, e;
  return r = new oo({
    props: {
      componentContext: (
        /*selectedComponentContext*/
        t[6]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*selectedComponentContext*/
      64 && (i.componentContext = /*selectedComponentContext*/
      n[6]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function m0(t) {
  let r, e, n, o, i, s, a, l;
  n = new oo({
    props: {
      componentContext: (
        /*item*/
        t[37].componentContextCopy
      )
    }
  });
  function u() {
    return (
      /*introend_handler_1*/
      t[22](
        /*item*/
        t[37]
      )
    );
  }
  return {
    c() {
      r = Me("div"), e = Me("div"), Jt(n.$$.fragment), o = gr(), this.h();
    },
    l(c) {
      r = ze(c, "DIV", { class: !0 });
      var f = je(r);
      e = ze(f, "DIV", { class: !0 });
      var _ = je(e);
      Xt(n.$$.fragment, _), _.forEach(k), o = mr(f), f.forEach(k), this.h();
    },
    h() {
      g(e, "class", Vi["state__animation-child-inner"]), g(r, "class", Vi["state__animation-child"]);
    },
    m(c, f) {
      K(c, r, f), jt(r, e), Ht(n, e, null), jt(r, o), s = !0, a || (l = et(r, "introend", u), a = !0);
    },
    p(c, f) {
      t = c;
      const _ = {};
      f[0] & /*animationList*/
      16 && (_.componentContext = /*item*/
      t[37].componentContextCopy), n.$set(_);
    },
    i(c) {
      s || (G(n.$$.fragment, c), i || yo(() => {
        i = ml(
          r,
          _0,
          /*item*/
          t[37]
        ), i.start();
      }), s = !0);
    },
    o(c) {
      oe(n.$$.fragment, c), s = !1;
    },
    d(c) {
      c && k(r), Wt(n), a = !1, l();
    }
  };
}
function b0(t) {
  let r, e, n, o, i, s = `${/*item*/
  t[37].offsetLeft}px`, a = `${/*item*/
  t[37].offsetTop}px`, l = `${/*item*/
  t[37].width}px`, u = `${/*item*/
  t[37].height}px`, c, f, _;
  n = new oo({
    props: {
      componentContext: (
        /*item*/
        t[37].componentContextCopy
      )
    }
  });
  function p() {
    return (
      /*introend_handler*/
      t[21](
        /*item*/
        t[37]
      )
    );
  }
  return {
    c() {
      r = Me("div"), e = Me("div"), Jt(n.$$.fragment), o = gr(), this.h();
    },
    l(m) {
      r = ze(m, "DIV", { class: !0 });
      var h = je(r);
      e = ze(h, "DIV", { class: !0 });
      var y = je(e);
      Xt(n.$$.fragment, y), y.forEach(k), o = mr(h), h.forEach(k), this.h();
    },
    h() {
      g(e, "class", Vi["state__animation-child-inner"]), g(r, "class", Vi["state__animation-child"]), N(r, "left", s), N(r, "top", a), N(r, "width", l), N(r, "height", u);
    },
    m(m, h) {
      K(m, r, h), jt(r, e), Ht(n, e, null), jt(r, o), c = !0, f || (_ = et(r, "introend", p), f = !0);
    },
    p(m, h) {
      t = m;
      const y = {};
      h[0] & /*animationList*/
      16 && (y.componentContext = /*item*/
      t[37].componentContextCopy), n.$set(y), h[0] & /*animationList*/
      16 && s !== (s = `${/*item*/
      t[37].offsetLeft}px`) && N(r, "left", s), h[0] & /*animationList*/
      16 && a !== (a = `${/*item*/
      t[37].offsetTop}px`) && N(r, "top", a), h[0] & /*animationList*/
      16 && l !== (l = `${/*item*/
      t[37].width}px`) && N(r, "width", l), h[0] & /*animationList*/
      16 && u !== (u = `${/*item*/
      t[37].height}px`) && N(r, "height", u);
    },
    i(m) {
      c || (G(n.$$.fragment, m), i || yo(() => {
        i = ml(
          r,
          c0,
          /*item*/
          t[37]
        ), i.start();
      }), c = !0);
    },
    o(m) {
      oe(n.$$.fragment, m), c = !1;
    },
    d(m) {
      m && k(r), Wt(n), f = !1, _();
    }
  };
}
function pc(t, r) {
  let e, n, o, i, s;
  const a = [b0, m0], l = [];
  function u(c, f) {
    return "direction" in /*item*/
    c[37] ? 0 : 1;
  }
  return n = u(r), o = l[n] = a[n](r), {
    key: t,
    first: null,
    c() {
      e = Re(), o.c(), i = Re(), this.h();
    },
    l(c) {
      e = Re(), o.l(c), i = Re(), this.h();
    },
    h() {
      this.first = e;
    },
    m(c, f) {
      K(c, e, f), l[n].m(c, f), K(c, i, f), s = !0;
    },
    p(c, f) {
      r = c;
      let _ = n;
      n = u(r), n === _ ? l[n].p(r, f) : (br(), oe(l[_], 1, 1, () => {
        l[_] = null;
      }), yr(), o = l[n], o ? o.p(r, f) : (o = l[n] = a[n](r), o.c()), G(o, 1), o.m(i.parentNode, i));
    },
    i(c) {
      s || (G(o), s = !0);
    },
    o(c) {
      oe(o), s = !1;
    },
    d(c) {
      c && (k(e), k(i)), l[n].d(c);
    }
  };
}
function y0(t) {
  let r, e, n, o = [], i = new h0(), s, a = !1, l = (
    /*selectedComponentContext*/
    t[6] && _c(t)
  ), u = dr(
    /*animationList*/
    t[4]
  );
  const c = (f) => (
    /*item*/
    f[37]
  );
  for (let f = 0; f < u.length; f += 1) {
    let _ = dc(t, u, f), p = c(_);
    i.set(p, o[f] = pc(p, _));
  }
  return {
    c() {
      r = gr(), l && l.c(), e = gr(), n = Me("div");
      for (let f = 0; f < o.length; f += 1)
        o[f].c();
      this.h();
    },
    l(f) {
      r = mr(f), l && l.l(f), e = mr(f), n = ze(f, "DIV", { class: !0, "aria-hidden": !0 });
      var _ = je(n);
      for (let p = 0; p < o.length; p += 1)
        o[p].l(_);
      _.forEach(k), this.h();
    },
    h() {
      g(n, "class", Vi.state__animations), g(n, "aria-hidden", "true");
    },
    m(f, _) {
      K(f, r, _), l && l.m(f, _), K(f, e, _), K(f, n, _);
      for (let p = 0; p < o.length; p += 1)
        o[p] && o[p].m(n, null);
      t[23](n), s = !0;
    },
    p(f, _) {
      /*selectedComponentContext*/
      f[6] ? l ? (l.p(f, _), _[0] & /*selectedComponentContext*/
      64 && G(l, 1)) : (l = _c(f), l.c(), G(l, 1), l.m(e.parentNode, e)) : l && (br(), oe(l, 1, 1, () => {
        l = null;
      }), yr()), _[0] & /*animationList, onOutro*/
      8208 && (u = dr(
        /*animationList*/
        f[4]
      ), br(), o = Fd(o, _, c, 1, f, u, i, n, Id, pc, null, dc), yr());
    },
    i(f) {
      if (!s) {
        G(a), G(l);
        for (let _ = 0; _ < u.length; _ += 1)
          G(o[_]);
        s = !0;
      }
    },
    o(f) {
      oe(a), oe(l);
      for (let _ = 0; _ < o.length; _ += 1)
        oe(o[_]);
      s = !1;
    },
    d(f) {
      f && (k(r), k(e), k(n)), l && l.d(f);
      for (let _ = 0; _ < o.length; _ += 1)
        o[_].d();
      t[23](null);
    }
  };
}
function w0(t) {
  let r, e, n, o;
  const i = [g0, p0], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[2] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Re();
    },
    l(l) {
      e && e.l(l), n = Re();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (br(), oe(s[c], 1, 1, () => {
        s[c] = null;
      }), yr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      oe(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function v0(t) {
  return t.some((r) => r.type === "fade");
}
function xd(t) {
  return t.type === "change_bounds" ? t : t.type === "set" ? xd(t.items[0]) : null;
}
function k0(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, p = j, m = () => (p(), p = V(i, (ge) => e(20, _ = ge)), i);
  t.$$.on_destroy.push(() => p());
  let { componentContext: h } = r, { layoutParams: y = void 0 } = r;
  const w = zr($r);
  let D = !1, z, O = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Set(), ue = [], M = [], Y = [], se = [], C, I, P, B, q = !1, pe;
  function _e() {
    e(15, q = !1);
  }
  function Ae(ge) {
    P && P.destroy(), e(6, P = ge != null && ge.div ? h.produceChildContext(ge.div, {
      path: ge.state_id || "<unknown>"
    }) : void 0);
  }
  function be(ge) {
    const ye = h.json.states;
    if (!ye)
      return;
    const he = /* @__PURE__ */ new Set();
    e(16, u = ye.map((te, fe) => (u[fe].div !== ge[fe] && te.state_id && he.add(te.state_id), { ...te, div: ge[fe] }))), e(0, h.json = { ...h.json, states: u }, h), I && he.has(I) && Ae(u.find((te) => te.state_id === I) || null);
  }
  function Ie(ge, ye, he) {
    let { json: te, parentComponentContext: fe, transitions: re, node: ve } = ye;
    te = h.getJsonWithVars(te), re = h.getJsonWithVars(re);
    const qe = Qd(re), Xe = ye.bbox || ve.getBoundingClientRect(), ee = {
      ...te,
      margins: void 0,
      alpha: v0(qe) ? void 0 : te.alpha
    };
    return {
      id: fe.id || "",
      json: ee,
      componentContextCopy: fe.produceChildContext(ee, { fake: Za }),
      elementBbox: Xe,
      rootBbox: ge,
      transitions: qe,
      alpha: te.alpha,
      width: Xe.width,
      height: Xe.height,
      offsetTop: Xe.top - ge.top,
      offsetLeft: Xe.left - ge.left,
      direction: he,
      resolvePromise: ye.resolvePromise,
      node: ye.node
    };
  }
  async function x(ge) {
    if (I === ge)
      return h;
    w.setRunning("stateChange", !0);
    const ye = new Set($);
    ue.forEach((ee) => {
      ee.resolvePromise && ee.resolvePromise();
    }), e(4, ue = []);
    let he = [];
    if (z) {
      const ee = z.getBoundingClientRect();
      he = Y.map((He) => Ie(ee, He, "out"));
    }
    se.forEach((ee) => {
      ee.transitions && O.set(ee.id, {
        transitions: ee.transitions,
        rect: ee.node.getBoundingClientRect()
      });
    }), M = [], Y = [], se = [];
    const te = u.find((ee) => ee.state_id === ge) || null;
    if (te ? (e(5, I = ge), a == null || a.setValue(I), Ae(te)) : h.logError(X(new Error("Cannot find state with id"), { additional: { stateId: ge } })), await Fn(), !z)
      return;
    const fe = z.getBoundingClientRect();
    let re = M.filter((ee) => {
      var He;
      return ee.parentComponentContext.id && !ye.has(ee.parentComponentContext.id) ? !0 : ((He = ee.resolvePromise) == null || He.call(ee), !1);
    }).map((ee) => Ie(fe, ee, "in"));
    he = he.filter((ee) => {
      var He;
      return ee.id && !$.has(ee.id) ? !0 : ((He = ee.resolvePromise) == null || He.call(ee), !1);
    });
    const ve = he.concat(re), qe = ve.reduce(
      (ee, He) => Math.max(ee, fc(He.transitions)),
      0
    ), Xe = se.filter((ee) => O.has(ee.id)).map((ee) => {
      const He = {
        ...ee.json,
        margins: void 0,
        width: { type: "match_parent" },
        height: { type: "match_parent" }
      }, Oe = O.get(ee.id);
      return {
        id: ee.parentComponentContext.id || "",
        json: He,
        componentContextCopy: ee.parentComponentContext.produceChildContext(He, { fake: Za }),
        rootBbox: fe,
        beforeBbox: Oe.rect,
        afterBbox: ee.node.getBoundingClientRect(),
        node: ee.node,
        transition: h.getJsonWithVars(xd(Oe.transitions)),
        resolvePromise: ee.resolvePromise
      };
    });
    return e(4, ue = [
      ...ve.map((ee) => ({ ...ee, maxDuration: qe })),
      ...Xe
    ]), O.clear(), w.setRunning("stateChange", !1), h;
  }
  ki(ka, {
    // eslint-disable-next-line max-params
    runVisibilityTransition(ge, ye, he, te, fe, re) {
      if (!z)
        return Promise.resolve();
      const ve = z.getBoundingClientRect(), qe = Ie(
        ve,
        {
          json: ge,
          parentComponentContext: ye,
          transitions: he,
          node: te,
          bbox: re
        },
        fe
      ), Xe = fc(qe.transitions), ee = { ...qe, maxDuration: Xe };
      return e(4, ue = [...ue.filter((He) => He.node !== qe.node), ee]), new Promise((He) => {
        ee.resolvePromise = He;
      });
    },
    registerChildWithTransitionIn(ge, ye, he, te) {
      const fe = {
        json: ge,
        parentComponentContext: ye,
        transitions: he,
        node: te
      };
      return M.push(fe), new Promise((re) => {
        fe.resolvePromise = re;
      });
    },
    registerChildWithTransitionOut(ge, ye, he, te) {
      const fe = {
        json: ge,
        parentComponentContext: ye,
        transitions: he,
        node: te
      };
      return Y.push(fe), new Promise((re) => {
        fe.resolvePromise = re;
      });
    },
    registerChildWithTransitionChange(ge, ye, he, te) {
      const fe = ye.id;
      if (!fe)
        return Promise.resolve();
      const re = {
        id: fe,
        json: ge,
        parentComponentContext: ye,
        transitions: he,
        node: te
      };
      return se.push(re), new Promise((ve) => {
        re.resolvePromise = ve;
      });
    },
    hasTransitionChange(ge) {
      return ge ? O.has(ge) : !1;
    },
    registerChild(ge) {
      $.add(ge);
    },
    unregisterChild(ge) {
      $.delete(ge);
    }
  });
  function Ye(ge) {
    if (!q && (e(15, q = !0), ge.length)) {
      const ye = (a == null ? void 0 : a.getValue()) || o;
      if (ye) {
        e(5, I = ye);
        const he = ge.find((te) => te.state_id === I) || null;
        Ae(he), he || h.logError(X(new Error("Cannot find state for default_state_id"), { additional: { selectedId: I } }));
      } else {
        const he = ge[0];
        e(5, I = he.state_id), Ae(he);
      }
      a && (a.setValue(I), a.subscribe((he) => {
        x(he);
      }));
    }
  }
  function Qe(ge) {
    e(4, ue = ue.filter((ye) => ye !== ge)), ge.resolvePromise && ge.resolvePromise();
  }
  dn(() => {
    P && P.destroy(), C && (C(), e(14, C = void 0));
  });
  const xe = (ge) => Qe(ge), we = (ge) => Qe(ge);
  function Te(ge) {
    Mr[ge ? "unshift" : "push"](() => {
      z = ge, e(3, z);
    });
  }
  return t.$$set = (ge) => {
    "componentContext" in ge && e(0, h = ge.componentContext), "layoutParams" in ge && e(1, y = ge.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*componentContext*/
    1 && e(17, n = h.json.div_id || h.id), t.$$.dirty[0] & /*componentContext*/
    1 && (o = h.getJsonWithVars(h.json.default_state_id)), t.$$.dirty[0] & /*componentContext*/
    1 && m(e(10, i = h.getDerivedFromVars(h.json.clip_to_bounds))), t.$$.dirty[0] & /*componentContext*/
    1 && e(19, s = h.json.state_id_variable), t.$$.dirty[0] & /*stateVariableName, componentContext*/
    524289 && (a = s ? h.getVariable(s, "string") || w.awaitGlobalVariable(s, "string", "") : null), t.$$.dirty[0] & /*componentContext*/
    1 && e(18, l = h.origJson), t.$$.dirty[0] & /*origJson*/
    262144 && l && _e(), t.$$.dirty[0] & /*stateId, componentContext*/
    131073 && (n ? e(2, D = !1) : (e(2, D = !0), h.logError(X(new Error('Missing "id" prop for div "state"'))))), t.$$.dirty[0] & /*componentContext*/
    1 && h.json && ($ = /* @__PURE__ */ new Set()), t.$$.dirty[0] & /*componentContext*/
    1 && e(16, u = Array.isArray(h.json.states) && h.json.states || []), t.$$.dirty[0] & /*items*/
    65536 && e(9, c = u.map((ge) => {
      var ye;
      return { json: ge.div, id: (ye = ge.div) == null ? void 0 : ye.id };
    })), t.$$.dirty[0] & /*items, componentContext*/
    65537 && (u != null && u.length ? e(2, D = !1) : (e(2, D = !0), h.logError(X(new Error('Empty "states" prop for div "state"'))))), t.$$.dirty[0] & /*componentContext, stateUnregister, stateId*/
    147457 && h.json && (C && (C(), e(14, C = void 0)), n && !(h != null && h.fakeElement) && e(14, C = h.registerState(n, x))), t.$$.dirty[0] & /*inited, items*/
    98304 && !q && Ye(u), t.$$.dirty[0] & /*$jsonClipToBounds*/
    1048576 && e(8, f = {
      overflow: _ === !1 || _ === 0 ? "visible" : void 0
    });
  }, [
    h,
    y,
    D,
    z,
    ue,
    I,
    P,
    B,
    f,
    c,
    i,
    pe,
    be,
    Qe,
    C,
    q,
    u,
    n,
    l,
    s,
    _,
    xe,
    we,
    Te
  ];
}
class j0 extends Wr {
  constructor(r) {
    super(), Hr(this, r, k0, w0, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const E0 = "appkit-pager", C0 = "appkit-pager__items", A0 = "appkit-pager_animated", V0 = "appkit-pager__item", S0 = "appkit-pager_clip", D0 = "appkit-pager_orientation_horizontal", I0 = "appkit-pager_orientation_vertical", F0 = "appkit-pager__item_height_content", T0 = "appkit-pager__item_height_fixed", M0 = "appkit-pager__item_width_content", P0 = "appkit-pager__item_width_fixed", N0 = "appkit-pager__arrow", Lo = {
  pager: E0,
  pager__items: C0,
  pager_animated: A0,
  pager__item: V0,
  "pager_scroll-align_start": "appkit-pager_scroll-align_start",
  "pager_scroll-align_center": "appkit-pager_scroll-align_center",
  "pager_scroll-align_end": "appkit-pager_scroll-align_end",
  pager_clip: S0,
  pager_orientation_horizontal: D0,
  pager_orientation_vertical: I0,
  "pager_cross-align_center": "appkit-pager_cross-align_center",
  "pager_cross-align_end": "appkit-pager_cross-align_end",
  pager__item_height_content: F0,
  pager__item_height_fixed: T0,
  "pager__item_height-constrained": "appkit-pager__item_height-constrained",
  pager__item_width_content: M0,
  pager__item_width_fixed: P0,
  "pager__item_width-constrained": "appkit-pager__item_width-constrained",
  pager__arrow: N0,
  "pager__arrow-icon-path": "appkit-pager__arrow-icon-path"
}, { window: z0 } = Ro;
function gc(t, r, e) {
  const n = t.slice();
  return n[95] = r[e], n;
}
function O0(t) {
  let r, e;
  return r = new Pn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function B0(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: bt(
        "pager",
        Lo,
        /*mods*/
        t[13]
      ),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      customPaddings: !0,
      parentOf: (
        /*items*/
        t[3]
      ),
      replaceItems: (
        /*replaceItems*/
        t[30]
      ),
      $$slots: { default: [H0] },
      $$scope: { ctx: t }
    }
  }), r.$on(
    "pointerdown",
    /*onPointerDown*/
    t[35]
  ), r.$on(
    "wheel",
    /*onWheel*/
    t[36]
  ), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      8192 && (i.cls = bt(
        "pager",
        Lo,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function mc(t) {
  let r, e, n, o, i, s, a;
  return e = new oo({
    props: {
      componentContext: (
        /*item*/
        t[95].componentContext
      ),
      layoutParams: (
        /*childLayoutParams*/
        t[9]
      )
    }
  }), {
    c() {
      r = Me("div"), Jt(e.$$.fragment), n = gr(), this.h();
    },
    l(l) {
      r = ze(l, "DIV", {
        class: !0,
        role: !0,
        id: !0,
        "aria-labelledby": !0
      });
      var u = je(r);
      Xt(e.$$.fragment, u), n = mr(u), u.forEach(k), this.h();
    },
    h() {
      g(r, "class", o = bt("pager__item", Lo, wc(
        /*orientation*/
        t[2],
        /*item*/
        t[95]
      ))), g(r, "role", "tabpanel"), g(r, "id", i = /*instId*/
      t[26] + "-panel-" + /*item*/
      t[95].index), g(r, "aria-labelledby", s = /*instId*/
      t[26] + "-tab-" + /*item*/
      t[95].index);
    },
    m(l, u) {
      K(l, r, u), Ht(e, r, null), jt(r, n), a = !0;
    },
    p(l, u) {
      const c = {};
      u[0] & /*visibleItems*/
      16 && (c.componentContext = /*item*/
      l[95].componentContext), u[0] & /*childLayoutParams*/
      512 && (c.layoutParams = /*childLayoutParams*/
      l[9]), e.$set(c), (!a || u[0] & /*orientation, visibleItems*/
      20 && o !== (o = bt("pager__item", Lo, wc(
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
      a || (G(e.$$.fragment, l), a = !0);
    },
    o(l) {
      oe(e.$$.fragment, l), a = !1;
    },
    d(l) {
      l && k(r), Wt(e);
    }
  };
}
function bc(t) {
  let r, e, n, o = !/*leftClass*/
  t[27] && L0();
  return {
    c() {
      r = Me("div"), o && o.c(), this.h();
    },
    l(i) {
      r = ze(i, "DIV", { class: !0 });
      var s = je(r);
      o && o.l(s), s.forEach(k), this.h();
    },
    h() {
      g(
        r,
        "class",
        /*leftClass*/
        t[27] || `${Lo.pager__arrow} ${vo.arrow} ${vo.arrow_left}`
      );
    },
    m(i, s) {
      K(i, r, s), o && o.m(r, null), e || (n = et(
        r,
        "click",
        /*click_handler*/
        t[70]
      ), e = !0);
    },
    p: j,
    d(i) {
      i && k(r), o && o.d(), e = !1, n();
    }
  };
}
function L0(t) {
  let r, e;
  return {
    c() {
      r = tn("svg"), e = tn("path"), this.h();
    },
    l(n) {
      r = an(n, "svg", {
        class: !0,
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0
      });
      var o = je(r);
      e = an(o, "path", { class: !0, d: !0 }), je(e).forEach(k), o.forEach(k), this.h();
    },
    h() {
      g(e, "class", Lo["pager__arrow-icon-path"]), g(e, "d", "m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"), g(r, "class", vo.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      K(n, r, o), jt(r, e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function yc(t) {
  let r, e, n, o = !/*rightClass*/
  t[28] && R0();
  return {
    c() {
      r = Me("div"), o && o.c(), this.h();
    },
    l(i) {
      r = ze(i, "DIV", { class: !0 });
      var s = je(r);
      o && o.l(s), s.forEach(k), this.h();
    },
    h() {
      g(
        r,
        "class",
        /*rightClass*/
        t[28] || `${Lo.pager__arrow} ${vo.arrow} ${vo.arrow_right}`
      );
    },
    m(i, s) {
      K(i, r, s), o && o.m(r, null), e || (n = et(
        r,
        "click",
        /*click_handler_1*/
        t[71]
      ), e = !0);
    },
    p: j,
    d(i) {
      i && k(r), o && o.d(), e = !1, n();
    }
  };
}
function R0(t) {
  let r, e;
  return {
    c() {
      r = tn("svg"), e = tn("path"), this.h();
    },
    l(n) {
      r = an(n, "svg", {
        class: !0,
        xmlns: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        fill: !0
      });
      var o = je(r);
      e = an(o, "path", { class: !0, d: !0 }), je(e).forEach(k), o.forEach(k), this.h();
    },
    h() {
      g(e, "class", Lo["pager__arrow-icon-path"]), g(e, "d", "M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"), g(r, "class", vo.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      K(n, r, o), jt(r, e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function H0(t) {
  let r, e, n, o, i, s, a, l, u, c = dr(
    /*visibleItems*/
    t[4]
  ), f = [];
  for (let h = 0; h < c.length; h += 1)
    f[h] = mc(gc(t, c, h));
  const _ = (h) => oe(f[h], 1, 1, () => {
    f[h] = null;
  });
  let p = (
    /*hasScrollLeft*/
    t[11] && /*shouldCheckArrows*/
    t[12] && bc(t)
  ), m = (
    /*hasScrollRight*/
    t[10] && /*shouldCheckArrows*/
    t[12] && yc(t)
  );
  return {
    c() {
      r = Me("div");
      for (let h = 0; h < f.length; h += 1)
        f[h].c();
      o = gr(), p && p.c(), i = gr(), m && m.c(), s = Re(), this.h();
    },
    l(h) {
      r = ze(h, "DIV", { class: !0, style: !0 });
      var y = je(r);
      for (let w = 0; w < f.length; w += 1)
        f[w].l(y);
      y.forEach(k), o = mr(h), p && p.l(h), i = mr(h), m && m.l(h), s = Re(), this.h();
    },
    h() {
      g(r, "class", e = Lo.pager__items + " " + /*$jsonRestrictParentScroll*/
      (t[24] ? Fr["root_restrict-scroll"] : "")), g(r, "style", n = _r(
        /*style*/
        t[14]
      ));
    },
    m(h, y) {
      K(h, r, y);
      for (let w = 0; w < f.length; w += 1)
        f[w] && f[w].m(r, null);
      t[69](r), K(h, o, y), p && p.m(h, y), K(h, i, y), m && m.m(h, y), K(h, s, y), a = !0, l || (u = [
        et(
          r,
          "transitionend",
          /*onTransitionEnd*/
          t[37]
        ),
        et(
          r,
          "focus",
          /*onFocus*/
          t[33],
          !0
        ),
        et(
          r,
          "click",
          /*onItemsClick*/
          t[34],
          !0
        )
      ], l = !0);
    },
    p(h, y) {
      if (y[0] & /*orientation, visibleItems, instId, childLayoutParams*/
      67109396) {
        c = dr(
          /*visibleItems*/
          h[4]
        );
        let w;
        for (w = 0; w < c.length; w += 1) {
          const D = gc(h, c, w);
          f[w] ? (f[w].p(D, y), G(f[w], 1)) : (f[w] = mc(D), f[w].c(), G(f[w], 1), f[w].m(r, null));
        }
        for (br(), w = c.length; w < f.length; w += 1)
          _(w);
        yr();
      }
      (!a || y[0] & /*$jsonRestrictParentScroll*/
      16777216 && e !== (e = Lo.pager__items + " " + /*$jsonRestrictParentScroll*/
      (h[24] ? Fr["root_restrict-scroll"] : ""))) && g(r, "class", e), (!a || y[0] & /*style*/
      16384 && n !== (n = _r(
        /*style*/
        h[14]
      ))) && g(r, "style", n), /*hasScrollLeft*/
      h[11] && /*shouldCheckArrows*/
      h[12] ? p ? p.p(h, y) : (p = bc(h), p.c(), p.m(i.parentNode, i)) : p && (p.d(1), p = null), /*hasScrollRight*/
      h[10] && /*shouldCheckArrows*/
      h[12] ? m ? m.p(h, y) : (m = yc(h), m.c(), m.m(s.parentNode, s)) : m && (m.d(1), m = null);
    },
    i(h) {
      if (!a) {
        for (let y = 0; y < c.length; y += 1)
          G(f[y]);
        a = !0;
      }
    },
    o(h) {
      f = f.filter(Boolean);
      for (let y = 0; y < f.length; y += 1)
        oe(f[y]);
      a = !1;
    },
    d(h) {
      h && (k(r), k(o), k(i), k(s)), hn(f, h), t[69](null), p && p.d(h), m && m.d(h), l = !1, Gr(u);
    }
  };
}
function W0(t) {
  let r, e, n, o, i, s;
  const a = [B0, O0], l = [];
  function u(c, f) {
    return (
      /*hasError*/
      c[5] ? -1 : 0
    );
  }
  return ~(r = u(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = Re();
    },
    l(c) {
      e && e.l(c), n = Re();
    },
    m(c, f) {
      ~r && l[r].m(c, f), K(c, n, f), o = !0, i || (s = et(
        z0,
        "resize",
        /*resnap*/
        t[38]
      ), i = !0);
    },
    p(c, f) {
      let _ = r;
      r = u(c), r === _ ? ~r && l[r].p(c, f) : (e && (br(), oe(l[_], 1, 1, () => {
        l[_] = null;
      }), yr()), ~r ? (e = l[r], e ? e.p(c, f) : (e = l[r] = a[r](c), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(c) {
      o || (G(e), o = !0);
    },
    o(c) {
      oe(e), o = !1;
    },
    d(c) {
      c && k(n), ~r && l[r].d(c), i = !1, s();
    }
  };
}
const vs = {
  wrap_content: "content",
  fixed: "fixed",
  match_parent: "parent"
}, Co = 2, U0 = 400, G0 = 8;
function wc(t, r) {
  var n, o, i, s;
  if (t === "horizontal") {
    const a = ((n = r.height) == null ? void 0 : n.type) || "";
    return {
      height: a in vs ? vs[a] : "content",
      "height-constrained": ((o = r.height) == null ? void 0 : o.type) === "wrap_content" ? en(r.height.constrained, !1) : !1
    };
  }
  const e = ((i = r.width) == null ? void 0 : i.type) || "";
  return {
    width: e in vs ? vs[e] : "parent",
    "width-constrained": ((s = r.width) == null ? void 0 : s.type) === "wrap_content" ? en(r.width.constrained, !1) : !1
  };
}
function J0(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, p, m, h, y, w, D, z, O, $, ue, M, Y = j, se = () => (Y(), Y = V(c, (E) => e(60, M = E)), c), C, I = j, P = () => (I(), I = V(i, (E) => e(61, C = E)), i), B, q = j, pe = () => (q(), q = V(f, (E) => e(62, B = E)), f), _e, Ae = j, be = () => (Ae(), Ae = V(l, (E) => e(63, _e = E)), l), Ie, x = j, Ye = () => (x(), x = V(a, (E) => e(64, Ie = E)), a), Qe, xe = j, we = () => (xe(), xe = V(s, (E) => e(65, Qe = E)), s), Te, ge = j, ye = () => (ge(), ge = V(Be, (E) => e(66, Te = E)), Be), he, te = j, fe = () => (te(), te = V(o, (E) => e(67, he = E)), o), re, ve = j, qe = () => (ve(), ve = V(_, (E) => e(68, re = E)), _), Xe, ee = j, He = () => (ee(), ee = V(u, (E) => e(24, Xe = E)), u);
  t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => q()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => x()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => te()), t.$$.on_destroy.push(() => ve()), t.$$.on_destroy.push(() => ee());
  let { componentContext: Oe } = r, { layoutParams: lt = void 0 } = r;
  const _t = zr($r), it = _t.direction;
  kn(t, it, (E) => e(6, $ = E));
  const Et = _t.genId("pager"), at = _t.getCustomization("pagerLeftClass"), zt = _t.getCustomization("pagerRightClass"), ht = _t.isDesktop;
  kn(t, ht, (E) => e(59, ue = E));
  let Z, de, ct = !1, Be, T = 0, St = 0, dt = !1, Ft = "horizontal", Pt = "0em", st = {}, Q = "", Dt = "", Ot = "", nr = {}, er = "start", Ve = "center", Ge = [], yt = 0, Pe = [], tt = {}, Le = {}, Tt, We, vt = 0, qt = !1, Nt = !1, ar = !1, Fe = !1, At = 0, ur = "", sr = 0, lr;
  function hr() {
    e(43, st = {}), e(9, nr = {}), e(47, er = "start"), e(48, Ve = "center"), e(52, qt = !1), e(53, Nt = !1), Fe = !1;
  }
  function Er(E) {
    e(0, Oe = e(51, Tt = {
      ...Oe,
      json: {
        ...Oe.json,
        items: E.filter(Wo)
      }
    }));
  }
  function Bt(E, ie) {
    We && We.update({
      instId: Et,
      currentItem: Le[ie],
      size: E,
      scrollToPagerItem(d) {
        or(tt[d]);
      }
    });
  }
  function kr(E) {
    var d;
    if (E === St || (St = E, !Ge[E]))
      return;
    const ie = (d = Ge[E].json) == null ? void 0 : d.selected_actions;
    ie != null && ie.length && Oe.execAnyActions(ie);
  }
  function Ut(E) {
    const ie = Nt ? !1 : E === 0, d = Nt ? !1 : E === Pe.length - 1, R = Ft === "horizontal", Ce = de.children[E + (Nt ? Co : 0)];
    if (!Ce)
      return 0;
    const Je = R ? "offsetLeft" : "offsetTop", ke = R ? "offsetWidth" : "offsetHeight", L = ft(), Lt = Ur(), Rt = fr(), Ke = It();
    return L >= Ke + Lt + Rt || ie ? 0 : d ? (L - Lt - Rt - Ke) * ($ === "rtl" ? -1 : 1) : Ve === "start" && $ === "ltr" || Ve === "end" && $ === "rtl" ? -(Ce[Je] - Lt) : Ve === "end" && $ === "ltr" || Ve === "start" && $ === "rtl" ? -(Ce[Je] + Ce[ke] - L + Rt) : de[ke] / 2 - (Ce[Je] + Ce[ke] / 2);
  }
  function wt(E, ie) {
    if (!de)
      return;
    const d = Ut(E);
    e(54, ar = ie), Fn().then(() => {
      var R;
      At = d, e(55, ur = le(At)), e(40, T = (R = tt[E]) != null ? R : 0), Fe = Nt && (E < 0 || E >= yt);
    });
  }
  function or(E, ie = !0) {
    var d;
    wt((d = Le[E]) != null ? d : 0, ie);
  }
  function le(E) {
    return `${Ft === "horizontal" ? "translateX" : "translateY"}(${pn(E)})`;
  }
  function Cr(E, ie) {
    return Nt && E >= -Co && E < yt + Co ? E : E > Pe.length - 1 ? ie === "ring" ? Po(E, Pe.length) : Pe.length - 1 : E < 0 ? ie === "ring" ? Po(E, Pe.length) : 0 : E;
  }
  function Ar(E, ie, d) {
    const R = Cr(Le[T] - E, ie);
    wt(R, d);
  }
  function Vt(E, ie, d) {
    const R = Cr(Le[T] + E, ie);
    wt(R, d);
  }
  function Pr() {
    We == null || We.destroy(), We = void 0, Z && (_t.unregisterInstance(Z), Z = void 0), Oe.fakeElement || (We = Oe.registerPager(Oe.id || void 0)), Oe.id && !Oe.fakeElement && (Z = Oe.id, _t.registerInstance(
      Z,
      {
        setCurrentItem(E, ie) {
          if (E < 0 || E > Ge.length - 1)
            throw new Error('Item is out of range in "set-current-item" action');
          or(E, ie);
        },
        setPreviousItem: Ar,
        setNextItem: Vt,
        scrollToStart(E) {
          or(Pe[Nt ? Co : 0].index, E);
        },
        scrollToEnd(E) {
          or(Pe[Pe.length - 1 - (Nt ? Co : 0)].index, E);
        },
        scrollCombined({ step: E, overflow: ie, animated: d }) {
          E && or(Cr(Le[T] + E, ie || "clamp"), d);
        }
      },
      "warn"
    ));
  }
  function Ur() {
    var ie, d, R;
    return Ft === "horizontal" ? (d = (ie = st.start) != null ? ie : $ === "ltr" ? st.left : st.right) != null ? d : 0 : (R = st.top) != null ? R : 0;
  }
  function fr() {
    var ie, d, R;
    return Ft === "horizontal" ? (d = (ie = st.end) != null ? ie : $ === "ltr" ? st.right : st.left) != null ? d : 0 : (R = st.bottom) != null ? R : 0;
  }
  function ft() {
    var ie, d;
    return de ? Ft === "horizontal" ? ((ie = de.parentElement) == null ? void 0 : ie.offsetWidth) || 0 : ((d = de.parentElement) == null ? void 0 : d.offsetHeight) || 0 : 0;
  }
  function It() {
    const E = Ft === "horizontal", ie = Array.from(de.children), d = ie[0].getBoundingClientRect(), R = ie[ie.length - 1].getBoundingClientRect();
    return E ? $ === "rtl" ? d.right - R.left : R.right - d.left : R.bottom - d.top;
  }
  function Kt(E) {
    const ie = E.target;
    if (!(ie instanceof Element) || !de)
      return;
    let d = ie;
    for (; d.parentElement && d.parentElement !== de; )
      d = d.parentElement;
    if (!d)
      return;
    const R = Array.from(de.children).indexOf(d);
    if (R < 0)
      return;
    const Ce = R - (Nt ? Co : 0);
    wt(Ce, !0);
  }
  function tr(E) {
    Date.now() - sr < 300 && (E.preventDefault(), E.stopImmediatePropagation());
  }
  function rt(E) {
    if (!_t.pagerMouseDragEnabled && E.pointerType === "mouse")
      return;
    const ie = Ft === "horizontal", d = ie ? E.pageX : E.pageY, R = At, Ce = ft() - Ur() - fr(), Je = It(), ke = Date.now(), L = (Rt) => {
      const Ke = ie ? Rt.pageX : Rt.pageY;
      let ut = R + Ke - d;
      if (!Nt) {
        if ($ === "rtl") {
          if (ut < 0)
            ut = ut * Ce / (ut + Ce * 3);
          else if (ut + Ce > Je) {
            let Yt = ut + Ce - Je;
            Yt = Yt * Ce / (Yt + Ce * 3), ut = -Ce + Je + Yt;
          }
        } else if ($ === "ltr") {
          if (ut > 0)
            ut = ut * Ce / (ut + Ce * 3);
          else if (-ut + Ce > Je) {
            let Yt = -ut + Ce - Je;
            Yt = Yt * Ce / (Yt + Ce * 3), ut = Ce - Je - Yt;
          }
        }
      }
      At = ut, e(55, ur = le(At)), Rt.preventDefault();
    }, Lt = (Rt) => {
      lr == null || lr(), lr = void 0;
      const Ke = Math.min(512, Ce), ut = Math.abs(R - At);
      if (ut < G0) {
        wt(Le[T], !0);
        return;
      }
      Rt.preventDefault(), sr = Date.now();
      const Yt = Math.min(1, (Date.now() - ke) / 750);
      let Ir = Le[T];
      ut > Ke / 4 * Yt && (Ir += (R > At ? 1 : -1) * ($ === "rtl" ? -1 : 1)), Nt || (Ir >= Pe.length ? Ir = Pe.length - 1 : Ir < 0 && (Ir = 0)), wt(Ir, !0);
    };
    window.addEventListener("pointermove", L), window.addEventListener("pointerup", Lt), window.addEventListener("pointercancel", Lt), lr == null || lr(), lr = () => {
      window.removeEventListener("pointermove", L), window.removeEventListener("pointerup", Lt), window.removeEventListener("pointercancel", Lt);
    };
  }
  function mt(E) {
    if (!E.deltaX || Math.abs(E.deltaX) < Math.abs(E.deltaY))
      return;
    const ie = Date.now();
    if (ie - vt < U0)
      return;
    vt = ie, ($ === "rtl" ? -1 : 1) * E.deltaX > 0 ? Vt(1, "clamp", !0) : Ar(1, "clamp", !0);
  }
  function ce() {
    e(54, ar = !1), Fe && Fn().then(() => {
      or(T, !1);
    });
  }
  function Ct() {
    Fn().then(() => {
      or(T, !1);
    });
  }
  no(() => {
    e(39, ct = !0), de && or(T, !1);
  }), dn(() => {
    e(39, ct = !1), lr == null || lr(), Ge.forEach((E) => {
      E.destroy();
    }), Z && (_t.unregisterInstance(Z), Z = void 0), We == null || We.destroy(), We = void 0;
  });
  function ir(E) {
    Mr[E ? "unshift" : "push"](() => {
      de = E, e(7, de);
    });
  }
  const Gt = () => ($ === "ltr" ? Ar : Vt)(1, "clamp", !0), jr = () => ($ === "ltr" ? Vt : Ar)(1, "clamp", !0);
  return t.$$set = (E) => {
    "componentContext" in E && e(0, Oe = E.componentContext), "layoutParams" in E && e(1, lt = E.layoutParams);
  }, t.$$.update = () => {
    var E, ie, d, R, Ce;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(58, n = Oe.origJson), t.$$.dirty[1] & /*origJson*/
    134217728 && n && hr(), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(23, o = typeof ((E = Oe.json.item_builder) == null ? void 0 : E.data) == "string" ? Oe.getDerivedFromVars((ie = Oe.json.item_builder) == null ? void 0 : ie.data, void 0, !0) : (d = Oe.json.item_builder) != null && d.data ? Qo(Oe.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && P(e(22, i = Oe.getDerivedFromVars(Oe.json.layout_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && we(e(21, s = Oe.getDerivedFromVars(Oe.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(20, a = Oe.getDerivedFromVars(Oe.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(19, l = Oe.getDerivedFromVars(Oe.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && He(e(18, u = Oe.getDerivedFromVars(Oe.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && se(e(17, c = Oe.getDerivedFromVars(Oe.json.cross_axis_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && pe(e(16, f = Oe.getDerivedFromVars(Oe.json.scroll_axis_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(15, _ = Oe.getDerivedFromVars(Oe.json.infinite_scroll))), t.$$.dirty[1] & /*infinite*/
    2097152 | t.$$.dirty[2] & /*$jsonInfiniteScroll*/
    64 && e(52, qt = en(re, qt)), t.$$.dirty[0] & /*componentContext, items*/
    9 | t.$$.dirty[1] & /*prevContext*/
    1048576 | t.$$.dirty[2] & /*$jsonItemBuilderData*/
    32) {
      let Je = [];
      if (Oe.json.item_builder && Array.isArray(he) && Array.isArray(Oe.json.item_builder.prototypes)) {
        const Rt = Oe.json.item_builder;
        Je = kl(he, _t, Oe, Rt);
      } else
        Je = (Array.isArray(Oe.json.items) && Oe.json.items || []).map((Rt, Ke) => ({
          div: Rt,
          key: Rt.id || { index: Ke, data: Rt }
        }));
      const ke = new Set(Ge), L = /* @__PURE__ */ new Map();
      let Lt = !1;
      Tt === Oe && Ge.forEach((Rt) => {
        Rt.key && (typeof Rt.key == "string" && L.has(Rt.key) ? Lt || (Lt = !0, Oe.logError(X(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: Rt.key } }))) : L.set(
          typeof Rt.key == "string" ? Rt.key : Rt.key.index,
          Rt
        ));
      }), e(3, Ge = Je.map((Rt, Ke) => {
        let ut = !Lt && L.get(Rt.id), Yt = L.get(Ke);
        return !ut && !Rt.id && typeof Rt.key == "object" && typeof (Yt == null ? void 0 : Yt.key) == "object" && Qi(Yt.key.data, Rt.key.data) && (ut = Yt), ut ? (ke.delete(ut), ut) : Oe.produceChildContext(Rt.div, {
          path: Ke,
          variables: Rt.vars,
          id: Rt.id,
          key: Rt.key
        });
      }));
      for (const Rt of ke)
        Rt.destroy();
      e(51, Tt = Oe);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    9) {
      let Je = [];
      Ge.forEach((ke) => {
        Je.push(Oe.getDerivedFromVars({
          width: ke.json.width,
          height: ke.json.height,
          visibility: ke.json.visibility
        }));
      }), ye(e(8, Be = Zi(Je, (ke) => [...ke])));
    }
    if (t.$$.dirty[0] & /*items, visibleItems*/
    24 | t.$$.dirty[1] & /*infinite*/
    2097152 | t.$$.dirty[2] & /*$childStore*/
    16) {
      if (e(50, Le = {}), tt = {}, e(4, Pe = Te.map((Je, ke) => ({
        width: Je.width,
        height: Je.height,
        index: ke,
        componentContext: Ge[ke]
      })).filter((Je, ke) => Te[ke].visibility !== "gone")), Pe.forEach((Je, ke) => {
        tt[ke] = Je.index, e(50, Le[Je.index] = ke, Le);
      }), e(49, yt = Pe.length), qt && Pe.length >= Co) {
        const Je = Pe.slice(0, Co).map((L) => ({
          ...L,
          componentContext: L.componentContext.dup(ci),
          duplicate: !0
        })), ke = Pe.slice(Pe.length - Co).map((L) => ({
          ...L,
          componentContext: L.componentContext.dup(ci),
          duplicate: !0
        }));
        Je.forEach((L, Lt) => {
          tt[Pe.length + Lt] = Lt;
        }), ke.forEach((L, Lt) => {
          tt[Lt - Co] = Pe.length - Co + Lt;
        }), e(4, Pe = [].concat(ke, Pe, Je)), e(53, Nt = !0);
      } else
        e(53, Nt = !1);
      Ct();
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonLayoutMode*/
    1073741824 && (C ? C.type !== "percentage" && C.type !== "fixed" && C.type !== "wrap_content" ? (e(41, dt = !0), Oe.logError(X(new Error('Incorrect value of "layout_mode.type" for div "pager"')))) : e(41, dt = !1) : (e(41, dt = !0), Oe.logError(X(new Error('Empty "layout_mode" prop for div "pager"'))))), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[2] & /*$jsonOrientation*/
    8 && e(2, Ft = Aa(Qe, Ft)), t.$$.dirty[2] & /*$jsonItemSpacing*/
    4) {
      const Je = Ie == null ? void 0 : Ie.value;
      Je && Rn(Je) && e(42, Pt = pn(Je || 0));
    }
    if (t.$$.dirty[0] & /*$direction*/
    64 | t.$$.dirty[1] & /*paddingObj*/
    4096 | t.$$.dirty[2] & /*$jsonPaddings*/
    2 && (e(43, st = ui(_e, st)), e(44, Q = _o(st, $))), t.$$.dirty[0] & /*orientation*/
    4 && e(57, p = Ft === "horizontal" ? "grid-auto-columns" : "grid-auto-rows"), t.$$.dirty[0] & /*orientation*/
    4 && e(56, m = Ft === "horizontal" ? "grid-template-columns" : "grid-template-rows"), t.$$.dirty[2] & /*$jsonScrollAxisAlignment*/
    1 && (B === "start" || B === "center" || B === "end") && (e(48, Ve = B), Ct()), t.$$.dirty[0] & /*orientation, $direction, visibleItems*/
    84 | t.$$.dirty[1] & /*paddingObj, $jsonLayoutMode, scrollAxisAlignment, itemSpacing*/
    1073879040) {
      const Je = pn(Ft === "horizontal" ? (st == null ? void 0 : st.start) || ($ === "ltr" ? st == null ? void 0 : st.left : st == null ? void 0 : st.right) || 0 : (st == null ? void 0 : st.top) || 0), ke = pn(Ft === "horizontal" ? (st == null ? void 0 : st.end) || ($ === "ltr" ? st == null ? void 0 : st.right : st == null ? void 0 : st.left) || 0 : (st == null ? void 0 : st.bottom) || 0);
      if ((C == null ? void 0 : C.type) === "fixed") {
        const L = ((R = C.neighbour_page_width) == null ? void 0 : R.value) || 0;
        Ve === "center" ? e(45, Dt = `calc(100% + ${Je} + ${ke} - 2 * ${pn(L)} - 2 * ${Pt})`) : Ve === "start" ? e(45, Dt = `calc(100% + ${ke} - ${pn(L)} - ${Pt})`) : e(45, Dt = `calc(100% + ${Je} - ${pn(L)} - ${Pt})`), e(46, Ot = "");
      } else if ((C == null ? void 0 : C.type) === "percentage") {
        let L = (Ce = C.page_width) == null ? void 0 : Ce.value;
        (typeof L != "number" || L < 0) && (L = 100), e(45, Dt = `calc(${(L / 100).toFixed(2)} * (100% + ${Je} + ${ke}))`), e(46, Ot = "");
      } else (C == null ? void 0 : C.type) === "wrap_content" && (e(45, Dt = ""), e(46, Ot = Pe.map((L) => {
        var Ke, ut;
        const Lt = L[Ft === "horizontal" ? "width" : "height"];
        if ((Lt == null ? void 0 : Lt.type) === "fixed" || (Lt == null ? void 0 : Lt.type) === "wrap_content")
          return "minmax(max-content, auto)";
        let Rt = "100%";
        return (Lt == null ? void 0 : Lt.type) === "match_parent" && (Rn((Ke = Lt.max_size) == null ? void 0 : Ke.value) && (Rt = `min(${Rt}, ${pn(Lt.max_size.value)})`), Rn((ut = Lt.min_size) == null ? void 0 : ut.value) && (Rt = `max(${Rt}, ${pn(Lt.min_size.value)})`)), Rt;
      }).join(" ")));
    }
    if (t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$jsonCrossAxisAlignment, crossAxisAlignment*/
    536936448 && (M === "start" || M === "center" || M === "end") && (e(47, er = M), e(9, nr = {
      [Ft === "horizontal" ? "parentVAlign" : "parentHAlign"]: er
    })), t.$$.dirty[1] & /*itemSpacing, padding, gridAutoSizeProp, autoSizeVal, gridTemplateSizeProp, templateSizeVal, transformStr*/
    117499904 && e(14, h = {
      "grid-gap": Pt,
      padding: Q,
      [p]: Dt,
      [m]: Ot,
      transform: ur
    }), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*animated, crossAxisAlignment, scrollAxisAlignment*/
    8585216 && e(13, y = {
      animated: ar,
      clip: _t.pagerChildrenClipEnabled,
      orientation: Ft,
      "cross-align": er,
      "scroll-align": Ve
    }), t.$$.dirty[1] & /*hasLayoutModeError*/
    1024 && e(5, w = dt), t.$$.dirty[0] & /*hasError*/
    32 | t.$$.dirty[1] & /*$isDesktop, mounted*/
    268435712 && e(12, D = ue && ct && !w), t.$$.dirty[0] & /*componentContext, items*/
    9 && Oe.json) {
      const Je = Oe.getJsonWithVars(Oe.json.default_item);
      typeof Je == "number" && Je >= 0 && Je < Ge.length && (e(40, T = St = Je), Bt(Ge.length, Je)), Pr();
    }
    t.$$.dirty[0] & /*$direction, visibleItems*/
    80 | t.$$.dirty[1] & /*hasDuplicates, allToVisibleMap, currentItem*/
    4719104 && e(11, z = Nt || ($ === "ltr" ? Le[T] > 0 : Le[T] + 1 < Pe.length)), t.$$.dirty[0] & /*$direction, visibleItems*/
    80 | t.$$.dirty[1] & /*hasDuplicates, allToVisibleMap, currentItem*/
    4719104 && e(10, O = Nt || ($ === "ltr" ? Le[T] + 1 < Pe.length : Le[T] > 0)), t.$$.dirty[1] & /*visibleItemsWithOutDuplicates, currentItem*/
    262656 && Bt(yt, T), t.$$.dirty[1] & /*currentItem*/
    512 && kr(T);
  }, [
    Oe,
    lt,
    Ft,
    Ge,
    Pe,
    w,
    $,
    de,
    Be,
    nr,
    O,
    z,
    D,
    y,
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
    Xe,
    it,
    Et,
    at,
    zt,
    ht,
    Er,
    Ar,
    Vt,
    Kt,
    tr,
    rt,
    mt,
    ce,
    Ct,
    ct,
    T,
    dt,
    Pt,
    st,
    Q,
    Dt,
    Ot,
    er,
    Ve,
    yt,
    Le,
    Tt,
    qt,
    Nt,
    ar,
    ur,
    m,
    p,
    n,
    ue,
    M,
    C,
    B,
    _e,
    Ie,
    Qe,
    Te,
    he,
    re,
    ir,
    Gt,
    jr
  ];
}
class q0 extends Wr {
  constructor(r) {
    super(), Hr(this, r, J0, W0, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const K0 = "appkit-indicator", Y0 = "appkit-indicator_visible", X0 = "appkit-indicator__scroller", Z0 = "appkit-indicator__items", Q0 = "appkit-indicator__item", x0 = "appkit-indicator_placement_default", $0 = "appkit-indicator__item_active", e1 = "appkit-indicator_direction_ltr", t1 = "appkit-indicator_direction_rtl", r1 = "appkit-indicator_placement_stretch", Si = {
  indicator: K0,
  indicator_visible: Y0,
  indicator__scroller: X0,
  indicator__items: Z0,
  indicator__item: Q0,
  indicator_placement_default: x0,
  indicator__item_active: $0,
  indicator_direction_ltr: e1,
  indicator_direction_rtl: t1,
  indicator_placement_stretch: r1
};
function vc(t, r, e) {
  const n = t.slice();
  n[43] = r[e], n[46] = e;
  const o = (
    /*index*/
    n[46] === /*pagerData*/
    n[8].currentItem
  );
  return n[44] = o, n;
}
function kc(t) {
  let r, e = dr(Array(
    /*pagerData*/
    t[8].size
  )), n = [];
  for (let o = 0; o < e.length; o += 1)
    n[o] = jc(vc(t, e, o));
  return {
    c() {
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      r = Re();
    },
    l(o) {
      for (let i = 0; i < n.length; i += 1)
        n[i].l(o);
      r = Re();
    },
    m(o, i) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(o, i);
      K(o, r, i);
    },
    p(o, i) {
      if (i[0] & /*pagerData, onIndicatorItemClick, onIndicatorItemKeydown*/
      6291712) {
        e = dr(Array(
          /*pagerData*/
          o[8].size
        ));
        let s;
        for (s = 0; s < e.length; s += 1) {
          const a = vc(o, e, s);
          n[s] ? n[s].p(a, i) : (n[s] = jc(a), n[s].c(), n[s].m(r.parentNode, r));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = e.length;
      }
    },
    d(o) {
      o && k(r), hn(n, o);
    }
  };
}
function jc(t) {
  let r, e, n, o, i, s, a, l;
  function u() {
    return (
      /*click_handler*/
      t[34](
        /*index*/
        t[46]
      )
    );
  }
  return {
    c() {
      r = Me("div"), this.h();
    },
    l(c) {
      r = ze(c, "DIV", {
        class: !0,
        role: !0,
        id: !0,
        "aria-controls": !0,
        "aria-selected": !0,
        tabindex: !0
      }), je(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", e = bt("indicator__item", Si, { active: (
        /*isActiveItem*/
        t[44]
      ) }) + " " + Fr.root__clickable), g(r, "role", "tab"), g(r, "id", n = /*pagerData*/
      t[8].instId + "-tab-" + /*index*/
      t[46]), g(r, "aria-controls", o = /*pagerData*/
      t[8].instId + "-panel-" + /*index*/
      t[46]), g(r, "aria-selected", i = /*isActiveItem*/
      t[44] ? "true" : "false"), g(r, "tabindex", s = /*isActiveItem*/
      t[44] ? 0 : -1);
    },
    m(c, f) {
      K(c, r, f), a || (l = [
        et(r, "click", u),
        et(
          r,
          "keydown",
          /*onIndicatorItemKeydown*/
          t[22]
        )
      ], a = !0);
    },
    p(c, f) {
      t = c, f[0] & /*pagerData*/
      256 && e !== (e = bt("indicator__item", Si, { active: (
        /*isActiveItem*/
        t[44]
      ) }) + " " + Fr.root__clickable) && g(r, "class", e), f[0] & /*pagerData*/
      256 && n !== (n = /*pagerData*/
      t[8].instId + "-tab-" + /*index*/
      t[46]) && g(r, "id", n), f[0] & /*pagerData*/
      256 && o !== (o = /*pagerData*/
      t[8].instId + "-panel-" + /*index*/
      t[46]) && g(r, "aria-controls", o), f[0] & /*pagerData*/
      256 && i !== (i = /*isActiveItem*/
      t[44] ? "true" : "false") && g(r, "aria-selected", i), f[0] & /*pagerData*/
      256 && s !== (s = /*isActiveItem*/
      t[44] ? 0 : -1) && g(r, "tabindex", s);
    },
    d(c) {
      c && k(r), a = !1, Gr(l);
    }
  };
}
function n1(t) {
  let r, e, n = (
    /*pagerData*/
    t[8] && kc(t)
  );
  return {
    c() {
      r = Me("div"), e = Me("div"), n && n.c(), this.h();
    },
    l(o) {
      r = ze(o, "DIV", { class: !0 });
      var i = je(r);
      e = ze(i, "DIV", { class: !0, role: !0 });
      var s = je(e);
      n && n.l(s), s.forEach(k), i.forEach(k), this.h();
    },
    h() {
      g(e, "class", Si.indicator__items), g(e, "role", "tablist"), N(
        e,
        "margin",
        /*placement*/
        t[4] === "default" ? `0 ${me(Math.max(
          0,
          /*activeStyle*/
          t[2].width - /*inactiveStyle*/
          t[3].width
        ) / 2)}` : ""
      ), N(e, "--divkit-indicator-inactive-width", me(
        /*inactiveStyle*/
        t[3].width
      )), N(e, "--divkit-indicator-inactive-height", me(
        /*inactiveStyle*/
        t[3].height
      )), N(e, "--divkit-indicator-inactive-border-radius", me(
        /*inactiveStyle*/
        t[3].borderRadius
      )), N(
        e,
        "--divkit-indicator-inactive-background",
        /*inactiveStyle*/
        t[3].background || ""
      ), N(
        e,
        "--divkit-indicator-inactive-box-shadow",
        /*inactiveStyle*/
        t[3].boxShadow || ""
      ), N(e, "--divkit-indicator-active-width", me(
        /*activeStyle*/
        t[2].width
      )), N(e, "--divkit-indicator-active-height", me(
        /*activeStyle*/
        t[2].height
      )), N(e, "--divkit-indicator-active-border-radius", me(
        /*activeStyle*/
        t[2].borderRadius
      )), N(
        e,
        "--divkit-indicator-active-background",
        /*activeStyle*/
        t[2].background || ""
      ), N(
        e,
        "--divkit-indicator-active-box-shadow",
        /*activeStyle*/
        t[2].boxShadow || ""
      ), N(
        e,
        "--divkit-indicator-active-scale",
        /*activeStyle*/
        t[2].width / /*inactiveStyle*/
        t[3].width
      ), N(
        e,
        "--divkit-indicator-default-margin",
        /*placement*/
        t[4] === "default" ? `0 ${me(
          /*spaceBetweenCenters*/
          (t[5] - /*inactiveStyle*/
          t[3].width) / 2
        )}` : ""
      ), N(
        e,
        "--divkit-indicator-stretch-margin",
        /*placement*/
        t[4] === "stretch" ? me(
          /*itemSpacing*/
          t[7]
        ) : ""
      ), N(
        e,
        "--divkit-indicator-stretch-max-count",
        /*placement*/
        t[4] === "stretch" ? (
          /*maxVisibleItems*/
          t[6]
        ) : ""
      ), N(
        e,
        "--divkit-indicator-stretch-max-spacer",
        /*placement*/
        t[4] === "stretch" ? me(
          /*maxVisibleItems*/
          (t[6] - 1) * /*itemSpacing*/
          t[7]
        ) : ""
      ), g(r, "class", Si.indicator__scroller);
    },
    m(o, i) {
      K(o, r, i), jt(r, e), n && n.m(e, null), t[35](e), t[36](r);
    },
    p(o, i) {
      /*pagerData*/
      o[8] ? n ? n.p(o, i) : (n = kc(o), n.c(), n.m(e, null)) : n && (n.d(1), n = null), i[0] & /*placement, activeStyle, inactiveStyle*/
      28 && N(
        e,
        "margin",
        /*placement*/
        o[4] === "default" ? `0 ${me(Math.max(
          0,
          /*activeStyle*/
          o[2].width - /*inactiveStyle*/
          o[3].width
        ) / 2)}` : ""
      ), i[0] & /*inactiveStyle*/
      8 && N(e, "--divkit-indicator-inactive-width", me(
        /*inactiveStyle*/
        o[3].width
      )), i[0] & /*inactiveStyle*/
      8 && N(e, "--divkit-indicator-inactive-height", me(
        /*inactiveStyle*/
        o[3].height
      )), i[0] & /*inactiveStyle*/
      8 && N(e, "--divkit-indicator-inactive-border-radius", me(
        /*inactiveStyle*/
        o[3].borderRadius
      )), i[0] & /*inactiveStyle*/
      8 && N(
        e,
        "--divkit-indicator-inactive-background",
        /*inactiveStyle*/
        o[3].background || ""
      ), i[0] & /*inactiveStyle*/
      8 && N(
        e,
        "--divkit-indicator-inactive-box-shadow",
        /*inactiveStyle*/
        o[3].boxShadow || ""
      ), i[0] & /*activeStyle*/
      4 && N(e, "--divkit-indicator-active-width", me(
        /*activeStyle*/
        o[2].width
      )), i[0] & /*activeStyle*/
      4 && N(e, "--divkit-indicator-active-height", me(
        /*activeStyle*/
        o[2].height
      )), i[0] & /*activeStyle*/
      4 && N(e, "--divkit-indicator-active-border-radius", me(
        /*activeStyle*/
        o[2].borderRadius
      )), i[0] & /*activeStyle*/
      4 && N(
        e,
        "--divkit-indicator-active-background",
        /*activeStyle*/
        o[2].background || ""
      ), i[0] & /*activeStyle*/
      4 && N(
        e,
        "--divkit-indicator-active-box-shadow",
        /*activeStyle*/
        o[2].boxShadow || ""
      ), i[0] & /*activeStyle, inactiveStyle*/
      12 && N(
        e,
        "--divkit-indicator-active-scale",
        /*activeStyle*/
        o[2].width / /*inactiveStyle*/
        o[3].width
      ), i[0] & /*placement, spaceBetweenCenters, inactiveStyle*/
      56 && N(
        e,
        "--divkit-indicator-default-margin",
        /*placement*/
        o[4] === "default" ? `0 ${me(
          /*spaceBetweenCenters*/
          (o[5] - /*inactiveStyle*/
          o[3].width) / 2
        )}` : ""
      ), i[0] & /*placement, itemSpacing*/
      144 && N(
        e,
        "--divkit-indicator-stretch-margin",
        /*placement*/
        o[4] === "stretch" ? me(
          /*itemSpacing*/
          o[7]
        ) : ""
      ), i[0] & /*placement, maxVisibleItems*/
      80 && N(
        e,
        "--divkit-indicator-stretch-max-count",
        /*placement*/
        o[4] === "stretch" ? (
          /*maxVisibleItems*/
          o[6]
        ) : ""
      ), i[0] & /*placement, maxVisibleItems, itemSpacing*/
      208 && N(
        e,
        "--divkit-indicator-stretch-max-spacer",
        /*placement*/
        o[4] === "stretch" ? me(
          /*maxVisibleItems*/
          (o[6] - 1) * /*itemSpacing*/
          o[7]
        ) : ""
      );
    },
    d(o) {
      o && k(r), n && n.d(), t[35](null), t[36](null);
    }
  };
}
function o1(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: bt(
        "indicator",
        Si,
        /*mods*/
        t[11]
      ),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: { default: [n1] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = bt(
        "indicator",
        Si,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
const Ll = ["rounded_rectangle", "circle"];
function i1(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, p, m, h = j, y = () => (h(), h = V(c, (de) => e(26, m = de)), c), w, D = j, z = () => (D(), D = V(f, (de) => e(27, w = de)), f), O, $ = j, ue = () => ($(), $ = V(i, (de) => e(28, O = de)), i), M, Y = j, se = () => (Y(), Y = V(s, (de) => e(29, M = de)), s), C, I = j, P = () => (I(), I = V(o, (de) => e(30, C = de)), o), B, q = j, pe = () => (q(), q = V(a, (de) => e(31, B = de)), a), _e, Ae = j, be = () => (Ae(), Ae = V(u, (de) => e(32, _e = de)), u), Ie, x = j, Ye = () => (x(), x = V(l, (de) => e(33, Ie = de)), l);
  t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => $()), t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => q()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => x());
  let { componentContext: Qe } = r, { layoutParams: xe = void 0 } = r;
  const Te = zr($r).direction;
  kn(t, Te, (de) => e(25, p = de));
  let ge = {
    width: 13,
    height: 13,
    borderRadius: 6.5,
    background: "#ffdc60"
  }, ye = {
    width: 10,
    height: 10,
    borderRadius: 5,
    background: "#33919cb5"
  }, he = "default", te = 15, fe = 10, re = 5, ve, qe, Xe, ee, He = !1;
  function Oe() {
    e(4, he = "default"), e(5, te = 15), e(6, fe = 10), e(7, re = 5), e(2, ge = {
      width: 13,
      height: 13,
      borderRadius: 6.5,
      background: "#ffdc60"
    }), e(3, ye = {
      width: 10,
      height: 10,
      borderRadius: 5,
      background: "#33919cb5"
    });
  }
  async function lt(de) {
    if (e(8, Xe = de), await Fn(), qe) {
      const ct = qe.children[Xe.currentItem];
      if (ct) {
        const Be = ct.offsetLeft;
        ve.scroll({
          left: Be - ve.clientWidth / 2,
          behavior: "smooth"
        });
      }
    }
  }
  function _t(de) {
    de !== Xe.currentItem && Xe.scrollToPagerItem(de);
  }
  function it(de) {
    if (de.ctrlKey || de.shiftKey || de.altKey || de.metaKey)
      return;
    const { size: ct, currentItem: Be } = Xe;
    if (de.which === Ud) {
      const T = Be - 1 < 0 ? Be : Be - 1;
      Et(T);
    } else if (de.which === Gd) {
      const T = Be + 1 >= ct ? Be : Be + 1;
      Et(T);
    } else if (de.which === Jd)
      Et(0);
    else if (de.which === qd)
      Et(ct - 1);
    else
      return;
    de.preventDefault();
  }
  async function Et(de) {
    Xe.scrollToPagerItem(de), await Fn();
    const ct = qe.querySelector(`.${Si.indicator__item_active}`);
    ct && ct.focus();
  }
  function at() {
    ee == null || ee(), ee = void 0;
    const de = Qe.json.pager_id;
    ee = Qe.listenPager(de, lt);
  }
  no(() => {
    e(23, He = !0);
  }), dn(() => {
    e(23, He = !1), ee == null || ee(), ee = void 0;
  });
  const zt = (de) => _t(de);
  function ht(de) {
    Mr[de ? "unshift" : "push"](() => {
      qe = de, e(10, qe);
    });
  }
  function Z(de) {
    Mr[de ? "unshift" : "push"](() => {
      ve = de, e(9, ve);
    });
  }
  return t.$$set = (de) => {
    "componentContext" in de && e(0, Qe = de.componentContext), "layoutParams" in de && e(1, xe = de.layoutParams);
  }, t.$$.update = () => {
    var de, ct;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(24, n = Qe.origJson), t.$$.dirty[0] & /*origJson*/
    16777216 && n && Oe(), t.$$.dirty[0] & /*origJson, mounted*/
    25165824 && n && He && at(), t.$$.dirty[0] & /*componentContext*/
    1 && P(e(19, o = Qe.getDerivedFromVars(Qe.json.shape))), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(18, i = Qe.getDerivedFromVars(Qe.json.active_item_color))), t.$$.dirty[0] & /*componentContext*/
    1 && se(e(17, s = Qe.getDerivedFromVars(Qe.json.inactive_item_color))), t.$$.dirty[0] & /*componentContext*/
    1 && pe(e(16, a = Qe.getDerivedFromVars(Qe.json.active_item_size))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(15, l = Qe.getDerivedFromVars(Qe.json.active_shape))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(14, u = Qe.getDerivedFromVars(Qe.json.inactive_shape))), t.$$.dirty[0] & /*componentContext*/
    1 && y(e(13, c = Qe.getDerivedFromVars(Qe.json.space_between_centers))), t.$$.dirty[0] & /*componentContext*/
    1 && z(e(12, f = Qe.getDerivedFromVars(Qe.json.items_placement))), t.$$.dirty[0] & /*activeStyle, inactiveStyle, $jsonShape, $jsonInactiveItemColor, $jsonActiveItemColor*/
    1879048204 | t.$$.dirty[1] & /*$jsonActiveShape, $jsonInactiveShape, $jsonActiveItemSize*/
    7 && (Ie && e(2, ge = go(
      {
        type: "shape_drawable",
        shape: Ie
      },
      Ll,
      ge
    )), _e && e(3, ye = go(
      {
        type: "shape_drawable",
        shape: _e
      },
      Ll,
      ye
    )), !Ie && !_e && C)) {
      const Be = Jn(B, 1.3);
      e(3, ye = go(
        {
          type: "shape_drawable",
          shape: C,
          color: ye.background
        },
        Ll,
        ye
      )), e(3, ye.background = pr(M, 1, ye.background), ye), e(2, ge = {
        ...ye,
        width: ye.width * Be,
        height: ye.height * Be,
        borderRadius: ye.borderRadius * Be,
        background: ge.background
      }), e(2, ge.background = pr(O, 1, ge.background), ge);
    }
    if (t.$$.dirty[0] & /*$jsonItemsPlacement, placement, spaceBetweenCenters, maxVisibleItems, itemSpacing, $jsonSpaceBetweenCenters*/
    201326832)
      if (w && (w.type === "default" || w.type === "stretch")) {
        if (e(4, he = w.type), he === "default")
          e(5, te = un((de = w.space_between_centers) == null ? void 0 : de.value, te));
        else if (he === "stretch") {
          const Be = w;
          e(6, fe = Jn(Be.max_visible_items, fe)), e(7, re = un((ct = Be.item_spacing) == null ? void 0 : ct.value, re));
        }
      } else
        e(4, he = "default"), m && e(5, te = un(m.value, te));
    t.$$.dirty[0] & /*placement, $direction, pagerData*/
    33554704 && e(11, _ = {
      placement: he,
      direction: p,
      visible: (Xe == null ? void 0 : Xe.size) > 1
    });
  }, [
    Qe,
    xe,
    ge,
    ye,
    he,
    te,
    fe,
    re,
    Xe,
    ve,
    qe,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    Te,
    _t,
    it,
    He,
    n,
    p,
    m,
    w,
    O,
    M,
    C,
    B,
    _e,
    Ie,
    zt,
    ht,
    Z
  ];
}
class s1 extends Wr {
  constructor(r) {
    super(), Hr(this, r, i1, o1, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const l1 = "appkit-slider", a1 = "appkit-slider__input", u1 = "appkit-slider__input_secondary", c1 = "appkit-slider__thumb", f1 = "appkit-slider_direction_rtl", d1 = "appkit-slider__thumb_secondary", _1 = "appkit-slider__track", h1 = "appkit-slider__tick", p1 = "appkit-slider__tick_active", g1 = "appkit-slider__tick_inactive", Xr = {
  slider: l1,
  slider__input: a1,
  slider__input_secondary: u1,
  slider__thumb: c1,
  slider_direction_rtl: f1,
  slider__thumb_secondary: d1,
  "slider__tracks-wrapper": "appkit-slider__tracks-wrapper",
  "slider__tracks-inner": "appkit-slider__tracks-inner",
  "slider__tracks-ranges": "appkit-slider__tracks-ranges",
  "slider__tracks-ranges_rtl": "appkit-slider__tracks-ranges_rtl",
  slider__track: _1,
  "slider__thumb-text": "appkit-slider__thumb-text",
  "slider__thumb-text_secondary": "appkit-slider__thumb-text_secondary",
  slider__tick: h1,
  slider__tick_active: p1,
  slider__tick_inactive: g1
};
function Ec(t, r, e) {
  var a, l;
  if (!t || !t.font_size)
    return e;
  const n = t.offset, o = t.text_color && pr(t.text_color) || "#000", i = fi(t.font_weight, t.font_weight_value, void 0), s = Ai(t.font_variation_settings) || void 0;
  if (On(t.font_size) && o !== "transparent") {
    const u = {
      fontSize: me(t.font_size),
      fontWeight: i,
      fontVariationSettings: s,
      textColor: o
    };
    return typeof ((a = n == null ? void 0 : n.x) == null ? void 0 : a.value) == "number" && typeof ((l = n == null ? void 0 : n.y) == null ? void 0 : l.value) == "number" && (u.offset = {
      x: n.x.value,
      y: n.y.value
    }), t.font_family && typeof t.font_family == "string" && (u.fontFamily = r(t.font_family, {
      fontWeight: i
    }) || ""), u;
  }
}
function No(t, r, e) {
  return Math.max(r, Math.min(e, Number(t)));
}
function Sa(t) {
  return BigInt(t);
}
const ps = Sa("9223372036854775807"), gs = Sa("-9223372036854775808");
function wn(t) {
  const r = Sa(t);
  if (r > ps || r < gs)
    throw new Error("Integer overflow.");
  return r;
}
const Di = wn(0);
function $d(t) {
  let r = t;
  return r < 0 && (r = -r), r;
}
function e_(t) {
  let r = 0;
  return t > 0 ? r = 1 : t < 0 && (r = -1), wn(r);
}
function co(t, r) {
  var e;
  switch ((e = r[t.type]) == null || e.call(r, t), t.type) {
    case "TemplateLiteral":
      t.expressions.forEach((n) => {
        co(n, r);
      });
      break;
    case "BinaryExpression":
    case "LogicalExpression":
      co(t.left, r), co(t.right, r);
      break;
    case "UnaryExpression":
      co(t.argument, r);
      break;
    case "ConditionalExpression":
      co(t.test, r), co(t.consequent, r), co(t.alternate, r);
      break;
    case "TryExpression":
      co(t.test, r), co(t.alternate, r);
      break;
    case "CallExpression":
      t.arguments.forEach((n) => {
        co(n, r);
      });
      break;
    case "MethodExpression":
      co(t.object, r), t.arguments.forEach((n) => {
        co(n, r);
      });
      break;
  }
}
const m1 = 2147483647, b1 = -2147483648, y1 = Number.MAX_VALUE, w1 = Number.MIN_VALUE, Ze = "string", Ue = "integer", kt = "number", Zr = "boolean", bn = "color", lo = "url", Lr = "datetime", wr = "dict", vr = "array", v1 = "function";
class Da extends Error {
}
function tl(t) {
  return t.type === "url" || t.type === "color" ? {
    type: "string",
    value: t.value
  } : t;
}
function t_(t) {
  return t.toISOString().replace("T", " ").replace(/\.\d{3}Z$/, "");
}
function Fi(t, r) {
  if (t.type === "string")
    return t.value;
  if (t.type === "integer")
    return String(t.value);
  if (t.type === "number") {
    let e = String(t.value);
    return e.includes(".") || (e.includes("e") ? e = e.replace("e", ".0e") : e += ".0"), e = e.replace(/e\+?/i, "E"), e;
  } else {
    if (t.type === "boolean")
      return t.value ? "true" : "false";
    if (t.type === "datetime")
      return t_(t.value);
    if (t.type === "color")
      return Mi(El(t.value));
    if (t.type === "url")
      return t.value;
    if ((t.type === "dict" || t.type === "array") && r)
      return JSON.stringify(t.value);
    if (t.type === "dict")
      return "<dict>";
    if (t.type === "array")
      return "<array>";
    if (t.type === "function")
      return t.value[0].name || "Function";
  }
  throw new Error(`Unexpected type ${t.type}`);
}
function yn(t) {
  let r = Fi(t, !1);
  return t.type === "string" && (r = "'" + r.replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'"), r;
}
function ro(t) {
  return t === "datetime" ? "DateTime" : t.charAt(0).toUpperCase() + t.substring(1);
}
function Ti(t, r) {
  return wn(r);
}
function Hn(t, r) {
  if (r < gs || r > ps)
    throw new Error("Integer overflow.");
}
function ko(t) {
  if (typeof t != "string")
    throw new Error("Incorrect url value.");
  try {
    new URL(t);
  } catch {
    throw new Error("Incorrect url value.");
  }
}
function k1(t) {
  try {
    return ko(t), !0;
  } catch {
    return !1;
  }
}
function j1(t) {
  const r = /* @__PURE__ */ new Set();
  return co(t, {
    Variable(e) {
      r.add(e.id.name);
    }
  }), [...r];
}
function Mn(t, r) {
  throw new Da(`Failed to evaluate [${t}]. ${r}`);
}
function E1(t, r) {
  throw new Error(r);
}
function El(t) {
  const r = wo(t);
  if (r)
    return r;
  throw new Error("Unable to convert value to Color, expected format #AARRGGBB.");
}
function Mi(t) {
  return `#${[t.a, t.r, t.g, t.b].map((r) => {
    if (r < 0 || r > 255)
      throw new Error("Value out of range 0..1.");
    return Md(Math.round(r).toString(16), 2);
  }).join("").toUpperCase()}`;
}
function di(t) {
  return Mi(El(t));
}
function $l(t) {
  return {
    type: kt,
    value: Number(t.value)
  };
}
const C1 = {
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
function Cl(t, r, e) {
  if (e === "function")
    throw new Error("Cannot convert function");
  const n = C1[e];
  let o = typeof r;
  if (n === "array" && !Array.isArray(r) || n !== "array" && o !== n || o === "object" && r === null)
    throw o === "object" && (Array.isArray(r) ? o = "array" : r === null ? o = "null" : o = "dict"), new Error(`Incorrect value type: expected ${ro(e)}, got ${ro(o)}.`);
  if (n === "number" && e === "integer") {
    t && Hn(t, r);
    try {
      r = wn(r);
    } catch {
      throw new Error("Cannot convert value to integer.");
    }
  }
  return n === "string" && e === "color" && (r = di(r)), n === "string" && e === "url" && ko(r), n === "boolean" && e === Zr && (r = r ? 1 : 0), {
    type: e,
    value: r
  };
}
function A1(t) {
  return t.type === "number" || t.type === "integer" ? Number(t.value) : t.type === "boolean" ? !!t.value : t.value;
}
function Al(t) {
  return A1(
    Cl(void 0, t.value, t.type)
  );
}
class ti {
  constructor(r, e) {
    Vr(this, "name");
    Vr(this, "value");
    Vr(this, "store");
    const n = this.convertValue(e);
    this.name = r, this.value = n;
  }
  getName() {
    return this.name;
  }
  subscribe(r) {
    return this.store || (this.store = Oo(this.value)), this.store.subscribe(r);
  }
  set(r) {
    const e = this.fromString(r);
    this.setValue(e);
  }
  setValue(r) {
    const e = this.convertValue(r);
    this.value = e, this.store && this.store.set(e);
  }
  getValue() {
    return this.value;
  }
}
class r_ extends ti {
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
class n_ extends ti {
  convertValue(r) {
    if (typeof r != "bigint" && typeof r != "number")
      throw new Error("Incorrect variable value");
    try {
      return wn(r);
    } catch {
      throw new Error("Incorrect variable value");
    }
  }
  fromString(r) {
    try {
      return wn(r);
    } catch {
      throw new Error("Incorrect variable value");
    }
  }
  getType() {
    return "integer";
  }
}
class o_ extends ti {
  convertValue(r) {
    if (typeof r != "number" || Number.isNaN(r) || !isFinite(r))
      throw new Error("Incorrect variable value");
    return r;
  }
  fromString(r) {
    const e = Number(r);
    return this.convertValue(e);
  }
  getType() {
    return "number";
  }
}
class i_ extends ti {
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
class s_ extends ti {
  convertValue(r) {
    if (typeof r != "string" || !wo(r))
      throw new Error("Incorrect variable value");
    return di(r);
  }
  fromString(r) {
    return this.convertValue(r);
  }
  getType() {
    return "color";
  }
}
class l_ extends ti {
  convertValue(r) {
    if (typeof r != "string")
      throw new Error("Incorrect variable value");
    return ko(r), r;
  }
  fromString(r) {
    return ko(r), r;
  }
  getType() {
    return "url";
  }
}
class a_ extends ti {
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
class u_ extends ti {
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
const ea = {
  string: r_,
  number: o_,
  integer: n_,
  boolean: i_,
  color: s_,
  url: l_,
  dict: a_,
  array: u_
};
function eo(t, r, e) {
  if (!(r in ea))
    throw new Error("Unsupported variable type");
  return new ea[r](t, e);
}
function V1() {
}
function S1(t) {
  return t(this.value), V1;
}
function Cc() {
  throw new Error("Cannot change the value of this type of variable");
}
class D1 extends r_ {
}
class I1 extends o_ {
}
class F1 extends n_ {
}
class T1 extends i_ {
}
class M1 extends s_ {
}
class P1 extends l_ {
}
class N1 extends a_ {
}
class z1 extends u_ {
}
class O1 extends ti {
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
const rl = {
  string: D1,
  number: I1,
  integer: F1,
  boolean: T1,
  color: M1,
  url: P1,
  dict: N1,
  array: z1,
  datetime: O1
};
for (const t in rl) {
  const r = rl[t];
  r.prototype.subscribe = S1, r.prototype.set = Cc, r.prototype.setValue = Cc;
}
function Ms(t, r, e) {
  if (!(r in rl))
    throw new Error("Unsupported variable type");
  return new rl[r](t, e);
}
function B1(t) {
  const r = t.getType();
  let e = t.getValue();
  return r === Zr && (e = e ? 1 : 0), {
    type: r,
    value: e
  };
}
function L1(t, r) {
  if (r === "string")
    return t;
  if (r === "integer")
    try {
      return wn(t);
    } catch {
      throw new Error("Incorrect variable value");
    }
  else if (r === "number") {
    const e = Number(t);
    if (Number.isNaN(e) || !isFinite(e))
      throw new Error("Incorrect variable value");
    return e;
  } else if (r === "boolean") {
    if (t === "1" || t === "true")
      return !0;
    if (t === "0" || t === "false")
      return !1;
    throw new Error("Incorrect variable value");
  } else if (r === "color") {
    if (typeof t != "string" || !wo(t))
      throw new Error("Incorrect variable value");
    return di(t);
  } else if (r === "url") {
    if (typeof t != "string")
      throw new Error("Incorrect variable value");
    return ko(t), t;
  } else if (r === "dict" || r === "array")
    try {
      return JSON.parse(t);
    } catch {
      throw new Error("Incorrect dict value");
    }
  throw new Error(`Unexpected type ${r}`);
}
function Ac(t, r, e) {
  const n = t.slice();
  return n[85] = r[e], n;
}
function Vc(t, r, e) {
  const n = t.slice();
  return n[85] = r[e], n;
}
function Sc(t, r, e) {
  const n = t.slice();
  return n[90] = r[e], n;
}
function R1(t) {
  let r, e;
  return r = new Pn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function H1(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: bt(
        "slider",
        Xr,
        /*mods*/
        t[24]
      ),
      style: (
        /*stl*/
        t[25]
      ),
      customDescription: !0,
      customActions: "slider",
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: {
        default: [
          W1,
          ({ focusHandler: n, blurHandler: o }) => ({ 83: n, 84: o }),
          ({ focusHandler: n, blurHandler: o }) => [0, 0, (n ? 2097152 : 0) | (o ? 4194304 : 0)]
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      16777216 && (i.cls = bt(
        "slider",
        Xr,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function Dc(t) {
  let r;
  return {
    c() {
      r = Me("div"), this.h();
    },
    l(e) {
      r = ze(e, "DIV", { class: !0 }), je(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", Xr.slider__track), N(
        r,
        "left",
        /*range*/
        t[90].left
      ), N(
        r,
        "right",
        /*range*/
        t[90].right
      ), N(
        r,
        "height",
        /*range*/
        t[90].height
      ), N(
        r,
        "border-radius",
        /*range*/
        t[90].borderRadius
      ), N(
        r,
        "background",
        /*range*/
        t[90].background
      ), N(
        r,
        "box-shadow",
        /*range*/
        t[90].boxShadow
      );
    },
    m(e, n) {
      K(e, r, n);
    },
    p(e, n) {
      n[0] & /*renderRanges*/
      2097152 && N(
        r,
        "left",
        /*range*/
        e[90].left
      ), n[0] & /*renderRanges*/
      2097152 && N(
        r,
        "right",
        /*range*/
        e[90].right
      ), n[0] & /*renderRanges*/
      2097152 && N(
        r,
        "height",
        /*range*/
        e[90].height
      ), n[0] & /*renderRanges*/
      2097152 && N(
        r,
        "border-radius",
        /*range*/
        e[90].borderRadius
      ), n[0] & /*renderRanges*/
      2097152 && N(
        r,
        "background",
        /*range*/
        e[90].background
      ), n[0] & /*renderRanges*/
      2097152 && N(
        r,
        "box-shadow",
        /*range*/
        e[90].boxShadow
      );
    },
    d(e) {
      e && k(r);
    }
  };
}
function Ic(t) {
  let r;
  return {
    c() {
      r = Me("div"), this.h();
    },
    l(e) {
      r = ze(e, "DIV", { class: !0 }), je(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", Xr.slider__tick + " " + Xr.slider__tick_active), N(
        r,
        "--divkit-slider-tick",
        /*val*/
        t[85]
      );
    },
    m(e, n) {
      K(e, r, n);
    },
    p(e, n) {
      n[0] & /*markActiveTicks*/
      131072 && N(
        r,
        "--divkit-slider-tick",
        /*val*/
        e[85]
      );
    },
    d(e) {
      e && k(r);
    }
  };
}
function Fc(t) {
  let r;
  return {
    c() {
      r = Me("div"), this.h();
    },
    l(e) {
      r = ze(e, "DIV", { class: !0 }), je(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", Xr.slider__tick + " " + Xr.slider__tick_inactive), N(
        r,
        "--divkit-slider-tick",
        /*val*/
        t[85]
      );
    },
    m(e, n) {
      K(e, r, n);
    },
    p(e, n) {
      n[0] & /*markInactiveTicks*/
      262144 && N(
        r,
        "--divkit-slider-tick",
        /*val*/
        e[85]
      );
    },
    d(e) {
      e && k(r);
    }
  };
}
function Tc(t) {
  let r, e, n;
  return {
    c() {
      r = Me("div"), e = Me("div"), n = Bn(
        /*value*/
        t[11]
      ), this.h();
    },
    l(o) {
      r = ze(o, "DIV", { class: !0 });
      var i = je(r);
      e = ze(i, "DIV", { class: !0 });
      var s = je(e);
      n = qn(
        s,
        /*value*/
        t[11]
      ), s.forEach(k), i.forEach(k), this.h();
    },
    h() {
      var o, i, s, a, l;
      g(e, "class", Xr["slider__thumb-text-inner"]), N(
        e,
        "font-size",
        /*textStyle*/
        ((o = t[7]) == null ? void 0 : o.fontSize) || "1em"
      ), N(
        e,
        "font-weight",
        /*textStyle*/
        ((i = t[7]) == null ? void 0 : i.fontWeight) || ""
      ), N(
        e,
        "font-family",
        /*textStyle*/
        ((s = t[7]) == null ? void 0 : s.fontFamily) || ""
      ), N(
        e,
        "font-variation-settings",
        /*textStyle*/
        ((a = t[7]) == null ? void 0 : a.fontVariationSettings) || ""
      ), N(
        e,
        "color",
        /*textStyle*/
        ((l = t[7]) == null ? void 0 : l.textColor) || "#000"
      ), g(r, "class", Xr["slider__thumb-text"]);
    },
    m(o, i) {
      K(o, r, i), jt(r, e), jt(e, n);
    },
    p(o, i) {
      var s, a, l, u, c;
      i[0] & /*value*/
      2048 && Qn(
        n,
        /*value*/
        o[11]
      ), i[0] & /*textStyle*/
      128 && N(
        e,
        "font-size",
        /*textStyle*/
        ((s = o[7]) == null ? void 0 : s.fontSize) || "1em"
      ), i[0] & /*textStyle*/
      128 && N(
        e,
        "font-weight",
        /*textStyle*/
        ((a = o[7]) == null ? void 0 : a.fontWeight) || ""
      ), i[0] & /*textStyle*/
      128 && N(
        e,
        "font-family",
        /*textStyle*/
        ((l = o[7]) == null ? void 0 : l.fontFamily) || ""
      ), i[0] & /*textStyle*/
      128 && N(
        e,
        "font-variation-settings",
        /*textStyle*/
        ((u = o[7]) == null ? void 0 : u.fontVariationSettings) || ""
      ), i[0] & /*textStyle*/
      128 && N(
        e,
        "color",
        /*textStyle*/
        ((c = o[7]) == null ? void 0 : c.textColor) || "#000"
      );
    },
    d(o) {
      o && k(r);
    }
  };
}
function Mc(t) {
  let r, e = (
    /*textSecondaryStyle*/
    t[8] && Pc(t)
  );
  return {
    c() {
      r = Me("div"), e && e.c(), this.h();
    },
    l(n) {
      r = ze(n, "DIV", { class: !0 });
      var o = je(r);
      e && e.l(o), o.forEach(k), this.h();
    },
    h() {
      g(r, "class", Xr.slider__thumb + " " + Xr.slider__thumb_secondary), N(r, "border-radius", me(
        /*thumbSecondaryStyle*/
        t[6].borderRadius
      )), N(
        r,
        "background",
        /*thumbSecondaryStyle*/
        t[6].background
      ), N(
        r,
        "box-shadow",
        /*thumbSecondaryStyle*/
        t[6].boxShadow || ""
      );
    },
    m(n, o) {
      K(n, r, o), e && e.m(r, null);
    },
    p(n, o) {
      /*textSecondaryStyle*/
      n[8] ? e ? e.p(n, o) : (e = Pc(n), e.c(), e.m(r, null)) : e && (e.d(1), e = null), o[0] & /*thumbSecondaryStyle*/
      64 && N(r, "border-radius", me(
        /*thumbSecondaryStyle*/
        n[6].borderRadius
      )), o[0] & /*thumbSecondaryStyle*/
      64 && N(
        r,
        "background",
        /*thumbSecondaryStyle*/
        n[6].background
      ), o[0] & /*thumbSecondaryStyle*/
      64 && N(
        r,
        "box-shadow",
        /*thumbSecondaryStyle*/
        n[6].boxShadow || ""
      );
    },
    d(n) {
      n && k(r), e && e.d();
    }
  };
}
function Pc(t) {
  let r, e, n;
  return {
    c() {
      r = Me("div"), e = Me("div"), n = Bn(
        /*value2*/
        t[12]
      ), this.h();
    },
    l(o) {
      r = ze(o, "DIV", { class: !0 });
      var i = je(r);
      e = ze(i, "DIV", { class: !0 });
      var s = je(e);
      n = qn(
        s,
        /*value2*/
        t[12]
      ), s.forEach(k), i.forEach(k), this.h();
    },
    h() {
      var o, i, s, a, l;
      g(e, "class", Xr["slider__thumb-text-inner"]), N(
        e,
        "font-size",
        /*textSecondaryStyle*/
        ((o = t[8]) == null ? void 0 : o.fontSize) || "1em"
      ), N(
        e,
        "font-weight",
        /*textSecondaryStyle*/
        ((i = t[8]) == null ? void 0 : i.fontWeight) || ""
      ), N(
        e,
        "font-family",
        /*textSecondaryStyle*/
        ((s = t[8]) == null ? void 0 : s.fontFamily) || ""
      ), N(
        e,
        "font-variation-settings",
        /*textSecondaryStyle*/
        ((a = t[8]) == null ? void 0 : a.fontVariationSettings) || ""
      ), N(
        e,
        "color",
        /*textSecondaryStyle*/
        ((l = t[8]) == null ? void 0 : l.textColor) || "#000"
      ), g(r, "class", Xr["slider__thumb-text"] + " " + Xr["slider__thumb-text_secondary"]);
    },
    m(o, i) {
      K(o, r, i), jt(r, e), jt(e, n);
    },
    p(o, i) {
      var s, a, l, u, c;
      i[0] & /*value2*/
      4096 && Qn(
        n,
        /*value2*/
        o[12]
      ), i[0] & /*textSecondaryStyle*/
      256 && N(
        e,
        "font-size",
        /*textSecondaryStyle*/
        ((s = o[8]) == null ? void 0 : s.fontSize) || "1em"
      ), i[0] & /*textSecondaryStyle*/
      256 && N(
        e,
        "font-weight",
        /*textSecondaryStyle*/
        ((a = o[8]) == null ? void 0 : a.fontWeight) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && N(
        e,
        "font-family",
        /*textSecondaryStyle*/
        ((l = o[8]) == null ? void 0 : l.fontFamily) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && N(
        e,
        "font-variation-settings",
        /*textSecondaryStyle*/
        ((u = o[8]) == null ? void 0 : u.fontVariationSettings) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && N(
        e,
        "color",
        /*textSecondaryStyle*/
        ((c = o[8]) == null ? void 0 : c.textColor) || "#000"
      );
    },
    d(o) {
      o && k(r);
    }
  };
}
function Nc(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Me("input"), this.h();
    },
    l(a) {
      r = ze(a, "INPUT", {
        type: !0,
        class: !0,
        min: !0,
        max: !0,
        step: !0,
        "aria-label": !0
      }), this.h();
    },
    h() {
      g(r, "type", "range"), g(r, "class", e = /*switchedTracks*/
      t[16] ? Xr.slider__input : `${Xr.slider__input} ${Xr.slider__input_secondary}`), g(
        r,
        "min",
        /*minValue*/
        t[3]
      ), g(
        r,
        "max",
        /*maxValue*/
        t[4]
      ), g(r, "step", "1"), r.value = n = /*switchedTracks*/
      t[16] ? (
        /*value*/
        t[11]
      ) : (
        /*value2*/
        t[12]
      ), r.disabled = o = !/*isEnabled*/
      t[9], g(
        r,
        "aria-label",
        /*secondaryDescription*/
        t[20]
      );
    },
    m(a, l) {
      K(a, r, l), i || (s = [
        et(
          r,
          "input",
          /*input_handler_1*/
          t[75]
        ),
        et(r, "mousedown", function() {
          Rr(
            /*secondVariable*/
            t[13] ? (
              /*onSecondMousedown*/
              t[41]
            ) : null
          ) && (t[13] ? (
            /*onSecondMousedown*/
            t[41]
          ) : null).apply(this, arguments);
        }),
        et(r, "touchstart", function() {
          Rr(
            /*secondVariable*/
            t[13] ? (
              /*onSecondMousedown*/
              t[41]
            ) : null
          ) && (t[13] ? (
            /*onSecondMousedown*/
            t[41]
          ) : null).apply(this, arguments);
        }),
        et(r, "focus", function() {
          Rr(
            /*focusHandler*/
            t[83]
          ) && t[83].apply(this, arguments);
        }),
        et(r, "blur", function() {
          Rr(
            /*blurHandler*/
            t[84]
          ) && t[84].apply(this, arguments);
        })
      ], i = !0);
    },
    p(a, l) {
      t = a, l[0] & /*switchedTracks*/
      65536 && e !== (e = /*switchedTracks*/
      t[16] ? Xr.slider__input : `${Xr.slider__input} ${Xr.slider__input_secondary}`) && g(r, "class", e), l[0] & /*minValue*/
      8 && g(
        r,
        "min",
        /*minValue*/
        t[3]
      ), l[0] & /*maxValue*/
      16 && g(
        r,
        "max",
        /*maxValue*/
        t[4]
      ), l[0] & /*switchedTracks, value, value2*/
      71680 && n !== (n = /*switchedTracks*/
      t[16] ? (
        /*value*/
        t[11]
      ) : (
        /*value2*/
        t[12]
      )) && (r.value = n), l[0] & /*isEnabled*/
      512 && o !== (o = !/*isEnabled*/
      t[9]) && (r.disabled = o), l[0] & /*secondaryDescription*/
      1048576 && g(
        r,
        "aria-label",
        /*secondaryDescription*/
        t[20]
      );
    },
    d(a) {
      a && k(r), i = !1, Gr(s);
    }
  };
}
function W1(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _, p, m, h, y, w, D = dr(
    /*renderRanges*/
    t[21]
  ), z = [];
  for (let I = 0; I < D.length; I += 1)
    z[I] = Dc(Sc(t, D, I));
  let O = dr(
    /*markActiveTicks*/
    t[17]
  ), $ = [];
  for (let I = 0; I < O.length; I += 1)
    $[I] = Ic(Vc(t, O, I));
  let ue = dr(
    /*markInactiveTicks*/
    t[18]
  ), M = [];
  for (let I = 0; I < ue.length; I += 1)
    M[I] = Fc(Ac(t, ue, I));
  let Y = (
    /*textStyle*/
    t[7] && Tc(t)
  ), se = (
    /*secondVariable*/
    t[13] && Mc(t)
  ), C = (
    /*secondVariable*/
    t[13] && Nc(t)
  );
  return {
    c() {
      r = Me("div"), e = Me("div"), n = Me("div");
      for (let I = 0; I < z.length; I += 1)
        z[I].c();
      i = gr();
      for (let I = 0; I < $.length; I += 1)
        $[I].c();
      s = gr();
      for (let I = 0; I < M.length; I += 1)
        M[I].c();
      a = gr(), l = Me("div"), Y && Y.c(), u = gr(), se && se.c(), c = gr(), f = Me("input"), h = gr(), C && C.c(), this.h();
    },
    l(I) {
      r = ze(I, "DIV", { class: !0 });
      var P = je(r);
      e = ze(P, "DIV", { class: !0 });
      var B = je(e);
      n = ze(B, "DIV", { class: !0 });
      var q = je(n);
      for (let _e = 0; _e < z.length; _e += 1)
        z[_e].l(q);
      q.forEach(k), i = mr(B);
      for (let _e = 0; _e < $.length; _e += 1)
        $[_e].l(B);
      s = mr(B);
      for (let _e = 0; _e < M.length; _e += 1)
        M[_e].l(B);
      a = mr(B), l = ze(B, "DIV", { class: !0 });
      var pe = je(l);
      Y && Y.l(pe), pe.forEach(k), u = mr(B), se && se.l(B), c = mr(B), f = ze(B, "INPUT", {
        type: !0,
        class: !0,
        min: !0,
        max: !0,
        step: !0,
        "aria-label": !0
      }), h = mr(B), C && C.l(B), B.forEach(k), P.forEach(k), this.h();
    },
    h() {
      g(n, "class", o = Xr["slider__tracks-ranges"] + /*$direction*/
      (t[14] === "rtl" ? " " + Xr["slider__tracks-ranges_rtl"] : "")), g(l, "class", Xr.slider__thumb), N(l, "border-radius", me(
        /*thumbStyle*/
        t[5].borderRadius
      )), N(
        l,
        "background",
        /*thumbStyle*/
        t[5].background
      ), N(
        l,
        "box-shadow",
        /*thumbStyle*/
        t[5].boxShadow || ""
      ), g(f, "type", "range"), g(f, "class", _ = /*switchedTracks*/
      t[16] ? `${Xr.slider__input} ${Xr.slider__input_secondary}` : Xr.slider__input), g(
        f,
        "min",
        /*minValue*/
        t[3]
      ), g(
        f,
        "max",
        /*maxValue*/
        t[4]
      ), g(f, "step", "1"), f.value = p = /*switchedTracks*/
      t[16] ? (
        /*value2*/
        t[12]
      ) : (
        /*value*/
        t[11]
      ), f.disabled = m = !/*isEnabled*/
      t[9], g(
        f,
        "aria-label",
        /*description*/
        t[19]
      ), g(e, "class", Xr["slider__tracks-inner"]), g(r, "class", Xr["slider__tracks-wrapper"]);
    },
    m(I, P) {
      K(I, r, P), jt(r, e), jt(e, n);
      for (let B = 0; B < z.length; B += 1)
        z[B] && z[B].m(n, null);
      jt(e, i);
      for (let B = 0; B < $.length; B += 1)
        $[B] && $[B].m(e, null);
      jt(e, s);
      for (let B = 0; B < M.length; B += 1)
        M[B] && M[B].m(e, null);
      jt(e, a), jt(e, l), Y && Y.m(l, null), jt(e, u), se && se.m(e, null), jt(e, c), jt(e, f), t[74](f), jt(e, h), C && C.m(e, null), t[76](e), y || (w = [
        et(
          f,
          "input",
          /*input_handler*/
          t[73]
        ),
        et(f, "focus", function() {
          Rr(
            /*focusHandler*/
            t[83]
          ) && t[83].apply(this, arguments);
        }),
        et(f, "blur", function() {
          Rr(
            /*blurHandler*/
            t[84]
          ) && t[84].apply(this, arguments);
        })
      ], y = !0);
    },
    p(I, P) {
      if (t = I, P[0] & /*renderRanges*/
      2097152) {
        D = dr(
          /*renderRanges*/
          t[21]
        );
        let B;
        for (B = 0; B < D.length; B += 1) {
          const q = Sc(t, D, B);
          z[B] ? z[B].p(q, P) : (z[B] = Dc(q), z[B].c(), z[B].m(n, null));
        }
        for (; B < z.length; B += 1)
          z[B].d(1);
        z.length = D.length;
      }
      if (P[0] & /*$direction*/
      16384 && o !== (o = Xr["slider__tracks-ranges"] + /*$direction*/
      (t[14] === "rtl" ? " " + Xr["slider__tracks-ranges_rtl"] : "")) && g(n, "class", o), P[0] & /*markActiveTicks*/
      131072) {
        O = dr(
          /*markActiveTicks*/
          t[17]
        );
        let B;
        for (B = 0; B < O.length; B += 1) {
          const q = Vc(t, O, B);
          $[B] ? $[B].p(q, P) : ($[B] = Ic(q), $[B].c(), $[B].m(e, s));
        }
        for (; B < $.length; B += 1)
          $[B].d(1);
        $.length = O.length;
      }
      if (P[0] & /*markInactiveTicks*/
      262144) {
        ue = dr(
          /*markInactiveTicks*/
          t[18]
        );
        let B;
        for (B = 0; B < ue.length; B += 1) {
          const q = Ac(t, ue, B);
          M[B] ? M[B].p(q, P) : (M[B] = Fc(q), M[B].c(), M[B].m(e, a));
        }
        for (; B < M.length; B += 1)
          M[B].d(1);
        M.length = ue.length;
      }
      /*textStyle*/
      t[7] ? Y ? Y.p(t, P) : (Y = Tc(t), Y.c(), Y.m(l, null)) : Y && (Y.d(1), Y = null), P[0] & /*thumbStyle*/
      32 && N(l, "border-radius", me(
        /*thumbStyle*/
        t[5].borderRadius
      )), P[0] & /*thumbStyle*/
      32 && N(
        l,
        "background",
        /*thumbStyle*/
        t[5].background
      ), P[0] & /*thumbStyle*/
      32 && N(
        l,
        "box-shadow",
        /*thumbStyle*/
        t[5].boxShadow || ""
      ), /*secondVariable*/
      t[13] ? se ? se.p(t, P) : (se = Mc(t), se.c(), se.m(e, c)) : se && (se.d(1), se = null), P[0] & /*switchedTracks*/
      65536 && _ !== (_ = /*switchedTracks*/
      t[16] ? `${Xr.slider__input} ${Xr.slider__input_secondary}` : Xr.slider__input) && g(f, "class", _), P[0] & /*minValue*/
      8 && g(
        f,
        "min",
        /*minValue*/
        t[3]
      ), P[0] & /*maxValue*/
      16 && g(
        f,
        "max",
        /*maxValue*/
        t[4]
      ), P[0] & /*switchedTracks, value2, value*/
      71680 && p !== (p = /*switchedTracks*/
      t[16] ? (
        /*value2*/
        t[12]
      ) : (
        /*value*/
        t[11]
      )) && (f.value = p), P[0] & /*isEnabled*/
      512 && m !== (m = !/*isEnabled*/
      t[9]) && (f.disabled = m), P[0] & /*description*/
      524288 && g(
        f,
        "aria-label",
        /*description*/
        t[19]
      ), /*secondVariable*/
      t[13] ? C ? C.p(t, P) : (C = Nc(t), C.c(), C.m(e, null)) : C && (C.d(1), C = null);
    },
    d(I) {
      I && k(r), hn(z, I), hn($, I), hn(M, I), Y && Y.d(), se && se.d(), t[74](null), C && C.d(), t[76](null), y = !1, Gr(w);
    }
  };
}
function U1(t) {
  let r, e, n, o, i, s;
  const a = [H1, R1], l = [];
  function u(c, f) {
    return (
      /*hasError*/
      c[10] ? -1 : 0
    );
  }
  return ~(r = u(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = Re();
    },
    l(c) {
      e && e.l(c), n = Re();
    },
    m(c, f) {
      ~r && l[r].m(c, f), K(c, n, f), o = !0, i || (s = et(
        window,
        "resize",
        /*checkTicksDebounced*/
        t[43]
      ), i = !0);
    },
    p(c, f) {
      let _ = r;
      r = u(c), r === _ ? ~r && l[r].p(c, f) : (e && (br(), oe(l[_], 1, 1, () => {
        l[_] = null;
      }), yr()), ~r ? (e = l[r], e ? e.p(c, f) : (e = l[r] = a[r](c), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(c) {
      o || (G(e), o = !0);
    },
    o(c) {
      oe(e), o = !1;
    },
    d(c) {
      c && k(n), ~r && l[r].d(c), i = !1, s();
    }
  };
}
const so = {
  width: 10,
  height: 10,
  borderRadius: 5,
  background: "#000"
}, ks = ["rounded_rectangle", "circle"], Rl = ["rounded_rectangle"];
function js(t, r, e, n, o) {
  let i = [];
  if (o)
    for (let s = t; s < r; ++s)
      i.push((s - e) / (n - e));
  else {
    for (let s = e; s < t; ++s)
      i.push((s - e) / (n - e));
    for (let s = r; s < n + 1; ++s)
      i.push((s - e) / (n - e));
  }
  return i;
}
function G1(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, p, m, h, y, w, D, z, O, $, ue, M, Y, se, C, I, P, B, q, pe, _e = j, Ae = () => (_e(), _e = V($, (E) => e(57, pe = E)), $), be, Ie = j, x = () => (Ie(), Ie = V(z, (E) => e(58, be = E)), z), Ye, Qe = j, xe = () => (Qe(), Qe = V(O, (E) => e(59, Ye = E)), O), we, Te = j, ge = () => (Te(), Te = V(D, (E) => e(60, we = E)), D), ye, he = j, te = () => (he(), he = V(w, (E) => e(61, ye = E)), w), fe, re = j, ve = () => (re(), re = V(y, (E) => e(62, fe = E)), y), qe, Xe = j, ee = () => (Xe(), Xe = V(h, (E) => e(63, qe = E)), h), He, Oe = j, lt = () => (Oe(), Oe = V(m, (E) => e(64, He = E)), m), _t, it = j, Et = () => (it(), it = V(p, (E) => e(65, _t = E)), p), at, zt = j, ht = () => (zt(), zt = V(_, (E) => e(66, at = E)), _), Z, de = j, ct = () => (de(), de = V(f, (E) => e(67, Z = E)), f), Be, T = j, St = () => (T(), T = V(c, (E) => e(68, Be = E)), c), dt, Ft = j, Pt = () => (Ft(), Ft = V(a, (E) => e(69, dt = E)), a), st, Q = j, Dt = () => (Q(), Q = V(s, (E) => e(70, st = E)), s), Ot, nr = j, er = () => (nr(), nr = V(u, (E) => e(71, Ot = E)), u), Ve, Ge = j, yt = () => (Ge(), Ge = V(l, (E) => e(72, Ve = E)), l);
  t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => Ie()), t.$$.on_destroy.push(() => Qe()), t.$$.on_destroy.push(() => Te()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => re()), t.$$.on_destroy.push(() => Xe()), t.$$.on_destroy.push(() => Oe()), t.$$.on_destroy.push(() => it()), t.$$.on_destroy.push(() => zt()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => T()), t.$$.on_destroy.push(() => Ft()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => nr()), t.$$.on_destroy.push(() => Ge());
  let { componentContext: Pe } = r, { layoutParams: tt = void 0 } = r;
  const Le = zr($r), Tt = zr(Bo), We = Le.direction;
  kn(t, We, (E) => e(14, q = E));
  let vt, qt, Nt, ar = !1, Fe = 0, At = 100, ur = so, sr = ur, lr = so, hr = so, Er, Bt = null, kr, Ut = null, wt, or = wt, le = "", Cr = "", Ar = !0, Vt = !1, Pr = [];
  function Ur() {
    e(5, ur = so), e(6, sr = ur), e(45, lr = so), e(46, hr = so), e(47, Bt = null), e(48, Ut = null), e(7, wt = void 0), e(8, or = void 0), e(19, le = ""), e(9, Ar = !0), e(20, Cr = "");
  }
  let fr = No(st || 0, Fe, At), ft = No(dt || 0, Fe, At);
  function It({ direction: E, minValue: ie, maxValue: d, trackActiveOffset: R, trackActivePart: Ce, trackInactiveStyle: Je, trackActiveStyle: ke, ranges: L = [] }) {
    const Lt = [], Rt = (ut, Yt, Ir) => {
      var Nr, En, Se, Qr;
      const cr = (Kr, _n, v, A) => {
        var W, ot, Ne, rr;
        const S = Math.max(Kr, Yt);
        if (Math.min(_n, Ir) - S > 0) {
          const Mt = A && (ot = (W = A[E === "ltr" ? "start" : "end"]) != null ? W : A.left) != null ? ot : 0, U = A && (rr = (Ne = A[E === "ltr" ? "end" : "start"]) != null ? Ne : A.right) != null ? rr : 0;
          Lt.push({
            left: Kr,
            right: _n,
            totalLeft: Yt,
            totalRight: Ir,
            leftMargin: Mt,
            rightMargin: U,
            style: v
          });
        }
      };
      if ((!L[0] || ((Nr = L[0].start) != null ? Nr : ie) > Yt) && cr(Yt, L[0] ? (En = L[0].start) != null ? En : ie : Ir, ut === "inactive" ? Je : ke), L.forEach((Kr, _n) => {
        var rr, Mt, U, $t;
        const v = Kr[ut === "inactive" ? "track_inactive_style" : "track_active_style"], S = v ? go(v, Rl, so) : ut === "inactive" ? Je : ke, ae = L[_n - 1], W = L[_n + 1], ot = (Mt = (rr = Kr.start) != null ? rr : ae == null ? void 0 : ae.end) != null ? Mt : Yt, Ne = ($t = (U = Kr.end) != null ? U : W == null ? void 0 : W.start) != null ? $t : Ir;
        cr(ot, Ne, S, Kr.margins);
      }), L[L.length - 1] && ((Se = L[L.length - 1].end) != null ? Se : d) < Ir) {
        const Kr = (Qr = L[L.length - 1].end) != null ? Qr : d;
        cr(Kr, Ir, ut === "inactive" ? Je : ke);
      }
    };
    Rt("inactive", ie, d), Rt("active", R, R + Ce);
    const Ke = d - ie;
    e(21, Pr = Lt.map((ut) => {
      let Yt = `${(ut.left - ie) * 100 / Ke}%`;
      ut.leftMargin && (Yt = `calc(${Yt} + ${pn(ut.leftMargin)})`);
      let Ir;
      ut.totalLeft < ut.left ? Ir = Yt : ut.leftMargin ? Ir = `max(${(ut.totalLeft - ie) * 100 / Ke}%, ${Yt})` : Ir = `${(Math.max(ut.totalLeft, ut.left) - ie) * 100 / Ke}%`;
      let cr = `${(1 - (ut.right - ie) / Ke) * 100}%`;
      ut.rightMargin && (cr = `calc(${cr} + ${pn(ut.rightMargin)})`);
      let Nr;
      return ut.totalRight > ut.right ? Nr = cr : ut.rightMargin ? Nr = `max(${(1 - (ut.totalRight - ie) / Ke) * 100}%, ${cr})` : Nr = `${(1 - (Math.max(ut.totalRight, ut.right) - ie) / Ke) * 100}%`, {
        left: Ir,
        right: Nr,
        height: me(ut.style.height),
        borderRadius: me(ut.style.borderRadius),
        background: ut.style.background,
        boxShadow: ut.style.boxShadow || ""
      };
    }));
  }
  function Kt(E) {
    var L, Lt;
    if (!Ar)
      return;
    const ie = "pageX" in E ? E.pageX : (Lt = (L = E.changedTouches) == null ? void 0 : L[0]) == null ? void 0 : Lt.pageX;
    if (ie === void 0)
      return;
    const d = Nt.getBoundingClientRect();
    let R = (ie - d.left) / d.width;
    q === "rtl" && (R = 1 - R);
    const Ce = Fe + (At - Fe) * R, Je = Math.round(No(Ce, Fe, At)), ke = (fr + ft) / 2;
    e(16, ar = Je < ke == fr < ft);
  }
  function tr(E, ie) {
    const d = Number(E.target.value);
    ar === (ie === "first") ? (e(12, ft = d), a.setValue(d)) : (e(11, fr = d), s.setValue(d));
  }
  let rt = !1;
  function mt() {
    if (!Nt)
      return;
    const E = At - Fe, ie = (Bt == null ? void 0 : Bt.width) || 0, d = (Ut == null ? void 0 : Ut.width) || 0;
    Math.max(ie, d) * E >= (Nt == null ? void 0 : Nt.clientWidth) ? rt || (Pe.logError(X(new Error("Slider ticks overlap each other"), { level: "warn" })), rt = !0) : rt = !1;
  }
  const ce = Ca(mt, 50);
  no(() => {
    mt();
  }), dn(() => {
    vt && (Le.unregisterFocusable(vt), e(44, vt = void 0));
  });
  const Ct = (E) => tr(E, "first");
  function ir(E) {
    Mr[E ? "unshift" : "push"](() => {
      qt = E, e(2, qt);
    });
  }
  const Gt = (E) => tr(E, "second");
  function jr(E) {
    Mr[E ? "unshift" : "push"](() => {
      Nt = E, e(15, Nt);
    });
  }
  return t.$$set = (E) => {
    "componentContext" in E && e(0, Pe = E.componentContext), "layoutParams" in E && e(1, tt = E.layoutParams);
  }, t.$$.update = () => {
    var E, ie, d, R;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(56, n = Pe.origJson), t.$$.dirty[1] & /*origJson*/
    33554432 && n && Ur(), t.$$.dirty[0] & /*componentContext*/
    1 && e(55, o = Pe.json.thumb_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(13, i = Pe.json.thumb_secondary_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*firstVariable*/
    16777216 && Dt(e(22, s = o && (Pe.getVariable(o, "integer") || Le.awaitGlobalVariable(o, "integer", 0)) || eo("temp", "integer", 0))), t.$$.dirty[0] & /*secondVariable, componentContext*/
    8193 && Pt(e(23, a = i && (Pe.getVariable(i, "integer") || Le.awaitGlobalVariable(i, "integer", 0)) || eo("temp", "integer", 0))), t.$$.dirty[0] & /*componentContext*/
    1 && yt(e(39, l = Pe.getDerivedFromVars(Pe.json.min_value))), t.$$.dirty[0] & /*componentContext*/
    1 && er(e(38, u = Pe.getDerivedFromVars(Pe.json.max_value))), t.$$.dirty[0] & /*componentContext*/
    1 && St(e(37, c = Pe.getDerivedFromVars(Pe.json.thumb_style))), t.$$.dirty[0] & /*componentContext*/
    1 && ct(e(36, f = Pe.getDerivedFromVars(Pe.json.thumb_secondary_style))), t.$$.dirty[0] & /*componentContext*/
    1 && ht(e(35, _ = Pe.getDerivedFromVars(Pe.json.track_inactive_style))), t.$$.dirty[0] & /*componentContext*/
    1 && Et(e(34, p = Pe.getDerivedFromVars(Pe.json.track_active_style))), t.$$.dirty[0] & /*componentContext*/
    1 && lt(e(33, m = Pe.getDerivedFromVars(Pe.json.tick_mark_active_style))), t.$$.dirty[0] & /*componentContext*/
    1 && ee(e(32, h = Pe.getDerivedFromVars(Pe.json.tick_mark_inactive_style))), t.$$.dirty[0] & /*componentContext*/
    1 && ve(e(31, y = Pe.getDerivedFromVars(Pe.json.thumb_text_style, void 0, !0, 1))), t.$$.dirty[0] & /*componentContext*/
    1 && te(e(30, w = Pe.getDerivedFromVars(Pe.json.thumb_secondary_text_style, void 0, !0, 1))), t.$$.dirty[0] & /*componentContext*/
    1 && ge(e(29, D = Pe.getDerivedFromVars(Pe.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && x(e(28, z = Pe.getDerivedFromVars(Pe.json.secondary_value_accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && xe(e(27, O = Pe.getDerivedFromVars(Pe.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(26, $ = Pe.getDerivedFromVars(Pe.json.ranges))), t.$$.dirty[0] & /*minValue, maxValue*/
    24 | t.$$.dirty[2] & /*$jsonMinValue, $jsonMaxValue*/
    1536 && (e(3, Fe = fo(Ve, Fe)), e(4, At = fo(Ot, At)), mt()), t.$$.dirty[0] & /*minValue, maxValue, value*/
    2072 | t.$$.dirty[2] & /*$valueVariable*/
    256) {
      const Ce = No(st || 0, Fe, At);
      Ce !== fr && e(11, fr = Ce);
    }
    if (t.$$.dirty[0] & /*minValue, maxValue, value2*/
    4120 | t.$$.dirty[2] & /*$value2Variable*/
    128) {
      const Ce = No(dt || 0, Fe, At);
      Ce !== ft && e(12, ft = Ce);
    }
    if (t.$$.dirty[0] & /*thumbStyle*/
    32 | t.$$.dirty[2] & /*$jsonThumbStyle*/
    64 && e(5, ur = go(Be, ks, ur)), t.$$.dirty[0] & /*thumbStyle*/
    32 | t.$$.dirty[2] & /*$jsonThumbSecondaryStyle*/
    32 && e(6, sr = go(Z, ks, ur)), t.$$.dirty[1] & /*trackInactiveStyle*/
    16384 | t.$$.dirty[2] & /*$jsonTrackInactiveStyle*/
    16 && e(45, lr = go(at, Rl, lr)), t.$$.dirty[1] & /*trackActiveStyle*/
    32768 | t.$$.dirty[2] & /*$jsonTrackActiveStyle*/
    8 && e(46, hr = go(_t, Rl, hr)), t.$$.dirty[2] & /*$jsonMarkActiveStyle*/
    4) {
      let Ce = go(He, ks, so);
      Ce !== so && e(47, Bt = Ce);
    }
    if (t.$$.dirty[0] & /*secondVariable, value, value2, minValue, maxValue*/
    14360 | t.$$.dirty[1] & /*markActiveStyle*/
    65536 && (Bt ? (e(17, Er = i ? js(Math.min(fr, ft), Math.max(fr, ft) + 1, Fe, At, !0) : js(Fe, fr, Fe, At, !0)), mt()) : e(17, Er = [])), t.$$.dirty[2] & /*$jsonMarkInactiveStyle*/
    2) {
      let Ce = go(qe, ks, so);
      Ce !== so && e(48, Ut = Ce);
    }
    if (t.$$.dirty[0] & /*secondVariable, value, value2, minValue, maxValue*/
    14360 | t.$$.dirty[1] & /*markInactiveStyle*/
    131072 && (Ut ? (e(18, kr = i ? js(Math.min(fr, ft), Math.max(fr, ft) + 1, Fe, At, !1) : js(fr + 1, At + 1, Fe, At, !0)), mt()) : e(18, kr = [])), t.$$.dirty[0] & /*textStyle*/
    128 | t.$$.dirty[2] & /*$jsonTextStyle*/
    1 && e(7, wt = Ec(fe, Le.typefaceProvider, wt)), t.$$.dirty[0] & /*textStyle*/
    128 | t.$$.dirty[1] & /*$jsonSecondaryTextStyle*/
    1073741824 && e(8, or = Ec(ye, Le.typefaceProvider, wt)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    536870912 && (we != null && we.description ? e(19, le = ei(we)) : Pe.logError(X(new Error('Missing accessibility "description" for slider'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled*/
    512 | t.$$.dirty[1] & /*$jsonIsEnabled*/
    268435456 && e(9, Ar = en(Ye, Ar)), t.$$.dirty[0] & /*secondVariable, componentContext*/
    8193 | t.$$.dirty[1] & /*$jsonSecondaryAccessibility*/
    134217728 && (be != null && be.description ? e(20, Cr = ei(be)) : i && Pe.logError(X(new Error('Missing second accessibility "description" for slider'), { level: "warn" }))), t.$$.dirty[0] & /*componentContext, thumbStyle, hasError*/
    1057 | t.$$.dirty[1] & /*trackActiveStyle, trackInactiveStyle*/
    49152) {
      let Ce = !1;
      Tt.hasAction() ? (Pe.logError(X(new Error('Cannot show "slider" inside component with an action or inside accessibility mode=exclude'))), Ce = !0) : ur === so ? (Pe.logError(X(new Error('Missing "thumb_style" in slider'))), Ce = !0) : hr === so ? (Pe.logError(X(new Error('Missing "track_active_style" in slider'))), Ce = !0) : lr === so && (Pe.logError(X(new Error('Missing "track_inactive_style" in slider'))), Ce = !0), Ce !== Vt && e(10, Vt = Ce);
    }
    t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle*/
    96 && e(52, ue = me(Math.max(...[ur.width, sr.width, 0].filter(Rn)))), t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle*/
    96 && e(51, M = me(Math.max(...[ur.height, sr.height, 0].filter(Rn)))), t.$$.dirty[0] & /*value, minValue, maxValue*/
    2072 && e(50, Y = (fr - Fe) / (At - Fe)), t.$$.dirty[0] & /*secondVariable, value2, minValue, maxValue*/
    12312 && e(49, se = i ? (ft - Fe) / (At - Fe) : void 0), t.$$.dirty[0] & /*value, value2, minValue*/
    6152 | t.$$.dirty[1] & /*trackSecondaryPart*/
    262144 && e(54, C = se !== void 0 ? Math.min(fr, ft) : Fe), t.$$.dirty[0] & /*value2, value, minValue*/
    6152 | t.$$.dirty[1] & /*trackSecondaryPart*/
    262144 && e(53, I = se !== void 0 ? Math.abs(ft - fr) : fr - Fe), t.$$.dirty[0] & /*$direction, minValue, maxValue*/
    16408 | t.$$.dirty[1] & /*trackActiveOffset, trackActivePart, trackInactiveStyle, trackActiveStyle, $jsonRanges*/
    79740928 && It({
      direction: q,
      minValue: Fe,
      maxValue: At,
      trackActiveOffset: C,
      trackActivePart: I,
      trackInactiveStyle: lr,
      trackActiveStyle: hr,
      ranges: pe
    }), t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle, textStyle, textSecondaryStyle*/
    480 | t.$$.dirty[1] & /*markActiveStyle, markInactiveStyle, maxThumbWidth, maxThumbHeight, trackPart, trackSecondaryPart*/
    4128768 && e(25, P = {
      "--divkit-slider-thumb-width": me(ur.width),
      "--divkit-slider-thumb-height": me(ur.height),
      "--divkit-slider-thumb-secondary-width": me(sr.width),
      "--divkit-slider-thumb-secondary-height": me(sr.height),
      "--divkit-slider-text-offset-x": (E = wt == null ? void 0 : wt.offset) != null && E.x ? pn(wt.offset.x) : void 0,
      "--divkit-slider-text-offset-y": (ie = wt == null ? void 0 : wt.offset) != null && ie.y ? pn(wt.offset.y) : void 0,
      "--divkit-slider-text-secondary-offset-x": (d = or == null ? void 0 : or.offset) != null && d.x ? pn(or.offset.x) : void 0,
      "--divkit-slider-text-secondary-offset-y": (R = or == null ? void 0 : or.offset) != null && R.y ? pn(or.offset.y) : void 0,
      "--divkit-slider-tick-active-width": Bt ? me(Bt.width) : void 0,
      "--divkit-slider-tick-active-height": Bt ? me(Bt.height) : void 0,
      "--divkit-slider-tick-active-border-radius": Bt ? me(Bt.borderRadius) : void 0,
      "--divkit-slider-tick-active-background": (Bt == null ? void 0 : Bt.background) || void 0,
      "--divkit-slider-tick-active-box-shadow": (Bt == null ? void 0 : Bt.boxShadow) || void 0,
      "--divkit-slider-tick-inactive-width": Ut ? me(Ut.width) : void 0,
      "--divkit-slider-tick-inactive-height": Ut ? me(Ut.height) : void 0,
      "--divkit-slider-tick-inactive-border-radius": Ut ? me(Ut.borderRadius) : void 0,
      "--divkit-slider-tick-inactive-background": (Ut == null ? void 0 : Ut.background) || void 0,
      "--divkit-slider-tick-inactive-box-shadow": (Ut == null ? void 0 : Ut.boxShadow) || void 0,
      "--divkit-slider-max-thumb-width": ue,
      "--divkit-slider-max-thumb-height": M,
      "--divkit-slider-track-part": Y,
      "--divkit-slider-track-secondary-part": se
    }), t.$$.dirty[0] & /*$direction*/
    16384 && e(24, B = { direction: q }), t.$$.dirty[0] & /*componentContext, input*/
    5 | t.$$.dirty[1] & /*prevId*/
    8192 && Pe.json && qt && (vt && (Le.unregisterFocusable(vt), e(44, vt = void 0)), Pe.id && !Pe.fakeElement && (e(44, vt = Pe.id), Le.registerFocusable(vt, {
      focus() {
        qt && qt.focus();
      }
    })));
  }, [
    Pe,
    tt,
    qt,
    Fe,
    At,
    ur,
    sr,
    wt,
    or,
    Ar,
    Vt,
    fr,
    ft,
    i,
    q,
    Nt,
    ar,
    Er,
    kr,
    le,
    Cr,
    Pr,
    s,
    a,
    B,
    P,
    $,
    O,
    z,
    D,
    w,
    y,
    h,
    m,
    p,
    _,
    f,
    c,
    u,
    l,
    We,
    Kt,
    tr,
    ce,
    vt,
    lr,
    hr,
    Bt,
    Ut,
    se,
    Y,
    M,
    ue,
    I,
    C,
    o,
    n,
    pe,
    be,
    Ye,
    we,
    ye,
    fe,
    qe,
    He,
    _t,
    at,
    Z,
    Be,
    dt,
    st,
    Ot,
    Ve,
    Ct,
    ir,
    Gt,
    jr
  ];
}
class J1 extends Wr {
  constructor(r) {
    super(), Hr(this, r, G1, U1, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const q1 = "appkit-input", K1 = "appkit-input__aligner", Y1 = "appkit-input__input", X1 = "appkit-input__placeholder", Z1 = "appkit-input__input_singleline", Q1 = "appkit-input__input_multiline", qi = {
  input: q1,
  "input_alignment-horizontal_center": "appkit-input_alignment-horizontal_center",
  "input_alignment-horizontal_end": "appkit-input_alignment-horizontal_end",
  input__aligner: K1,
  input__input: Y1,
  input__placeholder: X1,
  "input_alignment-vertical_start": "appkit-input_alignment-vertical_start",
  "input_alignment-vertical_end": "appkit-input_alignment-vertical_end",
  "input_alignment-vertical_baseline": "appkit-input_alignment-vertical_baseline",
  "input_highlight-color": "appkit-input_highlight-color",
  input__input_singleline: Z1,
  "input__scroll-wrapper": "appkit-input__scroll-wrapper",
  input__input_multiline: Q1,
  "input__input_has-custom-focus": "appkit-input__input_has-custom-focus"
};
function ms(t, r) {
  if (t === r)
    return {
      start: t.length,
      added: 0,
      removed: 0
    };
  if (t.length > r.length) {
    const i = ms(r, t);
    return {
      start: i.start,
      added: i.removed,
      removed: i.added
    };
  }
  let e = 0, n = r.length - 1;
  const o = r.length - t.length;
  for (; e < n && e < t.length && t[e] === r[e]; )
    ++e;
  for (; n - o >= e && t[n - o] === r[n]; )
    --n;
  return ++n, {
    start: e,
    added: n - e,
    removed: n - e - o
  };
}
class zc {
  constructor(r) {
    this.char = r;
  }
}
class Ao {
  constructor(r, e, n) {
    this.char = r, this.filter = e, this.placeholder = n;
  }
}
class Ia {
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
    for (let e = 0; e < this.destructedValue.length; ++e) {
      const n = this.destructedValue[e];
      if (n instanceof zc)
        r += n.char;
      else if (n instanceof Ao)
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
    const r = this.destructedValue.findIndex((e) => e instanceof Ao && !e.char);
    return r !== -1 ? r : this.destructedValue.length;
  }
  updateMaskData(r, e = !0) {
    const n = this.maskData !== r && e ? this.rawValue : null;
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
      return i ? new Ao(
        null,
        this.filters.get(i.key),
        i.placeholder
      ) : new zc(o);
    }), n !== null && this.overrideRawValue(n);
  }
  overrideRawValue(r) {
    this.clearRange(0, this.destructedValue.length), this.replaceChars(r, 0), this.cursorPos = Math.min(this.cursorPos, this.value.length);
  }
  applyChangeFrom(r, e) {
    const n = ms(this.value, r);
    e !== void 0 && (n.start = Math.max(0, e - n.added));
    const o = this.replaceBodyTail(n, r);
    this.calculateCursorPosition(n, o);
  }
  replaceBodyTail(r, e) {
    const n = this.buildBodySubstring(r, e), o = this.buildTailSubstring(r);
    this.cleanup(r);
    const i = this.firstEmptyHolderIndex(), s = o ? this.calculateMaxShift(o, i) : void 0;
    this.replaceChars(n, i, s);
    const a = this.firstEmptyHolderIndex();
    return this.replaceChars(o, a), a;
  }
  buildBodySubstring(r, e) {
    return e.substring(r.start, r.start + r.added);
  }
  buildTailSubstring(r) {
    return this.collectValueRange(
      r.start + r.removed,
      this.destructedValue.length - 1
    );
  }
  calculateMaxShift(r, e) {
    if (this.filters.size <= 1) {
      let i = 0, s = e;
      for (; s < this.destructedValue.length; )
        this.destructedValue[s] instanceof Ao && ++i, ++s;
      return Math.max(0, i - r.length);
    }
    const n = this.calculateInsertableSubstring(r, e);
    let o = 0;
    for (; o < this.destructedValue.length && n === this.calculateInsertableSubstring(r, e + o); )
      ++o;
    return Math.max(0, o - 1);
  }
  cleanup(r) {
    if (r.added === 0 && r.removed === 1) {
      let e = r.start;
      for (; e >= 0; ) {
        const n = this.destructedValue[e];
        if (n instanceof Ao && n.char !== null) {
          n.char = null;
          break;
        } else
          --e;
      }
    }
    this.clearRange(r.start, this.destructedValue.length);
  }
  clearRange(r, e) {
    let n = r;
    for (; n < e && n < this.destructedValue.length; ) {
      const o = this.destructedValue[n];
      o instanceof Ao && (o.char = null), ++n;
    }
  }
  calculateCursorPosition(r, e) {
    const n = this.firstEmptyHolderIndex();
    let o;
    r.start < n ? o = Math.min(this.firstHolderAfter(e), this.value.length) : o = n, this.cursorPos = o;
  }
  calculateInsertableSubstring(r, e) {
    let n = "", o = e;
    const i = () => {
      var s;
      for (; o < this.destructedValue.length && !(this.destructedValue[o] instanceof Ao); )
        ++o;
      return (s = this.destructedValue[o]) == null ? void 0 : s.filter;
    };
    return r.split("").forEach((s) => {
      const a = i();
      a != null && a.test(s) && (n += s, ++o);
    }), n;
  }
  collectValueRange(r, e) {
    let n = "", o = r;
    for (; o <= e; ) {
      const i = this.destructedValue[o];
      i instanceof Ao && i.char !== null && (n += i.char), ++o;
    }
    return n;
  }
  replaceChars(r, e, n) {
    let o = this.calculateInsertableSubstring(r, e);
    n !== void 0 && (o = o.substring(0, n));
    let i = e, s = 0;
    for (; i < this.destructedValue.length && s < o.length; ) {
      const a = this.destructedValue[i], l = o[s];
      a instanceof Ao && (a.char = l, ++s), ++i;
    }
  }
  firstHolderAfter(r) {
    let e = r;
    for (; e < this.destructedValue.length && !(this.destructedValue[e] instanceof Ao); )
      ++e;
    return e;
  }
}
class x1 extends Ia {
  constructor(r, e) {
    super(r), this.logError = e;
  }
  onException(r) {
    this.logError(r);
  }
}
function $1(t, r, e) {
  if (typeof t.pattern == "string" && Array.isArray(t.pattern_elements) && t.pattern_elements.every((n) => n.key && typeof n.key == "string")) {
    const n = {
      pattern: t.pattern,
      alwaysVisible: !!t.always_visible,
      decoding: t.pattern_elements.map((o) => ({
        key: o.key,
        filter: o.regex && typeof o.regex == "string" ? o.regex : void 0,
        placeholder: o.placeholder && typeof o.placeholder == "string" ? o.placeholder : "_"
      }))
    };
    return e ? (e.updateMaskData(n), e) : new x1(n, r);
  }
  return e || null;
}
class eb extends Ia {
  constructor(e = void 0, n) {
    super({
      pattern: "",
      decoding: [],
      alwaysVisible: !1
    });
    Vr(this, "currencyFormatter", new Intl.NumberFormat());
    Vr(this, "decimalSeparator", ".");
    Vr(this, "localeDigits", {});
    Vr(this, "trimZeroRegExp", new RegExp(""));
    this.logError = n, this.initFormatter(e);
  }
  updateCurrencyParams(e) {
    const n = this.parseFormat(this.rawValue) || 0;
    this.initFormatter(e);
    const o = n.toString().replace(".", this.decimalSeparator);
    this.applyChangeFrom(o);
  }
  initFormatter(e) {
    try {
      this.currencyFormatter = new Intl.NumberFormat(e, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }), this.decimalSeparator = this.currencyFormatter.format(0)[1], this.localeDigits = new Array(10).fill("").reduce((i, s, a) => (i[a] = this.currencyFormatter.format(a)[0], i), {});
      const o = Object.keys(this.localeDigits).filter((i) => i !== "0").map((i) => this.localeDigits[i]).join("|");
      this.trimZeroRegExp = new RegExp(`^${this.localeDigits[0]}+(?=${o})`);
    } catch (n) {
      this.onException(X(n, {
        level: "error",
        additional: {
          locale: e
        }
      }));
    }
  }
  invalidateMaskDataForFormatted(e) {
    const n = this.currencyFormatter.format(e), o = this.formatPattern(n), i = [{
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
  overrideRawValue(e) {
    const n = this.parseFormat(e) || 0;
    this.invalidateMaskDataForFormatted(n), super.overrideRawValue(e);
  }
  applyChangeFrom(e, n) {
    const o = ms(this.value, e), i = this.value.lastIndexOf(this.decimalSeparator), s = e.lastIndexOf(this.decimalSeparator), a = i !== s || i === -1 && s === -1, l = this.validFormat(e, o);
    this.cleanup(o);
    const u = this.parseFormat(l) || 0;
    a && this.invalidateMaskDataForFormatted(u), this.replaceChars(l, 0), this.value.length > o.start && !this.isDigit(this.value[o.start]) ? this.cursorPos = n != null ? n : this.cursorPosition : this.cursorPos = Math.abs(this.value.length - (e.length - (n != null ? n : this.cursorPosition)));
  }
  parseFormat(e) {
    return parseFloat(
      e.replace(/./g, (n) => {
        const o = this.localeDigits[n];
        return o || (n === this.decimalSeparator ? "." : "");
      })
    );
  }
  formatPattern(e) {
    let n = "";
    for (const o of e)
      n += this.isDigit(o) ? "#" : o;
    return n;
  }
  validFormat(e, n) {
    if (!e)
      return "";
    let o = -1, i = 0;
    for (; i < e.length; ) {
      if (e[i] === this.decimalSeparator && !this.inDiff(n, i)) {
        o = i;
        break;
      }
      i++;
    }
    let s = -1;
    n.added === 1 && n.removed === 0 && [",", "."].includes(e[n.start]) && (s = n.start);
    const a = this.currencyFormatter.resolvedOptions().maximumFractionDigits || 0;
    let l = a;
    if (o !== -1)
      for (i = o; i < e.length; )
        this.isDigit(e[i]) && !this.inDiff(n, i) && l--, i++;
    else {
      let _ = !1;
      for (let p = 0; p < e.length; p++) {
        const m = e[p];
        m === this.decimalSeparator ? _ = !0 : !this.inDiff(n, p) && _ && this.isDigit(m) && l--;
      }
    }
    const u = e.includes(this.decimalSeparator) || s !== -1, c = [];
    i = e.length - 1;
    let f = !1;
    for (; i >= 0; ) {
      const _ = e[i], p = c.length <= a;
      this.isDigit(_) ? this.inDiff(n, i) && !f && u ? l > 0 && (c.push(_), l--) : c.push(_) : p && o === -1 && i === s ? (c.push(this.decimalSeparator), f = !0) : p && _ === this.decimalSeparator && (o === i || o === -1) && (c.push(this.decimalSeparator), f = !0, o = i), i--;
    }
    return c.reverse().join("").replace(this.trimZeroRegExp, "");
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
function tb(t, r, e) {
  return e ? (e.updateCurrencyParams(t.locale), e) : new eb(t.locale, r);
}
const rb = {
  kotlin: {
    public_default_values: !0
  },
  swift: {
    public_default_values: !0
  }
}, nb = {
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
}, ob = "object", ib = {
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
}, c_ = {
  codegen: rb,
  constants: nb,
  type: ob,
  properties: ib
}, sb = "000000000000000", Oc = "*", lb = "00", Bc = [{
  key: "0",
  filter: "\\d",
  placeholder: "_"
}];
class ab extends Ia {
  constructor(e) {
    super({
      pattern: Rc(""),
      decoding: Bc,
      alwaysVisible: !1
    });
    Vr(this, "decimalSeparator", ".");
    Vr(this, "localeDigits", {});
    Vr(this, "trimZeroRegExp", new RegExp(""));
    this.logError = e;
  }
  overrideRawValue(e) {
    this.tryInvalidateMaskDataWith(e), super.overrideRawValue(e);
  }
  applyChangeFrom(e, n) {
    const o = ms(this.value, e);
    n !== void 0 && (o.start = Math.max(0, n - o.added));
    const i = this.rawValue, s = this.replaceBodyTail(o, e), a = this.rawValue, l = this.newMaskPatternFor(a);
    if (l == null) {
      this.calculateCursorPosition(o, s);
      return;
    }
    this.updateMaskDataWith(l), this.replaceChars(a, 0);
    const u = ms(i, a), c = u.start + u.added;
    this.calculateCursorPositionBy(c);
  }
  calculateCursorPositionBy(e) {
    let n = 0, o = 0;
    for (; n < this.destructedValue.length && o < e; )
      this.destructedValue[n++] instanceof Ao && o++;
    this.cursorPos = this.firstHolderAfter(n);
  }
  tryInvalidateMaskDataWith(e) {
    const n = this.newMaskPatternFor(e);
    n && this.updateMaskDataWith(n);
  }
  newMaskPatternFor(e) {
    const n = Rc(e), o = this.maskData.pattern;
    return n !== o ? n : null;
  }
  updateMaskDataWith(e) {
    return this.updateMaskData({
      pattern: e,
      decoding: Bc,
      alwaysVisible: this.maskData.alwaysVisible
    }, !1);
  }
  onException(e) {
    this.logError(e);
  }
}
function Lc(t) {
  return "$ref" in t ? c_.constants[t.$ref.split("/").pop()] : t;
}
function Rc(t) {
  if (!t)
    return sb;
  let r = c_.properties.value.default_value, e = 0;
  for (; !("value" in r); ) {
    if (e >= t.length) {
      r = Lc(r[Oc]);
      break;
    }
    const n = t[e++];
    r = Lc(r[n in r ? n : Oc]);
  }
  return r.value + lb;
}
function ub(t, r) {
  return r || new ab(t);
}
function cb(t) {
  let r, e;
  return r = new Pn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function fb(t) {
  let r, e;
  return r = new vn({
    props: {
      alwaysCustomFocus: !0,
      cls: bt(
        "input",
        qi,
        /*mods*/
        t[18]
      ),
      style: (
        /*stl*/
        t[17]
      ),
      customDescription: !0,
      customActions: "input",
      customPaddings: !0,
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: {
        default: [
          hb,
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
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      262144 && (i.cls = bt(
        "input",
        qi,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function db(t) {
  let r, e, n, o, i, s, a, l, u;
  return {
    c() {
      r = Me("input"), this.h();
    },
    l(c) {
      r = ze(c, "INPUT", {
        type: !0,
        inputmode: !0,
        class: !0,
        autocomplete: !0,
        autocapitalize: !0,
        "aria-label": !0,
        "aria-describedby": !0,
        style: !0,
        maxlength: !0,
        placeholder: !0,
        enterkeyhint: !0
      }), this.h();
    },
    h() {
      g(
        r,
        "type",
        /*inputType*/
        t[9]
      ), g(
        r,
        "inputmode",
        /*inputMode*/
        t[10]
      ), g(r, "class", e = bt("input__input", qi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[123]
        ),
        singleline: !0
      })), g(r, "autocomplete", "off"), g(
        r,
        "autocapitalize",
        /*autocapitalization*/
        t[12]
      ), g(
        r,
        "aria-label",
        /*description*/
        t[11]
      ), g(r, "aria-describedby", n = /*describedBy*/
      t[14] || void 0), g(r, "style", o = _r(
        /*paddingStl*/
        t[16]
      )), r.disabled = i = !/*isEnabled*/
      t[5], g(r, "maxlength", s = /*maxLength*/
      t[6] === 1 / 0 ? void 0 : (
        /*maxLength*/
        t[6]
      )), g(
        r,
        "placeholder",
        /*placeholder*/
        t[19]
      ), r.value = /*value*/
      t[3], g(r, "enterkeyhint", a = /*enterKeyType*/
      t[13] === "default" ? void 0 : (
        /*enterKeyType*/
        t[13]
      ));
    },
    m(c, f) {
      K(c, r, f), t[102](r), l || (u = [
        et(
          r,
          "input",
          /*onInput*/
          t[48]
        ),
        et(
          r,
          "keydown",
          /*onKeyDown*/
          t[49]
        ),
        et(r, "mousedown", function() {
          Rr(
            /*$jsonSelectAll*/
            t[46] ? (
              /*onMousedown*/
              t[50]
            ) : void 0
          ) && (t[46] ? (
            /*onMousedown*/
            t[50]
          ) : void 0).apply(this, arguments);
        }),
        et(r, "click", function() {
          Rr(
            /*$jsonSelectAll*/
            t[46] ? (
              /*onClick*/
              t[51]
            ) : void 0
          ) && (t[46] ? (
            /*onClick*/
            t[51]
          ) : void 0).apply(this, arguments);
        }),
        et(r, "focus", function() {
          Rr(
            /*focusHandler*/
            t[121]
          ) && t[121].apply(this, arguments);
        }),
        et(r, "blur", function() {
          Rr(
            /*blurHandler*/
            t[122]
          ) && t[122].apply(this, arguments);
        })
      ], l = !0);
    },
    p(c, f) {
      t = c, f[0] & /*inputType*/
      512 && g(
        r,
        "type",
        /*inputType*/
        t[9]
      ), f[0] & /*inputMode*/
      1024 && g(
        r,
        "inputmode",
        /*inputMode*/
        t[10]
      ), f[3] & /*hasCustomFocus*/
      1073741824 && e !== (e = bt("input__input", qi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[123]
        ),
        singleline: !0
      })) && g(r, "class", e), f[0] & /*autocapitalization*/
      4096 && g(
        r,
        "autocapitalize",
        /*autocapitalization*/
        t[12]
      ), f[0] & /*description*/
      2048 && g(
        r,
        "aria-label",
        /*description*/
        t[11]
      ), f[0] & /*describedBy*/
      16384 && n !== (n = /*describedBy*/
      t[14] || void 0) && g(r, "aria-describedby", n), f[0] & /*paddingStl*/
      65536 && o !== (o = _r(
        /*paddingStl*/
        t[16]
      )) && g(r, "style", o), f[0] & /*isEnabled*/
      32 && i !== (i = !/*isEnabled*/
      t[5]) && (r.disabled = i), f[0] & /*maxLength*/
      64 && s !== (s = /*maxLength*/
      t[6] === 1 / 0 ? void 0 : (
        /*maxLength*/
        t[6]
      )) && g(r, "maxlength", s), f[0] & /*placeholder*/
      524288 && g(
        r,
        "placeholder",
        /*placeholder*/
        t[19]
      ), f[0] & /*value*/
      8 && r.value !== /*value*/
      t[3] && (r.value = /*value*/
      t[3]), f[0] & /*enterKeyType*/
      8192 && a !== (a = /*enterKeyType*/
      t[13] === "default" ? void 0 : (
        /*enterKeyType*/
        t[13]
      )) && g(r, "enterkeyhint", a);
    },
    d(c) {
      c && k(r), t[102](null), l = !1, Gr(u);
    }
  };
}
function _b(t) {
  let r, e, n, o, i, s, a, l, u;
  return {
    c() {
      r = Me("textarea"), this.h();
    },
    l(c) {
      r = ze(c, "TEXTAREA", {
        class: !0,
        autocapitalize: !0,
        "aria-label": !0,
        "aria-describedby": !0,
        enterkeyhint: !0,
        style: !0,
        maxlength: !0,
        placeholder: !0
      }), je(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", e = bt("input__input", qi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[123]
        ),
        multiline: !0
      })), g(
        r,
        "autocapitalize",
        /*autocapitalization*/
        t[12]
      ), g(
        r,
        "aria-label",
        /*description*/
        t[11]
      ), g(r, "aria-describedby", n = /*describedBy*/
      t[14] || void 0), g(r, "enterkeyhint", o = /*enterKeyType*/
      t[13] === "default" ? void 0 : (
        /*enterKeyType*/
        t[13]
      )), g(r, "style", i = _r(
        /*paddingStl*/
        t[16]
      )), r.disabled = s = !/*isEnabled*/
      t[5], g(r, "maxlength", a = /*maxLength*/
      t[6] === 1 / 0 ? void 0 : (
        /*maxLength*/
        t[6]
      )), g(
        r,
        "placeholder",
        /*placeholder*/
        t[19]
      ), r.value = /*value*/
      t[3];
    },
    m(c, f) {
      K(c, r, f), t[101](r), l || (u = [
        et(
          r,
          "input",
          /*onInput*/
          t[48]
        ),
        et(
          r,
          "keydown",
          /*onKeyDown*/
          t[49]
        ),
        et(r, "mousedown", function() {
          Rr(
            /*$jsonSelectAll*/
            t[46] ? (
              /*onMousedown*/
              t[50]
            ) : void 0
          ) && (t[46] ? (
            /*onMousedown*/
            t[50]
          ) : void 0).apply(this, arguments);
        }),
        et(r, "click", function() {
          Rr(
            /*$jsonSelectAll*/
            t[46] ? (
              /*onClick*/
              t[51]
            ) : void 0
          ) && (t[46] ? (
            /*onClick*/
            t[51]
          ) : void 0).apply(this, arguments);
        }),
        et(r, "focus", function() {
          Rr(
            /*focusHandler*/
            t[121]
          ) && t[121].apply(this, arguments);
        }),
        et(r, "blur", function() {
          Rr(
            /*blurHandler*/
            t[122]
          ) && t[122].apply(this, arguments);
        })
      ], l = !0);
    },
    p(c, f) {
      t = c, f[3] & /*hasCustomFocus*/
      1073741824 && e !== (e = bt("input__input", qi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[123]
        ),
        multiline: !0
      })) && g(r, "class", e), f[0] & /*autocapitalization*/
      4096 && g(
        r,
        "autocapitalize",
        /*autocapitalization*/
        t[12]
      ), f[0] & /*description*/
      2048 && g(
        r,
        "aria-label",
        /*description*/
        t[11]
      ), f[0] & /*describedBy*/
      16384 && n !== (n = /*describedBy*/
      t[14] || void 0) && g(r, "aria-describedby", n), f[0] & /*enterKeyType*/
      8192 && o !== (o = /*enterKeyType*/
      t[13] === "default" ? void 0 : (
        /*enterKeyType*/
        t[13]
      )) && g(r, "enterkeyhint", o), f[0] & /*paddingStl*/
      65536 && i !== (i = _r(
        /*paddingStl*/
        t[16]
      )) && g(r, "style", i), f[0] & /*isEnabled*/
      32 && s !== (s = !/*isEnabled*/
      t[5]) && (r.disabled = s), f[0] & /*maxLength*/
      64 && a !== (a = /*maxLength*/
      t[6] === 1 / 0 ? void 0 : (
        /*maxLength*/
        t[6]
      )) && g(r, "maxlength", a), f[0] & /*placeholder*/
      524288 && g(
        r,
        "placeholder",
        /*placeholder*/
        t[19]
      ), f[0] & /*value*/
      8 && (r.value = /*value*/
      t[3]);
    },
    d(c) {
      c && k(r), t[101](null), l = !1, Gr(u);
    }
  };
}
function hb(t) {
  let r;
  function e(i, s) {
    return (
      /*isMultiline*/
      i[8] ? _b : db
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Re();
    },
    l(i) {
      o.l(i), r = Re();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && k(r), o.d(i);
    }
  };
}
function pb(t) {
  let r, e, n, o;
  const i = [fb, cb], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[4] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Re();
    },
    l(l) {
      e && e.l(l), n = Re();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (br(), oe(s[c], 1, 1, () => {
        s[c] = null;
      }), yr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      oe(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
const gb = typeof document < "u" && "inputMode" in document.createElement("input"), Hc = {
  email: "email",
  number: "number",
  phone: "tel",
  single_line_text: "text",
  multi_line_text: "text",
  uri: "url",
  password: "password"
};
function mb(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, p, m, h, y, w, D, z, O, $, ue, M, Y, se, C, I, P, B, q, pe, _e, Ae, be, Ie, x, Ye, Qe, xe, we = j, Te = () => (we(), we = V(s, (nt) => e(74, xe = nt)), s), ge, ye = j, he = () => (ye(), ye = V(a, (nt) => e(75, ge = nt)), a), te, fe = j, re = () => (fe(), fe = V(_e, (nt) => e(108, te = nt)), _e), ve, qe = j, Xe = () => (qe(), qe = V(q, (nt) => e(76, ve = nt)), q), ee, He = j, Oe = () => (He(), He = V(se, (nt) => e(77, ee = nt)), se), lt, _t = j, it = () => (_t(), _t = V(B, (nt) => e(78, lt = nt)), B), Et, at, zt = j, ht = () => (zt(), zt = V(Y, (nt) => e(80, at = nt)), Y), Z, de = j, ct = () => (de(), de = V(M, (nt) => e(81, Z = nt)), M), Be, T = j, St = () => (T(), T = V(Ae, (nt) => e(82, Be = nt)), Ae), dt, Ft = j, Pt = () => (Ft(), Ft = V(ue, (nt) => e(83, dt = nt)), ue), st, Q = j, Dt = () => (Q(), Q = V($, (nt) => e(84, st = nt)), $), Ot, nr = j, er = () => (nr(), nr = V(P, (nt) => e(85, Ot = nt)), P), Ve, Ge = j, yt = () => (Ge(), Ge = V(I, (nt) => e(86, Ve = nt)), I), Pe, tt = j, Le = () => (tt(), tt = V(O, (nt) => e(87, Pe = nt)), O), Tt, We = j, vt = () => (We(), We = V(z, (nt) => e(88, Tt = nt)), z), qt, Nt = j, ar = () => (Nt(), Nt = V(D, (nt) => e(89, qt = nt)), D), Fe, At = j, ur = () => (At(), At = V(w, (nt) => e(90, Fe = nt)), w), sr, lr = j, hr = () => (lr(), lr = V(y, (nt) => e(91, sr = nt)), y), Er, Bt = j, kr = () => (Bt(), Bt = V(h, (nt) => e(92, Er = nt)), h), Ut, wt = j, or = () => (wt(), wt = V(m, (nt) => e(93, Ut = nt)), m), le, Cr = j, Ar = () => (Cr(), Cr = V(p, (nt) => e(94, le = nt)), p), Vt, Pr = j, Ur = () => (Pr(), Pr = V(_, (nt) => e(95, Vt = nt)), _), fr, ft = j, It = () => (ft(), ft = V(f, (nt) => e(96, fr = nt)), f), Kt, tr = j, rt = () => (tr(), tr = V(c, (nt) => e(97, Kt = nt)), c), mt, ce = j, Ct = () => (ce(), ce = V(u, (nt) => e(98, mt = nt)), u), ir, Gt = j, jr = () => (Gt(), Gt = V(l, (nt) => e(99, ir = nt)), l), E, ie = j, d = () => (ie(), ie = V(pe, (nt) => e(100, E = nt)), pe), R, Ce = j, Je = () => (Ce(), Ce = V(C, (nt) => e(46, R = nt)), C);
  t.$$.on_destroy.push(() => we()), t.$$.on_destroy.push(() => ye()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => qe()), t.$$.on_destroy.push(() => He()), t.$$.on_destroy.push(() => _t()), t.$$.on_destroy.push(() => zt()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => T()), t.$$.on_destroy.push(() => Ft()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => nr()), t.$$.on_destroy.push(() => Ge()), t.$$.on_destroy.push(() => tt()), t.$$.on_destroy.push(() => We()), t.$$.on_destroy.push(() => Nt()), t.$$.on_destroy.push(() => At()), t.$$.on_destroy.push(() => lr()), t.$$.on_destroy.push(() => Bt()), t.$$.on_destroy.push(() => wt()), t.$$.on_destroy.push(() => Cr()), t.$$.on_destroy.push(() => Pr()), t.$$.on_destroy.push(() => ft()), t.$$.on_destroy.push(() => tr()), t.$$.on_destroy.push(() => ce()), t.$$.on_destroy.push(() => Gt()), t.$$.on_destroy.push(() => ie()), t.$$.on_destroy.push(() => Ce());
  let { componentContext: ke } = r, { layoutParams: L = void 0 } = r;
  const Lt = zr($r), Rt = zr(Bo), Ke = Lt.direction;
  kn(t, Ke, (nt) => e(79, Et = nt));
  let ut, Yt, Ir = !1, cr = null, Nr = "", En = !1, Se = "", Qr = 12, Kr, _n = "", v = "", A, S = "", ae = "#000", W = "", ot = "start", Ne = "center", rr = "multi_line_text", Mt = "text", U, $t = "", pt = null, Sr = "", Or = "", Cn = "", on = !0, Yr = 1 / 0, cn = "off", Wn = "default", Kn = "", ho = !1, Ln = !0, Zt = 0, b = 0;
  function F() {
    e(54, Se = ""), e(55, Qr = 12), e(56, Kr = void 0), e(57, _n = ""), e(58, v = ""), e(59, A = void 0), e(61, ae = "#000"), e(62, W = ""), e(63, ot = "left"), e(64, Ne = "center"), e(65, rr = "multi_line_text"), e(9, Mt = "text"), e(10, U = void 0), e(5, on = !0), e(6, Yr = 1 / 0), e(12, cn = "off"), e(13, Wn = "default"), e(14, Kn = ""), Zt = 0, b = 0;
  }
  function ne(nt) {
    (nt == null ? void 0 : nt.type) === "fixed_length" ? e(53, cr = $1(nt, ke.logError, cr)) : (nt == null ? void 0 : nt.type) === "currency" ? e(53, cr = tb(nt, ke.logError, cr)) : (nt == null ? void 0 : nt.type) === "phone" && e(53, cr = ub(ke.logError, cr)), cr && ao();
  }
  function H(nt) {
    if (!Array.isArray(te))
      return !0;
    for (const Dr of te)
      if (Dr) {
        if (Dr.type === "regex")
          try {
            if (!new RegExp("^" + (Dr.pattern || "") + "$").test(nt))
              return !1;
          } catch (fn) {
            return ke.logError(X(new Error("Failed to create a regex"), {
              additional: { originalError: String(fn) }
            })), !0;
          }
        else if (Dr.type === "expression" && !Dr.condition)
          return !1;
      }
    return !0;
  }
  function De(nt) {
    const Dr = nt.target;
    let fn = Dr.value || "";
    fn === `
` && (fn = ""), fn.length > Yr && (fn = Nr, Dr instanceof HTMLInputElement && (Dr.value = fn)), Nr !== fn && (H(fn) ? (e(3, Nr = fn), s.setValue(fn), cr && jo(), uo()) : (e(3, Nr = fn), Dr instanceof HTMLInputElement && (Dr.value = fn), Fn().then(() => {
      Jr(Zt, b);
    })));
  }
  function Ee(nt) {
    if (Zt = xr() || 0, b = Br() || 0, nt.ctrlKey || nt.metaKey || nt.altKey || nt.shiftKey)
      return;
    const Dr = ke.json.enter_key_actions;
    nt.key === "Enter" && Array.isArray(Dr) && Dr.length && (nt.preventDefault(), ke.execAnyActions(Dr));
  }
  function Qt() {
    Ir = !1, setTimeout(
      () => {
        Ir = !0;
      },
      250
    );
  }
  function xt() {
    Ir || Yt.select();
  }
  function xr() {
    const nt = Yt;
    return nt.selectionStart === null ? void 0 : nt.selectionStart;
  }
  function Br() {
    const nt = Yt;
    return nt.selectionEnd === null ? void 0 : nt.selectionEnd;
  }
  function Jr(nt, Dr) {
    const fn = Yt;
    fn.selectionStart = nt, fn.selectionEnd = Dr;
  }
  async function jo() {
    if (!Yt || !cr)
      return;
    const nt = xr() || 0, Dr = Br() || 0;
    cr.applyChangeFrom(Nr, Dr === nt ? Dr : 0), a.set(cr.rawValue), Dl(s, xe = e(3, Nr = cr.value), xe);
    const fn = cr.cursorPosition;
    await Fn(), document.activeElement === Yt && Jr(fn, fn);
  }
  async function ao() {
    if (!Yt || !cr)
      return;
    cr.overrideRawValue(ge), a.set(cr.rawValue), Dl(s, xe = e(3, Nr = cr.value), xe);
    const nt = cr.cursorPosition;
    await Fn(), document.activeElement === Yt && Jr(nt, nt);
  }
  function uo() {
    const nt = Ln;
    Ln = !1;
    const Dr = ke.json.validators;
    if (!Array.isArray(Dr) || !Dr.length)
      return;
    const Uo = ke.getJsonWithVars(Dr).filter((An) => (An.type === "regex" || An.type === "expression") && An.label_id && An.variable), Go = [];
    Uo.forEach((An) => {
      const ri = ke.getVariable(An.variable);
      if (!ri)
        return;
      if (ri.getType() !== "boolean") {
        nt && ke.logError(X(new Error("Incorrect variable type for the validator"), {
          additional: { variable: An.variable }
        }));
        return;
      }
      let Dn = !1;
      if (Nr === "" && (An.allow_empty === !0 || An.allow_empty === 1))
        Dn = !0;
      else if (An.type === "regex") {
        if (!An.pattern || typeof An.pattern != "string")
          return;
        try {
          Dn = new RegExp("^" + An.pattern + "$").test(Nr);
        } catch {
          nt && ke.logError(X(new Error("Failed to create a regular expression using the validator pattern"), {
            additional: { pattern: An.pattern }
          }));
          return;
        }
      } else if (An.type === "expression")
        Dn = An.condition === !0 || An.condition === 1;
      else
        return;
      if (ri.setValue(Dn), !Dn) {
        const Io = Lt.getComponentId(An.label_id);
        Io && Go.push(Io);
      }
    }), e(14, Kn = Go.join(" "));
  }
  no(() => {
    e(70, ho = !0), Yt && cr && ge && (cr.overrideRawValue(ge), Dl(s, xe = e(3, Nr = cr.value), xe));
  }), dn(() => {
    e(70, ho = !1), ut && (Lt.unregisterFocusable(ut), e(52, ut = void 0));
  });
  function io(nt) {
    Mr[nt ? "unshift" : "push"](() => {
      Yt = nt, e(2, Yt);
    });
  }
  function es(nt) {
    Mr[nt ? "unshift" : "push"](() => {
      Yt = nt, e(2, Yt);
    });
  }
  return t.$$set = (nt) => {
    "componentContext" in nt && e(0, ke = nt.componentContext), "layoutParams" in nt && e(1, L = nt.layoutParams);
  }, t.$$.update = () => {
    var nt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(73, n = ke.origJson), t.$$.dirty[2] & /*origJson*/
    2048 && n && F(), t.$$.dirty[0] & /*componentContext*/
    1 && e(71, o = ke.json.text_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(72, i = (nt = ke.json.mask) == null ? void 0 : nt.raw_text_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*variable*/
    512 && Te(e(7, s = o && (ke.getVariable(o, "string") || Lt.awaitGlobalVariable(o, "string", "")) || eo("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*rawVariable*/
    1024 && he(e(15, a = i && (ke.getVariable(i, "string") || Lt.awaitGlobalVariable(i, "string", "")) || eo("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && jr(e(45, l = ke.getDerivedFromVars(ke.json.hint_text))), t.$$.dirty[0] & /*componentContext*/
    1 && Ct(e(44, u = ke.getDerivedFromVars(ke.json.hint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && rt(e(43, c = ke.getDerivedFromVars(ke.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && It(e(42, f = ke.getDerivedFromVars(ke.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && Ur(e(41, _ = ke.getDerivedFromVars(ke.json.font_weight_value))), t.$$.dirty[0] & /*componentContext*/
    1 && Ar(e(40, p = ke.getDerivedFromVars(ke.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && or(e(39, m = ke.getDerivedFromVars(ke.json.font_variation_settings, void 0, !0, 0))), t.$$.dirty[0] & /*componentContext*/
    1 && kr(e(38, h = ke.getDerivedFromVars(ke.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && hr(e(37, y = ke.getDerivedFromVars(ke.json.letter_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && ur(e(36, w = ke.getDerivedFromVars(ke.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ar(e(35, D = ke.getDerivedFromVars(ke.json.highlight_color))), t.$$.dirty[0] & /*componentContext*/
    1 && vt(e(34, z = ke.getDerivedFromVars(ke.json.text_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && Le(e(33, O = ke.getDerivedFromVars(ke.json.text_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && Dt(e(32, $ = ke.getDerivedFromVars(ke.json.keyboard_type))), t.$$.dirty[0] & /*componentContext*/
    1 && Pt(e(31, ue = ke.getDerivedFromVars(ke.json.mask))), t.$$.dirty[0] & /*componentContext*/
    1 && ct(e(30, M = ke.getDerivedFromVars(ke.json.max_visible_lines))), t.$$.dirty[0] & /*componentContext*/
    1 && ht(e(29, Y = ke.getDerivedFromVars(ke.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Oe(e(28, se = ke.getDerivedFromVars(ke.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Je(e(27, C = ke.getDerivedFromVars(ke.json.select_all_on_focus))), t.$$.dirty[0] & /*componentContext*/
    1 && yt(e(26, I = ke.getDerivedFromVars(ke.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && er(e(25, P = ke.getDerivedFromVars(ke.json.max_length))), t.$$.dirty[0] & /*componentContext*/
    1 && it(e(24, B = ke.getDerivedFromVars(ke.json.autocapitalization))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(23, q = ke.getDerivedFromVars(ke.json.enter_key_type))), t.$$.dirty[0] & /*componentContext*/
    1 && d(e(22, pe = ke.getDerivedFromVars(ke.json.validators))), t.$$.dirty[0] & /*componentContext*/
    1 && re(e(21, _e = ke.getDerivedFromVars(ke.json.filters))), t.$$.dirty[0] & /*componentContext*/
    1 && St(e(20, Ae = ke.getDerivedFromVars(ke.json.max_input_height))), t.$$.dirty[0] & /*componentContext, hasError*/
    17 | t.$$.dirty[2] & /*variable, $jsonAccessibility*/
    33280) {
      let Dr = !1;
      o ? (Rt.hasAction() || (ee == null ? void 0 : ee.mode) === "exclude") && (Dr = !0, ke.logError(X(new Error('Cannot show "input" inside component with an action or inside accessibility mode=exclude')))) : (e(4, En = !0), ke.logError(X(new Error('Missing "text_variable" in "input"')))), En !== Dr && e(4, En = Dr);
    }
    if (t.$$.dirty[2] & /*$jsonMask*/
    2097152 && ne(dt), t.$$.dirty[0] & /*maxLength*/
    64 | t.$$.dirty[2] & /*$jsonMaxLength*/
    8388608 && e(6, Yr = Jn(Ot, Yr)), t.$$.dirty[0] & /*value, maxLength, valueVariable*/
    200 | t.$$.dirty[1] & /*inputMask*/
    4194304 | t.$$.dirty[2] & /*$valueVariable*/
    4096 && !cr && Nr !== xe) {
      let Dr = xe;
      Dr.length > Yr && (Dr = Dr.slice(0, Yr), s.setValue(Dr)), e(3, Nr = Dr), uo();
    }
    if (t.$$.dirty[1] & /*inputMask*/
    4194304 | t.$$.dirty[2] & /*$rawValueVariable*/
    8192 && cr && cr.rawValue !== ge && (ao(), uo()), t.$$.dirty[2] & /*mounted*/
    256 | t.$$.dirty[3] & /*$jsonValidators*/
    128 && E && ho && uo(), t.$$.dirty[3] & /*$jsonHintText*/
    64 && e(19, be = ir), t.$$.dirty[1] & /*hintColor*/
    8388608 | t.$$.dirty[3] & /*$jsonHintColor*/
    32 && e(54, Se = pr(mt, 1, Se)), t.$$.dirty[1] & /*fontSize*/
    16777216 | t.$$.dirty[3] & /*$jsonFontSize*/
    16 && e(55, Qr = Jn(Kt, Qr)), t.$$.dirty[1] & /*fontWeight*/
    33554432 | t.$$.dirty[3] & /*$jsonFontWeight, $jsonFontWeightValue, $jsonFontFamily*/
    14 && (e(56, Kr = fi(fr, Vt, Kr)), le && typeof le == "string" ? e(57, _n = Lt.typefaceProvider(le, { fontWeight: Kr || 400 })) : e(57, _n = "")), t.$$.dirty[1] & /*fontVariationSettings*/
    134217728 | t.$$.dirty[3] & /*$jsonFontVariationSettings*/
    1) {
      const Dr = Ai(Ut);
      Dr !== v && e(58, v = Dr);
    }
    if (t.$$.dirty[1] & /*fontSize*/
    16777216 | t.$$.dirty[2] & /*$jsonLineHeight*/
    1073741824) {
      const Dr = Er;
      On(Dr) && e(59, A = Dr / Qr);
    }
    t.$$.dirty[2] & /*$jsonLetterSpacing*/
    536870912 && bs(sr) && e(60, S = me(sr)), t.$$.dirty[1] & /*textColor*/
    1073741824 | t.$$.dirty[2] & /*$jsonTextColor*/
    268435456 && e(61, ae = pr(Fe, 1, ae)), t.$$.dirty[2] & /*$jsonHighlightColor, highlightColor*/
    134217729 && e(62, W = pr(qt, 1, W)), t.$$.dirty[2] & /*$jsonAlignmentHorizontal, $direction, alignmentHorizontal*/
    67239938 && e(63, ot = wl(Tt, Et, ot)), t.$$.dirty[2] & /*$jsonAlignmentVertical, alignmentVertical*/
    33554436 && e(64, Ne = vl(Pe, Ne)), t.$$.dirty[0] & /*isEnabled*/
    32 | t.$$.dirty[2] & /*$jsonIsEnabled*/
    16777216 && e(5, on = en(Ve, on)), t.$$.dirty[2] & /*$jsonKeyboardType, $jsonMask, keyboardType*/
    6291464 && (st && st in Hc && (e(9, Mt = Hc[st]), e(65, rr = st)), (dt == null ? void 0 : dt.type) === "currency" ? (e(9, Mt = gb ? "text" : "tel"), e(10, U = "decimal")) : rr === "number" ? e(10, U = "decimal") : e(10, U = void 0)), t.$$.dirty[2] & /*keyboardType*/
    8 && e(8, Ie = rr === "multi_line_text"), t.$$.dirty[1] & /*lineHeight, fontSize*/
    285212672 | t.$$.dirty[2] & /*$jsonMaxInputHeight, $jsonVisibleMaxLines, $jsonPaddings, selfPadding, $direction*/
    1966112 && (On(Be) ? e(66, $t = pn(Be)) : On(Z) ? e(66, $t = `calc(${Z * (A || 1.25) * (Qr / 10) + "em"} + ${pn(un(at == null ? void 0 : at.top, 0) + un(at == null ? void 0 : at.bottom, 0))})`) : e(66, $t = ""), e(67, pt = ui(at || void 0, pt)), e(68, Sr = pt ? _o(
      {
        top: (Number(pt.top) || 0) / Qr * 10,
        right: (Number(Et === "ltr" ? pt.end : pt.start) || Number(pt.right) || 0) / Qr * 10,
        bottom: (Number(pt.bottom) || 0) / Qr * 10,
        left: (Number(Et === "ltr" ? pt.start : pt.end) || Number(pt.left) || 0) / Qr * 10
      },
      Et
    ) : ""), e(69, Or = pt ? _o(
      {
        top: (Number(pt.top) || 0) / Qr * 10,
        bottom: (Number(pt.bottom) || 0) / Qr * 10
      },
      Et
    ) : "")), t.$$.dirty[2] & /*$jsonAutocapitalization*/
    65536 && (lt === "all_characters" ? e(12, cn = "characters") : lt === "sentences" ? e(12, cn = "sentences") : lt === "words" ? e(12, cn = "words") : (lt === "none" || lt === "auto") && e(12, cn = "off")), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*$jsonAccessibility*/
    32768 && (ee != null && ee.description ? e(11, Cn = ei(ee)) : ke.logError(X(new Error('Missing accessibility "description" for input'), { level: "warn" }))), t.$$.dirty[2] & /*$jsonEnterKeyType*/
    16384 && (ve === "default" || ve === "done" || ve === "go" || ve === "search" || ve === "send") && e(13, Wn = ve), t.$$.dirty[0] & /*isMultiline*/
    256 | t.$$.dirty[2] & /*highlightColor, alignmentHorizontal, alignmentVertical*/
    7 && e(18, x = {
      "highlight-color": !!W,
      multiline: Ie,
      "alignment-horizontal": ot,
      "alignment-vertical": Ne
    }), t.$$.dirty[1] & /*hintColor, lineHeight, fontWeight, fontFamily, fontVariationSettings, letterSpacing, textColor*/
    2122317824 | t.$$.dirty[2] & /*highlightColor, maxHeight*/
    17 && e(17, Ye = {
      "--divkit-input-hint-color": Se,
      "--divkit-input-highlight-color": W,
      "--divkit-input-line-height": A,
      "font-weight": Kr,
      "font-family": _n,
      "font-variation-settings": v,
      "letter-spacing": S,
      color: ae,
      "max-height": $t
    }), t.$$.dirty[1] & /*fontSize*/
    16777216 | t.$$.dirty[2] & /*padding*/
    64 && e(16, Qe = { "font-size": me(Qr), padding: Sr }), t.$$.dirty[1] & /*fontSize*/
    16777216 | t.$$.dirty[2] & /*verticalPadding*/
    128, t.$$.dirty[0] & /*input, componentContext, value*/
    13 | t.$$.dirty[1] & /*prevId*/
    2097152 && Yt && ke.json && (ut && (Lt.unregisterFocusable(ut), e(52, ut = void 0)), ke.id && !ke.fakeElement && (e(52, ut = ke.id), Lt.registerFocusable(ut, {
      focus() {
        Yt && (Yt.focus(), Jr(Nr.length, Nr.length));
      }
    })));
  }, [
    ke,
    L,
    Yt,
    Nr,
    En,
    on,
    Yr,
    s,
    Ie,
    Mt,
    U,
    Cn,
    cn,
    Wn,
    Kn,
    a,
    Qe,
    Ye,
    x,
    be,
    Ae,
    _e,
    pe,
    q,
    B,
    P,
    I,
    C,
    se,
    Y,
    M,
    ue,
    $,
    O,
    z,
    D,
    w,
    y,
    h,
    m,
    p,
    _,
    f,
    c,
    u,
    l,
    R,
    Ke,
    De,
    Ee,
    Qt,
    xt,
    ut,
    cr,
    Se,
    Qr,
    Kr,
    _n,
    v,
    A,
    S,
    ae,
    W,
    ot,
    Ne,
    rr,
    $t,
    pt,
    Sr,
    Or,
    ho,
    o,
    i,
    n,
    xe,
    ge,
    ve,
    ee,
    lt,
    Et,
    at,
    Z,
    Be,
    dt,
    st,
    Ot,
    Ve,
    Pe,
    Tt,
    qt,
    Fe,
    sr,
    Er,
    Ut,
    le,
    Vt,
    fr,
    Kt,
    mt,
    ir,
    E,
    io,
    es
  ];
}
class bb extends Wr {
  constructor(r) {
    super(), Hr(this, r, mb, pb, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1, -1]);
  }
}
const yb = "appkit-select", wb = "appkit-select_hint", vb = "appkit-select__select", kb = "appkit-select__option", Ui = {
  select: yb,
  "select__select-text": "appkit-select__select-text",
  select_hint: wb,
  select__select: vb,
  "select__select_has-custom-focused": "appkit-select__select_has-custom-focused",
  "has-custom-focused": "appkit-has-custom-focused",
  select__option: kb
};
function Wc(t, r, e) {
  const n = t.slice();
  return n[62] = r[e], n;
}
function jb(t) {
  let r, e;
  return r = new Pn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function Eb(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: bt(
        "select",
        Ui,
        /*mods*/
        t[11]
      ),
      style: (
        /*stl*/
        t[10]
      ),
      customDescription: !0,
      customActions: "select",
      customPaddings: !0,
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: {
        default: [
          Cb,
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
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = bt(
        "select",
        Ui,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function Uc(t) {
  let r, e = (
    /*item*/
    (t[62].text || /*item*/
    t[62].value) + ""
  ), n, o;
  return {
    c() {
      r = Me("option"), n = Bn(e), this.h();
    },
    l(i) {
      r = ze(i, "OPTION", { class: !0 });
      var s = je(r);
      n = qn(s, e), s.forEach(k), this.h();
    },
    h() {
      g(r, "class", Ui.select__option), r.__value = o = /*item*/
      t[62].value, Wa(r, r.__value);
    },
    m(i, s) {
      K(i, r, s), jt(r, n);
    },
    p(i, s) {
      s[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      (i[62].text || /*item*/
      i[62].value) + "") && Qn(n, e), s[0] & /*filteredItems*/
      32 && o !== (o = /*item*/
      i[62].value) && (r.__value = o, Wa(r, r.__value));
    },
    d(i) {
      i && k(r);
    }
  };
}
function Cb(t) {
  let r, e = (
    /*selectText*/
    (t[4] || /*$jsonHintText*/
    t[25] || "​") + ""
  ), n, o, i, s, a, l, u, c, f = dr(
    /*filteredItems*/
    t[5]
  ), _ = [];
  for (let p = 0; p < f.length; p += 1)
    _[p] = Uc(Wc(t, f, p));
  return {
    c() {
      r = Me("span"), n = Bn(e), i = gr(), s = Me("select");
      for (let p = 0; p < _.length; p += 1)
        _[p].c();
      this.h();
    },
    l(p) {
      r = ze(p, "SPAN", {
        class: !0,
        style: !0,
        "aria-hidden": !0
      });
      var m = je(r);
      n = qn(m, e), m.forEach(k), i = mr(p), s = ze(p, "SELECT", {
        class: !0,
        "aria-label": !0,
        style: !0
      });
      var h = je(s);
      for (let y = 0; y < _.length; y += 1)
        _[y].l(h);
      h.forEach(k), this.h();
    },
    h() {
      g(r, "class", Ui["select__select-text"]), g(r, "style", o = _r(
        /*innerStl*/
        t[9]
      )), g(r, "aria-hidden", "true"), g(s, "class", a = bt("select__select", Ui, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[59]
        )
      })), g(
        s,
        "aria-label",
        /*description*/
        t[7]
      ), g(s, "style", l = _r(
        /*selectStl*/
        t[8]
      )), /*$valueVariable*/
      t[6] === void 0 && yo(() => (
        /*select_1_change_handler*/
        t[55].call(s)
      ));
    },
    m(p, m) {
      K(p, r, m), jt(r, n), K(p, i, m), K(p, s, m);
      for (let h = 0; h < _.length; h += 1)
        _[h] && _[h].m(s, null);
      t[54](s), Ua(
        s,
        /*$valueVariable*/
        t[6],
        !0
      ), u || (c = [
        et(
          s,
          "change",
          /*select_1_change_handler*/
          t[55]
        ),
        et(s, "focus", function() {
          Rr(
            /*focusHandler*/
            t[60]
          ) && t[60].apply(this, arguments);
        }),
        et(s, "blur", function() {
          Rr(
            /*blurHandler*/
            t[61]
          ) && t[61].apply(this, arguments);
        })
      ], u = !0);
    },
    p(p, m) {
      if (t = p, m[0] & /*selectText, $jsonHintText*/
      33554448 && e !== (e = /*selectText*/
      (t[4] || /*$jsonHintText*/
      t[25] || "​") + "") && Qn(n, e), m[0] & /*innerStl*/
      512 && o !== (o = _r(
        /*innerStl*/
        t[9]
      )) && g(r, "style", o), m[0] & /*filteredItems*/
      32) {
        f = dr(
          /*filteredItems*/
          t[5]
        );
        let h;
        for (h = 0; h < f.length; h += 1) {
          const y = Wc(t, f, h);
          _[h] ? _[h].p(y, m) : (_[h] = Uc(y), _[h].c(), _[h].m(s, null));
        }
        for (; h < _.length; h += 1)
          _[h].d(1);
        _.length = f.length;
      }
      m[1] & /*hasCustomFocus*/
      268435456 && a !== (a = bt("select__select", Ui, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[59]
        )
      })) && g(s, "class", a), m[0] & /*description*/
      128 && g(
        s,
        "aria-label",
        /*description*/
        t[7]
      ), m[0] & /*selectStl*/
      256 && l !== (l = _r(
        /*selectStl*/
        t[8]
      )) && g(s, "style", l), m[0] & /*$valueVariable, filteredItems*/
      96 && Ua(
        s,
        /*$valueVariable*/
        t[6]
      );
    },
    d(p) {
      p && (k(r), k(i), k(s)), hn(_, p), t[54](null), u = !1, Gr(c);
    }
  };
}
function Ab(t) {
  let r, e, n, o;
  const i = [Eb, jb], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Re();
    },
    l(l) {
      e && e.l(l), n = Re();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (br(), oe(s[c], 1, 1, () => {
        s[c] = null;
      }), yr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      oe(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function Vb(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, p, m, h, y, w, D, z, O, $, ue, M, Y, se = j, C = () => (se(), se = V(z, (Fe) => e(42, Y = Fe)), z), I, P = j, B = () => (P(), P = V(D, (Fe) => e(43, I = Fe)), D), q, pe = j, _e = () => (pe(), pe = V(w, (Fe) => e(44, q = Fe)), w), Ae, be = j, Ie = () => (be(), be = V(y, (Fe) => e(45, Ae = Fe)), y), x, Ye = j, Qe = () => (Ye(), Ye = V(h, (Fe) => e(46, x = Fe)), h), xe, we = j, Te = () => (we(), we = V(m, (Fe) => e(47, xe = Fe)), m), ge, ye = j, he = () => (ye(), ye = V(p, (Fe) => e(48, ge = Fe)), p), te, fe = j, re = () => (fe(), fe = V(_, (Fe) => e(49, te = Fe)), _), ve, qe = j, Xe = () => (qe(), qe = V(f, (Fe) => e(50, ve = Fe)), f), ee, He = j, Oe = () => (He(), He = V(c, (Fe) => e(51, ee = Fe)), c), lt, _t, it = j, Et = () => (it(), it = V(l, (Fe) => e(53, _t = Fe)), l), at, zt = j, ht = () => (zt(), zt = V(a, (Fe) => e(6, at = Fe)), a), Z, de = j, ct = () => (de(), de = V(u, (Fe) => e(25, Z = Fe)), u);
  t.$$.on_destroy.push(() => se()), t.$$.on_destroy.push(() => P()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => Ye()), t.$$.on_destroy.push(() => we()), t.$$.on_destroy.push(() => ye()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => qe()), t.$$.on_destroy.push(() => He()), t.$$.on_destroy.push(() => it()), t.$$.on_destroy.push(() => zt()), t.$$.on_destroy.push(() => de());
  let { componentContext: Be } = r, { layoutParams: T = void 0 } = r;
  const St = zr($r), dt = zr(Bo), Ft = St.direction;
  kn(t, Ft, (Fe) => e(52, lt = Fe));
  let Pt, st, Q = !1, Dt = "", Ot = null, nr = "", er = "rgba(0,0,0,.45)", Ve = 12, Ge, yt = "", Pe = "", tt, Le = "", Tt = "#000", We = "", vt;
  function qt() {
    e(28, Ot = null), e(30, er = "rgba(0,0,0,.45)"), e(31, Ve = 12), e(32, Ge = void 0), e(33, yt = ""), e(34, Pe = ""), e(35, tt = void 0), e(36, Le = ""), e(37, Tt = "#000"), e(7, We = "");
  }
  dn(() => {
    Pt && (St.unregisterFocusable(Pt), e(27, Pt = void 0));
  });
  function Nt(Fe) {
    Mr[Fe ? "unshift" : "push"](() => {
      st = Fe, e(2, st);
    });
  }
  function ar() {
    at = $_(this), a.set(at), e(5, s), e(40, i), e(0, Be);
  }
  return t.$$set = (Fe) => {
    "componentContext" in Fe && e(0, Be = Fe.componentContext), "layoutParams" in Fe && e(1, T = Fe.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(41, n = Be.origJson), t.$$.dirty[1] & /*origJson*/
    1024 && n && qt(), t.$$.dirty[0] & /*componentContext*/
    1 && e(39, o = Be.json.value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(40, i = Be.json.options), t.$$.dirty[1] & /*items*/
    512 && e(5, s = Array.isArray(i) && i.filter((Fe) => typeof Fe.value == "string") || []), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    256 && ht(e(24, a = o && (Be.getVariable(o, "string") || St.awaitGlobalVariable(o, "string", "")) || eo("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && Et(e(23, l = Be.getDerivedFromVars(Be.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && ct(e(22, u = Be.getDerivedFromVars(Be.json.hint_text))), t.$$.dirty[0] & /*componentContext*/
    1 && Oe(e(21, c = Be.getDerivedFromVars(Be.json.hint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(20, f = Be.getDerivedFromVars(Be.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && re(e(19, _ = Be.getDerivedFromVars(Be.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(18, p = Be.getDerivedFromVars(Be.json.font_weight_value))), t.$$.dirty[0] & /*componentContext*/
    1 && Te(e(17, m = Be.getDerivedFromVars(Be.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && Qe(e(16, h = Be.getDerivedFromVars(Be.json.font_variation_settings, void 0, !0, 0))), t.$$.dirty[0] & /*componentContext*/
    1 && Ie(e(15, y = Be.getDerivedFromVars(Be.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(14, w = Be.getDerivedFromVars(Be.json.letter_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && B(e(13, D = Be.getDerivedFromVars(Be.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && C(e(12, z = Be.getDerivedFromVars(Be.json.accessibility))), t.$$.dirty[0] & /*filteredItems, componentContext*/
    33 && (Array.isArray(s) && s.length || Be.logError(X(new Error('Empty selection "items" in "select"')))), t.$$.dirty[0] & /*componentContext, hasError*/
    9 | t.$$.dirty[1] & /*variable, $jsonAccessibility*/
    2304) {
      let Fe = !1;
      o ? (dt.hasAction() || (Y == null ? void 0 : Y.mode) === "exclude") && (Fe = !0, Be.logError(X(new Error('Cannot show "select" inside component with an action or inside accessibility mode=exclude')))) : (e(3, Q = !0), Be.logError(X(new Error('Missing "value_variable" in "select"')))), Q !== Fe && e(3, Q = Fe);
    }
    if (t.$$.dirty[0] & /*filteredItems, $valueVariable, componentContext*/
    97 | t.$$.dirty[1] & /*prevWarnValue*/
    128) {
      const Fe = s.find((At) => At.value === at);
      Fe ? e(4, Dt = (typeof Fe.text == "string" ? Fe.text : Fe.value) || "") : (e(4, Dt = ""), at && vt !== at && (e(38, vt = at), Be.logError(X(new Error('Value from the variable was not found in the selection items for "select"')))));
    }
    if (t.$$.dirty[1] & /*$jsonFontSize, fontSize*/
    524289 && e(31, Ve = Jn(ve, Ve)), t.$$.dirty[0] & /*selfPadding*/
    268435456 | t.$$.dirty[1] & /*$jsonPaddings, fontSize, $direction*/
    6291457 && (e(28, Ot = ui(_t || void 0, Ot)), e(29, nr = Ot ? _o(
      {
        top: (Number(Ot.top) || 0) / Ve * 10,
        right: (Number(lt === "ltr" ? Ot.end : Ot.start) || Number(Ot.right) || 0) / Ve * 10,
        bottom: (Number(Ot.bottom) || 0) / Ve * 10,
        left: (Number(lt === "ltr" ? Ot.start : Ot.end) || Number(Ot.left) || 0) / Ve * 10
      },
      lt
    ) : "")), t.$$.dirty[0] & /*hintColor*/
    1073741824 | t.$$.dirty[1] & /*$jsonHintColor*/
    1048576 && e(30, er = pr(ee, 1, er)), t.$$.dirty[1] & /*$jsonFontWeight, $jsonFontWeightValue, fontWeight, $jsonFontFamily*/
    458754 && (e(32, Ge = fi(te, ge, Ge)), xe && typeof xe == "string" ? e(33, yt = St.typefaceProvider(xe, { fontWeight: Ge || 400 })) : e(33, yt = "")), t.$$.dirty[1] & /*$jsonFontVariationSettings, fontVariationSettings*/
    32776) {
      const Fe = Ai(x);
      Fe !== Pe && e(34, Pe = Fe);
    }
    if (t.$$.dirty[1] & /*$jsonLineHeight, fontSize*/
    16385) {
      const Fe = Ae;
      On(Fe) && e(35, tt = Fe / Ve);
    }
    t.$$.dirty[1] & /*$jsonLetterSpacing, fontSize*/
    8193 && bs(q) && e(36, Le = me(q / Ve * 10)), t.$$.dirty[1] & /*$jsonTextColor, textColor*/
    4160 && e(37, Tt = pr(I, 1, Tt)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    2048 && (Y != null && Y.description ? e(7, We = ei(Y)) : Be.logError(X(new Error('Missing accessibility "description" for select'), { level: "warn" }))), t.$$.dirty[0] & /*selectText*/
    16 && e(11, O = { hint: !Dt }), t.$$.dirty[0] & /*hintColor*/
    1073741824 | t.$$.dirty[1] & /*fontWeight, fontFamily, fontVariationSettings, textColor*/
    78 && e(10, $ = {
      "--divkit-input-hint-color": er,
      "font-weight": Ge,
      "font-family": yt,
      "font-variation-settings": Pe,
      color: Tt
    }), t.$$.dirty[0] & /*padding*/
    536870912 | t.$$.dirty[1] & /*fontSize, lineHeight, letterSpacing*/
    49 && e(9, ue = {
      padding: nr,
      "font-size": me(Ve),
      "line-height": tt,
      "letter-spacing": Le
    }), t.$$.dirty[1] & /*fontSize, lineHeight, letterSpacing*/
    49 && e(8, M = {
      "font-size": me(Ve),
      "line-height": tt,
      "letter-spacing": Le
    }), t.$$.dirty[0] & /*componentContext, select, prevId*/
    134217733 && Be.json && st && (Pt && (St.unregisterFocusable(Pt), e(27, Pt = void 0)), Be.id && !Be.fakeElement && (e(27, Pt = Be.id), St.registerFocusable(Pt, {
      focus() {
        st && st.focus();
      }
    })));
  }, [
    Be,
    T,
    st,
    Q,
    Dt,
    s,
    at,
    We,
    M,
    ue,
    $,
    O,
    z,
    D,
    w,
    y,
    h,
    m,
    p,
    _,
    f,
    c,
    u,
    l,
    a,
    Z,
    Ft,
    Pt,
    Ot,
    nr,
    er,
    Ve,
    Ge,
    yt,
    Pe,
    tt,
    Le,
    Tt,
    vt,
    o,
    i,
    n,
    Y,
    I,
    q,
    Ae,
    x,
    xe,
    ge,
    te,
    ve,
    ee,
    lt,
    _t,
    Nt,
    ar
  ];
}
class Sb extends Wr {
  constructor(r) {
    super(), Hr(this, r, Vb, Ab, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Db = "appkit-video__video", Ib = "appkit-video__container", Fb = "appkit-video_absolute", Ii = {
  video__video: Db,
  video__container: Ib,
  "video__aspect-wrapper": "appkit-video__aspect-wrapper",
  video_absolute: Fb
};
function Tb(t, r) {
  return Array.isArray(t) && t.length ? t.filter((e) => (e == null ? void 0 : e.type) === "video_source" && typeof e.url == "string" && typeof e.mime_type == "string").map((e) => {
    const n = {
      src: e.url
    };
    return e.mime_type && (n.type = e.mime_type), n;
  }) : r;
}
function Mb(t) {
  return t === "fill" ? "cover" : t === "no_scale" ? "none" : "contain";
}
function Gc(t, r, e) {
  const n = t.slice();
  return n[60] = r[e], n;
}
function Jc(t, r, e) {
  const n = t.slice();
  return n[60] = r[e], n;
}
function Pb(t) {
  let r, e;
  return r = new Pn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function Nb(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: bt(
        "video",
        Ii,
        /*mods*/
        t[15]
      ),
      customActions: "video",
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      heightByAspect: (
        /*aspectPaddingBottom*/
        t[11] !== "0"
      ),
      $$slots: { default: [Hb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      32768 && (i.cls = bt(
        "video",
        Ii,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function zb(t) {
  let r, e, n, o, i, s = dr(
    /*sources*/
    t[4]
  ), a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = Kc(Gc(t, s, l));
  return {
    c() {
      r = Me("video");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      this.h();
    },
    l(l) {
      r = ze(l, "VIDEO", {
        class: !0,
        style: !0,
        poster: !0,
        preload: !0
      });
      var u = je(r);
      for (let c = 0; c < a.length; c += 1)
        a[c].l(u);
      u.forEach(k), this.h();
    },
    h() {
      g(r, "class", Ii.video__video), g(r, "style", e = _r(
        /*style*/
        t[14]
      )), r.playsInline = !0, r.loop = /*loop*/
      t[5], r.autoplay = /*autoplay*/
      t[6], r.muted = /*muted*/
      t[7], g(
        r,
        "poster",
        /*poster*/
        t[9]
      ), g(r, "preload", n = /*preload*/
      t[8] ? "metadata" : "auto");
    },
    m(l, u) {
      K(l, r, u);
      for (let c = 0; c < a.length; c += 1)
        a[c] && a[c].m(r, null);
      t[52](r), o || (i = [
        et(
          r,
          "timeupdate",
          /*onTimeUpdate*/
          t[26]
        ),
        et(
          r,
          "ended",
          /*onEnd*/
          t[27]
        ),
        et(
          r,
          "playing",
          /*onPlaying*/
          t[28]
        ),
        et(
          r,
          "pause",
          /*onPause*/
          t[29]
        ),
        et(
          r,
          "waiting",
          /*onWaiting*/
          t[30]
        ),
        et(
          r,
          "error",
          /*onError*/
          t[31]
        )
      ], o = !0);
    },
    p(l, u) {
      if (u[0] & /*sources*/
      16 | u[1] & /*onError*/
      1) {
        s = dr(
          /*sources*/
          l[4]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const f = Gc(l, s, c);
          a[c] ? a[c].p(f, u) : (a[c] = Kc(f), a[c].c(), a[c].m(r, null));
        }
        for (; c < a.length; c += 1)
          a[c].d(1);
        a.length = s.length;
      }
      u[0] & /*style*/
      16384 && e !== (e = _r(
        /*style*/
        l[14]
      )) && g(r, "style", e), u[0] & /*loop*/
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
      l && k(r), hn(a, l), t[52](null), o = !1, Gr(i);
    }
  };
}
function Ob(t) {
  let r, e;
  return {
    c() {
      r = Me("div"), e = new Hi(!1), this.h();
    },
    l(n) {
      r = ze(n, "DIV", { class: !0 });
      var o = je(r);
      e = ba(o, !1), o.forEach(k), this.h();
    },
    h() {
      e.a = null, g(r, "class", Ii.video__container);
    },
    m(n, o) {
      K(n, r, o), e.m(
        /*providedVideoTemplate*/
        t[12],
        r
      ), t[51](r);
    },
    p(n, o) {
      o[0] & /*providedVideoTemplate*/
      4096 && e.p(
        /*providedVideoTemplate*/
        n[12]
      );
    },
    d(n) {
      n && k(r), t[51](null);
    }
  };
}
function Bb(t) {
  let r, e = `${/*aspectPaddingBottom*/
  t[11]}%`;
  function n(s, a) {
    return (
      /*shouldUseVideoProvider*/
      s[13] ? Rb : Lb
    );
  }
  let o = n(t), i = o(t);
  return {
    c() {
      r = Me("div"), i.c(), this.h();
    },
    l(s) {
      r = ze(s, "DIV", { class: !0 });
      var a = je(r);
      i.l(a), a.forEach(k), this.h();
    },
    h() {
      g(r, "class", Ii["video__aspect-wrapper"]), N(r, "padding-bottom", e);
    },
    m(s, a) {
      K(s, r, a), i.m(r, null);
    },
    p(s, a) {
      o === (o = n(s)) && i ? i.p(s, a) : (i.d(1), i = o(s), i && (i.c(), i.m(r, null))), a[0] & /*aspectPaddingBottom*/
      2048 && e !== (e = `${/*aspectPaddingBottom*/
      s[11]}%`) && N(r, "padding-bottom", e);
    },
    d(s) {
      s && k(r), i.d();
    }
  };
}
function qc(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Me("source"), this.h();
    },
    l(s) {
      r = ze(s, "SOURCE", { src: !0, type: !0 }), this.h();
    },
    h() {
      to(r.src, e = /*source*/
      t[60].src) || g(r, "src", e), g(r, "type", n = /*source*/
      t[60].type);
    },
    m(s, a) {
      K(s, r, a), o || (i = et(
        r,
        "error",
        /*onError*/
        t[31]
      ), o = !0);
    },
    p(s, a) {
      a[0] & /*sources*/
      16 && !to(r.src, e = /*source*/
      s[60].src) && g(r, "src", e), a[0] & /*sources*/
      16 && n !== (n = /*source*/
      s[60].type) && g(r, "type", n);
    },
    d(s) {
      s && k(r), o = !1, i();
    }
  };
}
function Kc(t) {
  let r = (
    /*source*/
    t[60]
  ), e, n = qc(t);
  return {
    c() {
      n.c(), e = Re();
    },
    l(o) {
      n.l(o), e = Re();
    },
    m(o, i) {
      n.m(o, i), K(o, e, i);
    },
    p(o, i) {
      i[0] & /*sources*/
      16 && Tr(r, r = /*source*/
      o[60]) ? (n.d(1), n = qc(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && k(e), n.d(o);
    }
  };
}
function Lb(t) {
  let r, e, n, o, i, s = dr(
    /*sources*/
    t[4]
  ), a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = Xc(Jc(t, s, l));
  return {
    c() {
      r = Me("video");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      this.h();
    },
    l(l) {
      r = ze(l, "VIDEO", {
        class: !0,
        style: !0,
        poster: !0,
        preload: !0
      });
      var u = je(r);
      for (let c = 0; c < a.length; c += 1)
        a[c].l(u);
      u.forEach(k), this.h();
    },
    h() {
      g(r, "class", Ii.video__video), g(r, "style", e = _r(
        /*style*/
        t[14]
      )), r.playsInline = !0, r.loop = /*loop*/
      t[5], r.autoplay = /*autoplay*/
      t[6], r.muted = /*muted*/
      t[7], g(
        r,
        "poster",
        /*poster*/
        t[9]
      ), g(r, "preload", n = /*preload*/
      t[8] ? "metadata" : "auto");
    },
    m(l, u) {
      K(l, r, u);
      for (let c = 0; c < a.length; c += 1)
        a[c] && a[c].m(r, null);
      t[50](r), o || (i = [
        et(
          r,
          "timeupdate",
          /*onTimeUpdate*/
          t[26]
        ),
        et(
          r,
          "ended",
          /*onEnd*/
          t[27]
        ),
        et(
          r,
          "playing",
          /*onPlaying*/
          t[28]
        ),
        et(
          r,
          "pause",
          /*onPause*/
          t[29]
        ),
        et(
          r,
          "waiting",
          /*onWaiting*/
          t[30]
        ),
        et(
          r,
          "error",
          /*onError*/
          t[31]
        )
      ], o = !0);
    },
    p(l, u) {
      if (u[0] & /*sources*/
      16 | u[1] & /*onError*/
      1) {
        s = dr(
          /*sources*/
          l[4]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const f = Jc(l, s, c);
          a[c] ? a[c].p(f, u) : (a[c] = Xc(f), a[c].c(), a[c].m(r, null));
        }
        for (; c < a.length; c += 1)
          a[c].d(1);
        a.length = s.length;
      }
      u[0] & /*style*/
      16384 && e !== (e = _r(
        /*style*/
        l[14]
      )) && g(r, "style", e), u[0] & /*loop*/
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
      l && k(r), hn(a, l), t[50](null), o = !1, Gr(i);
    }
  };
}
function Rb(t) {
  let r, e;
  return {
    c() {
      r = Me("div"), e = new Hi(!1), this.h();
    },
    l(n) {
      r = ze(n, "DIV", { class: !0 });
      var o = je(r);
      e = ba(o, !1), o.forEach(k), this.h();
    },
    h() {
      e.a = null, g(r, "class", Ii.video__container);
    },
    m(n, o) {
      K(n, r, o), e.m(
        /*providedVideoTemplate*/
        t[12],
        r
      ), t[49](r);
    },
    p(n, o) {
      o[0] & /*providedVideoTemplate*/
      4096 && e.p(
        /*providedVideoTemplate*/
        n[12]
      );
    },
    d(n) {
      n && k(r), t[49](null);
    }
  };
}
function Yc(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Me("source"), this.h();
    },
    l(s) {
      r = ze(s, "SOURCE", { src: !0, type: !0 }), this.h();
    },
    h() {
      to(r.src, e = /*source*/
      t[60].src) || g(r, "src", e), g(r, "type", n = /*source*/
      t[60].type);
    },
    m(s, a) {
      K(s, r, a), o || (i = et(
        r,
        "error",
        /*onError*/
        t[31]
      ), o = !0);
    },
    p(s, a) {
      a[0] & /*sources*/
      16 && !to(r.src, e = /*source*/
      s[60].src) && g(r, "src", e), a[0] & /*sources*/
      16 && n !== (n = /*source*/
      s[60].type) && g(r, "type", n);
    },
    d(s) {
      s && k(r), o = !1, i();
    }
  };
}
function Xc(t) {
  let r = (
    /*source*/
    t[60]
  ), e, n = Yc(t);
  return {
    c() {
      n.c(), e = Re();
    },
    l(o) {
      n.l(o), e = Re();
    },
    m(o, i) {
      n.m(o, i), K(o, e, i);
    },
    p(o, i) {
      i[0] & /*sources*/
      16 && Tr(r, r = /*source*/
      o[60]) ? (n.d(1), n = Yc(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && k(e), n.d(o);
    }
  };
}
function Hb(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[11] !== "0" ? Bb : (
        /*shouldUseVideoProvider*/
        i[13] ? Ob : zb
      )
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Re();
    },
    l(i) {
      o.l(i), r = Re();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && k(r), o.d(i);
    }
  };
}
function Wb(t) {
  let r, e, n, o;
  const i = [Nb, Pb], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[2] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Re();
    },
    l(l) {
      e && e.l(l), n = Re();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (br(), oe(s[c], 1, 1, () => {
        s[c] = null;
      }), yr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      oe(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function Ub(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, p, m, h, y, w, D = j, z = () => (D(), D = V(a, (We) => e(39, w = We)), a), O, $ = j, ue = () => ($(), $ = V(m, (We) => e(40, O = We)), m), M, Y = j, se = () => (Y(), Y = V(p, (We) => e(41, M = We)), p), C, I = j, P = () => (I(), I = V(_, (We) => e(42, C = We)), _), B, q = j, pe = () => (q(), q = V(f, (We) => e(43, B = We)), f), _e, Ae = j, be = () => (Ae(), Ae = V(c, (We) => e(44, _e = We)), c), Ie, x = j, Ye = () => (x(), x = V(u, (We) => e(45, Ie = We)), u), Qe, xe = j, we = () => (xe(), xe = V(l, (We) => e(46, Qe = We)), l), Te, ge = j, ye = () => (ge(), ge = V(s, (We) => e(47, Te = We)), s), he, te = j, fe = () => (te(), te = V(i, (We) => e(48, he = We)), i);
  t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => $()), t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => q()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => x()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => te());
  let { componentContext: re } = r, { layoutParams: ve = void 0 } = r;
  const qe = zr($r), Xe = qe.videoPlayerProvider;
  let ee, He = !1, Oe = !1, lt, _t, it = [], Et = !1, at = !1, zt = !1, ht = !1, Z, de = "fit", ct = "0", Be = !1, T, St = "", dt, Ft = !!Xe;
  function Pt(We) {
    var ur, sr;
    const vt = re.getJsonWithVars({
      sources: We.video_sources,
      repeatable: We.repeatable,
      autostart: We.autostart,
      preloadRequired: We.preload_required,
      muted: We.muted,
      preview: We.preview,
      aspect: We.aspect,
      scale: We.scale,
      payload: We.player_settings_payload
    }), qt = en(vt.repeatable, !1), Nt = en(vt.autostart, !1), ar = en(vt.preloadRequired, !1), Fe = en(vt.muted, !1), At = (ur = vt.aspect) != null && ur.ratio && On(vt.aspect.ratio) ? vt.aspect.ratio : void 0;
    if ((sr = vt.sources) != null && sr.length)
      return {
        sources: vt.sources,
        repeatable: qt,
        autostart: Nt,
        preloadRequired: ar,
        muted: Fe,
        preview: vt.preview,
        aspect: At,
        scale: vt.scale,
        payload: vt.payload
      };
  }
  function st(We) {
    var vt;
    if (Oe) {
      Oe = !1;
      return;
    }
    dt ? (vt = dt.seek) == null || vt.call(dt, Number(We)) : lt && e(3, lt.currentTime = Number(We) / 1e3, lt);
  }
  function Q() {
    dt ? dt.pause() : lt == null || lt.pause();
  }
  function Dt() {
    if (dt) {
      dt.play();
      return;
    }
    const We = lt == null ? void 0 : lt.play();
    We && We.catch((vt) => {
      re.logError(X(new Error("Video playing error"), {
        level: "error",
        additional: { originalText: String(vt) }
      }));
    });
  }
  function Ot() {
    lt && (Oe = !0, o.setValue(Math.floor(lt.currentTime * 1e3)));
  }
  function nr() {
    re.execAnyActions(re.json.end_actions);
  }
  function er() {
    re.execAnyActions(re.json.resume_actions);
  }
  function Ve() {
    re.execAnyActions(re.json.pause_actions);
  }
  function Ge() {
    re.execAnyActions(re.json.buffering_actions);
  }
  function yt() {
    re.execAnyActions(re.json.fatal_actions);
  }
  no(() => {
    if (Xe && _t) {
      const We = Pt(re.json);
      if (We) {
        const vt = Xe.instance(_t, We);
        vt ? e(36, dt = vt) : e(13, Ft = !1);
      }
    }
  }), dn(() => {
    ee && (qe.unregisterInstance(ee), e(32, ee = void 0)), T && (T(), e(35, T = void 0)), dt && (dt.destroy(), e(36, dt = void 0));
  });
  function Pe(We) {
    Mr[We ? "unshift" : "push"](() => {
      _t = We, e(10, _t);
    });
  }
  function tt(We) {
    Mr[We ? "unshift" : "push"](() => {
      lt = We, e(3, lt);
    });
  }
  function Le(We) {
    Mr[We ? "unshift" : "push"](() => {
      _t = We, e(10, _t);
    });
  }
  function Tt(We) {
    Mr[We ? "unshift" : "push"](() => {
      lt = We, e(3, lt);
    });
  }
  return t.$$set = (We) => {
    "componentContext" in We && e(0, re = We.componentContext), "layoutParams" in We && e(1, ve = We.layoutParams);
  }, t.$$.update = () => {
    var We;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && re.json && (e(5, Et = !1), e(6, at = !1), e(7, zt = !1), e(8, ht = !1), e(9, Z = void 0), e(33, de = "fit"), e(34, Be = !1), e(13, Ft = !!Xe)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*customVideoInstance, $jsonSource, $jsonRepeatable, $jsonAutostart, $jsonMuted, $jsonPreload, $jsonPreview, $jsonScale, $jsonAspect*/
    260384 && re.json && dt && (he || Te || w || Qe || Ie || _e || B || C)) {
      const vt = Pt(re.json);
      vt && ((We = dt.update) == null || We.call(dt, vt));
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(38, n = re.json.elapsed_time_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*elapsedVariableName*/
    128 && e(37, o = n && (re.getVariable(n, "integer") || qe.awaitGlobalVariable(n, "integer", 0)) || eo("temp", "integer", 0)), t.$$.dirty[1] & /*elapsedVariable, elapsedVariableUnsubscriber*/
    80 && o && (T && T(), e(35, T = o.subscribe(st))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(25, i = re.getDerivedFromVars(re.json.video_sources))), t.$$.dirty[0] & /*componentContext*/
    1 && ye(e(24, s = re.getDerivedFromVars(re.json.repeatable))), t.$$.dirty[0] & /*componentContext*/
    1 && z(e(23, a = re.getDerivedFromVars(re.json.autostart))), t.$$.dirty[0] & /*componentContext*/
    1 && we(e(22, l = re.getDerivedFromVars(re.json.muted))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(21, u = re.getDerivedFromVars(re.json.preload_required))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(20, c = re.getDerivedFromVars(re.json.preview))), t.$$.dirty[0] & /*componentContext*/
    1 && pe(e(19, f = re.getDerivedFromVars(re.json.scale))), t.$$.dirty[0] & /*componentContext*/
    1 && P(e(18, _ = re.getDerivedFromVars(re.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && se(e(17, p = re.getDerivedFromVars(re.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(16, m = re.getDerivedFromVars(re.json.height))), t.$$.dirty[0] & /*sources, componentContext*/
    17 | t.$$.dirty[1] & /*$jsonSource*/
    131072 && (e(4, it = Tb(he, it)), it.length ? e(2, He = !1) : (e(2, He = !0), re.logError(X(new Error('Missing "video_sources" in "video"'))))), t.$$.dirty[0] & /*loop*/
    32 | t.$$.dirty[1] & /*$jsonRepeatable*/
    65536 && e(5, Et = en(Te, Et)), t.$$.dirty[0] & /*autoplay*/
    64 | t.$$.dirty[1] & /*$jsonAutostart*/
    256 && e(6, at = en(w, at)), t.$$.dirty[0] & /*muted*/
    128 | t.$$.dirty[1] & /*$jsonMuted*/
    32768 && e(7, zt = en(Qe, zt)), t.$$.dirty[0] & /*preload*/
    256 | t.$$.dirty[1] & /*$jsonPreload*/
    16384 && e(8, ht = en(Ie, ht)), t.$$.dirty[0] & /*poster*/
    512 | t.$$.dirty[1] & /*$jsonPreview*/
    8192 && e(9, Z = typeof _e == "string" ? Hd(_e) : Z), t.$$.dirty[1] & /*$jsonScale, scale*/
    4100 && e(33, de = Mb(B) || de), t.$$.dirty[1] & /*$jsonAspect, $jsonWidth, $jsonHeight*/
    3584) {
      const vt = C == null ? void 0 : C.ratio;
      vt && On(vt) ? (e(11, ct = (100 / Number(vt)).toFixed(2)), e(34, Be = !0)) : (e(11, ct = "0"), e(34, Be = (!M || M.type === "match_parent") && (O == null ? void 0 : O.type) === "match_parent"));
    }
    t.$$.dirty[0] & /*componentContext, hasError*/
    5 | t.$$.dirty[1] & /*prevId*/
    2 && re.json && (ee && (qe.unregisterInstance(ee), e(32, ee = void 0)), re.id && !He && !re.fakeElement && (e(32, ee = re.id), qe.registerInstance(ee, { pause: Q, start: Dt }))), t.$$.dirty[0] & /*componentContext, videoElem*/
    9 | t.$$.dirty[1] & /*$jsonAutostart*/
    256 && re.json && w && lt && Dt(), t.$$.dirty[1] & /*isAbsolute*/
    8 && e(15, h = { absolute: Be }), t.$$.dirty[1] & /*scale*/
    4 && e(14, y = { "object-fit": de });
  }, [
    re,
    ve,
    He,
    lt,
    it,
    Et,
    at,
    zt,
    ht,
    Z,
    _t,
    ct,
    St,
    Ft,
    y,
    h,
    m,
    p,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    Ot,
    nr,
    er,
    Ve,
    Ge,
    yt,
    ee,
    de,
    Be,
    T,
    dt,
    o,
    n,
    w,
    O,
    M,
    C,
    B,
    _e,
    Ie,
    Qe,
    Te,
    he,
    Pe,
    tt,
    Le,
    Tt
  ];
}
class Gb extends Wr {
  constructor(r) {
    super(), Hr(this, r, Ub, Wb, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Jb = "appkit-switch__tumbler", qb = "appkit-switch__tumbler_checked", Kb = "appkit-switch_disabled", Yb = "appkit-switch__thumb", Xb = "appkit-switch_direction_rtl", Zb = "appkit-switch__input", wi = {
  switch: "appkit-switch",
  switch__tumbler: Jb,
  switch__tumbler_checked: qb,
  switch_disabled: Kb,
  switch__thumb: Yb,
  switch_direction_rtl: Xb,
  switch__input: Zb
};
function Gi(t) {
  return t === !0 || t === 1;
}
function Qb(t) {
  let r, e;
  return r = new Pn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function xb(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: bt(
        "switch",
        wi,
        /*mods*/
        t[9]
      ),
      style: (
        /*stl*/
        t[8]
      ),
      customDescription: !0,
      customActions: "switch",
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: {
        default: [
          $b,
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
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      512 && (i.cls = bt(
        "switch",
        wi,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function $b(t) {
  let r, e, n, o, i, s, a, l, u;
  return {
    c() {
      r = Me("div"), e = Me("div"), o = gr(), i = Me("input"), this.h();
    },
    l(c) {
      r = ze(c, "DIV", { class: !0 });
      var f = je(r);
      e = ze(f, "DIV", { class: !0 }), je(e).forEach(k), f.forEach(k), o = mr(c), i = ze(c, "INPUT", {
        type: !0,
        class: !0,
        autocomplete: !0,
        "aria-label": !0
      }), this.h();
    },
    h() {
      g(e, "class", wi.switch__thumb), g(r, "class", n = bt("switch__tumbler", wi, { checked: (
        /*value*/
        t[3]
      ) })), g(i, "type", "checkbox"), g(i, "class", s = bt("switch__input", wi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[31]
        )
      })), g(i, "autocomplete", "off"), g(
        i,
        "aria-label",
        /*description*/
        t[6]
      ), i.disabled = a = !/*isEnabled*/
      t[5], i.checked = /*value*/
      t[3];
    },
    m(c, f) {
      K(c, r, f), jt(r, e), K(c, o, f), K(c, i, f), t[25](i), l || (u = [
        et(
          i,
          "input",
          /*onInput*/
          t[14]
        ),
        et(i, "focus", function() {
          Rr(
            /*focusHandler*/
            t[29]
          ) && t[29].apply(this, arguments);
        }),
        et(i, "blur", function() {
          Rr(
            /*blurHandler*/
            t[30]
          ) && t[30].apply(this, arguments);
        })
      ], l = !0);
    },
    p(c, f) {
      t = c, f[0] & /*value*/
      8 && n !== (n = bt("switch__tumbler", wi, { checked: (
        /*value*/
        t[3]
      ) })) && g(r, "class", n), f[1] & /*hasCustomFocus*/
      1 && s !== (s = bt("switch__input", wi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[31]
        )
      })) && g(i, "class", s), f[0] & /*description*/
      64 && g(
        i,
        "aria-label",
        /*description*/
        t[6]
      ), f[0] & /*isEnabled*/
      32 && a !== (a = !/*isEnabled*/
      t[5]) && (i.disabled = a), f[0] & /*value*/
      8 && (i.checked = /*value*/
      t[3]);
    },
    d(c) {
      c && (k(r), k(o), k(i)), t[25](null), l = !1, Gr(u);
    }
  };
}
function ey(t) {
  let r, e, n, o;
  const i = [xb, Qb], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[4] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Re();
    },
    l(l) {
      e && e.l(l), n = Re();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (br(), oe(s[c], 1, 1, () => {
        s[c] = null;
      }), yr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      oe(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function ty(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, p = j, m = () => (p(), p = V(s, (we) => e(21, _ = we)), s), h, y = j, w = () => (y(), y = V(l, (we) => e(22, h = we)), l), D, z = j, O = () => (z(), z = V(a, (we) => e(23, D = we)), a), $, ue = j, M = () => (ue(), ue = V(i, (we) => e(24, $ = we)), i);
  t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => y()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => ue());
  let { componentContext: Y } = r, { layoutParams: se = void 0 } = r;
  const C = zr($r), I = zr(Bo), P = C.direction;
  kn(t, P, (we) => e(20, f = we));
  let B, q, pe = !1, _e = !1, Ae = "", be = !0, Ie = "#129386", x = "#1293864c";
  function Ye() {
    e(5, be = !0), e(16, Ie = "#129386"), e(17, x = "#1293864c");
  }
  function Qe(we) {
    e(3, pe = we.target.checked), i.setValue(pe);
  }
  dn(() => {
    B && (C.unregisterFocusable(B), e(15, B = void 0));
  });
  function xe(we) {
    Mr[we ? "unshift" : "push"](() => {
      q = we, e(2, q);
    });
  }
  return t.$$set = (we) => {
    "componentContext" in we && e(0, Y = we.componentContext), "layoutParams" in we && e(1, se = we.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(19, n = Y.origJson), t.$$.dirty[0] & /*origJson*/
    524288 && n && Ye(), t.$$.dirty[0] & /*componentContext*/
    1 && e(18, o = Y.json.is_on_variable), t.$$.dirty[0] & /*variable, componentContext*/
    262145 && M(e(7, i = o && (Y.getVariable(o, "boolean") || C.awaitGlobalVariable(o, "boolean", !1)) || eo("temp", "boolean", !1))), t.$$.dirty[0] & /*componentContext*/
    1 && m(e(12, s = Y.getDerivedFromVars(Y.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && O(e(11, a = Y.getDerivedFromVars(Y.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && w(e(10, l = Y.getDerivedFromVars(Y.json.on_color))), t.$$.dirty[0] & /*variable, componentContext, $jsonAccessibility, hasError*/
    2359313) {
      let we = !1;
      o ? (I.hasAction() || (_ == null ? void 0 : _.mode) === "exclude") && (we = !0, Y.logError(X(new Error('Cannot show "switch" inside component with an action or inside accessibility mode=exclude')))) : (we = !0, Y.logError(X(new Error('Missing "is_on_variable" in "switch"')))), _e !== we && e(4, _e = we);
    }
    if (t.$$.dirty[0] & /*value, $valueVariable*/
    16777224 && Gi(pe) !== Gi($) && e(3, pe = Gi($)), t.$$.dirty[0] & /*$jsonIsEnabled, isEnabled*/
    8388640 && e(5, be = en(D, be)), t.$$.dirty[0] & /*$jsonOnColor, onColor*/
    4259840 && (e(16, Ie = pr(h, 1, Ie)), typeof h == "string")) {
      const we = wo(h);
      we && (we.a *= 0.3, e(17, x = va(we)));
    }
    t.$$.dirty[0] & /*$jsonAccessibility, componentContext*/
    2097153 && (_ != null && _.description ? e(6, Ae = ei(_)) : Y.logError(X(new Error('Missing accessibility "description" for switch'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled, $direction*/
    1048608 && e(9, u = {
      disabled: !be,
      direction: f
    }), t.$$.dirty[0] & /*onColor, onSubColor*/
    196608 && e(8, c = {
      "--divkit-switch-on-color": Ie,
      "--divkit-switch-on-sub-color": x
    }), t.$$.dirty[0] & /*input, componentContext, prevId*/
    32773 && q && Y.json && (B && (C.unregisterFocusable(B), e(15, B = void 0)), Y.id && !Y.fakeElement && (e(15, B = Y.id), C.registerFocusable(B, {
      focus() {
        q && q.focus();
      }
    })));
  }, [
    Y,
    se,
    q,
    pe,
    _e,
    be,
    Ae,
    i,
    c,
    u,
    l,
    a,
    s,
    P,
    Qe,
    B,
    Ie,
    x,
    o,
    n,
    f,
    _,
    h,
    D,
    $,
    xe
  ];
}
class ry extends Wr {
  constructor(r) {
    super(), Hr(this, r, ty, ey, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const ny = "appkit-checkbox", oy = "appkit-checkbox__box", iy = "appkit-checkbox__box_checked", sy = "appkit-checkbox__checkmark", ly = "appkit-checkbox_disabled", ay = "appkit-checkbox__input", vi = {
  checkbox: ny,
  checkbox__box: oy,
  checkbox__box_checked: iy,
  checkbox__checkmark: sy,
  checkbox_disabled: ly,
  checkbox__input: ay
};
function uy(t) {
  let r, e;
  return r = new Pn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function cy(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: bt(
        "checkbox",
        vi,
        /*mods*/
        t[9]
      ),
      style: (
        /*stl*/
        t[8]
      ),
      customDescription: !0,
      customActions: "checkbox",
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: {
        default: [
          fy,
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
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      512 && (i.cls = bt(
        "checkbox",
        vi,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function fy(t) {
  let r, e, n, o, i, s, a, l, u;
  return {
    c() {
      r = Me("div"), e = Me("div"), o = gr(), i = Me("input"), this.h();
    },
    l(c) {
      r = ze(c, "DIV", { class: !0 });
      var f = je(r);
      e = ze(f, "DIV", { class: !0 }), je(e).forEach(k), f.forEach(k), o = mr(c), i = ze(c, "INPUT", {
        type: !0,
        class: !0,
        autocomplete: !0,
        role: !0,
        "aria-checked": !0,
        "aria-label": !0
      }), this.h();
    },
    h() {
      g(e, "class", vi.checkbox__checkmark), g(r, "class", n = bt("checkbox__box", vi, { checked: (
        /*value*/
        t[3]
      ) })), g(i, "type", "checkbox"), g(i, "class", s = bt("checkbox__input", vi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[34]
        )
      })), g(i, "autocomplete", "off"), g(i, "role", "checkbox"), g(
        i,
        "aria-checked",
        /*value*/
        t[3]
      ), g(
        i,
        "aria-label",
        /*description*/
        t[6]
      ), i.disabled = a = !/*isEnabled*/
      t[5], i.checked = /*value*/
      t[3];
    },
    m(c, f) {
      K(c, r, f), jt(r, e), K(c, o, f), K(c, i, f), t[28](i), l || (u = [
        et(
          i,
          "input",
          /*onInput*/
          t[15]
        ),
        et(i, "focus", function() {
          Rr(
            /*focusHandler*/
            t[32]
          ) && t[32].apply(this, arguments);
        }),
        et(i, "blur", function() {
          Rr(
            /*blurHandler*/
            t[33]
          ) && t[33].apply(this, arguments);
        })
      ], l = !0);
    },
    p(c, f) {
      t = c, f[0] & /*value*/
      8 && n !== (n = bt("checkbox__box", vi, { checked: (
        /*value*/
        t[3]
      ) })) && g(r, "class", n), f[1] & /*hasCustomFocus*/
      8 && s !== (s = bt("checkbox__input", vi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[34]
        )
      })) && g(i, "class", s), f[0] & /*value*/
      8 && g(
        i,
        "aria-checked",
        /*value*/
        t[3]
      ), f[0] & /*description*/
      64 && g(
        i,
        "aria-label",
        /*description*/
        t[6]
      ), f[0] & /*isEnabled*/
      32 && a !== (a = !/*isEnabled*/
      t[5]) && (i.disabled = a), f[0] & /*value*/
      8 && (i.checked = /*value*/
      t[3]);
    },
    d(c) {
      c && (k(r), k(o), k(i)), t[28](null), l = !1, Gr(u);
    }
  };
}
function dy(t) {
  let r, e, n, o;
  const i = [cy, uy], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[4] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Re();
    },
    l(l) {
      e && e.l(l), n = Re();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (br(), oe(s[c], 1, 1, () => {
        s[c] = null;
      }), yr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      oe(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function _y(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, p, m = j, h = () => (m(), m = V(s, (re) => e(22, p = re)), s), y, w = j, D = () => (w(), w = V(c, (re) => e(23, y = re)), c), z, O = j, $ = () => (O(), O = V(u, (re) => e(24, z = re)), u), ue, M = j, Y = () => (M(), M = V(l, (re) => e(25, ue = re)), l), se, C = j, I = () => (C(), C = V(a, (re) => e(26, se = re)), a), P, B = j, q = () => (B(), B = V(i, (re) => e(27, P = re)), i);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => w()), t.$$.on_destroy.push(() => O()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => C()), t.$$.on_destroy.push(() => B());
  let { componentContext: pe } = r, { layoutParams: _e = void 0 } = r;
  const Ae = zr($r), be = zr(Bo);
  let Ie, x, Ye = !1, Qe = !1, xe = "", we = !0, Te = "#129386", ge = "rgba(0, 0, 0, .3)", ye = "#fff";
  function he() {
    e(5, we = !0), e(17, Te = "#129386"), e(18, ge = "rgba(0, 0, 0, .3)"), e(19, ye = "#fff");
  }
  function te(re) {
    e(3, Ye = re.target.checked), i.setValue(Ye);
  }
  dn(() => {
    Ie && (Ae.unregisterFocusable(Ie), e(16, Ie = void 0));
  });
  function fe(re) {
    Mr[re ? "unshift" : "push"](() => {
      x = re, e(2, x);
    });
  }
  return t.$$set = (re) => {
    "componentContext" in re && e(0, pe = re.componentContext), "layoutParams" in re && e(1, _e = re.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(21, n = pe.origJson), t.$$.dirty[0] & /*origJson*/
    2097152 && n && he(), t.$$.dirty[0] & /*componentContext*/
    1 && e(20, o = pe.json.is_checked_variable), t.$$.dirty[0] & /*variable, componentContext*/
    1048577 && q(e(7, i = o && (pe.getVariable(o, "boolean") || Ae.awaitGlobalVariable(o, "boolean", !1)) || eo("temp", "boolean", !1))), t.$$.dirty[0] & /*componentContext*/
    1 && h(e(14, s = pe.getDerivedFromVars(pe.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && I(e(13, a = pe.getDerivedFromVars(pe.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Y(e(12, l = pe.getDerivedFromVars(pe.json.on_color))), t.$$.dirty[0] & /*componentContext*/
    1 && $(e(11, u = pe.getDerivedFromVars(pe.json.off_color))), t.$$.dirty[0] & /*componentContext*/
    1 && D(e(10, c = pe.getDerivedFromVars(pe.json.check_mark_color))), t.$$.dirty[0] & /*variable, componentContext, $jsonAccessibility, hasError*/
    5242897) {
      let re = !1;
      o ? (be.hasAction() || (p == null ? void 0 : p.mode) === "exclude") && (re = !0, pe.logError(X(new Error('Cannot show "checkbox" inside component with an action or inside accessibility mode=exclude')))) : (re = !0, pe.logError(X(new Error('Missing "is_checked_variable" in "checkbox"')))), Qe !== re && e(4, Qe = re);
    }
    t.$$.dirty[0] & /*value, $valueVariable*/
    134217736 && Gi(Ye) !== Gi(P) && e(3, Ye = Gi(P)), t.$$.dirty[0] & /*$jsonIsEnabled, isEnabled*/
    67108896 && e(5, we = en(se, we)), t.$$.dirty[0] & /*$jsonOnColor, onColor*/
    33685504 && e(17, Te = pr(ue, 1, Te)), t.$$.dirty[0] & /*$jsonOffColor, offColor*/
    17039360 && e(18, ge = pr(z, 1, ge)), t.$$.dirty[0] & /*$jsonCheckMarkColor, checkMarkColor*/
    8912896 && e(19, ye = pr(y, 1, ye)), t.$$.dirty[0] & /*$jsonAccessibility, componentContext*/
    4194305 && (p != null && p.description ? e(6, xe = ei(p)) : pe.logError(X(new Error('Missing accessibility "description" for checkbox'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled*/
    32 && e(9, f = { disabled: !we }), t.$$.dirty[0] & /*onColor, offColor, checkMarkColor*/
    917504 && e(8, _ = {
      "--divkit-checkbox-on-color": Te,
      "--divkit-checkbox-off-color": ge,
      "--divkit-checkbox-check-mark-color": ye
    }), t.$$.dirty[0] & /*input, componentContext, prevId*/
    65541 && x && pe.json && (Ie && (Ae.unregisterFocusable(Ie), e(16, Ie = void 0)), pe.id && !pe.fakeElement && (e(16, Ie = pe.id), Ae.registerFocusable(Ie, {
      focus() {
        x && x.focus();
      }
    })));
  }, [
    pe,
    _e,
    x,
    Ye,
    Qe,
    we,
    xe,
    i,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    te,
    Ie,
    Te,
    ge,
    ye,
    o,
    n,
    p,
    y,
    z,
    ue,
    se,
    P,
    fe
  ];
}
class hy extends Wr {
  constructor(r) {
    super(), Hr(this, r, _y, dy, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const py = "appkit-radio", gy = "appkit-radio__group", my = "appkit-radio__group_vertical", by = "appkit-radio__group_horizontal", yy = "appkit-radio__item", wy = "appkit-radio_disabled", vy = "appkit-radio__circle", ky = "appkit-radio__circle_selected", jy = "appkit-radio__dot", Ey = "appkit-radio__label", Cy = "appkit-radio__input", Vo = {
  radio: py,
  radio__group: gy,
  radio__group_vertical: my,
  radio__group_horizontal: by,
  radio__item: yy,
  radio_disabled: wy,
  radio__circle: vy,
  radio__circle_selected: ky,
  radio__dot: jy,
  radio__label: Ey,
  radio__input: Cy
};
function Zc(t, r, e) {
  const n = t.slice();
  return n[55] = r[e], n;
}
function Ay(t) {
  let r, e;
  return r = new Pn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function Vy(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: bt(
        "radio",
        Vo,
        /*mods*/
        t[11]
      ),
      style: (
        /*stl*/
        t[9]
      ),
      customDescription: !0,
      customActions: "radio",
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: {
        default: [
          Iy,
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
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = bt(
        "radio",
        Vo,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function Sy(t) {
  let r, e = (
    /*item*/
    t[55].value + ""
  ), n;
  return {
    c() {
      r = Me("span"), n = Bn(e), this.h();
    },
    l(o) {
      r = ze(o, "SPAN", { class: !0 });
      var i = je(r);
      n = qn(i, e), i.forEach(k), this.h();
    },
    h() {
      g(r, "class", Vo.radio__label);
    },
    m(o, i) {
      K(o, r, i), jt(r, n);
    },
    p(o, i) {
      i[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      o[55].value + "") && Qn(n, e);
    },
    d(o) {
      o && k(r);
    }
  };
}
function Dy(t) {
  let r, e = (
    /*item*/
    t[55].text + ""
  ), n;
  return {
    c() {
      r = Me("span"), n = Bn(e), this.h();
    },
    l(o) {
      r = ze(o, "SPAN", { class: !0 });
      var i = je(r);
      n = qn(i, e), i.forEach(k), this.h();
    },
    h() {
      g(r, "class", Vo.radio__label);
    },
    m(o, i) {
      K(o, r, i), jt(r, n);
    },
    p(o, i) {
      i[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      o[55].text + "") && Qn(n, e);
    },
    d(o) {
      o && k(r);
    }
  };
}
function Qc(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _, p;
  function m(D, z) {
    return (
      /*item*/
      D[55].text ? Dy : Sy
    );
  }
  let h = m(t), y = h(t);
  function w() {
    return (
      /*change_handler*/
      t[47](
        /*item*/
        t[55]
      )
    );
  }
  return {
    c() {
      r = Me("label"), e = Me("div"), n = Me("div"), i = gr(), y.c(), s = gr(), a = Me("input"), f = gr(), this.h();
    },
    l(D) {
      r = ze(D, "LABEL", { class: !0 });
      var z = je(r);
      e = ze(z, "DIV", { class: !0 });
      var O = je(e);
      n = ze(O, "DIV", { class: !0 }), je(n).forEach(k), O.forEach(k), i = mr(z), y.l(z), s = mr(z), a = ze(z, "INPUT", { type: !0, class: !0, name: !0 }), f = mr(z), z.forEach(k), this.h();
    },
    h() {
      g(n, "class", Vo.radio__dot), g(e, "class", o = bt("radio__circle", Vo, {
        selected: (
          /*$valueVariable*/
          t[23] === /*item*/
          t[55].value
        )
      })), g(a, "type", "radio"), g(a, "class", Vo.radio__input), g(
        a,
        "name",
        /*groupName*/
        t[12]
      ), a.value = l = /*item*/
      t[55].value, a.checked = u = /*$valueVariable*/
      t[23] === /*item*/
      t[55].value, a.disabled = c = !/*isEnabled*/
      t[4], g(r, "class", Vo.radio__item);
    },
    m(D, z) {
      K(D, r, z), jt(r, e), jt(e, n), jt(r, i), y.m(r, null), jt(r, s), jt(r, a), jt(r, f), _ || (p = [
        et(a, "change", w),
        et(a, "focus", function() {
          Rr(
            /*focusHandler*/
            t[52]
          ) && t[52].apply(this, arguments);
        }),
        et(a, "blur", function() {
          Rr(
            /*blurHandler*/
            t[53]
          ) && t[53].apply(this, arguments);
        })
      ], _ = !0);
    },
    p(D, z) {
      t = D, z[0] & /*$valueVariable, filteredItems*/
      8388640 && o !== (o = bt("radio__circle", Vo, {
        selected: (
          /*$valueVariable*/
          t[23] === /*item*/
          t[55].value
        )
      })) && g(e, "class", o), h === (h = m(t)) && y ? y.p(t, z) : (y.d(1), y = h(t), y && (y.c(), y.m(r, s))), z[0] & /*groupName*/
      4096 && g(
        a,
        "name",
        /*groupName*/
        t[12]
      ), z[0] & /*filteredItems*/
      32 && l !== (l = /*item*/
      t[55].value) && (a.value = l), z[0] & /*$valueVariable, filteredItems*/
      8388640 && u !== (u = /*$valueVariable*/
      t[23] === /*item*/
      t[55].value) && (a.checked = u), z[0] & /*isEnabled*/
      16 && c !== (c = !/*isEnabled*/
      t[4]) && (a.disabled = c);
    },
    d(D) {
      D && k(r), y.d(), _ = !1, Gr(p);
    }
  };
}
function Iy(t) {
  let r, e, n = dr(
    /*filteredItems*/
    t[5]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Qc(Zc(t, n, i));
  return {
    c() {
      r = Me("div");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      this.h();
    },
    l(i) {
      r = ze(i, "DIV", {
        class: !0,
        style: !0,
        role: !0,
        "aria-label": !0
      });
      var s = je(r);
      for (let a = 0; a < o.length; a += 1)
        o[a].l(s);
      s.forEach(k), this.h();
    },
    h() {
      g(r, "class", e = bt(
        "radio__group",
        Vo,
        /*groupMods*/
        t[10]
      )), g(
        r,
        "style",
        /*groupStl*/
        t[8]
      ), g(r, "role", "radiogroup"), g(
        r,
        "aria-label",
        /*description*/
        t[6]
      );
    },
    m(i, s) {
      K(i, r, s);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(r, null);
      t[48](r);
    },
    p(i, s) {
      if (s[0] & /*groupName, filteredItems, $valueVariable, isEnabled, onChange*/
      25169968 | s[1] & /*focusHandler, blurHandler*/
      6291456) {
        n = dr(
          /*filteredItems*/
          i[5]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = Zc(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Qc(l), o[a].c(), o[a].m(r, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
      s[0] & /*groupMods*/
      1024 && e !== (e = bt(
        "radio__group",
        Vo,
        /*groupMods*/
        i[10]
      )) && g(r, "class", e), s[0] & /*groupStl*/
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
      i && k(r), hn(o, i), t[48](null);
    }
  };
}
function Fy(t) {
  let r, e, n, o;
  const i = [Vy, Ay], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Re();
    },
    l(l) {
      e && e.l(l), n = Re();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (br(), oe(s[c], 1, 1, () => {
        s[c] = null;
      }), yr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      oe(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function Ty(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, p, m, h, y, w, D, z, O, $, ue, M, Y = j, se = () => (Y(), Y = V(l, (Ge) => e(37, M = Ge)), l), C, I = j, P = () => (I(), I = V(w, (Ge) => e(38, C = Ge)), w), B, q = j, pe = () => (q(), q = V(y, (Ge) => e(39, B = Ge)), y), _e, Ae = j, be = () => (Ae(), Ae = V(h, (Ge) => e(40, _e = Ge)), h), Ie, x = j, Ye = () => (x(), x = V(m, (Ge) => e(41, Ie = Ge)), m), Qe, xe = j, we = () => (xe(), xe = V(p, (Ge) => e(42, Qe = Ge)), p), Te, ge = j, ye = () => (ge(), ge = V(_, (Ge) => e(43, Te = Ge)), _), he, te = j, fe = () => (te(), te = V(f, (Ge) => e(44, he = Ge)), f), re, ve = j, qe = () => (ve(), ve = V(c, (Ge) => e(45, re = Ge)), c), Xe, ee = j, He = () => (ee(), ee = V(u, (Ge) => e(46, Xe = Ge)), u), Oe, lt = j, _t = () => (lt(), lt = V(a, (Ge) => e(23, Oe = Ge)), a);
  t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => q()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => x()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => te()), t.$$.on_destroy.push(() => ve()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => lt());
  let { componentContext: it } = r, { layoutParams: Et = void 0 } = r;
  const at = zr($r), zt = zr(Bo);
  let ht, Z, de = !1, ct = "", Be = !0, T = "#129386", St = "rgba(0, 0, 0, 0.3)", dt = "", Ft, Pt, st = "", Q = "vertical", Dt = 8;
  function Ot() {
    e(4, Be = !0), e(26, T = "#129386"), e(27, St = "rgba(0, 0, 0, 0.3)"), e(28, dt = ""), e(29, Ft = void 0), e(30, Pt = void 0), e(31, st = ""), e(32, Q = "vertical"), e(33, Dt = 8);
  }
  function nr(Ge) {
    a.setValue(Ge);
  }
  dn(() => {
    ht && (at.unregisterFocusable(ht), e(25, ht = void 0));
  });
  const er = (Ge) => nr(Ge.value);
  function Ve(Ge) {
    Mr[Ge ? "unshift" : "push"](() => {
      Z = Ge, e(2, Z);
    });
  }
  return t.$$set = (Ge) => {
    "componentContext" in Ge && e(0, it = Ge.componentContext), "layoutParams" in Ge && e(1, Et = Ge.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(36, n = it.origJson), t.$$.dirty[1] & /*origJson*/
    32 && n && Ot(), t.$$.dirty[0] & /*componentContext*/
    1 && e(34, o = it.json.value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(35, i = it.json.options), t.$$.dirty[1] & /*items*/
    16 && e(5, s = Array.isArray(i) && i.filter((Ge) => typeof Ge.value == "string") || []), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    8 && _t(e(7, a = o && (it.getVariable(o, "string") || at.awaitGlobalVariable(o, "string", "")) || eo("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && se(e(22, l = it.getDerivedFromVars(it.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && He(e(21, u = it.getDerivedFromVars(it.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(20, c = it.getDerivedFromVars(it.json.selected_color))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(19, f = it.getDerivedFromVars(it.json.default_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ye(e(18, _ = it.getDerivedFromVars(it.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && we(e(17, p = it.getDerivedFromVars(it.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(16, m = it.getDerivedFromVars(it.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(15, h = it.getDerivedFromVars(it.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && pe(e(14, y = it.getDerivedFromVars(it.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && P(e(13, w = it.getDerivedFromVars(it.json.item_spacing))), t.$$.dirty[0] & /*filteredItems, componentContext*/
    33 && (Array.isArray(s) && s.length || it.logError(X(new Error('Empty "options" in "radio"')))), t.$$.dirty[0] & /*componentContext, hasError*/
    9 | t.$$.dirty[1] & /*variable, $jsonAccessibility*/
    72) {
      let Ge = !1;
      o ? (zt.hasAction() || (M == null ? void 0 : M.mode) === "exclude") && (Ge = !0, it.logError(X(new Error('Cannot show "radio" inside component with an action or inside accessibility mode=exclude')))) : (Ge = !0, it.logError(X(new Error('Missing "value_variable" in "radio"')))), de !== Ge && e(3, de = Ge);
    }
    t.$$.dirty[0] & /*isEnabled*/
    16 | t.$$.dirty[1] & /*$jsonIsEnabled*/
    32768 && e(4, Be = en(Xe, Be)), t.$$.dirty[0] & /*selectedColor*/
    67108864 | t.$$.dirty[1] & /*$jsonSelectedColor*/
    16384 && e(26, T = pr(re, 1, T)), t.$$.dirty[0] & /*defaultColor*/
    134217728 | t.$$.dirty[1] & /*$jsonDefaultColor*/
    8192 && e(27, St = pr(he, 1, St)), t.$$.dirty[0] & /*textColor*/
    268435456 | t.$$.dirty[1] & /*$jsonTextColor*/
    4096 && e(28, dt = pr(Te, 1, dt)), t.$$.dirty[0] & /*fontSize*/
    536870912 | t.$$.dirty[1] & /*$jsonFontSize*/
    2048 && e(29, Ft = typeof Qe == "number" && Qe > 0 ? Qe : Ft), t.$$.dirty[0] & /*fontWeight*/
    1073741824 | t.$$.dirty[1] & /*$jsonFontWeight, $jsonFontFamily*/
    1536 && (e(30, Pt = fi(Ie, void 0, Pt)), _e && typeof _e == "string" ? e(31, st = at.typefaceProvider(_e, { fontWeight: Pt || 400 })) : e(31, st = "")), t.$$.dirty[1] & /*$jsonOrientation, orientation*/
    258 && e(32, Q = B === "horizontal" || B === "vertical" ? B : Q), t.$$.dirty[1] & /*$jsonItemSpacing, itemSpacing*/
    132 && e(33, Dt = typeof C == "number" && C >= 0 ? C : Dt), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    64 && (M != null && M.description ? e(6, ct = ei(M)) : it.logError(X(new Error('Missing accessibility "description" for radio'), { level: "warn" }))), t.$$.dirty[0] & /*componentContext*/
    1 && e(12, D = it.id || `radio_${Math.random().toString(36).slice(2)}`), t.$$.dirty[0] & /*isEnabled*/
    16 && e(11, z = { disabled: !Be }), t.$$.dirty[1] & /*orientation*/
    2 && e(10, O = { [Q]: !0 }), t.$$.dirty[0] & /*selectedColor, defaultColor, textColor, fontSize, fontWeight*/
    2080374784 | t.$$.dirty[1] & /*fontFamily*/
    1 && e(9, $ = {
      "--divkit-radio-selected-color": T,
      "--divkit-radio-default-color": St,
      ...dt ? { "--divkit-radio-text-color": dt } : {},
      ...Ft ? { "font-size": me(Ft) } : {},
      ...Pt ? { "font-weight": Pt } : {},
      ...st ? { "font-family": st } : {}
    }), t.$$.dirty[1] & /*itemSpacing*/
    4 && e(8, ue = `gap: ${me(Dt)}`), t.$$.dirty[0] & /*container, componentContext, prevId*/
    33554437 && Z && it.json && (ht && (at.unregisterFocusable(ht), e(25, ht = void 0)), it.id && !it.fakeElement && (e(25, ht = it.id), at.registerFocusable(ht, {
      focus() {
        if (Z) {
          const Ge = Z.querySelector("input");
          Ge && Ge.focus();
        }
      }
    })));
  }, [
    it,
    Et,
    Z,
    de,
    Be,
    s,
    ct,
    a,
    ue,
    $,
    O,
    z,
    D,
    w,
    y,
    h,
    m,
    p,
    _,
    f,
    c,
    u,
    l,
    Oe,
    nr,
    ht,
    T,
    St,
    dt,
    Ft,
    Pt,
    st,
    Q,
    Dt,
    o,
    i,
    n,
    M,
    C,
    B,
    _e,
    Ie,
    Qe,
    Te,
    he,
    re,
    Xe,
    er,
    Ve
  ];
}
class My extends Wr {
  constructor(r) {
    super(), Hr(this, r, Ty, Fy, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Py = "appkit-progress", Ny = "appkit-progress__linear", zy = "appkit-progress__circular", li = {
  progress: Py,
  progress__linear: Ny,
  "progress__linear-fill": "appkit-progress__linear-fill",
  "progress__linear-fill_indeterminate": "appkit-progress__linear-fill_indeterminate",
  "progress-linear-indeterminate": "appkit-progress-linear-indeterminate",
  progress__circular: zy,
  "progress__circular-track": "appkit-progress__circular-track",
  "progress__circular-fill": "appkit-progress__circular-fill",
  "progress__circular-fill_indeterminate": "appkit-progress__circular-fill_indeterminate",
  "progress-circular-indeterminate": "appkit-progress-circular-indeterminate"
};
function Oy(t) {
  let r, e;
  return r = new Pn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function By(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: bt("progress", li, {}),
      style: (
        /*stl*/
        t[7]
      ),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: { default: [Hy] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function Ly(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = tn("svg"), e = tn("circle"), n = tn("circle"), this.h();
    },
    l(s) {
      r = an(s, "svg", {
        class: !0,
        width: !0,
        height: !0,
        viewBox: !0,
        role: !0,
        "aria-valuenow": !0,
        "aria-valuemin": !0,
        "aria-valuemax": !0
      });
      var a = je(r);
      e = an(a, "circle", {
        class: !0,
        cx: !0,
        cy: !0,
        r: !0,
        "stroke-width": !0
      }), je(e).forEach(k), n = an(a, "circle", {
        class: !0,
        cx: !0,
        cy: !0,
        r: !0,
        "stroke-width": !0,
        "stroke-dasharray": !0,
        "stroke-dashoffset": !0,
        "stroke-linecap": !0
      }), je(n).forEach(k), a.forEach(k), this.h();
    },
    h() {
      g(e, "class", li["progress__circular-track"]), g(e, "cx", oi / 2), g(e, "cy", oi / 2), g(e, "r", ta), g(
        e,
        "stroke-width",
        /*trackThickness*/
        t[5]
      ), g(n, "class", o = bt("progress__circular-fill", li, {
        indeterminate: (
          /*isIndeterminate*/
          t[4]
        )
      })), g(n, "cx", oi / 2), g(n, "cy", oi / 2), g(n, "r", ta), g(
        n,
        "stroke-width",
        /*trackThickness*/
        t[5]
      ), g(
        n,
        "stroke-dasharray",
        /*circularCircumference*/
        t[15]
      ), g(n, "stroke-dashoffset", i = /*isIndeterminate*/
      t[4] ? (
        /*circularCircumference*/
        t[15] * 0.75
      ) : (
        /*circularOffset*/
        t[8]
      )), g(n, "stroke-linecap", "round"), g(r, "class", li.progress__circular), g(r, "width", oi), g(r, "height", oi), g(r, "viewBox", "0 0 " + oi + " " + oi), g(r, "role", "progressbar"), g(
        r,
        "aria-valuenow",
        /*ariaValue*/
        t[6]
      ), g(r, "aria-valuemin", 0), g(r, "aria-valuemax", 100);
    },
    m(s, a) {
      K(s, r, a), jt(r, e), jt(r, n);
    },
    p(s, a) {
      a & /*trackThickness*/
      32 && g(
        e,
        "stroke-width",
        /*trackThickness*/
        s[5]
      ), a & /*isIndeterminate*/
      16 && o !== (o = bt("progress__circular-fill", li, {
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
      s && k(r);
    }
  };
}
function Ry(t) {
  let r, e, n;
  return {
    c() {
      r = Me("div"), e = Me("div"), this.h();
    },
    l(o) {
      r = ze(o, "DIV", {
        class: !0,
        style: !0,
        role: !0,
        "aria-valuenow": !0,
        "aria-valuemin": !0,
        "aria-valuemax": !0
      });
      var i = je(r);
      e = ze(i, "DIV", { class: !0, style: !0 }), je(e).forEach(k), i.forEach(k), this.h();
    },
    h() {
      g(e, "class", n = bt("progress__linear-fill", li, {
        indeterminate: (
          /*isIndeterminate*/
          t[4]
        )
      })), N(
        e,
        "width",
        /*isIndeterminate*/
        t[4] ? "30%" : (
          /*progressValue*/
          t[2] * 100 + "%"
        )
      ), g(r, "class", li.progress__linear), N(r, "height", me(
        /*trackThickness*/
        t[5]
      )), g(r, "role", "progressbar"), g(
        r,
        "aria-valuenow",
        /*ariaValue*/
        t[6]
      ), g(r, "aria-valuemin", 0), g(r, "aria-valuemax", 100);
    },
    m(o, i) {
      K(o, r, i), jt(r, e);
    },
    p(o, i) {
      i & /*isIndeterminate*/
      16 && n !== (n = bt("progress__linear-fill", li, {
        indeterminate: (
          /*isIndeterminate*/
          o[4]
        )
      })) && g(e, "class", n), i & /*isIndeterminate, progressValue*/
      20 && N(
        e,
        "width",
        /*isIndeterminate*/
        o[4] ? "30%" : (
          /*progressValue*/
          o[2] * 100 + "%"
        )
      ), i & /*trackThickness*/
      32 && N(r, "height", me(
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
      o && k(r);
    }
  };
}
function Hy(t) {
  let r;
  function e(i, s) {
    return (
      /*progressStyle*/
      i[3] === "linear" ? Ry : Ly
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Re();
    },
    l(i) {
      o.l(i), r = Re();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && k(r), o.d(i);
    }
  };
}
function Wy(t) {
  let r, e, n, o;
  const i = [By, Oy], s = [];
  function a(l, u) {
    return 0;
  }
  return ~(r = a()) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Re();
    },
    l(l) {
      e && e.l(l), n = Re();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, [u]) {
      e && e.p(l, u);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      oe(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
const oi = 48, ta = 20;
function Uy(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, p, m = j, h = () => (m(), m = V(u, (Te) => e(19, p = Te)), u), y, w = j, D = () => (w(), w = V(l, (Te) => e(20, y = Te)), l), z, O = j, $ = () => (O(), O = V(a, (Te) => e(21, z = Te)), a), ue, M = j, Y = () => (M(), M = V(s, (Te) => e(22, ue = Te)), s), se, C = j, I = () => (C(), C = V(i, (Te) => e(23, se = Te)), i), P, B = j, q = () => (B(), B = V(o, (Te) => e(24, P = Te)), o);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => w()), t.$$.on_destroy.push(() => O()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => C()), t.$$.on_destroy.push(() => B());
  let { componentContext: pe } = r, { layoutParams: _e = void 0 } = r;
  zr($r);
  let Ae = 0, be = "linear", Ie = !1, x = "#129386", Ye = "rgba(0, 0, 0, .1)", Qe = 4;
  function xe() {
    e(2, Ae = 0), e(3, be = "linear"), e(4, Ie = !1), e(16, x = "#129386"), e(17, Ye = "rgba(0, 0, 0, .1)"), e(5, Qe = 4);
  }
  const we = 2 * Math.PI * ta;
  return t.$$set = (Te) => {
    "componentContext" in Te && e(0, pe = Te.componentContext), "layoutParams" in Te && e(1, _e = Te.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty & /*componentContext*/
    1 && e(18, n = pe.origJson), t.$$.dirty & /*origJson*/
    262144 && n && xe(), t.$$.dirty & /*componentContext*/
    1 && q(e(14, o = pe.getDerivedFromVars(pe.json.value))), t.$$.dirty & /*componentContext*/
    1 && I(e(13, i = pe.getDerivedFromVars(pe.json.style))), t.$$.dirty & /*componentContext*/
    1 && Y(e(12, s = pe.getDerivedFromVars(pe.json.is_indeterminate))), t.$$.dirty & /*componentContext*/
    1 && $(e(11, a = pe.getDerivedFromVars(pe.json.active_color))), t.$$.dirty & /*componentContext*/
    1 && D(e(10, l = pe.getDerivedFromVars(pe.json.inactive_color))), t.$$.dirty & /*componentContext*/
    1 && h(e(9, u = pe.getDerivedFromVars(pe.json.track_thickness))), t.$$.dirty & /*$jsonValue, progressValue*/
    16777220 && e(2, Ae = typeof P == "number" ? Math.max(0, Math.min(1, P)) : Ae), t.$$.dirty & /*$jsonStyle, progressStyle*/
    8388616 && e(3, be = se === "linear" || se === "circular" ? se : be), t.$$.dirty & /*$jsonIsIndeterminate, isIndeterminate*/
    4194320 && e(4, Ie = en(ue, Ie)), t.$$.dirty & /*$jsonActiveColor, activeColor*/
    2162688 && e(16, x = pr(z, 1, x)), t.$$.dirty & /*$jsonInactiveColor, inactiveColor*/
    1179648 && e(17, Ye = pr(y, 1, Ye)), t.$$.dirty & /*$jsonTrackThickness, trackThickness*/
    524320 && e(5, Qe = typeof p == "number" && p >= 0 ? p : Qe), t.$$.dirty & /*progressValue*/
    4 && e(8, c = we * (1 - Ae)), t.$$.dirty & /*activeColor, inactiveColor*/
    196608 && e(7, f = {
      "--divkit-progress-active-color": x,
      "--divkit-progress-inactive-color": Ye
    }), t.$$.dirty & /*isIndeterminate, progressValue*/
    20 && e(6, _ = Ie ? void 0 : Math.round(Ae * 100));
  }, [
    pe,
    _e,
    Ae,
    be,
    Ie,
    Qe,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    we,
    x,
    Ye,
    n,
    p,
    y,
    z,
    ue,
    se,
    P
  ];
}
class Gy extends Wr {
  constructor(r) {
    super(), Hr(this, r, Uy, Wy, Tr, { componentContext: 0, layoutParams: 1 });
  }
}
const Jy = "appkit-table", qy = "appkit-table_halign_start", Ky = "appkit-table_halign_center", Yy = "appkit-table_halign_end", Xy = "appkit-table_valign_start", Zy = "appkit-table_valign_center", Qy = "appkit-table_valign_end", xy = "appkit-table__cell", $y = "appkit-table__cell_halign_left", ew = "appkit-table__cell_halign_start", tw = "appkit-table__cell_halign_center", rw = "appkit-table__cell_halign_right", nw = "appkit-table__cell_halign_end", ow = "appkit-table__cell_valign_top", iw = "appkit-table__cell_valign_center", sw = "appkit-table__cell_valign_bottom", lw = "appkit-table__cell_valign_baseline", aw = "appkit-table__separator", uw = "appkit-table__separator_row", cw = "appkit-table__separator_col", Zo = {
  table: Jy,
  table_halign_start: qy,
  table_halign_center: Ky,
  table_halign_end: Yy,
  table_valign_start: Xy,
  table_valign_center: Zy,
  table_valign_end: Qy,
  table__cell: xy,
  table__cell_halign_left: $y,
  table__cell_halign_start: ew,
  table__cell_halign_center: tw,
  table__cell_halign_right: rw,
  table__cell_halign_end: nw,
  table__cell_valign_top: ow,
  table__cell_valign_center: iw,
  table__cell_valign_bottom: sw,
  table__cell_valign_baseline: lw,
  table__separator: aw,
  table__separator_row: uw,
  table__separator_col: cw
};
function xc(t, r, e) {
  const n = t.slice();
  return n[35] = r[e], n;
}
function $c(t, r, e) {
  const n = t.slice();
  return n[38] = r[e], n;
}
function fw(t) {
  let r, e;
  return r = new Pn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function dw(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: bt(
        "table",
        Zo,
        /*mods*/
        t[7]
      ),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      style: (
        /*style*/
        t[6]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      parentOf: (
        /*items*/
        t[2]
      ),
      $$slots: { default: [_w] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      128 && (i.cls = bt(
        "table",
        Zo,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function ef(t) {
  var a, l, u, c, f, _, p, m;
  let r, e, n, o = `${/*placement*/
  ((l = (a = t[38].layoutParams.gridArea) == null ? void 0 : a.x) != null ? l : 0) + 1} / span ${/*placement*/
  (c = (u = t[38].layoutParams.gridArea) == null ? void 0 : u.colSpan) != null ? c : 1}`, i = `${/*placement*/
  ((_ = (f = t[38].layoutParams.gridArea) == null ? void 0 : f.y) != null ? _ : 0) + 1} / span ${/*placement*/
  (m = (p = t[38].layoutParams.gridArea) == null ? void 0 : p.rowSpan) != null ? m : 1}`, s;
  return e = new oo({
    props: {
      componentContext: (
        /*placement*/
        t[38].componentContext
      ),
      layoutParams: (
        /*placement*/
        t[38].layoutParams
      )
    }
  }), {
    c() {
      r = Me("div"), Jt(e.$$.fragment), this.h();
    },
    l(h) {
      r = ze(h, "DIV", { class: !0 });
      var y = je(r);
      Xt(e.$$.fragment, y), y.forEach(k), this.h();
    },
    h() {
      g(r, "class", n = bt("table__cell", Zo, {
        halign: (
          /*placement*/
          t[38].cellHAlign
        ),
        valign: (
          /*placement*/
          t[38].cellVAlign
        )
      })), N(r, "grid-column", o), N(r, "grid-row", i), N(
        r,
        "background",
        /*placement*/
        t[38].backgroundStyle || void 0
      );
    },
    m(h, y) {
      K(h, r, y), Ht(e, r, null), s = !0;
    },
    p(h, y) {
      var D, z, O, $, ue, M, Y, se;
      const w = {};
      y[0] & /*cellPlacements*/
      16 && (w.componentContext = /*placement*/
      h[38].componentContext), y[0] & /*cellPlacements*/
      16 && (w.layoutParams = /*placement*/
      h[38].layoutParams), e.$set(w), (!s || y[0] & /*cellPlacements*/
      16 && n !== (n = bt("table__cell", Zo, {
        halign: (
          /*placement*/
          h[38].cellHAlign
        ),
        valign: (
          /*placement*/
          h[38].cellVAlign
        )
      }))) && g(r, "class", n), y[0] & /*cellPlacements*/
      16 && o !== (o = `${/*placement*/
      ((z = (D = h[38].layoutParams.gridArea) == null ? void 0 : D.x) != null ? z : 0) + 1} / span ${/*placement*/
      ($ = (O = h[38].layoutParams.gridArea) == null ? void 0 : O.colSpan) != null ? $ : 1}`) && N(r, "grid-column", o), y[0] & /*cellPlacements*/
      16 && i !== (i = `${/*placement*/
      ((M = (ue = h[38].layoutParams.gridArea) == null ? void 0 : ue.y) != null ? M : 0) + 1} / span ${/*placement*/
      (se = (Y = h[38].layoutParams.gridArea) == null ? void 0 : Y.rowSpan) != null ? se : 1}`) && N(r, "grid-row", i), y[0] & /*cellPlacements*/
      16 && N(
        r,
        "background",
        /*placement*/
        h[38].backgroundStyle || void 0
      );
    },
    i(h) {
      s || (G(e.$$.fragment, h), s = !0);
    },
    o(h) {
      oe(e.$$.fragment, h), s = !1;
    },
    d(h) {
      h && k(r), Wt(e);
    }
  };
}
function tf(t) {
  let r, e, n, o;
  return {
    c() {
      r = Me("div"), e = Me("div"), o = gr(), this.h();
    },
    l(i) {
      r = ze(i, "DIV", { class: !0 });
      var s = je(r);
      e = ze(s, "DIV", { class: !0 }), je(e).forEach(k), o = mr(s), s.forEach(k), this.h();
    },
    h() {
      g(e, "class", n = /*sep*/
      t[35].width ? Zo.table__separator_col : Zo.table__separator_row), N(
        e,
        "background",
        /*sep*/
        t[35].background
      ), N(
        e,
        "height",
        /*sep*/
        t[35].height || void 0
      ), N(
        e,
        "width",
        /*sep*/
        t[35].width || void 0
      ), g(r, "class", Zo.table__separator), N(
        r,
        "grid-column",
        /*sep*/
        t[35].gridColumn
      ), N(
        r,
        "grid-row",
        /*sep*/
        t[35].gridRow
      ), N(
        r,
        "margin-top",
        /*sep*/
        t[35].marginTop || void 0
      ), N(
        r,
        "margin-bottom",
        /*sep*/
        t[35].marginBottom || void 0
      ), N(
        r,
        "margin-left",
        /*sep*/
        t[35].marginLeft || void 0
      ), N(
        r,
        "margin-right",
        /*sep*/
        t[35].marginRight || void 0
      );
    },
    m(i, s) {
      K(i, r, s), jt(r, e), jt(r, o);
    },
    p(i, s) {
      s[0] & /*separatorElements*/
      32 && n !== (n = /*sep*/
      i[35].width ? Zo.table__separator_col : Zo.table__separator_row) && g(e, "class", n), s[0] & /*separatorElements*/
      32 && N(
        e,
        "background",
        /*sep*/
        i[35].background
      ), s[0] & /*separatorElements*/
      32 && N(
        e,
        "height",
        /*sep*/
        i[35].height || void 0
      ), s[0] & /*separatorElements*/
      32 && N(
        e,
        "width",
        /*sep*/
        i[35].width || void 0
      ), s[0] & /*separatorElements*/
      32 && N(
        r,
        "grid-column",
        /*sep*/
        i[35].gridColumn
      ), s[0] & /*separatorElements*/
      32 && N(
        r,
        "grid-row",
        /*sep*/
        i[35].gridRow
      ), s[0] & /*separatorElements*/
      32 && N(
        r,
        "margin-top",
        /*sep*/
        i[35].marginTop || void 0
      ), s[0] & /*separatorElements*/
      32 && N(
        r,
        "margin-bottom",
        /*sep*/
        i[35].marginBottom || void 0
      ), s[0] & /*separatorElements*/
      32 && N(
        r,
        "margin-left",
        /*sep*/
        i[35].marginLeft || void 0
      ), s[0] & /*separatorElements*/
      32 && N(
        r,
        "margin-right",
        /*sep*/
        i[35].marginRight || void 0
      );
    },
    d(i) {
      i && k(r);
    }
  };
}
function _w(t) {
  let r, e, n, o = dr(
    /*cellPlacements*/
    t[4]
  ), i = [];
  for (let u = 0; u < o.length; u += 1)
    i[u] = ef($c(t, o, u));
  const s = (u) => oe(i[u], 1, 1, () => {
    i[u] = null;
  });
  let a = dr(
    /*separatorElements*/
    t[5]
  ), l = [];
  for (let u = 0; u < a.length; u += 1)
    l[u] = tf(xc(t, a, u));
  return {
    c() {
      for (let u = 0; u < i.length; u += 1)
        i[u].c();
      r = gr();
      for (let u = 0; u < l.length; u += 1)
        l[u].c();
      e = Re();
    },
    l(u) {
      for (let c = 0; c < i.length; c += 1)
        i[c].l(u);
      r = mr(u);
      for (let c = 0; c < l.length; c += 1)
        l[c].l(u);
      e = Re();
    },
    m(u, c) {
      for (let f = 0; f < i.length; f += 1)
        i[f] && i[f].m(u, c);
      K(u, r, c);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(u, c);
      K(u, e, c), n = !0;
    },
    p(u, c) {
      if (c[0] & /*cellPlacements*/
      16) {
        o = dr(
          /*cellPlacements*/
          u[4]
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const _ = $c(u, o, f);
          i[f] ? (i[f].p(_, c), G(i[f], 1)) : (i[f] = ef(_), i[f].c(), G(i[f], 1), i[f].m(r.parentNode, r));
        }
        for (br(), f = o.length; f < i.length; f += 1)
          s(f);
        yr();
      }
      if (c[0] & /*separatorElements*/
      32) {
        a = dr(
          /*separatorElements*/
          u[5]
        );
        let f;
        for (f = 0; f < a.length; f += 1) {
          const _ = xc(u, a, f);
          l[f] ? l[f].p(_, c) : (l[f] = tf(_), l[f].c(), l[f].m(e.parentNode, e));
        }
        for (; f < l.length; f += 1)
          l[f].d(1);
        l.length = a.length;
      }
    },
    i(u) {
      if (!n) {
        for (let c = 0; c < o.length; c += 1)
          G(i[c]);
        n = !0;
      }
    },
    o(u) {
      i = i.filter(Boolean);
      for (let c = 0; c < i.length; c += 1)
        oe(i[c]);
      n = !1;
    },
    d(u) {
      u && (k(r), k(e)), hn(i, u), hn(l, u);
    }
  };
}
function hw(t) {
  let r, e, n, o;
  const i = [dw, fw], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Re();
    },
    l(l) {
      e && e.l(l), n = Re();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (br(), oe(s[c], 1, 1, () => {
        s[c] = null;
      }), yr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      oe(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function pw(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, p, m, h = j, y = () => (h(), h = V(s, (fe) => e(22, m = fe)), s), w, D = j, z = () => (D(), D = V(i, (fe) => e(23, w = fe)), i), O, $ = j, ue = () => ($(), $ = V(a, (fe) => e(24, O = fe)), a), M, Y = j, se = () => (Y(), Y = V(l, (fe) => e(25, M = fe)), l);
  t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => $()), t.$$.on_destroy.push(() => Y());
  let { componentContext: C } = r, { layoutParams: I = void 0 } = r;
  const P = zr($r), B = P.direction;
  kn(t, B, (fe) => e(21, p = fe));
  let q = !1, pe = "start", _e = "start", Ae = [], be, Ie = [], x = [], Ye = "";
  function Qe() {
    e(3, q = !1), e(13, pe = "start"), e(14, _e = "start");
  }
  function xe(fe) {
    var ee, He;
    if (!fe || !fe.style) return null;
    let re = "#E0E0E0", ve = 1;
    const qe = fe.style;
    if (qe.type === "shape_drawable" && qe.shape) {
      const Oe = qe.shape;
      re = pr(Oe.background_color || qe.color || "#E0E0E0"), Oe.type === "rounded_rectangle" && (ve = Number(((ee = Oe.item_height) == null ? void 0 : ee.value) || ((He = Oe.item_width) == null ? void 0 : He.value) || 1));
    } else qe.color && (re = pr(qe.color));
    const Xe = fe.margins || {};
    return {
      color: re,
      thickness: ve,
      show_at_start: fe.show_at_start === 1 || fe.show_at_start === !0,
      show_between: fe.show_between !== 0 && fe.show_between !== !1,
      show_at_end: fe.show_at_end === 1 || fe.show_at_end === !0,
      marginTop: Number(Xe.top) || 0,
      marginBottom: Number(Xe.bottom) || 0,
      marginLeft: Number(Xe.left) || 0,
      marginRight: Number(Xe.right) || 0
    };
  }
  function we(fe, re) {
    const ve = fe.header_row;
    let qe = [];
    return fe.row_builder && Array.isArray(re) ? qe = kl(re, P, C, fe.row_builder).map((ee) => ee.div) : Array.isArray(fe.rows) && (qe = fe.rows), { rows: qe, headerRow: ve };
  }
  let Te = [];
  function ge(fe, re) {
    Te = [];
    for (let ve = 0; ve < fe; ve++)
      Te[ve] = new Array(re).fill(!1);
  }
  function ye(fe, re, ve, qe) {
    var Xe;
    for (let ee = fe; ee < fe + ve && ee < Te.length; ee++)
      for (let He = re; He < re + qe && He < (((Xe = Te[0]) == null ? void 0 : Xe.length) || 0); He++)
        Te[ee][He] = !0;
  }
  function he(fe, re) {
    var qe;
    if (fe >= Te.length) return re;
    let ve = re;
    for (; ve < (((qe = Te[0]) == null ? void 0 : qe.length) || 0) && Te[fe][ve]; )
      ve++;
    return ve;
  }
  function te(fe, re, ve, qe, Xe, ee, He, Oe, lt, _t) {
    const it = Array.isArray(fe.cells) ? fe.cells : [];
    let Et = 0;
    for (let at = 0; at < it.length; at++) {
      const zt = it[at];
      if (!zt || !zt.div) continue;
      const ht = Math.max(1, Number(zt.column_span) || 1), Z = Math.max(1, Number(zt.row_span) || 1);
      Et = he(re, Et), ye(re, Et, Z, ht);
      const de = Array.isArray(ve) && ve[Et], ct = zt.content_alignment_horizontal || de && de.content_alignment_horizontal || void 0, Be = zt.content_alignment_vertical || de && de.content_alignment_vertical || void 0;
      let T;
      const St = zt.background || qe;
      if (St && Array.isArray(St) && St.length > 0) {
        const Pt = St[0];
        Pt && Pt.type === "solid" && Pt.color && (T = pr(Pt.color));
      }
      const dt = lt.get(zt.div);
      let Ft;
      dt ? (_t.delete(dt), Ft = dt) : Ft = C.produceChildContext(zt.div, { path: `${ee}_${at}` }), He.push(Ft), Oe.push({
        componentContext: Ft,
        layoutParams: {
          gridArea: {
            x: Et,
            y: re,
            colSpan: ht,
            rowSpan: Z
          }
        },
        cellHAlign: ct,
        cellVAlign: Be,
        backgroundStyle: T
      }), Et += ht;
    }
  }
  return dn(() => {
    Ae.forEach((fe) => {
      fe.destroy();
    });
  }), t.$$set = (fe) => {
    "componentContext" in fe && e(0, C = fe.componentContext), "layoutParams" in fe && e(1, I = fe.layoutParams);
  }, t.$$.update = () => {
    var fe, re, ve;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(20, n = C.origJson), t.$$.dirty[0] & /*origJson*/
    1048576 && n && Qe(), t.$$.dirty[0] & /*componentContext*/
    1 && e(19, o = C.json.columns), t.$$.dirty[0] & /*componentContext*/
    1 && z(e(11, i = C.getDerivedFromVars(C.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && y(e(10, s = C.getDerivedFromVars(C.json.content_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && ue(e(9, a = C.getDerivedFromVars(C.json.striped))), t.$$.dirty[0] & /*componentContext*/
    1 && se(e(8, l = typeof ((fe = C.json.row_builder) == null ? void 0 : fe.data) == "string" ? C.getDerivedFromVars((re = C.json.row_builder) == null ? void 0 : re.data, void 0, !0) : (ve = C.json.row_builder) != null && ve.data ? Qo(C.json.row_builder.data) : void 0)), t.$$.dirty[0] & /*jsonColumns*/
    524288 && (!Array.isArray(o) || o.length === 0 ? e(3, q = !0) : e(3, q = !1)), t.$$.dirty[0] & /*jsonColumns*/
    524288 && e(17, u = Array.isArray(o) ? o.length : 0), t.$$.dirty[0] & /*jsonColumns*/
    524288)
      if (Array.isArray(o)) {
        const qe = [];
        for (let Xe = 0; Xe < o.length; Xe++) {
          const ee = o[Xe], He = ee == null ? void 0 : ee.width;
          if ((He == null ? void 0 : He.type) === "fixed" && He.value)
            qe.push(me(Number(He.value)));
          else if ((He == null ? void 0 : He.type) === "match_parent") {
            const Oe = Number(He.weight || 1);
            qe.push(`${Oe}fr`);
          } else
            qe.push("auto");
        }
        e(16, Ye = qe.join(" "));
      } else
        e(16, Ye = "");
    if (t.$$.dirty[0] & /*componentContext, $jsonRowBuilderData*/
    33554433 && e(18, c = we(C.json, M)), t.$$.dirty[0] & /*items, prevContext, componentContext, jsonColumns, allRows, columnCount, $jsonStriped*/
    17727493) {
      const qe = new Set(Ae), Xe = /* @__PURE__ */ new Map();
      be === C && Ae.forEach((T) => {
        Xe.set(T.json, T);
      });
      const ee = [], He = [], Oe = [];
      let lt = 0;
      const _t = C.json, it = Array.isArray(o) ? o : [], Et = !!(c.headerRow && Array.isArray(c.headerRow.cells)), at = c.rows.length, zt = (Et ? 1 : 0) + at;
      ge(zt + 10, u + 10);
      const ht = xe(_t.row_separator), Z = xe(_t.column_separator), de = xe(_t.header_separator);
      Et && (te(c.headerRow, lt, it, c.headerRow.background || _t.header_background, void 0, -1, ee, He, Xe, qe), lt++);
      const ct = c.rows;
      for (let T = 0; T < ct.length; T++) {
        const St = ct[T];
        if (!St || !Array.isArray(St.cells)) continue;
        let dt = St.background;
        !dt && O && (T % 2 === 0 ? dt = O.even_row_background : dt = O.odd_row_background), te(St, lt, it, dt, void 0, T, ee, He, Xe, qe), lt++;
      }
      const Be = lt;
      if (de && Et && at > 0 && Oe.push({
        gridColumn: `1 / span ${u}`,
        gridRow: "1 / span 1",
        background: de.color,
        height: me(de.thickness),
        marginTop: de.marginTop ? me(de.marginTop) : void 0,
        marginBottom: de.marginBottom ? me(de.marginBottom) : void 0,
        marginLeft: de.marginLeft ? me(de.marginLeft) : void 0,
        marginRight: de.marginRight ? me(de.marginRight) : void 0
      }), ht) {
        const T = Et ? 1 : 0;
        if (ht.show_at_start && at > 0 && Oe.push({
          gridColumn: `1 / span ${u}`,
          gridRow: `${T + 1} / span 1`,
          background: ht.color,
          height: me(ht.thickness),
          marginTop: ht.marginTop ? me(ht.marginTop) : void 0,
          marginBottom: ht.marginBottom ? me(ht.marginBottom) : void 0,
          marginLeft: ht.marginLeft ? me(ht.marginLeft) : void 0,
          marginRight: ht.marginRight ? me(ht.marginRight) : void 0
        }), ht.show_between)
          for (let St = T; St < Be - 1; St++)
            Oe.push({
              gridColumn: `1 / span ${u}`,
              gridRow: `${St + 1} / span 1`,
              background: ht.color,
              height: me(ht.thickness),
              marginTop: ht.marginTop ? me(ht.marginTop) : void 0,
              marginBottom: ht.marginBottom ? me(ht.marginBottom) : void 0,
              marginLeft: ht.marginLeft ? me(ht.marginLeft) : void 0,
              marginRight: ht.marginRight ? me(ht.marginRight) : void 0
            });
        ht.show_at_end && at > 0 && Oe.push({
          gridColumn: `1 / span ${u}`,
          gridRow: `${Be} / span 1`,
          background: ht.color,
          height: me(ht.thickness),
          marginTop: ht.marginTop ? me(ht.marginTop) : void 0,
          marginBottom: ht.marginBottom ? me(ht.marginBottom) : void 0,
          marginLeft: ht.marginLeft ? me(ht.marginLeft) : void 0,
          marginRight: ht.marginRight ? me(ht.marginRight) : void 0
        });
      }
      if (Z && u > 0) {
        if (Z.show_at_start && Oe.push({
          gridColumn: "1 / span 1",
          gridRow: `1 / span ${Be}`,
          background: Z.color,
          width: me(Z.thickness),
          marginTop: Z.marginTop ? me(Z.marginTop) : void 0,
          marginBottom: Z.marginBottom ? me(Z.marginBottom) : void 0,
          marginLeft: Z.marginLeft ? me(Z.marginLeft) : void 0,
          marginRight: Z.marginRight ? me(Z.marginRight) : void 0
        }), Z.show_between)
          for (let T = 0; T < u - 1; T++)
            Oe.push({
              gridColumn: `${T + 1} / span 1`,
              gridRow: `1 / span ${Be}`,
              background: Z.color,
              width: me(Z.thickness),
              marginTop: Z.marginTop ? me(Z.marginTop) : void 0,
              marginBottom: Z.marginBottom ? me(Z.marginBottom) : void 0,
              marginLeft: Z.marginLeft ? me(Z.marginLeft) : void 0,
              marginRight: Z.marginRight ? me(Z.marginRight) : void 0
            });
        Z.show_at_end && Oe.push({
          gridColumn: `${u} / span 1`,
          gridRow: `1 / span ${Be}`,
          background: Z.color,
          width: me(Z.thickness),
          marginTop: Z.marginTop ? me(Z.marginTop) : void 0,
          marginBottom: Z.marginBottom ? me(Z.marginBottom) : void 0,
          marginLeft: Z.marginLeft ? me(Z.marginLeft) : void 0,
          marginRight: Z.marginRight ? me(Z.marginRight) : void 0
        });
      }
      for (const T of qe)
        T.destroy();
      e(2, Ae = ee), e(4, Ie = He), e(5, x = Oe), e(15, be = C);
    }
    t.$$.dirty[0] & /*$jsonContentVAlign, contentVAlign*/
    8396800 && e(13, pe = vl(w, pe)), t.$$.dirty[0] & /*$jsonContentHAlign, $direction, contentHAlign*/
    6307840 && e(14, _e = wl(m, p, _e)), t.$$.dirty[0] & /*contentVAlign, contentHAlign*/
    24576 && e(7, f = {
      valign: pe,
      halign: _e
    }), t.$$.dirty[0] & /*gridTemplateColumns*/
    65536 && e(6, _ = {
      "grid-template-columns": Ye
    });
  }, [
    C,
    I,
    Ae,
    q,
    Ie,
    x,
    _,
    f,
    l,
    a,
    s,
    i,
    B,
    pe,
    _e,
    be,
    Ye,
    u,
    c,
    o,
    n,
    p,
    m,
    w,
    O,
    M
  ];
}
class gw extends Wr {
  constructor(r) {
    super(), Hr(this, r, pw, hw, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const mw = "appkit-counter", bw = "appkit-counter__container", yw = "appkit-counter__button", ww = "appkit-counter__value", vw = "appkit-counter_disabled", Li = {
  counter: mw,
  counter__container: bw,
  counter__button: yw,
  counter__value: ww,
  counter_disabled: vw
};
function kw(t) {
  let r, e;
  return r = new Pn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function jw(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: bt(
        "counter",
        Li,
        /*mods*/
        t[15]
      ),
      style: (
        /*stl*/
        t[14]
      ),
      customDescription: !0,
      customActions: "counter",
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: { default: [Ew] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      32768 && (i.cls = bt(
        "counter",
        Li,
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function Ew(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _, p, m, h, y;
  return {
    c() {
      r = Me("div"), e = Me("button"), n = tn("svg"), o = tn("line"), s = gr(), a = Me("div"), l = Bn(
        /*value*/
        t[17]
      ), u = gr(), c = Me("button"), f = tn("svg"), _ = tn("line"), p = tn("line"), this.h();
    },
    l(w) {
      r = ze(w, "DIV", { class: !0 });
      var D = je(r);
      e = ze(D, "BUTTON", { class: !0, "aria-label": !0 });
      var z = je(e);
      n = an(z, "svg", { viewBox: !0, fill: !0, xmlns: !0 });
      var O = je(n);
      o = an(O, "line", {
        x1: !0,
        y1: !0,
        x2: !0,
        y2: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0
      }), je(o).forEach(k), O.forEach(k), z.forEach(k), s = mr(D), a = ze(D, "DIV", { class: !0 });
      var $ = je(a);
      l = qn(
        $,
        /*value*/
        t[17]
      ), $.forEach(k), u = mr(D), c = ze(D, "BUTTON", { class: !0, "aria-label": !0 });
      var ue = je(c);
      f = an(ue, "svg", { viewBox: !0, fill: !0, xmlns: !0 });
      var M = je(f);
      _ = an(M, "line", {
        x1: !0,
        y1: !0,
        x2: !0,
        y2: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0
      }), je(_).forEach(k), p = an(M, "line", {
        x1: !0,
        y1: !0,
        x2: !0,
        y2: !0,
        stroke: !0,
        "stroke-width": !0,
        "stroke-linecap": !0
      }), je(p).forEach(k), M.forEach(k), ue.forEach(k), D.forEach(k), this.h();
    },
    h() {
      g(o, "x1", "6"), g(o, "y1", "12"), g(o, "x2", "18"), g(o, "y2", "12"), g(
        o,
        "stroke",
        /*iconColor*/
        t[6]
      ), g(o, "stroke-width", "2.5"), g(o, "stroke-linecap", "round"), g(n, "viewBox", "0 0 24 24"), g(n, "fill", "none"), g(n, "xmlns", "http://www.w3.org/2000/svg"), g(e, "class", Li.counter__button), e.disabled = i = !/*isEnabled*/
      t[3] || /*value*/
      t[17] <= /*minValue*/
      t[11], g(e, "aria-label", "Decrease value"), N(
        e,
        "background",
        /*value*/
        t[17] <= /*minValue*/
        t[11] ? (
          /*disabledButtonColor*/
          t[7]
        ) : (
          /*buttonColor*/
          t[4]
        )
      ), N(e, "width", me(
        /*buttonSize*/
        t[5]
      )), N(e, "height", me(
        /*buttonSize*/
        t[5]
      )), g(a, "class", Li.counter__value), N(a, "width", me(
        /*valueWidth*/
        t[10]
      )), N(
        a,
        "color",
        /*textColor*/
        t[8]
      ), N(a, "font-size", me(
        /*fontSize*/
        t[9]
      )), N(
        a,
        "font-weight",
        /*fontWeight*/
        t[13]
      ), g(_, "x1", "12"), g(_, "y1", "6"), g(_, "x2", "12"), g(_, "y2", "18"), g(
        _,
        "stroke",
        /*iconColor*/
        t[6]
      ), g(_, "stroke-width", "2.5"), g(_, "stroke-linecap", "round"), g(p, "x1", "6"), g(p, "y1", "12"), g(p, "x2", "18"), g(p, "y2", "12"), g(
        p,
        "stroke",
        /*iconColor*/
        t[6]
      ), g(p, "stroke-width", "2.5"), g(p, "stroke-linecap", "round"), g(f, "viewBox", "0 0 24 24"), g(f, "fill", "none"), g(f, "xmlns", "http://www.w3.org/2000/svg"), g(c, "class", Li.counter__button), c.disabled = m = !/*isEnabled*/
      t[3] || /*value*/
      t[17] >= /*maxValue*/
      t[12], g(c, "aria-label", "Increase value"), N(
        c,
        "background",
        /*value*/
        t[17] >= /*maxValue*/
        t[12] ? (
          /*disabledButtonColor*/
          t[7]
        ) : (
          /*buttonColor*/
          t[4]
        )
      ), N(c, "width", me(
        /*buttonSize*/
        t[5]
      )), N(c, "height", me(
        /*buttonSize*/
        t[5]
      )), g(r, "class", Li.counter__container);
    },
    m(w, D) {
      K(w, r, D), jt(r, e), jt(e, n), jt(n, o), jt(r, s), jt(r, a), jt(a, l), jt(r, u), jt(r, c), jt(c, f), jt(f, _), jt(f, p), h || (y = [
        et(
          e,
          "click",
          /*decrement*/
          t[36]
        ),
        et(
          c,
          "click",
          /*increment*/
          t[35]
        )
      ], h = !0);
    },
    p(w, D) {
      D[0] & /*iconColor*/
      64 && g(
        o,
        "stroke",
        /*iconColor*/
        w[6]
      ), D[0] & /*isEnabled, value, minValue*/
      133128 && i !== (i = !/*isEnabled*/
      w[3] || /*value*/
      w[17] <= /*minValue*/
      w[11]) && (e.disabled = i), D[0] & /*value, minValue, disabledButtonColor, buttonColor*/
      133264 && N(
        e,
        "background",
        /*value*/
        w[17] <= /*minValue*/
        w[11] ? (
          /*disabledButtonColor*/
          w[7]
        ) : (
          /*buttonColor*/
          w[4]
        )
      ), D[0] & /*buttonSize*/
      32 && N(e, "width", me(
        /*buttonSize*/
        w[5]
      )), D[0] & /*buttonSize*/
      32 && N(e, "height", me(
        /*buttonSize*/
        w[5]
      )), D[0] & /*value*/
      131072 && Qn(
        l,
        /*value*/
        w[17]
      ), D[0] & /*valueWidth*/
      1024 && N(a, "width", me(
        /*valueWidth*/
        w[10]
      )), D[0] & /*textColor*/
      256 && N(
        a,
        "color",
        /*textColor*/
        w[8]
      ), D[0] & /*fontSize*/
      512 && N(a, "font-size", me(
        /*fontSize*/
        w[9]
      )), D[0] & /*fontWeight*/
      8192 && N(
        a,
        "font-weight",
        /*fontWeight*/
        w[13]
      ), D[0] & /*iconColor*/
      64 && g(
        _,
        "stroke",
        /*iconColor*/
        w[6]
      ), D[0] & /*iconColor*/
      64 && g(
        p,
        "stroke",
        /*iconColor*/
        w[6]
      ), D[0] & /*isEnabled, value, maxValue*/
      135176 && m !== (m = !/*isEnabled*/
      w[3] || /*value*/
      w[17] >= /*maxValue*/
      w[12]) && (c.disabled = m), D[0] & /*value, maxValue, disabledButtonColor, buttonColor*/
      135312 && N(
        c,
        "background",
        /*value*/
        w[17] >= /*maxValue*/
        w[12] ? (
          /*disabledButtonColor*/
          w[7]
        ) : (
          /*buttonColor*/
          w[4]
        )
      ), D[0] & /*buttonSize*/
      32 && N(c, "width", me(
        /*buttonSize*/
        w[5]
      )), D[0] & /*buttonSize*/
      32 && N(c, "height", me(
        /*buttonSize*/
        w[5]
      ));
    },
    d(w) {
      w && k(r), h = !1, Gr(y);
    }
  };
}
function Cw(t) {
  let r, e, n, o;
  const i = [jw, kw], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[2] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Re();
    },
    l(l) {
      e && e.l(l), n = Re();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (br(), oe(s[c], 1, 1, () => {
        s[c] = null;
      }), yr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      oe(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function Aw(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, p, m, h, y, w, D, z, O, $, ue, M, Y, se, C, I = j, P = () => (I(), I = V(i, (ft) => e(46, C = ft)), i), B, q = j, pe = () => (q(), q = V(ue, (ft) => e(47, B = ft)), ue), _e, Ae = j, be = () => (Ae(), Ae = V($, (ft) => e(48, _e = ft)), $), Ie, x = j, Ye = () => (x(), x = V(O, (ft) => e(49, Ie = ft)), O), Qe, xe = j, we = () => (xe(), xe = V(z, (ft) => e(50, Qe = ft)), z), Te, ge = j, ye = () => (ge(), ge = V(D, (ft) => e(51, Te = ft)), D), he, te = j, fe = () => (te(), te = V(w, (ft) => e(52, he = ft)), w), re, ve = j, qe = () => (ve(), ve = V(y, (ft) => e(53, re = ft)), y), Xe, ee = j, He = () => (ee(), ee = V(h, (ft) => e(54, Xe = ft)), h), Oe, lt = j, _t = () => (lt(), lt = V(m, (ft) => e(55, Oe = ft)), m), it, Et = j, at = () => (Et(), Et = V(p, (ft) => e(56, it = ft)), p), zt, ht = j, Z = () => (ht(), ht = V(_, (ft) => e(57, zt = ft)), _), de, ct = j, Be = () => (ct(), ct = V(f, (ft) => e(58, de = ft)), f), T, St = j, dt = () => (St(), St = V(c, (ft) => e(59, T = ft)), c), Ft, Pt = j, st = () => (Pt(), Pt = V(u, (ft) => e(60, Ft = ft)), u), Q, Dt = j, Ot = () => (Dt(), Dt = V(l, (ft) => e(61, Q = ft)), l), nr, er = j, Ve = () => (er(), er = V(a, (ft) => e(62, nr = ft)), a), Ge, yt = j, Pe = () => (yt(), yt = V(s, (ft) => e(63, Ge = ft)), s);
  t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => q()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => x()), t.$$.on_destroy.push(() => xe()), t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => te()), t.$$.on_destroy.push(() => ve()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => lt()), t.$$.on_destroy.push(() => Et()), t.$$.on_destroy.push(() => ht()), t.$$.on_destroy.push(() => ct()), t.$$.on_destroy.push(() => St()), t.$$.on_destroy.push(() => Pt()), t.$$.on_destroy.push(() => Dt()), t.$$.on_destroy.push(() => er()), t.$$.on_destroy.push(() => yt());
  let { componentContext: tt } = r, { layoutParams: Le = void 0 } = r;
  const Tt = zr($r), We = zr(Bo);
  let vt = !1, qt = !0, Nt = "#4CAF50", ar = 36, Fe = "#ffffff", At = "#cccccc", ur = "#1B2630", sr = 16, lr = 700, hr = 40, Er = "#F5F5F5", Bt = "#E0E0E0", kr = 1, Ut = 999, wt = 6, or = 0, le = 99, Cr = 1;
  const Ar = {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700
  };
  function Vt() {
    e(3, qt = !0), e(4, Nt = "#4CAF50"), e(5, ar = 36), e(6, Fe = "#ffffff"), e(7, At = "#cccccc"), e(8, ur = "#1B2630"), e(9, sr = 16), e(13, lr = 700), e(10, hr = 40), e(37, Er = "#F5F5F5"), e(38, Bt = "#E0E0E0"), e(39, kr = 1), e(40, Ut = 999), e(41, wt = 6), e(11, or = 0), e(12, le = 99), e(42, Cr = 1);
  }
  function Pr() {
    if (!qt) return;
    const ft = Math.min(M + Cr, le);
    ft !== M && (i.setValue(ft), tt.json.on_increment_actions && tt.execAnyActions(tt.json.on_increment_actions), tt.json.on_value_change_actions && tt.execAnyActions(tt.json.on_value_change_actions));
  }
  function Ur() {
    if (!qt) return;
    const ft = Math.max(M - Cr, or);
    ft !== M && (i.setValue(ft), tt.json.on_decrement_actions && tt.execAnyActions(tt.json.on_decrement_actions), tt.json.on_value_change_actions && tt.execAnyActions(tt.json.on_value_change_actions));
  }
  let fr;
  return dn(() => {
    fr && (Tt.unregisterFocusable(fr), e(43, fr = void 0));
  }), t.$$set = (ft) => {
    "componentContext" in ft && e(0, tt = ft.componentContext), "layoutParams" in ft && e(1, Le = ft.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(45, n = tt.origJson), t.$$.dirty[1] & /*origJson*/
    16384 && n && Vt(), t.$$.dirty[0] & /*componentContext*/
    1 && e(44, o = tt.json.counter_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    8192 && P(e(16, i = o && (tt.getVariable(o, "integer") || Tt.awaitGlobalVariable(o, "integer", 0)) || eo("temp", "integer", 0))), t.$$.dirty[0] & /*componentContext*/
    1 && Pe(e(34, s = tt.getDerivedFromVars(tt.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Ve(e(33, a = tt.getDerivedFromVars(tt.json.button_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ot(e(32, l = tt.getDerivedFromVars(tt.json.button_size))), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(31, u = tt.getDerivedFromVars(tt.json.icon_color))), t.$$.dirty[0] & /*componentContext*/
    1 && dt(e(30, c = tt.getDerivedFromVars(tt.json.disabled_button_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Be(e(29, f = tt.getDerivedFromVars(tt.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Z(e(28, _ = tt.getDerivedFromVars(tt.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && at(e(27, p = tt.getDerivedFromVars(tt.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && _t(e(26, m = tt.getDerivedFromVars(tt.json.value_width))), t.$$.dirty[0] & /*componentContext*/
    1 && He(e(25, h = tt.getDerivedFromVars(tt.json.background_color))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(24, y = tt.getDerivedFromVars(tt.json.border_color))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(23, w = tt.getDerivedFromVars(tt.json.border_width))), t.$$.dirty[0] & /*componentContext*/
    1 && ye(e(22, D = tt.getDerivedFromVars(tt.json.corner_radius))), t.$$.dirty[0] & /*componentContext*/
    1 && we(e(21, z = tt.getDerivedFromVars(tt.json.padding))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(20, O = tt.getDerivedFromVars(tt.json.min_value))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(19, $ = tt.getDerivedFromVars(tt.json.max_value))), t.$$.dirty[0] & /*componentContext*/
    1 && pe(e(18, ue = tt.getDerivedFromVars(tt.json.step))), t.$$.dirty[0] & /*isEnabled*/
    8 | t.$$.dirty[2] & /*$jsonIsEnabled*/
    2 && e(3, qt = en(Ge, qt)), t.$$.dirty[0] & /*buttonColor*/
    16 | t.$$.dirty[2] & /*$jsonButtonColor*/
    1 && e(4, Nt = pr(nr, 1, Nt)), t.$$.dirty[0] & /*buttonSize*/
    32 | t.$$.dirty[1] & /*$jsonButtonSize*/
    1073741824 && e(5, ar = fo(Q, ar)), t.$$.dirty[0] & /*iconColor*/
    64 | t.$$.dirty[1] & /*$jsonIconColor*/
    536870912 && e(6, Fe = pr(Ft, 1, Fe)), t.$$.dirty[0] & /*disabledButtonColor*/
    128 | t.$$.dirty[1] & /*$jsonDisabledButtonColor*/
    268435456 && e(7, At = pr(T, 1, At)), t.$$.dirty[0] & /*textColor*/
    256 | t.$$.dirty[1] & /*$jsonTextColor*/
    134217728 && e(8, ur = pr(de, 1, ur)), t.$$.dirty[0] & /*fontSize*/
    512 | t.$$.dirty[1] & /*$jsonFontSize*/
    67108864 && e(9, sr = fo(zt, sr)), t.$$.dirty[1] & /*$jsonFontWeight*/
    33554432) {
      const ft = it;
      if (typeof ft == "string")
        if (ft in Ar)
          e(13, lr = Ar[ft]);
        else {
          const It = parseInt(ft, 10);
          !Number.isNaN(It) && It > 0 && e(13, lr = It);
        }
      else typeof ft == "number" && ft > 0 && e(13, lr = ft);
    }
    if (t.$$.dirty[0] & /*valueWidth*/
    1024 | t.$$.dirty[1] & /*$jsonValueWidth*/
    16777216 && e(10, hr = fo(Oe, hr)), t.$$.dirty[1] & /*$jsonBackgroundColor, backgroundColor*/
    8388672 && e(37, Er = pr(Xe, 1, Er)), t.$$.dirty[1] & /*$jsonBorderColor, borderColor*/
    4194432 && e(38, Bt = pr(re, 1, Bt)), t.$$.dirty[1] & /*$jsonBorderWidth, borderWidth*/
    2097408 && e(39, kr = fo(he, kr)), t.$$.dirty[1] & /*$jsonCornerRadius, cornerRadius*/
    1049088 && e(40, Ut = fo(Te, Ut)), t.$$.dirty[1] & /*$jsonPadding, padding*/
    525312 && e(41, wt = fo(Qe, wt)), t.$$.dirty[0] & /*minValue, maxValue*/
    6144 | t.$$.dirty[1] & /*$jsonMinValue, $jsonMaxValue*/
    393216 && (e(11, or = fo(Ie, or)), e(12, le = fo(_e, le))), t.$$.dirty[1] & /*$jsonStep, step*/
    67584) {
      const ft = fo(B, Cr);
      ft > 0 && e(42, Cr = ft);
    }
    if (t.$$.dirty[0] & /*minValue, maxValue*/
    6144 | t.$$.dirty[1] & /*$valueVariable*/
    32768 && e(17, M = No(C || 0, or, le)), t.$$.dirty[0] & /*componentContext, hasError*/
    5 | t.$$.dirty[1] & /*variable*/
    8192) {
      let ft = !1;
      o ? We.hasAction() && (ft = !0, tt.logError(X(new Error('Cannot show "counter" inside component with an action')))) : (ft = !0, tt.logError(X(new Error('Missing "counter_value_variable" in "counter"')))), vt !== ft && e(2, vt = ft);
    }
    t.$$.dirty[0] & /*isEnabled*/
    8 && e(15, Y = { disabled: !qt }), t.$$.dirty[0] & /*iconColor*/
    64 | t.$$.dirty[1] & /*backgroundColor, borderColor, borderWidth, cornerRadius, padding*/
    1984 && e(14, se = {
      "--divkit-counter-bg": Er,
      "--divkit-counter-border-color": Bt,
      "--divkit-counter-border-width": me(kr),
      "--divkit-counter-radius": me(Ut),
      "--divkit-counter-padding": me(wt),
      "--divkit-counter-icon-color": Fe
    }), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*prevId*/
    4096 && tt.json && (fr && (Tt.unregisterFocusable(fr), e(43, fr = void 0)), tt.id && !tt.fakeElement && (e(43, fr = tt.id), Tt.registerFocusable(fr, {
      focus() {
      }
    })));
  }, [
    tt,
    Le,
    vt,
    qt,
    Nt,
    ar,
    Fe,
    At,
    ur,
    sr,
    hr,
    or,
    le,
    lr,
    se,
    Y,
    i,
    M,
    ue,
    $,
    O,
    z,
    D,
    w,
    y,
    h,
    m,
    p,
    _,
    f,
    c,
    u,
    l,
    a,
    s,
    Pr,
    Ur,
    Er,
    Bt,
    kr,
    Ut,
    wt,
    Cr,
    fr,
    o,
    n,
    C,
    B,
    _e,
    Ie,
    Qe,
    Te,
    he,
    re,
    Xe,
    Oe,
    it,
    zt,
    de,
    T,
    Ft,
    Q,
    nr,
    Ge
  ];
}
class Vw extends Wr {
  constructor(r) {
    super(), Hr(this, r, Aw, Cw, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const Sw = "appkit-webview__frame", nl = {
  webview__frame: Sw,
  "webview__aspect-wrapper": "appkit-webview__aspect-wrapper"
};
function Dw(t) {
  let r, e;
  return r = new Pn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function Iw(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: bt("webview", nl, {}),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      heightByAspect: (
        /*aspectPaddingBottom*/
        t[6] !== "0"
      ),
      $$slots: { default: [Mw] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function Fw(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Me("iframe"), this.h();
    },
    l(a) {
      r = ze(a, "IFRAME", {
        class: !0,
        src: !0,
        srcdoc: !0,
        sandbox: !0,
        scrolling: !0,
        title: !0
      }), je(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", nl.webview__frame), to(r.src, e = /*url*/
      t[2] || void 0) || g(r, "src", e), g(r, "srcdoc", n = /*url*/
      t[2] ? void 0 : (
        /*html*/
        t[3]
      )), g(
        r,
        "sandbox",
        /*sandbox*/
        t[7]
      ), g(r, "scrolling", o = /*allowScrolling*/
      t[4] ? "auto" : "no"), g(r, "title", "webview");
    },
    m(a, l) {
      K(a, r, l), i || (s = [
        et(
          r,
          "load",
          /*onLoad*/
          t[15]
        ),
        et(
          r,
          "error",
          /*onError*/
          t[16]
        )
      ], i = !0);
    },
    p(a, l) {
      l & /*url*/
      4 && !to(r.src, e = /*url*/
      a[2] || void 0) && g(r, "src", e), l & /*url, html*/
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
      a && k(r), i = !1, Gr(s);
    }
  };
}
function Tw(t) {
  let r, e, n, o, i, s = `${/*aspectPaddingBottom*/
  t[6]}%`, a, l;
  return {
    c() {
      r = Me("div"), e = Me("iframe"), this.h();
    },
    l(u) {
      r = ze(u, "DIV", { class: !0 });
      var c = je(r);
      e = ze(c, "IFRAME", {
        class: !0,
        src: !0,
        srcdoc: !0,
        sandbox: !0,
        scrolling: !0,
        title: !0
      }), je(e).forEach(k), c.forEach(k), this.h();
    },
    h() {
      g(e, "class", nl.webview__frame), to(e.src, n = /*url*/
      t[2] || void 0) || g(e, "src", n), g(e, "srcdoc", o = /*url*/
      t[2] ? void 0 : (
        /*html*/
        t[3]
      )), g(
        e,
        "sandbox",
        /*sandbox*/
        t[7]
      ), g(e, "scrolling", i = /*allowScrolling*/
      t[4] ? "auto" : "no"), g(e, "title", "webview"), g(r, "class", nl["webview__aspect-wrapper"]), N(r, "padding-bottom", s);
    },
    m(u, c) {
      K(u, r, c), jt(r, e), a || (l = [
        et(
          e,
          "load",
          /*onLoad*/
          t[15]
        ),
        et(
          e,
          "error",
          /*onError*/
          t[16]
        )
      ], a = !0);
    },
    p(u, c) {
      c & /*url*/
      4 && !to(e.src, n = /*url*/
      u[2] || void 0) && g(e, "src", n), c & /*url, html*/
      12 && o !== (o = /*url*/
      u[2] ? void 0 : (
        /*html*/
        u[3]
      )) && g(e, "srcdoc", o), c & /*sandbox*/
      128 && g(
        e,
        "sandbox",
        /*sandbox*/
        u[7]
      ), c & /*allowScrolling*/
      16 && i !== (i = /*allowScrolling*/
      u[4] ? "auto" : "no") && g(e, "scrolling", i), c & /*aspectPaddingBottom*/
      64 && s !== (s = `${/*aspectPaddingBottom*/
      u[6]}%`) && N(r, "padding-bottom", s);
    },
    d(u) {
      u && k(r), a = !1, Gr(l);
    }
  };
}
function Mw(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[6] !== "0" ? Tw : Fw
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Re();
    },
    l(i) {
      o.l(i), r = Re();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && k(r), o.d(i);
    }
  };
}
function Pw(t) {
  let r, e, n, o;
  const i = [Iw, Dw], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[5] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Re();
    },
    l(l) {
      e && e.l(l), n = Re();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, [u]) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (br(), oe(s[c], 1, 1, () => {
        s[c] = null;
      }), yr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      oe(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function Nw(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _ = j, p = () => (_(), _ = V(u, (he) => e(20, f = he)), u), m, h = j, y = () => (h(), h = V(l, (he) => e(21, m = he)), l), w, D = j, z = () => (D(), D = V(a, (he) => e(22, w = he)), a), O, $ = j, ue = () => ($(), $ = V(s, (he) => e(23, O = he)), s), M, Y = j, se = () => (Y(), Y = V(i, (he) => e(24, M = he)), i), C, I = j, P = () => (I(), I = V(o, (he) => e(25, C = he)), o), B, q = j, pe = () => (q(), q = V(n, (he) => e(26, B = he)), n);
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => $()), t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => I()), t.$$.on_destroy.push(() => q());
  let { componentContext: _e } = r, { layoutParams: Ae = void 0 } = r;
  zr($r);
  let be = !1, Ie, x, Ye = !1, Qe = !0, xe = !1, we = !1, Te = "0";
  function ge() {
    _e.execAnyActions(_e.json.on_load_actions);
  }
  function ye() {
    _e.execAnyActions(_e.json.on_error_actions);
  }
  return t.$$set = (he) => {
    "componentContext" in he && e(0, _e = he.componentContext), "layoutParams" in he && e(1, Ae = he.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*componentContext*/
    1 && pe(e(14, n = _e.getDerivedFromVars(_e.json.url))), t.$$.dirty & /*componentContext*/
    1 && P(e(13, o = _e.getDerivedFromVars(_e.json.html))), t.$$.dirty & /*componentContext*/
    1 && se(e(12, i = _e.getDerivedFromVars(_e.json.javascript_enabled))), t.$$.dirty & /*componentContext*/
    1 && ue(e(11, s = _e.getDerivedFromVars(_e.json.allow_scrolling))), t.$$.dirty & /*componentContext*/
    1 && z(e(10, a = _e.getDerivedFromVars(_e.json.allow_navigation))), t.$$.dirty & /*componentContext*/
    1 && y(e(9, l = _e.getDerivedFromVars(_e.json.scale_to_fit))), t.$$.dirty & /*componentContext*/
    1 && p(e(8, u = _e.getDerivedFromVars(_e.json.aspect))), t.$$.dirty & /*$jsonUrl, $jsonHtml, url, html, componentContext*/
    100663309 && (e(2, Ie = typeof B == "string" ? B : void 0), e(3, x = typeof C == "string" ? C : void 0), !Ie && !x ? (e(5, be = !0), _e.logError(X(new Error('Missing "url" or "html" in "webview"')))) : e(5, be = !1)), t.$$.dirty & /*$jsonJsEnabled, javascriptEnabled*/
    16908288 && e(17, Ye = en(M, Ye)), t.$$.dirty & /*$jsonAllowScrolling, allowScrolling*/
    8388624 && e(4, Qe = en(O, Qe)), t.$$.dirty & /*$jsonAllowNavigation, allowNavigation*/
    4456448 && e(18, xe = en(w, xe)), t.$$.dirty & /*$jsonScaleToFit, scaleToFit*/
    2621440 && e(19, we = en(m, we)), t.$$.dirty & /*$jsonAspect*/
    1048576) {
      const he = f == null ? void 0 : f.ratio;
      he && On(he) ? e(6, Te = (100 / Number(he)).toFixed(2)) : e(6, Te = "0");
    }
    t.$$.dirty & /*javascriptEnabled, allowNavigation*/
    393216 && e(7, c = [
      "allow-same-origin",
      ...Ye ? ["allow-scripts"] : [],
      ...xe ? ["allow-popups"] : []
    ].join(" "));
  }, [
    _e,
    Ae,
    Ie,
    x,
    Qe,
    be,
    Te,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    n,
    ge,
    ye,
    Ye,
    xe,
    we,
    f,
    m,
    w,
    O,
    M,
    C,
    B
  ];
}
class zw extends Wr {
  constructor(r) {
    super(), Hr(this, r, Nw, Pw, Tr, { componentContext: 0, layoutParams: 1 });
  }
}
const ol = {
  "google-map__frame": "appkit-google-map__frame",
  "google-map__aspect-wrapper": "appkit-google-map__aspect-wrapper"
};
function Ow(t) {
  let r, e;
  return r = new Pn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function Bw(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: bt("google-map", ol, {}),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      heightByAspect: (
        /*aspectPaddingBottom*/
        t[3] !== "0"
      ),
      $$slots: { default: [Hw] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function Lw(t) {
  let r;
  return {
    c() {
      r = Me("iframe"), this.h();
    },
    l(e) {
      r = ze(e, "IFRAME", {
        class: !0,
        srcdoc: !0,
        title: !0,
        sandbox: !0
      }), je(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", ol["google-map__frame"]), g(
        r,
        "srcdoc",
        /*iframeDoc*/
        t[4]
      ), g(r, "title", "Google Map"), g(r, "sandbox", "allow-scripts allow-same-origin");
    },
    m(e, n) {
      K(e, r, n), t[35](r);
    },
    p(e, n) {
      n[0] & /*iframeDoc*/
      16 && g(
        r,
        "srcdoc",
        /*iframeDoc*/
        e[4]
      );
    },
    d(e) {
      e && k(r), t[35](null);
    }
  };
}
function Rw(t) {
  let r, e, n = `${/*aspectPaddingBottom*/
  t[3]}%`;
  return {
    c() {
      r = Me("div"), e = Me("iframe"), this.h();
    },
    l(o) {
      r = ze(o, "DIV", { class: !0 });
      var i = je(r);
      e = ze(i, "IFRAME", {
        class: !0,
        srcdoc: !0,
        title: !0,
        sandbox: !0
      }), je(e).forEach(k), i.forEach(k), this.h();
    },
    h() {
      g(e, "class", ol["google-map__frame"]), g(
        e,
        "srcdoc",
        /*iframeDoc*/
        t[4]
      ), g(e, "title", "Google Map"), g(e, "sandbox", "allow-scripts allow-same-origin"), g(r, "class", ol["google-map__aspect-wrapper"]), N(r, "padding-bottom", n);
    },
    m(o, i) {
      K(o, r, i), jt(r, e), t[34](e);
    },
    p(o, i) {
      i[0] & /*iframeDoc*/
      16 && g(
        e,
        "srcdoc",
        /*iframeDoc*/
        o[4]
      ), i[0] & /*aspectPaddingBottom*/
      8 && n !== (n = `${/*aspectPaddingBottom*/
      o[3]}%`) && N(r, "padding-bottom", n);
    },
    d(o) {
      o && k(r), t[34](null);
    }
  };
}
function Hw(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[3] !== "0" ? Rw : Lw
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Re();
    },
    l(i) {
      o.l(i), r = Re();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && k(r), o.d(i);
    }
  };
}
function Ww(t) {
  let r, e, n, o;
  const i = [Bw, Ow], s = [];
  function a(l, u) {
    return !/*hasError*/
    l[2] && /*iframeDoc*/
    l[4] ? 0 : -1;
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Re();
    },
    l(l) {
      e && e.l(l), n = Re();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (br(), oe(s[c], 1, 1, () => {
        s[c] = null;
      }), yr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      oe(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function ra(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function Uw(t) {
  switch (t) {
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
function Gw(t) {
  return t.map((r, e) => {
    const n = Number(r.latitude) || 0, o = Number(r.longitude) || 0, i = r.title ? ra(String(r.title)) : "", s = r.color ? String(r.color) : "", a = r.on_click_actions && r.on_click_actions.length > 0;
    let l = "";
    s && (l = `,icon:{path:google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,fillColor:'${ra(s)}',fillOpacity:1,strokeColor:'#333',strokeWeight:1,scale:6,anchor:new google.maps.Point(0,0)}`);
    const u = a ? `m.addListener('click',function(){window.parent.postMessage({type:'marker_click',index:${e}},'*');});` : "";
    return `(function(){var m=new google.maps.Marker({position:{lat:${n},lng:${o}},map:map,title:'${i}'${l}});${u}})();`;
  }).join(`
`);
}
function Jw(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, p, m = j, h = () => (m(), m = V(_, (Z) => e(24, p = Z)), _), y, w = j, D = () => (w(), w = V(l, (Z) => e(25, y = Z)), l), z, O = j, $ = () => (O(), O = V(a, (Z) => e(26, z = Z)), a), ue, M = j, Y = () => (M(), M = V(f, (Z) => e(27, ue = Z)), f), se, C = j, I = () => (C(), C = V(u, (Z) => e(28, se = Z)), u), P, B = j, q = () => (B(), B = V(c, (Z) => e(29, P = Z)), c), pe, _e = j, Ae = () => (_e(), _e = V(s, (Z) => e(30, pe = Z)), s), be, Ie = j, x = () => (Ie(), Ie = V(i, (Z) => e(31, be = Z)), i), Ye, Qe = j, xe = () => (Qe(), Qe = V(o, (Z) => e(32, Ye = Z)), o), we, Te = j, ge = () => (Te(), Te = V(n, (Z) => e(33, we = Z)), n);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => w()), t.$$.on_destroy.push(() => O()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => C()), t.$$.on_destroy.push(() => B()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => Ie()), t.$$.on_destroy.push(() => Qe()), t.$$.on_destroy.push(() => Te());
  let { componentContext: ye } = r, { layoutParams: he = void 0 } = r;
  zr($r);
  let te = !1, fe = "0", re = 0, ve = 0, qe = 10, Xe = "normal", ee = !0, He = !0, Oe, lt = [], _t = "", it, Et = !1;
  function at(Z) {
    if (!it || Z.source !== it.contentWindow) return;
    const de = Z.data;
    if (!(!de || typeof de != "object")) {
      if (de.type === "map_ready" && !Et)
        Et = !0, ye.execAnyActions(ye.json.on_ready_actions);
      else if (de.type === "map_error")
        ye.execAnyActions(ye.json.on_error_actions);
      else if (de.type === "marker_click" && typeof de.index == "number") {
        const ct = lt[de.index];
        ct != null && ct.on_click_actions && ye.execAnyActions(ct.on_click_actions);
      }
    }
  }
  no(() => {
    window.addEventListener("message", at);
  }), dn(() => {
    window.removeEventListener("message", at);
  });
  function zt(Z) {
    Mr[Z ? "unshift" : "push"](() => {
      it = Z, e(5, it);
    });
  }
  function ht(Z) {
    Mr[Z ? "unshift" : "push"](() => {
      it = Z, e(5, it);
    });
  }
  return t.$$set = (Z) => {
    "componentContext" in Z && e(0, ye = Z.componentContext), "layoutParams" in Z && e(1, he = Z.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && ge(e(15, n = ye.getDerivedFromVars(ye.json.latitude))), t.$$.dirty[0] & /*componentContext*/
    1 && xe(e(14, o = ye.getDerivedFromVars(ye.json.longitude))), t.$$.dirty[0] & /*componentContext*/
    1 && x(e(13, i = ye.getDerivedFromVars(ye.json.zoom))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(12, s = ye.getDerivedFromVars(ye.json.map_type))), t.$$.dirty[0] & /*componentContext*/
    1 && $(e(11, a = ye.getDerivedFromVars(ye.json.allow_zoom))), t.$$.dirty[0] & /*componentContext*/
    1 && D(e(10, l = ye.getDerivedFromVars(ye.json.allow_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && I(e(9, u = ye.getDerivedFromVars(ye.json.api_key))), t.$$.dirty[0] & /*componentContext*/
    1 && q(e(8, c = ye.getDerivedFromVars(ye.json.api_key_web))), t.$$.dirty[0] & /*componentContext*/
    1 && Y(e(7, f = ye.getDerivedFromVars(ye.json.markers))), t.$$.dirty[0] & /*componentContext*/
    1 && h(e(6, _ = ye.getDerivedFromVars(ye.json.aspect))), t.$$.dirty[0] & /*$jsonMapType, $jsonApiKeyWeb, $jsonApiKey, $jsonMarkers, resolvedApiKey, componentContext*/
    2017460225 | t.$$.dirty[1] & /*$jsonLatitude, $jsonLongitude, $jsonZoom*/
    7) {
      e(16, re = typeof we == "number" ? we : 0), e(17, ve = typeof Ye == "number" ? Ye : 0), e(18, qe = typeof be == "number" ? be : 10), e(19, Xe = typeof pe == "string" ? pe : "normal");
      const Z = P, de = se;
      e(22, Oe = typeof Z == "string" ? Z : typeof de == "string" ? de : void 0), e(23, lt = Array.isArray(ue) ? ue : []), Oe ? e(2, te = !1) : (e(2, te = !0), ye.logError(X(new Error('Missing "api_key" or "api_key_web" in "google_map"'))));
    }
    if (t.$$.dirty[0] & /*$jsonAllowZoom, allowZoom*/
    68157440 && e(20, ee = en(z, ee)), t.$$.dirty[0] & /*$jsonAllowScroll, allowScroll*/
    35651584 && e(21, He = en(y, He)), t.$$.dirty[0] & /*$jsonAspect*/
    16777216) {
      const Z = p == null ? void 0 : p.ratio;
      Z && On(Z) ? e(3, fe = (100 / Number(Z)).toFixed(2)) : e(3, fe = "0");
    }
    if (t.$$.dirty[0] & /*resolvedApiKey, resolvedMarkers, mapType, allowScroll, allowZoom, latitude, longitude, zoom*/
    16711680)
      if (Oe) {
        const Z = Gw(lt), de = Uw(Xe), ct = He || ee ? "auto" : "none";
        e(4, _t = `<!DOCTYPE html>
<html><head>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>html,body,#map{width:100%;height:100%;margin:0;padding:0;}</style>
</head><body>
<div id="map"></div>
<script>
function initMap(){
var map=new google.maps.Map(document.getElementById('map'),{
center:{lat:${re},lng:${ve}},
zoom:${Math.round(qe)},
mapTypeId:'${de}',
gestureHandling:'${ct}',
zoomControl:${ee},
scrollwheel:${He},
draggable:${He},
fullscreenControl:false,
streetViewControl:false
});
${Z}
google.maps.event.addListenerOnce(map,'idle',function(){
window.parent.postMessage({type:'map_ready'},'*');
});
}
<\/script>
<script src="https://maps.googleapis.com/maps/api/js?key=${ra(Oe)}&callback=initMap" async defer
onerror="window.parent.postMessage({type:'map_error'},'*')"><\/script>
</body></html>`);
      } else
        e(4, _t = "");
  }, [
    ye,
    he,
    te,
    fe,
    _t,
    it,
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
    re,
    ve,
    qe,
    Xe,
    ee,
    He,
    Oe,
    lt,
    p,
    y,
    z,
    ue,
    se,
    P,
    pe,
    be,
    Ye,
    we,
    zt,
    ht
  ];
}
class qw extends Wr {
  constructor(r) {
    super(), Hr(this, r, Jw, Ww, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
function rf(t, r, e) {
  const n = t.slice();
  return n[11] = r[e], n;
}
function Kw(t) {
  let r, e;
  return r = new Pn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function Yw(t) {
  let r, e;
  return r = new vn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: { default: [Xw] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function nf(t) {
  let r, e, n = [
    /*templateAttrs*/
    t[8]
  ], o = {};
  for (let i = 0; i < n.length; i += 1)
    o = Do(o, n[i]);
  return {
    c() {
      r = Me("template"), e = new Hi(!1), this.h();
    },
    l(i) {
      r = ze(i, "TEMPLATE", {});
      var s = je(r.content);
      e = ba(s, !1), s.forEach(k), this.h();
    },
    h() {
      e.a = null, $o(r, o);
    },
    m(i, s) {
      K(i, r, s), e.m(
        /*templateContent*/
        t[7],
        r.content
      );
    },
    p(i, s) {
      s & /*templateContent*/
      128 && e.p(
        /*templateContent*/
        i[7]
      ), $o(r, o = Ho(n, [s & /*templateAttrs*/
      256 && /*templateAttrs*/
      i[8]]));
    },
    d(i) {
      i && k(r);
    }
  };
}
function of(t) {
  let r = (
    /*jsonItems*/
    t[5]
  ), e, n, o = lf(t);
  return {
    c() {
      o.c(), e = Re();
    },
    l(i) {
      o.l(i), e = Re();
    },
    m(i, s) {
      o.m(i, s), K(i, e, s), n = !0;
    },
    p(i, s) {
      s & /*jsonItems*/
      32 && Tr(r, r = /*jsonItems*/
      i[5]) ? (br(), oe(o, 1, 1, j), yr(), o = lf(i), o.c(), G(o, 1), o.m(e.parentNode, e)) : o.p(i, s);
    },
    i(i) {
      n || (G(o), n = !0);
    },
    o(i) {
      oe(o), n = !1;
    },
    d(i) {
      i && k(e), o.d(i);
    }
  };
}
function sf(t) {
  let r, e;
  return r = new oo({
    props: { componentContext: (
      /*item*/
      t[11]
    ) }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*items*/
      8 && (i.componentContext = /*item*/
      n[11]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function lf(t) {
  let r, e, n = dr(
    /*items*/
    t[3]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = sf(rf(t, n, s));
  const i = (s) => oe(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = Re();
    },
    l(s) {
      for (let a = 0; a < o.length; a += 1)
        o[a].l(s);
      r = Re();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      K(s, r, a), e = !0;
    },
    p(s, a) {
      if (a & /*items*/
      8) {
        n = dr(
          /*items*/
          s[3]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const u = rf(s, n, l);
          o[l] ? (o[l].p(u, a), G(o[l], 1)) : (o[l] = sf(u), o[l].c(), G(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (br(), l = n.length; l < o.length; l += 1)
          i(l);
        yr();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          G(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        oe(o[a]);
      e = !1;
    },
    d(s) {
      s && k(r), hn(o, s);
    }
  };
}
function Hl(t) {
  let r, e, n, o = (
    /*templateContent*/
    t[7] && nf(t)
  ), i = !/*hasItemsError*/
  t[4] && /*jsonItems*/
  t[5] && of(t), s = [
    /*componentContext*/
    t[0].json.custom_props || {}
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = Do(a, s[l]);
  return {
    c() {
      r = Me(
        /*desc*/
        t[2].element
      ), o && o.c(), e = gr(), i && i.c(), this.h();
    },
    l(l) {
      r = ze(
        l,
        /*desc*/
        (t[2].element || "null").toUpperCase(),
        {}
      );
      var u = je(r);
      o && o.l(u), e = mr(u), i && i.l(u), u.forEach(k), this.h();
    },
    h() {
      ai(
        /*desc*/
        t[2].element
      )(r, a);
    },
    m(l, u) {
      K(l, r, u), o && o.m(r, null), jt(r, e), i && i.m(r, null), t[9](r), n = !0;
    },
    p(l, u) {
      /*templateContent*/
      l[7] ? o ? o.p(l, u) : (o = nf(l), o.c(), o.m(r, e)) : o && (o.d(1), o = null), !/*hasItemsError*/
      l[4] && /*jsonItems*/
      l[5] ? i ? (i.p(l, u), u & /*hasItemsError, jsonItems*/
      48 && G(i, 1)) : (i = of(l), i.c(), G(i, 1), i.m(r, null)) : i && (br(), oe(i, 1, 1, () => {
        i = null;
      }), yr()), ai(
        /*desc*/
        l[2].element
      )(r, a = Ho(s, [
        u & /*componentContext*/
        1 && /*componentContext*/
        (l[0].json.custom_props || {})
      ]));
    },
    i(l) {
      n || (G(i), n = !0);
    },
    o(l) {
      oe(i), n = !1;
    },
    d(l) {
      l && k(r), o && o.d(), i && i.d(), t[9](null);
    }
  };
}
function Xw(t) {
  let r = (
    /*desc*/
    t[2].element
  ), e, n = (
    /*desc*/
    t[2].element && Hl(t)
  );
  return {
    c() {
      n && n.c(), e = Re();
    },
    l(o) {
      n && n.l(o), e = Re();
    },
    m(o, i) {
      n && n.m(o, i), K(o, e, i);
    },
    p(o, i) {
      /*desc*/
      o[2].element ? r ? Tr(
        r,
        /*desc*/
        o[2].element
      ) ? (n.d(1), n = Hl(o), r = /*desc*/
      o[2].element, n.c(), n.m(e.parentNode, e)) : n.p(o, i) : (n = Hl(o), r = /*desc*/
      o[2].element, n.c(), n.m(e.parentNode, e)) : r && (n.d(1), n = null, r = /*desc*/
      o[2].element);
    },
    i: j,
    o(o) {
      oe(n, o);
    },
    d(o) {
      o && k(e), n && n.d(o);
    }
  };
}
function Zw(t) {
  let r, e, n, o;
  const i = [Yw, Kw], s = [];
  function a(l, u) {
    return (
      /*desc*/
      l[2] ? 0 : -1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Re();
    },
    l(l) {
      e && e.l(l), n = Re();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, [u]) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (br(), oe(s[c], 1, 1, () => {
        s[c] = null;
      }), yr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      oe(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function Qw(t, r, e) {
  let n, { componentContext: o } = r, { layoutParams: i = void 0 } = r;
  const s = zr($r);
  let a, l = null, u = "", c = {}, f = [], _ = !1;
  no(() => {
    if (a && "divKitApiCallback" in a && typeof a.divKitApiCallback == "function") {
      const m = s.getExtensionContext(o);
      a.divKitApiCallback(m);
    }
  }), dn(() => {
    f.forEach((m) => {
      m.destroy();
    });
  });
  function p(m) {
    Mr[m ? "unshift" : "push"](() => {
      a = m, e(6, a);
    });
  }
  return t.$$set = (m) => {
    "componentContext" in m && e(0, o = m.componentContext), "layoutParams" in m && e(1, i = m.layoutParams);
  }, t.$$.update = () => {
    var m;
    if (t.$$.dirty & /*componentContext, desc*/
    5)
      if (typeof o.json.custom_type == "string" && o.json.custom_type && ((m = s.customComponents) != null && m.has(o.json.custom_type))) {
        if (e(2, l = s.customComponents.get(o.json.custom_type)), typeof l.template == "function") {
          const h = s.getExtensionContext(o), y = /* @__PURE__ */ new Map();
          for (const [w, D] of h.variables)
            y.set(w, D.getValue());
          e(7, u = l.template({
            props: o.json.custom_props,
            variables: y
          }));
        } else l.template && typeof l.template == "string" ? e(7, u = l.template) : e(7, u = "");
        e(8, c = {
          shadowrootmode: l.shadowRootMode || "open"
        });
      } else
        e(2, l = null), e(7, u = ";"), o.logError(X(new Error('Unknown or incorrect "custom_type" prop for div "custom"')));
    t.$$.dirty & /*componentContext*/
    1 && e(5, n = o.json.items), t.$$.dirty & /*jsonItems, componentContext*/
    33 && (n !== void 0 && !Array.isArray(n) ? (e(4, _ = !0), o.logError(X(new Error('Incorrect "items" prop for div "custom"')))) : e(4, _ = !1)), t.$$.dirty & /*items, hasItemsError, jsonItems, componentContext*/
    57 && (f.forEach((h) => {
      h.destroy();
    }), e(3, f = (!_ && n || []).map((h, y) => o.produceChildContext(h, { path: y }))));
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
    p
  ];
}
class xw extends Wr {
  constructor(r) {
    super(), Hr(this, r, Qw, Zw, Tr, { componentContext: 0, layoutParams: 1 });
  }
}
const $w = "appkit-breadcrumb", ev = "appkit-breadcrumb__list", tv = "appkit-breadcrumb__item", rv = "appkit-breadcrumb__label", nv = "appkit-breadcrumb__label_link", ov = "appkit-breadcrumb__separator", Ci = {
  breadcrumb: $w,
  breadcrumb__list: ev,
  breadcrumb__item: tv,
  breadcrumb__label: rv,
  breadcrumb__label_link: nv,
  breadcrumb__separator: ov
};
function af(t, r, e) {
  const n = t.slice();
  return n[26] = r[e], n[28] = e, n;
}
function iv(t) {
  let r, e;
  return r = new Pn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function sv(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: bt("breadcrumb", Ci, {}),
      style: (
        /*stl*/
        t[3]
      ),
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: { default: [uv] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function lv(t) {
  let r, e = (
    /*crumb*/
    t[26].title + ""
  ), n, o, i, s, a, l, u;
  function c(...f) {
    return (
      /*click_handler*/
      t[22](
        /*crumb*/
        t[26],
        ...f
      )
    );
  }
  return {
    c() {
      r = Me("a"), n = Bn(e), i = gr(), s = Me("span"), a = Bn(
        /*separator*/
        t[2]
      ), this.h();
    },
    l(f) {
      r = ze(f, "A", { class: !0, href: !0 });
      var _ = je(r);
      n = qn(_, e), _.forEach(k), i = mr(f), s = ze(f, "SPAN", { class: !0, "aria-hidden": !0 });
      var p = je(s);
      a = qn(
        p,
        /*separator*/
        t[2]
      ), p.forEach(k), this.h();
    },
    h() {
      g(r, "class", Ci.breadcrumb__label + " " + Ci.breadcrumb__label_link), g(r, "href", o = cf(
        /*crumb*/
        t[26]
      )), g(s, "class", Ci.breadcrumb__separator), g(s, "aria-hidden", "true");
    },
    m(f, _) {
      K(f, r, _), jt(r, n), K(f, i, _), K(f, s, _), jt(s, a), l || (u = et(r, "click", c), l = !0);
    },
    p(f, _) {
      t = f, _ & /*crumbs*/
      16 && e !== (e = /*crumb*/
      t[26].title + "") && Qn(n, e), _ & /*crumbs*/
      16 && o !== (o = cf(
        /*crumb*/
        t[26]
      )) && g(r, "href", o), _ & /*separator*/
      4 && Qn(
        a,
        /*separator*/
        t[2]
      );
    },
    d(f) {
      f && (k(r), k(i), k(s)), l = !1, u();
    }
  };
}
function av(t) {
  let r, e = (
    /*crumb*/
    t[26].title + ""
  ), n;
  return {
    c() {
      r = Me("span"), n = Bn(e), this.h();
    },
    l(o) {
      r = ze(o, "SPAN", { class: !0, "aria-current": !0 });
      var i = je(r);
      n = qn(i, e), i.forEach(k), this.h();
    },
    h() {
      g(r, "class", Ci.breadcrumb__label), g(r, "aria-current", "page");
    },
    m(o, i) {
      K(o, r, i), jt(r, n);
    },
    p(o, i) {
      i & /*crumbs*/
      16 && e !== (e = /*crumb*/
      o[26].title + "") && Qn(n, e);
    },
    d(o) {
      o && k(r);
    }
  };
}
function uf(t) {
  let r, e;
  function n(s, a) {
    return (
      /*index*/
      s[28] === /*crumbs*/
      s[4].length - 1 ? av : lv
    );
  }
  let o = n(t), i = o(t);
  return {
    c() {
      r = Me("li"), i.c(), e = gr(), this.h();
    },
    l(s) {
      r = ze(s, "LI", { class: !0 });
      var a = je(r);
      i.l(a), e = mr(a), a.forEach(k), this.h();
    },
    h() {
      g(r, "class", Ci.breadcrumb__item);
    },
    m(s, a) {
      K(s, r, a), i.m(r, null), jt(r, e);
    },
    p(s, a) {
      o === (o = n(s)) && i ? i.p(s, a) : (i.d(1), i = o(s), i && (i.c(), i.m(r, e)));
    },
    d(s) {
      s && k(r), i.d();
    }
  };
}
function uv(t) {
  let r, e, n = dr(
    /*crumbs*/
    t[4]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = uf(af(t, n, i));
  return {
    c() {
      r = Me("nav"), e = Me("ol");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      this.h();
    },
    l(i) {
      r = ze(i, "NAV", { "aria-label": !0 });
      var s = je(r);
      e = ze(s, "OL", { class: !0 });
      var a = je(e);
      for (let l = 0; l < o.length; l += 1)
        o[l].l(a);
      a.forEach(k), s.forEach(k), this.h();
    },
    h() {
      g(e, "class", Ci.breadcrumb__list), g(r, "aria-label", "breadcrumb");
    },
    m(i, s) {
      K(i, r, s), jt(r, e);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(e, null);
    },
    p(i, s) {
      if (s & /*crumbs, separator, getHref, handleCrumbClick*/
      2068) {
        n = dr(
          /*crumbs*/
          i[4]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = af(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = uf(l), o[a].c(), o[a].m(e, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
    },
    d(i) {
      i && k(r), hn(o, i);
    }
  };
}
function cv(t) {
  let r, e, n, o;
  const i = [sv, iv], s = [];
  function a(l, u) {
    return 0;
  }
  return ~(r = a()) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Re();
    },
    l(l) {
      e && e.l(l), n = Re();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, [u]) {
      e && e.p(l, u);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      oe(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function cf(t) {
  var r;
  return (r = t.action) != null && r.url && !t.action.url.startsWith("div-action://") ? t.action.url : "#";
}
function fv(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, p = j, m = () => (p(), p = V(u, (Te) => e(16, _ = Te)), u), h, y = j, w = () => (y(), y = V(l, (Te) => e(17, h = Te)), l), D, z = j, O = () => (z(), z = V(a, (Te) => e(18, D = Te)), a), $, ue = j, M = () => (ue(), ue = V(s, (Te) => e(19, $ = Te)), s), Y, se = j, C = () => (se(), se = V(i, (Te) => e(20, Y = Te)), i), I, P = j, B = () => (P(), P = V(o, (Te) => e(21, I = Te)), o);
  t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => y()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => ue()), t.$$.on_destroy.push(() => se()), t.$$.on_destroy.push(() => P());
  let { componentContext: q } = r, { layoutParams: pe = void 0 } = r;
  const _e = zr($r);
  let Ae = "/", be = "#0077CC", Ie = "#111111", x = 14;
  function Ye() {
    e(2, Ae = "/"), e(12, be = "#0077CC"), e(13, Ie = "#111111"), e(14, x = 14);
  }
  function Qe(Te, ge) {
    const ye = q.json.item_builder;
    if (ye && Array.isArray(ge) && Array.isArray(ye.prototypes)) {
      const he = [];
      return ge.forEach((te, fe) => {
        if (te === null || typeof te != "object")
          return;
        const re = _e.preparePrototypeVariables(ye.data_element_name || "it", te, fe);
        for (let ve = 0; ve < ye.prototypes.length; ++ve) {
          const qe = ye.prototypes[ve];
          if (!qe.title || qe.selector !== void 0 && !q.getJsonWithVars(qe.selector, re))
            continue;
          const ee = { title: q.getJsonWithVars(qe.title, re) };
          if (qe.action) {
            const He = q.getJsonWithVars(qe.action, re);
            He && (ee.action = He);
          }
          he.push(ee);
          break;
        }
      }), he;
    }
    return Array.isArray(Te) ? Te : q.json.crumbs || [];
  }
  function xe(Te, ge) {
    ge.action && (Te.preventDefault(), q.execAnyActions([ge.action]));
  }
  const we = (Te, ge) => xe(ge, Te);
  return t.$$set = (Te) => {
    "componentContext" in Te && e(0, q = Te.componentContext), "layoutParams" in Te && e(1, pe = Te.layoutParams);
  }, t.$$.update = () => {
    var Te, ge, ye;
    t.$$.dirty & /*componentContext*/
    1 && e(15, n = q.origJson), t.$$.dirty & /*origJson*/
    32768 && n && Ye(), t.$$.dirty & /*componentContext*/
    1 && B(e(10, o = q.getDerivedFromVars(q.json.separator))), t.$$.dirty & /*componentContext*/
    1 && C(e(9, i = q.getDerivedFromVars(q.json.item_text_color))), t.$$.dirty & /*componentContext*/
    1 && M(e(8, s = q.getDerivedFromVars(q.json.active_text_color))), t.$$.dirty & /*componentContext*/
    1 && O(e(7, a = q.getDerivedFromVars(q.json.item_font_size))), t.$$.dirty & /*componentContext*/
    1 && w(e(6, l = q.getDerivedFromVars(q.json.crumbs))), t.$$.dirty & /*componentContext*/
    1 && m(e(5, u = typeof ((Te = q.json.item_builder) == null ? void 0 : Te.data) == "string" ? q.getDerivedFromVars((ge = q.json.item_builder) == null ? void 0 : ge.data, void 0, !0) : (ye = q.json.item_builder) != null && ye.data ? Qo(q.json.item_builder.data) : void 0)), t.$$.dirty & /*$jsonSeparator, separator*/
    2097156 && e(2, Ae = typeof I == "string" && I.length > 0 ? I : Ae), t.$$.dirty & /*$jsonItemTextColor, itemTextColor*/
    1052672 && e(12, be = pr(Y, 1, be)), t.$$.dirty & /*$jsonActiveTextColor, activeTextColor*/
    532480 && e(13, Ie = pr($, 1, Ie)), t.$$.dirty & /*$jsonItemFontSize, itemFontSize*/
    278528 && e(14, x = Jn(D, x)), t.$$.dirty & /*$jsonCrumbs, $jsonItemBuilderData*/
    196608 && e(4, c = Qe(h, _)), t.$$.dirty & /*itemTextColor, activeTextColor, itemFontSize*/
    28672 && e(3, f = {
      "--divkit-breadcrumb-item-color": be,
      "--divkit-breadcrumb-active-color": Ie,
      "--divkit-breadcrumb-font-size": me(x)
    });
  }, [
    q,
    pe,
    Ae,
    f,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    xe,
    be,
    Ie,
    x,
    n,
    _,
    h,
    D,
    $,
    Y,
    I,
    we
  ];
}
class dv extends Wr {
  constructor(r) {
    super(), Hr(this, r, fv, cv, Tr, { componentContext: 0, layoutParams: 1 });
  }
}
const _v = "appkit-autocomplete", hv = "appkit-autocomplete__input", pv = "appkit-autocomplete__dropdown", gv = "appkit-autocomplete__dropdown_below", mv = "appkit-autocomplete__dropdown_above", bv = "appkit-autocomplete__suggestion", yv = "appkit-autocomplete__suggestion_highlighted", xo = {
  autocomplete: _v,
  autocomplete__input: hv,
  "autocomplete__input_has-custom-focus": "appkit-autocomplete__input_has-custom-focus",
  autocomplete__dropdown: pv,
  autocomplete__dropdown_below: gv,
  autocomplete__dropdown_above: mv,
  autocomplete__suggestion: bv,
  autocomplete__suggestion_highlighted: yv,
  "autocomplete__suggestion-text": "appkit-autocomplete__suggestion-text",
  "autocomplete__suggestion-secondary": "appkit-autocomplete__suggestion-secondary"
};
function ff(t, r, e) {
  const n = t.slice();
  return n[102] = r[e], n[104] = e, n;
}
function wv(t) {
  let r, e;
  return r = new Pn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function vv(t) {
  let r, e;
  return r = new vn({
    props: {
      cls: bt("autocomplete", xo, {}),
      style: (
        /*stl*/
        t[13]
      ),
      customDescription: !0,
      customActions: "autocomplete",
      customPaddings: !0,
      hasInnerFocusable: !0,
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: {
        default: [
          kv,
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
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function df(t) {
  let r, e, n, o = dr(
    /*suggestions*/
    t[4]
  ), i = [];
  for (let s = 0; s < o.length; s += 1)
    i[s] = hf(ff(t, o, s));
  return {
    c() {
      r = Me("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      this.h();
    },
    l(s) {
      r = ze(s, "DIV", { class: !0, style: !0, role: !0 });
      var a = je(r);
      for (let l = 0; l < i.length; l += 1)
        i[l].l(a);
      a.forEach(k), this.h();
    },
    h() {
      g(r, "class", e = bt("autocomplete__dropdown", xo, { [
        /*dropdownPosition*/
        t[9]
      ]: !0 })), g(r, "style", n = _r(
        /*dropdownStl*/
        t[11]
      )), g(r, "role", "listbox");
    },
    m(s, a) {
      K(s, r, a);
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(r, null);
      t[91](r);
    },
    p(s, a) {
      if (a[0] & /*highlightedIndex, suggestions*/
      272 | a[1] & /*selectSuggestion*/
      8192) {
        o = dr(
          /*suggestions*/
          s[4]
        );
        let l;
        for (l = 0; l < o.length; l += 1) {
          const u = ff(s, o, l);
          i[l] ? i[l].p(u, a) : (i[l] = hf(u), i[l].c(), i[l].m(r, null));
        }
        for (; l < i.length; l += 1)
          i[l].d(1);
        i.length = o.length;
      }
      a[0] & /*dropdownPosition*/
      512 && e !== (e = bt("autocomplete__dropdown", xo, { [
        /*dropdownPosition*/
        s[9]
      ]: !0 })) && g(r, "class", e), a[0] & /*dropdownStl*/
      2048 && n !== (n = _r(
        /*dropdownStl*/
        s[11]
      )) && g(r, "style", n);
    },
    d(s) {
      s && k(r), hn(i, s), t[91](null);
    }
  };
}
function _f(t) {
  let r, e = (
    /*suggestion*/
    t[102].secondary_text + ""
  ), n;
  return {
    c() {
      r = Me("div"), n = Bn(e), this.h();
    },
    l(o) {
      r = ze(o, "DIV", { class: !0 });
      var i = je(r);
      n = qn(i, e), i.forEach(k), this.h();
    },
    h() {
      g(r, "class", xo["autocomplete__suggestion-secondary"]);
    },
    m(o, i) {
      K(o, r, i), jt(r, n);
    },
    p(o, i) {
      i[0] & /*suggestions*/
      16 && e !== (e = /*suggestion*/
      o[102].secondary_text + "") && Qn(n, e);
    },
    d(o) {
      o && k(r);
    }
  };
}
function hf(t) {
  let r, e, n = (
    /*suggestion*/
    (t[102].text || /*suggestion*/
    t[102].value) + ""
  ), o, i, s, a, l, u, c, f = (
    /*suggestion*/
    t[102].secondary_text && _f(t)
  );
  function _() {
    return (
      /*mousedown_handler*/
      t[89](
        /*suggestion*/
        t[102]
      )
    );
  }
  function p() {
    return (
      /*mouseenter_handler*/
      t[90](
        /*index*/
        t[104]
      )
    );
  }
  return {
    c() {
      r = Me("div"), e = Me("div"), o = Bn(n), i = gr(), f && f.c(), s = gr(), this.h();
    },
    l(m) {
      r = ze(m, "DIV", {
        class: !0,
        role: !0,
        "aria-selected": !0
      });
      var h = je(r);
      e = ze(h, "DIV", { class: !0 });
      var y = je(e);
      o = qn(y, n), y.forEach(k), i = mr(h), f && f.l(h), s = mr(h), h.forEach(k), this.h();
    },
    h() {
      g(e, "class", xo["autocomplete__suggestion-text"]), g(r, "class", a = bt("autocomplete__suggestion", xo, {
        highlighted: (
          /*index*/
          t[104] === /*highlightedIndex*/
          t[8]
        )
      })), g(r, "role", "option"), g(r, "aria-selected", l = /*index*/
      t[104] === /*highlightedIndex*/
      t[8]);
    },
    m(m, h) {
      K(m, r, h), jt(r, e), jt(e, o), jt(r, i), f && f.m(r, null), jt(r, s), u || (c = [
        et(r, "mousedown", X_(_)),
        et(r, "mouseenter", p)
      ], u = !0);
    },
    p(m, h) {
      t = m, h[0] & /*suggestions*/
      16 && n !== (n = /*suggestion*/
      (t[102].text || /*suggestion*/
      t[102].value) + "") && Qn(o, n), /*suggestion*/
      t[102].secondary_text ? f ? f.p(t, h) : (f = _f(t), f.c(), f.m(r, s)) : f && (f.d(1), f = null), h[0] & /*highlightedIndex*/
      256 && a !== (a = bt("autocomplete__suggestion", xo, {
        highlighted: (
          /*index*/
          t[104] === /*highlightedIndex*/
          t[8]
        )
      })) && g(r, "class", a), h[0] & /*highlightedIndex*/
      256 && l !== (l = /*index*/
      t[104] === /*highlightedIndex*/
      t[8]) && g(r, "aria-selected", l);
    },
    d(m) {
      m && k(r), f && f.d(), u = !1, Gr(c);
    }
  };
}
function kv(t) {
  let r, e, n, o, i, s, a, l, u;
  function c(...p) {
    return (
      /*focus_handler*/
      t[87](
        /*focusHandler*/
        t[100],
        ...p
      )
    );
  }
  function f(...p) {
    return (
      /*blur_handler*/
      t[88](
        /*blurHandler*/
        t[101],
        ...p
      )
    );
  }
  let _ = (
    /*showDropdown*/
    t[7] && /*suggestions*/
    t[4].length > 0 && df(t)
  );
  return {
    c() {
      r = Me("input"), s = gr(), _ && _.c(), a = Re(), this.h();
    },
    l(p) {
      r = ze(p, "INPUT", {
        class: !0,
        style: !0,
        type: !0,
        placeholder: !0,
        "aria-label": !0,
        "aria-autocomplete": !0,
        "aria-expanded": !0,
        autocomplete: !0
      }), s = mr(p), _ && _.l(p), a = Re(), this.h();
    },
    h() {
      g(r, "class", e = bt("autocomplete__input", xo, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[99]
        )
      })), g(r, "style", n = _r(
        /*inputStl*/
        t[12]
      )), g(
        r,
        "type",
        /*inputType*/
        t[15]
      ), g(r, "placeholder", o = /*$jsonHintText*/
      t[39] || ""), g(
        r,
        "aria-label",
        /*description*/
        t[10]
      ), g(r, "aria-autocomplete", "list"), g(
        r,
        "aria-expanded",
        /*showDropdown*/
        t[7]
      ), g(r, "autocomplete", "off"), r.disabled = i = !/*isEnabled*/
      t[16], r.value = /*$textVariable*/
      t[5];
    },
    m(p, m) {
      K(p, r, m), t[86](r), K(p, s, m), _ && _.m(p, m), K(p, a, m), l || (u = [
        et(
          r,
          "input",
          /*onInput*/
          t[41]
        ),
        et(r, "focus", c),
        et(r, "blur", f),
        et(
          r,
          "keydown",
          /*onKeyDown*/
          t[45]
        )
      ], l = !0);
    },
    p(p, m) {
      t = p, m[3] & /*hasCustomFocus*/
      64 && e !== (e = bt("autocomplete__input", xo, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[99]
        )
      })) && g(r, "class", e), m[0] & /*inputStl*/
      4096 && n !== (n = _r(
        /*inputStl*/
        t[12]
      )) && g(r, "style", n), m[0] & /*inputType*/
      32768 && g(
        r,
        "type",
        /*inputType*/
        t[15]
      ), m[1] & /*$jsonHintText*/
      256 && o !== (o = /*$jsonHintText*/
      t[39] || "") && g(r, "placeholder", o), m[0] & /*description*/
      1024 && g(
        r,
        "aria-label",
        /*description*/
        t[10]
      ), m[0] & /*showDropdown*/
      128 && g(
        r,
        "aria-expanded",
        /*showDropdown*/
        t[7]
      ), m[0] & /*isEnabled*/
      65536 && i !== (i = !/*isEnabled*/
      t[16]) && (r.disabled = i), m[0] & /*$textVariable*/
      32 && r.value !== /*$textVariable*/
      t[5] && (r.value = /*$textVariable*/
      t[5]), /*showDropdown*/
      t[7] && /*suggestions*/
      t[4].length > 0 ? _ ? _.p(t, m) : (_ = df(t), _.c(), _.m(a.parentNode, a)) : _ && (_.d(1), _ = null);
    },
    d(p) {
      p && (k(r), k(s), k(a)), t[86](null), _ && _.d(p), l = !1, Gr(u);
    }
  };
}
function jv(t) {
  let r, e, n, o;
  const i = [vv, wv], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? -1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = Re();
    },
    l(l) {
      e && e.l(l), n = Re();
    },
    m(l, u) {
      ~r && s[r].m(l, u), K(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (br(), oe(s[c], 1, 1, () => {
        s[c] = null;
      }), yr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), G(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (G(e), o = !0);
    },
    o(l) {
      oe(e), o = !1;
    },
    d(l) {
      l && k(n), ~r && s[r].d(l);
    }
  };
}
function Ev(t) {
  return Array.isArray(t) ? t.filter((r) => typeof r == "object" && r !== null && typeof r.value == "string") : [];
}
function Cv(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, p, m, h, y, w, D, z, O, $, ue, M, Y, se, C, I, P, B, q, pe, _e, Ae, be, Ie, x, Ye, Qe, xe, we, Te, ge = j, ye = () => (ge(), ge = V(B, (U) => e(64, Te = U)), B), he, te = j, fe = () => (te(), te = V(a, (U) => e(5, he = U)), a), re, ve = j, qe = () => (ve(), ve = V($, (U) => e(65, re = U)), $), Xe, ee = j, He = () => (ee(), ee = V(O, (U) => e(66, Xe = U)), O), Oe, lt = j, _t = () => (lt(), lt = V(z, (U) => e(67, Oe = U)), z), it, Et = j, at = () => (Et(), Et = V(D, (U) => e(68, it = U)), D), zt, ht = j, Z = () => (ht(), ht = V(w, (U) => e(69, zt = U)), w), de, ct = j, Be = () => (ct(), ct = V(y, (U) => e(70, de = U)), y), T, St = j, dt = () => (St(), St = V(h, (U) => e(71, T = U)), h), Ft, Pt = j, st = () => (Pt(), Pt = V(m, (U) => e(72, Ft = U)), m), Q, Dt = j, Ot = () => (Dt(), Dt = V(p, (U) => e(73, Q = U)), p), nr, er = j, Ve = () => (er(), er = V(_, (U) => e(74, nr = U)), _), Ge, yt = j, Pe = () => (yt(), yt = V(f, (U) => e(75, Ge = U)), f), tt, Le, Tt = j, We = () => (Tt(), Tt = V(u, (U) => e(77, Le = U)), u), vt, qt = j, Nt = () => (qt(), qt = V(l, (U) => e(78, vt = U)), l), ar, Fe = j, At = () => (Fe(), Fe = V(P, (U) => e(79, ar = U)), P), ur, sr = j, lr = () => (sr(), sr = V(ue, (U) => e(80, ur = U)), ue), hr, Er = j, Bt = () => (Er(), Er = V(I, (U) => e(81, hr = U)), I), kr, Ut = j, wt = () => (Ut(), Ut = V(C, (U) => e(82, kr = U)), C), or, le = j, Cr = () => (le(), le = V(se, (U) => e(83, or = U)), se), Ar, Vt = j, Pr = () => (Vt(), Vt = V(Y, (U) => e(84, Ar = U)), Y), Ur, fr = j, ft = () => (fr(), fr = V(M, (U) => e(85, Ur = U)), M), It, Kt = j, tr = () => (Kt(), Kt = V(c, (U) => e(39, It = U)), c);
  t.$$.on_destroy.push(() => ge()), t.$$.on_destroy.push(() => te()), t.$$.on_destroy.push(() => ve()), t.$$.on_destroy.push(() => ee()), t.$$.on_destroy.push(() => lt()), t.$$.on_destroy.push(() => Et()), t.$$.on_destroy.push(() => ht()), t.$$.on_destroy.push(() => ct()), t.$$.on_destroy.push(() => St()), t.$$.on_destroy.push(() => Pt()), t.$$.on_destroy.push(() => Dt()), t.$$.on_destroy.push(() => er()), t.$$.on_destroy.push(() => yt()), t.$$.on_destroy.push(() => Tt()), t.$$.on_destroy.push(() => qt()), t.$$.on_destroy.push(() => Fe()), t.$$.on_destroy.push(() => sr()), t.$$.on_destroy.push(() => Er()), t.$$.on_destroy.push(() => Ut()), t.$$.on_destroy.push(() => le()), t.$$.on_destroy.push(() => Vt()), t.$$.on_destroy.push(() => fr()), t.$$.on_destroy.push(() => Kt());
  let { componentContext: rt } = r, { layoutParams: mt = void 0 } = r;
  const ce = zr($r), Ct = ce.direction;
  kn(t, Ct, (U) => e(76, tt = U));
  let ir, Gt, jr, E = !1, ie = !1, d = -1, R = "below", Ce = null, Je = "", ke = "rgba(0,0,0,.45)", L = 12, Lt, Rt = "", Ke = "", ut, Yt = "", Ir = "#000", cr = "#000", Nr = "";
  function En() {
    e(47, Ce = null), e(49, ke = "rgba(0,0,0,.45)"), e(50, L = 12), e(51, Lt = void 0), e(52, Rt = ""), e(53, Ke = ""), e(54, ut = void 0), e(55, Yt = ""), e(56, Ir = "#000"), e(57, cr = "#000"), e(10, Nr = ""), e(7, ie = !1), e(8, d = -1);
  }
  function Se() {
    if (!Gt) return;
    const U = Gt.getBoundingClientRect(), $t = window.innerHeight - U.bottom, pt = U.top;
    e(9, R = $t >= 200 || $t >= pt ? "below" : "above");
  }
  function Qr(U) {
    const pt = U.target.value;
    if (a.setValue(pt), e(8, d = -1), pt.length >= q) {
      Se();
      const Sr = rt.json.text_change_actions;
      Sr && Sr.length && rt.execAnyActions(Sr);
    }
  }
  function Kr() {
    (he || "").length >= q && Ye.length > 0 && (Se(), e(7, ie = !0));
  }
  function _n() {
    Ae && setTimeout(
      () => {
        e(7, ie = !1), e(8, d = -1);
      },
      200
    );
  }
  function v(U) {
    const $t = U.text || U.value;
    if (a.setValue($t), s) {
      const Sr = rt.getVariable(s, "string") || ce.awaitGlobalVariable(s, "string", "");
      Sr && Sr.setValue(U.value);
    }
    _e && e(7, ie = !1), e(8, d = -1);
    const pt = rt.json.selection_actions;
    pt && pt.length && rt.execAnyActions(pt);
  }
  function A(U) {
    !ie || Ye.length === 0 || (U.key === "ArrowDown" ? (U.preventDefault(), e(8, d = (d + 1) % Ye.length), S()) : U.key === "ArrowUp" ? (U.preventDefault(), e(8, d = d <= 0 ? Ye.length - 1 : d - 1), S()) : U.key === "Enter" && d >= 0 ? (U.preventDefault(), v(Ye[d])) : U.key === "Escape" && (e(7, ie = !1), e(8, d = -1)));
  }
  function S() {
    Fn().then(() => {
      if (jr && d >= 0) {
        const U = jr.children;
        U[d] && U[d].scrollIntoView({ block: "nearest" });
      }
    });
  }
  dn(() => {
    ir && (ce.unregisterFocusable(ir), e(46, ir = void 0));
  });
  function ae(U) {
    Mr[U ? "unshift" : "push"](() => {
      Gt = U, e(2, Gt);
    });
  }
  const W = (U, $t) => {
    U($t), Kr();
  }, ot = (U, $t) => {
    U($t), _n();
  }, Ne = (U) => v(U), rr = (U) => {
    e(8, d = U);
  };
  function Mt(U) {
    Mr[U ? "unshift" : "push"](() => {
      jr = U, e(6, jr);
    });
  }
  return t.$$set = (U) => {
    "componentContext" in U && e(0, rt = U.componentContext), "layoutParams" in U && e(1, mt = U.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(63, n = rt.origJson), t.$$.dirty[2] & /*origJson*/
    2 && n && En(), t.$$.dirty[0] & /*componentContext*/
    1 && e(61, o = rt.json.text_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(60, i = rt.json.suggestions_variable), t.$$.dirty[0] & /*componentContext*/
    1 && (s = rt.json.value_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*textVarName*/
    1073741824 && fe(e(14, a = o && (rt.getVariable(o, "string") || ce.awaitGlobalVariable(o, "string", "")) || eo("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*suggestionsVarName*/
    536870912 && Nt(e(38, l = i && (rt.getVariable(i, "array") || ce.awaitGlobalVariable(i, "array", [])) || eo("temp", "array", []))), t.$$.dirty[0] & /*componentContext*/
    1 && We(e(37, u = rt.getDerivedFromVars(rt.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && tr(e(36, c = rt.getDerivedFromVars(rt.json.hint_text))), t.$$.dirty[0] & /*componentContext*/
    1 && Pe(e(35, f = rt.getDerivedFromVars(rt.json.hint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ve(e(34, _ = rt.getDerivedFromVars(rt.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && Ot(e(33, p = rt.getDerivedFromVars(rt.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(32, m = rt.getDerivedFromVars(rt.json.font_weight_value))), t.$$.dirty[0] & /*componentContext*/
    1 && dt(e(31, h = rt.getDerivedFromVars(rt.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && Be(e(30, y = rt.getDerivedFromVars(rt.json.font_variation_settings, void 0, !0, 0))), t.$$.dirty[0] & /*componentContext*/
    1 && Z(e(29, w = rt.getDerivedFromVars(rt.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && at(e(28, D = rt.getDerivedFromVars(rt.json.letter_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && _t(e(27, z = rt.getDerivedFromVars(rt.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && He(e(26, O = rt.getDerivedFromVars(rt.json.suggestion_text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && qe(e(25, $ = rt.getDerivedFromVars(rt.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && lr(e(24, ue = rt.getDerivedFromVars(rt.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && ft(e(23, M = rt.getDerivedFromVars(rt.json.min_query_length))), t.$$.dirty[0] & /*componentContext*/
    1 && Pr(e(22, Y = rt.getDerivedFromVars(rt.json.max_visible_suggestions))), t.$$.dirty[0] & /*componentContext*/
    1 && Cr(e(21, se = rt.getDerivedFromVars(rt.json.dismiss_on_selection))), t.$$.dirty[0] & /*componentContext*/
    1 && wt(e(20, C = rt.getDerivedFromVars(rt.json.dismiss_on_blur))), t.$$.dirty[0] & /*componentContext*/
    1 && Bt(e(19, I = rt.getDerivedFromVars(rt.json.dismiss_on_empty))), t.$$.dirty[0] & /*componentContext*/
    1 && At(e(18, P = rt.getDerivedFromVars(rt.json.keyboard_type))), t.$$.dirty[0] & /*componentContext*/
    1 && ye(e(17, B = rt.getDerivedFromVars(rt.json.highlight_color))), t.$$.dirty[2] & /*$jsonMinQueryLength*/
    8388608 && e(59, q = Math.max(1, Number(Ur) || 1)), t.$$.dirty[2] & /*$jsonMaxVisibleSuggestions*/
    4194304 && e(58, pe = Math.max(1, Number(Ar) || 5)), t.$$.dirty[2] & /*$jsonDismissOnSelection*/
    2097152 && (_e = en(or, !0)), t.$$.dirty[2] & /*$jsonDismissOnBlur*/
    1048576 && (Ae = en(kr, !0)), t.$$.dirty[2] & /*$jsonDismissOnEmpty*/
    524288 && e(62, be = en(hr, !0)), t.$$.dirty[2] & /*$jsonIsEnabled*/
    262144 && e(16, Ie = en(ur, !0)), t.$$.dirty[2] & /*$jsonKeyboardType*/
    131072 && e(15, x = ar === "password" ? "password" : ar === "email" ? "email" : ar === "uri" ? "url" : ar === "phone" ? "tel" : ar === "number" ? "number" : "text"), t.$$.dirty[2] & /*$suggestionsVariable*/
    65536 && e(4, Ye = Ev(vt)), t.$$.dirty[0] & /*$textVariable, suggestions*/
    48 | t.$$.dirty[1] & /*minQueryLength*/
    268435456 | t.$$.dirty[2] & /*dismissOnEmpty*/
    1) {
      const U = he || "";
      U.length < q || be && Ye.length === 0 ? e(7, ie = !1) : Ye.length > 0 && U.length >= q && e(7, ie = !0);
    }
    if (t.$$.dirty[0] & /*componentContext, hasError*/
    9 | t.$$.dirty[1] & /*textVarName, suggestionsVarName*/
    1610612736) {
      let U = !1;
      o || (U = !0, rt.logError(X(new Error('Missing "text_variable" in "autocomplete"')))), i || (U = !0, rt.logError(X(new Error('Missing "suggestions_variable" in "autocomplete"')))), E !== U && e(3, E = U);
    }
    if (t.$$.dirty[1] & /*fontSize*/
    524288 | t.$$.dirty[2] & /*$jsonFontSize*/
    4096 && e(50, L = Jn(nr, L)), t.$$.dirty[1] & /*selfPadding, fontSize*/
    589824 | t.$$.dirty[2] & /*$jsonPaddings, $direction*/
    49152 && (e(47, Ce = ui(Le || void 0, Ce)), e(48, Je = Ce ? _o(
      {
        top: (Number(Ce.top) || 0) / L * 10,
        right: (Number(tt === "ltr" ? Ce.end : Ce.start) || Number(Ce.right) || 0) / L * 10,
        bottom: (Number(Ce.bottom) || 0) / L * 10,
        left: (Number(tt === "ltr" ? Ce.start : Ce.end) || Number(Ce.left) || 0) / L * 10
      },
      tt
    ) : "")), t.$$.dirty[1] & /*hintColor*/
    262144 | t.$$.dirty[2] & /*$jsonHintColor*/
    8192 && e(49, ke = pr(Ge, 1, ke)), t.$$.dirty[1] & /*fontWeight*/
    1048576 | t.$$.dirty[2] & /*$jsonFontWeight, $jsonFontWeightValue, $jsonFontFamily*/
    3584 && (e(51, Lt = fi(Q, Ft, Lt)), T && typeof T == "string" ? e(52, Rt = ce.typefaceProvider(T, { fontWeight: Lt || 400 })) : e(52, Rt = "")), t.$$.dirty[1] & /*fontVariationSettings*/
    4194304 | t.$$.dirty[2] & /*$jsonFontVariationSettings*/
    256) {
      const U = Ai(de);
      U !== Ke && e(53, Ke = U);
    }
    if (t.$$.dirty[1] & /*fontSize*/
    524288 | t.$$.dirty[2] & /*$jsonLineHeight*/
    128) {
      const U = zt;
      On(U) && e(54, ut = U / L);
    }
    t.$$.dirty[1] & /*fontSize*/
    524288 | t.$$.dirty[2] & /*$jsonLetterSpacing*/
    64 && bs(it) && e(55, Yt = me(it / L * 10)), t.$$.dirty[1] & /*textColor*/
    33554432 | t.$$.dirty[2] & /*$jsonTextColor*/
    32 && e(56, Ir = pr(Oe, 1, Ir)), t.$$.dirty[1] & /*suggestionColor*/
    67108864 | t.$$.dirty[2] & /*$jsonSuggestionTextColor*/
    16 && e(57, cr = pr(Xe, 1, cr)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*$jsonAccessibility*/
    8 && (re != null && re.description ? e(10, Nr = ei(re)) : rt.logError(X(new Error('Missing accessibility "description" for autocomplete'), { level: "warn" }))), t.$$.dirty[1] & /*hintColor, fontWeight, fontFamily, fontVariationSettings, textColor*/
    41156608 | t.$$.dirty[2] & /*$jsonHighlightColor*/
    4 && e(13, Qe = {
      "--divkit-input-hint-color": ke,
      "--divkit-input-highlight-color": Te || void 0,
      "font-weight": Lt,
      "font-family": Rt,
      "font-variation-settings": Ke,
      color: Ir
    }), t.$$.dirty[1] & /*padding, fontSize, lineHeight, letterSpacing*/
    25821184 && e(12, xe = {
      padding: Je,
      "font-size": me(L),
      "line-height": ut,
      "letter-spacing": Yt
    }), t.$$.dirty[1] & /*maxVisibleSuggestions, suggestionColor*/
    201326592 && e(11, we = {
      "max-height": pe * 44 + "px",
      color: cr
    }), t.$$.dirty[0] & /*componentContext, inputEl*/
    5 | t.$$.dirty[1] & /*prevId*/
    32768 && rt.json && Gt && (ir && (ce.unregisterFocusable(ir), e(46, ir = void 0)), rt.id && !rt.fakeElement && (e(46, ir = rt.id), ce.registerFocusable(ir, {
      focus() {
        Gt && Gt.focus();
      }
    })));
  }, [
    rt,
    mt,
    Gt,
    E,
    Ye,
    he,
    jr,
    ie,
    d,
    R,
    Nr,
    we,
    xe,
    Qe,
    a,
    x,
    Ie,
    B,
    P,
    I,
    C,
    se,
    Y,
    M,
    ue,
    $,
    O,
    z,
    D,
    w,
    y,
    h,
    m,
    p,
    _,
    f,
    c,
    u,
    l,
    It,
    Ct,
    Qr,
    Kr,
    _n,
    v,
    A,
    ir,
    Ce,
    Je,
    ke,
    L,
    Lt,
    Rt,
    Ke,
    ut,
    Yt,
    Ir,
    cr,
    pe,
    q,
    i,
    o,
    be,
    n,
    Te,
    re,
    Xe,
    Oe,
    it,
    zt,
    de,
    T,
    Ft,
    Q,
    nr,
    Ge,
    tt,
    Le,
    vt,
    ar,
    ur,
    hr,
    kr,
    or,
    Ar,
    Ur,
    ae,
    W,
    ot,
    Ne,
    rr,
    Mt
  ];
}
class Av extends Wr {
  constructor(r) {
    super(), Hr(this, r, Cv, jv, Tr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const f_ = {
  text: Np,
  container: bg,
  separator: Ag,
  image: Ou,
  gif: Ou,
  grid: em,
  gallery: Em,
  tabs: $m,
  state: j0,
  pager: q0,
  indicator: s1,
  slider: J1,
  input: bb,
  select: Sb,
  video: Gb,
  switch: ry,
  checkbox: hy,
  radio: My,
  progress: Gy,
  table: gw,
  counter: Vw,
  webview: zw,
  google_map: qw,
  custom: xw,
  breadcrumb: dv,
  autocomplete: Av
};
function pf(t) {
  let r, e, n;
  var o = (
    /*component*/
    t[2]
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
  return o && (r = Ga(o, i(t))), {
    c() {
      r && Jt(r.$$.fragment), e = Re();
    },
    l(s) {
      r && Xt(r.$$.fragment, s), e = Re();
    },
    m(s, a) {
      r && Ht(r, s, a), K(s, e, a), n = !0;
    },
    p(s, a) {
      if (a & /*component*/
      4 && o !== (o = /*component*/
      s[2])) {
        if (r) {
          br();
          const l = r;
          oe(l.$$.fragment, 1, 0, () => {
            Wt(l, 1);
          }), yr();
        }
        o ? (r = Ga(o, i(s)), Jt(r.$$.fragment), G(r.$$.fragment, 1), Ht(r, e.parentNode, e)) : r = null;
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
      n || (r && G(r.$$.fragment, s), n = !0);
    },
    o(s) {
      r && oe(r.$$.fragment, s), n = !1;
    },
    d(s) {
      s && k(e), r && Wt(r, s);
    }
  };
}
function Vv(t) {
  let r, e, n = (
    /*component*/
    t[2] && pf(t)
  );
  return {
    c() {
      n && n.c(), r = Re();
    },
    l(o) {
      n && n.l(o), r = Re();
    },
    m(o, i) {
      n && n.m(o, i), K(o, r, i), e = !0;
    },
    p(o, [i]) {
      /*component*/
      o[2] ? n ? (n.p(o, i), i & /*component*/
      4 && G(n, 1)) : (n = pf(o), n.c(), G(n, 1), n.m(r.parentNode, r)) : n && (br(), oe(n, 1, 1, () => {
        n = null;
      }), yr());
    },
    i(o) {
      e || (G(n), e = !0);
    },
    o(o) {
      oe(n), e = !1;
    },
    d(o) {
      o && k(r), n && n.d(o);
    }
  };
}
function Sv(t, r, e) {
  let { componentContext: n } = r, { layoutParams: o = void 0 } = r;
  const i = zr($r);
  let s;
  return t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext), "layoutParams" in a && e(1, o = a.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*componentContext, component*/
    5) {
      const a = n.json;
      if (e(2, s = (a == null ? void 0 : a.type) && f_[a.type] || void 0), !s) {
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
class oo extends Wr {
  constructor(r) {
    super(), Hr(this, r, Sv, Vv, Tr, { componentContext: 0, layoutParams: 1 });
  }
}
const Dv = {
  "root-svg-filters": "appkit-root-svg-filters"
};
function gf(t, r, e) {
  const n = t.slice();
  n[1] = r[e];
  const o = (
    /*filterKey*/
    n[1].split(":")
  );
  return n[2] = o[0], n[3] = o[1], n;
}
function mf(t) {
  let r, e, n = dr([...Object.keys(
    /*svgFiltersMap*/
    t[0]
  )]), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = bf(gf(t, n, i));
  return {
    c() {
      r = tn("svg"), e = tn("defs");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      this.h();
    },
    l(i) {
      r = an(i, "svg", { class: !0, "aria-hidden": !0 });
      var s = je(r);
      e = an(s, "defs", {});
      var a = je(e);
      for (let l = 0; l < o.length; l += 1)
        o[l].l(a);
      a.forEach(k), s.forEach(k), this.h();
    },
    h() {
      g(r, "class", Dv["root-svg-filters"]), g(r, "aria-hidden", "true");
    },
    m(i, s) {
      K(i, r, s), jt(r, e);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(e, null);
    },
    p(i, s) {
      if (s & /*svgFiltersMap, Object*/
      1) {
        n = dr([...Object.keys(
          /*svgFiltersMap*/
          i[0]
        )]);
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = gf(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = bf(l), o[a].c(), o[a].m(e, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
    },
    d(i) {
      i && k(r), hn(o, i);
    }
  };
}
function Iv(t) {
  let r, e;
  return {
    c() {
      r = tn("feBlend"), this.h();
    },
    l(n) {
      r = an(n, "feBlend", { in2: !0, mode: !0 }), je(r).forEach(k), this.h();
    },
    h() {
      g(r, "in2", "SourceGraphic"), g(r, "mode", e = /*filterMode*/
      t[3]);
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o & /*svgFiltersMap*/
      1 && e !== (e = /*filterMode*/
      n[3]) && g(r, "mode", e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function Fv(t) {
  let r;
  return {
    c() {
      r = tn("feComposite"), this.h();
    },
    l(e) {
      r = an(e, "feComposite", {
        in2: !0,
        operator: !0,
        k1: !0,
        k2: !0,
        k3: !0,
        k4: !0
      }), je(r).forEach(k), this.h();
    },
    h() {
      g(r, "in2", "SourceGraphic"), g(r, "operator", "arithmetic"), g(r, "k1", "1"), g(r, "k2", "0"), g(r, "k3", "0"), g(r, "k4", "0");
    },
    m(e, n) {
      K(e, r, n);
    },
    p: j,
    d(e) {
      e && k(r);
    }
  };
}
function Tv(t) {
  let r, e;
  return {
    c() {
      r = tn("feComposite"), this.h();
    },
    l(n) {
      r = an(n, "feComposite", { in2: !0, operator: !0 }), je(r).forEach(k), this.h();
    },
    h() {
      g(r, "in2", "SourceGraphic"), g(r, "operator", e = /*filterMode*/
      t[3].split("_")[1]);
    },
    m(n, o) {
      K(n, r, o);
    },
    p(n, o) {
      o & /*svgFiltersMap*/
      1 && e !== (e = /*filterMode*/
      n[3].split("_")[1]) && g(r, "operator", e);
    },
    d(n) {
      n && k(r);
    }
  };
}
function bf(t) {
  let r, e, n, o;
  function i(l, u) {
    return (
      /*filterMode*/
      l[3] === "source_in" || /*filterMode*/
      l[3] === "source_atop" ? Tv : (
        /*filterMode*/
        l[3] === "multiply" ? Fv : Iv
      )
    );
  }
  let s = i(t), a = s(t);
  return {
    c() {
      r = tn("filter"), e = tn("feFlood"), a.c(), this.h();
    },
    l(l) {
      r = an(l, "filter", { id: !0 });
      var u = je(r);
      e = an(u, "feFlood", { "flood-color": !0 }), je(e).forEach(k), a.l(u), u.forEach(k), this.h();
    },
    h() {
      g(e, "flood-color", n = /*filterColor*/
      t[2]), g(r, "id", o = /*svgFiltersMap*/
      t[0][
        /*filterKey*/
        t[1]
      ]);
    },
    m(l, u) {
      K(l, r, u), jt(r, e), a.m(r, null);
    },
    p(l, u) {
      u & /*svgFiltersMap*/
      1 && n !== (n = /*filterColor*/
      l[2]) && g(e, "flood-color", n), s === (s = i(l)) && a ? a.p(l, u) : (a.d(1), a = s(l), a && (a.c(), a.m(r, null))), u & /*svgFiltersMap*/
      1 && o !== (o = /*svgFiltersMap*/
      l[0][
        /*filterKey*/
        l[1]
      ]) && g(r, "id", o);
    },
    d(l) {
      l && k(r), a.d();
    }
  };
}
function Mv(t) {
  let r = Object.keys(
    /*svgFiltersMap*/
    t[0]
  ).length, e, n = r && mf(t);
  return {
    c() {
      n && n.c(), e = Re();
    },
    l(o) {
      n && n.l(o), e = Re();
    },
    m(o, i) {
      n && n.m(o, i), K(o, e, i);
    },
    p(o, [i]) {
      i & /*svgFiltersMap*/
      1 && (r = Object.keys(
        /*svgFiltersMap*/
        o[0]
      ).length), r ? n ? n.p(o, i) : (n = mf(o), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: j,
    o: j,
    d(o) {
      o && k(e), n && n.d(o);
    }
  };
}
function Pv(t, r, e) {
  let { svgFiltersMap: n } = r;
  return t.$$set = (o) => {
    "svgFiltersMap" in o && e(0, n = o.svgFiltersMap);
  }, [n];
}
class Nv extends Wr {
  constructor(r) {
    super(), Hr(this, r, Pv, Mv, Tr, { svgFiltersMap: 0 });
  }
}
function zv(t, r, e, n) {
  const o = e[t.type];
  if (!o)
    return n(X(new Error("No such template"), {
      additional: {
        template: t.type
      }
    })), {
      json: t,
      templateContext: r
    };
  let i;
  const s = {};
  for (i in r)
    r.hasOwnProperty(i) && (s[i] = r[i]);
  for (i in t)
    i === "type" || i === "__proto__" || t.hasOwnProperty(i) && (s[i] = t[i]);
  function a(u, c) {
    const f = Object.keys(c).filter((m) => m !== "__proto__"), _ = f.filter((m) => m.charAt(0) !== "$"), p = f.filter((m) => m.charAt(0) === "$");
    return _.forEach((m) => {
      const h = c[m];
      typeof h == "object" && h !== null ? (u[m] = Array.isArray(h) ? [] : {}, a(u[m], h)) : u[m] = h;
    }), p.forEach((m) => {
      const h = c[m], y = s[h];
      if (y !== void 0) {
        const w = m.substring(1);
        u[w] = y;
      }
    }), u;
  }
  const l = a({}, o);
  for (i in t)
    i === "type" || i === "__proto__" || t.hasOwnProperty(i) && (l[i] = t[i]);
  return {
    json: l,
    templateContext: s
  };
}
const Ps = /* @__PURE__ */ new Map(), na = /* @__PURE__ */ new Map(), Ns = /* @__PURE__ */ new Map(), oa = /* @__PURE__ */ new Map();
function J(t, r, e) {
  const n = {
    args: r,
    cb: e
  }, o = Ps.get(t) || [];
  Ps.has(t) || Ps.set(t, o), o.push(n);
  const i = t + ":" + r.map((s) => typeof s == "object" ? s.type : s).join("#");
  na.set(i, n);
}
function qr(t, r, e) {
  const n = {
    args: r,
    cb: e
  }, o = Ns.get(t) || [];
  Ns.has(t) || Ns.set(t, o), o.push(n);
  const i = t + ":" + r.map((s) => typeof s == "object" ? s.type : s).join("#");
  oa.set(i, n);
}
function Ov(t, r, e) {
  const n = t.args.length;
  let o = t.args.length, i = 0;
  const s = t.args[t.args.length - 1];
  if (typeof s == "object" && s.isVararg && (o = 1 / 0), r.length < n)
    return {
      type: "few",
      expected: n,
      found: r.length,
      def: t,
      hasOverloads: e
    };
  if (r.length > o)
    return {
      type: "many",
      expected: o,
      found: r.length,
      def: t,
      hasOverloads: e
    };
  for (let a = 0; a < r.length; ++a) {
    let l = a >= t.args.length ? t.args[t.args.length - 1] : t.args[a];
    if (typeof l != "object" && (l = {
      type: l
    }), l.type === kt && r[a].type === Ue) {
      ++i;
      continue;
    }
    if (l.type !== r[a].type)
      return {
        type: "mismatch",
        expected: l.type,
        found: r[a].type,
        def: t,
        hasOverloads: e
      };
  }
  return {
    type: "match",
    conversions: i
  };
}
function d_(t, r) {
  if (!t)
    return {
      type: "missing"
    };
  let e = null, n = null;
  for (let o = 0; o < t.length; ++o) {
    const i = Ov(t[o], r, t.length > 1);
    if (i.type === "match") {
      (!n || n.conversions > i.conversions) && (n = {
        func: t[o],
        conversions: i.conversions
      });
      continue;
    }
    e || (e = i);
  }
  if (!n) {
    if (e)
      return e;
    throw new Error("Missing function");
  }
  return n;
}
function ia(t, r, e) {
  return d_(t.get(r), e);
}
function __(t, r) {
  return r.map((e, n) => {
    let o = n >= t.args.length ? t.args[t.args.length - 1] : t.args[n];
    return typeof o != "object" && (o = {
      type: o
    }), o.type === kt && e.type === Ue ? $l(e) : e;
  });
}
function yf(t, r) {
  return t + ":" + r.args.map((e) => typeof e == "string" ? e : e.type).join("#");
}
function Xn(t, r) {
  return {
    type: Ze,
    value: Fi(r, !0)
  };
}
function wf(t, r) {
  const e = Number(r.value);
  if (Number.isNaN(e) || !Number.isFinite(e))
    throw new Error("Unable to convert value to Number.");
  if (r.value === "")
    throw new Error("Unable to convert value to Number.");
  return {
    type: kt,
    value: e
  };
}
function Bv(t, r) {
  if (r.value > ps || r.value < gs)
    throw new Error("Unable to convert value to Integer.");
  const e = r.value - r.value % 1;
  return {
    type: Ue,
    value: wn(e)
  };
}
function Lv(t, r) {
  let e;
  try {
    e = wn(r.value);
  } catch {
    throw new Error("Unable to convert value to Integer.");
  }
  return {
    type: Ue,
    value: e
  };
}
function Rv(t, r) {
  return {
    type: Ue,
    value: wn(r.value ? 1 : 0)
  };
}
function Hv(t, r) {
  const e = Number(r.value);
  if (e !== 1 && e !== 0)
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: Zr,
    value: e
  };
}
function Wv(t, r) {
  if (r.value !== "true" && r.value !== "false")
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: Zr,
    value: r.value === "true" ? 1 : 0
  };
}
function Uv(t, r) {
  return {
    type: bn,
    value: di(r.value)
  };
}
function Gv(t, r) {
  return ko(r.value), {
    type: lo,
    value: r.value
  };
}
function Jv(t, r) {
  try {
    return {
      type: Ze,
      value: encodeURIComponent(r.value)
    };
  } catch {
    throw new Error("Unable to encodeUri string.");
  }
}
function qv(t, r) {
  try {
    return {
      type: Ze,
      value: decodeURIComponent(r.value)
    };
  } catch {
    throw new Error("Unable to decodeUri string.");
  }
}
function Fa(t, r, e, n) {
  const o = t.variables.get(r.value);
  let i;
  return o && o.getType() === n ? (i = o.getValue(), t.storeUsedVars || (t.storeUsedVars = /* @__PURE__ */ new Set()), t.storeUsedVars.add(o)) : i = e.value, n === "color" ? i = di(i) : n === "url" && ko(i), {
    type: n,
    // value is synced with type by params
    value: i
  };
}
function Es(t, r, e) {
  return Fa(t, r, e, e.type);
}
function vf(t, r, e) {
  return Fa(t, r, e, "color");
}
function kf(t, r, e) {
  return Fa(t, r, e, "url");
}
function h_(t, r) {
  for (let e = 0; e < r.length; ++e) {
    const n = t.charAt(e), o = r.charAt(e);
    if (n !== o && o)
      return o;
  }
  return "";
}
const il = 1234567890;
function jf(t) {
  const r = new Intl.NumberFormat(t, {
    maximumFractionDigits: 0
  }), e = new Intl.NumberFormat(t, {
    minimumFractionDigits: 1
  }), n = r.format(il), o = e.format(il);
  return h_(n, o);
}
function Kv(t) {
  const r = new Intl.NumberFormat(t, {
    useGrouping: !1
  }), e = new Intl.NumberFormat(t, {
    useGrouping: !0
  }), n = r.format(il), o = e.format(il);
  return h_(n, o);
}
function ii(t, r, e, n) {
  const o = e.value, i = o.replace(/,/g, "");
  if (!/^((#+)|(#*0+))(\.0*#*)?$/.test(i) && !/^#*0*\.((0*#*)|(#+))$/.test(i) || /,.*,/.test(o) || o.indexOf(",") > o.indexOf(".") && o.indexOf(".") > -1)
    throw new Error("Incorrect format pattern.");
  const s = o.split("."), a = s[0], l = s[1] || "", u = o.replace(/[^#0.]/g, "").split("."), c = u[0], f = u[1] || "", _ = a.indexOf(","), p = _ > -1 ? a.length - _ - 1 : -1;
  if (_ > -1 && p < 1 || l.indexOf(",") > -1)
    throw new Error("Incorrect format pattern.");
  try {
    let m = 0;
    for (; c[c.length - 1 - m] === "0"; )
      ++m;
    let h = 0;
    for (; f[h] === "0"; )
      ++h;
    let y = h;
    for (; f[y] === "#"; )
      ++y;
    let D = new Intl.NumberFormat((n == null ? void 0 : n.value) || void 0, {
      useGrouping: !1,
      minimumIntegerDigits: Math.min(Math.max(m, 1), 21),
      minimumFractionDigits: Math.min(Math.max(h, 0), 100),
      maximumFractionDigits: Math.min(Math.max(y, h, 0), 100),
      roundingMode: "halfEven"
    }).format(r.value);
    if (_ > -1 && p > 0) {
      const z = Kv(n == null ? void 0 : n.value), O = jf(n == null ? void 0 : n.value);
      if (z && O) {
        const $ = D.split(O), ue = $[0];
        let M = "";
        for (let Y = ue.length - 1; Y >= 0; --Y)
          M = ue[Y] + M, Y > 0 && (ue.length - Y) % p === 0 && (M = z + M);
        D = M + ($.length > 1 ? O + $[1] : "");
      }
    }
    if (h === 0 && y === 0 && o.endsWith(".")) {
      const z = jf(n == null ? void 0 : n.value);
      z && (D += z);
    }
    return {
      type: Ze,
      value: D
    };
  } catch (m) {
    throw new Error("Incorrect or unsupported number format." + m + " " + (n == null ? void 0 : n.value) || void 0);
  }
}
function Yv() {
  J("toString", [Ue], Xn), J("toString", [kt], Xn), J("toString", [Zr], Xn), J("toString", [bn], Xn), J("toString", [lo], Xn), J("toString", [Ze], Xn), J("toString", [vr], Xn), J("toString", [wr], Xn), J("toNumber", [Ue], wf), J("toNumber", [Ze], wf), J("toInteger", [kt], Bv), J("toInteger", [Ze], Lv), J("toInteger", [Zr], Rv), J("toBoolean", [Ue], Hv), J("toBoolean", [Ze], Wv), J("toColor", [Ze], Uv), J("toUrl", [Ze], Gv), J("encodeUri", [Ze], Jv), J("decodeUri", [Ze], qv), J("getIntegerValue", [Ze, Ue], Es), J("getNumberValue", [Ze, kt], Es), J("getBooleanValue", [Ze, Zr], Es), J("getStringValue", [Ze, Ze], Es), J("getColorValue", [Ze, bn], vf), J("getColorValue", [Ze, Ze], vf), J("getUrlValue", [Ze, lo], kf), J("getUrlValue", [Ze, Ze], kf), qr("toString", [Ue], Xn), qr("toString", [kt], Xn), qr("toString", [Zr], Xn), qr("toString", [bn], Xn), qr("toString", [lo], Xn), qr("toString", [Ze], Xn), qr("toString", [vr], Xn), qr("toString", [wr], Xn), J("decimalFormat", [Ue, Ze], ii), J("decimalFormat", [kt, Ze], ii), J("decimalFormat", [Ue, Ze, Ze], ii), J("decimalFormat", [kt, Ze, Ze], ii), qr("decimalFormat", [Ue, Ze], ii), qr("decimalFormat", [kt, Ze], ii), qr("decimalFormat", [Ue, Ze, Ze], ii), qr("decimalFormat", [kt, Ze, Ze], ii);
}
function Zn(t, r) {
  return !t || !r ? t : t.padStart(r, "0");
}
const sa = {
  G(t, r) {
    let e;
    return t < 4 ? e = "short" : t === 5 ? e = "narrow" : e = "long", r({
      era: e
    }, "era");
  },
  d(t, r) {
    return Zn(r({
      day: "numeric"
    }, "day"), t > 1 ? t : 0);
  },
  D(t, r) {
    return Zn(r({}, "dayofyear"), t > 1 ? t : 0);
  },
  F(t, r) {
    return Zn(r({}, "dayofweekinmonth"), t > 1 ? t : 0);
  },
  M(t, r) {
    let e;
    return t === 1 ? e = "numeric" : t === 2 ? e = "2-digit" : t === 3 ? e = "short" : t === 5 ? e = "narrow" : e = "long", r({
      month: e,
      // to get a genitive case of month
      day: "numeric"
    }, "month");
  },
  y(t, r) {
    return Zn(r({
      year: t === 2 ? "2-digit" : "numeric"
    }, "year"), t > 2 ? t : void 0);
  },
  Y(t, r) {
    return Zn(r({
      year: t === 2 ? "2-digit" : "numeric"
    }, "weekyear"), t > 2 ? t : void 0);
  },
  u(t, r) {
    return Zn(r({
      year: "numeric"
    }, "extendedyear"), t > 1 ? t : void 0);
  },
  E(t, r) {
    let e;
    return t <= 3 ? e = "short" : t === 5 ? e = "narrow" : e = "long", r({
      weekday: e
    }, "weekday");
  },
  e(t, r) {
    return t > 2 ? sa.E(t, r) : Zn(r({}, "weekdaynumeric"), t > 1 ? t : void 0);
  },
  w(t, r) {
    return Zn(r({}, "week"), t > 1 ? t : void 0);
  },
  W(t, r) {
    return Zn(r({}, "weekofmonth"), t > 1 ? t : void 0);
  },
  H(t, r) {
    const e = r({
      hour: "numeric",
      hour12: !1,
      hourCycle: "h23"
    }, "hour");
    if (!e)
      return;
    const n = String(Number(e) % 24);
    return Zn(n, t > 1 ? t : void 0);
  },
  h(t, r) {
    return Zn(r({
      hour: "numeric",
      hour12: !0,
      hourCycle: "h12"
    }, "hour"), t > 1 ? t : void 0);
  },
  K(t, r) {
    const e = r({
      hour: "numeric",
      hour12: !0,
      hourCycle: "h11"
    }, "hour");
    if (!e)
      return;
    const n = String(Number(e) % 12);
    return Zn(n, t > 1 ? t : void 0);
  },
  k(t, r) {
    return Zn(r({
      hour: "numeric",
      hour12: !1,
      hourCycle: "h24"
    }, "hour"), t > 2 ? t : void 0);
  },
  a(t, r) {
    return r({
      hour: "numeric",
      hour12: !0,
      hourCycle: "h11",
      dayPeriod: void 0
    }, "dayPeriod");
  },
  m(t, r) {
    return Zn(r({
      minute: "numeric"
    }, "minute"), t > 1 ? t : void 0);
  },
  s(t, r) {
    return Zn(r({
      second: "numeric"
    }, "second"), t > 1 ? t : void 0);
  },
  S(t, r) {
    const e = r({
      fractionalSecondDigits: Math.min(3, t)
    }, "fractionalSecond");
    return e && t > 3 ? e.padEnd(t, "0") : e;
  },
  z(t, r) {
    return r({
      timeZoneName: t === 4 ? "long" : "short"
    }, "timeZoneName");
  },
  Z(t, r) {
    const e = -Number(r({}, "timezoneoffset")), n = Math.abs(e / 60), o = Math.floor(n) * 100 + (n - Math.floor(n)) * 60;
    return (e >= 0 ? "+" : "-") + Zn(String(o), 4);
  }
}, Xv = /(\w)\1*|''|'(''|[^'])+('|$)|./g, Zv = /^'([^]*?)'?$/, Qv = /''/g, xv = /[a-zA-Z]/, Ta = 1e3 * 60 * 60 * 24;
function $v(t) {
  const r = t.match(Zv);
  return r ? r[1].replace(Qv, "'") : t;
}
function la(t, r, e) {
  const n = t[r ? "getUTCDay" : "getDay"](), o = n < e ? e - n - 7 : e - n;
  return new Date(t.getTime() + Ta * o);
}
function Ef(t, r, e) {
  const n = new Date(t);
  return n[r ? "setUTCDate" : "setDate"](1), n[r ? "setUTCMonth" : "setMonth"](0), la(n, r, e);
}
function Cf(t, r) {
  return Math.round((t.getTime() - r.getTime()) / Ta);
}
function Af(t, r, e) {
  let n = 0;
  const o = Ef(t, r || !1, e), i = new Date(t);
  i[r ? "setUTCFullYear" : "setFullYear"](t[r ? "getUTCFullYear" : "getFullYear"]() + 1);
  const s = Ef(i, r || !1, e), a = t.getTime() < o.getTime(), l = t.getTime() >= s.getTime();
  let u = t[r ? "getUTCFullYear" : "getFullYear"]();
  if (a) {
    --u, o[r ? "setUTCFullYear" : "setFullYear"](o[r ? "getUTCFullYear" : "getFullYear"]() - 1);
    const c = Cf(la(t, r, e), o);
    n = Math.round(c / 7) + 1;
  } else if (l)
    ++u, n = 1;
  else {
    const c = Cf(la(t, r, e), o);
    n = Math.round(c / 7) + 1;
  }
  return {
    week: n,
    year: u
  };
}
function ek(t, r, {
  locale: e,
  isUTC: n,
  weekStartDay: o = 0
} = {}) {
  const i = (s, a) => {
    if (a === "week") {
      const { week: c } = Af(t, n || !1, o);
      return String(c);
    }
    if (a === "weekofmonth") {
      const c = t[n ? "getUTCDay" : "getDay"](), f = new Date(t);
      f[n ? "setUTCDate" : "setDate"](1);
      const _ = f[n ? "getUTCDay" : "getDay"](), p = t[n ? "getUTCDate" : "getDate"]();
      return String(Math.ceil(p / 7) + (c < _ ? 1 : 0));
    }
    if (a === "dayofweekinmonth") {
      const c = t[n ? "getUTCDate" : "getDate"]();
      return String(Math.ceil(c / 7));
    }
    if (a === "weekdaynumeric") {
      let c = t[n ? "getUTCDay" : "getDay"]();
      return c < o && (c += 7), String(c - o + 1);
    }
    if (a === "dayofyear") {
      const c = new Date(t);
      c[n ? "setUTCMonth" : "setMonth"](0), c[n ? "setUTCDate" : "setDate"](1), c[n ? "setUTCHours" : "setHours"](1), c[n ? "setUTCMinutes" : "setMinutes"](1), c[n ? "setUTCSeconds" : "setSeconds"](1);
      const f = Math.ceil((t.getTime() - c.getTime()) / Ta);
      return String(f);
    }
    if (a === "weekyear") {
      let { year: c } = Af(t, n || !1, o);
      return c < 1 && (c = 1 - c), s.year === "2-digit" ? String(c % 100) : String(c);
    }
    if (a === "extendedyear") {
      const c = t[n ? "getUTCFullYear" : "getFullYear"]();
      return s.year === "2-digit" ? String(c % 100) : String(c);
    }
    if (a === "timezoneoffset")
      return n ? "0" : String(t.getTimezoneOffset());
    n && (s.timeZone = "UTC");
    const u = new Intl.DateTimeFormat(e, s).formatToParts(t);
    for (let c = 0; c < u.length; ++c)
      if (u[c].type === a)
        return u[c].value;
  };
  return (r.match(Xv) || []).map((s) => {
    if (s === "''")
      return "'";
    const a = s[0];
    if (a === "'")
      return $v(s);
    if (sa[a])
      return sa[a](s.length, i);
    if (a.match(xv))
      throw new Error(
        `Format string contains an unescaped latin alphabet character "${a}"`
      );
    return s;
  }).join("");
}
function tk(t) {
  const r = new Date(t);
  return r.setUTCMonth(r.getUTCMonth() + 1), r.setUTCDate(0), r.getUTCDate();
}
function rk(t, r) {
  return {
    type: Lr,
    value: new Date(Number(r.value) * 1e3)
  };
}
function nk(t, r) {
  const e = new Date(Number(r.value) * 1e3), n = e.getTimezoneOffset();
  return e.setMinutes(e.getMinutes() - n), {
    type: Lr,
    value: e
  };
}
function ok() {
  return {
    type: Lr,
    value: /* @__PURE__ */ new Date()
  };
}
function ik(t, r, e) {
  return {
    type: Lr,
    value: new Date(r.value.getTime() + Number(e.value))
  };
}
function sk(t, r, e) {
  const n = new Date(r.value);
  return n.setUTCFullYear(Number(e.value)), {
    type: Lr,
    value: n
  };
}
function lk(t, r, e) {
  const n = Number(e.value);
  if (n < 1 || n > 12)
    throw new Error(`Expecting month in [1..12], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMonth(n - 1), {
    type: Lr,
    value: o
  };
}
function ak(t, r, e) {
  const n = new Date(r.value), o = Number(e.value);
  if (o <= 0 && o !== -1 || o > tk(n))
    throw new Error(`Unable to set day ${o} for date ${Fi(r, !1)}.`);
  return n.setUTCDate(o === -1 ? 0 : o), {
    type: Lr,
    value: n
  };
}
function uk(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 23)
    throw new Error(`Expecting hours in [0..23], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCHours(n), {
    type: Lr,
    value: o
  };
}
function ck(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting minutes in [0..59], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMinutes(n), {
    type: Lr,
    value: o
  };
}
function fk(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting seconds in [0..59], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCSeconds(n), {
    type: Lr,
    value: o
  };
}
function dk(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 999)
    throw new Error(`Expecting millis in [0..999], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMilliseconds(n), {
    type: Lr,
    value: o
  };
}
const _i = (t) => (r, e) => {
  let o = new Date(e.value.getTime())[t]();
  return t === "getUTCMonth" ? ++o : t === "getUTCDay" && o === 0 && (o = 7), {
    type: Ue,
    value: wn(o)
  };
};
function p_(t) {
  return (r, e, n, o) => ({
    type: Ze,
    value: ek(e.value, n.value, {
      locale: o == null ? void 0 : o.value,
      isUTC: t,
      weekStartDay: r.weekStartDay
    })
  });
}
const _k = _i("getUTCFullYear"), hk = _i("getUTCMonth"), pk = _i("getUTCDate"), gk = _i("getUTCDay"), mk = _i("getUTCHours"), bk = _i("getUTCMinutes"), yk = _i("getUTCSeconds"), wk = _i("getUTCMilliseconds"), Vf = p_(!1), Sf = p_(!0);
function vk() {
  J("parseUnixTime", [Ue], rk), J("parseUnixTimeAsLocal", [Ue], nk), J("nowLocal", [], ok), J("addMillis", [Lr, Ue], ik), J("setYear", [Lr, Ue], sk), J("setMonth", [Lr, Ue], lk), J("setDay", [Lr, Ue], ak), J("setHours", [Lr, Ue], uk), J("setMinutes", [Lr, Ue], ck), J("setSeconds", [Lr, Ue], fk), J("setMillis", [Lr, Ue], dk), J("getYear", [Lr], _k), J("getMonth", [Lr], hk), J("getDay", [Lr], pk), J("getDayOfWeek", [Lr], gk), J("getHours", [Lr], mk), J("getMinutes", [Lr], bk), J("getSeconds", [Lr], yk), J("getMillis", [Lr], wk), J("formatDateAsLocal", [Lr, Ze], Vf), J("formatDateAsUTC", [Lr, Ze], Sf), J("formatDateAsLocalWithLocale", [Lr, Ze, Ze], Vf), J("formatDateAsUTCWithLocale", [Lr, Ze, Ze], Sf);
}
function kk(t) {
  return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function jk(t, r) {
  return {
    type: Ue,
    value: wn(r.value.length)
  };
}
function Ek(t, r, e) {
  return {
    type: Zr,
    value: r.value.includes(e.value) ? 1 : 0
  };
}
function Ck(t, r, e, n) {
  if (n.value < e.value)
    throw new Error("Indexes should be in ascending order.");
  if (e.value < 0 || e.value > r.value.length || n.value < 0 || n.value > r.value.length)
    throw new Error("Indexes are out of bounds.");
  return {
    type: Ze,
    value: r.value.substring(Number(e.value), Number(n.value))
  };
}
function Ak(t, r, e, n) {
  let o;
  return e.value ? o = r.value.replace(new RegExp(kk(e.value), "g"), n.value) : o = r.value, {
    type: Ze,
    value: o
  };
}
function Vk(t, r, e) {
  return {
    type: Ue,
    value: wn(r.value.indexOf(e.value))
  };
}
function Sk(t, r, e) {
  return {
    type: Ue,
    value: wn(r.value.lastIndexOf(e.value))
  };
}
function Dk(t, r) {
  return {
    type: Ze,
    value: r.value.trim()
  };
}
function Ik(t, r) {
  return {
    type: Ze,
    value: r.value.replace(/^\s+/, "")
  };
}
function Fk(t, r) {
  return {
    type: Ze,
    value: r.value.replace(/\s+$/, "")
  };
}
function Tk(t, r) {
  return {
    type: Ze,
    value: r.value.toUpperCase()
  };
}
function Mk(t, r) {
  return {
    type: Ze,
    value: r.value.toLowerCase()
  };
}
function g_(t, r, e, n) {
  if (!n.value.length)
    return t.warnings.push(X(new Error("String for padding is empty."), {
      level: "warn"
    })), "";
  let o = "";
  const i = r.type === Ze ? r.value : Fi(r, !1);
  for (; o.length + i.length < e.value; )
    o += n.value;
  return o.length > 0 && o.length + i.length > e.value && (o = o.substring(0, Number(e.value) - Number(i.length))), o;
}
function Df(t, r, e, n) {
  const o = g_(t, r, e, n);
  return {
    type: Ze,
    value: o + Fi(r, !1)
  };
}
function If(t, r, e, n) {
  const o = g_(t, r, e, n);
  return {
    type: Ze,
    value: Fi(r, !1) + o
  };
}
function Pk(t, r, e) {
  let n;
  try {
    n = new RegExp(e.value);
  } catch {
    throw new Error("Invalid regular expression.");
  }
  return {
    type: Zr,
    value: n.test(r.value) ? 1 : 0
  };
}
function Nk(t, r) {
  return {
    type: Ze,
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#escaping
    value: r.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  };
}
function zk() {
  J("len", [Ze], jk), J("contains", [Ze, Ze], Ek), J("substring", [Ze, Ue, Ue], Ck), J("replaceAll", [Ze, Ze, Ze], Ak), J("index", [Ze, Ze], Vk), J("lastIndex", [Ze, Ze], Sk), J("trim", [Ze], Dk), J("trimLeft", [Ze], Ik), J("trimRight", [Ze], Fk), J("toUpperCase", [Ze], Tk), J("toLowerCase", [Ze], Mk), J("padStart", [Ze, Ue, Ze], Df), J("padStart", [Ue, Ue, Ze], Df), J("padEnd", [Ze, Ue, Ze], If), J("padEnd", [Ue, Ue, Ze], If), J("testRegex", [Ze, Ze], Pk), J("encodeRegex", [Ze], Nk);
}
function Ok(t, r, e) {
  if (e.value === Di)
    throw new Error("Division by zero is not supported.");
  let n = r.value / e.value;
  return n = Ti(t, n), Hn(t, n), {
    type: Ue,
    value: n
  };
}
function Bk(t, r, e) {
  if (e.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = r.value / e.value;
  return {
    type: kt,
    value: n
  };
}
function Lk(t, r, e) {
  if (e.value === Di)
    throw new Error("Division by zero is not supported.");
  let n = r.value % e.value;
  return n = Ti(t, n), Hn(t, n), {
    type: Ue,
    value: n
  };
}
function Rk(t, r, e) {
  if (e.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = r.value % e.value;
  return {
    type: kt,
    value: n
  };
}
function Hk(t, ...r) {
  let e = r.length ? r[0].value : Di;
  for (let n = 1; n < r.length; ++n)
    e *= r[n].value, e = Ti(t, e), Hn(t, e);
  return {
    type: Ue,
    value: e
  };
}
function Wk(t, ...r) {
  let e = r.length ? r[0].value : 0;
  for (let n = 1; n < r.length; ++n)
    e *= r[n].value;
  return {
    type: kt,
    value: e
  };
}
function Uk(t, ...r) {
  let e = r.length ? r[0].value : Di;
  for (let n = 1; n < r.length; ++n)
    e -= r[n].value, e = Ti(t, e), Hn(t, e);
  return {
    type: Ue,
    value: e
  };
}
function Gk(t, ...r) {
  let e = r.length ? r[0].value : 0;
  for (let n = 1; n < r.length; ++n)
    e -= r[n].value;
  return {
    type: kt,
    value: e
  };
}
function Jk(t, ...r) {
  let e = Di;
  for (let n = 0; n < r.length; ++n)
    e += r[n].value, e = Ti(t, e), Hn(t, e);
  return {
    type: Ue,
    value: e
  };
}
function qk(t, ...r) {
  let e = 0;
  for (let n = 0; n < r.length; ++n)
    e += r[n].value;
  return {
    type: kt,
    value: e
  };
}
function Kk(t, r) {
  const e = $d(r.value);
  return Hn(t, e), {
    type: r.type,
    value: e
  };
}
function Yk(t, r) {
  const e = Math.abs(r.value);
  return {
    type: kt,
    value: e
  };
}
function Xk(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  let e = r[0].value;
  for (let n = 1; n < r.length; ++n)
    r[n].value > e && (e = r[n].value);
  return {
    type: Ue,
    value: e
  };
}
function Zk(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: kt,
    value: Math.max(...r.map((e) => e.value))
  };
}
function Qk(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  let e = r[0].value;
  for (let n = 1; n < r.length; ++n)
    r[n].value < e && (e = r[n].value);
  return {
    type: Ue,
    value: e
  };
}
function xk(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: kt,
    value: Math.min(...r.map((e) => e.value))
  };
}
function $k() {
  return {
    type: kt,
    value: y1
  };
}
function e2() {
  return {
    type: kt,
    value: w1
  };
}
function t2(t) {
  return Hn(t, ps), {
    type: Ue,
    value: ps
  };
}
function r2(t) {
  return Hn(t, gs), {
    type: Ue,
    value: gs
  };
}
function n2(t, r) {
  const e = Math.sign(r.value);
  return {
    type: kt,
    // js treats Math.round(-0.5) as 0, which is different to other platforms
    value: e * Math.round(Math.abs(r.value))
  };
}
function o2(t, r) {
  return {
    type: kt,
    value: Math.floor(r.value)
  };
}
function i2(t, r) {
  return {
    type: kt,
    value: Math.ceil(r.value)
  };
}
function s2(t, r) {
  return {
    type: Ue,
    value: e_(r.value)
  };
}
function l2(t, r) {
  return {
    type: kt,
    value: Math.sign(r.value)
  };
}
function a2(t, r, e) {
  let n;
  if (e.value === Di)
    n = r.value;
  else if (r.value === Di)
    n = wn(0);
  else {
    const o = e_(e.value);
    n = $d(r.value) * o;
  }
  return Hn(t, n), {
    type: Ue,
    value: n
  };
}
function u2(t, r, e) {
  let n = Math.sign(e.value);
  n === 0 && (n = Object.is(n, 0) ? 1 : -1);
  const o = Math.abs(r.value) * n;
  return {
    type: kt,
    value: o
  };
}
function c2() {
  J("div", [Ue, Ue], Ok), J("div", [kt, kt], Bk), J("mod", [Ue, Ue], Lk), J("mod", [kt, kt], Rk), J("mul", [{
    type: Ue,
    isVararg: !0
  }], Hk), J("mul", [{
    type: kt,
    isVararg: !0
  }], Wk), J("sub", [{
    type: Ue,
    isVararg: !0
  }], Uk), J("sub", [{
    type: kt,
    isVararg: !0
  }], Gk), J("sum", [{
    type: Ue,
    isVararg: !0
  }], Jk), J("sum", [{
    type: kt,
    isVararg: !0
  }], qk), J("abs", [Ue], Kk), J("abs", [kt], Yk), J("max", [{
    type: Ue,
    isVararg: !0
  }], Xk), J("max", [{
    type: kt,
    isVararg: !0
  }], Zk), J("min", [{
    type: Ue,
    isVararg: !0
  }], Qk), J("min", [{
    type: kt,
    isVararg: !0
  }], xk), J("maxNumber", [], $k), J("minNumber", [], e2), J("maxInteger", [], t2), J("minInteger", [], r2), J("round", [kt], n2), J("floor", [kt], o2), J("ceil", [kt], i2), J("signum", [Ue], s2), J("signum", [kt], l2), J("copySign", [Ue, Ue], a2), J("copySign", [kt, kt], u2);
}
function Vl(t) {
  return (r, e) => {
    const n = El(e.value);
    return {
      type: kt,
      value: n[t] / 255
    };
  };
}
function Sl(t) {
  return (r, e, n) => {
    const o = El(e.value);
    return o[t] = n.value * 255, {
      type: bn,
      value: Mi(o)
    };
  };
}
const Ff = Vl("a"), Tf = Vl("r"), Mf = Vl("g"), Pf = Vl("b"), Nf = Sl("a"), zf = Sl("r"), Of = Sl("g"), Bf = Sl("b");
function f2(t, r, e, n) {
  const o = {
    a: 255,
    r: r.value * 255,
    g: e.value * 255,
    b: n.value * 255
  };
  return {
    type: bn,
    value: Mi(o)
  };
}
function d2(t, r, e, n, o) {
  const i = {
    a: r.value * 255,
    r: e.value * 255,
    g: n.value * 255,
    b: o.value * 255
  };
  return {
    type: bn,
    value: Mi(i)
  };
}
function _2() {
  J("getColorAlpha", [Ze], Ff), J("getColorAlpha", [bn], Ff), J("getColorRed", [Ze], Tf), J("getColorRed", [bn], Tf), J("getColorGreen", [Ze], Mf), J("getColorGreen", [bn], Mf), J("getColorBlue", [Ze], Pf), J("getColorBlue", [bn], Pf), J("setColorAlpha", [Ze, kt], Nf), J("setColorAlpha", [bn, kt], Nf), J("setColorRed", [Ze, kt], zf), J("setColorRed", [bn, kt], zf), J("setColorGreen", [Ze, kt], Of), J("setColorGreen", [bn, kt], Of), J("setColorBlue", [Ze, kt], Bf), J("setColorBlue", [bn, kt], Bf), J("rgb", [kt, kt, kt], f2), J("argb", [kt, kt, kt, kt], d2);
}
function hi(t, r, e, n) {
  if (r.value < 0)
    throw new Error("Expecting non-negative number of milliseconds.");
  let o = wn(r.value) / wn(e);
  return Hn(t, o), n && (o = wn(o) % wn(n)), {
    type: Ue,
    value: o
  };
}
const m_ = 1e3, h2 = 60, b_ = 1e3 * 60, p2 = 60, y_ = 1e3 * 60 * 60, g2 = 24, m2 = 1e3 * 60 * 60 * 24, b2 = 1e3 * 60 * 60 * 24 * 7;
function y2(t, r) {
  return hi(t, r, m_, h2);
}
function w2(t, r) {
  return hi(t, r, m_);
}
function v2(t, r) {
  return hi(t, r, b_, p2);
}
function k2(t, r) {
  return hi(t, r, b_);
}
function j2(t, r) {
  return hi(t, r, y_, g2);
}
function E2(t, r) {
  return hi(t, r, y_);
}
function C2(t, r) {
  return hi(t, r, m2);
}
function A2(t, r) {
  return hi(t, r, b2);
}
function V2() {
  J("getIntervalSeconds", [Ue], y2), J("getIntervalTotalSeconds", [Ue], w2), J("getIntervalMinutes", [Ue], v2), J("getIntervalTotalMinutes", [Ue], k2), J("getIntervalHours", [Ue], j2), J("getIntervalTotalHours", [Ue], E2), J("getIntervalTotalDays", [Ue], C2), J("getIntervalTotalWeeks", [Ue], A2);
}
function S2(t, r) {
  let e = t;
  for (let n = 0; n < r.length; ++n) {
    if (!e)
      throw new Error(`Missing property "${r[n]}" in the dict.`);
    const o = e[r[n]];
    if (o === void 0)
      throw new Error(`Missing property "${r[n]}" in the dict.`);
    e = o;
  }
  return e;
}
function pi(t) {
  return (r, e, ...n) => {
    if (n.length === 0)
      throw new Error("Non empty argument list is required.");
    const o = S2(e.value, n.map((i) => i.value));
    return Cl(r, o, t);
  };
}
function xi(t, r) {
  return (e, n, o, ...i) => {
    try {
      return t(e, o, ...i);
    } catch {
      let a = n.value;
      return r === "color" ? a = di(a) : r === "url" && ko(a), {
        type: r,
        value: a
      };
    }
  };
}
const zs = pi(Ze), Os = pi(kt), Bs = pi(Ue), Ls = pi(Zr), Rs = pi(bn), Hs = pi(lo), aa = pi(vr), ua = pi(wr), Lf = xi(zs, Ze), Rf = xi(Os, kt), Hf = xi(Bs, Ue), Wf = xi(Ls, Zr), Cs = xi(Rs, bn), As = xi(Hs, lo);
function D2(t, r, ...e) {
  try {
    return aa(t, r, ...e);
  } catch {
    return {
      type: vr,
      value: []
    };
  }
}
function I2(t, r, ...e) {
  try {
    return ua(t, r, ...e);
  } catch {
    return {
      type: wr,
      value: {}
    };
  }
}
function F2(t, r, e) {
  return {
    type: Zr,
    value: e.value in r.value ? 1 : 0
  };
}
function T2(t, r) {
  return {
    type: Zr,
    value: Object.keys(r.value).length ? 0 : 1
  };
}
function M2(t, r) {
  return {
    type: Ue,
    value: wn(Object.keys(r.value).length)
  };
}
function Uf(t, r) {
  return {
    type: vr,
    value: Object.keys(r.value)
  };
}
function Gf(t, r) {
  return {
    type: vr,
    value: Object.values(r.value)
  };
}
function P2() {
  const t = {
    type: Ze,
    isVararg: !0
  };
  J("getDictString", [wr, t], zs), J("getStringFromDict", [wr, t], zs), J("getDictNumber", [wr, t], Os), J("getNumberFromDict", [wr, t], Os), J("getDictInteger", [wr, t], Bs), J("getIntegerFromDict", [wr, t], Bs), J("getDictBoolean", [wr, t], Ls), J("getBooleanFromDict", [wr, t], Ls), J("getDictColor", [wr, t], Rs), J("getColorFromDict", [wr, t], Rs), J("getDictUrl", [wr, t], Hs), J("getUrlFromDict", [wr, t], Hs), J("getDictOptString", [Ze, wr, t], Lf), J("getOptStringFromDict", [Ze, wr, t], Lf), J("getDictOptNumber", [kt, wr, t], Rf), J("getOptNumberFromDict", [kt, wr, t], Rf), J("getDictOptInteger", [Ue, wr, t], Hf), J("getOptIntegerFromDict", [Ue, wr, t], Hf), J("getDictOptBoolean", [Zr, wr, t], Wf), J("getOptBooleanFromDict", [Zr, wr, t], Wf), J("getDictOptColor", [bn, wr, t], Cs), J("getOptColorFromDict", [bn, wr, t], Cs), J("getDictOptColor", [Ze, wr, t], Cs), J("getOptColorFromDict", [Ze, wr, t], Cs), J("getDictOptUrl", [Ze, wr, t], As), J("getOptUrlFromDict", [Ze, wr, t], As), J("getDictOptUrl", [lo, wr, t], As), J("getOptUrlFromDict", [lo, wr, t], As), J("getDictFromDict", [wr, t], ua), J("getArrayFromDict", [wr, t], aa), J("getOptArrayFromDict", [wr, t], D2), J("getOptDictFromDict", [wr, t], I2), J("len", [wr], M2), J("getDictKeys", [wr], Uf), J("getDictValues", [wr], Gf), qr("getString", [wr, t], zs), qr("getBoolean", [wr, t], Ls), qr("getInteger", [wr, t], Bs), qr("getNumber", [wr, t], Os), qr("getUrl", [wr, t], Hs), qr("getColor", [wr, t], Rs), qr("getArray", [wr, t], aa), qr("getDict", [wr, t], ua), qr("containsKey", [wr, Ze], F2), qr("isEmpty", [wr], T2), qr("getKeys", [wr], Uf), qr("getValues", [wr], Gf);
}
function gi(t, r) {
  return (e, n, o) => {
    if (o.value < 0 || o.value >= n.value.length)
      throw new Error(`Requested index (${o.value}) out of bounds array size (${n.value.length}).`);
    let i = n.value[Number(o.value)], s = typeof i;
    if (t === "array" && !Array.isArray(i) || t !== "array" && s !== t || s === "object" && i === null)
      throw s === "object" && (Array.isArray(i) ? s = "Array" : i === null ? s = "Null" : s = "Dict"), new Error(`Incorrect value type: expected ${ro(r)}, got ${ro(s)}.`);
    if (t === "number" && r === "integer") {
      Hn(e, i);
      try {
        i = wn(i);
      } catch {
        throw new Error("Cannot convert value to integer.");
      }
    }
    return t === "string" && r === "color" && (i = di(i)), t === "string" && r === "url" && ko(i), {
      type: r,
      value: i
    };
  };
}
function $i(t, r) {
  return (e, n, o, i) => {
    try {
      return t(e, n, o);
    } catch {
      let a = i.value;
      return r === "color" ? a = di(a) : r === "url" && ko(a), {
        type: r,
        value: a
      };
    }
  };
}
const Ws = gi("string", "string"), Us = gi("number", "number"), Gs = gi("number", "integer"), Js = gi("boolean", "boolean"), qs = gi("string", "color"), Ks = gi("string", "url"), ca = gi("array", "array"), fa = gi("object", "dict"), Jf = $i(Ws, "string"), qf = $i(Us, "number"), Kf = $i(Gs, "integer"), Yf = $i(Js, "boolean"), Vs = $i(qs, "color"), Ss = $i(Ks, "url");
function N2(t, r, e) {
  try {
    return ca(t, r, e);
  } catch {
    return {
      type: vr,
      value: []
    };
  }
}
function z2(t, r, e) {
  try {
    return fa(t, r, e);
  } catch {
    return {
      type: wr,
      value: {}
    };
  }
}
function O2(t, r) {
  return {
    type: Ue,
    value: wn(r.value.length)
  };
}
function B2(t, r) {
  return {
    type: Zr,
    value: r.value.length === 0 ? 1 : 0
  };
}
function L2(t, r, e) {
  return r.value.length ? {
    type: vr,
    value: r.value.filter((n) => {
      const o = [];
      if (typeof n == "string")
        wo(n) && o.push([{
          type: bn,
          value: n
        }]), k1(n) && o.push([{
          type: lo,
          value: n
        }]), o.push([{
          type: Ze,
          value: n
        }]);
      else if (typeof n == "number")
        Math.round(n) === n && (Hn(t, n), o.push([{
          type: Ue,
          value: wn(n)
        }])), o.push([{
          type: kt,
          value: n
        }]);
      else if (typeof n == "bigint")
        Hn(t, n), o.push([{
          type: Ue,
          value: n
        }]);
      else if (Array.isArray(n))
        o.push([{
          type: vr,
          value: n
        }]);
      else if (typeof n == "object") {
        if (n === null)
          throw new Error("Incorrect value type: Null");
        o.push([{
          type: wr,
          value: n
        }]);
      } else if (typeof n == "boolean")
        o.push([{
          type: Zr,
          value: n ? 1 : 0
        }]);
      else
        throw new Error(`Incorrect value type: ${ro(typeof n)}`);
      let i = {
        type: "missing"
      };
      for (const c of o)
        if (i = d_(e.value, c), "func" in i)
          break;
      let s;
      if ("func" in i)
        s = i.func;
      else {
        const c = e.value[0];
        w_(c.name || "Function", o[0], i, !0);
      }
      const a = s.args[0], l = Cl(
        t,
        n,
        typeof a == "string" ? a : a.type
      ), u = s.cb(t, l);
      if (u.type !== Zr)
        throw new Error("Function must return boolean value.");
      return u.value;
    })
  } : {
    type: vr,
    value: []
  };
}
function R2() {
  J("getArrayString", [
    vr,
    Ue
  ], Ws), J("getStringFromArray", [
    vr,
    Ue
  ], Ws), J("getArrayNumber", [
    vr,
    Ue
  ], Us), J("getNumberFromArray", [
    vr,
    Ue
  ], Us), J("getArrayInteger", [
    vr,
    Ue
  ], Gs), J("getIntegerFromArray", [
    vr,
    Ue
  ], Gs), J("getArrayBoolean", [
    vr,
    Ue
  ], Js), J("getBooleanFromArray", [
    vr,
    Ue
  ], Js), J("getArrayColor", [
    vr,
    Ue
  ], qs), J("getColorFromArray", [
    vr,
    Ue
  ], qs), J("getArrayUrl", [
    vr,
    Ue
  ], Ks), J("getUrlFromArray", [
    vr,
    Ue
  ], Ks), J("getArrayFromArray", [
    vr,
    Ue
  ], ca), J("getDictFromArray", [
    vr,
    Ue
  ], fa), J("getArrayOptString", [
    vr,
    Ue,
    Ze
  ], Jf), J("getOptStringFromArray", [
    vr,
    Ue,
    Ze
  ], Jf), J("getArrayOptNumber", [
    vr,
    Ue,
    kt
  ], qf), J("getOptNumberFromArray", [
    vr,
    Ue,
    kt
  ], qf), J("getArrayOptInteger", [
    vr,
    Ue,
    Ue
  ], Kf), J("getOptIntegerFromArray", [
    vr,
    Ue,
    Ue
  ], Kf), J("getArrayOptBoolean", [
    vr,
    Ue,
    Zr
  ], Yf), J("getOptBooleanFromArray", [
    vr,
    Ue,
    Zr
  ], Yf), J("getArrayOptColor", [
    vr,
    Ue,
    bn
  ], Vs), J("getOptColorFromArray", [
    vr,
    Ue,
    bn
  ], Vs), J("getArrayOptColor", [
    vr,
    Ue,
    Ze
  ], Vs), J("getOptColorFromArray", [
    vr,
    Ue,
    Ze
  ], Vs), J("getArrayOptUrl", [
    vr,
    Ue,
    lo
  ], Ss), J("getOptUrlFromArray", [
    vr,
    Ue,
    lo
  ], Ss), J("getArrayOptUrl", [
    vr,
    Ue,
    Ze
  ], Ss), J("getOptUrlFromArray", [
    vr,
    Ue,
    Ze
  ], Ss), J("getOptArrayFromArray", [
    vr,
    Ue
  ], N2), J("getOptDictFromArray", [
    vr,
    Ue
  ], z2), J("len", [
    vr
  ], O2), qr("getString", [vr, Ue], Ws), qr("getInteger", [vr, Ue], Gs), qr("getNumber", [vr, Ue], Us), qr("getBoolean", [vr, Ue], Js), qr("getUrl", [vr, Ue], Ks), qr("getColor", [vr, Ue], qs), qr("getArray", [vr, Ue], ca), qr("getDict", [vr, Ue], fa), qr("isEmpty", [vr], B2), qr("filter", [vr, v1], L2);
}
function To(t) {
  return (r, e, n) => {
    if (!r.store) {
      if (!n)
        throw new Error("Missing value.");
      return {
        type: t,
        value: n.value
      };
    }
    let o;
    t === "boolean" ? o = "boolean" : t === "number" || t === "integer" ? o = "number" : o = "string";
    let i;
    if (r.store.get ? i = r.store.get(e.value, t) : r.store.getValue && (i = r.store.getValue(e.value, o)), i === void 0) {
      if (!n)
        throw new Error("Missing value.");
      return t === "url" && ko(n.value), {
        type: t,
        value: n.value
      };
    } else t === "url" && ko(i);
    return Cl(r, i, t);
  };
}
function H2() {
  J("getStoredIntegerValue", [Ze, Ue], To(Ue)), J("getStoredNumberValue", [Ze, kt], To(kt)), J("getStoredStringValue", [Ze, Ze], To(Ze)), J("getStoredUrlValue", [Ze, lo], To(lo)), J("getStoredUrlValue", [Ze, Ze], To(lo)), J("getStoredColorValue", [Ze, bn], To(bn)), J("getStoredColorValue", [Ze, Ze], To(bn)), J("getStoredBooleanValue", [Ze, Zr], To(Zr)), J("getStoredArrayValue", [Ze], To(vr)), J("getStoredDictValue", [Ze], To(wr));
}
function W2() {
  return {
    type: kt,
    value: Math.PI
  };
}
function U2(t, r) {
  return {
    type: kt,
    value: r.value / 180 * Math.PI
  };
}
function G2(t, r) {
  return {
    type: kt,
    value: r.value / Math.PI * 180
  };
}
function J2(t, r) {
  return {
    type: kt,
    value: Math.sin(r.value)
  };
}
function q2(t, r) {
  return {
    type: kt,
    value: Math.cos(r.value)
  };
}
function K2(t, r) {
  return {
    type: kt,
    value: Math.tan(r.value)
  };
}
function Y2(t, r) {
  const e = Math.tan(r.value);
  if (Math.abs(e) < 1e-12)
    throw new Error("Cotangent is undefined for the given value.");
  return {
    type: kt,
    value: 1 / e
  };
}
function X2(t, r) {
  return {
    type: kt,
    value: Math.atan(r.value)
  };
}
function Z2(t, r, e) {
  return {
    type: kt,
    value: Math.atan2(r.value, e.value)
  };
}
function Q2(t, r) {
  if (r.value > 1 || r.value < -1)
    throw new Error("Arcsine is undefined for the given value.");
  return {
    type: kt,
    value: Math.asin(r.value)
  };
}
function x2(t, r) {
  if (r.value > 1 || r.value < -1)
    throw new Error("Arccosine is undefined for the given value.");
  return {
    type: kt,
    value: Math.acos(r.value)
  };
}
function $2() {
  J("pi", [], W2), J("toRadians", [kt], U2), J("toDegrees", [kt], G2), J("sin", [kt], J2), J("cos", [kt], q2), J("tan", [kt], K2), J("cot", [kt], Y2), J("atan", [kt], X2), J("atan2", [kt, kt], Z2), J("asin", [kt], Q2), J("acos", [kt], x2);
}
function e3() {
  Yv(), vk(), V2(), zk(), c2(), _2(), P2(), R2(), H2(), $2();
}
e3();
function t3(t, r) {
  return {
    type: Ze,
    value: r.value
  };
}
function r3(t, r) {
  return {
    type: kt,
    value: r.value
  };
}
function n3(t, r) {
  return Hn(t, r.value), {
    type: Ue,
    value: r.value
  };
}
function o3(t, r) {
  return {
    type: Zr,
    value: r.value ? 1 : 0
  };
}
function i3(t, r) {
  const e = tl(Gn(t, r.argument));
  switch (r.operator) {
    case "!":
      if (e.type === Zr)
        return {
          type: Zr,
          value: e.value ? 0 : 1
        };
      Mn(`${r.operator}${yn(e)}`, "A Boolean is expected after a unary not.");
    case "+":
    case "-":
      const n = r.operator === "+" ? 1 : -1;
      if (e.type === Ue) {
        const o = e.value * wn(n);
        return Hn(t, o), {
          type: Ue,
          value: o
        };
      } else {
        if (e.type === kt)
          return {
            type: kt,
            value: e.value * n
          };
        Mn(
          `${r.operator}${yn(e)}`,
          `A Number is expected after a unary ${r.operator === "+" ? "plus" : "minus"}.`
        );
      }
  }
}
function s3(t, r) {
  const e = tl(Gn(t, r.test));
  if (e.type === Zr)
    return e.value ? Gn(t, r.consequent) : Gn(t, r.alternate);
  Mn(
    `${yn(e)} ? ${yn(Gn(t, r.consequent))} : ${yn(Gn(t, r.alternate))}`,
    "Ternary must be called with a Boolean value as a condition."
  );
}
function l3(t, r) {
  try {
    return Gn(t, r.test);
  } catch {
    return Gn(t, r.alternate);
  }
}
function a3(t, r) {
  let e = "";
  if (r.quasis.length === 2 && r.quasis[0].value === "" && r.quasis[1].value === "")
    return Gn(t, r.expressions[0]);
  for (let n = 0; n < r.expressions.length; ++n)
    e += r.quasis[n].value, e += Fi(Gn(t, r.expressions[n]), !0);
  return e += r.quasis[r.quasis.length - 1].value, {
    type: Ze,
    value: e
  };
}
function u3(t, r) {
  const e = tl(Gn(t, r.left));
  if (e.type !== Zr && Mn(
    `${yn(e)} ${r.operator} ...`,
    `'${r.operator}' must be called with boolean operands.`
  ), r.operator === "||" && e.value)
    return e;
  if (r.operator === "&&" && !e.value)
    return {
      type: Zr,
      value: 0
    };
  const n = tl(Gn(t, r.right));
  return n.type !== Zr && Mn(
    `${yn(e)} ${r.operator} ${yn(n)}`,
    `Operator '${r.operator}' cannot be applied to different types: Boolean and ${ro(n.type)}.`
  ), {
    type: Zr,
    value: n.value
  };
}
function c3(t, r, e) {
  let n;
  return r.type === Lr && e.type === Lr ? n = r.value.getTime() === e.value.getTime() : n = r.value === e.value, t === "!=" && (n = !n), {
    type: Zr,
    value: n ? 1 : 0
  };
}
function f3(t, r, e) {
  (r.type !== kt && r.type !== Ue && r.type !== Lr || e.type !== kt && e.type !== Ue && e.type !== Lr) && Mn(
    `${yn(r)} ${t} ${yn(e)}`,
    `Operator '${t}' cannot be applied to ${ro(r.type)} type.`
  );
  let n;
  const o = r.type === Lr ? r.value.getTime() : r.value, i = e.type === Lr ? e.value.getTime() : e.value;
  return t === ">" ? n = o > i : t === ">=" ? n = o >= i : t === "<" ? n = o < i : n = o <= i, {
    type: Zr,
    value: n ? 1 : 0
  };
}
function d3(t, r, e, n) {
  if (e.type !== Ze && e.type !== kt && e.type !== Ue && Mn(
    `${yn(e)} ${r} ${yn(n)}`,
    `Operator '${r}' cannot be applied to ${ro(e.type)} type.`
  ), e.type === Ze)
    return r === "-" && Mn(
      `${yn(e)} - ${yn(n)}`,
      `Operator '${r}' cannot be applied to ${ro(e.type)} type.`
    ), {
      type: Ze,
      value: e.value + n.value
    };
  let o = r === "+" ? e.value + n.value : e.value - n.value;
  if (e.type === Ue)
    try {
      o = Ti(t, o), Hn(t, o);
    } catch (i) {
      Mn(
        `${yn(e)} ${r} ${yn(n)}`,
        i.message
      );
    }
  return {
    type: e.type,
    value: o
  };
}
function _3(t, r, e, n) {
  e.type !== Ue && e.type !== kt && Mn(
    `${yn(e)} ${r} ${yn(n)}`,
    `Operator '${r}' cannot be applied to ${ro(e.type)} type.`
  );
  let o;
  if (r === "*")
    o = e.value * n.value;
  else if (r === "/" || r === "%")
    Number(n.value) === 0 && Mn(
      `${yn(e)} ${r} ${yn(n)}`,
      "Division by zero is not supported."
    ), r === "/" ? o = e.value / n.value : o = e.value % n.value;
  else
    throw new Error(`Unsupported operation ${r}`);
  if (e.type === Ue)
    try {
      o = Ti(t, o), Hn(t, o);
    } catch (i) {
      Mn(
        `${yn(e)} ${r} ${yn(n)}`,
        i.message
      );
    }
  return {
    type: e.type,
    value: o
  };
}
function h3(t, r) {
  const e = r.operator;
  let n = Gn(t, r.left), o = Gn(t, r.right);
  if ((n.type === "number" && o.type === "integer" || n.type === "integer" && o.type === "number") && (n.type === "integer" ? n = $l(n) : o.type === "integer" && (o = $l(o))), n.type !== o.type && Mn(
    `${yn(n)} ${r.operator} ${yn(o)}`,
    `Operator '${e}' cannot be applied to different types: ${ro(n.type)} and ${ro(o.type)}.`
  ), e === "==" || e === "!=")
    return c3(e, n, o);
  if (e === ">" || e === ">=" || e === "<" || e === "<=")
    return f3(e, n, o);
  if (e === "+" || e === "-")
    return d3(t, e, n, o);
  if (e === "/" || e === "*" || e === "%")
    return _3(t, e, n, o);
  throw new Error(`Unsupported operation ${e}`);
}
function sl(t) {
  return t.map(yn).join(", ");
}
function p3(t, r) {
  const e = r.callee.name;
  let n, o = r.arguments.map((a) => Gn(t, a));
  const i = e + ":" + o.map((a) => a.type).join("#");
  let s;
  if (t.customFunctions && (s = ia(t.customFunctions, e, o)), !s || !("func" in s))
    if (na.has(i))
      s = {
        func: na.get(i),
        conversions: 0
      };
    else {
      const a = ia(Ps, e, o);
      ("func" in a || !s || s.type === "missing") && (s = a);
    }
  if (s && (("expected" in s || "type" in s && s.type === "missing") && w_(e, o, s), n = s.func, s.conversions && (o = __(n, o))), !n)
    throw new Error("Function not found");
  try {
    return n.cb(t, ...o);
  } catch (a) {
    if (a && a instanceof Da)
      throw a;
    const l = `${e}(${sl(o)})`;
    Mn(l, a.message);
  }
}
function w_(t, r, e, n = !1) {
  const o = r.map((a) => ro(a.type)).join(", "), i = `${t}(${sl(r)})`, s = n ? E1 : Mn;
  if (e.type === "few" && r.length === 0 && e.hasOverloads)
    s(i, "Function requires non empty argument list.");
  else if (e.type === "many" || e.type === "few" || e.type === "mismatch")
    if (e.hasOverloads)
      s(i, `Function has no matching overload for given argument types: ${o}.`);
    else if (e.type === "many" || e.type === "few")
      e.def.args.some((a) => typeof a == "object" && a.isVararg) ? s(i, `At least ${e.def.args.length} argument(s) expected.`) : s(i, `Exactly ${e.def.args.length} argument(s) expected.`);
    else {
      const a = e.def.args.map((l) => ro(typeof l == "string" ? l : l.type)).join(", ");
      s(i, `Invalid argument type: expected ${a}, got ${o}.`);
    }
  else
    s(i, `Unknown function name: ${t}.`);
}
function g3(t, r) {
  const e = r.method.name;
  let n, o = [r.object, ...r.arguments].map((s) => Gn(t, s));
  const i = e + ":" + o.map((s) => s.type).join("#");
  if (oa.has(i))
    n = oa.get(i);
  else {
    const s = ia(Ns, e, o);
    if ("expected" in s || "type" in s && s.type === "missing") {
      const a = o.slice(1).map((u) => ro(u.type)).join(", "), l = `${e}(${sl(o.slice(1))})`;
      s.type === "few" && o.length === 1 ? Mn(l, "Method requires non empty argument list.") : s.type === "many" ? Mn(l, `Method has no matching overload for given argument types: ${a}.`) : s.type === "few" || s.type === "mismatch" ? Mn(l, `Method has no matching overload for given argument types: ${a}.`) : Mn(l, `Unknown method name: ${e}.`);
    }
    n = s.func, s.conversions && (o = __(n, o));
  }
  if (!n)
    throw new Error("Method not found");
  try {
    return n.cb(t, ...o);
  } catch (s) {
    if (s && s instanceof Da)
      throw s;
    const a = `${e}(${sl(o.slice(1))})`;
    Mn(a, s.message);
  }
}
function m3(t, r) {
  var i;
  const e = r.id.name, n = (i = t.customFunctions) == null ? void 0 : i.get(e);
  if (n)
    return {
      type: "function",
      value: n
    };
  const o = t.variables.get(e);
  if (o)
    return B1(o);
  throw new Error(`Variable '${e}' is missing.`);
}
const Xf = {
  StringLiteral: t3,
  NumberLiteral: r3,
  IntegerLiteral: n3,
  BooleanLiteral: o3,
  UnaryExpression: i3,
  ConditionalExpression: s3,
  TryExpression: l3,
  TemplateLiteral: a3,
  LogicalExpression: u3,
  BinaryExpression: h3,
  CallExpression: p3,
  MethodExpression: g3,
  Variable: m3
};
function Gn(t, r) {
  if (r.type in Xf)
    return Xf[r.type](t, r);
  throw new Error("Unsupported expression");
}
function Ma(t, r, e, n, o) {
  try {
    const i = {
      variables: t,
      customFunctions: r,
      warnings: [],
      store: e,
      weekStartDay: (o == null ? void 0 : o.weekStartDay) || 0
    };
    return {
      result: Gn(i, n),
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
function b3(t, r) {
  return r && r[3] && r[7] ? { type: "ConditionalExpression", test: t, consequent: r[3], alternate: r[7] } : t;
}
function y3(t, r) {
  return r && r[3] ? { type: "TryExpression", test: t, alternate: r[3] } : t;
}
function Ds(t, r) {
  return r.length ? r.reduce((e, n) => ({
    type: "BinaryExpression",
    operator: n[1],
    left: e,
    right: n[3]
  }), t) : t;
}
function Zf(t, r) {
  return r.length ? r.reduce((e, n) => ({
    type: "LogicalExpression",
    operator: n[1],
    left: e,
    right: n[3]
  }), t) : t;
}
function w3(t, r) {
  return r.length ? r.reduce((e, n) => {
    if (!n[5])
      throw new Error("Method expected after .");
    return {
      type: "MethodExpression",
      object: e,
      method: n[3],
      arguments: n[5][2]
    };
  }, t) : t;
}
function v3(t) {
  return t === "true" || t === "false" ? { type: "BooleanLiteral", value: t === "true" } : { type: "Variable", id: { type: "Identifier", name: t } };
}
function Qf(t) {
  if (t.every((e) => typeof e == "string"))
    return { type: "StringLiteral", value: t.join("") };
  let r = t.reduce((e, n) => (typeof n == "string" && typeof e[e.length - 1] == "string" ? e[e.length - 1] += n : e.push(n), e), []).reduce((e, n) => (typeof n == "string" ? e.quasis.push({ type: "StringLiteral", value: n }) : (e.quasis.length === e.expressions.length && e.quasis.push({ type: "StringLiteral", value: "" }), e.expressions.push(n)), e), {
    type: "TemplateLiteral",
    quasis: [],
    expressions: []
  });
  return r.quasis.length === r.expressions.length && r.quasis.push({ type: "StringLiteral", value: "" }), r;
}
function k3(t) {
  try {
    return wn(t);
  } catch {
    throw new Error(`Value ${t} can't be converted to Integer type.`);
  }
}
function xf(t) {
  if (t === "'" || t === "\\")
    return t;
  throw new Error("Incorrect string escape");
}
function j3(t, r) {
  function e() {
    this.constructor = t;
  }
  e.prototype = r.prototype, t.prototype = new e();
}
function Ki(t, r, e, n) {
  var o = Error.call(this, t);
  return Object.setPrototypeOf && Object.setPrototypeOf(o, Ki.prototype), o.expected = r, o.found = e, o.location = n, o.name = "SyntaxError", o;
}
j3(Ki, Error);
function Wl(t, r, e) {
  return e = e || " ", t.length > r ? t : (r -= t.length, e += e.repeat(r), t + e.slice(0, r));
}
Ki.prototype.format = function(t) {
  var r = "Error: " + this.message;
  if (this.location) {
    var e = null, n;
    for (n = 0; n < t.length; n++)
      if (t[n].source === this.location.source) {
        e = t[n].text.split(/\r\n|\n|\r/g);
        break;
      }
    var o = this.location.start, i = this.location.source && typeof this.location.source.offset == "function" ? this.location.source.offset(o) : o, s = this.location.source + ":" + i.line + ":" + i.column;
    if (e) {
      var a = this.location.end, l = Wl("", i.line.toString().length, " "), u = e[o.line - 1], c = o.line === a.line ? a.column : u.length + 1, f = c - o.column || 1;
      r += `
 --> ` + s + `
` + l + ` |
` + i.line + " | " + u + `
` + l + " | " + Wl("", o.column - 1, " ") + Wl("", f, "^");
    } else
      r += `
 at ` + s;
  }
  return r;
};
Ki.buildMessage = function(t, r) {
  var e = {
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
    return e[u.type](u);
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
  return "Expected " + a(t) + " but " + l(r) + " found.";
};
function v_(t, r) {
  r = r !== void 0 ? r : {};
  var e = {}, n = r.grammarSource, o = { start: Kr, JsonStringContents: _n }, i = Kr, s = "@{", a = "}", l = "@{}", u = "\\", c = "?", f = ":", _ = "!:", p = "||", m = "&&", h = "==", y = "!=", w = ">=", D = ">", z = "<=", O = "<", $ = "+", ue = "-", M = "/", Y = "*", se = "%", C = "!", I = ".", P = "(", B = ")", q = ",", pe = "'", _e = "e", Ae = "E", be = /^[^}]/, Ie = /^[^'}]/, x = /^[0-9]/, Ye = /^[a-zA-Z_]/, Qe = /^[a-zA-Z_0-9]/, xe = /^[ \t\r\n]/, we = Ke("@{", !1), Te = Ke("}", !1), ge = Ke("@{}", !1), ye = Ke("\\", !1), he = Yt(), te = ut(["}"], !0, !1), fe = Ke("?", !1), re = Ke(":", !1), ve = Ke("!:", !1), qe = Ke("||", !1), Xe = Ke("&&", !1), ee = Ke("==", !1), He = Ke("!=", !1), Oe = Ke(">=", !1), lt = Ke(">", !1), _t = Ke("<=", !1), it = Ke("<", !1), Et = Ke("+", !1), at = Ke("-", !1), zt = Ke("/", !1), ht = Ke("*", !1), Z = Ke("%", !1), de = Ke("!", !1), ct = Ke(".", !1), Be = Ke("(", !1), T = Ke(")", !1), St = Ke(",", !1), dt = cr("string"), Ft = Ke("'", !1), Pt = ut(["'", "}"], !0, !1), st = cr("integer"), Q = ut([["0", "9"]], !1, !1), Dt = cr("number"), Ot = Ke("e", !1), nr = Ke("E", !1), er = ut([["a", "z"], ["A", "Z"], "_"], !1, !1), Ve = ut([["a", "z"], ["A", "Z"], "_", ["0", "9"]], !1, !1), Ge = cr("whitespace"), yt = ut([" ", "	", "\r", `
`], !1, !1), Pe = function(b) {
    return b;
  }, tt = function(b) {
    return Qf(b);
  }, Le = function(b) {
    return b;
  }, Tt = function() {
    return "";
  }, We = function() {
    return Rt();
  }, vt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, qt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, Nt = function(b) {
    return b;
  }, ar = function(b) {
    return xf(b);
  }, Fe = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, At = function(b, F) {
    return b3(b, F);
  }, ur = function(b, F) {
    return y3(b, F);
  }, sr = function(b, F) {
    return Zf(b, F);
  }, lr = function(b, F) {
    return Zf(b, F);
  }, hr = function(b, F) {
    return Ds(b, F);
  }, Er = function(b, F) {
    return Ds(b, F);
  }, Bt = function(b, F) {
    return Ds(b, F);
  }, kr = function(b, F) {
    return Ds(b, F);
  }, Ut = function(b) {
    return b;
  }, wt = function(b) {
    return b;
  }, or = function(b, F) {
    return { type: "UnaryExpression", operator: b, argument: F };
  }, le = function() {
    throw new Error("Incorrect unary operator");
  }, Cr = function(b, F) {
    return w3(b, F);
  }, Ar = function(b, F) {
    return { type: "CallExpression", callee: b, arguments: F };
  }, Vt = function(b, F) {
    return [b, ...F];
  }, Pr = function(b) {
    return b;
  }, Ur = function(b) {
    return b;
  }, fr = function(b) {
    return Qf(b);
  }, ft = function(b) {
    return b;
  }, It = function() {
    return "";
  }, Kt = function() {
    return Rt();
  }, tr = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, rt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, mt = function(b) {
    return b;
  }, ce = function(b) {
    return xf(b);
  }, Ct = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, ir = function() {
    return { type: "IntegerLiteral", value: k3(Rt()) };
  }, Gt = function() {
    return { type: "NumberLiteral", value: parseFloat(Rt()) };
  }, jr = function() {
    return { type: "NumberLiteral", value: parseFloat(Rt()) };
  }, E = function() {
    const b = Rt();
    if (/\.\./.test(b) || /\.$/.test(b))
      throw new Error("Unexpected token: .");
    return v3(b);
  }, ie = function() {
    return { type: "Identifier", name: Rt() };
  }, d = 0, R = 0, Ce = [{ line: 1, column: 1 }], Je = 0, ke = [], L = 0, Lt;
  if ("startRule" in r) {
    if (!(r.startRule in o))
      throw new Error(`Can't start parsing from rule "` + r.startRule + '".');
    i = o[r.startRule];
  }
  function Rt() {
    return t.substring(R, d);
  }
  function Ke(b, F) {
    return { type: "literal", text: b, ignoreCase: F };
  }
  function ut(b, F, ne) {
    return { type: "class", parts: b, inverted: F, ignoreCase: ne };
  }
  function Yt() {
    return { type: "any" };
  }
  function Ir() {
    return { type: "end" };
  }
  function cr(b) {
    return { type: "other", description: b };
  }
  function Nr(b) {
    var F = Ce[b], ne;
    if (F)
      return F;
    for (ne = b - 1; !Ce[ne]; )
      ne--;
    for (F = Ce[ne], F = {
      line: F.line,
      column: F.column
    }; ne < b; )
      t.charCodeAt(ne) === 10 ? (F.line++, F.column = 1) : F.column++, ne++;
    return Ce[b] = F, F;
  }
  function En(b, F, ne) {
    var H = Nr(b), De = Nr(F), Ee = {
      source: n,
      start: {
        offset: b,
        line: H.line,
        column: H.column
      },
      end: {
        offset: F,
        line: De.line,
        column: De.column
      }
    };
    return Ee;
  }
  function Se(b) {
    d < Je || (d > Je && (Je = d, ke = []), ke.push(b));
  }
  function Qr(b, F, ne) {
    return new Ki(
      Ki.buildMessage(b, F),
      b,
      F,
      ne
    );
  }
  function Kr() {
    var b, F;
    return b = d, Zt(), F = A(), F !== e ? (Zt(), R = b, b = Pe(F)) : (d = b, b = e), b;
  }
  function _n() {
    var b, F, ne;
    for (b = d, F = [], ne = v(); ne !== e; )
      F.push(ne), ne = v();
    return R = b, F = tt(F), b = F, b;
  }
  function v() {
    var b, F, ne, H, De;
    if (b = d, t.substr(d, 2) === s ? (F = s, d += 2) : (F = e, L === 0 && Se(we)), F !== e ? (ne = Zt(), H = A(), H !== e ? (Zt(), t.charCodeAt(d) === 125 ? (De = a, d++) : (De = e, L === 0 && Se(Te)), De !== e ? (R = b, b = Le(H)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.substr(d, 3) === l ? (F = l, d += 3) : (F = e, L === 0 && Se(ge)), F !== e && (R = b, F = Tt()), b = F, b === e && (b = d, F = d, L++, t.charCodeAt(d) === 92 ? (ne = u, d++) : (ne = e, L === 0 && Se(ye)), ne === e && (t.substr(d, 2) === s ? (ne = s, d += 2) : (ne = e, L === 0 && Se(we))), L--, ne === e ? F = void 0 : (d = F, F = e), F !== e ? (t.length > d ? (ne = t.charAt(d), d++) : (ne = e, L === 0 && Se(he)), ne !== e ? (R = b, b = We()) : (d = b, b = e)) : (d = b, b = e), b === e))) {
      if (b = d, t.substr(d, 2) === s ? (F = s, d += 2) : (F = e, L === 0 && Se(we)), F !== e) {
        if (ne = [], be.test(t.charAt(d)) ? (H = t.charAt(d), d++) : (H = e, L === 0 && Se(te)), H !== e)
          for (; H !== e; )
            ne.push(H), be.test(t.charAt(d)) ? (H = t.charAt(d), d++) : (H = e, L === 0 && Se(te));
        else
          ne = e;
        ne !== e ? (t.charCodeAt(d) === 125 ? (H = a, d++) : (H = e, L === 0 && Se(Te)), H !== e ? (R = b, b = vt()) : (d = b, b = e)) : (d = b, b = e);
      } else
        d = b, b = e;
      b === e && (b = d, t.substr(d, 2) === s ? (F = s, d += 2) : (F = e, L === 0 && Se(we)), F !== e && (R = b, F = qt()), b = F, b === e && (b = d, t.charCodeAt(d) === 92 ? (F = u, d++) : (F = e, L === 0 && Se(ye)), F !== e ? (t.substr(d, 2) === s ? (ne = s, d += 2) : (ne = e, L === 0 && Se(we)), ne !== e ? (R = b, b = Nt(ne)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (F = u, d++) : (F = e, L === 0 && Se(ye)), F !== e ? (t.length > d ? (ne = t.charAt(d), d++) : (ne = e, L === 0 && Se(he)), ne !== e ? (R = b, b = ar(ne)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (F = u, d++) : (F = e, L === 0 && Se(ye)), F !== e && (R = b, F = Fe()), b = F))));
    }
    return b;
  }
  function A() {
    var b, F, ne, H, De, Ee, Qt, xt, xr, Br, Jr;
    return b = d, F = S(), F !== e ? (ne = d, H = Zt(), t.charCodeAt(d) === 63 ? (De = c, d++) : (De = e, L === 0 && Se(fe)), De !== e ? (Ee = Zt(), Qt = A(), Qt !== e ? (xt = Zt(), t.charCodeAt(d) === 58 ? (xr = f, d++) : (xr = e, L === 0 && Se(re)), xr !== e ? (Br = Zt(), Jr = A(), Jr !== e ? (H = [H, De, Ee, Qt, xt, xr, Br, Jr], ne = H) : (d = ne, ne = e)) : (d = ne, ne = e)) : (d = ne, ne = e)) : (d = ne, ne = e), ne === e && (ne = null), R = b, b = At(F, ne)) : (d = b, b = e), b;
  }
  function S() {
    var b, F, ne, H, De, Ee, Qt;
    return b = d, F = ae(), F !== e ? (ne = d, H = Zt(), t.substr(d, 2) === _ ? (De = _, d += 2) : (De = e, L === 0 && Se(ve)), De !== e ? (Ee = Zt(), Qt = A(), Qt !== e ? (H = [H, De, Ee, Qt], ne = H) : (d = ne, ne = e)) : (d = ne, ne = e), ne === e && (ne = null), R = b, b = ur(F, ne)) : (d = b, b = e), b;
  }
  function ae() {
    var b, F, ne, H, De, Ee, Qt, xt;
    if (b = d, F = W(), F !== e) {
      for (ne = [], H = d, De = Zt(), t.substr(d, 2) === p ? (Ee = p, d += 2) : (Ee = e, L === 0 && Se(qe)), Ee !== e ? (Qt = Zt(), xt = W(), xt !== e ? (De = [De, Ee, Qt, xt], H = De) : (d = H, H = e)) : (d = H, H = e); H !== e; )
        ne.push(H), H = d, De = Zt(), t.substr(d, 2) === p ? (Ee = p, d += 2) : (Ee = e, L === 0 && Se(qe)), Ee !== e ? (Qt = Zt(), xt = W(), xt !== e ? (De = [De, Ee, Qt, xt], H = De) : (d = H, H = e)) : (d = H, H = e);
      R = b, b = sr(F, ne);
    } else
      d = b, b = e;
    return b;
  }
  function W() {
    var b, F, ne, H, De, Ee, Qt, xt;
    if (b = d, F = ot(), F !== e) {
      for (ne = [], H = d, De = Zt(), t.substr(d, 2) === m ? (Ee = m, d += 2) : (Ee = e, L === 0 && Se(Xe)), Ee !== e ? (Qt = Zt(), xt = ot(), xt !== e ? (De = [De, Ee, Qt, xt], H = De) : (d = H, H = e)) : (d = H, H = e); H !== e; )
        ne.push(H), H = d, De = Zt(), t.substr(d, 2) === m ? (Ee = m, d += 2) : (Ee = e, L === 0 && Se(Xe)), Ee !== e ? (Qt = Zt(), xt = ot(), xt !== e ? (De = [De, Ee, Qt, xt], H = De) : (d = H, H = e)) : (d = H, H = e);
      R = b, b = lr(F, ne);
    } else
      d = b, b = e;
    return b;
  }
  function ot() {
    var b, F, ne, H, De, Ee, Qt, xt;
    if (b = d, F = Ne(), F !== e) {
      for (ne = [], H = d, De = Zt(), t.substr(d, 2) === h ? (Ee = h, d += 2) : (Ee = e, L === 0 && Se(ee)), Ee === e && (t.substr(d, 2) === y ? (Ee = y, d += 2) : (Ee = e, L === 0 && Se(He))), Ee !== e ? (Qt = Zt(), xt = Ne(), xt !== e ? (De = [De, Ee, Qt, xt], H = De) : (d = H, H = e)) : (d = H, H = e); H !== e; )
        ne.push(H), H = d, De = Zt(), t.substr(d, 2) === h ? (Ee = h, d += 2) : (Ee = e, L === 0 && Se(ee)), Ee === e && (t.substr(d, 2) === y ? (Ee = y, d += 2) : (Ee = e, L === 0 && Se(He))), Ee !== e ? (Qt = Zt(), xt = Ne(), xt !== e ? (De = [De, Ee, Qt, xt], H = De) : (d = H, H = e)) : (d = H, H = e);
      R = b, b = hr(F, ne);
    } else
      d = b, b = e;
    return b;
  }
  function Ne() {
    var b, F, ne, H, De, Ee, Qt, xt;
    if (b = d, F = rr(), F !== e) {
      for (ne = [], H = d, De = Zt(), t.substr(d, 2) === w ? (Ee = w, d += 2) : (Ee = e, L === 0 && Se(Oe)), Ee === e && (t.charCodeAt(d) === 62 ? (Ee = D, d++) : (Ee = e, L === 0 && Se(lt)), Ee === e && (t.substr(d, 2) === z ? (Ee = z, d += 2) : (Ee = e, L === 0 && Se(_t)), Ee === e && (t.charCodeAt(d) === 60 ? (Ee = O, d++) : (Ee = e, L === 0 && Se(it))))), Ee !== e ? (Qt = Zt(), xt = rr(), xt !== e ? (De = [De, Ee, Qt, xt], H = De) : (d = H, H = e)) : (d = H, H = e); H !== e; )
        ne.push(H), H = d, De = Zt(), t.substr(d, 2) === w ? (Ee = w, d += 2) : (Ee = e, L === 0 && Se(Oe)), Ee === e && (t.charCodeAt(d) === 62 ? (Ee = D, d++) : (Ee = e, L === 0 && Se(lt)), Ee === e && (t.substr(d, 2) === z ? (Ee = z, d += 2) : (Ee = e, L === 0 && Se(_t)), Ee === e && (t.charCodeAt(d) === 60 ? (Ee = O, d++) : (Ee = e, L === 0 && Se(it))))), Ee !== e ? (Qt = Zt(), xt = rr(), xt !== e ? (De = [De, Ee, Qt, xt], H = De) : (d = H, H = e)) : (d = H, H = e);
      R = b, b = Er(F, ne);
    } else
      d = b, b = e;
    return b;
  }
  function rr() {
    var b, F, ne, H, De, Ee, Qt, xt;
    if (b = d, F = Mt(), F !== e) {
      for (ne = [], H = d, De = Zt(), t.charCodeAt(d) === 43 ? (Ee = $, d++) : (Ee = e, L === 0 && Se(Et)), Ee === e && (t.charCodeAt(d) === 45 ? (Ee = ue, d++) : (Ee = e, L === 0 && Se(at))), Ee !== e ? (Qt = Zt(), xt = Mt(), xt !== e ? (De = [De, Ee, Qt, xt], H = De) : (d = H, H = e)) : (d = H, H = e); H !== e; )
        ne.push(H), H = d, De = Zt(), t.charCodeAt(d) === 43 ? (Ee = $, d++) : (Ee = e, L === 0 && Se(Et)), Ee === e && (t.charCodeAt(d) === 45 ? (Ee = ue, d++) : (Ee = e, L === 0 && Se(at))), Ee !== e ? (Qt = Zt(), xt = Mt(), xt !== e ? (De = [De, Ee, Qt, xt], H = De) : (d = H, H = e)) : (d = H, H = e);
      R = b, b = Bt(F, ne);
    } else
      d = b, b = e;
    return b;
  }
  function Mt() {
    var b, F, ne, H, De, Ee, Qt, xt;
    if (b = d, F = U(), F !== e) {
      for (ne = [], H = d, De = Zt(), t.charCodeAt(d) === 47 ? (Ee = M, d++) : (Ee = e, L === 0 && Se(zt)), Ee === e && (t.charCodeAt(d) === 42 ? (Ee = Y, d++) : (Ee = e, L === 0 && Se(ht)), Ee === e && (t.charCodeAt(d) === 37 ? (Ee = se, d++) : (Ee = e, L === 0 && Se(Z)))), Ee !== e ? (Qt = Zt(), xt = U(), xt !== e ? (De = [De, Ee, Qt, xt], H = De) : (d = H, H = e)) : (d = H, H = e); H !== e; )
        ne.push(H), H = d, De = Zt(), t.charCodeAt(d) === 47 ? (Ee = M, d++) : (Ee = e, L === 0 && Se(zt)), Ee === e && (t.charCodeAt(d) === 42 ? (Ee = Y, d++) : (Ee = e, L === 0 && Se(ht)), Ee === e && (t.charCodeAt(d) === 37 ? (Ee = se, d++) : (Ee = e, L === 0 && Se(Z)))), Ee !== e ? (Qt = Zt(), xt = U(), xt !== e ? (De = [De, Ee, Qt, xt], H = De) : (d = H, H = e)) : (d = H, H = e);
      R = b, b = kr(F, ne);
    } else
      d = b, b = e;
    return b;
  }
  function U() {
    var b, F, ne, H;
    return b = d, F = d, L++, t.charCodeAt(d) === 45 ? (ne = ue, d++) : (ne = e, L === 0 && Se(at)), L--, ne !== e ? (d = F, F = void 0) : F = e, F !== e ? (ne = Kn(), ne !== e ? (R = b, b = Ut(ne)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, F = d, L++, t.charCodeAt(d) === 45 ? (ne = ue, d++) : (ne = e, L === 0 && Se(at)), L--, ne !== e ? (d = F, F = void 0) : F = e, F !== e ? (ne = Wn(), ne !== e ? (R = b, b = wt(ne)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 33 ? (F = C, d++) : (F = e, L === 0 && Se(de)), F === e && (t.charCodeAt(d) === 43 ? (F = $, d++) : (F = e, L === 0 && Se(Et)), F === e && (t.charCodeAt(d) === 45 ? (F = ue, d++) : (F = e, L === 0 && Se(at)))), F !== e ? (ne = Zt(), H = $t(), H === e && (H = pt()), H !== e ? (R = b, b = or(F, H)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = pt()))), b;
  }
  function $t() {
    var b, F;
    return b = d, t.charCodeAt(d) === 43 ? (F = $, d++) : (F = e, L === 0 && Se(Et)), F === e && (t.charCodeAt(d) === 45 ? (F = ue, d++) : (F = e, L === 0 && Se(at))), F !== e && (R = b, F = le()), b = F, b;
  }
  function pt() {
    var b, F, ne, H, De, Ee, Qt, xt, xr, Br, Jr, jo, ao, uo, io;
    if (b = d, F = Sr(), F !== e) {
      for (ne = [], H = d, De = Zt(), t.charCodeAt(d) === 46 ? (Ee = I, d++) : (Ee = e, L === 0 && Se(ct)), Ee !== e ? (Qt = Zt(), xt = Ln(), xt !== e ? (xr = Zt(), Br = d, t.charCodeAt(d) === 40 ? (Jr = P, d++) : (Jr = e, L === 0 && Se(Be)), Jr !== e ? (jo = Zt(), ao = Or(), ao !== e ? (uo = Zt(), t.charCodeAt(d) === 41 ? (io = B, d++) : (io = e, L === 0 && Se(T)), io !== e ? (Jr = [Jr, jo, ao, uo, io], Br = Jr) : (d = Br, Br = e)) : (d = Br, Br = e)) : (d = Br, Br = e), Br === e && (Br = null), De = [De, Ee, Qt, xt, xr, Br], H = De) : (d = H, H = e)) : (d = H, H = e); H !== e; )
        ne.push(H), H = d, De = Zt(), t.charCodeAt(d) === 46 ? (Ee = I, d++) : (Ee = e, L === 0 && Se(ct)), Ee !== e ? (Qt = Zt(), xt = Ln(), xt !== e ? (xr = Zt(), Br = d, t.charCodeAt(d) === 40 ? (Jr = P, d++) : (Jr = e, L === 0 && Se(Be)), Jr !== e ? (jo = Zt(), ao = Or(), ao !== e ? (uo = Zt(), t.charCodeAt(d) === 41 ? (io = B, d++) : (io = e, L === 0 && Se(T)), io !== e ? (Jr = [Jr, jo, ao, uo, io], Br = Jr) : (d = Br, Br = e)) : (d = Br, Br = e)) : (d = Br, Br = e), Br === e && (Br = null), De = [De, Ee, Qt, xt, xr, Br], H = De) : (d = H, H = e)) : (d = H, H = e);
      R = b, b = Cr(F, ne);
    } else
      d = b, b = e;
    return b;
  }
  function Sr() {
    var b, F, ne, H, De;
    return b = d, F = Ln(), F !== e ? (Zt(), t.charCodeAt(d) === 40 ? (ne = P, d++) : (ne = e, L === 0 && Se(Be)), ne !== e ? (Zt(), H = Or(), H !== e ? (Zt(), t.charCodeAt(d) === 41 ? (De = B, d++) : (De = e, L === 0 && Se(T)), De !== e ? (R = b, b = Ar(F, H)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = Cn()), b;
  }
  function Or() {
    var b, F, ne, H, De, Ee;
    if (b = d, F = A(), F !== e) {
      for (ne = [], H = d, Zt(), t.charCodeAt(d) === 44 ? (De = q, d++) : (De = e, L === 0 && Se(St)), De !== e ? (Zt(), Ee = A(), Ee !== e ? H = Ee : (d = H, H = e)) : (d = H, H = e); H !== e; )
        ne.push(H), H = d, Zt(), t.charCodeAt(d) === 44 ? (De = q, d++) : (De = e, L === 0 && Se(St)), De !== e ? (Zt(), Ee = A(), Ee !== e ? H = Ee : (d = H, H = e)) : (d = H, H = e);
      R = b, b = Vt(F, ne);
    } else
      d = b, b = e;
    return b === e && (b = Zt()), b;
  }
  function Cn() {
    var b, F, ne, H;
    return b = ho(), b === e && (b = on(), b === e && (b = Kn(), b === e && (b = Wn(), b === e && (b = d, t.charCodeAt(d) === 40 ? (F = P, d++) : (F = e, L === 0 && Se(Be)), F !== e ? (Zt(), ne = A(), ne !== e ? (Zt(), t.charCodeAt(d) === 41 ? (H = B, d++) : (H = e, L === 0 && Se(T)), H !== e ? (R = b, b = Pr(ne)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e))))), b;
  }
  function on() {
    var b, F, ne, H;
    return L++, b = d, t.charCodeAt(d) === 39 ? (F = pe, d++) : (F = e, L === 0 && Se(Ft)), F !== e ? (ne = Yr(), t.charCodeAt(d) === 39 ? (H = pe, d++) : (H = e, L === 0 && Se(Ft)), H !== e ? (R = b, b = Ur(ne)) : (d = b, b = e)) : (d = b, b = e), L--, b === e && (F = e, L === 0 && Se(dt)), b;
  }
  function Yr() {
    var b, F, ne;
    for (b = d, F = [], ne = cn(); ne !== e; )
      F.push(ne), ne = cn();
    return R = b, F = fr(F), b = F, b;
  }
  function cn() {
    var b, F, ne, H, De;
    if (b = d, t.substr(d, 2) === s ? (F = s, d += 2) : (F = e, L === 0 && Se(we)), F !== e ? (ne = Zt(), H = A(), H !== e ? (Zt(), t.charCodeAt(d) === 125 ? (De = a, d++) : (De = e, L === 0 && Se(Te)), De !== e ? (R = b, b = ft(H)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.substr(d, 3) === l ? (F = l, d += 3) : (F = e, L === 0 && Se(ge)), F !== e && (R = b, F = It()), b = F, b === e && (b = d, F = d, L++, t.charCodeAt(d) === 92 ? (ne = u, d++) : (ne = e, L === 0 && Se(ye)), ne === e && (t.charCodeAt(d) === 39 ? (ne = pe, d++) : (ne = e, L === 0 && Se(Ft)), ne === e && (t.substr(d, 2) === s ? (ne = s, d += 2) : (ne = e, L === 0 && Se(we)))), L--, ne === e ? F = void 0 : (d = F, F = e), F !== e ? (t.length > d ? (ne = t.charAt(d), d++) : (ne = e, L === 0 && Se(he)), ne !== e ? (R = b, b = Kt()) : (d = b, b = e)) : (d = b, b = e), b === e))) {
      if (b = d, t.substr(d, 2) === s ? (F = s, d += 2) : (F = e, L === 0 && Se(we)), F !== e) {
        if (ne = [], Ie.test(t.charAt(d)) ? (H = t.charAt(d), d++) : (H = e, L === 0 && Se(Pt)), H !== e)
          for (; H !== e; )
            ne.push(H), Ie.test(t.charAt(d)) ? (H = t.charAt(d), d++) : (H = e, L === 0 && Se(Pt));
        else
          ne = e;
        ne !== e ? (t.charCodeAt(d) === 125 ? (H = a, d++) : (H = e, L === 0 && Se(Te)), H !== e ? (R = b, b = tr()) : (d = b, b = e)) : (d = b, b = e);
      } else
        d = b, b = e;
      b === e && (b = d, t.substr(d, 2) === s ? (F = s, d += 2) : (F = e, L === 0 && Se(we)), F !== e && (R = b, F = rt()), b = F, b === e && (b = d, t.charCodeAt(d) === 92 ? (F = u, d++) : (F = e, L === 0 && Se(ye)), F !== e ? (t.substr(d, 2) === s ? (ne = s, d += 2) : (ne = e, L === 0 && Se(we)), ne !== e ? (R = b, b = mt(ne)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (F = u, d++) : (F = e, L === 0 && Se(ye)), F !== e ? (t.length > d ? (ne = t.charAt(d), d++) : (ne = e, L === 0 && Se(he)), ne !== e ? (R = b, b = ce(ne)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (F = u, d++) : (F = e, L === 0 && Se(ye)), F !== e && (R = b, F = Ct()), b = F))));
    }
    return b;
  }
  function Wn() {
    var b, F, ne;
    if (L++, b = d, t.charCodeAt(d) === 45 ? d++ : L === 0 && Se(at), F = [], x.test(t.charAt(d)) ? (ne = t.charAt(d), d++) : (ne = e, L === 0 && Se(Q)), ne !== e)
      for (; ne !== e; )
        F.push(ne), x.test(t.charAt(d)) ? (ne = t.charAt(d), d++) : (ne = e, L === 0 && Se(Q));
    else
      F = e;
    return F !== e ? (R = b, b = ir()) : (d = b, b = e), L--, b === e && L === 0 && Se(st), b;
  }
  function Kn() {
    var b, F, ne, H, De, Ee, Qt, xt, xr;
    for (L++, b = d, t.charCodeAt(d) === 45 ? d++ : L === 0 && Se(at), F = [], x.test(t.charAt(d)) ? (ne = t.charAt(d), d++) : (ne = e, L === 0 && Se(Q)); ne !== e; )
      F.push(ne), x.test(t.charAt(d)) ? (ne = t.charAt(d), d++) : (ne = e, L === 0 && Se(Q));
    if (t.charCodeAt(d) === 46 ? (ne = I, d++) : (ne = e, L === 0 && Se(ct)), ne !== e) {
      if (H = [], x.test(t.charAt(d)) ? (De = t.charAt(d), d++) : (De = e, L === 0 && Se(Q)), De !== e)
        for (; De !== e; )
          H.push(De), x.test(t.charAt(d)) ? (De = t.charAt(d), d++) : (De = e, L === 0 && Se(Q));
      else
        H = e;
      if (H !== e) {
        if (De = d, t.charCodeAt(d) === 101 ? (Ee = _e, d++) : (Ee = e, L === 0 && Se(Ot)), Ee === e && (t.charCodeAt(d) === 69 ? (Ee = Ae, d++) : (Ee = e, L === 0 && Se(nr))), Ee !== e) {
          if (t.charCodeAt(d) === 43 ? (Qt = $, d++) : (Qt = e, L === 0 && Se(Et)), Qt === e && (t.charCodeAt(d) === 45 ? (Qt = ue, d++) : (Qt = e, L === 0 && Se(at))), Qt === e && (Qt = null), xt = [], x.test(t.charAt(d)) ? (xr = t.charAt(d), d++) : (xr = e, L === 0 && Se(Q)), xr !== e)
            for (; xr !== e; )
              xt.push(xr), x.test(t.charAt(d)) ? (xr = t.charAt(d), d++) : (xr = e, L === 0 && Se(Q));
          else
            xt = e;
          xt !== e ? (Ee = [Ee, Qt, xt], De = Ee) : (d = De, De = e);
        } else
          d = De, De = e;
        De === e && (De = null), R = b, b = Gt();
      } else
        d = b, b = e;
    } else
      d = b, b = e;
    if (b === e) {
      if (b = d, t.charCodeAt(d) === 45 ? d++ : L === 0 && Se(at), F = [], x.test(t.charAt(d)) ? (ne = t.charAt(d), d++) : (ne = e, L === 0 && Se(Q)), ne !== e)
        for (; ne !== e; )
          F.push(ne), x.test(t.charAt(d)) ? (ne = t.charAt(d), d++) : (ne = e, L === 0 && Se(Q));
      else
        F = e;
      if (F !== e)
        if (t.charCodeAt(d) === 101 ? (ne = _e, d++) : (ne = e, L === 0 && Se(Ot)), ne === e && (t.charCodeAt(d) === 69 ? (ne = Ae, d++) : (ne = e, L === 0 && Se(nr))), ne !== e) {
          if (t.charCodeAt(d) === 43 ? (H = $, d++) : (H = e, L === 0 && Se(Et)), H === e && (t.charCodeAt(d) === 45 ? (H = ue, d++) : (H = e, L === 0 && Se(at))), H === e && (H = null), De = [], x.test(t.charAt(d)) ? (Ee = t.charAt(d), d++) : (Ee = e, L === 0 && Se(Q)), Ee !== e)
            for (; Ee !== e; )
              De.push(Ee), x.test(t.charAt(d)) ? (Ee = t.charAt(d), d++) : (Ee = e, L === 0 && Se(Q));
          else
            De = e;
          De !== e ? (R = b, b = jr()) : (d = b, b = e);
        } else
          d = b, b = e;
      else
        d = b, b = e;
    }
    return L--, b === e && L === 0 && Se(Dt), b;
  }
  function ho() {
    var b, F, ne, H, De, Ee, Qt, xt, xr, Br, Jr;
    if (b = d, Ye.test(t.charAt(d)) ? (F = t.charAt(d), d++) : (F = e, L === 0 && Se(er)), F !== e) {
      if (ne = [], H = [], Qe.test(t.charAt(d)) ? (De = t.charAt(d), d++) : (De = e, L === 0 && Se(Ve)), De !== e)
        for (; De !== e; )
          H.push(De), Qe.test(t.charAt(d)) ? (De = t.charAt(d), d++) : (De = e, L === 0 && Se(Ve));
      else
        H = e;
      for (H === e && (H = d, t.charCodeAt(d) === 46 ? (De = I, d++) : (De = e, L === 0 && Se(ct)), De !== e ? (Ee = d, L++, Qt = d, xt = Zt(), xr = Ln(), xr !== e ? (Br = Zt(), t.charCodeAt(d) === 40 ? (Jr = P, d++) : (Jr = e, L === 0 && Se(Be)), Jr !== e ? (xt = [xt, xr, Br, Jr], Qt = xt) : (d = Qt, Qt = e)) : (d = Qt, Qt = e), L--, Qt === e ? Ee = void 0 : (d = Ee, Ee = e), Ee !== e ? (De = [De, Ee], H = De) : (d = H, H = e)) : (d = H, H = e)); H !== e; ) {
        if (ne.push(H), H = [], Qe.test(t.charAt(d)) ? (De = t.charAt(d), d++) : (De = e, L === 0 && Se(Ve)), De !== e)
          for (; De !== e; )
            H.push(De), Qe.test(t.charAt(d)) ? (De = t.charAt(d), d++) : (De = e, L === 0 && Se(Ve));
        else
          H = e;
        H === e && (H = d, t.charCodeAt(d) === 46 ? (De = I, d++) : (De = e, L === 0 && Se(ct)), De !== e ? (Ee = d, L++, Qt = d, xt = Zt(), xr = Ln(), xr !== e ? (Br = Zt(), t.charCodeAt(d) === 40 ? (Jr = P, d++) : (Jr = e, L === 0 && Se(Be)), Jr !== e ? (xt = [xt, xr, Br, Jr], Qt = xt) : (d = Qt, Qt = e)) : (d = Qt, Qt = e), L--, Qt === e ? Ee = void 0 : (d = Ee, Ee = e), Ee !== e ? (De = [De, Ee], H = De) : (d = H, H = e)) : (d = H, H = e));
      }
      R = b, b = E();
    } else
      d = b, b = e;
    return b;
  }
  function Ln() {
    var b, F, ne, H;
    if (b = d, Ye.test(t.charAt(d)) ? (F = t.charAt(d), d++) : (F = e, L === 0 && Se(er)), F !== e) {
      for (ne = [], Qe.test(t.charAt(d)) ? (H = t.charAt(d), d++) : (H = e, L === 0 && Se(Ve)); H !== e; )
        ne.push(H), Qe.test(t.charAt(d)) ? (H = t.charAt(d), d++) : (H = e, L === 0 && Se(Ve));
      R = b, b = ie();
    } else
      d = b, b = e;
    return b;
  }
  function Zt() {
    var b, F;
    for (L++, b = [], xe.test(t.charAt(d)) ? (F = t.charAt(d), d++) : (F = e, L === 0 && Se(yt)); F !== e; )
      b.push(F), xe.test(t.charAt(d)) ? (F = t.charAt(d), d++) : (F = e, L === 0 && Se(yt));
    return L--, F = e, L === 0 && Se(Ge), b;
  }
  if (Lt = i(), Lt !== e && d === t.length)
    return Lt;
  throw Lt !== e && d < t.length && Se(Ir()), Qr(
    ke,
    Je < t.length ? t.charAt(Je) : null,
    Je < t.length ? En(Je, Je + 1) : En(Je, Je)
  );
}
const E3 = 128, Bi = /* @__PURE__ */ new Map();
let $f;
function k_(t) {
  return Bi.get(t);
}
function j_(t, r) {
  t !== $f && (Bi.delete(t), Bi.size >= E3 && Bi.delete(Bi.keys().next().value), Bi.set(t, r), $f = t);
}
const ed = /* @__PURE__ */ new Set([
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
function C3(t) {
  if (!(typeof t.name == "string" && t.name))
    throw new Error("Incorrect function name");
  if (!(typeof t.body == "string" && t.body))
    throw new Error("Incorrect function body");
  if (!(t.return_type && ed.has(t.return_type)))
    throw new Error("Incorrect function return_type");
  if (!Array.isArray(t.arguments))
    throw new Error("Incorrect function arguments");
  const r = /* @__PURE__ */ new Set();
  t.arguments.forEach((e) => {
    if (!(typeof e.name == "string" && e.name))
      throw new Error("Incorrect argument name");
    if (!(e.type && ed.has(e.type)))
      throw new Error("Incorrect argument type");
    if (r.has(e.name))
      throw new Error("Duplicate argument name");
    r.add(e.name);
  });
}
function A3(t) {
  let r;
  return {
    name: t.name,
    args: t.arguments.map((e) => ({
      type: e.type
    })),
    cb(e, ...n) {
      r || (r = k_(t.body) || v_(t.body, {
        startRule: "JsonStringContents"
      }), j_(t.body, r));
      const o = /* @__PURE__ */ new Map();
      n.forEach((a, l) => {
        if (a.type === "function")
          throw new Error("Incorrect argument type: function");
        const u = Ms(t.arguments[l].name, a.type, a.value);
        o.set(u.getName(), u);
      });
      const i = Ma(o, e.customFunctions, e.store, r, {
        weekStartDay: e.weekStartDay
      });
      i.warnings.forEach((a) => {
        e.warnings.push(a);
      });
      const s = i.result;
      if (s.type === "error")
        throw new Error(s.value);
      if (s.type !== t.return_type)
        throw new Error("Incorrect function return_type");
      return s;
    }
  };
}
function V3(t, r) {
  if (!t)
    return r || void 0;
  if (!r)
    return t || void 0;
  const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set();
  for (const [o, i] of r) {
    for (const s of i) {
      const a = yf(o, s);
      n.add(a);
    }
    e.set(o, i);
  }
  for (const [o, i] of t)
    for (const s of i) {
      const a = yf(o, s);
      if (!n.has(a)) {
        n.add(a);
        const l = e.get(o) || [];
        l.push(s), e.set(o, l);
      }
    }
  return e;
}
function S3(t) {
  if (!t)
    return X(new Error("Missing object"));
  const r = t.card, e = t.templates || {};
  if (!r)
    return X(new Error("Missing card"));
  if (!r.states || !r.states.length)
    return X(new Error("Missing states"));
  for (const n in e)
    if (e.hasOwnProperty(n) && n in f_)
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
function D3(t) {
  return [...new Set(t)];
}
class E_ {
  constructor(r, e) {
    Vr(this, "ast");
    Vr(this, "expr");
    this.ast = r, this.expr = e;
  }
  /**
   * Applies variables into ast
   * @param variables
   * @param logError
   */
  apply({
    variables: r,
    customFunctions: e,
    logError: n,
    store: o,
    weekStartDay: i,
    keepComplex: s
  }) {
    var l;
    let a;
    try {
      a = Ma(r, e, o, this.ast, {
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
          result: t_(c),
          usedVars: a.usedVars
        };
      if (u.type === "boolean")
        return {
          result: !!c,
          usedVars: a.usedVars
        };
      if (u.type === "color") {
        const f = wo(String(c));
        if (f)
          return {
            result: Mi(f),
            usedVars: a.usedVars
          };
        n(X(new Error("Expression execution error")));
      }
      if (u.type === "integer")
        return c > m1 || c < b1 ? (n(X(new Error("Expression result is out of 32-bit int range"))), {
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
function I3(t) {
  return t.indexOf("@{") > -1 || t.indexOf("\\") > -1;
}
function da(t, r, e, n) {
  if (t)
    if (typeof t == "string") {
      if (I3(t)) {
        r.hasExpression = !0;
        try {
          const o = k_(t) || v_(t, {
            startRule: "JsonStringContents"
          });
          j_(t, o);
          const i = j1(o);
          return r.vars.push(...i), new E_(o, t);
        } catch {
          e(X(new Error("Unable to parse expression"), {
            additional: {
              expression: t
            }
          }));
          return;
        }
      }
    } else {
      if (Array.isArray(t) && n > 0)
        return t.map((o) => da(o, r, e, n - 1));
      if (typeof t == "object" && n > 0) {
        const o = {};
        for (const i in t)
          o[i] = da(t[i], r, e, n - 1);
        return o;
      }
    }
  return t;
}
function _a(t, r) {
  if (t) {
    if (t instanceof E_)
      return t.apply(r);
    if (Array.isArray(t)) {
      let e;
      return {
        result: t.map((o) => {
          const i = _a(o, r);
          if (i.usedVars) {
            e || (e = /* @__PURE__ */ new Set());
            for (const s of i.usedVars)
              e.add(s);
          }
          return i.result;
        }),
        usedVars: e
      };
    } else if (typeof t == "object") {
      const e = {};
      let n;
      for (const o in t) {
        const i = _a(t[o], r);
        if (e[o] = i.result, i.usedVars) {
          n || (n = /* @__PURE__ */ new Set());
          for (const s of i.usedVars)
            n.add(s);
        }
      }
      return {
        result: e,
        usedVars: n
      };
    }
  }
  return {
    result: t
  };
}
function td(t, r, e, n, o = 1 / 0) {
  const i = {
    vars: [],
    hasExpression: !1
  }, s = da(t, i, r, o);
  return {
    vars: D3(i.vars),
    hasExpression: i.hasExpression,
    applyVars(l, u, c) {
      return _a(s, {
        variables: l,
        customFunctions: u,
        logError: r,
        store: e,
        weekStartDay: n,
        keepComplex: c
      });
    }
  };
}
class C_ {
  constructor() {
    Vr(this, "_vars", /* @__PURE__ */ new Map());
    Vr(this, "_lastAddedVariable", Oo(""));
  }
  setVariable(r) {
    const e = r.getName();
    if (this._vars.has(e))
      throw new Error("Variable with the same name already exist");
    this._vars.set(e, r), this._lastAddedVariable.set(e);
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
function F4() {
  return new C_();
}
const F3 = ["start", "stop", "pause", "resume", "cancel", "reset"], T3 = new Set(F3);
class M3 {
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
      document.visibilityState === "visible" ? (this.awaitActions.forEach(({ id: e, action: n }) => {
        this.execTimerAction(e, n);
      }), this.awaitActions = [], this.unholdAll()) : this.holdAll();
    }, document.addEventListener("visibilitychange", this.visibilityHandler);
  }
  destroy() {
    document.removeEventListener("visibilitychange", this.visibilityHandler);
    for (const [r, e] of this.timers)
      this.stopTimerTimeouts(e);
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
  execTimerAction(r, e) {
    if (!r || !e || !this.timers.has(r) || !T3.has(e)) {
      this.logError(X(new Error("Incorrect timer action"), {
        additional: {
          id: r,
          action: e
        }
      }));
      return;
    }
    const n = e;
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
    const e = performance.now(), n = (r.durationPassed || 0) + e - (r.durationStarted || 0);
    r.duration && n > r.duration || (this.updateVariable(r, n), await this.callActions(r, "tick"), r.tickCount !== void 0 && ++r.tickCount);
  }
  startOrResume(r) {
    r.state = "running", r.hold = !1, r.durationStarted = performance.now();
    const e = r.duration;
    e && (r.durationTimeout = window.setTimeout(async () => {
      this.updateVariable(r, e), r.tickCountPredict && r.tickCount !== void 0 && r.tickCount < r.tickCountPredict && await this.callActions(r, "tick"), this.stop(r);
    }, Math.max(0, e - (r.durationPassed || 0))));
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
    let e = this.applyVars(r);
    if (typeof e == "string") {
      if (e === r)
        return;
      e = Number(e);
    }
    if (!(e === void 0 || Number.isNaN(e) || Math.round(e) !== e))
      return e;
  }
  start(r) {
    if (r.state === "running") {
      this.logError(X(new Error("The timer is already running")));
      return;
    } else if (r.state === "paused") {
      this.logError(X(new Error("The timer is paused")));
      return;
    }
    const e = r.definition.value_variable;
    if (e && !this.hasVariableWithType(e, "integer")) {
      this.logError(X(new Error("Cannot find variable"), {
        additional: {
          name: e
        }
      }));
      return;
    }
    if (e && this.setVariableValue(e, 0), r.definition.duration !== void 0 && (r.duration = this.applyVarsInt(r.definition.duration), r.duration === void 0 || r.duration < 0)) {
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
    const e = performance.now();
    r.durationStarted && (r.durationPassed = (r.durationPassed || 0) + e - r.durationStarted), r.tickStarted && (r.tickPassed = (r.tickPassed || 0) + e - r.tickStarted);
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
  updateVariable(r, e) {
    const n = r.definition.value_variable;
    n && this.setVariableValue(n, Math.round(e));
  }
  async callActions(r, e) {
    const n = r.definition[e === "end" ? "end_actions" : "tick_actions"];
    if (n)
      return this.execAnyActions(n, {
        processUrls: !1
      });
  }
  holdAll() {
    for (const [r, e] of this.timers)
      e.state === "running" && (e.hold = !0, this.stopTimerTimeouts(e));
  }
  async unholdAll() {
    for (const [r, e] of this.timers)
      if (e.state === "running" && e.hold) {
        const n = performance.now();
        e.durationStarted && (e.durationPassed = (e.durationPassed || 0) + n - e.durationStarted), e.tickStarted && (e.tickPassed = (e.tickPassed || 0) + n - e.tickStarted), e.tick && await this.tickOrUnholdAction(e), this.startOrResume(e);
      }
  }
}
function P3(t, r, e, n) {
  const { variable_name: o, index: i, value: s } = n;
  if (!s || typeof i != "number" && i !== void 0) {
    e(X(new Error("Incorrect array_insert_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Pa(t, r, e, n, (a) => {
    const l = a.getValue();
    if (typeof i == "number" && (i < 0 || i > l.length))
      e(X(new Error(`Index out of bound for mutation ${n.type}`), {
        additional: {
          name: o,
          index: i,
          length: l.length
        }
      }));
    else if (!s.type)
      e(X(new Error("Incorrect value type"), {
        additional: {
          name: o
        }
      }));
    else {
      const u = l.slice(), c = Al(s);
      typeof i == "number" ? u.splice(i, 0, c) : u.push(c), a.setValue(u);
    }
  });
}
function N3(t, r, e, n) {
  const { variable_name: o, index: i } = n;
  if (typeof i != "number") {
    e(X(new Error("Incorrect array_remove_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Pa(t, r, e, n, (s) => {
    const a = s.getValue();
    if (typeof i == "number" && (i < 0 || i >= a.length))
      e(X(new Error(`Index out of bound for mutation ${n.type}`), {
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
function z3(t, r, e, n) {
  const { variable_name: o, index: i, value: s } = n;
  if (!s || typeof i != "number") {
    e(X(new Error("Incorrect array_set_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Pa(t, r, e, n, (a) => {
    const l = a.getValue();
    if (typeof i == "number" && (i < 0 || i >= l.length))
      e(X(new Error(`Index out of bound for mutation ${n.type}`), {
        additional: {
          name: o,
          index: i,
          length: l.length
        }
      }));
    else if (!s.type)
      e(X(new Error("Incorrect value type"), {
        additional: {
          name: o
        }
      }));
    else {
      const u = l.slice();
      u[i] = Al(s), a.setValue(u);
    }
  });
}
function Pa(t, r, e, n, o) {
  const { variable_name: i } = n;
  if (!i) {
    e(X(new Error(`Incorrect ${n.type} action`), {
      additional: {
        name: i
      }
    }));
    return;
  }
  const s = (t == null ? void 0 : t.getVariable(i)) || r.get(i);
  if (!s) {
    e(X(new Error("Cannot find variable"), {
      additional: {
        name: i
      }
    }));
    return;
  }
  const a = s.getType();
  a === "array" ? o(s) : e(X(new Error("Trying to insert value into the non-array"), {
    additional: {
      name: i,
      type: a
    }
  }));
}
function O3(t, r, e, n) {
  const { variable_name: o, key: i, value: s } = n;
  if (typeof i != "string") {
    e(X(new Error("Incorrect dict_set_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  if (!o) {
    e(X(new Error(`Incorrect ${n.type} action`), {
      additional: {
        name: o
      }
    }));
    return;
  }
  s && !s.type && e(X(new Error("Incorrect value type"), {
    additional: {
      name: o
    }
  }));
  const a = (t == null ? void 0 : t.getVariable(o)) || r.get(o);
  if (!a) {
    e(X(new Error("Cannot find variable"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  const l = a.getType();
  if (l === "dict") {
    const c = { ...a.getValue() };
    s ? c[i] = Al(s) : delete c[i], a.setValue(c);
  } else
    e(X(new Error("Trying to set value into the non-dict"), {
      additional: {
        name: o,
        type: l
      }
    }));
}
function B3(t, r) {
  if (!(r.content && (r.content.type === "text" || r.content.type === "url") && typeof r.content.value == "string")) {
    t(X(new Error("Incorrect action"), {
      additional: {
        action: r
      }
    }));
    return;
  }
  if (!(typeof navigator < "u" && "clipboard" in navigator && navigator.clipboard && "writeText" in navigator.clipboard && typeof navigator.clipboard.writeText == "function")) {
    t(X(new Error("Clipboard is unavailable"), {
      additional: {
        action: r
      }
    }));
    return;
  }
  navigator.clipboard.writeText(r.content.value).catch((e) => {
    t(X(new Error("Failed to copy to the clipboard"), {
      additional: {
        originalError: String(e)
      }
    }));
  });
}
function L3(t) {
  if (t === "normal" || t === "reverse" || t === "alternate" || t === "alternate_reverse")
    return t;
}
function R3(t, r, e, n) {
  var z, O, $, ue;
  const o = Jn(t.duration, 0);
  if (!o || t.type !== "color_animator" && t.type !== "number_animator")
    return;
  const i = (z = t.start_value_typed ? t.start_value_typed.value : t.start_value) != null ? z : r.getValue(), s = t.end_value_typed ? t.end_value_typed.value : t.end_value;
  if (i === void 0 || s === void 0 || t.type === "color_animator" && (typeof i != "string" && i !== void 0 || typeof s != "string") || t.type === "number_animator" && (typeof i != "number" && i !== void 0 || typeof s != "number"))
    return;
  const a = t.type === "color_animator" && wo(i), l = t.type === "color_animator" && wo(s);
  if (t.type === "color_animator" && (!a || !l))
    return;
  const u = un(t.start_delay, 0), c = Va(t.interpolator || "linear"), f = L3(t.direction) || "normal", _ = ((O = t.repeat_count) == null ? void 0 : O.type) === "infinity" ? 1 / 0 : (($ = t.repeat_count) == null ? void 0 : $.type) === "fixed" ? un((ue = t.repeat_count) == null ? void 0 : ue.value, 1) : 1;
  let p = 0, m = performance.now();
  const h = _ === 1 / 0 ? 1 / 0 : _ * o + u;
  function y(M) {
    if (t.type === "color_animator") {
      if (!a || !l)
        throw new Error("Missing start/end value");
      return Mi({
        a: No(Xo(a.a, l.a, M), 0, 255),
        r: No(Xo(a.r, l.r, M), 0, 255),
        g: No(Xo(a.g, l.g, M), 0, 255),
        b: No(Xo(a.b, l.b, M), 0, 255)
      });
    }
    return Xo(i, s, M);
  }
  function w(M) {
    const Y = M - m;
    if (m = M, p += Y, p >= u) {
      let se = Math.floor((p - u) / o), C = (p - u - se * o) / o;
      se >= _ && (se = _ - 1, C = 1);
      let I;
      f === "normal" || f === "alternate" && se % 2 === 0 || f === "alternate_reverse" && se % 2 === 1 ? I = "normal" : I = "reverse", I === "reverse" && (C = 1 - C);
      const P = y(c(C));
      r.setValue(P);
    }
    p < h ? D = requestAnimationFrame(w) : (e(), n(t.end_actions));
  }
  let D = requestAnimationFrame(w);
  return {
    stop() {
      cancelAnimationFrame(D), n(t.cancel_actions), n(t.end_actions);
    }
  };
}
function H3(t) {
  let r = t;
  for (; r && !r.isTooltipRoot; )
    r = r.parent;
  return r;
}
function W3(t) {
  let r = t;
  for (; r != null && r.parent && r.json.type !== "state" && !r.isRootState && !r.isTooltipRoot; )
    r = r.parent;
  return r;
}
function ll(t) {
  return !!(t && typeof t == "string");
}
const U3 = /* @__PURE__ */ new Set([
  "get",
  "post",
  "put",
  "patch",
  "delete",
  "head",
  "options"
]);
function G3(t) {
  return t === void 0 || U3.has(t);
}
function J3(t) {
  return t === void 0 || Array.isArray(t) && t.every((r) => ll(r.name) && ll(r.value));
}
function q3(t) {
  var r, e, n;
  return ll(t.container_id) && ll((r = t.request) == null ? void 0 : r.url) && G3((e = t.request) == null ? void 0 : e.method) && J3((n = t.request) == null ? void 0 : n.headers);
}
function K3(t, r, e, n) {
  const { variable_name: o, path: i, value: s } = n;
  if (!(s != null && s.value)) {
    e(X(new Error("Missing value for an action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  if (typeof i != "string" || !i || i.charAt(0) === "/" || i.charAt(i.length - 1) === "/") {
    e(X(new Error(`Value '${i}' for key 'path' is not valid`), {
      additional: {
        name: o
      }
    }));
    return;
  }
  if (!o) {
    e(X(new Error(`Incorrect ${n.type} action`), {
      additional: {
        name: o
      }
    }));
    return;
  }
  const a = (t == null ? void 0 : t.getVariable(o)) || r.get(o);
  if (!a) {
    e(X(new Error("Cannot find variable"), {
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
      e(X(new Error(`Value '${i}' for key 'path' is not valid`), {
        additional: {
          name: o,
          type: l,
          path: i
        }
      }));
      return;
    }
    const f = c.split("/"), _ = l === "array" ? u.slice() : { ...u };
    let p = _;
    for (let m = 0; m < f.length; ++m) {
      const h = f[m];
      if (!h) {
        e(X(new Error("Path is empty"), {
          additional: {
            name: o,
            type: l,
            path: i
          }
        }));
        return;
      }
      if (!p || typeof p != "object") {
        e(X(new Error(`Element with path '${f.slice(0, m).join("/")}' is not ${p === void 0 ? "found" : "a structure"}`), {
          additional: {
            name: o,
            type: l,
            path: i
          }
        }));
        return;
      }
      if (Array.isArray(p)) {
        const y = Number(h);
        if (Number.isNaN(y)) {
          e(X(new Error(`Unable to use '${h}' as array index`), {
            additional: {
              name: o,
              type: l,
              path: i
            }
          }));
          return;
        }
        if (m + 1 === f.length && (y < 0 || y > p.length)) {
          e(X(new Error(`Position '${y}' is out of array bounds`), {
            additional: {
              name: o,
              type: l,
              path: i
            }
          }));
          return;
        }
      }
      m + 1 < f.length && (p = p[h]);
    }
    p[f[f.length - 1]] = Al(s), a.setValue(_);
  } else
    e(X(new Error("Action requires array or dictionary variable"), {
      additional: {
        name: o,
        type: l
      }
    }));
}
function rd(t, { delay: r = 0, duration: e = 400, easing: n = Kd, x: o = 0, y: i = 0, opacity: s = 0 } = {}) {
  const a = getComputedStyle(t), l = +a.opacity, u = a.transform === "none" ? "" : a.transform, c = l * (1 - s), [f, _] = Ra(o), [p, m] = Ra(i);
  return {
    delay: r,
    duration: e,
    easing: n,
    css: (h, y) => `
			transform: ${u} translate(${(1 - h) * f}${_}, ${(1 - h) * p}${m});
			opacity: ${l - c * y}`
  };
}
const Y3 = "appkit-outer", X3 = "appkit-root__clickable", Z3 = "undefined", Q3 = "appkit-tooltip", x3 = "appkit-tooltip_visible", $3 = "appkit-tooltip_modal", e4 = "appkit-tooltip__inner", t4 = "appkit-tooltip__overlay", r4 = "appkit-tooltip__substrate", So = {
  outer: Y3,
  root__clickable: X3,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  root__selectable: Z3,
  tooltip: Q3,
  tooltip_visible: x3,
  tooltip_modal: $3,
  tooltip__inner: e4,
  tooltip__overlay: t4,
  tooltip__substrate: r4
}, A_ = 300, V_ = 0;
function ha(t) {
  return Math.max(...t.map(
    (r) => (Number(r.duration) || A_) + (Number(r.start_delay) || V_)
  ));
}
function al(t, {
  animations: r,
  direction: e
}) {
  if (!r)
    return {};
  const n = _s(r), o = ha(n);
  return n.some((s) => s.name === "no_animation") ? {} : {
    duration: Ji() ? 0 : o,
    css: (s) => {
      const a = s * o, l = n.map((h) => {
        var $, ue, M, Y, se, C, I, P, B, q, pe, _e;
        const y = Number(h.start_delay) || V_, w = Number(h.duration) || A_, D = e === "in" ? Math.max(0, Math.min(1, (a - y) / w)) : Math.max(0, Math.min(1, (a - (o - w) + y) / w)), O = (Va(h.interpolator || "ease_in_out") || jl)(D);
        if (h.name === "fade") {
          const Ae = e === "in" ? ($ = h.start_value) != null ? $ : 0 : (ue = h.end_value) != null ? ue : 0, be = e === "in" ? (M = h.end_value) != null ? M : 1 : (Y = h.start_value) != null ? Y : 1;
          return {
            active: O > 0 && O < 1,
            opacity: (1 - O) * Ae + O * be
          };
        } else if (h.name === "translate") {
          const Ae = -(e === "in" ? (se = h.start_value) != null ? se : 10 : (C = h.end_value) != null ? C : 10), be = -(e === "in" ? (I = h.end_value) != null ? I : 0 : (P = h.start_value) != null ? P : 0);
          return {
            active: O > 0 && O < 1,
            translate: `translateY(${(1 - O) * Ae + O * be}${e === "in" && h.start_value !== void 0 || e === "out" && h.end_value !== void 0 ? "%" : "px"})`
          };
        } else if (h.name === "scale") {
          const Ae = e === "in" ? (B = h.start_value) != null ? B : 0 : (q = h.end_value) != null ? q : 0, be = e === "in" ? (pe = h.end_value) != null ? pe : 1 : (_e = h.start_value) != null ? _e : 1;
          return {
            active: O > 0 && O < 1,
            scale: `scale(${(1 - O) * Ae + O * be})`
          };
        }
        return {};
      }), u = l.map((h) => h.opacity).filter((h) => h !== void 0).reduce((h, y) => h * y, 1), c = l.map((h) => h.translate).filter((h) => h !== void 0).join(" "), f = l.map((h) => h.scale).filter((h) => h !== void 0).join(" "), _ = l.filter((h) => h.active).map((h) => h.scale).filter((h) => h !== void 0), p = _.length ? _[_.length - 1] : f;
      return `transform:${[c, p].filter(Boolean).join(" ") || "none"};opacity:${u}`;
    }
  };
}
const as = typeof window < "u" && "HTMLDialogElement" in window, { document: n4, window: o4 } = Ro;
function i4(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _ = (
    /*visible*/
    t[1] && /*modal*/
    t[3] && nd(t)
  ), p = (
    /*substrateComponentContext*/
    t[14] && od(t)
  );
  return i = new oo({
    props: {
      componentContext: (
        /*componentContext*/
        t[2]
      )
    }
  }), {
    c() {
      _ && _.c(), r = gr(), p && p.c(), e = gr(), n = Me("div"), o = Me("div"), Jt(i.$$.fragment), this.h();
    },
    l(m) {
      _ && _.l(m), r = mr(m), p && p.l(m), e = mr(m), n = ze(m, "DIV", {
        class: !0,
        role: !0,
        "aria-modal": !0
      });
      var h = je(n);
      o = ze(h, "DIV", { class: !0 });
      var y = je(o);
      Xt(i.$$.fragment, y), y.forEach(k), h.forEach(k), this.h();
    },
    h() {
      g(o, "class", So.tooltip__inner), g(n, "class", s = bt(
        "tooltip",
        So,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Fr.root_platform_desktop : "")), g(n, "role", "dialog"), g(
        n,
        "aria-modal",
        /*modal*/
        t[3]
      ), N(
        n,
        "top",
        /*tooltipY*/
        t[11]
      ), N(
        n,
        "left",
        /*tooltipX*/
        t[10]
      ), N(
        n,
        "width",
        /*tooltipWidth*/
        t[12]
      ), N(
        n,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    m(m, h) {
      _ && _.m(m, h), K(m, r, h), p && p.m(m, h), K(m, e, h), K(m, n, h), jt(n, o), Ht(i, o, null), t[40](o), t[41](n), u = !0, c || (f = [
        et(
          n,
          "keydown",
          /*onKeyDown*/
          t[26]
        ),
        et(
          n,
          "introstart",
          /*onIntroStart*/
          t[28]
        ),
        et(
          n,
          "introend",
          /*onIntroEnd*/
          t[29]
        ),
        et(
          n,
          "outrostart",
          /*onOutroStart*/
          t[30]
        )
      ], c = !0);
    },
    p(m, h) {
      t = m, /*visible*/
      t[1] && /*modal*/
      t[3] ? _ ? _.p(t, h) : (_ = nd(t), _.c(), _.m(r.parentNode, r)) : _ && (_.d(1), _ = null), /*substrateComponentContext*/
      t[14] ? p ? (p.p(t, h), h[0] & /*substrateComponentContext*/
      16384 && G(p, 1)) : (p = od(t), p.c(), G(p, 1), p.m(e.parentNode, e)) : p && (br(), oe(p, 1, 1, () => {
        p = null;
      }), yr());
      const y = {};
      h[0] & /*componentContext*/
      4 && (y.componentContext = /*componentContext*/
      t[2]), i.$set(y), (!u || h[0] & /*mods, $isDesktop*/
      2129920 && s !== (s = bt(
        "tooltip",
        So,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Fr.root_platform_desktop : ""))) && g(n, "class", s), (!u || h[0] & /*modal*/
      8) && g(
        n,
        "aria-modal",
        /*modal*/
        t[3]
      ), h[0] & /*tooltipY*/
      2048 && N(
        n,
        "top",
        /*tooltipY*/
        t[11]
      ), h[0] & /*tooltipX*/
      1024 && N(
        n,
        "left",
        /*tooltipX*/
        t[10]
      ), h[0] & /*tooltipWidth*/
      4096 && N(
        n,
        "width",
        /*tooltipWidth*/
        t[12]
      ), h[0] & /*tooltipHeight*/
      8192 && N(
        n,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    i(m) {
      u || (G(p), G(i.$$.fragment, m), yo(() => {
        u && (l && l.end(1), a = ml(n, al, {
          animations: (
            /*$animationIn*/
            t[5] || Yi
          ),
          direction: "in"
        }), a.start());
      }), u = !0);
    },
    o(m) {
      oe(p), oe(i.$$.fragment, m), a && a.invalidate(), l = Dd(n, al, {
        animations: (
          /*$animationOut*/
          t[4] || Yi
        ),
        direction: "out"
      }), u = !1;
    },
    d(m) {
      m && (k(r), k(e), k(n)), _ && _.d(m), p && p.d(m), Wt(i), t[40](null), t[41](null), m && l && l.end(), c = !1, Gr(f);
    }
  };
}
function s4(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _ = (
    /*substrateComponentContext*/
    t[14] && id(t)
  ), p = (
    /*visible*/
    t[1] && /*modal*/
    t[3] && /*data*/
    t[0].background_accessibility_description && sd(t)
  );
  return i = new oo({
    props: {
      componentContext: (
        /*componentContext*/
        t[2]
      )
    }
  }), {
    c() {
      _ && _.c(), r = gr(), e = Me("dialog"), p && p.c(), n = gr(), o = Me("div"), Jt(i.$$.fragment), this.h();
    },
    l(m) {
      _ && _.l(m), r = mr(m), e = ze(m, "DIALOG", { class: !0 });
      var h = je(e);
      p && p.l(h), n = mr(h), o = ze(h, "DIV", { class: !0 });
      var y = je(o);
      Xt(i.$$.fragment, y), y.forEach(k), h.forEach(k), this.h();
    },
    h() {
      g(o, "class", So.tooltip__inner), g(e, "class", s = bt(
        "tooltip",
        So,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Fr.root_platform_desktop : "")), N(
        e,
        "top",
        /*tooltipY*/
        t[11]
      ), N(
        e,
        "left",
        /*tooltipX*/
        t[10]
      ), N(
        e,
        "width",
        /*tooltipWidth*/
        t[12]
      ), N(
        e,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    m(m, h) {
      _ && _.m(m, h), K(m, r, h), K(m, e, h), p && p.m(e, null), jt(e, n), jt(e, o), Ht(i, o, null), t[36](o), t[37](e), u = !0, c || (f = [
        et(
          e,
          "keydown",
          /*onKeyDown*/
          t[26]
        ),
        et(
          e,
          "close",
          /*onClose*/
          t[27]
        ),
        et(
          e,
          "cancel",
          /*onClose*/
          t[27]
        ),
        et(
          e,
          "click",
          /*onOutClick*/
          t[23]
        ),
        et(
          e,
          "introstart",
          /*onIntroStart*/
          t[28]
        ),
        et(
          e,
          "introend",
          /*onIntroEnd*/
          t[29]
        ),
        et(
          e,
          "outrostart",
          /*onOutroStart*/
          t[30]
        )
      ], c = !0);
    },
    p(m, h) {
      t = m, /*substrateComponentContext*/
      t[14] ? _ ? (_.p(t, h), h[0] & /*substrateComponentContext*/
      16384 && G(_, 1)) : (_ = id(t), _.c(), G(_, 1), _.m(r.parentNode, r)) : _ && (br(), oe(_, 1, 1, () => {
        _ = null;
      }), yr()), /*visible*/
      t[1] && /*modal*/
      t[3] && /*data*/
      t[0].background_accessibility_description ? p ? p.p(t, h) : (p = sd(t), p.c(), p.m(e, n)) : p && (p.d(1), p = null);
      const y = {};
      h[0] & /*componentContext*/
      4 && (y.componentContext = /*componentContext*/
      t[2]), i.$set(y), (!u || h[0] & /*mods, $isDesktop*/
      2129920 && s !== (s = bt(
        "tooltip",
        So,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Fr.root_platform_desktop : ""))) && g(e, "class", s), h[0] & /*tooltipY*/
      2048 && N(
        e,
        "top",
        /*tooltipY*/
        t[11]
      ), h[0] & /*tooltipX*/
      1024 && N(
        e,
        "left",
        /*tooltipX*/
        t[10]
      ), h[0] & /*tooltipWidth*/
      4096 && N(
        e,
        "width",
        /*tooltipWidth*/
        t[12]
      ), h[0] & /*tooltipHeight*/
      8192 && N(
        e,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    i(m) {
      u || (G(_), G(i.$$.fragment, m), yo(() => {
        u && (l && l.end(1), a = ml(e, al, {
          animations: (
            /*$animationIn*/
            t[5] || Yi
          ),
          direction: "in"
        }), a.start());
      }), u = !0);
    },
    o(m) {
      oe(_), oe(i.$$.fragment, m), a && a.invalidate(), l = Dd(e, al, {
        animations: (
          /*$animationOut*/
          t[4] || Yi
        ),
        direction: "out"
      }), u = !1;
    },
    d(m) {
      m && (k(r), k(e)), _ && _.d(m), p && p.d(), Wt(i), t[36](null), t[37](null), m && l && l.end(), c = !1, Gr(f);
    }
  };
}
function nd(t) {
  let r;
  function e(i, s) {
    return (
      /*data*/
      i[0].background_accessibility_description ? a4 : l4
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = Re();
    },
    l(i) {
      o.l(i), r = Re();
    },
    m(i, s) {
      o.m(i, s), K(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && k(r), o.d(i);
    }
  };
}
function l4(t) {
  let r, e, n;
  return {
    c() {
      r = Me("div"), this.h();
    },
    l(o) {
      r = ze(o, "DIV", { class: !0 }), je(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", So.tooltip__overlay);
    },
    m(o, i) {
      K(o, r, i), e || (n = et(
        r,
        "click",
        /*closeByOutside*/
        t[24]
      ), e = !0);
    },
    p: j,
    d(o) {
      o && k(r), e = !1, n();
    }
  };
}
function a4(t) {
  let r, e, n, o;
  return {
    c() {
      r = Me("button"), this.h();
    },
    l(i) {
      r = ze(i, "BUTTON", {
        class: !0,
        type: !0,
        "aria-label": !0
      }), je(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", So.tooltip__overlay), g(r, "type", "button"), g(r, "aria-label", e = /*data*/
      t[0].background_accessibility_description);
    },
    m(i, s) {
      K(i, r, s), n || (o = et(
        r,
        "click",
        /*closeByOutside*/
        t[24]
      ), n = !0);
    },
    p(i, s) {
      s[0] & /*data*/
      1 && e !== (e = /*data*/
      i[0].background_accessibility_description) && g(r, "aria-label", e);
    },
    d(i) {
      i && k(r), n = !1, o();
    }
  };
}
function od(t) {
  let r, e, n, o, i;
  return e = new oo({
    props: {
      componentContext: (
        /*substrateComponentContext*/
        t[14]
      )
    }
  }), {
    c() {
      r = Me("div"), Jt(e.$$.fragment), n = gr(), o = Me("div"), this.h();
    },
    l(s) {
      r = ze(s, "DIV", { class: !0 });
      var a = je(r);
      Xt(e.$$.fragment, a), a.forEach(k), n = mr(s), o = ze(s, "DIV", {}), je(o).forEach(k), this.h();
    },
    h() {
      g(r, "class", So.tooltip__substrate);
    },
    m(s, a) {
      K(s, r, a), Ht(e, r, null), t[38](r), K(s, n, a), K(s, o, a), t[39](o), i = !0;
    },
    p(s, a) {
      const l = {};
      a[0] & /*substrateComponentContext*/
      16384 && (l.componentContext = /*substrateComponentContext*/
      s[14]), e.$set(l);
    },
    i(s) {
      i || (G(e.$$.fragment, s), i = !0);
    },
    o(s) {
      oe(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && (k(r), k(n), k(o)), Wt(e), t[38](null), t[39](null);
    }
  };
}
function id(t) {
  let r, e, n, o, i;
  return e = new oo({
    props: {
      componentContext: (
        /*substrateComponentContext*/
        t[14]
      )
    }
  }), {
    c() {
      r = Me("div"), Jt(e.$$.fragment), n = gr(), o = Me("div"), this.h();
    },
    l(s) {
      r = ze(s, "DIV", { class: !0 });
      var a = je(r);
      Xt(e.$$.fragment, a), a.forEach(k), n = mr(s), o = ze(s, "DIV", {}), je(o).forEach(k), this.h();
    },
    h() {
      g(r, "class", So.tooltip__substrate);
    },
    m(s, a) {
      K(s, r, a), Ht(e, r, null), t[34](r), K(s, n, a), K(s, o, a), t[35](o), i = !0;
    },
    p(s, a) {
      const l = {};
      a[0] & /*substrateComponentContext*/
      16384 && (l.componentContext = /*substrateComponentContext*/
      s[14]), e.$set(l);
    },
    i(s) {
      i || (G(e.$$.fragment, s), i = !0);
    },
    o(s) {
      oe(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && (k(r), k(n), k(o)), Wt(e), t[34](null), t[35](null);
    }
  };
}
function sd(t) {
  let r, e, n, o;
  return {
    c() {
      r = Me("button"), this.h();
    },
    l(i) {
      r = ze(i, "BUTTON", {
        class: !0,
        type: !0,
        "aria-label": !0
      }), je(r).forEach(k), this.h();
    },
    h() {
      g(r, "class", So.tooltip__overlay), g(r, "type", "button"), g(r, "aria-label", e = /*data*/
      t[0].background_accessibility_description);
    },
    m(i, s) {
      K(i, r, s), n || (o = et(
        r,
        "click",
        /*closeByOutside*/
        t[24]
      ), n = !0);
    },
    p(i, s) {
      s[0] & /*data*/
      1 && e !== (e = /*data*/
      i[0].background_accessibility_description) && g(r, "aria-label", e);
    },
    d(i) {
      i && k(r), n = !1, o();
    }
  };
}
function u4(t) {
  let r, e, n, o, i, s, a;
  const l = [s4, i4], u = [];
  function c(f, _) {
    return as ? 0 : 1;
  }
  return e = c(), n = u[e] = l[e](t), {
    c() {
      r = gr(), n.c(), o = Re();
    },
    l(f) {
      r = mr(f), n.l(f), o = Re();
    },
    m(f, _) {
      K(f, r, _), u[e].m(f, _), K(f, o, _), i = !0, s || (a = [
        et(
          o4,
          "resize",
          /*onWindowResize*/
          t[25]
        ),
        et(
          n4.body,
          "click",
          /*onOutClick*/
          t[23],
          !0
        )
      ], s = !0);
    },
    p(f, _) {
      n.p(f, _);
    },
    i(f) {
      i || (G(n), i = !0);
    },
    o(f) {
      oe(n), i = !1;
    },
    d(f) {
      f && (k(r), k(o)), u[e].d(f), s = !1, Gr(a);
    }
  };
}
const Yi = {
  name: "set",
  items: [{ name: "translate" }, { name: "fade" }]
};
let $n = [];
function c4(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _ = j, p = () => (_(), _ = V(i, (T) => e(46, f = T)), i), m, h = j, y = () => (h(), h = V(o, (T) => e(47, m = T)), o), w, D = j, z = () => (D(), D = V(n, (T) => e(48, w = T)), n), O, $ = j, ue = () => ($(), $ = V(a, (T) => e(4, O = T)), a), M, Y = j, se = () => (Y(), Y = V(s, (T) => e(5, M = T)), s), C;
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => $()), t.$$.on_destroy.push(() => Y());
  let { ownerNode: I } = r, { data: P } = r, { internalId: B } = r, { parentComponentContext: q } = r;
  const pe = zr($r), _e = pe.isDesktop;
  kn(t, _e, (T) => e(21, C = T));
  const Ae = Date.now();
  let be, Ie, x, Ye, Qe = !1, xe = "", we = "", Te = "", ge = "", ye = null, he, te, fe = !0, re = null;
  function ve() {
    var yt, Pe;
    if (!be || !I)
      return;
    const T = be.parentElement;
    if (!T)
      return;
    const St = be.style.cssText;
    e(6, be.style.cssText += ";transform: none !important", be);
    const dt = I.getBoundingClientRect(), Ft = be.getBoundingClientRect(), Pt = T.getBoundingClientRect();
    e(6, be.style.cssText = St, be);
    let st = 0, Q = 0, Dt = null, Ot = null, nr = 0, er = 0;
    const Ve = (yt = he == null ? void 0 : he.json) == null ? void 0 : yt.width, Ge = (Pe = he == null ? void 0 : he.json) == null ? void 0 : Pe.height;
    if (!Ve || Ve.type === "match_parent" ? nr = Dt = window.innerWidth : Ve.type === "fixed" && Ve.value ? nr = Dt = Ve.value : nr = Ft.width, (Ge == null ? void 0 : Ge.type) === "match_parent" ? er = Ot = window.innerHeight : (Ge == null ? void 0 : Ge.type) === "fixed" && Ge.value ? er = Ot = Ge.value : er = Ft.height, w === "left" || w === "bottom-left" || w === "top-left")
      st = dt.left - nr;
    else if (w === "top" || w === "bottom" || w === "center")
      st = (dt.left + dt.right) / 2 - nr / 2;
    else if (w === "right" || w === "bottom-right" || w === "top-right")
      st = dt.right;
    else
      return;
    if (w === "top" || w === "top-left" || w === "top-right")
      Q = dt.top - er;
    else if (w === "left" || w === "right" || w === "center")
      Q = (dt.top + dt.bottom) / 2 - er / 2;
    else if (w === "bottom-left" || w === "bottom" || w === "bottom-right")
      Q = dt.bottom;
    else
      return;
    as && fe || (st -= Pt.left, Q -= Pt.top), st += m || 0, Q += f || 0, e(10, xe = `${st}px`), e(11, we = `${Q}px`), e(12, Te = Dt !== null ? `${Dt}px` : ""), e(13, ge = Ot !== null ? `${Ot}px` : ""), e(1, Qe = !0), Dt === null || Ot === null ? typeof ResizeObserver < "u" && !ye && (ye = new ResizeObserver(() => {
      requestAnimationFrame(ve);
    }), ye.observe(be)) : ye == null || ye.disconnect();
  }
  function qe(T) {
    if ($n.length && $n[$n.length - 1] !== be)
      return;
    const St = T.composedPath();
    Date.now() - Ae < 100 || St.includes(be) && !(as && St[0] === be) || Xe();
  }
  function Xe(T) {
    T == null || T.stopPropagation(), T == null || T.preventDefault(), he.getJsonWithVars(P.close_by_tap_outside) !== !1 && ($n = $n.filter((St) => St !== be), pe.onTooltipClose(B)), P.tap_outside_actions && he.execAnyActions(P.tap_outside_actions, { processUrls: !0 });
  }
  function ee() {
    ve();
  }
  function He(T) {
    $n.length && $n[$n.length - 1] !== be || T.key === "Escape" && !T.ctrlKey && !T.shiftKey && !T.altKey && !T.metaKey && ($n = $n.filter((St) => St !== be), pe.onTooltipClose(B));
  }
  function Oe(T) {
    $n = $n.filter((St) => St !== be), pe.onTooltipClose(B), T.preventDefault();
  }
  function lt() {
    x && x.animate({ opacity: [0, 1] }, {
      duration: l,
      easing: "ease-in-out"
    });
  }
  function _t() {
    x && be.insertBefore(x, Ie);
  }
  function it() {
    Ye != null && Ye.parentElement && x && (Ye.parentElement.insertBefore(x, Ye), x.animate({ opacity: [1, 0] }, {
      duration: u,
      easing: "ease-in-out"
    }));
  }
  no(() => {
    try {
      re = document.activeElement;
    } catch {
    }
    if (pe.tooltipRoot) {
      const T = window.getComputedStyle(be);
      e(6, be.style.fontSize = T.fontSize, be), e(6, be.style.fontFamily = T.fontFamily, be), e(6, be.style.lineHeight = T.lineHeight, be), pe.tooltipRoot.appendChild(be);
    }
    as && be && be instanceof HTMLDialogElement && be[fe ? "showModal" : "show"](), fe && $n.push(be);
  }), gl(() => {
    Qe || ve();
  }), dn(() => {
    if (he && he.destroy(), te && te.destroy(), ye == null || ye.disconnect(), $n = $n.filter((T) => T !== be), fe && re && re instanceof HTMLElement) {
      as && be && be instanceof HTMLDialogElement && be.close();
      try {
        re.focus({ preventScroll: !0 });
      } catch {
      }
    }
  });
  function Et(T) {
    Mr[T ? "unshift" : "push"](() => {
      x = T, e(8, x);
    });
  }
  function at(T) {
    Mr[T ? "unshift" : "push"](() => {
      Ye = T, e(9, Ye);
    });
  }
  function zt(T) {
    Mr[T ? "unshift" : "push"](() => {
      Ie = T, e(7, Ie);
    });
  }
  function ht(T) {
    Mr[T ? "unshift" : "push"](() => {
      be = T, e(6, be);
    });
  }
  function Z(T) {
    Mr[T ? "unshift" : "push"](() => {
      x = T, e(8, x);
    });
  }
  function de(T) {
    Mr[T ? "unshift" : "push"](() => {
      Ye = T, e(9, Ye);
    });
  }
  function ct(T) {
    Mr[T ? "unshift" : "push"](() => {
      Ie = T, e(7, Ie);
    });
  }
  function Be(T) {
    Mr[T ? "unshift" : "push"](() => {
      be = T, e(6, be);
    });
  }
  return t.$$set = (T) => {
    "ownerNode" in T && e(31, I = T.ownerNode), "data" in T && e(0, P = T.data), "internalId" in T && e(32, B = T.internalId), "parentComponentContext" in T && e(33, q = T.parentComponentContext);
  }, t.$$.update = () => {
    var T, St, dt, Ft, Pt;
    t.$$.dirty[0] & /*componentContext, data*/
    5 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && (he && he.destroy(), e(2, he = q.produceChildContext(P.div || {}, { isTooltipRoot: !0 })), P.substrate_div && e(14, te = q.produceChildContext(P.substrate_div, { isTooltipRoot: !0 }))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && z(e(20, n = q.getDerivedFromVars(P.position))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && y(e(19, o = q.getDerivedFromVars((St = (T = P.offset) == null ? void 0 : T.x) == null ? void 0 : St.value))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && p(e(18, i = q.getDerivedFromVars((Ft = (dt = P.offset) == null ? void 0 : dt.y) == null ? void 0 : Ft.value))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && se(e(17, s = q.getDerivedFromVars(P.animation_in))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && ue(e(16, a = q.getDerivedFromVars(P.animation_out))), t.$$.dirty[0] & /*$animationIn*/
    32 && (l = Ji() ? 0 : ha(_s(M || Yi))), t.$$.dirty[0] & /*$animationOut*/
    16 && (u = Ji() ? 0 : ha(_s(O || Yi))), t.$$.dirty[0] & /*data*/
    1 && (((Pt = P.mode) == null ? void 0 : Pt.type) === "non_modal" ? e(3, fe = !1) : e(3, fe = !0)), t.$$.dirty[0] & /*visible, modal*/
    10 && e(15, c = { visible: Qe, modal: fe });
  }, [
    P,
    Qe,
    he,
    fe,
    O,
    M,
    be,
    Ie,
    x,
    Ye,
    xe,
    we,
    Te,
    ge,
    te,
    c,
    a,
    s,
    i,
    o,
    n,
    C,
    _e,
    qe,
    Xe,
    ee,
    He,
    Oe,
    lt,
    _t,
    it,
    I,
    B,
    q,
    Et,
    at,
    zt,
    ht,
    Z,
    de,
    ct,
    Be
  ];
}
class f4 extends Wr {
  constructor(r) {
    super(), Hr(
      this,
      r,
      c4,
      u4,
      Tr,
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
const d4 = "appkit-root_platform_desktop", _4 = "appkit-menu", h4 = "appkit-menu_visible", p4 = "appkit-menu__list", g4 = "appkit-menu__item", Ys = {
  root_platform_desktop: d4,
  menu: _4,
  menu_visible: h4,
  menu__list: p4,
  menu__item: g4
}, { window: ld } = Ro;
function ad(t, r, e) {
  const n = t.slice();
  return n[23] = r[e], n;
}
function m4(t) {
  let r = (
    /*item*/
    t[23].text + ""
  ), e;
  return {
    c() {
      e = Bn(r);
    },
    l(n) {
      e = qn(n, r);
    },
    m(n, o) {
      K(n, e, o);
    },
    p(n, o) {
      o & /*items*/
      1 && r !== (r = /*item*/
      n[23].text + "") && Qn(e, r);
    },
    d(n) {
      n && k(e);
    }
  };
}
function ud(t) {
  let r, e, n, o;
  return e = new yl({
    props: {
      componentContext: (
        /*parentComponentContext*/
        t[1]
      ),
      actions: (
        /*item*/
        t[23].actions || /*item*/
        t[23].action && [
          /*item*/
          t[23].action
        ]
      ),
      cls: Ys.menu__item + " " + /*itemMix*/
      t[10],
      customAction: (
        /*onItemAction*/
        t[14]
      ),
      $$slots: { default: [m4] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      r = Me("li"), Jt(e.$$.fragment), n = gr();
    },
    l(i) {
      r = ze(i, "LI", {});
      var s = je(r);
      Xt(e.$$.fragment, s), n = mr(s), s.forEach(k);
    },
    m(i, s) {
      K(i, r, s), Ht(e, r, null), jt(r, n), o = !0;
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
      67108865 && (a.$$scope = { dirty: s, ctx: i }), e.$set(a);
    },
    i(i) {
      o || (G(e.$$.fragment, i), o = !0);
    },
    o(i) {
      oe(e.$$.fragment, i), o = !1;
    },
    d(i) {
      i && k(r), Wt(e);
    }
  };
}
function b4(t) {
  let r, e, n, o, i, s, a, l = dr(
    /*items*/
    t[0]
  ), u = [];
  for (let f = 0; f < l.length; f += 1)
    u[f] = ud(ad(t, l, f));
  const c = (f) => oe(u[f], 1, 1, () => {
    u[f] = null;
  });
  return {
    c() {
      r = Me("div"), e = Me("ul");
      for (let f = 0; f < u.length; f += 1)
        u[f].c();
      this.h();
    },
    l(f) {
      r = ze(f, "DIV", { class: !0 });
      var _ = je(r);
      e = ze(_, "UL", { class: !0 });
      var p = je(e);
      for (let m = 0; m < u.length; m += 1)
        u[m].l(p);
      p.forEach(k), _.forEach(k), this.h();
    },
    h() {
      g(e, "class", Ys.menu__list), g(r, "class", n = bt(
        "menu",
        Ys,
        /*mods*/
        t[7]
      ) + " " + /*$isDesktop*/
      (t[8] ? Fr.root_platform_desktop : "") + " " + /*popupMix*/
      t[9]), N(
        r,
        "top",
        /*menuY*/
        t[4]
      ), N(
        r,
        "left",
        /*menuX*/
        t[3]
      ), N(
        r,
        "width",
        /*menuWidth*/
        t[5]
      ), N(
        r,
        "height",
        /*menuHeight*/
        t[6]
      );
    },
    m(f, _) {
      K(f, r, _), jt(r, e);
      for (let p = 0; p < u.length; p += 1)
        u[p] && u[p].m(e, null);
      t[17](r), i = !0, s || (a = [
        et(
          ld,
          "click",
          /*onWindowClick*/
          t[12]
        ),
        et(
          ld,
          "resize",
          /*onWindowResize*/
          t[13]
        )
      ], s = !0);
    },
    p(f, [_]) {
      if (_ & /*parentComponentContext, items, itemMix, onItemAction*/
      17411) {
        l = dr(
          /*items*/
          f[0]
        );
        let p;
        for (p = 0; p < l.length; p += 1) {
          const m = ad(f, l, p);
          u[p] ? (u[p].p(m, _), G(u[p], 1)) : (u[p] = ud(m), u[p].c(), G(u[p], 1), u[p].m(e, null));
        }
        for (br(), p = l.length; p < u.length; p += 1)
          c(p);
        yr();
      }
      (!i || _ & /*mods, $isDesktop*/
      384 && n !== (n = bt(
        "menu",
        Ys,
        /*mods*/
        f[7]
      ) + " " + /*$isDesktop*/
      (f[8] ? Fr.root_platform_desktop : "") + " " + /*popupMix*/
      f[9])) && g(r, "class", n), _ & /*menuY*/
      16 && N(
        r,
        "top",
        /*menuY*/
        f[4]
      ), _ & /*menuX*/
      8 && N(
        r,
        "left",
        /*menuX*/
        f[3]
      ), _ & /*menuWidth*/
      32 && N(
        r,
        "width",
        /*menuWidth*/
        f[5]
      ), _ & /*menuHeight*/
      64 && N(
        r,
        "height",
        /*menuHeight*/
        f[6]
      );
    },
    i(f) {
      if (!i) {
        for (let _ = 0; _ < l.length; _ += 1)
          G(u[_]);
        f && yo(() => {
          i && (o || (o = qa(r, rd, { y: 20 }, !0)), o.run(1));
        }), i = !0;
      }
    },
    o(f) {
      u = u.filter(Boolean);
      for (let _ = 0; _ < u.length; _ += 1)
        oe(u[_]);
      f && (o || (o = qa(r, rd, { y: 20 }, !1)), o.run(0)), i = !1;
    },
    d(f) {
      f && k(r), hn(u, f), t[17](null), f && o && o.end(), s = !1, Gr(a);
    }
  };
}
function y4(t, r, e) {
  let n, o, { ownerNode: i } = r, { items: s } = r, { parentComponentContext: a } = r;
  const l = zr($r), u = l.getCustomization("menuPopupClass") || "", c = l.getCustomization("menuItemClass") || "", f = l.isDesktop;
  kn(t, f, (C) => e(8, o = C));
  const _ = Date.now(), p = oh();
  let m, h = !1, y = "", w = "", D = "", z = "", O = null;
  function $() {
    if (!m || !i)
      return;
    const C = m.parentElement;
    if (!C)
      return;
    const I = i.getBoundingClientRect(), P = m.getBoundingClientRect(), B = C.getBoundingClientRect(), q = window.innerWidth, pe = window.innerHeight;
    let _e = 0, Ae = 0, be = P.width, Ie = P.height;
    _e = I.left - B.left, Ae = I.bottom - B.top, _e + be > q && (_e = q - be), _e < 0 && (_e = 0), Ae + Ie > pe && (I.top - B.top - Ie > 0 ? Ae = I.top - B.top - Ie : Ae = pe - Ie), Ae < 0 && (Ae = 0), e(3, y = `${_e}px`), e(4, w = `${Ae}px`), e(5, D = ""), e(6, z = ""), e(16, h = !0), typeof ResizeObserver < "u" && !O && (O = new ResizeObserver(() => {
      requestAnimationFrame($);
    }), O.observe(m));
  }
  function ue(C) {
    Date.now() - _ < 100 || C.composedPath().includes(m) || p("close");
  }
  function M() {
    $();
  }
  function Y() {
    return p("close"), !0;
  }
  no(() => {
    if (l.tooltipRoot) {
      const C = window.getComputedStyle(m);
      e(2, m.style.fontSize = C.fontSize, m), e(2, m.style.fontFamily = C.fontFamily, m), e(2, m.style.lineHeight = C.lineHeight, m), l.tooltipRoot.appendChild(m);
    }
  }), gl(() => {
    h || $();
  }), dn(() => {
    O == null || O.disconnect();
  });
  function se(C) {
    Mr[C ? "unshift" : "push"](() => {
      m = C, e(2, m);
    });
  }
  return t.$$set = (C) => {
    "ownerNode" in C && e(15, i = C.ownerNode), "items" in C && e(0, s = C.items), "parentComponentContext" in C && e(1, a = C.parentComponentContext);
  }, t.$$.update = () => {
    t.$$.dirty & /*visible*/
    65536 && e(7, n = { visible: h });
  }, [
    s,
    a,
    m,
    y,
    w,
    D,
    z,
    n,
    o,
    u,
    c,
    f,
    ue,
    M,
    Y,
    i,
    h,
    se
  ];
}
class w4 extends Wr {
  constructor(r) {
    super(), Hr(this, r, y4, b4, Tr, {
      ownerNode: 15,
      items: 0,
      parentComponentContext: 1
    });
  }
}
const { Map: v4 } = Ro;
function cd(t, r, e) {
  const n = t.slice();
  return n[134] = r[e], n;
}
function fd(t) {
  let r, e, n, o, i, s, a, l, u, c;
  e = new Nv({
    props: { svgFiltersMap: (
      /*svgFiltersMap*/
      t[5]
    ) }
  }), o = new oo({
    props: {
      componentContext: (
        /*rootStateComponentContext*/
        t[6]
      )
    }
  });
  let f = (
    /*tooltips*/
    t[3] && dd(t)
  ), _ = (
    /*menu*/
    t[4] && hd(t)
  );
  return {
    c() {
      r = Me("div"), Jt(e.$$.fragment), n = gr(), Jt(o.$$.fragment), i = gr(), f && f.c(), s = gr(), _ && _.c(), this.h();
    },
    l(p) {
      r = ze(p, "DIV", { class: !0, dir: !0 });
      var m = je(r);
      Xt(e.$$.fragment, m), n = mr(m), Xt(o.$$.fragment, m), i = mr(m), f && f.l(m), s = mr(m), _ && _.l(m), m.forEach(k), this.h();
    },
    h() {
      g(r, "class", a = Fr.root + /*$isDesktop*/
      (t[7] ? ` ${Fr.root_platform_desktop}` : "") + /*mix*/
      (t[0] ? ` ${/*mix*/
      t[0]}` : "")), g(
        r,
        "dir",
        /*$directionStore*/
        t[8]
      );
    },
    m(p, m) {
      K(p, r, m), Ht(e, r, null), jt(r, n), Ht(o, r, null), jt(r, i), f && f.m(r, null), jt(r, s), _ && _.m(r, null), l = !0, u || (c = et(r, "touchstart", C4, { passive: !0 }), u = !0);
    },
    p(p, m) {
      const h = {};
      m[0] & /*svgFiltersMap*/
      32 && (h.svgFiltersMap = /*svgFiltersMap*/
      p[5]), e.$set(h);
      const y = {};
      m[0] & /*rootStateComponentContext*/
      64 && (y.componentContext = /*rootStateComponentContext*/
      p[6]), o.$set(y), /*tooltips*/
      p[3] ? f ? (f.p(p, m), m[0] & /*tooltips*/
      8 && G(f, 1)) : (f = dd(p), f.c(), G(f, 1), f.m(r, s)) : f && (br(), oe(f, 1, 1, () => {
        f = null;
      }), yr()), /*menu*/
      p[4] ? _ ? (_.p(p, m), m[0] & /*menu*/
      16 && G(_, 1)) : (_ = hd(p), _.c(), G(_, 1), _.m(r, null)) : _ && (br(), oe(_, 1, 1, () => {
        _ = null;
      }), yr()), (!l || m[0] & /*$isDesktop, mix*/
      129 && a !== (a = Fr.root + /*$isDesktop*/
      (p[7] ? ` ${Fr.root_platform_desktop}` : "") + /*mix*/
      (p[0] ? ` ${/*mix*/
      p[0]}` : ""))) && g(r, "class", a), (!l || m[0] & /*$directionStore*/
      256) && g(
        r,
        "dir",
        /*$directionStore*/
        p[8]
      );
    },
    i(p) {
      l || (G(e.$$.fragment, p), G(o.$$.fragment, p), G(f), G(_), l = !0);
    },
    o(p) {
      oe(e.$$.fragment, p), oe(o.$$.fragment, p), oe(f), oe(_), l = !1;
    },
    d(p) {
      p && k(r), Wt(e), Wt(o), f && f.d(), _ && _.d(), u = !1, c();
    }
  };
}
function dd(t) {
  let r = [], e = new v4(), n, o, i = dr(
    /*tooltips*/
    t[3]
  );
  const s = (a) => (
    /*item*/
    a[134].internalId
  );
  for (let a = 0; a < i.length; a += 1) {
    let l = cd(t, i, a), u = s(l);
    e.set(u, r[a] = _d(u, l));
  }
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      n = Re();
    },
    l(a) {
      for (let l = 0; l < r.length; l += 1)
        r[l].l(a);
      n = Re();
    },
    m(a, l) {
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(a, l);
      K(a, n, l), o = !0;
    },
    p(a, l) {
      l[0] & /*tooltips, rootStateComponentContext*/
      72 && (i = dr(
        /*tooltips*/
        a[3]
      ), br(), r = Fd(r, l, s, 1, a, i, e, n.parentNode, Id, _d, n, cd), yr());
    },
    i(a) {
      if (!o) {
        for (let l = 0; l < i.length; l += 1)
          G(r[l]);
        o = !0;
      }
    },
    o(a) {
      for (let l = 0; l < r.length; l += 1)
        oe(r[l]);
      o = !1;
    },
    d(a) {
      a && k(n);
      for (let l = 0; l < r.length; l += 1)
        r[l].d(a);
    }
  };
}
function _d(t, r) {
  let e, n, o;
  return n = new f4({
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
    key: t,
    first: null,
    c() {
      e = Re(), Jt(n.$$.fragment), this.h();
    },
    l(i) {
      e = Re(), Xt(n.$$.fragment, i), this.h();
    },
    h() {
      this.first = e;
    },
    m(i, s) {
      K(i, e, s), Ht(n, i, s), o = !0;
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
      o || (G(n.$$.fragment, i), o = !0);
    },
    o(i) {
      oe(n.$$.fragment, i), o = !1;
    },
    d(i) {
      i && k(e), Wt(n, i);
    }
  };
}
function hd(t) {
  let r, e;
  return r = new w4({
    props: {
      ownerNode: (
        /*menu*/
        t[4].node
      ),
      items: (
        /*menu*/
        t[4].items
      ),
      parentComponentContext: (
        /*menu*/
        t[4].componentContext || /*rootStateComponentContext*/
        t[6]
      )
    }
  }), r.$on(
    "close",
    /*close_handler*/
    t[45]
  ), {
    c() {
      Jt(r.$$.fragment);
    },
    l(n) {
      Xt(r.$$.fragment, n);
    },
    m(n, o) {
      Ht(r, n, o), e = !0;
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
      e || (G(r.$$.fragment, n), e = !0);
    },
    o(n) {
      oe(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Wt(r, n);
    }
  };
}
function k4(t) {
  let r, e, n = !/*hasError*/
  t[1] && !/*hasIdError*/
  t[2] && /*rootStateComponentContext*/
  t[6] && fd(t);
  return {
    c() {
      n && n.c(), r = Re();
    },
    l(o) {
      n && n.l(o), r = Re();
    },
    m(o, i) {
      n && n.m(o, i), K(o, r, i), e = !0;
    },
    p(o, i) {
      !/*hasError*/
      o[1] && !/*hasIdError*/
      o[2] && /*rootStateComponentContext*/
      o[6] ? n ? (n.p(o, i), i[0] & /*hasError, hasIdError, rootStateComponentContext*/
      70 && G(n, 1)) : (n = fd(o), n.c(), G(n, 1), n.m(r.parentNode, r)) : n && (br(), oe(n, 1, 1, () => {
        n = null;
      }), yr());
    },
    i(o) {
      e || (G(n), e = !0);
    },
    o(o) {
      oe(n), e = !1;
    },
    d(o) {
      o && k(r), n && n.d(o);
    }
  };
}
let Na = Oo(!0), Is = 0;
function pd() {
  Na.set(!1);
}
function gd() {
  Na.set(!0);
}
const j4 = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean"]), E4 = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean", "array", "dict"]);
function Yo(t, r) {
  if (t && r)
    return new Map([...t, ...r]);
  if (t)
    return t;
  if (r)
    return r;
}
function C4() {
}
function A4(t, r, e) {
  var Qr, Kr, _n;
  let n, o, i, s, { id: a } = r, { json: l = {} } = r, { platform: u = "auto" } = r, { theme: c = "system" } = r, { globalVariablesController: f = void 0 } = r, { mix: _ = "" } = r, { customization: p = {} } = r, { builtinProtocols: m = ["http", "https", "tel", "mailto", "intent"] } = r, { extensions: h = /* @__PURE__ */ new Map() } = r, { onError: y = void 0 } = r, { onStat: w = void 0 } = r, { onSubmit: D = void 0 } = r, { onCustomAction: z = void 0 } = r, { onComponent: O = void 0 } = r, { typefaceProvider: $ = (v) => "" } = r, { fetchInit: ue = {} } = r, { tooltipRoot: M = void 0 } = r, { customComponents: Y = void 0 } = r, { direction: se = "ltr" } = r, { store: C = void 0 } = r, { pagerChildrenClipEnabled: I = !0 } = r, { pagerMouseDragEnabled: P = !0 } = r, { weekStartDay: B = 0 } = r, { videoPlayerProvider: q = void 0 } = r, { devtoolCreateHierarchy: pe = "lazy" } = r, _e = !0, Ae = Oo(u === "desktop");
  if (kn(t, Ae, (v) => e(7, i = v)), u === "auto" && typeof matchMedia < "u") {
    const v = matchMedia("(any-pointer: coarse)");
    Ae.set(!v.matches), v.addListener(() => {
      Ae.set(!v.matches);
    });
  }
  let be = "light", Ie = null;
  const x = Oo(se === "rtl" ? "rtl" : "ltr");
  kn(t, x, (v) => e(8, s = v));
  function Ye() {
    c !== "system" || !Ie || e(41, be = Ie.matches ? "dark" : "light");
  }
  function Qe(v) {
    e(12, c = v);
  }
  function xe() {
    return /* @__PURE__ */ new Map();
  }
  function we() {
    return /* @__PURE__ */ new Map();
  }
  function Te(v) {
    e(11, l = v);
  }
  function ge(v) {
    return Fe(v, T);
  }
  const ye = new Set(m);
  let he = !1, te = !1;
  a || (te = !0, T(X(new Error('"id" prop is required'))));
  const fe = { stateChange: !1 }, re = f || new C_(), ve = re.getLastAddedVariableStore(), qe = re.getVariables(), Xe = /* @__PURE__ */ new Map(), ee = /* @__PURE__ */ new Map(), He = /* @__PURE__ */ new Map(), Oe = /* @__PURE__ */ new Map();
  let lt = null;
  const _t = /* @__PURE__ */ new Map();
  let it = 0, Et = [];
  const at = /* @__PURE__ */ new Set();
  let zt;
  const ht = [];
  function Z(v) {
    return p == null ? void 0 : p[v];
  }
  function de(v, A, { additionalVars: S, keepComplex: ae = !1, customFunctions: W, emptyVarsError: ot, maxDepth: Ne } = {}) {
    var $t;
    if (!A)
      return Qo(A);
    const rr = Yo(ee, S), Mt = td(A, v, C, B, Ne);
    if (!Mt.vars.length)
      if (Mt.hasExpression) {
        const pt = Mt.applyVars(rr, W);
        if (!(($t = pt.usedVars) != null && $t.size))
          return ot && ot(), Qo(pt.result);
      } else
        return ot && ot(), Qo(A);
    const U = Mt.vars.map((pt) => rr.get(pt) || Ct(pt)).filter(Wo);
    return Oo(void 0, (pt) => {
      const Sr = /* @__PURE__ */ new Map();
      let Or;
      const Cn = () => {
        var Yr;
        const on = Mt.applyVars(rr, W, ae);
        for (const [cn, Wn] of Sr)
          (Yr = on.usedVars) != null && Yr.has(cn) || (Wn(), Sr.delete(cn));
        if (on.usedVars) {
          for (const cn of on.usedVars)
            if (!Sr.has(cn)) {
              let Wn = !0;
              Sr.set(cn, cn.subscribe(() => {
                Wn || pt(Cn()), Wn = !1;
              }));
            }
        }
        return on.result;
      };
      return Or = Zi(U, Cn).subscribe((on) => {
        pt(on);
      }), () => {
        Or == null || Or();
        for (const [on, Yr] of Sr)
          Yr();
      };
    });
  }
  function ct(v, A, S, ae = !1, W = void 0) {
    const ot = td(A, v, C, B);
    if (!ot.hasExpression)
      return A;
    const Ne = Yo(ee, S);
    return ot.applyVars(Ne, W, ae).result;
  }
  function Be(v, A, S) {
    const ae = /* @__PURE__ */ new Map(), W = Ms(v, "dict", A);
    ae.set(v, W);
    const ot = Ms("index", "integer", S);
    return ae.set("index", ot), ae;
  }
  function T(v) {
    y ? y({ error: v }) : (v == null ? void 0 : v.level) === "warn" ? console.warn(v) : console.error(v);
  }
  function St(v, A) {
    w && w({ type: v, action: A });
  }
  function dt(v) {
    return v in n;
  }
  function Ft(v, A) {
    if (!v)
      return { json: v, templateContext: A };
    const S = /* @__PURE__ */ new Set([v.type]);
    for (; v.type && v.type in n; ) {
      if ({ json: v, templateContext: A } = zv(v, A, n, T), S.has(v.type))
        return { json: v, templateContext: A };
      S.add(v.type);
    }
    return { json: v, templateContext: A };
  }
  let Pt = 0;
  function st(v) {
    return `${a}-${Pt++}`;
  }
  function Q(v) {
    return `divkit-${st()}`;
  }
  let Dt = {}, Ot = {};
  function nr(v, A) {
    const S = `${v}:${A}`;
    if (Ot[S] = Ot[S] || 0, ++Ot[S], Dt[S])
      return Dt[S];
    const ae = `${st()}-svg-filter`;
    return e(5, Dt = { ...Dt, [S]: ae }), ae;
  }
  function er(v, A) {
    if (!v)
      return;
    const S = `${v}:${A}`;
    Ot[S] && --Ot[S] === 0 && e(5, Dt = Object.keys(Dt).reduce(
      (ae, W) => (Ot[W] && (ae[W] = Dt[W]), ae),
      {}
    ));
  }
  const Ve = st() + "-id-", Ge = /* @__PURE__ */ new Map(), yt = /* @__PURE__ */ new Map();
  function Pe(v) {
    return Ve + v;
  }
  function tt(v, A) {
    let S = Ge.get(v) || [];
    return Ge.has(v) || Ge.set(v, S), S.push(A), () => {
      S = S.filter((W) => W !== A), S.length || Ge.delete(v);
      const ae = Pe(v);
      yt.has(ae) && yt.delete(ae);
    };
  }
  function Le(v) {
    var S, ae;
    const A = (ae = (S = Ge.get(v)) == null ? void 0 : S[0]) == null ? void 0 : ae.node();
    if (A) {
      const W = Pe(v), ot = yt.get(W);
      return ot && ot !== A && ot.removeAttribute("id"), A.setAttribute("id", W), yt.set(W, A), W;
    }
    return "";
  }
  async function Tt(v, A) {
    var Ne, rr;
    if (!v)
      throw new Error("Missing state id");
    let S = v.split("/");
    const ae = S.length % 2 === 0 && H3(A);
    let W = ae || cr;
    const ot = (A == null ? void 0 : A.logError) || T;
    if (!ae)
      if ((Ne = W.states) != null && Ne.root) {
        const Mt = W.states.root;
        if (Mt.length > 1) {
          ot(X(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: v } }));
          return;
        }
        if (W = await Mt[0](S[0]), !W)
          return;
        S = S.slice(1);
      } else
        return;
    for (let Mt = 0; Mt < S.length; Mt += 2) {
      const U = S[Mt], $t = S[Mt + 1];
      if ((rr = W.states) != null && rr[U]) {
        const pt = W.states[U];
        if (pt.length > 1) {
          ot(X(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: v } }));
          return;
        }
        if (W = await pt[0]($t), !W)
          return;
      } else
        return;
    }
  }
  async function We(v, A, S) {
    var Sr;
    const ae = (v == null ? void 0 : v.logError) || T;
    if (!q3(A)) {
      ae(X(new Error("Incorrect submit action"), {
        additional: { containerId: A.container_id }
      }));
      return;
    }
    const W = Ge.get(A.container_id);
    if ((W == null ? void 0 : W.length) !== 1) {
      ae(X(new Error("Error resolving container. Found multiple elements that respond to id"), {
        additional: { containerId: A.container_id }
      }));
      return;
    }
    const ot = W[0].context(), Ne = {};
    if (ot.variables)
      for (const [Or, Cn] of ot.variables) {
        const on = Cn.getValue();
        typeof on == "bigint" ? Ne[Or] = Number(on) : Ne[Or] = on;
      }
    if (D) {
      Promise.resolve().then(() => D(A, Ne)).then(() => {
        Bt(S.on_success_actions, { componentContext: v });
      }).catch(() => {
        Bt(S.on_fail_actions, { componentContext: v });
      });
      return;
    }
    const rr = Object.keys(Ne).length > 0, Mt = (A.request.method || "post").toLowerCase();
    if ((Mt === "get" || Mt === "head") && rr) {
      ae(X(new Error("Can't send variables using the get/head method."), { additional: { url: A.request.url } }));
      return;
    }
    let U = !1;
    const $t = [];
    (Sr = A.request.headers) == null || Sr.forEach((Or) => {
      $t.push([Or.name, Or.value]), Or.name.toLowerCase() === "content-type" && (U = !0);
    }), U || $t.push(["Content-Type", "application/json"]);
    let pt;
    typeof ue == "function" ? pt = ue(A.request.url) : pt = ue, fetch(A.request.url, {
      ...pt,
      method: Mt,
      headers: $t,
      body: rr ? JSON.stringify(Ne) : void 0
    }).then((Or) => {
      if (!Or.ok)
        throw new Error("Response is not ok");
      Bt(S.on_success_actions, { componentContext: v });
    }).catch((Or) => {
      ae(X(new Error("Failed to submit"), {
        additional: {
          url: A.request.url,
          originalError: Or
        }
      })), Bt(S.on_fail_actions, { componentContext: v });
    });
  }
  function vt(v, A) {
    var W, ot, Ne, rr, Mt, U, $t, pt, Sr;
    const S = (v == null ? void 0 : v.logError) || T, ae = A.id && ft(A.id);
    if (!ae) {
      S(X(new Error('Missing component for "scroll_to" action'), { additional: { id: A.id } }));
      return;
    }
    if (A.animated !== void 0 && typeof A.animated != "boolean") {
      S(X(new Error('Missing properties for "scroll_to" action'), { additional: { id: A.id } }));
      return;
    }
    switch ((W = A.destination) == null ? void 0 : W.type) {
      case "index": {
        typeof A.destination.value == "number" && ae.setCurrentItem(A.destination.value, (ot = A.animated) != null ? ot : !0);
        break;
      }
      case "offset": {
        typeof A.destination.value == "number" && ((rr = ae.scrollToPosition) == null || rr.call(ae, A.destination.value, (Ne = A.animated) != null ? Ne : !0));
        break;
      }
      case "start": {
        (U = ae.scrollToStart) == null || U.call(ae, (Mt = A.animated) != null ? Mt : !0);
        break;
      }
      case "end": {
        (pt = ae.scrollToEnd) == null || pt.call(ae, ($t = A.animated) != null ? $t : !0);
        break;
      }
      default:
        S(X(new Error('Unknown destination for "scroll_to" action'), {
          additional: {
            id: A.id,
            destination: (Sr = A.destination) == null ? void 0 : Sr.type
          }
        }));
    }
  }
  function qt(v, A) {
    var W;
    const S = (v == null ? void 0 : v.logError) || T, ae = A.id && ft(A.id);
    if (!ae) {
      S(X(new Error('Missing component for "scroll_by" action'), { additional: { id: A.id } }));
      return;
    }
    if (typeof A.item_count != "number" && A.item_count !== void 0 || typeof A.offset != "number" && A.offset !== void 0 || A.overflow !== void 0 && A.overflow !== "clamp" && A.overflow !== "ring" || A.animated !== void 0 && typeof A.animated != "boolean") {
      S(X(new Error('Missing properties for "scroll_by" action'), { additional: { id: A.id } }));
      return;
    }
    (W = ae.scrollCombined) == null || W.call(ae, {
      step: A.item_count,
      offset: A.offset,
      overflow: A.overflow,
      animated: A.animated
    });
  }
  function Nt(v, A, { item: S, step: ae, overflow: W, animated: ot }) {
    var $t, pt, Sr, Or, Cn;
    if (!A)
      throw new Error(`Missing id for "${v}" action`);
    const Ne = Number(S);
    if (v === "set_current_item" && Number.isNaN(Ne))
      throw new Error(`Incorrect item for "${v}" action`);
    let rr = Number(ae);
    if (!ae && (v === "set_previous_item" || v === "set_next_item") && (rr = 1), !ae && (v === "scroll_backward" || v === "scroll_forward" || v === "scroll_to_position") || Number.isNaN(rr))
      throw new Error(`Incorrect step value for "${v}" action`);
    if (W && W !== "clamp" && W !== "ring")
      throw new Error(`Incorrect overflow value for "${v}" action`);
    W = W || "clamp";
    const Mt = ot === null || ot !== "0" && ot !== "false", U = ft(A);
    if (U)
      switch (v) {
        case "set_current_item":
          U.setCurrentItem(Ne, Mt);
          return;
        case "set_previous_item":
          U.setPreviousItem(rr, W, Mt);
          return;
        case "set_next_item":
          U.setNextItem(rr, W, Mt);
          return;
        case "scroll_to_start":
          ($t = U.scrollToStart) == null || $t.call(U, Mt);
          return;
        case "scroll_to_end":
          (pt = U.scrollToEnd) == null || pt.call(U, Mt);
          return;
        case "scroll_backward":
          (Sr = U.scrollCombined) == null || Sr.call(U, {
            offset: -rr,
            overflow: W,
            animated: Mt
          });
          return;
        case "scroll_forward":
          (Or = U.scrollCombined) == null || Or.call(U, {
            offset: rr,
            overflow: W,
            animated: Mt
          });
          return;
        case "scroll_to_position":
          (Cn = U.scrollToPosition) == null || Cn.call(U, rr, Mt);
          return;
      }
  }
  function ar(v, A, S) {
    const ae = (S == null ? void 0 : S.logError) || T;
    if (v) {
      const W = ft(v);
      W ? A === "start" ? W.start() : A === "pause" ? W.pause() : ae(X(new Error("Unknown video action"), { additional: { id: v, action: A } })) : ae(X(new Error("Video component is not found"), { additional: { id: v, action: A } }));
    } else
      ae(X(new Error("Missing id in video action"), { additional: { action: A } }));
  }
  function Fe(v, A, S) {
    var ae, W, ot;
    if (v.templates)
      for (const Ne in v.templates)
        n.hasOwnProperty(Ne) || (n[Ne] = v.templates[Ne]);
    if (Array.isArray((ae = v.patch) == null ? void 0 : ae.changes)) {
      if (v.patch.mode === "transactional") {
        const Ne = v.patch.changes.find((rr) => {
          const Mt = Cr.get(rr.id);
          if (!Mt)
            return !0;
          const U = Array.isArray(rr.items) ? rr.items.length : 0;
          return !!(Mt.isSingleMode && U !== 1);
        });
        if (Ne)
          return A(X(new Error("Skipping transactional, child is not found or broken"), { additional: { url: S, id: Ne.id } })), Bt((W = v.patch) == null ? void 0 : W.on_failed_actions), !1;
      }
      return v.patch.changes.forEach((Ne) => {
        const rr = Cr.get(Ne.id);
        rr && rr.replaceWith(Ne.id, Ne.items);
      }), Bt((ot = v.patch) == null ? void 0 : ot.on_applied_actions), !0;
    }
    return !1;
  }
  function At(v, A, S) {
    const ae = (S == null ? void 0 : S.logError) || T;
    if (v) {
      let W;
      typeof ue == "function" ? W = ue(v) : W = ue, fetch(v, W).then((ot) => {
        if (!ot.ok)
          throw new Error("Response is not ok");
        return ot.json();
      }).then((ot) => {
        if (!ot) {
          ae(X(new Error("Incorrect patch"), { additional: { url: v } })), Bt(A == null ? void 0 : A.on_fail_actions, { componentContext: S });
          return;
        }
        Fe(ot, ae, v) ? Bt(A == null ? void 0 : A.on_success_actions, { componentContext: S }) : Bt(A == null ? void 0 : A.on_fail_actions, { componentContext: S });
      }).catch((ot) => {
        ae(X(new Error("Failed to download the patch"), { additional: { url: v, originalError: ot } })), Bt(A == null ? void 0 : A.on_fail_actions, { componentContext: S });
      });
    } else
      ae(X(new Error("Missing url in download action"), { additional: { url: v } }));
  }
  function ur(v, A, S) {
    var rr;
    const ae = (S == null ? void 0 : S.logError) || T;
    if (!v) {
      ae(X(new Error("Missing id in show_tooltip action")));
      return;
    }
    const W = Vt.get(v);
    if (!W) {
      ae(X(new Error("Tooltip with the provided id is not found"), { additional: { id: v } }));
      return;
    }
    if (A !== "true" && A !== !0 && at.has(v))
      return;
    at.add(v);
    const ot = {
      internalId: ++it,
      ownerNode: W.onwerNode,
      desc: W.tooltip,
      timeoutId: 0,
      componentContext: S
    };
    e(3, Et = [...Et, ot]);
    const Ne = (rr = W.tooltip.duration) != null ? rr : 5e3;
    Ne && (ot.timeoutId = window.setTimeout(
      () => {
        ot.timeoutId = 0, e(3, Et = Et.filter((Mt) => Mt.internalId !== ot.internalId));
      },
      Ne
    ));
  }
  function sr(v, A) {
    const S = (A == null ? void 0 : A.logError) || T;
    if (!v) {
      S(X(new Error("Missing id in hide_tooltip action")));
      return;
    }
    e(3, Et = Et.filter((ae) => {
      const W = ae.desc.id !== v;
      return !W && ae.timeoutId && (clearTimeout(ae.timeoutId), ae.timeoutId = null), W;
    }));
  }
  function lr(v, A, S, ae, W) {
    const ot = (v == null ? void 0 : v.logError) || T;
    if (!C) {
      ot(X(new Error("Store is not configured")));
      return;
    }
    let Ne = S;
    if (!A || !Ne || !ae || !W) {
      ot(X(new Error("Missing required params for set_stored_value")));
      return;
    }
    if (!E4.has(ae)) {
      ot(X(new Error("Incorrect stored type")));
      return;
    }
    if (ae === "boolean" && (Ne = Ne === "true" || Ne === "1"), C.set)
      C.set(A, ae, Ne, Number(W));
    else if (C.setValue) {
      if (!j4.has(ae)) {
        ot(X(new Error("Incorrect stored type")));
        return;
      }
      if (typeof Ne != "string" && typeof Ne != "number" && typeof Ne != "boolean") {
        ot(X(new Error("Incorrect stored value")));
        return;
      }
      (ae === "integer" || ae === "number") && (Ne = Number(Ne)), C.setValue(A, ae, Ne, Number(W));
    }
  }
  function hr(v) {
    Er(ct(T, v, void 0, !0), v);
  }
  async function Er(v, A, S) {
    var rr, Mt;
    const ae = v.scope_id, W = (S == null ? void 0 : S.logError) || T;
    if (ae) {
      const U = Pr.get(ae);
      if (U && (U == null ? void 0 : U.size) > 1)
        W(X(new Error(`Ambiguous scope id. There are ${U.size} divs with id '${ae}'`), { additional: { count: U.size, scopeId: ae } }));
      else if ((U == null ? void 0 : U.size) === 1) {
        const $t = U.values().next().value;
        $t && (S = $t);
      } else {
        W(X(new Error("The scope with the specified scope_id is missing"), { additional: { scopeId: ae } }));
        return;
      }
    }
    const ot = v.url ? String(v.url) : "", Ne = v.typed;
    if (el(v)) {
      if (Ne)
        switch (Ne.type) {
          case "set_variable": {
            const { variable_name: U, value: $t } = Ne;
            if (U && $t) {
              const pt = (S == null ? void 0 : S.getVariable(U)) || ee.get(U);
              pt ? pt.getType() === $t.type ? pt.setValue($t.value) : W(X(new Error("Trying to set value with invalid type"), { additional: { name: U, type: $t.type } })) : W(X(new Error("Cannot find variable"), { additional: { name: U } }));
            } else
              W(X(new Error("Incorrect set_variable action"), { additional: { name: U } }));
            break;
          }
          case "array_insert_value":
            P3(S, ee, W, Ne);
            break;
          case "array_remove_value":
            N3(S, ee, W, Ne);
            break;
          case "array_set_value":
            z3(S, ee, W, Ne);
            break;
          case "copy_to_clipboard":
            B3(W, Ne);
            break;
          case "focus_element": {
            const U = Ne.element_id && Ar.get(Ne.element_id);
            U ? U.focus() : W(X(new Error("Incorrect focus_element action"), {
              additional: { elementId: Ne.element_id }
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
            O3(S, ee, W, Ne);
            break;
          }
          case "animator_start": {
            const U = Ne.animator_id && (S == null ? void 0 : S.getAnimator(Ne.animator_id));
            if (!U) {
              W(X(new Error("Missing animator"), {
                additional: { animator_id: Ne.animator_id }
              }));
              return;
            }
            const { duration: $t, start_delay: pt, interpolator: Sr, direction: Or, repeat_count: Cn, start_value: on, end_value: Yr } = Ne, cn = S ? S.getJsonWithVars(U) : ct(T, U), Wn = {
              ...cn,
              end_actions: U.end_actions,
              cancel_actions: U.cancel_actions,
              duration: $t !== void 0 ? $t : cn.duration,
              start_delay: pt !== void 0 ? pt : cn.start_delay,
              interpolator: Sr !== void 0 ? Sr : cn.interpolator,
              direction: Or !== void 0 ? Or : cn.direction,
              repeat_count: Cn !== void 0 ? Cn : cn.repeat_count,
              start_value_typed: on,
              end_value_typed: Yr
            }, Kn = U.variable_name && ((S == null ? void 0 : S.getVariable(U.variable_name)) || ee.get(U.variable_name));
            if (!Kn)
              return;
            const ho = _t.get(U.id);
            ho && ho.stop();
            const Ln = R3(
              Wn,
              Kn,
              () => {
                _t.delete(U.id);
              },
              (Zt, b) => ((S == null ? void 0 : S.execAnyActions) || Bt)(Zt, b)
            );
            Ln && _t.set(U.id, Ln);
            break;
          }
          case "animator_stop": {
            const U = _t.get(Ne.animator_id);
            U && (U.stop(), _t.delete(Ne.animator_id));
            break;
          }
          case "show_tooltip": {
            ur(Ne.id, Ne.multiple, S);
            break;
          }
          case "hide_tooltip": {
            sr(Ne.id, S);
            break;
          }
          case "timer": {
            lt ? lt.execTimerAction(Ne.id, Ne.action) : W(X(new Error("Incorrect timer action"), {
              additional: {
                id: Ne.id,
                action: Ne.action
              }
            }));
            break;
          }
          case "download": {
            At(Ne.url, A.typed, S);
            break;
          }
          case "video": {
            ar(Ne.id, Ne.action, S);
            break;
          }
          case "set_stored_value": {
            lr(S, Ne.name, (rr = Ne.value) == null ? void 0 : rr.value, (Mt = Ne.value) == null ? void 0 : Mt.type, Ne.lifetime);
            break;
          }
          case "set_state": {
            await Tt(Ne.state_id, S);
            break;
          }
          case "submit": {
            await We(S, Ne, A.typed);
            break;
          }
          case "scroll_to": {
            vt(S, Ne);
            break;
          }
          case "scroll_by": {
            qt(S, Ne);
            break;
          }
          case "update_structure": {
            K3(S, ee, W, Ne);
            break;
          }
          case "custom": {
            kr({
              ...A,
              // todo remove in major release
              url: ""
            });
            break;
          }
          default:
            W(X(new Error("Unknown type of action"), { additional: { type: Ne.type } }));
        }
      else if (ot)
        try {
          const U = ot.replace(/div-action:\/\//, ""), $t = /([^?]+)\?(.+)/.exec(U);
          if (!$t)
            return;
          const pt = new URLSearchParams($t[2]);
          switch ($t[1]) {
            case "set_state":
              await Tt(pt.get("state_id"), S);
              break;
            case "set_current_item":
            case "set_previous_item":
            case "set_next_item":
            case "scroll_to_start":
            case "scroll_to_end":
            case "scroll_backward":
            case "scroll_forward":
            case "scroll_to_position":
              Nt($t[1], pt.get("id"), {
                item: pt.get("item"),
                step: pt.get("step"),
                overflow: pt.get("overflow"),
                animated: pt.get("animated")
              });
              break;
            case "set_variable":
              const Sr = pt.get("name"), Or = pt.get("value");
              if (Sr && Or !== null) {
                const Yr = (S == null ? void 0 : S.getVariable(Sr)) || ee.get(Sr);
                Yr ? Yr.set(Or) : W(X(new Error("Cannot find variable"), { additional: { name: Sr } }));
              } else
                W(X(new Error("Incorrect set_variable_action"), { additional: { url: U } }));
              break;
            case "timer":
              const Cn = pt.get("action"), on = pt.get("id");
              lt ? lt.execTimerAction(on, Cn) : W(X(new Error("Incorrect timer action"), {
                additional: { id: on, action: Cn }
              }));
              break;
            case "video":
              ar(pt.get("id"), pt.get("action"), S);
              break;
            case "download":
              At(pt.get("url"), A.download_callbacks, S);
              break;
            case "show_tooltip":
              ur(pt.get("id"), pt.get("multiple"), S);
              break;
            case "hide_tooltip":
              sr(pt.get("id"), S);
              break;
            case "set_stored_value": {
              lr(S, pt.get("name"), pt.get("value"), pt.get("type"), pt.get("lifetime"));
              break;
            }
            default:
              W(X(new Error("Unknown type of action"), { additional: { url: ot } }));
          }
        } catch (U) {
          W(X(U, { additional: { url: ot } }));
        }
    }
  }
  async function Bt(v, A = {}) {
    var W;
    if (!v || !Array.isArray(v))
      return;
    const S = ((W = A.componentContext) == null ? void 0 : W.logError) || T, ae = (ot) => A.componentContext ? A.componentContext.getJsonWithVars(ot, A.additionalVars, !0) : ct(S, ot, A.additionalVars, !0);
    for (let ot = 0; ot < v.length; ++ot) {
      let Ne = ae(v[ot]);
      const rr = Ne.is_enabled;
      if (rr === 0 || rr === !1)
        continue;
      const Mt = Ne.url;
      if (Ne.typed)
        await Er(Ne, v[ot], A.componentContext);
      else if (Mt) {
        const $t = ql(Mt);
        if ($t)
          if (Kl($t, ye)) {
            if (A.processUrls)
              if (Ne.target === "_blank") {
                const pt = window.open("", "_blank");
                pt && (pt.opener = null, pt.location = Mt);
              } else
                location.href = Mt;
          } else $t === "div-action" ? (await Er(Ne, v[ot], A.componentContext), await Fn()) : Ne.log_id && (kr(Ne), await Fn());
      } else A.node && Array.isArray(Ne.menu_items) && Ne.menu_items.length && e(4, zt = {
        items: Ne.menu_items,
        node: A.node,
        componentContext: A.componentContext
      });
    }
    v.forEach((ot) => {
      ot.log_id && St(A.logType || "click", ot);
    });
  }
  function kr(v) {
    z == null || z(v);
  }
  function Ut(v, A) {
    const S = (v == null ? void 0 : v.logError) || T;
    if (!Array.isArray(A) || !A.length)
      return;
    const ae = [];
    return A.forEach((W) => {
      let ot = !1;
      if (typeof W.condition != "string") {
        S(X(new Error("variable_trigger has a condition that is not a string"), {
          additional: { condition: W.condition }
        }));
        return;
      }
      if (!Array.isArray(W.actions)) {
        S(X(new Error("variable_trigger has no actions"), {
          additional: { condition: W.condition }
        }));
        return;
      }
      const Ne = W.mode || "on_condition";
      if (Ne !== "on_variable" && Ne !== "on_condition") {
        S(X(new Error("variable_trigger has an unsupported mode"), { additional: { mode: Ne } }));
        return;
      }
      const Mt = de(S, { condition: W.condition }, {
        additionalVars: v == null ? void 0 : v.variables,
        customFunctions: v == null ? void 0 : v.customFunctions,
        emptyVarsError: () => {
          S(X(new Error("variable_trigger must have variables in the condition"), {
            additional: { condition: W.condition }
          }));
        }
      }).subscribe(async (U) => {
        U.condition !== void 0 && (// if condition is truthy
        U.condition && // and trigger mode matches
        (Ne === "on_variable" || Ne === "on_condition" && ot === !1) ? (ot = !!U.condition, v ? await v.execAnyActions(W.actions, { logType: "trigger" }) : await Bt(W.actions, { logType: "trigger" })) : ot = !!U.condition);
      });
      ae.push(Mt);
    }), () => {
      ae.forEach((W) => {
        W();
      });
    };
  }
  function wt(v) {
    return fe[v];
  }
  function or(v, A) {
    fe[v] = A;
  }
  const le = /* @__PURE__ */ new Map(), Cr = /* @__PURE__ */ new Map(), Ar = /* @__PURE__ */ new Map(), Vt = /* @__PURE__ */ new Map(), Pr = /* @__PURE__ */ new Map();
  function Ur(v, A, S = "error") {
    if (le.has(v)) {
      T(X(new Error("Duplicate instance id"), {
        level: S,
        additional: { id: v }
      }));
      return;
    }
    le.set(v, A);
  }
  function fr(v) {
    le.delete(v);
  }
  function ft(v) {
    if (!le.has(v)) {
      T(X(new Error("Missing instance with id"), { additional: { id: v } }));
      return;
    }
    return le.get(v);
  }
  function It(v, A) {
    Cr.set(v, A);
  }
  function Kt(v) {
    Cr.delete(v);
  }
  function tr(v, A) {
    Ar.set(v, A);
  }
  function rt(v) {
    Ar.delete(v);
  }
  function mt(v, A) {
    const S = A.id;
    S && (Vt.has(S) && T(X(new Error("Duplicate tooltip id"), { additional: { id: S } })), Vt.set(S, { onwerNode: v, tooltip: A }));
  }
  function ce(v) {
    const A = v.id;
    A && (Vt.delete(A), Et.some((S) => S.desc.id === A) && e(3, Et = Et.filter((S) => S.desc.id !== A)));
  }
  function Ct(v) {
    const A = He.get(v) || Oo(void 0);
    return He.has(v) || He.set(v, A), A;
  }
  function ir(v, A, S) {
    const ae = Oe.get(v);
    if (ae)
      return ae;
    const W = eo(v, A, S);
    return Oe.set(v, W), W;
  }
  function Gt() {
    if (!ut)
      return;
    ut[be].forEach((A) => {
      const S = ee.get(A.name);
      S && S.setValue(A.color);
    });
  }
  function jr() {
    return ye;
  }
  function E(v, A) {
    const S = h.get(v);
    if (S)
      return new S(A || {});
  }
  function ie(v) {
    return {
      variables: Yo(ee, v.variables),
      derviedExpression(A) {
        return v.getDerivedFromVars(A);
      },
      processExpressions(A) {
        return v.getJsonWithVars(A);
      },
      execAction: hr,
      logError: T,
      getComponentProperty(A) {
        return v.getJsonWithVars(v.json[A]);
      },
      direction: se
    };
  }
  function d(v, A) {
    const S = /* @__PURE__ */ new Map(), ae = (A == null ? void 0 : A.logError) || T;
    return v.forEach((W) => {
      if (S) {
        try {
          C3(W);
        } catch (rr) {
          ae(X(rr));
          return;
        }
        const ot = W, Ne = S.get(ot.name) || [];
        Ne.push(A3(ot)), S.set(ot.name, Ne);
      }
    }), S;
  }
  function R(v) {
    const A = {
      id: "",
      json: {},
      path: [],
      templateContext: {},
      logError(S) {
        S.additional = S.additional || {}, S.additional.path = A.path.join("/"), T(S);
      },
      execAnyActions(S, ae = {}) {
        return Bt(S, {
          componentContext: A,
          processUrls: ae.processUrls,
          node: ae.node,
          logType: ae.logType,
          additionalVars: ae.additionalVars
        });
      },
      getDerivedFromVars(S, ae, W = !1, ot = 1 / 0) {
        return de(A.logError, S, {
          additionalVars: Yo(A.variables, ae),
          keepComplex: W,
          customFunctions: A.customFunctions,
          maxDepth: ot
        });
      },
      getJsonWithVars(S, ae, W = !1) {
        return ct(A.logError, S, Yo(A.variables, ae), W, A.customFunctions);
      },
      evalExpression(S, ae, W) {
        return Ma(Yo(ee, A.variables), A.customFunctions, S, ae, W);
      },
      produceChildContext(S, ae = {}) {
        const W = R(this);
        let ot = S, Ne = this.templateContext;
        const { templateContext: rr, json: Mt } = Ft(ot, Ne);
        if (W.json = Mt, W.templateContext = rr, W.origJson = S, W.id = ae.id || Mt.id || "", W.id) {
          let pt = Pr.get(W.id);
          pt || (pt = /* @__PURE__ */ new Set(), Pr.set(W.id, pt)), pt.add(W);
        }
        ae.key && (W.key = ae.key), ae.path !== void 0 && W.path.push(String(ae.path)), S.type && !ae.isRootState && W.path.push(S.type), ae.isTooltipRoot && (W.isTooltipRoot = !0);
        let U;
        Array.isArray(Mt.variables) ? (U = Yo(this.variables, Yo(ae.variables, /* @__PURE__ */ new Map())), Mt.variables.forEach((pt) => {
          const Sr = Lt(pt, W, U);
          Sr && U && U.set(Sr.getName(), Sr);
        })) : ae.variables ? U = Yo(this.variables, ae.variables) : this.variables && (U = this.variables), W.variables = U;
        let $t;
        return Array.isArray(Mt.functions) && ($t = d(Mt.functions, this)), W.customFunctions = V3(this.customFunctions, $t), Array.isArray(Mt.animators) && (W.animators = Mt.animators.reduce(
          (pt, Sr) => (Sr.id && (pt[Sr.id] = Sr), pt),
          {}
        )), ae.fake && (W.fakeElement = ae.fake), ae.isRootState && (W.isRootState = !0), W;
      },
      dup(S) {
        return { ...A, fakeElement: S };
      },
      getVariable(S, ae) {
        var ot;
        const W = ((ot = A.variables) == null ? void 0 : ot.get(S)) || ee.get(S);
        if (W) {
          const Ne = W.getType();
          if (ae && Ne !== ae) {
            A.logError(X(new Error(`Variable should have type "${ae}"`), { additional: { name: S, foundType: Ne } }));
            return;
          }
        }
        return W;
      },
      getAnimator(S) {
        var ae, W;
        return ((ae = A.animators) == null ? void 0 : ae[S]) || ((W = A.parent) == null ? void 0 : W.getAnimator(S)) || void 0;
      },
      registerState(S, ae) {
        const W = W3(A.parent);
        return W && (W.states = W.states || {}, W.states[S] = W.states[S] || [], W.states[S].push(ae)), () => {
          var ot;
          (ot = W == null ? void 0 : W.states) != null && ot[S] && (W.states[S] = W.states[S].filter((Ne) => Ne !== ae), W.states[S].length || delete W.states[S]);
        };
      },
      registerPager(S) {
        const ae = A.parent;
        return ae ? (ae.pagers = ae.pagers || /* @__PURE__ */ new Map(), ae.pagers.has(S) ? {
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          update() {
          },
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          destroy() {
          }
        } : (ae.pagers.set(S, null), {
          update(W) {
            var Mt, U;
            ae.pagers && ae.pagers.set(S, W);
            const ot = S ? (Mt = ae.pagerListeners) == null ? void 0 : Mt.get(S) : void 0, Ne = (U = ae.pagerListeners) == null ? void 0 : U.get(void 0);
            [...ot || [], ...Ne || []].forEach(($t) => {
              $t(W);
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
        var Mt, U, $t;
        let W = A.parent;
        for (; W && !(W.pagers && (S ? W.pagers.get(S) : (Mt = W.pagers) != null && Mt.size)); )
          W = W.parent;
        if (!W)
          return () => {
          };
        W.pagerListeners = A.pagerListeners || /* @__PURE__ */ new Map();
        const ot = W.pagerListeners.get(S) || [];
        W.pagerListeners.has(S) || W.pagerListeners.set(S, ot), ot.push(ae);
        const Ne = S || ((U = W.pagers) == null ? void 0 : U.keys().next().value) || void 0, rr = ($t = W.pagers) == null ? void 0 : $t.get(Ne);
        return rr && ae(rr), () => {
          if (!W.pagerListeners)
            return;
          let pt = W.pagerListeners.get(Ne);
          pt && (pt = pt.filter((Sr) => Sr !== ae) || [], pt.length ? W.pagerListeners.set(S, pt) : W.pagerListeners.delete(S));
        };
      },
      destroy() {
        const S = Pr.get(A.id);
        S && (S.delete(A), S.size || Pr.delete(A.id));
      }
    };
    return v ? (A.parent = v, A.path = v.path.slice(), v.fakeElement && (A.fakeElement = v.fakeElement)) : (A.json = { type: "root" }, A.isRootState = !0), A;
  }
  function Ce(v) {
    _e ? ht.push(v) : clearTimeout(v);
  }
  ki($r, {
    logStat: St,
    hasTemplate: dt,
    genId: st,
    genClass: Q,
    execCustomAction: kr,
    processVariableTriggers: Ut,
    isRunning: wt,
    setRunning: or,
    pagerChildrenClipEnabled: I,
    pagerMouseDragEnabled: P,
    registerInstance: Ur,
    unregisterInstance: fr,
    registerParentOf: It,
    unregisterParentOf: Kt,
    registerTooltip: mt,
    unregisterTooltip: ce,
    onTooltipClose: En,
    tooltipRoot: M,
    registerFocusable: tr,
    unregisterFocusable: rt,
    addSvgFilter: nr,
    removeSvgFilter: er,
    registerId: tt,
    getComponentId: Le,
    preparePrototypeVariables: Be,
    getCustomization: Z,
    getBuiltinProtocols: jr,
    getExtension: E,
    getExtensionContext: ie,
    registerTimeout: Ce,
    typefaceProvider: $,
    isDesktop: Ae,
    isPointerFocus: Na,
    customComponents: Y,
    direction: x,
    videoPlayerProvider: q,
    awaitGlobalVariable: ir,
    componentDevtool: void 0,
    devtoolCreateHierarchy: "lazy"
  }), ki(Bo, {
    hasAction() {
      return !1;
    }
  }), ki(ka, {
    runVisibilityTransition(v, A, S, ae, W) {
      return Promise.resolve();
    },
    registerChildWithTransitionIn(v, A, S, ae) {
      return Promise.resolve();
    },
    registerChildWithTransitionOut(v, A, S, ae) {
      return Promise.resolve();
    },
    registerChildWithTransitionChange(v, A, S, ae) {
      return Promise.resolve();
    },
    hasTransitionChange(v) {
      return !1;
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    registerChild(v) {
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    unregisterChild(v) {
    }
  }), ki(ja, { isEnabled: Qo(!0) });
  function Je(v, A) {
    const S = ee.get(v);
    return (S == null ? void 0 : S.getType()) === A;
  }
  function ke(v, A) {
    const S = ee.get(v);
    S ? S.setValue(A) : T(X(new Error("Cannot find variable"), { additional: { name: v } }));
  }
  function L(v, A, S) {
    const ae = (A == null ? void 0 : A.logError) || T, W = v.name, ot = v.value_type;
    if (typeof v.get != "string" || !v.get) {
      ae(X(new Error("Incorrect property getter"), { additional: { name: W } }));
      return;
    }
    if (!W) {
      ae(X(new Error("Missing property name")));
      return;
    }
    if (!ot) {
      ae(X(new Error("Missing property value_type")));
      return;
    }
    const Ne = A ? A.getDerivedFromVars(v.get, void 0, !0) : de(T, v.get, { keepComplex: !0 });
    if (Ul(Ne) === void 0)
      return;
    const Mt = (U) => {
      const $t = Ms(v.new_value_variable_name || "new_value", v.value_type, U), pt = new Map(S);
      pt.set($t.getName(), $t), Array.isArray(v.set) && v.set.length ? A ? A.execAnyActions(v.set, { additionalVars: pt }) : Bt(v.set, { additionalVars: pt }) : ae(X(new Error("Cannot set property. No setters provided."), { additional: { name: W } }));
    };
    return {
      getName() {
        return W;
      },
      subscribe(U) {
        return Ne.subscribe(U);
      },
      set(U) {
        const $t = L1(U, ot);
        Mt($t);
      },
      setValue: Mt,
      getValue() {
        return Ul(Ne);
      },
      getType() {
        return ot;
      }
    };
  }
  function Lt(v, A, S) {
    if (v.type === "property")
      return L(v, A, S);
    if (!v.type || !v.name || !(v.type in ea) || !("value" in v))
      return;
    const ae = v.value;
    let W = A ? A.getJsonWithVars(ae, S, !0) : ct(T, ae, S, !0);
    if (!(ae && typeof ae == "string" && W === void 0)) {
      v.type === "integer" && typeof W == "number" && (W > Number.MAX_SAFE_INTEGER || W < Number.MIN_SAFE_INTEGER) && T(X(new Error("The value of the integer variable could lose accuracy"), {
        level: "warn",
        additional: { name: v.name, value: W }
      }));
      try {
        return eo(v.name, v.type, W);
      } catch (ot) {
        T(X(ot, { additional: { name: v.name } }));
      }
    }
  }
  function Rt(v) {
    const A = Lt(v);
    A && (Xe.set(v.name, A), ee.set(v.name, A));
  }
  for (const [v, A] of qe)
    ee.has(v) || ee.set(v, A);
  const Ke = (Qr = l == null ? void 0 : l.card) == null ? void 0 : Qr.variables;
  Array.isArray(Ke) && Ke.forEach((v) => {
    if (v && v.name) {
      if (Xe.has(v.name)) {
        T(X(new Error("Duplicate variable"), { additional: { name: v.name } }));
        return;
      }
      Rt(v);
    }
  });
  const ut = l.palette;
  ut && ut[be].forEach((A) => {
    if (Xe.has(A.name)) {
      T(X(new Error("Duplicate variable"), { additional: { name: A.name } }));
      return;
    }
    try {
      const S = eo(A.name, "color", A.color);
      Xe.set(A.name, S), ee.set(A.name, S);
    } catch (S) {
      T(X(S, { additional: { name: A.name } }));
    }
  }), ve.subscribe((v) => {
    if (v && !ee.has(v)) {
      const A = qe.get(v);
      ee.set(v, A);
      const S = He.get(v);
      if (S) {
        let W = 0;
        A.subscribe(() => {
          S.set(++W);
        });
      }
      const ae = Oe.get(v);
      ae && ae.getType() === A.getType() && A.subscribe((W) => {
        ae.set(W);
      });
    }
  });
  const Yt = () => {
    var v;
    Ut(void 0, (v = l == null ? void 0 : l.card) == null ? void 0 : v.variable_triggers);
  }, Ir = (Kr = l == null ? void 0 : l.card) == null ? void 0 : Kr.timers;
  if (Ir && typeof document < "u") {
    const v = lt = new M3({
      logError: T,
      applyVars: (A) => ct(T, A),
      hasVariableWithType: Je,
      setVariableValue: ke,
      execAnyActions: Bt
    });
    Ir.forEach((A) => v.createTimer(A));
  }
  const cr = R();
  Array.isArray((_n = l.card) == null ? void 0 : _n.functions) && (cr.customFunctions = d(l.card.functions));
  let Nr;
  function En(v) {
    e(3, Et = Et.filter((A) => A.internalId !== v));
  }
  no(() => {
    Is++, Is === 1 && (window.addEventListener("keydown", pd), window.addEventListener("pointerdown", gd)), Fn().then(() => {
      _e && Yt();
    });
  }), dn(() => {
    _e = !1, Is--, Is || (window.removeEventListener("keydown", pd), window.removeEventListener("pointerdown", gd));
    for (const [v, A] of _t)
      A.stop();
    lt && lt.destroy(), Et.forEach((v) => {
      v.timeoutId && (clearTimeout(v.timeoutId), v.timeoutId = null);
    }), ht.forEach((v) => {
      clearTimeout(v);
    });
  });
  const Se = () => e(4, zt = void 0);
  return t.$$set = (v) => {
    "id" in v && e(13, a = v.id), "json" in v && e(11, l = v.json), "platform" in v && e(14, u = v.platform), "theme" in v && e(12, c = v.theme), "globalVariablesController" in v && e(15, f = v.globalVariablesController), "mix" in v && e(0, _ = v.mix), "customization" in v && e(16, p = v.customization), "builtinProtocols" in v && e(17, m = v.builtinProtocols), "extensions" in v && e(18, h = v.extensions), "onError" in v && e(19, y = v.onError), "onStat" in v && e(20, w = v.onStat), "onSubmit" in v && e(21, D = v.onSubmit), "onCustomAction" in v && e(22, z = v.onCustomAction), "onComponent" in v && e(23, O = v.onComponent), "typefaceProvider" in v && e(24, $ = v.typefaceProvider), "fetchInit" in v && e(25, ue = v.fetchInit), "tooltipRoot" in v && e(26, M = v.tooltipRoot), "customComponents" in v && e(27, Y = v.customComponents), "direction" in v && e(28, se = v.direction), "store" in v && e(29, C = v.store), "pagerChildrenClipEnabled" in v && e(30, I = v.pagerChildrenClipEnabled), "pagerMouseDragEnabled" in v && e(31, P = v.pagerMouseDragEnabled), "weekStartDay" in v && e(32, B = v.weekStartDay), "videoPlayerProvider" in v && e(33, q = v.videoPlayerProvider), "devtoolCreateHierarchy" in v && e(34, pe = v.devtoolCreateHierarchy);
  }, t.$$.update = () => {
    var v, A;
    if (t.$$.dirty[0] & /*theme*/
    4096 | t.$$.dirty[1] & /*themeQuery*/
    2048 && (c === "light" || c === "dark" ? e(41, be = c) : c === "system" ? typeof matchMedia < "u" ? (Ie || (e(42, Ie = matchMedia("(prefers-color-scheme: dark)")), Ie.addListener(Ye)), e(41, be = Ie.matches ? "dark" : "light")) : e(41, be = "light") : T(X(new Error("Unsupported theme")))), t.$$.dirty[1] & /*currentTheme*/
    1024 && be && Gt(), t.$$.dirty[0] & /*json*/
    2048) {
      e(1, he = !1);
      const S = S3(l);
      S && (e(1, he = !0), T(S));
    }
    if (t.$$.dirty[0] & /*json*/
    2048 && (n = l.templates || {}), t.$$.dirty[0] & /*json*/
    2048 && (v = l == null ? void 0 : l.card) != null && v.variables && Array.isArray(l.card.variables) && l.card.variables !== Ke && l.card.variables.forEach((S) => {
      S && S.name && !Xe.has(S.name) && !ee.has(S.name) && Rt(S);
    }), t.$$.dirty[0] & /*json*/
    2048 && e(44, o = (A = l == null ? void 0 : l.card) == null ? void 0 : A.states), t.$$.dirty[0] & /*hasError, hasIdError*/
    6 | t.$$.dirty[1] & /*states, rootComponentContext*/
    12288 && o && !he && !te) {
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
      e(6, Nr = cr.produceChildContext(S, { isRootState: !0 }));
    }
  }, [
    _,
    he,
    te,
    Et,
    zt,
    Dt,
    Nr,
    i,
    s,
    Ae,
    x,
    l,
    c,
    a,
    u,
    f,
    p,
    m,
    h,
    y,
    w,
    D,
    z,
    O,
    $,
    ue,
    M,
    Y,
    se,
    C,
    I,
    P,
    B,
    q,
    pe,
    Qe,
    xe,
    we,
    Te,
    ge,
    hr,
    be,
    Ie,
    cr,
    o,
    Se
  ];
}
class V4 extends Wr {
  constructor(r) {
    super(), Hr(
      this,
      r,
      A4,
      k4,
      Tr,
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
const S4 = 8;
class T4 {
  constructor(r) {
    Vr(this, "widthVariableName");
    Vr(this, "heightVariableName");
    Vr(this, "resizeObserver");
    Vr(this, "context");
    Vr(this, "node");
    Vr(this, "sizeHistory", {});
    this.widthVariableName = r.width_variable_name, this.heightVariableName = r.height_variable_name;
  }
  setVariable(r, e) {
    if (!this.context)
      return !1;
    if (r) {
      const n = this.context.variables.get(r);
      if (n && n.getType() === "integer") {
        if (e = Math.round(e), this.sizeHistory[r] || (this.sizeHistory[r] = /* @__PURE__ */ new Set()), !this.sizeHistory[r].has(e))
          return n.setValue(e), this.sizeHistory[r].add(e), !0;
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
    const r = this.node.getBoundingClientRect(), e = this.setVariable(this.widthVariableName, r.width), n = this.setVariable(this.heightVariableName, r.height);
    return e || n;
  }
  mountView(r, e) {
    var n;
    this.node = r, this.context = e, !this.resizeObserver && typeof ResizeObserver < "u" && (this.resizeObserver = new ResizeObserver(async () => {
      let o = 0;
      for (; this.recalcProps(); ) {
        if (++o > S4) {
          const i = new Error("Recursive layout in size_provider");
          i.level = "warn", i.additional = {
            widthVariableName: this.widthVariableName,
            heightVariableName: this.heightVariableName
          }, e.logError(i);
          break;
        }
        await Fn();
      }
      this.sizeHistory = {};
    })), (n = this.resizeObserver) == null || n.observe(r), this.recalcProps();
  }
  unmountView(r, e) {
    var n;
    (n = this.resizeObserver) == null || n.disconnect(), this.resizeObserver = void 0;
  }
}
const zi = 8;
class M4 {
  constructor(r) {
    Vr(this, "context");
    Vr(this, "params");
    Vr(this, "startCoords");
    this.params = r, this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this);
  }
  processActions(r) {
    const e = this.params[r];
    Array.isArray(e) && e.length && this.context && this.context.processExpressions(e).forEach((o) => {
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
    const e = r.pageX - this.startCoords.pageX, n = r.pageY - this.startCoords.pageY;
    (Math.abs(e) > zi || Math.abs(n) > zi) && (Math.abs(e) > Math.abs(n) ? e > zi ? this.processActions("swipe_right") : e < -zi && this.processActions("swipe_left") : n > zi ? this.processActions("swipe_down") : n < -zi && this.processActions("swipe_up"), this.startCoords = void 0);
  }
  onPointerUp() {
    this.startCoords = void 0;
  }
  mountView(r, e) {
    this.context = e, r.addEventListener("pointerdown", this.onPointerDown), r.addEventListener("pointermove", this.onPointerMove), r.addEventListener("pointerup", this.onPointerUp), r.addEventListener("pointercancel", this.onPointerUp), r.style.pointerEvents = "auto";
  }
  updateView(r) {
    r.style.pointerEvents = "auto";
  }
  unmountView(r, e) {
    r.removeEventListener("pointerdown", this.onPointerDown), r.removeEventListener("pointermove", this.onPointerMove), r.removeEventListener("pointerup", this.onPointerUp), r.removeEventListener("pointercancel", this.onPointerUp), r.style.pointerEvents = "";
  }
}
function D4(t) {
  return t instanceof HTMLElement;
}
function N4(t) {
  return class {
    constructor(e) {
      Vr(this, "params");
      Vr(this, "animItem");
      Vr(this, "wrapper");
      Vr(this, "isPlayingUnsubscriber");
      Vr(this, "isPlaying", !0);
      Vr(this, "unsubscribe");
      this.params = e;
    }
    loadData(e) {
      return this.params.lottie_json ? Promise.resolve(this.params.lottie_json) : e ? fetch(e).then((n) => {
        if (!n.ok)
          throw new Error("Response is not ok");
        return n.json();
      }) : Promise.reject("Missing data");
    }
    getRatio(e) {
      var o;
      const n = (o = e.getComponentProperty("aspect")) == null ? void 0 : o.ratio;
      if (typeof n == "number" && n > 0)
        return n;
    }
    getScale(e) {
      const n = e.getComponentProperty("scale");
      if (n === "stretch")
        return {
          attribute: "none",
          noScale: !1,
          hAlign: "center",
          vAlign: "center"
        };
      let o = e.getComponentProperty("content_alignment_horizontal"), i = e.getComponentProperty("content_alignment_vertical"), s = "Mid", a = "Mid";
      return o === "start" ? o = e.direction === "ltr" ? "start" : "end" : o === "end" ? o = e.direction === "ltr" ? "end" : "start" : o === "left" ? o = "start" : o === "right" ? o = "end" : o = "center", i === "top" ? i = "start" : i === "bottom" ? i = "end" : i = "center", n === "no_scale" ? {
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
      const e = (n = this.wrapper) == null ? void 0 : n.firstElementChild;
      if (e instanceof SVGElement)
        return e;
    }
    setWrapperScale(e) {
      this.wrapper && (e.noScale ? (this.wrapper.style.display = "flex", this.wrapper.style.alignItems = e.vAlign, this.wrapper.style.justifyContent = e.hAlign) : (this.wrapper.style.display = "", this.wrapper.style.alignItems = "", this.wrapper.style.justifyContent = ""));
    }
    setSvgScale(e) {
      const n = this.getSvg();
      n && (e.noScale ? (n.style.flex = "0 0 auto", n.style.width = "", n.style.height = "") : (n.style.flex = "", n.style.width = "100%", n.style.height = "100%"));
    }
    mountView(e, n) {
      var f;
      if (!this.params.lottie_url && !this.params.lottie_json)
        return;
      const o = Array.from(e.children).filter(D4);
      o.forEach((_) => {
        _.style.display = "none";
      }), e.setAttribute("data-lottie", "true");
      const i = this.wrapper = document.createElement("div");
      this.wrapper.style.width = "100%", this.wrapper.style.height = "100%";
      const s = this.getRatio(n), a = this.getScale(n);
      s && (this.wrapper.style.aspectRatio = String(s)), this.setWrapperScale(a), e.appendChild(this.wrapper);
      const l = Number((f = n.processExpressions(this.params.repeat_count)) != null ? f : -1), u = n.processExpressions(this.params.repeat_mode), c = () => {
        var p, m;
        (p = this.animItem) == null || p.destroy(), o.forEach((h) => {
          h.style.display = "";
        }), e.removeAttribute("data-lottie"), this.wrapper && ((m = this.wrapper.parentNode) == null || m.removeChild(this.wrapper), this.wrapper = void 0);
        const _ = new Error("Failed to load lottie animation");
        _.level = "error", _.additional = {
          url: this.params.lottie_url
        }, n.logError(_);
      };
      this.unsubscribe = n.derviedExpression(this.params.lottie_url).subscribe((_) => {
        this.loadData(_).then((p) => {
          var y;
          (y = this.animItem) == null || y.destroy();
          const m = l !== 0, h = this.animItem = t({
            container: i,
            animationData: p,
            renderer: "svg",
            loop: m,
            rendererSettings: {
              preserveAspectRatio: a.attribute
            }
          });
          if (this.setSvgScale(a), this.animItem.addEventListener("data_failed", c), m && (u === "reverse" || l !== -1)) {
            let w = 1, D = 0;
            h.addEventListener("loopComplete", () => {
              ++D, l !== -1 && D === l + 1 ? (h.stop(), h.goToAndStop(h.totalFrames, !0)) : (u === "reverse" && (w *= -1, h.setDirection(w)), h.goToAndPlay(w === 1 ? 0 : h.totalFrames, !0));
            });
          }
        }).catch(c);
      }), this.isPlayingUnsubscriber = n.derviedExpression(this.params.is_playing).subscribe((_) => {
        this.isPlaying = _ !== !1, this.animItem && this.animItem[this.isPlaying ? "play" : "pause"]();
      });
    }
    updateView(e, n) {
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
    unmountView(e, n) {
      var o, i, s, a;
      (o = this.animItem) == null || o.destroy(), this.wrapper && ((i = this.wrapper.parentNode) == null || i.removeChild(this.wrapper), this.wrapper = void 0), e.removeAttribute("data-lottie"), (s = this.unsubscribe) == null || s.call(this), (a = this.isPlayingUnsubscriber) == null || a.call(this);
    }
  };
}
function O4(t, r = {}) {
  return class {
    constructor() {
      Vr(this, "prevDOM", null);
    }
    recalc(n, o) {
      const i = n.firstElementChild, s = i == null ? void 0 : i.firstElementChild;
      if (!s)
        return;
      this.prevDOM = i.cloneNode(!0);
      const a = o.getComponentProperty("text") || "", l = t(a), u = document.createElement("div");
      u.innerHTML = l, r != null && r.cssClass && u.classList.add(r.cssClass);
      const c = Array.from(i.childNodes);
      for (let f = 0, _ = c.length; f < _; ++f) {
        const p = c[f];
        (p.nodeType !== 1 || p !== s) && i.removeChild(p);
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
function B4(t) {
  const { target: r, hydrate: e, ...n } = t, o = new V4({
    target: r,
    props: n,
    hydrate: e
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
  M4 as Gesture,
  T4 as SizeProvider,
  F4 as createGlobalVariablesController,
  eo as createVariable,
  N4 as lottieExtensionBuilder,
  O4 as markdownExtensionBuilder,
  B4 as render
};
//# sourceMappingURL=client-hydratable.mjs.map
