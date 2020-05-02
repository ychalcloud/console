import loadable from "@loadable/component";

export const Root = loadable(() => import("./Root"));
export const Login = loadable(() => import("./Login"));
export const Register = loadable(() => import("./Register"));
export const Dashboard = loadable(() => import("./Dashboard"));
export const Instance = loadable(() => import("./Instance"));
export const Billing = loadable(() => import("./Billing"));
export const MyInfo = loadable(() => import("./MyInfo"));
