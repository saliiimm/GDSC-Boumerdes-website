import React from "react";
import gdsc from '../assets/gdsc1.png'
import gdsc2 from '../assets/gdsc2.png'
function TextCart() {
 
  return (
    <div
    className=" flex flex-col w-full justify-between  items-center   ">
        
      <div className="flex medi:flex-row justify-evenly items-center flex-col ">
        <p className="text-gray-600 xs:text-[15px] xs:w-[70%]  medi:w-[36%] font-bold medi:text-[23px] medi:mx-5  w-[80%] text-[12px]  ">
        Welcome to the Google Developer Student Club at the University of Boumerdes!
         We enrich Boumerdes University by fostering inclusivity, knowledge sharing, and community engagement. We promote diversity in tech, cultivate a culture of service and mentorship, and provide a safe space for students to connect, learn, and grow together.
        </p>
       <img src={gdsc2} alt="" className="med:w-[500px] xs:w-[350px] w-[270px]   mt-10" />
      </div>

      <div className=" flex medi:flex-row justify-evenly items-center flex-col-reverse mt-16  ">
        <img src={gdsc} alt="" className="med:w-[500px] xs:w-[350px] w-[270px]  mt-10 " />
        <p className=" text-gray-600 xs:text-[15px] xs:w-[70%] font-bold  medi:w-[36%] medi:text-[23px] medi:mx-5  w-[80%] text-[12px] ">
        At our club, we elevate the academic and cultural environment, forging partnerships with local businesses and empowering students with new skills. We champion diversity, encourage open mentorship, and unite students from diverse backgrounds and academic disciplines. Join us in this exciting journey of learning, collaboration, and personal growth!
        </p>
      </div>
      
    </div>
  );
}

export default TextCart;
