import React from 'react'
import "../../app.css"
import Cards from '../Cards'
import Footer from '../Footer'
import HeroSection from '../HeroSection'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <Cards />
        <Footer />
    </div>
  )
}

export default Home