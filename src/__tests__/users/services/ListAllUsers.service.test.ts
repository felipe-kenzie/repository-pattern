import { PostgresRepository } from "../../../repositories/implementations/PostgresRepository";
import { UsersRepository } from "../../../repositories/implementations/UsersRepository";
import { ListAllUsersService } from "../../../services/listAllUsers.service";

describe("ListAllUsersService", () => {
  let usersRepository: PostgresRepository;

  let listAllUsersService: ListAllUsersService;

  beforeAll(() => {
    usersRepository = new PostgresRepository();

    listAllUsersService = new ListAllUsersService(usersRepository);
  });

  test("should be able to list all users", async () => {
    const user1 = await usersRepository.create({
      name: "Felipe",
      email: "felipe@mail.com",
    });

    const user2 = await usersRepository.create({
      name: "Fabio",
      email: "fabio@mail.com",
    });

    const user3 = await usersRepository.create({
      name: "Joana",
      email: "joana@mail.com",
    });

    const users = await listAllUsersService.execute();

    expect(users).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "Felipe",
          email: "felipe@mail.com",
        }),
        user2,
        user3,
      ])
    );
  });
});
