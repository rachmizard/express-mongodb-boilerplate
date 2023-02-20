import { TokenService, UserService, AuthService } from "../service";
import ApiResponse from "../utils/response/ApiResponse";

export default class AuthController {
	constructor() {}

	static  async signIn(req, res) {
		const { email, password } = req.body

		const user = await AuthService.signIn(email, password);
		const token = TokenService.generateToken(user);

		return ApiResponse.sendOk({
			// add some properties below
			message: "Sign in successfully",
			data: {
				token,
			}
		})(res);
	}

	static async signUp(req, res) {
		const user = await UserService.createUser(req.body);
		const token = TokenService.generateToken(user);

		return ApiResponse.sendOk({
			// add some properties below
			message: "Sign up successfully",
			data: {
				token
			}
		})(res);
	}
}
