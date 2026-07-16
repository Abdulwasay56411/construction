import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import OurJourney from '../components/OurJourney'
import WhyChooseUs from '../components/WhyChooseUs'
import OurService from '../components/OurService'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <AboutUs/>
        <OurJourney/>
        <WhyChooseUs/>
        <OurService/>
    </div>
  )
}

export default Home