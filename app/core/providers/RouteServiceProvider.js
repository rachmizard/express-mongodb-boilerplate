import ApiError from "core/exceptions/ApiError";

import ErrorMiddleware from "core/middlewares/Error";
import ErrorParserMiddleware from "core/middlewares/ErrorParser";

import rootRoutes from "core/routes/index";

import { httpMessages } from "core/utils/httpMessage";
import HttpStatus from "core/utils/httpStatus";

export default class RouteServiceProvider {
	/**
	 *
	 * @param {import("express").Application} app
	 */
	constructor(app) {
		this.app = app;
	}

	boot() {
		this.app.use("/api", rootRoutes);

		this.app.use((_, __, next) =>
			next(
				new ApiError(
					HttpStatus.NOT_FOUND,
					httpMessages[HttpStatus.NOT_FOUND]
				)
			)
		);

		this.app.use(ErrorMiddleware.handle);
		this.app.use(ErrorParserMiddleware.handle);
	}
}
