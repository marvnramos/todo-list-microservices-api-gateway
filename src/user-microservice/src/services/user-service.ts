import User  from "../models/user-model";
import { Request } from "express";
import bcrypt from "bcryptjs";
import BodyAuth  from "../interfaces/AuthPayload-interface";
import jwtServise from "../utils/jwt";

class userService {
    static async create(body: Request["body"]): Promise<{ message: string; user: object; }>{
        try {
          /**
           * Todo:
           * 1. Validar que el email no exista en la base de datos
           * 2. Validar que el email sea un correo electronico
           * 3. Validar que el password tenga al menos 8 caracteres
           * 4. Validar que el password tenga al menos una letra mayuscula
           * 5. Validar que el password tenga al menos una letra minuscula
           * 6. Validar que el password tenga al menos un numero
           * 7. Validar que el password tenga al menos un caracter especial
           */
            const { password } = body;
            const salt = bcrypt.genSaltSync(10);
            body.password = bcrypt.hashSync(password, salt);

            const user = new User(body);
            await user.save();
            
            return {
              message: "User created successfully 🥳",
              user: user,
            };

          } catch (error) {
            console.error(error);
            throw error; // Propagacion de error
          }
    }

    static async logIn(body: Request["body"]): Promise<{ message: string; token: string; }> {
        try {
            /**
             * Todo:
             * 1. Validar que el email exista en la base de datos
             * 2. Validar que el password sea el correcto
             * 3. Generar un token de autenticacion
             * 4. Retornar el token
             */
            const { email, password } = body;
            const user = await User.findOne({ email });

            const id:any = user?.id;            
            const authBody:BodyAuth = {
                id: id,
                loged: true
            };
            
            if (!user) {
                throw new Error("User not found");
            }

            const isPasswordValid = bcrypt.compareSync(password, user.password);
            if (!isPasswordValid) {
                throw new Error("Invalid password");
            }

            const token:any = await jwtServise.generateToken(authBody);

            return {
                message: "Loged in! 🧸",
                token: token,
            };
        } catch (error) {
            console.error(error);
            throw error;
        }

    }

    static async auth(token: string): Promise<{id: string}>{
        try{
            const success = await jwtServise.validate(token);
            if(!success){
                throw new Error("Invalid token");
            }
            return success.sub;
        }catch(error){
            throw error;
        }
    }

    static async update(body: Request["body"]): Promise<{ message: string; user: any; }>{
        try{
            const { id } = body;

            const user = await User.findOneAndUpdate({ _id: id }, body, { new: true });

            return {
                message: "User info updated successfully 🥳",
                user: user,
              };
        }catch(error){
            console.error(error);
            throw error;
        }
    }

    static async delete(id: String): Promise<{ message: string }>{
        try{
            await User.findByIdAndDelete(id);
            return { message: "User deleted successfully 🥳"};
        }catch(error){
            console.error(error);
            throw error;
        }
    }

    static async getAllUsers(): Promise<{ message: string; users: any; }>{
        try{
            const users = await User.find();
            return { message: "Users found successfully 🥳", users: users};
        }catch(error){
            console.error(error);
            throw error;
        }
    }
    static async getUserById(id: String): Promise<{ message: string; user: any; }>{
        try{
            const user = await User.findById(id);
            return { message: "User found successfully 🥳", user: user};
        }catch(error){
            console.error(error);
            throw error;
        }
    }
}

export default userService;