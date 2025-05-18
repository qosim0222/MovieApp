import { useFetch } from '@/hooks/useFetch'
import React from 'react'

const Genres = ({  handleChangeGenre, genres }) => {
  const { data } = useFetch("/genre/movie/list")
  console.log(data);
  const array = genres.split("-").slice(1);

  return (
    <div className='container mx-auto py-4'>
      <div className='flex overflow-auto cursor-pointer gap-2 no-scrollbar'>
        {data?.genres?.map((genre) => (
          <div
          onClick={() => handleChangeGenre(genre.id.toString())}
          className={`${
            array.includes(genre.id.toString()) ? "p-1.5 bg-amber-600 text-white" : ""
          } text-nowrap cursor-pointer select-none px-4 p-1.5 bg-[#232323]  rounded-2xl mb-3 hover:opacity-80   transition text-white`}
          key={genre.id}
        >
          {genre.name}
        </div>
        ))}
      </div>
    </div>
  )
}

export default Genres

// p-1.5 bg-[#232323]  rounded-2xl mb-3 text-nowrap select-none hover:bg-gray-700 transition text-white