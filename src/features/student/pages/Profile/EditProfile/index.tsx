import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuth } from "~/hooks/useAuth";
import Loading from "~/components/Loading";
import apiPrivate from "~/utils/apis/privateApi";
import { editProfileSchema } from "./editProfileSchema";
import ProfileContentLayout from "../layout/ProfileContentLayout";
import Input from "~/features/student/components/Form/Input";
import Button from "~/features/student/components/Form/Button";
import { getCharacterName } from "~/utils/hepler";
import { useEffect } from "react";
import { useUnsavedChangesWarning } from "~/hooks/useUnsavedChangesWarning";
import Label from "~/features/student/components/Form/Label";

const genderOptions = [
    { value: "male", label: "Nam" },
    { value: "female", label: "Nữ" },
    { value: "other", label: "Chưa xác định" },
];

type EditProfileForm = {
    full_name: string;
    gender: "male" | "female" | "other";
    birth_year: number;
    facebook_link: string;
    city: string;
    school: string;
};

const EditProfile = () => {
    // Không dùng => Cơ chế Memory của React 19
    "use no memo";
    const { auth } = useAuth();
    const profile = auth.user;

    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
        reset,
    } = useForm<EditProfileForm>({
        resolver: yupResolver(editProfileSchema),
        defaultValues: {
            full_name: profile?.full_name || "",
            gender: (profile?.gender as EditProfileForm["gender"]) || "male",
            birth_year: profile?.birth_year || 2000,
            facebook_link: profile?.facebook_link || "",
            city: profile?.city || "",
            school: profile?.school || "",
        },
    });

    const mutation = useMutation({
        mutationFn: (data: EditProfileForm) => apiPrivate.post("/edit-profile", data),
        onSuccess: () => {
            toast.success("Cập nhật thông tin thành công!");
        },
        onError: () => {
            toast.error("Cập nhật thông tin thất bại!");
        },
    });

    const onSubmit = (data: EditProfileForm) => {
        mutation.mutate(data);
    };

    // Cảnh báo người dùng chưa lưu và tắt tab
    useUnsavedChangesWarning(isDirty);

    useEffect(() => {
        reset(auth.user as EditProfileForm);
    }, [reset, auth.user]);

    return (
        <section className="min-h-screen">
            {mutation.isPending && <Loading />}
            <ProfileContentLayout title="Chỉnh sửa thông tin">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-8 flex w-full max-w-[500px] flex-col gap-4">
                        {/* Avatar */}
                        <div className="relative mx-auto mb-8 w-fit">
                            <div
                                className="flex items-center justify-center rounded-full bg-gradient-to-b from-[#dadada] to-[#bebebe] font-medium text-white"
                                style={{ width: "7rem", height: "7rem", fontSize: "3.5rem" }}
                            >
                                {getCharacterName(profile?.full_name) || ""}
                            </div>
                        </div>

                        {/* Full name */}
                        <div className="w-full">
                            <Label id="full_name" required>
                                Họ và tên
                            </Label>
                            <Input
                                placeholder="Nhập họ và tên"
                                id="full_name"
                                {...register("full_name")}
                                error={errors.full_name?.message}
                            />
                        </div>

                        {/* Gender */}
                        <div className="w-full">
                            <Label id="gender">
                                Giới tính
                            </Label>
                            <select
                                id="gender"
                                {...register("gender")}
                                className="text-secondary-typo h-11 w-full rounded-xl bg-[#F2F5F9] px-4 outline-0"
                            >
                                {genderOptions.map((g) => (
                                    <option key={g.value} value={g.value}>
                                        {g.label}
                                    </option>
                                ))}
                            </select>

                            {errors.gender && <p className="mt-1 text-xs text-red-500">{errors.gender.message}</p>}
                        </div>

                        {/* Birth Year */}
                        <div className="w-full">
                            <Label id="birth_year">Năm sinh</Label>
                            <Input
                                placeholder="Nhập năm sinh"
                                id="birth_year"
                                type="number"
                                {...register("birth_year")}
                                error={errors.birth_year?.message}
                            />
                        </div>

                        {/* Facebook */}
                        <div className="w-full">
                            <Label id="facebook_link">Facebook</Label>
                            <Input
                                placeholder="Nhập link Facebook"
                                id="facebook_link"
                                {...register("facebook_link")}
                                error={errors.facebook_link?.message}
                            />
                        </div>

                        {/* City */}
                        <div className="w-full">
                            <Label id="city">Tỉnh thành</Label>
                            <Input
                                placeholder="Nhập tỉnh thành"
                                id="city"
                                {...register("city")}
                                error={errors.city?.message}
                            />
                        </div>

                        {/* School */}
                        <div className="w-full">
                            <Label id="school" required>
                                Trường học
                            </Label>
                            <Input
                                placeholder="Nhập trường học"
                                id="school"
                                {...register("school")}
                                error={errors.school?.message}
                            />
                        </div>
                    </div>

                    <div className="mb-5 flex w-full justify-start gap-2.5">
                        <Button className="!m-0 !w-fit" type="submit">
                            Cập nhật
                        </Button>
                        <button
                            type="button"
                            className="cursor-pointer rounded-xl border border-gray-300 px-8 hover:bg-slate-100"
                            onClick={() => reset()}
                        >
                            Bỏ thay đổi
                        </button>
                    </div>
                </form>
            </ProfileContentLayout>
        </section>
    );
};

export default EditProfile;
