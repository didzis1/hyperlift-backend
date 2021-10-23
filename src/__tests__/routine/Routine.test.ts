import mongoose from 'mongoose';
import { testConnection } from '../../test-utils/testConnection';
import RoutineModel from '../../models/routine';
import UserModel from '../../models/user';
import { graphQLCall } from '../../test-utils/graphQLCall';
import {
  createUserAndRoutine,
  dummyRoutineData
} from '../../test-utils/createUserAndRoutine';
import { getRoutinesQuery } from '../../test-utils/queries/getRoutinesQuery';

beforeAll(async () => {
  await testConnection();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('RoutineResolver', () => {
  it('User can create a routine', async () => {
    const { createdRoutine, fakeUser } = await createUserAndRoutine();

    expect(createdRoutine!.data!.createRoutine.workouts).toMatchObject(
      dummyRoutineData.routineData.workouts
    );

    const findRoutine = await RoutineModel.findById(
      createdRoutine!.data!.createRoutine.id
    );

    expect(findRoutine).toBeDefined();
    expect(findRoutine!.description).toMatch(
      dummyRoutineData.routineData.description
    );

    // Check that the routine is saved under user
    const userWithRoutine = await UserModel.findById(fakeUser._id);
    expect(userWithRoutine!.routines).toHaveLength(1);
  });

  it('User can fetch all its created routines', async () => {
    const { currentUser } = await createUserAndRoutine();

    const allRoutines = await graphQLCall({
      source: getRoutinesQuery,
      currentUser
    });

    expect(allRoutines!.data!.getRoutines).toHaveLength(1);
  });
});
