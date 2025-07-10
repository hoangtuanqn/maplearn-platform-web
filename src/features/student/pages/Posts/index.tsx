import NewLink from "../../components/SidebarRight/NewLink";
const posts = [
    {
        title: "Gợi ý đáp án đề thi môn Toán tốt nghiệp THPT 2025.",
        url: "/tin-tuc/goi-y-dap-an-de-thi-mon-toan-tot-nghiep-thpt-2025-7a057se02uo1",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/blog/7a057s902und/7hatq8803p2l-1750848712712.png",
        createAt: "15:18 - 20/6/2025",
    },
    {
        title: "Gợi ý đáp án đề thi môn Vật Lý tốt nghiệp THPT 2025.",
        url: "/tin-tuc/goi-y-dap-an-de-thi-mon-vat-ly-tot-nghiep-thpt-2025-7a0bt0d02qus",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/blog/7a0bt0402qtb/7hatgne03oyp-1750848700298.png",
        createAt: "15:23 - 20/6/2025",
    },
    {
        title: "Gợi ý đáp án đề thi môn Hoá Học tốt nghiệp THPT 2025.",
        url: "/tin-tuc/goi-y-dap-an-de-thi-mon-hoa-hoc-tot-nghiep-thpt-2025-7a0d62x02mej",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/blog/7a0d62t02mdp/7hat6xi0419y-1750848687702.png",
        createAt: "15:24 - 20/6/2025",
    },
    {
        title: "Gợi ý đáp án đề thi môn Sinh Học tốt nghiệp THPT 2025.",
        url: "/tin-tuc/goi-y-dap-an-de-thi-mon-sinh-hoc-tot-nghiep-thpt-2025-7a0e2zw02uky",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/blog/7a0e2zr02ujf/7hasxl303w2q-1750848675591.png",
        createAt: "15:25 - 20/6/2025",
    },
    {
        title: "Gợi ý đáp án đề thi môn Tiếng Anh tốt nghiệp THPT 2025.",
        url: "/tin-tuc/goi-y-dap-an-de-thi-mon-tieng-anh-tot-nghiep-thpt-2025-7a0f2f002hn2",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/blog/7a0f2ev02hmv/7hasmqx03xfi-1750848661545.png",
        createAt: "15:26 - 20/6/2025",
    },
    {
        title: "Gợi ý đáp án đề thi môn Toán tốt nghiệp THPT 2024.",
        url: "/tin-tuc/goi-y-dap-an-de-thi-mon-toan-tot-nghiep-thpt-2024-ss0744a000da",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/blog/sn4cz9w00ew1/sse7ts8006kv-1718867802248.jpg",
        createAt: "14:41 - 27/6/2024",
    },
    {
        title: "Gợi ý đáp án đề thi môn Vật Lý tốt nghiệp THPT 2024.",
        url: "/tin-tuc/goi-y-dap-an-de-thi-mon-vat-ly-tot-nghiep-thpt-2024-ss0744a000e2",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/blog/sn4mwau00f3a/sse7j1h006jt-1718867788325.jpg",
        createAt: "8:0 - 28/6/2024",
    },
    {
        title: "Gợi ý đáp án đề thi môn Hoá học tốt nghiệp THPT 2024.",
        url: "/tin-tuc/goi-y-dap-an-de-thi-mon-hoa-hoc-tot-nghiep-thpt-2024-ss0744a000fj",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/blog/sn4ppga00f45/sse7475006iu-1718867769089.jpg",
        createAt: "8:0 - 28/6/2024",
    },
    {
        title: "Gợi ý đáp án đề thi môn Sinh học tốt nghiệp THPT 2024.",
        url: "/tin-tuc/goi-y-dap-an-de-thi-mon-sinh-hoc-tot-nghiep-thpt-2024-ss0744b000gm",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/blog/sn4vhg500f7y/sse6rfv006hf-1718867752555.jpg",
        createAt: "8:0 - 28/6/2024",
    },
    {
        title: "Gợi ý đáp án đề thi môn Tiếng Anh tốt nghiệp THPT 2024.",
        url: "/tin-tuc/goi-y-dap-an-de-thi-mon-tieng-anh-tot-nghiep-thpt-2024-ss0744b000hz",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/blog/sn4zde900f9g/sse6etn006gb-1718867736203.jpg",
        createAt: "8:0 - 28/6/2024",
    },
    {
        title: "Gợi ý đáp án đề thi môn Tiếng Anh tốt nghiệp THPT 2023.",
        url: "/tin-tuc/goi-y-dap-an-de-thi-mon-tieng-anh-tot-nghiep-thpt-2023-ss0744a000c1",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/blog/sh345vc008j7/sseb0y9006tn-1718867951505.jpg",
        createAt: "16:20 - 12/6/2024",
    },
    {
        title: "Gợi ý đáp án đề thi môn Sinh học tốt nghiệp THPT 2023.",
        url: "/tin-tuc/goi-y-dap-an-de-thi-mon-sinh-hoc-tot-nghiep-thpt-2023-ss0744a000b3",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/blog/sh311a8008eq/sse8g7l006oi-1718867831313.jpg",
        createAt: "16:18 - 12/6/2024",
    },
    {
        title: "Gợi ý đáp án đề thi môn Hoá học tốt nghiệp THPT 2023.",
        url: "/tin-tuc/goi-y-dap-an-de-thi-mon-hoa-hoc-tot-nghiep-thpt-2023-ss0744a000aa",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/blog/sh2vevj00883/sse8s4s006pc-1718867846764.jpg",
        createAt: "16:13 - 12/6/2024",
    },
    {
        title: "Gợi ý đáp án đề thi môn Vật lý tốt nghiệp THPT 2023.",
        url: "/tin-tuc/goi-y-dap-an-de-thi-mon-vat-ly-tot-nghiep-thpt-2023-ss0744a0009t",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/blog/sh2o79n0083i/sse9637006qi-1718867864851.jpg",
        createAt: "16:8 - 12/6/2024",
    },
    {
        title: "Gợi ý đáp án đề thi môn Toán tốt nghiệp THPT 2023.",
        url: "/tin-tuc/goi-y-dap-an-de-thi-mon-toan-tot-nghiep-thpt-2023-ss074490008j",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/blog/sh1yu71007oa/sse9i4w006rp-1718867880464.jpg",
        createAt: "15:48 - 27/6/2024",
    },
    {
        title: "🔥 ĐỀ THI MINH HỌA 2024 CỦA BỘ GIÁO DỤC.",
        url: "/tin-tuc/de-thi-minh-hoa-2024-cua-bo-giao-duc-ss0744600076",
        image: "https://mapstudy.sgp1.digitaloceanspaces.com/blog/sh1atr2007d9/sse9r91006sc-1718867892277.jpg",
        createAt: "15:28 - 12/6/2025",
    },
];
const Posts = () => {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {posts.map(({ title, url, image, createAt }) => (
                    <NewLink key={url} title={title} url={url} image={image} createdAt={createAt} variant="posts"/>
                ))}
            </div>
        </>
    );
};
export default Posts;
