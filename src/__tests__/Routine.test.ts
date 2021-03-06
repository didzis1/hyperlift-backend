import mongoose from 'mongoose';
import { testConnection } from '../test-utils/testConnection';
import RoutineModel from '../models/routine';
import UserModel from '../models/user';
import { graphQLCall } from '../test-utils/graphQLCall';
import {
  createUserAndRoutine,
  dummyRoutineData
} from '../test-utils/createUserAndRoutine';
import { getRoutines } from '../test-utils/queries/getRoutines';

beforeAll(async () => {
  await testConnection();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('RoutineResolver', () => {
  it('User can create a routine', async () => {
    const { createdRoutine, fakeUser } = await createUserAndRoutine();
    console.log(dummyRoutineData.routineData.workouts);
    expect(createdRoutine!.data!.createRoutine.workouts).toMatchObject(
      dummyRoutineData.routineData.workouts
    );

    const findRoutine = await RoutineModel.findOne({
      id: createdRoutine!.data!.createRoutine.id
    });

    expect(findRoutine).toBeDefined();
    expect(findRoutine!.description).toMatch(
      dummyRoutineData.routineData.description
    );

    //Check that the routine is saved under user
    const userWithRoutine = await UserModel.findById(fakeUser._id);
    expect(userWithRoutine!.routines).toHaveLength(1);
  });

  it('User can fetch all its created routines', async () => {
    const { currentUser } = await createUserAndRoutine();

    const allRoutines = await graphQLCall({
      source: getRoutines,
      currentUser
    });
    console.log(allRoutines);
    expect(allRoutines!.data!.getRoutines).toHaveLength(1);
  });

  it('User can delete a routine', async () => {
    const { createdRoutine, currentUser } = await createUserAndRoutine();
    console.log('Routine created:', createdRoutine);
    console.log('Current user created:', currentUser);
  });
});
