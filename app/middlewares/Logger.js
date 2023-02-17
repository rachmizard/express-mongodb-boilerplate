import morgan from "morgan";

import logger from "app/utils/logger";
import { config } from "app/utils/config";

export default class LoggerMiddleware {
	/**
	 *
	 * @param {import("express").Request} req
	 * @param {import("express").Response} res
	 * @param {import("express").NextFunction} next
	 */
	static async handle(req, res, next) {
		const stream = {
			write: (message) => logger.http(message),
		};

		const skip = () => {
			return config.env !== "development";
		};

		const options = {
			stream,
			skip,
		};

		return morgan(
			":remote-addr :method :url :status :res[content-length] - :response-time ms",
			options
		)(req, res, next);
	}
}
