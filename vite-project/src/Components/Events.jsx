import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.hosting";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../App.css";
import { Autoplay, Navigation } from "swiper/modules";
import { useSwiper } from "swiper/react";
import upBtn from "../assets/upButton.svg";
import downBtn from "../assets/downButton.svg";
import dateIcon from "../assets/dateIcon.svg";
import PlaceIcon from "../assets/placeIcon.svg";
import moment from "moment";
import "moment/locale/cv";

const Events = () => {
  const [events, setEvents] = useState([]);
  const swiper = useSwiper();

  useEffect(() => {
    getEvents();
  }, []);

  function getEvents() {
    const eventsCollectionRef = collection(db, "clubEvents");
    getDocs(eventsCollectionRef)
      .then((response) => {
        const evnts = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setEvents(evnts);
      })
      .catch((error) => console.log(error.message));
  }

  return (
    <div className="flex items-center justify-center flex-col mt-20">
      <h2 className="2xs:text-5xl  medi:text-6xl font-bold text-yellow-500 2xs:mb-5 medi:mb-10">
        Events
      </h2>
      <Swiper
        direction={"vertical"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Autoplay, Navigation]}
        className="myndSwiper">
        {events.map((event) => (
          <SwiperSlide key={event.id}>
            <div className="flex justify-content-center  h-72 pb-20 w-full   shadow-lg  rounded-sm">
              <div className="w-[35%] flex items-center justify-center h-full ">
                <img
                  src={event.data.picture}
                  alt="Event image"
                  className="rounded-full medi:h-[60%] medi:w-[60%] 2xs:h-[35%] 2xs:w-[35%]"
                />
              </div>
              <div className="w-[65%] mt-9">
                <h3 className="medi:text-2xl 2xs:text-lg font-semibold">
                  {event.data.title}
                </h3>
                <div className="flex items-center justify-between lg:w-[70%] medi:w-[100%] mt-2 ">
                  <div className="flex items-center justify-center 2xs:mr-2 xs:mr-0">
                    <img
                      src={dateIcon}
                      alt="date icon"
                      className="mr-2  medi:w-auto 2xs:w-3"
                    />
                    <p className="text-green-500 font-bold medi:text-sm 2xs:text-xs">
                      {moment(event.data.date.toDate()).format("L")}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <img
                      src={PlaceIcon}
                      alt="place icon"
                      className="mr-2 medi:w-auto 2xs:w-3"
                    />
                    <p className="text-yellow-500 font-bold 2xs:text-[0.35rem] medi:text-xs med:text-sm medi:mr-7 med:mr-3 lg:mr-0">
                      {event.data.place}
                    </p>
                  </div>
                </div>
                <p className="mt-4 2xs:text-[8px] 2xs:mt-1 medi:text-base">
                  {event.data.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-center mt-8">
        <img
          src={upBtn}
          className="swiper-button-next cursor-pointer mr-5 2xs:w-6 medi:w-auto"
          onClick={() => swiper.slideNext()}
        />
        <img
          src={downBtn}
          className="swiper-button-prev cursor-pointer 2xs:w-6 medi:w-auto"
          onClick={() => swiper.slidePrev()}
        />
      </div>
    </div>
  );
};

export default Events;
