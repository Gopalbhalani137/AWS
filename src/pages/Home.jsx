import React from 'react'
import Hero_sec from '../components/Hero_sec'
import Section2 from '../components/Section2'
import Events from '../components/Events'
import Navbar from '../components/Navbar'
import { ParallaxProvider } from 'react-scroll-parallax';
import CursorFollower from '../Utils/CursorFollower';
import QASection from '../components/QASection'
import Footer from '../components/Footer'

// import FloatingDots from '../Utils/FloatingDots'
function Home() {
  return (
    <div>
      <Navbar/>
      <CursorFollower/>
      {/* <FloatingDots/> */}
      <ParallaxProvider>
      <Hero_sec/> 
      <Section2/>
      <Events/>
      </ParallaxProvider>
      <QASection/>
      <Footer/>
    </div>
  )
}

export default Home
