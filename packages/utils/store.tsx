import { RouteProps } from "../typing";

interface Action {
  type: string;
  payload: any;
}

export interface State {
  routes: RouteProps<any>[];
}

export interface IState extends State {
  dispatch: React.Dispatch<any> | undefined;
}
