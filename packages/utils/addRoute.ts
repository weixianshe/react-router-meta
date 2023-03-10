import { RouteProps } from "../typing";
import { getValue } from "./store";

export function addRoute<T>(parentName: string, route: RouteProps<T>): void;
export function addRoute<T>(route: RouteProps<T>): void;
export function addRoute<T>(
  parentNam: string | RouteProps<T>,
  route?: RouteProps<T>
): void {
  const routes = getValue() ?? [];
  const len = arguments.length;
  if (len === 0 || len > 2) return;
  const arg0 = arguments[0];
  if (typeof parentNam === "string") {
    if (typeof arg0 !== "string") {
      return console.error("当添加嵌套路由时,name必须为字符串");
    }
    const res = routes.find((item) => {
      return item.name === arg0;
    });

    if (!res) {
      return;
    }
    if (!res.children) {
      res.children = [];
    }
    res.children.push(route!);
  } else {
    const { name } = parentNam;
    const res = routes.findIndex((route) => route.name === name);
    if (res === 1) {
      routes.splice(res, 1);
    }
    routes.push(arg0);
  }
}
