import jwt from "jsonwebtoken";
import { config } from "core/utils/config";

class TokenService {
	static generateToken(payload) {
		const _payload = {
			sub: payload._id,
			iat: Date.now(),
			exp: Date.now() + 1000 * 60 * 60 * 24 * 7, // 7 days
		};
		return jwt.sign(_payload, config.jwtSecret);
	}

	static verifyToken(token) {
		return jwt.verify(token, config.jwtSecret);
	}

	static decodeToken(token) {
		return jwt.decode(token);
	}
}

export default TokenService;
