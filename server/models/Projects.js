import mongoose from "mongoose";
const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    format: "%d-%m-%Y",
    required: true,
  },
  chapter: {
    type: String,
    required: true,
  },
  funds: {
    type: Number,
    min:0
  },
  coverphoto: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  projectManager: {
    type: String,
    required: true,
  },
  
  description: {
    type: String,
    required: true,
  },

},
{timestamps:true}
);

export default mongoose.model("Projects", ProjectSchema)