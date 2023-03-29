import { Router } from "express";
import { CatchAsyncMiddleware, ValidatorMiddleware } from "core";

import AuthController from "./auth.controller";
import { signInValidators, signUpValidators } from "./auth.validator";
import AuthMiddleware from "./../../core/middlewares/Auth";

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
  res.json(req.user);
});

export default authRoutes;
