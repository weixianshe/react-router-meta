/// <reference types="react" />
import { RouteProps } from "../typing";
export interface State {
    routes: RouteProps<any>[];
}
export interface IState extends State {
    dispatch: React.Dispatch<any> | undefined;
}
