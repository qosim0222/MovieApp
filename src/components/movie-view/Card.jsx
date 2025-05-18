import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai' 
import { FaBookmark, FaRegBookmark } from "react-icons/fa"
import { useStateValue } from '@/context'

const Card = ({ item }) => {
  const url = import.meta.env.VITE_IMAGE_URL
  const navigate = useNavigate()
  const [state, dispatch] = useStateValue()
  return (
    <div className="flex flex-col gap-3 bg-[#2c292b] p-1 rounded-xl shadow-md hover:shadow-lg transition duration-300 ">

       <div className='relative border rounded-lg overflow-hidden cursor-pointer group'>
        <img onClick={() => navigate(`/movie/${item.id}`)} className='w-full  object-cover transition-transform duration-300 group-hover:scale-[103%] ' loading='lazy' src={url + item.poster_path} alt="" />
        <button
          onClick={() => dispatch({ type: "SAVED", payload: item })}
          className="absolute top-2 right-2 z-10 p-2"
        >
          {state.saved.some(({ id }) => id === item.id) ? (
            <FaBookmark className='text-red-700 cursor-pointer' />
          ) : (
            <FaRegBookmark className='cursor-pointer '  />
          )}
        </button>

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


//  <div className="rounded-lg overflow-hidden cursor-pointer group"
//         onClick={() => navigate(`/movie/${item.id}`)}  >
//         <img className="w-full  object-cover transition-transform duration-300 group-hover:scale-[103%]"
//           loading="lazy"
//           src={url + item.poster_path}
//           alt={item.title}
//         />
//       </div> */}