import React, {
  PropsWithChildren,
  useEffect,
  useMemo,
  useReducer,
  useState,
  createContext,
} from "react";
import { matchRoutes, Navigate, useLocation } from "react-router-dom";

import type { RouteProps, PermissionProps } from "../typing";

export const RoutesContext = createContext<any>(null);
function Premisson<T>({
  children,
  routes = [],
  isLogin = false,
  loginPath = "/login",
  redirctPath = "/",
  callback,
}: PropsWithChildren<PermissionProps<T>>) {
  // const [state, dispatch] = useReducer(reducer, initalState);
  const [router, setRouter] = useState<any>([]);
  useEffect(() => {
    setRouter(routes);
  }, []);
  // sessionStorage.setItem("routes", JSON.stringify(routes));
  // console.log(state, "state");
  if (callback && typeof callback === "function") {
    callback();
  } else {
    const location = useLocation();
    const mathchs = useMemo(
      () => matchRoutes(routes, location),
      [routes, location]
    );
    const isNeedLogin = useMemo(() => {
      return mathchs?.some((item) => {
        const route: RouteProps<T> = item.route;
        if (!route.meta) return false;
        return route.meta.auth;
      });
    }, [mathchs]);
    if (isNeedLogin && !isLogin) {
      return (
        <Navigate to={loginPath} state={{ form: location.pathname }} replace />
      );
    }

    if (!isNeedLogin && isLogin && location.pathname === loginPath) {
      return <Navigate to={redirctPath} replace />;
    }
  }
  return (
    <RoutesContext.Provider value={router}>{children}</RoutesContext.Provider>
  );
}

export default Premisson;
