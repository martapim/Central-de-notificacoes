import {
  collection,
  CollectionReference,
  doc,
  Firestore,
  getDoc,
  getDocs,
} from "firebase/firestore/lite";

import { IUser } from "../../models/IUser";
import { IUserRepository } from "./IUserRepository";

class UsersRepository implements IUserRepository {
  private db: Firestore;
  private usersCol: CollectionReference<Omit<IUser, "id">>;

  constructor(db: Firestore) {
    this.db = db;
    this.usersCol = collection(this.db, "users") as CollectionReference<
      Omit<IUser, "id">
    >;
  }

  async getAllUser(): Promise<IUser[] | null> {
    const userDocRef = await getDocs(this.usersCol);

    if (!userDocRef) return null;
    const usersList = userDocRef.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return usersList;
  }

  async getUserById(id: string): Promise<IUser | null> {
    const userDocRef = doc(this.usersCol, id);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.data()) return null;
    return { id: userDoc.id, ...userDoc.data()! };
  }
}

export { UsersRepository };
