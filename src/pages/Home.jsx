import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import OurJourney from '../components/OurJourney'
import WhyChooseUs from '../components/WhyChooseUs'
import OurService from '../components/OurService'
import WorkForce from '../components/WorkForce'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <AboutUs/>
        <OurJourney/>
        <WhyChooseUs/>
        <OurService/>
        <WorkForce/>
    </div>
  )
}

export default Home