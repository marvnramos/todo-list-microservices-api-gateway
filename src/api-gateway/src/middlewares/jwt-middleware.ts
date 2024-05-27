import jwt from "jsonwebtoken";
import axios from "axios";
import { Request, Response, NextFunction } from "express";
import "dotenv/config";

const authValidation = async (req: Request, res: Response, next: NextFunction) => {
	const authorizationHeader = req.headers.authorization;
	const user = process.env.USER_SERVICE_URL || "http://localhost:3000";

	if (!authorizationHeader) {
		return res.status(401).json({ message: "No se ha enviado el token" });
	}

	const [bearer, token] = authorizationHeader.split(" ");

	if (bearer !== "Bearer" || !token) {
		return res.status(401).json({ message: "El formato del token no es válido" });
	}

	try {
		const decoded:any = jwt.verify(token, process.env.JWT_SECRET! || 'secret');

		const response = await axios.get(`${user}/users/get/${decoded.sub}`);
		if (!response.data) {
			return res.status(401).json({ message: `Usuario inválido` });
		}

		req.body.userId = decoded.sub;
		next();
	} catch (error) {
		return res.status(500).json({ message: "El token no es válido" });
	}
};

export default authValidation;