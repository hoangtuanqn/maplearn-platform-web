import axios from "axios";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Form/Input";
import InputPassword from "../../components/Form/InputPassword";
import Button from "../../components/Form/Button";
import Loading from "~/components/Loading";
import { ROUTE_PATHS } from "~/router/routePaths";
import { FormLoginValues } from "../../types/auth.type";
import { useAuth } from "~/hooks/useAuth";
import useDocumentTitle from "~/hooks/useDocumentTitle";
import apiPublic from "~/utils/apis/publicApi";
import { loginSchema } from "./login.schema";

const Login = () => {
    useDocumentTitle("Đăng nhập");
    const { login } = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormLoginValues>({
        mode: "onBlur",
        resolver: yupResolver(loginSchema),
    });
    // Khai báo mutation
    const loginMutation = useMutation({
        mutationFn: (data: FormLoginValues) => apiPublic.post("/login", data),

        onSuccess: (res) => {
            login(res.data.data);
            toast.success("Đăng nhập thành công!");
            navigate("/");
        },

        onError: (error) => {
            if (axios.isAxiosError(error)) {
                if (error.code === "ERR_NETWORK") {
                    toast.error("Không thể kết nối tới server!");
                } else {
                    toast.error("Thông tin đăng nhập không hợp lệ!");
                }
            } else {
                toast.error("Đã xảy ra lỗi không xác định!");
            }
        },
    });

    const onSubmit: SubmitHandler<FormLoginValues> = async (data) => {
        loginMutation.mutate(data);
    };
    return (
        <>
            {loginMutation.isPending && <Loading />}
            <section className="min-h-screen rounded-2xl bg-[#FDFDFD] py-10 max-xl:pt-12 xl:flex xl:items-center xl:justify-center">
                <div className="text-secondary-typo flex w-full px-6 md:px-20">
                    <section className="hidden flex-1 pr-32 xl:block">
                        <h2 className="mb-2 text-4xl font-bold opacity-90">Chào mừng trở lại</h2>
                        <img src="/assets/images/common/study.png" alt="" className="w-full object-cover" />
                    </section>
                    <section className="flex-1 xl:border-l-2 xl:border-[#e5e7eb] xl:pl-32">
                        <h3 className="text-center text-xl font-semibold uppercase">Đăng nhập</h3>
                        <form className="flex-center mt-6 mb-10 flex w-full flex-col" onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-10 flex w-full flex-col gap-6">
                                <div className="relative text-[13.5px]">
                                    <div className="mb-1.5 flex items-end justify-between">
                                        <label htmlFor="username" className="relative w-fit">
                                            Tên tài khoản <span className="text-red-400">*</span>
                                        </label>
                                    </div>
                                    <Input
                                        placeholder="Tên tài khoản"
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
                                        error={errors?.password?.message}
                                    />
                                </div>
                            </div>
                            <Button type="submit">Đăng nhập</Button>
                        </form>
                        <div className="text-center text-sm">
                            <span>Chưa có tài khoản? </span>
                            <Link className="hover:text-gray-900" to={ROUTE_PATHS.register}>
                                Đăng ký
                            </Link>
                        </div>
                    </section>
                </div>
            </section>
        </>
    );
};

export default Login;
