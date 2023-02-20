import ApiError from "core/exceptions/ApiError";
import { User } from "core/models";
import HttpStatus from "core/utils/httpStatus";

class UserService {
	static async createUser(user) {
		const isEmailTaken = await User.isEmailTaken(user.email);
		if (isEmailTaken) {
			throw new ApiError(HttpStatus.BAD_REQUEST, "Email sudah terdaftar");
		}
		return await User.create(user);
	}

	static async getUserByEmail(email) {
		return await User.findOne({
			email,
		});
	}

	static async getUserById(id) {
		return await User.findById(id, "-password");
	}
}

export default UserService;
