import React from 'react'
import image from '../assets/logo-white.png';
import '../App.css'
const Footer = () => {
  return (
    <div className='flex flex-col bottom-0 '>
      <div className='flex justify-around px-3 py-20 md:p-20  bg-blue  w-screen h-[250px]  ' >
        <div className="logo-desc">
        <img
          className="w-[180px] h-6 md:w-[300px] md:h-9"
          src={image}
          alt="logo"
        />
        <p className='text-white font-montserrat text-[17px]  font-light w-[180px] h-[87px] py-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
        </div>
        <div className="">
          <p className='blue2  md:blue pb-5'>Title Here</p>
          <p className="text-white font-montserrat text-[17px] md:text-[21px]  font-light pb-2 ">link</p>
          <p className="text-white font-montserrat text-[17px]  md:text-[21px]  font-light pb-2 ">link</p>
          <p className="text-white font-montserrat text-[17px]  md:text-[21px]  font-light pb-2 ">link</p>
        </div>
        <div className="">
          <p className='blue2 md:blue pb-5'>Title Here</p>
          <p className="text-white font-montserrat text-[17px]  md:text-[21px]  font-light pb-2 ">link</p>
          <p className="text-white font-montserrat text-[17px]  md:text-[21px]  font-light pb-2 ">link</p>
          <p className="text-white font-montserrat text-[17px]  md:text-[21px]  font-light pb-2 ">link</p>
        </div>
      </div>
      <div className="bg-blue h-[54px] w-screen border-t bg-blue-2 bleu flex text-white text-[21px] justify-center items-center">
      COPY WRITE
      </div>
    </div>
  )
}

export default Footer