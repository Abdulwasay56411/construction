import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const OurWork = () => {

    const [isActive, setIsActive] = useState(1);

    const activeTile = btn.find(b => b.id === isActive).title

    const filteredProjects = isActive === 1
        ? project.find(p => p.category === "All").image
        : project.find(p => p.category === activeTile)?.image || [];

    return (
        <div id='projects' className='px-5 md:px-8 lg:px-10 py-10 max-w-350 mx-auto overflow-hidden'>
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='flex items-center gap-3'
            >
                <hr className='w-17.5 sm:w-17.5 text-[#D48E26] h-0' />
                <h1 className='text-[#D48E26] font-medium text-sm sm:text-xl'>Our Work</h1>
                <hr className='w-17.5 sm:w-17.5 text-[#D48E26] h-0' />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className='flex flex-wrap gap-2 justify-between items-center'
            >
                <h1 className='text-[#000000] text-3xl md:text-[40px] font-extrabold'>Featured Projects</h1>
                <div className='flex flex-wrap justify-center items-center gap-2'>
                    {btn.map((item) => (
                        <button
                            onClick={() => setIsActive(item.id)}
                            key={item.id}
                            className={`text-[13px] px-4 py-2 cursor-pointer font-bold rounded-xl hover:-translate-y-1 duration-300 ${isActive === item.id ? "bg-[#D48E26] text-[#FFFFFF] shadow-[0_10px_25px_rgba(212,142,38,0.4)]" : "text-[#000000] bg-[#F5F3F3]"}`}
                        >
                            {item.title}
                        </button>
                    ))}
                </div>
            </motion.div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={isActive}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10 gap-4'
                >
                    {Array.isArray(filteredProjects) ? filteredProjects.map((img, index) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            key={index}
                            className='overflow-hidden rounded-[15px] group cursor-pointer'
                        >
                            <div className='overflow-hidden w-full h-full rounded-[15px]'>
                                <img
                                    className='w-full h-auto object-contain rounded-[15px] transition-transform duration-500 group-hover:scale-105'
                                    src={img}
                                    alt=""
                                />
                            </div>
                        </motion.div>
                    ))
                        : <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className='overflow-hidden rounded-[15px] group cursor-pointer'
                          >
                              <div className='overflow-hidden w-full h-full rounded-[15px]'>
                                  <img
                                      className='w-full h-auto object-contain rounded-[15px] transition-transform duration-500 group-hover:scale-105'
                                      src={filteredProjects}
                                      alt=""
                                  />
                              </div>
                          </motion.div>
                    }
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default OurWork

const btn = [
    {
        id: 1,
        title: "All",
    },
    {
        id: 2,
        title: "Construction"
    },
    {
        id: 3,
        title: "oil & Gas"
    },
    {
        id: 4,
        title: "Industrial"
    },
    {
        id: 5,
        title: "Infrastructure"
    },
    {
        id: 6,
        title: "Commercial"
    },
]

const project = [
    {
        id: 1,
        category: "All",
        image: ["/commerc.png", "/indus.png", "/oil&gas.png", "/infra.png", "/construc.png", "/commerc1.png", "/indus1.png", "/oil&gas1.png"],
    },
    {
        id: 2,
        category: "Construction",
        image: "/construc.png",
    },
    {
        id: 3,
        category: "oil & Gas",
        image: ["/oil&gas.png", "/oil&gas1.png"],
    },
    {
        id: 4,
        category: "Industrial",
        image: ["/indus.png", "/indus1.png"],
    },
    {
        id: 5,
        category: "Infrastructure",
        image: "/infra.png",
    },
    {
        id: 6,
        category: "Commercial",
        image: ["/commerc.png", "/commerc1.png"],
    }
]