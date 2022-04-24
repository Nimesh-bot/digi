import React from 'react'
import Logo from '../assets/images/DigiSchool.png'

const Ad = ({ handleSkip, handleIntegrate }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-white backdrop-opacity-5 flex flex-col justify-center px-4 text-center items-center z-20'>
        <img src={Logo} alt='DigiSchool' className='w-40 h-auto'/>
        <p className='uppercase text-lg text-black'>Integrate with us and digitalize your school</p>
        <div className='flex gap-x-4 my-4'>
            <button className='bg-blue text-white px-4 py-2 rounded-md hover:bg-blue_dark' onClick={handleIntegrate}>Integrate Now</button>
            <button className='bg-transparent border-[1px] rounded-md border-blue px-4 py-2' onClick={handleSkip}>Skip</button>
        </div>
    </div>
  )
}

export default Ad