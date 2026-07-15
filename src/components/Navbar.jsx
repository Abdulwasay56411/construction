import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {

    const [isActive, setIsActive] = useState(0)

    return (
        <div className='sticky top-0 z-50'>
            {/* Top bar */}
            <div className='w-full bg-black px-5 md:px-8 lg:px-10 py-2 h-9 flex items-center justify-between'>
                <div className='flex text-white items-center gap-2'>
                    <img className='w-5' src="/mail.png" alt="" />
                    <span className='leading-none text-[12px] font-semibold'>zulfiqarshafiq@tsccontracting.com</span>

                    <div className='h-5 w-px bg-[#F27700] mx-4'></div>

                    <img className='w-3' src="/phone.png" alt="" />
                    <span className='leading-none text-[12px] font-semibold'>+966 53 410 9601</span>
                </div>
                <div className='flex gap-5'>
                    {icon.map((item, index) => (
                        <img className='w-4' key={index} src={item.image} alt="" />
                    ))}
                </div>
            </div>
            {/* Navbar */}
            <div className='w-full h-18 bg-[#F7F7F7] px-5 md:px-8 lg:px-10 py-4'>
                <div className='flex justify-between items-center gap-3'>
                    <img className='w-63 h-11.5' src="/navbar icon.png" alt="" />
                    <div className='hidden lg:flex gap-5'>
                        {navLink.map((item, index) => (
                            <div key={index}>
                                <h1 onClick={() => setIsActive(index === isActive ? null : index)} className={`font-semibold text-sm transition-all duration-300 cursor-pointer select-none ${index === isActive ? "text-[#D48E26]" : "text-[#000000]"}`}>{item.name}</h1>
                            </div>
                        ))}
                    </div>
                    <div className='hidden lg:flex gap-3'>
                        <button className='bg-[#D48E26] w-45 h-10 rounded-4xl font-semibold text-[12px] text-[#FFFFFF] cursor-pointer hover:scale-105 transition-all duration-500 '>REQUEST MANPOWER</button>
                        <button className='border border-[#000000] text-[12px] font-semibold w-27 h-10 rounded-4xl'>GET QUOTE</button>
                    </div>
                    <div className='block lg:hidden'>
                    <IoMdMenu className='text-4xl'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

const icon = [
    {
        id: 1,
        image: "/instagram.png",
    },
    {
        id: 2,
        image: "/twitter.png",
    },
    {
        id: 3,
        image: "/linkdin.png",
    },
]

const navLink = [
    {
        id: 1,
        name: "Home",
    },
    {
        id: 2,
        name: "About",
    },
    {
        id: 3,
        name: "Services",
    },
    {
        id: 4,
        name: "Industries",
    },
    {
        id: 5,
        name: "Projects",
    },
    {
        id: 6,
        name: "Clients",
    },
    {
        id: 7,
        name: "FAQ",
    },
]