// import { UsersRepository } from "../../../repositories/implementations/UsersRepository";
// import { ListAllUsersService } from "../../../services/listAllUsers.service";

// describe("ListAllUsersService", () => {
//   let usersRepository: UsersRepository;
//   let listAllUsersService: ListAllUsersService;

//   beforeAll(() => {
//     usersRepository = UsersRepository.getInstance();
//     listAllUsersService = new ListAllUsersService(usersRepository);
//   });

//   it("should be able to list all users", () => {
//     const user1 = usersRepository.create({
//       name: "Felipe",
//       email: "felipe@mail.com",
//     });

//     const user2 = usersRepository.create({
//       name: "Fabio",
//       email: "fabio@mail.com",
//     });

//     const user3 = usersRepository.create({
//       name: "Joana",
//       email: "joana@mail.com",
//     });

//     const users = listAllUsersService.execute();

//     expect(users).toEqual(
//       expect.arrayContaining([
//         expect.objectContaining({
//           name: "Felipe",
//           email: "felipe@mail.com",
//         }),
//         user2,
//         user3,
//       ])
//     );
//   });
// });
