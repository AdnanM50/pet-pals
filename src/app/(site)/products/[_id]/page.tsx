import ProductsDetails from './products_details'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import React from 'react'
import { getProductsParams } from '@/hooks/endpiont';
import { getDataFetch } from '@/hooks/methods';
import { cookies } from 'next/headers';
import { initializeAxiosInstance } from '@/hooks/instance';

const Page = async ({ params: { _id } }: { params: { _id: string } }) => {
    const token = cookies().get("accessToken")?.value;

    if (token) {
        initializeAxiosInstance(token);
    }
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(getDataFetch(getProductsParams(_id)))

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ProductsDetails id={_id} />
        </HydrationBoundary>
    )
}

export default Page