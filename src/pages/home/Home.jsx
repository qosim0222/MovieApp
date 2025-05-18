import HomeView from '@/components/swiper/slayder';
import Skeleton from '@/components/skeleton/Skeleton';
import { Myslayder } from '@/components/swiper/swiper';
import { useFetch } from '@/hooks/useFetch'
import React from 'react'

const Home = () => {
  const {data,error,loading} = useFetch("/discover/movie")

  return (
    <div>
      <Myslayder movies={data?.results}/>
      <HomeView movies={data?.results} />
      {loading && <Skeleton count={20}/>}
    </div>
  )
}

export default React.memo(Home)