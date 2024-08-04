import { Category } from '@/app/lib/definitions'
import { categories } from '@/app/lib/placeholder-data'
import clsx from 'clsx'
import React, { Dispatch, SetStateAction } from 'react'

interface CategorySwitcherProps {
    selectedCategory: string
    setSelectedCategory: Dispatch<SetStateAction<string>>,
}

const CategorySwitcher = ({
    setSelectedCategory,
    selectedCategory
}: CategorySwitcherProps) => {

    const handleCategoryChange = (category_id: string) => {
        setSelectedCategory(category_id);
    }

    return (
        <div className="pt-2 pb-4 px-6 overflow-x-scroll min-h-[4rem]">
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
                                'text-white bg-black': selectedCategory === category.code
                            })}
                            onClick={() => handleCategoryChange(category.code)}
                        >{category.name}</button>
                    ))
                }
            </ul>
        </div>
    )
}

export default CategorySwitcher