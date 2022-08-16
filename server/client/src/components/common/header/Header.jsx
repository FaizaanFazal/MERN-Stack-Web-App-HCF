import React, { useState } from "react"
import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"

const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <div className="hheader">
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>AboutUs</Link>
            </li>
            <li>
              <Link to='/projects'>Projects</Link>
            </li>
          
            <li>
              <Link to='/accounts'>Accounts</Link>
            </li>
          </ul>
          <div className='start'>
            <div className='button'>Donate Now</div>
          </div>
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </div>
    </>
  )
}

export default Header
