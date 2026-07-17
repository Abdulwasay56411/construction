import React, { useState } from 'react'

const OurWork = () => {

    const [isActive, setIsActive] = useState(1);

    const activeTile = btn.find(b => b.id === isActive).title

    const filteredProjects = isActive === 1
     ? project.find(p => p.category === "All").image
     : project.find(p => p.category === activeTile)?.image || []; 

    return (
        <div className='px-5 md:px-8 lg:px-10 py-10 max-w-350 mx-auto'>
            <div className='flex items-center gap-3'>
                <hr className='w-17.5 sm:w-17.5 text-[#D48E26] h-0' />
                <h1 className='text-[#D48E26] font-medium text-sm sm:text-xl'>Our Work</h1>
                <hr className='w-17.5 sm:w-17.5 text-[#D48E26] h-0' />
            </div>
            <div className='flex flex-wrap gap-2 justify-between items-center'>
                <h1 className='text-[#000000] text-3xl md:text-[40px] font-extrabold'>Featured Projects</h1>
                <div className='flex flex-wrap justify-center items-center gap-2'>
                  {btn.map((item) =>(
                        <button onClick={() => setIsActive(item.id)} key={item.id} className={`text-[13px] px-4 py-2 cursor-pointer font-bold rounded-xl transition-all duration-300 ${isActive === item.id ? "bg-[#D48E26] text-[#FFFFFF]" : "text-[#000000] bg-[#F5F3F3] "}`}>{item.title}</button>
                  ))}
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-10'>
                {Array.isArray(filteredProjects) ? filteredProjects.map((img, index) =>(
                    <img className='w-full h-auto object-contain' key={index} src={img} alt="" />
                ))
            : <img src={filteredProjects} alt="" />
            }
            </div>
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