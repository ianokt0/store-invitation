import React from 'react'
import { ShoppingCart } from "@phosphor-icons/react"

const Cart = () => {
    return (
        <div className="relative group">
            <span className="absolute bottom-4 start-6 bg-color-dark text-color-light group-hover:bg-color-primary rounded-md p-0.5 font-semibold text-xs">120</span>
            <ShoppingCart size={32} />
        </div>
    )
}

export default Cart