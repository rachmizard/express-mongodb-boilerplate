class PassportServiceProvider {
	/**
	 *
	 * @param {import("express").Application} app
	 * @param {import("core/utils/passport").default} passport
	 */
	constructor(app, passport) {
		this.app = app;
		this.passport = passport;
	}

	boot() {
		this.app.use(this.passport.initialize());
	}
}

export default PassportServiceProvider;
