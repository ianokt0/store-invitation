"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../../public/banner/invitationery.png'
import InputSearch from './InputSearch'
import Cart from './Cart'
import Chat from './Chat'

const Navbar = () => {
    // console.log(logo);
    return (
        <nav className="flex flex-no-wrap lg:flex-wrap lg:py-4 justify-between py-2 w-full items-center">
            <Link href="/">
                <Image
                    src="/banner/invitationery.png"
                    width={150}
                    height={150}
                    alt="Invitationery" />
            </Link>
            <InputSearch />
            <div className="flex gap-6">
                <Link href="/cart">
                    <Cart />
                </Link>
                <Link href="/chat">
                    <Chat />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar