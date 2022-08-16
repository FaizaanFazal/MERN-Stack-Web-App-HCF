import React, { useState } from 'react'
import axios from 'axios'

export default function Checkcloud() {
    const [imagefile,setImagefile]=useState("")


    const doWhateverYouWant= async (res)=>{
        console.log(res.data.secure_url)
    }

    const uploadimage=()=>{
        const formData=new FormData()
        formData.append("file",imagefile)
        formData.append("upload_preset","ml_default ")
         axios.post("https://api.cloudinary.com/v1_1/dv4owjcms/image/upload",formData).then(doWhateverYouWant).catch((error)=> console.log(error))
    }
    
  return (
    <div className='text-center'>
    
    
        <div>
        <input  type="file" onChange={(e)=>{
                    setImagefile(e.target.files[0])
        }} />

        <button onClick={uploadimage} > send</button>
        </div>
    
    
    </div>
  )
}
