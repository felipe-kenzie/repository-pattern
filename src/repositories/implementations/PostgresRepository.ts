import { User } from "models/User";

import { prisma } from "../../database/prismaClient";
import { ICreateUser, IUsersRepository } from "../IUsersRepository";

class PostgresRepository implements IUsersRepository {
  async create({ email, name }: ICreateUser): Promise<User> {
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async list(): Promise<User[]> {
    const users = await prisma.user.findMany();

    return users;
  }
}

export { PostgresRepository };
