import mongoose from 'mongoose';

/**
 * @desc   Connect to the MongoDB database
 * @route  N/A (No route, this is a function that runs during app initialization)
 * @access Private (It's used internally to establish the DB connection)
 */

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`); 
    } catch (error) {
        console.log(`Error: ${error.message}`); 
        process.exit(1); 
    }
}