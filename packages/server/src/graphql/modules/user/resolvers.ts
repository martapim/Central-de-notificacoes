import { userController } from "../../../controllers/users/index";

export default {
  Query: {
    users: () => userController.getAllUser(),
    user: (_: unknown, { id }: { id: string }) =>
      userController.getUserById(id),
  },
  Mutation: {
    createUser: () => userController.getAllUser(),
    deleteUser: () => userController.getAllUser(),
    updateUser: () => userController.getAllUser(),
  },
};
