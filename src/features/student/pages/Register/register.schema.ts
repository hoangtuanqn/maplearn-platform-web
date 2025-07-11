import * as yup from "yup";
export const registerSchema = yup.object({
    full_name: yup.string().required("Vui lòng nhập họ và tên").max(255, "Chỉ được nhập tối đa 255 kí tự"),
    email: yup
        .string()
        .required("Vui lòng nhập email")
        .email("Email không hợp lệ")
        .max(255, "Chỉ được nhập tối đa 255 kí tự"),
    username: yup.string().required("Vui lòng nhập tên tài khoản").max(255, "Chỉ được nhập tối đa 255 kí tự"),
    password: yup
        .string()
        .required("Vui lòng nhập mật khẩu")
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
        .max(255, "Chỉ được nhập tối đa 255 kí tự"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Mật khẩu xác nhận không khớp")
        .required("Vui lòng xác nhận lại mật khẩu"),
});
