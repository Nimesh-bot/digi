import React from 'react'
import Cards from './Reusables/Cards'
import Heading from './Reusables/Heading'
import Explorer from '../assets/images/Courses/explorer.png';
import Trailblazers from '../assets/images/Courses/digi-trailblazers.png';
import Navigators from '../assets/images/Courses/navigators.png';
import LevelTwo from '../assets/images/Courses/level-two-website.png';

const coursesData = [
    {
        id: 1,
        img: Explorer,
        title: 'Explorer',
        desc: 'Is for Primary school students of grade 1 and 2 where they will be practicing and introducing fundamentals of Computational',
        alt: 'Explorer',
    },
    {
        id: 2,
        img: Navigators,
        title: 'Digi Navigators',
        desc: 'Is for secondary school students of grade 7-9 where they became more digitally literate also students are introduced to advanced',
        alt: 'Digi Navigators',
    },
    {
        id: 3,
        img: Trailblazers,
        title: 'Digi Trailblazers',
        desc: 'Is for young learners of grade 3-6 where they will be learning about next level coding using Python Programming Language',
        alt: 'Digi Trailblazers',
    },
    {
        id: 4,
        img: LevelTwo,
        title: 'Level Two Website',
        desc: 'Is the highest level for secondary school students of grade 10-12 in where they will be practicing computing',
        alt: 'Level Two Website',
    },
]

const Courses = () => {
  return (
    <div className='flex flex-col lg:flex-row w-11/12 lg:w-full lg:px-20 px-4'>
        <div className='flex-1 h-full flex flex-col justify-center'>
            <div className='flex flex-col gap-y-8 '>
                <Heading heading5="COURSES" heading1="we offer" />
                <div className='flex justify-between gap-y-8 flex-wrap'>
                    {
                        coursesData.map((data, index) => (
                            <Cards 
                                key={index}
                                img={data.img}
                                alt={data.alt}
                                desc={data.desc}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Courses