import { lazy } from "react";
import { ROUTE_PATHS } from "./routePaths";
import UserLayout from "~/layouts/UserLayout";
// import ProtectedRoute from "./ProtectedRoute";

const Home = lazy(() => import("~/features/user/pages/Home"));

export const userRoutes = {
    path: ROUTE_PATHS.home,
    element: <UserLayout />,
    children: [
        { index: true, element: <Home /> },
        // { path: ROUTE_PATHS.profile.slice(1), element: <Profile /> },
    ],
};
