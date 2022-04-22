import React from 'react'
import About from '../components/About'
import Benefits from '../components/Benefits'
import Blogs from '../components/Blogs'
import Courses from '../components/Courses'
import Event from '../components/Event'
import Footer from '../components/Footer'
import Integrate from '../components/Integrate'
import Map from '../components/Map'
import Partners from '../components/Partners'
import Superhero from '../components/Superhero'
import Welcome from '../components/Welcome'

const Home = () => {
  return (  
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
      <div>
        <Map />
        <Footer />
      </div>
    </div>
  )
}

export default Home