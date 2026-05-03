import express from "express";

const app = express(); // Create an express app

app.use(express.json());

// Import routes
import userRouter from "./routes/userRoute.js";

// Routes declaration
app.use("/api/v1/users", userRouter);

// Example route: http://localhost:4000/api/v1/users/register

export default app;