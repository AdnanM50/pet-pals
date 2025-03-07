// @ts-nocheck
import { useQuery } from '@tanstack/react-query';
import { get } from './methods';
import { endpoints } from './endpiont';


export const useFetch = (endpointFn: () => Promise<any>, options = {}) => {
    const query = useQuery({
        queryKey: [endpointFn.name],
        queryFn: endpointFn, 
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
