import { config } from "../utils/config";
import HttpStatus from "../utils/httpStatus";
import logger from "../utils/logger";

export default class ErrorParserMiddleware {
	/**
	 *
	 * @param {Error} err
	 * @param {import("express").Request} req
	 * @param {import("express").Response} res
	 * @param {import("express").NextFunction} next
	 */
	static handle = (err, _, res) => {
		let { statusCode, message } = err;

		if (config.env === "production" && !err.isOperational) {
			statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
			message = HttpStatus[HttpStatus.INTERNAL_SERVER_ERROR];
		}

		res.locals.errorMessage = err.message;

		const response = {
			code: statusCode,
			message,
			...(config.env === "development" && { stack: err.stack }),
		};

		if (config.env === "development") {
			logger.error(err);
		}

		res.status(statusCode).send(response);
	};
}
