import { Request, Response } from "express"
import userService from '../services/user-service'


const userController = {
    async create (req: Request, res: Response){
        try{
            const user = await userService.create(req.body);
            return res.status(200).json(user);
        } catch(err){
            return res.status(500).json(err);
        }
    },
    async logIn(req: Request, res: Response){

    },
    async update(req: Request, res: Response){

    },
    async delete(req: Request, res: Response){

    }
}

export default userController;