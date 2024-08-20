"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Tabs = () => {

    const searchParams = useSearchParams();
    const request = searchParams.get("request");
    console.log(request);

    const tabs = [
        {
            name: "En Populer",
            url: "popular"
        },
        {
            name: "En Son Çıkanlar",
            url: "now_playing"
        },
        {
            name: "Yakında Gelecekler",
            url: "upcoming"
        }
    ]

    return (
        <div className='p-5 m-5 flex items-center justify-center gap-5 text-sm md:text-base lg:text-lg w-full'>
            {
                tabs.map((tab, i) => (
                    <Link key={i} className={`cursor-pointer hover:opacity-75 transition-opacity hover:underline ${tab.url === request ? "underline underline-offset-8 text-amber-600" : ""}`} href={`?request=${tab.url}`}>
                        <div className={`${i === 1 ? "border-l border-r px-5" : ""}`}>
                            {tab.name}
                        </div>
                    </Link>
                ))

            }
        </div>
    )
}
export default Tabs
