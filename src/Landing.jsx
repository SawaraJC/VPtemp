import Hero from "./components/homepage/Hero/Hero";
import About from "./components/homepage/About/About";
import Media from "./components/homepage/Media/media";
import Contact from "./components/homepage/Contact/Contact";
import FAQ from "./components/homepage/FAQ/FAQ";
import Footer from "./components/homepage/Footer/Footer";
import Guest from "./components/homepage/Guests/Guest";
import Gallery from "./components/homepage/Gallery/Gallery";
import Reviews from "./components/homepage/Reviews/Reviews";
import Testimonials from "./components/homepage/Reviews/Testimonials";
import Terms from "./components/homepage/Terms/Terms";
import SponsorsMedia from "./components/homepage/SponsorsMedia/SponsorsMedia";
// import NavBar from './components/homepage/Navbar/Navbar'
import Navbar from "./components/homepage/Navbar/Navbar";

function Landing() {
  return (
    <div>
      <Hero></Hero>
      <div className="bg-fixed bg-cover bg-center" style={{backgroundImage: 'url("https://res.cloudinary.com/da5mmxnn3/image/upload/v1703940876/VP%2724/2150528646_t4njjs.webp")'}}>
        <div className="h-[400px] bg-opacity-25 flex justify-center">

        </div>
      </div>
      <About className="h-[600px] bg-opacity-25 flex justify-center bg-fixed bg-cover bg-center" ></About>
      <div className="bg-fixed bg-cover bg-center" style={{backgroundImage: 'url("https://cdn.pixabay.com/photo/2016/09/26/23/45/sky-1697359_1280.jpg")'}}>
        <div className="h-[400px] bg-opacity-25 flex justify-center">

        </div>
      </div>
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
    </div>
  );
}

export default Landing;
