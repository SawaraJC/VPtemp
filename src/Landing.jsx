import Hero from "./components/homepage/Hero/Hero";
import About from "./components/homepage/About/About";
// import Media from "./components/homepage/Media/media";
import Media2 from "./components/homepage/Media/media2";
import Contact from "./components/homepage/Contact/Contact";
import FAQ from "./components/homepage/FAQ/FAQ";
import Footer from "./components/homepage/Footer/Footer";
// import Guest from "./components/homepage/Guests/Guest";
import Guest2 from "./components/homepage/Guests/Guest2";
import Gallery from "./components/homepage/Gallery/Gallery";
import Gallery2 from "./components/homepage/Gallery/Gallery2";
import Reviews from "./components/homepage/Reviews/Reviews";
// import Reviews2 from "./components/homepage/Reviews/Reviews2";
import Testimonials from "./components/homepage/Reviews/Testimonials";
import Terms from "./components/homepage/Terms/Terms";
import SponsorsMedia from "./components/homepage/SponsorsMedia/SponsorsMedia";
// import NavBar from './components/homepage/Navbar/Navbar'
import Navbar from "./components/homepage/Navbar/Navbar";
import Gallery3 from "./components/homepage/Gallery/Gallery3";
import { useEffect } from "react";

function Landing() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div>
      {/* <div className="bg-fixed bg-cover bg-center" style={{backgroundImage: 'url("https://res.cloudinary.com/da5mmxnn3/image/upload/v1703940876/VP%2724/2150528646_t4njjs.webp")'}}>
        <div className="h-[400px] bg-opacity-25 flex justify-center">
        
        </div>
      </div> */}
      {/* <About className="h-[600px] bg-opacity-25 flex justify-center bg-fixed bg-cover bg-center" ></About> */}
      {/* <div className="bg-fixed bg-cover bg-center" style={{backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/09/26/23/45/sky-1697359_1280.jpg")'}}>
        <div className="h-[400px] bg-opacity-25 flex justify-center">
        
        </div>
      </div> */}
      {/* <Guest></Guest> */}
      {/* <Sponsors></Sponsors> */}
      {/* <Gallery></Gallery> */}
      <Hero></Hero>
      <About></About>
      <Guest2></Guest2>
      {/* <Gallery2></Gallery2> */}
      <Gallery3/>
      <SponsorsMedia></SponsorsMedia>
      {/* <Reviews2></Reviews2> */}
      <Reviews></Reviews>
      {/* <Media2></Media2> */}
      {/* <Testimonials></Testimonials> */}
      {/* <Media></Media> */}
      {/* <Terms></Terms> */}
      {/* <FAQ></FAQ> */}
      <Contact></Contact>
    </div>
  );
}

export default Landing;
