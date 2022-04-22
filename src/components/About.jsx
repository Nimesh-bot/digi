import React, { useRef, useState } from 'react'


import { MdOutlineNavigateNext } from 'react-icons/md'
import { ScrollContext } from '../context/ScrollContext'
import Heading from './Reusables/Heading'

const paragraph1 = "Digi is brought to you by NCC Education." 
const paragraph2 = "Originally part of the National Computing Centre, NCC Education was established as a computing initiative by the British Government in 1966. Today, NCC Education is an exam board and a global provider of British education in Computing and Business. The head office is situated in Manchester, UK."
const paragraph3 = "Working with an international network of schools, centers and universities, NCC Education provides students with access to high-quality British education through a combination of classroom-based and distance learning programmes."
const paragraph4 = "Digi is a suite of primary and secondary school Computing programmes developed by NCC Education and launched in 2017."
const mission = "Through the British Computing curriculum, Digischool strengthens student learning and fosters creativity, collaboration, and communication beyond the classrooms making the kids smart. We provide them various exposure opportunities including showcasing the projects that they have developed"
const vision = "Transforming Digi Kids to Digipreneurs."

const About = () => {
  const [isMission, setIsMission] = useState(true);
  const { WhoSection } = useRef(ScrollContext);

  return (
    <div className='flex flex-col lg:flex-row w-full justify-between items-center overflow-hidden px-4 md:px-8 gap-y-4 lg:px-20' ref={WhoSection}>
        {/* Who */}
        <div className='flex-1 flex flex-col gap-y-4'>
            <Heading heading5="ABOUT US" heading1="WHO ARE WE" />
            <div className='flex flex-col gap-y-2'>
                <p className='text-md font-light text-black'>
                    {paragraph1}
                </p>
                <p className='text-md font-light text-black'>
                    {paragraph2}
                </p>
                <p className='text-md font-light text-black'>
                    {paragraph3}
                </p>
                <p className='text-md font-light text-black'>
                    {paragraph4}
                </p>
            </div>
        </div>

        {/* Mission/Vision */}
        <div className='flex-1 flex lg:justify-end md:justify-center'>
            <div className='rounded-md w-full md:w-1/2 h-max bg-blue_dark p-8'>
                <div className='h-auto flex flex-col justify-between gap-y-4 transition-all'>
                {
                    isMission ?
                    (
                        <>
                            <div>
                                <h2 className='uppercase text-2xl text-white font-medium'>Mission</h2>
                                <p className='text-md text-disable'>
                                    {mission}
                                </p>
                            </div>

                            <div className='flex justify-end gap-x-4'>
                                <div className='bg-white bg-opacity-5 p-4 cursor-not-allowed'>
                                    <MdOutlineNavigateNext className='text-disable text-xl rotate-180'/>    
                                </div>
                                <div className='bg-white bg-opacity-10 p-4' onClick={() => setIsMission(!isMission)}>
                                    <MdOutlineNavigateNext className='text-white text-xl'/>
                                </div>
                            </div>
                        </>
                    )
                    :
                    (
                        <>
                            <div>
                                <h2 className='uppercase text-2xl text-white font-medium'>Vision</h2>
                                <p className='text-md text-disable'>
                                    {vision}
                                </p>
                            </div>

                            <div className='flex justify-end gap-x-4'>
                                <div className='bg-white bg-opacity-10 p-4' onClick={() => setIsMission(!isMission)}>
                                    <MdOutlineNavigateNext className='text-white text-xl rotate-180'/>    
                                </div>
                                <div className='bg-white bg-opacity-5 p-4 cursor-not-allowed'>
                                    <MdOutlineNavigateNext className='text-disable text-xl'/>
                                </div>
                            </div>
                        </>
                    )
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default About