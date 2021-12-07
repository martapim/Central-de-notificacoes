import { db } from "../../config/firebase";
import { MessagesRepository } from "../../repositories/messages/MessagesRepository";
import { MessageService } from "../../services/messages/MessageService";
import { MessageController } from "./MessageController";

const messageRepository = new MessagesRepository(db);
const messageService = new MessageService(messageRepository);
const messageController = new MessageController(messageService);

export { messageController };
