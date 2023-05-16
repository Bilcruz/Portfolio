import React from "react";
import About from "./About";
import bilal from "../../assets/bil.jpg";
import gif1 from "../../assets/gif1.gif";
import gif2 from "../../assets/gif2.gif";
import gif3 from "../../assets/gif4.gif";
import skill1 from "../../assets/skill1.svg";
import skill2 from "../../assets/skill2.svg";
import skill3 from "../../assets/skill3.svg";
import skill4 from "../../assets/skill4.svg";
import skill5 from "../../assets/skill5.png";
import { useState } from "react";
import "../CSS/about.css";
import Contact from "./Contact";

function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleLetterHover = index => {
    setHoveredIndex(index);
  };

  return (
    <div className='bg-gradient-to-r from-[#070808] to-[#1e312f] id="home'>
      <div className=' bg-gradient-to-r from-[#070808] to-[#1e312f]  text-white lg:pt-44 pt-32  h-fit lg:pl-32 '>
        <div className='flex lg:flex-row flex-col'>
          <div className='lg:w-1/2 w-full flex flex-col lg:items-start items-center justify-center px-16 '>
            <div className='lg:text-6xl text-3xl font-bold'>
              <div className=' lg:text-left text-center'>
                {"Hi ".split("").map((letter, index) => (
                  <span
                    key={index}
                    className={`inline-block cursor-pointer hover:animate-bounce ${
                      hoveredIndex === index ? "animate-bounce" : ""
                    }`}
                    onMouseEnter={() => handleLetterHover(index)}
                    onMouseLeave={() => setHoveredIndex(-1)}
                    style={{ paddingTop: "5px", paddingBottom: "5px" }}
                  >
                    {letter}
                  </span>
                ))}
                <> </>
                {"I'mBilal".split("").map((letter, index) => (
                  <span
                    key={index}
                    className={`inline-block cursor-pointer hover:animate-bounce ${
                      hoveredIndex === index ? "animate-bounce" : ""
                    }`}
                    onMouseEnter={() => handleLetterHover(index)}
                    onMouseLeave={() => setHoveredIndex(-1)}
                    style={{ paddingTop: "5px", paddingBottom: "5px" }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
              <div className='lg:text-left text-center'>
                {"WebDeveloper".split("").map((letter, index) => (
                  <span
                    key={index}
                    className={`inline-block cursor-pointer hover:animate-bounce ${
                      hoveredIndex === index + 12 ? "animate-bounce" : ""
                    }`}
                    onMouseEnter={() => handleLetterHover(index + 12)}
                    onMouseLeave={() => setHoveredIndex(-1)}
                    style={{ paddingTop: "5px", paddingBottom: "5px" }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </div>
            <div className='text-xl lg:text-left text-center text-gray-400 py-5 lg:pr-5 pr-0'>
              <p>
                I'm creative and passionate frontend developer who works to
                deliver unique and exciting digital solutions that provide an
                exceptional experience to users.
              </p>
            </div>

            <div className='py-5 '>
              <button className='lg:py-4 lg:px-10 py-3 px-7 bg-black bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] rounded-md font-bold text-lg'>
                CV &nbsp; Downloader
              </button>
            </div>
          </div>
          <div className='lg:w-1/2 lg:scale-100 scale-75 flex justify-center items-center'>
            <div className='border border-dashed border-[#1e312f] rounded-full p-8 relative'>
              <img
                className='h-[100px] w-[150px] absolute top-0 -left-10'
                src={gif3}
              />
              <img
                className='h-[100px] w-[150px] absolute top-0 -right-10'
                src={gif1}
              />
              <img
                className='h-[100px] w-[150px] z-0 absolute bottom-0 -right-10'
                src={gif2}
              />
              <img
                className='h-[320px] rounded-full z-10 relative'
                src={bilal}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=''>
        <div className=' flex lg:flex-row flex-col  justify-center items-center  lg:space-x-20 space-x-0 lg:mt-32 mt-10 px-0 pb-20'>
          <h1 className='text-4xl text-center font-bold mt-3 text-gray-300 lg:mb-0 mb-20'>
            Skills:
          </h1>

          <div className='lg:flex grid grid-cols-3 lg:gap-0 gap-12 lg:space-x-20  lg:items-start text-center'>
            <div className='lg:flex hidden  w-[0.5px] h-7 bg-[#1e312f] mt-5'></div>
            <img className='lg:h-[60px] h-[50px]' src={skill1} />
            <img className='lg:h-[60px] h-[50px]' src={skill2} />
            <img className='lg:h-[60px] h-[50px]' src={skill3} />
            <img className='lg:h-[60px] h-[50px]' src={skill4} />
            <img className='lg:h-[60px] h-[50px]' src={skill2} />
            <img className='lg:h-[60px] h-[50px]' src={skill4} />
          </div>
        </div>

        <div className='flex space-x-5 px-20 py-20'>
          <div className='h-1 w-1 rounded-full bg-[#415e7a]'></div>
          <div className='h-1 w-1 rounded-full bg-[#415e7a]'></div>
          <div className='h-1 w-full rounded-full bg-black bg-gradient-to-r from-[#415e7a] to-[#4e464e]'></div>
        </div>
      </div>

      <About />
      <Contact />
    </div>
  );
}

export default Home;
