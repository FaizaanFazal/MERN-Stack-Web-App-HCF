import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { axiosInstance } from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AdminEditProject() {
    const location = useLocation();
    const toastId = React.useRef(null);
    const rowdata=location.state.row;
    const [imagefile,setImagefile]=useState("") 
   
    let arr=[]
  
    const[data,setData]=useState({
        coverphoto:rowdata.coverphoto, name:rowdata.name,location:rowdata.location,date:rowdata.date,chapter:rowdata.chapter,funds:rowdata.funds,photos:rowdata.photos,projectManager:rowdata.projectManager,description:rowdata.description
    });
    const seturlcloud= async (res)=>{
      const url=res.data.secure_url;
      name= "coverphoto";
      setData({...data,[name]:url});
      
    }
    const uploadimage=()=>{
      const formData=new FormData()
      formData.append("file",imagefile)
      formData.append("upload_preset","ml_default ")
       axios.post("https://api.cloudinary.com/v1_1/dv4owjcms/image/upload",formData).then(seturlcloud).catch((error)=> console.log(error))
  }

  const setphotolink= (res)=>{
    const url=res.data.secure_url;
    data.photos.push(url);   
  }
    let name,value;

    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;

        setData({...data,[name]:value});
    };
   
    const handleFile = (e) =>{
      let images = e.target.files;
      var i;
      
      for( i=0;i<e.target.files.length;i++){
        arr.push(images[i]);
       }
       console.log(arr)
       const uploaders = arr.map(file => {
        // Initial FormData
        const formData = new FormData();
        formData.append("file",file)
        formData.append("upload_preset","ml_default ")
        return axios.post("https://api.cloudinary.com/v1_1/dv4owjcms/image/upload",formData).then(setphotolink).catch((error)=> console.log(error))      
      }
      )
    
      // Once all the files are uploaded 
      axios.all(uploaders).then(() => {
        if(! toast.isActive(toastId.current)) {
          toastId.current = toast.success("All images Uploaded Succesfully!", {position: toast.POSITION.TOP_CENTER});
        }
      });
       
  };
    const handleremove=()=>{
        data.photos.splice(0,data.photos.length);
      
        if(! toast.isActive(toastId.current)) {
          toastId.current = toast.error("All link of images removed!", {position: toast.POSITION.TOP_CENTER});
        }
    }
    const PostData= async (e)=>{
        e.preventDefault();
        if(!data.name || !data.location  || !data.coverphoto || !data.date || !data.chapter || !data.description){
          if(! toast.isActive(toastId.current)) {
            toastId.current = toast.warning("Please Fill the required fields", {position: toast.POSITION.TOP_CENTER});
          }
        }
        else{
          // const {coverphotox,namex,locationx,datex,chapterx,fundsx,photosx,projectManagerx,descriptionx}=data;
         try {
          await axiosInstance.put("/projects/"+rowdata._id,data);
         
          if(! toast.isActive(toastId.current)) {
            toastId.current = toast.success("Record Updated Scuccesfully. Status", {position: toast.POSITION.TOP_CENTER});
          }
         } catch (error) {
          console.log(error)
         }
          
          
        }
    }
    const preventMinus = (e) => {
      if (e.code === 'Minus') {
          e.preventDefault();
      }
  };

  return (
    <div className='container mt-3'>
    <h4 className='text-center m-3 mb-4'>Updating Project {rowdata.name}</h4>
    <div>
    <ToastContainer />
  </div>
    <p className='text-danger'>NOTE: remove all links if want to delete older pics, otherwise leave it be or may add more. Don't need to set date again if don't want to update it!</p>
    <form method='POST'>
    <div className="row g-3">
    <div className="col-sm-6 ">
    <label>coverphoto</label>
    <input type="file" name='coverphoto' className="form-control" placeholder="cover photo link" aria-label="First name"
    onChange={(e)=> setImagefile(e.target.files[0])}
    />
    </div>
    <div className="col-sm-6">
    <button className='btn  btn-outline-success m-1' type='button' onClick={uploadimage}>ChangeCover</button>
    <img src={data.coverphoto} alt='cover' width={100} height={100} />
    </div>
  </div>
    <div className="row g-3">
    <div className="col-sm-6">
    <label>Name of Project:</label>
      <input type="text" name='name' className="form-control" placeholder="First name" aria-label="First name"
      value={data.name}
      onChange={handleInputs}
      />
    </div>
    <div className="col-sm-6">
    <label>Location:</label>
      <input type="text" name='location' className="form-control" placeholder="Last name" aria-label="Last name"
      value={data.location}
      onChange={handleInputs}
      />
    </div>
  </div>
  <div className="row g-3">
  <div className="col-sm-6">
  <label>Chapter:</label>
  <select class="form-select" id="autoSizingSelect" 
  name="chapter"
  value={data.chapter}
 onChange={handleInputs}>
 
  <option selected value="Rawalpindi">Rawalpindi</option>
  <option value="Peshawar">Peshawar</option>
  <option value="Bahawalpur">Bahawalpur</option>
</select>
  </div>
  <div className="col-sm-6">
  <label>Date:</label>
    <input type="Date" name='date' className="form-control" placeholder="Last name" aria-label="Last name"
    value={data.date}
    onChange={handleInputs}
    />
  </div>
</div>
<div className="row g-3">
<div className="col-sm-6">
<label>Project Manager:</label>
  <input type="text" name='projectManager' className="form-control" placeholder="First name" aria-label="First name"
  value={data.projectManager}
  onChange={handleInputs}
  />
</div>
<div className="col-sm-6">
<label>Funds:</label>
  <input type="number" name='funds' min="0"  onKeyPress={preventMinus} className="form-control" placeholder="Last name" aria-label="Last name"
  value={data.funds}
  onChange={handleInputs}
  />
</div>
</div>

<div className="row g-3">
<div className="col">
<label>Description:</label>
  <textarea type="text" rows={3} name='description' maxLength={250} className="form-control" placeholder="Description Max length 250 character" aria-label="First name"
  value={data.description}
  onChange={handleInputs}
  />
</div>

</div>
<div class="customrow bd-highlight mb-1" >
  
{ data.photos.length>0 ? data.photos.map((data,i)=>{
  return(
     <div className='photoscont' key={i} >
          <img src={data} alt="uploadiedimg" />
     </div>
  )
}):<div>no images uploaded</div>
}

</div>
<div className="row g-3 flex-row align-bottom">
<div className="col-sm-6">
<label>Photos links:</label>
<input type="file" className="form-control"  multiple accept="image/*" placeholder="Add photos" aria-label="First name"
onChange={(e)=>handleFile(e)}
/>
  </div>
  <div className='col-sm-6'>

  <button className='btn btn-outline-danger rounded-5 btnm-3 mx-1'
  type='button'
  onClick={handleremove}
  >Remove all</button>
  </div>


</div>


  <div className="row g-3 mt-2  justify-content-center">
  <button type="submit" className="btn btn-primary w-25 rounded-5 " onClick={PostData}>Update Project</button>
</div>
    
</form>
</div>
  )
}
