// useFetch.ts
//'use client'; // Mark this as a Client Component

import { useQuery } from '@tanstack/react-query';

export const useFetch = (
    endpointFn: () => Promise<any>, 
    options = {} 
) => {
    const queryKey = [endpointFn.name]; 
    const query = useQuery({
        queryKey, 
        queryFn: endpointFn,
        staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
        ...options, 
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