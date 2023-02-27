import jwt from "jsonwebtoken";

import {config} from "../utils/config.js";

class TokenService {
    static generateToken(payload){
        const _payload = {
            sub: payload._id,
            iat: Date.now(),
            exp: Date.now() + 1000 * 60 * 60
        };
        return jwt.sign(_payload, config.jwtSecret);
    }

    static verifyToken(token){
        return jwt.verify(token, config.jwtSecret);
    }

    static decadeToken(token){
        return jwt.decode(token);
    }
}

export default TokenService;