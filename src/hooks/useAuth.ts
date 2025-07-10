import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "~/store";
import { logout, setCredentials } from "~/store/auth/authSlice";
import { User } from "~/types/user.type";
import privateApi from "~/utils/apis/privateApi";

export function useAuth() {
    const getInfoMe = useMutation({
        mutationFn: async () => {
            const res = await privateApi.post("/auth/me");
            return res.data?.data as User;
        },
        onSuccess: (user) => {
            login({ user });
        },
        onError: (error) => {
            console.log("Fail fetch get info me: >>", error);
            logoutUser();
        },
    });
    const dispatch = useDispatch<AppDispatch>();
    const auth = useSelector((state: RootState) => state.auth);

    const login = (data: { user: User }) => {
        localStorage.setItem("user", JSON.stringify(data.user));
        dispatch(setCredentials(data));
    };

    const logoutUser = () => {
        dispatch(logout());
        localStorage.removeItem("user");
    };

    return {
        auth,
        login,
        getInfoMe,
        logout: logoutUser,
    };
}
