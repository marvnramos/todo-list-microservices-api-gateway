import { Request, Response } from "express"
import userService from '../services/user-service'

class UserController {
    static async create (req: Request, res: Response){
        try{            
            const user = await userService.create(req.body);
            return res.status(200).json(user);
        } catch(err){
            console.log(err)
            return res.status(500).json({message: "Internal server error"});
            
        }
    }
    static async logIn(req: Request, res: Response){
        try{
            const user = await userService.logIn(req.body);
            return res.status(200).json(user);
        }catch(err){
            console.log(err)
            return res.status(500).json({message: "Internal server error"});
        }

    }
    static async update(req: Request, res: Response){
        try{
            const user = await userService.update(req.body);
            return res.status(200).json(user);
        }catch(err){
            console.log(err)
            return res.status(500).json({message: "Internal server error"});
        }

    }
    static async delete(req: Request, res: Response){
        try{
            const user = await userService.delete(req.body);
            return res.status(200).json(user);
        }catch(err){
            console.log(err)
            return res.status(500).json({message: "Internal server error"});
        }
    }
}

export default UserController;