import React from 'react'
import "./admindashboard.css"
import Adminnav from '../../components/dashboard/Adminnav'
import Projectstable from '../../components/dashboard/Projectstable'
import AdminAddProject from '../../components/dashboard/AdminAddProject'


export default function Adminaddproject() {

       


  return (
    <div className='bgcolor'>
       <Adminnav/>
      <AdminAddProject/>
    </div>
  )
}
