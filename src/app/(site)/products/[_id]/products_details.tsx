'use client'

import { getProductsParams } from "@/hooks/endpiont"
import { useFetch } from "@/hooks/use_fetch"

const ProductsDetails = ({ id }: { id: string }) => {
    const { data } = useFetch(getProductsParams(id))

    return (
        <div>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
    )
}

export default ProductsDetails