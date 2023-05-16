import React, { useRef } from "react";
import { HiArrowSmUp } from "react-icons/hi";

import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dqk9czf",
        "template_1h7zlai",
        form.current,
        "hMnkaXB4z9fCSZ3wb"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className='text-white   lg:mt-16 relative'>
      <div
        id='contact'
        className='flex lg:flex-row flex-col w-full bg-[#161515]'
      >
        <div className='lg:w-1/2 w-full flex flex-col justify-center items-center text-center  lg:p-24 p-10'>
          <h1 className='lg:text-6xl text-4xl font-bold '>Contact me</h1>
          <p className=' text-xl mt-5 mb-2 text-gray-400'>
            Have a project in mind or just want to say hello?
          </p>
          <p className=' text-xl text-gray-400'>
            Reach out to me and let's start a conversation
          </p>
        </div>
        <div className='lg:w-1/2 w-full  text-center lg:py-16'>
          <form ref={form} onSubmit={sendEmail}>
            <div className=' mb-8'>
              <input
                type='text'
                name='user_name'
                className='bg-[#1b1f1f] rounded-lg px-4 py-3 text-white lg:w-4/6 w-5/6  placeholder-gray-500 outline-none'
                placeholder='Name'
              />
            </div>
            <div className='mb-8'>
              <input
                type='email'
                name='user_email'
                className='bg-[#1b1f1f] rounded-lg px-4 py-3 text-white lg:w-4/6 w-5/6  placeholder-gray-500 outline-none'
                placeholder='Email'
              />
            </div>
            <div className='mb-8'>
              <textarea
                name='message'
                className=' h-40 lg:w-4/6 w-5/6 bg-[#1b1f1f] rounded-lg px-4 py-5 placeholder-gray-500  focus:outline-none resize-none'
                placeholder='Enter text here...'
              />
            </div>
            <div className='pb-10'>
              <button
                type='submit'
                value='Send'
                className='py-4 px-10  bg-black bg-gradient-to-r from-[#4ca5ff] to-[#b673f8] rounded-md font-bold text-lg hover:shadow-[#4ca5ff] hover:shadow-lg'
              >
                Send&nbsp;Message
              </button>
            </div>
          </form>
        </div>
        <div className='flex justify-end absolute bottom-5 right-5'>
          <HiArrowSmUp
            className='rounded-full bg-white text-black '
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            size={28}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
