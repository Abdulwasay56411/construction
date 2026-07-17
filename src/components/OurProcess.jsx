import React from 'react';
import { motion } from 'framer-motion';
import Heading from './Heading';

const OurProcess = () => {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const lineVariants = {
        hidden: { scaleX: 0, originX: 0 },
        visible: {
            scaleX: 1,
            transition: { duration: 1.5, ease: "easeInOut" }
        }
    };

    return (
        <div className='bg-[#1D1D1D] px-5 md:px-8 lg:px-10 py-10'>
            <Heading
                text1={'OUR PROCESS'}
                text3={'How We Deliver Results'}
                para1={'A proven 5-step process designed to get the right professionals to your site - fast, compliant, and ready to perform.'}
            />

            <motion.div
                className='grid grid-cols-1 md:grid-cols-5 md:justify-items-center mt-16 mb-5 relative gap-y-14'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className='absolute top-10 md:left-[10%] md:right-[10%] left-10 bottom-0 w-px md:w-auto md:h-px z-0 overflow-hidden'>
                    <motion.div
                        className='w-full h-full'
                        style={{
                            background: 'linear-gradient(to bottom, #D48E261A, #D48E2666, #D48E261A)'
                        }}
                        variants={{
                            hidden: { scaleY: 0, scaleX: 0 },
                            visible: { scaleY: 1, scaleX: 1, transition: { duration: 2 } }
                        }}
                    ></motion.div>
                </div>

                {processBox.map((item) => (
                    <motion.div
                        key={item.id}
                        className='flex flex-row gap-6 md:flex-col items-center md:text-center relative z-10'
                        variants={itemVariants}
                    >
                        <div className='w-20 h-20 flex justify-center items-center border border-[#D48E26] bg-[#1A1A1A] rounded-xl shrink-0'>
                            <h1 className='text-[#D48E26] font-extrabold text-3xl'>{item.number}</h1>
                        </div>
                        <div>
                            <h1 className='text-[#FFFFFF] font-extrabold text-sm md:pt-4 pb-2'>{item.title}</h1>
                            <p className='text-[#D1D1D1] text-[10px] max-w-70 md:max-w-50'>{item.para}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default OurProcess;

const processBox = [
    { id: 1, number: "01", title: "Requirement Analysis", para: "In depth consultation to precisely understand your manpower needs technical requirements, and project timelines." },
    { id: 2, number: "02", title: "Candidate Sourcing", para: "In depth consultation to precisely understand your manpower needs technical requirements, and project timelines." },
    { id: 3, number: "03", title: "Client Interview", para: "We facilitate structured technical interviews ensuring full alignment between your team and pre-selected candidates." },
    { id: 4, number: "04", title: "Deployment", para: "Seamless onboarding: documentation, medical screening, visa processing and mobilization-workers arrive ready to perform." },
    { id: 5, number: "05", title: "Ongoing Support", para: "Dedicated account management, performance monitoring, 90-day replacement guarantee, and full payroll management." },
];