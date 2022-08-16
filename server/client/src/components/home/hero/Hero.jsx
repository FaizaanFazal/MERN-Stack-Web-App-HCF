import React from "react"
import { Link } from "react-router-dom"
import Header from "../../common/header/Header"

import "./Hero.css"

const Hero = () => {
  return (
    <>
    <div className="herowrapper">
    <div className="bkcover">
      <Header />
      <section className='hero'>
        <div className='herocontainer'>
          <div className='herorow'>

            <div id="heading">
            <h3>Our Moto</h3> 
            <h2>~Be, the pearl of Humanity</h2>
            </div>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='button'>
              <button className='herobtn1'>
                <Link to='/about'>About Us</Link><i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button className='herobtn2'>
              <Link to='#Contactsfrom'>Volunteer Now</Link>
                 <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
     </div>
     </div>
    </>
  )
}

export default Hero
