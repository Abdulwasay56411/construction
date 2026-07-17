import React, { useState } from 'react';
import Heading from './Heading';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev === clientSays.length - 1 ? 0 : prev + 1));
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev === 0 ? clientSays.length - 1 : prev - 1));
    };

    return (
        <div className='px-5 md:px-8 lg:px-10 py-10 bg-[#1D1D1D]'>
            <Heading text1={'TESTIMONIALS'} text3={'What Our Clients Say'} />

            <div className='flex flex-col items-center justify-center mt-10'>
                {/* Testimonial Card */}
                <div className='border border-[#383635] rounded-[20px] max-w-3xl w-full p-8 md:p-12 text-center'>
                    <div className='text-[#D48E26] text-2xl mb-6'>★</div>
                    <p className='text-[#FFFFFF] text-sm sm:text-base md:text-xl font-medium leading-relaxed mb-8'>
                        "{clientSays[currentIndex].para}"
                    </p>
                    <h3 className='text-[#D48E26] font-bold text-base'>{clientSays[currentIndex].title}</h3>
                    <p className='text-[#B8BBBA] text-sm font-medium'>{clientSays[currentIndex].text}</p>
                </div>

                {/* Navigation Controls */}
                <div className='flex items-center gap-4 mt-8'>
                    <button onClick={prevTestimonial} className='border border-[#383635] w-10.25 h-10.25 text-white p-2 rounded-full hover:bg-[#383635]'>
                        &lt;
                    </button>

                    <div className='flex gap-2'>
                        {clientSays.map((_, index) => (
                            <div
                                key={index}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-[#D48E26]' : 'w-2 bg-[#383635]'}`}
                            />
                        ))}
                    </div>

                    <button onClick={nextTestimonial} className='border border-[#8E8A8A] w-10.25 h-10.25  text-white p-2 rounded-full hover:bg-[#383635]'>
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;

const clientSays = [
    {
        id: 1,
        para: "Telal Al Shaheqa has been our trusted manpower partner for over 5 years. Their ability to rapidly deploy qualified engineers and technicians has been instrumental in meeting our critical project milestones. Truly exceptional service.",
        title: "Eng. Khalid Al-Rashidi",
        text: "Project Director, Saudi Aramco"
    },
    {
        id: 2,
        para: "Second testimonial text goes here for testing the carousel navigation.",
        title: "John Doe",
        text: "Manager, Construction Co"
    },
    {
        id: 3,
        para: "Third testimonial text goes here to ensure the dots and buttons work perfectly.",
        title: "Jane Smith",
        text: "Director, Industrial Tech"
    },
    {
        id: 4,
        para: "Fourth testimonial text to complete the demo loop.",
        title: "Ali Ahmed",
        text: "CEO, Infrastructure Ltd"
    },
];