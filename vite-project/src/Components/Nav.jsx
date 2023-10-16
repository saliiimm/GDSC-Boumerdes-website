import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/logo.png';
import { HiMenu } from 'react-icons/hi';
import '../App.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navWidth, setNavWidth] = useState('nav');
  const navRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        burgerRef.current &&
        !navRef.current.contains(event.target) &&
        !burgerRef.current.contains(event.target) &&
        isOpen // Vérifiez si le menu est ouvert avant de fermer l'overlay
      ) {
        setIsOpen(false);
        document.body.classList.remove('menu-open', 'overlay');
        setNavWidth('nav');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleBar = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setNavWidth('nav');
      document.body.classList.remove('menu-open', 'overlay');
    } else {
      setNavWidth('active');
      document.body.classList.add('menu-open', 'overlay');
    }
  };
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleAboutClick = () => {
    navigate('/about');
  };

  return (
    <nav
      className={`flex px-4  bg-white items-center fixed w-[100%] h-20 justify-between md:px-8 shadow-md z-10`}>
      <div>
        <img
          className="w-40 h-5 md:w-52 md:h-6 cursor-pointer"
          src={image}
          alt="logo"
          onClick={handleHomeClick}
        />
      </div>
      <ul className="justify-between w-6/12 hidden md:flex">
        <a href="#main" onClick={handleHomeClick}>
          <li className="text-lg text-gray-600">Home</li>
        </a>
        <a href="#team" onClick={handleHomeClick}>
          <li className="text-lg text-gray-600">Team</li>
        </a>
        <a href="#activities" onClick={handleHomeClick}>
          <li className="text-lg text-gray-600">Activities</li>
        </a>
        <a href="#events" onClick={handleHomeClick}>
          <li className="text-lg text-gray-600">Events</li>
        </a>

        {/* <a href="" onClick={handleAboutClick}>
          <li className="text-lg text-gray-600">About</li>
        </a> */}
        <a href="#contact" onClick={handleHomeClick}>
          <li className="text-lg text-gray-600">Contact</li>
        </a>
      </ul>
      <div className="burger md:hidden" ref={burgerRef}>
        <HiMenu className="w-7 h-7 text-gray-600" onClick={handleBar} />
      </div>
      <div
        className={`menu-burger  md:hidden w-72 h-[100.3vh] absolute top-[80px] duration-200 right-0 ${navWidth}`}
        ref={navRef}>
        <ul className="bg-white flex gap-10 flex-col h-full items-center pt-7 shadow-lg">
          <a href="#main" onClick={handleHomeClick}>
            <img
              className="w-40 h-5 md:w-52 md:h-6 cursor-pointer"
              src={image}
              alt="logo"
            />
          </a>
          <a href="#main" onClick={handleHomeClick}>
            <li className="text-lg text-gray-600">Home</li>
          </a>
          <a href="#team" onClick={handleHomeClick}>
            <li className="text-lg text-gray-600">Team</li>
          </a>
          <a href="#activities" onClick={handleHomeClick}>
            <li className="text-lg text-gray-600">Activities</li>
          </a>
          <a href="#events" onClick={handleHomeClick}>
            <li className="text-lg text-gray-600">Events</li>
          </a>

          {/* <a href="" onClick={handleAboutClick}>
            <li className="text-lg text-gray-600">About</li>
          </a> */}
          <a href="#contact" onClick={handleHomeClick}>
            <li className="text-lg text-gray-600">Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;