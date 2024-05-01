import React from 'react'
import Photo from '../../assets/photos/Champion_01.png'


export default function ProjectCard() {
  return (
    <div className=' bg-gray-700 w-[350px] h-[490px] flex flex-col items-center justify-center border-2 border-gray-700 rounded-[20px] overflow-hidden'>
      <div className='w-[280px] h-[300px] rounded-[20px] overflow-hidden'>
        <img src={Photo} alt="Image is not found" />
      </div>
      <h2 className='text-3xl font-bold py-5 text-white'>Project One</h2>
      <div className='flex gap-8'>
        <button className='border-2 border-green-500 text-l py-2 px-5 rounded-[20px] text-white font-bold'>GitHub</button>
        <button className='border-2 border-green-500 text-l py-2 px-5 rounded-[20px] text-white font-bold'>Live Demo</button>
      </div>
    </div>
  )
}
