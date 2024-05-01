import React from 'react'
import Footer from '../../global components/footer/Footer'
import { Cert } from '../../assets/data/data'

export default function Certificates() {
  return (
    <div>
      <div className='w-full flex justify-center bg-gray-400 text-white'>
        <h2 className='text-4xl py-3 text-center'>Certificates <br></br> & <br></br> Achievement</h2>
      </div>
      <div className='flex flex-wrap justify-center my-3 mx-1'>
      <div className='w-full flex flex-wrap gap-5 justify-center py-10 px-5'>
        {Cert.map((item, i)=>{
          return(
          <div key={i} className='w-[300px] h-[200px] border-2 border-gray-600 rounded-[20px] flex justify-center items-center overflow-hidden'  >
            <img className='object-cover scale-[1]' src={item.img} alt="Image is not found" />
          </div>)
        })}
      </div>
      </div>
      <Footer />
    </div>
  )
}
