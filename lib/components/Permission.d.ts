import { PropsWithChildren } from "react";
import type { IPermission } from "../typing";
declare function Premisson<T>({ children, routes, isLogin, callback, }: PropsWithChildren<IPermission<T>>): JSX.Element;
export default Premisson;
