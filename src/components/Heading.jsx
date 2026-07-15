import React from 'react'

const Heading = ({text1}) => {
  return (
    <div className='flex items-center gap-3'>
        <hr className='w-17.5 text-[#D48E26] h-0'/>
        <h1 className='text-[#D48E26] font-medium text-xl'>{text1}</h1>
        <hr className='w-17.5 text-[#D48E26] h-0'/>
    </div>
  )
}

export default Heading