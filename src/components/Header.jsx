"use client"
import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import MenuItem from './MenuItem';
import Link from 'next/link';
import Theme from './Theme';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from "../../public/logo.png"

const Header = () => {

    const [keyword, setKeyword] = useState("");
    const router = useRouter();

    const menu = [
        {
            name: "About",
            url: "/about"
        },
        {
            name: "Sign In",
            url: "/login"
        }
    ]

    const searchFunc = (e) => {
        if (e.key === "Enter" && keyword.length >= 3) {
            router.push(`/search/${keyword}`)
            setKeyword("");
        }

    }


    return (
        <div className='flex items-center gap-5 md:gap-7 py-2 mx-5 md:mx-12'>
            <Link href="/" className='min-w-20 w-32 md:w-40 lg:w-52'>
                <Image src={logo} />
            </Link>
            <div className='flex flex-1 items-center border border-gray-300 p-1 md:p-2 lg:p-3 rounded-lg'>
                <input onKeyDown={searchFunc} onChange={(e) => setKeyword(e.target.value)} value={keyword} placeholder="Search for movies..." className='bg-transparent flex-1 outline-none w-28 sm:w-auto text-xs sm:text-base' type="text" />
                <IoSearch className='text-base sm:text-xl md:text-2xl' />
            </div>

            <div>
                <Theme />
            </div>

            <div className='flex items-center gap-x-5'>
                {
                    menu.map((mn, i) => (
                        <MenuItem mn={mn} key={i} />
                    ))
                }
            </div>
        </div>
    )
}

export default Header