import React, { PropsWithChildren } from "react";
import type { PermissionProps } from "../typing";
export declare const RoutesContext: React.Context<any>;
declare function Premisson<T>({ children, routes, isLogin, loginPath, redirctPath, callback, }: PropsWithChildren<PermissionProps<T>>): JSX.Element;
export default Premisson;
