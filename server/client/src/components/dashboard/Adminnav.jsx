import React from 'react'
import './dashboard.css'

export default function Adminnav() {
  const logout=()=>{
    window.localStorage.clear();
    window.location.reload();
  }
  return (
    <div className='container admincontainer'>
        <div className='text-center'>Welcome Admin</div>
        <button className="btn btn-danger rounded-2 adminlogout" onClick={logout}>Logout</button>
    </div>
  )
}
