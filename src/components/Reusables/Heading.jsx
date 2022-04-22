import React from 'react'

const Heading = ({ heading5, heading1 }) => {
  return (
    <div>
        <h5 className='w-auto uppercase text-xl text-black font-normal'>
            {heading5}
        </h5>
        <h1 className='uppercase text-4xl text-black font-bold'>{heading1}</h1>
    </div>
  )
}

export default Heading