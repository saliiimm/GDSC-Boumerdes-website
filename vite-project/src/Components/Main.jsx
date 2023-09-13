import React from "react";
import mainImage from "../assets/group.svg";
import "../App.css";

const Main = () => {
  return (
    <div className="pt-[80px] grid md:grid-cols-2 mb-5 sm:grid-cols-0">
      <div className="medi:mt-20 med:pl-15 2xs:pl-3 2xs:mt-5 lg:m-auto lg:mt-20">
        <h2 className="lg:text-7xl medi:text-5xl med:text-6xl font-bold text-green-600 med:mb-10 2xs:text-4xl 2xs:mb-0 2xs:mx-3">
          Main Title
        </h2>
        <p className="lg:text-4xl med:mt-19 med:mb-5 med:text-2xl text-gray-500 font-sans max-w-xl 2xs:text-xl 2xs:mt-5 2xs:mx-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos,
          ullam. Ducimus tempore natus, iure dignissimos sunt amet voluptatem
          voluptatum perspiciatis eaque omnis vel
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
