import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { GrLinkedinOption } from 'react-icons/gr'

const Social = () => {
  return (
    <div className='hidden lg:flex fixed right-0 top-1/3 px-2 py-16 bg-blue_dark rounded-tl-md rounded-bl-md'>
        <div className='flex flex-col gap-y-4 items-center'>
            <FaFacebookF className='text-white cursor-pointer' onClick={() => window.open("https://www.facebook.com/digischool.global")}/>
            <FaInstagram className='text-white cursor-pointer' onClick={() => window.open("https://www.instagram.com/thedigischoolglobal/")}/>
            <FaTwitter className='text-white cursor-pointer' onClick={() => window.open("https://twitter.com/digischool_g")}/>
            <GrLinkedinOption className='text-white cursor-pointer' onClick={() => window.open("https://www.linkedin.com/company/77045201")} />
        </div>
    </div>
  )
}

export default Social