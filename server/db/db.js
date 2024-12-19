import mongoose from "mongoose";
// this is npm library for using .env file
import 'dotenv/config'

const connectToMongoDB = async () => {
    try{
        await mongoose.connect(process.env.Mongo);
        console.log("connected to MongoDB");
    }
    catch(error){
        console.log("Error connecting to MongoDB",error.message);
        
    }

};

export default connectToMongoDB;