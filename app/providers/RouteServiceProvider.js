import ApiError from "../exceptions/ApiError";
import ErrorMiddleware from "../middlewares/Error";
import ErrorParserMiddleware from "../middlewares/ErrorParser";
import rootRoutes from "../routes/index";
import { httpMessages } from "../utils/httpMessage";
import HttpStatus from "../utils/httpStatus";

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
