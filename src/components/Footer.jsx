import React from 'react'
import { FiSend } from "react-icons/fi";
import { FaChevronUp } from "react-icons/fa6";
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <div className='px-5 md:px-8 lg:px-16 pt-16 pb-8 bg-[#0D0D0D] shadow-[0_10px_15px_0_rgba(151,151,151,0.12)] border-t border-[#1F1F1F] overflow-hidden'>
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='max-w-350 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-10 lg:gap-8'
            >

                {/* Column 1: Brand Info */}
                <div>
                    <h1 className='text-[#FFFFFF] font-extrabold text-lg tracking-wide'>TELAL AL SHAHEQA</h1>
                    <p className='text-[10px] text-[#D48E26] font-bold tracking-[3px] mt-0.5 mb-4'>C O N T R A C T I N G C O .</p>
                    <p className='text-xs font-medium text-[#AEABAB] leading-relaxed max-w-sm'>
                        Saudi Arabia's Premier Skilled Manpower Supply And Contracting Company. Building The Kingdom With The Right People Since 2014.
                    </p>
                    <div className='flex gap-2.5 py-5'>
                        {btn.map((item) => (
                            <button key={item.id} className='bg-[#1F1F1F] hover:bg-[#D48E26] hover:text-white transition-colors duration-300 w-9 h-9 rounded-[10px] flex items-center justify-center text-[12px] font-semibold text-[#A9A7A7] cursor-pointer hover:shadow-[0_10px_25px_rgba(212,142,38,0.4)]'>
                                {item.text}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Column 2: Services */}
                <div>
                    <h2 className='text-[#FFFFFF] font-bold text-sm mb-5'>Services</h2>
                    <ul className='flex flex-col gap-3'>
                        {footerText[0].services.map((subItem, index) => (
                            <li key={index} className='text-xs font-medium text-[#9CA3AF] hover:text-[#D48E26] cursor-pointer transition-colors'>
                                {subItem.text}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Company */}
                <div>
                    <h2 className='text-[#FFFFFF] font-bold text-sm mb-5'>Company</h2>
                    <ul className='flex flex-col gap-3'>
                        {footerText[1].services.map((subItem, index) => (
                            <li key={index} className='text-xs font-medium text-[#9CA3AF] hover:text-[#D48E26] cursor-pointer transition-colors'>
                                {subItem.text}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 4: Contact & Newsletter */}
                <div>
                    <h2 className='text-[#FFFFFF] font-bold text-sm mb-5'>Contact</h2>
                    <ul className='flex flex-col gap-3.5 mb-6'>
                        <li className='flex items-center gap-3 text-xs text-[#9CA3AF]'>
                            <img src={footerText[2].services[0].icon} alt="phone" className='w-3.5 h-3.5 object-contain' />
                            <span>{footerText[2].services[0].text}</span>
                        </li>
                        <li className='flex items-center gap-3 text-xs text-[#9CA3AF]'>
                            <img src={footerText[2].services[1].icon} alt="email" className='w-3.5 h-3.5 object-contain' />
                            <span className='break-all'>{footerText[2].services[1].text}</span>
                        </li>
                        <li className='flex items-center gap-3 text-xs text-[#9CA3AF]'>
                            <img src={footerText[2].services[2].icon} alt="location" className='w-3.5 h-3.5 object-contain' />
                            <span>{footerText[2].services[2].text}</span>
                        </li>
                    </ul>

                    {/* Newsletter Box */}
                    <div>
                        <p className='text-[10px] font-bold tracking-wider text-[#A9A7A7] mb-2.5'>NEWSLETTER</p>
                        <div className='flex items-center bg-[#171717] border border-[#262626] rounded-xl overflow-hidden p-1 max-w-sm'>
                            <input
                                type="email"
                                placeholder="Your email"
                                className='bg-transparent text-xs text-white px-3 py-2 outline-none w-full placeholder:text-[#6B7280]'
                            />
                            <button className='bg-[#D48E26] hover:bg-[#c27f1f] text-white w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer transition-colors shrink-0 hover:shadow-[0_10px_25px_rgba(212,142,38,0.4)]'>
                                <FiSend size={14} />
                            </button>
                        </div>
                    </div>
                </div>

            </motion.div>

            {/* Bottom Bar / Copyright */}
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className='max-w-350 mx-auto mt-12 pt-6 border-t border-[#1A1A1A] flex flex-col md:flex-row items-center justify-between gap-4 text-[8.5px] sm:text-[11px] text-[#737373]'
            >
                <p>2025 Telal Al Shaheqa Contracting Company. All rights reserved. CR: 1010012345</p>
                <div className='flex items-center gap-6'>
                    <span className='hover:text-white cursor-pointer transition-colors '>Privacy Policy</span>
                    <span className='hover:text-white cursor-pointer transition-colors'>Terms of Services</span>
                    <span className='hover:text-white cursor-pointer transition-colors'>Cookie Policy</span>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className='bg-[#1A1A1A] hover:bg-[#D48E26] hover:text-white transition-colors w-8 h-8 rounded-full flex items-center justify-center text-[#A9A7A7] cursor-pointer ml-2 hover:shadow-[0_10px_25px_rgba(212,142,38,0.4)]'
                    >
                        <FaChevronUp size={12} />
                    </button>
                </div>
            </motion.div>
        </div>
    )
}

export default Footer

const btn = [
    { id: 1, text: "LI" },
    { id: 2, text: "TW" },
    { id: 3, text: "FB" },
    { id: 4, text: "IG" },
    { id: 5, text: "YT" },
]

const footerText = [
    {
        id: 1,
        title: "Services",
        services: [
            { text: "Skilled Manpower Supply" },
            { text: "Engineering Professionals" },
            { text: "General Labor Supply" },
            { text: "Construction Contracting" },
            { text: "Facility Management" }
        ]
    },
    {
        id: 2,
        title: "Company",
        services: [
            { text: "About Us" },
            { text: "Industries" },
            { text: "Projects" },
            { text: "Services" },
            { text: "Clients" },
            { text: "FAQ" }
        ]
    },
    {
        id: 3,
        title: "Contact",
        services: [
            { text: "+966 53 410 9601", icon: "/touch.png" },
            { text: "zulfiqarshafiq@tsccontracting.com", icon: "/touch1.png" },
            { text: "46424, YANBU, KSA", icon: "/touch3.png" },
            { text: "NEWSLETTER" }
        ]
    },
]