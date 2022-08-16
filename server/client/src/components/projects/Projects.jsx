import Projectcard from '../projects/Projectcard'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// import userPic from '../../img/01.jpg'
import './Projects.css'
import useFetch from '../../hooks/useFetch';
import { useEffect, useState } from 'react';

const Projects =  () => {

    const[projectsdata,setProjectsdata]=useState([])
    const {data,loading,error}= useFetch("/projects")

    let sorteddata,sorteddatalimit;
    const setprojects=(data)=>{

//filter out upcomming dates than sort than slice
        const today = new Date().getTime();
     

        const filterOutUpcomming = data.filter((items) => new Date(items.date).getTime() < today);
        // console.log(filterOutUpcomming)

        sorteddata = filterOutUpcomming.sort((a,b) =>  new Date(b.date) - new Date(a.date)); //descending order
        //  sorteddata = data.sort((a, b) => a.date - b.date) //ascending
        // console.log(sorteddata)
         sorteddatalimit = sorteddata.slice(0, 8);
        // console.log(sorteddatalimit) 
        setProjectsdata(sorteddatalimit)
    }
useEffect(()=>{
      setprojects(data);
},[data])

    // const projects = [
    //     {
    //         name: 'Rekob Ramya',
    //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    //         date:"12 Jan",
    //         location: 'Gulberg Chowk III',
    //         img: 'https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg'
    //     },
    //     {
    //         name: 'Brandon Savage',
    //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    //         date:"12 Jan",
    //         location: 'F-9 Park Islamabad',
    //         img: 'https://i.ibb.co/z7Kp6yr/np-file-33188.jpg'
    //     },
    //     {
    //         name: 'Steve Burns',
    //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    //         date:"12 Jan",
    //         location: 'Faizabad Rawalpindi',
    //         img: 'https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg'
    //     },
    //     {
    //         name: 'Kevin Canlas',
    //         description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
    //         date:"12 Jan",
    //         location: 'Elite school F-8',
    //         img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
    //     },
    // ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 50,
        autoplay: true,
        dots: true,
        autoplayTimeout: 4000,
        smartSpeed: 2200,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 4
            },
            2000:{
                items:4
            }
        }
    };
    return (
        <section id="project" >
        
        <div className="title">
            <h3>Projects</h3>
          </div>
          <div className="projects  ">
          <div className='probkcover pt-1 pb-1'>
            <div className="container-fluid">
                
                <div className="text-center ">
                    <h3 className="psectionTitle">Our Recent Projects</h3>
                </div>
                <div className="row  mt-5 mb-5 ">
                    <div className="col-md-12">
                 {  projectsdata.length >1 ? <OwlCarousel id="project-testimonials" className="owl-carousel owl-theme" {...options}>
                            
                             
                                 {  projectsdata.map(Projectcarddetails => {
                                        return (
                                            <Projectcard Projectcarddetails={Projectcarddetails} key={Projectcarddetails._id} />

                                        )
                                    })
                                    }
                            
                        </OwlCarousel>
                        : <div className='text-center text-secondary'>loading..</div>
                      }
                    </div>
                </div>
            </div>
            </div>
            </div>
        </section>
    );
};

export default Projects;