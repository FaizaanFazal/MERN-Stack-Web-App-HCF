import React from 'react'
import './account.css'
import Header from '../../components/common/header/Header'
import logo1 from '../../img/easypaisa.jpg'
import logo2 from "../../img/jazzcash.jpg" 
import logo3 from "../../img/AlliedBank.png" 
import Contact from '../../components/contact/Contact'
import Footer from '../../components/common/footer/Footer'

export default function account() {
  return (
    <>
    <div className="wrapper">
    <div className="bkcover">
      <Header />
      <section className='accounts'>
            <div className='herocontainer'>
                <div className='accheading'>Donate Now Using any of the below accounts!</div>
                <hr className='aline'/>
                <div className='accountbox'>
                <div className='cardblack'> <p>Official Accounts</p> </div>
                <div className='cardwhite'>
                    <div className='accinfo'>
                        <div className='acclogo'> <img src={logo1} alt='easypaisa' /> </div>
                        <div>
                            
                            <div className='accname'> <span>AccName: </span>Shanza al sabah shah</div>
                            <div className='acctype'><span>Acc: </span>0341-7749554</div>
                        </div>
                    </div>
                    <hr color='black' />
                    <div className='accinfo'>
                        <div className='acclogo'> <img src={logo2} alt='jazzcashlogo' /> </div>
                        <div>
                            
                            <div className='accname'> <span>AccName: </span>Rouhina yousaf</div>
                            <div className='acctype'><span>Acc: </span>0308-8827115</div>
                        </div>
                    </div>
                    <hr color='black' />
                    <div className='accinfo'>
                        <div className='acclogo'> <img src={logo3} alt='Alliedbank' /> </div>
                        <div>
                            
                            <div className='accname'> <span>AccName: </span>Sundas Ellahi</div>
                            <div className='acctype'><span>Acc: </span>05900010020336710030</div>
                        </div>
                    </div>
                    

                
                </div>
                </div>
            </div>
      </section>
      <Contact/>
      <Footer/>
     </div>
     </div>
    </>
  )
}
