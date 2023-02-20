import { Router } from "express";

import { AuthController } from "app/controllers";
import CatchAsyncMiddleware from "app/middlewares/CatchAsync";

import Validator from "app/middlewares/Validator";
import {  signInValidators, signUpValidators } from "app/validators/auth.validator";
import AuthMiddleware from "../middlewares/Auth";
import ApiResponse from "../utils/response/ApiResponse";

const authRoutes = Router();

authRoutes.post(
    "/signin", 
    Validator.validate(signInValidators), 
    CatchAsyncMiddleware.handle(AuthController.signIn)
);

authRoutes.post(
    "/signup", 
    Validator.validate(signUpValidators), 
    CatchAsyncMiddleware.handle(AuthController.signUp)
);

authRoutes.get("/profile", AuthMiddleware.handle, (req, res) => {
    return ApiResponse.sendOk({
        message: "Profile suiccessfully fetched",
        data: req.user,
    })(res);
});

export default authRoutes;
