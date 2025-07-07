import { useEffect } from "react";
import { ThreeDot } from "react-loading-indicators";

const Loading = () => {
    useEffect(() => {
        // Chặn scroll khi component mount

        document.body.style = "padding-right: 15px; overflow-y: hidden;";
        // Bỏ chặn khi component unmount
        return () => {
            document.body.style = "padding-right: 0px; overflow-y: visible;";
        };
    }, []);
    return (
        <div className="fixed inset-0 z-2000 flex items-center justify-center bg-black/40">
            <div className="flex flex-col gap-5">
                <ThreeDot variant="bounce" color="var(--primary)" size="medium" text="" textColor="" />
                <span className="text-primary text-md font-bold">Đang xử lý ....</span>
            </div>
        </div>
    );
};

export default Loading;
