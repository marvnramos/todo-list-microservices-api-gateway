import express from 'express';
import userRoutes from './routes/user-route';
import taskRoutes from './routes/task-route';
import connectDB from './config/mongodb-config';
import "dotenv/config";
// import axios from 'axios';


const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/tasks', taskRoutes);

connectDB();
app.listen(PORT, () => {
  console.log(`☝️ 🤓 API Gateway is running on: http://localhost:${PORT}`)
});
