import React from 'react'
import { IoIosClose } from 'react-icons/io'
import { Link } from 'react-scroll'

const Modal = ({ handleModal }) => {
  return (
    <div className='bg-black bg-opacity-70 w-full h-screen fixed flex flex-row-reverse z-20'>
        <div className='w-3/4 md:w-3/5 bg-white flex flex-col justify-center gap-y-16 animate-slide-in'>
            <IoIosClose onClick={handleModal} className="text-5xl text-blue"/>
            <ul className='flex flex-col gap-y-8 text-md text-black uppercase decoration-none list-none px-4'>
                <Link to="home"><li>HOME</li></Link>
                <Link to="about"><li>ABOUT US</li></Link>
                <Link to="courses"><li>COURSES</li></Link>
                <Link to="integrate"><li>Integrate</li></Link>
                <Link to="superhero"><li>YOUR SUPERHERO</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Modal