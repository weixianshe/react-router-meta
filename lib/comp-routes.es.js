const u = (e, n = /* @__PURE__ */ new WeakMap()) => {
  let s = l(e);
  if (f(s))
    switch (s) {
      case "date":
        return new Date(e);
      case "regexp":
        return new RegExp(e, e.flags);
      case "function":
        return new Function(e, e.flags);
      default:
        let t = Array.isArray(e) ? [] : {};
        if (n.has(e))
          return n.get(e);
        n.set(e, t);
        for (let o in e)
          e.hasOwnProperty(o) && (t[o] = u(e[o], n));
        return t;
    }
  else
    return e;
};
function l(e) {
  return Object.prototype.toString.call(e).match(/\[object (.*?)\]/)[1].toLowerCase();
}
function f(e) {
  return (typeof e == "object" || typeof e == "function") && e !== null;
}
const p = (e, n, s) => i(e, n).concat(s);
function i(e, n) {
  return u(e).filter((o) => {
    var c, r;
    return o.children && (o.children = i(o.children, n)), (r = (c = o.meta) == null ? void 0 : c.roles) == null ? void 0 : r.includes(n);
  });
}
export {
  p as compRoutes
};
