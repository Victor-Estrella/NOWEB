import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Partners from './components/Partners/Partners'
import View360 from './components/View360/View360'
import Footer from './components/Footer/Footer'
import CTA from './components/CTA/CTA'
import NearYou from './components/NearYou/NearYou'
import OurMission from './components/OurMission/OurMission'

function App() {

  return (
    <div>
      <Header />
      <Hero />
      <Gallery />
      <About />
      <Partners />
      <View360 />
      <OurMission />
      <NearYou />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
