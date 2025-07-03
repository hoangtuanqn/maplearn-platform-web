import { KeyRound } from "lucide-react";

const CourseActive = () => {
    return (
        <div>
            <a
                className="!rounded-block bg-primary hover:bg-primary-light mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl border-2 border-transparent py-4 whitespace-nowrap text-white shadow-sm duration-150 ease-out"
                href="/kich-hoat-the"
            >
                <KeyRound />
                <span className="text-md">Kích hoạt thẻ</span>
            </a>
        </div>
    );
};

export default CourseActive;
