import React from "react";
import mainImage from "../assets/group.svg";
import "../App.css";

const Main = () => {
  return (
    <div className="pt-[80px] grid md:grid-cols-2 mb-5 sm:grid-cols-0">
      <div className="medi:mt-20 med:pl-15 2xs:pl-3 2xs:mt-5 lg:m-auto lg:mt-20">
        <h2 className="lg:text-5xl medi:text-5xl med:text-6xl font-bold text-green-600 med:mb-10 2xs:text-4xl 2xs:mb-0 2xs:mx-3 uppercase">
          gdsc umbb
        </h2>
        <p className="lg:text-xl  med:mt-19 med:mb-5 med:text-2xl text-gray-500 font-sans max-w-xl 2xs:text-xl 2xs:mt-5 2xs:mx-3">
        The Google Developer Student Club at the University of Boumerdes aims to enrich the university experience by promoting inclusivity, knowledge sharing, and diversity in tech. We facilitate connections between students and local businesses while fostering a culture of mentorship. Our core focus is to provide a secure, welcoming space for students from diverse backgrounds to learn and grow together.
        </p>
        <button className="  bg-green-600 text-white h-14 w-48 text-xl font-bold rounded-xl 2xs:mx-3 2xs:mt-8">
          Click Here
        </button>
      </div>
      <div className="2xs:hidden md:flex ">
        <img
          src={mainImage}
          alt="image group"
          className="mt-20 medi:w-11/12 lg:w-9/12 lg:m-auto lg:mt-20 "
        />
      </div>
    </div>
  );
};

export default Main;
