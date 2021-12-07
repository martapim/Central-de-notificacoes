import { IUser } from "../../models/IUser";
import { IUserRepository } from "../../repositories/users/IUserRepository";
import { IUserService } from "./IUserService";

class UserService implements IUserService {
  private userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async getAllUser(): Promise<IUser[] | null> {
    const users = this.userRepository.getAllUser();
    return users;
  }

  async getUserById(id: string): Promise<IUser | null> {
    const user = this.userRepository.getUserById(id);
    return user;
  }
}

export { UserService };
