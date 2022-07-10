import { Response, Request } from "express";

import { createUserService } from "../services";

class CreateUserController {
  handle(req: Request, res: Response): Response {
    const { email, name } = req.body;

    try {
      const newUser = createUserService.execute({ email, name });

      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export { CreateUserController };
