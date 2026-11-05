import mongoose from "mongoose";
import dotenv from "dotenv";



const MONGO_URI = process.env.MONGO_URI;

export const dbConnect = async () => {
  try {
    console.log("Mongo URI exists:", !!MONGO_URI);
    console.log("Mongo URI protocol:", MONGO_URI?.split(":")[0]);

    await mongoose.connect(MONGO_URI);

    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB Error:", error.message);
    process.exit(1);
  }
};