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
  static async login(req: Request, res: Response) {
    try{
      const response = await axios.post(`${user}/users/login`, req.body);
      res.status(200).json(response.data);
    }catch(error){
      console.error('Error during user login:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  static async update(req: Request, res: Response) {
    try{
      const id = req.params.id;
      const response = await axios.patch(`${user}/users/edit/${id}`, req.body);
      res.status(200).json(response.data);
    }catch(error){
      console.error('Error during user update:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  static async delete(req: Request, res: Response) {
    try{
      const id = req.params.id;
      const response = await axios.delete(`${user}/users/delete/${id}`);
      res.status(200).json(response.data);
    }catch(error){
      console.error('Error during user delete:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  static async getAllUsers(req: Request, res: Response) {
    try{
      const response = await axios.get(`${user}/users/getAll`);
      res.status(200).json(response.data);
    }catch(error){
      console.error('Error during get all users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  static async getUserById(req: Request, res: Response) {
    try{
      const id = req.params.id;
      const response = await axios.get(`${user}/users/get/${id}`);
      res.status(200).json(response.data);
    }catch(error){
      console.error('Error during get user by id:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}

export default UserController;