import { createContext, useContext } from "react";
import { RouteProps } from "../typing";

export const RoutesContext = createContext<RouteProps<any>[] | null>(null);

export function getValue() {
  return useContext(RoutesContext);
}
