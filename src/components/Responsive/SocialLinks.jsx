import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { GrLinkedinOption } from 'react-icons/gr'

const SocialLinks = () => {
  return (
    <div className='w-full flex lg:hidden justify-center gap-x-4 items-center py-4 bg-blue_dark rounded-b-lg'>
        <FaFacebookF className='text-white cursor-pointer' onClick={() => window.open("https://www.facebook.com/digischool.global")} />
        <FaInstagram className='text-white cursor-pointer' onClick={() => window.open("https://www.instagram.com/thedigischoolglobal/")} />
        <FaTwitter className='text-white cursor-pointer' onClick={() => window.open("https://twitter.com/digischool_g")} />
        <GrLinkedinOption className='text-white cursor-pointer' onClick={() => window.open("https://www.linkedin.com/company/77045201")} />
    </div>
  )
}

export default SocialLinks