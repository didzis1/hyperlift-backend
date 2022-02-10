"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const graphQLCall_1 = require("../test-utils/graphQLCall");
const testConnection_1 = require("../test-utils/testConnection");
const createUserAndRoutine_1 = require("../test-utils/createUserAndRoutine");
const addHistory_1 = require("../test-utils/mutations/addHistory");
beforeAll(async () => {
    await (0, testConnection_1.testConnection)();
});
afterAll(async () => {
    await mongoose_1.default.connection.close();
});
const newHistory = {
    splitName: 'Push day',
    exercises: [
        {
            exerciseName: 'Bench Press',
            volumeSets: [
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
        const { createdRoutine, currentUser } = await (0, createUserAndRoutine_1.createUserAndRoutine)();
        const response = await (0, graphQLCall_1.graphQLCall)({
            source: addHistory_1.addHistory,
            variableValues: {
                historyData: {
                    routineId: createdRoutine.data.createRoutine._id,
                    ...newHistory
                }
            },
            currentUser
        });
        expect(response.data.addHistory.exercises).toMatchObject(newHistory.exercises);
    });
});
//# sourceMappingURL=History.test.js.map