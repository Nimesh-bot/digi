import React from 'react'
import Logo from '../assets/images/DigiSchool.png'

const Footer = () => {
  return (
    <div className='w-full flex flex-col bg-gray_light px-4 lg:px-20 gap-y-16'>
        {/* Quick Links */}
        <div className='flex flex-col lg:flex-row justify-between items-center'>
          <div>
            <ul className='flex flex-col md:flex-row gap-y-4 mt-4 lg:mt-0 text-center gap-x-4 text-sm text-black uppercase decoration-none cursor-pointer'>
              <li>Home</li>
              <li>About</li>
              <li>Courses</li>
              <li>Superhero</li>
            </ul>
          </div>

          {/* Logo */}
          <img src={Logo} alt="Digi School" className="w-56 h-auto mix-blend-multiply" />

          <div>
            <ul className='flex flex-col md:flex-row gap-y-4 mt-4 lg:mt-0 text-center gap-x-4 text-sm text-black uppercase decoration-none cursor-pointer'>
              <li>Terms</li>
              <li>Privacy Policy</li>
              <li>Integrate</li>
              <li>Benefits</li>
            </ul>
          </div>
        </div>

        <div className='mb-8'>
          <div className='w-full h-[1px] bg-black my-4'/>
          <p className='text-xs text-center'>Copyright 2022. All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer