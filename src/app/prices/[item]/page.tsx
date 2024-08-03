import { products } from "@/app/lib/placeholder-data"

const getProductById = async (id: string) => {
    return products.find((product) => {
        return product.id === id
    })
}

const Page = async ({ params }: { params: { item: string } }) => {

    const product = await getProductById(params.item)

    return (
        <div>
            {product?.name}
        </div>
    )
}

export default Page