"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dummyRoutineData = exports.createUserAndRoutine = void 0;
const faker_1 = __importDefault(require("faker"));
const user_1 = __importDefault(require("../models/user"));
const graphQLCall_1 = require("./graphQLCall");
const createRoutine_1 = require("./mutations/createRoutine");
const createUserAndRoutine = async () => {
    const fakeUser = await user_1.default.create({
        firstName: faker_1.default.name.firstName(),
        lastName: faker_1.default.name.lastName(),
        email: faker_1.default.internet.email(),
        password: faker_1.default.internet.password()
    });
    const currentUser = await user_1.default.findById(fakeUser._id).populate('routines');
    const createdRoutine = await (0, graphQLCall_1.graphQLCall)({
        source: createRoutine_1.createRoutine,
        variableValues: exports.dummyRoutineData,
        currentUser: {
            _id: currentUser._id,
            email: currentUser.email,
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            maxLifts: currentUser.maxLifts,
            routines: currentUser.routines,
            history: currentUser.history,
            liftingType: currentUser.liftingType,
            age: currentUser.age
        }
    });
    console.log('create routine', createdRoutine);
    return { createdRoutine, currentUser, fakeUser };
};
exports.createUserAndRoutine = createUserAndRoutine;
exports.dummyRoutineData = {
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
//# sourceMappingURL=createUserAndRoutine.js.map