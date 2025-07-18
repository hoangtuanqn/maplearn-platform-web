import { useQuery } from "@tanstack/react-query";
import apiPublic from "~/utils/apis/publicApi";

export interface PostType {
    title: string;
    url: string;
    thumbnail: string;
    createdAt: string;
}

export interface PostListResponse {
    data: PostType[];
    current_page?: number;
    last_page?: number;
}

export const fetchPosts = async (page: number = 1, limit: number = 10): Promise<PostListResponse> => {
    const res = await apiPublic.get(`/posts?page=${page}&limit=${limit}`);
    return res.data.data;
};

export const usePostsQuery = (page: number, limit: number) => {
    return useQuery<PostListResponse>({
        queryKey: ["user-posts", page, limit],
        queryFn: () => fetchPosts(page, limit),
        placeholderData: (prev) => prev,
    });
};
