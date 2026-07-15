import React, { useState } from 'react'
import Heading from './Heading'
import { FiDownload } from "react-icons/fi";

const AboutUs = () => {

    const [isActive, setIsActive] = useState(0)

    return (
        <div className='py-10 px-5 md:px-8 lg:px-10'>
            <Heading text1={'About US'} />
            <div className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-between'>
                <div className='lg:w-1/2 pt-6'>
                    <h1 className='heading text-3xl md:text-4xl lg:text-[50px] text-[#000000] font-black leading-14 '>A Decade of Workforce
                        Excellence in Saudi Arabia</h1>
                    <p className='text-[#00000099] text-lg font-normal py-3'>Telal Al Shaheqa Contracting Co. was established in 1992, its recognised
                        as one of the local leading construction companies in the kingdom for
                        its exceptional services in water, oil & gas, Petrochemical and
                        environmental industries.</p>
                    <div className='max-w-137 flex justify-between gap-2 bg-[#F7F7F7] rounded-xl my-3'>
                        {button.map((item, index) => (
                            <button key={index} onClick={() => setIsActive(index === isActive ? null : index)} className={`text-base font-semibold w-45 rounded-[10px] h-11 cursor-pointer ${index === isActive ? "bg-[#D48E26] text-[#FFFFFF]" : "text-[#939393]"}`}>{item.text}</button>
                        ))}
                    </div>
                    <p className='text-lg font-normal py-3 text-[#000000]'>TELAL AL SHAHEQA CONTRACTING CO. is a leading Saudi contracting
                        and industrial support company with decades of experience in
                        delivering reliable, safe, and high-quality solutions. We proudly
                        serve the oil & gas, petrochemical, water, environmental, commercial,
                        and infrastructure sectors across the Kingdom with a commitment
                        to excellence and customer satisfaction.</p>
                    <div className='grid grid-cols-[1fr_1.7fr]'>
                     {work.map((item, index) =>(
                          <div key={index} className='flex items-center gap-2'>
                            <img className='w-4' src={item.image} alt="" />
                            <p className='text-[#000000] font-medium text-lg'>{item.text}</p>
                          </div>
                     ))}
                    </div>
                  <div className='flex gap-2 py-5'>
                  <button className='text-[12px] font-bold bg-[#D48E26] text-[#FFFFFF] w-43 h-10 rounded-xl'>REQUEST MANPOWER</button>
                  <button className='flex justify-center items-center gap-2 text-[12px] font-bold border border-[#00000040]  text-[#191E23] w-40 h-10 rounded-xl'><FiDownload size={16}/>Download Profile</button>
                  </div>
                </div>
                <div className='relative'>
                    <img className='max-w-147 w-full h-auto object-contain' src="/About.png" alt="" />
                    {/* <div className='absolute'>
                        <h1>ISO</h1>
                        <span>CERTIFIED</span>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default AboutUs

const button = [
    {
        id: 1,
        text: "Story",
    },
    {
        id: 2,
        text: "Mission",
    },
    {
        id: 3,
        text: "Vision",
    },
]

const work = [
    {
        id: 1,
        image: "/tick.png",
        text: "Civil, Mechanical",
    },
    {
        id: 2,
        image: "/tick.png",
        text: "Equipment Rental Solutions",
    },
    {
        id: 3,
        image: "/tick.png",
        text: "Electrical Services",
    },
    {
        id: 4,
        image: "/tick.png",
        text: "Industrial Maintenance Services",
    },
    {
        id: 5,
        image: "/tick.png",
        text: "Turnaround Support",
    },
    {
        id: 6,
        image: "/tick.png",
        text: "Asphalting & Landscaping Works",
    },
]