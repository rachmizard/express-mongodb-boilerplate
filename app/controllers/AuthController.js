import ApiResponse from "../utils/response/ApiResponse";

export default class AuthController {
	constructor() {}

	static signIn(req, res) {
		return ApiResponse.sendOk({
			// add some properties below
			message: "Sign in successfully",
		})(res);
	}
}
