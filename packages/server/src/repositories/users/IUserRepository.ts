import { IUser } from "../../models/IUser";

interface IUserRepository {
  getAllUser(): Promise<IUser[]>;
  createUser(user: IUser, id: string): void;
  deleteUser(id: string): void;
  updateUser(user: IUser, id: string): void;
}
export { IUserRepository };
