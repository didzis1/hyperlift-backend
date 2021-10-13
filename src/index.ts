import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import { createSchema } from './schema';
require('dotenv').config();

const startApolloServer = async () => {
  const schema = await createSchema();

  await mongoose
    .connect(process.env.MONGODB_URI as string)
    .then(() => console.log('Connected successfully to MongoDB'))
    .catch((error) =>
      console.log('Error connecting to MongoDB', error.message)
    );

  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })]
  });

  await server.start();
  server.applyMiddleware({ app });
  await httpServer.listen({ port: process.env.PORT });
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
};

startApolloServer().catch((error) => console.log(error));
