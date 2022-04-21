import React from 'react'

const Events = ({ img, alt, desc, date }) => {
  return (
    <div className='w-full md:w-72 min-h-[40vh] bg-gray_light rounded-md flex flex-col gap-y-2 relative'>
        <div className='w-full h-3/6 overflow-hidden rounded-t-md'>
            <img src={img} alt={alt} className="w-full h-full hover:scale-110" />
        </div>
        <p className='text-md text-black p-4'>{desc}</p>
        <div className='absolute top-0 right-0 px-4 py-2 bg-blue text-white'>{date}</div>
    </div>
  )
}

export default Events