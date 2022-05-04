import React from 'react'

const ImageModal = ({ img, alt, handleClose }) => {
  return (
    <div className='fixed z-10 top-0 right-0 bg-[#1d203bb0] w-full h-screen flex justify-center items-center' onClick={handleClose}>
        <div className='absolute z-20 w-auto h-3/4 p-8 lg:p-0'>
            <img src={img} alt="ImageView" className='object-cover w-full h-full' />
        </div>
    </div>
  )
}

export default ImageModal