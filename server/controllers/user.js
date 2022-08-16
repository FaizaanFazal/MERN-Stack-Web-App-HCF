import Users from "../models/User.js";
//create project
export const updateuser=async(req,res,next)=>{
    
    
    try {
        const updateUser =await Users.findByIdAndUpdate(req.params.id,{$set:req.body})
        res.status(200).json(updateUser)
        
    } catch (error) {
        next(error)
    }
}