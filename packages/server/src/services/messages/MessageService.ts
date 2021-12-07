import { IMessage } from "../../models/IMessage";
import { IMessageRepository } from "../../repositories/messages/IMessageRepository";
import { IMessageService } from "./IMessageService";

class MessageService implements IMessageService {
  private messageRepository: IMessageRepository;
  constructor(messageRepository: IMessageRepository) {
    this.messageRepository = messageRepository;
  }

  async getAllMessage(): Promise<IMessage[] | null> {
    const messages = this.messageRepository.getAllMessage();
    return messages;
  }

  async getMessageById(id: string): Promise<IMessage | null> {
    const message = this.messageRepository.getMessageById(id);
    return message;
  }

  async getAllMessageByUserId(userId: string): Promise<IMessage[] | null> {
    const messages = await this.messageRepository.getAllMessageByUserId(userId);
    return messages;
  }

  // async createMessage(data: IMessage): Promise<IMessage | null> {
  //   const message = await this.messageRepository.createMessageData(data);
  //   return message;
  // }

  // async deleteMessage(Message: IMessage, id: string): Promise<void> {
  //   await this.messageRepository.deleteMessage(id);
  // }

  // async createMessage(Message: IMessage, id: string) {
  //   const createMessage = this.messageRepository.createMessage(Message, id);
  //   return createMessage;
  // }
}

export { MessageService };
