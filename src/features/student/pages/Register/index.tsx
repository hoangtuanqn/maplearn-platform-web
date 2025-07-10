import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Form/Input";
import { ROUTE_PATHS } from "~/router/routePaths";
import InputPassword from "../../components/Form/InputPassword";
import Button from "../../components/Form/Button";
import { FormRegisterValues } from "../../types/auth.type";
import { toast } from "sonner";
import { useState } from "react";
import { useAuth } from "~/hooks/useAuth";
import axios from "axios";
import Loading from "~/components/Loading";
import useDocumentTitle from "~/hooks/useDocumentTitle";
import apiPublic from "~/utils/apis/publicApi";
import { registerSchema } from "./register.schema";
import useCapsLockWarning from "~/hooks/useCapsLockWarning";
import LoginGoogle from "../../components/Button/LoginGoogle";
import LoginFacebook from "../../components/Button/LoginFacebook";

const Register = () => {
    useDocumentTitle("Tạo tài khoản");
    const { login } = useAuth();
    const navigate = useNavigate();
    const { isCapsLockOn, handleKeyEvent, handleFocus, handleBlur } = useCapsLockWarning();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormRegisterValues>({
        mode: "onBlur",
        resolver: yupResolver(registerSchema),
    });
    const onSubmit: SubmitHandler<FormRegisterValues> = async (data) => {
        setIsLoading(true);
        try {
            const res = await apiPublic.post(`/auth/register`, data, {
                withCredentials: true,
            });
            login(res.data.data);
            toast.success("Tạo tài khoản thành công!");
            navigate("/");
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                if (error.code === "ERR_NETWORK") {
                    toast.error("Không thể kết nối tới server!");
                    return;
                }
                const errors = error.response?.data?.errors;
                for (const key in errors) {
                    return toast.error(`${errors?.[key]}`);
                }
            } else {
                toast.error("Đã xảy ra lỗi không xác định!");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {isLoading && <Loading />}

            <section className="min-h-screen rounded-2xl bg-[#FDFDFD] py-10 max-xl:pt-12 xl:flex xl:items-center xl:justify-center">
                <div className="text-secondary-typo flex w-full px-6 md:px-20">
                    <section className="hidden flex-1 pr-32 xl:block">
                        <h2 className="mb-2 text-4xl font-bold opacity-90">Tạo tài khoản</h2>
                        <p className="text-md w-80 opacity-80">
                            Học tập và giao lưu với hàng triệu học viên trên mọi miền đất nước.
                        </p>
                        <img src="/assets/images/common/study.png" alt="" className="w-full object-cover" />
                    </section>
                    <section className="flex-1 xl:border-l-2 xl:border-[#e5e7eb] xl:pl-32">
                        <h3 className="text-center text-xl font-semibold uppercase">Tạo tài khoản</h3>
                        <form className="flex-center my-6 flex w-full flex-col" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-10 flex w-full flex-col gap-6">
                                <div className="relative text-[13.5px]">
                                    <div className="mb-1.5 flex items-end justify-between">
                                        <label htmlFor="full_name" className="relative w-fit">
                                            Họ và tên <span className="text-red-400">*</span>
                                        </label>
                                    </div>
                                    <Input
                                        placeholder="Nguyễn Văn A"
                                        id="full_name"
                                        {...register("full_name")}
                                        error={errors?.full_name?.message}
                                    />
                                </div>
                                <div className="relative text-[13.5px]">
                                    <div className="mb-1.5 flex items-end justify-between">
                                        <label htmlFor="email" className="relative w-fit">
                                            Email của bạn <span className="text-red-400">*</span>
                                        </label>
                                    </div>
                                    <Input
                                        placeholder="phamhoangtuanqn@fpt.edu.vn"
                                        id="email"
                                        {...register("email")}
                                        error={errors?.email?.message}
                                    />
                                </div>
                                <div className="relative text-[13.5px]">
                                    <div className="mb-1.5 flex items-end justify-between">
                                        <label htmlFor="username" className="relative w-fit">
                                            Tên tài khoản <span className="text-red-400">*</span>
                                        </label>
                                    </div>
                                    <Input
                                        placeholder="nguyenvana"
                                        id="username"
                                        {...register("username")}
                                        error={errors?.username?.message}
                                    />
                                </div>
                                <div className="relative text-sm">
                                    <div className="mb-1.5 flex items-end justify-between">
                                        <label htmlFor="password" className="relative w-fit">
                                            Mật khẩu <span className="text-red-400">*</span>
                                        </label>
                                    </div>
                                    <InputPassword
                                        placeholder="Mật khẩu"
                                        id="password"
                                        type="password"
                                        {...register("password")}
                                        onKeyDown={handleKeyEvent}
                                        onKeyUp={handleKeyEvent}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        error={errors?.password?.message}
                                    />
                                    {isCapsLockOn && (
                                        <span className="mt-2 block text-sm text-yellow-500">
                                            Chú ý: Bạn đang bật Caps Lock
                                        </span>
                                    )}
                                </div>
                                <div className="relative text-sm">
                                    <div className="mb-1.5 flex items-end justify-between">
                                        <label htmlFor="confirmPassword" className="relative w-fit">
                                            Xác nhận lại mật khẩu <span className="text-red-400">*</span>
                                        </label>
                                    </div>
                                    <InputPassword
                                        placeholder="Xác nhận lại mật khẩu"
                                        id="confirmPassword"
                                        type="password"
                                        {...register("confirmPassword")}
                                        error={errors?.confirmPassword?.message}
                                    />
                                </div>
                            </div>
                            <Button type="submit">Tạo tài khoản</Button>
                        </form>
                        <div className="flex flex-col gap-2">
                            <div className="t1-flex-center gap-2 text-gray-500">
                                <span className="block h-[1.5px] w-20 bg-black/40"></span> <span>hoặc</span>
                                <span className="block h-[1.5px] w-20 bg-black/40"></span>
                            </div>
                            <div className="mt-4 flex flex-col justify-center gap-2 text-[12px] sm:flex-row sm:text-sm">
                                <LoginGoogle />
                                <LoginFacebook />
                            </div>
                        </div>
                        <div className="mt-10 text-center text-sm">
                            <span>Bạn đã có tài khoản? </span>
                            <Link className="hover:text-gray-900" to={ROUTE_PATHS.login}>
                                Đăng nhập
                            </Link>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};

export default Register;
