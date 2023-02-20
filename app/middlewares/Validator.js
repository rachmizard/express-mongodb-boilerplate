import { validationResult } from "express-validator";
import ApiResponse from "../utils/response/ApiResponse";

class Validator {
	static validate(validations = []) {
		return async (req, res, next) => {
			await Promise.all(
				validations.map((validation) => validation.run(req))
			);

			const errors = validationResult(req);
			if (errors.isEmpty()) {
				return next();
			}

			return ApiResponse.sendBadRequest({
				message: "Validation failed",
				data: errors.array(),
			})(res);
		};
	}
}

export default Validator;
