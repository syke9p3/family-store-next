"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const BackButton = () => {

    const router = useRouter()
    return (
        <button
            className='px-4 py-2'
            onClick={() => router.back()}>
            &lt;-
        </button>
    )
}

export default BackButton