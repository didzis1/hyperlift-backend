"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const testConnection_1 = require("../test-utils/testConnection");
const faker_1 = __importDefault(require("faker"));
const user_1 = __importDefault(require("../models/user"));
const graphQLCall_1 = require("../test-utils/graphQLCall");
const me_1 = require("../test-utils/queries/me");
beforeAll(async () => {
    await (0, testConnection_1.testConnection)();
});
afterAll(async () => {
    await mongoose_1.default.connection.close();
});
describe('Me', () => {
    it('Get user from context', async () => {
        const user = await user_1.default.create({
            firstName: faker_1.default.name.firstName(),
            lastName: faker_1.default.name.lastName(),
            email: faker_1.default.internet.email(),
            password: faker_1.default.internet.password()
        });
        const currentUser = await user_1.default.findById(user._id);
        const response = await (0, graphQLCall_1.graphQLCall)({
            source: me_1.me,
            currentUser
        });
        expect(response).toMatchObject({
            data: {
                me: {
                    _id: `${user._id}`,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email
                }
            }
        });
    });
});
//# sourceMappingURL=Me.test.js.map