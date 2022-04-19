import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { GrLinkedinOption } from 'react-icons/gr'

const Social = () => {
  return (
    <div className='hidden lg:flex fixed right-0 top-1/3 px-2 py-16 bg-blue_dark rounded-tl-md rounded-bl-md'>
        <div className='flex flex-col gap-y-4 items-center'>
            <FaFacebookF className='text-white cursor-pointer'/>
            <FaInstagram className='text-white cursor-pointer'/>
            <FaTwitter className='text-white cursor-pointer'/>
            <GrLinkedinOption className='text-white cursor-pointer' />
        </div>
    </div>
  )
}

export default Social