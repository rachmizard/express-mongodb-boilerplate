import dotenv from "dotenv";
dotenv.config();

const baseConfig = {
	development: {
		env: process.env.NODE_ENV || "development",
		port: process.env.PORT || 3000,
		mongoDbUrl: process.env.MONGO_DB_URL,
		jwtSecret: process.env.JWT_SECRET,
	},
	production: {
		env: process.env.NODE_ENV || "production",
		port: process.env.PORT || 3000,
		mongoDbUrl: process.env.MONGO_DB_URL,
		jwtSecret: process.env.JWT_SECRET,
	},
};

/**
 * @type {baseConfig["development"] | baseConfig["production"]}
 *
 */
export const config = baseConfig[process.env.NODE_ENV || "development"];
