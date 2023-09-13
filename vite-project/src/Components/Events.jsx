import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
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
      <h2 className="text-6xl font-bold text-yellow-500 mb-20">Events</h2>
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
            <div className="flex justify-content-center h-100% pb-20 w-full   shadow-md rounded-sm">
              <div className="w-[35%] flex items-center justify-center h-full ">
                <img
                  src={event.data.picture}
                  alt="Event image"
                  className="rounded-full h-[60%] w-[60%]"
                />
              </div>
              <div className="w-[65%] mt-9">
                <h3 className="text-2xl font-semibold">{event.data.title}</h3>
                <div className="flex items-center justify-between w-[70%] mt-2">
                  <div className="flex items-center justify-center">
                    <img src={dateIcon} alt="date icon" className="mr-2" />
                    <p className="text-green-500 font-bold text-sm">
                      {moment(event.data.date.toDate()).format("L")}
                    </p>
                  </div>
                  <div className="flex items-center justify-center">
                    <img src={PlaceIcon} alt="place icon" className="mr-2" />
                    <p className="text-yellow-500 font-bold text-sm">
                      {event.data.place}
                    </p>
                  </div>
                </div>
                <p className="mt-4">{event.data.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-center mt-8">
        <img
          src={upBtn}
          className="swiper-button-next cursor-pointer mr-8"
          onClick={() => swiper.slideNext()}
        />
        <img
          src={downBtn}
          className="swiper-button-prev cursor-pointer"
          onClick={() => swiper.slidePrev()}
        />
      </div>
    </div>
  );
};

export default Events;
