import { lazy } from "react";
import { ROUTE_PATHS } from "./routePaths";
import StudentLayout from "~/layouts/StudentLayout";
// import ProtectedRoute from "./ProtectedRoute";

const Profile = lazy(() => import("~/features/student/pages/Profile"));
const MyCourses = lazy(() => import("~/features/student/pages/Profile/MyCourses"));
const EditProfile = lazy(() => import("~/features/student/pages/Profile/EditProfile"));
const ChangePassword = lazy(() => import("~/features/student/pages/Profile/ChangePassword"));
const SavedCourse = lazy(() => import("~/features/student/pages/Profile/SavedCourse"));
const SavedQuestions = lazy(() => import("~/features/student/pages/Profile/SavedQuestions"));
const ReceivedItems = lazy(() => import("~/features/student/pages/Profile/ReceivedItems"));

export const userRoutes = {
    path: ROUTE_PATHS.user.profile,
    element: <StudentLayout />,
    children: [
        {
            index: true,
            element: <Profile />,
        },
        {
            path: "my-courses",
            element: <MyCourses />,
        },
        {
            path: "edit",
            element: <EditProfile />,
        },
        {
            path: "change-password",
            element: <ChangePassword />,
        },
        {
            path: "saved-courses",
            element: <SavedCourse />,
        },
        {
            path: "saved-questions",
            element: <SavedQuestions />,
        },
        {
            path: "received-items",
            element: <ReceivedItems />,
        },
    ],
};
