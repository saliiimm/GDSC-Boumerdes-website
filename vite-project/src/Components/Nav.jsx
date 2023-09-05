import React from 'react'
import image from '../assets/logo.png'
import { HiMenu } from "react-icons/hi";

const Nav = () => {
  return (
    <nav className='flex px-[50px] items-center absolute w-screen h-[80px] justify-between md:px-[100px] shadow-md'>
    <div ><img className=" w-[200px] h-[25px] md:w-[250px] md:h-[30px]" src={image} alt="logo" /></div>
    <ul className=' justify-between w-6/12 hidden md:flex'>
      <li className='text-lg text-gray-600 '>Home</li>
      <li className='text-lg text-gray-600 '>Team</li>
      <li className='text-lg text-gray-600 '>Activites</li>
      <li className='text-lg text-gray-600 '>Events</li>
      <li className='text-lg text-gray-600 '>Contact</li>
    </ul>
    <div className="burger  md:hidden "> <HiMenu className='w-[27px] h-[26px] text-gray-600 '/></div>
    </nav>

  )
}

export default Nav