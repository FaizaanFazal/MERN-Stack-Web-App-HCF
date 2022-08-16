import React ,{ useEffect, useState } from 'react';
import "./about.css"
import useFetch from '../../hooks/useFetch';
import img1 from '../../images/b4.webp'

//info section
const About = () => {
  const[upcommingprojects,setUpcommingprojects]=useState([])
  const {data,loading,error}= useFetch("/projects")
  let sorteddata,sorteddatalimit;

  const dateformat = (list) =>
  list.map(item => ({
    ...item,
    date: new Date(item.date).toLocaleDateString('en-gb', {day:"numeric", month:"short"}) 
    // sets isRecieved to true or false based on the equalty comparison
  }));

  const setupcommingprojects=(data)=>{
    

//filter out upcomming dates than sort than slice
      var today = new Date().toLocaleDateString();
      // try {
      //   var date2 = new Date(data[6].date).toLocaleDateString();
      //   console.log(Date.parse(date2))
      //   console.log(Date.parse(today))
      // } catch (error) {
      //   console.log(error)
      // }
     
      var filterUpcomming = data.filter((items) => Date.parse(items.date) >= Date.parse(today));
      sorteddata = filterUpcomming.sort((a,b) =>  new Date(b.date) - new Date(a.date)); //descending order
      // sorteddata = filterUpcomming.sort((a, b) => a.date - b.date) //ascending
      sorteddata = sorteddata.reverse();
      sorteddatalimit = sorteddata.slice(0, 2); // only first two latest upcomming projects
      let finalList
      try {
         finalList=dateformat(sorteddatalimit) //format date
      } catch (error) {
        console.log(error)
      }
      setUpcommingprojects(finalList)
  }


  useEffect(()=>{
    setupcommingprojects(data);
},[data])

  return (
    <>
      <div className='about'>
      <div className="cover">
     
          <div className="title">
            <h3>Info Section</h3>
          </div>
          <div className="flex mt-5 mb-5">
            <div className="leftpanel"> 
              <h2>Ceo's Message</h2>
                <hr className="hline"/>
                <div className="sub-cont">
                <div className="img">
                <img src={img1} alt="pic" />
                </div>
                <div className="msg"> "Lorem espanol da tekhri maka nanu sa li fa. jazba dy ty kita sy ana pira kum,lorem espanol da tekhri maka nanu sa li fa. jazba dy ty kita sy ana pira kumlorem espanol da tekhri maka nanu sa li fa. jazba dy ty kita sy ana pira kumlorem espanol da tekhri maka nanu sa li fa. jazba dy ty kita sy ana pira kum." </div>

                </div>
            </div>
            <div className="rightpanel"> 
            
            <h2>Upcomming Events</h2>
            <hr className="hline"/>
            {
              upcommingprojects.length >0 ?
              upcommingprojects.map(Projectcarddetails => {
                return (
                  <div className="aboutcard" key={Projectcarddetails._id}>
                  <div className="cardleft">
                      <div className="cardimg"> <img  src={Projectcarddetails.coverphoto} alt="" />
                      
                       </div> 
          
                      <div className="carddate">{Projectcarddetails.date.toString().slice(0,10)}</div> 
                  </div>
                  <div className="cardright">
                    <div className="eventName">{Projectcarddetails.name}</div>
                    <div className="location"> <span>Location: </span>{Projectcarddetails.location}</div>
                    <hr/>
                    <div><span>Description: </span> {Projectcarddetails.description}</div>
                    <div className="cardbtn"> <button className="cbtn">Volunteer Now</button> </div>
                  </div>
                 
              </div>

                )
            })
            
             
              :<div className='text-center text-secondary'>Loading...</div>
            }
                {
                  //<div className="aboutcard">
                //     <div className="cardleft">
                //         <div className="cardimg"> <img  src="https://cdn2.hubspot.net/hubfs/322787/Mychefcom/images/BLOG/Header-Blog/photo-culinaire-pexels.jpg" alt="" />
                        
                //          </div> 
            
                //         <div className="carddate">12 Jan</div> 
                //     </div>
                //     <div className="cardright">
                //       <div className="eventName">Kaka Storming Session</div>
                //       <div className="location"> <span>Location: </span>Saif Orphanage Gulberg Chowk</div>
                //       <hr/>
                //       <div><span>Description: </span> lorem espanol da tekhri maka nanu sa li fa. jazba dy ty kita sy ana pira kum,lorem espanol da tekhr. orem espanol da tekhri maka nanu sa li fa. jazba dy ty kita sy ana pira kum,lorem espanol da tekhr.</div>
                //       <div className="cardbtn"> <button className="cbtn">Volunteer Now</button> </div>
                //     </div>
                   
                // </div>
              }



            </div>
          </div>
          
          </div>
      </div>
      
    </>
  )
}

export default About
