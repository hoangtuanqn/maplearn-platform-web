import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { changePasswordSchema } from "./changePasswordSchema";
import ProfileContentLayout from "../layout/ProfileContentLayout";
import InputPassword from "../../../components/Form/InputPassword";
import Loading from "~/components/Loading";
import apiPrivate from "~/utils/apis/privateApi";
import axios from "axios";
import useDocumentTitle from "~/hooks/useDocumentTitle";
import Button from "~/features/student/components/Form/Button";
import { useUnsavedChangesWarning } from "~/hooks/useUnsavedChangesWarning";
import Label from "~/features/student/components/Form/Label";

type ChangePasswordFormData = {
    oldPassword: string;
    newPassword: string;
    confirmPassword: string;
};

const ChangePassword = () => {
    useDocumentTitle("Đổi mật khẩu");
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
        reset,
    } = useForm<ChangePasswordFormData>({
        resolver: yupResolver(changePasswordSchema),
        defaultValues: {
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
        },
    });
    useUnsavedChangesWarning(isDirty);

    // Mutation dùng react-query
    const mutation = useMutation({
        mutationFn: (data: ChangePasswordFormData) => apiPrivate.post("/change-password", data),
        onSuccess: () => {
            toast.success("Đổi mật khẩu thành công!");
            reset();
        },
        onError: (error) => {
            if (axios.isAxiosError(error)) {
                if (error?.response?.data?.message) {
                    toast.error(error.response.data.message);
                } else {
                    toast.error("Đổi mật khẩu thất bại!");
                }
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
                            <Label id="oldPassword" required>
                                Mật khẩu cũ
                            </Label>
                            <InputPassword
                                placeholder="Mật khẩu cũ"
                                id="oldPassword"
                                {...register("oldPassword")}
                                error={errors.oldPassword?.message}
                            />
                        </div>
                        <div className="w-full">
                            <Label id="newPassword" required>
                                Mật khẩu mới
                            </Label>
                            <InputPassword
                                placeholder="Mật khẩu mới"
                                id="newPassword"
                                {...register("newPassword")}
                                error={errors.newPassword?.message}
                            />
                        </div>
                        <div className="w-full">
                            <Label id="newPassword" required>
                                Xác nhận lại mật khẩu
                            </Label>
                            <InputPassword
                                placeholder="Xác nhận lại mật khẩu"
                                id="confirmPassword"
                                {...register("confirmPassword")}
                                error={errors.confirmPassword?.message}
                            />
                        </div>
                    </div>
                    <div className="mb-5 flex w-full justify-start gap-5">
                        <Button className="!m-0 !w-fit" type="submit">
                            Cập nhật
                        </Button>
                        <button
                            type="button"
                            className="cursor-pointer rounded-xl border border-gray-300 px-8 hover:bg-slate-100"
                            onClick={handleCancel}
                        >
                            Bỏ thay đổi
                        </button>
                    </div>
                </form>
            </ProfileContentLayout>
        </section>
    );
};

export default ChangePassword;
