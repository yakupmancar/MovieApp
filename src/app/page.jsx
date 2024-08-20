import MovieDatas from '@/components/MovieDatas'
import React from 'react'

const Page = async ({ searchParams }) => {
    console.log(searchParams.request)
    console.log(process.env.API_KEY)

    const res = await fetch(`https://api.themoviedb.org/3/${searchParams.request ? "movie/" + searchParams.request : "trending/all/day"}?api_key=${process.env.API_KEY}&language=en-US&page=1`)

    const datas = await res.json();
    console.log(datas);


    return (
        <div className='flex flex-wrap justify-center items-center gap-5 w-full sm:w-auto px-7 mx-2 md:mx-10 mb-10'>
            {
                datas?.results?.map((data, i) => (
                    <MovieDatas data={data} key={i} />
                ))
            }
        </div>
    )
}

export default Page