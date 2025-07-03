import { Tooltip } from "react-tooltip";
import { APP_CONFIG } from "~/config/app.config";
import { formatPhoneNumber } from "~/utils/format";
import NewsletterForm from "./NewsletterForm";
const Footer = () => {
    return (
        <>
            <footer className="bg-primary text-white">
                <div className="mx-auto max-w-7xl rounded-xl">
                    <div className="mb-5 flex flex-row justify-between gap-3 p-8 [&>div]:w-fit">
                        <div className="">
                            <h3 className="mb-5 text-lg font-semibold uppercase">LIÊN HỆ</h3>
                            <ul className="flex flex-col gap-4 [&>li]:flex [&>li]:items-center [&>li]:gap-4">
                                <li>
                                    <img src="/assets/images/footer/logo.png" alt="" className="h-8 w-8" />
                                    <span>{APP_CONFIG.APP_NAME}</span>
                                </li>
                                <li>
                                    <img src="/assets/images/footer/location.png" alt="" className="h-8 w-8"></img>
                                    <span>Phường Thủ Đức, TP. Hồ Chí Minh</span>
                                </li>
                                <li>
                                    <img src="/assets/images/footer/cube.png" alt="" className="h-8 w-8"></img>
                                    <span>Chịu trách nhiệm nội dung: Phạm Hoàng Tuấn</span>
                                </li>
                                <li>
                                    <img src="/assets/images/footer/mail.png" alt="" className="h-8 w-8"></img>
                                    <a href="mailto:maplearn@fpt.edu.vn">maplearn@fpt.edu.vn</a>
                                </li>
                                <li>
                                    <img src="/assets/images/footer/call.png" alt="" className="h-8 w-8"></img>
                                    <a href="tel:08126650001">{formatPhoneNumber("08126650001")}</a>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="mb-5 text-lg font-semibold uppercase">THÔNG TIN</h3>
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <a href="#">Giới Thiệu</a>
                                </li>
                                <li>
                                    <a href="#">Câu Hỏi Thường Gặp</a>
                                </li>

                                <li>
                                    <a href="#">Điều Khoản Dịch Vụ</a>
                                </li>
                                <li>
                                    <a href="#">Chính Sách Bảo Mật</a>
                                </li>
                                <li>
                                    <div className="relative -left-2 flex items-center gap-1">
                                        <a href="#">
                                            <img
                                                src="/assets/images/social/facebook-circle.png"
                                                alt="Facebook icon"
                                                className="h-16"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/assets/images/social/messenger-circle.png"
                                                alt="Messenger icon"
                                                className="h-16"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/assets/images/social/tiktok-circle.png"
                                                alt="TikTok icon"
                                                className="h-16"
                                            />
                                        </a>
                                        <a href="#">
                                            <img
                                                src="/assets/images/social/youtube-circle.png"
                                                alt="YouTube icon"
                                                className="h-16"
                                            />
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="mb-5 text-lg font-semibold uppercase">ĐIỀU KHOẢN</h3>
                            <ul className="flex flex-col gap-4">
                                <li>
                                    <a href="#">Hướng Dẫn Thanh Toán</a>
                                </li>
                                <li>
                                    <a href="#">Kích Hoạt Khóa Học</a>
                                </li>
                                <li>
                                    <a href="#">Cộng Tác Viên</a>
                                </li>
                                <li className="mt-4 text-lg uppercase">Đăng ký nhận bản tin</li>
                                <li>
                                    <NewsletterForm />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <address className="border-t-2 border-t-white p-8 text-center">
                        &copy; Bản quyền thuộc về <b>MapLearn</b>
                    </address>
                </div>
            </footer>
            <Tooltip anchorSelect=".view_tooltip" />
        </>
    );
};

export default Footer;
