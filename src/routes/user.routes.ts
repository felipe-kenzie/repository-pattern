import { Router } from "express";

import { createUserController, listAllUsersController } from "../controllers";

const usersRoutes = Router();

usersRoutes.post("/", (request, response) =>
  createUserController.handle(request, response)
);

usersRoutes.get("/", (request, response) =>
  listAllUsersController.handle(request, response)
);

export { usersRoutes };
