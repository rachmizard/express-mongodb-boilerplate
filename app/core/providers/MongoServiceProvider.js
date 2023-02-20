import mongoose from "mongoose";
import { config } from "core/utils/config";
import logger from "core/utils/logger";

export default class MongoServiceProvider {
	/**
	 *
	 * @param {string} url
	 * @param {mongoose.ConnectOptions} options
	 */
	constructor(uri, options) {
		this.uri = uri || config.mongoDbUrl;
		this.options = options;
	}

	boot() {
		mongoose.set("strictQuery", true);
		mongoose.connect(this.uri, this.options).then(
			() => logger.info("Connected to MongoDB"),
			(error) => logger.error(error)
		);
	}
}
