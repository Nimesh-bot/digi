import React, { useContext } from 'react'
import { IoIosPlay } from 'react-icons/io';
import Student1 from '../assets/images/male.jpg';
import Student2 from '../assets/images/female.jpg';
import Heading from './Reusables/Heading';
import { ScrollContext } from '../context/ScrollContext'
import styled from 'styled-components'

const Icon = styled.span`
    transition: all 0.5s ease;
`
const Button = styled.button`
    &:hover ${Icon} {
        transform: scale(1.5);
    }
`

const Welcome = () => {
  const { HomeSection, scrollToIntegrate } = useContext(ScrollContext)

  return (
    <div className='flex flex-col lg:flex-row w-full h-[80vh] justify-between lg:items-center overflow-hidden px-4 md:px-8 lg:px-20' ref={HomeSection}>
        {/* Text */}
        <div className='flex-1 h-full flex flex-col justify-center'>
            <div className='flex flex-col gap-y-8 '>
                <Heading heading5="Welcome to digi school" heading1="UK IT COURSES IN NEPAL" />
                <div className='w-11/12 md:w-auto flex flex-col md:flex-row gap-y-4 gap-x-4 lg:items-center'>
                    <button className='bg-blue text-white rounded px-4 py-2 hover:bg-blue_dark' onClick={scrollToIntegrate}>INTEGRATE NOW</button>
                    <Button className='border-[1px] border-blue justify-center rounded px-4 py-2 text-blue flex items-center gap-x-2' onClick={() => window.open("https://www.youtube.com/channel/UCDzzGex8PyrA6nEVZ4j1G2w")}>
                        <Icon><IoIosPlay /></Icon>
                        WATCH VIDEO
                    </Button>
                </div>
            </div>
        </div>
        {/* Image */}
        <div className='hidden lg:flex relative h-full flex-1'>
            <img src={Student2} alt='Student' className='absolute bottom-16 right-0 w-80 h-[30rem] rounded-md object-cover object-center' />
            <img src={Student1} alt='Student' className='absolute bottom-0 w-80 right-64 h-[30rem] rounded-md' />
        </div>
        <div className='lg:hidden hidden md:flex lg:flex-row h-full flex-1'>
            <img src={Student2} alt='Student' className='w-80 h-[30rem] rounded-md object-cover object-center' />
            <img src={Student1} alt='Student' className='w-80 h-[30rem] rounded-md' />
        </div>
    </div>
  )
}

export default Welcome