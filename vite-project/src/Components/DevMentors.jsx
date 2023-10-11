import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.hosting";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../App.css";
import { Autoplay, Navigation } from "swiper/modules";
import { useSwiper } from "swiper/react";
import rightGreenBtn from "../assets/rightGreenBtn.svg";
import leftGreenBtn from "../assets/leftGreenButton.svg";

const DevMentors = () => {
  const [mentors, setMentors] = useState([]);
  const swiper = useSwiper();

  useEffect(() => {
    getMembers();
  }, []);

  function getMembers() {
    const mentorsCollectionRef = collection(db, "devMentors");
    getDocs(mentorsCollectionRef)
      .then((response) => {
        const membres = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setMentors(membres);
      })
      .catch((error) => console.log(error.message));
  }
  return (
    <div className="flex items-center justify-center flex-col mt-20 ">
      <h2 className="2xs:text-4xl  medi:text-6xl font-bold text-green-500 2xs:mb-5 medi:mb-10">
        Our Dev Mentors
      </h2>
      <p className="2xs:px-5 2xs:text-xl med:px-0 2xs:mb-5 medi:mb-10 medi:text-2xl text-gray-500 font-sans text-center max-w-3xl">
      Meet our developers lead the charge, turning ideas into technological marvels and shaping our tech community's future.

      </p>
      <div className="w-full flex items-center justify-evenly ">
        <img
          src={leftGreenBtn}
          className="swiper-button-prev cursor-pointer sm:ml-[-70%] sm:mt-[-0.2%] 2xs:mb-10  2xs:mt-[70%] 2xs:ml-[-10%] 2xs:absolute   2xs:w-8 medi:w-auto medi:flex "
          onClick={() => swiper.slidePrev()}
        />
        <Swiper 
       
          spaceBetween={0}
          centeredSlides={false}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper ">
          {mentors.map((mentor) => (
            <SwiperSlide key={mentor.id}>
              <div className="2xs:w-[6.5rem] h-36 med:w-44 med:h-60 medi:w-32 medi:h-48 flex items-center justify-center flex-col lg:w-60 lg:h-72 shadow-md bg-white rounded-lg">
                <img
                  src={mentor.data.img}
                  alt="Profile picture"
                  className="2xs:w-16 2xs:h-16 2xs:mb-2  medi:mb-10 lg:w-24 lg:h-24 medi:w-16 medi:h-16  rounded-full"
                />
                <h4 className="2xs:text-[0.7rem] lg:text-xl med:text-lg medi:text-sm font-bold text-gray-800 mb-3">
                  {mentor.data.fullName}
                </h4>
                <h5 className=" text-gray-500 font-sans text-center font-light 2xs:text-[0.6rem] medi:text-xs med:text-base lg:text-lg">
                  {mentor.data.role}
                </h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <img
          src={rightGreenBtn}
          className="swiper-button-next cursor-pointer sm:mr-[-70%] sm:mt-[-0.2%] 2xs:mr-[-10%] 2xs:absolute 2xs:mt-[70%] 2xs:mb-10 2xs:w-8  medi:w-auto medi:flex"
          onClick={() => swiper.slideNext()}
        />
      </div>

    </div>
  );
};

export default DevMentors;
