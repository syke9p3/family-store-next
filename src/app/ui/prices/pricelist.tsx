import { categories, products } from "@/app/lib/placeholder-data";
import { IFilter, Product, Products } from '@/app/lib/definitions'
import React, { useEffect, useMemo, useState } from 'react'
import Link from "next/link";
import { getProducts } from "@/app/lib/data";


const categoryIdToName = (id: string): string => {
    const cat = categories.find((cat) => {
        // console.log(`${cat.id} and ${id} are ${cat.id === id}`)
        return cat.code === id;
    });

    return cat?.name as string;
}



interface PricelistProps {
    query: string,
    selectedCategory: string
}

const Pricelist = async ({
    query,
    selectedCategory
}: PricelistProps) => {

    const items = await getProducts(query, selectedCategory);

    if (!items) {
        return (
            <>Error</>
        )
    }

    // const filteredItems = useMemo(() => {
    //     const filters = { query, category: selectedCategory }
    //     return sortAlphabetically(filterItems(items, filters))
    // }, [query, items, selectedCategory])

    return (
        <>
            {items.length > 0 ? items.map((item, i) => (
                <Link key={i} href={`/prices/${item.id}`}>
                    <li className="hover:bg-gray-100 cursor-pointer py-3 px-6 flex justify-between bg-white /items-center">
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