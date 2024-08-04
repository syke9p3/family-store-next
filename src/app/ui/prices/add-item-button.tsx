import { useRouter } from 'next/navigation'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddNewItem = () => {

    const router = useRouter()

    return (
        <section id="footer" className="fixed bottom-[6rem] right-8 pb-6 shadow-sm">
            <button
                onClick={() => router.push('/prices/add')}
                className="border cursor-pointer rounded-full p-4 flex justify-center items-center gap-1 text-white bg-teal-500  w-full">
                <p className="text-sm">
                    <FaPlus />
                </p>
            </button>
        </section>
    )
}

export default AddNewItem