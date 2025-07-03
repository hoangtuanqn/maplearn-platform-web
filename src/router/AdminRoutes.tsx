// import { lazy } from "react";
// import { ROUTE_PATHS } from "./routePaths";
// import ProtectedRoute from "./ProtectedRoute";
// import AdminLayout from "~/layouts/AdminLayout";

// const AdminDashboard = lazy(() => import("~/features/admin/pages/Dashboard"));
// const AdminUsers = lazy(() => import("~/features/admin/pages/Users"));

// export const adminRoutes = {
//   path: ROUTE_PATHS.admin.dashboard.slice(0, 6), // /admin
//   element: <ProtectedRoute allowedRoles={["ADMIN"]} />, // Chỉ admin
//   children: [
//     {
//       index: true,
//       element: (
//         <AdminLayout>
//           <AdminDashboard />
//         </AdminLayout>
//       ),
//     },
//     {
//       path: "users",
//       element: (
//         <AdminLayout>
//           <AdminUsers />
//         </AdminLayout>
//       ),
//     },
//   ],
// };
