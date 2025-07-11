import * as yup from "yup";

export const editProfileSchema = yup.object().shape({
    full_name: yup.string().required("Vui lòng nhập họ và tên"),
    gender: yup.string().oneOf(["male", "female", "other"], "Giới tính không hợp lệ").default("other"),
    birth_year: yup
        .number()
        .typeError("Năm sinh phải là số")
        .min(1900, "Năm sinh không hợp lệ")
        .max(new Date().getFullYear(), "Năm sinh không hợp lệ")
        .default(2000),
    facebook_link: yup.string().url("Link Facebook không hợp lệ").default(""),
    city: yup.string().default(""),
    school: yup.string().default(""),
});
