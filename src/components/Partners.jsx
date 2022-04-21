import React from 'react'
import Heading from './Reusables/Heading'

const Partners = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full justify-between items-center px-4 lg:px-20'>
        <div className='flex-1 h-full flex flex-col justify-center'>
            <div className='flex flex-col gap-y-8 '>
                <Heading heading5="Connections" heading1="OUR partners and affiliations" />
                <div className='w-full bg-gray_light min-h-[30vh]'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Partners