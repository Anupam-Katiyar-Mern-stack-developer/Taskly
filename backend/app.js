import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import userRoutes from "./routes/user.routes.js";
dotenv.config();
const app = express();

// middleware
app.use(express.json());

app.use(helmet());
app.use(cors());

// routes

app.use("/api/user", userRoutes);

export default app;
