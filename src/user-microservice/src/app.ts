import express from "express";
import connectDB from "../../shared/index";
import "dotenv/config"

import userRoute from "./routes/user-route";

const app = express();

app.use(express.json());
app.disable("x-powered-by");

app.use("/users", userRoute);

connectDB();

const port: number = Number(process.env.USER_PORT) || 3000;
app.listen(port, ()=>{ console.log(`🧸 User service running on: http://localhost:${port}`)})