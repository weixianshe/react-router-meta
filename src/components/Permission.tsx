import React, { PropsWithChildren, useMemo } from "react";
import { matchRoutes, Navigate, useLocation } from "react-router-dom";

import type { IPermission, RouteProps } from "../typing";

function Premisson<T>({
  children,
  routes,
  isLogin,
  callback,
}: PropsWithChildren<IPermission<T>>) {
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
      return <Navigate to={"/"} state={{ form: location.pathname }} replace />;
    }

    if (!isNeedLogin && isLogin && location.pathname === "/login") {
      return <Navigate to={"/dashboard"} replace />;
    }
  }

  return <>{children}</>;
}

export default Premisson;
