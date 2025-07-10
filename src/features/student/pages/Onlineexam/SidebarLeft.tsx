import { ChevronDown, GraduationCap, LayoutPanelTop, Search } from "lucide-react";

export default function FilterPanel() {
    return (
        <>
            <div className="relative hidden h-fit w-96 rounded-xl bg-white p-6 shadow-sm max-lg:mb-2.5 lg:block">
                <div className="flex h-10 w-full items-center rounded-lg bg-[#E6EAEE]">
                    <input
                        className="placeholder:text-primary-typo-light text-primary-typo h-full grow rounded-lg border-none bg-[#E6EAEE] px-5 outline-none"
                        placeholder="Tìm kiếm đề thi"
                    />
                    <div className="mr-4 shrink-0 cursor-pointer">
                        <Search />
                    </div>
                </div>
                <div className="text-primary mt-8 text-base font-bold">Bộ lọc</div>
                <div className="mt-4 w-full">
                    <div className="w-full border-t border-[#dee0e1] py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <GraduationCap />
                                <span className="text-primary-typo text-sm font-bold">Môn học</span>
                            </div>
                            <ChevronDown />
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                            <div className="text-primary-typo cursor-pointer rounded-lg bg-[#e9edf1] px-4 py-1.5 duration-150 ease-out hover:bg-[#e1e3e7]">
                                Toán
                            </div>
                            <div className="text-primary-typo cursor-pointer rounded-lg bg-[#e9edf1] px-4 py-1.5 duration-150 ease-out hover:bg-[#e1e3e7]">
                                Lý
                            </div>
                            <div className="text-primary-typo cursor-pointer rounded-lg bg-[#e9edf1] px-4 py-1.5 duration-150 ease-out hover:bg-[#e1e3e7]">
                                Sinh
                            </div>
                            <div className="text-primary-typo cursor-pointer rounded-lg bg-[#e9edf1] px-4 py-1.5 duration-150 ease-out hover:bg-[#e1e3e7]">
                                Anh
                            </div>
                            <div className="text-primary-typo cursor-pointer rounded-lg bg-[#e9edf1] px-4 py-1.5 duration-150 ease-out hover:bg-[#e1e3e7]">
                                Hoá
                            </div>
                            <div className="text-primary-typo cursor-pointer rounded-lg bg-[#e9edf1] px-4 py-1.5 duration-150 ease-out hover:bg-[#e1e3e7]">
                                Văn
                            </div>
                        </div>
                    </div>
                    <div className="w-full border-t border-[#dee0e1] py-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <LayoutPanelTop />
                                <span className="text-primary-typo text-sm font-bold">Phân loại</span>
                            </div>
                            <ChevronDown />
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2 text-sm">
                            <div className="text-primary-typo cursor-pointer rounded-lg bg-[#e9edf1] px-4 py-1.5 duration-150 ease-out hover:bg-[#e1e3e7]">
                                ĐGNL HSA
                            </div>
                            <div className="text-primary-typo cursor-pointer rounded-lg bg-[#e9edf1] px-4 py-1.5 duration-150 ease-out hover:bg-[#e1e3e7]">
                                ĐGNL V-ACT
                            </div>
                            <div className="text-primary-typo cursor-pointer rounded-lg bg-[#e9edf1] px-4 py-1.5 duration-150 ease-out hover:bg-[#e1e3e7]">
                                ĐGTD TSA
                            </div>
                            <div className="text-primary-typo cursor-pointer rounded-lg bg-[#e9edf1] px-4 py-1.5 duration-150 ease-out hover:bg-[#e1e3e7]">
                                Tốt nghiệp THPT
                            </div>
                            <div className="text-primary-typo cursor-pointer rounded-lg bg-[#e9edf1] px-4 py-1.5 duration-150 ease-out hover:bg-[#e1e3e7]">
                                Thi cuối kì 1
                            </div>
                            <div className="text-primary-typo cursor-pointer rounded-lg bg-[#e9edf1] px-4 py-1.5 duration-150 ease-out hover:bg-[#e1e3e7]">
                                Thi cuối kì 2
                            </div>
                            <div className="text-primary-typo cursor-pointer rounded-lg bg-[#e9edf1] px-4 py-1.5 duration-150 ease-out hover:bg-[#e1e3e7]">
                                Thi giữa kì 1
                            </div>
                            <div className="text-primary-typo cursor-pointer rounded-lg bg-[#e9edf1] px-4 py-1.5 duration-150 ease-out hover:bg-[#e1e3e7]">
                                Thi giữa kì 2
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex gap-2">
                    <button
                        type="button"
                        className="pointer-events-none inline-flex w-1/2 items-center justify-center rounded-xl bg-[#E5E5E5] py-2.5 whitespace-nowrap text-[#A4A4A4] shadow-sm duration-150 ease-out outline-none"
                    >
                        Đặt lại
                    </button>
                    <button
                        type="button"
                        className="pointer-events-none inline-flex w-1/2 items-center justify-center rounded-xl bg-[#E5E5E5] py-2.5 whitespace-nowrap text-[#A4A4A4] shadow-sm duration-150 ease-out"
                    >
                        Xác nhận lọc
                    </button>
                </div>
            </div>
        </>
    );
}
