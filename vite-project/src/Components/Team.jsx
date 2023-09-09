import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../App.css";
import { Autoplay } from "swiper/modules";

const Team = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-20">
      <h2 className="text-6xl font-bold text-red-500 mb-10">Our team</h2>
      <p className=" mb-10 text-2xl text-gray-500 font-sans text-center max-w-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio numquam
        quam ex consectetur non, nam iure tempora vel blanditiis possimus atque
        illo
      </p>
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper">
        <SwiperSlide style={{ width: "300px" }}>Slide 1</SwiperSlide>
        <SwiperSlide style={{ width: "300px" }}>Slide 2</SwiperSlide>
        <SwiperSlide style={{ width: "300px" }}>Slide 3</SwiperSlide>
        <SwiperSlide style={{ width: "300px" }}>Slide 4</SwiperSlide>
        <SwiperSlide style={{ width: "300px" }}>Slide 5</SwiperSlide>
        <SwiperSlide style={{ width: "300px" }}>Slide 6</SwiperSlide>
        <SwiperSlide style={{ width: "300px" }}>Slide 7</SwiperSlide>
        <SwiperSlide style={{ width: "300px" }}>Slide 8</SwiperSlide>
        <SwiperSlide style={{ width: "300px" }}>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Team;
