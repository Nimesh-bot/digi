import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { GrLinkedinOption } from 'react-icons/gr'

const SocialLinks = () => {
  return (
    <div className='w-full flex lg:hidden justify-center gap-x-4 items-center py-4 bg-blue_dark z-20 rounded-b-lg'>
        <FaFacebookF className='text-white cursor-pointer'/>
        <FaInstagram className='text-white cursor-pointer'/>
        <FaTwitter className='text-white cursor-pointer'/>
        <GrLinkedinOption className='text-white cursor-pointer' />
    </div>
  )
}

export default SocialLinks