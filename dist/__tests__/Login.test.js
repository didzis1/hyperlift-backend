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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const config_1 = require("../utils/config");
const login_1 = require("../test-utils/mutations/login");
beforeAll(async () => {
    await (0, testConnection_1.testConnection)();
});
afterAll(async () => {
    await mongoose_1.default.connection.close();
});
const userWithHashedPassword = async () => {
    const password = faker_1.default.internet.password();
    const hashedPassword = await bcryptjs_1.default.hash(password, 12);
    const user = await user_1.default.create({
        firstName: faker_1.default.name.firstName(),
        lastName: faker_1.default.name.lastName(),
        email: faker_1.default.internet.email(),
        password: hashedPassword
    });
    return {
        password,
        hashedPassword,
        user
    };
};
describe('LoginResolver', () => {
    it('User can log in and create a token', async () => {
        const { user, password } = await userWithHashedPassword();
        const response = await (0, graphQLCall_1.graphQLCall)({
            source: login_1.login,
            variableValues: {
                loginInput: {
                    email: user.email,
                    password
                }
            }
        });
        const tokenToMatch = jsonwebtoken_1.default.sign({ email: user.email, id: user._id }, config_1.JWT_SECRET_KEY);
        expect(response).toMatchObject({
            data: {
                login: {
                    value: tokenToMatch
                }
            }
        });
    });
    it('Can not log in with wrong password', async () => {
        const { user } = await userWithHashedPassword();
        const wrongPassword = 'WrongOnPurpose';
        const response = await (0, graphQLCall_1.graphQLCall)({
            source: login_1.login,
            variableValues: {
                loginInput: { email: user.email, password: wrongPassword }
            }
        });
        expect(response.data).toMatchObject({
            login: null
        });
        expect(response.errors[0].message).toBe('Wrong username or password');
    });
    it('Can not log in with user that does not exist', async () => {
        const response = await (0, graphQLCall_1.graphQLCall)({
            source: login_1.login,
            variableValues: {
                loginInput: {
                    email: 'non-existant-user@gmail.com',
                    password: 'password'
                }
            }
        });
        expect(response.data).toMatchObject({
            login: null
        });
        expect(response.errors[0].message).toBe('Wrong username or password');
    });
});
//# sourceMappingURL=Login.test.js.map