import React from 'react'
import "./tailwind.css"
import Header from '@/components/Header'
import Providers from './Providers'
import Tabs from '@/components/Tabs'

const Layout = ({ children }) => {
    return (
        <html leng="en">
            <body className='overflow-x-hidden'>
                <Providers>
                    <Header />
                    <Tabs />
                    {children}
                </Providers>
            </body>
        </html>
    )
}

export default Layout