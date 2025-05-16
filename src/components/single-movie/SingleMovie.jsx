import MovieView from '@/components/movie-view/MovieView'
import { useFetch } from '@/hooks/useFetch'
import { Loading } from '@/utils'
import React, { useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'

const url = import.meta.env.VITE_IMAGE_URL

const SingleMovie = () => {
  const { id } = useParams()
  const { data, loading } = useFetch(`/movie/${id}`)
  const { data: images } = useFetch(`/movie/${id}/images`)
  const { data: similars } = useFetch(`/movie/${id}/similar`)

  useLayoutEffect(() => {
    scrollTo(0, 0)
  }, [id])

  return (
    <div className="bg-black text-white min-h-screen">
      {loading && <Loading />}
      
      <div className="container mx-auto">
        <img
          src={url + data?.backdrop_path}
          alt={data?.title}
          className="w-full      object-cover rounded-xl shadow-lg my-6"
        />
      </div>

      <div className="container mx-auto px-4 space-y-4">
        <h1 className="text-4xl font-bold">{data?.title}</h1>
        <p className="text-gray-300">{data?.overview}</p>
        <p className="text-yellow-400 font-semibold">Rating: {data?.vote_average}</p>
        <strong className="block text-green-400 text-lg">
          Budget: {data?.budget?.toLocaleString()} USD
        </strong>

        <div className="flex flex-wrap gap-2">
          {data?.origin_country?.map((country) => (
            <span
              key={country}
              className="px-3 py-1 bg-gray-700 rounded-full text-sm font-medium"
            >
              Country: {country}
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 my-10">
        <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {images?.backdrops?.slice(0, 10)?.map((image) => (
            <img
              key={image.file_path}
              src={url + image.file_path}
              alt=""
              className="rounded-lg shadow-md h-40 object-cover"
            />
          ))}
        </div>
      </div>

      <div className="border-t border-gray-700 pt-6 mt-10">
        <h3 className="container mx-auto text-2xl font-bold mb-4 px-4">Similar Movies</h3>
        <MovieView movies={similars?.results?.slice(0, 4)} />
      </div>
    </div>
  )
}

export default SingleMovie
