import React, { useState } from 'react'
import photo_01 from '../../assets/photos/Rafi_tab_icon.png'

export default function Navbar() {

  const [open, setOpen] = useState(false);


  return (
    <div className='font-[Poppins] bg-gradient-to-t from-[#fbc2eb] to-[#a6c1ee] h-screen'>
      <div className='bg-white'>
      <nav className='flex justify-between items-center w-[92%] mx-auto'>
        <div>
          <img className='w-[100px]' src={photo_01} alt='Image is not found'/>  
        </div>
        <div className={`md:static absolute bg-white md:min-h-fit py-3 top-[12%] md:w-auto w-full md:m-auto transition-all duration-500 items-center px-5 ${open ? 'left-[0%]': 'left-[-100%]'}`}>
          <ul className='flex flex-col md:flex-row md:items-center gap-2'>
            <li><a className='md:ml-8 text-xl text-black-500 font-[400] hover:text-gray-500' href='#'>About</a></li>
            <li><a className='md:ml-8 text-xl text-black-500 font-[400] hover:text-gray-500' href='#'>Experience</a></li>
            <li><a className='md:ml-8 text-xl text-black-500 font-[400] hover:text-gray-500' href='#'>Projects</a></li>
            <li><a className='md:ml-8 text-xl text-black-500 font-[400] hover:text-gray-500' href='#'>Contact</a></li>
          </ul>
        </div>
        <div onClick={()=>setOpen(!open)} className='text-4xl absolute right-8 top-3 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close-outline':'menu-outline'}></ion-icon>
        </div>
        </nav>  
      </div>
    </div>
  )
}
