import React, { useState } from "react";
// Swiper komponentlari
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { FaPlay } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// Swiper uslublari
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export const Myslayder = ({ movies }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const navigate = useNavigate();
    const url = import.meta.env.VITE_IMAGE_URL;

    return (
        <div className="container mx-auto">
            <Swiper
                style={{
                    "--swiper-navigation-color": "red",
                    "--swiper-pagination-color": "#fff",
                }}  
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mb-2.5"
            >
                {movies?.map((movie) => (
                    <SwiperSlide key={movie.id} className="rounded-[12px] overflow-hidden  relative ">
                        <img src={url + movie.backdrop_path} />

                        <div className="flex flex-col justify-center items-center left-1/2 bottom-[24px] gap-2.5 absolute -translate-x-1/2">
                            <h1 className="text-[#fff] md:text-2xl lg:text-[32px]">{movie.original_title}</h1>

                            <div className="flex gap-1.5 items-center text-[#fff]">
                                <p>{movie.release_date.slice(0, 4)}</p>
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-50"></div>
                                <p>{movie.original_language.toUpperCase()}</p>
                            </div>

                            <button
                                onClick={() => navigate(`/movie/${movie.id}`)}
                                className="text-primary py-1 px-2 md:py-2 md:px-10 lg:py-[14px]  rounded-[12px] bg-amber-50 flex items-center gap-2.5 cursor-pointer"
                            >
                                <FaPlayCircle />
                                <p>Смотреть</p>
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="max-w-1/3 "
            >
                {movies?.map((movie) => (
                    <SwiperSlide
                        key={movie.id}
                        className="rounded-2xl overflow-hidden opacity-80 cursor-pointer hover:opacity-100 hover:scale-105 mb-14 ">
                        <img src={url + movie.backdrop_path} />
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};
