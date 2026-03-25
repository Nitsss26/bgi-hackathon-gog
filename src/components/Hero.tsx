import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const heroSlides = [
  { image: "/src/pages/Gemini_Generated_Image_46h5g846h5g846h5.png" },
  { image: "/src/pages/Gemini_Generated_Image_9vr0az9vr0az9vr0.png" },
  { image: "/src/pages/Gemini_Generated_Image_oxmyxaoxmyxaoxmy.png" }
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
