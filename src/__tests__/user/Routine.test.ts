import mongoose from 'mongoose';
import { testConnection } from '../../test-utils/testConnection';
import RoutineModel from '../../models/routine';
import UserModel from '../../models/user';
import { graphQLCall } from '../../test-utils/graphQLCall';
import faker from 'faker';

const dummyRoutineData = {
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

const createRoutineMutation = `
	mutation Mutation($routineData: NewRoutineInput!) {
		createRoutine(routineData: $routineData) {
			id
			description
			workouts { 
				name
				exercises {
					exerciseName
					reps
					sets
					weight
				}
			}
		}
			
	}
`;

const findRoutinesQuery = `
	query Query {
		getRoutines {
			id
			description
			workouts {
				name
				exercises {
					exerciseName
					reps
					sets
					weight
				}
			}
		}
	}
`;

// User and routine is created in multiple tests, reusable function
const createUserAndRoutine = async () => {
  const fakeUser = await UserModel.create({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  });

  // Normally user's ID is verified through token
  // Here we assume that the user is logged in
  const currentUser = await UserModel.findById(fakeUser._id);

  const createdRoutine = await graphQLCall({
    source: createRoutineMutation,
    variableValues: dummyRoutineData,
    currentUser: {
      id: currentUser!._id,
      email: currentUser!.email,
      firstName: currentUser!.firstName,
      lastName: currentUser!.lastName,
      maxLifts: currentUser!.maxLifts,
      routines: currentUser!.routines
    }
  });

  return { createdRoutine, currentUser, fakeUser };
};

beforeAll(async () => {
  await testConnection();
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Routine', () => {
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
      source: findRoutinesQuery,
      currentUser
    });

    expect(allRoutines!.data!.getRoutines).toHaveLength(1);
  });
});
