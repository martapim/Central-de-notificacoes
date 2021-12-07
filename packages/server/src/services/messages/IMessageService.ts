import { IMessage } from "../../models/IMessage";

interface IMessageService {
  getAllMessage(): Promise<IMessage[] | null>;
  getMessageById(id: string): Promise<IMessage | null>;
  getAllMessageByUserId(userId: string): Promise<IMessage[] | null>;
  // createMessage(data: IMessage): Promise<IMessage | null>;
  // deleteMessage(Message: IMessage, id: string): void;
}

export { IMessageService };
