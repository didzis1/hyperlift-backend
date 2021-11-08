import mongoose from 'mongoose';
import { testConnection } from '../test-utils/testConnection';
import faker from 'faker';
import UserModel from '../models/user';
import { graphQLCall } from '../test-utils/graphQLCall';
import { me } from '../test-utils/queries/me';

beforeAll(async () => {
  await testConnection();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Me', () => {
  it('Get user from context', async () => {
    const user = await UserModel.create({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    });

    // Normally user's ID is verified through token
    // Here we assume that the user is logged in
    const currentUser = await UserModel.findById(user._id);

    const response = await graphQLCall({
      source: me,
      currentUser
    });

    expect(response).toMatchObject({
      data: {
        me: {
          id: `${user._id}`,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        }
      }
    });
  });
});
