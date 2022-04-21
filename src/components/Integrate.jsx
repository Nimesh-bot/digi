import React, { useState } from 'react'
import Heading from './Reusables/Heading'
import { AiOutlineSend } from 'react-icons/ai'
import styled from 'styled-components'

const Icon = styled.div`
  width: 1rem;
  height: 1rem;
`

const Button = styled.div`
  cursor: pointer;

  &:hover ${Icon} {
    transform: translateX(0.5rem);
  }
`

const Integrate = () => {
  const [schoolType, setSchoolType] = useState('government')
  const handleSchoolType = (e) => {
    setSchoolType(e.target.value)
  }

  const [role, setRole] = useState('school')
  const handleRole = (e) => {
    setRole(e.target.value)
  }
  
  return (
    <div className='flex flex-col lg:flex-row w-11/12 lg:w-full justify-between items-center px-4 lg:px-20'>
        <div className='flex-1 h-full flex flex-col justify-center'>
            <div className='flex flex-col gap-y-8 '>
                <Heading heading5="Join us" heading1="Integrate your school" />
                <form className='w-full h-full flex flex-col gap-y-8'>
                  <div className='flex flex-col'>
                    <label>Full Name</label>
                    <input className='w-full lg:w-3/5 rounded-md border-[1px] border-disable px-4 py-2'/>
                  </div>

                  <div className='flex flex-col'>
                    <label>Email Address <span className='text-red'>*</span></label>
                    <input className='w-full lg:w-3/5 rounded-md border-[1px] border-disable px-4 py-2' type='email'/>
                  </div>
                
                  <div className='flex flex-col'>
                    <label>Phone Number <span className='text-red'>*</span></label>
                    <input className='w-full lg:w-3/5 rounded-md border-[1px] border-disable px-4 py-2' type='number'/>
                  </div>
                
                  <div className='flex flex-col gap-y-2'>
                    <label>School Type</label>
                    <div className='flex gap-x-16'>
                      <div className='flex gap-x-2 items-center'>
                        <input className='w-auto rounded-md border-[1px] border-disable px-4 py-2' type='radio' value="government" checked={schoolType === 'government'} onChange={handleSchoolType}/>
                        <label>Government</label>
                      </div>
                      <div className='flex gap-x-2 items-center'>
                        <input className='w-auto rounded-md border-[1px] border-disable px-4 py-2' type='radio' value="private" checked={schoolType === 'private'} onChange={handleSchoolType}/>
                        <label>Private</label>
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-col'>
                    <label>School Name <span className='text-red'>*</span></label>
                    <input className='w-full lg:w-3/5 rounded-md border-[1px] border-disable px-4 py-2' type='text'/>
                  </div>

                  <div className='flex flex-col gap-y-2'>
                    <label>Integrate as</label>
                    <div className='flex gap-x-16'>
                      <div className='flex gap-x-2 items-center'>
                        <input className='w-auto rounded-md border-[1px] border-disable px-4 py-2' type='radio' value="school" checked={role === 'school'} onChange={handleRole}/>
                        <label>School</label>
                      </div>
                      <div className='flex gap-x-2 items-center'>
                        <input className='w-auto rounded-md border-[1px] border-disable px-4 py-2' type='radio' value="agent" checked={role === 'agent'} onChange={handleRole}/>
                        <label>Agent</label>
                      </div>
                    </div>
                  </div>

                  <Button className='flex gap-x-4 items-center bg-blue rounded-md px-4 py-2 w-fit text-white button'>
                    <Icon>
                      <AiOutlineSend />
                    </Icon>
                    <span>
                      SEND INQUIRY
                    </span>
                  </Button>          

                </form>
            </div>
        </div>
    </div>
  )
}

export default Integrate