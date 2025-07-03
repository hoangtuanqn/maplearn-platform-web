import { KeyRound } from "lucide-react";
import HeaderLink from "./HeaderLink";
import BlurBackdrop from "./BlurBackdrop";
import HomeIcon from "./icons/HomeIcon";
import GraduationIcon from "./icons/GraduationIcon";
import DocumentIcon from "./icons/DocumentIcon";
import EntertainmentIcon from "./icons/EntertainmentIcon";
import NewsIcon from "./icons/NewsIcon";

const Header = () => {
    return (
        <>
            <header className="relative z-30 w-full">
                <div
                    className="padding-scrollbar fixed top-0 flex w-full items-center backdrop-blur-md"
                    style={{
                        color: "var(--primary)",
                        height: "56px",
                        backgroundColor: "rgba(255, 255, 255, 0.5)",
                        // "--scrollbar-w": "15px",
                    }}
                >
                    <div className="max-w-8xl mx-auto w-full items-center px-10">
                        <div className="flex w-full items-center justify-between gap-6">
                            <div className="tab:w-40 lap:w-64 desk:w-[23%] flex items-center">
                                <div className="tab:pr-4">
                                    <a className="cursor-pointer" href="/">
                                        <span className="sr-only">MapLearn</span>
                                        <img
                                            className="h-10 rounded-xl object-contain"
                                            alt=""
                                            src="/assets/images/logo/logo-64.png"
                                        />
                                    </a>
                                </div>
                                <div>
                                    {/* <div className="block w-[calc(100%-1.25rem)] pr-4 text-base"></div> */}
                                    <button className="tab:h-11 tab:w-11 tab:rounded-full desk:h-auto desk:w-60 desk:rounded-xl desk:px-5 desk:py-2.5 flex w-48 cursor-pointer items-center justify-between">
                                        <div className="tab:hidden desk:flex w-[calc(100%-1.25rem)] pr-4 text-base">
                                            {/* <p className="line-clamp-1 w-full text-start text-[#a3b6c6]">Tìm kiếm</p> */}
                                        </div>
                                        {/* <Search /> */}
                                    </button>
                                </div>
                            </div>
                            <div className="tab:w-[calc(100%-192px-272px+70px)] lap:w-[calc(100%-18rem-16rem-3rem)] desk:w-[50%] flex justify-center">
                                <div className="relative flex items-center">
                                    <div className="relative">
                                        <div data-el="portal-host" id="navigation" className="relative">
                                            <div className="mx-auto flex items-center">
                                                <HeaderLink label="Trang chủ" icon={HomeIcon} href="/" />
                                                <HeaderLink label="Khóa học" icon={GraduationIcon} href="/khoa-hoc" />
                                                <HeaderLink label="Thi thử" icon={DocumentIcon} href="/thi-online" />
                                                <HeaderLink label="Tin tức" icon={NewsIcon} href="/tin-tuc" />
                                                <HeaderLink
                                                    label="Tài liệu"
                                                    icon={EntertainmentIcon}
                                                    href="/tai-lieu"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab:w-52 lap:w-72 desk:w-[25%]">
                                <div className="flex items-center justify-end gap-6">
                                    <a
                                        className="text-secondary-typo max-lap:hidden flex items-center gap-3 whitespace-nowrap hover:text-gray-900"
                                        href="/kich-hoat-the"
                                    >
                                        <KeyRound />
                                        <span>Kích hoạt thẻ</span>
                                    </a>
                                    <div className="bg-secondary-typo max-lap:hidden h-6 w-0.5"></div>
                                    <a
                                        className="text-secondary-typo whitespace-nowrap hover:text-gray-900"
                                        href="/dang-ky"
                                    >
                                        <span>Đăng ký</span>
                                    </a>
                                    <a
                                        className="bg-primary hover:bg-primary-light inline-flex items-center justify-center rounded-xl border-2 border-transparent px-5 py-1.5 whitespace-nowrap text-white shadow-sm duration-150 ease-out"
                                        href="/dang-nhap"
                                    >
                                        Đăng nhập
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full"></div>
            </header>
            <BlurBackdrop />
        </>
    );
};

export default Header;
