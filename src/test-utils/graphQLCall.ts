import { graphql, GraphQLSchema } from 'graphql';
import { Maybe } from 'type-graphql';
import createSchema from '../schema';
import { User } from '../models/user';

type Options = {
  source: string;
  variableValues?: Maybe<{ [key: string]: any }>;
  currentUser?: Omit<User, 'password'> | null;
};

let schema: GraphQLSchema;

export const graphQLCall = async ({
  source,
  variableValues,
  currentUser
}: Options) => {
  // Create a schema if it doesn't exist
  // graphQLCall is called in tests multiple times but the schema is created once
  if (!schema) {
    schema = await createSchema();
  }
  return graphql({
    schema,
    source,
    variableValues,
    contextValue: {
      currentUser
    }
  });
};
