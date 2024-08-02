'use client'

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { HiXMark } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";

const categoryIdToName = (id: string): string => {
    const cat = categories.find((cat) => {
        // console.log(`${cat.id} and ${id} are ${cat.id === id}`)
        return cat.id === id;
    });

    return cat?.name as string;
}

const categories = [
    {
        id: 'canned',
        name: 'Canned'
    },
    {
        id: 'gamot',
        name: 'Gamot'
    },
    {
        id: 'sabon',
        name: 'Sabon'
    },
    {
        id: 'chicherya',
        name: 'Chicherya'
    },

]

type Product = {
    id: string,
    name: string,
    price: number,
    category_id: string
}

type Products = Product[] | []

const products: Products = [
    {
        id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
        name: "Ariel",
        price: 17,
        category_id: categories[1].id
    },
    {
        id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
        name: "Amoxicilin",
        price: 17,
        category_id: categories[1].id
    },
    {
        id: "d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",
        name: "Rexidol",
        price: 17,
        category_id: categories[1].id
    },
    {
        id: "d6e15727-9fe1-4961-8c5b-ea44a1bd81aa",
        name: "Solmux",
        price: 32,
        category_id: categories[1].id
    },
    {
        id: "d6e15737-9ee1-4961-8c5b-ea44a9bd81aa",
        name: "Biogesic",
        price: 18,
        category_id: categories[1].id
    },
    {
        id: "d6e15727-9fe1-4961-8c3b-ea44a9bd81aa",
        name: "Century Tuna 100g",
        price: 17,
        category_id: categories[0].id
    },
    {
        id: "d6e15727-9fe1-4561-8c5b-ea44a9bd81aa",
        name: "Century Tuna 200g",
        price: 18,
        category_id: categories[0].id
    },
    {
        id: "d6e15727-9fe1-4961-8c5b-ea44a9bd82aa",
        name: "Argentina Corned Beef 100g",
        price: 32,
        category_id: categories[0].id
    },
    {
        id: "d6e15727-9fc1-4961-8c5b-ea44a9bd81aa",
        name: "Argentina Corned Beef 125g",
        price: 32,
        category_id: categories[0].id
    },
    {
        id: "d6e35727-9fe1-4961-8c5b-ea44a9bd81aa",
        name: "Argentina Corned Beef 150g",
        price: 32,
        category_id: categories[0].id
    },
]

interface IFilter {
    query: string,
    category: string
}

const filterItems = (products: Products, filters: IFilter) => {

    let { query, category } = filters

    if (!query && !category) {
        return products;
    }

    query = query.toLowerCase();
    category = category.toLowerCase();

    const filteredItems = products.filter((product) => {
        const productName = product.name.toLowerCase();
        const productCategory = product.category_id.toLowerCase();

        const matchesName = productName.includes(query);
        const matchesCategory = productCategory.includes(category);

        return matchesName && matchesCategory;
    })

    return filteredItems;
}


export default function Page() {

    const [items, setItems] = useState<Product[]>([]);

    useEffect(() => {
        setItems(products)
    }, [])

    const inputRef = useRef<HTMLInputElement | null>(null);
    const [query, setQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");

    const filteredItems = useMemo(() => {
        const filters = { query, category: selectedCategory }
        return filterItems(items, filters)
    }, [query, items, selectedCategory])

    const handleSearch = (term: string) => {
        setQuery(term);
    }

    const handleCategoryChange = (category_id: string) => {
        setSelectedCategory(category_id);
    }

    return (
        <main className="relative flex min-h-screen flex-col gap-4 bg-white max-h-[100dvh]">
            <section id="header" className={clsx("absolute px-3 py-2 bg-white border w-full shadow-sm"
            )}>
                {/* Search */}
                <div className="border rounded-md flex items-center">
                    <button className="px-3 border-r-[1px]">
                        <IoIosSearch />
                    </button>
                    <input ref={inputRef} type="text" placeholder="Search item"
                        className="text-sm w-full h-full p-2 rounded-md"
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <button className={clsx("px-3", {
                        'hidden': query === "",
                        'block': query !== "",
                    })}
                        onClick={() => {
                            setQuery("");
                            if (inputRef.current) {
                                inputRef.current.value = "";
                            }
                        }}
                    >
                        <p className="opacity-50">
                            <HiXMark />
                        </p>
                    </button>
                </div>
            </section>

            <section id="list" className="divide-y-4 grid my-16 pb-3 overflow-y-scroll">
                <div className="pt-2 pb-4 px-3 overflow-x-scroll min-h-[4rem]">
                    <ul id="categories" className="text-xs flex gap-1 bg-white">
                        <button
                            onClick={() => handleCategoryChange("")}
                            className={clsx("px-3 py-2 border rounded-md text-nowrap", {
                                'text-white bg-black': selectedCategory === ""
                            })}>Lahat</button>
                        {
                            categories.map((category, i) => (
                                <button key={i}
                                    className={clsx("px-3 py-2 border rounded-md text-nowrap", {
                                        'text-white bg-black': selectedCategory === category.id
                                    })}
                                    onClick={() => handleCategoryChange(category.id)}
                                >{category.name}</button>
                            ))
                        }
                    </ul>
                </div>
                {filteredItems.length > 0 ? filteredItems.map((item, i) => (
                    <li key={i} className="cursor-pointer p-3 flex justify-between bg-white">
                        <div>
                            <p className="text-sm">{item.name}</p>
                            <p className="text-xs text-gray-500">{categoryIdToName(item.category_id)}</p>
                        </div>
                        <div className="">
                            <p className="font-mono"><span className="mr-1">₱</span>{item.price}</p>
                        </div>
                    </li>
                ))
                    : (
                        <div className="p-2 text-center opacity-50 h-full bg-red">No {`${!selectedCategory ? '' : `"${categoryIdToName(selectedCategory)}"`}`} items found</div>
                    )
                }
            </section>
            <section id="footer" className="fixed bottom-0 bg-white border w-full p-3 shadow-sm">
                <button className="border cursor-pointer rounded-md p-3 flex justify-center items-center gap-1 text-blue-500 bg-white w-full">
                    <p className="text-xs">
                        <FaPlus />
                    </p>
                    <p className="text-sm">Add New Item</p>
                </button>
            </section>
        </main>
    );
}
