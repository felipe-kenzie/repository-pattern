import { User } from "../models/User";
import { IUsersRepository } from "../repositories/IUsersRepository";

class ListAllUsersService {
  constructor(private usersRepository: IUsersRepository) {}
  async execute(): Promise<User[]> {
    const users = await this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersService };
