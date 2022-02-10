"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testConnection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../utils/config");
const user_1 = __importDefault(require("../models/user"));
const routine_1 = __importDefault(require("../models/routine"));
const testConnection = async (dropDb = false) => {
    await mongoose_1.default
        .connect(config_1.MONGODB_URI)
        .then(() => console.log('Connected successfully to TEST MongoDB'))
        .catch((error) => console.log('Error connecting to TEST MongoDB', error.message));
    if (dropDb) {
        await user_1.default.collection.drop();
        await routine_1.default.collection.drop();
    }
};
exports.testConnection = testConnection;
//# sourceMappingURL=testConnection.js.map