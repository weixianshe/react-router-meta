import { RouteProps } from "../typing";
export declare const compRoutes: <T>(authRoutes: RouteProps<T>[], role: T, whiteRoutes: RouteProps<T>[]) => RouteProps<T>[];
