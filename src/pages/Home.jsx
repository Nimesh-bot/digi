import React from 'react'
import About from '../components/About'
import Benefits from '../components/Benefits'
import Blogs from '../components/Blogs'
import Courses from '../components/Courses'
import Event from '../components/Event'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Partners from '../components/Partners'
import SocialLinks from '../components/Responsive/SocialLinks'
import Social from '../components/Social'
import Welcome from '../components/Welcome'

const Home = () => {
  return (
    <div className='w-full flex flex-col relative px-4 lg:px-20'>  
        <SocialLinks />
        <Social /> 
        <Navbar />
        <div className='flex flex-col gap-y-16 mt-10'>
          <Welcome />
          <About />
          <Courses />
          <Benefits />
          <Partners />
          <Event />
          <Blogs />
          <Footer />
        </div>
    </div>
  )
}

export default Home