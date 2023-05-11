import React from "react";
import skill1 from "../../assets/skill1.svg";
import skill2 from "../../assets/skill2.svg";
import skill3 from "../../assets/skill3.svg";
import skill4 from "../../assets/skill4.svg";
import skill5 from "../../assets/skill5.png";
import skill6 from "../../assets/skill6.png";

import "../CSS/box.css";

function About() {
  return (
    <div className='lg:mt-28 mt-16 lg:pb-52 pb-20'>
      <div className='w-full  flex lg:flex-row flex-col'>
        <div className='lg:w-1/2 w-full lg:scale-100 scale-75 flex justify-center items-center'>
          <div className=' '>
            <div className='box'>
              <div className='side front'>
                <img className='' src={skill1} />
              </div>
              <div className='side back'>
                <img className='' src={skill2} />
              </div>
              <div className='side top'>
                <img className='' src={skill3} />
              </div>
              <div className='side bottom'>
                <img className='' src={skill4} />
              </div>
              <div className='side left'>
                <img className='' src={skill5} />
              </div>
              <div className='side right'>
                <img className='' src={skill6} />
              </div>
            </div>
          </div>
        </div>
        <div className='lg:w-1/2 w-full lg:mt-0 mt-20 lg:text-left text-center'>
          <h1 className='text-white text-4xl font-bold  '>About Me</h1>
          <p className='lg:w-3/4 w-full lg:px-0 px-6 text-gray-400 font-semibold text-xl mt-5 '>
            I enjoy working closely with design teams to faithfully translate
            their designs right down to the last pixel. Daily, you'll find me
            using modern frontend technologies that bring the creative process
            to life just as designers intended them to be.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
