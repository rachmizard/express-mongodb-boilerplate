import ApiError from "core/exceptions/ApiError";
import HttpStatus from "core/utils/httpStatus";

class RoleMiddleware {
	static handle(...roles) {
		return (req, _, next) => {
			const { user } = req;

			if (roles.length && !roles.includes(user.role)) {
				return next(
					new ApiError(
						HttpStatus.FORBIDDEN,
						"Tidak dapat mengakses resource ini"
					)
				);
			}

			return next();
		};
	}
}

export default RoleMiddleware;
