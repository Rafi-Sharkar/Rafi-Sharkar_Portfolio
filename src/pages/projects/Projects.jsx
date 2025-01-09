import React from 'react'
import Footer from '../../global components/footer/Footer'
import ProjectCard from '../../global components/project_card/ProjectCard'
import {Projects1} from '../../assets/data/data.js'

export default function Projects() {
  console.log(Projects1)
  return (
    <div>
      <div className='w-full flex justify-center bg-gray-400 text-white'>
        <h2 className='text-4xl py-3 text-center'>Projects</h2>
      </div>
      <div className='flex flex-wrap justify-center gap-5 my-3 mx-1 py-5'>
        {
          Projects1.map((project,i)=>{
            return(<ProjectCard img={project.img} name={project.name} scode={project.scode} link={project.scode} />)
          })
        }
      </div>
      <Footer />
    </div>
  )
}
