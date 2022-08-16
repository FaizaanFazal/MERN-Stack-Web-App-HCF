import "./home.css"
import React from "react"
import About from "../../components/about/About"
import Hero from "../../components/home/hero/Hero"
import Projects from "../../components/projects/Projects"
import Midbar from "../../components/midbar/Midbar"
import TestiMonials from "../../components/TestiMonials/TestiMonials"
import Footer from "../../components/common/footer/Footer"
import Contact from "../../components/contact/Contact"

const Home = () => {
  return (
    <>  
      <Hero />
      <About />
      <Midbar/>
      <Projects />
      <div>
      <TestiMonials/></div>
      <Contact/>
      <Footer />
    
    </>
  )
}

export default Home;
