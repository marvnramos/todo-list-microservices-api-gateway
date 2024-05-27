import { Request, Response } from 'express';
import axios from 'axios';
import "dotenv/config";

const task = process.env.TASK_SERVICE_URL || "http://localhost:8080";

class TaskController{
    static async create(req: Request, res: Response){
        try{
            const response = await axios.post(`${task}/tasks/create`, req.body);
            res.status(201).json(response.data);
        }catch(error){
            console.error('Error during task creation:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async update(req: Request, res: Response){
        try{
            const id = req.params.id;
            const response = await axios.patch(`${task}/tasks/update/${id}`, req.body);
            res.status(200).json(response.data);
        }catch(error){
            console.error('Error during task update:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async delete(req: Request, res: Response){
        try{
            const id = req.params.id;
            const response = await axios.delete(`${task}/tasks/delete/${id}`);
            res.status(200).json(response.data);
        }catch(error){
            console.error('Error during task delete:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async getAll(req: Request, res: Response){
        try{
            console.log('task:', task);
            const response = await axios.get(`${task}/tasks/`);
            res.status(200).json(response.data);
        }catch(error){
            console.error('Error during get all tasks:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async getById(req: Request, res: Response){
        try{
            const id = req.params.id;
            const response = await axios.get(`${task}/tasks/${id}`);
            res.status(200).json(response.data);
        }catch(error){
            console.error('Error during get task by id:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
    static async getByUserId(req: Request, res: Response){
        try{
            const id = req.body.userId;
            console.log(id)
            const response = await axios.get(`${task}/tasks/user/${id}`);
            res.status(200).json(response.data);
        }catch(error){
            console.error('Error during get task by user id:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default TaskController;