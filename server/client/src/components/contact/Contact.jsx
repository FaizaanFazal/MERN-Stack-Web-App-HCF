import React, { useState } from 'react'
import './contact.css'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {
  const[data,setData]=useState({
    Name:"",Useremail:"",Whatsapp:"",Subject:"",Message:""
});
const toastId = React.useRef(null);

let name,value;
const handleInputs=(e)=>{
  name=e.target.name;
  value=e.target.value;
  setData({...data,[name]:value});
};
  
  const sendEmail =(e)=>{
    if(!data.Name || !data.Useremail  || !data.Subject || !data.Message){

      if(! toast.isActive(toastId.current)) {
        toastId.current = toast.warning("Fill in the Required Field", {position: toast.POSITION.TOP_CENTER});
      }
    }
    else{
    e.preventDefault();
    //serviceid,tempelateid,useror public id
    emailjs.sendForm(
      'service_9ayfagc',
      'template_ti5oghr',
        e.target.form,
      '6VN-UYYZTptWtwlkK',
     ).then(res=>{
      if(! toast.isActive(toastId.current)) {
      toastId.current = toast.success("Mail Sent Successfully", {position: toast.POSITION.TOP_CENTER});
    }}).catch(err=>{console.log(err)})
  }
}

  return (
    <form method='POST'>
    <div id='Contactsfrom'>
    <div className="background">
    
    <div className="container">
    <h3 className='text-center text-white'>Volunteer/Collaborate/Query? Send Now</h3>
    <div>
        <ToastContainer />
      </div>
      <div className="screen p-2">
        <div className="screen-header">
          <div className="screen-header-left">
            
            <div className="screen-header-button maximize"></div>
            <div className="screen-header-button minimize"></div>
          </div>
          <div className="screen-header-right">
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
          </div>
        </div>
        <div className="screen-body">
          <div className="screen-body-item left">
            <div className="app-title">
              <span>CONTACT</span>
              <span>US</span>
            </div>
            <div className="app-contact">CONTACT INFO : +0346-7143002</div>
          </div>
          <div className="screen-body-item2">
            <div className="app-form">
              <div className="app-form-group">
                <input className="app-form-control" name='Name' type="text" placeholder="NAME" 
                 onChange={handleInputs}/>
              </div>
              <div className="app-form-group">
                <input className="app-form-control" name='Useremail' type="email" placeholder="EMAIL"
                onChange={handleInputs}/>
              </div>
              <div className="app-form-group">
                <input className="app-form-control" name='Whatsapp' type="number" placeholder="WHATSAPP (optional)"
                onChange={handleInputs}/>
              </div>
              <div className="app-form-group message">
              <input className="app-form-control" name='Subject' type="text" placeholder="Subject"
              onChange={handleInputs}/>
            </div>
              <div className="app-form-group message">
                <textarea className="app-form-control" type="text" rows={3}  name='Message' placeholder="MESSAGE"
                onChange={handleInputs}/>
              </div>
              <div className="app-form-group buttons">
              
                <button className="app-form-button" type='button' onClick={(e)=>sendEmail(e)} >SEND</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
   
  </div>
      </div>
      </form>
  )
}
