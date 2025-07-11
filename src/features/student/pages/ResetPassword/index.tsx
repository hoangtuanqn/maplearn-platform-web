import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import Input from "../../components/Form/Input";
import InputPassword from "../../components/Form/InputPassword";
import Button from "../../components/Form/Button";
import useDocumentTitle from "~/hooks/useDocumentTitle";
import apiPublic from "~/utils/apis/publicApi";
import { resetSchema } from "./reset.schema";
import { ROUTE_PATHS } from "~/router/routePaths";
import Loading from "~/components/Loading";
import { toast } from "sonner";
import axios from "axios";

interface ResetPasswordType {
    email: string;
    password: string;
    password_confirmation: string;
}

const ResetPassword = () => {
    useDocumentTitle("Đặt lại mật khẩu");
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    // Parse token và email từ query param
    const config = useMemo(() => {
        try {
            const tokenParam = searchParams.get("token");
            return tokenParam ? JSON.parse(atob(tokenParam)) : null;
        } catch {
            return null;
        }
    }, [searchParams]);

    // Nếu không có token → quay về ForgotPassword
    useEffect(() => {
        if (!config?.token || !config?.email) {
            navigate(ROUTE_PATHS.forgotPassword);
        }
    }, [config, navigate]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ResetPasswordType>({
        mode: "onBlur",
        resolver: yupResolver(resetSchema),
        defaultValues: {
            email: config?.email ?? "Không xác định",
        },
    });

    const resetMutation = useMutation({
        mutationFn: (data: ResetPasswordType) =>
            apiPublic.post("/auth/reset-password", {
                ...data,
                token: config?.token,
            }),
        onSuccess: () => {
            // Ví dụ: Hiển thị toast rồi điều hướng về login
            toast.success("Bạn đã đặt lại mật khẩu thành công!");
            navigate(ROUTE_PATHS.login);
        },
        onError: (error) => {
            if (axios.isAxiosError(error)) {
                toast.error(error?.response?.data?.message || "Đã xảy ra lỗi trong quá trình đặt lại mật khẩu!");
                // console.error("Reset password failed", error);
            }
        },
    });

    const onSubmit: SubmitHandler<ResetPasswordType> = (data) => {
        resetMutation.mutate(data);
    };

    return (
        <>
            {resetMutation.isPending && <Loading />}
            <section className="min-h-screen rounded-2xl bg-[#FDFDFD] py-10 max-xl:pt-12 xl:flex xl:items-center xl:justify-center">
                <div className="text-secondary-typo flex w-full px-6 md:px-20">
                    <section className="hidden flex-1 pr-32 xl:block">
                        <h2 className="mb-2 text-4xl font-bold opacity-90">Đặt lại mật khẩu</h2>
                        <img src="/assets/images/common/study.png" alt="" className="w-full object-cover" />
                    </section>
                    <section className="flex-1 xl:border-l-2 xl:border-[#e5e7eb] xl:pl-32">
                        <h3 className="text-center text-xl font-semibold uppercase">Đặt lại mật khẩu</h3>
                        <form className="flex-center my-6 flex w-full flex-col" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-5 flex w-full flex-col gap-6">
                                <div className="relative text-[13.5px]">
                                    <div className="mb-1.5 flex items-end justify-between">
                                        <label htmlFor="email" className="relative w-fit">
                                            Địa chỉ Email <span className="text-red-400">*</span>
                                        </label>
                                    </div>
                                    <Input
                                        placeholder="Địa chỉ Email"
                                        {...register("email")}
                                        error={errors?.email?.message}
                                        disabled
                                    />
                                </div>
                                <div className="relative text-[13.5px]">
                                    <div className="mb-1.5 flex items-end justify-between">
                                        <label htmlFor="password" className="relative w-fit">
                                            Mật khẩu mới <span className="text-red-400">*</span>
                                        </label>
                                    </div>
                                    <InputPassword
                                        placeholder="Mật khẩu mới"
                                        id="password"
                                        type="password"
                                        {...register("password")}
                                        error={errors?.password?.message}
                                    />
                                </div>
                                <div className="relative text-[13.5px]">
                                    <div className="mb-1.5 flex items-end justify-between">
                                        <label htmlFor="password_confirmation" className="relative w-fit">
                                            Nhập lại mật khẩu <span className="text-red-400">*</span>
                                        </label>
                                    </div>
                                    <InputPassword
                                        placeholder="Nhập lại mật khẩu"
                                        id="password_confirmation"
                                        type="password"
                                        {...register("password_confirmation")}
                                        error={errors?.password_confirmation?.message}
                                    />
                                </div>
                            </div>
                            <Button type="submit">Đặt lại mật khẩu</Button>
                        </form>
                    </section>
                </div>
            </section>
        </>
    );
};

export default ResetPassword;
