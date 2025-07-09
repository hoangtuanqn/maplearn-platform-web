import { Outlet } from "react-router-dom";

interface ProtectedRouteProps {
    allowedRoles?: ("ADMIN" | "USER")[];
}

export default function ProtectedRoute({ allowedRoles }: ProtectedRouteProps) {
    // const { isAuthenticated, userRole } = useAuth();

    // if (!isAuthenticated) {
    //     return <Navigate to="/login" replace />;
    // }

    // if (allowedRoles && !allowedRoles.includes(userRole)) {q
    //     return <Navigate to="/403" replace />; // không có quyền
    // }

    return <Outlet />;
}
