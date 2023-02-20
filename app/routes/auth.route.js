import { Router } from "express";

import AuthController from "../controllers/AuthController";
import AuthMiddleware from "../middlewares/Auth";
import CatchAsyncMiddleware from "../middlewares/CatchAsync";
import Validator from "../middlewares/Validator";

import {
	signInValidators,
	signUpValidators,
} from "../validators/auth.validator";

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
	res.json({ message: "You are authenticated", user: req.user });
});

export default authRoutes;
