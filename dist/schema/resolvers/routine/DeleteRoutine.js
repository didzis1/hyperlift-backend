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
exports.DeleteRoutineResolver = void 0;
const routine_1 = __importDefault(require("../../../models/routine"));
const type_graphql_1 = require("type-graphql");
const RoutineInput_1 = require("../../inputs/RoutineInput");
let DeleteRoutineResolver = class DeleteRoutineResolver {
    async deleteRoutine(ctx, routineData) {
        if (!ctx.currentUser) {
            throw new Error('You must be authorized to delete a routine');
        }
        const routine = await routine_1.default.findById(routineData._id);
        if (!routine)
            throw new Error('Routine not found');
        try {
            await routine.remove();
        }
        catch (error) {
            throw new Error('An error occured while trying to remove the routine');
        }
        return true;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)('routineData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, RoutineInput_1.DeleteRoutineInput]),
    __metadata("design:returntype", Promise)
], DeleteRoutineResolver.prototype, "deleteRoutine", null);
DeleteRoutineResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], DeleteRoutineResolver);
exports.DeleteRoutineResolver = DeleteRoutineResolver;
//# sourceMappingURL=DeleteRoutine.js.map