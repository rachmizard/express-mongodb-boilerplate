import ApiError from "core/exceptions/ApiError";
import HttpStatus from "core/utils/httpStatus";

class RoleMiddleware {
    static handle(...roles) {
        return function (req, res, next) {
            const user = req.user;
            if (roles.length && !roles.includes(user.role)) {
                return next(
                    new ApiError(
                        HttpStatus.FORBIDDEN,
                        "Tidak Dapat mengakses Resource ini."
                    )
                );
            }
            return next();
        }
    }
}

export default RoleMiddleware;