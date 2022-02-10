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
exports.GetMaxLiftsResolver = void 0;
const type_graphql_1 = require("type-graphql");
const maxLift_1 = require("../../../models/maxLift");
const user_1 = __importDefault(require("../../../models/user"));
let GetMaxLiftsResolver = class GetMaxLiftsResolver {
    async getMaxLifts(ctx) {
        if (!ctx.currentUser) {
            throw new Error('You must be authorized');
        }
        const user = await user_1.default.findById(ctx.currentUser._id).populate('routines');
        if (!user)
            new Error('User not found...');
        const userMaxLifts = user.maxLifts;
        return userMaxLifts;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [maxLift_1.MaxLift]),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GetMaxLiftsResolver.prototype, "getMaxLifts", null);
GetMaxLiftsResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], GetMaxLiftsResolver);
exports.GetMaxLiftsResolver = GetMaxLiftsResolver;
//# sourceMappingURL=GetMaxLifts.js.map