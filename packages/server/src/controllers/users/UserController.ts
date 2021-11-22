import { IUserService } from "../../services/users/IUserService";

class UserController {
  private userService: IUserService;

  constructor(userService: IUserService) {
    this.userService = userService;
  }

  async getAllUser() {
    const users = this.userService.getAllUser();
    return users;
  }

  getUserById(id: string) {
    const user = this.userService.getUserById(id);
    return user;
  }
}

export { UserController };
