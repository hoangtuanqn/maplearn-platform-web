import { useState } from "react";
import NewLink from "../../components/SidebarRight/NewLink";
import { usePostsQuery, PostListResponse, PostType } from "./postsApi";

const Posts = () => {
    const [page, setPage] = useState(1);
    const [limit] = useState(10);
    const {
        data: postsData,
        isLoading,
        isError,
        error,
    } = usePostsQuery(page, limit) as {
        data: PostListResponse | undefined;
        isLoading: boolean;
        isError: boolean;
        error: unknown;
    };

    return (
        <>
            <section className="min-h-screen px-5 pb-10">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                    {isLoading && <div>Đang tải bài viết...</div>}
                    {isError && (
                        <div className="text-red-500">
                            Lỗi tải bài viết: {(error as Error)?.message || "Unknown error"}
                        </div>
                    )}
                    {postsData && postsData.data.length === 0 && <div>Không có bài viết nào.</div>}
                    {postsData &&
                        postsData.data.map((post: PostType) => (
                            <NewLink
                                key={post.url}
                                title={post.title}
                                url={post.url}
                                image={post.thumbnail}
                                createdAt={post.createdAt}
                                variant="posts"
                            />
                        ))}
                </div>
                <div className="t1-flex-center mt-6">
                    <nav
                        className="relative z-0 flex flex-wrap justify-center -space-x-px rounded-md"
                        aria-label="Pagination"
                    >
                        <div className="t1-flex-center flex gap-1.5">
                            <button
                                className={`t1-flex-center flex size-9 cursor-pointer rounded-md duration-100 hover:bg-[#eeeeee] active:bg-[#e0e0e0] ${page === 1 ? "pointer-events-none opacity-25" : ""}`}
                                onClick={() => setPage(page - 1)}
                                disabled={page === 1}
                                aria-label="Trang trước"
                            >
                                <svg
                                    className="h-5 w-5 rotate-180"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.08"
                                        stroke="#333"
                                        strokeWidth="2"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                            {postsData &&
                                postsData.last_page &&
                                Array.from({ length: postsData.last_page }, (_, i) => i + 1).map((p) => (
                                    <button
                                        key={p}
                                        className={`t1-flex-center text-md relative h-9 w-9 cursor-pointer rounded-md border duration-100 ${p === page ? "pointer-events-none border-[#128ce9] bg-white font-medium text-[#128ce9]" : "border-transparent text-[#333333] hover:bg-[#eeeeee] active:bg-[#e0e0e0]"} `}
                                        onClick={() => setPage(p)}
                                        disabled={p === page}
                                    >
                                        {p}
                                    </button>
                                ))}
                            <button
                                className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-md duration-100 hover:bg-[#eeeeee] active:bg-[#e0e0e0] ${postsData && page === postsData.last_page ? "pointer-events-none opacity-25" : ""}`}
                                onClick={() => setPage(page + 1)}
                                disabled={postsData && page === postsData.last_page}
                                aria-label="Trang sau"
                            >
                                <svg
                                    className="h-5 w-5"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M8.91 19.92L15.43 13.4C16.2 12.63 16.2 11.37 15.43 10.6L8.91 4.08"
                                        stroke="#333"
                                        strokeWidth="2"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    );
};
export default Posts;
