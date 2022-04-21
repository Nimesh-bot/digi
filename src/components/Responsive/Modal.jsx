import React from 'react'
import { IoIosClose } from 'react-icons/io'

const Modal = ({ handleModal }) => {
  return (
    <div className='backdrop-blur-sm w-full h-screen fixed flex flex-row-reverse z-20'>
        <div className='w-3/4 md:w-3/5 bg-white flex flex-col justify-center gap-y-16 animate-slide-in'>
            <IoIosClose onClick={handleModal} className="text-5xl text-blue"/>
            <ul className='flex flex-col gap-y-8 text-md text-black uppercase decoration-none list-none px-4'>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>COURSES</li>
                <li>YOUR SUPERHERO</li>
                <li>CONTACT US</li>
            </ul>
        </div>
    </div>
  )
}

export default Modal