import { lazy } from "react";
import { ROUTE_PATHS } from "./routePaths";
import StudentLayout from "~/layouts/StudentLayout";
import Register from "~/features/student/pages/Register";
import Home from "~/features/student/pages/Home";
import AuthenticationSocial from "~/features/student/pages/Login/AuthenticationSocial";
import Posts from "~/features/student/pages/Posts";
import ExamOnline from "~/features/student/pages/Onlineexam";
import ForgotPassword from "~/features/student/pages/ForgotPassword";
import ResetPassword from "~/features/student/pages/ResetPassword";
import Documents from "~/features/student/pages/Documents";
import DocsRepository from "~/features/student/pages/DocsRepository";
import DocsRepositoryDetails from "~/features/student/pages/DocsRepoDetails";
import DocsDetails from "~/features/student/pages/DocsDetails";

// const Home = lazy(() => import("~/features/student/pages/Home"));
const NotFound = lazy(() => import("~/features/student/pages/NotFound"));
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
                path: ROUTE_PATHS.forgotPassword,
                element: <ForgotPassword />,
            },
            {
                path: ROUTE_PATHS.resetPassword,
                element: <ResetPassword />,
            },
            {
                path: ROUTE_PATHS.authenticationSocial,
                element: <AuthenticationSocial />,
            },
            {
                path: ROUTE_PATHS.register,
                element: <Register />,
            },
            {
                path: ROUTE_PATHS.notFound,
                element: <NotFound />,
            },
            {
                path: ROUTE_PATHS.posts,
                element: <Posts />,
            },
            {
                path: ROUTE_PATHS.examOnline,
                element: <ExamOnline />,
            },
            {
                path: ROUTE_PATHS.documents,
                element: <Documents />,
            },
            {
                path: ROUTE_PATHS.docsRepository,
                element: <DocsRepository />,
            },
            {
                path: ROUTE_PATHS.docsRepositoryDetails,
                element: <DocsRepositoryDetails />,
            },
            {
                path: ROUTE_PATHS.docsDetails,
                element: <DocsDetails />,
            },
        ],
    },
];
