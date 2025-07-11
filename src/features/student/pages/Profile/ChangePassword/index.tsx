import React from "react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAuth } from "~/hooks/useAuth";
import { changePasswordSchema } from "./changePasswordSchema";
import ProfileContentLayout from "../layout/ProfileContentLayout";
import InputPassword from "../../../components/Form/InputPassword";
import Loading from "~/components/Loading";
import apiPrivate from "~/utils/apis/privateApi";

type ChangePasswordFormData = {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
};

const ChangePassword = () => {
    const { auth } = useAuth();
    const profile = auth.user;
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<ChangePasswordFormData>({
        resolver: yupResolver(changePasswordSchema),
        defaultValues: {
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
    });

    // Mutation dùng react-query
    const mutation = useMutation({
        mutationFn: (data: ChangePasswordFormData) => apiPrivate.post("/change-password", data),
        onSuccess: () => {
            toast.success("Đổi mật khẩu thành công!");
            reset();
        },
        onError: (error: any) => {
            if (error?.response?.data?.message) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Đổi mật khẩu thất bại!");
            }
        },
    });

    const onSubmit = (data: ChangePasswordFormData) => {
        mutation.mutate(data);
    };

    const handleCancel = () => {
        reset();
    };

    return (
        <section className="min-h-screen">
            {mutation.isPending && <Loading />}
            <ProfileContentLayout title="Thay đổi mật khẩu">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-8 flex w-full max-w-[500px] flex-col gap-5">
                        <div className="w-full">
                            <div className="mb-1 flex items-end justify-between gap-4">
                                <label htmlFor="oldPassword" className="relative w-fit shrink-0 text-xs">
                                    Mật khẩu cũ
                                    <span className="text-md absolute -top-1 -right-3 text-red-500">*</span>
                                </label>
                            </div>
                            <InputPassword
                                placeholder="Mật khẩu cũ"
                                id="oldPassword"
                                {...register("oldPassword")}
                                error={errors.oldPassword?.message}
                            />
                        </div>
                        <div className="w-full">
                            <div className="mb-1 flex items-end justify-between gap-4">
                                <label htmlFor="newPassword" className="relative w-fit shrink-0 text-xs">
                                    Mật khẩu mới
                                    <span className="text-md absolute -top-1 -right-3 text-red-500">*</span>
                                </label>
                            </div>
                            <InputPassword
                                placeholder="Mật khẩu mới"
                                id="newPassword"
                                {...register("newPassword")}
                                error={errors.newPassword?.message}
                            />
                        </div>
                        <div className="w-full">
                            <div className="mb-1 flex items-end justify-between gap-4">
                                <label htmlFor="confirmPassword" className="relative w-fit shrink-0 text-xs">
                                    Xác nhận lại mật khẩu
                                    <span className="text-md absolute -top-1 -right-3 text-red-500">*</span>
                                </label>
                            </div>
                            <InputPassword
                                placeholder="Xác nhận lại mật khẩu"
                                id="confirmPassword"
                                {...register("confirmPassword")}
                                error={errors.confirmPassword?.message}
                            />
                        </div>
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

export default ChangePassword;
