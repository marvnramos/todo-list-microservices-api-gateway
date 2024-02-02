import User  from "../models/user-model";
import { Request } from "express";
import Crypto from "../utils/crypto";

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
            body.password = Crypto.encrypt(password);
            
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

    static async logIn(body: Request["body"]): Promise<object> {
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

            if (!user) {
                throw new Error("User not found");
            }

            const isPasswordValid = Crypto.compare(password, user.password);
            if (!isPasswordValid) {
                throw new Error("Invalid password");
            }

            return user;
        } catch (error) {
            console.error(error);
            throw error;
        }

    }

    static async update(req: Request, res: Response){

    }

    static async delete(req: Request, res: Response){

    }
}

export default userService;