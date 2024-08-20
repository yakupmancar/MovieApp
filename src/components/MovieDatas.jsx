"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const MovieDatas = ({ data }) => {
    console.log(data);

    const router = useRouter();

    return (
        <div onClick={() => router.push(`/movie/${data.id}`)} className='sm:w-[calc(50%_-_1rem)] md:w-[calc(33.333%_-_1rem)] w-full h-[300px] relative'>  {/* 3 sütun için genişlik */}
            <Image
                fill
                src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path || data?.poster_path}`}
                alt={data?.title || 'Movie Image'}
                className='object-cover w-full h-full rounded-lg'
            />
            <div className='absolute cursor-pointer p-3 bottom-0 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity duration-300 text-white'>
                <h1 className='text-2xl font-bold'>{data?.title ? data?.title : "Movie Title"}</h1>
                <h1>
                    {data?.release_date ? data?.release_date : "2000-08-14"} / IMDB : {data?.vote_average.toFixed(2)}
                </h1>
            </div>
        </div>
    );
};

export default MovieDatas;
