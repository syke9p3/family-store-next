import { IFilter, Product, Products } from "./definitions";
import { products as DBProducts } from "./placeholder-data"


const filterItems = (products: Products, filters: IFilter) => {

    let { query, category } = filters;

    if (!query && !category) {
        return products;
    }

    query = query.toLowerCase();
    category = category.toLowerCase();

    const filteredItems = products.filter((product: Product) => {
        const productName = product.name.toLowerCase();
        const productCategory = product.category_id.toLowerCase();

        const matchesName = productName.includes(query);
        const matchesCategory = productCategory.includes(category);

        return matchesName && matchesCategory;
    })

    return filteredItems;
}

const sortAlphabetically = (p: Products) => {
    const sortedProducts = p.sort((a, b) => a.name.localeCompare(b.name));
    return sortedProducts;
}


export const getProducts = async (query: string, category: string): Promise<Products> => {

    try {
        console.log("Loading products...")
        await new Promise((resolve) => setTimeout(resolve, 100));
        const products = DBProducts;

        if (query !== "" || category !== "") {
            const filters = { query, category }
            const sortedProducts = sortAlphabetically(filterItems(products, filters))
            return sortedProducts;
        }

        return products;
    } catch (error) {
        throw new Error("Failed to load products");
    }


}  