import React from 'react'
import { FiDownload } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div>
      <div className='w-full h-221 flex flex-col justify-center bg-[url("/herobg.png")] bg-cover bg-center px-5 md:px-8 lg:px-10'>
        <div className='flex  items-center gap-4 justify-center rounded-4xl px-2 bg-[#D48E2629] border border-[#D48E26] w-111.75 h-7.5'>
          <img className='w-15.5 h-2.5' src="/star.png" alt="" />
          <span className='text-[13px] font-medium text-[#D48E26]'>SAUDI ARABIA'S #1 SKILLED MANPOWER PROVIDEN</span>
        </div>
        <div className='lg:max-w-230 py-5'>
          <h1 className='font-extrabold text-7xl leading-18 lg:leading-22 text-[#FFFFFF]'>Building Saudi Arabia with <span className='text-[#D48E26]'> Skilled Workforce</span> Excellence</h1>
          <p className='max-w-160 py-3 text-[#FFFFFF] text-lg font-light'>Providing highly skilled manpower, engineering professionals, construction workforce and contracting solutions across Saudi Arabia with quality, safety and reliability.</p>
        </div>
        <div className='flex gap-3'>
          <button className='flex items-center justify-center gap-2 w-49.75 h-10.25 bg-[#D48E26] text-[#FFFFFF] font-bold text-[13px] rounded-xl'>REQUEST MANPOWER <FaArrowRight size={16}/></button>
          <button className='border border-[#FFFFFF] w-28 h-10.25 text-[#FFFFFF] text-[13px] rounded-xl'>GET QUOTE</button>
          <button className='flex items-center justify-center gap-2 border border-[#FFFFFFA6] w-41.25 h-10.25 text-[#FFFFFFA6] text-[13px] rounded-xl'><FiDownload/>COMPANY PROFILE</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection