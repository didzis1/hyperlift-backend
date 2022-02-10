"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphQLCall = void 0;
const graphql_1 = require("graphql");
const schema_1 = __importDefault(require("../schema"));
let schema;
const graphQLCall = async ({ source, variableValues, currentUser }) => {
    if (!schema) {
        schema = await (0, schema_1.default)();
    }
    return (0, graphql_1.graphql)({
        schema,
        source,
        variableValues,
        contextValue: {
            currentUser
        }
    });
};
exports.graphQLCall = graphQLCall;
//# sourceMappingURL=graphQLCall.js.map