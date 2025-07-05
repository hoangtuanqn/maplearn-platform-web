import { useEffect } from "react";
import { Atom } from "react-loading-indicators";

const Loading = () => {
    useEffect(() => {
        // Chặn scroll khi component mount
        document.body.style.overflow = "hidden";

        // Bỏ chặn khi component unmount
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    return (
        <div className="fixed inset-0 z-2000 flex items-center justify-center bg-black/20">
            <Atom color="#32cd32" size="medium" text="" textColor="" />
        </div>
    );
};

export default Loading;
