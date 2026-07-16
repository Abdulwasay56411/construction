import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import OurJourney from '../components/OurJourney'
import WhyChooseUs from '../components/WhyChooseUs'
import OurService from '../components/OurService'
import WorkForce from '../components/WorkForce'
import Industries from '../components/Industries'

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
        <Industries/>
    </div>
  )
}

export default Home