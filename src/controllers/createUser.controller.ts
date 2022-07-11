import { Response, Request } from "express";

import { CreateUserService } from "../services/createUser.service";

class CreateUserController {
  constructor(private createUserService: CreateUserService) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, name } = req.body;

    try {
      const newUser = await this.createUserService.execute({ email, name });

      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { CreateUserController };
