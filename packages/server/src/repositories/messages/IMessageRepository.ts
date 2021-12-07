import { IMessage } from "../../models/IMessage";

interface IMessageRepository {
  getMessageById(id: string): Promise<IMessage | null>;
  getAllMessage(): Promise<IMessage[] | null>;
  getAllMessageByUserId(userId: string): Promise<IMessage[] | null>;
  // deleteMessage(id: string): void;
}
export { IMessageRepository };
