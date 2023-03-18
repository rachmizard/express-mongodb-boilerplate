// import Auth from './auth.model';
import { ApiError, HttpStatus, UserService } from "core";

class AuthService {
  static async signIn(payload) {
    try {
      const user = await UserService.getUserByEmail(payload.email);
      if (!user) {
        throw new ApiError(HttpStatus.NOT_FOUND, "user not found");
      }

      const isValidPassword = await user.isValidPassword(payload.password);

      if (!isValidPassword) {
        throw new ApiError(HttpStatus.UNAUTHORIZED, "invalid password");
      }
      return user;
    } catch (error) {
      throw new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, error.message);
    }
  }
}

export default AuthService;
