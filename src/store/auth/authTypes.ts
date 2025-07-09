import { User } from "~/types/user.type";

export interface AuthState {
    user: User | null;
}
