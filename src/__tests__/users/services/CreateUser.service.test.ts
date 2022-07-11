import { PostgresRepository } from "../../../repositories/implementations/PostgresRepository";
// import { UsersRepository } from "../../../repositories/implementations/UsersRepository";
import { CreateUserService } from "../../../services/createUser.service";

describe("CreateUserService", () => {
  let createUserService: CreateUserService;

  let usersRepository: PostgresRepository;

  beforeAll(() => {
    usersRepository = new PostgresRepository();

    createUserService = new CreateUserService(usersRepository);
  });

  test("should be able to create new users", async () => {
    const user = await createUserService.execute({
      name: "Alexandre",
      email: "alexandre@mail.com",
    });

    expect(await usersRepository.findByEmail(user.email)).toStrictEqual(user);
  });
});
