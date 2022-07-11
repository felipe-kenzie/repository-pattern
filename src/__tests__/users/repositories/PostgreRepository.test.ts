import { validate } from "uuid";

import { PostgresRepository } from "../../../repositories/implementations/PostgresRepository";

describe("UsersRepository", () => {
  let usersRepository: PostgresRepository;

  beforeAll(() => {
    usersRepository = new PostgresRepository();
  });

  test("should be able to create new users", async () => {
    const user = await usersRepository.create({
      name: "Pedro",
      email: "pedro@mail.com",
    });

    expect(user).toMatchObject({
      name: "Pedro",
      email: "pedro@mail.com",
      admin: false,
    });
    expect(validate(user.id)).toBe(true);
    expect(user.created_at).toBeInstanceOf(Date);
    expect(user.updated_at).toBeInstanceOf(Date);
  });

  test("should be able to list all users", async () => {
    const user = await usersRepository.create({
      name: "maykel",
      email: "maykel@mail.com",
    });

    const users = await usersRepository.list();

    expect(users).toStrictEqual(expect.arrayContaining([user]));
  });

  test("should be able to find user by e-mail address", async () => {
    const user = await usersRepository.create({
      name: "Eduardo",
      email: "eduardo@mail.com",
    });

    const findUser = await usersRepository.findByEmail(user.email);

    expect(findUser).toMatchObject({
      name: user.name,
      email: user.email,
      admin: false,
    });
    expect(validate(findUser.id)).toBe(true);
    expect(findUser.created_at).toBeInstanceOf(Date);
    expect(findUser.updated_at).toBeInstanceOf(Date);
  });
});
