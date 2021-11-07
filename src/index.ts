
import { ApolloServer } from "apollo-server-express";
import "reflect-metadata";
import { buildSchema, Query, Resolver } from 'type-graphql';
import * as Express from "express";
import { createConnection } from "typeorm";

@Resolver()
class HelloResolver {
  @Query(() => String)
  async hello() {
    return 'Hello World!';
  }
}

const main = async () => {
  const connection = await createConnection();
  const schema = await buildSchema({
    resolvers: [HelloResolver],
  });

  const apolloServer = new ApolloServer({ schema });

  const app = Express();
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log('Server started on http://localhost:4000/graphql');
  });

}


main();