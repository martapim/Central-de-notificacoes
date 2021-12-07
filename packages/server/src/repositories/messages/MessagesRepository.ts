import {
  collection,
  CollectionReference,
  doc,
  Firestore,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore/lite";

import { IMessage } from "../../models/IMessage";
import { IMessageRepository } from "./IMessageRepository";

class MessagesRepository implements IMessageRepository {
  private db: Firestore;
  private messagesCol: CollectionReference<Omit<IMessage, "id">>;

  constructor(db: Firestore) {
    this.db = db;
    this.messagesCol = collection(this.db, "messages") as CollectionReference<
      Omit<IMessage, "id">
    >;
  }

  async getMessageById(id: string): Promise<IMessage | null> {
    const messageDocRef = doc(this.messagesCol, id);
    const messageDoc = await getDoc(messageDocRef);

    if (!messageDoc.data()) return null;
    return { id: messageDoc.id, ...messageDoc.data()! };
  }

  async getAllMessage(): Promise<IMessage[] | null> {
    const messagesSnapshot = await getDocs(this.messagesCol);
    const messagesList = messagesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));
    return messagesList;
  }

  async getAllMessageByUserId(userId: string): Promise<IMessage[] | null> {
    const userQuery = query(this.messagesCol, where("userId", "==", userId));
    const messagesSnapshot = await getDocs(userQuery);

    const messagesList = messagesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return messagesList;
  }
}

export { MessagesRepository };
