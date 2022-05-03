import React, { useState, useEffect } from 'react'
import Events from './Reusables/Events'
import Heading from './Reusables/Heading'
import { getEvent } from '../redux/apiCalls'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

const Loading = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #fff;

  animation: slide-in-out 1s infinite;
  @keyframes slide-in-out {
    0% {
      transform: translateX(-8rem);
    }
    50% {
      transform: translateX(8rem);
    }
    100% {
      transform: translateX(-8rem);
    }
  }
`

const Event = () => {
  const { pending } = useSelector((state) => state.event)
  console.log(pending);

  const [active, setActive] = useState(2)
  const [eventData, setEventData] = useState([])
  const newDate = new Date()
  const currentDate = newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate()

  const getActive = (index) => {
    if(index === active) {
      return 'text-blue font-medium active-nav'
    }
    else{
      return 'text-black font-light'
    }
  }

  let dispatch = useDispatch();

  useEffect(() => {
    getEvent(dispatch, setEventData)
  }, [dispatch]);


  return (
    <div className='flex flex-col lg:flex-row w-full justify-between px-4 md:px-8 lg:px-20' id="event">
        <div className='flex-1 h-full flex flex-col justify-center'>
            <div className='flex flex-col gap-y-8 '>
                <Heading heading5="Participate in" heading1="OUR events and activities" />
                <div className='w-full bg-gray_light min-h-[30vh] px-4 lg:px-8'>
                  {
                    pending ?
                    (
                      <div className='flex justify-center items-center w-full h-[40vh]'>
                        <Loading />
                      </div>
                    )
                    :
                    (
                      <>
                        <ul className='flex gap-x-4 lg:gap-x-16 justify-center py-8 cursor-pointer'>
                          {/* <li className={`${getActive(1)}`} onClick={() => setActive(1)}>Upcoming</li> */}
                          <li className={`${getActive(2)}`} onClick={() => setActive(2)}>2022</li>
                          <li className={`${getActive(3)}`} onClick={() => setActive(3)}>2021</li>
                          <li className={`${getActive(4)}`} onClick={() => setActive(4)}>2020</li>
                          <li className={`${getActive(5)}`} onClick={() => setActive(5)}>2019</li>
                        </ul>
                        {/* Events */}
                        <div className='w-full flex gap-x-8 flex-wrap'>
                          {
                            // active === 1 ?
                            // (    
                            //   <>
                            //     {
                            //       eventData.filter(event => event.date > String(currentDate)).map((event, index) => (
                            //         <Events key={index} img={event.img} alt={event.alt} desc={event.desc} date={event.date} />            
                            //       ))
                            //     }
                            //   </>
                            // )
                            // :
                            active === 2 ?
                            (
                              <>
                                {
                                  eventData.filter(event => event.date < currentDate && event.date > "2022-01-01").map((event, index) => (
                                      <Events key={index} img={event.img} alt={event.alt} desc={event.description} date={(event.date)} />
                                  ))
                                }
                              </>
                            )
                            :
                            active === 3 ?
                            (
                              <>
                                {
                                  eventData.filter(eventDate => eventDate.date < "2022-01-01" && eventDate.date > "2021-01-01").map((event, index) => (
                                    <Events key={index} img={event.img} alt={event.alt} desc={event.description} date={event.date} />
                                  ))
                                }
                              </>
                            )
                            :
                            active === 4 ?
                            (
                              <>
                                {
                                  eventData.filter(eventDate => eventDate.date < "2021-01-01" && eventDate.date > "2020-01-01").map((event, index) => (
                                    <Events key={index} img={event.img} alt={event.alt} desc={event.description} date={event.date} />
                                  ))
                                }
                              </>
                            )
                            :
                            (
                              <>
                                {
                                  eventData.filter(eventDate => eventDate.date < "2020-01-01" && eventDate.date > "2019-01-01").map((event, index) => (
                                      (event.length !== 0) ? (
                                        <Events key={index} img={event.img} alt={event.alt} desc={event.description} date={event.date} />
                                      ) 
                                      : 
                                      (
                                        <p>Working</p>
                                          // <div className='w-72 h-[40vw] flex flex-col'>
                                        //   <div className='w-full h-3/6 rounded-md bg-white' />
                                        //   <div className='w-full h-[2px] bg-white'></div>
                                        // </div>
                                      )
                                  ))

                                }
                              </>
                            )
                          }
                        </div>  
                      </>
                    )
                  }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Event