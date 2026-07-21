import React from 'react'
import { IoCallOutline } from "react-icons/io5";

const Ready = () => {
  return (
    <div className='px-5 md:px-8 lg:px-10 py-10 bg-[#D48E26] h-116.5 flex flex-col justify-center items-center text-center'>
    <div>
        <h1 className='font-bold text-xl sm:text-4xl lg:text-[55px] leading-8 sm:leading-12  lg:leading-16 text-[#FFFFFF]'>Ready to Build Your <br />
        Dream Team in Saudi Arabia?</h1>
        <p className='text-[#FFFFFF] text-[10px] sm:text-lg max-w-3xl py-2'>Join 100+ leading companies that trust Telal Al Shaheqa for their critical
        workforce requirements. Fast, compliant, and professional.</p>
    </div> 
   <div className='flex flex-col sm:flex-row gap-3 py-4'>
   <button className='w-54.5 h-11.5 text-[#D48E26] rounded-xl bg-[#FFFFFF] font-bold text-[12px] transition-all  hover:-translate-y-1 duration-300'>Request MANPOWER NOW</button>
   <button className='flex justify-center items-center gap-2 border border-[#FFFFFF] w-54.5 sm:w-51.75 h-11.5 rounded-xl text-[#FFFFFF] text-[12px] font-semibold transition-all  hover:-translate-y-1 duration-300'><IoCallOutline size={15}/> CALL: +988 50 000 0000</button>
   </div>
    </div>
  )
}

export default Ready