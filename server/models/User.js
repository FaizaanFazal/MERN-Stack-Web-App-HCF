import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique:true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
  isAdmin: {
    type: Boolean,
    Default:false
  },
},
{timestamps:true}
);

export default mongoose.model("Users", UserSchema)