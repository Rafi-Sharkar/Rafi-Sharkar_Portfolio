import React from 'react'
import Footer from '../../global components/footer/Footer'
import { Gallery_01 } from '../../assets/data/data'

export default function Gallery() {
  return (
    <div>
      <div className='w-full flex justify-center bg-gray-400 text-white'>
        <h2 className='text-4xl py-3 text-center'>Gallery</h2>
      </div>
      <div className='w-full flex flex-wrap gap-5 justify-center py-10 px-5'>
        {Gallery_01.map((item, i)=>{
          return(
          <div key={i} className='w-[300px] h-[200px] border-2 border-gray-600 rounded-[20px] flex justify-center items-center overflow-hidden'  >
            <img className='object-fill scale-[1.19]' src={item.img} alt="Image is not found" />
          </div>)
        })}
      </div>
      <Footer />
    </div>
  )
}
