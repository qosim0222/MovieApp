import { useFetch } from '@/hooks/useFetch'
import React from 'react'

const Genres = ({ setGenre }) => {
  const { data } = useFetch("/genre/movie/list")
  console.log(data);

  return (
    <div className='container mx-auto py-4'>
      <div className='flex overflow-auto cursor-pointer gap-2'>
        {data?.genres?.map((genre) => (
          <div
            onClick={() => setGenre(genre.id.toString())}
            key={genre.id}
            className="p-2 bg-gray-100 rounded mb-2 text-nowrap select-none hover:bg-gray-300 transition"
          >
            {genre.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Genres
