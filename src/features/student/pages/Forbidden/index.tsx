import { Link } from "react-router-dom";

const Forbidden = () => {
    return (
        <div className="flex w-full flex-col items-center justify-center" style={{ minHeight: "calc(100vh - 56px)" }}>
            <div className="bg-gradient-to-r from-[#CB356B] to-[#BD3F32] bg-clip-text text-[64px] font-bold text-transparent xl:text-[130px] 2xl:text-[150px]">
                403
            </div>
            <div className="mt-[-16px] ml-2 text-xl font-bold xl:mt-[-40px] xl:text-2xl">
                Bạn không có quyền truy cập trang này
            </div>
            <Link
                className="xl:text-md mt-15 cursor-pointer rounded-full bg-[#CB356B] px-6 py-3 text-base font-medium text-white hover:opacity-90 xl:px-8 xl:py-3 2xl:text-lg"
                to="/"
            >
                Quay lại trang chủ
            </Link>
        </div>
    );
};

export default Forbidden;
