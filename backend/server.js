import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js'

dotenv.config(); // Initialize dotenv to read environment variables from the .env file

const app = express(); // Initialize Express application

const PORT = process.env.PORT || 5000 // Set the port, default to 5000 if not provided in environment variables

const __dirname = path.resolve(); // Resolve the absolute path of the current directory

app.use(express.json()); // Middleware to parse incoming JSON requests

app.use("/api/products", productRoutes); // Use productRoutes for all API calls starting with /api/products

// Check if the environment is production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    })
}

// Start the server and connect to the database
app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at http://localhost:` + PORT);
});

// hl43FAFpuIavHFml