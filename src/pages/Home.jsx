import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import OurJourney from '../components/OurJourney'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <AboutUs/>
        <OurJourney/>
    </div>
  )
}

export default Home