import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/user/resolvers";
import { startServer } from "./startServer";

startServer(typeDefs, resolvers);
