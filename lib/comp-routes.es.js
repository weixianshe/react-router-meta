import ft, { useContext as B, useMemo as Q, useRef as we, useEffect as ht, useCallback as $e, createElement as z, createContext as ue, useState as dt, useLayoutEffect as pt, forwardRef as vt } from "react";
var Ve = {}, nr = {
  get exports() {
    return Ve;
  },
  set exports(e) {
    Ve = e;
  }
}, se = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var it;
function ar() {
  if (it)
    return se;
  it = 1;
  var e = ft, r = Symbol.for("react.element"), a = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, h, m) {
    var d, E = {}, x = null, y = null;
    m !== void 0 && (x = "" + m), h.key !== void 0 && (x = "" + h.key), h.ref !== void 0 && (y = h.ref);
    for (d in h)
      n.call(h, d) && !i.hasOwnProperty(d) && (E[d] = h[d]);
    if (u && u.defaultProps)
      for (d in h = u.defaultProps, h)
        E[d] === void 0 && (E[d] = h[d]);
    return { $$typeof: r, type: u, key: x, ref: y, props: E, _owner: o.current };
  }
  return se.Fragment = a, se.jsx = l, se.jsxs = l, se;
}
var le = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var st;
function or() {
  return st || (st = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ft, r = Symbol.for("react.element"), a = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), w = Symbol.iterator, V = "@@iterator";
    function M(t) {
      if (t === null || typeof t != "object")
        return null;
      var s = w && t[w] || t[V];
      return typeof s == "function" ? s : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(t) {
      {
        for (var s = arguments.length, c = new Array(s > 1 ? s - 1 : 0), v = 1; v < s; v++)
          c[v - 1] = arguments[v];
        K("error", t, c);
      }
    }
    function K(t, s, c) {
      {
        var v = $.ReactDebugCurrentFrame, P = v.getStackAddendum();
        P !== "" && (s += "%s", c = c.concat([P]));
        var N = c.map(function(R) {
          return String(R);
        });
        N.unshift("Warning: " + s), Function.prototype.apply.call(console[t], console, N);
      }
    }
    var Z = !1, Y = !1, U = !1, g = !1, f = !1, p;
    p = Symbol.for("react.module.reference");
    function _(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === n || t === i || f || t === o || t === m || t === d || g || t === y || Z || Y || U || typeof t == "object" && t !== null && (t.$$typeof === x || t.$$typeof === E || t.$$typeof === l || t.$$typeof === u || t.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === p || t.getModuleId !== void 0));
    }
    function O(t, s, c) {
      var v = t.displayName;
      if (v)
        return v;
      var P = s.displayName || s.name || "";
      return P !== "" ? c + "(" + P + ")" : c;
    }
    function D(t) {
      return t.displayName || "Context";
    }
    function T(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case n:
          return "Fragment";
        case a:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case m:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case u:
            var s = t;
            return D(s) + ".Consumer";
          case l:
            var c = t;
            return D(c._context) + ".Provider";
          case h:
            return O(t, t.render, "ForwardRef");
          case E:
            var v = t.displayName || null;
            return v !== null ? v : T(t.type) || "Memo";
          case x: {
            var P = t, N = P._payload, R = P._init;
            try {
              return T(R(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, A = 0, _e, Fe, Ie, Be, Ye, Me, Ue;
    function He() {
    }
    He.__reactDisabledLog = !0;
    function jt() {
      {
        if (A === 0) {
          _e = console.log, Fe = console.info, Ie = console.warn, Be = console.error, Ye = console.group, Me = console.groupCollapsed, Ue = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: He,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        A++;
      }
    }
    function Dt() {
      {
        if (A--, A === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, t, {
              value: _e
            }),
            info: L({}, t, {
              value: Fe
            }),
            warn: L({}, t, {
              value: Ie
            }),
            error: L({}, t, {
              value: Be
            }),
            group: L({}, t, {
              value: Ye
            }),
            groupCollapsed: L({}, t, {
              value: Me
            }),
            groupEnd: L({}, t, {
              value: Ue
            })
          });
        }
        A < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Oe = $.ReactCurrentDispatcher, Ne;
    function fe(t, s, c) {
      {
        if (Ne === void 0)
          try {
            throw Error();
          } catch (P) {
            var v = P.stack.trim().match(/\n( *(at )?)/);
            Ne = v && v[1] || "";
          }
        return `
` + Ne + t;
      }
    }
    var xe = !1, he;
    {
      var Lt = typeof WeakMap == "function" ? WeakMap : Map;
      he = new Lt();
    }
    function Je(t, s) {
      if (!t || xe)
        return "";
      {
        var c = he.get(t);
        if (c !== void 0)
          return c;
      }
      var v;
      xe = !0;
      var P = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = Oe.current, Oe.current = null, jt();
      try {
        if (s) {
          var R = function() {
            throw Error();
          };
          if (Object.defineProperty(R.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(R, []);
            } catch (H) {
              v = H;
            }
            Reflect.construct(t, [], R);
          } else {
            try {
              R.call();
            } catch (H) {
              v = H;
            }
            t.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (H) {
            v = H;
          }
          t();
        }
      } catch (H) {
        if (H && v && typeof H.stack == "string") {
          for (var b = H.stack.split(`
`), W = v.stack.split(`
`), C = b.length - 1, k = W.length - 1; C >= 1 && k >= 0 && b[C] !== W[k]; )
            k--;
          for (; C >= 1 && k >= 0; C--, k--)
            if (b[C] !== W[k]) {
              if (C !== 1 || k !== 1)
                do
                  if (C--, k--, k < 0 || b[C] !== W[k]) {
                    var F = `
` + b[C].replace(" at new ", " at ");
                    return t.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", t.displayName)), typeof t == "function" && he.set(t, F), F;
                  }
                while (C >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        xe = !1, Oe.current = N, Dt(), Error.prepareStackTrace = P;
      }
      var ne = t ? t.displayName || t.name : "", ot = ne ? fe(ne) : "";
      return typeof t == "function" && he.set(t, ot), ot;
    }
    function Vt(t, s, c) {
      return Je(t, !1);
    }
    function $t(t) {
      var s = t.prototype;
      return !!(s && s.isReactComponent);
    }
    function de(t, s, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Je(t, $t(t));
      if (typeof t == "string")
        return fe(t);
      switch (t) {
        case m:
          return fe("Suspense");
        case d:
          return fe("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case h:
            return Vt(t.render);
          case E:
            return de(t.type, s, c);
          case x: {
            var v = t, P = v._payload, N = v._init;
            try {
              return de(N(P), s, c);
            } catch {
            }
          }
        }
      return "";
    }
    var pe = Object.prototype.hasOwnProperty, Ke = {}, qe = $.ReactDebugCurrentFrame;
    function ve(t) {
      if (t) {
        var s = t._owner, c = de(t.type, t._source, s ? s.type : null);
        qe.setExtraStackFrame(c);
      } else
        qe.setExtraStackFrame(null);
    }
    function At(t, s, c, v, P) {
      {
        var N = Function.call.bind(pe);
        for (var R in t)
          if (N(t, R)) {
            var b = void 0;
            try {
              if (typeof t[R] != "function") {
                var W = Error((v || "React class") + ": " + c + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw W.name = "Invariant Violation", W;
              }
              b = t[R](s, R, v, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              b = C;
            }
            b && !(b instanceof Error) && (ve(P), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", c, R, typeof b), ve(null)), b instanceof Error && !(b.message in Ke) && (Ke[b.message] = !0, ve(P), S("Failed %s type: %s", c, b.message), ve(null));
          }
      }
    }
    var Wt = Array.isArray;
    function Se(t) {
      return Wt(t);
    }
    function Ft(t) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, c = s && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function It(t) {
      try {
        return ze(t), !1;
      } catch {
        return !0;
      }
    }
    function ze(t) {
      return "" + t;
    }
    function Ge(t) {
      if (It(t))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ft(t)), ze(t);
    }
    var ie = $.ReactCurrentOwner, Bt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Xe, Ze, Te;
    Te = {};
    function Yt(t) {
      if (pe.call(t, "ref")) {
        var s = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Mt(t) {
      if (pe.call(t, "key")) {
        var s = Object.getOwnPropertyDescriptor(t, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Ut(t, s) {
      if (typeof t.ref == "string" && ie.current && s && ie.current.stateNode !== s) {
        var c = T(ie.current.type);
        Te[c] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(ie.current.type), t.ref), Te[c] = !0);
      }
    }
    function Ht(t, s) {
      {
        var c = function() {
          Xe || (Xe = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function Jt(t, s) {
      {
        var c = function() {
          Ze || (Ze = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Kt = function(t, s, c, v, P, N, R) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: s,
        ref: c,
        props: R,
        // Record the component responsible for creating this element.
        _owner: N
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function qt(t, s, c, v, P) {
      {
        var N, R = {}, b = null, W = null;
        c !== void 0 && (Ge(c), b = "" + c), Mt(s) && (Ge(s.key), b = "" + s.key), Yt(s) && (W = s.ref, Ut(s, P));
        for (N in s)
          pe.call(s, N) && !Bt.hasOwnProperty(N) && (R[N] = s[N]);
        if (t && t.defaultProps) {
          var C = t.defaultProps;
          for (N in C)
            R[N] === void 0 && (R[N] = C[N]);
        }
        if (b || W) {
          var k = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          b && Ht(R, k), W && Jt(R, k);
        }
        return Kt(t, b, W, P, v, ie.current, R);
      }
    }
    var Ce = $.ReactCurrentOwner, Qe = $.ReactDebugCurrentFrame;
    function re(t) {
      if (t) {
        var s = t._owner, c = de(t.type, t._source, s ? s.type : null);
        Qe.setExtraStackFrame(c);
      } else
        Qe.setExtraStackFrame(null);
    }
    var ke;
    ke = !1;
    function je(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function et() {
      {
        if (Ce.current) {
          var t = T(Ce.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function zt(t) {
      {
        if (t !== void 0) {
          var s = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
          return `

Check your code at ` + s + ":" + c + ".";
        }
        return "";
      }
    }
    var tt = {};
    function Gt(t) {
      {
        var s = et();
        if (!s) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (s = `

Check the top-level render call using <` + c + ">.");
        }
        return s;
      }
    }
    function rt(t, s) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = Gt(s);
        if (tt[c])
          return;
        tt[c] = !0;
        var v = "";
        t && t._owner && t._owner !== Ce.current && (v = " It was passed a child from " + T(t._owner.type) + "."), re(t), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, v), re(null);
      }
    }
    function nt(t, s) {
      {
        if (typeof t != "object")
          return;
        if (Se(t))
          for (var c = 0; c < t.length; c++) {
            var v = t[c];
            je(v) && rt(v, s);
          }
        else if (je(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var P = M(t);
          if (typeof P == "function" && P !== t.entries)
            for (var N = P.call(t), R; !(R = N.next()).done; )
              je(R.value) && rt(R.value, s);
        }
      }
    }
    function Xt(t) {
      {
        var s = t.type;
        if (s == null || typeof s == "string")
          return;
        var c;
        if (typeof s == "function")
          c = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === E))
          c = s.propTypes;
        else
          return;
        if (c) {
          var v = T(s);
          At(c, t.props, "prop", v, t);
        } else if (s.PropTypes !== void 0 && !ke) {
          ke = !0;
          var P = T(s);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", P || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Zt(t) {
      {
        for (var s = Object.keys(t.props), c = 0; c < s.length; c++) {
          var v = s[c];
          if (v !== "children" && v !== "key") {
            re(t), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), re(null);
            break;
          }
        }
        t.ref !== null && (re(t), S("Invalid attribute `ref` supplied to `React.Fragment`."), re(null));
      }
    }
    function at(t, s, c, v, P, N) {
      {
        var R = _(t);
        if (!R) {
          var b = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var W = zt(P);
          W ? b += W : b += et();
          var C;
          t === null ? C = "null" : Se(t) ? C = "array" : t !== void 0 && t.$$typeof === r ? (C = "<" + (T(t.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : C = typeof t, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C, b);
        }
        var k = qt(t, s, c, P, N);
        if (k == null)
          return k;
        if (R) {
          var F = s.children;
          if (F !== void 0)
            if (v)
              if (Se(F)) {
                for (var ne = 0; ne < F.length; ne++)
                  nt(F[ne], t);
                Object.freeze && Object.freeze(F);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              nt(F, t);
        }
        return t === n ? Zt(k) : Xt(k), k;
      }
    }
    function Qt(t, s, c) {
      return at(t, s, c, !0);
    }
    function er(t, s, c) {
      return at(t, s, c, !1);
    }
    var tr = er, rr = Qt;
    le.Fragment = n, le.jsx = tr, le.jsxs = rr;
  }()), le;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = ar() : e.exports = or();
})(nr);
const De = Ve.jsx;
function oe() {
  return oe = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var a = arguments[r];
      for (var n in a)
        Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
  }, oe.apply(this, arguments);
}
var I;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(I || (I = {}));
var ye = process.env.NODE_ENV !== "production" ? function(e) {
  return Object.freeze(e);
} : function(e) {
  return e;
};
function me(e, r) {
  if (!e) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
var ge = "beforeunload", ir = "hashchange", mt = "popstate";
function sr(e) {
  e === void 0 && (e = {});
  var r = e, a = r.window, n = a === void 0 ? document.defaultView : a, o = n.history;
  function i() {
    var g = n.location, f = g.pathname, p = g.search, _ = g.hash, O = o.state || {};
    return [O.idx, ye({
      pathname: f,
      search: p,
      hash: _,
      state: O.usr || null,
      key: O.key || "default"
    })];
  }
  var l = null;
  function u() {
    if (l)
      y.call(l), l = null;
    else {
      var g = I.Pop, f = i(), p = f[0], _ = f[1];
      if (y.length)
        if (p != null) {
          var O = d - p;
          O && (l = {
            action: g,
            location: _,
            retry: function() {
              Y(O * -1);
            }
          }, Y(O));
        } else
          process.env.NODE_ENV !== "production" && me(
            !1,
            // TODO: Write up a doc that explains our blocking strategy in
            // detail and link to it here so people can understand better what
            // is going on and how to avoid it.
            "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation."
          );
      else
        S(g);
    }
  }
  n.addEventListener(mt, u);
  var h = I.Pop, m = i(), d = m[0], E = m[1], x = be(), y = be();
  d == null && (d = 0, o.replaceState(oe({}, o.state, {
    idx: d
  }), ""));
  function w(g) {
    return typeof g == "string" ? g : ae(g);
  }
  function V(g, f) {
    return f === void 0 && (f = null), ye(oe({
      pathname: E.pathname,
      hash: "",
      search: ""
    }, typeof g == "string" ? J(g) : g, {
      state: f,
      key: yt()
    }));
  }
  function M(g, f) {
    return [{
      usr: g.state,
      key: g.key,
      idx: f
    }, w(g)];
  }
  function $(g, f, p) {
    return !y.length || (y.call({
      action: g,
      location: f,
      retry: p
    }), !1);
  }
  function S(g) {
    h = g;
    var f = i();
    d = f[0], E = f[1], x.call({
      action: h,
      location: E
    });
  }
  function K(g, f) {
    var p = I.Push, _ = V(g, f);
    function O() {
      K(g, f);
    }
    if ($(p, _, O)) {
      var D = M(_, d + 1), T = D[0], L = D[1];
      try {
        o.pushState(T, "", L);
      } catch {
        n.location.assign(L);
      }
      S(p);
    }
  }
  function Z(g, f) {
    var p = I.Replace, _ = V(g, f);
    function O() {
      Z(g, f);
    }
    if ($(p, _, O)) {
      var D = M(_, d), T = D[0], L = D[1];
      o.replaceState(T, "", L), S(p);
    }
  }
  function Y(g) {
    o.go(g);
  }
  var U = {
    get action() {
      return h;
    },
    get location() {
      return E;
    },
    createHref: w,
    push: K,
    replace: Z,
    go: Y,
    back: function() {
      Y(-1);
    },
    forward: function() {
      Y(1);
    },
    listen: function(f) {
      return x.push(f);
    },
    block: function(f) {
      var p = y.push(f);
      return y.length === 1 && n.addEventListener(ge, Ee), function() {
        p(), y.length || n.removeEventListener(ge, Ee);
      };
    }
  };
  return U;
}
function lr(e) {
  e === void 0 && (e = {});
  var r = e, a = r.window, n = a === void 0 ? document.defaultView : a, o = n.history;
  function i() {
    var f = J(n.location.hash.substr(1)), p = f.pathname, _ = p === void 0 ? "/" : p, O = f.search, D = O === void 0 ? "" : O, T = f.hash, L = T === void 0 ? "" : T, A = o.state || {};
    return [A.idx, ye({
      pathname: _,
      search: D,
      hash: L,
      state: A.usr || null,
      key: A.key || "default"
    })];
  }
  var l = null;
  function u() {
    if (l)
      y.call(l), l = null;
    else {
      var f = I.Pop, p = i(), _ = p[0], O = p[1];
      if (y.length)
        if (_ != null) {
          var D = d - _;
          D && (l = {
            action: f,
            location: O,
            retry: function() {
              U(D * -1);
            }
          }, U(D));
        } else
          process.env.NODE_ENV !== "production" && me(
            !1,
            // TODO: Write up a doc that explains our blocking strategy in
            // detail and link to it here so people can understand better
            // what is going on and how to avoid it.
            "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation."
          );
      else
        K(f);
    }
  }
  n.addEventListener(mt, u), n.addEventListener(ir, function() {
    var f = i(), p = f[1];
    ae(p) !== ae(E) && u();
  });
  var h = I.Pop, m = i(), d = m[0], E = m[1], x = be(), y = be();
  d == null && (d = 0, o.replaceState(oe({}, o.state, {
    idx: d
  }), ""));
  function w() {
    var f = document.querySelector("base"), p = "";
    if (f && f.getAttribute("href")) {
      var _ = n.location.href, O = _.indexOf("#");
      p = O === -1 ? _ : _.slice(0, O);
    }
    return p;
  }
  function V(f) {
    return w() + "#" + (typeof f == "string" ? f : ae(f));
  }
  function M(f, p) {
    return p === void 0 && (p = null), ye(oe({
      pathname: E.pathname,
      hash: "",
      search: ""
    }, typeof f == "string" ? J(f) : f, {
      state: p,
      key: yt()
    }));
  }
  function $(f, p) {
    return [{
      usr: f.state,
      key: f.key,
      idx: p
    }, V(f)];
  }
  function S(f, p, _) {
    return !y.length || (y.call({
      action: f,
      location: p,
      retry: _
    }), !1);
  }
  function K(f) {
    h = f;
    var p = i();
    d = p[0], E = p[1], x.call({
      action: h,
      location: E
    });
  }
  function Z(f, p) {
    var _ = I.Push, O = M(f, p);
    function D() {
      Z(f, p);
    }
    if (process.env.NODE_ENV !== "production" && me(O.pathname.charAt(0) === "/", "Relative pathnames are not supported in hash history.push(" + JSON.stringify(f) + ")"), S(_, O, D)) {
      var T = $(O, d + 1), L = T[0], A = T[1];
      try {
        o.pushState(L, "", A);
      } catch {
        n.location.assign(A);
      }
      K(_);
    }
  }
  function Y(f, p) {
    var _ = I.Replace, O = M(f, p);
    function D() {
      Y(f, p);
    }
    if (process.env.NODE_ENV !== "production" && me(O.pathname.charAt(0) === "/", "Relative pathnames are not supported in hash history.replace(" + JSON.stringify(f) + ")"), S(_, O, D)) {
      var T = $(O, d), L = T[0], A = T[1];
      o.replaceState(L, "", A), K(_);
    }
  }
  function U(f) {
    o.go(f);
  }
  var g = {
    get action() {
      return h;
    },
    get location() {
      return E;
    },
    createHref: V,
    push: Z,
    replace: Y,
    go: U,
    back: function() {
      U(-1);
    },
    forward: function() {
      U(1);
    },
    listen: function(p) {
      return x.push(p);
    },
    block: function(p) {
      var _ = y.push(p);
      return y.length === 1 && n.addEventListener(ge, Ee), function() {
        _(), y.length || n.removeEventListener(ge, Ee);
      };
    }
  };
  return g;
}
function Ee(e) {
  e.preventDefault(), e.returnValue = "";
}
function be() {
  var e = [];
  return {
    get length() {
      return e.length;
    },
    push: function(a) {
      return e.push(a), function() {
        e = e.filter(function(n) {
          return n !== a;
        });
      };
    },
    call: function(a) {
      e.forEach(function(n) {
        return n && n(a);
      });
    }
  };
}
function yt() {
  return Math.random().toString(36).substr(2, 8);
}
function ae(e) {
  var r = e.pathname, a = r === void 0 ? "/" : r, n = e.search, o = n === void 0 ? "" : n, i = e.hash, l = i === void 0 ? "" : i;
  return o && o !== "?" && (a += o.charAt(0) === "?" ? o : "?" + o), l && l !== "#" && (a += l.charAt(0) === "#" ? l : "#" + l), a;
}
function J(e) {
  var r = {};
  if (e) {
    var a = e.indexOf("#");
    a >= 0 && (r.hash = e.substr(a), e = e.substr(0, a));
    var n = e.indexOf("?");
    n >= 0 && (r.search = e.substr(n), e = e.substr(0, n)), e && (r.pathname = e);
  }
  return r;
}
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const ce = /* @__PURE__ */ ue(null);
process.env.NODE_ENV !== "production" && (ce.displayName = "Navigation");
const Pe = /* @__PURE__ */ ue(null);
process.env.NODE_ENV !== "production" && (Pe.displayName = "Location");
const ee = /* @__PURE__ */ ue({
  outlet: null,
  matches: []
});
process.env.NODE_ENV !== "production" && (ee.displayName = "Route");
function j(e, r) {
  if (!e)
    throw new Error(r);
}
function G(e, r) {
  if (!e) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
const lt = {};
function ur(e, r, a) {
  !r && !lt[e] && (lt[e] = !0, process.env.NODE_ENV !== "production" && G(!1, a));
}
function gt(e, r, a) {
  a === void 0 && (a = "/");
  let n = typeof r == "string" ? J(r) : r, o = wt(n.pathname || "/", a);
  if (o == null)
    return null;
  let i = Et(e);
  cr(i);
  let l = null;
  for (let u = 0; l == null && u < i.length; ++u)
    l = Er(i[u], o);
  return l;
}
function Et(e, r, a, n) {
  return r === void 0 && (r = []), a === void 0 && (a = []), n === void 0 && (n = ""), e.forEach((o, i) => {
    let l = {
      relativePath: o.path || "",
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o
    };
    l.relativePath.startsWith("/") && (l.relativePath.startsWith(n) || (process.env.NODE_ENV !== "production" ? j(!1, 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.") : j(!1)), l.relativePath = l.relativePath.slice(n.length));
    let u = q([n, l.relativePath]), h = a.concat(l);
    o.children && o.children.length > 0 && (o.index === !0 && (process.env.NODE_ENV !== "production" ? j(!1, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')) : j(!1)), Et(o.children, r, h, u)), !(o.path == null && !o.index) && r.push({
      path: u,
      score: yr(u, o.index),
      routesMeta: h
    });
  }), r;
}
function cr(e) {
  e.sort((r, a) => r.score !== a.score ? a.score - r.score : gr(r.routesMeta.map((n) => n.childrenIndex), a.routesMeta.map((n) => n.childrenIndex)));
}
const fr = /^:\w+$/, hr = 3, dr = 2, pr = 1, vr = 10, mr = -2, ut = (e) => e === "*";
function yr(e, r) {
  let a = e.split("/"), n = a.length;
  return a.some(ut) && (n += mr), r && (n += dr), a.filter((o) => !ut(o)).reduce((o, i) => o + (fr.test(i) ? hr : i === "" ? pr : vr), n);
}
function gr(e, r) {
  return e.length === r.length && e.slice(0, -1).every((n, o) => n === r[o]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - r[r.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Er(e, r) {
  let {
    routesMeta: a
  } = e, n = {}, o = "/", i = [];
  for (let l = 0; l < a.length; ++l) {
    let u = a[l], h = l === a.length - 1, m = o === "/" ? r : r.slice(o.length) || "/", d = bt({
      path: u.relativePath,
      caseSensitive: u.caseSensitive,
      end: h
    }, m);
    if (!d)
      return null;
    Object.assign(n, d.params);
    let E = u.route;
    i.push({
      params: n,
      pathname: q([o, d.pathname]),
      pathnameBase: Pt(q([o, d.pathnameBase])),
      route: E
    }), d.pathnameBase !== "/" && (o = q([o, d.pathnameBase]));
  }
  return i;
}
function bt(e, r) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [a, n] = br(e.path, e.caseSensitive, e.end), o = r.match(a);
  if (!o)
    return null;
  let i = o[0], l = i.replace(/(.)\/+$/, "$1"), u = o.slice(1);
  return {
    params: n.reduce((m, d, E) => {
      if (d === "*") {
        let x = u[E] || "";
        l = i.slice(0, i.length - x.length).replace(/(.)\/+$/, "$1");
      }
      return m[d] = Rr(u[E] || "", d), m;
    }, {}),
    pathname: i,
    pathnameBase: l,
    pattern: e
  };
}
function br(e, r, a) {
  r === void 0 && (r = !1), a === void 0 && (a = !0), process.env.NODE_ENV !== "production" && G(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let n = [], o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (l, u) => (n.push(u), "([^\\/]+)"));
  return e.endsWith("*") ? (n.push("*"), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o += a ? "\\/*$" : (
    // Otherwise, match a word boundary or a proceeding /. The word boundary restricts
    // parent routes to matching only their own words and nothing more, e.g. parent
    // route "/home" should not match "/home2".
    // Additionally, allow paths starting with `.`, `-`, `~`, and url-encoded entities,
    // but do not consume the character in the matched path so they can match against
    // nested paths.
    "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)"
  ), [new RegExp(o, r ? void 0 : "i"), n];
}
function Rr(e, r) {
  try {
    return decodeURIComponent(e);
  } catch (a) {
    return process.env.NODE_ENV !== "production" && G(!1, 'The value for the URL param "' + r + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + a + ").")), e;
  }
}
function wr(e, r) {
  r === void 0 && (r = "/");
  let {
    pathname: a,
    search: n = "",
    hash: o = ""
  } = typeof e == "string" ? J(e) : e;
  return {
    pathname: a ? a.startsWith("/") ? a : Pr(a, r) : r,
    search: Or(n),
    hash: Nr(o)
  };
}
function Pr(e, r) {
  let a = r.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((o) => {
    o === ".." ? a.length > 1 && a.pop() : o !== "." && a.push(o);
  }), a.length > 1 ? a.join("/") : "/";
}
function Rt(e, r, a) {
  let n = typeof e == "string" ? J(e) : e, o = e === "" || n.pathname === "" ? "/" : n.pathname, i;
  if (o == null)
    i = a;
  else {
    let u = r.length - 1;
    if (o.startsWith("..")) {
      let h = o.split("/");
      for (; h[0] === ".."; )
        h.shift(), u -= 1;
      n.pathname = h.join("/");
    }
    i = u >= 0 ? r[u] : "/";
  }
  let l = wr(n, i);
  return o && o !== "/" && o.endsWith("/") && !l.pathname.endsWith("/") && (l.pathname += "/"), l;
}
function _r(e) {
  return e === "" || e.pathname === "" ? "/" : typeof e == "string" ? J(e).pathname : e.pathname;
}
function wt(e, r) {
  if (r === "/")
    return e;
  if (!e.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let a = e.charAt(r.length);
  return a && a !== "/" ? null : e.slice(r.length) || "/";
}
const q = (e) => e.join("/").replace(/\/\/+/g, "/"), Pt = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Or = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Nr = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function xr(e) {
  te() || (process.env.NODE_ENV !== "production" ? j(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : j(!1));
  let {
    basename: r,
    navigator: a
  } = B(ce), {
    hash: n,
    pathname: o,
    search: i
  } = We(e), l = o;
  if (r !== "/") {
    let u = _r(e), h = u != null && u.endsWith("/");
    l = o === "/" ? r + (h ? "/" : "") : q([r, o]);
  }
  return a.createHref({
    pathname: l,
    search: i,
    hash: n
  });
}
function te() {
  return B(Pe) != null;
}
function X() {
  return te() || (process.env.NODE_ENV !== "production" ? j(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : j(!1)), B(Pe).location;
}
function Ir(e) {
  te() || (process.env.NODE_ENV !== "production" ? j(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useMatch() may be used only in the context of a <Router> component."
  ) : j(!1));
  let {
    pathname: r
  } = X();
  return Q(() => bt(e, r), [r, e]);
}
function Ae() {
  te() || (process.env.NODE_ENV !== "production" ? j(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : j(!1));
  let {
    basename: e,
    navigator: r
  } = B(ce), {
    matches: a
  } = B(ee), {
    pathname: n
  } = X(), o = JSON.stringify(a.map((u) => u.pathnameBase)), i = we(!1);
  return ht(() => {
    i.current = !0;
  }), $e(function(u, h) {
    if (h === void 0 && (h = {}), process.env.NODE_ENV !== "production" && G(i.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered."), !i.current)
      return;
    if (typeof u == "number") {
      r.go(u);
      return;
    }
    let m = Rt(u, JSON.parse(o), n);
    e !== "/" && (m.pathname = q([e, m.pathname])), (h.replace ? r.replace : r.push)(m, h.state);
  }, [e, r, o, n]);
}
const Sr = /* @__PURE__ */ ue(null);
function Tr(e) {
  let r = B(ee).outlet;
  return r && /* @__PURE__ */ z(Sr.Provider, {
    value: e
  }, r);
}
function Br() {
  let {
    matches: e
  } = B(ee), r = e[e.length - 1];
  return r ? r.params : {};
}
function We(e) {
  let {
    matches: r
  } = B(ee), {
    pathname: a
  } = X(), n = JSON.stringify(r.map((o) => o.pathnameBase));
  return Q(() => Rt(e, JSON.parse(n), a), [e, n, a]);
}
function Yr(e, r) {
  te() || (process.env.NODE_ENV !== "production" ? j(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : j(!1));
  let {
    matches: a
  } = B(ee), n = a[a.length - 1], o = n ? n.params : {}, i = n ? n.pathname : "/", l = n ? n.pathnameBase : "/", u = n && n.route;
  if (process.env.NODE_ENV !== "production") {
    let w = u && u.path || "";
    ur(i, !u || w.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + i + '" (under <Route path="' + w + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + w + '"> to <Route ') + ('path="' + (w === "/" ? "*" : w + "/*") + '">.'));
  }
  let h = X(), m;
  if (r) {
    var d;
    let w = typeof r == "string" ? J(r) : r;
    l === "/" || (d = w.pathname) != null && d.startsWith(l) || (process.env.NODE_ENV !== "production" ? j(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + l + '" ') + ('but pathname "' + w.pathname + '" was given in the `location` prop.')) : j(!1)), m = w;
  } else
    m = h;
  let E = m.pathname || "/", x = l === "/" ? E : E.slice(l.length) || "/", y = gt(e, {
    pathname: x
  });
  return process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && G(u || y != null, 'No routes matched location "' + m.pathname + m.search + m.hash + '" '), process.env.NODE_ENV !== "production" && G(y == null || y[y.length - 1].route.element !== void 0, 'Matched leaf route at location "' + m.pathname + m.search + m.hash + '" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.')), Cr(y && y.map((w) => Object.assign({}, w, {
    params: Object.assign({}, o, w.params),
    pathname: q([l, w.pathname]),
    pathnameBase: w.pathnameBase === "/" ? l : q([l, w.pathnameBase])
  })), a);
}
function Cr(e, r) {
  return r === void 0 && (r = []), e == null ? null : e.reduceRight((a, n, o) => /* @__PURE__ */ z(ee.Provider, {
    children: n.route.element !== void 0 ? n.route.element : a,
    value: {
      outlet: a,
      matches: r.concat(e.slice(0, o + 1))
    }
  }), null);
}
function ct(e) {
  let {
    to: r,
    replace: a,
    state: n
  } = e;
  te() || (process.env.NODE_ENV !== "production" ? j(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  ) : j(!1)), process.env.NODE_ENV !== "production" && G(!B(ce).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
  let o = Ae();
  return ht(() => {
    o(r, {
      replace: a,
      state: n
    });
  }), null;
}
function Mr(e) {
  return Tr(e.context);
}
function _t(e) {
  let {
    basename: r = "/",
    children: a = null,
    location: n,
    navigationType: o = I.Pop,
    navigator: i,
    static: l = !1
  } = e;
  te() && (process.env.NODE_ENV !== "production" ? j(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : j(!1));
  let u = Pt(r), h = Q(() => ({
    basename: u,
    navigator: i,
    static: l
  }), [u, i, l]);
  typeof n == "string" && (n = J(n));
  let {
    pathname: m = "/",
    search: d = "",
    hash: E = "",
    state: x = null,
    key: y = "default"
  } = n, w = Q(() => {
    let V = wt(m, u);
    return V == null ? null : {
      pathname: V,
      search: d,
      hash: E,
      state: x,
      key: y
    };
  }, [u, m, d, E, x, y]);
  return process.env.NODE_ENV !== "production" && G(w != null, '<Router basename="' + u + '"> is not able to match the URL ' + ('"' + m + d + E + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), w == null ? null : /* @__PURE__ */ z(ce.Provider, {
    value: h
  }, /* @__PURE__ */ z(Pe.Provider, {
    children: a,
    value: {
      location: w,
      navigationType: o
    }
  }));
}
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Re() {
  return Re = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var a = arguments[r];
      for (var n in a)
        Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }
    return e;
  }, Re.apply(this, arguments);
}
function Ot(e, r) {
  if (e == null)
    return {};
  var a = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(r.indexOf(o) >= 0) && (a[o] = e[o]);
  return a;
}
const kr = ["onClick", "reloadDocument", "replace", "state", "target", "to"], jr = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
function Dr(e, r) {
  if (!e) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function Ur(e) {
  let {
    basename: r,
    children: a,
    window: n
  } = e, o = we();
  o.current == null && (o.current = sr({
    window: n
  }));
  let i = o.current, [l, u] = dt({
    action: i.action,
    location: i.location
  });
  return pt(() => i.listen(u), [i]), /* @__PURE__ */ z(_t, {
    basename: r,
    children: a,
    location: l.location,
    navigationType: l.action,
    navigator: i
  });
}
function Hr(e) {
  let {
    basename: r,
    children: a,
    window: n
  } = e, o = we();
  o.current == null && (o.current = lr({
    window: n
  }));
  let i = o.current, [l, u] = dt({
    action: i.action,
    location: i.location
  });
  return pt(() => i.listen(u), [i]), /* @__PURE__ */ z(_t, {
    basename: r,
    children: a,
    location: l.location,
    navigationType: l.action,
    navigator: i
  });
}
process.env.NODE_ENV;
function Lr(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
const Nt = /* @__PURE__ */ vt(function(r, a) {
  let {
    onClick: n,
    reloadDocument: o,
    replace: i = !1,
    state: l,
    target: u,
    to: h
  } = r, m = Ot(r, kr), d = xr(h), E = $r(h, {
    replace: i,
    state: l,
    target: u
  });
  function x(y) {
    n && n(y), !y.defaultPrevented && !o && E(y);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ z("a", Re({}, m, {
      href: d,
      onClick: x,
      ref: a,
      target: u
    }))
  );
});
process.env.NODE_ENV !== "production" && (Nt.displayName = "Link");
const Vr = /* @__PURE__ */ vt(function(r, a) {
  let {
    "aria-current": n = "page",
    caseSensitive: o = !1,
    className: i = "",
    end: l = !1,
    style: u,
    to: h,
    children: m
  } = r, d = Ot(r, jr), E = X(), x = We(h), y = E.pathname, w = x.pathname;
  o || (y = y.toLowerCase(), w = w.toLowerCase());
  let V = y === w || !l && y.startsWith(w) && y.charAt(w.length) === "/", M = V ? n : void 0, $;
  typeof i == "function" ? $ = i({
    isActive: V
  }) : $ = [i, V ? "active" : null].filter(Boolean).join(" ");
  let S = typeof u == "function" ? u({
    isActive: V
  }) : u;
  return /* @__PURE__ */ z(Nt, Re({}, d, {
    "aria-current": M,
    className: $,
    ref: a,
    style: S,
    to: h
  }), typeof m == "function" ? m({
    isActive: V
  }) : m);
});
process.env.NODE_ENV !== "production" && (Vr.displayName = "NavLink");
function $r(e, r) {
  let {
    target: a,
    replace: n,
    state: o
  } = r === void 0 ? {} : r, i = Ae(), l = X(), u = We(e);
  return $e((h) => {
    if (h.button === 0 && // Ignore everything but left clicks
    (!a || a === "_self") && // Let browser handle "target=_blank" etc.
    !Lr(h)) {
      h.preventDefault();
      let m = !!n || ae(l) === ae(u);
      i(e, {
        replace: m,
        state: o
      });
    }
  }, [l, i, u, n, o, a, e]);
}
function Jr(e) {
  process.env.NODE_ENV !== "production" && Dr(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params\n\nIf you're unsure how to load polyfills, we recommend you check out https://polyfill.io/v3/ which provides some recommendations about how to load polyfills only for users that need them, instead of for every user.");
  let r = we(Le(e)), a = X(), n = Q(() => {
    let l = Le(a.search);
    for (let u of r.current.keys())
      l.has(u) || r.current.getAll(u).forEach((h) => {
        l.append(u, h);
      });
    return l;
  }, [a.search]), o = Ae(), i = $e((l, u) => {
    o("?" + Le(l), u);
  }, [o]);
  return [n, i];
}
function Le(e) {
  return e === void 0 && (e = ""), new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((r, a) => {
    let n = e[a];
    return r.concat(Array.isArray(n) ? n.map((o) => [a, o]) : [[a, n]]);
  }, []));
}
const xt = ue(null);
function St() {
  return B(xt);
}
function Kr({
  children: e,
  routes: r = [],
  isLogin: a = !1,
  loginPath: n = "/login",
  redirctPath: o = "/",
  callback: i
}) {
  if (i && typeof i == "function")
    i();
  else {
    const l = X(), u = Q(
      () => gt(r, l),
      [r, l]
    ), h = Q(() => u == null ? void 0 : u.some((m) => {
      const d = m.route;
      return d.meta ? d.meta.auth : !1;
    }), [u]);
    if (h && !a)
      return /* @__PURE__ */ De(ct, { to: n, state: { form: l.pathname }, replace: !0 });
    if (!h && a && l.pathname === n)
      return /* @__PURE__ */ De(ct, { to: o, replace: !0 });
  }
  return /* @__PURE__ */ De(xt.Provider, { value: r, children: e });
}
const Tt = (e, r = /* @__PURE__ */ new WeakMap()) => {
  let a = Ar(e);
  if (Wr(a))
    switch (a) {
      case "date":
        return new Date(e);
      case "regexp":
        return new RegExp(e, e.flags);
      case "function":
        return new Function(e, e.flags);
      default:
        let n = Array.isArray(e) ? [] : {};
        if (r.has(e))
          return r.get(e);
        r.set(e, n);
        for (let o in e)
          e.hasOwnProperty(o) && (n[o] = Tt(e[o], r));
        return n;
    }
  else
    return e;
};
function Ar(e) {
  return Object.prototype.toString.call(e).match(/\[object (.*?)\]/)[1].toLowerCase();
}
function Wr(e) {
  return (typeof e == "object" || typeof e == "function") && e !== null;
}
const qr = (e, r, a) => Ct(e, r).concat(a);
function Ct(e, r) {
  return Tt(e).filter((o) => {
    var i, l;
    return o.children && (o.children = Ct(o.children, r)), (l = (i = o.meta) == null ? void 0 : i.roles) == null ? void 0 : l.includes(r);
  });
}
function zr(e, r) {
  const a = St() ?? [], n = arguments.length;
  if (n === 0 || n > 2)
    return;
  const o = arguments[0];
  if (typeof e == "string") {
    if (typeof o != "string")
      return console.error("当添加嵌套路由时,name必须为字符串");
    const i = a.find((l) => l.name === o);
    if (!i)
      return;
    i.children || (i.children = []), i.children.push(r);
  } else {
    const { name: i } = e, l = a.findIndex((u) => u.name === i);
    l === 1 && a.splice(l, 1), a.push(o);
  }
}
const Gr = (e) => {
  let r = St() ?? [];
  kt(r, [], e), console.log(r);
};
function kt(e, r, a) {
  e.map((n) => {
    if (n.children) {
      const o = n.path;
      a && n.children.forEach((i) => {
        i.path = `${o}/${i.path}`;
      }), kt(n.children, r);
    }
    r.push(n);
  });
}
export {
  Ur as BrowserRouter,
  Hr as HashRouter,
  Nt as Link,
  Vr as NavLink,
  ct as Navigate,
  Mr as Outlet,
  Kr as Permissions,
  zr as addRoute,
  qr as compRoutes,
  Gr as getRoutes,
  bt as matchPath,
  gt as matchRoutes,
  xr as useHref,
  X as useLocation,
  Ir as useMatch,
  Ae as useNavigate,
  Tr as useOutlet,
  Br as useParams,
  Yr as useRoutes,
  Jr as useSearchParams
};
