import { users } from "../database";
import { User } from "../models/User";

class ListAllUsersService {
  execute(): User[] {
    return users;
  }
}

export { ListAllUsersService };
