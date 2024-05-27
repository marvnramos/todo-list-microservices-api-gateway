import jwt from "jsonwebtoken";
import Body from "../interfaces/AuthPayload-interface";

export default class jwtService {
	static generateToken(body: Body): Promise<String> {
		return new Promise((resolve, reject) => {
			const { id: sub, loged} = body;
	
			const payload = {
				sub,
				loged
			};
	
			jwt.sign(
				payload,
				process.env.JWT_SECRET! || "secret",
				{ expiresIn: process.env.JWT_EXPIRES_IN!  || "1h"},
				(err, token: any) => {
					if (err) reject(err);
					resolve(token);
				}
			);
		});
	}

	static validate(token: string): Promise<any> {
		return new Promise((resolve, reject) => {
			jwt.verify(token, process.env.JWT_SECRET! || "secret", (err, decoded) => {
					if (err) reject(err);
					resolve(decoded);
				});
		})
	};
}


export const validate = (token: string): Promise<any> => {
	return new Promise((resolve, reject) => {
		jwt.verify(token, process.env.JWT_SECRET! || "secret", (err, decoded) => {
				if (err) reject(err);
				resolve(decoded);
			});
	})
};
