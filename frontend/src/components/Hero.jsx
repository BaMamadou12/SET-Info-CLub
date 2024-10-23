import React from 'react'
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade  } from "swiper/modules";

import image1 from "../assets/images/blog_1.jpg";
import image2 from "../assets/images/blog_2.jpg";
import image3 from "../assets/images/blog_3.jpg";
import image4 from "../assets/images/blog_5.jpg";

import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import "../App.css";

function Hero({title="Blogs", subtitle="Bienvenu dans notre espace de partage", content="Découvrez des articles captivants, des tutoriels pratiques et des réflexions inspirantes sur le monde de l'informatique."}) {
  return (
    <>
    <section className="relative overflow-hidden rounded-[20px] h-96 mb-14">
        <div className="absolute text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[800px] w-5/6 z-50 text-white">
            <h1 className="font-bold text-5xl text-blue-300 mb-6 ">{title}</h1>
            <h3 className="font-medium text-3xl text-gray-100 mb-1">{subtitle}</h3>
            <p className="text-lg font-light">{content}</p>  
        </div>  
        <Swiper
            className="relative w-full h-full"
            modules={[Pagination, Autoplay, EffectFade]}
            effect="fade"
            speed={1000}
            fadeEffect ={{crossFade: true}}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
        >
            <SwiperSlide className="w-full">
                <div className="absolute w-full h-full bg-[#252641] opacity-60 z-10" ></div>
                <img src={image1} className='object-cover h-full w-full' alt="list"/>
            </SwiperSlide>
            <SwiperSlide className="w-full">
                <div className="absolute w-full h-full bg-[#252641] opacity-60 z-10"></div>
                <img src={image2} className='object-cover h-full w-full' alt="list" />
            </SwiperSlide>
            <SwiperSlide className="w-full">
                <div className="absolute w-full h-full bg-[#252641] opacity-60 z-10"></div>
                <img src={image3} className='object-cover h-full w-full' alt="list" />
            </SwiperSlide>
            <SwiperSlide className="w-full">
                <div className="absolute w-full h-full bg-[#252641] opacity-60 z-10"></div>
                <img src={image4} alt="list" className='object-cover h-full w-full'/>
            </SwiperSlide>
        </Swiper>
    </section>
    </>
  )
}

export default Hero