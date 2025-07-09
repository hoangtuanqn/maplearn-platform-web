
export const getGender = (gender: "male" | "female" | "other") => {
    switch (gender) {
        case "male":
            return "Nam";
        case "female":
            return "Nữ";
        case "other":
            return "Chưa xác định";
    }
};
