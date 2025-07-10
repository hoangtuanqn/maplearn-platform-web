import { useRef, useEffect, FormEvent, KeyboardEvent, ClipboardEvent, FocusEvent } from "react";
import Button from "../../components/Form/Button";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import apiPublic from "~/utils/apis/publicApi";
import { Verify2faType } from "./login.type";
import Loading from "~/components/Loading";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "~/router/routePaths";

const OtpVerification = ({ verify2fa }: { verify2fa: Verify2faType }) => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const navigate = useNavigate();
    useEffect(() => {
        const inputs = inputRefs.current;

        const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
            const allowed = /^[0-9]$/;
            if (!allowed.test(e.key) && e.key !== "Backspace" && e.key !== "Delete" && e.key !== "Tab") {
                e.preventDefault();
            }

            if ((e.key === "Backspace" || e.key === "Delete") && inputs[index]?.value === "") {
                if (index > 0) {
                    inputs[index - 1]?.focus();
                    if (inputs[index - 1]) inputs[index - 1]!.value = "";
                }
            }
        };

        const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
            e.preventDefault();
            const text = e.clipboardData.getData("text");
            if (!/^[0-9]{4}$/.test(text)) return;
            text.split("").forEach((char, i) => {
                if (inputs[i]) inputs[i]!.value = char;
            });
            inputs[inputs.length - 1]?.focus();
        };

        inputs.forEach((input, index) => {
            input?.addEventListener("keydown", (e) =>
                handleKeyDown(e as unknown as KeyboardEvent<HTMLInputElement>, index),
            );
            input?.addEventListener("paste", (e) => handlePaste(e as unknown as ClipboardEvent<HTMLInputElement>));
        });

        return () => {
            inputs.forEach((input, index) => {
                input?.removeEventListener("keydown", (e) =>
                    handleKeyDown(e as unknown as KeyboardEvent<HTMLInputElement>, index),
                );
                input?.removeEventListener("paste", (e) =>
                    handlePaste(e as unknown as ClipboardEvent<HTMLInputElement>),
                );
            });
        };
    }, []);

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        e.target.select();
    };

    const handleInput = (index: number) => {
        const inputs = inputRefs.current;
        const input = inputs[index];
        if (input?.value && index < inputs.length - 1) {
            inputs[index + 1]?.focus();
        }
    };
    const verify2faMutation = useMutation({
        mutationFn: (data: { otp: string; token: string | null }) => apiPublic.post("/auth/verify-2fa", data),
        onSuccess: () => {
            navigate(ROUTE_PATHS.home);
            toast.success("Đăng nhập thành công!");
        },
        onError: () => {
            toast.error("Mã xác nhận không hợp lệ!");
        },
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const code = inputRefs.current.map((input) => input?.value ?? "").join("");
        if (!code) {
            toast.error("Vui lòng nhập mã xác nhận!");
        } else if (code.length !== 6) {
            toast.error("Mã xác nhận phải có đúng 6 kí tự!");
        } else {
            verify2faMutation.mutate({
                ...verify2fa,
                otp: code,
            });
        }
    };

    return (
        <>
            {verify2faMutation.isPending && <Loading />}
            <div className="mx-auto max-w-full rounded-xl px-4 py-10 text-center sm:px-8">
                <header className="mb-8">
                    <h1 className="mb-1 text-2xl font-bold">Mã xác nhận</h1>
                    <p className="text-sm text-slate-500">
                        Nhập mã 6 chữ số trong ứng dụng <b className="font-bold text-gray-500">Google Authenticator</b>
                    </p>
                </header>
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center justify-center gap-3">
                        {[0, 1, 2, 3, 4, 5].map((index) => (
                            <input
                                key={index}
                                type="text"
                                className="h-8 w-8 appearance-none rounded border border-transparent bg-slate-100 p-0.5 text-center text-2xl font-extrabold text-slate-900 outline-none hover:border-slate-200 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100 sm:h-14 sm:w-14 sm:p-4"
                                pattern="\d*"
                                maxLength={1}
                                ref={(el) => {
                                    inputRefs.current[index] = el;
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleSubmit(new Event("submit") as unknown as FormEvent<HTMLFormElement>);
                                    }
                                }}
                                onInput={() => handleInput(index)}
                                onFocus={handleFocus}
                            />
                        ))}
                    </div>
                    <div className="mx-auto mt-4 max-w-[260px]">
                        <Button className="mt-8" type="submit">
                            Xác nhận
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};
export default OtpVerification;
