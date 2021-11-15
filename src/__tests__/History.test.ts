import mongoose from 'mongoose';
import { graphQLCall } from '../test-utils/graphQLCall';
import { testConnection } from '../test-utils/testConnection';
import { createUserAndRoutine } from '../test-utils/createUserAndRoutine';
import { addHistory } from '../test-utils/mutations/addHistory';

beforeAll(async () => {
  await testConnection();
});

afterAll(async () => {
  await mongoose.connection.close();
});

const newHistory = {
  splitName: 'Push day',
  exercises: [
    {
      exerciseName: 'Bench Press',
      historySets: [
        {
          reps: 10,
          set: 1,
          weight: 58
        },
        {
          reps: 8,
          set: 2,
          weight: 65
        }
      ]
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
          ...newHistory
        }
      },
      currentUser
    });

    expect(response!.data!.addHistory.exercises).toMatchObject(
      newHistory.exercises
    );
  });
});
