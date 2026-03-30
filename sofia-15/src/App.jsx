import StarryNight from './components/Background/StarryNight'
import Navbar from './components/ui/Navbar'
import Hero from './components/sections/Hero'
import Story from './components/sections/Story'
import Details from './components/sections/Details'
import Programa from './components/sections/Programa'
import DressCode from './components/sections/DressCode'
import LluviaDeSobres from './components/sections/LluviaDeSobres'
import Confirmacion from './components/sections/Confirmacion'

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <StarryNight />
      <Navbar />
      <Hero />
      <Story />
      <Details />
      <Programa />
      <DressCode />
      <LluviaDeSobres />
      <Confirmacion />
    </div>
  )
}

export default App