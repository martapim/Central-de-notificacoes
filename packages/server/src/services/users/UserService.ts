import { IUser } from "../../models/IUser";
import { IUserRepository } from "../../repositories/users/IUserRepository";
import { IUserService } from "./IUserService";

class UserService implements IUserService {
  private userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async getAllUser() {
    const users = this.userRepository.getAllUser();
    return users;
  }

  getUserById(id: string) {
    const user = this.userRepository.getUserById(id);
    return user;
  }

  async createUser(user: IUser, id: string) {
    this.userRepository.createUser(user, id);
  }

  async deleteUser(id: string) {
    this.userRepository.deleteUser(id);
  }

  async updateUser(user: IUser, id: string) {
    this.userRepository.updateUser(user, id);
  }
}

export { UserService };
