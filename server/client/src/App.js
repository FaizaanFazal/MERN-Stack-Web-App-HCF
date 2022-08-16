import "./App.css"
import { BrowserRouter,
  Routes,
  Route,
  Navigate, } from "react-router-dom"
import Contact from "./components/contact/Contact"

import Home from "./pages/home/Home"
import Account from "./pages/accounts/account"
import Adminlogin from "./pages/adminlogin/Adminlogin"
import Admindashboard from "./pages/admindashboard/admindashboard"
import Adminaddproject from "./pages/admindashboard/adminaddproject"
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import AdminEditProject from "./pages/admindashboard/admineditproject"
import ProjectsChapterWise from "./pages/projectsChapterwise/projectsChapterWise"
import ProjectDetails from "./pages/projectDetails/projectDetails"
import AboutUs from "./pages/aboutus/AboutUs"
import Checkcloud from "./pages/Checkcloud"
function App() {

  const ProtectedRoute=({children})=>{
    const {user} =useContext(AuthContext);
    if(!user){
      return <Navigate to="/login"/>;
    }
    return children
  }
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/login' element={ 
              <Adminlogin/>
            } />
            <Route  path='/dashboard' element={ 
              <ProtectedRoute>
                <Admindashboard/>
              </ProtectedRoute>
            } />
            <Route  path='/addproject' element={
              <ProtectedRoute>
                <Adminaddproject/>
                </ProtectedRoute>
              } />
              <Route  path='/editproject' element={ 
                <ProtectedRoute>
                <AdminEditProject/>
                </ProtectedRoute>}
                 />

          <Route  path='/about' element={<AboutUs/>} />    
          <Route  path='/projects' element={<ProjectsChapterWise/>} />
          <Route  path='/accounts' element={<Account/>} />
          <Route  path='/contact' element={<Contact/>} />
          <Route  path='/projectdetails' element={<ProjectDetails/>} />
          <Route  path='/cloud' element={<Checkcloud/>} />
          
          
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
