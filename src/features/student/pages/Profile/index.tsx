import { Link } from "react-router-dom";
import { useAuth } from "~/hooks/useAuth";
import { getCharacterName, getGender } from "~/utils/hepler";
import ProfileContentLayout from "./layout/ProfileContentLayout";

const Profile = () => {
    const { auth } = useAuth();
    const profile = auth.user;
    return (
        <section className="min-h-screen">
            <ProfileContentLayout title="Thông tin cá nhân">
                <div className="flex w-fit flex-col gap-4 font-medium">
                    <div className="mb-5 flex items-center gap-8">
                        <div
                            className="t1-flex-center text- h-24 w-24 shrink-0 rounded-full bg-gradient-to-b from-[#dadada] to-[#bebebe] text-3xl leading-12 font-medium text-white"
                            // style={{
                            //     width: "7rem",
                            //     height: "7rem",
                            //     fontSize: "calc(3.5rem)",
                            //     lineHeight: "calc(3.5rem)",
                            // }}
                        >
                            {/* {profile?.full_name.substring(0, 1)} */}
                            {getCharacterName(profile?.full_name || null)}
                        </div>
                        <div className="flex flex-col gap-3 leading-5 font-normal">
                            <Link
                                to="/student/profile/edit"
                                className="bg-primary cursor-pointer rounded-lg p-2.5 text-white hover:opacity-80"
                            >
                                Chỉnh sửa thông tin
                            </Link>
                            <Link
                                to="/student/profile/change-password"
                                className="rounded-lg border p-2.5 pt-3 hover:bg-slate-100"
                            >
                                Thay đổi mật khẩu
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row">
                        <div className="w-48 text-gray-400">Họ và tên</div>
                        <div>{profile?.full_name}</div>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row">
                        <div className="w-48 text-gray-400">Tài khoản</div>
                        <div>{profile?.username}</div>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row">
                        <div className="w-48 text-gray-400">Email</div>
                        <div>{profile?.email}</div>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row">
                        <div className="w-48 text-gray-400">Số điện thoại</div>
                        <div>{profile?.phone_number}</div>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row">
                        <div className="w-48 text-gray-400">Giới tính</div>
                        <div>{getGender(profile?.gender || "other")}</div>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row">
                        <div className="w-48 text-gray-400">Năm sinh</div>
                        <div>{profile?.birth_year}</div>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row">
                        <div className="w-48 text-gray-400">Link Facebook</div>
                        <a
                            href="https://www.facebook.com/phamhoangtuan.ytb/"
                            target="_blank"
                            className="text-primary break-all duration-75 hover:opacity-75"
                        >
                            https://www.facebook.com/phamhoangtuan.ytb/
                        </a>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row">
                        <div className="w-48 text-gray-400">Tỉnh thành</div>
                        <div>Quảng Ngãi</div>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row">
                        <div className="w-48 text-gray-400">Trường học</div>
                        <div>THPT Trần Quang Diệu</div>
                    </div>
                </div>
            </ProfileContentLayout>
        </section>
    );
};

export default Profile;
