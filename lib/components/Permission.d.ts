import { PropsWithChildren } from "react";
import type { PermissionProps } from "../typing";
declare function Premisson<T>({ children, routes, isLogin, loginPath, redirctPath, callback, }: PropsWithChildren<PermissionProps<T>>): JSX.Element;
export default Premisson;
