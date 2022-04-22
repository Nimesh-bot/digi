import React from 'react'
import Heading from './Reusables/Heading'

const Partners = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full justify-between items-center px-4 lg:px-20 md:px-8'>
        <div className='w-full h-full flex flex-col justify-center'>
            <div className='flex flex-col gap-y-8 '>
                <Heading heading5="Connections" heading1="OUR partners and affiliations" />
                  <div className='w-full relative flex items-center partners overflow-hidden flex-shrink-0 py-8'>
                    <div className='w-full image flex gap-x-16 lg:justify-between'>
                      <img src='https://elitegrandschool.edu.np/uploads/website/website-20210815081505-386.png' alt='Elite Grand School' className='w-auto h-12 lg:grayscale hover:grayscale-0' />
                      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ncc_edu.png/1200px-Ncc_edu.png' alt='NCC EDUCATION' className='w-auto h-12 lg:grayscale hover:grayscale-0' />
                      <img src='https://wingsschool.edu.np/images/main/Wed-03-30-05-1437143444-logo.png' alt='Wings School' className='w-auto h-12 lg:grayscale hover:grayscale-0' />

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Partners