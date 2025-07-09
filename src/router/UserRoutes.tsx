import { lazy } from "react";
import { ROUTE_PATHS } from "./routePaths";
import StudentLayout from "~/layouts/StudentLayout";
// import ProtectedRoute from "./ProtectedRoute";

const Profile = lazy(() => import("~/features/student/pages/Profile"));

export const userRoutes = {
    path: ROUTE_PATHS.user.profile,
    element: <StudentLayout />,
    children: [
        {
            index: true,
            element: <Profile />,
        },
    ],
};
