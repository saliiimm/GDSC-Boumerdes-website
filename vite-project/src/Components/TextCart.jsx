import React from "react";

function TextCart(props) {
  console.log(props.style);
  return (
    <div
    className={`px-[182PX] flex justify-between items-center pb-10   md:${props.style} ${props.style === "flex-row-reverse" ? "flex-row-reverse !important" : ""}`}>
        
      <div className="text px-5 py-3 w-screen text-center lg:w-[533px] md:text-left   ">
        <p className="text-gray-600 font-montserrat  text-2xl md:w-[500px]  md:text-2xl font-normal">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          alias cumque earum, id voluptatum officiis molestias veniam quidem ad
          facere! Dolorum praesentium debitis itaque quidem quia cum
          consequuntur eius libero Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. 
        </p>
      </div>
      <div className="cart w-[350px] h-[249px] sm:w-[580px] sm:h-[299px] lg:w-[429px] lg:h-[499px] flex-shrink-0 bg-gray-300"></div>
    </div>
  );
}

export default TextCart;
