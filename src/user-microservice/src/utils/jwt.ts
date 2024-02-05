import jwt from "jsonwebtoken";
import Body from "../interfaces/AuthPayload-interface";

const generateToken = (body: Body): Promise<String> => {
	return new Promise((resolve, reject) => {
		const { id: sub, loged} = body;

		const payload = {
			sub,
			loged
		};

		jwt.sign(
			payload,
			process.env.JWT_SECRET!,
			{ expiresIn: process.env.JWT_EXPIRES_IN! },
			(err, token: any) => {
				if (err) reject(err);
				resolve(token);
			}
		);
	});
};

export default generateToken;