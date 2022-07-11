import { User } from "../models/User";
import { IUsersRepository } from "../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ email, name }: IRequest): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const newUser = await this.usersRepository.create({ email, name });

    return newUser;
  }
}

export { CreateUserService };
