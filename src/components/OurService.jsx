import React from 'react'
import Heading from './Heading'

const OurService = () => {
  return (
    <div className='bg-[#1D1D1D] pt-5 pb-10 px-5 md:px-8 lg:px-10' >
     <Heading text1={'OUR SERVICES'} text3={'Professional Workforce Solution'} para1={'From specialized engineering placements to large-scale labor mobilization we deliver the human capital that powers Saudi Arabia.'}/>
    </div>
  )
}

export default OurService

const tabContent = [
    {
     id: 1,
     text: "Skilled Manpower Supply",
    },
    {
     id: 2,
     text: "Engineering Professionals",
    },
    {
     id: 3,
     text: "General Labor Supply",
    },
    {
     id: 4,
     text: "Construction Contracting",
    },
    {
     id: 5,
     text: "Facility Management",
    },
]