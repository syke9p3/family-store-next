import clsx from 'clsx';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React, { useRef } from 'react'
import { HiXMark } from 'react-icons/hi2';
import { IoIosSearch } from 'react-icons/io';

interface SearchProps {
    query: string
}

const Search = ({ query, }: SearchProps) => {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleInputChange = (term: string) => {
        const params = new URLSearchParams(searchParams);

        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }

        replace(`${pathname}?${params.toString()}`);
    }

    return (
        <>
            {/* Search Bar*/}
            <div className="border rounded-md flex items-center">
                <button className="px-3 border-r-[1px]">
                    <IoIosSearch />
                </button>
                <input ref={inputRef} type="text" placeholder="Search item"
                    className="text-sm w-full h-full p-2 rounded-md"
                    onChange={(e) => handleInputChange(e.target.value)}
                    defaultValue={searchParams.get('query')?.toString()}
                />
                <button className={clsx("px-3", {
                    'hidden': query === "",
                    'block': query !== "",
                })}
                    onClick={() => {
                        handleInputChange("");
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
        </>
    )
}

export default Search