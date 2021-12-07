import { IUser } from "../../models/IUser";

interface IUserRepository {
  getUserById(id: string): Promise<IUser | null>;
  getAllUser(): Promise<IUser[] | null>;
}

export { IUserRepository };
