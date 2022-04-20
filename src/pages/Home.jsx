import React from 'react'
import About from '../components/About'
import Navbar from '../components/Navbar'
import SocialLinks from '../components/Responsive/SocialLinks'
import Social from '../components/Social'
import Welcome from '../components/Welcome'

const Home = () => {
  return (
    <div className='w-full min-h-screen relative'>  
        <SocialLinks />
        <Social /> 
        <Navbar />
        <Welcome />
        <About />
    </div>
  )
}

export default Home