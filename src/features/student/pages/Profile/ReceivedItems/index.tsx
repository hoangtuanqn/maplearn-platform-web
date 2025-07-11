import { useAuth } from "~/hooks/useAuth";
import ProfileContentLayout from "../layout/ProfileContentLayout";

const ReceivedItems = () => {
    const { auth } = useAuth();
    const profile = auth.user;
    return (
        <section className="min-h-screen">
            <ProfileContentLayout title="Kho vật phẩm">
                {/* Nội dung động của kho vật phẩm giữ nguyên ở đây */}
                <div>
                    {/* Render danh sách vật phẩm hoặc giao diện trống nếu chưa có */}
                    <div className="flex flex-col items-center justify-center">
                        <img alt="" className="h-35" src="/assets/images/common/study.png" />
                        <span className="mt-8 text-center text-lg font-semibold text-[#295779]">
                            Bạn chưa nhận được vật phẩm nào
                        </span>
                    </div>
                </div>
            </ProfileContentLayout>
        </section>
    );
};

export default ReceivedItems;
