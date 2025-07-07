import { ReactNode, useCallback, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { User } from "../types/user.type";

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch {
                localStorage.removeItem("user");
            }
        }
    }, []);

    const login = useCallback((userData: User) => {
        setUser(userData);
        // console.log("Auth provider nhận >> : ", userData);

        localStorage.setItem("user", JSON.stringify(userData));
    }, []);

    const logout = useCallback(() => {
        setUser(null);
        localStorage.removeItem("user");
    }, []);

    return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
}
