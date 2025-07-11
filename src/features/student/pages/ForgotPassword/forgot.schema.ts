import * as yup from "yup";
export const forgotSchema = yup.object({
    email: yup
        .string()
        .required("Vui lòng nhập địa chỉ email của bạn")
        .email("Email không hợp lệ")
        .max(255, "Chỉ được nhập tối đa 255 kí tự"),
});
