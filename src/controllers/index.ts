import { createUserService, listAllUsersService } from "../services";
import { CreateUserController } from "./createUser.controller";
import { ListAllUsersController } from "./listAllUsers.controller";

const createUserController = new CreateUserController(createUserService);
const listAllUsersController = new ListAllUsersController(listAllUsersService);

export { createUserController, listAllUsersController };
