import React from "react";
import { useState, useEffect } from "react";
import { FaLinkedinIn, FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";
import Hamburger from "../Hamburger/Hamburger.jsx";
import { HiOutlineChevronDown } from "react-icons/hi";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";

export default function Nav() {
  const [headerBg, setHeaderBg] = useState("bg-black opacity-100");
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset >= 10) {
      setHeaderBg(" opacity-100 backdrop-blur-sm ");
    } else {
      setHeaderBg("bg-black");
    }
  };
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {isOpen && <Hamburger setIsOpen={setIsOpen} />}
      <div
        className={` fixed z-20 top-0 ${headerBg} w-screen lg:py-5 lg:px-20 md:py-5 md:px-14 py-5 px-5`}
      >
        <div className='flex justify-between '>
          <a
            href='#'
            className='text-2xl text-[#3a5791] font-bold hover:animate-bounce infinite'
            style={{ fontFamily: "Pacifico" }}
          >
            M<span className='text-white'>bilal</span>
          </a>

          <button
            className='md:hidden text-[#afbfe0] flex justify-between items-center'
            onClick={handleOpen}
          >
            <HiMenu className='w-8 h-8' />
          </button>
          <div className='md:flex justify-between space-x-5 hidden '>
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className='text-gray-400 text-lg font-bold cursor-pointer hover:text-gray-500'
            >
              Home
            </Link>
            <Link
              to='about'
              duration={500}
              smooth={true}
              offset={-70}
              className='text-gray-400 text-lg font-bold cursor-pointer hover:text-gray-500'
            >
              About
            </Link>

            <Link
              to='contact'
              duration={500}
              smooth={true}
              offset={-70}
              className='text-gray-400 text-lg font-bold cursor-pointer hover:text-gray-500'
            >
              Contact
            </Link>
          </div>

          <div className='md:flex justify-between space-x-3 hidden'>
            <a
              href='#'
              className='bg-gray-400 h-fit p-1 transition-transform duration-300 transform hover:scale-125'
            >
              <FaLinkedinIn size={14} />
            </a>
            <a
              href='#'
              className='bg-gray-400 h-fit p-1 transition-transform duration-300 transform hover:scale-125 rounded-full'
            >
              <FaGithub size={14} />
            </a>
            <a
              href='#'
              className='bg-gray-400 h-fit p-1 transition-transform duration-300 transform hover:scale-125'
            >
              <FaFacebook size={14} />
            </a>
            <a
              href='#'
              className='bg-gray-400 h-fit p-1 transition-transform duration-300 transform hover:scale-125'
            >
              <FaTwitter size={14} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
