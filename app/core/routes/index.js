import { Router } from "express";
import authRoutes from "modules/auth/auth.route";
import eventRoutes from "modules/event/event.route";

const rootRoutes = Router();

// Register our modules route
rootRoutes.use("/auth", authRoutes);
rootRoutes.use("/events", eventRoutes);
export default rootRoutes;
