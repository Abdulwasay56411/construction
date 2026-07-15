import React from 'react'

const Heading = ({ text1, text2, text3 }) => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex items-center gap-3'>
        <hr className='w-17.5 text-[#D48E26] h-0' />
        <h1 className='text-[#D48E26] font-medium text-xl'>{text1}</h1>
        <hr className='w-17.5 text-[#D48E26] h-0' />

      </div>
      <div>
        <h2 className='font-extrabold text-[#000000] text-3xl sm:text-[40px]'>{text2}</h2>
        <h2 className='font-extrabold text-[#FFFFFF] text-3xl sm:text-[40px]'>{text3}</h2>
      </div>
    </div>
  )
}

export default Heading