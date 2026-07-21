import React from 'react'
import Heading from './Heading'
import { motion } from 'framer-motion'

const Industries = () => {
  return (
    <div id='industries' className='px-5 md:px-8 lg:px-10 py-10 bg-[#F7F7F7] overflow-hidden'>
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <Heading text1={'INDUSTRIES WE SERVE'} text2={'Powering Every Sector'} para={'From upstream oil & gas to urban infrastructure our workforce solutions serve every major industry shaping Saudi Arabia.'}/>
        </motion.div>

        <div className='grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-5 lg:grid-cols-3 py-8 max-w-350 mx-auto'>
          {imgBox.map((item, index) =>(
            <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                viewport={{ once: true }}
                className='w-full'
            >
                <img className='w-full h-auto object-cover rounded-[15px]' src={item.image} alt="" />
            </motion.div>
          ))}
        </div>
    </div>
  )
}

export default Industries

const imgBox = [
    {
    id: 1,
    image: "/gas.png"
    },
    {
    id: 2,
    image: "/infrastructure.png"
    },
    {
    id: 3,
    image: "/const.png"
    },
    {
    id: 4,
    image: "/commercial.png"
    },
    {
    id: 5,
    image: "/industrial.png"
    },
    {
    id: 6,
    image: "/energy.png"
    },
]