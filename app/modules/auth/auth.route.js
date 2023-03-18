import { Router } from "express";
import { CatchAsyncMiddleware, ValidatorMiddleware } from "core";

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

// authRoutes.get("/", CatchAsyncMiddleware.handle(AuthController.index));
// authRoutes.get("/:id", CatchAsyncMiddleware.handle(AuthController.show));

// authRoutes.post(
// 	"/",
// 	ValidatorMiddleware.handle(authValidators),
// 	CatchAsyncMiddleware.handle(AuthController.create)
// );

// authRoutes.put(
// 	"/:id",
// 	ValidatorMiddleware.handle(authValidators),
// 	CatchAsyncMiddleware.handle(AuthController.update)
// );

// authRoutes.delete(
// 	"/:id",
// 	CatchAsyncMiddleware.handle(AuthController.delete)
// );

export default authRoutes;
