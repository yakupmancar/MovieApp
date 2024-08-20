"use client"
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";


const Theme = () => {

    const [mouted, setMouted] = useState(false);
    const { systemTheme, theme, setTheme } = useTheme()

    useEffect(() => {
        setMouted(true)
    }, [])

    const themeMode = theme === "system" ? systemTheme : theme

    return (
        <div>
            {
                mouted && (
                    themeMode === "dark" ?
                        <MdOutlineLightMode onClick={() => setTheme('light')} className='cursor-pointer' size={25} />
                        :
                        <MdOutlineDarkMode onClick={() => setTheme('dark')}  className='cursor-pointer' size={25} />
                )
            }

        </div>
    )
}

export default Theme