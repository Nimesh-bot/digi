import React, { useMemo } from 'react';
import { Eventcalendar } from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import Heading from '../components/Reusables/Heading';

const Calendar = () => {

    const view = useMemo(() => {
        return {
            timeline: {
                type: 'month'
            }
        };
    }, []);
    
    const myEvents = useMemo(() => {
        return [{
            start: '2022-04-02T00:00',
            end: '2022-04-05T00:00',
            title: 'Blockchain Introduction',
            resource: 1
        }, {
            start: '2022-04-10T09:00',
            end: '2022-04-15T15:00',
            title: 'Web3 Introduction',
            resource: 3
        }, {
            start: '2022-04-12T00:00',
            end: '2022-04-14T00:00',
            title: 'Express Workshop',
            resource: 4
        }, {
            start: '2022-04-03T00:00',
            end: '2022-04-10T00:00',
            title: 'Event 5',
            resource: 6
        }, {
            start: '2022-04-10T08:00',
            end: '2022-04-11T20:00',
            title: 'Event 6',
            resource: 7
        }, {
            start: '2022-04-22T00:00',
            end: '2022-04-28T00:00',
            title: 'Event 7',
            resource: 7
        }, {
            start: '2022-04-08T00:00',
            end: '2022-04-13T00:00',
            title: 'Event 8',
            resource: 15
        }, {
            start: '2022-04-25T00:00',
            end: '2022-04-27T00:00',
            title: 'Event 9',
            resource: 10
        }, {
            start: '2022-04-20T00:00',
            end: '2022-04-23T00:00',
            title: 'Event 10',
            resource: 12
        }]
    }, []);
    
    // const myResources = useMemo(() => {
    //     return [{
    //         id: 1,
    //         name: 'Resource A',
    //         color: '#e20000'
    //     }, {
    //         id: 2,
    //         name: 'Resource B',
    //         color: '#76e083'
    //     }, {
    //         id: 3,
    //         name: 'Resource C',
    //         color: '#4981d6'
    //     }, {
    //         id: 4,
    //         name: 'Resource D',
    //         color: '#e25dd2'
    //     }, {
    //         id: 5,
    //         name: 'Resource E',
    //         color: '#1dab2f'
    //     }, {
    //         id: 6,
    //         name: 'Resource F',
    //         color: '#d6d145'
    //     }, {
    //         id: 7,
    //         name: 'Resource G',
    //         color: '#34c8e0'
    //     }, {
    //         id: 8,
    //         name: 'Resource H',
    //         color: '#9dde46'
    //     }, {
    //         id: 9,
    //         name: 'Resource I',
    //         color: '#166f6f'
    //     }, {
    //         id: 10,
    //         name: 'Resource J',
    //         color: '#f7961e'
    //     }, {
    //         id: 11,
    //         name: 'Resource K',
    //         color: '#34c8e0'
    //     }, {
    //         id: 12,
    //         name: 'Resource L',
    //         color: '#af0000'
    //     }, {
    //         id: 13,
    //         name: 'Resource M',
    //         color: '#446f1c'
    //     }, {
    //         id: 14,
    //         name: 'Resource N',
    //         color: '#073138'
    //     }, {
    //         id: 15,
    //         name: 'Resource O',
    //         color: '#4caf00'
    //     }]
    // }, []);
    
    return (
        <div className='w-full px-20 py-28 flex flex-col'>
            <Heading heading1="Calendar" heading5="Stay upto date"/>
            <Eventcalendar
                theme="material" 
                themeVariant="light"
                view={view}
                className="py-4 bg-blue_dark"
                data={myEvents}
                // resources={myResources}
            />  
        </div>
    ); 
}

export default Calendar;