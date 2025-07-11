import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import FormLogin from "./FormLogin";
import OtpVerification from "./OtpVerification";
import { Verify2faType } from "./login.type";
const Login = () => {
    const [verify2fa, setVerify2fa] = useState<Verify2faType>({
        required: Cookies.get("token_2fa") ? true : false,
        token: Cookies.get("token_2fa") || null,
    });
    useEffect(() => {
        Cookies.remove("token_2fa");
    }, []);

    return (
        <>
            <section className="min-h-screen rounded-2xl bg-[#FDFDFD] py-10 max-xl:pt-12 xl:flex xl:items-center xl:justify-center">
                <div className="text-secondary-typo flex w-full px-6 md:px-20">
                    <section className="hidden flex-1 pr-32 xl:block">
                        <h2 className="mb-2 text-4xl font-bold opacity-90">Chào mừng trở lại</h2>
                        <img src="/assets/images/common/study.png" alt="" className="w-full object-cover" />
                    </section>
<<<<<<< Updated upstream
                    <section className="t1-flex-center flex-1 xl:border-l-2 xl:border-[#e5e7eb] xl:pl-32">
                        {verify2fa.required ? (
                            <OtpVerification verify2fa={verify2fa} />
                        ) : (
                            <FormLogin setVerify2fa={setVerify2fa} />
                        )}
=======
                    <section className="flex-1 xl:border-l-2 xl:border-[#e5e7eb] xl:pl-32">
                        <h3 className="text-center text-xl font-semibold uppercase">Đăng nhập</h3>
                        <form
                            className="t1-flex-center mt-6 mb-10 flex w-full flex-col"
                            onSubmit={handleSubmit(onSubmit)}
                        >
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
>>>>>>> Stashed changes
                    </section>
                </div>
            </section>
        </>
    );
};

export default Login;
