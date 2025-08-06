import Hero from "../sections/Hero";
import Navbar from "../sections/Navbar";
import Project from "../sections/Project";
import About from "../sections/About";
import Details from "../sections/Details";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

function Home(){
    return(
        <>
        <Navbar/>
        <Hero id="Hero"/>
        <About id="About"/>
        <Details/>
        <Project id="Project"/>
        <Contact id="Contact"/>
        <Footer/>
        </>
    );
}

export default Home;