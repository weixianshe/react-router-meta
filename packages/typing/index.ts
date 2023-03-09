import { RouteObject } from "react-router-dom";

export interface RouteProps<T> extends RouteObject {
  meta?: {
    auth?: boolean; //登录
    roles?: T[]; //权限
  };
  children?: RouteProps<T>[];
}

export interface PermissionProps<T> {
  isLogin?: boolean;
  routes?: RouteProps<T>[];
  loginPath?: string;
  redirctPath?: string;
  callback?: () => {};
}
