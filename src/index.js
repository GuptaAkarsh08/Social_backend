import express from "express";
import dotenv  from 'dotenv'
import connectDB from "./db/index.js";


const app = express();
dotenv.config({path:'./env'})

// (async() => {
//     try{
//       mongoose.connect(`${process.env.MONGODB_URI}/${}`)
//       app.on("error",(error) =>{
//         console.log("Error:"+error)
//         throw error;
//       })
//       app.listen(process.env.PORT,() => {
//          console.log(`server is up and Running! at ${process.env.PORT}`);
//       })
//     }

//     catch(error){
//        console.log("ERROR: ",error);
//     }
// })()

connectDB()