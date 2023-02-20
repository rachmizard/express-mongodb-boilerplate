import { AuthService, TokenService, UserService } from "../services";
import ApiResponse from "../utils/response/ApiResponse";

class AuthController {
	static async signIn(req, res) {
		const { email, password } = req.body;

		const user = await AuthService.signIn(email, password);
		const token = TokenService.generateToken(user);

		return ApiResponse.sendOk({
			message: "Sign in successfully",
			data: {
				token,
			},
		})(res);
	}

	static async signUp(req, res) {
		const { email, password, username } = req.body;

		const user = await UserService.createUser({
			email,
			password,
			username,
		});
		const token = TokenService.generateToken(user);

		return ApiResponse.sendOk({
			message: "Sign up successfully",
			data: {
				token,
			},
		})(res);
	}
}

export default AuthController;
