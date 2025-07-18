export const ROUTE_PATHS = {
    home: "/",
    login: "/sign-in",
    forgotPassword: "/forgot-password",
    resetPassword: "/reset-password",
    register: "/sign-up",
    authenticationSocial: "/authentication-social",
    posts: "/posts",
    examOnline: "/exam-online",

    user: {
        profile: "/student/profile",
        myCourses: "/student/profile/my-courses",
        editProfile: "/student/profile/edit",
        changePassword: "/student/profile/change-password",
        savedCourses: "/student/profile/saved-courses",
        savedQuestions: "/student/profile/saved-questions",
        receivedItems: "/student/profile/received-items",
    },
    admin: {
        dashboard: "/admin",
        users: "/admin/users",
    },
    notFound: "*",
    forbidden: "/403",
};
