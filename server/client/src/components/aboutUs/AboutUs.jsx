import React from 'react'
import Header from '../common/header/Header'
import './AboutUs.css'
import img1 from '../../images/hcf1.webp'
import Contact from '../contact/Contact'

export default function AboutUs() {
  return (
    <div className="abwrapper">
     <div className="abbkcover">
      <Header/>
      <section className='abporjects'>
           
        <div className='container-xxl'>
        
        <h4 className='text-center m-2 text-decoration-underline mt-5'>About Us</h4>
                <div className='row mt-5 p-2 abcardrow'>
                        <div className='col-xl-6 mt-2'>
                        <div className='imgcontrol'>
                            <img src={img1} alt=''/>
                            </div>
                        </div>
                        <div className='col-xl-6  mt-2'>
                                <div className='abheading'>About Human Care Foundation</div>
                                <div className='abslogan'>Charity Efforts Are For Happiness/or ayat</div>
                                <hr className='linep'/>
                                <div>A decade ago, JDC Foundation, a charitable and nonproﬁt organization embarked its journey starting from a small camp established at a densely populated area of Aisha Manzil, Karachi. Initially it catered the ﬂood disaster victims and places, but later on, it worked hard to spread its branches and reach outz to an effective infrastructure that deals with liberation and rescue managements all across the province. JDC's diligent efforts resulted in setting up camps which provide immediate aids to the urgent calls and matters. Also it has been successful at establishing free medical camps which rescue and caters the abrupt needs. to be a source of prevailing equality among the mankind irrespective of the speciﬁed modern traits of age, class, religion or ethnicities. JDC is a registered organization with a charity commission government of Pakistan. It's wholly operating as an independent charity welfare through the donations of both the members and the non-members. It is free from any government funding programs and agencies. The accounts are always exposed for its donors for self-satisfactory audit inspections.</div>
                        </div>

                </div>
              
        </div>
        <div className='abcont'>
        <h3 className='text-center fw-bolder mt-3 mb-4'>Our Mission</h3>
            <div className='container-xxl mb-5'>
            <div className='row '>
            <div className='col-xl-6 mt-2 p-2'>
            <div className='abheading2'>Objectives</div>
            <div className='abslogan'>We Strive for bettermenet</div>
            <hr className='grayline'/>
            <div> In 2010, a group of young ladss along with the supervision and guidance of Molana Muhammad Hasan initiated the unending journey which is famously renowned as, The JDC Foundation. It's a welfare that's charitable and non-proﬁtable registered NGO that began with the sole purpose of serving the humanity with its basic needs, reaching out to the far-fetched horizons it has embraced till date. The organization is there for all sorts of natural and unnatural fatalities, disasters and delimmas that mankind could ever encounter. Keeping in mind the one and only motive of this welfare is to reach out to those who are underprivileged, seeks justice and demands hospitality. The organization has made sure to leave no page devoid of its utmost concern for the well-being of the society. It made sure to prevail equality amongst the citizens and connecting hearts with all sorts of help according to the Islamic teachings and moral ethics of a democratic society. it adheres and moral ethics of a democratic society innocent people, promoting welfare to all ages, classes and creeds.</div>
            </div>
            <div className='col-xl-6 mt-2 p-2'>
                <div className='videocont text-center mt-5'> 
                <iframe max-width="560" max-height="315" src="https://www.youtube.com/embed/jAa58N4Jlos" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            </div>
            </div>
        </div>
          <Contact/>
      </section>
    </div>
    </div>
  )
}
