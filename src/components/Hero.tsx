import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import slide1 from '../pages/1.png';
import slide2 from '../pages/2.png';
import slide3 from '../pages/3.png';

const heroSlides = [
  { image: slide1 },
  { image: slide2 },
  { image: slide3 }
];

export function Hero() {
  return (
    <section className="relative w-full bg-[#020617]">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={800}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full hero-swiper mt-12 pb-10"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full bg-[#020617]">
              <img 
                src={slide.image} 
                alt={`BGI Hackathon Slide ${index + 1}`}
                className="w-full h-auto block"
                referrerPolicy="no-referrer"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
