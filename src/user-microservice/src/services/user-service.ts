import userModel  from "../models/user-model";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";

const userService = {
    async create(req: Request){
        const { password } = req.body;

        const salt:string = bcrypt.genSaltSync(10);
		const hash:string = bcrypt.hashSync(password, salt);

        req.body.password = hash;

        const user = await userModel.create(req.body)

        return { 
            error: false,
            message: `User created successfully 🥵\n${user}`
        };

    },
    async logIn(req: Request, res: Response){

    },
    async update(req: Request, res: Response){

    },
    async delete(req: Request, res: Response){

    }
}

export default userService;