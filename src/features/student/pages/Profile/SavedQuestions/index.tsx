import DisplatNoData from "~/features/student/components/Courses/DisplatNoData";
import ProfileContentLayout from "../layout/ProfileContentLayout";

const SavedQuestions = () => {
    return (
        <section className="min-h-screen">
            <ProfileContentLayout title="Câu hỏi đã lưu">
                {/* Nội dung động của câu hỏi đã lưu giữ nguyên ở đây */}
                <div>
                    {/* Render danh sách câu hỏi hoặc giao diện trống nếu chưa có */}
                    <DisplatNoData title="Bạn chưa lưu câu hỏi nào" />
                </div>
            </ProfileContentLayout>
        </section>
    );
};

export default SavedQuestions;
