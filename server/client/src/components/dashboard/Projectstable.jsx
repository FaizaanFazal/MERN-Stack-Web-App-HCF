import React, { useEffect } from 'react'
import { useState } from 'react'
import useFetch from '../../hooks/useFetch';
import DataTable from "react-data-table-component"
import { Link ,useNavigate} from "react-router-dom"
import './dashboard.css'
import { axiosInstance } from '../../config';

export default function Projecttable() {

  const navigate = useNavigate();
const[projects,setProjects]=useState([]);
const[filterprojects,setFilterprojects]=useState([]);
const[search,setSearch]=useState("");


// const location=useLocation();
// const path=location.pathname.split("/")[1];
const path="projects"
var {data,loading,error}= useFetch(`/${path}`)
var listf=[];
//using location to get path because if we in future we may need to delete project from some other route



const getProjects=async()=>{
  try {
    setProjects(data)
    setFilterprojects(data)
  } catch (error) {
    console.log(error)
  }
};
const refreshPage=()=> {
  window.location.reload();
}
const handleDelete= async (id)=>{
  alert(id)
  
  if (window.confirm("Delete?"))
{ 
  try {
    await axiosInstance.delete(`/${path}/${id}`,{ data:{}});
    listf = filterprojects.filter(item => item._id !== id);
    setFilterprojects(listf);
    // refreshPage()
  } catch (error) {
    console.log(error) 
  }
}

}
const handleEdit=(row)=>{
  navigate('/editproject', { state: { row } });

}

const columns=[
  {
    name:"Cover Photo" , //header name
    selector:(row)=><img width={50} height={50} src={row.coverphoto} alt="cover" className='rounded-3 p-1' />,
    width:60,
  
    
  } ,
  {
    name:"Project Name" , //header name
    selector:(row)=>row.name,
    sortable: true,

  },
  {
    name:"Date" , //header name
    selector:(row)=>row.date.toString().slice(0,10),
    sortable: true,
    
  },
  {
    name:"Location" , //header name
    selector:(row)=>row.location,
    sortable: true,
    
  },
  {
    name:"Action" , //header name
    cell:(row)=>
    <div>
     <button className='btn btn-outline-primary  mx-2' onClick={()=>handleEdit(row)}  >Edit</button> 
     <button className='btn btn-outline-danger mx-2' onClick={()=>handleDelete(row._id)} >Delete</button> 

     </div>
   
   

    
  }
 
];
useEffect(()=>{
  getProjects();

},[data]);
 

  useEffect(()=>{
  const result= projects.filter(projects=>{
    return projects.name.toLowerCase().match(search.toLowerCase());
  })
  setFilterprojects(result)

},[search])

  const customStyles = {

  title:{
    style:{
      textAlign:"center",
    }
  },
  rows: {
      style: {
          minHeight: '20px', // override the row height
      },
  },
  headCells: {
      style: {
          paddingLeft: '8px', // override the cell padding for head cells
          paddingRight: '8px',
          fontWeight:'bolder',
          fontSize:"20px",
          color:"gray",
          borderBottom:"3px solid white"
      },
  },
  cells: {
      style: {
          paddingLeft: '8px', // override the cell padding for data cells
          paddingRight: '8px',
          fontWeight:'bold',
          fontSize:"14px",
      },
  },
};
  return (
    <div className='container'>
            <div className='text-center mt-3 mb-3'> <button className='btn btn-success rounded-1'><Link to='/addproject'>Add New Project</Link></button> </div>
           {!filterprojects.length >0 ? <div className='text-center'>loading....</div> : <div>
            <DataTable 
            title="All Projects"
            fixedHeader
             columns={columns}
              data={filterprojects} 
              customStyles={customStyles}
              striped
              responsive
              highlightOnHover
              theme='dark'
              subHeader
              subHeaderComponent={
                <input
                type="text"
                placeholder='Search here'
                className='w-25 form-control headerm'
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                />
              }
              pagination/>
             </div>
            }
            </div>
    

  )
}
