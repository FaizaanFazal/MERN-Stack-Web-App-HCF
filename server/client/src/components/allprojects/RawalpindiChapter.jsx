import React from 'react'
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';
import {  useNavigate } from 'react-router-dom';


export default function RawalpindiChapter() {
  const navigate = useNavigate();
    const[projectsofR,setProjectsofR]=useState([])
    const {data,loading,error}= useFetch("/projects/chapter/Rawalpindi")


    const dateformat = (list) =>
  list.map(item => ({
    ...item,
    date: new Date(item.date).toLocaleDateString('en-gb', {day:"numeric", month:"short",year:"numeric"}) 
    // sets isRecieved to true or false based on the equalty comparison
  }));
    
    let sorteddata;
    const setproject=(data)=>{
        console.log(data)
//filter out upcomming dates than sort than slice
        const today = new Date().getTime();
        const filterOutUpcomming = data.filter((items) => new Date(items.date).getTime() < today);
        console.log(filterOutUpcomming)

        sorteddata = filterOutUpcomming.sort((a,b) =>  new Date(b.date) - new Date(a.date)); //descending 
        //  sorteddata = data.sort((a, b) => a.date - b.date) //ascending
        let finalList
      try {
         finalList=dateformat(sorteddata) //format date
      } catch (error) {
        console.log(error)
      }
        setProjectsofR(finalList)
    }

    const handleClick=(Projectcarddetails)=>{
      navigate('/projectdetails', { state: { Projectcarddetails } });
    
    }


    useEffect(()=>{
        setproject(data);
  },[data])
  
  return (
    <>
    <div className='headingwrap'>
    <div className='apheading'>Rawalpindi Chapter</div>
    </div>
    <div className='p-3 my-3 apcardscont'>
    <div className='apcardssubcont'> 
        {  projectsofR.length>1 ?
             projectsofR.map(Projectcarddetails => {
                return(
                       
                            <div className='apcard position-relative mt-2 '>
                                <div className='apcardimg'><img src={Projectcarddetails.coverphoto} alt='coverphoto' onClick={()=>handleClick(Projectcarddetails)} /></div>
                                <div className='apcardtext'>
                                <h3>
                                {Projectcarddetails.name} <span>({Projectcarddetails.date})</span>
                              </h3>
                                </div>
                            </div>
                        
                        )
                })
            
            : <div className='text-center text-secondary'>loading..</div>
        }
        </div>

    </div>
    </>
  )
}
