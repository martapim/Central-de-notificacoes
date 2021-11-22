import { db } from "../../config/firebase";
import { UsersRepository } from "../../repositories/users/UsersRepository";
import { UserService } from "../../services/users/UserService";
import { UserController } from "./UserController";

const userRepository = new UsersRepository(db);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

export { userController };
