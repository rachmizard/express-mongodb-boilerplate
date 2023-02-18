import ApiError from "../exceptions/ApiError";
import HttpStatus from "../utils/httpStatus";

export default class CatchAsyncMiddleware {
	/**
	 *
	 * @param {Function} fn
	 * @returns {Promise<Function>}
	 */
	static handle = (fn) => {
		/**
		 * @param {Request} req
		 * @param {Response} res
		 * @param {Function} next
		 */
		return async function (req, res, next) {
			return Promise.resolve(fn(req, res, next)).catch((err) => {
				if (err instanceof ApiError) {
					return next(err);
				}

				next(
					new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, err.message)
				);
			});
		};
	};
}
