import { validate } from "uuid";

import { UsersRepository } from "../../../repositories/implementations/UsersRepository";

describe("UsersRepository", () => {
  let usersRepository: UsersRepository;

  beforeAll(() => {
    usersRepository = UsersRepository.getInstance();
  });

  test("should be able to create new users", () => {
    const user = usersRepository.create({
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

  test("should be able to list all users", () => {
    const user = usersRepository.create({
      name: "maykel",
      email: "maykel@mail.com",
    });

    const users = usersRepository.list();

    expect(users).toStrictEqual(expect.arrayContaining([user]));
  });

  test("should be able to find user by e-mail address", () => {
    const user = usersRepository.create({
      name: "Eduardo",
      email: "eduardo@mail.com",
    });

    const findUser = usersRepository.findByEmail(user.email);

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
