import React from 'react'
import Heading from './Reusables/Heading'

const BenefitsList = ({ reason }) => (
    <div className='rounded-md bg-blue_dark p-4 w-full'>
        <p className='text-md font-light text-white'>{reason}</p>
    </div>
)
const reasons = [
    {
        id: 1,
        reason: 'Authorization Certificate from Digi School and NCC education to be displayed and promote UK blended education curriculum in the school.'
    },
    {
        id: 2,
        reason: 'Easy integration of course as primary or additional Computer curriculum from class 1- 12',
    },
    {
        id: 3,
        reason: 'Digi Scholarship opportunities.'
    }
]

const Benefits = () => {
  return (
    <div className='flex flex-col lg:flex-row w-11/12 lg:w-full items-center gap-y-4'>
        {/* Text */}
        <div className='flex-1 h-full flex flex-col'>
            <div className='flex flex-col gap-y-8 '>
                <Heading heading5="Why us" heading1="Benefits to partner schools" />
                <p className='text-md font-light text-black'>
                    Here are some of the benefits that schools partnered with us
                    receive. Grab those benefits as soon as possible.
                </p>
            </div>
        </div>
        {/* Lists */}
        <div className='flex flex-col relative h-full flex-1 gap-y-2'>
            {
                reasons.map((data, index) => (
                    <BenefitsList key={index} reason={data.reason} />
                ))
            }
        </div>
    </div>
  )
}

export default Benefits