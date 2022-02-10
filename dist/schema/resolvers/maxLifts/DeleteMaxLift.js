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
exports.DeleteMaxLiftResolver = void 0;
const MaxLiftInput_1 = require("../../inputs/MaxLiftInput");
const user_1 = __importDefault(require("../../../models/user"));
const type_graphql_1 = require("type-graphql");
let DeleteMaxLiftResolver = class DeleteMaxLiftResolver {
    async deleteMaxLift(ctx, maxLiftData) {
        if (!ctx.currentUser) {
            throw new Error('You must be authorized to add a new max lift');
        }
        const user = await user_1.default.findById(ctx.currentUser._id);
        if (!user)
            throw new Error('User not found');
        if (!user.maxLifts.find((maxLift) => maxLift.id === maxLiftData.id)) {
            return false;
        }
        user.maxLifts = user.maxLifts.filter((maxLift) => maxLift.id !== maxLiftData.id);
        try {
            await user.save();
        }
        catch (error) {
            throw new Error('An error occured while trying to save a new max lift');
        }
        return true;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)('maxLiftData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, MaxLiftInput_1.RemoveMaxLiftInput]),
    __metadata("design:returntype", Promise)
], DeleteMaxLiftResolver.prototype, "deleteMaxLift", null);
DeleteMaxLiftResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], DeleteMaxLiftResolver);
exports.DeleteMaxLiftResolver = DeleteMaxLiftResolver;
//# sourceMappingURL=DeleteMaxLift.js.map