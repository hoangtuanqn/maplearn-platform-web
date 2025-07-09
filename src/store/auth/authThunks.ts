import { User } from "~/types/user.type";
import { AppDispatch } from "../index";
import { setCredentials } from "./authSlice";

export const loadAuthFromLocalStorage = () => {
    return (dispatch: AppDispatch) => {
        const userJson = localStorage.getItem("user");
        if (userJson) {
            try {
                const user: User = JSON.parse(userJson);
                dispatch(setCredentials({ user }));
            } catch {
                console.error("Failed to parse user from localStorage");
            }
        }
    };
};
