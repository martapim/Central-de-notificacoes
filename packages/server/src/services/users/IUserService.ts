import { IUser } from "../../models/IUser";

interface IUserService {
  getAllUser(): Promise<IUser[]>;
  getUserById(id: string): IUser;
  createUser(user: IUser, id: string): void;
  deleteUser(id: string): void;
  updateUser(user: IUser, id: string): void;
}

export { IUserService };
