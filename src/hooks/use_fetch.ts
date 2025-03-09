// // hook.tsx
// 'use client'; // Mark this as a Client Component

// import { useQuery } from '@tanstack/react-query';

// export const useFetch = (
//     endpointFn: () => Promise<any>, // Endpoint function
//     queryKey: any[], // Unique query key
//     options = {} // Additional options
// ) => {
//     const query = useQuery({
//         queryKey, // Use the provided query key
//         queryFn: endpointFn, // Use the endpoint function to fetch data
//         staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
//         ...options, // Additional options like `enabled`, `refetchOnWindowFocus`, etc.
//     });

//     // Manually refetch data
//     const getData = async () => {
//         try {
//             const result = await query.refetch();
//             return result.data;
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             throw error;
//         }
//     };

//     return {
//         data: query?.data, // The fetched data
//         getData, // Function to manually refetch data
//         error: query?.error, // Error object (if any)
//         isLoading: query?.isLoading, // Loading state
//         isFetching: query?.isFetching, // Fetching state (useful for manual refetches)
//     };
// };

// hook.tsx
'use client'; // Mark this as a Client Component

import { useQuery } from '@tanstack/react-query';

export const useFetch = (
    endpointFn: () => Promise<any>, // Endpoint function
    options = {} // Additional options
) => {
    const queryKey = [endpointFn.name]; // Use the endpoint function name as the query key

    const query = useQuery({
        queryKey, // Use the derived query key
        queryFn: endpointFn, // Use the endpoint function to fetch data
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