import { User } from "../models/User";
import { IUsersRepository } from "../repositories/IUsersRepository";

class ListAllUsersService {
  constructor(private usersRepository: IUsersRepository) {}
  execute(): Promise<User[]> | User[] {
    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersService };
