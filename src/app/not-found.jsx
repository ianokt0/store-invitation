"use client"
import React from 'react'
import { FileSearch } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'

const Page = () => {
    const router = useRouter()
    return (
        <div className="min-h-screen max-w-xl mx-auto flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-4">
                <FileSearch size={44} className="text-color-primary hover:scale-105" />
                <h3 className="text-color-primary text-4xl font-bold hover:scale-105">NOT FOUND 404</h3>
            </div>
            <div className="mt-4">
                <button onClick={() => router.back()} className="text-white bg-color-secondary p-2 rounded-lg font-bold hover:scale-105">
                    Kembali
                </button>
            </div>
        </div>
    )
}

export default Page