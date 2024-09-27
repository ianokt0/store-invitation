import React from 'react'
import { ShoppingCart } from "@phosphor-icons/react"

const Cart = () => {
    return (
        <div className="relative group">
            <span className="absolute bottom-4 start-6 bg-color-dark text-color-light group-hover:bg-color-secondary rounded-md p-0.5 font-semibold text-xs">120</span>
            <ShoppingCart size={32} className="group-hover:text-color-secondary" weight="duotone" />
        </div>
    )
}

export default Cart