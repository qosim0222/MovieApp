// import React, { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
// import 'swiper/css/thumbs';
// import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// const slides = [
//   {
//     title: 'Kung Fu Panda 4',
//     year: '2024',
//     genre: 'Комедия',
//     duration: '1ч 34м',
//     lang: 'EN',
//     age: '6+',
//     image: '/images/kfp4.jpg', 
//   },
//   {
//     title: 'Another Movie',
//     year: '2023',
//     genre: 'Боевик',
//     duration: '1ч 50м',
//     lang: 'RU',
//     age: '12+',
//     image: '/images/movie2.jpg',
//   },
//   {
//     title: 'Sample Movie',
//     year: '2022',
//     genre: 'Драма',
//     duration: '2ч 10м',
//     lang: 'EN',
//     age: '16+',
//     image: '/images/movie3.jpg',
//   },
// ];

// export default function HeroSlider() {
//   const [thumbsSwiper, setThumbsSwiper] = useState(null);

//   return (
//     <div className="w-full h-[600px] bg-black">
//       <Swiper
//         style={{
//           '--swiper-navigation-color': '#fff',
//         }}
//         loop={true}
//         navigation={true}
//         spaceBetween={10}
//         thumbs={{ swiper: thumbsSwiper }}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="w-full h-[85%]"
//       >
//         {slides.map((slide, idx) => (
//           <SwiperSlide key={idx}>
//             <div className="relative w-full h-full">
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 text-white">
//                 <h2 className="text-3xl font-bold">{slide.title}</h2>
//                 <p className="mt-1 text-sm opacity-80">
//                   {slide.year} • {slide.genre} • {slide.duration} • {slide.lang} • {slide.age}
//                 </p>
//                 <button className="mt-4 px-5 py-2 bg-red-600 hover:bg-red-700 transition rounded-full text-white font-medium">
//                   Смотреть
//                 </button>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <Swiper
//         onSwiper={setThumbsSwiper}
//         loop={true}
//         spaceBetween={10}
//         slidesPerView={4}
//         freeMode={true}
//         watchSlidesProgress={true}
//         modules={[FreeMode, Navigation, Thumbs]}
//         className="w-full h-[15%] mt-2"
//       >
//         {slides.map((slide, idx) => (
//           <SwiperSlide key={idx}>
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-full object-cover opacity-60 hover:opacity-100 transition rounded"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
