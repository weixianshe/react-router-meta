import { RouteObject } from "react-router-dom";
export interface RouteProps<T> extends RouteObject {
    meta?: {
        auth?: boolean;
        roles?: T[];
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
