"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const resolvers_1 = require("./resolvers");
const middlewares_1 = require("../utils/middlewares");
const createSchema = () => {
    return (0, type_graphql_1.buildSchema)({
        resolvers: resolvers_1.resolvers,
        globalMiddlewares: [middlewares_1.TypegooseMiddleware]
    });
};
exports.default = createSchema;
//# sourceMappingURL=index.js.map