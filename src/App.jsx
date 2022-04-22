import React, { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Calendar from './pages/Calendar'
import Modal from './components/Responsive/Modal'
import SocialLinks from './components/Responsive/SocialLinks'
import Social from './components/Social'
import Navbar from './components/Navbar'

const App = () => {
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
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App