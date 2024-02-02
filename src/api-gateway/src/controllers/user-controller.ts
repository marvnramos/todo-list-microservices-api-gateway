import { Request, Response } from 'express';
import axios from 'axios';
import "dotenv/config";

const user = process.env.USER_SERVICE_URL || "http://localhost:3000";

class UserController {

  static async create(req: Request, res: Response) {
    try {
        const response = await axios.post(`${user}/users`, req.body);
        res.status(201).json(response.data);

    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  static async login(req: Request, res: Response) {}
  static async update(req: Request, res: Response) {}
  static async delete(req: Request, res: Response) {}
}

export default UserController;