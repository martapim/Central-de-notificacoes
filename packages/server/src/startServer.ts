import { ApolloServer } from "apollo-server";

function startServer(typeDefs: any, resolvers: any) {
  const server = new ApolloServer({ typeDefs, resolvers });
  server
    .listen()
    .then(({ url }: { url: string }) =>
      console.log(`🔥 Server started at ${url}`),
    );
}

export { startServer };
