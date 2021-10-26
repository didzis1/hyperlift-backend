import mongoose from 'mongoose';
import { graphQLCall } from '../../test-utils/graphQLCall';
import { testConnection } from '../../test-utils/testConnection';
import faker from 'faker';
import UserModel from '../../models/user';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';
import { JWT_SECRET_KEY } from '../../utils/config';
import { login } from '../../test-utils/mutations/login';

beforeAll(async () => {
  await testConnection();
});

afterAll(async () => {
  await mongoose.connection.close();
});

const userWithHashedPassword = async () => {
  // Create a password and hash it so that LoginResolver can compare passwords with bcryptjs
  const password = faker.internet.password();
  const hashedPassword = await bcryptjs.hash(password, 12);

  const user = await UserModel.create({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: hashedPassword
  });

  return {
    password,
    hashedPassword,
    user
  };
};

describe('LoginResolver', () => {
  it('User can log in and create a token', async () => {
    const { user, password } = await userWithHashedPassword();

    const response = await graphQLCall({
      source: login,
      variableValues: {
        loginInput: {
          email: user.email,
          password
        }
      }
    });

    // console.log('response', response);

    const tokenToMatch = jwt.sign(
      { email: user.email, id: user._id },
      JWT_SECRET_KEY as string
    );

    // console.log('token to match', tokenToMatch);

    expect(response).toMatchObject({
      data: {
        login: {
          value: tokenToMatch
        }
      }
    });
  });

  it('Can not log in with wrong password', async () => {
    const { user } = await userWithHashedPassword();
    const wrongPassword = 'WrongOnPurpose';

    const response = await graphQLCall({
      source: login,
      variableValues: {
        loginInput: { email: user.email, password: wrongPassword }
      }
    });

    expect(response.data).toMatchObject({
      login: null
    });

    expect(response!.errors![0].message).toBe('Wrong username or password');
  });

  it('Can not log in with user that does not exist', async () => {
    const response = await graphQLCall({
      source: login,
      variableValues: {
        loginInput: {
          email: 'non-existant-user@gmail.com',
          password: 'password'
        }
      }
    });

    expect(response.data).toMatchObject({
      login: null
    });

    expect(response!.errors![0].message).toBe('Wrong username or password');
  });
});
