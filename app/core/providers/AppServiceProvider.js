import dotenv from "dotenv";
import express from "express";

import CorsMiddleware from "core/middlewares/Cors";
import LoggerMiddleware from "core/middlewares/Logger";

import { config } from "core/utils/config";
import logger from "core/utils/logger";

dotenv.config();

export default class AppServiceProvider {
	/**
	 *
	 * @param {import("express").Application} app
	 */
	constructor(app) {
		this.app = app;
	}

	boot() {
		this.app.use(express.json());
		this.app.use(express.urlencoded({ extended: true }));

		this.app.use(LoggerMiddleware.handle);
		this.app.use(CorsMiddleware.handle);

		this.app.listen(config.port, () => {
			logger.info(`Server is running on port ${config.port}`);
		});

		process.on("uncaughtException", (error) => {
			logger.error(error);
		});

		process.on("unhandledRejection", (error) => {
			logger.error(error);
		});

		process.on("SIGINT", () => {
			logger.info("SIGINT signal received: closing HTTP server");
			process.exit(0);
		});

		process.on("exit", () => {
			logger.info("Process exited");

			process.exit(0);
		});
	}
}
