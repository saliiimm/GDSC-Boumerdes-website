import React from 'react'
import image from '../assets/logo-white.png';
import {AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
import {ImFacebook2} from 'react-icons/im'
import { Link } from 'react-router-dom';

import '../App.css'
const Footer = () => {
  return (
    <div className='flex flex-col bottom-0 '>
      <div className='flex justify-around px-3 py-20 md:p-20  bg-blue  w-screen h-[300px]  ' >
        <div className="logo-desc">
        <img
          className="w-[180px] h-6 md:w-[300px] md:h-9"
          src={image}
          alt="logo"
        />
        <p className='text-white font-montserrat text-[16px]  font-light w-[300px] h-[87px] py-5'>
          Explore the world of technology and innovation with GDSC UMBB. <br /> 
          Join us in our mission to inspire and educate, making a difference in the tech community one step at a time.
           </p>
        </div>
        <div className="">
          <p className='blue2  md:blue pb-5'>About GDSC </p>
          <p className="text-white  text-[17px]  md:text-[20px] cursor-pointer  pb-2 ">Team</p>
          <p className="text-white  text-[17px]  md:text-[20px] cursor-pointer  pb-2 ">Activities</p>
          <p className="text-white  text-[17px]  md:text-[20px]  cursor-pointer pb-2 ">Event</p>
        </div>
        <div className="">
          <p className='blue2  ml-[-40%] md:blue pb-5'>Find us</p>
          <p className="text-white  text-[27px]  md:text-[20px] cursor-pointer capitalize     pb-2 "> <Link to='https://www.instagram.com/gdscumbb/' className='flex items-center'><AiFillInstagram className='mr-1 ml-[-4%] text-[28px]' /> instagram</Link> </p>
          <p className="text-white  text-[17px]  md:text-[20px] cursor-pointer capitalize    pb-2 "><Link to='https://www.facebook.com/gdscumbb' className='flex items-center'><ImFacebook2 className='mr-1'/>facebook</Link> </p>
          <p className="text-white  text-[17px]  md:text-[20px] cursor-pointer capitalize  pb-2 "><Link to='https://www.linkedin.com/company/gdscumbb/mycompany/' className='flex items-center'><AiFillLinkedin className='mr-1 ml-[-3%] text-[28px]'/> linkedin</Link> </p>
        </div>
      </div>
      <div className="bg-blue h-[54px] w-screen border-t bg-blue-2 bleu flex text-white text-[15px] justify-center items-center">
      Copyright © 2023 GDSC UMBB. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer