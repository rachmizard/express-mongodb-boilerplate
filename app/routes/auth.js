import { Router } from "express";

const authRoute = Router();

authRoute.post("/signin", (req, res) => {
	res.json({ message: "Sign in" });
});

authRoute.post("/signup", (req, res) => {
	res.json({ message: "Sign up" });
});

export default authRoute;
