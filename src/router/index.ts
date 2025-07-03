import { publicRoutes } from "./PublicRoutes";
import { userRoutes } from "./UserRoutes";
// import { adminRoutes } from "./AdminRoutes";

export const routes = [
    ...publicRoutes,
    userRoutes,
    // adminRoutes,
];
