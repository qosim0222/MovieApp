// import Main from '@/components/main/Main'
import React from 'react'
import { useStateValue } from '@/context'
import MovieView from '@/components/movie-view/MovieView'

const Saved = () => {
  const [state] = useStateValue()
  console.log(state.saved);
  return (
    <div>
      <h2 className='text-white'>Saved</h2>
      <MovieView movies={state.saved}/>
      {/* <Main/> */}
    </div>
  )
}

export default Saved