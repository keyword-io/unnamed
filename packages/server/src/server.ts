import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { schema } from './schema';
import { context, Context } from './context';

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer<Context>({
  schema,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests

export async function apolloServer() {
  const { url } = await startStandaloneServer<Context>(server, {
    listen: { port: 4000 },
    context: () => context,
  });

  console.log(`🚀  Server ready at: ${url}`);
}
