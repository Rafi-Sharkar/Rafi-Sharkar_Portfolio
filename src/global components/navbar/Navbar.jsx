import React, { useState } from 'react'
import photo_01 from '../../assets/photos/Rafi_tab_icon.png'
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [open, setOpen] = useState(false);


  return (
    <div className='font-[Poppins]'>
      <div className='bg-white border-b-[1px] border-black'>
      <nav className='flex justify-between items-center w-[92%] mx-auto'>
        <div>
          <img className='w-[100px]' src={photo_01} alt='Image is not found'/>  
        </div>
        <div className={`md:static absolute bg-white md:min-h-fit py-3 md:w-auto w-[100%] md:m-auto transition-all duration-500 top-[6.1%] items-center px-5 ${open ? 'left-[0%]': 'left-[-100%]'} z-40`}>
          <ul className='flex flex-col md:flex-row md:items-center gap-2'>
            <li><Link onClick={()=>setOpen(false)} to='/' className='md:ml-8 text-xl text-black-500 font-[400] hover:text-gray-500' >Home</Link></li>
            {/* <li><Link onClick={()=>setOpen(false)} to='/about' className='md:ml-8 text-xl text-black-500 font-[400] hover:text-gray-500' >About</Link></li> */}
            <li><Link onClick={()=>setOpen(false)} to='/gallery' className='md:ml-8 text-xl text-black-500 font-[400] hover:text-gray-500' >Gallery</Link></li>
            <li><Link onClick={()=>setOpen(false)} to='/certificates' className='md:ml-8 text-xl text-black-500 font-[400] hover:text-gray-500' >Certificates</Link></li>
            <li><Link onClick={()=>setOpen(false)} to='/projects' className='md:ml-8 text-xl text-black-500 font-[400] hover:text-gray-500' >Projects</Link></li>
            <li><Link onClick={()=>setOpen(false)} to='/contact' className='md:ml-8 text-xl text-black-500 font-[400] hover:text-gray-500' >Contact</Link></li>
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
