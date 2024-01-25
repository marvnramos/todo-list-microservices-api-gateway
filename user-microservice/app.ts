import express from 'express';
import "dotenv/config";
import userRoute from "./src/routes/user-route"

const app = express();

app.use(express.json());
app.disable("x-powered-by");

app.use("/users", userRoute);

app.listen(process.env.USER_PORT, ()=>{ console.log(`User service running on: http://localhost:${process.env.USER_PORT}`)})