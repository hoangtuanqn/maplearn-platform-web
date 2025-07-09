import { lazy } from "react";
import { ROUTE_PATHS } from "./routePaths";
import StudentLayout from "~/layouts/StudentLayout";
import Register from "~/features/student/pages/Register";
import Home from "~/features/student/pages/Home";

// const Home = lazy(() => import("~/features/student/pages/Home"));
const NotFound = lazy(() => import("~/features/student/pages/NotFound"));
const Forbidden = lazy(() => import("~/features/student/pages/Forbidden"));
const Login = lazy(() => import("~/features/student/pages/Login"));
export const publicRoutes = [
    {
        path: "/",
        element: <StudentLayout />,
        children: [
            {
                index: true,
                path: ROUTE_PATHS.home,
                element: <Home />,
            },
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
