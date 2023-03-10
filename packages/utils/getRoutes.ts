import { RouteProps } from "../typing";
import { getValue } from "./store";

export const getRoutes = (flat?: boolean) => {
  let routes = getValue() ?? [];
  let allRoutes: RouteProps<string>[] = [];
  deepRoutes(routes!, allRoutes, flat);
  console.log(routes);
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
