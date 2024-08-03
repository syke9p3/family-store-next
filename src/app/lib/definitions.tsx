
export type Product = {
    id: string,
    name: string,
    price: number,
    category_id: string
}

export type Products = Product[] | []

export type Category = {
    code: string,
    name: string
}

export interface IFilter {
    query: string,
    category: string
}