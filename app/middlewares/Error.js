import mongoose from "mongoose";
import ApiError from "../exceptions/ApiError";
import { httpMessages } from "../utils/httpMessage";
import HttpStatus from "../utils/httpStatus";

export default class ErrorMiddleware {
	/**
	 *
	 * @param {Error} err
	 * @param {import("express").Request} req
	 * @param {import("express").Response} res
	 * @param {import("express").NextFunction} next
	 */
	static handle = (err, req, res, next) => {
		let error = err;
		if (!(error instanceof ApiError)) {
			const statusCode =
				error.statusCode || error instanceof mongoose.Error
					? HttpStatus.BAD_REQUEST
					: HttpStatus.INTERNAL_SERVER_ERROR;
			const message = error.message || httpMessages[statusCode];
			error = new ApiError(statusCode, message, false, err.stack);
		}

		next(error);
	};
}
