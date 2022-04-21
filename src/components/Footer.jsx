import React, { useContext } from 'react'
import Logo from '../assets/images/DigiSchool.png'
import { ScrollContext } from '../context/ScrollContext';
import { AiOutlineMail } from 'react-icons/ai';
import { IoIosCall } from 'react-icons/io';
import { GoLocation } from 'react-icons/go';

const Footer = () => {
  const { scrollToHome, scrollToCourse, scrollToAbout, scrollToIntegrate, scrollToSuperHero, scrollToBenefits } = useContext(ScrollContext);

  return (
    <div className='w-full flex flex-col bg-gray_light px-4 lg:px-20 gap-y-16'>
        {/* Quick Links */}
        <div className='flex flex-col lg:flex-row justify-between items-center'>
          <div>
            <ul className='flex flex-col md:flex-row gap-y-4 mt-4 lg:mt-0 text-center gap-x-4 text-sm text-black uppercase decoration-none cursor-pointer'>
              <li onClick={scrollToHome}>Home</li>
              <li onClick={scrollToAbout}>About</li>
              <li onClick={scrollToCourse}>Courses</li>
              <li onClick={scrollToSuperHero}>Superhero</li>
            </ul>
          </div>

          {/* Logo */}
          <img src={Logo} alt="Digi School" className="w-56 h-auto mix-blend-multiply" />

          <div>
            <ul className='flex flex-col md:flex-row gap-y-4 mt-4 lg:mt-0 text-center gap-x-4 text-sm text-black uppercase decoration-none cursor-pointer'>
              <li>Terms</li>
              <li>Privacy Policy</li>
              <li onClick={scrollToIntegrate}>Integrate</li>
              <li onClick={scrollToBenefits}>Benefits</li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-center lg:gap-x-16 flex-wrap gap-y-4'>
          <div className='flex flex-col md:flex-row gap-x-4 items-center'>
            <GoLocation className="text-blue text-2xl"/>
            <p className='text-center'>Lalupate Marg, Putalisadak, Kathmandu, Nepal, 44600</p>
          </div>
          <div className='flex flex-col md:flex-row gap-x-4 items-center'>
            <IoIosCall className="text-blue text-2xl"/>
            <p>9801224269</p>
          </div>
          <div className='flex flex-col md:flex-row gap-x-4 items-center'>
            <AiOutlineMail className="text-blue text-2xl"/>
            <p>info@digischoolglobal.com</p>
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