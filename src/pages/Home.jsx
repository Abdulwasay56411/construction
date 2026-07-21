import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import OurJourney from '../components/OurJourney'
import WhyChooseUs from '../components/WhyChooseUs'
import OurService from '../components/OurService'
import WorkForce from '../components/WorkForce'
import Industries from '../components/Industries'
import OurProcess from '../components/OurProcess'
import OurWork from '../components/OurWork'
import OurClient from '../components/OurClient'
import Testmonials from '../components/Testmonials'
import AskedQuestion from '../components/AskedQuestion'
import GetInTouch from '../components/GetInTouch'
import Ready from '../components/Ready'
import Footer from '../components/Footer'

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
        <OurProcess/>
        <OurWork/>
        <OurClient/>
        <Testmonials/>
        <AskedQuestion/>
        <GetInTouch/>
        <Ready/>
        <Footer/>
    </div>
  )
}

export default Home