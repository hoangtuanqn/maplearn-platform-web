import { useMutation } from "@tanstack/react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import useDocumentTitle from "~/hooks/useDocumentTitle";
import apiPublic from "~/utils/apis/publicApi";
import { forgotSchema } from "./forgot.schema";
import { toast } from "sonner";
import axios from "axios";
import Loading from "~/components/Loading";
interface ForgotPasswordType {
    email: string;
}
const ForgotPassword = () => {
    useDocumentTitle("Quên mật khẩu");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ForgotPasswordType>({
        mode: "onBlur",
        resolver: yupResolver(forgotSchema),
    });
    // Khai báo mutation
    const forgotPassword = useMutation({
        mutationFn: (data: ForgotPasswordType) => apiPublic.post("/auth/forgot-password", data),

        onSuccess: (res) => {
            toast.success(
                res.data.message ||
                    "Hãy kiểm tra email của bạn. Nếu địa chỉ đã đăng ký, chúng tôi sẽ gửi liên kết đặt lại mật khẩu ngay lập tức.",
            );
        },

        onError: (error) => {
            if (axios.isAxiosError(error)) {
                toast.error(error?.response?.data?.message || "Đã xảy ra lỗi trong quá trình đặt lại mật khẩu!");
            }
        },
    });

    const onSubmit: SubmitHandler<ForgotPasswordType> = async (data) => {
        forgotPassword.mutate(data);
    };
    return (
        <>
            {forgotPassword.isPending && <Loading />}
            <section className="min-h-screen rounded-2xl bg-[#FDFDFD] py-10 max-xl:pt-12 xl:flex xl:items-center xl:justify-center">
                <div className="text-secondary-typo flex w-full px-6 md:px-20">
                    <section className="hidden flex-1 pr-32 xl:block">
                        <h2 className="mb-2 text-4xl font-bold opacity-90">Quên mật khẩu</h2>
                        <img src="/assets/images/common/study.png" alt="" className="w-full object-cover" />
                    </section>
                    <section className="flex-1 xl:border-l-2 xl:border-[#e5e7eb] xl:pl-32">
                        <h3 className="text-center text-xl font-semibold uppercase">Quên mật khẩu</h3>
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
                                        id="email"
                                        {...register("email")}
                                        error={errors?.email?.message}
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

export default ForgotPassword;
