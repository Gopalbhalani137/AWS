import React from 'react'
import Hero_sec from '../components/Hero_sec'
import Section2 from '../components/Section2'
import Events from '../components/Events'
import { ParallaxProvider } from 'react-scroll-parallax';
import CursorFollower from '../Utils/CursorFollower';
function Home() {
  return (
    <div>
      <CursorFollower/>
      <ParallaxProvider>
      <Hero_sec/> 
      <Section2/>
      <Events/>
      </ParallaxProvider>
    </div>
  )
}

export default Home
