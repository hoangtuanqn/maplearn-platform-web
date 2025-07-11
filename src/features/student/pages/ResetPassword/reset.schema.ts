import * as yup from "yup";
export const resetSchema = yup.object({
    email: yup.string().required().email(),
    password: yup
        .string()
        .required("Vui lòng nhập mật khẩu")
        .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
        .max(255, "Chỉ được nhập tối đa 255 kí tự"),
    password_confirmation: yup
        .string()
        .oneOf([yup.ref("password")], "Mật khẩu xác nhận không khớp")
        .required("Vui lòng xác nhận lại mật khẩu"),
});
