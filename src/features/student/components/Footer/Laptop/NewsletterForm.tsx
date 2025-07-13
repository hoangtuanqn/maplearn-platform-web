import { FormEvent } from "react";
import { toast } from "sonner";
import { useInput } from "~/hooks/useInput";

const NewsletterForm = () => {
    const { value, reset, onChange } = useInput("");
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Đang giả lập
        // console.log(`${value} đã đăng ký nhận bảng tin thành công`);
        toast.warning("Tính năng này đang được phát triển");
        toast.info("Tính năng này đang được phát triển");
        reset();
    };
    return (
        <form action="#" onSubmit={handleSubmit}>
            <div className="flex h-12 w-full items-center rounded-md border-2 border-white">
                <input
                    placeholder="Nhập email"
                    onChange={onChange}
                    value={value}
                    className="h-full grow border-none bg-transparent pl-3 text-white outline-none placeholder:text-white"
                />
                <button type="submit" className="shrink-0 cursor-pointer px-2">
                    <img src="/assets/images/footer/send.png" alt="Gửi" className="h-8 w-8" />
                </button>
            </div>
        </form>
    );
};

export default NewsletterForm;
