import { categories, products } from "@/app/lib/placeholder-data";
import { IFilter, Product, Products } from '@/app/lib/definitions'
import React, { useEffect, useMemo, useState } from 'react'
import Link from "next/link";


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

const categoryIdToName = (id: string): string => {
    const cat = categories.find((cat) => {
        // console.log(`${cat.id} and ${id} are ${cat.id === id}`)
        return cat.code === id;
    });

    return cat?.name as string;
}

const sortAlphabetically = (p: Products) => {
    const sortedProducts = p.sort((a, b) => a.name.localeCompare(b.name));
    return sortedProducts;
}

interface PricelistProps {
    query: string,
    selectedCategory: string
}

const Pricelist = ({
    query,
    selectedCategory
}: PricelistProps) => {

    const [items, setItems] = useState<Product[]>([]);

    useEffect(() => {
        setItems(products)
    }, [])

    const filteredItems = useMemo(() => {
        const filters = { query, category: selectedCategory }
        return sortAlphabetically(filterItems(items, filters))
    }, [query, items, selectedCategory])

    return (
        <>
            {filteredItems.length > 0 ? filteredItems.map((item, i) => (
                <Link key={i} href={`/prices/${item.id}`}>
                    <li className="hover:bg-gray-100 cursor-pointer p-3 flex justify-between bg-white /items-center">
                        <div>
                            <p className="text-sm">{item.name}</p>
                            <p className="text-xs text-gray-500">{categoryIdToName(item.category_id)}</p>
                        </div>
                        <div className="pr-2">
                            <p className="font-mono font-semibold text-xl">
                                <span>{item.price}</span>
                            </p>
                        </div>
                    </li>
                </Link>
            ))
                : (
                    <div className="p-2 text-center opacity-50 h-screen bg-red">No {`${!selectedCategory ? '' : `"${categoryIdToName(selectedCategory)}"`}`} items found {`${!query ? '' : `named "${query}"`}`} </div>
                )
            }
        </>
    )
}

export default Pricelist