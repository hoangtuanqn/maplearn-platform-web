const DisplatNoData = ({ title = "Không có dữ liệu để hiển thị" }: { title: string }) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <img alt="" className="h-35" src="/assets/images/common/study.png" />
            <span className="mt-8 text-center text-lg font-semibold text-[#295779]">{title}</span>
        </div>
    );
};

export default DisplatNoData;
