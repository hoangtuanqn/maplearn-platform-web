import { ROUTE_PATHS } from "~/router/routePaths";
import { MenuItemLink } from "../MenuItemLink";
import SocialLink from "../SocialLink";

const SideBarLaptop = () => {
    return (
        <div className="hidden w-[30%] xl:block 2xl:w-[20%]">
            <div
                className="sticky w-[100%] overflow-auto rounded-md [&>a]:mt-1"
                style={{ top: "76px", maxHeight: "calc(100vh - -76px)" }}
            >
                <MenuItemLink title="Đăng nhập" url={ROUTE_PATHS.login} image="/assets/icons/login.svg" />

                <div className="my-3 ml-4 h-[1px] w-[calc(100%-1.5rem)] bg-[rgba(0,0,0,0.1)]"></div>

                <MenuItemLink title="Khóa học" url="/khoa-hoc" image="/assets/icons/course.svg" />
                <MenuItemLink title="Thi online" url="/thi-online" image="/assets/icons/online-exam.svg" />
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
