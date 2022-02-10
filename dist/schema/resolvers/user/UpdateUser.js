"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserResolver = void 0;
const user_1 = __importStar(require("../../../models/user"));
const type_graphql_1 = require("type-graphql");
const ProfileInput_1 = require("../../inputs/ProfileInput");
let UpdateUserResolver = class UpdateUserResolver {
    async updateUser(ctx, profileInput) {
        if (!ctx.currentUser) {
            throw new Error('You must be authorized to add a new routine');
        }
        const user = await user_1.default.findById(ctx.currentUser._id);
        if (!user)
            throw new Error('User not found');
        try {
            await user.updateOne({
                firstName: profileInput.firstName,
                lastName: profileInput.lastName,
                age: profileInput.age,
                liftingType: profileInput.liftingType
            });
        }
        catch (error) {
            throw new Error('An error occured while trying to update users profile');
        }
        const updatedUser = await user_1.default.findById(ctx.currentUser._id);
        if (!updatedUser)
            throw new Error('Something went wrong while editing users profile');
        return updatedUser;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => user_1.User),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)('profileInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, ProfileInput_1.ProfileInput]),
    __metadata("design:returntype", Promise)
], UpdateUserResolver.prototype, "updateUser", null);
UpdateUserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UpdateUserResolver);
exports.UpdateUserResolver = UpdateUserResolver;
//# sourceMappingURL=UpdateUser.js.map