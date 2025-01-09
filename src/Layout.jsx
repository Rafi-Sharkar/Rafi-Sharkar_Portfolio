import React from 'react'
import Navbar from './global components/navbar/Navbar'
import Footer from './global components/footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
// import About from './pages/about/About'
import Gallery from './pages/gallery/Gallery'
import Certificates from './pages/certificates/Certificates'
import Projects from './pages/projects/Projects'
import Contact from './pages/contact/Contact'



export default function Layout() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home/> }/>
        {/* <Route path='/about' element={ <About /> } /> */}
        <Route path='/gallery' element={ <Gallery /> } />
        <Route path='/certificates' element={ <Certificates /> } />
        <Route path='/projects' element={ <Projects /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
      
    </div>
  )
}
