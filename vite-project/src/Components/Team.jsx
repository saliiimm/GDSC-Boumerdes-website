import { React, useState, useEffect } from "react";
import axios from "axios";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.hosting";
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
      <h2 className="2xs:text-5xl  medi:text-6xl font-bold text-red-500 2xs:mb-5 medi:mb-10">
        Our team
      </h2>
      <p className="2xs:px-5 2xs:text-xl med:px-0 2xs:mb-5 medi:mb-10 medi:text-2xl text-gray-500 font-sans text-center max-w-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio numquam
        quam ex consectetur non, nam iure tempora vel blanditiis possimus atque
        illo
      </p>
      <div className="w-full flex items-center justify-evenly">
        <img
          src={leftBtn}
          className="swiper-button-prev cursor-pointer ml-auto 2xs:hidden medi:w-auto medi:flex"
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
              <div className="2xs:w-[6.5rem] h-36 med:w-44 med:h-60 medi:w-32 medi:h-48 flex items-center justify-center flex-col lg:w-60 lg:h-72 shadow-md bg-white rounded-lg">
                <img
                  src={mainmember.data.lienPhoto}
                  alt="Profile picture"
                  className="2xs:w-16 2xs:h-16 2xs:mb-2  medi:mb-10 lg:w-24 lg:h-24 medi:w-16 medi:h-16  rounded-full"
                />
                <h4 className="2xs:text-[0.7rem] lg:text-xl med:text-lg medi:text-sm font-bold text-gray-800 mb-3">
                  {mainmember.data.fullName}
                </h4>
                <h5 className=" text-gray-500 font-sans text-center font-light 2xs:text-[0.6rem] medi:text-xs med:text-base lg:text-lg">
                  {mainmember.data.role}
                </h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <img
          src={rightBtn}
          className="swiper-button-next cursor-pointer mr-auto 2xs:hidden medi:w-auto medi:flex"
          onClick={() => swiper.slideNext()}
        />
      </div>
      <div className="flex items-center justify-center mt-4 medi:hidden 2xs:flex">
        <img
          src={leftBtn}
          className="swiper-button-next cursor-pointer mr-5 2xs:w-6 medi:w-auto"
          onClick={() => swiper.slideNext()}
        />
        <img
          src={rightBtn}
          className="swiper-button-prev cursor-pointer 2xs:w-6 medi:w-auto"
          onClick={() => swiper.slidePrev()}
        />
      </div>
    </div>
  );
};

export default Team;
