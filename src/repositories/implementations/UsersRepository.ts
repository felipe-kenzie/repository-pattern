import { User } from "../../models/User";
import { ICreateUser, IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ email, name }: ICreateUser): User {
    const newUser = new User();
    Object.assign(newUser, {
      name,
      email,
    });
    this.users.push(newUser);
    return newUser;
  }
  findByEmail(email: string): User {
    const user = this.users.find((user) => user.email === email);
    return user;
  }
  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
