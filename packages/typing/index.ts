import { RouteObject } from "react-router-dom";

export interface RouteMeta<T> {
  auth?: boolean; //登录
  roles?: T[]; //权限
  title?: string; // 标题
}

export interface RouteProps<T extends any> extends RouteObject {
  meta?: RouteMeta<T>;
  name?: string;
  children?: RouteProps<T>[];
}

export interface PermissionProps<T> {
  isLogin?: boolean;
  routes?: RouteProps<T>[];
  loginPath?: string;
  redirctPath?: string;
  callback?: () => {};
}
