'use client'

import { getProducts, getProductsCategory } from "@/hooks/endpiont"
import { useFetch } from "@/hooks/use_fetch"


export default function Products() {
    const { data, refetch } = useFetch(getProducts)
    const { data: category } = useFetch(getProductsCategory)

    return (
        <div>
            <h1>Posts</h1>
            <pre>Product {JSON.stringify(data, null, 2)}</pre>
            <pre>Category {JSON.stringify(category, null, 2)}</pre>
            <button onClick={() => refetch()}>button</button>
        </div>
    )
}