import { users } from "../database";
import { User } from "../models/User";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserService {
  execute({ email, name }: IRequest): User {
    const userAlreadyExists = users.find((user) => user.email === email);

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const newUser = new User();
    Object.assign(newUser, {
      name,
      email,
    });

    users.push(newUser);

    return newUser;
  }
}

export { CreateUserService };
