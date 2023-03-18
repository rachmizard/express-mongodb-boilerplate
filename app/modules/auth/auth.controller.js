import { ApiResponse, TokenService, UserService } from "core";
import AuthService from "./auth.service";

class AuthController {
  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  static async signIn(req, res) {
    const user = await AuthService.signIn(req.body);
    const token = await TokenService.generateToken(user);

    return ApiResponse.sendOk({
      message: "Sign In successfully",
      data: { token },
    })(res);
  }

  /**
   *
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  static async signUp(req, res) {
    const user = await UserService.createUser(req.body);
    const token = TokenService.generateToken(user);

    return ApiResponse.sendOk({
      message: "Sign Up successfully",
      data: {
        token,
      },
    })(res);
  }
}

export default AuthController;
