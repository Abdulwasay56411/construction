import React from 'react'
import Heading from './Heading'

const Industries = () => {
  return (
    <div id='industries' className='px-5 md:px-8 lg:px-10 py-10 bg-[#F7F7F7]'>
        <Heading text1={'INDUSTRIES WE SERVE'} text2={'Powering Every Sector'} para={'From upstream oil & gas to urban infrastructure our workforce solutions serve every major industry shaping Saudi Arabia.'}/>
        <div className='grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-5 lg:grid-cols-3 py-8 max-w-350 mx-auto'>
          {imgBox.map((item) =>(
        <img key={item.id} className='w-full h-auto object-cover' src={item.image} alt="" />
          ))}
        </div>
    </div>
  )
}

export default Industries

const imgBox = [
    {
    id: 1,
    image: "/gas.png"
    },
    {
    id: 2,
    image: "/infrastructure.png"
    },
    {
    id: 3,
    image: "/const.png"
    },
    {
    id: 4,
    image: "/commercial.png"
    },
    {
    id: 5,
    image: "/industrial.png"
    },
    {
    id: 6,
    image: "/energy.png"
    },
]