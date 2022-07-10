import { Request, Response } from "express";

import { listAllUsersService } from "../services";

class ListAllUsersController {
  handle(req: Request, res: Response): Response {
    const users = listAllUsersService.execute();

    return res.json(users);
  }
}

export { ListAllUsersController };
