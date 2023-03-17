import { useContext } from "react";
import { RoutesContext } from "../components/Permission";
import { RouteProps } from "../typing";

export function addRoute<T>(parentName: string, route: RouteProps<T>): void;
export function addRoute<T>(route: RouteProps<T>): void;
export function addRoute<T>(
  parentName: string | RouteProps<T>,
  route?: RouteProps<T>
): void {
  const routes = useContext(RoutesContext) as RouteProps<T>[];
  const len = arguments.length;
  if (len === 0 || len > 2) return;
  if (typeof parentName === "string") {
    const res = routes.find((item) => {
      return item.name === parentName;
    });

    if (!res) {
      return;
    }
    if (!res.children) {
      res.children = [];
    }
    res.children.push(route!);
  } else {
    const { name } = parentName;
    const res = routes.findIndex((route) => route.name === name);
    if (res === 1) {
      routes.splice(res, 1);
    }
    routes.push(parentName);
  }
}
