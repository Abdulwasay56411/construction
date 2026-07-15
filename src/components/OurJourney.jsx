import React from 'react'
import Heading from './Heading'

const OurJourney = () => {
    return (
        <div className='pb-10 px-5 md:px-8 lg:px-10'>
            <div className='flex justify-center text-center'>
                <Heading text1={'OUR JOURNEY'} text2={'Company Milestones'} />
            </div>
            <div className='flex flex-wrap justify-center items-center lg:flex-nowrap gap-3 gap-y-8 my-5'>
                {box.map((item, index) => (
                    <div key={index} className='flex gap-3 w-[320px] h-35.75'>
                        <img src={item.image} alt="" />
                        <div>
                            <h1 className='text-[#D48E26] font-black text-sm pb-2'>{item.title}</h1>
                            <h2 className='font-bold text-sm text-[#191E23]'>{item.head}</h2>
                            <p className='text-[#998A95] font-medium text-sm py-2'>{item.para}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurJourney

const box = [
    {
        id: 1,
        title: "1992",
        image: "/line.png",
        head: "Company Founded",
        para: "Established in Saudi Arabia with a commitment to delivering reliable contracting and skilled manpower services.",
    },
    {
        id: 2,
        title: "2008",
        image: "/line.png",
        head: "Workforce Expansion",
        para: "Built a strong network of qualified engineers, supervisors, technicians, and skilled workers to support major industrial projects.",
    },
    {
        id: 3,
        title: "2018",
        image: "/line.png",
        head: "Integrated Industrial Services",
        para: "Expanded expertise in Civil, Mechanical, Electrical & Instrumentation, Shutdown, Maintenance, and Equipment Rental services.",
    },
    {
        id: 4,
        title: "2024",
        image: "/line.png",
        head: "Vision 2030 Partner",
        para: "Supporting Saudi Arabia's industrial growth by delivering professional manpower and contracting solutions for major public and private sector projects.",
    },
]