import { useFetch } from '@/hooks/useFetch'
import React from 'react'

const Genres = ({ setGenre }) => {
  const { data } = useFetch("/genre/movie/list")
  console.log(data);

  return (
    <div className='container mx-auto py-4'>
      <div className='flex overflow-auto cursor-pointer gap-2 no-scrollbar'>
        {data?.genres?.map((genre) => (
          <div
            onClick={() => setGenre(genre.id.toString())}
            key={genre.id}
            className="p-1.5 bg-[#232323]  rounded-2xl mb-3 text-nowrap select-none hover:bg-gray-700 transition text-white"
          >
            {genre.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Genres
