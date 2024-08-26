import express from "express";
import dotenv from "dotenv";
import { mongoConnection } from "./config/db.js";
import userRouter from "./Routes/users.js";
import authRouter from "./Routes/auth.js";
import roomsRouter from "./Routes/rooms.js";
import hotelsRouter from "./Routes/hotels.js";
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

mongoConnection();

app.use(cookieParser());
app.use(express.json());

//Middlewares

//ROUTES
app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/hotels", hotelsRouter);
app.use("/rooms", roomsRouter);

app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT} `);
});
