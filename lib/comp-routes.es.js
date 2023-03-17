import pt, { useContext as I, useMemo as Q, useRef as we, useEffect as $e, useCallback as Ae, createElement as z, createContext as ue, useState as We, useLayoutEffect as vt, forwardRef as mt } from "react";
var Ve = {}, rr = {
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
var ut;
function nr() {
  if (ut)
    return se;
  ut = 1;
  var e = pt, r = Symbol.for("react.element"), a = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, h, v) {
    var d, g = {}, x = null, y = null;
    v !== void 0 && (x = "" + v), h.key !== void 0 && (x = "" + h.key), h.ref !== void 0 && (y = h.ref);
    for (d in h)
      n.call(h, d) && !s.hasOwnProperty(d) && (g[d] = h[d]);
    if (u && u.defaultProps)
      for (d in h = u.defaultProps, h)
        g[d] === void 0 && (g[d] = h[d]);
    return { $$typeof: r, type: u, key: x, ref: y, props: g, _owner: o.current };
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
var ct;
function ar() {
  return ct || (ct = 1, process.env.NODE_ENV !== "production" && function() {
    var e = pt, r = Symbol.for("react.element"), a = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), w = Symbol.iterator, V = "@@iterator";
    function M(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = w && t[w] || t[V];
      return typeof i == "function" ? i : null;
    }
    var $ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(t) {
      {
        for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), m = 1; m < i; m++)
          c[m - 1] = arguments[m];
        K("error", t, c);
      }
    }
    function K(t, i, c) {
      {
        var m = $.ReactDebugCurrentFrame, P = m.getStackAddendum();
        P !== "" && (i += "%s", c = c.concat([P]));
        var N = c.map(function(R) {
          return String(R);
        });
        N.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, N);
      }
    }
    var Z = !1, Y = !1, U = !1, E = !1, f = !1, p;
    p = Symbol.for("react.module.reference");
    function _(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === n || t === s || f || t === o || t === v || t === d || E || t === y || Z || Y || U || typeof t == "object" && t !== null && (t.$$typeof === x || t.$$typeof === g || t.$$typeof === l || t.$$typeof === u || t.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === p || t.getModuleId !== void 0));
    }
    function O(t, i, c) {
      var m = t.displayName;
      if (m)
        return m;
      var P = i.displayName || i.name || "";
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
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case v:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case u:
            var i = t;
            return D(i) + ".Consumer";
          case l:
            var c = t;
            return D(c._context) + ".Provider";
          case h:
            return O(t, t.render, "ForwardRef");
          case g:
            var m = t.displayName || null;
            return m !== null ? m : T(t.type) || "Memo";
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
    var L = Object.assign, A = 0, _e, Ye, Me, Ue, He, Je, Ke;
    function qe() {
    }
    qe.__reactDisabledLog = !0;
    function kt() {
      {
        if (A === 0) {
          _e = console.log, Ye = console.info, Me = console.warn, Ue = console.error, He = console.group, Je = console.groupCollapsed, Ke = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: qe,
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
    function jt() {
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
              value: Ye
            }),
            warn: L({}, t, {
              value: Me
            }),
            error: L({}, t, {
              value: Ue
            }),
            group: L({}, t, {
              value: He
            }),
            groupCollapsed: L({}, t, {
              value: Je
            }),
            groupEnd: L({}, t, {
              value: Ke
            })
          });
        }
        A < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Oe = $.ReactCurrentDispatcher, xe;
    function fe(t, i, c) {
      {
        if (xe === void 0)
          try {
            throw Error();
          } catch (P) {
            var m = P.stack.trim().match(/\n( *(at )?)/);
            xe = m && m[1] || "";
          }
        return `
` + xe + t;
      }
    }
    var Ne = !1, he;
    {
      var Dt = typeof WeakMap == "function" ? WeakMap : Map;
      he = new Dt();
    }
    function ze(t, i) {
      if (!t || Ne)
        return "";
      {
        var c = he.get(t);
        if (c !== void 0)
          return c;
      }
      var m;
      Ne = !0;
      var P = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = Oe.current, Oe.current = null, kt();
      try {
        if (i) {
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
              m = H;
            }
            Reflect.construct(t, [], R);
          } else {
            try {
              R.call();
            } catch (H) {
              m = H;
            }
            t.call(R.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (H) {
            m = H;
          }
          t();
        }
      } catch (H) {
        if (H && m && typeof H.stack == "string") {
          for (var b = H.stack.split(`
`), W = m.stack.split(`
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
        Ne = !1, Oe.current = N, jt(), Error.prepareStackTrace = P;
      }
      var ne = t ? t.displayName || t.name : "", lt = ne ? fe(ne) : "";
      return typeof t == "function" && he.set(t, lt), lt;
    }
    function Lt(t, i, c) {
      return ze(t, !1);
    }
    function Vt(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function de(t, i, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return ze(t, Vt(t));
      if (typeof t == "string")
        return fe(t);
      switch (t) {
        case v:
          return fe("Suspense");
        case d:
          return fe("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case h:
            return Lt(t.render);
          case g:
            return de(t.type, i, c);
          case x: {
            var m = t, P = m._payload, N = m._init;
            try {
              return de(N(P), i, c);
            } catch {
            }
          }
        }
      return "";
    }
    var pe = Object.prototype.hasOwnProperty, Ge = {}, Xe = $.ReactDebugCurrentFrame;
    function ve(t) {
      if (t) {
        var i = t._owner, c = de(t.type, t._source, i ? i.type : null);
        Xe.setExtraStackFrame(c);
      } else
        Xe.setExtraStackFrame(null);
    }
    function $t(t, i, c, m, P) {
      {
        var N = Function.call.bind(pe);
        for (var R in t)
          if (N(t, R)) {
            var b = void 0;
            try {
              if (typeof t[R] != "function") {
                var W = Error((m || "React class") + ": " + c + " type `" + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[R] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw W.name = "Invariant Violation", W;
              }
              b = t[R](i, R, m, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              b = C;
            }
            b && !(b instanceof Error) && (ve(P), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", m || "React class", c, R, typeof b), ve(null)), b instanceof Error && !(b.message in Ge) && (Ge[b.message] = !0, ve(P), S("Failed %s type: %s", c, b.message), ve(null));
          }
      }
    }
    var At = Array.isArray;
    function Se(t) {
      return At(t);
    }
    function Wt(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, c = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function Ft(t) {
      try {
        return Ze(t), !1;
      } catch {
        return !0;
      }
    }
    function Ze(t) {
      return "" + t;
    }
    function Qe(t) {
      if (Ft(t))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Wt(t)), Ze(t);
    }
    var ie = $.ReactCurrentOwner, It = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, et, tt, Te;
    Te = {};
    function Bt(t) {
      if (pe.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Yt(t) {
      if (pe.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Mt(t, i) {
      if (typeof t.ref == "string" && ie.current && i && ie.current.stateNode !== i) {
        var c = T(ie.current.type);
        Te[c] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(ie.current.type), t.ref), Te[c] = !0);
      }
    }
    function Ut(t, i) {
      {
        var c = function() {
          et || (et = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function Ht(t, i) {
      {
        var c = function() {
          tt || (tt = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Jt = function(t, i, c, m, P, N, R) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: i,
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
        value: m
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function Kt(t, i, c, m, P) {
      {
        var N, R = {}, b = null, W = null;
        c !== void 0 && (Qe(c), b = "" + c), Yt(i) && (Qe(i.key), b = "" + i.key), Bt(i) && (W = i.ref, Mt(i, P));
        for (N in i)
          pe.call(i, N) && !It.hasOwnProperty(N) && (R[N] = i[N]);
        if (t && t.defaultProps) {
          var C = t.defaultProps;
          for (N in C)
            R[N] === void 0 && (R[N] = C[N]);
        }
        if (b || W) {
          var k = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          b && Ut(R, k), W && Ht(R, k);
        }
        return Jt(t, b, W, P, m, ie.current, R);
      }
    }
    var Ce = $.ReactCurrentOwner, rt = $.ReactDebugCurrentFrame;
    function re(t) {
      if (t) {
        var i = t._owner, c = de(t.type, t._source, i ? i.type : null);
        rt.setExtraStackFrame(c);
      } else
        rt.setExtraStackFrame(null);
    }
    var ke;
    ke = !1;
    function je(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function nt() {
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
    function qt(t) {
      {
        if (t !== void 0) {
          var i = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
          return `

Check your code at ` + i + ":" + c + ".";
        }
        return "";
      }
    }
    var at = {};
    function zt(t) {
      {
        var i = nt();
        if (!i) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (i = `

Check the top-level render call using <` + c + ">.");
        }
        return i;
      }
    }
    function ot(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = zt(i);
        if (at[c])
          return;
        at[c] = !0;
        var m = "";
        t && t._owner && t._owner !== Ce.current && (m = " It was passed a child from " + T(t._owner.type) + "."), re(t), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, m), re(null);
      }
    }
    function it(t, i) {
      {
        if (typeof t != "object")
          return;
        if (Se(t))
          for (var c = 0; c < t.length; c++) {
            var m = t[c];
            je(m) && ot(m, i);
          }
        else if (je(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var P = M(t);
          if (typeof P == "function" && P !== t.entries)
            for (var N = P.call(t), R; !(R = N.next()).done; )
              je(R.value) && ot(R.value, i);
        }
      }
    }
    function Gt(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var c;
        if (typeof i == "function")
          c = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === g))
          c = i.propTypes;
        else
          return;
        if (c) {
          var m = T(i);
          $t(c, t.props, "prop", m, t);
        } else if (i.PropTypes !== void 0 && !ke) {
          ke = !0;
          var P = T(i);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", P || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xt(t) {
      {
        for (var i = Object.keys(t.props), c = 0; c < i.length; c++) {
          var m = i[c];
          if (m !== "children" && m !== "key") {
            re(t), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", m), re(null);
            break;
          }
        }
        t.ref !== null && (re(t), S("Invalid attribute `ref` supplied to `React.Fragment`."), re(null));
      }
    }
    function st(t, i, c, m, P, N) {
      {
        var R = _(t);
        if (!R) {
          var b = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var W = qt(P);
          W ? b += W : b += nt();
          var C;
          t === null ? C = "null" : Se(t) ? C = "array" : t !== void 0 && t.$$typeof === r ? (C = "<" + (T(t.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : C = typeof t, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C, b);
        }
        var k = Kt(t, i, c, P, N);
        if (k == null)
          return k;
        if (R) {
          var F = i.children;
          if (F !== void 0)
            if (m)
              if (Se(F)) {
                for (var ne = 0; ne < F.length; ne++)
                  it(F[ne], t);
                Object.freeze && Object.freeze(F);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              it(F, t);
        }
        return t === n ? Xt(k) : Gt(k), k;
      }
    }
    function Zt(t, i, c) {
      return st(t, i, c, !0);
    }
    function Qt(t, i, c) {
      return st(t, i, c, !1);
    }
    var er = Qt, tr = Zt;
    le.Fragment = n, le.jsx = er, le.jsxs = tr;
  }()), le;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = nr() : e.exports = ar();
})(rr);
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
var B;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(B || (B = {}));
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
var ge = "beforeunload", or = "hashchange", yt = "popstate";
function ir(e) {
  e === void 0 && (e = {});
  var r = e, a = r.window, n = a === void 0 ? document.defaultView : a, o = n.history;
  function s() {
    var E = n.location, f = E.pathname, p = E.search, _ = E.hash, O = o.state || {};
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
      var E = B.Pop, f = s(), p = f[0], _ = f[1];
      if (y.length)
        if (p != null) {
          var O = d - p;
          O && (l = {
            action: E,
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
        S(E);
    }
  }
  n.addEventListener(yt, u);
  var h = B.Pop, v = s(), d = v[0], g = v[1], x = be(), y = be();
  d == null && (d = 0, o.replaceState(oe({}, o.state, {
    idx: d
  }), ""));
  function w(E) {
    return typeof E == "string" ? E : ae(E);
  }
  function V(E, f) {
    return f === void 0 && (f = null), ye(oe({
      pathname: g.pathname,
      hash: "",
      search: ""
    }, typeof E == "string" ? J(E) : E, {
      state: f,
      key: gt()
    }));
  }
  function M(E, f) {
    return [{
      usr: E.state,
      key: E.key,
      idx: f
    }, w(E)];
  }
  function $(E, f, p) {
    return !y.length || (y.call({
      action: E,
      location: f,
      retry: p
    }), !1);
  }
  function S(E) {
    h = E;
    var f = s();
    d = f[0], g = f[1], x.call({
      action: h,
      location: g
    });
  }
  function K(E, f) {
    var p = B.Push, _ = V(E, f);
    function O() {
      K(E, f);
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
  function Z(E, f) {
    var p = B.Replace, _ = V(E, f);
    function O() {
      Z(E, f);
    }
    if ($(p, _, O)) {
      var D = M(_, d), T = D[0], L = D[1];
      o.replaceState(T, "", L), S(p);
    }
  }
  function Y(E) {
    o.go(E);
  }
  var U = {
    get action() {
      return h;
    },
    get location() {
      return g;
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
function sr(e) {
  e === void 0 && (e = {});
  var r = e, a = r.window, n = a === void 0 ? document.defaultView : a, o = n.history;
  function s() {
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
      var f = B.Pop, p = s(), _ = p[0], O = p[1];
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
  n.addEventListener(yt, u), n.addEventListener(or, function() {
    var f = s(), p = f[1];
    ae(p) !== ae(g) && u();
  });
  var h = B.Pop, v = s(), d = v[0], g = v[1], x = be(), y = be();
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
      pathname: g.pathname,
      hash: "",
      search: ""
    }, typeof f == "string" ? J(f) : f, {
      state: p,
      key: gt()
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
    var p = s();
    d = p[0], g = p[1], x.call({
      action: h,
      location: g
    });
  }
  function Z(f, p) {
    var _ = B.Push, O = M(f, p);
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
    var _ = B.Replace, O = M(f, p);
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
  var E = {
    get action() {
      return h;
    },
    get location() {
      return g;
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
  return E;
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
function gt() {
  return Math.random().toString(36).substr(2, 8);
}
function ae(e) {
  var r = e.pathname, a = r === void 0 ? "/" : r, n = e.search, o = n === void 0 ? "" : n, s = e.hash, l = s === void 0 ? "" : s;
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
const ft = {};
function lr(e, r, a) {
  !r && !ft[e] && (ft[e] = !0, process.env.NODE_ENV !== "production" && G(!1, a));
}
function Et(e, r, a) {
  a === void 0 && (a = "/");
  let n = typeof r == "string" ? J(r) : r, o = Pt(n.pathname || "/", a);
  if (o == null)
    return null;
  let s = bt(e);
  ur(s);
  let l = null;
  for (let u = 0; l == null && u < s.length; ++u)
    l = gr(s[u], o);
  return l;
}
function bt(e, r, a, n) {
  return r === void 0 && (r = []), a === void 0 && (a = []), n === void 0 && (n = ""), e.forEach((o, s) => {
    let l = {
      relativePath: o.path || "",
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o
    };
    l.relativePath.startsWith("/") && (l.relativePath.startsWith(n) || (process.env.NODE_ENV !== "production" ? j(!1, 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.") : j(!1)), l.relativePath = l.relativePath.slice(n.length));
    let u = q([n, l.relativePath]), h = a.concat(l);
    o.children && o.children.length > 0 && (o.index === !0 && (process.env.NODE_ENV !== "production" ? j(!1, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + u + '".')) : j(!1)), bt(o.children, r, h, u)), !(o.path == null && !o.index) && r.push({
      path: u,
      score: mr(u, o.index),
      routesMeta: h
    });
  }), r;
}
function ur(e) {
  e.sort((r, a) => r.score !== a.score ? a.score - r.score : yr(r.routesMeta.map((n) => n.childrenIndex), a.routesMeta.map((n) => n.childrenIndex)));
}
const cr = /^:\w+$/, fr = 3, hr = 2, dr = 1, pr = 10, vr = -2, ht = (e) => e === "*";
function mr(e, r) {
  let a = e.split("/"), n = a.length;
  return a.some(ht) && (n += vr), r && (n += hr), a.filter((o) => !ht(o)).reduce((o, s) => o + (cr.test(s) ? fr : s === "" ? dr : pr), n);
}
function yr(e, r) {
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
function gr(e, r) {
  let {
    routesMeta: a
  } = e, n = {}, o = "/", s = [];
  for (let l = 0; l < a.length; ++l) {
    let u = a[l], h = l === a.length - 1, v = o === "/" ? r : r.slice(o.length) || "/", d = Rt({
      path: u.relativePath,
      caseSensitive: u.caseSensitive,
      end: h
    }, v);
    if (!d)
      return null;
    Object.assign(n, d.params);
    let g = u.route;
    s.push({
      params: n,
      pathname: q([o, d.pathname]),
      pathnameBase: _t(q([o, d.pathnameBase])),
      route: g
    }), d.pathnameBase !== "/" && (o = q([o, d.pathnameBase]));
  }
  return s;
}
function Rt(e, r) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [a, n] = Er(e.path, e.caseSensitive, e.end), o = r.match(a);
  if (!o)
    return null;
  let s = o[0], l = s.replace(/(.)\/+$/, "$1"), u = o.slice(1);
  return {
    params: n.reduce((v, d, g) => {
      if (d === "*") {
        let x = u[g] || "";
        l = s.slice(0, s.length - x.length).replace(/(.)\/+$/, "$1");
      }
      return v[d] = br(u[g] || "", d), v;
    }, {}),
    pathname: s,
    pathnameBase: l,
    pattern: e
  };
}
function Er(e, r, a) {
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
function br(e, r) {
  try {
    return decodeURIComponent(e);
  } catch (a) {
    return process.env.NODE_ENV !== "production" && G(!1, 'The value for the URL param "' + r + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + a + ").")), e;
  }
}
function Rr(e, r) {
  r === void 0 && (r = "/");
  let {
    pathname: a,
    search: n = "",
    hash: o = ""
  } = typeof e == "string" ? J(e) : e;
  return {
    pathname: a ? a.startsWith("/") ? a : wr(a, r) : r,
    search: _r(n),
    hash: Or(o)
  };
}
function wr(e, r) {
  let a = r.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((o) => {
    o === ".." ? a.length > 1 && a.pop() : o !== "." && a.push(o);
  }), a.length > 1 ? a.join("/") : "/";
}
function wt(e, r, a) {
  let n = typeof e == "string" ? J(e) : e, o = e === "" || n.pathname === "" ? "/" : n.pathname, s;
  if (o == null)
    s = a;
  else {
    let u = r.length - 1;
    if (o.startsWith("..")) {
      let h = o.split("/");
      for (; h[0] === ".."; )
        h.shift(), u -= 1;
      n.pathname = h.join("/");
    }
    s = u >= 0 ? r[u] : "/";
  }
  let l = Rr(n, s);
  return o && o !== "/" && o.endsWith("/") && !l.pathname.endsWith("/") && (l.pathname += "/"), l;
}
function Pr(e) {
  return e === "" || e.pathname === "" ? "/" : typeof e == "string" ? J(e).pathname : e.pathname;
}
function Pt(e, r) {
  if (r === "/")
    return e;
  if (!e.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let a = e.charAt(r.length);
  return a && a !== "/" ? null : e.slice(r.length) || "/";
}
const q = (e) => e.join("/").replace(/\/\/+/g, "/"), _t = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), _r = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Or = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
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
  } = I(ce), {
    hash: n,
    pathname: o,
    search: s
  } = Ie(e), l = o;
  if (r !== "/") {
    let u = Pr(e), h = u != null && u.endsWith("/");
    l = o === "/" ? r + (h ? "/" : "") : q([r, o]);
  }
  return a.createHref({
    pathname: l,
    search: s,
    hash: n
  });
}
function te() {
  return I(Pe) != null;
}
function X() {
  return te() || (process.env.NODE_ENV !== "production" ? j(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : j(!1)), I(Pe).location;
}
function Fr(e) {
  te() || (process.env.NODE_ENV !== "production" ? j(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useMatch() may be used only in the context of a <Router> component."
  ) : j(!1));
  let {
    pathname: r
  } = X();
  return Q(() => Rt(e, r), [r, e]);
}
function Fe() {
  te() || (process.env.NODE_ENV !== "production" ? j(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : j(!1));
  let {
    basename: e,
    navigator: r
  } = I(ce), {
    matches: a
  } = I(ee), {
    pathname: n
  } = X(), o = JSON.stringify(a.map((u) => u.pathnameBase)), s = we(!1);
  return $e(() => {
    s.current = !0;
  }), Ae(function(u, h) {
    if (h === void 0 && (h = {}), process.env.NODE_ENV !== "production" && G(s.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered."), !s.current)
      return;
    if (typeof u == "number") {
      r.go(u);
      return;
    }
    let v = wt(u, JSON.parse(o), n);
    e !== "/" && (v.pathname = q([e, v.pathname])), (h.replace ? r.replace : r.push)(v, h.state);
  }, [e, r, o, n]);
}
const Nr = /* @__PURE__ */ ue(null);
function Sr(e) {
  let r = I(ee).outlet;
  return r && /* @__PURE__ */ z(Nr.Provider, {
    value: e
  }, r);
}
function Ir() {
  let {
    matches: e
  } = I(ee), r = e[e.length - 1];
  return r ? r.params : {};
}
function Ie(e) {
  let {
    matches: r
  } = I(ee), {
    pathname: a
  } = X(), n = JSON.stringify(r.map((o) => o.pathnameBase));
  return Q(() => wt(e, JSON.parse(n), a), [e, n, a]);
}
function Br(e, r) {
  te() || (process.env.NODE_ENV !== "production" ? j(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : j(!1));
  let {
    matches: a
  } = I(ee), n = a[a.length - 1], o = n ? n.params : {}, s = n ? n.pathname : "/", l = n ? n.pathnameBase : "/", u = n && n.route;
  if (process.env.NODE_ENV !== "production") {
    let w = u && u.path || "";
    lr(s, !u || w.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + s + '" (under <Route path="' + w + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + w + '"> to <Route ') + ('path="' + (w === "/" ? "*" : w + "/*") + '">.'));
  }
  let h = X(), v;
  if (r) {
    var d;
    let w = typeof r == "string" ? J(r) : r;
    l === "/" || (d = w.pathname) != null && d.startsWith(l) || (process.env.NODE_ENV !== "production" ? j(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + l + '" ') + ('but pathname "' + w.pathname + '" was given in the `location` prop.')) : j(!1)), v = w;
  } else
    v = h;
  let g = v.pathname || "/", x = l === "/" ? g : g.slice(l.length) || "/", y = Et(e, {
    pathname: x
  });
  return process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && G(u || y != null, 'No routes matched location "' + v.pathname + v.search + v.hash + '" '), process.env.NODE_ENV !== "production" && G(y == null || y[y.length - 1].route.element !== void 0, 'Matched leaf route at location "' + v.pathname + v.search + v.hash + '" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.')), Tr(y && y.map((w) => Object.assign({}, w, {
    params: Object.assign({}, o, w.params),
    pathname: q([l, w.pathname]),
    pathnameBase: w.pathnameBase === "/" ? l : q([l, w.pathnameBase])
  })), a);
}
function Tr(e, r) {
  return r === void 0 && (r = []), e == null ? null : e.reduceRight((a, n, o) => /* @__PURE__ */ z(ee.Provider, {
    children: n.route.element !== void 0 ? n.route.element : a,
    value: {
      outlet: a,
      matches: r.concat(e.slice(0, o + 1))
    }
  }), null);
}
function dt(e) {
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
  ) : j(!1)), process.env.NODE_ENV !== "production" && G(!I(ce).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
  let o = Fe();
  return $e(() => {
    o(r, {
      replace: a,
      state: n
    });
  }), null;
}
function Yr(e) {
  return Sr(e.context);
}
function Ot(e) {
  let {
    basename: r = "/",
    children: a = null,
    location: n,
    navigationType: o = B.Pop,
    navigator: s,
    static: l = !1
  } = e;
  te() && (process.env.NODE_ENV !== "production" ? j(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : j(!1));
  let u = _t(r), h = Q(() => ({
    basename: u,
    navigator: s,
    static: l
  }), [u, s, l]);
  typeof n == "string" && (n = J(n));
  let {
    pathname: v = "/",
    search: d = "",
    hash: g = "",
    state: x = null,
    key: y = "default"
  } = n, w = Q(() => {
    let V = Pt(v, u);
    return V == null ? null : {
      pathname: V,
      search: d,
      hash: g,
      state: x,
      key: y
    };
  }, [u, v, d, g, x, y]);
  return process.env.NODE_ENV !== "production" && G(w != null, '<Router basename="' + u + '"> is not able to match the URL ' + ('"' + v + d + g + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), w == null ? null : /* @__PURE__ */ z(ce.Provider, {
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
function xt(e, r) {
  if (e == null)
    return {};
  var a = {}, n = Object.keys(e), o, s;
  for (s = 0; s < n.length; s++)
    o = n[s], !(r.indexOf(o) >= 0) && (a[o] = e[o]);
  return a;
}
const Cr = ["onClick", "reloadDocument", "replace", "state", "target", "to"], kr = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
function jr(e, r) {
  if (!e) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function Mr(e) {
  let {
    basename: r,
    children: a,
    window: n
  } = e, o = we();
  o.current == null && (o.current = ir({
    window: n
  }));
  let s = o.current, [l, u] = We({
    action: s.action,
    location: s.location
  });
  return vt(() => s.listen(u), [s]), /* @__PURE__ */ z(Ot, {
    basename: r,
    children: a,
    location: l.location,
    navigationType: l.action,
    navigator: s
  });
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
  let s = o.current, [l, u] = We({
    action: s.action,
    location: s.location
  });
  return vt(() => s.listen(u), [s]), /* @__PURE__ */ z(Ot, {
    basename: r,
    children: a,
    location: l.location,
    navigationType: l.action,
    navigator: s
  });
}
process.env.NODE_ENV;
function Dr(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
const Nt = /* @__PURE__ */ mt(function(r, a) {
  let {
    onClick: n,
    reloadDocument: o,
    replace: s = !1,
    state: l,
    target: u,
    to: h
  } = r, v = xt(r, Cr), d = xr(h), g = Vr(h, {
    replace: s,
    state: l,
    target: u
  });
  function x(y) {
    n && n(y), !y.defaultPrevented && !o && g(y);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ z("a", Re({}, v, {
      href: d,
      onClick: x,
      ref: a,
      target: u
    }))
  );
});
process.env.NODE_ENV !== "production" && (Nt.displayName = "Link");
const Lr = /* @__PURE__ */ mt(function(r, a) {
  let {
    "aria-current": n = "page",
    caseSensitive: o = !1,
    className: s = "",
    end: l = !1,
    style: u,
    to: h,
    children: v
  } = r, d = xt(r, kr), g = X(), x = Ie(h), y = g.pathname, w = x.pathname;
  o || (y = y.toLowerCase(), w = w.toLowerCase());
  let V = y === w || !l && y.startsWith(w) && y.charAt(w.length) === "/", M = V ? n : void 0, $;
  typeof s == "function" ? $ = s({
    isActive: V
  }) : $ = [s, V ? "active" : null].filter(Boolean).join(" ");
  let S = typeof u == "function" ? u({
    isActive: V
  }) : u;
  return /* @__PURE__ */ z(Nt, Re({}, d, {
    "aria-current": M,
    className: $,
    ref: a,
    style: S,
    to: h
  }), typeof v == "function" ? v({
    isActive: V
  }) : v);
});
process.env.NODE_ENV !== "production" && (Lr.displayName = "NavLink");
function Vr(e, r) {
  let {
    target: a,
    replace: n,
    state: o
  } = r === void 0 ? {} : r, s = Fe(), l = X(), u = Ie(e);
  return Ae((h) => {
    if (h.button === 0 && // Ignore everything but left clicks
    (!a || a === "_self") && // Let browser handle "target=_blank" etc.
    !Dr(h)) {
      h.preventDefault();
      let v = !!n || ae(l) === ae(u);
      s(e, {
        replace: v,
        state: o
      });
    }
  }, [l, s, u, n, o, a, e]);
}
function Hr(e) {
  process.env.NODE_ENV !== "production" && jr(typeof URLSearchParams < "u", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params\n\nIf you're unsure how to load polyfills, we recommend you check out https://polyfill.io/v3/ which provides some recommendations about how to load polyfills only for users that need them, instead of for every user.");
  let r = we(Le(e)), a = X(), n = Q(() => {
    let l = Le(a.search);
    for (let u of r.current.keys())
      l.has(u) || r.current.getAll(u).forEach((h) => {
        l.append(u, h);
      });
    return l;
  }, [a.search]), o = Fe(), s = Ae((l, u) => {
    o("?" + Le(l), u);
  }, [o]);
  return [n, s];
}
function Le(e) {
  return e === void 0 && (e = ""), new URLSearchParams(typeof e == "string" || Array.isArray(e) || e instanceof URLSearchParams ? e : Object.keys(e).reduce((r, a) => {
    let n = e[a];
    return r.concat(Array.isArray(n) ? n.map((o) => [a, o]) : [[a, n]]);
  }, []));
}
const Be = ue(null);
function Jr({
  children: e,
  routes: r = [],
  isLogin: a = !1,
  loginPath: n = "/login",
  redirctPath: o = "/",
  callback: s
}) {
  const [l, u] = We([]);
  if ($e(() => {
    u(r);
  }, []), s && typeof s == "function")
    s();
  else {
    const h = X(), v = Q(
      () => Et(r, h),
      [r, h]
    ), d = Q(() => v == null ? void 0 : v.some((g) => {
      const x = g.route;
      return x.meta ? x.meta.auth : !1;
    }), [v]);
    if (d && !a)
      return /* @__PURE__ */ De(dt, { to: n, state: { form: h.pathname }, replace: !0 });
    if (!d && a && h.pathname === n)
      return /* @__PURE__ */ De(dt, { to: o, replace: !0 });
  }
  return /* @__PURE__ */ De(Be.Provider, { value: l, children: e });
}
const St = (e, r = /* @__PURE__ */ new WeakMap()) => {
  let a = $r(e);
  if (Ar(a))
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
          e.hasOwnProperty(o) && (n[o] = St(e[o], r));
        return n;
    }
  else
    return e;
};
function $r(e) {
  return Object.prototype.toString.call(e).match(/\[object (.*?)\]/)[1].toLowerCase();
}
function Ar(e) {
  return (typeof e == "object" || typeof e == "function") && e !== null;
}
const Kr = (e, r, a) => Tt(e, r).concat(a);
function Tt(e, r) {
  return St(e).filter((o) => {
    var s, l;
    return o.children && (o.children = Tt(o.children, r)), (l = (s = o.meta) == null ? void 0 : s.roles) == null ? void 0 : l.includes(r);
  });
}
function qr(e, r) {
  const a = I(Be), n = arguments.length;
  if (!(n === 0 || n > 2))
    if (typeof e == "string") {
      const o = a.find((s) => s.name === e);
      if (!o)
        return;
      o.children || (o.children = []), o.children.push(r);
    } else {
      const { name: o } = e, s = a.findIndex((l) => l.name === o);
      s === 1 && a.splice(s, 1), a.push(e);
    }
}
const zr = (e) => {
  const r = I(Be);
  return !r || !r.length ? [] : (Ct(r, [], e), r);
};
function Ct(e, r, a) {
  e.map((n) => {
    if (n.children) {
      const o = n.path;
      a && n.children.forEach((s) => {
        s.path = `${o}/${s.path}`;
      }), Ct(n.children, r);
    }
    r.push(n);
  });
}
export {
  Mr as BrowserRouter,
  Ur as HashRouter,
  Nt as Link,
  Lr as NavLink,
  dt as Navigate,
  Yr as Outlet,
  Jr as Permissions,
  qr as addRoute,
  Kr as compRoutes,
  zr as getRoutes,
  Rt as matchPath,
  Et as matchRoutes,
  xr as useHref,
  X as useLocation,
  Fr as useMatch,
  Fe as useNavigate,
  Sr as useOutlet,
  Ir as useParams,
  Br as useRoutes,
  Hr as useSearchParams
};
