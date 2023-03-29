import ApiError from "core/exceptions/ApiError";
import HttpStatus from "core/utils/httpStatus";
import Passport from "core/utils/passport";

const instance = new Passport();

class AuthMiddleware {
  static async handle(req, res, next) {
    function callback(err, user, info) {
      if (err || !user || info) {
        return next(new ApiError(HttpStatus.UNAUTHORIZED, "Unauthorized"));
      }
      req.user = user;
      return next();
    }

    instance.passport.authenticate("jwt", callback)(req, res, next);
  }
}

export default AuthMiddleware;
