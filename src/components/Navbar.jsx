import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
    const [isActive, setIsActive] = useState(0)
    const [isOpen, setIsOpen] = useState(false) 

    return (
        <div className='sticky top-0 z-50'>
            {/* Top bar */}
            <div className='w-full bg-black px-5 md:px-8 lg:px-10 py-2 h-auto flex items-center justify-between'>
                {/* Left side: Contact Details */}
                <div className='flex flex-col sm:flex-row items-start sm:items-center gap-2'>
                    {/* Phone Row */}
                    <div className="flex items-center gap-2 text-white">
                        <img className='w-3' src="/phone.png" alt="" />
                        <span className='leading-none text-[12px] font-semibold'>+966 53 410 9601</span>
                    </div>
                    <div className='hidden sm:block h-4 w-px bg-[#F27700] mx-2'></div>
                    {/* Email Row */}
                    <div className="flex items-center gap-2 text-white">
                        <img className='w-4' src="/mail.png" alt="" />
                        <span className='leading-none text-[12px] font-semibold'>zulfiqarshafiq@tsccontracting.com</span>
                    </div>
                </div>
                <div className='flex gap-5'>
                    {icon.map((item, index) => (
                        <img className='w-4 cursor-pointer' key={index} src={item.image} alt="" />
                    ))}
                </div>
            </div>

            {/* Navbar */}
            <div className='w-full h-18 bg-[#F7F7F7] px-5 md:px-8 lg:px-10 py-4 flex justify-between items-center relative z-20'>
                <div className='flex justify-between items-center w-full max-w-350 mx-auto'>
                    <img className='w-48 md:w-63 h-auto object-contain' src="/navbar icon.png" alt="" />
                    
                    {/* Desktop Links */}
                    <div className='hidden lg:flex gap-5'>
                        {navLink.map((item, index) => (
                            <a 
                                href={item.href} 
                                key={index} 
                                onClick={() => setIsActive(index)} 
                                className={`font-semibold text-sm transition-all duration-300 cursor-pointer select-none ${index === isActive ? "text-[#D48E26]" : "text-[#000000]"}`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* Desktop Buttons */}
                    <div className='hidden lg:flex'>
                      <a href="#quote">
                      <button className='border border-[#000000] text-[12px] font-semibold w-27 h-10 rounded-4xl cursor-pointer hover:bg-black hover:text-white transition-all hover:-translate-y-1 duration-300 '>GET QUOTE</button>
                      </a>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className='block lg:hidden cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <IoClose className='text-3xl' /> : <IoMdMenu className='text-3xl' />}
                    </div>
                </div>
            </div>

            <div className={`lg:hidden absolute top-full left-0 w-full bg-[#F7F7F7] border-b border-gray-300 shadow-xl overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-125 opacity-100 py-6 px-6' : 'max-h-0 opacity-0 py-0 px-6 pointer-events-none'}`}>
                <div className='flex flex-col gap-5'>
                    {navLink.map((item, index) => (
                        <a 
                            href={item.href}
                            key={index} 
                            onClick={() => {
                                setIsActive(index);
                                setIsOpen(false); 
                            }} 
                            className={`font-bold text-lg transition-all duration-300 cursor-pointer ${index === isActive ? "text-[#D48E26]" : "text-[#000000]"}`}
                        >
                            {item.name}
                        </a>
                    ))}
                    <hr className='border-gray-300 my-2' />
                    <a  onClick={() => setIsOpen(false)} href="#quote">
                        <button onClick={() => setIsOpen(false)} className='border border-[#000000] text-sm font-bold w-full h-12 rounded-4xl cursor-pointer bg-white'>GET QUOTE</button>
                    </a>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar

const icon = [
    { id: 1, image: "/instagram.png" },
    { id: 2, image: "/twitter.png" },
    { id: 3, image: "/linkdin.png" },
]

const navLink = [
    { id: 1, name: "Home", href: "#home" },
    { id: 2, name: "About", href: "#about" },
    { id: 3, name: "Services", href: "#services" },
    { id: 4, name: "Industries", href: "#industries" },
    { id: 5, name: "Projects", href: "#projects" },
    { id: 6, name: "Clients", href: "#clients" },
    { id: 7, name: "FAQ", href: "#faq" },
]