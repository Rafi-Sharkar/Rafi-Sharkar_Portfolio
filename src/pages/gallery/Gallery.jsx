import React from 'react'
import Footer from '../../global components/footer/Footer'

export default function Gallery() {
  return (
    <div>
      <div className='w-full flex bg-gray-400 text-white'>
        <h2 className='text-4xl py-3 text-center'>Gallery</h2>
      </div>
      <div className='flex flex-wrap justify-center border-2 my-3 mx-1'>
        list of photos
      </div>
      <Footer />
    </div>
  )
}
