import React from 'react'
import Heading from './Reusables/Heading'

const Event = () => {
  return (
    <div className='flex flex-col lg:flex-row w-11/12 lg:w-full justify-between items-center px-4 lg:px-20'>
        <div className='flex-1 h-full flex flex-col justify-center'>
            <div className='flex flex-col gap-y-8 '>
                <Heading heading5="Participate in" heading1="OUR events and activities" />
                <div className='w-full bg-gray_light min-h-[30vh]'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Event