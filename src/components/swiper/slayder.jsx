import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import Card from '../movie-view/Card'

const HomeView = ({ movies }) => {
  return (
    <div className="container mx-auto text-white">
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Navigation]}
      >
        {movies?.map((item) => (
          <SwiperSlide key={item.id}>
            <Card item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default React.memo(HomeView)
