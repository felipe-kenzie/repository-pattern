import { UsersRepository } from "../../../repositories/implementations/UsersRepository";
import { CreateUserService } from "../../../services/createUser.service";

describe("CreateUserService", () => {
  let createUserService: CreateUserService;
  let usersRepository: UsersRepository;

  beforeAll(() => {
    usersRepository = UsersRepository.getInstance();
    createUserService = new CreateUserService(usersRepository);
  });

  it("should be able to create new users", () => {
    const user = createUserService.execute({
      name: "Felipe Silva",
      email: "felipe@mail.com",
    });

    expect(usersRepository.list()).toStrictEqual([user]);
  });

  it("should not be able to create new users when email is already taken", () => {
    expect(() => {
      createUserService.execute({
        name: "Felipe Silva",
        email: "felipe@mail.com",
      });
    }).toThrow();
  });
});
