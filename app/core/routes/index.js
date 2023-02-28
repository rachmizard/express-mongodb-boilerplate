import { Router } from "express";
import authRoutes from "modules/auth/auth.route";

const rootRoutes = Router();

// Register our modules route
rootRoutes.use("/auth", authRoutes);
export default rootRoutes;
