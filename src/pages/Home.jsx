import React, { useState } from 'react'
import About from '../components/About'
import Benefits from '../components/Benefits'
import Blogs from '../components/Blogs'
import Courses from '../components/Courses'
import Event from '../components/Event'
import Footer from '../components/Footer'
import Integrate from '../components/Integrate'
import Navbar from '../components/Navbar'
import Partners from '../components/Partners'
import Modal from '../components/Responsive/Modal'
import SocialLinks from '../components/Responsive/SocialLinks'
import Social from '../components/Social'
import Superhero from '../components/Superhero'
import Welcome from '../components/Welcome'

const Home = () => {
  const [active, setActive] = useState(false);

  const handleModal = () => {
    setActive(!active);
  }

  return (
    <div className='w-full flex flex-col relative'>  
        {
          active &&
          <Modal handleModal={handleModal}/>
        }
        <SocialLinks />
        <Social /> 
        <Navbar handleModal={handleModal}/>
        <div className='flex flex-col gap-y-16 mt-10'>
          <Welcome />
          <About />
          <Courses />
          <Benefits />
          <Partners />
          <Event />
          <Blogs />
          <Superhero />
          <Integrate />
          <Footer />
        </div>
    </div>
  )
}

export default Home