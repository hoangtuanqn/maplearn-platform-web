import { createContext } from "react";
import { User } from "../types/user.type";

export interface AuthContextType {
    user: User | null;
    login: (userData: User) => void;
    logout: () => void;
}

// Chỉ tạo context, KHÔNG export component ở đây
export const AuthContext = createContext<AuthContextType>({
    user: null,
    login: () => {},
    logout: () => {},
});
