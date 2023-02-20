export default class HttpStatus {
	static get OK() {
		return 200;
	}

	static get CREATED() {
		return 201;
	}

	static get BAD_REQUEST() {
		return 400;
	}

	static get UNAUTHORIZED() {
		return 401;
	}

	static get FORBIDDEN() {
		return 403;
	}

	static get NOT_FOUND() {
		return 404;
	}

	static get INTERNAL_SERVER_ERROR() {
		return 500;
	}

	static get BAD_GATEWAY() {
		return 502;
	}

	static get SERVICE_UNAVAILABLE() {
		return 503;
	}

	static get GATEWAY_TIMEOUT() {
		return 504;
	}

	static get HTTP_VERSION_NOT_SUPPORTED() {
		return 505;
	}

	static get NETWORK_AUTHENTICATION_REQUIRED() {
		return 511;
	}

	static get NETWORK_CONNECT_TIMEOUT_ERROR() {
		return 599;
	}

	static get NOT_EXTENDED() {
		return 510;
	}

	static get NETWORK_READ_TIMEOUT_ERROR() {
		return 598;
	}
}
