import { IUser } from "../../models/IUser";

interface IUserService {
  getAllUser(): Promise<IUser[] | null>;
  getUserById(id: string): Promise<IUser | null>;
}

export { IUserService };
