"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGODB_URI = exports.JWT_SECRET_KEY = exports.PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.PORT = process.env.PORT;
exports.JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
let determineMongoUri;
if (process.env.NODE_ENV == 'test') {
    determineMongoUri = process.env.MONGODB_URI_TEST;
}
else {
    determineMongoUri = process.env.MONGODB_URI;
}
exports.MONGODB_URI = determineMongoUri;
//# sourceMappingURL=config.js.map