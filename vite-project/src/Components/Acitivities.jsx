import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../App.css";
import { Autoplay, Navigation } from "swiper/modules";
import { useSwiper } from "swiper/react";
import rightBlueBtn from "../assets/rightBlueButton.svg";
import leftBlueBtn from "../assets/leftBlueButton.svg";

const Acitivities = () => {
  const [activities, setActivities] = useState([]);
  const swiper = useSwiper();

  useEffect(() => {
    getActivities();
  }, []);

  function getActivities() {
    const activitiessCollectionRef = collection(db, "clubActivities");
    getDocs(activitiessCollectionRef)
      .then((response) => {
        const acts = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setActivities(acts);
      })
      .catch((error) => console.log(error.message));
  }

  return (
    <div className="flex items-center justify-center flex-col mt-20">
      <h2 className="text-6xl font-bold text-blue-500 mb-10">Our activities</h2>
      <p className=" mb-10 text-2xl text-gray-500 font-sans text-center max-w-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio numquam
        quam ex consectetur non, nam iure tempora vel blanditiis possimus atque
        illo
      </p>
      <div className="w-full flex items-center justify-evenly">
        <img
          src={leftBlueBtn}
          className="swiper-button-prev cursor-pointer ml-auto "
          onClick={() => swiper.slidePrev()}
        />
        <Swiper
          spaceBetween={0}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper">
          {activities.map((activity) => (
            <SwiperSlide key={activity.id}>
              <div className="flex items-center justify-start  flex-col w-60 h-72 shadow-md bg-white rounded-lg">
                <img
                  src={activity.data.img}
                  alt="Profile picture"
                  className="mb-5 w-full h-[50%]  top-0"
                />
                <h4 className="text-2xl font-bold text-gray-800 mb-3">
                  {activity.data.name}
                </h4>
                <h5 className=" text-gray-500 font-sans text-center font-light text-sm max-w-[80%]">
                  {activity.data.resume}
                </h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <img
          src={rightBlueBtn}
          className="swiper-button-next cursor-pointer mr-auto"
          onClick={() => swiper.slideNext()}
        />
      </div>
    </div>
  );
};

export default Acitivities;
