import { Response, Request } from "express";

import { CreateUserService } from "../services/createUser.service";

class CreateUserController {
  constructor(private createUserService: CreateUserService) {}
  handle(req: Request, res: Response): Response {
    const { email, name } = req.body;

    try {
      const newUser = this.createUserService.execute({ email, name });

      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { CreateUserController };
