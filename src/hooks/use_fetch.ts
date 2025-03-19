// useFetch.ts


import { useQuery } from '@tanstack/react-query';

export const useFetch = (
    endpointFn: (params?: Record<string, any>) => Promise<any>, // Endpoint function
    params: Record<string, any> = {}, // Parameters (can be path or query parameters)
    options = {} // Additional options
) => {
    // Determine if the endpoint function expects path or query parameters
    const queryKey = [endpointFn.name, params]; // Include parameters in the query key

    const query = useQuery({
        queryKey, // Use the derived query key
        queryFn: () => endpointFn(params), // Pass parameters to the endpoint function
        staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
        ...options, // Additional options like `enabled`, `refetchOnWindowFocus`, etc.
    });

    // Manually refetch data
    const getData = async () => {
        try {
            const result = await query.refetch();
            return result.data;
        } catch (error) {
            console.error('Error fetching data:', error);
            throw error;
        }
    };

    return {
        data: query.data, // The fetched data
        getData, // Function to manually refetch data
        error: query.error, // Error object (if any)
        isLoading: query.isLoading, // Loading state
        isFetching: query.isFetching, // Fetching state (useful for manual refetches)
    };
};