import express from 'express';
// import  userRoutes  from './routes/index';
import userRoutes from './routes/user-route';
import "dotenv/config";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.use('/users', userRoutes);
// app.use('/tasks', taskRoutes);

app.listen(PORT, () => {
  console.log(`☝️ 🤓 API Gateway is running on: http://localhost:${PORT}`)
});