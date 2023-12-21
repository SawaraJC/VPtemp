// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import About from './components/homepage/About/About'
import Media from './components/homepage/Media/media'
import Contact from './components/homepage/Contact/Contact'
import FAQ from './components/homepage/FAQ/FAQ'
import Footer from './components/homepage/Footer/Footer'
import Guest from './components/homepage/Guests/Guest'
import Sponsors from './components/homepage/Sponsors/Sponsors'
import Gallery from './components/homepage/Gallery/Gallery'
import Reviews from './components/homepage/Reviews/Reviews'
import Testimonials  from './components/homepage/Reviews/Testimonials'
import Terms from './components/homepage/Terms/Terms'

function App() {
  
  return (
    <div>
      <About></About>
      <Guest></Guest>
      <Sponsors></Sponsors>
      <Gallery></Gallery>
      <Reviews></Reviews>
      <Testimonials></Testimonials>
      <Media></Media>
      <Terms></Terms>
      <FAQ></FAQ>
      <Contact></Contact>
      <Footer></Footer>

    </div>
  )
}

export default App
