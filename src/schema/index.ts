import 'reflect-metadata';
import { UserResolver } from './resolvers/UserResolver';
import { buildSchema } from 'type-graphql';

export const createSchema = () => {
  return buildSchema({
    resolvers: [UserResolver]
  });
};
