import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

// Create an Express application instance
const app = express();

// Use port from environment or default to 5000
const PORT = process.env.PORT || 5000;

// Get absolute path to the current directory
const __dirname = path.resolve();

// Middleware to parse JSON request bodies
app.use(express.json());

// Mount product-related routes at /api/products
app.use("/api/products", productRoutes);

// Serve frontend assets and handle routing in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "frontend", "dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    });
}

// Start server and establish database connection
app.listen(PORT, () => {
    connectDB();
    console.log(`Server started at http://localhost:${PORT}`);
});
