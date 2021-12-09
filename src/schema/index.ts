import { buildSchema } from 'type-graphql';
import { resolvers } from './resolvers';
import { TypegooseMiddleware } from '../utils/middlewares';

const createSchema = () => {
  return buildSchema({
    resolvers,
    globalMiddlewares: [TypegooseMiddleware]
  });
};

export default createSchema;
