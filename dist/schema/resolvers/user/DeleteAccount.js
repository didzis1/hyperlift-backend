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
exports.DeleteAccountResolver = void 0;
const type_graphql_1 = require("type-graphql");
const user_1 = __importDefault(require("../../../models/user"));
let DeleteAccountResolver = class DeleteAccountResolver {
    async deleteAccount(ctx) {
        if (!ctx.currentUser) {
            throw new Error('You must be logged in to be able to delete your account');
        }
        const userToDelete = await user_1.default.findById(ctx.currentUser._id);
        if (!userToDelete) {
            throw new Error('User could not been found');
        }
        try {
            await userToDelete.delete();
        }
        catch (error) {
            throw new Error(`Error while trying to delete the user: ${error}`);
        }
        return true;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DeleteAccountResolver.prototype, "deleteAccount", null);
DeleteAccountResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], DeleteAccountResolver);
exports.DeleteAccountResolver = DeleteAccountResolver;
//# sourceMappingURL=DeleteAccount.js.map