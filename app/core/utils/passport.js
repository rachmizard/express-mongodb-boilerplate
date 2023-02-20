import passport from "passport";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { UserService } from "core/services";
import { config } from "./config";

class Passport {
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

		return new JwtStrategy(jwtStrategyOptions, this.jwtVerifyCallback);
	}

	async jwtVerifyCallback(payload, done) {
		try {
			const user = await UserService.getUserById(payload.sub);

			if (!user) {
				return done(null, false);
			}

			return done(null, user);
		} catch (error) {
			return done(error, false);
		}
	}
}

export default Passport;