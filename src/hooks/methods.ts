import { getAxiosInstance } from "./instance";

export const getDataFetch = (
    url: string,
    { params, query }: { params?: string; query?: string } = {}
) => {
    const endpoint = `${url}${params ? `/${params}` : ""}${query ? `?${query}` : ""}`;
    const queryKey = [url, params, query].filter(Boolean);

    return {
        queryKey,
        queryFn: async () => {
            const axiosInstance = getAxiosInstance();
            const response = await axiosInstance.get(endpoint);
            return response.data;
        },
    };
};
