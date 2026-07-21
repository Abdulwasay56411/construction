import React, { useState } from 'react'
import Heading from './Heading'
import { motion } from 'framer-motion'
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";


const question = [
    {
        id: 1,
        title: "What industries does Telal Al Shaheqa serve?",
        para: "We serve a wide range of industries including Oil & Gas, Construction, Infrastructure, Manufacturing, Facility Management, Healthcare, Hospitality, Logistics, and Government projects across Saudi Arabia."
    },
    {
        id: 2,
        title: "How quickly can you deploy workers to our project site?",
        para: "For locally available workers, we can deploy within 24–48 hours. For international recruitment, the standard timeline is 3–6 weeks including documentation, medical screening, and visa processing."
    },
    {
        id: 3,
        title: "Do you provide Saudization-compliant workers?",
        para: "Yes. We are fully compliant with Saudi Vision 2030 Saudization requirements. We supply both Saudi national employees and expatriate workers within legal Nitaqat quota compliance for your business category."
    },
    {
        id: 4,
        title: "What guarantees do you offer for worker performance?",
        para: "We provide a 90-day replacement guarantee. If any worker does not meet the agreed performance standards, we will replace them at no additional recruitment cost — giving you complete peace of mind."
    },
    {
        id: 5,
        title: "Can you handle all documentation and visa processing?",
        para: "Absolutely. Our in-house PRO team handles employment contracts, GOSI registration, work visas, Iqama processing, and comprehensive medical insurance — a complete end-to-end managed service."
    },
]

const AskedQuestion = () => {

    const [isOpen, setIsOpen] = useState(null);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
           id='faq' className='bg-[#F7F7F7] px-5 md:px-8 lg:px-10 py-10'>
           <Heading text1={'FAQ'} text2={'Frequently Asked Questions'} para={'Everything you need to know about our manpower supply and contracting services.'}/>
            <div className='flex flex-col items-center justify-center gap-5 mb-5 pt-14 max-w-350 mx-auto'>
                {question.map((item) => (
                    <div
                        key={item.id}
                        className={`w-full max-w-250 rounded-[30px] border  transition-all duration-300 ${isOpen === item.id ? "bg-[] border-[#D48E26]" : "bg-[] border-[#0000001F]"}`}
                    >
                        <div className='py-5 px-5 sm:px-10'>
                            <div className='flex justify-between items-center gap-5'>
                                <h1 className='font-medium text-base sm:text-xl text-[#000000]'>{item.title}</h1>
                                <div
                                    onClick={() => setIsOpen(isOpen === item.id ? null : item.id)}
                                    className='shrink-0 flex justify-center items-center w-9 h-9 rounded-full cursor-pointer bg-[]'
                                >
                                  <div className={`transition-transform duration-300 w-8.5 h-8.5 select-none rounded-full flex justify-center items-center ${isOpen === item.id ? "rotate-1 bg-[#D48E26] text-[#FFFFFF]" : "rotate-0 bg-[#F0F0EF] text-[#000000]"}`}>
                                      {isOpen === item.id ? <IoIosArrowUp/>  : <IoIosArrowDown/>}
                                  </div>
                                </div>
                            </div>
                            <div className={`grid transition-all duration-300 ease-in-out select-none ${isOpen === item.id ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
                                <p className='overflow-hidden text-sm sm:text-base text-[#585858A6]'>{item.para}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col items-center py-5'>
                <p className='text-[#585858A6] text-sm font-medium'>Still have questions? Our team is ready to help.</p>
      <a href="#quote">
      <button className='flex justify-center items-center gap-2 bg-[#D48E26] text-[#FFFFFF] rounded-xl w-38.75 h-11.75 mt-5 cursor-pointer transition-all  hover:-translate-y-1 duration-300'>Contact Us <FaArrowRight size={15}/></button>
      </a>
            </div>
        </motion.div>
    )
}

export default AskedQuestion
