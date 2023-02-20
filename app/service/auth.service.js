import { UserService } from "app/service";
import ApiError from "../exceptions/ApiError";
import HttpStatus from "../utils/httpStatus";

class AuthService {
    static async signIn(email, password) {
        try {
            const user = await UserService.getUserByEmail(email)
            if (!user) {
                throw new ApiError(
                    HttpStatus.NOT_FOUND,
                    "Email user tidak ditemukan"
                );
            }

            const isValidPassword = user.isValidPassword(password)
            if (!isValidPassword) {
                throw new ApiError(
                    HttpStatus.UNAUTHORIZED,
                    "Password salah"
                );
            }
            return user;
        } catch (error) {
            throw new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, error.message);
        }
    }
}

export default AuthService;