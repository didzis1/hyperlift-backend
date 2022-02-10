"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const testConnection_1 = require("../test-utils/testConnection");
const routine_1 = __importDefault(require("../models/routine"));
const user_1 = __importDefault(require("../models/user"));
const graphQLCall_1 = require("../test-utils/graphQLCall");
const createUserAndRoutine_1 = require("../test-utils/createUserAndRoutine");
const getRoutines_1 = require("../test-utils/queries/getRoutines");
beforeAll(async () => {
    await (0, testConnection_1.testConnection)();
});
afterAll(async () => {
    await mongoose_1.default.connection.close();
});
describe('RoutineResolver', () => {
    it('User can create a routine', async () => {
        const { createdRoutine, fakeUser } = await (0, createUserAndRoutine_1.createUserAndRoutine)();
        console.log(createUserAndRoutine_1.dummyRoutineData.routineData.workouts);
        expect(createdRoutine.data.createRoutine.workouts).toMatchObject(createUserAndRoutine_1.dummyRoutineData.routineData.workouts);
        const findRoutine = await routine_1.default.findOne({
            id: createdRoutine.data.createRoutine.id
        });
        expect(findRoutine).toBeDefined();
        expect(findRoutine.description).toMatch(createUserAndRoutine_1.dummyRoutineData.routineData.description);
        const userWithRoutine = await user_1.default.findById(fakeUser._id);
        expect(userWithRoutine.routines).toHaveLength(1);
    });
    it('User can fetch all its created routines', async () => {
        const { currentUser } = await (0, createUserAndRoutine_1.createUserAndRoutine)();
        const allRoutines = await (0, graphQLCall_1.graphQLCall)({
            source: getRoutines_1.getRoutines,
            currentUser
        });
        console.log(allRoutines);
        expect(allRoutines.data.getRoutines).toHaveLength(1);
    });
    it('User can delete a routine', async () => {
        const { createdRoutine, currentUser } = await (0, createUserAndRoutine_1.createUserAndRoutine)();
        console.log('Routine created:', createdRoutine);
        console.log('Current user created:', currentUser);
    });
});
//# sourceMappingURL=Routine.test.js.map