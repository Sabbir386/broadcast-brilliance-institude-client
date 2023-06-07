import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slide1 from '../../assets/slider/slider1.webp'
import slide2 from '../../assets/slider/slider2.webp'
import slide3 from '../../assets/slider/slider3.webp'
import slide4 from '../../assets/slider/slider4.webp'

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
    return (
        <div className="mt-4  sm:max-w-xl md:max-w-full lg:max-w-screen-xl  '">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="w-full rounded-lg h-[400px] object-fill " src={slide2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full rounded-lg h-[400px]  object-fill" src={slide3} alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full rounded-lg h-[400px]  object-fill" src={slide1} alt="" />

                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full rounded-lg h-[400px]  object-fill" src={slide4} alt="" />

                </SwiperSlide>

            </Swiper>
        </div>
    );
}