// @ts-nocheck
import { useQuery } from '@tanstack/react-query';
import { get } from './methods';
import { endpoints } from './endpiont';
// import { endpoints } from './endpoints'; // Now TypeScript will recognize the types

export const useFetch = (endpointKey: keyof typeof endpoints, options = {}) => {
    const endpoint = endpoints[endpointKey];
    return useQuery({
        queryKey: [endpointKey], // Unique key for the query
        queryFn: () => get(endpoint.url), // Function to fetch data
        ...options, // Additional options like `enabled`, `staleTime`, etc.
    });
};