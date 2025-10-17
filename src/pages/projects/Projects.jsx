import React from 'react'
import Footer from '../../global components/footer/Footer'
import ProjectCard from '../../global components/project_card/ProjectCard'
import {Projects1} from '../../assets/data/data.js'

export default function Projects() {
  console.log(Projects1)
  return (
    <div>
      <div className='w-full py-5  flex items-center flex-col'>
        <p>Take a view of my</p>
        <h2 className='text-4xl font-bold'>PROJECTS</h2>
      </div>
      <div className='flex flex-wrap justify-center gap-5 my-3 mx-1 py-5'>
        {console.log(Projects1)}
        {
          Projects1.map((project,i)=>{
              return(<ProjectCard key={i} img={project.img} name={project.name} scode={project.scode} lnk={project.link} />)
          })
        }
      </div>
      <Footer />
    </div>
  )
}
