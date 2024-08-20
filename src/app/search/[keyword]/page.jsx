import MovieDatas from '@/components/MovieDatas';
import React from 'react'

const Page = async ({ params }) => {

    const keyword = params.keyword;
    console.log(keyword)

    const res = await fetch(`https://api.tmdb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${keyword}&language=en-US&include_adult=false`)
    const data = await res.json();
    console.log(data?.results);

    return (
        <div>

            {
                data.results.length === 0 ?
                    <h1 className='text-2xl font-semibold mx-10 p-5'>Aranılan sorgu bulunamadı.</h1> :

                    <div className='flex flex-wrap justify-center items-center gap-5 mx-10 mb-10'>
                        {
                            data?.results?.map((data, i) => (
                                <MovieDatas data={data} key={i} />
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default Page