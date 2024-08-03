'use client'

import clsx from "clsx";
import { useState } from "react";
import Search from "../../ui/prices/search";
import CategorySwitcher from "../../ui/prices/categories";
import Pricelist from "../../ui/prices/pricelist";
import AddNewItem from "../../ui/prices/additembutton";

export default function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string;
        page?: string;
    };
}) {

    const query = searchParams?.query || '';
    const [selectedCategory, setSelectedCategory] = useState("");

    return (
        <main className="relative flex min-h-screen flex-col bg-white max-h-[100dvh]">
            <section id="search" className={clsx("fixed px-3 py-2 bg-white border w-full shadow-sm"
            )}>
                <Search query={query} />
            </section>
            <section id="list" className="grid mt-16 pb-3 overflow-y-scroll">
                <CategorySwitcher setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
                <Pricelist query={query} selectedCategory={selectedCategory} />
            </section>
            {/* <AddNewItem /> */}
        </main>
    );
}
