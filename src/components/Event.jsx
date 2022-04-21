import React, { useContext, useState } from 'react'
import { ScrollContext } from '../context/ScrollContext'
import Events from './Reusables/Events'
import Heading from './Reusables/Heading'

const eventData = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    alt: 'Event 1',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '2022-04-22',
  },
  {
    id: 2,
    img: 'https://www.aberdeen.com/wp-content/uploads/GettyImages-1132986308.jpg',
    alt: 'Event 2',
    desc: 'Data science bootcamp. Join us and learn how to build a data science pipeline from scratch.',
    date: '2022-05-02',
  },
  {
    id: 3,
    img: 'https://full-games.org/wp-content/uploads/2021/08/Lost-in-Random-DOWNLOAD-PC-2.jpg',
    alt: 'Event 3',
    desc: 'Interested in graphics and blender? Join our workshop and learn how to make your own 3D models.',
    date: '2021-11-03',
  },
  {
    id: 4,
    img: 'https://www.codingem.com/wp-content/uploads/2021/10/juanjo-jaramillo-mZnx9429i94-unsplash-scaled.jpg',
    alt: 'Event 4',
    desc: 'Interested in web development? Join our workshop and learn how to make your own websites.',
    date: '2020-01-11',
  },
  {
    id: 5,
    img: 'https://elearningindustry.com/wp-content/uploads/2018/11/5-best-practices-to-create-an-ar-training-program-in-your-organization.png',
    alt: 'Event 5',
    desc: 'Interested in AR development? Join our workshop and learn how to make your own AR experiences.',
    date: '2019-09-30',
  }
]

const Event = () => {
  const [active, setActive] = useState(2)
  const { EventSection } = useContext(ScrollContext)

  const newDate = new Date()
  const currentDate = newDate.getFullYear() + '-' + (newDate.getMonth() + 1) + '-' + newDate.getDate()
  console.log(currentDate)

  const getActive = (index) => {
    if(index === active) {
      return 'text-blue font-medium active-nav'
    }
    else{
      return 'text-black font-light'
    }
  }

  return (
    <div className='flex flex-col lg:flex-row w-11/12 lg:w-full justify-between items-center px-4 lg:px-20' ref={EventSection}>
        <div className='flex-1 h-full flex flex-col justify-center'>
            <div className='flex flex-col gap-y-8 '>
                <Heading heading5="Participate in" heading1="OUR events and activities" />
                <div className='w-full bg-gray_light min-h-[30vh] px-4 lg:px-8'>
                  <ul className='flex gap-x-4 justify-start lg:gap-x-16 lg:justify-center py-4 cursor-pointer'>
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
                                <Events key={index} img={event.img} alt={event.alt} desc={event.desc} date={event.date} />
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
                              <Events key={index} img={event.img} alt={event.alt} desc={event.desc} date={event.date} />
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
                              <Events key={index} img={event.img} alt={event.alt} desc={event.desc} date={event.date} />
                            ))
                          }
                        </>
                      )
                      :
                      (
                        <>
                          {
                            eventData.filter(eventDate => eventDate.date < "2020-01-01" && eventDate.date > "2019-01-01").map((event, index) => (
                              <Events key={index} img={event.img} alt={event.alt} desc={event.desc} date={event.date} />
                            ))
                          }
                        </>
                      )
                    }
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Event