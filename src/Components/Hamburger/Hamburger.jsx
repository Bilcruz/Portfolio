import React, { useState } from "react";
import "../CSS/Hamburger.css";

import { HiX, HiChevronDown, HiArrowSmUp } from "react-icons/hi";

function Hamburger({ setIsOpen }) {
  return (
    <div>
      <div className='lg:hidden opacity-100 backdrop-blur fixed top-0 l-0 w-full h-full flex justify-end z-20'>
        <button
          className='w-fit h-fit mt-7 mr-2 rounded-md'
          onClick={() => setIsOpen(!setIsOpen)}
        >
          <HiX className='h-7 w-7 text-gray-200 hover:text-white' size={14} />
        </button>
        <div className=' h-full w-4/5 bg-[#16171f] py-28 font-medium flex flex-col text-white text-center'>
          <div className='py-5'>
            <a href='#'>HOME</a>
          </div>
          <div className='py-5'>
            <a href='#'>ABOUT</a>
          </div>
          <div className='py-5'>
            <a href='#'>WORK</a>
          </div>
          <div className='py-5'>
            <a href='#'>CONTACT</a>
          </div>

          <div className='py-5'>
            <button className='p-2 border border-[#e3b007] text-[#e3b007] rounded'>
              Resumeujjj
            </button>
          </div>

          <div className='flex justify-end absolute bottom-5 right-5'>
            <HiArrowSmUp
              className='rounded-full bg-white text-black '
              size={28}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
