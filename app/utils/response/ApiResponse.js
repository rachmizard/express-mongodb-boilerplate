import HttpStatus from "../httpStatus";

export default class ApiResponse {
	/**
	 * Send a response
	 * @param {Object} res
	 * @returns {import('express').Response}
	 */
	static send({ statusCode, message, data, meta, ...rest }) {
		return (res) => {
			return res.status(statusCode).json({
				status: statusCode,
				message,
				data,
				meta,
				...rest,
			});
		};
	}

	/**
	 * Send a 200 OK response
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
	 * Send a 201 Created response
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

	/**
	 * Send a 400 Bad Request response
	 * @param {Object} res
	 * @returns {Response}
	 */
	static sendBadRequest({ message, data, meta }) {
		return this.send({
			statusCode: HttpStatus.BAD_REQUEST,
			message,
			data,
			meta,
		});
	}

	/**
	 * Send a 401 Unauthorized response
	 * @param {Object} res
	 * @returns {Response}
	 *
	 */
	static sendUnauthorized({ message, data, meta }) {
		return this.send({
			statusCode: HttpStatus.UNAUTHORIZED,
			message,
			data,
			meta,
		});
	}

	/**
	 * Send a 403 Forbidden response
	 * @param {Object} res
	 * @returns {Response}
	 */
	static sendForbidden({ message, data, meta }) {
		return this.send({
			statusCode: HttpStatus.FORBIDDEN,
			message,
			data,
			meta,
		});
	}

	/**
	 * Send a 404 Not Found response
	 * @param {Object} res
	 * @returns {Response}
	 */
	static sendNotFound({ message, data, meta }) {
		return this.send({
			statusCode: HttpStatus.NOT_FOUND,
			message,
			data,
			meta,
		});
	}

	/**
	 * Send a 500 Internal Server Error response
	 * @param {Object} res
	 * @returns {Response}
	 */
	static sendInternalServerError({ message, data, meta }) {
		return this.send({
			statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
			message,
			data,
			meta,
		});
	}
}
