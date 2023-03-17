import { useContext, useEffect } from "react";
import { RoutesContext } from "../components/Permission";
import { RouteProps } from "../typing";

export const getRoutes = (flat?: boolean) => {
  const routes = useContext(RoutesContext);
  if (!routes || !routes.length) return [];
  // const { routes, dispatch } = getValue() as IState;
  let allRoutes: RouteProps<string>[] = [];
  deepRoutes(routes!, allRoutes, flat);
  return routes;
};

function deepRoutes(
  routes: RouteProps<string>[],
  router: RouteProps<string>[],
  flat?: boolean
) {
  routes.map((route) => {
    if (route.children) {
      const parentPath = route.path;
      flat &&
        route.children.forEach((element) => {
          element.path = `${parentPath}/${element.path}`;
        });
      deepRoutes(route.children, router);
    }
    router.push(route);
  });
}
