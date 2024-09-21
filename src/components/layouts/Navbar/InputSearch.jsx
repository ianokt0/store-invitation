import React from 'react'
import { MagnifyingGlass } from "@phosphor-icons/react"

const InputSearch = () => {
    return (
        <div className="relative w-[50%]">
            <button className="absolute top-2 start-3">
                <MagnifyingGlass size={24} weight="bold" color="#784800" />
            </button>
            <input
                className="p-2 rounded-full w-full bg-color-primary z-20 pl-10 text-color-secondary"
            />
        </div>
    )
}

export default InputSearch