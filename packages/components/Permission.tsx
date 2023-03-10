import React, { PropsWithChildren, useMemo } from "react";
import { matchRoutes, Navigate, useLocation } from "react-router-dom";

import type { RouteProps, PermissionProps } from "../typing";
import { RoutesContext } from "../utils/store";

function Premisson<T>({
  children,
  routes = [],
  isLogin = false,
  loginPath = "/login",
  redirctPath = "/",
  callback,
}: PropsWithChildren<PermissionProps<T>>) {
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
    <RoutesContext.Provider value={routes}>{children}</RoutesContext.Provider>
  );
}

export default Premisson;
