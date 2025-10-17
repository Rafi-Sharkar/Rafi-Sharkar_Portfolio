import React from 'react'
import Photo from '../../assets/photos/Champion_01.png'
import { Link } from 'react-router-dom';


export default function ProjectCard(props) {
  console.log(props)

  return (
    <div className=' bg-gray-700 w-[350px] py-9 flex flex-col items-center justify-center border-2 border-gray-700 rounded-[20px] overflow-hidden'>
      <div className='w-[280px] h-[300px]  rounded-[20px] overflow-hidden'>
        <img src={props.img} className='object-cover w-full h-full hover:scale-105 transition-transform duration-300' alt="Image is not found" />
      </div>
      <h2 className='text-3xl font-bold py-5 text-white text-center'>{props.name}</h2>
      <div className='flex gap-8'>
        <button className='border-2 border-green-500 text-l py-2 px-5 rounded-[20px] text-white font-bold'><a href={props.scode} target='_blank'>GitHub</a></button>
        {props.lnk!==""?<button className='border-2 border-green-500 text-l py-2 px-5 rounded-[20px] text-white font-bold'><a href={props.lnk} target='_blank'>Live Demo</a></button>:null}
      </div>
    </div>
  )
}