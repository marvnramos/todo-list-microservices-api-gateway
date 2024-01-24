import express from 'express';
import connectDB from './shared/index';
import "dotenv/config";

const app = express();

app.use(express.json());
app.disable("x-powered-by");



connectDB();
app.listen(process.env.PORT || 3000, ()=>{console.log(`♿ Server is running on: http://localhost:${process.env.PORT}`)});