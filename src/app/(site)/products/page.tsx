
import { getDataFetch } from "@/hooks/methods";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";
import Products from "./products";
import { getProducts, getProductsCategory } from "@/hooks/endpiont";
import { cookies } from "next/headers";
import { initializeAxiosInstance } from "@/hooks/instance";

export default async function PostsPage() {
  const token = cookies().get("accessToken")?.value;

  if (token) {
    initializeAxiosInstance(token);
  }

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(getDataFetch(getProducts));
  await queryClient.prefetchQuery(getDataFetch(getProductsCategory));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Products />
    </HydrationBoundary>
  );
}