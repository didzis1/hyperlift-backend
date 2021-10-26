import mongoose from 'mongoose';
import { testConnection } from '../../test-utils/testConnection';
import UserModel from '../../models/user';
import faker from 'faker';
import { graphQLCall } from '../../test-utils/graphQLCall';
import { addMaxLift } from '../../test-utils/mutations/addMaxLift';
import { editMaxLift } from '../../test-utils/mutations/editMaxLift';
import { deleteMaxLift } from '../../test-utils/mutations/deleteMaxLift';

beforeAll(async () => {
  await testConnection();
});

afterAll(async () => {
  await mongoose.connection.close();
});

const userInfo = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  password: faker.internet.password()
};

describe('MaxLift', () => {
  it('User can add a max lift', async () => {
    const fakeUser = await UserModel.create(userInfo);

    // Normally user's ID is verified through token
    // Here we assume that the user is logged in
    const currentUser = await UserModel.findById(fakeUser._id);

    const newMaxLift = {
      maxLiftData: {
        exercise: 'Bench Press',
        weight: 100
      }
    };

    const response = await graphQLCall({
      source: addMaxLift,
      variableValues: newMaxLift,
      currentUser
    });

    expect(response!.data!.addMaxLift).toMatchObject({
      id: response!.data!.addMaxLift.id,
      ...newMaxLift.maxLiftData
    });
  });

  it('User can edit their max lift', async () => {
    const currentUser = await UserModel.findOne({ email: userInfo.email });
    // Contains one maxLift from previous test
    const maxLift = currentUser?.maxLifts[0];

    const updatedMaxLift = {
      maxLiftData: {
        id: maxLift!.id,
        exercise: maxLift!.exercise,
        weight: 90
      }
    };

    const response = await graphQLCall({
      source: editMaxLift,
      variableValues: updatedMaxLift,
      currentUser
    });

    expect(response!.data!.editMaxLift).toMatchObject(
      updatedMaxLift.maxLiftData
    );

    const updatedUser = await UserModel.findOne({ email: userInfo.email });
    // Check that weight got updated in the database
    expect(updatedUser!.maxLifts[0].weight).toBe(90);
  });

  it('User can delete max lift', async () => {
    const currentUser = await UserModel.findOne({ email: userInfo.email });
    // Contains one maxLift from previous test
    const maxLift = currentUser?.maxLifts[0];

    const response = await graphQLCall({
      source: deleteMaxLift,
      variableValues: {
        maxLiftData: {
          id: maxLift?.id
        }
      },
      currentUser
    });

    expect(response!.data!.deleteMaxLift).toBeTruthy();
  });

  it("User cannot remove max lift that doesn't exist", async () => {
    const currentUser = await UserModel.findOne({ email: userInfo.email });

    const response = await graphQLCall({
      source: deleteMaxLift,
      variableValues: {
        maxLiftData: {
          id: 'This-Max-Lift-Does-Not-Exist'
        }
      },
      currentUser
    });

    expect(response!.data!.deleteMaxLift).toBeFalsy();
  });
});
