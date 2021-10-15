import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { resolvers } from './resolvers';

const createSchema = () => {
  return buildSchema({
    resolvers
  });
};

export default createSchema;
