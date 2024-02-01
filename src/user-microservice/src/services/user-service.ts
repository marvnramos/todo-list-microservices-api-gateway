import User  from "../models/user-model";
import { Request } from "express";
import Crypto from "../utils/crypto";

class userService {
    static async create(body: Request["body"]): Promise<{ message: string; user: object; }>{
        try {
            const { password } = body;
            body.password = Crypto.encrypt(password);
            
            const user = new User(body);
            await user.save();
            
            return {
              message: "User created successfully",
              user: user,
            };

          } catch (error) {
            console.error(error);
            throw error; // Propagacion de error
          }
    }

    static async logIn(req: Request, res: Response){

    }

    static async update(req: Request, res: Response){

    }

    static async delete(req: Request, res: Response){

    }
}

export default userService;