import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Footer from '../../global components/footer/Footer';

export default function Contact() {
  return (
    <div className='w-[100%]'>
      <div className='w-full py-5  flex items-center flex-col'>
        <p>Get in touch</p>
        <h2 className='text-4xl font-bold'>CONTACT</h2>
      </div>
      <div className='px-[2rem] mt-9 flex flex-wrap justify-center gap-20 md:gap-4 pb-10'>
        <div className='w-[49%] flex flex-col items-center gap-4 '>
 
          <div className='w-[360px] flex items-center bg-gray-800 text-gray-100 rounded-[6px] h-[12vh]'>
            <div className='w-[45px] h-[45px] ml-5 mr-3 flex justify-center items-center bg-gray-900 text-2xl text-white rounded-[50%]'><FaPhoneAlt/></div>
            <p>+880 - 1905493909</p>
          </div>

          <div className='w-[360px] flex items-center bg-gray-800 text-gray-100 rounded-[6px] h-[12vh]'>
            <div className='w-[45px] h-[45px] ml-5 mr-3 flex justify-center items-center bg-gray-900 text-2xl text-white rounded-[50%]'><MdEmail/></div>
            <p>rafisharkar144@gmail.com</p>
          </div>

          <div className='w-[360px] flex items-center bg-gray-800 text-gray-100 rounded-[6px] h-[12vh]'>
            <div className='w-[45px] h-[45px] ml-5 mr-3 flex justify-center items-center bg-gray-900 text-2xl text-white rounded-[50%]'><FaLocationDot/></div>
            <p>Chashara, Narayanganj, Dhaka</p>
          </div>

        </div>
        <div className='w-[49%] flex justify-center'>
          <form className='flex flex-col gap-3'>
            <div>
              <p>Your name</p>
              <input type="text" className='bg-gray-400 outline-none rounded-[4px] pl-1 p-1 w-[400px]' required/>
            </div>
            <div>
              <p>Your email</p>
              <input type="email" className='bg-gray-400 outline-none rounded-[4px] pl-1 p-1 w-[400px]' required/>
            </div>
            <div>
              <p>Massage</p>
              <textarea type="text" className='mt-2 bg-gray-400 rounded-[4px] w-[400px]'/>
            </div>
            <div>
              <button className='bg-gray-900 text-gray-100 w-[70px] h-[30px] rounded-[6px]'>Send</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
