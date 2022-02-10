"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_core_1 = require("apollo-server-core");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const http_1 = __importDefault(require("http"));
const schema_1 = __importDefault(require("./schema"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_1 = __importDefault(require("./models/user"));
const config_1 = require("./utils/config");
const startApolloServer = async () => {
    const schema = await (0, schema_1.default)();
    await mongoose_1.default
        .connect(config_1.MONGODB_URI)
        .then(() => console.log('Connected successfully to MongoDB'))
        .catch((error) => console.log('Error connecting to MongoDB', error.message));
    const app = (0, express_1.default)();
    const httpServer = http_1.default.createServer(app);
    const server = new apollo_server_express_1.ApolloServer({
        schema,
        plugins: [(0, apollo_server_core_1.ApolloServerPluginDrainHttpServer)({ httpServer })],
        context: async ({ req }) => {
            const auth = req.headers.authorization || '';
            if (auth && auth.toLowerCase().startsWith('bearer ')) {
                const decodedToken = jsonwebtoken_1.default.verify(auth.substring(7), config_1.JWT_SECRET_KEY);
                const currentUser = await user_1.default.findById(decodedToken.id).populate('routines');
                return { currentUser };
            }
            return null;
        }
    });
    await server.start();
    server.applyMiddleware({
        app
    });
    await httpServer.listen({ port: config_1.PORT });
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
};
startApolloServer().catch((error) => console.log(error));
//# sourceMappingURL=index.js.map