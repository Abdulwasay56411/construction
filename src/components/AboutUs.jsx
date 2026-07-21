import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiDownload } from "react-icons/fi";

const AboutUs = () => {
    const [isActive, setIsActive] = useState(0)

    return (
        <div id='about' className='py-10 px-5 md:px-8 lg:pl-10 max-w-350 mx-auto overflow-hidden'>
            {/* Header */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='flex items-center gap-3'
            >
                <hr className='w-17.5 text-[#D48E26] h-0' />
                <h1 className='text-[#D48E26] font-medium text-xl'>About US</h1>
                <hr className='w-17.5 text-[#D48E26] h-0' />
            </motion.div>

            <div className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center'>
                {/* Left Side Content */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className='w-full lg:w-1/2 pt-6'
                >
                    <h1 className='heading text-4xl lg:text-[50px] text-[#000000] font-black leading-12 sm:leading-14'>
                        A Decade of Workforce Excellence in Saudi Arabia
                    </h1>
                    <p className='text-[#00000099] text-[12px] sm:text-lg font-normal py-3'>
                        Telal Al Shaheqa Contracting Co. was established in 1992, its recognised
                        as one of the local leading construction companies in the kingdom for
                        its exceptional services in water, oil & gas, Petrochemical and
                        environmental industries.
                    </p>

                    <div className='max-w-137 mx-5 flex justify-between gap-2 bg-[#F7F7F7] rounded-xl my-3'>
                        {tabContent.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setIsActive(index)}
                                className={`text-base font-semibold w-45 rounded-[10px] h-11 cursor-pointer transition-all hover:-translate-y-1 duration-300 ${index === isActive ? "bg-[#D48E26] text-[#FFFFFF] shadow-[0_10px_25px_rgba(212,142,38,0.4)]" : "text-[#939393]"}`}
                            >
                                {item.title}
                            </button>
                        ))}
                    </div>
                    <div>
                        {tabContent[isActive] && (
                            <p className='text-[12px] sm:text-lg font-normal py-3 text-[#000000] transition-all duration-300'>
                                {tabContent[isActive].para}
                            </p>
                        )}
                    </div>

                    <div className='grid grid-cols-[1fr_1.3fr] sm:grid-cols-[1fr_1.7fr] gap-x-4 gap-y-3 py-5'>
                        {tabContent[isActive].services.map((item, index) => (
                            <div key={index} className='flex items-center gap-2'>
                                <img className='w-2.5 sm:w-4' src={item.image} alt="" />
                                <p className='text-[#000000] font-medium text-[10px] sm:text-lg'>{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <div className='flex gap-2 py-5'>
                        <a href="#quote">
                            <button className='text-[12px] font-bold bg-[#D48E26] text-[#FFFFFF] w-43 h-10 rounded-xl transition-all hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(212,142,38,0.4)] duration-300 cursor-pointer flex items-center justify-center'>REQUEST MANPOWER</button>
                        </a>
                        <a href="#quote">
                            <button className='flex justify-center items-center gap-2 text-[12px] font-bold border border-[#00000040] text-[#191E23] w-40 h-10 rounded-xl transition-all hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.15)] duration-300 cursor-pointer'>
                                <FiDownload size={16} />Download Profile
                            </button>
                        </a>
                    </div>
                </motion.div>

                {/* Right Side Image Section */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className='relative lg:left-6 mt-10 lg:mt-0 group'
                >
                    <div className='overflow-hidden rounded-[20px]'>
                        <img className='max-w-147 w-full h-auto object-contain transition-transform duration-500 group-hover:scale-95' src="/About.png" alt="" />
                    </div>
                    
                    {/* ISO Badge */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className='absolute top-0 sm:top-3 right-8 sm:right-12 flex flex-col justify-center items-center bg-[#D48E26] rounded-[20px] w-27 h-21.25 shadow-[0_10px_25px_rgba(212,142,38,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(212,142,38,0.6)] cursor-pointer'
                    >
                        <h1 className='text-[#FFFFFF] font-extrabold text-2xl'>ISO</h1>
                        <span className='text-[#FFFFFFA6] font-semibold text-sm'>CERTIFIED</span>
                    </motion.div>

                    {/* Experience Box */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        className='absolute bg-[#FFFFFF] flex flex-col justify-center rounded-[20px] px-6 w-46 h-28 bottom-0 left-0 sm:left-3 shadow-[0_0_18px_0_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] cursor-pointer'
                    >
                        <h1 className='text-[#D48E26] font-extrabold text-2xl'>15+</h1>
                        <p className='text-[#000000] font-semibold text-sm'>Source Countries</p>
                        <span className='text-[#000000A6] font-normal text-[12px]'>Global talent network</span>
                    </motion.div>
                </motion.div>
            </div>
            <hr className='text-[#00000026] mt-14' />
        </div>
    )
}

export default AboutUs

const tabContent = [
    {
        title: "Story",
        para: "TELAL AL SHAHEQA CONTRACTING CO. is a leading Saudi contracting and industrial support company with decades of experience in delivering reliable, safe, and high-quality solutions.",
        services: [
            { image: "/tick.png", text: "Civil, Mechanical" },
            { image: "/tick.png", text: "Equipment Rental Solutions" },
            { image: "/tick.png", text: "Electrical Services" },
            { image: "/tick.png", text: "Industrial Maintenance Services" },
            { image: "/tick.png", text: "Turnaround Support" },
            { image: "/tick.png", text: "Turnaround Support" },
        ]
    },
    {
        title: "Mission",
        para: "Our mission is to deliver reliable contracting, industrial manpower, and maintenance services with excellence in quality, safety, and professionalism.",
        services: [
            { image: "/tick.png", text: "Quality Assurance" },
            { image: "/tick.png", text: "Expert Workforce" },
            { image: "/tick.png", text: "HSE Commitment" },
            { image: "/tick.png", text: "Advanced Technology" },
            { image: "/tick.png", text: "Timely Execution" },
            { image: "/tick.png", text: "Client Partnership" },
        ]
    },
    {
        title: "Vision",
        para: "To be one of Saudi Arabia's most trusted contracting companies by delivering innovative, safe, and sustainable engineering solutions.",
        services: [
            { image: "/tick.png", text: "Engineering Excellence" },
            { image: "/tick.png", text: "Continuous Growth" },
            { image: "/tick.png", text: "Customer Satisfaction" },
            { image: "/tick.png", text: "Innovation & Technology" },
            { image: "/tick.png", text: "Operational Efficiency" },
            { image: "/tick.png", text: "Long-Term Partnerships" },
        ]
    }
]