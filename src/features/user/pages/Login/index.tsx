import React from "react";
import Input from "../../components/Form/Input";
import InputPassword from "../../components/Form/InputPassword";
import Button from "../../components/Form/Button";
import { Link } from "react-router-dom";
import { ROUTE_PATHS } from "~/router/routePaths";

const Login = () => {
    return (
        <section className="min-h-screen rounded-2xl bg-[#FDFDFD] max-xl:pt-12 xl:flex xl:items-center xl:justify-center">
            <div className="text-secondary-typo flex w-full px-6 md:px-20">
                <section className="hidden flex-1 pr-32 xl:block">
                    <h2 className="mb-2 text-4xl font-bold opacity-90">Chào mừng trở lại</h2>
                    <img src="/assets/images/common/study.png" alt="" className="w-full object-cover" />
                </section>
                <section className="flex-1 xl:border-l-2 xl:border-[#e5e7eb] xl:pl-32">
                    <h3 className="text-center text-xl font-semibold uppercase">Đăng nhập</h3>
                    <form className="flex-center mt-6 mb-10 flex w-full flex-col">
                        <div className="mb-10 flex w-full flex-col gap-6">
                            <div className="relative text-[13.5px]">
                                <div className="mb-1.5 flex items-end justify-between">
                                    <label htmlFor="username" className="relative w-fit">
                                        Tên tài khoản
                                    </label>
                                </div>
                                <Input placeholder="Tên tài khoản" id="username" name="username" />
                            </div>
                            <div className="relative text-sm">
                                <div className="mb-1.5 flex items-end justify-between">
                                    <label htmlFor="password" className="relative w-fit">
                                        Mật khẩu
                                    </label>
                                </div>
                                <InputPassword placeholder="Mật khẩu" id="password" type="password" name="password" />
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
    );
};

export default Login;
