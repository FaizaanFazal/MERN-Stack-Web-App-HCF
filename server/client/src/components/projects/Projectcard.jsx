import React from "react"
import {  useNavigate } from 'react-router-dom';

const Projectcard = ({Projectcarddetails}) => {
    const navigate = useNavigate();
    const {coverphoto,name, location,date, description} = Projectcarddetails;
    console.log("Projectcarddetails"+Projectcarddetails)
    
    const handleClick=(Projectcarddetails)=>{
         console.log(Projectcarddetails)
        navigate('/projectdetails', { state: { Projectcarddetails } });
     
      
      }

    return (
        <div className="projectitemitem">
            <div className="projectshadow-effect">
                <div className="img-container">
                <img className="projectimg-circle" src={coverphoto} alt="pic" />
                <div className="pname"><div className="namecolo"> {name} </div></div>
                </div>
                <div className="pdescription">
                <div>
                  <div className="location left"> <span >Location: </span>{location}</div>
                    <div className="location left"> <span >Date: </span>{date.toString().slice(0,10)}</div>
                     <div>{description}</div>
                  </div>

                                        
                </div>
                                             
                                            <div className='pbtn'>
               <button className='p-btn' onClick={()=>handleClick(Projectcarddetails)}>
                                              Details<i className='fa fa-long-arrow-alt-right'></i>
                                            </button>
                                            </div>
            </div>
            
        </div>
    );
};

export default Projectcard;