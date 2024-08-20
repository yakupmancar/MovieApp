import Image from 'next/image';
import React from 'react'

const getMovie = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`)
    return await res.json();
}

const Page = async ({ params }) => {

    const id = params.id
    const movieDetail = await getMovie(id);

    console.log(params.id);
    return (
        <div className='relative p-8 min-h-screen'>
            <Image
                className='object-cover opacity-75'
                fill
                src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`}
                alt={movieDetail?.title || 'Movie Image'}
            />

            <div className='absolute text-white'>
                <h1 className='text-3xl font-bold my-3'>{movieDetail?.title ? movieDetail?.title : "Movie Title"}</h1>
                <p className='w-1/2'>{movieDetail?.overview}</p>
                <h1 className='my-3'>
                    {movieDetail?.release_date ? movieDetail?.release_date : "2000-08-14"} / IMDB : {movieDetail?.vote_average.toFixed(2)}
                </h1>
                <button className='border-2 hover:text-black hover:bg-gray-100 rounded-lg py-2 px-10 mt-4 font-bold text-lg'>Trial</button>
            </div>
        </div>
    )
}

export default Page