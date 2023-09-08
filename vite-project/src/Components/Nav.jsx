import React, { useEffect, useRef, useState } from 'react';
import image from '../assets/logo.png';
import { HiMenu } from 'react-icons/hi';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        burgerRef.current &&
        !navRef.current.contains(event.target) &&
        !burgerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex px-4 items-center absolute w-screen h-20 justify-between md:px-8 shadow-md overflow-visible z-10">
      <div>
        <img
          className="w-40 h-5 md:w-52 md:h-6"
          src={image}
          alt="logo"
        />
      </div>
      <ul className="justify-between w-6/12 hidden md:flex">
        <li className="text-lg text-gray-600">Home</li>
        <li className="text-lg text-gray-600">Team</li>
        <li className="text-lg text-gray-600">Activities</li>
        <li className="text-lg text-gray-600">Events</li>
        <li className="text-lg text-gray-600">Contact</li>
      </ul>
      <div className="burger md:hidden" ref={burgerRef}>
        <HiMenu
          className="w-7 h-7 text-gray-600"
          onClick={handleBar}
        />
      </div>
      <div
        className={`menu-burger w-72 h-[89.3vh] absolute top-[80px] duration-200 right-0 ${
          isOpen ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}
        ref={navRef}
      >
        <ul className="bg-white flex gap-10 flex-col h-full items-center pt-7 shadow-lg">
          <img
            className="w-40 h-5 md:w-52 md:h-6"
            src={image}
            alt="logo"
          />
          <li className="text-lg text-gray-600">Home</li>
          <li className="text-lg text-gray-600">Team</li>
          <li className="text-lg text-gray-600">Activities</li>
          <li className="text-lg text-gray-600">Events</li>
          <li className="text-lg text-gray-600">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
