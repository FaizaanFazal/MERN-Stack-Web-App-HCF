import Projects from "../models/Projects.js";
//create project
export const addproject=async(req,res,next)=>{
    
    const newProject=new Projects(req.body)
    try {
        const savedProject =await newProject.save()
        res.status(200).json(savedProject)
        
    } catch (error) {
        next(error)
    }
}

//update 
export const updateproject=async(req,res,next)=>{
    
    
    try {
        const updateProject =await Projects.findByIdAndUpdate(req.params.id,{$set:req.body})
        res.status(200).json(updateProject)
        
    } catch (error) {
        next(error)
    }
}
//get by id
export const getprojectbyid=async(req,res,next)=>{
    
    try {
        const Project =await Projects.findById(req.params.id)
        res.status(200).json(Project)
        
    } catch (error) {
        next(error)
    }
}
//get by chapter
export const getprojectbychapter=async(req,res,next)=>{
    
    try {
        const Project =await Projects.find({chapter: { $eq:req.params.chapter}},{})
        res.status(200).json(Project)
        
    } catch (error) {
        next(error)
    }
}
//getall
export const getallprojects=async(req,res,next)=>{
    
    try {
        const projects =await Projects.find()
        res.status(200).json(projects)
        
    } catch (error) {
        next(error)
    }
}
//delete
export const deleteproject=async(req,res,next)=>{
    
    try {
        await Projects.findByIdAndDelete(req.params.id)
          res.status(200).json("Project deleted")
          
      } catch (error) {
          next(error)
      }
}