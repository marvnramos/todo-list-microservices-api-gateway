import jwt from "jsonwebtoken";
import UserModel  from "../models/user-model";
import { Request, Response, NextFunction } from "express";
import "dotenv/config";

const authValidation = async (req: Request, res: Response, next: NextFunction) => {
	const authorizationHeader = req.headers.authorization;

	if (!authorizationHeader) {
		return res.status(401).json({ message: "No se ha enviado el token" });
	}

	const [bearer, token] = authorizationHeader.split(" ");

	if (bearer !== "Bearer" || !token) {
		return res.status(401).json({ message: "El formato del token no es válido" });
	}

	try {
		const decoded:any = jwt.verify(token, process.env.JWT_SECRET!);

		const user = await UserModel.findById(decoded.sub);
		if (!user) {
			return res.status(401).json({ message: `Usuario inválido` });
		}

		req.body.userId = decoded.sub;

		next();
	} catch (error) {
		return res.status(500).json({ message: "El token no es válido" });
	}
};

export default authValidation;