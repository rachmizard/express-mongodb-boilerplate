import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { config } from "./config";

export default class Passport {
	constructor() {
		this.passport = passport;
	}

	register() {
		this.passport.use("jwt", this.jwtStrategy());
	}

	initialize() {
		this.register();

		return this.passport.initialize();
	}

	jwtStrategy() {
		const jwtStrategyOptions = {
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			secretOrKey: config.jwtSecret,
		};

		return new JwtStrategy(jwtStrategyOptions, this.verify);
	}

	verify(payload, done) {
		const { id, email, role } = payload;

		if (id && email && role) {
			return done(null, { id, email, role });
		}

		return done(null, false);
	}
}
