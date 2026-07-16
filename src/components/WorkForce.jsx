import React from 'react'
import Heading from './Heading'
import { FaArrowRight } from "react-icons/fa6";

const WorkForce = () => {
    return (
        <div className='px-5 md:px-8 lg:px-10 py-10'>
            <Heading text1={'WORKFORCE SPECIALIZATION'} text2={'16 Manpower Categories'} para={'Covering every workforce requirement across all major industrial and commercial sectors in Saudi Arabia.'} />
            <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 justify-items-center lg:justify-items-start gap-5 mt-10 mb-5'>
                {boxes.map((item) => (
                    <div key={item.id} className='w-full h-30.75 rounded-[15px] bg-[#F5F3F3] flex flex-col text-center justify-center items-center'>
                        <div className='w-10 h-10 bg-[#FFFFFF] rounded-full flex items-center justify-center'>
                            <img className='w-4.5 h-auto object-cover ' src={item.image} alt="" />
                        </div>
                        <h1 className='text-[12px] text-[#000000] font-bold py-1'>{item.head}</h1>
                        <p className='text-[#8D98A2] font-medium text-[10px]'>{item.para}</p>
                    </div>
                ))}
            </div>
            <div className='flex justify-center'>
                <button className='bg-[#D48E26] text-[12px] font-bold text-[#FFFFFF] w-75 h-12.5 rounded-xl flex items-center justify-center gap-2'>REQUEST SPECIALIZED MANPOWER <FaArrowRight size={16} /> </button>
            </div>
        </div>
    )
}

export default WorkForce

const boxes = [
    {
        id: 1,
        image: "/eng.png",
        head: "Engineering",
        para: "120+ roles",
    },
    {
        id: 2,
        image: "/construction.png",
        head: "Construction",
        para: "70+ roles",
    },
    {
        id: 3,
        image: "/oil.png",
        head: "oil & Gas",
        para: "200+ roles",
    },
    {
        id: 4,
        image: "/industry.png",
        head: "Industrial",
        para: "80+ roles",
    },
    {
        id: 5,
        image: "/fast.png",
        head: "Electrial",
        para: "60+ roles",
    },
    {
        id: 6,
        image: "/civil.png",
        head: "Civil Works",
        para: "50+ roles",
    },
    {
        id: 7,
        image: "/mep.png",
        head: "MEP Services",
        para: "90+ roles",
    },
    {
        id: 8,
        image: "/mgmt.png",
        head: "Facility Mgmt",
        para: "120+ roles",
    },
    {
        id: 9,
        image: "/warehouse.png",
        head: "Warehouse",
        para: "40+ roles",
    },
    {
        id: 10,
        image: "/logictics.png",
        head: "Logistics",
        para: "35+ roles",
    },
    {
        id: 11,
        image: "/hospitality.png",
        head: "Hospitality",
        para: "30+ roles",
    },
    {
        id: 12,
        image: "/heath.png",
        head: "Healthcare",
        para: "20+ roles",
    },
    {
        id: 13,
        image: "/security.png",
        head: "Security",
        para: "55+ roles",
    },
    {
        id: 14,
        image: "/administration.png",
        head: "Administration",
        para: "40+ roles",
    },
    {
        id: 15,
        image: "/warehouse.png",
        head: "Transportation",
        para: "60+ roles",
    },
    {
        id: 16,
        image: "/cleaning.png",
        head: "Cleaning",
        para: "45+ roles",
    },
]