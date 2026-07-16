import React from 'react'

const Heading = ({ text1, text2, text3, para,para1 }) => {
  return (
    <div className='flex flex-col items-center text-center'>
      <div className='flex items-center gap-3'>
        <hr className='w-17.5 text-[#D48E26] h-0' />
        <h1 className='text-[#D48E26] font-medium text-xl'>{text1}</h1>
        <hr className='w-17.5 text-[#D48E26] h-0' />

      </div>
      <div className=''>
        <h2 className='font-extrabold  text-[#000000] text-3xl sm:text-[40px]'>{text2}</h2>
        <h2 className='font-extrabold text-[#FFFFFF] text-3xl sm:text-[40px]'>{text3}</h2>
      <div className='pt-3'>
      <p className='max-w-160 font-medium leading-6 text-sm text-[#585858A6]'>{para}</p>
      <p className='max-w-175 text-[#888775] leading-6 text-lg font-medium'>{para1}</p>
      </div>
      </div>
    </div>
  )
}

export default Heading