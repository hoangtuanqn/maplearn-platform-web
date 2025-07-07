export interface User {
    id: number;
    username: string;
    full_name: string;
    email: string;
    phone_number: string | null;
    gender: "male" | "female" | "other";
    avatar: string | null;
    birth_year: number | null;
    facebook_link: string | null;
    school: string | null;
    city: string | null;
    current_balance: string;
    total_deposit: string;
    role: "admin" | "teacher" | "student";
    banned: boolean;
    email_verified_at: string | null;
    remember_token?: string | null;
    created_at: string;
    updated_at: string;
}
