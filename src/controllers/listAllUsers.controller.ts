import { Request, Response } from "express";
import { ListAllUsersService } from "services/listAllUsers.service";

class ListAllUsersController {
  constructor(private listAllUsersService: ListAllUsersService) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const users = await this.listAllUsersService.execute();

    return res.json(users);
  }
}

export { ListAllUsersController };
