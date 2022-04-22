import React, { useContext } from 'react'
import { ScrollContext } from '../context/ScrollContext'
import Heading from './Reusables/Heading'

const Youtube = () => (
    <>
        <iframe 
            className='w-full h-full rounded-md'
            src="https://www.youtube.com/embed/YvzQ-Foi0V4" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
        ></iframe>
    </>
)

const Superhero = () => {
    const { SuperHeroSection } = useContext(ScrollContext)
    return (
        <div className='flex flex-col lg:flex-row w-full justify-between px-4 md:px-8 lg:px-20' ref={SuperHeroSection}>
            <div className='flex-1 h-full flex flex-col justify-center'>
                <div className='flex flex-col gap-y-8 '>
                    <Heading heading5="Want to be" heading1="SUPERHERO" />
                    <p className='text-md font-light text-black'>
                        Learn the formula to becoming a superhero with this video.
                    </p>
                </div>
            </div>
            <div className='w-full lg:w-1/2 h-[50vh] bg-gray_light'>
                <Youtube />   
            </div>
        </div>
      )
}

export default Superhero