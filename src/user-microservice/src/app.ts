import express from "express";
import connectDB from "./config/mongodb-config";
import "dotenv/config"
import cors from "cors";

import userRoute from "./routes/user-route";

const app = express();

app.use(express.json());
app.use(cors());
app.disable("x-powered-by");

app.use("/users", userRoute);

connectDB();

const port: number = Number(process.env.USER_PORT) || 3000;
app.listen(port, ()=>{ console.log(`🧸 User server running on: http://localhost:${port}`)})