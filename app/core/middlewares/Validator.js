import { validationResult } from "express-validator";
import ApiResponse from "core/utils/response/ApiResponse";

class Validator {
	static handle(validations = []) {
		return async function (req, res, next) {
			await Promise.all(
				validations.map((validation) => validation.run(req))
			);

			const errors = validationResult(req);
			if (errors.isEmpty()) {
				return next();
			}

			return ApiResponse.sendBadRequest({
				message: "Validation Error",
				data: errors.array(),
			})(res);
		};
	}
}

export default Validator;
