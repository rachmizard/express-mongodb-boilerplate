import { User } from "../models";

import ApiError from "../exceptions/ApiError";
import HttpStatus from "../utils/httpStatus";

class UserService {
	static async getUserByEmail(email) {
		return await User.findOne({
			email,
		});
	}

	static async getUserById(id) {
		return await User.findById(id);
	}

	static async createUser(data) {
		const isEmailTaken = await User.isEmailTaken(data.email);

		if (isEmailTaken) {
			throw new ApiError(HttpStatus.BAD_GATEWAY, "Email sudah terdaftar");
		}

		return await User.create(data);
	}
}

export default UserService;
