import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
     
      <footer>
        <div className='footcontainer padding'>
          <div className='footbox logo1'>
            <h1>Connect With us</h1>
            <span>Our Social media Accounts</span>
            <p>Click on the following icons to check out our social media accounts that are updated regularly</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='footbox link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='footbox link'>
            <h3>Accounts</h3>
            <ul>
              <li>EasyPaisa 03xx-xxxxxxx under Name Abcde</li>
              <li>JazzCash 03xx-xxxxxxx under Name Abcde</li>
              <li>Alflah Bank 0000-0000-0000-0000 under Name Abcde</li>
              <li>HBL Bank 0000-0000-0000-0000 under Name Abcde </li>
              
            </ul>
          </div>
         
          <div className='footbox last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                None yet
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +2 392 3929 210
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                hcfoundation22@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved | Developed by Faizaan <i className='fa fa-heart'></i> 
        </p>
      </div>
    </>
  )
}

export default Footer
