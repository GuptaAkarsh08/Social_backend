import mongoose from 'mongoose';

import { db_name } from '../constant.js';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.uri}/${db_name}`) // It gives us a return object
        console.log(`MongoDb Connected!\n Db Host: , ${connectionInstance.connection.host}`);

    } catch (error) {
      console.log("Mongo Db Connection Error",error);
      process.exit(1) // What is this?   
    }
}


export default connectDB;