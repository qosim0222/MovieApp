import { useFetch } from '@/hooks/useFetch'
import React, { useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import MovieView from '../movie-view/MovieView'

const url = import.meta.env.VITE_IMAGE_URL

const SingleMovie = () => {
    const { id } = useParams()
    const { data } = useFetch(`/movie/${id}`)
    const { data: images } = useFetch(`/movie/${id}/images`)
    const { data: similars } = useFetch(`/movie/${id}/similar`)

    useLayoutEffect(() => {
        scrollTo(0, 0)
    }, [id])

    return (
        <div className='container mx-auto text-white py-6 px-4'>
            <div className='rounded-lg overflow-hidden shadow-lg mb-6'>
                <img
                    className='w-full  object-cover object-center'
                    src={url + data?.backdrop_path}
                    alt={data?.title}
                />
            </div>

            <div className='mb-10 space-y-4'>
                <h1 className='text-4xl font-bold'>{data?.title}</h1>
                <p className='text-gray-300 leading-relaxed'>{data?.overview}</p>

                <div className='flex items-center gap-4 text-sm text-gray-400'>
                    <span className='bg-green-700 px-3 py-1 rounded-full text-white'>
                        IMDB: {data?.vote_average}
                    </span>
                    <span className='bg-blue-700 px-3 py-1 rounded-full text-white'>
                        Budget: {data?.budget?.toLocaleString()} USD
                    </span>
                </div>

                <div className='flex gap-2 flex-wrap'>
                    {data?.origin_country?.map((country) => (
                        <span
                            key={country}
                            className='bg-gray-700 px-3 py-1 rounded-full text-sm'> 
                            Country: {country}
                        </span>
                    ))}
                </div>
            </div>

            {images?.backdrops?.length > 0 && (
                <div className='mb-12'>
                    <h2 className='text-2xl font-semibold mb-4'>Gallery</h2>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4'>
                        {images?.backdrops?.slice(0, 10)?.map((image) => (
                            <img
                                key={image.file_path}
                                src={url + image.file_path}
                                alt='Movie scene'
                                className='rounded-lg h-[150px] object-cover w-full'
                            />
                        ))}
                    </div>
                </div>
            )}

            {similars?.results?.length > 0 && (
                <div className='mb-6'>
                    <h3 className='text-2xl font-bold mb-4'>Similar Movies</h3>
                    <MovieView movies={similars?.results?.slice(0, 4)} />
                </div>
            )}
        </div>
    )
}

export default SingleMovie
