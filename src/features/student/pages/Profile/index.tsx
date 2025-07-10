import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "~/hooks/useAuth";
import { ROUTE_PATHS } from "~/router/routePaths";
import { getGender } from "~/utils/hepler";

const Profile = () => {
    const { auth } = useAuth();
    const profile = auth.user;
    return (
        <section className="min-h-screen">
            <div className="flex h-full w-full gap-6">
                <div
                    className="hidden shrink-0 rounded-xl p-4 px-8 shadow-sm md:shadow-sm lg:block xl:w-[360px] 2xl:w-[28%]"
                    style={{ backgroundColor: "rgb(255, 255, 255)" }}
                >
                    <div className="t1-flex-center flex-col gap-5 py-8">
                        <div className="t1-flex-center h-22 w-22 shrink-0 rounded-full bg-gradient-to-b from-[#dadada] to-[#bebebe] text-2xl leading-12 font-medium text-white">
                            {profile?.full_name.substring(0, 1)}
                        </div>
                        <div>
                            <div className="text-center text-xl font-medium">{profile?.full_name}</div>
                            <div className="mt-1 text-center text-gray-500">{profile?.email}</div>
                        </div>
                    </div>
                    <div className="h-px w-full bg-gray-300" />
                    <div className="flex flex-col gap-1 py-4">
                        <Link to={ROUTE_PATHS.user.profile}>
                            <div className="bg-primary flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-white duration-100">
                                <div className="t1-flex-center w-6">
                                    <svg
                                        className="h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M17 21H7C3 21 2 20 2 16V8C2 4 3 3 7 3H17C21 3 22 4 22 8V16C22 20 21 21 17 21Z"
                                            stroke="#ffffff"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M14 8H19"
                                            stroke="#ffffff"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M15 12H19"
                                            stroke="#ffffff"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M17 16H19"
                                            stroke="#ffffff"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M8.49994 11.2899C9.49958 11.2899 10.3099 10.4796 10.3099 9.47992C10.3099 8.48029 9.49958 7.66992 8.49994 7.66992C7.50031 7.66992 6.68994 8.48029 6.68994 9.47992C6.68994 10.4796 7.50031 11.2899 8.49994 11.2899Z"
                                            stroke="#ffffff"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M12 16.33C11.86 14.88 10.71 13.74 9.26 13.61C8.76 13.56 8.25 13.56 7.74 13.61C6.29 13.75 5.14 14.88 5 16.33"
                                            stroke="#ffffff"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="grow">Thông tin cá nhân</div>
                                <svg
                                    className="h-5 w-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                                        stroke="#ffffff"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </Link>
                        <a href="/ca-nhan/khoa-hoc">
                            <div className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2 duration-100 hover:bg-gray-100">
                                <div className="t1-flex-center w-6">
                                    <svg
                                        className="h-5 w-5"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M10.05 2.53004L4.03002 6.46004C2.10002 7.72004 2.10002 10.54 4.03002 11.8L10.05 15.73C11.13 16.44 12.91 16.44 13.99 15.73L19.98 11.8C21.9 10.54 21.9 7.73004 19.98 6.47004L13.99 2.54004C12.91 1.82004 11.13 1.82004 10.05 2.53004Z"
                                            stroke="var(--primary)"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M5.63 13.08L5.62 17.77C5.62 19.04 6.6 20.4 7.8 20.8L10.99 21.86C11.54 22.04 12.45 22.04 13.01 21.86L16.2 20.8C17.4 20.4 18.38 19.04 18.38 17.77V13.13"
                                            stroke="var(--primary)"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M21.4 15V9"
                                            stroke="var(--primary)"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div className="grow">Khóa học của tôi</div>
                                <svg
                                    className="h-5 w-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                                        stroke="#9c9c9c"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </a>
                        <a href="/ca-nhan/khoa-hoc-da-luu">
                            <div className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2 duration-100 hover:bg-gray-100">
                                <div className="t1-flex-center w-6">
                                    <svg
                                        width={14}
                                        height={18}
                                        viewBox="0 0 14 18"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            d="M12 0H2C.9 0 .01.9.01 2L0 18l7-3 7 3V2c0-1.1-.9-2-2-2zm0 15l-5-2.18L2 15V2h10v13z"
                                            fill="var(--primary)"
                                        />
                                    </svg>
                                </div>
                                <div className="grow">Khóa học đã lưu</div>
                                <svg
                                    className="h-5 w-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                                        stroke="#9c9c9c"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </a>
                        <a href="/ca-nhan/cau-hoi-da-luu">
                            <div className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2 duration-100 hover:bg-gray-100">
                                <div className="t1-flex-center w-6">
                                    <svg
                                        width={20}
                                        height={20}
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M4.2.25h-.03c-.535 0-.98 0-1.345.03-.38.03-.736.098-1.073.27A2.75 2.75 0 00.55 1.752c-.172.337-.24.693-.27 1.073-.03.365-.03.81-.03 1.345V15.83c0 .535 0 .98.03 1.345.03.38.098.736.27 1.073a2.75 2.75 0 001.202 1.202c.337.172.693.24 1.073.27.365.03.81.03 1.345.03h11.66c.535 0 .98 0 1.345-.03.38-.03.736-.098 1.073-.27a2.751 2.751 0 001.202-1.201c.172-.338.24-.694.27-1.074.03-.365.03-.81.03-1.345V14.17c0-.535 0-.98-.03-1.345-.03-.38-.098-.736-.27-1.073a2.751 2.751 0 00-1.201-1.202c-.338-.172-.694-.24-1.074-.27a7.887 7.887 0 00-.374-.02l.966-.967.022-.021c.378-.378.693-.693.93-.972.246-.29.45-.59.568-.95a2.75 2.75 0 000-1.7c-.117-.36-.322-.66-.569-.95-.236-.279-.551-.594-.93-.972l-.02-.021-.976-.975-.021-.021a17.79 17.79 0 00-.972-.93c-.29-.246-.59-.451-.95-.568a2.75 2.75 0 00-1.7 0c-.36.117-.659.322-.95.568-.278.237-.593.552-.971.93l-.022.021L9.75 4.19v-.02c0-.534 0-.98-.03-1.344-.03-.38-.098-.736-.27-1.073A2.75 2.75 0 008.248.55C7.911.378 7.555.31 7.175.28 6.81.25 6.365.25 5.83.25H4.2zM8.25 6V4.2c0-.572 0-.957-.025-1.253-.023-.287-.065-.424-.111-.514a1.25 1.25 0 00-.547-.547c-.09-.046-.227-.088-.514-.111-.296-.024-.68-.025-1.253-.025H4.2c-.572 0-.957 0-1.253.025-.287.023-.424.065-.514.111a1.25 1.25 0 00-.547.547c-.046.09-.088.227-.111.514-.024.296-.025.68-.025 1.253v11.6c0 .572 0 .957.025 1.252.023.288.065.425.111.515.12.236.311.427.547.547.09.046.227.088.514.111.296.024.68.025 1.253.025h1.6c.572 0 .957 0 1.253-.025.287-.023.424-.065.514-.111a1.25 1.25 0 00.547-.547c.046-.09.088-.227.111-.515.024-.295.025-.68.025-1.252V6zm1.5.31l2.517-2.517c.405-.405.677-.676.903-.868.22-.187.347-.254.443-.285a1.25 1.25 0 01.773 0c.096.03.223.098.443.285.226.192.498.463.903.868l.975.975c.404.404.676.676.868.903.186.22.254.346.285.443a1.25 1.25 0 010 .772c-.031.097-.098.224-.285.443-.192.227-.463.499-.868.904L9.75 15.189V6.31zM9.702 17.36a2.601 2.601 0 01-.252.89v.001h6.35c.572 0 .957 0 1.252-.025.288-.023.425-.065.515-.111a1.25 1.25 0 00.547-.547c.046-.09.088-.227.111-.515.024-.295.025-.68.025-1.252v-1.6c0-.572 0-.957-.025-1.252-.023-.288-.065-.425-.111-.516a1.25 1.25 0 00-.547-.546c-.09-.046-.227-.088-.515-.111-.295-.024-.68-.025-1.252-.025h-.49l-5.608 5.609zM6 15a1 1 0 11-2 0 1 1 0 012 0z"
                                            fill="var(--primary)"
                                        />
                                    </svg>
                                </div>
                                <div className="grow">Câu hỏi đã lưu</div>
                                <svg
                                    className="h-5 w-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                                        stroke="#9c9c9c"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </a>
                        <a href="/ca-nhan/kho-vat-pham">
                            <div className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2 duration-100 hover:bg-gray-100">
                                <div className="t1-flex-center w-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="h-5.5 w-5.5">
                                        <path
                                            fill="none"
                                            stroke="var(--primary)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                            d="M44.14 17.16a9.4 9.4 0 001.13-.68c2.92-2.05 3.82-5.82 2-8.4s-5.66-3-8.58-.93-4.42 5.73-6.05 10zM8.7 30.46h46.61v23.7a4 4 0 01-4 4H12.7a4 4 0 01-4-4v-23.7h0z"
                                        />
                                        <path
                                            fill="none"
                                            stroke="var(--primary)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                            d="M26.15 30.46H37.849999999999994V58.16H26.15z"
                                        />
                                        <path
                                            fill="none"
                                            stroke="var(--primary)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                            d="M19.86 17.16a8.57 8.57 0 01-1.12-.68c-2.92-2.05-3.83-5.82-2-8.4s5.66-3 8.59-.93 4.41 5.73 6.05 10z"
                                        />
                                        <rect
                                            width={51}
                                            height="13.3"
                                            x="6.5"
                                            y="17.16"
                                            fill="none"
                                            stroke="var(--primary)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                            rx={3}
                                        />
                                        <path
                                            fill="none"
                                            stroke="var(--primary)"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={3}
                                            d="M25.09 17.16H38.92V30.46H25.09z"
                                        />
                                    </svg>
                                </div>
                                <div className="grow">Kho vật phẩm</div>
                                <svg
                                    className="h-5 w-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                                        stroke="#9c9c9c"
                                        strokeWidth={2}
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="w-full grow xl:w-[70%]">
                    <div
                        className="min-h-full rounded-xl p-4 px-8 py-6 shadow-sm md:shadow-sm"
                        style={{ backgroundColor: "rgb(255, 255, 255)" }}
                    >
                        <h3 className="block-heading mb-4">Thông tin cá nhân</h3>
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
                                    {profile?.full_name.substring(0, 1)}
                                </div>
                                <div className="flex flex-col gap-3 leading-5 font-normal">
                                    <Link
                                        to="/"
                                        className="bg-primary cursor-pointer rounded-lg p-2.5 text-white hover:opacity-80"
                                    >
                                        Chỉnh sửa thông tin
                                    </Link>
                                    <Link to="/" className="rounded-lg border p-2.5 pt-3 hover:bg-slate-100">
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
