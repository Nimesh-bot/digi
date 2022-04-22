import React from 'react'
import Heading from '../components/Reusables/Heading'

 
//Here are the modules for fullcalendar and dayclick event
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
// const eventDate = [
//     {
//         id: 1,
//         Subject: 'Meeting - 1',
//         StartTime: new Date(2018, 1, 15, 10, 0),
//         EndTime: new Date(2018, 1, 16, 12, 30),
//         IsAllDay: false
//     }
// ]

const Calendar = () => {
  return (
    <div className='w-full flex flex-col gap-y-16 px-4 lg:px-20 py-24'>
        <Heading heading5="Calendar" heading1="Check when the events are due" />
        <div className="container">
            <FullCalendar
                plugins={[ dayGridPlugin, interactionPlugin ]}
                //Dayclick open sweetalert
                
                initialView="dayGridMonth"
                events={[
                { title: 'event 1', date: '2020-11-01' },
                { title: 'event 2', date: '2020-11-02' }
                ]}
            />
        </div>
    </div>
  )
}

export default Calendar 