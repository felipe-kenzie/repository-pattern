import { Request, Response } from "express";
import { ListAllUsersService } from "services/listAllUsers.service";

class ListAllUsersController {
  constructor(private listAllUsersService: ListAllUsersService) {}
  handle(req: Request, res: Response): Response {
    const users = this.listAllUsersService.execute();

    return res.json(users);
  }
}

export { ListAllUsersController };
