import { TrendingUp } from "lucide-react";
import NewLink from "./NewLink";
export default function News() {
    return (
        <>
            <div className="mt-6 flex items-center justify-between">
                <p className="text-primary text-base font-medium">Tin tức</p>
                <a className="cursor-pointer" href="/tin-tuc">
                    <p className="t1-flex-center justify-between gap-1 text-gray-500 italic">
                        <span>Xem tất cả</span>
                        <TrendingUp />
                    </p>
                </a>
            </div>
            {[...Array(20)].map(() => (
                <NewLink
                    title="Gợi ý đáp án đề thi môn Toán tốt nghiệp THPT 2025."
                    url="/tin-tuc/goi-y-dap-an-de-thi-mon-toan-tot-nghiep-thpt-2025-7a057se02uo1"
                    image="https://mapstudy.sgp1.digitaloceanspaces.com/blog/7a057s902und/7hatq8803p2l-1750848712712.png"
                    createdAt="15:18 - 20/6/2025"
                />
            ))}
        </>
    );
}
