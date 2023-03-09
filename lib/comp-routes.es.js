import it, { useContext as I, createElement as J, createContext as ve, useRef as st, useEffect as lt, useCallback as ut, useMemo as ne, useState as Ht, useLayoutEffect as Kt, forwardRef as ct } from "react";
var de = {}, zt = {
  get exports() {
    return de;
  },
  set exports(t) {
    de = t;
  }
}, te = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function qt() {
  if (Xe)
    return te;
  Xe = 1;
  var t = it, r = Symbol.for("react.element"), a = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(c, f, p) {
    var h, R = {}, P = null, y = null;
    p !== void 0 && (P = "" + p), f.key !== void 0 && (P = "" + f.key), f.ref !== void 0 && (y = f.ref);
    for (h in f)
      n.call(f, h) && !s.hasOwnProperty(h) && (R[h] = f[h]);
    if (c && c.defaultProps)
      for (h in f = c.defaultProps, f)
        R[h] === void 0 && (R[h] = f[h]);
    return { $$typeof: r, type: c, key: P, ref: y, props: R, _owner: o.current };
  }
  return te.Fragment = a, te.jsx = l, te.jsxs = l, te;
}
var re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function Gt() {
  return Ze || (Ze = 1, process.env.NODE_ENV !== "production" && function() {
    var t = it, r = Symbol.for("react.element"), a = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), E = Symbol.iterator, j = "@@iterator";
    function K(e) {
      if (e === null || typeof e != "object")
        return null;
      var i = E && e[E] || e[j];
      return typeof i == "function" ? i : null;
    }
    var k = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(e) {
      {
        for (var i = arguments.length, u = new Array(i > 1 ? i - 1 : 0), d = 1; d < i; d++)
          u[d - 1] = arguments[d];
        oe("error", e, u);
      }
    }
    function oe(e, i, u) {
      {
        var d = k.ReactDebugCurrentFrame, b = d.getStackAddendum();
        b !== "" && (i += "%s", u = u.concat([b]));
        var w = u.map(function(g) {
          return String(g);
        });
        w.unshift("Warning: " + i), Function.prototype.apply.call(console[e], console, w);
      }
    }
    var ie = !1, M = !1, ge = !1, v = !1, _ = !1, T;
    T = Symbol.for("react.module.reference");
    function $(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === s || _ || e === o || e === p || e === h || v || e === y || ie || M || ge || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === R || e.$$typeof === l || e.$$typeof === c || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === T || e.getModuleId !== void 0));
    }
    function D(e, i, u) {
      var d = e.displayName;
      if (d)
        return d;
      var b = i.displayName || i.name || "";
      return b !== "" ? u + "(" + b + ")" : u;
    }
    function F(e) {
      return e.displayName || "Context";
    }
    function V(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case n:
          return "Fragment";
        case a:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case p:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            var i = e;
            return F(i) + ".Consumer";
          case l:
            var u = e;
            return F(u._context) + ".Provider";
          case f:
            return D(e, e.render, "ForwardRef");
          case R:
            var d = e.displayName || null;
            return d !== null ? d : V(e.type) || "Memo";
          case P: {
            var b = e, w = b._payload, g = b._init;
            try {
              return V(g(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var L = Object.assign, z = 0, Te, Ce, je, ke, De, Ve, Le;
    function We() {
    }
    We.__reactDisabledLog = !0;
    function Rt() {
      {
        if (z === 0) {
          Te = console.log, Ce = console.info, je = console.warn, ke = console.error, De = console.group, Ve = console.groupCollapsed, Le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: We,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        z++;
      }
    }
    function _t() {
      {
        if (z--, z === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: L({}, e, {
              value: Te
            }),
            info: L({}, e, {
              value: Ce
            }),
            warn: L({}, e, {
              value: je
            }),
            error: L({}, e, {
              value: ke
            }),
            group: L({}, e, {
              value: De
            }),
            groupCollapsed: L({}, e, {
              value: Ve
            }),
            groupEnd: L({}, e, {
              value: Le
            })
          });
        }
        z < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ye = k.ReactCurrentDispatcher, Ee;
    function se(e, i, u) {
      {
        if (Ee === void 0)
          try {
            throw Error();
          } catch (b) {
            var d = b.stack.trim().match(/\n( *(at )?)/);
            Ee = d && d[1] || "";
          }
        return `
` + Ee + e;
      }
    }
    var be = !1, le;
    {
      var wt = typeof WeakMap == "function" ? WeakMap : Map;
      le = new wt();
    }
    function $e(e, i) {
      if (!e || be)
        return "";
      {
        var u = le.get(e);
        if (u !== void 0)
          return u;
      }
      var d;
      be = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = ye.current, ye.current = null, Rt();
      try {
        if (i) {
          var g = function() {
            throw Error();
          };
          if (Object.defineProperty(g.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(g, []);
            } catch (A) {
              d = A;
            }
            Reflect.construct(e, [], g);
          } else {
            try {
              g.call();
            } catch (A) {
              d = A;
            }
            e.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            d = A;
          }
          e();
        }
      } catch (A) {
        if (A && d && typeof A.stack == "string") {
          for (var m = A.stack.split(`
`), C = d.stack.split(`
`), N = m.length - 1, x = C.length - 1; N >= 1 && x >= 0 && m[N] !== C[x]; )
            x--;
          for (; N >= 1 && x >= 0; N--, x--)
            if (m[N] !== C[x]) {
              if (N !== 1 || x !== 1)
                do
                  if (N--, x--, x < 0 || m[N] !== C[x]) {
                    var W = `
` + m[N].replace(" at new ", " at ");
                    return e.displayName && W.includes("<anonymous>") && (W = W.replace("<anonymous>", e.displayName)), typeof e == "function" && le.set(e, W), W;
                  }
                while (N >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        be = !1, ye.current = w, _t(), Error.prepareStackTrace = b;
      }
      var G = e ? e.displayName || e.name : "", Ge = G ? se(G) : "";
      return typeof e == "function" && le.set(e, Ge), Ge;
    }
    function Pt(e, i, u) {
      return $e(e, !1);
    }
    function Ot(e) {
      var i = e.prototype;
      return !!(i && i.isReactComponent);
    }
    function ue(e, i, u) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return $e(e, Ot(e));
      if (typeof e == "string")
        return se(e);
      switch (e) {
        case p:
          return se("Suspense");
        case h:
          return se("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return Pt(e.render);
          case R:
            return ue(e.type, i, u);
          case P: {
            var d = e, b = d._payload, w = d._init;
            try {
              return ue(w(b), i, u);
            } catch {
            }
          }
        }
      return "";
    }
    var ce = Object.prototype.hasOwnProperty, Fe = {}, Ae = k.ReactDebugCurrentFrame;
    function fe(e) {
      if (e) {
        var i = e._owner, u = ue(e.type, e._source, i ? i.type : null);
        Ae.setExtraStackFrame(u);
      } else
        Ae.setExtraStackFrame(null);
    }
    function Nt(e, i, u, d, b) {
      {
        var w = Function.call.bind(ce);
        for (var g in e)
          if (w(e, g)) {
            var m = void 0;
            try {
              if (typeof e[g] != "function") {
                var C = Error((d || "React class") + ": " + u + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              m = e[g](i, g, d, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              m = N;
            }
            m && !(m instanceof Error) && (fe(b), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", u, g, typeof m), fe(null)), m instanceof Error && !(m.message in Fe) && (Fe[m.message] = !0, fe(b), O("Failed %s type: %s", u, m.message), fe(null));
          }
      }
    }
    var xt = Array.isArray;
    function Re(e) {
      return xt(e);
    }
    function St(e) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, u = i && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u;
      }
    }
    function Tt(e) {
      try {
        return Ie(e), !1;
      } catch {
        return !0;
      }
    }
    function Ie(e) {
      return "" + e;
    }
    function Be(e) {
      if (Tt(e))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", St(e)), Ie(e);
    }
    var ee = k.ReactCurrentOwner, Ct = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ye, Me, _e;
    _e = {};
    function jt(e) {
      if (ce.call(e, "ref")) {
        var i = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function kt(e) {
      if (ce.call(e, "key")) {
        var i = Object.getOwnPropertyDescriptor(e, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Dt(e, i) {
      if (typeof e.ref == "string" && ee.current && i && ee.current.stateNode !== i) {
        var u = V(ee.current.type);
        _e[u] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', V(ee.current.type), e.ref), _e[u] = !0);
      }
    }
    function Vt(e, i) {
      {
        var u = function() {
          Ye || (Ye = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function Lt(e, i) {
      {
        var u = function() {
          Me || (Me = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        u.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Wt = function(e, i, u, d, b, w, g) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: i,
        ref: u,
        props: g,
        // Record the component responsible for creating this element.
        _owner: w
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function $t(e, i, u, d, b) {
      {
        var w, g = {}, m = null, C = null;
        u !== void 0 && (Be(u), m = "" + u), kt(i) && (Be(i.key), m = "" + i.key), jt(i) && (C = i.ref, Dt(i, b));
        for (w in i)
          ce.call(i, w) && !Ct.hasOwnProperty(w) && (g[w] = i[w]);
        if (e && e.defaultProps) {
          var N = e.defaultProps;
          for (w in N)
            g[w] === void 0 && (g[w] = N[w]);
        }
        if (m || C) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          m && Vt(g, x), C && Lt(g, x);
        }
        return Wt(e, m, C, b, d, ee.current, g);
      }
    }
    var we = k.ReactCurrentOwner, Ue = k.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var i = e._owner, u = ue(e.type, e._source, i ? i.type : null);
        Ue.setExtraStackFrame(u);
      } else
        Ue.setExtraStackFrame(null);
    }
    var Pe;
    Pe = !1;
    function Oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function Je() {
      {
        if (we.current) {
          var e = V(we.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ft(e) {
      {
        if (e !== void 0) {
          var i = e.fileName.replace(/^.*[\\\/]/, ""), u = e.lineNumber;
          return `

Check your code at ` + i + ":" + u + ".";
        }
        return "";
      }
    }
    var He = {};
    function At(e) {
      {
        var i = Je();
        if (!i) {
          var u = typeof e == "string" ? e : e.displayName || e.name;
          u && (i = `

Check the top-level render call using <` + u + ">.");
        }
        return i;
      }
    }
    function Ke(e, i) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var u = At(i);
        if (He[u])
          return;
        He[u] = !0;
        var d = "";
        e && e._owner && e._owner !== we.current && (d = " It was passed a child from " + V(e._owner.type) + "."), q(e), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, d), q(null);
      }
    }
    function ze(e, i) {
      {
        if (typeof e != "object")
          return;
        if (Re(e))
          for (var u = 0; u < e.length; u++) {
            var d = e[u];
            Oe(d) && Ke(d, i);
          }
        else if (Oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = K(e);
          if (typeof b == "function" && b !== e.entries)
            for (var w = b.call(e), g; !(g = w.next()).done; )
              Oe(g.value) && Ke(g.value, i);
        }
      }
    }
    function It(e) {
      {
        var i = e.type;
        if (i == null || typeof i == "string")
          return;
        var u;
        if (typeof i == "function")
          u = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === R))
          u = i.propTypes;
        else
          return;
        if (u) {
          var d = V(i);
          Nt(u, e.props, "prop", d, e);
        } else if (i.PropTypes !== void 0 && !Pe) {
          Pe = !0;
          var b = V(i);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bt(e) {
      {
        for (var i = Object.keys(e.props), u = 0; u < i.length; u++) {
          var d = i[u];
          if (d !== "children" && d !== "key") {
            q(e), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), q(null);
            break;
          }
        }
        e.ref !== null && (q(e), O("Invalid attribute `ref` supplied to `React.Fragment`."), q(null));
      }
    }
    function qe(e, i, u, d, b, w) {
      {
        var g = $(e);
        if (!g) {
          var m = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = Ft(b);
          C ? m += C : m += Je();
          var N;
          e === null ? N = "null" : Re(e) ? N = "array" : e !== void 0 && e.$$typeof === r ? (N = "<" + (V(e.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : N = typeof e, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, m);
        }
        var x = $t(e, i, u, b, w);
        if (x == null)
          return x;
        if (g) {
          var W = i.children;
          if (W !== void 0)
            if (d)
              if (Re(W)) {
                for (var G = 0; G < W.length; G++)
                  ze(W[G], e);
                Object.freeze && Object.freeze(W);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ze(W, e);
        }
        return e === n ? Bt(x) : It(x), x;
      }
    }
    function Yt(e, i, u) {
      return qe(e, i, u, !0);
    }
    function Mt(e, i, u) {
      return qe(e, i, u, !1);
    }
    var Ut = Mt, Jt = Yt;
    re.Fragment = n, re.jsx = Ut, re.jsxs = Jt;
  }()), re;
}
(function(t) {
  process.env.NODE_ENV === "production" ? t.exports = qt() : t.exports = Gt();
})(zt);
const Xt = de.Fragment, Ne = de.jsx;
function he() {
  return he = Object.assign ? Object.assign.bind() : function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var a = arguments[r];
      for (var n in a)
        Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
    }
    return t;
  }, he.apply(this, arguments);
}
var U;
(function(t) {
  t.Pop = "POP", t.Push = "PUSH", t.Replace = "REPLACE";
})(U || (U = {}));
var Qe = process.env.NODE_ENV !== "production" ? function(t) {
  return Object.freeze(t);
} : function(t) {
  return t;
};
function Zt(t, r) {
  if (!t) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
var et = "beforeunload", Qt = "popstate";
function er(t) {
  t === void 0 && (t = {});
  var r = t, a = r.window, n = a === void 0 ? document.defaultView : a, o = n.history;
  function s() {
    var v = n.location, _ = v.pathname, T = v.search, $ = v.hash, D = o.state || {};
    return [D.idx, Qe({
      pathname: _,
      search: T,
      hash: $,
      state: D.usr || null,
      key: D.key || "default"
    })];
  }
  var l = null;
  function c() {
    if (l)
      y.call(l), l = null;
    else {
      var v = U.Pop, _ = s(), T = _[0], $ = _[1];
      if (y.length)
        if (T != null) {
          var D = h - T;
          D && (l = {
            action: v,
            location: $,
            retry: function() {
              M(D * -1);
            }
          }, M(D));
        } else
          process.env.NODE_ENV !== "production" && Zt(
            !1,
            // TODO: Write up a doc that explains our blocking strategy in
            // detail and link to it here so people can understand better what
            // is going on and how to avoid it.
            "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation."
          );
      else
        O(v);
    }
  }
  n.addEventListener(Qt, c);
  var f = U.Pop, p = s(), h = p[0], R = p[1], P = rt(), y = rt();
  h == null && (h = 0, o.replaceState(he({}, o.state, {
    idx: h
  }), ""));
  function E(v) {
    return typeof v == "string" ? v : xe(v);
  }
  function j(v, _) {
    return _ === void 0 && (_ = null), Qe(he({
      pathname: R.pathname,
      hash: "",
      search: ""
    }, typeof v == "string" ? H(v) : v, {
      state: _,
      key: tr()
    }));
  }
  function K(v, _) {
    return [{
      usr: v.state,
      key: v.key,
      idx: _
    }, E(v)];
  }
  function k(v, _, T) {
    return !y.length || (y.call({
      action: v,
      location: _,
      retry: T
    }), !1);
  }
  function O(v) {
    f = v;
    var _ = s();
    h = _[0], R = _[1], P.call({
      action: f,
      location: R
    });
  }
  function oe(v, _) {
    var T = U.Push, $ = j(v, _);
    function D() {
      oe(v, _);
    }
    if (k(T, $, D)) {
      var F = K($, h + 1), V = F[0], L = F[1];
      try {
        o.pushState(V, "", L);
      } catch {
        n.location.assign(L);
      }
      O(T);
    }
  }
  function ie(v, _) {
    var T = U.Replace, $ = j(v, _);
    function D() {
      ie(v, _);
    }
    if (k(T, $, D)) {
      var F = K($, h), V = F[0], L = F[1];
      o.replaceState(V, "", L), O(T);
    }
  }
  function M(v) {
    o.go(v);
  }
  var ge = {
    get action() {
      return f;
    },
    get location() {
      return R;
    },
    createHref: E,
    push: oe,
    replace: ie,
    go: M,
    back: function() {
      M(-1);
    },
    forward: function() {
      M(1);
    },
    listen: function(_) {
      return P.push(_);
    },
    block: function(_) {
      var T = y.push(_);
      return y.length === 1 && n.addEventListener(et, tt), function() {
        T(), y.length || n.removeEventListener(et, tt);
      };
    }
  };
  return ge;
}
function tt(t) {
  t.preventDefault(), t.returnValue = "";
}
function rt() {
  var t = [];
  return {
    get length() {
      return t.length;
    },
    push: function(a) {
      return t.push(a), function() {
        t = t.filter(function(n) {
          return n !== a;
        });
      };
    },
    call: function(a) {
      t.forEach(function(n) {
        return n && n(a);
      });
    }
  };
}
function tr() {
  return Math.random().toString(36).substr(2, 8);
}
function xe(t) {
  var r = t.pathname, a = r === void 0 ? "/" : r, n = t.search, o = n === void 0 ? "" : n, s = t.hash, l = s === void 0 ? "" : s;
  return o && o !== "?" && (a += o.charAt(0) === "?" ? o : "?" + o), l && l !== "#" && (a += l.charAt(0) === "#" ? l : "#" + l), a;
}
function H(t) {
  var r = {};
  if (t) {
    var a = t.indexOf("#");
    a >= 0 && (r.hash = t.substr(a), t = t.substr(0, a));
    var n = t.indexOf("?");
    n >= 0 && (r.search = t.substr(n), t = t.substr(0, n)), t && (r.pathname = t);
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
const ae = /* @__PURE__ */ ve(null);
process.env.NODE_ENV !== "production" && (ae.displayName = "Navigation");
const me = /* @__PURE__ */ ve(null);
process.env.NODE_ENV !== "production" && (me.displayName = "Location");
const X = /* @__PURE__ */ ve({
  outlet: null,
  matches: []
});
process.env.NODE_ENV !== "production" && (X.displayName = "Route");
function S(t, r) {
  if (!t)
    throw new Error(r);
}
function Y(t, r) {
  if (!t) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
const nt = {};
function rr(t, r, a) {
  !r && !nt[t] && (nt[t] = !0, process.env.NODE_ENV !== "production" && Y(!1, a));
}
function ft(t, r, a) {
  a === void 0 && (a = "/");
  let n = typeof r == "string" ? H(r) : r, o = pt(n.pathname || "/", a);
  if (o == null)
    return null;
  let s = dt(t);
  nr(s);
  let l = null;
  for (let c = 0; l == null && c < s.length; ++c)
    l = dr(s[c], o);
  return l;
}
function dt(t, r, a, n) {
  return r === void 0 && (r = []), a === void 0 && (a = []), n === void 0 && (n = ""), t.forEach((o, s) => {
    let l = {
      relativePath: o.path || "",
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o
    };
    l.relativePath.startsWith("/") && (l.relativePath.startsWith(n) || (process.env.NODE_ENV !== "production" ? S(!1, 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + n + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.") : S(!1)), l.relativePath = l.relativePath.slice(n.length));
    let c = B([n, l.relativePath]), f = a.concat(l);
    o.children && o.children.length > 0 && (o.index === !0 && (process.env.NODE_ENV !== "production" ? S(!1, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')) : S(!1)), dt(o.children, r, f, c)), !(o.path == null && !o.index) && r.push({
      path: c,
      score: cr(c, o.index),
      routesMeta: f
    });
  }), r;
}
function nr(t) {
  t.sort((r, a) => r.score !== a.score ? a.score - r.score : fr(r.routesMeta.map((n) => n.childrenIndex), a.routesMeta.map((n) => n.childrenIndex)));
}
const ar = /^:\w+$/, or = 3, ir = 2, sr = 1, lr = 10, ur = -2, at = (t) => t === "*";
function cr(t, r) {
  let a = t.split("/"), n = a.length;
  return a.some(at) && (n += ur), r && (n += ir), a.filter((o) => !at(o)).reduce((o, s) => o + (ar.test(s) ? or : s === "" ? sr : lr), n);
}
function fr(t, r) {
  return t.length === r.length && t.slice(0, -1).every((n, o) => n === r[o]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    t[t.length - 1] - r[r.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function dr(t, r) {
  let {
    routesMeta: a
  } = t, n = {}, o = "/", s = [];
  for (let l = 0; l < a.length; ++l) {
    let c = a[l], f = l === a.length - 1, p = o === "/" ? r : r.slice(o.length) || "/", h = hr({
      path: c.relativePath,
      caseSensitive: c.caseSensitive,
      end: f
    }, p);
    if (!h)
      return null;
    Object.assign(n, h.params);
    let R = c.route;
    s.push({
      params: n,
      pathname: B([o, h.pathname]),
      pathnameBase: vt(B([o, h.pathnameBase])),
      route: R
    }), h.pathnameBase !== "/" && (o = B([o, h.pathnameBase]));
  }
  return s;
}
function hr(t, r) {
  typeof t == "string" && (t = {
    path: t,
    caseSensitive: !1,
    end: !0
  });
  let [a, n] = pr(t.path, t.caseSensitive, t.end), o = r.match(a);
  if (!o)
    return null;
  let s = o[0], l = s.replace(/(.)\/+$/, "$1"), c = o.slice(1);
  return {
    params: n.reduce((p, h, R) => {
      if (h === "*") {
        let P = c[R] || "";
        l = s.slice(0, s.length - P.length).replace(/(.)\/+$/, "$1");
      }
      return p[h] = vr(c[R] || "", h), p;
    }, {}),
    pathname: s,
    pathnameBase: l,
    pattern: t
  };
}
function pr(t, r, a) {
  r === void 0 && (r = !1), a === void 0 && (a = !0), process.env.NODE_ENV !== "production" && Y(t === "*" || !t.endsWith("*") || t.endsWith("/*"), 'Route path "' + t + '" will be treated as if it were ' + ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + t.replace(/\*$/, "/*") + '".'));
  let n = [], o = "^" + t.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (l, c) => (n.push(c), "([^\\/]+)"));
  return t.endsWith("*") ? (n.push("*"), o += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o += a ? "\\/*$" : (
    // Otherwise, match a word boundary or a proceeding /. The word boundary restricts
    // parent routes to matching only their own words and nothing more, e.g. parent
    // route "/home" should not match "/home2".
    // Additionally, allow paths starting with `.`, `-`, `~`, and url-encoded entities,
    // but do not consume the character in the matched path so they can match against
    // nested paths.
    "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)"
  ), [new RegExp(o, r ? void 0 : "i"), n];
}
function vr(t, r) {
  try {
    return decodeURIComponent(t);
  } catch (a) {
    return process.env.NODE_ENV !== "production" && Y(!1, 'The value for the URL param "' + r + '" will not be decoded because' + (' the string "' + t + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + a + ").")), t;
  }
}
function mr(t, r) {
  r === void 0 && (r = "/");
  let {
    pathname: a,
    search: n = "",
    hash: o = ""
  } = typeof t == "string" ? H(t) : t;
  return {
    pathname: a ? a.startsWith("/") ? a : gr(a, r) : r,
    search: Er(n),
    hash: br(o)
  };
}
function gr(t, r) {
  let a = r.replace(/\/+$/, "").split("/");
  return t.split("/").forEach((o) => {
    o === ".." ? a.length > 1 && a.pop() : o !== "." && a.push(o);
  }), a.length > 1 ? a.join("/") : "/";
}
function ht(t, r, a) {
  let n = typeof t == "string" ? H(t) : t, o = t === "" || n.pathname === "" ? "/" : n.pathname, s;
  if (o == null)
    s = a;
  else {
    let c = r.length - 1;
    if (o.startsWith("..")) {
      let f = o.split("/");
      for (; f[0] === ".."; )
        f.shift(), c -= 1;
      n.pathname = f.join("/");
    }
    s = c >= 0 ? r[c] : "/";
  }
  let l = mr(n, s);
  return o && o !== "/" && o.endsWith("/") && !l.pathname.endsWith("/") && (l.pathname += "/"), l;
}
function yr(t) {
  return t === "" || t.pathname === "" ? "/" : typeof t == "string" ? H(t).pathname : t.pathname;
}
function pt(t, r) {
  if (r === "/")
    return t;
  if (!t.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let a = t.charAt(r.length);
  return a && a !== "/" ? null : t.slice(r.length) || "/";
}
const B = (t) => t.join("/").replace(/\/\/+/g, "/"), vt = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"), Er = (t) => !t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t, br = (t) => !t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t;
function Rr(t) {
  Z() || (process.env.NODE_ENV !== "production" ? S(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : S(!1));
  let {
    basename: r,
    navigator: a
  } = I(ae), {
    hash: n,
    pathname: o,
    search: s
  } = Se(t), l = o;
  if (r !== "/") {
    let c = yr(t), f = c != null && c.endsWith("/");
    l = o === "/" ? r + (f ? "/" : "") : B([r, o]);
  }
  return a.createHref({
    pathname: l,
    search: s,
    hash: n
  });
}
function Z() {
  return I(me) != null;
}
function Q() {
  return Z() || (process.env.NODE_ENV !== "production" ? S(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : S(!1)), I(me).location;
}
function mt() {
  Z() || (process.env.NODE_ENV !== "production" ? S(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : S(!1));
  let {
    basename: t,
    navigator: r
  } = I(ae), {
    matches: a
  } = I(X), {
    pathname: n
  } = Q(), o = JSON.stringify(a.map((c) => c.pathnameBase)), s = st(!1);
  return lt(() => {
    s.current = !0;
  }), ut(function(c, f) {
    if (f === void 0 && (f = {}), process.env.NODE_ENV !== "production" && Y(s.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered."), !s.current)
      return;
    if (typeof c == "number") {
      r.go(c);
      return;
    }
    let p = ht(c, JSON.parse(o), n);
    t !== "/" && (p.pathname = B([t, p.pathname])), (f.replace ? r.replace : r.push)(p, f.state);
  }, [t, r, o, n]);
}
const _r = /* @__PURE__ */ ve(null);
function wr(t) {
  let r = I(X).outlet;
  return r && /* @__PURE__ */ J(_r.Provider, {
    value: t
  }, r);
}
function Se(t) {
  let {
    matches: r
  } = I(X), {
    pathname: a
  } = Q(), n = JSON.stringify(r.map((o) => o.pathnameBase));
  return ne(() => ht(t, JSON.parse(n), a), [t, n, a]);
}
function Vr(t, r) {
  Z() || (process.env.NODE_ENV !== "production" ? S(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : S(!1));
  let {
    matches: a
  } = I(X), n = a[a.length - 1], o = n ? n.params : {}, s = n ? n.pathname : "/", l = n ? n.pathnameBase : "/", c = n && n.route;
  if (process.env.NODE_ENV !== "production") {
    let E = c && c.path || "";
    rr(s, !c || E.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + s + '" (under <Route path="' + E + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + E + '"> to <Route ') + ('path="' + (E === "/" ? "*" : E + "/*") + '">.'));
  }
  let f = Q(), p;
  if (r) {
    var h;
    let E = typeof r == "string" ? H(r) : r;
    l === "/" || (h = E.pathname) != null && h.startsWith(l) || (process.env.NODE_ENV !== "production" ? S(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + l + '" ') + ('but pathname "' + E.pathname + '" was given in the `location` prop.')) : S(!1)), p = E;
  } else
    p = f;
  let R = p.pathname || "/", P = l === "/" ? R : R.slice(l.length) || "/", y = ft(t, {
    pathname: P
  });
  return process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && Y(c || y != null, 'No routes matched location "' + p.pathname + p.search + p.hash + '" '), process.env.NODE_ENV !== "production" && Y(y == null || y[y.length - 1].route.element !== void 0, 'Matched leaf route at location "' + p.pathname + p.search + p.hash + '" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.')), Pr(y && y.map((E) => Object.assign({}, E, {
    params: Object.assign({}, o, E.params),
    pathname: B([l, E.pathname]),
    pathnameBase: E.pathnameBase === "/" ? l : B([l, E.pathnameBase])
  })), a);
}
function Pr(t, r) {
  return r === void 0 && (r = []), t == null ? null : t.reduceRight((a, n, o) => /* @__PURE__ */ J(X.Provider, {
    children: n.route.element !== void 0 ? n.route.element : a,
    value: {
      outlet: a,
      matches: r.concat(t.slice(0, o + 1))
    }
  }), null);
}
function ot(t) {
  let {
    to: r,
    replace: a,
    state: n
  } = t;
  Z() || (process.env.NODE_ENV !== "production" ? S(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  ) : S(!1)), process.env.NODE_ENV !== "production" && Y(!I(ae).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
  let o = mt();
  return lt(() => {
    o(r, {
      replace: a,
      state: n
    });
  }), null;
}
function Lr(t) {
  return wr(t.context);
}
function Or(t) {
  let {
    basename: r = "/",
    children: a = null,
    location: n,
    navigationType: o = U.Pop,
    navigator: s,
    static: l = !1
  } = t;
  Z() && (process.env.NODE_ENV !== "production" ? S(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : S(!1));
  let c = vt(r), f = ne(() => ({
    basename: c,
    navigator: s,
    static: l
  }), [c, s, l]);
  typeof n == "string" && (n = H(n));
  let {
    pathname: p = "/",
    search: h = "",
    hash: R = "",
    state: P = null,
    key: y = "default"
  } = n, E = ne(() => {
    let j = pt(p, c);
    return j == null ? null : {
      pathname: j,
      search: h,
      hash: R,
      state: P,
      key: y
    };
  }, [c, p, h, R, P, y]);
  return process.env.NODE_ENV !== "production" && Y(E != null, '<Router basename="' + c + '"> is not able to match the URL ' + ('"' + p + h + R + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), E == null ? null : /* @__PURE__ */ J(ae.Provider, {
    value: f
  }, /* @__PURE__ */ J(me.Provider, {
    children: a,
    value: {
      location: E,
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
function pe() {
  return pe = Object.assign || function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var a = arguments[r];
      for (var n in a)
        Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
    }
    return t;
  }, pe.apply(this, arguments);
}
function gt(t, r) {
  if (t == null)
    return {};
  var a = {}, n = Object.keys(t), o, s;
  for (s = 0; s < n.length; s++)
    o = n[s], !(r.indexOf(o) >= 0) && (a[o] = t[o]);
  return a;
}
const Nr = ["onClick", "reloadDocument", "replace", "state", "target", "to"], xr = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
function Wr(t) {
  let {
    basename: r,
    children: a,
    window: n
  } = t, o = st();
  o.current == null && (o.current = er({
    window: n
  }));
  let s = o.current, [l, c] = Ht({
    action: s.action,
    location: s.location
  });
  return Kt(() => s.listen(c), [s]), /* @__PURE__ */ J(Or, {
    basename: r,
    children: a,
    location: l.location,
    navigationType: l.action,
    navigator: s
  });
}
process.env.NODE_ENV;
function Sr(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
const yt = /* @__PURE__ */ ct(function(r, a) {
  let {
    onClick: n,
    reloadDocument: o,
    replace: s = !1,
    state: l,
    target: c,
    to: f
  } = r, p = gt(r, Nr), h = Rr(f), R = Cr(f, {
    replace: s,
    state: l,
    target: c
  });
  function P(y) {
    n && n(y), !y.defaultPrevented && !o && R(y);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ J("a", pe({}, p, {
      href: h,
      onClick: P,
      ref: a,
      target: c
    }))
  );
});
process.env.NODE_ENV !== "production" && (yt.displayName = "Link");
const Tr = /* @__PURE__ */ ct(function(r, a) {
  let {
    "aria-current": n = "page",
    caseSensitive: o = !1,
    className: s = "",
    end: l = !1,
    style: c,
    to: f,
    children: p
  } = r, h = gt(r, xr), R = Q(), P = Se(f), y = R.pathname, E = P.pathname;
  o || (y = y.toLowerCase(), E = E.toLowerCase());
  let j = y === E || !l && y.startsWith(E) && y.charAt(E.length) === "/", K = j ? n : void 0, k;
  typeof s == "function" ? k = s({
    isActive: j
  }) : k = [s, j ? "active" : null].filter(Boolean).join(" ");
  let O = typeof c == "function" ? c({
    isActive: j
  }) : c;
  return /* @__PURE__ */ J(yt, pe({}, h, {
    "aria-current": K,
    className: k,
    ref: a,
    style: O,
    to: f
  }), typeof p == "function" ? p({
    isActive: j
  }) : p);
});
process.env.NODE_ENV !== "production" && (Tr.displayName = "NavLink");
function Cr(t, r) {
  let {
    target: a,
    replace: n,
    state: o
  } = r === void 0 ? {} : r, s = mt(), l = Q(), c = Se(t);
  return ut((f) => {
    if (f.button === 0 && // Ignore everything but left clicks
    (!a || a === "_self") && // Let browser handle "target=_blank" etc.
    !Sr(f)) {
      f.preventDefault();
      let p = !!n || xe(l) === xe(c);
      s(t, {
        replace: p,
        state: o
      });
    }
  }, [l, s, c, n, o, a, t]);
}
function $r({
  children: t,
  routes: r,
  isLogin: a,
  callback: n
}) {
  if (n && typeof n == "function")
    n();
  else {
    const o = Q(), s = ne(
      () => ft(r, o),
      [r, o]
    ), l = ne(() => s == null ? void 0 : s.some((c) => {
      const f = c.route;
      return f.meta ? f.meta.auth : !1;
    }), [s]);
    if (l && !a)
      return /* @__PURE__ */ Ne(ot, { to: "/", state: { form: o.pathname }, replace: !0 });
    if (!l && a && o.pathname === "/login")
      return /* @__PURE__ */ Ne(ot, { to: "/dashboard", replace: !0 });
  }
  return /* @__PURE__ */ Ne(Xt, { children: t });
}
const Et = (t, r = /* @__PURE__ */ new WeakMap()) => {
  let a = jr(t);
  if (kr(a))
    switch (a) {
      case "date":
        return new Date(t);
      case "regexp":
        return new RegExp(t, t.flags);
      case "function":
        return new Function(t, t.flags);
      default:
        let n = Array.isArray(t) ? [] : {};
        if (r.has(t))
          return r.get(t);
        r.set(t, n);
        for (let o in t)
          t.hasOwnProperty(o) && (n[o] = Et(t[o], r));
        return n;
    }
  else
    return t;
};
function jr(t) {
  return Object.prototype.toString.call(t).match(/\[object (.*?)\]/)[1].toLowerCase();
}
function kr(t) {
  return (typeof t == "object" || typeof t == "function") && t !== null;
}
const Fr = (t, r, a) => bt(t, r).concat(a);
function bt(t, r) {
  return Et(t).filter((o) => {
    var s, l;
    return o.children && (o.children = bt(o.children, r)), (l = (s = o.meta) == null ? void 0 : s.roles) == null ? void 0 : l.includes(r);
  });
}
export {
  yt as Link,
  Tr as NavLink,
  Lr as Outlet,
  $r as Permissions,
  Wr as Router,
  Fr as compRoutes,
  Vr as useRoutes
};
