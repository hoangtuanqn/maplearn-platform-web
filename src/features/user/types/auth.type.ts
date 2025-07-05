// Interface Form login
export interface FormLoginValues {
    username: string;
    password: string;
}
// Interface Form Register
export interface FormRegisterValues extends FormLoginValues {
    fullName: string;
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
}
