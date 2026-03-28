var D_ = Object.defineProperty;
var I_ = (t, r, e) => r in t ? D_(t, r, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[r] = e;
var Vr = (t, r, e) => I_(t, typeof r != "symbol" ? r + "" : r, e);
/*!
    DivKit v32.39.0
    https://github.com/divkit/divkit
    @licence Apache-2.0
*/
function ca(t) {
  return BigInt(t);
}
const ss = ca("9223372036854775807"), ls = ca("-9223372036854775808");
function gn(t) {
  const r = ca(t);
  if (r > ss || r < ls)
    throw new Error("Integer overflow.");
  return r;
}
const wi = gn(0);
function _d(t) {
  let r = t;
  return r < 0 && (r = -r), r;
}
function pd(t) {
  let r = 0;
  return t > 0 ? r = 1 : t < 0 && (r = -1), gn(r);
}
function T_(t, r) {
  return r && r[3] && r[7] ? { type: "ConditionalExpression", test: t, consequent: r[3], alternate: r[7] } : t;
}
function M_(t, r) {
  return r && r[3] ? { type: "TryExpression", test: t, alternate: r[3] } : t;
}
function ps(t, r) {
  return r.length ? r.reduce((e, n) => ({
    type: "BinaryExpression",
    operator: n[1],
    left: e,
    right: n[3]
  }), t) : t;
}
function Ta(t, r) {
  return r.length ? r.reduce((e, n) => ({
    type: "LogicalExpression",
    operator: n[1],
    left: e,
    right: n[3]
  }), t) : t;
}
function P_(t, r) {
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
function N_(t) {
  return t === "true" || t === "false" ? { type: "BooleanLiteral", value: t === "true" } : { type: "Variable", id: { type: "Identifier", name: t } };
}
function Ma(t) {
  if (t.every((e) => typeof e == "string"))
    return { type: "StringLiteral", value: t.join("") };
  let r = t.reduce((e, n) => (typeof n == "string" && typeof e[e.length - 1] == "string" ? e[e.length - 1] += n : e.push(n), e), []).reduce((e, n) => (typeof n == "string" ? e.quasis.push({ type: "StringLiteral", value: n }) : (e.quasis.length === e.expressions.length && e.quasis.push({ type: "StringLiteral", value: "" }), e.expressions.push(n)), e), {
    type: "TemplateLiteral",
    quasis: [],
    expressions: []
  });
  return r.quasis.length === r.expressions.length && r.quasis.push({ type: "StringLiteral", value: "" }), r;
}
function z_(t) {
  try {
    return gn(t);
  } catch {
    throw new Error(`Value ${t} can't be converted to Integer type.`);
  }
}
function Pa(t) {
  if (t === "'" || t === "\\")
    return t;
  throw new Error("Incorrect string escape");
}
function L_(t, r) {
  function e() {
    this.constructor = t;
  }
  e.prototype = r.prototype, t.prototype = new e();
}
function Oi(t, r, e, n) {
  var o = Error.call(this, t);
  return Object.setPrototypeOf && Object.setPrototypeOf(o, Oi.prototype), o.expected = r, o.found = e, o.location = n, o.name = "SyntaxError", o;
}
L_(Oi, Error);
function Cl(t, r, e) {
  return e = e || " ", t.length > r ? t : (r -= t.length, e += e.repeat(r), t + e.slice(0, r));
}
Oi.prototype.format = function(t) {
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
      var a = this.location.end, l = Cl("", i.line.toString().length, " "), u = e[o.line - 1], c = o.line === a.line ? a.column : u.length + 1, f = c - o.column || 1;
      r += `
 --> ` + s + `
` + l + ` |
` + i.line + " | " + u + `
` + l + " | " + Cl("", o.column - 1, " ") + Cl("", f, "^");
    } else
      r += `
 at ` + s;
  }
  return r;
};
Oi.buildMessage = function(t, r) {
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
function nl(t, r) {
  r = r !== void 0 ? r : {};
  var e = {}, n = r.grammarSource, o = { start: Ur, JsonStringContents: ln }, i = Ur, s = "@{", a = "}", l = "@{}", u = "\\", c = "?", f = ":", _ = "!:", h = "||", m = "&&", p = "==", w = "!=", k = ">=", N = ">", H = "<=", z = "<", oe = "+", _e = "-", T = "/", Y = "*", le = "%", E = "!", D = ".", M = "(", W = ")", q = ",", be = "'", Ae = "e", Ce = "E", me = /^[^}]/, Fe = /^[^'}]/, Q = /^[0-9]/, Ke = /^[a-zA-Z_]/, Ye = /^[a-zA-Z_0-9]/, Xe = /^[ \t\r\n]/, ye = Je("@{", !1), Me = Je("}", !1), ce = Je("@{}", !1), he = Je("\\", !1), fe = Ot(), re = at(["}"], !0, !1), de = Je("?", !1), ne = Je(":", !1), we = Je("!:", !1), Ue = Je("||", !1), Ge = Je("&&", !1), $ = Je("==", !1), Be = Je("!=", !1), Ne = Je(">=", !1), ot = Je(">", !1), ct = Je("<=", !1), nt = Je("<", !1), kt = Je("+", !1), it = Je("-", !1), Pt = Je("/", !1), ft = Je("*", !1), Z = Je("%", !1), pe = Je("!", !1), st = Je(".", !1), ze = Je("(", !1), F = Je(")", !1), Ct = Je(",", !1), ut = _r("string"), Vt = Je("'", !1), Dt = at(["'", "}"], !0, !1), lt = _r("integer"), K = at([["0", "9"]], !1, !1), Mt = _r("number"), It = Je("e", !1), Xt = Je("E", !1), Zt = at([["a", "z"], ["A", "Z"], "_"], !1, !1), Ee = at([["a", "z"], ["A", "Z"], "_", ["0", "9"]], !1, !1), Ze = _r("whitespace"), gt = at([" ", "	", "\r", `
`], !1, !1), Ie = function(b) {
    return b;
  }, $e = function(b) {
    return Ma(b);
  }, Le = function(b) {
    return b;
  }, Ft = function() {
    return "";
  }, Oe = function() {
    return zt();
  }, yt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, Gt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, Tt = function(b) {
    return b;
  }, sr = function(b) {
    return Pa(b);
  }, Te = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, jt = function(b, V) {
    return T_(b, V);
  }, lr = function(b, V) {
    return M_(b, V);
  }, rr = function(b, V) {
    return Ta(b, V);
  }, nr = function(b, V) {
    return Ta(b, V);
  }, pr = function(b, V) {
    return ps(b, V);
  }, vr = function(b, V) {
    return ps(b, V);
  }, or = function(b, V) {
    return ps(b, V);
  }, ir = function(b, V) {
    return ps(b, V);
  }, Ht = function(b) {
    return b;
  }, mt = function(b) {
    return b;
  }, Qt = function(b, V) {
    return { type: "UnaryExpression", operator: b, argument: V };
  }, ae = function() {
    throw new Error("Incorrect unary operator");
  }, wr = function(b, V) {
    return P_(b, V);
  }, kr = function(b, V) {
    return { type: "CallExpression", callee: b, arguments: V };
  }, Et = function(b, V) {
    return [b, ...V];
  }, Ir = function(b) {
    return b;
  }, Pr = function(b) {
    return b;
  }, ur = function(b) {
    return Ma(b);
  }, dt = function(b) {
    return b;
  }, At = function() {
    return "";
  }, Jt = function() {
    return zt();
  }, xt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, et = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, pt = function(b) {
    return b;
  }, ue = function(b) {
    return Pa(b);
  }, vt = function() {
    throw new Error("Error tokenizing '" + t + "'.");
  }, $t = function() {
    return { type: "IntegerLiteral", value: z_(zt()) };
  }, Wt = function() {
    return { type: "NumberLiteral", value: parseFloat(zt()) };
  }, yr = function() {
    return { type: "NumberLiteral", value: parseFloat(zt()) };
  }, j = function() {
    const b = zt();
    if (/\.\./.test(b) || /\.$/.test(b))
      throw new Error("Unexpected token: .");
    return N_(b);
  }, ie = function() {
    return { type: "Identifier", name: zt() };
  }, d = 0, B = 0, je = [{ line: 1, column: 1 }], He = 0, ke = [], P = 0, Lt;
  if ("startRule" in r) {
    if (!(r.startRule in o))
      throw new Error(`Can't start parsing from rule "` + r.startRule + '".');
    i = o[r.startRule];
  }
  function zt() {
    return t.substring(B, d);
  }
  function Je(b, V) {
    return { type: "literal", text: b, ignoreCase: V };
  }
  function at(b, V, te) {
    return { type: "class", parts: b, inverted: V, ignoreCase: te };
  }
  function Ot() {
    return { type: "any" };
  }
  function Ar() {
    return { type: "end" };
  }
  function _r(b) {
    return { type: "other", description: b };
  }
  function Fr(b) {
    var V = je[b], te;
    if (V)
      return V;
    for (te = b - 1; !je[te]; )
      te--;
    for (V = je[te], V = {
      line: V.line,
      column: V.column
    }; te < b; )
      t.charCodeAt(te) === 10 ? (V.line++, V.column = 1) : V.column++, te++;
    return je[b] = V, V;
  }
  function wn(b, V, te) {
    var R = Fr(b), Ve = Fr(V), ve = {
      source: n,
      start: {
        offset: b,
        line: R.line,
        column: R.column
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
    d < He || (d > He && (He = d, ke = []), ke.push(b));
  }
  function Xr(b, V, te) {
    return new Oi(
      Oi.buildMessage(b, V),
      b,
      V,
      te
    );
  }
  function Ur() {
    var b, V;
    return b = d, Kt(), V = y(), V !== e ? (Kt(), B = b, b = Ie(V)) : (d = b, b = e), b;
  }
  function ln() {
    var b, V, te;
    for (b = d, V = [], te = cn(); te !== e; )
      V.push(te), te = cn();
    return B = b, V = $e(V), b = V, b;
  }
  function cn() {
    var b, V, te, R, Ve;
    if (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, P === 0 && Se(ye)), V !== e ? (te = Kt(), R = y(), R !== e ? (Kt(), t.charCodeAt(d) === 125 ? (Ve = a, d++) : (Ve = e, P === 0 && Se(Me)), Ve !== e ? (B = b, b = Le(R)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.substr(d, 3) === l ? (V = l, d += 3) : (V = e, P === 0 && Se(ce)), V !== e && (B = b, V = Ft()), b = V, b === e && (b = d, V = d, P++, t.charCodeAt(d) === 92 ? (te = u, d++) : (te = e, P === 0 && Se(he)), te === e && (t.substr(d, 2) === s ? (te = s, d += 2) : (te = e, P === 0 && Se(ye))), P--, te === e ? V = void 0 : (d = V, V = e), V !== e ? (t.length > d ? (te = t.charAt(d), d++) : (te = e, P === 0 && Se(fe)), te !== e ? (B = b, b = Oe()) : (d = b, b = e)) : (d = b, b = e), b === e))) {
      if (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, P === 0 && Se(ye)), V !== e) {
        if (te = [], me.test(t.charAt(d)) ? (R = t.charAt(d), d++) : (R = e, P === 0 && Se(re)), R !== e)
          for (; R !== e; )
            te.push(R), me.test(t.charAt(d)) ? (R = t.charAt(d), d++) : (R = e, P === 0 && Se(re));
        else
          te = e;
        te !== e ? (t.charCodeAt(d) === 125 ? (R = a, d++) : (R = e, P === 0 && Se(Me)), R !== e ? (B = b, b = yt()) : (d = b, b = e)) : (d = b, b = e);
      } else
        d = b, b = e;
      b === e && (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, P === 0 && Se(ye)), V !== e && (B = b, V = Gt()), b = V, b === e && (b = d, t.charCodeAt(d) === 92 ? (V = u, d++) : (V = e, P === 0 && Se(he)), V !== e ? (t.substr(d, 2) === s ? (te = s, d += 2) : (te = e, P === 0 && Se(ye)), te !== e ? (B = b, b = Tt(te)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (V = u, d++) : (V = e, P === 0 && Se(he)), V !== e ? (t.length > d ? (te = t.charAt(d), d++) : (te = e, P === 0 && Se(fe)), te !== e ? (B = b, b = sr(te)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (V = u, d++) : (V = e, P === 0 && Se(he)), V !== e && (B = b, V = Te()), b = V))));
    }
    return b;
  }
  function y() {
    var b, V, te, R, Ve, ve, qt, Yt, qr, Nr, Hr;
    return b = d, V = A(), V !== e ? (te = d, R = Kt(), t.charCodeAt(d) === 63 ? (Ve = c, d++) : (Ve = e, P === 0 && Se(de)), Ve !== e ? (ve = Kt(), qt = y(), qt !== e ? (Yt = Kt(), t.charCodeAt(d) === 58 ? (qr = f, d++) : (qr = e, P === 0 && Se(ne)), qr !== e ? (Nr = Kt(), Hr = y(), Hr !== e ? (R = [R, Ve, ve, qt, Yt, qr, Nr, Hr], te = R) : (d = te, te = e)) : (d = te, te = e)) : (d = te, te = e)) : (d = te, te = e), te === e && (te = null), B = b, b = jt(V, te)) : (d = b, b = e), b;
  }
  function A() {
    var b, V, te, R, Ve, ve, qt;
    return b = d, V = S(), V !== e ? (te = d, R = Kt(), t.substr(d, 2) === _ ? (Ve = _, d += 2) : (Ve = e, P === 0 && Se(we)), Ve !== e ? (ve = Kt(), qt = y(), qt !== e ? (R = [R, Ve, ve, qt], te = R) : (d = te, te = e)) : (d = te, te = e), te === e && (te = null), B = b, b = lr(V, te)) : (d = b, b = e), b;
  }
  function S() {
    var b, V, te, R, Ve, ve, qt, Yt;
    if (b = d, V = ee(), V !== e) {
      for (te = [], R = d, Ve = Kt(), t.substr(d, 2) === h ? (ve = h, d += 2) : (ve = e, P === 0 && Se(Ue)), ve !== e ? (qt = Kt(), Yt = ee(), Yt !== e ? (Ve = [Ve, ve, qt, Yt], R = Ve) : (d = R, R = e)) : (d = R, R = e); R !== e; )
        te.push(R), R = d, Ve = Kt(), t.substr(d, 2) === h ? (ve = h, d += 2) : (ve = e, P === 0 && Se(Ue)), ve !== e ? (qt = Kt(), Yt = ee(), Yt !== e ? (Ve = [Ve, ve, qt, Yt], R = Ve) : (d = R, R = e)) : (d = R, R = e);
      B = b, b = rr(V, te);
    } else
      d = b, b = e;
    return b;
  }
  function ee() {
    var b, V, te, R, Ve, ve, qt, Yt;
    if (b = d, V = O(), V !== e) {
      for (te = [], R = d, Ve = Kt(), t.substr(d, 2) === m ? (ve = m, d += 2) : (ve = e, P === 0 && Se(Ge)), ve !== e ? (qt = Kt(), Yt = O(), Yt !== e ? (Ve = [Ve, ve, qt, Yt], R = Ve) : (d = R, R = e)) : (d = R, R = e); R !== e; )
        te.push(R), R = d, Ve = Kt(), t.substr(d, 2) === m ? (ve = m, d += 2) : (ve = e, P === 0 && Se(Ge)), ve !== e ? (qt = Kt(), Yt = O(), Yt !== e ? (Ve = [Ve, ve, qt, Yt], R = Ve) : (d = R, R = e)) : (d = R, R = e);
      B = b, b = nr(V, te);
    } else
      d = b, b = e;
    return b;
  }
  function O() {
    var b, V, te, R, Ve, ve, qt, Yt;
    if (b = d, V = tt(), V !== e) {
      for (te = [], R = d, Ve = Kt(), t.substr(d, 2) === p ? (ve = p, d += 2) : (ve = e, P === 0 && Se($)), ve === e && (t.substr(d, 2) === w ? (ve = w, d += 2) : (ve = e, P === 0 && Se(Be))), ve !== e ? (qt = Kt(), Yt = tt(), Yt !== e ? (Ve = [Ve, ve, qt, Yt], R = Ve) : (d = R, R = e)) : (d = R, R = e); R !== e; )
        te.push(R), R = d, Ve = Kt(), t.substr(d, 2) === p ? (ve = p, d += 2) : (ve = e, P === 0 && Se($)), ve === e && (t.substr(d, 2) === w ? (ve = w, d += 2) : (ve = e, P === 0 && Se(Be))), ve !== e ? (qt = Kt(), Yt = tt(), Yt !== e ? (Ve = [Ve, ve, qt, Yt], R = Ve) : (d = R, R = e)) : (d = R, R = e);
      B = b, b = pr(V, te);
    } else
      d = b, b = e;
    return b;
  }
  function tt() {
    var b, V, te, R, Ve, ve, qt, Yt;
    if (b = d, V = De(), V !== e) {
      for (te = [], R = d, Ve = Kt(), t.substr(d, 2) === k ? (ve = k, d += 2) : (ve = e, P === 0 && Se(Ne)), ve === e && (t.charCodeAt(d) === 62 ? (ve = N, d++) : (ve = e, P === 0 && Se(ot)), ve === e && (t.substr(d, 2) === H ? (ve = H, d += 2) : (ve = e, P === 0 && Se(ct)), ve === e && (t.charCodeAt(d) === 60 ? (ve = z, d++) : (ve = e, P === 0 && Se(nt))))), ve !== e ? (qt = Kt(), Yt = De(), Yt !== e ? (Ve = [Ve, ve, qt, Yt], R = Ve) : (d = R, R = e)) : (d = R, R = e); R !== e; )
        te.push(R), R = d, Ve = Kt(), t.substr(d, 2) === k ? (ve = k, d += 2) : (ve = e, P === 0 && Se(Ne)), ve === e && (t.charCodeAt(d) === 62 ? (ve = N, d++) : (ve = e, P === 0 && Se(ot)), ve === e && (t.substr(d, 2) === H ? (ve = H, d += 2) : (ve = e, P === 0 && Se(ct)), ve === e && (t.charCodeAt(d) === 60 ? (ve = z, d++) : (ve = e, P === 0 && Se(nt))))), ve !== e ? (qt = Kt(), Yt = De(), Yt !== e ? (Ve = [Ve, ve, qt, Yt], R = Ve) : (d = R, R = e)) : (d = R, R = e);
      B = b, b = vr(V, te);
    } else
      d = b, b = e;
    return b;
  }
  function De() {
    var b, V, te, R, Ve, ve, qt, Yt;
    if (b = d, V = tr(), V !== e) {
      for (te = [], R = d, Ve = Kt(), t.charCodeAt(d) === 43 ? (ve = oe, d++) : (ve = e, P === 0 && Se(kt)), ve === e && (t.charCodeAt(d) === 45 ? (ve = _e, d++) : (ve = e, P === 0 && Se(it))), ve !== e ? (qt = Kt(), Yt = tr(), Yt !== e ? (Ve = [Ve, ve, qt, Yt], R = Ve) : (d = R, R = e)) : (d = R, R = e); R !== e; )
        te.push(R), R = d, Ve = Kt(), t.charCodeAt(d) === 43 ? (ve = oe, d++) : (ve = e, P === 0 && Se(kt)), ve === e && (t.charCodeAt(d) === 45 ? (ve = _e, d++) : (ve = e, P === 0 && Se(it))), ve !== e ? (qt = Kt(), Yt = tr(), Yt !== e ? (Ve = [Ve, ve, qt, Yt], R = Ve) : (d = R, R = e)) : (d = R, R = e);
      B = b, b = or(V, te);
    } else
      d = b, b = e;
    return b;
  }
  function tr() {
    var b, V, te, R, Ve, ve, qt, Yt;
    if (b = d, V = se(), V !== e) {
      for (te = [], R = d, Ve = Kt(), t.charCodeAt(d) === 47 ? (ve = T, d++) : (ve = e, P === 0 && Se(Pt)), ve === e && (t.charCodeAt(d) === 42 ? (ve = Y, d++) : (ve = e, P === 0 && Se(ft)), ve === e && (t.charCodeAt(d) === 37 ? (ve = le, d++) : (ve = e, P === 0 && Se(Z)))), ve !== e ? (qt = Kt(), Yt = se(), Yt !== e ? (Ve = [Ve, ve, qt, Yt], R = Ve) : (d = R, R = e)) : (d = R, R = e); R !== e; )
        te.push(R), R = d, Ve = Kt(), t.charCodeAt(d) === 47 ? (ve = T, d++) : (ve = e, P === 0 && Se(Pt)), ve === e && (t.charCodeAt(d) === 42 ? (ve = Y, d++) : (ve = e, P === 0 && Se(ft)), ve === e && (t.charCodeAt(d) === 37 ? (ve = le, d++) : (ve = e, P === 0 && Se(Z)))), ve !== e ? (qt = Kt(), Yt = se(), Yt !== e ? (Ve = [Ve, ve, qt, Yt], R = Ve) : (d = R, R = e)) : (d = R, R = e);
      B = b, b = ir(V, te);
    } else
      d = b, b = e;
    return b;
  }
  function se() {
    var b, V, te, R;
    return b = d, V = d, P++, t.charCodeAt(d) === 45 ? (te = _e, d++) : (te = e, P === 0 && Se(it)), P--, te !== e ? (d = V, V = void 0) : V = e, V !== e ? (te = Vn(), te !== e ? (B = b, b = Ht(te)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, V = d, P++, t.charCodeAt(d) === 45 ? (te = _e, d++) : (te = e, P === 0 && Se(it)), P--, te !== e ? (d = V, V = void 0) : V = e, V !== e ? (te = bn(), te !== e ? (B = b, b = mt(te)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 33 ? (V = E, d++) : (V = e, P === 0 && Se(pe)), V === e && (t.charCodeAt(d) === 43 ? (V = oe, d++) : (V = e, P === 0 && Se(kt)), V === e && (t.charCodeAt(d) === 45 ? (V = _e, d++) : (V = e, P === 0 && Se(it)))), V !== e ? (te = Kt(), R = We(), R === e && (R = Nt()), R !== e ? (B = b, b = Qt(V, R)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = Nt()))), b;
  }
  function We() {
    var b, V;
    return b = d, t.charCodeAt(d) === 43 ? (V = oe, d++) : (V = e, P === 0 && Se(kt)), V === e && (t.charCodeAt(d) === 45 ? (V = _e, d++) : (V = e, P === 0 && Se(it))), V !== e && (B = b, V = ae()), b = V, b;
  }
  function Nt() {
    var b, V, te, R, Ve, ve, qt, Yt, qr, Nr, Hr, mo, ro, no, $n;
    if (b = d, V = St(), V !== e) {
      for (te = [], R = d, Ve = Kt(), t.charCodeAt(d) === 46 ? (ve = D, d++) : (ve = e, P === 0 && Se(st)), ve !== e ? (qt = Kt(), Yt = Nn(), Yt !== e ? (qr = Kt(), Nr = d, t.charCodeAt(d) === 40 ? (Hr = M, d++) : (Hr = e, P === 0 && Se(ze)), Hr !== e ? (mo = Kt(), ro = Cr(), ro !== e ? (no = Kt(), t.charCodeAt(d) === 41 ? ($n = W, d++) : ($n = e, P === 0 && Se(F)), $n !== e ? (Hr = [Hr, mo, ro, no, $n], Nr = Hr) : (d = Nr, Nr = e)) : (d = Nr, Nr = e)) : (d = Nr, Nr = e), Nr === e && (Nr = null), Ve = [Ve, ve, qt, Yt, qr, Nr], R = Ve) : (d = R, R = e)) : (d = R, R = e); R !== e; )
        te.push(R), R = d, Ve = Kt(), t.charCodeAt(d) === 46 ? (ve = D, d++) : (ve = e, P === 0 && Se(st)), ve !== e ? (qt = Kt(), Yt = Nn(), Yt !== e ? (qr = Kt(), Nr = d, t.charCodeAt(d) === 40 ? (Hr = M, d++) : (Hr = e, P === 0 && Se(ze)), Hr !== e ? (mo = Kt(), ro = Cr(), ro !== e ? (no = Kt(), t.charCodeAt(d) === 41 ? ($n = W, d++) : ($n = e, P === 0 && Se(F)), $n !== e ? (Hr = [Hr, mo, ro, no, $n], Nr = Hr) : (d = Nr, Nr = e)) : (d = Nr, Nr = e)) : (d = Nr, Nr = e), Nr === e && (Nr = null), Ve = [Ve, ve, qt, Yt, qr, Nr], R = Ve) : (d = R, R = e)) : (d = R, R = e);
      B = b, b = wr(V, te);
    } else
      d = b, b = e;
    return b;
  }
  function St() {
    var b, V, te, R, Ve;
    return b = d, V = Nn(), V !== e ? (Kt(), t.charCodeAt(d) === 40 ? (te = M, d++) : (te = e, P === 0 && Se(ze)), te !== e ? (Kt(), R = Cr(), R !== e ? (Kt(), t.charCodeAt(d) === 41 ? (Ve = W, d++) : (Ve = e, P === 0 && Se(F)), Ve !== e ? (B = b, b = kr(V, R)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = Gr()), b;
  }
  function Cr() {
    var b, V, te, R, Ve, ve;
    if (b = d, V = y(), V !== e) {
      for (te = [], R = d, Kt(), t.charCodeAt(d) === 44 ? (Ve = q, d++) : (Ve = e, P === 0 && Se(Ct)), Ve !== e ? (Kt(), ve = y(), ve !== e ? R = ve : (d = R, R = e)) : (d = R, R = e); R !== e; )
        te.push(R), R = d, Kt(), t.charCodeAt(d) === 44 ? (Ve = q, d++) : (Ve = e, P === 0 && Se(Ct)), Ve !== e ? (Kt(), ve = y(), ve !== e ? R = ve : (d = R, R = e)) : (d = R, R = e);
      B = b, b = Et(V, te);
    } else
      d = b, b = e;
    return b === e && (b = Kt()), b;
  }
  function Gr() {
    var b, V, te, R;
    return b = lo(), b === e && (b = an(), b === e && (b = Vn(), b === e && (b = bn(), b === e && (b = d, t.charCodeAt(d) === 40 ? (V = M, d++) : (V = e, P === 0 && Se(ze)), V !== e ? (Kt(), te = y(), te !== e ? (Kt(), t.charCodeAt(d) === 41 ? (R = W, d++) : (R = e, P === 0 && Se(F)), R !== e ? (B = b, b = Ir(te)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e))))), b;
  }
  function an() {
    var b, V, te, R;
    return P++, b = d, t.charCodeAt(d) === 39 ? (V = be, d++) : (V = e, P === 0 && Se(Vt)), V !== e ? (te = Mr(), t.charCodeAt(d) === 39 ? (R = be, d++) : (R = e, P === 0 && Se(Vt)), R !== e ? (B = b, b = Pr(te)) : (d = b, b = e)) : (d = b, b = e), P--, b === e && (V = e, P === 0 && Se(ut)), b;
  }
  function Mr() {
    var b, V, te;
    for (b = d, V = [], te = mn(); te !== e; )
      V.push(te), te = mn();
    return B = b, V = ur(V), b = V, b;
  }
  function mn() {
    var b, V, te, R, Ve;
    if (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, P === 0 && Se(ye)), V !== e ? (te = Kt(), R = y(), R !== e ? (Kt(), t.charCodeAt(d) === 125 ? (Ve = a, d++) : (Ve = e, P === 0 && Se(Me)), Ve !== e ? (B = b, b = dt(R)) : (d = b, b = e)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.substr(d, 3) === l ? (V = l, d += 3) : (V = e, P === 0 && Se(ce)), V !== e && (B = b, V = At()), b = V, b === e && (b = d, V = d, P++, t.charCodeAt(d) === 92 ? (te = u, d++) : (te = e, P === 0 && Se(he)), te === e && (t.charCodeAt(d) === 39 ? (te = be, d++) : (te = e, P === 0 && Se(Vt)), te === e && (t.substr(d, 2) === s ? (te = s, d += 2) : (te = e, P === 0 && Se(ye)))), P--, te === e ? V = void 0 : (d = V, V = e), V !== e ? (t.length > d ? (te = t.charAt(d), d++) : (te = e, P === 0 && Se(fe)), te !== e ? (B = b, b = Jt()) : (d = b, b = e)) : (d = b, b = e), b === e))) {
      if (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, P === 0 && Se(ye)), V !== e) {
        if (te = [], Fe.test(t.charAt(d)) ? (R = t.charAt(d), d++) : (R = e, P === 0 && Se(Dt)), R !== e)
          for (; R !== e; )
            te.push(R), Fe.test(t.charAt(d)) ? (R = t.charAt(d), d++) : (R = e, P === 0 && Se(Dt));
        else
          te = e;
        te !== e ? (t.charCodeAt(d) === 125 ? (R = a, d++) : (R = e, P === 0 && Se(Me)), R !== e ? (B = b, b = xt()) : (d = b, b = e)) : (d = b, b = e);
      } else
        d = b, b = e;
      b === e && (b = d, t.substr(d, 2) === s ? (V = s, d += 2) : (V = e, P === 0 && Se(ye)), V !== e && (B = b, V = et()), b = V, b === e && (b = d, t.charCodeAt(d) === 92 ? (V = u, d++) : (V = e, P === 0 && Se(he)), V !== e ? (t.substr(d, 2) === s ? (te = s, d += 2) : (te = e, P === 0 && Se(ye)), te !== e ? (B = b, b = pt(te)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (V = u, d++) : (V = e, P === 0 && Se(he)), V !== e ? (t.length > d ? (te = t.charAt(d), d++) : (te = e, P === 0 && Se(fe)), te !== e ? (B = b, b = ue(te)) : (d = b, b = e)) : (d = b, b = e), b === e && (b = d, t.charCodeAt(d) === 92 ? (V = u, d++) : (V = e, P === 0 && Se(he)), V !== e && (B = b, V = vt()), b = V))));
    }
    return b;
  }
  function bn() {
    var b, V, te;
    if (P++, b = d, t.charCodeAt(d) === 45 ? d++ : P === 0 && Se(it), V = [], Q.test(t.charAt(d)) ? (te = t.charAt(d), d++) : (te = e, P === 0 && Se(K)), te !== e)
      for (; te !== e; )
        V.push(te), Q.test(t.charAt(d)) ? (te = t.charAt(d), d++) : (te = e, P === 0 && Se(K));
    else
      V = e;
    return V !== e ? (B = b, b = $t()) : (d = b, b = e), P--, b === e && P === 0 && Se(lt), b;
  }
  function Vn() {
    var b, V, te, R, Ve, ve, qt, Yt, qr;
    for (P++, b = d, t.charCodeAt(d) === 45 ? d++ : P === 0 && Se(it), V = [], Q.test(t.charAt(d)) ? (te = t.charAt(d), d++) : (te = e, P === 0 && Se(K)); te !== e; )
      V.push(te), Q.test(t.charAt(d)) ? (te = t.charAt(d), d++) : (te = e, P === 0 && Se(K));
    if (t.charCodeAt(d) === 46 ? (te = D, d++) : (te = e, P === 0 && Se(st)), te !== e) {
      if (R = [], Q.test(t.charAt(d)) ? (Ve = t.charAt(d), d++) : (Ve = e, P === 0 && Se(K)), Ve !== e)
        for (; Ve !== e; )
          R.push(Ve), Q.test(t.charAt(d)) ? (Ve = t.charAt(d), d++) : (Ve = e, P === 0 && Se(K));
      else
        R = e;
      if (R !== e) {
        if (Ve = d, t.charCodeAt(d) === 101 ? (ve = Ae, d++) : (ve = e, P === 0 && Se(It)), ve === e && (t.charCodeAt(d) === 69 ? (ve = Ce, d++) : (ve = e, P === 0 && Se(Xt))), ve !== e) {
          if (t.charCodeAt(d) === 43 ? (qt = oe, d++) : (qt = e, P === 0 && Se(kt)), qt === e && (t.charCodeAt(d) === 45 ? (qt = _e, d++) : (qt = e, P === 0 && Se(it))), qt === e && (qt = null), Yt = [], Q.test(t.charAt(d)) ? (qr = t.charAt(d), d++) : (qr = e, P === 0 && Se(K)), qr !== e)
            for (; qr !== e; )
              Yt.push(qr), Q.test(t.charAt(d)) ? (qr = t.charAt(d), d++) : (qr = e, P === 0 && Se(K));
          else
            Yt = e;
          Yt !== e ? (ve = [ve, qt, Yt], Ve = ve) : (d = Ve, Ve = e);
        } else
          d = Ve, Ve = e;
        Ve === e && (Ve = null), B = b, b = Wt();
      } else
        d = b, b = e;
    } else
      d = b, b = e;
    if (b === e) {
      if (b = d, t.charCodeAt(d) === 45 ? d++ : P === 0 && Se(it), V = [], Q.test(t.charAt(d)) ? (te = t.charAt(d), d++) : (te = e, P === 0 && Se(K)), te !== e)
        for (; te !== e; )
          V.push(te), Q.test(t.charAt(d)) ? (te = t.charAt(d), d++) : (te = e, P === 0 && Se(K));
      else
        V = e;
      if (V !== e)
        if (t.charCodeAt(d) === 101 ? (te = Ae, d++) : (te = e, P === 0 && Se(It)), te === e && (t.charCodeAt(d) === 69 ? (te = Ce, d++) : (te = e, P === 0 && Se(Xt))), te !== e) {
          if (t.charCodeAt(d) === 43 ? (R = oe, d++) : (R = e, P === 0 && Se(kt)), R === e && (t.charCodeAt(d) === 45 ? (R = _e, d++) : (R = e, P === 0 && Se(it))), R === e && (R = null), Ve = [], Q.test(t.charAt(d)) ? (ve = t.charAt(d), d++) : (ve = e, P === 0 && Se(K)), ve !== e)
            for (; ve !== e; )
              Ve.push(ve), Q.test(t.charAt(d)) ? (ve = t.charAt(d), d++) : (ve = e, P === 0 && Se(K));
          else
            Ve = e;
          Ve !== e ? (B = b, b = yr()) : (d = b, b = e);
        } else
          d = b, b = e;
      else
        d = b, b = e;
    }
    return P--, b === e && P === 0 && Se(Mt), b;
  }
  function lo() {
    var b, V, te, R, Ve, ve, qt, Yt, qr, Nr, Hr;
    if (b = d, Ke.test(t.charAt(d)) ? (V = t.charAt(d), d++) : (V = e, P === 0 && Se(Zt)), V !== e) {
      if (te = [], R = [], Ye.test(t.charAt(d)) ? (Ve = t.charAt(d), d++) : (Ve = e, P === 0 && Se(Ee)), Ve !== e)
        for (; Ve !== e; )
          R.push(Ve), Ye.test(t.charAt(d)) ? (Ve = t.charAt(d), d++) : (Ve = e, P === 0 && Se(Ee));
      else
        R = e;
      for (R === e && (R = d, t.charCodeAt(d) === 46 ? (Ve = D, d++) : (Ve = e, P === 0 && Se(st)), Ve !== e ? (ve = d, P++, qt = d, Yt = Kt(), qr = Nn(), qr !== e ? (Nr = Kt(), t.charCodeAt(d) === 40 ? (Hr = M, d++) : (Hr = e, P === 0 && Se(ze)), Hr !== e ? (Yt = [Yt, qr, Nr, Hr], qt = Yt) : (d = qt, qt = e)) : (d = qt, qt = e), P--, qt === e ? ve = void 0 : (d = ve, ve = e), ve !== e ? (Ve = [Ve, ve], R = Ve) : (d = R, R = e)) : (d = R, R = e)); R !== e; ) {
        if (te.push(R), R = [], Ye.test(t.charAt(d)) ? (Ve = t.charAt(d), d++) : (Ve = e, P === 0 && Se(Ee)), Ve !== e)
          for (; Ve !== e; )
            R.push(Ve), Ye.test(t.charAt(d)) ? (Ve = t.charAt(d), d++) : (Ve = e, P === 0 && Se(Ee));
        else
          R = e;
        R === e && (R = d, t.charCodeAt(d) === 46 ? (Ve = D, d++) : (Ve = e, P === 0 && Se(st)), Ve !== e ? (ve = d, P++, qt = d, Yt = Kt(), qr = Nn(), qr !== e ? (Nr = Kt(), t.charCodeAt(d) === 40 ? (Hr = M, d++) : (Hr = e, P === 0 && Se(ze)), Hr !== e ? (Yt = [Yt, qr, Nr, Hr], qt = Yt) : (d = qt, qt = e)) : (d = qt, qt = e), P--, qt === e ? ve = void 0 : (d = ve, ve = e), ve !== e ? (Ve = [Ve, ve], R = Ve) : (d = R, R = e)) : (d = R, R = e));
      }
      B = b, b = j();
    } else
      d = b, b = e;
    return b;
  }
  function Nn() {
    var b, V, te, R;
    if (b = d, Ke.test(t.charAt(d)) ? (V = t.charAt(d), d++) : (V = e, P === 0 && Se(Zt)), V !== e) {
      for (te = [], Ye.test(t.charAt(d)) ? (R = t.charAt(d), d++) : (R = e, P === 0 && Se(Ee)); R !== e; )
        te.push(R), Ye.test(t.charAt(d)) ? (R = t.charAt(d), d++) : (R = e, P === 0 && Se(Ee));
      B = b, b = ie();
    } else
      d = b, b = e;
    return b;
  }
  function Kt() {
    var b, V;
    for (P++, b = [], Xe.test(t.charAt(d)) ? (V = t.charAt(d), d++) : (V = e, P === 0 && Se(gt)); V !== e; )
      b.push(V), Xe.test(t.charAt(d)) ? (V = t.charAt(d), d++) : (V = e, P === 0 && Se(gt));
    return P--, V = e, P === 0 && Se(Ze), b;
  }
  if (Lt = i(), Lt !== e && d === t.length)
    return Lt;
  throw Lt !== e && d < t.length && Se(Ar()), Xr(
    ke,
    He < t.length ? t.charAt(He) : null,
    He < t.length ? wn(He, He + 1) : wn(He, He)
  );
}
const O_ = 2147483647, B_ = -2147483648, R_ = Number.MAX_VALUE, H_ = Number.MIN_VALUE, qe = "string", Re = "integer", wt = "number", Kr = "boolean", _n = "color", to = "url", zr = "datetime", mr = "dict", br = "array", W_ = "function";
function oo(t, r) {
  var e;
  switch ((e = r[t.type]) == null || e.call(r, t), t.type) {
    case "TemplateLiteral":
      t.expressions.forEach((n) => {
        oo(n, r);
      });
      break;
    case "BinaryExpression":
    case "LogicalExpression":
      oo(t.left, r), oo(t.right, r);
      break;
    case "UnaryExpression":
      oo(t.argument, r);
      break;
    case "ConditionalExpression":
      oo(t.test, r), oo(t.consequent, r), oo(t.alternate, r);
      break;
    case "TryExpression":
      oo(t.test, r), oo(t.alternate, r);
      break;
    case "CallExpression":
      t.arguments.forEach((n) => {
        oo(n, r);
      });
      break;
    case "MethodExpression":
      oo(t.object, r), t.arguments.forEach((n) => {
        oo(n, r);
      });
      break;
  }
}
function gd(t, r) {
  for (; t.length < r; )
    t = "0" + t;
  return t;
}
function gr(t, r = 1, e = "transparent") {
  if (t = (typeof t == "string" && t || "").toLowerCase(), t.charAt(0) !== "#")
    return e;
  const n = _o(t);
  return n ? (n.a *= r, fa(n)) : e;
}
function U_(t, r, e = "transparent") {
  if (t = (typeof t == "string" && t || "").toLowerCase(), t.charAt(0) !== "#")
    return e;
  const n = _o(t);
  return n ? (n.a = r, fa(n)) : e;
}
function fa(t) {
  return t.a === 255 ? `#${[t.r, t.g, t.b].map((r) => gd(Math.round(r).toString(16), 2)).join("")}` : `rgba(${t.r},${t.g},${t.b},${(t.a / 255).toFixed(2)})`;
}
function _o(t) {
  const r = (
    // #AARRGGBB
    t.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i) || // #ARGB
    t.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])$/i) || // #RRGGBB
    t.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i) || // #RGB
    t.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i)
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
class da extends Error {
}
function Us(t) {
  return t.type === "url" || t.type === "color" ? {
    type: "string",
    value: t.value
  } : t;
}
function hd(t) {
  return t.toISOString().replace("T", " ").replace(/\.\d{3}Z$/, "");
}
function Ei(t, r) {
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
      return hd(t.value);
    if (t.type === "color")
      return Si(ol(t.value));
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
function pn(t) {
  let r = Ei(t, !1);
  return t.type === "string" && (r = "'" + r.replace(/\\/g, "\\\\").replace(/'/g, "\\'") + "'"), r;
}
function Zn(t) {
  return t === "datetime" ? "DateTime" : t.charAt(0).toUpperCase() + t.substring(1);
}
function Ai(t, r) {
  return gn(r);
}
function Ln(t, r) {
  if (r < ls || r > ss)
    throw new Error("Integer overflow.");
}
function po(t) {
  if (typeof t != "string")
    throw new Error("Incorrect url value.");
  try {
    new URL(t);
  } catch {
    throw new Error("Incorrect url value.");
  }
}
function G_(t) {
  try {
    return po(t), !0;
  } catch {
    return !1;
  }
}
function J_(t) {
  const r = /* @__PURE__ */ new Set();
  return oo(t, {
    Variable(e) {
      r.add(e.id.name);
    }
  }), [...r];
}
function Dn(t, r) {
  throw new da(`Failed to evaluate [${t}]. ${r}`);
}
function K_(t, r) {
  throw new Error(r);
}
function ol(t) {
  const r = _o(t);
  if (r)
    return r;
  throw new Error("Unable to convert value to Color, expected format #AARRGGBB.");
}
function Si(t) {
  return `#${[t.a, t.r, t.g, t.b].map((r) => {
    if (r < 0 || r > 255)
      throw new Error("Value out of range 0..1.");
    return gd(Math.round(r).toString(16), 2);
  }).join("").toUpperCase()}`;
}
function si(t) {
  return Si(ol(t));
}
function Ol(t) {
  return {
    type: wt,
    value: Number(t.value)
  };
}
const q_ = {
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
function il(t, r, e) {
  if (e === "function")
    throw new Error("Cannot convert function");
  const n = q_[e];
  let o = typeof r;
  if (n === "array" && !Array.isArray(r) || n !== "array" && o !== n || o === "object" && r === null)
    throw o === "object" && (Array.isArray(r) ? o = "array" : r === null ? o = "null" : o = "dict"), new Error(`Incorrect value type: expected ${Zn(e)}, got ${Zn(o)}.`);
  if (n === "number" && e === "integer") {
    t && Ln(t, r);
    try {
      r = gn(r);
    } catch {
      throw new Error("Cannot convert value to integer.");
    }
  }
  return n === "string" && e === "color" && (r = si(r)), n === "string" && e === "url" && po(r), n === "boolean" && e === Kr && (r = r ? 1 : 0), {
    type: e,
    value: r
  };
}
function Y_(t) {
  return t.type === "number" || t.type === "integer" ? Number(t.value) : t.type === "boolean" ? !!t.value : t.value;
}
function sl(t) {
  return Y_(
    il(void 0, t.value, t.type)
  );
}
const ns = /* @__PURE__ */ new Map(), Bl = /* @__PURE__ */ new Map(), As = /* @__PURE__ */ new Map(), Rl = /* @__PURE__ */ new Map();
function U(t, r, e) {
  const n = {
    args: r,
    cb: e
  }, o = ns.get(t) || [];
  ns.has(t) || ns.set(t, o), o.push(n);
  const i = t + ":" + r.map((s) => typeof s == "object" ? s.type : s).join("#");
  Bl.set(i, n);
}
function Wr(t, r, e) {
  const n = {
    args: r,
    cb: e
  }, o = As.get(t) || [];
  As.has(t) || As.set(t, o), o.push(n);
  const i = t + ":" + r.map((s) => typeof s == "object" ? s.type : s).join("#");
  Rl.set(i, n);
}
function X_(t, r, e) {
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
    }), l.type === wt && r[a].type === Re) {
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
function md(t, r) {
  if (!t)
    return {
      type: "missing"
    };
  let e = null, n = null;
  for (let o = 0; o < t.length; ++o) {
    const i = X_(t[o], r, t.length > 1);
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
function Hl(t, r, e) {
  return md(t.get(r), e);
}
function bd(t, r) {
  return r.map((e, n) => {
    let o = n >= t.args.length ? t.args[t.args.length - 1] : t.args[n];
    return typeof o != "object" && (o = {
      type: o
    }), o.type === wt && e.type === Re ? Ol(e) : e;
  });
}
function Na(t, r) {
  return t + ":" + r.args.map((e) => typeof e == "string" ? e : e.type).join("#");
}
function Un(t, r) {
  return {
    type: qe,
    value: Ei(r, !0)
  };
}
function za(t, r) {
  const e = Number(r.value);
  if (Number.isNaN(e) || !Number.isFinite(e))
    throw new Error("Unable to convert value to Number.");
  if (r.value === "")
    throw new Error("Unable to convert value to Number.");
  return {
    type: wt,
    value: e
  };
}
function Z_(t, r) {
  if (r.value > ss || r.value < ls)
    throw new Error("Unable to convert value to Integer.");
  const e = r.value - r.value % 1;
  return {
    type: Re,
    value: gn(e)
  };
}
function Q_(t, r) {
  let e;
  try {
    e = gn(r.value);
  } catch {
    throw new Error("Unable to convert value to Integer.");
  }
  return {
    type: Re,
    value: e
  };
}
function x_(t, r) {
  return {
    type: Re,
    value: gn(r.value ? 1 : 0)
  };
}
function $_(t, r) {
  const e = Number(r.value);
  if (e !== 1 && e !== 0)
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: Kr,
    value: e
  };
}
function ep(t, r) {
  if (r.value !== "true" && r.value !== "false")
    throw new Error("Unable to convert value to Boolean.");
  return {
    type: Kr,
    value: r.value === "true" ? 1 : 0
  };
}
function tp(t, r) {
  return {
    type: _n,
    value: si(r.value)
  };
}
function rp(t, r) {
  return po(r.value), {
    type: to,
    value: r.value
  };
}
function np(t, r) {
  try {
    return {
      type: qe,
      value: encodeURIComponent(r.value)
    };
  } catch {
    throw new Error("Unable to encodeUri string.");
  }
}
function op(t, r) {
  try {
    return {
      type: qe,
      value: decodeURIComponent(r.value)
    };
  } catch {
    throw new Error("Unable to decodeUri string.");
  }
}
function _a(t, r, e, n) {
  const o = t.variables.get(r.value);
  let i;
  return o && o.getType() === n ? (i = o.getValue(), t.storeUsedVars || (t.storeUsedVars = /* @__PURE__ */ new Set()), t.storeUsedVars.add(o)) : i = e.value, n === "color" ? i = si(i) : n === "url" && po(i), {
    type: n,
    // value is synced with type by params
    value: i
  };
}
function gs(t, r, e) {
  return _a(t, r, e, e.type);
}
function La(t, r, e) {
  return _a(t, r, e, "color");
}
function Oa(t, r, e) {
  return _a(t, r, e, "url");
}
function yd(t, r) {
  for (let e = 0; e < r.length; ++e) {
    const n = t.charAt(e), o = r.charAt(e);
    if (n !== o && o)
      return o;
  }
  return "";
}
const Gs = 1234567890;
function Ba(t) {
  const r = new Intl.NumberFormat(t, {
    maximumFractionDigits: 0
  }), e = new Intl.NumberFormat(t, {
    minimumFractionDigits: 1
  }), n = r.format(Gs), o = e.format(Gs);
  return yd(n, o);
}
function ip(t) {
  const r = new Intl.NumberFormat(t, {
    useGrouping: !1
  }), e = new Intl.NumberFormat(t, {
    useGrouping: !0
  }), n = r.format(Gs), o = e.format(Gs);
  return yd(n, o);
}
function xo(t, r, e, n) {
  const o = e.value, i = o.replace(/,/g, "");
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
      const H = ip(n == null ? void 0 : n.value), z = Ba(n == null ? void 0 : n.value);
      if (H && z) {
        const oe = N.split(z), _e = oe[0];
        let T = "";
        for (let Y = _e.length - 1; Y >= 0; --Y)
          T = _e[Y] + T, Y > 0 && (_e.length - Y) % h === 0 && (T = H + T);
        N = T + (oe.length > 1 ? z + oe[1] : "");
      }
    }
    if (p === 0 && w === 0 && o.endsWith(".")) {
      const H = Ba(n == null ? void 0 : n.value);
      H && (N += H);
    }
    return {
      type: qe,
      value: N
    };
  } catch (m) {
    throw new Error("Incorrect or unsupported number format." + m + " " + (n == null ? void 0 : n.value) || void 0);
  }
}
function sp() {
  U("toString", [Re], Un), U("toString", [wt], Un), U("toString", [Kr], Un), U("toString", [_n], Un), U("toString", [to], Un), U("toString", [qe], Un), U("toString", [br], Un), U("toString", [mr], Un), U("toNumber", [Re], za), U("toNumber", [qe], za), U("toInteger", [wt], Z_), U("toInteger", [qe], Q_), U("toInteger", [Kr], x_), U("toBoolean", [Re], $_), U("toBoolean", [qe], ep), U("toColor", [qe], tp), U("toUrl", [qe], rp), U("encodeUri", [qe], np), U("decodeUri", [qe], op), U("getIntegerValue", [qe, Re], gs), U("getNumberValue", [qe, wt], gs), U("getBooleanValue", [qe, Kr], gs), U("getStringValue", [qe, qe], gs), U("getColorValue", [qe, _n], La), U("getColorValue", [qe, qe], La), U("getUrlValue", [qe, to], Oa), U("getUrlValue", [qe, qe], Oa), Wr("toString", [Re], Un), Wr("toString", [wt], Un), Wr("toString", [Kr], Un), Wr("toString", [_n], Un), Wr("toString", [to], Un), Wr("toString", [qe], Un), Wr("toString", [br], Un), Wr("toString", [mr], Un), U("decimalFormat", [Re, qe], xo), U("decimalFormat", [wt, qe], xo), U("decimalFormat", [Re, qe, qe], xo), U("decimalFormat", [wt, qe, qe], xo), Wr("decimalFormat", [Re, qe], xo), Wr("decimalFormat", [wt, qe], xo), Wr("decimalFormat", [Re, qe, qe], xo), Wr("decimalFormat", [wt, qe, qe], xo);
}
function Gn(t, r) {
  return !t || !r ? t : t.padStart(r, "0");
}
const Wl = {
  G(t, r) {
    let e;
    return t < 4 ? e = "short" : t === 5 ? e = "narrow" : e = "long", r({
      era: e
    }, "era");
  },
  d(t, r) {
    return Gn(r({
      day: "numeric"
    }, "day"), t > 1 ? t : 0);
  },
  D(t, r) {
    return Gn(r({}, "dayofyear"), t > 1 ? t : 0);
  },
  F(t, r) {
    return Gn(r({}, "dayofweekinmonth"), t > 1 ? t : 0);
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
    return Gn(r({
      year: t === 2 ? "2-digit" : "numeric"
    }, "year"), t > 2 ? t : void 0);
  },
  Y(t, r) {
    return Gn(r({
      year: t === 2 ? "2-digit" : "numeric"
    }, "weekyear"), t > 2 ? t : void 0);
  },
  u(t, r) {
    return Gn(r({
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
    return t > 2 ? Wl.E(t, r) : Gn(r({}, "weekdaynumeric"), t > 1 ? t : void 0);
  },
  w(t, r) {
    return Gn(r({}, "week"), t > 1 ? t : void 0);
  },
  W(t, r) {
    return Gn(r({}, "weekofmonth"), t > 1 ? t : void 0);
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
    return Gn(n, t > 1 ? t : void 0);
  },
  h(t, r) {
    return Gn(r({
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
    return Gn(n, t > 1 ? t : void 0);
  },
  k(t, r) {
    return Gn(r({
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
    return Gn(r({
      minute: "numeric"
    }, "minute"), t > 1 ? t : void 0);
  },
  s(t, r) {
    return Gn(r({
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
    return (e >= 0 ? "+" : "-") + Gn(String(o), 4);
  }
}, lp = /(\w)\1*|''|'(''|[^'])+('|$)|./g, ap = /^'([^]*?)'?$/, up = /''/g, cp = /[a-zA-Z]/, pa = 1e3 * 60 * 60 * 24;
function fp(t) {
  const r = t.match(ap);
  return r ? r[1].replace(up, "'") : t;
}
function Ul(t, r, e) {
  const n = t[r ? "getUTCDay" : "getDay"](), o = n < e ? e - n - 7 : e - n;
  return new Date(t.getTime() + pa * o);
}
function Ra(t, r, e) {
  const n = new Date(t);
  return n[r ? "setUTCDate" : "setDate"](1), n[r ? "setUTCMonth" : "setMonth"](0), Ul(n, r, e);
}
function Ha(t, r) {
  return Math.round((t.getTime() - r.getTime()) / pa);
}
function Wa(t, r, e) {
  let n = 0;
  const o = Ra(t, r || !1, e), i = new Date(t);
  i[r ? "setUTCFullYear" : "setFullYear"](t[r ? "getUTCFullYear" : "getFullYear"]() + 1);
  const s = Ra(i, r || !1, e), a = t.getTime() < o.getTime(), l = t.getTime() >= s.getTime();
  let u = t[r ? "getUTCFullYear" : "getFullYear"]();
  if (a) {
    --u, o[r ? "setUTCFullYear" : "setFullYear"](o[r ? "getUTCFullYear" : "getFullYear"]() - 1);
    const c = Ha(Ul(t, r, e), o);
    n = Math.round(c / 7) + 1;
  } else if (l)
    ++u, n = 1;
  else {
    const c = Ha(Ul(t, r, e), o);
    n = Math.round(c / 7) + 1;
  }
  return {
    week: n,
    year: u
  };
}
function dp(t, r, {
  locale: e,
  isUTC: n,
  weekStartDay: o = 0
} = {}) {
  const i = (s, a) => {
    if (a === "week") {
      const { week: c } = Wa(t, n || !1, o);
      return String(c);
    }
    if (a === "weekofmonth") {
      const c = t[n ? "getUTCDay" : "getDay"](), f = new Date(t);
      f[n ? "setUTCDate" : "setDate"](1);
      const _ = f[n ? "getUTCDay" : "getDay"](), h = t[n ? "getUTCDate" : "getDate"]();
      return String(Math.ceil(h / 7) + (c < _ ? 1 : 0));
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
      const f = Math.ceil((t.getTime() - c.getTime()) / pa);
      return String(f);
    }
    if (a === "weekyear") {
      let { year: c } = Wa(t, n || !1, o);
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
  return (r.match(lp) || []).map((s) => {
    if (s === "''")
      return "'";
    const a = s[0];
    if (a === "'")
      return fp(s);
    if (Wl[a])
      return Wl[a](s.length, i);
    if (a.match(cp))
      throw new Error(
        `Format string contains an unescaped latin alphabet character "${a}"`
      );
    return s;
  }).join("");
}
function _p(t) {
  const r = new Date(t);
  return r.setUTCMonth(r.getUTCMonth() + 1), r.setUTCDate(0), r.getUTCDate();
}
function pp(t, r) {
  return {
    type: zr,
    value: new Date(Number(r.value) * 1e3)
  };
}
function gp(t, r) {
  const e = new Date(Number(r.value) * 1e3), n = e.getTimezoneOffset();
  return e.setMinutes(e.getMinutes() - n), {
    type: zr,
    value: e
  };
}
function hp() {
  return {
    type: zr,
    value: /* @__PURE__ */ new Date()
  };
}
function mp(t, r, e) {
  return {
    type: zr,
    value: new Date(r.value.getTime() + Number(e.value))
  };
}
function bp(t, r, e) {
  const n = new Date(r.value);
  return n.setUTCFullYear(Number(e.value)), {
    type: zr,
    value: n
  };
}
function yp(t, r, e) {
  const n = Number(e.value);
  if (n < 1 || n > 12)
    throw new Error(`Expecting month in [1..12], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMonth(n - 1), {
    type: zr,
    value: o
  };
}
function wp(t, r, e) {
  const n = new Date(r.value), o = Number(e.value);
  if (o <= 0 && o !== -1 || o > _p(n))
    throw new Error(`Unable to set day ${o} for date ${Ei(r, !1)}.`);
  return n.setUTCDate(o === -1 ? 0 : o), {
    type: zr,
    value: n
  };
}
function kp(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 23)
    throw new Error(`Expecting hours in [0..23], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCHours(n), {
    type: zr,
    value: o
  };
}
function vp(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting minutes in [0..59], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMinutes(n), {
    type: zr,
    value: o
  };
}
function jp(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 59)
    throw new Error(`Expecting seconds in [0..59], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCSeconds(n), {
    type: zr,
    value: o
  };
}
function Cp(t, r, e) {
  const n = Number(e.value);
  if (n < 0 || n > 999)
    throw new Error(`Expecting millis in [0..999], instead got ${n}.`);
  const o = new Date(r.value);
  return o.setUTCMilliseconds(n), {
    type: zr,
    value: o
  };
}
const li = (t) => (r, e) => {
  let o = new Date(e.value.getTime())[t]();
  return t === "getUTCMonth" ? ++o : t === "getUTCDay" && o === 0 && (o = 7), {
    type: Re,
    value: gn(o)
  };
};
function wd(t) {
  return (r, e, n, o) => ({
    type: qe,
    value: dp(e.value, n.value, {
      locale: o == null ? void 0 : o.value,
      isUTC: t,
      weekStartDay: r.weekStartDay
    })
  });
}
const Ep = li("getUTCFullYear"), Ap = li("getUTCMonth"), Sp = li("getUTCDate"), Vp = li("getUTCDay"), Fp = li("getUTCHours"), Dp = li("getUTCMinutes"), Ip = li("getUTCSeconds"), Tp = li("getUTCMilliseconds"), Ua = wd(!1), Ga = wd(!0);
function Mp() {
  U("parseUnixTime", [Re], pp), U("parseUnixTimeAsLocal", [Re], gp), U("nowLocal", [], hp), U("addMillis", [zr, Re], mp), U("setYear", [zr, Re], bp), U("setMonth", [zr, Re], yp), U("setDay", [zr, Re], wp), U("setHours", [zr, Re], kp), U("setMinutes", [zr, Re], vp), U("setSeconds", [zr, Re], jp), U("setMillis", [zr, Re], Cp), U("getYear", [zr], Ep), U("getMonth", [zr], Ap), U("getDay", [zr], Sp), U("getDayOfWeek", [zr], Vp), U("getHours", [zr], Fp), U("getMinutes", [zr], Dp), U("getSeconds", [zr], Ip), U("getMillis", [zr], Tp), U("formatDateAsLocal", [zr, qe], Ua), U("formatDateAsUTC", [zr, qe], Ga), U("formatDateAsLocalWithLocale", [zr, qe, qe], Ua), U("formatDateAsUTCWithLocale", [zr, qe, qe], Ga);
}
function Pp(t) {
  return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function X(t, r = {}) {
  const e = t;
  return e.level = r.level || "error", r.additional && (e.additional = r.additional), e;
}
function Np(t, r) {
  return {
    type: Re,
    value: gn(r.value.length)
  };
}
function zp(t, r, e) {
  return {
    type: Kr,
    value: r.value.includes(e.value) ? 1 : 0
  };
}
function Lp(t, r, e, n) {
  if (n.value < e.value)
    throw new Error("Indexes should be in ascending order.");
  if (e.value < 0 || e.value > r.value.length || n.value < 0 || n.value > r.value.length)
    throw new Error("Indexes are out of bounds.");
  return {
    type: qe,
    value: r.value.substring(Number(e.value), Number(n.value))
  };
}
function Op(t, r, e, n) {
  let o;
  return e.value ? o = r.value.replace(new RegExp(Pp(e.value), "g"), n.value) : o = r.value, {
    type: qe,
    value: o
  };
}
function Bp(t, r, e) {
  return {
    type: Re,
    value: gn(r.value.indexOf(e.value))
  };
}
function Rp(t, r, e) {
  return {
    type: Re,
    value: gn(r.value.lastIndexOf(e.value))
  };
}
function Hp(t, r) {
  return {
    type: qe,
    value: r.value.trim()
  };
}
function Wp(t, r) {
  return {
    type: qe,
    value: r.value.replace(/^\s+/, "")
  };
}
function Up(t, r) {
  return {
    type: qe,
    value: r.value.replace(/\s+$/, "")
  };
}
function Gp(t, r) {
  return {
    type: qe,
    value: r.value.toUpperCase()
  };
}
function Jp(t, r) {
  return {
    type: qe,
    value: r.value.toLowerCase()
  };
}
function kd(t, r, e, n) {
  if (!n.value.length)
    return t.warnings.push(X(new Error("String for padding is empty."), {
      level: "warn"
    })), "";
  let o = "";
  const i = r.type === qe ? r.value : Ei(r, !1);
  for (; o.length + i.length < e.value; )
    o += n.value;
  return o.length > 0 && o.length + i.length > e.value && (o = o.substring(0, Number(e.value) - Number(i.length))), o;
}
function Ja(t, r, e, n) {
  const o = kd(t, r, e, n);
  return {
    type: qe,
    value: o + Ei(r, !1)
  };
}
function Ka(t, r, e, n) {
  const o = kd(t, r, e, n);
  return {
    type: qe,
    value: Ei(r, !1) + o
  };
}
function Kp(t, r, e) {
  let n;
  try {
    n = new RegExp(e.value);
  } catch {
    throw new Error("Invalid regular expression.");
  }
  return {
    type: Kr,
    value: n.test(r.value) ? 1 : 0
  };
}
function qp(t, r) {
  return {
    type: qe,
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#escaping
    value: r.value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  };
}
function Yp() {
  U("len", [qe], Np), U("contains", [qe, qe], zp), U("substring", [qe, Re, Re], Lp), U("replaceAll", [qe, qe, qe], Op), U("index", [qe, qe], Bp), U("lastIndex", [qe, qe], Rp), U("trim", [qe], Hp), U("trimLeft", [qe], Wp), U("trimRight", [qe], Up), U("toUpperCase", [qe], Gp), U("toLowerCase", [qe], Jp), U("padStart", [qe, Re, qe], Ja), U("padStart", [Re, Re, qe], Ja), U("padEnd", [qe, Re, qe], Ka), U("padEnd", [Re, Re, qe], Ka), U("testRegex", [qe, qe], Kp), U("encodeRegex", [qe], qp);
}
function Xp(t, r, e) {
  if (e.value === wi)
    throw new Error("Division by zero is not supported.");
  let n = r.value / e.value;
  return n = Ai(t, n), Ln(t, n), {
    type: Re,
    value: n
  };
}
function Zp(t, r, e) {
  if (e.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = r.value / e.value;
  return {
    type: wt,
    value: n
  };
}
function Qp(t, r, e) {
  if (e.value === wi)
    throw new Error("Division by zero is not supported.");
  let n = r.value % e.value;
  return n = Ai(t, n), Ln(t, n), {
    type: Re,
    value: n
  };
}
function xp(t, r, e) {
  if (e.value === 0)
    throw new Error("Division by zero is not supported.");
  const n = r.value % e.value;
  return {
    type: wt,
    value: n
  };
}
function $p(t, ...r) {
  let e = r.length ? r[0].value : wi;
  for (let n = 1; n < r.length; ++n)
    e *= r[n].value, e = Ai(t, e), Ln(t, e);
  return {
    type: Re,
    value: e
  };
}
function eg(t, ...r) {
  let e = r.length ? r[0].value : 0;
  for (let n = 1; n < r.length; ++n)
    e *= r[n].value;
  return {
    type: wt,
    value: e
  };
}
function tg(t, ...r) {
  let e = r.length ? r[0].value : wi;
  for (let n = 1; n < r.length; ++n)
    e -= r[n].value, e = Ai(t, e), Ln(t, e);
  return {
    type: Re,
    value: e
  };
}
function rg(t, ...r) {
  let e = r.length ? r[0].value : 0;
  for (let n = 1; n < r.length; ++n)
    e -= r[n].value;
  return {
    type: wt,
    value: e
  };
}
function ng(t, ...r) {
  let e = wi;
  for (let n = 0; n < r.length; ++n)
    e += r[n].value, e = Ai(t, e), Ln(t, e);
  return {
    type: Re,
    value: e
  };
}
function og(t, ...r) {
  let e = 0;
  for (let n = 0; n < r.length; ++n)
    e += r[n].value;
  return {
    type: wt,
    value: e
  };
}
function ig(t, r) {
  const e = _d(r.value);
  return Ln(t, e), {
    type: r.type,
    value: e
  };
}
function sg(t, r) {
  const e = Math.abs(r.value);
  return {
    type: wt,
    value: e
  };
}
function lg(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  let e = r[0].value;
  for (let n = 1; n < r.length; ++n)
    r[n].value > e && (e = r[n].value);
  return {
    type: Re,
    value: e
  };
}
function ag(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: wt,
    value: Math.max(...r.map((e) => e.value))
  };
}
function ug(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  let e = r[0].value;
  for (let n = 1; n < r.length; ++n)
    r[n].value < e && (e = r[n].value);
  return {
    type: Re,
    value: e
  };
}
function cg(t, ...r) {
  if (!r.length)
    throw new Error("Function requires non empty argument list.");
  return {
    type: wt,
    value: Math.min(...r.map((e) => e.value))
  };
}
function fg() {
  return {
    type: wt,
    value: R_
  };
}
function dg() {
  return {
    type: wt,
    value: H_
  };
}
function _g(t) {
  return Ln(t, ss), {
    type: Re,
    value: ss
  };
}
function pg(t) {
  return Ln(t, ls), {
    type: Re,
    value: ls
  };
}
function gg(t, r) {
  const e = Math.sign(r.value);
  return {
    type: wt,
    // js treats Math.round(-0.5) as 0, which is different to other platforms
    value: e * Math.round(Math.abs(r.value))
  };
}
function hg(t, r) {
  return {
    type: wt,
    value: Math.floor(r.value)
  };
}
function mg(t, r) {
  return {
    type: wt,
    value: Math.ceil(r.value)
  };
}
function bg(t, r) {
  return {
    type: Re,
    value: pd(r.value)
  };
}
function yg(t, r) {
  return {
    type: wt,
    value: Math.sign(r.value)
  };
}
function wg(t, r, e) {
  let n;
  if (e.value === wi)
    n = r.value;
  else if (r.value === wi)
    n = gn(0);
  else {
    const o = pd(e.value);
    n = _d(r.value) * o;
  }
  return Ln(t, n), {
    type: Re,
    value: n
  };
}
function kg(t, r, e) {
  let n = Math.sign(e.value);
  n === 0 && (n = Object.is(n, 0) ? 1 : -1);
  const o = Math.abs(r.value) * n;
  return {
    type: wt,
    value: o
  };
}
function vg() {
  U("div", [Re, Re], Xp), U("div", [wt, wt], Zp), U("mod", [Re, Re], Qp), U("mod", [wt, wt], xp), U("mul", [{
    type: Re,
    isVararg: !0
  }], $p), U("mul", [{
    type: wt,
    isVararg: !0
  }], eg), U("sub", [{
    type: Re,
    isVararg: !0
  }], tg), U("sub", [{
    type: wt,
    isVararg: !0
  }], rg), U("sum", [{
    type: Re,
    isVararg: !0
  }], ng), U("sum", [{
    type: wt,
    isVararg: !0
  }], og), U("abs", [Re], ig), U("abs", [wt], sg), U("max", [{
    type: Re,
    isVararg: !0
  }], lg), U("max", [{
    type: wt,
    isVararg: !0
  }], ag), U("min", [{
    type: Re,
    isVararg: !0
  }], ug), U("min", [{
    type: wt,
    isVararg: !0
  }], cg), U("maxNumber", [], fg), U("minNumber", [], dg), U("maxInteger", [], _g), U("minInteger", [], pg), U("round", [wt], gg), U("floor", [wt], hg), U("ceil", [wt], mg), U("signum", [Re], bg), U("signum", [wt], yg), U("copySign", [Re, Re], wg), U("copySign", [wt, wt], kg);
}
function ll(t) {
  return (r, e) => {
    const n = ol(e.value);
    return {
      type: wt,
      value: n[t] / 255
    };
  };
}
function al(t) {
  return (r, e, n) => {
    const o = ol(e.value);
    return o[t] = n.value * 255, {
      type: _n,
      value: Si(o)
    };
  };
}
const qa = ll("a"), Ya = ll("r"), Xa = ll("g"), Za = ll("b"), Qa = al("a"), xa = al("r"), $a = al("g"), eu = al("b");
function jg(t, r, e, n) {
  const o = {
    a: 255,
    r: r.value * 255,
    g: e.value * 255,
    b: n.value * 255
  };
  return {
    type: _n,
    value: Si(o)
  };
}
function Cg(t, r, e, n, o) {
  const i = {
    a: r.value * 255,
    r: e.value * 255,
    g: n.value * 255,
    b: o.value * 255
  };
  return {
    type: _n,
    value: Si(i)
  };
}
function Eg() {
  U("getColorAlpha", [qe], qa), U("getColorAlpha", [_n], qa), U("getColorRed", [qe], Ya), U("getColorRed", [_n], Ya), U("getColorGreen", [qe], Xa), U("getColorGreen", [_n], Xa), U("getColorBlue", [qe], Za), U("getColorBlue", [_n], Za), U("setColorAlpha", [qe, wt], Qa), U("setColorAlpha", [_n, wt], Qa), U("setColorRed", [qe, wt], xa), U("setColorRed", [_n, wt], xa), U("setColorGreen", [qe, wt], $a), U("setColorGreen", [_n, wt], $a), U("setColorBlue", [qe, wt], eu), U("setColorBlue", [_n, wt], eu), U("rgb", [wt, wt, wt], jg), U("argb", [wt, wt, wt, wt], Cg);
}
function ai(t, r, e, n) {
  if (r.value < 0)
    throw new Error("Expecting non-negative number of milliseconds.");
  let o = gn(r.value) / gn(e);
  return Ln(t, o), n && (o = gn(o) % gn(n)), {
    type: Re,
    value: o
  };
}
const vd = 1e3, Ag = 60, jd = 1e3 * 60, Sg = 60, Cd = 1e3 * 60 * 60, Vg = 24, Fg = 1e3 * 60 * 60 * 24, Dg = 1e3 * 60 * 60 * 24 * 7;
function Ig(t, r) {
  return ai(t, r, vd, Ag);
}
function Tg(t, r) {
  return ai(t, r, vd);
}
function Mg(t, r) {
  return ai(t, r, jd, Sg);
}
function Pg(t, r) {
  return ai(t, r, jd);
}
function Ng(t, r) {
  return ai(t, r, Cd, Vg);
}
function zg(t, r) {
  return ai(t, r, Cd);
}
function Lg(t, r) {
  return ai(t, r, Fg);
}
function Og(t, r) {
  return ai(t, r, Dg);
}
function Bg() {
  U("getIntervalSeconds", [Re], Ig), U("getIntervalTotalSeconds", [Re], Tg), U("getIntervalMinutes", [Re], Mg), U("getIntervalTotalMinutes", [Re], Pg), U("getIntervalHours", [Re], Ng), U("getIntervalTotalHours", [Re], zg), U("getIntervalTotalDays", [Re], Lg), U("getIntervalTotalWeeks", [Re], Og);
}
function Rg(t, r) {
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
function ui(t) {
  return (r, e, ...n) => {
    if (n.length === 0)
      throw new Error("Non empty argument list is required.");
    const o = Rg(e.value, n.map((i) => i.value));
    return il(r, o, t);
  };
}
function Wi(t, r) {
  return (e, n, o, ...i) => {
    try {
      return t(e, o, ...i);
    } catch {
      let a = n.value;
      return r === "color" ? a = si(a) : r === "url" && po(a), {
        type: r,
        value: a
      };
    }
  };
}
const Ss = ui(qe), Vs = ui(wt), Fs = ui(Re), Ds = ui(Kr), Is = ui(_n), Ts = ui(to), Gl = ui(br), Jl = ui(mr), tu = Wi(Ss, qe), ru = Wi(Vs, wt), nu = Wi(Fs, Re), ou = Wi(Ds, Kr), hs = Wi(Is, _n), ms = Wi(Ts, to);
function Hg(t, r, ...e) {
  try {
    return Gl(t, r, ...e);
  } catch {
    return {
      type: br,
      value: []
    };
  }
}
function Wg(t, r, ...e) {
  try {
    return Jl(t, r, ...e);
  } catch {
    return {
      type: mr,
      value: {}
    };
  }
}
function Ug(t, r, e) {
  return {
    type: Kr,
    value: e.value in r.value ? 1 : 0
  };
}
function Gg(t, r) {
  return {
    type: Kr,
    value: Object.keys(r.value).length ? 0 : 1
  };
}
function Jg(t, r) {
  return {
    type: Re,
    value: gn(Object.keys(r.value).length)
  };
}
function iu(t, r) {
  return {
    type: br,
    value: Object.keys(r.value)
  };
}
function su(t, r) {
  return {
    type: br,
    value: Object.values(r.value)
  };
}
function Kg() {
  const t = {
    type: qe,
    isVararg: !0
  };
  U("getDictString", [mr, t], Ss), U("getStringFromDict", [mr, t], Ss), U("getDictNumber", [mr, t], Vs), U("getNumberFromDict", [mr, t], Vs), U("getDictInteger", [mr, t], Fs), U("getIntegerFromDict", [mr, t], Fs), U("getDictBoolean", [mr, t], Ds), U("getBooleanFromDict", [mr, t], Ds), U("getDictColor", [mr, t], Is), U("getColorFromDict", [mr, t], Is), U("getDictUrl", [mr, t], Ts), U("getUrlFromDict", [mr, t], Ts), U("getDictOptString", [qe, mr, t], tu), U("getOptStringFromDict", [qe, mr, t], tu), U("getDictOptNumber", [wt, mr, t], ru), U("getOptNumberFromDict", [wt, mr, t], ru), U("getDictOptInteger", [Re, mr, t], nu), U("getOptIntegerFromDict", [Re, mr, t], nu), U("getDictOptBoolean", [Kr, mr, t], ou), U("getOptBooleanFromDict", [Kr, mr, t], ou), U("getDictOptColor", [_n, mr, t], hs), U("getOptColorFromDict", [_n, mr, t], hs), U("getDictOptColor", [qe, mr, t], hs), U("getOptColorFromDict", [qe, mr, t], hs), U("getDictOptUrl", [qe, mr, t], ms), U("getOptUrlFromDict", [qe, mr, t], ms), U("getDictOptUrl", [to, mr, t], ms), U("getOptUrlFromDict", [to, mr, t], ms), U("getDictFromDict", [mr, t], Jl), U("getArrayFromDict", [mr, t], Gl), U("getOptArrayFromDict", [mr, t], Hg), U("getOptDictFromDict", [mr, t], Wg), U("len", [mr], Jg), U("getDictKeys", [mr], iu), U("getDictValues", [mr], su), Wr("getString", [mr, t], Ss), Wr("getBoolean", [mr, t], Ds), Wr("getInteger", [mr, t], Fs), Wr("getNumber", [mr, t], Vs), Wr("getUrl", [mr, t], Ts), Wr("getColor", [mr, t], Is), Wr("getArray", [mr, t], Gl), Wr("getDict", [mr, t], Jl), Wr("containsKey", [mr, qe], Ug), Wr("isEmpty", [mr], Gg), Wr("getKeys", [mr], iu), Wr("getValues", [mr], su);
}
function ci(t, r) {
  return (e, n, o) => {
    if (o.value < 0 || o.value >= n.value.length)
      throw new Error(`Requested index (${o.value}) out of bounds array size (${n.value.length}).`);
    let i = n.value[Number(o.value)], s = typeof i;
    if (t === "array" && !Array.isArray(i) || t !== "array" && s !== t || s === "object" && i === null)
      throw s === "object" && (Array.isArray(i) ? s = "Array" : i === null ? s = "Null" : s = "Dict"), new Error(`Incorrect value type: expected ${Zn(r)}, got ${Zn(s)}.`);
    if (t === "number" && r === "integer") {
      Ln(e, i);
      try {
        i = gn(i);
      } catch {
        throw new Error("Cannot convert value to integer.");
      }
    }
    return t === "string" && r === "color" && (i = si(i)), t === "string" && r === "url" && po(i), {
      type: r,
      value: i
    };
  };
}
function Ui(t, r) {
  return (e, n, o, i) => {
    try {
      return t(e, n, o);
    } catch {
      let a = i.value;
      return r === "color" ? a = si(a) : r === "url" && po(a), {
        type: r,
        value: a
      };
    }
  };
}
const Ms = ci("string", "string"), Ps = ci("number", "number"), Ns = ci("number", "integer"), zs = ci("boolean", "boolean"), Ls = ci("string", "color"), Os = ci("string", "url"), Kl = ci("array", "array"), ql = ci("object", "dict"), lu = Ui(Ms, "string"), au = Ui(Ps, "number"), uu = Ui(Ns, "integer"), cu = Ui(zs, "boolean"), bs = Ui(Ls, "color"), ys = Ui(Os, "url");
function qg(t, r, e) {
  try {
    return Kl(t, r, e);
  } catch {
    return {
      type: br,
      value: []
    };
  }
}
function Yg(t, r, e) {
  try {
    return ql(t, r, e);
  } catch {
    return {
      type: mr,
      value: {}
    };
  }
}
function Xg(t, r) {
  return {
    type: Re,
    value: gn(r.value.length)
  };
}
function Zg(t, r) {
  return {
    type: Kr,
    value: r.value.length === 0 ? 1 : 0
  };
}
function Qg(t, r, e) {
  return r.value.length ? {
    type: br,
    value: r.value.filter((n) => {
      const o = [];
      if (typeof n == "string")
        _o(n) && o.push([{
          type: _n,
          value: n
        }]), G_(n) && o.push([{
          type: to,
          value: n
        }]), o.push([{
          type: qe,
          value: n
        }]);
      else if (typeof n == "number")
        Math.round(n) === n && (Ln(t, n), o.push([{
          type: Re,
          value: gn(n)
        }])), o.push([{
          type: wt,
          value: n
        }]);
      else if (typeof n == "bigint")
        Ln(t, n), o.push([{
          type: Re,
          value: n
        }]);
      else if (Array.isArray(n))
        o.push([{
          type: br,
          value: n
        }]);
      else if (typeof n == "object") {
        if (n === null)
          throw new Error("Incorrect value type: Null");
        o.push([{
          type: mr,
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
        if (i = md(e.value, c), "func" in i)
          break;
      let s;
      if ("func" in i)
        s = i.func;
      else {
        const c = e.value[0];
        Kd(c.name || "Function", o[0], i, !0);
      }
      const a = s.args[0], l = il(
        t,
        n,
        typeof a == "string" ? a : a.type
      ), u = s.cb(t, l);
      if (u.type !== Kr)
        throw new Error("Function must return boolean value.");
      return u.value;
    })
  } : {
    type: br,
    value: []
  };
}
function xg() {
  U("getArrayString", [
    br,
    Re
  ], Ms), U("getStringFromArray", [
    br,
    Re
  ], Ms), U("getArrayNumber", [
    br,
    Re
  ], Ps), U("getNumberFromArray", [
    br,
    Re
  ], Ps), U("getArrayInteger", [
    br,
    Re
  ], Ns), U("getIntegerFromArray", [
    br,
    Re
  ], Ns), U("getArrayBoolean", [
    br,
    Re
  ], zs), U("getBooleanFromArray", [
    br,
    Re
  ], zs), U("getArrayColor", [
    br,
    Re
  ], Ls), U("getColorFromArray", [
    br,
    Re
  ], Ls), U("getArrayUrl", [
    br,
    Re
  ], Os), U("getUrlFromArray", [
    br,
    Re
  ], Os), U("getArrayFromArray", [
    br,
    Re
  ], Kl), U("getDictFromArray", [
    br,
    Re
  ], ql), U("getArrayOptString", [
    br,
    Re,
    qe
  ], lu), U("getOptStringFromArray", [
    br,
    Re,
    qe
  ], lu), U("getArrayOptNumber", [
    br,
    Re,
    wt
  ], au), U("getOptNumberFromArray", [
    br,
    Re,
    wt
  ], au), U("getArrayOptInteger", [
    br,
    Re,
    Re
  ], uu), U("getOptIntegerFromArray", [
    br,
    Re,
    Re
  ], uu), U("getArrayOptBoolean", [
    br,
    Re,
    Kr
  ], cu), U("getOptBooleanFromArray", [
    br,
    Re,
    Kr
  ], cu), U("getArrayOptColor", [
    br,
    Re,
    _n
  ], bs), U("getOptColorFromArray", [
    br,
    Re,
    _n
  ], bs), U("getArrayOptColor", [
    br,
    Re,
    qe
  ], bs), U("getOptColorFromArray", [
    br,
    Re,
    qe
  ], bs), U("getArrayOptUrl", [
    br,
    Re,
    to
  ], ys), U("getOptUrlFromArray", [
    br,
    Re,
    to
  ], ys), U("getArrayOptUrl", [
    br,
    Re,
    qe
  ], ys), U("getOptUrlFromArray", [
    br,
    Re,
    qe
  ], ys), U("getOptArrayFromArray", [
    br,
    Re
  ], qg), U("getOptDictFromArray", [
    br,
    Re
  ], Yg), U("len", [
    br
  ], Xg), Wr("getString", [br, Re], Ms), Wr("getInteger", [br, Re], Ns), Wr("getNumber", [br, Re], Ps), Wr("getBoolean", [br, Re], zs), Wr("getUrl", [br, Re], Os), Wr("getColor", [br, Re], Ls), Wr("getArray", [br, Re], Kl), Wr("getDict", [br, Re], ql), Wr("isEmpty", [br], Zg), Wr("filter", [br, W_], Qg);
}
function Ao(t) {
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
      return t === "url" && po(n.value), {
        type: t,
        value: n.value
      };
    } else t === "url" && po(i);
    return il(r, i, t);
  };
}
function $g() {
  U("getStoredIntegerValue", [qe, Re], Ao(Re)), U("getStoredNumberValue", [qe, wt], Ao(wt)), U("getStoredStringValue", [qe, qe], Ao(qe)), U("getStoredUrlValue", [qe, to], Ao(to)), U("getStoredUrlValue", [qe, qe], Ao(to)), U("getStoredColorValue", [qe, _n], Ao(_n)), U("getStoredColorValue", [qe, qe], Ao(_n)), U("getStoredBooleanValue", [qe, Kr], Ao(Kr)), U("getStoredArrayValue", [qe], Ao(br)), U("getStoredDictValue", [qe], Ao(mr));
}
function eh() {
  return {
    type: wt,
    value: Math.PI
  };
}
function th(t, r) {
  return {
    type: wt,
    value: r.value / 180 * Math.PI
  };
}
function rh(t, r) {
  return {
    type: wt,
    value: r.value / Math.PI * 180
  };
}
function nh(t, r) {
  return {
    type: wt,
    value: Math.sin(r.value)
  };
}
function oh(t, r) {
  return {
    type: wt,
    value: Math.cos(r.value)
  };
}
function ih(t, r) {
  return {
    type: wt,
    value: Math.tan(r.value)
  };
}
function sh(t, r) {
  const e = Math.tan(r.value);
  if (Math.abs(e) < 1e-12)
    throw new Error("Cotangent is undefined for the given value.");
  return {
    type: wt,
    value: 1 / e
  };
}
function lh(t, r) {
  return {
    type: wt,
    value: Math.atan(r.value)
  };
}
function ah(t, r, e) {
  return {
    type: wt,
    value: Math.atan2(r.value, e.value)
  };
}
function uh(t, r) {
  if (r.value > 1 || r.value < -1)
    throw new Error("Arcsine is undefined for the given value.");
  return {
    type: wt,
    value: Math.asin(r.value)
  };
}
function ch(t, r) {
  if (r.value > 1 || r.value < -1)
    throw new Error("Arccosine is undefined for the given value.");
  return {
    type: wt,
    value: Math.acos(r.value)
  };
}
function fh() {
  U("pi", [], eh), U("toRadians", [wt], th), U("toDegrees", [wt], rh), U("sin", [wt], nh), U("cos", [wt], oh), U("tan", [wt], ih), U("cot", [wt], sh), U("atan", [wt], lh), U("atan2", [wt, wt], ah), U("asin", [wt], uh), U("acos", [wt], ch);
}
function dh() {
  sp(), Mp(), Bg(), Yp(), vg(), Eg(), Kg(), xg(), $g(), fh();
}
function v() {
}
const ul = (t) => t;
function jo(t, r) {
  for (const e in r) t[e] = r[e];
  return (
    /** @type {T & S} */
    t
  );
}
function Ed(t) {
  return t();
}
function fu() {
  return /* @__PURE__ */ Object.create(null);
}
function Rr(t) {
  t.forEach(Ed);
}
function Lr(t) {
  return typeof t == "function";
}
function _h(t, r) {
  return t != t ? r == r : t !== r || t && typeof t == "object" || typeof t == "function";
}
let ws;
function Qn(t, r) {
  return t === r ? !0 : (ws || (ws = document.createElement("a")), ws.href = r, t === ws.href);
}
function Sr(t, r) {
  return t != t ? r == r : t !== r;
}
function ph(t) {
  return Object.keys(t).length === 0;
}
function C(t, ...r) {
  if (t == null) {
    for (const n of r)
      n(void 0);
    return v;
  }
  const e = t.subscribe(...r);
  return e.unsubscribe ? () => e.unsubscribe() : e;
}
function Yl(t) {
  let r;
  return C(t, (e) => r = e)(), r;
}
function yn(t, r, e) {
  t.$$.on_destroy.push(C(r, e));
}
function cl(t, r, e, n) {
  if (t) {
    const o = Ad(t, r, e, n);
    return t[0](o);
  }
}
function Ad(t, r, e, n) {
  return t[1] && n ? jo(e.ctx.slice(), t[1](n(r))) : e.ctx;
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
    const s = Ad(r, e, n, i);
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
function El(t, r, e) {
  return t.set(e), r;
}
function pl(t) {
  return t && Lr(t.destroy) ? t.destroy : v;
}
function du(t) {
  const r = typeof t == "string" && t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return r ? [parseFloat(r[1]), r[2] || "px"] : [
    /** @type {number} */
    t,
    "px"
  ];
}
const Sd = typeof window < "u";
let ga = Sd ? () => window.performance.now() : () => Date.now(), ha = Sd ? (t) => requestAnimationFrame(t) : v;
const Pi = /* @__PURE__ */ new Set();
function Vd(t) {
  Pi.forEach((r) => {
    r.c(t) || (Pi.delete(r), r.f());
  }), Pi.size !== 0 && ha(Vd);
}
function ma(t) {
  let r;
  return Pi.size === 0 && ha(Vd), {
    promise: new Promise((e) => {
      Pi.add(r = { c: t, f: e });
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
function bt(t, r) {
  t.appendChild(r);
}
function Fd(t) {
  if (!t) return document;
  const r = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return r && /** @type {ShadowRoot} */
  r.host ? (
    /** @type {ShadowRoot} */
    r
  ) : t.ownerDocument;
}
function gh(t) {
  const r = Pe("style");
  return r.textContent = "/* empty */", hh(Fd(t), r), r.sheet;
}
function hh(t, r) {
  return bt(
    /** @type {Document} */
    t.head || t,
    r
  ), r.sheet;
}
function J(t, r, e) {
  t.insertBefore(r, e || null);
}
function G(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function on(t, r) {
  for (let e = 0; e < t.length; e += 1)
    t[e] && t[e].d(r);
}
function Pe(t) {
  return document.createElement(t);
}
function tn(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function On(t) {
  return document.createTextNode(t);
}
function hr() {
  return On(" ");
}
function er() {
  return On("");
}
function xe(t, r, e, n) {
  return t.addEventListener(r, e, n), () => t.removeEventListener(r, e, n);
}
function mh(t) {
  return function(r) {
    return r.preventDefault(), t.call(this, r);
  };
}
function g(t, r, e) {
  e == null ? t.removeAttribute(r) : t.getAttribute(r) !== e && t.setAttribute(r, e);
}
const bh = ["width", "height"];
function qo(t, r) {
  const e = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const n in r)
    r[n] == null ? t.removeAttribute(n) : n === "style" ? t.style.cssText = r[n] : n === "__value" ? t.value = t[n] = r[n] : e[n] && e[n].set && bh.indexOf(n) === -1 ? t[n] = r[n] : g(t, n, r[n]);
}
function yh(t, r) {
  Object.keys(r).forEach((e) => {
    wh(t, e, r[e]);
  });
}
function wh(t, r, e) {
  const n = r.toLowerCase();
  n in t ? t[n] = typeof t[n] == "boolean" && e === "" ? !0 : e : r in t ? t[r] = typeof t[r] == "boolean" && e === "" ? !0 : e : g(t, r, e);
}
function ri(t) {
  return /-/.test(t) ? yh : qo;
}
function kh(t) {
  return Array.from(t.childNodes);
}
function Jn(t, r) {
  r = "" + r, t.data !== r && (t.data = /** @type {string} */
  r);
}
function _u(t, r) {
  t.value = r == null ? "" : r;
}
function I(t, r, e, n) {
  e == null ? t.style.removeProperty(r) : t.style.setProperty(r, e, "");
}
function pu(t, r, e) {
  for (let n = 0; n < t.options.length; n += 1) {
    const o = t.options[n];
    if (o.__value === r) {
      o.selected = !0;
      return;
    }
  }
  (!e || r !== void 0) && (t.selectedIndex = -1);
}
function vh(t) {
  const r = t.querySelector(":checked");
  return r && r.__value;
}
function Dd(t, r, { bubbles: e = !1, cancelable: n = !1 } = {}) {
  return new CustomEvent(t, { detail: r, bubbles: e, cancelable: n });
}
function gu(t, r) {
  return new t(r);
}
const Js = /* @__PURE__ */ new Map();
let Ks = 0;
function jh(t) {
  let r = 5381, e = t.length;
  for (; e--; ) r = (r << 5) - r ^ t.charCodeAt(e);
  return r >>> 0;
}
function Ch(t, r) {
  const e = { stylesheet: gh(r), rules: {} };
  return Js.set(t, e), e;
}
function qs(t, r, e, n, o, i, s, a = 0) {
  const l = 16.666 / n;
  let u = `{
`;
  for (let w = 0; w <= 1; w += l) {
    const k = r + (e - r) * i(w);
    u += w * 100 + `%{${s(k, 1 - k)}}
`;
  }
  const c = u + `100% {${s(e, 1 - e)}}
}`, f = `__svelte_${jh(c)}_${a}`, _ = Fd(t), { stylesheet: h, rules: m } = Js.get(_) || Ch(_, t);
  m[f] || (m[f] = !0, h.insertRule(`@keyframes ${f} ${c}`, h.cssRules.length));
  const p = t.style.animation || "";
  return t.style.animation = `${p ? `${p}, ` : ""}${f} ${n}ms linear ${o}ms 1 both`, Ks += 1, f;
}
function Ys(t, r) {
  const e = (t.style.animation || "").split(", "), n = e.filter(
    r ? (i) => i.indexOf(r) < 0 : (i) => i.indexOf("__svelte") === -1
    // remove all Svelte animations
  ), o = e.length - n.length;
  o && (t.style.animation = n.join(", "), Ks -= o, Ks || Eh());
}
function Eh() {
  ha(() => {
    Ks || (Js.forEach((t) => {
      const { ownerNode: r } = t.stylesheet;
      r && G(r);
    }), Js.clear());
  });
}
let as;
function os(t) {
  as = t;
}
function Gi() {
  if (!as) throw new Error("Function called outside component initialization");
  return as;
}
function xn(t) {
  Gi().$$.on_mount.push(t);
}
function gl(t) {
  Gi().$$.after_update.push(t);
}
function sn(t) {
  Gi().$$.on_destroy.push(t);
}
function Ah() {
  const t = Gi();
  return (r, e, { cancelable: n = !1 } = {}) => {
    const o = t.$$.callbacks[r];
    if (o) {
      const i = Dd(
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
function hi(t, r) {
  return Gi().$$.context.set(t, r), r;
}
function Tr(t) {
  return Gi().$$.context.get(t);
}
function Bn(t, r) {
  const e = t.$$.callbacks[r.type];
  e && e.slice().forEach((n) => n.call(this, r));
}
const Ii = [], Dr = [];
let Ni = [];
const hu = [], Id = /* @__PURE__ */ Promise.resolve();
let Xl = !1;
function Td() {
  Xl || (Xl = !0, Id.then(Md));
}
function Sn() {
  return Td(), Id;
}
function go(t) {
  Ni.push(t);
}
const Al = /* @__PURE__ */ new Set();
let Vi = 0;
function Md() {
  if (Vi !== 0)
    return;
  const t = as;
  do {
    try {
      for (; Vi < Ii.length; ) {
        const r = Ii[Vi];
        Vi++, os(r), Sh(r.$$);
      }
    } catch (r) {
      throw Ii.length = 0, Vi = 0, r;
    }
    for (os(null), Ii.length = 0, Vi = 0; Dr.length; ) Dr.pop()();
    for (let r = 0; r < Ni.length; r += 1) {
      const e = Ni[r];
      Al.has(e) || (Al.add(e), e());
    }
    Ni.length = 0;
  } while (Ii.length);
  for (; hu.length; )
    hu.pop()();
  Xl = !1, Al.clear(), os(t);
}
function Sh(t) {
  if (t.fragment !== null) {
    t.update(), Rr(t.before_update);
    const r = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, r), t.after_update.forEach(go);
  }
}
function Vh(t) {
  const r = [], e = [];
  Ni.forEach((n) => t.indexOf(n) === -1 ? r.push(n) : e.push(n)), e.forEach((n) => n()), Ni = r;
}
let es;
function ba() {
  return es || (es = Promise.resolve(), es.then(() => {
    es = null;
  })), es;
}
function bi(t, r, e) {
  t.dispatchEvent(Dd(`${r ? "intro" : "outro"}${e}`));
}
const Bs = /* @__PURE__ */ new Set();
let Do;
function fr() {
  Do = {
    r: 0,
    c: [],
    p: Do
    // parent group
  };
}
function dr() {
  Do.r || Rr(Do.c), Do = Do.p;
}
function L(t, r) {
  t && t.i && (Bs.delete(t), t.i(r));
}
function x(t, r, e, n) {
  if (t && t.o) {
    if (Bs.has(t)) return;
    Bs.add(t), Do.c.push(() => {
      Bs.delete(t), n && (e && t.d(1), n());
    }), t.o(r);
  } else n && n();
}
const ya = { duration: 0 };
function hl(t, r, e) {
  const n = { direction: "in" };
  let o = r(t, e, n), i = !1, s, a, l = 0;
  function u() {
    s && Ys(t, s);
  }
  function c() {
    const {
      delay: _ = 0,
      duration: h = 300,
      easing: m = ul,
      tick: p = v,
      css: w
    } = o || ya;
    w && (s = qs(t, 0, 1, h, _, m, w, l++)), p(0, 1);
    const k = ga() + _, N = k + h;
    a && a.abort(), i = !0, go(() => bi(t, !0, "start")), a = ma((H) => {
      if (i) {
        if (H >= N)
          return p(1, 0), bi(t, !0, "end"), u(), i = !1;
        if (H >= k) {
          const z = m((H - k) / h);
          p(z, 1 - z);
        }
      }
      return i;
    });
  }
  let f = !1;
  return {
    start() {
      f || (f = !0, Ys(t), Lr(o) ? (o = o(n), ba().then(c)) : c());
    },
    invalidate() {
      f = !1;
    },
    end() {
      i && (u(), i = !1);
    }
  };
}
function Pd(t, r, e) {
  const n = { direction: "out" };
  let o = r(t, e, n), i = !0, s;
  const a = Do;
  a.r += 1;
  let l;
  function u() {
    const {
      delay: c = 0,
      duration: f = 300,
      easing: _ = ul,
      tick: h = v,
      css: m
    } = o || ya;
    m && (s = qs(t, 1, 0, f, c, _, m));
    const p = ga() + c, w = p + f;
    go(() => bi(t, !1, "start")), "inert" in t && (l = /** @type {HTMLElement} */
    t.inert, t.inert = !0), ma((k) => {
      if (i) {
        if (k >= w)
          return h(0, 1), bi(t, !1, "end"), --a.r || Rr(a.c), !1;
        if (k >= p) {
          const N = _((k - p) / f);
          h(1 - N, N);
        }
      }
      return i;
    });
  }
  return Lr(o) ? ba().then(() => {
    o = o(n), u();
  }) : u(), {
    end(c) {
      c && "inert" in t && (t.inert = l), c && o.tick && o.tick(1, 0), i && (s && Ys(t, s), i = !1);
    }
  };
}
function mu(t, r, e, n) {
  let i = r(t, e, { direction: "both" }), s = n ? 0 : 1, a = null, l = null, u = null, c;
  function f() {
    u && Ys(t, u);
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
      easing: k = ul,
      tick: N = v,
      css: H
    } = i || ya, z = {
      start: ga() + p,
      b: m
    };
    m || (z.group = Do, Do.r += 1), "inert" in t && (m ? c !== void 0 && (t.inert = c) : (c = /** @type {HTMLElement} */
    t.inert, t.inert = !0)), a || l ? l = z : (H && (f(), u = qs(t, s, m, w, p, k, H)), m && N(0, 1), a = _(z, w), go(() => bi(t, m, "start")), ma((oe) => {
      if (l && oe > l.start && (a = _(l, w), l = null, bi(t, a.b, "start"), H && (f(), u = qs(
        t,
        s,
        a.b,
        a.duration,
        0,
        k,
        i.css
      ))), a) {
        if (oe >= a.end)
          N(s = a.b, 1 - s), bi(t, a.b, "end"), l || (a.b ? f() : --a.group.r || Rr(a.group.c)), a = null;
        else if (oe >= a.start) {
          const _e = oe - a.start;
          s = a.a + a.d * k(_e / a.duration), N(s, 1 - s);
        }
      }
      return !!(a || l);
    }));
  }
  return {
    run(m) {
      Lr(i) ? ba().then(() => {
        i = i({ direction: m ? "in" : "out" }), h(m);
      }) : h(m);
    },
    end() {
      f(), a = l = null;
    }
  };
}
function ar(t) {
  return (t == null ? void 0 : t.length) !== void 0 ? t : Array.from(t);
}
function Nd(t, r) {
  x(t, 1, 1, () => {
    r.delete(t.key);
  });
}
function zd(t, r, e, n, o, i, s, a, l, u, c, f) {
  let _ = t.length, h = i.length, m = _;
  const p = {};
  for (; m--; ) p[t[m].key] = m;
  const w = [], k = /* @__PURE__ */ new Map(), N = /* @__PURE__ */ new Map(), H = [];
  for (m = h; m--; ) {
    const T = f(o, i, m), Y = e(T);
    let le = s.get(Y);
    le ? H.push(() => le.p(T, r)) : (le = u(Y, T), le.c()), k.set(Y, w[m] = le), Y in p && N.set(Y, Math.abs(m - p[Y]));
  }
  const z = /* @__PURE__ */ new Set(), oe = /* @__PURE__ */ new Set();
  function _e(T) {
    L(T, 1), T.m(a, c), s.set(T.key, T), c = T.first, h--;
  }
  for (; _ && h; ) {
    const T = w[h - 1], Y = t[_ - 1], le = T.key, E = Y.key;
    T === Y ? (c = T.first, _--, h--) : k.has(E) ? !s.has(le) || z.has(le) ? _e(T) : oe.has(E) ? _-- : N.get(le) > N.get(E) ? (oe.add(le), _e(T)) : (z.add(E), _--) : (l(Y, s), _--);
  }
  for (; _--; ) {
    const T = t[_];
    k.has(T.key) || l(T, s);
  }
  for (; h; ) _e(w[h - 1]);
  return Rr(H), w;
}
function No(t, r) {
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
function Ld(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function Ut(t) {
  t && t.c();
}
function Bt(t, r, e) {
  const { fragment: n, after_update: o } = t.$$;
  n && n.m(r, e), go(() => {
    const i = t.$$.on_mount.map(Ed).filter(Lr);
    t.$$.on_destroy ? t.$$.on_destroy.push(...i) : Rr(i), t.$$.on_mount = [];
  }), o.forEach(go);
}
function Rt(t, r) {
  const e = t.$$;
  e.fragment !== null && (Vh(e.after_update), Rr(e.on_destroy), e.fragment && e.fragment.d(r), e.on_destroy = e.fragment = null, e.ctx = []);
}
function Fh(t, r) {
  t.$$.dirty[0] === -1 && (Ii.push(t), Td(), t.$$.dirty.fill(0)), t.$$.dirty[r / 31 | 0] |= 1 << r % 31;
}
function Or(t, r, e, n, o, i, s = null, a = [-1]) {
  const l = as;
  os(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: i,
    update: v,
    not_equal: o,
    bound: fu(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(r.context || (l ? l.$$.context : [])),
    // everything else
    callbacks: fu(),
    dirty: a,
    skip_bound: !1,
    root: r.target || l.$$.root
  };
  s && s(u.root);
  let c = !1;
  if (u.ctx = e ? e(t, r.props || {}, (f, _, ...h) => {
    const m = h.length ? h[0] : _;
    return u.ctx && o(u.ctx[f], u.ctx[f] = m) && (!u.skip_bound && u.bound[f] && u.bound[f](m), c && Fh(t, f)), _;
  }) : [], u.update(), c = !0, Rr(u.before_update), u.fragment = n ? n(u.ctx) : !1, r.target) {
    if (r.hydrate) {
      const f = kh(r.target);
      u.fragment && u.fragment.l(f), f.forEach(G);
    } else
      u.fragment && u.fragment.c();
    r.intro && L(t.$$.fragment), Bt(t, r.target, r.anchor), Md();
  }
  os(l);
}
class Br {
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
    Rt(this, 1), this.$destroy = v;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(r, e) {
    if (!Lr(e))
      return v;
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
    this.$$set && !ph(r) && (this.$$.skip_bound = !0, this.$$set(r), this.$$.skip_bound = !1);
  }
}
const Dh = "4", Fi = [];
function Ih(t, r) {
  return {
    subscribe: Io(t, r).subscribe
  };
}
function Io(t, r = v) {
  let e;
  const n = /* @__PURE__ */ new Set();
  function o(a) {
    if (_h(t, a) && (t = a, e)) {
      const l = !Fi.length;
      for (const u of n)
        u[1](), Fi.push(u, t);
      if (l) {
        for (let u = 0; u < Fi.length; u += 2)
          Fi[u][0](Fi[u + 1]);
        Fi.length = 0;
      }
    }
  }
  function i(a) {
    o(a(t));
  }
  function s(a, l = v) {
    const u = [a, l];
    return n.add(u), n.size === 1 && (e = r(o, i) || v), a(t), () => {
      n.delete(u), n.size === 0 && e && (e(), e = null);
    };
  }
  return { set: o, update: i, subscribe: s };
}
function Ji(t, r, e) {
  const n = !Array.isArray(t), o = n ? [t] : t;
  if (!o.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = r.length < 2;
  return Ih(e, (s, a) => {
    let l = !1;
    const u = [];
    let c = 0, f = v;
    const _ = () => {
      if (c)
        return;
      f();
      const m = r(n ? u[0] : u, s, a);
      i ? s(m) : f = Lr(m) ? m : v;
    }, h = o.map(
      (m, p) => C(
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
class Xo {
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
    return this.store || (this.store = Io(this.value)), this.store.subscribe(r);
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
class Od extends Xo {
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
class Bd extends Xo {
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
class Rd extends Xo {
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
class Hd extends Xo {
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
class Wd extends Xo {
  convertValue(r) {
    if (typeof r != "string" || !_o(r))
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
class Ud extends Xo {
  convertValue(r) {
    if (typeof r != "string")
      throw new Error("Incorrect variable value");
    return po(r), r;
  }
  fromString(r) {
    return po(r), r;
  }
  getType() {
    return "url";
  }
}
class Gd extends Xo {
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
class Jd extends Xo {
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
const Zl = {
  string: Od,
  number: Rd,
  integer: Bd,
  boolean: Hd,
  color: Wd,
  url: Ud,
  dict: Gd,
  array: Jd
};
function Xn(t, r, e) {
  if (!(r in Zl))
    throw new Error("Unsupported variable type");
  return new Zl[r](t, e);
}
function Th() {
}
function Mh(t) {
  return t(this.value), Th;
}
function bu() {
  throw new Error("Cannot change the value of this type of variable");
}
class Ph extends Od {
}
class Nh extends Rd {
}
class zh extends Bd {
}
class Lh extends Hd {
}
class Oh extends Wd {
}
class Bh extends Ud {
}
class Rh extends Gd {
}
class Hh extends Jd {
}
class Wh extends Xo {
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
  string: Ph,
  number: Nh,
  integer: zh,
  boolean: Lh,
  color: Oh,
  url: Bh,
  dict: Rh,
  array: Hh,
  datetime: Wh
};
for (const t in Xs) {
  const r = Xs[t];
  r.prototype.subscribe = Mh, r.prototype.set = bu, r.prototype.setValue = bu;
}
function Rs(t, r, e) {
  if (!(r in Xs))
    throw new Error("Unsupported variable type");
  return new Xs[r](t, e);
}
function Uh(t) {
  const r = t.getType();
  let e = t.getValue();
  return r === Kr && (e = e ? 1 : 0), {
    type: r,
    value: e
  };
}
function Gh(t, r) {
  if (r === "string")
    return t;
  if (r === "integer")
    try {
      return gn(t);
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
    if (typeof t != "string" || !_o(t))
      throw new Error("Incorrect variable value");
    return si(t);
  } else if (r === "url") {
    if (typeof t != "string")
      throw new Error("Incorrect variable value");
    return po(t), t;
  } else if (r === "dict" || r === "array")
    try {
      return JSON.parse(t);
    } catch {
      throw new Error("Incorrect dict value");
    }
  throw new Error(`Unexpected type ${r}`);
}
dh();
function Jh(t, r) {
  return {
    type: qe,
    value: r.value
  };
}
function Kh(t, r) {
  return {
    type: wt,
    value: r.value
  };
}
function qh(t, r) {
  return Ln(t, r.value), {
    type: Re,
    value: r.value
  };
}
function Yh(t, r) {
  return {
    type: Kr,
    value: r.value ? 1 : 0
  };
}
function Xh(t, r) {
  const e = Us(Rn(t, r.argument));
  switch (r.operator) {
    case "!":
      if (e.type === Kr)
        return {
          type: Kr,
          value: e.value ? 0 : 1
        };
      Dn(`${r.operator}${pn(e)}`, "A Boolean is expected after a unary not.");
    case "+":
    case "-":
      const n = r.operator === "+" ? 1 : -1;
      if (e.type === Re) {
        const o = e.value * gn(n);
        return Ln(t, o), {
          type: Re,
          value: o
        };
      } else {
        if (e.type === wt)
          return {
            type: wt,
            value: e.value * n
          };
        Dn(
          `${r.operator}${pn(e)}`,
          `A Number is expected after a unary ${r.operator === "+" ? "plus" : "minus"}.`
        );
      }
  }
}
function Zh(t, r) {
  const e = Us(Rn(t, r.test));
  if (e.type === Kr)
    return e.value ? Rn(t, r.consequent) : Rn(t, r.alternate);
  Dn(
    `${pn(e)} ? ${pn(Rn(t, r.consequent))} : ${pn(Rn(t, r.alternate))}`,
    "Ternary must be called with a Boolean value as a condition."
  );
}
function Qh(t, r) {
  try {
    return Rn(t, r.test);
  } catch {
    return Rn(t, r.alternate);
  }
}
function xh(t, r) {
  let e = "";
  if (r.quasis.length === 2 && r.quasis[0].value === "" && r.quasis[1].value === "")
    return Rn(t, r.expressions[0]);
  for (let n = 0; n < r.expressions.length; ++n)
    e += r.quasis[n].value, e += Ei(Rn(t, r.expressions[n]), !0);
  return e += r.quasis[r.quasis.length - 1].value, {
    type: qe,
    value: e
  };
}
function $h(t, r) {
  const e = Us(Rn(t, r.left));
  if (e.type !== Kr && Dn(
    `${pn(e)} ${r.operator} ...`,
    `'${r.operator}' must be called with boolean operands.`
  ), r.operator === "||" && e.value)
    return e;
  if (r.operator === "&&" && !e.value)
    return {
      type: Kr,
      value: 0
    };
  const n = Us(Rn(t, r.right));
  return n.type !== Kr && Dn(
    `${pn(e)} ${r.operator} ${pn(n)}`,
    `Operator '${r.operator}' cannot be applied to different types: Boolean and ${Zn(n.type)}.`
  ), {
    type: Kr,
    value: n.value
  };
}
function em(t, r, e) {
  let n;
  return r.type === zr && e.type === zr ? n = r.value.getTime() === e.value.getTime() : n = r.value === e.value, t === "!=" && (n = !n), {
    type: Kr,
    value: n ? 1 : 0
  };
}
function tm(t, r, e) {
  (r.type !== wt && r.type !== Re && r.type !== zr || e.type !== wt && e.type !== Re && e.type !== zr) && Dn(
    `${pn(r)} ${t} ${pn(e)}`,
    `Operator '${t}' cannot be applied to ${Zn(r.type)} type.`
  );
  let n;
  const o = r.type === zr ? r.value.getTime() : r.value, i = e.type === zr ? e.value.getTime() : e.value;
  return t === ">" ? n = o > i : t === ">=" ? n = o >= i : t === "<" ? n = o < i : n = o <= i, {
    type: Kr,
    value: n ? 1 : 0
  };
}
function rm(t, r, e, n) {
  if (e.type !== qe && e.type !== wt && e.type !== Re && Dn(
    `${pn(e)} ${r} ${pn(n)}`,
    `Operator '${r}' cannot be applied to ${Zn(e.type)} type.`
  ), e.type === qe)
    return r === "-" && Dn(
      `${pn(e)} - ${pn(n)}`,
      `Operator '${r}' cannot be applied to ${Zn(e.type)} type.`
    ), {
      type: qe,
      value: e.value + n.value
    };
  let o = r === "+" ? e.value + n.value : e.value - n.value;
  if (e.type === Re)
    try {
      o = Ai(t, o), Ln(t, o);
    } catch (i) {
      Dn(
        `${pn(e)} ${r} ${pn(n)}`,
        i.message
      );
    }
  return {
    type: e.type,
    value: o
  };
}
function nm(t, r, e, n) {
  e.type !== Re && e.type !== wt && Dn(
    `${pn(e)} ${r} ${pn(n)}`,
    `Operator '${r}' cannot be applied to ${Zn(e.type)} type.`
  );
  let o;
  if (r === "*")
    o = e.value * n.value;
  else if (r === "/" || r === "%")
    Number(n.value) === 0 && Dn(
      `${pn(e)} ${r} ${pn(n)}`,
      "Division by zero is not supported."
    ), r === "/" ? o = e.value / n.value : o = e.value % n.value;
  else
    throw new Error(`Unsupported operation ${r}`);
  if (e.type === Re)
    try {
      o = Ai(t, o), Ln(t, o);
    } catch (i) {
      Dn(
        `${pn(e)} ${r} ${pn(n)}`,
        i.message
      );
    }
  return {
    type: e.type,
    value: o
  };
}
function om(t, r) {
  const e = r.operator;
  let n = Rn(t, r.left), o = Rn(t, r.right);
  if ((n.type === "number" && o.type === "integer" || n.type === "integer" && o.type === "number") && (n.type === "integer" ? n = Ol(n) : o.type === "integer" && (o = Ol(o))), n.type !== o.type && Dn(
    `${pn(n)} ${r.operator} ${pn(o)}`,
    `Operator '${e}' cannot be applied to different types: ${Zn(n.type)} and ${Zn(o.type)}.`
  ), e === "==" || e === "!=")
    return em(e, n, o);
  if (e === ">" || e === ">=" || e === "<" || e === "<=")
    return tm(e, n, o);
  if (e === "+" || e === "-")
    return rm(t, e, n, o);
  if (e === "/" || e === "*" || e === "%")
    return nm(t, e, n, o);
  throw new Error(`Unsupported operation ${e}`);
}
function Zs(t) {
  return t.map(pn).join(", ");
}
function im(t, r) {
  const e = r.callee.name;
  let n, o = r.arguments.map((a) => Rn(t, a));
  const i = e + ":" + o.map((a) => a.type).join("#");
  let s;
  if (t.customFunctions && (s = Hl(t.customFunctions, e, o)), !s || !("func" in s))
    if (Bl.has(i))
      s = {
        func: Bl.get(i),
        conversions: 0
      };
    else {
      const a = Hl(ns, e, o);
      ("func" in a || !s || s.type === "missing") && (s = a);
    }
  if (s && (("expected" in s || "type" in s && s.type === "missing") && Kd(e, o, s), n = s.func, s.conversions && (o = bd(n, o))), !n)
    throw new Error("Function not found");
  try {
    return n.cb(t, ...o);
  } catch (a) {
    if (a && a instanceof da)
      throw a;
    const l = `${e}(${Zs(o)})`;
    Dn(l, a.message);
  }
}
function Kd(t, r, e, n = !1) {
  const o = r.map((a) => Zn(a.type)).join(", "), i = `${t}(${Zs(r)})`, s = n ? K_ : Dn;
  if (e.type === "few" && r.length === 0 && e.hasOverloads)
    s(i, "Function requires non empty argument list.");
  else if (e.type === "many" || e.type === "few" || e.type === "mismatch")
    if (e.hasOverloads)
      s(i, `Function has no matching overload for given argument types: ${o}.`);
    else if (e.type === "many" || e.type === "few")
      e.def.args.some((a) => typeof a == "object" && a.isVararg) ? s(i, `At least ${e.def.args.length} argument(s) expected.`) : s(i, `Exactly ${e.def.args.length} argument(s) expected.`);
    else {
      const a = e.def.args.map((l) => Zn(typeof l == "string" ? l : l.type)).join(", ");
      s(i, `Invalid argument type: expected ${a}, got ${o}.`);
    }
  else
    s(i, `Unknown function name: ${t}.`);
}
function sm(t, r) {
  const e = r.method.name;
  let n, o = [r.object, ...r.arguments].map((s) => Rn(t, s));
  const i = e + ":" + o.map((s) => s.type).join("#");
  if (Rl.has(i))
    n = Rl.get(i);
  else {
    const s = Hl(As, e, o);
    if ("expected" in s || "type" in s && s.type === "missing") {
      const a = o.slice(1).map((u) => Zn(u.type)).join(", "), l = `${e}(${Zs(o.slice(1))})`;
      s.type === "few" && o.length === 1 ? Dn(l, "Method requires non empty argument list.") : s.type === "many" ? Dn(l, `Method has no matching overload for given argument types: ${a}.`) : s.type === "few" || s.type === "mismatch" ? Dn(l, `Method has no matching overload for given argument types: ${a}.`) : Dn(l, `Unknown method name: ${e}.`);
    }
    n = s.func, s.conversions && (o = bd(n, o));
  }
  if (!n)
    throw new Error("Method not found");
  try {
    return n.cb(t, ...o);
  } catch (s) {
    if (s && s instanceof da)
      throw s;
    const a = `${e}(${Zs(o.slice(1))})`;
    Dn(a, s.message);
  }
}
function lm(t, r) {
  var i;
  const e = r.id.name, n = (i = t.customFunctions) == null ? void 0 : i.get(e);
  if (n)
    return {
      type: "function",
      value: n
    };
  const o = t.variables.get(e);
  if (o)
    return Uh(o);
  throw new Error(`Variable '${e}' is missing.`);
}
const yu = {
  StringLiteral: Jh,
  NumberLiteral: Kh,
  IntegerLiteral: qh,
  BooleanLiteral: Yh,
  UnaryExpression: Xh,
  ConditionalExpression: Zh,
  TryExpression: Qh,
  TemplateLiteral: xh,
  LogicalExpression: $h,
  BinaryExpression: om,
  CallExpression: im,
  MethodExpression: sm,
  Variable: lm
};
function Rn(t, r) {
  if (r.type in yu)
    return yu[r.type](t, r);
  throw new Error("Unsupported expression");
}
function ml(t, r, e, n, o) {
  try {
    const i = {
      variables: t,
      customFunctions: r,
      warnings: [],
      store: e,
      weekStartDay: (o == null ? void 0 : o.weekStartDay) || 0
    };
    return {
      result: Rn(i, n),
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
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(Dh);
const am = "appkit-root_platform_desktop", um = "appkit-root__clickable", cm = "appkit-root", fm = "appkit-root__selectable", dm = "appkit-root__unselectable", Er = {
  root_platform_desktop: am,
  root__clickable: um,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  "root__any-actions": "appkit-root__any-actions",
  root: cm,
  root__selectable: fm,
  root__unselectable: dm,
  "root__only-desktop": "appkit-root__only-desktop",
  "root_restrict-scroll": "appkit-root_restrict-scroll",
  "root_disabled-context-menu": "appkit-root_disabled-context-menu"
}, Yr = Symbol("root"), _m = "appkit-outer", pm = "appkit-outer_width_content", gm = "appkit-outer_height_content", hm = "appkit-root__clickable", mm = "appkit-outer__border", bm = "appkit-outer_visibility_invisible", ym = "appkit-outer_visibility_gone", Qs = {
  outer: _m,
  outer_width_content: pm,
  outer_height_content: gm,
  root__clickable: hm,
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
  outer__border: mm,
  outer_visibility_invisible: bm,
  outer_visibility_gone: ym,
  "outer_has-action-animation": "appkit-outer_has-action-animation",
  "outer_has-custom-focus": "appkit-outer_has-custom-focus"
};
function cr(t) {
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
function ge(t) {
  if (typeof t != "number" && typeof t != "string" || !t)
    return "0";
  const r = Number(t);
  return Number.isNaN(r) ? "0" : Math.ceil(r * 1e3) / 1e4 + "em";
}
function un(t) {
  let r = ge(t);
  return r === "0" && (r += "em"), r;
}
function Ql(t) {
  let r = String(t);
  return r.indexOf("&") > -1 && (r = r.replace(/&/g, "&amp;")), r.indexOf("<") > -1 && (r = r.replace(/</g, "&lt;")), r.indexOf(">") > -1 && (r = r.replace(/>/g, "&gt;")), r.indexOf('"') > -1 && (r = r.replace(/"/g, "&quot;")), r;
}
const zo = Boolean;
function bl(t, r) {
  if (t.length === 1 && t[0].type === "solid")
    return km({
      bg: t[0]
    });
  const e = t.map((n) => {
    if (n.type === "solid")
      return wm({
        bg: n
      });
    if (n.type === "gradient")
      return vm({
        bg: n
      });
    if (n.type === "image")
      return Em({
        bg: n,
        direction: r
      });
    if (n.type === "radial_gradient")
      return Cm({
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
    image: e.image.join(","),
    size: e.size.join(","),
    position: e.position.join(",")
  };
}
function wm(t) {
  const r = gr(t.bg.color || "transparent");
  return {
    size: void 0,
    pos: void 0,
    image: `linear-gradient(to bottom,${r},${r})`
  };
}
function km(t) {
  return {
    color: gr(t.bg.color || "transparent"),
    size: "auto",
    position: "50% 50%"
  };
}
function qd(t) {
  return t.every((n) => n.color && typeof n.position == "number" && n.position >= 0 && n.position <= 1) ? t.sort((n, o) => Math.abs(n.position - o.position) < 1e-6 ? 0 : n.position - o.position).map((n) => `${gr(n.color)} ${(n.position * 100).toFixed(2)}%`).join(",") : void 0;
}
function vm(t) {
  var n, o, i, s;
  if (!Array.isArray((n = t.bg) == null ? void 0 : n.colors) && !Array.isArray((o = t.bg) == null ? void 0 : o.color_map))
    return;
  const r = (i = t.bg.colors) == null ? void 0 : i.filter(zo);
  if (!(r != null && r.length) && !((s = t.bg) != null && s.color_map))
    return;
  let e;
  if (t.bg.color_map) {
    const a = qd(t.bg.color_map);
    if (!a)
      return;
    e = "linear-gradient(" + (90 - Number(t.bg.angle || 0) + "deg") + "," + a + ")";
  } else {
    if (!r)
      return;
    e = "linear-gradient(" + (90 - Number(t.bg.angle || 0) + "deg") + "," + r.map((a) => gr(a)).join(",") + ")";
  }
  return {
    size: void 0,
    pos: void 0,
    image: e
  };
}
const jm = {
  nearest_corner: "closest-corner",
  farthest_corner: "farthest-corner",
  nearest_side: "closest-side",
  farthest_side: "farthest-side"
};
function wu(t) {
  if (t && typeof t == "object" && "type" in t && t.value !== void 0) {
    if (t.type === "fixed")
      return un(t.value);
    if (t.type === "relative")
      return `${Number(t.value) * 100}%`;
  }
  return "50%";
}
function Cm(t) {
  var a, l, u, c;
  if (!Array.isArray((a = t.bg) == null ? void 0 : a.colors) && !Array.isArray((l = t.bg) == null ? void 0 : l.color_map))
    return;
  const r = (u = t.bg.colors) == null ? void 0 : u.filter(zo);
  if (!(r != null && r.length) && !((c = t.bg) != null && c.color_map))
    return;
  let e;
  if (t.bg.color_map ? e = qd(t.bg.color_map) : r && (e = r.map((f) => gr(f)).join(",")), !e)
    return;
  const n = t.bg.radius;
  let o;
  n && typeof n == "object" && "type" in n && n.value !== void 0 && (n.type === "fixed" ? o = un(n.value) : n.type === "relative" && (o = jm[n.value]));
  const i = wu(t.bg.center_x), s = wu(t.bg.center_y);
  return {
    size: void 0,
    pos: void 0,
    image: `radial-gradient(circle ${o || "farthest-corner"} at ${i} ${s},` + e + ")"
  };
}
function Em(t) {
  var e;
  const r = (e = t.bg) == null ? void 0 : e.image_url;
  if (r)
    return {
      size: Yd(t.bg.scale),
      pos: Xd(t.bg, t.direction),
      image: 'url("' + Ql(r) + '")'
    };
}
function Yd(t) {
  return t === "fit" ? "contain" : t === "stretch" ? "fill" : t === "no_scale" ? "none" : "cover";
}
function Am(t) {
  return t === "none" ? "auto" : t === "fill" ? "100% 100%" : t;
}
function Xd(t, r) {
  let e, n;
  return t.content_alignment_horizontal === "left" || r === "ltr" && t.content_alignment_horizontal === "start" || r === "rtl" && t.content_alignment_horizontal === "end" ? e = "0%" : t.content_alignment_horizontal === "right" || r === "ltr" && t.content_alignment_horizontal === "end" || r === "rtl" && t.content_alignment_horizontal === "start" ? e = "100%" : e = "50%", t.content_alignment_vertical === "top" ? n = "0%" : t.content_alignment_vertical === "bottom" ? n = "100%" : n = "50%", e + " " + n;
}
function rn(t, r) {
  const e = Number(t);
  return Number.isNaN(e) || e < 0 ? r : e;
}
function ku(t, r, e) {
  return typeof r == "number" && (t && r > 0 && r <= 100 || !t && r >= 0 && r < 100) ? r : e;
}
function Sm(t) {
  return t.is_enabled !== 0 && t.is_enabled !== !1 && t.index !== void 0;
}
function Vm(t, {
  visibilityActions: r,
  disappearActions: e,
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
  }), e && e.forEach((h) => {
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
  }, u = Ji(s, (h) => h);
  let c;
  const f = (h) => {
    const m = h.type === "visibility";
    o.execAnyActions([h.action], {
      logType: m ? "visible" : "disappear",
      node: t,
      processUrls: !1
    });
  }, _ = u.subscribe((h) => {
    c = h.filter(Sm);
    const m = {};
    c.forEach((k) => {
      m[k.index] = k;
    }), l();
    const p = [...new Set(c.map((k) => {
      const N = i[k.index].type === "visibility";
      return ku(
        N,
        k.visibility_percentage,
        N ? 50 : 0
      ) / 100;
    }))];
    if (!p.length)
      return;
    const w = (k) => {
      k.forEach((N) => {
        c.forEach((H) => {
          const z = i[H.index], oe = z.type === "visibility", _e = ku(
            oe,
            H.visibility_percentage,
            oe ? 50 : 0
          );
          let T;
          _e === 0 ? T = N.intersectionRatio >= 1e-12 : T = N.intersectionRatio >= _e / 100, (oe ? !z.visible && T : z.visible && !T) ? z.finished || (z.timer = setTimeout(() => {
            ++z.count;
            const E = H.log_limit === 0 ? 1 / 0 : H.log_limit || 1;
            z.count >= E && (z.finished = !0), f(z);
          }, rn(H.visibility_duration, 800))) : (oe ? !T : T) && z.timer && clearTimeout(z.timer), z.visible = T;
        });
      });
    };
    a = new IntersectionObserver(w, {
      threshold: p
    }), a.observe(t);
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
function vu(t, r) {
  r && t.push(r);
}
function ht(t, r, e) {
  const n = [];
  vu(n, r[t]);
  for (const o in e)
    if (e.hasOwnProperty(o)) {
      const i = e[o];
      if (i) {
        const s = `${t}_${o}` + (typeof i == "string" ? `_${i}` : "");
        vu(n, r[s]);
      }
    }
  return n.join(" ");
}
function Fm(t, r, e, n) {
  var o;
  return (o = r.componentDevtool) == null || o.call(r, {
    type: "mount",
    node: t,
    json: e.json,
    origJson: e.origJson,
    templateContext: e.templateContext,
    componentContext: e,
    devapi: n
  }), {
    update(i) {
      var s;
      (s = r.componentDevtool) == null || s.call(r, {
        type: "update",
        node: t,
        json: i.json,
        origJson: i.origJson,
        templateContext: i.templateContext,
        componentContext: i
      });
    },
    destroy() {
      var i;
      (i = r.componentDevtool) == null || i.call(r, {
        type: "destroy",
        node: t,
        json: e.json,
        origJson: e.origJson,
        templateContext: e.templateContext,
        componentContext: e
      });
    }
  };
}
const Zd = Fm, wa = Symbol("state");
function so(t, r) {
  var s, a;
  const e = t.top || 0, n = ((s = r === "ltr" ? t.end : t.start) != null ? s : t.right) || 0, o = t.bottom || 0, i = ((a = r === "ltr" ? t.start : t.end) != null ? a : t.left) || 0;
  return e === 0 && n === 0 && o === 0 && i === 0 ? "" : ge(e) + " " + ge(n) + " " + ge(o) + " " + ge(i);
}
function _s(t) {
  if (typeof t != "number" && typeof t != "string")
    return !1;
  const r = Number(t);
  return !Number.isNaN(r);
}
function zn(t) {
  return _s(t) && t >= 0;
}
function us(t, r, e) {
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
    if (n[s] && !zn(n[s]))
      return e;
  return so(t, r);
}
function Dm(t, r) {
  return !zn(t) || t === void 0 || t > 1 ? r : Number(t);
}
const Im = Object.prototype.hasOwnProperty;
function Ki(t, r) {
  if (Object.is(t, r))
    return !0;
  if (typeof t != "object" || t === null || typeof r != "object" || r === null)
    return Object.is(t, r);
  const e = Object.keys(t), n = Object.keys(r);
  if (e.length !== n.length)
    return !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (!Im.call(r, i) || !Ki(t[i], r[i]))
      return !1;
  }
  return !0;
}
function ei(t, r) {
  return Ki(t, r) ? r : t;
}
function Tm(t, r) {
  return t === "visible" || t === "invisible" || t === "gone" ? t : r;
}
function Qd(t, r) {
  return t === "linear" || t === "ease" || t === "ease_in_out" || t === "ease_in" || t === "ease_out" ? t : r;
}
function io(t, r) {
  const e = Number(t);
  return Number.isNaN(e) ? r : e;
}
function cs(t) {
  const r = [];
  return t.name === "set" ? (t.items || []).forEach((e) => {
    r.push(...cs(e));
  }) : r.push(t), r;
}
function ni(t, r) {
  if (!t || typeof t != "object")
    return r;
  const e = [
    "top",
    "right",
    "bottom",
    "left"
  ];
  for (let n = 0; n < e.length; ++n)
    if (t[e[n]] && !zn(t[e[n]]))
      return r;
  return t;
}
function Mm(t, r) {
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
function Pm(t, r) {
  const e = [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ];
  for (let n = 0; n < e.length; ++n)
    if (e[n] && !zn(e[n]))
      return r;
  return t;
}
function Hs(t, r = 0, e = 10) {
  return [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ].map((n) => ge((n || r) / e * 10)).join(" ");
}
function Nm(t) {
  var r, e, n, o, i, s;
  return ge(((e = (r = t.offset) == null ? void 0 : r.x) == null ? void 0 : e.value) || 0) + " " + ge(((o = (n = t.offset) == null ? void 0 : n.y) == null ? void 0 : o.value) || 0) + " " + ge((i = t.blur) != null ? i : 2) + " " + gr(t.color || "#000000", (s = t.alpha) != null ? s : 0.19);
}
function zm(t, r) {
  var e, n, o, i, s, a;
  return "drop-shadow(" + gr(t.color || "#000000", (e = t.alpha) != null ? e : 0.19) + " " + ge((((o = (n = t.offset) == null ? void 0 : n.x) == null ? void 0 : o.value) || 0) * 10 / r) + " " + ge((((s = (i = t.offset) == null ? void 0 : i.y) == null ? void 0 : s.value) || 0) * 10 / r) + " " + ge(((a = t.blur) != null ? a : 2) * 10 / r) + ")";
}
let Sl;
function Bi() {
  return typeof matchMedia > "u" ? !1 : (Sl || (Sl = window.matchMedia("(prefers-reduced-motion)")), Sl.matches);
}
const Lm = 8, Om = (t, r, e, n) => {
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
      if (++i > Lm) {
        const u = new Error("Recursive layout in size_provider");
        u.level = "warn", u.additional = {
          widthVariableName: e,
          heightVariableName: n
        }, r.logError(u);
        break;
      }
      await Sn();
    }
  }), o.observe(t)), o;
}, ka = Symbol("enabled");
function Zr(t, r) {
  return t === 1 || t === 0 || t === !1 || t === !0 ? !!t : r;
}
function Yo(t) {
  return [
    t.state_description,
    t.description,
    t.hint
  ].filter(Boolean).join(", ");
}
const ju = 1, oi = 2;
function Cu(t, r = 1) {
  if (!(!t || typeof t.value != "number")) {
    if (t.type === "translation-fixed")
      return ge(t.value * r);
    if (t.type === "translation-percentage")
      return `${t.value * r}%`;
  }
}
function ks(t, r = 1) {
  if (!(!t || typeof t.value != "number")) {
    if (t.type === "pivot-fixed")
      return ge(t.value * r);
    if (t.type === "pivot-percentage")
      return `${t.value * r}%`;
  }
}
function Bm(t) {
  return t.map((r) => {
    if (r.type === "rotation") {
      if (typeof r.angle == "number") {
        const e = ks(r.pivot_x) || "50%", n = ks(r.pivot_y) || "50%", o = ks(r.pivot_x, -1) || "-50%", i = ks(r.pivot_y, -1) || "-50%";
        return `translate(${e}, ${n}) rotate(${r.angle}deg) translate(${o}, ${i})`;
      }
    } else if (r.type === "translation") {
      const e = Cu(r.x) || 0, n = Cu(r.y) || 0;
      return `translate(${e}, ${n})`;
    }
  }).filter(Boolean).join(" ");
}
const Rm = "appkit-actionable__button", Eu = {
  actionable__button: Rm
};
function Hm() {
}
const To = Symbol("action");
function xl(t) {
  if (t.startsWith("tel:"))
    return "tel";
  if (t.startsWith("/"))
    return "https";
  const r = /^([^/]+):\/\//.exec(t);
  return r && r[1] || "";
}
function $l(t, r) {
  return r.has(t);
}
function Wm(t) {
  let r = (
    /*containerElement*/
    t[7]
  ), e, n, o = (
    /*containerElement*/
    t[7] && Vl(t)
  );
  return {
    c() {
      o && o.c(), e = er();
    },
    m(i, s) {
      o && o.m(i, s), J(i, e, s), n = !0;
    },
    p(i, s) {
      /*containerElement*/
      i[7] ? r ? Sr(
        r,
        /*containerElement*/
        i[7]
      ) ? (o.d(1), o = Vl(i), r = /*containerElement*/
      i[7], o.c(), o.m(e.parentNode, e)) : o.p(i, s) : (o = Vl(i), r = /*containerElement*/
      i[7], o.c(), o.m(e.parentNode, e)) : r && (o.d(1), o = null, r = /*containerElement*/
      i[7]);
    },
    i(i) {
      n || (L(o, i), n = !0);
    },
    o(i) {
      x(o, i), n = !1;
    },
    d(i) {
      i && G(e), o && o.d(i);
    }
  };
}
function Um(t) {
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
      t[2] + " " + Eu.actionable__button + " " + Er["root__any-actions"] + ` ${/*isNativeActionAnimation*/
      t[6] ? Er.root__clickable : Er["root__clickable-no-transition"]} ${Er.root__unselectable} ` + /*longTapActions*/
      ((f = t[1]) != null && f.length ? Er["root_disabled-context-menu"] : "")
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
      t[0].fakeElement === oi ? -1 : null
    },
    /*attrs*/
    t[4]
  ], c = {};
  for (let _ = 0; _ < u.length; _ += 1)
    c = jo(c, u[_]);
  return {
    c() {
      r = Pe("button"), l && l.c(), qo(r, c);
    },
    m(_, h) {
      J(_, r, h), l && l.m(r, null), r.autofocus && r.focus(), t[48](r), o = !0, i || (s = [
        pl(
          /*use*/
          t[5].call(null, r)
        ),
        xe(
          r,
          "click",
          /*click_handler_1*/
          t[37]
        ),
        xe(
          r,
          "keydown",
          /*onKeydown*/
          t[17]
        ),
        xe(
          r,
          "focus",
          /*focus_handler_1*/
          t[38]
        ),
        xe(
          r,
          "blur",
          /*blur_handler_1*/
          t[39]
        ),
        xe(
          r,
          "pointerdown",
          /*pointerdown_handler_1*/
          t[40]
        ),
        xe(
          r,
          "wheel",
          /*wheel_handler_1*/
          t[41]
        )
      ], i = !0);
    },
    p(_, h) {
      var m;
      l && l.p && (!o || h[0] & /*$$scope*/
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
          h,
          null
        ) : _l(
          /*$$scope*/
          _[30]
        ),
        null
      ), qo(r, c = No(u, [
        (!o || h[0] & /*cls, isNativeActionAnimation, longTapActions*/
        70 && e !== (e = /*cls*/
        _[2] + " " + Eu.actionable__button + " " + Er["root__any-actions"] + ` ${/*isNativeActionAnimation*/
        _[6] ? Er.root__clickable : Er["root__clickable-no-transition"]} ${Er.root__unselectable} ` + /*longTapActions*/
        ((m = _[1]) != null && m.length ? Er["root_disabled-context-menu"] : ""))) && { class: e },
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
      o || (L(l, _), o = !0);
    },
    o(_) {
      x(l, _), o = !1;
    },
    d(_) {
      _ && G(r), l && l.d(_), t[48](null), i = !1, Rr(s);
    }
  };
}
function Gm(t) {
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
      t[2] + " " + Er["root__any-actions"] + " " + /*isNativeActionAnimation*/
      (t[6] ? Er.root__clickable : Er["root__clickable-no-transition"]) + " " + /*longTapActions*/
      ((f = t[1]) != null && f.length ? Er["root_disabled-context-menu"] : "")
    },
    {
      tabindex: n = /*componentContext*/
      t[0].fakeElement === oi ? -1 : null
    },
    /*attrs*/
    t[4]
  ], c = {};
  for (let _ = 0; _ < u.length; _ += 1)
    c = jo(c, u[_]);
  return {
    c() {
      r = Pe("a"), l && l.c(), qo(r, c);
    },
    m(_, h) {
      J(_, r, h), l && l.m(r, null), t[47](r), o = !0, i || (s = [
        pl(
          /*use*/
          t[5].call(null, r)
        ),
        xe(
          r,
          "click",
          /*click_handler*/
          t[32]
        ),
        xe(
          r,
          "keydown",
          /*onKeydown*/
          t[17]
        ),
        xe(
          r,
          "focus",
          /*focus_handler*/
          t[33]
        ),
        xe(
          r,
          "blur",
          /*blur_handler*/
          t[34]
        ),
        xe(
          r,
          "pointerdown",
          /*pointerdown_handler*/
          t[35]
        ),
        xe(
          r,
          "wheel",
          /*wheel_handler*/
          t[36]
        )
      ], i = !0);
    },
    p(_, h) {
      var m;
      l && l.p && (!o || h[0] & /*$$scope*/
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
          h,
          null
        ) : _l(
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
        70 && e !== (e = /*cls*/
        _[2] + " " + Er["root__any-actions"] + " " + /*isNativeActionAnimation*/
        (_[6] ? Er.root__clickable : Er["root__clickable-no-transition"]) + " " + /*longTapActions*/
        ((m = _[1]) != null && m.length ? Er["root_disabled-context-menu"] : ""))) && { class: e },
        (!o || h[0] & /*componentContext*/
        1 && n !== (n = /*componentContext*/
        _[0].fakeElement === oi ? -1 : null)) && { tabindex: n },
        h[0] & /*attrs*/
        16 && /*attrs*/
        _[4]
      ]));
    },
    i(_) {
      o || (L(l, _), o = !0);
    },
    o(_) {
      x(l, _), o = !1;
    },
    d(_) {
      _ && G(r), l && l.d(_), t[47](null), i = !1, Rr(s);
    }
  };
}
function Vl(t) {
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
      ((f = t[1]) != null && f.length ? Er["root_disabled-context-menu"] : "") + " " + /*hasAnyActions*/
      (t[14] ? Er["root__any-actions"] : "")
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
    c = jo(c, u[_]);
  return {
    c() {
      r = Pe(
        /*containerElement*/
        t[7]
      ), l && l.c(), ri(
        /*containerElement*/
        t[7]
      )(r, c);
    },
    m(_, h) {
      J(_, r, h), l && l.m(r, null), t[49](r), o = !0, i || (s = [
        pl(
          /*use*/
          t[5].call(null, r)
        ),
        xe(
          r,
          "click",
          /*click_handler_2*/
          t[42]
        ),
        xe(
          r,
          "keydown",
          /*onKeydown*/
          t[17]
        ),
        xe(
          r,
          "focus",
          /*focus_handler_2*/
          t[43]
        ),
        xe(
          r,
          "blur",
          /*blur_handler_2*/
          t[44]
        ),
        xe(
          r,
          "pointerdown",
          /*pointerdown_handler_2*/
          t[45]
        ),
        xe(
          r,
          "wheel",
          /*wheel_handler_2*/
          t[46]
        )
      ], i = !0);
    },
    p(_, h) {
      var m;
      l && l.p && (!o || h[0] & /*$$scope*/
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
          h,
          null
        ) : _l(
          /*$$scope*/
          _[30]
        ),
        null
      ), ri(
        /*containerElement*/
        _[7]
      )(r, c = No(u, [
        (!o || h[0] & /*cls, longTapActions, hasAnyActions*/
        16390 && e !== (e = /*cls*/
        _[2] + " " + /*longTapActions*/
        ((m = _[1]) != null && m.length ? Er["root_disabled-context-menu"] : "") + " " + /*hasAnyActions*/
        (_[14] ? Er["root__any-actions"] : ""))) && { class: e },
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
      o || (L(l, _), o = !0);
    },
    o(_) {
      x(l, _), o = !1;
    },
    d(_) {
      _ && G(r), l && l.d(_), t[49](null), i = !1, Rr(s);
    }
  };
}
function Jm(t) {
  let r, e, n, o;
  const i = [Gm, Um, Wm], s = [];
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
      e.c(), n = er();
    },
    m(l, u) {
      s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? s[r].p(l, u) : (fr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), dr(), e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n));
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), s[r].d(l);
    }
  };
}
const Au = 8, Su = 400, Fl = 400, Km = /* @__PURE__ */ new Set(["button", "image", "checkbox", "radio", "header"]);
function Vu(t) {
  t.preventDefault();
}
function qm(t, r, e) {
  let n, o, i = v, s = () => (i(), i = C(n, (K) => e(29, o = K)), n);
  t.$$.on_destroy.push(() => i());
  let { $$slots: a = {}, $$scope: l } = r, { componentContext: u } = r, { id: c = "" } = r, { actions: f = void 0 } = r, { doubleTapActions: _ = void 0 } = r, { longTapActions: h = void 0 } = r, { pressStartActions: m = void 0 } = r, { pressEndActions: p = void 0 } = r, { hoverStartActions: w = void 0 } = r, { hoverEndActions: k = void 0 } = r, { cls: N = "" } = r, { style: H = null } = r, { attrs: z = void 0 } = r, { use: oe = Hm } = r, { customAction: _e = null } = r, { isNativeActionAnimation: T = !0 } = r, { hasInnerFocusable: Y = !1 } = r, { customAccessibility: le = void 0 } = r, { captureFocusOnAction: E = !0 } = r, { containerElement: D = "span" } = r;
  const M = Tr(Yr), W = Tr(To);
  hi(To, {
    hasAction() {
      return !!(W.hasAction() || f != null && f.length || (le == null ? void 0 : le.mode) === "exclude");
    }
  });
  let q, be = "", Ae, Ce = -1, me = -1, Fe = null, Q = !1, Ke = !1, Ye = !1, Xe, ye, Me, ce, he = !1;
  function fe() {
    return (o == null ? void 0 : o.some((K) => {
      if (K != null && K.typed)
        return !0;
      const Mt = K == null ? void 0 : K.url;
      if (!Mt)
        return !1;
      const It = xl(Mt);
      return It && !$l(It, M.getBuiltinProtocols());
    })) || !1;
  }
  async function re(K, Mt) {
    f && (K && fe() && K.preventDefault(), u.execAnyActions(f, { node: q, processUrls: Mt }));
  }
  async function de(K) {
    if (W.hasAction() || K.button !== void 0 && K.button !== 0)
      return;
    const Mt = Date.now();
    if (Ce > 0 && Mt > Ce + Su) {
      K.preventDefault();
      return;
    }
    if (_ != null && _.length && me > 0 && Mt - me < Fl) {
      K.preventDefault(), u.execAnyActions(_, { processUrls: !0, node: q }), me = -1;
      return;
    }
    if (me = Mt, _ != null && _.length && Ce > 0 && Mt < Ce + Fl) {
      K.preventDefault(), clearTimeout(ye), ye = window.setTimeout(
        () => {
          re(void 0, !0);
        },
        Fl
      );
      return;
    }
    (_e == null ? void 0 : _e(K)) === !1 ? K.preventDefault() : re(K, !1);
  }
  function ne(K) {
    W.hasAction() || (Fe = { x: K.clientX, y: K.clientY }, Q = !1, Ce = Date.now(), Xe && clearTimeout(Xe), clearTimeout(ye), u.execAnyActions(m, { node: q }));
  }
  function we(K) {
    Fe && (Math.abs(Fe.x - K.clientX) > Au || Math.abs(Fe.y - K.clientY) > Au) && (Q = !0);
  }
  function Ue(K) {
    W.hasAction() || !Fe || Ce < 0 || (!Q && Date.now() - Ce >= Su && (K.stopImmediatePropagation(), u.execAnyActions(h, { processUrls: !0, node: q })), Xe && clearTimeout(Xe), Xe = window.setTimeout(
      () => {
        Fe = null, Ce = -1;
      },
      100
    ), u.execAnyActions(p, { node: q }));
  }
  function Ge() {
    W.hasAction() || u.execAnyActions(w, { node: q });
  }
  function $() {
    W.hasAction() || u.execAnyActions(k, { node: q });
  }
  function Be(K) {
    const Mt = K.target;
    Mt instanceof HTMLElement && (Mt.tagName === "INPUT" || Mt.contentEditable === "true") || K.ctrlKey || K.metaKey || K.altKey || K.shiftKey || K.key === "Enter" && Array.isArray(f) && f.length && (u.execAnyActions(f), K.preventDefault());
  }
  xn(() => {
    c && !Y && M.registerFocusable(c, {
      focus() {
        q && (be || Ke) && q.focus();
      }
    });
  }), sn(() => {
    typeof window < "u" && (window.removeEventListener("pointermove", we), window.removeEventListener("pointerup", Ue), window.removeEventListener("pointercancel", Ue)), c && !Y && M.unregisterFocusable(c), Xe && clearTimeout(Xe), ye && clearTimeout(ye);
  });
  function Ne(K) {
    Bn.call(this, t, K);
  }
  function ot(K) {
    Bn.call(this, t, K);
  }
  function ct(K) {
    Bn.call(this, t, K);
  }
  function nt(K) {
    Bn.call(this, t, K);
  }
  function kt(K) {
    Bn.call(this, t, K);
  }
  function it(K) {
    Bn.call(this, t, K);
  }
  function Pt(K) {
    Bn.call(this, t, K);
  }
  function ft(K) {
    Bn.call(this, t, K);
  }
  function Z(K) {
    Bn.call(this, t, K);
  }
  function pe(K) {
    Bn.call(this, t, K);
  }
  function st(K) {
    Bn.call(this, t, K);
  }
  function ze(K) {
    Bn.call(this, t, K);
  }
  function F(K) {
    Bn.call(this, t, K);
  }
  function Ct(K) {
    Bn.call(this, t, K);
  }
  function ut(K) {
    Bn.call(this, t, K);
  }
  function Vt(K) {
    Dr[K ? "unshift" : "push"](() => {
      q = K, e(8, q);
    });
  }
  function Dt(K) {
    Dr[K ? "unshift" : "push"](() => {
      q = K, e(8, q);
    });
  }
  function lt(K) {
    Dr[K ? "unshift" : "push"](() => {
      q = K, e(8, q);
    });
  }
  return t.$$set = (K) => {
    "componentContext" in K && e(0, u = K.componentContext), "id" in K && e(18, c = K.id), "actions" in K && e(19, f = K.actions), "doubleTapActions" in K && e(20, _ = K.doubleTapActions), "longTapActions" in K && e(1, h = K.longTapActions), "pressStartActions" in K && e(21, m = K.pressStartActions), "pressEndActions" in K && e(22, p = K.pressEndActions), "hoverStartActions" in K && e(23, w = K.hoverStartActions), "hoverEndActions" in K && e(24, k = K.hoverEndActions), "cls" in K && e(2, N = K.cls), "style" in K && e(3, H = K.style), "attrs" in K && e(4, z = K.attrs), "use" in K && e(5, oe = K.use), "customAction" in K && e(25, _e = K.customAction), "isNativeActionAnimation" in K && e(6, T = K.isNativeActionAnimation), "hasInnerFocusable" in K && e(26, Y = K.hasInnerFocusable), "customAccessibility" in K && e(27, le = K.customAccessibility), "captureFocusOnAction" in K && e(28, E = K.captureFocusOnAction), "containerElement" in K && e(7, D = K.containerElement), "$$scope" in K && e(30, l = K.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*customAccessibility*/
    134217728 && e(12, he = (le == null ? void 0 : le.mode) === "exclude"), t.$$.dirty[0] & /*componentContext, actions*/
    524289 && s(e(16, n = u.getDerivedFromVars(f, void 0, !0))), t.$$.dirty[0] & /*$processedActions, customAction, href, ariaHidden, componentContext*/
    570429953) {
      if (Array.isArray(o) && (o != null && o.length))
        for (let K = 0; K < o.length; ++K) {
          const Mt = o[K].url;
          if (Mt) {
            e(9, be = Mt), e(13, Ae = o[K].target || void 0);
            break;
          }
        }
      e(10, Ke = !!_e), (be || Array.isArray(o) && (o != null && o.length)) && (W.hasAction() || he) ? (e(9, be = ""), u.logError(X(new Error("Actionable element is forbidden inside other actionable element or inside accessibility mode=exlucde"), {
        level: "warn",
        additional: { actions: o }
      }))) : be && !$l(xl(be), M.getBuiltinProtocols()) ? (e(9, be = ""), e(10, Ke = !0)) : !be && Array.isArray(o) && (o != null && o.length) && (e(10, Ke = !0), o.some((K) => K.url || K.typed || K.menu_items) || u.logError(X(new Error("The component has a list of actions, but does not have a real action"), {
        level: "warn",
        additional: { actions: o }
      })));
    }
    t.$$.dirty[0] & /*customAccessibility, href, hasJSAction, role*/
    134221312 && (le != null && le.type && Km.has(le.type) ? le.type === "header" ? e(11, Me = "heading") : e(11, Me = le.type) : be ? e(11, Me = void 0) : Ke && e(11, Me = "button"), (Me === "checkbox" || Me === "radio") && typeof (le == null ? void 0 : le.is_checked) == "boolean" ? e(15, ce = le.is_checked) : e(15, ce = void 0)), t.$$.dirty[0] & /*node, href, hasJSAction, doubleTapActions, longTapActions, pressStartActions, pressEndActions, hoverStartActions, hoverEndActions, captureFocusOnAction*/
    300943106 && q && (be || Ke || _ != null && _.length ? q.addEventListener("click", de) : q.removeEventListener("click", de), _ != null && _.length || h != null && h.length || m != null && m.length || p != null && p.length ? (q.addEventListener("pointerdown", ne, { passive: !0 }), window.addEventListener("pointermove", we, { passive: !0 }), window.addEventListener("pointerup", Ue, { passive: !0 }), window.addEventListener("pointercancel", Ue, { passive: !0 })) : (q.removeEventListener("pointerdown", ne), window.removeEventListener("pointerup", Ue), window.removeEventListener("pointermove", we), window.removeEventListener("pointercancel", Ue)), w != null && w.length ? q.addEventListener("pointerenter", Ge) : q.removeEventListener("pointerenter", Ge), k != null && k.length ? q.addEventListener("pointerleave", $) : q.removeEventListener("pointerleave", $), E === !1 ? q.addEventListener("mousedown", Vu) : q.removeEventListener("mousedown", Vu), e(14, Ye = !!(be || Ke || _ != null && _.length || h != null && h.length || m != null && m.length || p != null && p.length || w != null && w.length || k != null && k.length)));
  }, [
    u,
    h,
    N,
    H,
    z,
    oe,
    T,
    D,
    q,
    be,
    Ke,
    Me,
    he,
    Ae,
    Ye,
    ce,
    n,
    Be,
    c,
    f,
    _,
    m,
    p,
    w,
    k,
    _e,
    Y,
    le,
    E,
    o,
    l,
    a,
    Ne,
    ot,
    ct,
    nt,
    kt,
    it,
    Pt,
    ft,
    Z,
    pe,
    st,
    ze,
    F,
    Ct,
    ut,
    Vt,
    Dt,
    lt
  ];
}
class yl extends Br {
  constructor(r) {
    super(), Or(
      this,
      r,
      qm,
      Jm,
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
function Pn(t) {
  return _s(t) && t > 0;
}
function xd(t, r) {
  return t.map((e) => {
    if (!e) {
      r(X(new Error("Incorrect filter"), {
        level: "warn"
      }));
      return;
    }
    if (e.type === "blur") {
      if (Pn(e.radius))
        return `blur(${un(e.radius / 2)})`;
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
function Fu(t, r, e) {
  const n = t.slice();
  return n[6] = r[e], n;
}
function Ym(t) {
  let r, e;
  return {
    c() {
      r = Pe("span"), g(r, "class", mi["outer-background__item"]), g(r, "style", e = cr(
        /*item*/
        t[6].style
      ));
    },
    m(n, o) {
      J(n, r, o);
    },
    p(n, o) {
      o & /*styles*/
      2 && e !== (e = cr(
        /*item*/
        n[6].style
      )) && g(r, "style", e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function Xm(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Pe("img"), Qn(r.src, e = /*item*/
      t[6].image_url) || g(r, "src", e), g(r, "alt", ""), g(r, "aria-hidden", "true"), g(r, "loading", "lazy"), g(r, "decoding", "async"), g(r, "class", mi["outer-background__item"]), g(r, "style", n = cr(
        /*item*/
        t[6].style
      ));
    },
    m(s, a) {
      J(s, r, a), o || (i = xe(
        r,
        "error",
        /*onImgError*/
        t[2]
      ), o = !0);
    },
    p(s, a) {
      a & /*styles*/
      2 && !Qn(r.src, e = /*item*/
      s[6].image_url) && g(r, "src", e), a & /*styles*/
      2 && n !== (n = cr(
        /*item*/
        s[6].style
      )) && g(r, "style", n);
    },
    d(s) {
      s && G(r), o = !1, i();
    }
  };
}
function Du(t) {
  let r;
  function e(i, s) {
    return (
      /*item*/
      i[6].image_url ? Xm : Ym
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = er();
    },
    m(i, s) {
      o.m(i, s), J(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && G(r), o.d(i);
    }
  };
}
function Zm(t) {
  let r, e, n = ar(
    /*styles*/
    t[1]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Du(Fu(t, n, i));
  return {
    c() {
      r = Pe("span");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(r, "class", e = mi["outer-background"] + /*radius*/
      (t[0] ? " " + mi["outer-background_clip"] : "")), I(
        r,
        "border-radius",
        /*radius*/
        t[0]
      );
    },
    m(i, s) {
      J(i, r, s);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(r, null);
    },
    p(i, [s]) {
      if (s & /*styles, onImgError*/
      6) {
        n = ar(
          /*styles*/
          i[1]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = Fu(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Du(l), o[a].c(), o[a].m(r, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
      s & /*radius*/
      1 && e !== (e = mi["outer-background"] + /*radius*/
      (i[0] ? " " + mi["outer-background_clip"] : "")) && g(r, "class", e), s & /*radius*/
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
      i && G(r), on(o, i);
    }
  };
}
function Qm(t, r, e) {
  let n, { direction: o } = r, { componentContext: i } = r, { background: s = [] } = r, { radius: a = "" } = r;
  function l(u) {
    u.target && "classList" in u.target && u.target.classList.add(mi["outer-background__item_hidden"]);
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
        u.type === "solid" && (c["background-color"] = _.color), u.type === "gradient" && (c["background-image"] = _.image), u.type === "image" && (c.opacity = Number(u.alpha), f.image_url = u.image_url, c["object-fit"] = _.size, c["object-position"] = _.position, Array.isArray(u.filters) && u.filters.length && (c.filter = xd(u.filters, i.logError), o === "rtl" && u.filters.some((h) => h.type === "rtl_mirror") && (c.transform = "scale(-1,1)")));
      }
      return f;
    }));
  }, [a, n, l, o, i, s];
}
class xm extends Br {
  constructor(r) {
    super(), Or(this, r, Qm, Zm, Sr, {
      direction: 3,
      componentContext: 4,
      background: 5,
      radius: 0
    });
  }
}
const $m = (t) => ({
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
}), Iu = (t) => ({
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
function Tu(t) {
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
        t[1] + " " + ht(
          "outer",
          Qs,
          /*mods*/
          t[31]
        ) + /*customClass*/
        (t[30] ? ` ${/*customClass*/
        t[30]}` : "") + /*hoverClassName*/
        (t[18] ? ` ${/*hoverClassName*/
        t[18]}` : "")
      ),
      style: cr(
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
      t[16].length || Ou(
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
      $$slots: { default: [e0] },
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
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
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
      n[1] + " " + ht(
        "outer",
        Qs,
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
      n[16].length || Ou(
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Mu(t) {
  let r, e;
  return r = new xm({
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
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Pu(t) {
  let r, e;
  return {
    c() {
      r = Pe("span"), g(r, "class", Qs.outer__border), g(r, "style", e = cr(
        /*borderElemStyle*/
        t[4]
      ));
    },
    m(n, o) {
      J(n, r, o);
    },
    p(n, o) {
      o[0] & /*borderElemStyle*/
      16 && e !== (e = cr(
        /*borderElemStyle*/
        n[4]
      )) && g(r, "style", e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function e0(t) {
  let r, e, n, o = (
    /*hasSeparateBg*/
    t[11] && Mu(t)
  );
  const i = (
    /*#slots*/
    t[149].default
  ), s = cl(
    i,
    t,
    /*$$scope*/
    t[152],
    Iu
  );
  let a = (
    /*hasBorder*/
    t[22] && Pu(t)
  );
  return {
    c() {
      o && o.c(), r = er(), s && s.c(), a && a.c(), e = er();
    },
    m(l, u) {
      o && o.m(l, u), J(l, r, u), s && s.m(l, u), a && a.m(l, u), J(l, e, u), n = !0;
    },
    p(l, u) {
      /*hasSeparateBg*/
      l[11] ? o ? (o.p(l, u), u[0] & /*hasSeparateBg*/
      2048 && L(o, 1)) : (o = Mu(l), o.c(), L(o, 1), o.m(r.parentNode, r)) : o && (fr(), x(o, 1, 1, () => {
        o = null;
      }), dr()), s && s.p && (!n || u[0] & /*hasCustomFocus, widthMin, widthMax, heightMin, heightMax*/
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
          $m
        ) : _l(
          /*$$scope*/
          l[152]
        ),
        Iu
      ), /*hasBorder*/
      l[22] ? a ? a.p(l, u) : (a = Pu(l), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null);
    },
    i(l) {
      n || (L(o), L(s, l), n = !0);
    },
    o(l) {
      x(o), x(s, l), n = !1;
    },
    d(l) {
      l && (G(r), G(e)), o && o.d(l), s && s.d(l), a && a.d(l);
    }
  };
}
function t0(t) {
  let r, e, n = !/*hasWidthError*/
  t[23] && !/*hasHeightError*/
  t[24] && Tu(t);
  return {
    c() {
      n && n.c(), r = er();
    },
    m(o, i) {
      n && n.m(o, i), J(o, r, i), e = !0;
    },
    p(o, i) {
      !/*hasWidthError*/
      o[23] && !/*hasHeightError*/
      o[24] ? n ? (n.p(o, i), i[0] & /*hasWidthError, hasHeightError*/
      25165824 && L(n, 1)) : (n = Tu(o), n.c(), L(n, 1), n.m(r.parentNode, r)) : n && (fr(), x(n, 1, 1, () => {
        n = null;
      }), dr());
    },
    i(o) {
      e || (L(n), e = !0);
    },
    o(o) {
      x(n), e = !1;
    },
    d(o) {
      o && G(r), n && n.d(o);
    }
  };
}
const Nu = {
  left: "start",
  center: "center",
  right: "end",
  start: "start",
  end: "end"
}, zu = {
  left: "end",
  center: "center",
  right: "start",
  start: "start",
  end: "end"
}, Lu = {
  top: "start",
  center: "center",
  bottom: "end",
  baseline: "baseline"
}, Dl = (t) => `The component id with the "${t}" property for state change is missing. Either specify the id, or specify the "transition_trigger" property without "state_change" value.`;
function Ou(t) {
  return t.some((r) => r.name === "native");
}
function r0(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, z, oe, _e, T, Y, le, E, D, M, W, q, be, Ae, Ce, me, Fe, Q, Ke, Ye, Xe, ye, Me, ce, he, fe, re, de, ne, we, Ue, Ge = v, $ = () => (Ge(), Ge = C(k, (_t) => e(133, Ue = _t)), k), Be, Ne = v, ot = () => (Ne(), Ne = C(N, (_t) => e(134, Be = _t)), N), ct, nt = v, kt = () => (nt(), nt = C(w, (_t) => e(135, ct = _t)), w), it, Pt = v, ft = () => (Pt(), Pt = C(H, (_t) => e(136, it = _t)), H), Z, pe = v, st = () => (pe(), pe = C(p, (_t) => e(137, Z = _t)), p), ze, F = v, Ct = () => (F(), F = C(m, (_t) => e(138, ze = _t)), m), ut, Vt = v, Dt = () => (Vt(), Vt = C(o, (_t) => e(139, ut = _t)), o), lt, K = v, Mt = () => (K(), K = C(h, (_t) => e(20, lt = _t)), h), It, Xt = v, Zt = () => (Xt(), Xt = C(_, (_t) => e(140, It = _t)), _), Ee, Ze = v, gt = () => (Ze(), Ze = C(f, (_t) => e(141, Ee = _t)), f), Ie, $e = v, Le = () => ($e(), $e = C(c, (_t) => e(142, Ie = _t)), c), Ft, Oe = v, yt = () => (Oe(), Oe = C(a, (_t) => e(143, Ft = _t)), a), Gt, Tt = v, sr = () => (Tt(), Tt = C(u, (_t) => e(144, Gt = _t)), u), Te, jt = v, lr = () => (jt(), jt = C(l, (_t) => e(145, Te = _t)), l), rr, nr = v, pr = () => (nr(), nr = C(s, (_t) => e(146, rr = _t)), s), vr, or = v, ir = () => (or(), or = C(i, (_t) => e(147, vr = _t)), i), Ht;
  t.$$.on_destroy.push(() => Ge()), t.$$.on_destroy.push(() => Ne()), t.$$.on_destroy.push(() => nt()), t.$$.on_destroy.push(() => Pt()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => F()), t.$$.on_destroy.push(() => Vt()), t.$$.on_destroy.push(() => K()), t.$$.on_destroy.push(() => Xt()), t.$$.on_destroy.push(() => Ze()), t.$$.on_destroy.push(() => $e()), t.$$.on_destroy.push(() => Oe()), t.$$.on_destroy.push(() => Tt()), t.$$.on_destroy.push(() => jt()), t.$$.on_destroy.push(() => nr()), t.$$.on_destroy.push(() => or());
  let { $$slots: mt = {}, $$scope: Qt } = r, { componentContext: ae } = r, { cls: wr = "" } = r, { style: kr = void 0 } = r, { layoutParams: Et = {} } = r, { customDescription: Ir = !1 } = r, { customPaddings: Pr = !1 } = r, { customActions: ur = "" } = r, { additionalPaddings: dt = null } = r, { heightByAspect: At = !1 } = r, { parentOf: Jt = void 0 } = r, { parentOfSimpleMode: xt = void 0 } = r, { replaceItems: et = void 0 } = r, { hasInnerFocusable: pt = !1 } = r, { alwaysCustomFocus: ue = !1 } = r, { containerElement: vt = "span" } = r, { devapi: $t = void 0 } = r;
  const Wt = Tr(Yr), yr = Tr(wa), { isEnabled: j } = Tr(ka);
  yn(t, j, (_t) => e(148, Ht = _t));
  const ie = Wt.direction;
  yn(t, ie, (_t) => e(19, we = _t));
  let d, B, je = null, He = [], ke = {}, P = {}, Lt = !1, zt = 1, Je = "transparent", at = 0, Ot = {
    "top-left": 0,
    "top-right": 0,
    "bottom-right": 0,
    "bottom-left": 0
  }, Ar = "", _r = null, Fr = "", wn = {}, Se, Xr, Ur, ln = 0, cn = 0, y = 0, A = !1, S = !1, ee = {}, O, tt, De, tr = 0, se = 0, We = 0, Nt = !1, St = !1, Cr = 1, Gr, an, Mr, mn, bn = [], Vn = !1, lo = !1, Nn, Kt, b, V = [], te = [], R = [], Ve = [], ve = [], qt = [], Yt = [], qr = [], Nr = [], Hr = [], mo = "", ro, no, $n, qi, rt = !1, jr = "visible", nn, Lo, Oo = !1, vn = !0, Zo, En, Co, Yi = null, fi;
  function k_() {
    e(72, _r = null), e(73, Fr = ""), e(86, Cr = 1), e(98, rt = !1), e(99, jr = "visible"), e(100, nn = void 0), e(28, vn = !0), bn = ae.fakeElement ? [] : ae.json.transition_triggers || ["state_change", "visibility_change"], e(89, Vn = bn.indexOf("state_change") !== -1), lo = bn.indexOf("visibility_change") !== -1, d && Da(d), En == null || En(), Ht && e(102, En = Wt.processVariableTriggers(ae, ae.json.variable_triggers));
  }
  function v_(_t, Qr) {
    if (!Array.isArray(Jt) || !et || xt && (Array.isArray(Qr) ? Qr.length : 0) !== 1)
      return;
    const Fn = Jt.findIndex((fn) => (fn == null ? void 0 : fn.id) === _t), Wn = Jt.slice();
    Wn.splice(Fn, 1, ...(Qr || []).map((fn) => ({ json: fn, id: fn == null ? void 0 : fn.id }))), e(53, Jt = Wn), et(Wn.map((fn) => fn == null ? void 0 : fn.json));
  }
  function j_(_t) {
    const Qr = io(_t.start_value, 1), Fn = io(_t.end_value, 1), Wn = rn(_t.start_delay, 0), fn = Bi() ? 0 : rn(_t.duration, 300), bo = Qd(_t.interpolator, "ease_in_out").replace(/_/g, "-");
    switch (_t.name) {
      case "fade":
        return e(94, ro = Qr), e(95, no = Fn), `opacity ${fn}ms ${bo} ${Wn}ms`;
      case "scale":
        return e(96, $n = Qr), e(97, qi = Fn), `transform ${fn}ms ${bo} ${Wn}ms`;
      case "native":
      case "no_animation":
        return "";
      default:
        return ae.logError(X(new Error("Unknown action_animation name"), {
          additional: { animation: _t.name }
        })), "";
    }
  }
  async function C_(_t) {
    e(99, jr = _t);
    const Qr = _t === "visible" ? "in" : "out", Fn = Qr === "in" ? ae.json.transition_in : ae.json.transition_out;
    if (lo && Fn) {
      let Wn;
      _t === "gone" && (Wn = d.getBoundingClientRect()), await Sn(), Qr === "in" && e(91, Kt = !0), yr.runVisibilityTransition(
        {
          ...ae.json,
          visibility: "visible"
        },
        ae,
        Fn,
        d,
        Qr,
        Wn
      ).then(() => {
        Qr === "in" && e(91, Kt = !1);
      }).catch((fn) => {
        throw Qr === "in" && e(91, Kt = !1), fn;
      });
    }
  }
  function Fa() {
    if (je && d) {
      const _t = Wt.getExtensionContext(ae);
      je.forEach((Qr) => {
        var Fn;
        (Fn = Qr.unmountView) == null || Fn.call(Qr, d, _t);
      }), je = null;
    }
  }
  function E_() {
    if (je != null && je.length) {
      const _t = Wt.getExtensionContext(ae);
      je.forEach((Qr) => {
        var Fn;
        (Fn = Qr.updateView) == null || Fn.call(Qr, d, _t);
      });
    }
    Yi && Yi.update(ae);
  }
  let Eo = null, Bo = null, di = "desktop";
  function Xi() {
    Eo != null && Eo.matches ? e(105, di = "mobile") : Bo != null && Bo.matches ? e(105, di = "tablet") : e(105, di = "desktop");
  }
  let ao = null, Zi = "";
  function Da(_t) {
    var Qi, xi, $i;
    Co == null || Co.destroy(), e(65, d = _t), Vn && ae.json.transition_in && (ae.id ? yr.registerChildWithTransitionIn(ae.json, ae, ae.json.transition_in, _t).then(() => {
      e(90, Nn = !1);
    }).catch((Qo) => {
      throw e(90, Nn = !1), Qo;
    }) : ae.logError(X(new Error(Dl("transition_in")), { level: "warn" }))), Vn && ae.json.transition_out && (ae.id ? yr.registerChildWithTransitionOut(ae.json, ae, ae.json.transition_out, _t) : ae.logError(X(new Error(Dl("transition_out")), { level: "warn" }))), ae.fakeElement || (ae.json.transition_change && !ae.id && ae.logError(X(new Error(Dl("transition_change")), { level: "warn" })), yr.registerChildWithTransitionChange(ae.json, ae, ae.json.transition_change, _t).then(() => {
      e(92, b = !1);
    }).catch((Qo) => {
      throw e(92, b = !1), Qo;
    }));
    const Qr = !ae.fakeElement || ae.fakeElement === oi, Fn = Qr ? ae.json.visibility_actions || ae.json.visibility_action && [ae.json.visibility_action] : [], Wn = Qr ? ae.json.disappear_actions : [];
    let fn;
    (Array.isArray(Fn) && Fn.length || Array.isArray(Wn) && Wn.length) && (fn = Vm(_t, {
      visibilityActions: Fn,
      disappearActions: Wn,
      rootCtx: Wt,
      componentContext: ae
    }));
    const bo = ae.id;
    return bo && (fi == null || fi(), fi = Wt.registerId(bo, {
      context: () => ae,
      node: () => d
    }), yr.registerChild(bo)), (Qi = ae.json.tooltips) == null || Qi.forEach((Qo) => {
      Wt.registerTooltip(_t, Qo);
    }), Lo && (Lo.disconnect(), Lo = void 0), Lo = Om(d, ae, (xi = ae.json.layout_provider) == null ? void 0 : xi.width_variable_name, ($i = ae.json.layout_provider) == null ? void 0 : $i.height_variable_name), ae.fakeElement || (Yi = Zd(_t, Wt, ae, $t)), Co = {
      destroy() {
        fi && (fi(), fi = void 0), bo && yr.unregisterChild(bo), fn && fn.destroy(), Yi && Yi.destroy();
      }
    }, Co;
  }
  function A_() {
    ae.json.focus && ((ue || !Yl(Wt.isPointerFocus)) && e(17, Oo = !0), ae.execAnyActions(Ve));
  }
  function S_() {
    ae.json.focus && (e(17, Oo = !1), ae.execAnyActions(ve));
  }
  gl(E_), sn(() => {
    var _t;
    He.forEach((Qr) => {
      Wt.unregisterParentOf(Qr);
    }), e(66, He = []), Lo && (Lo.disconnect(), Lo = void 0), (_t = ae.json.tooltips) == null || _t.forEach((Qr) => {
      Wt.unregisterTooltip(Qr);
    }), En == null || En(), Fa(), ao && (ao.remove(), e(106, ao = null)), Eo && (Eo.removeEventListener("change", Xi), e(103, Eo = null)), Bo && (Bo.removeEventListener("change", Xi), e(104, Bo = null));
  });
  function V_(_t) {
    Bn.call(this, t, _t);
  }
  function F_(_t) {
    Bn.call(this, t, _t);
  }
  return t.$$set = (_t) => {
    "componentContext" in _t && e(0, ae = _t.componentContext), "cls" in _t && e(1, wr = _t.cls), "style" in _t && e(54, kr = _t.style), "layoutParams" in _t && e(55, Et = _t.layoutParams), "customDescription" in _t && e(56, Ir = _t.customDescription), "customPaddings" in _t && e(57, Pr = _t.customPaddings), "customActions" in _t && e(58, ur = _t.customActions), "additionalPaddings" in _t && e(59, dt = _t.additionalPaddings), "heightByAspect" in _t && e(60, At = _t.heightByAspect), "parentOf" in _t && e(53, Jt = _t.parentOf), "parentOfSimpleMode" in _t && e(61, xt = _t.parentOfSimpleMode), "replaceItems" in _t && e(62, et = _t.replaceItems), "hasInnerFocusable" in _t && e(2, pt = _t.hasInnerFocusable), "alwaysCustomFocus" in _t && e(63, ue = _t.alwaysCustomFocus), "containerElement" in _t && e(3, vt = _t.containerElement), "devapi" in _t && e(64, $t = _t.devapi), "$$scope" in _t && e(152, Qt = _t.$$scope);
  }, t.$$.update = () => {
    var _t, Qr, Fn, Wn, fn, bo, Qi, xi, $i, Qo, Ia;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(132, n = ae.origJson), t.$$.dirty[4] & /*origJson*/
    256 && n && k_(), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[3] & /*prevTriggersUnsubscribe*/
    512 | t.$$.dirty[4] & /*$isEnabled*/
    16777216 && (Ht ? (En == null || En(), e(102, En = Wt.processVariableTriggers(ae, ae.json.variable_triggers))) : En == null || En()), t.$$.dirty[0] & /*componentContext*/
    1 && Dt(e(47, o = ae.getDerivedFromVars(ae.json.focus))), t.$$.dirty[0] & /*componentContext*/
    1 && ir(e(46, i = ae.getDerivedFromVars(ae.json.border))), t.$$.dirty[0] & /*componentContext*/
    1 && pr(e(45, s = ae.getDerivedFromVars(ae.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && yt(e(44, a = ae.getDerivedFromVars(ae.json.margins))), t.$$.dirty[0] & /*componentContext*/
    1 && lr(e(43, l = ae.getDerivedFromVars(ae.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && sr(e(42, u = ae.getDerivedFromVars(ae.json.alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && Le(e(41, c = ae.getDerivedFromVars(ae.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && gt(e(40, f = ae.getDerivedFromVars(ae.json.alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && Zt(e(39, _ = ae.getDerivedFromVars(ae.json.alpha))), t.$$.dirty[0] & /*componentContext*/
    1 && Mt(e(38, h = ae.getDerivedFromVars(ae.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Ct(e(37, m = ae.getDerivedFromVars(ae.json.background))), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(36, p = ae.getDerivedFromVars(ae.json.action_animation))), t.$$.dirty[0] & /*componentContext*/
    1 && kt(e(35, w = ae.getDerivedFromVars(ae.json.visibility))), t.$$.dirty[0] & /*componentContext*/
    1 && $(e(34, k = ae.getDerivedFromVars(ae.json.transform))), t.$$.dirty[0] & /*componentContext*/
    1 && ot(e(33, N = ae.getDerivedFromVars(ae.json.transformations))), t.$$.dirty[0] & /*componentContext*/
    1 && ft(e(32, H = ae.getDerivedFromVars(ae.json.capture_focus_on_action))), t.$$.dirty[1] & /*parentOf, parentOfSimpleMode*/
    1077936128 | t.$$.dirty[2] & /*prevChilds*/
    16 && (He.forEach((Qe) => {
      Wt.unregisterParentOf(Qe);
    }), e(66, He = []), Jt && Jt.forEach((Qe) => {
      Qe != null && Qe.id && (He.push(Qe.id), Wt.registerParentOf(Qe.id, {
        replaceWith: v_,
        isSingleMode: !!xt
      }));
    })), t.$$.dirty[0] & /*hasCustomFocus, borderElemStyle*/
    131088 | t.$$.dirty[2] & /*strokeWidth, strokeColor, cornersRadius, cornerRadius, borderStyle*/
    992 | t.$$.dirty[4] & /*$jsonFocus, $jsonBorder*/
    8421376) {
      const Qe = Oo && (ut != null && ut.border) ? ut.border : vr;
      let $r = {}, jn = {}, Tn = !1, en = "";
      if (Qe) {
        if (Zr(Qe.has_shadow, !1)) {
          const dn = Qe.shadow;
          dn ? $r["box-shadow"] = Nm(dn) : $r["box-shadow"] = "0 1px 2px 0 rgba(0,0,0,.18), 0 0 0 1px rgba(0,0,0,.07)";
        }
        if (Qe.stroke) {
          Tn = !0, e(68, zt = rn(Qe.stroke.width, zt)), e(69, Je = gr(Qe.stroke.color, 1, Je));
          const dn = ((_t = Qe.stroke.style) == null ? void 0 : _t.type) === "dashed" ? "dashed" : "solid";
          jn["--divkit-border"] = `${ge(zt + 1)} ${dn} ${Je}`;
        }
        if (Qe.corners_radius && typeof Qe.corners_radius == "object") {
          e(71, Ot = Pm(Qe.corners_radius, Ot)), $r["border-radius"] = Hs(Ot);
          const dn = {};
          ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((qn) => {
            dn[qn] = (Ot[qn] || 0) + 1;
          }), jn["--divkit-border-radius"] = Hs(dn);
        } else Qe.corner_radius && (e(70, at = rn(Qe.corner_radius, at)), e(71, Ot = {
          "top-left": at,
          "top-right": at,
          "bottom-right": at,
          "bottom-left": at
        }), $r["border-radius"] = ge(at), jn["--divkit-border-radius"] = ge(at + 1));
        if (Tn && zt && (Qe.corners_radius || Qe.corner_radius)) {
          let dn = { ...Ot };
          ["top-left", "top-right", "bottom-right", "bottom-left"].forEach((qn) => {
            dn[qn] = (dn[qn] || 0) + zt / 2;
          }), en = Hs(dn);
        }
      }
      e(67, ke = ei($r, ke)), e(4, P = ei(jn, P)), e(22, Lt = Tn), e(5, Ar = en);
    }
    if (t.$$.dirty[1] & /*customPaddings*/
    67108864 | t.$$.dirty[2] & /*selfPadding*/
    1024 | t.$$.dirty[4] & /*$jsonPaddings*/
    4194304 && e(72, _r = ni(
      rr && !Pr ? rr : void 0,
      _r
    )), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[1] & /*additionalPaddings*/
    268435456 | t.$$.dirty[2] & /*selfPadding*/
    1024 && e(119, z = so(Mm(_r, dt), we)), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[2] & /*margin*/
    2048 | t.$$.dirty[4] & /*$jsonMargins*/
    524288 && e(73, Fr = us(Ft, we, Fr)), t.$$.dirty[0] & /*componentContext*/
    1 && e(130, Fe = ae.json.responsive), t.$$.dirty[3] & /*responsiveMobileQuery, responsiveTabletQuery*/
    3072 | t.$$.dirty[4] & /*responsiveConfig*/
    64 && (Fe && typeof Fe == "object" && typeof window < "u" ? (Eo || (e(103, Eo = window.matchMedia("(max-width: 767px)")), e(104, Bo = window.matchMedia("(min-width: 768px) and (max-width: 1023px)")), Eo.addEventListener("change", Xi), Bo.addEventListener("change", Xi)), Xi()) : e(105, di = "desktop")), t.$$.dirty[3] & /*responsiveBreakpoint*/
    4096 | t.$$.dirty[4] & /*responsiveConfig*/
    64 && e(126, Q = di !== "desktop" && (Fe == null ? void 0 : Fe[di]) || null), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[4] & /*activeResponsive*/
    4 && e(128, fe = (() => {
      const Qe = Q == null ? void 0 : Q.alignment_horizontal;
      if (Qe === "left" || Qe === "center" || Qe === "right" || Qe === "start" || Qe === "end")
        return (we === "ltr" ? Nu : zu)[Qe];
    })()), t.$$.dirty[0] & /*componentContext, $direction*/
    524289 | t.$$.dirty[1] & /*layoutParams*/
    16777216 | t.$$.dirty[2] & /*widthNum, widthMods*/
    20480 | t.$$.dirty[4] & /*$jsonWidth, $jsonMargins, responsiveAlignmentHorizontal, $jsonAlignmentHorizontal*/
    3670032) {
      let Qe, $r, jn, Tn, en = {}, dn = 0, qn = 0, Ro = !1, Ho = !1;
      const kn = (Qr = ae.json.width) == null ? void 0 : Qr.type;
      if (kn === "fixed")
        e(76, ln = rn(Te == null ? void 0 : Te.value, ln)), $r = ge(ln);
      else if (kn === "wrap_content" || (kn === "match_parent" || !kn) && Et.parentHorizontalWrapContent)
        Qe = "content", (kn === "wrap_content" && (Te != null && Te.constrained) || (kn === "match_parent" || !kn) && Et.parentHorizontalWrapContent) && (en["width-constrained"] = !0, Et.parentContainerOrientation === "horizontal" && (qn = 1)), (kn === "match_parent" || !kn) && ae.logError(X(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
      else if (Qe = "parent", Et.parentContainerOrientation === "vertical" && Et.parentContainerWrap && (Ho = !0, ae.logError(X(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), Et.parentContainerOrientation === "vertical" && Et.parentContainerKnownWidth || Et.stretchWidth || Et.parentContainerOrientation === "horizontal" && Et.treatMatchParentAs100) {
        const xr = (Wn = (Fn = we === "ltr" ? Ft == null ? void 0 : Ft.start : Ft == null ? void 0 : Ft.end) != null ? Fn : Ft == null ? void 0 : Ft.left) != null ? Wn : 0, Mn = (bo = (fn = we === "ltr" ? Ft == null ? void 0 : Ft.end : Ft == null ? void 0 : Ft.start) != null ? fn : Ft == null ? void 0 : Ft.right) != null ? bo : 0, An = `calc(100% - ${un(xr + Mn)})`;
        Et.stretchWidth ? ($r = "0", jn = An) : $r = An;
      } else Et.parentContainerOrientation === "horizontal" && (dn = Te && "weight" in Te && Te.weight || 1, Et.parentContainerWrap && (Ro = !0));
      if (kn === "wrap_content" || kn === "match_parent") {
        const xr = Te;
        let Mn, An;
        xr.min_size && zn(xr.min_size.value) && (Mn = xr.min_size.value), xr.max_size && zn(xr.max_size.value) && (An = xr.max_size.value), Mn !== void 0 && An !== void 0 && Mn > An && (ae.logError(X(new Error("Element has incorrect width constraints (min size is bigger than max size)."), {
          additional: {
            id: ae.json.id,
            minSize: Mn + "dp",
            maxSize: An + "dp"
          }
        })), Mn = An = void 0), Mn !== void 0 && (jn = ge(Mn)), An !== void 0 && (Tn = ge(An));
      }
      if (fe)
        en["halign-self"] = fe;
      else if (Qe === "parent")
        en["halign-self"] = "stretch";
      else {
        const xr = Gt;
        xr === "left" || xr === "center" || xr === "right" || xr === "start" || xr === "end" ? en["halign-self"] = (we === "ltr" ? Nu : zu)[xr] : en["halign-self"] = Et.parentHAlign || "start";
      }
      Qe && (en.width = Qe), e(75, Se = $r), e(6, Xr = jn), e(7, Ur = Tn), e(77, cn = dn), e(78, y = qn), e(74, wn = ei(en, wn)), e(79, A = Ro), e(23, S = Ho);
    }
    if (t.$$.dirty[4] & /*activeResponsive*/
    4 && e(127, re = (() => {
      const Qe = Q == null ? void 0 : Q.alignment_vertical;
      if (Qe === "top" || Qe === "center" || Qe === "bottom" || Qe === "baseline")
        return Lu[Qe];
    })()), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*heightByAspect, layoutParams*/
    553648128 | t.$$.dirty[2] & /*heightNum, heightMods*/
    1310720 | t.$$.dirty[4] & /*$jsonHeight, $jsonMargins, responsiveAlignmentVertical, $jsonAlignmentVertical*/
    917512) {
      let Qe, $r, jn, Tn, en = {}, dn = 0, qn = 0, Ro = !1, Ho = !1;
      const kn = (Qi = ae.json.height) == null ? void 0 : Qi.type;
      if (!At) if (kn === "fixed")
        e(82, tr = rn(Ie == null ? void 0 : Ie.value, tr)), $r = ge(tr);
      else if (kn === "match_parent" && !Et.parentVerticalWrapContent)
        if (Qe = "parent", Et.parentContainerOrientation === "horizontal" && Et.parentContainerWrap && (Ho = !0, ae.logError(X(new Error("Cannot place a match_parent items on the cross-axis of wrap"), { level: "error" }))), Et.parentContainerOrientation === "horizontal" && Et.parentContainerKnownHeight || Et.stretchHeight || Et.parentContainerOrientation === "vertical" && Et.treatMatchParentAs100) {
          const xr = (xi = Ft == null ? void 0 : Ft.top) != null ? xi : 0, Mn = ($i = Ft == null ? void 0 : Ft.bottom) != null ? $i : 0, An = `calc(100% - ${un(xr + Mn)})`;
          Et.stretchHeight ? ($r = "0", jn = An) : $r = An;
        } else Et.parentContainerOrientation === "vertical" && (dn = (Ie == null ? void 0 : Ie.weight) || 1, Et.parentContainerWrap && (Ro = !0));
      else
        Qe = "content", (kn === "wrap_content" && (Ie != null && Ie.constrained) || kn === "match_parent" && Et.parentVerticalWrapContent) && (en["height-constrained"] = !0, Et.parentContainerOrientation === "vertical" && (qn = 1)), kn === "match_parent" && ae.logError(X(new Error("Incorrect child size. Container with wrap_content size contains child with match_parent size along the main axis"), { level: "warn" }));
      if (!At && (kn === "match_parent" || kn === "wrap_content")) {
        const xr = Ie;
        let Mn, An;
        xr.min_size && zn(xr.min_size.value) && (Mn = xr.min_size.value), xr.max_size && zn(xr.max_size.value) && (An = xr.max_size.value), Mn !== void 0 && An !== void 0 && Mn > An && (ae.logError(X(new Error("Element has incorrect height constraints (min size is bigger than max size)."), {
          additional: {
            id: ae.json.id,
            minSize: Mn + "dp",
            maxSize: An + "dp"
          }
        })), Mn = An = void 0), Mn !== void 0 && (jn = ge(Mn)), An !== void 0 && (Tn = ge(An));
      }
      if (re)
        en["valign-self"] = re;
      else if (Qe === "parent")
        en["valign-self"] = "stretch";
      else {
        const xr = Ee;
        xr === "top" || xr === "center" || xr === "bottom" || xr === "baseline" && Et.parentContainerOrientation === "horizontal" ? en["valign-self"] = Lu[xr] : en["valign-self"] = Et.parentVAlign || "start";
      }
      Qe && (en.height = Qe), e(81, O = $r), e(8, tt = jn), e(9, De = Tn), e(83, se = dn), e(84, We = qn), e(80, ee = ei(en, ee)), e(85, Nt = Ro), e(24, St = Ho);
    }
    if (t.$$.dirty[1] & /*layoutParams*/
    16777216 && e(131, oe = Et.overlapParent ? !0 : void 0), t.$$.dirty[1] & /*layoutParams*/
    16777216 && e(121, _e = Et.gridArea ? `${Et.gridArea.y + 1}/${Et.gridArea.x + 1}/span ${Et.gridArea.rowSpan}/span ${Et.gridArea.colSpan}` : void 0), t.$$.dirty[2] & /*alpha*/
    16777216 | t.$$.dirty[4] & /*$jsonAlpha*/
    65536 && (e(86, Cr = Dm(It, Cr)), e(87, Gr = Cr === 1 ? void 0 : Cr)), t.$$.dirty[0] & /*$jsonAccessibility*/
    1048576 | t.$$.dirty[1] & /*customDescription*/
    33554432 && (e(21, B = void 0), lt && !Ir)) {
      const Qe = Yo(lt);
      Qe && (e(21, B = {}), e(21, B["aria-label"] = Qe, B));
    }
    if (t.$$.dirty[0] & /*hasCustomFocus, background, backgroundRadius, hasSeparateBg, $direction*/
    658464 | t.$$.dirty[4] & /*$jsonFocus, $jsonBackground*/
    49152 && (e(10, an = Oo && (ut != null && ut.background) ? ut.background : ze), e(88, Mr = {}), e(11, mn = !1), Array.isArray(an) && (e(11, mn = an.some((Qe) => Qe.type === "image" || Qe.type === "nine_patch_image") || !!Ar), !mn))) {
      const Qe = bl(an, we);
      e(88, Mr["background-color"] = Qe.color, Mr), e(88, Mr["background-image"] = Qe.image, Mr), e(88, Mr["background-size"] = Qe.size, Mr), e(88, Mr["background-position"] = Qe.position, Mr), e(88, Mr["background-repeat"] = "no-repeat", Mr);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*hasStateChangeTrigger*/
    134217728 && (e(90, Nn = void 0), Vn && ae.id && ae.json.transition_in && Wt.isRunning("stateChange") && e(90, Nn = !0)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*hasStateChangeTrigger*/
    134217728 && (e(92, b = void 0), Vn && ae.id && Wt.isRunning("stateChange") && yr.hasTransitionChange(ae.id) && e(92, b = !0)), t.$$.dirty[0] & /*componentContext, pressStartActions, pressEndActions, hoverStartActions, hoverEndActions*/
    61441 | t.$$.dirty[1] & /*customActions*/
    134217728) {
      const Qe = ae.json;
      let $r = Qe.actions || Qe.action && [Qe.action] || [], jn = Qe.doubletap_actions || [], Tn = Qe.longtap_actions || [], en = ((Qo = Qe.focus) == null ? void 0 : Qo.on_focus) || [], dn = ((Ia = Qe.focus) == null ? void 0 : Ia.on_blur) || [], qn = Qe.press_start_actions || [], Ro = Qe.press_end_actions || [], Ho = Qe.hover_start_actions || [], kn = Qe.hover_end_actions || [];
      ae.fakeElement && ae.fakeElement !== oi ? ($r = [], jn = [], Tn = [], en = [], dn = []) : (Array.isArray($r) || ($r = [], ae.logError(X(new Error("Actions should be array")))), Array.isArray(jn) || (jn = [], ae.logError(X(new Error("DoubleTapActions should be array")))), Array.isArray(Tn) || (Tn = [], ae.logError(X(new Error("LongTapActions should be array")))), Array.isArray(en) || (en = [], ae.logError(X(new Error("FocusActions should be array")))), Array.isArray(dn) || (dn = [], ae.logError(X(new Error("BlurActions should be array")))), Array.isArray(qn) || (qn = [], ae.logError(X(new Error("PressStartActions should be array")))), Array.isArray(Ro) || (Ro = [], ae.logError(X(new Error("PressEndActions should be array")))), Array.isArray(Ho) || (Ho = [], ae.logError(X(new Error("HoverStartActions should be array")))), Array.isArray(kn) || (kn = [], ae.logError(X(new Error("HoverEndActions should be array"))))), ($r.length || jn.length || Tn.length || qt.length || Yt.length || qr.length || Nr.length) && ur && ($r = [], jn = [], Tn = [], e(12, qt = []), e(13, Yt = []), e(14, qr = []), e(15, Nr = []), ae.logError(X(new Error(`Cannot use action on component "${ur}"`)))), e(25, V = $r), e(26, te = jn), e(27, R = Tn), Ve = en, ve = dn, e(12, qt = qn), e(13, Yt = Ro), e(14, qr = Ho), e(15, Nr = kn);
    }
    if (t.$$.dirty[0] & /*actionAnimationList*/
    65536 | t.$$.dirty[4] & /*$jsonActionAnimation*/
    8192 && Z && (e(16, Hr = cs(Z)), e(93, mo = Hr.map(j_).filter(Boolean).join(", "))), t.$$.dirty[4] & /*$jsonCaptureFocusOnAction*/
    4096 && typeof it == "boolean" && e(28, vn = it), t.$$.dirty[3] & /*visibility, isVisibilityInited*/
    96 | t.$$.dirty[4] & /*$jsonVisibility*/
    2048) {
      const Qe = jr, $r = Tm(ct, jr);
      Qe !== $r && (rt && (jr === "visible" || $r === "visible") ? C_($r) : e(99, jr = $r)), rt || e(98, rt = !0);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*currentNode*/
    8 | t.$$.dirty[3] & /*prevExtensionsVal*/
    256 && ae.json && d && !Ki(ae.json.extensions, Zo)) {
      let Qe = e(101, Zo = ae.json.extensions);
      Sn().then(() => {
        if (!(Qe !== Zo || !d) && (Fa(), Array.isArray(ae.json.extensions))) {
          const $r = Wt.getExtensionContext(ae);
          je = ae.json.extensions.map((jn) => {
            var dn;
            const Tn = jn.id;
            if (!Tn)
              return;
            const en = Wt.getExtension(Tn, jn.params);
            return en && ((dn = en.mountView) == null || dn.call(en, d, $r)), en;
          }).filter(zo);
        }
      });
    }
    if (t.$$.dirty[4] & /*activeResponsive*/
    4 && e(129, he = Q == null ? void 0 : Q.visibility), t.$$.dirty[0] & /*hasCustomFocus, componentContext*/
    131073 | t.$$.dirty[1] & /*layoutParams*/
    16777216 | t.$$.dirty[2] & /*widthMods, heightMods, stateChangingInProgress, visibilityChangingInProgress, transitionChangeInProgress*/
    1879314432 | t.$$.dirty[3] & /*visibility, actionAnimationTransition*/
    65 | t.$$.dirty[4] & /*responsiveAlignmentHorizontal, responsiveAlignmentVertical, parentOverlapMod, responsiveVisibility*/
    184 && e(31, T = {
      ...wn,
      ...ee,
      ...fe ? {
        "halign-self": fe
      } : {},
      ...re ? {
        "valign-self": re
      } : {},
      "parent-overlap": oe,
      "scroll-snap": Et.scrollSnap,
      "hide-on-transition-in": Nn || Kt || b,
      visibility: he || jr,
      "has-action-animation": !!mo,
      "parent-flex": Et.parentContainerOrientation || void 0,
      "parent-grid": !!Et.gridArea || void 0,
      "has-custom-focus": !!(Oo && ae.json.focus)
    }), t.$$.dirty[4] & /*$jsonTransformations, $jsonTransform*/
    1536) {
      let Qe;
      Array.isArray(Be) ? Qe = Be : Ue && Ue.rotation !== void 0 && (Qe = [
        {
          type: "rotation",
          angle: Ue.rotation,
          pivot_x: Ue.pivot_x,
          pivot_y: Ue.pivot_y
        }
      ]), Qe ? e(100, nn = Bm(Qe)) : e(100, nn = void 0);
    }
    if (t.$$.dirty[2] & /*widthFill, heightFill, widthFlexGrow, heightFlexGrow*/
    10649600 && e(115, Y = A || Nt ? "100%" : cn || se ? 0 : void 0), t.$$.dirty[0] & /*componentContext*/
    1 && e(30, le = ae.json["custom-class"] || ""), t.$$.dirty[0] & /*componentContext*/
    1 && e(113, E = ae.json.position), t.$$.dirty[0] & /*componentContext*/
    1 && e(114, D = ae.json.sticky_top), t.$$.dirty[0] & /*componentContext*/
    1 && e(112, M = ae.json.sticky_bottom), t.$$.dirty[0] & /*componentContext*/
    1 && e(111, W = ae.json.z_index), t.$$.dirty[0] & /*componentContext*/
    1 && e(110, q = ae.json.cursor), t.$$.dirty[0] & /*componentContext*/
    1 && e(109, be = ae.json.backdrop_filter), t.$$.dirty[0] & /*componentContext*/
    1 && e(108, Ae = ae.json.overflow), t.$$.dirty[0] & /*componentContext*/
    1 && e(107, Ce = ae.json["box-shadow"]), t.$$.dirty[0] & /*componentContext*/
    1 && e(116, me = ae.json.custom_transition), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[4] & /*activeResponsive*/
    4 && e(120, Ke = (() => {
      if (!(Q != null && Q.paddings)) return;
      const Qe = Q.paddings;
      return so(ni(Qe, null), we);
    })()), t.$$.dirty[0] & /*$direction*/
    524288 | t.$$.dirty[4] & /*activeResponsive*/
    4 && e(118, Ye = (() => {
      if (!(Q != null && Q.margins)) return;
      const Qe = Q.margins;
      return us(Qe, we, "");
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(123, Xe = (() => {
      if (Q != null && Q["max-width"] && typeof Q["max-width"] == "string")
        return Q["max-width"];
      if (!(Q != null && Q.max_width)) return;
      const Qe = Q.max_width;
      if (Qe.type === "fixed" && Qe.value) return Qe.value + "px";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(124, ye = (() => {
      if (!(Q != null && Q.width)) return;
      const Qe = Q.width;
      if (Qe.type === "fixed" && Qe.value) return ge(Qe.value);
      if (Qe.type === "match_parent") return "100%";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(122, Me = (() => {
      if (!(Q != null && Q.height)) return;
      const Qe = Q.height;
      if (Qe.type === "fixed" && Qe.value) return ge(Qe.value);
      if (Qe.type === "match_parent") return "100%";
    })()), t.$$.dirty[4] & /*activeResponsive*/
    4 && e(117, ce = (Q == null ? void 0 : Q.opacity) !== void 0 ? Q.opacity : void 0), t.$$.dirty[0] & /*componentContext*/
    1 && e(125, de = ae.json.hover), t.$$.dirty[0] & /*hoverClassName*/
    262144 | t.$$.dirty[3] & /*hoverStyleEl*/
    8192 | t.$$.dirty[4] & /*hoverConfig*/
    2)
      if (de && typeof de == "object" && typeof document < "u") {
        Zi || e(18, Zi = "divkit-hover-" + Math.random().toString(36).slice(2, 9));
        let Qe = "";
        de.background_color && (Qe += `background-color: ${de.background_color} !important;`), de.opacity !== void 0 && (Qe += `opacity: ${de.opacity} !important;`), de.scale !== void 0 && (Qe += `scale: ${de.scale} !important;`), de.color && (Qe += `color: ${de.color} !important;`), de.border_color && (Qe += `border-color: ${de.border_color} !important;`), (de["box-shadow"] || de.box_shadow) && (Qe += `box-shadow: ${de["box-shadow"] || de.box_shadow} !important;`), Qe && (ao || (e(106, ao = document.createElement("style")), document.head.appendChild(ao)), e(106, ao.textContent = `.${Zi}:hover { ${Qe} }`, ao));
      } else ao && (ao.remove(), e(106, ao = null), e(18, Zi = ""));
    t.$$.dirty[0] & /*widthMin, widthMax, componentContext, heightMin, heightMax*/
    961 | t.$$.dirty[1] & /*style*/
    8388608 | t.$$.dirty[2] & /*backgroundStyle, borderStyle, width, height, margin, opacity, widthFlexGrow, heightFlexGrow, widthFlexShrink, heightFlexShrink*/
    107587616 | t.$$.dirty[3] & /*responsiveMaxWidth, responsiveHeight, gridArea, responsivePadding, padding, responsiveMargin, responsiveOpacity, customTransition, actionAnimationTransition, transform, flexBasis, customPosition, customStickyTop, customStickyBottom, customZIndex, customCursor, customBackdropFilter, customOverflow, customBoxShadow, animationOpacityStart, animationOpacityEnd, animationScaleStart, animationScaleEnd*/
    2147467423 | t.$$.dirty[4] & /*responsiveWidth*/
    1 && e(29, ne = {
      ...kr,
      ...Mr,
      ...ke,
      width: ye || Se,
      "min-width": Xr,
      "max-width": Xe || Ur || (() => {
        const Qe = ae.json.max_width;
        if ((Qe == null ? void 0 : Qe.type) === "fixed" && (Qe != null && Qe.value)) return ge(Qe.value);
      })(),
      height: Me || O,
      "min-height": tt,
      // input max-height
      "max-height": De || (kr == null ? void 0 : kr["max-height"]) || (() => {
        const Qe = ae.json.max_height;
        if ((Qe == null ? void 0 : Qe.type) === "fixed" && (Qe != null && Qe.value)) return ge(Qe.value);
      })(),
      "grid-area": _e,
      padding: Ke || z,
      margin: Ye || Fr,
      opacity: ce !== void 0 ? ce : Gr,
      transition: me || mo,
      "transform-origin": nn ? "0 0" : void 0,
      transform: nn,
      "flex-grow": cn || se || void 0,
      "flex-shrink": y || We ? 1 : void 0,
      "flex-basis": Y,
      position: E,
      top: E === "sticky" && D !== void 0 ? ge(D) : void 0,
      bottom: E === "sticky" && M !== void 0 ? ge(M) : void 0,
      "z-index": W,
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
    ae,
    wr,
    pt,
    vt,
    P,
    Ar,
    Xr,
    Ur,
    tt,
    De,
    an,
    mn,
    qt,
    Yt,
    qr,
    Nr,
    Hr,
    Oo,
    Zi,
    we,
    lt,
    B,
    Lt,
    S,
    St,
    V,
    te,
    R,
    vn,
    ne,
    le,
    T,
    H,
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
    Da,
    A_,
    S_,
    Jt,
    kr,
    Et,
    Ir,
    Pr,
    ur,
    dt,
    At,
    xt,
    et,
    ue,
    $t,
    d,
    He,
    ke,
    zt,
    Je,
    at,
    Ot,
    _r,
    Fr,
    wn,
    Se,
    ln,
    cn,
    y,
    A,
    ee,
    O,
    tr,
    se,
    We,
    Nt,
    Cr,
    Gr,
    Mr,
    Vn,
    Nn,
    Kt,
    b,
    mo,
    ro,
    no,
    $n,
    qi,
    rt,
    jr,
    nn,
    Zo,
    En,
    Eo,
    Bo,
    di,
    ao,
    Ce,
    Ae,
    be,
    q,
    W,
    M,
    E,
    D,
    Y,
    me,
    ce,
    Ye,
    z,
    Ke,
    _e,
    Me,
    Xe,
    ye,
    de,
    Q,
    re,
    fe,
    he,
    Fe,
    oe,
    n,
    Ue,
    Be,
    ct,
    it,
    Z,
    ze,
    ut,
    It,
    Ee,
    Ie,
    Ft,
    Gt,
    Te,
    rr,
    vr,
    Ht,
    mt,
    V_,
    F_,
    Qt
  ];
}
class hn extends Br {
  constructor(r) {
    super(), Or(
      this,
      r,
      r0,
      t0,
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
const n0 = "appkit-text", o0 = "appkit-text_halign_start", i0 = "appkit-text_halign_center", s0 = "appkit-text_halign_end", l0 = "appkit-text_valign_start", a0 = "appkit-text_valign_center", u0 = "appkit-text_valign_end", c0 = "appkit-text_valign_baseline", f0 = "appkit-text__inner", d0 = "appkit-text_singleline", _0 = "appkit-text_multiline", p0 = "appkit-text_truncate_none", g0 = "appkit-text__inner_gradient", h0 = "appkit-text__image", m0 = "appkit-text__image_hidden", co = {
  "text-range": "appkit-text-range",
  text: n0,
  text_halign_start: o0,
  text_halign_center: i0,
  text_halign_end: s0,
  text_valign_start: l0,
  text_valign_center: a0,
  text_valign_end: u0,
  text_valign_baseline: c0,
  text__inner: f0,
  text_singleline: d0,
  text_multiline: _0,
  text_truncate_none: p0,
  "text__inner_has-cloud-bg": "appkit-text__inner_has-cloud-bg",
  "text__inner_cloud-bg": "appkit-text__inner_cloud-bg",
  text__inner_gradient: g0,
  "text__image-wrapper": "appkit-text__image-wrapper",
  "text__image-wrapper_crop": "appkit-text__image-wrapper_crop",
  "text__image-wrapper_align_top": "appkit-text__image-wrapper_align_top",
  "text__image-wrapper_align_center": "appkit-text__image-wrapper_align_center",
  "text__image-wrapper_align_bottom": "appkit-text__image-wrapper_align_bottom",
  "text__image-wrapper_align_baseline": "appkit-text__image-wrapper_align_baseline",
  text__image: h0,
  text__image_hidden: m0,
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
function Hn(t, r) {
  const e = Number(t);
  return Number.isNaN(e) || e <= 0 ? r : e;
}
function b0(t) {
  if (t === "light" || t === "medium" || t === "bold" || t === "regular" || t === "semi_bold")
    return t === "medium" ? 500 : t === "bold" ? 700 : t === "light" ? 300 : t === "semi_bold" ? 600 : 400;
}
function ii(t, r, e) {
  return typeof r == "number" && r > 0 ? r : b0(t) || e;
}
function ea(t, r) {
  if (!t)
    return {};
  const e = {};
  for (const n of ["left", "top", "right", "bottom", "start", "end"]) {
    const o = t[n];
    o && (e[n] = o * r);
  }
  return e;
}
function ki(t) {
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
function Bu(t) {
  let r, e, n, o, i, s, a;
  return {
    c() {
      r = tn("svg"), e = tn("defs"), n = tn("filter"), o = tn("feGaussianBlur"), i = tn("feColorMatrix"), a = tn("feBlend"), g(o, "in", "SourceGraphic"), g(o, "result", "blurred"), g(o, "stdDeviation", "3"), g(i, "in", "blurred"), g(i, "result", "withMatrix"), g(i, "type", "matrix"), g(i, "values", s = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 " + 2 * /*borderRadius*/
      t[5] + " -" + /*borderRadius*/
      t[5]), g(a, "in", "SourceGraphic"), g(a, "in2", "withMatrix"), g(
        n,
        "id",
        /*cloudFilterId*/
        t[11]
      ), g(r, "class", So["text-range__cloud-svg"]);
    },
    m(l, u) {
      J(l, r, u), bt(r, e), bt(e, n), bt(n, o), bt(n, i), bt(n, a);
    },
    p(l, u) {
      u[0] & /*borderRadius*/
      32 && s !== (s = "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 " + 2 * /*borderRadius*/
      l[5] + " -" + /*borderRadius*/
      l[5]) && g(i, "values", s);
    },
    d(l) {
      l && G(r);
    }
  };
}
function Ru(t) {
  let r;
  return {
    c() {
      r = Pe("span"), g(r, "class", So["text-range__top-offset"]), I(
        r,
        "margin-top",
        /*topOffset*/
        t[9]
      );
    },
    m(e, n) {
      J(e, r, n);
    },
    p(e, n) {
      n[0] & /*topOffset*/
      512 && I(
        r,
        "margin-top",
        /*topOffset*/
        e[9]
      );
    },
    d(e) {
      e && G(r);
    }
  };
}
function Hu(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Pe("div"), e = Pe("div"), n = Pe("div"), o = Pe("div"), i = Pe("div"), s = Pe("div"), g(r, "class", So["text-range__mask-animation"]), g(e, "class", So["text-range__mask-animation"]), g(n, "class", So["text-range__mask-animation"]), g(o, "class", So["text-range__mask-animation"]), g(i, "class", So["text-range__mask-animation"]), g(s, "class", So["text-range__mask-animation"]);
    },
    m(a, l) {
      J(a, r, l), J(a, e, l), J(a, n, l), J(a, o, l), J(a, i, l), J(a, s, l);
    },
    d(a) {
      a && (G(r), G(e), G(n), G(o), G(i), G(s));
    }
  };
}
function y0(t) {
  let r = (
    /*text*/
    (t[1] || "​") + ""
  ), e, n = (
    /*maskColor*/
    t[4] && Hu()
  );
  return {
    c() {
      n && n.c(), e = On(r);
    },
    m(o, i) {
      n && n.m(o, i), J(o, e, i);
    },
    p(o, i) {
      /*maskColor*/
      o[4] ? n || (n = Hu(), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null), i[0] & /*text*/
      2 && r !== (r = /*text*/
      (o[1] || "​") + "") && Jn(e, r);
    },
    d(o) {
      o && G(e), n && n.d(o);
    }
  };
}
function w0(t) {
  let r, e, n, o, i = (
    /*cloudBg*/
    t[3] && /*hasCloudBg*/
    t[6] && Bu(t)
  ), s = (
    /*topOffset*/
    t[9] && Ru(t)
  );
  return n = new yl({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      cls: ht(
        "text-range",
        So,
        /*mods*/
        t[8]
      ),
      actions: (
        /*actions*/
        t[2]
      ),
      style: cr(
        /*style*/
        t[7]
      ),
      $$slots: { default: [y0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      i && i.c(), r = er(), s && s.c(), e = er(), Ut(n.$$.fragment);
    },
    m(a, l) {
      i && i.m(a, l), J(a, r, l), s && s.m(a, l), J(a, e, l), Bt(n, a, l), o = !0;
    },
    p(a, l) {
      /*cloudBg*/
      a[3] && /*hasCloudBg*/
      a[6] ? i ? i.p(a, l) : (i = Bu(a), i.c(), i.m(r.parentNode, r)) : i && (i.d(1), i = null), /*topOffset*/
      a[9] ? s ? s.p(a, l) : (s = Ru(a), s.c(), s.m(e.parentNode, e)) : s && (s.d(1), s = null);
      const u = {};
      l[0] & /*componentContext*/
      1 && (u.componentContext = /*componentContext*/
      a[0]), l[0] & /*mods*/
      256 && (u.cls = ht(
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
      o || (L(n.$$.fragment, a), o = !0);
    },
    o(a) {
      x(n.$$.fragment, a), o = !1;
    },
    d(a) {
      a && (G(r), G(e)), i && i.d(a), s && s.d(a), Rt(n, a);
    }
  };
}
function k0(t, r, e) {
  let n, o, i, s, a, l, u, c, f, { componentContext: _ } = r, { text: h } = r, { rootFontSize: m } = r, { textStyles: p = {} } = r, { singleline: w = !1 } = r, { actions: k = void 0 } = r, { cloudBg: N = !1 } = r, { cloudBgId: H = "" } = r, { customLineHeight: z = null } = r;
  const oe = Tr(Yr), _e = oe.direction;
  yn(t, _e, (ye) => e(35, f = ye));
  const T = N && H || oe.genId("text-range") || "";
  let Y = "none", le = 12, E = 1.25, D = "", M, W = "", q = "", be = "", Ae, Ce = null, me, Fe, Q = !1, Ke, Ye, Xe;
  return t.$$set = (ye) => {
    "componentContext" in ye && e(0, _ = ye.componentContext), "text" in ye && e(1, h = ye.text), "rootFontSize" in ye && e(12, m = ye.rootFontSize), "textStyles" in ye && e(13, p = ye.textStyles), "singleline" in ye && e(14, w = ye.singleline), "actions" in ye && e(2, k = ye.actions), "cloudBg" in ye && e(3, N = ye.cloudBg), "cloudBgId" in ye && e(15, H = ye.cloudBgId), "customLineHeight" in ye && e(16, z = ye.customLineHeight);
  }, t.$$.update = () => {
    var ye, Me, ce, he, fe, re, de, ne;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && _.json && (e(17, Y = "none"), e(18, le = 12), e(19, E = 1.25), e(20, D = ""), e(21, M = void 0), e(22, W = ""), e(23, q = ""), e(24, be = ""), e(25, Ae = void 0), e(26, Ce = null), e(27, me = void 0), e(28, Fe = void 0), e(29, Q = !1), e(4, Ke = void 0), e(30, Ye = void 0), e(31, Xe = void 0)), t.$$.dirty[0] & /*textStyles*/
    8192) {
      let we = "none";
      (p.underline || p.strike) && (p.underline === "single" && p.strike === "single" ? we = "both" : p.underline === "single" ? we = "underline" : p.strike === "single" && (we = "strike")), e(17, Y = we);
    }
    if (t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && e(18, le = Hn(p.font_size, le)), t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && Pn(p.line_height) && e(19, E = Number(p.line_height) / le), t.$$.dirty[0] & /*textStyles*/
    8192 && zn(p.letter_spacing) && e(20, D = ge(p.letter_spacing)), t.$$.dirty[0] & /*textStyles, fontWeight*/
    2105344 && (e(21, M = ii(p.font_weight, p.font_weight_value, M)), typeof p.font_family == "string" && p.font_family ? e(22, W = oe.typefaceProvider(p.font_family, { fontWeight: M || 400 })) : e(22, W = "")), t.$$.dirty[0] & /*textStyles, fontVariationSettings*/
    8396800) {
      const we = ki(p.font_variation_settings);
      we !== q && e(23, q = we);
    }
    if (t.$$.dirty[0] & /*textStyles, color*/
    16785408 && e(24, be = gr(p.text_color, 1, be)), t.$$.dirty[0] & /*textStyles*/
    8192 && e(9, n = p.top_offset ? ge(p.top_offset) : ""), t.$$.dirty[0] & /*textStyles*/
    8192 && e(6, o = ((ye = p.background) == null ? void 0 : ye.type) === "cloud"), t.$$.dirty[0] & /*textStyles*/
    8192 && e(33, i = ((Me = p.background) == null ? void 0 : Me.type) === "cloud" ? p.background.paddings : void 0), t.$$.dirty[0] & /*textStyles, cloudBg, hasCloudBg, fontSize*/
    270408 | t.$$.dirty[1] & /*$direction*/
    16) {
      const we = p.mask, Ue = !!(we && (we.type === "solid" || we.type === "particles") && we.is_enabled !== !1 && we.color);
      if (N || Ue ? e(25, Ae = "transparent") : e(25, Ae = void 0), e(29, Q = !1), e(4, Ke = void 0), e(30, Ye = void 0), e(31, Xe = void 0), N)
        o ? e(28, Fe = U_(p.background.color, 255, "transparent")) : e(28, Fe = void 0);
      else if (we && Ue) {
        if (we.type === "solid")
          e(28, Fe = gr(we.color));
        else if (we.type === "particles") {
          const Ge = Hn((ce = we.particle_size) == null ? void 0 : ce.value, 1), $ = ge(Ge * 10 / le), Be = Hn(we.density, 0.8), Ne = gr(we.color);
          e(28, Fe = void 0), e(4, Ke = Ne), e(30, Ye = $), e(31, Xe = String(Be)), e(29, Q = we.is_animated === !0);
        }
      } else ((he = p.background) == null ? void 0 : he.type) === "solid" ? e(28, Fe = bl([p.background], f).color) : e(28, Fe = void 0);
    }
    t.$$.dirty[0] & /*textStyles*/
    8192 && ((fe = p.border) != null && fe.stroke && p.border.stroke.color && gr(p.border.stroke.color) !== "transparent" && Pn(p.border.stroke.width) && ((re = p.background) == null ? void 0 : re.type) !== "cloud" ? e(26, Ce = {
      color: p.border.stroke.color,
      width: p.border.stroke.width,
      corner_radius: p.border.corner_radius
    }) : e(26, Ce = null)), t.$$.dirty[0] & /*cloudBg, hasCloudBg, textStyles, border*/
    67117128 && e(5, s = N ? o && p.background.corner_radius || 0 : Ce ? Hn(Ce.corner_radius, 0) : 0), t.$$.dirty[0] & /*textStyles, fontSize*/
    270336 && e(32, a = p.text_shadow ? zm(p.text_shadow, le) : void 0), t.$$.dirty[0] & /*textStyles*/
    8192 && typeof p.baseline_offset == "number" && e(27, me = p.baseline_offset), t.$$.dirty[0] & /*textStyles*/
    8192 && e(34, l = typeof p.baseline_offset == "number" ? void 0 : p.alignment_vertical), t.$$.dirty[0] & /*singleline, decoration, hasCloudBg, customLineHeight, verticalAlign, maskColor, maskAnimated*/
    671301712 | t.$$.dirty[1] & /*customVerticalAlign*/
    8 && e(8, u = {
      singleline: w,
      decoration: Y,
      align: l,
      cloud: o,
      "relative-vertical-align": !!(z && me),
      "has-particles-mask": !!Ke,
      "mask-animated": Q
    }), t.$$.dirty[0] & /*fontSize, rootFontSize, lineHeight, letterSpacing, fontWeight, fontFamily, customLineHeight, verticalAlign, cloudBg, hasCloudBg, cloudBgId, colorOverride, color, background, textStyles, border, borderRadius, fontVariationSettings, maskColor, maskSize*/
    1610461304 | t.$$.dirty[1] & /*customVerticalAlign, cloudPadding, $direction, shadow, maskDensity*/
    31 && e(7, c = {
      "font-size": ge(le * 10 / m),
      "line-height": l ? "normal" : E,
      "letter-spacing": D,
      "font-weight": M,
      "font-family": W,
      "vertical-align": z || me === void 0 ? void 0 : ge(me * 10 / le),
      top: z && me !== void 0 ? ge(-me * 10 / le) : void 0,
      margin: i ? so(ea(i, -10 / le), f) : void 0,
      padding: i ? so(ea(i, 10 / le), f) : void 0,
      filter: N && o && !H ? `url(#${T})` : a,
      color: Ae || be,
      background: Fe,
      opacity: N && o && !H ? ((ne = (de = _o(p.background.color)) == null ? void 0 : de.a) != null ? ne : 255) / 255 : void 0,
      /**
      * box-shadow instead of border because:
      * 1) Doesn't take space as border does
      * 2) There should not be a border-radius on line breaks, but there should be a border
      */
      "box-shadow": Ce ? `inset 0 0 0 ${ge(Ce.width * 10 / le)} ${Ce.color}` : void 0,
      "border-radius": s ? ge(s * 10 / le) : void 0,
      "font-feature-settings": p.font_feature_settings || void 0,
      "font-variation-settings": q || void 0,
      "--divkit-text-mask-color": Ke,
      "--divkit-text-mask-size": Ye,
      "--divkit-text-mask-density": Xe
    });
  }, [
    _,
    h,
    k,
    N,
    Ke,
    s,
    o,
    c,
    u,
    n,
    _e,
    T,
    m,
    p,
    w,
    H,
    z,
    Y,
    le,
    E,
    D,
    M,
    W,
    q,
    be,
    Ae,
    Ce,
    me,
    Fe,
    Q,
    Ye,
    Xe,
    a,
    i,
    l,
    f
  ];
}
class va extends Br {
  constructor(r) {
    super(), Or(
      this,
      r,
      k0,
      w0,
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
function wl(t, r, e) {
  return t === "left" || t === "center" || t === "right" || t === "start" || t === "end" ? t === "left" ? r === "ltr" ? "start" : "end" : t === "right" ? r === "ltr" ? "end" : "start" : t : e;
}
function kl(t, r) {
  return t === "top" || t === "center" || t === "bottom" || t === "baseline" ? t === "top" ? "start" : t === "bottom" ? "end" : t : r;
}
function v0(t) {
  return String(t != null ? t : "");
}
function $d(t, r) {
  return t === "source_in" || t === "source_atop" || t === "darken" || t === "lighten" || t === "multiply" || t === "screen" ? t : r;
}
function xs(t) {
  return t.is_enabled !== 0 && t.is_enabled !== !1;
}
function ja(t, r) {
  let e;
  return function(...n) {
    e !== null && clearTimeout(e), e = setTimeout(() => {
      t.apply(this, n), e = null;
    }, r);
  };
}
function j0(t, r) {
  let e = null;
  const n = () => {
    const a = getComputedStyle(t), l = parseFloat(a.lineHeight);
    t.style.webkitLineClamp = "", t.style.maxHeight = "";
    const u = t.offsetHeight, c = t.scrollHeight;
    let f = Math.max(1, Math.floor(u / l));
    r.maxLines && r.maxLines < f && (f = r.maxLines), c > f * l + 1e-9 && (t.style.webkitLineClamp = String(f), t.style.maxHeight = l * f + "px");
  }, o = ja(n, 50), i = () => {
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
const { Boolean: e_ } = Po;
function Wu(t, r, e) {
  const n = t.slice();
  return n[71] = r[e], n;
}
function Uu(t, r, e) {
  const n = t.slice();
  return n[71] = r[e], n;
}
function Gu(t) {
  let r = (
    /*htmlTag*/
    t[9]
  ), e, n = (
    /*htmlTag*/
    t[9] && Il(t)
  );
  return {
    c() {
      n && n.c(), e = er();
    },
    m(o, i) {
      n && n.m(o, i), J(o, e, i);
    },
    p(o, i) {
      /*htmlTag*/
      o[9] ? r ? Sr(
        r,
        /*htmlTag*/
        o[9]
      ) ? (n.d(1), n = Il(o), r = /*htmlTag*/
      o[9], n.c(), n.m(e.parentNode, e)) : n.p(o, i) : (n = Il(o), r = /*htmlTag*/
      o[9], n.c(), n.m(e.parentNode, e)) : r && (n.d(1), n = null, r = /*htmlTag*/
      o[9]);
    },
    i: v,
    o(o) {
      x(n, o);
    },
    d(o) {
      o && G(e), n && n.d(o);
    }
  };
}
function C0(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Pe("span"), e = Pe("span"), g(e, "class", n = ht("text__image-wrapper", co, {
        align: (
          /*item*/
          t[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          t[11] !== null
        )
      })), g(e, "style", o = cr({
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
      })), g(r, "style", i = cr(
        /*item*/
        t[71].image.wrapperStyle
      ));
    },
    m(s, a) {
      J(s, r, a), bt(r, e);
    },
    p(s, a) {
      a[0] & /*renderList, customLineHeight*/
      10240 && n !== (n = ht("text__image-wrapper", co, {
        align: (
          /*item*/
          s[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          s[11] !== null
        )
      })) && g(e, "class", n), a[0] & /*renderList, customLineHeight*/
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
      })) && g(e, "style", o), a[0] & /*renderList*/
      8192 && i !== (i = cr(
        /*item*/
        s[71].image.wrapperStyle
      )) && g(r, "style", i);
    },
    i: v,
    o: v,
    d(s) {
      s && G(r);
    }
  };
}
function E0(t) {
  let r, e, n = (
    /*item*/
    t[71].text && Ju(t)
  );
  return {
    c() {
      n && n.c(), r = er();
    },
    m(o, i) {
      n && n.m(o, i), J(o, r, i), e = !0;
    },
    p(o, i) {
      /*item*/
      o[71].text ? n ? (n.p(o, i), i[0] & /*renderList*/
      8192 && L(n, 1)) : (n = Ju(o), n.c(), L(n, 1), n.m(r.parentNode, r)) : n && (fr(), x(n, 1, 1, () => {
        n = null;
      }), dr());
    },
    i(o) {
      e || (L(n), e = !0);
    },
    o(o) {
      x(n), e = !1;
    },
    d(o) {
      o && G(r), n && n.d(o);
    }
  };
}
function Ju(t) {
  let r, e;
  return r = new va({
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
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Ku(t) {
  let r, e, n, o;
  const i = [E0, C0], s = [];
  function a(l, u) {
    return "text" in /*item*/
    l[71] ? 0 : (
      /*item*/
      l[71].image ? 1 : -1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = er();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (fr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function Il(t) {
  let r, e, n, o, i = ar(
    /*renderList*/
    t[13]
  ), s = [];
  for (let c = 0; c < i.length; c += 1)
    s[c] = Ku(Uu(t, i, c));
  const a = (c) => x(s[c], 1, 1, () => {
    s[c] = null;
  });
  let l = [
    {
      class: e = ht("text__inner", co, {
        .../*innerMods*/
        t[19],
        "cloud-bg": !0
      })
    },
    {
      style: n = cr({
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
    u = jo(u, l[c]);
  return {
    c() {
      r = Pe(
        /*htmlTag*/
        t[9]
      );
      for (let c = 0; c < s.length; c += 1)
        s[c].c();
      ri(
        /*htmlTag*/
        t[9]
      )(r, u);
    },
    m(c, f) {
      J(c, r, f);
      for (let _ = 0; _ < s.length; _ += 1)
        s[_] && s[_].m(r, null);
      o = !0;
    },
    p(c, f) {
      if (f[0] & /*componentContext, renderList, fontSize, singleline, wholeTextCloudBgId, customLineHeight*/
      26889) {
        i = ar(
          /*renderList*/
          c[13]
        );
        let _;
        for (_ = 0; _ < i.length; _ += 1) {
          const h = Uu(c, i, _);
          s[_] ? (s[_].p(h, f), L(s[_], 1)) : (s[_] = Ku(h), s[_].c(), L(s[_], 1), s[_].m(r, null));
        }
        for (fr(), _ = i.length; _ < s.length; _ += 1)
          a(_);
        dr();
      }
      ri(
        /*htmlTag*/
        c[9]
      )(r, u = No(l, [
        (!o || f[0] & /*innerMods*/
        524288 && e !== (e = ht("text__inner", co, {
          .../*innerMods*/
          c[19],
          "cloud-bg": !0
        }))) && { class: e },
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
          L(s[f]);
        o = !0;
      }
    },
    o(c) {
      s = s.filter(e_);
      for (let f = 0; f < s.length; f += 1)
        x(s[f]);
      o = !1;
    },
    d(c) {
      c && G(r), on(s, c);
    }
  };
}
function A0(t) {
  let r, e;
  return r = new va({
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
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function S0(t) {
  let r, e, n = ar(
    /*renderList*/
    t[13]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Yu(Wu(t, n, s));
  const i = (s) => x(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = er();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      J(s, r, a), e = !0;
    },
    p(s, a) {
      if (a[0] & /*componentContext, renderList, fontSize, singleline, customLineHeight*/
      10505 | a[1] & /*onImgError*/
      256) {
        n = ar(
          /*renderList*/
          s[13]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const u = Wu(s, n, l);
          o[l] ? (o[l].p(u, a), L(o[l], 1)) : (o[l] = Yu(u), o[l].c(), L(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (fr(), l = n.length; l < o.length; l += 1)
          i(l);
        dr();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          L(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(e_);
      for (let a = 0; a < o.length; a += 1)
        x(o[a]);
      e = !1;
    },
    d(s) {
      s && G(r), on(o, s);
    }
  };
}
function V0(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _, h, m = [
    { class: o = co.text__image },
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
      style: l = cr({
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
  ], p = {};
  for (let w = 0; w < m.length; w += 1)
    p = jo(p, m[w]);
  return {
    c() {
      r = Pe("span"), e = Pe("span"), n = Pe("img"), qo(n, p), g(e, "class", u = ht("text__image-wrapper", co, {
        align: (
          /*item*/
          t[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          t[11] !== null
        )
      })), g(e, "style", c = cr({
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
      })), g(r, "style", f = cr(
        /*item*/
        t[71].image.wrapperStyle
      ));
    },
    m(w, k) {
      J(w, r, k), bt(r, e), bt(e, n), _ || (h = xe(
        n,
        "error",
        /*onImgError*/
        t[39]
      ), _ = !0);
    },
    p(w, k) {
      qo(n, p = No(m, [
        { class: o },
        k[0] & /*renderList*/
        8192 && !Qn(n.src, i = /*item*/
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
      10240 && u !== (u = ht("text__image-wrapper", co, {
        align: (
          /*item*/
          w[71].image.verticalAlign
        ),
        crop: (
          /*customLineHeight*/
          w[11] !== null
        )
      })) && g(e, "class", u), k[0] & /*renderList, customLineHeight*/
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
      })) && g(e, "style", c), k[0] & /*renderList*/
      8192 && f !== (f = cr(
        /*item*/
        w[71].image.wrapperStyle
      )) && g(r, "style", f);
    },
    i: v,
    o: v,
    d(w) {
      w && G(r), _ = !1, h();
    }
  };
}
function F0(t) {
  let r, e, n = (
    /*item*/
    t[71].text && qu(t)
  );
  return {
    c() {
      n && n.c(), r = er();
    },
    m(o, i) {
      n && n.m(o, i), J(o, r, i), e = !0;
    },
    p(o, i) {
      /*item*/
      o[71].text ? n ? (n.p(o, i), i[0] & /*renderList*/
      8192 && L(n, 1)) : (n = qu(o), n.c(), L(n, 1), n.m(r.parentNode, r)) : n && (fr(), x(n, 1, 1, () => {
        n = null;
      }), dr());
    },
    i(o) {
      e || (L(n), e = !0);
    },
    o(o) {
      x(n), e = !1;
    },
    d(o) {
      o && G(r), n && n.d(o);
    }
  };
}
function qu(t) {
  let r, e;
  return r = new va({
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
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Yu(t) {
  let r, e, n, o;
  const i = [F0, V0], s = [];
  function a(l, u) {
    return "text" in /*item*/
    l[71] ? 0 : (
      /*item*/
      l[71].image ? 1 : -1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = er();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (fr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function Tl(t) {
  let r, e, n, o, i, s, a, l, u;
  const c = [S0, A0], f = [];
  function _(p, w) {
    return (
      /*renderList*/
      p[13].length ? 0 : 1
    );
  }
  e = _(t), n = f[e] = c[e](t);
  let h = [
    {
      class: o = ht(
        "text__inner",
        co,
        /*innerMods*/
        t[19]
      )
    },
    {
      style: i = cr(
        /*style*/
        t[18]
      )
    }
  ], m = {};
  for (let p = 0; p < h.length; p += 1)
    m = jo(m, h[p]);
  return {
    c() {
      r = Pe(
        /*htmlTag*/
        t[9]
      ), n.c(), ri(
        /*htmlTag*/
        t[9]
      )(r, m);
    },
    m(p, w) {
      J(p, r, w), f[e].m(r, null), a = !0, l || (u = pl(s = j0.call(null, r, {
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
    p(p, w) {
      let k = e;
      e = _(p), e === k ? f[e].p(p, w) : (fr(), x(f[k], 1, 1, () => {
        f[k] = null;
      }), dr(), n = f[e], n ? n.p(p, w) : (n = f[e] = c[e](p), n.c()), L(n, 1), n.m(r, null)), ri(
        /*htmlTag*/
        p[9]
      )(r, m = No(h, [
        (!a || w[0] & /*innerMods*/
        524288 && o !== (o = ht(
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
      ])), s && Lr(s.update) && w[0] & /*$jsonAutoEllipsize, lineClamp, maxLines*/
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
      a || (L(n), a = !0);
    },
    o(p) {
      x(n), a = !1;
    },
    d(p) {
      p && G(r), f[e].d(), l = !1, u();
    }
  };
}
function D0(t) {
  let r, e = (
    /*htmlTag*/
    t[9]
  ), n, o, i = (
    /*hasCloudBg*/
    t[6] && Gu(t)
  ), s = (
    /*htmlTag*/
    t[9] && Tl(t)
  );
  return {
    c() {
      i && i.c(), r = hr(), s && s.c(), n = er();
    },
    m(a, l) {
      i && i.m(a, l), J(a, r, l), s && s.m(a, l), J(a, n, l), o = !0;
    },
    p(a, l) {
      /*hasCloudBg*/
      a[6] ? i ? (i.p(a, l), l[0] & /*hasCloudBg*/
      64 && L(i, 1)) : (i = Gu(a), i.c(), L(i, 1), i.m(r.parentNode, r)) : i && (fr(), x(i, 1, 1, () => {
        i = null;
      }), dr()), /*htmlTag*/
      a[9] ? e ? Sr(
        e,
        /*htmlTag*/
        a[9]
      ) ? (s.d(1), s = Tl(a), e = /*htmlTag*/
      a[9], s.c(), s.m(n.parentNode, n)) : s.p(a, l) : (s = Tl(a), e = /*htmlTag*/
      a[9], s.c(), s.m(n.parentNode, n)) : e && (s.d(1), s = null, e = /*htmlTag*/
      a[9]);
    },
    i(a) {
      o || (L(i), o = !0);
    },
    o(a) {
      x(i), x(s, a), o = !1;
    },
    d(a) {
      a && (G(r), G(n)), i && i.d(a), s && s.d(a);
    }
  };
}
function I0(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "text",
        co,
        /*mods*/
        t[20]
      ) + " " + /*selectable*/
      (t[5] ? Er.root__selectable : Er.root__unselectable),
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
      $$slots: { default: [D0] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods, selectable*/
      1048608 && (i.cls = ht(
        "text",
        co,
        /*mods*/
        n[20]
      ) + " " + /*selectable*/
      (n[5] ? Er.root__selectable : Er.root__unselectable)), o[0] & /*componentContext*/
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function T0(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, z, oe, _e, T, Y, le, E, D, M, W, q, be = v, Ae = () => (be(), be = C(N, (At) => e(52, q = At)), N), Ce, me = v, Fe = () => (me(), me = C(i, (At) => e(53, Ce = At)), i), Q, Ke = v, Ye = () => (Ke(), Ke = C(o, (At) => e(54, Q = At)), o), Xe, ye = v, Me = () => (ye(), ye = C(w, (At) => e(55, Xe = At)), w), ce, he = v, fe = () => (he(), he = C(p, (At) => e(56, ce = At)), p), re, de = v, ne = () => (de(), de = C(m, (At) => e(57, re = At)), m), we, Ue = v, Ge = () => (Ue(), Ue = C(h, (At) => e(58, we = At)), h), $, Be = v, Ne = () => (Be(), Be = C(_, (At) => e(59, $ = At)), _), ot, ct = v, nt = () => (ct(), ct = C(u, (At) => e(60, ot = At)), u), kt, it = v, Pt = () => (it(), it = C(f, (At) => e(61, kt = At)), f), ft, Z = v, pe = () => (Z(), Z = C(c, (At) => e(62, ft = At)), c), st, ze = v, F = () => (ze(), ze = C(k, (At) => e(10, st = At)), k), Ct, ut = v, Vt = () => (ut(), ut = C(l, (At) => e(63, Ct = At)), l), Dt, lt = v, K = () => (lt(), lt = C(a, (At) => e(64, Dt = At)), a), Mt, It = v, Xt = () => (It(), It = C(s, (At) => e(65, Mt = At)), s), Zt, Ee = v, Ze = () => (Ee(), Ee = C(n, (At) => e(66, Zt = At)), n), gt, Ie = v, $e = () => (Ie(), Ie = C(H, (At) => e(67, gt = At)), H);
  t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => ye()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => Ue()), t.$$.on_destroy.push(() => Be()), t.$$.on_destroy.push(() => ct()), t.$$.on_destroy.push(() => it()), t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => ze()), t.$$.on_destroy.push(() => ut()), t.$$.on_destroy.push(() => lt()), t.$$.on_destroy.push(() => It()), t.$$.on_destroy.push(() => Ee()), t.$$.on_destroy.push(() => Ie());
  let { componentContext: Le } = r, { layoutParams: Ft = void 0 } = r;
  const Oe = Tr(Yr), yt = Oe.direction;
  yn(t, yt, (At) => e(51, W = At));
  let Gt = "", Tt = 12, sr = 1.25, Te = null, jt = "", lr, rr = "", nr = !1, pr = "start", vr = "start", or = "", ir = "", Ht = "", mt = !1, Qt = [], ae = !1, wr = "", kr, Et = [], Ir = {}, Pr = "span";
  function ur(At, Jt, xt, et) {
    var ie, d;
    let pt = [];
    if (Et.forEach(([B, je]) => {
      Oe.removeSvgFilter(B, je);
    }), Et = [], !(Array.isArray(Jt) && Jt.length || Array.isArray(xt) && xt.length && At)) {
      e(13, Qt = []);
      return;
    }
    const ue = At;
    let vt = Jt || [{ start: 0, end: ue.length }], $t = xt || [], Wt = 0, yr = [], j = [];
    vt.forEach((B) => {
      const je = B.start || 0, He = B.end || At.length, ke = {
        top_offset: 0,
        ...B,
        start: je,
        end: He
      };
      j.push({
        index: je,
        range: ke,
        type: "rangeStart",
        isStart: !0
      }), j.push({
        index: He,
        range: ke,
        type: "rangeEnd"
      });
    }), $t.forEach((B, je) => {
      B.start !== void 0 && B.url && B.start <= ue.length && j.push({
        index: B.indexing_direction === "reversed" ? At.length - B.start : B.start,
        image: B,
        type: "image",
        arrayIndex: je
      });
    }), j.sort((B, je) => B.index === je.index ? B.type !== je.type ? B.type === "image" ? -1 : je.type === "image" ? 1 : B.type < je.type ? -1 : 1 : B.type === "image" && je.type === "image" ? je.arrayIndex - B.arrayIndex : B.type === "rangeStart" && je.type === "rangeStart" ? B.range.end - je.range.end : B.type === "rangeStart" ? 1 : je.type === "rangeStart" ? -1 : B.type !== "image" && je.type !== "image" ? B.range.start - je.range.start : 0 : B.index - je.index), j.forEach((B) => {
      var ke, P, Lt, zt;
      let je = B.type === "image" ? null : B.range, He = B.index;
      if (He > Wt) {
        let Je = Object.assign({ ...et }, ...yr);
        yr.length && yr[yr.length - 1].start !== Wt && (Je.top_offset = 0), pt.push({
          text: ue.substring(Wt, He),
          textStyles: Je,
          actions: B.type === "rangeEnd" && ((P = (ke = B.range) == null ? void 0 : ke.actions) == null ? void 0 : P.filter(xs)) || void 0
        });
      }
      if (B.type === "rangeStart" && je)
        yr.push(je);
      else if (B.type === "rangeEnd")
        yr = yr.filter((Je) => Je !== B.range);
      else if (B.type === "image") {
        let Je = Object.assign({ ...et }, ...yr), at = ge((B.image.width && B.image.width.value || 20) * 10 / (Je.font_size || 12)), Ot = ge((B.image.height && B.image.height.value || 20) * 10 / (Je.font_size || 12));
        const Ar = {
          "font-size": ge((Number(Je.font_size) || 12) * 10 / Tt)
        };
        let _r = "";
        const Fr = B.image.tint_color, wn = $d(B.image.tint_mode, "source_in");
        if (Fr) {
          const ln = gr(B.image.tint_color);
          _r = Oe.addSvgFilter(ln, wn), Et.push([ln, wn]);
        }
        const Se = {}, Xr = (Lt = B.image.accessibility) == null ? void 0 : Lt.type, Ur = ((zt = B.image.accessibility) == null ? void 0 : zt.description) || "";
        (Xr === "button" || Xr === "image") && Ur ? Se.role = Xr : (!Ur || Xr === "none") && (Se["aria-hidden"] = "true"), pt.push({
          image: {
            url: B.image.url,
            width: at,
            height: Ot,
            wrapperStyle: Ar,
            svgFilterId: _r,
            preloadRequired: !!B.image.preload_required,
            verticalAlign: B.image.alignment_vertical,
            description: Ur,
            a11yAttrs: Se
          }
        });
      }
      Wt = He;
    }), Wt < ue.length && pt.push({
      text: ue.substring(Wt),
      textStyles: { ...et }
    }), e(13, Qt = pt), e(6, ae = pt.some((B) => {
      var je;
      return "text" in B && ((je = B.textStyles.background) == null ? void 0 : je.type) === "cloud";
    })), e(14, wr = ae && pt.length === 1 ? Oe.genId("text-whole-bg") : ""), e(15, kr = wr ? ((d = (ie = _o(pt[0].textStyles.background.color)) == null ? void 0 : ie.a) != null ? d : 255) / 255 : void 0);
  }
  function dt(At) {
    At.target && "classList" in At.target && At.target.classList.add(co.text__image_hidden);
  }
  return sn(() => {
    Et.forEach(([At, Jt]) => {
      Oe.removeSvgFilter(At, Jt);
    });
  }), t.$$set = (At) => {
    "componentContext" in At && e(0, Le = At.componentContext), "layoutParams" in At && e(1, Ft = At.layoutParams);
  }, t.$$.update = () => {
    var At, Jt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && Le.json && (e(3, Tt = 12), e(40, sr = 1.25), e(11, Te = null), e(41, jt = ""), e(12, lr = void 0), e(4, rr = ""), e(42, nr = !1), e(43, pr = "start"), e(44, vr = "start"), e(45, or = ""), e(47, Ht = ""), e(5, mt = !1)), t.$$.dirty[0] & /*componentContext*/
    1 && Ze(e(37, n = Le.getDerivedFromVars(Le.json.text))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(36, o = Le.getDerivedFromVars(Le.json.ranges, void 0, !0, 3))), t.$$.dirty[0] & /*componentContext*/
    1 && Fe(e(35, i = Le.getDerivedFromVars(Le.json.images))), t.$$.dirty[0] & /*componentContext*/
    1 && Xt(e(34, s = Le.getDerivedFromVars(
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
    1 && K(e(33, a = Le.getDerivedFromVars(Le.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && Vt(e(32, l = Le.getDerivedFromVars(Le.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && nt(e(31, u = Le.getDerivedFromVars(Le.json.max_lines))), t.$$.dirty[0] & /*componentContext*/
    1 && pe(e(30, c = Le.getDerivedFromVars(Le.json.text_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && Pt(e(29, f = Le.getDerivedFromVars(Le.json.text_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && Ne(e(28, _ = Le.getDerivedFromVars(Le.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(27, h = Le.getDerivedFromVars(Le.json.focused_text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ne(e(26, m = Le.getDerivedFromVars(Le.json.truncate))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(25, p = Le.getDerivedFromVars(Le.json.text_gradient))), t.$$.dirty[0] & /*componentContext*/
    1 && Me(e(24, w = Le.getDerivedFromVars(Le.json.selectable))), t.$$.dirty[0] & /*componentContext*/
    1 && F(e(23, k = Le.getDerivedFromVars(Le.json.auto_ellipsize))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(22, N = Le.getDerivedFromVars(Le.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && $e(e(21, H = Le.getDerivedFromVars(Le.json.heading_type))), t.$$.dirty[2] & /*$jsonHeadingType*/
    32 && e(9, z = (() => {
      const xt = gt;
      if (xt && typeof xt == "string") {
        const et = xt.toLowerCase();
        if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(et))
          return et;
      }
      return "span";
    })()), t.$$.dirty[0] & /*htmlTag*/
    512 && e(16, Pr = z !== "span" ? "div" : "span"), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*$jsonText*/
    16 && (typeof Le.json.text == "string" ? e(2, Gt = v0(Zt)) : (e(2, Gt = ""), Le.logError(X(new Error("Incorrect text value type"))))), t.$$.dirty[1] & /*$jsonTextGradient, $direction*/
    34603008) {
      let xt = "";
      if (ce) {
        const et = bl([ce], W);
        et.image && (xt = et.image);
      }
      e(47, Ht = xt);
    }
    if (t.$$.dirty[1] & /*gradient*/
    65536 | t.$$.dirty[2] & /*$jsonRootTextStyles*/
    8 && e(7, Ir = Ht ? { ...Mt, text_color: "" } : Mt), t.$$.dirty[0] & /*fontSize, componentContext*/
    9 | t.$$.dirty[2] & /*$jsonTextSize*/
    4) {
      e(3, Tt = Hn(Dt, Tt));
      const xt = Le.json.responsive;
      if (xt && typeof xt == "object" && typeof window < "u") {
        const et = window.matchMedia("(max-width: 767px)").matches, pt = window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches;
        et && ((At = xt.mobile) != null && At.font_size) ? e(3, Tt = xt.mobile.font_size) : pt && ((Jt = xt.tablet) != null && Jt.font_size) && e(3, Tt = xt.tablet.font_size);
      }
    }
    if (t.$$.dirty[0] & /*fontSize*/
    8 | t.$$.dirty[1] & /*lineHeight*/
    512 | t.$$.dirty[2] & /*$jsonLineHeight*/
    2) {
      const xt = Ct;
      Pn(xt) ? (e(40, sr = Number(xt) / Tt), e(11, Te = sr)) : e(11, Te = null);
    }
    if (t.$$.dirty[1] & /*$jsonMaxLines*/
    536870912 && e(8, oe = ot === 1), t.$$.dirty[0] & /*$jsonAutoEllipsize*/
    1024 | t.$$.dirty[1] & /*$jsonMaxLines, lineHeight*/
    536871424) {
      let xt = "", et, pt = "", ue = !1;
      if (ot && ot > 1) {
        const vt = Number(ot);
        xt = vt * sr + "em", et = vt, pt = vt, ue = !0;
      } else st && ot !== 1 && (ue = !0);
      e(41, jt = xt), e(12, lr = et), e(4, rr = pt), e(42, nr = ue);
    }
    if (t.$$.dirty[1] & /*$direction, halign*/
    1052672 | t.$$.dirty[2] & /*$jsonHAlign*/
    1 && e(43, pr = wl(ft, W, pr)), t.$$.dirty[1] & /*$jsonVAlign, valign*/
    1073750016 && e(44, vr = kl(kt, vr)), t.$$.dirty[0] & /*text*/
    4 | t.$$.dirty[1] & /*$jsonRanges*/
    8388608 && e(50, _e = !Q || Gt && Q.length === 1 && Q[0] && (!Q[0].start || Q[0].start === 0) && (!Q[0].end || typeof Q[0].end == "number" && Q[0].end >= Gt.length)), t.$$.dirty[1] & /*gradient, $jsonTextColor, $jsonRanges*/
    276889600 && e(49, T = !!(!Ht && $) != !!(Q && Q[0] && Q[0].text_color)), t.$$.dirty[1] & /*$jsonMaxLines, isAllTextSameColor, isOnlyOneColorDefined, $jsonTextColor, $jsonRanges, rootTextColor*/
    814497792) {
      let xt = "";
      ot && _e && T && (xt = gr($ || Q && Q[0] && Q[0].text_color, 1, or)), e(45, or = xt);
    }
    t.$$.dirty[1] & /*$jsonFocusTextColor, focusTextColor*/
    134250496 && e(46, ir = gr(we, 1, ir)), t.$$.dirty[1] & /*$jsonTruncate*/
    67108864 && e(48, Y = re === "none" ? "none" : ""), t.$$.dirty[0] & /*selectable*/
    32 | t.$$.dirty[1] & /*$jsonSelectable*/
    16777216 && e(5, mt = Zr(Xe, mt)), t.$$.dirty[0] & /*text, rootTextStyles*/
    132 | t.$$.dirty[1] & /*$jsonRanges, $jsonImages*/
    12582912 && ur(Gt, Q, Ce, Ir), t.$$.dirty[0] & /*singleline*/
    256 | t.$$.dirty[1] & /*multiline, halign, valign, truncate, focusTextColor*/
    178176 && e(20, le = {
      singleline: oe,
      multiline: nr,
      halign: pr,
      valign: vr,
      truncate: Y,
      "has-focus-color": !!ir
    }), t.$$.dirty[0] & /*hasCloudBg*/
    64 | t.$$.dirty[1] & /*gradient*/
    65536 && e(19, E = {
      gradient: !!Ht,
      "has-cloud-bg": ae
    }), t.$$.dirty[0] & /*fontSize, lineClamp*/
    24 | t.$$.dirty[1] & /*lineHeight, maxHeight, rootTextColor, gradient, focusTextColor*/
    116224 && e(18, D = {
      "font-size": ge(Tt),
      "line-height": sr,
      "max-height": jt,
      "-webkit-line-clamp": rr,
      color: or,
      "background-image": Ht,
      "--divkit-text-focus-color": ir
    }), t.$$.dirty[0] & /*fontSize*/
    8 | t.$$.dirty[1] & /*$jsonPaddings, $direction*/
    3145728 && e(17, M = so(ea(ni(q, {}) || {}, 10 / Tt), W));
  }, [
    Le,
    Ft,
    Gt,
    Tt,
    rr,
    mt,
    ae,
    Ir,
    oe,
    z,
    st,
    Te,
    lr,
    Qt,
    wr,
    kr,
    Pr,
    M,
    D,
    E,
    le,
    H,
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
    yt,
    dt,
    sr,
    jt,
    nr,
    pr,
    vr,
    or,
    ir,
    Ht,
    Y,
    T,
    _e,
    W,
    q,
    Ce,
    Q,
    Xe,
    ce,
    re,
    we,
    $,
    ot,
    kt,
    ft,
    Ct,
    Dt,
    Mt,
    Zt,
    gt
  ];
}
class M0 extends Br {
  constructor(r) {
    super(), Or(this, r, T0, I0, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const P0 = "appkit-container", N0 = "appkit-container_wrap", z0 = "appkit-container_overflow_visible", L0 = "appkit-container_orientation_vertical", O0 = "appkit-container_valign_start", B0 = "appkit-container_valign_center", R0 = "appkit-container_valign_end", H0 = "appkit-container_halign_start", W0 = "appkit-container_halign_center", U0 = "appkit-container_halign_end", G0 = "appkit-container_orientation_horizontal", J0 = "appkit-container_orientation_overlap", Xu = {
  container: P0,
  container_wrap: N0,
  container_overflow_visible: z0,
  container_orientation_vertical: L0,
  container_valign_start: O0,
  container_valign_center: B0,
  container_valign_end: R0,
  "container_valign_space-between": "appkit-container_valign_space-between",
  "container_valign_space-around": "appkit-container_valign_space-around",
  "container_valign_space-evenly": "appkit-container_valign_space-evenly",
  container_halign_start: H0,
  container_halign_center: W0,
  container_halign_end: U0,
  "container_halign_space-between": "appkit-container_halign_space-between",
  "container_halign_space-around": "appkit-container_halign_space-around",
  "container_halign_space-evenly": "appkit-container_halign_space-evenly",
  container_orientation_horizontal: G0,
  container_orientation_overlap: J0,
  "container_fixed-container": "appkit-container_fixed-container",
  "container_responsive-mobile-vertical": "appkit-container_responsive-mobile-vertical",
  "container_responsive-mobile-horizontal": "appkit-container_responsive-mobile-horizontal",
  "container_responsive-mobile-has-height": "appkit-container_responsive-mobile-has-height",
  "container_responsive-tablet-vertical": "appkit-container_responsive-tablet-vertical",
  "container_responsive-tablet-horizontal": "appkit-container_responsive-tablet-horizontal",
  "container_responsive-tablet-has-height": "appkit-container_responsive-tablet-has-height"
};
function Zu(t) {
  return {
    top: Number(t == null ? void 0 : t.top) || 0,
    right: Number(t == null ? void 0 : t.right) || 0,
    bottom: Number(t == null ? void 0 : t.bottom) || 0,
    left: Number(t == null ? void 0 : t.left) || 0
  };
}
function Qu(t, r, e) {
  const n = ((r == null ? void 0 : r.margins.left) || 0) + ((r == null ? void 0 : r.margins.right) || 0), o = ((r == null ? void 0 : r.margins.top) || 0) + ((r == null ? void 0 : r.margins.bottom) || 0);
  r != null && r.show_at_start && (e ? t.top = r.style.height + o : t.left = r.style.width + n), r != null && r.show_at_end && (e ? t.bottom = r.style.height + o : t.right = r.style.width + n);
}
function K0(t, r, e) {
  const n = {};
  return Qu(n, r, t === "vertical"), Qu(n, e, t === "horizontal"), n;
}
function q0({
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
  ], i.map(ge).join(" ");
}
function Y0(t) {
  var e;
  const r = (e = t.width) == null ? void 0 : e.type;
  return r !== "wrap_content" && r !== "fixed";
}
function X0(t) {
  var e;
  return ((e = t.height) == null ? void 0 : e.type) === "match_parent";
}
function Z0(t, r) {
  return t === "vertical" || t === "horizontal" || t === "overlap" ? t : r;
}
function Q0(t) {
  var r, e, n;
  return {
    width: rn((r = t.item_width) == null ? void 0 : r.value, 10),
    height: rn((e = t.item_height) == null ? void 0 : e.value, 10),
    radius: rn((n = t.corner_radius) == null ? void 0 : n.value, 5)
  };
}
function x0(t) {
  var e;
  const r = rn((e = t.radius) == null ? void 0 : e.value, 10) * 2;
  return {
    width: r,
    height: r,
    radius: r
  };
}
function $0(t, r, e) {
  var l;
  const n = {}, o = r.stroke || (e == null ? void 0 : e.stroke), i = o != null && o.color ? gr(o.color) : "", s = o != null && o.width ? Number((l = o.width) != null ? l : 1) : "";
  n.width = t.width, n.height = t.height, n.borderRadius = t.radius;
  const a = r.background_color || (e == null ? void 0 : e.color);
  return n.background = gr(a), i && s && (n.boxShadow = `inset 0 0 0 ${ge(s)} ${i}`), n;
}
function uo(t, r, e) {
  if (!t || !t.shape || !t.shape.type || !r.includes(t.shape.type) || t.type !== "shape_drawable")
    return e;
  let n;
  if (t.shape.type === "rounded_rectangle")
    n = Q0(t.shape);
  else if (t.shape.type === "circle")
    n = x0(t.shape);
  else
    return e;
  return $0(n, t.shape, {
    color: t.color,
    stroke: t.stroke
  });
}
let ts;
function xu() {
  if (typeof document > "u" && (ts = !0), ts !== void 0)
    return ts;
  const t = document.createElement("div");
  return t.style.position = "absolute", t.style.display = "flex", t.style.flexDirection = "column", t.style.gap = "1px", t.appendChild(document.createElement("div")), t.appendChild(document.createElement("div")), document.body.appendChild(t), ts = t.scrollHeight === 1, document.body.removeChild(t), ts;
}
function e1(t, r) {
  return t === "top" || t === "center" || t === "bottom" || t === "baseline" || t === "space-between" || t === "space-around" || t === "space-evenly" ? t === "top" ? "start" : t === "bottom" ? "end" : t : r;
}
function t1(t, r, e) {
  return t === "left" || t === "center" || t === "right" || t === "space-between" || t === "space-around" || t === "space-evenly" || t === "start" || t === "end" ? t === "left" ? r === "ltr" ? "start" : "end" : t === "right" ? r === "ltr" ? "end" : "start" : t : e;
}
function r1() {
}
function Jo(t) {
  return {
    subscribe(r) {
      return r(t), r1;
    }
  };
}
function vl(t, r, e, n) {
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
const fs = {
  "container-separator": "appkit-container-separator",
  "container-separator__item": "appkit-container-separator__item",
  "container-separator__shape": "appkit-container-separator__shape"
};
function n1(t, r) {
  let e = 0, n, o = !1;
  return function() {
    const i = Date.now();
    return !e || Math.abs(i - e) > r ? (e = i, n = t.apply(this, arguments)) : (o || (o = !0, setTimeout(() => {
      o = !1, n = t.apply(this, arguments);
    }, r)), n);
  };
}
function o1(t) {
  const r = t.getBoundingClientRect(), e = getComputedStyle(t);
  return {
    top: r.top - parseFloat(e.marginTop),
    right: r.right + parseFloat(e.marginRight),
    bottom: r.bottom + parseFloat(e.marginBottom),
    left: r.left - parseFloat(e.marginLeft)
  };
}
const { window: i1 } = Po;
function $u(t, r, e) {
  const n = t.slice();
  return n[16] = r[e], n;
}
function ec(t) {
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
      r = Pe("div"), e = Pe("div"), s = hr(), g(e, "class", fs["container-separator__shape"]), I(e, "width", n), I(e, "height", o), I(e, "border-radius", i), I(
        e,
        "background",
        /*item*/
        t[16].style.background
      ), I(
        e,
        "box-shadow",
        /*item*/
        t[16].style.boxShadow
      ), g(r, "class", fs["container-separator__item"]), I(r, "left", a), I(r, "top", l), I(r, "width", u), I(r, "height", c);
    },
    m(f, _) {
      J(f, r, _), bt(r, e), bt(r, s);
    },
    p(f, _) {
      _ & /*separators*/
      2 && n !== (n = `${/*item*/
      f[16].style.width}px`) && I(e, "width", n), _ & /*separators*/
      2 && o !== (o = `${/*item*/
      f[16].style.height}px`) && I(e, "height", o), _ & /*separators*/
      2 && i !== (i = `${/*item*/
      f[16].style.borderRadius}px`) && I(e, "border-radius", i), _ & /*separators*/
      2 && I(
        e,
        "background",
        /*item*/
        f[16].style.background
      ), _ & /*separators*/
      2 && I(
        e,
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
      f && G(r);
    }
  };
}
function s1(t) {
  let r, e, n, o = ar(
    /*separators*/
    t[1]
  ), i = [];
  for (let s = 0; s < o.length; s += 1)
    i[s] = ec($u(t, o, s));
  return {
    c() {
      r = Pe("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      g(r, "class", fs["container-separator"]);
    },
    m(s, a) {
      J(s, r, a);
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(r, null);
      t[13](r), e || (n = xe(
        i1,
        "resize",
        /*throttledUpdated*/
        t[2]
      ), e = !0);
    },
    p(s, [a]) {
      if (a & /*separators*/
      2) {
        o = ar(
          /*separators*/
          s[1]
        );
        let l;
        for (l = 0; l < o.length; l += 1) {
          const u = $u(s, o, l);
          i[l] ? i[l].p(u, a) : (i[l] = ec(u), i[l].c(), i[l].m(r, null));
        }
        for (; l < i.length; l += 1)
          i[l].d(1);
        i.length = o.length;
      }
    },
    i: v,
    o: v,
    d(s) {
      s && G(r), on(i, s), t[13](null), e = !1, n();
    }
  };
}
const l1 = 10;
function Ml(t, r, e, n, o, i) {
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
function tc(t, r, e, n, o, i) {
  const s = {
    top: Math.min(...e.map((a) => a.top)),
    right: Math.max(...e.map((a) => a.right)),
    bottom: Math.max(...e.map((a) => a.bottom)),
    left: Math.min(...e.map((a) => a.left))
  };
  if (r != null && r.show_at_start) {
    let a, l;
    o === "space-around" || o === "space-evenly" ? (a = i.left - r.style.width, l = i.top - r.style.height) : (a = e[0].left - r.style.width - r.margins.left - r.margins.right, l = e[0].top - r.style.height - r.margins.top - r.margins.bottom), Ml(
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
      Ml(t, r, e[a], e[a + 1], s, n);
  if (r != null && r.show_at_end) {
    const a = e[e.length - 1];
    let l, u;
    o === "space-around" || o === "space-evenly" ? (l = i.bottom + r.style.height, u = i.right + r.style.width) : (l = a.bottom + r.style.height + r.margins.top + r.margins.bottom, u = a.right + r.style.width + r.margins.left + r.margins.right), Ml(
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
function a1(t, r, e) {
  let n, { orientation: o } = r, { separator: i } = r, { lineSeparator: s } = r, { contentHAlign: a } = r, { contentVAlign: l } = r, { direction: u } = r;
  const c = n1(k, l1);
  let f = [], _, h = !1, m = null, p = null;
  function w(H) {
    H.some((z) => {
      var _e;
      const oe = (_e = z.target) == null ? void 0 : _e.classList;
      return !(oe != null && oe.contains(fs["container-separator__shape"])) && !(oe != null && oe.contains(fs["container-separator"]));
    }) && c();
  }
  function k() {
    if (!n)
      return;
    const H = n.getBoundingClientRect(), z = window.getComputedStyle(n), oe = {
      top: H.top + parseFloat(z.paddingTop),
      right: H.right - parseFloat(z.paddingRight),
      bottom: H.bottom - parseFloat(z.paddingBottom),
      left: H.left + parseFloat(z.paddingLeft)
    };
    e(1, f = []);
    let _e = [...n.children].filter((le) => le !== _ && le instanceof HTMLElement && !le.classList.contains(Qs.outer__border) && getComputedStyle(le).display !== "none"), T = [];
    for (; _e.length; ) {
      const le = [], E = _e.shift();
      le.push(E);
      let D = E.getBoundingClientRect(), M = D.left, W = D.right, q = D.bottom;
      for (; _e.length; ) {
        let be = _e[0], Ae = be.getBoundingClientRect();
        if (o === "vertical") {
          if (Ae.top < q)
            break;
        } else if (u === "ltr" ? Ae.left < W : Ae.right > M)
          break;
        W = Math.max(W, Ae.right), M = Math.min(M, Ae.left), q = Math.max(q, Ae.bottom), le.push(be), _e.shift();
      }
      T.push(le);
    }
    const Y = [];
    T.forEach((le) => {
      const E = le.map((M) => o1(M));
      u === "rtl" && o === "horizontal" && E.reverse(), i && tc(
        f,
        i,
        E,
        o === "vertical",
        o === "vertical" ? l : a,
        oe
      );
      const D = {
        top: Math.min(...E.map((M) => M.top)),
        right: Math.max(...E.map((M) => M.right)),
        bottom: Math.max(...E.map((M) => M.bottom)),
        left: Math.min(...E.map((M) => M.left))
      };
      Y.push(D);
    }), u === "rtl" && o === "vertical" && Y.reverse(), s && tc(
      f,
      s,
      Y,
      o === "horizontal",
      o === "vertical" ? a : l,
      oe
    ), f.forEach((le) => {
      le.top -= H.top, le.left -= H.left;
    });
  }
  xn(() => {
    e(9, h = !0);
  }), sn(() => {
    e(9, h = !1);
  });
  function N(H) {
    Dr[H ? "unshift" : "push"](() => {
      _ = H, e(0, _);
    });
  }
  return t.$$set = (H) => {
    "orientation" in H && e(3, o = H.orientation), "separator" in H && e(4, i = H.separator), "lineSeparator" in H && e(5, s = H.lineSeparator), "contentHAlign" in H && e(6, a = H.contentHAlign), "contentVAlign" in H && e(7, l = H.contentVAlign), "direction" in H && e(8, u = H.direction);
  }, t.$$.update = () => {
    t.$$.dirty & /*node*/
    1 && e(12, n = (_ == null ? void 0 : _.parentElement) || null), t.$$.dirty & /*mounted, parentElement, mutationObserver, resizeObserver*/
    7680 && (h && n || m || p) && (m && (m.disconnect(), e(10, m = null)), p && (p.disconnect(), e(11, p = null)), h && n && (typeof MutationObserver < "u" && (e(10, m = new MutationObserver(w)), m.observe(n, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    })), typeof ResizeObserver < "u" && (e(11, p = new ResizeObserver(c)), p.observe(n)))), t.$$.dirty & /*mounted, parentElement*/
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
class u1 extends Br {
  constructor(r) {
    super(), Or(this, r, a1, s1, Sr, {
      orientation: 3,
      separator: 4,
      lineSeparator: 5,
      contentHAlign: 6,
      contentVAlign: 7,
      direction: 8
    });
  }
}
const { Boolean: c1 } = Po;
function rc(t, r, e) {
  const n = t.slice();
  return n[63] = r[e], n;
}
function nc(t) {
  let r, e;
  return r = new Kn({
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
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function oc(t) {
  let r, e;
  return r = new u1({
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
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function f1(t) {
  let r, e, n, o = ar(
    /*items*/
    t[9]
  ), i = [];
  for (let l = 0; l < o.length; l += 1)
    i[l] = nc(rc(t, o, l));
  const s = (l) => x(i[l], 1, 1, () => {
    i[l] = null;
  });
  let a = (
    /*separator*/
    (t[5] || /*lineSeparator*/
    t[6]) && oc(t)
  );
  return {
    c() {
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      r = hr(), a && a.c(), e = er();
    },
    m(l, u) {
      for (let c = 0; c < i.length; c += 1)
        i[c] && i[c].m(l, u);
      J(l, r, u), a && a.m(l, u), J(l, e, u), n = !0;
    },
    p(l, u) {
      if (u[0] & /*items, childLayoutParams*/
      768) {
        o = ar(
          /*items*/
          l[9]
        );
        let c;
        for (c = 0; c < o.length; c += 1) {
          const f = rc(l, o, c);
          i[c] ? (i[c].p(f, u), L(i[c], 1)) : (i[c] = nc(f), i[c].c(), L(i[c], 1), i[c].m(r.parentNode, r));
        }
        for (fr(), c = o.length; c < i.length; c += 1)
          s(c);
        dr();
      }
      /*separator*/
      l[5] || /*lineSeparator*/
      l[6] ? a ? (a.p(l, u), u[0] & /*separator, lineSeparator*/
      96 && L(a, 1)) : (a = oc(l), a.c(), L(a, 1), a.m(e.parentNode, e)) : a && (fr(), x(a, 1, 1, () => {
        a = null;
      }), dr());
    },
    i(l) {
      if (!n) {
        for (let u = 0; u < o.length; u += 1)
          L(i[u]);
        L(a), n = !0;
      }
    },
    o(l) {
      i = i.filter(c1);
      for (let u = 0; u < i.length; u += 1)
        x(i[u]);
      x(a), n = !1;
    },
    d(l) {
      l && (G(r), G(e)), on(i, l), a && a.d(l);
    }
  };
}
function d1(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "container",
        Xu,
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
      $$slots: { default: [f1] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      4096 && (i.cls = ht(
        "container",
        Xu,
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
const _1 = {
  start: "start",
  center: "center",
  end: "end",
  // 'space-*' values doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, p1 = {
  start: "start",
  center: "center",
  end: "end",
  baseline: "baseline",
  // 'space-*' doesn't supported for cross-axis in wrap-container
  "space-between": "start",
  "space-around": "start",
  "space-evenly": "start"
}, ic = ["rounded_rectangle", "circle"];
function g1(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, z, oe, _e, T, Y, le, E, D, M = v, W = () => (M(), M = C(k, (mt) => e(45, D = mt)), k), q, be = v, Ae = () => (be(), be = C(H, (mt) => e(46, q = mt)), H), Ce, me = v, Fe = () => (me(), me = C(N, (mt) => e(47, Ce = mt)), N), Q, Ke = v, Ye = () => (Ke(), Ke = C(w, (mt) => e(48, Q = mt)), w), Xe, ye = v, Me = () => (ye(), ye = C(p, (mt) => e(49, Xe = mt)), p), ce, he = v, fe = () => (he(), he = C(m, (mt) => e(50, ce = mt)), m), re, de = v, ne = () => (de(), de = C(f, (mt) => e(51, re = mt)), f), we, Ue = v, Ge = () => (Ue(), Ue = C(c, (mt) => e(52, we = mt)), c), $, Be = v, Ne = () => (Be(), Be = C(h, (mt) => e(53, $ = mt)), h), ot, ct = v, nt = () => (ct(), ct = C(_, (mt) => e(54, ot = mt)), _), kt, it, Pt = v, ft = () => (Pt(), Pt = C(u, (mt) => e(55, it = mt)), u), Z, pe = v, st = () => (pe(), pe = C(l, (mt) => e(56, Z = mt)), l), ze, F = v, Ct = () => (F(), F = C($e, (mt) => e(57, ze = mt)), $e), ut, Vt = v, Dt = () => (Vt(), Vt = C(a, (mt) => e(58, ut = mt)), a), lt, K = v, Mt = () => (K(), K = C(s, (mt) => e(59, lt = mt)), s), It, Xt = v, Zt = () => (Xt(), Xt = C(i, (mt) => e(60, It = mt)), i);
  t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => ye()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => Ue()), t.$$.on_destroy.push(() => Be()), t.$$.on_destroy.push(() => ct()), t.$$.on_destroy.push(() => Pt()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => F()), t.$$.on_destroy.push(() => Vt()), t.$$.on_destroy.push(() => K()), t.$$.on_destroy.push(() => Xt());
  let { componentContext: Ee } = r, { layoutParams: Ze = void 0 } = r;
  const gt = Tr(Yr), Ie = gt.direction;
  yn(t, Ie, (mt) => e(10, kt = mt));
  let $e, Le = "vertical", Ft = "start", Oe = "start", yt = null, Gt = null, Tt, sr = {}, Te = 0, jt = 0, lr = !1;
  function rr() {
    e(2, Le = "vertical"), e(3, Ft = "start"), e(4, Oe = "start"), e(7, Tt = void 0), e(32, Te = 0), e(33, jt = 0), e(34, lr = !1);
  }
  function nr(mt) {
    e(0, Ee = e(35, vr = {
      ...Ee,
      json: {
        ...Ee.json,
        items: mt.filter(zo)
      }
    }));
  }
  let pr = [], vr, or = {}, ir, Ht;
  return sn(() => {
    pr.forEach((mt) => {
      mt.destroy();
    });
  }), t.$$set = (mt) => {
    "componentContext" in mt && e(0, Ee = mt.componentContext), "layoutParams" in mt && e(1, Ze = mt.layoutParams);
  }, t.$$.update = () => {
    var mt, Qt, ae, wr, kr, Et, Ir, Pr, ur, dt, At;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(44, n = Ee.origJson), t.$$.dirty[1] & /*origJson*/
    8192 && n && rr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(43, o = Ee.json.items), t.$$.dirty[0] & /*componentContext*/
    1 && Zt(e(29, i = typeof ((mt = Ee.json.item_builder) == null ? void 0 : mt.data) == "string" ? Ee.getDerivedFromVars((Qt = Ee.json.item_builder) == null ? void 0 : Qt.data, void 0, !0) : (ae = Ee.json.item_builder) != null && ae.data ? Jo(Ee.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && Mt(e(28, s = Ee.getDerivedFromVars(Ee.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && Dt(e(27, a = Ee.getDerivedFromVars(Ee.json.layout_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(26, l = Ee.getDerivedFromVars(Ee.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && ft(e(25, u = Ee.getDerivedFromVars(Ee.json.content_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(24, c = Ee.getDerivedFromVars(Ee.json.separator))), t.$$.dirty[0] & /*componentContext*/
    1 && ne(e(23, f = Ee.getDerivedFromVars(Ee.json.line_separator))), t.$$.dirty[0] & /*componentContext*/
    1 && nt(e(22, _ = Ee.getDerivedFromVars(Ee.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && Ne(e(21, h = Ee.getDerivedFromVars(Ee.json.line_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(20, m = Ee.getDerivedFromVars(Ee.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && Me(e(19, p = Ee.getDerivedFromVars(Ee.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(18, w = Ee.getDerivedFromVars(Ee.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && W(e(17, k = Ee.getDerivedFromVars(Ee.json.clip_to_bounds))), t.$$.dirty[0] & /*componentContext*/
    1 && Fe(e(16, N = Ee.getDerivedFromVars(Ee.json.max_width))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(15, H = Ee.getDerivedFromVars(Ee.json.responsive))), t.$$.dirty[0] & /*componentContext, items*/
    513 | t.$$.dirty[1] & /*$jsonItemBuilderData, jsonItems, prevContext*/
    536875024) {
      let Jt = [];
      if (Ee.json.item_builder && Array.isArray(It) && Array.isArray(Ee.json.item_builder.prototypes)) {
        const ue = Ee.json.item_builder;
        Jt = vl(It, gt, Ee, ue);
      } else
        Jt = (Array.isArray(o) && o || []).map((ue, vt) => ({
          div: ue,
          key: ue.id || { index: vt, data: ue }
        }));
      const xt = new Set(pr), et = /* @__PURE__ */ new Map();
      let pt = !1;
      vr === Ee && pr.forEach((ue) => {
        ue.key && (typeof ue.key == "string" && et.has(ue.key) ? pt || (pt = !0, Ee.logError(X(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: ue.key } }))) : et.set(
          typeof ue.key == "string" ? ue.key : ue.key.index,
          ue
        ));
      }), e(9, pr = Jt.map((ue, vt) => {
        let $t = !pt && et.get(ue.id), Wt = et.get(vt);
        return !$t && !ue.id && typeof ue.key == "object" && typeof (Wt == null ? void 0 : Wt.key) == "object" && Ki(Wt.key.data, ue.key.data) && ($t = Wt), $t ? (xt.delete($t), $t) : Ee.produceChildContext(ue.div, {
          path: vt,
          variables: ue.vars,
          id: ue.id,
          key: ue.key
        });
      }));
      for (const ue of xt)
        ue.destroy();
      e(35, vr = Ee);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    513) {
      let Jt = [];
      pr.forEach((xt) => {
        Jt.push(Ee.getDerivedFromVars({
          width: xt.json.width,
          height: xt.json.height
        }));
      }), Ct(e(11, $e = Ji(Jt, (xt) => [...xt])));
    }
    if (t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$jsonOrientation*/
    268435456 && e(2, Le = Z0(lt, Le)), t.$$.dirty[1] & /*$jsonLayoutMode*/
    134217728 && e(38, z = ut === "wrap"), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*wrap*/
    128 && e(42, oe = Le !== "horizontal" && !z), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*wrap*/
    128 && e(41, _e = Le !== "vertical" && !z), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$childStore*/
    67108864 && e(40, T = Le === "overlap" && !ze.every(Y0)), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$childStore*/
    67108864 && e(39, Y = Le === "overlap" && !ze.every(X0)), t.$$.dirty[0] & /*contentVAlign*/
    8 | t.$$.dirty[1] & /*$jsonContentVAlign*/
    33554432 && e(3, Ft = e1(Z, Ft)), t.$$.dirty[0] & /*$direction, contentHAlign*/
    1040 | t.$$.dirty[1] & /*$jsonContentHAlign*/
    16777216 && e(4, Oe = t1(it, kt, Oe)), t.$$.dirty[1] & /*$jsonItemSpacing, itemSpacing*/
    8388610 && e(32, Te = rn(ot, Te)), t.$$.dirty[1] & /*$jsonLineSpacing, lineSpacing*/
    4194308 && e(33, jt = rn($, jt)), t.$$.dirty[0] & /*orientation, separator, componentContext*/
    37 | t.$$.dirty[1] & /*$jsonSeparator, itemSpacing*/
    2097154)
      if (we != null && we.style && Le !== "overlap" && xu()) {
        const Jt = uo(we.style, ic, (yt == null ? void 0 : yt.style) || null);
        Jt ? (e(5, yt = {
          show_at_start: !!((wr = we.show_at_start) != null && wr),
          show_at_end: !!((kr = we.show_at_end) != null && kr),
          show_between: !!((Et = we.show_between) == null || Et),
          style: Jt,
          margins: Zu(we.margins)
        }), yt.show_between && Te && Ee.logError(X(new Error("item_spacing will be ignored due to the 'separator' property."), { level: "warn" }))) : e(5, yt = null);
      } else
        e(5, yt = null);
    if (t.$$.dirty[0] & /*orientation, lineSeparator, componentContext*/
    69 | t.$$.dirty[1] & /*$jsonLineSeparator, lineSpacing*/
    1048580)
      if (re != null && re.style && Le !== "overlap" && xu()) {
        const Jt = uo(re.style, ic, (Gt == null ? void 0 : Gt.style) || null);
        Jt ? (e(6, Gt = {
          show_at_start: !!((Ir = re.show_at_start) != null && Ir),
          show_at_end: !!((Pr = re.show_at_end) != null && Pr),
          show_between: !!((ur = re.show_between) == null || ur),
          style: Jt,
          margins: Zu(re.margins)
        }), Gt.show_between && jt && Ee.logError(X(new Error("line_spacing will be ignored due to the 'line_separator' property."), { level: "warn" }))) : e(6, Gt = null);
      } else
        e(6, Gt = null);
    if (t.$$.dirty[0] & /*separator, lineSeparator, orientation*/
    100 && e(14, le = yt || Gt ? K0(Le, yt, Gt) : null), t.$$.dirty[1] & /*$jsonAspect*/
    524288) {
      const Jt = ce == null ? void 0 : ce.ratio;
      Jt && Pn(Jt) ? e(7, Tt = Jt) : e(7, Tt = void 0);
    }
    if (t.$$.dirty[0] & /*orientation, contentHAlign, contentVAlign, layoutParams, aspect, childLayoutParams*/
    414 | t.$$.dirty[1] & /*wrap, $jsonWidth, $jsonHeight, supportWidthWrapContent, supportHeightWrapContent, stretchWidth, stretchHeight*/
    397184) {
      let Jt = {};
      Le === "overlap" && (Jt.overlapParent = !0), Le !== "horizontal" && (Jt.parentHAlign = z ? "start" : _1[Oe]), Le !== "vertical" && (Jt.parentVAlign = z ? "start" : p1[Ft]);
      const xt = (Xe == null ? void 0 : Xe.type) === "wrap_content" || (Xe == null ? void 0 : Xe.type) === "match_parent" && (Ze == null ? void 0 : Ze.parentHorizontalWrapContent), et = !Q || Q.type === "wrap_content" || Q.type === "match_parent" && (Ze == null ? void 0 : Ze.parentVerticalWrapContent);
      !oe && xt && (Jt.parentHorizontalWrapContent = !0), !Tt && !_e && et && (Jt.parentVerticalWrapContent = !0), xt || (Jt.parentContainerKnownWidth = !0), et || (Jt.parentContainerKnownHeight = !0), Jt.stretchWidth = T, Jt.stretchHeight = Y, Le === "horizontal" && (Jt.parentContainerOrientation = "horizontal"), Le === "vertical" && (Jt.parentContainerOrientation = "vertical"), z && (Jt.parentContainerWrap = !0), e(8, sr = ei(Jt, sr));
    }
    if (t.$$.dirty[1] & /*$jsonMaxWidth*/
    65536 && e(34, lr = (Ce == null ? void 0 : Ce.type) === "fixed"), t.$$.dirty[0] & /*orientation, contentVAlign, contentHAlign*/
    28 | t.$$.dirty[1] & /*$jsonResponsive, wrap, $jsonClipToBounds, isFixedContainer, responsiveMobileHeight, responsiveTabletHeight*/
    49384) {
      let Jt, xt;
      if (e(36, ir = void 0), e(37, Ht = void 0), q) {
        const et = q == null ? void 0 : q.mobile, pt = q == null ? void 0 : q.tablet;
        if (et != null && et.orientation && (Jt = String(et.orientation)), pt != null && pt.orientation && (xt = String(pt.orientation)), ((dt = et == null ? void 0 : et.height) == null ? void 0 : dt.type) === "fixed" && et.height.value !== void 0) {
          const ue = rn(et.height.value, 0);
          e(36, ir = ue > 0 ? ue : void 0);
        }
        if (((At = pt == null ? void 0 : pt.height) == null ? void 0 : At.type) === "fixed" && pt.height.value !== void 0) {
          const ue = rn(pt.height.value, 0);
          e(37, Ht = ue > 0 ? ue : void 0);
        }
      }
      e(12, or = {
        orientation: Le,
        valign: Ft,
        halign: Oe,
        wrap: z,
        overflow: D === !1 || D === 0 ? "visible" : void 0,
        "fixed-container": lr,
        "responsive-mobile-vertical": Jt === "vertical",
        "responsive-mobile-horizontal": Jt === "horizontal",
        "responsive-tablet-vertical": xt === "vertical",
        "responsive-tablet-horizontal": xt === "horizontal",
        "responsive-mobile-has-height": ir !== void 0,
        "responsive-tablet-has-height": Ht !== void 0
      });
    }
    t.$$.dirty[0] & /*separator, lineSeparator, orientation, aspect*/
    228 | t.$$.dirty[1] & /*itemSpacing, lineSpacing, responsiveMobileHeight, responsiveTabletHeight*/
    102 && e(13, E = {
      gap: yt || Gt || Te || jt ? q0({
        orientation: Le,
        separator: yt,
        lineSeparator: Gt,
        itemSpacing: Te,
        lineSpacing: jt
      }) : void 0,
      "aspect-ratio": Tt,
      "--responsive-mobile-height": ir !== void 0 ? ge(ir) : void 0,
      "--responsive-tablet-height": Ht !== void 0 ? ge(Ht) : void 0
    });
  }, [
    Ee,
    Ze,
    Le,
    Ft,
    Oe,
    yt,
    Gt,
    Tt,
    sr,
    pr,
    kt,
    $e,
    or,
    E,
    le,
    H,
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
    Ie,
    nr,
    Te,
    jt,
    lr,
    vr,
    ir,
    Ht,
    z,
    Y,
    T,
    _e,
    oe,
    o,
    n,
    D,
    q,
    Ce,
    Q,
    Xe,
    ce,
    re,
    we,
    $,
    ot,
    it,
    Z,
    ze,
    ut,
    lt,
    It
  ];
}
class h1 extends Br {
  constructor(r) {
    super(), Or(this, r, g1, d1, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const m1 = "appkit-separator", b1 = "appkit-separator_orientation_horizontal", y1 = "appkit-separator_orientation_vertical", w1 = "appkit-separator__inner", ta = {
  separator: m1,
  separator_orientation_horizontal: b1,
  separator_orientation_vertical: y1,
  separator__inner: w1
};
function Ca(t, r) {
  return t === "vertical" || t === "horizontal" ? t : r;
}
function sc(t) {
  let r, e;
  return {
    c() {
      r = Pe("span"), g(r, "class", ta.separator__inner), g(r, "style", e = cr(
        /*style*/
        t[3]
      ));
    },
    m(n, o) {
      J(n, r, o);
    },
    p(n, o) {
      o & /*style*/
      8 && e !== (e = cr(
        /*style*/
        n[3]
      )) && g(r, "style", e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function k1(t) {
  let r, e = (
    /*hasContent*/
    t[4] && sc(t)
  );
  return {
    c() {
      e && e.c(), r = er();
    },
    m(n, o) {
      e && e.m(n, o), J(n, r, o);
    },
    p(n, o) {
      /*hasContent*/
      n[4] ? e ? e.p(n, o) : (e = sc(n), e.c(), e.m(r.parentNode, r)) : e && (e.d(1), e = null);
    },
    d(n) {
      n && G(r), e && e.d(n);
    }
  };
}
function v1(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "separator",
        ta,
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
      $$slots: { default: [k1] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, [o]) {
      const i = {};
      o & /*mods*/
      4 && (i.cls = ht(
        "separator",
        ta,
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function j1(t, r, e) {
  let n, o, i, s, a, l, u, c, f = v, _ = () => (f(), f = C(o, (N) => e(11, c = N)), o);
  t.$$.on_destroy.push(() => f());
  let { componentContext: h } = r, { layoutParams: m = void 0 } = r, p = "horizontal", w = "rgba(0,0,0,0.08)";
  function k() {
    e(6, p = "horizontal"), e(7, w = "rgba(0,0,0,0.08)");
  }
  return t.$$set = (N) => {
    "componentContext" in N && e(0, h = N.componentContext), "layoutParams" in N && e(1, m = N.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty & /*componentContext*/
    1 && e(10, n = h.origJson), t.$$.dirty & /*origJson*/
    1024 && n && k(), t.$$.dirty & /*componentContext*/
    1 && _(e(5, o = h.getDerivedFromVars(h.json.delimiter_style))), t.$$.dirty & /*$jsonDelimiterStyle, orientation*/
    2112 && e(6, p = Ca(c == null ? void 0 : c.orientation, p)), t.$$.dirty & /*$jsonDelimiterStyle*/
    2048 && e(4, i = !(c != null && c.color && (c.color === "transparent" || c.color.length === 9 && c.color.indexOf("#00") === 0))), t.$$.dirty & /*$jsonDelimiterStyle, background*/
    2176 && e(7, w = gr(c == null ? void 0 : c.color, 1, w)), t.$$.dirty & /*orientation*/
    64 && e(9, s = p === "horizontal" ? "100%" : ge(1)), t.$$.dirty & /*orientation*/
    64 && e(8, a = p === "horizontal" ? ge(1) : "100%"), t.$$.dirty & /*background, width, height*/
    896 && e(3, l = { background: w, width: s, height: a }), t.$$.dirty & /*orientation*/
    64 && e(2, u = { orientation: p });
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
class C1 extends Br {
  constructor(r) {
    super(), Or(this, r, j1, v1, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const E1 = "appkit-image", A1 = "appkit-image__image", S1 = "appkit-image_error", V1 = "appkit-image_aspect", F1 = "appkit-image_loaded", ra = {
  image: E1,
  "image_is-width-content": "appkit-image_is-width-content",
  "image_is-height-content": "appkit-image_is-height-content",
  image__image: A1,
  image_error: S1,
  "image_is-rtl-mirror": "appkit-image_is-rtl-mirror",
  image_aspect: V1,
  "image_aspect-content": "appkit-image_aspect-content",
  image_loaded: F1,
  "divkit-image-appearance": "appkit-divkit-image-appearance",
  "image_before-appearance": "appkit-image_before-appearance"
};
function D1(t, r, e) {
  const n = t.content_alignment_horizontal, o = t.content_alignment_vertical;
  return n && n !== "left" && n !== "center" && n !== "right" && n !== "start" && n !== "end" || o && o !== "top" && o !== "center" && o !== "bottom" ? e : Xd({
    content_alignment_horizontal: n,
    content_alignment_vertical: o
  }, r);
}
function t_(t) {
  return t.startsWith("data:") ? Ql(t) : `data:image/jpg;base64,${Ql(t)}`;
}
function I1(t, r, e) {
  let { componentContext: n } = r;
  const o = Tr(Yr);
  let i = null;
  function s() {
    i && i.update(n);
  }
  return xn(() => {
    n.fakeElement || (i = Zd(null, o, n));
  }), gl(s), sn(() => {
    i && i.destroy();
  }), t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext);
  }, [n];
}
class In extends Br {
  constructor(r) {
    super(), Or(this, r, I1, null, Sr, { componentContext: 0 });
  }
}
function T1(t) {
  let r, e;
  return r = new In({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function M1(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "image",
        ra,
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
          P1,
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
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      4096 && (i.cls = ht(
        "image",
        ra,
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function lc(t) {
  let r, e, n, o, i, s, a, l;
  return {
    c() {
      r = Pe("img"), g(r, "class", ra.image__image), Qn(r.src, e = /*state*/
      t[2] === is ? na : (
        /*imageUrl*/
        t[3]
      )) || g(r, "src", e), g(r, "loading", n = /*$jsonPreloadRequired*/
      t[31] || /*highPrority*/
      t[10] ? "eager" : "lazy"), g(r, "decoding", o = /*highPrority*/
      t[10] ? "sync" : "async"), g(r, "style", i = cr({
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
      J(u, r, c), t[70](r), a || (l = [
        xe(
          r,
          "load",
          /*onLoad*/
          t[33]
        ),
        xe(
          r,
          "error",
          /*onError*/
          t[34]
        )
      ], a = !0);
    },
    p(u, c) {
      c[0] & /*state, imageUrl*/
      12 && !Qn(r.src, e = /*state*/
      u[2] === is ? na : (
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
      u && G(r), t[70](null), a = !1, Rr(l);
    }
  };
}
function P1(t) {
  let r = (
    /*svgFilterId*/
    t[5]
  ), e, n = lc(t);
  return {
    c() {
      n.c(), e = er();
    },
    m(o, i) {
      n.m(o, i), J(o, e, i);
    },
    p(o, i) {
      i[0] & /*svgFilterId*/
      32 && Sr(r, r = /*svgFilterId*/
      o[5]) ? (n.d(1), n = lc(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && G(e), n.d(o);
    }
  };
}
function N1(t) {
  let r, e, n, o;
  const i = [M1, T1], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[9] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = er();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (fr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
const na = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", z1 = "empty://", L1 = "rgba(0,0,0,0.08)", _i = 0, Pl = 1, is = 2, ac = /\.gif($|\?)/i, O1 = "data:image/gif", uc = 'A Gif image was used for the "Image" component. The animation will be played on the web platform, but it does not match the behavior of other platforms.';
function B1(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, z, oe, _e, T, Y, le, E, D = v, M = () => (D(), D = C(N, (pt) => e(53, E = pt)), N), W, q, be = v, Ae = () => (be(), be = C(k, (pt) => e(55, q = pt)), k), Ce, me = v, Fe = () => (me(), me = C(w, (pt) => e(56, Ce = pt)), w), Q, Ke = v, Ye = () => (Ke(), Ke = C(p, (pt) => e(57, Q = pt)), p), Xe, ye = v, Me = () => (ye(), ye = C(_, (pt) => e(58, Xe = pt)), _), ce, he = v, fe = () => (he(), he = C(m, (pt) => e(59, ce = pt)), m), re, de = v, ne = () => (de(), de = C(h, (pt) => e(60, re = pt)), h), we, Ue = v, Ge = () => (Ue(), Ue = C(f, (pt) => e(61, we = pt)), f), $, Be = v, Ne = () => (Be(), Be = C(c, (pt) => e(62, $ = pt)), c), ot, ct = v, nt = () => (ct(), ct = C(u, (pt) => e(63, ot = pt)), u), kt, it = v, Pt = () => (it(), it = C(l, (pt) => e(64, kt = pt)), l), ft, Z = v, pe = () => (Z(), Z = C(a, (pt) => e(65, ft = pt)), a), st, ze = v, F = () => (ze(), ze = C(s, (pt) => e(66, st = pt)), s), Ct, ut = v, Vt = () => (ut(), ut = C(z, (pt) => e(67, Ct = pt)), z), Dt, lt = v, K = () => (lt(), lt = C(o, (pt) => e(68, Dt = pt)), o), Mt, It = v, Xt = () => (It(), It = C(i, (pt) => e(69, Mt = pt)), i), Zt, Ee = v, Ze = () => (Ee(), Ee = C(H, (pt) => e(31, Zt = pt)), H);
  t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => ye()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => Ue()), t.$$.on_destroy.push(() => Be()), t.$$.on_destroy.push(() => ct()), t.$$.on_destroy.push(() => it()), t.$$.on_destroy.push(() => Z()), t.$$.on_destroy.push(() => ze()), t.$$.on_destroy.push(() => ut()), t.$$.on_destroy.push(() => lt()), t.$$.on_destroy.push(() => It()), t.$$.on_destroy.push(() => Ee());
  let { componentContext: gt } = r, { layoutParams: Ie = void 0 } = r;
  const $e = Tr(Yr), Le = $e.direction;
  yn(t, Le, (pt) => e(54, W = pt));
  let Ft, Oe = _i, yt = !1, Gt = L1, Tt = !1, sr, Te = "", jt = "none", lr = "50% 50%", rr = !1, nr = "center", pr, vr, or = "source_in", ir = "", Ht = "", mt = 0, Qt = 0, ae = 0, wr = "", kr = "", Et = !1, Ir = !1, Pr = !1;
  function ur() {
    e(4, pr = void 0), e(40, rr = !1), e(38, jt = "none"), e(39, lr = "50% 50%"), e(43, or = "source_in"), e(51, Ir = !1), e(10, Pr = !1);
  }
  function dt(pt) {
    e(2, Oe = _i);
  }
  function At(pt) {
    e(39, lr = D1(pt, W, lr));
  }
  function Jt() {
    Oe === _i && e(2, Oe = Pl);
  }
  function xt() {
    Oe === _i && e(2, Oe = is);
  }
  sn(() => {
    $e.removeSvgFilter(vr, or);
  });
  function et(pt) {
    Dr[pt ? "unshift" : "push"](() => {
      Ft = pt, e(8, Ft);
    });
  }
  return t.$$set = (pt) => {
    "componentContext" in pt && e(0, gt = pt.componentContext), "layoutParams" in pt && e(1, Ie = pt.layoutParams);
  }, t.$$.update = () => {
    var pt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(52, n = gt.origJson), t.$$.dirty[1] & /*origJson*/
    2097152 && n && ur(), t.$$.dirty[0] & /*componentContext*/
    1 && K(e(30, o = gt.getDerivedFromVars(gt.json.image_url))), t.$$.dirty[0] & /*componentContext*/
    1 && Xt(e(29, i = gt.getDerivedFromVars(gt.json.gif_url))), t.$$.dirty[0] & /*componentContext*/
    1 && F(e(28, s = gt.getDerivedFromVars(gt.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && pe(e(27, a = gt.getDerivedFromVars(gt.json.height))), t.$$.dirty[0] & /*componentContext*/
    1 && Pt(e(26, l = gt.getDerivedFromVars(gt.json.preview))), t.$$.dirty[0] & /*componentContext*/
    1 && nt(e(25, u = gt.getDerivedFromVars(gt.json.preview_url))), t.$$.dirty[0] & /*componentContext*/
    1 && Ne(e(24, c = gt.getDerivedFromVars(gt.json.placeholder_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(23, f = gt.getDerivedFromVars(gt.json.scale))), t.$$.dirty[0] & /*componentContext*/
    1 && Me(e(22, _ = gt.getDerivedFromVars({
      content_alignment_horizontal: gt.json.content_alignment_horizontal,
      content_alignment_vertical: gt.json.content_alignment_vertical
    }))), t.$$.dirty[0] & /*componentContext*/
    1 && ne(e(21, h = gt.getDerivedFromVars(gt.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(20, m = gt.getDerivedFromVars(gt.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(19, p = gt.getDerivedFromVars(gt.json.tint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Fe(e(18, w = gt.getDerivedFromVars(gt.json.tint_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(17, k = gt.getDerivedFromVars(gt.json.appearance_animation))), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(16, N = gt.getDerivedFromVars(gt.json.filters))), t.$$.dirty[0] & /*componentContext*/
    1 && Ze(e(15, H = gt.getDerivedFromVars(gt.json.preload_required))), t.$$.dirty[0] & /*componentContext*/
    1 && Vt(e(14, z = gt.getDerivedFromVars(gt.json.high_priority_preview_show))), t.$$.dirty[0] & /*componentContext, imageUrl*/
    9 | t.$$.dirty[1] & /*isEmpty*/
    16 | t.$$.dirty[2] & /*$jsonGifUrl, $jsonImageUrl*/
    192) {
      const ue = gt.json.type === "gif";
      let vt = ue ? Mt : Dt;
      e(35, yt = vt === z1), yt && (vt = na), e(3, sr = vt), !ue && sr && ac.test(sr) && gt.logError(X(new Error(uc), { level: "warn" }));
    }
    if (t.$$.dirty[0] & /*imageUrl*/
    8 && dt(), t.$$.dirty[1] & /*highPriorityPreview*/
    1048576 | t.$$.dirty[2] & /*$jsonHighPriorityPreviewShow*/
    32 && e(51, Ir = Zr(Ct, Ir)), t.$$.dirty[0] & /*imageUrl, componentContext*/
    9 && (sr ? e(9, Tt = !1) : (e(9, Tt = !0), gt.logError(X(new Error(`Missing "${gt.json.type === "gif" ? "gif_url" : "image_url"}" for "${gt.json.type}"`))))), t.$$.dirty[2] & /*$jsonWidth*/
    16 && e(7, oe = (st == null ? void 0 : st.type) === "wrap_content"), t.$$.dirty[2] & /*$jsonHeight*/
    8 && e(6, _e = (ft == null ? void 0 : ft.type) === "wrap_content"), t.$$.dirty[0] & /*componentContext, state*/
    5 | t.$$.dirty[1] & /*isEmpty, highPriorityPreview*/
    1048592 | t.$$.dirty[2] & /*$jsonPreview, $jsonPreviewUrl*/
    6) {
      const ue = gt.json.type === "gif", vt = kt, $t = ot;
      (Oe === _i || Oe === is || yt) && (vt || $t) ? (e(37, Te = `url("${$t || t_(vt || "")}")`), e(10, Pr = Ir)) : (e(37, Te = ""), e(10, Pr = !1)), !ue && ($t && ac.test($t) || vt && vt.startsWith(O1)) && gt.logError(X(new Error(uc), { level: "warn" }));
    }
    if (t.$$.dirty[0] & /*state*/
    4 | t.$$.dirty[1] & /*isEmpty, placeholderColor*/
    48 | t.$$.dirty[2] & /*$jsonPlaceholderColor*/
    1 && (Oe === _i || Oe === is || yt ? e(36, Gt = gr($, 1, Gt)) : e(36, Gt = "")), t.$$.dirty[1] & /*$jsonScale, scale*/
    1073741952 && e(38, jt = Yd(we) || jt), t.$$.dirty[1] & /*$jsonPosition*/
    134217728 && At(Xe), t.$$.dirty[1] & /*$jsonA11y*/
    536870912 && e(13, T = (re == null ? void 0 : re.description) || ""), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAspect, aspectContent, $jsonPosition*/
    402653696) {
      e(41, nr = "center");
      const ue = ce == null ? void 0 : ce.ratio;
      ue && Pn(ue) ? (e(4, pr = ue), e(40, rr = ((pt = gt.json.width) == null ? void 0 : pt.type) === "wrap_content"), rr && (Xe.content_alignment_vertical === "top" ? e(41, nr = "top") : Xe.content_alignment_vertical === "bottom" && e(41, nr = "bottom"))) : e(4, pr = void 0);
    }
    if (t.$$.dirty[1] & /*$jsonTintColor, $jsonTintMode, tintMode, tintColor*/
    100669440) {
      const ue = Q, vt = ue ? gr(ue) : void 0, $t = $d(Ce, or);
      (vt !== vr || $t !== or) && ($e.removeSvgFilter(vr, or), e(5, ir = vt ? $e.addSvgFilter(vt, $t) : ""), e(42, vr = vt), e(43, or = $t));
    }
    if (t.$$.dirty[1] & /*$jsonAppearanceAnimation*/
    16777216 && q && q.type === "fade") {
      const ue = q;
      e(44, Ht = Qd(ue.interpolator, "ease_in_out").replace(/_/g, "-")), e(47, ae = rn(ue.duration, 300)), e(46, Qt = rn(ue.start_delay, 0)), e(45, mt = rn(ue.alpha, 0));
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonFilters, $direction*/
    12582912) {
      let ue = "", vt = "";
      Array.isArray(E) && E.length && (ue = xd(E, gt.logError)), ue && (vt = "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)"), e(48, wr = ue), e(49, kr = vt), e(50, Et = W === "rtl" && Array.isArray(E) && E.some(($t) => $t.type === "rtl_mirror"));
    }
    t.$$.dirty[0] & /*aspectRatio, isWidthContent, isHeightContent, state*/
    212 | t.$$.dirty[1] & /*aspectContent, aspectContentVAlign, animationInterpolator, isRTLMirror*/
    534016 && e(12, Y = {
      aspect: pr !== void 0,
      "aspect-content": rr,
      "aspect-valign": nr !== "center" ? nr : void 0,
      "is-width-content": oe,
      "is-height-content": _e,
      loaded: Oe === Pl,
      "before-appearance": !!Ht && Oe === _i,
      "is-rtl-mirror": Et
    }), t.$$.dirty[0] & /*aspectRatio, state, svgFilterId*/
    52 | t.$$.dirty[1] & /*backgroundImage, placeholderColor, scale, filterClipPath, position, filter, animationInterpolator, animationFadeStart, animationDelay, animationDuration*/
    516576 && e(11, le = {
      // Image preview shows, if loading of original image is failed
      "background-image": Te,
      "background-color": Te ? void 0 : Gt,
      "background-size": Am(jt),
      "clip-path": kr || void 0,
      "object-fit": jt,
      "object-position": lr,
      "aspect-ratio": pr,
      filter: [
        Oe === Pl && ir ? `url(#${ir})` : "",
        wr
      ].filter(Boolean).join(" "),
      "--divkit-appearance-interpolator": Ht || void 0,
      "--divkit-appearance-fade-start": Ht ? mt : void 0,
      "--divkit-appearance-delay": Ht ? `${Qt}ms` : void 0,
      "--divkit-appearance-duration": Ht ? `${ae}ms` : void 0
    });
  }, [
    gt,
    Ie,
    Oe,
    sr,
    pr,
    ir,
    _e,
    oe,
    Ft,
    Tt,
    Pr,
    le,
    Y,
    T,
    z,
    H,
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
    Jt,
    xt,
    yt,
    Gt,
    Te,
    jt,
    lr,
    rr,
    nr,
    vr,
    or,
    Ht,
    mt,
    Qt,
    ae,
    wr,
    kr,
    Et,
    Ir,
    n,
    E,
    W,
    q,
    Ce,
    Q,
    Xe,
    ce,
    re,
    we,
    $,
    ot,
    kt,
    ft,
    st,
    Ct,
    Dt,
    Mt,
    et
  ];
}
class cc extends Br {
  constructor(r) {
    super(), Or(this, r, B1, N1, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const R1 = "appkit-grid", H1 = "appkit-grid_halign_start", W1 = "appkit-grid_halign_center", U1 = "appkit-grid_halign_end", G1 = "appkit-grid_valign_start", J1 = "appkit-grid_valign_center", K1 = "appkit-grid_valign_end", fc = {
  grid: R1,
  grid_halign_start: H1,
  grid_halign_center: W1,
  grid_halign_end: U1,
  grid_valign_start: G1,
  grid_valign_center: J1,
  grid_valign_end: K1
};
function dc(t) {
  return t > 0 && t < 1;
}
function _c(t) {
  return String(Math.ceil(t * 1e3) / 1e3);
}
function pc(t, r, e, n) {
  if (t.some(dc)) {
    const l = Math.max(...t.filter(dc).map((u) => 1 / u));
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
    i && !e[l] ? a[l] = `minmax(${ge(i * t[l] / s)},${_c(t[l])}fr)` : o || !e[l] && t[l] ? a[l] = `${_c(t[l])}fr` : a[l] = "auto";
  return a.join(" ");
}
function gc(t, r, e) {
  const n = t.slice();
  return n[33] = r[e], n;
}
function q1(t) {
  let r, e;
  return r = new In({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Y1(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "grid",
        fc,
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
      $$slots: { default: [X1] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      128 && (i.cls = ht(
        "grid",
        fc,
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function hc(t) {
  let r, e;
  return r = new Kn({
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
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function X1(t) {
  let r, e, n = ar(
    /*resultItems*/
    t[5]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = hc(gc(t, n, s));
  const i = (s) => x(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = er();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      J(s, r, a), e = !0;
    },
    p(s, a) {
      if (a[0] & /*resultItems*/
      32) {
        n = ar(
          /*resultItems*/
          s[5]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const u = gc(s, n, l);
          o[l] ? (o[l].p(u, a), L(o[l], 1)) : (o[l] = hc(u), o[l].c(), L(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (fr(), l = n.length; l < o.length; l += 1)
          i(l);
        dr();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          L(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        x(o[a]);
      e = !1;
    },
    d(s) {
      s && G(r), on(o, s);
    }
  };
}
function Z1(t) {
  let r, e, n, o;
  const i = [Y1, q1], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = er();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (fr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function Q1(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _ = v, h = () => (_(), _ = C(a, (fe) => e(27, f = fe)), a), m, p = v, w = () => (p(), p = C(s, (fe) => e(28, m = fe)), s), k, N = v, H = () => (N(), N = C(W, (fe) => e(29, k = fe)), W), z, oe = v, _e = () => (oe(), oe = C(i, (fe) => e(30, z = fe)), i);
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => oe());
  let { componentContext: T } = r, { layoutParams: Y = void 0 } = r;
  const E = Tr(Yr).direction;
  yn(t, E, (fe) => e(26, c = fe));
  let D = !1, M = 0, W, q, be = [], Ae = [], Ce = [], me = [], Fe = [], Q = [], Ke = 0, Ye = "start", Xe = "start", ye = [], Me;
  function ce() {
    e(3, D = !1), e(13, M = 0), e(21, Ye = "start"), e(22, Xe = "start");
  }
  function he(fe) {
    e(0, T = e(23, Me = {
      ...T,
      json: {
        ...T.json,
        items: fe.filter(zo)
      }
    }));
  }
  return sn(() => {
    ye.forEach((fe) => {
      fe.destroy();
    });
  }), t.$$set = (fe) => {
    "componentContext" in fe && e(0, T = fe.componentContext), "layoutParams" in fe && e(1, Y = fe.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(25, n = T.origJson), t.$$.dirty[0] & /*origJson*/
    33554432 && n && ce(), t.$$.dirty[0] & /*componentContext*/
    1 && e(24, o = Array.isArray(T.json.items) && T.json.items || []), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(10, i = T.getDerivedFromVars(T.json.column_count))), t.$$.dirty[0] & /*componentContext*/
    1 && w(e(9, s = T.getDerivedFromVars(T.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && h(e(8, a = T.getDerivedFromVars(T.json.content_alignment_horizontal))), t.$$.dirty[0] & /*$jsonColumnCount, columnCount, componentContext*/
    1073750017 && (e(13, M = Hn(z, M)), M < 1 ? (e(3, D = !0), T.logError(X(new Error("Incorrect column_count for grid")))) : e(3, D = !1)), t.$$.dirty[0] & /*items, prevContext, componentContext, jsonItems*/
    25165829) {
      const fe = new Set(ye), re = /* @__PURE__ */ new Map();
      Me === T && ye.forEach((de) => {
        re.set(de.json, de);
      }), e(2, ye = o.map((de, ne) => {
        const we = re.get(de);
        return we ? (fe.delete(we), we) : T.produceChildContext(de, { path: ne });
      }));
      for (const de of fe)
        de.destroy();
      e(23, Me = T);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    5) {
      let fe = [];
      ye.forEach((re) => {
        fe.push(T.getDerivedFromVars({
          rowSpan: re.json.row_span,
          columnSpan: re.json.column_span,
          width: re.json.width,
          height: re.json.height
        }));
      }), H(e(4, W = Ji(fe, (re) => [...re])));
    }
    if (t.$$.dirty[0] & /*items, $childStore, columnCount, columnsWeight, rowsWeight, columnsMinWidth, rowsMinHeight*/
    537124868) {
      const fe = {};
      let re = 0, de = 0;
      e(14, be = []), e(15, Ae = []), e(16, Ce = []), e(17, me = []), e(18, Fe = []), e(19, Q = []);
      let ne = 0;
      e(5, q = ye.map((we, Ue) => {
        var it, Pt, ft, Z;
        const Ge = k[Ue], $ = Math.min(M, Number(Ge.columnSpan) || 1), Be = Number(Ge.rowSpan) || 1, Ne = ((it = Ge.width) == null ? void 0 : it.type) === "match_parent" ? Number(Ge.width.weight || 1) / $ : 0, ot = ((Pt = Ge.height) == null ? void 0 : Pt.type) === "match_parent" ? Number(Ge.height.weight || 1) / Be : 0, ct = ((ft = Ge.width) == null ? void 0 : ft.type) === "fixed" && Ge.width.value ? Number(Ge.width.value) / $ : 0, nt = ((Z = Ge.height) == null ? void 0 : Z.type) === "fixed" && Ge.height.value ? Number(Ge.height.value) / Be : 0;
        for (; ; ) {
          let pe = !0;
          e: for (let st = re; st < re + $; ++st)
            for (let ze = de; ze < de + Be; ++ze)
              if (fe[st + "_" + ze]) {
                pe = !1;
                break e;
              }
          if (pe)
            break;
          ++re, re > M - $ && (re = 0, ++de);
        }
        const kt = { x: re, y: de, colSpan: $, rowSpan: Be };
        for (let pe = re; pe < re + $; ++pe)
          for (let st = de; st < de + Be; ++st)
            fe[pe + "_" + st] = !0, (!be[pe] || be[pe] < Ne) && e(14, be[pe] = Ne, be), (!Ae[st] || Ae[st] < ot) && e(15, Ae[st] = ot, Ae), $ === 1 && (!Ce[pe] || Ce[pe] < ct) && e(16, Ce[pe] = ct, Ce), Be === 1 && (!me[st] || me[st] < nt) && e(17, me[st] = nt, me), $ === 1 && ct && e(18, Fe[pe] = ct, Fe), Be === 1 && nt && e(19, Q[pe] = nt, Q);
        return ne = Math.max(ne, de + Be), {
          componentContext: we,
          layoutParams: { gridArea: kt }
        };
      })), e(20, Ke = Math.max(de + 1, ne));
    }
    t.$$.dirty[0] & /*$jsonContentVAlign, contentVAlign*/
    270532608 && e(21, Ye = kl(m, Ye)), t.$$.dirty[0] & /*$jsonContentHAlign, $direction, contentHAlign*/
    205520896 && e(22, Xe = wl(f, c, Xe)), t.$$.dirty[0] & /*contentVAlign, contentHAlign*/
    6291456 && e(7, l = {
      valign: Ye,
      halign: Xe
    }), t.$$.dirty[0] & /*columnsWeight, columnsMinWidth, columnsWidth, columnCount, rowsWeight, rowsMinHeight, rowsHeight, rowCount*/
    2088960 && e(6, u = {
      "grid-template-columns": pc(be, Ce, Fe, M),
      "grid-template-rows": pc(Ae, me, Q, Ke)
    });
  }, [
    T,
    Y,
    ye,
    D,
    W,
    q,
    u,
    l,
    a,
    s,
    i,
    E,
    he,
    M,
    be,
    Ae,
    Ce,
    me,
    Fe,
    Q,
    Ke,
    Ye,
    Xe,
    Me,
    o,
    n,
    c,
    f,
    m,
    k,
    z
  ];
}
class x1 extends Br {
  constructor(r) {
    super(), Or(this, r, Q1, Z1, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const $1 = "appkit-outer_width_content", eb = "appkit-outer_height_content", tb = "appkit-gallery", rb = "appkit-gallery__scroller", nb = "appkit-gallery_scrollbar_none", ob = "appkit-gallery_orientation_horizontal", ib = "appkit-gallery_orientation_vertical", sb = "appkit-gallery__items", lb = "appkit-gallery__arrow", ab = "appkit-gallery__gap", fo = {
  outer_width_content: $1,
  outer_height_content: eb,
  gallery: tb,
  gallery__scroller: rb,
  gallery_scrollbar_none: nb,
  gallery_orientation_horizontal: ob,
  gallery_orientation_vertical: ib,
  "gallery_scroll-snap": "appkit-gallery_scroll-snap",
  "gallery__items-grid": "appkit-gallery__items-grid",
  gallery__items: sb,
  gallery__arrow: lb,
  "gallery__arrow-icon-path": "appkit-gallery__arrow-icon-path",
  gallery__gap: ab
}, ub = "appkit-arrow", cb = "appkit-arrow__icon", fb = "appkit-arrow_left", db = "appkit-arrow_right", ho = {
  arrow: ub,
  arrow__icon: cb,
  arrow_left: fb,
  arrow_right: db
};
function _b(t, r) {
  return t === "start" || t === "center" || t === "end" ? t : r;
}
function pb(t) {
  const r = [];
  let e = t[0], n = 1;
  for (let o = 1; o <= t.length; o++)
    t[o] !== e ? (r.push(n > 1 ? `repeat(${n}, ${e})` : e), e = t[o], n = 1) : n++;
  return r.join(" ");
}
function Vo(t, r) {
  let e = t % r;
  return e < 0 && (e += r), e;
}
const { Boolean: r_, window: gb } = Po;
function mc(t, r, e) {
  const n = t.slice();
  return n[86] = r[e], n[87] = r, n[88] = e, n;
}
function bc(t, r, e) {
  const n = t.slice();
  return n[89] = r[e], n;
}
function yc(t) {
  let r;
  return {
    c() {
      r = Pe("div"), g(r, "class", fo.gallery__gap), I(
        r,
        "width",
        /*orientation*/
        t[4] === "horizontal" ? (
          /*gridGap*/
          t[12]
        ) : void 0
      ), I(
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
      J(e, r, n);
    },
    p(e, n) {
      n[0] & /*orientation, gridGap*/
      4112 && I(
        r,
        "width",
        /*orientation*/
        e[4] === "horizontal" ? (
          /*gridGap*/
          e[12]
        ) : void 0
      ), n[0] & /*orientation, gridGap*/
      4112 && I(
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
      e && G(r);
    }
  };
}
function wc(t) {
  let r, e, n, o = (
    /*item*/
    t[89].hasGapBefore && yc(t)
  );
  return e = new Kn({
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
      o && o.c(), r = hr(), Ut(e.$$.fragment);
    },
    m(i, s) {
      o && o.m(i, s), J(i, r, s), Bt(e, i, s), n = !0;
    },
    p(i, s) {
      /*item*/
      i[89].hasGapBefore ? o ? o.p(i, s) : (o = yc(i), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
      const a = {};
      s[0] & /*itemsGrid*/
      262144 && (a.componentContext = /*item*/
      i[89].componentContext), s[0] & /*childLayoutParams*/
      64 && (a.layoutParams = /*childLayoutParams*/
      i[6]), e.$set(a);
    },
    i(i) {
      n || (L(e.$$.fragment, i), n = !0);
    },
    o(i) {
      x(e.$$.fragment, i), n = !1;
    },
    d(i) {
      i && G(r), o && o.d(i), Rt(e, i);
    }
  };
}
function kc(t) {
  let r, e, n, o, i, s, a = (
    /*rowIndex*/
    t[88]
  ), l, u = ar(
    /*itemsRow*/
    t[86]
  ), c = [];
  for (let m = 0; m < u.length; m += 1)
    c[m] = wc(bc(t, u, m));
  const f = (m) => x(c[m], 1, 1, () => {
    c[m] = null;
  }), _ = () => (
    /*div1_binding*/
    t[71](r, a)
  ), h = () => (
    /*div1_binding*/
    t[71](null, a)
  );
  return {
    c() {
      r = Pe("div");
      for (let m = 0; m < c.length; m += 1)
        c[m].c();
      e = hr(), n = Pe("div"), i = hr(), g(n, "class", fo.gallery__gap), g(n, "style", o = cr(
        /*lastPaddingSize*/
        t[13]
      )), g(r, "class", fo.gallery__items), g(r, "style", s = cr(
        /*columnStyle*/
        t[16]
      ));
    },
    m(m, p) {
      J(m, r, p);
      for (let w = 0; w < c.length; w += 1)
        c[w] && c[w].m(r, null);
      bt(r, e), bt(r, n), bt(r, i), _(), l = !0;
    },
    p(m, p) {
      if (t = m, p[0] & /*itemsGrid, childLayoutParams, orientation, gridGap*/
      266320) {
        u = ar(
          /*itemsRow*/
          t[86]
        );
        let w;
        for (w = 0; w < u.length; w += 1) {
          const k = bc(t, u, w);
          c[w] ? (c[w].p(k, p), L(c[w], 1)) : (c[w] = wc(k), c[w].c(), L(c[w], 1), c[w].m(r, e));
        }
        for (fr(), w = u.length; w < c.length; w += 1)
          f(w);
        dr();
      }
      (!l || p[0] & /*lastPaddingSize*/
      8192 && o !== (o = cr(
        /*lastPaddingSize*/
        t[13]
      ))) && g(n, "style", o), (!l || p[0] & /*columnStyle*/
      65536 && s !== (s = cr(
        /*columnStyle*/
        t[16]
      ))) && g(r, "style", s), a !== /*rowIndex*/
      t[88] && (h(), a = /*rowIndex*/
      t[88], _());
    },
    i(m) {
      if (!l) {
        for (let p = 0; p < u.length; p += 1)
          L(c[p]);
        l = !0;
      }
    },
    o(m) {
      c = c.filter(r_);
      for (let p = 0; p < c.length; p += 1)
        x(c[p]);
      l = !1;
    },
    d(m) {
      m && G(r), on(c, m), h();
    }
  };
}
function vc(t) {
  let r, e, n = (
    /*hasScrollLeft*/
    t[10] && /*shouldCheckArrows*/
    t[8] && jc(t)
  ), o = (
    /*hasScrollRight*/
    t[11] && /*shouldCheckArrows*/
    t[8] && Cc(t)
  );
  return {
    c() {
      n && n.c(), r = hr(), o && o.c(), e = er();
    },
    m(i, s) {
      n && n.m(i, s), J(i, r, s), o && o.m(i, s), J(i, e, s);
    },
    p(i, s) {
      /*hasScrollLeft*/
      i[10] && /*shouldCheckArrows*/
      i[8] ? n ? n.p(i, s) : (n = jc(i), n.c(), n.m(r.parentNode, r)) : n && (n.d(1), n = null), /*hasScrollRight*/
      i[11] && /*shouldCheckArrows*/
      i[8] ? o ? o.p(i, s) : (o = Cc(i), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null);
    },
    d(i) {
      i && (G(r), G(e)), n && n.d(i), o && o.d(i);
    }
  };
}
function jc(t) {
  let r, e, n, o = !/*leftClass*/
  t[32] && hb();
  return {
    c() {
      r = Pe("div"), o && o.c(), g(
        r,
        "class",
        /*leftClass*/
        t[32] || `${fo.gallery__arrow} ${ho.arrow} ${ho.arrow_left}`
      );
    },
    m(i, s) {
      J(i, r, s), o && o.m(r, null), e || (n = xe(
        r,
        "click",
        /*click_handler*/
        t[74]
      ), e = !0);
    },
    p: v,
    d(i) {
      i && G(r), o && o.d(), e = !1, n();
    }
  };
}
function hb(t) {
  let r, e;
  return {
    c() {
      r = tn("svg"), e = tn("path"), g(e, "class", fo["gallery__arrow-icon-path"]), g(e, "d", "m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"), g(r, "class", ho.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      J(n, r, o), bt(r, e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function Cc(t) {
  let r, e, n, o = !/*rightClass*/
  t[33] && mb();
  return {
    c() {
      r = Pe("div"), o && o.c(), g(
        r,
        "class",
        /*rightClass*/
        t[33] || `${fo.gallery__arrow} ${ho.arrow} ${ho.arrow_right}`
      );
    },
    m(i, s) {
      J(i, r, s), o && o.m(r, null), e || (n = xe(
        r,
        "click",
        /*click_handler_1*/
        t[75]
      ), e = !0);
    },
    p: v,
    d(i) {
      i && G(r), o && o.d(), e = !1, n();
    }
  };
}
function mb(t) {
  let r, e;
  return {
    c() {
      r = tn("svg"), e = tn("path"), g(e, "class", fo["gallery__arrow-icon-path"]), g(e, "d", "M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"), g(r, "class", ho.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      J(n, r, o), bt(r, e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function bb(t) {
  let r, e, n, o, i, s, a, l, u, c, f = ar(
    /*itemsGrid*/
    t[18]
  ), _ = [];
  for (let p = 0; p < f.length; p += 1)
    _[p] = kc(mc(t, f, p));
  const h = (p) => x(_[p], 1, 1, () => {
    _[p] = null;
  });
  let m = (
    /*orientation*/
    t[4] === "horizontal" && vc(t)
  );
  return {
    c() {
      r = Pe("div"), e = Pe("div");
      for (let p = 0; p < _.length; p += 1)
        _[p].c();
      s = hr(), m && m.c(), a = er(), g(e, "class", fo["gallery__items-grid"]), g(e, "style", n = cr(
        /*gridStyle*/
        t[17]
      )), g(r, "class", o = fo.gallery__scroller + " " + /*$jsonRestrictParentScroll*/
      (t[30] ? Er["root_restrict-scroll"] : "")), g(r, "style", i = cr(
        /*scrollerStyle*/
        t[5]
      ));
    },
    m(p, w) {
      J(p, r, w), bt(r, e);
      for (let k = 0; k < _.length; k += 1)
        _[k] && _[k].m(e, null);
      t[72](e), t[73](r), J(p, s, w), m && m.m(p, w), J(p, a, w), l = !0, u || (c = xe(r, "scroll", function() {
        Lr(
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
    p(p, w) {
      if (t = p, w[0] & /*columnStyle, galleryItemsWrappers, lastPaddingSize, itemsGrid, childLayoutParams, orientation, gridGap*/
      340560) {
        f = ar(
          /*itemsGrid*/
          t[18]
        );
        let k;
        for (k = 0; k < f.length; k += 1) {
          const N = mc(t, f, k);
          _[k] ? (_[k].p(N, w), L(_[k], 1)) : (_[k] = kc(N), _[k].c(), L(_[k], 1), _[k].m(e, null));
        }
        for (fr(), k = f.length; k < _.length; k += 1)
          h(k);
        dr();
      }
      (!l || w[0] & /*gridStyle*/
      131072 && n !== (n = cr(
        /*gridStyle*/
        t[17]
      ))) && g(e, "style", n), (!l || w[0] & /*$jsonRestrictParentScroll*/
      1073741824 && o !== (o = fo.gallery__scroller + " " + /*$jsonRestrictParentScroll*/
      (t[30] ? Er["root_restrict-scroll"] : ""))) && g(r, "class", o), (!l || w[0] & /*scrollerStyle*/
      32 && i !== (i = cr(
        /*scrollerStyle*/
        t[5]
      ))) && g(r, "style", i), /*orientation*/
      t[4] === "horizontal" ? m ? m.p(t, w) : (m = vc(t), m.c(), m.m(a.parentNode, a)) : m && (m.d(1), m = null);
    },
    i(p) {
      if (!l) {
        for (let w = 0; w < f.length; w += 1)
          L(_[w]);
        l = !0;
      }
    },
    o(p) {
      _ = _.filter(r_);
      for (let w = 0; w < _.length; w += 1)
        x(_[w]);
      l = !1;
    },
    d(p) {
      p && (G(r), G(s), G(a)), on(_, p), t[72](null), t[73](null), m && m.d(p), u = !1, c();
    }
  };
}
function yb(t) {
  let r, e, n, o;
  return r = new hn({
    props: {
      cls: ht(
        "gallery",
        fo,
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
      $$slots: { default: [bb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(i, s) {
      Bt(r, i, s), e = !0, n || (o = xe(gb, "resize", function() {
        Lr(
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
      32768 && (a.cls = ht(
        "gallery",
        fo,
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
      e || (L(r.$$.fragment, i), e = !0);
    },
    o(i) {
      x(r.$$.fragment, i), e = !1;
    },
    d(i) {
      Rt(r, i), n = !1, o();
    }
  };
}
function wb(t, r, e) {
  let n = 0, o = [], i = [];
  for (let s = 0; s < t.length; ++s)
    o[n] || (o[n] = []), o[n].push({
      index: s,
      hasGapBefore: i[n] && r[s].visibility !== "gone",
      componentContext: t[s]
    }), !i[n] && r[s].visibility !== "gone" && (i[n] = !0), ++n >= e && (n = 0);
  return o;
}
function kb(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, z, oe, _e, T, Y, le = v, E = () => (le(), le = C(p, (ue) => e(59, Y = ue)), p), D, M = v, W = () => (M(), M = C(m, (ue) => e(60, D = ue)), m), q, be = v, Ae = () => (be(), be = C(_, (ue) => e(61, q = ue)), _), Ce, me = v, Fe = () => (me(), me = C(Gt, (ue) => e(62, Ce = ue)), Gt), Q, Ke = v, Ye = () => (Ke(), Ke = C(f, (ue) => e(63, Q = ue)), f), Xe, ye = v, Me = () => (ye(), ye = C(c, (ue) => e(64, Xe = ue)), c), ce, he = v, fe = () => (he(), he = C(u, (ue) => e(65, ce = ue)), u), re, de = v, ne = () => (de(), de = C(l, (ue) => e(66, re = ue)), l), we, Ue = v, Ge = () => (Ue(), Ue = C(a, (ue) => e(67, we = ue)), a), $, Be, Ne = v, ot = () => (Ne(), Ne = C(i, (ue) => e(69, Be = ue)), i), ct, nt = v, kt = () => (nt(), nt = C(s, (ue) => e(70, ct = ue)), s), it, Pt = v, ft = () => (Pt(), Pt = C(h, (ue) => e(30, it = ue)), h);
  t.$$.on_destroy.push(() => le()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => ye()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => Ue()), t.$$.on_destroy.push(() => Ne()), t.$$.on_destroy.push(() => nt()), t.$$.on_destroy.push(() => Pt());
  let { componentContext: Z } = r, { layoutParams: pe = void 0 } = r;
  const st = Tr(Yr), ze = st.direction;
  yn(t, ze, (ue) => e(58, T = ue));
  let F, Ct = [], ut = !1, Vt = !1, Dt = null, lt, K = !1;
  const Mt = st.getCustomization("galleryLeftClass"), It = st.getCustomization("galleryRightClass");
  let Xt, Zt = 1, Ee = "horizontal", Ze = "start", gt, Ie = 8, $e, Le, Ft = "", Oe, yt = [], Gt, Tt = {}, sr = !1, Te = {}, jt = 0;
  function lr() {
    e(42, Zt = 1), e(4, Ee = "horizontal"), e(43, Ze = "start"), e(44, Ie = 8), e(47, Ft = "");
  }
  let rr = null, nr = null;
  function pr() {
    var $t, Wt;
    const ue = Hn(ct, Zt), vt = Z.json.responsive;
    if (!vt || typeof vt != "object") {
      e(42, Zt = ue);
      return;
    }
    rr != null && rr.matches && (($t = vt.mobile) != null && $t.column_count) ? e(42, Zt = vt.mobile.column_count) : nr != null && nr.matches && ((Wt = vt.tablet) != null && Wt.column_count) ? e(42, Zt = vt.tablet.column_count) : e(42, Zt = ue);
  }
  function vr(ue) {
    e(0, Z = e(53, Ht = {
      ...Z,
      json: {
        ...Z.json,
        items: ue.filter(zo)
      }
    }));
  }
  const or = st.isDesktop;
  yn(t, or, (ue) => e(68, $ = ue));
  let ir = [], Ht;
  function mt() {
    if (!F)
      return;
    let ue = F.scrollLeft;
    T === "rtl" && (ue *= -1);
    const vt = F.scrollWidth, $t = F.offsetWidth;
    T === "ltr" ? (e(10, ut = ue > 2), e(11, Vt = ue + $t < vt - 2)) : (e(11, Vt = ue > 2), e(10, ut = ue + $t < vt - 2));
  }
  const Qt = ja(mt, 50);
  function ae(ue) {
    F.scroll({
      left: F.scrollLeft + F.offsetWidth * 0.75 * (ue === "right" ? 1 : -1),
      behavior: "smooth"
    });
  }
  function wr() {
    let ue = [], vt = Ct[0].children.length;
    for (let $t = 0; $t < vt; $t += 2)
      for (let Wt = 0; Wt < Zt; ++Wt) {
        const yr = Ct[Wt].children[$t];
        yr && ue.push(yr);
      }
    return ue;
  }
  function kr(ue, vt = !0) {
    const Wt = Ee === "horizontal" ? "left" : "top";
    F.scroll({
      [Wt]: ue,
      behavior: vt ? "smooth" : "instant"
    });
  }
  function Et(ue, vt, { animated: $t = !0, extraOffset: Wt = 0, overflow: yr = "clamp" } = {}) {
    const j = Ee === "horizontal", ie = j ? "offsetLeft" : "offsetTop";
    vt > ue.length - 1 ? vt = yr === "ring" ? Vo(vt, ue.length) : ue.length - 1 : vt < 0 && (vt = yr === "ring" ? Vo(vt, ue.length) : 0);
    const d = ue[vt];
    if (d) {
      let B;
      if (T === "ltr" || !j)
        B = d[ie] + 0.01 - Ie / 2;
      else {
        const je = F.offsetWidth;
        B = d[ie] + d.offsetWidth + 0.01 - Ie / 2 - je;
      }
      if (Wt) {
        B += Wt;
        const je = j ? F.scrollWidth - F.offsetWidth : F.scrollHeight - F.offsetHeight;
        B > je && (yr === "clamp" ? B = je : yr === "ring" && (B = Vo(B, je))), B < 0 && (yr === "clamp" ? B = 0 : yr === "ring" && (B = Vo(B, je)));
      }
      kr(B, $t);
    }
  }
  function Ir(ue, { overflow: vt = "clamp", animated: $t = !0 } = {}) {
    const Wt = Ee === "horizontal", yr = T === "ltr" || !Wt ? 1 : -1, j = Wt ? F.scrollLeft : F.scrollTop, ie = Wt ? F.scrollWidth - F.offsetWidth : F.scrollHeight - F.offsetHeight;
    let d = j * yr + ue;
    d > ie ? vt === "clamp" ? d = ie : vt === "ring" && (d = Vo(d, ie)) : d < 0 && (vt === "clamp" ? d = 0 : vt === "ring" && (d = Vo(d, ie))), kr(d * yr, $t);
  }
  function Pr(ue, vt) {
    return Ee === "horizontal" ? vt.right > ue.left && ue.right > vt.left : vt.bottom > ue.top && ue.bottom > vt.top;
  }
  function ur(ue, vt) {
    return Ee === "horizontal" ? vt.left >= ue.left && vt.right <= ue.right : vt.top >= ue.top && vt.bottom <= ue.bottom;
  }
  function dt(ue) {
    const vt = wr(), $t = F.getBoundingClientRect(), Wt = vt.findIndex((ie) => ur($t, ie.getBoundingClientRect()));
    if (Wt !== -1)
      return Wt;
    const yr = vt.map((ie) => Pr($t, ie.getBoundingClientRect())), j = yr.findIndex(Boolean);
    return j !== -1 ? ue === "prev" && yr.filter(Boolean).length === 2 ? j + 1 : j : ue === "prev" ? 1 : vt.length - 2;
  }
  xn(() => {
    if (e(40, K = !0), mt(), jt) {
      const ue = wr();
      Et(ue, jt, { animated: !1 });
    }
  }), sn(() => {
    e(40, K = !1), ir.forEach((ue) => {
      ue.destroy();
    }), Xt && !Z.fakeElement && (st.unregisterInstance(Xt), e(41, Xt = void 0)), rr && rr.removeEventListener("change", pr), nr && nr.removeEventListener("change", pr);
  });
  function At(ue, vt) {
    Dr[ue ? "unshift" : "push"](() => {
      Ct[vt] = ue, e(9, Ct);
    });
  }
  function Jt(ue) {
    Dr[ue ? "unshift" : "push"](() => {
      lt = ue, e(3, lt);
    });
  }
  function xt(ue) {
    Dr[ue ? "unshift" : "push"](() => {
      F = ue, e(2, F);
    });
  }
  const et = () => ae("left"), pt = () => ae("right");
  return t.$$set = (ue) => {
    "componentContext" in ue && e(0, Z = ue.componentContext), "layoutParams" in ue && e(1, pe = ue.layoutParams);
  }, t.$$.update = () => {
    var ue, vt, $t, Wt, yr, j;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(57, n = Z.origJson), t.$$.dirty[1] & /*origJson*/
    67108864 && n && lr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(56, o = Array.isArray(Z.json.items) && Z.json.items || []), t.$$.dirty[0] & /*componentContext*/
    1 && ot(e(29, i = typeof ((ue = Z.json.item_builder) == null ? void 0 : ue.data) == "string" ? Z.getDerivedFromVars((vt = Z.json.item_builder) == null ? void 0 : vt.data, void 0, !0) : ($t = Z.json.item_builder) != null && $t.data ? Jo(Z.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && kt(e(28, s = Z.getDerivedFromVars(Z.json.column_count))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(27, a = Z.getDerivedFromVars(Z.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*columns, mobileQuery, tabletQuery*/
    3147776 | t.$$.dirty[2] & /*$jsonColumnCount*/
    256) {
      const ie = Hn(ct, Zt), d = Z.json.responsive;
      d && typeof d == "object" && typeof window < "u" ? (rr || (e(51, rr = window.matchMedia("(max-width: 767px)")), e(52, nr = window.matchMedia("(min-width: 768px) and (max-width: 1023px)")), rr.addEventListener("change", pr), nr.addEventListener("change", pr)), pr()) : e(42, Zt = ie);
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 && ne(e(26, l = Z.getDerivedFromVars(Z.json.cross_content_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(25, u = Z.getDerivedFromVars(Z.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && Me(e(24, c = Z.getDerivedFromVars(Z.json.cross_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(23, f = Z.getDerivedFromVars(Z.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(22, _ = Z.getDerivedFromVars(Z.json.scroll_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && ft(e(21, h = Z.getDerivedFromVars(Z.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && W(e(20, m = Z.getDerivedFromVars(Z.json.scrollbar))), t.$$.dirty[0] & /*componentContext*/
    1 && E(e(19, p = Z.getDerivedFromVars(Z.json.default_item))), t.$$.dirty[0] & /*componentContext, items*/
    129 | t.$$.dirty[1] & /*jsonItems, prevContext*/
    37748736 | t.$$.dirty[2] & /*$jsonItemBuilderData*/
    128) {
      let ie = [];
      if (Z.json.item_builder && Array.isArray(Be) && Array.isArray(Z.json.item_builder.prototypes)) {
        const He = Z.json.item_builder;
        ie = vl(Be, st, Z, He);
      } else
        ie = (Array.isArray(o) && o || []).map((He, ke) => ({
          div: He,
          key: He.id || { index: ke, data: He }
        }));
      const d = new Set(ir), B = /* @__PURE__ */ new Map();
      let je = !1;
      Ht === Z && ir.forEach((He) => {
        He.key && (typeof He.key == "string" && B.has(He.key) ? je || (je = !0, Z.logError(X(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: He.key } }))) : B.set(
          typeof He.key == "string" ? He.key : He.key.index,
          He
        ));
      }), e(7, ir = ie.map((He, ke) => {
        let P = !je && B.get(He.id), Lt = B.get(ke);
        return !P && !He.id && typeof He.key == "object" && typeof (Lt == null ? void 0 : Lt.key) == "object" && Ki(Lt.key.data, He.key.data) && (P = Lt), P ? (d.delete(P), P) : Z.produceChildContext(He.div, {
          path: ke,
          variables: He.vars,
          id: He.id,
          key: He.key
        });
      }));
      for (const He of d)
        He.destroy();
      e(53, Ht = Z);
    }
    if (t.$$.dirty[1] & /*mounted*/
    512 | t.$$.dirty[2] & /*$isDesktop*/
    64 && e(8, w = $ && K), t.$$.dirty[0] & /*shouldCheckArrows, itemsGridElem*/
    264 | t.$$.dirty[1] & /*resizeObserver*/
    256 && (w ? typeof ResizeObserver < "u" && (e(39, Dt = new ResizeObserver(() => {
      Qt();
    })), Dt.observe(lt)) : Dt && (Dt.disconnect(), e(39, Dt = null))), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[2] & /*$jsonOrientation*/
    32 && e(4, Ee = Ca(we, Ee)), t.$$.dirty[1] & /*align*/
    4096 | t.$$.dirty[2] & /*$jsonCrossContentAlignment*/
    16 && e(43, Ze = _b(re, Ze)), t.$$.dirty[1] & /*itemSpacing*/
    8192 | t.$$.dirty[2] & /*$jsonItemSpacing*/
    8 && (e(44, Ie = rn(ce, Ie)), e(12, gt = ge(Ie))), t.$$.dirty[1] & /*itemSpacing, crossSpacing*/
    40960 | t.$$.dirty[2] & /*$jsonCrossSpacing*/
    4 && (e(46, Le = rn(Xe, Ie)), e(45, $e = ge(Le))), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*$direction, padding*/
    134283264 | t.$$.dirty[2] & /*$jsonPaddings*/
    2) {
      e(47, Ft = us(Q, T, Ft));
      const ie = Ee === "horizontal" ? (yr = (Wt = Q == null ? void 0 : Q.end) != null ? Wt : Q == null ? void 0 : Q[T === "ltr" ? "right" : "left"]) != null ? yr : 0 : (j = Q == null ? void 0 : Q.bottom) != null ? j : 0, d = ge(ie);
      e(13, Oe = {
        width: Ee === "horizontal" ? d : "1px",
        height: Ee === "horizontal" ? "1px" : d,
        "margin-right": Ee === "horizontal" && T === "ltr" ? "-" + d : void 0,
        "margin-left": Ee === "horizontal" && T === "rtl" ? "-" + d : void 0,
        "margin-bottom": Ee === "vertical" ? "-" + d : void 0
      });
    }
    if (t.$$.dirty[0] & /*items, orientation*/
    144) {
      let ie = [];
      ir.forEach((d) => {
        const B = Ee === "horizontal" ? "width" : "height";
        ie.push(d.getDerivedFromVars({
          size: d.json[B],
          visibility: d.json.visibility
        }));
      }), Fe(e(14, Gt = Ji(ie, (d) => [...d])));
    }
    if (t.$$.dirty[0] & /*items*/
    128 | t.$$.dirty[1] & /*columns*/
    2048 | t.$$.dirty[2] & /*$childStore*/
    1 && e(18, k = wb(ir, Ce, Zt)), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*columns, templateSizes*/
    133120 | t.$$.dirty[2] & /*$childStore*/
    1 && (e(48, yt = []), Zt > 1 || Ce.forEach((ie, d) => {
      var B;
      ie.visibility !== "gone" && (!ie.size && Ee === "horizontal" || ((B = ie.size) == null ? void 0 : B.type) === "match_parent" ? yt.push("100%") : yt.push("max-content"), d + 1 < Ce.length && yt.push("auto"));
    }), yt.push("auto")), t.$$.dirty[0] & /*componentContext*/
    1 && e(55, N = Z.json.fixed_columns === !0), t.$$.dirty[0] & /*orientation, scrollerStyle, childLayoutParams*/
    112 | t.$$.dirty[1] & /*align, $jsonScrollMode, itemSpacing*/
    1073754112) {
      const ie = {};
      let d = {};
      if (e(49, sr = !1), d.treatMatchParentAs100 = !0, Ee === "horizontal" ? (d.parentVAlign = Ze, d.parentContainerOrientation = "horizontal") : (d.parentHAlign = Ze, d.parentContainerOrientation = "vertical"), q === "paging") {
        e(49, sr = !0), d.scrollSnap = "start";
        const B = Ee === "horizontal" ? "scroll-padding-left" : "scroll-padding-top";
        ie[B] = ge(Ie / 2);
      }
      e(5, Tt = ei(ie, Tt)), e(6, Te = ei(d, Te));
    }
    t.$$.dirty[0] & /*orientation*/
    16 && e(54, H = Ee === "horizontal" ? "grid-template-columns" : "grid-template-rows"), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*padding, crossGridGap, fixedColumns, columns*/
    16861184 && e(17, z = {
      padding: Ft,
      "grid-gap": $e,
      ...N && Zt > 1 && Ee === "vertical" ? {
        display: "grid",
        "grid-template-columns": `repeat(${Zt}, 1fr)`
      } : {}
    }), t.$$.dirty[1] & /*gridTemplate, templateSizes*/
    8519680 && e(16, oe = {
      [H]: pb(yt)
    }), t.$$.dirty[0] & /*orientation*/
    16 | t.$$.dirty[1] & /*scrollSnap, $jsonScrollbar*/
    537133056 && e(15, _e = {
      orientation: Ee,
      "scroll-snap": sr,
      scrollbar: D === "auto" ? "auto" : "none"
    }), t.$$.dirty[1] & /*$jsonDefaultItem, defaultItem*/
    268959744 && e(50, jt = rn(Y, jt)), t.$$.dirty[0] & /*componentContext*/
    1 && Z.json && Qt(), t.$$.dirty[0] & /*componentContext, orientation, scroller*/
    21 | t.$$.dirty[1] & /*prevId, $direction*/
    134218752 && Z.json && (Xt && (st.unregisterInstance(Xt), e(41, Xt = void 0)), Z.id && !Z.fakeElement && (e(41, Xt = Z.id), st.registerInstance(Xt, {
      setCurrentItem(ie, d) {
        const B = wr();
        if (ie < 0 || ie > B.length - 1)
          throw new Error('Item is out of range in "set-current-item" action');
        Et(B, ie, { animated: d });
      },
      setPreviousItem(ie, d, B) {
        const je = dt("prev"), He = wr();
        let ke = je - ie;
        Et(He, ke, { animated: B, overflow: d });
      },
      setNextItem(ie, d, B) {
        const je = Ee === "horizontal", He = T === "ltr" || !je ? 1 : -1, ke = je ? F.scrollLeft * He + F.offsetWidth === F.scrollWidth : F.scrollTop + F.offsetHeight === F.scrollHeight, P = wr();
        if (ke && d === "ring") {
          Et(P, 0, { animated: B });
          return;
        }
        let zt = dt("next") + ie;
        Et(P, zt, { animated: B, overflow: d });
      },
      scrollToStart(ie) {
        kr(0, ie);
      },
      scrollToEnd(ie) {
        kr(
          T === "ltr" || Ee !== "horizontal" ? 1e6 : -1e6,
          ie
        );
      },
      scrollToPosition(ie, d) {
        kr(
          T === "ltr" || Ee !== "horizontal" ? ie : -ie,
          d
        );
      },
      scrollCombined({ step: ie, offset: d, overflow: B, animated: je }) {
        if (ie) {
          const ke = dt(ie > 0 ? "next" : "prev") + ie;
          Et(wr(), ke, { animated: je, extraOffset: d, overflow: B });
        } else d && Ir(d, { overflow: B, animated: je });
      }
    })));
  }, [
    Z,
    pe,
    F,
    lt,
    Ee,
    Tt,
    Te,
    ir,
    w,
    Ct,
    ut,
    Vt,
    gt,
    Oe,
    Gt,
    _e,
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
    Mt,
    It,
    vr,
    or,
    mt,
    Qt,
    ae,
    Dt,
    K,
    Xt,
    Zt,
    Ze,
    Ie,
    $e,
    Le,
    Ft,
    yt,
    sr,
    jt,
    rr,
    nr,
    Ht,
    H,
    N,
    o,
    n,
    T,
    Y,
    D,
    q,
    Ce,
    Q,
    Xe,
    ce,
    re,
    we,
    $,
    Be,
    ct,
    At,
    Jt,
    xt,
    et,
    pt
  ];
}
class vb extends Br {
  constructor(r) {
    super(), Or(this, r, kb, yb, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const jb = "appkit-outer", Cb = "appkit-tabs", Eb = "appkit-tabs__list", Ab = "appkit-tabs__item", Sb = "appkit-tabs__item_selected", Vb = "appkit-tabs_animation_fade", Fb = "appkit-tabs_animation_none", Db = "appkit-tabs__item_actionable", Ib = "appkit-tabs__panels", Tb = "appkit-tabs__swiper", Mb = "appkit-tabs__swiper_animated", Pb = "appkit-tabs__swiper_inited", Nb = "appkit-tabs__panel", zb = "appkit-tabs__panel_visible", Lb = "appkit-tabs__separator", Ob = "appkit-tabs__delimitier", Cn = {
  outer: jb,
  "root__any-actions": "appkit-root__any-actions",
  tabs: Cb,
  tabs__list: Eb,
  "tabs__items-bg": "appkit-tabs__items-bg",
  "tabs__items-text": "appkit-tabs__items-text",
  tabs__item: Ab,
  tabs__item_selected: Sb,
  tabs_animation_fade: Vb,
  tabs_animation_none: Fb,
  tabs__item_actionable: Db,
  tabs__panels: Ib,
  "tabs_own-height": "appkit-tabs_own-height",
  tabs__swiper: Tb,
  tabs__swiper_animated: Mb,
  tabs__swiper_inited: Pb,
  tabs__panel: Nb,
  tabs__panel_visible: zb,
  "tabs_height-parent_yes": "appkit-tabs_height-parent_yes",
  tabs__separator: Lb,
  tabs__delimitier: Ob,
  "tabs__tabs-highlighter": "appkit-tabs__tabs-highlighter"
};
function Bb(t, r) {
  var n, o;
  if (!t || !t.image_url || typeof t.image_url != "string")
    return r;
  const e = {
    url: t.image_url,
    width: 12,
    height: 12
  };
  return ((n = t.width) == null ? void 0 : n.type) === "fixed" && Pn(t.width.value) && (e.width = t.width.value), ((o = t.height) == null ? void 0 : o.type) === "fixed" && Pn(t.height.value) && (e.height = t.height.value), e;
}
const n_ = 37, o_ = 39, i_ = 36, s_ = 35;
function Rb(t, r, e, n) {
  const o = [
    t["top-left"],
    t["top-right"],
    t["bottom-right"],
    t["bottom-left"]
  ];
  for (let i = 0; i < o.length; ++i)
    if (o[i] && !zn(o[i]))
      return n;
  return Hs(t, r, e);
}
function Ec(t) {
  const r = t.touches[0], e = r.clientX || r.pageX, n = r.clientY || r.pageY;
  return { x: e, y: n };
}
function Hb(t) {
  let r, e;
  return r = new Kn({
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
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Wb(t, r, e) {
  let { componentContext: n } = r, { layoutParams: o = void 0 } = r, { enabled: i } = r;
  const s = Io(i);
  return hi(ka, { isEnabled: s }), t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext), "layoutParams" in a && e(1, o = a.layoutParams), "enabled" in a && e(2, i = a.enabled);
  }, t.$$.update = () => {
    t.$$.dirty & /*enabled*/
    4 && s.set(i);
  }, [n, o, i];
}
class Ub extends Br {
  constructor(r) {
    super(), Or(this, r, Wb, Hb, Sr, {
      componentContext: 0,
      layoutParams: 1,
      enabled: 2
    });
  }
}
const { Boolean: Ac, window: Gb } = Po;
function Sc(t, r, e) {
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
function Vc(t, r, e) {
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
function Fc(t, r, e) {
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
function Jb(t) {
  let r, e;
  return r = new In({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Kb(t) {
  let r, e;
  const n = [
    {
      cls: ht(
        "tabs",
        Cn,
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
    $$slots: { default: [Yb] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < n.length; i += 1)
    o = jo(o, n[i]);
  return r = new hn({ props: o }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(i, s) {
      Bt(r, i, s), e = !0;
    },
    p(i, s) {
      const a = s[0] & /*mods, componentContext, layoutParams*/
      16777219 | s[1] & /*parentOfItems, replaceItems, devapi*/
      6356992 ? No(n, [
        s[0] & /*mods*/
        16777216 && {
          cls: ht(
            "tabs",
            Cn,
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
        2097152 && Ld(
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
      e || (L(r.$$.fragment, i), e = !0);
    },
    o(i) {
      x(r.$$.fragment, i), e = !1;
    },
    d(i) {
      Rt(r, i);
    }
  };
}
function Dc(t) {
  let r;
  return {
    c() {
      r = Pe("span"), g(r, "class", Cn.tabs__delimitier), I(
        r,
        "width",
        /*delimitierStyle*/
        t[15].width ? ge(
          /*delimitierStyle*/
          t[15].width
        ) : void 0
      ), I(
        r,
        "height",
        /*delimitierStyle*/
        t[15].height ? ge(
          /*delimitierStyle*/
          t[15].height
        ) : void 0
      );
    },
    m(e, n) {
      J(e, r, n);
    },
    p(e, n) {
      n[0] & /*delimitierStyle*/
      32768 && I(
        r,
        "width",
        /*delimitierStyle*/
        e[15].width ? ge(
          /*delimitierStyle*/
          e[15].width
        ) : void 0
      ), n[0] & /*delimitierStyle*/
      32768 && I(
        r,
        "height",
        /*delimitierStyle*/
        e[15].height ? ge(
          /*delimitierStyle*/
          e[15].height
        ) : void 0
      );
    },
    d(e) {
      e && G(r);
    }
  };
}
function Ic(t) {
  let r, e, n = (
    /*item*/
    t[99].title + ""
  ), o, i, s = (
    /*delimitierStyle*/
    t[15] && /*index*/
    t[100] > 0 && Dc(t)
  );
  return {
    c() {
      s && s.c(), r = hr(), e = Pe("span"), o = On(n), g(e, "class", i = ht("tabs__item", Cn, {
        selected: (
          /*isSelected*/
          t[104]
        ),
        actionable: !!/*item*/
        t[99].title_click_action
      }));
    },
    m(a, l) {
      s && s.m(a, l), J(a, r, l), J(a, e, l), bt(e, o);
    },
    p(a, l) {
      /*delimitierStyle*/
      a[15] && /*index*/
      a[100] > 0 ? s ? s.p(a, l) : (s = Dc(a), s.c(), s.m(r.parentNode, r)) : s && (s.d(1), s = null), l[0] & /*$childStore*/
      262144 && n !== (n = /*item*/
      a[99].title + "") && Jn(o, n), l[0] & /*$childStore, selected*/
      393216 && i !== (i = ht("tabs__item", Cn, {
        selected: (
          /*isSelected*/
          a[104]
        ),
        actionable: !!/*item*/
        a[99].title_click_action
      })) && g(e, "class", i);
    },
    d(a) {
      a && (G(r), G(e)), s && s.d(a);
    }
  };
}
function Tc(t) {
  let r, e;
  return {
    c() {
      r = Pe("div"), g(r, "class", Cn["tabs__tabs-highlighter"]), g(r, "style", e = cr(
        /*selectedTabStyles*/
        t[36]
      ));
    },
    m(n, o) {
      J(n, r, o);
    },
    p(n, o) {
      o[1] & /*selectedTabStyles*/
      32 && e !== (e = cr(
        /*selectedTabStyles*/
        n[36]
      )) && g(r, "style", e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function Mc(t) {
  let r, e;
  return {
    c() {
      r = Pe("img"), g(r, "class", Cn.tabs__delimitier), g(r, "alt", ""), g(r, "loading", "lazy"), g(r, "decoding", "async"), Qn(r.src, e = /*delimitierStyle*/
      t[15].url) || g(r, "src", e), I(
        r,
        "width",
        /*delimitierStyle*/
        t[15].width ? ge(
          /*delimitierStyle*/
          t[15].width
        ) : void 0
      ), I(
        r,
        "height",
        /*delimitierStyle*/
        t[15].height ? ge(
          /*delimitierStyle*/
          t[15].height
        ) : void 0
      );
    },
    m(n, o) {
      J(n, r, o);
    },
    p(n, o) {
      o[0] & /*delimitierStyle*/
      32768 && !Qn(r.src, e = /*delimitierStyle*/
      n[15].url) && g(r, "src", e), o[0] & /*delimitierStyle*/
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
      n && G(r);
    }
  };
}
function qb(t) {
  let r = (
    /*item*/
    t[99].title + ""
  ), e;
  return {
    c() {
      e = On(r);
    },
    m(n, o) {
      J(n, e, o);
    },
    p(n, o) {
      o[0] & /*$childStore*/
      262144 && r !== (r = /*item*/
      n[99].title + "") && Jn(e, r);
    },
    d(n) {
      n && G(e);
    }
  };
}
function Pc(t) {
  let r, e, n, o = (
    /*delimitierStyle*/
    t[15] && /*index*/
    t[100] > 0 && Mc(t)
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
      cls: ht("tabs__item", Cn, {
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
        ].filter(xs) : []
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
      $$slots: { default: [qb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      o && o.c(), r = hr(), Ut(e.$$.fragment);
    },
    m(s, a) {
      o && o.m(s, a), J(s, r, a), Bt(e, s, a), n = !0;
    },
    p(s, a) {
      t = s, /*delimitierStyle*/
      t[15] && /*index*/
      t[100] > 0 ? o ? o.p(t, a) : (o = Mc(t), o.c(), o.m(r.parentNode, r)) : o && (o.d(1), o = null);
      const l = {};
      a[0] & /*componentContext*/
      1 && (l.componentContext = /*componentContext*/
      t[0]), a[0] & /*$childStore, selected*/
      393216 && (l.cls = ht("tabs__item", Cn, {
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
      ].filter(xs) : []), a[0] & /*$childStore, selected, componentContext*/
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
      n || (L(e.$$.fragment, s), n = !0);
    },
    o(s) {
      x(e.$$.fragment, s), n = !1;
    },
    d(s) {
      s && G(r), o && o.d(s), Rt(e, s);
    }
  };
}
function Nc(t) {
  let r, e;
  return {
    c() {
      r = Pe("div"), g(r, "class", Cn.tabs__separator), g(r, "style", e = cr(
        /*separatorStyle*/
        t[38]
      ));
    },
    m(n, o) {
      J(n, r, o);
    },
    p(n, o) {
      o[1] & /*separatorStyle*/
      128 && e !== (e = cr(
        /*separatorStyle*/
        n[38]
      )) && g(r, "style", e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function zc(t) {
  let r, e;
  return r = new Ub({
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
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Lc(t) {
  let r, e, n, o, i, s, a = (
    /*childComponentContext*/
    t[101] && zc(t)
  );
  return {
    c() {
      r = Pe("div"), a && a.c(), e = hr(), g(r, "class", n = ht("tabs__panel", Cn, {
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
      t[100]), I(
        r,
        "left",
        /*index*/
        t[100] * 100 + "%"
      );
    },
    m(l, u) {
      J(l, r, u), a && a.m(r, null), bt(r, e), s = !0;
    },
    p(l, u) {
      /*childComponentContext*/
      l[101] ? a ? (a.p(l, u), u[0] & /*$childStore*/
      262144 | u[1] & /*showedPanels*/
      4 && L(a, 1)) : (a = zc(l), a.c(), L(a, 1), a.m(r, e)) : a && (fr(), x(a, 1, 1, () => {
        a = null;
      }), dr()), (!s || u[0] & /*$childStore*/
      262144 | u[1] & /*visiblePanels*/
      8 && n !== (n = ht("tabs__panel", Cn, {
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
      s || (L(a), s = !0);
    },
    o(l) {
      x(a), s = !1;
    },
    d(l) {
      l && G(r), a && a.d();
    }
  };
}
function Yb(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _, h, m, p, w = ar(
    /*$childStore*/
    t[18]
  ), k = [];
  for (let E = 0; E < w.length; E += 1)
    k[E] = Ic(Fc(t, w, E));
  let N = (
    /*animationType*/
    t[16] === "slide" && /*selectedTabStyles*/
    t[36] && Tc(t)
  ), H = ar(
    /*$childStore*/
    t[18]
  ), z = [];
  for (let E = 0; E < H.length; E += 1)
    z[E] = Pc(Vc(t, H, E));
  const oe = (E) => x(z[E], 1, 1, () => {
    z[E] = null;
  });
  let _e = (
    /*$jsonSeparator*/
    t[20] && Nc(t)
  ), T = ar(
    /*$childStore*/
    t[18]
  ), Y = [];
  for (let E = 0; E < T.length; E += 1)
    Y[E] = Lc(Sc(t, T, E));
  const le = (E) => x(Y[E], 1, 1, () => {
    Y[E] = null;
  });
  return {
    c() {
      r = Pe("div"), e = Pe("div");
      for (let E = 0; E < k.length; E += 1)
        k[E].c();
      n = hr(), N && N.c(), o = hr(), i = Pe("div");
      for (let E = 0; E < z.length; E += 1)
        z[E].c();
      a = hr(), _e && _e.c(), l = hr(), u = Pe("div"), c = Pe("div");
      for (let E = 0; E < Y.length; E += 1)
        Y[E].c();
      g(e, "class", Cn["tabs__items-bg"]), g(e, "aria-hidden", "true"), g(i, "class", Cn["tabs__items-text"]), g(r, "class", s = Cn.tabs__list + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Er["root_restrict-scroll"] : "")), g(r, "role", "tablist"), I(
        r,
        "--divkit-tabs-title-padding",
        /*titlePadding*/
        t[14] ? so(
          /*titlePadding*/
          t[14],
          /*$direction*/
          t[19]
        ) : ""
      ), I(r, "--divkit-tabs-font-size", ge(
        /*tabFontSize*/
        t[4]
      )), I(
        r,
        "--divkit-tabs-paddings",
        /*tabPaddings*/
        t[5]
      ), I(
        r,
        "--divkit-tabs-line-height",
        /*tabLineHeight*/
        t[25]
      ), I(
        r,
        "--divkit-tabs-letter-spacing",
        /*tabLetterSpacing*/
        t[26]
      ), I(
        r,
        "--divkit-tabs-active-font-weight",
        /*tabActiveFontWeight*/
        t[7] || ""
      ), I(
        r,
        "--divkit-tabs-inactive-font-weight",
        /*tabInactiveFontWeight*/
        t[8] || ""
      ), I(
        r,
        "--divkit-tabs-active-font-family",
        /*tabActiveFontFamily*/
        t[27] || ""
      ), I(
        r,
        "--divkit-tabs-inactive-font-family",
        /*tabInactiveFontFamily*/
        t[29] || ""
      ), I(
        r,
        "--divkit-tabs-active-font-variation-settings",
        /*tabActiveFontVariationSettings*/
        t[28] || ""
      ), I(
        r,
        "--divkit-tabs-inactive-font-variation-settings",
        /*tabInactiveFontVariationSettings*/
        t[30] || ""
      ), I(
        r,
        "--divkit-tabs-active-text-color",
        /*tabActiveTextColor*/
        t[9]
      ), I(
        r,
        "--divkit-tabs-inactive-text-color",
        /*tabInactiveTextColor*/
        t[10]
      ), I(
        r,
        "--divkit-tabs-active-background-color",
        /*tabActiveBackground*/
        t[11]
      ), I(
        r,
        "--divkit-tabs-inactive-background-color",
        /*tabInactiveBackground*/
        t[12]
      ), I(
        r,
        "--divkit-tabs-border-radius",
        /*tabBorderRadius*/
        t[6]
      ), I(
        r,
        "--divkit-tabs-items-spacing",
        /*tabItemSpacing*/
        t[13] ? un(
          /*tabItemSpacing*/
          t[13] * 10 / /*tabFontSize*/
          t[4]
        ) : ""
      ), I(
        r,
        "--divkit-tabs-animation-duration",
        /*animationDuration*/
        t[35] !== void 0 ? `${/*animationDuration*/
        t[35]}ms` : ""
      ), g(c, "class", f = ht("tabs__swiper", Cn, {
        inited: (
          /*isSwipeInitialized*/
          t[31]
        ),
        animated: (
          /*isAnimated*/
          t[32]
        )
      })), g(u, "class", _ = Cn.tabs__panels + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Er["root_restrict-scroll"] : ""));
    },
    m(E, D) {
      J(E, r, D), bt(r, e);
      for (let M = 0; M < k.length; M += 1)
        k[M] && k[M].m(e, null);
      bt(e, n), N && N.m(e, null), bt(r, o), bt(r, i);
      for (let M = 0; M < z.length; M += 1)
        z[M] && z[M].m(i, null);
      t[74](r), J(E, a, D), _e && _e.m(E, D), J(E, l, D), J(E, u, D), bt(u, c);
      for (let M = 0; M < Y.length; M += 1)
        Y[M] && Y[M].m(c, null);
      t[75](c), t[76](u), h = !0, m || (p = [
        xe(
          r,
          "keydown",
          /*onTabKeydown*/
          t[55]
        ),
        xe(u, "touchstart", function() {
          Lr(
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
        xe(u, "touchmove", function() {
          Lr(
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
        xe(u, "touchend", function() {
          Lr(
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
        xe(u, "touchcancel", function() {
          Lr(
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
    p(E, D) {
      if (t = E, D[0] & /*$childStore, selected, delimitierStyle*/
      425984) {
        w = ar(
          /*$childStore*/
          t[18]
        );
        let M;
        for (M = 0; M < w.length; M += 1) {
          const W = Fc(t, w, M);
          k[M] ? k[M].p(W, D) : (k[M] = Ic(W), k[M].c(), k[M].m(e, n));
        }
        for (; M < k.length; M += 1)
          k[M].d(1);
        k.length = w.length;
      }
      if (/*animationType*/
      t[16] === "slide" && /*selectedTabStyles*/
      t[36] ? N ? N.p(t, D) : (N = Tc(t), N.c(), N.m(e, null)) : N && (N.d(1), N = null), D[0] & /*componentContext, $childStore, selected, delimitierStyle*/
      425985 | D[1] & /*instId, selectItem*/
      8912896) {
        H = ar(
          /*$childStore*/
          t[18]
        );
        let M;
        for (M = 0; M < H.length; M += 1) {
          const W = Vc(t, H, M);
          z[M] ? (z[M].p(W, D), L(z[M], 1)) : (z[M] = Pc(W), z[M].c(), L(z[M], 1), z[M].m(i, null));
        }
        for (fr(), M = H.length; M < z.length; M += 1)
          oe(M);
        dr();
      }
      if ((!h || D[1] & /*$jsonRestrictParentScroll*/
      131072 && s !== (s = Cn.tabs__list + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Er["root_restrict-scroll"] : ""))) && g(r, "class", s), D[0] & /*titlePadding, $direction*/
      540672 && I(
        r,
        "--divkit-tabs-title-padding",
        /*titlePadding*/
        t[14] ? so(
          /*titlePadding*/
          t[14],
          /*$direction*/
          t[19]
        ) : ""
      ), D[0] & /*tabFontSize*/
      16 && I(r, "--divkit-tabs-font-size", ge(
        /*tabFontSize*/
        t[4]
      )), D[0] & /*tabPaddings*/
      32 && I(
        r,
        "--divkit-tabs-paddings",
        /*tabPaddings*/
        t[5]
      ), D[0] & /*tabLineHeight*/
      33554432 && I(
        r,
        "--divkit-tabs-line-height",
        /*tabLineHeight*/
        t[25]
      ), D[0] & /*tabLetterSpacing*/
      67108864 && I(
        r,
        "--divkit-tabs-letter-spacing",
        /*tabLetterSpacing*/
        t[26]
      ), D[0] & /*tabActiveFontWeight*/
      128 && I(
        r,
        "--divkit-tabs-active-font-weight",
        /*tabActiveFontWeight*/
        t[7] || ""
      ), D[0] & /*tabInactiveFontWeight*/
      256 && I(
        r,
        "--divkit-tabs-inactive-font-weight",
        /*tabInactiveFontWeight*/
        t[8] || ""
      ), D[0] & /*tabActiveFontFamily*/
      134217728 && I(
        r,
        "--divkit-tabs-active-font-family",
        /*tabActiveFontFamily*/
        t[27] || ""
      ), D[0] & /*tabInactiveFontFamily*/
      536870912 && I(
        r,
        "--divkit-tabs-inactive-font-family",
        /*tabInactiveFontFamily*/
        t[29] || ""
      ), D[0] & /*tabActiveFontVariationSettings*/
      268435456 && I(
        r,
        "--divkit-tabs-active-font-variation-settings",
        /*tabActiveFontVariationSettings*/
        t[28] || ""
      ), D[0] & /*tabInactiveFontVariationSettings*/
      1073741824 && I(
        r,
        "--divkit-tabs-inactive-font-variation-settings",
        /*tabInactiveFontVariationSettings*/
        t[30] || ""
      ), D[0] & /*tabActiveTextColor*/
      512 && I(
        r,
        "--divkit-tabs-active-text-color",
        /*tabActiveTextColor*/
        t[9]
      ), D[0] & /*tabInactiveTextColor*/
      1024 && I(
        r,
        "--divkit-tabs-inactive-text-color",
        /*tabInactiveTextColor*/
        t[10]
      ), D[0] & /*tabActiveBackground*/
      2048 && I(
        r,
        "--divkit-tabs-active-background-color",
        /*tabActiveBackground*/
        t[11]
      ), D[0] & /*tabInactiveBackground*/
      4096 && I(
        r,
        "--divkit-tabs-inactive-background-color",
        /*tabInactiveBackground*/
        t[12]
      ), D[0] & /*tabBorderRadius*/
      64 && I(
        r,
        "--divkit-tabs-border-radius",
        /*tabBorderRadius*/
        t[6]
      ), D[0] & /*tabItemSpacing, tabFontSize*/
      8208 && I(
        r,
        "--divkit-tabs-items-spacing",
        /*tabItemSpacing*/
        t[13] ? un(
          /*tabItemSpacing*/
          t[13] * 10 / /*tabFontSize*/
          t[4]
        ) : ""
      ), D[1] & /*animationDuration*/
      16 && I(
        r,
        "--divkit-tabs-animation-duration",
        /*animationDuration*/
        t[35] !== void 0 ? `${/*animationDuration*/
        t[35]}ms` : ""
      ), /*$jsonSeparator*/
      t[20] ? _e ? _e.p(t, D) : (_e = Nc(t), _e.c(), _e.m(l.parentNode, l)) : _e && (_e.d(1), _e = null), D[0] & /*$childStore, childLayoutParams, selected*/
      393224 | D[1] & /*visiblePanels, instId, showedPanels*/
      524300) {
        T = ar(
          /*$childStore*/
          t[18]
        );
        let M;
        for (M = 0; M < T.length; M += 1) {
          const W = Sc(t, T, M);
          Y[M] ? (Y[M].p(W, D), L(Y[M], 1)) : (Y[M] = Lc(W), Y[M].c(), L(Y[M], 1), Y[M].m(c, null));
        }
        for (fr(), M = T.length; M < Y.length; M += 1)
          le(M);
        dr();
      }
      (!h || D[1] & /*isSwipeInitialized, isAnimated*/
      3 && f !== (f = ht("tabs__swiper", Cn, {
        inited: (
          /*isSwipeInitialized*/
          t[31]
        ),
        animated: (
          /*isAnimated*/
          t[32]
        )
      }))) && g(c, "class", f), (!h || D[1] & /*$jsonRestrictParentScroll*/
      131072 && _ !== (_ = Cn.tabs__panels + " " + /*$jsonRestrictParentScroll*/
      (t[48] ? Er["root_restrict-scroll"] : ""))) && g(u, "class", _);
    },
    i(E) {
      if (!h) {
        for (let D = 0; D < H.length; D += 1)
          L(z[D]);
        for (let D = 0; D < T.length; D += 1)
          L(Y[D]);
        h = !0;
      }
    },
    o(E) {
      z = z.filter(Ac);
      for (let D = 0; D < z.length; D += 1)
        x(z[D]);
      Y = Y.filter(Ac);
      for (let D = 0; D < Y.length; D += 1)
        x(Y[D]);
      h = !1;
    },
    d(E) {
      E && (G(r), G(a), G(l), G(u)), on(k, E), N && N.d(), on(z, E), t[74](null), _e && _e.d(E), on(Y, E), t[75](null), t[76](null), m = !1, Rr(p);
    }
  };
}
function Xb(t) {
  let r, e, n, o, i, s;
  const a = [Kb, Jb], l = [];
  function u(c, f) {
    return (
      /*hasError*/
      c[2] ? 1 : 0
    );
  }
  return ~(r = u(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = er();
    },
    m(c, f) {
      ~r && l[r].m(c, f), J(c, n, f), o = !0, i || (s = xe(Gb, "resize", function() {
        Lr(
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
      r = u(t), r === _ ? ~r && l[r].p(t, f) : (e && (fr(), x(l[_], 1, 1, () => {
        l[_] = null;
      }), dr()), ~r ? (e = l[r], e ? e.p(t, f) : (e = l[r] = a[r](t), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(c) {
      o || (L(e), o = !0);
    },
    o(c) {
      x(e), o = !1;
    },
    d(c) {
      c && G(n), ~r && l[r].d(c), i = !1, s();
    }
  };
}
function Zb(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, z, oe = v, _e = () => (oe(), oe = C(a, (j) => e(67, z = j)), a), T, Y = v, le = () => (Y(), Y = C(m, (j) => e(68, T = j)), m), E, D = v, M = () => (D(), D = C(h, (j) => e(69, E = j)), h), W, q = v, be = () => (q(), q = C(f, (j) => e(70, W = j)), f), Ae, Ce, me = v, Fe = () => (me(), me = C(c, (j) => e(71, Ce = j)), c), Q, Ke = v, Ye = () => (Ke(), Ke = C(u, (j) => e(72, Q = j)), u), Xe, ye = v, Me = () => (ye(), ye = C(l, (j) => e(20, Xe = j)), l), ce, he = v, fe = () => (he(), he = C(_, (j) => e(48, ce = j)), _);
  t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => q()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => ye()), t.$$.on_destroy.push(() => he());
  let { componentContext: re } = r, { layoutParams: de = void 0 } = r;
  const ne = Tr(Yr), we = ne.direction;
  yn(t, we, (j) => e(19, Ae = j));
  const Ue = ne.genId("tabs");
  let Ge, $ = !1, Be = Io([]);
  yn(t, Be, (j) => e(18, H = j));
  let Ne = {}, ot, ct, nt, kt = {}, it = 12, Pt = "", ft = "", Z = "", pe = "", st, ze = "", F = "", Ct, ut = "", Vt = "", Dt = "", lt = "", K = "", Mt = "", It = 0, Xt = "", Zt = "", Ee = null, Ze = !1, gt = !1, Ie, $e = [], Le = [], Ft = null, Oe = null, yt = null, Gt, Tt = !1, sr = !1, Te, jt, lr, rr = "slide", nr, pr, vr, or = {
    devapi: {
      getState() {
        return p;
      },
      setState(j) {
        return Qt(j, !1, !0);
      }
    }
  };
  function ir() {
    e(4, it = 12), e(5, Pt = ""), e(6, pe = ""), e(7, st = void 0), e(27, ze = ""), e(28, F = ""), e(8, Ct = void 0), e(29, ut = ""), e(30, Vt = ""), e(9, Dt = ""), e(10, lt = ""), e(11, K = ""), e(12, Mt = ""), e(13, It = 0), e(61, Xt = ""), e(62, Zt = ""), e(14, Ee = null), e(15, lr = void 0), e(16, rr = "slide"), e(35, nr = 300), e(36, pr = void 0), ue();
  }
  function Ht(j) {
    re.json.items && e(0, re = vr = {
      ...re,
      json: {
        ...re.json,
        items: re.json.items.map((ie, d) => ({ ...ie, div: j[d] }))
      }
    });
  }
  function mt(j) {
    if ($)
      return;
    const ie = new Set($e.filter(zo)), d = /* @__PURE__ */ new Map();
    vr === re && $e.forEach((B) => {
      B && d.set(B.json, B);
    }), e(33, $e = j.map((B, je) => {
      if ((je === p || $e[je]) && (B != null && B.div)) {
        const He = d.get(B.div);
        return He ? (ie.delete(He), He) : re.produceChildContext(B.div, { path: je });
      }
    })), e(34, Le = j.map((B, je) => je === p));
    for (const B of ie)
      B.destroy();
    vr = re;
  }
  async function Qt(j, ie, d) {
    if (Ie = p, e(17, p = j), At(), kr(d), ue(), ie) {
      await Sn();
      const B = ot.querySelector(`.${Cn.tabs__item_selected}`);
      B && B.focus();
    }
  }
  function ae(j, ie = !1) {
    const d = H == null ? void 0 : H.length;
    if (!d)
      return;
    const B = H.map((P) => P.index);
    let He = B.indexOf(p) + j;
    He >= d ? He = 0 : He < 0 && (He = d - 1);
    const ke = B[He];
    Qt(ke, ie, !0);
  }
  function wr(j, ie) {
    return p !== ie ? (Qt(ie, !1, !0), !1) : !0;
  }
  function kr(j = !0) {
    e(32, gt = j), Et(-p * 100), Ir(), Pr(), ur(), jt = -p * ct.clientWidth;
  }
  async function Et(j) {
    await Sn(), e(23, nt.style.transform = `translate3d(${j}%,0,0)`, nt);
  }
  function Ir(j = !1) {
    const ie = j ? Math.max(0, p - 1) : Math.min(p, Ie != null ? Ie : p), d = j ? Math.min(o.length - 1, p + 1) : Math.max(p, Ie != null ? Ie : p);
    ne.devtoolCreateHierarchy !== "eager" && $e.forEach((B) => {
      B == null || B.destroy();
    }), e(33, $e = $e.map((B, je) => {
      var ke;
      if (B)
        return B;
      const He = (ke = o[je]) == null ? void 0 : ke.div;
      if ((je >= ie && je <= d || ne.devtoolCreateHierarchy === "eager") && He)
        return re.produceChildContext(He, { path: je });
    })), e(34, Le = Le.map((B, je) => je >= ie && je <= d));
  }
  async function Pr() {
    var ie;
    if (((ie = re.json.height) == null ? void 0 : ie.type) === "match_parent")
      return;
    await Sn();
    const j = document.getElementById(`${Ue}-panel-${p}`);
    j && e(22, ct.style.height = ge(j.offsetHeight), ct);
  }
  function ur() {
    Ft && clearTimeout(Ft), Ft = window.setTimeout(
      () => {
        e(34, Le = o.map((j, ie) => ie === p));
      },
      400
    );
  }
  function dt(j) {
    if (!(j.ctrlKey || j.shiftKey || j.altKey || j.metaKey) && o) {
      if (j.which === n_)
        ae(-1, !0);
      else if (j.which === o_)
        ae(1, !0);
      else if (j.which === i_)
        Qt(0, !0, !0);
      else if (j.which === s_)
        Qt(o.length - 1, !0, !0);
      else
        return;
      j.preventDefault();
    }
  }
  function At() {
    Ze || (e(31, Ze = !0), e(22, ct.style.height = ge(ct.clientHeight), ct), e(23, nt.style.transform = `translate3d(${-(Ie != null ? Ie : p) * 100}%,0,0)`, nt));
  }
  function Jt(j) {
    var B;
    const ie = j.target, d = (B = ie == null ? void 0 : ie.closest) == null ? void 0 : B.call(ie, `.${Er["root_restrict-scroll"]}`);
    o.length < 2 || j.touches.length > 1 || d && d !== ct || (Tt = !1, sr = !1, Oe = Ec(j), yt = null, Gt = Date.now(), Te = jt || -p * ct.clientWidth, e(32, gt = !1), Ft && clearTimeout(Ft));
  }
  function xt(j) {
    const ie = Ec(j);
    if (!Oe || yt && yt.x === ie.x && yt.y === ie.y)
      return;
    yt = ie;
    const d = ct.clientWidth;
    if (Tt) {
      jt = ie.x - Oe.x + Te;
      const B = d * o.length;
      if (jt > 0)
        jt = jt * d / (jt + d * 3);
      else if (-jt + d > B) {
        let je = -jt + d - B;
        je = je * d / (je + d * 3), jt = d - B - je;
      }
      Et(jt * 100 / d);
    } else Math.abs(ie.y - Oe.y) > 10 ? sr = !0 : !sr && Math.abs(ie.x - Oe.x) > 8 && (At(), Tt = !0, Oe = ie, Et(-p * 100), Ir(!0));
    Tt && j.cancelable && j.preventDefault();
  }
  function et() {
    sr = !1, Oe = null;
    let j = p;
    if (!Tt)
      return;
    Tt = !1;
    const ie = Math.min(512, ct.clientWidth), d = Math.abs(Te - jt), B = Math.min(1, (Date.now() - Gt) / 750);
    d > ie / 4 * B && (j += Te > jt ? 1 : -1), j >= o.length ? j = o.length - 1 : j < 0 && (j = 0), j === p ? (e(32, gt = !0), jt = -j * ie, Et(-j * 100), ur()) : Qt(j, !1, !0);
  }
  function pt(j, ie) {
    return j > o.length - 1 ? ie === "ring" ? Vo(j, o.length) : o.length - 1 : j < 0 ? ie === "ring" ? Vo(j, o.length) : 0 : j;
  }
  function ue() {
    rr === "slide" && Sn().then(() => {
      const j = ot == null ? void 0 : ot.querySelector("." + Cn.tabs__item_selected);
      j && e(36, pr = {
        left: `${j.offsetLeft}px`,
        width: `${j.offsetWidth}px`,
        height: `${j.offsetHeight}px`
      });
    });
  }
  xn(() => {
    ue(), ne.devtoolCreateHierarchy === "eager" && Qt(p, !1, !1);
  }), sn(() => {
    $e.forEach((j) => {
      j == null || j.destroy();
    }), Ge && (ne.unregisterInstance(Ge), e(60, Ge = void 0));
  });
  const vt = (j, ie) => wr(ie, j);
  function $t(j) {
    Dr[j ? "unshift" : "push"](() => {
      ot = j, e(21, ot);
    });
  }
  function Wt(j) {
    Dr[j ? "unshift" : "push"](() => {
      nt = j, e(23, nt);
    });
  }
  function yr(j) {
    Dr[j ? "unshift" : "push"](() => {
      ct = j, e(22, ct);
    });
  }
  return t.$$set = (j) => {
    "componentContext" in j && e(0, re = j.componentContext), "layoutParams" in j && e(1, de = j.layoutParams);
  }, t.$$.update = () => {
    var j, ie, d, B, je, He, ke, P, Lt, zt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(66, n = re.origJson), t.$$.dirty[2] & /*origJson*/
    16 && n && ir(), t.$$.dirty[0] & /*componentContext*/
    1 && e(63, o = Array.isArray(re.json.items) && re.json.items || []), t.$$.dirty[2] & /*items*/
    2 && e(47, i = o.map((Je) => {
      var at;
      return { json: Je.div, id: (at = Je.div) == null ? void 0 : at.id };
    })), t.$$.dirty[0] & /*componentContext*/
    1 && e(65, s = re.getJsonWithVars(re.json.selected_tab)), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(46, a = re.getDerivedFromVars(re.json.tab_title_style, void 0, !0))), t.$$.dirty[0] & /*componentContext*/
    1 && Me(e(45, l = re.getDerivedFromVars(re.json.has_separator))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(44, u = re.getDerivedFromVars(re.json.separator_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Fe(e(43, c = re.getDerivedFromVars(re.json.separator_paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(42, f = re.getDerivedFromVars(re.json.switch_tabs_by_content_swipe_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(41, _ = re.getDerivedFromVars(re.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(40, h = re.getDerivedFromVars(re.json.title_paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(39, m = re.getDerivedFromVars(re.json.tab_title_delimiter))), t.$$.dirty[2] & /*jsonSelectedTab*/
    8 && e(17, p = s && Number(s) || 0), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*items*/
    2)
      if (Array.isArray(o) && o.length) {
        let Je = [];
        o.forEach((at, Ot) => {
          const Ar = re.getJsonWithVars({
            index: Ot,
            title: at.title,
            title_click_action: at.title_click_action
          });
          Ar.title && typeof Ar.title == "string" ? Je.push(Ar) : re.logError(X(new Error("Incorrect title for the tab"), { additional: { index: Ot } }));
        }), Be.set(Je);
      } else
        Be.set([]);
    if (t.$$.dirty[0] & /*$childStore, componentContext*/
    262145 && (H != null && H.length ? e(2, $ = !1) : (e(2, $ = !0), re.logError(X(new Error('Incorrect or empty "items" prop for div "tabs"'))))), t.$$.dirty[0] & /*componentContext, childLayoutParams*/
    9) {
      let Je = { parentContainerOrientation: "horizontal" };
      ((j = re.json.width) == null ? void 0 : j.type) === "wrap_content" && (Je.parentHorizontalWrapContent = !0), (!re.json.height || re.json.height.type === "wrap_content") && (Je.parentVerticalWrapContent = !0), e(3, Ne = ei(Je, Ne));
    }
    if (t.$$.dirty[0] & /*hasError, selected, componentContext*/
    131077 | t.$$.dirty[2] & /*items*/
    2 && !$ && (p < 0 || p >= o.length) && (re.logError(X(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
      additional: {
        selected: re.json.selected_tab,
        length: o.length
      }
    })), e(17, p = p < 0 ? 0 : o.length - 1)), t.$$.dirty[0] & /*hasError, $childStore, selected, componentContext*/
    393221 && !$ && !H.some((Je) => p === Je.index) && (re.logError(X(new Error('Incorrect "selected_tab" prop for div "tabs"'), {
      additional: {
        selected: re.json.selected_tab
      }
    })), e(17, p = ((ie = H[0]) == null ? void 0 : ie.index) || 0)), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && e(64, w = z || {}), t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(4, it = Hn(w.font_size, it)), t.$$.dirty[0] & /*tabFontSize, $direction, tabPaddings*/
    524336 | t.$$.dirty[2] & /*tabStyle*/
    4 && (w.font_size || w.paddings)) {
      const Je = w.paddings || { top: 6, right: 8, bottom: 6, left: 8 }, at = {
        top: (Number(Je.top) || 0) / it * 10,
        right: (Number(Ae === "ltr" ? Je.end : Je.start) || Number(Je.right) || 0) / it * 10,
        bottom: (Number(Je.bottom) || 0) / it * 10,
        left: (Number(Ae === "ltr" ? Je.start : Je.end) || Number(Je.left) || 0) / it * 10
      };
      e(5, Pt = us(at, Ae, Pt));
    }
    if (t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4) {
      const Je = w.line_height;
      Je !== void 0 && Pn(Je) && e(25, ft = ge(Je / it * 10));
    }
    if (t.$$.dirty[0] & /*tabFontSize*/
    16 | t.$$.dirty[2] & /*tabStyle*/
    4) {
      const Je = w.letter_spacing;
      Je !== void 0 && zn(Je) && e(26, Z = ge(Je / it * 10));
    }
    if (t.$$.dirty[0] & /*tabFontSize, tabBorderRadius*/
    80 | t.$$.dirty[2] & /*tabStyle*/
    4 && (w.corner_radius || w.corners_radius || w.font_size)) {
      const Je = (d = w.corner_radius) != null ? d : 1e3;
      w.corners_radius ? e(6, pe = Rb(w.corners_radius, Je, it, pe)) : zn(Je) && e(6, pe = ge(Je / it * 10));
    }
    t.$$.dirty[0] & /*tabActiveFontWeight*/
    128 | t.$$.dirty[2] & /*tabStyle*/
    4 && (e(7, st = ii(w.active_font_weight || w.font_weight, void 0, st)), w.font_family && typeof w.font_family == "string" ? e(27, ze = ne.typefaceProvider(w.font_family, { fontWeight: st || 400 })) : e(27, ze = ""), e(28, F = ki(w.active_font_variation_settings))), t.$$.dirty[0] & /*tabInactiveFontWeight*/
    256 | t.$$.dirty[2] & /*tabStyle*/
    4 && (e(8, Ct = ii(w.inactive_font_weight || w.font_weight, void 0, Ct)), w.font_family && typeof w.font_family == "string" ? e(29, ut = ne.typefaceProvider(w.font_family, { fontWeight: Ct || 400 })) : e(29, ut = ""), e(30, Vt = ki(w.inactive_font_variation_settings))), t.$$.dirty[0] & /*tabActiveTextColor*/
    512 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(9, Dt = gr(w.active_text_color, 1, Dt)), t.$$.dirty[0] & /*tabInactiveTextColor*/
    1024 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(10, lt = gr(w.inactive_text_color, 1, lt)), t.$$.dirty[0] & /*tabActiveBackground*/
    2048 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(11, K = gr(w.active_background_color, 1, K)), t.$$.dirty[0] & /*tabInactiveBackground*/
    4096 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(12, Mt = gr(w.inactive_background_color, 1, Mt)), t.$$.dirty[0] & /*tabItemSpacing*/
    8192 | t.$$.dirty[2] & /*tabStyle*/
    4 && e(13, It = rn(w.item_spacing, It)), t.$$.dirty[0] & /*$jsonSeparator, $direction*/
    1572864 | t.$$.dirty[1] & /*separatorBackground*/
    1073741824 | t.$$.dirty[2] & /*$jsonSeparatorColor, $jsonSeparatorPaddings, separatorMargins*/
    1537 && Xe && (Q && e(61, Xt = gr(Q, 1, Xt)), Ce && e(62, Zt = us(Ce, Ae, Zt))), t.$$.dirty[1] & /*separatorBackground*/
    1073741824 | t.$$.dirty[2] & /*separatorMargins*/
    1 && e(38, k = {
      background: Xt,
      margin: Zt
    }), t.$$.dirty[2] & /*$jsonSwipeEnabled*/
    256 && e(37, N = typeof W > "u" ? !0 : !!W), t.$$.dirty[0] & /*titlePadding*/
    16384 | t.$$.dirty[2] & /*$jsonTitlePaddings*/
    128 && e(14, Ee = ni(E || void 0, Ee)), t.$$.dirty[0] & /*delimitierStyle*/
    32768 | t.$$.dirty[2] & /*$jsonDelimiterStyle*/
    64 && e(15, lr = Bb(T, lr)), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && ((z == null ? void 0 : z.animation_type) === "fade" || (z == null ? void 0 : z.animation_type) === "none") && e(16, rr = z.animation_type), t.$$.dirty[2] & /*$jsonTabStyle*/
    32 && zn(z == null ? void 0 : z.animation_duration) && e(35, nr = z.animation_duration), t.$$.dirty[2] & /*items*/
    2 && mt(o), t.$$.dirty[0] & /*componentContext, hasError, selected*/
    131077 | t.$$.dirty[1] & /*prevId*/
    536870912 | t.$$.dirty[2] & /*items*/
    2 && re.json && (Ge && (ne.unregisterInstance(Ge), e(60, Ge = void 0)), re.id && !$ && !re.fakeElement && (e(60, Ge = re.id), ne.registerInstance(Ge, {
      setCurrentItem(Je, at) {
        if (Je < 0 || Je > o.length - 1)
          throw new Error('Item is out of range in "set-current-item" action');
        Qt(Je, !1, at);
      },
      setPreviousItem(Je, at, Ot) {
        let Ar = pt(p - Je, at);
        Qt(Ar, !1, Ot);
      },
      setNextItem(Je, at, Ot) {
        let Ar = pt(p + Je, at);
        Qt(Ar, !1, Ot);
      },
      scrollToStart(Je) {
        Qt(0, !1, Je);
      },
      scrollToEnd(Je) {
        Qt(o.length - 1, !1, Je);
      },
      scrollCombined({ step: Je, overflow: at, animated: Ot }) {
        Je && Qt(pt(p + Je, at || "clamp"), !1, Ot || !0);
      }
    }))), t.$$.dirty[0] & /*componentContext, selected, animationType*/
    196609 | t.$$.dirty[2] & /*items*/
    2 && e(24, kt = {
      "height-parent": ((B = re.json.height) == null ? void 0 : B.type) === "match_parent" ? "yes" : "",
      "own-height": (((je = re.json.height) == null ? void 0 : je.type) === "match_parent" || ((He = re.json.height) == null ? void 0 : He.type) === "fixed") && !(((Lt = (P = (ke = o[p]) == null ? void 0 : ke.div) == null ? void 0 : P.height) == null ? void 0 : Lt.type) === "wrap_content" && ((zt = o[p].div) != null && zt.height.constrained)),
      animation: rr
    });
  }, [
    re,
    de,
    $,
    Ne,
    it,
    Pt,
    pe,
    st,
    Ct,
    Dt,
    lt,
    K,
    Mt,
    It,
    Ee,
    lr,
    rr,
    p,
    H,
    Ae,
    Xe,
    ot,
    ct,
    nt,
    kt,
    ft,
    Z,
    ze,
    F,
    ut,
    Vt,
    Ze,
    gt,
    $e,
    Le,
    nr,
    pr,
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
    ce,
    we,
    Ue,
    Be,
    or,
    Ht,
    wr,
    dt,
    Jt,
    xt,
    et,
    ue,
    Ge,
    Xt,
    Zt,
    o,
    w,
    s,
    n,
    z,
    T,
    E,
    W,
    Ce,
    Q,
    vt,
    $t,
    Wt,
    yr
  ];
}
class Qb extends Br {
  constructor(r) {
    super(), Or(this, r, Zb, Xb, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const xb = "appkit-state", $b = "appkit-state_overflow_visible", ey = "appkit-state__animations", vi = {
  state: xb,
  state_overflow_visible: $b,
  state__animations: ey,
  "state__animation-child": "appkit-state__animation-child",
  "state__animation-child-inner": "appkit-state__animation-child-inner"
};
function jl(t) {
  return t < 0.5 ? 4 * t * t * t : 0.5 * Math.pow(2 * t - 2, 3) + 1;
}
function ty(t) {
  return t * t * t;
}
function l_(t) {
  const r = t - 1;
  return r * r * r + 1;
}
function a_(t) {
  return (r) => {
    if (r <= 0)
      return 0;
    if (r >= 1)
      return 1;
    const e = r * t.length, n = Math.floor(e), o = t[n], i = t[n + 1], s = e - n;
    return o * s + i * (1 - s);
  };
}
const ry = [
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
], ny = a_(ry), oy = [
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
], iy = a_(oy), oa = {
  linear: ul,
  ease: ny,
  ease_in: ty,
  ease_out: l_,
  ease_in_out: jl,
  spring: iy
};
function Ea(t) {
  return oa[t];
}
const u_ = 200, c_ = 0, sy = 0, ly = 0;
function Oc(t) {
  return Math.max(...t.map(
    (r) => (Number(r.duration) || u_) + (Number(r.start_delay) || c_)
  ));
}
function ay(t, {
  transitions: r,
  elementBbox: e,
  rootBbox: n,
  direction: o,
  maxDuration: i,
  alpha: s
}) {
  const a = s != null ? s : 1;
  return {
    duration: Bi() ? 0 : i,
    css: (l) => {
      const u = l * i, c = r.map((k) => {
        var Y, le, E;
        const N = Number(k.start_delay) || c_, H = Number(k.duration) || u_, z = Math.max(0, Math.min(1, (u - N) / H)), oe = o === "in" ? 1 - z : z, T = (Ea(k.interpolator || "ease_in_out") || jl)(oe);
        if (k.type === "fade")
          return T >= 1 ? {
            active: !1,
            opacity: 0
          } : {
            active: T > 0 && T < 1,
            opacity: (1 - T) * a + T * (k.alpha || sy)
          };
        if (k.type === "slide") {
          const D = k.edge === "top" || k.edge === "left" ? -1 : 1, M = k.edge === "top" || k.edge === "bottom" || !k.edge ? "translateY" : "translateX";
          let W = (Y = k.distance) == null ? void 0 : Y.value;
          W === void 0 && (k.edge === "top" || k.edge === "bottom" || !k.edge ? W = Math.abs(
            n[k.edge === "bottom" ? "bottom" : "top"] - e[k.edge === "bottom" ? "top" : "bottom"]
          ) : W = Math.abs(
            n[k.edge === "left" ? "left" : "right"] - e[k.edge === "left" ? "right" : "left"]
          ));
          const q = W * T;
          return {
            active: T > 0 && T < 1,
            translate: `${M}(${q * D}px)`
          };
        } else if (k.type === "scale") {
          const D = 1 - T + T * (k.scale || ly), M = (le = k.pivot_x) != null ? le : 0.5, W = (E = k.pivot_y) != null ? E : 0.5, q = (1 - D) * e.width * M, be = (1 - D) * e.height * W;
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
function Uo(t, r, e) {
  return t * (1 - e) + r * e;
}
const uy = 200, cy = 0;
function fy(t, {
  rootBbox: r,
  beforeBbox: e,
  afterBbox: n,
  transition: o
}) {
  var i, s;
  return {
    delay: (i = o.start_delay) != null ? i : cy,
    duration: Bi() ? 0 : (s = o.duration) != null ? s : uy,
    easing: o.interpolator && o.interpolator in oa ? oa[o.interpolator] : jl,
    css: (a) => [
      `top:${Uo(e.top, n.top, a) - r.top}px`,
      `left:${Uo(e.left, n.left, a) - r.left}px`,
      `width:${Uo(e.width, n.width, a)}px`,
      `height:${Uo(e.height, n.height, a)}px`
    ].join(";")
  };
}
function f_(t) {
  const r = [];
  return t.type === "set" ? (t.items || []).forEach((e) => {
    r.push(...f_(e));
  }) : r.push(t), r;
}
const { Map: dy } = Po;
function Bc(t, r, e) {
  const n = t.slice();
  return n[37] = r[e], n;
}
function Rc(t, r, e) {
  const n = t.slice();
  return n[40] = r[e], n;
}
function _y(t) {
  let r, e;
  return r = new In({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function py(t) {
  let r, e;
  const n = [
    {
      cls: ht(
        "state",
        vi,
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
    $$slots: { default: [my] },
    $$scope: { ctx: t }
  };
  for (let i = 0; i < n.length; i += 1)
    o = jo(o, n[i]);
  return r = new hn({ props: o }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(i, s) {
      Bt(r, i, s), e = !0;
    },
    p(i, s) {
      const a = s[0] & /*mods, componentContext, layoutParams, parentOfItems, replaceItems, devapi*/
      6915 ? No(n, [
        s[0] & /*mods*/
        256 && {
          cls: ht(
            "state",
            vi,
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
        2048 && Ld(
          /*devapi*/
          i[11]
        )
      ]) : {};
      s[0] & /*animationRoot, animationList, selectedId, selectedComponentContext, childContexts*/
      248 | s[1] & /*$$scope*/
      4096 && (a.$$scope = { dirty: s, ctx: i }), r.$set(a);
    },
    i(i) {
      e || (L(r.$$.fragment, i), e = !0);
    },
    o(i) {
      x(r.$$.fragment, i), e = !1;
    },
    d(i) {
      Rt(r, i);
    }
  };
}
function Hc(t) {
  let r, e, n = ar(
    /*childContexts*/
    t[7]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = Uc(Rc(t, n, s));
  const i = (s) => x(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = er();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      J(s, r, a), e = !0;
    },
    p(s, a) {
      if (a[0] & /*childContexts, selectedComponentContext*/
      192) {
        n = ar(
          /*childContexts*/
          s[7]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const u = Rc(s, n, l);
          o[l] ? (o[l].p(u, a), L(o[l], 1)) : (o[l] = Uc(u), o[l].c(), L(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (fr(), l = n.length; l < o.length; l += 1)
          i(l);
        dr();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          L(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        x(o[a]);
      e = !1;
    },
    d(s) {
      s && G(r), on(o, s);
    }
  };
}
function Wc(t) {
  let r, e, n, o;
  return e = new Kn({
    props: { componentContext: (
      /*context*/
      t[40]
    ) }
  }), {
    c() {
      r = Pe("div"), Ut(e.$$.fragment), n = hr(), r.hidden = !0, g(r, "data-hidden", "true");
    },
    m(i, s) {
      J(i, r, s), Bt(e, r, null), bt(r, n), o = !0;
    },
    p(i, s) {
      const a = {};
      s[0] & /*childContexts*/
      128 && (a.componentContext = /*context*/
      i[40]), e.$set(a);
    },
    i(i) {
      o || (L(e.$$.fragment, i), o = !0);
    },
    o(i) {
      x(e.$$.fragment, i), o = !1;
    },
    d(i) {
      i && G(r), Rt(e);
    }
  };
}
function Uc(t) {
  let r, e, n = (
    /*context*/
    t[40] && /*context*/
    t[40] !== /*selectedComponentContext*/
    t[6] && Wc(t)
  );
  return {
    c() {
      n && n.c(), r = er();
    },
    m(o, i) {
      n && n.m(o, i), J(o, r, i), e = !0;
    },
    p(o, i) {
      /*context*/
      o[40] && /*context*/
      o[40] !== /*selectedComponentContext*/
      o[6] ? n ? (n.p(o, i), i[0] & /*childContexts, selectedComponentContext*/
      192 && L(n, 1)) : (n = Wc(o), n.c(), L(n, 1), n.m(r.parentNode, r)) : n && (fr(), x(n, 1, 1, () => {
        n = null;
      }), dr());
    },
    i(o) {
      e || (L(n), e = !0);
    },
    o(o) {
      x(n), e = !1;
    },
    d(o) {
      o && G(r), n && n.d(o);
    }
  };
}
function Gc(t) {
  let r = (
    /*selectedId*/
    t[5]
  ), e, n, o = Jc(t);
  return {
    c() {
      o.c(), e = er();
    },
    m(i, s) {
      o.m(i, s), J(i, e, s), n = !0;
    },
    p(i, s) {
      s[0] & /*selectedId*/
      32 && Sr(r, r = /*selectedId*/
      i[5]) ? (fr(), x(o, 1, 1, v), dr(), o = Jc(i), o.c(), L(o, 1), o.m(e.parentNode, e)) : o.p(i, s);
    },
    i(i) {
      n || (L(o), n = !0);
    },
    o(i) {
      x(o), n = !1;
    },
    d(i) {
      i && G(e), o.d(i);
    }
  };
}
function Jc(t) {
  let r, e;
  return r = new Kn({
    props: {
      componentContext: (
        /*selectedComponentContext*/
        t[6]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*selectedComponentContext*/
      64 && (i.componentContext = /*selectedComponentContext*/
      n[6]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function gy(t) {
  let r, e, n, o, i, s, a, l;
  n = new Kn({
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
      r = Pe("div"), e = Pe("div"), Ut(n.$$.fragment), o = hr(), g(e, "class", vi["state__animation-child-inner"]), g(r, "class", vi["state__animation-child"]);
    },
    m(c, f) {
      J(c, r, f), bt(r, e), Bt(n, e, null), bt(r, o), s = !0, a || (l = xe(r, "introend", u), a = !0);
    },
    p(c, f) {
      t = c;
      const _ = {};
      f[0] & /*animationList*/
      16 && (_.componentContext = /*item*/
      t[37].componentContextCopy), n.$set(_);
    },
    i(c) {
      s || (L(n.$$.fragment, c), i || go(() => {
        i = hl(
          r,
          fy,
          /*item*/
          t[37]
        ), i.start();
      }), s = !0);
    },
    o(c) {
      x(n.$$.fragment, c), s = !1;
    },
    d(c) {
      c && G(r), Rt(n), a = !1, l();
    }
  };
}
function hy(t) {
  let r, e, n, o, i, s = `${/*item*/
  t[37].offsetLeft}px`, a = `${/*item*/
  t[37].offsetTop}px`, l = `${/*item*/
  t[37].width}px`, u = `${/*item*/
  t[37].height}px`, c, f, _;
  n = new Kn({
    props: {
      componentContext: (
        /*item*/
        t[37].componentContextCopy
      )
    }
  });
  function h() {
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
      r = Pe("div"), e = Pe("div"), Ut(n.$$.fragment), o = hr(), g(e, "class", vi["state__animation-child-inner"]), g(r, "class", vi["state__animation-child"]), I(r, "left", s), I(r, "top", a), I(r, "width", l), I(r, "height", u);
    },
    m(m, p) {
      J(m, r, p), bt(r, e), Bt(n, e, null), bt(r, o), c = !0, f || (_ = xe(r, "introend", h), f = !0);
    },
    p(m, p) {
      t = m;
      const w = {};
      p[0] & /*animationList*/
      16 && (w.componentContext = /*item*/
      t[37].componentContextCopy), n.$set(w), p[0] & /*animationList*/
      16 && s !== (s = `${/*item*/
      t[37].offsetLeft}px`) && I(r, "left", s), p[0] & /*animationList*/
      16 && a !== (a = `${/*item*/
      t[37].offsetTop}px`) && I(r, "top", a), p[0] & /*animationList*/
      16 && l !== (l = `${/*item*/
      t[37].width}px`) && I(r, "width", l), p[0] & /*animationList*/
      16 && u !== (u = `${/*item*/
      t[37].height}px`) && I(r, "height", u);
    },
    i(m) {
      c || (L(n.$$.fragment, m), i || go(() => {
        i = hl(
          r,
          ay,
          /*item*/
          t[37]
        ), i.start();
      }), c = !0);
    },
    o(m) {
      x(n.$$.fragment, m), c = !1;
    },
    d(m) {
      m && G(r), Rt(n), f = !1, _();
    }
  };
}
function Kc(t, r) {
  let e, n, o, i, s;
  const a = [hy, gy], l = [];
  function u(c, f) {
    return "direction" in /*item*/
    c[37] ? 0 : 1;
  }
  return n = u(r), o = l[n] = a[n](r), {
    key: t,
    first: null,
    c() {
      e = er(), o.c(), i = er(), this.first = e;
    },
    m(c, f) {
      J(c, e, f), l[n].m(c, f), J(c, i, f), s = !0;
    },
    p(c, f) {
      r = c;
      let _ = n;
      n = u(r), n === _ ? l[n].p(r, f) : (fr(), x(l[_], 1, 1, () => {
        l[_] = null;
      }), dr(), o = l[n], o ? o.p(r, f) : (o = l[n] = a[n](r), o.c()), L(o, 1), o.m(i.parentNode, i));
    },
    i(c) {
      s || (L(o), s = !0);
    },
    o(c) {
      x(o), s = !1;
    },
    d(c) {
      c && (G(e), G(i)), l[n].d(c);
    }
  };
}
function my(t) {
  let r, e, n, o = [], i = new dy(), s, a = (
    /*childContexts*/
    t[7] && Hc(t)
  ), l = (
    /*selectedComponentContext*/
    t[6] && Gc(t)
  ), u = ar(
    /*animationList*/
    t[4]
  );
  const c = (f) => (
    /*item*/
    f[37]
  );
  for (let f = 0; f < u.length; f += 1) {
    let _ = Bc(t, u, f), h = c(_);
    i.set(h, o[f] = Kc(h, _));
  }
  return {
    c() {
      a && a.c(), r = hr(), l && l.c(), e = hr(), n = Pe("div");
      for (let f = 0; f < o.length; f += 1)
        o[f].c();
      g(n, "class", vi.state__animations), g(n, "aria-hidden", "true");
    },
    m(f, _) {
      a && a.m(f, _), J(f, r, _), l && l.m(f, _), J(f, e, _), J(f, n, _);
      for (let h = 0; h < o.length; h += 1)
        o[h] && o[h].m(n, null);
      t[23](n), s = !0;
    },
    p(f, _) {
      /*childContexts*/
      f[7] ? a ? (a.p(f, _), _[0] & /*childContexts*/
      128 && L(a, 1)) : (a = Hc(f), a.c(), L(a, 1), a.m(r.parentNode, r)) : a && (fr(), x(a, 1, 1, () => {
        a = null;
      }), dr()), /*selectedComponentContext*/
      f[6] ? l ? (l.p(f, _), _[0] & /*selectedComponentContext*/
      64 && L(l, 1)) : (l = Gc(f), l.c(), L(l, 1), l.m(e.parentNode, e)) : l && (fr(), x(l, 1, 1, () => {
        l = null;
      }), dr()), _[0] & /*animationList, onOutro*/
      8208 && (u = ar(
        /*animationList*/
        f[4]
      ), fr(), o = zd(o, _, c, 1, f, u, i, n, Nd, Kc, null, Bc), dr());
    },
    i(f) {
      if (!s) {
        L(a), L(l);
        for (let _ = 0; _ < u.length; _ += 1)
          L(o[_]);
        s = !0;
      }
    },
    o(f) {
      x(a), x(l);
      for (let _ = 0; _ < o.length; _ += 1)
        x(o[_]);
      s = !1;
    },
    d(f) {
      f && (G(r), G(e), G(n)), a && a.d(f), l && l.d(f);
      for (let _ = 0; _ < o.length; _ += 1)
        o[_].d();
      t[23](null);
    }
  };
}
function by(t) {
  let r, e, n, o;
  const i = [py, _y], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[2] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = er();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (fr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function yy(t) {
  return t.some((r) => r.type === "fade");
}
function d_(t) {
  return t.type === "change_bounds" ? t : t.type === "set" ? d_(t.items[0]) : null;
}
function wy(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h = v, m = () => (h(), h = C(i, (ce) => e(20, _ = ce)), i);
  t.$$.on_destroy.push(() => h());
  let { componentContext: p } = r, { layoutParams: w = void 0 } = r;
  const k = Tr(Yr);
  let N = !1, H, z = /* @__PURE__ */ new Map(), oe = /* @__PURE__ */ new Set(), _e = [], T = [], Y = [], le = [], E, D, M, W, q = !1, be = {
    devapi: {
      getState() {
        return D;
      },
      setState(ce) {
        return Q(ce);
      }
    }
  };
  function Ae() {
    e(15, q = !1);
  }
  function Ce(ce) {
    W ? e(6, M = W[u.findIndex((he) => he.state_id === (ce == null ? void 0 : ce.state_id))]) : (M && M.destroy(), e(6, M = ce != null && ce.div ? p.produceChildContext(ce.div, {
      path: ce.state_id || "<unknown>"
    }) : void 0));
  }
  function me(ce) {
    const he = p.json.states;
    if (!he)
      return;
    const fe = /* @__PURE__ */ new Set();
    e(16, u = he.map((re, de) => (u[de].div !== ce[de] && re.state_id && fe.add(re.state_id), { ...re, div: ce[de] }))), e(0, p.json = { ...p.json, states: u }, p), D && fe.has(D) && Ce(u.find((re) => re.state_id === D) || null);
  }
  function Fe(ce, he, fe) {
    let { json: re, parentComponentContext: de, transitions: ne, node: we } = he;
    re = p.getJsonWithVars(re), ne = p.getJsonWithVars(ne);
    const Ue = f_(ne), Ge = he.bbox || we.getBoundingClientRect(), $ = {
      ...re,
      margins: void 0,
      alpha: yy(Ue) ? void 0 : re.alpha
    };
    return {
      id: de.id || "",
      json: $,
      componentContextCopy: de.produceChildContext($, { fake: ju }),
      elementBbox: Ge,
      rootBbox: ce,
      transitions: Ue,
      alpha: re.alpha,
      width: Ge.width,
      height: Ge.height,
      offsetTop: Ge.top - ce.top,
      offsetLeft: Ge.left - ce.left,
      direction: fe,
      resolvePromise: he.resolvePromise,
      node: he.node
    };
  }
  async function Q(ce) {
    if (D === ce)
      return p;
    k.setRunning("stateChange", !0);
    const he = new Set(oe);
    _e.forEach(($) => {
      $.resolvePromise && $.resolvePromise();
    }), e(4, _e = []);
    let fe = [];
    if (H) {
      const $ = H.getBoundingClientRect();
      fe = Y.map((Be) => Fe($, Be, "out"));
    }
    le.forEach(($) => {
      $.transitions && z.set($.id, {
        transitions: $.transitions,
        rect: $.node.getBoundingClientRect()
      });
    }), T = [], Y = [], le = [];
    const re = u.find(($) => $.state_id === ce) || null;
    if (re ? (e(5, D = ce), a == null || a.setValue(D), Ce(re)) : p.logError(X(new Error("Cannot find state with id"), { additional: { stateId: ce } })), await Sn(), !H)
      return;
    const de = H.getBoundingClientRect();
    let ne = T.filter(($) => {
      var Be;
      return $.parentComponentContext.id && !he.has($.parentComponentContext.id) ? !0 : ((Be = $.resolvePromise) == null || Be.call($), !1);
    }).map(($) => Fe(de, $, "in"));
    fe = fe.filter(($) => {
      var Be;
      return $.id && !oe.has($.id) ? !0 : ((Be = $.resolvePromise) == null || Be.call($), !1);
    });
    const we = fe.concat(ne), Ue = we.reduce(
      ($, Be) => Math.max($, Oc(Be.transitions)),
      0
    ), Ge = le.filter(($) => z.has($.id)).map(($) => {
      const Be = {
        ...$.json,
        margins: void 0,
        width: { type: "match_parent" },
        height: { type: "match_parent" }
      }, Ne = z.get($.id);
      return {
        id: $.parentComponentContext.id || "",
        json: Be,
        componentContextCopy: $.parentComponentContext.produceChildContext(Be, { fake: ju }),
        rootBbox: de,
        beforeBbox: Ne.rect,
        afterBbox: $.node.getBoundingClientRect(),
        node: $.node,
        transition: p.getJsonWithVars(d_(Ne.transitions)),
        resolvePromise: $.resolvePromise
      };
    });
    return e(4, _e = [
      ...we.map(($) => ({ ...$, maxDuration: Ue })),
      ...Ge
    ]), z.clear(), k.setRunning("stateChange", !1), p;
  }
  hi(wa, {
    // eslint-disable-next-line max-params
    runVisibilityTransition(ce, he, fe, re, de, ne) {
      if (!H)
        return Promise.resolve();
      const we = H.getBoundingClientRect(), Ue = Fe(
        we,
        {
          json: ce,
          parentComponentContext: he,
          transitions: fe,
          node: re,
          bbox: ne
        },
        de
      ), Ge = Oc(Ue.transitions), $ = { ...Ue, maxDuration: Ge };
      return e(4, _e = [..._e.filter((Be) => Be.node !== Ue.node), $]), new Promise((Be) => {
        $.resolvePromise = Be;
      });
    },
    registerChildWithTransitionIn(ce, he, fe, re) {
      const de = {
        json: ce,
        parentComponentContext: he,
        transitions: fe,
        node: re
      };
      return T.push(de), new Promise((ne) => {
        de.resolvePromise = ne;
      });
    },
    registerChildWithTransitionOut(ce, he, fe, re) {
      const de = {
        json: ce,
        parentComponentContext: he,
        transitions: fe,
        node: re
      };
      return Y.push(de), new Promise((ne) => {
        de.resolvePromise = ne;
      });
    },
    registerChildWithTransitionChange(ce, he, fe, re) {
      const de = he.id;
      if (!de)
        return Promise.resolve();
      const ne = {
        id: de,
        json: ce,
        parentComponentContext: he,
        transitions: fe,
        node: re
      };
      return le.push(ne), new Promise((we) => {
        ne.resolvePromise = we;
      });
    },
    hasTransitionChange(ce) {
      return ce ? z.has(ce) : !1;
    },
    registerChild(ce) {
      oe.add(ce);
    },
    unregisterChild(ce) {
      oe.delete(ce);
    }
  });
  function Ke(ce) {
    if (!q && (e(15, q = !0), ce.length)) {
      k.devtoolCreateHierarchy === "eager" && e(7, W = ce.map((fe) => fe != null && fe.div ? p.produceChildContext(fe.div, { path: fe.state_id || "<unknown>" }) : void 0));
      const he = (a == null ? void 0 : a.getValue()) || o;
      if (he) {
        e(5, D = he);
        const fe = ce.find((re) => re.state_id === D) || null;
        Ce(fe), fe || p.logError(X(new Error("Cannot find state for default_state_id"), { additional: { selectedId: D } }));
      } else {
        const fe = ce[0];
        e(5, D = fe.state_id), Ce(fe);
      }
      a && (a.setValue(D), a.subscribe((fe) => {
        Q(fe);
      }));
    }
  }
  function Ye(ce) {
    e(4, _e = _e.filter((he) => he !== ce)), ce.resolvePromise && ce.resolvePromise();
  }
  sn(() => {
    W ? W.forEach((ce) => {
      ce == null || ce.destroy();
    }) : M && M.destroy(), E && (E(), e(14, E = void 0));
  });
  const Xe = (ce) => Ye(ce), ye = (ce) => Ye(ce);
  function Me(ce) {
    Dr[ce ? "unshift" : "push"](() => {
      H = ce, e(3, H);
    });
  }
  return t.$$set = (ce) => {
    "componentContext" in ce && e(0, p = ce.componentContext), "layoutParams" in ce && e(1, w = ce.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*componentContext*/
    1 && e(17, n = p.json.div_id || p.id), t.$$.dirty[0] & /*componentContext*/
    1 && (o = p.getJsonWithVars(p.json.default_state_id)), t.$$.dirty[0] & /*componentContext*/
    1 && m(e(10, i = p.getDerivedFromVars(p.json.clip_to_bounds))), t.$$.dirty[0] & /*componentContext*/
    1 && e(19, s = p.json.state_id_variable), t.$$.dirty[0] & /*stateVariableName, componentContext*/
    524289 && (a = s ? p.getVariable(s, "string") || k.awaitGlobalVariable(s, "string", "") : null), t.$$.dirty[0] & /*componentContext*/
    1 && e(18, l = p.origJson), t.$$.dirty[0] & /*origJson*/
    262144 && l && Ae(), t.$$.dirty[0] & /*stateId, componentContext*/
    131073 && (n ? e(2, N = !1) : (e(2, N = !0), p.logError(X(new Error('Missing "id" prop for div "state"'))))), t.$$.dirty[0] & /*componentContext*/
    1 && p.json && (oe = /* @__PURE__ */ new Set()), t.$$.dirty[0] & /*componentContext*/
    1 && e(16, u = Array.isArray(p.json.states) && p.json.states || []), t.$$.dirty[0] & /*items*/
    65536 && e(9, c = u.map((ce) => {
      var he;
      return { json: ce.div, id: (he = ce.div) == null ? void 0 : he.id };
    })), t.$$.dirty[0] & /*items, componentContext*/
    65537 && (u != null && u.length ? e(2, N = !1) : (e(2, N = !0), p.logError(X(new Error('Empty "states" prop for div "state"'))))), t.$$.dirty[0] & /*componentContext, stateUnregister, stateId*/
    147457 && p.json && (E && (E(), e(14, E = void 0)), n && !(p != null && p.fakeElement) && e(14, E = p.registerState(n, Q))), t.$$.dirty[0] & /*inited, items*/
    98304 && !q && Ke(u), t.$$.dirty[0] & /*$jsonClipToBounds*/
    1048576 && e(8, f = {
      overflow: _ === !1 || _ === 0 ? "visible" : void 0
    });
  }, [
    p,
    w,
    N,
    H,
    _e,
    D,
    M,
    W,
    f,
    c,
    i,
    be,
    me,
    Ye,
    E,
    q,
    u,
    n,
    l,
    s,
    _,
    Xe,
    ye,
    Me
  ];
}
class ky extends Br {
  constructor(r) {
    super(), Or(this, r, wy, by, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const vy = "appkit-pager", jy = "appkit-pager__items", Cy = "appkit-pager_animated", Ey = "appkit-pager__item", Ay = "appkit-pager_clip", Sy = "appkit-pager_orientation_horizontal", Vy = "appkit-pager_orientation_vertical", Fy = "appkit-pager__item_height_content", Dy = "appkit-pager__item_height_fixed", Iy = "appkit-pager__item_width_content", Ty = "appkit-pager__item_width_fixed", My = "appkit-pager__arrow", Mo = {
  pager: vy,
  pager__items: jy,
  pager_animated: Cy,
  pager__item: Ey,
  "pager_scroll-align_start": "appkit-pager_scroll-align_start",
  "pager_scroll-align_center": "appkit-pager_scroll-align_center",
  "pager_scroll-align_end": "appkit-pager_scroll-align_end",
  pager_clip: Ay,
  pager_orientation_horizontal: Sy,
  pager_orientation_vertical: Vy,
  "pager_cross-align_center": "appkit-pager_cross-align_center",
  "pager_cross-align_end": "appkit-pager_cross-align_end",
  pager__item_height_content: Fy,
  pager__item_height_fixed: Dy,
  "pager__item_height-constrained": "appkit-pager__item_height-constrained",
  pager__item_width_content: Iy,
  pager__item_width_fixed: Ty,
  "pager__item_width-constrained": "appkit-pager__item_width-constrained",
  pager__arrow: My,
  "pager__arrow-icon-path": "appkit-pager__arrow-icon-path"
}, { window: Py } = Po;
function qc(t, r, e) {
  const n = t.slice();
  return n[95] = r[e], n;
}
function Ny(t) {
  let r, e;
  return r = new In({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function zy(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "pager",
        Mo,
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
      $$slots: { default: [By] },
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
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      8192 && (i.cls = ht(
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Yc(t) {
  let r, e, n, o, i, s, a;
  return e = new Kn({
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
      r = Pe("div"), Ut(e.$$.fragment), n = hr(), g(r, "class", o = ht("pager__item", Mo, Qc(
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
      J(l, r, u), Bt(e, r, null), bt(r, n), a = !0;
    },
    p(l, u) {
      const c = {};
      u[0] & /*visibleItems*/
      16 && (c.componentContext = /*item*/
      l[95].componentContext), u[0] & /*childLayoutParams*/
      512 && (c.layoutParams = /*childLayoutParams*/
      l[9]), e.$set(c), (!a || u[0] & /*orientation, visibleItems*/
      20 && o !== (o = ht("pager__item", Mo, Qc(
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
      a || (L(e.$$.fragment, l), a = !0);
    },
    o(l) {
      x(e.$$.fragment, l), a = !1;
    },
    d(l) {
      l && G(r), Rt(e);
    }
  };
}
function Xc(t) {
  let r, e, n, o = !/*leftClass*/
  t[27] && Ly();
  return {
    c() {
      r = Pe("div"), o && o.c(), g(
        r,
        "class",
        /*leftClass*/
        t[27] || `${Mo.pager__arrow} ${ho.arrow} ${ho.arrow_left}`
      );
    },
    m(i, s) {
      J(i, r, s), o && o.m(r, null), e || (n = xe(
        r,
        "click",
        /*click_handler*/
        t[70]
      ), e = !0);
    },
    p: v,
    d(i) {
      i && G(r), o && o.d(), e = !1, n();
    }
  };
}
function Ly(t) {
  let r, e;
  return {
    c() {
      r = tn("svg"), e = tn("path"), g(e, "class", Mo["pager__arrow-icon-path"]), g(e, "d", "m10 16 8.3 8 1.03-1-4-6-.7-1 .7-1 4-6-1.03-1z"), g(r, "class", ho.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      J(n, r, o), bt(r, e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function Zc(t) {
  let r, e, n, o = !/*rightClass*/
  t[28] && Oy();
  return {
    c() {
      r = Pe("div"), o && o.c(), g(
        r,
        "class",
        /*rightClass*/
        t[28] || `${Mo.pager__arrow} ${ho.arrow} ${ho.arrow_right}`
      );
    },
    m(i, s) {
      J(i, r, s), o && o.m(r, null), e || (n = xe(
        r,
        "click",
        /*click_handler_1*/
        t[71]
      ), e = !0);
    },
    p: v,
    d(i) {
      i && G(r), o && o.d(), e = !1, n();
    }
  };
}
function Oy(t) {
  let r, e;
  return {
    c() {
      r = tn("svg"), e = tn("path"), g(e, "class", Mo["pager__arrow-icon-path"]), g(e, "d", "M22 16l-8.3 8-1.03-1 4-6 .7-1-.7-1-4-6 1.03-1 8.3 8z"), g(r, "class", ho.arrow__icon), g(r, "xmlns", "http://www.w3.org/2000/svg"), g(r, "width", "32"), g(r, "height", "32"), g(r, "viewBox", "0 0 32 32"), g(r, "fill", "none");
    },
    m(n, o) {
      J(n, r, o), bt(r, e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function By(t) {
  let r, e, n, o, i, s, a, l, u, c = ar(
    /*visibleItems*/
    t[4]
  ), f = [];
  for (let p = 0; p < c.length; p += 1)
    f[p] = Yc(qc(t, c, p));
  const _ = (p) => x(f[p], 1, 1, () => {
    f[p] = null;
  });
  let h = (
    /*hasScrollLeft*/
    t[11] && /*shouldCheckArrows*/
    t[12] && Xc(t)
  ), m = (
    /*hasScrollRight*/
    t[10] && /*shouldCheckArrows*/
    t[12] && Zc(t)
  );
  return {
    c() {
      r = Pe("div");
      for (let p = 0; p < f.length; p += 1)
        f[p].c();
      o = hr(), h && h.c(), i = hr(), m && m.c(), s = er(), g(r, "class", e = Mo.pager__items + " " + /*$jsonRestrictParentScroll*/
      (t[24] ? Er["root_restrict-scroll"] : "")), g(r, "style", n = cr(
        /*style*/
        t[14]
      ));
    },
    m(p, w) {
      J(p, r, w);
      for (let k = 0; k < f.length; k += 1)
        f[k] && f[k].m(r, null);
      t[69](r), J(p, o, w), h && h.m(p, w), J(p, i, w), m && m.m(p, w), J(p, s, w), a = !0, l || (u = [
        xe(
          r,
          "transitionend",
          /*onTransitionEnd*/
          t[37]
        ),
        xe(
          r,
          "focus",
          /*onFocus*/
          t[33],
          !0
        ),
        xe(
          r,
          "click",
          /*onItemsClick*/
          t[34],
          !0
        )
      ], l = !0);
    },
    p(p, w) {
      if (w[0] & /*orientation, visibleItems, instId, childLayoutParams*/
      67109396) {
        c = ar(
          /*visibleItems*/
          p[4]
        );
        let k;
        for (k = 0; k < c.length; k += 1) {
          const N = qc(p, c, k);
          f[k] ? (f[k].p(N, w), L(f[k], 1)) : (f[k] = Yc(N), f[k].c(), L(f[k], 1), f[k].m(r, null));
        }
        for (fr(), k = c.length; k < f.length; k += 1)
          _(k);
        dr();
      }
      (!a || w[0] & /*$jsonRestrictParentScroll*/
      16777216 && e !== (e = Mo.pager__items + " " + /*$jsonRestrictParentScroll*/
      (p[24] ? Er["root_restrict-scroll"] : ""))) && g(r, "class", e), (!a || w[0] & /*style*/
      16384 && n !== (n = cr(
        /*style*/
        p[14]
      ))) && g(r, "style", n), /*hasScrollLeft*/
      p[11] && /*shouldCheckArrows*/
      p[12] ? h ? h.p(p, w) : (h = Xc(p), h.c(), h.m(i.parentNode, i)) : h && (h.d(1), h = null), /*hasScrollRight*/
      p[10] && /*shouldCheckArrows*/
      p[12] ? m ? m.p(p, w) : (m = Zc(p), m.c(), m.m(s.parentNode, s)) : m && (m.d(1), m = null);
    },
    i(p) {
      if (!a) {
        for (let w = 0; w < c.length; w += 1)
          L(f[w]);
        a = !0;
      }
    },
    o(p) {
      f = f.filter(Boolean);
      for (let w = 0; w < f.length; w += 1)
        x(f[w]);
      a = !1;
    },
    d(p) {
      p && (G(r), G(o), G(i), G(s)), on(f, p), t[69](null), h && h.d(p), m && m.d(p), l = !1, Rr(u);
    }
  };
}
function Ry(t) {
  let r, e, n, o, i, s;
  const a = [zy, Ny], l = [];
  function u(c, f) {
    return (
      /*hasError*/
      c[5] ? 1 : 0
    );
  }
  return ~(r = u(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = er();
    },
    m(c, f) {
      ~r && l[r].m(c, f), J(c, n, f), o = !0, i || (s = xe(
        Py,
        "resize",
        /*resnap*/
        t[38]
      ), i = !0);
    },
    p(c, f) {
      let _ = r;
      r = u(c), r === _ ? ~r && l[r].p(c, f) : (e && (fr(), x(l[_], 1, 1, () => {
        l[_] = null;
      }), dr()), ~r ? (e = l[r], e ? e.p(c, f) : (e = l[r] = a[r](c), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(c) {
      o || (L(e), o = !0);
    },
    o(c) {
      x(e), o = !1;
    },
    d(c) {
      c && G(n), ~r && l[r].d(c), i = !1, s();
    }
  };
}
const vs = {
  wrap_content: "content",
  fixed: "fixed",
  match_parent: "parent"
}, yo = 2, Hy = 400, Wy = 8;
function Qc(t, r) {
  var n, o, i, s;
  if (t === "horizontal") {
    const a = ((n = r.height) == null ? void 0 : n.type) || "";
    return {
      height: a in vs ? vs[a] : "content",
      "height-constrained": ((o = r.height) == null ? void 0 : o.type) === "wrap_content" ? Zr(r.height.constrained, !1) : !1
    };
  }
  const e = ((i = r.width) == null ? void 0 : i.type) || "";
  return {
    width: e in vs ? vs[e] : "parent",
    "width-constrained": ((s = r.width) == null ? void 0 : s.type) === "wrap_content" ? Zr(r.width.constrained, !1) : !1
  };
}
function Uy(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, z, oe, _e, T, Y = v, le = () => (Y(), Y = C(c, (j) => e(60, T = j)), c), E, D = v, M = () => (D(), D = C(i, (j) => e(61, E = j)), i), W, q = v, be = () => (q(), q = C(f, (j) => e(62, W = j)), f), Ae, Ce = v, me = () => (Ce(), Ce = C(l, (j) => e(63, Ae = j)), l), Fe, Q = v, Ke = () => (Q(), Q = C(a, (j) => e(64, Fe = j)), a), Ye, Xe = v, ye = () => (Xe(), Xe = C(s, (j) => e(65, Ye = j)), s), Me, ce = v, he = () => (ce(), ce = C(ze, (j) => e(66, Me = j)), ze), fe, re = v, de = () => (re(), re = C(o, (j) => e(67, fe = j)), o), ne, we = v, Ue = () => (we(), we = C(_, (j) => e(68, ne = j)), _), Ge, $ = v, Be = () => ($(), $ = C(u, (j) => e(24, Ge = j)), u);
  t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => q()), t.$$.on_destroy.push(() => Ce()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => Xe()), t.$$.on_destroy.push(() => ce()), t.$$.on_destroy.push(() => re()), t.$$.on_destroy.push(() => we()), t.$$.on_destroy.push(() => $());
  let { componentContext: Ne } = r, { layoutParams: ot = void 0 } = r;
  const ct = Tr(Yr), nt = ct.direction;
  yn(t, nt, (j) => e(6, oe = j));
  const kt = ct.genId("pager"), it = ct.getCustomization("pagerLeftClass"), Pt = ct.getCustomization("pagerRightClass"), ft = ct.isDesktop;
  yn(t, ft, (j) => e(59, _e = j));
  let Z, pe, st = !1, ze, F = 0, Ct = 0, ut = !1, Vt = "horizontal", Dt = "0em", lt = {}, K = "", Mt = "", It = "", Xt = {}, Zt = "start", Ee = "center", Ze = [], gt = 0, Ie = [], $e = {}, Le = {}, Ft, Oe, yt = 0, Gt = !1, Tt = !1, sr = !1, Te = !1, jt = 0, lr = "", rr = 0, nr;
  function pr() {
    e(43, lt = {}), e(9, Xt = {}), e(47, Zt = "start"), e(48, Ee = "center"), e(52, Gt = !1), e(53, Tt = !1), Te = !1;
  }
  function vr(j) {
    e(0, Ne = e(51, Ft = {
      ...Ne,
      json: {
        ...Ne.json,
        items: j.filter(zo)
      }
    }));
  }
  function or(j, ie) {
    Oe && Oe.update({
      instId: kt,
      currentItem: Le[ie],
      size: j,
      scrollToPagerItem(d) {
        Qt($e[d]);
      }
    });
  }
  function ir(j) {
    var d;
    if (j === Ct || (Ct = j, !Ze[j]))
      return;
    const ie = (d = Ze[j].json) == null ? void 0 : d.selected_actions;
    ie != null && ie.length && Ne.execAnyActions(ie);
  }
  function Ht(j) {
    const ie = Tt ? !1 : j === 0, d = Tt ? !1 : j === Ie.length - 1, B = Vt === "horizontal", je = pe.children[j + (Tt ? yo : 0)];
    if (!je)
      return 0;
    const He = B ? "offsetLeft" : "offsetTop", ke = B ? "offsetWidth" : "offsetHeight", P = dt(), Lt = Pr(), zt = ur(), Je = At();
    return P >= Je + Lt + zt || ie ? 0 : d ? (P - Lt - zt - Je) * (oe === "rtl" ? -1 : 1) : Ee === "start" && oe === "ltr" || Ee === "end" && oe === "rtl" ? -(je[He] - Lt) : Ee === "end" && oe === "ltr" || Ee === "start" && oe === "rtl" ? -(je[He] + je[ke] - P + zt) : pe[ke] / 2 - (je[He] + je[ke] / 2);
  }
  function mt(j, ie) {
    if (!pe)
      return;
    const d = Ht(j);
    e(54, sr = ie), Sn().then(() => {
      var B;
      jt = d, e(55, lr = ae(jt)), e(40, F = (B = $e[j]) != null ? B : 0), Te = Tt && (j < 0 || j >= gt);
    });
  }
  function Qt(j, ie = !0) {
    var d;
    mt((d = Le[j]) != null ? d : 0, ie);
  }
  function ae(j) {
    return `${Vt === "horizontal" ? "translateX" : "translateY"}(${un(j)})`;
  }
  function wr(j, ie) {
    return Tt && j >= -yo && j < gt + yo ? j : j > Ie.length - 1 ? ie === "ring" ? Vo(j, Ie.length) : Ie.length - 1 : j < 0 ? ie === "ring" ? Vo(j, Ie.length) : 0 : j;
  }
  function kr(j, ie, d) {
    const B = wr(Le[F] - j, ie);
    mt(B, d);
  }
  function Et(j, ie, d) {
    const B = wr(Le[F] + j, ie);
    mt(B, d);
  }
  function Ir() {
    Oe == null || Oe.destroy(), Oe = void 0, Z && (ct.unregisterInstance(Z), Z = void 0), Ne.fakeElement || (Oe = Ne.registerPager(Ne.id || void 0)), Ne.id && !Ne.fakeElement && (Z = Ne.id, ct.registerInstance(
      Z,
      {
        setCurrentItem(j, ie) {
          if (j < 0 || j > Ze.length - 1)
            throw new Error('Item is out of range in "set-current-item" action');
          Qt(j, ie);
        },
        setPreviousItem: kr,
        setNextItem: Et,
        scrollToStart(j) {
          Qt(Ie[Tt ? yo : 0].index, j);
        },
        scrollToEnd(j) {
          Qt(Ie[Ie.length - 1 - (Tt ? yo : 0)].index, j);
        },
        scrollCombined({ step: j, overflow: ie, animated: d }) {
          j && Qt(wr(Le[F] + j, ie || "clamp"), d);
        }
      },
      "warn"
    ));
  }
  function Pr() {
    var ie, d, B;
    return Vt === "horizontal" ? (d = (ie = lt.start) != null ? ie : oe === "ltr" ? lt.left : lt.right) != null ? d : 0 : (B = lt.top) != null ? B : 0;
  }
  function ur() {
    var ie, d, B;
    return Vt === "horizontal" ? (d = (ie = lt.end) != null ? ie : oe === "ltr" ? lt.right : lt.left) != null ? d : 0 : (B = lt.bottom) != null ? B : 0;
  }
  function dt() {
    var ie, d;
    return pe ? Vt === "horizontal" ? ((ie = pe.parentElement) == null ? void 0 : ie.offsetWidth) || 0 : ((d = pe.parentElement) == null ? void 0 : d.offsetHeight) || 0 : 0;
  }
  function At() {
    const j = Vt === "horizontal", ie = Array.from(pe.children), d = ie[0].getBoundingClientRect(), B = ie[ie.length - 1].getBoundingClientRect();
    return j ? oe === "rtl" ? d.right - B.left : B.right - d.left : B.bottom - d.top;
  }
  function Jt(j) {
    const ie = j.target;
    if (!(ie instanceof Element) || !pe)
      return;
    let d = ie;
    for (; d.parentElement && d.parentElement !== pe; )
      d = d.parentElement;
    if (!d)
      return;
    const B = Array.from(pe.children).indexOf(d);
    if (B < 0)
      return;
    const je = B - (Tt ? yo : 0);
    mt(je, !0);
  }
  function xt(j) {
    Date.now() - rr < 300 && (j.preventDefault(), j.stopImmediatePropagation());
  }
  function et(j) {
    if (!ct.pagerMouseDragEnabled && j.pointerType === "mouse")
      return;
    const ie = Vt === "horizontal", d = ie ? j.pageX : j.pageY, B = jt, je = dt() - Pr() - ur(), He = At(), ke = Date.now(), P = (zt) => {
      const Je = ie ? zt.pageX : zt.pageY;
      let at = B + Je - d;
      if (!Tt) {
        if (oe === "rtl") {
          if (at < 0)
            at = at * je / (at + je * 3);
          else if (at + je > He) {
            let Ot = at + je - He;
            Ot = Ot * je / (Ot + je * 3), at = -je + He + Ot;
          }
        } else if (oe === "ltr") {
          if (at > 0)
            at = at * je / (at + je * 3);
          else if (-at + je > He) {
            let Ot = -at + je - He;
            Ot = Ot * je / (Ot + je * 3), at = je - He - Ot;
          }
        }
      }
      jt = at, e(55, lr = ae(jt)), zt.preventDefault();
    }, Lt = (zt) => {
      nr == null || nr(), nr = void 0;
      const Je = Math.min(512, je), at = Math.abs(B - jt);
      if (at < Wy) {
        mt(Le[F], !0);
        return;
      }
      zt.preventDefault(), rr = Date.now();
      const Ot = Math.min(1, (Date.now() - ke) / 750);
      let Ar = Le[F];
      at > Je / 4 * Ot && (Ar += (B > jt ? 1 : -1) * (oe === "rtl" ? -1 : 1)), Tt || (Ar >= Ie.length ? Ar = Ie.length - 1 : Ar < 0 && (Ar = 0)), mt(Ar, !0);
    };
    window.addEventListener("pointermove", P), window.addEventListener("pointerup", Lt), window.addEventListener("pointercancel", Lt), nr == null || nr(), nr = () => {
      window.removeEventListener("pointermove", P), window.removeEventListener("pointerup", Lt), window.removeEventListener("pointercancel", Lt);
    };
  }
  function pt(j) {
    if (!j.deltaX || Math.abs(j.deltaX) < Math.abs(j.deltaY))
      return;
    const ie = Date.now();
    if (ie - yt < Hy)
      return;
    yt = ie, (oe === "rtl" ? -1 : 1) * j.deltaX > 0 ? Et(1, "clamp", !0) : kr(1, "clamp", !0);
  }
  function ue() {
    e(54, sr = !1), Te && Sn().then(() => {
      Qt(F, !1);
    });
  }
  function vt() {
    Sn().then(() => {
      Qt(F, !1);
    });
  }
  xn(() => {
    e(39, st = !0), pe && Qt(F, !1);
  }), sn(() => {
    e(39, st = !1), nr == null || nr(), Ze.forEach((j) => {
      j.destroy();
    }), Z && (ct.unregisterInstance(Z), Z = void 0), Oe == null || Oe.destroy(), Oe = void 0;
  });
  function $t(j) {
    Dr[j ? "unshift" : "push"](() => {
      pe = j, e(7, pe);
    });
  }
  const Wt = () => (oe === "ltr" ? kr : Et)(1, "clamp", !0), yr = () => (oe === "ltr" ? Et : kr)(1, "clamp", !0);
  return t.$$set = (j) => {
    "componentContext" in j && e(0, Ne = j.componentContext), "layoutParams" in j && e(1, ot = j.layoutParams);
  }, t.$$.update = () => {
    var j, ie, d, B, je;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(58, n = Ne.origJson), t.$$.dirty[1] & /*origJson*/
    134217728 && n && pr(), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(23, o = typeof ((j = Ne.json.item_builder) == null ? void 0 : j.data) == "string" ? Ne.getDerivedFromVars((ie = Ne.json.item_builder) == null ? void 0 : ie.data, void 0, !0) : (d = Ne.json.item_builder) != null && d.data ? Jo(Ne.json.item_builder.data) : void 0)), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(22, i = Ne.getDerivedFromVars(Ne.json.layout_mode))), t.$$.dirty[0] & /*componentContext*/
    1 && ye(e(21, s = Ne.getDerivedFromVars(Ne.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && Ke(e(20, a = Ne.getDerivedFromVars(Ne.json.item_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(19, l = Ne.getDerivedFromVars(Ne.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Be(e(18, u = Ne.getDerivedFromVars(Ne.json.restrict_parent_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(17, c = Ne.getDerivedFromVars(Ne.json.cross_axis_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(16, f = Ne.getDerivedFromVars(Ne.json.scroll_axis_alignment))), t.$$.dirty[0] & /*componentContext*/
    1 && Ue(e(15, _ = Ne.getDerivedFromVars(Ne.json.infinite_scroll))), t.$$.dirty[1] & /*infinite*/
    2097152 | t.$$.dirty[2] & /*$jsonInfiniteScroll*/
    64 && e(52, Gt = Zr(ne, Gt)), t.$$.dirty[0] & /*componentContext, items*/
    9 | t.$$.dirty[1] & /*prevContext*/
    1048576 | t.$$.dirty[2] & /*$jsonItemBuilderData*/
    32) {
      let He = [];
      if (Ne.json.item_builder && Array.isArray(fe) && Array.isArray(Ne.json.item_builder.prototypes)) {
        const zt = Ne.json.item_builder;
        He = vl(fe, ct, Ne, zt);
      } else
        He = (Array.isArray(Ne.json.items) && Ne.json.items || []).map((zt, Je) => ({
          div: zt,
          key: zt.id || { index: Je, data: zt }
        }));
      const ke = new Set(Ze), P = /* @__PURE__ */ new Map();
      let Lt = !1;
      Ft === Ne && Ze.forEach((zt) => {
        zt.key && (typeof zt.key == "string" && P.has(zt.key) ? Lt || (Lt = !0, Ne.logError(X(new Error("Duplicate key for child elements inside item_builder"), { additional: { key: zt.key } }))) : P.set(
          typeof zt.key == "string" ? zt.key : zt.key.index,
          zt
        ));
      }), e(3, Ze = He.map((zt, Je) => {
        let at = !Lt && P.get(zt.id), Ot = P.get(Je);
        return !at && !zt.id && typeof zt.key == "object" && typeof (Ot == null ? void 0 : Ot.key) == "object" && Ki(Ot.key.data, zt.key.data) && (at = Ot), at ? (ke.delete(at), at) : Ne.produceChildContext(zt.div, {
          path: Je,
          variables: zt.vars,
          id: zt.id,
          key: zt.key
        });
      }));
      for (const zt of ke)
        zt.destroy();
      e(51, Ft = Ne);
    }
    if (t.$$.dirty[0] & /*items, componentContext*/
    9) {
      let He = [];
      Ze.forEach((ke) => {
        He.push(Ne.getDerivedFromVars({
          width: ke.json.width,
          height: ke.json.height,
          visibility: ke.json.visibility
        }));
      }), he(e(8, ze = Ji(He, (ke) => [...ke])));
    }
    if (t.$$.dirty[0] & /*items, visibleItems*/
    24 | t.$$.dirty[1] & /*infinite*/
    2097152 | t.$$.dirty[2] & /*$childStore*/
    16) {
      if (e(50, Le = {}), $e = {}, e(4, Ie = Me.map((He, ke) => ({
        width: He.width,
        height: He.height,
        index: ke,
        componentContext: Ze[ke]
      })).filter((He, ke) => Me[ke].visibility !== "gone")), Ie.forEach((He, ke) => {
        $e[ke] = He.index, e(50, Le[He.index] = ke, Le);
      }), e(49, gt = Ie.length), Gt && Ie.length >= yo) {
        const He = Ie.slice(0, yo).map((P) => ({
          ...P,
          componentContext: P.componentContext.dup(oi),
          duplicate: !0
        })), ke = Ie.slice(Ie.length - yo).map((P) => ({
          ...P,
          componentContext: P.componentContext.dup(oi),
          duplicate: !0
        }));
        He.forEach((P, Lt) => {
          $e[Ie.length + Lt] = Lt;
        }), ke.forEach((P, Lt) => {
          $e[Lt - yo] = Ie.length - yo + Lt;
        }), e(4, Ie = [].concat(ke, Ie, He)), e(53, Tt = !0);
      } else
        e(53, Tt = !1);
      vt();
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonLayoutMode*/
    1073741824 && (E ? E.type !== "percentage" && E.type !== "fixed" && E.type !== "wrap_content" ? (e(41, ut = !0), Ne.logError(X(new Error('Incorrect value of "layout_mode.type" for div "pager"')))) : e(41, ut = !1) : (e(41, ut = !0), Ne.logError(X(new Error('Empty "layout_mode" prop for div "pager"'))))), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[2] & /*$jsonOrientation*/
    8 && e(2, Vt = Ca(Ye, Vt)), t.$$.dirty[2] & /*$jsonItemSpacing*/
    4) {
      const He = Fe == null ? void 0 : Fe.value;
      He && zn(He) && e(42, Dt = un(He || 0));
    }
    if (t.$$.dirty[0] & /*$direction*/
    64 | t.$$.dirty[1] & /*paddingObj*/
    4096 | t.$$.dirty[2] & /*$jsonPaddings*/
    2 && (e(43, lt = ni(Ae, lt)), e(44, K = so(lt, oe))), t.$$.dirty[0] & /*orientation*/
    4 && e(57, h = Vt === "horizontal" ? "grid-auto-columns" : "grid-auto-rows"), t.$$.dirty[0] & /*orientation*/
    4 && e(56, m = Vt === "horizontal" ? "grid-template-columns" : "grid-template-rows"), t.$$.dirty[2] & /*$jsonScrollAxisAlignment*/
    1 && (W === "start" || W === "center" || W === "end") && (e(48, Ee = W), vt()), t.$$.dirty[0] & /*orientation, $direction, visibleItems*/
    84 | t.$$.dirty[1] & /*paddingObj, $jsonLayoutMode, scrollAxisAlignment, itemSpacing*/
    1073879040) {
      const He = un(Vt === "horizontal" ? (lt == null ? void 0 : lt.start) || (oe === "ltr" ? lt == null ? void 0 : lt.left : lt == null ? void 0 : lt.right) || 0 : (lt == null ? void 0 : lt.top) || 0), ke = un(Vt === "horizontal" ? (lt == null ? void 0 : lt.end) || (oe === "ltr" ? lt == null ? void 0 : lt.right : lt == null ? void 0 : lt.left) || 0 : (lt == null ? void 0 : lt.bottom) || 0);
      if ((E == null ? void 0 : E.type) === "fixed") {
        const P = ((B = E.neighbour_page_width) == null ? void 0 : B.value) || 0;
        Ee === "center" ? e(45, Mt = `calc(100% + ${He} + ${ke} - 2 * ${un(P)} - 2 * ${Dt})`) : Ee === "start" ? e(45, Mt = `calc(100% + ${ke} - ${un(P)} - ${Dt})`) : e(45, Mt = `calc(100% + ${He} - ${un(P)} - ${Dt})`), e(46, It = "");
      } else if ((E == null ? void 0 : E.type) === "percentage") {
        let P = (je = E.page_width) == null ? void 0 : je.value;
        (typeof P != "number" || P < 0) && (P = 100), e(45, Mt = `calc(${(P / 100).toFixed(2)} * (100% + ${He} + ${ke}))`), e(46, It = "");
      } else (E == null ? void 0 : E.type) === "wrap_content" && (e(45, Mt = ""), e(46, It = Ie.map((P) => {
        var Je, at;
        const Lt = P[Vt === "horizontal" ? "width" : "height"];
        if ((Lt == null ? void 0 : Lt.type) === "fixed" || (Lt == null ? void 0 : Lt.type) === "wrap_content")
          return "minmax(max-content, auto)";
        let zt = "100%";
        return (Lt == null ? void 0 : Lt.type) === "match_parent" && (zn((Je = Lt.max_size) == null ? void 0 : Je.value) && (zt = `min(${zt}, ${un(Lt.max_size.value)})`), zn((at = Lt.min_size) == null ? void 0 : at.value) && (zt = `max(${zt}, ${un(Lt.min_size.value)})`)), zt;
      }).join(" ")));
    }
    if (t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*$jsonCrossAxisAlignment, crossAxisAlignment*/
    536936448 && (T === "start" || T === "center" || T === "end") && (e(47, Zt = T), e(9, Xt = {
      [Vt === "horizontal" ? "parentVAlign" : "parentHAlign"]: Zt
    })), t.$$.dirty[1] & /*itemSpacing, padding, gridAutoSizeProp, autoSizeVal, gridTemplateSizeProp, templateSizeVal, transformStr*/
    117499904 && e(14, p = {
      "grid-gap": Dt,
      padding: K,
      [h]: Mt,
      [m]: It,
      transform: lr
    }), t.$$.dirty[0] & /*orientation*/
    4 | t.$$.dirty[1] & /*animated, crossAxisAlignment, scrollAxisAlignment*/
    8585216 && e(13, w = {
      animated: sr,
      clip: ct.pagerChildrenClipEnabled,
      orientation: Vt,
      "cross-align": Zt,
      "scroll-align": Ee
    }), t.$$.dirty[1] & /*hasLayoutModeError*/
    1024 && e(5, k = ut), t.$$.dirty[0] & /*hasError*/
    32 | t.$$.dirty[1] & /*$isDesktop, mounted*/
    268435712 && e(12, N = _e && st && !k), t.$$.dirty[0] & /*componentContext, items*/
    9 && Ne.json) {
      const He = Ne.getJsonWithVars(Ne.json.default_item);
      typeof He == "number" && He >= 0 && He < Ze.length && (e(40, F = Ct = He), or(Ze.length, He)), Ir();
    }
    t.$$.dirty[0] & /*$direction, visibleItems*/
    80 | t.$$.dirty[1] & /*hasDuplicates, allToVisibleMap, currentItem*/
    4719104 && e(11, H = Tt || (oe === "ltr" ? Le[F] > 0 : Le[F] + 1 < Ie.length)), t.$$.dirty[0] & /*$direction, visibleItems*/
    80 | t.$$.dirty[1] & /*hasDuplicates, allToVisibleMap, currentItem*/
    4719104 && e(10, z = Tt || (oe === "ltr" ? Le[F] + 1 < Ie.length : Le[F] > 0)), t.$$.dirty[1] & /*visibleItemsWithOutDuplicates, currentItem*/
    262656 && or(gt, F), t.$$.dirty[1] & /*currentItem*/
    512 && ir(F);
  }, [
    Ne,
    ot,
    Vt,
    Ze,
    Ie,
    k,
    oe,
    pe,
    ze,
    Xt,
    z,
    H,
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
    Ge,
    nt,
    kt,
    it,
    Pt,
    ft,
    vr,
    kr,
    Et,
    Jt,
    xt,
    et,
    pt,
    ue,
    vt,
    st,
    F,
    ut,
    Dt,
    lt,
    K,
    Mt,
    It,
    Zt,
    Ee,
    gt,
    Le,
    Ft,
    Gt,
    Tt,
    sr,
    lr,
    m,
    h,
    n,
    _e,
    T,
    E,
    W,
    Ae,
    Fe,
    Ye,
    Me,
    fe,
    ne,
    $t,
    Wt,
    yr
  ];
}
class Gy extends Br {
  constructor(r) {
    super(), Or(this, r, Uy, Ry, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const Jy = "appkit-indicator", Ky = "appkit-indicator_visible", qy = "appkit-indicator__scroller", Yy = "appkit-indicator__items", Xy = "appkit-indicator__item", Zy = "appkit-indicator_placement_default", Qy = "appkit-indicator__item_active", xy = "appkit-indicator_direction_ltr", $y = "appkit-indicator_direction_rtl", ew = "appkit-indicator_placement_stretch", ji = {
  indicator: Jy,
  indicator_visible: Ky,
  indicator__scroller: qy,
  indicator__items: Yy,
  indicator__item: Xy,
  indicator_placement_default: Zy,
  indicator__item_active: Qy,
  indicator_direction_ltr: xy,
  indicator_direction_rtl: $y,
  indicator_placement_stretch: ew
};
function xc(t, r, e) {
  const n = t.slice();
  n[43] = r[e], n[46] = e;
  const o = (
    /*index*/
    n[46] === /*pagerData*/
    n[8].currentItem
  );
  return n[44] = o, n;
}
function $c(t) {
  let r, e = ar(Array(
    /*pagerData*/
    t[8].size
  )), n = [];
  for (let o = 0; o < e.length; o += 1)
    n[o] = ef(xc(t, e, o));
  return {
    c() {
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      r = er();
    },
    m(o, i) {
      for (let s = 0; s < n.length; s += 1)
        n[s] && n[s].m(o, i);
      J(o, r, i);
    },
    p(o, i) {
      if (i[0] & /*pagerData, onIndicatorItemClick, onIndicatorItemKeydown*/
      6291712) {
        e = ar(Array(
          /*pagerData*/
          o[8].size
        ));
        let s;
        for (s = 0; s < e.length; s += 1) {
          const a = xc(o, e, s);
          n[s] ? n[s].p(a, i) : (n[s] = ef(a), n[s].c(), n[s].m(r.parentNode, r));
        }
        for (; s < n.length; s += 1)
          n[s].d(1);
        n.length = e.length;
      }
    },
    d(o) {
      o && G(r), on(n, o);
    }
  };
}
function ef(t) {
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
      r = Pe("div"), g(r, "class", e = ht("indicator__item", ji, { active: (
        /*isActiveItem*/
        t[44]
      ) }) + " " + Er.root__clickable), g(r, "role", "tab"), g(r, "id", n = /*pagerData*/
      t[8].instId + "-tab-" + /*index*/
      t[46]), g(r, "aria-controls", o = /*pagerData*/
      t[8].instId + "-panel-" + /*index*/
      t[46]), g(r, "aria-selected", i = /*isActiveItem*/
      t[44] ? "true" : "false"), g(r, "tabindex", s = /*isActiveItem*/
      t[44] ? 0 : -1);
    },
    m(c, f) {
      J(c, r, f), a || (l = [
        xe(r, "click", u),
        xe(
          r,
          "keydown",
          /*onIndicatorItemKeydown*/
          t[22]
        )
      ], a = !0);
    },
    p(c, f) {
      t = c, f[0] & /*pagerData*/
      256 && e !== (e = ht("indicator__item", ji, { active: (
        /*isActiveItem*/
        t[44]
      ) }) + " " + Er.root__clickable) && g(r, "class", e), f[0] & /*pagerData*/
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
      c && G(r), a = !1, Rr(l);
    }
  };
}
function tw(t) {
  let r, e, n = (
    /*pagerData*/
    t[8] && $c(t)
  );
  return {
    c() {
      r = Pe("div"), e = Pe("div"), n && n.c(), g(e, "class", ji.indicator__items), g(e, "role", "tablist"), I(
        e,
        "margin",
        /*placement*/
        t[4] === "default" ? `0 ${ge(Math.max(
          0,
          /*activeStyle*/
          t[2].width - /*inactiveStyle*/
          t[3].width
        ) / 2)}` : ""
      ), I(e, "--divkit-indicator-inactive-width", ge(
        /*inactiveStyle*/
        t[3].width
      )), I(e, "--divkit-indicator-inactive-height", ge(
        /*inactiveStyle*/
        t[3].height
      )), I(e, "--divkit-indicator-inactive-border-radius", ge(
        /*inactiveStyle*/
        t[3].borderRadius
      )), I(
        e,
        "--divkit-indicator-inactive-background",
        /*inactiveStyle*/
        t[3].background || ""
      ), I(
        e,
        "--divkit-indicator-inactive-box-shadow",
        /*inactiveStyle*/
        t[3].boxShadow || ""
      ), I(e, "--divkit-indicator-active-width", ge(
        /*activeStyle*/
        t[2].width
      )), I(e, "--divkit-indicator-active-height", ge(
        /*activeStyle*/
        t[2].height
      )), I(e, "--divkit-indicator-active-border-radius", ge(
        /*activeStyle*/
        t[2].borderRadius
      )), I(
        e,
        "--divkit-indicator-active-background",
        /*activeStyle*/
        t[2].background || ""
      ), I(
        e,
        "--divkit-indicator-active-box-shadow",
        /*activeStyle*/
        t[2].boxShadow || ""
      ), I(
        e,
        "--divkit-indicator-active-scale",
        /*activeStyle*/
        t[2].width / /*inactiveStyle*/
        t[3].width
      ), I(
        e,
        "--divkit-indicator-default-margin",
        /*placement*/
        t[4] === "default" ? `0 ${ge(
          /*spaceBetweenCenters*/
          (t[5] - /*inactiveStyle*/
          t[3].width) / 2
        )}` : ""
      ), I(
        e,
        "--divkit-indicator-stretch-margin",
        /*placement*/
        t[4] === "stretch" ? ge(
          /*itemSpacing*/
          t[7]
        ) : ""
      ), I(
        e,
        "--divkit-indicator-stretch-max-count",
        /*placement*/
        t[4] === "stretch" ? (
          /*maxVisibleItems*/
          t[6]
        ) : ""
      ), I(
        e,
        "--divkit-indicator-stretch-max-spacer",
        /*placement*/
        t[4] === "stretch" ? ge(
          /*maxVisibleItems*/
          (t[6] - 1) * /*itemSpacing*/
          t[7]
        ) : ""
      ), g(r, "class", ji.indicator__scroller);
    },
    m(o, i) {
      J(o, r, i), bt(r, e), n && n.m(e, null), t[35](e), t[36](r);
    },
    p(o, i) {
      /*pagerData*/
      o[8] ? n ? n.p(o, i) : (n = $c(o), n.c(), n.m(e, null)) : n && (n.d(1), n = null), i[0] & /*placement, activeStyle, inactiveStyle*/
      28 && I(
        e,
        "margin",
        /*placement*/
        o[4] === "default" ? `0 ${ge(Math.max(
          0,
          /*activeStyle*/
          o[2].width - /*inactiveStyle*/
          o[3].width
        ) / 2)}` : ""
      ), i[0] & /*inactiveStyle*/
      8 && I(e, "--divkit-indicator-inactive-width", ge(
        /*inactiveStyle*/
        o[3].width
      )), i[0] & /*inactiveStyle*/
      8 && I(e, "--divkit-indicator-inactive-height", ge(
        /*inactiveStyle*/
        o[3].height
      )), i[0] & /*inactiveStyle*/
      8 && I(e, "--divkit-indicator-inactive-border-radius", ge(
        /*inactiveStyle*/
        o[3].borderRadius
      )), i[0] & /*inactiveStyle*/
      8 && I(
        e,
        "--divkit-indicator-inactive-background",
        /*inactiveStyle*/
        o[3].background || ""
      ), i[0] & /*inactiveStyle*/
      8 && I(
        e,
        "--divkit-indicator-inactive-box-shadow",
        /*inactiveStyle*/
        o[3].boxShadow || ""
      ), i[0] & /*activeStyle*/
      4 && I(e, "--divkit-indicator-active-width", ge(
        /*activeStyle*/
        o[2].width
      )), i[0] & /*activeStyle*/
      4 && I(e, "--divkit-indicator-active-height", ge(
        /*activeStyle*/
        o[2].height
      )), i[0] & /*activeStyle*/
      4 && I(e, "--divkit-indicator-active-border-radius", ge(
        /*activeStyle*/
        o[2].borderRadius
      )), i[0] & /*activeStyle*/
      4 && I(
        e,
        "--divkit-indicator-active-background",
        /*activeStyle*/
        o[2].background || ""
      ), i[0] & /*activeStyle*/
      4 && I(
        e,
        "--divkit-indicator-active-box-shadow",
        /*activeStyle*/
        o[2].boxShadow || ""
      ), i[0] & /*activeStyle, inactiveStyle*/
      12 && I(
        e,
        "--divkit-indicator-active-scale",
        /*activeStyle*/
        o[2].width / /*inactiveStyle*/
        o[3].width
      ), i[0] & /*placement, spaceBetweenCenters, inactiveStyle*/
      56 && I(
        e,
        "--divkit-indicator-default-margin",
        /*placement*/
        o[4] === "default" ? `0 ${ge(
          /*spaceBetweenCenters*/
          (o[5] - /*inactiveStyle*/
          o[3].width) / 2
        )}` : ""
      ), i[0] & /*placement, itemSpacing*/
      144 && I(
        e,
        "--divkit-indicator-stretch-margin",
        /*placement*/
        o[4] === "stretch" ? ge(
          /*itemSpacing*/
          o[7]
        ) : ""
      ), i[0] & /*placement, maxVisibleItems*/
      80 && I(
        e,
        "--divkit-indicator-stretch-max-count",
        /*placement*/
        o[4] === "stretch" ? (
          /*maxVisibleItems*/
          o[6]
        ) : ""
      ), i[0] & /*placement, maxVisibleItems, itemSpacing*/
      208 && I(
        e,
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
      o && G(r), n && n.d(), t[35](null), t[36](null);
    }
  };
}
function rw(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "indicator",
        ji,
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
      $$slots: { default: [tw] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = ht(
        "indicator",
        ji,
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
const Nl = ["rounded_rectangle", "circle"];
function nw(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p = v, w = () => (p(), p = C(c, (pe) => e(26, m = pe)), c), k, N = v, H = () => (N(), N = C(f, (pe) => e(27, k = pe)), f), z, oe = v, _e = () => (oe(), oe = C(i, (pe) => e(28, z = pe)), i), T, Y = v, le = () => (Y(), Y = C(s, (pe) => e(29, T = pe)), s), E, D = v, M = () => (D(), D = C(o, (pe) => e(30, E = pe)), o), W, q = v, be = () => (q(), q = C(a, (pe) => e(31, W = pe)), a), Ae, Ce = v, me = () => (Ce(), Ce = C(u, (pe) => e(32, Ae = pe)), u), Fe, Q = v, Ke = () => (Q(), Q = C(l, (pe) => e(33, Fe = pe)), l);
  t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => q()), t.$$.on_destroy.push(() => Ce()), t.$$.on_destroy.push(() => Q());
  let { componentContext: Ye } = r, { layoutParams: Xe = void 0 } = r;
  const Me = Tr(Yr).direction;
  yn(t, Me, (pe) => e(25, h = pe));
  let ce = {
    width: 13,
    height: 13,
    borderRadius: 6.5,
    background: "#ffdc60"
  }, he = {
    width: 10,
    height: 10,
    borderRadius: 5,
    background: "#33919cb5"
  }, fe = "default", re = 15, de = 10, ne = 5, we, Ue, Ge, $, Be = !1;
  function Ne() {
    e(4, fe = "default"), e(5, re = 15), e(6, de = 10), e(7, ne = 5), e(2, ce = {
      width: 13,
      height: 13,
      borderRadius: 6.5,
      background: "#ffdc60"
    }), e(3, he = {
      width: 10,
      height: 10,
      borderRadius: 5,
      background: "#33919cb5"
    });
  }
  async function ot(pe) {
    if (e(8, Ge = pe), await Sn(), Ue) {
      const st = Ue.children[Ge.currentItem];
      if (st) {
        const ze = st.offsetLeft;
        we.scroll({
          left: ze - we.clientWidth / 2,
          behavior: "smooth"
        });
      }
    }
  }
  function ct(pe) {
    pe !== Ge.currentItem && Ge.scrollToPagerItem(pe);
  }
  function nt(pe) {
    if (pe.ctrlKey || pe.shiftKey || pe.altKey || pe.metaKey)
      return;
    const { size: st, currentItem: ze } = Ge;
    if (pe.which === n_) {
      const F = ze - 1 < 0 ? ze : ze - 1;
      kt(F);
    } else if (pe.which === o_) {
      const F = ze + 1 >= st ? ze : ze + 1;
      kt(F);
    } else if (pe.which === i_)
      kt(0);
    else if (pe.which === s_)
      kt(st - 1);
    else
      return;
    pe.preventDefault();
  }
  async function kt(pe) {
    Ge.scrollToPagerItem(pe), await Sn();
    const st = Ue.querySelector(`.${ji.indicator__item_active}`);
    st && st.focus();
  }
  function it() {
    $ == null || $(), $ = void 0;
    const pe = Ye.json.pager_id;
    $ = Ye.listenPager(pe, ot);
  }
  xn(() => {
    e(23, Be = !0);
  }), sn(() => {
    e(23, Be = !1), $ == null || $(), $ = void 0;
  });
  const Pt = (pe) => ct(pe);
  function ft(pe) {
    Dr[pe ? "unshift" : "push"](() => {
      Ue = pe, e(10, Ue);
    });
  }
  function Z(pe) {
    Dr[pe ? "unshift" : "push"](() => {
      we = pe, e(9, we);
    });
  }
  return t.$$set = (pe) => {
    "componentContext" in pe && e(0, Ye = pe.componentContext), "layoutParams" in pe && e(1, Xe = pe.layoutParams);
  }, t.$$.update = () => {
    var pe, st;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(24, n = Ye.origJson), t.$$.dirty[0] & /*origJson*/
    16777216 && n && Ne(), t.$$.dirty[0] & /*origJson, mounted*/
    25165824 && n && Be && it(), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(19, o = Ye.getDerivedFromVars(Ye.json.shape))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(18, i = Ye.getDerivedFromVars(Ye.json.active_item_color))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(17, s = Ye.getDerivedFromVars(Ye.json.inactive_item_color))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(16, a = Ye.getDerivedFromVars(Ye.json.active_item_size))), t.$$.dirty[0] & /*componentContext*/
    1 && Ke(e(15, l = Ye.getDerivedFromVars(Ye.json.active_shape))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(14, u = Ye.getDerivedFromVars(Ye.json.inactive_shape))), t.$$.dirty[0] & /*componentContext*/
    1 && w(e(13, c = Ye.getDerivedFromVars(Ye.json.space_between_centers))), t.$$.dirty[0] & /*componentContext*/
    1 && H(e(12, f = Ye.getDerivedFromVars(Ye.json.items_placement))), t.$$.dirty[0] & /*activeStyle, inactiveStyle, $jsonShape, $jsonInactiveItemColor, $jsonActiveItemColor*/
    1879048204 | t.$$.dirty[1] & /*$jsonActiveShape, $jsonInactiveShape, $jsonActiveItemSize*/
    7 && (Fe && e(2, ce = uo(
      {
        type: "shape_drawable",
        shape: Fe
      },
      Nl,
      ce
    )), Ae && e(3, he = uo(
      {
        type: "shape_drawable",
        shape: Ae
      },
      Nl,
      he
    )), !Fe && !Ae && E)) {
      const ze = Hn(W, 1.3);
      e(3, he = uo(
        {
          type: "shape_drawable",
          shape: E,
          color: he.background
        },
        Nl,
        he
      )), e(3, he.background = gr(T, 1, he.background), he), e(2, ce = {
        ...he,
        width: he.width * ze,
        height: he.height * ze,
        borderRadius: he.borderRadius * ze,
        background: ce.background
      }), e(2, ce.background = gr(z, 1, ce.background), ce);
    }
    if (t.$$.dirty[0] & /*$jsonItemsPlacement, placement, spaceBetweenCenters, maxVisibleItems, itemSpacing, $jsonSpaceBetweenCenters*/
    201326832)
      if (k && (k.type === "default" || k.type === "stretch")) {
        if (e(4, fe = k.type), fe === "default")
          e(5, re = rn((pe = k.space_between_centers) == null ? void 0 : pe.value, re));
        else if (fe === "stretch") {
          const ze = k;
          e(6, de = Hn(ze.max_visible_items, de)), e(7, ne = rn((st = ze.item_spacing) == null ? void 0 : st.value, ne));
        }
      } else
        e(4, fe = "default"), m && e(5, re = rn(m.value, re));
    t.$$.dirty[0] & /*placement, $direction, pagerData*/
    33554704 && e(11, _ = {
      placement: fe,
      direction: h,
      visible: (Ge == null ? void 0 : Ge.size) > 1
    });
  }, [
    Ye,
    Xe,
    ce,
    he,
    fe,
    re,
    de,
    ne,
    Ge,
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
    Me,
    ct,
    nt,
    Be,
    n,
    h,
    m,
    k,
    z,
    T,
    E,
    W,
    Ae,
    Fe,
    Pt,
    ft,
    Z
  ];
}
class ow extends Br {
  constructor(r) {
    super(), Or(this, r, nw, rw, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const iw = "appkit-slider", sw = "appkit-slider__input", lw = "appkit-slider__input_secondary", aw = "appkit-slider__thumb", uw = "appkit-slider_direction_rtl", cw = "appkit-slider__thumb_secondary", fw = "appkit-slider__track", dw = "appkit-slider__tick", _w = "appkit-slider__tick_active", pw = "appkit-slider__tick_inactive", Jr = {
  slider: iw,
  slider__input: sw,
  slider__input_secondary: lw,
  slider__thumb: aw,
  slider_direction_rtl: uw,
  slider__thumb_secondary: cw,
  "slider__tracks-wrapper": "appkit-slider__tracks-wrapper",
  "slider__tracks-inner": "appkit-slider__tracks-inner",
  "slider__tracks-ranges": "appkit-slider__tracks-ranges",
  "slider__tracks-ranges_rtl": "appkit-slider__tracks-ranges_rtl",
  slider__track: fw,
  "slider__thumb-text": "appkit-slider__thumb-text",
  "slider__thumb-text_secondary": "appkit-slider__thumb-text_secondary",
  slider__tick: dw,
  slider__tick_active: _w,
  slider__tick_inactive: pw
};
function tf(t, r, e) {
  var a, l;
  if (!t || !t.font_size)
    return e;
  const n = t.offset, o = t.text_color && gr(t.text_color) || "#000", i = ii(t.font_weight, t.font_weight_value, void 0), s = ki(t.font_variation_settings) || void 0;
  if (Pn(t.font_size) && o !== "transparent") {
    const u = {
      fontSize: ge(t.font_size),
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
function Fo(t, r, e) {
  return Math.max(r, Math.min(e, Number(t)));
}
function rf(t, r, e) {
  const n = t.slice();
  return n[85] = r[e], n;
}
function nf(t, r, e) {
  const n = t.slice();
  return n[85] = r[e], n;
}
function of(t, r, e) {
  const n = t.slice();
  return n[90] = r[e], n;
}
function gw(t) {
  let r, e;
  return r = new In({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function hw(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "slider",
        Jr,
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
          mw,
          ({ focusHandler: n, blurHandler: o }) => ({ 83: n, 84: o }),
          ({ focusHandler: n, blurHandler: o }) => [0, 0, (n ? 2097152 : 0) | (o ? 4194304 : 0)]
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      16777216 && (i.cls = ht(
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function sf(t) {
  let r;
  return {
    c() {
      r = Pe("div"), g(r, "class", Jr.slider__track), I(
        r,
        "left",
        /*range*/
        t[90].left
      ), I(
        r,
        "right",
        /*range*/
        t[90].right
      ), I(
        r,
        "height",
        /*range*/
        t[90].height
      ), I(
        r,
        "border-radius",
        /*range*/
        t[90].borderRadius
      ), I(
        r,
        "background",
        /*range*/
        t[90].background
      ), I(
        r,
        "box-shadow",
        /*range*/
        t[90].boxShadow
      );
    },
    m(e, n) {
      J(e, r, n);
    },
    p(e, n) {
      n[0] & /*renderRanges*/
      2097152 && I(
        r,
        "left",
        /*range*/
        e[90].left
      ), n[0] & /*renderRanges*/
      2097152 && I(
        r,
        "right",
        /*range*/
        e[90].right
      ), n[0] & /*renderRanges*/
      2097152 && I(
        r,
        "height",
        /*range*/
        e[90].height
      ), n[0] & /*renderRanges*/
      2097152 && I(
        r,
        "border-radius",
        /*range*/
        e[90].borderRadius
      ), n[0] & /*renderRanges*/
      2097152 && I(
        r,
        "background",
        /*range*/
        e[90].background
      ), n[0] & /*renderRanges*/
      2097152 && I(
        r,
        "box-shadow",
        /*range*/
        e[90].boxShadow
      );
    },
    d(e) {
      e && G(r);
    }
  };
}
function lf(t) {
  let r;
  return {
    c() {
      r = Pe("div"), g(r, "class", Jr.slider__tick + " " + Jr.slider__tick_active), I(
        r,
        "--divkit-slider-tick",
        /*val*/
        t[85]
      );
    },
    m(e, n) {
      J(e, r, n);
    },
    p(e, n) {
      n[0] & /*markActiveTicks*/
      131072 && I(
        r,
        "--divkit-slider-tick",
        /*val*/
        e[85]
      );
    },
    d(e) {
      e && G(r);
    }
  };
}
function af(t) {
  let r;
  return {
    c() {
      r = Pe("div"), g(r, "class", Jr.slider__tick + " " + Jr.slider__tick_inactive), I(
        r,
        "--divkit-slider-tick",
        /*val*/
        t[85]
      );
    },
    m(e, n) {
      J(e, r, n);
    },
    p(e, n) {
      n[0] & /*markInactiveTicks*/
      262144 && I(
        r,
        "--divkit-slider-tick",
        /*val*/
        e[85]
      );
    },
    d(e) {
      e && G(r);
    }
  };
}
function uf(t) {
  let r, e, n;
  return {
    c() {
      var o, i, s, a, l;
      r = Pe("div"), e = Pe("div"), n = On(
        /*value*/
        t[11]
      ), g(e, "class", Jr["slider__thumb-text-inner"]), I(
        e,
        "font-size",
        /*textStyle*/
        ((o = t[7]) == null ? void 0 : o.fontSize) || "1em"
      ), I(
        e,
        "font-weight",
        /*textStyle*/
        ((i = t[7]) == null ? void 0 : i.fontWeight) || ""
      ), I(
        e,
        "font-family",
        /*textStyle*/
        ((s = t[7]) == null ? void 0 : s.fontFamily) || ""
      ), I(
        e,
        "font-variation-settings",
        /*textStyle*/
        ((a = t[7]) == null ? void 0 : a.fontVariationSettings) || ""
      ), I(
        e,
        "color",
        /*textStyle*/
        ((l = t[7]) == null ? void 0 : l.textColor) || "#000"
      ), g(r, "class", Jr["slider__thumb-text"]);
    },
    m(o, i) {
      J(o, r, i), bt(r, e), bt(e, n);
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
        e,
        "font-size",
        /*textStyle*/
        ((s = o[7]) == null ? void 0 : s.fontSize) || "1em"
      ), i[0] & /*textStyle*/
      128 && I(
        e,
        "font-weight",
        /*textStyle*/
        ((a = o[7]) == null ? void 0 : a.fontWeight) || ""
      ), i[0] & /*textStyle*/
      128 && I(
        e,
        "font-family",
        /*textStyle*/
        ((l = o[7]) == null ? void 0 : l.fontFamily) || ""
      ), i[0] & /*textStyle*/
      128 && I(
        e,
        "font-variation-settings",
        /*textStyle*/
        ((u = o[7]) == null ? void 0 : u.fontVariationSettings) || ""
      ), i[0] & /*textStyle*/
      128 && I(
        e,
        "color",
        /*textStyle*/
        ((c = o[7]) == null ? void 0 : c.textColor) || "#000"
      );
    },
    d(o) {
      o && G(r);
    }
  };
}
function cf(t) {
  let r, e = (
    /*textSecondaryStyle*/
    t[8] && ff(t)
  );
  return {
    c() {
      r = Pe("div"), e && e.c(), g(r, "class", Jr.slider__thumb + " " + Jr.slider__thumb_secondary), I(r, "border-radius", ge(
        /*thumbSecondaryStyle*/
        t[6].borderRadius
      )), I(
        r,
        "background",
        /*thumbSecondaryStyle*/
        t[6].background
      ), I(
        r,
        "box-shadow",
        /*thumbSecondaryStyle*/
        t[6].boxShadow || ""
      );
    },
    m(n, o) {
      J(n, r, o), e && e.m(r, null);
    },
    p(n, o) {
      /*textSecondaryStyle*/
      n[8] ? e ? e.p(n, o) : (e = ff(n), e.c(), e.m(r, null)) : e && (e.d(1), e = null), o[0] & /*thumbSecondaryStyle*/
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
      n && G(r), e && e.d();
    }
  };
}
function ff(t) {
  let r, e, n;
  return {
    c() {
      var o, i, s, a, l;
      r = Pe("div"), e = Pe("div"), n = On(
        /*value2*/
        t[12]
      ), g(e, "class", Jr["slider__thumb-text-inner"]), I(
        e,
        "font-size",
        /*textSecondaryStyle*/
        ((o = t[8]) == null ? void 0 : o.fontSize) || "1em"
      ), I(
        e,
        "font-weight",
        /*textSecondaryStyle*/
        ((i = t[8]) == null ? void 0 : i.fontWeight) || ""
      ), I(
        e,
        "font-family",
        /*textSecondaryStyle*/
        ((s = t[8]) == null ? void 0 : s.fontFamily) || ""
      ), I(
        e,
        "font-variation-settings",
        /*textSecondaryStyle*/
        ((a = t[8]) == null ? void 0 : a.fontVariationSettings) || ""
      ), I(
        e,
        "color",
        /*textSecondaryStyle*/
        ((l = t[8]) == null ? void 0 : l.textColor) || "#000"
      ), g(r, "class", Jr["slider__thumb-text"] + " " + Jr["slider__thumb-text_secondary"]);
    },
    m(o, i) {
      J(o, r, i), bt(r, e), bt(e, n);
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
        e,
        "font-size",
        /*textSecondaryStyle*/
        ((s = o[8]) == null ? void 0 : s.fontSize) || "1em"
      ), i[0] & /*textSecondaryStyle*/
      256 && I(
        e,
        "font-weight",
        /*textSecondaryStyle*/
        ((a = o[8]) == null ? void 0 : a.fontWeight) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && I(
        e,
        "font-family",
        /*textSecondaryStyle*/
        ((l = o[8]) == null ? void 0 : l.fontFamily) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && I(
        e,
        "font-variation-settings",
        /*textSecondaryStyle*/
        ((u = o[8]) == null ? void 0 : u.fontVariationSettings) || ""
      ), i[0] & /*textSecondaryStyle*/
      256 && I(
        e,
        "color",
        /*textSecondaryStyle*/
        ((c = o[8]) == null ? void 0 : c.textColor) || "#000"
      );
    },
    d(o) {
      o && G(r);
    }
  };
}
function df(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Pe("input"), g(r, "type", "range"), g(r, "class", e = /*switchedTracks*/
      t[16] ? Jr.slider__input : `${Jr.slider__input} ${Jr.slider__input_secondary}`), g(
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
      J(a, r, l), i || (s = [
        xe(
          r,
          "input",
          /*input_handler_1*/
          t[75]
        ),
        xe(r, "mousedown", function() {
          Lr(
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
        xe(r, "touchstart", function() {
          Lr(
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
        xe(r, "focus", function() {
          Lr(
            /*focusHandler*/
            t[83]
          ) && t[83].apply(this, arguments);
        }),
        xe(r, "blur", function() {
          Lr(
            /*blurHandler*/
            t[84]
          ) && t[84].apply(this, arguments);
        })
      ], i = !0);
    },
    p(a, l) {
      t = a, l[0] & /*switchedTracks*/
      65536 && e !== (e = /*switchedTracks*/
      t[16] ? Jr.slider__input : `${Jr.slider__input} ${Jr.slider__input_secondary}`) && g(r, "class", e), l[0] & /*minValue*/
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
      a && G(r), i = !1, Rr(s);
    }
  };
}
function mw(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N = ar(
    /*renderRanges*/
    t[21]
  ), H = [];
  for (let D = 0; D < N.length; D += 1)
    H[D] = sf(of(t, N, D));
  let z = ar(
    /*markActiveTicks*/
    t[17]
  ), oe = [];
  for (let D = 0; D < z.length; D += 1)
    oe[D] = lf(nf(t, z, D));
  let _e = ar(
    /*markInactiveTicks*/
    t[18]
  ), T = [];
  for (let D = 0; D < _e.length; D += 1)
    T[D] = af(rf(t, _e, D));
  let Y = (
    /*textStyle*/
    t[7] && uf(t)
  ), le = (
    /*secondVariable*/
    t[13] && cf(t)
  ), E = (
    /*secondVariable*/
    t[13] && df(t)
  );
  return {
    c() {
      r = Pe("div"), e = Pe("div"), n = Pe("div");
      for (let D = 0; D < H.length; D += 1)
        H[D].c();
      i = hr();
      for (let D = 0; D < oe.length; D += 1)
        oe[D].c();
      s = hr();
      for (let D = 0; D < T.length; D += 1)
        T[D].c();
      a = hr(), l = Pe("div"), Y && Y.c(), u = hr(), le && le.c(), c = hr(), f = Pe("input"), p = hr(), E && E.c(), g(n, "class", o = Jr["slider__tracks-ranges"] + /*$direction*/
      (t[14] === "rtl" ? " " + Jr["slider__tracks-ranges_rtl"] : "")), g(l, "class", Jr.slider__thumb), I(l, "border-radius", ge(
        /*thumbStyle*/
        t[5].borderRadius
      )), I(
        l,
        "background",
        /*thumbStyle*/
        t[5].background
      ), I(
        l,
        "box-shadow",
        /*thumbStyle*/
        t[5].boxShadow || ""
      ), g(f, "type", "range"), g(f, "class", _ = /*switchedTracks*/
      t[16] ? `${Jr.slider__input} ${Jr.slider__input_secondary}` : Jr.slider__input), g(
        f,
        "min",
        /*minValue*/
        t[3]
      ), g(
        f,
        "max",
        /*maxValue*/
        t[4]
      ), g(f, "step", "1"), f.value = h = /*switchedTracks*/
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
      ), g(e, "class", Jr["slider__tracks-inner"]), g(r, "class", Jr["slider__tracks-wrapper"]);
    },
    m(D, M) {
      J(D, r, M), bt(r, e), bt(e, n);
      for (let W = 0; W < H.length; W += 1)
        H[W] && H[W].m(n, null);
      bt(e, i);
      for (let W = 0; W < oe.length; W += 1)
        oe[W] && oe[W].m(e, null);
      bt(e, s);
      for (let W = 0; W < T.length; W += 1)
        T[W] && T[W].m(e, null);
      bt(e, a), bt(e, l), Y && Y.m(l, null), bt(e, u), le && le.m(e, null), bt(e, c), bt(e, f), t[74](f), bt(e, p), E && E.m(e, null), t[76](e), w || (k = [
        xe(
          f,
          "input",
          /*input_handler*/
          t[73]
        ),
        xe(f, "focus", function() {
          Lr(
            /*focusHandler*/
            t[83]
          ) && t[83].apply(this, arguments);
        }),
        xe(f, "blur", function() {
          Lr(
            /*blurHandler*/
            t[84]
          ) && t[84].apply(this, arguments);
        })
      ], w = !0);
    },
    p(D, M) {
      if (t = D, M[0] & /*renderRanges*/
      2097152) {
        N = ar(
          /*renderRanges*/
          t[21]
        );
        let W;
        for (W = 0; W < N.length; W += 1) {
          const q = of(t, N, W);
          H[W] ? H[W].p(q, M) : (H[W] = sf(q), H[W].c(), H[W].m(n, null));
        }
        for (; W < H.length; W += 1)
          H[W].d(1);
        H.length = N.length;
      }
      if (M[0] & /*$direction*/
      16384 && o !== (o = Jr["slider__tracks-ranges"] + /*$direction*/
      (t[14] === "rtl" ? " " + Jr["slider__tracks-ranges_rtl"] : "")) && g(n, "class", o), M[0] & /*markActiveTicks*/
      131072) {
        z = ar(
          /*markActiveTicks*/
          t[17]
        );
        let W;
        for (W = 0; W < z.length; W += 1) {
          const q = nf(t, z, W);
          oe[W] ? oe[W].p(q, M) : (oe[W] = lf(q), oe[W].c(), oe[W].m(e, s));
        }
        for (; W < oe.length; W += 1)
          oe[W].d(1);
        oe.length = z.length;
      }
      if (M[0] & /*markInactiveTicks*/
      262144) {
        _e = ar(
          /*markInactiveTicks*/
          t[18]
        );
        let W;
        for (W = 0; W < _e.length; W += 1) {
          const q = rf(t, _e, W);
          T[W] ? T[W].p(q, M) : (T[W] = af(q), T[W].c(), T[W].m(e, a));
        }
        for (; W < T.length; W += 1)
          T[W].d(1);
        T.length = _e.length;
      }
      /*textStyle*/
      t[7] ? Y ? Y.p(t, M) : (Y = uf(t), Y.c(), Y.m(l, null)) : Y && (Y.d(1), Y = null), M[0] & /*thumbStyle*/
      32 && I(l, "border-radius", ge(
        /*thumbStyle*/
        t[5].borderRadius
      )), M[0] & /*thumbStyle*/
      32 && I(
        l,
        "background",
        /*thumbStyle*/
        t[5].background
      ), M[0] & /*thumbStyle*/
      32 && I(
        l,
        "box-shadow",
        /*thumbStyle*/
        t[5].boxShadow || ""
      ), /*secondVariable*/
      t[13] ? le ? le.p(t, M) : (le = cf(t), le.c(), le.m(e, c)) : le && (le.d(1), le = null), M[0] & /*switchedTracks*/
      65536 && _ !== (_ = /*switchedTracks*/
      t[16] ? `${Jr.slider__input} ${Jr.slider__input_secondary}` : Jr.slider__input) && g(f, "class", _), M[0] & /*minValue*/
      8 && g(
        f,
        "min",
        /*minValue*/
        t[3]
      ), M[0] & /*maxValue*/
      16 && g(
        f,
        "max",
        /*maxValue*/
        t[4]
      ), M[0] & /*switchedTracks, value2, value*/
      71680 && h !== (h = /*switchedTracks*/
      t[16] ? (
        /*value2*/
        t[12]
      ) : (
        /*value*/
        t[11]
      )) && (f.value = h), M[0] & /*isEnabled*/
      512 && m !== (m = !/*isEnabled*/
      t[9]) && (f.disabled = m), M[0] & /*description*/
      524288 && g(
        f,
        "aria-label",
        /*description*/
        t[19]
      ), /*secondVariable*/
      t[13] ? E ? E.p(t, M) : (E = df(t), E.c(), E.m(e, null)) : E && (E.d(1), E = null);
    },
    d(D) {
      D && G(r), on(H, D), on(oe, D), on(T, D), Y && Y.d(), le && le.d(), t[74](null), E && E.d(), t[76](null), w = !1, Rr(k);
    }
  };
}
function bw(t) {
  let r, e, n, o, i, s;
  const a = [hw, gw], l = [];
  function u(c, f) {
    return (
      /*hasError*/
      c[10] ? 1 : 0
    );
  }
  return ~(r = u(t)) && (e = l[r] = a[r](t)), {
    c() {
      e && e.c(), n = er();
    },
    m(c, f) {
      ~r && l[r].m(c, f), J(c, n, f), o = !0, i || (s = xe(
        window,
        "resize",
        /*checkTicksDebounced*/
        t[43]
      ), i = !0);
    },
    p(c, f) {
      let _ = r;
      r = u(c), r === _ ? ~r && l[r].p(c, f) : (e && (fr(), x(l[_], 1, 1, () => {
        l[_] = null;
      }), dr()), ~r ? (e = l[r], e ? e.p(c, f) : (e = l[r] = a[r](c), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(c) {
      o || (L(e), o = !0);
    },
    o(c) {
      x(e), o = !1;
    },
    d(c) {
      c && G(n), ~r && l[r].d(c), i = !1, s();
    }
  };
}
const eo = {
  width: 10,
  height: 10,
  borderRadius: 5,
  background: "#000"
}, js = ["rounded_rectangle", "circle"], zl = ["rounded_rectangle"];
function Cs(t, r, e, n, o) {
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
function yw(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, z, oe, _e, T, Y, le, E, D, M, W, q, be, Ae = v, Ce = () => (Ae(), Ae = C(oe, (j) => e(57, be = j)), oe), me, Fe = v, Q = () => (Fe(), Fe = C(H, (j) => e(58, me = j)), H), Ke, Ye = v, Xe = () => (Ye(), Ye = C(z, (j) => e(59, Ke = j)), z), ye, Me = v, ce = () => (Me(), Me = C(N, (j) => e(60, ye = j)), N), he, fe = v, re = () => (fe(), fe = C(k, (j) => e(61, he = j)), k), de, ne = v, we = () => (ne(), ne = C(w, (j) => e(62, de = j)), w), Ue, Ge = v, $ = () => (Ge(), Ge = C(p, (j) => e(63, Ue = j)), p), Be, Ne = v, ot = () => (Ne(), Ne = C(m, (j) => e(64, Be = j)), m), ct, nt = v, kt = () => (nt(), nt = C(h, (j) => e(65, ct = j)), h), it, Pt = v, ft = () => (Pt(), Pt = C(_, (j) => e(66, it = j)), _), Z, pe = v, st = () => (pe(), pe = C(f, (j) => e(67, Z = j)), f), ze, F = v, Ct = () => (F(), F = C(c, (j) => e(68, ze = j)), c), ut, Vt = v, Dt = () => (Vt(), Vt = C(a, (j) => e(69, ut = j)), a), lt, K = v, Mt = () => (K(), K = C(s, (j) => e(70, lt = j)), s), It, Xt = v, Zt = () => (Xt(), Xt = C(u, (j) => e(71, It = j)), u), Ee, Ze = v, gt = () => (Ze(), Ze = C(l, (j) => e(72, Ee = j)), l);
  t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => Fe()), t.$$.on_destroy.push(() => Ye()), t.$$.on_destroy.push(() => Me()), t.$$.on_destroy.push(() => fe()), t.$$.on_destroy.push(() => ne()), t.$$.on_destroy.push(() => Ge()), t.$$.on_destroy.push(() => Ne()), t.$$.on_destroy.push(() => nt()), t.$$.on_destroy.push(() => Pt()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => F()), t.$$.on_destroy.push(() => Vt()), t.$$.on_destroy.push(() => K()), t.$$.on_destroy.push(() => Xt()), t.$$.on_destroy.push(() => Ze());
  let { componentContext: Ie } = r, { layoutParams: $e = void 0 } = r;
  const Le = Tr(Yr), Ft = Tr(To), Oe = Le.direction;
  yn(t, Oe, (j) => e(14, q = j));
  let yt, Gt, Tt, sr = !1, Te = 0, jt = 100, lr = eo, rr = lr, nr = eo, pr = eo, vr, or = null, ir, Ht = null, mt, Qt = mt, ae = "", wr = "", kr = !0, Et = !1, Ir = [];
  function Pr() {
    e(5, lr = eo), e(6, rr = lr), e(45, nr = eo), e(46, pr = eo), e(47, or = null), e(48, Ht = null), e(7, mt = void 0), e(8, Qt = void 0), e(19, ae = ""), e(9, kr = !0), e(20, wr = "");
  }
  let ur = Fo(lt || 0, Te, jt), dt = Fo(ut || 0, Te, jt);
  function At({ direction: j, minValue: ie, maxValue: d, trackActiveOffset: B, trackActivePart: je, trackInactiveStyle: He, trackActiveStyle: ke, ranges: P = [] }) {
    const Lt = [], zt = (at, Ot, Ar) => {
      var Fr, wn, Se, Xr;
      const _r = (Ur, ln, cn, y) => {
        var ee, O, tt, De;
        const A = Math.max(Ur, Ot);
        if (Math.min(ln, Ar) - A > 0) {
          const tr = y && (O = (ee = y[j === "ltr" ? "start" : "end"]) != null ? ee : y.left) != null ? O : 0, se = y && (De = (tt = y[j === "ltr" ? "end" : "start"]) != null ? tt : y.right) != null ? De : 0;
          Lt.push({
            left: Ur,
            right: ln,
            totalLeft: Ot,
            totalRight: Ar,
            leftMargin: tr,
            rightMargin: se,
            style: cn
          });
        }
      };
      if ((!P[0] || ((Fr = P[0].start) != null ? Fr : ie) > Ot) && _r(Ot, P[0] ? (wn = P[0].start) != null ? wn : ie : Ar, at === "inactive" ? He : ke), P.forEach((Ur, ln) => {
        var De, tr, se, We;
        const cn = Ur[at === "inactive" ? "track_inactive_style" : "track_active_style"], A = cn ? uo(cn, zl, eo) : at === "inactive" ? He : ke, S = P[ln - 1], ee = P[ln + 1], O = (tr = (De = Ur.start) != null ? De : S == null ? void 0 : S.end) != null ? tr : Ot, tt = (We = (se = Ur.end) != null ? se : ee == null ? void 0 : ee.start) != null ? We : Ar;
        _r(O, tt, A, Ur.margins);
      }), P[P.length - 1] && ((Se = P[P.length - 1].end) != null ? Se : d) < Ar) {
        const Ur = (Xr = P[P.length - 1].end) != null ? Xr : d;
        _r(Ur, Ar, at === "inactive" ? He : ke);
      }
    };
    zt("inactive", ie, d), zt("active", B, B + je);
    const Je = d - ie;
    e(21, Ir = Lt.map((at) => {
      let Ot = `${(at.left - ie) * 100 / Je}%`;
      at.leftMargin && (Ot = `calc(${Ot} + ${un(at.leftMargin)})`);
      let Ar;
      at.totalLeft < at.left ? Ar = Ot : at.leftMargin ? Ar = `max(${(at.totalLeft - ie) * 100 / Je}%, ${Ot})` : Ar = `${(Math.max(at.totalLeft, at.left) - ie) * 100 / Je}%`;
      let _r = `${(1 - (at.right - ie) / Je) * 100}%`;
      at.rightMargin && (_r = `calc(${_r} + ${un(at.rightMargin)})`);
      let Fr;
      return at.totalRight > at.right ? Fr = _r : at.rightMargin ? Fr = `max(${(1 - (at.totalRight - ie) / Je) * 100}%, ${_r})` : Fr = `${(1 - (Math.max(at.totalRight, at.right) - ie) / Je) * 100}%`, {
        left: Ar,
        right: Fr,
        height: ge(at.style.height),
        borderRadius: ge(at.style.borderRadius),
        background: at.style.background,
        boxShadow: at.style.boxShadow || ""
      };
    }));
  }
  function Jt(j) {
    var P, Lt;
    if (!kr)
      return;
    const ie = "pageX" in j ? j.pageX : (Lt = (P = j.changedTouches) == null ? void 0 : P[0]) == null ? void 0 : Lt.pageX;
    if (ie === void 0)
      return;
    const d = Tt.getBoundingClientRect();
    let B = (ie - d.left) / d.width;
    q === "rtl" && (B = 1 - B);
    const je = Te + (jt - Te) * B, He = Math.round(Fo(je, Te, jt)), ke = (ur + dt) / 2;
    e(16, sr = He < ke == ur < dt);
  }
  function xt(j, ie) {
    const d = Number(j.target.value);
    sr === (ie === "first") ? (e(12, dt = d), a.setValue(d)) : (e(11, ur = d), s.setValue(d));
  }
  let et = !1;
  function pt() {
    if (!Tt)
      return;
    const j = jt - Te, ie = (or == null ? void 0 : or.width) || 0, d = (Ht == null ? void 0 : Ht.width) || 0;
    Math.max(ie, d) * j >= (Tt == null ? void 0 : Tt.clientWidth) ? et || (Ie.logError(X(new Error("Slider ticks overlap each other"), { level: "warn" })), et = !0) : et = !1;
  }
  const ue = ja(pt, 50);
  xn(() => {
    pt();
  }), sn(() => {
    yt && (Le.unregisterFocusable(yt), e(44, yt = void 0));
  });
  const vt = (j) => xt(j, "first");
  function $t(j) {
    Dr[j ? "unshift" : "push"](() => {
      Gt = j, e(2, Gt);
    });
  }
  const Wt = (j) => xt(j, "second");
  function yr(j) {
    Dr[j ? "unshift" : "push"](() => {
      Tt = j, e(15, Tt);
    });
  }
  return t.$$set = (j) => {
    "componentContext" in j && e(0, Ie = j.componentContext), "layoutParams" in j && e(1, $e = j.layoutParams);
  }, t.$$.update = () => {
    var j, ie, d, B;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(56, n = Ie.origJson), t.$$.dirty[1] & /*origJson*/
    33554432 && n && Pr(), t.$$.dirty[0] & /*componentContext*/
    1 && e(55, o = Ie.json.thumb_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(13, i = Ie.json.thumb_secondary_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*firstVariable*/
    16777216 && Mt(e(22, s = o && (Ie.getVariable(o, "integer") || Le.awaitGlobalVariable(o, "integer", 0)) || Xn("temp", "integer", 0))), t.$$.dirty[0] & /*secondVariable, componentContext*/
    8193 && Dt(e(23, a = i && (Ie.getVariable(i, "integer") || Le.awaitGlobalVariable(i, "integer", 0)) || Xn("temp", "integer", 0))), t.$$.dirty[0] & /*componentContext*/
    1 && gt(e(39, l = Ie.getDerivedFromVars(Ie.json.min_value))), t.$$.dirty[0] & /*componentContext*/
    1 && Zt(e(38, u = Ie.getDerivedFromVars(Ie.json.max_value))), t.$$.dirty[0] & /*componentContext*/
    1 && Ct(e(37, c = Ie.getDerivedFromVars(Ie.json.thumb_style))), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(36, f = Ie.getDerivedFromVars(Ie.json.thumb_secondary_style))), t.$$.dirty[0] & /*componentContext*/
    1 && ft(e(35, _ = Ie.getDerivedFromVars(Ie.json.track_inactive_style))), t.$$.dirty[0] & /*componentContext*/
    1 && kt(e(34, h = Ie.getDerivedFromVars(Ie.json.track_active_style))), t.$$.dirty[0] & /*componentContext*/
    1 && ot(e(33, m = Ie.getDerivedFromVars(Ie.json.tick_mark_active_style))), t.$$.dirty[0] & /*componentContext*/
    1 && $(e(32, p = Ie.getDerivedFromVars(Ie.json.tick_mark_inactive_style))), t.$$.dirty[0] & /*componentContext*/
    1 && we(e(31, w = Ie.getDerivedFromVars(Ie.json.thumb_text_style, void 0, !0, 1))), t.$$.dirty[0] & /*componentContext*/
    1 && re(e(30, k = Ie.getDerivedFromVars(Ie.json.thumb_secondary_text_style, void 0, !0, 1))), t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(29, N = Ie.getDerivedFromVars(Ie.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Q(e(28, H = Ie.getDerivedFromVars(Ie.json.secondary_value_accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(27, z = Ie.getDerivedFromVars(Ie.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Ce(e(26, oe = Ie.getDerivedFromVars(Ie.json.ranges))), t.$$.dirty[0] & /*minValue, maxValue*/
    24 | t.$$.dirty[2] & /*$jsonMinValue, $jsonMaxValue*/
    1536 && (e(3, Te = io(Ee, Te)), e(4, jt = io(It, jt)), pt()), t.$$.dirty[0] & /*minValue, maxValue, value*/
    2072 | t.$$.dirty[2] & /*$valueVariable*/
    256) {
      const je = Fo(lt || 0, Te, jt);
      je !== ur && e(11, ur = je);
    }
    if (t.$$.dirty[0] & /*minValue, maxValue, value2*/
    4120 | t.$$.dirty[2] & /*$value2Variable*/
    128) {
      const je = Fo(ut || 0, Te, jt);
      je !== dt && e(12, dt = je);
    }
    if (t.$$.dirty[0] & /*thumbStyle*/
    32 | t.$$.dirty[2] & /*$jsonThumbStyle*/
    64 && e(5, lr = uo(ze, js, lr)), t.$$.dirty[0] & /*thumbStyle*/
    32 | t.$$.dirty[2] & /*$jsonThumbSecondaryStyle*/
    32 && e(6, rr = uo(Z, js, lr)), t.$$.dirty[1] & /*trackInactiveStyle*/
    16384 | t.$$.dirty[2] & /*$jsonTrackInactiveStyle*/
    16 && e(45, nr = uo(it, zl, nr)), t.$$.dirty[1] & /*trackActiveStyle*/
    32768 | t.$$.dirty[2] & /*$jsonTrackActiveStyle*/
    8 && e(46, pr = uo(ct, zl, pr)), t.$$.dirty[2] & /*$jsonMarkActiveStyle*/
    4) {
      let je = uo(Be, js, eo);
      je !== eo && e(47, or = je);
    }
    if (t.$$.dirty[0] & /*secondVariable, value, value2, minValue, maxValue*/
    14360 | t.$$.dirty[1] & /*markActiveStyle*/
    65536 && (or ? (e(17, vr = i ? Cs(Math.min(ur, dt), Math.max(ur, dt) + 1, Te, jt, !0) : Cs(Te, ur, Te, jt, !0)), pt()) : e(17, vr = [])), t.$$.dirty[2] & /*$jsonMarkInactiveStyle*/
    2) {
      let je = uo(Ue, js, eo);
      je !== eo && e(48, Ht = je);
    }
    if (t.$$.dirty[0] & /*secondVariable, value, value2, minValue, maxValue*/
    14360 | t.$$.dirty[1] & /*markInactiveStyle*/
    131072 && (Ht ? (e(18, ir = i ? Cs(Math.min(ur, dt), Math.max(ur, dt) + 1, Te, jt, !1) : Cs(ur + 1, jt + 1, Te, jt, !0)), pt()) : e(18, ir = [])), t.$$.dirty[0] & /*textStyle*/
    128 | t.$$.dirty[2] & /*$jsonTextStyle*/
    1 && e(7, mt = tf(de, Le.typefaceProvider, mt)), t.$$.dirty[0] & /*textStyle*/
    128 | t.$$.dirty[1] & /*$jsonSecondaryTextStyle*/
    1073741824 && e(8, Qt = tf(he, Le.typefaceProvider, mt)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    536870912 && (ye != null && ye.description ? e(19, ae = Yo(ye)) : Ie.logError(X(new Error('Missing accessibility "description" for slider'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled*/
    512 | t.$$.dirty[1] & /*$jsonIsEnabled*/
    268435456 && e(9, kr = Zr(Ke, kr)), t.$$.dirty[0] & /*secondVariable, componentContext*/
    8193 | t.$$.dirty[1] & /*$jsonSecondaryAccessibility*/
    134217728 && (me != null && me.description ? e(20, wr = Yo(me)) : i && Ie.logError(X(new Error('Missing second accessibility "description" for slider'), { level: "warn" }))), t.$$.dirty[0] & /*componentContext, thumbStyle, hasError*/
    1057 | t.$$.dirty[1] & /*trackActiveStyle, trackInactiveStyle*/
    49152) {
      let je = !1;
      Ft.hasAction() ? (Ie.logError(X(new Error('Cannot show "slider" inside component with an action or inside accessibility mode=exclude'))), je = !0) : lr === eo ? (Ie.logError(X(new Error('Missing "thumb_style" in slider'))), je = !0) : pr === eo ? (Ie.logError(X(new Error('Missing "track_active_style" in slider'))), je = !0) : nr === eo && (Ie.logError(X(new Error('Missing "track_inactive_style" in slider'))), je = !0), je !== Et && e(10, Et = je);
    }
    t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle*/
    96 && e(52, _e = ge(Math.max(...[lr.width, rr.width, 0].filter(zn)))), t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle*/
    96 && e(51, T = ge(Math.max(...[lr.height, rr.height, 0].filter(zn)))), t.$$.dirty[0] & /*value, minValue, maxValue*/
    2072 && e(50, Y = (ur - Te) / (jt - Te)), t.$$.dirty[0] & /*secondVariable, value2, minValue, maxValue*/
    12312 && e(49, le = i ? (dt - Te) / (jt - Te) : void 0), t.$$.dirty[0] & /*value, value2, minValue*/
    6152 | t.$$.dirty[1] & /*trackSecondaryPart*/
    262144 && e(54, E = le !== void 0 ? Math.min(ur, dt) : Te), t.$$.dirty[0] & /*value2, value, minValue*/
    6152 | t.$$.dirty[1] & /*trackSecondaryPart*/
    262144 && e(53, D = le !== void 0 ? Math.abs(dt - ur) : ur - Te), t.$$.dirty[0] & /*$direction, minValue, maxValue*/
    16408 | t.$$.dirty[1] & /*trackActiveOffset, trackActivePart, trackInactiveStyle, trackActiveStyle, $jsonRanges*/
    79740928 && At({
      direction: q,
      minValue: Te,
      maxValue: jt,
      trackActiveOffset: E,
      trackActivePart: D,
      trackInactiveStyle: nr,
      trackActiveStyle: pr,
      ranges: be
    }), t.$$.dirty[0] & /*thumbStyle, thumbSecondaryStyle, textStyle, textSecondaryStyle*/
    480 | t.$$.dirty[1] & /*markActiveStyle, markInactiveStyle, maxThumbWidth, maxThumbHeight, trackPart, trackSecondaryPart*/
    4128768 && e(25, M = {
      "--divkit-slider-thumb-width": ge(lr.width),
      "--divkit-slider-thumb-height": ge(lr.height),
      "--divkit-slider-thumb-secondary-width": ge(rr.width),
      "--divkit-slider-thumb-secondary-height": ge(rr.height),
      "--divkit-slider-text-offset-x": (j = mt == null ? void 0 : mt.offset) != null && j.x ? un(mt.offset.x) : void 0,
      "--divkit-slider-text-offset-y": (ie = mt == null ? void 0 : mt.offset) != null && ie.y ? un(mt.offset.y) : void 0,
      "--divkit-slider-text-secondary-offset-x": (d = Qt == null ? void 0 : Qt.offset) != null && d.x ? un(Qt.offset.x) : void 0,
      "--divkit-slider-text-secondary-offset-y": (B = Qt == null ? void 0 : Qt.offset) != null && B.y ? un(Qt.offset.y) : void 0,
      "--divkit-slider-tick-active-width": or ? ge(or.width) : void 0,
      "--divkit-slider-tick-active-height": or ? ge(or.height) : void 0,
      "--divkit-slider-tick-active-border-radius": or ? ge(or.borderRadius) : void 0,
      "--divkit-slider-tick-active-background": (or == null ? void 0 : or.background) || void 0,
      "--divkit-slider-tick-active-box-shadow": (or == null ? void 0 : or.boxShadow) || void 0,
      "--divkit-slider-tick-inactive-width": Ht ? ge(Ht.width) : void 0,
      "--divkit-slider-tick-inactive-height": Ht ? ge(Ht.height) : void 0,
      "--divkit-slider-tick-inactive-border-radius": Ht ? ge(Ht.borderRadius) : void 0,
      "--divkit-slider-tick-inactive-background": (Ht == null ? void 0 : Ht.background) || void 0,
      "--divkit-slider-tick-inactive-box-shadow": (Ht == null ? void 0 : Ht.boxShadow) || void 0,
      "--divkit-slider-max-thumb-width": _e,
      "--divkit-slider-max-thumb-height": T,
      "--divkit-slider-track-part": Y,
      "--divkit-slider-track-secondary-part": le
    }), t.$$.dirty[0] & /*$direction*/
    16384 && e(24, W = { direction: q }), t.$$.dirty[0] & /*componentContext, input*/
    5 | t.$$.dirty[1] & /*prevId*/
    8192 && Ie.json && Gt && (yt && (Le.unregisterFocusable(yt), e(44, yt = void 0)), Ie.id && !Ie.fakeElement && (e(44, yt = Ie.id), Le.registerFocusable(yt, {
      focus() {
        Gt && Gt.focus();
      }
    })));
  }, [
    Ie,
    $e,
    Gt,
    Te,
    jt,
    lr,
    rr,
    mt,
    Qt,
    kr,
    Et,
    ur,
    dt,
    i,
    q,
    Tt,
    sr,
    vr,
    ir,
    ae,
    wr,
    Ir,
    s,
    a,
    W,
    M,
    oe,
    z,
    H,
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
    Oe,
    Jt,
    xt,
    ue,
    yt,
    nr,
    pr,
    or,
    Ht,
    le,
    Y,
    T,
    _e,
    D,
    E,
    o,
    n,
    be,
    me,
    Ke,
    ye,
    he,
    de,
    Ue,
    Be,
    ct,
    it,
    Z,
    ze,
    ut,
    lt,
    It,
    Ee,
    vt,
    $t,
    Wt,
    yr
  ];
}
class ww extends Br {
  constructor(r) {
    super(), Or(this, r, yw, bw, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const kw = "appkit-input", vw = "appkit-input__aligner", jw = "appkit-input__input", Cw = "appkit-input__placeholder", Ew = "appkit-input__input_singleline", Aw = "appkit-input__input_multiline", Ri = {
  input: kw,
  "input_alignment-horizontal_center": "appkit-input_alignment-horizontal_center",
  "input_alignment-horizontal_end": "appkit-input_alignment-horizontal_end",
  input__aligner: vw,
  input__input: jw,
  input__placeholder: Cw,
  "input_alignment-vertical_start": "appkit-input_alignment-vertical_start",
  "input_alignment-vertical_end": "appkit-input_alignment-vertical_end",
  "input_alignment-vertical_baseline": "appkit-input_alignment-vertical_baseline",
  "input_highlight-color": "appkit-input_highlight-color",
  input__input_singleline: Ew,
  "input__scroll-wrapper": "appkit-input__scroll-wrapper",
  input__input_multiline: Aw,
  "input__input_has-custom-focus": "appkit-input__input_has-custom-focus"
};
function ds(t, r) {
  if (t === r)
    return {
      start: t.length,
      added: 0,
      removed: 0
    };
  if (t.length > r.length) {
    const i = ds(r, t);
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
class _f {
  constructor(r) {
    this.char = r;
  }
}
class wo {
  constructor(r, e, n) {
    this.char = r, this.filter = e, this.placeholder = n;
  }
}
class Aa {
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
      if (n instanceof _f)
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
    const r = this.destructedValue.findIndex((e) => e instanceof wo && !e.char);
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
      return i ? new wo(
        null,
        this.filters.get(i.key),
        i.placeholder
      ) : new _f(o);
    }), n !== null && this.overrideRawValue(n);
  }
  overrideRawValue(r) {
    this.clearRange(0, this.destructedValue.length), this.replaceChars(r, 0), this.cursorPos = Math.min(this.cursorPos, this.value.length);
  }
  applyChangeFrom(r, e) {
    const n = ds(this.value, r);
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
        this.destructedValue[s] instanceof wo && ++i, ++s;
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
        if (n instanceof wo && n.char !== null) {
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
      o instanceof wo && (o.char = null), ++n;
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
      for (; o < this.destructedValue.length && !(this.destructedValue[o] instanceof wo); )
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
      i instanceof wo && i.char !== null && (n += i.char), ++o;
    }
    return n;
  }
  replaceChars(r, e, n) {
    let o = this.calculateInsertableSubstring(r, e);
    n !== void 0 && (o = o.substring(0, n));
    let i = e, s = 0;
    for (; i < this.destructedValue.length && s < o.length; ) {
      const a = this.destructedValue[i], l = o[s];
      a instanceof wo && (a.char = l, ++s), ++i;
    }
  }
  firstHolderAfter(r) {
    let e = r;
    for (; e < this.destructedValue.length && !(this.destructedValue[e] instanceof wo); )
      ++e;
    return e;
  }
}
class Sw extends Aa {
  constructor(r, e) {
    super(r), this.logError = e;
  }
  onException(r) {
    this.logError(r);
  }
}
function Vw(t, r, e) {
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
    return e ? (e.updateMaskData(n), e) : new Sw(n, r);
  }
  return e || null;
}
class Fw extends Aa {
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
    const o = ds(this.value, e), i = this.value.lastIndexOf(this.decimalSeparator), s = e.lastIndexOf(this.decimalSeparator), a = i !== s || i === -1 && s === -1, l = this.validFormat(e, o);
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
      for (let h = 0; h < e.length; h++) {
        const m = e[h];
        m === this.decimalSeparator ? _ = !0 : !this.inDiff(n, h) && _ && this.isDigit(m) && l--;
      }
    }
    const u = e.includes(this.decimalSeparator) || s !== -1, c = [];
    i = e.length - 1;
    let f = !1;
    for (; i >= 0; ) {
      const _ = e[i], h = c.length <= a;
      this.isDigit(_) ? this.inDiff(n, i) && !f && u ? l > 0 && (c.push(_), l--) : c.push(_) : h && o === -1 && i === s ? (c.push(this.decimalSeparator), f = !0) : h && _ === this.decimalSeparator && (o === i || o === -1) && (c.push(this.decimalSeparator), f = !0, o = i), i--;
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
function Dw(t, r, e) {
  return e ? (e.updateCurrencyParams(t.locale), e) : new Fw(t.locale, r);
}
const Iw = {
  kotlin: {
    public_default_values: !0
  },
  swift: {
    public_default_values: !0
  }
}, Tw = {
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
}, Mw = "object", Pw = {
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
}, __ = {
  codegen: Iw,
  constants: Tw,
  type: Mw,
  properties: Pw
}, Nw = "000000000000000", pf = "*", zw = "00", gf = [{
  key: "0",
  filter: "\\d",
  placeholder: "_"
}];
class Lw extends Aa {
  constructor(e) {
    super({
      pattern: mf(""),
      decoding: gf,
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
    const o = ds(this.value, e);
    n !== void 0 && (o.start = Math.max(0, n - o.added));
    const i = this.rawValue, s = this.replaceBodyTail(o, e), a = this.rawValue, l = this.newMaskPatternFor(a);
    if (l == null) {
      this.calculateCursorPosition(o, s);
      return;
    }
    this.updateMaskDataWith(l), this.replaceChars(a, 0);
    const u = ds(i, a), c = u.start + u.added;
    this.calculateCursorPositionBy(c);
  }
  calculateCursorPositionBy(e) {
    let n = 0, o = 0;
    for (; n < this.destructedValue.length && o < e; )
      this.destructedValue[n++] instanceof wo && o++;
    this.cursorPos = this.firstHolderAfter(n);
  }
  tryInvalidateMaskDataWith(e) {
    const n = this.newMaskPatternFor(e);
    n && this.updateMaskDataWith(n);
  }
  newMaskPatternFor(e) {
    const n = mf(e), o = this.maskData.pattern;
    return n !== o ? n : null;
  }
  updateMaskDataWith(e) {
    return this.updateMaskData({
      pattern: e,
      decoding: gf,
      alwaysVisible: this.maskData.alwaysVisible
    }, !1);
  }
  onException(e) {
    this.logError(e);
  }
}
function hf(t) {
  return "$ref" in t ? __.constants[t.$ref.split("/").pop()] : t;
}
function mf(t) {
  if (!t)
    return Nw;
  let r = __.properties.value.default_value, e = 0;
  for (; !("value" in r); ) {
    if (e >= t.length) {
      r = hf(r[pf]);
      break;
    }
    const n = t[e++];
    r = hf(r[n in r ? n : pf]);
  }
  return r.value + zw;
}
function Ow(t, r) {
  return r || new Lw(t);
}
function Bw(t) {
  let r, e;
  return r = new In({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Rw(t) {
  let r, e;
  return r = new hn({
    props: {
      alwaysCustomFocus: !0,
      cls: ht(
        "input",
        Ri,
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
          Uw,
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
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      262144 && (i.cls = ht(
        "input",
        Ri,
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Hw(t) {
  let r, e, n, o, i, s, a, l, u;
  return {
    c() {
      r = Pe("input"), g(
        r,
        "type",
        /*inputType*/
        t[9]
      ), g(
        r,
        "inputmode",
        /*inputMode*/
        t[10]
      ), g(r, "class", e = ht("input__input", Ri, {
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
      t[14] || void 0), g(r, "style", o = cr(
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
      J(c, r, f), t[102](r), l || (u = [
        xe(
          r,
          "input",
          /*onInput*/
          t[48]
        ),
        xe(
          r,
          "keydown",
          /*onKeyDown*/
          t[49]
        ),
        xe(r, "mousedown", function() {
          Lr(
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
        xe(r, "click", function() {
          Lr(
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
        xe(r, "focus", function() {
          Lr(
            /*focusHandler*/
            t[121]
          ) && t[121].apply(this, arguments);
        }),
        xe(r, "blur", function() {
          Lr(
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
      1073741824 && e !== (e = ht("input__input", Ri, {
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
      65536 && o !== (o = cr(
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
      c && G(r), t[102](null), l = !1, Rr(u);
    }
  };
}
function Ww(t) {
  let r, e, n, o, i, s, a, l, u;
  return {
    c() {
      r = Pe("textarea"), g(r, "class", e = ht("input__input", Ri, {
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
      )), g(r, "style", i = cr(
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
      J(c, r, f), t[101](r), l || (u = [
        xe(
          r,
          "input",
          /*onInput*/
          t[48]
        ),
        xe(
          r,
          "keydown",
          /*onKeyDown*/
          t[49]
        ),
        xe(r, "mousedown", function() {
          Lr(
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
        xe(r, "click", function() {
          Lr(
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
        xe(r, "focus", function() {
          Lr(
            /*focusHandler*/
            t[121]
          ) && t[121].apply(this, arguments);
        }),
        xe(r, "blur", function() {
          Lr(
            /*blurHandler*/
            t[122]
          ) && t[122].apply(this, arguments);
        })
      ], l = !0);
    },
    p(c, f) {
      t = c, f[3] & /*hasCustomFocus*/
      1073741824 && e !== (e = ht("input__input", Ri, {
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
      65536 && i !== (i = cr(
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
      c && G(r), t[101](null), l = !1, Rr(u);
    }
  };
}
function Uw(t) {
  let r;
  function e(i, s) {
    return (
      /*isMultiline*/
      i[8] ? Ww : Hw
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = er();
    },
    m(i, s) {
      o.m(i, s), J(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && G(r), o.d(i);
    }
  };
}
function Gw(t) {
  let r, e, n, o;
  const i = [Rw, Bw], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[4] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = er();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (fr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
const Jw = typeof document < "u" && "inputMode" in document.createElement("input"), bf = {
  email: "email",
  number: "number",
  phone: "tel",
  single_line_text: "text",
  multi_line_text: "text",
  uri: "url",
  password: "password"
};
function Kw(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, z, oe, _e, T, Y, le, E, D, M, W, q, be, Ae, Ce, me, Fe, Q, Ke, Ye, Xe, ye = v, Me = () => (ye(), ye = C(s, (rt) => e(74, Xe = rt)), s), ce, he = v, fe = () => (he(), he = C(a, (rt) => e(75, ce = rt)), a), re, de = v, ne = () => (de(), de = C(Ae, (rt) => e(108, re = rt)), Ae), we, Ue = v, Ge = () => (Ue(), Ue = C(q, (rt) => e(76, we = rt)), q), $, Be = v, Ne = () => (Be(), Be = C(le, (rt) => e(77, $ = rt)), le), ot, ct = v, nt = () => (ct(), ct = C(W, (rt) => e(78, ot = rt)), W), kt, it, Pt = v, ft = () => (Pt(), Pt = C(Y, (rt) => e(80, it = rt)), Y), Z, pe = v, st = () => (pe(), pe = C(T, (rt) => e(81, Z = rt)), T), ze, F = v, Ct = () => (F(), F = C(Ce, (rt) => e(82, ze = rt)), Ce), ut, Vt = v, Dt = () => (Vt(), Vt = C(_e, (rt) => e(83, ut = rt)), _e), lt, K = v, Mt = () => (K(), K = C(oe, (rt) => e(84, lt = rt)), oe), It, Xt = v, Zt = () => (Xt(), Xt = C(M, (rt) => e(85, It = rt)), M), Ee, Ze = v, gt = () => (Ze(), Ze = C(D, (rt) => e(86, Ee = rt)), D), Ie, $e = v, Le = () => ($e(), $e = C(z, (rt) => e(87, Ie = rt)), z), Ft, Oe = v, yt = () => (Oe(), Oe = C(H, (rt) => e(88, Ft = rt)), H), Gt, Tt = v, sr = () => (Tt(), Tt = C(N, (rt) => e(89, Gt = rt)), N), Te, jt = v, lr = () => (jt(), jt = C(k, (rt) => e(90, Te = rt)), k), rr, nr = v, pr = () => (nr(), nr = C(w, (rt) => e(91, rr = rt)), w), vr, or = v, ir = () => (or(), or = C(p, (rt) => e(92, vr = rt)), p), Ht, mt = v, Qt = () => (mt(), mt = C(m, (rt) => e(93, Ht = rt)), m), ae, wr = v, kr = () => (wr(), wr = C(h, (rt) => e(94, ae = rt)), h), Et, Ir = v, Pr = () => (Ir(), Ir = C(_, (rt) => e(95, Et = rt)), _), ur, dt = v, At = () => (dt(), dt = C(f, (rt) => e(96, ur = rt)), f), Jt, xt = v, et = () => (xt(), xt = C(c, (rt) => e(97, Jt = rt)), c), pt, ue = v, vt = () => (ue(), ue = C(u, (rt) => e(98, pt = rt)), u), $t, Wt = v, yr = () => (Wt(), Wt = C(l, (rt) => e(99, $t = rt)), l), j, ie = v, d = () => (ie(), ie = C(be, (rt) => e(100, j = rt)), be), B, je = v, He = () => (je(), je = C(E, (rt) => e(46, B = rt)), E);
  t.$$.on_destroy.push(() => ye()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => Ue()), t.$$.on_destroy.push(() => Be()), t.$$.on_destroy.push(() => ct()), t.$$.on_destroy.push(() => Pt()), t.$$.on_destroy.push(() => pe()), t.$$.on_destroy.push(() => F()), t.$$.on_destroy.push(() => Vt()), t.$$.on_destroy.push(() => K()), t.$$.on_destroy.push(() => Xt()), t.$$.on_destroy.push(() => Ze()), t.$$.on_destroy.push(() => $e()), t.$$.on_destroy.push(() => Oe()), t.$$.on_destroy.push(() => Tt()), t.$$.on_destroy.push(() => jt()), t.$$.on_destroy.push(() => nr()), t.$$.on_destroy.push(() => or()), t.$$.on_destroy.push(() => mt()), t.$$.on_destroy.push(() => wr()), t.$$.on_destroy.push(() => Ir()), t.$$.on_destroy.push(() => dt()), t.$$.on_destroy.push(() => xt()), t.$$.on_destroy.push(() => ue()), t.$$.on_destroy.push(() => Wt()), t.$$.on_destroy.push(() => ie()), t.$$.on_destroy.push(() => je());
  let { componentContext: ke } = r, { layoutParams: P = void 0 } = r;
  const Lt = Tr(Yr), zt = Tr(To), Je = Lt.direction;
  yn(t, Je, (rt) => e(79, kt = rt));
  let at, Ot, Ar = !1, _r = null, Fr = "", wn = !1, Se = "", Xr = 12, Ur, ln = "", cn = "", y, A = "", S = "#000", ee = "", O = "start", tt = "center", De = "multi_line_text", tr = "text", se, We = "", Nt = null, St = "", Cr = "", Gr = "", an = !0, Mr = 1 / 0, mn = "off", bn = "default", Vn = "", lo = !1, Nn = !0, Kt = 0, b = 0;
  function V() {
    e(54, Se = ""), e(55, Xr = 12), e(56, Ur = void 0), e(57, ln = ""), e(58, cn = ""), e(59, y = void 0), e(61, S = "#000"), e(62, ee = ""), e(63, O = "left"), e(64, tt = "center"), e(65, De = "multi_line_text"), e(9, tr = "text"), e(10, se = void 0), e(5, an = !0), e(6, Mr = 1 / 0), e(12, mn = "off"), e(13, bn = "default"), e(14, Vn = ""), Kt = 0, b = 0;
  }
  function te(rt) {
    (rt == null ? void 0 : rt.type) === "fixed_length" ? e(53, _r = Vw(rt, ke.logError, _r)) : (rt == null ? void 0 : rt.type) === "currency" ? e(53, _r = Dw(rt, ke.logError, _r)) : (rt == null ? void 0 : rt.type) === "phone" && e(53, _r = Ow(ke.logError, _r)), _r && ro();
  }
  function R(rt) {
    if (!Array.isArray(re))
      return !0;
    for (const jr of re)
      if (jr) {
        if (jr.type === "regex")
          try {
            if (!new RegExp("^" + (jr.pattern || "") + "$").test(rt))
              return !1;
          } catch (nn) {
            return ke.logError(X(new Error("Failed to create a regex"), {
              additional: { originalError: String(nn) }
            })), !0;
          }
        else if (jr.type === "expression" && !jr.condition)
          return !1;
      }
    return !0;
  }
  function Ve(rt) {
    const jr = rt.target;
    let nn = jr.value || "";
    nn === `
` && (nn = ""), nn.length > Mr && (nn = Fr, jr instanceof HTMLInputElement && (jr.value = nn)), Fr !== nn && (R(nn) ? (e(3, Fr = nn), s.setValue(nn), _r && mo(), no()) : (e(3, Fr = nn), jr instanceof HTMLInputElement && (jr.value = nn), Sn().then(() => {
      Hr(Kt, b);
    })));
  }
  function ve(rt) {
    if (Kt = qr() || 0, b = Nr() || 0, rt.ctrlKey || rt.metaKey || rt.altKey || rt.shiftKey)
      return;
    const jr = ke.json.enter_key_actions;
    rt.key === "Enter" && Array.isArray(jr) && jr.length && (rt.preventDefault(), ke.execAnyActions(jr));
  }
  function qt() {
    Ar = !1, setTimeout(
      () => {
        Ar = !0;
      },
      250
    );
  }
  function Yt() {
    Ar || Ot.select();
  }
  function qr() {
    const rt = Ot;
    return rt.selectionStart === null ? void 0 : rt.selectionStart;
  }
  function Nr() {
    const rt = Ot;
    return rt.selectionEnd === null ? void 0 : rt.selectionEnd;
  }
  function Hr(rt, jr) {
    const nn = Ot;
    nn.selectionStart = rt, nn.selectionEnd = jr;
  }
  async function mo() {
    if (!Ot || !_r)
      return;
    const rt = qr() || 0, jr = Nr() || 0;
    _r.applyChangeFrom(Fr, jr === rt ? jr : 0), a.set(_r.rawValue), El(s, Xe = e(3, Fr = _r.value), Xe);
    const nn = _r.cursorPosition;
    await Sn(), document.activeElement === Ot && Hr(nn, nn);
  }
  async function ro() {
    if (!Ot || !_r)
      return;
    _r.overrideRawValue(ce), a.set(_r.rawValue), El(s, Xe = e(3, Fr = _r.value), Xe);
    const rt = _r.cursorPosition;
    await Sn(), document.activeElement === Ot && Hr(rt, rt);
  }
  function no() {
    const rt = Nn;
    Nn = !1;
    const jr = ke.json.validators;
    if (!Array.isArray(jr) || !jr.length)
      return;
    const Lo = ke.getJsonWithVars(jr).filter((vn) => (vn.type === "regex" || vn.type === "expression") && vn.label_id && vn.variable), Oo = [];
    Lo.forEach((vn) => {
      const Zo = ke.getVariable(vn.variable);
      if (!Zo)
        return;
      if (Zo.getType() !== "boolean") {
        rt && ke.logError(X(new Error("Incorrect variable type for the validator"), {
          additional: { variable: vn.variable }
        }));
        return;
      }
      let En = !1;
      if (Fr === "" && (vn.allow_empty === !0 || vn.allow_empty === 1))
        En = !0;
      else if (vn.type === "regex") {
        if (!vn.pattern || typeof vn.pattern != "string")
          return;
        try {
          En = new RegExp("^" + vn.pattern + "$").test(Fr);
        } catch {
          rt && ke.logError(X(new Error("Failed to create a regular expression using the validator pattern"), {
            additional: { pattern: vn.pattern }
          }));
          return;
        }
      } else if (vn.type === "expression")
        En = vn.condition === !0 || vn.condition === 1;
      else
        return;
      if (Zo.setValue(En), !En) {
        const Co = Lt.getComponentId(vn.label_id);
        Co && Oo.push(Co);
      }
    }), e(14, Vn = Oo.join(" "));
  }
  xn(() => {
    e(70, lo = !0), Ot && _r && ce && (_r.overrideRawValue(ce), El(s, Xe = e(3, Fr = _r.value), Xe));
  }), sn(() => {
    e(70, lo = !1), at && (Lt.unregisterFocusable(at), e(52, at = void 0));
  });
  function $n(rt) {
    Dr[rt ? "unshift" : "push"](() => {
      Ot = rt, e(2, Ot);
    });
  }
  function qi(rt) {
    Dr[rt ? "unshift" : "push"](() => {
      Ot = rt, e(2, Ot);
    });
  }
  return t.$$set = (rt) => {
    "componentContext" in rt && e(0, ke = rt.componentContext), "layoutParams" in rt && e(1, P = rt.layoutParams);
  }, t.$$.update = () => {
    var rt;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(73, n = ke.origJson), t.$$.dirty[2] & /*origJson*/
    2048 && n && V(), t.$$.dirty[0] & /*componentContext*/
    1 && e(71, o = ke.json.text_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(72, i = (rt = ke.json.mask) == null ? void 0 : rt.raw_text_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*variable*/
    512 && Me(e(7, s = o && (ke.getVariable(o, "string") || Lt.awaitGlobalVariable(o, "string", "")) || Xn("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*rawVariable*/
    1024 && fe(e(15, a = i && (ke.getVariable(i, "string") || Lt.awaitGlobalVariable(i, "string", "")) || Xn("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && yr(e(45, l = ke.getDerivedFromVars(ke.json.hint_text))), t.$$.dirty[0] & /*componentContext*/
    1 && vt(e(44, u = ke.getDerivedFromVars(ke.json.hint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && et(e(43, c = ke.getDerivedFromVars(ke.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && At(e(42, f = ke.getDerivedFromVars(ke.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && Pr(e(41, _ = ke.getDerivedFromVars(ke.json.font_weight_value))), t.$$.dirty[0] & /*componentContext*/
    1 && kr(e(40, h = ke.getDerivedFromVars(ke.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && Qt(e(39, m = ke.getDerivedFromVars(ke.json.font_variation_settings, void 0, !0, 0))), t.$$.dirty[0] & /*componentContext*/
    1 && ir(e(38, p = ke.getDerivedFromVars(ke.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && pr(e(37, w = ke.getDerivedFromVars(ke.json.letter_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && lr(e(36, k = ke.getDerivedFromVars(ke.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && sr(e(35, N = ke.getDerivedFromVars(ke.json.highlight_color))), t.$$.dirty[0] & /*componentContext*/
    1 && yt(e(34, H = ke.getDerivedFromVars(ke.json.text_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && Le(e(33, z = ke.getDerivedFromVars(ke.json.text_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && Mt(e(32, oe = ke.getDerivedFromVars(ke.json.keyboard_type))), t.$$.dirty[0] & /*componentContext*/
    1 && Dt(e(31, _e = ke.getDerivedFromVars(ke.json.mask))), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(30, T = ke.getDerivedFromVars(ke.json.max_visible_lines))), t.$$.dirty[0] & /*componentContext*/
    1 && ft(e(29, Y = ke.getDerivedFromVars(ke.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && Ne(e(28, le = ke.getDerivedFromVars(ke.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && He(e(27, E = ke.getDerivedFromVars(ke.json.select_all_on_focus))), t.$$.dirty[0] & /*componentContext*/
    1 && gt(e(26, D = ke.getDerivedFromVars(ke.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Zt(e(25, M = ke.getDerivedFromVars(ke.json.max_length))), t.$$.dirty[0] & /*componentContext*/
    1 && nt(e(24, W = ke.getDerivedFromVars(ke.json.autocapitalization))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(23, q = ke.getDerivedFromVars(ke.json.enter_key_type))), t.$$.dirty[0] & /*componentContext*/
    1 && d(e(22, be = ke.getDerivedFromVars(ke.json.validators))), t.$$.dirty[0] & /*componentContext*/
    1 && ne(e(21, Ae = ke.getDerivedFromVars(ke.json.filters))), t.$$.dirty[0] & /*componentContext*/
    1 && Ct(e(20, Ce = ke.getDerivedFromVars(ke.json.max_input_height))), t.$$.dirty[0] & /*componentContext, hasError*/
    17 | t.$$.dirty[2] & /*variable, $jsonAccessibility*/
    33280) {
      let jr = !1;
      o ? (zt.hasAction() || ($ == null ? void 0 : $.mode) === "exclude") && (jr = !0, ke.logError(X(new Error('Cannot show "input" inside component with an action or inside accessibility mode=exclude')))) : (e(4, wn = !0), ke.logError(X(new Error('Missing "text_variable" in "input"')))), wn !== jr && e(4, wn = jr);
    }
    if (t.$$.dirty[2] & /*$jsonMask*/
    2097152 && te(ut), t.$$.dirty[0] & /*maxLength*/
    64 | t.$$.dirty[2] & /*$jsonMaxLength*/
    8388608 && e(6, Mr = Hn(It, Mr)), t.$$.dirty[0] & /*value, maxLength, valueVariable*/
    200 | t.$$.dirty[1] & /*inputMask*/
    4194304 | t.$$.dirty[2] & /*$valueVariable*/
    4096 && !_r && Fr !== Xe) {
      let jr = Xe;
      jr.length > Mr && (jr = jr.slice(0, Mr), s.setValue(jr)), e(3, Fr = jr), no();
    }
    if (t.$$.dirty[1] & /*inputMask*/
    4194304 | t.$$.dirty[2] & /*$rawValueVariable*/
    8192 && _r && _r.rawValue !== ce && (ro(), no()), t.$$.dirty[2] & /*mounted*/
    256 | t.$$.dirty[3] & /*$jsonValidators*/
    128 && j && lo && no(), t.$$.dirty[3] & /*$jsonHintText*/
    64 && e(19, me = $t), t.$$.dirty[1] & /*hintColor*/
    8388608 | t.$$.dirty[3] & /*$jsonHintColor*/
    32 && e(54, Se = gr(pt, 1, Se)), t.$$.dirty[1] & /*fontSize*/
    16777216 | t.$$.dirty[3] & /*$jsonFontSize*/
    16 && e(55, Xr = Hn(Jt, Xr)), t.$$.dirty[1] & /*fontWeight*/
    33554432 | t.$$.dirty[3] & /*$jsonFontWeight, $jsonFontWeightValue, $jsonFontFamily*/
    14 && (e(56, Ur = ii(ur, Et, Ur)), ae && typeof ae == "string" ? e(57, ln = Lt.typefaceProvider(ae, { fontWeight: Ur || 400 })) : e(57, ln = "")), t.$$.dirty[1] & /*fontVariationSettings*/
    134217728 | t.$$.dirty[3] & /*$jsonFontVariationSettings*/
    1) {
      const jr = ki(Ht);
      jr !== cn && e(58, cn = jr);
    }
    if (t.$$.dirty[1] & /*fontSize*/
    16777216 | t.$$.dirty[2] & /*$jsonLineHeight*/
    1073741824) {
      const jr = vr;
      Pn(jr) && e(59, y = jr / Xr);
    }
    t.$$.dirty[2] & /*$jsonLetterSpacing*/
    536870912 && _s(rr) && e(60, A = ge(rr)), t.$$.dirty[1] & /*textColor*/
    1073741824 | t.$$.dirty[2] & /*$jsonTextColor*/
    268435456 && e(61, S = gr(Te, 1, S)), t.$$.dirty[2] & /*$jsonHighlightColor, highlightColor*/
    134217729 && e(62, ee = gr(Gt, 1, ee)), t.$$.dirty[2] & /*$jsonAlignmentHorizontal, $direction, alignmentHorizontal*/
    67239938 && e(63, O = wl(Ft, kt, O)), t.$$.dirty[2] & /*$jsonAlignmentVertical, alignmentVertical*/
    33554436 && e(64, tt = kl(Ie, tt)), t.$$.dirty[0] & /*isEnabled*/
    32 | t.$$.dirty[2] & /*$jsonIsEnabled*/
    16777216 && e(5, an = Zr(Ee, an)), t.$$.dirty[2] & /*$jsonKeyboardType, $jsonMask, keyboardType*/
    6291464 && (lt && lt in bf && (e(9, tr = bf[lt]), e(65, De = lt)), (ut == null ? void 0 : ut.type) === "currency" ? (e(9, tr = Jw ? "text" : "tel"), e(10, se = "decimal")) : De === "number" ? e(10, se = "decimal") : e(10, se = void 0)), t.$$.dirty[2] & /*keyboardType*/
    8 && e(8, Fe = De === "multi_line_text"), t.$$.dirty[1] & /*lineHeight, fontSize*/
    285212672 | t.$$.dirty[2] & /*$jsonMaxInputHeight, $jsonVisibleMaxLines, $jsonPaddings, selfPadding, $direction*/
    1966112 && (Pn(ze) ? e(66, We = un(ze)) : Pn(Z) ? e(66, We = `calc(${Z * (y || 1.25) * (Xr / 10) + "em"} + ${un(rn(it == null ? void 0 : it.top, 0) + rn(it == null ? void 0 : it.bottom, 0))})`) : e(66, We = ""), e(67, Nt = ni(it || void 0, Nt)), e(68, St = Nt ? so(
      {
        top: (Number(Nt.top) || 0) / Xr * 10,
        right: (Number(kt === "ltr" ? Nt.end : Nt.start) || Number(Nt.right) || 0) / Xr * 10,
        bottom: (Number(Nt.bottom) || 0) / Xr * 10,
        left: (Number(kt === "ltr" ? Nt.start : Nt.end) || Number(Nt.left) || 0) / Xr * 10
      },
      kt
    ) : ""), e(69, Cr = Nt ? so(
      {
        top: (Number(Nt.top) || 0) / Xr * 10,
        bottom: (Number(Nt.bottom) || 0) / Xr * 10
      },
      kt
    ) : "")), t.$$.dirty[2] & /*$jsonAutocapitalization*/
    65536 && (ot === "all_characters" ? e(12, mn = "characters") : ot === "sentences" ? e(12, mn = "sentences") : ot === "words" ? e(12, mn = "words") : (ot === "none" || ot === "auto") && e(12, mn = "off")), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*$jsonAccessibility*/
    32768 && ($ != null && $.description ? e(11, Gr = Yo($)) : ke.logError(X(new Error('Missing accessibility "description" for input'), { level: "warn" }))), t.$$.dirty[2] & /*$jsonEnterKeyType*/
    16384 && (we === "default" || we === "done" || we === "go" || we === "search" || we === "send") && e(13, bn = we), t.$$.dirty[0] & /*isMultiline*/
    256 | t.$$.dirty[2] & /*highlightColor, alignmentHorizontal, alignmentVertical*/
    7 && e(18, Q = {
      "highlight-color": !!ee,
      multiline: Fe,
      "alignment-horizontal": O,
      "alignment-vertical": tt
    }), t.$$.dirty[1] & /*hintColor, lineHeight, fontWeight, fontFamily, fontVariationSettings, letterSpacing, textColor*/
    2122317824 | t.$$.dirty[2] & /*highlightColor, maxHeight*/
    17 && e(17, Ke = {
      "--divkit-input-hint-color": Se,
      "--divkit-input-highlight-color": ee,
      "--divkit-input-line-height": y,
      "font-weight": Ur,
      "font-family": ln,
      "font-variation-settings": cn,
      "letter-spacing": A,
      color: S,
      "max-height": We
    }), t.$$.dirty[1] & /*fontSize*/
    16777216 | t.$$.dirty[2] & /*padding*/
    64 && e(16, Ye = { "font-size": ge(Xr), padding: St }), t.$$.dirty[1] & /*fontSize*/
    16777216 | t.$$.dirty[2] & /*verticalPadding*/
    128, t.$$.dirty[0] & /*input, componentContext, value*/
    13 | t.$$.dirty[1] & /*prevId*/
    2097152 && Ot && ke.json && (at && (Lt.unregisterFocusable(at), e(52, at = void 0)), ke.id && !ke.fakeElement && (e(52, at = ke.id), Lt.registerFocusable(at, {
      focus() {
        Ot && (Ot.focus(), Hr(Fr.length, Fr.length));
      }
    })));
  }, [
    ke,
    P,
    Ot,
    Fr,
    wn,
    an,
    Mr,
    s,
    Fe,
    tr,
    se,
    Gr,
    mn,
    bn,
    Vn,
    a,
    Ye,
    Ke,
    Q,
    me,
    Ce,
    Ae,
    be,
    q,
    W,
    M,
    D,
    E,
    le,
    Y,
    T,
    _e,
    oe,
    z,
    H,
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
    B,
    Je,
    Ve,
    ve,
    qt,
    Yt,
    at,
    _r,
    Se,
    Xr,
    Ur,
    ln,
    cn,
    y,
    A,
    S,
    ee,
    O,
    tt,
    De,
    We,
    Nt,
    St,
    Cr,
    lo,
    o,
    i,
    n,
    Xe,
    ce,
    we,
    $,
    ot,
    kt,
    it,
    Z,
    ze,
    ut,
    lt,
    It,
    Ee,
    Ie,
    Ft,
    Gt,
    Te,
    rr,
    vr,
    Ht,
    ae,
    Et,
    ur,
    Jt,
    pt,
    $t,
    j,
    $n,
    qi
  ];
}
class qw extends Br {
  constructor(r) {
    super(), Or(this, r, Kw, Gw, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1, -1]);
  }
}
const Yw = "appkit-select", Xw = "appkit-select_hint", Zw = "appkit-select__select", Qw = "appkit-select__option", zi = {
  select: Yw,
  "select__select-text": "appkit-select__select-text",
  select_hint: Xw,
  select__select: Zw,
  "select__select_has-custom-focused": "appkit-select__select_has-custom-focused",
  "has-custom-focused": "appkit-has-custom-focused",
  select__option: Qw
};
function yf(t, r, e) {
  const n = t.slice();
  return n[62] = r[e], n;
}
function xw(t) {
  let r, e;
  return r = new In({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function $w(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "select",
        zi,
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
          ek,
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
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = ht(
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function wf(t) {
  let r, e = (
    /*item*/
    (t[62].text || /*item*/
    t[62].value) + ""
  ), n, o;
  return {
    c() {
      r = Pe("option"), n = On(e), g(r, "class", zi.select__option), r.__value = o = /*item*/
      t[62].value, _u(r, r.__value);
    },
    m(i, s) {
      J(i, r, s), bt(r, n);
    },
    p(i, s) {
      s[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      (i[62].text || /*item*/
      i[62].value) + "") && Jn(n, e), s[0] & /*filteredItems*/
      32 && o !== (o = /*item*/
      i[62].value) && (r.__value = o, _u(r, r.__value));
    },
    d(i) {
      i && G(r);
    }
  };
}
function ek(t) {
  let r, e = (
    /*selectText*/
    (t[4] || /*$jsonHintText*/
    t[25] || "​") + ""
  ), n, o, i, s, a, l, u, c, f = ar(
    /*filteredItems*/
    t[5]
  ), _ = [];
  for (let h = 0; h < f.length; h += 1)
    _[h] = wf(yf(t, f, h));
  return {
    c() {
      r = Pe("span"), n = On(e), i = hr(), s = Pe("select");
      for (let h = 0; h < _.length; h += 1)
        _[h].c();
      g(r, "class", zi["select__select-text"]), g(r, "style", o = cr(
        /*innerStl*/
        t[9]
      )), g(r, "aria-hidden", "true"), g(s, "class", a = ht("select__select", zi, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[59]
        )
      })), g(
        s,
        "aria-label",
        /*description*/
        t[7]
      ), g(s, "style", l = cr(
        /*selectStl*/
        t[8]
      )), /*$valueVariable*/
      t[6] === void 0 && go(() => (
        /*select_1_change_handler*/
        t[55].call(s)
      ));
    },
    m(h, m) {
      J(h, r, m), bt(r, n), J(h, i, m), J(h, s, m);
      for (let p = 0; p < _.length; p += 1)
        _[p] && _[p].m(s, null);
      t[54](s), pu(
        s,
        /*$valueVariable*/
        t[6],
        !0
      ), u || (c = [
        xe(
          s,
          "change",
          /*select_1_change_handler*/
          t[55]
        ),
        xe(s, "focus", function() {
          Lr(
            /*focusHandler*/
            t[60]
          ) && t[60].apply(this, arguments);
        }),
        xe(s, "blur", function() {
          Lr(
            /*blurHandler*/
            t[61]
          ) && t[61].apply(this, arguments);
        })
      ], u = !0);
    },
    p(h, m) {
      if (t = h, m[0] & /*selectText, $jsonHintText*/
      33554448 && e !== (e = /*selectText*/
      (t[4] || /*$jsonHintText*/
      t[25] || "​") + "") && Jn(n, e), m[0] & /*innerStl*/
      512 && o !== (o = cr(
        /*innerStl*/
        t[9]
      )) && g(r, "style", o), m[0] & /*filteredItems*/
      32) {
        f = ar(
          /*filteredItems*/
          t[5]
        );
        let p;
        for (p = 0; p < f.length; p += 1) {
          const w = yf(t, f, p);
          _[p] ? _[p].p(w, m) : (_[p] = wf(w), _[p].c(), _[p].m(s, null));
        }
        for (; p < _.length; p += 1)
          _[p].d(1);
        _.length = f.length;
      }
      m[1] & /*hasCustomFocus*/
      268435456 && a !== (a = ht("select__select", zi, {
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
      256 && l !== (l = cr(
        /*selectStl*/
        t[8]
      )) && g(s, "style", l), m[0] & /*$valueVariable, filteredItems*/
      96 && pu(
        s,
        /*$valueVariable*/
        t[6]
      );
    },
    d(h) {
      h && (G(r), G(i), G(s)), on(_, h), t[54](null), u = !1, Rr(c);
    }
  };
}
function tk(t) {
  let r, e, n, o;
  const i = [$w, xw], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = er();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (fr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function rk(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, z, oe, _e, T, Y, le = v, E = () => (le(), le = C(H, (Te) => e(42, Y = Te)), H), D, M = v, W = () => (M(), M = C(N, (Te) => e(43, D = Te)), N), q, be = v, Ae = () => (be(), be = C(k, (Te) => e(44, q = Te)), k), Ce, me = v, Fe = () => (me(), me = C(w, (Te) => e(45, Ce = Te)), w), Q, Ke = v, Ye = () => (Ke(), Ke = C(p, (Te) => e(46, Q = Te)), p), Xe, ye = v, Me = () => (ye(), ye = C(m, (Te) => e(47, Xe = Te)), m), ce, he = v, fe = () => (he(), he = C(h, (Te) => e(48, ce = Te)), h), re, de = v, ne = () => (de(), de = C(_, (Te) => e(49, re = Te)), _), we, Ue = v, Ge = () => (Ue(), Ue = C(f, (Te) => e(50, we = Te)), f), $, Be = v, Ne = () => (Be(), Be = C(c, (Te) => e(51, $ = Te)), c), ot, ct, nt = v, kt = () => (nt(), nt = C(l, (Te) => e(53, ct = Te)), l), it, Pt = v, ft = () => (Pt(), Pt = C(a, (Te) => e(6, it = Te)), a), Z, pe = v, st = () => (pe(), pe = C(u, (Te) => e(25, Z = Te)), u);
  t.$$.on_destroy.push(() => le()), t.$$.on_destroy.push(() => M()), t.$$.on_destroy.push(() => be()), t.$$.on_destroy.push(() => me()), t.$$.on_destroy.push(() => Ke()), t.$$.on_destroy.push(() => ye()), t.$$.on_destroy.push(() => he()), t.$$.on_destroy.push(() => de()), t.$$.on_destroy.push(() => Ue()), t.$$.on_destroy.push(() => Be()), t.$$.on_destroy.push(() => nt()), t.$$.on_destroy.push(() => Pt()), t.$$.on_destroy.push(() => pe());
  let { componentContext: ze } = r, { layoutParams: F = void 0 } = r;
  const Ct = Tr(Yr), ut = Tr(To), Vt = Ct.direction;
  yn(t, Vt, (Te) => e(52, ot = Te));
  let Dt, lt, K = !1, Mt = "", It = null, Xt = "", Zt = "rgba(0,0,0,.45)", Ee = 12, Ze, gt = "", Ie = "", $e, Le = "", Ft = "#000", Oe = "", yt;
  function Gt() {
    e(28, It = null), e(30, Zt = "rgba(0,0,0,.45)"), e(31, Ee = 12), e(32, Ze = void 0), e(33, gt = ""), e(34, Ie = ""), e(35, $e = void 0), e(36, Le = ""), e(37, Ft = "#000"), e(7, Oe = "");
  }
  sn(() => {
    Dt && (Ct.unregisterFocusable(Dt), e(27, Dt = void 0));
  });
  function Tt(Te) {
    Dr[Te ? "unshift" : "push"](() => {
      lt = Te, e(2, lt);
    });
  }
  function sr() {
    it = vh(this), a.set(it), e(5, s), e(40, i), e(0, ze);
  }
  return t.$$set = (Te) => {
    "componentContext" in Te && e(0, ze = Te.componentContext), "layoutParams" in Te && e(1, F = Te.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(41, n = ze.origJson), t.$$.dirty[1] & /*origJson*/
    1024 && n && Gt(), t.$$.dirty[0] & /*componentContext*/
    1 && e(39, o = ze.json.value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(40, i = ze.json.options), t.$$.dirty[1] & /*items*/
    512 && e(5, s = Array.isArray(i) && i.filter((Te) => typeof Te.value == "string") || []), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    256 && ft(e(24, a = o && (ze.getVariable(o, "string") || Ct.awaitGlobalVariable(o, "string", "")) || Xn("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && kt(e(23, l = ze.getDerivedFromVars(ze.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && st(e(22, u = ze.getDerivedFromVars(ze.json.hint_text))), t.$$.dirty[0] & /*componentContext*/
    1 && Ne(e(21, c = ze.getDerivedFromVars(ze.json.hint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ge(e(20, f = ze.getDerivedFromVars(ze.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && ne(e(19, _ = ze.getDerivedFromVars(ze.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && fe(e(18, h = ze.getDerivedFromVars(ze.json.font_weight_value))), t.$$.dirty[0] & /*componentContext*/
    1 && Me(e(17, m = ze.getDerivedFromVars(ze.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && Ye(e(16, p = ze.getDerivedFromVars(ze.json.font_variation_settings, void 0, !0, 0))), t.$$.dirty[0] & /*componentContext*/
    1 && Fe(e(15, w = ze.getDerivedFromVars(ze.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && Ae(e(14, k = ze.getDerivedFromVars(ze.json.letter_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && W(e(13, N = ze.getDerivedFromVars(ze.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && E(e(12, H = ze.getDerivedFromVars(ze.json.accessibility))), t.$$.dirty[0] & /*filteredItems, componentContext*/
    33 && (Array.isArray(s) && s.length || ze.logError(X(new Error('Empty selection "items" in "select"')))), t.$$.dirty[0] & /*componentContext, hasError*/
    9 | t.$$.dirty[1] & /*variable, $jsonAccessibility*/
    2304) {
      let Te = !1;
      o ? (ut.hasAction() || (Y == null ? void 0 : Y.mode) === "exclude") && (Te = !0, ze.logError(X(new Error('Cannot show "select" inside component with an action or inside accessibility mode=exclude')))) : (e(3, K = !0), ze.logError(X(new Error('Missing "value_variable" in "select"')))), K !== Te && e(3, K = Te);
    }
    if (t.$$.dirty[0] & /*filteredItems, $valueVariable, componentContext*/
    97 | t.$$.dirty[1] & /*prevWarnValue*/
    128) {
      const Te = s.find((jt) => jt.value === it);
      Te ? e(4, Mt = (typeof Te.text == "string" ? Te.text : Te.value) || "") : (e(4, Mt = ""), it && yt !== it && (e(38, yt = it), ze.logError(X(new Error('Value from the variable was not found in the selection items for "select"')))));
    }
    if (t.$$.dirty[1] & /*$jsonFontSize, fontSize*/
    524289 && e(31, Ee = Hn(we, Ee)), t.$$.dirty[0] & /*selfPadding*/
    268435456 | t.$$.dirty[1] & /*$jsonPaddings, fontSize, $direction*/
    6291457 && (e(28, It = ni(ct || void 0, It)), e(29, Xt = It ? so(
      {
        top: (Number(It.top) || 0) / Ee * 10,
        right: (Number(ot === "ltr" ? It.end : It.start) || Number(It.right) || 0) / Ee * 10,
        bottom: (Number(It.bottom) || 0) / Ee * 10,
        left: (Number(ot === "ltr" ? It.start : It.end) || Number(It.left) || 0) / Ee * 10
      },
      ot
    ) : "")), t.$$.dirty[0] & /*hintColor*/
    1073741824 | t.$$.dirty[1] & /*$jsonHintColor*/
    1048576 && e(30, Zt = gr($, 1, Zt)), t.$$.dirty[1] & /*$jsonFontWeight, $jsonFontWeightValue, fontWeight, $jsonFontFamily*/
    458754 && (e(32, Ze = ii(re, ce, Ze)), Xe && typeof Xe == "string" ? e(33, gt = Ct.typefaceProvider(Xe, { fontWeight: Ze || 400 })) : e(33, gt = "")), t.$$.dirty[1] & /*$jsonFontVariationSettings, fontVariationSettings*/
    32776) {
      const Te = ki(Q);
      Te !== Ie && e(34, Ie = Te);
    }
    if (t.$$.dirty[1] & /*$jsonLineHeight, fontSize*/
    16385) {
      const Te = Ce;
      Pn(Te) && e(35, $e = Te / Ee);
    }
    t.$$.dirty[1] & /*$jsonLetterSpacing, fontSize*/
    8193 && _s(q) && e(36, Le = ge(q / Ee * 10)), t.$$.dirty[1] & /*$jsonTextColor, textColor*/
    4160 && e(37, Ft = gr(D, 1, Ft)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    2048 && (Y != null && Y.description ? e(7, Oe = Yo(Y)) : ze.logError(X(new Error('Missing accessibility "description" for select'), { level: "warn" }))), t.$$.dirty[0] & /*selectText*/
    16 && e(11, z = { hint: !Mt }), t.$$.dirty[0] & /*hintColor*/
    1073741824 | t.$$.dirty[1] & /*fontWeight, fontFamily, fontVariationSettings, textColor*/
    78 && e(10, oe = {
      "--divkit-input-hint-color": Zt,
      "font-weight": Ze,
      "font-family": gt,
      "font-variation-settings": Ie,
      color: Ft
    }), t.$$.dirty[0] & /*padding*/
    536870912 | t.$$.dirty[1] & /*fontSize, lineHeight, letterSpacing*/
    49 && e(9, _e = {
      padding: Xt,
      "font-size": ge(Ee),
      "line-height": $e,
      "letter-spacing": Le
    }), t.$$.dirty[1] & /*fontSize, lineHeight, letterSpacing*/
    49 && e(8, T = {
      "font-size": ge(Ee),
      "line-height": $e,
      "letter-spacing": Le
    }), t.$$.dirty[0] & /*componentContext, select, prevId*/
    134217733 && ze.json && lt && (Dt && (Ct.unregisterFocusable(Dt), e(27, Dt = void 0)), ze.id && !ze.fakeElement && (e(27, Dt = ze.id), Ct.registerFocusable(Dt, {
      focus() {
        lt && lt.focus();
      }
    })));
  }, [
    ze,
    F,
    lt,
    K,
    Mt,
    s,
    it,
    Oe,
    T,
    _e,
    oe,
    z,
    H,
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
    Dt,
    It,
    Xt,
    Zt,
    Ee,
    Ze,
    gt,
    Ie,
    $e,
    Le,
    Ft,
    yt,
    o,
    i,
    n,
    Y,
    D,
    q,
    Ce,
    Q,
    Xe,
    ce,
    re,
    we,
    $,
    ot,
    ct,
    Tt,
    sr
  ];
}
class nk extends Br {
  constructor(r) {
    super(), Or(this, r, rk, tk, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const ok = "appkit-video__video", ik = "appkit-video__container", sk = "appkit-video_absolute", Ci = {
  video__video: ok,
  video__container: ik,
  "video__aspect-wrapper": "appkit-video__aspect-wrapper",
  video_absolute: sk
};
function lk(t, r) {
  return Array.isArray(t) && t.length ? t.filter((e) => (e == null ? void 0 : e.type) === "video_source" && typeof e.url == "string" && typeof e.mime_type == "string").map((e) => {
    const n = {
      src: e.url
    };
    return e.mime_type && (n.type = e.mime_type), n;
  }) : r;
}
function ak(t) {
  return t === "fill" ? "cover" : t === "no_scale" ? "none" : "contain";
}
function kf(t, r, e) {
  const n = t.slice();
  return n[60] = r[e], n;
}
function vf(t, r, e) {
  const n = t.slice();
  return n[60] = r[e], n;
}
function uk(t) {
  let r, e;
  return r = new In({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function ck(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "video",
        Ci,
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
      $$slots: { default: [hk] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      32768 && (i.cls = ht(
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function fk(t) {
  let r, e, n, o, i, s = ar(
    /*sources*/
    t[4]
  ), a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = Cf(kf(t, s, l));
  return {
    c() {
      r = Pe("video");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      g(r, "class", Ci.video__video), g(r, "style", e = cr(
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
      J(l, r, u);
      for (let c = 0; c < a.length; c += 1)
        a[c] && a[c].m(r, null);
      t[52](r), o || (i = [
        xe(
          r,
          "timeupdate",
          /*onTimeUpdate*/
          t[26]
        ),
        xe(
          r,
          "ended",
          /*onEnd*/
          t[27]
        ),
        xe(
          r,
          "playing",
          /*onPlaying*/
          t[28]
        ),
        xe(
          r,
          "pause",
          /*onPause*/
          t[29]
        ),
        xe(
          r,
          "waiting",
          /*onWaiting*/
          t[30]
        ),
        xe(
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
        s = ar(
          /*sources*/
          l[4]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const f = kf(l, s, c);
          a[c] ? a[c].p(f, u) : (a[c] = Cf(f), a[c].c(), a[c].m(r, null));
        }
        for (; c < a.length; c += 1)
          a[c].d(1);
        a.length = s.length;
      }
      u[0] & /*style*/
      16384 && e !== (e = cr(
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
      l && G(r), on(a, l), t[52](null), o = !1, Rr(i);
    }
  };
}
function dk(t) {
  let r;
  return {
    c() {
      r = Pe("div"), g(r, "class", Ci.video__container);
    },
    m(e, n) {
      J(e, r, n), r.innerHTML = /*providedVideoTemplate*/
      t[12], t[51](r);
    },
    p(e, n) {
      n[0] & /*providedVideoTemplate*/
      4096 && (r.innerHTML = /*providedVideoTemplate*/
      e[12]);
    },
    d(e) {
      e && G(r), t[51](null);
    }
  };
}
function _k(t) {
  let r, e = `${/*aspectPaddingBottom*/
  t[11]}%`;
  function n(s, a) {
    return (
      /*shouldUseVideoProvider*/
      s[13] ? gk : pk
    );
  }
  let o = n(t), i = o(t);
  return {
    c() {
      r = Pe("div"), i.c(), g(r, "class", Ci["video__aspect-wrapper"]), I(r, "padding-bottom", e);
    },
    m(s, a) {
      J(s, r, a), i.m(r, null);
    },
    p(s, a) {
      o === (o = n(s)) && i ? i.p(s, a) : (i.d(1), i = o(s), i && (i.c(), i.m(r, null))), a[0] & /*aspectPaddingBottom*/
      2048 && e !== (e = `${/*aspectPaddingBottom*/
      s[11]}%`) && I(r, "padding-bottom", e);
    },
    d(s) {
      s && G(r), i.d();
    }
  };
}
function jf(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Pe("source"), Qn(r.src, e = /*source*/
      t[60].src) || g(r, "src", e), g(r, "type", n = /*source*/
      t[60].type);
    },
    m(s, a) {
      J(s, r, a), o || (i = xe(
        r,
        "error",
        /*onError*/
        t[31]
      ), o = !0);
    },
    p(s, a) {
      a[0] & /*sources*/
      16 && !Qn(r.src, e = /*source*/
      s[60].src) && g(r, "src", e), a[0] & /*sources*/
      16 && n !== (n = /*source*/
      s[60].type) && g(r, "type", n);
    },
    d(s) {
      s && G(r), o = !1, i();
    }
  };
}
function Cf(t) {
  let r = (
    /*source*/
    t[60]
  ), e, n = jf(t);
  return {
    c() {
      n.c(), e = er();
    },
    m(o, i) {
      n.m(o, i), J(o, e, i);
    },
    p(o, i) {
      i[0] & /*sources*/
      16 && Sr(r, r = /*source*/
      o[60]) ? (n.d(1), n = jf(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && G(e), n.d(o);
    }
  };
}
function pk(t) {
  let r, e, n, o, i, s = ar(
    /*sources*/
    t[4]
  ), a = [];
  for (let l = 0; l < s.length; l += 1)
    a[l] = Af(vf(t, s, l));
  return {
    c() {
      r = Pe("video");
      for (let l = 0; l < a.length; l += 1)
        a[l].c();
      g(r, "class", Ci.video__video), g(r, "style", e = cr(
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
      J(l, r, u);
      for (let c = 0; c < a.length; c += 1)
        a[c] && a[c].m(r, null);
      t[50](r), o || (i = [
        xe(
          r,
          "timeupdate",
          /*onTimeUpdate*/
          t[26]
        ),
        xe(
          r,
          "ended",
          /*onEnd*/
          t[27]
        ),
        xe(
          r,
          "playing",
          /*onPlaying*/
          t[28]
        ),
        xe(
          r,
          "pause",
          /*onPause*/
          t[29]
        ),
        xe(
          r,
          "waiting",
          /*onWaiting*/
          t[30]
        ),
        xe(
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
        s = ar(
          /*sources*/
          l[4]
        );
        let c;
        for (c = 0; c < s.length; c += 1) {
          const f = vf(l, s, c);
          a[c] ? a[c].p(f, u) : (a[c] = Af(f), a[c].c(), a[c].m(r, null));
        }
        for (; c < a.length; c += 1)
          a[c].d(1);
        a.length = s.length;
      }
      u[0] & /*style*/
      16384 && e !== (e = cr(
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
      l && G(r), on(a, l), t[50](null), o = !1, Rr(i);
    }
  };
}
function gk(t) {
  let r;
  return {
    c() {
      r = Pe("div"), g(r, "class", Ci.video__container);
    },
    m(e, n) {
      J(e, r, n), r.innerHTML = /*providedVideoTemplate*/
      t[12], t[49](r);
    },
    p(e, n) {
      n[0] & /*providedVideoTemplate*/
      4096 && (r.innerHTML = /*providedVideoTemplate*/
      e[12]);
    },
    d(e) {
      e && G(r), t[49](null);
    }
  };
}
function Ef(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = Pe("source"), Qn(r.src, e = /*source*/
      t[60].src) || g(r, "src", e), g(r, "type", n = /*source*/
      t[60].type);
    },
    m(s, a) {
      J(s, r, a), o || (i = xe(
        r,
        "error",
        /*onError*/
        t[31]
      ), o = !0);
    },
    p(s, a) {
      a[0] & /*sources*/
      16 && !Qn(r.src, e = /*source*/
      s[60].src) && g(r, "src", e), a[0] & /*sources*/
      16 && n !== (n = /*source*/
      s[60].type) && g(r, "type", n);
    },
    d(s) {
      s && G(r), o = !1, i();
    }
  };
}
function Af(t) {
  let r = (
    /*source*/
    t[60]
  ), e, n = Ef(t);
  return {
    c() {
      n.c(), e = er();
    },
    m(o, i) {
      n.m(o, i), J(o, e, i);
    },
    p(o, i) {
      i[0] & /*sources*/
      16 && Sr(r, r = /*source*/
      o[60]) ? (n.d(1), n = Ef(o), n.c(), n.m(e.parentNode, e)) : n.p(o, i);
    },
    d(o) {
      o && G(e), n.d(o);
    }
  };
}
function hk(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[11] !== "0" ? _k : (
        /*shouldUseVideoProvider*/
        i[13] ? dk : fk
      )
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = er();
    },
    m(i, s) {
      o.m(i, s), J(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && G(r), o.d(i);
    }
  };
}
function mk(t) {
  let r, e, n, o;
  const i = [ck, uk], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[2] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = er();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (fr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function bk(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N = v, H = () => (N(), N = C(a, (Oe) => e(39, k = Oe)), a), z, oe = v, _e = () => (oe(), oe = C(m, (Oe) => e(40, z = Oe)), m), T, Y = v, le = () => (Y(), Y = C(h, (Oe) => e(41, T = Oe)), h), E, D = v, M = () => (D(), D = C(_, (Oe) => e(42, E = Oe)), _), W, q = v, be = () => (q(), q = C(f, (Oe) => e(43, W = Oe)), f), Ae, Ce = v, me = () => (Ce(), Ce = C(c, (Oe) => e(44, Ae = Oe)), c), Fe, Q = v, Ke = () => (Q(), Q = C(u, (Oe) => e(45, Fe = Oe)), u), Ye, Xe = v, ye = () => (Xe(), Xe = C(l, (Oe) => e(46, Ye = Oe)), l), Me, ce = v, he = () => (ce(), ce = C(s, (Oe) => e(47, Me = Oe)), s), fe, re = v, de = () => (re(), re = C(i, (Oe) => e(48, fe = Oe)), i);
  t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => q()), t.$$.on_destroy.push(() => Ce()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => Xe()), t.$$.on_destroy.push(() => ce()), t.$$.on_destroy.push(() => re());
  let { componentContext: ne } = r, { layoutParams: we = void 0 } = r;
  const Ue = Tr(Yr), Ge = Ue.videoPlayerProvider;
  let $, Be = !1, Ne = !1, ot, ct, nt = [], kt = !1, it = !1, Pt = !1, ft = !1, Z, pe = "fit", st = "0", ze = !1, F, Ct = "", ut, Vt = !!Ge;
  function Dt(Oe) {
    var lr, rr;
    const yt = ne.getJsonWithVars({
      sources: Oe.video_sources,
      repeatable: Oe.repeatable,
      autostart: Oe.autostart,
      preloadRequired: Oe.preload_required,
      muted: Oe.muted,
      preview: Oe.preview,
      aspect: Oe.aspect,
      scale: Oe.scale,
      payload: Oe.player_settings_payload
    }), Gt = Zr(yt.repeatable, !1), Tt = Zr(yt.autostart, !1), sr = Zr(yt.preloadRequired, !1), Te = Zr(yt.muted, !1), jt = (lr = yt.aspect) != null && lr.ratio && Pn(yt.aspect.ratio) ? yt.aspect.ratio : void 0;
    if ((rr = yt.sources) != null && rr.length)
      return {
        sources: yt.sources,
        repeatable: Gt,
        autostart: Tt,
        preloadRequired: sr,
        muted: Te,
        preview: yt.preview,
        aspect: jt,
        scale: yt.scale,
        payload: yt.payload
      };
  }
  function lt(Oe) {
    var yt;
    if (Ne) {
      Ne = !1;
      return;
    }
    ut ? (yt = ut.seek) == null || yt.call(ut, Number(Oe)) : ot && e(3, ot.currentTime = Number(Oe) / 1e3, ot);
  }
  function K() {
    ut ? ut.pause() : ot == null || ot.pause();
  }
  function Mt() {
    if (ut) {
      ut.play();
      return;
    }
    const Oe = ot == null ? void 0 : ot.play();
    Oe && Oe.catch((yt) => {
      ne.logError(X(new Error("Video playing error"), {
        level: "error",
        additional: { originalText: String(yt) }
      }));
    });
  }
  function It() {
    ot && (Ne = !0, o.setValue(Math.floor(ot.currentTime * 1e3)));
  }
  function Xt() {
    ne.execAnyActions(ne.json.end_actions);
  }
  function Zt() {
    ne.execAnyActions(ne.json.resume_actions);
  }
  function Ee() {
    ne.execAnyActions(ne.json.pause_actions);
  }
  function Ze() {
    ne.execAnyActions(ne.json.buffering_actions);
  }
  function gt() {
    ne.execAnyActions(ne.json.fatal_actions);
  }
  xn(() => {
    if (Ge && ct) {
      const Oe = Dt(ne.json);
      if (Oe) {
        const yt = Ge.instance(ct, Oe);
        yt ? e(36, ut = yt) : e(13, Vt = !1);
      }
    }
  }), sn(() => {
    $ && (Ue.unregisterInstance($), e(32, $ = void 0)), F && (F(), e(35, F = void 0)), ut && (ut.destroy(), e(36, ut = void 0));
  });
  function Ie(Oe) {
    Dr[Oe ? "unshift" : "push"](() => {
      ct = Oe, e(10, ct);
    });
  }
  function $e(Oe) {
    Dr[Oe ? "unshift" : "push"](() => {
      ot = Oe, e(3, ot);
    });
  }
  function Le(Oe) {
    Dr[Oe ? "unshift" : "push"](() => {
      ct = Oe, e(10, ct);
    });
  }
  function Ft(Oe) {
    Dr[Oe ? "unshift" : "push"](() => {
      ot = Oe, e(3, ot);
    });
  }
  return t.$$set = (Oe) => {
    "componentContext" in Oe && e(0, ne = Oe.componentContext), "layoutParams" in Oe && e(1, we = Oe.layoutParams);
  }, t.$$.update = () => {
    var Oe;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && ne.json && (e(5, kt = !1), e(6, it = !1), e(7, Pt = !1), e(8, ft = !1), e(9, Z = void 0), e(33, pe = "fit"), e(34, ze = !1), e(13, Vt = !!Ge)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*customVideoInstance, $jsonSource, $jsonRepeatable, $jsonAutostart, $jsonMuted, $jsonPreload, $jsonPreview, $jsonScale, $jsonAspect*/
    260384 && ne.json && ut && (fe || Me || k || Ye || Fe || Ae || W || E)) {
      const yt = Dt(ne.json);
      yt && ((Oe = ut.update) == null || Oe.call(ut, yt));
    }
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(38, n = ne.json.elapsed_time_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*elapsedVariableName*/
    128 && e(37, o = n && (ne.getVariable(n, "integer") || Ue.awaitGlobalVariable(n, "integer", 0)) || Xn("temp", "integer", 0)), t.$$.dirty[1] & /*elapsedVariable, elapsedVariableUnsubscriber*/
    80 && o && (F && F(), e(35, F = o.subscribe(lt))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(25, i = ne.getDerivedFromVars(ne.json.video_sources))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(24, s = ne.getDerivedFromVars(ne.json.repeatable))), t.$$.dirty[0] & /*componentContext*/
    1 && H(e(23, a = ne.getDerivedFromVars(ne.json.autostart))), t.$$.dirty[0] & /*componentContext*/
    1 && ye(e(22, l = ne.getDerivedFromVars(ne.json.muted))), t.$$.dirty[0] & /*componentContext*/
    1 && Ke(e(21, u = ne.getDerivedFromVars(ne.json.preload_required))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(20, c = ne.getDerivedFromVars(ne.json.preview))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(19, f = ne.getDerivedFromVars(ne.json.scale))), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(18, _ = ne.getDerivedFromVars(ne.json.aspect))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(17, h = ne.getDerivedFromVars(ne.json.width))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(16, m = ne.getDerivedFromVars(ne.json.height))), t.$$.dirty[0] & /*sources, componentContext*/
    17 | t.$$.dirty[1] & /*$jsonSource*/
    131072 && (e(4, nt = lk(fe, nt)), nt.length ? e(2, Be = !1) : (e(2, Be = !0), ne.logError(X(new Error('Missing "video_sources" in "video"'))))), t.$$.dirty[0] & /*loop*/
    32 | t.$$.dirty[1] & /*$jsonRepeatable*/
    65536 && e(5, kt = Zr(Me, kt)), t.$$.dirty[0] & /*autoplay*/
    64 | t.$$.dirty[1] & /*$jsonAutostart*/
    256 && e(6, it = Zr(k, it)), t.$$.dirty[0] & /*muted*/
    128 | t.$$.dirty[1] & /*$jsonMuted*/
    32768 && e(7, Pt = Zr(Ye, Pt)), t.$$.dirty[0] & /*preload*/
    256 | t.$$.dirty[1] & /*$jsonPreload*/
    16384 && e(8, ft = Zr(Fe, ft)), t.$$.dirty[0] & /*poster*/
    512 | t.$$.dirty[1] & /*$jsonPreview*/
    8192 && e(9, Z = typeof Ae == "string" ? t_(Ae) : Z), t.$$.dirty[1] & /*$jsonScale, scale*/
    4100 && e(33, pe = ak(W) || pe), t.$$.dirty[1] & /*$jsonAspect, $jsonWidth, $jsonHeight*/
    3584) {
      const yt = E == null ? void 0 : E.ratio;
      yt && Pn(yt) ? (e(11, st = (100 / Number(yt)).toFixed(2)), e(34, ze = !0)) : (e(11, st = "0"), e(34, ze = (!T || T.type === "match_parent") && (z == null ? void 0 : z.type) === "match_parent"));
    }
    t.$$.dirty[0] & /*componentContext, hasError*/
    5 | t.$$.dirty[1] & /*prevId*/
    2 && ne.json && ($ && (Ue.unregisterInstance($), e(32, $ = void 0)), ne.id && !Be && !ne.fakeElement && (e(32, $ = ne.id), Ue.registerInstance($, { pause: K, start: Mt }))), t.$$.dirty[0] & /*componentContext, videoElem*/
    9 | t.$$.dirty[1] & /*$jsonAutostart*/
    256 && ne.json && k && ot && Mt(), t.$$.dirty[1] & /*isAbsolute*/
    8 && e(15, p = { absolute: ze }), t.$$.dirty[1] & /*scale*/
    4 && e(14, w = { "object-fit": pe });
  }, [
    ne,
    we,
    Be,
    ot,
    nt,
    kt,
    it,
    Pt,
    ft,
    Z,
    ct,
    st,
    Ct,
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
    It,
    Xt,
    Zt,
    Ee,
    Ze,
    gt,
    $,
    pe,
    ze,
    F,
    ut,
    o,
    n,
    k,
    z,
    T,
    E,
    W,
    Ae,
    Fe,
    Ye,
    Me,
    fe,
    Ie,
    $e,
    Le,
    Ft
  ];
}
class yk extends Br {
  constructor(r) {
    super(), Or(this, r, bk, mk, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const wk = "appkit-switch__tumbler", kk = "appkit-switch__tumbler_checked", vk = "appkit-switch_disabled", jk = "appkit-switch__thumb", Ck = "appkit-switch_direction_rtl", Ek = "appkit-switch__input", pi = {
  switch: "appkit-switch",
  switch__tumbler: wk,
  switch__tumbler_checked: kk,
  switch_disabled: vk,
  switch__thumb: jk,
  switch_direction_rtl: Ck,
  switch__input: Ek
};
function Li(t) {
  return t === !0 || t === 1;
}
function Ak(t) {
  let r, e;
  return r = new In({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Sk(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "switch",
        pi,
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
          Vk,
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
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      512 && (i.cls = ht(
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Vk(t) {
  let r, e, n, o, i, s, a, l, u;
  return {
    c() {
      r = Pe("div"), e = Pe("div"), o = hr(), i = Pe("input"), g(e, "class", pi.switch__thumb), g(r, "class", n = ht("switch__tumbler", pi, { checked: (
        /*value*/
        t[3]
      ) })), g(i, "type", "checkbox"), g(i, "class", s = ht("switch__input", pi, {
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
      J(c, r, f), bt(r, e), J(c, o, f), J(c, i, f), t[25](i), l || (u = [
        xe(
          i,
          "input",
          /*onInput*/
          t[14]
        ),
        xe(i, "focus", function() {
          Lr(
            /*focusHandler*/
            t[29]
          ) && t[29].apply(this, arguments);
        }),
        xe(i, "blur", function() {
          Lr(
            /*blurHandler*/
            t[30]
          ) && t[30].apply(this, arguments);
        })
      ], l = !0);
    },
    p(c, f) {
      t = c, f[0] & /*value*/
      8 && n !== (n = ht("switch__tumbler", pi, { checked: (
        /*value*/
        t[3]
      ) })) && g(r, "class", n), f[1] & /*hasCustomFocus*/
      1 && s !== (s = ht("switch__input", pi, {
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
      c && (G(r), G(o), G(i)), t[25](null), l = !1, Rr(u);
    }
  };
}
function Fk(t) {
  let r, e, n, o;
  const i = [Sk, Ak], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[4] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = er();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (fr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function Dk(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h = v, m = () => (h(), h = C(s, (ye) => e(21, _ = ye)), s), p, w = v, k = () => (w(), w = C(l, (ye) => e(22, p = ye)), l), N, H = v, z = () => (H(), H = C(a, (ye) => e(23, N = ye)), a), oe, _e = v, T = () => (_e(), _e = C(i, (ye) => e(24, oe = ye)), i);
  t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => w()), t.$$.on_destroy.push(() => H()), t.$$.on_destroy.push(() => _e());
  let { componentContext: Y } = r, { layoutParams: le = void 0 } = r;
  const E = Tr(Yr), D = Tr(To), M = E.direction;
  yn(t, M, (ye) => e(20, f = ye));
  let W, q, be = !1, Ae = !1, Ce = "", me = !0, Fe = "#129386", Q = "#1293864c";
  function Ke() {
    e(5, me = !0), e(16, Fe = "#129386"), e(17, Q = "#1293864c");
  }
  function Ye(ye) {
    e(3, be = ye.target.checked), i.setValue(be);
  }
  sn(() => {
    W && (E.unregisterFocusable(W), e(15, W = void 0));
  });
  function Xe(ye) {
    Dr[ye ? "unshift" : "push"](() => {
      q = ye, e(2, q);
    });
  }
  return t.$$set = (ye) => {
    "componentContext" in ye && e(0, Y = ye.componentContext), "layoutParams" in ye && e(1, le = ye.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(19, n = Y.origJson), t.$$.dirty[0] & /*origJson*/
    524288 && n && Ke(), t.$$.dirty[0] & /*componentContext*/
    1 && e(18, o = Y.json.is_on_variable), t.$$.dirty[0] & /*variable, componentContext*/
    262145 && T(e(7, i = o && (Y.getVariable(o, "boolean") || E.awaitGlobalVariable(o, "boolean", !1)) || Xn("temp", "boolean", !1))), t.$$.dirty[0] & /*componentContext*/
    1 && m(e(12, s = Y.getDerivedFromVars(Y.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && z(e(11, a = Y.getDerivedFromVars(Y.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && k(e(10, l = Y.getDerivedFromVars(Y.json.on_color))), t.$$.dirty[0] & /*variable, componentContext, $jsonAccessibility, hasError*/
    2359313) {
      let ye = !1;
      o ? (D.hasAction() || (_ == null ? void 0 : _.mode) === "exclude") && (ye = !0, Y.logError(X(new Error('Cannot show "switch" inside component with an action or inside accessibility mode=exclude')))) : (ye = !0, Y.logError(X(new Error('Missing "is_on_variable" in "switch"')))), Ae !== ye && e(4, Ae = ye);
    }
    if (t.$$.dirty[0] & /*value, $valueVariable*/
    16777224 && Li(be) !== Li(oe) && e(3, be = Li(oe)), t.$$.dirty[0] & /*$jsonIsEnabled, isEnabled*/
    8388640 && e(5, me = Zr(N, me)), t.$$.dirty[0] & /*$jsonOnColor, onColor*/
    4259840 && (e(16, Fe = gr(p, 1, Fe)), typeof p == "string")) {
      const ye = _o(p);
      ye && (ye.a *= 0.3, e(17, Q = fa(ye)));
    }
    t.$$.dirty[0] & /*$jsonAccessibility, componentContext*/
    2097153 && (_ != null && _.description ? e(6, Ce = Yo(_)) : Y.logError(X(new Error('Missing accessibility "description" for switch'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled, $direction*/
    1048608 && e(9, u = {
      disabled: !me,
      direction: f
    }), t.$$.dirty[0] & /*onColor, onSubColor*/
    196608 && e(8, c = {
      "--divkit-switch-on-color": Fe,
      "--divkit-switch-on-sub-color": Q
    }), t.$$.dirty[0] & /*input, componentContext, prevId*/
    32773 && q && Y.json && (W && (E.unregisterFocusable(W), e(15, W = void 0)), Y.id && !Y.fakeElement && (e(15, W = Y.id), E.registerFocusable(W, {
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
    me,
    Ce,
    i,
    c,
    u,
    l,
    a,
    s,
    M,
    Ye,
    W,
    Fe,
    Q,
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
class Ik extends Br {
  constructor(r) {
    super(), Or(this, r, Dk, Fk, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Tk = "appkit-checkbox", Mk = "appkit-checkbox__box", Pk = "appkit-checkbox__box_checked", Nk = "appkit-checkbox__checkmark", zk = "appkit-checkbox_disabled", Lk = "appkit-checkbox__input", gi = {
  checkbox: Tk,
  checkbox__box: Mk,
  checkbox__box_checked: Pk,
  checkbox__checkmark: Nk,
  checkbox_disabled: zk,
  checkbox__input: Lk
};
function Ok(t) {
  let r, e;
  return r = new In({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Bk(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "checkbox",
        gi,
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
          Rk,
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
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      512 && (i.cls = ht(
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Rk(t) {
  let r, e, n, o, i, s, a, l, u;
  return {
    c() {
      r = Pe("div"), e = Pe("div"), o = hr(), i = Pe("input"), g(e, "class", gi.checkbox__checkmark), g(r, "class", n = ht("checkbox__box", gi, { checked: (
        /*value*/
        t[3]
      ) })), g(i, "type", "checkbox"), g(i, "class", s = ht("checkbox__input", gi, {
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
      J(c, r, f), bt(r, e), J(c, o, f), J(c, i, f), t[28](i), l || (u = [
        xe(
          i,
          "input",
          /*onInput*/
          t[15]
        ),
        xe(i, "focus", function() {
          Lr(
            /*focusHandler*/
            t[32]
          ) && t[32].apply(this, arguments);
        }),
        xe(i, "blur", function() {
          Lr(
            /*blurHandler*/
            t[33]
          ) && t[33].apply(this, arguments);
        })
      ], l = !0);
    },
    p(c, f) {
      t = c, f[0] & /*value*/
      8 && n !== (n = ht("checkbox__box", gi, { checked: (
        /*value*/
        t[3]
      ) })) && g(r, "class", n), f[1] & /*hasCustomFocus*/
      8 && s !== (s = ht("checkbox__input", gi, {
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
      c && (G(r), G(o), G(i)), t[28](null), l = !1, Rr(u);
    }
  };
}
function Hk(t) {
  let r, e, n, o;
  const i = [Bk, Ok], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[4] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = er();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (fr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function Wk(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m = v, p = () => (m(), m = C(s, (ne) => e(22, h = ne)), s), w, k = v, N = () => (k(), k = C(c, (ne) => e(23, w = ne)), c), H, z = v, oe = () => (z(), z = C(u, (ne) => e(24, H = ne)), u), _e, T = v, Y = () => (T(), T = C(l, (ne) => e(25, _e = ne)), l), le, E = v, D = () => (E(), E = C(a, (ne) => e(26, le = ne)), a), M, W = v, q = () => (W(), W = C(i, (ne) => e(27, M = ne)), i);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => k()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => T()), t.$$.on_destroy.push(() => E()), t.$$.on_destroy.push(() => W());
  let { componentContext: be } = r, { layoutParams: Ae = void 0 } = r;
  const Ce = Tr(Yr), me = Tr(To);
  let Fe, Q, Ke = !1, Ye = !1, Xe = "", ye = !0, Me = "#129386", ce = "rgba(0, 0, 0, .3)", he = "#fff";
  function fe() {
    e(5, ye = !0), e(17, Me = "#129386"), e(18, ce = "rgba(0, 0, 0, .3)"), e(19, he = "#fff");
  }
  function re(ne) {
    e(3, Ke = ne.target.checked), i.setValue(Ke);
  }
  sn(() => {
    Fe && (Ce.unregisterFocusable(Fe), e(16, Fe = void 0));
  });
  function de(ne) {
    Dr[ne ? "unshift" : "push"](() => {
      Q = ne, e(2, Q);
    });
  }
  return t.$$set = (ne) => {
    "componentContext" in ne && e(0, be = ne.componentContext), "layoutParams" in ne && e(1, Ae = ne.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(21, n = be.origJson), t.$$.dirty[0] & /*origJson*/
    2097152 && n && fe(), t.$$.dirty[0] & /*componentContext*/
    1 && e(20, o = be.json.is_checked_variable), t.$$.dirty[0] & /*variable, componentContext*/
    1048577 && q(e(7, i = o && (be.getVariable(o, "boolean") || Ce.awaitGlobalVariable(o, "boolean", !1)) || Xn("temp", "boolean", !1))), t.$$.dirty[0] & /*componentContext*/
    1 && p(e(14, s = be.getDerivedFromVars(be.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && D(e(13, a = be.getDerivedFromVars(be.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Y(e(12, l = be.getDerivedFromVars(be.json.on_color))), t.$$.dirty[0] & /*componentContext*/
    1 && oe(e(11, u = be.getDerivedFromVars(be.json.off_color))), t.$$.dirty[0] & /*componentContext*/
    1 && N(e(10, c = be.getDerivedFromVars(be.json.check_mark_color))), t.$$.dirty[0] & /*variable, componentContext, $jsonAccessibility, hasError*/
    5242897) {
      let ne = !1;
      o ? (me.hasAction() || (h == null ? void 0 : h.mode) === "exclude") && (ne = !0, be.logError(X(new Error('Cannot show "checkbox" inside component with an action or inside accessibility mode=exclude')))) : (ne = !0, be.logError(X(new Error('Missing "is_checked_variable" in "checkbox"')))), Ye !== ne && e(4, Ye = ne);
    }
    t.$$.dirty[0] & /*value, $valueVariable*/
    134217736 && Li(Ke) !== Li(M) && e(3, Ke = Li(M)), t.$$.dirty[0] & /*$jsonIsEnabled, isEnabled*/
    67108896 && e(5, ye = Zr(le, ye)), t.$$.dirty[0] & /*$jsonOnColor, onColor*/
    33685504 && e(17, Me = gr(_e, 1, Me)), t.$$.dirty[0] & /*$jsonOffColor, offColor*/
    17039360 && e(18, ce = gr(H, 1, ce)), t.$$.dirty[0] & /*$jsonCheckMarkColor, checkMarkColor*/
    8912896 && e(19, he = gr(w, 1, he)), t.$$.dirty[0] & /*$jsonAccessibility, componentContext*/
    4194305 && (h != null && h.description ? e(6, Xe = Yo(h)) : be.logError(X(new Error('Missing accessibility "description" for checkbox'), { level: "warn" }))), t.$$.dirty[0] & /*isEnabled*/
    32 && e(9, f = { disabled: !ye }), t.$$.dirty[0] & /*onColor, offColor, checkMarkColor*/
    917504 && e(8, _ = {
      "--divkit-checkbox-on-color": Me,
      "--divkit-checkbox-off-color": ce,
      "--divkit-checkbox-check-mark-color": he
    }), t.$$.dirty[0] & /*input, componentContext, prevId*/
    65541 && Q && be.json && (Fe && (Ce.unregisterFocusable(Fe), e(16, Fe = void 0)), be.id && !be.fakeElement && (e(16, Fe = be.id), Ce.registerFocusable(Fe, {
      focus() {
        Q && Q.focus();
      }
    })));
  }, [
    be,
    Ae,
    Q,
    Ke,
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
    re,
    Fe,
    Me,
    ce,
    he,
    o,
    n,
    h,
    w,
    H,
    _e,
    le,
    M,
    de
  ];
}
class Uk extends Br {
  constructor(r) {
    super(), Or(this, r, Wk, Hk, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const Gk = "appkit-radio", Jk = "appkit-radio__group", Kk = "appkit-radio__group_vertical", qk = "appkit-radio__group_horizontal", Yk = "appkit-radio__item", Xk = "appkit-radio_disabled", Zk = "appkit-radio__circle", Qk = "appkit-radio__circle_selected", xk = "appkit-radio__dot", $k = "appkit-radio__label", e2 = "appkit-radio__input", ko = {
  radio: Gk,
  radio__group: Jk,
  radio__group_vertical: Kk,
  radio__group_horizontal: qk,
  radio__item: Yk,
  radio_disabled: Xk,
  radio__circle: Zk,
  radio__circle_selected: Qk,
  radio__dot: xk,
  radio__label: $k,
  radio__input: e2
};
function Sf(t, r, e) {
  const n = t.slice();
  return n[55] = r[e], n;
}
function t2(t) {
  let r, e;
  return r = new In({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function r2(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "radio",
        ko,
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
          i2,
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
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      2048 && (i.cls = ht(
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function n2(t) {
  let r, e = (
    /*item*/
    t[55].value + ""
  ), n;
  return {
    c() {
      r = Pe("span"), n = On(e), g(r, "class", ko.radio__label);
    },
    m(o, i) {
      J(o, r, i), bt(r, n);
    },
    p(o, i) {
      i[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      o[55].value + "") && Jn(n, e);
    },
    d(o) {
      o && G(r);
    }
  };
}
function o2(t) {
  let r, e = (
    /*item*/
    t[55].text + ""
  ), n;
  return {
    c() {
      r = Pe("span"), n = On(e), g(r, "class", ko.radio__label);
    },
    m(o, i) {
      J(o, r, i), bt(r, n);
    },
    p(o, i) {
      i[0] & /*filteredItems*/
      32 && e !== (e = /*item*/
      o[55].text + "") && Jn(n, e);
    },
    d(o) {
      o && G(r);
    }
  };
}
function Vf(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _, h;
  function m(N, H) {
    return (
      /*item*/
      N[55].text ? o2 : n2
    );
  }
  let p = m(t), w = p(t);
  function k() {
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
      r = Pe("label"), e = Pe("div"), n = Pe("div"), i = hr(), w.c(), s = hr(), a = Pe("input"), f = hr(), g(n, "class", ko.radio__dot), g(e, "class", o = ht("radio__circle", ko, {
        selected: (
          /*$valueVariable*/
          t[23] === /*item*/
          t[55].value
        )
      })), g(a, "type", "radio"), g(a, "class", ko.radio__input), g(
        a,
        "name",
        /*groupName*/
        t[12]
      ), a.value = l = /*item*/
      t[55].value, a.checked = u = /*$valueVariable*/
      t[23] === /*item*/
      t[55].value, a.disabled = c = !/*isEnabled*/
      t[4], g(r, "class", ko.radio__item);
    },
    m(N, H) {
      J(N, r, H), bt(r, e), bt(e, n), bt(r, i), w.m(r, null), bt(r, s), bt(r, a), bt(r, f), _ || (h = [
        xe(a, "change", k),
        xe(a, "focus", function() {
          Lr(
            /*focusHandler*/
            t[52]
          ) && t[52].apply(this, arguments);
        }),
        xe(a, "blur", function() {
          Lr(
            /*blurHandler*/
            t[53]
          ) && t[53].apply(this, arguments);
        })
      ], _ = !0);
    },
    p(N, H) {
      t = N, H[0] & /*$valueVariable, filteredItems*/
      8388640 && o !== (o = ht("radio__circle", ko, {
        selected: (
          /*$valueVariable*/
          t[23] === /*item*/
          t[55].value
        )
      })) && g(e, "class", o), p === (p = m(t)) && w ? w.p(t, H) : (w.d(1), w = p(t), w && (w.c(), w.m(r, s))), H[0] & /*groupName*/
      4096 && g(
        a,
        "name",
        /*groupName*/
        t[12]
      ), H[0] & /*filteredItems*/
      32 && l !== (l = /*item*/
      t[55].value) && (a.value = l), H[0] & /*$valueVariable, filteredItems*/
      8388640 && u !== (u = /*$valueVariable*/
      t[23] === /*item*/
      t[55].value) && (a.checked = u), H[0] & /*isEnabled*/
      16 && c !== (c = !/*isEnabled*/
      t[4]) && (a.disabled = c);
    },
    d(N) {
      N && G(r), w.d(), _ = !1, Rr(h);
    }
  };
}
function i2(t) {
  let r, e, n = ar(
    /*filteredItems*/
    t[5]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Vf(Sf(t, n, i));
  return {
    c() {
      r = Pe("div");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(r, "class", e = ht(
        "radio__group",
        ko,
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
      J(i, r, s);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(r, null);
      t[48](r);
    },
    p(i, s) {
      if (s[0] & /*groupName, filteredItems, $valueVariable, isEnabled, onChange*/
      25169968 | s[1] & /*focusHandler, blurHandler*/
      6291456) {
        n = ar(
          /*filteredItems*/
          i[5]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = Sf(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Vf(l), o[a].c(), o[a].m(r, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
      s[0] & /*groupMods*/
      1024 && e !== (e = ht(
        "radio__group",
        ko,
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
      i && G(r), on(o, i), t[48](null);
    }
  };
}
function s2(t) {
  let r, e, n, o;
  const i = [r2, t2], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = er();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (fr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function l2(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, z, oe, _e, T, Y = v, le = () => (Y(), Y = C(l, (Ze) => e(37, T = Ze)), l), E, D = v, M = () => (D(), D = C(k, (Ze) => e(38, E = Ze)), k), W, q = v, be = () => (q(), q = C(w, (Ze) => e(39, W = Ze)), w), Ae, Ce = v, me = () => (Ce(), Ce = C(p, (Ze) => e(40, Ae = Ze)), p), Fe, Q = v, Ke = () => (Q(), Q = C(m, (Ze) => e(41, Fe = Ze)), m), Ye, Xe = v, ye = () => (Xe(), Xe = C(h, (Ze) => e(42, Ye = Ze)), h), Me, ce = v, he = () => (ce(), ce = C(_, (Ze) => e(43, Me = Ze)), _), fe, re = v, de = () => (re(), re = C(f, (Ze) => e(44, fe = Ze)), f), ne, we = v, Ue = () => (we(), we = C(c, (Ze) => e(45, ne = Ze)), c), Ge, $ = v, Be = () => ($(), $ = C(u, (Ze) => e(46, Ge = Ze)), u), Ne, ot = v, ct = () => (ot(), ot = C(a, (Ze) => e(23, Ne = Ze)), a);
  t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => q()), t.$$.on_destroy.push(() => Ce()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => Xe()), t.$$.on_destroy.push(() => ce()), t.$$.on_destroy.push(() => re()), t.$$.on_destroy.push(() => we()), t.$$.on_destroy.push(() => $()), t.$$.on_destroy.push(() => ot());
  let { componentContext: nt } = r, { layoutParams: kt = void 0 } = r;
  const it = Tr(Yr), Pt = Tr(To);
  let ft, Z, pe = !1, st = "", ze = !0, F = "#129386", Ct = "rgba(0, 0, 0, 0.3)", ut = "", Vt, Dt, lt = "", K = "vertical", Mt = 8;
  function It() {
    e(4, ze = !0), e(26, F = "#129386"), e(27, Ct = "rgba(0, 0, 0, 0.3)"), e(28, ut = ""), e(29, Vt = void 0), e(30, Dt = void 0), e(31, lt = ""), e(32, K = "vertical"), e(33, Mt = 8);
  }
  function Xt(Ze) {
    a.setValue(Ze);
  }
  sn(() => {
    ft && (it.unregisterFocusable(ft), e(25, ft = void 0));
  });
  const Zt = (Ze) => Xt(Ze.value);
  function Ee(Ze) {
    Dr[Ze ? "unshift" : "push"](() => {
      Z = Ze, e(2, Z);
    });
  }
  return t.$$set = (Ze) => {
    "componentContext" in Ze && e(0, nt = Ze.componentContext), "layoutParams" in Ze && e(1, kt = Ze.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(36, n = nt.origJson), t.$$.dirty[1] & /*origJson*/
    32 && n && It(), t.$$.dirty[0] & /*componentContext*/
    1 && e(34, o = nt.json.value_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(35, i = nt.json.options), t.$$.dirty[1] & /*items*/
    16 && e(5, s = Array.isArray(i) && i.filter((Ze) => typeof Ze.value == "string") || []), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    8 && ct(e(7, a = o && (nt.getVariable(o, "string") || it.awaitGlobalVariable(o, "string", "")) || Xn("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(22, l = nt.getDerivedFromVars(nt.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && Be(e(21, u = nt.getDerivedFromVars(nt.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Ue(e(20, c = nt.getDerivedFromVars(nt.json.selected_color))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(19, f = nt.getDerivedFromVars(nt.json.default_color))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(18, _ = nt.getDerivedFromVars(nt.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ye(e(17, h = nt.getDerivedFromVars(nt.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && Ke(e(16, m = nt.getDerivedFromVars(nt.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(15, p = nt.getDerivedFromVars(nt.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(14, w = nt.getDerivedFromVars(nt.json.orientation))), t.$$.dirty[0] & /*componentContext*/
    1 && M(e(13, k = nt.getDerivedFromVars(nt.json.item_spacing))), t.$$.dirty[0] & /*filteredItems, componentContext*/
    33 && (Array.isArray(s) && s.length || nt.logError(X(new Error('Empty "options" in "radio"')))), t.$$.dirty[0] & /*componentContext, hasError*/
    9 | t.$$.dirty[1] & /*variable, $jsonAccessibility*/
    72) {
      let Ze = !1;
      o ? (Pt.hasAction() || (T == null ? void 0 : T.mode) === "exclude") && (Ze = !0, nt.logError(X(new Error('Cannot show "radio" inside component with an action or inside accessibility mode=exclude')))) : (Ze = !0, nt.logError(X(new Error('Missing "value_variable" in "radio"')))), pe !== Ze && e(3, pe = Ze);
    }
    t.$$.dirty[0] & /*isEnabled*/
    16 | t.$$.dirty[1] & /*$jsonIsEnabled*/
    32768 && e(4, ze = Zr(Ge, ze)), t.$$.dirty[0] & /*selectedColor*/
    67108864 | t.$$.dirty[1] & /*$jsonSelectedColor*/
    16384 && e(26, F = gr(ne, 1, F)), t.$$.dirty[0] & /*defaultColor*/
    134217728 | t.$$.dirty[1] & /*$jsonDefaultColor*/
    8192 && e(27, Ct = gr(fe, 1, Ct)), t.$$.dirty[0] & /*textColor*/
    268435456 | t.$$.dirty[1] & /*$jsonTextColor*/
    4096 && e(28, ut = gr(Me, 1, ut)), t.$$.dirty[0] & /*fontSize*/
    536870912 | t.$$.dirty[1] & /*$jsonFontSize*/
    2048 && e(29, Vt = typeof Ye == "number" && Ye > 0 ? Ye : Vt), t.$$.dirty[0] & /*fontWeight*/
    1073741824 | t.$$.dirty[1] & /*$jsonFontWeight, $jsonFontFamily*/
    1536 && (e(30, Dt = ii(Fe, void 0, Dt)), Ae && typeof Ae == "string" ? e(31, lt = it.typefaceProvider(Ae, { fontWeight: Dt || 400 })) : e(31, lt = "")), t.$$.dirty[1] & /*$jsonOrientation, orientation*/
    258 && e(32, K = W === "horizontal" || W === "vertical" ? W : K), t.$$.dirty[1] & /*$jsonItemSpacing, itemSpacing*/
    132 && e(33, Mt = typeof E == "number" && E >= 0 ? E : Mt), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*$jsonAccessibility*/
    64 && (T != null && T.description ? e(6, st = Yo(T)) : nt.logError(X(new Error('Missing accessibility "description" for radio'), { level: "warn" }))), t.$$.dirty[0] & /*componentContext*/
    1 && e(12, N = nt.id || `radio_${Math.random().toString(36).slice(2)}`), t.$$.dirty[0] & /*isEnabled*/
    16 && e(11, H = { disabled: !ze }), t.$$.dirty[1] & /*orientation*/
    2 && e(10, z = { [K]: !0 }), t.$$.dirty[0] & /*selectedColor, defaultColor, textColor, fontSize, fontWeight*/
    2080374784 | t.$$.dirty[1] & /*fontFamily*/
    1 && e(9, oe = {
      "--divkit-radio-selected-color": F,
      "--divkit-radio-default-color": Ct,
      ...ut ? { "--divkit-radio-text-color": ut } : {},
      ...Vt ? { "font-size": ge(Vt) } : {},
      ...Dt ? { "font-weight": Dt } : {},
      ...lt ? { "font-family": lt } : {}
    }), t.$$.dirty[1] & /*itemSpacing*/
    4 && e(8, _e = `gap: ${ge(Mt)}`), t.$$.dirty[0] & /*container, componentContext, prevId*/
    33554437 && Z && nt.json && (ft && (it.unregisterFocusable(ft), e(25, ft = void 0)), nt.id && !nt.fakeElement && (e(25, ft = nt.id), it.registerFocusable(ft, {
      focus() {
        if (Z) {
          const Ze = Z.querySelector("input");
          Ze && Ze.focus();
        }
      }
    })));
  }, [
    nt,
    kt,
    Z,
    pe,
    ze,
    s,
    st,
    a,
    _e,
    oe,
    z,
    H,
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
    Xt,
    ft,
    F,
    Ct,
    ut,
    Vt,
    Dt,
    lt,
    K,
    Mt,
    o,
    i,
    n,
    T,
    E,
    W,
    Ae,
    Fe,
    Ye,
    Me,
    fe,
    ne,
    Ge,
    Zt,
    Ee
  ];
}
class a2 extends Br {
  constructor(r) {
    super(), Or(this, r, l2, s2, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const u2 = "appkit-progress", c2 = "appkit-progress__linear", f2 = "appkit-progress__circular", ti = {
  progress: u2,
  progress__linear: c2,
  "progress__linear-fill": "appkit-progress__linear-fill",
  "progress__linear-fill_indeterminate": "appkit-progress__linear-fill_indeterminate",
  "progress-linear-indeterminate": "appkit-progress-linear-indeterminate",
  progress__circular: f2,
  "progress__circular-track": "appkit-progress__circular-track",
  "progress__circular-fill": "appkit-progress__circular-fill",
  "progress__circular-fill_indeterminate": "appkit-progress__circular-fill_indeterminate",
  "progress-circular-indeterminate": "appkit-progress-circular-indeterminate"
};
function d2(t) {
  let r, e;
  return r = new In({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function _2(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht("progress", ti, {}),
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
      $$slots: { default: [h2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function p2(t) {
  let r, e, n, o, i;
  return {
    c() {
      r = tn("svg"), e = tn("circle"), n = tn("circle"), g(e, "class", ti["progress__circular-track"]), g(e, "cx", $o / 2), g(e, "cy", $o / 2), g(e, "r", ia), g(
        e,
        "stroke-width",
        /*trackThickness*/
        t[5]
      ), g(n, "class", o = ht("progress__circular-fill", ti, {
        indeterminate: (
          /*isIndeterminate*/
          t[4]
        )
      })), g(n, "cx", $o / 2), g(n, "cy", $o / 2), g(n, "r", ia), g(
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
      )), g(n, "stroke-linecap", "round"), g(r, "class", ti.progress__circular), g(r, "width", $o), g(r, "height", $o), g(r, "viewBox", "0 0 " + $o + " " + $o), g(r, "role", "progressbar"), g(
        r,
        "aria-valuenow",
        /*ariaValue*/
        t[6]
      ), g(r, "aria-valuemin", 0), g(r, "aria-valuemax", 100);
    },
    m(s, a) {
      J(s, r, a), bt(r, e), bt(r, n);
    },
    p(s, a) {
      a & /*trackThickness*/
      32 && g(
        e,
        "stroke-width",
        /*trackThickness*/
        s[5]
      ), a & /*isIndeterminate*/
      16 && o !== (o = ht("progress__circular-fill", ti, {
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
      s && G(r);
    }
  };
}
function g2(t) {
  let r, e, n;
  return {
    c() {
      r = Pe("div"), e = Pe("div"), g(e, "class", n = ht("progress__linear-fill", ti, {
        indeterminate: (
          /*isIndeterminate*/
          t[4]
        )
      })), I(
        e,
        "width",
        /*isIndeterminate*/
        t[4] ? "30%" : (
          /*progressValue*/
          t[2] * 100 + "%"
        )
      ), g(r, "class", ti.progress__linear), I(r, "height", ge(
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
      J(o, r, i), bt(r, e);
    },
    p(o, i) {
      i & /*isIndeterminate*/
      16 && n !== (n = ht("progress__linear-fill", ti, {
        indeterminate: (
          /*isIndeterminate*/
          o[4]
        )
      })) && g(e, "class", n), i & /*isIndeterminate, progressValue*/
      20 && I(
        e,
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
      o && G(r);
    }
  };
}
function h2(t) {
  let r;
  function e(i, s) {
    return (
      /*progressStyle*/
      i[3] === "linear" ? g2 : p2
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = er();
    },
    m(i, s) {
      o.m(i, s), J(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && G(r), o.d(i);
    }
  };
}
function m2(t) {
  let r, e, n, o;
  const i = [_2, d2], s = [];
  function a(l, u) {
    return 0;
  }
  return ~(r = a()) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = er();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, [u]) {
      e && e.p(l, u);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
const $o = 48, ia = 20;
function b2(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m = v, p = () => (m(), m = C(u, (Me) => e(19, h = Me)), u), w, k = v, N = () => (k(), k = C(l, (Me) => e(20, w = Me)), l), H, z = v, oe = () => (z(), z = C(a, (Me) => e(21, H = Me)), a), _e, T = v, Y = () => (T(), T = C(s, (Me) => e(22, _e = Me)), s), le, E = v, D = () => (E(), E = C(i, (Me) => e(23, le = Me)), i), M, W = v, q = () => (W(), W = C(o, (Me) => e(24, M = Me)), o);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => k()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => T()), t.$$.on_destroy.push(() => E()), t.$$.on_destroy.push(() => W());
  let { componentContext: be } = r, { layoutParams: Ae = void 0 } = r;
  Tr(Yr);
  let Ce = 0, me = "linear", Fe = !1, Q = "#129386", Ke = "rgba(0, 0, 0, .1)", Ye = 4;
  function Xe() {
    e(2, Ce = 0), e(3, me = "linear"), e(4, Fe = !1), e(16, Q = "#129386"), e(17, Ke = "rgba(0, 0, 0, .1)"), e(5, Ye = 4);
  }
  const ye = 2 * Math.PI * ia;
  return t.$$set = (Me) => {
    "componentContext" in Me && e(0, be = Me.componentContext), "layoutParams" in Me && e(1, Ae = Me.layoutParams);
  }, t.$$.update = () => {
    t.$$.dirty & /*componentContext*/
    1 && e(18, n = be.origJson), t.$$.dirty & /*origJson*/
    262144 && n && Xe(), t.$$.dirty & /*componentContext*/
    1 && q(e(14, o = be.getDerivedFromVars(be.json.value))), t.$$.dirty & /*componentContext*/
    1 && D(e(13, i = be.getDerivedFromVars(be.json.style))), t.$$.dirty & /*componentContext*/
    1 && Y(e(12, s = be.getDerivedFromVars(be.json.is_indeterminate))), t.$$.dirty & /*componentContext*/
    1 && oe(e(11, a = be.getDerivedFromVars(be.json.active_color))), t.$$.dirty & /*componentContext*/
    1 && N(e(10, l = be.getDerivedFromVars(be.json.inactive_color))), t.$$.dirty & /*componentContext*/
    1 && p(e(9, u = be.getDerivedFromVars(be.json.track_thickness))), t.$$.dirty & /*$jsonValue, progressValue*/
    16777220 && e(2, Ce = typeof M == "number" ? Math.max(0, Math.min(1, M)) : Ce), t.$$.dirty & /*$jsonStyle, progressStyle*/
    8388616 && e(3, me = le === "linear" || le === "circular" ? le : me), t.$$.dirty & /*$jsonIsIndeterminate, isIndeterminate*/
    4194320 && e(4, Fe = Zr(_e, Fe)), t.$$.dirty & /*$jsonActiveColor, activeColor*/
    2162688 && e(16, Q = gr(H, 1, Q)), t.$$.dirty & /*$jsonInactiveColor, inactiveColor*/
    1179648 && e(17, Ke = gr(w, 1, Ke)), t.$$.dirty & /*$jsonTrackThickness, trackThickness*/
    524320 && e(5, Ye = typeof h == "number" && h >= 0 ? h : Ye), t.$$.dirty & /*progressValue*/
    4 && e(8, c = ye * (1 - Ce)), t.$$.dirty & /*activeColor, inactiveColor*/
    196608 && e(7, f = {
      "--divkit-progress-active-color": Q,
      "--divkit-progress-inactive-color": Ke
    }), t.$$.dirty & /*isIndeterminate, progressValue*/
    20 && e(6, _ = Fe ? void 0 : Math.round(Ce * 100));
  }, [
    be,
    Ae,
    Ce,
    me,
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
    Q,
    Ke,
    n,
    h,
    w,
    H,
    _e,
    le,
    M
  ];
}
class y2 extends Br {
  constructor(r) {
    super(), Or(this, r, b2, m2, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const w2 = "appkit-table", k2 = "appkit-table_halign_start", v2 = "appkit-table_halign_center", j2 = "appkit-table_halign_end", C2 = "appkit-table_valign_start", E2 = "appkit-table_valign_center", A2 = "appkit-table_valign_end", S2 = "appkit-table__cell", V2 = "appkit-table__cell_halign_left", F2 = "appkit-table__cell_halign_start", D2 = "appkit-table__cell_halign_center", I2 = "appkit-table__cell_halign_right", T2 = "appkit-table__cell_halign_end", M2 = "appkit-table__cell_valign_top", P2 = "appkit-table__cell_valign_center", N2 = "appkit-table__cell_valign_bottom", z2 = "appkit-table__cell_valign_baseline", L2 = "appkit-table__separator", O2 = "appkit-table__separator_row", B2 = "appkit-table__separator_col", Go = {
  table: w2,
  table_halign_start: k2,
  table_halign_center: v2,
  table_halign_end: j2,
  table_valign_start: C2,
  table_valign_center: E2,
  table_valign_end: A2,
  table__cell: S2,
  table__cell_halign_left: V2,
  table__cell_halign_start: F2,
  table__cell_halign_center: D2,
  table__cell_halign_right: I2,
  table__cell_halign_end: T2,
  table__cell_valign_top: M2,
  table__cell_valign_center: P2,
  table__cell_valign_bottom: N2,
  table__cell_valign_baseline: z2,
  table__separator: L2,
  table__separator_row: O2,
  table__separator_col: B2
};
function Ff(t, r, e) {
  const n = t.slice();
  return n[35] = r[e], n;
}
function Df(t, r, e) {
  const n = t.slice();
  return n[38] = r[e], n;
}
function R2(t) {
  let r, e;
  return r = new In({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function H2(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "table",
        Go,
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
      $$slots: { default: [W2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      128 && (i.cls = ht(
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function If(t) {
  var a, l, u, c, f, _, h, m;
  let r, e, n, o = `${/*placement*/
  ((l = (a = t[38].layoutParams.gridArea) == null ? void 0 : a.x) != null ? l : 0) + 1} / span ${/*placement*/
  (c = (u = t[38].layoutParams.gridArea) == null ? void 0 : u.colSpan) != null ? c : 1}`, i = `${/*placement*/
  ((_ = (f = t[38].layoutParams.gridArea) == null ? void 0 : f.y) != null ? _ : 0) + 1} / span ${/*placement*/
  (m = (h = t[38].layoutParams.gridArea) == null ? void 0 : h.rowSpan) != null ? m : 1}`, s;
  return e = new Kn({
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
      r = Pe("div"), Ut(e.$$.fragment), g(r, "class", n = ht("table__cell", Go, {
        halign: (
          /*placement*/
          t[38].cellHAlign
        ),
        valign: (
          /*placement*/
          t[38].cellVAlign
        )
      })), I(r, "grid-column", o), I(r, "grid-row", i), I(
        r,
        "background",
        /*placement*/
        t[38].backgroundStyle || void 0
      );
    },
    m(p, w) {
      J(p, r, w), Bt(e, r, null), s = !0;
    },
    p(p, w) {
      var N, H, z, oe, _e, T, Y, le;
      const k = {};
      w[0] & /*cellPlacements*/
      16 && (k.componentContext = /*placement*/
      p[38].componentContext), w[0] & /*cellPlacements*/
      16 && (k.layoutParams = /*placement*/
      p[38].layoutParams), e.$set(k), (!s || w[0] & /*cellPlacements*/
      16 && n !== (n = ht("table__cell", Go, {
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
      ((H = (N = p[38].layoutParams.gridArea) == null ? void 0 : N.x) != null ? H : 0) + 1} / span ${/*placement*/
      (oe = (z = p[38].layoutParams.gridArea) == null ? void 0 : z.colSpan) != null ? oe : 1}`) && I(r, "grid-column", o), w[0] & /*cellPlacements*/
      16 && i !== (i = `${/*placement*/
      ((T = (_e = p[38].layoutParams.gridArea) == null ? void 0 : _e.y) != null ? T : 0) + 1} / span ${/*placement*/
      (le = (Y = p[38].layoutParams.gridArea) == null ? void 0 : Y.rowSpan) != null ? le : 1}`) && I(r, "grid-row", i), w[0] & /*cellPlacements*/
      16 && I(
        r,
        "background",
        /*placement*/
        p[38].backgroundStyle || void 0
      );
    },
    i(p) {
      s || (L(e.$$.fragment, p), s = !0);
    },
    o(p) {
      x(e.$$.fragment, p), s = !1;
    },
    d(p) {
      p && G(r), Rt(e);
    }
  };
}
function Tf(t) {
  let r, e, n, o;
  return {
    c() {
      r = Pe("div"), e = Pe("div"), o = hr(), g(e, "class", n = /*sep*/
      t[35].width ? Go.table__separator_col : Go.table__separator_row), I(
        e,
        "background",
        /*sep*/
        t[35].background
      ), I(
        e,
        "height",
        /*sep*/
        t[35].height || void 0
      ), I(
        e,
        "width",
        /*sep*/
        t[35].width || void 0
      ), g(r, "class", Go.table__separator), I(
        r,
        "grid-column",
        /*sep*/
        t[35].gridColumn
      ), I(
        r,
        "grid-row",
        /*sep*/
        t[35].gridRow
      ), I(
        r,
        "margin-top",
        /*sep*/
        t[35].marginTop || void 0
      ), I(
        r,
        "margin-bottom",
        /*sep*/
        t[35].marginBottom || void 0
      ), I(
        r,
        "margin-left",
        /*sep*/
        t[35].marginLeft || void 0
      ), I(
        r,
        "margin-right",
        /*sep*/
        t[35].marginRight || void 0
      );
    },
    m(i, s) {
      J(i, r, s), bt(r, e), bt(r, o);
    },
    p(i, s) {
      s[0] & /*separatorElements*/
      32 && n !== (n = /*sep*/
      i[35].width ? Go.table__separator_col : Go.table__separator_row) && g(e, "class", n), s[0] & /*separatorElements*/
      32 && I(
        e,
        "background",
        /*sep*/
        i[35].background
      ), s[0] & /*separatorElements*/
      32 && I(
        e,
        "height",
        /*sep*/
        i[35].height || void 0
      ), s[0] & /*separatorElements*/
      32 && I(
        e,
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
      i && G(r);
    }
  };
}
function W2(t) {
  let r, e, n, o = ar(
    /*cellPlacements*/
    t[4]
  ), i = [];
  for (let u = 0; u < o.length; u += 1)
    i[u] = If(Df(t, o, u));
  const s = (u) => x(i[u], 1, 1, () => {
    i[u] = null;
  });
  let a = ar(
    /*separatorElements*/
    t[5]
  ), l = [];
  for (let u = 0; u < a.length; u += 1)
    l[u] = Tf(Ff(t, a, u));
  return {
    c() {
      for (let u = 0; u < i.length; u += 1)
        i[u].c();
      r = hr();
      for (let u = 0; u < l.length; u += 1)
        l[u].c();
      e = er();
    },
    m(u, c) {
      for (let f = 0; f < i.length; f += 1)
        i[f] && i[f].m(u, c);
      J(u, r, c);
      for (let f = 0; f < l.length; f += 1)
        l[f] && l[f].m(u, c);
      J(u, e, c), n = !0;
    },
    p(u, c) {
      if (c[0] & /*cellPlacements*/
      16) {
        o = ar(
          /*cellPlacements*/
          u[4]
        );
        let f;
        for (f = 0; f < o.length; f += 1) {
          const _ = Df(u, o, f);
          i[f] ? (i[f].p(_, c), L(i[f], 1)) : (i[f] = If(_), i[f].c(), L(i[f], 1), i[f].m(r.parentNode, r));
        }
        for (fr(), f = o.length; f < i.length; f += 1)
          s(f);
        dr();
      }
      if (c[0] & /*separatorElements*/
      32) {
        a = ar(
          /*separatorElements*/
          u[5]
        );
        let f;
        for (f = 0; f < a.length; f += 1) {
          const _ = Ff(u, a, f);
          l[f] ? l[f].p(_, c) : (l[f] = Tf(_), l[f].c(), l[f].m(e.parentNode, e));
        }
        for (; f < l.length; f += 1)
          l[f].d(1);
        l.length = a.length;
      }
    },
    i(u) {
      if (!n) {
        for (let c = 0; c < o.length; c += 1)
          L(i[c]);
        n = !0;
      }
    },
    o(u) {
      i = i.filter(Boolean);
      for (let c = 0; c < i.length; c += 1)
        x(i[c]);
      n = !1;
    },
    d(u) {
      u && (G(r), G(e)), on(i, u), on(l, u);
    }
  };
}
function U2(t) {
  let r, e, n, o;
  const i = [H2, R2], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = er();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (fr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function G2(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p = v, w = () => (p(), p = C(s, (de) => e(22, m = de)), s), k, N = v, H = () => (N(), N = C(i, (de) => e(23, k = de)), i), z, oe = v, _e = () => (oe(), oe = C(a, (de) => e(24, z = de)), a), T, Y = v, le = () => (Y(), Y = C(l, (de) => e(25, T = de)), l);
  t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => Y());
  let { componentContext: E } = r, { layoutParams: D = void 0 } = r;
  const M = Tr(Yr), W = M.direction;
  yn(t, W, (de) => e(21, h = de));
  let q = !1, be = "start", Ae = "start", Ce = [], me, Fe = [], Q = [], Ke = "";
  function Ye() {
    e(3, q = !1), e(13, be = "start"), e(14, Ae = "start");
  }
  function Xe(de) {
    var $, Be;
    if (!de || !de.style) return null;
    let ne = "#E0E0E0", we = 1;
    const Ue = de.style;
    if (Ue.type === "shape_drawable" && Ue.shape) {
      const Ne = Ue.shape;
      ne = gr(Ne.background_color || Ue.color || "#E0E0E0"), Ne.type === "rounded_rectangle" && (we = Number((($ = Ne.item_height) == null ? void 0 : $.value) || ((Be = Ne.item_width) == null ? void 0 : Be.value) || 1));
    } else Ue.color && (ne = gr(Ue.color));
    const Ge = de.margins || {};
    return {
      color: ne,
      thickness: we,
      show_at_start: de.show_at_start === 1 || de.show_at_start === !0,
      show_between: de.show_between !== 0 && de.show_between !== !1,
      show_at_end: de.show_at_end === 1 || de.show_at_end === !0,
      marginTop: Number(Ge.top) || 0,
      marginBottom: Number(Ge.bottom) || 0,
      marginLeft: Number(Ge.left) || 0,
      marginRight: Number(Ge.right) || 0
    };
  }
  function ye(de, ne) {
    const we = de.header_row;
    let Ue = [];
    return de.row_builder && Array.isArray(ne) ? Ue = vl(ne, M, E, de.row_builder).map(($) => $.div) : Array.isArray(de.rows) && (Ue = de.rows), { rows: Ue, headerRow: we };
  }
  let Me = [];
  function ce(de, ne) {
    Me = [];
    for (let we = 0; we < de; we++)
      Me[we] = new Array(ne).fill(!1);
  }
  function he(de, ne, we, Ue) {
    var Ge;
    for (let $ = de; $ < de + we && $ < Me.length; $++)
      for (let Be = ne; Be < ne + Ue && Be < (((Ge = Me[0]) == null ? void 0 : Ge.length) || 0); Be++)
        Me[$][Be] = !0;
  }
  function fe(de, ne) {
    var Ue;
    if (de >= Me.length) return ne;
    let we = ne;
    for (; we < (((Ue = Me[0]) == null ? void 0 : Ue.length) || 0) && Me[de][we]; )
      we++;
    return we;
  }
  function re(de, ne, we, Ue, Ge, $, Be, Ne, ot, ct) {
    const nt = Array.isArray(de.cells) ? de.cells : [];
    let kt = 0;
    for (let it = 0; it < nt.length; it++) {
      const Pt = nt[it];
      if (!Pt || !Pt.div) continue;
      const ft = Math.max(1, Number(Pt.column_span) || 1), Z = Math.max(1, Number(Pt.row_span) || 1);
      kt = fe(ne, kt), he(ne, kt, Z, ft);
      const pe = Array.isArray(we) && we[kt], st = Pt.content_alignment_horizontal || pe && pe.content_alignment_horizontal || void 0, ze = Pt.content_alignment_vertical || pe && pe.content_alignment_vertical || void 0;
      let F;
      const Ct = Pt.background || Ue;
      if (Ct && Array.isArray(Ct) && Ct.length > 0) {
        const Dt = Ct[0];
        Dt && Dt.type === "solid" && Dt.color && (F = gr(Dt.color));
      }
      const ut = ot.get(Pt.div);
      let Vt;
      ut ? (ct.delete(ut), Vt = ut) : Vt = E.produceChildContext(Pt.div, { path: `${$}_${it}` }), Be.push(Vt), Ne.push({
        componentContext: Vt,
        layoutParams: {
          gridArea: {
            x: kt,
            y: ne,
            colSpan: ft,
            rowSpan: Z
          }
        },
        cellHAlign: st,
        cellVAlign: ze,
        backgroundStyle: F
      }), kt += ft;
    }
  }
  return sn(() => {
    Ce.forEach((de) => {
      de.destroy();
    });
  }), t.$$set = (de) => {
    "componentContext" in de && e(0, E = de.componentContext), "layoutParams" in de && e(1, D = de.layoutParams);
  }, t.$$.update = () => {
    var de, ne, we;
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(20, n = E.origJson), t.$$.dirty[0] & /*origJson*/
    1048576 && n && Ye(), t.$$.dirty[0] & /*componentContext*/
    1 && e(19, o = E.json.columns), t.$$.dirty[0] & /*componentContext*/
    1 && H(e(11, i = E.getDerivedFromVars(E.json.content_alignment_vertical))), t.$$.dirty[0] & /*componentContext*/
    1 && w(e(10, s = E.getDerivedFromVars(E.json.content_alignment_horizontal))), t.$$.dirty[0] & /*componentContext*/
    1 && _e(e(9, a = E.getDerivedFromVars(E.json.striped))), t.$$.dirty[0] & /*componentContext*/
    1 && le(e(8, l = typeof ((de = E.json.row_builder) == null ? void 0 : de.data) == "string" ? E.getDerivedFromVars((ne = E.json.row_builder) == null ? void 0 : ne.data, void 0, !0) : (we = E.json.row_builder) != null && we.data ? Jo(E.json.row_builder.data) : void 0)), t.$$.dirty[0] & /*jsonColumns*/
    524288 && (!Array.isArray(o) || o.length === 0 ? e(3, q = !0) : e(3, q = !1)), t.$$.dirty[0] & /*jsonColumns*/
    524288 && e(17, u = Array.isArray(o) ? o.length : 0), t.$$.dirty[0] & /*jsonColumns*/
    524288)
      if (Array.isArray(o)) {
        const Ue = [];
        for (let Ge = 0; Ge < o.length; Ge++) {
          const $ = o[Ge], Be = $ == null ? void 0 : $.width;
          if ((Be == null ? void 0 : Be.type) === "fixed" && Be.value)
            Ue.push(ge(Number(Be.value)));
          else if ((Be == null ? void 0 : Be.type) === "match_parent") {
            const Ne = Number(Be.weight || 1);
            Ue.push(`${Ne}fr`);
          } else
            Ue.push("auto");
        }
        e(16, Ke = Ue.join(" "));
      } else
        e(16, Ke = "");
    if (t.$$.dirty[0] & /*componentContext, $jsonRowBuilderData*/
    33554433 && e(18, c = ye(E.json, T)), t.$$.dirty[0] & /*items, prevContext, componentContext, jsonColumns, allRows, columnCount, $jsonStriped*/
    17727493) {
      const Ue = new Set(Ce), Ge = /* @__PURE__ */ new Map();
      me === E && Ce.forEach((F) => {
        Ge.set(F.json, F);
      });
      const $ = [], Be = [], Ne = [];
      let ot = 0;
      const ct = E.json, nt = Array.isArray(o) ? o : [], kt = !!(c.headerRow && Array.isArray(c.headerRow.cells)), it = c.rows.length, Pt = (kt ? 1 : 0) + it;
      ce(Pt + 10, u + 10);
      const ft = Xe(ct.row_separator), Z = Xe(ct.column_separator), pe = Xe(ct.header_separator);
      kt && (re(c.headerRow, ot, nt, c.headerRow.background || ct.header_background, void 0, -1, $, Be, Ge, Ue), ot++);
      const st = c.rows;
      for (let F = 0; F < st.length; F++) {
        const Ct = st[F];
        if (!Ct || !Array.isArray(Ct.cells)) continue;
        let ut = Ct.background;
        !ut && z && (F % 2 === 0 ? ut = z.even_row_background : ut = z.odd_row_background), re(Ct, ot, nt, ut, void 0, F, $, Be, Ge, Ue), ot++;
      }
      const ze = ot;
      if (pe && kt && it > 0 && Ne.push({
        gridColumn: `1 / span ${u}`,
        gridRow: "1 / span 1",
        background: pe.color,
        height: ge(pe.thickness),
        marginTop: pe.marginTop ? ge(pe.marginTop) : void 0,
        marginBottom: pe.marginBottom ? ge(pe.marginBottom) : void 0,
        marginLeft: pe.marginLeft ? ge(pe.marginLeft) : void 0,
        marginRight: pe.marginRight ? ge(pe.marginRight) : void 0
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
          for (let Ct = F; Ct < ze - 1; Ct++)
            Ne.push({
              gridColumn: `1 / span ${u}`,
              gridRow: `${Ct + 1} / span 1`,
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
      e(2, Ce = $), e(4, Fe = Be), e(5, Q = Ne), e(15, me = E);
    }
    t.$$.dirty[0] & /*$jsonContentVAlign, contentVAlign*/
    8396800 && e(13, be = kl(k, be)), t.$$.dirty[0] & /*$jsonContentHAlign, $direction, contentHAlign*/
    6307840 && e(14, Ae = wl(m, h, Ae)), t.$$.dirty[0] & /*contentVAlign, contentHAlign*/
    24576 && e(7, f = {
      valign: be,
      halign: Ae
    }), t.$$.dirty[0] & /*gridTemplateColumns*/
    65536 && e(6, _ = {
      "grid-template-columns": Ke
    });
  }, [
    E,
    D,
    Ce,
    q,
    Fe,
    Q,
    _,
    f,
    l,
    a,
    s,
    i,
    W,
    be,
    Ae,
    me,
    Ke,
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
class J2 extends Br {
  constructor(r) {
    super(), Or(this, r, G2, U2, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
const K2 = "appkit-counter", q2 = "appkit-counter__container", Y2 = "appkit-counter__button", X2 = "appkit-counter__value", Z2 = "appkit-counter_disabled", Mi = {
  counter: K2,
  counter__container: q2,
  counter__button: Y2,
  counter__value: X2,
  counter_disabled: Z2
};
function Q2(t) {
  let r, e;
  return r = new In({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function x2(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht(
        "counter",
        Mi,
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
      $$slots: { default: [$2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*mods*/
      32768 && (i.cls = ht(
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function $2(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _, h, m, p, w;
  return {
    c() {
      r = Pe("div"), e = Pe("button"), n = tn("svg"), o = tn("line"), s = hr(), a = Pe("div"), l = On(
        /*value*/
        t[17]
      ), u = hr(), c = Pe("button"), f = tn("svg"), _ = tn("line"), h = tn("line"), g(o, "x1", "6"), g(o, "y1", "12"), g(o, "x2", "18"), g(o, "y2", "12"), g(
        o,
        "stroke",
        /*iconColor*/
        t[6]
      ), g(o, "stroke-width", "2.5"), g(o, "stroke-linecap", "round"), g(n, "viewBox", "0 0 24 24"), g(n, "fill", "none"), g(n, "xmlns", "http://www.w3.org/2000/svg"), g(e, "class", Mi.counter__button), e.disabled = i = !/*isEnabled*/
      t[3] || /*value*/
      t[17] <= /*minValue*/
      t[11], g(e, "aria-label", "Decrease value"), I(
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
      ), I(e, "width", ge(
        /*buttonSize*/
        t[5]
      )), I(e, "height", ge(
        /*buttonSize*/
        t[5]
      )), g(a, "class", Mi.counter__value), I(a, "width", ge(
        /*valueWidth*/
        t[10]
      )), I(
        a,
        "color",
        /*textColor*/
        t[8]
      ), I(a, "font-size", ge(
        /*fontSize*/
        t[9]
      )), I(
        a,
        "font-weight",
        /*fontWeight*/
        t[13]
      ), g(_, "x1", "12"), g(_, "y1", "6"), g(_, "x2", "12"), g(_, "y2", "18"), g(
        _,
        "stroke",
        /*iconColor*/
        t[6]
      ), g(_, "stroke-width", "2.5"), g(_, "stroke-linecap", "round"), g(h, "x1", "6"), g(h, "y1", "12"), g(h, "x2", "18"), g(h, "y2", "12"), g(
        h,
        "stroke",
        /*iconColor*/
        t[6]
      ), g(h, "stroke-width", "2.5"), g(h, "stroke-linecap", "round"), g(f, "viewBox", "0 0 24 24"), g(f, "fill", "none"), g(f, "xmlns", "http://www.w3.org/2000/svg"), g(c, "class", Mi.counter__button), c.disabled = m = !/*isEnabled*/
      t[3] || /*value*/
      t[17] >= /*maxValue*/
      t[12], g(c, "aria-label", "Increase value"), I(
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
      ), I(c, "width", ge(
        /*buttonSize*/
        t[5]
      )), I(c, "height", ge(
        /*buttonSize*/
        t[5]
      )), g(r, "class", Mi.counter__container);
    },
    m(k, N) {
      J(k, r, N), bt(r, e), bt(e, n), bt(n, o), bt(r, s), bt(r, a), bt(a, l), bt(r, u), bt(r, c), bt(c, f), bt(f, _), bt(f, h), p || (w = [
        xe(
          e,
          "click",
          /*decrement*/
          t[36]
        ),
        xe(
          c,
          "click",
          /*increment*/
          t[35]
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
      k[11]) && (e.disabled = i), N[0] & /*value, minValue, disabledButtonColor, buttonColor*/
      133264 && I(
        e,
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
      32 && I(e, "width", ge(
        /*buttonSize*/
        k[5]
      )), N[0] & /*buttonSize*/
      32 && I(e, "height", ge(
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
      k && G(r), p = !1, Rr(w);
    }
  };
}
function ev(t) {
  let r, e, n, o;
  const i = [x2, Q2], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[2] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = er();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (fr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function tv(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, z, oe, _e, T, Y, le, E, D = v, M = () => (D(), D = C(i, (dt) => e(46, E = dt)), i), W, q = v, be = () => (q(), q = C(_e, (dt) => e(47, W = dt)), _e), Ae, Ce = v, me = () => (Ce(), Ce = C(oe, (dt) => e(48, Ae = dt)), oe), Fe, Q = v, Ke = () => (Q(), Q = C(z, (dt) => e(49, Fe = dt)), z), Ye, Xe = v, ye = () => (Xe(), Xe = C(H, (dt) => e(50, Ye = dt)), H), Me, ce = v, he = () => (ce(), ce = C(N, (dt) => e(51, Me = dt)), N), fe, re = v, de = () => (re(), re = C(k, (dt) => e(52, fe = dt)), k), ne, we = v, Ue = () => (we(), we = C(w, (dt) => e(53, ne = dt)), w), Ge, $ = v, Be = () => ($(), $ = C(p, (dt) => e(54, Ge = dt)), p), Ne, ot = v, ct = () => (ot(), ot = C(m, (dt) => e(55, Ne = dt)), m), nt, kt = v, it = () => (kt(), kt = C(h, (dt) => e(56, nt = dt)), h), Pt, ft = v, Z = () => (ft(), ft = C(_, (dt) => e(57, Pt = dt)), _), pe, st = v, ze = () => (st(), st = C(f, (dt) => e(58, pe = dt)), f), F, Ct = v, ut = () => (Ct(), Ct = C(c, (dt) => e(59, F = dt)), c), Vt, Dt = v, lt = () => (Dt(), Dt = C(u, (dt) => e(60, Vt = dt)), u), K, Mt = v, It = () => (Mt(), Mt = C(l, (dt) => e(61, K = dt)), l), Xt, Zt = v, Ee = () => (Zt(), Zt = C(a, (dt) => e(62, Xt = dt)), a), Ze, gt = v, Ie = () => (gt(), gt = C(s, (dt) => e(63, Ze = dt)), s);
  t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => q()), t.$$.on_destroy.push(() => Ce()), t.$$.on_destroy.push(() => Q()), t.$$.on_destroy.push(() => Xe()), t.$$.on_destroy.push(() => ce()), t.$$.on_destroy.push(() => re()), t.$$.on_destroy.push(() => we()), t.$$.on_destroy.push(() => $()), t.$$.on_destroy.push(() => ot()), t.$$.on_destroy.push(() => kt()), t.$$.on_destroy.push(() => ft()), t.$$.on_destroy.push(() => st()), t.$$.on_destroy.push(() => Ct()), t.$$.on_destroy.push(() => Dt()), t.$$.on_destroy.push(() => Mt()), t.$$.on_destroy.push(() => Zt()), t.$$.on_destroy.push(() => gt());
  let { componentContext: $e } = r, { layoutParams: Le = void 0 } = r;
  const Ft = Tr(Yr), Oe = Tr(To);
  let yt = !1, Gt = !0, Tt = "#4CAF50", sr = 36, Te = "#ffffff", jt = "#cccccc", lr = "#1B2630", rr = 16, nr = 700, pr = 40, vr = "#F5F5F5", or = "#E0E0E0", ir = 1, Ht = 999, mt = 6, Qt = 0, ae = 99, wr = 1;
  const kr = {
    light: 300,
    regular: 400,
    medium: 500,
    bold: 700
  };
  function Et() {
    e(3, Gt = !0), e(4, Tt = "#4CAF50"), e(5, sr = 36), e(6, Te = "#ffffff"), e(7, jt = "#cccccc"), e(8, lr = "#1B2630"), e(9, rr = 16), e(13, nr = 700), e(10, pr = 40), e(37, vr = "#F5F5F5"), e(38, or = "#E0E0E0"), e(39, ir = 1), e(40, Ht = 999), e(41, mt = 6), e(11, Qt = 0), e(12, ae = 99), e(42, wr = 1);
  }
  function Ir() {
    if (!Gt) return;
    const dt = Math.min(T + wr, ae);
    dt !== T && (i.setValue(dt), $e.json.on_increment_actions && $e.execAnyActions($e.json.on_increment_actions), $e.json.on_value_change_actions && $e.execAnyActions($e.json.on_value_change_actions));
  }
  function Pr() {
    if (!Gt) return;
    const dt = Math.max(T - wr, Qt);
    dt !== T && (i.setValue(dt), $e.json.on_decrement_actions && $e.execAnyActions($e.json.on_decrement_actions), $e.json.on_value_change_actions && $e.execAnyActions($e.json.on_value_change_actions));
  }
  let ur;
  return sn(() => {
    ur && (Ft.unregisterFocusable(ur), e(43, ur = void 0));
  }), t.$$set = (dt) => {
    "componentContext" in dt && e(0, $e = dt.componentContext), "layoutParams" in dt && e(1, Le = dt.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(45, n = $e.origJson), t.$$.dirty[1] & /*origJson*/
    16384 && n && Et(), t.$$.dirty[0] & /*componentContext*/
    1 && e(44, o = $e.json.counter_value_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*variable*/
    8192 && M(e(16, i = o && ($e.getVariable(o, "integer") || Ft.awaitGlobalVariable(o, "integer", 0)) || Xn("temp", "integer", 0))), t.$$.dirty[0] & /*componentContext*/
    1 && Ie(e(34, s = $e.getDerivedFromVars($e.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && Ee(e(33, a = $e.getDerivedFromVars($e.json.button_color))), t.$$.dirty[0] & /*componentContext*/
    1 && It(e(32, l = $e.getDerivedFromVars($e.json.button_size))), t.$$.dirty[0] & /*componentContext*/
    1 && lt(e(31, u = $e.getDerivedFromVars($e.json.icon_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ut(e(30, c = $e.getDerivedFromVars($e.json.disabled_button_color))), t.$$.dirty[0] & /*componentContext*/
    1 && ze(e(29, f = $e.getDerivedFromVars($e.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Z(e(28, _ = $e.getDerivedFromVars($e.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && it(e(27, h = $e.getDerivedFromVars($e.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && ct(e(26, m = $e.getDerivedFromVars($e.json.value_width))), t.$$.dirty[0] & /*componentContext*/
    1 && Be(e(25, p = $e.getDerivedFromVars($e.json.background_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ue(e(24, w = $e.getDerivedFromVars($e.json.border_color))), t.$$.dirty[0] & /*componentContext*/
    1 && de(e(23, k = $e.getDerivedFromVars($e.json.border_width))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(22, N = $e.getDerivedFromVars($e.json.corner_radius))), t.$$.dirty[0] & /*componentContext*/
    1 && ye(e(21, H = $e.getDerivedFromVars($e.json.padding))), t.$$.dirty[0] & /*componentContext*/
    1 && Ke(e(20, z = $e.getDerivedFromVars($e.json.min_value))), t.$$.dirty[0] & /*componentContext*/
    1 && me(e(19, oe = $e.getDerivedFromVars($e.json.max_value))), t.$$.dirty[0] & /*componentContext*/
    1 && be(e(18, _e = $e.getDerivedFromVars($e.json.step))), t.$$.dirty[0] & /*isEnabled*/
    8 | t.$$.dirty[2] & /*$jsonIsEnabled*/
    2 && e(3, Gt = Zr(Ze, Gt)), t.$$.dirty[0] & /*buttonColor*/
    16 | t.$$.dirty[2] & /*$jsonButtonColor*/
    1 && e(4, Tt = gr(Xt, 1, Tt)), t.$$.dirty[0] & /*buttonSize*/
    32 | t.$$.dirty[1] & /*$jsonButtonSize*/
    1073741824 && e(5, sr = io(K, sr)), t.$$.dirty[0] & /*iconColor*/
    64 | t.$$.dirty[1] & /*$jsonIconColor*/
    536870912 && e(6, Te = gr(Vt, 1, Te)), t.$$.dirty[0] & /*disabledButtonColor*/
    128 | t.$$.dirty[1] & /*$jsonDisabledButtonColor*/
    268435456 && e(7, jt = gr(F, 1, jt)), t.$$.dirty[0] & /*textColor*/
    256 | t.$$.dirty[1] & /*$jsonTextColor*/
    134217728 && e(8, lr = gr(pe, 1, lr)), t.$$.dirty[0] & /*fontSize*/
    512 | t.$$.dirty[1] & /*$jsonFontSize*/
    67108864 && e(9, rr = io(Pt, rr)), t.$$.dirty[1] & /*$jsonFontWeight*/
    33554432) {
      const dt = nt;
      if (typeof dt == "string")
        if (dt in kr)
          e(13, nr = kr[dt]);
        else {
          const At = parseInt(dt, 10);
          !Number.isNaN(At) && At > 0 && e(13, nr = At);
        }
      else typeof dt == "number" && dt > 0 && e(13, nr = dt);
    }
    if (t.$$.dirty[0] & /*valueWidth*/
    1024 | t.$$.dirty[1] & /*$jsonValueWidth*/
    16777216 && e(10, pr = io(Ne, pr)), t.$$.dirty[1] & /*$jsonBackgroundColor, backgroundColor*/
    8388672 && e(37, vr = gr(Ge, 1, vr)), t.$$.dirty[1] & /*$jsonBorderColor, borderColor*/
    4194432 && e(38, or = gr(ne, 1, or)), t.$$.dirty[1] & /*$jsonBorderWidth, borderWidth*/
    2097408 && e(39, ir = io(fe, ir)), t.$$.dirty[1] & /*$jsonCornerRadius, cornerRadius*/
    1049088 && e(40, Ht = io(Me, Ht)), t.$$.dirty[1] & /*$jsonPadding, padding*/
    525312 && e(41, mt = io(Ye, mt)), t.$$.dirty[0] & /*minValue, maxValue*/
    6144 | t.$$.dirty[1] & /*$jsonMinValue, $jsonMaxValue*/
    393216 && (e(11, Qt = io(Fe, Qt)), e(12, ae = io(Ae, ae))), t.$$.dirty[1] & /*$jsonStep, step*/
    67584) {
      const dt = io(W, wr);
      dt > 0 && e(42, wr = dt);
    }
    if (t.$$.dirty[0] & /*minValue, maxValue*/
    6144 | t.$$.dirty[1] & /*$valueVariable*/
    32768 && e(17, T = Fo(E || 0, Qt, ae)), t.$$.dirty[0] & /*componentContext, hasError*/
    5 | t.$$.dirty[1] & /*variable*/
    8192) {
      let dt = !1;
      o ? Oe.hasAction() && (dt = !0, $e.logError(X(new Error('Cannot show "counter" inside component with an action')))) : (dt = !0, $e.logError(X(new Error('Missing "counter_value_variable" in "counter"')))), yt !== dt && e(2, yt = dt);
    }
    t.$$.dirty[0] & /*isEnabled*/
    8 && e(15, Y = { disabled: !Gt }), t.$$.dirty[0] & /*iconColor*/
    64 | t.$$.dirty[1] & /*backgroundColor, borderColor, borderWidth, cornerRadius, padding*/
    1984 && e(14, le = {
      "--divkit-counter-bg": vr,
      "--divkit-counter-border-color": or,
      "--divkit-counter-border-width": ge(ir),
      "--divkit-counter-radius": ge(Ht),
      "--divkit-counter-padding": ge(mt),
      "--divkit-counter-icon-color": Te
    }), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*prevId*/
    4096 && $e.json && (ur && (Ft.unregisterFocusable(ur), e(43, ur = void 0)), $e.id && !$e.fakeElement && (e(43, ur = $e.id), Ft.registerFocusable(ur, {
      focus() {
      }
    })));
  }, [
    $e,
    Le,
    yt,
    Gt,
    Tt,
    sr,
    Te,
    jt,
    lr,
    rr,
    pr,
    Qt,
    ae,
    nr,
    le,
    Y,
    i,
    T,
    _e,
    oe,
    z,
    H,
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
    Ir,
    Pr,
    vr,
    or,
    ir,
    Ht,
    mt,
    wr,
    ur,
    o,
    n,
    E,
    W,
    Ae,
    Fe,
    Ye,
    Me,
    fe,
    ne,
    Ge,
    Ne,
    nt,
    Pt,
    pe,
    F,
    Vt,
    K,
    Xt,
    Ze
  ];
}
class rv extends Br {
  constructor(r) {
    super(), Or(this, r, tv, ev, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1]);
  }
}
const nv = "appkit-webview__frame", $s = {
  webview__frame: nv,
  "webview__aspect-wrapper": "appkit-webview__aspect-wrapper"
};
function ov(t) {
  let r, e;
  return r = new In({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function iv(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht("webview", $s, {}),
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
      $$slots: { default: [av] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function sv(t) {
  let r, e, n, o, i, s;
  return {
    c() {
      r = Pe("iframe"), g(r, "class", $s.webview__frame), Qn(r.src, e = /*url*/
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
      J(a, r, l), i || (s = [
        xe(
          r,
          "load",
          /*onLoad*/
          t[15]
        ),
        xe(
          r,
          "error",
          /*onError*/
          t[16]
        )
      ], i = !0);
    },
    p(a, l) {
      l & /*url*/
      4 && !Qn(r.src, e = /*url*/
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
      a && G(r), i = !1, Rr(s);
    }
  };
}
function lv(t) {
  let r, e, n, o, i, s = `${/*aspectPaddingBottom*/
  t[6]}%`, a, l;
  return {
    c() {
      r = Pe("div"), e = Pe("iframe"), g(e, "class", $s.webview__frame), Qn(e.src, n = /*url*/
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
      t[4] ? "auto" : "no"), g(e, "title", "webview"), g(r, "class", $s["webview__aspect-wrapper"]), I(r, "padding-bottom", s);
    },
    m(u, c) {
      J(u, r, c), bt(r, e), a || (l = [
        xe(
          e,
          "load",
          /*onLoad*/
          t[15]
        ),
        xe(
          e,
          "error",
          /*onError*/
          t[16]
        )
      ], a = !0);
    },
    p(u, c) {
      c & /*url*/
      4 && !Qn(e.src, n = /*url*/
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
      u[6]}%`) && I(r, "padding-bottom", s);
    },
    d(u) {
      u && G(r), a = !1, Rr(l);
    }
  };
}
function av(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[6] !== "0" ? lv : sv
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = er();
    },
    m(i, s) {
      o.m(i, s), J(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && G(r), o.d(i);
    }
  };
}
function uv(t) {
  let r, e, n, o;
  const i = [iv, ov], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[5] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = er();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, [u]) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (fr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function cv(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _ = v, h = () => (_(), _ = C(u, (fe) => e(20, f = fe)), u), m, p = v, w = () => (p(), p = C(l, (fe) => e(21, m = fe)), l), k, N = v, H = () => (N(), N = C(a, (fe) => e(22, k = fe)), a), z, oe = v, _e = () => (oe(), oe = C(s, (fe) => e(23, z = fe)), s), T, Y = v, le = () => (Y(), Y = C(i, (fe) => e(24, T = fe)), i), E, D = v, M = () => (D(), D = C(o, (fe) => e(25, E = fe)), o), W, q = v, be = () => (q(), q = C(n, (fe) => e(26, W = fe)), n);
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => Y()), t.$$.on_destroy.push(() => D()), t.$$.on_destroy.push(() => q());
  let { componentContext: Ae } = r, { layoutParams: Ce = void 0 } = r;
  Tr(Yr);
  let me = !1, Fe, Q, Ke = !1, Ye = !0, Xe = !1, ye = !1, Me = "0";
  function ce() {
    Ae.execAnyActions(Ae.json.on_load_actions);
  }
  function he() {
    Ae.execAnyActions(Ae.json.on_error_actions);
  }
  return t.$$set = (fe) => {
    "componentContext" in fe && e(0, Ae = fe.componentContext), "layoutParams" in fe && e(1, Ce = fe.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*componentContext*/
    1 && be(e(14, n = Ae.getDerivedFromVars(Ae.json.url))), t.$$.dirty & /*componentContext*/
    1 && M(e(13, o = Ae.getDerivedFromVars(Ae.json.html))), t.$$.dirty & /*componentContext*/
    1 && le(e(12, i = Ae.getDerivedFromVars(Ae.json.javascript_enabled))), t.$$.dirty & /*componentContext*/
    1 && _e(e(11, s = Ae.getDerivedFromVars(Ae.json.allow_scrolling))), t.$$.dirty & /*componentContext*/
    1 && H(e(10, a = Ae.getDerivedFromVars(Ae.json.allow_navigation))), t.$$.dirty & /*componentContext*/
    1 && w(e(9, l = Ae.getDerivedFromVars(Ae.json.scale_to_fit))), t.$$.dirty & /*componentContext*/
    1 && h(e(8, u = Ae.getDerivedFromVars(Ae.json.aspect))), t.$$.dirty & /*$jsonUrl, $jsonHtml, url, html, componentContext*/
    100663309 && (e(2, Fe = typeof W == "string" ? W : void 0), e(3, Q = typeof E == "string" ? E : void 0), !Fe && !Q ? (e(5, me = !0), Ae.logError(X(new Error('Missing "url" or "html" in "webview"')))) : e(5, me = !1)), t.$$.dirty & /*$jsonJsEnabled, javascriptEnabled*/
    16908288 && e(17, Ke = Zr(T, Ke)), t.$$.dirty & /*$jsonAllowScrolling, allowScrolling*/
    8388624 && e(4, Ye = Zr(z, Ye)), t.$$.dirty & /*$jsonAllowNavigation, allowNavigation*/
    4456448 && e(18, Xe = Zr(k, Xe)), t.$$.dirty & /*$jsonScaleToFit, scaleToFit*/
    2621440 && e(19, ye = Zr(m, ye)), t.$$.dirty & /*$jsonAspect*/
    1048576) {
      const fe = f == null ? void 0 : f.ratio;
      fe && Pn(fe) ? e(6, Me = (100 / Number(fe)).toFixed(2)) : e(6, Me = "0");
    }
    t.$$.dirty & /*javascriptEnabled, allowNavigation*/
    393216 && e(7, c = [
      "allow-same-origin",
      ...Ke ? ["allow-scripts"] : [],
      ...Xe ? ["allow-popups"] : []
    ].join(" "));
  }, [
    Ae,
    Ce,
    Fe,
    Q,
    Ye,
    me,
    Me,
    c,
    u,
    l,
    a,
    s,
    i,
    o,
    n,
    ce,
    he,
    Ke,
    Xe,
    ye,
    f,
    m,
    k,
    z,
    T,
    E,
    W
  ];
}
class fv extends Br {
  constructor(r) {
    super(), Or(this, r, cv, uv, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const el = {
  "google-map__frame": "appkit-google-map__frame",
  "google-map__aspect-wrapper": "appkit-google-map__aspect-wrapper"
};
function dv(t) {
  let r, e;
  return r = new In({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function _v(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht("google-map", el, {}),
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
      $$slots: { default: [hv] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function pv(t) {
  let r;
  return {
    c() {
      r = Pe("iframe"), g(r, "class", el["google-map__frame"]), g(
        r,
        "srcdoc",
        /*iframeDoc*/
        t[4]
      ), g(r, "title", "Google Map"), g(r, "sandbox", "allow-scripts allow-same-origin");
    },
    m(e, n) {
      J(e, r, n), t[35](r);
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
      e && G(r), t[35](null);
    }
  };
}
function gv(t) {
  let r, e, n = `${/*aspectPaddingBottom*/
  t[3]}%`;
  return {
    c() {
      r = Pe("div"), e = Pe("iframe"), g(e, "class", el["google-map__frame"]), g(
        e,
        "srcdoc",
        /*iframeDoc*/
        t[4]
      ), g(e, "title", "Google Map"), g(e, "sandbox", "allow-scripts allow-same-origin"), g(r, "class", el["google-map__aspect-wrapper"]), I(r, "padding-bottom", n);
    },
    m(o, i) {
      J(o, r, i), bt(r, e), t[34](e);
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
      o[3]}%`) && I(r, "padding-bottom", n);
    },
    d(o) {
      o && G(r), t[34](null);
    }
  };
}
function hv(t) {
  let r;
  function e(i, s) {
    return (
      /*aspectPaddingBottom*/
      i[3] !== "0" ? gv : pv
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = er();
    },
    m(i, s) {
      o.m(i, s), J(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && G(r), o.d(i);
    }
  };
}
function mv(t) {
  let r, e, n, o;
  const i = [_v, dv], s = [];
  function a(l, u) {
    return !/*hasError*/
    l[2] && /*iframeDoc*/
    l[4] ? 0 : 1;
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = er();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (fr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function sa(t) {
  return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function bv(t) {
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
function yv(t) {
  return t.map((r, e) => {
    const n = Number(r.latitude) || 0, o = Number(r.longitude) || 0, i = r.title ? sa(String(r.title)) : "", s = r.color ? String(r.color) : "", a = r.on_click_actions && r.on_click_actions.length > 0;
    let l = "";
    s && (l = `,icon:{path:google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,fillColor:'${sa(s)}',fillOpacity:1,strokeColor:'#333',strokeWeight:1,scale:6,anchor:new google.maps.Point(0,0)}`);
    const u = a ? `m.addListener('click',function(){window.parent.postMessage({type:'marker_click',index:${e}},'*');});` : "";
    return `(function(){var m=new google.maps.Marker({position:{lat:${n},lng:${o}},map:map,title:'${i}'${l}});${u}})();`;
  }).join(`
`);
}
function wv(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m = v, p = () => (m(), m = C(_, (Z) => e(24, h = Z)), _), w, k = v, N = () => (k(), k = C(l, (Z) => e(25, w = Z)), l), H, z = v, oe = () => (z(), z = C(a, (Z) => e(26, H = Z)), a), _e, T = v, Y = () => (T(), T = C(f, (Z) => e(27, _e = Z)), f), le, E = v, D = () => (E(), E = C(u, (Z) => e(28, le = Z)), u), M, W = v, q = () => (W(), W = C(c, (Z) => e(29, M = Z)), c), be, Ae = v, Ce = () => (Ae(), Ae = C(s, (Z) => e(30, be = Z)), s), me, Fe = v, Q = () => (Fe(), Fe = C(i, (Z) => e(31, me = Z)), i), Ke, Ye = v, Xe = () => (Ye(), Ye = C(o, (Z) => e(32, Ke = Z)), o), ye, Me = v, ce = () => (Me(), Me = C(n, (Z) => e(33, ye = Z)), n);
  t.$$.on_destroy.push(() => m()), t.$$.on_destroy.push(() => k()), t.$$.on_destroy.push(() => z()), t.$$.on_destroy.push(() => T()), t.$$.on_destroy.push(() => E()), t.$$.on_destroy.push(() => W()), t.$$.on_destroy.push(() => Ae()), t.$$.on_destroy.push(() => Fe()), t.$$.on_destroy.push(() => Ye()), t.$$.on_destroy.push(() => Me());
  let { componentContext: he } = r, { layoutParams: fe = void 0 } = r;
  Tr(Yr);
  let re = !1, de = "0", ne = 0, we = 0, Ue = 10, Ge = "normal", $ = !0, Be = !0, Ne, ot = [], ct = "", nt, kt = !1;
  function it(Z) {
    if (!nt || Z.source !== nt.contentWindow) return;
    const pe = Z.data;
    if (!(!pe || typeof pe != "object")) {
      if (pe.type === "map_ready" && !kt)
        kt = !0, he.execAnyActions(he.json.on_ready_actions);
      else if (pe.type === "map_error")
        he.execAnyActions(he.json.on_error_actions);
      else if (pe.type === "marker_click" && typeof pe.index == "number") {
        const st = ot[pe.index];
        st != null && st.on_click_actions && he.execAnyActions(st.on_click_actions);
      }
    }
  }
  xn(() => {
    window.addEventListener("message", it);
  }), sn(() => {
    window.removeEventListener("message", it);
  });
  function Pt(Z) {
    Dr[Z ? "unshift" : "push"](() => {
      nt = Z, e(5, nt);
    });
  }
  function ft(Z) {
    Dr[Z ? "unshift" : "push"](() => {
      nt = Z, e(5, nt);
    });
  }
  return t.$$set = (Z) => {
    "componentContext" in Z && e(0, he = Z.componentContext), "layoutParams" in Z && e(1, fe = Z.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && ce(e(15, n = he.getDerivedFromVars(he.json.latitude))), t.$$.dirty[0] & /*componentContext*/
    1 && Xe(e(14, o = he.getDerivedFromVars(he.json.longitude))), t.$$.dirty[0] & /*componentContext*/
    1 && Q(e(13, i = he.getDerivedFromVars(he.json.zoom))), t.$$.dirty[0] & /*componentContext*/
    1 && Ce(e(12, s = he.getDerivedFromVars(he.json.map_type))), t.$$.dirty[0] & /*componentContext*/
    1 && oe(e(11, a = he.getDerivedFromVars(he.json.allow_zoom))), t.$$.dirty[0] & /*componentContext*/
    1 && N(e(10, l = he.getDerivedFromVars(he.json.allow_scroll))), t.$$.dirty[0] & /*componentContext*/
    1 && D(e(9, u = he.getDerivedFromVars(he.json.api_key))), t.$$.dirty[0] & /*componentContext*/
    1 && q(e(8, c = he.getDerivedFromVars(he.json.api_key_web))), t.$$.dirty[0] & /*componentContext*/
    1 && Y(e(7, f = he.getDerivedFromVars(he.json.markers))), t.$$.dirty[0] & /*componentContext*/
    1 && p(e(6, _ = he.getDerivedFromVars(he.json.aspect))), t.$$.dirty[0] & /*$jsonMapType, $jsonApiKeyWeb, $jsonApiKey, $jsonMarkers, resolvedApiKey, componentContext*/
    2017460225 | t.$$.dirty[1] & /*$jsonLatitude, $jsonLongitude, $jsonZoom*/
    7) {
      e(16, ne = typeof ye == "number" ? ye : 0), e(17, we = typeof Ke == "number" ? Ke : 0), e(18, Ue = typeof me == "number" ? me : 10), e(19, Ge = typeof be == "string" ? be : "normal");
      const Z = M, pe = le;
      e(22, Ne = typeof Z == "string" ? Z : typeof pe == "string" ? pe : void 0), e(23, ot = Array.isArray(_e) ? _e : []), Ne ? e(2, re = !1) : (e(2, re = !0), he.logError(X(new Error('Missing "api_key" or "api_key_web" in "google_map"'))));
    }
    if (t.$$.dirty[0] & /*$jsonAllowZoom, allowZoom*/
    68157440 && e(20, $ = Zr(H, $)), t.$$.dirty[0] & /*$jsonAllowScroll, allowScroll*/
    35651584 && e(21, Be = Zr(w, Be)), t.$$.dirty[0] & /*$jsonAspect*/
    16777216) {
      const Z = h == null ? void 0 : h.ratio;
      Z && Pn(Z) ? e(3, de = (100 / Number(Z)).toFixed(2)) : e(3, de = "0");
    }
    if (t.$$.dirty[0] & /*resolvedApiKey, resolvedMarkers, mapType, allowScroll, allowZoom, latitude, longitude, zoom*/
    16711680)
      if (Ne) {
        const Z = yv(ot), pe = bv(Ge), st = Be || $ ? "auto" : "none";
        e(4, ct = `<!DOCTYPE html>
<html><head>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>html,body,#map{width:100%;height:100%;margin:0;padding:0;}</style>
</head><body>
<div id="map"></div>
<script>
function initMap(){
var map=new google.maps.Map(document.getElementById('map'),{
center:{lat:${ne},lng:${we}},
zoom:${Math.round(Ue)},
mapTypeId:'${pe}',
gestureHandling:'${st}',
zoomControl:${$},
scrollwheel:${Be},
draggable:${Be},
fullscreenControl:false,
streetViewControl:false
});
${Z}
google.maps.event.addListenerOnce(map,'idle',function(){
window.parent.postMessage({type:'map_ready'},'*');
});
}
<\/script>
<script src="https://maps.googleapis.com/maps/api/js?key=${sa(Ne)}&callback=initMap" async defer
onerror="window.parent.postMessage({type:'map_error'},'*')"><\/script>
</body></html>`);
      } else
        e(4, ct = "");
  }, [
    he,
    fe,
    re,
    de,
    ct,
    nt,
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
    ne,
    we,
    Ue,
    Ge,
    $,
    Be,
    Ne,
    ot,
    h,
    w,
    H,
    _e,
    le,
    M,
    be,
    me,
    Ke,
    ye,
    Pt,
    ft
  ];
}
class kv extends Br {
  constructor(r) {
    super(), Or(this, r, wv, mv, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1]);
  }
}
function Mf(t, r, e) {
  const n = t.slice();
  return n[11] = r[e], n;
}
function vv(t) {
  let r, e;
  return r = new In({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function jv(t) {
  let r, e;
  return r = new hn({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      ),
      layoutParams: (
        /*layoutParams*/
        t[1]
      ),
      $$slots: { default: [Cv] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Pf(t) {
  let r, e = [
    /*templateAttrs*/
    t[8]
  ], n = {};
  for (let o = 0; o < e.length; o += 1)
    n = jo(n, e[o]);
  return {
    c() {
      r = Pe("template"), qo(r, n);
    },
    m(o, i) {
      J(o, r, i), r.content.innerHTML = /*templateContent*/
      t[7];
    },
    p(o, i) {
      i & /*templateContent*/
      128 && (r.content.innerHTML = /*templateContent*/
      o[7]), qo(r, n = No(e, [i & /*templateAttrs*/
      256 && /*templateAttrs*/
      o[8]]));
    },
    d(o) {
      o && G(r);
    }
  };
}
function Nf(t) {
  let r = (
    /*jsonItems*/
    t[5]
  ), e, n, o = Lf(t);
  return {
    c() {
      o.c(), e = er();
    },
    m(i, s) {
      o.m(i, s), J(i, e, s), n = !0;
    },
    p(i, s) {
      s & /*jsonItems*/
      32 && Sr(r, r = /*jsonItems*/
      i[5]) ? (fr(), x(o, 1, 1, v), dr(), o = Lf(i), o.c(), L(o, 1), o.m(e.parentNode, e)) : o.p(i, s);
    },
    i(i) {
      n || (L(o), n = !0);
    },
    o(i) {
      x(o), n = !1;
    },
    d(i) {
      i && G(e), o.d(i);
    }
  };
}
function zf(t) {
  let r, e;
  return r = new Kn({
    props: { componentContext: (
      /*item*/
      t[11]
    ) }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*items*/
      8 && (i.componentContext = /*item*/
      n[11]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Lf(t) {
  let r, e, n = ar(
    /*items*/
    t[3]
  ), o = [];
  for (let s = 0; s < n.length; s += 1)
    o[s] = zf(Mf(t, n, s));
  const i = (s) => x(o[s], 1, 1, () => {
    o[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < o.length; s += 1)
        o[s].c();
      r = er();
    },
    m(s, a) {
      for (let l = 0; l < o.length; l += 1)
        o[l] && o[l].m(s, a);
      J(s, r, a), e = !0;
    },
    p(s, a) {
      if (a & /*items*/
      8) {
        n = ar(
          /*items*/
          s[3]
        );
        let l;
        for (l = 0; l < n.length; l += 1) {
          const u = Mf(s, n, l);
          o[l] ? (o[l].p(u, a), L(o[l], 1)) : (o[l] = zf(u), o[l].c(), L(o[l], 1), o[l].m(r.parentNode, r));
        }
        for (fr(), l = n.length; l < o.length; l += 1)
          i(l);
        dr();
      }
    },
    i(s) {
      if (!e) {
        for (let a = 0; a < n.length; a += 1)
          L(o[a]);
        e = !0;
      }
    },
    o(s) {
      o = o.filter(Boolean);
      for (let a = 0; a < o.length; a += 1)
        x(o[a]);
      e = !1;
    },
    d(s) {
      s && G(r), on(o, s);
    }
  };
}
function Ll(t) {
  let r, e, n, o = (
    /*templateContent*/
    t[7] && Pf(t)
  ), i = !/*hasItemsError*/
  t[4] && /*jsonItems*/
  t[5] && Nf(t), s = [
    /*componentContext*/
    t[0].json.custom_props || {}
  ], a = {};
  for (let l = 0; l < s.length; l += 1)
    a = jo(a, s[l]);
  return {
    c() {
      r = Pe(
        /*desc*/
        t[2].element
      ), o && o.c(), e = hr(), i && i.c(), ri(
        /*desc*/
        t[2].element
      )(r, a);
    },
    m(l, u) {
      J(l, r, u), o && o.m(r, null), bt(r, e), i && i.m(r, null), t[9](r), n = !0;
    },
    p(l, u) {
      /*templateContent*/
      l[7] ? o ? o.p(l, u) : (o = Pf(l), o.c(), o.m(r, e)) : o && (o.d(1), o = null), !/*hasItemsError*/
      l[4] && /*jsonItems*/
      l[5] ? i ? (i.p(l, u), u & /*hasItemsError, jsonItems*/
      48 && L(i, 1)) : (i = Nf(l), i.c(), L(i, 1), i.m(r, null)) : i && (fr(), x(i, 1, 1, () => {
        i = null;
      }), dr()), ri(
        /*desc*/
        l[2].element
      )(r, a = No(s, [
        u & /*componentContext*/
        1 && /*componentContext*/
        (l[0].json.custom_props || {})
      ]));
    },
    i(l) {
      n || (L(i), n = !0);
    },
    o(l) {
      x(i), n = !1;
    },
    d(l) {
      l && G(r), o && o.d(), i && i.d(), t[9](null);
    }
  };
}
function Cv(t) {
  let r = (
    /*desc*/
    t[2].element
  ), e, n = (
    /*desc*/
    t[2].element && Ll(t)
  );
  return {
    c() {
      n && n.c(), e = er();
    },
    m(o, i) {
      n && n.m(o, i), J(o, e, i);
    },
    p(o, i) {
      /*desc*/
      o[2].element ? r ? Sr(
        r,
        /*desc*/
        o[2].element
      ) ? (n.d(1), n = Ll(o), r = /*desc*/
      o[2].element, n.c(), n.m(e.parentNode, e)) : n.p(o, i) : (n = Ll(o), r = /*desc*/
      o[2].element, n.c(), n.m(e.parentNode, e)) : r && (n.d(1), n = null, r = /*desc*/
      o[2].element);
    },
    i: v,
    o(o) {
      x(n, o);
    },
    d(o) {
      o && G(e), n && n.d(o);
    }
  };
}
function Ev(t) {
  let r, e, n, o;
  const i = [jv, vv], s = [];
  function a(l, u) {
    return (
      /*desc*/
      l[2] ? 0 : 1
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = er();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, [u]) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (fr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function Av(t, r, e) {
  let n, { componentContext: o } = r, { layoutParams: i = void 0 } = r;
  const s = Tr(Yr);
  let a, l = null, u = "", c = {}, f = [], _ = !1;
  xn(() => {
    if (a && "divKitApiCallback" in a && typeof a.divKitApiCallback == "function") {
      const m = s.getExtensionContext(o);
      a.divKitApiCallback(m);
    }
  }), sn(() => {
    f.forEach((m) => {
      m.destroy();
    });
  });
  function h(m) {
    Dr[m ? "unshift" : "push"](() => {
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
          const p = s.getExtensionContext(o), w = /* @__PURE__ */ new Map();
          for (const [k, N] of p.variables)
            w.set(k, N.getValue());
          e(7, u = l.template({
            props: o.json.custom_props,
            variables: w
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
    57 && (f.forEach((p) => {
      p.destroy();
    }), e(3, f = (!_ && n || []).map((p, w) => o.produceChildContext(p, { path: w }))));
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
class Sv extends Br {
  constructor(r) {
    super(), Or(this, r, Av, Ev, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const Vv = "appkit-breadcrumb", Fv = "appkit-breadcrumb__list", Dv = "appkit-breadcrumb__item", Iv = "appkit-breadcrumb__label", Tv = "appkit-breadcrumb__label_link", Mv = "appkit-breadcrumb__separator", yi = {
  breadcrumb: Vv,
  breadcrumb__list: Fv,
  breadcrumb__item: Dv,
  breadcrumb__label: Iv,
  breadcrumb__label_link: Tv,
  breadcrumb__separator: Mv
};
function Of(t, r, e) {
  const n = t.slice();
  return n[26] = r[e], n[28] = e, n;
}
function Pv(t) {
  let r, e;
  return r = new In({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Nv(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht("breadcrumb", yi, {}),
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
      $$slots: { default: [Ov] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function zv(t) {
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
      r = Pe("a"), n = On(e), i = hr(), s = Pe("span"), a = On(
        /*separator*/
        t[2]
      ), g(r, "class", yi.breadcrumb__label + " " + yi.breadcrumb__label_link), g(r, "href", o = Rf(
        /*crumb*/
        t[26]
      )), g(s, "class", yi.breadcrumb__separator), g(s, "aria-hidden", "true");
    },
    m(f, _) {
      J(f, r, _), bt(r, n), J(f, i, _), J(f, s, _), bt(s, a), l || (u = xe(r, "click", c), l = !0);
    },
    p(f, _) {
      t = f, _ & /*crumbs*/
      16 && e !== (e = /*crumb*/
      t[26].title + "") && Jn(n, e), _ & /*crumbs*/
      16 && o !== (o = Rf(
        /*crumb*/
        t[26]
      )) && g(r, "href", o), _ & /*separator*/
      4 && Jn(
        a,
        /*separator*/
        t[2]
      );
    },
    d(f) {
      f && (G(r), G(i), G(s)), l = !1, u();
    }
  };
}
function Lv(t) {
  let r, e = (
    /*crumb*/
    t[26].title + ""
  ), n;
  return {
    c() {
      r = Pe("span"), n = On(e), g(r, "class", yi.breadcrumb__label), g(r, "aria-current", "page");
    },
    m(o, i) {
      J(o, r, i), bt(r, n);
    },
    p(o, i) {
      i & /*crumbs*/
      16 && e !== (e = /*crumb*/
      o[26].title + "") && Jn(n, e);
    },
    d(o) {
      o && G(r);
    }
  };
}
function Bf(t) {
  let r, e;
  function n(s, a) {
    return (
      /*index*/
      s[28] === /*crumbs*/
      s[4].length - 1 ? Lv : zv
    );
  }
  let o = n(t), i = o(t);
  return {
    c() {
      r = Pe("li"), i.c(), e = hr(), g(r, "class", yi.breadcrumb__item);
    },
    m(s, a) {
      J(s, r, a), i.m(r, null), bt(r, e);
    },
    p(s, a) {
      o === (o = n(s)) && i ? i.p(s, a) : (i.d(1), i = o(s), i && (i.c(), i.m(r, e)));
    },
    d(s) {
      s && G(r), i.d();
    }
  };
}
function Ov(t) {
  let r, e, n = ar(
    /*crumbs*/
    t[4]
  ), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Bf(Of(t, n, i));
  return {
    c() {
      r = Pe("nav"), e = Pe("ol");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(e, "class", yi.breadcrumb__list), g(r, "aria-label", "breadcrumb");
    },
    m(i, s) {
      J(i, r, s), bt(r, e);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(e, null);
    },
    p(i, s) {
      if (s & /*crumbs, separator, getHref, handleCrumbClick*/
      2068) {
        n = ar(
          /*crumbs*/
          i[4]
        );
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = Of(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Bf(l), o[a].c(), o[a].m(e, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
    },
    d(i) {
      i && G(r), on(o, i);
    }
  };
}
function Bv(t) {
  let r, e, n, o;
  const i = [Nv, Pv], s = [];
  function a(l, u) {
    return 0;
  }
  return ~(r = a()) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = er();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, [u]) {
      e && e.p(l, u);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function Rf(t) {
  var r;
  return (r = t.action) != null && r.url && !t.action.url.startsWith("div-action://") ? t.action.url : "#";
}
function Rv(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h = v, m = () => (h(), h = C(u, (Me) => e(16, _ = Me)), u), p, w = v, k = () => (w(), w = C(l, (Me) => e(17, p = Me)), l), N, H = v, z = () => (H(), H = C(a, (Me) => e(18, N = Me)), a), oe, _e = v, T = () => (_e(), _e = C(s, (Me) => e(19, oe = Me)), s), Y, le = v, E = () => (le(), le = C(i, (Me) => e(20, Y = Me)), i), D, M = v, W = () => (M(), M = C(o, (Me) => e(21, D = Me)), o);
  t.$$.on_destroy.push(() => h()), t.$$.on_destroy.push(() => w()), t.$$.on_destroy.push(() => H()), t.$$.on_destroy.push(() => _e()), t.$$.on_destroy.push(() => le()), t.$$.on_destroy.push(() => M());
  let { componentContext: q } = r, { layoutParams: be = void 0 } = r;
  const Ae = Tr(Yr);
  let Ce = "/", me = "#0077CC", Fe = "#111111", Q = 14;
  function Ke() {
    e(2, Ce = "/"), e(12, me = "#0077CC"), e(13, Fe = "#111111"), e(14, Q = 14);
  }
  function Ye(Me, ce) {
    const he = q.json.item_builder;
    if (he && Array.isArray(ce) && Array.isArray(he.prototypes)) {
      const fe = [];
      return ce.forEach((re, de) => {
        if (re === null || typeof re != "object")
          return;
        const ne = Ae.preparePrototypeVariables(he.data_element_name || "it", re, de);
        for (let we = 0; we < he.prototypes.length; ++we) {
          const Ue = he.prototypes[we];
          if (!Ue.title || Ue.selector !== void 0 && !q.getJsonWithVars(Ue.selector, ne))
            continue;
          const $ = { title: q.getJsonWithVars(Ue.title, ne) };
          if (Ue.action) {
            const Be = q.getJsonWithVars(Ue.action, ne);
            Be && ($.action = Be);
          }
          fe.push($);
          break;
        }
      }), fe;
    }
    return Array.isArray(Me) ? Me : q.json.crumbs || [];
  }
  function Xe(Me, ce) {
    ce.action && (Me.preventDefault(), q.execAnyActions([ce.action]));
  }
  const ye = (Me, ce) => Xe(ce, Me);
  return t.$$set = (Me) => {
    "componentContext" in Me && e(0, q = Me.componentContext), "layoutParams" in Me && e(1, be = Me.layoutParams);
  }, t.$$.update = () => {
    var Me, ce, he;
    t.$$.dirty & /*componentContext*/
    1 && e(15, n = q.origJson), t.$$.dirty & /*origJson*/
    32768 && n && Ke(), t.$$.dirty & /*componentContext*/
    1 && W(e(10, o = q.getDerivedFromVars(q.json.separator))), t.$$.dirty & /*componentContext*/
    1 && E(e(9, i = q.getDerivedFromVars(q.json.item_text_color))), t.$$.dirty & /*componentContext*/
    1 && T(e(8, s = q.getDerivedFromVars(q.json.active_text_color))), t.$$.dirty & /*componentContext*/
    1 && z(e(7, a = q.getDerivedFromVars(q.json.item_font_size))), t.$$.dirty & /*componentContext*/
    1 && k(e(6, l = q.getDerivedFromVars(q.json.crumbs))), t.$$.dirty & /*componentContext*/
    1 && m(e(5, u = typeof ((Me = q.json.item_builder) == null ? void 0 : Me.data) == "string" ? q.getDerivedFromVars((ce = q.json.item_builder) == null ? void 0 : ce.data, void 0, !0) : (he = q.json.item_builder) != null && he.data ? Jo(q.json.item_builder.data) : void 0)), t.$$.dirty & /*$jsonSeparator, separator*/
    2097156 && e(2, Ce = typeof D == "string" && D.length > 0 ? D : Ce), t.$$.dirty & /*$jsonItemTextColor, itemTextColor*/
    1052672 && e(12, me = gr(Y, 1, me)), t.$$.dirty & /*$jsonActiveTextColor, activeTextColor*/
    532480 && e(13, Fe = gr(oe, 1, Fe)), t.$$.dirty & /*$jsonItemFontSize, itemFontSize*/
    278528 && e(14, Q = Hn(N, Q)), t.$$.dirty & /*$jsonCrumbs, $jsonItemBuilderData*/
    196608 && e(4, c = Ye(p, _)), t.$$.dirty & /*itemTextColor, activeTextColor, itemFontSize*/
    28672 && e(3, f = {
      "--divkit-breadcrumb-item-color": me,
      "--divkit-breadcrumb-active-color": Fe,
      "--divkit-breadcrumb-font-size": ge(Q)
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
    me,
    Fe,
    Q,
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
class Hv extends Br {
  constructor(r) {
    super(), Or(this, r, Rv, Bv, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const Wv = "appkit-autocomplete", Uv = "appkit-autocomplete__input", Gv = "appkit-autocomplete__dropdown", Jv = "appkit-autocomplete__dropdown_below", Kv = "appkit-autocomplete__dropdown_above", qv = "appkit-autocomplete__suggestion", Yv = "appkit-autocomplete__suggestion_highlighted", Ko = {
  autocomplete: Wv,
  autocomplete__input: Uv,
  "autocomplete__input_has-custom-focus": "appkit-autocomplete__input_has-custom-focus",
  autocomplete__dropdown: Gv,
  autocomplete__dropdown_below: Jv,
  autocomplete__dropdown_above: Kv,
  autocomplete__suggestion: qv,
  autocomplete__suggestion_highlighted: Yv,
  "autocomplete__suggestion-text": "appkit-autocomplete__suggestion-text",
  "autocomplete__suggestion-secondary": "appkit-autocomplete__suggestion-secondary"
};
function Hf(t, r, e) {
  const n = t.slice();
  return n[102] = r[e], n[104] = e, n;
}
function Xv(t) {
  let r, e;
  return r = new In({
    props: {
      componentContext: (
        /*componentContext*/
        t[0]
      )
    }
  }), {
    c() {
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
    },
    p(n, o) {
      const i = {};
      o[0] & /*componentContext*/
      1 && (i.componentContext = /*componentContext*/
      n[0]), r.$set(i);
    },
    i(n) {
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Zv(t) {
  let r, e;
  return r = new hn({
    props: {
      cls: ht("autocomplete", Ko, {}),
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
          Qv,
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
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function Wf(t) {
  let r, e, n, o = ar(
    /*suggestions*/
    t[4]
  ), i = [];
  for (let s = 0; s < o.length; s += 1)
    i[s] = Gf(Hf(t, o, s));
  return {
    c() {
      r = Pe("div");
      for (let s = 0; s < i.length; s += 1)
        i[s].c();
      g(r, "class", e = ht("autocomplete__dropdown", Ko, { [
        /*dropdownPosition*/
        t[9]
      ]: !0 })), g(r, "style", n = cr(
        /*dropdownStl*/
        t[11]
      )), g(r, "role", "listbox");
    },
    m(s, a) {
      J(s, r, a);
      for (let l = 0; l < i.length; l += 1)
        i[l] && i[l].m(r, null);
      t[91](r);
    },
    p(s, a) {
      if (a[0] & /*highlightedIndex, suggestions*/
      272 | a[1] & /*selectSuggestion*/
      8192) {
        o = ar(
          /*suggestions*/
          s[4]
        );
        let l;
        for (l = 0; l < o.length; l += 1) {
          const u = Hf(s, o, l);
          i[l] ? i[l].p(u, a) : (i[l] = Gf(u), i[l].c(), i[l].m(r, null));
        }
        for (; l < i.length; l += 1)
          i[l].d(1);
        i.length = o.length;
      }
      a[0] & /*dropdownPosition*/
      512 && e !== (e = ht("autocomplete__dropdown", Ko, { [
        /*dropdownPosition*/
        s[9]
      ]: !0 })) && g(r, "class", e), a[0] & /*dropdownStl*/
      2048 && n !== (n = cr(
        /*dropdownStl*/
        s[11]
      )) && g(r, "style", n);
    },
    d(s) {
      s && G(r), on(i, s), t[91](null);
    }
  };
}
function Uf(t) {
  let r, e = (
    /*suggestion*/
    t[102].secondary_text + ""
  ), n;
  return {
    c() {
      r = Pe("div"), n = On(e), g(r, "class", Ko["autocomplete__suggestion-secondary"]);
    },
    m(o, i) {
      J(o, r, i), bt(r, n);
    },
    p(o, i) {
      i[0] & /*suggestions*/
      16 && e !== (e = /*suggestion*/
      o[102].secondary_text + "") && Jn(n, e);
    },
    d(o) {
      o && G(r);
    }
  };
}
function Gf(t) {
  let r, e, n = (
    /*suggestion*/
    (t[102].text || /*suggestion*/
    t[102].value) + ""
  ), o, i, s, a, l, u, c, f = (
    /*suggestion*/
    t[102].secondary_text && Uf(t)
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
  function h() {
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
      r = Pe("div"), e = Pe("div"), o = On(n), i = hr(), f && f.c(), s = hr(), g(e, "class", Ko["autocomplete__suggestion-text"]), g(r, "class", a = ht("autocomplete__suggestion", Ko, {
        highlighted: (
          /*index*/
          t[104] === /*highlightedIndex*/
          t[8]
        )
      })), g(r, "role", "option"), g(r, "aria-selected", l = /*index*/
      t[104] === /*highlightedIndex*/
      t[8]);
    },
    m(m, p) {
      J(m, r, p), bt(r, e), bt(e, o), bt(r, i), f && f.m(r, null), bt(r, s), u || (c = [
        xe(r, "mousedown", mh(_)),
        xe(r, "mouseenter", h)
      ], u = !0);
    },
    p(m, p) {
      t = m, p[0] & /*suggestions*/
      16 && n !== (n = /*suggestion*/
      (t[102].text || /*suggestion*/
      t[102].value) + "") && Jn(o, n), /*suggestion*/
      t[102].secondary_text ? f ? f.p(t, p) : (f = Uf(t), f.c(), f.m(r, s)) : f && (f.d(1), f = null), p[0] & /*highlightedIndex*/
      256 && a !== (a = ht("autocomplete__suggestion", Ko, {
        highlighted: (
          /*index*/
          t[104] === /*highlightedIndex*/
          t[8]
        )
      })) && g(r, "class", a), p[0] & /*highlightedIndex*/
      256 && l !== (l = /*index*/
      t[104] === /*highlightedIndex*/
      t[8]) && g(r, "aria-selected", l);
    },
    d(m) {
      m && G(r), f && f.d(), u = !1, Rr(c);
    }
  };
}
function Qv(t) {
  let r, e, n, o, i, s, a, l, u;
  function c(...h) {
    return (
      /*focus_handler*/
      t[87](
        /*focusHandler*/
        t[100],
        ...h
      )
    );
  }
  function f(...h) {
    return (
      /*blur_handler*/
      t[88](
        /*blurHandler*/
        t[101],
        ...h
      )
    );
  }
  let _ = (
    /*showDropdown*/
    t[7] && /*suggestions*/
    t[4].length > 0 && Wf(t)
  );
  return {
    c() {
      r = Pe("input"), s = hr(), _ && _.c(), a = er(), g(r, "class", e = ht("autocomplete__input", Ko, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[99]
        )
      })), g(r, "style", n = cr(
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
    m(h, m) {
      J(h, r, m), t[86](r), J(h, s, m), _ && _.m(h, m), J(h, a, m), l || (u = [
        xe(
          r,
          "input",
          /*onInput*/
          t[41]
        ),
        xe(r, "focus", c),
        xe(r, "blur", f),
        xe(
          r,
          "keydown",
          /*onKeyDown*/
          t[45]
        )
      ], l = !0);
    },
    p(h, m) {
      t = h, m[3] & /*hasCustomFocus*/
      64 && e !== (e = ht("autocomplete__input", Ko, {
        "has-custom-focus": (
          /*hasCustomFocus*/
          t[99]
        )
      })) && g(r, "class", e), m[0] & /*inputStl*/
      4096 && n !== (n = cr(
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
      t[4].length > 0 ? _ ? _.p(t, m) : (_ = Wf(t), _.c(), _.m(a.parentNode, a)) : _ && (_.d(1), _ = null);
    },
    d(h) {
      h && (G(r), G(s), G(a)), t[86](null), _ && _.d(h), l = !1, Rr(u);
    }
  };
}
function xv(t) {
  let r, e, n, o;
  const i = [Zv, Xv], s = [];
  function a(l, u) {
    return (
      /*hasError*/
      l[3] ? 1 : 0
    );
  }
  return ~(r = a(t)) && (e = s[r] = i[r](t)), {
    c() {
      e && e.c(), n = er();
    },
    m(l, u) {
      ~r && s[r].m(l, u), J(l, n, u), o = !0;
    },
    p(l, u) {
      let c = r;
      r = a(l), r === c ? ~r && s[r].p(l, u) : (e && (fr(), x(s[c], 1, 1, () => {
        s[c] = null;
      }), dr()), ~r ? (e = s[r], e ? e.p(l, u) : (e = s[r] = i[r](l), e.c()), L(e, 1), e.m(n.parentNode, n)) : e = null);
    },
    i(l) {
      o || (L(e), o = !0);
    },
    o(l) {
      x(e), o = !1;
    },
    d(l) {
      l && G(n), ~r && s[r].d(l);
    }
  };
}
function $v(t) {
  return Array.isArray(t) ? t.filter((r) => typeof r == "object" && r !== null && typeof r.value == "string") : [];
}
function e3(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _, h, m, p, w, k, N, H, z, oe, _e, T, Y, le, E, D, M, W, q, be, Ae, Ce, me, Fe, Q, Ke, Ye, Xe, ye, Me, ce = v, he = () => (ce(), ce = C(W, (se) => e(64, Me = se)), W), fe, re = v, de = () => (re(), re = C(a, (se) => e(5, fe = se)), a), ne, we = v, Ue = () => (we(), we = C(oe, (se) => e(65, ne = se)), oe), Ge, $ = v, Be = () => ($(), $ = C(z, (se) => e(66, Ge = se)), z), Ne, ot = v, ct = () => (ot(), ot = C(H, (se) => e(67, Ne = se)), H), nt, kt = v, it = () => (kt(), kt = C(N, (se) => e(68, nt = se)), N), Pt, ft = v, Z = () => (ft(), ft = C(k, (se) => e(69, Pt = se)), k), pe, st = v, ze = () => (st(), st = C(w, (se) => e(70, pe = se)), w), F, Ct = v, ut = () => (Ct(), Ct = C(p, (se) => e(71, F = se)), p), Vt, Dt = v, lt = () => (Dt(), Dt = C(m, (se) => e(72, Vt = se)), m), K, Mt = v, It = () => (Mt(), Mt = C(h, (se) => e(73, K = se)), h), Xt, Zt = v, Ee = () => (Zt(), Zt = C(_, (se) => e(74, Xt = se)), _), Ze, gt = v, Ie = () => (gt(), gt = C(f, (se) => e(75, Ze = se)), f), $e, Le, Ft = v, Oe = () => (Ft(), Ft = C(u, (se) => e(77, Le = se)), u), yt, Gt = v, Tt = () => (Gt(), Gt = C(l, (se) => e(78, yt = se)), l), sr, Te = v, jt = () => (Te(), Te = C(M, (se) => e(79, sr = se)), M), lr, rr = v, nr = () => (rr(), rr = C(_e, (se) => e(80, lr = se)), _e), pr, vr = v, or = () => (vr(), vr = C(D, (se) => e(81, pr = se)), D), ir, Ht = v, mt = () => (Ht(), Ht = C(E, (se) => e(82, ir = se)), E), Qt, ae = v, wr = () => (ae(), ae = C(le, (se) => e(83, Qt = se)), le), kr, Et = v, Ir = () => (Et(), Et = C(Y, (se) => e(84, kr = se)), Y), Pr, ur = v, dt = () => (ur(), ur = C(T, (se) => e(85, Pr = se)), T), At, Jt = v, xt = () => (Jt(), Jt = C(c, (se) => e(39, At = se)), c);
  t.$$.on_destroy.push(() => ce()), t.$$.on_destroy.push(() => re()), t.$$.on_destroy.push(() => we()), t.$$.on_destroy.push(() => $()), t.$$.on_destroy.push(() => ot()), t.$$.on_destroy.push(() => kt()), t.$$.on_destroy.push(() => ft()), t.$$.on_destroy.push(() => st()), t.$$.on_destroy.push(() => Ct()), t.$$.on_destroy.push(() => Dt()), t.$$.on_destroy.push(() => Mt()), t.$$.on_destroy.push(() => Zt()), t.$$.on_destroy.push(() => gt()), t.$$.on_destroy.push(() => Ft()), t.$$.on_destroy.push(() => Gt()), t.$$.on_destroy.push(() => Te()), t.$$.on_destroy.push(() => rr()), t.$$.on_destroy.push(() => vr()), t.$$.on_destroy.push(() => Ht()), t.$$.on_destroy.push(() => ae()), t.$$.on_destroy.push(() => Et()), t.$$.on_destroy.push(() => ur()), t.$$.on_destroy.push(() => Jt());
  let { componentContext: et } = r, { layoutParams: pt = void 0 } = r;
  const ue = Tr(Yr), vt = ue.direction;
  yn(t, vt, (se) => e(76, $e = se));
  let $t, Wt, yr, j = !1, ie = !1, d = -1, B = "below", je = null, He = "", ke = "rgba(0,0,0,.45)", P = 12, Lt, zt = "", Je = "", at, Ot = "", Ar = "#000", _r = "#000", Fr = "";
  function wn() {
    e(47, je = null), e(49, ke = "rgba(0,0,0,.45)"), e(50, P = 12), e(51, Lt = void 0), e(52, zt = ""), e(53, Je = ""), e(54, at = void 0), e(55, Ot = ""), e(56, Ar = "#000"), e(57, _r = "#000"), e(10, Fr = ""), e(7, ie = !1), e(8, d = -1);
  }
  function Se() {
    if (!Wt) return;
    const se = Wt.getBoundingClientRect(), We = window.innerHeight - se.bottom, Nt = se.top;
    e(9, B = We >= 200 || We >= Nt ? "below" : "above");
  }
  function Xr(se) {
    const Nt = se.target.value;
    if (a.setValue(Nt), e(8, d = -1), Nt.length >= q) {
      Se();
      const St = et.json.text_change_actions;
      St && St.length && et.execAnyActions(St);
    }
  }
  function Ur() {
    (fe || "").length >= q && Ke.length > 0 && (Se(), e(7, ie = !0));
  }
  function ln() {
    Ce && setTimeout(
      () => {
        e(7, ie = !1), e(8, d = -1);
      },
      200
    );
  }
  function cn(se) {
    const We = se.text || se.value;
    if (a.setValue(We), s) {
      const St = et.getVariable(s, "string") || ue.awaitGlobalVariable(s, "string", "");
      St && St.setValue(se.value);
    }
    Ae && e(7, ie = !1), e(8, d = -1);
    const Nt = et.json.selection_actions;
    Nt && Nt.length && et.execAnyActions(Nt);
  }
  function y(se) {
    !ie || Ke.length === 0 || (se.key === "ArrowDown" ? (se.preventDefault(), e(8, d = (d + 1) % Ke.length), A()) : se.key === "ArrowUp" ? (se.preventDefault(), e(8, d = d <= 0 ? Ke.length - 1 : d - 1), A()) : se.key === "Enter" && d >= 0 ? (se.preventDefault(), cn(Ke[d])) : se.key === "Escape" && (e(7, ie = !1), e(8, d = -1)));
  }
  function A() {
    Sn().then(() => {
      if (yr && d >= 0) {
        const se = yr.children;
        se[d] && se[d].scrollIntoView({ block: "nearest" });
      }
    });
  }
  sn(() => {
    $t && (ue.unregisterFocusable($t), e(46, $t = void 0));
  });
  function S(se) {
    Dr[se ? "unshift" : "push"](() => {
      Wt = se, e(2, Wt);
    });
  }
  const ee = (se, We) => {
    se(We), Ur();
  }, O = (se, We) => {
    se(We), ln();
  }, tt = (se) => cn(se), De = (se) => {
    e(8, d = se);
  };
  function tr(se) {
    Dr[se ? "unshift" : "push"](() => {
      yr = se, e(6, yr);
    });
  }
  return t.$$set = (se) => {
    "componentContext" in se && e(0, et = se.componentContext), "layoutParams" in se && e(1, pt = se.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*componentContext*/
    1 && e(63, n = et.origJson), t.$$.dirty[2] & /*origJson*/
    2 && n && wn(), t.$$.dirty[0] & /*componentContext*/
    1 && e(61, o = et.json.text_variable), t.$$.dirty[0] & /*componentContext*/
    1 && e(60, i = et.json.suggestions_variable), t.$$.dirty[0] & /*componentContext*/
    1 && (s = et.json.value_variable), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*textVarName*/
    1073741824 && de(e(14, a = o && (et.getVariable(o, "string") || ue.awaitGlobalVariable(o, "string", "")) || Xn("temp", "string", ""))), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[1] & /*suggestionsVarName*/
    536870912 && Tt(e(38, l = i && (et.getVariable(i, "array") || ue.awaitGlobalVariable(i, "array", [])) || Xn("temp", "array", []))), t.$$.dirty[0] & /*componentContext*/
    1 && Oe(e(37, u = et.getDerivedFromVars(et.json.paddings))), t.$$.dirty[0] & /*componentContext*/
    1 && xt(e(36, c = et.getDerivedFromVars(et.json.hint_text))), t.$$.dirty[0] & /*componentContext*/
    1 && Ie(e(35, f = et.getDerivedFromVars(et.json.hint_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ee(e(34, _ = et.getDerivedFromVars(et.json.font_size))), t.$$.dirty[0] & /*componentContext*/
    1 && It(e(33, h = et.getDerivedFromVars(et.json.font_weight))), t.$$.dirty[0] & /*componentContext*/
    1 && lt(e(32, m = et.getDerivedFromVars(et.json.font_weight_value))), t.$$.dirty[0] & /*componentContext*/
    1 && ut(e(31, p = et.getDerivedFromVars(et.json.font_family))), t.$$.dirty[0] & /*componentContext*/
    1 && ze(e(30, w = et.getDerivedFromVars(et.json.font_variation_settings, void 0, !0, 0))), t.$$.dirty[0] & /*componentContext*/
    1 && Z(e(29, k = et.getDerivedFromVars(et.json.line_height))), t.$$.dirty[0] & /*componentContext*/
    1 && it(e(28, N = et.getDerivedFromVars(et.json.letter_spacing))), t.$$.dirty[0] & /*componentContext*/
    1 && ct(e(27, H = et.getDerivedFromVars(et.json.text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Be(e(26, z = et.getDerivedFromVars(et.json.suggestion_text_color))), t.$$.dirty[0] & /*componentContext*/
    1 && Ue(e(25, oe = et.getDerivedFromVars(et.json.accessibility))), t.$$.dirty[0] & /*componentContext*/
    1 && nr(e(24, _e = et.getDerivedFromVars(et.json.is_enabled))), t.$$.dirty[0] & /*componentContext*/
    1 && dt(e(23, T = et.getDerivedFromVars(et.json.min_query_length))), t.$$.dirty[0] & /*componentContext*/
    1 && Ir(e(22, Y = et.getDerivedFromVars(et.json.max_visible_suggestions))), t.$$.dirty[0] & /*componentContext*/
    1 && wr(e(21, le = et.getDerivedFromVars(et.json.dismiss_on_selection))), t.$$.dirty[0] & /*componentContext*/
    1 && mt(e(20, E = et.getDerivedFromVars(et.json.dismiss_on_blur))), t.$$.dirty[0] & /*componentContext*/
    1 && or(e(19, D = et.getDerivedFromVars(et.json.dismiss_on_empty))), t.$$.dirty[0] & /*componentContext*/
    1 && jt(e(18, M = et.getDerivedFromVars(et.json.keyboard_type))), t.$$.dirty[0] & /*componentContext*/
    1 && he(e(17, W = et.getDerivedFromVars(et.json.highlight_color))), t.$$.dirty[2] & /*$jsonMinQueryLength*/
    8388608 && e(59, q = Math.max(1, Number(Pr) || 1)), t.$$.dirty[2] & /*$jsonMaxVisibleSuggestions*/
    4194304 && e(58, be = Math.max(1, Number(kr) || 5)), t.$$.dirty[2] & /*$jsonDismissOnSelection*/
    2097152 && (Ae = Zr(Qt, !0)), t.$$.dirty[2] & /*$jsonDismissOnBlur*/
    1048576 && (Ce = Zr(ir, !0)), t.$$.dirty[2] & /*$jsonDismissOnEmpty*/
    524288 && e(62, me = Zr(pr, !0)), t.$$.dirty[2] & /*$jsonIsEnabled*/
    262144 && e(16, Fe = Zr(lr, !0)), t.$$.dirty[2] & /*$jsonKeyboardType*/
    131072 && e(15, Q = sr === "password" ? "password" : sr === "email" ? "email" : sr === "uri" ? "url" : sr === "phone" ? "tel" : sr === "number" ? "number" : "text"), t.$$.dirty[2] & /*$suggestionsVariable*/
    65536 && e(4, Ke = $v(yt)), t.$$.dirty[0] & /*$textVariable, suggestions*/
    48 | t.$$.dirty[1] & /*minQueryLength*/
    268435456 | t.$$.dirty[2] & /*dismissOnEmpty*/
    1) {
      const se = fe || "";
      se.length < q || me && Ke.length === 0 ? e(7, ie = !1) : Ke.length > 0 && se.length >= q && e(7, ie = !0);
    }
    if (t.$$.dirty[0] & /*componentContext, hasError*/
    9 | t.$$.dirty[1] & /*textVarName, suggestionsVarName*/
    1610612736) {
      let se = !1;
      o || (se = !0, et.logError(X(new Error('Missing "text_variable" in "autocomplete"')))), i || (se = !0, et.logError(X(new Error('Missing "suggestions_variable" in "autocomplete"')))), j !== se && e(3, j = se);
    }
    if (t.$$.dirty[1] & /*fontSize*/
    524288 | t.$$.dirty[2] & /*$jsonFontSize*/
    4096 && e(50, P = Hn(Xt, P)), t.$$.dirty[1] & /*selfPadding, fontSize*/
    589824 | t.$$.dirty[2] & /*$jsonPaddings, $direction*/
    49152 && (e(47, je = ni(Le || void 0, je)), e(48, He = je ? so(
      {
        top: (Number(je.top) || 0) / P * 10,
        right: (Number($e === "ltr" ? je.end : je.start) || Number(je.right) || 0) / P * 10,
        bottom: (Number(je.bottom) || 0) / P * 10,
        left: (Number($e === "ltr" ? je.start : je.end) || Number(je.left) || 0) / P * 10
      },
      $e
    ) : "")), t.$$.dirty[1] & /*hintColor*/
    262144 | t.$$.dirty[2] & /*$jsonHintColor*/
    8192 && e(49, ke = gr(Ze, 1, ke)), t.$$.dirty[1] & /*fontWeight*/
    1048576 | t.$$.dirty[2] & /*$jsonFontWeight, $jsonFontWeightValue, $jsonFontFamily*/
    3584 && (e(51, Lt = ii(K, Vt, Lt)), F && typeof F == "string" ? e(52, zt = ue.typefaceProvider(F, { fontWeight: Lt || 400 })) : e(52, zt = "")), t.$$.dirty[1] & /*fontVariationSettings*/
    4194304 | t.$$.dirty[2] & /*$jsonFontVariationSettings*/
    256) {
      const se = ki(pe);
      se !== Je && e(53, Je = se);
    }
    if (t.$$.dirty[1] & /*fontSize*/
    524288 | t.$$.dirty[2] & /*$jsonLineHeight*/
    128) {
      const se = Pt;
      Pn(se) && e(54, at = se / P);
    }
    t.$$.dirty[1] & /*fontSize*/
    524288 | t.$$.dirty[2] & /*$jsonLetterSpacing*/
    64 && _s(nt) && e(55, Ot = ge(nt / P * 10)), t.$$.dirty[1] & /*textColor*/
    33554432 | t.$$.dirty[2] & /*$jsonTextColor*/
    32 && e(56, Ar = gr(Ne, 1, Ar)), t.$$.dirty[1] & /*suggestionColor*/
    67108864 | t.$$.dirty[2] & /*$jsonSuggestionTextColor*/
    16 && e(57, _r = gr(Ge, 1, _r)), t.$$.dirty[0] & /*componentContext*/
    1 | t.$$.dirty[2] & /*$jsonAccessibility*/
    8 && (ne != null && ne.description ? e(10, Fr = Yo(ne)) : et.logError(X(new Error('Missing accessibility "description" for autocomplete'), { level: "warn" }))), t.$$.dirty[1] & /*hintColor, fontWeight, fontFamily, fontVariationSettings, textColor*/
    41156608 | t.$$.dirty[2] & /*$jsonHighlightColor*/
    4 && e(13, Ye = {
      "--divkit-input-hint-color": ke,
      "--divkit-input-highlight-color": Me || void 0,
      "font-weight": Lt,
      "font-family": zt,
      "font-variation-settings": Je,
      color: Ar
    }), t.$$.dirty[1] & /*padding, fontSize, lineHeight, letterSpacing*/
    25821184 && e(12, Xe = {
      padding: He,
      "font-size": ge(P),
      "line-height": at,
      "letter-spacing": Ot
    }), t.$$.dirty[1] & /*maxVisibleSuggestions, suggestionColor*/
    201326592 && e(11, ye = {
      "max-height": be * 44 + "px",
      color: _r
    }), t.$$.dirty[0] & /*componentContext, inputEl*/
    5 | t.$$.dirty[1] & /*prevId*/
    32768 && et.json && Wt && ($t && (ue.unregisterFocusable($t), e(46, $t = void 0)), et.id && !et.fakeElement && (e(46, $t = et.id), ue.registerFocusable($t, {
      focus() {
        Wt && Wt.focus();
      }
    })));
  }, [
    et,
    pt,
    Wt,
    j,
    Ke,
    fe,
    yr,
    ie,
    d,
    B,
    Fr,
    ye,
    Xe,
    Ye,
    a,
    Q,
    Fe,
    W,
    M,
    D,
    E,
    le,
    Y,
    T,
    _e,
    oe,
    z,
    H,
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
    At,
    vt,
    Xr,
    Ur,
    ln,
    cn,
    y,
    $t,
    je,
    He,
    ke,
    P,
    Lt,
    zt,
    Je,
    at,
    Ot,
    Ar,
    _r,
    be,
    q,
    i,
    o,
    me,
    n,
    Me,
    ne,
    Ge,
    Ne,
    nt,
    Pt,
    pe,
    F,
    Vt,
    K,
    Xt,
    Ze,
    $e,
    Le,
    yt,
    sr,
    lr,
    pr,
    ir,
    Qt,
    kr,
    Pr,
    S,
    ee,
    O,
    tt,
    De,
    tr
  ];
}
class t3 extends Br {
  constructor(r) {
    super(), Or(this, r, e3, xv, Sr, { componentContext: 0, layoutParams: 1 }, null, [-1, -1, -1, -1]);
  }
}
const p_ = {
  text: M0,
  container: h1,
  separator: C1,
  image: cc,
  gif: cc,
  grid: x1,
  gallery: vb,
  tabs: Qb,
  state: ky,
  pager: Gy,
  indicator: ow,
  slider: ww,
  input: qw,
  select: nk,
  video: yk,
  switch: Ik,
  checkbox: Uk,
  radio: a2,
  progress: y2,
  table: J2,
  counter: rv,
  webview: fv,
  google_map: kv,
  custom: Sv,
  breadcrumb: Hv,
  autocomplete: t3
};
function Jf(t) {
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
  return o && (r = gu(o, i(t))), {
    c() {
      r && Ut(r.$$.fragment), e = er();
    },
    m(s, a) {
      r && Bt(r, s, a), J(s, e, a), n = !0;
    },
    p(s, a) {
      if (a & /*component*/
      4 && o !== (o = /*component*/
      s[2])) {
        if (r) {
          fr();
          const l = r;
          x(l.$$.fragment, 1, 0, () => {
            Rt(l, 1);
          }), dr();
        }
        o ? (r = gu(o, i(s)), Ut(r.$$.fragment), L(r.$$.fragment, 1), Bt(r, e.parentNode, e)) : r = null;
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
      n || (r && L(r.$$.fragment, s), n = !0);
    },
    o(s) {
      r && x(r.$$.fragment, s), n = !1;
    },
    d(s) {
      s && G(e), r && Rt(r, s);
    }
  };
}
function r3(t) {
  let r, e, n = (
    /*component*/
    t[2] && Jf(t)
  );
  return {
    c() {
      n && n.c(), r = er();
    },
    m(o, i) {
      n && n.m(o, i), J(o, r, i), e = !0;
    },
    p(o, [i]) {
      /*component*/
      o[2] ? n ? (n.p(o, i), i & /*component*/
      4 && L(n, 1)) : (n = Jf(o), n.c(), L(n, 1), n.m(r.parentNode, r)) : n && (fr(), x(n, 1, 1, () => {
        n = null;
      }), dr());
    },
    i(o) {
      e || (L(n), e = !0);
    },
    o(o) {
      x(n), e = !1;
    },
    d(o) {
      o && G(r), n && n.d(o);
    }
  };
}
function n3(t, r, e) {
  let { componentContext: n } = r, { layoutParams: o = void 0 } = r;
  const i = Tr(Yr);
  let s;
  return t.$$set = (a) => {
    "componentContext" in a && e(0, n = a.componentContext), "layoutParams" in a && e(1, o = a.layoutParams);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*componentContext, component*/
    5) {
      const a = n.json;
      if (e(2, s = (a == null ? void 0 : a.type) && p_[a.type] || void 0), !s) {
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
class Kn extends Br {
  constructor(r) {
    super(), Or(this, r, n3, r3, Sr, { componentContext: 0, layoutParams: 1 });
  }
}
const o3 = {
  "root-svg-filters": "appkit-root-svg-filters"
};
function Kf(t, r, e) {
  const n = t.slice();
  n[1] = r[e];
  const o = (
    /*filterKey*/
    n[1].split(":")
  );
  return n[2] = o[0], n[3] = o[1], n;
}
function qf(t) {
  let r, e, n = ar([...Object.keys(
    /*svgFiltersMap*/
    t[0]
  )]), o = [];
  for (let i = 0; i < n.length; i += 1)
    o[i] = Yf(Kf(t, n, i));
  return {
    c() {
      r = tn("svg"), e = tn("defs");
      for (let i = 0; i < o.length; i += 1)
        o[i].c();
      g(r, "class", o3["root-svg-filters"]), g(r, "aria-hidden", "true");
    },
    m(i, s) {
      J(i, r, s), bt(r, e);
      for (let a = 0; a < o.length; a += 1)
        o[a] && o[a].m(e, null);
    },
    p(i, s) {
      if (s & /*svgFiltersMap, Object*/
      1) {
        n = ar([...Object.keys(
          /*svgFiltersMap*/
          i[0]
        )]);
        let a;
        for (a = 0; a < n.length; a += 1) {
          const l = Kf(i, n, a);
          o[a] ? o[a].p(l, s) : (o[a] = Yf(l), o[a].c(), o[a].m(e, null));
        }
        for (; a < o.length; a += 1)
          o[a].d(1);
        o.length = n.length;
      }
    },
    d(i) {
      i && G(r), on(o, i);
    }
  };
}
function i3(t) {
  let r, e;
  return {
    c() {
      r = tn("feBlend"), g(r, "in2", "SourceGraphic"), g(r, "mode", e = /*filterMode*/
      t[3]);
    },
    m(n, o) {
      J(n, r, o);
    },
    p(n, o) {
      o & /*svgFiltersMap*/
      1 && e !== (e = /*filterMode*/
      n[3]) && g(r, "mode", e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function s3(t) {
  let r;
  return {
    c() {
      r = tn("feComposite"), g(r, "in2", "SourceGraphic"), g(r, "operator", "arithmetic"), g(r, "k1", "1"), g(r, "k2", "0"), g(r, "k3", "0"), g(r, "k4", "0");
    },
    m(e, n) {
      J(e, r, n);
    },
    p: v,
    d(e) {
      e && G(r);
    }
  };
}
function l3(t) {
  let r, e;
  return {
    c() {
      r = tn("feComposite"), g(r, "in2", "SourceGraphic"), g(r, "operator", e = /*filterMode*/
      t[3].split("_")[1]);
    },
    m(n, o) {
      J(n, r, o);
    },
    p(n, o) {
      o & /*svgFiltersMap*/
      1 && e !== (e = /*filterMode*/
      n[3].split("_")[1]) && g(r, "operator", e);
    },
    d(n) {
      n && G(r);
    }
  };
}
function Yf(t) {
  let r, e, n, o;
  function i(l, u) {
    return (
      /*filterMode*/
      l[3] === "source_in" || /*filterMode*/
      l[3] === "source_atop" ? l3 : (
        /*filterMode*/
        l[3] === "multiply" ? s3 : i3
      )
    );
  }
  let s = i(t), a = s(t);
  return {
    c() {
      r = tn("filter"), e = tn("feFlood"), a.c(), g(e, "flood-color", n = /*filterColor*/
      t[2]), g(r, "id", o = /*svgFiltersMap*/
      t[0][
        /*filterKey*/
        t[1]
      ]);
    },
    m(l, u) {
      J(l, r, u), bt(r, e), a.m(r, null);
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
      l && G(r), a.d();
    }
  };
}
function a3(t) {
  let r = Object.keys(
    /*svgFiltersMap*/
    t[0]
  ).length, e, n = r && qf(t);
  return {
    c() {
      n && n.c(), e = er();
    },
    m(o, i) {
      n && n.m(o, i), J(o, e, i);
    },
    p(o, [i]) {
      i & /*svgFiltersMap*/
      1 && (r = Object.keys(
        /*svgFiltersMap*/
        o[0]
      ).length), r ? n ? n.p(o, i) : (n = qf(o), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: v,
    o: v,
    d(o) {
      o && G(e), n && n.d(o);
    }
  };
}
function u3(t, r, e) {
  let { svgFiltersMap: n } = r;
  return t.$$set = (o) => {
    "svgFiltersMap" in o && e(0, n = o.svgFiltersMap);
  }, [n];
}
class c3 extends Br {
  constructor(r) {
    super(), Or(this, r, u3, a3, Sr, { svgFiltersMap: 0 });
  }
}
function f3(t, r, e, n) {
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
  for (i in t)
    i === "type" || i === "__proto__" || t.hasOwnProperty(i) && (l[i] = t[i]);
  return {
    json: l,
    templateContext: s
  };
}
const d3 = 128, Ti = /* @__PURE__ */ new Map();
let Xf;
function g_(t) {
  return Ti.get(t);
}
function h_(t, r) {
  t !== Xf && (Ti.delete(t), Ti.size >= d3 && Ti.delete(Ti.keys().next().value), Ti.set(t, r), Xf = t);
}
const Zf = /* @__PURE__ */ new Set([
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
function _3(t) {
  if (!(typeof t.name == "string" && t.name))
    throw new Error("Incorrect function name");
  if (!(typeof t.body == "string" && t.body))
    throw new Error("Incorrect function body");
  if (!(t.return_type && Zf.has(t.return_type)))
    throw new Error("Incorrect function return_type");
  if (!Array.isArray(t.arguments))
    throw new Error("Incorrect function arguments");
  const r = /* @__PURE__ */ new Set();
  t.arguments.forEach((e) => {
    if (!(typeof e.name == "string" && e.name))
      throw new Error("Incorrect argument name");
    if (!(e.type && Zf.has(e.type)))
      throw new Error("Incorrect argument type");
    if (r.has(e.name))
      throw new Error("Duplicate argument name");
    r.add(e.name);
  });
}
function p3(t) {
  let r;
  return {
    name: t.name,
    args: t.arguments.map((e) => ({
      type: e.type
    })),
    cb(e, ...n) {
      r || (r = g_(t.body) || nl(t.body, {
        startRule: "JsonStringContents"
      }), h_(t.body, r));
      const o = /* @__PURE__ */ new Map();
      n.forEach((a, l) => {
        if (a.type === "function")
          throw new Error("Incorrect argument type: function");
        const u = Rs(t.arguments[l].name, a.type, a.value);
        o.set(u.getName(), u);
      });
      const i = ml(o, e.customFunctions, e.store, r, {
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
function g3(t, r) {
  if (!t)
    return r || void 0;
  if (!r)
    return t || void 0;
  const e = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set();
  for (const [o, i] of r) {
    for (const s of i) {
      const a = Na(o, s);
      n.add(a);
    }
    e.set(o, i);
  }
  for (const [o, i] of t)
    for (const s of i) {
      const a = Na(o, s);
      if (!n.has(a)) {
        n.add(a);
        const l = e.get(o) || [];
        l.push(s), e.set(o, l);
      }
    }
  return e;
}
function h3(t) {
  if (!t)
    return X(new Error("Missing object"));
  const r = t.card, e = t.templates || {};
  if (!r)
    return X(new Error("Missing card"));
  if (!r.states || !r.states.length)
    return X(new Error("Missing states"));
  for (const n in e)
    if (e.hasOwnProperty(n) && n in p_)
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
function m3(t) {
  return [...new Set(t)];
}
class m_ {
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
      a = ml(r, e, o, this.ast, {
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
          result: hd(c),
          usedVars: a.usedVars
        };
      if (u.type === "boolean")
        return {
          result: !!c,
          usedVars: a.usedVars
        };
      if (u.type === "color") {
        const f = _o(String(c));
        if (f)
          return {
            result: Si(f),
            usedVars: a.usedVars
          };
        n(X(new Error("Expression execution error")));
      }
      if (u.type === "integer")
        return c > O_ || c < B_ ? (n(X(new Error("Expression result is out of 32-bit int range"))), {
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
function b3(t) {
  return t.indexOf("@{") > -1 || t.indexOf("\\") > -1;
}
function la(t, r, e, n) {
  if (t)
    if (typeof t == "string") {
      if (b3(t)) {
        r.hasExpression = !0;
        try {
          const o = g_(t) || nl(t, {
            startRule: "JsonStringContents"
          });
          h_(t, o);
          const i = J_(o);
          return r.vars.push(...i), new m_(o, t);
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
        return t.map((o) => la(o, r, e, n - 1));
      if (typeof t == "object" && n > 0) {
        const o = {};
        for (const i in t)
          o[i] = la(t[i], r, e, n - 1);
        return o;
      }
    }
  return t;
}
function aa(t, r) {
  if (t) {
    if (t instanceof m_)
      return t.apply(r);
    if (Array.isArray(t)) {
      let e;
      return {
        result: t.map((o) => {
          const i = aa(o, r);
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
        const i = aa(t[o], r);
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
function Qf(t, r, e, n, o = 1 / 0) {
  const i = {
    vars: [],
    hasExpression: !1
  }, s = la(t, i, r, o);
  return {
    vars: m3(i.vars),
    hasExpression: i.hasExpression,
    applyVars(l, u, c) {
      return aa(s, {
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
class b_ {
  constructor() {
    Vr(this, "_vars", /* @__PURE__ */ new Map());
    Vr(this, "_lastAddedVariable", Io(""));
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
function w4() {
  return new b_();
}
const y3 = ["start", "stop", "pause", "resume", "cancel", "reset"], w3 = new Set(y3);
class k3 {
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
    if (!r || !e || !this.timers.has(r) || !w3.has(e)) {
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
function v3(t, r, e, n) {
  const { variable_name: o, index: i, value: s } = n;
  if (!s || typeof i != "number" && i !== void 0) {
    e(X(new Error("Incorrect array_insert_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Sa(t, r, e, n, (a) => {
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
      const u = l.slice(), c = sl(s);
      typeof i == "number" ? u.splice(i, 0, c) : u.push(c), a.setValue(u);
    }
  });
}
function j3(t, r, e, n) {
  const { variable_name: o, index: i } = n;
  if (typeof i != "number") {
    e(X(new Error("Incorrect array_remove_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Sa(t, r, e, n, (s) => {
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
function C3(t, r, e, n) {
  const { variable_name: o, index: i, value: s } = n;
  if (!s || typeof i != "number") {
    e(X(new Error("Incorrect array_set_value action"), {
      additional: {
        name: o
      }
    }));
    return;
  }
  Sa(t, r, e, n, (a) => {
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
      u[i] = sl(s), a.setValue(u);
    }
  });
}
function Sa(t, r, e, n, o) {
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
function E3(t, r, e, n) {
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
    s ? c[i] = sl(s) : delete c[i], a.setValue(c);
  } else
    e(X(new Error("Trying to set value into the non-dict"), {
      additional: {
        name: o,
        type: l
      }
    }));
}
function A3(t, r) {
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
function S3(t) {
  if (t === "normal" || t === "reverse" || t === "alternate" || t === "alternate_reverse")
    return t;
}
function V3(t, r, e, n) {
  var H, z, oe, _e;
  const o = Hn(t.duration, 0);
  if (!o || t.type !== "color_animator" && t.type !== "number_animator")
    return;
  const i = (H = t.start_value_typed ? t.start_value_typed.value : t.start_value) != null ? H : r.getValue(), s = t.end_value_typed ? t.end_value_typed.value : t.end_value;
  if (i === void 0 || s === void 0 || t.type === "color_animator" && (typeof i != "string" && i !== void 0 || typeof s != "string") || t.type === "number_animator" && (typeof i != "number" && i !== void 0 || typeof s != "number"))
    return;
  const a = t.type === "color_animator" && _o(i), l = t.type === "color_animator" && _o(s);
  if (t.type === "color_animator" && (!a || !l))
    return;
  const u = rn(t.start_delay, 0), c = Ea(t.interpolator || "linear"), f = S3(t.direction) || "normal", _ = ((z = t.repeat_count) == null ? void 0 : z.type) === "infinity" ? 1 / 0 : ((oe = t.repeat_count) == null ? void 0 : oe.type) === "fixed" ? rn((_e = t.repeat_count) == null ? void 0 : _e.value, 1) : 1;
  let h = 0, m = performance.now();
  const p = _ === 1 / 0 ? 1 / 0 : _ * o + u;
  function w(T) {
    if (t.type === "color_animator") {
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
      let le = Math.floor((h - u) / o), E = (h - u - le * o) / o;
      le >= _ && (le = _ - 1, E = 1);
      let D;
      f === "normal" || f === "alternate" && le % 2 === 0 || f === "alternate_reverse" && le % 2 === 1 ? D = "normal" : D = "reverse", D === "reverse" && (E = 1 - E);
      const M = w(c(E));
      r.setValue(M);
    }
    h < p ? N = requestAnimationFrame(k) : (e(), n(t.end_actions));
  }
  let N = requestAnimationFrame(k);
  return {
    stop() {
      cancelAnimationFrame(N), n(t.cancel_actions), n(t.end_actions);
    }
  };
}
function F3(t) {
  let r = t;
  for (; r && !r.isTooltipRoot; )
    r = r.parent;
  return r;
}
function D3(t) {
  let r = t;
  for (; r != null && r.parent && r.json.type !== "state" && !r.isRootState && !r.isTooltipRoot; )
    r = r.parent;
  return r;
}
function tl(t) {
  return !!(t && typeof t == "string");
}
const I3 = /* @__PURE__ */ new Set([
  "get",
  "post",
  "put",
  "patch",
  "delete",
  "head",
  "options"
]);
function T3(t) {
  return t === void 0 || I3.has(t);
}
function M3(t) {
  return t === void 0 || Array.isArray(t) && t.every((r) => tl(r.name) && tl(r.value));
}
function P3(t) {
  var r, e, n;
  return tl(t.container_id) && tl((r = t.request) == null ? void 0 : r.url) && T3((e = t.request) == null ? void 0 : e.method) && M3((n = t.request) == null ? void 0 : n.headers);
}
function N3(t, r, e, n) {
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
    let h = _;
    for (let m = 0; m < f.length; ++m) {
      const p = f[m];
      if (!p) {
        e(X(new Error("Path is empty"), {
          additional: {
            name: o,
            type: l,
            path: i
          }
        }));
        return;
      }
      if (!h || typeof h != "object") {
        e(X(new Error(`Element with path '${f.slice(0, m).join("/")}' is not ${h === void 0 ? "found" : "a structure"}`), {
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
          e(X(new Error(`Unable to use '${p}' as array index`), {
            additional: {
              name: o,
              type: l,
              path: i
            }
          }));
          return;
        }
        if (m + 1 === f.length && (w < 0 || w > h.length)) {
          e(X(new Error(`Position '${w}' is out of array bounds`), {
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
    h[f[f.length - 1]] = sl(s), a.setValue(_);
  } else
    e(X(new Error("Action requires array or dictionary variable"), {
      additional: {
        name: o,
        type: l
      }
    }));
}
function xf(t, { delay: r = 0, duration: e = 400, easing: n = l_, x: o = 0, y: i = 0, opacity: s = 0 } = {}) {
  const a = getComputedStyle(t), l = +a.opacity, u = a.transform === "none" ? "" : a.transform, c = l * (1 - s), [f, _] = du(o), [h, m] = du(i);
  return {
    delay: r,
    duration: e,
    easing: n,
    css: (p, w) => `
			transform: ${u} translate(${(1 - p) * f}${_}, ${(1 - p) * h}${m});
			opacity: ${l - c * w}`
  };
}
const z3 = "appkit-outer", L3 = "appkit-root__clickable", O3 = "undefined", B3 = "appkit-tooltip", R3 = "appkit-tooltip_visible", H3 = "appkit-tooltip_modal", W3 = "appkit-tooltip__inner", U3 = "appkit-tooltip__overlay", G3 = "appkit-tooltip__substrate", vo = {
  outer: z3,
  root__clickable: L3,
  "root__clickable-no-transition": "appkit-root__clickable-no-transition",
  root__selectable: O3,
  tooltip: B3,
  tooltip_visible: R3,
  tooltip_modal: H3,
  tooltip__inner: W3,
  tooltip__overlay: U3,
  tooltip__substrate: G3
}, y_ = 300, w_ = 0;
function ua(t) {
  return Math.max(...t.map(
    (r) => (Number(r.duration) || y_) + (Number(r.start_delay) || w_)
  ));
}
function rl(t, {
  animations: r,
  direction: e
}) {
  if (!r)
    return {};
  const n = cs(r), o = ua(n);
  return n.some((s) => s.name === "no_animation") ? {} : {
    duration: Bi() ? 0 : o,
    css: (s) => {
      const a = s * o, l = n.map((p) => {
        var oe, _e, T, Y, le, E, D, M, W, q, be, Ae;
        const w = Number(p.start_delay) || w_, k = Number(p.duration) || y_, N = e === "in" ? Math.max(0, Math.min(1, (a - w) / k)) : Math.max(0, Math.min(1, (a - (o - k) + w) / k)), z = (Ea(p.interpolator || "ease_in_out") || jl)(N);
        if (p.name === "fade") {
          const Ce = e === "in" ? (oe = p.start_value) != null ? oe : 0 : (_e = p.end_value) != null ? _e : 0, me = e === "in" ? (T = p.end_value) != null ? T : 1 : (Y = p.start_value) != null ? Y : 1;
          return {
            active: z > 0 && z < 1,
            opacity: (1 - z) * Ce + z * me
          };
        } else if (p.name === "translate") {
          const Ce = -(e === "in" ? (le = p.start_value) != null ? le : 10 : (E = p.end_value) != null ? E : 10), me = -(e === "in" ? (D = p.end_value) != null ? D : 0 : (M = p.start_value) != null ? M : 0);
          return {
            active: z > 0 && z < 1,
            translate: `translateY(${(1 - z) * Ce + z * me}${e === "in" && p.start_value !== void 0 || e === "out" && p.end_value !== void 0 ? "%" : "px"})`
          };
        } else if (p.name === "scale") {
          const Ce = e === "in" ? (W = p.start_value) != null ? W : 0 : (q = p.end_value) != null ? q : 0, me = e === "in" ? (be = p.end_value) != null ? be : 1 : (Ae = p.start_value) != null ? Ae : 1;
          return {
            active: z > 0 && z < 1,
            scale: `scale(${(1 - z) * Ce + z * me})`
          };
        }
        return {};
      }), u = l.map((p) => p.opacity).filter((p) => p !== void 0).reduce((p, w) => p * w, 1), c = l.map((p) => p.translate).filter((p) => p !== void 0).join(" "), f = l.map((p) => p.scale).filter((p) => p !== void 0).join(" "), _ = l.filter((p) => p.active).map((p) => p.scale).filter((p) => p !== void 0), h = _.length ? _[_.length - 1] : f;
      return `transform:${[c, h].filter(Boolean).join(" ") || "none"};opacity:${u}`;
    }
  };
}
const rs = typeof window < "u" && "HTMLDialogElement" in window, { document: J3, window: K3 } = Po;
function q3(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _ = (
    /*visible*/
    t[1] && /*modal*/
    t[3] && $f(t)
  ), h = (
    /*substrateComponentContext*/
    t[14] && ed(t)
  );
  return i = new Kn({
    props: {
      componentContext: (
        /*componentContext*/
        t[2]
      )
    }
  }), {
    c() {
      _ && _.c(), r = hr(), h && h.c(), e = hr(), n = Pe("div"), o = Pe("div"), Ut(i.$$.fragment), g(o, "class", vo.tooltip__inner), g(n, "class", s = ht(
        "tooltip",
        vo,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Er.root_platform_desktop : "")), g(n, "role", "dialog"), g(
        n,
        "aria-modal",
        /*modal*/
        t[3]
      ), I(
        n,
        "top",
        /*tooltipY*/
        t[11]
      ), I(
        n,
        "left",
        /*tooltipX*/
        t[10]
      ), I(
        n,
        "width",
        /*tooltipWidth*/
        t[12]
      ), I(
        n,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    m(m, p) {
      _ && _.m(m, p), J(m, r, p), h && h.m(m, p), J(m, e, p), J(m, n, p), bt(n, o), Bt(i, o, null), t[40](o), t[41](n), u = !0, c || (f = [
        xe(
          n,
          "keydown",
          /*onKeyDown*/
          t[26]
        ),
        xe(
          n,
          "introstart",
          /*onIntroStart*/
          t[28]
        ),
        xe(
          n,
          "introend",
          /*onIntroEnd*/
          t[29]
        ),
        xe(
          n,
          "outrostart",
          /*onOutroStart*/
          t[30]
        )
      ], c = !0);
    },
    p(m, p) {
      t = m, /*visible*/
      t[1] && /*modal*/
      t[3] ? _ ? _.p(t, p) : (_ = $f(t), _.c(), _.m(r.parentNode, r)) : _ && (_.d(1), _ = null), /*substrateComponentContext*/
      t[14] ? h ? (h.p(t, p), p[0] & /*substrateComponentContext*/
      16384 && L(h, 1)) : (h = ed(t), h.c(), L(h, 1), h.m(e.parentNode, e)) : h && (fr(), x(h, 1, 1, () => {
        h = null;
      }), dr());
      const w = {};
      p[0] & /*componentContext*/
      4 && (w.componentContext = /*componentContext*/
      t[2]), i.$set(w), (!u || p[0] & /*mods, $isDesktop*/
      2129920 && s !== (s = ht(
        "tooltip",
        vo,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Er.root_platform_desktop : ""))) && g(n, "class", s), (!u || p[0] & /*modal*/
      8) && g(
        n,
        "aria-modal",
        /*modal*/
        t[3]
      ), p[0] & /*tooltipY*/
      2048 && I(
        n,
        "top",
        /*tooltipY*/
        t[11]
      ), p[0] & /*tooltipX*/
      1024 && I(
        n,
        "left",
        /*tooltipX*/
        t[10]
      ), p[0] & /*tooltipWidth*/
      4096 && I(
        n,
        "width",
        /*tooltipWidth*/
        t[12]
      ), p[0] & /*tooltipHeight*/
      8192 && I(
        n,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    i(m) {
      u || (L(h), L(i.$$.fragment, m), go(() => {
        u && (l && l.end(1), a = hl(n, rl, {
          animations: (
            /*$animationIn*/
            t[5] || Hi
          ),
          direction: "in"
        }), a.start());
      }), u = !0);
    },
    o(m) {
      x(h), x(i.$$.fragment, m), a && a.invalidate(), l = Pd(n, rl, {
        animations: (
          /*$animationOut*/
          t[4] || Hi
        ),
        direction: "out"
      }), u = !1;
    },
    d(m) {
      m && (G(r), G(e), G(n)), _ && _.d(m), h && h.d(m), Rt(i), t[40](null), t[41](null), m && l && l.end(), c = !1, Rr(f);
    }
  };
}
function Y3(t) {
  let r, e, n, o, i, s, a, l, u, c, f, _ = (
    /*substrateComponentContext*/
    t[14] && td(t)
  ), h = (
    /*visible*/
    t[1] && /*modal*/
    t[3] && /*data*/
    t[0].background_accessibility_description && rd(t)
  );
  return i = new Kn({
    props: {
      componentContext: (
        /*componentContext*/
        t[2]
      )
    }
  }), {
    c() {
      _ && _.c(), r = hr(), e = Pe("dialog"), h && h.c(), n = hr(), o = Pe("div"), Ut(i.$$.fragment), g(o, "class", vo.tooltip__inner), g(e, "class", s = ht(
        "tooltip",
        vo,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Er.root_platform_desktop : "")), I(
        e,
        "top",
        /*tooltipY*/
        t[11]
      ), I(
        e,
        "left",
        /*tooltipX*/
        t[10]
      ), I(
        e,
        "width",
        /*tooltipWidth*/
        t[12]
      ), I(
        e,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    m(m, p) {
      _ && _.m(m, p), J(m, r, p), J(m, e, p), h && h.m(e, null), bt(e, n), bt(e, o), Bt(i, o, null), t[36](o), t[37](e), u = !0, c || (f = [
        xe(
          e,
          "keydown",
          /*onKeyDown*/
          t[26]
        ),
        xe(
          e,
          "close",
          /*onClose*/
          t[27]
        ),
        xe(
          e,
          "cancel",
          /*onClose*/
          t[27]
        ),
        xe(
          e,
          "click",
          /*onOutClick*/
          t[23]
        ),
        xe(
          e,
          "introstart",
          /*onIntroStart*/
          t[28]
        ),
        xe(
          e,
          "introend",
          /*onIntroEnd*/
          t[29]
        ),
        xe(
          e,
          "outrostart",
          /*onOutroStart*/
          t[30]
        )
      ], c = !0);
    },
    p(m, p) {
      t = m, /*substrateComponentContext*/
      t[14] ? _ ? (_.p(t, p), p[0] & /*substrateComponentContext*/
      16384 && L(_, 1)) : (_ = td(t), _.c(), L(_, 1), _.m(r.parentNode, r)) : _ && (fr(), x(_, 1, 1, () => {
        _ = null;
      }), dr()), /*visible*/
      t[1] && /*modal*/
      t[3] && /*data*/
      t[0].background_accessibility_description ? h ? h.p(t, p) : (h = rd(t), h.c(), h.m(e, n)) : h && (h.d(1), h = null);
      const w = {};
      p[0] & /*componentContext*/
      4 && (w.componentContext = /*componentContext*/
      t[2]), i.$set(w), (!u || p[0] & /*mods, $isDesktop*/
      2129920 && s !== (s = ht(
        "tooltip",
        vo,
        /*mods*/
        t[15]
      ) + " " + /*$isDesktop*/
      (t[21] ? Er.root_platform_desktop : ""))) && g(e, "class", s), p[0] & /*tooltipY*/
      2048 && I(
        e,
        "top",
        /*tooltipY*/
        t[11]
      ), p[0] & /*tooltipX*/
      1024 && I(
        e,
        "left",
        /*tooltipX*/
        t[10]
      ), p[0] & /*tooltipWidth*/
      4096 && I(
        e,
        "width",
        /*tooltipWidth*/
        t[12]
      ), p[0] & /*tooltipHeight*/
      8192 && I(
        e,
        "height",
        /*tooltipHeight*/
        t[13]
      );
    },
    i(m) {
      u || (L(_), L(i.$$.fragment, m), go(() => {
        u && (l && l.end(1), a = hl(e, rl, {
          animations: (
            /*$animationIn*/
            t[5] || Hi
          ),
          direction: "in"
        }), a.start());
      }), u = !0);
    },
    o(m) {
      x(_), x(i.$$.fragment, m), a && a.invalidate(), l = Pd(e, rl, {
        animations: (
          /*$animationOut*/
          t[4] || Hi
        ),
        direction: "out"
      }), u = !1;
    },
    d(m) {
      m && (G(r), G(e)), _ && _.d(m), h && h.d(), Rt(i), t[36](null), t[37](null), m && l && l.end(), c = !1, Rr(f);
    }
  };
}
function $f(t) {
  let r;
  function e(i, s) {
    return (
      /*data*/
      i[0].background_accessibility_description ? Z3 : X3
    );
  }
  let n = e(t), o = n(t);
  return {
    c() {
      o.c(), r = er();
    },
    m(i, s) {
      o.m(i, s), J(i, r, s);
    },
    p(i, s) {
      n === (n = e(i)) && o ? o.p(i, s) : (o.d(1), o = n(i), o && (o.c(), o.m(r.parentNode, r)));
    },
    d(i) {
      i && G(r), o.d(i);
    }
  };
}
function X3(t) {
  let r, e, n;
  return {
    c() {
      r = Pe("div"), g(r, "class", vo.tooltip__overlay);
    },
    m(o, i) {
      J(o, r, i), e || (n = xe(
        r,
        "click",
        /*closeByOutside*/
        t[24]
      ), e = !0);
    },
    p: v,
    d(o) {
      o && G(r), e = !1, n();
    }
  };
}
function Z3(t) {
  let r, e, n, o;
  return {
    c() {
      r = Pe("button"), g(r, "class", vo.tooltip__overlay), g(r, "type", "button"), g(r, "aria-label", e = /*data*/
      t[0].background_accessibility_description);
    },
    m(i, s) {
      J(i, r, s), n || (o = xe(
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
      i && G(r), n = !1, o();
    }
  };
}
function ed(t) {
  let r, e, n, o, i;
  return e = new Kn({
    props: {
      componentContext: (
        /*substrateComponentContext*/
        t[14]
      )
    }
  }), {
    c() {
      r = Pe("div"), Ut(e.$$.fragment), n = hr(), o = Pe("div"), g(r, "class", vo.tooltip__substrate);
    },
    m(s, a) {
      J(s, r, a), Bt(e, r, null), t[38](r), J(s, n, a), J(s, o, a), t[39](o), i = !0;
    },
    p(s, a) {
      const l = {};
      a[0] & /*substrateComponentContext*/
      16384 && (l.componentContext = /*substrateComponentContext*/
      s[14]), e.$set(l);
    },
    i(s) {
      i || (L(e.$$.fragment, s), i = !0);
    },
    o(s) {
      x(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && (G(r), G(n), G(o)), Rt(e), t[38](null), t[39](null);
    }
  };
}
function td(t) {
  let r, e, n, o, i;
  return e = new Kn({
    props: {
      componentContext: (
        /*substrateComponentContext*/
        t[14]
      )
    }
  }), {
    c() {
      r = Pe("div"), Ut(e.$$.fragment), n = hr(), o = Pe("div"), g(r, "class", vo.tooltip__substrate);
    },
    m(s, a) {
      J(s, r, a), Bt(e, r, null), t[34](r), J(s, n, a), J(s, o, a), t[35](o), i = !0;
    },
    p(s, a) {
      const l = {};
      a[0] & /*substrateComponentContext*/
      16384 && (l.componentContext = /*substrateComponentContext*/
      s[14]), e.$set(l);
    },
    i(s) {
      i || (L(e.$$.fragment, s), i = !0);
    },
    o(s) {
      x(e.$$.fragment, s), i = !1;
    },
    d(s) {
      s && (G(r), G(n), G(o)), Rt(e), t[34](null), t[35](null);
    }
  };
}
function rd(t) {
  let r, e, n, o;
  return {
    c() {
      r = Pe("button"), g(r, "class", vo.tooltip__overlay), g(r, "type", "button"), g(r, "aria-label", e = /*data*/
      t[0].background_accessibility_description);
    },
    m(i, s) {
      J(i, r, s), n || (o = xe(
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
      i && G(r), n = !1, o();
    }
  };
}
function Q3(t) {
  let r, e, n, o, i, s, a;
  const l = [Y3, q3], u = [];
  function c(f, _) {
    return rs ? 0 : 1;
  }
  return e = c(), n = u[e] = l[e](t), {
    c() {
      r = hr(), n.c(), o = er();
    },
    m(f, _) {
      J(f, r, _), u[e].m(f, _), J(f, o, _), i = !0, s || (a = [
        xe(
          K3,
          "resize",
          /*onWindowResize*/
          t[25]
        ),
        xe(
          J3.body,
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
      i || (L(n), i = !0);
    },
    o(f) {
      x(n), i = !1;
    },
    d(f) {
      f && (G(r), G(o)), u[e].d(f), s = !1, Rr(a);
    }
  };
}
const Hi = {
  name: "set",
  items: [{ name: "translate" }, { name: "fade" }]
};
let Yn = [];
function x3(t, r, e) {
  let n, o, i, s, a, l, u, c, f, _ = v, h = () => (_(), _ = C(i, (F) => e(46, f = F)), i), m, p = v, w = () => (p(), p = C(o, (F) => e(47, m = F)), o), k, N = v, H = () => (N(), N = C(n, (F) => e(48, k = F)), n), z, oe = v, _e = () => (oe(), oe = C(a, (F) => e(4, z = F)), a), T, Y = v, le = () => (Y(), Y = C(s, (F) => e(5, T = F)), s), E;
  t.$$.on_destroy.push(() => _()), t.$$.on_destroy.push(() => p()), t.$$.on_destroy.push(() => N()), t.$$.on_destroy.push(() => oe()), t.$$.on_destroy.push(() => Y());
  let { ownerNode: D } = r, { data: M } = r, { internalId: W } = r, { parentComponentContext: q } = r;
  const be = Tr(Yr), Ae = be.isDesktop;
  yn(t, Ae, (F) => e(21, E = F));
  const Ce = Date.now();
  let me, Fe, Q, Ke, Ye = !1, Xe = "", ye = "", Me = "", ce = "", he = null, fe, re, de = !0, ne = null;
  function we() {
    var gt, Ie;
    if (!me || !D)
      return;
    const F = me.parentElement;
    if (!F)
      return;
    const Ct = me.style.cssText;
    e(6, me.style.cssText += ";transform: none !important", me);
    const ut = D.getBoundingClientRect(), Vt = me.getBoundingClientRect(), Dt = F.getBoundingClientRect();
    e(6, me.style.cssText = Ct, me);
    let lt = 0, K = 0, Mt = null, It = null, Xt = 0, Zt = 0;
    const Ee = (gt = fe == null ? void 0 : fe.json) == null ? void 0 : gt.width, Ze = (Ie = fe == null ? void 0 : fe.json) == null ? void 0 : Ie.height;
    if (!Ee || Ee.type === "match_parent" ? Xt = Mt = window.innerWidth : Ee.type === "fixed" && Ee.value ? Xt = Mt = Ee.value : Xt = Vt.width, (Ze == null ? void 0 : Ze.type) === "match_parent" ? Zt = It = window.innerHeight : (Ze == null ? void 0 : Ze.type) === "fixed" && Ze.value ? Zt = It = Ze.value : Zt = Vt.height, k === "left" || k === "bottom-left" || k === "top-left")
      lt = ut.left - Xt;
    else if (k === "top" || k === "bottom" || k === "center")
      lt = (ut.left + ut.right) / 2 - Xt / 2;
    else if (k === "right" || k === "bottom-right" || k === "top-right")
      lt = ut.right;
    else
      return;
    if (k === "top" || k === "top-left" || k === "top-right")
      K = ut.top - Zt;
    else if (k === "left" || k === "right" || k === "center")
      K = (ut.top + ut.bottom) / 2 - Zt / 2;
    else if (k === "bottom-left" || k === "bottom" || k === "bottom-right")
      K = ut.bottom;
    else
      return;
    rs && de || (lt -= Dt.left, K -= Dt.top), lt += m || 0, K += f || 0, e(10, Xe = `${lt}px`), e(11, ye = `${K}px`), e(12, Me = Mt !== null ? `${Mt}px` : ""), e(13, ce = It !== null ? `${It}px` : ""), e(1, Ye = !0), Mt === null || It === null ? typeof ResizeObserver < "u" && !he && (he = new ResizeObserver(() => {
      requestAnimationFrame(we);
    }), he.observe(me)) : he == null || he.disconnect();
  }
  function Ue(F) {
    if (Yn.length && Yn[Yn.length - 1] !== me)
      return;
    const Ct = F.composedPath();
    Date.now() - Ce < 100 || Ct.includes(me) && !(rs && Ct[0] === me) || Ge();
  }
  function Ge(F) {
    F == null || F.stopPropagation(), F == null || F.preventDefault(), fe.getJsonWithVars(M.close_by_tap_outside) !== !1 && (Yn = Yn.filter((Ct) => Ct !== me), be.onTooltipClose(W)), M.tap_outside_actions && fe.execAnyActions(M.tap_outside_actions, { processUrls: !0 });
  }
  function $() {
    we();
  }
  function Be(F) {
    Yn.length && Yn[Yn.length - 1] !== me || F.key === "Escape" && !F.ctrlKey && !F.shiftKey && !F.altKey && !F.metaKey && (Yn = Yn.filter((Ct) => Ct !== me), be.onTooltipClose(W));
  }
  function Ne(F) {
    Yn = Yn.filter((Ct) => Ct !== me), be.onTooltipClose(W), F.preventDefault();
  }
  function ot() {
    Q && Q.animate({ opacity: [0, 1] }, {
      duration: l,
      easing: "ease-in-out"
    });
  }
  function ct() {
    Q && me.insertBefore(Q, Fe);
  }
  function nt() {
    Ke != null && Ke.parentElement && Q && (Ke.parentElement.insertBefore(Q, Ke), Q.animate({ opacity: [1, 0] }, {
      duration: u,
      easing: "ease-in-out"
    }));
  }
  xn(() => {
    try {
      ne = document.activeElement;
    } catch {
    }
    if (be.tooltipRoot) {
      const F = window.getComputedStyle(me);
      e(6, me.style.fontSize = F.fontSize, me), e(6, me.style.fontFamily = F.fontFamily, me), e(6, me.style.lineHeight = F.lineHeight, me), be.tooltipRoot.appendChild(me);
    }
    rs && me && me instanceof HTMLDialogElement && me[de ? "showModal" : "show"](), de && Yn.push(me);
  }), gl(() => {
    Ye || we();
  }), sn(() => {
    if (fe && fe.destroy(), re && re.destroy(), he == null || he.disconnect(), Yn = Yn.filter((F) => F !== me), de && ne && ne instanceof HTMLElement) {
      rs && me && me instanceof HTMLDialogElement && me.close();
      try {
        ne.focus({ preventScroll: !0 });
      } catch {
      }
    }
  });
  function kt(F) {
    Dr[F ? "unshift" : "push"](() => {
      Q = F, e(8, Q);
    });
  }
  function it(F) {
    Dr[F ? "unshift" : "push"](() => {
      Ke = F, e(9, Ke);
    });
  }
  function Pt(F) {
    Dr[F ? "unshift" : "push"](() => {
      Fe = F, e(7, Fe);
    });
  }
  function ft(F) {
    Dr[F ? "unshift" : "push"](() => {
      me = F, e(6, me);
    });
  }
  function Z(F) {
    Dr[F ? "unshift" : "push"](() => {
      Q = F, e(8, Q);
    });
  }
  function pe(F) {
    Dr[F ? "unshift" : "push"](() => {
      Ke = F, e(9, Ke);
    });
  }
  function st(F) {
    Dr[F ? "unshift" : "push"](() => {
      Fe = F, e(7, Fe);
    });
  }
  function ze(F) {
    Dr[F ? "unshift" : "push"](() => {
      me = F, e(6, me);
    });
  }
  return t.$$set = (F) => {
    "ownerNode" in F && e(31, D = F.ownerNode), "data" in F && e(0, M = F.data), "internalId" in F && e(32, W = F.internalId), "parentComponentContext" in F && e(33, q = F.parentComponentContext);
  }, t.$$.update = () => {
    var F, Ct, ut, Vt, Dt;
    t.$$.dirty[0] & /*componentContext, data*/
    5 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && (fe && fe.destroy(), e(2, fe = q.produceChildContext(M.div || {}, { isTooltipRoot: !0 })), M.substrate_div && e(14, re = q.produceChildContext(M.substrate_div, { isTooltipRoot: !0 }))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && H(e(20, n = q.getDerivedFromVars(M.position))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && w(e(19, o = q.getDerivedFromVars((Ct = (F = M.offset) == null ? void 0 : F.x) == null ? void 0 : Ct.value))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && h(e(18, i = q.getDerivedFromVars((Vt = (ut = M.offset) == null ? void 0 : ut.y) == null ? void 0 : Vt.value))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && le(e(17, s = q.getDerivedFromVars(M.animation_in))), t.$$.dirty[0] & /*data*/
    1 | t.$$.dirty[1] & /*parentComponentContext*/
    4 && _e(e(16, a = q.getDerivedFromVars(M.animation_out))), t.$$.dirty[0] & /*$animationIn*/
    32 && (l = Bi() ? 0 : ua(cs(T || Hi))), t.$$.dirty[0] & /*$animationOut*/
    16 && (u = Bi() ? 0 : ua(cs(z || Hi))), t.$$.dirty[0] & /*data*/
    1 && (((Dt = M.mode) == null ? void 0 : Dt.type) === "non_modal" ? e(3, de = !1) : e(3, de = !0)), t.$$.dirty[0] & /*visible, modal*/
    10 && e(15, c = { visible: Ye, modal: de });
  }, [
    M,
    Ye,
    fe,
    de,
    z,
    T,
    me,
    Fe,
    Q,
    Ke,
    Xe,
    ye,
    Me,
    ce,
    re,
    c,
    a,
    s,
    i,
    o,
    n,
    E,
    Ae,
    Ue,
    Ge,
    $,
    Be,
    Ne,
    ot,
    ct,
    nt,
    D,
    W,
    q,
    kt,
    it,
    Pt,
    ft,
    Z,
    pe,
    st,
    ze
  ];
}
class $3 extends Br {
  constructor(r) {
    super(), Or(
      this,
      r,
      x3,
      Q3,
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
const e4 = "appkit-root_platform_desktop", t4 = "appkit-menu", r4 = "appkit-menu_visible", n4 = "appkit-menu__list", o4 = "appkit-menu__item", Ws = {
  root_platform_desktop: e4,
  menu: t4,
  menu_visible: r4,
  menu__list: n4,
  menu__item: o4
}, { window: nd } = Po;
function od(t, r, e) {
  const n = t.slice();
  return n[23] = r[e], n;
}
function i4(t) {
  let r = (
    /*item*/
    t[23].text + ""
  ), e;
  return {
    c() {
      e = On(r);
    },
    m(n, o) {
      J(n, e, o);
    },
    p(n, o) {
      o & /*items*/
      1 && r !== (r = /*item*/
      n[23].text + "") && Jn(e, r);
    },
    d(n) {
      n && G(e);
    }
  };
}
function id(t) {
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
      cls: Ws.menu__item + " " + /*itemMix*/
      t[10],
      customAction: (
        /*onItemAction*/
        t[14]
      ),
      $$slots: { default: [i4] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      r = Pe("li"), Ut(e.$$.fragment), n = hr();
    },
    m(i, s) {
      J(i, r, s), Bt(e, r, null), bt(r, n), o = !0;
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
      o || (L(e.$$.fragment, i), o = !0);
    },
    o(i) {
      x(e.$$.fragment, i), o = !1;
    },
    d(i) {
      i && G(r), Rt(e);
    }
  };
}
function s4(t) {
  let r, e, n, o, i, s, a, l = ar(
    /*items*/
    t[0]
  ), u = [];
  for (let f = 0; f < l.length; f += 1)
    u[f] = id(od(t, l, f));
  const c = (f) => x(u[f], 1, 1, () => {
    u[f] = null;
  });
  return {
    c() {
      r = Pe("div"), e = Pe("ul");
      for (let f = 0; f < u.length; f += 1)
        u[f].c();
      g(e, "class", Ws.menu__list), g(r, "class", n = ht(
        "menu",
        Ws,
        /*mods*/
        t[7]
      ) + " " + /*$isDesktop*/
      (t[8] ? Er.root_platform_desktop : "") + " " + /*popupMix*/
      t[9]), I(
        r,
        "top",
        /*menuY*/
        t[4]
      ), I(
        r,
        "left",
        /*menuX*/
        t[3]
      ), I(
        r,
        "width",
        /*menuWidth*/
        t[5]
      ), I(
        r,
        "height",
        /*menuHeight*/
        t[6]
      );
    },
    m(f, _) {
      J(f, r, _), bt(r, e);
      for (let h = 0; h < u.length; h += 1)
        u[h] && u[h].m(e, null);
      t[17](r), i = !0, s || (a = [
        xe(
          nd,
          "click",
          /*onWindowClick*/
          t[12]
        ),
        xe(
          nd,
          "resize",
          /*onWindowResize*/
          t[13]
        )
      ], s = !0);
    },
    p(f, [_]) {
      if (_ & /*parentComponentContext, items, itemMix, onItemAction*/
      17411) {
        l = ar(
          /*items*/
          f[0]
        );
        let h;
        for (h = 0; h < l.length; h += 1) {
          const m = od(f, l, h);
          u[h] ? (u[h].p(m, _), L(u[h], 1)) : (u[h] = id(m), u[h].c(), L(u[h], 1), u[h].m(e, null));
        }
        for (fr(), h = l.length; h < u.length; h += 1)
          c(h);
        dr();
      }
      (!i || _ & /*mods, $isDesktop*/
      384 && n !== (n = ht(
        "menu",
        Ws,
        /*mods*/
        f[7]
      ) + " " + /*$isDesktop*/
      (f[8] ? Er.root_platform_desktop : "") + " " + /*popupMix*/
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
          L(u[_]);
        f && go(() => {
          i && (o || (o = mu(r, xf, { y: 20 }, !0)), o.run(1));
        }), i = !0;
      }
    },
    o(f) {
      u = u.filter(Boolean);
      for (let _ = 0; _ < u.length; _ += 1)
        x(u[_]);
      f && (o || (o = mu(r, xf, { y: 20 }, !1)), o.run(0)), i = !1;
    },
    d(f) {
      f && G(r), on(u, f), t[17](null), f && o && o.end(), s = !1, Rr(a);
    }
  };
}
function l4(t, r, e) {
  let n, o, { ownerNode: i } = r, { items: s } = r, { parentComponentContext: a } = r;
  const l = Tr(Yr), u = l.getCustomization("menuPopupClass") || "", c = l.getCustomization("menuItemClass") || "", f = l.isDesktop;
  yn(t, f, (E) => e(8, o = E));
  const _ = Date.now(), h = Ah();
  let m, p = !1, w = "", k = "", N = "", H = "", z = null;
  function oe() {
    if (!m || !i)
      return;
    const E = m.parentElement;
    if (!E)
      return;
    const D = i.getBoundingClientRect(), M = m.getBoundingClientRect(), W = E.getBoundingClientRect(), q = window.innerWidth, be = window.innerHeight;
    let Ae = 0, Ce = 0, me = M.width, Fe = M.height;
    Ae = D.left - W.left, Ce = D.bottom - W.top, Ae + me > q && (Ae = q - me), Ae < 0 && (Ae = 0), Ce + Fe > be && (D.top - W.top - Fe > 0 ? Ce = D.top - W.top - Fe : Ce = be - Fe), Ce < 0 && (Ce = 0), e(3, w = `${Ae}px`), e(4, k = `${Ce}px`), e(5, N = ""), e(6, H = ""), e(16, p = !0), typeof ResizeObserver < "u" && !z && (z = new ResizeObserver(() => {
      requestAnimationFrame(oe);
    }), z.observe(m));
  }
  function _e(E) {
    Date.now() - _ < 100 || E.composedPath().includes(m) || h("close");
  }
  function T() {
    oe();
  }
  function Y() {
    return h("close"), !0;
  }
  xn(() => {
    if (l.tooltipRoot) {
      const E = window.getComputedStyle(m);
      e(2, m.style.fontSize = E.fontSize, m), e(2, m.style.fontFamily = E.fontFamily, m), e(2, m.style.lineHeight = E.lineHeight, m), l.tooltipRoot.appendChild(m);
    }
  }), gl(() => {
    p || oe();
  }), sn(() => {
    z == null || z.disconnect();
  });
  function le(E) {
    Dr[E ? "unshift" : "push"](() => {
      m = E, e(2, m);
    });
  }
  return t.$$set = (E) => {
    "ownerNode" in E && e(15, i = E.ownerNode), "items" in E && e(0, s = E.items), "parentComponentContext" in E && e(1, a = E.parentComponentContext);
  }, t.$$.update = () => {
    t.$$.dirty & /*visible*/
    65536 && e(7, n = { visible: p });
  }, [
    s,
    a,
    m,
    w,
    k,
    N,
    H,
    n,
    o,
    u,
    c,
    f,
    _e,
    T,
    Y,
    i,
    p,
    le
  ];
}
class a4 extends Br {
  constructor(r) {
    super(), Or(this, r, l4, s4, Sr, {
      ownerNode: 15,
      items: 0,
      parentComponentContext: 1
    });
  }
}
const { Map: u4 } = Po;
function sd(t, r, e) {
  const n = t.slice();
  return n[134] = r[e], n;
}
function ld(t) {
  let r, e, n, o, i, s, a, l, u, c;
  e = new c3({
    props: { svgFiltersMap: (
      /*svgFiltersMap*/
      t[5]
    ) }
  }), o = new Kn({
    props: {
      componentContext: (
        /*rootStateComponentContext*/
        t[6]
      )
    }
  });
  let f = (
    /*tooltips*/
    t[3] && ad(t)
  ), _ = (
    /*menu*/
    t[4] && cd(t)
  );
  return {
    c() {
      r = Pe("div"), Ut(e.$$.fragment), n = hr(), Ut(o.$$.fragment), i = hr(), f && f.c(), s = hr(), _ && _.c(), g(r, "class", a = Er.root + /*$isDesktop*/
      (t[7] ? ` ${Er.root_platform_desktop}` : "") + /*mix*/
      (t[0] ? ` ${/*mix*/
      t[0]}` : "")), g(
        r,
        "dir",
        /*$directionStore*/
        t[8]
      );
    },
    m(h, m) {
      J(h, r, m), Bt(e, r, null), bt(r, n), Bt(o, r, null), bt(r, i), f && f.m(r, null), bt(r, s), _ && _.m(r, null), l = !0, u || (c = xe(r, "touchstart", _4, { passive: !0 }), u = !0);
    },
    p(h, m) {
      const p = {};
      m[0] & /*svgFiltersMap*/
      32 && (p.svgFiltersMap = /*svgFiltersMap*/
      h[5]), e.$set(p);
      const w = {};
      m[0] & /*rootStateComponentContext*/
      64 && (w.componentContext = /*rootStateComponentContext*/
      h[6]), o.$set(w), /*tooltips*/
      h[3] ? f ? (f.p(h, m), m[0] & /*tooltips*/
      8 && L(f, 1)) : (f = ad(h), f.c(), L(f, 1), f.m(r, s)) : f && (fr(), x(f, 1, 1, () => {
        f = null;
      }), dr()), /*menu*/
      h[4] ? _ ? (_.p(h, m), m[0] & /*menu*/
      16 && L(_, 1)) : (_ = cd(h), _.c(), L(_, 1), _.m(r, null)) : _ && (fr(), x(_, 1, 1, () => {
        _ = null;
      }), dr()), (!l || m[0] & /*$isDesktop, mix*/
      129 && a !== (a = Er.root + /*$isDesktop*/
      (h[7] ? ` ${Er.root_platform_desktop}` : "") + /*mix*/
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
      l || (L(e.$$.fragment, h), L(o.$$.fragment, h), L(f), L(_), l = !0);
    },
    o(h) {
      x(e.$$.fragment, h), x(o.$$.fragment, h), x(f), x(_), l = !1;
    },
    d(h) {
      h && G(r), Rt(e), Rt(o), f && f.d(), _ && _.d(), u = !1, c();
    }
  };
}
function ad(t) {
  let r = [], e = new u4(), n, o, i = ar(
    /*tooltips*/
    t[3]
  );
  const s = (a) => (
    /*item*/
    a[134].internalId
  );
  for (let a = 0; a < i.length; a += 1) {
    let l = sd(t, i, a), u = s(l);
    e.set(u, r[a] = ud(u, l));
  }
  return {
    c() {
      for (let a = 0; a < r.length; a += 1)
        r[a].c();
      n = er();
    },
    m(a, l) {
      for (let u = 0; u < r.length; u += 1)
        r[u] && r[u].m(a, l);
      J(a, n, l), o = !0;
    },
    p(a, l) {
      l[0] & /*tooltips, rootStateComponentContext*/
      72 && (i = ar(
        /*tooltips*/
        a[3]
      ), fr(), r = zd(r, l, s, 1, a, i, e, n.parentNode, Nd, ud, n, sd), dr());
    },
    i(a) {
      if (!o) {
        for (let l = 0; l < i.length; l += 1)
          L(r[l]);
        o = !0;
      }
    },
    o(a) {
      for (let l = 0; l < r.length; l += 1)
        x(r[l]);
      o = !1;
    },
    d(a) {
      a && G(n);
      for (let l = 0; l < r.length; l += 1)
        r[l].d(a);
    }
  };
}
function ud(t, r) {
  let e, n, o;
  return n = new $3({
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
      e = er(), Ut(n.$$.fragment), this.first = e;
    },
    m(i, s) {
      J(i, e, s), Bt(n, i, s), o = !0;
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
      o || (L(n.$$.fragment, i), o = !0);
    },
    o(i) {
      x(n.$$.fragment, i), o = !1;
    },
    d(i) {
      i && G(e), Rt(n, i);
    }
  };
}
function cd(t) {
  let r, e;
  return r = new a4({
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
      Ut(r.$$.fragment);
    },
    m(n, o) {
      Bt(r, n, o), e = !0;
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
      e || (L(r.$$.fragment, n), e = !0);
    },
    o(n) {
      x(r.$$.fragment, n), e = !1;
    },
    d(n) {
      Rt(r, n);
    }
  };
}
function c4(t) {
  let r, e, n = !/*hasError*/
  t[1] && !/*hasIdError*/
  t[2] && /*rootStateComponentContext*/
  t[6] && ld(t);
  return {
    c() {
      n && n.c(), r = er();
    },
    m(o, i) {
      n && n.m(o, i), J(o, r, i), e = !0;
    },
    p(o, i) {
      !/*hasError*/
      o[1] && !/*hasIdError*/
      o[2] && /*rootStateComponentContext*/
      o[6] ? n ? (n.p(o, i), i[0] & /*hasError, hasIdError, rootStateComponentContext*/
      70 && L(n, 1)) : (n = ld(o), n.c(), L(n, 1), n.m(r.parentNode, r)) : n && (fr(), x(n, 1, 1, () => {
        n = null;
      }), dr());
    },
    i(o) {
      e || (L(n), e = !0);
    },
    o(o) {
      x(n), e = !1;
    },
    d(o) {
      o && G(r), n && n.d(o);
    }
  };
}
let Va = Io(!0), Es = 0;
function fd() {
  Va.set(!1);
}
function dd() {
  Va.set(!0);
}
const f4 = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean"]), d4 = /* @__PURE__ */ new Set(["string", "integer", "number", "url", "color", "boolean", "array", "dict"]);
function Wo(t, r) {
  if (t && r)
    return new Map([...t, ...r]);
  if (t)
    return t;
  if (r)
    return r;
}
function _4() {
}
function p4(t, r, e) {
  var Ur, ln, cn;
  let n, o, i, s, { id: a } = r, { json: l = {} } = r, { platform: u = "auto" } = r, { theme: c = "system" } = r, { globalVariablesController: f = void 0 } = r, { mix: _ = "" } = r, { customization: h = {} } = r, { builtinProtocols: m = ["http", "https", "tel", "mailto", "intent"] } = r, { extensions: p = /* @__PURE__ */ new Map() } = r, { onError: w = void 0 } = r, { onStat: k = void 0 } = r, { onSubmit: N = void 0 } = r, { onCustomAction: H = void 0 } = r, { onComponent: z = void 0 } = r, { typefaceProvider: oe = (y) => "" } = r, { fetchInit: _e = {} } = r, { tooltipRoot: T = void 0 } = r, { customComponents: Y = void 0 } = r, { direction: le = "ltr" } = r, { store: E = void 0 } = r, { pagerChildrenClipEnabled: D = !0 } = r, { pagerMouseDragEnabled: M = !0 } = r, { weekStartDay: W = 0 } = r, { videoPlayerProvider: q = void 0 } = r, { devtoolCreateHierarchy: be = "lazy" } = r, Ae = !0, Ce = Io(u === "desktop");
  if (yn(t, Ce, (y) => e(7, i = y)), u === "auto" && typeof matchMedia < "u") {
    const y = matchMedia("(any-pointer: coarse)");
    Ce.set(!y.matches), y.addListener(() => {
      Ce.set(!y.matches);
    });
  }
  let me = "light", Fe = null;
  const Q = Io(le === "rtl" ? "rtl" : "ltr");
  yn(t, Q, (y) => e(8, s = y));
  function Ke() {
    c !== "system" || !Fe || e(41, me = Fe.matches ? "dark" : "light");
  }
  function Ye(y) {
    e(12, c = y);
  }
  function Xe() {
    return Ge;
  }
  function ye() {
    return $;
  }
  function Me(y) {
    e(11, l = y);
  }
  function ce(y) {
    return jt(y, F);
  }
  const he = new Set(m);
  let fe = !1, re = !1;
  a || (re = !0, F(X(new Error('"id" prop is required'))));
  const de = { stateChange: !1 }, ne = f || new b_(), we = ne.getLastAddedVariableStore(), Ue = ne.getVariables(), Ge = /* @__PURE__ */ new Map(), $ = /* @__PURE__ */ new Map(), Be = /* @__PURE__ */ new Map(), Ne = /* @__PURE__ */ new Map();
  let ot = null;
  const ct = /* @__PURE__ */ new Map();
  let nt = 0, kt = [];
  const it = /* @__PURE__ */ new Set();
  let Pt;
  const ft = [];
  function Z(y) {
    return h == null ? void 0 : h[y];
  }
  function pe(y, A, { additionalVars: S, keepComplex: ee = !1, customFunctions: O, emptyVarsError: tt, maxDepth: De } = {}) {
    var Nt;
    if (!A)
      return Jo(A);
    const tr = Wo($, S), se = Qf(A, y, E, W, De);
    if (!se.vars.length)
      if (se.hasExpression) {
        const St = se.applyVars(tr, O);
        if (!((Nt = St.usedVars) != null && Nt.size))
          return tt && tt(), Jo(St.result);
      } else
        return tt && tt(), Jo(A);
    const We = se.vars.map((St) => tr.get(St) || $t(St)).filter(zo);
    return Io(void 0, (St) => {
      const Cr = /* @__PURE__ */ new Map();
      let Gr;
      const an = () => {
        var mn;
        const Mr = se.applyVars(tr, O, ee);
        for (const [bn, Vn] of Cr)
          (mn = Mr.usedVars) != null && mn.has(bn) || (Vn(), Cr.delete(bn));
        if (Mr.usedVars) {
          for (const bn of Mr.usedVars)
            if (!Cr.has(bn)) {
              let Vn = !0;
              Cr.set(bn, bn.subscribe(() => {
                Vn || St(an()), Vn = !1;
              }));
            }
        }
        return Mr.result;
      };
      return Gr = Ji(We, an).subscribe((Mr) => {
        St(Mr);
      }), () => {
        Gr == null || Gr();
        for (const [Mr, mn] of Cr)
          mn();
      };
    });
  }
  function st(y, A, S, ee = !1, O = void 0) {
    const tt = Qf(A, y, E, W);
    if (!tt.hasExpression)
      return A;
    const De = Wo($, S);
    return tt.applyVars(De, O, ee).result;
  }
  function ze(y, A, S) {
    const ee = /* @__PURE__ */ new Map(), O = Rs(y, "dict", A);
    ee.set(y, O);
    const tt = Rs("index", "integer", S);
    return ee.set("index", tt), ee;
  }
  function F(y) {
    w ? w({ error: y }) : (y == null ? void 0 : y.level) === "warn" ? console.warn(y) : console.error(y);
  }
  function Ct(y, A) {
    k && k({ type: y, action: A });
  }
  function ut(y) {
    return y in n;
  }
  function Vt(y, A) {
    if (!y)
      return { json: y, templateContext: A };
    const S = /* @__PURE__ */ new Set([y.type]);
    for (; y.type && y.type in n; ) {
      if ({ json: y, templateContext: A } = f3(y, A, n, F), S.has(y.type))
        return { json: y, templateContext: A };
      S.add(y.type);
    }
    return { json: y, templateContext: A };
  }
  function Dt({ type: y, node: A, json: S, origJson: ee, templateContext: O, componentContext: tt, devapi: De }) {
    z && z({
      type: y,
      node: A,
      json: S,
      origJson: ee,
      templateContext: O,
      componentContext: tt,
      devapi: De
    });
  }
  let lt = 0;
  function K(y) {
    return `${a}-${lt++}`;
  }
  function Mt(y) {
    return `divkit-${K()}`;
  }
  let It = {}, Xt = {};
  function Zt(y, A) {
    const S = `${y}:${A}`;
    if (Xt[S] = Xt[S] || 0, ++Xt[S], It[S])
      return It[S];
    const ee = `${K()}-svg-filter`;
    return e(5, It = { ...It, [S]: ee }), ee;
  }
  function Ee(y, A) {
    if (!y)
      return;
    const S = `${y}:${A}`;
    Xt[S] && --Xt[S] === 0 && e(5, It = Object.keys(It).reduce(
      (ee, O) => (Xt[O] && (ee[O] = It[O]), ee),
      {}
    ));
  }
  const Ze = K() + "-id-", gt = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map();
  function $e(y) {
    return Ze + y;
  }
  function Le(y, A) {
    let S = gt.get(y) || [];
    return gt.has(y) || gt.set(y, S), S.push(A), () => {
      S = S.filter((O) => O !== A), S.length || gt.delete(y);
      const ee = $e(y);
      Ie.has(ee) && Ie.delete(ee);
    };
  }
  function Ft(y) {
    var S, ee;
    const A = (ee = (S = gt.get(y)) == null ? void 0 : S[0]) == null ? void 0 : ee.node();
    if (A) {
      const O = $e(y), tt = Ie.get(O);
      return tt && tt !== A && tt.removeAttribute("id"), A.setAttribute("id", O), Ie.set(O, A), O;
    }
    return "";
  }
  async function Oe(y, A) {
    var De, tr;
    if (!y)
      throw new Error("Missing state id");
    let S = y.split("/");
    const ee = S.length % 2 === 0 && F3(A);
    let O = ee || Fr;
    const tt = (A == null ? void 0 : A.logError) || F;
    if (!ee)
      if ((De = O.states) != null && De.root) {
        const se = O.states.root;
        if (se.length > 1) {
          tt(X(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: y } }));
          return;
        }
        if (O = await se[0](S[0]), !O)
          return;
        S = S.slice(1);
      } else
        return;
    for (let se = 0; se < S.length; se += 2) {
      const We = S[se], Nt = S[se + 1];
      if ((tr = O.states) != null && tr[We]) {
        const St = O.states[We];
        if (St.length > 1) {
          tt(X(new Error("Error resolving state. Found multiple elements that respond to path"), { additional: { stateId: y } }));
          return;
        }
        if (O = await St[0](Nt), !O)
          return;
      } else
        return;
    }
  }
  async function yt(y, A, S) {
    var Cr;
    const ee = (y == null ? void 0 : y.logError) || F;
    if (!P3(A)) {
      ee(X(new Error("Incorrect submit action"), {
        additional: { containerId: A.container_id }
      }));
      return;
    }
    const O = gt.get(A.container_id);
    if ((O == null ? void 0 : O.length) !== 1) {
      ee(X(new Error("Error resolving container. Found multiple elements that respond to id"), {
        additional: { containerId: A.container_id }
      }));
      return;
    }
    const tt = O[0].context(), De = {};
    if (tt.variables)
      for (const [Gr, an] of tt.variables) {
        const Mr = an.getValue();
        typeof Mr == "bigint" ? De[Gr] = Number(Mr) : De[Gr] = Mr;
      }
    if (N) {
      Promise.resolve().then(() => N(A, De)).then(() => {
        ir(S.on_success_actions, { componentContext: y });
      }).catch(() => {
        ir(S.on_fail_actions, { componentContext: y });
      });
      return;
    }
    const tr = Object.keys(De).length > 0, se = (A.request.method || "post").toLowerCase();
    if ((se === "get" || se === "head") && tr) {
      ee(X(new Error("Can't send variables using the get/head method."), { additional: { url: A.request.url } }));
      return;
    }
    let We = !1;
    const Nt = [];
    (Cr = A.request.headers) == null || Cr.forEach((Gr) => {
      Nt.push([Gr.name, Gr.value]), Gr.name.toLowerCase() === "content-type" && (We = !0);
    }), We || Nt.push(["Content-Type", "application/json"]);
    let St;
    typeof _e == "function" ? St = _e(A.request.url) : St = _e, fetch(A.request.url, {
      ...St,
      method: se,
      headers: Nt,
      body: tr ? JSON.stringify(De) : void 0
    }).then((Gr) => {
      if (!Gr.ok)
        throw new Error("Response is not ok");
      ir(S.on_success_actions, { componentContext: y });
    }).catch((Gr) => {
      ee(X(new Error("Failed to submit"), {
        additional: {
          url: A.request.url,
          originalError: Gr
        }
      })), ir(S.on_fail_actions, { componentContext: y });
    });
  }
  function Gt(y, A) {
    var O, tt, De, tr, se, We, Nt, St, Cr;
    const S = (y == null ? void 0 : y.logError) || F, ee = A.id && At(A.id);
    if (!ee) {
      S(X(new Error('Missing component for "scroll_to" action'), { additional: { id: A.id } }));
      return;
    }
    if (A.animated !== void 0 && typeof A.animated != "boolean") {
      S(X(new Error('Missing properties for "scroll_to" action'), { additional: { id: A.id } }));
      return;
    }
    switch ((O = A.destination) == null ? void 0 : O.type) {
      case "index": {
        typeof A.destination.value == "number" && ee.setCurrentItem(A.destination.value, (tt = A.animated) != null ? tt : !0);
        break;
      }
      case "offset": {
        typeof A.destination.value == "number" && ((tr = ee.scrollToPosition) == null || tr.call(ee, A.destination.value, (De = A.animated) != null ? De : !0));
        break;
      }
      case "start": {
        (We = ee.scrollToStart) == null || We.call(ee, (se = A.animated) != null ? se : !0);
        break;
      }
      case "end": {
        (St = ee.scrollToEnd) == null || St.call(ee, (Nt = A.animated) != null ? Nt : !0);
        break;
      }
      default:
        S(X(new Error('Unknown destination for "scroll_to" action'), {
          additional: {
            id: A.id,
            destination: (Cr = A.destination) == null ? void 0 : Cr.type
          }
        }));
    }
  }
  function Tt(y, A) {
    var O;
    const S = (y == null ? void 0 : y.logError) || F, ee = A.id && At(A.id);
    if (!ee) {
      S(X(new Error('Missing component for "scroll_by" action'), { additional: { id: A.id } }));
      return;
    }
    if (typeof A.item_count != "number" && A.item_count !== void 0 || typeof A.offset != "number" && A.offset !== void 0 || A.overflow !== void 0 && A.overflow !== "clamp" && A.overflow !== "ring" || A.animated !== void 0 && typeof A.animated != "boolean") {
      S(X(new Error('Missing properties for "scroll_by" action'), { additional: { id: A.id } }));
      return;
    }
    (O = ee.scrollCombined) == null || O.call(ee, {
      step: A.item_count,
      offset: A.offset,
      overflow: A.overflow,
      animated: A.animated
    });
  }
  function sr(y, A, { item: S, step: ee, overflow: O, animated: tt }) {
    var Nt, St, Cr, Gr, an;
    if (!A)
      throw new Error(`Missing id for "${y}" action`);
    const De = Number(S);
    if (y === "set_current_item" && Number.isNaN(De))
      throw new Error(`Incorrect item for "${y}" action`);
    let tr = Number(ee);
    if (!ee && (y === "set_previous_item" || y === "set_next_item") && (tr = 1), !ee && (y === "scroll_backward" || y === "scroll_forward" || y === "scroll_to_position") || Number.isNaN(tr))
      throw new Error(`Incorrect step value for "${y}" action`);
    if (O && O !== "clamp" && O !== "ring")
      throw new Error(`Incorrect overflow value for "${y}" action`);
    O = O || "clamp";
    const se = tt === null || tt !== "0" && tt !== "false", We = At(A);
    if (We)
      switch (y) {
        case "set_current_item":
          We.setCurrentItem(De, se);
          return;
        case "set_previous_item":
          We.setPreviousItem(tr, O, se);
          return;
        case "set_next_item":
          We.setNextItem(tr, O, se);
          return;
        case "scroll_to_start":
          (Nt = We.scrollToStart) == null || Nt.call(We, se);
          return;
        case "scroll_to_end":
          (St = We.scrollToEnd) == null || St.call(We, se);
          return;
        case "scroll_backward":
          (Cr = We.scrollCombined) == null || Cr.call(We, {
            offset: -tr,
            overflow: O,
            animated: se
          });
          return;
        case "scroll_forward":
          (Gr = We.scrollCombined) == null || Gr.call(We, {
            offset: tr,
            overflow: O,
            animated: se
          });
          return;
        case "scroll_to_position":
          (an = We.scrollToPosition) == null || an.call(We, tr, se);
          return;
      }
  }
  function Te(y, A, S) {
    const ee = (S == null ? void 0 : S.logError) || F;
    if (y) {
      const O = At(y);
      O ? A === "start" ? O.start() : A === "pause" ? O.pause() : ee(X(new Error("Unknown video action"), { additional: { id: y, action: A } })) : ee(X(new Error("Video component is not found"), { additional: { id: y, action: A } }));
    } else
      ee(X(new Error("Missing id in video action"), { additional: { action: A } }));
  }
  function jt(y, A, S) {
    var ee, O, tt;
    if (y.templates)
      for (const De in y.templates)
        n.hasOwnProperty(De) || (n[De] = y.templates[De]);
    if (Array.isArray((ee = y.patch) == null ? void 0 : ee.changes)) {
      if (y.patch.mode === "transactional") {
        const De = y.patch.changes.find((tr) => {
          const se = kr.get(tr.id);
          if (!se)
            return !0;
          const We = Array.isArray(tr.items) ? tr.items.length : 0;
          return !!(se.isSingleMode && We !== 1);
        });
        if (De)
          return A(X(new Error("Skipping transactional, child is not found or broken"), { additional: { url: S, id: De.id } })), ir((O = y.patch) == null ? void 0 : O.on_failed_actions), !1;
      }
      return y.patch.changes.forEach((De) => {
        const tr = kr.get(De.id);
        tr && tr.replaceWith(De.id, De.items);
      }), ir((tt = y.patch) == null ? void 0 : tt.on_applied_actions), !0;
    }
    return !1;
  }
  function lr(y, A, S) {
    const ee = (S == null ? void 0 : S.logError) || F;
    if (y) {
      let O;
      typeof _e == "function" ? O = _e(y) : O = _e, fetch(y, O).then((tt) => {
        if (!tt.ok)
          throw new Error("Response is not ok");
        return tt.json();
      }).then((tt) => {
        if (!tt) {
          ee(X(new Error("Incorrect patch"), { additional: { url: y } })), ir(A == null ? void 0 : A.on_fail_actions, { componentContext: S });
          return;
        }
        jt(tt, ee, y) ? ir(A == null ? void 0 : A.on_success_actions, { componentContext: S }) : ir(A == null ? void 0 : A.on_fail_actions, { componentContext: S });
      }).catch((tt) => {
        ee(X(new Error("Failed to download the patch"), { additional: { url: y, originalError: tt } })), ir(A == null ? void 0 : A.on_fail_actions, { componentContext: S });
      });
    } else
      ee(X(new Error("Missing url in download action"), { additional: { url: y } }));
  }
  function rr(y, A, S) {
    var tr;
    const ee = (S == null ? void 0 : S.logError) || F;
    if (!y) {
      ee(X(new Error("Missing id in show_tooltip action")));
      return;
    }
    const O = Ir.get(y);
    if (!O) {
      ee(X(new Error("Tooltip with the provided id is not found"), { additional: { id: y } }));
      return;
    }
    if (A !== "true" && A !== !0 && it.has(y))
      return;
    it.add(y);
    const tt = {
      internalId: ++nt,
      ownerNode: O.onwerNode,
      desc: O.tooltip,
      timeoutId: 0,
      componentContext: S
    };
    e(3, kt = [...kt, tt]);
    const De = (tr = O.tooltip.duration) != null ? tr : 5e3;
    De && (tt.timeoutId = window.setTimeout(
      () => {
        tt.timeoutId = 0, e(3, kt = kt.filter((se) => se.internalId !== tt.internalId));
      },
      De
    ));
  }
  function nr(y, A) {
    const S = (A == null ? void 0 : A.logError) || F;
    if (!y) {
      S(X(new Error("Missing id in hide_tooltip action")));
      return;
    }
    e(3, kt = kt.filter((ee) => {
      const O = ee.desc.id !== y;
      return !O && ee.timeoutId && (clearTimeout(ee.timeoutId), ee.timeoutId = null), O;
    }));
  }
  function pr(y, A, S, ee, O) {
    const tt = (y == null ? void 0 : y.logError) || F;
    if (!E) {
      tt(X(new Error("Store is not configured")));
      return;
    }
    let De = S;
    if (!A || !De || !ee || !O) {
      tt(X(new Error("Missing required params for set_stored_value")));
      return;
    }
    if (!d4.has(ee)) {
      tt(X(new Error("Incorrect stored type")));
      return;
    }
    if (ee === "boolean" && (De = De === "true" || De === "1"), E.set)
      E.set(A, ee, De, Number(O));
    else if (E.setValue) {
      if (!f4.has(ee)) {
        tt(X(new Error("Incorrect stored type")));
        return;
      }
      if (typeof De != "string" && typeof De != "number" && typeof De != "boolean") {
        tt(X(new Error("Incorrect stored value")));
        return;
      }
      (ee === "integer" || ee === "number") && (De = Number(De)), E.setValue(A, ee, De, Number(O));
    }
  }
  function vr(y) {
    or(st(F, y, void 0, !0), y);
  }
  async function or(y, A, S) {
    var tr, se;
    const ee = y.scope_id, O = (S == null ? void 0 : S.logError) || F;
    if (ee) {
      const We = Pr.get(ee);
      if (We && (We == null ? void 0 : We.size) > 1)
        O(X(new Error(`Ambiguous scope id. There are ${We.size} divs with id '${ee}'`), { additional: { count: We.size, scopeId: ee } }));
      else if ((We == null ? void 0 : We.size) === 1) {
        const Nt = We.values().next().value;
        Nt && (S = Nt);
      } else {
        O(X(new Error("The scope with the specified scope_id is missing"), { additional: { scopeId: ee } }));
        return;
      }
    }
    const tt = y.url ? String(y.url) : "", De = y.typed;
    if (xs(y)) {
      if (De)
        switch (De.type) {
          case "set_variable": {
            const { variable_name: We, value: Nt } = De;
            if (We && Nt) {
              const St = (S == null ? void 0 : S.getVariable(We)) || $.get(We);
              St ? St.getType() === Nt.type ? St.setValue(Nt.value) : O(X(new Error("Trying to set value with invalid type"), { additional: { name: We, type: Nt.type } })) : O(X(new Error("Cannot find variable"), { additional: { name: We } }));
            } else
              O(X(new Error("Incorrect set_variable action"), { additional: { name: We } }));
            break;
          }
          case "array_insert_value":
            v3(S, $, O, De);
            break;
          case "array_remove_value":
            j3(S, $, O, De);
            break;
          case "array_set_value":
            C3(S, $, O, De);
            break;
          case "copy_to_clipboard":
            A3(O, De);
            break;
          case "focus_element": {
            const We = De.element_id && Et.get(De.element_id);
            We ? We.focus() : O(X(new Error("Incorrect focus_element action"), {
              additional: { elementId: De.element_id }
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
            E3(S, $, O, De);
            break;
          }
          case "animator_start": {
            const We = De.animator_id && (S == null ? void 0 : S.getAnimator(De.animator_id));
            if (!We) {
              O(X(new Error("Missing animator"), {
                additional: { animator_id: De.animator_id }
              }));
              return;
            }
            const { duration: Nt, start_delay: St, interpolator: Cr, direction: Gr, repeat_count: an, start_value: Mr, end_value: mn } = De, bn = S ? S.getJsonWithVars(We) : st(F, We), Vn = {
              ...bn,
              end_actions: We.end_actions,
              cancel_actions: We.cancel_actions,
              duration: Nt !== void 0 ? Nt : bn.duration,
              start_delay: St !== void 0 ? St : bn.start_delay,
              interpolator: Cr !== void 0 ? Cr : bn.interpolator,
              direction: Gr !== void 0 ? Gr : bn.direction,
              repeat_count: an !== void 0 ? an : bn.repeat_count,
              start_value_typed: Mr,
              end_value_typed: mn
            }, lo = We.variable_name && ((S == null ? void 0 : S.getVariable(We.variable_name)) || $.get(We.variable_name));
            if (!lo)
              return;
            const Nn = ct.get(We.id);
            Nn && Nn.stop();
            const Kt = V3(
              Vn,
              lo,
              () => {
                ct.delete(We.id);
              },
              (b, V) => ((S == null ? void 0 : S.execAnyActions) || ir)(b, V)
            );
            Kt && ct.set(We.id, Kt);
            break;
          }
          case "animator_stop": {
            const We = ct.get(De.animator_id);
            We && (We.stop(), ct.delete(De.animator_id));
            break;
          }
          case "show_tooltip": {
            rr(De.id, De.multiple, S);
            break;
          }
          case "hide_tooltip": {
            nr(De.id, S);
            break;
          }
          case "timer": {
            ot ? ot.execTimerAction(De.id, De.action) : O(X(new Error("Incorrect timer action"), {
              additional: {
                id: De.id,
                action: De.action
              }
            }));
            break;
          }
          case "download": {
            lr(De.url, A.typed, S);
            break;
          }
          case "video": {
            Te(De.id, De.action, S);
            break;
          }
          case "set_stored_value": {
            pr(S, De.name, (tr = De.value) == null ? void 0 : tr.value, (se = De.value) == null ? void 0 : se.type, De.lifetime);
            break;
          }
          case "set_state": {
            await Oe(De.state_id, S);
            break;
          }
          case "submit": {
            await yt(S, De, A.typed);
            break;
          }
          case "scroll_to": {
            Gt(S, De);
            break;
          }
          case "scroll_by": {
            Tt(S, De);
            break;
          }
          case "update_structure": {
            N3(S, $, O, De);
            break;
          }
          case "custom": {
            Ht({
              ...A,
              // todo remove in major release
              url: ""
            });
            break;
          }
          default:
            O(X(new Error("Unknown type of action"), { additional: { type: De.type } }));
        }
      else if (tt)
        try {
          const We = tt.replace(/div-action:\/\//, ""), Nt = /([^?]+)\?(.+)/.exec(We);
          if (!Nt)
            return;
          const St = new URLSearchParams(Nt[2]);
          switch (Nt[1]) {
            case "set_state":
              await Oe(St.get("state_id"), S);
              break;
            case "set_current_item":
            case "set_previous_item":
            case "set_next_item":
            case "scroll_to_start":
            case "scroll_to_end":
            case "scroll_backward":
            case "scroll_forward":
            case "scroll_to_position":
              sr(Nt[1], St.get("id"), {
                item: St.get("item"),
                step: St.get("step"),
                overflow: St.get("overflow"),
                animated: St.get("animated")
              });
              break;
            case "set_variable":
              const Cr = St.get("name"), Gr = St.get("value");
              if (Cr && Gr !== null) {
                const mn = (S == null ? void 0 : S.getVariable(Cr)) || $.get(Cr);
                mn ? mn.set(Gr) : O(X(new Error("Cannot find variable"), { additional: { name: Cr } }));
              } else
                O(X(new Error("Incorrect set_variable_action"), { additional: { url: We } }));
              break;
            case "timer":
              const an = St.get("action"), Mr = St.get("id");
              ot ? ot.execTimerAction(Mr, an) : O(X(new Error("Incorrect timer action"), {
                additional: { id: Mr, action: an }
              }));
              break;
            case "video":
              Te(St.get("id"), St.get("action"), S);
              break;
            case "download":
              lr(St.get("url"), A.download_callbacks, S);
              break;
            case "show_tooltip":
              rr(St.get("id"), St.get("multiple"), S);
              break;
            case "hide_tooltip":
              nr(St.get("id"), S);
              break;
            case "set_stored_value": {
              pr(S, St.get("name"), St.get("value"), St.get("type"), St.get("lifetime"));
              break;
            }
            default:
              O(X(new Error("Unknown type of action"), { additional: { url: tt } }));
          }
        } catch (We) {
          O(X(We, { additional: { url: tt } }));
        }
    }
  }
  async function ir(y, A = {}) {
    var O;
    if (!y || !Array.isArray(y))
      return;
    const S = ((O = A.componentContext) == null ? void 0 : O.logError) || F, ee = (tt) => A.componentContext ? A.componentContext.getJsonWithVars(tt, A.additionalVars, !0) : st(S, tt, A.additionalVars, !0);
    for (let tt = 0; tt < y.length; ++tt) {
      let De = ee(y[tt]);
      const tr = De.is_enabled;
      if (tr === 0 || tr === !1)
        continue;
      const se = De.url;
      if (De.typed)
        await or(De, y[tt], A.componentContext);
      else if (se) {
        const Nt = xl(se);
        if (Nt)
          if ($l(Nt, he)) {
            if (A.processUrls)
              if (De.target === "_blank") {
                const St = window.open("", "_blank");
                St && (St.opener = null, St.location = se);
              } else
                location.href = se;
          } else Nt === "div-action" ? (await or(De, y[tt], A.componentContext), await Sn()) : De.log_id && (Ht(De), await Sn());
      } else A.node && Array.isArray(De.menu_items) && De.menu_items.length && e(4, Pt = {
        items: De.menu_items,
        node: A.node,
        componentContext: A.componentContext
      });
    }
    y.forEach((tt) => {
      tt.log_id && Ct(A.logType || "click", tt);
    });
  }
  function Ht(y) {
    H == null || H(y);
  }
  function mt(y, A) {
    const S = (y == null ? void 0 : y.logError) || F;
    if (!Array.isArray(A) || !A.length)
      return;
    const ee = [];
    return A.forEach((O) => {
      let tt = !1;
      if (typeof O.condition != "string") {
        S(X(new Error("variable_trigger has a condition that is not a string"), {
          additional: { condition: O.condition }
        }));
        return;
      }
      if (!Array.isArray(O.actions)) {
        S(X(new Error("variable_trigger has no actions"), {
          additional: { condition: O.condition }
        }));
        return;
      }
      const De = O.mode || "on_condition";
      if (De !== "on_variable" && De !== "on_condition") {
        S(X(new Error("variable_trigger has an unsupported mode"), { additional: { mode: De } }));
        return;
      }
      const se = pe(S, { condition: O.condition }, {
        additionalVars: y == null ? void 0 : y.variables,
        customFunctions: y == null ? void 0 : y.customFunctions,
        emptyVarsError: () => {
          S(X(new Error("variable_trigger must have variables in the condition"), {
            additional: { condition: O.condition }
          }));
        }
      }).subscribe(async (We) => {
        We.condition !== void 0 && (// if condition is truthy
        We.condition && // and trigger mode matches
        (De === "on_variable" || De === "on_condition" && tt === !1) ? (tt = !!We.condition, y ? await y.execAnyActions(O.actions, { logType: "trigger" }) : await ir(O.actions, { logType: "trigger" })) : tt = !!We.condition);
      });
      ee.push(se);
    }), () => {
      ee.forEach((O) => {
        O();
      });
    };
  }
  function Qt(y) {
    return de[y];
  }
  function ae(y, A) {
    de[y] = A;
  }
  const wr = /* @__PURE__ */ new Map(), kr = /* @__PURE__ */ new Map(), Et = /* @__PURE__ */ new Map(), Ir = /* @__PURE__ */ new Map(), Pr = /* @__PURE__ */ new Map();
  function ur(y, A, S = "error") {
    if (wr.has(y)) {
      F(X(new Error("Duplicate instance id"), {
        level: S,
        additional: { id: y }
      }));
      return;
    }
    wr.set(y, A);
  }
  function dt(y) {
    wr.delete(y);
  }
  function At(y) {
    if (!wr.has(y)) {
      F(X(new Error("Missing instance with id"), { additional: { id: y } }));
      return;
    }
    return wr.get(y);
  }
  function Jt(y, A) {
    kr.set(y, A);
  }
  function xt(y) {
    kr.delete(y);
  }
  function et(y, A) {
    Et.set(y, A);
  }
  function pt(y) {
    Et.delete(y);
  }
  function ue(y, A) {
    const S = A.id;
    S && (Ir.has(S) && F(X(new Error("Duplicate tooltip id"), { additional: { id: S } })), Ir.set(S, { onwerNode: y, tooltip: A }));
  }
  function vt(y) {
    const A = y.id;
    A && (Ir.delete(A), kt.some((S) => S.desc.id === A) && e(3, kt = kt.filter((S) => S.desc.id !== A)));
  }
  function $t(y) {
    const A = Be.get(y) || Io(void 0);
    return Be.has(y) || Be.set(y, A), A;
  }
  function Wt(y, A, S) {
    const ee = Ne.get(y);
    if (ee)
      return ee;
    const O = Xn(y, A, S);
    return Ne.set(y, O), O;
  }
  function yr() {
    if (!Ot)
      return;
    Ot[me].forEach((A) => {
      const S = $.get(A.name);
      S && S.setValue(A.color);
    });
  }
  function j() {
    return he;
  }
  function ie(y, A) {
    const S = p.get(y);
    if (S)
      return new S(A || {});
  }
  function d(y) {
    return {
      variables: Wo($, y.variables),
      derviedExpression(A) {
        return y.getDerivedFromVars(A);
      },
      processExpressions(A) {
        return y.getJsonWithVars(A);
      },
      execAction: vr,
      logError: F,
      getComponentProperty(A) {
        return y.getJsonWithVars(y.json[A]);
      },
      direction: le
    };
  }
  function B(y, A) {
    const S = /* @__PURE__ */ new Map(), ee = (A == null ? void 0 : A.logError) || F;
    return y.forEach((O) => {
      if (S) {
        try {
          _3(O);
        } catch (tr) {
          ee(X(tr));
          return;
        }
        const tt = O, De = S.get(tt.name) || [];
        De.push(p3(tt)), S.set(tt.name, De);
      }
    }), S;
  }
  function je(y) {
    const A = {
      id: "",
      json: {},
      path: [],
      templateContext: {},
      logError(S) {
        S.additional = S.additional || {}, S.additional.path = A.path.join("/");
        {
          S.additional.json = A.json, S.additional.origJson = A.origJson;
          const ee = [];
          let O = A;
          for (; O.parent; )
            ee.push(O), O = O.parent;
          S.additional.fullpath = ee;
        }
        F(S);
      },
      execAnyActions(S, ee = {}) {
        return ir(S, {
          componentContext: A,
          processUrls: ee.processUrls,
          node: ee.node,
          logType: ee.logType,
          additionalVars: ee.additionalVars
        });
      },
      getDerivedFromVars(S, ee, O = !1, tt = 1 / 0) {
        return pe(A.logError, S, {
          additionalVars: Wo(A.variables, ee),
          keepComplex: O,
          customFunctions: A.customFunctions,
          maxDepth: tt
        });
      },
      getJsonWithVars(S, ee, O = !1) {
        return st(A.logError, S, Wo(A.variables, ee), O, A.customFunctions);
      },
      evalExpression(S, ee, O) {
        return ml(Wo($, A.variables), A.customFunctions, S, ee, O);
      },
      produceChildContext(S, ee = {}) {
        const O = je(this);
        let tt = S, De = this.templateContext;
        const { templateContext: tr, json: se } = Vt(tt, De);
        if (O.json = se, O.templateContext = tr, O.origJson = S, O.id = ee.id || se.id || "", O.id) {
          let St = Pr.get(O.id);
          St || (St = /* @__PURE__ */ new Set(), Pr.set(O.id, St)), St.add(O);
        }
        ee.key && (O.key = ee.key), ee.path !== void 0 && O.path.push(String(ee.path)), S.type && !ee.isRootState && O.path.push(S.type), ee.isTooltipRoot && (O.isTooltipRoot = !0);
        let We;
        Array.isArray(se.variables) ? (We = Wo(this.variables, Wo(ee.variables, /* @__PURE__ */ new Map())), se.variables.forEach((St) => {
          const Cr = zt(St, O, We);
          Cr && We && We.set(Cr.getName(), Cr);
        })) : ee.variables ? We = Wo(this.variables, ee.variables) : this.variables && (We = this.variables), O.variables = We, We && (O.selfVariables = /* @__PURE__ */ new Set([...We.keys()]));
        let Nt;
        return Array.isArray(se.functions) && (Nt = B(se.functions, this)), O.customFunctions = g3(this.customFunctions, Nt), Array.isArray(se.animators) && (O.animators = se.animators.reduce(
          (St, Cr) => (Cr.id && (St[Cr.id] = Cr), St),
          {}
        )), ee.fake && (O.fakeElement = ee.fake), ee.isRootState && (O.isRootState = !0), O;
      },
      dup(S) {
        return { ...A, fakeElement: S };
      },
      getVariable(S, ee) {
        var tt;
        const O = ((tt = A.variables) == null ? void 0 : tt.get(S)) || $.get(S);
        if (O) {
          const De = O.getType();
          if (ee && De !== ee) {
            A.logError(X(new Error(`Variable should have type "${ee}"`), { additional: { name: S, foundType: De } }));
            return;
          }
        }
        return O;
      },
      getAnimator(S) {
        var ee, O;
        return ((ee = A.animators) == null ? void 0 : ee[S]) || ((O = A.parent) == null ? void 0 : O.getAnimator(S)) || void 0;
      },
      registerState(S, ee) {
        const O = D3(A.parent);
        return O && (O.states = O.states || {}, O.states[S] = O.states[S] || [], O.states[S].push(ee)), () => {
          var tt;
          (tt = O == null ? void 0 : O.states) != null && tt[S] && (O.states[S] = O.states[S].filter((De) => De !== ee), O.states[S].length || delete O.states[S]);
        };
      },
      registerPager(S) {
        const ee = A.parent;
        return ee ? (ee.pagers = ee.pagers || /* @__PURE__ */ new Map(), ee.pagers.has(S) ? {
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          update() {
          },
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          destroy() {
          }
        } : (ee.pagers.set(S, null), {
          update(O) {
            var se, We;
            ee.pagers && ee.pagers.set(S, O);
            const tt = S ? (se = ee.pagerListeners) == null ? void 0 : se.get(S) : void 0, De = (We = ee.pagerListeners) == null ? void 0 : We.get(void 0);
            [...tt || [], ...De || []].forEach((Nt) => {
              Nt(O);
            });
          },
          destroy() {
            ee.pagers && ee.pagers.delete(S);
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
      listenPager(S, ee) {
        var se, We, Nt;
        let O = A.parent;
        for (; O && !(O.pagers && (S ? O.pagers.get(S) : (se = O.pagers) != null && se.size)); )
          O = O.parent;
        if (!O)
          return () => {
          };
        O.pagerListeners = A.pagerListeners || /* @__PURE__ */ new Map();
        const tt = O.pagerListeners.get(S) || [];
        O.pagerListeners.has(S) || O.pagerListeners.set(S, tt), tt.push(ee);
        const De = S || ((We = O.pagers) == null ? void 0 : We.keys().next().value) || void 0, tr = (Nt = O.pagers) == null ? void 0 : Nt.get(De);
        return tr && ee(tr), () => {
          if (!O.pagerListeners)
            return;
          let St = O.pagerListeners.get(De);
          St && (St = St.filter((Cr) => Cr !== ee) || [], St.length ? O.pagerListeners.set(S, St) : O.pagerListeners.delete(S));
        };
      },
      destroy() {
        const S = Pr.get(A.id);
        S && (S.delete(A), S.size || Pr.delete(A.id));
      }
    };
    return y ? (A.parent = y, A.path = y.path.slice(), y.fakeElement && (A.fakeElement = y.fakeElement)) : (A.json = { type: "root" }, A.isRootState = !0), A;
  }
  function He(y) {
    Ae ? ft.push(y) : clearTimeout(y);
  }
  hi(Yr, {
    logStat: Ct,
    hasTemplate: ut,
    genId: K,
    genClass: Mt,
    execCustomAction: Ht,
    processVariableTriggers: mt,
    isRunning: Qt,
    setRunning: ae,
    pagerChildrenClipEnabled: D,
    pagerMouseDragEnabled: M,
    registerInstance: ur,
    unregisterInstance: dt,
    registerParentOf: Jt,
    unregisterParentOf: xt,
    registerTooltip: ue,
    unregisterTooltip: vt,
    onTooltipClose: Se,
    tooltipRoot: T,
    registerFocusable: et,
    unregisterFocusable: pt,
    addSvgFilter: Zt,
    removeSvgFilter: Ee,
    registerId: Le,
    getComponentId: Ft,
    preparePrototypeVariables: ze,
    getCustomization: Z,
    getBuiltinProtocols: j,
    getExtension: ie,
    getExtensionContext: d,
    registerTimeout: He,
    typefaceProvider: oe,
    isDesktop: Ce,
    isPointerFocus: Va,
    customComponents: Y,
    direction: Q,
    videoPlayerProvider: q,
    awaitGlobalVariable: Wt,
    componentDevtool: Dt,
    devtoolCreateHierarchy: be
  }), hi(To, {
    hasAction() {
      return !1;
    }
  }), hi(wa, {
    runVisibilityTransition(y, A, S, ee, O) {
      return Promise.resolve();
    },
    registerChildWithTransitionIn(y, A, S, ee) {
      return Promise.resolve();
    },
    registerChildWithTransitionOut(y, A, S, ee) {
      return Promise.resolve();
    },
    registerChildWithTransitionChange(y, A, S, ee) {
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
  }), hi(ka, { isEnabled: Jo(!0) });
  function ke(y, A) {
    const S = $.get(y);
    return (S == null ? void 0 : S.getType()) === A;
  }
  function P(y, A) {
    const S = $.get(y);
    S ? S.setValue(A) : F(X(new Error("Cannot find variable"), { additional: { name: y } }));
  }
  function Lt(y, A, S) {
    const ee = (A == null ? void 0 : A.logError) || F, O = y.name, tt = y.value_type;
    if (typeof y.get != "string" || !y.get) {
      ee(X(new Error("Incorrect property getter"), { additional: { name: O } }));
      return;
    }
    if (!O) {
      ee(X(new Error("Missing property name")));
      return;
    }
    if (!tt) {
      ee(X(new Error("Missing property value_type")));
      return;
    }
    const De = A ? A.getDerivedFromVars(y.get, void 0, !0) : pe(F, y.get, { keepComplex: !0 });
    if (Yl(De) === void 0)
      return;
    const se = (We) => {
      const Nt = Rs(y.new_value_variable_name || "new_value", y.value_type, We), St = new Map(S);
      St.set(Nt.getName(), Nt), Array.isArray(y.set) && y.set.length ? A ? A.execAnyActions(y.set, { additionalVars: St }) : ir(y.set, { additionalVars: St }) : ee(X(new Error("Cannot set property. No setters provided."), { additional: { name: O } }));
    };
    return {
      getName() {
        return O;
      },
      subscribe(We) {
        return De.subscribe(We);
      },
      set(We) {
        const Nt = Gh(We, tt);
        se(Nt);
      },
      setValue: se,
      getValue() {
        return Yl(De);
      },
      getType() {
        return tt;
      }
    };
  }
  function zt(y, A, S) {
    if (y.type === "property")
      return Lt(y, A, S);
    if (!y.type || !y.name || !(y.type in Zl) || !("value" in y))
      return;
    const ee = y.value;
    let O = A ? A.getJsonWithVars(ee, S, !0) : st(F, ee, S, !0);
    if (!(ee && typeof ee == "string" && O === void 0)) {
      y.type === "integer" && typeof O == "number" && (O > Number.MAX_SAFE_INTEGER || O < Number.MIN_SAFE_INTEGER) && F(X(new Error("The value of the integer variable could lose accuracy"), {
        level: "warn",
        additional: { name: y.name, value: O }
      }));
      try {
        return Xn(y.name, y.type, O);
      } catch (tt) {
        F(X(tt, { additional: { name: y.name } }));
      }
    }
  }
  function Je(y) {
    const A = zt(y);
    A && (Ge.set(y.name, A), $.set(y.name, A));
  }
  for (const [y, A] of Ue)
    $.has(y) || $.set(y, A);
  const at = (Ur = l == null ? void 0 : l.card) == null ? void 0 : Ur.variables;
  Array.isArray(at) && at.forEach((y) => {
    if (y && y.name) {
      if (Ge.has(y.name)) {
        F(X(new Error("Duplicate variable"), { additional: { name: y.name } }));
        return;
      }
      Je(y);
    }
  });
  const Ot = l.palette;
  Ot && Ot[me].forEach((A) => {
    if (Ge.has(A.name)) {
      F(X(new Error("Duplicate variable"), { additional: { name: A.name } }));
      return;
    }
    try {
      const S = Xn(A.name, "color", A.color);
      Ge.set(A.name, S), $.set(A.name, S);
    } catch (S) {
      F(X(S, { additional: { name: A.name } }));
    }
  }), we.subscribe((y) => {
    if (y && !$.has(y)) {
      const A = Ue.get(y);
      $.set(y, A);
      const S = Be.get(y);
      if (S) {
        let O = 0;
        A.subscribe(() => {
          S.set(++O);
        });
      }
      const ee = Ne.get(y);
      ee && ee.getType() === A.getType() && A.subscribe((O) => {
        ee.set(O);
      });
    }
  });
  const Ar = () => {
    var y;
    mt(void 0, (y = l == null ? void 0 : l.card) == null ? void 0 : y.variable_triggers);
  }, _r = (ln = l == null ? void 0 : l.card) == null ? void 0 : ln.timers;
  if (_r && typeof document < "u") {
    const y = ot = new k3({
      logError: F,
      applyVars: (A) => st(F, A),
      hasVariableWithType: ke,
      setVariableValue: P,
      execAnyActions: ir
    });
    _r.forEach((A) => y.createTimer(A));
  }
  const Fr = je();
  Array.isArray((cn = l.card) == null ? void 0 : cn.functions) && (Fr.customFunctions = B(l.card.functions));
  let wn;
  function Se(y) {
    e(3, kt = kt.filter((A) => A.internalId !== y));
  }
  xn(() => {
    Es++, Es === 1 && (window.addEventListener("keydown", fd), window.addEventListener("pointerdown", dd)), Sn().then(() => {
      Ae && Ar();
    });
  }), sn(() => {
    Ae = !1, Es--, Es || (window.removeEventListener("keydown", fd), window.removeEventListener("pointerdown", dd));
    for (const [y, A] of ct)
      A.stop();
    ot && ot.destroy(), kt.forEach((y) => {
      y.timeoutId && (clearTimeout(y.timeoutId), y.timeoutId = null);
    }), ft.forEach((y) => {
      clearTimeout(y);
    });
  });
  const Xr = () => e(4, Pt = void 0);
  return t.$$set = (y) => {
    "id" in y && e(13, a = y.id), "json" in y && e(11, l = y.json), "platform" in y && e(14, u = y.platform), "theme" in y && e(12, c = y.theme), "globalVariablesController" in y && e(15, f = y.globalVariablesController), "mix" in y && e(0, _ = y.mix), "customization" in y && e(16, h = y.customization), "builtinProtocols" in y && e(17, m = y.builtinProtocols), "extensions" in y && e(18, p = y.extensions), "onError" in y && e(19, w = y.onError), "onStat" in y && e(20, k = y.onStat), "onSubmit" in y && e(21, N = y.onSubmit), "onCustomAction" in y && e(22, H = y.onCustomAction), "onComponent" in y && e(23, z = y.onComponent), "typefaceProvider" in y && e(24, oe = y.typefaceProvider), "fetchInit" in y && e(25, _e = y.fetchInit), "tooltipRoot" in y && e(26, T = y.tooltipRoot), "customComponents" in y && e(27, Y = y.customComponents), "direction" in y && e(28, le = y.direction), "store" in y && e(29, E = y.store), "pagerChildrenClipEnabled" in y && e(30, D = y.pagerChildrenClipEnabled), "pagerMouseDragEnabled" in y && e(31, M = y.pagerMouseDragEnabled), "weekStartDay" in y && e(32, W = y.weekStartDay), "videoPlayerProvider" in y && e(33, q = y.videoPlayerProvider), "devtoolCreateHierarchy" in y && e(34, be = y.devtoolCreateHierarchy);
  }, t.$$.update = () => {
    var y, A;
    if (t.$$.dirty[0] & /*theme*/
    4096 | t.$$.dirty[1] & /*themeQuery*/
    2048 && (c === "light" || c === "dark" ? e(41, me = c) : c === "system" ? typeof matchMedia < "u" ? (Fe || (e(42, Fe = matchMedia("(prefers-color-scheme: dark)")), Fe.addListener(Ke)), e(41, me = Fe.matches ? "dark" : "light")) : e(41, me = "light") : F(X(new Error("Unsupported theme")))), t.$$.dirty[1] & /*currentTheme*/
    1024 && me && yr(), t.$$.dirty[0] & /*json*/
    2048) {
      e(1, fe = !1);
      const S = h3(l);
      S && (e(1, fe = !0), F(S));
    }
    if (t.$$.dirty[0] & /*json*/
    2048 && (n = l.templates || {}), t.$$.dirty[0] & /*json*/
    2048 && (y = l == null ? void 0 : l.card) != null && y.variables && Array.isArray(l.card.variables) && l.card.variables !== at && l.card.variables.forEach((S) => {
      S && S.name && !Ge.has(S.name) && !$.has(S.name) && Je(S);
    }), t.$$.dirty[0] & /*json*/
    2048 && e(44, o = (A = l == null ? void 0 : l.card) == null ? void 0 : A.states), t.$$.dirty[0] & /*hasError, hasIdError*/
    6 | t.$$.dirty[1] & /*states, rootComponentContext*/
    12288 && o && !fe && !re) {
      const S = {
        type: "state",
        id: "root",
        width: { type: "match_parent" },
        height: { type: "match_parent" },
        states: o.map((ee) => ({
          state_id: ee.state_id.toString(),
          div: ee.div
        }))
      };
      e(6, wn = Fr.produceChildContext(S, { isRootState: !0 }));
    }
  }, [
    _,
    fe,
    re,
    kt,
    Pt,
    It,
    wn,
    i,
    s,
    Ce,
    Q,
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
    H,
    z,
    oe,
    _e,
    T,
    Y,
    le,
    E,
    D,
    M,
    W,
    q,
    be,
    Ye,
    Xe,
    ye,
    Me,
    ce,
    vr,
    me,
    Fe,
    Fr,
    o,
    Xr
  ];
}
class g4 extends Br {
  constructor(r) {
    super(), Or(
      this,
      r,
      p4,
      c4,
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
const h4 = 8;
class k4 {
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
        if (++o > h4) {
          const i = new Error("Recursive layout in size_provider");
          i.level = "warn", i.additional = {
            widthVariableName: this.widthVariableName,
            heightVariableName: this.heightVariableName
          }, e.logError(i);
          break;
        }
        await Sn();
      }
      this.sizeHistory = {};
    })), (n = this.resizeObserver) == null || n.observe(r), this.recalcProps();
  }
  unmountView(r, e) {
    var n;
    (n = this.resizeObserver) == null || n.disconnect(), this.resizeObserver = void 0;
  }
}
const Di = 8;
class v4 {
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
    (Math.abs(e) > Di || Math.abs(n) > Di) && (Math.abs(e) > Math.abs(n) ? e > Di ? this.processActions("swipe_right") : e < -Di && this.processActions("swipe_left") : n > Di ? this.processActions("swipe_down") : n < -Di && this.processActions("swipe_up"), this.startCoords = void 0);
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
function m4(t) {
  return t instanceof HTMLElement;
}
function C4(t) {
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
      const o = Array.from(e.children).filter(m4);
      o.forEach((_) => {
        _.style.display = "none";
      }), e.setAttribute("data-lottie", "true");
      const i = this.wrapper = document.createElement("div");
      this.wrapper.style.width = "100%", this.wrapper.style.height = "100%";
      const s = this.getRatio(n), a = this.getScale(n);
      s && (this.wrapper.style.aspectRatio = String(s)), this.setWrapperScale(a), e.appendChild(this.wrapper);
      const l = Number((f = n.processExpressions(this.params.repeat_count)) != null ? f : -1), u = n.processExpressions(this.params.repeat_mode), c = () => {
        var h, m;
        (h = this.animItem) == null || h.destroy(), o.forEach((p) => {
          p.style.display = "";
        }), e.removeAttribute("data-lottie"), this.wrapper && ((m = this.wrapper.parentNode) == null || m.removeChild(this.wrapper), this.wrapper = void 0);
        const _ = new Error("Failed to load lottie animation");
        _.level = "error", _.additional = {
          url: this.params.lottie_url
        }, n.logError(_);
      };
      this.unsubscribe = n.derviedExpression(this.params.lottie_url).subscribe((_) => {
        this.loadData(_).then((h) => {
          var w;
          (w = this.animItem) == null || w.destroy();
          const m = l !== 0, p = this.animItem = t({
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
function A4(t, r = {}) {
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
function S4(t) {
  const { target: r, hydrate: e, ...n } = t, o = new g4({
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
    },
    getDebugVariables() {
      return o.getDebugVariables();
    },
    getDebugAllVariables() {
      return o.getDebugAllVariables();
    }
  };
}
function V4(t, r) {
  return b4(t, r).result;
}
function b4(t, r) {
  let e;
  try {
    e = nl(t, {
      startRule: (r == null ? void 0 : r.type) === "json" ? "JsonStringContents" : "start"
    });
  } catch {
    return {
      result: {
        type: "error",
        value: "Unable to parse expression"
      },
      warnings: []
    };
  }
  return ml((r == null ? void 0 : r.variables) || /* @__PURE__ */ new Map(), void 0, void 0, e);
}
function F4() {
  return Array.from(ns.keys());
}
function D4(t, r) {
  return nl(t, {
    startRule: (r == null ? void 0 : r.type) === "json" ? "JsonStringContents" : "start"
  });
}
export {
  v4 as Gesture,
  k4 as SizeProvider,
  w4 as createGlobalVariablesController,
  Xn as createVariable,
  V4 as evalExpression,
  b4 as evalExpressionWithFullResult,
  F4 as functionNames,
  C4 as lottieExtensionBuilder,
  A4 as markdownExtensionBuilder,
  D4 as parseExpression,
  S4 as render,
  Ei as valToString,
  oo as walkExpression
};
//# sourceMappingURL=client-devtool.mjs.map
