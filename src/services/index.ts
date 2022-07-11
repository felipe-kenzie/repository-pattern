import { UsersRepository } from "../repositories/implementations/UsersRepository";
import { CreateUserService } from "./createUser.service";
import { ListAllUsersService } from "./listAllUsers.service";

const usersRepository = UsersRepository.getInstance();
const createUserService = new CreateUserService(usersRepository);
const listAllUsersService = new ListAllUsersService(usersRepository);

export { createUserService, listAllUsersService };
