import { Router } from "express";
import authRoute from "./auth";

const rootRoutes = Router();

rootRoutes.use("/auth", authRoute);

export default rootRoutes;
