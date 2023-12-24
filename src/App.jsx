// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/homepage/Hero/Hero'
import About from './components/homepage/About/About'
import Media from './components/homepage/Media/media'
import Contact from './components/homepage/Contact/Contact'
import FAQ from './components/homepage/FAQ/FAQ'
import Footer from './components/homepage/Footer/Footer'
import Guest from './components/homepage/Guests/Guest'
// import Sponsors from './components/homepage/Sponsors/Sponsors'
import Gallery from './components/homepage/Gallery/Gallery'
import Reviews from './components/homepage/Reviews/Reviews'
import Testimonials  from './components/homepage/Reviews/Testimonials'
import Terms from './components/homepage/Terms/Terms'
import SponsorsMedia from './components/homepage/SponsorsMedia/SponsorsMedia'
// import NavBar from './components/homepage/Navbar/Navbar'
import Navbar from './components/homepage/Navbar/Navbar'


function App() {
  
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Guest></Guest>
      {/* <Sponsors></Sponsors> */}
      <Gallery></Gallery>
      {/* <SponsorsMedia/> */}
      <SponsorsMedia></SponsorsMedia>
      <Reviews></Reviews>
      {/* <Testimonials></Testimonials> */}
      <Media></Media>
      {/* <Terms></Terms> */}
      {/* <FAQ></FAQ> */}
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App
