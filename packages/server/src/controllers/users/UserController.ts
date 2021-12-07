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

  async getUserById(id: string) {
    const user = this.userService.getUserById(id);
    return user;
  }

  // async createUser(user: IUser, id: string): Promise<void> {
  //   this.userService.createUser(user, id);
  // }

  // async updateUser(user: IUser, id: string): Promise<void> {
  //   this.userService.updateUser(user, id);
  // }

  // async deleteUser(id: string): Promise<void> {
  //   this.userService.deleteUser(id);
  // }
}

export { UserController };
