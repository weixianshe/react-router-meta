export const cloneDeep = (target: any, map = new WeakMap()) => {
  let type = getType(target);
  if (isObj(type)) {
    switch (type) {
      case "date":
        return new Date(target);
      case "regexp":
        return new RegExp(target, target.flags);
      case "function":
        return new Function(target, target.flags);
      default:
        let cloneObj: any = Array.isArray(target) ? [] : {};
        if (map.has(target)) return map.get(target);
        map.set(target, cloneObj);
        for (let key in target) {
          if (target.hasOwnProperty(key)) {
            cloneObj[key] = cloneDeep(target[key], map);
          }
        }
        return cloneObj;
    }
  } else {
    return target;
  }
};

function getType(val: unknown) {
  const strType = Object.prototype.toString.call(val);
  return strType.match(/\[object (.*?)\]/)![1].toLowerCase();
}

function isObj(type: string) {
  return (
    (typeof type === "object" || typeof type === "function") && type !== null
  );
}
