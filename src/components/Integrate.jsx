import React, { useState } from 'react'
import Heading from './Reusables/Heading'
import { AiOutlineSend } from 'react-icons/ai'
import styled from 'styled-components'
import { integrateNow } from '../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'

import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Icon = styled.div`
  width: 1rem;
  height: 1rem;
`

const Button = styled.button`
  cursor: pointer;

  &:hover ${Icon} {
    transform: translateX(0.5rem);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #aeaeae;
  }
`

const Integrate = () => {
  const { pending } = useSelector((state) => state.integrate);

  const [school_type, setSchool_type] = useState('Government')
  const handleSchoolType = (e) => {
    setSchool_type(e.target.value)
  }

  const [user_type, setUser_type] = useState('School')
  const handleRole = (e) => {
    setUser_type(e.target.value)
  }

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [school_name, setSchool_Name] = useState('');
  const [message, setMessage] = useState("something");
  const [severity, setSeverity] = useState('');
  const [open, setOpen] = useState(false);

  let dispatch = useDispatch();
  const handleIntegrate = (e) => {
    e.preventDefault();

    setFullname("");
    setEmail("");
    setPhone("");
    setSchool_Name("");
    setUser_type('school');
    integrateNow({ fullname, email, phone, school_name, school_type, user_type }, dispatch, setMessage, setOpen, setSeverity);
  }  

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div className='flex flex-col lg:flex-row w-full justify-between px-4 md:px-8 lg:px-20' id='integrate'>
        <div className='flex-1 h-full flex flex-col justify-center'>
            <div className='flex flex-col gap-y-8 '>
                <Heading heading5="Join us" heading1="Integrate your school" />
                <form className='w-full h-full flex flex-col gap-y-8'>
                  <div className='flex flex-col'>
                    <label>Full Name</label>
                    <input className='w-full lg:w-3/5 rounded-md border-[1px] border-disable px-4 py-2' value={fullname} onChange={(e) => setFullname(e.target.value)}/>
                  </div>

                  <div className='flex flex-col'>
                    <label>Email Address <span className='text-red'>*</span></label>
                    <input className='w-full lg:w-3/5 rounded-md border-[1px] border-disable px-4 py-2' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                
                  <div className='flex flex-col'>
                    <label>Phone Number <span className='text-red'>*</span></label>
                    <input className='w-full lg:w-3/5 rounded-md border-[1px] border-disable px-4 py-2' type='number' value={phone} onChange={(e) => setPhone(e.target.value)}/>
                  </div>
                
                  <div className='flex flex-col gap-y-2'>
                    <label>School Type</label>
                    <div className='flex gap-x-16'>
                      <div className='flex gap-x-2 items-center'>
                        <input className='w-auto rounded-md border-[1px] border-disable px-4 py-2' type='radio' value="Government" checked={school_type === 'Government'} onChange={handleSchoolType}/>
                        <label>Government</label>
                      </div>
                      <div className='flex gap-x-2 items-center'>
                        <input className='w-auto rounded-md border-[1px] border-disable px-4 py-2' type='radio' value="Private" checked={school_type === 'Private'} onChange={handleSchoolType}/>
                        <label>Private</label>
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-col'>
                    <label>School Name <span className='text-red'>*</span></label>
                    <input className='w-full lg:w-3/5 rounded-md border-[1px] border-disable px-4 py-2' type='text' value={school_name} onChange={(e) => setSchool_Name(e.target.value)}/>
                  </div>

                  <div className='flex flex-col gap-y-2'>
                    <label>Integrate as</label>
                    <div className='flex gap-x-16'>
                      <div className='flex gap-x-2 items-center'>
                        <input className='w-auto rounded-md border-[1px] border-disable px-4 py-2' type='radio' value="School" checked={user_type === 'School'} onChange={handleRole}/>
                        <label>School</label>
                      </div>
                      <div className='flex gap-x-2 items-center'>
                        <input className='w-auto rounded-md border-[1px] border-disable px-4 py-2' type='radio' value="Agent" checked={user_type === 'Agent'} onChange={handleRole}/>
                        <label>Agent</label>
                      </div>
                    </div>
                  </div>

                  <Button className='flex gap-x-4 items-center bg-blue rounded-md px-4 py-2 w-fit text-white button' onClick={handleIntegrate} disabled={pending}>
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
        
        {
          open &&
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert severity={severity}>{message}</Alert>
          </Snackbar>  
        }
    </div>
  )
}

export default Integrate