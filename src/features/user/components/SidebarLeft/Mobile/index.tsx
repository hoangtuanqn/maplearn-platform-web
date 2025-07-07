import { Menu } from "lucide-react";

const SideBarMobile = () => {
    return (
        <aside className="hidden w-[6rem] pl-6 md:block lg:hidden">
            <div
                className="sticky max-h-[calc(100vh-60px-20px)] w-[100%] overflow-auto rounded-md pt-5"
                style={{ top: "56px" }}
            >
                <div className="flex cursor-pointer items-center rounded-md px-4 py-2.5 hover:bg-[rgba(26,79,140,0.06)]">
                    <Menu className="size-6" />
                </div>
                <a
                    className="flex cursor-pointer items-center rounded-lg px-4 py-2.5 hover:bg-[rgba(26,79,140,0.06)]"
                    href="/khoa-hoc"
                >
                    <div className="flex-center size-8">
                        <img src="/assets/icons/course.svg" alt="" />
                    </div>
                </a>
                <a
                    className="flex cursor-pointer items-center rounded-lg px-4 py-2.5 hover:bg-[rgba(26,79,140,0.06)]"
                    href="/thi-online"
                >
                    <div className="flex-center size-8">
                        <img src="/assets/icons/online-exam.svg" alt="" />
                    </div>
                </a>
                <a
                    className="flex cursor-pointer items-center rounded-lg px-4 py-2.5 hover:bg-[rgba(26,79,140,0.06)]"
                    href="/dau-truong-ly-thuyet"
                >
                    <div className="flex-center size-8">
                        <img src="/assets/icons/theory-arena.svg" alt="" />
                    </div>
                </a>
                <a
                    className="flex cursor-pointer items-center rounded-lg px-4 py-2.5 hover:bg-[rgba(26,79,140,0.06)]"
                    target="_blank"
                    href="https://www.sachmap.vn/"
                >
                    <div className="flex-center size-8">
                        <img src="/assets/icons/book-map.svg" alt="" />
                    </div>
                </a>
                <a
                    className="flex cursor-pointer items-center rounded-lg px-4 py-2.5 hover:bg-[rgba(26,79,140,0.06)]"
                    href="/tai-lieu"
                >
                    <div className="flex-center size-8">
                        <img src="/assets/icons/document.svg" alt="" />
                    </div>
                </a>
            </div>
        </aside>
    );
};

export default SideBarMobile;
