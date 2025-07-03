import { UsersRound } from "lucide-react";
const HomeTab = () => {
    return (
        <div className="t1-flex-center h-12 cursor-pointer justify-between rounded-xl bg-white font-bold shadow-sm max-md:hidden">
            <div className="t1-flex-center bg-primary h-full flex-1 gap-2 rounded-xl p-2 text-center text-white">
                <img src="/assets/icons/logo.svg" />
                <span>Trang chủ</span>
            </div>
            <div className="t1-flex-center h-full flex-1 gap-2 rounded-xl bg-white p-2 text-[#979797]">
                <UsersRound />
                <span>Cộng đồng</span>
            </div>
        </div>
    );
};

export default HomeTab;
