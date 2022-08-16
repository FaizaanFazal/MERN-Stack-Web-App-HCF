import React from 'react'
import "./admindashboard.css"
import Adminnav from '../../components/dashboard/Adminnav'
import AdminEditProject from '../../components/dashboard/AdminEditProject'


export default function admindashboard() {
  return (
    <div className='bgcolor'>
       <Adminnav/>
       <AdminEditProject/>
    </div>
  )
}
