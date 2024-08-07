import {Request, Response} from "express"
import userService from '../services/user-service'
import User from '../models/user-model'

class UserController {
    static async create (req: Request, res: Response){
        try{    
            const { email } = req.body;

            const userExists = await User.findOne({ email });
            if(userExists) {
                return res.status(400).json({message: "User already exists"});
            }
            
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
    static async auth(req: Request, res: Response){
        try{
            const {token} = req.body;
            const auth = await userService.auth(token);
            return res.status(200).json(auth);

        }catch(err){
            console.log(err);
            return res.status(500).json({message: "Internal server error"})
        }
    }
    static async update(req: Request, res: Response){
        try{
            req.body.id = req.params.id;
            
            const user = await userService.update(req.body);
            return res.status(200).json(user);
        }catch(err){
            console.log(err)
            return res.status(500).json({message: "Internal server error"});
        }

    }
    static async delete(req: Request, res: Response){
        try{
            const id = req.params.id;
            const user = await userService.delete(id);
            return res.status(200).json(user);
        }catch(err){
            console.log(err)
            return res.status(500).json({message: "Internal server error"});
        }
    }
    static async getAllUsers(req: Request, res: Response){
        try{
            const users = await userService.getAllUsers();
            return res.status(200).json(users);
        }catch(err){
            console.log(err)
            return res.status(500).json({message: "Internal server error"});
        }
    }
    static async getUserById(req: Request, res: Response){
        try{
            const id = req.params.id;
            const user = await userService.getUserById(id);
            return res.status(200).json(user);
        }catch(err){
            console.log(err)
            return res.status(500).json({message: "Internal server error"});
        }
    }
}

export default UserController;