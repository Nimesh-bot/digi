import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Heading from './Reusables/Heading'

const BenefitsList = ({ reason }) => (
    <div className='rounded-md bg-blue_dark p-4 w-full' data-aos="fade-left">
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
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='flex flex-col lg:flex-row w-full justify-between items-center overflow-hidden px-4 lg:px-20 md:px-8' id="beneifts">
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