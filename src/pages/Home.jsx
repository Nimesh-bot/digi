import React from 'react'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Social from '../components/Social'
import Welcome from '../components/Welcome'

const Home = () => {
  return (
    <div className='w-full min-h-screen relative'>
        <Social /> 
        <Navbar />
        <Welcome />
        <About />
    </div>
  )
}

export default Home