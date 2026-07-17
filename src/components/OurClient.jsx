import React from 'react';
import { motion } from 'framer-motion';
import Heading from './Heading';

const OurClient = () => {
    return (
        <div>
        <div className='px-5 md:px-8 lg:px-10 py-10 bg-[#F7F7F7] overflow-hidden'>
            <Heading
                text1={'OUR CLIENTS'}
                text2={'Trusted by Industry Leaders'}
                para={'Partnered with Saudi Arabia s most prestigious companies and institutions.'}
            />

            <div className='flex overflow-hidden py-10 max-w-350 mx-auto'>
                <motion.div
                    className='flex gap-5'
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop"
                    }}
                >
                    {[...clientCard, ...clientCard].map((item, index) => (
                        <div
                            key={index}
                            className='min-w-37.5 sm:min-w-50 h-25 bg-[#FFFFFF] rounded-[18px] shadow-[0px_0px_12px_rgba(0,0,0,0.04)] flex justify-center items-center p-5 shrink-0'
                        >
                            <img className='w-full h-full object-contain' src={item.image} alt={`Client ${item.id}`} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
        {/* Certification section */}
       <div className='px-5 md:px-8 lg:px-10 py-10 max-w-350 mx-auto'>
       <Heading text1={'CERTIFICATION'} text2={'Internationally Certified'}/>
       <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 justify-items-center gap-5 my-5'>
        {certification.map((item) =>(
            <div key={item.id} className='w-full h-auto p-5 border border-[#E0DFDF] bg-[#F7F7F7] flex flex-col justify-center text-center items-center rounded-[15px]'>
               <div className='flex justify-center items-center w-12.5 h-12 bg-[#D48E26] rounded-[14px]'>
                <img className='w-7.5 h-7.5' src={item.image} alt="" />
               </div>
               <h1 className='font-bold text-[12px] py-2 text-[#000000]'>{item.title}</h1>
               <p className='text-[#8D98A2] text-[10px] font-medium'>{item.para}</p>
            </div>
        ))}
       </div>
       </div>
        </div>
    );
};

export default OurClient;

const clientCard = [
    { id: 1, image: "/client1.png" },
    { id: 2, image: "/client2.png" },
    { id: 3, image: "/client3.png" },
    { id: 4, image: "/client4.png" },
    { id: 5, image: "/client5.png" },
    { id: 6, image: "/client6.png" },
    { id: 7, image: "/client7.png" },
    { id: 8, image: "/client8.png" },
    { id: 9, image: "/client9.png" },
    { id: 10, image: "/client10.png" },
    { id: 11, image: "/client11.png" },
    { id: 12, image: "/client12.png" },
    { id: 13, image: "/client13.png" },
    { id: 14, image: "/client14.png" },
    { id: 15, image: "/client15.png" },
];

const certification = [
 {
  id: 1,
  image: "/certification.png",
  title: "ISO 9001:2015",
  para: "Quality Management System"
 },
 {
  id: 2,
  image: "/certification.png",
  title: "ISO 45001:2018",
  para: "Occupational Health & Safety"
 },
 {
  id: 3,
  image: "/certification.png",
  title: "ISO 14001:2015",
  para: "Environmental Management"
 },
 {
  id: 4,
  image: "/certification.png",
  title: "Saudi MOL",
  para: "Ministry of Labor Licensed"
 },
 {
  id: 5,
  image: "/certification.png",
  title: "GOSI Certified",
  para: "Social Insurance Registered"
 },
 {
  id: 6,
  image: "/certification.png",
  title: "Vision 2030",
  para: "Saudization Compliant"
 },
]