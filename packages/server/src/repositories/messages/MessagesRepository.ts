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

import { IMessage } from "../../models/IMessage";

export class MessagesRepository {
  private db: Firestore;

  constructor(db: Firestore) {
    this.db = db;
  }

  async getAllMessage() {
    const messagesCol = collection(this.db, "messages");
    const messagesSnapshot = await getDocs(messagesCol);
    const messagesList = messagesSnapshot.docs.map(doc => doc.data());
    return messagesList;
  }

  getMessageById(id: string) {
    const messageRef = collection(this.db, "messages");
    const message = query(messageRef, where("id", "==", id));
    return message;
  }

  async createMessage(message: IMessage, id: string) {
    await setDoc(doc(this.db, "messages", id), message);
  }

  async deleteMessage(id: string) {
    await deleteDoc(doc(this.db, "messages", id));
  }

  async updateMessage(message: IMessage, id: string) {
    const messageRef = doc(this.db, "messages", id);
    await updateDoc(messageRef, { ...message });
  }
}
