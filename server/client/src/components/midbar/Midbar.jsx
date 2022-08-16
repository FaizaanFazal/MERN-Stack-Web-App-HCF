import React from 'react'
import "./Midbar.css"
import CountUp from 'react-countup'


export default function Midbar() {

     
    return(
      <div className='Midbar'>
    
    <div className="cont">  
            
                <div className='w3'>
                <div className='midbarbox'> <h2><CountUp end={30000}/>+</h2> </div>
                    <h4>All time Donations</h4>
                </div>
            
                <div className='w3'>
                <div className='midbarbox'> <h2><CountUp end={20}/>+</h2> </div>
                    <h4>Projects Compeleted</h4>
                </div>
                <div className='w3'>
                <div className='midbarbox'> <h2><CountUp end={3000}/>+</h2> </div>
                    <h4>People Influenced</h4>
                </div>

  </div>
 </div>
 )

  
  }



