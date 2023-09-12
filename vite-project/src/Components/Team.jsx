import { React, useState, useEffect } from "react";
import axios from "axios";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../App.css";
import { Autoplay, Navigation } from "swiper/modules";
import { useSwiper } from "swiper/react";
import rightBtn from "../assets/rightbutton.svg";
import leftBtn from "../assets/leftbutton.svg";

const Team = () => {
  const [mainmembers, setMainMembers] = useState([]);
  const swiper = useSwiper();

  useEffect(() => {
    getMainMembers();
  }, []);

  useEffect(() => {
    console.log(mainmembers);
  }, [mainmembers]);

  function getMainMembers() {
    const mainCollectionRef = collection(db, "clubMembrers");
    getDocs(mainCollectionRef)
      .then((response) => {
        const membres = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setMainMembers(membres);
      })
      .catch((error) => console.log(error.message));
  }
  return (
    <div className="flex items-center justify-center flex-col mt-20">
      <h2 className="text-6xl font-bold text-red-500 mb-10">Our team</h2>
      <p className=" mb-10 text-2xl text-gray-500 font-sans text-center max-w-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio numquam
        quam ex consectetur non, nam iure tempora vel blanditiis possimus atque
        illo
      </p>
      <div className="w-full flex items-center justify-evenly">
        <img
          src={leftBtn}
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
          {mainmembers.map((mainmember) => (
            <SwiperSlide key={mainmember.id}>
              <div className="flex items-center justify-center flex-col w-60 h-72 shadow-md bg-white rounded-lg">
                <img
                  src={mainmember.data.lienPhoto}
                  alt="Profile picture"
                  className="mb-10 w-24 h-24  rounded-full"
                />
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  {mainmember.data.fullName}
                </h4>
                <h5 className=" text-gray-500 font-sans text-center font-light">
                  {mainmember.data.role}
                </h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <img
          src={rightBtn}
          className="swiper-button-next cursor-pointer mr-auto"
          onClick={() => swiper.slideNext()}
        />
      </div>
    </div>
  );
};

export default Team;
