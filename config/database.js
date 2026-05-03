import mongoose from "mongoose";

const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB...");
        
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI2);

        console.log(`MongoDB connected: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

export default connectDB;