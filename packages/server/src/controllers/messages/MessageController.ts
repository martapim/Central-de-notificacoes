import { IMessageService } from "../../services/messages/IMessageService";

class MessageController {
  private messageService: IMessageService;

  constructor(messageService: IMessageService) {
    this.messageService = messageService;
  }

  async getMessageById(id: string) {
    const message = this.messageService.getMessageById(id);
    return message;
  }

  async getAllMessage() {
    const messages = this.messageService.getAllMessage();
    return messages;
  }

  async getAllMessageByUserId(userId: string) {
    const messages = await this.messageService.getAllMessageByUserId(userId);
    return messages;
  }

  // async createMessage(data: IMessage) {
  //   const message = this.messageService.createMessage(data);
  //   return message;
  // }

  //   async deleteMessage(id: string): Promise<void> {
  //     this.messageService.deleteMessage(Message, id);
  //   }
}

export { MessageController };
