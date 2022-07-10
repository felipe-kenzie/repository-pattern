// import { validate } from "uuid";

// import { UsersRepository } from "../../../repositories/implementations/UsersRepository";

// describe("UsersRepository", () => {
//   let usersRepository: UsersRepository;

//   beforeAll(() => {
//     usersRepository = UsersRepository.getInstance();
//   });

//   it("should be able to create new users", () => {
//     const user = usersRepository.create({
//       name: "Felipe Silva",
//       email: "felipe@mail.com",
//     });

//     expect(user).toMatchObject({
//       name: "Felipe Silva",
//       email: "felipe@mail.com",
//       admin: false,
//     });
//     expect(validate(user.id)).toBe(true);
//     expect(user.created_at).toBeInstanceOf(Date);
//     expect(user.updated_at).toBeInstanceOf(Date);
//   });

//   it("should be able to list all users", () => {
//     const user = usersRepository.create({
//       name: "Felipe Silva",
//       email: "felipe@mail.com",
//     });

//     const users = usersRepository.list();

//     expect(users).toStrictEqual(expect.arrayContaining([user]));
//   });

//   it("should be able to find user by e-mail address", () => {
//     const user = usersRepository.create({
//       name: "Felipe Silva",
//       email: "felipe@mail.com",
//     });

//     const findUser = usersRepository.findByEmail(user.email);

//     expect(findUser).toMatchObject({
//       name: user.name,
//       email: user.email,
//       admin: false,
//     });
//     expect(validate(findUser.id)).toBe(true);
//     expect(findUser.created_at).toBeInstanceOf(Date);
//     expect(findUser.updated_at).toBeInstanceOf(Date);
//   });
// });
