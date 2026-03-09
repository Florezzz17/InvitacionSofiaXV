import { useState, useEffect } from 'react'
import StarryNight from './components/Background/StarryNight'
import Navbar from './components/ui/Navbar'
import Hero from './components/sections/Hero'
import Story from './components/sections/Story'
import Details from './components/sections/Details'

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <StarryNight />
      <Navbar />
      <Hero />
      <Story />
      <Details />
    </div>
  )
}

export default App