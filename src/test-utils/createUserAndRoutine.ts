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

  console.log('create routine', createdRoutine);
  return { createdRoutine, currentUser, fakeUser };
};

export const dummyRoutineData = {
  routineData: {
    description: 'Push Pull Legs workout',
    workouts: [
      {
        name: 'Push A',
        exercises: [
          {
            exerciseName: 'Bench Press',
            sets: 5,
            reps: 3
          },
          {
            exerciseName: 'OHP',
            sets: 5,
            reps: 8
          }
        ]
      },
      {
        name: 'Pull A',
        exercises: [
          {
            exerciseName: 'Deadlift',
            sets: 5,
            reps: 8
          },
          {
            exerciseName: 'Barbell row',
            sets: 5,
            reps: 8
          }
        ]
      },
      {
        name: 'Legs A',
        exercises: [
          {
            exerciseName: 'Squat',
            sets: 5,
            reps: 3
          },
          {
            exerciseName: 'Leg press',
            sets: 3,
            reps: 10
          }
        ]
      }
    ]
  }
};
