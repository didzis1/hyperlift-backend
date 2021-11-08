import faker from 'faker';
import UserModel from '../models/user';
import { graphQLCall } from './graphQLCall';
import { createRoutine } from './mutations/createRoutine';

// User and routine is created in multiple tests, reusable function
export const createUserAndRoutine = async () => {
  const fakeUser = await UserModel.create({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  });

  // Normally user's ID is verified through token
  // Here we assume that the user is logged in
  const currentUser = await UserModel.findById(fakeUser._id).populate(
    'routines'
  );

  const createdRoutine = await graphQLCall({
    source: createRoutine,
    variableValues: dummyRoutineData,
    currentUser: {
      id: currentUser!._id,
      email: currentUser!.email,
      firstName: currentUser!.firstName,
      lastName: currentUser!.lastName,
      maxLifts: currentUser!.maxLifts,
      routines: currentUser!.routines,
      history: currentUser!.history,
      liftingType: currentUser!.liftingType,
      age: currentUser!.age
    }
  });
  return { createdRoutine, currentUser, fakeUser };
};

export const dummyRoutineData = {
  routineData: {
    description: 'Push Pull Legs',
    workouts: [
      {
        name: 'Push day',
        exercises: [
          {
            exerciseName: 'Bench Press',
            reps: 5,
            sets: 3,
            weight: 65
          },
          {
            exerciseName: 'OHP',
            reps: 5,
            sets: 3,
            weight: 45
          }
        ]
      },
      {
        name: 'Pull day',
        exercises: [
          {
            exerciseName: 'Deadlift',
            reps: 5,
            sets: 3,
            weight: 100
          },
          {
            exerciseName: 'Bend over rows',
            reps: 5,
            sets: 3,
            weight: 70
          }
        ]
      },
      {
        name: 'Leg day',
        exercises: [
          {
            exerciseName: 'Squat',
            reps: 5,
            sets: 3,
            weight: 100
          },
          {
            exerciseName: 'Leg curls',
            reps: 10,
            sets: 3,
            weight: 40
          }
        ]
      }
    ]
  }
};
