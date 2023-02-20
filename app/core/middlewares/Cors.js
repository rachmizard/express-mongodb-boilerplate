import cors from "cors";

export default class CorsMiddleware {
	/**
	 *
	 * @param {import("express").Request} req
	 * @param {import("express").Response} res
	 * @param {import("express").NextFunction} next
	 */
	static async handle(req, res, next) {
		return cors({
			origin: "*",
			methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
			maxAge: 3600,
		})(req, res, next);
	}
}
