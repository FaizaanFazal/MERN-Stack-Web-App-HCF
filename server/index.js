import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoute from "./routes/user.js"
import authRoute from "./routes/auth.js"
import projectRoute from "./routes/projects.js";
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const app=express()
dotenv.config()
const connect=async ()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("connected to mongodb");
      } catch (error) {
        console.log(error)
      }
    };
    mongoose.connection.on("disconnected",()=>{
        console.log("mongoDb disconnected!")
    })
   
    app.use(cors())
    app.use(cookieParser())
    app.use(express.json())
    //middlewares 
    app.use("/server/user",userRoute)
    app.use("/server/auth",authRoute)
    app.use("/server/projects",projectRoute)


    app.use((err, req, res, next) => {
        const errorStatus = err.status || 500;
        const errorMessage = err.message || "Something went wrong!";
        return res.status(errorStatus).json({
          success: false,
          status: errorStatus,
          message: errorMessage,
          stack: err.stack,
        });
      });
      app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

      const PORT = process.env.PORT || 8081;

app.listen(PORT ,()=>{
    connect()
    console.log("connected to backend")
})

