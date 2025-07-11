import * as yup from "yup";

export const editProfileSchema = yup.object().shape({
    full_name: yup.string().required("Họ và tên không được để trống"),
    gender: yup
        .string()
        .oneOf(["male", "female", "other"], "Giới tính không hợp lệ")
        .required("Giới tính không được để trống"),
    birth_year: yup
        .number()
        .typeError("Năm sinh phải là số")
        .min(1900, "Năm sinh không hợp lệ")
        .max(new Date().getFullYear(), "Năm sinh không hợp lệ")
        .required("Năm sinh không được để trống"),
    facebook_link: yup.string().url("Link Facebook không hợp lệ").required("Link Facebook không được để trống"),
    city: yup.string().required("Tỉnh thành không được để trống"),
    school: yup.string().required("Trường học không được để trống"),
});
