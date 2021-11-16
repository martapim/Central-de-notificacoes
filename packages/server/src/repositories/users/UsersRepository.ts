import {
  collection,
  deleteDoc,
  doc,
  Firestore,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore/lite";

import { IUser } from "../../models/IUser";

export class UsersRepository {
  private db: Firestore;

  constructor(db: Firestore) {
    this.db = db;
  }

  async getAllUser() {
    const usersCol = collection(this.db, "users");
    const usersSnapshot = await getDocs(usersCol);
    const usersList = usersSnapshot.docs.map(doc => doc.data());
    return usersList;
  }

  getUserById(id: string) {
    const userRef = collection(this.db, "users");
    const user = query(userRef, where("id", "==", id));
    return user;
  }

  async createUser(user: IUser, id: string) {
    await setDoc(doc(this.db, "users", id), user);
  }

  async deleteUser(id: string) {
    await deleteDoc(doc(this.db, "users", id));
  }

  async updateUser(user: IUser, id: string) {
    const userRef = doc(this.db, "users", id);
    await updateDoc(userRef, { ...user });
  }
}
