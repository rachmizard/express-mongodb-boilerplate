import { Router } from "express";
import { CatchAsyncMiddleware, ValidatorMiddleware } from "core";

import EventController from "./event.controller";
import { eventValidators } from "./event.validator";

const eventRoutes = Router();

eventRoutes.get("/", CatchAsyncMiddleware.handle(EventController.index));
eventRoutes.get("/:id", CatchAsyncMiddleware.handle(EventController.show));

eventRoutes.post(
	"/",
	ValidatorMiddleware.handle(eventValidators),
	CatchAsyncMiddleware.handle(EventController.create)
);

eventRoutes.put(
	"/:id",
	ValidatorMiddleware.handle(eventValidators),
	CatchAsyncMiddleware.handle(EventController.update)
);

eventRoutes.delete(
	"/:id",
	CatchAsyncMiddleware.handle(EventController.delete)
);

export default eventRoutes;
