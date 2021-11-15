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
    description: 'Push Pull Legs workout',
    workouts: [
      {
        name: 'Push A',
        exercises: [
          {
            exerciseName: 'Bench Press',
            setsData: [
              {
                set: 1,
                reps: 5,
                weight: 50
              },
              {
                set: 2,
                reps: 6,
                weight: 50
              },
              {
                set: 3,
                reps: 5,
                weight: 50
              }
            ]
          },
          {
            exerciseName: 'OHP',
            setsData: [
              {
                set: 1,
                reps: 5,
                weight: 60
              },
              {
                set: 2,
                reps: 6,
                weight: 50
              },
              {
                set: 3,
                reps: 5,
                weight: 50
              }
            ]
          }
        ]
      },
      {
        name: 'Pull A',
        exercises: [
          {
            exerciseName: 'Deadlift',
            setsData: [
              {
                set: 1,
                reps: 5,
                weight: 150
              },
              {
                set: 2,
                reps: 6,
                weight: 50
              },
              {
                set: 3,
                reps: 5,
                weight: 50
              }
            ]
          },
          {
            exerciseName: 'Barbell row',
            setsData: [
              {
                set: 1,
                reps: 5,
                weight: 60
              },
              {
                set: 2,
                reps: 6,
                weight: 50
              },
              {
                set: 3,
                reps: 5,
                weight: 50
              }
            ]
          }
        ]
      },
      {
        name: 'Legs A',
        exercises: [
          {
            exerciseName: 'Squat',
            setsData: [
              {
                set: 1,
                reps: 5,
                weight: 50
              },
              {
                set: 2,
                reps: 6,
                weight: 50
              },
              {
                set: 3,
                reps: 5,
                weight: 50
              }
            ]
          },
          {
            exerciseName: 'Leg press',
            setsData: [
              {
                set: 1,
                reps: 5,
                weight: 60
              },
              {
                set: 2,
                reps: 6,
                weight: 50
              },
              {
                set: 3,
                reps: 5,
                weight: 50
              }
            ]
          }
        ]
      }
    ]
  }
};
