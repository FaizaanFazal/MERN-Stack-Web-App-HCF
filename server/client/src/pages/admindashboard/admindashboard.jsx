import React from 'react'
import "./admindashboard.css"
import Adminnav from '../../components/dashboard/Adminnav'
import Projectstable from '../../components/dashboard/Projectstable'


export default function admindashboard() {
  return (
    <div className='bgcolor'>
       <Adminnav/>
       <Projectstable/>
    </div>
  )
}
