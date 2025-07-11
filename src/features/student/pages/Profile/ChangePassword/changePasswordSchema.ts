import * as yup from "yup";

export const changePasswordSchema = yup.object({
    oldPassword: yup.string().required("Vui lòng nhập mật khẩu cũ"),
    newPassword: yup.string().min(6, "Mật khẩu mới phải có ít nhất 6 ký tự").required("Vui lòng nhập mật khẩu mới"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("newPassword")], "Mật khẩu xác nhận không khớp")
        .required("Vui lòng xác nhận lại mật khẩu"),
});
