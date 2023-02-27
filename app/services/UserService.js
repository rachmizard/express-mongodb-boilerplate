import ApiError from "../exceptions/ApiError";
import { userModel } from "../models";
import HttpStatus from "../utils/httpStatus";
class UserService{
    static async getUserByEmail(email) {
        return await userModel.findOne({
            email
        });
    }

    static async getUserById(id) {
        return await userModel.findById(id);
    }

    static async createUser(data) {
        const isEmailTaken = await userModel.isEmailTaken(data.email);
        if(isEmailTaken){
            throw new ApiError(HttpStatus.BAD_GATEWAY, "Email sudah terdaftar");
        }

        return await userModel.create(data);
    }
}

export default UserService;