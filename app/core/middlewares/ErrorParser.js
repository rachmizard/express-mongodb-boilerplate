import { config } from "core/utils/config";
import HttpStatus from "core/utils/httpStatus";
import logger from "core/utils/logger";
import ApiResponse from "core/utils/response/ApiResponse";

export default class ErrorParserMiddleware {
	/**
	 *
	 * @param {Error} err
	 * @param {import("express").Request} req
	 * @param {import("express").Response} res
	 * @param {import("express").NextFunction} next
	 */
	static handle = (err, req, res, next) => {
		let { statusCode, message } = err;
		if (config.env === "production" && !err.isOperational) {
			statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
			message = HttpStatus[HttpStatus.INTERNAL_SERVER_ERROR];
		}

		res.locals.errorMessage = err.message;

		const response = ApiResponse.send({
			statusCode,
			message,
			...(config.env === "development" && { stack: err.stack }),
		})(res, req, next);

		if (config.env === "development") {
			logger.error(err);
		}

		res.status(statusCode).send(response);
	};
}
