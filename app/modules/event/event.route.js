import { Router } from "express";
import {
  AuthMiddleware,
  CatchAsyncMiddleware,
  ValidatorMiddleware,
} from "core";

import EventController from "./event.controller";
import { eventValidators } from "./event.validator";

const eventRoutes = Router();

eventRoutes.get("/", CatchAsyncMiddleware.handle(EventController.index));
eventRoutes.get("/:id", CatchAsyncMiddleware.handle(EventController.show));

eventRoutes.post(
  "/",
  AuthMiddleware.handle,
  ValidatorMiddleware.handle(eventValidators),
  CatchAsyncMiddleware.handle(EventController.create)
);

eventRoutes.put(
  "/:id",
  AuthMiddleware.handle,
  ValidatorMiddleware.handle(eventValidators),
  CatchAsyncMiddleware.handle(EventController.update)
);

eventRoutes.delete(
  "/:id",
  AuthMiddleware.handle,
  CatchAsyncMiddleware.handle(EventController.delete)
);

export default eventRoutes;
