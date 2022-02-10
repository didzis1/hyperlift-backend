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
exports.AddHistoryResolver = void 0;
const type_graphql_1 = require("type-graphql");
const history_1 = require("../../../models/history");
const HistoryInput_1 = require("../../inputs/HistoryInput");
const user_1 = __importDefault(require("../../../models/user"));
const uuid_1 = require("uuid");
let AddHistoryResolver = class AddHistoryResolver {
    async addHistory(ctx, historyData) {
        if (!ctx.currentUser) {
            throw new Error('You must be authorized to create a workout history');
        }
        const user = await user_1.default.findById(ctx.currentUser._id);
        if (!user)
            throw new Error('User not found');
        const newHistory = {
            id: (0, uuid_1.v4)(),
            routineId: historyData.routineId,
            splitName: historyData.splitName,
            exercises: historyData.exercises,
            notes: historyData.notes,
            createdAt: new Date()
        };
        user.history.push(newHistory);
        try {
            await user.save();
        }
        catch (error) {
            throw new Error('An error occured while trying to save your workout');
        }
        return newHistory;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => history_1.History),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)('historyData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, HistoryInput_1.NewHistoryInput]),
    __metadata("design:returntype", Promise)
], AddHistoryResolver.prototype, "addHistory", null);
AddHistoryResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], AddHistoryResolver);
exports.AddHistoryResolver = AddHistoryResolver;
//# sourceMappingURL=AddHistory.js.map