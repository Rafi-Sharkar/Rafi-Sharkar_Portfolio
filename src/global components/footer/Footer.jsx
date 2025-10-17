import React from 'react'
import { FaRegEnvelope } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import photo_01 from '../../assets/photos/Rafi_tab_icon.png'
import { Link } from 'react-router-dom';
import { Self } from '../../assets/data/data'

// bg-gradient-to-r from-[#00093c] to-[#2d0b00]         colorfull background

export default function Footer() {
  return (
    <div className='w-[100%] bg-gradient-to-b from-gray-600 to-gray-950 text-white px-0 pt-[30px] pb-[0px] rounded-tl-[125px] text-[13px] overflow-hidden'>
        <div className='w-[85%] m-auto flex flex-wrap justify-between items-start '>
            <div className="basis-[100%] md:basis-[25%] p-[10px]">
                <img className='w-[80px] mb-[30px] rounded-xl' height={'100px'} width={'100px'} src={photo_01} alt="Image is not found"/>
                <p>Skilled in communication, teamwork, and time management, I foster collaboration, ensure alignment, and deliver quality results through organization, adaptability, and proactive problem-solving under pressure.</p>
            </div>
            <div className="basis-[25%] p-[10px]">
                <h3 className='font-bold w-fit mb-[40px] relative'>Home<div className='w-[100%] h-[5px] bg-[#767676] rounded-[3px] absolute top-[25px] left-[0px]'></div></h3>
                <p>05-Road, A-Block</p>
                <p>Bashundhara R/A</p>
                <p>Dhaka, Bangladesh</p>
                <p>Or,</p>
                <p>Jamtola, Chashara</p>
                <p>Narayanganj, Dhaka</p>

            </div>
            <div className="basis-[25%] p-[10px]">
                <h3 className='font-bold w-fit mb-[40px] relative'>Link <div className='w-[100%] h-[5px] bg-[#767676] rounded-[3px] absolute top-[25px] left-[0px]'></div></h3>
                <ul className='leading-[10px]'>
                    <p className='list-none mb-[12px] '><Link className='text-white-400 hover:text-blue-800 hover:text-[.9rem]' to="/">Home</Link></p>
                    <p className='list-none mb-[12px] '><Link className='text-white-400 hover:text-blue-800 hover:text-[.9rem]' to="/certificates">Certificate</Link></p>
                    <p className='list-none mb-[12px] '><Link className='text-white-400 hover:text-blue-800 hover:text-[.9rem]' to="/projects">Projects</Link></p>
                    <p className='list-none mb-[12px] '><Link className='text-white-400 hover:text-blue-800 hover:text-[.9rem]' to="/gallery">Gallery</Link></p>
                    <p className='list-none mb-[12px] '><Link className='text-white-400 hover:text-blue-800 hover:text-[.9rem]' to="/contact">Contacts</Link></p>

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
                    <Link to={Self.FB_link} target='_blank'><FaFacebook /></Link>
                    <Link to={Self.IG_link} target='_blank'><AiFillInstagram /></Link>
                    <Link to={Self.LI_link} target='_blank'><FaLinkedin /></Link>
                    <Link to={Self.GH_link} target='_blank'><FaSquareGithub /></Link>
                </div>
            </div>
            <hr className='w-[90%] border-b-[1px] border-[#ccc] m-auto'/>
            <div className='w-full py-[15px] flex justify-center m-auto'>
                <p>&#169; 2025 Rafi Sharkar. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}
