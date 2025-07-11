import ProfileContentLayout from "../layout/ProfileContentLayout";
import DisplatNoData from "~/features/student/components/Courses/DisplatNoData";

const ReceivedItems = () => {
    return (
        <section className="min-h-screen">
            <ProfileContentLayout title="Kho vật phẩm">
                {/* Nội dung động của kho vật phẩm giữ nguyên ở đây */}
                <div>
                    {/* Render danh sách vật phẩm hoặc giao diện trống nếu chưa có */}
                    <DisplatNoData title=" Bạn chưa nhận được vật phẩm nào" />
                </div>
            </ProfileContentLayout>
        </section>
    );
};

export default ReceivedItems;
