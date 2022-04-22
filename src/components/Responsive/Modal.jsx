import React, { useContext } from 'react'
import { IoIosClose } from 'react-icons/io'
import { ScrollContext } from '../../context/ScrollContext';

const Modal = ({ handleModal }) => {
  const { scrollToHome, scrollToCourse, scrollToAbout, scrollToIntegrate, scrollToSuperHero } = useContext(ScrollContext);

  return (
    <div className='bg-black bg-opacity-70 w-full h-screen fixed flex flex-row-reverse z-20'>
        <div className='w-3/4 md:w-3/5 bg-white flex flex-col justify-center gap-y-16 animate-slide-in'>
            <IoIosClose onClick={handleModal} className="text-5xl text-blue"/>
            <ul className='flex flex-col gap-y-8 text-md text-black uppercase decoration-none list-none px-4'>
                <li onClick={scrollToHome}>HOME</li>
                <li onClick={scrollToAbout}>ABOUT US</li>
                <li onClick={scrollToCourse}>COURSES</li>
                <li onClick={scrollToIntegrate}>Integrate</li>
                <li onClick={scrollToSuperHero}>YOUR SUPERHERO</li>
            </ul>
        </div>
    </div>
  )
}

export default Modal