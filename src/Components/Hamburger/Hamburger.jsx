import React, { useState } from "react";
import "../CSS/Hamburger.css";
import { Link } from "react-scroll";

import { HiX, HiChevronDown, HiArrowSmUp } from "react-icons/hi";

function Hamburger({ setIsOpen }) {
  return (
    <div>
      <div className='lg:hidden opacity-100 backdrop-blur fixed top-0 l-0 w-full h-full flex justify-end z-50'>
        <button
          className='w-fit h-fit absolute top-5 right-4  rounded-md  text-[#3a5791]'
          onClick={() => setIsOpen(!setIsOpen)}
        >
          <HiX className='h-7 w-7 text-[#afbfe0]' size={14} />
        </button>
        <div className=' h-full w-4/5 bg-[#16171f] py-28 font-medium flex flex-col text-white text-center'>
          <Link
            onClick={() => {
              setIsOpen(!setIsOpen);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className='text-gray-400 text-lg font-bold cursor-pointer hover:text-gray-500 py-5'
          >
            Home
          </Link>

          <Link
            to='about'
            duration={500}
            smooth={true}
            offset={-70}
            className='text-gray-400 text-lg font-bold cursor-pointer hover:text-gray-500 py-5'
            onClick={() => setIsOpen(!setIsOpen)}
          >
            About
          </Link>

          <Link
            to='contact'
            duration={500}
            smooth={true}
            offset={-70}
            className='text-gray-400 text-lg font-bold cursor-pointer hover:text-gray-500 py-5'
            onClick={() => setIsOpen(!setIsOpen)}
          >
            Contact
          </Link>

          <div className='py-5'>
            <button className='p-2 border border-white text-white bg-[#3a5791] rounded'>
              Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
