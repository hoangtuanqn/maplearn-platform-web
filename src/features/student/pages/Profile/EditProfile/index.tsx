import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuth } from "~/hooks/useAuth";
import Input from "../../../components/Form/Input";
import Loading from "~/components/Loading";
import apiPrivate from "~/utils/apis/privateApi";
import { editProfileSchema } from "./editProfileSchema";
import { useEffect } from "react";
import ProfileContentLayout from "../layout/ProfileContentLayout";

const genderOptions = [
    { value: "male", label: "Nam" },
    { value: "female", label: "Nữ" },
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
    const { auth } = useAuth();
    const profile = auth.user;
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
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

    useEffect(() => {
        if (profile) {
            reset({
                full_name: profile.full_name || "",
                gender: (profile.gender as EditProfileForm["gender"]) || "male",
                birth_year: profile.birth_year || 2000,
                facebook_link: profile.facebook_link || "",
                city: profile.city || "",
                school: profile.school || "",
            });
        }
    }, [profile, reset]);

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

    const handleCancel = () => {
        reset();
    };

    return (
        <section className="min-h-screen">
            {mutation.isPending && <Loading />}
            <ProfileContentLayout title="Chỉnh sửa thông tin">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-8 flex w-full !max-w-[500px] flex-col gap-4">
                        <div className="relative mx-auto mb-8 w-fit">
                            <div
                                className="t1-flex-center flex shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#dadada] to-[#bebebe] font-medium text-white"
                                style={{ width: "7rem", height: "7rem", fontSize: "calc(3.5rem)" }}
                            >
                                {watch("full_name")?.substring(0, 1) || "A"}
                            </div>
                            <button
                                className="absolute right-0 bottom-0.5 w-fit cursor-pointer rounded-md bg-white pt-[1px] pl-[1px] opacity-90 hover:opacity-100"
                                type="button"
                            >
                                <svg fill="none" viewBox="0 0 24 24" className="size-7.5">
                                    <path
                                        fill="var(--secondary)"
                                        d="M16.185 2h-8.38c-3.64 0-5.81 2.17-5.81 5.81v8.37c0 3.65 2.17 5.82 5.81 5.82h8.37c3.64 0 5.81-2.17 5.81-5.81V7.81c.01-3.64-2.16-5.81-5.8-5.81Zm-5.24 15.51c-.29.29-.84.57-1.24.63l-2.46.35c-.09.01-.18.02-.27.02-.41 0-.79-.14-1.06-.41-.33-.33-.47-.81-.39-1.34l.35-2.46c.06-.41.33-.95.63-1.24l4.46-4.46a7.546 7.546 0 0 0 .6 1.29c.1.17.21.33.3.45.11.17.24.33.32.42.05.07.09.12.11.14.25.3.54.58.79.79.07.07.11.11.13.12.15.12.3.24.43.33.16.12.32.23.49.32.2.12.42.23.64.34.23.1.44.19.65.26l-4.48 4.45Zm6.42-6.42-.92.93a.31.31 0 0 1-.22.09c-.03 0-.07 0-.09-.01a6.202 6.202 0 0 1-4.23-4.23c-.03-.11 0-.23.08-.3l.93-.93c1.52-1.52 2.97-1.49 4.46 0 .76.76 1.13 1.49 1.13 2.25-.01.72-.38 1.44-1.14 2.2Z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <Input
                            placeholder="Họ và tên"
                            id="full_name"
                            {...register("full_name")}
                            error={errors.full_name?.message}
                            value={profile?.full_name}
                        />
                        <div className="w-full">
                            <div className="mb-1 flex items-end justify-between gap-4">
                                <label htmlFor="gender" className="relative w-fit shrink-0 text-sm">
                                    Giới tính
                                </label>
                            </div>
                            <div className="flex h-11 w-full items-center rounded-xl bg-[#F2F5F9]">
                                <select
                                    id="gender"
                                    className="text-secondary-typo h-full w-full rounded-xl bg-transparent px-4 outline-0"
                                    {...register("gender")}
                                >
                                    {genderOptions.map((g) => (
                                        <option key={g.value} value={g.value}>
                                            {g.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            {errors.gender && <p className="mt-1 text-xs text-red-500">{errors.gender.message}</p>}
                        </div>
                        <Input
                            placeholder="Năm sinh"
                            id="birth_year"
                            type="number"
                            {...register("birth_year")}
                            error={errors.birth_year?.message}
                        />
                        <Input
                            placeholder="Link Facebook"
                            id="facebook_link"
                            {...register("facebook_link")}
                            error={errors.facebook_link?.message}
                        />
                        <Input
                            placeholder="Tỉnh thành của bạn"
                            id="city"
                            {...register("city")}
                            error={errors.city?.message}
                        />
                        <Input
                            placeholder="Trường học của bạn"
                            id="school"
                            {...register("school")}
                            error={errors.school?.message}
                        />
                    </div>
                    <div className="mb-5 flex w-full justify-start gap-5">
                        <button
                            type="submit"
                            className="bg-primary flex items-center rounded-lg px-2.5 py-2 text-white hover:opacity-80"
                            disabled={mutation.isPending}
                        >
                            Cập nhật
                        </button>
                        <button
                            type="button"
                            className="rounded-lg border border-gray-300 px-2.5 hover:bg-slate-100"
                            onClick={handleCancel}
                        >
                            Huỷ
                        </button>
                    </div>
                </form>
            </ProfileContentLayout>
        </section>
    );
};

export default EditProfile;
