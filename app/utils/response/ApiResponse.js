import HttpStatus from "../httpStatus";

export default class ApiResponse {
	/**
	 * @param {Object} res
	 * @returns {import('express').Response}
	 */
	static send({ statusCode, message, data, meta }) {
		return (res) => {
			return res.status(statusCode).json({
				status: statusCode,
				message,
				data,
				meta,
			});
		};
	}

	/**
	 * @param {Object} res
	 * @returns {Response}
	 * @constructor
	 * @static
	 * @memberof ApiResponse
	 */

	static sendOk({ message, data, meta }) {
		return this.send({
			statusCode: HttpStatus.OK,
			message,
			data,
			meta,
		});
	}

	/**
	 * @param {Object} res
	 * @returns {Response}
	 * @constructor
	 * @static
	 * @memberof ApiResponse
	 */

	static sendCreated({ message, data, meta }) {
		return this.send({
			statusCode: HttpStatus.CREATED,
			message,
			data,
			meta,
		});
	}
}
