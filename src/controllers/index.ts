import { CreateUserController } from "./createUser.controller";
import { ListAllUsersController } from "./listAllUsers.controller";

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();

export { createUserController, listAllUsersController };
