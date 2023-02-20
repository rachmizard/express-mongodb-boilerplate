import Passport from "../utils/passport";
import HttpStatus from "../utils/httpStatus";
import ApiError from "../exceptions/ApiError";

const instance = new Passport();

class AuthMiddleware {
	static handle = (req, res, next) => {
		function callback(error, user, info) {
			if (error || !user || info) {
				return next(
					new ApiError(HttpStatus.UNAUTHORIZED, "Unauthorized")
				);
			}
			req.user = user;

			return next();
		}

		instance.passport.authenticate("jwt", { session: false }, callback)(
			req,
			res,
			next
		);
	};
}

export default AuthMiddleware;
