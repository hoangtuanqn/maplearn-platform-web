import { lazy } from "react";
import { ROUTE_PATHS } from "./routePaths";
import UserLayout from "~/layouts/UserLayout";
import Register from "~/features/student/pages/Register";

// const Home = lazy(() => import("~/features/student/pages/Home"));
const NotFound = lazy(() => import("~/features/student/pages/NotFound"));
const Forbidden = lazy(() => import("~/features/student/pages/Forbidden"));
const Login = lazy(() => import("~/features/student/pages/Login"));
export const publicRoutes = [
    {
        path: "/",
        element: <UserLayout />,
        children: [
            {
                path: ROUTE_PATHS.login,
                element: <Login />,
            },
            {
                path: ROUTE_PATHS.register,
                element: <Register />,
            },
            {
                path: ROUTE_PATHS.forbidden,
                element: <Forbidden />,
            },
            {
                path: ROUTE_PATHS.notFound,
                element: <NotFound />,
            },
        ],
    },
];
