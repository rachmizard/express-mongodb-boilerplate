import dotenv from "dotenv";
dotenv.config();

const baseConfig = {
	development: {
		env: process.env.NODE_ENV || "development",
		port: process.env.PORT || 3000,
		mongoDbUrl: process.env.MONGO_DB_URL,
	},
	production: {
		env: process.env.NODE_ENV || "production",
		port: process.env.PORT || 3000,
		mongoDbUrl: process.env.MONGO_DB_URL,
	},
};

/**
 * @type {baseConfig["development"] | baseConfig["production"]}
 *
 */
export const config = baseConfig[process.env.NODE_ENV || "development"];
