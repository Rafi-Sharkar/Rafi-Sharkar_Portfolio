import React from 'react'
import { FaRegEnvelope } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import photo_01 from '../../assets/photos/Rafi_tab_icon.png'

// bg-gradient-to-r from-[#00093c] to-[#2d0b00]         colorfull background

export default function Footer() {
  return (
    <div className='w-[100%] bg-gradient-to-b from-gray-600 to-gray-950 text-white px-0 pt-[60px] pb-[0px] rounded-tl-[125px] text-[13px] overflow-hidden'>
        <div className='w-[85%] m-auto flex flex-wrap justify-between items-start '>
            <div className="basis-[100%] md:basis-[25%] p-[10px]">
                <img className='w-[80px] mb-[30px]' height={'100px'} width={'100px'} src={photo_01} alt="Image is not found"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quod assumenda, quas magni sunt ex asperiores corrupti praesentium voluptatum sequi?</p>
            </div>
            <div className="basis-[25%] p-[10px]">
                <h3 className='font-bold w-fit mb-[40px] relative'>Home<div className='w-[100%] h-[5px] bg-[#767676] rounded-[3px] absolute top-[25px] left-[0px]'></div></h3>
                <p>House: 96</p>
                <p>Road: 16</p>
                <p>Sector: 14</p>
                <p>Uttara, Dhaka</p>
                <p className='w-fit border-b-[1px] border-sold border-[#ccc]'>rafisharkar144@gmail.com</p>
                <h4>+880 - 1905493909</h4>
            </div>
            <div className="basis-[25%] p-[10px]">
                <h3 className='font-bold w-fit mb-[40px] relative'>Link <div className='w-[100%] h-[5px] bg-[#767676] rounded-[3px] absolute top-[25px] left-[0px]'></div></h3>
                <ul className='leading-[10px]'>
                    <p className='list-none mb-[12px] '><a className='text-white-400 hover:text-blue-800 hover:text-[.9rem]' href="">Home</a></p>
                    <p className='list-none mb-[12px] '><a className='text-white-400 hover:text-blue-800 hover:text-[.9rem]' href="">Certificate</a></p>
                    <p className='list-none mb-[12px] '><a className='text-white-400 hover:text-blue-800 hover:text-[.9rem]' href="">Projects</a></p>
                    <p className='list-none mb-[12px] '><a className='text-white-400 hover:text-blue-800 hover:text-[.9rem]' href="">Gallery</a></p>
                    <p className='list-none mb-[12px] '><a className='text-white-400 hover:text-blue-800 hover:text-[.9rem]' href="">Contacts</a></p>

                </ul>
            </div>
            <div className="basis-[25%] p-[10px]">
                <h3 className='font-bold w-fit mb-[40px] relative'>Newsletter <div className='w-[100%] h-[5px] bg-[#767676] rounded-[3px] absolute top-[25px] left-[0px]'></div></h3>
                <form className='flex items-center justify-between border-b-[1px] border-[#ccc] mb-[50px]'>
                    <FaRegEnvelope size={'30px'}/>
                    <input className='w-[100%] h-[20px] bg-transparent outline-none rounded-[2px] px-[5px] text-[#fff]' type="email" placeholder='Enter your email id' required/>
                    <button type='submit' className='bg-white text-[black] p-[3.5px] rounded-[2px]'><FaArrowRightLong/></button>
                </form>
                <div className='flex justify-center gap-4 text-4xl'>
                    <FaFacebook />
                    <AiFillInstagram />
                    <FaLinkedin />
                    <FaSquareGithub />
                </div>
            </div>
            <hr className='w-[90%] border-b-[1px] border-[#ccc] m-auto'/>
            <div className='w-full py-[15px] flex justify-center m-auto'>
                <p>Easy Tutorial &#169; 2024 -All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}
