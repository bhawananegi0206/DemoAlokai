import Fr from "react";
import Re from "react-dom";
function Ne(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function je(t, o, n) {
  return o = V(o), ze(t, lr() ? Reflect.construct(o, n || [], V(t).constructor) : o.apply(t, n));
}
function Ce(t, o) {
  if (!(t instanceof o))
    throw new TypeError("Cannot call a class as a function");
}
function Oe(t, o, n) {
  if (lr())
    return Reflect.construct.apply(null, arguments);
  var l = [null];
  l.push.apply(l, o);
  var _ = new (t.bind.apply(t, l))();
  return n && q(_, n.prototype), _;
}
function Ar(t, o) {
  for (var n = 0; n < o.length; n++) {
    var l = o[n];
    l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(t, Ye(l.key), l);
  }
}
function Se(t, o, n) {
  return o && Ar(t.prototype, o), n && Ar(t, n), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function V(t) {
  return V = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, V(t);
}
function Te(t, o) {
  if (typeof o != "function" && o !== null)
    throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(o && o.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), o && q(t, o);
}
function Pe(t) {
  try {
    return Function.toString.call(t).indexOf("[native code]") !== -1;
  } catch {
    return typeof t == "function";
  }
}
function lr() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (lr = function() {
    return !!t;
  })();
}
function ze(t, o) {
  if (o && (typeof o == "object" || typeof o == "function"))
    return o;
  if (o !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Ne(t);
}
function q(t, o) {
  return q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, l) {
    return n.__proto__ = l, n;
  }, q(t, o);
}
function Ae(t, o) {
  if (typeof t != "object" || !t)
    return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var l = n.call(t, o || "default");
    if (typeof l != "object")
      return l;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (o === "string" ? String : Number)(t);
}
function Ye(t) {
  var o = Ae(t, "string");
  return typeof o == "symbol" ? o : o + "";
}
function sr(t) {
  var o = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return sr = function(n) {
    if (n === null || !Pe(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (o !== void 0) {
      if (o.has(n))
        return o.get(n);
      o.set(n, l);
    }
    function l() {
      return Oe(n, arguments, V(this).constructor);
    }
    return l.prototype = Object.create(n.prototype, {
      constructor: {
        value: l,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), q(l, n);
  }, sr(t);
}
var D = {}, W = Re;
if ({}.NODE_ENV === "production")
  D.createRoot = W.createRoot, D.hydrateRoot = W.hydrateRoot;
else {
  var K = W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  D.createRoot = function(t, o) {
    K.usingClientEntryPoint = !0;
    try {
      return W.createRoot(t, o);
    } finally {
      K.usingClientEntryPoint = !1;
    }
  }, D.hydrateRoot = function(t, o, n) {
    K.usingClientEntryPoint = !0;
    try {
      return W.hydrateRoot(t, o, n);
    } finally {
      K.usingClientEntryPoint = !1;
    }
  };
}
var G = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yr;
function De() {
  if (Yr)
    return L;
  Yr = 1;
  var t = Fr, o = Symbol.for("react.element"), n = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, _ = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(x, h, P) {
    var E, C = {}, O = null, U = null;
    P !== void 0 && (O = "" + P), h.key !== void 0 && (O = "" + h.key), h.ref !== void 0 && (U = h.ref);
    for (E in h)
      l.call(h, E) && !u.hasOwnProperty(E) && (C[E] = h[E]);
    if (x && x.defaultProps)
      for (E in h = x.defaultProps, h)
        C[E] === void 0 && (C[E] = h[E]);
    return { $$typeof: o, type: x, key: O, ref: U, props: C, _owner: _.current };
  }
  return L.Fragment = n, L.jsx = m, L.jsxs = m, L;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dr;
function Fe() {
  return Dr || (Dr = 1, {}.NODE_ENV !== "production" && function() {
    var t = Fr, o = Symbol.for("react.element"), n = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), _ = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), x = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), cr = Symbol.iterator, $r = "@@iterator";
    function Vr(r) {
      if (r === null || typeof r != "object")
        return null;
      var e = cr && r[cr] || r[$r];
      return typeof e == "function" ? e : null;
    }
    var z = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(r) {
      {
        for (var e = arguments.length, a = new Array(e > 1 ? e - 1 : 0), s = 1; s < e; s++)
          a[s - 1] = arguments[s];
        qr("error", r, a);
      }
    }
    function qr(r, e, a) {
      {
        var s = z.ReactDebugCurrentFrame, p = s.getStackAddendum();
        p !== "" && (e += "%s", a = a.concat([p]));
        var w = a.map(function(d) {
          return String(d);
        });
        w.unshift("Warning: " + e), Function.prototype.apply.call(console[r], console, w);
      }
    }
    var Ur = !1, Br = !1, Xr = !1, Jr = !1, Hr = !1, dr;
    dr = Symbol.for("react.module.reference");
    function Kr(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === l || r === u || Hr || r === _ || r === P || r === E || Jr || r === U || Ur || Br || Xr || typeof r == "object" && r !== null && (r.$$typeof === O || r.$$typeof === C || r.$$typeof === m || r.$$typeof === x || r.$$typeof === h || r.$$typeof === dr || r.getModuleId !== void 0));
    }
    function Gr(r, e, a) {
      var s = r.displayName;
      if (s)
        return s;
      var p = e.displayName || e.name || "";
      return p !== "" ? a + "(" + p + ")" : a;
    }
    function pr(r) {
      return r.displayName || "Context";
    }
    function j(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case l:
          return "Fragment";
        case n:
          return "Portal";
        case u:
          return "Profiler";
        case _:
          return "StrictMode";
        case P:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case x:
            var e = r;
            return pr(e) + ".Consumer";
          case m:
            var a = r;
            return pr(a._context) + ".Provider";
          case h:
            return Gr(r, r.render, "ForwardRef");
          case C:
            var s = r.displayName || null;
            return s !== null ? s : j(r.type) || "Memo";
          case O: {
            var p = r, w = p._payload, d = p._init;
            try {
              return j(d(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, F = 0, ur, wr, gr, br, fr, mr, vr;
    function hr() {
    }
    hr.__reactDisabledLog = !0;
    function Qr() {
      {
        if (F === 0) {
          ur = console.log, wr = console.info, gr = console.warn, br = console.error, fr = console.group, mr = console.groupCollapsed, vr = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: hr,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        F++;
      }
    }
    function Zr() {
      {
        if (F--, F === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, r, {
              value: ur
            }),
            info: S({}, r, {
              value: wr
            }),
            warn: S({}, r, {
              value: gr
            }),
            error: S({}, r, {
              value: br
            }),
            group: S({}, r, {
              value: fr
            }),
            groupCollapsed: S({}, r, {
              value: mr
            }),
            groupEnd: S({}, r, {
              value: vr
            })
          });
        }
        F < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = z.ReactCurrentDispatcher, Z;
    function B(r, e, a) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (p) {
            var s = p.stack.trim().match(/\n( *(at )?)/);
            Z = s && s[1] || "";
          }
        return `
` + Z + r;
      }
    }
    var rr = !1, X;
    {
      var re = typeof WeakMap == "function" ? WeakMap : Map;
      X = new re();
    }
    function yr(r, e) {
      if (!r || rr)
        return "";
      {
        var a = X.get(r);
        if (a !== void 0)
          return a;
      }
      var s;
      rr = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = Q.current, Q.current = null, Qr();
      try {
        if (e) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (k) {
              s = k;
            }
            Reflect.construct(r, [], d);
          } else {
            try {
              d.call();
            } catch (k) {
              s = k;
            }
            r.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (k) {
            s = k;
          }
          r();
        }
      } catch (k) {
        if (k && s && typeof k.stack == "string") {
          for (var c = k.stack.split(`
`), y = s.stack.split(`
`), b = c.length - 1, f = y.length - 1; b >= 1 && f >= 0 && c[b] !== y[f]; )
            f--;
          for (; b >= 1 && f >= 0; b--, f--)
            if (c[b] !== y[f]) {
              if (b !== 1 || f !== 1)
                do
                  if (b--, f--, f < 0 || c[b] !== y[f]) {
                    var R = `
` + c[b].replace(" at new ", " at ");
                    return r.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", r.displayName)), typeof r == "function" && X.set(r, R), R;
                  }
                while (b >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        rr = !1, Q.current = w, Zr(), Error.prepareStackTrace = p;
      }
      var Y = r ? r.displayName || r.name : "", T = Y ? B(Y) : "";
      return typeof r == "function" && X.set(r, T), T;
    }
    function ee(r, e, a) {
      return yr(r, !1);
    }
    function te(r) {
      var e = r.prototype;
      return !!(e && e.isReactComponent);
    }
    function J(r, e, a) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return yr(r, te(r));
      if (typeof r == "string")
        return B(r);
      switch (r) {
        case P:
          return B("Suspense");
        case E:
          return B("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case h:
            return ee(r.render);
          case C:
            return J(r.type, e, a);
          case O: {
            var s = r, p = s._payload, w = s._init;
            try {
              return J(w(p), e, a);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, xr = {}, kr = z.ReactDebugCurrentFrame;
    function H(r) {
      if (r) {
        var e = r._owner, a = J(r.type, r._source, e ? e.type : null);
        kr.setExtraStackFrame(a);
      } else
        kr.setExtraStackFrame(null);
    }
    function oe(r, e, a, s, p) {
      {
        var w = Function.call.bind(I);
        for (var d in r)
          if (w(r, d)) {
            var c = void 0;
            try {
              if (typeof r[d] != "function") {
                var y = Error((s || "React class") + ": " + a + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              c = r[d](e, d, s, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              c = b;
            }
            c && !(c instanceof Error) && (H(p), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", a, d, typeof c), H(null)), c instanceof Error && !(c.message in xr) && (xr[c.message] = !0, H(p), v("Failed %s type: %s", a, c.message), H(null));
          }
      }
    }
    var ae = Array.isArray;
    function er(r) {
      return ae(r);
    }
    function ie(r) {
      {
        var e = typeof Symbol == "function" && Symbol.toStringTag, a = e && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return a;
      }
    }
    function ne(r) {
      try {
        return _r(r), !1;
      } catch {
        return !0;
      }
    }
    function _r(r) {
      return "" + r;
    }
    function Er(r) {
      if (ne(r))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ie(r)), _r(r);
    }
    var M = z.ReactCurrentOwner, se = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Rr, Nr, tr;
    tr = {};
    function le(r) {
      if (I.call(r, "ref")) {
        var e = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function ce(r) {
      if (I.call(r, "key")) {
        var e = Object.getOwnPropertyDescriptor(r, "key").get;
        if (e && e.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function de(r, e) {
      if (typeof r.ref == "string" && M.current && e && M.current.stateNode !== e) {
        var a = j(M.current.type);
        tr[a] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(M.current.type), r.ref), tr[a] = !0);
      }
    }
    function pe(r, e) {
      {
        var a = function() {
          Rr || (Rr = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        a.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function ue(r, e) {
      {
        var a = function() {
          Nr || (Nr = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", e));
        };
        a.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var we = function(r, e, a, s, p, w, d) {
      var c = {
        $$typeof: o,
        type: r,
        key: e,
        ref: a,
        props: d,
        _owner: w
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function ge(r, e, a, s, p) {
      {
        var w, d = {}, c = null, y = null;
        a !== void 0 && (Er(a), c = "" + a), ce(e) && (Er(e.key), c = "" + e.key), le(e) && (y = e.ref, de(e, p));
        for (w in e)
          I.call(e, w) && !se.hasOwnProperty(w) && (d[w] = e[w]);
        if (r && r.defaultProps) {
          var b = r.defaultProps;
          for (w in b)
            d[w] === void 0 && (d[w] = b[w]);
        }
        if (c || y) {
          var f = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          c && pe(d, f), y && ue(d, f);
        }
        return we(r, c, y, p, s, M.current, d);
      }
    }
    var or = z.ReactCurrentOwner, jr = z.ReactDebugCurrentFrame;
    function A(r) {
      if (r) {
        var e = r._owner, a = J(r.type, r._source, e ? e.type : null);
        jr.setExtraStackFrame(a);
      } else
        jr.setExtraStackFrame(null);
    }
    var ar;
    ar = !1;
    function ir(r) {
      return typeof r == "object" && r !== null && r.$$typeof === o;
    }
    function Cr() {
      {
        if (or.current) {
          var r = j(or.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function be(r) {
      {
        if (r !== void 0) {
          var e = r.fileName.replace(/^.*[\\\/]/, ""), a = r.lineNumber;
          return `

Check your code at ` + e + ":" + a + ".";
        }
        return "";
      }
    }
    var Or = {};
    function fe(r) {
      {
        var e = Cr();
        if (!e) {
          var a = typeof r == "string" ? r : r.displayName || r.name;
          a && (e = `

Check the top-level render call using <` + a + ">.");
        }
        return e;
      }
    }
    function Sr(r, e) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var a = fe(e);
        if (Or[a])
          return;
        Or[a] = !0;
        var s = "";
        r && r._owner && r._owner !== or.current && (s = " It was passed a child from " + j(r._owner.type) + "."), A(r), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, s), A(null);
      }
    }
    function Tr(r, e) {
      {
        if (typeof r != "object")
          return;
        if (er(r))
          for (var a = 0; a < r.length; a++) {
            var s = r[a];
            ir(s) && Sr(s, e);
          }
        else if (ir(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var p = Vr(r);
          if (typeof p == "function" && p !== r.entries)
            for (var w = p.call(r), d; !(d = w.next()).done; )
              ir(d.value) && Sr(d.value, e);
        }
      }
    }
    function me(r) {
      {
        var e = r.type;
        if (e == null || typeof e == "string")
          return;
        var a;
        if (typeof e == "function")
          a = e.propTypes;
        else if (typeof e == "object" && (e.$$typeof === h || e.$$typeof === C))
          a = e.propTypes;
        else
          return;
        if (a) {
          var s = j(e);
          oe(a, r.props, "prop", s, r);
        } else if (e.PropTypes !== void 0 && !ar) {
          ar = !0;
          var p = j(e);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof e.getDefaultProps == "function" && !e.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ve(r) {
      {
        for (var e = Object.keys(r.props), a = 0; a < e.length; a++) {
          var s = e[a];
          if (s !== "children" && s !== "key") {
            A(r), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), A(null);
            break;
          }
        }
        r.ref !== null && (A(r), v("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var Pr = {};
    function zr(r, e, a, s, p, w) {
      {
        var d = Kr(r);
        if (!d) {
          var c = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = be(p);
          y ? c += y : c += Cr();
          var b;
          r === null ? b = "null" : er(r) ? b = "array" : r !== void 0 && r.$$typeof === o ? (b = "<" + (j(r.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : b = typeof r, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, c);
        }
        var f = ge(r, e, a, p, w);
        if (f == null)
          return f;
        if (d) {
          var R = e.children;
          if (R !== void 0)
            if (s)
              if (er(R)) {
                for (var Y = 0; Y < R.length; Y++)
                  Tr(R[Y], r);
                Object.freeze && Object.freeze(R);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Tr(R, r);
        }
        if (I.call(e, "key")) {
          var T = j(r), k = Object.keys(e).filter(function(Ee) {
            return Ee !== "key";
          }), nr = k.length > 0 ? "{key: someKey, " + k.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Pr[T + nr]) {
            var _e = k.length > 0 ? "{" + k.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, nr, T, _e, T), Pr[T + nr] = !0;
          }
        }
        return r === l ? ve(f) : me(f), f;
      }
    }
    function he(r, e, a) {
      return zr(r, e, a, !0);
    }
    function ye(r, e, a) {
      return zr(r, e, a, !1);
    }
    var xe = ye, ke = he;
    $.Fragment = l, $.jsx = xe, $.jsxs = ke;
  }()), $;
}
(function(t) {
  ({}).NODE_ENV === "production" ? t.exports = De() : t.exports = Fe();
})(G);
const Ie = G.exports.Fragment, i = G.exports.jsx, g = G.exports.jsxs;
var Ir = /* @__PURE__ */ ((t) => (t.vertical = "vertical", t.horizontal = "horizontal", t))(Ir || {});
const Me = typeof window < "u", We = Me && (window == null ? void 0 : window.matchMedia("(prefers-reduced-motion: reduce)").matches);
function Le(t) {
  var o;
  return typeof window < "u" && window.navigator != null ? t.test(((o = window.navigator.userAgentData) == null ? void 0 : o.platform) || window.navigator.platform) : !1;
}
function Mr(t) {
  var o;
  return typeof window > "u" || window.navigator == null ? !1 : ((o = window.navigator.userAgentData) == null ? void 0 : o.brands.some(
    (n) => t.test(n.brand)
  )) || t.test(window.navigator.userAgent);
}
Le(/^Mac/i);
Mr(/Android/i);
Mr(/^((?!chrome|android).)*safari/i);
Ir.horizontal;
var N = /* @__PURE__ */ ((t) => (t.xs = "xs", t.sm = "sm", t.base = "base", t.lg = "lg", t.xl = "xl", t["2xl"] = "2xl", t["3xl"] = "3xl", t["4xl"] = "4xl", t))(N || {}), Wr = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(t) {
  (function() {
    var o = {}.hasOwnProperty;
    function n() {
      for (var u = "", m = 0; m < arguments.length; m++) {
        var x = arguments[m];
        x && (u = _(u, l(x)));
      }
      return u;
    }
    function l(u) {
      if (typeof u == "string" || typeof u == "number")
        return u;
      if (typeof u != "object")
        return "";
      if (Array.isArray(u))
        return n.apply(null, u);
      if (u.toString !== Object.prototype.toString && !u.toString.toString().includes("[native code]"))
        return u.toString();
      var m = "";
      for (var x in u)
        o.call(u, x) && u[x] && (m = _(m, x));
      return m;
    }
    function _(u, m) {
      return m ? u ? u + " " + m : u + m : u;
    }
    t.exports ? (n.default = n, t.exports = n) : window.classNames = n;
  })();
})(Wr);
const $e = Wr.exports, Ve = (t) => {
  switch (t) {
    case N.xs:
      return "w-4 h-4";
    case N.sm:
      return "w-5 h-5";
    case N.lg:
      return "w-8 h-8";
    case N.xl:
      return "w-10 h-10";
    case N["2xl"]:
      return "w-14 h-14";
    case N["3xl"]:
      return "w-24 h-24";
    case N["4xl"]:
      return "w-48 h-48";
    default:
      return "w-6 h-6";
  }
};
function Lr({
  size: t = N.base,
  className: o,
  children: n = "",
  ...l
}) {
  return /* @__PURE__ */ i(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: $e("inline-block fill-current", Ve(t), o),
      ...l,
      children: n
    }
  );
}
function qe({ size: t = N.base, viewBox: o = "0 0 24 24", ...n }) {
  return /* @__PURE__ */ i(Lr, { size: t, viewBox: o, "data-testid": "block", ...n, children: /* @__PURE__ */ i("path", { d: "M12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.138A9.7 9.7 0 0 1 12 2q2.075 0 3.9.787a10.1 10.1 0 0 1 3.175 2.138q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m0-2q3.35 0 5.675-2.325T20 12q0-1.35-.438-2.6A8 8 0 0 0 18.3 7.1L7.1 18.3q1.05.825 2.3 1.262T12 20m-6.3-3.1L16.9 5.7q-1.05-.824-2.3-1.262A7.8 7.8 0 0 0 12 4Q8.65 4 6.325 6.325T4 12q0 1.35.438 2.6.437 1.25 1.262 2.3" }) });
}
function Ue({
  size: t = N.base,
  viewBox: o = "0 0 24 24",
  ...n
}) {
  return /* @__PURE__ */ i(Lr, { size: t, viewBox: o, "data-testid": "credit-card", ...n, children: /* @__PURE__ */ i("path", { d: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2m0 14H4v-6h16zm0-10H4V6h16z" }) });
}
const Be = `*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type="button"]),input:where([type="reset"]),input:where([type="submit"]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden="until-found"])){display:none}:root{--colors-primary-50: 235 255 242;--colors-primary-100: 217 253 228;--colors-primary-200: 171 241 192;--colors-primary-300: 130 234 158;--colors-primary-400: 60 224 120;--colors-primary-500: 19 195 96;--colors-primary-600: 7 161 79;--colors-primary-700: 13 127 63;--colors-primary-800: 16 86 46;--colors-primary-900: 15 50 30;--colors-secondary-50: 247 245 253;--colors-secondary-100: 239 236 251;--colors-secondary-200: 225 218 246;--colors-secondary-300: 216 203 245;--colors-secondary-400: 198 177 246;--colors-secondary-500: 180 151 249;--colors-secondary-600: 151 111 238;--colors-secondary-700: 119 79 209;--colors-secondary-800: 82 52 153;--colors-secondary-900: 48 32 86;--colors-positive-50: 235 255 242;--colors-positive-100: 217 253 228;--colors-positive-200: 171 241 192;--colors-positive-300: 130 234 158;--colors-positive-400: 60 224 120;--colors-positive-500: 19 195 96;--colors-positive-600: 7 161 79;--colors-positive-700: 13 127 63;--colors-positive-800: 16 86 46;--colors-positive-900: 15 50 30;--colors-negative-50: 255 245 247;--colors-negative-100: 255 232 237;--colors-negative-200: 254 211 219;--colors-negative-300: 253 193 202;--colors-negative-400: 255 163 175;--colors-negative-500: 255 127 143;--colors-negative-600: 240 59 91;--colors-negative-700: 208 13 48;--colors-negative-800: 141 8 33;--colors-negative-900: 76 15 23;--colors-warning-50: 254 247 236;--colors-warning-100: 255 238 211;--colors-warning-200: 254 220 165;--colors-warning-300: 254 202 132;--colors-warning-400: 255 181 77;--colors-warning-500: 237 153 14;--colors-warning-600: 191 121 17;--colors-warning-700: 157 93 3;--colors-warning-800: 109 63 9;--colors-warning-900: 62 35 10;--colors-neutral-50: 249 251 250;--colors-neutral-100: 239 244 241;--colors-neutral-200: 217 226 220;--colors-neutral-300: 187 198 190;--colors-neutral-400: 129 140 133;--colors-neutral-500: 100 111 104;--colors-neutral-600: 77 86 79;--colors-neutral-700: 56 65 59;--colors-neutral-800: 37 43 39;--colors-neutral-900: 21 26 22;--colors-disabled-50: 249 251 250;--colors-disabled-100: 239 244 241;--colors-disabled-200: 217 226 220;--colors-disabled-300: 187 198 190;--colors-disabled-400: 129 140 133;--colors-disabled-500: 100 111 104;--colors-disabled-600: 77 86 79;--colors-disabled-700: 56 65 59;--colors-disabled-800: 37 43 39;--colors-disabled-900: 21 26 22}.container{width:100%}@media (min-width: 376px){.container{max-width:376px}}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0}.pointer-events-none{pointer-events:none}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0px}.bottom-0{bottom:0px}.bottom-4{bottom:1rem}.left-0{left:0px}.left-4{left:1rem}.right-0{right:0px}.right-4{right:1rem}.top-0{top:0px}.top-1\\/3{top:33.333333%}.top-4{top:1rem}.z-10{z-index:10}.col-span-5{grid-column:span 5 / span 5}.col-span-7{grid-column:span 7 / span 7}.m-auto{margin:auto}.-mx-4{margin-left:-1rem;margin-right:-1rem}.mx-auto{margin-left:auto;margin-right:auto}.my-10{margin-top:2.5rem;margin-bottom:2.5rem}.my-4{margin-top:1rem;margin-bottom:1rem}.my-6{margin-top:1.5rem;margin-bottom:1.5rem}.mb-10{margin-bottom:2.5rem}.mb-20{margin-bottom:5rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mb-6{margin-bottom:1.5rem}.ml-4{margin-left:1rem}.mr-2{margin-right:.5rem}.mr-4{margin-right:1rem}.mt-2{margin-top:.5rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-8{margin-top:2rem}.box-border{box-sizing:border-box}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.list-item{display:list-item}.hidden{display:none}.h-1{height:.25rem}.h-10{height:2.5rem}.h-14{height:3.5rem}.h-20{height:5rem}.h-24{height:6rem}.h-4{height:1rem}.h-48{height:12rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-7{height:1.75rem}.h-8{height:2rem}.h-\\[1\\.5em\\]{height:1.5em}.h-\\[10px\\]{height:10px}.h-\\[18px\\]{height:18px}.h-\\[32px\\]{height:32px}.h-\\[40px\\]{height:40px}.h-\\[48px\\]{height:48px}.h-\\[56px\\]{height:56px}.h-\\[64px\\]{height:64px}.h-\\[72px\\]{height:72px}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.h-px{height:1px}.min-h-\\[12px\\]{min-height:12px}.w-0{width:0px}.w-10{width:2.5rem}.w-14{width:3.5rem}.w-24{width:6rem}.w-4{width:1rem}.w-48{width:12rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-8{width:2rem}.w-\\[1\\.5em\\]{width:1.5em}.w-\\[10px\\]{width:10px}.w-auto{width:auto}.w-fit{width:-moz-fit-content;width:fit-content}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.min-w-0{min-width:0px}.min-w-\\[12px\\]{min-width:12px}.min-w-\\[18px\\]{min-width:18px}.min-w-\\[36px\\]{min-width:36px}.min-w-\\[80px\\]{min-width:80px}.max-w-\\[360px\\]{max-width:360px}.flex-1{flex:1 1 0%}.origin-bottom-right{transform-origin:bottom right}.-translate-x-0\\.5{--tw-translate-x: -.125rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-0{--tw-translate-y: -0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-0\\.5{--tw-translate-y: -.125rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1{--tw-translate-y: -.25rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-x-0\\.5{--tw-translate-x: .125rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-0{--tw-translate-y: 0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-0\\.5{--tw-translate-y: .125rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-rotate-90{--tw-rotate: -90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-180{--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-45{--tw-rotate: 45deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-90{--tw-rotate: 90deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes spin{to{transform:rotate(360deg)}}.animate-spin-slow{animation:spin 1.5s linear infinite}@keyframes stroke-loader-circular{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:140,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-150}}.animate-stroke-loader-circular{animation:stroke-loader-circular 2s ease-in-out infinite}.cursor-grab{cursor:grab}.cursor-not-allowed{cursor:not-allowed}.cursor-pointer{cursor:pointer}.list-none{list-style-type:none}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-1\\.5{gap:.375rem}.gap-2{gap:.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.overflow-y-auto{overflow-y:auto}.\\!rounded-full{border-radius:9999px!important}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-sm{border-radius:.125rem}.rounded-xl{border-radius:.75rem}.border{border-width:1px}.border-2{border-width:2px}.border-current{border-color:currentColor}.border-gray-500{--tw-border-opacity: 1;border-color:rgb(107 114 128 / var(--tw-border-opacity))}.border-negative-700{--tw-border-opacity: 1;border-color:rgb(var(--colors-negative-700) / var(--tw-border-opacity))}.border-negative-900{--tw-border-opacity: 1;border-color:rgb(var(--colors-negative-900) / var(--tw-border-opacity))}.border-neutral-100{--tw-border-opacity: 1;border-color:rgb(var(--colors-neutral-100) / var(--tw-border-opacity))}.border-neutral-200{--tw-border-opacity: 1;border-color:rgb(var(--colors-neutral-200) / var(--tw-border-opacity))}.border-neutral-500{--tw-border-opacity: 1;border-color:rgb(var(--colors-neutral-500) / var(--tw-border-opacity))}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.bg-blue-500{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))}.bg-negative-900{--tw-bg-opacity: 1;background-color:rgb(var(--colors-negative-900) / var(--tw-bg-opacity))}.bg-neutral-100{--tw-bg-opacity: 1;background-color:rgb(var(--colors-neutral-100) / var(--tw-bg-opacity))}.bg-neutral-200{--tw-bg-opacity: 1;background-color:rgb(var(--colors-neutral-200) / var(--tw-bg-opacity))}.bg-neutral-300{--tw-bg-opacity: 1;background-color:rgb(var(--colors-neutral-300) / var(--tw-bg-opacity))}.bg-primary-700{--tw-bg-opacity: 1;background-color:rgb(var(--colors-primary-700) / var(--tw-bg-opacity))}.bg-secondary-700{--tw-bg-opacity: 1;background-color:rgb(var(--colors-secondary-700) / var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.bg-clip-content{background-clip:content-box}.fill-current{fill:currentColor}.fill-none{fill:none}.stroke-current{stroke:currentColor}.stroke-2{stroke-width:2}.stroke-\\[10px\\]{stroke-width:10px}.stroke-\\[3px\\]{stroke-width:3px}.stroke-\\[4px\\]{stroke-width:4px}.stroke-\\[6px\\]{stroke-width:6px}.stroke-\\[8px\\]{stroke-width:8px}.object-cover{-o-object-fit:cover;object-fit:cover}.p-0\\.5{padding:.125rem}.p-1\\.5{padding:.375rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.p-\\[3px\\]{padding:3px}.px-1{padding-left:.25rem;padding-right:.25rem}.px-1\\.5{padding-left:.375rem;padding-right:.375rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-2\\.5{padding-left:.625rem;padding-right:.625rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-3\\.5{padding-left:.875rem;padding-right:.875rem}.px-4{padding-left:1rem;padding-right:1rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-1\\.5{padding-top:.375rem;padding-bottom:.375rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-3{padding-top:.75rem;padding-bottom:.75rem}.py-6{padding-top:1.5rem;padding-bottom:1.5rem}.py-\\[6px\\]{padding-top:6px;padding-bottom:6px}.pb-4{padding-bottom:1rem}.pl-1\\.5{padding-left:.375rem}.pl-2{padding-left:.5rem}.pl-3{padding-left:.75rem}.pl-4{padding-left:1rem}.pr-1\\.5{padding-right:.375rem}.pr-2{padding-right:.5rem}.pr-3{padding-right:.75rem}.pr-3\\.5{padding-right:.875rem}.pr-4{padding-right:1rem}.pt-10{padding-top:2.5rem}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:2rem}.text-2xs{font-size:10px;line-height:11px}.text-3xs{font-size:8px;line-height:8px}.text-\\[8px\\]{font-size:8px}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-5{line-height:1.25rem}.leading-6{line-height:1.5rem}.leading-\\[8px\\]{line-height:8px}.\\!text-neutral-500{--tw-text-opacity: 1 !important;color:rgb(var(--colors-neutral-500) / var(--tw-text-opacity))!important}.text-disabled-500{color:rgb(var(--colors-disabled-500) / .5)}.text-disabled-900{color:rgb(var(--colors-disabled-900) / .5)}.text-gray-500{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-neutral-500{--tw-text-opacity: 1;color:rgb(var(--colors-neutral-500) / var(--tw-text-opacity))}.text-neutral-900{--tw-text-opacity: 1;color:rgb(var(--colors-neutral-900) / var(--tw-text-opacity))}.text-primary-700{--tw-text-opacity: 1;color:rgb(var(--colors-primary-700) / var(--tw-text-opacity))}.text-warning-500{--tw-text-opacity: 1;color:rgb(var(--colors-warning-500) / var(--tw-text-opacity))}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.underline{text-decoration-line:underline}.shadow{--tw-shadow: 0px 1px 3px rgba(0, 0, 0, .1), 0px 1px 2px rgba(0, 0, 0, .06);--tw-shadow-colored: 0px 1px 3px var(--tw-shadow-color), 0px 1px 2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / .1), 0 8px 10px -6px rgb(0 0 0 / .1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.outline-offset,.outline-offset-2{outline-offset:2px}.outline-secondary-600{outline-color:rgb(var(--colors-secondary-600) / 1)}.ring-1{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-2{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-4{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-8{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(8px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-\\[3px\\]{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.ring-inset{--tw-ring-inset: inset}.\\!ring-negative-700{--tw-ring-opacity: 1 !important;--tw-ring-color: rgb(var(--colors-negative-700) / var(--tw-ring-opacity)) !important}.\\!ring-neutral-500{--tw-ring-opacity: 1 !important;--tw-ring-color: rgb(var(--colors-neutral-500) / var(--tw-ring-opacity)) !important}.ring-negative-700{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--colors-negative-700) / var(--tw-ring-opacity))}.ring-neutral-200{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--colors-neutral-200) / var(--tw-ring-opacity))}.ring-neutral-300{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--colors-neutral-300) / var(--tw-ring-opacity))}.ring-primary-700{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--colors-primary-700) / var(--tw-ring-opacity))}.drop-shadow{--tw-drop-shadow: drop-shadow(0 1px 2px rgb(0 0 0 / .1)) drop-shadow(0 1px 1px rgb(0 0 0 / .06));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-\\[stroke-dasharray\\]{transition-property:stroke-dasharray;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-0{transition-duration:0s}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.content-none{--tw-content: none;content:var(--tw-content)}.before\\:absolute:before{content:var(--tw-content);position:absolute}.before\\:bottom-0:before{content:var(--tw-content);bottom:0px}.before\\:left-0:before{content:var(--tw-content);left:0px}.before\\:top-0:before{content:var(--tw-content);top:0px}.before\\:my-auto:before{content:var(--tw-content);margin-top:auto;margin-bottom:auto}.before\\:ml-0\\.5:before{content:var(--tw-content);margin-left:.125rem}.before\\:h-3\\.5:before{content:var(--tw-content);height:.875rem}.before\\:w-3\\.5:before{content:var(--tw-content);width:.875rem}.before\\:rounded-full:before{content:var(--tw-content);border-radius:9999px}.before\\:bg-gray-500:before{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(107 114 128 / var(--tw-bg-opacity))}.before\\:bg-negative-900:before{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(var(--colors-negative-900) / var(--tw-bg-opacity))}.before\\:transition-all:before{content:var(--tw-content);transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.before\\:duration-300:before{content:var(--tw-content);transition-duration:.3s}.before\\:ease-in-out:before{content:var(--tw-content);transition-timing-function:cubic-bezier(.4,0,.2,1)}.before\\:content-\\[\\'\\(\\'\\]:before{--tw-content: "(";content:var(--tw-content)}.before\\:content-none:before{--tw-content: none;content:var(--tw-content)}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:block:after{content:var(--tw-content);display:block}.after\\:h-full:after{content:var(--tw-content);height:100%}.after\\:w-2\\.5:after{content:var(--tw-content);width:.625rem}@keyframes line{0%{content:var(--tw-content);left:-100%;width:100%}to{content:var(--tw-content);left:100%;width:10%}}.after\\:animate-line:after{content:var(--tw-content);animation:line 1.5s ease-in infinite}.after\\:bg-current:after{content:var(--tw-content);background-color:currentColor}.after\\:content-\\[\\'\\)\\'\\]:after{--tw-content: ")";content:var(--tw-content)}.after\\:content-none:after{--tw-content: none;content:var(--tw-content)}.checked\\:border-primary-700:checked{--tw-border-opacity: 1;border-color:rgb(var(--colors-primary-700) / var(--tw-border-opacity))}.checked\\:bg-negative-700:checked{--tw-bg-opacity: 1;background-color:rgb(var(--colors-negative-700) / var(--tw-bg-opacity))}.checked\\:bg-primary-700:checked{--tw-bg-opacity: 1;background-color:rgb(var(--colors-primary-700) / var(--tw-bg-opacity))}.checked\\:bg-checked-checkbox-current:checked{background-image:linear-gradient(-45deg,transparent 65%,currentcolor 65.99%),linear-gradient(45deg,transparent 75%,currentcolor 75.99%),linear-gradient(-45deg,currentcolor 40%,transparent 40.99%),linear-gradient(45deg,currentcolor 30%,white 30.99%,white 40%,transparent 40.99%),linear-gradient(-45deg,white 50%,currentcolor 50.99%)}.checked\\:bg-none:checked{background-image:none}.checked\\:before\\:left-1\\/2:checked:before{content:var(--tw-content);left:50%}.checked\\:before\\:ml-0:checked:before{content:var(--tw-content);margin-left:0}.checked\\:before\\:mr-0\\.5:checked:before{content:var(--tw-content);margin-right:.125rem}.checked\\:before\\:bg-white:checked:before{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.indeterminate\\:bg-indeterminate-checkbox-current:indeterminate{background-image:linear-gradient(90deg,transparent 80%,currentcolor 80%),linear-gradient(-90deg,transparent 80%,currentcolor 80%),linear-gradient(0deg,currentcolor 43%,white 43%,white 57%,currentcolor 57%)}.read-only\\:bg-transparent:-moz-read-only{background-color:transparent}.read-only\\:bg-transparent:read-only{background-color:transparent}.focus-within\\:caret-primary-700:focus-within{caret-color:rgb(var(--colors-primary-700) / 1)}.focus-within\\:outline:focus-within{outline-style:solid;outline-width:2px}.focus-within\\:outline-offset:focus-within{outline-offset:2px}.focus-within\\:outline:focus-within{outline-color:rgb(var(--colors-secondary-600) / 1)}.focus-within\\:ring-2:focus-within{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-within\\:ring-primary-700:focus-within{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--colors-primary-700) / var(--tw-ring-opacity))}@media (hover: hover) and (pointer: fine){.hover\\:border-negative-800:hover{--tw-border-opacity: 1;border-color:rgb(var(--colors-negative-800) / var(--tw-border-opacity))}.hover\\:border-primary-700:hover{--tw-border-opacity: 1;border-color:rgb(var(--colors-primary-700) / var(--tw-border-opacity))}.hover\\:border-primary-800:hover{--tw-border-opacity: 1;border-color:rgb(var(--colors-primary-800) / var(--tw-border-opacity))}.hover\\:bg-neutral-100:hover{--tw-bg-opacity: 1;background-color:rgb(var(--colors-neutral-100) / var(--tw-bg-opacity))}.hover\\:bg-primary-100:hover{--tw-bg-opacity: 1;background-color:rgb(var(--colors-primary-100) / var(--tw-bg-opacity))}.hover\\:bg-primary-800:hover{--tw-bg-opacity: 1;background-color:rgb(var(--colors-primary-800) / var(--tw-bg-opacity))}.hover\\:text-gray-300:hover{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.hover\\:text-primary-800:hover{--tw-text-opacity: 1;color:rgb(var(--colors-primary-800) / var(--tw-text-opacity))}.hover\\:shadow-md:hover{--tw-shadow: 0px 4px 6px -1px rgba(0, 0, 0, .1), 0px 2px 4px -1px rgba(0, 0, 0, .06);--tw-shadow-colored: 0px 4px 6px -1px var(--tw-shadow-color), 0px 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.hover\\:ring-primary-700:hover{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--colors-primary-700) / var(--tw-ring-opacity))}.hover\\:ring-primary-800:hover{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--colors-primary-800) / var(--tw-ring-opacity))}.hover\\:before\\:bg-primary-800:hover:before{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(var(--colors-primary-800) / var(--tw-bg-opacity))}.hover\\:checked\\:border-primary-800:checked:hover{--tw-border-opacity: 1;border-color:rgb(var(--colors-primary-800) / var(--tw-border-opacity))}.hover\\:checked\\:bg-negative-800:checked:hover{--tw-bg-opacity: 1;background-color:rgb(var(--colors-negative-800) / var(--tw-bg-opacity))}.hover\\:checked\\:bg-primary-800:checked:hover{--tw-bg-opacity: 1;background-color:rgb(var(--colors-primary-800) / var(--tw-bg-opacity))}.hover\\:before\\:checked\\:bg-white:checked:hover:before{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}}.focus\\:caret-primary-700:focus{caret-color:rgb(var(--colors-primary-700) / 1)}.focus\\:outline:focus{outline-style:solid;outline-width:2px}.focus\\:outline-2:focus{outline-width:2px}.focus\\:outline-offset:focus{outline-offset:2px}.focus\\:outline-offset-2:focus{outline-offset:2px}.focus\\:outline:focus{outline-color:rgb(var(--colors-secondary-600) / 1)}.focus\\:ring-2:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-primary-700:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--colors-primary-700) / var(--tw-ring-opacity))}.focus-visible\\:relative:focus-visible{position:relative}.focus-visible\\:z-10:focus-visible{z-index:10}.focus-visible\\:rounded-sm:focus-visible{border-radius:.125rem}.focus-visible\\:outline:focus-visible{outline-style:solid;outline-width:2px}.focus-visible\\:outline-offset:focus-visible{outline-offset:2px}.focus-visible\\:outline:focus-visible{outline-color:rgb(var(--colors-secondary-600) / 1)}.active\\:border-negative-900:active{--tw-border-opacity: 1;border-color:rgb(var(--colors-negative-900) / var(--tw-border-opacity))}.active\\:border-primary-800:active{--tw-border-opacity: 1;border-color:rgb(var(--colors-primary-800) / var(--tw-border-opacity))}.active\\:border-primary-900:active{--tw-border-opacity: 1;border-color:rgb(var(--colors-primary-900) / var(--tw-border-opacity))}.active\\:bg-neutral-200:active{--tw-bg-opacity: 1;background-color:rgb(var(--colors-neutral-200) / var(--tw-bg-opacity))}.active\\:bg-primary-200:active{--tw-bg-opacity: 1;background-color:rgb(var(--colors-primary-200) / var(--tw-bg-opacity))}.active\\:bg-primary-900:active{--tw-bg-opacity: 1;background-color:rgb(var(--colors-primary-900) / var(--tw-bg-opacity))}.active\\:text-primary-900:active{--tw-text-opacity: 1;color:rgb(var(--colors-primary-900) / var(--tw-text-opacity))}.active\\:caret-primary-700:active{caret-color:rgb(var(--colors-primary-700) / 1)}.active\\:shadow:active{--tw-shadow: 0px 1px 3px rgba(0, 0, 0, .1), 0px 1px 2px rgba(0, 0, 0, .06);--tw-shadow-colored: 0px 1px 3px var(--tw-shadow-color), 0px 1px 2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.active\\:ring-2:active{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.active\\:ring-primary-700:active{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--colors-primary-700) / var(--tw-ring-opacity))}.active\\:ring-primary-900:active{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--colors-primary-900) / var(--tw-ring-opacity))}.active\\:before\\:bg-primary-800:active:before{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(var(--colors-primary-800) / var(--tw-bg-opacity))}.active\\:checked\\:border-primary-900:checked:active{--tw-border-opacity: 1;border-color:rgb(var(--colors-primary-900) / var(--tw-border-opacity))}.active\\:checked\\:bg-negative-900:checked:active{--tw-bg-opacity: 1;background-color:rgb(var(--colors-negative-900) / var(--tw-bg-opacity))}.active\\:checked\\:bg-primary-900:checked:active{--tw-bg-opacity: 1;background-color:rgb(var(--colors-primary-900) / var(--tw-bg-opacity))}.enabled\\:checked\\:text-primary-700:checked:enabled{--tw-text-opacity: 1;color:rgb(var(--colors-primary-700) / var(--tw-text-opacity))}.enabled\\:indeterminate\\:text-primary-700:indeterminate:enabled{--tw-text-opacity: 1;color:rgb(var(--colors-primary-700) / var(--tw-text-opacity))}@media (hover: hover) and (pointer: fine){.enabled\\:hover\\:border-negative-800:hover:enabled{--tw-border-opacity: 1;border-color:rgb(var(--colors-negative-800) / var(--tw-border-opacity))}.enabled\\:hover\\:border-primary-800:hover:enabled{--tw-border-opacity: 1;border-color:rgb(var(--colors-primary-800) / var(--tw-border-opacity))}.enabled\\:hover\\:checked\\:text-primary-800:checked:hover:enabled{--tw-text-opacity: 1;color:rgb(var(--colors-primary-800) / var(--tw-text-opacity))}.enabled\\:hover\\:indeterminate\\:text-primary-800:indeterminate:hover:enabled{--tw-text-opacity: 1;color:rgb(var(--colors-primary-800) / var(--tw-text-opacity))}}.enabled\\:focus-visible\\:outline:focus-visible:enabled{outline-style:solid;outline-width:2px}.enabled\\:focus-visible\\:outline-offset:focus-visible:enabled{outline-offset:2px}.enabled\\:focus-visible\\:outline:focus-visible:enabled{outline-color:rgb(var(--colors-secondary-600) / 1)}.enabled\\:active\\:border-negative-900:active:enabled{--tw-border-opacity: 1;border-color:rgb(var(--colors-negative-900) / var(--tw-border-opacity))}.enabled\\:active\\:border-primary-900:active:enabled{--tw-border-opacity: 1;border-color:rgb(var(--colors-primary-900) / var(--tw-border-opacity))}.enabled\\:active\\:checked\\:text-primary-900:checked:active:enabled{--tw-text-opacity: 1;color:rgb(var(--colors-primary-900) / var(--tw-text-opacity))}.disabled\\:hidden:disabled{display:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:border-disabled-500:disabled{border-color:rgb(var(--colors-disabled-500) / .5)}.disabled\\:border-gray-500\\/50:disabled{border-color:#6b728080}.disabled\\:bg-disabled-100:disabled{background-color:rgb(var(--colors-disabled-100) / .5)}.disabled\\:bg-disabled-300:disabled{background-color:rgb(var(--colors-disabled-300) / .5)}.disabled\\:bg-neutral-100:disabled{--tw-bg-opacity: 1;background-color:rgb(var(--colors-neutral-100) / var(--tw-bg-opacity))}.disabled\\:bg-transparent:disabled{background-color:transparent}.disabled\\:bg-white\\/50:disabled{background-color:#ffffff80}.disabled\\:\\!text-disabled-500:disabled{color:rgb(var(--colors-disabled-500) / .5)!important}.disabled\\:text-disabled-500:disabled{color:rgb(var(--colors-disabled-500) / .5)}.disabled\\:text-disabled-900:disabled{color:rgb(var(--colors-disabled-900) / .5)}.disabled\\:text-gray-300:disabled{--tw-text-opacity: 1;color:rgb(209 213 219 / var(--tw-text-opacity))}.disabled\\:opacity-50:disabled{opacity:.5}.disabled\\:shadow-none:disabled{--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.disabled\\:ring-0:disabled{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.disabled\\:ring-1:disabled{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.disabled\\:\\!ring-disabled-300:disabled{--tw-ring-color: rgb(var(--colors-disabled-300) / .5) !important}.disabled\\:ring-disabled-200:disabled{--tw-ring-color: rgb(var(--colors-disabled-200) / .5)}.disabled\\:ring-disabled-300:disabled{--tw-ring-color: rgb(var(--colors-disabled-300) / .5)}.disabled\\:before\\:bg-gray-500\\/50:disabled:before{content:var(--tw-content);background-color:#6b728080}.checked\\:disabled\\:border-0:disabled:checked{border-width:0px}.disabled\\:checked\\:border-disabled-500:checked:disabled{border-color:rgb(var(--colors-disabled-500) / .5)}.checked\\:disabled\\:bg-gray-500\\/50:disabled:checked{background-color:#6b728080}.disabled\\:checked\\:bg-disabled-500:checked:disabled{background-color:rgb(var(--colors-disabled-500) / .5)}.checked\\:disabled\\:before\\:bg-white:disabled:checked:before{content:var(--tw-content);--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.peer:focus-visible~.peer-focus-visible\\:outline{outline-style:solid;outline-width:2px;outline-color:rgb(var(--colors-secondary-600) / 1)}.peer:disabled~.peer-disabled\\:cursor-default{cursor:default}.peer:disabled~.peer-disabled\\:text-disabled-500{color:rgb(var(--colors-disabled-500) / .5)}.peer:checked+.peer-next-checked\\:ring-2{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.peer:checked+.peer-next-checked\\:ring-primary-700{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--colors-primary-700) / var(--tw-ring-opacity))}@media (hover: hover) and (pointer: fine){.peer:checked+.peer-next-checked\\:hover\\:ring-primary-700:hover{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--colors-primary-700) / var(--tw-ring-opacity))}}.peer:checked+.peer-next-checked\\:active\\:ring-primary-700:active{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--colors-primary-700) / var(--tw-ring-opacity))}.peer:hover+.peer-next-hover\\:ring-primary-200{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--colors-primary-200) / var(--tw-ring-opacity))}.peer:focus-visible+.peer-next-focus-visible\\:outline{outline-style:solid;outline-width:2px;outline-color:rgb(var(--colors-secondary-600) / 1)}.peer:active+.peer-next-active\\:ring-primary-300{--tw-ring-opacity: 1;--tw-ring-color: rgb(var(--colors-primary-300) / var(--tw-ring-opacity))}.peer:disabled+.peer-next-disabled\\:cursor-not-allowed{cursor:not-allowed}.peer:disabled+.peer-next-disabled\\:bg-disabled-100{background-color:rgb(var(--colors-disabled-100) / .5)}.peer:disabled+.peer-next-disabled\\:opacity-50{opacity:.5}.peer:disabled+.peer-next-disabled\\:ring-1{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.peer:disabled+.peer-next-disabled\\:ring-disabled-200{--tw-ring-color: rgb(var(--colors-disabled-200) / .5)}@media (hover: hover) and (pointer: fine){.peer:disabled+.peer-next-disabled\\:hover\\:ring-disabled-200:hover{--tw-ring-color: rgb(var(--colors-disabled-200) / .5)}}@media (prefers-reduced-motion: no-preference){.motion-safe\\:scroll-smooth{scroll-behavior:smooth}}@media not all and (min-width: 768px){.max-md\\:-mx-4{margin-left:-1rem;margin-right:-1rem}.max-md\\:w-auto{width:auto}}@media (min-width: 640px){.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}}@media (min-width: 768px){.md\\:sticky{position:sticky}.md\\:top-20{top:5rem}.md\\:mx-0{margin-left:0;margin-right:0}.md\\:mb-10{margin-bottom:2.5rem}.md\\:block{display:block}.md\\:grid{display:grid}.md\\:hidden{display:none}.md\\:w-auto{width:auto}.md\\:max-w-\\[520px\\]{max-width:520px}.md\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:items-end{align-items:flex-end}.md\\:gap-x-6{-moz-column-gap:1.5rem;column-gap:1.5rem}.md\\:rounded-md{border-radius:.375rem}.md\\:border{border-width:1px}.md\\:border-neutral-100{--tw-border-opacity: 1;border-color:rgb(var(--colors-neutral-100) / var(--tw-border-opacity))}.md\\:bg-inherit{background-color:inherit}.md\\:p-0{padding:0}.md\\:p-4{padding:1rem}.md\\:px-0{padding-left:0;padding-right:0}.md\\:px-4{padding-left:1rem;padding-right:1rem}.md\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.md\\:pb-0{padding-bottom:0}.md\\:text-3xl{font-size:1.875rem;line-height:2.25rem}.md\\:shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}}@media (min-width: 1024px){.lg\\:p-10{padding:2.5rem}.lg\\:px-10{padding-left:2.5rem;padding-right:2.5rem}}@media (min-width: 1280px){.xl\\:p-6{padding:1.5rem}}.\\[\\&\\:\\:-moz-progress-bar\\]\\:bg-current::-moz-progress-bar{background-color:currentColor}.\\[\\&\\:\\:-webkit-details-marker\\]\\:hidden::-webkit-details-marker{display:none}.\\[\\&\\:\\:-webkit-progress-bar\\]\\:bg-inherit::-webkit-progress-bar{background-color:inherit}.\\[\\&\\:\\:-webkit-progress-value\\]\\:bg-current::-webkit-progress-value{background-color:currentColor}.\\[\\&\\:\\:-webkit-progress-value\\]\\:transition-\\[width\\]::-webkit-progress-value{-webkit-transition-property:width;transition-property:width;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.\\[\\&\\:\\:-webkit-progress-value\\]\\:duration-200::-webkit-progress-value{transition-duration:.2s}.\\[\\&\\:\\:-webkit-progress-value\\]\\:ease-in-out::-webkit-progress-value{transition-timing-function:cubic-bezier(.4,0,.2,1)}
`;
var Xe = function(o) {
  var n = o.products;
  return /* @__PURE__ */ g(Ie, {
    children: [/* @__PURE__ */ i("style", {
      children: Be
    }), /* @__PURE__ */ i("div", {
      className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 custombg",
      children: n.map(function(l) {
        return /* @__PURE__ */ g("div", {
          className: "bg-white shadow-lg rounded-lg p-4",
          children: [/* @__PURE__ */ i("img", {
            src: l.image,
            alt: l.name,
            className: "w-full h-48 object-cover mb-4 rounded"
          }), /* @__PURE__ */ i("h3", {
            className: "text-xl font-semibold",
            children: l.name
          }), /* @__PURE__ */ i("p", {
            className: "text-gray-500 mt-2",
            children: l.description
          }), /* @__PURE__ */ g("p", {
            className: "text-lg font-bold mt-4",
            children: ["$", l.price]
          }), /* @__PURE__ */ i("button", {
            className: "mt-4 w-full bg-blue-500 text-white py-2 rounded",
            children: "Add to Cart"
          })]
        }, l.id);
      })
    }), /* @__PURE__ */ i("main", {
      children: /* @__PURE__ */ i("div", {
        className: "max-w-screen-3xl mx-auto md:px-6 lg:px-10 3xl:px-0",
        children: /* @__PURE__ */ g("div", {
          className: "px-4 md:px-0 mb-20",
          children: [/* @__PURE__ */ i("div", {
            className: "flex justify-between mt-8 mb-10",
            children: /* @__PURE__ */ i("h1", {
              className: "text-2xl md:text-3xl font-bold uppercase",
              children: "Proceed with Checkout"
            })
          }), /* @__PURE__ */ g("div", {
            className: "md:grid md:grid-cols-12 md:gap-x-6",
            children: [/* @__PURE__ */ g("div", {
              className: "col-span-7",
              children: [/* @__PURE__ */ i("hr", {
                className: "w-full h-px bg-neutral-200  md:w-auto -mx-4 md:mx-0"
              }), /* @__PURE__ */ g("div", {
                className: "md:px-4 py-6",
                children: [/* @__PURE__ */ i("div", {
                  className: "flex justify-between items-center",
                  children: /* @__PURE__ */ i("h2", {
                    className: "typography-headline-4 text-neutral-900 font-bold mb-4",
                    children: "Contact Information"
                  })
                }), /* @__PURE__ */ g("div", {
                  className: "w-full md:max-w-[520px]",
                  children: [/* @__PURE__ */ i("p", {
                    children: "Add your email and phone number to communicate with the store."
                  }), /* @__PURE__ */ i("button", {
                    type: "button",
                    className: "inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500  disabled:shadow-none  disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-inset ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50 mt-4 w-full md:w-auto",
                    children: "Add contact information"
                  })]
                })]
              }), /* @__PURE__ */ i("hr", {
                className: "w-full h-px bg-neutral-200  md:w-auto -mx-4 md:mx-0"
              }), /* @__PURE__ */ g("div", {
                className: "md:px-4 py-6",
                children: [/* @__PURE__ */ i("div", {
                  className: "flex justify-between items-center",
                  children: /* @__PURE__ */ i("h2", {
                    className: "typography-headline-4 text-neutral-900 font-bold mb-4",
                    children: "Billing Address"
                  })
                }), /* @__PURE__ */ g("div", {
                  className: "w-full md:max-w-[520px]",
                  children: [/* @__PURE__ */ i("p", {
                    children: "Add a billing address. You will receive the invoice to the email address provided above."
                  }), /* @__PURE__ */ i("button", {
                    type: "button",
                    className: "inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500  disabled:shadow-none  disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-inset ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50 mt-4 w-full md:w-auto",
                    children: "Add billing address"
                  })]
                })]
              }), /* @__PURE__ */ i("hr", {
                className: "w-full h-px bg-neutral-200  md:w-auto -mx-4 md:mx-0"
              }), /* @__PURE__ */ g("div", {
                className: "md:px-4 py-6",
                children: [/* @__PURE__ */ i("div", {
                  className: "flex justify-between items-center",
                  children: /* @__PURE__ */ i("h2", {
                    className: "typography-headline-4 text-neutral-900 font-bold mb-4",
                    children: "Shipping Address"
                  })
                }), /* @__PURE__ */ g("div", {
                  className: "w-full md:max-w-[520px]",
                  children: [/* @__PURE__ */ i("p", {
                    children: "Add a shipping address to view shipping details."
                  }), /* @__PURE__ */ i("button", {
                    type: "button",
                    className: "inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500  disabled:shadow-none  disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-inset ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50 mt-4 w-full md:w-auto",
                    children: "Add shipping address"
                  })]
                })]
              }), /* @__PURE__ */ i("hr", {
                className: "w-full h-px bg-neutral-200 md:w-auto -mx-4 md:mx-0"
              }), /* @__PURE__ */ g("div", {
                className: "md:px-4 my-6",
                children: [/* @__PURE__ */ i("div", {
                  className: "flex justify-between items-center",
                  children: /* @__PURE__ */ i("h3", {
                    className: "typography-headline-4 text-neutral-900 font-bold",
                    children: "Shipping details"
                  })
                }), /* @__PURE__ */ i("div", {
                  className: "mt-4",
                  children: /* @__PURE__ */ g("div", {
                    className: "flex mb-6",
                    children: [/* @__PURE__ */ i(qe, {}), /* @__PURE__ */ i("p", {
                      children: "Not available until a shipping address is provided."
                    })]
                  })
                })]
              }), /* @__PURE__ */ i("hr", {
                className: "w-full h-px bg-neutral-200  md:w-auto -mx-4 md:mx-0"
              }), /* @__PURE__ */ g("div", {
                className: "md:px-4 py-6",
                children: [/* @__PURE__ */ i("h3", {
                  className: "typography-headline-4 text-neutral-900 font-bold mb-4",
                  children: "Payment method"
                }), /* @__PURE__ */ g("div", {
                  className: "grid gap-4 grid-cols-2",
                  children: [/* @__PURE__ */ g("button", {
                    type: "button",
                    className: "border border-1 border-neutral-200 rounded h-20 flex items-center justify-center disabled:bg-neutral-100 disabled:opacity-50 focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600",
                    children: [/* @__PURE__ */ i(Ue, {
                      className: "mr-2"
                    }), /* @__PURE__ */ i("span", {
                      className: "font-medium",
                      children: "Credit Card"
                    })]
                  }), /* @__PURE__ */ i("button", {
                    type: "button",
                    disabled: !0,
                    className: "border border-1 border-neutral-200 rounded h-20 flex items-center justify-center disabled:bg-neutral-100 disabled:opacity-50 focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600",
                    children: /* @__PURE__ */ i("div", {
                      className: "flex flex-col items-center justify-center",
                      children: /* @__PURE__ */ i("span", {
                        className: "text-xs text-neutral-500",
                        children: "Coming soon"
                      })
                    })
                  }), /* @__PURE__ */ i("button", {
                    type: "button",
                    disabled: !0,
                    className: "border border-1 border-neutral-200 rounded h-20 flex items-center justify-center disabled:bg-neutral-100 disabled:opacity-50 focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600",
                    children: /* @__PURE__ */ i("div", {
                      className: "flex flex-col items-center justify-center",
                      children: /* @__PURE__ */ i("span", {
                        className: "text-xs text-neutral-500",
                        children: "Coming soon"
                      })
                    })
                  }), /* @__PURE__ */ i("button", {
                    type: "button",
                    disabled: !0,
                    className: "border border-1 border-neutral-200 rounded h-20 flex items-center justify-center disabled:bg-neutral-100 disabled:opacity-50 focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600",
                    children: /* @__PURE__ */ i("div", {
                      className: "flex flex-col items-center justify-center",
                      children: /* @__PURE__ */ i("span", {
                        className: "text-xs text-neutral-500",
                        children: "Coming soon"
                      })
                    })
                  })]
                })]
              }), /* @__PURE__ */ i("div", {
                id: "payment-element",
                className: "md:px-4 py-6"
              }), /* @__PURE__ */ i("hr", {
                className: "w-full h-px bg-neutral-200 md:w-auto -mx-4 md:mx-0 mb-10"
              })]
            }), /* @__PURE__ */ g("div", {
              className: "col-span-5 md:p-4 xl:p-6 md:border md:border-neutral-100 md:shadow-lg md:rounded-md md:sticky md:top-20 md:mb-10 h-fit",
              children: [/* @__PURE__ */ g("div", {
                className: "flex justify-between items-center md:items-end mb-5 md:bg-inherit bg-neutral-100 -mx-4 px-4 py-2 md:mx-0 md:p-0",
                children: [/* @__PURE__ */ i("h2", {
                  className: "typography-headline-4 md:typography-headline-3 font-bold",
                  children: "Order Summary"
                }), /* @__PURE__ */ i("span", {
                  className: "font-medium",
                  children: "(Items:10)"
                })]
              }), /* @__PURE__ */ g("div", {
                className: "flex justify-between items-start",
                children: [/* @__PURE__ */ i("span", {
                  children: "Items subtotal"
                }), /* @__PURE__ */ g("div", {
                  className: "flex items-end",
                  children: [/* @__PURE__ */ i("div", {
                    className: "flex flex-col items-end mr-2"
                  }), /* @__PURE__ */ i("div", {
                    className: "flex flex-col items-end",
                    children: /* @__PURE__ */ i("p", {
                      children: "$20"
                    })
                  })]
                })]
              }), /* @__PURE__ */ g("div", {
                className: "flex justify-between items-start mt-3",
                children: [/* @__PURE__ */ i("p", {
                  children: "Delivery"
                }), /* @__PURE__ */ i("p", {
                  children: "--"
                })]
              }), /* @__PURE__ */ g("div", {
                className: "flex justify-between items-start mt-3",
                children: [/* @__PURE__ */ i("p", {
                  children: "Estimated Sales Tax"
                }), /* @__PURE__ */ i("p", {
                  children: "$0.00"
                })]
              }), /* @__PURE__ */ i("hr", {
                className: "w-full h-px bg-neutral-200 my-4 max-md:-mx-4 max-md:w-auto"
              }), /* @__PURE__ */ g("form", {
                className: "flex gap-2 items-center justify-between",
                children: [/* @__PURE__ */ i("span", {
                  className: "flex items-center gap-2 px-4 bg-white rounded-md ring-1 text-neutral-500 hover:ring-primary-700 focus-within:caret-primary-700 active:caret-primary-700 active:ring-primary-700 active:ring-2 focus-within:ring-primary-700 focus-within:ring-2 ring-neutral-200 h-[40px] flex-1",
                  children: /* @__PURE__ */ i("input", {
                    className: "min-w-[80px] w-full text-base outline-none appearance-none text-neutral-900 disabled:cursor-not-allowed disabled:bg-transparent read-only:bg-transparent",
                    type: "text",
                    size: 1,
                    placeholder: "Enter promo code",
                    required: !0,
                    defaultValue: ""
                  })
                }), /* @__PURE__ */ i("button", {
                  type: "submit",
                  className: "inline-flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:shadow-none disabled:cursor-not-allowed py-2 leading-6 px-4 gap-2 text-primary-700 hover:bg-primary-100 hover:text-primary-800 active:bg-primary-200 active:text-primary-900 ring-1 ring-inset ring-primary-700 hover:shadow-md active:shadow shadow hover:ring-primary-800 active:ring-primary-900 disabled:ring-1 disabled:ring-disabled-300 disabled:bg-white/50",
                  children: "Apply"
                })]
              }), /* @__PURE__ */ i("hr", {
                className: "w-full h-px bg-neutral-200 my-4 max-md:-mx-4 max-md:w-auto"
              }), /* @__PURE__ */ g("div", {
                className: "flex justify-between items-end mb-5",
                children: [/* @__PURE__ */ i("h2", {
                  className: "typography-headline-4 md:typography-headline-3 font-bold",
                  children: "Total"
                }), /* @__PURE__ */ i("h2", {
                  className: "typography-headline-4 md:typography-headline-3 font-bold",
                  children: "$50"
                })]
              }), /* @__PURE__ */ i("hr", {
                className: "w-full h-px bg-neutral-200 my-4 max-md:-mx-4 max-md:w-auto"
              }), /* @__PURE__ */ i("button", {
                type: "button",
                className: "flex items-center justify-center font-medium text-base focus-visible:outline focus-visible:outline-offset rounded-md disabled:text-disabled-500 disabled:shadow-none disabled:ring-0 disabled:cursor-not-allowed py-3 leading-6 px-6 gap-3 text-white shadow hover:shadow-md active:shadow bg-primary-700 hover:bg-primary-800 active:bg-primary-900 disabled:bg-disabled-300 w-full h-[48px]",
                children: "Place order and pay"
              }), /* @__PURE__ */ i("p", {
                className: "text-sm text-center mt-4 pb-4 md:pb-0",
                children: "By placing my order, you agree to our and our"
              }), /* @__PURE__ */ i("hr", {
                className: "h-px bg-neutral-200 my-10 md:hidden -mx-4 w-auto"
              })]
            })]
          })]
        })
      })
    })]
  });
}, Je = /* @__PURE__ */ function(t) {
  function o() {
    var n;
    return Ce(this, o), n = je(this, o), n.attachShadow({
      mode: "open"
    }), n.products = [], n;
  }
  return Te(o, t), Se(o, [{
    key: "attributeChangedCallback",
    value: function(l, _, u) {
      if (l === "products")
        try {
          this.products = JSON.parse(u), this.render();
        } catch (m) {
          console.error("Invalid JSON in 'products' attribute", m);
        }
    }
  }, {
    key: "connectedCallback",
    value: function() {
      this.render();
    }
  }, {
    key: "render",
    value: function() {
      var l = document.createElement("div");
      this.shadowRoot.innerHTML = "", this.shadowRoot.appendChild(l);
      var _ = D.createRoot(l);
      _.render(/* @__PURE__ */ i(Xe, {
        products: this.products
      }));
    }
  }, {
    key: "disconnectedCallback",
    value: function() {
      D.unmountComponentAtNode(this.shadowRoot);
    }
  }], [{
    key: "observedAttributes",
    get: function() {
      return ["products"];
    }
  }]);
}(/* @__PURE__ */ sr(HTMLElement));
customElements.define("alokai-checkout-web-component", Je);
export {
  Je as default
};
