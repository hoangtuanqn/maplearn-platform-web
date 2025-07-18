import { ROUTE_PATHS } from "~/router/routePaths";
import { MenuItemLink } from "../MenuItemLink";
import SocialLink from "../SocialLink";
import { useAuth } from "~/hooks/useAuth";
import { Link } from "react-router-dom";
import { getCharacterName } from "~/utils/hepler";

const SideBarLaptop = () => {
    const { auth } = useAuth();
    return (
        <div className="hidden w-[30%] xl:block 2xl:w-[20%]">
            <div
                className="sticky w-[100%] overflow-auto rounded-md [&>a]:mt-1"
                style={{ top: "76px", maxHeight: "calc(100vh - -76px)" }}
            >
                {auth.user ? (
                    <>
                        <Link
                            className="mb-1 flex cursor-pointer items-center justify-start rounded-lg px-3 py-2 hover:bg-[rgba(26,79,140,0.06)]"
                            to={ROUTE_PATHS.user.profile}
                        >
                            <div
                                className="t1-flex-center h-8 w-8 shrink-0 rounded-full bg-gradient-to-b from-[#dadada] to-[#bebebe] font-medium text-white"
                                style={{
                                    fontSize: "14px",
                                    lineHeight: "14px",
                                }}
                            >
                                {getCharacterName(auth.user.full_name)}
                            </div>
                            <div className="ml-4">
                                <p className="text-primary line-clamp-1 font-medium">{auth.user.full_name}</p>
                                <p className="text-cp line-clamp-1 text-gray-500">{auth.user.username}</p>
                            </div>
                        </Link>

                        <MenuItemLink
                            title="Thông tin cá nhân"
                            url={ROUTE_PATHS.user.profile}
                            image="/assets/icons/user-info.svg"
                        />
                        <MenuItemLink
                            title="Khóa học của tôi"
                            url="/ca-nhan/khoa-hoc"
                            image="/assets/icons/my-courses.svg"
                        />
                        <MenuItemLink
                            title="Khoá học đã lưu"
                            url="/ca-nhan/khoa-hoc-da-luu"
                            image="/assets/icons/saved-courses.svg"
                        />
                    </>
                ) : (
                    <MenuItemLink title="Đăng nhập" url={ROUTE_PATHS.login} image="/assets/icons/login.svg" />
                )}

                <div className="my-3 ml-4 h-[1px] w-[calc(100%-1.5rem)] bg-[rgba(0,0,0,0.1)]"></div>

                <MenuItemLink title="Khóa học" url="/khoa-hoc" image="/assets/icons/course.svg" />
                <MenuItemLink title="Thi online" url={ROUTE_PATHS.examOnline} image="/assets/icons/online-exam.svg" />
                <MenuItemLink
                    title="Đấu trường lý thuyết"
                    url="/dau-truong-ly-thuyet"
                    image="/assets/icons/theory-arena.svg"
                />
                <MenuItemLink title="Sách Map" url="https://www.sachmap.vn/" image="/assets/icons/book-map.svg" />
                <MenuItemLink title="Tài liệu" url="/tai-lieu" image="/assets/icons/document.svg" />
                <div className="my-4 ml-4 h-[1px] w-[calc(100%-1.5rem)] bg-[rgba(0,0,0,0.1)]"></div>
                <div className="py-2 pl-2">
                    <p className="text-primary text-base font-medium">Liên kết</p>
                </div>
                <div className="text-primary px-2 font-medium">
                    <SocialLink
                        title="Facebook Mapstudy"
                        url="https://www.facebook.com/mapstudy.vn"
                        image="/assets/images/social/facebook-circle.png"
                    />
                    <SocialLink
                        title="Thầy Vũ Ngọc Anh - Chuyên luyện thi Vật lý"
                        url="https://www.youtube.com/@thayvnachuyenluyenthivatly"
                        image="/assets/images/social/youtube-circle.png"
                    />
                    <SocialLink
                        title="Tiktok Mapstudy"
                        url="https://www.tiktok.com/@mapstudybook?_t=8mCXhbflE8n&_r=1"
                        image="/assets/images/social/tiktok-circle.png"
                    />
                    <SocialLink
                        title="Messenger Mapstudy"
                        url="https://www.facebook.com/messages/t/105592185119255"
                        image="/assets/images/social/messenger-circle.png"
                    />
                </div>
            </div>
        </div>
    );
};

export default SideBarLaptop;
