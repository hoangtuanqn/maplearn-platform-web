import { useQuery } from "@tanstack/react-query";
import apiPublic from "~/utils/apis/publicApi";

export interface DocumentType {
    id: string;
    title: string;
    views: number;
    created_at: string;
    tags: { id: number; name: string; created_at: string }[];
}

export interface DocumentListResponse {
    current_page: number;
    data: DocumentType[];
    last_page: number;
}

export const fetchDocuments = async (page: number = 1, limit: number = 2): Promise<DocumentListResponse> => {
    const res = await apiPublic.get(`/documents?page=${page}&limit=${limit}`);
    return res.data.data;
};

export const useDocumentsQuery = (page: number, limit: number) => {
    return useQuery<DocumentListResponse>({
        queryKey: ["user-documents", page, limit],
        queryFn: () => fetchDocuments(page, limit),
        placeholderData: (prev) => prev,
    });
};
