import React from 'react'
import Heading from './Heading'
import { FiSend } from 'react-icons/fi'

const GetInTouch = () => {
    return (
        <div className='w-full bg-white'>
            <div className='max-w-7xl mx-auto px-5 md:px-8 lg:px-10 pt-10 pb-20'>
                <Heading text1={'GET IN TOUCH'} text2={'Request Manpower or Get a Quote'} para={'Tell us your requirements and our team will respond within 2 business hours with a tallored workforce solution.'} />
                
                {/* Main Content Layout */}
                <div className='flex flex-col lg:flex-row gap-10 justify-center items-center lg:items-start mt-8'>
                    
                    {/* Left Side: Contact Details & Map */}
                    <div className='w-full lg:w-auto flex flex-col items-center lg:items-start'>
                        {/* Contact Details */}
                        <div className='w-full sm:w-92.5 bg-[#1D1D1D] rounded-[20px] px-7 py-8 shadow-md'>
                            <h1 className='text-xl font-extrabold text-[#FFFFFF] pb-4'>Contact Details</h1>
                            {
                                contactDetails.map((item) => (
                                    <div key={item.id} className='flex gap-3 items-center py-1.5'>
                                        <div className='flex justify-center items-center w-11 h-11 rounded-full bg-[#D48E264D] shrink-0'>
                                            <img className='w-4.25 h-auto object-cover' src={item.image} alt="" />
                                        </div>
                                        <div>
                                            <h1 className='text-xs font-medium text-[#868686]'>{item.title}</h1>
                                            <p className='text-sm font-semibold text-[#FFFAFA]'>{item.text}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        
                        {/* Map */}
                        <div className="w-full sm:w-92.5 h-40 mt-5 rounded-[20px] overflow-hidden shadow-md relative">
                            <a
                                href="https://maps.app.goo.gl/YOUR_EXACT_LOCATION_LINK"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full h-full"
                            >
                                <iframe
                                    title="Google Map Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115488.17551726715!2d55.15676735515286!3d25.20484934789062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66250ab4a38d7!2sDubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                                    className="w-full h-full border-0 pointer-events-none"
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </a>
                        </div>
                    </div>
                    <div className='w-full lg:w-auto grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-10'>
                        {Mail.map((item) => (
                            <div key={item.id} className='flex flex-col w-full'>
                                <label className='text-xs font-semibold text-gray-700 mb-1'>{item.label}</label>
                                <input className='w-full sm:w-76.25 h-12 px-4 bg-[#F3F3F3] border border-[#E6E6E6] rounded-lg outline-none' type={item.type} placeholder={item.text} />
                            </div>
                        ))}
                        <div className='flex flex-col w-full sm:col-span-2'>
                            <label className='text-xs font-semibold text-gray-700 mb-1'>YOUR MESSAGE</label>
                            <textarea className='w-full h-32 p-4 bg-[#F3F3F3] border border-[#E6E6E6] rounded-lg outline-none resize-none' placeholder='Describe your manpower requirements, project scope, timeline and any specific qualification needed...'></textarea>
                        </div>
                        <div className='sm:col-span-2'>
                            <button className='w-full h-12 bg-[#D48E26] text-white font-bold rounded-lg tracking-wider hover:bg-[#b8771e] transition-all flex justify-center items-center gap-2'>
                              <FiSend size={16} />  SEND MESSAGE
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GetInTouch

const contactDetails = [
    {
        id: 1,
        title: "Phone",
        text: "+966 53 410 9601",
        image: "/touch.png",
    },
    {
        id: 2,
        title: "Email",
        text: "zulfiqarshafiq@tsccontracting.com",
        image: "/touch1.png",
    },
    {
        id: 3,
        title: "Whatsapp",
        text: "+966 53 410 9601",
        image: "/touch2.png",
    },
    {
        id: 4,
        title: "Address",
        text: "46424, YANBU, KSA",
        image: "/touch3.png",
    },
    {
        id: 5,
        title: "Office Hours",
        text: "Sun - Thur: 8:00 AM - 6:00 PM",
        image: "/touch4.png",
    },
]

const Mail = [
    {
        id: 1,
        label: "FULL NAME",
        text: "Your full name",
        type: "text",
    },
    {
        id: 2,
        label: "COMPANY NAME",
        text: "Your company name",
        type: "text",
    },
    {
        id: 3,
        label: "EMAIL ADDRESS",
        text: "your@company.com",
        type: "email",
    },
    {
        id: 4,
        label: "PHONE NUMBER",
        text: "+966 XX XXX XXXX",
        type: "text",
    },
    {
        id: 5,
        label: "COUNTRY",
        text: "Select country",
        type: "text",
    },
    {
        id: 6,
        label: "SERVICE REQUIRED",
        text: "Select a service",
        type: "text",
    },
]