import mongoose from "mongoose";
import ApiError from "../exceptions/ApiError";
import { config } from "./config";
import { httpMessages } from "./httpMessage";
import HttpStatus from "./httpStatus";
import logger from "./logger";

export const errorConverter = (err, req, res, next) => {
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

// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
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
