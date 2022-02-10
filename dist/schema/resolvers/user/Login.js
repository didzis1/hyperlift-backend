"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginResolver = void 0;
const type_graphql_1 = require("type-graphql");
const LoginInput_1 = require("../../inputs/LoginInput");
const user_1 = __importDefault(require("../../../models/user"));
const token_1 = require("../../../models/token");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../../../utils/config");
let LoginResolver = class LoginResolver {
    async login({ email, password }) {
        const user = await user_1.default.findOne({ email });
        if (!user)
            throw new Error('Wrong username or password');
        const validPassword = await bcryptjs_1.default.compare(password, user.password);
        if (!validPassword) {
            throw new Error('Wrong username or password');
        }
        const userForToken = {
            email: user.email,
            id: user._id
        };
        return {
            value: jsonwebtoken_1.default.sign(userForToken, config_1.JWT_SECRET_KEY)
        };
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => token_1.Token, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('loginInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [LoginInput_1.LoginInput]),
    __metadata("design:returntype", Promise)
], LoginResolver.prototype, "login", null);
LoginResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], LoginResolver);
exports.LoginResolver = LoginResolver;
//# sourceMappingURL=Login.js.map