import React, { useState } from 'react'
import Heading from './Heading'
import { FaArrowRight } from "react-icons/fa6";

const OurService = () => {

   const [activeTab, setActiveTab] = useState(0);
   const activeData = buttonContent[activeTab]

   return (
      <div className='bg-[#1D1D1D] pt-5 pb-10 px-5 md:px-8 lg:px-10' >
         <div className='max-w-350 mx-auto'>
            <Heading text1={'OUR SERVICES'} text3={'Professional Workforce Solution'} para1={'From specialized engineering placements to large-scale labor mobilizationwe deliver the human capital that powers Saudi Arabia.'} />
            <div className='flex flex-col items-center lg:flex-row justify-center py-10 gap-5'>
               {buttonContent.map((item, index) => (
                  <button key={item.id} onClick={() => setActiveTab(index)} className={`w-52 h-10 text-[12px] cursor-pointer rounded-xl  ${activeTab === index ? "bg-[#D48E26] text-[#FFFFFF] font-bold" : "bg-[#242424] text-[#A7A7A7] font-medium"}`}>{item.btn}</button>
               ))}
            </div>
            <div className='lg:relative flex flex-wrap justify-center lg:flex-nowrap gap-5 py-5'>
               <img className='max-w-143.5 w-full object-cover max-h-113.25 rounded-[15px] h-auto' src={activeData.image} alt="" />
               <div className='hidden lg:absolute lg:top-12  lg:left-8 bg-[#D48E26] w-35.5 h-10 lg:flex justify-center items-center gap-2 rounded-xl'>
                  <img className='w-2.5 h-auto' src="/1star.png" alt="" />
                  <h1 className='text-[12px] font-bold text-[#FFFFFF]'>CORE SERVICES</h1>
               </div>
               <div>
                  <div className='flex items-center gap-2 py-2 mb-2 justify-center rounded-xl px-2 bg-[#D48E2633] border border-[#D48E26] w-53 h-auto'>
                     <img className='w-18 h-auto' src="/star.png" alt="" />
                     <span className='text-[12px] font-medium text-[#D48E26]'>Primary Summary</span>
                  </div>
                  <div>
                     <h1 className='text-[#FFFFFF] font-extrabold text-xl md:text-2xl lg:text-[28px] py-3'>{activeData.head}</h1>
                     <p className='text-sm md:text-base lg:text-lg font-medium text-[#D1D1D1]'>{activeData.para}</p>
                  </div>
                  <div className='grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] items-center  gap-3 my-4'>
                     {activeData.services.map((listItem, i) => (
                        <div key={i} className='flex items-center gap-2'>
                           <img className='w-3 h-3' src="/round.png" alt="" />
                           <span key={i} className='text-[12px] md:text-sm font-medium text-[#D1D1D1]'>{listItem}</span>
                        </div>
                     ))}
                  </div>
                  <div className='flex items-center gap-3'>
                     <button className='flex items-center justify-center gap-2 bg-[#D48E26] w-48 h-10 text-[#FFFFFF] text-[12px] font-bold rounded-xl cursor-pointer'>Request This Service <FaArrowRight size={15} /> </button>
                     <button className='border border-[#E4DFDF] w-27 h-10 rounded-xl font-semibold text-[10px] md:text-[12px] text-[#E4DFDF] cursor-pointer'>Learn More</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default OurService

const buttonContent = [
   {
      id: 1,
      btn: "Skilled Manpower Supply",
      head: "Skilled Manpower Supply",
      para: "Saudi Arabia's most trusted workforce solutions partner. We supply highly qualified engineering professionals, certified tradesmen, and specialist workers across every industrial sector with unmatched deployment speed, full legal compliance, and guaranteed quality.",
      image: "/supply.png",
      services: [
         "Certified Welders", "Pipe Fitters", "Fabricators", "Riggers", "Scaffolders", "HVAC Technicians", "Electricians", "Instrument Technicians", "Mechanical Technicians", "Civil Workers & Masons", "Equipment Operators", "Shutdown & Turnaround Workforce",
      ]
   },
   {
      id: 2,
      btn: "Engineering Professionals",
      head: "Engineering Professionals",
      para: "Providing experienced and qualified engineering professionals across civil, mechanical, electrical, instrumentation, and project management disciplines. Our experts deliver innovative solutions, technical excellence, and reliable project support for industrial and commercial operations.",
      image: "/engineering.png",
      services: [
         "Civil Engineers", "Planning Engineers", "Mechanical Engineers", "Site Supervisors", "Electrical Engineers", "Surveyors", "Instrumentation Engineers", "Project Coordinators", "QA/QC Engineers", "Commissioning Engineers", "HSE Engineers & Officers", "Design & Drafting Engineers"
      ]
   },
   {
      id: 3,
      btn: "General Labor Supply",
      head: "General Labor Supply",
      para: "Delivering dependable industrial support services through skilled labor, operational staff, and logistics personnel. We ensure efficient workforce deployment, seamless site operations, and reliable support to maximize productivity and maintain project schedules.",
      image: "/labour.png",
      services: [
         "General Helpers", "Housekeeping Staff", "Skilled Helpers", "Skilled Helpers", "Construction Labor", "Material Handlers", "Industrial Cleaning Crew", "Forklift Operators", "Warehouse Workers", "Storekeepers", "Loading & Unloading Staff", "Drivers & Logistics Support"
      ]
   },
   {
      id: 4,
      btn: "Construction Contracting",
      head: "Construction Contracting",
      para: "Offering comprehensive construction contracting solutions for industrial, commercial, and infrastructure projects. From civil works and structural fabrication to mechanical, piping, and electrical installations, we deliver quality, safety, and timely project execution.",
      image: "/contracting.png",
      services: [
         "Civil Construction Works", "HVAC Installation & Ducting", "Structural Fabrication & Erection", "Electrical & Instrumentation Works", "Mechanical Construction", "Fire Protection Systems", "Piping Fabrication & Installation", "Industrial Scaffolding", "Equipment Erection & Alignment", "Asphalting & Road Works", "Tank Fabrication & Installation", "Building Renovation & Maintenance"
      ]
   },
   {
      id: 5,
      btn: "Facility Management",
      head: "Facility Management",
      para: "Providing integrated facility management services that ensure the reliability, efficiency, and long-term performance of industrial facilities. Our maintenance, inspection, testing, and specialized support services help clients achieve safe, uninterrupted operations.",
      image: "/facility.png",
      services: [
         "Hydro Jetting Services", "Thermal & Pipe Insulation", "Heat Exchanger & Tank Cleaning", "Refractory Works", "Valve Overhauling & Troubleshooting", "Data Center / IT Room Maintenance", "Bolt Torquing & Hydro Testing", "MV/LV Testing & Cable Termination", "Plumbing Services", "Sandblasting & Industrial Painting", "Waterproofing Services", "Preventive & Corrective Maintenance"
      ]
   },
]