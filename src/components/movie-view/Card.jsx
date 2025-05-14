import React from 'react'
import { useNavigate } from 'react-router-dom'
const Card = ({item}) => {
  const url = import.meta.env.VITE_IMAGE_URL
  const navigate = useNavigate()
  return (
    <div className='flex flex-col gap-3  '>
        <div className='rounded-[12px] overflow-hidden'>
            <img onClick={()=>navigate(`/movie/${item.id}`)} className=' object-cover' loading='lazy' src={url + item.poster_path} alt="" /></div>        
        <div>
            <h3>{item.title}</h3>
            <p>{item.vote_average}</p>
        </div>        
    </div>
  )
}
export default React.memo(Card)