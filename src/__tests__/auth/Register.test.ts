import mongoose from 'mongoose';
import { graphQLCall } from '../../test-utils/graphQLCall';
import { testConnection } from '../../test-utils/testConnection';
import faker from 'faker';
import UserModel from '../../models/user';

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
  it('User can be created', async () => {
    const user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    };

    const response = await graphQLCall({
      source: registerMutation,
      variableValues: {
        registerInput: user
      }
    });

    expect(response).toMatchObject({
      data: {
        register: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        }
      }
    });

    const userInDatabase = await UserModel.findOne({ email: user.email });
    expect(userInDatabase).toBeDefined(); // Expect if the user exists in the database
    expect(userInDatabase!.email).toBe(user.email); // Expect that the user has an email in the database
  });

  it('User with wrong email format is not created', async () => {
    const user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: 'not-an-email.com',
      password: faker.internet.password()
    };

    const response = await graphQLCall({
      source: registerMutation,
      variableValues: {
        registerInput: user
      }
    });

    // user is not created
    expect(response).toMatchObject({
      data: null
    });

    // Error response also contains the constraints on what went wrong
    expect(response!.errors![0].message).toBe('Argument Validation Error');
  });

  it('Email is already in use', async () => {
    const user = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    };

    await UserModel.create(user);

    expect(await UserModel.findOne({ email: user.email })).toBeDefined(); // Check if user got saved to the database

    const response = await graphQLCall({
      source: registerMutation,
      variableValues: {
        registerInput: user
      }
    });

    expect(response).toMatchObject({
      data: null
    });
    expect(response!.errors![0].message).toBe('E-mail is already in use');
  });
});
