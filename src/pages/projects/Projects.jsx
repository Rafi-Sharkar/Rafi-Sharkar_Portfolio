import React from 'react'
import Footer from '../../global components/footer/Footer'

export default function Projects() {
  return (
    <div>
      <div className='w-full flex justify-center bg-gray-400 text-white'>
        <h2 className='text-4xl py-3 text-center'>Projects</h2>
      </div>
      <div className='flex flex-wrap justify-center border-2 my-3 mx-1'>
        Here are all projects that I made
      </div>
      <Footer />
    </div>
  )
}
