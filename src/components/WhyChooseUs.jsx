import React from 'react'
import Heading from './Heading'
import { motion } from 'framer-motion'

const WhyChooseUs = () => {
    return (
        <div className='px-5 md:px-8 lg:px-10 pt-5 pb-10 bg-[#F7F7F7] overflow-hidden'>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Heading text1={'WHY CHOOSE US'} text2={'The Telal AI Shaheqa Advantage'} para={'Ten reasons why Saudi Arabia’s leading companies choose us as their manpower partner year after year.'} />
            </motion.div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 justify-center gap-5 py-10 max-w-350 mx-auto'>
                {whyChooseBox.map((item, index) => (
                    <motion.div 
                        key={item.id} 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        viewport={{ once: true }}
                        className='w-full h-auto rounded-[18px] border border-[#0000001F] shadow-[0_0_12px_rgba(0,0,0,0.04)] px-3 sm:px-4 lg:px-5 py-3 sm:py-5 lg:py-8 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] group cursor-pointer'
                    >
                        {/* Inner Icon Box with border/bg change on group hover */}
                        <div className='flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 lg:w-13.5 lg:h-13.5 bg-[#D48E261F] border border-transparent rounded-2xl transition-all duration-300 group-hover:border-[#D48E26] group-hover:bg-[#D48E2633]'>
                            <img className='w-4 sm:w-4.5 lg:w-5 object-cover h-auto' src={item.image} alt="" />
                        </div>
                        <h1 className='text-[#000000] font-bold text-[12px] sm:text-sm lg:text-base pt-3 pb-2'>{item.title}</h1>
                        <p className='text-[#616161] text-[10px] sm:text-[12px] lg:text-sm font-normal'>{item.para}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default WhyChooseUs

const whyChooseBox = [
    {
        id: 1,
        image: "/fast.png",
        title: "Fast Deployment",
        para: "Rapid workforce deployment across the Kingdom."
    },
    {
        id: 2,
        image: "/work.png",
        title: "Qualified Workers",
        para: "Skilled professionals for every project."
    },
    {
        id: 3,
        image: "/saudi.png",
        title: "Saudi Compliance",
        para: "Fully compliant with Saudi regulations."
    },
    {
        id: 4,
        image: "/certified.png",
        title: "Certified Professionals",
        para: "Certified experts meeting global standards."
    },
    {
        id: 5,
        image: "/support.png",
        title: "24/7 Support",
        para: "Reliable support whenever you need it."
    },
    {
        id: 6,
        image: "/quality.png",
        title: "Quality Assurance",
        para: "Quality checks at every project stage."
    },
    {
        id: 7,
        image: "/safety.png",
        title: "Safety First",
        para: "HSE-compliant workforce ensuring safe operations."
    },
    {
        id: 8,
        image: "/pricing.png",
        title: "Competitive Pricing",
        para: "Cost-effective solutions with transparent pricing."
    },
    {
        id: 9,
        image: "/network.png",
        title: "Wide Talent Network",
        para: "Access to skilled talent worldwide."
    },
    {
        id: 10,
        image: "/expert.png",
        title: "Expert Recruitment",
        para: "Specialized hiring for every industry."
    },
]