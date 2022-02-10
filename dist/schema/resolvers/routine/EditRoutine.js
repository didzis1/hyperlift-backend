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
exports.EditRoutineResolver = void 0;
const routine_1 = __importStar(require("../../../models/routine"));
const type_graphql_1 = require("type-graphql");
const RoutineInput_1 = require("../../inputs/RoutineInput");
let EditRoutineResolver = class EditRoutineResolver {
    async editRoutine(ctx, routineData) {
        if (!ctx.currentUser) {
            throw new Error('You must be authorized to add a new routine');
        }
        const oldRoutine = await routine_1.default.findById(routineData._id);
        if (!oldRoutine)
            throw new Error('Routine was not found');
        try {
            await oldRoutine.updateOne({
                description: routineData.description,
                workouts: routineData.workouts
            });
        }
        catch (error) {
            throw new Error('An error occured while trying to edit the routine');
        }
        const updatedRoutine = await routine_1.default.findById(routineData._id);
        if (!updatedRoutine)
            throw new Error('Something went wrong while editing your routine');
        return updatedRoutine;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => routine_1.Routine),
    __param(0, (0, type_graphql_1.Ctx)()),
    __param(1, (0, type_graphql_1.Arg)('routineData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, RoutineInput_1.EditRoutineInput]),
    __metadata("design:returntype", Promise)
], EditRoutineResolver.prototype, "editRoutine", null);
EditRoutineResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], EditRoutineResolver);
exports.EditRoutineResolver = EditRoutineResolver;
//# sourceMappingURL=EditRoutine.js.map