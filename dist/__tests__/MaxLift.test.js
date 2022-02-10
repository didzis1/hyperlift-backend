"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const testConnection_1 = require("../test-utils/testConnection");
const user_1 = __importDefault(require("../models/user"));
const faker_1 = __importDefault(require("faker"));
const graphQLCall_1 = require("../test-utils/graphQLCall");
const addMaxLift_1 = require("../test-utils/mutations/addMaxLift");
const editMaxLift_1 = require("../test-utils/mutations/editMaxLift");
const deleteMaxLift_1 = require("../test-utils/mutations/deleteMaxLift");
beforeAll(async () => {
    await (0, testConnection_1.testConnection)();
});
afterAll(async () => {
    await mongoose_1.default.connection.close();
});
const userInfo = {
    firstName: faker_1.default.name.firstName(),
    lastName: faker_1.default.name.lastName(),
    email: faker_1.default.internet.email(),
    password: faker_1.default.internet.password()
};
describe('MaxLift', () => {
    it('User can add a max lift', async () => {
        const fakeUser = await user_1.default.create(userInfo);
        const currentUser = await user_1.default.findById(fakeUser._id);
        const newMaxLift = {
            maxLiftData: {
                exercise: 'Bench Press',
                weight: 100
            }
        };
        const response = await (0, graphQLCall_1.graphQLCall)({
            source: addMaxLift_1.addMaxLift,
            variableValues: newMaxLift,
            currentUser
        });
        expect(response.data.addMaxLift).toMatchObject({
            id: response.data.addMaxLift.id,
            ...newMaxLift.maxLiftData
        });
    });
    it('User can edit their max lift', async () => {
        const currentUser = await user_1.default.findOne({ email: userInfo.email });
        const maxLift = currentUser === null || currentUser === void 0 ? void 0 : currentUser.maxLifts[0];
        const updatedMaxLift = {
            maxLiftData: {
                id: maxLift.id,
                weight: 110,
                date: 'Mon Nov 29 2021 16:09:48 GMT+0200 (Eastern European Standard Time)'
            }
        };
        const response = await (0, graphQLCall_1.graphQLCall)({
            source: editMaxLift_1.editMaxLift,
            variableValues: updatedMaxLift,
            currentUser
        });
        expect(response.data.editMaxLift.weight).toBe(110);
        const updatedUser = await user_1.default.findOne({ email: userInfo.email });
        expect(updatedUser.maxLifts[0].weight).toBe(110);
    });
    it('User can delete max lift', async () => {
        const currentUser = await user_1.default.findOne({ email: userInfo.email });
        const maxLift = currentUser === null || currentUser === void 0 ? void 0 : currentUser.maxLifts[0];
        const response = await (0, graphQLCall_1.graphQLCall)({
            source: deleteMaxLift_1.deleteMaxLift,
            variableValues: {
                maxLiftData: {
                    id: maxLift === null || maxLift === void 0 ? void 0 : maxLift.id
                }
            },
            currentUser
        });
        expect(response.data.deleteMaxLift).toBeTruthy();
    });
    it("User cannot remove max lift that doesn't exist", async () => {
        const currentUser = await user_1.default.findOne({ email: userInfo.email });
        const response = await (0, graphQLCall_1.graphQLCall)({
            source: deleteMaxLift_1.deleteMaxLift,
            variableValues: {
                maxLiftData: {
                    id: 'This-Max-Lift-Does-Not-Exist'
                }
            },
            currentUser
        });
        expect(response.data.deleteMaxLift).toBeFalsy();
    });
    it('User cannot add wrongly inputted weight (string, boolean, etc.)', async () => {
        const currentUser = await user_1.default.findOne({ email: userInfo.email });
        const newMaxLift = {
            maxLiftData: {
                exercise: 'Bench Press',
                weight: 'this is should be of type float, not string'
            }
        };
        const response = await (0, graphQLCall_1.graphQLCall)({
            source: addMaxLift_1.addMaxLift,
            variableValues: newMaxLift,
            currentUser
        });
        expect(response.errors[0].message).toContain('Float cannot represent non numeric value');
    });
    it('Creating a max lift with the same exercise name throws an error', async () => {
        const currentUser = await user_1.default.findOne({ email: userInfo.email });
        const newMaxLift = {
            maxLiftData: {
                exercise: 'Bench Press',
                weight: 100
            }
        };
        await (0, graphQLCall_1.graphQLCall)({
            source: addMaxLift_1.addMaxLift,
            variableValues: newMaxLift,
            currentUser
        });
        const secondResponse = await (0, graphQLCall_1.graphQLCall)({
            source: addMaxLift_1.addMaxLift,
            variableValues: newMaxLift,
            currentUser
        });
        expect(secondResponse.errors[0].message).toContain('User cannot add duplicate exercises as max lifts');
    });
});
//# sourceMappingURL=MaxLift.test.js.map