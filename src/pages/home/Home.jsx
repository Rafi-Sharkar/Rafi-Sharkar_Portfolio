import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineCastForEducation } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import ProjectCard from '../../global components/project_card/ProjectCard';
import Contact from '../contact/Contact'
import { Self } from '../../assets/data/data/'
import { Link } from 'react-router-dom';
import { Projects1 } from '../../assets/data/data';

export default function Home() {
  return (
    <>
    {/* Profile Section */}
    <div className='flex justify-center items-center bg-gray-100 p-4 w-full h-[90vh] md:gap-[5rem] md:h-[90.4vh] border-b-2 border-black md:py-[7rem] flex-wrap'>
      <div className='relative w-[350px] h-[350px] border-2 border-black rounded-[50%] overflow-hidden'>
        <img className='object-cover absolute top-[7rem] left-[-7.7rem]  scale-[2.8]' src={Self.profile_pic} alt="image is not found" />
      </div>
      <div className='w-[450px] pt-7 flex flex-col items-center gap-[15px]'>
        <p className='text-s font-semibold mb-[-8px] text-gray-400'>Hello, I'm</p>
        <h2 className='text-4xl font-bold my-0'>{Self.name}</h2>
        <h3 className='text-2xl font-semibold text-gray-500 mt-[-10px]'>{Self.job_title}</h3>
        <div className='w-full flex justify-center gap-8'>
          <a href={Self.CV_down} download='Rafi Sharkar CV' className='cursor-pointer border border-black py-2 px-4 rounded-[35px] font-semibold'>Download CV</a>
          <Link to={'/contact'} className='border  border-black bg-black text-white font-semibold py-2 px-4 rounded-[35px]'>Contact Info</Link>
        </div>
        <div className='flex gap-6'>
          <Link to={Self.LI_link} target='_blank' className='w-[40px] h-[40px] flex justify-center items-center bg-black text-white text-[25px] rounded-[50%] border border-black'><FaLinkedinIn/></Link>
          <Link to={Self.GH_link} target='_blank' className='w-[40px] h-[40px] flex justify-center items-center bg-black text-white text-[30px] rounded-[50%] border border-black'><PiGithubLogoFill/></Link>
        </div>
      </div>
    </div>
    {/* About Section */}
    <div className='w-full bg-gray-200  flex flex-wrap md:justify-center border-b-2 border-gray-800'>
      <div className='w-full py-[2rem] flex flex-col items-center'>
        <p className='text-s text-gray-500 font-semibold'>Get To Know More</p>
        <h2 className='text-3xl font-bold'>About Me</h2>
      </div>
      <div className='flex flex-col md:flex-row md:justify-center items-center'>
        <div className='md:w-[30%] md:flex'>
        <div className='relative w-[300px] h-[300px] border-gray-500 border-2 rounded-[25px] overflow-hidden'>
          <img className='scale-[1.4] absolute left-[-3rem]' src={Self.profile_pic} alt="Image is not found" />
        </div>
        </div>
        <div className='md:w-[50%] flex flex-col justify-center items-center my-7'>
          <div className='flex gap-6 justify-center flex-wrap'>
            <div className='w-[350px] md:w-[250px] h-[150px] bg-gray-300 flex flex-col items-center justify-center rounded-[20px] border border-black'>
              <GrUserExpert className='text-2xl'/>
              <p className='text-lg font-bold'>Experience</p>
              <p className='text-s font-semibold text-gray-700'>2+ years</p>
              <p className='text-s font-semibold text-gray-700'>Full Stack Development</p>
            </div>
            <div className='w-[350px] md:w-[250px] h-[150px] bg-gray-300 flex flex-col items-center justify-center rounded-[20px] border border-black'>
              <GrUserExpert className='text-2xl'/>
              <p className='text-lg font-bold'>Experience</p>
              <p className='text-s font-semibold text-gray-700'>1+ years</p>
              <p className='text-s font-semibold text-gray-700'>Machine Learing <br></br>& Data Science</p>
            </div>
            <div className='w-[350px] md:w-[250px] h-[150px] bg-gray-300 flex flex-col items-center justify-center rounded-[20px] border border-black'>
              <MdOutlineCastForEducation className='text-2xl'/>
              <p className='text-lg font-bold'>Education</p>
              <p className='text-s font-semibold text-gray-700'>B.Sc in CSE</p>
              <p className='text-s font-semibold text-gray-700'>CGPA : 3.42</p>
            </div>
          </div>
          <p className='text-s font-semibold text-gray-500 py-8 px-6 text-justify md:w-[80%] md:px-1'>My name is Mustakim Billah Rafi. My pivotal interest is in Data Science and AI, ML, NLP, DL. I continue my BSc degree in Computer Science and Engineering from Independent University Bangladesh. Currently, I am learning different machine learning method. I have an experience on MERN stack web development, to build requirement based user-friendly project. Also have good communication skill with team handling experience.</p>
        </div>
      </div>
    </div>
    {/* Experience */}
    <div className='bg-gray-300 w-full pb-10'>
      <div className='w-full flex flex-col items-center py-[2rem] mb-6'>
        <p className='text-s text-gray-500 font-semibold'>Explore My</p>
        <h2 className='text-3xl font-bold'>Skills</h2>
      </div>
      <div className='flex flex-wrap gap-7 justify-center'>
        <div className='border-2 border-gray-700 w-[360px] h-[325px] py-6 rounded-[20px] overflow-hidden p-3 flex flex-col items-center'>
          <h3 className='text-2xl font-semibold text-gray-600 pb-9'>Frontend Development</h3>
          <div className='flex flex-wrap justify-center gap-9'>
            <div className='flex '>
              <GiCheckMark className='mt-1 mr-2'/>
              <div>
                <p className='font-bold'>HTML</p>
                <p className='text-xs text-gray-700 font-semibold'>Experienced</p>
              </div>
            </div>
            <div className='flex '>
              <GiCheckMark className='mt-1 mr-2'/>
              <div>
                <p className='font-bold'>CSS</p>
                <p className='text-xs text-gray-700 font-semibold'>Experienced</p>
              </div>
            </div>
            <div className='flex '>
              <GiCheckMark className='mt-1 mr-2'/>
              <div>
                <p className='font-bold'>JavaScript</p>
                <p className='text-xs text-gray-700 font-semibold'>Experienced</p>
              </div>
            </div>
            <div className='flex '>
              <GiCheckMark className='mt-1 mr-2'/>
              <div>
                <p className='font-bold'>React</p>
                <p className='text-xs text-gray-700 font-semibold'>Experienced</p>
              </div>
            </div>
            <div className='flex '>
              <GiCheckMark className='mt-1 mr-2'/>
              <div>
                <p className='font-bold'>Tailwind</p>
                <p className='text-xs text-gray-700 font-semibold'>Experienced</p>
              </div>
            </div>
            <div className='flex '>
              <GiCheckMark className='mt-1 mr-2'/>
              <div>
                <p className='font-bold'>Bootstrap</p>
                <p className='text-xs text-gray-700 font-semibold'>Experienced</p>
              </div>
            </div>            
          </div>
        </div>
        <div className='border-2 border-gray-700 w-[360px] h-[325px] py-6 rounded-[20px] overflow-hidden p-3 flex flex-col items-center'>
          <h3 className='text-2xl font-semibold text-gray-600 pb-9'>Backend Development</h3>
          <div className='flex flex-wrap justify-center gap-9'>
          <div className='flex '>
              <GiCheckMark className='mt-1 mr-2'/>
              <div>
                <p className='font-bold'>NodeJS</p>
                <p className='text-xs text-gray-700 font-semibold'>Experienced</p>
              </div>
            </div>
            <div className='flex '>
              <GiCheckMark className='mt-1 mr-2'/>
              <div>
                <p className='font-bold'>ExpressJS</p>
                <p className='text-xs text-gray-700 font-semibold'>Experienced</p>
              </div>
            </div>
            <div className='flex '>
              <GiCheckMark className='mt-1 mr-2'/>
              <div>
                <p className='font-bold'>MongoDB</p>
                <p className='text-xs text-gray-700 font-semibold'>Experienced</p>
              </div>
            </div>
            <div className='flex '>
              <GiCheckMark className='mt-1 mr-2'/>
              <div>
                <p className='font-bold'>My SQL</p>
                <p className='text-xs text-gray-700 font-semibold'>Experienced</p>
              </div>
            </div>
            <div className='flex '>
              <GiCheckMark className='mt-1 mr-2'/>
              <div>
                <p className='font-bold'>JWT</p>
                <p className='text-xs text-gray-700 font-semibold'>Experienced</p>
              </div>
            </div>
          </div>
        </div>
        <div className='border-2 border-gray-700 w-[360px] h-[325px] py-6 rounded-[20px] overflow-hidden p-3 flex flex-col items-center'>
          <h3 className='text-2xl font-semibold text-gray-600 pb-9'>Machine Learing <br />& Data Science</h3>
          <div className='flex flex-wrap justify-center gap-9'>
          <div className='flex '>
              <GiCheckMark className='mt-1 mr-2'/>
              <div>
                <p className='font-bold'>Cleaning</p>
                <p className='text-xs text-gray-700 font-semibold'>Intermediate</p>
              </div>
            </div>
            <div className='flex '>
              <GiCheckMark className='mt-1 mr-2'/>
              <div>
                <p className='font-bold'>Predictive modeling</p>
                <p className='text-xs text-gray-700 font-semibold'>Intermediate</p>
              </div>
            </div>
            <div className='flex '>
              <GiCheckMark className='mt-1 mr-2'/>
              <div>
                <p className='font-bold'>Python</p>
                <p className='text-xs text-gray-700 font-semibold'>Experienced</p>
              </div>
            </div>
            <div className='flex '>
              <GiCheckMark className='mt-1 mr-2'/>
              <div>
                <p className='font-bold'>Math & Statistics</p>
                <p className='text-xs text-gray-700 font-semibold'>Experienced</p>
              </div>
            </div>
            <div className='flex '>
              <GiCheckMark className='mt-1 mr-2'/>
              <div>
                <p className='font-bold'>Supervised learning</p>
                <p className='text-xs text-gray-700 font-semibold'>Intermediate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Project Section */}
    <div className='bg-gray-400 w-full pb-10'>
      <div className='w-full flex flex-col items-center py-[2rem]'>
        <p className='text-s text-gray-500 font-semibold'>Get View My</p>
        <h2 className='text-4xl font-bold'>Projects</h2>
      </div>
      <div className='flex flex-wrap justify-center items-center py-6 px-3 gap-5'>
        {
          Projects1.map((project,i)=>{
            return(<ProjectCard img={project.img} name={project.name} scode={project.scode} link={project.scode} />)
          })
        }
      </div>
    </div>
    {/* Contact Section */}
    <div className='bg-gray-500 w-full'>
      <Contact />
    </div>
  </>
  )
}
