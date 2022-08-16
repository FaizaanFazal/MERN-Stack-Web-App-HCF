import React,{useState,useEffect} from 'react'
import './Projectsdetail.css'
import Header from '../common/header/Header'
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export default function ProjectDetials() {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

     const location = useLocation();
     const details=location.state.Projectcarddetails;
     const[data,setData]=useState({
        coverphoto:details.coverphoto, name:details.name,location:details.location,date:details.date,chapter:details.chapter,funds:details.funds,photos:details.photos,projectManager:details.projectManager,description:details.description
    });
  
    
    const handleOpen = (i) => {
      try {
        setSlideNumber(i);
      setOpen(true);
      } catch (error) {
        console.log(error)
      }
      
    };
    const handleMove = (direction) => {
      let newSlideNumber;
      let lastindex=data.photos.length;
      
      let ind= lastindex-1;
      console.log(ind)
      if (direction === "l") {
        newSlideNumber = slideNumber === 0 ? ind : slideNumber - 1;
      } else {
        newSlideNumber = slideNumber === ind ? 0 : slideNumber + 1;
      }
  
      setSlideNumber(newSlideNumber)
    };
    
   
// const setpic=()=>{
//      console.log(data.photos)
// }


// useEffect(()=>{
//     setpic()
// },[data])

  return (
    
    <div className="pdwrapper">
    <div className="pdbkcover">
      <Header />
      <section className='pdporjects'>
      
     

        <h5 className='text-center m-3 text-decoration-underline'>{data.name} Details</h5>
        <div className='container '>
                <div className='row '>
                                <div className='col-sm-6 p-2'>
                                <div className='pdimg-cont'>
                                <img className='pdimg' src={data.coverphoto} alt='projectpic' />
                                </div>
                                </div>
                                <div className='col-sm-6 p-2'>
                                <div className='detailcard p-2 '>
                                    <h2>{data.name}</h2>
                                    <div className='ligthhead'>Location: <span>{data.location}</span></div>
                                    <div className='ligthhead'>Date: <span>{data.date}</span></div>
                                    <div className='ligthhead'>Chapter: <span>{data.chapter}</span></div>
                                    <div className='ligthhead'>Project Manager: <span>{data.projectManager}</span></div>
                                    <hr className='blue'/>
                                    <div className='p-2'>{data.description}</div>
                                </div>
                                </div>
                </div>
                <div> 
                        <div className='row mt-5 mb-5'>
                        <p className='text-center'>Click Image to Zoom</p>

                           {
                            data.photos.length >0 ? data.photos.map((photos,i)=>{
                            return(
                              <div className='col-sm-4 col-md-3 p-1' key={i}>
                              <div className='sliderimgcont' onClick={() => handleOpen(i)}>
                                  <div className='sliderimg p-0 m-0'> <img src={photos} alt='' /></div>
                                  </div>
                            </div>
                            )
                           })
                           :<div>No Media...</div>
                           }
                            
                        </div>
                        {open && (
                          <div className="slider">
                            <FontAwesomeIcon
                              icon={faCircleXmark}
                              className="close"
                              onClick={() => setOpen(false)}
                            />
                            <FontAwesomeIcon
                              icon={faAngleLeft}
                              className="arrow1 "
                              onClick={() => handleMove("l")}
                            />
                            <div className="sliderWrapper">
                              <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
                            </div>
                            <FontAwesomeIcon
                              icon={faAngleRight}
                              className="arrow2"
                              onClick={() => handleMove("r")}
                            />
                          </div>
                        )}
                        <br/>
                        <br/>
                        <br/>

                </div>

                <div>
                
                </div>

            </div>
      </section>
     </div>
     </div>
    
  )
}
