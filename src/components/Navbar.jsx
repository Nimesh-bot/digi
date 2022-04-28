import React, { useState } from 'react'
import { IoIosCall } from 'react-icons/io';

import Logo from '../assets/images/DigiSchool.png';
import { Link } from 'react-scroll'

const Navbar = ({ handleModal }) => {
  // const { scrollToHome, scrollToCourse, scrollToAbout, scrollToEvent, scrollToIntegrate, scrollToSuperHero } = useContext(ScrollContext);

  const [change, setChange] = useState(false);

  const changeNav = () =>{
    if(window.scrollY >= 80){
      setChange(true);
    }
    else{
      setChange(false);
    }
  };
  window.addEventListener('scroll', changeNav)
    
  return (
    <nav className={change ? `headerScroll lg:top-0 lg:px-20` : `header lg:top-0 lg-px-20`}>
        {/* Logo */}
        <div className='w-32 h-full'>
            <img src={Logo} alt="DigiSchool" className='w-full h-full object-cover'/>
        </div>

        {/* Menu */}
        <ul className='hidden lg:flex gap-x-8'>
            <Link to="home" smooth={true}><li className={`listItem`}>Home</li></Link>
            <Link to="about" smooth={true}><li className={`listItem`}>About us</li></Link>
            <Link to="courses" smooth={true}><li className={`listItem`}>Courses</li></Link>
            <Link to="event" smooth={true}><li className={`listItem`}>Events</li></Link>
            <Link to="integrate" smooth={true}><li className={`listItem`}>Integrate</li></Link>
            <Link to="superhero" smooth={true}><li className={`listItem`}>Your superhero</li></Link>
        </ul>

        {/* Contact */}
        <div className='hidden lg:flex px-4 py-2 rounded-md bg-blue_dark items-center gap-x-2 cursor-context-menu'>
            <IoIosCall className='text-white'/>
            <p className='text-white text-base'>+977 5906046</p>
        </div>

        {/* Hamburger */}
        <div className='flex lg:hidden items-end flex-col gap-y-2' onClick={handleModal}>
            <div className='w-5 h-[1.5px] bg-blue_dark'></div>
            <div className='w-4 h-[1.5px] bg-blue_dark'></div>
            <div className='w-3 h-[1.5px] bg-blue_dark'></div>
        </div>                
    </nav>
  )
}

export default Navbar