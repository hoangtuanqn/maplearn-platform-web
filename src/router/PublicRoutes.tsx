import { lazy } from "react";
import { ROUTE_PATHS } from "./routePaths";
import UserLayout from "~/layouts/UserLayout";

// const Home = lazy(() => import("~/features/user/pages/Home"));
const NotFound = lazy(() => import("~/features/user/pages/NotFound"));
const Forbidden = lazy(() => import("~/features/user/pages/Forbidden"));
export const publicRoutes = [
    {
        path: "/",
        element: <UserLayout />,
        children: [
            // {
            //     index: true,
            //     element: <Home />,
            // },
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
