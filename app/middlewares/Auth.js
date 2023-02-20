import Passport from "app/utils/passport";
import ApiError from "../exceptions/ApiError";
import HttpStatus from "../utils/httpStatus";

const passport = new Passport();

class AuthMiddleware {
    static handle(req, res, next) {
        function callback(error, user, info) {
            if (error || !user || info) {
                return next(
                    new ApiError(
                        HttpStatus.UNAUTHORIZED,
                        "Anda tidak memiliki akses"
                    )
                );
            }

            req.user = user;

            return next();
        }

        passport.passport.authenticate("jwt", { session: false}, callback)(
            req, 
            res, 
            next
        );
    }
}

export default AuthMiddleware;