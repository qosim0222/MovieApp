import { useFetch } from '@/hooks/useFetch'
import React from 'react'
import { useParams } from 'react-router-dom'
import MovieView from '../movie-view/MovieView'

const url = import.meta.env.VITE_IMAGE_URL

const SingleMovie = () => {

    const { id } = useParams()
    const { data } = useFetch(`/movie/${id}`)

    const {data: images}= useFetch(`/movie/${id}/images`)
    const {data: similars}= useFetch(`/movie/${id}/similar`)

    console.log(data);


    return (
        <div className='container mx-auto'>
            <div className=''>
                <img src={url + data?.backdrop_path} alt="" />
            </div>
            <div>
                <h1 className='text-4xl'>{data?.title}</h1>
                <p>{data?.overview}</p>
                <p>{data?.vote_average}</p>
                <strong>{data?.budget?.toLocaleString()} USD</strong>
                {/* <div className='flex gap-4'>
                    {data?.origin_country
                    
                    }
                </div> */}

                <div className='grid grid-cols-5'>
                    {
                        images?.backdrops?.slice(0,10)?.map((image)=>(
                            <img key={image.file_path} src={url+image.file_path} alt="" />
                        ))
                    }
                </div>
            </div>
            <div>
                <h3 className='text-2xl- font-bold'>Similar</h3>
                <MovieView movies={similars?.results?.slice(0,4)}/>
            </div>
        </div>
    )
}

export default SingleMovie