'use client'

import clsx from "clsx";
import { Suspense, useState } from "react";
import Search from "../../ui/prices/search";
import CategorySwitcher from "../../ui/prices/category-switcher";
import Pricelist from "../../ui/prices/pricelist";
import AddNewItem from "../../ui/prices/add-item-button";
import { ListSkeleton } from "@/app/ui/skeleton";

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
            <section id="search" className={clsx("fixed px-6 py-4 bg-white w-full shadow-sm"
            )}>
                <Search query={query} />
            </section>
            <section id="list" className="grid mt-20 pb-3 overflow-y-scroll">
                <CategorySwitcher setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
                <Suspense fallback={<ListSkeleton />}>
                    <Pricelist query={query} selectedCategory={selectedCategory} />
                </Suspense>
            </section>
            <AddNewItem />
        </main>
    );
}
