import { graphql } from 'graphql';
import { Maybe } from 'type-graphql';
import createSchema from '../schema';

type Options = {
  source: string;
  variableValues?: Maybe<{ [key: string]: any }>;
};

export const graphQLCall = async ({ source, variableValues }: Options) => {
  return graphql({
    schema: await createSchema(),
    source,
    variableValues
  });
};
