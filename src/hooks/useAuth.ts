import { useDispatch, useSelector } from "react-redux";
import { RootState } from "~/store";
import { logout, setCredentials } from "~/store/auth/authSlice";
import { User } from "~/types/user.type";

export function useAuth() {
    const dispatch = useDispatch();
    const auth = useSelector((state: RootState) => state.auth);

    const login = (data: { user: User }) => {
        dispatch(setCredentials(data));
        localStorage.setItem("user", JSON.stringify(data.user));
    };

    const logoutUser = () => {
        dispatch(logout());
        localStorage.removeItem("user");
    };

    return {
        auth,
        login,
        logout: logoutUser,
    };
}
