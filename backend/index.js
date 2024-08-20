import express from "express";
import dotenv from "dotenv";
import { mongoConnection } from "./config/db.js";
import userRouter from "./Routes/users.js";
import authRouter from "./Routes/auth.js";
import hotelsRouter from "./Routes/rooms.js";
import roomsRouter from "./Routes/hotels.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

mongoConnection();

//Middlewares

//ROUTES
app.post("/users",userRouter)
app.post("/auth",authRouter)
app.post("/hotels",hotelsRouter)
app.post("/rooms",roomsRouter)

app.listen(PORT, () => {

  console.log(`App running on PORT ${PORT} `);
});
