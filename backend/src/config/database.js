// It connects your backend to the database!

import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = 
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('\n MongoDB connected !!! ')
        console.log($connectionInstance.connection.host);


    } catch (error) {
        console.log("MongoDB connection failed", error);
        process.exit(1)
        // which stops the Node.js application because the app can't work without the database.
    }
}

export default connectDB;