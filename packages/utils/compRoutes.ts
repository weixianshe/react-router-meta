import { RouteProps } from "../typing";
import { cloneDeep } from "./cloneDeep";

export const compRoutes = <T>(
  authRoutes: RouteProps<T>[],
  role: T,
  whiteRoutes: RouteProps<T>[]
) => {
  const routes = deepRoutes<T>(authRoutes, role);
  const endRoutes = routes.concat(whiteRoutes);
  return endRoutes;
};

function deepRoutes<T>(routes: RouteProps<T>[], role: T) {
  const newRoutes = cloneDeep(routes) as RouteProps<T>[];
  const filterRoutes = newRoutes.filter((route) => {
    if (route.children) {
      route.children = deepRoutes(route.children, role);
    }
    return route.meta?.roles?.includes(role);
  });
  return filterRoutes;
}
