import { CreateUserService } from "./createUser.service";
import { ListAllUsersService } from "./listAllUsers.service";

const createUserService = new CreateUserService();
const listAllUsersService = new ListAllUsersService();

export { createUserService, listAllUsersService };
