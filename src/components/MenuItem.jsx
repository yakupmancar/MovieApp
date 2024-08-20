import Link from 'next/link'
import React from 'react'

const MenuItem = ({ mn }) => {
    return (
        <Link className='hover:underline' href={mn.url}>
            {mn.name}
        </Link>
    )
}

export default MenuItem