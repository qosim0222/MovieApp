import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai' 

const Card = ({ item }) => {
  const url = import.meta.env.VITE_IMAGE_URL
  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-3 bg-[#1c1c1e] p-3 rounded-xl shadow-md hover:shadow-lg transition duration-300">
      <div
        className="rounded-lg overflow-hidden cursor-pointer group"
        onClick={() => navigate(`/movie/${item.id}`)}
      >
        <img
          className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
          src={url + item.poster_path}
          alt={item.title}
        />
      </div>

      <div className="text-white px-1 flex flex-col gap-1">
        <h3 className="text-lg font-semibold truncate">{item.title}</h3>
        <div className="flex items-center gap-1 text-yellow-400 font-medium">
          <AiFillStar size={18} />
          <span>{item.vote_average}</span>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Card)
