import React from "react";
import mainImage from "../assets/group.svg";

const Main = () => {
  return (
    <div className="pt-[80px] grid grid-cols-2 mb-100">
      <div className="mt-20 pl-20">
        <h2 className="text-7xl font-bold text-green-600 mb-10">Main Title</h2>
        <p className="mt-19 mb-10 text-4xl text-gray-500 font-sans max-w-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos,
          ullam. Ducimus tempore natus, iure dignissimos sunt amet voluptatem
          voluptatum perspiciatis eaque omnis vel
        </p>
        <button className="mt-19 bg-green-600 text-white h-12 w-40 rounded-md">
          Click Here
        </button>
      </div>
      <div className="">
        <img src={mainImage} alt="image group" className="mt-20" />
      </div>
    </div>
  );
};

export default Main;