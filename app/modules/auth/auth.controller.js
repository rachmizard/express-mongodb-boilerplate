import { ApiResponse, TokenService, User, UserService } from "core";
import AuthService from "./auth.service";

class AuthController {
  /**

	 * @param {import("express").Request} req
	 * @param {import("express").Response} res
	 * @param {import("express").NextFunction} next
	 */
  static async signIn(req, res) {
    //Do Something with service layer
    const { email, password } = req.body;
    const user = await AuthService.signIn(email, password);
    const token = TokenService.generateToken(user);

    return ApiResponse.sendOk({
      message: "Login Berhasil",
      data: {
        token,
      },
    })(res);
  }

  static async signUp(req, res) {
    //Do Something with service layer
    await UserService.createUser(req.body);

    return ApiResponse.sendOk({
      message: "SignUp Berhasil",
    })(res);
  }
}

export default AuthController;
