import StarryNight from './components/Background/StarryNight'
import Navbar from './components/ui/Navbar'
import Hero from './components/sections/Hero'
import Story from './components/sections/Story'
import Details from './components/sections/Details'
import Programa from './components/sections/Programa'
import LluviaDeSobres from './components/sections/LluviaDeSobres'

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <StarryNight />
      <Navbar />
      <Hero />
      <Story />
      <Details />
      <Programa />
      <LluviaDeSobres />
    </div>
  )
}

export default App