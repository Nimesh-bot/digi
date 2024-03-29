import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Cards = ({ img, alt, desc }) => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='w-full md:w-72 min-h-[40vh] bg-gray_light rounded-md flex flex-col gap-y-2' data-aos="zoom-in">
        <div className='w-full h-3/6 overflow-hidden rounded-t-md'>
            <img src={img} alt={alt} className='w-full h-full rounded-t-md object-cover transition-all hover:scale-110'/>
        </div>
        <div className='w-full h-3/6 px-4'>
            <p className='text-md text-black font-light'>{desc}</p>
        </div>
    </div>
  )
}

export default Cards