import { User } from "models/User";

interface ICreateUser {
  name: string;
  email: string;
}

interface IUsersRepository {
  create({ email, name }: ICreateUser): Promise<User> | User;
  findByEmail(email: string): Promise<User> | User;
  list(): Promise<User[]> | User[];
}

export { IUsersRepository, ICreateUser };
