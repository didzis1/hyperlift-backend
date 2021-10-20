import mongoose from 'mongoose';
import { graphQLCall } from '../test-utils/graphQLCall';
import { testConnection } from '../test-utils/testConnection';

beforeAll(async () => {
  await testConnection();
});

afterAll(async () => {
  await mongoose.connection.close();
});

const registerMutation = `
mutation Mutation($registerInput: RegisterInput!) {
  register(registerInput: $registerInput) {
    id
    firstName
    lastName
    email
  }
}`;

describe('RegisterResolver', () => {
  it('create user', async () => {
    console.log(
      await graphQLCall({
        source: registerMutation,
        variableValues: {
          registerInput: {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@gmail.com',
            password: 'password'
          }
        }
      })
    );
  });
});
