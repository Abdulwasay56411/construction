import React from 'react'
import { FiDownload } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';


const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      let timer = setInterval(() => {
        start += Math.ceil(end / 50);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 40);
    }
  }, [isInView, value]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const HeroSection = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className='w-full bg-[#111111F2] h-160 lg:h-210 flex flex-col justify-center bg-[url("/herobg.png")] bg-cover bg-center px-5 md:px-8 lg:px-10'>
        <div className='flex items-center gap-2 py-2 lg:gap-4 justify-center rounded-4xl px-2 bg-[#D48E2629] border border-[#D48E26] w-51.5  sm:w-111.75 h-auto'>
          <img className='w-15.5 h-2.5' src="/star.png" alt="" />
          <span className='text-[9px] sm:text-[13px] font-medium text-[#D48E26]'>SAUDI ARABIA'S #1 SKILLED MANPOWER PROVIDEN</span>
        </div>
        <div className='lg:max-w-210 py-5'>
          <h1 className='heading font-black text-[34px] sm:text-5xl md:text-6xl lg:text-7xl leading-12 sm:leading-16 md:leading-18 lg:leading-22 text-[#FFFFFF]'>Building Saudi Arabia with <span className='text-[#D48E26]'> Skilled Workforce</span> Excellence</h1>
          <p className='max-w-80 sm:max-w-160 py-3 text-[#FFFFFF] text-[10px] sm:text-lg font-light'>Providing highly skilled manpower, engineering professionals, construction workforce and contracting solutions across Saudi Arabia with quality, safety and reliability.</p>
        </div>
        <div className='flex flex-col sm:flex-row gap-3'>
          <button className='flex items-center justify-center gap-2 w-49.75 h-10.25 bg-[#D48E26] text-[#FFFFFF] font-bold text-[13px] rounded-xl'>REQUEST MANPOWER <FaArrowRight size={16} /></button>
         <div className='flex gap-3'>
         <button className='border border-[#FFFFFF] w-28 h-10.25 text-[#FFFFFF] text-[13px] rounded-xl'>GET QUOTE</button>
         <button className='flex items-center justify-center gap-2 border border-[#FFFFFFA6] w-41.25 h-10.25 text-[#FFFFFFA6] text-[13px] rounded-xl'><FiDownload />COMPANY PROFILE</button>
         </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className='w-full bg-[#111111F2] h-auto py-8 text-center grid grid-cols-2 lg:grid-cols-5 items-center justify-items-center gap-y-8'>
        {[
          { number: "10", title: "YEARS OF EXPERIENCE", suffix: "+" },
          { number: "1500", title: "DEPLOYED PROFESSIONALS", suffix: "+" },
          { number: "300", title: "PROJECTS DELIVERED", suffix: "+" },
          { number: "100", title: "CORPORATE CLIENTS", suffix: "+" },
          { number: "99", title: "CLIENT SATISFACTION", suffix: "%" },
        ].map((item, index) => (
          <div
            key={index}
            className={`flex text-center flex-col items-center text-white ${index === 4 ? 'col-span-2 lg:col-span-1' : ''}`}
          >
            <span className='font text-[40px] font-normal text-[#D48E26]'>
              <Counter value={item.number} suffix={item.suffix} />
            </span>
            <span className='text-[15px] mt-2 text-[#FFFFFFA6]'>{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeroSection