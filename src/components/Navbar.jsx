import React from 'react'
import { IoIosCall } from 'react-icons/io';

import Logo from '../assets/images/DigiSchool.png';

const Navbar = () => {
  return (
    <nav className='w-full h-16 fixed top-0 left-0 bg-white flex justify-between items-center py-4 z-10 lg:px-20'>
        {/* Logo */}
        <div className='w-32 h-full'>
            <img src={Logo} alt="DigiSchool" className='w-full h-full object-cover'/>
        </div>

        {/* Menu */}
        <ul className='hidden lg:flex gap-x-8'>
            <li className={`listItem`}>Home</li>
            <li className={`listItem`}>About us</li>
            <li className={`listItem`}>Courses</li>
            <li className={`listItem`}>Contact us</li>
            <li className={`listItem`}>Your superhero</li>
        </ul>

        {/* Contact */}
        <div className='hidden lg:flex px-4 py-2 rounded-md bg-blue_dark items-center gap-x-2 cursor-context-menu'>
            <IoIosCall className='text-white'/>
            <p className='text-white text-base'>+977 5906046</p>
        </div>
    </nav>
  )
}

export default Navbar