import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "~/router/routePaths";
import { AppDispatch, RootState } from "~/store";
import { logout, setCredentials } from "~/store/auth/authSlice";
import { User } from "~/types/user.type";
import privateApi from "~/utils/apis/privateApi";

export function useAuth() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const auth = useSelector((state: RootState) => state.auth);

    const login = (user: User) => {
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(setCredentials({ user }));
    };

    const getInfoMe = useMutation({
        mutationFn: async () => {
            const res = await privateApi.post("/auth/me");
            return res.data?.data as User;
        },
        onSuccess: login,
        onError: (error) => {
            console.error("Fail fetch get info me:", error);
            logoutUser.mutate(); // Gọi logout khi lỗi
        },
    });

    const logoutUser = useMutation({
        mutationFn: async () => {
            await privateApi.post("/auth/logout");
        },
        onSettled: () => {
            // luôn luôn xóa local + redux
            dispatch(logout());
            navigate(ROUTE_PATHS.login);
            localStorage.removeItem("user");
        },
        onError: (error) => {
            console.error("Fail to logout:", error);
        },
    });

    return {
        auth,
        login,
        getInfoMe,
        logout: logoutUser,
    };
}
