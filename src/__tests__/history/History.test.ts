import mongoose from 'mongoose';
import { graphQLCall } from '../../test-utils/graphQLCall';
import { testConnection } from '../../test-utils/testConnection';
import { createUserAndRoutine } from '../../test-utils/createUserAndRoutine';
import { addHistory } from '../../test-utils/mutations/addHistory';

beforeAll(async () => {
  await testConnection();
});

afterAll(async () => {
  await mongoose.connection.close();
});

const workout = {
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
};

describe('HistoryResolver', () => {
  it('History workout can be added', async () => {
    const { createdRoutine, currentUser } = await createUserAndRoutine();

    const response = await graphQLCall({
      source: addHistory,
      variableValues: {
        historyData: {
          routineId: createdRoutine!.data!.createRoutine.id,
          workout
        }
      },
      currentUser
    });

    expect(response!.data!.addHistory.workout).toMatchObject(workout);
  });
});
