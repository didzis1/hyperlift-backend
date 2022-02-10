"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const graphQLCall_1 = require("../test-utils/graphQLCall");
const testConnection_1 = require("../test-utils/testConnection");
const faker_1 = __importDefault(require("faker"));
const user_1 = __importDefault(require("../models/user"));
const register_1 = require("../test-utils/mutations/register");
beforeAll(async () => {
    await (0, testConnection_1.testConnection)();
});
afterAll(async () => {
    await mongoose_1.default.connection.close();
});
describe('RegisterResolver', () => {
    it('User can be created', async () => {
        const user = {
            firstName: faker_1.default.name.firstName(),
            lastName: faker_1.default.name.lastName(),
            email: faker_1.default.internet.email(),
            password: faker_1.default.internet.password()
        };
        const response = await (0, graphQLCall_1.graphQLCall)({
            source: register_1.register,
            variableValues: {
                registerInput: user
            }
        });
        expect(response).toMatchObject({
            data: {
                register: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email
                }
            }
        });
        const userInDatabase = await user_1.default.findOne({ email: user.email });
        expect(userInDatabase).toBeDefined();
        expect(userInDatabase.email).toBe(user.email);
    });
    it('User with wrong email format is not created', async () => {
        const user = {
            firstName: faker_1.default.name.firstName(),
            lastName: faker_1.default.name.lastName(),
            email: 'not-an-email.com',
            password: faker_1.default.internet.password()
        };
        const response = await (0, graphQLCall_1.graphQLCall)({
            source: register_1.register,
            variableValues: {
                registerInput: user
            }
        });
        expect(response).toMatchObject({
            data: null
        });
        expect(response.errors[0].message).toBe('Argument Validation Error');
    });
    it('Email is already in use', async () => {
        const user = {
            firstName: faker_1.default.name.firstName(),
            lastName: faker_1.default.name.lastName(),
            email: faker_1.default.internet.email(),
            password: faker_1.default.internet.password()
        };
        await user_1.default.create(user);
        expect(await user_1.default.findOne({ email: user.email })).toBeDefined();
        const response = await (0, graphQLCall_1.graphQLCall)({
            source: register_1.register,
            variableValues: {
                registerInput: user
            }
        });
        expect(response).toMatchObject({
            data: null
        });
        expect(response.errors[0].message).toBe('E-mail is already in use');
    });
});
//# sourceMappingURL=Register.test.js.map