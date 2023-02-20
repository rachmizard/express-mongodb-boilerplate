import { Router } from "express";

import AuthController from "../controllers/AuthController";
import CatchAsyncMiddleware from "../middlewares/CatchAsync";

const authRoutes = Router();

authRoutes.post("/signin", CatchAsyncMiddleware.handle(AuthController.signIn));

export default authRoutes;
