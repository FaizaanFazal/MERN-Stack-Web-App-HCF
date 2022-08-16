import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext';
import {useNavigate} from 'react-router-dom'
import './Login.css'
import { axiosInstance } from '../../config';

export default function Login() {
  const [credentials,setCredentials]=useState({
    username:undefined,
    password:undefined,
  });
  const{loading,error,dispatch}=useContext(AuthContext)

  let name,value;
  const handleChange=(e)=>{
        name=e.target.name;
        value=e.target.value;

        setCredentials({...credentials,[name]:value});
  }
  const navigate= useNavigate()

  const handleClick=async (e)=>{
    e.preventDefault()
    dispatch({type:"LOGIN_START"});
    
      try {
        const res= await axiosInstance.post("/auth/login",credentials);
        if(res.data.isAdmin){
        dispatch({type:"LOGIN_SUCCESS",payload:res.data});
        navigate('/dashboard')
        }
        else{
          dispatch({type:"LOGIN_FAILURE",payload:{message:"You are not allowed"}});
        }
      } catch (error) {
        dispatch({type:"LOGIN_FAILURE",payload:error.response.data});
      }
    
  }
  return (
    <div className='loginbg'>
    <div className='logincont'>
    <form action="">
    <h1 className='text-center'>Admin Login</h1>
    <div className="mb-3 mt-3">
      <label for="email" className="form-label">UserName:</label>
      <input type="email" className="form-control" id="uname" placeholder="Enter email" 
      name="username"
      value={credentials.username}
      onChange={handleChange}
        />
    </div>
    <div className="mb-3">
      <label for="pwd" className="form-label">Password:</label>
      <input type="password" className="form-control" id="pwd" placeholder="Enter password" 
      value={credentials.password}
      name="password"
      onChange={handleChange}
      />
    </div>
    <div className="form-check mb-3">
      <label className="form-check-label">
        <input className="form-check-input" type="checkbox" name="remember"/> Remember me
      </label>
    </div>
    <div className='text-center'>
    <button type="submit" disabled={loading} onClick={handleClick} className="btn logbtn">Submit</button>
    <br></br>
    {error && <span className='text-danger'>{error.message}</span>}
    </div>
  </form>
    </div>
    </div>
  )
}
