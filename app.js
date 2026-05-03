import express from "express";

const app = express(); // Create an express app

app.use(express.json());

// Import routes
import userRouter from "./routes/userRoute.js";
import postRouter from "./routes/postRoute.js";

// Routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

// Example route: http://localhost:4000/api/v1/users/register

export default app;