import { Router } from "express";
import {
  ApiResponse,
  AuthMiddleware,
  CatchAsyncMiddleware,
  ValidatorMiddleware,
} from "core";

import AuthController from "./auth.controller";
import { signInValidators, signUpValidators } from "./auth.validator";

const authRoutes = Router();

authRoutes.post(
  "/signin",
  ValidatorMiddleware.handle(signInValidators),
  CatchAsyncMiddleware.handle(AuthController.signIn)
);

authRoutes.post(
  "/signup",
  ValidatorMiddleware.handle(signUpValidators),
  CatchAsyncMiddleware.handle(AuthController.signUp)
);

authRoutes.get("/profile", AuthMiddleware.handle, function (req, res) {
  return ApiResponse.sendOk({
    message: "Profile successfully retrieved",
    data: req.user,
  })(res);
});

export default authRoutes;
