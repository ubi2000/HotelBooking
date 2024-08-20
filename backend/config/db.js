import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const mongoConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected Successfully")
  } catch (err) {
    console.log("Not Connected to mongo", err);
  }
  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });
};


