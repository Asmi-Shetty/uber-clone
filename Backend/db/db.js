 const mongoose = require('mongoose');


 function connectToDb() {
    mongoose.connect(process.env.DB_CONNECT, 
          
        ).then(() => {
       
        console.log('Connected to DB');
        
    }).catch(err => console.log(err));
 }
 //const connectToDb = require('./connectToDb');

connectToDb();














/*import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MONGODB connection failed", error);
        process.exit(1)
    }
}

export default connectDB

/*









import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const uri = 'mongodb+srv://askmeshetty2003:YEoJfV6Qw39VMy5R@cluster0.n6tbq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit process on failure
  }
};

export default connectDB

*/
